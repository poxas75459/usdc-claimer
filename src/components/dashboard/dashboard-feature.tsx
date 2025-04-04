/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3ckqrU2fRJh3GdYWc2gKGc2QTYvKNSjXtnLUjXaCyB3PY4zYD2XgjqznXC47Ycmeo9icuzemPWN9MUMe2oWqsShU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53FWbBzGiSn6MJibz7Cy6t2hhPZX7MGa5Ew6ixv1PLn9vYDFQU4K7fNFzcvZctxcB7QtwGtAc4A3RipBWEU9L4qC",
  "key1": "36ELDarcQ8AmjRujRHwpQpB33NDBpSPSeDLjPnjMLrtaNffNUCYkNPWm1J5FrMHSujNsrhkbYdwo8SvJJGqL8Qtj",
  "key2": "DfFg26uDEBJhmtfgfSUhARy26VfwoBpj5gzHiHSj1LtSGWFGthw7qPNJCwUScyfXY8EfP21EzjNxgB7ubMEjuxU",
  "key3": "5ftmyMDHbzMEjsYJy3iEVzC4fuFaQ2rAjqe21G6chcmjn7xt9qxrje2CjacDD6h94gwNpQvX4rsqcTdGzgBqin3x",
  "key4": "5NwBY4tXGAmqYuExSWswBikfrcYXJ3YYcrLK9tArbHHRXcL5Zq7tBt8u4p6N9Xnf4tcPUB4qY51y89sFpq6miLGp",
  "key5": "3ZHD1ThrVYK8E39pMaFtAwRikmfASLS7cDyF29G4YVEpupLfMSbToqfpzJTvvMXqfwcXGpAgMXDFY7KuiNZRJz99",
  "key6": "4yhpaZ915DrbJXhmmw5zNywrRJCwWkgVzu5wxuSpcJdu8A7hT7hQMJVhDUDq1yhLyykfGTm5viy4e3SgXEynhhfj",
  "key7": "3MJjtT7vAuYprJTu3M7NLUtXkbzFoou8x6nXpdzpv9Geyz5TdSsjjZ6tLLEta3QEs83YZVeRsQ77WY5zAFGkqK45",
  "key8": "3HTSLWAU6PXz2atHH7uuN1UMoc7rDswCZu5yqR18Sg1axNppNLvgWfbfikRCY5hvnJ92eGRZJbFVJj3K7umBES6G",
  "key9": "4CBDojBmeQ8kY9pfgG4H76nCDXzFYN9UkvY3ajYd8cZgKi9jqJWYhxEEB5B1qQeT7DvAT838ErRUSx4wC3uqKgjQ",
  "key10": "43opMgQ9CgU2xVDQDsmZ38w4mNteeEQqDPAqnL5ME54MKab3KRRMmCV531eGFAHacwaeqxJZLAwjVJmk1J81LcRD",
  "key11": "2zNmLm8GLhMN9keJeENXL4w6yJ88kEr459QXNQp1SaFufMgbjN2oJ9NaxLEEhWhwZvyN6GPXpha2b89S26WFMw6D",
  "key12": "5UrjU4S7RSxxxxWt9u3tRmEZ4DV8oXuKMMjhVHGsQ1rxYnQLFMfuj1v2sydvbbRdAKZdC6dxD6XZ1CoecNhVU2Jj",
  "key13": "4QUFxJkViaFKNjPWpVh9RKpHKGZDjr9YJ4i4umsfsFYM1PEPUooAgXT638XjQbKqE2XkEXpbcLwKUkjR8q3AfhGP",
  "key14": "5e8yKpzZBKZF5XDDXeaapKX47LcuYPiN1iPMGz3suwravCFZS8oW3B213y9n7f7Q3ys2aU6f5kvDzh47JcF6AyQD",
  "key15": "5yeusCLaoT4MZVJ3xdPXjnXr6jbvqaeUJ5xbGQt4ssCxuaJMaMjwKo9k8bNCTrQGhS93RpUET1FBiZvC5PBfLJeN",
  "key16": "2bRyXB9UBi22nA4FuCpPimQuHYKb5rL2pxVeGC4a2H1oeLb6qv5x8PAUWxxJTiDH6sY7dV9N2Fgx38BdvECGDP9x",
  "key17": "3PM1kVb7seYXBJXKTytqQ75N9ydExzGXpmyji66RW9wBgcvPKYvb1wtgYPWdc1sLZZRDYY97noTfwdjdqskRPT5N",
  "key18": "4DXvLfsjkVDrQvomudLmM9xxBmmBjP4StBUMKB2B1xGoq2Vr6tPVxGWWEAUA6RLVc9RcFzN4yU4PJBReNRLNAU53",
  "key19": "2a9tDtrYiJyxzJrzkCawJXgLYR6TdwH5ur9aM32ahPX99WkwxXNyxTcMREfQJE7KG4xuZxGL1vvdRWo5Tyo5qkZC",
  "key20": "Lv98yA2beg4RKQY2TvvjxsjGy1qcz8EDJchpQfLeY8FyTpUtVwitLEJWBJeB9VzBPFjq6GerS9mtZg8ARHv3oVy",
  "key21": "3frADzRvxUXvYSAx2VpgoobcBGixbwzy8grXbXQL9JgaJh45o2muE2PbgGaaHZxbmq5K9MZdpfwXBvhaKwheTMMj",
  "key22": "3stpH3piREaHCrD7qFDHWo76DNGpPn89ruUeW7gZrYodGFFPdhxgfkVxmrxKjonaf1ZqJy9MA4xbCCsKunDYiEaR",
  "key23": "4KNe5bpspHqgHMuNUmqyf1sGeUiwFNtyWCpJNDWqYSi1SWAGyB612MTtv97tXrdvZFMbGkgPX2oZF2LK4Yk1iT5N",
  "key24": "3E9ykUEZFRt4i3RHSLHfo6gcUPDtMpZ63kD2us3MaAiTbkxxe6zu6c6JtNKdEHzrykQLvTG6unjKzK3oxpB2ds5h",
  "key25": "2eSV4RGxL3UYqvsGVYXg1cLX2d4uE7a6YFZgXyb2CxhVGB1tVRq4q6zv6iaHzY4Cmz544E66M2xHiXYy6Jp3DTn6",
  "key26": "2wCnJLoFJ5dgUZ1fVgCepzq1VsLQF8vzieqpM8RUExHShwnxEtq9ag63s8gy7PguJGFsnHme8UXdZxx1ELsnSYL7",
  "key27": "MUTMHmXuuT64e7HyVzeprdbw2zRE1W32zdPtf7ADbctFA3qLA15Zb4GugxzaUjQpyv4qwPcxAnyLoz2tuQuBA5P",
  "key28": "5Vb4v6rZivWDu5oUJuYWWxgzSaBtVRMxBsk8bj6pyhUHNA4LQWjmsteswKEnC754i3LQGSE8MmQ4AwfmWKuXey4d",
  "key29": "2BdYccD9RGNGLDbqwohxb4k4hYCrHWrcjbeuJx4bFn8f7foWqc1EDcPnrCdgBjsHoJLW7vdgamjovWzhQL9rLZaj",
  "key30": "n9S8Z4yKwv8dx6pZKnsJnd3on7Sj8uUkhmRfsw4UymVdPS3V9xAWUwZ6ce9fDU4ipyr6h7yxfxdCFYYQrnoKiAo",
  "key31": "4JAVVFsuQtoh6PE2gbMBuoyBXpPknCU6BzwjbLZMePMfDWErPutr9AVCHhSz41vSDgN1xpCgYJRPSrzuVwHFwJgU",
  "key32": "3JG5NxL21nriADF37MVU3ZyuAiBEMkv6nCA2Y8fEJgYF9YrffbuDiv1s86pLLZPbNvveST55nDNpN5T17ekM4aaJ",
  "key33": "62zPApEJJsYfT9ALqYRfbrHxXm1faheYgxX3CvCrgMPFtzMBZJjQSxDSE8UK92hmpodnhuGSQpKfpS5422rVU81z",
  "key34": "22gCvSsJKr22rkMaomBgtBC2GFowNP2dALZsBocV6cmPzsnccrx2oQgDWMFiLnNR7Hgi3CJ6dctx6zrXSgASmVDR"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

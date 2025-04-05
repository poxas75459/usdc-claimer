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
    "ammZY4sAMewWUBUr3wbQjV11JRFFu7wTxPevkm3eecNeZ5Wt2hVth2DBW6FF9tpHYQfGZp3gCX3BboVhB3PqfEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e4eMG8tyCa6EayhRz47iCiLb3s1n9mkMKPx9bmeszEpEz9wARyg29rBS1vBr7RZwFBMYsPE7jhWbHwxyfsPLsN1",
  "key1": "3kfWAaMt9PBoYncjarXzkqMYevBDdenLek3g7AG75NBWigLwFCh9FdJpoSoXe6Xm9PGiz16cdX8vMMhfpUqR1kYZ",
  "key2": "2veTXN7AdTRR1tx9PM3uMkbhyyxkPJwdzWrqG1vRqfDWRLuTdpbXF1NXKDRG7LngShmMdEDYGE1YFdSyEhReFjcr",
  "key3": "5Bd2wStDurauGcH34Zab1oX938GeE1tFgkEXWkUdTtm362WKYtTXv6nuXfqH1jD4ZUtHTTTFxqEnjrTH7BfoZYm1",
  "key4": "dqCiWUgTrM5prwiZn9ZdChT484x6WAr2VforkHg9xdZmGdrJRgEZTdNko3X2zgKsrWvxCBzoWPZARsZLFbuS51G",
  "key5": "3erGEReVbuYG3BrZdnat1tDjxFgiHK1WM3rWwaUZGfioEEXpv6yvpeQ1LQJHCgUYbzs7utNxfDwVcnigRg186owr",
  "key6": "5h7YxyWAspU7gJpeQxueKPdy3V2P2spSNufZ9VrhapkoYYLPD22Ju5hsmELQuBfZ3GUZ4hNP2hdGcRq5bRSaNnVV",
  "key7": "2jwMzyTcLeM7ZJDRZ2ALcZHezoUZybXB22dBG8UNgyqMP5PHRMYnCijAYxMTUhrfpMrM7HSQbCD3DAsrPBbsyNzJ",
  "key8": "2Z9RzndxAxK6p77MHEPcXhczCtsEV2cV3GLyeMePTh8bMyyi8vvgXz8eDtWigGKzkSCAdthwFjJemtGZ291VwDhr",
  "key9": "3PeaatysCx8KJiCgFM7F1eVtkxfbxW5DM1Eygo6qdSPBCPi8DtTmF7an8rgR8jfD5VyY3YVvQAziWC3A4tL9u1To",
  "key10": "12AFHmi6ac5wRUKY5bainsKmUV4WkpY5DRa5QWb8eVnCKQjkj6jTVinTsgRokyKvkFnPMM53HTF9vBkcgRKb2hXj",
  "key11": "2dJaoxxZ14DLpVc2w8tjZbUepHUPGk1xXzaGZM8VmPDTmMGEyJQDurCJ56Z1BEnXFSRLCLY5kaGAv8vPKJ1WdVyp",
  "key12": "2Cdu26ky5naufkok5PxcLxtofGoX9Vbfhj8AUqNozcnmxShSGKYzRLpHAXYSD4UKaH2LixDcZdSPHwJFhmBjWKXk",
  "key13": "5oyDxWwVrDCojmhCLMUBrYahMHbQ3fQzxvqsi8H5ejukjqcCyxyLJAoM5ha5gkg7ra9PWmPZBK1P5zAwLVsiRiuD",
  "key14": "3P1Fav43UkXnsKPZS6E64aq1sJkEzEn1QGYjUAUBKa8WbPBsHLQogJwu61nRjeHnvXUBfiQQXHqmQ5MjKowCYsLc",
  "key15": "23ecrH5Sk2bdKRieCLebGmduQGjX5G4YVLe8fZcWYxz6BrntHbrVGJ5L1r1DEUgt8RUxS7RxeHTN1N7G1RP4XQw6",
  "key16": "3JuapTgFE2i3coEiH1382XBjrWDZmuEZqYbhgwvHM1UNDo8NKATEe6ZtrPR4LMcSn9R48fvcwoSz3SHF9aHeuUfZ",
  "key17": "3NviE9mN56d4vvdpHquyh5ZCwkguhgG7nUvzu1DbMepmdc8NXLdea3Fz4799UqAstVPS7PmwDMkvNHfS4FbiQeiD",
  "key18": "25YrovSDuHBxXKPxqrMqGEZgb8EcuuMdBB5AADru6KvK3YJXGqxAyhpgSiWy5hDkMQRMg8JT4n3Tga9kmhpQsaKK",
  "key19": "2V1KD6kmNbaGQfWwNhkuMTmP2Z83X8rPvLiNpcVza5bRL5dfrf3T3NT5yax4oiWGTzrPTNj4khGn8SfroR6Q1AFa",
  "key20": "3m4veSpoMWoq3op276etipJALWGogTwHWxXXVBQ2ste8qSMHqTZGasKBhFVJPW8CAvwnoBDfMffWJFK1rHjycbTo",
  "key21": "2W1p4wzby81pfFGUMLZ1tCrkLWv4e8iZhDxRiF716gG2uBzjBu7XUhyBHex9QGpyr7Mdvwrq1s6YUZWy4ctCX9gg",
  "key22": "37K7TKZTkCzFq6VvQumts1qYD7C5MPmzswHx232URFqfcpX8jZeKkWJKyXtZAV6vNiaRSQHqwFyLsdWJvLVA4LM6",
  "key23": "4UESZ9vqHwJxm6mrdZiayuQzgi2FsrX9dZYps2WR1ztDAhKmGcceNcs541Uf9hg49c8nYdzXPQuhPAkHSfrikB9d",
  "key24": "ukJN86wXaXxbEWYnTHeKeYfxSpWppH4EvWvaN7ZYiJknX2azyiu3xuUUekBghyyQ1TeiPrxw9JY6dWF9KbLXE3E",
  "key25": "36eDiJ3stGmskm1Yf7KfUjpAn9N6KYKwKNGbVPDMfiVgsJXGnTBU3euqB7vKRHEdpBRmPTpBK4Fijm38v8TR9cnr",
  "key26": "267yvVxEPSxYE9sKsQ7KxJE2LeG93P6uK2MKkFjZjjXA4QaWXL5ED55HekMydMP5aaUwnb2XhbcEAoCCJXvGnt9U",
  "key27": "aywrVxiEFjYxTtVKYhAEcKrTe1mRVTEFAu6MvmUNk7KyXoqQ48u4Nf8Rd2zTMvKLz7uiu8YXbYFkBGoLxwk9cr9",
  "key28": "3otLuCEpKZZabyv2yFssCr86L3SK7iB4rHjhVGoWmMUWpY2122xxwPDWoqivaNaccemkSUVgRHHUqaWruTTiBtuz",
  "key29": "27gSJ43DeyjzXBGH51orA9tmTNNxa7ww5rsv59HMYNpU3yXWW9wvc2mx37DtFfdQBoHuyh43PkvWgz36AyLMjozs",
  "key30": "AHs5bk2nQMpEEHSHZamRo15xtt35BoafW7A3wt2zmhCu4mvH8VM9cNXnonBzr6TVGnyxoPvs6bUMrTC8SS5qgh3",
  "key31": "4weDSAAjHMXQsZ9hXEgEGuJDi6tcAahjvJa4z7JHqtYvjXGmt9gPekKqi7DwsuWSZN6NYBVaQiTNRXcoWWUAWjjR",
  "key32": "4K7v3EdUndvKd52R1nkmvdaV6CZ2WeSnykfkf1d6R9fHmftgBtEZVPyppFBqoBWWdL6Ybiz1RNELs7FLsq7goiRJ",
  "key33": "3BGvU3325RN7skYyPRDoyE13EcUPKaFoXRxjeJ3dxVpegQZbDDkAwXfc5LVvYZkhhneETbn5LHoMGrpu25396kwp"
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

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
    "4GtfEfiko9VeHqUNJR37YqEcaqs7ERou8QgK8U45mJ5oy1tHQ3My4K5XFj6sSe5viyDncdxP81HsXxp4A2675PZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j453BmGsR4B3y4UhV5NRXjKbNrgBLgKUUKZcRJ8k5nj5N5T6RjsQVGuJWUT9KHviuL3SSq8QNqRw2eoA3pLQ8M1",
  "key1": "LvNCHNqSmN396e73xyEMjTptt5yzoaHAMSg9JgP6cgdeZfvepZS33fHRU1XcHDYADn8dD8rNhQz6DfVpuV1WX3b",
  "key2": "3kd4uVknAjXzR6RYq2LCPzNoRXyYEq9u8872KETHVEZ74jWLsueDWuj8SFQhsDTEcpUhmkYGGJkHvyngxwA9rQBQ",
  "key3": "ZTu2SZrGeiGjpt39U5hGw9RVx3Lg2hMiozxDTB49p9d7FfvyHk93YTeyzeMMfx51to261KGamZQiBURSWaii6Mt",
  "key4": "3xBjn2h1hA444C9ay7Mx4K132fo1piUpEWRvZe2b2yh5hm4H2DjdJAVDikgmWegRzjFs6Y6uVJQmYwi12cFz4WCb",
  "key5": "5ZWQKTERpXQB6CWo6xUx3RnZr4K27D9cQPV2dkbJLxf163ctaQJehcDUb1QsgzbQe5WA6jsHiGGZxYd5w8FPbyxy",
  "key6": "5FjkDPo4G2s7WkFTQbp4wW2JAHuokCETuSuQwayRLmtBeSKV6L19MpBybBw9YnEgGqZNzW5XNozeV2oNLrWVHNBe",
  "key7": "5ZRHMkL7oqPLju542cBtXCjD5vnn2AJfeCd18exDrz7FR35EdkYXVh7rn4MSwqHRf8uxaeUBzB1YGCzv3JdoxmQM",
  "key8": "366a6Awf79hffk5PyNoKeXsJUKfjDrZwFSUYGF793fExCThN2kk4Zjgv8Em5PrbGLHN7U1bbyyaPJ7uPSMwUhXMB",
  "key9": "5gtNR3MYGan5XQNAo98Xbt6PkBsWPKBfk5dgMofzWDsGr43FjTiUrS2bipfud1ir9Z4z2ZERNuvtfHFkaVBRvD9o",
  "key10": "62GUvEXjrXuqe775BHqFMtgRU4cDLvURRaSKSvraMwqMcbAERTBAHEoVhEogWg1tYdrqsiwQne74K5JEnod1HBYt",
  "key11": "DtdfvcT4pRx7WDNTs3u2HVsWi9yTP8EcLXX6Euu5woSVHKpZWKtzrZwD6L3KH1qyQjXyG5QEeA3rXeHBTiDvGBj",
  "key12": "3RMQXpvuGeggrGA2wj3R32CAm5rEov1qQpdC8CN7JB3GvMJ4Xb5WvsRsNqvn4wDTjR1HSq9SnuqMEgQ4VBJix9Xz",
  "key13": "22VW4UL1w9s4ZNvTQDdU6Qja1k8uwCzupwoK5n5ccT9dPPwHcncBCktvwYCZwLPGkwscic8ELzm84trEzdo3ZmCF",
  "key14": "4uJXSVEgiKDbfUnMyYRBuL8WZjzWJJoRhDKBgTxXLTRbyiu2fFnrWTicSLUYWyHhhX4Zdw84pJqjh1adKaBoZvqN",
  "key15": "5CDD13yvo4Dh4pEhtDGJTAaUcui4icYxvPLR18Sj1eZRG7rtPKEHkerFK1gFzarswaUsDsSEpKP1Gf1H8nF2tsXH",
  "key16": "5f3bfkBKWru6gSbmznPwPotktHVpVmgbFjmGX1LtVRePrmCb9KHRpTTK9xYJ7P91FPPRSQJgMJdULn3pHykpvYsF",
  "key17": "4QznbxdFXLne91uiGQ4kZJmrs2ntztZsDzBdLVYrMhWycMayGPG3XfwJXe2J4dL1ctZedakcx9rqDvtFyXUXjG1j",
  "key18": "2m9XXULy6JnRaFiqn7pT3z724osHdUFcMUSYfBXY4fBM76xfCAdQdn8gn6xR5YXL78tLJvXFkDpw6azXNYBEyp11",
  "key19": "EGR1QHPqdRdtXWbzkc6GnVDGTQa4Gy6m7FM67TLrK3J52Qzne4ees6PspCnKqbARu1amBKdWG3FEyb2cndJh6Jr",
  "key20": "4z8HWQQqtEhedzanuon5akGAxk9sC3PXHY1X3MGiix3rFJ7jtEeoLJZBasTWjNa2SzSwgQZyxEEWUgpBhpWFTPYt",
  "key21": "2Qc6bPzbyhyj1ZYT2fADRrQMDXZJ9pomYpr1XqiX44qEenbhDodbByB7LQHEHZgAB1XKsW1VHHXnLZLLfVJjKwDU",
  "key22": "3MmtwjDg4emMEyyePLkaLCayppdnarCGz1JeghN2SbaZFurDWmeuxLeAEwigFGYjtJE3HXZMyQdCwzCwipiCXkWm",
  "key23": "3rtMPZ4MukBM21FEPaoPxd1zPF1f6EgYCbZJuEtvyH4UXkJwEPff4MpUT9Ddf6WHovPFbsfPUdYT6TRKdCFZx1w3",
  "key24": "uUYXPukSmXr7JNHiZ32iJbKAPh9fnGRqz9sMFUMrqgAaXqyX9KA7a9htvRWmNYSJiscTPuCMAYj4v6skRoQ1gnW",
  "key25": "A9XGuXBf2sq54ycHzzCZ86JC4kbDDe4XsV76rWsSB94a33ZHgnL9NbxvY2RG7udtfTLu5txt3Ae3FqADmXdzk6S",
  "key26": "31edVtfDGoHHfnW7smPigPgTDTACzAiiwuFvGzunLLR5WCJJz2eJWSu9VJ3eivjG37GRcH6qUJuycvsLwgEGVa87",
  "key27": "3KAdEpWSo98fKgVu1EVXJjuadNE4Y22jQp9iANXMPmbyrXPJimFYukJ6thuEa71RpJnfgrhMyygZYzGY6BGkqBqY",
  "key28": "4JAUiQbzVMuTo6jkwkWUAcEwduFLLq22wvWe38phxD62mK35u1j2DKRCGz97G5stDoR36cqzNLKxKzbNpnejDnXd",
  "key29": "4zvmLvosaZEz1ii5N34mGLvXZXJ5bvH6okCWrr5LBNuzTbwLZuxrwbBeCRXZy4gWvWMAWgHybh8NscB68DMW4tb7",
  "key30": "5AGtaVNnnxHESBDMkqzJWwXGLgGYKgFmrNNfV1zwpugzGbpY7o1dXEB9c4WSRiq3DxEvr1SW15y3DBXRQjkJYbAp"
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

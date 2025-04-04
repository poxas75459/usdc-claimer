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
    "4VQACEoJfshmYZ3B7332ZhkKy5mzHAE9gKvXKgGmEVvosXUTCsjZw58FGsHfWjs2v5B3TKRHostRG7JJPnxgjdYU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwM6xgfY2EWAfZErrWdc4khpHNFv4s2HCFf6ZyUqUKrzHJvsXNrydAKx5xABHb6w3FbCiZcQSWJiDNQRphmGsxS",
  "key1": "44hkkYqvYHfqF2mY3uBAnbaxYi4reSzDm8CYocV8c9T3C2h33YE1jfUqQ5xvMkdfkA3XKDcW88zma8sWuw6YWUH",
  "key2": "2wzZu4dq2PeQnw3vc9jfPwyQGf3DqZZCjPQGPwax6ruM8GwpN3qvMWHpesjb9Q8H1Bo6nx8Cv2cboF9K99BP1M7C",
  "key3": "3bN6mBLrqx6zaMjvJ2R9TrucsDa89KhE79PmCt4YK6PeCAijnvuJ2UZWrRuDjg16B4QrVh2tVCYVgDeTQi5fQX9V",
  "key4": "23tv9mscdAATdz5DW9MvhetiEdQb12eP2eRYSkzA3N7dKM3tRXe5uXhf2hdLNZ9y8VPPsJXZF4EfgTCnZHCbL81T",
  "key5": "3XvQtVak9WEnLbLxThx647iUTL6UBQdvqmYvb6a4YZHqTqvzVNUkogcbwiFqnx7HE1PdrVogzaK2pydZPzeZbqBn",
  "key6": "3dKWdsptMmaGaCP8YnYHN7P1aqqCg6FDqzQxCfLpA68f7x9zr6cgsa4UrvMaKu56oN3B3qGvhRjGpknLiMyWQxaB",
  "key7": "3hDoNrxg3VCC1ghvrD74buA1jyKjUw3VhsLzPCJPpedWHWgUkzrCFnBqo3h6KaaMTwEzyRxKAr5XGfb8iEtGPrbS",
  "key8": "4ZKcornWiuMGXwZkww5Eqmz9CZR5cxY8h6H9JUHDKqPZ6qLMonRfWoaKBjrK4Gi85k4krzJ5kHXRbJCL11qpjzZv",
  "key9": "47Hb1zZH2SRJtfk3v5yhGTXgSpSUJc8kH981Gm5dU4ePNztwTYTDngTsk942YiisFTHhwGNgSdT6HBDxsniifBfw",
  "key10": "2HwEh48wLiw68mXKT7G5cHChFYraudJBTj7kwAuprozsGzmCApYoQoFwqg7kXFYv4Ex4KAX6wFRPKBjYD1tKRXGy",
  "key11": "4Yv73EcpsLXPjYf51VGU6dEPVg8jroiTPnCgk5W6TtxSradHXWokpwEKwVE3kySyi8Xoj6jywHYsAZPRmQwz7jf8",
  "key12": "3VyeD3noaHq9wrUUXL4pA4a3RiTevus2wcyXTe19B2qyaXqdrHEVdynuj4K2tRikw3h1YmZp1LBJJqaHcFtiYpw2",
  "key13": "4Pef122MZbxLLZuzedqugTBDtqyZufVNQp7fNEr28GR1bPaYcMysa33rA1XBzw3xDvQEBuPf4fiEHBYpCLZX5yM9",
  "key14": "aSnTmLRGfmGCfecupT125xF95FXF2KtVoarcDiMkWvMGSm5ZB4EhHYdYWdTSRtZ4FLXxqxvHcKHh3GeF2n6hAY1",
  "key15": "5cWshXwBeP1F8mtMA1iai2csGepSNFeKZSqX5Ay6F15BbnVMDzqhWCLniCa2TxL4MQmYpY1rsY11ZKKs7zcCGA6R",
  "key16": "2486CUzKvCxkniKp8vDtFr5RZB4dzYmH2QUEAJV6xcXUhGgsn3dj6hxj38oqZSBCu7iDtffW9Qoe3nxcTTHpTDRT",
  "key17": "3DcWsQkuTSQWLfgxzgUPxQ4QoSDhgRrw67fVMZJsHLfgGk8ACACuNWE87z49sYL628GRwk756fFSqmVz3T6TYCCs",
  "key18": "DVpZGMke3GUphQLheMXMXvUxm7tayLS53htDWphQDixCNckmPnVKW3b57W8sC7J3kGuFv4Frq9Zco8BeucM8eG5",
  "key19": "3wgFos14VYJYaXbwCaRiRr2shGALKuSsR7CmgmAYT5C1a5wEBAfRWYJSD3NvCBYzQZsKWWYmkrJc2WJEi71gf3PV",
  "key20": "4MAHkpxjGh7a5JS95Pshia7fRUeESeyXqYw3hcewRc6NfnYYBgtADzsWwDUcmBbeag2MvBCBGPCDk5r4fRtCgA3p",
  "key21": "64yqwwUqgtrv5CgfkmhPWgS2dJZ6RACZGMLDAokiVgj5fEwVqd7TBPzNQ9kVd5qqizF4RFPCfgnc8xaCn6WiRdGu",
  "key22": "3LoAD5uz1yisrrunX8HPCTeXZCLps2rQRGhpj4EoyRTHh977VhuzB7ARjcMghX67hT5Q5wFsuTFvrYsRGhah4ZC5",
  "key23": "4SC5LMz6vKDW5Ln9DooPZb3bjWcVsZ1HpbXqdvvEfxDJPBRV67Q2Pvb8KsVtanHHajwzhSpfGqzDQNHfbAZLA1ot",
  "key24": "4C5VyLwYKzmF7MgWodmJYwAu6joUSjQPma69YXQUBfT2u4u1GJYa6nkVi1p65VcWxGWPBZ4zCfBNuPR5J1Proufd",
  "key25": "3dezf6FQnDyCmhXXBjY5XSkdr6bhRLcavDSdD8VP9wKT4Nbvgv853tKHcMTHx6evjpzESKcMZB6s5oeqKFTmmtN3",
  "key26": "5K3yu5AMCkkVUQucMGNjgphNdBoNH9KYKhCz6Y74dtSUSQb4uzN7szjFqUmJ1A8W41dvHTweXAgfBKNQ4WghnnHi",
  "key27": "2uuXNUNvdNg33yK2syncYDevNRdgeedc8XPo1tPRfTmKKcKMPXAHKXHJT39oYJANReng1jTLWVRPXqLH1rRtA1xV",
  "key28": "23dBkCBRYTFStFQANWVoYuGb8gMztAuS9kX2NMP9ukJFv82iaSQHktXckdyfEAYgpFgNCHwevW7ai5AUBxwKBxht",
  "key29": "z5mGDL7ceMwHt5gf9JfWXW72eBHBpDoeHCrkKXfH11MUW4bHdQvSGMNCMYiCAQSUDioFnpPAA7rfBaSRQqYDpho",
  "key30": "5hB85gaNqRBP5rDEpD7Hm8YqFGDqLuPKcHFqG57dJnMLbS8FR72GVu62BdxVcTHrxgK8TjyJz3QMfnNVEaNaR5Pq",
  "key31": "2HFmp67xWsHkRnB6gLqGBFr7vojwGeERnSXgcQ4QQFthyGpE9aPbUxXVWYack7szyJtd8KxRrAKw6XGpazHihbPo",
  "key32": "5UYobxrBkzTHyCZP5wLgT4hHgekjoaQnQbji5b5fCL1B5Ghfhqdn11hKhBqMFNw1xYx1LGgbThxEXdiDu5vCWwhU",
  "key33": "2Xfp85a6gc2oLJNsyUeTZ7D1Kp5GT2vsU9s7VnF3sGz7B7tZHp2Dt3XW5rmSjjEduifQRB45v5whssSELb8zoVgQ",
  "key34": "3yfaWcEhJ8PjRWZyud3LG44urZKN1J8sxEttNLpbxAK1p8eNc7Qt713qd7ThVeMrq8seXT9a9e3KSKSgLtrGLuvJ",
  "key35": "3vvu2MtdzveHp1zwaoQC51zkdLt2E8VCmgn8b19nri8oyUni9Vzq5KPsCWKw4r9K1CaoihroAw2qs1hvf1S35FLg",
  "key36": "4jnznLTk14kKJoQSNeJ9fCi8dsQgLb4Nh9r9gDvxigVRSigDhQx1jwKoDXxBcrqgAviiTwdYNkiq8LA3uFFagvD2"
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

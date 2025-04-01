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
    "3JKfiSUSBKnXQg6Mhzn3JWRT3juEpBZQS9dFBpGwjWwpZfzuzvzSgkPyn8r29M9Z228LwwxRFjppikM8yUwes4s3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJ8vDHdCyyamRf9Wec8dLR1N32BiQKvyhKtBbHXVx8eNendFB8QSsSHWq4dprujakqm4LSbqVmKvTw9spDjD5Ta",
  "key1": "2wyWuTNYRdBVuUqfLRhsvfKDM9N3rTC3da1PXYjmjnL9xWMdj8cRpBawdqfhRF1iK3zSRyq7TnAwfyXiZ5o8FC8D",
  "key2": "bSpM9ZeYGdZ3dFujdLCMmqifNWxQUKLstMwV6tYWjUKSeqWhd6TkhNYDJF52T2pJFdXRnZ6D2WYXfzJ21FvXML5",
  "key3": "2vhjYd61nS8QmcWFuS6ogb7LxfmiKicjUJi3wU3jaf3ADPF3sos5mQqoVG8kFhyRyXgT3NMbEEU9MXWp4PdUQnE4",
  "key4": "2MbSyvqYAqs58wBEWsvKmbVstwQkYgWCofxga9GPU7WoN342uxDTriaRfiCyprJMdV3V5Pv8poB7DR7tBbzLCokE",
  "key5": "5MUHfBKRe66Nw9hcYeLeYrRm3dADEGbMMQNukRrhYMEztvjUxqKTXZHSMtTDziLUoZh4Rr5gWg4GYm72f6zsc9mX",
  "key6": "y3XeG1qTRM7XBRDNY2JerRoUc4mUSsQXpAUUC4wg5EtGu5swZrnjiei2WT4mS2ZeLb6fWywgqb1YBkXuahPqypM",
  "key7": "4si2k3xFYUZqs5WvTPi5pdyiFxPMifSvUzPg1kSNapQDnJhxFLeoYiqvR76yecb4xeSz9GKyGpEYxT83M8nV7nh1",
  "key8": "4nyC7zLzX7SpykEFGdcvr2hn5M2LuJBvUDk3jpS1zU2onnmcpHmpPwcMt44Ji2VLxoaS2QUG1YsKkxpSGoFyLFwN",
  "key9": "79mmLdDBMfExHJsRqycJXhUkyJ4UkCBTqr8R8z6yH3GMzW8GwBPJnvs3VuoQCNzzaATqcHU8467sCDVzY6TjfHf",
  "key10": "2KhDhdN6Bm4FEaq4pLgd4SLQKLCkcBKdrnChyi6FpiXz86qb29mZoD1jmctDEd4fzqVXVwFNq8p1a2nVaBwBQZyx",
  "key11": "2Md8rkfoMx7oEX7C9Vk962oFDiXM92WMhXwMatqFXvsskm6r1Lorti8rzqTsSU6unBP5swhaomASwTX6mcFBjyp7",
  "key12": "3EbYCaXFMfVNu8mztrJUHfaqWWhUvgtG5QMLEDv4TrBTF76qURVeCbTvVvYTFZEvHzhPeVc4tYcRWKryNS53EPwv",
  "key13": "4Ex9jez36S1RTPwBG7MWeLEcFtjoHZfYocWNTzCA6C6KNjWTipkAefuqaQ3tvvXKFoVMT6FYPfdWUCTnjUejsJbq",
  "key14": "4tvVjNQxB5a3PNW91FSKLyF6CSBtXnfUZnx489tDDYmDpRJ8SrjH6fHSQZPaukzd6vd13RUB13Y4VuJB71sMNsYB",
  "key15": "5VSaw22EYzB6xgxwrDDQDjzad4Xh3JCVbJ73cA8rV6z7nt1DNpXeiUGPnonxzU7EzBU3urHtL8Hxaq7Rzf5Dk9T",
  "key16": "pZ3dh7yacvDBrNLHmFvyKcAw8nUCVcnYGTEzMDVRCrjuUFihjzr1FUNFWiZHbg2vk6mKry6zZmh1g4xD3Q1vn4k",
  "key17": "3hyA1yPXQ3EHS7L7WZnrbfCsJsHfoUGv3i6oYiE9DzEdpBLkLZXURscuSsJSaem2Uk2RfK12BJ1ZW3GjHmJPVi5Z",
  "key18": "4Sh6KkJqQ4pWxp9p8tYyJc4AQXWYvvDpnCMzCbnKZCaMUiVKukxsoeaVVUwmHxX77Taofbx66p4r7FMv3cejwj3D",
  "key19": "3pPfjCFmq5Cqhrwyacm2o69Rh4bnTggAsdywMrjdV9xnCofqG5C4GStyptRjGUAHacdbqGeXVz2t7yCpJhzzfTLT",
  "key20": "65UJeESxR4X3RpySnoH8U6CVzx8p8xmPKNPKaGhcfexf3zmQrfXUie3XdNbsEtJ6v9Fp3nMukGWyoesqb7JynJSp",
  "key21": "3qjsHWdc9euuB9mA9T2NYtNMiwBdDBSbbMApgwMgCyoNgHmaUxVuY63ye5Nvnj28uFV96qGMoAsyTQj5FZiGwQRb",
  "key22": "2bQJuawY79weaRJmBNQvzbQvePwrSsR2d2gXj4oRb3HB7TSEbuRszGxuyWijAtkZMgwpE3uRPDmibGyyoigbkYFH",
  "key23": "4QBxcVeosH9VRzxAJThBDYGi4J3WD2ghK9ffYwKVLCE57faPKx6SP2KQYdrDtywkHWbMU3dCBFELXKdaVvzRd58r",
  "key24": "jmZ2haqnM1zHXc7Mc5jredS2h9BJ8dLYDZQBYrGANUVBYCvzogNMqVTN1yu9FzcPCzgwwf4upKDCN7mfCvSSfYZ",
  "key25": "3V6A7gvshUquew3BSeQpYLfnEttbfcWRWpxZEFKkCViVMpuAfqCcuDePpT97FcecUky6Gs4JH7LRsZjAXYQ4HNKc",
  "key26": "4FvuX8ptDMo8vAPi7UZTHaKS7d67NjAYo9kzamubbTuEeU1ywxu3Rd9RfStxweqDBrxfuws9qxVMJHNKGR1tse3g",
  "key27": "4uKfNbk4633UQ441HovC2hf3BKmzS6NPmb7VGGjvMJKWz1nvJ3mUUzLvqC1Mhw18vNan3Hqy7pLvNhwznt4dSwF8",
  "key28": "xYavjJgANxLhfQAFdn5uxrTVbP27LEXSzBBHQoyfavHe9pEJi9X2XfFUqHZpFaMur4DaBLqCCrXV1vniXi6SwRB",
  "key29": "3Zn35neowPAXNeNMP9DM4NkzEQavNiHmnsjTTd88WWyVA4jPng7KFwsgMJ4W4syCmrW1TXVadywB7Xansw6QHdMi",
  "key30": "3gBmUFYgQSpufB652eyNMbeLud3pNka8LkqaeZgAvuMuUWsRKzzR3fGvvZUBfZ7pnPc4jzdwZYWjPAggjEhojaTF"
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

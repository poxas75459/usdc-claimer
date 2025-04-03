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
    "3xUs26wsSdDAHVdk5g3yQPyC9chXo8hLK94Wx7WeiccXszKwN524aFjUkY4T9fEFAnysGBusPnEfCAggsSjGBxiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KSQVAq5KiL7CXvBpYMwsxoh2KGg9S4ix7GQ1j4vFFbVu2pwctZVMGREGxkta5ZeVRHyfM5iDdkDuJaC9faFn1v",
  "key1": "5hyBkRPKXnV61nHqEkwVcUDkVdieWbWAL9uL7WVUWdCcnBE1fQeTYXa26jHUNrszhjvHHdi8tcQAGJqbVuGUMvko",
  "key2": "4BWnxsmQwvZHvreS1JuBDGbuqhUK1TJDsiNeUk5NtWYHVMhmLKydimSc1R8gxNyYHtp5ztePc3f5n5BywMgxUxxf",
  "key3": "5G3bMt5tsfSQW8zhrwNZfHYLxrbm7wiCwSvUppxGgaxa4kTqX5xQV9xmoAMMLjL1RFDMq5LPWHniHnqwpjwv15bB",
  "key4": "51ppRwGvfs5vNJrBKNPaNWxjJ3FNUyc4VHMM2iWpFSPNVgcr5KunzMozkqLtFdSDdbbdSgNkFY3aYCJRcWHBopPq",
  "key5": "5jipqigP6GGn1cc9pKXBpBF8CYXf4gd3B37suUkZsDvsZqeU9rsyDg3jLNeuUvVEBBPkM7ukCYaiLJnpQdiKekfX",
  "key6": "62j1Sb3WRwoGZrfzELiQMZAJhU2YukgafFKZFjGAJqKKPT7jZ585w2MXvsNJJCazPrCeJYvGfi9asHLcxeg8nFyf",
  "key7": "5BYmV6FXfa1f3EnEd4zgVih5tx6H9uUTnMYn24SxPG8F5kJPwSGBVjm5zc425RWJ2fsT6txyKkGRwtzsK3nokqBW",
  "key8": "2SpKpNY7JQX5Yp1XtAjYtTKoCcYmVBRuPJZzw1Si9ALe5axGigF185PB99FxR7UBmAriM1UmYrbziyNnxi5pm7vh",
  "key9": "3eAVurwmQaPWwy3mmN5qvtPLPgiHh2BkHvJi2STm1RUW2tA17YxC5inGWJ5uHdmS8VwVnmsnwUpJe53jfvHn4J7r",
  "key10": "24vCtWpSL3QQmvbpNKiGggMKy3Bc3VUWuUNjnJxdE3bBV111kkPkGCD4R5VX65AWkcdocq4V88zravqqG9mVL217",
  "key11": "4y2TP58KahExH1m75FoEDCxQNeydyo2sHppUTmjjy2LcUEyeU1ERHWQpjViRZC6FYffjkncBXY8UAVwqJiR27PLU",
  "key12": "2sds7SgeoUeibjuhn7734DCYuFJFeqEwjU9Uf1rvZk3T2Z3uno86cuc7j5eLui518tCRTxPacMmvwsvAvVnaoxMj",
  "key13": "9ujRMj6CeUwiTFPiWAL5XZEQF9khNgK7ceMCjZfyxcg6yJjpnigEnYsCNvHbsZE96kCEP159MmtnNYQb87Ff2mU",
  "key14": "2C5bLVEsMoREMR3A72MbHmF1BCgboGGhpnHmdtfiiVycQc6xa6YrddXV8AooZRUm9iMVWRBqRoZxqM42prXEMFGs",
  "key15": "23UNJQC4iTbCGbk18vMK3XLZA5T9MjN6hc8th2FthkiLNJyHM3JPGFywfm2Sf2LaS8HwogtHgTXThc1WoYdFEgme",
  "key16": "5CKWpDnNZP4voPTYCS2hPQjfJjbwhqmDRmSCi7WmKBuDYK6rvU9MuQGNc5BsEMXjggfJMavxhxfKWRQYUc7tv5GB",
  "key17": "4ki1CEyjhHap13U6fA4zTcwBiPf1o5tREauVd8LTayNt6qZPG6HJJZMjQ8VoT6qVc6chaJDMdf8SvEpPkGNC5wW7",
  "key18": "3kfmAGooP6vP8i8ytjZPuqW4YtbG7vop7G911XEitzgZDjBpZy8R2ijzUTBXypY4cejoruTTZieUWNPVNtbNaqbB",
  "key19": "53a1wehwsXzjdE6xGcaZCoHVAaKd5TADeQVtXV2hoiZyyMacQdU1PL41rHERqRTM9xe1fGh5ycf7st5VwvFQnhRn",
  "key20": "4ZaU3Tpno2L49sgm4KkKJ6iuKnmWq8sAeXTufPrcdGYfqCtv4njyRkEYdstrbwrh4ZZ4CfvNFRVYqH2vxu149JUK",
  "key21": "PTefjVm6jD6kUgwZMaLf8uyXDL2hzqmjRkPZJtVhYJSjxmz2ay8CGnZRAnMqSheocnvvfz8V9EPEuxXrZXf6ynp",
  "key22": "iHJb4LRNdPLDo2KTB2ApHLingPih59gTSvpzh9Ai1ksKqjLjXTA8YQXhLbzcire2WNdUAgJGrjWcVUppNbUZ4aH",
  "key23": "2AaJyYNBE1Z4zXSoomCLKjay9S7V98xv6ahFFVH2QdEPT9c2QKPf8HwJF4zi9w4PnVW2Et3GXRYe86rwNV2TmTPR",
  "key24": "4kLb4p4XNkFn9RcRsTTmE9kHvxG7LfaPv4WkhZsMtXh6d5iLPmzjrMiw2ypgiNNr3KnvQYrPLbMz6n9hZiFsvtGD",
  "key25": "632rySLokZAo2neQzB6QGrXXXRYyWz1hnKC7sxMFuuZV37MUohskG3J9CV2nScuRCzTv4JfDs8weKhsoNGnfAmRN",
  "key26": "21JvVNm2yKqKzd2D3kVpQznEN3ydFgMMBUJHyqSMY9ejvu6LKipgmK2nFTbAooXunoLSVxPhmRta6qJae6eH1cSj"
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

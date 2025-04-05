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
    "26PrWDHtae1udu7uYp3WGiRw5mkBfmma7xDhcCsb9pLgpu53H5bLDY2z3PuZ1Fj4HgW6oCphuvYbPuD2gufBx4Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53MpU7mNeKGo52qNrjpn5aA5ui6Bo3MB8D4aiobTafNQaeqonT83wJ6b9iEgk5vjrtqS7AfodmpH6XivV3dA6KTw",
  "key1": "4DXMNeYLQbphAFoa51g5Gi4EsFaHu2M8dcE8jGzJ4upywMY1rud8hpwruYeQ4azYUQn7ZWYD6q4cQjKCqEb72AgM",
  "key2": "21d4FziQJ83y9eqyhtmxC7njn7h9AzDVv4ijvmGitv4eJprVinhzrhwHB9kyi6KmasvRCyTkFEFVAXc2S8S1EnPx",
  "key3": "5JSpJfcmM7n5qUHHkf5qKZLjBujDj9aV2jDkCz99TR2ksiT4RVNFCt6FMryyW2PSQpifxhWFZiePoaScxEN7cNk9",
  "key4": "KeFwKPqp1xYQgu2RzyB8UjuKtxF46efbp3whU2kd9FumSq3ftro8sC4KbZnuXaarZisr9eQsUnt7k2UjNfRho7N",
  "key5": "o9ZGq6XutxRzgtyc5YLBPWbwyTeqjVzU3FSrZB1DhzKP4BQ2jkCHrQMTtejSt64eTVqXsmAXJQHv45Ka9zhzTfi",
  "key6": "34gaaUYoUAnRE9jSUiqjM7rV6xNbXnegQm5dYXyQrYFmNcAnzYRqSMbzER24xSDZ3rHMd5iF4uZvTXNYNrGQUFwG",
  "key7": "2TMKHZM5dUPFDreyU9XGH2FCiFzQNvMcAfCGsWzp1KKDuCSHRD11mpSvbtGqLzKNJh8DJH8oLrQDz2ZhkVUjtL7e",
  "key8": "4WECvWzMQRxqk8HNHkTMwMAcxwK33ZyxKNWX6kp9kYh5RAP1ByeS8fYB9pKZh6fDB8J89Dd1W6QgQH7dvSeWLotf",
  "key9": "J3vaw7MaW5VooyseMQpmXbA8EB4CwMv5RHPHT7SyVq3Uz1JyPKUxD2mwejSspU24h1yeAgzjHnsQ1689J5jBFYy",
  "key10": "4qf33mo5S7RuF9UuNx98QRSX1BvLaCsQDbw5RqFHnXMe15BaPxMvy61SwekX6fJymvN4DTsbjbQdJDX9LnohmzM8",
  "key11": "2iCQDQJm6zD7iKKHVXnVvjwZ5ZCc7x7ES8iRggfpNeR9Xw5QSrRhYYKpXa34GypCFuF9hS7yxTqDDVB6eqYVRKgr",
  "key12": "58Z6Xe9YF6mU7LBKvnLW5TzeY19jfgafHh8tcFUHeyRVZRz933J4bGNyktLUsduaNyTVJRU73eQJ5VVyUbzGQzUS",
  "key13": "2kFwGjAFgjX2J4hfxJTf2aX4J2awcuBcAhd2deDrXg71K1LXe1KqhZtS3TFRXWfu3MZSbHce7N7DutbtCYQCoioY",
  "key14": "2ykiRtu52Xh9ekwXoBv8kBpBqshLmnYAheB2qiVCKF3vqG4rnnyzZhtnXiq6FtfwheopyG17VEmiFqVrR5ZgkMuc",
  "key15": "uA8CuwrSFj9rouUJKfPtJ2xo5zfesmo3ot7EmNUH8TNv4Nzu8ML5k5qHJBkuukfb1g2rBRJsbdZe77qi73wMNeL",
  "key16": "4EnAtYynHhTKyagwZePRkXkqXSSgE34kK1gzppggTpTBmQAfbRT3jAC9ScppGEXsESi5VTArPLn4afcXhWdWS3Wy",
  "key17": "393xzGFXqyRRuvABwGRyqkPEZZermVx4SyWKW8VbCZpkFudPe61A4WP3zYRz3foUzC5Ujeidkd9vsFLZfeTLJYN1",
  "key18": "5ArrNvRTR6BAsfh16Yt9msyFbMmxmKdZDuGCvL4xCyqZufRR6MR795MN3knbLdCeDYxgyEkZC2DPw3Mj4qf1EqaC",
  "key19": "4poXDLcwQjByNrYgFBSxeHeihnixLeamny5mWc7tF66B8GaTSVJbyzJDh84AuFhvGVt8VpbTAVrw3F4V85Se3kZj",
  "key20": "5N7R61goycY9VbrewYwZDq2UmdVLBvoqsUBh39L9Jr94946dDyJQ2drc5yJ9YHLpykuPzThFQ4mB3G5u39dX4ypd",
  "key21": "3DjT41fWG617RKdxtLMmrmJWhociskJfdhvwWzNJP8owdaLFegvuoMCNwSm1uoon9snvEi7txgTJsL4rFofSnnu7",
  "key22": "pMxkqudoAZkcEva4fb1FEUyHaV1y3FeMp6tGDU1s2MvioMwXY8gHjYGJHoV7J2cC8w4D9ygnQw59SP6eQeWPBSw",
  "key23": "2DDdB4SvwGhP6ABUfSi4z6bUPDy9X7ApPa6fCrL5bFw8K1K5n3aTex9v9qdBcWFF4igrfUFQgrZN46v64CM5XLuj",
  "key24": "5JtNywNuvHuT5G97ySFsCYrx2Hqbkg4WJehsht9f6CbE1mRwtVG1kT8WYjdotY6pqAszpjyLAZsnQpVWER5CJfGD",
  "key25": "5tUkCC54VqCcTWtjzFD1DtM3wXaKxMfnbN58AtneXFeq3iLkz973T398NNDJLeZYoFsussg7xHd5QEDRUS47tRQ3",
  "key26": "5k61XuLFhcad7op6cuKjCMpCZbCaEajuWWmJJehB5kuJQSQphxjsyju77dbsQFeT8zdh4eRY1kS8FXvZZ9Rj7Mc7",
  "key27": "24twr8RoGqyxdZDYaUXR4suUPg1FzYfDnZZuTZWoZ83QdhsRNrVeZWiky6hGb4HTUY6KFY3xsnaAaPvyes343mbo",
  "key28": "dzUAexr8s2AfVyMmHy6XZ5TRVQyNQXaVZBcydqiosQJtuRHoPiH7xufRHft72hetq9hMyysBmbSayanxYiVkPSY",
  "key29": "38uM2Aqpsc4MKM3aYMncmEfuh34BS57mHh5fH5uguc7DPqohkudVucYCmrWPyLryo2EJ9G69AFb57NTdeQd382Kp",
  "key30": "66tSwSDg55tFQKgzEoDMW82WwEGPWSUDRE3JEykDhcvzpLcbNKCtqMR76ZEEQzwVi4N3GYUFvALPz9hrgixSF4S",
  "key31": "q5JWkg1dFNem7dN8sJu1TgJdQsrM9N2n9ThuYmJHwjQmzXyPsBJhvJGcufZzBaAVyjeDfY7xKhNwc4mnkvKEUB3",
  "key32": "5sVC5vtT8pTtUiMPZjaLzTdmekQti9owsQZqLyPCcdoYsZtbaw7UpMyuECLqBT7EdGz64xWpt3TseKAVpSfrExE9",
  "key33": "4vR6Cr68DpACHHFj8sUHrJBjfrUgTMiuG174yjDYkoaiW3HPY873WBmHbMtFdXkZvA9fxvKajSJCkBR77ezgM4Sm",
  "key34": "33GTgDa13AA8P7xxJxUiwNz41UrJtVp621VSn8mLMZkpzUBt3qytjN5p2N9JisJ1QhLVqJhMHqhzLkvPzetgmy8o",
  "key35": "5daJrbRpRksr8vqZ9Nbh2CKC9BBydSrroX7gKrEuYXT5BeRVZJhs85xo5J9GD1Gr3DQav3Gzq3nbtndmenJL95bC",
  "key36": "3B7rKtA9MsVqDAY9FofvVqr8u7eajWTyVj9XvwFRpPW8eubjB9zbUFMvV5cCbq2umdfr14VqRnska8c9UbwDa7aw",
  "key37": "4rkirU5VPU4yq1YeJ7VstXG7jiyCSvrYex2v9boueMXU75mRKHg7jme2ydtdktyjK1Zmi1vgDMqyzByysVUBFwnp",
  "key38": "4GBx5r6xc46NAag8dnk5D3q6yBMMGqLANJ4ohQersmkcfihskQWn4GJruuJedgbFw6rx19nGYLqe6QLn9nWKYdJ6"
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

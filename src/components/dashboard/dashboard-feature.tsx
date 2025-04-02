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
    "Q6Qm1abV4am2bgseRJoSGFoGczGPzTuprzQF8qsNzBtk1r1fgpd2YKYP4MH7uEVHQSP5NTTV97CtyqoTc8DSRaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jBRKbFfEipsFL31HVgV4ypxLiYqzQfep8Xf17SUugdsRr3i6aiQVRvvejSUYjGTy8NraB151XXdpBFMt9RkMWy9",
  "key1": "2qNcLPmnGfa4ehNcJGEk4qvpQoEEpBsCs8XVtPPtyFnGnMrfNNG3t8jFVXWKi39Xi7SyckNo2Qkh1YAVDgoc4ED2",
  "key2": "5iJ7Xywzgzrqqy57jhHQh1CCroSLB42KD2FKLWR6oMcif7KbYb9zBL6rFyPzCBnu53XovyRHQGjqS49KPhoPza2R",
  "key3": "88pQrqx64E9VMkNzXKRA7GTuiYd9uE72EmtbmroJXSnX8HzMBJq3jUrMEzmNnEc9vxXivZ6uVMNDPaUkorrtwqP",
  "key4": "BBSsP39sds5HZQysPi3d8sCuEVseYk2BXSU2NzHsu84YC88bDzDfHmnVQUVGcx4rNumdqSSqUM35eqUw2Gakiqb",
  "key5": "44wDoFJsnxpEcdvi8gJPtuTkNMc1D98mr3Zp8tfopj4ib6LFXkD1d1w3kZKZ2vxzNHCrXphdmkgfch8dCQEogYJq",
  "key6": "5K3aPKiqgtofqXV7tdSdJ18vLdHqUX76cRjwiTPCGrNQSDCUJQKe7BBhmSKLUbMewTQX2j4yV2hiDyNUi6dkcsEk",
  "key7": "2Ww5hMoRGvxG6S8AVMLyXvv9g3M6eAYbmT3TY8Z2gAPqGPszaKnGKXTninZv9Yh5YEGVSTyrtJpHM6XLfqDAxsy7",
  "key8": "4AgLYDxkyn8k6N4HyiEZEZfi4jsXrwoesSFgKf1hKZRL4fFzz6VyEpQ2Bgxev8fAaQmALXiM3xThJPFba6dAXcjT",
  "key9": "5gXESvXW7rZKvCzG97neS8ssvLdX1PUWgVqZvToZJRfzxsQRaYD7RsypL2ftFiFmsJsKSYrryGNRDAAp3PZGPCaK",
  "key10": "5NauAfeJHxLsWBEj6E7Vsu8GKkMqXPEtYJKdP7qJi7EMSzr3dmvH2dYdVu1rpsPjcGUjgPbdSavJrC9mCaLxoc2z",
  "key11": "5rmZYNvxj5bw7BmSs3yDozC5naVAWFZy3r6ygWkHbpGQQA7tJMYZnZsAbMTPgxBh48gk7wSMha5Vi4kpptkpnigv",
  "key12": "35mADrrjgdBoKDTFkE8mDFHxJ1K5cUXbX9N4CnUbKXaeZRRyRzPeyC1QceoF5PYSQb9kPhQtLCsoPKQGaRq9G1D5",
  "key13": "4bpv2F6xtQCMR1Q6pX1yknCKJUfzPHjPzhP3LnDpMQd3b1unHrrCRFvnsoto3RoiquMUQbKw4QXQXNAk76WXX9JB",
  "key14": "2AGQAkB6EysGVrGFFND8D3TkQwXiax99VC6fbZ8MvFLBQcHUcQWFuviZFo9Rv3wK9jVFYbtTNBW4maY5N3zqu4jt",
  "key15": "4S1dSkWP6QQptn9mq8fd1gF7wAGDupevQ3kNB6PDvztvZqqd3GK8vwrUEvH7Q6URWx4oUpTnhxYtXEHoppkSVMZ5",
  "key16": "3VHQLy2jUpVLZBnrBRia37XjE8FnN3NjZR7gx6PDxNxthrESWSV6ofRqEnvG9LHthJasZ9bBCn2Xn5tNt6xMC38K",
  "key17": "4ZhtdFeaetigQueesTkX7znh4CuPa5P3DAhY321u1vXexPTcB19XMs92PFWTZDkZiQ15fwWjWKHdET3bpyGVQDyR",
  "key18": "4pHz6gdBXCJ6sDaS8YukPWhza6My9edGV9fhCJJZ3rxi6XzH3f381NDxWGWioUBNzXjNpHZfPEHZiYhctgNLR4Ms",
  "key19": "2oeNTRqRYq83GHuwxekno1B9CKfpXymfpYEq1wagjE5yxeRCyCh1sixa6SdTHZQLYeLARXTvhHtRJ1o9148J9Mq",
  "key20": "2DdiobZXacc2nfAUcVgGJqLS6dkLxMwBkMhQH27dtyZ34zRrFR8FFXPaRgggkdCUhL52QSatn2WsqLT2E8ZoqaiK",
  "key21": "5bgMvhW4gzQ2TXZnNqXU6vMYKCND42CEZGhcfk4JVDVNpM7a2nMe4KTAzzGkByA9jQG39H88kKTvepRBMUpYwGug",
  "key22": "5ePwcVvzgxUEAgLPxb7ESSpyoAWE39LBYYQHoBDXCHEYTnicRtauxRC4gxCJVoMVNfopyL4LNXUyfP4cPoL8Y39t",
  "key23": "2pp7fikEB1T5ZwWvu6qeGAGKSybDBPAkCrrGzADLz1c1BwcLF9WUCWmQRH5faXRp4qa4RMypR1uTW4BwtSqdJvFv",
  "key24": "63FNd7dvJMsiQUVoktJT3erR5BqjJjXCxBG75JoDvFuc3iTdH61E2c3BLD43SZ9ff9Xr8797CzRdxh6w9YzvY7Fg",
  "key25": "2tMwCiAoyJKifPBhfinAnY6wmgtKng4cFUbaboLprFojDaVHvAdD1YAY787AhjwYoUBBwTuqZy8qsM2H8iP9aCET",
  "key26": "5wynchcsdR9kT8XrB7Z6NukWZRAT11mXXuxoziMtAkpaQYQFoLGAEUXA8NuMas3sLRuMvvhqrv2W6f52b8AUW3zG",
  "key27": "35YzVYPdfFtaHRQdZaQbksQwb45DEo6Y4fdkjdyrzUXabBqUVG5cnVbj2A6GVVMTEZFWs5bwpNSCE2M8cehHzvW",
  "key28": "5zusU2Zh551jgM4z5hv9QDB1G1sNAy2WeopRofdtbzept3CZCBUkAUMdM7p8SobVR7HYkq8DJ6EiCVsWbj1TvDym",
  "key29": "5f9ZaVC7p9iTs1Y4ZkneN5p6ihCiGhkLz3nCEhFvCw3qhUEksE9hM1DHgz21ckQFuxW8BSi82LSA3U2WHXAFKaXU",
  "key30": "2RYpDZiANASsKi9dxAhrMRqotwfx2bjWxhbstdZqnC9eGTkNvgqS4JMNjbBFs5fUJ57tE2Ve4YZHYQWzAFedfmUg",
  "key31": "4YB4DiXUHTdn18hpqdEWpcS2Eot36ekWcuhzNtsL128LBscKLuQKqwsLZRt5bqBNuuZKAVReCXbqKTx2GRg1KHFT",
  "key32": "4RFNKQGiirDHW6JrcVivxrVAczFu4AAKerWMgQdYG1kFmgytpAodU7Mb4ZQ5GWymMtYVSVsbSReopVZwq653Qcaf",
  "key33": "5eqPK4NdTdURtd6nQtdF6wHiae6ZfYMzMzJWgUMo1zeT5eKDEq7yHcaCdFKy1g2aZpKhNdgXAYGvMgKoZXU8uWSi",
  "key34": "3bAGFmYPnFGVKxrdoeiwJyrZ4kQoi4dkamTp2kfw7xxwwyfBwdaMwSPtJBj4Uh7aKQ7hhsAG7PYZt8igZefD3Tyd",
  "key35": "5EUtZM3Y1LjzGtr5fkwYMC4JPt3HGFb6yxtUPa7HsFF49k9FkXv2YZfZUy49cav6h98ZHiGH8trN3vg7bxsXF4wX",
  "key36": "3tcnuo4gPw5a5MGvNebq9rbMCPiceePzhcynvLfVZM4qf5PrLXvaY3Chea9NVJ6Fs4VeKKiovn4irLZFRKKH4xoK",
  "key37": "3jcu23doaL7bMTBDGL1qpJCeSQ8ohsWaKFgFU5e7o6YzoaVZ2yfPz6CF7zqoX7tehhDfTw4SQSBYRtSXxn8jMRtV",
  "key38": "yJeLXfvmUKg4VXbMhYyZu5fUSzSXH5mvr5kzCuqxkzzh3NTHsnUBccoXWf1jMnYK3aQ9m4uu9W53yGyzVgTpHtu",
  "key39": "6fXKtUZ6EhhUJvJiGV3WLuoKbc89azsdvu46QhUGM3geQjb9USxGBdpKNoiGa6kY6Y1zkAAyRW2YdiymAq1yTdm",
  "key40": "3FSCWAQAeUmqbf462hXyLcHtSzb9KD6aAm8QW61Rz3oxQNNTTDhyKUU4Ec5dmfuyjaoh3vE1oJ7KGqiRVqjneaKd"
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

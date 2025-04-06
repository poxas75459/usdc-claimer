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
    "5Vz3r4JVzM4p8pb74vcqHXb3XHR5EYsBAXeisGTr7RfD6jDfaBjwvnCjKLssweRCJcatY6aALrPJ2NZkWf3q9uvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bZ7sXVXq8KzX3S29BLaVKnNv5ZAXN2uMPT3Vwzkw6GXST4W2SQ5q66ZeUegkoYWMyitGhmHMUfcvWdoUC7ixzsz",
  "key1": "62H5MV8SKaKiY5GsusU8sWYP6d6BDmDqWFef58F9fVeRy8gNQcShRHzPhrR7q9nLQYD4HBCTPFaJ63kBRXf7Dm9P",
  "key2": "7NSSPJHUNMbR7szASyvpnnRuVZyLVT8Bmz552dZHH87bQw18PbbJShkk3EsEHcdtUn6DCwxnBanHZpC7Hfy7DhZ",
  "key3": "3rfvbi9hARTMacgvH2nnUFQAnafRP4Y6jcTC4p4i1cCj4rdtpaMs9amqBAMiJg8pB6QRj55NNwwGowMjhrybo4W2",
  "key4": "2RuFSVh2NcAZAksgNNirWQZ7TggboDcB91EcVNfr95Qrpp6z8wfBmzUD3c5BRCoW7NnvJGBQsTPo1sg2gc12oePJ",
  "key5": "2uF7pyRFQsEJhMVhUGD5fQz3myxqv2dnWDZPDHcyV8K76xouNUrMX2ebSwtwnH6XjmYng4mw8t9fxypTkES2SMRW",
  "key6": "2Dkhbc1rmrP8G74erpmooJgjpUc4oraRLvmVDKEZgkd7PaK51nyKgW2Uic1wWCkGC2BJyLvNa7tminQvTe5h5akF",
  "key7": "5SDkoxR73MryQaK7ytoNKVe4j8edKtzVAnU8Ajbq8jzbqDyNdeGp1frfsGLTTTpc25nWFTK6KvaNhVHEyKmC5iGr",
  "key8": "3dyzcfTew6DqmrQHS4WuTpPXzqvMq6gbgjKRdXwitjjm7eeBWb24CkXVEXebraLCavMdeo1DquE5ZuwHhJpxNTp8",
  "key9": "3KbprKUXAMAeWRcdnyjvqB1SoMErYxRLLKueJwjLkYvPqaNXir3c9Rjf1F8NuUne1WRZCG6w8V2ivGcjPV65FmTe",
  "key10": "3zdGBUXmJAkFgNKewZga6rR94Xe73kHtfuhjF9dSDarHvQWXu28GAB15MejxdZVd9ZtYB6QquV6GFzNsXyNcEZNg",
  "key11": "ugJDtipqB7XuJko5mCaU7yH1jsfz8z42FWQCAyFfN5erK1Q7HWxShxU2EwFowszU6ntKpTvqcnBZdzXMJneS4pp",
  "key12": "5Jkz4N23si6J61rddJVdzKjp4BaHcruwWwNjcDa3VboxZczw5LR2MbPyRk4AKqmjNQ5mTngi8dPMhfkEsWM25o3b",
  "key13": "3y5BYVCwLNR2jF2T4FoPpD1tLtFqYythxbLWLUVXQ128ao2ro5Xxi31QpTnetpKmA1CNtRPDUuDU3EEDFx8ExUBP",
  "key14": "3FBwYnS92QKHXGFMK1cY7VZHBCs56uD9PWSdcSUfAkB8QgbCJ1agt6iRKVeLMTtZgA3QXJWhB9gFKWwkehYX9m4S",
  "key15": "5t3xQ29Co9VDDXsBoz1t3LZuTgrLEn7et1jgAwfjUEsQrw6hq3HuGXxJTdqKuVzMRViT2gNgb2zXCWZ7qYFhmAw2",
  "key16": "5ZSWEew8MBEzGUpBae5skPdy8kKdsnXNWt4NyUcM3JqUiMorhyWFApf2SgXCCZdn7PUG351yhY61H2RCHjF5ge2j",
  "key17": "4JeiazuSdKE5vPFKp5EfDiydzAFpVbErgxSukSGsr9GmRWm5zABgYUsv5jRnUmih8Q9Vv87kyvXzMfC2eAWXw4BD",
  "key18": "4rHCH6YpMWj9MURYSPpas1EKm9mUGdjm7Ui4drJuEQMjAruvNXs2gZDo1LGsJ372bWAjT1bV2NwSmyegrSrGxKkX",
  "key19": "4Ap9VofwWZJYXpg9LoGQohFeaFk9axZ1fyzZdgMWLJfmFzXEYZcyE5vXrD7agg3Knpk666NmYhQDJvqDNEQqqPxL",
  "key20": "4v2DaqgK5PFFzC6x8xyGg8gXMnWtTNZcaapyvgykjHsJ78DAfTETuJA2JCJLvXwbM33RX4oKpa4ed2YSRszrveMm",
  "key21": "EKHgRh8YSF1VCcahjMFSwdSR6GV5mytc8qe3TDBcTEsZpmrGgMAa4Ae89HXs5ExMaef1a2oRQmxiPoqgNWMVW5B",
  "key22": "4PhEy6CY5YGTqj4fjAhVfVDwnUUZ34HqUhvrbT34Gq8SoF4Rac1ZDpatdKxtWnetxgTEw5ZN1uKXWfWFvr451VEA",
  "key23": "568SEUf9MaR5MvoLWUs9FG5pXPA2Es8bdRnEw7Wk1SRDrAjzuY9kTCjuVbjmttAfmAziPU4aH5nDUEGYDu3391Nz",
  "key24": "2dbYeKPJMin8TwQ6XwLwiUZ6sRw31S6jq6dUVvj9eUhW9PGEGH4xdW5xsRovs4nHDYwk3YTRqkBhG8JKtWTiTTTY",
  "key25": "2i4RcdPL1esb8DApeXjrhcaqvwiSDzfAswzRf5MiJh767id6JYzsXxzQRCM2xHyYzXZBvsQBs5JupNbYqKjNLyvK",
  "key26": "4sDx4fbH5xbuJq3UtCbA3fQ91sHeE5XAxrw1N9JWWNnNC4dbmjNRyWHByozQAang8yf133zpLHb1rcB8wnSbfwQK",
  "key27": "an8sGq2Jxu14LViWKw23bQGd5FCFRVCaiwwPqsW64cdZsQjWt5sZdVwpfA34V8nwmwheQjEYKsu5hWFJpBMLRY5",
  "key28": "3gD39RYNsjSufHqJJvti1wSFf3fsLe3Neb4sEjUAkNUfxzjhnmzSTB8VQgtGazbYe89MBF4XCaZKZnvRTHEcTfKc",
  "key29": "2HQmwV4qfR3ub3oA1U7fpVcfApqkWniZGSqpMuxS9mcnH96mra4RTPxrN1nAGzTWrS2vF3eAxb9faLP2vNHJk8Sy",
  "key30": "2FWHHmHacZvtUajuU3vkozdcpoCMZcXwmvtrFrXCfQj1thzBqrmzLC5YuqVwp7Ps2DUAPkJuQgCVFtSTu2wSUMBC",
  "key31": "5Q9Ro9x6djQ1za7JayrcPGVR72rS2cGT2vqnbQbEkHh8BH1koqtELMxrz64A7yhNBC3y8bW4bacEh8faDeecaz45",
  "key32": "5hxUT6CiNXmC8LbjRn81CrDe8YfMQTcpS5MywHhnLw19GupqcqBh8KcfycZ5TZC2i1G3q53wj2mHVgvbTTNrJF7N",
  "key33": "Ausd9bi6LdNVb9bLFazUoC7NMBnNJi9aQPHoz1vPz6LRw9AQWxe1bZJAG1pZEmHykUV6dpKjzEbztZNFyY8VXU6",
  "key34": "5YKECyzKRqkmYEJFVWP1mZRXzgVx9HFE2BWBdSQhe86KHGJdi4LGTyBNimhvLcuGyyAA5G3dEKkxcomTbprp5Cjr",
  "key35": "3p5H9YnkLWBynM2RpetGYLGXWufksSMyWDJ2s2JZPg7F4h39JmakiKtgEqxPVwMRuQdW9a5gw4rgCqS2obhhYZCX",
  "key36": "5iKdkNhAwMT8Lpsk9gMZCoBSerRFikVzjJa1b6Ga9yVLHuEwaiGbunvwsPgKP78Dc81KJzWqTRnzN66RxWJt8G8",
  "key37": "3bRSsagbkiRMBn9dweqcKW75Pid4oirkwW1rHSnNH8BPFnr2rkJxNFoHgpbxfCNsFqMPiyemzFx7Q5mJRQzpkmu4",
  "key38": "5ZkXf1d1eiHB9XbWSj5PmZ7vacayw2UiXupR29b1PnwT7bqqVeLJBGgR4vRx7qmUXnQxLz6PmBQ24mQdSuPd5mEv",
  "key39": "4M5jwGDGuRA3kfm4KyWz74HPJmRLKop4ZQpU6APqTdtLUessw6uAcsoPEmfjjDnFRyTCFwp37Ed7WHfHXhdo7oL8",
  "key40": "3een6D14QU6qbi3pr8oRjiHwvwfRFEGZFjJi5pxZUtND2nhgcrLC2BD2pj6fUtP3AwqhJrmokjG2CwCGrfTuNvVg",
  "key41": "5YgK1roSwbLmWDPz9FrruADiyo63WqRaA9bSrMcNFsoQA2GTr9PwbDrMnFgbqdxTzHRWBTtjZUnK8XAqeD5KzHuy"
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

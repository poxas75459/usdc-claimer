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
    "2rHUZmQgTwWd2witeiVa6JCUxph4vNw9x1hza8KyGtD6UwPsxAbym8KqLVS56UmVot8m3iqPfGYZYEdN2BmWuDJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DszUF2zPp8XGWhGsgru7PJTfzRKNVsvbNR9iRHjmzE9D7QPnChon9CAjw657VMWQhp7Kw9yTp3HwBqVWBFTHKUz",
  "key1": "493mJc96PvftaACJqrW7UdTjXjFZNeLfaX3Vx7yDgYandpDY4uaC36Emy1Q7bSy6FFaFLSbFNexNLY8TE7EMo8rX",
  "key2": "eTbe1pgCHnwjRd2nz2SPxqHn5Te3FDrG8ySQoa4j8ta9KhXzYxDiwe9u1vUfxha48LrJpkeJzMfmvRWwY9MG11F",
  "key3": "2jaTQPmE6rKTUkWdnpPLia1mYFZbfhc13mguKWe8ra5zV2Gt3gypAtaLgdr3VdEgqP2mUUQ6SHHHpXDRiDEbHbhY",
  "key4": "3WbmNeUdd5TVaUzGdVSRGNi3fAA6DZ7JHJFZSU8mGbt5te3WZEmXbY37xoTwV67eK3sB1d9yzEp7TJGSLpAEJL1z",
  "key5": "2ouNMcAzW2dTcxMWig5XaS3ojSuAJXL8h7Nyj4pxug5QLg8twtJEcWrH4QrG3fJUDeLYq1GzMNgbFUmCidD4gsCs",
  "key6": "3j1anvTHAGFQFTHaeAXYvA8JPeR4Amk6vJF6ujCQkfUxaf5tCqhgLwiddc2s16Kbzc2Q1ddNz6nzSCHxhrwhTfrh",
  "key7": "4HFkpSHYyxRCC1HXhRnhpjMm4SunfNN66QW8ujtn3Y4Bmdp5W7PttPRr4SWDVKUgYgsWX9Gtpah5qJozWs63NMqU",
  "key8": "5jXwHwZU6xzBpTQ2vr1QHut3Dib7HerzWKAFErhEXN2MmYhS7vqArLjxCfvRnwWZQ7BZu3f32PUxGWoFdoADXP3J",
  "key9": "5NgWpMMgFHfLrZ5kW8W54kxgZ5H2Qae72wQfkMiX16XAM7yWRqa5A69tBq91getaFyc4xCBwC9mmG4NWddPXo7yU",
  "key10": "3j7jjSiDWFgvyCrx8ChQ3JnWYVWt6uVYEtGMtFXptpXVpqFLoVgkAJGMa4oBn5tYxYs9HY2xBabqYquEohFgrWUQ",
  "key11": "sca8Ln1fgnuDcd2GQKEqke76NC5gibQvsqorqo74fbNNFqxWimfB94EXMabvHLEi8Fk1Ut3TA7XUcFHebeUqby7",
  "key12": "2syPrgfZvFz79vnURW16yuM4Q3kwvAMaFoBVxx6BJUcnHMH34h8KamWCX8Fi2HEGRkWYsytftgaXT8p4kPcrE7Sv",
  "key13": "4E7Ej86n534qhi8ZRRDkLqB3QSk6ze8WXvcyr8H1TvZT56TK5tkZVzxb2q76Bn12ksjpp5XSSy9ALLpsK64imo9t",
  "key14": "3Z4FUeH12wRohDDJ6gYEn7w6KKLZB2yRYy2R3DErG5H8rVDdAwR7WRoZzzY6cjrf1DtiKSUwAfvRo9L7E82y1rfq",
  "key15": "52qbGL64hDdxbLaJQT6xZeLQEwtNRsvWc8R5TUirvpqKb5sruXfM9ujuQnsAymRTL5kWtmv3hpfNKb5ouvSzLfNQ",
  "key16": "3tMDqLihMdGHSEktyLawzmJAQYUMaDqdCBBS2vgG4XD7aZ6Reag6oKkpz3yjjG8aEvKdx4mqz3E8ggfrSxTKkARF",
  "key17": "PWBRZHGpGMPnHQL7CVqh23KWzYDSzvYUcb3MsjHB1okSgT1Ui8xvS9ZmyhdborkdJi42e5UjDRdzBYf7P4CfETn",
  "key18": "2GyM5taabcoFE5Dau6QsbSigVsQuETyoZwcew3Bu1gkBkyYiYNnVCMDzzMA9HwgGvHEDVrbAH9w6QdUJkJfk4ft1",
  "key19": "2MWU9URXxrtbSybX3yiQgSvsDoBY4FsrEzi9VdS39mxBsvdwhNES2CXLpGM3CQTJ3PvWP64H8h2zvmodekP9kTTA",
  "key20": "5HjpkLM4n1mjZvLgxe9cFpDP7BbhBqXJbg4EeehGdCEqkzDqSzSZ5Qi7RB2h8RYNo7PNgKJmJbxbnDJ86otnaGkX",
  "key21": "2YpnH2WScr7t3g3SMPiMb1K3X97gidZTDTJEhvixcAgiPwYcfGXrAFxGc13sfsXiUit5Hc6DKG1DqZUTbnLhidYk",
  "key22": "4rSoyCnZbMKH6qbPrSWBSzUyddPwkDBoRK68SXZ2wdyEYYMv9eTp51nz61UoiabhgPP8qiouHVn5TAUWtrFZPbuM",
  "key23": "4aAB1mL4p8HMa5rSUgXLUUE2br13UVaYDwLdp31TiVihJkeNbJMbkezsVkukLQ5WsWGJsKLUqp6UFoTqfekUqBZr",
  "key24": "39oaFT2BWpYxeYnbS4u1H5DkSX9SNS6Unq9rXprh5Eb9bFYA9QHexhtPFN3BNXK6RxsxHUdCNwJ9Lic6a2u2T1Y",
  "key25": "584NvWpho98ybxkLmgoUBDgpVKzfXXBa1m9KPddwaKozsg6EFCH8aSieA3GREGCbbZexc9cNzNCx3wwcXtag1FWW",
  "key26": "4ZSguog5t6opCPy67PRxenqHukWuoukjqnx7zZTtzWBbmavYPW5ZUUVPXe4uxa4w7QFvWFx4noRBHKkzWu7Rnvyo",
  "key27": "4euY2njcLArfNEzKoKgW2SoUR1aiLqBv4SoufJR48f9ZoX7TQqCMAKBtsmpWdxwwcj1YKu2iFCo71s4zwXQF68yu",
  "key28": "2zRBvMnCiaSkgMZFXjFGWF3wK1A3jtUh83noiNKtpUB5zfScAKoo31EPQZz1XT6CCRUFcJsPXkcqFbENNNrjcoPN",
  "key29": "2fUsSLzVjZ89zHDpBegUNjwPMmwTsozuHGuLmfpqb2hYUdRebJyQVE6eJA97ZzPB5JrBWSekMLR1ZXPge3P91ka5"
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

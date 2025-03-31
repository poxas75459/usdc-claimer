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
    "GdgZ1ASqMNXZtHiZFP7Wkgsu94c2CGgcQPxc8cfZMn1K9DNRwcBtDWXcuzXm4ZLkPm4Kj1qbrEo3uHLRVgc9Lpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzpH2jJTvmpk8DL87ir1c9TfUT5B9v6X5JFwZ13JFa8R5gm2iz5fXkh7e2HLNL6UK4Ee4dQX2wqxZCTF6nttraB",
  "key1": "3wPXPfyHu3ZE4M3LUcxzJpVxRzmLe1mJTsPFfiZGs96ie1U7SZEcfCchYJMz7ceSXjsif2xwAHEzqpW6zr1vMWZB",
  "key2": "5k9ycVEamGAwCqY9dvXNaG5wwD4ajwhES6J5RMpCXiejMjQjVhuJSKegxfPqUgbhRG9LixRWVqbqwpuJMzUHnqB9",
  "key3": "5b2RVjqEtaG7g5E3WNJWUqUPhqpMXf394HKEWR6PonTYbQ1xM4EZUTaqDGa3kM7Tc3uWbMHuExQ3iQpYff5rMPW",
  "key4": "sEgUZ9y9ZwDDeeTxjRqPHxAEJ2KGeUWHXSRr3GU1s5TQv6WNkEDdwhXzgVPWvtemr2LBZNukGz919h9WXwssJrt",
  "key5": "WB8evCnkmbPZaheTngSR6ujjWwwgRagLuwGzoWqKYNYPYHMT8W7jJtZfmn18oUd9urNA6nxVXhDyqWPB2SpxggM",
  "key6": "5Eucbriu9oi1NHXkyEBrVNyjgt2Zmqzem98xkzfjLm1TpdyXqE2bEnaQfQ7gfMEqKFhX3nEmaqdS3VwhdoGh2x3f",
  "key7": "215anWngBoSuycA5ksGfsKT28nfFkR7AJJWAbX1fy4YdZJtCZkbJLuokBpGhTKyAouGdP6XhAsHFEFxVVbUyoPge",
  "key8": "4L58goBRHiZroEGnU2Dtm4Fa2sA4JPafFc44Ls9PGAPNcRv1qbjwQGWH2jkVsWSwERAvbyf1PSEKqXsSNcCe55Ux",
  "key9": "5zmSwNhE3easE7P947er5ncEDziXPwgEZndy8CQv1xBRcULLae5KB19JYqc35fbkG7DRcyM91FuGCdVWZodcbDMQ",
  "key10": "gRHy1Y6dqv2CueC1gHFC3dPsXQNHt58XP9izr2HTNg2qizXi2NWJP4dqh7Cqzxuofw6TpV2M3DpworNXVeyaFqk",
  "key11": "5jLYv6DfZAgAeV3WNXFcAUJQHeAq5asDS5nBBxqL9bYtzBWUSSqxyKUT7Wok94Ay8psj1dmsgwtNSKnVbzFJGL2K",
  "key12": "64zZo77QYg1Pzrki1GdiMUvTFQ9BZCpAUiXTVvTZ1DrBC9nFgJQ9Hgn7zgkVKbswZoPh139ggTXSc8TkZLSyQ4Hm",
  "key13": "2FTinLNYynDDBsQy28Th1azqp9gRjv1jLbcjA6cAecac4s7f7JZUGfXi6rCESgDyZ7FQcKdxm1Pf8d1QbufwRTbF",
  "key14": "LZovadrwhzcsc3wtwPLtLCT8LL3REQ9Qwg4VGkwccAfavg22kvj721a5msPgxih8n5beWPv1viENDUsibtaxK29",
  "key15": "2NwuhNbZNmzEfZ97P6k4rJMAfv8Ni9iyrSQtALMcAtZourU5WruTXRgX3yPtihwH3pMsLtXhtsZj5dQNkE44YUHW",
  "key16": "3UF4KB6MucaqBryYpqf74VbbsyYF33R2yQXhs91RkaapZogfPRhbejHgEK2s87wLEMjC6t1P9rdg9QTcn6mf5tv9",
  "key17": "aXfde43LMRk9UVFpEDuX1BZuNZ3GKfEKCwYyjiKBuQEcvqcoYKgBU3Y5jw6aJzf459gorLren1BUu6eg1hUov8Z",
  "key18": "5VrDAC4JCbE9EE7P5L7J76om2Sq9VLtS3o5pW6tT7R1Hu5jqUNspDVpU69kzxUXDysZpcUXki84VWPqc5JZFw7ic",
  "key19": "3H5MGLHEahTi2RsDx4jGE1JFHVNgmUD7trGfYgujuc3tpfARr9YwJaDsBo5h6S7kzg6t486MTuVN6Mevptm3FzUv",
  "key20": "3b8o1U2pjo4bHS5bsPZMiWCUrz7TFVamEXzkvvMmUNKqN6xyXfGHyPzojBpScTGxdcTMhDVoBJNucKFkyNBbDnmN",
  "key21": "5T919g2jVRAAXCeoDU4HcczrkVeqymFKeJMN4t81TeWPgHzkbxUQaiu4oauiyfw4y83xVmVrkvsSmxVWPFQjxq4",
  "key22": "2UQRAD9VBWYUYh1ZohugX1jDD9EAyoxYXi2p84n2ekb6ZbMqjgcrDxkDRRFxyzZkL3qV982J6WnpM7SjXvtBpWDu",
  "key23": "3bop5oT1i59BRWFD2ffStdQZi3F5ftkU3kX7aLC7BYsKZsRrBf6CK9vK1XEJXFVbzLW3bDoANP8gNiNugJr6EUYf",
  "key24": "51JD1kxYxckqhRDnPdAdoRZJLDqwCs2bD5H4G2tm3BUswkAJYCrsR1KToSExi62CqNdfPxXja1xUTzNwaECAfnKe",
  "key25": "4UuqQCkE6oxxjB5L45QPhTTKhE4xnXZtgMzpV3wKMK1UQfGb8ri3RLdAeSz2RoVZ32zUCLe5yLHQr59hXYiS4X7e",
  "key26": "2vJ2tAnZAiTqViok1N1CcgisPKK9fXSvWocpDzEz5umC9gp6RhrzVKjoaquuZAZ7GD64x8Zhic5ZtLAzcbcB3suN",
  "key27": "2TQxUgzShEVEfFL7DRAXn6xBTXMyMvpriXUvbrxDUNFjpQePiC5Mc5kJQ6Xkz3Zc9UVRceD41qqyqXgqTcMnwV28",
  "key28": "FpbhHZvwEobaLNG4tKQuXejY52GiHPJwzrDa8uzKc8i7PujBKvywryXBau3uKCuJWQPYvKepB6eEKJH36wmpqet",
  "key29": "3NSzXpUWq2cRC36es2nG5Waq3GQDM1HFW4nV8MCDanSHyGivtkpnUw85L7fEi2ncd2isCDDccRFaji3QJFGiS3Vr",
  "key30": "24mRfzf4T7QiLwjDBJB9nmt2oge4BvX8aY2BLctQ1MyNuS7EK1FEyTb9oyqYyoxZ2BfftnEHRHweG25qz1GQchCD"
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

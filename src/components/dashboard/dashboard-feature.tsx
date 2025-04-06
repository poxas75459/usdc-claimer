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
    "3WN2DAD75yPSLCfCHW6esvV9BSDK6wK3PRPYnhhDeuG9kZx9D9H49e2qJCDqDoRFdhPH2C1pXDWpYAtYpncTnCGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LAtkZxUqGdXFkTbsHQ52z9ejNaj5r2V3zqPTWAuHo9bFxKQopG13JBrUtU3BQn5qoY2cMcLSz1LPG6D81P6hbS9",
  "key1": "4S39ENZoNFZQ35Hp3GNWehHVEP527PDnXWpEFn5JWEuqYmapaLkS9P2suRZLkXoEGuTnM3cG8YAGYSUomqnnPTzG",
  "key2": "2B86nuENtzCf7ngbZtPMd9tTP8VQwZVkdA6aEFyDAyfXNkeH9kuKw4VBkmkh5Rv3t61MBio4h3WQtmWwnEscvUt8",
  "key3": "gSxCZ7hF65g7V4jWNayU1cpUBcfB5iZgcgbZoxrnSbR4RE4hCfNpugQxY5MotbWWsyyXfKwbABTBXdeYAqvNRqT",
  "key4": "3RwCiUcTdyrE9eLkEASmcsf9XWqViUmh2srJQT592eg4MPbmknFNmdrb65bdeNoZZvc92pRTv3GjLAj8ixFdVRRt",
  "key5": "5YssLqwfuNDBjWiyZMC4T3g6moLaDqv6v4ff7MD6uZmZ4eE87SgpEhDKPXk6dtghVL8gVmRtafvAWYvS4XvxTDh2",
  "key6": "4z7EjwEJbqwJRFT254rZXs9ith7LFBLvjTzRD2B8LXaoQiayZbsfwgDVgbFjYiNKGHFdP9hH4SgiWgovYmX1cPw8",
  "key7": "2mcKPTtrXU4qTPy2nZarbgoiXBx1puWQgSfjFVMxdUUQCaNMqt7Td3Yu1BcYEmBCr3oz9N95w3dtAJ1ZiKcEi7Mr",
  "key8": "5k7G1KdsRJvZpubVUneudeD4WKVQ3qwskrbSLUrVs6261Mh7QYefQJBTCnQf8qDRsE578mdPhtgFmQDcaGPkoaCg",
  "key9": "asJt2PoJ27e3STfBnqFfRDwYwMNqLZusF4C2rkZ8XVCpeFmbjsQTL7JzoPuCRkFDQss2dPLJLUinrhhqcLUdVqf",
  "key10": "T8YFPFLQFcVnNUzJdzq5n3zuWbRyhtCiKLX6sJD1tHn5XqNR1QhbXmC5rVs42R8RH1zzncgJp71d1VsueMsxVjo",
  "key11": "3bkaZ9xJ7aMtywCNFGrXe3CTDVQs4c9Jv95n1o4r5Yz3vNzLEcRH3BTUQHQmHcpnpNrFEk3Fo9GGzVk1d8cjBBRc",
  "key12": "41pEVjKN9tSWpRj7m9sJG36QNijp9cEYKsZyh57wqYNo816tcFEF47m6aLLdk1LedfUHS71Yt2Y8gx61YmyMwFHk",
  "key13": "4HKAdUoGEV6WKDuknbBuw9yn42Ciup7bACnCqVXC1BYrET78VLTydMtaGakFGDnVavZhZwE2rwdhMbraypCVha1E",
  "key14": "2GKhj86mYUf7MKtkVmdCsD5oUoPukvADf7WPzHxukjj9KWR2ENRoEoxixWuwbwtundixtiEbzCcexgJtwU1CpEd9",
  "key15": "4c9VjyCtFPq9scJoHA3GWkuz9HNetiiYC1wq3EHyATMp7T9qsmtyzEkqa27kbNhuqL616fhC7nudirqbsGVNJYw8",
  "key16": "4Ro1QcCVi8S1wTpKeBy3pYHNtNp1mSKh8tVXTQkGDrD99m7oVmzw2PHGv3NWt6vUP8j7AxpRfDSFKRbVusaioQn9",
  "key17": "654Eea8q3Qh7HRoZfSb2tniaT21GNCakZfgDaVXPeENmfkGL6rYCd4oh3Z1wxQtNHooAPwumWnHfnd8LZiXcaCMf",
  "key18": "4uzim7Ae9RwYzirBqZx5uefou8oR42xD6wyz2JmYNoG9vFLLUJos6NQKgk2mkFKJMCkppAY5MAqFxcf8iCDffFdc",
  "key19": "dcFTUrb4gHYGUkGwTgPs6GT4jX1Rk7bumVJ1eEh3SRq1toVw2tovDTA6w9BYMKFAU3SR7cnNy3pwY4GKmxwh2bL",
  "key20": "33eon4UHGgqesbqZ7prZksYqjzGZ4aoDzNuoDAjqTEnenkqYPyoPgMhPPEmZDDcFsdFmwVJeco81yyfbNsKvFP5",
  "key21": "5FdX86wXuX7bxtiKLfrcaYc69vtSwVfUCneXukZkaQvNfE7cchZi6WAQm14KoQzfPAHiKbLzCtEDCUUr5a6eoAXu",
  "key22": "asTunXWkCKHHmRAkgpKrfbisGg9Sk1weVG6UxWUpaKmYjyGpt3zAwnjqHom8m8qVjbwEwUdvnBJ8toYpbrVU5R8",
  "key23": "2ud8M4DnhQFbRD6Au3gKQtjnmyUTQLNR3csCPkuUUuECudU9MVMTEJnMWiWvoEWNir6QvBm7Q3CtJZg7PFQcYR6u",
  "key24": "3XEhzHfpoCrPyAdRUCwnLgKFhLwbkkSJR8iLG1rppCLQ2B6p3f6tqYLWvWDF3EtBTjoHv3PJVGD9UAsv2HV2QAP2",
  "key25": "3i3h3it16abTPhe2CtyVFXyHjpXJ4xjmxBeiWiTTE67mWEDSQAsPXfBQ8ajjjVXmVdfhM6Hmzv3xPPkWEbXT9Yq9",
  "key26": "2qBUQjfpMMKpAoonk6YMPp9Dtpx3Mekr3QGgr5tPRgLe9TWZUzTo31bQLDyy3U5J6k8GBds7XoCAeBNAmSYoDe6T",
  "key27": "4gMZ8K4BabGwvYUc5xCFCAAPy6iGdWj5UTJ2iyb9MASkkypzLJZshp8VmXxXQoSrjx9CD1ZFv4Znadbu3HpTbHT6",
  "key28": "2DPoXM6YnAMaSd7viRzuBdzJnwaWt7BR22oTY28UzpCxaqLpARBHx31CVNrVj1NJjr87WysT6uXJBJRT3qF2bU48"
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

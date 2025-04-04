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
    "3hKLbNnSzZPtB8LjX7qFSqpj7wET4HUtuaQ1XZLJmaMsUEC3K4cTz3FFpR5vr5ahuBQBeNxU7wLsMo1ovnfd8zEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1cMqpqA72sy9Bi9NC39h1dFXiwab6VX14kCTV1KMP2u1Lrz4QLurtJyphn1Yh6GYhpJrxoYvTrqEH5zZXWSC3U",
  "key1": "2otRjj8KeGVqrcpVeotJ1cm5reBNUqz1nvobAgagxZJMTkvoWiwXYXEV9gFvadrkgWPktj5FX3BQ3ecj8KWWi3eV",
  "key2": "4k31fT35Yftgwww7Eu2p3yMoRp9dKNtaqEBJrWH3mss62TWHo3cp2bK3mKfTqYBJwCaYp8ZZwfnxhwdwCMLY2yYL",
  "key3": "2xeWCKkudfUWQPvy6aJpdDcPZQQwh9JeK8ADege4PrmsqsbAUyeiuE8jGG5VUGPEmDNDmGm2rN8bWRQzU5fCofeY",
  "key4": "5HenmqCqJjvDtjMBMBxQAj1yiFNwZpWrvXcDjniA2vj7JF9WXzx4YgA27WVzZhU5cnUJgDYwkrXDxKpFMmRUKGSR",
  "key5": "5v979kgLAHpyA6sKwZ2UgkiTXRcTaQANwJq1AqJnGqvYd1ApfZRFmUPEsfMtjme2K7BeHphrJXFz2HbQf7v2vJWk",
  "key6": "2ZQ1BxbrcwqQ1JzTrF31WZLaioWmS6jmDLvSBGabnKiZh3qtGzoMobDQq1WESE7mgKzTwfBakYoqBQueMRP4aXmf",
  "key7": "4YkUei8sk3r2hF8qWe9mn9DBh4qX4bqKpviU1AZ8sxo2V3gYTj9DNQE8rzJAj9c133tnexz5cBsdWYcWtRkzytm4",
  "key8": "25kWNmdAqkLfScgoxxKmiezcLCBvCu8PKgHxFE3ZxGKPbHDAqjJFGXkuA2pNd3mGfsdxUmkmbVyg9FKik1qWXfKY",
  "key9": "3Xydyc9aUvZrGauayVuXn5pA7MqLtSgKmFYVBgpKXMLxi4cAibAkEHxVv19c7esRMCpkf9LmEzegzceU7jhzyWTL",
  "key10": "5nUvLxj9WhSTAVBsFanRXnbr9XzTgMgWHmugbVtZqsPtT9JtnLET2Z2K8tT34XnKW33C6bnDJ4iBfmr2MWGdGkVB",
  "key11": "4dXS6Lnm5rUDL5CmyYwq27oGYkNHqbBiPoGBEi17tpk7thdiV5898cEpoTx6DY64DjvWrTUc1YF4JHsiotgegix8",
  "key12": "5paQxcXNfj6Nkv92dzygbrVZs5omApCLUANspGqSYBuzncLppagnR3L9evH2qKzneHSTbbbeMQ42nDWkJHDsn1QJ",
  "key13": "2ieY6ugUsmf5yD5SAhjSXkf2T2isU8WqQ3dUgbUiA4FKfwtYiqVgcXBYXuoqeHBw6qocRc6ga4e7c5nNQkfa7sNM",
  "key14": "4hcy5aSKZ5JKdK2XdFiJomQxvtRvX6QHYWxYCaQ9QJypf9XhtsimSjhKdXVs57TiTqLPX9ikeHzATeD8GdFvLGqp",
  "key15": "5yggKA3QALm6yj4AsdqA1BKMP42xjRtgCKShxbjFJpzcjt7gPeSfJ9EYAe1tv6DZSNM28gowJTV2pT9k5Bb7E2oS",
  "key16": "5pVB193gpZVD9ohmA2RRuqqzdSiarwk1ZgSnKo2ppnsHYafs3QHoiBwthxNDeSHc9a3JSPsHCh3D2Fh1uuLgathb",
  "key17": "5U3kAorCjx8dgUdMQPm9C31ZY42Qd2Y7CiBDaXnkR8i8KuP8hgfB4WV9bbiG3FRTVW4HBsNAZBkdia2FqhqnV4F",
  "key18": "5stN5pmjPhremDXmCgV4Qsubbiig447mLi1HMocU6dWby7ZnoSzHzGh7EV1oT46rZpkLtUENEF6FpMNuQrJRDGhw",
  "key19": "5YqhXNDiZHBDTMvznXyDB516ibwnbRbND1Hp9yAW2Za7cBha8CQFRb9kDbYsP5fsHALZ2pWquDVGvni8ZSDtCuHT",
  "key20": "2f1gabEQgwd2U7cqxmXK9VjxzbP2k6HjjzuXSDKCoEn7QoyT8iTbTz9Zpz2bUzQoHtAZrZr7MiZNzj4Ssvf8wfgy",
  "key21": "3vryQzdS3HiHFzYF2Wk7E2Y6CtejJqTkhUMxzcWEBou81E9bNi5Z26bNDRW9yHYEFULbK23bvid1B7G6Ktw2aNMK",
  "key22": "5oN8v3ZqkCqxWQdoBzvB9ZhVib5P9LxJ8EWiDyphNrwhizSTPDucnyT4sjp1GHEMdhCKEzsSbJfeL5KA1qLdCuoR",
  "key23": "dde1GCFKNF9iVizpxmyVwbxarynoYNzDSwTCXRc2Zcjn4XRkjAsAJmUoGdaewKW7XkvQLA5eZeWq2FHegarVrCQ",
  "key24": "2t5TRwtcRsrT6e7fPLXBZYY4dSNA339zEUA3F21JeNurqFqxSp1gRcvpXSzEScNXFoPwda7KbPaE3nhZpY1ZniUM",
  "key25": "5M9TaTUESnqcuskox4wWH97Ro2uZXAhRbfWPmAbv1fWRqDLWm9xgiv8JWjGma6VcM6yH7eGk5JHXPLQCr6ctgF1h",
  "key26": "3r9xKHKX4UJnxjroB8uHFNLC4pLekaF4WErxmjiYX7Jwj6a88jiuQYv1EBKvR6RuK5ZmntuShMWfYZmLe9asq8i2"
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

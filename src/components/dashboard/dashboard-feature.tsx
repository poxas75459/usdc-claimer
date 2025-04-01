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
    "4kMLKnWXh6QLEHocAUGtLAE1PdhY7gD8NtiL7vXydcpjRpufvF1T3PUtUdWQuvZScgPCC6hNSWxXzb1bmjPHYt9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3ARqs7MEDN7PkjtN8sLpNwxygXY45YV722vLPNNXVZyc9hsoCPHab5HSKfaAYN3JjukP4sEdqutbqzLnpi7D3R",
  "key1": "4geiP3gbWL6bStPm2zhTbPoxCAshB6r2FDSpqYToVXrcK9auadujcpFAN2MvsiyHNCVFDo7SkVtcxDQhMuB9h9DD",
  "key2": "4eKJr9JNsWwhogMDA8LuAXn65G73tKz5wRPXQPaXF1tayhP1jGNGRvwreEpXue46VzJkyjEwb9ChEvbMn636uWFA",
  "key3": "2AfBGCnibyeq79k2STLrSta3zeNY7BSTZT7YnDx91LDBU1ACPzLo8weRRJiCbpTu6QoSZywSTzZu8UermeTxVBwb",
  "key4": "USW8vT4hP4dVSZ37t2ozt3YGXWxXT4P9nrV9FqiiQzttxS2wHjGFB53UXwCUpCyhf46XQaFXSCaNgZVroSWxb8H",
  "key5": "3yUMuTED45hj3vkQR9SQvNvdMRsjFdyNo224knkjQTnxSUo9w3Pdq3svkH553JEFqNBdXVjHC5NVorgnyfR2BwK6",
  "key6": "keGXWoKjWK6SFa6HLbWytZnkXLFRY9KBQ7CduedbzBks23mycp23KgKp4e9tnShDoE1ynNsitu3DdDNpsQHh4rF",
  "key7": "n389tfMBffTa9HJ95WU6BvDq4Ao4XinXzroMZa7Fd5yg5Di1K4XY8msehdmPgyh6u2qy5WxdzCou1yFHUK3A12R",
  "key8": "gvP7QN8yGKte9kc7AosyGCGcjyeUMnD6oQrpaX6ppNcUcD4hxkYCNBgCGrhrbg3TtZPHNd4KQALGsAQeP3Kg45u",
  "key9": "35M7zH9qLgAxQQqgbYe12JE6S2P59qwosyumsgYZER77UyWrHsiKoLYkCGzhitV5KXVrRnbWtvSgotLA86xV8upW",
  "key10": "5EbjwEAJB16N776wfAok8TaN1S3fXoZJMfWutE1CAhLAeaEmau2QGBPAYJzhr3mzp2F5tdkCWaCcA9Eevnudks3n",
  "key11": "2odh8YpeCZcdaYLWquFAoshPRMhQbHvRNMWmkK6ojXB9i14nQNTavDKscAtmqZXmLtVDpUuDqJkNpysHdikCKT2o",
  "key12": "23s6S8yuQjGLaXirZM5eq4AQTYb7fjMFRmFJLEhnyVca3EDnVJDqeDnUThiSCrJSVTg9B5aYQHXNbeFWAQNgdNDD",
  "key13": "5wUrR7S44BbmMxUzQ7Ch6xXWLnt9KUrKRv8p8J3ofJhCYMsct94XLrnbhDpSHyoxDkUnTooLiZ22jEVyX1zGpzzD",
  "key14": "TM2sen3ghaRpKUpgnpM6cbE4bSgudxKSXYMvXEnUSMNQBbAkSvdnVH6AQK6iBwqmq5S6TDEjbf5p34zvMxatEhE",
  "key15": "2BTcDCr2PXvycUDvewRXs5kL9fB8D631qEUkwsY6yVdnQD1jNoKsQ9Copv1Gmqbsuu6wNW3JdUMKoWQxA8N5VG6a",
  "key16": "2Qa2yweCjU2fiAz6TsfVfv19n2xsQN2kXj1AzfNmJHnoqkRaxVzDqexo6BUXsiJroo5gRvLiskSXfhZbWQ2WTL6S",
  "key17": "3PKPHmJzVp1TkoFDuugh2jVSzhoD74Ls4FA2JLT5n3bczuKomPYZn74C5eT8qsXc1ofoubnYq139UhsLbFEg8Lfo",
  "key18": "FxA1VXo3aBhQ2tEzFVjz9FJvmAjF2A5VUZDGd9W1s1QD1BHmEKz8Gzr7o8dPEVEvjSARydYQNDaUQGVV7K8iLy9",
  "key19": "Rav473iHask8BRGb2FLDvvDEvZUcaejeFTNahFYjT6KkWw6jpfwjXkhVbiVjgWq1AzLLTSUPhoVPS9umjt1q6VK",
  "key20": "2yLZ3NNFmSaXCtM8twURYQbcb9hRYmmuT2NK4C92ogjfirn5JmsEZjpRbpgKKBBikn3EibVSDtpdAEALkc6TJrzy",
  "key21": "2TZxZFv7w6oczimFDPsJhP4mukEx3U19wWUkNuzcb4b1G78CBqGu4evLFRA2pDyCGY8ECtMnLiSTewnr2NyWQxBx",
  "key22": "59yZbRDDAgzCmawHDSmjy2viVNoHEEEqMrj8p39unY1CKG5MfaehBCq6SbvRUhSJyDTmk2pRCo58UiTux3uyX3Tn",
  "key23": "2Z3n5XN4qbUUTumzD1o5GVbEdRoTNhxYg5GnJ4Sa4NcwBWNTDSzmYZ2DjALTW9Z931vzKmPtKhFJTFKLqAibmWdE",
  "key24": "4ixnCPJt9Lj581c387NKXc7Cj8wZuUZLDLPuWfLLNevMdnwsBgzG6wMaAYLuUJPhHPDQqPJzrTx8MqiKCqMsSLGx",
  "key25": "2yZ3Nvqkeuta4bqUmhVmM6R66mFHe7FNRN7gtQWLiMFzqk2wpk8mZuwwSiKJCpZBjFYMoPoHVNZ9TMbW5XD4ctoZ",
  "key26": "5aX9nkr85EyLup2U6pbqVsCD8TFHwAiwMbJuMBkEhbuNhWXGJcFpmQa5S9LbUdKnoiMsgt67PkjLea7ftbvgc7Ze",
  "key27": "3FL44NVYWqUAb2urVnjJE1FifRmSakcQoLcXYFAPtconL3C1KsYFb22rHRFb9yz3nfH5Ncg5MABWaBBzdkvMBuwh",
  "key28": "2Qm6bC3qXbh7QzQT6v48zuxFykcGpmH11wSSeGNxVBGnVTQ5JcaGdGrhdBKV7qMxZ3vUgzNMuAifJpiCm6jLvhE7",
  "key29": "5qsLWkv1i5g3FXSb6njkSrjNPLHNV5gwUZinVjAAvQUBvf2iavMCdCyRcPfEcnfFLCg8Sqzd8YyovRsmjVToNz6V",
  "key30": "3ysfFuyMnpzN2yYZGGqwsKnj6YbPwwsdNs2Mr5BajfUHdFXPuhmVLzQpevb9gUoh5pt3FgxVUvs3xQBSBVaYnV4i",
  "key31": "58hPnejewNYtwzPHk78FCevVXQxCUHd4cqj1pMaGGKLtg9qp6GF3E9uS7DeTrQFBunaxeWn3rzeDsztCAV5EFAkq",
  "key32": "5ufLyejMTC2EP6DMiGgdtWn7KKNrv9eaRkqKibe9gLQ7hkYEE9MbuBsJ6fsaqoasSmXdrgDyS3VBvLgJz2T6WwZq",
  "key33": "5cJqWbwh1S3omvf3AiMPdZVYuMYdtnwcQ7j4eZ4yS6pDG93ceBz2vg4Bx6HmRGBzxQ9vk3DKLf7M2T8vFq5hfcvJ",
  "key34": "3TjuutHJviWPH2jFogEcoRbiob25yubSu9NvBvV6bbaG94NoFTowSEXcZnEtH9cbKMs9tag4kXbgNBoH79MBWbiq",
  "key35": "qcknrcC397HZ2VMQ1RiKKpkf1PWY1LWkU2aCVb9w9vNmtYQCSNRt9L8MCZwmsYhzhPdM3axxqsNuth8Z9mdUj5R",
  "key36": "2HCNPBt4GsksmdYL7hsGPFoGx9TUkf3WWsuyTm3so3tVp5iHxmXvunpV6yHPDMbvrRDnyhDESatknacMPPTiU3uS",
  "key37": "QgzcXXuTJsN7pkAQitweQhZEqv7T7TdY6QQv1R3vk6kZqL2kCMbFJiM19sm9wnPiia4qKZXy9qY1mtjenBxc5qK",
  "key38": "2wQUWhv7ms6GVYLx5XuZY2WQVHyhKV76tgcuivgRXeuY6wv1aCyMcfiub6YnHFKzuqUHpFbvBPGfmTNVvWpgzkx9",
  "key39": "9QgwMGMLf2kYYNpTJcmgjUEdvnJHKVWniTgbvjiqbXU16vYwUUqwKFR6XWhp15BS8S92gGNSs86yHKFUczXhB3n",
  "key40": "5H6RPh9rA2YyNLyYrL2BN4XY2n58J3hdWnHTiNRQyHA2EJHddu6rMrMJcqPaUWpemYgg8TzVW9atNRo8nmPstoJ5",
  "key41": "3RnKEFGyMK94Hh6MZj1WC7GBJZf1hWdEDUpJRPu8eghKCtmu8XMkAHnHv7cshZccp41sPE6NWdojhRkiSd2K7iR4",
  "key42": "BLTHNUwA88XVSY5sLwQVgAaimNACi5eLvTvuXAycXpRWVHVN1R9t1WFuX15qf6uk8PYTeguHgKCki55SJSsetZh",
  "key43": "J1sye6PkhHnUXj3giAKYHv5cLYxeLPkcaYiKHQgAEmMjhmsgyKCs56J1oFEHmgm7wRzBQY57fPHw645XRdF8ATk",
  "key44": "3oHXsVmkmqcnpuiexpnftTfW8yLj1ekzsCh7fQH1rLLHX3nGa5A3RfhnwrBBynG7BYQgoXVSQjNNUzJ4r697c3MU",
  "key45": "3ooWdpuF2pzXpD3Mz2gzHywHWrLgVNqZBVECYbMRZQdjRZn8hvtfXi4X6yYu1Npbmp3FwvUerkkhGf2GjR9n6CwE",
  "key46": "3N8KN2v9oHxBL9bj2Z5xCJGwU29sW6c7yMbVCtv4bpuLGtbWof3CKAXeNakTCoWnBKgbe3AZt6aHczTV33V1BbbY",
  "key47": "4eaWxg7nAuiR2w9D895WwvBP4A78dPwtrsNiKzzUptofWTnZJnGLKotw1293FNKeGTNsqeAiiDsDd1gkvi1v9kLA"
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

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
    "2avqPPgyPd7Di9fnKrV59FxHc39GR5BpGRMVqo9drScrf3xscdnVBhKZvwP16xxvFRA4GjVxrj7k4uAQux6d5gvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xXvUw4QzS7kNNLmbeoX9HsX3FsuWkWdF1TJ5syt2GH9hjDXk8GFCJPQxdgwEwEwnvMC8Q5cRh3WFc71X9QdtGgP",
  "key1": "57C3iRfBSYQ4F4Q7J9DcMnuJawob1Gxa8TFNphiKj18eXoCzUrfvqfT9Ks4eL6Tvxap3r1BcdAszhmUbXE7DNEKB",
  "key2": "2aCQiAkmBj5mjf6jGBCkvDajMceRZYvawHNh5kWMnMcbGFkDQDW9RML3GGh7nQhp7qsP6B6fF1csEwQuctKU3fQ7",
  "key3": "67FVPWTs6KLpKMqKwnZELU8jdgv6anbb7cjaZQsCsqPpR3cnWqJBxYhcu4AyRbjmKFBUuChi6QWHQ4s8xruuuwTu",
  "key4": "2LFBfi6HopJDruivKVbqEWZwdqZF2Truah9Bix3b29DGMKMoD7k9ExMqnon2Kjhfvjdbt6BGFczNeKUpbtyD4dpQ",
  "key5": "FKWuBYvwntY4f8VuNATHFKGZUKK67bAdPaup4P57PezXx6QeJ3dgzytZxeT8HcFB1ruryk3FBhjn2RugmuPDeM6",
  "key6": "2YT6fLZVGS49SsSiNureaRtKdXCvkoaMzvDtyZuvHLJxxWuajSpj5nQ6oRxxXkTEf9p4Tu4pNcMzRETiBiJBZSeU",
  "key7": "3KJpqBk2uKveB9GGp7krisvKVKcpV3Uhg15D2m65ArXC8AUeUfzBnxTPz8Lq39R55WKfaHELkL7o1icmLwT8GLJj",
  "key8": "wqC8ZWQU6aNohUKWz75mUAkJWjn1rFurQTMBKT3dCxBB8oXc6fpP4hQzL8vDvkJXbBaUXEbZgdhXPNBFMrDXtoD",
  "key9": "CrDLBYdyqNXdFsXYCHHxojHyLoJrvm36QtFvYGQv4qXo9C5vYX8XFCYKR5BhsEMwhgiUv4LCENuFfLFimx8Q5cu",
  "key10": "7hzfEkn3HfBrkfD17bw8LpLSPuFM38JqVNwmsdzieatMerktjKEpP2sv29zd4nZwi9ibbx9FPRTPP2gekytkdsn",
  "key11": "4A19z83rfgvL2zvkEx3PfcrpARDbjY8aFeZcSe5JGVEumGh4JGzCMmsAavgnPhr67ovqXPzQEW5dama4bnvf3B8",
  "key12": "mSWX98jLLaXQDEtjfQ7LMvmsxU63o4ZPLqehzTaYdTmKyxcMySKc1LAsNfDXqp2VGU2R8Vrh3FDnPpRBnny9AQW",
  "key13": "5HAKR6Q6SB98Bb57zn3VXq4JiWq5uk1EsdcLNTJzQBHxJ7y29DCuWCxVgY1KuZzoo9TAQxmFNPB3EoPannLwUXqv",
  "key14": "32stzaPRNygjQRd4UAGC3qmWBKt4p9XQf6jgUuZhtP1vTQuinNAWw4v2mQycur4C5txcGruWhjC9UmPn2fbPSNgy",
  "key15": "2Lkt73Mzemo4VnvN7yXVwVRf3f6RWuoPzPXDcqmX9J1vfFbUnQvXJk7RtshZUgQS6RjAMrB8amvYtPegQ1KYjwMu",
  "key16": "3Ccr98skoBAsaG2RWdihppozasea9QFh1JnnzYiZi8oCG81CLDXGHoBmuY6ZK83yARD9akZ4iDjTYVA8V6w24B4V",
  "key17": "4o2a8eM8kY8msXQQ71HFDhGEqCNqo4Ux7iSecRQfjsgTqUc3nEtemMVCVN6FhP2AeJz5szYpQVVP5yENJcb4uc81",
  "key18": "2TgXCwBAXMNg9dULGY7XM1u7GZtLtahiB8ZVXwB2PNF9K4Va6CA9qQf6fVrHYPFxk5mt2Jr7E5CJXoyCM8LdzCeq",
  "key19": "3eVNa4J8LCFz6dLaLMNv6tRdEb62tQQ4xFHWALwGLUE5gP2ZabTNF1Vw6m59PKFzCReoviFJUX5vEDhdL6eder74",
  "key20": "4jeAJXdYtKUJa8BwjiBXjSW9tyNZBGoohzR5qMp87R4Bf7mpwmNyug2WsV26ebWyhMQ25U3RSRabXUCQTGwNyAf",
  "key21": "3VYGZnFCSdgyJEWpDsoHxwnnSnwLgMukdEcD6uyKyx5BdMasABJVLu47rigBkZdBQAP4ZLxY5rx9doSeXyHB8drk",
  "key22": "3TJi965Lcd8vPePxPDijxZ4Q9R8E5eh8L2JckRgXXKeVed22BCtFFGkE9USZQPnTsbSM44jNnznC4FxUYaV2Cn6X",
  "key23": "41EEzscjQ8aTWkj7kAmxJVeiNWbetWFgUG24xM16dKYFnJZi314guMRp6tph6AHQHNV4yVMtN71h7qLJQVciBiGt",
  "key24": "2KwiaNgTvEwY86UjDJ3Bs1zvoK5LKVTykqHFTmTis9C2ARRpbjkq8SK8vdvHbpnpv7eLCjnzgddXnNq6CW8uVrEN",
  "key25": "45EyLv6fNG1EgnwCCNobyWNgeauiSuVvYKezLbVHwawT52n7q8mgPtURuaJcapYo5gzT7Lt7fxWxPM6vrZoo37Q5",
  "key26": "ktQjx145i8ZuGSivyY3MwQoRWGBPdx4d2Sd8AjcAeuZHELVdhdCQQVYoyqGvnRM326SFm8znTL8ZM7GhEFu3fSL",
  "key27": "5ZKmAnknNFop6TLPEe8fSiS2hEmvRKUAwuSXETG1hALrpCHjoDWsJgUDk7dKDMS7rPEHQkRHsTHLFUzyyEybNvLs",
  "key28": "52TQ9Chc77XWTRYBURLfLRHKSZREAyYG5xwGjPgA8tz1zZrZpsRj7dHi55iiWqyABGcskcHfbkKUU9VGWgCp8HuS",
  "key29": "2V5vkCibKCZNRQsUdBipC5LMzrjpna6wvNb5gYnpHgd2UZKRrgciE88rpGgp8uGTGYpgc3WCUds6VA2NcJmz6ruW",
  "key30": "2QfuDNKSgaBTHYfvZsaxDqZxwc9518RfMfi9LRigCZc2TigJgubakh1GTDWEhpcfgfF9BCcPJMFWL6qaha5yrJmT",
  "key31": "mNGJZdKcGtFzMCS1NqXqR9faFU1qxfENdH5eNfMBU958JUjtbNGHYDuuka2e5HXNdNXJNPJnNSiJC6VnxvKrFyn",
  "key32": "Erevu9B6BzeXCNqBW4vrbS2euT9XKsVVbDtT7LyV3NS1VnDwsSRQM7P312U4aAougcrXuanLvhyAPfie3ZdmoLZ",
  "key33": "36XbsfpAcQDGCFqYodBgvC3r8HfthPQnHDVyMbX4KumT87Puf2VqZY1ikrqDu7Lojc71J7fNYDV9W1x4kEf18aoK",
  "key34": "33cWZ4r1v4Vr17PGuyTtLJ7pgfzeSwNLFWjwpyTK5mNhuaA4JN96VWPiZviWr7Nmh6n4ig1BN95fCDDrC9MVDjAP",
  "key35": "43EhDwbQK6JKq9UH9Jxkf5V58aN7viLosqDJBfDXxcvNXCNaox9Lpzu1NAJZ6RejUbfgcFyM3b8NdAwdPmw52F9Q",
  "key36": "2YyBhVdtHPYmGsLifktWHxNzU1H81ZxjEzHmRnwPxV4NxtmAfB2tU3ePMK8FVBKvTXT4eJvUesHjB2jKfZX2mUiZ",
  "key37": "4bfzKSQUzin6ZybyoVa9kdWvV7f6QeTyCn6qQzpj26CeheWX4TdEC4rR1BA7M8kMeEeC4j9nZh5iBD3XsPe44kw1",
  "key38": "2sPm55AzRyoBNrK798XsDJPjLs7tb7E5StZpPMMFFAH2apQaRvurFPHa8cUpBLTfEWGnSXiZPWptyomdwbEfZhKg",
  "key39": "37i1M61a4er89rA7tyFMckRVX4mUb4HtP8uJGkqg6eJeNni3q9X18TZMt7y6xLbJvFCPi31nFkjZ6znkUqDuRnr1"
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

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
    "Q9auF3cYAreS5GddRgQJFVeED4WKaXscAX4mVK778pL5PrmrFSBMVtguP2Xx9UgkUrTsizGBMSVkn3HHALunE1c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35LKNETTH9urr6Jw9cpMgSbHKQ3mH7vsN3AXjxSofUUJKY2ofND1rT6gf9KFa4cAQvrWUEfy2ECkg7nUdFLVffVW",
  "key1": "3aMHUG2mivqm2cSRiGRCyjwv2RcGSRJvRqpubK2HfJXQeUf978zR4uicrKRSboFb7aqFpUybkpseH7YhBaw8yuT4",
  "key2": "5uYXDRebq9JVfWJBNHJGL6wwXxH5mxHpSGt1bYXcxj4XCiFrPDGYi74eppXsJ5dqJZTC1vXGeUTr6ojiWrPhBUjQ",
  "key3": "47Sn7YA7rKQduQ2r4XDMf678djCnTeKoRg6WrLw6peXaTVPf6GQCp2BfnpQ6BJ2FXFyvQnRwvGyuxM1qtfcTJ6Va",
  "key4": "4cW8tKQRjoA1uBBtbHWmy8h4jJP2XVUqxTkHhS8FhN5a9TYvUMnenLFjUo59c5WmsVr6N7LpE7wiEcXeLaNvwKyA",
  "key5": "311TTgHkgwbYxKRnDwdqxxhJVCTGJiARMHehpcTrKSjoYUZo3STAwbWqhm9uSDgBha59Qhf3m3peApbCC9LVZUf9",
  "key6": "3kCTL99riiXrLFfu1qV6erFe8D7i8oZaBRikYiuHoNmQuUYF7pXceVKh7rsdNK7andWc823E85tkUD91XqFFcmUz",
  "key7": "122oJGnZwtaYrAAf4rvRUY6Lj6LWT61K76oDfDtGS8kAXd7Wvcag4GeZnNJWTvLJNbVAHUu4ocqukiYgWfTCuGcs",
  "key8": "4wv6dVV2yy8TmU27AAfbhh31NAK6nXvxTxH8zMNvXChe4kW9weBGSnrhULZj72bjPu5FZVCLnsU2Hp379UN1pc23",
  "key9": "456EvfSzN4YEbB3p1EvUA7FFZ8eTfzeS8ZRujDMGLG52QKNCWcd4efJrP34jnJQxWop7H8zcqDhVdwR92Ahqy7ks",
  "key10": "4oAweswPsXBtNETU5dB9epZJAzLMWHmAJAr7XyYfyWJrVLyg7RgwWEZQ4zDrnwuAAwsMRE59bmPTq3iaqYceXmVu",
  "key11": "4EA7krUq7mJNgySLL4pkqHDzbvHNxTTxna1GKCbRcxfA91jy5mnPeo9eA6oMK8rGg1EJJahVHzLg4NHDGFhqctG1",
  "key12": "48RcDKuNHq2dGB54Yme7pDG1Y7pYRDDxsXL2YztGqXdyqytegHo4V1XKhCJRFc2wuphGhQ6LUAnGbvpoEgAiqi6B",
  "key13": "x5d8HcmDJGs7w2uEuddjCbmmDtrp7t727pN7AGL6Zq6Q9VgPgchpkE3HzYEQQ4ww1X8MVm4VeHc25oY6pkmYcaZ",
  "key14": "EbdeGaZiVSh5yAZuAajFPPbEYLV6mwUNUF5hRMDsvRcs44kU5P3YLRqDLTMQ8dSP9ah5V6sucdCR41DDzGxcetH",
  "key15": "2f4nqosEgGXThGUnicsT5jKxa3rt1JocDi9sYYdNJVonWeHas5eXyw2Zvw578mpj5ZeEYPGxAUjBv8dq5AxrUKG9",
  "key16": "pnNQg3pQwAy7TC7xeEDXDatrErERAhxgyuReAgF35MZwpHX6SsdePasC4A47LmYauR3HcbfHh4kdJmZx6ULCHKg",
  "key17": "4v6MceyVSn9awLZwLtQRsrLXE4RgpQPBAmNbNjM6q2ZF6kaKiZia1MtLHgnjF2QddzAhfHShbCYSQYne51QvZiL2",
  "key18": "5ygMoxQ4AfLAXMXtfXyP7pKPnyW53DkGXsrdcPoQ641bHvYfbbMrRLhBjDjsTR9UcveYyj8Vk7M8enjW9ngXfL42",
  "key19": "3hxqwMhWZnceTZZkZ3W2M7Ht3MwABUXSjetmJbUwBaciTAPCe9L58P9e3mrkY8QJNcM6AVtEMrNF7Zkbgjddwgei",
  "key20": "f83nWXtzSGFhapiBwxvWiQk4f1F3LJmPMnbtRyMzz2j5ynTfsTubEtc5GLCT481ZaSoDRHmjsCm4W2dWXmTkH9F",
  "key21": "55nWKbrtW145k2tSEGP22sH7dKsELXrHKAU1bHE5erxA8WMj7fnKDV65qAKAYRRZ8pNtXsEhQZemZxY6G1YSAyfB",
  "key22": "568aK8K6HR9QAkBEubHQuGxsWhqHehrHkikUcztvK5GcQFhDx9217dee81n5YaXpeXT6tYXT23bL7Jcaau1r6thS",
  "key23": "3CzrkRjATCyrtCPojwW6aZvByhktHMM5ei7LWL6yRUVPuTXK8FWqVbfMSVLQ3Kt1gdaQJro61XeQbAige5JRo8Rz",
  "key24": "5thiGThsDvjzVw6kd2jhrtBhNc8Xp4RTrum8CjMeSVUNdBWMUD43tbT2PagJZB3cJSvjQ2g9JWco8Zwc6HaB9muf",
  "key25": "5WMgxb3wevef1fUyFUti2iycDqGutXy5w9zf2Nr4cejvov7V2s48ewdaEubGDqPz98vjxBQp1V6umNehQqEz9xxr",
  "key26": "BQVKPzVdRGt1ZzLx2hEsjTwT2i4hCk38Y2YQpy1cTjsKjJ3zTLtFYn22MqnSVDjpexaKJD7Bi9MdXJU7GzKngqQ",
  "key27": "NMAZDKe62fzgqqq8RQVB85NXdEPSHF2knoA2j8ZY6xiFxQhRpGfiBWvmnx3e36rD18RGci94hjxtRbfYgyUDnF7",
  "key28": "4gPYqV11cu61bSsX24tHUCuCWCqCGDHbcRZyGLZoRSW3VYwsaqbwGigGcfY3wpPrLATssoZJUUtUXh2rj8uZB4PS",
  "key29": "2VC6DnGkq64oSMEB34Bwxdvn45QZb4RS74UMnzabZgZfnqu1bqLVurvUKkXxzr8VuULYfXwAi1dVAtH2MXcnybbc",
  "key30": "3xPb3WytrMwoA84ENbuMc6WCS5bpGTBzp9Hy59mbwUneuKzuRLLKgSsWArKJetXwi3b2byTUv1yySeWMvn82Fq4z",
  "key31": "4TrExdweUrG3JRsBNWsuVFUks8U6Lu1D2gXkWmpwtTH21YoUuMhYrMeRAEPCaRxmi5vWbAgH1FzTuYi7aYcfASGS",
  "key32": "UZ4rRUrGbv8RcxNi2dExnxfCg2M97C2272bUtbaGL1Lyyky9Cut6nUmRj9vXYru6EYJCDBbGzNv4XAPh9h25jCU",
  "key33": "5eo7XRhrRidn2UBoUUPrT7XPKdgf1UuRqHTXK41sN3y3UiKkJJhwdpJUneuhaoY9yiSR6MokzQcJfXfs6o43WnpA",
  "key34": "3aCymc9Pix8Qk9K34QrRx7HuQryhCsVEY32KcuuGAPjEnQewZ5KJsUwCwXk1dVPVCZnMMHDmWefATW6QrNN6YDyT",
  "key35": "nVZQP1gWzCcsR4RvGhivGUdLQzmrVtSnBHZPNL1BYbcoaYvRadWcY6qStTkoKF6LDYTbJdmuVJu69TMAgYbCdc1",
  "key36": "YLDggDtum1gKjcPEus2prV72axpKiH16KNH4Qh4Qb96tx4ijsbNzuTTAPZ7fM86CwvejebPfTdkhmz6C8zdNYU2",
  "key37": "5wSWFhyFKoWcLBpcjvBLexpE4Ufs1e5a5KuXnYAfyNeDQzzfFpRRyD9CioVH98CRY8Kqu21YMeHtKFwHGrveTkH6"
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

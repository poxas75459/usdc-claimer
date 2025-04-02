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
    "21LniJSsftLdJbHEnEhbEGUDUwf9Cz3c1t1hkP35r4LYe5asztJ8j9A7inV7pukVAtE9SW7hWDBgLPQp4wKGtAbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JPPNDjwoKo4gAYpB4GYYYoK4fjDdCsrDBSgKJ7vh4N13nAZnrjzdyyXNc4xRAWnFnxR9TgecHt3gbnomqo8RWs7",
  "key1": "5oqnSTKjS7msbdWbgB6VEVqz1tTZSt1JayKAJkrhGkrd9PzUn31HLnkEabcoKmE1n2hxGFhniuteD8Tf1BbkewEC",
  "key2": "3dBA4whtVVXZPCBiZZercEJjyzUU1Uizvy1M7phzTUj3ssAmZxgXkYF6KpadWvHuGWFyC5tA69ffoHSWuyDXxx1J",
  "key3": "5hKZ47BetBmxAwsthyZ2a6fF3kZTFwWCJpPxKxxRqwnjRRu3Dua2TPcJwcFCVXgsjL9V2xbGNbHbN7CoB78borYH",
  "key4": "5vWU3mB9uK1UqDsY5VUihj97TRkg7LnWKjcn3Xs2MpT7PM5Ledvr8jEzL2X1752NtcLz2jEmSbh9YS6fswHiqs2R",
  "key5": "2KEzVyyFZCzNQAc64MjapSmno4xSEhpU8cda7Qfc8T6KqTQbhG3v3sStiDGz8AYMipdADYn7t4oVh3eTvWTrxiSG",
  "key6": "5h7KrjbbF4K5cfwDSMHL52ecMPg5hTut1PFdYyeGyBsinr4JPJC6itbPKD5qgWpDPYckMAejFN8hTSMd4SVw5JPV",
  "key7": "58hgGbEPbuPhSWYQSk9jt3ibo37YA3rfRSRvb8s7Q1Avzbse5aH9QpWqKcgzsLM63BvCVisdHT3VuztPUq2wj6ZD",
  "key8": "2nR1PoutPraon1xq8vNz5gdtjcEKvWwhp6r4VbhRoBj1tvAopeYQM7GfaRPuE2UjREhaDWhutmmVKxD8PgpEF9Jn",
  "key9": "3wMGTJVDDyVUDHfNbcW5swyyJ3i7bmrWCxG9d21Ra5DEgsz8e5yfKCjo6CdzZZ7a5DHKsgFGutGuhTTamvJJ6P51",
  "key10": "quz5P8qN6Qp9JiW4XdsbrL7rQrTZi5w3RSDpN7YtRxxKgDxdyNvezLqUw5TW52Bg9kiXMagfQsqcCuRFZfxKcW4",
  "key11": "Q7gkmFnLMjjE62RcAoJZbxDqAPKSviq7GLW41GuaoGwQeCveiU3vbSoRgsi8vLCVMgzqNw45F16vfKS1aEsHq2K",
  "key12": "33LgeFgCkvLyRsZesp3NMj6hZZVtSjkNpKK2t5HEAisifb8njBNSzy5txiKzX53pUwhRfnrciGjXLb39PcnDHNYs",
  "key13": "3xcvCqwxzrXzviT7uZGAUBfukUuNrufVrtfEgJ3frHKNhwLfHF52AnNZu9RZMWweozvBRG3LKMcyf2fucCQXQ7oH",
  "key14": "Vj9yM5Z4e7PTBzte4LAwdrTJcRZN3q8suHAXt4b5AXtTmuebquq8bYh53WFVagQz7LC1MN6u5aLUUwHs6D6LBhi",
  "key15": "4aDiVLRUnbpipMfswuW74yBzW75K4VHgfF4Wz4QpSxogaoM1TaP75cfLbCEvC9yEkLsenSujLmxm8VGmEb2ccDRi",
  "key16": "3pRTrBAsbdZitqsEPcV2ADTpbza2Vn6syVE1ZeFP8NzyVjAUoeyfRNejMX2MeAZaVpD3aR9XBKyFC4zCW5C5mgUa",
  "key17": "TuuLFPXG5nmvxw6YZ3pyz9bSKjy6YArhvKgMJTvmTwRe47B9StaTCpjpiKnhrLVqm9kVWHpr7bhrrsgowm8owYP",
  "key18": "HHu3ioPJLJ7tjfQiem9mpppmDMy2jxD3BD2B1tfkUqPsexbC9icbBhHoCDqyfikmZ8nBpXdEgjCHJfzW67YhkXo",
  "key19": "zQWbrokayHQNyLXbnTzgmWJ4Jh1JN28SSTEEov3FRBwBS6sYKbCobFG38sQH5tvHDiN3fStZ2SRruY6T1qRXpJd",
  "key20": "2uSBQhgGYeuX4AUDTDEACMRx3HAAk5u6VC7r9EfooqVMCxEqaCq7dqWKWN7eRktvjynpDfSm7n1VZNpL2uarc1E8",
  "key21": "4sCLGJjkrCvdL2vHpFMx9iifvWXoAAADWLoqogGaW9siac2d834Xhxo8Qy1YogF6vuThy7XaKwz2fTEYxdMU8acF",
  "key22": "dZ2DUyeqHV3yt6Pmk2tCh2NJUsV2SPYpGdwXeDEA8XRr5o3CGeN1VEFHNU91ZWrV5th5qt5h1Bwf4LNhg8TTjUZ",
  "key23": "3GnM4KV7y8exqqhVK1twHm5exQa5FXMoYDj8wdeQRkUrTiLJJVJC2idQDyyewi52weUUhakkoW92jQs7zUVnmHk4",
  "key24": "iPMZTdq84jr5LxztTx8fvffsSXyQdNRLXAUKZzzAERYxDUUYK3jjhi6hJmWiTDeRSgAMgoQCWsiqqtyTyvjiZKi",
  "key25": "5d7anT7W3CgpMDtaev41x8sqyaQzNGbj9bifvNt9ViaMpxk9qnTJr39smCzAbBDUuvxRuRyZErGjvpjtyZGCmpNZ",
  "key26": "63r9sbpvwGhi19zJ1NBbFsGYKcdfEaAyPFkAjhXi12q6kjyrnD4zKzQ5frxZXMo3jFrHKMSeaRWEYG4vSuexVFbw",
  "key27": "48oVoUAskxwW3VDnjoss7eF5156aPDEiKR4qooXVkagTJjXebwZzz61Y2LDy72euG4Jc1z5UHovvDwePs1GQArGA",
  "key28": "67k17ScMrSUgjTHdEBnYA7P9un3G1DJf8uf4adVyDhS6omFAEarWsp29sTQxScepa5tKXeSFTXgZjzkDQVtysa2n",
  "key29": "ucxU71nKemLLn15QLLSKRbvhDrQhXFNuRLuedYFsVoBS6X6VWVcYi3y8yqJaBQkJCVRhnjKynMuRr6hgpKwqq2i",
  "key30": "5AnQRG5d9uFa1CFGsHyMK9KrfuEUMD2Nm7K9LaY6mFiYnSZuqbQfcsdautRYJxNVsWEfRwGNj8KRtCTGxaJdovU3",
  "key31": "okGxab2aRSjKcQ8ctLpnp8CrVMHNWR5Qy2pyvL8wJxmqRRZYFZbT9j6Xj1fN3YR3kXpSU4B8rqVhCuiuxdxkJfT",
  "key32": "53N9J7tRwcEFYqcjS6AM25WJvPBtZBPCbs3BtqZQLwZdnWs7A3w692YZmBuVYWhNBrnGtETFk5DDdV6eK9vQcrDz",
  "key33": "3dbrTihwi7odfRMLZk9y5dVgA3seVzcgB8Xpp5XVP5WyxDbP8c25DNWp642nZP5RChbvPx4jpHTvuedjCmuAZ4Vn",
  "key34": "3oJg6iBLPzkL7ZHj5PJDZnRCJHMAjaA7tJZSsEQhBj3f4CR7QTM7xAzNuzFgYCS62SEG5RuWunPCSYp1ysJDHR9c",
  "key35": "2zPvFWQTuqwqRAWYZNE5azwit8owjU4eD7Le7MSrkTdsubjdUXexrhuT7RpHXqNGZpDNmNLBGyXSqsH31tm57Tv8",
  "key36": "3rKJjWKLx1cYgxsgYCvy5Y1LSJqvwyNXrLSCUSfxbq6t4y8qzCijeTvQoGsHPVEKDWGRNhosoENfL7Y4XYDCqKEf",
  "key37": "XioGB3eZGdhWeKhH2TVTGDcfYf42R36x2a4JpQc8bnaPDs551L4ozveCNpMzx1Yg2h1F3z7FJRpC2WpwwzvhYzX",
  "key38": "Rv9b4mMJEr3hmp1Yw392Zv9ovzwGDsjhAkwhvMvmFk7L2YuQQd3zTXySzbkCTSoQ1p5jXb4TsMkHWxonS4QYaKR",
  "key39": "51t4kcbZ5LEwxgdZW4cvAMNqpKwpZTagxFXHg6gLMF3MtvGEqFjYM3yNubTwL1MdpUrxWRqUvZtue6EwrgPfuGX5",
  "key40": "5RtDvRpkatEqU2C7qPR8QQYjhi5xi5hKSSFR9SjdtUJdHzUGgC1kdCx8nqC5ZBUPRvXbLbbvarVk1XXmxF7SWRLv",
  "key41": "noHrbxDFZ55eXoNh4VKwviPxgPbuj4sUSAaUFaLxoYky43qaXhgqoGegP6C3aTrwhjc8LjqkQ9R9hqZNwZxfGey",
  "key42": "5mDfq5FyyQ9NTmwTWiPKW9zUyQuHKGtRZhpxyRurwJWw6eSsFwWzswzYjhSGSqedqN22PbNse7ZUYgC8RazxWUkC",
  "key43": "4v6c9GBhrsPwdVa4Bi2c7RdatdqT3oAeKwJMKuAoQHUpbCTH9n4GsPQfipktnqQBwUWyrFSgfqGoXBD9qYaoJLUT",
  "key44": "okSLSkNz9u9KtB9aomTskAFaYB9X7RPciE9whkcuNVn1xMMvW4ozetPgUpaAWLMg4zMLQsESoztLx3wasXntSV9",
  "key45": "5iy7oCSiyqbmBygwL8NUypEEKYBiedqsAL7gXRaxB9xtcgoB1Tvi6JVQWhPbBoN9PA8j6ENDW1nYvWLgngGWPVA4",
  "key46": "ie4mH2Sbx8NZKAmsrTr9PQF5j5foZS9Tv4hubTSuTgx8qZSorDa9rCWssL54cXJ57bVtab2FVvgHvUdHm7TmoBv",
  "key47": "3EomudKMGw3nhML68jijxiKovqSvHBeBo6n2a3UeHtCSw3jPKMoHAMzR6DqUMPEjPwK2YmJ6ccfzCkwvY4jgLh16"
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

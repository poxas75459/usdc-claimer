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
    "2TJEf6WfLBXTU3eqPq6W2aeKRDftZepFbPhWCtWePa6b1R1wCweemjomewCtsgcyd8ipquprCd4znsStsLta2Eng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sLP8smtToQkZx3wBT7C9qKH4HPSxybEGPMwXKJVTAk6HFQyKfyguZJkXZ4kiHwKvoXERTEpZDaYkz9XHuPjwMVr",
  "key1": "3mEcbqVgch54mGpHo77KcxZDtCZubNTqe82imrQHc9QbUV5t8VCeazCNihtfexKKvHNyyn1sXUmu7KinBEDahCp4",
  "key2": "3H9fhD1knxaN36agwRvtFWGTAm2Yj3AGKL7YTm9Nv5Yv598ibFuTQPAh4cXgfVmnXpmo6Gv2hyWA181s41aCURL1",
  "key3": "4JjjxxxNLj9oLY28HjF6DjyVBNqgQmFLX6G6Jty8Nb9X9p3RNJ3wV68F6a3yoGGqoxJJp85gTSZdxVXAyu3Cykaw",
  "key4": "3fa5WyMQkbBUKw3N8eTaYWsvyrTpnJQCWhynkaGPghn9bCzChhZJN5DeKWXxmALF8xTVnDuWo5ZW7Lo9dnu9DFQK",
  "key5": "269uAvCfRh4TgN73MZUEYopqj9LizmP3VFhjv8P7c7LTQ3fdk6XG355HKhX4KTK9ZzH6PLrpZktA13ThhJPrin4G",
  "key6": "4eeF3qJ1bAZMrJGBzYitxMk5S2dwaDyYXCF8wxfKYGG1poQbecVVaySaq7JUN3tzzH6a6ybvhExtaQjH64zFxTPt",
  "key7": "4xUW75ijaqP7aXhxzSacfszYaza3UX2KYJE3vzuXjj2xCzqFcH1nkHwgYTk9GJzvV61ceykSeJE8iNoFDHbo3enA",
  "key8": "3BtGJTc6EiqadCQJiYZm3zFmSGSPBmTuurVVdXTFdTYQo9qRUp92Q7JJtJfT5vQxEVTNjxCDR5yZoctgMDD7Db4i",
  "key9": "327bLmbkLnMWBTY65zL7cNTBw7W9GdhbC4uXLXFoB3yh8ssrhWDDAKoedpneGsd1Joh1eXJFkCuzWRYbVLyzzgT3",
  "key10": "1cMMpdSYvgHnkUPwDwynJtoofs8roowbdLa7UiNMsnMQZejNt3t4AiWrbvhqajDXwT97QGWv99ZSNYEmAPjU4eH",
  "key11": "4h9pr3NXstcCQwsjFjEnB8ws6NxL79p9PNCWKmpMVLVLaSfnMMeBfEkJB5R7a2oBsMqB5Xm4heYXWu6USCZGN6XV",
  "key12": "4MzMSnfbPc3XykxPinqXrpZ9FXdYKKoGWbDWRfiNf5osuLskmjsFSRuX77mCj49MLTVXkE8uh6m1QTirEn4vmjZw",
  "key13": "4j1F45C6zxP4Rd5NCAzr9QxsVeWYJkN4cszhYhNw9tdZhBtASuo9JVHNzCG8EWKp2UU97rNKyh1NbKRBNvUtXbnz",
  "key14": "3mAviy79ZiLd8aDirr3idAj3rtXR36vA31oxYKDA3Jtk1e38apyUnnf9kZYEQ2rK1SwE1kfx6pWdiod3mYmtJPLr",
  "key15": "2jEJmyneGhor8hJrtcxTzxnAmoGNdJLpNjriQpWkyvYUJJzzqF2VS6tMBGAqufP8gmbtmawgKcdHWDX7V6grBVLp",
  "key16": "fyDsc6n7yJREQrxQFtt2dURxdufpG9rj2xRFYWg3yoKb2B3btub1eGcQrdr7HGHboaZe5QLrt97EybcagUG35Sf",
  "key17": "dDZpCa7yW2eqccHuhMqVmYBUxhMnNfyMjPH4KSBXHhevuzjC96M5EV162Ru6BBkivRyziemMk4daPevBjGapMN5",
  "key18": "5gsyqfTdQUzToV9sRxAL3TTojEDpiiMUbu1fyuGXmvchuuupxRHrn6mc5wEjyrM6hcoQ7Pw6w9bJLtCzCzBcC8Kc",
  "key19": "5m7Fb9265QEDw55X7i4ciNFxPB7adAZt3o1FaJ8QeWaXvjbPSUF2Nwi3WxB44vNnsVxj1yGxZtRmmnQwkEX35Kqf",
  "key20": "eozGvFaNQP3s9jYTufVwRxU1AgbH6w8g3DMBTc6bMcVs5aU9KrjQtRRwwWyhBsTm54udbG1ijtXsy51hzSviy59",
  "key21": "5G5LEntnt28zG8yQVmzYfuragRjSLdYHzYTsSymvatFLJt8DaCxRCiJczdwNLaz3bgSHMTi27bz6e7J2FCNin1HG",
  "key22": "2JTYqQaDX5qMB8S43xemuNyRRHnR267vkUTwNcfEyGKkHkDmzvPbzP1yBfSDF7Zbde4iyeC99aGmypLDha6gyHHz",
  "key23": "299RLNmT5XYmSfxYBmBDhuU64mcM51UQ6ysUVkibULSvRKHNHcugSWP4XQQUFNyauLUHjyh2XEo2DxDnzrbNBMsV",
  "key24": "5FPG4ddzoka1mbEprdYPqKgQPZNjSrpGafotLNrrARYX3hGDHih4KPEvKBYjEqLSXkSxREjwPmtga5xQh5DHEDar",
  "key25": "44ceK8nUZYnfaUedDteicWBKjyR3JuWwcEL4Zfcxaustz66EJYWSbZQ9LRgE5FDEGGtiGFLCAezcezRTSLR3GK7Y",
  "key26": "3TokUpVFcob4sY7Z6KP3wN3rpgaH4K7i5CqA6CjdZu7PLxG92GvkHNMw3GP5ENsb3STistJ7zBik2zHQJqXQSoNt",
  "key27": "4HjX33SkCCyzqQgANLMpcHJS85VmzXib44tpi1E6EvRakhmBzPydMEwNSnDUFgDFB2f3Dird4cvhrJwoUeDtvEKb",
  "key28": "3mTh3Wn6bkcUZbt9wXcCo3GN81Ki1U9rUeSCyxGYWVbeqoqhVXoV3hs9Z7HgWt8xmppz8x9byhREbCFguHAtkEPd",
  "key29": "E6Qtj7THD7kTR1ukPNfx46p883WjN1DuzYkqU63pzbvGdQqhtKsAuf2nbYcjTuvi5yjEGw8QESqodMSK4C59oya",
  "key30": "7Tf7kYGoncW5GWLHhk34N34gCF2QdysobVEHrhbFmSA9RfS7JVsb9ZBpZ9sV47a1HABhoGCQFX1EYEDvqTPxQqc",
  "key31": "4pSVCybdswyxcDUj4pga3dBJd1uPT8VoxdaXRvsNSr3NC44WhxWnPHfKxqFfKA1yFi6Awubmnh5Mg4XSTyrHRC8o",
  "key32": "5ooSJ2YUCYs9ykP77wFz5wBq43BBYWyhT1mfmtbfvEBdH8FdbSrM41wVATRzxXdPCzvfRGFEmurdRKnJSMQm6x3c",
  "key33": "37Jyw3DJyFyUbYyct2J5U7bzAtrnmXEoYuBhkYZCB7REHMVe4b9dUdM1UiJ2vQkQWETNY4Ft4KGSPCyRfGpSankD",
  "key34": "2WG1tcSpQ5Y9mnJqpTosN133s5bi8pLtu1Lw6qpC4puAXBQ3JeXYcoPgxyPCLKPXpvLcPDPimVLqS2TKwqeeefWj",
  "key35": "4ns6fMTNZpRkytW29J4Y1foLmL7bJcYCgkojaWCoacYRcRVQjLgNFJDf9GJCmyCY4bPNs86ccj3Q4j5YwP5tyrMC",
  "key36": "5SAqoryVZJfpwRkupDpxzPbNWQFB8TEzeJPvP6edRDad9Q9ebv2ADXzdr3ERKpdYD5PvEapC6WEAEyw55B2PFnZw",
  "key37": "211RkGzqAmHMaAeagtpAQpqSm1EyXVuUF6gNcscr5brJfK2DBwKEWNxcxN5rFHBNVcGwoQX6K1BkVBYDUN6SfKYr",
  "key38": "3QfeT9LTP7TCaS87uJBjycU91VDmoVD5EanRfCQrj46G9UYM2atVSM7UjRwg7k2Krct7HV8NowiQFxB45qfHNUAT",
  "key39": "KuUkNVsJ9r35Cs6LBdoY51563nUhKcXaQurvpVNXDtJVw68p9VgR3QiUar1nJwcEr5VyiFmFBnf5KU9pWmnuww2",
  "key40": "HJyZdSgibhsWVJfWphLt8ZTeanswnFJvfR2Li7ycVv7jGCnHnAmMyw336DBWJbjNFJfXoAwhFTnNhM37UaFztFo",
  "key41": "65uUM1oCMnYBsBPujx9EnGgbycjbztDatJfN8qjPKrG3X7pTNBQswsuYUSdLR9fCxmY3VJK4Rhfw7mois68MN8Mm",
  "key42": "3GySHVifg9T2xDRGYeQAPpt8PaxSHhr59ktGWdp91J8MVADphgxjCNqEjwS5ppcb3dt3Ybqjhbw7j6oQayUwMbJM",
  "key43": "33J7RnC8VRn7rMzPXNdt4nAErDJL3VZz4qHTwZz9ofaLuvNLEtJrbXKWjZ7VUXhuUsJDsLZRqFz4n6a3DNKRby3d",
  "key44": "5bQUARdqrteRHm5Ufg9xWpxhsW1n1gMSJeD86s3QbMWBJ6fyDz3enZqcKny2RgXBYSnoZUu8YcHJoigfLzaHn7TE",
  "key45": "9G1TV54sM8xkaft9JC91WWsxQsaTCb36DqBkPsjFbNrw3kostJ3j72uP5dhwQo9PGjZcSyYo6htDEsC74kvYfs6",
  "key46": "4HFqiaezcVkySKqodXfL8KXgkXuxEvMaiUb8zNWJYtepm3Qs4VDCJtGksGEf2XY7nwsKgSTyzy5hdiFVYFm5wJ8k",
  "key47": "3Q7Rvo6DWivWU3ND6cFrb5DruUmmsBGvCTwPBQ7ZwViAJzbnoU5fqRF4E7SsSMtcS2iF5jmFu78Lr4e4Zid7okyZ",
  "key48": "38PqvHrs7g4bcya2tFpbwAucJtkamc7eZeLAVVFEdUnnT5DsoCWXf3WfHYttDHyTFotrBghVVywQZAmZRH6cK72X"
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

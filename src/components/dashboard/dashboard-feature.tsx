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
    "3c1iCFjm7EexUtP3Mu21k7GBJr7B3pEpmRSmMkqX9AC5DPCTkdWinwNNANxKvbuosNjmQoeYMm3VUhRspNW337Bx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GUeRdLVqznNJgP2dcud8VaMfUnALMCBfbPJSXZxoTbMYVYHWm469QPraCC63ao9KAEEGHeSCLMnrXrcLYoxyhS9",
  "key1": "36JmSqMhh4x1c6c9FcELhNERcqMp2mCgWNda3iH6SRgHPJs2xE2vrwz3Sv3MXquCYKUxBDLy354XuP41bupLpDoh",
  "key2": "32XF38y72D6eENTChEa3uQPm4Z88gx2K2Xh5RKTfg2FQ2icFyUVKiPRu97tdKWAfbQs93Y7Ar14PAVA3tK4Rnw5S",
  "key3": "KXVy3JhdeUnjrYkygud2HhVv1dguv9sexaMwT6b82AW2zX2YGHxGmg4zX9j5taSiFHzM6kbgPpeYSNhFcaiYJDg",
  "key4": "ytKjD5EUCG5kHKoG6ckE6ZmX8GZXHHVnBGzcuNW7TpGBe5mwmt5Kjd6GAis59k4b38vBCxZZwEuQY2eKAQeRrqp",
  "key5": "62J1xbfdxDHqhEB2cbtbrsu3wE5XAxZRJyJ2KhWLWmPFiBgoqqPYewbTkujMVuENHeJry1H7AFnQxNe3gpP3woWp",
  "key6": "5tJmv2Xp7xnTqoANURnLF23ygoWvRFifed2Ge2uWmTfpEtLqAnXY3ES9tozn97TVnzyojoUTSXMeXDetCS4Ji9S3",
  "key7": "2SEPSC5LedLsrB68zDuHbzamR5cZLywbvzy7W497fQTfcFTgWhgnwjTifPXvQSy7zSspuL2eV7Xx1Mh7tBewmSLc",
  "key8": "3u2HdE6JKnnZgaJUQ9B8Dq6g4uBwVNqbvsyMs9Z6P7ZwkssW9Jfqx9jqzP4QvR7wZ8A88mzwvyAuwNeF23CdSS9T",
  "key9": "5UCSqjYyJxxxnXrgESozw55bxFC3KWyzrmmpcfdUQE3SKqzdqK1vfvdbQJShnJMHqLy33oYQMf6hT1BYGuvJGajF",
  "key10": "3aVFMjtt5vi52StTGGd1NYG61yo6B1Fvi6LAQAA6HW2wCqr3VeDb9wxcfjjpnP3oRr4PnMi37BAQPTAdxVaNjZpw",
  "key11": "xhdcr2RkVxDfTyWvngGLL91kR5DNjsF2fwv6eHNE5hJ38zuAiE9hp4rPejbTkTWaoCjpUm82WwipY1dFnoACV77",
  "key12": "45N5Leyg18MWmxGKryNyKSd1oBMiSEKUAMuRP5yNzJuBPnGzSbhQAqW3qMY2sShsxse7sgJm54SjHLVB24hTVzpA",
  "key13": "3ny5CsYQ6BkxvA38PUh7y2Y82hAvZ4jmnQne5gsAZu67WbUB4JbD8BoUU6rFNVzKf9Nj87jeceDPej1GdA4DVrUZ",
  "key14": "4rnKwSGU5XguhZLGnmqPSMW7vQebhrC9m2vFZBGEjc5g6U4oRqC9mPbPYohmRNypUMEPweyKzphnHujbUUJovFTa",
  "key15": "nL6TqCvtjsH4b1sd7JeMoNDbvQAwdKX9tHP94891y8dytUYK2P1oaQNtshxt6P1YcJUsxwiXREURhzn76EHbjJP",
  "key16": "dweZemDRHQdTFy6RfwYFC8B9MnmXpaP2hPecvS6EK3khNWSfokHzcahV8dzUeDV1avzt5GFS8CWo37DZEZMRXDs",
  "key17": "4S6dKXk8W4KHdjYGaeZ13SA693VS75vzXrMvQoixn8MVR5KMwS3mUJujqBZoEoaW4JWUDXu4vEPkYpoAxqAKX1de",
  "key18": "5tSaxfXpRrZUBLcbrbWkvATMaKto8GKxa3mdQbDFToxUTAwe7mTyiFvDmpCiHMSXaoERMwo7MxkejChyn5rr4dC2",
  "key19": "5WP7bvJBputYfD1BXqz9ebxTR5xk5abK5DWXAzrnsmbkYKiQCcbenf1KW4oZNVccQP79PG3XpQYAC2pPoMLy4XYS",
  "key20": "36d7egh1sEkvFtuWQiX1hr67vbJs13tNYAG7phR4J8TvhLDZVks8NEf8KNt53LGGTZCZQHkgJ6BAHFQ33FktKHoP",
  "key21": "46Rmtur6kj8MEU38fSVXp5GJzkCzwfRp4UVaQ4jboCqDotkScUHzkxxi13PnyN5kBk6TyzeZTr7Pw8ykoLfbDvv4",
  "key22": "2SPa4gQQiyyXvawUzZcemKUo73vfgC4P3eREwJwaRxpMkrydxyJdLYwvfnSJtzAk8jGmdqQXHZ8H2LE4BTLAyZ3Y",
  "key23": "4KSwfqBH7eyAh9cBJztD64Cp7ntZJ4biRME8JEhNgXxeVsjsGMW48vkYkTezrcFeFafx2NzjgAdPf3aA6vTHsNw3",
  "key24": "a8AktDEiuKt7vUrh9jjporC9waPcnK1yjpdbb9FGuCh4yoQvu4HU43chU48p5M7GsCzsm5uhzqJdu6A5bQxTBe9",
  "key25": "4FfLXGmK5a7pjciARam9J8n5KQ3M9dxkawv9B8fQCSCxS2sRzfEwJ1jYFvbeAw5fEvR2prp27pjARgJ2VmYopbRb",
  "key26": "32MZ43DPyRaTqiUEMoYNRmc4tj31g1xrULcHNf4GnYEkvux55sVr3SMXV32UuTsc4Apte2hiofY8vumA5h9zPFUx",
  "key27": "A86KRp31RV8SiZsF28PVtmufyefzB4nGkF2DtpUUM4yAke1o4z373M8YoDVEvore5Lq5WyKx9snxowcBea2jHWz",
  "key28": "3ZiFybP7HCNqTBWN8J9aNxr1X8Cenp32xKc6sxTdW9tzruoPeDyVbVtktkZUqrjis8iaV6ymiehkR5j8esojYWSQ",
  "key29": "3RZjQcBDP6pCzU4QMfSUpLp8hBY7k2v6q9uVfxktPVnE86o8cPKET3DAhrJNR3fn8QqVmNUnsMqE6yEJu7TdfANy",
  "key30": "4M4ZfcDDrbbbAWEmiPr3iHwjnkDnLzMtXyJVcbUeiYBgzu2MjjY8doiyRXmW6FinkB7rg3cfzzZFvwWrJNwLtypV",
  "key31": "wKLE6X9hD7Y1JXTrzRTTupM21AnzDjj8Moe8ccv6aaCzahvXv7kmXwWXELkfvCw1DPEKK9vDX65Z4uoweXsVFdM",
  "key32": "63FkRjGy2HgDcock6Lc4P98vCE9FAGSkjahrk9XXchCkEnR4b2uotGPcYY7WcMmXd1oons9WvNh6VcRajskHrnsh",
  "key33": "5MztramiB3qJxLoNqCneWxWeQSqdMkYNHTY8CjjCTHcBfkvvDAYztNS18U7Qq92qaam4399DxeRZKXFokAKPh25R",
  "key34": "5fzmtJnQ2bUeMgtxT8bh8uxfnremPdqjiGRnQ7Tgv8gXTos5eRWPHLrYRE3M5zCYHgiuKTdEzpjuiatNNTt4sY78",
  "key35": "bh7E9G7VnWinGyL45z45FKTLC1athheDdcvEHkvcZN3TTt2GLcxUouHGX2Gaxq5R946UJi4LAzvTzwxdg9kCc9s"
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

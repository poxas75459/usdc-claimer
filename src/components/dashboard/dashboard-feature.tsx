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
    "3pGjAz82iH6G3ud9xTToo6sixextA4MkTJWMUfu9Wc1mrHq2ECCYwBq2ty2Y5PDHVekvRYJkmzxNsEyPRoVzBnYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjLCG5eNG3A24VnWMiXxm7wYANs2H9DFW8GHsRfeu27Yzh6uZ4jjw7Ws6iXHqENvcQduq5FP6sBdVDrFMouTn7t",
  "key1": "3LUGnLepoYoohwCFnJgaNFgPfaj7s8RAV2H4fYpA87GJAy1zdvTeCo3dZfWiSzFhrbJNjLVgqjDZ1RkxTLFxT2CY",
  "key2": "5wtUWk4P5EUtkqWw7Up9QDbcWjR6yFW87iPBmmbfe3WFQtQGcP6V3Qnmo27Dqk4c137BT1SHr2rPaNeKkZKpYbpj",
  "key3": "23qvsPtRWGgtoNjXGa8EoyxT62FtZypkg2eXbV9xpXhX2mxFWSCPqgpbbtfRxPVm4SBdYe8SCYCUzvkDqatsn5WS",
  "key4": "3rStbxjsqrajmGnjKrZcYE1noM7waA8RjFKeJK88YBpTtaDfURmh7mAm3dNgzsGfz2LB13K8EYhJaRkEiVxRnpB1",
  "key5": "YL3HKgP9VDAhD4s3SAnz46nchLuhqR7U851xzN31MXWyCNaQVwbQsNBpzsBEX4zV5KgcXoD9AJmZmFsSGF458JY",
  "key6": "E3W2tX5SxG7bHxaSw96sAQvYPhccZpThXh8TbFJ2R3PfgwZMMQeHh6yEH2APK8BfnEa1nr4aqygdH7WCqfHXDpM",
  "key7": "34EYQYCxMt8GtJC6t4AJS4c5gACqWMWpK6Ph6jn8SsWMv7B775ZwS1U4kuTFmg41YPrUKbsiiKVP2BwhjBrQTCZy",
  "key8": "4yK1aKqbZA62tAa2Tvjqo4z2ESitBa6258ioAsPjWFzfVJZAWgz5PhDyG1hZCvaxxGH22gVqddMriHHPr6jrEBXB",
  "key9": "57738BCkLFEe7QgtVQTr8kobGYArkuTffneNfwz1PB2J7eZHAxes3KdibVyELLnKqfU227afpasdLeYXz5yXnM54",
  "key10": "55krFKBcX4onSVPEbhcVHE1bcfWp278UqUCwQHXS6of2UVLpzSVep5LWY7bZL2TyBqBWFqjsWK3js8diAorFoNSd",
  "key11": "QrgBxPKBTbyVti6MEd7SXQ2FNJtt8nvSXVLJzbAMa3FoD7vF63iHcgq6MTkGbL2Rc28ZXdLZ9P6c6TSHAqW9mZK",
  "key12": "4VWjhsY65p6ZwgAZgocfJHNYFAsRuvXDYuWxAXWtkq9dVCinxWJyTK6Mnk7N6jmbKonY4ziHvM1YQSYsYvGCPerz",
  "key13": "3MtmhAHBtLhto9GQC4xncHvop5F5KUkH6tZ3iAc87KsXEBF4sWkiut3XeHFqAjiPsVANuUxFpD2k7oi89gGSikLQ",
  "key14": "5TPTTspnsHcbciXH9yKJKHxwe8Qit3UFiXDzMeXCojCTSLzoogyNXmRg2dH67K1PhNiM9JKivo2htt8GM9kYvfd1",
  "key15": "3Qsdb67tHDaAsQJHMC4JRdDtSqTeEtPtZWNza2kcm2v8SUvRHhkF3J1NboEUU9T5QUS8pymU5pV8m8J1gkLWAAMc",
  "key16": "2qBfowyubhZjLpHS92aBQUzpBBFsuZ3AEEvoaAfdv6ZhmqndR5cJGyxEp5QXiT9672ZRJV6qa9fvTXBPwHeKTEKU",
  "key17": "LxrE4oqerozVwPAms5mwEiKoTCs2o7HhUMWzgPoBaQAPc4qH64sSBkUc286yHYbAEwq7yq33PJY2rQwNn8DVgk6",
  "key18": "5PjXDjw8gSKQXXTb2bNhKKCMVx41uYUDgqZTwTxampjaCY68ddt4Yd83azn1YTAff9Mqz9BoBd7Z4fcvY8xsZUvK",
  "key19": "4E6FN5AC3A7WPocPp7Sc5gYtbrbDEWuKyYrsL4Zn2vFbkaHjrWyua8krYbGtuCCHLpZosbAHzZyZdicbiVqxPE8C",
  "key20": "48rPj8jAwrzLL8mmerEBFL3e24m9taqpUuRZxNcV5hF8DvqkSUAAW2nyLeo6KSDP8kMu13nckGw1hBCtTNsv5MHY",
  "key21": "4svFg64jXUKsJTFX32m4oLVQ6SaQC1N6ojphH68WfoBingaqoJwkpM2sRuLhhbbq34CU6g9NyHVYprwHPVYXT6J6",
  "key22": "2YWMeoPHz86tAKNT3TpFHUJanTehJdgBQxFbAgN7NktA1jEkepfwhsFfDj1VPCVWLU72TzfsS7RSepf9R2PAvsGW",
  "key23": "4qDy9tB9X4MDrgWC85jQbnzwP2Ks2Rke54PNfX38rEk7LHrChZN3Eq1qAzV6WD5N6gNTUphGZgV6zqZV4xNtf6Tf",
  "key24": "3QzvLku28hgScFrgBDTwLuwTHJtSifuxXizYkJC8DppVVUwh6dqCSE7ckkeEvEnuXzPNA5Q2uGs3LAnk4tyaWXtT",
  "key25": "365kv9DhJt23cpq2AxsrFDjhawHMERZH1THQeVtE8vxt316nmEsZBxso2iYnxPm2yHjSNCk9rkeG5JydGkRLQzR7",
  "key26": "5a9UbXK8yUb7Zw73MdjWMBCyMeoeMYstwh3xY6TbMEz16raNC9HGSQxgamDdZgMEwGmgvUMPQn3wchLzptVQXgum",
  "key27": "23Rgu3gPdL6UVQJ4RmEzEiENJ9PMrYtBCVcWEgBErXovz6ALSi2L97C5V46ZDdmyFsMvZ7mnekKZ4MnqvmAfUjGa",
  "key28": "2opMMGdBHipoEPk62rbsfU4LmxZ6uYKLGrSxAz87dmxj26Wi4wrjiv1dxorBD3AVNvb5o41rdxLVV3yVp9h4iAAW",
  "key29": "4c4DQUtRhbx1o77rkjxDfY3F2rxXgnpukugbEYA65iZSX3eUPQkDFtD2gfEcgN3rnuAQE6nZePuTspP9yurBdBYb",
  "key30": "66hH59aQie2BjswY97snD51mu1E3jqgdH6bd3gst5vnSeUp2oFqXYST8CBDFGpxVPxszUKqFEuerGMUiYJFaaDEd",
  "key31": "5v1KM66E7Mhm5EpXVxWmVhCgYjEcvTt87Q6SLWoswyT1pm4BTxgvcmXpmru2ybxHSA6L7PrLSEePP7x2smtLCWsC",
  "key32": "66gH9uRnURAaRrRCekHUJCBitoSsvHn2xsLs3A4t9b3rrLWjUfuF7Kz33AE25kbJzQqdB2iDHapVPnjrC5MD7Xcv",
  "key33": "35oQVpTiifXwQn2UK1NMmqGdfNo2tu2s3dwMsKCxdeqJ8WywyVwrdgRfDJTs3eiP1t2gNYKZ49DAxRk6a1t7huww",
  "key34": "55bDcVXGVrM4QQ8YNCFpwHmwhvPdK7Qt8R5REzMBxWcn7NmiqE1NgpnXmXZknBw9bbnRTBLQoB1U6ik3dLxmm2BA",
  "key35": "pMjrqsiuBWjdg2XuoKrAD86Tg3GqWHNcq9mFB3EPAK7uFWrHdtBHck1AZPt4acefDYhh4KqwBuBsGG5nkdcHWmH",
  "key36": "2o6j5fKPGg9txbtBMV5sAZ7sXGEk55vxz1zyiEamun6dLbdnF4FZRANov8e23Uv9ac81yLxBxV7nbFQp4NuRD87H",
  "key37": "UtHXQ4NAPEZXRxC1GVDRtYCKuxAQFxeNpU87aCCrV2gCcUpJpjDBS2c4KgRmaS3EHKPz9UHMYBagojk85y2mqst",
  "key38": "62G8w277h62ZSByuFCtr4fKTsXGhwPVaJZKv3wvStvSAeHBxNe25iZ7476xkkcCc1YFUFmmRyGgmjrZ88BweiHSj",
  "key39": "3i9RQMTmUeciusGrZtYnsrbaS34bct9j1ePdecGzR7cPguTnNfUTTRL9GoHpi3ZdmkZa3KfWcfDRSDstikMd8zWA",
  "key40": "4iF6BUJ79gjdSSebEA77gAtvdrNYDjUPUBy8XgNxeq2ZHjWFdWUfGHvE4pDqwqde8vQ3fgcz66LWKi9VZVv9TdiL",
  "key41": "5saP4ajxmm6YAdPsAUp5YVmP4BLLMFZRjHVup9F9wipnWMys9hAb9P5W3pc4hUeB7qvkNbwkPf5ZVer5m2FPteMR",
  "key42": "5CVmK19qw7fEh5ctXsnqQio3xcgpVBKbFDhUFQUu4SgYTtX1PpLa8k5xeVBwMuqtaKk2jnCN1bFVN9XdhykPpDq8",
  "key43": "4UVuCERq7dHvXzk1JXPxTaNaz1qw3uDiHXcjNqgEV4CKg3kiLSnhqqc24BBSNxU6QbrMd4ZKi82M9ioanqsgjg4H"
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

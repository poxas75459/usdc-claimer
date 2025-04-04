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
    "3XSTfEgccV3PFEaTTfo4h2a3n1kLsJR2vA7giktZ45keUh4WCZDWdsiqKf6bVuKbKBYRis3xRFiEHR2Qn58H5ZV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emuEn61XdPFis6FSu1xntcNtjEAcgi3EhgVN1MZNdABkqXSxeQp5G4LYHTWJoX625ncdzEK8L7MdWrvJaEQxh8R",
  "key1": "CMM1Fa3TGUmcypWPfQzUGwEYvwP7x2teCRZaJGVJprEibgS9jZfeqoFpaBDyXGbdwLFHYQS9BQo3vokRFneJo4K",
  "key2": "4i2NripR65E2jbrtMuT6z5iRnZEeZuj779dCATQZi9fGFKxB4j6D3zro88DxPp1ZP4VFGkudhhbJDMQe6sERPcUj",
  "key3": "sVz45z8G2wjBjvgdmMcbijHqaa2TkjPk3Zcbx3RiKJPJSY9V5gsJ4NbHhx8rPxzkSU95xmj1v96zkQPLqQ8E4tH",
  "key4": "343UgcawbwfYzbqNEnhDb2eHdrh6abprn6EC17tdRvtH7VnyUzRZF9STEK1YMW4Gxp5hy2pQrTAZ9VDwTU4u4KQn",
  "key5": "iZPYQ2wQQo6bEpjyxWQTHYvWScHpYhtBxuyNJWLjSJEMbkCD64cEERS6ZG99JpHR4ZCuD6aa3x4VjAJSX5GXLiy",
  "key6": "26isvEBnGehp3jJ5mBdC1tmkyP1dSmwKZFRTfRdLmxBeoRPm7nkLRLNY14zU5bw8ZY71YqJe3mQhQsPAyVcLDWa4",
  "key7": "2Vys3WgeJAnpeg5HEarbHf29wiSSAwrbuGt4rQEUW1ACtrCX6Jfp6z2cP48s2aW6jc8MmKcokFPH6EaXLnNoit61",
  "key8": "64QzaVyquiBdqzpmzz8nqpUxbxBBAxxwzvFC7sZJTqQYYQ2dGNDVpJqWhXqWeYa4pmoAeNurAZBNGcFHY6VCFrGM",
  "key9": "gmdktNYRn1wy33t3CesA8EXy3EoD8QonDvEGUoDUGLL2T6FpuBcumMv3AyEGmsQRbDE8iX9bx7xZ7ZnGiK5C3QA",
  "key10": "yq3fhF2SrCB9aCSgVkqyELKxf16Tq5ocMKX18ogZRXqq3KukrWtYFxB1N2Gg2TvWB8LqHbePCSHVNvTGJ6zWsmA",
  "key11": "27NHMs69xaYeaMCYJhoXy2m3YnoJAxSpnjWRGYAN3KK1YeC6VcWmL9H5Nkmf76sBTwsBpTQxcfSWqHLvJYpHR9gs",
  "key12": "3vqGrb2o7QpyFuRMSR62DCU1EeNX4LJ6wefR6qgN69hFpZMBgzM7YRXBzHmFtP9bkAECCFYZ69Z8W7igwvFXaYZ",
  "key13": "2BV2313VDTFFEgPRS5jVtPv7TX7wu6CxQczrBXqUYQknh19rtXQpRf4g92Ho2dQSpMoQwZNbjviGyKKJXpueNPUn",
  "key14": "gmTXvMKFRb67Tmf9edk7NwvhR1yDWPKwsnkUiwmXyPEs64smZwaimu7nh8aSaCLLGDwgj6ZFr3yu2qYGwQhk4Xc",
  "key15": "3vUMEYfe6hSxCVMV4KEAWzzMNpYtoUyg6TokFxhaRsa9s6fx2ER2vRJDZPawDx384rHBXYBERBM4uC5XZH77PCJV",
  "key16": "2isrybVR3mg1mpWk5N7oEpvffPnMkvEQRfCVTzsNgQMxEcyqjeTY4s9QGFGMVoBV9MZvdVC2Jjxms2rmmTt1iuiZ",
  "key17": "4dG3kCN4bNgsLcLuX5BqcDmrnB1Zomgb7a3DUoLStQ8izrTgiTW7R1hpCA17qc7u2VSRJvjqvbZdZnxk4dXPjfaY",
  "key18": "52ZWW2pjDcAKPgLkyBk8iedgV33rHgU3GrbtNLAau1YnXDZhD94L3w6YrfouTCFaRN9Z7VbnCLkp3FrQy7QbZV34",
  "key19": "23ryYf4QHrLCViaou1LyTjq1oNJpfBRFJPi6nKEZAJdJJcsAiYcimtAWEDYQAL5361HWtVL7KdF2EtdtcJEsCNQS",
  "key20": "2NbWNUgeWNF57Bxyjm6kNPvJdhpLjw5F4o89nHnGNAVfQq9QEYZo9SW7qJreCogxvo5aocjqqN2FNkmPNb18h6rQ",
  "key21": "2hoBdLiQ76di39ArS3CJ9HzZyH725CwQ6M5QmCtbtCj9e2Dp1vuh16dUS7QfQJ6PVnTbwsWCUHUGB6xbqqgPhRTc",
  "key22": "3AVqQwUhoHh39zKMT957bPJoEGtBvS1fUEMvC4sqV7hBZwKkevE2JzQukjdotkNwzH2bgbTgGTC6N1cwHuEapcfB",
  "key23": "5RWrBocNi28nV77zUE8rqVgCk4dQr7dQc7PCfmo2wR2zwhYHpbo81NJoCxU5s5M4NGsJE1ziEmakN2AvXEQfmUa3",
  "key24": "2bye77L1gzxmztpEMJzhibftyv9djEnWKvtL5i4FBFLaMC22Q5psLEjMJzVJPf36QM4Nj9CxVydXZbDY4egqjfiF",
  "key25": "3S9p7KNxwkQZegBF2Tgfu2vYqgi6AFBtLvgCCCxLTZW2PsyHAVWHMyobnuWTwuqYFKrqxGe9ZUvCevFuUzqWsMSp",
  "key26": "5YNJ4BBvE5cqeFMDTHUzARMWri3zG4UnXCF98y7ShEe2Rx7LCGvt8ZEThCMHLsnjhFAvvS2AVqW3gYdoAnM6XDX3",
  "key27": "2B8snm4MYQsiZ57qE1fss7VA52areSwTJhN6t1jZMfFYET4BZiaZvqB1ckcwc9JrQrwk3nzdYbftZnbffxLymFfu",
  "key28": "35Fe89NedH1q3jZAMTvx9WTjaJGiRvkB3S2LM7frMh8duZu9crWewvMRQvYnqVANQVS5LgvHuGw9LLgNJViqEWYK",
  "key29": "5L8D5DftQdmRFd8UrVyBr2ZiBW6k8TvfL2jLRcqQRzP9qpFLWCSUDvqTLfGst1urioKnTTA7zyAPADHFnPddoGLQ",
  "key30": "2n2KVPkkuggVGVRgiWDVuSqnFxjwUWGtWKU3vfNFGYanDs896WSGmcTE4YnuFv3f9B9g6XXpVzFVWLEHQSq9c962",
  "key31": "3DkdKTV5ZfkjjHCxTFbFNapdJzkHCgrLrrM95ia5skkUX7nboDbFXYVZnYo91RtZ8gcMTXsB5xxLE9boJeTsJFDZ",
  "key32": "3gYy2ggcz3jEeCKgb5iVSQdx4JR6o7mY3zjM4kt19qZmyHZR5wijF9mS1wQxV7R8UiinMCa9v9uJ31SArA8QVj9M",
  "key33": "2icDqedvKLefuJmbufnME7ER1awsembAqxpDrVUa6rTrA9fsXUpzJBkAHFzS2aFaJiqDFaWFtiKgwXoCce3Y2UBy",
  "key34": "vKWVoJj9iSAJTsF9EMKH2NJL9EDWGXa1kR4q2AhiraTZcgmBg3VJDue4LPPAvFFgumi45Ar3xFhmtBpsTK7Teuu",
  "key35": "jd8uoe818nTLeMXqkkvGUtop2R6RgT85p8dgR6JPmLRCs3sxWYzXEZ6kgL6E8YsMojbC6AnqKTUfdFMZ14amxAT",
  "key36": "567V561piEVBpzAjQM3LrgbHmP9MYwv1EyJZR4kEueZtPupS42hQzT82gnY6ME8mfBPow3CrKHw4gKwtp1Qizn3Z",
  "key37": "aQ7kTgavr2aYvCFmjgQ1pYvMd2LuYGTxqUkP7u8eLdqEzNZqWeTWqs38djWKo1MadCRoeyX55VSkN7bPVhgsaKD",
  "key38": "587WCUcLG4AzHiEAV7st99afZSrfMG5aoB2nn7sT6ntWEKgeEjCJg1pLFhNY2VRgnZCCMXeajcQZWFUeP942HnEG",
  "key39": "3HYnxvkFRA2MhoTxVbvKmx7vQaRDjhs9HppE6FUqRW76gi1RbMjpaJL68S5mvatwy2zmQ2nz6DaSnP96A15Lxo58",
  "key40": "2TnpdQSsAQMPX1wc8oKJyNUS5rbRcYo9WXSrv3DiQ13tmC4ESX5urjiPaqgfYsvQN9cX4Mfr74rsL4ZjBCnWb4Dv",
  "key41": "qsnauWSbnuXwPyXuiTZ4piX5Ck9aRoha551fruZFmRLZ2HB7bTTRc1TkUAFUmmDNkB7CVK9JTtxDGykDcGJC2tH",
  "key42": "2SExwC84B7DRvCTmWvRToQ85aVw3UfceDpaFCttdB73Dk1hbAtknshwPxwp6sf8QDMaSkQxa2YkSmdGBBJFLcnG1",
  "key43": "2KaGPzNtqGejaAhAB8MXWN2JLY4fsfqzZR87oD5LXqAT1ujKfaD5mAjk2t7k2ZvaFYi9v7fbtb25wfFNmSDDKaxk",
  "key44": "5J31ALcJmymqpGR25vqJYFx3rUe7rqi7gG5yPnjSZSLbxCLhqBpKoGbxHNNLSoeMy1CUQjww7WUsRdHn1nxVkfp3",
  "key45": "3cQGVsYvkd1ksDzmoe3hzUMt5TLXGfpEbXxLj8XHpNe2AnHQDfSUSgMabd2VL4Kf3H2JAB471bv5GZ6ihfepdyjU",
  "key46": "2PsASA3qBfoJyN192aeVvchQm3CvxgJDVzkJzCS5J1cUCbk1hwnVcrBGctdzd1FA5z5dZfbGRuCru3QPYmWktbgi",
  "key47": "4zjx8WCp3U24pB6v8pZKwxh2rY81L3erpb63uCc57tocvR1T6qLdfW7vwC1jzJGi664AkGcJVoCBSKb5w31WJfF8",
  "key48": "45Y3p3a4wpxPmZryBrGeoykVG4DqzNPDkwXFCpraB2LQZSMuUs1tz6j6KoMEEFF9Fj4NKeRtJyhKqWGksgeaX6YF"
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

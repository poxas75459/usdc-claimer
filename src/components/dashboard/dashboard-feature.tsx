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
    "3ZMfLFv5UzrJuVfy6zEGBP57Jbq2LAy3ZMwRGNmwEGkF8kkofqfE7CvsHwvvAy4bBMhSoMJrrWCYy5eh2nGosSXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvLBPCJCdeKHpEvNF7AvZyh8wwjFzbTkxnjp2GfjpC7mL4L5kJjZwyMmxRVJV8NhLKux2bbYcWbi3FkhjTmeMUt",
  "key1": "5K5e8jDdob69UFoyhGu6pGpsWRfdERHAQGc6NWXjWrPoBhNtEfCAxdoCTHrPgo2S9d7uKrsgMg8TwArMAgtzxn1t",
  "key2": "4gomNuLSaBagA4vHwuA3iCg5C1QzsXqLEBfNiezCstdXtUhhDFmgN3pzxmhKNcn1v2HJJ1P4knkSfvWEiGJGTjkg",
  "key3": "P2boqDXFZ7zheVuuoWacnaso3tWAxuGCwwJALjbP7hFWRDDD91QtoPLXYDYyWQgYhH8LTFvt6Voq3G7iccUmD8B",
  "key4": "2H8PBetqpJL6Mfw9rZ9gVowWnQqLMKSUddZmAjSzkTi43ZNrZ82JffXscVrJ11noh7c1KpBBgJdavF7CFgpqaHsE",
  "key5": "2icakZVoD3R3AovzrKggvGKKSGc77i7ptTW7HaDegXq7y1hCYuAkT6L2UobmQ1vduaBfkmWSC79WZCNxoP7hZLER",
  "key6": "4o4PvBGG1kntYDdvTriZWzPu9Q8VPoEAHv1LG1NVDeLwJX8MYCSNJ6owxkAsZVajwi48NgoQGwiy22q2sTNb2H9L",
  "key7": "5UKo4BvWf5eFahEzZrk5sZRTXzrsVsdtEAd6mtNctZ3bBE82uAfq3hjdL2jASV1kjFRvdEEoEMMBvNLrwWNgi2gE",
  "key8": "53ExrVMEcEpHntXrryDAvDqdsW3YVnBRE9u1qCtB3Uivbcvb59xvX1kWw9WVB3nF163XTMexwjknSqVN7QazwDGH",
  "key9": "3MZp3B8Aj21JVd1UV4mxR7weaNHnTkN31CHENoNdL47varuqM6C1H1Qx4DG1Ud3wHSbQ7iqmD4wSfbWCNcvCHWx4",
  "key10": "w6F6mFVXAASrgbRxJv7aW7ESiBbApWvtbWwYVPA6YDRoo6SMZvvMv2oMFtTWuT34R6eb3k6xCtdbjUohYo8dJXL",
  "key11": "2ZSvVQine6T1Fg4zdUNaWtxui81DS6koKTihTcd1HJzRmoyPtBTXWi6pXQyKzLAA62UqFmLjdTqoxtbR7USzRELj",
  "key12": "5H4iP52uASSypK5pGo6NzJYuy6fqNYArboE3tUNLL5SZaGFxALPatEWVz1ARWGVctkrJN6Mfgp9vr9y56i6PjQrr",
  "key13": "VXVEiiJHbGD3UovVhNvxyVHrpnf7DkUZ9LYXMsMiYwAzHkdTo7s4bfJet4LsvH1X15rSncxLqBnwrnGXSBobpAy",
  "key14": "4MSekHWb3KRbjxZRymNY7vjJW5idQwuq2J4zrV3c1tJvMBF8rcNbX8r7twGrSAV7S2Sv8aqs2a6ezYiq3MV8tPTR",
  "key15": "dRSsL1fDNbxKt7DcEiaKraWdNVhruxcwKg8L6qqevHBTTjWTw7PvbobLGZnm2MKFdcCqbiRAdvFryugHKUb9i5J",
  "key16": "5oHorKCtvrG5hoxnpJ7aYqRbyy4W7GtwFdxPFoDXHDhny4FAcCEQSY4UbfzNgfoAGvLLbWUMBeL7f51GqLrg75eA",
  "key17": "3EExiSddgD8aG6AUTEX5WpyS7GNdzctBmW9v2xhoGcyzCbx4ujJts7aGRKNAreBigViFKBNRtwpYP6XjpsbykZ17",
  "key18": "2CDd9s9Wzn5qRDau9C449xnWZinuqNLGP1kUC8HrQzzucrCruNWRTG4mHDxet2eZDJsoMAWe2jqQ2T8QvZZwLpYE",
  "key19": "5NFfU3wk1GCaX6JPoTSycesVRc3EP7mqeM6m1CM63owRN5i9d4Z96rMhT9kFpxv6EAuiwDWBFFMsJ44ZHwkYc843",
  "key20": "4jgpLe5yDyGZBYP7YKohDQSa6wgiPoJAgegKtZGWLh8J6Vgkep9Gnr28egkqGXARyL3syGjACi9HNsMcBSmDPQhL",
  "key21": "GMvhYnkLUguPVQ4HxBfK53oQe3sLESQtyRhRxnvj4QTMbvww8vYV9AJE7VjudgkwB55WXbfYBnKbuwx1nQGkKuq",
  "key22": "4gzZVX1xQuWCCZsG4CLWRgyQnx6qbJq3MoRaUt52iSzHyuZdvwhQfRQdM6tPK55tAnCPYYVUKN7ft831Gd9kigAF",
  "key23": "63xQPmZotxFm6okrMWV8PYBgxSxsUTjZeAf2vamCN2wKzo5oFRPo17F1tmenrJ5vsqASvrNcam6RKKYbrgUGV6kk",
  "key24": "2WqyzoN631HgXJbAMTu8PhBN3WavEshmd5h2uZLcSCUouanQzv7fduDPTeABF2oteyTeyknQdnvVatrtPCvGPVpP",
  "key25": "4NdigM4pKejDnHiKUXYmEQhdCXAHQpE8yraxrxuHkgHXzPvZ2uXotX9VMrf26koqbJp9CA5MXKx3yywbdgBVvd4i",
  "key26": "5D6ahiT5prdPzkuE9T8aEfK8e2qS3oG8os9JHmn5WsRRoRepp3TDTmt4AMpNo1wv8LyE6sfcchCxs4KJC18NMTH2",
  "key27": "4x8vcp6qQaxHtP83KPanT2ENYv6mVC5M2nMoYukgpaF3268GXu6S8RV262VWL56pVsv5aNn7Vh6nmW6tRGWSBnSk",
  "key28": "6j1T412c3ipJepwmeskzsjX7qBg21AUKqxgcEMwkSJRRVdtcVJAUR1AmvQ9XRmoiVexs7XxBUvWsSTbSUD1ELaz",
  "key29": "5iCx4WXbKCc7K1BWBPErFhT5UgWgmaJiVTsCUkbmq7k6kjZ2UwogVDjJEkZwDtk6PoNrWG8TvuGaMBHSF8W7JnNF",
  "key30": "5Qu33x1EXjtp6VASmuVagqjhCKjWnK1M7Ew3QsJCun8zWsM5tNt9SPFmTyVz42QRM2DrFdziQYmTSTqARive5Gko",
  "key31": "QRxcH74xenoM6PWVNspJQXqnZbYhz37vUBgQxSywjM6mnMvUXmFMV3ggLkcV7j1nBoL5XWqR4vyASKv4jTdDF7U",
  "key32": "adoGAMoaZ96Ly4ZFMor2ACAdMLsuA3Zpk3akmchBxbSvQYFHwt9ejVjsBzAqWYJHKzNSf6DNdqwDnGarY1XsJD9",
  "key33": "4PJdTyx3yQgxfmE9HF7KqLidnsotMjiLZxj7EMss86eSrTk1Tr22bvFhGuBXwRkgJ5zbDSYmwuKW6VJ4YadMdBzZ",
  "key34": "5u5tfywPoEFNCYvjEUHqio9PFWNCm9NUBajZwp8RFCsFN3exhKQqo8y3D4t7TNTjbV1hV2sdfPtwRx9rjsLBecq8",
  "key35": "4ieMxUqS6LBauTmkiEKxUFcMYS2WkXsvQYACBhsvSEjXJnRWp198US3KiusSQPoAoBS5bwCcU5JEwaVmuWXXcZQp",
  "key36": "2S1v8LVawsSCpo1GFfPD1vwwCgseDfxUFGrigXr8wSAGz1hguxs63SvTrDGRpwGxmSiBPrXugyWhfFpHVcSnqZoi",
  "key37": "2hDzYdcpCtLQUvnY1Q6rs4oRHSMnH49NNiWfo9Lhv2gPLLokprpUxxM4wSBpSr8bk2Nbar2JvD25RFTZxadP5jqZ",
  "key38": "3e1g4GBiJ56GkfgP75Tu6fryrAd5u2GWX99EqKRJa4L5yevpDaSq4SMgNfr3tTGHy5h11kKfUaQEN359z33JDnju",
  "key39": "ak578g614rVmp7L3zqdkkzdgfnQum49pdmjrHnXDi6nac9X1YHBCseyfrPMRDXrc6GuaHNibqjy9v52pLTay7Ff",
  "key40": "2Js8JtjuEg8PzMoAnjLjmD4T3ZvnbjTAMXuvzsLaGhmnGmcD4p6tkfkhNwVqqAnxd8ma7GmdUZU3LypqbdWP2jhH",
  "key41": "5AF3Yr4RGENumL8odGYmcWPs4oxmDzGtW8Hz1pieqsPdHLqtN3xwM7UVC4MytgQkbtPJPTbpdN5oRJTav2AxGrjF"
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

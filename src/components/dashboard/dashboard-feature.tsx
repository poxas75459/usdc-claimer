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
    "3N8nzhVZ65pyZodiWA2fztHdhv7DCUnsEeZcr9ghXVzf5YyKQ3Ww6oKLvsPWxWcG58DjoA5xjhCVumsizXVb16uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pyeo88M7snTZzsoVKrZQXUouzKDEY35kw51bcLYXYxcqx8LCmGKZ2vLvuW2wj5WppxeNPvWNry24dXWiec7Trr6",
  "key1": "4PzQYMohjyKpHQ5xdTEmxH2JxPPBsT6QaqXiDSbmpr7sntW6Ypd4dtwRGtuVP5SXaTPN3Q7KcZjvFHJMGbn2Bwo4",
  "key2": "4ebJckQpdJXQhVVf8VGp7YnhuEzgSgaYYep7cNF9ys1P4mXZziiFTdvQX7VdVAT2Ve1zzU7uRS9pZki1SHzQV89d",
  "key3": "p6wwo9SPFcBJK6e9w8VYSTjURvMZDhJwM1Y7DtbH8YK7C6ZWMDS4maMVbBqJQcLuDEs4VuxURW1vUbqMJ7SC5MF",
  "key4": "2bJMzscxQCG54CG64AaRa57sdtANsLHRqt13CSBsUpkPQrrowNQhXdX1xGKPaTG8FFjGgYZjiJewAobXP3fRrJsv",
  "key5": "5JbHM2m2ej5hcy5bGdw6Y3vnGfvn6Dg8YW4CjTqqrtB3d7NRwmxECA3BYu54D3Mwrb85uj83HsdvDoEFfQwqvUrx",
  "key6": "2Mg9v6FyX76ktKnXjCSX1k1EAxuNZQ3qF4umPiRg5xQpAFB1nwnk7B2BmYz3V4MPJr9hCJqNqUGk1Do2Vthh74Yu",
  "key7": "5XRygJ24bkUFinuuaBPqiZPoPsv42mPSuGWRKu4aeZJ1Jtno6889dEx5KTo3LJ7mMosSsuE8Fx9JFv8CRJ1aL1w7",
  "key8": "5yKEY7SJcJ3NmUomM8wzRuUKFQFHWtdaZpwhdKyCXmeTXggySDuL11zXiZSADoyDqeC2QtkWkkMmCfxhQ2WEhGom",
  "key9": "A9jzxDxLCCdEPhEMFEnkhJuDKfhWX65mxS8aiRZMW599gPXnuYQF4PW7UxCS5rcSHJ9prqQF6Hb8jhW72SkCPgE",
  "key10": "3rQq3Gn2N43Kw1kSvJNeQdgvJ1fy95UjtudPomReRo8g4Dd8pj64L5h3pBkLgBYUSQPSxZMs83vA5fi1hEcbq7Ju",
  "key11": "29vF1es1FWKx1SK8SpzH7LmfDPWAmrYSJe93rhmkkvtxC2rKebCANC1hVEcRmhyzoy3uBSAS8BMmJpn6988XQKuS",
  "key12": "4wsvidDzr4ivJqGuhaTxfmi4u5BvAC1nh5fWszhYdi4KTfS8uTQ4Pg5fraFWcu7vqxVYAaiwgG69hsPygK7TTMqk",
  "key13": "671TmMGGAEcq8e5rmcyZkCADiVno8X8x83DhSuFqRdgmAVTHMiRPHNyAB2mbk6HtfqBtdbZ9J2bSzvAPcxHeqrN7",
  "key14": "25MPiGc9NpB1H4gKjrdgi2WojqUDPzs4EWBS5FoyZY9y5mdMzHJHdmgN63eEMvjEDyJ8cY96t4ukDJECFGioHEUn",
  "key15": "P9T5e55LkN3HmeEFYGX5g1vLCPphkvu1wHhycnJTnPUscxUHP2PE2nETY37wkbXP8hgqaaJ6inSUQPELL1J3iPX",
  "key16": "2wxRLXndZdpUtDLAndXX9Bh3EG9oMDecEbCZg9AbAM99E7koeYQJFFWVysvG3FcnbpVzNTvdE9PdB3LFXFFNVjbN",
  "key17": "cXBZapsViESyzvDmFCji5F7GPruUQU4xWC1NFRmXURyDoSmqPLMm2K7kpbV91jenkfsysgs8bHt87EJLSqUcFN7",
  "key18": "4tFDtNe7HHru9DjhAd9wckoiwbBdmFAquaswFpsf7wWaEFbpt3oMRHMe2gcep67kAwK1T2BoSAkrVZ7CrbmrvKAV",
  "key19": "24XnUXRpieT7sW2Nwc9SgwCTTWythpXqXEzbUGhbffyTkXwpJoBsyo5oMTPz4BQCiyJG7eTFTgHdxSyRRChki5Cn",
  "key20": "2q2xwk3c3CVXcANEPqRKXFqBWqN1KirR26UuktZEF1sRqrkY4ttrZq8ZGzin6iAftMhRTZVveFWkfVC5EiaqxTJU",
  "key21": "2BBJNE91DVzKBJxhbGckzFLcjQGfpbGbMKjjNeoofYZfoMkv6J8v2ip7kCs757mEaBSHLFYoPmd5kNHx1TNyb13Z",
  "key22": "5joha6cRWFxcFFJAxmYX26UwUkMEK7u9bJb9qWKCi9Grg1ddk9kZwLHNFL96Y6KxuKKvMDyr8G5aMUsEpDEmJgkb",
  "key23": "5nGCP5vvTmq5maZoqdZqFgVB6zJ6BeMzvtY4BiQNTBVFvjcaMfnWfXTQLYHiPNays4KjKCtr918mHxmd2hzfs157",
  "key24": "4xSeyycigSTLLsc5qbgyovzn12Z9XSTGWZjPz8mGWmLxiyYLRkCnMDC8TQM5bVGyq62KSN1WzLGbVgA5PKL2Q2SG",
  "key25": "4naDqsCjusMRio9yQvA7F7bRViXy5W7fX88dWUvZrXFD3g7Zy3S6mpA8myeFHm5FKT2VYjG4wqkSXgoXtXzPwau9",
  "key26": "2J4TCUc9UFMrL7VntCRZcksLsxjx4PRdpwxgk9cqiqdqsTvcGBrSZmb9YnZAXb4DWSGVr7b2h31NsRxq7cCY8HpT",
  "key27": "3VoHBvSNnjP4BSoCF9EKbRYN7w5qvwwrJmauKwrU2fSma7eFXk368YypfctnA8tzh3Dvd3eUdUwxyv4GdcNraMAU",
  "key28": "3zXp9hhjv9PY9TXkxww4NeYCVsRi1foPLuJ6aKe7Xd8sswWnmbAWpjc3Hf9BCjVS6tJ2h6LEpYkductcJC2A1kgj",
  "key29": "5TjS5f1H2vUWWjnZhiWbhg65X3ZsjaTnakSivrKhNqkznP67hj71PLAB2mF2evcqL7yjBUoW4uAXyfAhJpQgCCiX",
  "key30": "2dog7HDbcUnef9rseYLrpnoTQeDfEyfnq51rNuxSkyWWAM9jgpZ9sTVTFK2sKWtNHwXR61DPaWyiGCSJzmpLKa51",
  "key31": "2LZ2HWWfYEjWMJH1HSnc9PxiUCvMM4RJ3U4G1NF4G6yK5phpNigrzxiknBGGBCzjT7pVkz3DG9sEZDRRMLqSKy6E",
  "key32": "4yyunb8UPkRgEUaeXtXyVPBue3qcfGpRjm3nMtAT85NNXwMF7aACduCjvwkJX5Rg664iG9iMnGwsHrtUQE36p29Q",
  "key33": "4dLguQmrR9ZGZhVNTiwCKE57TKe1ArQjSvaNFBgTNcaEyErExs1ELjrbthag26V7vaai4MtrKDxoiNzC7F3irktG",
  "key34": "uja4sjtx42T1SQpq8b8h1UGHdRUwXFBbLJztdeoTephTtcT5qfaRDjYkdjY7br9NSt2bdEE72AJNLKT8BfHMGYc",
  "key35": "3XgJaoekND8NMA4DW1F5AtdsQHfKpNkbCbbb6RrQeL7AFyiygNX9sgHXSuHnvEQSgm9BPA9FaWLyUWy7ZK9zfBVR",
  "key36": "5sDo1TA1iTSafMyFj9ihPogB9gf1BprsDt54DRsF5tHfbeej2xEgLzRCXcPTdXEpJrtxM4FfYYwRtxKM6Hq95uX2",
  "key37": "5k9hNL3EuYL5MggNk1yTjYQV4nQjzd8YwhTJQdS11dpdVe6151jubo2pTaPqVDF88sodN1Ck9vkLrCWft7Y81Zit"
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

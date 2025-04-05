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
    "3T9W4aQcn6AxmbEpD3HgyJJev9YoKHh4wTz7w5254f1ZHPfEK3ecHkjjTYvQo1mSHXfyMKWTfyPYpGBrkVCmgqmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TRxxoRfeHRJb7CEnr87BcFsX4GyL22CBZJibSf9ydTCAQPP9wabqpZ2LzogsiGnVdpkh3bYRdJTgFPdw349iGVe",
  "key1": "4x3SEGuWwtvVo3aGoF5ELwA6bXfT6V7wxWhW82kFHKgjvYRP6WYVoYFXzhhQgEyd4zhVN4it8vskwCMTrk8pXYAR",
  "key2": "5jYYhipoiBbZK1n2yU1UKx2L6YLDqor2xyToxU65m2ePNvjysqaSB5ezStLaSpXrwGMWvfqmPnoZgFGvM8XPUkem",
  "key3": "4h4JDF2Cm57xkvaVVa3B6fwqB9cC1brAg1eWKVJqWdXSfCQXQBMRjSa8LbBntURK56b3nRmkQNHDoA36Ek2SMw68",
  "key4": "TvveuezBsJGzgnTXnTUB5R9ZiTs71L3F5o2AsiVBkozy3UnD7iaGZthH4Ytu8z6u6zdWRCdfCnxjNzT8ChH2pP3",
  "key5": "5rqt71GiCtfNkJxePBeXteJZUcjMNyCebXpTWAkiJjrLgzoVGBCceBZC8zkg9sgZmSvyBYHnN3Y6eRJ5YVzX3AyX",
  "key6": "5cUd1R1y24wrDAWkyPGosBS6d6TJ9RnHrZ79vtHiMWaPmhBdFPwg5KyBG2YWQQG1CjNFav8ZfHNF9qwW1pZUa9m7",
  "key7": "MXFvSj7U1iTjCtR3of3A6v31BXvyZqXzDf47mKQvfMoSw8GxU1mR1P36zidxcywTgb3okGvA7ZxRMF1TacgWAKv",
  "key8": "5WXDULejSuvxNfnw4qSwDoV9WXS5145psVjNbfLe5jpzQP6JaYxjdPDuj825fY4E4nWU9SEuZhFSt8ndWnjoGvZD",
  "key9": "2M3v986p3BeKhXskKhc7hLHDbPzttp4FzBiEACqzYAoTRNbuqNw7Em5jTZg5VBfkTo3RzihMRbUWjcyRDG4uVsPD",
  "key10": "oYP2jZ8gzDEfa4467BhvcsgvmabMBdKHZt8FwFmgKcFLpQe55tRHbasrEBT8XeQGL1MgXyJeS3NAGp9Yoz8UT51",
  "key11": "41rqbH8HLva1fWjq9924vNyHJ8qN7tpp7hdtqJPeFQmoBWGQD9eh6Mtj4BTxsU5kS3AGpcxCxULPRToVFZVRcgxu",
  "key12": "5rKcG9126jkve1TutXGTeABU57wiKuQQ9C21DysFpiNTCfxGsU4KAnf5S1oCfveYdsppsWDmSU71N3bSc3jTmtEN",
  "key13": "2xLAhWHUXLRNdYmDB62nL5NoYKxeEaaiWid2LKCicMyzzpEmqtXZ7o2CjQueM17qHHErwoz5LqELo1ajzw6B16w",
  "key14": "SgvZVr3MhtV4WCzNPqnUWhzKCpZxjZeHdEpRiqcs6z83q2tznee6TZW11NYC7uyrXMsJqUyEAVcE48KLXenuVov",
  "key15": "3hZiuWGkLqnozHW8AtHkgePSsPRaP4dYsk3B9V2J7dTUSBaCHvKV4vLDMLTRCYAYuge73eAQEQfQR5XwRe4Yoosx",
  "key16": "5xTWZVFJumXzPdUKwNjd8d4c9WVRnX3RaZouGdzYpNcgrxKULWNup5NpfzEGKx7mmD3YiCkvgF5t282SGpDfoX6",
  "key17": "5f5U49TAaRW44iXD5rqZ8LE2Fb46t4gQant1dGez4NbeG2nEK9oonz7iXc8ECV34rsvQKpoYwMenAb6YF6MEe1kt",
  "key18": "5iZHS5RxZDmZy9fACLD8Jj5TwLvKXrqJ39FMW73VLRaxs6FQJhMJEyscYv4WhkiCD3cPULbDPKb1DFDurWTFgf2Y",
  "key19": "iRRMwAUU8w7sQ2FuNLAKtsMiPWfPhj6e3U7bnTwfPcKD1zioUq4tVAdzWyd3BTTRW2c4nmGbX8wwdfJmJfcxWdb",
  "key20": "yjhheTn2rByD7nWn9fFKK1VhUNsZYK88phb45HqfFYrbnDX5CmqvmoMqAon7byjRwatVww8ToEUF3sYG2oWK3Lo",
  "key21": "3Zz3ajNpMu5zooRnDX5h9ThsbDt5Nwnn3oK16qRRwruS6yUJ3LaWsuunvd3xpjvzWWGtRmicJJ3riLyndYdJshsn",
  "key22": "5s7Ju6kBgEwMg5PBHpmcg4ry6KS5hfybg1NjaqQ8Viwig3chMGwSB1U2og7ka9TzKo7tNnLjvgAMoASGXTQEyqtP",
  "key23": "2n23WEq2bDgtYrjLweFP7XqyJrh1LXGX3QXN6wLd333FWMQfpiow647FrWZStt9kwRZ7Vmrh7G3fyfouHH3sbwoR",
  "key24": "3br77mp4TDr2t5DuTW3wSHgw6HPBRHQp4zjPv3jm5dhSW7u5GcFo6R6aujDvpdyscrA4Xh3gvn7RrScg7Kwt7QKJ",
  "key25": "4gyfZuNkfEbX7YuLwcREeaBBGoXZCdH5vd3rMeo8uYrFVafCkKKtCZ9FoBypGTVsGLLqgcPHnVDxCdBEtT8D3gyY",
  "key26": "3T15J86LSKCXJm36rb7TV4VMZDzKsnUsXfGT7JQ3ah2uyQerj8utgRkBMt8Rg5MXBZz1yJXhGp8MtwPbfpZyeTSK",
  "key27": "578zQagayxTzEa7DxjrQMEdEAHMfyRoY2axG71UidXJ43gmZqSsNeASSdct85PwNdriVL7vtbBPPQSft4F8mzY9Q",
  "key28": "59aMaDVhCG7Y6wmA7ArA87jWtN39bcBCEZxSNbNt24xB7LFwGtPHKXkQ25vA5UiEVcBF7cCFKodLqNyfUZutsrSh",
  "key29": "24BTexctzKcZHGTaArkEu6dPc3MJaQStprpnSMav3zd9VMMDkWNejbakGBKBf6tVGKSiJSpBCZmqaEehwGd884gR",
  "key30": "4UxbZW9sp3EFd4GmKFX8G9Qaff33sdr1bVFYMepSf1Rspgq9mir16P3F4MwuBPdQ8MDzdz2KAJvo9SJwLLBRAnwr",
  "key31": "2iJSUf5N6vD7dS2563y4e37aH8TZ9XbCBo5JPPrGnUbCGLDt3wMVovwNYGbwpwZcLD7ChXjLTmBa27fy3uhRMfD1",
  "key32": "3ceF2ahoGRVwFNV9YCFcKwFDazrDnR52enPXVwc8n5tjN5zcfGLG8KU1YFv2KmDwieGWR95WMTT5kmDXrezoorV7",
  "key33": "3AQpKR21VEiAcaUnNbXbahFLuHXGpEVGf2NWZWUxfEfYCzfK79oDJVASFjSbkwpvmtjdXAAMm5CYfrCNWwcYtDXr",
  "key34": "2U2DdnineqUCeNKR3yjLmK6WwPx5B81BL9SxgporP8UrTMP1SNNbJFsNWuZCM6J83rKeX4zJ2vksP2W69DjJe5Ei",
  "key35": "58cN4Wy4mcZUMiqTeoNSLasH5N2DwRTjhABJhbWSBJD8FRjeMTwcYLyzfhMhZMQSBnhcPDzyBLWyKmq5m1FpgVks",
  "key36": "1aRb1VAcYsogtGSDiiRrcVprp5reLrTW4YDBQf2S4eKa6AmREdtVx65NhQY22ZG6rjfL6DSMyHYTxQ2411pooAD",
  "key37": "5cZhHeZX4LT2dLUsfBiiYS4Mv8sgyzH3L3EjEfdAV481qeC2Z5vRHuXqkQmSD8d4KcTaVEHRUvpnA8txd2JLjYcc",
  "key38": "5KDGUPWgtgWDgVFt3sTxF4AYk19cxYo3Re9sobxUbLB2dNHjnz9B2oPjUub1WxhxheMHYxh8FZZzqVkBRv8bwp2R",
  "key39": "5han2H9LzXNeLkZCtQhFYe46fx6ReKHo8K4BGvXKMDZaVyfKYi4AjuGGMeFwHG5WyaeZNPnbFfkf1XtE7J1dKmd6",
  "key40": "3k5bbW2cFSqGMhktZK1134gFCe4G5YFBM1bosLQCogSt8fy5JjbojnAMwCwoqzmXoQMDhBZBF37VH3QKnmZUZiPv",
  "key41": "37JZhXcRqf1axCDMUUagSWBUZUSNnPdheCuFkV3rBe9JyYGw9UxZjzMv1Wnd9DRWXW5PY1ofSwVytXsGZhF29RoX",
  "key42": "2PvTKjTvACiiB9rNGhoHMwPAT2uwYLXa5JFB8ZwbTeg6NHaAyegFo36b2UTeFWYvjMTwR2MgBZjVP9bN57Hv8z63"
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

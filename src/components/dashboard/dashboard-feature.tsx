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
    "5FnPD6UcpMEUqdySFA4kfwcFDaRgEgrPLiKFVBQSzh5Yawn5FFZ6G31ATK932ZBRzKcvHrrasLeKssgLPVEdWhCK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23bvJRy2kpSJMrFnSxBdUoPmwr5jqJtVPxcxXGZJXtYQyeKiQJ2tYYNpGtbtWpnDckmpMCRfMiobTAot3i1HjR7A",
  "key1": "2kxkxcP65ajWEKihecKWotxnRsGA2PYqS5mw4UkJPP5qTATFh8eokdzKpANMfBAUSV6ivCbVDpRebzrs41FoF1DG",
  "key2": "5cK2DFK6QkEpqY6dpFLYnzCkqGysqVe96Mg8E1aWgfyxoToaqPUGueMFToVgLKyeq4hDZAqCqANubHrkaL1xGcBk",
  "key3": "5izNf3PDcNm4u8T5vybfSpTFGRBnBtN4c14jDgZWLJtz2HNqWWS8RVZjLZcDT4Lq6jSQZVEJFaDW8fY1NGvcj3pL",
  "key4": "4MZNbR3euDJmxdiHbNQdkGTDqX6oRC7gPyAcXg9xUcuJb2PtfaZYm82tfcmgJn2pv7fiPFJzd8XdLHckXw3eLDmX",
  "key5": "3y3TDgKj4dp1hY4TT5nWfZS17Z8vzjZLXL1tyr2uNGUjsqQeuF4PHQa9nhFDq7QUPVT3w7WnXStwi5cBsbUWRtbo",
  "key6": "2rkMwEntRrcJSXLnYmrA8knpz8cJyJJp6vpJD5V56LpZSbUREpSCgAvLma4NfGYbtep3mNkBHtomHiPS1e6j6LkQ",
  "key7": "2e2ob6tbU9zJtW7nS6paCKXVuuLKRLHZfMi3A2g4HZcC98vRpH8keuTtBGZfjQY7ZcJYfmXFgMvngGznbL5GyAmG",
  "key8": "4xGXwgkCX1SVjrfkzgkmPcD5dAktGmgpW2MHfESErutZ2kfK9HokEAqVB7geQBJ9FZ7z91yX8jAEVzMr5q4cpr4s",
  "key9": "3ScfC3zkZnF5ZAnAgSqwux1XRc47bT7wt6PgeRE3QiP8YuoJKAjYbwVumnumviNJ1pjo9caLuqHW2fJHSRexyzE2",
  "key10": "5LcXB99kYjtpcBZwYqa4NdkwHQ1TVRPNzG43au6DazzxLoeyfnsugHJkZZ9ifVBEQQMsqzFe96StCNnndfKaH6LY",
  "key11": "2mDxUF1xrm8XoAc5M4ESJnjusaxaQNQn868ujNbgxEHGTst7Ur6SkVZqSQBBaFD52ZDDRwjHCCwYGBiRtfcgGnP3",
  "key12": "3Q3dahuU17oPUyJ2F91syzqbDH7M3C8HMRTfmdcFeqXxtubkfEVPNSAFrG2YFHMz9x2EEg2Hxgv6zWpNzmNRJ3t4",
  "key13": "469rPpnG4vrVsdEdPPNhLRN7zjV7wVwcWHrRW7DoDPfB9KjiniFbkUAtSo91uX1UthbWBunmPuZEBonvnwjWFaHo",
  "key14": "DLyRiGJApSuMcEUaV1aErvk69Gw3B254wybm4w6SL4cMtJoYtJsmhbpBcbjs3NQYEuSGivtnsf95n89QTFkNM1j",
  "key15": "47JaG6igJSMZGyKpSdSobevDh9Pf2xTaLecVq7WSqBXz7Pq6mTyGqptfX18bwGRGe7pyLgu6o28TBSGcn2LVUZvM",
  "key16": "29k4cU7E2QbqgJR5kx3ixXfgPZKWw2fzALMTSRZC2zmy6hZQVetPup8ML3N944HVbqska7JJdVcyzRipqiAppBTP",
  "key17": "64fZphSdyWPbrdy5S5nCUVGtAXFgM1BoBnNnx69BQkNWdMoExJuuFHZFESHqdRuSkv8gEn44Jca69EBbmMh71wx6",
  "key18": "5P1fEw3CfijodAoxgC1ecttP1hjF56QPXYPHQ1kxTyMvV2yXrKtb6LvVtAU3aqmuAiyeTZMiNcBfBBm24T9uV2zk",
  "key19": "661VKZYC8RZQR3h64Wxugs8qSMmAx5qLG7e9bsR4fTnLhwrD1s1fT2s6HUMBM2ULcYE1SBzNdiCdK2am5whTZQ2q",
  "key20": "5MCLp97xas8XpYA7Tp1fSJqxQEi9G4XAken6bBpRGiaEpwLZZssgFXupXVDaLdkU5LcPW2qAF3rZ5BzwRY1JyhmF",
  "key21": "3qa24H75vWG5U5McnMdjBp5Jf4wSWr4xod9YNZ85RNV7NK7QP4gcmYJnicxv5VuAfKBrcbXisZs9FcGpUFD2MJDQ",
  "key22": "33YvMCg1jRw3gunkLPaxbQiUev7UwotPHRzrwsRdnB8Ffsb6EXcZgB8heSztvc7jRjNJEgMcUKS72WHwobymWV7g",
  "key23": "4rTs3H4oaGNUaZXV1Wzvbp6WTxZTET8R7E2EbxGYQyLX2sXMQ4DfpFb4qHHrMRZGzKpNhRdBNV7b24HqimKPdJLX",
  "key24": "4NrETzAzJif1EbpAgBN6Ziy1CxwtLBKZ8rHPcVY68vDUxHLN98Tbj4NGCqMV7ziBay6L8jbeMduQzj6V4F3w7QZi",
  "key25": "3rFrVE6JzzxznAP1uVoo16ad6HGXKNDoBAGdkwdwJDTdqWpkRhtcWHzn5STALQPAn8PV3pPRiCfTxbmYpJVySvVc"
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

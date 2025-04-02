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
    "36DiBhQ7T55eTALyb9brPDL2EuhNY497tSSPYFnqCmi2415P92Vw5pKD1jCdqJtRCZXL4933GiszZMWawemokJge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ld98rF2R4qQePnpefdLfnND23jbg6zcWKRWVmgPuaVs97gHnvXQkTGfa37xpvQkQdtDuY3fP3cpuwLsaeaS9fC4",
  "key1": "258SozDfKRTWEt1B4uAJyaNBFdSbQ5iZATzBHfA4CXhbNwRUo38udoALCWeYLevPMaUSjzUgLcnM5Fi4ocWNJ8Hx",
  "key2": "2QHYLCMQhTVq4Fe5ecTig34rZza2rxX8gcXHaWPo4vgb9MCNqFoQirzZ1DsTui7aCDHb5opc8XfPdj9K6k4UjXok",
  "key3": "5cn5sD1M9ob1Bc1JEkFprYk8Au7U469CHAR2g3b5fuY2wbmuySBs8PFrsKPP1nYUF2Q8i1NbQjMtpVoTXaYYcQhK",
  "key4": "2L5KdAjVApYwCBKKMtYiRHxhVWCd3sN2HPpe7Cqj8cvWBWJkvqNeXguDZUbiHeJDPS81Lm8f7dyD8v9zp3yBKkam",
  "key5": "3azdgkEpHv28wEh1qj8ZqhHEw2D6Y1xmA8ESCXfJzikuFxRrcnMz3f6gmwk5pomcd1eXJUnmzsLKSpoiSnkTm7W9",
  "key6": "58nYzuG56xMTHbni2anATzwAsciXGhZcEpkyjqnKLNxDG1iY2qQr8j425itupt8vrPDtMy2BhgeJj6eVK1xF3wW5",
  "key7": "4wfYMc6ro9PSqk4jZLVZPfzNVAzAYYowUHpnWumeHknMRjsG1jisfaGNwwzLZ7nDb2hK9S5k1D6jLSf8MTXiXr78",
  "key8": "5gZfMxs9GQajMjCVss4sobsKn9XyWaNbzwMSQVVDGCiPFugbAPrzeTJeHGKaDWp4oQ9DaHitHGRAMecEXR8sYtKW",
  "key9": "2twZKeTTKPPQ7CLUgTiasqkd6gQKALxrShJkaBo6crUDWe5GxpRsgyWW5tCbJp2jFQ9rC7Mgo7hYeK8nrVXXhNWe",
  "key10": "3Yz8vJnHqqNNqjw7G4CLuCE9U7uJLmCPHP6VUo2VzipFtcoGxNYM33UpDTpDLU8wpWZeRJ9E7BodL52VQTUPJUJn",
  "key11": "5PjoToKx6U6Gh3JBrmTEJaX7CEJxrAsVVDtyuQ2WSJagdaPaJUZuvNupQKM5aatxBuUUgxds3pe8CwmxrXppwNZ6",
  "key12": "5XC6CRfn26R8j392j9TmpdPwsPcrEfeWu2WvgJVeCdm9FoiH2zXH44Zh4cfQTEbTzdub2ntpsyZy91BrR7Saud6D",
  "key13": "rQm6DW4dJK8tieBqjTpbAh5DX4BEDeSqypHJcWje7u38rHwShX3stLQwn4VoeUYUxikao8oAcGftPGdHUeFtumP",
  "key14": "2YYwtDHQzQkj3EP1Rj5MtWT7WTHnhTynuviK88sxBq6aEhRXJ7eK9SsWzytfvhBMJLDfQboFRc18UHoem7rpRTNf",
  "key15": "4kN6P1XnU818xyBvakrbRqrLb9mxNoAqcPz2NFGPsREfjRbiVSATsWZXJN1sXYcGfkH6cGACHt3LDcbZWu1ZcuaF",
  "key16": "3ifqsMs6pCiw1D1iZUqiy49zRoBd1p7SBSBvLTvrHJrgxRB8oivqtfD5pQp6yf1zqEKjwy3xPCezcQxgco4jEBiv",
  "key17": "2LWkunBp64b9hBkZKRoCkyJHeyGgKB9heFTSbTc99Fz93ecotN6NvCF37Nyny3KgHgTGdwHgkkbEDJEUzYt585N6",
  "key18": "3Tzvk2J9y5tQHxKt2mBfzUFiQ6yb8ekh85XGCzhV1FcRGMVapwmnh3CGEHzU8La6mrNUrtmqqchPVgaN4iwB21SM",
  "key19": "VcEdofWp5uqgomeJ9mVFqgysR3UtbW1uHv6CzArbH21A24iJ9tGmTrHLts4zmuogn8rAWmGNnMuKYwRB2mpd8rm",
  "key20": "hYyfrrYcdwvXSJKc8yhiGHngao1hbWqbWHtSv3VXP1hreUU1JccSTUJ9qqc22gXUhbSsgeGzMhXhvUTdKe4SG2k",
  "key21": "61Y25mX7ZDhSpoXXBsMunUY7wPhMn963PQ9cExAjFqgVbfLVrP4MKEKDGJpNPsxHaTeP7qGeFUdvnZmtdNMMbZje",
  "key22": "vRiW6aCMbQczFivpWMU2o9BpVuv74sN7AMnj7UVKs6eYZMARs4ayRqupkdmTswr8D99LtQzCtrsH6VZUcssZCwA",
  "key23": "2HvzNUAEPTHCBh7usshs3oohZT2zH5Te7YSSxNZCxGhTtf1Z9HvbqDaAhsKnb8UdjteABZgkXiNZSoEZpVDrdvZc",
  "key24": "4qq5HfWpaXSXmxnPMq322feoTrUQj21bKrm4TbZx5755GVQeHdgJimmJhGoXoFWkbJuUGSHTL9eSYJBfWKhGV6pd",
  "key25": "2hMCZXKtiukWohtj24ThTD6v6j85FSsMCUmczfNUW8cVodQP9pqNTJX7ipU96gTX6uXaBdSa1rMe2DHvojonpZDz",
  "key26": "w3pSZVETeBRd4A5t7KujWPk5qvdjeQ2yJaZtxnMEQCo3sLJSqkcnPvhnz7iJk1BMTq2W1MjMQVRkWHwFCtzqbsT",
  "key27": "24v2XtBykPQihv71e95FyNHA8VeYkdkBPjkyjcqxHQ2xuVMSZk2tsVmhBySshTsYcfJZ5sZoWZ5fuGcJkqontnK9",
  "key28": "353gmM4JNWAq4pFG66N64Vf4rhzEEgSPkCC3CMccfLMvVuYQsCreSJXaWozJJucGz8JeMnVT4HFGWrTk6Qcav3Eb",
  "key29": "ZyLt9BMhZaenWg8dProMopMUHvTGzaUNTZwV5jHkwspCsZXmKBdpTpNzaVgUw8ngKMNZcn8LZVy4pAGtr7EgPQH",
  "key30": "611nPuzgctTCR4vpm3DdegXsCADGjjLahmpXedw744BF1yPd5bz7nSFVq3idrxRW6jojyC9NmJD1mxveQePA1A42",
  "key31": "3oLyy7P51tkj7LQp7HmPtoasjMi6rnfBZpYmBkjngCidh3Nrqj3PrFn5rBtjnSepgYEXUCWSfVsHFevX51rzm9AW",
  "key32": "65HM6Cdv4tJm2uTzrCdZjBWNK6J16U6YdErnbv2HcaWKa9CR6XA6t91LfRt1XRip1wduoLMh3sDA2S8nd6cGY39e"
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

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
    "5GQCU8GboTqZS4mAUdFJseY9U34i3rjptjKDhvo6SdSYhPiX7ALoNvU13PLN7fH1cvu4N6XjR4XPBkovsz59aTiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vz4dc9koQDNnCupd3EH6T9waqZopKBN9XgXm2SDUGyEGJDMeWJbmvXUr4Xh4PS6nxf4hdJjjbipJ5aXMszggAbC",
  "key1": "346SWzee35Ff8CZbHyfzKLzrDZo46eYmNx3Rg9kW2MMroPQKP4Roq7oYcthCMeDpQdxS74rNZdbqeG7wFDSVYt59",
  "key2": "55TeyLn23tahBVfpjWigp3BuEWp1kZMtGgfAzV6GxtVwUjqoho6mj1cjpFd1saFaQuvfiMcBKUCyt4kdyKaSD3ve",
  "key3": "4VfgvqcGihAesZjE18wPd1Qgb1bGgn4nZwws9rR4iLYKiJnZnUPzE4evPSC3uxYQCUmmitfepCEoAtktjcqW7JF1",
  "key4": "4z9uur3Sj6njdLA2gGRTCoyFhA6YHToY12Y3jBS5kpGX7VoVCmT8nxWC5kdxyzHhpmbPU1PRzsSQfbA23CW1oC1e",
  "key5": "4HZGiivQ6jGWfSzfa72C7T2CRxqrfbVuQa8Jmhi8NxUaLUTAgcB1vCMADhVqS3WbbvsPUCinFYwpmP2L8LHHJCb2",
  "key6": "4EZdUG6Vt37WGCL44ziT5tL8GRifHcg4o7yve9Cu6yeKAhzU9EpvygbFAwUVx3TCjpS4C7H8LkNSiYztcYyXvkSr",
  "key7": "4SinchDjJGs19gpTKsvkuS91gFe5rXWnfjDn8J8LwAB7Bh4Q1FJHcofKtNUYAhSfFRUmQEmbLNgzLJPezTTWq1C",
  "key8": "2Zjcirt72VsAvtCHqe9er3dEyLgT9wUgYvuJSRSTXaudLeqUhm9m1DW86tjexiXYWLvp3NqNLqFTLFq6xPAT8hzF",
  "key9": "4nvnq1CbwKUdNTHdBZAAX8EF3S8a7v6yodxmP4GAt3NL8qs3ThVqUdXkBC3NTE4eGvDtJ14MpbArFVVwdXG8SFWn",
  "key10": "5qm6nP2vBfdmfs9AdhDPA9ZGLeP9DEWECZoxQCADbnoQZyqjE5XU87ufm7uWKSxTRrMhWLmJWcdE9rYfRUQm8wFb",
  "key11": "5DXeSCT9jmpwyC6a25Uv5k6r8G9amUZdwHmvcHvPSkitNAct7UYd3VhjxjrWLiDAqVksFffXRKUJLYS4o41vx7y6",
  "key12": "4DF1c4UA5DP6oUmLim2vTrVJHKNwDdv76S1s8FQfeiPVAgTjAwrB3ZVcayK2fhQexHENuQvyNvyJbtgh1dConwz6",
  "key13": "2oauVDGzSDyeCcUsZknCVGG5GwDEBeW8MdmummDbp9X5LkmhyyeZT2ESL2Rnpf6ojogftwXXz87rU2qLc77DL4vD",
  "key14": "4onJnhaxS3sGfFpk9Ya9XjQDNtXp7nf5whaGdBuxNKU6qQUmTScZyjqsXFkYQXjNjvhQDFugjHhH7LmppJAydraF",
  "key15": "3w44a13nWKcqV4NhbSro7thtPtY1brCwHfhJ2H3yqyKNQ9kKAvfcVrJbGyuZAfjpJgYpSofbuVtHBjpBnEDTsa97",
  "key16": "3cmc5JAqWKemWJXiVHSiSp6jHMfwUqxUApAKhxC36SnAnFqochYu4M2Nk9EMbzWuSuNVfAHNa8X6SFHRigPPF246",
  "key17": "4hgwhotPTfDH672svN7N5tyNaimwpw1b28NJC9idrukMG1bvqRia54JAb6MeSJChuaPfiYG6KDotpRg1t1V7kWF1",
  "key18": "61YDGBFWCpvxSDAmTjp85yt9LD6Bb4czLNherRUvd7rEEUGjfAyFn9TKbpRkBQEF4KuBHM7Hy2L3Q6jJ8cmGtXTo",
  "key19": "3Qft9PLuoBRDMwrEF2mhxFrtxaALtnfyTeU57AB2ZmiaAiBAhWMvHJJtt6tcgzGCNnjuK5uSzYiDG9yXfJxHmmBS",
  "key20": "3UbzYjLQiEKthETD33WTs8Q6pWXa6PyzvMQkAqAPgNKAzycNMJ7a6jrzAbbf2mR93wwJt4NmVpECu3MVczNuCfpn",
  "key21": "2HkmZ9zrgMzGw6Hd73bF7et34VzRLhrFsCPSqDQ6TMMxY3X7bPh9y9qXRC97pCLBzvMh9PLPdppEFMaUXfnxa5Yp",
  "key22": "3aKdVJBoUMQm8eAkst3pCA57XL5AW2uwSd35Qg3Ls5DHpD3Q6NAzwsYM9suE3Ewh4D2PJWzSxYh6dY22kji19Cnr",
  "key23": "5zeRn6EqMvmUp1a83zYixqkL8HDBVt7xDtz43pGqecUcHS4Vm8Tjhe5RUvWsKL4ep3EfoKMaTDFuwzSXTLBR99XC",
  "key24": "4j77kpr76yNTxYHw5SqAu44vNYczCS48QQcwsuwwiNT5m5tgvhnK25ZvU3qtQkP9rSsq3kTeire6Qdndaj36etik",
  "key25": "3GMpieRkDbXtEiYnYfcvhosPCbQTBhHNbGCSPCFSZgQ3HSdwjXn4tTMonxwXGqZmHRxQ9yQc5oMzgXRWNZtZhn7F",
  "key26": "5h2wX5ZupexGpKPxRU9weWhD79XCvj7HEREtY74MwwuSpQ6vjPsRALvNNjrL5fqdcEBEAFuHNtePsM3Wdp3WVeJY",
  "key27": "2wqh4YaqTn5dbTMmWXN7t3sY8HykKMTkNqUjxUV2oHnRLfpHne2r5uJz5ndFj1s5kZauz2zqxGvM7C4vdSjYpTSu"
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

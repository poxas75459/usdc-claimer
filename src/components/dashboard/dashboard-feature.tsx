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
    "mdCmKsRu6TtvHdXrDGg9ANdUuU2StUQFUY1qrZXvfxbpgB15g9VJoTxcXQKc1FLFTfTJYbMP4RD3RmnpdRxxYkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iC2h96Hz65hefygFVZDsGTTWjuLim6DkvBFH5KzqS8ZZ89hwj65t9dZDPqgSp5seMUR6MFG7h7gbYSYYw4gno3e",
  "key1": "5B1Sz1FYSYayKU44ReVXXueSmzGmzsM1mLTxjVdL56dyEeJrLm4sjm1ppdXYzqpeAPvW88DuWy98ZfvWABm7CExe",
  "key2": "56pp8gW1t3x3PhL78noFZLNFP7wMmguGK9z4d3BSZPV5hK3hNqUL6sQ9D682MSEYMPmHEnPguSqDfs5RuLxJ2bZQ",
  "key3": "41qYmKQcKnKmkxXBKiBos8Gf4MBmTvK3sBErbh1PkcfaLZ9a5nUjMq3UHbNQfDdPgByUrdxtGvJno697nSsd6ita",
  "key4": "2fJRFXWdH9KN1CBGkWm8kApp4RSg9jYxpA79gcUQ6sYEsV2YnHbY54QN2931C5XZm8iftQgHGYsQCR3W6b4NKhE9",
  "key5": "5rdhj8a1Bs6uSZYxmV1Zr6Xj7J6mDLzi3kJByvBuavCpvwAsRGvEvRFnypxRvywGjMbofD4whGgKFtDgFreRn8qH",
  "key6": "5rv3mkVoo8vWKnoxeajzgmPPH1kuKMjh2DAkUWVg6wVD9RGiSw8hGgVzQTzZSCGS1S1Vbg1umVwXxdZ7F4wyP6dU",
  "key7": "24r1nrH21hY6btnyVrBWkegioqr1cMbGCV7qEiaho5BuV9AiJGR7RJg9pDJP6YYdcM8L1B9V3iiAaNkZhzjL4Yt2",
  "key8": "64LpFstUGEe4tF5ZXZ7PzdRMVTFaVwHTsUbFzZFKxcmNPRvZaHUjMhrKTUYtgmCuDiuDkNLu1vza5gNqYAGUaA9V",
  "key9": "ZAQNxKzXWLRj9JSbYnmZnfXYLCjLAmcCDF2PNZsdpBPPN8sTFzZA1P5bTwMHbP7ADSMah1gnSjNqbxoeEJwsees",
  "key10": "zeGN1o3FNs2AqkQ1h6J5Cy3pTaGkSrA8fwdDfGfb7iwQAScvDaHeERdzUxayC1kiG81EcQ32dGSvR1YbqcSLc7n",
  "key11": "3kJrJUWobcm7nGj3E3byADrHzztRXzzcQpRE59poSipTaPwmmQ7DwsMmmAwjEZa5L2VFZ7zUNTkmG8s1JorGb3X4",
  "key12": "5jBKubsf9ouNFQPZbHx1UVpfPTsaTWJWxJ9NWpZhnj7ktgsNcRoJeiA9xmmfSeuMgnvXRMjQuWbpUpXsXac72sHu",
  "key13": "5Kvjr3vx8FeDirP2UF5DQTNZ3iDjGFceq8mNK4yfoUTfC366WBeNv7win63VUUCBSf5qHVGfnDin4gTf4wbgoTas",
  "key14": "Ln1mkckFnG8BJNpEM5PJVgG9hzbRQ72VvGL6SQarAMNbwM9xC52bSqRrHFFdBcKHwWDXntpk2FVXbepdgARBC5F",
  "key15": "3LbKKHQUqvJTvNCoZLEvXcuQon7VcSBWThJUnEbN9nXnvh2ZL8z69BPS7tJzQPwv73JiFUK1pGfBm2xMuxJwMGv8",
  "key16": "xxGWw48x1t3KuDtkmXkrWae3658sh8jazhcbQqWEQ2heXa7DVfiyhFMqfDZfDrs3RaTSC21RAzZLCeDhBwdYPRg",
  "key17": "2qyChTn7RHAuCGFyNDeFhdQng5KkiT5eubtLDtAk75MQSt5bCqT6YCWBDp4UfV5dhFCm9YDBVZkSYRzS1UcPq7Md",
  "key18": "qEpTzUSf7PWN2nzE5J8qhCJhXrUW4jCcaaziDzN6bujQxkmkqCpkdyYM5Ux8rWKEqQEeoNapCowR9PtdttV1K8W",
  "key19": "5d7bXpffhtvJNryFgqZew9bWDyyCCdhXfX3urwSV85FS5hj75pAuaKTTrFKE47HrKt4wVEBZsTTWBb2bpRL2jKbb",
  "key20": "4vuC8WJzqd9ZKUGi5ZebY59G977y6uFfZy81mbGv6nhNpz8ZfwBt9jmuYDucZhJJrrEpVggjVHZFZjhJ3ekLdv7o",
  "key21": "5R82KmFzKMpyAF6ocdYq3h159zXTUavWzC2NhFhmBn4n47ojK5mMQxQTGY4h8VkdGoDeHoVhWUXM4KkFv5yuayxs",
  "key22": "55wUZCxyswaeSKLZdCq5pUxdfP4xvf2ArfiXEaUBMJD9ZcVA3D5oJrkmNtc6KsC78z9hdjduHtStyRfvqq3pTve4",
  "key23": "wWAVBaMTZ4YxTx6sFJ6UhuiYjqwRr8tbJ95Vssp4hMwMa3fwgShhBtHkSxxod8vLoNCcZEjKPWvZKYHexdj6RLG",
  "key24": "4hckUVgka8gxYfEuReQxdT2xsN8TtZWx3wzMogES1tVkMvmV2StoQvVR4thc1md9jpsh9PtTJtntRTgoXHEVyVqN",
  "key25": "3yrFZLVtpv8vgkn3xCWkZb2CB9BD5nzBAhrRxWef3JN8YzxHUhd5HiJkXZ6FnnuBLwVt1WxEkVK6DV789Be2hMTg",
  "key26": "3SW6ajppcCS691AdFScKZ53zpbqpepsFAKYC3wia9PX9tREFAt5YPR36LQ2QerEMKYjuRPLGeRpqaw5WS64LsHaE",
  "key27": "3mxpYYZzvdbjW3qkMYfESTbGwvGn7K3DvjvvJUiHXrGMTrk6PyoRRF6M4Lf4htrW2NfTZ79jv7SBjwPXzGsyCBw2",
  "key28": "5Eyaryg96uXmVMHrhpy1E3DRq3d4JcFNHKdtPV7Dptd6BQzKvUinhPK3Cwf5y4AUhdv3bBq1tu4hTUSrWnhTonuA",
  "key29": "3tWLxmCjQAom1m5NpnZqtsWUb4r71rVGi4bR4uGUkp7dvGMjFXveCGfPUFrPK3WGSrHsfR3AHUP3utRfnw6NsJNx",
  "key30": "4Wus63JxDMtvhqaWVxk6jKQstF9QeNWwNMX3K1iCM9es3gamhWpszYpj2cAqQtaWQH1jQT56nUzasGQqqEeqSrdF",
  "key31": "53ZPVZZWfGstkkZaXJ72wohsdgkP2WqDKxr8WGdAyhWYWQjLMCvVeoSETpMQkqooJfSz9vznt8UiYQpBwYyPge9h"
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

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
    "4Sk7cXzXJLmyET6tdpfZvhCjpkNGuK6BVqrXQCDGT5v6RQ5KvKzLaBhEUTnfxoeVDZ9Av1YE2y6Q2HpsdfF2WrQ5"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5JtQDL73t6yZB94EVorULHA76xjSH5t61GeRTtWcaZssNerB5yYLWk4nEUSn4eHm7Sd7W9gR9kAU2UtFCbm3a2Dg",
  "decoyKey1": "4C59i32ct73UzvLtK3m6qcbboP1HbYjRgbpAJWYjtWrLnLb6UgaSWQa4NpFWj7ps5wMG8mb1owVLYSb7GzM5j6Kq",
  "decoyKey2": "3Mt7N8ahGPSvNB5mKQNKNfZqfwRj8bBX4DppEpcEYsG7mT12CojW2DghhsphqTsKFm6XgtvkEyexMtgiXp4PRmZc",
  "decoyKey3": "p12Ya2otYQ2ea3u3iZDpvhpqydifxqv62mK858XMFDK1NgTds5PBw174Vb1VuoZr22ojBsH9Kivq7c3tgFp9w4R",
  "decoyKey4": "4B4ahxGeCJd3xBtnhBcpxmJjLjjcfp5iPRc5rpsNbMGjUUvLHvAYNwwUAjZLRDT8HDVDiebmGUYwH3XqSc1NjTEK",
  "decoyKey5": "5EEnYqbjsotoMMskup5z4fUcFWBC6JqZodx9Hthy1udmj56rRrQWCSALuiVTCxzMWKTaSH4CuBxjEdRCUGgMy7NX",
  "decoyKey6": "5TwropMc2DNJ5Z49pvKWNn4PYEikTtFSbQ7KP1HU7xzcwc7JbAwBRkRCjQXzebrcKGpgePqJp2LYoD1ZFdUFUvPc",
  "decoyKey7": "33UDX1vo9XpruRrH8mFcAu4za5uYk8yQmFmkXGewReYWrhzLUHPQR8gRPAvskb9fcwyNjFCyfzKLBiVPqwSpwoiJ",
  "decoyKey8": "3BEH6ymMbbqcMRWKQTySLPYB6DwWfyhc5CavaEUXU2AX4v8NLQLCpQVNbKit6F6TRuRwWxoJP3Pk5T4FLhRbFikQ",
  "decoyKey9": "2i7XhLafTc8a1ocWc8WuYPVGwxw3LXtaKUzgKxUnSnwNUNUz68vTTXEzXd1FcyWKJYEotxdxPGSMCqxL1SPrV76P",
  "decoyKey10": "3gex2iPvknuB2wSpeQdNYozo5dLy214czzB3JHQc3VGGPfTNZarz3ZnDPoSNQ9bpefUKV7KjFKwQ9RdGMyZunXcB",
  "decoyKey11": "3ziwMwmAodxoDpu6tcX1kyrR4M85ZLKDwvdC6Weda1dKvV92StDWv5F5xHgUHMoS9sSx7p9Z1SGKuPD42xfVz7an",
  "decoyKey12": "F8pEjLhFQKEhfEw7HvtXwwsYpHu7DYL8nucmefMuiGepdUUzSLeW4T7R69Ax1MfBxk2GeobnDzQdQj47zMFMWRq",
  "decoyKey13": "634F2d4bdWC5CVqQje98mMkP5Xk14EoVbAg9DtahdsJ1pb1ygy2NQghmdkNYLvBUYyXNLCxE7hjfwrYo6XMo6gVZ",
  "decoyKey14": "r3QHhXXX4XsLGTrehBECuwXRyMsdL76rGXKqdPcnYR5LLcXczATipXkLGKKLRkx1A4UP3k2x2YVrBTjkLHYzSVA",
  "decoyKey15": "4xKjRyrsUjssqV5t9K6yyBzAp98UgZzf5Vru2pF4x2EwZmVmnizMxST15HTuM2qC1d4TfJRMZoRjV3YT3YNzLAD8",
  "decoyKey16": "3MJ5eeLHopCxExZmAGBBdNNSgDbwFbv47F58SH1emEjzpeW52s3q3B3QuPTKHNZx1iSLTHQAJGnCvZd8NgLeCkkq",
  "decoyKey17": "53urBVfwhEQfamV9C5UF5AB9zMJTLw6D5dJrPXPjqsEoxFf49P6W2zAEZaEiDpgNeQDS3ntd5saJpv9vaRaM6wU4",
  "decoyKey18": "5oZAGN4pgjCfUMjBkVSQLCGnr9E6UuzYarAxctYjCKL2LF57692XTS8QT8e7sQEpbcWNu7TFnfZJqfdMPnXXGjCs",
  "decoyKey19": "AAqi6y1wJUMBKaAx8wBdk1etF7Bfjm7XcpLQhSHprwwyVMDMCySpikZ231CsXab3Lx4ZGEF9kmXe6LKtEfhANwm",
  "decoyKey20": "53jkxXpLXLpnPEqqYjzsQUhXdVuZPJcNEo3YP2Udj9GhTtPiB54W6F7hJejwD2Cs7srnXKcKsBHFYpNzdWBD3pu1",
  "decoyKey21": "5yGVJhLd85GXKQNyrszqUmFKTy4d7Dxhr55TJUaPkF67RrpReSNqdRC84rjXvAyAhS6CXjKqYdr2ps1yAMZZ9q7K",
  "decoyKey22": "5zXRxKmtPfmvYUCopdgW7VhEi96Vufe55MRueHbrmm7Nrtg3VERdChzf75WeDnVGvYRiuBtRpF2YgoPsqgDFxhG5",
  "decoyKey23": "5ugAN256uRV2YmqZZo5Qr9Ki3N2MmaihmFApgVf54Att11MZNzSR5ypGpAtVzXHp9uVj1sn59U2GV2qif6XgYv1Y",
  "decoyKey24": "2owGN8t9Gr6Y9qeAJsx5rT9mdAXZgGAbRq6ckjuW12stvf31N13CCnxsRhXqUBAfHNKbQ6KmzUcqvucyvVKe31x7",
  "decoyKey25": "Kft4LTBA8bLdmRec37yfgNiYP6uFiHth5uV2K3egyyz88emGqbrCs5hK6LDNMrqHfBU4k8rz97d39fDjpSSCARs",
  "decoyKey26": "3QhW6aZoD4G6tLyR112iiivcLJ1vbf6CJAErXzTDuY4qTapqJJDcgzhxMzCXtypWsLxQmxX5SXXPvZHFdHm1ubgQ",
  "decoyKey27": "4NAHFKGW54Y6sHftWbbcA3PmW3bBx3mQxxCXGDwyc4qCYYGFzJy72BxsuAQsqPcDEeWTvuihxNDG9kjhA1B7zVue",
  "decoyKey28": "3bxzsvig3QjRqxcciaXKbP6AWGZCnDGPB9Ze1m4w7KB2m6f13mv5Tw4BR9yspbbpzuwsADw1eTZsdWRCZqnsu3Ms",
  "decoyKey29": "3vyTwzSwZs5J2tyBuCBSQGT9bZ6WoDiwvCUYFksARdDsrJdCWXpqTCPJfKaq54yTVx1c7G3JGFcLcQLcmNkXFjsN",
  "decoyKey30": "4kTuzms91G7qgmoeUGEVt63cVDsZAoEfyyQBAuNvrv72z16qujfh6Xkhk966ayD6uKXoDt8PfzgoHyDkdG4Yipg8",
  "decoyKey31": "uWE5FZyJTUKY9eCxt1tsywctTjY8Pb5i9epy4nFWAbuCifBi7Yzq9daMwKByBnVqYLxhVSn2KDmyGpjuSsfVhKv",
  "decoyKey32": "3AyLTo8CE5EtYWZ4g7arg38ppHtLbJpcMoqExq4fMTRrMAZ7aEMPppDdoCJYR8QZwF535HFznsR3QRs69WUnvPtM",
  "decoyKey33": "5nqarFSw24Dvt8pYdGkKtyXJPNWabHujbTg3JYGMASqTxXYCKcBKAwDEiixckrQEyJdVypBmjmTeB5WUwGgBim2W",
  "decoyKey34": "4UVxUmQ5HWe9mqm9PVGLhXDjEihVyBV3h9S4Tr9gHqGCqBSaVHiXrrUxzWhmLmVgSRt1T8WBKHuSGQGXkb4kWz1r",
  "decoyKey35": "24wzm64MVTfTmS78ZqDqpBPAwCmD5TK5uu8Uzd9JCBAi9JVmbvdPgjdJwGcQArr5w8tzgCiAQQ4ayxheJpgUSJGo",
  "decoyKey36": "4GNnQoQdUsttcCp5JaaS8xCZPt3C5S7RVVxHmjLp9nZCrynZJskJ8tNWVDP6gUR7fXboviAErr3osmjRg4nXPucd",
  "decoyKey37": "54b4KV4s7zeRx3wH84hLPsHW2QEv9ErRTK5K1WSQLVcQrr6mj6KByGiB3jeedSL5Lk22FdJ1PDYBuRe31vvwk2xa",
  "decoyKey38": "mdhVsq1Ep2bjJm2HVFL6xxf2g2WGc1u5VT7mnCEwZwqD3XQycTgpoQ9u5qBf7mFre6UN82JqW8ncsJCzmXMUxP6",
  "decoyKey39": "3K9CpXoeRkBMgismNQSKcHSgprebw1bsoqxYGSh87HRbTBb3LbQry6Yv93zzGxHVyK52J8u2gannCkoM16rMsmT7",
  "decoyKey40": "2z5uZTmcD8kMtPzWLeHXbGBTdvmS6A6fgXLAmXbQQegqsri8MXagdLG6PdzyVbW2HEtiaKL1ctmoZnLprLJWj3CN",
  "decoyKey41": "ZodpsHTQZSFJpicRpAieZhNYvakZq8JdWq4f9H6xXkyBTrhRub1gMnLsEHRqQJ6w8Nh9pA7WpUFfgPhjVxGTaRv",
  "decoyKey42": "o4KRD8vkAwZz44KHsSf1RiiW5fyfb6WcX1AqSnW1gq6vu4TAqZ6SreX1DKNLFN75peWSEgkzjM8b1z6Njtxnkjd"
};
// DECOY_KEYS_END
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
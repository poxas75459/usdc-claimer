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
    "3pgw3hKHguegADEkrSR1TJGYxVjPkiuSi8W3eN5eQdHkZQyeCp28LqrrtedLn1QnDzTyxDm2raAXbaX7NJytC5vv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51fz2sNt28GoDamWxH4A2HuowZUpq8kiLNtFP5zz3BG1LHtkJGC2dWS6c4iDxDkwyGBSGLpJfw6hv8PbeXjRrAwx",
  "key1": "2HwTBMfKePaUNxCfaP4MzHobokBtAUVeZ9c7CzawPhjfKonUoAJczM5qtCjN1huco8Qc62qbbrJcvecKPoo1tLH4",
  "key2": "5wdqM5ifC6VL6kdq6QSq6NmXf2d6zJBwzAmPvvDRs9dSUAqLeoLgZZZXqkKDLhJM3cL1PPtnCwvwTbTvJkZ7CRLp",
  "key3": "5uDikW95LnD7p4ewmEnZgh2C5waPpi7t2f7z1NJtHJzx7Y4keSLLQ2HpLn5BbXamLSkNJb4GYr7z16uLF2k2h35C",
  "key4": "123nygh8nC7ixW3wzbvpFuXbNjqmJCmHkV3stXiRgj5Gw3dLZcpNPfM6UGcZavN8M1FMU4M6k88TbuMoGXQtLoQP",
  "key5": "wXidq43aGfzL1e7ZjZeKs9erL7aM5K7VnSWSsQ75uoBTgg268iVFWpY5EDkShyfYQakV9RA8qtG2noFY1PWaJFG",
  "key6": "4wSUangSMGBitW3XNjPLHfZu6qTjWqYfFxtV5wuAHfoX5SE1x8GeLq4q5wBfGD5RDRcrqTEp2gRkvDXPRugLN3zb",
  "key7": "3fQDWnP3NeYjBD8dHTYnT5hibKoJsCuks2SGP34iUeYc8SoczXt19h2dom3LLvRsHJDXiXmfzdV8e6JVGqu4r25J",
  "key8": "5WDMkFewezWfL66SPtfo5ZshJReYqD83J1skGMTZfWGDJEXjw2BX6DG5pr4XcywFszJgfJKwNEegHbCwmZ5N5ywy",
  "key9": "2rAdZDzWM7a9gpmP6foy8dH2FFqGEwYcfe4CVmsNzgoKZj8GCrPPCXku8zjqJA6dnNu2hXTfaZ1JziKBanv2f961",
  "key10": "PAw3991e4UUoyGkasCLAnq7qyhJUNetduD9WeyM88UzKfAqagca9kUJsfe4qUyNid1xfnCKxJVuEDM9Rpa8oZma",
  "key11": "3mhwg5N51tCavdxw2fJaK17aYnicaUWKk2sHJ264VPYPaqHK2XMrzMvV9fPEZNCF8YtdPVF7vACFvWtmhAnUT6Vy",
  "key12": "2ijxiwa7g9DwSGqqdiHnXtkEjPiTYNnSiTbua4TBJmqbcwxoZvZtnz9G56FiNZPgL3XRAQQdWPYm1nEH83tFzSfo",
  "key13": "6fXNo2KDZkiPoye1LfZBSbN989gQZoTVDnLR3DRjDS5mWMAtbcee7c5wrpMQr1UZLF2DPaSJVLu2dpv3fZ2tntN",
  "key14": "2nZikq13TAng7kkutHRnGyQccirSMDPSJuhcsa7EN27nxDPTRiwbswgpzcrG6b5MADWzevs8UDQ96CitFj5X5pqn",
  "key15": "4PoPbLoBxwRajnh65zZE2gQcrx4xCvEF9o645b5vsJxS9Yzo6qzKZH6sHXK9u9LnH2vo7zMupE28cBvWLYo7ummm",
  "key16": "4BFd8Rm8fE57MZhLeA5ZcTjfBWW9KyrVowZTVQRDU4g8CF4paeHbkDNLFYkFGPkvjTapz6eQgDPiE619rkfsT5Ka",
  "key17": "2bEgHrCzkD7aVCvEqmKVLgLwAQwH57PWrj19CBcuhZSrFEaHf1qSDKqJjBq8ij5SufK94bGebgf8VMdQkVLJSiH6",
  "key18": "2ge7BS7Y4HH5pfTBEWdsmimgbF2HW2J65NhSSakcCstXktdzcrBzynZGZGpiSNtMApAY89UsdUqhaLGpvyybWHSw",
  "key19": "X2U6tNqZcwGLmDdtDFLu7QZYy18h69YuatjrJqsazcdM538LoiL6qNqYT9k7StoZBTeRoUhPG5QFnk8j8eXMRdd",
  "key20": "4RbWpWX1qQ3mmo2taEHkMyamijHCEB2vVGnmJHMTxM2g6WjJ1B9Kko2GCQEQSK9cGHtkwCrgCbwpgyrpNqde1z35",
  "key21": "4WgAyM1ykgp57MjzzhKXfGxZ3prfbmAabobMUa6gt28AX9HWUzyd7obWVttmCuyELhs9nCwwthn6j32A9ccLmEK3",
  "key22": "4hpMuCZ4bX1KdUr6k49o6XVb5PmXbNm97snjHoQYunSu5caJocgGgeU2QAZg8QBBc3yuYbwRiBCKtSsEcSEmSbwC",
  "key23": "X33FebnQGeJtQaqKuNUiJrkFkzyHVpAq3y5vEPgT8rMfExL5isEGkozVjfEvAG5XpY84RAr5tAHWJwy86Gw1Fxu",
  "key24": "D95QbGyxazvhoNHxZSG8DXippZEumLCWMULKNSspSE1WxNhMBQfrybih4hpHZTVtckrmYPYS3JkskycM6zEWr8i",
  "key25": "2RyAizPhwWBsCiFnz2wNsHT3eui5cv3SEiGNgjdsbtNdxGyA5gqaqXL37RGUqeAqnSLa3zKxGH2tL3JXTbespa4b",
  "key26": "4AwFurEEZP7WHSZUr87qNPh7GBTGJDkNW6stCbAE6FRpfRSFZVZVLDgfupSH4Cz6Pqzgbe8KAKuZW46MNKReH7h3",
  "key27": "Yem3PVX6yHt5x8zdRrzUh2uJZMbhiBCybiwZXaXLH1DVhn9HHo1tfxF2q5TVww2Vjumz3GFhivhFeCrqzGjx5Nv",
  "key28": "2PtoT1Wsw3pkvEAegFka2AzCoDYqunxb72TfKKcwK8TCmRTpWtTx6d6AB9HfvDWsCxWigutKjefdSPdsPmjeEayd",
  "key29": "oqqVD86JAvBvNMAfyDENw2MBaeFfRUkqXTKiidY3mgq7FXYDVTFpxYKn6sxg9PXnjaTTZJ2LBYdv6UC4uGWkqGB",
  "key30": "4F3SH3nR8T2oo7tWnSiH3iMKv5TQu9Be22u9c7cPwQomcvz4MVs1PBBn5FPxBurVgspsv7w8VZwBxSqLMYiBNDrD",
  "key31": "DxZmBRYsDPu1qHyMbKRBD6wCCxEcawUdgCnzdv4g8CFjvCFcyASuxhdeAk6ZeYWaXfECNSdeEanQyMDskXSitqy",
  "key32": "4mR5bvcdq8KsXFhysS154wwLQtkSwKdo3kcShgRwWVScpUn48sZUbPXiHBW6ehasvvKyZhj2px2b4XdvAbm2XPQp",
  "key33": "R2sSj1PH3PsADhn3m1Z9zsiPfEpo5Nic1HjTJPx93z7iXR1dFJmps7DbbJsfHmCN2R6NE3KgiAucsRjtLQ9C6C1",
  "key34": "2gj3e3uqux25b6EKG9Wn1qmLQW3kBfkefMtKZS5fMJHPagnw2tvrkCbPugauDa83HUqvTwEFu7iDqP7G8MVVu4iD",
  "key35": "GZB5fNKEbSNgpeVgn9hfYAKpVqWnngiUxZGUD233jqiYWe3HTsHqNyGHJBW6AfrPEPK3rgvaQ9mDX3JnnA8b8hh",
  "key36": "3rwCrpTrdxvnSoMDpGaThVZapAgHncQXLmNu6gLDBmvKHthC9gbf8siiBgMQkGaQpZMAyQLTUg4jLnTtmTQLN9zR",
  "key37": "3PtCyWtHKes6KSMJ7GYwzaCtKXTzPq77hKyg6Pn29bWnZxytuToxGAr4SD9ikxpd2SR2UeBhoq7oY1rhbkT1DWp6",
  "key38": "4Qv4CWwj9RPxBkZSWZWwdiu9gtUeUoRGFSG6Xev6L4FzG4ojqL1fDhCd4EU5XiCdi38x1E75nnE8f1pkatYR8Vhp",
  "key39": "4ffozxY3e239rQGRnAZ2yDeoXPhBXGYrRgkCPhjgzrYWx8B4jd9SatYgsWuNBSiJQXtCLaT2vVoxwJuDgq5FnoEL",
  "key40": "5bX5rE7XCAVFHxsEcrPo1NzNU7CyKD8Thf7vuu8BpGG9wLojXaXsj23iEfTYNYQnt5QnsGo8jKMNswaVc92XD2S2"
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

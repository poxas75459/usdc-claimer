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
    "2EYAhpM5WoYgbDDyZ2Mhjk4TPjUkE9pckNxXPqfZFKsX6VXWincM6PLJgR2bF8XxnnXXg3ZabgJmD8ShhrMVX28y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZnVDiGGijF33Dv3iUv9m7uoiibbNMi2ntSRmHmdHVgzEGuGm2vbs3mb4jMZ5uRXgY4sUBsUkSXPG3kgMxLUnrv",
  "key1": "3RZPQFCND5Str78JSrLo1HAmpPJpdVfoAHsqmhahn8jq1TrHWCuq4h3SR2VtEws9WYPhVJRgNfgE3kTmWaBTnzxi",
  "key2": "4RHtKmg8g6ajPYQi7Jt1GPs3LKSwY37oLVUx2PkYnem7kMTRY7nvRvL3PUqKCeyJaNVjQPvtdFxCg2zB6SJpQMpo",
  "key3": "4hCLiogivYHxQPEfEzAndgXFc67WJWo6vhTcKyJvbVTNBj6qgqEfczznya8MUqtEtTwaTt8nuexMBiTGagpyA4as",
  "key4": "2Cha7L7V1YjP4kztHb7AYUjM3DXWBFKbVVzxdGqTRRksT7omUQjEUELxtEa9mwhKkJ1AG7FN8Qd5JbeVjSarUeMv",
  "key5": "5ZD5xf543BfTa3mwDQzHZyHWs5Cu3cs6h2G2W8gaJibJNTX4MTqw9mBkHqiYZZavJSpB7hsFmXjrNrHm9ExDdXgg",
  "key6": "MMxQpWns2PJiigxMdkzmFws3HfJ35gfF2hvJCM4kGBNWkLmtFboa2kuLqWhVfnCRvMWT6BzQPWA1ZeULxqwwbJr",
  "key7": "3hYfQW2r8w2kUGhc65i3dLfkytPBgtYdqnnmQi8F9ogbR6GkWDknhWCfTUDPAcD7bixzBXE6ixKAydRLNu5LeBGe",
  "key8": "5KuGLJz1mqKKH7BAVBmsueRASrJQJQf6MW2uBwUqb61ftJCfPsn5RppgPNY7PxH21TsGRfQHvHG7ryaY4iqfq4x9",
  "key9": "5Tc2ubY3Mv8E1yEsYFdpDm18jsNkhbjXanqK3TFVe8uVMUq9ZWdx8tbmPYNtdHdzzNkrRjNyHkPrqqCSyvEHnJaW",
  "key10": "5zK83D9UdXfejN6gRtiSPUhsiCFWY4Xca4UkZNAKZVZ4nE8r22VswgAdNBJNkui1EoZ6xoghZinCAC8zqnQ5im1z",
  "key11": "2DJsaj9KpjC8BykLNLAjjWLQ2AtbBZsQwiBKYUDesiezqXPAg7DDQwubkA5ioExoGpqvQTUSaY4A6sCaSB2y3g1U",
  "key12": "5VV4xbqaEFShT2T1JfSERetbcnvCSvsRpg7xmiR5DmShfN6VaWWNbSMoLgBWn9stR5RBSmRWm1T4xvQsu2Vgxt3a",
  "key13": "3xMRFHxJ1eZu7AaBYG4sW96s2yHqhsEBH5gmBtyKm1dVttpNpC4u7M4PHxSKgRvjd1P8MTCc5Eyi8aktybuDqdfv",
  "key14": "3Eg5nNNoniU57nYDqrWimrwRcE7Pk5ssJx2R3wDZbj5i5khz6iaBP83xvRAAWoiBpBWL9ZywzzwFu3npuKwQjx7d",
  "key15": "2WBSAstzseriQhLUUu6gkLCMHy6AuYKxjoDtL3c9GkN1LsCXBcVokWD5pG3z7JGbBjy8qBuF993V3u5M6fD37Tbk",
  "key16": "2F6hXiSj8sotBBTJMmtQgQsWR79tcBXhB3GV67tFAfkEgouWeCSQYMjAMH27CBb8vMKddZw7F6v2NmnBaAdZGo1Z",
  "key17": "3kg5A1zaYxf7RGYr3EPC33wYotAkXcwukzBLaph93TuaumKHUjb3JWW3iAVRA5uBNojhZBqa4EgL6qbYtfwvwyd3",
  "key18": "d99jQriivFQ4XLabp6hKvfNR21pTkfyt7P8cUpxdQGn7sYHjt8vuWv1eq5X9aGDjQDD48X3ThtJMpVs55WU5hd7",
  "key19": "BY1GYiR6Zr5ZKkNV3VeyrTZGF6iiP4cbSmW8PW26e49k1rgVVPVpRvtiWu88ovzvnyYyTGuVPyT64rmYewqgxzq",
  "key20": "2ebpYYATn8L3rD7AZNLRqDTqP19hymUrzLEG88V9Q3pQaXRGF69yMVZ9ovtJJgePa5KXeQJgbRs1VhxjXR6VkFXJ",
  "key21": "3RdbuGse8WuSA5khL5A2rcSx3v7qWo1NXag9ZLmSzS8CPtMTp2kLmyP2oZu8YvBNPBCWtfMFeMCCnBdr7VLwHJAt",
  "key22": "38HrS73nSJEe5ykG1hGtBjCzMbq6CbYywfej571Rh8b2xbQPdsbrJNiai4iFphg2tVFN1EJpNhMDTPR92j12SUKm",
  "key23": "3bDrJQVgasCGu7YEH7WqdiqKbqewEn6G4ikfQ3qGMG6PEbmEC3cRrsXvZosuTXHBkNiMS4NJ38GpbeZHDumnwd2a",
  "key24": "4uX8w5BKKqB2GYHUv54ftTm7cocLpXZSn7sEmUqx3ZReJavPApe4DwV3PXLJ6avrXKWWh5VSRrRGS4gxzneFkx6K",
  "key25": "3N6BcGTeTwUFyMPiSdh3L1sWpioYta1fHbHzKndxpzBG7NtbAg4KcvsXZrmLakqYqZPgvuK9iXZCgT64po2f7njq",
  "key26": "auMSxrDQu3MarRpKCNM39fMshy9JxGY7xUy5LPgcz4dZ82Ci6CdmKE9hsBp2HD8yoUJyNqPR2yvQ1hcCtbK1mjD",
  "key27": "5CueiVUjagQBH5dPBBBZkGBbiwri7MvruT3vhfmW6AKgyUhNcggfUQzoVNSXVyPs9GvbmDoptSDbipV4idoNmb5y",
  "key28": "614eJotyEb3N4Ehjx5vi5FLpeUDHmmLptCMXdwVG3NsoyP3b6Q5st92KeXEF5C8RhaSh6oMnsNoAUVWWAkfhsHFE",
  "key29": "3R1kcXsqFFsBkkGrDEMmStBJfUEroP1njSCHn781pD47itpnzSG5iCRfc9wJCLxCZCU1TDgnBJMqABayHS6wChDg",
  "key30": "213LGbqebGEAHTaJwt1HRRHQmrQFHxEi3QyEeHggXcK9MK7T432T1PRFMn7xAkhyKJcJBDmtgVZBw2m4pNRwUJhe",
  "key31": "2fTs2jEjqSViYupAMoWUVjDYHsG1yX8Jojg7A5rgP1jMofNP4uQsd4dJWYceTAAfFGtKdGNKk3ToTGCnkUQL72mP",
  "key32": "5Mo4EZEw1jo1EyR2wKPDBJEfDDuELjLNFnX6nCTCzfx4Cibgdc1jRvoi6e99dwgkxWLq7fui7rSXUrXDHrfnad1M",
  "key33": "4f4ZTbuAKJLChHoXypPgrrsa4cconVNNGNsrR7hAH7Ex6Z3UuifHZbjJJygVDbGJhkonzmgNaN8oyeeQJs4K6SdC",
  "key34": "ZttWadev5unc8ehGXNoh3CRSghCUEBBxrbf2RpJmwFKsS8omgX6YBFASbi745teFWan85aabpAR1AwdUxDM4JX1",
  "key35": "2CLp87jR1KaeXmpr48JekaQKzVTFinqbpR9dfZVHvt5hLLeL8mg3YdafPbv6Eb8XUEx6HaVh85MXGxHSMNquCNq3",
  "key36": "4aEzJZGoyqfmiEekdVTvfx53iF1gcpqGMma4kY6KdBMVmP1fNfCCnE8787qaLzV9keQXwfy6X6DxQTGz53LNpTRz",
  "key37": "arXW4cWnM3FKA2ARUyrsBfaPQjPkFR1R1T6Tffebdut84kL4R4632VtBRJViKb6S12vACEgMPvy3Hw77UXbp8tF",
  "key38": "5AkHFxbPTFuQsaYt7aUqKrWfmx2VxHSrjiNHDuCdaKcr6PTku3hBETdRKAV1ekYdNMbNtBhfWuAsDGwG5eyUPtE9",
  "key39": "2aaA4e8xTshn9RfDQEzjbQjW6Bp24BKLGkR4yhpo8E3RRFkYPP7dZEDFrELFFhNZ6ZMtxnajbs4Uavxx3wwo4Xkk"
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

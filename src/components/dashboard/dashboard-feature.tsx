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
    "2oikHax8z7iJBmd56FF2iqZsj2DPekJ5XUYjH4y8qgSxtcKuq9zWF87LjRz2fr68PFr4YuvhdebNXW4tdN6rmRii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wMqiqb3KBJZUe9M86XSABnDa7wWikFGNaJjd1G7FMF4siBujy8pqRT9PXiPUouM58sGHUoDAaCg21ykmQJ3au1U",
  "key1": "PeW7FHzsbQ2yk4TiM3uBSLHeawCjNCBt296zYXJWy2qwnetC8Diu1MjPWbnHETZ9tEZTFQoTfT9djWiygK3aUWu",
  "key2": "JwAmH7F16y24MWSwNBwswADp56yxb45p1i9XMdoUc9t732okwXZ2n1pdABgu8kM3jogVi6hF68c17fmTzwN1pDq",
  "key3": "4MUMpeZJ6qTbjk6gGdYCkRxb1ax4nCb9NS1g4U9BRAWJkDPM7jKrTCmMSaiBvLSw9hMrpuLDxj4hqhZbLA9dKgWQ",
  "key4": "4oeuVWcCXGCSpzzjZz6YgEF3DfgVa9JVTM55nDUBbsHmC1S7Pcg2hjoyWBSFXiWVcj7SoQNBH8LA3tajB1jE3QYP",
  "key5": "4NT6UgMbhBQ4BcD9RjEVdqEarbtZhkxN8xeNGqnFPTbs21TADiaQgK9FdaKBm6matLUdckna6HEbNR1J9kt2gSZw",
  "key6": "5Tb1YADN2zeZoVqs3qrhZ6wmz5iGKEJpSCdTC5eW2FnyYcLbeXm86op27hpduBWWu3rUKraD6go28Yv4gR6C1pRH",
  "key7": "at5Fk8yd5wUACbZq1J6W8kuALZgMGUhu5YC73br3gT132QcoWMnJoy8T7qgqNipcjsAEoeE7ShVKP6v1WUhAiCv",
  "key8": "2h2zH86GyVUgPpx1xhQBJzg5XuS798QkwJMJ2BMgpVhpYEKYiJhD2rRQkR5jj4LEpNtfdKukKior4vpsJX2CHRv",
  "key9": "3bWHvofJ4jCPwVnhrbbDTq4vthRbKvBVndwWDjpKvo1rDVdrUjHxFwBA7AQ68FLEecuubQxBUweQbJWK9twaYE5T",
  "key10": "5UEWvR1vmQBHy1smELtBTt517GvtXWdWPoWpZTFB8ZCAJUMXtzPH5jvt9Cdjrtc3VUKQAgFZ2nZBrgt62wdLFjJM",
  "key11": "ThUrLydZfpMGZaLh4gA7NBgx3MNnxKWAy47HErxshWFp5rj7q5ue6VkY1QFitjz3RS17Pg4xqbVT6wNZNK3scZY",
  "key12": "24yWGT3MNQe7Eg92Y7hkM1kSb8KpZmGqpmyPL49f7ZAD4fV7S1F3bk8p1612QyvQo6QNieBzfW78Mf12Dvordtm5",
  "key13": "2kQMeELPxZNZwXLrMEVWtcnBqPDtoLbQwDDHkygxDmJFk1zDLhfm3Dz6kJXR3E7W3f2fVTWuDTgTVDih9g7DB6bS",
  "key14": "2qoiJy27FXRznFP1yvvtDopVywpLnrqFYKBEvJ4XyMKUoN9VNYbybUCLR3PrgZtA8VMQgd1RiuBAnsDiWChLRWct",
  "key15": "2G36mTPA2vZqCRRnVq9CxRQedLuRbeCi7hLxAYS6dZP2xJX6n2U4LkcoacRpZAb6VCugKxmJfKLu9HP9BURQ32vz",
  "key16": "5aDmtc3GuxPfmZoZDHKubFn99Ufv63gKCpL1CPqYLLJtDzygdDUv7jebdm1cLzHrasm4LBxghbK9AaaEgnLXqdsT",
  "key17": "4jMGALZGMdxhr6niXmqWCZuJrkdcQXFmMNhW7YcycbQwZrGXzQ98xFCm9MTMj33VX6uL3wwhgzoucfiWFNCHKJuz",
  "key18": "4gAAaWetmwZJjdmj5CMp51ciLEchE8bDZUWgTGJjF5EpC5D7saNog5AVUkGPGZf4Ft16JKTgG4BqRuAq8pJ3UXg3",
  "key19": "5MQHE51t2UHR2TE7VwGWVeVRHabbDgdAYCiDAD6jZacEw6tHeavsfGpMPYdqgH7bYpgBbHwWraCV6WUe7B5SueDS",
  "key20": "5B5wLWaS9nUov8c2Bj4mAfEAE8oAP6MD6Jd5biaqkhuQWFZsXN4Hw1xYRMh6dKLaBYWkAfyo1xqGVgZHLWn9TMH5",
  "key21": "oSdnKGSjcXTTwjufPScY6Y9hfGxhn59ZkCqKhjUXoqsoTmzsjw9uyxWQ8kMCkE6cJU4KuhxWNFeypGZkAdJztM1",
  "key22": "5vLhbz6thXabzRGcv2q9wcCNsk2k8wpChNUM3uCtueyPo9t1RutuUkWYWXK7EmPgGFrxaSQtj2HCLqkwiPFhLxNi",
  "key23": "5QFPimXa3t1XhK7UEVboHtZuJQ4p2vKSi9dvV6dBA2SmCdyZF49JWicmLijj95zhNJkHEdSVeconMdAVPHKoegqF",
  "key24": "2dqS9cWsyGE61ACyro7YhEhkfpNKmfyVfox7JMKHfG8owKCxg1tHRrHDW74GMS5Y4edMkZ1bf9vHenpiNvcsNCf9",
  "key25": "3ks5k3yf8G7D8TxxRCyxTxmv2kySN89BWfmetSEueRXReeX3zYo6bLTabihMP8P4qhjHMHZH3sYSdTfCmwpuzUwA",
  "key26": "5SgsVMKBruFYFHDiGVhrDsRXwebwuFukorvVVoWS1ELdFEvGug8x1ddK7dvFbLNR6Lm4NsB3uQqfwwboKT8dmMoL",
  "key27": "5in4M4snsAHfQmmvmVaY5g642RuHAHdhUjyeKEYU2SnWgPzKuk3GQREnu5UfX5j1QF3aRTN26j5jMi47LD6K6HRM",
  "key28": "32P7cTx3zX3vG3g14EfLGUGzDsDctCF4GQfknSLvA3MWBYMCyUSzDATsCUC2bRvMEpvGS37SoCrrz5echjRfJmbR",
  "key29": "uvn8d1R2o73V67xFuMFM6frg56sVjuFSApomoy81aHRh8pbs4bTJW1f6frbJA2pnFT9fLygEkuHwdtt95u9YDHe",
  "key30": "4Qz7NXAEfNo63BUoN13CRtfsqp6qJuSD4H3N2DEnptp3RX2wxB7gWi1UF9H9KutaqQmqvdED1Sj2tm5LgvXaLwde",
  "key31": "4SwB2muxGXQGT9nz6ZhegzHrpSCTSdeNjadXCeqSdC6ZsZi6BHSSwk19CPAZB145tpoGJGtAhguAnTGH3NNDrYf8",
  "key32": "5k3Pq4AW79u3ue6pviwhfMCKxGsscXEKyc1nPWVPiLERrzfZCmzfGFAK2nsXjzYJAwsuwwMwoN7dqv4W7wtwxNuY",
  "key33": "2K2jk86Lp2QPMjGT1dBsv24UKxU2YvjVoJYPqstThbbG8d5ib4GBGkbPfSYkEGo8rcP2pR5Pbt27FQbpfDtr76hG",
  "key34": "6F7dJraaE1G4ak9mZMLRFiYpzi3zyPeqxH3KnDwGiABFBiDt4TZYVqY1deBdwYj1awVqHwxTEssu1W9M1xKza9h",
  "key35": "4z7EEyzDRh1eqeLtAE82qZDyRNpQfHMz6NpMbpsWrNJjkWiGPfq5nnTL3kLEDrSw4wruQnAroiy63oBReRU4jRU8",
  "key36": "5eTKq1AoN7NNNpJ9GwPGAPdmF6XAAd4pNdv4VMLJ3GVZgQM1QhUX7ZxKi6sL3dKggBQxo3LHPG2HbcsTRzveMoWs",
  "key37": "8Nndzp1tfxrD3395svg2K9ksB51YyRcukCg322DfboUqkSnvjjuS84yzDhUXgEAwPkEPLX4oFhnAVb717voWboh",
  "key38": "3ANoJZCxFm4eDFouKpHyfVoWaeCD5kysuxEqsHPhcPTnRFxGt2FC29YNGHog5pq9Que3aH8NSjWmASMdheVY8MdW",
  "key39": "45cNzv1EkhVnhwUMH1uHqpjypGQUCfymoyePAiUahXipAcVsr98cxcKBbdL6t3zuiZmqDAFeUZyCUmKgsKkUBf1h",
  "key40": "2bNXpS3y69GLsG6KYvHE7i1vJxavNfjX9Apre9pyhukXLxwk1ES4XcmQDVFBXjmvpp1Yb4ReTjkBuUSbRo63cZKi",
  "key41": "5E5Hnj7dkLUsZyfVNJ8XuqEWK9pEKgErQj3beFWsMhKbPNf8u9dVt4cZeutap6FsCsgSUstoL6VfKWqpA3A2njn",
  "key42": "56Gg1VsdwxtpCBL4rL2fN95tRPnrk8r3ssqFeR5UZ1SiZKp98s4SpXV2YwzZvRXx8MDKxcNa1DNZjvkqbpWpVyfP",
  "key43": "569unjx7iFC46costvbKCPHn1eDKehuy8QzvQFVQXNaZS4kqR4hZ6ztnHHgs2YBycADFHL35Ni11bdmesBj696ES",
  "key44": "3tay48wevdQ7omQtpGk41ZiVNa1gpdEF95xSJJAJDBmTB75Z3wBKhnGp3a9GeVRScSHN6c2X7Zk4BoG6PX7GPaSE",
  "key45": "4es6pCcKbMY8AXMhcWcPGAGN9VMXcVNPRjX1jGFwab2FztpKGLxaFqJaHc8bj1hzaz3UjhXE3ZdP1494uDgGwbju",
  "key46": "28GTZAHvcf99rzjNemoa1ApZFPLjzanP36BSSZSro4GWtYrNbUKp2fhgmfP1zLpVUf3mZoM38sHdfR46NPNT1ngP",
  "key47": "4mkm11TAvY1t3ahFcD3GApjxQPp6BqrUkQ4eRAnEuCWh86kxNDsZbmeAhnvwtSPUqakwNEvkevDM32yfqRCfsdPq"
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

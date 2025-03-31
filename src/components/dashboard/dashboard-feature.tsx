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
    "2BQtG65pmXuUueFE5kVWVNRn1SvAKjLLKA9QghLHVr2vxn7m1PLy48qiZtibRcStJv5JLfgkmwCRXGd1aT3ir1Ze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27mW66Cr1To3HHzjvAs7MfeN2r8LhHBctbEowqwYKRrCjLwEbHujaRDZq4oHncZi4K9ufmLr1dZSoDiqzb5MuUJi",
  "key1": "52c2hnqDVCscc6PKyvVi9FTjVqYYZgfWM5V9FNanYU6mSPVpPRxKW6NFf2WpnChoF9gLzEXQASJfZryaAdtRjZuU",
  "key2": "BAZvKYxQ8qBCzvJa1d3921w96JgJGdCxQkKrSUoHeK79DAFTKKDcU1XysJd5ezFuQaTWKCJUYnLkfxvXVf3A75N",
  "key3": "5SSQe3XC8ohe1Sh4FpC7wbtLnUJ3uwqmZFon3aB64SJABgwJuTApTkawVXYLrkLsWwvgTd4dyWP9qzas5soPQDyb",
  "key4": "4tukrqjD8hPiZCDsDjqwoxozd6sK1S1fa9PhvPdxrsY35HPBx3NGfg9mKLkeqbr78k3KKe1REsbSM77VR2W7btwZ",
  "key5": "4i4oNScJy2pQduPKcXTUj1zrCqCcFgcbs5AVUtzQhzC8TMmrX1ghQwS3amExMTFsvU1CLmrozjEn4vqDdph2AVvQ",
  "key6": "5dhpoKu1x8LSMHrTFvBzCtwjYNPiJbgsCgPjqwLSwRvfkRN3sbfrJKDgMe9dKSEFpzmZx8KWhkQZZCK2w3W72bgd",
  "key7": "32WkeeBu8cdmEUAPycA8fsLcrHYCZHPpxsywUU4RFoef7mMgG9VFMGYT4Q4U84P9VM7GMLmzYFT1gXKgnThpWrRV",
  "key8": "22TYZXqEhnKnyNSttXZMfgfjVeuu7nDaMHjngyoAMWVW7mkUtkL1Ejgjme8NnFPMJiE4gtZitxY3dD6o5YoTT2ac",
  "key9": "Bq9XuCm5cDnstppRKGTCt8E7TpguHoecyvBN96JhYwPy4n7Bcxue7VjmvocV9Ab2zJQWs5RaqcDg4KUCHzEcUGL",
  "key10": "21nQg352e9G6NiomwUWWmDWgG9zi2tgE8j4F19giYoa5NzvsbH4ry1cEMGnXCU8SWzAeDQNTunaVMp42Qjj5ksk8",
  "key11": "3cCNvziZfAhbANyRi1uwcUTHjpgkk27srt9VPovhaoZq7G9iQE3DLqnYjxhNFDYH5DZh8fhsY8ge54BvLpJDZ6Bw",
  "key12": "5wqTNs9riSa2uaaNSNJcKFLbchRAnixgyjAokG7Uxouzfn2H4c2YYBpZcpeNRFp1VB8Y9WUQiLKqRVkHrvBEQW7W",
  "key13": "3uonVyjKiggGHSjkc3ELE3WmpoXPXC9kTFWY4PsV5i3W1dLcLhZDyYg9x4sM6Zy2RPgRCp87hz5kV5DmdcoDKKir",
  "key14": "5bKBUbBm3DacVrv11tL2mzLAcqDm75k6eFaVxtGVgV5C8jg9Lbc2nhidN17uxT6Yj9kfp6Q8AzQXjvBFXaPJnouJ",
  "key15": "Wr8iQm4YuqKcH2RvruZv1xbjr1swrKtSFVSK7UKqVnmCgD5HCtx1oXLWd5JEJZ6PZ1tVoxLhWm6QQVtbEmbh2Fu",
  "key16": "67ZphkxLd7pSSjg1LmXv8idk1NVYJeDYwUgTPbVJxDpXNCS5WWpy8hGMKizLcnMyDjpDB7wJLCanB1zR5aRPyCXa",
  "key17": "4gGvLDmLnwMsLnwa3drq4UC7RjBSrbmgc3aGmX2WtSDcEr8SnzxngLjCLwT5RaeMvMUYs6RhHicJmySkKZAemuRR",
  "key18": "5WcJnHSJsMEaDFAZxjFjsyyGwbMVVSJPCZbf2veWZX7vNg4LJ5MRqtPSUsckdYAPJvj1o5CDJyF2DojKhJNhRbgS",
  "key19": "5rxg5PjieziQz97D8idiJccZjPkDK5xeozvH3QySaX1ajiGtAyMmPJTBXRH3o1LrUpETpnF5V9QLawzQ8PGVisKD",
  "key20": "2kton9JW3H5s3LU7A5oBMmhuqhK512367J2xKcgaQ33sgbTM6JH1nME8RMxn3kecpqHq367DfaNFkCj9jMVXzPpd",
  "key21": "5PnhLgcenkpLtoZ8enVC1fe3iab1PF6NmtF2o6KnpMrstBWU1vsNBj1BwjLg7GZWK7ieadBxS8KDeyXkDxZYWyBC",
  "key22": "126xMpK9y6QeRrimJsN1Cy3DwZJxhLUomj5PHGaf5WqpDaabufJsYVpXGWxDPhnWzuHcMTfEzX9ahMzGCpyfJDvb",
  "key23": "2H2PsvkdpiVSU281KoposUGP5ytTSrXV8GgodRXF2mnb4y7JZNJeBRed3vhpRrdDo13RRmTVPSKSPkwjX7bNd4P",
  "key24": "2Dw8t3Fd9YghZ8DNwXAui6C1NWJihWRsSaYZkTxK8S6evYDAVy6rA92bUPWwwudZXPF4kk97eH3WDLfEzoYcAnYP",
  "key25": "5VyLhogH8Nyg42zFmBxQBDFFuwbQirMawSFMLvEft24jGMVmfzwA4f2zXQzvPGSYUa6NrsZyYj5Wv3oXw394FMvx",
  "key26": "5VXS1HwAX1poH2GRmKH21mmjRDoXnzNXDNNgkEJzPqmXYs3Ezikd3Pu6jrgnPTuFjkSBGdC9aJJcMBMjbyvqg3sr",
  "key27": "54S3mito19dAjaCPiQRPCghJhQKZZTJmE6DTTde4jL2t1yY5V5fYWupmJEjV8aVrepYoiyeKR89KR7FFrHq1XGSn",
  "key28": "3Sa71G4HCn18cDp7649cR1RMLgkTVLd3H3hN6cuPgnqiZbdSnYKuFobJBcQywLxbPtJXRqDsoYxYuAR3VPuBs55t",
  "key29": "3pZZSssuiLUXxevmXVkWfqEFKtVk31pThxmULJtYdqUuMBVe5hDVJDaocJPH4nTTQqqBsjedEQVV7QR5eEUpRBbw",
  "key30": "4bHMHvELHXx3YFX659RD77jbeNbkg4U7s1MGoHq7ixn7wDBFL4PAJxbh8LTQmRhUjaHkFZCVqT3vXojtmpnANQAD",
  "key31": "3dq5ZmZJ81cGtUeo8rqoQ2WghKmMbqekyaCpxmtsYBpGVuN44B1uQZUj4GrTDW9fDw1NrFScnaowa1TyhGqBS9Uy",
  "key32": "3qu7DA3WQ6zpZrjdR39LWLXhfVJEQs6DtZBpXdmVmPaJ4Mva8d8nee8KREqDFhVLzvK2kWMxaGqRzi4ZfyHqv9DZ",
  "key33": "2svbXu5HNUt9inrUq9CvdKjBpAdfFsLgVq2cYjYv2SKLRqJuCoGv2LGfComsdCFoWqC8pMZkyGcFVsd6wxSqPmE4",
  "key34": "2yuMHJf3CCyHVNoS1d4zbytK8GXac7KxXAi5FtwNbWn8BpCkprJyYKsf9rfH4M7oevB2iBKKfu94KP1rohGN4njK",
  "key35": "29HkRfi6pwHvAu3DDSqH3GrHBPTNi4DLABSDLFMom275AWXYBrCEcp4sskFPiAmvgxLKsLhqqkxa8wGmDVBerLvr",
  "key36": "2M6s6jV5JKEH2Sr5dUH9ETEekeYnmYESkVhPyYJejiL31TeY4KBztHUdogNrrjo5ZKHCD74wi1ZJoRdcv3SwxZoJ",
  "key37": "2ADSDYtzFoAawDAJiX1MDBkDoMy2HErVgB8pZKxuxv1xAntmBw9bQThJ7Fu11aKqGaNHcsWiRsH9DfquV3PFm9sP",
  "key38": "5p6iyEr6qNCX84WuDoqdwfU2V2rhoi8ksRcoTLwxi99pQt2353UpBzd4YRDcATJ5E1eUgFTvYbontosZAuFCKzVp",
  "key39": "27Ae23jM7aahxAiX85sZcPKdL4suWMrPngjCDYa8uXjjJ1JhYAFpEZ5mKV6jqCdeZ8e3gfRAcczSe4zLk6u348DZ",
  "key40": "hoNHs27WREJNovDUPpPVxc8y76f5QAAsR6QqqLw8ykSxi8cFztS9aoMPQm9bfKm5pW9WYUribAKxHVfbTAiSKx6",
  "key41": "3KZZFttD2EWTudywiPr4CdN7DQ5q1dHzRoYFv8KB1vNCDhRxMDJbdKvLkisiqZLfUBvruEh7LAp9WEKxibTXCDy2"
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

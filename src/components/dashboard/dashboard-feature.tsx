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
    "4nWd7ntpxEAnXA1UEXXRvyBvEVn6LoH5FSBGgVpLS7LepEyDrwCUEKr5HWikkdZrRniXUBg8tFbMBWm93eFw3efw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K6jH9E7bv2MT4Phj2xqgUE7y5fBjeDGZz67eceVuGk4PVyDkoeDRsWG4zpMrPNqVgA82R2EMJ1L188tHRPCBWBQ",
  "key1": "iXccEErLKbcaMAFEYrNHPNMHbxgzqUiBEGfYANhkvnQm66UoqfZXEXwzYkLHzZZSKaqyr3HZjRhx5EVBVE2keES",
  "key2": "3eN85FZk5Vpcs8XLEEUTzuQJTnyrsvf6Ay6mVXg5pbq3M7b6osXXMfsdBLnat2EZbo1VXDaek7UMwCjjCtKAPyvh",
  "key3": "4yjnTmFTBm7gznHcAha4AGzVt2aEurif1SiSVxrykPaPxWLkM3TceNnUdxi825QdwyvsxjJyjKYrwFscL5WHpA3T",
  "key4": "3XsafqfPhD7U5yRZ5n3hQD4xhmro6KLgPFQzPgcwcq4H9wkqrxLyCbUzUgopKDbjYtsyA6dPTZauMfY2y2bwF7WA",
  "key5": "4b6cQspuruK81TimdVXu5WhXyqYQ2nwdaJsvJFze1y7yBtkQrmTMpvgRqsuedDZtMwHsUEDe83a7BokDqZ15n1uu",
  "key6": "EEfExDSC6Jtj9wm8pvUCTcu8sS4SEYBxcFvPoFcdaDq7yWVhsfVeBQP8Hi8jBKi7KQww2nmZnzExqNu4KbsFtYc",
  "key7": "dEYRFm1yGiePZnwPKZ1HewuVKRCynC6GeZLPnavvQPikujS61oqdrsz14SS5LbaSZ9WxoWqgXweaq5771c6rrfR",
  "key8": "5iwk6q8ndxgnNEPGc3SahxFRqvKsQ3u4MXyk751xtbL1PUZs4kCkycDxLc8hbFCwXVZL5e6WsDgB9ucdfTHwBf6A",
  "key9": "3zvmpV2dDw3QMxQFSmQdMVjSSTYAiRsZBUpiicJNokBifHybZoyGELuae115ZGFxPUqC7Cp2rHSyWJYDYGeDocj5",
  "key10": "asdEQ2N5e5cMUAvEnYgFHb6PKYFjmMSSGBjiKWGJ17SrcSN8KZSZW3z1Zkce9Ere9bVqVsCUDyqUx1FXB51t3zj",
  "key11": "htsM2gTv9o1cZKH1dXHBWu3o5vfChrbj7cEztUrf5DXb3KiKvSQuvasKrQZoRL9Rx6jWT1NfddShdoEAoFbasHx",
  "key12": "5ekqGqUSfpgQdFZFx9aCWwCAcNgSPUxjhxQdq6vzGci5BFuGegYDL4CR4BeQ1wg8p48pDdvakR7jF4eU34SV35KX",
  "key13": "2JLpDTJ2F67AwB6YuMWQ1Vm9PqfvnAiW7debPZ8JSFBaiyxX14yjbE6hS6ycuTSMnwjqUErQbKWQdoKEmEQPXWza",
  "key14": "4X5dWkTuAHgrWHTzaHWic9WArh5LGcAzUUYwiYYNJKPkJCqVsxbfGmtfqPa2Nb92WWWh36oAoBV1adLVEKNgdPuG",
  "key15": "4hFgAw4bg2R7boPAAqWnR1V6F14K2oSM5fkzGopVcdaSq1RZGiporgPRB9Z8egYreXCQGyw28GZvihyXC78GZNrS",
  "key16": "2DBZXCpHc1PsCGtencsBEV16jKg8bZYrKVt5coKTXc3YDrBGAKwgurBURzgaGSMHNbpWdixv61BcP4K1aLEAhKzC",
  "key17": "3obzKtNyuKQEjpK583kw1qLDTkNTtdPnjj3aaWnid4JkPzuiyqsDaqKFPA4KFhwBMphqebcLNuDRBFSZpaKzagjy",
  "key18": "2R4oHZTJKXtgMPeQ61kw3CuG3NE2R4DMFmNL4kXPZ29ayU7LrewzZt4Kiubj2ADjAfw9e5xssgXXGMnkB8C1Tot4",
  "key19": "46WUSjC4JFsVbfSQi6sqXDSv8zv8c1XxyjZfgKZVhMrisnqxcdmK6xFmdPejV3TvH5b3ohdCd8NPvJnF6t4nMy63",
  "key20": "F73ErJcuXLe5R9QiBfdL4dtDe19vfyiuQ554NkWijy9aLnXgcqH8CLwaY4Vj2So3oXX4JAXqEXMKdJaAAM4gonA",
  "key21": "3ne11jtSGx6w9P89LxTWDWZVUkiXBFH4CYrvrKHxk6jonD7Jg6oXym7cPmdfbLezPfHszDL8TMeC2C7QQTADCZzk",
  "key22": "5xEdus2KBte1NVzmJLKVfcrbvceoB9SBfQ91pntxgrsgbeDZeRvQGwYGjRkBR3WEN817ytdrzYCY1h3RV7HRNZF2",
  "key23": "vp8JdSaVhwGfFBKtPnqXJDrUz3yrAxgmx99eMJ2Jnq5ZwFN2J7Ads9zE15rMdibjKGDCHgh92ayrRPkFoTNcDE7",
  "key24": "3RAVQ1cmSmDdLJwMs7J8gKFEVaxADSB21vuwT1C4FCeVWfdxSw7KZELL1et8n5ex56Rqv6gT3wT98DKD15jLZap",
  "key25": "4Rjzi1rYHEBXeE8Fmma6D9GjuF4hL4eRDBF2sZGTH8aEYipHGr7CvCMQAa5W5WzqqKFkfQd8x6XSKpUpZtthLih2",
  "key26": "eB8E7aj52EJ5hKVHR5TDwvrfauXVVmPvW5zWWe9SQorYtEMRhE1YSzSBETGZNEphQjoorbypNQCNvjAUw2kPqqo",
  "key27": "EDDfuB2TYKXd8AFgxAyGRH8W4wZN4JKspfgBNDLJoPDh8StXMFkKtfTy3833dDD5y8rD9efdPdnvwS3qNK3Fr5C",
  "key28": "3BFqe2A2qnddhhSUuPaPHFUfSpGXaK6twqwwrrhWXnB8Rmssd6rYrwoskgKJi5mYnTYvRSxxw4B5WV7kx4YotgVT",
  "key29": "5D8ttTELgPHWPjEqUgJgahU1JcBHkK3MRR5P5fkFhsrVtBRnH6UPtHd6mK3NdHCfMrVPPGd17cdDxhEUsp2arEDs",
  "key30": "3C9oeewZy3MyCn4tsqcwsyoro4Ca2PmQ7xAWxsiimhqDLUqxL8KHAsQBAMFCQ1UQy2HLaU7JgQ1rpmPNKAEZDcfs",
  "key31": "4a2L3atcEL8DiT7RMxbs7FfZgaQNGymA7RB93suMqrrv4mFoPxrtZ2UbFbEK85DgJermZqwHMzYxao1ioiKQm1Bn"
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

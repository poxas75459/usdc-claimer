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
    "35haiazeqtaKZffKmM8ZBVjxYf2PoPR45UpMGJD7weEJ3FgMBDmP8WpmJkPV7PmwmJLAvz2AH5K1XCegRGeJw2Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BB9nnnkLVDUNHQZjNwcjkVP1wgA7nmeDQsh46aYafWaWArdk72Z3EcikYxvGBbhRqK8Z1xUya5tk6W5NvuKZQjp",
  "key1": "5tHAMbGv5dpms3gp5SecSdzFBAhpszt6U4Am3976ySsHkW9WHcERhXW6VJXFwePnCyWuoDMvth4oaLsv2nu95519",
  "key2": "j7V9PUW85VSyZp8AhemAYQnS4sZo2JLhZWEmfDfKvt8AfBLZMq6asrqrjn9pEHSkZLvRCoTe1kTjzZAdYoC7RWX",
  "key3": "3v5egzZkwKp4im1meN6XTsmFweqbTs5pseNvLQ6RYR9fpFaD6e5UXrkPCvpsQ1NWscKeGngVw6ShRSXJnToXvjrK",
  "key4": "5MUi6KCJsGAagbAgQ19EkGjSFpp7rS3ZMWqFKKBGQkzkEFabLU4fD2ZeUiA6uFu1PYwhqakqJpNNVuTEjuMmhmYB",
  "key5": "67ZpieY5owDiLWDZSUduwGL1PvrKV9STCaJ2XwfNV9CrZjuNLpPPVEmVub4BkFrfX2cyb9UYjerayJyyzksVR1Bv",
  "key6": "341vv8JZ3MjgBb3EjTsfxm8o37sN7BHtKc97shbpKNFNxH9BuQqTRdctttepU7CeyZxMys9XsQp9zwgE9sALsYe4",
  "key7": "41wXwHjM9QqvEkLkH9tYVjo3rrhWjTbSqKi2BsgsfL7n42wDJHm2rxb5fb6JYNqY7T7pc8mpykr6ixYD7HgTMf1A",
  "key8": "3j3ZXux9SFZihPPvVcnStMESwyJ7bQRiod6959emmvvipJdvrzaSbZ74gXF9D8639ELzJZmHZxd52X67A3gfcEAt",
  "key9": "K6if5UeuGey2RTYnrV3x8E8hDPPX3aE7F5Un7AtnsJHmTywoJTf6aQ9cikZGyrfakTn3xNLGuqJyP5sR2oyrUGf",
  "key10": "5qdsxZpkeWE6vGR2gnqy43xjpbP71xD2wqr92PA5WnqKCBpqdd255KmsVS3w6JHuYUBWbHunDmymA2A9a8DPgaT7",
  "key11": "CXcaERc6BMJzati6TfRhqXn7PG1vFW4ECrhHoiq7ZRAMhdSCwrJ3ETs7xEm2RCMtFdsYS5VhowvHoNZ1a6cyGkX",
  "key12": "65vqCZi6rDFjzNitQ6VjGvHM3HwtWWyUx567WoayLVdeHPrw6bMHWTA62snin4UY3m9wAQ67rnJAuChqHEoinLyr",
  "key13": "DfCkZUgwme4nQipzBwqXr8UyDsGoFDwymrnfkV4s8XhB462S6wqiEPNHBNsFJfuRQxCGu1GkKmcASAf7HK7SK8W",
  "key14": "amWjqCJFvT1s3vARVyjCabauDuCycwxAxSxBN7quwbcefyhfxKNnbXVPbGpXi4kSVDQpGarxj6p1TEzkyVGigiy",
  "key15": "4hDV3f2GioedU1ZC8T7P4iP7RzFPTPgk7SYJz1vfsckXX4Novyk4gjGgUoPR26sQwBRAkSUoaJqw5dW5VchLHTFq",
  "key16": "3i2SFN84kmMiyY5jB6FCQf8YzyUoHRrsNQjHYnVh9aafpFTB2qopBtfHmFLj8bsy5fv4cnQZXVr8GFsxXY9d88J6",
  "key17": "66PW5V79CcfAnW6L5Tyq1x6qnC5Bn7yz3awsauYR7g9QrSxgvCyPmyjn1gdESTAvopHmfpUH5zm1PqfY3kWzbny6",
  "key18": "2jpKgdjhRtDMbJQ15oeq3BT8qLK6ufTTQP9uwdGMngsmaHXBuC1PidUtKYHBf2hAvaEyt7ytyceoTJvUVXpYck6b",
  "key19": "ufn4Y85ccKZkexYXQFkypKUMBBfDd7AMoRsaK7YxwTunCNnNs8KunmKcHg8sJZMazx7wPYpTR81wXdFNqaStQx2",
  "key20": "3uFB9tsmCGAHKCjS9pbPKPfRtThycFmsEwQTCDD678LiCExYRwgDCX1tWYgsCgd9Wa8fM61WxAYFT4cU71kUC82h",
  "key21": "hKRpMxESTn4U6u8mMH75eqjPaN5eNHCQsgvDfpyuHoVNDy8tmM3NAXTTvuGU4od3t4fm1MiFssxdvk9bqRxUDMU",
  "key22": "4WMmPMx3qvj9oUJdZnr9kGpM7aJvMXbroQZJxTvc2bhk7VQKyxVXoNExjQqab3hEgpZ96qpMzF5NV6ZLECKrEKe8",
  "key23": "5FBoaeNDXn4NX78fE5r86jfN9843QHLj9CDf8j8nqF8tNxyQoiu67JMxn23BGzzW2VwQxR9L5JbkBsbM1HGadUmT",
  "key24": "2zNme1oFBLumVmRS2hLSoHMA8WF9661YoWhrpUSiQbf4wHotqBS9X4wtTEgyqDzPmD2SpXeJiiWG8MVzrYRNRV8H",
  "key25": "2vgc4XdL1JjZLu1vCu3SSq1NTbxsLEsaevbtN2ZqdguXf13XvodBWty6dwb9Z4GVQiHbXBXMKFJaPWkMdgUZSVCq",
  "key26": "4sxvVjJDLfRdY2ChnuU1UzxjP9xPwMdRPPJc2BKEaEVX7xFybbVpATifq872LbpLM3AbcBa5LHGUyG4BsEtFc8Uq",
  "key27": "u5xU8Mu1QoVvkLJubWaa9CytP1WTddaHpvjEB3hcZ549VZM7u2F7KWR4j6u4dJhAFnbmpTeu5yUB4YVpdL8tVyr"
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

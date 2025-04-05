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
    "2FEmyTtz1GtXPjLQgLBdytELo9YaKzxQeGt3qKvS1QSv9C8hEcko2RT6HS6ZES3hrB24wKujVmajZboAxGM9jLSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32PCQgTXtZdpYEq94FCYyWscwnkPdu1uYcCTtdRikWgtCmkSSrMut7DUTG8AK8ATiCXj4uvVTdJxhoeGCcbe9nuH",
  "key1": "mNKwVFe9oarne3zVEND1irNVQKGUwVJpgCCUhZzZpXH6o9FAzrgPZnycxeHob6Q4ceKz7FifCjjvq4HheWq1jUN",
  "key2": "56ZLgRDpAsy3mUp138PzuvRL9K4RqTXDRivEtnT7Fc9tqAmNTLzKMmBbRYn2BeiVgSWHjKw8YaPynNok38bs84hy",
  "key3": "3AzQfGuJ9pKuPiMKq9M5jpS95uefMy1HswKCiSXUzFxe6oozPMyhfKemLV6kysnC7iizJF87r93FpX1Y9wRijxrX",
  "key4": "3zqTEyCQF9gvaCkfbHrEQUNfCj6trDSjDxaH8rs8XWRjNK2FjFrFgh6TdV8UUsUaGsLnN9WqKbMCb3soLUose3jv",
  "key5": "5fhSQYQfLHQ2HDByPcS2pHVNKUsnxoF1qGiuhfvz5z7LiNskevNx4UVSSbJaTxeLaWVdHDHx5KQ7jFCuR44V2WyM",
  "key6": "2x2CdJBv4FRJhw1e2gP43YWQ4WjjrtZtcqsMrYpTzzhQC9f57pTezQkjXamsQ6QVTiT6PLG8hSvYo2W3gCgpe2FN",
  "key7": "2g3qg4QgjHvbAAqXv8BKCVwf1uV4rgHVssqrKsrEuh8ufKN2AjxmrFab2WE1f1xDx6G7GGo5mN8FpkeJSourkrk",
  "key8": "dZTM5fNNxJA3KQC6b4prc2Xo2NezpQ7YgVAMJzchcRWWGQB9ukR24pRMgtfATnpHNG5XA3BePYUWqY65fFPxPpe",
  "key9": "359E9XgUcm5xDTEciRedTDfj7bKL1KeeNusDvtL6tdeSZ2xBTZrf2EvJCJhdvBBfKhwNNiW52JpBgttzkrbpR13G",
  "key10": "2oQaHPLsTCyFWUP68KnhdYw4rVyzp17M5X42szN4a6eY5mR86aJryKoZ1qPPTHwrBnGu29JUk1NGUMuBuhPw5T5B",
  "key11": "4DSXoBDePuCqYKUswLk5ofEbK6XK1QYatnY3QA7HHGjJWJ5WNtn4RLyj23Rwuqzx6an3rBTHWuuAXCHZPRPKQW8Q",
  "key12": "5rf36KEnrY3qEYqSVU85tN1SDYNSsFFBvsZKKTwMqzSaVHzpPeeaA2CLE7KkHZa9JpSKTQ5hdfijkULjRw9fbW4Q",
  "key13": "5zo6jEgMeUpPVhy7TYreUSU2wrWQy5UiZ7bBhttQPQGCBsFGH6BhaqmwGSdoKGQCkg1puZRd41bnqPxykZenPB74",
  "key14": "yGwQygefegFsY8GY95nPFgknSiuWJSM7vmwB9uspfm14SCkeR6jpF13JoZH5ya2UJVxjF1LdQjG9suDfowKdTt6",
  "key15": "5eN5vhLvG1U84TBWpLhN9Xs1DCkx7aWV8C48TC4ujtMxNTeQBF91tptUetDJQTtowqfFYhtG2nprcyVTPUqendKg",
  "key16": "WoQ4nXPQiRt4SUzDpbtzbBg22H44FtVLMnBPa2ohoFdY34rUX71Rc8KFqASdfDGBuxbJoJ2vuC9nbuNgLtozpLW",
  "key17": "4q14ScSibKZZCgwejvdgjej4hMeyf5nJpGB1mccywuEpVgxmXgs9Wncs9fW3hMubgSG8NMMVkkYAEDRNmiUNUTvP",
  "key18": "GbTvNtDXTG7NQQzUS2T9mUYen68ewNZsauKTNi55a182pbhzGaKoBqpx7Zhw9ffcdFj7W6q5zfHfrHGWH6ZvBgi",
  "key19": "4Pg4KDZnBan7ULvfq7hEPLQDP8GAGy3yrcUmkcE211xhqFarUoudmm7ptB4sAMJbbw8uHbsqMaMVheCS5QmT7eHx",
  "key20": "ZkD8GEMcL4KqeFaPH3nie3zPntNS8gHDxUoYv2pAor17Q5fscSfrfRG2g9ic2dnYPARD2JoPVM6raxrzL7Lko7M",
  "key21": "2x4wfbnDeekKEU45X4WZFt4JZX2hKv6Dd37QGnyDUDLmN65kWhb9qdBnw6rs8q15SLLMXWC5PM2A9vSNdKux3xZh",
  "key22": "whbcYXxNMXpsLLZgrbW2ce6eCKDib3bESD5VAfXhdrn2mZhetj6Y9tBmKRCGEhyHhJTNij9o9bsQ6WC6HR4w2BL",
  "key23": "5x1Lon88Wwe5FTy9m5mgUhbQjRskC5doFZACZ17RLvZba1oxmBAX8HbKir87iQEyNy3KsbWFk2zgnYwkWQDpxbAq",
  "key24": "54jZ2h7LxwrkLUNN3bTTS2SK8Bret28sfvk7E7hhKJL5w6KgpdBNJT6HJ6fWxavTh6BjEu9xS4XABJTYLFt2N2Vu",
  "key25": "3NqfL28GxBuwNQVvvLnvPrqsatVvReJ62S3i6zmeCWMXStzgzYr1FyT9HgigSm3v4q9uvGPUzt4SPC5DWeZkKt5s",
  "key26": "zZza7sFwcVD5cXsnwBzJrydwsaWqrmAvwZC5rMCp2vHrsugJUge2XYQWb76YzrfZstCGhwiJWsKG7r5VWbTgScC",
  "key27": "3urZJL7AupjRyLtkQkPWSTnCKT6zoYt74SWTrqAt2Wjh9cHs9S9omE2k8M22bszHHiy3LJsE2DtPhPMiMiJLdLAc",
  "key28": "67hFa5BrjXjsCHu6Qqkq63sTMeyHdzQMJneGSDwpEJowKFopes3qcTFEVNzhJicAKiAaJPVxRXaUkCaPXz178Te5",
  "key29": "3DJmQJLbNGdp4qV3FJkJs4fHmnU4NvspN1AvPnCSySqbfGY1i6Ki83FLVY8paJsWRoF6xiBDYRihRNLv5Lgeu5et"
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

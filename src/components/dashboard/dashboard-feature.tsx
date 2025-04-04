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
    "4W5vTmMqAKuV3QUbFp2NLVkzLbre91DnJGL3ftLmL2NCYAHXk98LASQiYdTMPvdB8zVUUTjc4xgXYzjySFAsudQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YiY18rJN75U5rHbQGJgaB8TRSiBJKoz95rAQ9vhUi71YdhEFNz45DYgUd1VmZcwxyNaxBGU6Db6hovDg7FphWja",
  "key1": "4Q7wNtHkvD81PU6t2cshW37cv6i4BgR7nk1hXtbtnD84e9y1gVXib6GrbtKdnR7M652b2TbjZuru1yR3S9BLbguC",
  "key2": "gJ8egoQZWimUto1NRjbX7hRJtCjpfjXRoGhTKdf4XzYqfDotP1eYZB22SwMkmntWtLXR2KL6gyYQ1TmHNL63m8A",
  "key3": "4DvTcC8frQHLDzE7yy27mZRAAU4tSEanGKrbqGu1YHtgJ86HwNUhJJ5cZue3NUq1JkgKs3ZWKCX8W81FnYBEirb2",
  "key4": "2iL69qJwWTecy6ffVr2n8DV4bpeNggUJ872RQFnYXXff5mKTuY8TrrvssPPHyXadvxTcJ4shyjig9DZ7MjFz5bHa",
  "key5": "4cD45JgiZfKwEvyHy7wniQMbQinP6jerUx75ps4rYyMDpmh2iXAYiqFwMnLGz1WERkwh8sy68NGgQ1sPrWro8k1M",
  "key6": "27u2ae7s9cQCjpXzAGDJW28MqzWXVjB6GvL9a8a7vdgxN7vCVmu2N7tUhsYPM4yBotxMFxkc6N6SmScCvX4hPnkQ",
  "key7": "4fiEq7JBMccGXPPYFjTcfzyuAz7UwS8ShAKxVFYRPBaA2PwSQ2arNbgCFKTAoCh14Y9ATaRP4XDLMiKDTJrp2Hep",
  "key8": "2k4bnefkiX2Dowc9GN9NquoZvxcL2ExN4LjzZKq9Z5nutaT8SwJyPF2PUzV6yJm5Y5yASzEr2vDumTnud7aXSzr",
  "key9": "4WmzsWjL4SPUe8pDwZ8fJd9yP336VBAKsPdeZ5qUHDVu58czxnGRSdWtPjzn1sw62nQoocRH1YNZBMxGHiherH9g",
  "key10": "43obmzPh2r5wDkrdeHon6hpb83CHN6zf8jBhd1PFjNtqCpCgvnZRE4dWsp2dYDDEUQhisYptwFvGwHEXF9e32zq2",
  "key11": "pEn47LDLBwexVvmdDjf6ED5p1hweB1fmAkJvmaU7vp7g48iyyM8RsU5KF7joGVtMVAL7anNbwxxkXDi1Fx5bQFt",
  "key12": "5Ky8WeeQRXJHqXJ1UECAnPSzpDq6K7FTjY6vr1Z4yRR5GMRxRy9hxHMR2pXTm7GaMiSxLecF51HdkXb2vNBzSo3D",
  "key13": "3f8WNaTMbAYHiEmJhiPhRwvkV1Yxunf7DyHgHe2L9iPwAiGKuyC8kYeKDE2YNGFh2xwv8dTSD1PbAasduy6HzGmW",
  "key14": "2xZszMKH777udGc7g6H2pFeuQ6CPV97gBtsDCKiMJAPBQB7w6CQJVk6McWwEejW1XDqmcoNf7mwfmqhV2VNYuDYQ",
  "key15": "3nMdPT91S8omp3E1XWm27LbybQKuj4qdxcWpLKDttWkc9UngJAoFDQgb3vSFst7ZQbnM3MgH2AGiY2GsctsRoJmY",
  "key16": "52zJqRWB9VTgs7KXEy8CcGGUfo6e8PHiPWcSaGEhS2mYzjGaNxPyjS64D89nk6iyBe7P4XRxrYr31bAetYPd3C7H",
  "key17": "tzWExwDpcM8jiD217Up3VEFsa8crUEaT5myDWBWTnm2WQSG5DvLMMzBzQp52NbLR2WsPzc4AoM52s2NbgnTng7H",
  "key18": "5NXeC1tkeWJkcbPNg3vnYj8NthxTSHoVA7pY8BW5fkRuNpQ4WbsVp3TQzV55BzjLwm6gZRDLhyAakq9fZBfX7bs4",
  "key19": "DZkYgq2LDK19FJTLJKmPp2QFLPfkY7GY2v3QW1NTZiqf6ZwcpqgVU8BsDmfmNnyU5UWWD9C4miwWMBcgfmdKEVQ",
  "key20": "Yzc57qTkV97BE2zwKjAhb5Rmpc7w7n7JFKKWkffiCz1xXvJ5GXtvdVjh5diMD5YHXUA4io9HvQ6fThaZb7hBVRB",
  "key21": "5Kb5ss3L7ybhCVMQaDffbDgKk3tpTvBkawaTPLkfTTLyCJjTzgFbdpuS9CJM2MdzquctX2WoZ79y2GEV1D8u7VbX",
  "key22": "5BpTQX6wcdPvZdVuAUCdXYMUr6LigUZx9iVq9xxscRLagGysGRQMrG7NpKmRgTL4cNJ7EMCswGQU1mNajjBwKb3A",
  "key23": "211Hr2KkPvm1JPQp1L6PQNYV8oBJiRT7ysjihW7GFQPKy2ZsDpAdKq6vVK4HaMRb6wdZRb7U3VvGvMURjMJ1PJw4",
  "key24": "34Z5PhUUeKLxdwUieQU8kFQfv7zPtpe97AAVm2Lih5pnotp4PKTHwPWBTmfeFi9SW14bZzjZmDDViNDPv3YogzqR",
  "key25": "4W4728njXn9aYuDCpXJzK3ZsS1NMhzPBYmf4gwYRHc9i91mWU1pU5QydNaqv2zmXV7kGtvXfvLqt5nh7f3wW55YR",
  "key26": "Y3y9EQNCoErBdtnuGKgscT5o8Dw5W72RJiM95zBqgtj39hhMWyoQ3ixotSsPgCGxXMJQMcn4QJxNo2YwLahFE7L",
  "key27": "4BTWfciVDxhk4qX4buudmniyhH3agUZpkxd9vC2wGtUssH8SmQL9jqigpbZ6uZvK4j1jddT349S9QKkiSu6gx9ze",
  "key28": "cbzcgnNUSjNpewhWriGMhZ8y9BL5e8xCH9R9rp6YwRHFxiFbGyVbmUwB2uFrk7xgyJP9NXQGimzTcA3Eb9Ejx1J",
  "key29": "58uh9oYCCw72FCaXEBi8n1CvXLF3tNuADV95FBm31EvcwP93TusPZYH8cUqDz8kp1TfWgmX7JLUHfcESUWoMo7V5",
  "key30": "3J4PQTtsjM5Udc6DKF1YpXxN584D72vSK17TyoDr69sgrLF4TGqy1YgUhp1c1dBURrBkWQHtWueNwzHSYxymVFwq"
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

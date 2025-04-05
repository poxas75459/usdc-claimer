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
    "3qJB6TMDhp8MFHkpVFdenXqVtBKtBBxEvL5UMs6RLQLNGADFrMDXDdgCw2czMnmJS4LDWbKEey9jXytPx7Yb312x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpu6pwMCdDTeCYpGL42Sv5okhUkkT47sDDsNk9K8WK1AK9d2Zw1o9BTK1tX5KSe6D11dVrgDKocpMYucKCgk7nM",
  "key1": "2JSEkkdxpMJ4F3zHq3rXuzfKpfio5GoypPcCxmS1xw4bdFRh5WEViBQz1B2EDxzXTydFkDTFMsCwTd3va2mdfMqC",
  "key2": "uHBm1jEqaiBtoqo9LhjLRTvuSdXZL5knQ5Cm4xYEhHmrB3xtnpmvVC1ZaMcebD1HQ142ui2E6zoyauZDseYQx7u",
  "key3": "5p4bPqec4Jwk5gpH6QgTfhFqrkMzfscsRswkN4pDbhMjYn1nuAXpb7LN1j9hTnKui7BoF8PoFbBQGaU7FHJGMvno",
  "key4": "5RQkJsvyuge4gFkk5s1FW159bsEidJgXZ6AxkGsJHaUDdcX4AC32BSHA7PUNAT5MGa3u4BVBCevK16EMBBnqFn4U",
  "key5": "KMSF3FVxV8d9QCFcP9eRH2cP6yKb4YQoJCHtSrUNd9z1NMgmgnaAaQyf7axmm65EoZ9WEb4AUtG48MadDp5PSMF",
  "key6": "5hj5YX5gcYBt5sJoWGZwaALh7teb6aPsNpJX6gJAhCxqdBA94p2WESGo5Lr8nCiVXPCEJagaX7N7bjea82ou7DDE",
  "key7": "2jf9MB18YBsPMuqoGzQ7EVw3A7isrNDcHqTLfFLMRgU4W6qcKFU5ojyhNa27d79o4Gs7CFUNkEEkBAtwcVgPNv7K",
  "key8": "4Ba4bC9ytWpaBQSPz6HnV5bhUEjLPz2m4m277PHaymH4tM8iH1MoaHgb6HaiBdTcHiojWagJQWFyA2pZAJwfU18",
  "key9": "4jiVKfueiJa4kDMmNKEipDkNMFTLPnqvQz7cyMM2LbRiAZTSzYeHuyk9etH1hQHJMz1KMLsbfSDxWegXXwfrNRxP",
  "key10": "2VpoyZKbHvhgV1yDVw5kSHh3YG5eNmYw7H5NYi92h7vMj5DMPb4ZAKotC2x4kiuLg248Y49XKfhYMfqvpAMhY23K",
  "key11": "KcLuERca6FjQ8Lm5sUsW2o73iLUhaqTUFCbAgFBcb16cFSDeg6hzPCUYgZ3Ksx77zUhAwraRa5ZGzrm7qZjFcAE",
  "key12": "jvCj1HNQthhDMxRywuGGtNFEcnC9sUbxtVGpuEqEtTPKhCm12wSjHAu6ABFdjmfVZh4DpAHv3cvTmj4JucoKPaa",
  "key13": "3UZxaY33oVXokpf2hi7HCwHGGBYXWRgqYTJsd8c4gBK59Jwqoq9VKguiiosfp8q2XEBxbdRSbkjrWcD1WVQKG3rc",
  "key14": "CwRw6CVAHUWrEdDaWmJk8PZpZUGCWFo6FVKz5PSfxgY2EyceF3QDAUC4s1SZtRvHMLeZP4xhpN64Ka7UaUtg5Uk",
  "key15": "5poKCChVTT5sdJVSXBfp95nmGBE2RkVLVWbUs9UengycBdPTtg6T8uhXvTCwUYsuLo4j9Z9nZGKdwehWTVjCMZt9",
  "key16": "3pU5rdGWFFWpabPMwpf6ZqgxhL1tNvy6NHFqx6XEXxWGuawFbV7xjWua5nhMWYgRoyegpdXeCAhhadKZEYyqhnCU",
  "key17": "66HtiTwJU3Jd3WgSWWweHcTGTS4v64zYt3oyvvfJkmcro9sGfZwuz1nnCd8dN7TCMKqrWu5dBkZYE3qC6peFyuhA",
  "key18": "4eNRN7NEVFkoiCt3UV7pDytYCHSdVoL7FVm9zUTqCJgYBX6dadheFhJ4bKWmQgsKY1K1ki9VhUA4PYKSDFP3sxvP",
  "key19": "2rgZdRhMNM2iC2r6rdjmt7JnWvb18NDeg164vdYARiciiZZk7erJnr2QhAM6fZT9N8AhFdHkXAH5iwTteZK1sE7r",
  "key20": "4Qz7yb6F8F9UCjScLzoMBVRX8py3eqEEAitcCVsLemVUaSmCFqRMcKcvyU3ch3G62TdUTMkcreyfGpwiBzVkEVrH",
  "key21": "2153Er7NtWupYJ1HNLmN4KRtHVHEKQpX3SevmHTYYjajJNLXKNMi4J1YL38nK8XEVa8bRLeBs5N5r3cvgWAw6wyr",
  "key22": "4vYvQVWDLptFxfvWKbjPxwjUPSvwRrvFBPoMZU1Z71NffZjhAoajHfuheHj6QqC12fTF54QNAQUhC6iY3QCH8Zmh",
  "key23": "5kJZtmop5RZxc1Y5tQSyykXZrxDryA1XHyTJdAthVQmegGFtVLUM3VhsYAX3JxCmTF6omZgn3hpVjYdZNL63LGNd",
  "key24": "2JZbg7rXQJPxhvFvpb1SWM9bFMHXSemThYBBCxGnDwJ5nYhdwXZd34c3ZSiyo8q2jsXgKnoK8mtphtsCDL2xG22F"
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

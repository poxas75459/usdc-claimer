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
    "4M1RwxsR9o2basKtAcyY6ZxhMuWnq3xyMvM5bMCnaR4CZfkFWBHNDqrYC5aT44NZsvWwKzYAH32VVTooFQTkwxqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cC9mLuvKpjEAQNVV5u6mFpobxh8ssBQm3eoCoz58m6ksdpMg64dqrzG7j4wvNEmQbMbS2VQBjhUqYk4a2ZuR3cp",
  "key1": "5z4PS6nztRPTzGdRCUoJfhissK6PWzWBVTe7NvBqqqWDQqZHXoqdzWEupyarsYULMfTukBdjL95NTudurXpVStZU",
  "key2": "2EcA3FaaPJ9oKfdexDz8k6mpboTnaZ56QYK6KvD5LDSVhZ2CNVshEvEKPw3vGbVjLJ9XAYfZ2ZbYCy8KAvkhZnS",
  "key3": "5AhNQunLjBeDZxygHXUeCgEnxbKMwuK7spUvVWx3g4nwuvTVFwgRB3zKWt1qXXmPm33bqMNaUadVPKWXbgEhFnjE",
  "key4": "4jgPVSkHtM68gwJJHJbskjbNcP7CDruy9LbDSAuajxT7Ejfiuep24Dq1v7gKQahvFoDSvQ4NJjwzJRnnnTkgFd8e",
  "key5": "3TZukNenXJqi7URziPTgUMGpjd4vfMP35qc7jEqEhJKAcpm891pd6NiCpr2yLYZUi9bDvGdnme5GHJjV5HrQLpLu",
  "key6": "3vasrP8E6JPnp6aHb3ujhGZVQ4WcqEupUThgDLYgStRAtjFS4jdySBYYgMxS98upnGocKQVFXhZv8ZrX6YJy9PLj",
  "key7": "3PUWLLTW1b9gjZJfAXMPYsduZBJr27u6dqmGeowmzGpjsYSTDb5LRhi755Ct6oPfBtYCgpVmGKdwXRvUr1NEqFwE",
  "key8": "3c45Hk1CSMv8UsuCCjyA1s9cwW4Z9dGnkq9kqduzjFGwstbj1w26ZngUom7CqGf3vgRJmJSkY93t3xjd7vZw6oFT",
  "key9": "phRHxfoiRppciDneS6XbU2XRFjF1LgUp3wpCGoHJPznznCtKbwVzaSkAuAHtHA2itHNzvWdRfrNEvqSiw4U3v5M",
  "key10": "5bEqCNbPT9kZ9iXDfcpHW9K5b6VY9tR9MEmg9zfGF3AEvbSj1avbP14c8ZsZuRGC3MTfe6wgy3EZteFMco67HcGb",
  "key11": "4MvvjEWrMYtGNtBoE8Dqtn82zXAz1pxiWSJ3LHfykU8KtWr3dd8wwJvQaZ9Wuyb9oPh5ezESifG7417pWta5sjuj",
  "key12": "3VEzYSeYaKQg64DMofokm7TpQeDYCszo7LDjqhd8pcCvyPUj6EzpkAYeQAnMhKmKEfp4gwxNfbSg6oozCza9j8mL",
  "key13": "WQi4h8kpsQpBpnJ6ZvjnYRMwTGDNM4qBowPsewb9SoM3aDHr8DQGrUmQ9EfBbLecX2bgi5bG9ZC8EWjieHaLjkd",
  "key14": "4Nw52WCWR7QGCyAiNRhuGhgecxFya5UUdR1BLUDWh1eN12FexHwHnCad5FdWQsWFTH9wPcCGw781sbqsBNFbxGyL",
  "key15": "2HMbHFkEpNXLtJtCrGHi7w4s7jDCfUPNgM7zLYA8bcfmKkyrG1UNT8fn9RTtG4UcuF79xb21obpZZcMat2R8vWLd",
  "key16": "5n3K7QaCwfpjm5QQLgz43cmBr5TuTARtECdCYPb9v2CoFe24nkpQLTVRFaEaFjTPD28m69U5jqENbi6Ny1QvA3tc",
  "key17": "oCYz3HxqfKDCSBbQeMAYojkoXy4T1DMPv6rxxxkXGFzJjembhnB2W5zVdyDR8orraXUWsnPMZkVkbBJnMokuara",
  "key18": "4NoB4JkYbGcJCPSJ8syPzY8fkdDUGwmT4cMr9NwAAZyDv4RLss59WxwueYyKpBEGgH47diWsYYLMNBF7AqPb851n",
  "key19": "51Zsc4aUzHjjcdDg8V1RbghucLtLzcQZVHNmPcNShKDfv25VjXwBRhQ7QB1QtndhUNZSPMWcuQE6tVVHjyfF28T8",
  "key20": "4N5adWH4qCYXpfauZbeLgLU96D7KFZHfN4SRHg9fUJ13K6oQe9hVy9LtYxptjS8dtABchEay8SoCNYVbd85fW9Tg",
  "key21": "4k7wRq65TBuhpinnjomQ7t1UHJTpB4rzaX26rUSYUNLaNYZ6gLpyUrcbCgftiwYFK87Vg7jvVQfKTCjUAyaYcqG3",
  "key22": "2wvbjJeczUUFknVbpWJpuWzC2z1z3cW8QS5EuoVE9MEShU7PVQRbuZ1caRxGfQxhWMLjW44rvbYvGnY6Ss75TBYY",
  "key23": "4ERX6Vgo8uPt8DJ7PM6HvQuqrKL5Hu2QQ5M6atpa8PhMFNEGbakMpW5PVPJcjpEoNaX12g6wrqskEVDsqZWgQXXk",
  "key24": "QJFJ9V4XzdMNJs82wLJn4RWjfBMvjjDX5ybwXz1LEPwCMpSEvAAWXh79ESP8KzFWpkFbaUwvabhBpyjW3TsjFEx",
  "key25": "5mth3neUf2t391rY7qaeRS8WYmnbTYwURRQ5te1mNMhCFTVSMEFNKqVwaTm66F5NrGiyPSWDhcvgxdHfczEeeqff",
  "key26": "4uJUAXV9Q2rCqYafMoh3AZjk9shV3C8rd7rtAS7CMNyrv8So7PNMPDZqzsSX5UVJAG4ngQxwdiHzaJ9pREghXVKA",
  "key27": "vpja1ZKZcjBrXqZMtEPKSNrNxaLakstzPSxCdygDyqn9FMTdVmLEnoaYoaZguDNvkcn3ySAJyN1qymcq8CPCUr5",
  "key28": "35zZF7bkBcJkvEp6ob8crkgNUVWAkXCaUJ3FqvrAMrN7J8Yuest8dHu75k71jT41PwJmreEFGqooU2242XKDevsd",
  "key29": "2hjzKcJz6tmvDCGrWcgt2HcSXzokpdmAV6ztinHqdRfSkxbe6nu3kF4kiB49fpJA7H7qtqXpPyMpGb6i7vrH8X8A",
  "key30": "2T8CTXT8QnimaroLnwtUa7XfJjddBLhtFqYyK2KUHSXUJ5Yq73a7MmSh4dDeCScfYtaX6THzLBcgcpabVfnpyjJu",
  "key31": "2ruugtfrUKgVrmRkzYPQg85XBg2RBUqZiK4UmsEasRnKgVR166oKoZU1eNEbdN47jJE48xma72T9Kffodn8U1fyU",
  "key32": "3N4JoDSjLgDssXggEuS9TfTKCCEchWXERBLuY3MVF7AQffD8CNqmoNEy2pbLzhANcQEQqVXdkxzxhPqCHgAEaoR9"
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

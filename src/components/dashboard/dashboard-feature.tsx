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
    "esR3ypMa4rNbgR79KKXLa2vV9VZ49dS7UXk1AJEtFFKPXecJDkYBumTXPF2cANrNaENaQCBZGJZK7DgP1G2DBUd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qkaw9Gx2jvSWouN9emLGvUcBjg3wneZ78uH5ZccchaV2n6nN7rmdgVy2k5HnNooqbzX2Lx2VWexgE6fvYBwQJvw",
  "key1": "y4KYksuY6ebMQJmtQDj9UiqhNHr1LAE5CwJ85VgtcveMXHM2w6h4GSvVhQUKE7J5U4s2vfP1Q7CubbDqDp6AvAg",
  "key2": "GFu3eAjxqTrDNmCgP1BhpAEhhR9yCk6ANBc6PRWoQYMKv9qFSYLr2J4Q7NyZptwYGD31b5UKCYSNVxrkPNMkHho",
  "key3": "5bWbB8PMym6mXgBkzescpBqmcqT5jMxgUohCGsC6UuFmgwv6Jo4rh2S1ETVRbAfE3zHENorVezhSadK4S2gKmfbd",
  "key4": "511VuDaY6EzVHJKoHGdaVp7hchPwqhLSYrHpykZnr79FWiwnu3yHuBHCxJg9Y7HjG4AqVXWreQAiPrvYTaZtHf6q",
  "key5": "2mhkFiX9tKyXDeDFF15d2Wi5DnJpWVVm6qfcfoaPUyfg63hnfjt97nRUidWd5b4ubcR4acV9twKBwiggUpcgUNZL",
  "key6": "5mst4o7oDFc9R258b4vZBwT3MKdhom4bAPbXLmSMw2xq7KiVCcANScKV2GotHbuWrpgtTQzfV4YiciD2c5XuqTs4",
  "key7": "4JMbxX4iwGgC7935ZvXSbh2Gfx3TeqnpZmTEQuTJ64uASR6keougJUbRsALgrSQV9MaGwWVoXG6VzegPeerYFiyQ",
  "key8": "34FzprVdG6u7LbFSyo83U1tjh8e3d96nQiBe2X5eRqURegrmaeN7AbnfAiipknTWdpuDNyZ4THpBpuqK1gHLWezT",
  "key9": "3Vr93a1mftJ2icoJtrfriHupbpVZyZL22nAwJACFDxQjNHzmD4o9JbcpvJxfmY1q7s968HatKAhQoPUPujtHT6QX",
  "key10": "2YnVSYA7XpiRtdA8S7pcKNBqJWhf5vFisSLH2AuS7rMUyeXCRKAYBYtAdc1fqaJEGx8Std16mMWHLzpAyhquvnn6",
  "key11": "2Z9EnWgATWebYavAXtM423xWoWpcuSFC2UuZQP8xj7GzGaszgvssBMDzgGgyvxKBsLHmj9Y89vXDF4Yxy4VjtUhX",
  "key12": "rcsadDWdRhbL6DffRo631z38sWQZTubk7CjtfXZ2aW5Vn7qPYHpQCXUiin3mYxLDko5ztauS8Wdg55SvQvcDVuE",
  "key13": "47YUNFnkY7djLX96UVnNPQNdaYYJYpwpA1cKg4CDXJpcLpgWQ54vVPUTyowse7ZV91LLXaP4UoEoq8QnZSBVYGHA",
  "key14": "3n7HvEDka17hHRUjV4eMkUP8rLrWoVqEAwqxW7Y6QVbLpXg9DMTd2dFRZ4aYdiGje6h4FKN47ofu26W5sZtZZi99",
  "key15": "3KszJXxFtdoLmuyPXSsyPfxvoh3L4mXtXvC9pBKaCdqigKKeBfdQyizTSxXk7qCPJeXm58tX8vrqhr5aZS6EZXv7",
  "key16": "3WtNAcM4LrnFDLd3TBa17KzsdrapE7NUHz6m4hs9gUAXjx8Qbpx9ZsJTyEghHuvRBSg9yvGc74Rj3Lt7scCMd38Y",
  "key17": "5nMeyHtb7zmfbW5VH6upbqQvpTxSuqRZ1fk5tZ8zAqaC5j9qPThvAijMgqi3A5L1g3W8pk2enjWfqdVjmQ8YHFQS",
  "key18": "p3fw7PS6QKuEVLZoQZApDkPbVTcGBggnnWwrVN6zNpBHucCbsmN1KrbX4tHzhxvyszmEPR1ZULEQDNHfCGwZmVF",
  "key19": "3Q7BTT7MfReezRRfVF82wqMGwd6jiWeGEChfPrpDgXcG9tHHzuy42VT4KXs2jTVrmTKbk1coGeeJy13sYN1zPVWN",
  "key20": "3foTYXi6KZruZtvbvJeh8jUoDvvD9QbeU3oYtsYZCHerpm2vV8BXoZHeV3RfMLZ5qUzDVnMioNaB6mRjKxZL9i7R",
  "key21": "5V72tfdiaYcCzT4WLkbQ4y4RhXvgFCbhQ8YbHnXot4vKmPJKdTkymQa2296cWabR58EPwj6xPkGC8PumTUJm1kL3",
  "key22": "zxTyFMdciue3Cjv9pcdfx4tWTmq42tA8MMp99YLLKAwwaY5JN7EokQ8R2FXdpYzvogxQEmFYtKUCp6KVLNgyAMf",
  "key23": "2X6akD4skp43CUrxRWiM3au7urym7xd1efauAsqpgDW6h3F7mP6je7JSvPM2tA9VqHyWMve7ZPRTppeGCWS8s87g",
  "key24": "4yE4YGcp8mzc5B79ejAAjAp9WHCdddGry7GNUDWxtkxhsTgouzCp2KU6L5Zsi6ma7iC528Kyz4zh58t1uRK9p1oQ"
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

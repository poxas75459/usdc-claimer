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
    "65zQVVeZkvMrdF7wPFu84VEQQAA7UaLBXN8BvthwtY8R2MaatXg194KJ8oBuc2VK3U8d1kkc4LiSC3e5YiAFeVG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vBcaoeu41pr2eNadpxFNTEEG5Y3vdUjSVMD3kCut1NhvAsogGZZzjoDxMwwaKUCPozYCcPyqZi9XNXGvqAqJwz2",
  "key1": "4BF6k7G22zkcURYYXyYJyrW1AymQ9pD2r5C56rukhUpZvzp8iza9BC8JXJcAizjvXdj45KuaydhS9kJVRabN3zAz",
  "key2": "3GiDbLaCegCqGjWrpds1iAm6GDBZtKuoQn3n1LEZC8gEmRtWqRPfap1mnrr43hkijSZA38GfdeMnsYjLSRxjxyqD",
  "key3": "LQ62bBpv2zuseu8XvAi4v2c48jTQpnZTPLSCytZHTnk4RsYi3KPziLCfQjuE15oDGM2jfNtowWrBTZjzWquN532",
  "key4": "3fNqZ9YGHUuZQXf4rb3ZhQXNoD6mMMbEzv3sU7QQRNB1WmqSZUU1s3zyMVNSX4WnLqvv8rAy9qh1emZwEPzFoLSo",
  "key5": "5UMnZHQRmXKRvDPDXWtZPVHwaMqzcqdi6iTM84EbGnuNGwPT11kvST79TKXyoyHAJL5nfRVj82j9yzUrZBfiGNoF",
  "key6": "2xyTbhCS9RMex2rCgxuVc1te6YH1k6qUZn8f8iKDZfvxyRdXxSp4ex8QENwcQF5mEotC67uP5hdoap2mWXKZrFJx",
  "key7": "2YX6erGkJCKRBJqCNxc6YS4qtGL9cnsK8FvH9SNLNvc9jfqsFKb1q3yiNRdWkLkikbnpaMDQNR5pcdasRtJQWpDG",
  "key8": "4TrB8sMa1SzCZaWXvYzWtvE2L9Ya71HQSTsDfpStrZhi7ZnfbqbwCJyikbPT6B3BSiSrckL72okRoApNiqLQW5bP",
  "key9": "2vVyZS4J3mYEtATZn72wYYu4FPPntS3eXNWkxvr5Cj2M9v5MVdpFJKGoWbXnWTd3eR5vmjYrs2CKzzQExoL7bCKK",
  "key10": "4ugD1oLAqow2gP694qyLRbJqxT6B8Cn1XeUJLesfsv7jXYYaJLBbjbVP86XSBhiPbET7reWCswUQNMT7BQHKkbVN",
  "key11": "5cw2UN98goKS1kNbfTgW6mf8F8UZKRNzY6HVqUCSXKWfJcrDUeAy6PKSBeTMp1YRzvwSATZjiqpZRKGGPtfGP9M2",
  "key12": "4y9MnAEBT1vRtg3G2pLQioDbnxHzSR1uVRn7pWbFkc7VNgK3cZsXAmtTsRAvLBPr3uAmM9UxipW7orS8YEGrdhe1",
  "key13": "4CVmcup1YKpm7qXifHCYEfGbSDd3ajmWhsNKJrVobwuqDCwpnqxnX9SMTPRSAkbwxA7BnfJUmfTbyFSdRGvDwEcf",
  "key14": "TtWwZecxerBrfhqvkzx4P2P8Cmn9XXdVu8oXbP2m2sLzjpxpShmPWmDuddDixHmL8qfdDUBQwnoq6RRQVM71g3p",
  "key15": "3GHqi5UB1EfykkYjfgN5rWSuejiMtyuAFGw97J1tJVAMTiJ2UgRn5PVWCL32P7Dnkpi283CiNRBAogAgQhHfRjb",
  "key16": "4yUkBD6swxku41GJjps3izC8C62EN9JzaSLwoamPEwL9bcGgJ8nYTSNXfk44hF18yMnJkC2aD3dBpKuC6kW2ST4y",
  "key17": "4mRQNCZCGWiiBwjK2h3ZHcrTMCu6bYdR8zc38ZVsgqQEZULJGkgotzWqowxCrLu8PYYyNkch4L82FKt4qkz8HCMK",
  "key18": "2fha1XsTyFXq6Gcb7FRNrd9H2QSiWGdvxjPus63kf9ypE7jSaWAssYwT9V8vk2kyt7rW9T9csDzwdDfvYDmVdMNQ",
  "key19": "3ZqS1HbdLXwFcLxosPL9bKwh5rJNTMn5bvfcdiXH2brKDmqh7SjsncAgARzpAkfqedyHYhpGvDE1KeJnCPu8NpkB",
  "key20": "3ADLX5MX8NeA7gnGQSGjNFvjLcYBraaXVRb47Y6ZWiY8SQxhqz5HnyS9Ywa2JJNovVab9BWnVRGHvy7GDugpsGWX",
  "key21": "3Wmbpy1iuyM6haLiE4QcbeAiK4povSMQK5kEPBj6SJN7fb5vkUtTMcrbjKUg8pG9EnBaZD9WCb7J6uNsze8KHPPe",
  "key22": "3pDvwNpLRgaHPjDaSQsbmpDMXXXo8bwEYBHZUR6eGX84U1TeKLVc6WEi4oCHbcfTSov7K8EK4wKpjDoLQESc6MwF",
  "key23": "3EnkRWcC9fn8etyhpL9VgtGCCxKFzZRZo49tuzJXev9j87qkZnd8GMCigQhoLk6ZCZthseJjiNi4i7SCSxNKbiKm",
  "key24": "5ucXNeZQWbnhwKGs3bhQhUWPML7PbowDVTTqJsm1py1UfU5PpuL3U9auXvTPbiBcRPdvL9LTrBq4cNwMunRX2PSz",
  "key25": "3Kn5AQzXf99Zw3U4xQ6rcyNSef1XJRWTF8WZoPd9ttnyJkpnNYA7u4rywRYLeCUXfQSJnHvJVxpuy6Qi3iYYnCG4",
  "key26": "5CwCaGmqZEqzq33CY47xpkPUrAhH3wo7x715buLM6zFUKB7yg1in3cayPxF6zdtiVUYNra5E9A2KJzAAP2uD9Uwd",
  "key27": "3QJbSJxAmb8XpikvN5EiHjf1S5yy8j66fKTUhkVxzTed6rbQXCozGC5Ca1hUYE4JtUaR28b89JVkzPR8mqgEK3ji",
  "key28": "5abhhTdMQfD9yCyo6VnhqkwFahiwAwexaPKfE7szQghDBfQZm5H4qrEQXBdZgHKCKVT6cZEJHJGppp8wLqg2G3fU",
  "key29": "2zzc4DtU9VuNoJatsDSnD7wBfH8irnS7V1LMzH9VExJBbWf64pAtKsvHFpCf3fByyc1mHUkUMApvMZXA7fVA8ke",
  "key30": "RwRKy5rCZjP2rZN6mT4Z4ZJbDqi1dsC5koCGGaCmRFbaX2E57wgHbdKn4PX7z6PxnzQWX9CV496DAkXqmGGjtYG",
  "key31": "3dy9nZnFKjRTdxPbfNvzi8JGbNFxh6Q62a1kJ28pRETZpQ4KwyYMVhyhPjvitNnx8t7waFNq9r8Ggp1g3N9k8c9y",
  "key32": "EnAYbmysfJLn4vSsmo7pGN7Qdgmz3XEZEvBJdTtFZUCJVwR1vuLXZ8KKpaaYh7mWTiRVK8numwuiTz73ihWt5wr",
  "key33": "2XV7fPgXfdtPS7gUoGL9sAch8yQGUwZEjiuZm3KiYmH3KEdz7VDsePTW6zBjGLTgcLvxoSDYN4FvJ9SbiTEpGFuQ",
  "key34": "5HmauNqM7AnNc2Bj5f6rWihJMHRLTdHZBcjE3mPAKe9dbtpT2UmtMC4Ux1mokF8E8A6yvQQP6cDxCsWeN4s5y2VS"
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

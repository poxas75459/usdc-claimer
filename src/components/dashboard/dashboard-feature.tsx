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
    "R9J14yQyf6ym8R4Ln2dCgf5gXXwWqaeWtqJRzZ9gv6sT7EaDztLwn1KhyVtZthha8L3bNNAErxMiBkJEB9V6vQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tkiJfyqi2yzpa7jexCFxuTDy6GyHhRuxxJviua3qDsKCdJdzChTNbd1sJJ8iP5JUr97erDDrBiJUiSkELVVixRj",
  "key1": "4CxCEhc6MfCRtZAfsgFbfJt68Qx3nPJvTWu9KmPECwSghA7GDtfvhaxvS3QPmB4zqZ6yQjyR5oDMXJG3RKMGysRn",
  "key2": "k8fDTnZUJZCm9U55F2k4UqntgSDWqbNBofFbB1J8xtFdGQ9QMJpVnqHegF14vkRA4mbsBRAnZZTRbxe7B8dyc9J",
  "key3": "3k4UvZRe1qtQMqQnsLra5B2FrkvZrhoRjh9Jskw5QCz4LkVKNjJzsDtVCoHETankGWfyNCaFJhimeWVeYsesAf8J",
  "key4": "3cdgXyB2s4rWTWM84XsS558pacfd5k6x16awUiSGX5sQ36EcSft1SYGGvexgNxf888BfhJtbefi74C1fv1Rjwyvr",
  "key5": "4ed6zfMtNUZms28QJsnW3qjxPw67LYiT7LNhmsiMZZfXh9Zq8aQjmnyFqBzXu77boNQPMgfBJkz2qHEr5qzyTQJT",
  "key6": "2xVPjHomG1T4TPSbkdBNtWKQ2eVuHa5hewazJCKx2B6fU3hxBpesYAGkoZCSCSTdkFHVnnyjgcKpf1gEwNfRZLUV",
  "key7": "2rNrCkeUwAf8zfdKMFqnxRtbePjGCLTmsREoohrS5u3eVbRjXpQJCb7b7Yr8S2bZscMaKz9eDQeFzEKvCwKBc1Mb",
  "key8": "21A1wn7g5yPCNGUnnDhSqasuGarTxiyZMjV5wWvUCNTWCYmbHkzFjKVVBGGQCaXqQo8YrPVYpHi48HtABU5ESKjK",
  "key9": "3w5wVvPm5VpsgSGV9HvDGvC7hsDoSVZnz3yGgpqRDRCm8bFmT8vbp4c2yGkjpqngxw85qjUkQbKdbnZ2A79UeYzq",
  "key10": "2wcBUU57xg4CDNS6cphtLedg489Qeng8gy4Ja7WKG1rds7P7cyyXKGRohpVELJF9Va74yPRb2YsHdxPv6CcVQ7qV",
  "key11": "2vRTb2NCeU9cWMLvwQvW8YFPqHvZMYPRcJZ3sZCj1UR4JLQ3WgLX5kk1bnvTSCpWMpVj4MgBi6mR3syyixinPPLQ",
  "key12": "GqDfdEtmV28T8bgjA4FTLcJLn1MaNsKmndfhwuPiSaPZvyNGxzikPfycAs91pkzUsqzC25aaJqso5cynCQ3dnz8",
  "key13": "2zwXqnfNXw2wjDT9G2tj3xqzttpVxEr7qCjR9u7Mfr7i9V7psaHmh6Pc645he5vwzyXEgMRmHucWK1zgm6ZAUG7X",
  "key14": "UB88uPna1M9Ff3Q36jmQMX2cHZVfYRkUAWqsF4CJULCpiSpmJpw34WMZRtdnXdTv7TkgdDj2bZjZ4zHgGFWX6HC",
  "key15": "2hWuTLb6tS8ucUz2ycmgfzxGhpKpxNTtUQnzULgrjbCow2eCWEPPs31kJmQT8WZnchKXagt9wiBX2DDiPZ3V56iG",
  "key16": "49ndvfxyWixPG9FQDsJHGQNX448C2pmYFVK97dKyGNyU166rjJAYLwX65qebeKzTGJwd6MPise6yiThGpuXMQroR",
  "key17": "3BiwjAxDZApVi4qmNSnsG8gGhyGSnYFgnUqFgqnrYkE6bvF5Uq9EZDLwY9ra6DQZSco8K9o4RAyeaD2n4anGWMY7",
  "key18": "61o2ASD9JFJijJHf9WtiRHGcka3R1DdmtYwUN5potmuXvocaY716GoJDsE8LKwwaDDKZXL5ezw8SAV1grJxr23QP",
  "key19": "4e86WMquPAeK63iVp7uQ4eiHUoMgEZQAdgwJTxv8Sd4AkdzmFyMo42Ta22SiK5BYuMvyrDozRv2xiJoJ1A7XgnY4",
  "key20": "4RMneaSSg4xnjYG6N2v4sVXnjYom3NQpmQN8piW4V2tbTFgzdL5wcmJTVgj5V3bbs6cSRubYMXZ5M69hi1DAJQmS",
  "key21": "62W79skbZcci33Hkwuqw3mW4UvMQYoQKjyAoHqkH8p1utMSLD2kpLAF2vymaqhHcJYb7hJHhW5YjBqf28GP9Soia",
  "key22": "4dKPpR8jRjUL19CgN84EUnNNGfcbbYtee1r8HJWpYP3YsEScwQ7LddFi5kJB4jqTDoHn8dnuPXBSHQ2nx5Girh7A",
  "key23": "4zvJsQ9RDUnX6pf9tJvsXqQbD5DrTdQSzwpVc37h41FTTjYwPwRjodmfL5H4AikjcFoNefVRbjDRZFvy161n9PjW",
  "key24": "2WVrQU86HTorLrt5kmPJYGz9agFqTQ39yYPQYNwGLEWPHytxeQ49FKNxtcmx17hctRe4Lh4y44VhaSdFkLjobUZB",
  "key25": "3piQUUVBD9DsvEmwHD8Dd7fhp9nh8V54YoW8gzK3TShwsNdkrQjaYoPL7G6nUv1DEBPQmf2mcZPhCFNXoDVkJ2cq",
  "key26": "67fWBndprJDv2BZyBKa2GreUa8LPDEHtjiy4D8kK4aXju7s5Y6GvAYBNafMymcPaM2P4yg24J8mzx2YqrNYU3gFi",
  "key27": "4vMJpYbx34cZUtbRHiAmug2WjViWmD9MMyTmveN5zTtXVneWBdxyB8oKs6fzrYWamP6KZfverfBvsP4vJBmTFvgr",
  "key28": "5RqhjWxPv5U31xW54cujS594UBf6jKPTtT5S7LHRCgMiZfGgXQQvSGmqWSjB1QHmpJNsisFH53xHZhVW8f9W49EY",
  "key29": "PkKbHERjDNHzGPLFJDmT13AB9zo2RoePSs9YKgxbd4NWWk1xn9KEyPto81rEZ2gsZNCAUuTdqdYkdgd8dvKmUyt",
  "key30": "4W5bKS3Hg6DVCs2c9y4mQ4ghYpkmp9UuQfYT9CaSyNYioenfhnn3vMi2XEaqZWGSkbN7a7QmgnBtYFsndPwh8g1Z",
  "key31": "47byAWnSTAoxjRAh1vXinZfThF4cKcyk2EzmtGkGhpKifn3LC9P8G285uJEy18MAsFjmAHxygh7zHvRBi2dmnnkH",
  "key32": "51KafQkJ1eLsFCSZMdwdcURMDUGH9jtw5Bghx1KKsQkee7v5ZsgxJvB3srxukcHagEjxJ35h25JHTDw4Jk2vqtYN",
  "key33": "5JQxR7J61S24HjnmD4XYDW1wKwJNw67EPiN8jeWQ15TLcS3CYULkUCFnUPXtyByQFsHvPwkWNVq83WTQFqZTsSaR",
  "key34": "5oMh6WyXvgKgeUfsbvfhRaQB3m5RywRXJg5gt7yFxek2G78WagF9TAT7VMAkTi3QJ7387TuWPPJPCkBQiXWiJDBm",
  "key35": "3jvzaEaFAFC5nrz8iTBekZSt48FfqJYVnAG3WKZnBVadLWCan4gxEiKbjviUdHfNWPg4bsiS5K7XToQndbFLmYwE"
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

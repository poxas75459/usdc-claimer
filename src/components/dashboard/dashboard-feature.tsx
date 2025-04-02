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
    "3ebbSSxo6QTYmjpBJzPR5NsJVV6mCPuDUqP4kHAAUyWNP3snkXL3RmjSJwf5VEpMwTZ4La9Xzd9RbxqGaHGFTEW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57oRWBRhXJp3TJWbtRX4rtANzPcH8z9DSEEtZ55B8NLFjXwBADGWEANNecfbVGgXzjw6PiDsuJ7RWLKv1NjrrjJU",
  "key1": "23QoR4J4dZHWGd3uXPtR2VUCTn5eqna4jqsmMPkdhNmgwq5w582Qg2KtMFezKz56WmzWJ9LseuzHS4k1byudbPx6",
  "key2": "35u7u7exRDAQ5TcGFzj7521vuf8tFZ7sQWHZk7wbHyYTjDC5p8t6rhjiHwFfFf3NGdoSM9MTpSAvixUSgEcy5XUa",
  "key3": "3ZGbBpvQNhwpdruaGDDoBGJNQt6pJXMQ3Qfrz5PSTnS5jy3Rk766R8Q73F2ZVFNquvoU79GFJSjQKoz3jVyrv9D7",
  "key4": "4pDV7FGhpjkCP1drFZSbkonG4djkivdW2fGJdqesDnkKkCZXHjidfmQ2wdRss3bkQndGHdo7LpTnWan8XHcLPFX3",
  "key5": "3Tsw1tFezCfT8upviMQr2a2sRQHudYQcsWHRRXYQQABCcjz9LzQzBKwjYMjLnvpZHag7a9zQNaTJTwq3cEhmgAQS",
  "key6": "5y8woopDbsY4RFYHrg5PiwAX6Uy3who3wdnw5cjdigabptEuWan5B1dgMUBQYWCnqQzmiix2zkh23oWVpQs6tHcy",
  "key7": "2RGSJS9DTuEFcfyzepwrqqcJwXc9y517NAYymukQ4xrveT3WG2JuSJ8gYVaFAzfe65Fv3RF7X72F5naYUyc3uKxt",
  "key8": "oY1CKUpp57Nk62yeT7CvcRBqgMGGdaRFfxZmhNSzfCB9wzfYdLob7o4EadivSefcoYY17pWZuWb5p4TJi69ANMx",
  "key9": "3UEBaAuQj5Q4KWQkuG4ApWJMsBVeR2QVpsXC8AB3Mhtzwv59PxKyJDBf5jw2XmH5wr1mEfqEfi67SP9qjG59r3fX",
  "key10": "3DmFvLgXg8TXFQvdaNTQ9hJ5Gqzz4J3XXWBGFniHSs6zGvgZwJz578KUtiHXuLhNSCtfyjAJfhAStuo9kKwi21fr",
  "key11": "4YeALMSUEjGuUXsVDzNR17heJCcuMjvuEJzBjGh4BBKRhzuXAKGi7BTzGjtqWxw3YP1zMkiLEgESsrJwztn2p43j",
  "key12": "3HE4yYiTcrQwSXVqx8QBnVGvtq3qSALBNNPpqqAzfx42sbr5Wc9tQ3LApNwosSoqxio8Ja8bw7FPrRNHG7hEU1B",
  "key13": "5cjw5L9bAMgjt4NawyGAHEYMCjBzuvT1FG7k3bZrqHnecUtReXqiYDjAo9dHW5u69fxW1PiDZxyXR7MVquB9PgwT",
  "key14": "52mHExv7S7RXJ8noNd3wxxNVHoR7shB87Tdu6AzJH8Lt41t3CUXzJbRkjaqaEhfVYic4hwLaTykNcuTUJoLRu4f5",
  "key15": "2uAwQGcdAbTNDLjF8Ao5Dto88vwZvHoKfPwvdg8FN1BBg9AkFweR3zx3zato4Jo9gSNi1ZHLJBXbNH597TWFw3pG",
  "key16": "5R7RY8FaykGhvtVKxxNYzjaxNceuhTYMFPeJeae5sMFBHxFpw7a3aj7UM1YogR1Bo7XqLnf3T5JSuKay9DgeCyb2",
  "key17": "4aqjMRd8pTN6EeXWzib5XP2AH9dHXCGynbkw2qRJeAVqGvjR8tEkb2mfu9i7kE6vph8Drixs5tZpGfDnHCok7MRB",
  "key18": "4JS9uLqawheLX35K3MAukDSEdcXQ8bUzEwDXrA2e5TzwsdXFYfYGRBWp1cvqN8Add5gxyMdH1yuwZbs7WKWwF9Vm",
  "key19": "2Hwc3prmLGwqU12AYv2LaX1G5xzS5sKpW2VYPz1qDzy1RzuEFcQBZLbuq2cEjPQRCNdsYgvxNRrLyVTne5cZQcwe",
  "key20": "2AAC6YYa3vHV4pNuu57MTyFqXPy65nS9xZ5VexVFr4wvb2nY6gxvWX1wJRYKcDwXg8m9k6dve4XEkc4v7MNrgcRj",
  "key21": "4XuC4D24wCgKD94Mx14L3c1MVH7nY1FevQ9XmByJBTfp2qKi3u3dqguU8yVFzVUDSMUSKuTzQK2jjTT3y58vzDnE",
  "key22": "2Jw7kMC9yGZwkHD8Hgsxq9KkKx4ARyuoPEnbz9HPKDqxan84rJvv6rbAVdG6RRrviqKRaoBeVgMpwx3EkZDVDkmU",
  "key23": "4fZuou9CzSWsqbwfwW1Z6GKFx36uR1vo1jkMr1Gn6NqunLjBwVovxrrfGoUrTG51ovJQNKx8Ue4h2dTuHtYPAAjJ",
  "key24": "3wxrCxjDKaFMeeNEN8ajo1inuEiPqmruAoJSKEdEX37ZwV4f77UfaZUiMofa7TsN3sUjVQD939KAuAbU66vCJyjJ",
  "key25": "22QdHxi7hUodn3cAdhWtwmYwFD4K9J3rJzkFTmoH4givoaC2BqDdUg8P4Cuhiwbrxo8fGJnaPeoYc7g8Y9LRLCgM",
  "key26": "Wz3d3vjmUKdficaJpGXh4UA2gLQ94oPKyAPN34T8o3FB1nkEWErznHcXscdARUc5qfPvpGgebeLRzaE2hfJ7mTM",
  "key27": "3t5V6Km7QWjePPns42Aat2oeUuCb7c185w6F2pa4jCoM5PWSGSMwmPJTLuSjiKSXGgqXx32g4JbqYgN79TUB1teS",
  "key28": "zu2rc21UNuBp3dt1GZ2pnrdnWJWoB4XujUUmJyiJmE4jHvMEh33vTihq57oF7AWa6NKhmPdg3sSqRV1EUxXpCdh",
  "key29": "3VmMfDrEXkCSEapCRhrthZthHM38v2Q4EsU16jeDtaUMKhTKaz1fbnsaHkeAYW9BUjon8dtnES6YZAL4GdUJMXKh",
  "key30": "3DHF815HNYYkj7LGSpoQkfp9qGLV25NLyrxYahjGN1a6Q3eyJWdhoiTihy18AcujjLWxqVRSeqVCcZmPjjDsfZfc",
  "key31": "3QXgv1nvHJXnogGUchFcgft4fWjwZ1c3vUQwYiSJ1x2f1rVKXhCwCzrk1oW6JtnK2RZkfrmHSzcFegPdRfWMZDSQ",
  "key32": "TYjpX8gMQaVKNkuRxsFxpdNmmm27EtT42baCMQYsTEkjHgUvdq2dkyEdXgXc2vErfWPck4sXP5JgF2qTKczY9c6",
  "key33": "5USQT8s6QfjCNe1wD6Atrz8qXo9JvH3WzRbs4y22WRedp4vvg7gUfwyv5DRDP1UnRfL8rxSk7UYwNKagb8Uum6Ju",
  "key34": "5ETktDYNnqqU6qxCULwttWjELYZLcL9EGowQBqWBcDrMCVFZYgibzYZZfAdshDb8ZkChFN57PwTEQYGfdFfwjvjv"
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

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
    "Qr5vGErKGERn52DhHm5JmLgJpWhMNrnyu5KrtV4GCh5rz63pNArJWSvgxPZkVFBvfrKWEyBeqSrvt1t7hVDMBAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q6Hrp3S9UtsfcTkJA5ykXVNLWe739XwpFa5iDjY95T6BWNaFauLMnNAM2ry4HKvervBttYjcdNNcFh6pvac55o2",
  "key1": "ACQwf9ovwULvv44sd6JMhCNr4cku93XnrrDeeoRz6KUZ3WJcJnNq16EzyxjcLLAgtN6TuJ833fMFVCaFubmTw4j",
  "key2": "1grEYWuTKnV1is4WVuh2ZqiZywSyQiDSLat8RPNtDiz8Vd46H3FGagSTyGuC2t1Xb8EyMb9sUXXiFCzBeJpv1ZM",
  "key3": "33pHpzzVjJS24pjwECCYk8McLV4aMoZpEBeTpEyBaoXzUTQ1TrB3BsfmRjdiWVJJVXDHJcbi5mWsBERUqJMzyiKG",
  "key4": "5iAz6wuacFiTDaQAyRbwUoQzfrebDHPKKn6HqpjrYUbzxq6RjdY1S4gFetfgQ6Kqom4SuQpjgco7LjQF3yFLb23B",
  "key5": "4C72DNS9Bk5EmffEsYU3VsWzrG4pxtPhuFRA7ibWnW3Mxm73BS3dCK3WU37QFygFeq1C23XCWB8hmzHE4m4Du9u4",
  "key6": "3BQniwhmXSiFtLc9auV1n9JQiqqZv3fFfb7mGsjCrFh2JGYi9n3UvJYTKgwrtupS3DzDEYTtpcUknxKoxdgyPMBi",
  "key7": "bjijkLa9mkwSZWSW6SEYJwimnHDZFYf2cmXRyJFyHNoxB3RmDaK45MEZ5dnLZThqiVYHiant9TNSbY8yntWMZDW",
  "key8": "3f9auCMkQzv8SBE9ZqqPbc8dY5o7oAGL62gCvrjR855gFRuTVBN17T3EwGmkV1gbXTTn3gWuP2hs3hZf8AJfemeA",
  "key9": "4CreUymXp12DTusdWMp7PJM4vdqCCApUD9zEi5kWr1WtVzCk34HrQopcTJvzd3wpypkYfnu5z2Xi9cAm6KfJnzJ6",
  "key10": "4v9opf9GfkRsRRqw54WVjuScA27fpaFJ7XiJXk163KjgE3i337vJs9p4XrZwFMBjs7vtQhLNUm1j6bRBDYpb38WB",
  "key11": "4Ss9cdGrNG1fNQLa3izTGH3ocRTAWZuzGemAoUw86A6cfEThAUgjv9hL6eFVobho8qKWR1ZoXUckvt9iC61BbtBx",
  "key12": "67ZHEZzXpdNJg6se2PLToG9h3DuLJgHGabrjuvzv1SRJdaboW5tm4GyxnA2BcysTn7rpM6PuixnHaByDZJHHbx8K",
  "key13": "5uonJwWwW7SdHTYSyR3GUJjHNEWNJFL4xJbMTuy4WeqskJtM7Cf6S5VTaiN1CSSRdwTk8pUD34o6W6xb5NMZvP2K",
  "key14": "2Y7YZVVdHerXmKZwQ6UsQioZ3iF8Eu8ukkv37VUYiYpbQearfksQb72WTYw5cej9rGdL2w5iNf7k5Yp5yunxuedd",
  "key15": "3w7NxHxtHpc6WTemGES6qNpJKB5HXCoDgHGvuw3LUY92SXkKXqpvYLJahTyv5A9EQY7Px3r6ncpJGZRgF7PmJQPq",
  "key16": "57SkNXqcWgKKyJ8mq45PjyMurxYPVja7mSSD1ffGrCSDBSxcou36txc3wLVKzhmkjDMDWUXYYD6fUWnL2RtSCh32",
  "key17": "3uqXbj9XWe4cgW7xNnVe2yCVrjKA5aFkPMS3RQRuKmg5G4kFrqAY2UrJQNNkqsX2ksr6bPxVRa8aBbigNrAsXhW7",
  "key18": "4M3fzTN2AkYmSBDB57pakKsvw37yfyJqVbTxDSEWaJ1TYFmjViikbWRdtHr5H2zXwLPigtxeiD7YUFfQopBBZ16W",
  "key19": "GRmjsbTsWEkdPntzfaxUoHX3KdsbP6sVaGLzgZiKdwwsGXAhJTg1bSaEkCM7GGRW9PS4gH5Ut7ns2a7Hmw6uMTZ",
  "key20": "9T1PcD1PqrXp3Qx9nfvgM3a3rPZWQKVhCSvm7hWk7VXmQo8SKwQ7dd4ucy2VV3WjquyUCT5kZLa9Dnntae2oLQn",
  "key21": "4grREDBs2nsqFTCJSjxBeDsKQYUvmriLahGTrokVNqAdVaCmnjAJEiZyU4KVrSBw34nfpUKpCah4LBy4GuXU9ouL",
  "key22": "JsvriKUDfdd9BCZBvpxxBtbQEH5SoUWbcvnphFSy97qeHAcQ3aN1dJHvAgavQAUkuQpEJ5gxRvPcdGzYZRj8xcs",
  "key23": "36LeWTVTR6k3THUuCaQaEyEoLw4qT5R1Qp1fVjpFiPM2Au8QdQr7S6vZwexvN7GPvMJ1Y888KTrbvqj4ZZPzuW9E",
  "key24": "3HFxYiu1VYh7H47qVeEiDtmuoxxjiz4sPoG1Fcd5rkZ4ME25GFVhqw4v2QE8hpRoLy4kqPsPmmbgxchdxdt77zj2",
  "key25": "4pQi6ZEzZfPuqjXKUT3fQcPFfVkNp56EzW323VZ7Ln2onEDcXqfPJi6WAFsP3wzb9WLb4GkEytfxNTuDMX7hnhmv",
  "key26": "6ht4yTTijhoFKrLgsnUXjtsMNV7Fjt7tzWRy9eZcssp4zKRSsZTutTAW2tN2f7dAKJydVxw1xYgaa22SuVNupBp",
  "key27": "5gkhDvTVsv7zMbGPs8ZyC3TdAkm2SDeWGDRS2z6YWi2Yh7vW6Qxxc4qn9vEF73fySQ1MkFn8QHHhU4851wscviWq",
  "key28": "23FjmBReE4MqoPxiMKUUxTJkLVxz8EeQBvsrrCd2cBCLrapZbLvuCLpM1Jor2kMyScoSaRh1YcxMPi9hvZyRf8ww",
  "key29": "64WBpKUtm8QtZJzgavnSM5XQv3VhU2wJjEFLiNg6gGR7TDDZPLnZanLBStwbEnATApHDn2VpVtzzfdRaMyF1ajJU",
  "key30": "4zhPSwhuXQGEpu9M96sdZ7KcT4ddYdRcQhP12VZbdZLymb4qHXSDLCfdtaqrznSuiMQRRJ4URkYkpprbcEEmYDH2",
  "key31": "XhNX4rXPuZLi6PQZvbyYwxHw3FW5zYTRau2Y3vJR8cfPtoYoZbpmAHye7CUXLYwGKmZqwDHx5vsrsAa9dX73F5x",
  "key32": "4qBUHdbFjJyznmzKdNon4SAPFrgb8A9yZUCsSgUgHbY9sTe3hCtjjGzVQLtHbTxHdfP78BKSNajdzDH6HMdHK2PM",
  "key33": "9D2ZW2voqUMokX3B73bdbFG9hroUnAJmhyAFXZp6gfbJFvBc1woLEB28WiWJHQSkLPXsS37q2238XPf5HAEUtZH",
  "key34": "2bWLYoPNU1XMZkuH6Au1tAceEEj36aJq1SCSrwm3pbtcyxHhqmemCWfzoJUnrDNd3oX78m2XrLCQRQevKurNr1Bh",
  "key35": "5yCWLq4gUgP2JW66yYQvfn6RGu9KfJ5pmYbxKYzh3hD9MB2Hi7bzkRtFTgc1RS4R1WurVXA1dNUuTAPKdUGYng8T",
  "key36": "59A9umTcALngFi4329rP2iV1WVs1kjzLTN7vvFmZ37PqWUfArQLjiFj3DxTSqRWAYienXGMBpSo8iXp9SKCXjF8c",
  "key37": "4x1YTF9rYdfwAiaQcnWfQLSAJZZyL1HgVpb4Hsvj8Qaq9Jfx7BEfAQdwDo9BiUUkCJFdAepfajjwMGjavg1Kkcji",
  "key38": "4VkfhRgEWN2RVZP67YtiBQgQdRLkJcb4QVrx6z6D6zNExBsmAaLsdjsqNJyXqeX4oTPjxw8xxMhzmLjTK5GXy1Xx",
  "key39": "2UvVg4qSqKuharA5Q7F2AkQ3kZZzcNEMhRDjE2xnZFV9MDhmz4T4baHfUSzKR5ST1x88d7H9t6wMTyZCva1CqKcg",
  "key40": "K6PZyYuyJvD53f1PMr5qam25Se1G7KrUzUy7GtrfASqrJsWWDhKZvbRmfr6jJocxZhNxFCUSg9PXRNWpwQbC7Ux"
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

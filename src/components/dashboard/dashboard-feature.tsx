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
    "63rd8UXpUgc1mGrRMqEzm6o3Ny2ojJNQ9xN98xXUGuysXLnCT1vVg2uw86BiiRMLGyYMUoQigS4p8f2aPtXsQNBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nnVVLchcVEHKbUsgub8hFHgPPcZCPoxLy396PoEZTQRWpXQEr72tNxHodppWntvCrJ5ELFW6dU8D2TjQ867nfNv",
  "key1": "2GGwr6eB7AMxNhQW3rYBxbLW3S8jfkhEoVGcQ2UFoQYhCWpke1RjWLXrVZmNMgr8z3aaUsLDfxuEjsHbp26YfAnb",
  "key2": "3UbRapadaF8Wm45FZeJoWfs1SbBxJ4mqpG846j6Pfh9cHrxg3afHJhisosTWP76kUxR9XxkqMeeXfW2e5BEuNbZR",
  "key3": "3oxSA9LtYBEZeB5Vqn4Nue58ujSXQki1U8S7prjvM1C3romsDetNUExTMZutu9PjrBFA9SbRDXE1XrtkL549855B",
  "key4": "4yn3ETm6xcXbYzrdwgarSfs4a9XxGwPmMJrz9p7kn29qNsi6fc48S8rLY8TANWAJk17Brr1kQyLKCjdCXYoHF5oo",
  "key5": "ZdmV4FtGsp4PjYdWs6wCxvjCsS6sEeCfawUWfKEckqLxcvDqwS4Xo11ziRBzutq7MXRiaYaaN2gEDnRbvnAd9st",
  "key6": "2ett6r97TD5zqD1487RAQbqECjuXGk3yEXgg5n8nSyvtGneLX3JxLkS5R3aZKdA2q2yYZFpeEU5qGVrwEMPpPprR",
  "key7": "4wPdTXYC4Lri3CafoSDywS7mCbCGpACct7s7MC9xjoA15aVnKEDSvacbWeSMnYNm1XS6EB3HFSCFCBKrMVVC1GYu",
  "key8": "4WqfZi8jgHyiAdLwpaKtXNe8Bfk55LypQXB49v8k4ziYT17dYR1aWKbJLriAsuNpBoFyentE6cZuQisxyM9cPBLV",
  "key9": "tdcrKzodQdPZsNQwQN3hocZH1jnXDprk6HbWX4dsuxmZJ57eh2FHesfimQZ4mZ9AfAKRyK2Esyc1fnKEqNqTh8v",
  "key10": "3b2TWmdApthMHGQtgM3LLd9sU29jgVMNMi4Joi5ypPCjQA6fMMQsmJLA4BhDm1ySHSid5wC63vBQZCNa2CDkpB7K",
  "key11": "5ayvhPQd7QGuiwY3heDd4chBmqyDr6vqGGSnaf4hDnMzkRhr7TTb3axVMR4ZSnuUahBdZznPaYusz8tYLjNEkRsZ",
  "key12": "3UZvfAS6k2y1shEAvnneEo3eMp9P1Kgoe4oi88AZEoxEX6m3DjEVycb8diBG2Jfw3TvTDUa8EzLWihjBqAEAAFgV",
  "key13": "KB9fQNS6URtvWqPyau6qUZrLY9GFJJhdNQmqiS9GGGqur1Go9q7MoJBRfxbK4VNmaSmjBrHg6VGx4HeyhjC3Zkz",
  "key14": "5moBBFjc2u4EjQfm9WnMK69f6T8G3hw9isHvv6Y8kjGENN2BLRLRQtTUwCiZxmQqHPFHrPLc65rHpD8sFGuvjnrm",
  "key15": "3XFmhrHe9XueF5JaPGndm5GXuvKpWJ6DdrDbbxSbPsoMYK5z5KQArz9zgr6YpGAXL2WwF5cC4gL2ZckDKibDJmym",
  "key16": "3xSzVEBS16NuJGQTnYXHeFVAqpr97oh8248BLCHKDc8D1FfQHSr2puBiuE6cWdwQHnveFaJrsbJQkqpQJLNPSiVa",
  "key17": "5u117yqBycNzK1VrXavdR5KjA2hJMsART76Lc4Z35vxdykfVHfBD2Kkx6oCid3GsVBXkPTRSiPWnk37Atk9pyE1G",
  "key18": "17F3ywf1zKy6sTBtoKy6NHmozXFVexmh58Ep8d8k6Y443YX3fYqnSkExjrWQQwYfVXo5NJivyWboKVEi6ij4GoX",
  "key19": "3tRVpMeQZVDUHyYBFcfrYuwcbF87VcC3EZrrHTTy9X26kqNP6LoY3AumMgH8AwHTcGjiwy611A2pzPmZeuUV321z",
  "key20": "3KDG4MvpuhARDfTCRnLr2UErWzkZfieSKXbUSZqEjnXGhfV1ySmQvRb9pxDS85S5Q1dd3Thfi6gj9FMsZEjZkqkg",
  "key21": "4vGdQnw3uWheosFkTtmhPFyroRNbFZn5ytihE5MZi1fSs8wL8pKzLB9Es57miq6dSMJbdqt7Ny76Jtw8vQTgGirN",
  "key22": "65u7aTqRU8XQNgviZaShdMtWZUi4SXGaeJiu4Lk2GfhuLtMWdemRWPGU8Qf3N97QYu7FzhkzbTB9F4VKsw5pZkWF",
  "key23": "KeztEhizcp51BppTzcNmJsm6aGqYJ6neceFdj3yq3Z5zwvH1j9c1hYAQU6YYq2RbAsFGc7A8gHM32quX8jhgprX",
  "key24": "4pfAGKAdik6xpgAfqMcAED55Mase2AEMdqnQ9nUJLijc7T9FWs23AH6icnDGweJqg6JU198trtvkmZojMtg52kRz",
  "key25": "38gpJcvnmjDhNX9qVwpLYGoYJJfZCrqw3c2aYLyR5pwHYLLSBebQF8BuWgu6iFBudiNottjakFkTfw5A5HY1b6Bp",
  "key26": "5FNAf17kk4tcuh32A1H4zytcw3WxnHc4dr5vhxugHSeuq2KydoTM6hc4A7RqMQXiTBoLnuK6DiXkSNyBc9hqKeZz",
  "key27": "qoHi4g8yUcCng5ALDMLom3uqHPf19dtnsT5mDGGKhsgM3PxxSjWWVmPbwmwBzxKqyTweWFLGTP7cjEjcoZaTkWG",
  "key28": "62Yx9JFkHASRZicMyLMG9DWxBbpJzDyva7iCzBkCq1MY9Fab3Eq5rhVdnWR7mvSZnWjLQAtAPPgMZ4k6h7naN5G2",
  "key29": "5gzA5F9xQWq4sFiP72kR7T9BozUmySKWrN6F7FxquH6MvXurF56MS3fqCVREBk3xQBdjSnFV6b3zpoP16yW4DHi7",
  "key30": "BnvGukiPNZvnttMkpxJynjC4rzvnYckGv2Xa2rPCrYiJJJWdH8idByJzvzySW6L1FJLg5G8Zve5GpjNG6onZ1hB",
  "key31": "4dV9xwD6siwEH14qUPtvAo5eexfXrQ9Z3gudUCj8GacD7yrGTHNUMTiye2rEF44G6cXnjRarBEPB9gXPq3QCX5pe",
  "key32": "2cDwkxZtdLZv38CEMmuEJbcErAVeyR5yYTZWzNFXYPLW9xFgy5mS4wwVhiMbZPC7g3xgMTU5cDK7CVAvUABxUU8A",
  "key33": "4G7HEht78LwhwqNANxn36B6x75w9zbwPwE7xXKDy6aUky4WWtUYEnSRZJzq5F3MXzAimAK6AuKfN9eBn855fkSjM",
  "key34": "4LbY8tsic1vy7nBqDEWdF6dtvdyovJmzJPR9pFtDEDC58M9WVwV3iqdtWzwHSaqo2dufMvpLjxdtVTjfv6wgasMB",
  "key35": "2XzDmXpbV3J2iQ9qsAF11eE8Eyfm3FfyW38VmhYTtRUKXiUXAt91TUQGVjvbUN3FisB2JD9rYFbiB8QPR7poFM4h",
  "key36": "4BML5wyfsfzqSRvvZDv1G2Y9FBEiLc46CkbLuLP2tV858Lframctji4RJyFwgKpt1icKcXyDgiD4jxFZGE1QZwQe",
  "key37": "2TV7yDVpMQwgJvQAU5yWzunjEajXauzFjMWJFwoKnc5Hf4Q5mNQJzhyqvmHTJShmAPoJoUWgXogTfqwjEeFUNUfU",
  "key38": "96yzEvUfkveukQ1mWzkHfwXpPLLZHePZkCLDh4ByGHzkdtEYTbJWo1zZvQBRau8Q4rCAv6cn6cTp1auocRXDWSb",
  "key39": "meQv3EDYN2gT4BpNbbm6Mv1dzDZyMSGwdu8h44CkN4ABP4fcoZJWXQfxXtJ7W1Pfy4tmfF95RQK6TwoKMQJy9PP",
  "key40": "3Npv2oWurqCV6UE2VZFCw2jB4PAM85bYztDwgvZvogZ9VdBK9MVDuzLSSEcnzm297y68AHzp2nXTCE18U8WuJ1RH"
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

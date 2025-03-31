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
    "SkBzoXcDdGeqxdZS2fvgfHMweCDLRTXi9erqTch6HBwB2S9MPiZ7RQwLxCfXGWt39fthd216MgZ9MZNChm1nGMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48pVeRTPtP2sQWH1XhsNh6b2rRdQkRhsigjdNdiKRFfifGp7V1G6qzbAC6K4tDihCihzGvrS3ha1E1jrkrmH5jC1",
  "key1": "3wNtT3vg4vCfC3QpmV99kq6X4NApwrkDj286r4zGEMXV3F8dPB1GAzWbxVhtArfj2AhtWzDwjT3huzCEenfrsF4P",
  "key2": "5fDoExt4LCTYjvnGd2L7r4ouFjNBTSmrsj3w69RTrcgFVHijv8AMhagszJJUB7dj2fnZaFEBS93AwF4TvTGyFjhH",
  "key3": "5JTrAUnJmzVxympAXV7TkmVkXMpE6RzyPNzMEzZ9yhxqKs6WztHj4s39xrjvntygVykdUZuKT9EwFRHhXVGhVMKj",
  "key4": "7Lta5WP5Pq1n4vaK5sckRi31Mv5fyTZVegUhaqNBCTBhds4B58nDcwY5uSv6j5JnXXB3UGWWptUHuQhMB97SVjB",
  "key5": "5h9Jjd5wh55AYsJkWDCRGNG9mHFrvarfJsmvN3T9J8JB69UvHHzSeeY6VzYQyu87V9gRv6u5TtxVbRUoyWzWo4su",
  "key6": "4pRiaVChREVhkvbJq1v6pmtwsd86mYRMN3jr8GA6AoLL9LCqv5hpGPxE6qU1zS3qasZrEHCzX3Buv1V7pxByGfXd",
  "key7": "3X8WDXuA8mN1SN7ZUiymZDmEaNpYWCAJEciDsC1bSt6KKd4Xqjenahonse2ogJMz1fau7TGXZPgCQQGaTMFWzQqm",
  "key8": "3k8LCfc4fC1Ki1xriqo5pAzFv3n3eNoHFVHY7cpvkdJ751RCsHGMsgwCaPm1UcgMt9ut2ivrAFSyH8n1BNQ4tn9q",
  "key9": "4cTnk3BxW3CjxrYSwrqT1dW82w5UejGUqf66gACY7jiLmRVx6ahKX8oFGRxWyLBXQCunNR9Mgvm2XUFQCzANVrG5",
  "key10": "37Di5uWboU89V9hhRkUcKfD1DnFN7ZtZjrcckRmQQ2LPFn1dtPswStCNse4MAvJKw4K6BAcdwgcMZG2JNaSeDrD4",
  "key11": "4dcE7Vve35a25YgLsKWVtyBA6ixr8oaXVdVqcCfgVXVHovURZVheR2fM9dwZCnp29R7qmfqFPa5gjsRwEyonam9y",
  "key12": "51ot7Y6RELgZYqT4oV8rmG4XUw79yryrooBx3mPMoHZAutGVD7z3szUX6ooJB4toi1vzcJcSVxbrmakbyDRoVYod",
  "key13": "FNaytSc1uL8B1xPZUm9S3b5xYqexbN28uuw4BxU3AFZSdxzTZcB7v3wbq31CLW1J3iMY8GP7Xd4MoHaRMEkfTPN",
  "key14": "FVHaccgsG5qFGFk6nPeGs9DcyrmY6yp5D3hvP7FZiUqJg9FdFmXaLCmJT5XCUZULpwqgTMpYUpE2sn27XdxzxPP",
  "key15": "4xJ9E6wYAKf4JxbjCNMzAYJg4Ho7Yw641QmJ6avXEAWG5jxhezkuivakGfqKLFyadaPA7sby9ZZpRLiqxJ1HunvT",
  "key16": "4hi8cH7TN4ymTYfDbrPb43FZDzd5a33bjHKd8doE5QBZMB3EoMBCoFddi8PjsCW3bSnuW3UtCcMfZAkhDKbr2hpn",
  "key17": "47J2x2bpcy2sRDayZetcqpiBvVRNZG1p2qHR1AfoT2pZi95LNH7Ak3L4LUDhxzhHy8wZuqN5p2jJDjbP85wUoLxm",
  "key18": "5zWTYKYsRQ3eS7EDMNJh6BSgpwYrAtMcvQmuYQouh5tMcTfFUp99CKgm3ATHFJk7hHkjgmK4ZwbuuSDqo9EKSLrq",
  "key19": "YF8CGkoKRUrprwcHfBNBgw6QwD51oCMKEfBfDvWmmTkUQCbfTwuqvNh66gWbCXiE3MeK4ceV7nuaSY5ak3EgMbj",
  "key20": "5kcFPuHmKLb26QCm9nUuBEb9GjDHwMVnMgRUztY6kmuPBTdjLiRYbdytGfsWkz77sze8mFNoQt3d1BYWmsHSCbE7",
  "key21": "3cHdLCNrH6NP4uoWdAL89oYnUe6chKFEhjcyui7tV8bfRrGLqhqkscQrTkmf1rFBZHd24w3KTFZNzR2CYZZk1EDC",
  "key22": "ewD1keR2Wf6oGkMUPTx1WQjS7Qpho5nJh9YR94jYeTL23a2w1kLCjhdsLBbQFU16sshvLCCizYw5cpUa7N9YDdW",
  "key23": "hUHRYjEZ5Ho3H5iFnnftbjyFce3NZqtRDe4dwR6yf4WtYkPrRHcNsEEYpwdgUX3cuXhihJJrm4RL2dNf6XZMEsa",
  "key24": "N76kftbty5GzWGdi9mdu8ouJJ7fAEcYuG4B9XG4hVZCGav3MTinnR9ptDovCANcqxNWAWBTPKVJg4M57usCyju1",
  "key25": "2eTt3dMetUadE95c13isJ2mjFMbmK4pE5H8G7J2LE2Mf4zB58GyUxqtbw1dEJHPzGJDVZgdzcuiyEpVnnw2r1iRK",
  "key26": "ipKA4a9MeJksNoG7KCxm3TvVqNYgbGmNWbH5g7TxJfdxrYta3TsbcuhZww2jMpsYCHgQaKHHSm1giDXAcKVbEUT",
  "key27": "4GsoDScWZ4ALmgZ72DEh41XJrnTPR8hwtwmPpjcxamQPLuxa1oBwg8MJEfv2wi6JKqBdySj8weWxhc4Em3obv71g",
  "key28": "5M6qcnhxK6HaRNsz4HUZpyHtQycLLXBLRLxtT1i8i4PT1Fu83EmJ8so1Gdt7bjy5t9EZGG9Q6XFUt5C5EKELza44",
  "key29": "5Ns2dFEhr8u2iK1Kih6CAMPMDc7QQGLzzo3yRNMm6CVSGn4cfC4jfW4wqn1WmDKhFF6kAg61Sj6dPaRzKtzVYuXj",
  "key30": "4z8oaSTXk2eS9NfNUpn6hzmX3GJrGtLV6weoLYA96NpxojX2BvGUrunfmTbQX1u7Qc8B7o3wNCeUw1EuAyg6ZxRe",
  "key31": "sknu7MkxzQvRfHz72Q1JQ2T1U5hjAr984FM2Q4ttWXqtzFdNz7ud4thYPVDQVYcHgT98Gd7EDec6JNdK3wWXEtL",
  "key32": "4LLqwhNy8HwDZbMSydz6azv2SEryHS747oGH91ZeVZytg5ZJe9MuAbjnccvWu161UsEmjDWAA4bRJuQxbr269sZF",
  "key33": "NfzCZSrK9bQ6C46AHBbjtDALhPfU8rG7E39DezQ7VkaKoffTzC3BwBGg2ZPMvYzsau1VyG2fTydxezmugCEY5ye",
  "key34": "3eZra6Ypa9o6J3HdWnXerdLuNFZCGacMSdYo9F5PMi2yg7w8nJnzS1TiGbKBQhaGVtCMme8rb19ukHpuEtupa9px",
  "key35": "2Ah1y1W3hrLCrwVJiJb2rFtHp7o4qNkLi2Ru5JPwLRTppoACmvzuKFoh3DCEq4g8i3NYX3HrZjo5uhNGL6cGWgaH",
  "key36": "2hkb9PfBXzJTkKD9C4id6FGL5yQyU41zDmUWzCC7bGtCfM2Ejj2k3upXtSkoeDm2348aZvP9QY8ynrvZFmd7cTZr",
  "key37": "3AWBRvCB517q5Q6GQmgYrXdtWm2FoVuFMms6DD73tm2md4FgmaxNErs3i2jt6jmPWU7pnsnnyXbKwCLhySrgi48u",
  "key38": "VKq7twj375pKaRWoKx6AUZ7znPNuU97UbUy4Hr13araAoFXK9ZVqpvE6Ny9CkA3PjVPgk1X1ozYA5gCMVT7BrJx",
  "key39": "4bS5wQPiUy8cLwXZqr7XpBZxFKCDqGqSSocJEJMqEB7Hn4KeGb86CTB3rq6sYZh6Jg1sZ7pkdHgwgNBsMP2wx4pr",
  "key40": "61KLxrUDqbuRgQtMjute52wNGtQy5qqsdddqA2ZDP8koajejdeHAZA2oeGSa4SRvQEkKzAe9mhRxvQ1RJssB3tuP",
  "key41": "4z3oTgcceCjmGQbEK4tCfHhsR5iioVz5rbHsHcm1wN7d1gdWLV6nJ3TprxQy52z7FCxArRsHgyZkrac7FAg8xdg3",
  "key42": "yYqprUoqkMCCnRU2Xypwt8zuZgRSrA5r3t8Fkca4yvdMvErJHjbw12CnxgJNaj4M7rQhu1RMGmfKibPHzMXK2Qh",
  "key43": "4hqotr5GacgUxyCbCRwwmf2fUz7AvtAbtW5yxypYJY9AYqkLHRPp37AaBQzfse2WxtdBnmmGZu4kM3sRcqFAvW9j",
  "key44": "529RAEnpA1zKKvkSqFdncmg7xScWqYmgq8FVAjPgCVVDT36HK9LjUNmojwZL4RU6NDix1Bo637mndZiRnY1wancw"
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

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
    "4cCjjBBGnPsQEW8BSrKnu3TbFxHcJL6unXGG8nsLJKDw5ESVEqihd7E1uXcMHYRcgdjzHhTrYVipy4rSeZDjZJxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YEXFTgmDc8m6FcKutgoZGcZmNHWN1xzHUaC9q5weVsVxJFfKqStSLM3ak2attdxCNrwnSwbHuk3xy7kdEGPrxmP",
  "key1": "55mkprNn2UosZDxzbBVosGQB41n9PgpYHDHNoiNGsayiLPGfCUT5QbxoH2WuGe5Ec1BPRBAgNdK1p4hAHAdgNuXd",
  "key2": "2DLtdbLcQ6VfLW5X6KGjZix1yci5p9duwW7B7A8iiZHwoT6bmmKUcqbgyC1be27vMTptCGBz8KgvP7zNMjrvoye1",
  "key3": "4dQC8peRVhqPgD84aC3Pr3AdTWk8yioaxMfUfkBHEqnCYgu7xv5bzwaU71jiHSjKkD8pv3hx7RtsgrvA1YZHyd8B",
  "key4": "2joERY1iE7Xvf9S6VgUMgaJSd6YoxnhbAo9DCngHUyMoRXo14ykB5jBpaVdPt6pYkrtoXaEjJPC8W9pfaQeKVjjk",
  "key5": "KLfmsFCXsWXQb71d9aCvhreCS82y5AP7ST7jmGcCfyTZmkuZYX1FPgdquv1mABdeAMpqxCvhsojPaPa3t6aHCM5",
  "key6": "2AeJeuKqWtNsCbvb9DmSJcotR5idSCm9hzHFKzkSaGGHhjbiAfyh2brFDztkY1x2qNriWxo5jrcQfN3Mxv41cKWy",
  "key7": "CkuwRdwjAz8aZ5mfJZe1unZyfWgKnaig6vmV9BfSqik4nrgStMb7aUthoayoP7jQxFqiAbG7449wgF2FEJS8Aiw",
  "key8": "ZzHK1rkiUFa6CbqQs6FXant8vkL1FUd3Q1Amfo2eAHjbhmZeZWJ3QEJdkhZGg33cQgTjZGHNNLwyN5Ua9JPLmJG",
  "key9": "4mjqi7z3ZNnDhnNh7aUoqpwGKmn4otdH6r2gFhjcTbgqQKGbqNtcu7qxTzpmAmE6vsq1jLg3MmGZSJpYL52mX8Qg",
  "key10": "23hPVEcZw8FhYPF8HpM9Fm6agvQmun8ABpjx72d2AAZfVsphG7knm6fs6H2qv4k6Kz3PRXZXLQzEtFFpfscvG4Bq",
  "key11": "kGtuGjVpAWr8L7xvHbbYzdUtydmzTQDujVNeyABShhQJQnd75jr9rHX2bTS9nnBrjU2Yww3qBjx3Rqvjmg2w3Uy",
  "key12": "YUym9r1nz4RhbBfVmYGtrmax45TNXdh7JdDV74eUNGPk7aVTS3EyHmqaui1phVh5RS9yse3zM2Ccgp85s93Baaa",
  "key13": "5bHPYhGhe71ggoDTmbAZxyTFQTTqHibDuGFbNq6PYZpqxmGRt5rK2DoJNEqo7o8YwrRfmNydpoQYuazzvAMPf8bq",
  "key14": "2JYkLUoc2cs8WM6LuE5tUexQw4voHbFpwNPUaWLfY8vtaXTsys8iEMiG3fE6c69Kddg8exFmPHBApEfBWBFmVd2W",
  "key15": "hHYFnDsJEFxP5wZUdDMUmb6Xb3pesoujUQCCLRmtxCYphD865HvHfdcBT5wR1ijWxLewxUR63pZRZyFHN8U8ySR",
  "key16": "2XNDM5xd1BDmiqXz5JRVJJayTacgtzLESYnm1GJiQosntGwgx6JoRtku3iDQFFdeAGrjJbw6HmbXUhzZaZBQy5Dn",
  "key17": "ufUmQmxLvf6yv4DTggkP6Fd522WKfCyxowjqgLFUKWDCCT8pbbkLQyEKd8RvCbV7TZReSt4qEsQMDxn9QkMK7io",
  "key18": "4hsXcGkAgyhv7BXiUCzjd63jdztzcceTyC6eXBP1QtYkusAnc7r8iAL1CGzyZKpGm1FJ3tCErsqs3LwoU3FDFkgZ",
  "key19": "24d9GHbsTwMCevUtwjPFrgV5758S4DTB3aL2m6MAm6CnusGouhtiuAy1QKACarVFdowBHRzD57oLbUuy3PkDJJbW",
  "key20": "2GQdjA4AnLnHrmcWZWNQSorPFZF2U7349JhnhvP9XmiJBcdcMErHWKS5vsoDcrr5KScYLqqyWSFQdkwWT1ocB9gg",
  "key21": "ENbf8v5k5uXjZ7kNrwMEzvfSN6HwS2F6by3eNmTzjm3hX7ParWNpZnbpFjFL5PYZihEd5agwE6uGgfwDEfG85Rv",
  "key22": "4YDyGpuWYqfjow8pE7EwVb3ozWa4UWs6jQeuGJtPPXPyWVraBdcksYHsXSz1Nf5x8VTbtSRit9pMoEBNZoGDApF",
  "key23": "5mfL5r5PRdRtmntGU3QzZ2agPccU2p6SfVJDs3VZWVrjVvo4uuN9hF6ChffBesU5e6taohW38rXgERkCpo8TzYF2",
  "key24": "5RhLvZrz6XPmjgLZ23iLDhVu5ETF2KT78eg9esEj3CbpkXWsLy9HPVGuTsZMeAoxaFP3U8MF91zaE7fPS6FivHPh",
  "key25": "4WtBG4rgUZjYRkG26g8iwTgdjy1kfo9rDYoqrcWbNNGBL9StjsDcVjMUCCBSetGg8UcYPkuTW8RhTHuEQ8n1dSt3",
  "key26": "2GLQz9a4tySqAm1D1NuDcHCA8GSqgQPMZdfErtU8Ctb8rsy1sW3RV91dyNfcS5VnRCoXyixkZxhzWt9d5VMVQYic",
  "key27": "sXC3QS8ZCxwV2X8sg7m1eSbJgpL7qZDVUwXp9ZW6fA5VDvotQ3o86M8pWQDnhFXd4yeXcz8hzPtE85S9oZwtPGV",
  "key28": "53SFC4LWmEkkgA2uPLqGgFBvZUyoSTwcdbLWjtuBknRnJwm1e1NT7cvocQnkbGsKW7ggaiHk6vF6c6SiAW1AbqYH",
  "key29": "JZc4C75kVRBKLmt7MBY9Qpc9zyQatS6wzyXZDU6gy3qfwbPnUNJmuxKkoRXeHtzwW7JnzU8qdxph9HQ2fXMAyGv",
  "key30": "rVUPBjLBC1M9Hd9GJgHe9idVcDnSBqts3coy9sGCX9tDUDUc3UhpPRvMSyQdLxUQsLbh8F1JgVxdkPaTuFHRAN3",
  "key31": "48yzKEiHYMuenyttozDdr3DqFDP8sy7ieJTNgBKd9mqTHkgSA75ytjcwbpLQRgE3z4HwwzzBJY5BAaLmxXwdPorA",
  "key32": "1avJL61wkfhpBFkqmamXe2hLd87fBJZKpy9kmJecuVfVueHwRvB2cXhrNjwnBFghCcPSdpnw9WVgDzD9UUy5sYJ",
  "key33": "2cndXqPamZmdz2iYCuzvpp26SSgeTdEqiENF8XenHUuxGUyMiaErSEGbX2TUXoGbkhTq9geK1U5CimUFXSEXDRxH",
  "key34": "3devSsXEaZ9NLAUNdGJM2dZnMa5gFwHRx8UhHLQSSvpVeuNWffe67YvxZ1fchXTHHJ7qaWYo7rAHZA1Xr2A13V9s",
  "key35": "5ck6hKKqiKJBBnSk6tv6HJR4bSPW8nsTnG7yiYAsn4hYotvBUwYy3a9DxBkCVrshdMSj8Px4ZYgTnmNWeQRi6C2o",
  "key36": "2ZxefscHdp22Lc7fNVzEzYST8SphmHG4Y1TnP25zD8veY3suHxHn6zpL436dPj5sQbg5WQtqWxW4bi1UKaxX3jUX",
  "key37": "5Benap2Xe6cSkdzzgQFVqaiYQT4iLYRjEM8xEQ7AueUXEAyYnQskJpuxAkSxF7ziR8DwEBkz3zjTqroWjxn8ZkPa",
  "key38": "U59XRQhEeiDmNUAN1GHbR5LNwVXKf6WnNK3F6sG4WfWvUa9E1r62ke4EQTEAbL96YQ8hbXYn57J5tvucrJtQrVa",
  "key39": "5mZJkPxgU39sTqRvUXYHddNDcFtjFkxSMXXqHNvAvxdg91WK8icHaU9deYifrFZdb7on8ha8xxny7JJn9quhyGWE",
  "key40": "2rd8UAXuPsWWTfaRpFpbYamBwScPZsKJaHeru9DCWb5NFgPuM4fHSJzZDHC4nEHtSTmQ8Vvfsu1LYa92KVWKVCFr",
  "key41": "3XhmPgxrUsYxpkhR9Vw7Ut8trfgyMUwQAWXx58XiPnCxayMfbANAn5BhiUn9TxayMfyJRMpMVNGQ82RNytcrFwXn"
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

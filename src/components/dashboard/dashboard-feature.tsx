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
    "2kxBCu4ALf26hyMkynXrpDRcPXnHvS7RoUPzjJ4brNp6EwsA2VKPjoDuVRRbXvsHm5HHVoLwkqe74vL1NXdE7f1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31678JkcrJyQ94xJxyHM3Y1kSWc8bDodnhWVuoMoWHpkkj5UxVgryUMg5sqp5ZYdHAcueTWYDTaVPdGAuEuonfQo",
  "key1": "dCspx8fF5xUy6xj6gThq7S7h9GDrU3D6VwggB8QJrZQFu9tmuE7cwLxsepftjEGZaAVP6W9RdnqQBELfungffpZ",
  "key2": "5Tbu9A4YCX3g9pXekg5H3veGDxJPhSqXiooTBsPT8XfLX5AzopJ6gcwy9p6UrKb4XccaTvU94k6C8UxaawMKJh8R",
  "key3": "2NFJgxvdw2LnkhhyNEFRJqCNNMs5FA5bYdLc2bQCB1HVZeBAxQvDfu5b9WYJQjJqMfea6J7Y2CuHc47f1ryLGkxk",
  "key4": "4iD5sC4mVrc88rNxUt9yRBQqiEWkF1Cmr29DeBnd1ACik9V8rk1LpGXUzqJcuW5AVZGyn4Vs1iqpc7ffAqE3EBJw",
  "key5": "4neEVa99XFaw88GFC6QCeqhahVvZfPhM7moxjoiJLW93DqyvXSYo9mNoi9uMX5FWtvAL7PKDAnyYNvHiwtsvxBVx",
  "key6": "3iTKTTCvRYTgh893Aio26VCBn3mpevAaKZnxpnvaCVDgpFvgheWdnz1QUt3mSWU5VvNLKTnfHQ6f9FEkx4sW6382",
  "key7": "4qgZcPJAL6oJm9tQgR9riJVNm4hSCEALFfgs3HFPPEyNeg1Ja8eQmQxtGSqzPWc2eGQmYP2A4dhBuKPKQhVPqAEj",
  "key8": "2tKdyqNdXeSBbrGujYmDysbSFo4Ph9ueLDfNJZnrduKwTSVqziZGBdYM4XfL5da2t4kD9c5EmcgjhGLCYYFCsQWP",
  "key9": "sUtqLY32ovTqdu1fYdBLPoTQmg98o1uVdmh6Bd65BkQkwKv8STV188zTrEo4Xw9QukXFaVoeRZ8ZDTdRD3jkjrA",
  "key10": "5AxRZv3VBoHSx8H8bXu6AZ1Qv6xyDxXXHtwjnwmU7QhZq8s9zAyjuJpYajeJZQqenpFU4SP1UWFiHt7jYmrbPBht",
  "key11": "2z4TFxzrtuqxtazKBUR1G5pL2An6Wh2D3P3x6rZZNfNvoHfXKqNRAbZdUtaQdLroJVf7uGDPZxb5DPLyn9pEYcq7",
  "key12": "4hcMAmLVALFKMN8qPJdFhyjHLK29ht6uqLLeuDXNM9qsvAs4RvYk3uZMCj54zoytgx9fVA97VqhwhXYMbcVV7FY1",
  "key13": "2EUiczdsZb5BKpwXF6jC7tn44zRJq8Zon1MjE6cRwHKjeFHqbJAeoqX96isEQLzFFgUt3qsr8U3PqcVS7xfBcJEC",
  "key14": "2M2iJLhdJpCXmfoLkdQjSLLyegJQQm5qSKpwyZhFH6yHsB4kGqZho9wKxbZa2UPv5jXjMADWMpedJQWHe1S5DciC",
  "key15": "5vBQVHyVFrVq48TwDUL6hXV3fCxMDR5Ry4EVuT7DX3xPNR1RZhXvVozJJ8fNFQqm3VQHnbEhHUnPB3PAqLqo24mt",
  "key16": "DnA6QFL1X4p7cuU6ZQJGecgyRJLGM2cqsRk6bQjew2nSAouSqgmebhyCeBbbUZe7gLsCvJ9UrWZLmuaJNw8dsQB",
  "key17": "2eedRa7zdSjfvAjsYvYJuEod9v67SssfXoo6M96DWV4YwLtgNCv4UEkLnLaRmiqLoMxWr2EDBWNzaJJxW7UgpmAe",
  "key18": "5cFBsQkV3S9Midh1rZHvKRp5KGCo5PPrpmSjiXWkqTfC4yY4YwaGbdVDthqGcgau5zk8fyJUDAH6d89ijYsQRjPo",
  "key19": "4g6FRwi2nQy1zYQSSb7veQ1Sxq7z4rfrmx8yisxrspGsornTugyxJbWqWqia3hFtzYB8jY4PBUQRKstfKxJUqs5s",
  "key20": "2XS5FojjBXjFaXmSa7PbiXEKnKEiEZ2HR7S1GgxT7TwgJmy7X972P3Gh2aJ132UZrUALRZ6XMTV5vE6mQSkNdieo",
  "key21": "snsDMoopN4KWsYP5cHcDsGhahzsXT5nZGNxKFniD3qKkbCN2BLsh6utSXkB1zUuNSqrSorXp1dzikb2hRTi4zJo",
  "key22": "4GWLg7Yf8367g3NAJiNhVXmczTkNqy9gn9jK7J78iuTRZwbC3ETginaByCS8Csmi2ZiVJf3RLqUojCJMiY8BbfXe",
  "key23": "4LqPVj3xDgNXYKwquRjyeGNrG3eN5mYVhr9yB2pXDrBJdPMtgstak7EvdhLX5hLntLxqgikainvQwffcxzMJ6Cai",
  "key24": "2Z281Fqmr8hnbHhwqDfAkvSDUUhkwh3aPmiEvEdA1juiRdcjurTZL9E38nwRo2YCNnnboebqBD1Tjts8ZarfRMxq",
  "key25": "26wJm4MSJg17yR5KF5CkiUk9eUvmALFR2m3R3ouKbJhHQX1XXCzWABH2DrDpCTVxRujQVw5Sn5D3PVujtszjZWfR",
  "key26": "4tXS3oaHbUCCzrPxZBdaULbeyaBTxrhsAYk5sVRYxrRXeo2XcWLHq5n735aokkmDjTNvnmcS9Ur5mF4c8LnmHJw4"
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

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
    "eZiTqK2SVYxtBZjt1HEYQGHBEyQaRgLvpb1JCptWFqLvFotAE8J9zW5fxnk8BUNwJ4hQs4FTbV2Kt5zscTqSsbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i2ySd2m5vPUihRTmzq7VVDy99ZFC4p69YNkpCoobY2hozC4TqgjrDdHW8ffLb42D2Qhxz523aGjZJ9PLBLVeRbT",
  "key1": "3THCLRP3iTP8ytnksQttJjeqxU9kHi3UKrTRbqi3kUFEhNQRZtDb8btpu4AYmQcK4YZ4cZZJa6bnMGUrq3LnB9Zd",
  "key2": "5jy4gutgLJ8AmL3T5e1r4S3NQKqBvCmdw3uMcfse883CVcyBPXEqZpmyiwkBFSwhk6WskWmsbJyTyx7LTeav12c3",
  "key3": "44E6p7DkSnyXD8TUwrkmYSttyRkzNa44WnUGGxHB8yTZpZy3g7P6qiw4VQgtXFcHgXoWSkyWuXsQa1UhkBxPsryi",
  "key4": "3289EEm9CyRWobyCJzHXr2qSZZBFShZxcQbDsgLKrKiJnKY4ia5yjAzpxd3f8Ph9udonEpBYfwq6fqJe7FjytJrs",
  "key5": "5ywSkFU6CmwweLvd6hEGucCaJxeWkVY5FXTA2ERa1su931JXYxYrecqEJ94sPqAxhX6hJESWmXkpuShf2ZDmpX31",
  "key6": "4j8BxjTEVtMUQirmNzHgHJ1zRbmnrnE6t4S6YzLZUurZmKXHddtxrtVsH4ECbHbkgvsqiVGw2umhMpbant74SiGi",
  "key7": "3qd2MWiTsk6V2Gz3ysYX48Ka4gkWMSPvaR1ToHwv89hjcciczm1c4kzunBzMALGQ88CkmxKMtu71kfu8NZeNcApk",
  "key8": "2fYdEuu76Sz3BtUJeVpNbMR89s9qZUmGw2BSJbPqEBULCc5JG26B1265xGnxsZqSkD4iuopT5ptjkv1KLgGH5sVM",
  "key9": "2gAr24q4YxahEGLpDqdQfkanzYZCM15JnA7tz5hK5xwrMqFfRQiKWqFqDFcjV1LbGGzqQyhXuyhbpaxbb9pnAdku",
  "key10": "4SaZS4t9zfo8nNrqPJHGinHdqMvwFfX1TeLTTUfx5mQW92sz3AsZ9VJc88f19UCjbbsA9iZzniJRV2rEaUynvG3w",
  "key11": "3CetEKgTahrFzCq9evbFuQ9NFy1ptjSBAVJ3zTbotBCJce6kZ7b6XZJ7YdtcswmrCKNkpMHTaVht9nt81ejhsBwu",
  "key12": "3XaskMAwpLjF6BvUkvoCmN3UqMoZWMjqsaen3MZcU8VVMAC5HuLbrHP5UsnEGbgB8XJZTF3ARJoi9ASsbb864Sqs",
  "key13": "5EvFwv6RaJeEHGxduDCYwS9n1bbC2qwjQQCPHMcBwgGzpKJxZHwWnxi1vjj6g94qkJmtQP6C8r7Hr3cG2XSZM1g4",
  "key14": "2U4vdT78sp2SsqJS6W1XCyawsqHAsTnpr5Rscqu7SiMNt9zudMzjtpDRGTdZNmB4B7LxUm57g2AAXHNnpHdkPexj",
  "key15": "VmkMWUwcvFZX7kFd8d4dwT3ZfxPJsDtss3rznaz6L89AapMkwwpjQRZivZZJZpV9sUC23VywpGLngfqbtyfoRxc",
  "key16": "3dw9ik3zQGamgApmJfEyjyW1c8TdoNDjZh76cPZYxjLicnHk1ZAAj8VqLUoXEMHgD1THLXdW2XZdMz8pftD96A9q",
  "key17": "3pbPVV22dVYcNRm91V2rRQM2EotJytuDhycJbuJNzyjYZMuNfWYNHDDYzCEmwiQiBM26hfG7UMw6Np7D3x3Xofap",
  "key18": "679eQfh12D8TJxKoUy1jwbu69LjkcgGGZHL1cHFkqPvDhbUx1FC7KHM5naM2CqWuFRmG1kXoNUA2ymZA9EfXKH4L",
  "key19": "57EUjDDR6CAGqS6Y3prLJEqaEBv3MfcBUrCemrmGN6dYkGHa6EVSMkfp3G8vS7Z4HfvCe2CewLiUa7Ks16xRW9sP",
  "key20": "3LsYFBMZggDUAVkbvdD732nZSopyBPUG2Fzw8Lx2XvfHv6iAj2pjUhpcgUhFue1rqfvGk3sUHRuei7ZhLxvLfmrL",
  "key21": "4iwUwHxxwgyyqjxGmyNeHke9yxHDAXttpAcdD64sR3ck8crDcNk7GhRisiAxKREETSw56ZUeDy2KDuK796UebJ2w",
  "key22": "5cuBpLY4UCCNwbpyag3ghMNJMczmcg8B25Hmi7FsQt96BegaLERwazZJEEdhBQ63CPPKbcQK2SF87opzaQEZp3re",
  "key23": "2XzV4zRE5UepavE2GVaU9ShYkNUTcgG8LJSYzjypS3wrqvq1cdfWNjBJxS3xSkQuzmJPKysJq4piG5enXHahHnY2",
  "key24": "2JaKqvku3BL2e7uuYnRfgtwaSRbEz9aghSsTqiESigdjMCY8G1zYk5fmatpZLxzLvgbWCYWK6ePBGA454cyccCac",
  "key25": "45JjnEYfrxyGKY7fGfqji52LwpFN7WMTjsTLjjxLn4d9DUiaJVS7tD8UBBk56MuASAqKjDHRQBNsGKr4HDVK3Zjr",
  "key26": "jLQDoKevbwAFqXX9oXvojJWCpjvAbpcTqp8zVt8ZxcnsVJSqNrHgjWJdfDsrpLaskA3VicnVzgik8kk5Et3GeqX",
  "key27": "Zpf79D5S9TeCpbFkqb7FNneTt3v94JjoLrvsfTb3UVbC4AL3nBCjtyGwLsAgEFPveRF9FSNeDDXYLBY7UypMjRz",
  "key28": "25pwpvB1hH46g6vqtxbvJ5dCCGLAtn9K6H84k2GYuz5MTLR7zWcMg8YiNoUs54iqTpvGwLmBEKqcb716HabZ6r1M",
  "key29": "tZCUEZsBQ2ybyTw8wZSVHg683VevYjDRmGhQb69ne1K4WgbaMkCwth2vYRwN9LnrPst1nEsLZUMsWzkqdwbwYP1",
  "key30": "4MzoVj5wH6jXx9NKYu1JGR3SvtCjXXWoeC4VXkKotFkqnzABGeAgxBUpVHaRPAvKW7f5G1mrP9tsJatBxixxEeoF",
  "key31": "2mfrMuKu5XbsMsPB7B59TjhGrJCvLxdbuZGq8SgyyMfC4HnjwgxRzmthJX9kEGZTgoKBBNXVw9q5oGdeZBUW5az"
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

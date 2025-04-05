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
    "2ijbmykrck5q1ufCo2XemRHLb8BPAGixAFeubFKXk92BSJpqCNrBN2j4xPac1CvM68VjGTzDyxKDs48pYSPwC2b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vWCfnMjjCuHrFjZ6WP5CZTSaHL852QKHUwfJFAKpf79JjCvp4BFfePt19bFJ7VvcZxQH4z3TeDgvLkh9dnoRFWx",
  "key1": "x1CA5Tj8Efiok78QwrV4bjtFfX6WKCTpB1Zb53jLZZFQRFL3ynRNXFic4Ws4VTCu5Fh3j6tYbT4BugYapCLnpcF",
  "key2": "5A1hdKdXJ6h4qPmoSSMcjGpjCqkYrm2PY5e9onHxiEzNrJL2EeYUDx6SeWhUXzh1KXEUYqYWWF8p9RZx5ghq8MAG",
  "key3": "4ytgwP68oA6TigZ6vDinRntC7hYvfHZWFkLvsmUhoqomdzRhC1cbn8hNg7YG9hdc5ws2NUReBFEFa9xSCrAodxrR",
  "key4": "5ttKceFAsLeH3kDkMWGhy1ea87u8mkx63aZbsxmSkTRsFK4bemT8eDq1sSc1NhKmRPjHb2HsdK7PJ78TCxQVqVnw",
  "key5": "4HLCLQBUyMP2czHgnUHYGfnsjQc1mweZMh6c1iGoAmkQoGQPERcB619HAcYYyd3DXuKvR4VhHbP9cJYgB2aqWXyQ",
  "key6": "2dcDZ5JSbFpvr3eT7iN1FrNofehv7QpXFSzZDcr1o87eoFrdjaU5C4T5iNM19FVhxKCfCSimUPhJn3kSvMzgTUG8",
  "key7": "2YtN2GZmFH45Am1NjqRuwPHXxCTkKsyDbn3Gs42ejZ9zn3z1vqwvLdias1ssf3Mvan1DpoDTjXWMSYBaC2ZF5eC9",
  "key8": "2GuucHippivoaXpUxE6SZL6KpvuivYxJBKgNgddvDzXo6UWL24kMVhUCtE2Cr7CQ2UxLFGSMJYP2eUjA3xHTwgrV",
  "key9": "2c3VzANUJMQr6T1T3P9naVN56qcesJafCW5YJ6x3EPDE4NWcdBJufBBwwsJjjXM2nhDqdNnRcPL5t4a5rz5EeGmT",
  "key10": "3rRgRPDKGuBPSK2PuxTKtG5sizpQAwRkFvLVNfWZ8sTYJkLZ9bjmv7T8HTtFc86iJeZyypYticnoWHtA4CTQH2xd",
  "key11": "3Kq7YYutCArG7GgRm15uBtq895aqJUAni7VzVu7ag9wEaGz18nssNsrQqEE1k7KanXLZXCe7XdqyupK5FUb7vv8T",
  "key12": "52zp2LsdJAak2fy2Uybbea4fgqSFRVWWXzccirPidLRBWHg9F9286Q6wvNGK3b97e3AHQdNcWmWdkGyWevNzhhw7",
  "key13": "4bG1YRyVaUXVSoLRBTg4VuwNKD5RufXQNerTKFugU9Y2q9gz6wYkdqqje9nqSjBtB8rcSmkgU6BgoaY3peziRj8w",
  "key14": "8Kfihi5njGzeyH2AWgcsA8PCbZZA47dHFPLvwEetb1frgWWCRjXTGtnNe46EpjVexh27yNAm4zjWLVfPFQGAuYZ",
  "key15": "3trB8hGuTZaHisuM6P8uYcYThpoja2TbCk539f4w4wdCDXFpb8oMZv49tiHm7P6mhL6MLxYxJQWbDkEDKiCuEbtZ",
  "key16": "5FL9V52Req7sAKd7MMVh5fsLhazt2C1wrDWCT9U7q65ifoqaqFUoLJ5sPS45Lb83DCdkmMhvg6N2woi8TpqL9PX1",
  "key17": "5kRLJk6d7EMkRC2abDnJsSgve1MCCA7XT5Giq6qVc6osBAGJDakbLC8kZjCScM4FhHbVFGu2nSMqXi4RCevXETHd",
  "key18": "3JDUgkygZvn53mKf9ARsFroUDp1eTUyJAbnAokJr6NAcb5pMZKjZ5nAAUmUBY5uSzcyE25fvLVvfxgRzxEbWvRjH",
  "key19": "3MQ6oo6fWaG3grUDhRSY2ySVcTDsXNLB4NqQDQWvgfcdTLukWX2wycMeNMy5sEda7ymZUQB7Z33kpApgaYc2X2Ev",
  "key20": "5XZziwSH94fBHn3C36kYmpHPL1y3PGbTmG7UQHzffU9oq49Uxi1Hj4vC4M7TPmQM7UY9o9gihg6HDMzx44KozAMu",
  "key21": "5SAywsENtw93wzzLfk79sp6g3hBN31c8VWT297m8kso85kjqpvQEwVMRQTBGBCS5FmBYdkjwdBjMc6oXvFawANEU",
  "key22": "5YDeRe2D71oJpN5BUmFZGKYePR2bAfYyG5L1MhTX9adEkgNNNEY1ZS1E8GdZZSi7ofAtT7Ec86rkse6HQEETfR6W",
  "key23": "65EyfJTqWNZ4pz3pPtDpG9zNd3CiAvKuL12N2SjdxM4FDVdC7j8ZvuxTR1hyTz9bg9kZJTkUriA4es8WQ1bGQc5z",
  "key24": "3969PUhFBADpQE52bQZXhvXFbmCASBAwsX5p7ZnxiiK31SoZhsxrVa6iuNCigkS1w8XfHv7x6pKcnAJkt7Pcp8f4",
  "key25": "5PqdVuVVdc8ijt5UneMpNFzk1KSdFkCGuKREteqvaV6MJM3dDz3vzv11MxYmaiN71QHFrdwzaxG3JLhrBm8n7MX",
  "key26": "AAPJqq2DnGusFyNo1qMmn9FjoU7CdSehPwyLinpkondyNfj3bFaeFzDy4ojCwzQB7h5yRoS3QjsQjLgNKMqc3zK",
  "key27": "3Gb3k5SH6BhziMxDn4QWr18DQgsCCbymbgZw2Lb2AoU7baHQSwPa4yT1jBCe2wzUcZp7w64StVCwaZPujT6grFNB",
  "key28": "oYwnyBFWwgrV1LJ1JJZ9Tu5PxrZnVur55xDpKT4JHfqwR89SMZBz5T77QL312RVQ4UskVCXRj4TbobzJaqnVb2B"
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

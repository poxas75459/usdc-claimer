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
    "4xZzsaisDyz37qihZpf5QkGSu4h7HDvd4JTa7wwu2xPa8nioTcEgbFXL7Mm3bKNCvB91gMBK3k3YPfReKwraj646"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D2RqrRtRowAwmnhtr3DQkheoy5RqjguvtXGEaugMaLeCj2HPuLJxcFqwYVPDtT42oQpSUe7QtAMuqCNtF6HT3kW",
  "key1": "xhvTKyMeBDZZZD8gQesL6JHgY1JD5LoeAG6qCjwQrYFj2pz5tiYRmrT5ycjo5eUvxQ9jSEYYyW2yHJJKoNhPhCk",
  "key2": "41H95tqcQp3YgVYAmV2NDtVJNGvf8fDU3rFt7g1Zx1bgJxy7VucFE9koQcktpiMnfywTo5nPdAag6J388Qant7XR",
  "key3": "3sLVEDdqtZuCJ9u97Tu9X1xod7p2nzZuJpm3uHAQZH2akUAqe6sp1JnARPxokFoLqK1hsV7Qbc9DvJWihXXUzkGF",
  "key4": "46JTjmAvhbuScsAZJjWkTpDXL5Yd7iXKSTNsNV3gT5BDSb9jTKCgkKCCJjZbaukE3YZrAYpwb564UEGXaQAqikJW",
  "key5": "wmheD4aaW5K3fgFRWTmyeUse87moowyEDYqFRoqG97P7eYLh5TdddwYuabKnyp5Um2QrYFEQBWJ5dyPEfJEo5jf",
  "key6": "3Sz8TDxjHoJuGzgyQeU8vasuLMoSGq9kGvGUczygmqBRkv7HeJTCJWtBU9jqa4Vx8sLRJCPZD8XCXiepgJvu9QNk",
  "key7": "3ADn7dZo8YyHdxY6VUckfBebJNWTRKL8ttkmAXPadajL586mgtBajUU7oeUaSyg7P95dWLT5XgH93QEPBm9CTs2s",
  "key8": "sxD785Yo89TSg5wazBAJBDdbE3gTvd2d6A7dRdmHrPdm3av2qJFqARLVhoiLat1MWfsdRSoTLCLFTMFCB1LmBuP",
  "key9": "4sD9tw8i8Zif6ErtQSxNMazEpirbGte3vrprSx9aXjdtJQpVLzb15VBPgvDVYLqRcRvkanmBvkvMexuMTqQkFm2F",
  "key10": "55uUVt5GGJSfThgtG6zHJcziGp2Y5HdYbYa8zXvhoh7D73hHDbsh94aiZBasfapiyd5T87ZmDyLvBwpcRsvLrkmF",
  "key11": "3adD1E1rt6YcyxwHCVErm4syDsDftU7ov38D9wUeKMG9Rx3K8ZAKMB6XZCgsQ23VjETnq3D2Zg2MGXS3pCHjsxxr",
  "key12": "3pKwoQrc8PZ9eFierjGmgcvGUJLdS7oHC1kQ3q9Ep71gJfzJCBBbrvH7Hcua1AnntWJuFjfvJsMEuPapVHKC6cuF",
  "key13": "5ReEzQd59APMuWm2CwcYYE8R2DzBbfhC9S7Jxv2uMMRDGks8bxxTvubwkRWKUVV5GEMpgWVFecEoqMfpAkJerGk",
  "key14": "2SJptEj1tkHzVbaiW2iA7MENEk9esjL2eh3eXHY6ygMvyn8imETekedMbsj1GBtUxevfhVtbjePFPW7gF1X9BsTk",
  "key15": "4ikwzHPbUGGRmgAxVgrkGj2ehuE3HJYVUeycv3e2KKa6ffo4YBvfCpRHeWjhU3MF8U2JPbRKhkXAsbFfjqtCQKEP",
  "key16": "KvDbbFvrtPGEUa7R8Edz8Ad13q743wwf1wucWK1QNM86KSN2iwguTc3Qna5o6LrW2RRfeNZeEUVXseZ1QvVhzc9",
  "key17": "2mBjk3CFYvpGfw1iaZVoevGEUDBi3eMt3C9nJ9CETy9HoUDPuFhKjBegZV4atAwbcCzxSLdjJ6Re4CRNnHm4CsG2",
  "key18": "3DgS9cWSvp9mwpEbyvtQvzRwZ9uvamXn9ESeUAaxwxtD2ZDodShufcDzB7WhWqf39JQeRPsXBaV1atiaFRNjf1sN",
  "key19": "2FeihyaKYqasDfG6pcqo4HYreTv8TchZoJV1mLGSrshhKZDZzd6ZowXBvoetMTi5T57oHas22pyVCzgs4jsfFuJU",
  "key20": "4RngeY1f8USqdajGjLyKzjGbcwfDkchsabguuSM5tn18avWYUQzUHJ34KWuRSWQ5axbsHpnQPyKMpWzP9JFbJqLj",
  "key21": "NzKvLZFs1SV1EW8yLSGFPh5zt2BAfBkAoTP2WqQ8MPmbb7zX4eSRGJhWpnNiaFTkAiqdsXEtTy1J7ZVkY63qs6M",
  "key22": "A7XTd7oC4usnVTTvvnY3oNeLXoPEAzbKV97xJnGfrMkx5RBkTfD4tH8ZWbXysnqdPRYXC7pafnALDY9eFbNfPj8",
  "key23": "66u29KRAX9WktqFB6Jef2KrqdmtZftKQPs8fyVhLwQDntP7MExRNZosWFuX3r5mvjjau774YGNrUnguSYLmeT4BG",
  "key24": "5dLTYAN35bQaXzrR5ZatJLCP9WVUVhfAW9kHBfZcx9AqcZAuzGvbroWephiccheiPtQ4UXTMnS8eLngCgk2cCyRt",
  "key25": "2pvpAsvdxTcBMvxTN2gYRZdgk4CkHMZAt7MDJ6pFVw1BkzS5PEBnTgZ1GWeDZwuKpj1gKsHpjNwMyAHtsdRnrSLt",
  "key26": "fNhb2pPjdWf4HgrvbTh5Y8Bp31bPs9YyYT4MEavNQHEpaTbH3oqunwoCHN8QpHr7SwYeZgY1tz8rKSHmVdy15rS",
  "key27": "2EQUph2ZEir6dUAx3VLueNQPnGTZm388cV66omBciJ8W2pN7YaXsfdyLpRsYABGBgsCVBtrYZJY2HYkhC8DPUPUE",
  "key28": "3UyagdjEDV8zRZjEqYMbL8LQUL6Z9Sua8bNHaA5gYSeS2UG2tF26wtMnbiumG1Xp5bHWr6yPLSkMGtFG1KhdWUp8"
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

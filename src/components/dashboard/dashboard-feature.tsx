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
    "5cfUf8Cpxj1k5dEtmunAuAGPoAc5h7LHyC6QaoXNDF8ZUdKpBXnL3YiCcDWRqhdtnCXyZ1q4ocQ32xZiESe5oHaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9CJWrTUxDpwpK5wGStstJQzxPkp4SDn2sveV2k8ByBgRqVw7XxZkhK9p5eoMSNDwpaP2QsRmnPH3dy225vSztV",
  "key1": "3ZSdpQoTkPaov6xewfxyzfieHZqbeUYuTAxnvhcUnLqoxAZsQXsWKtdJ5o8YBiBojtwumNFAkarJsha8j1YjYkqb",
  "key2": "4TPaFwDftGhUhEH3SfvHQ4DQ7PvcxMFDrhYkHYhQ8uKU6c5mb12VCHeD1uVrPz6cSt2Gd8CqJKFaqYiNcv32Yai2",
  "key3": "4yYLMHTCvomgB3JQLeiYi6hbJ5wW6SAxk81es1chEjSh8t4Gos9tjGHg5DuYA8EmdYbePzvLGjqrwjDxMVnypUye",
  "key4": "4AtjnNwapnYXFUrddqDDMqvDjXZ5DoSJhPPfWj5DToKdUke1RocCumz2qpKw6xKNMLeK4BL9Dpgg1yhWfZ6odD7X",
  "key5": "4PJuYgKEkVgT8CB4KiR24GjmyHCogtzFBLgXt2dXH2w7PS51kGk7NJk2XLV8SeyApb8vY44p419rtRaSrPMgkncJ",
  "key6": "2uMgVzto8STPTRjx31yXM6ZdGbhrkVwrdMhYMxR4sPhxej49PTvro6inCoRiksJZ8AGh6rNNqMRCVG65Je16nMiq",
  "key7": "4UK62veRVCqnGRRrwaMMTVCYZ3Dpy153ET3YGNXzaAfmk46WgFxPHuKsE3dcrP335D7uS79YPdScW5vvcgrDEZXm",
  "key8": "3hjEsh8UF3CtFErhDnKKKNLcqvfzjbxRFsWcNrs7TWgMdx9v2CR8sr5iBBYLiGPwHGTeWNJr5d4TW7KsvAWyDrot",
  "key9": "NGFHEhic6X5UoD9nqqqsLZ3J2P6wYtC2wegj4SWAHF72GPVfxqViG4dUJSymsKP8wvHCNjTfTEUSBYgTqVdUswj",
  "key10": "2hw7TpmNhGSi9kTxz6ZNnUoocPUJBnEJcPH6UJ1QuVAmrR2piHQd2tzGZp4V6gs7qsAUy6q1EYVtb4irAVtWScok",
  "key11": "2MJzXPP4PQ8eSAo4AHzAMHk13k4B7RWNjzicCSJCQtWdENdnXZmJXYFqY6YNDfygM9w89Z7fyEm9V5k28NfvL2Ck",
  "key12": "4tuXF3EKR8V2YYPyR35zmB9bwQjH5hrkrwy9RDTheua2VAcR497DrhSizm28eFA1atBUuFhDhozKrv6NoVibHUT2",
  "key13": "48sZn6vtRM2X5ESQUeCkSVDWoWDsS6ESy2r1vZYbbCH5bWtgX5eFTGZEJMiciHM6XQPc8UhLjtUbLgFkVNgQ9b1p",
  "key14": "4U4HzELpwPyLDz2BEx4NbukUPuFbK4kfbyBDFZt5HmbVHaYMxF6rMtNqbsfDmzANWEF38gGt1uHULWbE8aftnbK",
  "key15": "258zX7zEgp4ifQayNMpCg7KXJDeJxjmLSzeaRLhh5nbcfhB9CPuDoaxfSphsA6pavAhvSRArUimVVJqoApByt9ex",
  "key16": "3RyfMwxVvALofXuYW2QrkRFFNML9XEbxpmE6NVizPoufTeLBD9ZNRJWF1JcrbreLj3XSBgrZKN5BGPLsyAh5W3sY",
  "key17": "2bNVzNfvhabkgWGQdbxhuXBp5kWyfY1xEPDDiv4WXAoS2FcnaBz84mGPpHTWuRP8GRpHJGtrNVqHkjccatXNvLfk",
  "key18": "2JA7wYRqeDuzViKL1mUz7qwRdNYAyafV4LUkxcxJERYLhiPz3CNciDKD85XDrmiUvsHn72CnGd7WPetBHF8TTm9m",
  "key19": "4NoVedFxuTeiqPB3TupZqasNk31tXhjt6772jG9Uk5S8HNxG2MGX5R7nUmS89DXPT2ZrcyYfyN61j5jm4Seeapr1",
  "key20": "4kGrgyd7n8RnfoQedQRrACzfMU15wibUMd4kUqTZJazkiL2wqJysH4aexbwL5YZYjKxwgqqhnxp1qko2o2xdMEGK",
  "key21": "5oYABCPZ81u5VYQq8AL6MZdhvpxoqYxurrWH8s7FjfyrRdkLYMqdL8nsDtjGPFHFeZV6G65ATcNs4xiLZiSXWpgZ",
  "key22": "39verRNP6jKx877cF3sdrR7H382YZWRD1mcEJJvmjTtP9yCtWEosNsx3HJpPYMUZbZRpEF7ej9vowJEEg1Dqbfca",
  "key23": "UpTinmfE9YYHzZQsMXdwpBgrGLCxXHHgSYjdu19HFThGqKRzMTENwW55gLFhQryMxpgUJV1FuwNsuXka2wDdJfY",
  "key24": "5QpmNqnU9B5QoFASMF3VJr96KQ49EUehmkN3JZwxZpGJL4gN8qZ2pVYsZ4oWSYQmS4wmLuVoEsNWcEYy1S1yhDXa",
  "key25": "468VDChaiiaPnAWXUKk2TUejcTe4dP7gU47uJNFa9Yv6zcHb1m8Bwxo3Q2XuwEKA8hiVf1xQ49ddbPmcj7k34JMD",
  "key26": "123J3MnZrY9PLopF7KGJcnFedCMyX1qnYPgPcowV3Zw26aXLVqCrQyhNmSGTG9WTsbLZtwtsrZt8bJiTKuCF45bk",
  "key27": "ysQYLPisVXHFeWt541cuH13f5H7EYJYJHwLMb2LRDum5WrKarUcJTikDcs3P6KQAEDrGqaUCDusuPrrbPPqkkHT",
  "key28": "5fyVP71VpXfQCbCKjh2X7Sye7vG5BXuftEerDWhQzSaVr8aQvA8GPsrXHiiiy7K5hZkhnJpTRGVGKj1g6g2DEWaH"
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

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
    "2THQ3xqBrGc3NDYm96dKyHZnUEoi2R91564BSTniAATtHXBV4cw2Pf5cRQR7KLu5XX6bhgwfHEzsd56sUrzPXmfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ou6HJmx9LB7k1F368FVU2QvhAwJ4Y4jZumYr2qhhnFZromQratD7wf9KEYJyJeXjFho5TJpvHUbkdkxWfYtncfY",
  "key1": "2RHMYFneXdm8LHS3dyJHqEcpNri3gwkZTZT9sqaFs9zcADSRuAebQ7cj7FKfm7kdVaqGzLVhZSKbF3MBKau5ewsj",
  "key2": "5ns5QrGb746cyddz4tEHStfQ9uU7521vbKyxveQmY3RuvvioQ89iXhGuzmtU977ShUMqXrozuu1Li6HBrt5mGYZK",
  "key3": "3XWTEZdxhfhhKYXZvHCnXfvYTpKDDew9PU8YJduKWoNLMgcRC7bGqhGwuRPE7nDUASL62PhaYtopULTncXhGYo4p",
  "key4": "3ngqW58M28hsxXSag1Q6P5VMtEsaaVQvZ89qUUrVhKUHi7XYaVArpDTSbYvwSQjLttq8kCTHkt4QMFbxhF8wmLeQ",
  "key5": "2TMzcwnWv2bQZQsPkecB2WVcW4SyG16ANw6yk1Czf8BzdK6XvbPKMKnNNz9NXaSb71t6JdHEtPjPnSMomoiNyde5",
  "key6": "3oeqcN1232TibMSweXLoFVc97bYcxWXzKRZvLoh3AriPtgnZSKzwPKqATGVBApubdDQhmexo3ry96QDSjDWBsXdD",
  "key7": "4qSj7kVd9fpohoSFf2L67vT7QAVgfHj36s3LKBwNc2FHCnNUFmTsxmfvfLYm9Prd8grugpjoZTnvPZwXLsuNKiHG",
  "key8": "5V548KCxzgyqDX7RAB6Bpta1wj3N8mCXpfrgCTWWfw87RLZC98nB1puwMBFRfUxPHfdLNsyK3hyoESNiVtC42j76",
  "key9": "4L8eCRGLSg2x8LrkJQPpkGQr5TF6iGk1n8aM2R5Ywqj1ULDPbumJsBq16d5y79ozghRpi9miFF6vULVzEg44FuaK",
  "key10": "3ru9Bhn3GSVLka6FrgG2JzDuGvci7d5564mUqWtt2wXAiHWh67ywaBcgEFkftag2eeeCEBVXRbgTWDbqiUwFU3oP",
  "key11": "hbJswv3dc1FhzdZ8BCJ8MQ7H8Mrb1KQavezKXM4DWL28UksH6bwKBUyFhFzXTSPhxYREDDRWCVnyb7Y7QV3HGur",
  "key12": "46GjJrCqZXhgRy8ymWdtKhiVpMo76fMhuFo27uWh8a7dDi3cSuoG8JyvcUom4BZ2gaeAPZ7biX9C2Lm7JLedRGe",
  "key13": "3BUFA9dr2tWXgte3hi1RhqBng3aknBY4iKwX5SeyB2X4U2tAfgf3dZtGE7XteMNsD9my5TuBpSJwxwKpcHxepWG1",
  "key14": "52mkpVsVqDf6tS4f6id3CKqorZkPAEffXEGW6SpsZDao7h45qdSCncALQCjw9Vh2c2ttD1Uq6CTNjxYd62eqF34R",
  "key15": "616mWsSWxtZ7PGFw8SszvREUZcRTeiGq9a5CM8ZsAu99ze8CTXTPi69y4Zicikzp1R836yxSJmuoHBtsMDshRftH",
  "key16": "k1QMZpMmaswTRkYva9DESV7FQXPj4qX4XvbHTnXs6XeYpHtjAG3PVxkggjCc4bM2XthRDvpUAxoqFWYKT8KZk3E",
  "key17": "3rdX9rm3zXoaCojkEzagASUGXga8LhF6doeksKZtd5881sS9GZyxLZL3pqYGiVMkZgiuWqb8odpBScppspX4FRpt",
  "key18": "2uDDVBMCMfzrNXaPGrCs26S6eXPpC7YtFs2zSn5shyPh1fPVfysNX5YW9CiTFxvgXn1QgCYDxNJTgpqV6urgc7P2",
  "key19": "5HcknzmoQDgaBvbGNqPMEzmTx3fHCbiEo8xCUndzjr8wmA8jqeub58Vzm8QgMCw7xjQXFHK7Xr241Vnd8YjVk7uE",
  "key20": "4DE7CxvEjoy4Jm7NjaXyyivNAonMmsNMWfM2FMvzidw8ts6dz9A4JZbgbVYt6D2PTWcumLU93AE2jdg7FkBKdTjU",
  "key21": "iqhzzsW9kdJwxXPVgivnPHDhXP2548TrEx8RJp2i9ZfYhmxdpYd7eNsimbpEsUAnbuXDX8W1reHAzthNPDmumPJ",
  "key22": "5n53Wf1VodgN1maiDr5HBXzcCBXkKg3aTMthkR4ytSAin2kwRuYqkdXGGBhAfyyyV5k7iwZfxq9NHKs2JD9kwMVD",
  "key23": "43hBo1U8iP5bBQc41LgnymP2fc3Hx36bmG39pNkkycDUH1EbSmEYG4KSem3dNW9zd5HXXnjJo9ebs9pnVVdfXzjH",
  "key24": "3BEtAEjx2rkKWszhcaz5UkRWoT4ram5PXvQfaNiZiAAEH1Z9TyG5JV6ax4KebZRqGTUYospWXrtXivzaodrwTThU"
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

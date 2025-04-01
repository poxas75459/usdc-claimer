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
    "3TWNeXcLRfvgC7NU3zzZVNpHFPV92frkGYSkMqayuWVwRnAi6kzNdJKNGHZeuH4aFkAfNxgPTSnLjyUAbVdeYC7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49jacs2x47sswiU8gaYjuUjxytiAto4Ukv4qoXNv961mqe8qeW1WBYnSy8xURExYpAnjdaKzFFJEBWtox78Q63o3",
  "key1": "5aPyiRyNxuGUmmR8RTmxB8pE5FAyjFqhb293krNfeQAYF2WFKVHjgqAe5piWqaum2SebqNi6z6xPDADZaf6tKhiB",
  "key2": "4yGn9duAm1tPrK5f4Ws1TBpDCLtJjatWQACCmVw88GZdGnMUn99JUVcRt3DwqoKwMT4CjyXtnREwwDgkpDd2Togv",
  "key3": "2fFSRGdsYRxV794SvNnWuh4uZy267GdND9Gq8qALm7vjZZSciphgjzcvTpdgSyD7w5qaes5u9EKvtnWMsjZd8LGd",
  "key4": "36K14FfgdJuy5uvcL54yxevqU5mJaxv8UJZyzHDT7RNLVF31rQmhMoW2jAv88AtZCVTJYbWydaQiPvFPF1S49MaB",
  "key5": "2WviUThBi1tdaijmXrHb9tK1ZKr4axSxkCntWtKaMfKEUr3z2sAJXibYJozNeLWMj8QWiJaUoBTGJiLxGEa9U5qq",
  "key6": "5or5SxX2KNdv4yh2hFNQYiNCqa6NEPJ8tZZXEbRBP9FDXtMUkGnRdKS8qGFtTzazMk73hADVimEnrVHACJZ9BbRs",
  "key7": "2mwCs2WNef3YtFVA5s7toB1BVzvk19UxuAALCM3VaAjaKN6uyp5jez99DMv1juqMZ7AG9sBZjdpDF9oCXyGYtyBX",
  "key8": "51YjLwzttY86wJepr4NseU4HthNxGzaW4sbvTM7jbDyLaGERiySTTpPadteuevrGub7Jhqo1SoEzgW82Xy1tPv8v",
  "key9": "65bPRf2SXZxi19HBNPtqDEzb9RtyHzF8nnndV5W4eSi3GgBE3rt2MMW7aMr1WN6rfBjsJ2uuh721H7Mh1xNo5Y1z",
  "key10": "ziVixm2bELg1hgCxi8A5qPdmw5dnX5TWhWyoJ6iyHkPAULyAjgvrh1dNmDLFwt1JCDBsqCYrmptSr2ZbGEG3WYp",
  "key11": "5z8AGrJv8SbgJrht5wZn1yN3NyQjH4a7HTVzdxdsvxHnBYdDstee7Vnt13MgzfDEe3Etk6hp2ZHoBiRpN7YoYed",
  "key12": "5zTrr2PGL4NttXunzjc7uwRBH2aNJgASTvcQFfHwsZFvhtxYMXn5xDZKBgsDAVu2x3cSTbpmi9aq7dzqPud4TMpS",
  "key13": "67N82uxBUpmsqFaQ5Pn1in63rgDPo8LL7bP8TJfkthj5zbF1L9sTGDRGK73GRxeanddCWqZxY1jX8bAFytcKSsHm",
  "key14": "3JDDS8JA1MdGFu993xw3MuuwJfGAVxm3fZ3RkLSGEG2dsmRBey5cp4pzKVUfMUw4nQzx8gaug2FjLYGstRPKhc8g",
  "key15": "5kgayqwCoQWJoMHETe4Baa9kbzErTmSTBTUPnmsPB7jRwtsFGioFv9i2XYSLHwMLfkQuBYvjJWyM2WrstK5xKFwX",
  "key16": "4cBv4T17btZVZdTjurKdU8MJD7iZqQbFw7hjwjzXVcRRNpCjQuYmj2b7x99mShMWJv3t2WAZqHLNWYXVZKYmPBmR",
  "key17": "3csPwoY31AgxqchYsKd9ksgYqWKeyqV2DKrr4EaSxnFCaaV11r11RUbRF2zUA8dA4biNmPQjb2fEWBHehR4Gre3p",
  "key18": "5qwF5nuMbS5xHuzoth2XTLHQjy7AAodJPk7xargwC7VBy8d4425T1jLucmhB8Z8xPjiA62ejbmaRbycTsYaLTsZm",
  "key19": "MTMwouNRNY1wTaf5XGhPTdYL3r5QC8iPdwPW8v1ywZx7S2dRsAJ7szJ33Q4LEw4HHQ9oryKyet2VUwHUG7zuD37",
  "key20": "4CjZB8r7z6RdfKSpi6VRsbouP1T3FftFA7jBXgv51CfaMGoXxkHsQdggpxA2f8BiYqs1Xfv3LqP5xqvtP7NH647p",
  "key21": "28RqAeUjuzc1gccMYqDYf63SRi4QewYJzC7bNd1EdkDG8LQv1aPJxGCF5D8ABbRaTcewdDjEDzBn6RGoPajBy685",
  "key22": "2t4jhMZYtD9wyw4TQTh1ZieNZBJp3GEZN2FdcwriJaWaZoWT3D9ZNPKkgpWETUKJTK2vE2RUQigwFPEywoGmeR39",
  "key23": "48ouMP3RHwzjShjux5KLUWW27DBMUjyWtGd4UWEiBS3H5Ytur5j3D4RGgTCd9uEHMyrWjzg61Dg6jAUEd8r2VXDf",
  "key24": "44pZoofRCiJ4gRLk8ERuC2p45vnuaDZjkzsZuLTenCeuPt9bkAR6NTcBcMqYE2taRYc6bdo3yVSxWaqePLRSsdQm",
  "key25": "2en66vcvKzKsV3cPcc29e87vBgJ8z9gj8uYZxbjWWyxfPQvP8bv2qZyarMpUFHPssa5cBcmx42QxbgbyAnSZ26yJ",
  "key26": "2gAPv3WVRjjW7GTVQgF6EXx9vwe31CaqVkSoziq8re98czs34cqsYbcZjDEhYZhUQUcvWvQB5iwJE3vPaMZKLMro",
  "key27": "sobbLxScLhxxcS1MBj5kWbgfx4ULMahAd6DzQcmx3e92cXXamZX6ZurgfGWyayZVWmd8bwYLh1jbvM8bhfjDCxL",
  "key28": "63WcCism5GK47vg23SRS4DeTeSuD1vRDqJsf4WLkFv32KWcZ2gDU9mxMncmhjHfF8Dk7dC9LBz3AJSHPpMbZ9b93",
  "key29": "4ZKLadtArZeHiWBTfbTCzjED5G4H1tjAuJP8aXeMWeix217wM8rouRAnyi3B1XMP83naTRo99DzL6hKhP5XpLoov",
  "key30": "2uxXwGsUnGAF93aEJedj1VjfMHzFLSFnyhaQn2sUiEZHFMN4RHSL3UztJeHGbez5tAWmfyjcJfvMYYugypdeARpw",
  "key31": "4esyK1pf1k5WCCmX8WtXswPwRKnoKg3oG3EjxEpvxDZVfa25QVHwiTLZYMnJaaFeNqdWZV6s1kmXbXCaDwRmQM8X",
  "key32": "4zj6M3fD47PiNjeSd6eeGQZhdXr8jMCh9wQ9vs2LVurpbmPvKDRvWDqGWnozxiaw8k5U24KwACLKrt7MenP2xeHk",
  "key33": "2SA9THm5WiejfjvWG8FK9G1yM6nA72UHUUc2cdrSfictFrFwcTj7VPgfXd9pWViZ1kCWuXkgse6CVbb1t66bcqNp"
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

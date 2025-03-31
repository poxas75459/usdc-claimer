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
    "5dC8qdjcWNZ9Guyaq8ygqhCAexcPm1L9T7t5DbRutXUdtUaNzvrjsT23X1f4XZWS3dL7Wzvo3KR5VMo1nDRuH9Ke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42nkSmENk9em33dYnsaq5yvCm3ToWXLWL3m4MCcxLaYX5mp4TrvraX2XxHiH4XrtXqVRusj6C3KHBddVv5PE3qgB",
  "key1": "4yonRonpGS5KMjsx9PAgxwYYSrG4sATKN43KYat3Qd34QReFwRe8c5oUgvx3i6ahs21UEBNem4BaWuhJ4PQECFJq",
  "key2": "5KHRzAsQ9uW9KUDUk5gwn9itB3LF1uFStb2KXGSapjdw5ffTeeyWdXoAt6Q2kPCCTZ5jKHS5gdSmhZ2RmkDrLyhk",
  "key3": "3Dg8peGuXymJVt4NJxCvPtCfxJmrUCsruDQ8a74r9BwQcCAWqxUUXamJ297Coe7usU3F2zDe5MuWAXLF9CJHZjQS",
  "key4": "2CyL8hcQwXgbVpdkewfsbcjqw6LQGmb3T8QM1tFy3J1i93XJSqnNRqFouFhgzMY9wS7hRAw4agSm7X6BeshZvkqX",
  "key5": "4UQQWReJNAPHkns3B7Pn3ye4BSFP3rqiuzsE6RbKXy64Ss5Pa1v2btSxPnmBVtSKsDGtKWJpFC6GXetguDiKioi3",
  "key6": "Psiranf6CPZ6LYV3GZQCGxkN3u5vfQo1Ade2vvq4z9RymyvX14spoMuLj8qGNauaGZgXfZA4nfzv2ZZHZxVCZEZ",
  "key7": "GGjREd8WR6Hv8mLmNm2gKHUS7Ao16zzzhJxLWLRH8u65Dauwrt2q4J7g1xxuXchYtfkwJaMeDSQajFtbXhsUTr2",
  "key8": "5bZbvCk9eTGEtWcfbuUCHTtZbFf27UGx7sjaZFaxjvLUGouYs7VPPCosQgFeVEkH834aYKCaZ6du3qv4KVAzADrs",
  "key9": "4iaRE7sNLsKunfbKnMPD9kG7hXtYa9dDA4NErH6bVCDSX3W4RvjirdQM79M34YgYBe84BGwxRQgsS3ma7XMw4aUb",
  "key10": "G3D4Uz1DhU1p3nfA7K1ik7Pg7585QDK6Fdaprw1ECTao4xoLj4iPFQ6FxZpoaR6Hz2VYeUVhd752TLahAR2dBhD",
  "key11": "5yT5uxjxUP1fgzADXJJGmi2fUaP3bM8KYFoyGoW3ndrx6s3tfQEB3dCsHwTcUhnrurf9BGArEeT81H9sZS9UtNoR",
  "key12": "5eZfXLeQJVD7XxTfweLdtWJKdArAVccDmvrFL1hFycEbYatZcnboYP29f4zzPCWNkX2SCsdjwobxpsQaub6gguqx",
  "key13": "4dCsqLVL18nzV2gjFHDp53wej7bw8foeVDd8t68tbsTg4i5MuN7TUxBo9uWEeXiwurXnMgQMSZoPFGkwwjX39xB2",
  "key14": "5gNbFAz6nRoDG2PjeY2pLV5DPwY71vufUyoiJj554SeDuUWKeRtK8SukueHHzstyk2nvQGgfn8x757AyyxDkh7RN",
  "key15": "4cMcuqqubfSufbfANk7KgC2aHuWoa21u9tNkBne9vUVauE1JYzAnHcPobtke1Hs5FeAu43T4F7H7Zsu3Tgvt9t9N",
  "key16": "pYMaa5N28CE3ctz2F3E2cbzfuLRccktu7g7tkQroVJKTS9iiETimgSnBLnCg1NhEwRGPLUcCqfB79HHyyo2TFPf",
  "key17": "BoE4zG8xRmTxFLHFzMi4vCvRK3iRjJpVmoyM82k4A3uWKF3xmPNazWRHhyrykuU6P7fQLgEByf6iegSW7mU1XLc",
  "key18": "2sjgciyukXrw6QfNV5BoYKPYsvpgg8sLVTi4UPJRowTAvZXEWUtNnest2kgxxnB5UsGXJWQny5isqTKkKfHN442W",
  "key19": "HGrx4TfPZT8thLvKKzswDMH8Rzr81MvbasnTwvSt7SZTpjc2idXxaEfyMuEsK97gxmJQB5xY7nhD7s8wzfu2gDT",
  "key20": "45rPJC9EFqrNqBJvJRaVCb12gyhBRvSMsmJ8LNymCyEmcnqG1PPPRnvsh2ULLg6LELnmUdPAAPtWxiuywC3UVjZN",
  "key21": "53qzsTXBtvGzhxtJ3KpyMGpPrrvvcUQSbpb6mU6UqbGXxxCdro5W81REgN5uKfq3hssH7yPKZRE8Dt1sotg11xQ3",
  "key22": "5E8QfaZkLunUfY6SxHVqNptwDEnPdiy89YRSSGrthDwZURBhaQF6v5wwyaQTbBnAwQqEMX1whx4te7NCqqmm2rpd",
  "key23": "URwvSkKix8JB27Wyugz2aSQtuDFsNiVVtMVmTUNRiRNP3mmg6dymu4nAcAa4nHLKbHGYBmNKQRS93sU2D5N686T",
  "key24": "3cCZ5gnmwc4Y8dXZ2xgBbRStHxJQrrSVXibRrDjevdCPaU5anVL5nudn7UAwrunGKERuAXvW5sNatbEstjdCKuMN",
  "key25": "2g47BP4b6aMqA6qhLgowH7p9HRaZn1wVtAeofUaw9hXkW3ov7xpPiUQ1xUi44LnoTdyZhueDXwjQSMWoZXWNamY8",
  "key26": "3ov4oEVHn12mW5gMDpqaWHkPMe15JGB3nYYUi6Fpj96UDcp9VF1ZRUkgaYsjxKkCwmqHXTiS1to65hStqjT9bnG1",
  "key27": "5UvHH1YWubjZ3JDGXJ3ghF8pZxe1e3WACSwrVGbtbonDeufVH5oiKXBLga5bZtocuRr5aFPCDjUVtNqBU1rFdMyw",
  "key28": "29qPfwmBBoa8hxMsSxJWuJjqAQxBZu8gBVbRveLQEbyetaWQJFYF5Uy7iSdN5Ajry8duV1Nad1wtyG2Mygofyx95",
  "key29": "4JuZUUYfizBQyM7eS2711hoCHMhBJpEJdvjZjnAiE4y5gbnqpERqxU7CXRmQLmTqohXFEMzV9vYkDc24VbaHv6pX",
  "key30": "51TLSFn3QR7SB8KE37jJieyQg7L4pLZN2Q91PudVZ1TkjTQhfgjT7yP9vyNSAEo6DcAcminChL9fw9z5GDeDbzLG",
  "key31": "4eM137md7fAWWXLjNbA82kGAStKKCVpnvakgYMKcFS8dSZ4DCtUKWehBzhBj1HApshjL5fo5sqnwJh9F44Q8q2e4",
  "key32": "33uSRqjVCVvsmqMU34Fh6GytjCwSZtXwCN2NpsSzHteKxnfEVtTLSFi92DyE5WT6xdhXy1xWgpuC7T61LbAoGS1x",
  "key33": "4PvUqGMXxLd1fSaMY2MqNDt6uc3LcVzU6HXuacwCssyRh6LkpngMaeKRUVmdj8j6KUK2URFDTvZB7zu14gWjibhE",
  "key34": "2r2Ku4qRDYHdNUgs9pvYJHZi9aDrzxeLpwyJdr3YuteMtkFKSCgdeDRtZVSbrPNShWNZapsNDuBbQZMZRU1CPmyb",
  "key35": "5tSbJfzZgGgkmEBnTSEAbp6TeHA5co6hJFKVqxdnaFW7P5Cx42AwF6Ks5TJmUjgSKR6EFSsypQuAtadDPBmyXe2f",
  "key36": "yJUwDJ2WSQENjR4nTewAqEfJPu6caQ7G4Q6smv2tjGuakqzXMPXGECxCqPzz4vFNfTKF8ZsNtriZaZUyFVtUQce",
  "key37": "2Zy5LrZfi5tqFy6aG13guFfDdFs45aZ2M9QtzA2YAtpeyxxpAuPXmsEW2VzrcJVfAWoQw3BjDDAvnBcQGGX3espi",
  "key38": "3DqBriUvAiWqMdmxRzQ3kiGF3xD79X8J9omAgB4PTemKVgMFrTMbadzmZ6Ut92yxvMa8g6nAH9uLbb5GqhAaxRig",
  "key39": "3AJdnPk6GjNGcL1wAiCkyQAaDEkCweATXsVM6DTm4YRJS35M3j3R4nsj44dDVDy3YKSrshcNTcsTVZXV6LaA4o4Z"
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

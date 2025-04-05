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
    "5LAuUrPYcig5bcPDKZnGSpE14XHeBfWM4ez7yCJhvvRWhJNKTYFD3VMLntp3tvq9RTzuuRbQZ2bvNYd3ZdudqVyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t4Fbwhgw4HvV8x4A2FcrjfioB61DHTiVGkjJApUvYoQBY9R4nDMHodSKUjBCz5xTj9Gg5wmyX4bDjWNh9xvECdQ",
  "key1": "3wwYuhAzjE3eXWTAuKiwaRhMXt1GHwHA9AohVWhHMGskFG6vAQK7o2428qnDQzPfpxUHnTwYbF6mrbHzfmP4jhej",
  "key2": "rvUEgdYCKkgd4YdDx4mKCzAcrcsYEtwZdjTkKowjEFnDJ9h6moDEzgj9SjfDmwkCsca2Pvbv56sv14AeJrrCNxy",
  "key3": "idW5Vbsd3KjPDRscYEZQGHshHJcgwmqB6nhnjrRPLEPPm4y7Ui6Cin72PZqURHQM6Hw4s3vjGuYDYNiYSHfNwhA",
  "key4": "4LsVMU4AzS355xvh6YFdTZKLoyLxugGjJuzJhM2cGKyrnuKp7zmcUgiPSYUNejr4KggrRK1Uwi4hqs6sB3RHVvJg",
  "key5": "rZLJ6RKEHTPV7yEXkjCpVkAJhRjGoGmR8aZPh2gZxsJxHDJemZSxWNtRUzCLcWFJwkcpAkL535VmyGqvUHWfLoe",
  "key6": "4QvkCyu86J4vxuzttdGjwbuzqR2aK5BraDYvwr5z3xNqo3snknc4zD9uFSfUsAdd3JnTaoGVNPM4kPjLx6M8nvfK",
  "key7": "3NPxdeGRzTHVNGao1S1bUe7B79g1UdtziafC2tPesGmKErWG5bqfrc8VcyYAX5yVNA2FdQN2Gr3rDn54iXCaNca4",
  "key8": "4bbAgadjUJuTJ9N6q77ACRGC26QGgMSLPcGXxZsxCXFMRAWqXZvuezuz2AfEXdNZjmcfSKYvhsZynToTk3UpU8Pm",
  "key9": "4UBxUzyfjnh4UMdi46nVdr22UXf32EyP1m9bGxZ8nvhqQ48eMbeDjnGDsSMFv42R3SUKooa9LXAdCbPC6fVT54C4",
  "key10": "5Z2fyGGY6fgjESExs7Y6fNVjqQcENU7qEtv5L8CPJSV8E1Lk2wXs1FD4BaQosGBMb9UEV8XGmzXZqquTbU9oDNp2",
  "key11": "21HBUMKWJvJGDw721Y5fk3SMELUo5XK8bwcRSAs7rZFHFsTkkR2uew9shXGQYiPBSa7gm16n834WhGZPEAZxLVYj",
  "key12": "2z5ojzaTUmi1UcXAcW34nbwvWT3h5aiqd3yxHRvv1o7ipjK2F8YsHRFe567yEn1TvXe49uCE481q6MRWUyJMEtjH",
  "key13": "4THtHc4E42fWDz8BJuMrYGhDPGvJhyvNRn579qjcCAAvTpReQ4KVtP64w8VTZ9MZYTu8yevQDSDPD6XrrfET6rjP",
  "key14": "YxQBCgFigAitmEk2xMTKSoGECxuMNeeVBUDVxNCWgKJEJrTLM2fhXBrprJJDBRf7gHWjEM9a6u5VFCZfXmXdE7Y",
  "key15": "4SmAh7JwX8aKqh8ifu9emsQ4nqoLzLuUceePprHQvEAMLZB1C9sxcNet9Gvm7tHoEh6bT7qJ82TTFh8DqRgSspQd",
  "key16": "BMRQKfmiLB9AiKHE7JLZ8Q6dmzY1SZkERAMhK4Y45KzKCdKpR3m1qdvEWDFNt9pBCKne9wRk4FDwiViiZXBpHvj",
  "key17": "331uMvLH2eKYys6fuGH8T4C5peThTrUtM3A6zHiXHD5US4RiMddcyDmQgeUTNzc7YuZw7oUxTsWjiQpx9MfuZxhY",
  "key18": "4Tdc5yQUTCYrZHMeqwWJbyqpVJAEBvyx88a2FJesUpzMTTEKPq34VTgoMzMjp5rR8mmnES5AkMKp7xDFq5VSBAcV",
  "key19": "crhXn6m5hBzMDnggkHTb3suqLe6nLozSJ9xptWHbfFWTsDiNiCAt4FLMu1J7FEzvQqaWHFfbbat4TtxrxVc3wh4",
  "key20": "56PLbRDhTKFTKYhkg8kTFPQDv1tRGViEV7EbbXQpQHC1eQxobpGHsXgVvzLoooSngzHDjCZryFkxh6HLTHoKHRnt",
  "key21": "4tScJxFpnKMkyF7M1r5aQRQ97ACSRwdQ9YSEkb1tNQp8rpt3JopBbWhff3bn3G4qWGsosmPiaGLCWiBs1WvBmRu",
  "key22": "5pVR7JiZtsnW1hiMxgPduoEmnb4Ra5t6qZc6u4XRcffvNULT1Rhwv2AZ2AN3cNkp2ZBXUffTFXUNxbL3hnRc2c76",
  "key23": "4mGactqMuwpAMiFahuD2Lnb89n6LnajHuMwWgKX6t5qLM6YBV3tF9Fx7H78MhhihcTqVAYqtvAGDA4FaBBBbzpbi",
  "key24": "NKvJFqnXyzL5bQ1BS9jnY6B24vt8yfAD4vkFkYBnfjUXaQQbduoC1Lve3XXu8ZWNXtJTLfTS4FFZQGKh82AkumC",
  "key25": "pQ8uufipCiKuhW3mC3NeE4DdDNUDDEfQe7mrGha2YouQgHdXT8Radt2jjke1KHkMRJmR6iYMNJkHDPTnaj4EvYx",
  "key26": "3s2EodiAWHtFwyGrfH3qKcD9bUp9xDDBR9jkQjTa1VSRQvxRFmBd5WHBhBjQUVqtXZHdfmvkdnD7GqUdEAAe9zxk",
  "key27": "2nGBTNPpkke15HDu2FQ3vsdDmN8wVBL184iKAxqnvKsn4SLQ3zR7CsfPEYxHbB72BoNQrpsdDGXeioLbMzYy46x4",
  "key28": "2EZyXVUUHYXXyJd4w3EsLyNFwpCDTEz4J2v2xVEPyM4C3MR1pvBU3whFYX6cxrrCaitU5gDdaknbLivXet5YRHLV",
  "key29": "3R5XCt4P59NrL4HXPbC9oAyH5qGT2cMFVh2nZxPmwAXAkGZjnCMHV9uvtG9hUoiVm79bSnu91nASTeg3WCADB53j",
  "key30": "26XJZpHQGGDVFshRE7rzhkFP62ZtmWnGgYuBJ4aMSojTAMYEbXoKi5YAXdm49kyyoNNg6DxHYsAJq3Yp5Migc4mf",
  "key31": "3mScsQi1Vq43vg7E4WHLxFigiGQL7XXTxtb91B6iTupLvi9QDtThNjAknBNwoKsYSqdqNfrPGZZ5ccuihWbgKpUF",
  "key32": "3jVanqZwh7tXje22kYKWxwNcEFcmE1V1APaDcLbVm1V4QnGHAtBSspuNcjWfpq6mVqwHwMYRTRVYaHXvFTP6KJt3",
  "key33": "2YGNbYWbuRAQGm3Y8SQLzj9joYA2uszwzDv7rJvh5bMj87oM8GxfZZYdtRVcRXqS73uJepSWkDqT1B4dHb1UERSf",
  "key34": "2MS9U6gK8GwGc856PwsaLn8qMKy4mFNAhYPXZqmvtWGAo1XoQ6PpW383xRp4vKwTQHS9qAscnhHhsQpska8x4wvU",
  "key35": "3F2msGhxDzz8S8gjWPFfPFBCKCkUKoqt2w2fRyNmfsUEpt1rp9fNtN7z7jvxrzBDHGDdqSVQ5UADCB3pZAMGP5FG",
  "key36": "o3cTVAapa5mBFL1YKkgjL4L9EWipj8XFhSnFztLMzuxPvUrhx2CtaMQDNDaYrezsqoXTvmgpAsGxuuo2o3hfxX8",
  "key37": "5ge9GpNVgkZ7GwNM9dEBiBjotPNVpmQeUGhBbkyXuZCEHj56DswdoT94CT2NHff2Wx5MPJDUDRDNhRdaZ3cMjNyM"
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

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
    "2yHHeDNiQ6gS5qMcgE5N3B7Epke95ua3tVJ6zbkPSEYuWzR4iHYw1H8FUfbyea4cZvSy3rTb6jmRjesj1uEmdPon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bricR4gPxtTCNoFsFv5KMYV3ifgqB5tLPfB6Lvo55XPVtGg48ifvanw5JwsjqUf2FYybjfGPFP4eZtykCCpKuM2",
  "key1": "5mW2qeUndSQW1H9wCtKitZyz1ovCBgrf4R8ckPvGqfey4ABdBXdvWHovLKvLKGuNtn3WEe6uxqgKt4n1qKoFz9r4",
  "key2": "28G1kpFVqNnJTUz6W3eEfGFSJMSUd6BLRmb9ffPMa5Zdc8HWHC7C57DXgGLBUGMQgCyvKF3uaQ8wRWnkaT55oava",
  "key3": "4qRs124TpPTLMwmiPWQ6fMqkoXj1aDbeLqDpwYCCgBoSxvo9QgUFBcR1rmN1SmfJWEDdT5jDf4EK38XCgEd9t9aE",
  "key4": "5moPNVDBZWitHXQcxCvBt8E5GsNtM9YGUQCG62A59GjGU7FPGn1c6jFNEBPCaBZVZ22vSxPsh9ZELxUAz4omA4Lx",
  "key5": "3itPHfy8hNSW6Ewdpi4UZJkbPc996Xuv6Cbvpj4yaRyzEU3ys9qEQeusvqfcYLP88sBjfuiXvcsnYKYpEqWF6ude",
  "key6": "4ZoZNrkmqT2kPNTTPwqDpLfwnk5WiBAFEzSDh7TH2DW6VWctYa7R2FV7nSW4e6oYNe2xhz14N4MpHPaL1qbvyaeo",
  "key7": "3dszzKVCLJrSyUQp37BBzCcFfffLdU63vEboD9HvQ9Aefd73i9dzA66usABqr2KJUJnuovH1jWo8a3sL7kp4bu9H",
  "key8": "5adawLvpxrvoxmcLXPQ7MHFFUG55wRq82pJCjiTu8xQsDTV9bh38cUdHH7GS7JU9nMyX7thdDvbsPe1YMtMrKX4Q",
  "key9": "2qghC2svhG2V9x183uF6pwq4i2BRWwvVqgz3UYYDBexvDbM3GajvMB5y4fJXz1BR24E9zK6a9aCf8qC2NZhu2enN",
  "key10": "3XrZ7Z2RD1nA7NppWkVUCpA59dLgUHddmehMWaBrNjyGnFozMjLVHDNMyakBjeVMqytQXHReo2YBHkTXrfJTdXtw",
  "key11": "45dFTZP8Biuta9JArw2kFHNM3pb8FvQEBZiwSYW9ZdLzazkMsyxiDo7pbba7qUXP61nuQVsKb93MjnPwPCWqPHj",
  "key12": "5GcdFL5EKXBcddseTFY98hXJekKRnhrRtVvMvygBm89136zhgPeAQLuohHJg42jxjqAS6STqfUCwp8n75dmjpGaC",
  "key13": "5eFPZQGpm5gpUWTrZzKmZGvYrZvxrhpAD7y3VpeZXtWGYZKiu3yWRgSe2PEMBTv87exjV15rXBE2GM6kGiXiCW1K",
  "key14": "49e3DLVorRHKEr1n6BTE9iCFub1rE6o7DMLzB8Xg8jWgGqbtnpU5DM9fcg5jrY8F48QZJtexY9qcbKWkLt17jRNM",
  "key15": "3i2QmvWig4VTU6bYmDHAsHmkB7zNz1cGZtbKmGraa14sCKxD5JWKohkUkNsXnpDsQBiMo77Hm6sLWexV5ahcoDpB",
  "key16": "4PgQSi3T1Z7GU2GZwViS7RD9dc2Kez4YFtgbwCka4UbyJ1a3ZHSrC5BuM7cudpVYtgNfP7a6jBhjhQTqKXXYSPEY",
  "key17": "5jwSNe8gLPe2ACTRjuLPDeE2g1tkN3ifyZVNm1BgUy3EqCFjEfwzTdpxUdVaUS3vgF4Xcxn3cGe7kLvmUbS3ZkD1",
  "key18": "YA8Yvi8Gjvuc6TuLwCjWvQZfELY9Ss4xL6hV5RbX1fop6mA4MmDL4BVPcWF6vNfWGwk35h7TrLc2eMoKMRxGHgD",
  "key19": "4wdQAAPxnyTdhyb9LPAgvE2nA6CysPd58EjuftpBN4bHmDaurj8LHFzkF72rWxru5MUABEbjRgWG8zFDnip3nFqY",
  "key20": "2epV7g8AtcH4KJNCp97F5MgatYoZ8QTw8n5eBPoE9jjLF3AMry7EBC1WJAFXBXscKRfBi4aKvYjSteBdTVtRp36N",
  "key21": "2yMBZ2U7bhrDVthoweehLcweVk22kBKc3PeMndSXhMXALbK73iK2mXuUWENo3yzqGfrtnN6wg7xfL8g76EpuPW2d",
  "key22": "2e4KAVAph8enkpyVLjFQx5zoopqGqS3oy52ExYejDHc2vcgoyor1iDpDMaBtk1mLb1BDnDsa75V1DG1L4Apx8J1T",
  "key23": "2ZobsmwdrGgyUhxQf6UxKrqcr2wNNuQ8NT2s4fTfCPD9EAA1Dh455bgK4Lzj54pTdgi2nAUCf2faCzF5SJinJuNA",
  "key24": "3UkmSAZpNhu5A7NwdSdhs9iqRTgpaTmqXtUfRwCYmJJM84C3opKAzAYKqbDKgDndjrnkkcYoPnveLERJ2mp72pMR",
  "key25": "4VucStgh1qLANf4BkyzzYU2tbx85c5Mx96su5Ny7cbksLQtVoytr2b9TsnVGGfonTdnTphktoXrm12RENC7ACRL",
  "key26": "34ipPqSTY6bwSXJwEEDbqAh6FdQo4CBSWKgkCoWKa4VFN5mo4TS9mRzuJZQCsR4NjLDZaPjMB9zb9qRS4iYUBUTS",
  "key27": "4QNU2ZowvsGChEE6vzesGvVAPDxeCARaNsw6PJPg5f478Pky4H5PVD2tKU3ghZNuMsxPJntWP7QzKuB6wYtpwtBF",
  "key28": "51W6c6sFuoorAYTGpE4rbrqPuxxDUEUMzRWjC9xJhUqN4FSfaASd9SAj2YWM4mxhaJ2HxsNyyWASPcjZW6EhCjaM",
  "key29": "ouv8c1MPKyd9oH6nKntkSeQZsDwrkUpK8GaAJY8rZg411TvaQURyDb6pKFWhtbkdfvwnGqdyiZryZ6Merb7iVXj",
  "key30": "5DUcv3MCQM2qJKZYoCE8ZTMajFEpt4moYy5wwm8pH5r6eAWBUBCsKP8jgEnYw9yg9iQhJjVFH1SY6FkG9AhmZBFy",
  "key31": "rj6pH3bx23rBcF7uvRgx7RbYzsVzAWRWvtmDPmY9pE89xXYtEb7aGqUfibsiwSWJ977Wss9HEAPjxyLWnSuwDHk",
  "key32": "2UHzzHTHRrdw55w7yNg4kjJ8vbqxkYNdUdypSmrXMMTZJCJb6RPqD5zRf1GpqWB9TTcwoBZ3fjfW3Gi9q5SScLg7"
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

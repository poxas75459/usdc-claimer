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
    "2Kb97eZw3iQUrNsmrJqUZBMhwuJCJoWxH52bs3KFSzUSyBfDq9iSNGMktQ7hYtLSBeHturoVbJdLvBfZRZEj8usK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZFyPHCrAD2CifVZiP4tfAPRKHdDQrUuDDt2NH2BwCg1p3N8ZYUcGatdStmgBign3zditBgq662hfRi23VpZ4LPF",
  "key1": "58Bios9x2S7AMQRHdEmcFanvTZR2UkhLDyR99EdtSaniKYZrWwEgKQArNLR1ae6Q3nLmwkGuW4xzhSMupWnKVyXB",
  "key2": "4K7Nrp73k46CiMHZ6xNH1WCDfWyGkUEoBvLkpf9DtMT1GEDWnbwsgkgNq29aoribUXJxdcjZ9emuw6KmZynrBa5N",
  "key3": "5hP9qTs2UyWW6kKpCyCCFBvvHEbPPVFgFqyza3D6aDznwNjysknMfC1XLqM7JUNMVAe8nRNekMUFuS5dufLxKb7v",
  "key4": "2Po8i3aNyyxmBKhsnEEvgipZ57pxS9QmuM6bNQ9X43ynbpcK6Zy1otfMobHcnQBGkuN5BTMTbDv8pytaianByqTY",
  "key5": "2pHNnKJD311Sha5gCZL5wGRpMF4KRcMeRCwNEXQ6fTxhrRF8NkpJ1diq74cusgqcrSSNhH5USwMifb46WbQM58iy",
  "key6": "66jm4xjAuS3kmTU1c8qFrgmLqcYYu2UFVYhdnUyQDhRcLznuSgtuFTH3ALwZxQP4E2nmShpTsnaazG2w7CvnjSuQ",
  "key7": "39R7wMgkoPhReyuUEvBZqd8XtqQQTFbJt11MWTdRK9f6CUS6SxPHN3Py2hwnvXkDqWnZZjfWMQKX7hQnF9XExfhb",
  "key8": "5TqgQm7QhL1u6iTafwctJcgFo5hv75mPV2uq9kzV5d6q1tGqwsseopihj1Yc2eedSs2FTwuqDR6m7PLfGkkCqADX",
  "key9": "CnMfYWMsBuWkf8j4RibZ61hegMEM6ny1LUmGg75MgofLc9ped7Fgi1DzRwbwetR14CdegEvuWn4gW3HY76ePhJq",
  "key10": "2DCCT8uYdX9VhXypbJ8exUVYjh5TNmaucuF5JYQEriesoMq8s412thewNxgdE4gwBGq7iKLQFvMjrBJJahNZKCwr",
  "key11": "3S4PF5k9ib4GrWr4XioJUsazKwJ5ScQaF6jyGv1xVxUH9fjgjiPkXDo4tJTgoAQZ1GdT95NLmSFMKrgDBxfdJKaQ",
  "key12": "htLFPiQxWC8pmxVVT7Vk3yiTpJtoWx3hJLFfM6wAwpKkCg1B2rh31h7AGybCgxoGZoRwRmq6YV5KH4iarSFfq73",
  "key13": "2rEqfJCBKvnJoQwoxt7gn94pErbk5Xp5Bh4Sg8zc2SBfpJBmwXfbXEzRCYuMCKzqD4eNdMkS3vJCdbzfSQKZMXfR",
  "key14": "4b1cpNsGQWb1ZvkMV7xUwNvNyvYiNaTL6n8TnP1nPQKXmWwMTFXpxUXAJj36ZyMaJhe63veKyGt3aLT6Y71EBWpS",
  "key15": "4EaQWQyRsXD4dpwu2y9zB43eENYQsFqF2EzJ1UoqaLPFTdhFWj3Ekj9adxctCNFf6LuzXVgyqL4Hm4qxudYt2ejb",
  "key16": "2ufW7jcqa47rgu2iJUWnNfva7mm25R61fUa7TMZL1iKWA14xv3p6WdtYgw81MAhJPoJhBEFrqG757EPDdsDyeac2",
  "key17": "4JMa4NU275LJSnP1PAjuSBitAynxq3v9vnw55NdcFv7zRXCvem6QoB27UxoZ4u7yMYMUqN3mSuEJZgv5X87AHWws",
  "key18": "2HG8yAPquzktyumq4gkdjPhPAY9Ex2Exr9QYSZYG9w8hW5UufbRTAFXhCHHHpyXAeT9iNYr6u5wQbxuawCepfY6F",
  "key19": "34Ju1APcRyKGWUrEAQZnbuWoaeTdn31SHLAKPemcij33CudTRY3tzhdQChyRRtz73Qhi4GjEyfMfMZGSoXM45rT1",
  "key20": "25Vj1fKF5NaPyx1aFue24hmbL9bcY5zZu8y2JAmevjwtwBdyXW3EZ8FbJ4dzNiQfVZHSJJJHYWsnHBxF18Y3BrHG",
  "key21": "MjKyUBiCGWeDByUfb2G5saqJexhNWN2c29xkgkHaS3gcppEhBUAR1GwHSiyAogkWUnxF8d8xksKpgrQSeu9RU8i",
  "key22": "3cdEtLVD7PUWbgSuGbTBiPPE2b8TW448Uz4kztFJvNFKvdRfKNaq9BJL1eCyXF8taGzEH7YhGBchamh9Atomcy16",
  "key23": "BraF18FhqFsRALfp5jp2iPwzXqupaKNCbC5nRKL6fmkV9tgEQt2BU53ipxCa9pW9jtqZWnHJB8MetfgW7NrKaeu",
  "key24": "5zgxMSsfQomgZHSPWp3HNN6kgutMDkZKDjmLyRVJf52BBxWoY4UtwqRTkX6Mm9Ro6dCofojZRu7xL2GDbwGaaKDe",
  "key25": "21SgFYUkvDtjEPcpfkaotsE8VvCmmM6bPL2EUweLBHDPmD9wHhWX32ykRj89yau1QF4njgahdCrKn8NWov3keKwr",
  "key26": "58mzbBPz7P2AX5W7k191iDhj775RnL1gMhrFXYhCmhbf7LNCVC6nwxVw7e1GVT5Mf2gscqZ5ZM1MgxQrfVbPY4WX",
  "key27": "HfbRcXT7TkqYyntpqsvH11Xbx3KPQjKN1ZEktRCr1BQ6y1Ky6avdcC54Qe2g1FSA6UZ2y2YXfQeQjjfTcb5WRfm",
  "key28": "3DfcDpbcsTvYoUjLs6txzrbdsCZGthDZ3qJyyGuCsuYpLposKxheEE95fbBvQKk6M2kNYFHW3YTmYeb2fqhVqqSv",
  "key29": "4H7s788W5wHJPavJmFw7CNabx5vMwKtmQWTiJjYVdfwADWvv5cQt1EEQTsaFQqbFfSMtob7BJG7roLoFF1HzozDs",
  "key30": "4Dx1C6cmWatouRaLPdEAthMgPzvJs96ZtDv427aLCAg95Um39e7t1RsX6pTz2CKyizSc2nGdfTKd3xXkjDHrEbqY",
  "key31": "5VrLa3Dy5nD6sGT4Xit45NUB6DEKCJS1ErE323DAWXk4fGonM2qrt39mF7QC3Tzjuyy49KLnbY2qxjuuCyFMoBVF",
  "key32": "52Aay3Ao4K9y92tiU7Y2WRYJa4C8jhNZHhcrKe5jNE9dnrjKLoiAz9GCEN8iqiqMyab8qo1stxj7dGLGLkKUyxby",
  "key33": "3xKmxny3XZgjqV9e8mzS2G8ksf1htra1GCJSGUkzibPaCJSbYVp1a874Rav33VM919ch9VN1sYnsDxeNfgWDRmTa",
  "key34": "3rTBirYwdK8ajMPeZYp1ZLch6MPWbhuaB72nBge6NvQq4uUdEpQchDQhbbhMhV6Lsb5YC7XyKq2toDyKAeTj6Yyq",
  "key35": "2GCPvmEgRJbVAx86NsTxfoczFQEQmdMoo8dPPnoosd7Jd3ftVEFfb9XrA4qmhMpT1ZSfDR15mTcaDYHBXzXH7xZb",
  "key36": "U74ERHeAZPj9tLR4rnBvwKW98nBkveFJ1bvTmPNkmhs2oVqE5ALoN8GupZLK6HV3Cy5bjX2SrhyfUFYn6FXY9f5"
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

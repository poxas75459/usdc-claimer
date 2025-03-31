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
    "5GezC7KExwJmW6f6zfVt6Kt8Saak1S1QWDctehRYRgYhwnH9oLDSp74HNqcME2iH4J3scK7rpkywPWAKZoXucHi2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gS7nuDjUs3zDvXhBd1sQjspyWCHuPswqPDMJuxaYLwBS6P1S2vmwK4evE2i9uUPWf29GFXHcW53qdtNgXvSUcR1",
  "key1": "5Fr2PT4rpq991jrqKJ5ui4fiNik7Z6tS8WqTE99qHwnA5MtRQaFHBXNyfJ6KB1JT3wrNDn5czRZ65kNAGvZEjMRT",
  "key2": "jboyAVX9ZvYhEazSeNF4L7TfdGPmcxD9hbD7tNgMUdfV1a9dCWKSPsNBqMc9kLrwsw3woseP1zBWXavAf4gNgqy",
  "key3": "5ZJWTE6wcE1v178m8ve43bbaYhw9Fq5PmR1SWQpGScYHSvtidE9uJRcPChgHAa4kjcftaTeG1GsNKsXPjxfCf87G",
  "key4": "4h2vQGCMb7Ya2jaUBxm4TbsnGV5oyjAmk7AmAxuwcjGZyb9Xieyn6fdpkdRmuH5ZEVc5gSJ4nFpmncmbYV5pDdwV",
  "key5": "2GcRatyemeSTi6v3PAovmzsrp3sPdDngpds3THbUJP7xSw9KWgydxmH87DWzPxt9RN4YSivotfzRVLWSYAVEvKdY",
  "key6": "3GiHd4kTV3cLXsZCebt6SQ68dvDw5NzyavrEo6mVLrFBx1Lovvy6r8JhCb3Vc51utaxW68eD9c99FLLSwTH7cwCQ",
  "key7": "3xxxYpo38jFrJzJfi14zQ7twHT3bxorKzWpEDtn8w6LHzT1umRDjEAk133Foc2ovPxHim1RbvFxmcambbVKLRSc8",
  "key8": "2JPs6XgMa4nZ7xf23rigLBuMVmVULq2MEVy6brJRSUuZeF1bTJAbTPRWR46v9puynTQpS7qrDrbe2KnT4NQKwAVu",
  "key9": "4vayKqZYUcWXHcY27rsyVVn8o1Z4Z1tS9ueME59tzVwzjympjL4L5D2LRBnaTuKLKg1wtQUNpSzSsztUNbxCjzsr",
  "key10": "21sN2rNRHCzmMVP1kHex5oZYHo4XWa4U6n7FDUPSSBAHVmW9Y8jT2L9NG92BmqopTHZvFeRDLqAf8UpD6UB7jsfF",
  "key11": "JjSF3k1DwFUKaewmHvtAVjAj6uBYri3j5byEp4676Lzfqf8A8Mi7fdvaYZiecmR58mTsaYJ5YQg86fmdjwWN8dR",
  "key12": "533bMbKrZSXtCtMoR7qqpRd95nRo1LaM4fkCEmbkN95zW44V4u42w6peKN3mUaJcbBQwvdgjU1frLk93bLv4nKq6",
  "key13": "3tT6xBizJntyDfH9idUsqVtuYJXmTZXKBUN66MSCAXsJqFs9w7ZVPa2CUbF9oYW2HWVipVNsozUyorWERAo5Fpsf",
  "key14": "3jvQhtxp3e884FmyjtB2G6MF5EhUAidoKguKRW2ksTsXWRmmXwNxGcGuabMEWQFX2gZyhUBtxe8unjyKmvSNK2hq",
  "key15": "49x3FEV7uSsZnCCewDk2iuEMSF75ZD2yRxQaMRQcZ6C2yjPY2myVqPe99FfDYtN2BYG1jV2GZkgNaqHrSsuqKwFp",
  "key16": "3dvL2TKFuZjGFiLob4xVdFfZrgJbXY2YDuvo24UcoYx1T57h9p3XgUdBj3EojeqNM9HBtzauP5DhWEdNUjpEMGv7",
  "key17": "5YFdZo6bSSUFVdVMmUbJnEoESxUUxX7BFgN9YwVwBMtD8AFJBWzPeTf8buauw4Mc3wqk7K6Azp7bTZwpegiwxvN",
  "key18": "239KJqVUwBD6shoDQd3ub7y3Nd3XQmyYALMCCJcGp59ZP7yAJVRoFHwtx4iFJekNrhPGaNR79Gj1FHoc6FYCjGxt",
  "key19": "2ewy2nKz9gza8apfnMbGKbocThhbuG3nHZyPwJ2uUJ6Tvv3fWjfTDpbwiSPaYN1EkGSTA26guzFcStnXtA9H1mE",
  "key20": "4s59ySLPNwF4tyFn2yJY2c525PKqnMwwZcUfjAeYt3BcsEq7SAj2Gcs3d212G7k1yGJUkh1fCDfJrZ2619498DW9",
  "key21": "2RF6WQv9S6NxKTqht9jPa1BbccAthUENn3VCzdwqfAPuQEoKMTTCM3Yux1nNaspP7EdSukRTr4624zB6rB4A2J7m",
  "key22": "3QKiZApdY24V3Pj119VkBNCnNfcJCDHn5LP7zH2QPK8cNxi5dunFauQs9UJ8AzNFCmoTGYTCvDRw7bz75e7MMRdU",
  "key23": "3922c51CigSZnxgWrVeoEj75qzeGY2eXKSsYQpxUQsUECUUyWXUkHT1oXRe6dkHswNt2rJNXgnm4FZr9yVEywUkJ",
  "key24": "24Gh2WwYyJEwBfmuzcCLbGACqQUMKzAnKe2ANZw92Yb56zTEh5WVRBD5X8u4xvr6VmKWUJhaRZdJjRjEg9cXAnWi",
  "key25": "2g6R6Krde2UXFkg8cVw1aWb1NkyGPap3XvrZNUKDnoGJXX4gQfV9QZjWUnJdxfnJhA8m76cBAoVXn5iHdM4Lg8hz",
  "key26": "4jeTSHq5TSTLtSeaV63iFdP7zyijet22bVeC2wQr135rJjodWq9vdCN1FV3gnQvwGS6jUdVPQDH5Z9bmXxw6Ykgc",
  "key27": "pcs622dZjEK6CLvVCRn4nrd11Wj7geLQkoe11NKFe55XTawQb7M8mc5tH4n6wPCzPGYMLwXhXJinhgVqmvDg9Ec",
  "key28": "4bRbqj2apbMaAjdgFmXQ54UnYvNo39Zk2mEgsNZo3mrg6wK9Nazu4izVsyt94ZyvuUtfFc4TgaA8CMEGXbJcVR8q",
  "key29": "3qdNL1BUz6sSTh8f13G2BkPfeDTQwTYSWFEQ9CAsTTnyqZcj5SPXxZJKkXovhzPmjrMtWetyNfFU1wqppYdwNir2",
  "key30": "j4LfA376hpB3X4gUJ5SEjPpamePx5TqCYKYUeD2jyUSJyrcFz2Ze9u8L8fqDUcfNTheZYd3SpWDnq7zu69ER8bn"
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

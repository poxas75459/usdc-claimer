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
    "43FRM6WEeCfN6KuAU9UoXN4z3KpCinwGLCEccBxAkLjitjrK3YTYEhg8zZFPRiUnLn5QDqSyGiSkQirpQadW5n6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "otNV2E6FV38VaJM9HujDp3nKSbYksVR2EKVeNFWjr3AKrUx885nBCKCtmgaqgqEeAhWwm5bQxswu4hUVV45kPkM",
  "key1": "5cHybAhabXqjicTW54tptTqufEmMJdMazAUppFLd2kGnBeP1pzcBQJyUQfP52pnprzAUHFVzo8JiG6LErCaXrG1t",
  "key2": "54zWQd2HmmUtvmzbtRdngA8pR3yUvAsL3utD4se5SvRKyWU2x6HftzRsuf5QFYNDSajNhZzQ57h3mTnSit3tfsb7",
  "key3": "3i4yZn53wMmScu5sBA8cWdF89FNqDyTKJ9Fvih2np6oPY3khUXT3ztkskk5sKypEpquvemH87C2DnyzzFt3PUCnk",
  "key4": "HYo1E3KyDY2iqd1iGcB2VANHr5aXpEn6rQHdqtdL51wB5HURUCYAA9kacvuuvk1rTgqShY2SGCMwsY3wAS2g8fm",
  "key5": "32YZms84DFBZWcJvYeUpkuvQRtsfM823xd22FqMSeMVMRTvapUgswbjLDGf4facuFAwtYqwUbmd9TfQuUaX2S6Kv",
  "key6": "2dZGDosS4RopydYtWLecdMDBcsmLderFakuZpGrW6kjSLp9o5TPSAEmKoEzrDzD1Y4FTn8yH1NykJa2CgLDFScdi",
  "key7": "5GpzQSWKS1P6wi62NDugvzySipnYHPaacuepUoebKnk6A2CGc3PeFFJjBcLuepEMo2ezaqpUrAukZ1yERTaWySJi",
  "key8": "QhmesBmPnRE3Qw6brAo2Y78mrjjxXzFrRYmAokLoMtvEmGGRS8xvWq4vhjvM4qUbr9ZPoRCCnJZzw9xmw1iQTo3",
  "key9": "4GcduY4PRhozGxkj295aanxDt9vVi36AfpxqL5mXVCQQugfErhDtUR45pS8h5e2VM8jAxfc4HRwcnczZuiQA25Jm",
  "key10": "3SptmxaSw3P1X6BdPcdgLM3bh223tXqgupae87ev1PYP5GtQbMNpDzqrdJPu4RkVxTuBxhjMa2LSCTMJQZSospfe",
  "key11": "4LoueQfsSC2wdKc7KGzAG95N5rdsE4xb5T6PGYDXr6BByJqncMBizWYWLD7qjnBvLQYcTWpiFaRPvDBu9Msr5Lry",
  "key12": "4sbpr3fkHDNDV6tF1Tfxm1j9HW8mvyo76R47Q8VUVtVnURiteNmXMiEsp9am4SCwhXrPWvAzU3s6ydTe7Ngv5JN4",
  "key13": "2sfjjHBAjrBD3m8mXj8FuTjXdTgpF9CSdoaL5E3S32zYNhquG3CRhWBbNH1qMv2MpqzDQk8NECkhcgDwD7s8e3PX",
  "key14": "5uFHqTBALPqVQLynf9NXZdKj5Rsc5bQqjkJZnXGLVn9UWjPcij6cX8udJPV55zNLPPDCDFti6HVB9oE1jUyDMMk9",
  "key15": "5WBH5rcBFao3joyz47iakT9GABYxVrZRMBwzznJRp3bBvcMWaZgYzp26vfnMHqyuzwnGAmFas5sLtjXGRjxiyksD",
  "key16": "3jrvUxaaSc44ZUo7bE7MWjysgeK4m3n44zBpxmtKi7JZcsNFR3detvnq37MB1anxJ1c5N3wwdLaRYDXnQnMGNNgV",
  "key17": "QL8txrDXcejSatdjp5rBBv7gGLjL1GPHuBJPr6QBVT2D1Pb38a2xqtMUqQFdBeZbGNkfRVLbnkyFNGdGqYwqfDS",
  "key18": "5RwinqrcVv2QokXTSgNmEgGaVHtJVjxY1ZuVHNbMfo1wrKmijd564VpU2Asv1XsdTMvkWkxF5vCDuhzwHD1tzcTc",
  "key19": "JFp91U6ei8bchqK1XupzMg4DyZVxAoqQhnowLByfn1ZUNkjkwZHctdjpz7cCFYoeV4v3HJ5TaknFap1A2fktBgo",
  "key20": "4uusZ7TrbKTDAw4RUNTj1DBTRGzfYitCZV84SFgRG2YAHh9Dcyg19RsS3eCRq8We94UnnVTwPsZLybvwiMi1JUH1",
  "key21": "4Z8S7RRQ3N6fuiGXuWzgZNc6BRtCUpqFTr2xBoXokmREfeHgV8jLmMEbVeLk66mVsKJ9gbdAZr7293ddx4prE3bA",
  "key22": "4FaHTo6iT11xBuGC2B1f77RscgitjDk6jbEwhqF8HsqbgsmPpVmae6BAuwpBGyXjkZtcYcAjqrLDgh2fkrJd2s4y",
  "key23": "5ne2StDG7BggmfVyMWTCafNK2nqnLJZqoWevWG98sbuPG2LLeu3kgAi3vjimfkpSh1wXioPzDn4TYY5ArBFTV3xZ",
  "key24": "5oHp54h2Z4Fp35EoDLeeDzdGgbLWE5T6AL6tDC6i9diSrnFchoia6mxA7mimMkyQxqHBwmJ2VWjrQTDQwFdK1zZ3",
  "key25": "5DgRfTKE8JDkUUbR6d9Zt43DN6oxsvy5vKXkYZi5iofEAcqD4bhRrunTrPMfmBvfxWpuqRcW9EcqERpNgaPPTwB4",
  "key26": "58GdbkLCUqHyFua1t2GC8o1ffyBDABPFUMSBrqcJLUoK2xW3Uvcn1pisvGuLoix8XejdbJgwSTnnH4GWLQXVtqR8",
  "key27": "a3XUtBV8Y896Dq79hKwNfHkYLkm7mddYwRuRubNoPrdRSVDmxFu9JBzNctFsjHFk5PCLo6ohdKYi31YsYyMMTUr",
  "key28": "2brjLMaGWoKLXB624jUVvLUd1JQVhCDSPjYo2eALFTmsNofMfC6RqHKoX4UwbrHLbH85tznu6d9qXhiiDVezVYZb",
  "key29": "5LotyiG92qSPzTAcsLccVMAU6jDsFpVd85MMnEJXcvpFgUStuySHMadTpwwC7tQ2sxKXKRp1sUCfRJM1R4JgweJD",
  "key30": "QgBSypUV8GDar3YqkK3b64ci3rL6ydwFhj1ukSzkyjDet3pdKiTzvHQxEPoeBs7CwfLeXHoks5UZtPtHUgUk5zr",
  "key31": "5x4SGWB76NCKzfgHrNZiBN5vGkZyAShEP1fVHuYRiGHQ3mmZxdDsAMRDdogwp9XGrBXRwjiJUyCjZZYEnoBKg556",
  "key32": "2Pj6FhffcaAkwCsuHqHppo22dfpFK7pBvh1nSMLgYD5tpV7JfyH8mi4HoUC8ZqQhSeFpFPHj5xPjVxmEZsis7vYw",
  "key33": "5FXCaZ4JZTRsGrZopA8uRwMgvWGxWcBAZBZoBmn5DuwTarBhHJPdtSocSGbDDTPd7ezEFU7uoVkMgVtwpD8tBTH6"
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

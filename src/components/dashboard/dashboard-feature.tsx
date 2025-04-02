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
    "2dLQbMKfgTTGAeHKM3HhN4ARwTcBEVmjXRLBEMAsPHtUbbvGQ75749bX8MCYFdT5rwBMWfqQai8s9w7bbaYbqYjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G4guDrhYvYWMX8p15MqzNZysQ7DhuER7ytM3QF7A8rmfbDD47HpmTUf6aiVB7V6KnDfjGUGbojwYYtU1PEgqqhm",
  "key1": "ij61DX3KVgJ5PsH1xF3izJV1VjNbr5jfmdchAU9E95bDzDApEKtkXBNQrg4CBSdktubTAaj6CXSTXMeJWmV6BUN",
  "key2": "3M17yhqNYx3my3mVQidPYZUv4PqTcKLkcXJD2axGj5inkJsMNydrFUDuhEdECbHdmBRF9YbDDty9SBbnuEGCYGr2",
  "key3": "5DVRyKDfB8b1uTptZ3WDA2CoPkW3npp6T3mAvNeCa1hxFrYEQUPQyV41b59oDJ5HzriEdt7g3y8TNGXEnNkRZYTU",
  "key4": "3og5ZmS8sjpAftzdJ61ePWTm4p7ntP1C27LPp93jjLQ9tHFMzAkRLhEkrc5kJwjpLum2LTGnHoyuV636zeEvGgoF",
  "key5": "42bySf1jqJbqxQ4f4Dvq9Vq6uEDUkP3jGUKV8vYroZF99xB7PdkXDZAoc2gS12J9tX7uHryvzSTEgv7kJJYgW4sd",
  "key6": "1BiBBtMggoJLX4aVdw6WMZdrzEJ5sZwWkFYP6uTkcSJdZQNxYw3ms3aT5Z3gBT5ctApmGpwDgQkhpb5jW7GiQjp",
  "key7": "Q1woHexaLz9LsK5bzpRLaJE1ngR6t5HPPT3XFfM4f9sVJQKuSLL7UqCg3fHxoTaXnkZWYqZ6amtkqyaGLvZmXaw",
  "key8": "3tqog7W9feS9MBzZYuyt9n4JiyYjSMgddieWJxyYGoKJm62qrpNLQRjD3UW9cjpY883vwUgX3goj8dNwVbEVRn1s",
  "key9": "fwGUFRtxh3pBcXm7Gkj7hFKcUhT7sHDwz4fX1SNhHbUKv6gVW2hpaJQUj85ipsZw3gMyQGWPCt1VghS24L6L7Qq",
  "key10": "7p1dQM1PqpKkTgXhEVhFpGniKyxSj2q29rmLwDBQA3b4mqkZJjAf6gUsfCxHeAYpPL36AJCyZiVmqNL2pxc7FLu",
  "key11": "F2EhBAteQKdaUUQXPF6Co3s2GmUivJQdJEfmBmz21waudTtJUtQBjuiVXWKUjuATwhcPyWaUctSasgFLYSuzwDZ",
  "key12": "2dvDAvZiUkdgE8NnzsDsU4ZcnoRAf9SnsLJvaNEVcY8BWJHRs9xzXEiUDgegZBLqYxgdMNaTVBSDeGESEzATu1g5",
  "key13": "3ZzQzXzziTBJ2B6nVgQFpmoqkrwxgBbm3YuRzB4mEaUZ5yAaM6SxMY6ZEpYXpb9j2rvmjrcJHHmwJ3DFS2tbaQR4",
  "key14": "DPApeR6j5CvqLxYQJQSuEFkcQEAEsEnKKgvU4YeqzYuVTmihQ8ykCTHAPUvNhrcPZxUogLi6sdGPAHQKkC6jEzt",
  "key15": "2oseFED96apLB89G5RzqiuDdPxHWSkdRgNsBTd4UHhGi6KGnWqZcf8Le5Ga1noZNK1oCbDNBMEXHygR7XGEprs4s",
  "key16": "2QPA42ocqgnZw4qjV52iWJgbrECsGsKx8iMNXjXkF7kRsdAi4MTDZpT2wg1zV4chvf96t2iiQYLwFEEf73T1XFrs",
  "key17": "X5mztiRTKGdYg7f2gK5g9FQnTGNckqqiJjYy8Ltfx9vJsp9LRx4JvYmZJPomGVffBkVohYpe1nBbr9ZBJ81ZG2S",
  "key18": "42fMwv67BnqVTaxDWbs8kZTwWX9BdRVPXot2kkAhofPeJ2F9HXkQz6ryqyDGHg9PHriJdU2AA5GLjcs9DjhFJSMk",
  "key19": "5wKoiESJLjrV1Rhi8jMNsWiMk9V4S975JBGVYCRJPv3mpD3XM8UKaYvoGiywn2zSdEKDNGq2skRRzBXVaDLxcuqb",
  "key20": "M5c5qM52GGjsZu1NDWQXsRyM83sbxiPi3dMpiRcQSd6tYTDM8qdLN8hrzbHdYNYpQgUm3rbYNd9Qg3VFAqQcaKt",
  "key21": "6znhKNsXY49QBW7Xwn1v3ChLsCScd5nrU6mgLPSRY4viSHstysPxSgRgSzCfDLQ6S3rZT37psmUGPFE7YG6E6d7",
  "key22": "2XNPBZAewCT1GNzE8tYnbA8oXuJHgehpDPmrbeB2Mnk4XVqxWAHSN9Xr6s5aVwjMbrTCVNnw3xoDYZfKGQG5GtzX",
  "key23": "5ZHwcsyNvDYJz6KWdtucnw4P4Hi3Cba3GeMrhKfrWGraR5AUCpp9QzddTo5urfZ64LSq6K48cXXEirnwwDgmUL17",
  "key24": "3Vg7x4iD7Uf1eHr55tEA69z2R1rVRPLEtyqvNiQAiSmD3LZrQc5JRz3aro7zkuc6im5Nyr7tdSkY3K5VcCqrxFte",
  "key25": "3yn4cuXMgfZCqx3ANzqbP2MqSvybqrsLUyY2svL1az6okbtzBo3dC1y2vD27q9FteMk1AhPBPviNLhe1ovHVzqCJ",
  "key26": "5mDk8fyX8xLctBYGa4c4d5t8efUMYqpdDHTtqy8AKy9NBfFHTkFRGSfD6GqzBw7s2q9esZW3GW1DJT1Qehr9yb7v",
  "key27": "2CrLxAG2f7kYSvNfEDFTckatVqKpGJYiPTrpgGuGGwsZ547ZhpWF4cn6Y5qWzXapFRiFAhjVJSZkseS68iKFuUXe",
  "key28": "3Bkwvq9kZLUdDvrRspwDMohYeNUgd18s3BkJVGGn85JUVUQu7SQWHfzH4rhfsAnB9TjENUHW7DVt2dkHN56tTLCZ",
  "key29": "2fxc2Fs2VTceJKPY3KBiQGgpFvB7hHH5DHoWCZN2RMm8dBmPQmMC5xx2kGp8Bc8DeQT9Ltghs8Nw8FNFj7AMsWva",
  "key30": "2Z2oEsmcJgScBBDZpGSKfonGw2cr2tjj7E78oMxnjYRhwZ46Ps1ukdrD3K41zVd2D8kcymo5WapPWP4FMd3WVtTq",
  "key31": "3R2NtvzeucDZDF3bhnZewXjDmTCGJeKEbmAG82VP4xadywPn3j3cw6foV65bgLfoPgUpACpidZ9Bx82diSXC8zyn",
  "key32": "3pGmXbbfzzPPHdiR1S2zkB1pRozJrME4r2dxeJsTjvYxqnZu2nBMyfEnF2cgeSRyP3Ap5no22cUBZnJVT4CRoP9h",
  "key33": "28ZkHNXjXAipFPvPQuAVKYGcpoQSWMBXsnsTY6FaRNbn8xxuPpSKin6MGzodGNYnQX67xkv95fgWmEGkVpEypB8M",
  "key34": "2gjGE85pE88ReWr5wGG2o98v5sYe3XkaPgXGKfcraJYrF9ubhJsSwMt7JTcx6Cj3ovW7mdm48e1UV1QzX97nEU2W",
  "key35": "5XieBMRc7cYtrd9viAcMUBuYXsUDqTnoNJtpR2Sf9yxT2btitwegtQFpwPrFbAaJbsaki2DqXLdjqGM96WrX8jzB",
  "key36": "7oTjGcZ31ErxgTScbkHB6qZrczW83wUiDpDuKTQ4t1iT7VcwroaCZxSLtZjo3UEr3TsQNEvp7MP8HPKPg6GgPK2",
  "key37": "22m8gNip7H92EapXx7ZxypaWeZJYtvQ9fMQCBk5oMxgwd6qUWy2viNwc1QJA9C6p1MEmB1r2iYvTcDNacEapVdae",
  "key38": "2zXAYnUTB7by4L2LTFrapd7sPt1VAdKpa6LbMPXtkzLvCYjgLHiVonqJwhfWVzQjtqUD6n5uYg1gRqSrX2CA8Ys6",
  "key39": "3RS6DjUxiSmasXCnKp3Do5k12uPJShEVzbmWuDLEYvX2DGHuSYhBg7qmvAYx8zn3YYba5XtmfTeMqt48BNVEPHnG",
  "key40": "4hgj2HyA15ioeGxjiWoEm8oMFu55nt1C78R7dLn23u7GUY6bA1hTCCKh12uSTdSvTEiR3Q7vCwVvbc5sLi2b5Uwc",
  "key41": "5ovzv2Fgba8jjh6TMEDquTbvZuQ2oLieFdUzHBDemhF3jGQZ1NduvxA7mYqdTzypPSoUgGXJWSzhzSKCwWmkeifb",
  "key42": "4eTffxd1p9Aw8S1zSLA9eRW5tv6aKzWJhsUWdnttHAAVQpDsMVMdbnro4BmmjfvWrD2EPhPRmFMYwnaA5wVeqkGo",
  "key43": "2VFnfhhBhe5UWKwKw9MsoMxhNQqYgzkSmdXuYoXCDzS6MEnrpHTrpjshJ5wX5yHbtZL8KpQ8f4GsqEw8u574MMAT",
  "key44": "4JYc1ddTY9yj2USvJtt9HJUdPPbRG9FfHJGnGCqHPhSRqC1yH7SkFFQRExePLQWEDJmn2tx5drevZjtc3NnRovCx"
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

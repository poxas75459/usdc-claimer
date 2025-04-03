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
    "32gzJMnnAVzWy4NeNfpAiQrEFv73tUcrDzDWNzHCcZ6ANeZGiaKDiJXavLCqdcjtz1TcViDbfPCb75E1tjVXkHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YpPCaj7wEDyo72t7eYFADpxVEKTuzHGBQudw3n9HSYTb2qcMqnU3QDUQA143LhAsLVs2a4AE3iKtCaHpbSG6Pxx",
  "key1": "3GQsEa5Xq6mkzVbJ5ADitxzcQTVp5PQ9FPQaBEeuzHRH9ABo6pt2MysspkW1VzJBBMvhKASN8d5QWZKU9644ENuh",
  "key2": "3rxGSu5uPeaQRSqaWURK2zwccYcmwLbsEMEeDNaQRVde2p581d1q22Jj6Zq6B1jASA4tYgz5pkN1oSxASJGe3WAs",
  "key3": "2bNZf3SzCuAJZGobWghQUcc821RyP4gud9hxvpfgF2Pdm2253gw7vUPN2RxQCckg9BtqPmtyadwN87n9zjAf99gc",
  "key4": "2fiNqb5wbVGzdApuLtXoScJkEeZvYR1dr3VTwkBozSLpoYQr16ijM5JhAdQ8Ar6y3cUfaVxEGvdhHyNVBRALPvnP",
  "key5": "cwjAQpGKheTx1FSXSBWwWNyZZggyS9UY589rHCFuP4RVTmb7nuQiCMCor9h4gvGDd7ar91yAtmx2NsMtjHocyUb",
  "key6": "4ywp5tuy2XB2aSxPvM8LqnqjZDJh1fMs7uyoiz3f9KQBp12C25csPsmdTj8vTQX8Yv1EmeFxponLsqChuKwPQ5Xb",
  "key7": "Ag1BpnwqtGAxDXPxFwNGsXK1EkoqpFFjupGGdSWLCTWc8gsTb45LvQsTC9qVJGRtNh7RcdiNgfqWr2XrtmuLiE9",
  "key8": "5VaztH7E1iYZXwtmDx9TRXstgosNSNSkvu6fDqrwPGL79Xwfhuy6WLSjxx71p6AvsyqUT3J4EY5iFLDpGfRPPsao",
  "key9": "4fRMkLwud5CXJJYvDD4tkzfpCtgW72rH4wLK4nKoeo3FLhnAvBrsYNgMbi1nJZvj9Z956n45D6wwpVQPYi46YufT",
  "key10": "sDs7JLWs1CnTZZ8raqhdMLJfg1RRX9PV8zemejtBirRtqubS4PhqwqJxBREZMoDmRripjPvKZPgKHVi4s3NybU9",
  "key11": "5rHcEDJ6pGen1Fjgg3jbuqvf5z6YwjjW8TiMrW4QKEtshRrXQ3DjLKK6LzqMxouVbgcgny4ky5oUdwKNeWxcW9YU",
  "key12": "4u9rRAaG3x4vGn8W81k7mjvfUbZq3xJfffnVbK5GfaPkQZ74wk9SevDZQPoQVMugup9tz9NW8hjrpVBDL1QokkiJ",
  "key13": "5gVppFu8h1R8ziVZdARGHgAL14Q5phBRNmaP6yAYJf2gQXj51oezEEVHcSQzfyYkLwbEMMaqFYveM7XBh96twRvs",
  "key14": "TF7oiRaMTFU6L4DoCbtRBRyqYXw4tsJdh6xHEveJT4wkYgM4ShP3TYDprcwaA2xLKQx9HmMRgFbgf4kQ5h4Jmko",
  "key15": "4q8rb1iYy7UEcjumssvvKdF8fkeLj5XPNRawUiVyGrtZduWabcRkTQjPShykXyX1QDKw1DaAEegayULRyipHphC9",
  "key16": "4dvF76u3XoBAGT4djE9oQhW9NbRQn3juB987FsgKGyMjpwsgWfgLEK7G7WKeGhzELZqyy6yZQFZDYVTf8gwVSN3V",
  "key17": "2nzLKCErNbXWkraPxwsx4731mU7pFqDuf4poG3uLoa8c2eiYSJA1qHYvJqExp5uWRBj4pHBAfDJdBN7Uwce8Ee6z",
  "key18": "2ntJWyMw6SHrMjVPWzSmJEYB7zKiieP1xYLCXLqXqQ3kARUkw3PRX4BgxVMeHXRMeUP4PCBvf9K1hG668cK4TXho",
  "key19": "vGrSnHs6YwHHttvnGPvc8U1xPxmumTqbaS2yw5LGTSipATgGsBYrLKPqQhEYkknK42uVPFGgJEkpXyMUpvuBewy",
  "key20": "4U4Bp5oeQKsjrytFThRksBMybQ6rrEN9fb7QP8T8fTnrjyFhoLXyt9AMBDh9aibPp9mm8rjzWwAZFa6syBrXbzdC",
  "key21": "yypJ1EL6ZDfUASnxb6XxY1DHGa3mPNjKDtygQRGszF4aYi9XCj2QHzWJqHgyQj8yo8YK5Lj9D5gfRYkv9ksnhM8",
  "key22": "5q6xUdu59BqdBEh5rrTB7witjjyds6XyvscQMtkjZ8cVcmqUt4RzLtcG2pm8TEdUxJHaKD2mxhpYjUmdUTXc7Yb1",
  "key23": "5wx84UHB4Euv2GRPitBFcwksTki6iisU18AXbUc3voEJ38rKmVwWqwWV6Bk8oM8zG13m8AgLDG9ztsBwiNT4pgZs",
  "key24": "5hE4rtbumjRVkDG2N9zVnaQsEisyF82W6bvLCYuPPdkEKSmMJRmmGbxJKg27XmtwfbsrV1vangThV2ra5L8WjdKC",
  "key25": "5US3KMEJv2zwxQNpYpYoZsGoNfR7SCUwf243Swv9nEzCvufQ51RAGnndUoWPMrNGr8yaty5STjp8uCvRMxouCmi9",
  "key26": "4QcnguvXHmMBKDYkb6qPuLnaXBuyidhcRyQacc2kGGeS5L1gyAaYpirfjgsL7cfVPrbQH2pk351sFm9sBpHoSugn",
  "key27": "63bXxMDbqJpjfMC73JrNLtoU7q2hbzVbhKjHBCvUdHb7oqchB8pDyqxCxfUzS5S7pAAJQcDAN7kuAc5vof7mbXJp",
  "key28": "3SscZSCwQwZadSTJinpN7ezd7edYjhBFNd2ozLsN3Rin8uZPgehidZrpB29xCyXDQTDDy1AUEz6BNmxeYiVicvH1",
  "key29": "2Yqy8EJ4EuQG5cfXz8f1h56t2D3hL2DmBZWemrzBdDLB6QnZUVM5LowCuf6LVQ3He4TeuffYxaeaUitD3KqH9asU",
  "key30": "2JkBVRp2Hf7MC3ZZiHEnYA9kFosZ2cRNNFQcPB7pg75VGCSNCmEbJrBtgYmGtJDE3j871SB9SSMocghi92K2fijj",
  "key31": "2NUFy2ZQ6yWMmZxfe5PaM5ZpSJqGSF9sjfhuicUUuLDShwFzSfYR5zf85Dr9bY1SvBiHomDCDtcFzS2mWtWwKcGy",
  "key32": "5tK9k8vVdizUKZD1SWs8XPZoV7Zx5sNjZf7aFov7zcYGYy9iyCLiqVMmcVHzdppgMiZgXGKWvuvR3cujywM9oxUF",
  "key33": "2iEQvV9raLsEdtQRmFAruHgH3ArBkEwSgj1MoFDfqM1faoo3M7ZbHBXJNNCTyDVNGBf5W8siKht5P4ujn7MaackN",
  "key34": "2u8d2kWfvcfH3dNfaC6A14XqkBKQuqRWbRtj7QqUnCNVkoQMrsvyfhDzeYWAkkdtsVZGjdkKzd6V8cK6wMmUfuEZ",
  "key35": "4fqgNepXLWzQPruBX17sVDEhfPkBhGvjdGSK4VpWREM1npxNH878mVkbquMe5DY8Skdb729fNYxLGQERcHNrMWKA",
  "key36": "BUa2XzYdYkX4rjz4k2QM45KZ8UXt66CPmF6pQjWmBgFnrs3CcCwpqUDifvddXDFGkVJHUkpoQUhCDHpH2zrXAdZ",
  "key37": "3aZbzkvzqGxMP9U7AK5XP451wwThJNm97TaUMaTZAyb5NbUmgLtNwYDtg2o8wbxrAGeRKoEKePgSm4gB3dTWBPtb",
  "key38": "5YMmJHfLA3HX27iWX9SExv3UutN2TFW2xdKW86QQpgFFXNGqiBhaP6L1hzwK4E6T1Pe4EPdqqV3duxpNiM8pqfaw",
  "key39": "A8Xq1mk252vDcz7JfyURSsH9Md4x2wiosgEkyrzuZwkWX9UHYbRn6gLyQwiakL7KMH113zbYjxeonyFAXqMSBXg",
  "key40": "4SdZTkv5yJfavT1SF6n4vPEuDj7nzzMxEX62o4G4EMiQ5oThJtAUCCwiBNJnqdbLnAs5u2L28PFbJq7Mto2CH7PH",
  "key41": "qnH2G9mYJnPkjpTZGVPjxXy8Sc9DczSXDv3m1PypoYX1GkDShDbFFZ5YDn1QerL8B9zaArb6a6pEbni8kuhwk26",
  "key42": "51HgDnUiKfqwBk6TEJp8dbBm9F3PPkTV21MmAn5pR4pQCgECwQ3iNeJyrUSYLutxihCMeJSWg8Zd2UYdzWN1SU3K",
  "key43": "5pCoRKxY2vKB2fGNVnkMgA8CqYsniQSq3PVo196C24o5W3ciy3338k3JcG3fD77nfUYc5axxqoCRzZzULpfmL7PH",
  "key44": "7J47JAw4vArq7fPvCNtXCxme5SykKDaG1yMbXGAf7Eu6dSDmQdrmDYhpQ6ANhxMqZHh4z3rPwK4cEDCnPnJoG8R",
  "key45": "2xmL3SqUKQofhwJv6sW8qSa9fZeMQ7qgvrfqT6CvfZfNNZy7qDJRugB7ea5T39YYZYEEDiX8JS6ZqNaFJHgQQmNB"
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

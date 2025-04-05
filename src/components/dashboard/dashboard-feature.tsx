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
    "usE4MJwAAKkV3S9piAcudmX5UmauX5fyJhtKrxhd8RH23hzgrdX9eABBfYHSGwWcgErA9TGfMH5dBBWzCt3dJHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5T6rbvcZvJSctay6GChiVSqEGmNHriWdncy1ZFeXgTwdUmPbXoCNcDTF1QHu2DBvmQvfpWAR17rwVCn46yAC9D",
  "key1": "4U25eYKNR5BkRopwCdHJxFBe6ccuU1nB4Yfi9nDMobyWnRvffCbdFKb9aAJZkQ3bLTDmrYEF7khzBCtWrRK1vc1V",
  "key2": "euE64NPvMwGzHbMXBb3NhTAFKRfSLk2XCbJBJ87MqXuuH4Fktp7cYjuke7LdoY21HAuDgGvrpMAQYtw36fRwiWd",
  "key3": "3kuQdkKmGAWTiv3Devo1K8jQQ5YZAkQLdzWPjVAg3h9LcrmRm1pKCrixL2XXQcRGj6itQ7fNDussyqbPLQhTE2f7",
  "key4": "UAVoS6iYA8ztb4zPgmBMPk9eYBKxLhcvFZM7RJR4MpATh1Nrya5jBHYwrV6D2Jq5omaKL1vZNXbUjjTaPVQfX3Z",
  "key5": "5x1rMSUtwodN4BQbhYTV36CQBVEyuisSpQgVxRNPuDiX4L1LMLgPUjqrEXbKDCcy5H5ozBdzRfWQeWKnVXNHt4gM",
  "key6": "3Ynawp59is98SZFnxji69fjkzsMG6Qy7KyDefeQXyE6sUU6ixSX5spPAQvGNMmUcYJXyHyCsYvJW5SzzoSJgYNZn",
  "key7": "5dmYSwYuudeJNvAjpPsDxXiues8a2bWzRZRc2Dq3fsLwj9XMLTPM2uxSnL7eU5H2eqt1iuJPQM7oC8nnM7xzXjqF",
  "key8": "3xs3T7mV1ctm1MnUt8ufgvg3oXePhqEV7deE21aoK9pxDNZ5NiyutSQrnWwpqjiSNiLZmVgGLt9CrDhtQv1PhwwH",
  "key9": "4YgqqYTFXdfoRoZH6BjnKhHzguossJsQot4YKuGpstHdKSNsDZn7nz4dBmbtEzfLRBWpuq1TdPAUBTei7Kj6vwuF",
  "key10": "XY7eC3PaLq7Ue6GxZPQUAKwpixoQQSmhZMxBWMFropRWLDm6e1aVCm4kb2j4mBGfvaJsuhSff6sTtra4h3Cf3xk",
  "key11": "3KYaETg9UrbHcntU4CBjQ6VmZoSJPnqjjqF4gug31QvKa5bzqU4J4LaCEMG2JczhNmc1rroBeZyeFxdak8igwBiN",
  "key12": "47P5HsSX5tiKpt38nr3Kc945398AJ1kEZcptjtvGcVFygDsxVWhcCTTXbodGZECNHVp3jdEtzec8iDZsU6Fe4uEG",
  "key13": "3yUdFZSFXhMrPnML2AdS4R7DkcM9esRGe1X894evKtViH7hD3sGLWRUJKjS5bBsU5in5wKoaD8AybFL8SNA6pZP",
  "key14": "2BVo4zDSSSWNSEGrvBufd5oYCeBrngakGH9Zb2vkkMTNB9DB7aKypP1uddzBe64gyQpu88tCZ538ufCXNpCiF2S4",
  "key15": "47XdZN2TWy9ExpgbxhmKprrfVaMJykYNsibXQr4GbmfFouAsQfqKrpj4xczTCcuR2i6gspFVVak458UwdPdMMENS",
  "key16": "4zjwr9kNhku4E2TetgkjfBnXrRAHVQy6NUuizhtQv67uwZgVagQHagT5JSf6P6AmzRbkRJ1dR1DmvwqHe4R3T5yF",
  "key17": "2ptwiCHHGfWkxfp3NqwrULYZjSrWLhk8JvXpWSza6uv3TYxDaxU66RsKhPob1RCEMCZmVNdkKNeEBJRiwHE2j84G",
  "key18": "5bEqmfsXSWiLikMzvrbjhryVFfTHgSSm1zB32e9iZTNfSacnSGVxtkHExLFz4JYxchqC9YqFtZJirgB4zHuMiGi8",
  "key19": "3DsESX5R2eqUo3CY1Pzs6yxEMT7mXfUf2gHRynVfm2RjLdmMRNoFYsfrQp13UF6VmwUpUVG1DEn7bZSfEd1cERPj",
  "key20": "4J9oGRkZMQvZTWBvvWTT2Gn6xzMukW7YUpLjLYkaEYEXKoK6J9vz5N75pcKo1GhXDsVcJRV59kxigzs1UKurShG4",
  "key21": "2zwMycLwai497fbgEZbz5NFBAx7G4vyuqyCTsHNo46KvZF5rkcvRegPnoVVUBZGAtvLBaWPXctJ8NmFfTY2TyKzC",
  "key22": "3hYqiJtMMrnhFv5hETLeELnezLPXKBZth6mxekK2uwo7PbR1tV7GbyFVo9m7rP7k95jgRM9oM58U6snuQnuA3QPL",
  "key23": "5uV8tcQgZr1MK8BmThVuJqifkCCCUfHQLLUpyB75fyms355i35MPdrWSRQhRHkQXfr55yhieCQyBrQnhik1TgQ3A",
  "key24": "2kDkdErSsWpFAmKZaJ1qzY26qZVPRB2PwBXtooEiyRhMuPywR1tetxta9hFMpvmxw8abSgSA6ttDeJkmtrKZ4WZC",
  "key25": "3FXQYbzVtLakgQotxMk3cF7fpA2Z1LDTKCTrVSbd8AbF7R7bBD989vJE1ir1Ei8bHqvvTwkr4djgugporygZGhux",
  "key26": "3tVBcj94tEYoMAnpiZB3kWWBPTTUWrpMCDTioH5Ep7EvzkEskqaVuB8ttdnsWCmK2hcYjfMbjrHaSFQA7GgXaL7D",
  "key27": "2365oNvqV2n1E7vuUUSH5f7m5HQrfw4Z6VPpWumBRVTesFjLYU3sEiXY1nQ2XyihpxSFnELauP6xGBUbeXaT5CVy",
  "key28": "4Dr1aEb3wK7WmH1X7spsCJYQLiaBRD3Hqib4sSuxuT15VQgJ6qdxANQtcEuRns39AudLanAGuCbkSAnxnGMESgf6",
  "key29": "4htS2quYCXjwQGYNVjnpiNUX59xtoKXhEhUwqLrKTLLdoLcfMtAuykDruv2RCkFb2GgnvH77PrJoVfJ2rgvUYXA3",
  "key30": "49wD3vixrpR5ptpNpaS6dcUJtxiZchxLgoMQv3LMETHVey8ae8YhxKMVUVGNhSTW9CtPDLX7cg6pnnCxM3dYHUUA",
  "key31": "4tPrkZneRXrV87km8PpbMe2vrsKrLh6kqourcJsDhW2EP4KRYXq9f7KEWGX8ztSLBp5H8v8iaCkyqtovntUQJwY3",
  "key32": "3Cyd4ccpk143qhacUYJ355KjAfWrVBSFv593sVWmXbYvVXYE6YYmMoCX8N2SiZ48ae4aYFqTb7iDVoPtVV4zCLUv",
  "key33": "27mUu5HgAg38patA9D7p7SUVgn3W7VFtQdmiCFZVudYwGMYtZhqfdX6brTf6t8n7B38VVvdgYedvQUG11GQj955j",
  "key34": "2ovn4ydA3dkbxsjgDHn3fBUhP93jhD2AhP5Pei4DaqvAXNAiXENi3Rw6CPRUv2oETTm5iJWjYjHy5zRWQHkJLgm5",
  "key35": "4TH5PxWwPnXdK8uFhp4goxjLADEdBFLwPMP74BtkzaiHUxsNzm6fbYn7p7k3UtQZwUSJKFYxUvsYMb1DA6eqft1r"
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

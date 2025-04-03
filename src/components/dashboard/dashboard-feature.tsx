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
    "3drPmbctYpNdgqPi53NsKfZaDVwgR6A4zecyZkXNXNFvNYpHsXShS1xwKXjcjLydhPomHHA3c66wiX3KAUAYK2N2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fEP3789pBNrUWRDWBWYnzW2oh9NxDvCAvbUAN7dTaKB2nZM9ALcmLhmFeaXgifA1CeAuBHjuED1Cw5M7i9KVxMQ",
  "key1": "EneQQwqckD3BujuYQWUoT4nfUzMQmBMdEscUsKvqYvssKU3vRk57YH3XrTAxkPqeqeihwrZjt4m7c8zU6qu6DPo",
  "key2": "83dN1rtXixkeRDuZpWA6CpXyHf49Ckb7YqFov9qaCtBe1eLvEbDTvnUrMqvXtDmQoJrNwem1KtM332hfe9zGucz",
  "key3": "2n2P5Emgj2gTVmEa45UJUM8KSUHP5rdDQ5CjFWB1Ub5xaidz2kMHy9s1fLDuZ5rJCz2jsWFivJzuhYRDSHMbD9oz",
  "key4": "5nkRkMArzuGA8H6a2dLqeyj8Fv415Er6kPZVCJ4N2fKrHiwHSZ28Ju3aJzHKqigH1M56mkq4ygefuhWucc2pi6gm",
  "key5": "2ap7VENQgqZMa537VGLFmDRZ77MkS9PFseGh6v4HCjQWfJdftb7wcXLUKBoo775beJDp3QZC41FQaC8Kpeavzta3",
  "key6": "3e4QdobijDuwKjwwc4TigTEJCTBPA2mSBHBuRQa5cTzV4hsLbfnPkLnuBzsXGX3S1pHguwYxsuVLB1F7WcoHUuQc",
  "key7": "5yPJz3ae5FNK1CAsnHisi7XCqfpLhWgZLKouAwt8nxVs3EuoBuSDdyPHcP1uFSbc4zxrAP2kt8P9PVLqSNwMEGHW",
  "key8": "4CX9FMfc5QwJVZDPrJqU8vNZA79bw5uu18MQvURLy8vAsfY1veWfZxFhbm1C9M6AsxYMVTg9jwKGToATUDm7nnbt",
  "key9": "2QHKsdxYV25WYQ2G555JuRwJQAdPsNWExLQNMdNsVfFMm3hJpV17a38H4LTkk64yCQu3A4XL5G6JSp4zvxutFPzD",
  "key10": "v9L2d4zDbKiy9RF4pksM8VAqk4xJmXbwHYLRbk5X2rekL6LiYDNWQJpDWonw23n35G84kt5EubmoBSav3WMsDtp",
  "key11": "3jZfw9nkyBDWSLnz7f2iFPr6wzafWxoykb5BoCZtDgjS24hedvPcJ6np2mEYjVAST63vyUQuCQKGSsfAyXbgTk1D",
  "key12": "3Bok8tFAGaPmixCXYViMYoYCDk7C7EfNo4dhxa3fVtdeePxZCxNAfBY6EA5ixprhSfHVDXmPMWuHZTpshKFTALER",
  "key13": "5MEdV2FXCU44cEoUV6j4Ypu4DqZBeRQCnwsnEhCpgiR81dDExmzHuPr1KtZMzCjoGhqRMCtmVq5MdCFPSyadYCu5",
  "key14": "5JdFHFMvvQsDiTdRfr7UzA1KprP8sQTa9DxnaVX6WpYUra6qmNjn4rudRKP7Qg5DHaXa4gpBDbKyxY8M93ZwMPKC",
  "key15": "38MV4VXK5DALqJBFSQgXJgCh1ATjE44MCog7cKBjAQCBoj2KAt69KdFL3Z25xWoCtRddMAFJLx8zfrBLTsJdAX5v",
  "key16": "yzQgCD1SNY1NdtvPwxSxWhF4LBDGLSs1Ri9LUSKCt2naUKUopsRF2MwxK3agZfquNzCcdf14HecSLVt8ogj91v4",
  "key17": "4FsWMkGF8x9Bn98GECH7gGWAqvYRyNEX6aNyX1M346jDNbfMkgRsiTQVbFukZjS8LbRA3PZTJVAj8jsP5QBxh9D3",
  "key18": "4suBntPHSJbz1HtfiSX4s8EyxCfNSqCLXciHLegKEnjF6eBaxZMobQ2HstsapCeNQDtW6V5ttUypR6ogECtqB4xk",
  "key19": "4jVP5AwU2yuTTqrCKsUyN9ewFbf6PAAUcvYqU5Uo6GaFMUkH8JtgCRz3cF2xkmkkLTuFLHPepUBCqPeB7h9TeD1E",
  "key20": "2FshmYj4dQtpQrZWbsGxTuNvmEt1sYCEYeRJjfW5gZiZoXXv2dCmSzfbvtfFocDtjiSSsM2E67i65NHg5XmbY8jX",
  "key21": "3g9NZJR19p9yh4dPeLFrQqXSBNUJUH8AEtFXcrKmdB1xwVNUGgwN5Zt2r9BVuY9QeJQGQ9CNWZGA6Mqx4uthkPbo",
  "key22": "4y1Kn4EoMK2SkSBsSY6ZcVUSfBEsY6xtSyWL8W8AtakgcyEn6Lb7oMxVwTgdpiXSToXJVTWQ2vcT2ebSrgszViUR",
  "key23": "3AxVdzv51GmjoAVa4njepZiLNjEcjvQmPYb5WYLRanyPxA8ThqCdVhZ9FG5U2Kgp1kDRM7mf9PKU84ScxSXDkWkD",
  "key24": "3Y4moedc67TVXqrDhctQ8yaSnzBkVuur7jAoHxH2pPfP4S3ZVa18w8tKQd3NLBEsLvXmF1j7JX2jgGRkdiuD4qVx",
  "key25": "ZzoqqQfg2dDf5u2C3x2vVtQmoB6X7WZjAdEL3YtWZupnnW5GSq2FiFpi6EQLjpYmPgbuNRwktbrBzdV4i5ivCoo",
  "key26": "5voAtY5k1eCD7te1mdxC6w1QUM9H2seN9sWq7d3GFjCsQxvMaDsbUVN3z2zfB5F6k6SZYpToaoBGkpMqvBSQ2wNb",
  "key27": "4XrHqd3NZPVVncfYAvfcdFpGS7A7XCJqtgTYmRbinkQTZ4gyJxqd7ia8ytQ8GyFP53zrCZJooVyfyg8BXxdEeFKw",
  "key28": "5a8YtcQBCN1eGfZqp1HQntM6ihQpLXRK1fNVa4xkokqDYYpwnK97dPZqaUHZKXRQgZFVWusY9C1gS6sdzJFsqFKD",
  "key29": "57V1jBZSYGahZR9QiKNskNN2nDjiAY3CHQdM8S3AHppUiTuTMTMoaBsdac5c1kqdjDBPN5enVZt2Kj12jEKL4F9a"
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

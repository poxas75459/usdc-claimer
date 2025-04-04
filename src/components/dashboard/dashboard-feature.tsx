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
    "299Q1UHjqNRjPCcfyyZoFYJhJCpCSnPhzifu8T25h1y4Xc7sFiUNWf4iMJm3cA8RP4befnzoGgGNdEcetAKeqpKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWkfjRtSMeySNnvtQAnyKuqnEeWVURQoN8EePAxa5yQ5VifmPVZUg7N48CicSVjQio7Mpg3cUt12a3n7caD1EZz",
  "key1": "5adCjMTc9SVuT6fdeJgX6ZsQxepSU6CM4JwNWoMe2KAjKFkpPvTz8tNbBJNF6RboxoJ718QiV1BMMAKNW3Z34sZz",
  "key2": "3YThg39ZsTM2RnL1G1MDSyjYF6qpzbrtU5CFLwbrHgZYma7rjwgv423PFa8ug3Bmqy6oYP6VZeXCSBywrPWGjnk1",
  "key3": "4SfQk4aosacjuyr1niXua28M7CM7uVSsvdmwYrMRdFnc6XYhXBHx4dLHFkWCb35C8a748nMreUD6iTfJ8PksEqzN",
  "key4": "2BjZ7gz1uyjC1Kp919meQtYo1BSVpCDQPHfCKhk1nEeNGbNby27tJJWYTMTWMoCxG3bJGfVUksB71AnAiNgBevZE",
  "key5": "3kB17Mgo4uDHXe3KJJer1ZTABTwAk2VcCRWPTKaor79998wTc1Z86FLRyE74tYZkhorW1Nj2FXgCu7BNz72Epn9k",
  "key6": "32fj5jpB3LpGpVsiTcq9ZeMfwsJYC2ZxwwhojruwdcgMW2edPThb4EKUGkatWh6P3C8XqgFvUUvtqpP6WvvgL2t7",
  "key7": "5kQxUJUbQxngWrpA8XN69vfE7D7QGezzbJ1YziwKU9yU1YGdLSuVbni2w2NpZhBw4g8bzGFxz8p8MsN38s92jF6y",
  "key8": "268dc2QmzUh1TEfHwAZ8AL4MTzqRbEWF2FQ67oKeoSFrHHp9BEYjvm1kWEPzRt5vHC4YFQNqCud9CCtSXMSqA6LS",
  "key9": "3yBbUnPHwVNHMmJUtXPnrukYFym5iHSAT3p9gBAV4eWcYLGKKgh6uBCskVsofRYeQrkBgmaZhvbrQcW15PhgUdKo",
  "key10": "33fHmLVTamZfJsNDifsddSrgWX3aNykyTmMPQopWNJaYrb7mkoGY9gGwt6f8DsAfexQHCUgbWvSFU7wkzfGNy2Gj",
  "key11": "2WD3sFADr59uCTPDo76JSzrKfxpPv2i6Pba6gxACeN91Ae7WSERMo8dktiXVGy4e6QHJuM8Vv7n8k8824hyHjjZy",
  "key12": "59xn8ozcDQAjzMM1g3rYLicfxEYj2FeeX5T85RdpRb7ZDPAqg21XQQJMrSk42mjecHNufYeapaRX325B1P3umW1k",
  "key13": "fVEfsuwVo3JaczFnY4JbLjUzdKDjVHNffipAKwMksgeXqziWhpuXaSVenr4bZKbkdFD6vaopCjCihYptGELgcvT",
  "key14": "43zvYsonM4MMG8smA9Lywu7nPJf4jbY8w8HA9ADtmzNvnGc34oK9c5sQndvyLCYMstZDxPH8Gu7CZ33oiofnj2H4",
  "key15": "3AWgEzrT2N99cxLNzCizANuWjGA4MA1qA3wGitrCpGMjSuGtP9zRPPxH6o1J5h1QYdJUhkbPQ5ShMMB8tn4BuGDU",
  "key16": "LrxkKVEFsytuj2DXARPTzN8yFTUA6ddzeiUNZdm8jHiiytgmWmT8JzjTd8DNDBsXErjovnKnzzhnKAQxGxNLiCp",
  "key17": "T1xdUpBm4j6Q7uUfPf5CvXxvfVhA8Pao7gEibyVfPLcrZ12aECiVosHyC5eLnEFF8yfmxhS7aUjWKy71BhT5RXu",
  "key18": "4vovQNUTw1XBVUdSqz1CMzRgLU8NS5ug5iL4d5MuDyRSktDEwg9EWKSfr2MpRMZxtvReuybzhg2vxPxJPHx6nXim",
  "key19": "2kUwETyRmrDjA3kiBykPCZhxZTT7aBAT4sjdREBGmceT2uYS75svL9C7wnyf13rf3WScSEKwnsiT8yfJoyyfqpCU",
  "key20": "2xLZiTFUtbxWFaUhZ34qpNmqgoB5acKMHTAMg8iCdmJxU6gycM8a2uh26W7mABsz2oq5tQzvAGrM2QncsTNy1CwM",
  "key21": "32w8VUWeaVDvqzp19ENXDgSNRxpjfjKPvqLwzy2JmngC9FMozsKLUeiiLABXSzcHnoEBbiheTb8LqUeernYr56hV",
  "key22": "qEpyRERbGhDrMt79rFEDVKMEzJWCN48YMrkPJMN8x4hbNX4gyhHGYu2hxU8Ce5NyX8ZbGhbp7wgPPrZZcJZ1ep5",
  "key23": "3Mu32e5Keh6gdRwiW4xnX941Kw1WGUkz4SyZXYh7mUQvhxKpV1qViPZ7EJoETab1upxJ1ose4fMvsBqBhDUiRay8",
  "key24": "5nyVxW6yj83cVWhtzyL7ndtaXW1ZJshYEZVSd9QaaW8ttRiWs51bBS6HRboeEh2EcUaQMFKJVcEXnQq8jTypcTzs",
  "key25": "5KqgmTKLNKE2MFSaQ77UV9ckuo1AobqEFNY9mZMfEqrPU6Pq9ssKhoGcfhv3QTZR3MRRosdSUYgreAXGEFpNNebe",
  "key26": "5dFJFrqbxPzPKSHuHpo2SLPRgEudt3jdfKPpzcaYyAwb5qaZjaMLXnShcwERgR8RnZsTjiaK3kuRLhi7XJfptrqM",
  "key27": "4jJYLhExetLUj7PYCrhopd5bD4Pu713XTG1BrLBCQES49vUSzzf6CXWhwcg1L2CjT7Bvh9Bz7ijYNVUMx27AZpwx"
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

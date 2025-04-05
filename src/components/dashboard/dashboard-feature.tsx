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
    "4TNKrBtnXQL4yP1Crt8GS7JHkXfXxcC7v56H8KKX5FCv7D5hXshj4cw8RoaWYJqJpAdSC7YutnbWc21BDtAC654K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F7AWAxp3aaFigWqAWtEsjBd1E2QSn6fmVopous3yXq3tSX8otbgrrbmraNnwaNuspcASnbNybGUa4qBoqvMufbx",
  "key1": "4WuGmhv2Hgr9upAtHCeqrTSfaMpWca3Q9fzfcoFNgnwpjDgiyeZ2yiY57MohYDthHTNmK2tCxwfyABrTMcBmexYb",
  "key2": "5cTuFQZQswKugKdXeJKR8deGcz8NxHYYXUhfyQZ5qnjeLDLbZpcC2QkRMUe68XK6ocGwu8ZXsn5DohVk3wuMSsoU",
  "key3": "56oVWyjBoArHby131PVZM6ksjPnBoEk3kboWbWvUDdgqBLxxD9TDLuymouZddAXwackoVbpCDcLqPUB4B1FNh1jW",
  "key4": "5UqfdVrLr4R5TYECBAsFT4k14zkTq3jxXYq6jVRF8Sotj3HmQpLEN5etMPExhDAFHGMCXiJLLgeiDZvrvWpx8iUJ",
  "key5": "ijWrAr2dhenVWJtRdTmpCdEeWQeBDtzCH8c6v59GU7p4NdCFJPrHyuGTtNSged6nL5TdeGiXP4zYR3ARX47qvDj",
  "key6": "4UN2vNKRtKgjqvujHH5z4k7VqB3NHEZ195iHTL1ovnvf7xk1L8dBVg6daLhnpSLSFVffE3MBUNQjNcefFYRN5xJK",
  "key7": "5kTiUQoh7sTo81mbuBv92p5TNy9APrGNayYtewiTm4HesxBXfNfXVPyDpbiaWEoFYpTtDjwrsrHkqU1boGu1eQ4j",
  "key8": "5vQKeU4D8Nt86UPgHvD29wDnK5ikHArSdfwnSC5WUTaWWxQThD8n5bdHosfa3CRCLMDxnvp3qKsgU2UAY7gPtaDA",
  "key9": "3SmKi1zuPgGw4p58z24G75h82VABKWjEc7QvYgpU85a3s1c4DLDfrKHo5ttHzMDsK9WDeLSJgja7gP5Qmjk36gC",
  "key10": "3bHoUMjgJjbjfprJH37PxHh7gVWEZoBH8zPQYGfu34uGEvug1TguU2rsrye3UNgk79uYLqESGzAMxdbSci1TWuV",
  "key11": "53gwv2kTYtmnw94vmFYfNrpLUHouEfXESeK49KZjJGYVCQRJhexsUci4URkLFf56PnaxydkaCcEBMtfzfXQdwknN",
  "key12": "5t4YP6whXHho8YB81RcRD3ViE2MYtX16hxATrJHDxc2JkNCKre11APQpeCeuV4J1L2mxz7Lko9ZkdwE4yCsTfmoD",
  "key13": "53cznQ1FETB2qwKNtV2qneb9wVuiJcQmHi42oq4rB4Gq3pKq1rd8WdtkX2ev5GZR22Ee81otPwWDkpk67Xka43tX",
  "key14": "3BFnXhxoGNQVxi69YrqNG87sBauQcFT3U7Ar35dK1vbYVyayL1tV44ZDgaUTWFL35HEvnEjALRyLL4FFbvcoTyE3",
  "key15": "5jxktgEgHfDDh7wmF8bVnm4feLcwf6P7WFAb1AJFrapa4tC2TokEuPYrSfEkGsKkpDz2iCMWDmbjwcqfwSkv7sVz",
  "key16": "3FPByW6qHiUpQcRBa4h6oDcfAdWLHfBG8z3fEKR2L9T87ipgBpBHzmiPM3zKazmVe944Vtgjs1CsJ4qtJxmWJaAk",
  "key17": "FsgJRu6DLpwTunFub19HRJA1tRgCLNv52HJsqNyGdFHK3ipeqJUk4Xgmdo7Kk6EFVS9w6QK9u61qm1R9ZZJEcTT",
  "key18": "4CYNaRyRwQs8TRkbmfgq6ToSVFXNq3NSwTJhKJt774JnSmw1RrajxinrndKEeyFrzxzA1VeNHdRvzMuNrz4S7Kxn",
  "key19": "399A5w4ZZDePPLDGBbTUmg4TqePgjHVo5tUpRUZ5672xzwViSc8682e2eS4cvmw9Co8Arm58kRDwCA4DagXscgbd",
  "key20": "4AJT1pE69W1vQvAXdABcEdFYFFnn4tX1T1wn5xvKQgpq4FTdQGLnEDa5Yn8aMTAZngxh1wjkqjCaRVxr68nGQBYX",
  "key21": "3tN5T2NtU2wyBEEzSTLaoeeEQuZJSvwM1bGxyybP5Pddt2xwA5w7NStr7Rg68229MRhQ9fBisdoeF5MMPgaF1QVh",
  "key22": "3izLak4Sdk1VDZxFLSHA7757nht7YVL85Yr5vHmtXkw4xChBGPZrE5ceW8G8Rm18o7Fb3Gi9DteBP94g84MwHe75",
  "key23": "K4ybdaexjMjScp9bd8BTxn9Abk6vpKcpTnKVkhSxmGnHo2UDyCqHXDQnBJdqU7W9JVRzoWuHpGE1Ldh87Jksidw",
  "key24": "5u5PN7LfHjoEnWBjgFs8VcUkjdr3ujCx65ZKJFZE3DzHjxRzvMbBrf36dXH3HGJRjs8vSnzMh15mCoHiyoWUAmTJ",
  "key25": "5KHx4nQ3tdBbzfeJmsJatbJdEVPrDXitGZ2PQ2VmrBfxXfDkSXcmdMXMMbJE4n17R29oWeBCZi1hTeXoqpLy2xws"
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

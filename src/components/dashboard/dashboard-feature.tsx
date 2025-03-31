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
    "5RgyvsARtmKHyJpPAQQHdR79LJA656SRkBhdf44CsXheQMHsmUMSguEMc7DWkwfcsuQWJVqAoZGBiyRKSYbSYuUg"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2L662FJRRjkrNyHPZzzV5sWeNE3vBEyjR8Fzuw5rjx9ebXHhEgmnhbT3gTytWzf6iEZh5zorSN4UUo2WdfTj71NX",
  "decoyKey1": "2Zo8KD6aixfHRvbpndzwxz8CBNxEmGmDdKDngq9XCs9uc23YoC5iHx3YxSytRVTgfHnTZ9BCGLu85jRoDgpVG2Lk",
  "decoyKey2": "3DpJ46xEBLPkYHQB3Js4VmEBqzQ4HLsyWRb143Bi3oCZYhLmi7dFT3ituyRAGTkqvKvAR1HFCb9YdbpyRPpEEXWA",
  "decoyKey3": "369VDa8HafEsMAqoQFmmaok6RCoiPeVHCx8ijQmoet2yDQE3wyxPJRJH2dfBxoFjvNY52rpinf2b2ZadNHCPUzRq",
  "decoyKey4": "31DHADPRLycUtLjA2McJx5NJcCRFqnjFJkffm8ujiFPV5AQZ3eqhKH9JiohH54hiNiwSaf8Kat7acgc7nNXrwaHa",
  "decoyKey5": "3GuxPYVjjUTStFcEyG7iBny1tCLsy8Xwvhbxm84nTRjSFsTz1dtXMUnqhY8LKjG9S7DXAScyimvf4hT7sdoWSkz4",
  "decoyKey6": "4kU48pjYBjxb6BWAs8PQuRNAioRFdL5mGuoSSy7nDVgHos1PFgK89WcbRz7ZVhQ8Fg8kJV1g9VRuquNMKUMYToqp",
  "decoyKey7": "3nETa3Z5u7NxJ7qrBJroYAFVXJzfFrFogeUQnxf6VUMNmY7jzzKER8Rj6jLsHJjSbAqi1fJb3RLENzK8nayRaQZs",
  "decoyKey8": "5Q1yKhgXxG1vHDAPRfHk9WdHn1Yqu9d2qPmZsQFGL3grTfRtK4WxsKKGthSBGEBt5yFV3PwnHksUnfwZ7eRaiTKn",
  "decoyKey9": "4NuCgoDNojEvBSNaHhhvDNg7nyZbg8oHLpXxyzK3XrmQXymC9z97dwAgEYyXhKRK5eDAdVNBSPYfoy1shLt9wbEq",
  "decoyKey10": "zoMwyzdBGpnAsKSC17HJbEtQZpGxqU9qy4vPrX7A3yS61hCWP12s9bfQoT7cMutU3Pmm5n8yGaepGtTriZmhsS5",
  "decoyKey11": "56USN6LSw2L5BEFxS4ws5eqS99qwp1xra3fbwfU6BXzm3Yifufs6hvoNzBTVSygShyReCRCAGAypq6mGDD8aUKRC",
  "decoyKey12": "kJEVxLPmGwfnT1z7zuc6gf4Gqiit9w7iQh8UKJZyWAjAT3APhRPH27P3en1fdjoVpZJk8S7wYMZK9PgCwFeiRNH",
  "decoyKey13": "316ekvQ1b9HBDQhS9w8V99WQUCuctXxrCuXGuhSD8GEkLpqCZUZQgzt66v9U35XeuFBw6m4KkUqDqswUqNCaGdi5",
  "decoyKey14": "4LLGzTtWoeuvtvF7kH9pozHneT3TTqUnJ2UaeXd2g24naaeAL8iRZqNK7NoqWJUbyRZNh76ZDziuVkjGduuaM7T3",
  "decoyKey15": "3oQM8Gxg5RrBBqYFUzA4nyDxCfKqmoYop3ouAAe2hPqCTXn3ju1aoUrJEUjWWrFiuxGXQuJtBD2m6cqcegYDnWLT",
  "decoyKey16": "5tXBmNPEMxbxWqd1iDujM4vrQd2pD6U72JDH5PLPjkKGRbGgaY9opayUM4QkHPCXikTqbsXMjoHR6r6o1Sv1WvdH",
  "decoyKey17": "5tW1bWjeRtwrnVXLU1SmdXhVpin5TNe4wNyhaVbyNVSiYtTXfFHVFu3xd7STk75E8SoF2ywTtQFQjBtgjj64g2ee",
  "decoyKey18": "3ECK8XU7FdZfECczA784UGhfe81ETfPGgPgs8isWNX9RazkGzz3JfAmRCaactR3zBzebGZKDUHGVTfvsvc4GaTde",
  "decoyKey19": "2eqGBrnspfdrMF7F8pVKRMcAsNNPSnfwPgK22XeW1A5gcPt4yfyJuk9zExjv9VasRqR1E96YxkcWnge9G4p2sFC5",
  "decoyKey20": "318dTJ7JySz2Dmk33gh4Fnu3pzkQSisssLPJ7Y8HRcxwr3wJTECryhpLm7KzJw1okUMaBzcrkzw7fVEKQEpzkdGZ",
  "decoyKey21": "3Xfh58vCkrVreDgckZxN1zuRTGUwCqGZaCD5WkFJoDrk4sPzebEd8DZsPzwQh17feD8s1PMVp7mJeedt4PuGEucg",
  "decoyKey22": "2ogVxZtfvLXhhv4t4VeUMHM61yTHadDkMyorCfFUwUejz5EaqzQXNzExPtwCfWVXcooNch5CuN6DEoGjxQgW4ne7",
  "decoyKey23": "4eGZQSCkPCCkJqNBaSWsdAZHLswYJkUTZsCWVKonkDPyQHqjVZfnzYeFwYRAymP5SoyYC2kHipY8MmZZ1ATcCddF",
  "decoyKey24": "3oyXYH9WitU17jYijWPLWZRXbiUDx8YqcPdnRJoC57BR3paLR4AZVFacLUjU8xQxAzog2LYDhB4WnPa4jX8LJPi6",
  "decoyKey25": "5yvi3Jmw24z1mLEwJEDxyeTSgaJV4mtLVdfiNBW2Ry5TKYYwws8G6xvEykW1NouyQ5RVHrCrNzv1HREfjmPPj8Uc",
  "decoyKey26": "3zz9b1JUGUSbquc54nvM9k3Qxxo1YmDphjpuNQrXjc5jkdjiA7aCMdYtC2Pwm2wR7d2EdX4zhMEyPQLv5gjhbnnJ",
  "decoyKey27": "4gLL9vReASPFjtmPpE2guBNU8qppXX7a8nSHL8rryj5qysubyPjmPU1myCFSH1eEqcoT1VRdV2qj3ht2uhYoW7FE",
  "decoyKey28": "2kVmnue7ZmQmxjzQ9A6hMYCZb1ruoaRMoRTYJF7RKECWkdr9SHXxGmmFUch6NGuXFmzvX5aHqynzEUYijmSfh8Wg",
  "decoyKey29": "44T7WNFc8dyhSz5gespcdySjuSMJHBHWiyF6pq6VAFS62FwnvbTVk6SAJFwXi7WAKP3cfa4YfLjSmCJ13iRaowh4",
  "decoyKey30": "2aQS8Unp4tP5dhG8VmJZZsaM4eaoGzA4MCpb5q25GPoaKMFdi43KrANeBrZY6xpLd1qv6iocw1Gfh8BjEchJAZHb",
  "decoyKey31": "5fxAZSebrYE95y754h7wT5gD6YVo3B5nvy1jTvA1k74NZinPXUtMXwq6oetXCQ4PSL7v5fUKSF6mWYv3Tvq15e83",
  "decoyKey32": "65KnFJ4rQ8ZccxgTiZ8qnp7sGXmuwVBXztAukYucWcYbj6UEyP1Kxbv9rvQstGJGbiingXns7mmPp2LSMpu4HoZD",
  "decoyKey33": "3H4AKVeqFkcp1ko2cAAibNGMGGauYDrCoDh5XG5KyjASzPUsV3dvTHbMfkqACiGUXTfuS9idx7cY6r6uQfHJxRJ5",
  "decoyKey34": "4q3JUaogwfAbuj1ZvNHwdihPcZu7ew8UGxRMSSzaHdzYGW7BkTKk7njEYoF28Mpe8MnWZFFhF4hgAwEjDYpsCEKs",
  "decoyKey35": "2zZpXc5H2zGF9VGEccAskCoKkBJwNqUhjAFaNKgXMpShY2LpfHcLwdrdBhtxSqUFSpzTMP2JgxUii4z27yVMEPLU",
  "decoyKey36": "362hP5u8urJEQJgf6SYfbv45xuETyDSujS5KupfeRMTi4UjVbXtWWCqGATAwU266AtpsAFzc7yt5yN9s51ZTAtRj",
  "decoyKey37": "3vkQ5Go7xFwxyerFLMopUL5dtxqmWqxZpswrnvPmVnpDywr4R3Fmu2PDbqchfjYdLVsWs1kNGVRvQ3bFW8jm9715",
  "decoyKey38": "52P3zYd8Kx6HWEC3YeTSZuRDaSkLX8gyUR8aWEd7yYnYRGLGZ54oopy9s9ZHkDVr89ebxoUC5zCty8Z8rB3hibiS",
  "decoyKey39": "5LwwcuSAuAmFfuGYPFEUA8Aays58stZd5oxWDSWXzdnd81L2UesZpppKxAvGfLeCxGJwQ3vAZxgfxwKvfnH65QJw",
  "decoyKey40": "3zD5o2dy1VhQZ9gTK82vedPtSt6P53jCHUx48C7LoPjp5okRB77JM7V9tDH9QDRkrWCtNBKGgPMvBktDsjwWB7ta",
  "decoyKey41": "2c4rhueBxFtaV8PudzisNrgqK9dpytQnR7wctBtoAqjvgw52nQZDYmfWrjko1YypVrjA4HrHvarb7YGRZ2Dkveru",
  "decoyKey42": "4x2B6Gu9mENdrfmxbAXLcFAy9UNhZagfXy2hZ5msNSw9vbnczqPBeK5LnY5uvG3GBqJ89JN9fSiqAnQCuN6KPerd",
  "decoyKey43": "3bSvagro6Bktt7rcUGSCfJReh1BUUKTecTA6RsUHi8PkbbZUDRNPuTzZgTb5yUG2HBvwkvuqdgXR5vBpgH3XWnJ5",
  "decoyKey44": "3A4Shum8vohtEd9MxzPRF3Q8NwNyG8wf5QH7ikhnRhWojWR6tvGUeC6By4mKmdPsP2nUjhPcaLo2rWjgWZNg7mGM",
  "decoyKey45": "5shuLR51p25wjwLdcGxSBrUUKAxRNgn3YV13aekHf7e4V4wQRg8NrTjLZBnYTJpjg4pN4L7hUTpwpyZEUHRxtoJM",
  "decoyKey46": "5ToRxnHMi4ruCbUGmMC16u1JoXfhP9VhkDg32pyt1SErRvocNeAoeSeVeMybmZVN3hWA1WL6hJD8zZ6eSuqKvLi8",
  "decoyKey47": "2xxEqCgwRrK4fpahYvHvpTk2mU9iZbWD6zUv8ojSpTCpZK4svkCWnZtKUzguLW6bVxwRRHgqWLUAMzAbdL51jtvY",
  "decoyKey48": "4n8xjoTKZi5VaF7hg1VY2A6pKYZnFggvb82CPcUxeMyZdbgdr5Fo7ud3nBTEL7TVo1LdA8XCQa2A4ugJ5AGmrb4A",
  "decoyKey49": "QJL8WYgxUXGQsmbdaHg1h9KxPovrc4G8QX27Jvzdh1r3gFSHU6Z5ttiNfj6fCRoDzYzAZ7ALZxYUt7QG9USfzPp"
};
// DECOY_KEYS_END
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
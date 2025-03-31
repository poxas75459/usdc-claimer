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
    "4Yphtvy73ozrNv8ndB7dPfGvdu1mnrqTyeGUxPE99ouYGBBWDHSC7upkX1vDvN1Vov1DSAV4krNF9GedLUUbMP94"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2wMckmf8SfnvAiBS31siD3HrePMV5zgqNmyqSzrFkAP14NGdHmsbFbNwjeQXzGNn9y9rJEmnxiQFYrbe2qB3Ps56",
  "decoyKey1": "4TcF3bcQ8K48NfHEdbDnJYFRhpb8CAS9sX5n3SVQXNLhpFVtExdRU8dNbyhgDciWoqEgaZ22PfiLid2C3Khj7GZa",
  "decoyKey2": "hMnswqaFF7UbSxKimU2hpcsPA2q25BDnMSxkHHpBk1S81eoai2KoM9EfhH7PSFW1t6RNZcSGgoCqHKCkgw3h4h1",
  "decoyKey3": "2NQEijHnwNZDzSWjnsaxSy3G9Fyr3rTUoxgJWu3nxNxChihGjc4iDwK1uwBxkqZdyt9hbS3NkgwGJdPK8ErwLNpR",
  "decoyKey4": "4YLB1pTQPk4yGi5HeHkzT8G6X44FXbd67XcBWwodx1y439pumLrocjazd5viq5XtpmUUTSDfPE5yUYTL7kJbBKNR",
  "decoyKey5": "N59uun9ZZmS88aCoiUu4fwJz1ZhX6Af3vyL8gMK4GJ5WbF1RVsZPsq5p2oHwnLtCqWZXrezYziSepm7ZbNxTaFL",
  "decoyKey6": "AKPL9WUwCAmjpgYdvLy1XuzqPQ8Msv8jqZvUax7S3nE9Kr5kdk9FDWc1DgFW7JSjVHcBF21BTiBWcAx4EqgZ3C8",
  "decoyKey7": "5GeDHfQ8o4ymD6CBFeYSqg91Fo5EYugkUSC2qZxremJqviS3KUZZpv48z6jwtK84J9ykPKxSiAJNTQSroRJzkd8f",
  "decoyKey8": "3gMATprBMFcZb6bzJwsyXmaKKy16aZytE8wkdyfYiY1Jxx8FFvQXEM1fafyDazgj6uJMFHKfzvR7YysnzyLnRb7B",
  "decoyKey9": "4surk8Z19m5BWAyLH3rkfvEzFLqRmpR4yqqy8oRiB4692cLwJf4kLHYP8XmyZ7mgEmtTHtiXGCAf3pSgADDq3kmC",
  "decoyKey10": "3FDeRBxx7KjpnJMYjoj9tnB5Q8fxMkfZufyLVkbYd1fp5d3HEbf5UMNiszuABQ7CDEaPzWp4cafDPkt9HiUPGrZZ",
  "decoyKey11": "3m18ZZ7NxBayZHrKGsEBCp1aZ8iJR3zM1McSZJdcz6ZMJtAEbiDAzSoQ95EFx6T3PgGd4DNiSZakFtZ8zhT6wTpu",
  "decoyKey12": "4psMQsbCG3vdqVZFVfmxrjHw57HqKsDewAZbko1HW9bZgea953gquti9J1dgCp8VAuc1fsX4eQuV1juT5wouarGX",
  "decoyKey13": "5dVFRKTCPTWTLSVU1ASvEJvW2C2SEqUyPbm6XB7YW42ryqraq3Z9Eg2oizhfe4zcbHE1TsAgFWG8LBLiXNmzVeaQ",
  "decoyKey14": "4TBHbox9jschBjr8h4mZk3RvZ3ndJvopsp5haaQWepS5VkeaYDiyjKSgVYQYknUPiBLue6fg5DHAeQitMoujGxAS",
  "decoyKey15": "2zPa7k3kdukRff2Vsm1CeXUsU9j21L1NtojhY7xBeQMZg5aTvpkzYS2SWvSS1vxfp2WZfTQhPwZZAxNxDZBLDzwv",
  "decoyKey16": "4YK8j7MV6kPJzDM3Tsd9F6EPJknWEa29Aj74it7FUmdneCuzHrPE8fRWsRxFyNNHaciD3MxczdUu3rTXwNWfFRty",
  "decoyKey17": "2vo2r87AV8ULWGhVtbRAg4ToqN9YAx686o8fagHU63UBoXX2ftEFhwFcpvGomgKCQ2mzpMbBrroe4BL4qCyVu41w",
  "decoyKey18": "5Q2Ps99dwjkZrPPGAyroLRjdFPDWJZaTVSg8rAUngwrhfWMyHAGZdqdDaK3yNhLhXbwwzwJcAwUUqqpfuVmr3JNS",
  "decoyKey19": "3GssPtfY9D8kZZUta1NDsJDA6nTtc6DkDCzNHJc7dAECVXBDvFpadU5zbjNzoWdYFwdWTT7E8fodaezJHpSHevZt",
  "decoyKey20": "2DjHhhRMyhkmuDcVGMyyJdoL3qND72FiMf8QtJXSyULmtNy6rEWh2cRnigz1mTYNocStJHbh6RxHsrJmDSWjxE12",
  "decoyKey21": "26NeGHRHtwMnzQNrw9jZdCA8M6Y65ufdemyrCH3u7KLT4jocPiDJBmhJ3YSWAxx9czUo9U4ENZfSiz1pRG5Pwmkn",
  "decoyKey22": "2Q67sruvh7xn5UfiwAzynmgppGNKkiskL7FnBMbxBxDetXLjJvJ31BfFSTRhghE4PRhd9z5m7ZbtLFDQJFh6saZa",
  "decoyKey23": "4ibw9q8VHJjDgDsrTcLVw76PyuLvkSfVnpx25bRqQDxtigunPmVwLEc6AaVFLYqTwQ2Y7b1F5bv2ejbExGT9o5R",
  "decoyKey24": "3odeXQrKEXnDaQNpssbbecE8BW3GUy5NCxqTtYj7RkNmyeuJ7zPYQfZBg97wfjAwsxjnLYjatni63P3Som9ZDiUE",
  "decoyKey25": "6162xTC4jV4DgCGMgmYCE21xBPb1GuZ7hc6QiikEYy3PuF6kwDn3wJUNAbuDXpC83WN5GCsh1L1GgzcfpttBnEM7",
  "decoyKey26": "2CAnPJMNwaXCQnY2Z2vCkmwx7rDRBYiAFVhTWhDpvyW6vxat7j1SmeBBKWmTNaUv61vUfnXEqVMudANx1ExQa9fp",
  "decoyKey27": "5uVYjy9fJQpT4GKKk2ket4wcnFKwEhF1gUh383auyCDxpvFVBTNLaxpDAg11PVxqumvsjZ6SW5C6vd5X4TgjR628",
  "decoyKey28": "3juQJV3yZXT82m7PLvNsuYaPnwPmbH1WFDHXs73meUkzs1rWqyJdagHuopMAUenQ5cU9Mm33pBdtcHM4m7WGNeux",
  "decoyKey29": "uZyVtGYiHL3ugmd6EDHedUvBEEx6JMo3428THeqZejdXg7aBr5ruFXqZkNeHFXVHvnUzgTCVfHucTZbX6fr5cyP",
  "decoyKey30": "2ydpQ6nng9SuFwLoY5NLsD2weB34Qr9UN3iUKVfnZqUNj3LphtFNSYaUqrSgjLEGoHpRdHCPgYeF9GQy82BF2Xzi",
  "decoyKey31": "A5St3a9Qr7dyuyVkmf9xxjRAusnLTMN95MzqGEFhrHBtdG9dTAHsJrp6Wh6UizGEQo8RYezfs3GdZwGeAGTsrrU",
  "decoyKey32": "4wc23vHDi8kYVvK55NLPzMtoZS6rJ684QpQKdGbASZJSEA4v9zSmQxhNciL1icUtePnCExy2DUQ8EVR2XCuBym8V",
  "decoyKey33": "5XhPsANyWMNcLSHiXi189PzVXvFo1ogGahh8KmfwdTzL255bT8sVBHnpb6Xsz7QuKK4NwCWcs1zBmExHB44292zw",
  "decoyKey34": "2MCDHSjNJH4DZvMvxAmcd2RUDUzvqBXDBmqQ5t1U1KjigYQYt91JUWYK6QWX4WC2XUY2AUGBhRqcJis46Pri7mDS",
  "decoyKey35": "4mvb7WvhWCNxGD3UShcPL9U7HMsZFiLu8SsyAiUya4E63Diy29iTDDV6pHP8WNY6hmM1K5vNtJCcjwLyHnskka1u",
  "decoyKey36": "3Kysu5YmxSwbdBChDpqVUNdbAsSzKYsNbnoEKPw73qeP1PFVDccjQ6tr7S1oVU3qdarz43sLw4QMa6KyLCacBQ7S",
  "decoyKey37": "4VUBJUuHvsxuaDorg2QDL1G19StwqCE5wQRdjP4RQt3Y46GUERjHx5TpUKDKE7T48gvuzF2kSXyrq1kb4db8tfEZ",
  "decoyKey38": "3KfxqcvEfQvUwhtTeHn6VuBST7vetVUVDw5CHx9QpBQC3diNbTsE35YeBPfBFo6VVLo1FzzaNRsMZvfT3rF9kD9a",
  "decoyKey39": "3x31gL5WD4DeXJLV3HSz68QAgKAwPPYWdjZxdJDR74Zc6SyYk8ET3cftRfKmeGPKLSSnHRfuk8KRhtj1h3kNifjv",
  "decoyKey40": "2pSsCrngGLbyPQTx6XxZHtj1oAmxuujt6ssimQWNxAVWgdc7kbdv9mYnMQ2FLvarVcRKWxN1Z4oSrWJYuQvmvVJX",
  "decoyKey41": "4otZ7hxumEWKGhHDUBzM89ughCLuNygDHtwHhUmA7Qs829gEszVpojA5zTJjgPSkmqUdJLsKAt5LfPwBGuA9yQ7J",
  "decoyKey42": "2ZoZbsFX6KtbQ3CBN69u2K238K8vs2Q5xcQjKFszDPnTmYFDyrTgk3buaXFVmAHbbJGNceb38GziPjQyPPN4fgjS",
  "decoyKey43": "oHL2U91UMkX96ZVEUYBm5VSMf2hBH3QbWXLCrDQBNc2A9mxkvnUrX2YFNnRPVYsUtGeUFW6uHJEY4WvNV5TxA63",
  "decoyKey44": "2MyGrfyEEFkZxo4cXqFjNoev84aeNSxuRihogynmPyFXxomv5cRkjFXx4GQoNNFC5HcBVKUo1ucvoT4pJLmV9fhd",
  "decoyKey45": "66oSqrT25ox1VtyAtiw21ZeQ4bin4L3FrYcushqAnbSQPSXaaQUWbhzwiiZGy7efqGboMPXzNMa16H3axz73CKjq",
  "decoyKey46": "rdTkzxxSavqKDqVqqBMc5oASaxWiHZ4ZqPKiKhSeTX87D4ySjNrBfWxQGtsDzeYAfc1Kavwr3QKkivuhDwqy84r"
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
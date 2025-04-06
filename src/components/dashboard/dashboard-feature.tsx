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
    "4zQ6px5b5CCF9BEoTvk1qjFcVGB6tcCkVsToBHSW3aoDDQUZvNtU5dWcFYqteUapqh2gdAcuJ3Yz2K3kpyRqzMyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKDYQBMy3tc8sBV6my8zAFb3c7dastSGZW4FcWpcbTTucxuuyk5LfFXBAFtVrQJsJWWC14DLWUxGyC2rpkN3oF",
  "key1": "3G4bQDoCto4WU4Quj2bqs4odFD8u7g9HhcW2vj5uYxEZuDrvts9pFbVTbuKPkCMZoCSpYQtWi7gD5AzAb2rjw5FK",
  "key2": "38EQHwNMnDwPG1MwURtdog5qWM1ybeRiM45yUn4mRandMMnBK5b89Bt1bzALHZjzZwdDATv7xoU2TVofhw8yTg2m",
  "key3": "4HXJszDDtsu6Do9Qb2Ks7okrxTYfHDtzYr9QuxMfou9o3hmnFomcJS9jKS1SrCNtcexqUUfojbBd7NmRrjvxbUV5",
  "key4": "5Pk1wke514hC347AoGPj3jMrm556P8js1YJ2z7ZLavXAhcKdecCgckbY3ZS8xe4ZBg9oSAZ9LdpJUgahiy6W6NDp",
  "key5": "5pte6jdz4yCsCQpi35pTKkSE77mxgsN9Gi74m5xr1NPyAxJByajCiZqtg1c4EGm9xn2ihDUHohkNRniJszYEG7R2",
  "key6": "iLeGMMuYfZVrSwkpuY9YH3KXyTuqyuLT8jityRbspxGe9AG9pdGKGLKPLaVxCv3ZCCjEPGWi6t3vYAhS4TqBJMR",
  "key7": "HBqqGi3KqjrYAWbjpM3dX7NokAwtb5N2etP4kJC27CMrvFKmET68BWvqVFw8DYtP2aXCprwTWAaiZ2J67EHfACo",
  "key8": "3B2vNPm3LKFQzYdBQskswGRMPr83UWej3TkiwW5DtodAqBt1AtNduAshwMqWrnnZMi8q3gmYM19aU2fqN9yfb4PP",
  "key9": "2T9PgVDDdBAkmzrovc7q7DiPy7NapwsdzsfSgZrveTPk4K3xoLrLN99o6Bqiv7UscGrMoXMckDRV6wymK7jAJfXT",
  "key10": "44apNL77FxqNG4UKTJmcvYoh4h4GVVHsxQoqzgCHzg8qSUrsCjgNdtrqfbE8ngzZ7nQ62PihTJEXbrCDpKGthaey",
  "key11": "2ZmxRw8xcxvt114rU9yTreCirFmstD1AQnKQtvnATaP9DsXE9uDhXu6PrK7NPjfez7aQJAXSZPVcVAphU34pgWQW",
  "key12": "28E5uDwbRH3m1nawydBGFXhtGUrV3cqzVJSbgtBsJZQprs6VJiNoDMeECbHFiFf77ZtRzHuydN8qjdXJryAn8aDW",
  "key13": "5XRmYQNsy1Uwe9T2hhPRg1UvSXLw71DJLQP56fiwukKmPrdK6nshBGuL7SD11LC74adWWHh9i2BdPwWnvs5NxC9",
  "key14": "5adSFU73znt5BQhSTKu4ChZ3ADMPNr8AhjCUCeUY9e2twndRMFN7avBtuzrTrVHJmnhfHctsi19sRUz2xXq4sTYH",
  "key15": "42MKz6tuQ6bx2qJ2hrEjb37ejJE8FzLWPARDBRf9YZdddW6qXt4Pmqs34oGSm56ZRCr5fGpHHZxTr4iEdes8qRW9",
  "key16": "3wZzA2WxPp1vqTX7F2PomRXUeZ2qRyZNfcismkPvopajAe2oSvL3AutUbbb3TRp7ocpmiKYzJaQizWtAT5KXF5qj",
  "key17": "511pQSstwHy35dAbBVvfHGtf7vtEdi6BswCM2xFYZZC6sFBJnYRJdu5z1pYVHJ3JwfUoiRx8RjxT4xycc5EnnWnC",
  "key18": "2mKD3qAqarExRB8JG8fNddLeHvkkhiyTA4CB3zhAnbucAD55csqRVmNubD7eH8gaRtppRngfFFaEFwM8fezUk2Jc",
  "key19": "A1inQUs9a2nLpDypWo5VrnM1WNZjfXXUQDx2mfMPqsqWuzTvHyGmTKCVSp9UCZGuFX2D99pZHHN9KFXPWPgipFM",
  "key20": "3vYRHYK3h24kRnSHUPbS2tM7rDFNv73zV1p47gmQpsrPwJ5dbGwTB5VAjmweMeuEuY2m9oFUMSnsNVeF5q1RCH8",
  "key21": "4Tm8a8zbaqcz9VCwJiZpkgg9k3tNoFNG4K9Zc9heRWDzzYL2fv2tNtyezj3DhnpCi8bYu7zcyfgsUXgpfXjDxhSd",
  "key22": "461rHzYKwoebbLDJZnuwnU3hcYsvVTSgPrVAwmjrQMAj2X8PCZ1py6yXRsPMizHZQTggB8TAYnX5QRsAGu4KNyFg",
  "key23": "3ZU2ogDmeTBRqcUazVeJYL7vghaWLSRozz37Cpvk5eSqHhuYYNyJFqgrcUyEGAwT6cKV4ATAb85tW4eeAoMGXtAi",
  "key24": "3nSTMkc3epUfT5gyvWWL9w2fCnZkKR2kbLVLF6BENBUbJvFfDJ1XMFsrYpctKdThzn844SeaoV5QUEMxTCLobTu1",
  "key25": "4KpEp4tvZLU7jhhBhJ2PxQ8HNVsqdjDxJSEzZEj39dSgydKTLNT3kJvBVfrc6erZnZQpEqCvYjoLSMwjbJuiJrJp",
  "key26": "5LCwkttt4PpM7r1oPkn5hTCMMAJs4dDxAptN8rQjAqJFs8tWER6nGhd9BNQTR2RJaeyzsv3r8EP2TB1WG9LkWs6G",
  "key27": "4ctAfUaMn8Dnz4nqw7BoDXT3j6PefGEsJMdTnQjxEmiEWae4siFJfD9AzYzWxtHsX5meRzvbzRuArfZz9C5Bq8Tj",
  "key28": "PPgszJSPrguyTGy9MdEjiMibe8ravTc5J9JsR1kDfcdiLywUYhazXZMGieZQ9zvV2dsHVbFcq5nwidrQeUYgNXD",
  "key29": "4yoQJthZxfdqr2hPvgmXTAZbWWu19SUwDWfe7q5JNXcWKUxDYKWfDojAj7onvG3jAAeJhqETHtXGmU7Z4gtwLdYV",
  "key30": "43MYo3wondUEtMyyR9qXTAeTMjuknnqrcbPNVvmejMGk3CRmiiDN2wsNEra2mfZWgwk7mqpYkC4TdhC46nBzRk3M",
  "key31": "2WUeq6EbWfDddkAihXs81WnuXGKSChT3otMMfLfe84WMMdvC4sSG31syKaLXPcB8A4rconmnuFjDiQck65DB8Lbk",
  "key32": "3PS7mA543vxYNRV6ciPrxVn6bmbyff8c5ta6g3rybP6TLZGyWfijfWXsetsf6c3GdNVmoxAeH6RN3o5L4vUBQXP7",
  "key33": "5XEVtn8DCfaDkx5HDPbSme77gbbx8H5bMc6Z25Z94LD9R6wk6sV7yHnZQRFQrW1rSUBH7gtj9SyGwJhQG24amqR7",
  "key34": "4bHu2w6RJ1me5Y5GGsehzbmpw8Qz9wimEhYKBt1sXeP2bXDi36Li75iANPvxmeJLCNxAXfNyGBEvLhSHeeN1oXUi",
  "key35": "3fy1hRLMPz1xpMHBFbyW5MC49MMzPZhJT3vxvg1n3cNAZsVJMqwJytSxC1dupekEpRttxiX2GH81bbncNCZnbnDe",
  "key36": "HWpjZ42PervQE1fnJcXzEyratgc2jAAs17vsWMFhwUvxsx4kReBpjeX1EhFqjpqCisS9NHpBkRK6XTgiFuEnd5j",
  "key37": "29cAiM9wBbKxyxDfHMtLJ554pqCYtPQafFYA7DuAiiz8dL21g2RPiz6sLh7CZsUhCRUHyfGXbyukpqCjSqVTtWe1",
  "key38": "2pT4Pjf6zVzK2L5ycte1VmQdqNHzZHND78Lt7tHh4SW4zFpYpPpSfBfXGL9tdtSgMv4JytEs9KCWPoFpZ7Ar4jUT",
  "key39": "q8GuKVpcfKk92iyVL763fMQWQt6f8NwePZBJRdLZ5AK3BP2xsfVEFNS9amyuZ4J1ZH8qf4irbz793gtDjHDmX1j",
  "key40": "35oDV2jsoeu37yhu9bgjhfigVmg4i2VWKHtkrP8FPTwyqKbEEdNeuEPkV2unHzbTuc6SzkbqtFEaJJocvwZfBvTE",
  "key41": "2FsALhH9ZbjEFi7bGbX2G2PAezAwpNcy5khWawJY1dfWU3H1uU2rWhrjEdbaZ8MPtrP8G2Qpe5vVUgtCA45tAxWX",
  "key42": "38UEMJkqCCR9LDbxyA7Lg23w4tbM9eRWPdJfq5TmoDKvLQbh65c6E5vb9nsYt1swqGzrPpN3bkMY3RmE1xaGmswJ",
  "key43": "MHCey1SEA1n5xCU5c5NbxkPhmJK89mjkdF98QdbD5b73cEUKHhqDzHfeayKCLWiyzx27bH7xpiigwxtEPLydLdM",
  "key44": "5fJeet4QRs8k4Mz3bLr4eS3euYAG6T8AnknvPmhsmTP75ZVmG4foLyxdc7qBXyiUHo92wJK6wrvQdRyKYQBe5B7z"
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

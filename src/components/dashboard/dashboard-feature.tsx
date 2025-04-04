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
    "5PFR6ZVXZQVpjcXHvUrHEUYCtgjq3u6avvBBHS6kxsVhVACTVSsGoCfvL6EobH1ky6cUEMQZLD3PEx5zJGRAb69q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZQEuiUVrTEFqHomrZRJ6e9HuKindCwT5GPuznKS2Lzn7qMWmNtsLKPD14oerfXoAxk1qtWBRiFHGCANzsRnLAeN",
  "key1": "26n7RECY4JbEcSbLqaRsLAqSMcWv8NX7K9y1W4vAFXyS4MKYBt5SA6Avn6FiVaaZF6qBYWdqVMdGZ6ijzT2jvW6p",
  "key2": "5q4QfsNiYr6Yk1C3xCzCi5HVKt5eP6tiirZCuGDm8wFTmoJYckWjeFDXbJyuyvp4qXvJRzMyiRrgxryT3mE6f3C4",
  "key3": "58nqJuseVDUtjUrp3L3ZdFBg5oyMgELLYzfVa8e34Ad1t964JbmAK8aPCSTd5L7uvrXBS8nBFbDTKGdTogqwyVCP",
  "key4": "2qWDH91XrmRB6ucmjYnz662yEUBqrirMsR2iU7hJkA5g2gnjxc28sB5YHUMTyUnu2VHAFRbAYaQr2XRhBHdEArKX",
  "key5": "4d6831mxHjURFyhDFWHrpQ4LW5LnQcTcaW4WxQHd22brhpYtrB7GjxL4RJX4NQ912ja4JABE38468KaZdb8Yw5dX",
  "key6": "WE72VztvED6EGMDKJpPDw1z7xTJKbkNPEbQmhfH15SJPQU1PidtSMUkcTUrTLQRHt8CzxPGUHbHZMu8agaVV3kr",
  "key7": "5gbb1LJmxto1Jy8PHzZuJP9rFZKuV5y6DLfZ9MSdqC2sbPGSRRKL16AsffzxfJFWYq5vFG8c7vYB8UL7Vf5N7JuE",
  "key8": "2xNqxi4gVkFRSLLZ55rieqbbQLR1gNDckvemNcktiZBEPREeAFG6FVmkF6qeULBRbHHAcyJwcEskVz1JZ89XwW6S",
  "key9": "haAC1wzUqSd8AfpzZ5c1uEMHUdsyDGhCPJjHCNtpMR4W5ZoEYAgXdT1YF3EVEmuGbCmoqcjt1mRpD6jbns6YwuF",
  "key10": "3janVQTmGMXF9WRPM9dejUFY5zqw8b7qeSrGXWBLhUd657FhVTNq61c3Ry9BLNTfHXEAD9M7a4TQzwEHxBnYgDkU",
  "key11": "3MXxUHGVXBuL8fSqTj1J2KGjMK8yAuboa7VYFqGgpSi6bHg26qDRet1GcrmzL5aKDvKHEC3xzdZ75G1p626xDRJT",
  "key12": "47fudg6RVD5jYAkjyzLHhcdKiDxt834TZ3T6jp2wnMjpXeQp4rb3dW5C4vdtXFr2TJgRsnB2ehVbWuHoxQ9KyEZ",
  "key13": "QesJJzZBfr4J4a99e4QxwifVR72N4cEdnWh8TLDCGhvnM9pRFLBLiQMscW2Q3sRMFksNhsTQaWaFn5jri7TSWSP",
  "key14": "3nzQPC2dcYpEeEKTBzut3WwCD71pUhySQgebaHxfmmrgF8VZrw1HqQBjWfi5TpWPSAYiCCvpV7CmvmQAPSmZtNqy",
  "key15": "5A9R3sp6uaFXNyANAvGJC6KtVxQQ9c6zzWTeiYPmxx9VsVGUofoZgRAMkfUTWKk5LMV95mza3Bk1sYZsJL7Nk4w9",
  "key16": "4P5hEWWr8VcZSzoyu48uvPo5sTp6VsP8DPST1EVa8HRCwiryQf1EgrzSE6JcJazBXgHY47ij23zKCpoDZGgei27d",
  "key17": "2Jh3VskCM5UzghVmDNrHfkVSRbJfaVoG5Zi5e4F4zhBhbpDbBiUkqH58hfnNTiEjtZck55Sh7KKTq5qJWJeL3Nid",
  "key18": "3q7N9krdVdaLjvhaMKq3PMneBwjd6R5M7H3RgbQhG6JAGh5Nq2JJ4KAb9oHhTwKAB4sWdxvDtJGzfc9TWqTUHV9S",
  "key19": "64Ar3Bm7PE7ty3f55uvvGzv7kZpd215izmxZoe5tW7VMzrsp9hp7vRjHatyrmbqzNWzaK6J1ikvZ9zVBrYKkobqG",
  "key20": "2vraZhRobpdtPotN5BMVHjmaezy817KYJ2o957cnPiKdFKXfuo5BPxTUHJrBmzhaW3u3NyHq1ajAUQKmvvXzeSFs",
  "key21": "5tpzat1yJp7i36NDtRZZbyQd69os1PiyRFCGVu77diB2DfjcpuMCA8ANoVuWLgdx7fYs4UthxSP5GXWSDFi8fR5q",
  "key22": "2E3yxpFV4ZGNyzhUYkTcWZLFVuvPEx91pEKjcZCefcg2AtW2okzYBQtDrYFBCpSrYjERb5dqvD7UaSWhThqovipZ",
  "key23": "5cDah7ALL4m6ewBLstNacSPNSqvTgUJHA39gQ92q85wuXakDHQEgBwPeusMkC6VD9cYp1z2uWypf9mBY8z4pocfb",
  "key24": "2QUFg5xBL3vfonhPDbgrgceGUkcgdXiGNuJA2gxVdqf9nce2D33Bgi6cHa9rCk1iSJV3F1CzTXmkwpVMB18eSihf",
  "key25": "pPwASY3CwA2Z69Le6kpbKD6fUiGhGAHRVGyUBhgdN1opkivhnoadXq2grbZMBpqjrUSQqWfvtvbHyVTfvjesLnV",
  "key26": "2wNVE6pfHFx6obXSXiFTr8f2cm6vujxkDmu73DmCsRfv6LwKTBhwdkJg474FGfxgzLV3KkN3yHFWeBZSJoPnXA2E",
  "key27": "K69bKc6Jq5D2NhRfbQGY8dZHtz8pB7ref1xqn6cnUBQLzuToLFeqmAQ73tzAqi3cRyZqCaTtZxxH2ETLXTTC8yH",
  "key28": "3An36geBkbh3tmEGTUsBwSUSyXgRfVUPLzHWtGDtD1uBWmeFHaYampBBdevNKn2GeRCzDfJ7He7HzNjWfvcbvQ1h",
  "key29": "3cigAZjGR4Rjyx94Z8Gyn6qh5obsSVJbjxBUNxohTe2Qw9A1TxUrQWVC4DTgFWafWqJqHvEtbM4ZnsiNSTp5tBju",
  "key30": "2QsF3eryvPXmtjZ2h2baEnQfFmJgw88r49FCnyRdmkSAxSCjnS3v7dH9GAosGK7eHJuHgH4Fx63tahLNmofHZfgw",
  "key31": "5XrR12a1mJFUysxVyxXe7GAYoox6zvmUcsuQTxuH3u542WRfwjhyF3DGTWf8PyXLGM3xXqAFg2Q9BhzBmbqjTvgm",
  "key32": "4Cjb5eewnPud9iVLNQ4xFZvKfZpYXfUjAxeaHMvPrJyzxKjNLjuBLAeECaCGKpounpp923pZaR6psKUdjZeBuvp",
  "key33": "5sbr56CUtCFbX62quLrgUNGLLBusvTWFAdfmY1CVmLRLrJa9kbgFEfvTSNQEF9fj7vUryDrvetttxt2DfeKpwisA",
  "key34": "3GwhzPotATjiXRhGCdTAmptjffWE9cdCrZGtnxLStGhi9gagdu49k9mUJktZxF9rK62bGbS2NpWoi82FCiHAji86",
  "key35": "5msNfiHVb7r2jJJ7WZbzKHEoggzcFq5cTeQNybdWm2FfSsbSXdwx4A3sY7vGut4WWoKtYsEhYukja7Kv4Y6REzuB",
  "key36": "42fBmK3ceTXm4Ew9YbPs4YJ9x7CWKg6ipd6MCvpwXaCHpMgnAEYQpPNom678nZFRq7qkyGCAKH1Nqr4WqeQn2CJg",
  "key37": "CeWpQNz2wVtphnamyYpbroKKHDiJU6ojGHS1iYnpSbB87rCxeYhCccEAnLEDdVBaqrMqUV5u4oDy6g7ZFeuZUaW",
  "key38": "3yXsHtmnyj7EAkN3KVoLew2R2CfrhjW3muSEmCuWj2L6Hqmpor6KCdup9RXyryEixUBtYiqkJyARcM6qLsiu4u9d",
  "key39": "42PutjRD4i1VS97GGQQDSnkSmWCrp9JgS2PX3VQFtMLBRQM9LXyx6ooYapjc5AzqRYNicBehtRRUH1GwzxdCaUWT",
  "key40": "2MmitomMZsfRxmjrUAbDw5toco39tdTsDgPeWfYqTc1sGtxUCGa9QjtjLAXNyHZB53kkuuP1jMpmwoLMDghHDyhN",
  "key41": "Teaw6LSPgXd31L7SUHXhdUZcM15Vqwp5WpmFvzfdmmxRY6qCMUnuwoqwxDX74j7QEDepJnF9mzCDTGWbPgCVHFd",
  "key42": "56XZYMPqnaZ5HJKnEKapg1rXBPrmrdcbWg51X1UTEVWfFoH2brgYnUvZLFgkK5mDZvZky1yR8Sz8h1AdMHuijTMF",
  "key43": "UxMV41CJYX55Cqy1HiCvJwaf4QowcsgZS9rr8hvixfK1h51x53j2fWSVPRK3GsQ4ZksWjrc8JPHikAXc8Zecetp",
  "key44": "5atRxZkJEhsVvxGhRdSktREN8MsncG6ACkENTfdgr3dWSjNR1LEEig5oGEX61UFVJWbhiVV2XR8wi9fFLU1CFHEq",
  "key45": "617MZdk5foJEGDU1FGDn82ezoreH1P9bop3kBB8Q92XZMakSJy87nk5dedMHXrxGwVjkd6RBQCq4fqrQNb2Mp9XN",
  "key46": "3poy4Nw9EPYcLYfEoxaRmV4EcsWmPDd49xGxa8UXLMfojNRCudX8hTGoSQTdRZZ4yzuLdzSEgqGmJMZoYbcCSAHr"
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

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
    "3ppwN9VwBZczkqz297F4xmwsJsAf3Uvu7xJAmzemgKpCAgmLszUeMmbwGLgYdygnp68TgCyDrFmcr81qcfGpuvAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k7kTehSoVE8j5LtY3Y6RRxc8cGmQJU8jyaofKFaXLe1yyjdEKsE6HoKV3WRGym8tNxsHxcpyn7NTpBZvXhgQp7g",
  "key1": "xFQoFzZHrsPKTmPEVLBEhbLhUHjdu1vXFCQQtsnYFSCcis7KTBWsjms3h28MQzyQoXKm3WJt9zJX6vyB8dTiSip",
  "key2": "42e6dMGVWNH9AszStQUQtae2fAM21erEwESGcXDpQque1pA6Gio5joaYZU2EpwXqA7khG3LpXLgRxKbDsTZbVmCc",
  "key3": "5qaVC1Bz7zM27gY8Duj54kTi73hfeHa2wf7U9x7cTCRQx5Am8sTJZE6SwSsPx2fSrKEm6qsALLNuse8XmYkm9J53",
  "key4": "zkWfKQVhQiqw8YmQDihfD6SPVSJPmJaiNfgr1x4QQveiiArdfRgs5BMLvwPE4La5EdAQGqzd7R84fnRzn3c5tJR",
  "key5": "3AvVtpEGqTFJUeoGVPbGGnaH6nVNsfu9KDwdk1tkBiJGTwS79n6UkQvQeL1X9QMU5Rfb1PMpuw1PYVQQbVLfvB5",
  "key6": "2Bi6dCqD5BWvWHtz8NUnPUYv9wtFyBrdQ59PJWVs3JJvGLMHP3Nc89qJ75tcifF2pYNzwBsGHSekeVGuFwFd8EXX",
  "key7": "2f9oqpiaC6NrHGjbkPVpkpLufxqy7R4qDkf1WcwAi2bmRFeatkMszX257UcVK7TUUUHsvjQhqHqV45b7JT27BK77",
  "key8": "2GZtgA2PVh2D8MUE3s8HC5juaSXdZXyDwGvWa7n8BEmcTKTTi3zEDC6JKoz7cirPEBHtpDRH8yWh2QPdSiW1gkT6",
  "key9": "2oLC3aqNSRevwQUiT3AoWoHqPb6q75iu63HAkNaaRVjEtaAJWrDeB8KcfLXnjob1GfpXUsvB617NHbj66jsowJTu",
  "key10": "4FUVDcJHnwz82K7eEA6kxJyAm8CBN5dUJwMTdCdr4ggAuxJijxeCmvCE99u7bY9ZuMQhwtsdUs9A5fnFUc3qxZ8R",
  "key11": "5Jt2s6AgW4cJKKRcs9tXZrr3MAG4xwhdVCowEdsQ7xfb26P3LLjEpwjeVGs64WFzrotK4x9SZTxrLcYin9iXRn4M",
  "key12": "51Hw12gC9N4PaGC7zhhpMMMUcQpCtWfsw1Pp2GsNPrdYt2pFWYb6Vse9VRc4BeThnMNvmGGEpz6Rw1QUSZnJs4PK",
  "key13": "3mQBnZ1uaApMdbzVv9JP2QoPaXgYE1Pv1r6rvfhrvxRCLLNMz4BxrEzjKEtZSScSPnUnwYnqUUKaULCwqM3xEFX7",
  "key14": "4s2pMexvDyV257RzrDzbZGNtn3ham5HS1mYUVWSwWNaVz8pgHAjgotQfPZiSBWDLnm5TFJAfYmz6HqDSyzp3gtd",
  "key15": "3h7LefkUa9czahPtdoJoCfqDNJKqwszbgRZ6Qica1mX67qQUiJirhFqp6oKcXfnFzCoitrodsdrAkhfB4bNsdNw8",
  "key16": "53eTxeoD4DXy4sk3YrFJgQ1kTaVnYD6jiunhFtiTZ6rQDDqqYviMeFnsw6MuLjKVv9JRNRZjVFiyVvrf7rAd2C3W",
  "key17": "56npXbVuhycCARbDB2HPnf6JG8igeoMSQX74Ms3ar8kWxTkbfZLx2g4ZPwUUcwFdrLN4YGWFaWHhkwcTPpqLBKpK",
  "key18": "36TiCQwmAKSgXdxymbGSAfS5KkdXCqJU5FtCBLHjVRRXQDLBzs6d8YPGzKJR8kWJu3EWJScDMNm81yA5KKQAFhxK",
  "key19": "56DubMFLemhc3uaUJto2F9UE9EXRsJaTrdbL8NMdJa6YiAh4g4mqRogx82akWSxLEKR8eYViiMES3VhcTJtnCYdR",
  "key20": "SWKcYEvSKqfKcQFARUNujQ3pdfvjbXJzib3NEh2SRN3YpXLmA98j4a4GAmxFjNsLESniVxpgXTdVw1hGWqgUZHj",
  "key21": "2j4wDzs9GgXVR2wBouYdGhNEsw4rHQAfKZdBZ8FbZKt2bCUhRmZwcAkuSgPsDoozFNL75TxiAKwMC6iu7C5huWMw",
  "key22": "BuRwW6hcHEnb4eJdZxFQUeWyD8vKUA2Zsuxj2YN4TvLbn5NxfswMAWMmgBRRmpDSfFtxJZWW6KvfHEwM44tGdHY",
  "key23": "4jZzj6ffUcbbttruNnLaUGU3ebjqHQKGd7juJid9RaovJGzypoUfZE19RYLjgQysa6ERPeMQMvnZWfe6SPKnMAJx",
  "key24": "S2n4vHyf2FLsr3kBUtg5Jm9kXxNEas5Umpyu6X4q4AGvwC7GmfxEV9ynRKq97pGzG6JYxP3h9bKe5b6ca72HWct",
  "key25": "pSUZBX72Z5kQbVsgKAoxx3phnVh19Smh674chREe51o3pyz3a9erVtzVp4rAzBZLGNk6kgk1j9QoAL2mn8FsnvK",
  "key26": "E3kmfeGn6euG8CM46DUjDfcyWynyvfsV9J4RfgF5XtFxGGMN66iPymFRzzc1w35D2yUV9KmjTo5Ndt9euzGmwtG",
  "key27": "3hZuZUvnmQfzCKbAnwt9A4FUEas6tacVq4LjnzYhvKVkmZ8WUmNBEvzitJfRqnCyt9YVvxsjuqg6S3b6jAzPMkGT",
  "key28": "2rFNdSZWUTooSGiHivLygAejotZddY1QHYMRYkJV1fdRADrmqJAtBFpZbWxHjxRGCgAPbVJJqwmLAnJzyrCtKDdz",
  "key29": "46zzMcPbHqGbk5n1Lmd4r4RC7oUKfeTrTR2gE5d2msU6poyz4sRXrUuHrzyn51xwCGG8nScdHV8h9CV1WJSKVeRr",
  "key30": "1MiBYqJwh2TgagZUvK3mBRFoD7U1P2FSZGnYpuMSwzxcSC2aYY2uJZA1pewDwDG4TyHMyfRg2qeiuHDZ4uxcafW",
  "key31": "4shLCdEa6ASJWoxWPLwSna3nFH6Xicx6NECUfs7FWBPbwHe81faKSpVJbLbdSoEvJAqdqPZjZD87ap1FSWM15AgG",
  "key32": "4pMVE8fSiLt2F47vkR2HhRTqkCdTPS7nwQEU4Hud33hr698mT1wCWMxKafPFK67MdA1cFDuF8tRoirLwfbasvq2g",
  "key33": "3WFEgBCJjyHm7H9r5KMBAC35YcURpBnRYVbDME3WF7wBmgnj8aNorHN6rfZqw7GrN6cobcimGUgvTMys9NLsbVqk",
  "key34": "31fj4pbbaw8MuX7vfsA6bPdugx6ZvixCouSnvRD49Q4QrjgU7wpk8hqXHjss2gb8ofnXAaGgYJunQ8JXARu3vLec",
  "key35": "4rgkh8tq6VsCDUi1Ynvnv91gPEZWtXkRxkYgXk5q4xJrBUAyhuWHHtcUXbvWAqup2jrmb3PJH5oT4WN9tS2Tn1fq",
  "key36": "5bCCmk1dWdGNzSKxtYngwGMrwUNmAq1oFKuNzSFiztyoDh1XZ2nSAfUpVZWF1PYjgo94MHwdVQXVjWM2prjRGqc8"
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

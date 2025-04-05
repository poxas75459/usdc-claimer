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
    "3JdcyyG5V44fPNT5dpDdt3WTmfEry4n4NamwgRZ4XAUmXSa2Wu5cgLzzyJfXsm4gfyknPmrPaswrZBh9zDNKdKkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oqBV2osfjxTwByo9Cj1qL4UBnmyxAdXMqwC6AEFJxg99b7GTBUnJMtJqJ87dTXzv91gRQvk42oaqTBhQQXpjsA6",
  "key1": "3vUe9NhLvqSNEoTWR5Wn1JNRZ9ZHo6szqsigLP3soibyvWxKEwRJib7xVdMB4pZaci74eHv4oiBP775Edq57jWhD",
  "key2": "2o1rxzmo3jC4T3PDYqAXEPyeFRmTBWTwCpTYw3Qsn2PsisKK2a7bJLHj4aFJoH8npba9dEGoPWZEDT8PLFnsQw4q",
  "key3": "4R9TG2WUztB2vy1ZcmvNeCsiN6kQ3T3ZL9A3qyka7cdJYK15edh7WK7UYZXpLAbx4VVrDuaQ5EDyepy9ESjgww4P",
  "key4": "2JkmvFExYKBCAvvGPCQHNuVPrnugyTxwC1Ye4QLBZUASezRCa1g2PwzR4h2LTAXmR5y9RVRV9RGdsBXkr8uXz8P5",
  "key5": "2t2b7pzAA57NWMSyjSAY5rRvmjUV4oGCmA8i38awivxsRM4h8YKftUD5aFroc65GfadqRzHxw7siLTqSwvz89Vv2",
  "key6": "CvukBU7iosG5rrDBygcqw8BUSK5nq9dfQPPeC5WwbaQgYbFEnT5yp1nZPMgCJ5DCzvDZrhkjVdU3VkzJm3kAevY",
  "key7": "49k9T8WrPQzeMZqeFgM5HT73CepBHP3Mejq4GCuyUQjMdN3ALU62U124aoiP3Ld7Ezu78NWcjMiMXBGNXYRpdCKH",
  "key8": "61SD2hurXtqmH6KtTWof1dwFmhzdQeGr5BWnSpuDXLyypBWMjFDCa9okFhRFpCZWr1ruGqxD2CQxDZCFacA24oyp",
  "key9": "63xebcB95wfoaYa6N5G9rb8J8aqw1yc9fTiPE1SyN7mHYhCWVXzBb7FuC78Q1JEfuQ6AB3shgW4dR6B8p26D1cs3",
  "key10": "7eqD6k7D9712rWqqSEyt88RdEuPNAVkwMxY3CaJmQQCQM1BkEuaFFvaMA1cBzSc465Hvp4Ff4uxUiKwpsjzfURf",
  "key11": "vjwv56Li26Q5owqXHwGfXfhzch821sWkeyeaMT6DYmVfK7zextaZ2a3itNrfR7DDHeyYvW5tz6SkoRusXyoVKTH",
  "key12": "5XrVXC35Au3zoTd1Y5L4D3nYCXP8EQPQzL96j2NK9KjTkj6MJtppuYjKLgHm9yRPHs3EYoAaLFzW253QKQ7Gmi5W",
  "key13": "hUxa5QMf9HKWpLAhNUusfSWo19G6qzHnte4RL2NDLPvShcshX75gGpJoHN1PLsiiKrUR5pAVkxyHPqXZTXLHqXP",
  "key14": "2joQPz6XrCnhdHDhQr7gVaTL1Na1RNgCyGisgL5JUMzcJWSCjHVHN5eNgXo5yUyQJEVGUNLu7ywTiAiwx87D9jtL",
  "key15": "2ZdizrfRUokC6toFMA8ieRJS3mWdaiXGDa8DsbXcNRwGjiVLTPh8GmEyZPvshzqrcKR2Hqy34QryoP4U4wDzcWz3",
  "key16": "2vg9Nm6PWR1Rydfd5QMXUWbWNntioj7vtBKDexRLKG5yb5bApcbSABTM4QzjVSE952jrfiQmMCHAih1X73H47Ee",
  "key17": "5KWRPkJzMEiybwB5FghLNDmx6vCPJ6qBdUVUnnDjK3AJ517UMHCkNNfcdRmRbTeH2DGQ1PW66rae3o58QNUSUC8T",
  "key18": "tyNh4qc2vfZwXRBuXWrJMWnwJswUQPTGBWXePPNabXN16kTAYTppGHXyKY9S4PvWc3ELZSZhTYZh1QLaSPTJ1Ca",
  "key19": "4edz2psXrJM4wmRbwDj8sewt3sr3Udyuz51VYNMgPjV4s6R79J7Ro4cP8WAKBg9MqBbrKSigTSfoffjYHmDPGW9t",
  "key20": "ynuSwNWc4BaZxTmn8uBv9RqWEGvGWAEv3pnooRaCmDqZbk6YsuwfYHJsD2NS98JHN9zGJjxfxsMxvPFg4Hvv9qi",
  "key21": "hcSBSFH2HYhz2Q1EbJJ2B6k1rvX5Y4iQUiSQPSRXB7kuphSedathGkw2uThGEhQQxxTjTf56UiACDfGtAxd2rTD",
  "key22": "3UDa3ZzF6VFrXHvQFcmC1KZcvMrehEsbs4ERwxC5qjan1dCQqXKu8KRtJdgHUhM9ShF4v8Ctikn6k6XdmMqTeCAo",
  "key23": "5aKVijVoE79TtyzxuFkzWMWJA97vVDyxqMdPDbdWfwjEoajyxT7PPsyQcxTMP4E4gVrZcwTJLkusu2eJFHqPy61d",
  "key24": "4tyE9wsbTwj3u7KzVoVn6TtoYiV9N1eV9MXpuwAjgFaSXr68RS7dMrkCdV7QLF14MUxHBJGY2HiifbRNVQta7BHv",
  "key25": "4SUPqrfQ5pFLXMvih7oTvSPe39RKrF2PBbdnpZvJWL6qExF9KHLwo9ivBPs4WEUcGX2LW7xh7K433fgeHJEzcE68",
  "key26": "4iM7yeWxeEpnvqw6MgF7tpueseJNsWaza1iYsb5eDJfo4hZf1WsfNAQxpgXwpCJjeuFKFLCKH2wjoLMyJjD7S2S2",
  "key27": "2HN7ADvqCo4jXfsHjsbAVp9TJfRSVgZjhHrHvRZWLPntfS8pbq2KpojDxUcQJ5zbFwWT3oAb3DTFbxKLdfrAXsVc",
  "key28": "4uGjar5QorN4V52JSmeFJJNQ7UnzZeP1yVrKE46wNwFmsYB9uA1xkfusuAubMUbnihs4MuYTRwKasgN5PeEeMB8w",
  "key29": "3yKueqgfH5RiLKMB8ocbJ9TQQdTz6w5bickBW9S7o2Fi2RbZ54bkb9wz3gc9VS4cVexd1P8vCMQpZsPKNLsuPd5",
  "key30": "bzcdaPQzHQ7Rm3Eg3WiQEoKvhDYYRUBQ9pVCLT3fZoeJgSEvejHDicXwuxTvRo2eGGoXN9so1eGCZwUNMu5SDJ6",
  "key31": "3cFBVyNqMQRZt3Czo58T2X4EYiE7mNfAviT9etRYVPe4CBmQ3La4j3qaz9hnPs32SEjNFSuJkYRbL4dqCm6cwDPX",
  "key32": "eDHB5KTshLAK4jDR4qFM212fubVBdxkDV3tQBAmp8WEryHh4VVY6BVDUjBW1ooUTWgTHCPK9FQ8Ga7GtFj4E4GG",
  "key33": "5nmeBNVTaGSvzszz6Jhh3kYe2RYswmGrFYCryEerMbGqZa86vf8xsHoUSEHRi3M5QvVAuHd6oCiEK8Eai8sS6eiS",
  "key34": "MWdCfC11978tkJftDXkacRXyZAc4PNRJMTi8rGoMvWrgHrUxRcf81rZfrVkPJpfaktbKD9tJDpdzcevo7F4cuDt",
  "key35": "2nrgrqmbGbztGYDd5sRHhKEDDU6jbnSdgjJf7UMcrNBsxPR1ei2nwT6CK1zeshaiGg2vRFdoEv9t1rZKUxdvXfSR",
  "key36": "3mAhsJvAPKQKetToM3oeHAEgxNPueZH6s8X5bPgsQfYenijRdBgzY2Defe9ZGQ7uskhpyrVvfq8bw5uxPkZCf9BB",
  "key37": "32mRfg8KWvWJ5dxLaCxfzRivAV8ootCz63N9QXnh1k1NusPxijheyQffVFd1MUB9ZNUBBxJ2DpQYJwBu2qbE5m3i",
  "key38": "3EFs8b9533frv444rmJC81hR4EJsp8fESDveCAGHtkwifGhyHz1zC1mXxjaRJXphZgC3XA54fUALqrrMFVCCy6sj",
  "key39": "2YDe17Xgf5hpiqHofmyHJTBEGKUkeDFs5JH7XoFMwcQmaSNU77oVtkxJGn5rgEfkuetKsLxBL7iTqy6gkk5bjv9X",
  "key40": "5idSe3sDE36nY8LDmMaLzeewWdZvCyJZHfchGH13rb74kD2n8ZUDbMoR6u9zFvAvpXSiAi44NDZT1m33sKiU1Sow",
  "key41": "36cM813jNQJWWbT1Wiai6UBZg59Af6zjSaciBFfhGfC5BCuqBT3UR7nUvxWZ7MDVLWkL2N1AXotaG5ZWo6G46HCL",
  "key42": "26Y7W68BqzjhrRdmNxdjzWVYDBTztTowZFmFGv64jbGdddLGEuiQrwJpEe9hM8X3EuqshRBgsXah3CVs7WcpTPr5",
  "key43": "4TLvMBJc6dEU5jVPqvx46mcDToXS2DNdvi2nxnU7EMG9GfJqDpyHu1VycUocR45cW2vca3LhXRRjKaa1mrpN5xMh",
  "key44": "xDTfhNuu9Zw9b6yerSA6iXCR4hci3v9QP4FZbf7y1Dm6hbirruKHYob9qw8MV5tmPdwkrkjS8B3gycuXQfAj2rN",
  "key45": "3h8HL7vGypRZCoAthMTPQ9XTwpAf1CXVuMv8ch8QT7LAa5owg3fZqB6efj4E9aTAgCqfukUG4voye3KQbceFPoXy",
  "key46": "2zXy1TZQPnc4XruGW7JPYsuBrLuEaDLhaaBon3yHtsBKyEzjPWGU6tHNKDtDAW916iQicjHA2Vb8ccaBcvRiWR34"
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

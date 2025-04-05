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
    "4L8th5RR4A3hv28wPzUQ2qbCJ3i7joHqu5tMgGzYzibhh3HXfvo54r82wxLA52GnbcsgmrPW5o6WzUDNUPKPHUAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VCP8QrQZCWP3iqx3Ss4xV1aJ9LZEeLV2hhLQXLHYZABXvUeWrYKyABD2HD2WcDATQTGDpKeVVjAbdZkmyGyncZW",
  "key1": "9nGeNpJbNR7CwBRsQbGDrnfa6dhdMsyiuy6keG8fJ8x2NJaGS27ijRmvbtNbnudAuAzSud2sxWUQR1DMjRwMTNq",
  "key2": "65cGbnny3TUsgLquHm7dffGE7D3J7vvZHvzMGZZGkJbtrp932GbU82vws8Wrcea85bLABG1wye3ZgxGFtJLk9qK9",
  "key3": "5CKzA8ou4jN8Bu57LJ91w8ZNDyi5anb8oPKpZoeugvEQ4YhNrDxFzcBZduJuWqxijfsSFaiE423PoArhU2TcohXu",
  "key4": "4sWCmortHargbH8WkaefSzSqvtDNDKD2sY3FWJBqo5Uxp9jD26UztKeVNvwXUP3qnaBr27ojXW4qJZfEFB2sWCDT",
  "key5": "2QhLG5LEQgmu26BcPCggLJ7xryn6eCV8BDZ2HxEfMAjHLcAk4efLhJ5E7nVrxaavdQdNfv26vkR8TH9i4CN9icuz",
  "key6": "5LkeXKYLfEhUTEjmoVVZ5JweEJLfdideWNLZLybXuiDzfwaHvJoZZc1vufUtrn2NkaTMWtZJYwBSMsAWyXwP4Zn3",
  "key7": "Fk2VWWnfx2KyK2h2h1tPfW2pwwfhUv6e3jMD6DuX9uNCcc4xZRzeHZcSyQfbHwQ8fEaq5DQq8Fdev6cuyWpA2cP",
  "key8": "bWPA6C7auSQZpCfma8FNxfonjU95xfUZFjxjXz5cmWBgvDh6VN117ocAeTEcLsD3gZq2vf1BncyrYZKiCydTuHJ",
  "key9": "59qs6DDBbfohduHz7D8nXpQaZC7p8pPTmPFdmjtR1wfx1sf3nr67GqQ2bcEBi5m4ySHvTE7T11DjYDNXphuBGFFB",
  "key10": "3eqaCWh8Ty5SbpCb1YVHrZiTVuW6vbmR5tqDhu7pH1ZniCqK2cFNLpr4Gfgi7KzMomrUntUTNPc3XchRENnpVMAn",
  "key11": "5VfAcxzAnwPUrS2FBqSqHh6M7DwkbPCMpnKtyHj7d1TdNUzrfGjzHpuCNxUKd9X1ahvkeZ4qAj6pkG1DNP8p46ft",
  "key12": "4dGHbq8yDDDiaL2C4wYMLUuovho3aRSZzMqqguo1EcC6LRh4rUef3u2WYo58UFZ14HFGSWcM2Z3Ccf9TSM4oE2b5",
  "key13": "MFzpeEva33tPXymZbxoQegzEWfGHVUP5QRLEWXHS31Yaq6pWMx3YKgBs6sd3MbiBiJfaiJM7n9neiZGutAwgwT5",
  "key14": "592ZBrwPxaV2EUHvN4Y6a2CgRSpBkA3e2M4AF2Qg9GL7B6QBPTzeDbFJQMtsSK7G7fj2Q7d5vpAMXxkZC8L3UTmy",
  "key15": "6jzTd4JEocDJ7Ao5UtGSMdGpkVRzzD3tiLHEtdNggeuV7CMVE8JLCofRBdfZLqf25qtRuA7ngSovh4nkojavQry",
  "key16": "37FtccnVbvTfcMuNrZbiybfdmcoAKvZACxEBap86gwseFxA816C4mFiyHKooJfeJ31JPPZTcXgfiCefFy93tzDZi",
  "key17": "NJ9Z4Z7YBEu39VDj6C3RtN74buo9Fk9yjQJpaEtciX9qxTxA7aihRz89h2ucJH6rD1ovMDfWYtT9dsYeo246y2s",
  "key18": "4kCUBFWux79ZJbjCKRm3VQ1STDbkNiVVmtkP5fsdu6CfkPi2g6hmqf8bfpmkUWU6nUqQRKhAgKTiS7yDxP24Mo9v",
  "key19": "3RbLhA8GoaRx5kmUGchkm2ftnNVpS9kBFBuRfMYBuoYFVJgtjREvG1yZRMnBKopZoLnLadAqywoC8ufrE9vkcM2p",
  "key20": "4V1EnLCWkXyLRh6GjNck4xhFZn3ezfis4D8XrnG5ED6MbYEvUTLuexgniEzJcbAzmV9SNqJXUDN315SbXgECNXcc",
  "key21": "3vFiSCvi2pvTes1CJ2K5CgjQHBc6sxMpYoaop6jvRZhnq5r7ps4wCq6yAMJDWAM2r2xfQp7KJVxsxXixC38XWtrn",
  "key22": "3a6qJee4JvxKEKZR1Vj7sNbEza9nvf5feAbHA5BPuxMaWqsFM9pnxRDLvYJ785x96GkEAsaD1NpkwRKUK7WFGbq5",
  "key23": "2ApCygNyZ4Etvp4V9Wx695cDZUqSrXM1PnM5HiQ2SeXRbaqyyRQg8iQ8we53vzPh9VvyhNcRJap6MLNBQZm8PvYq",
  "key24": "4AZ8BfCpLYCKtizUCU1ccCjvQAAaxWL5M9wcCS1PezKdkfqS1biecR3uEYmVDjg1VzzNsiuNtka7K5o4NEx5ed2f",
  "key25": "2ZMGXvd7mg7mZMwY9MAKZ1K8ruw6YaKPBWZFrSQxYcXv5WQRwufLWQx5j3Z6DxnPT6hF3bQpmnEkYFCkBY78qvaY",
  "key26": "5bQ87sCYsBQUBkQLCL4etDH5d4qceJABbU2XrweLmjBa5WsMrKiKWcpxBcSiC7AT6SqHL1Upi7NNHkBdEQnusm6h",
  "key27": "xKj8eyYSt7cey2h9AodSns3YpJNs5FTJMiXv9czDhZKpV3LQUWYLceQbrR5voZ6tKLNMwrFMYmn8C6A4pJudpFa",
  "key28": "3uoCJSAWRwjTeH95uisZcsiMcEBEK868QJXBVku6Wr2r33KGidVQM64EeXkRp55uPj4iPgkM7g3jHjPJtfPaMeJe",
  "key29": "3V1Dq65JDNcVFWDNaXWmtUZDWy2sbams84ybYnGRrHRg9qWJSxw9MqjUrbDbrS5FH3x4GBooAzoPiQfLw39LESoF",
  "key30": "GWtBVQFZYxk5FGeW4USDBobqkZZrRcVsycmhQ5aw1W8wRqRtUz3xxgUcnuMG5vU61Uc1u856xXQPAiwtPqqxuKY",
  "key31": "5QnXPNhscZU9z3RxWzCWum9NYb1W59R85AiB5P3cTEUheFYAnxW9ez5ijybj6anzbLSwDcvmZprG1UvkoKUJkFXH",
  "key32": "44sjB7NYtx2GWR6at4pHuPmQv8CbaSJhox9JRZLPHNkSoNR3Lx7p3Y13UsqK5tG2H1MVrJToE7jDSxbNkgj1bPem",
  "key33": "5Y4Jwtu3C7dTry448mZdkAB2MmBM7ea4hNtGSgRg6STC9wZFUnNWrZJ7zA9b4Lp6FjPirzhHr3RRcnupTkiu2PxL",
  "key34": "2tBwSmvxTbhDms4m6KPRTFQMRjTeBfnuZU9HyNKRUfjHMwS5rnpP95y9d2TNVK7FhJz3rZHkvZxqK4fVgyr2e7mn",
  "key35": "62MzbJ85LR75nCVcey8uRs17pC8hK5hhrBAhNfMVVauKv97YcrkQMPXx9eCcpgJJHQANQrUk65fqvf67nbPKdFn2",
  "key36": "2g9qfw97kdS3aFUdL6E8sytDag9gGKDefZcfNKTbEpPf82gJo5CqZ4nNKjhniw6aH6Wij12hgFAncMuxFFkuzK8n",
  "key37": "Mco1ZD7RTpzPuqtNZEoRW63pwavBXDBuF7aRP4E6w2fkHEWJSbRTir3KUd69TbVghSTpFVCU23ZENv9KQSGN6gt",
  "key38": "2cZ4PdeSHnW4FghpBKWwDV3hP1bnWGvnk2bevwXYQjPZCaKCWM4K2Z7fagrVBqtdjdZCRY3kapC3ZMn4SqFMQ8iz",
  "key39": "4fDfoHBDmxJTiLQgErAprYkGzCDAnb3fuuH3GszKe5BetyuZJSkCbW8yzghcYAoUqGkJN5Wyc6sWRCL5vd9o1X5o",
  "key40": "3j6t1ouJWne66M2JU7qEcgAfFSG6ZUryJ5Pg5FvfEUreZTsjhedXQ2sgwtuMZpUNJ7e6cVrhjMeMNY3LPJUc4aPe",
  "key41": "4ntAeDob1cZ5yov8Vp4VH17QX8Up6nCZ7Y6GKaEbtQFbwJQBoiNxXzstUcgyHVn5J8AkC3mHA7LFp41cUtFsYcW6",
  "key42": "CkHXjPZfy71PLC5p1thD28HQszoVr1xFG7wZnLLb7PVfhTNg31SMjyXm8EGGbnXAtvCHAi4jhtjJGagE4KaQwc5",
  "key43": "2agbSwA35RmotA4RUo5gZ1XdcJE2YMwbo7rvNtRFGJNXv6fH9jKpYg9kf4SggbnEJEVZg8Vt9Gj4KnQKu1Jzyp8b",
  "key44": "5UxfPPbxK71hyofFNXZ6B8jmx2L5kojCWYwdqgHPmbEmJLhxM94CR4sQBNWnNVYbmtd9yDh6nGbGWzVdQbBw86fv",
  "key45": "5E9uCFEV1zeBzYBSowPDfgtSFqf7Ko5TDhUH6jcBjMcLLocXRfoZFwGH3uR9jZ4P8rEZnm6z41ExNkSQW12kCcik",
  "key46": "42E7724chLPJcLCSJguPY6BVPciufpMjkfHrfY49AgVPBwshAXeu84tNsG1LPXAezwHd1HAPJxbjZLig4HuyWnA4",
  "key47": "39FKnWoToTp913Ea9RcnbuzuKDunSMremYrNsxVeW9PVbxCsiHov5iEMFymUPysrZc9w8KiZfdh7iayN3KwkdY3Y",
  "key48": "5hZvMrKmqgmF3qp5u7tUTAGb9hkVvyxSjSWiyH8ran2EEPvG6SJphCYH7Scxannax3racA9sCRR6g4JdMcAfaxn6"
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

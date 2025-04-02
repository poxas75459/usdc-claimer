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
    "29TZnponqA3yECHgxA83BwosZynFxmf47vUC8DnQw4LLsvdXX2h6hVExF5X8NaPqhpGJxzi8HfKyYaA5uYt2wEKq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hEt7yeFgAHFkTjmtnDXyfr6BK4nPHnNJSRi8jHHTAmqmpRV7BKmP1yapAnrRj7RrhRyh2upadmd1LoW9PJXV7Zi",
  "key1": "5RPdyrNvs1yqyj6pX8rZnvSSxuxeKpt5Maqnr3h9Q1sJXTDm2hpXH7PETc3t7MkhrN9fXjy7Js8HoQiciFdcAMxD",
  "key2": "5htJwSGaSQPDWBjvZrr2JpdwNzNFu5hArKjaBA3wfacmjLt7465CWGa1U9df4REhNAqqmNB8VX52aiQdTPPcUCHi",
  "key3": "4CUTsKeTsr24zcJXZtXWRuFu1fZy2WS5YQXkVGeQnXSgvQkMNwDb3FXaARJpBZbxyBAPv737jrvKF98mZFfGgkZZ",
  "key4": "dZpDjVT9NNHtDtwb339x4Bk7bifKQcRjpMot136gNMss7Ay6i8L1BX1SXEPvGuVfxeaAoYDWz7UJfGZvD8gcaJV",
  "key5": "2nBCfPBnU3jz6LQPJQSg1bEFuGWtyVEpBfyrG8TUaBkxXCD8UaFywGYDeLAm3mGV4oMtNbzM9qBzNPe4ZRgBrY1S",
  "key6": "2dQXKGhdqLNS9wqM81kLiAs3SnzhV24Pxq3vJgmbJMdaoBM56ha7TuER1PseetVdhYMFarX2BQBfEFQBby78aBg6",
  "key7": "2FZoEDzTcpu7MTvJ7aGuDPJGPpwJBcuTH3c5KgwMsFxFifoPnyQqWmNyby8k98rYEH4nSW3AVyk8ZBET3tHBL7dV",
  "key8": "4cPJMe2v2f4wWbTLvWWQnJoPF4CasWPgfscEcoVirUpDi5ouYSQUqaF5Qyo3F6MrNiyUibtMGH91v8w7LG8SPjyP",
  "key9": "2vqgpQ7txNdUQssSosfoZ1ppEkV16N43KVtxvK2rn7SBjZhvYJK25ThEiNckpWZJxjSEJaNPFYwAPsUME65hBppr",
  "key10": "cS41BuWiC8U4EksutbyEk4wo2EpgG2ibJq7JKGX8yAhwkvEqx9R9bjamDfgi4K9uuzx9tqb7BT3QMbo7KFQjoHN",
  "key11": "3yaPCjt4MYLjeymVepgaZJ4jr8xjfscA6gCZWLUJbffqJe6bYSqWfRBfNpxmDCGHYomRupxLpof3TMrsaL4W45K9",
  "key12": "5D9CNVqaSh17VRwkJM5GcDFKmbVupeRwTVhpxpUkGwBkui8MkuMUXAg5ZfczHJU8bSicHCmutH9R9wp8L1TfEuAy",
  "key13": "Vm5Mbe4u3B61L5mLf44RKFp3HErK8x7AejAQsmmGYksjf6MvzFGyQpja2mgvryto4xNQc5fuNFTMhe9iSGzSVbi",
  "key14": "4wwSCJC6seeJLomNSf69Z2RmgGDnt4fGBES2YnAYhMLmRc3ysBrfWnSwYsT1QDWQGBShs77FWLKs7rMMDnCSiytf",
  "key15": "rzjoL1FNdKXWYqYk3SYca1LKNZgFotNBEf85cokfLzAxDTQMRPMgZWjgEVboZqjS56QGJaP34d38CpwfRHVa77N",
  "key16": "AAJqfzCtrML3D1MHvBuS9YHJbLt6v5959Uh9Sw3pfqnUDxrmuxSzQdrLGcYLzUwy8kYmeZSyVBPEAeV6ofKhFsJ",
  "key17": "4YPbyp8fz6pxjTuvBnyvc3JkHdEoYZs42xqsAwX8ooxYBXK8pG9GimqTNHZYrQrtBj4BnS7bhQDti82hGHDQ7pjb",
  "key18": "3Cvyrq1gSEGPn8cnutG78q6JbdS2PhPujmhPvRHAGCp7ntZWa8gLXDaXyvLmuY7jRTDwRMkPpeaY3hwiKqrXLrKB",
  "key19": "5QoHrW8LDjSpyQ6G42qb4mp3JyuuzWYMzVBJ7GzuiR31JXp7j9k7JC4DyxVFTnTMvqo695n4HxYYKSGhDpZKmFs2",
  "key20": "4hKxAg9MQBLfMSKYSR2mPnBWLqdE6Nx93bxZvE3BR1AWyA8AUvhDnHGFfFd4TyY2WTLSBXB6Qd6hvzf6cBDmpGbb",
  "key21": "5uy94CLUCrKgQZHMBK4yJYuosiFVNBrrGMuusEezdSFqDpgrKRQ31HvbQ8DDJV5DnLdkQFXYVRztkZptHQ2QPHUQ",
  "key22": "3QpiGJVxXeakNHWbVqd2deShCFKFWvieLBvget5RR1UAKJbuU1v76dbiwGhWq8EWXgBKxcK5beXATdXzcR639Srt",
  "key23": "5AQiCTsHAtnq3Qzd9Z6vPj87FCAuwXUY2MBMmqYZsfEjQ2fnin9pL9wEco1JRC8eea2bP4ZxoViEQCYKdTfehzmo",
  "key24": "wYgXPohyP3yUbCG5yCGqiqsTvvSKppMsPwZrNVYYXAFA7rBfEBVnvyyYdBQHMXmvpUiqRHQ2YP5jWj5LvJjJK1v",
  "key25": "5TTEQ5uh7s2M4LGxUkfmc5PrXdXGiaySLUnRVzJvz7xzznjwkJFuzXSZtQUYGpGG8YwyC5b8e3ajbxiVZTwh9ExK",
  "key26": "3A5Ff5xFhRTv8UEGm2ZsxAv5cacA5ZxeCAALzBRgkfvPFK1S9YW1Z72Hjh3hwJKgiriyXccNXPicBYJoX3FGs9bW",
  "key27": "Zar4mQkUn1Dw3YtwTxjKARx5KLR3LuiqmE8q9GnVhYjSUp2exyFdceqoCxiXfQRp7FiGwZkPA1DJPEFxDgNcpS4",
  "key28": "4raYxeLBtRVAGKFXeb3yroor4jebDbJB2TFX3DTfmK2i8WGtHNxQENe5nUWESRqZrAD5LQ4hot6Q6r3542zU6uEn",
  "key29": "P1E7fvuXFN7rGXzcfQESGda7viagUPXWJmwAYrFAUR55CfW4VysiARjEzQ4hxRx8LXT9pw6apsxh7FyboGJxFDd",
  "key30": "4Zs1RhxtNQT3AsnCqUf2fpuAFRqUjTF8RgCBa7ddx8nV5tqrJVTjJgyAPMMuiXK1jTVMyg9LUwb4ruudMup2qy8S",
  "key31": "4gwBLHKHe7xvds3xWpMUNJ4BYL99GtBp4z4z5BPy1kmL58X9PxxaD6XgcnRgPhqXK6j7igQ2hoKPCvPDNWsKKj7",
  "key32": "3uU8ngAgJB34XmmLWW6pwaT4wYEKCpt3yVPExEPtFAvrgRGkWfwbtREZMYVZSL1JqRz9Wz3mENozCsyJUXZdLUWT",
  "key33": "3izxUY2kJYugfnGeGpiYiUNJrfMtjikorfLdeUhhoztgTZDbWE8pU9eksuEUe5ovzcsyKWd8hqU3ZYN8fs77L59g",
  "key34": "RgEFaim4Uj2oFbegFku1anzRJmqr2KD5bZqcCoWMCwRThUNMBMYoctxF2qCyzuxjiQ3f6sCtXYGFDzfvNkmcFzo",
  "key35": "4mSd6nSKCKB4dDteMZARfdh14q91Hu1gnGxEKmqSrs58LB32FBD4MDGzNBXgzfqMYTt4Y3fPfvyxqV1Kq2mzB1Le",
  "key36": "5RfLZFd8n2W6vukZa14c4YKHuyWngjjAxXa3Yx41vFgQPcGcKb4eZE6KDTfBS92yRa1FzYAGzriWmzoVDEeD14ur",
  "key37": "4rXxUkDUWH69Ra2NHtXYwXNWuquA9E9dB8qZo5ZhYvo7V78P5UHpdzyBKkQnj2Ez6UUuLpiSp24K36k9JuoA4bs7",
  "key38": "3ux8vhySbrKrYNtaWaVJXhUp7yAQBDF5pEtUUW3o3kmthD9HrvpEb7y31FFFcUg3R4NKYKTtZg1jqfNRgeHA2p5z",
  "key39": "3yetrTGGVj2nXzQeqtnMyXyrFrJ2C1fDmTeTasyoZ1YfLTuvMzkUyS8ecLygFQT3vnhdHDXrqrp7nbV98TLj25ni",
  "key40": "5zXN8qfEmr7SCzKpQhyjYKo37136cBE32CmSSzSpjREuS8WcFfiNcps3MogknZ7srP6TNptcBtF8WzwGP11pVC21",
  "key41": "2LcPxExfYTiFv9G3nbaQfrrRJcRJ9EcSpDLDKjyDnBPwSD5hQ7z54KZoRq7dsj93mBGsaELexHZgZqTd1BqhvFWY",
  "key42": "eVhmjxvBitN1Yp9dDBHQ9UMvVjXMdH65MtxmXDoGWCm5QP6qHmEJG12Z5U42T2wTGXdHevDxy3w6YBFcv976GVa",
  "key43": "uQTkFNtSGLvZ41kKaTqtxwnwJERXNQcTG7UPGE5PMFD7FGvFYNGnQ3AzjndZxdvwtLBFbG1uq3S3eaBRv5zyp1R",
  "key44": "3tYanRV86d5HDXXxdg8RmZXdwXg8jkQKLuvtEipEj9pRhsoKHUrCxNk3WCK3G9vt3rMfCj7Utx2oL6bprFsx3159",
  "key45": "2BaADrcNVnwVhZZtkVo9cSC7wdUjM75Vds6ahHqogqBqAXq7gtk2aEDpjGdvJpcQpv9jwitQP2hHMVaa14fqXkmf"
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

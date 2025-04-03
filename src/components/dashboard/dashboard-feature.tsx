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
    "53WpFhiBkvfddE25PV93cddhQWEcdVKDnCq6PY75M2iiwvUiugWHaS333iYgMXAJbr5A8Hs5msdReVu65jnbJ4xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JXBnDZhFkp8CeFut9XwzNJb8VuHwUZUA7qMVF3xMjnyRStjs21hRNTBcpHRRZYF9KuS84xbfCcf17fCJfa3mkBS",
  "key1": "nhghxS2fDNfUkF6Tgr1axCmtyJaquoWLXZmQmJhMky83yfqxDFSpWaBwP3rdwudrq2bFeJFt8oQjNPrh5qyfPuP",
  "key2": "wcjCnZwPqFvsWzezSYp1k3vpHXhKzTGcbxMvnjGeD4scLmbuvRYZrqaqG1wG5vRsGhySUdUMxn4pUmyXTEJbET3",
  "key3": "4e9sg6MaHyy5wjTrueoxKfSB5HEqLXbYeTmztEhR9q5u72BZ3ZbuxiAdxX24CV761o9LEgJ9SJuo5rpUQecpSWq",
  "key4": "dTdZAwVGAFXBWY38nAmGArUkUsdXGWMyfYVAA7vfuajjbPPZuWLWZ93a7hW8k1p8ehnAR1kXbZm4tbS9LD5tUQB",
  "key5": "4gLpa8oPu25Mv1dETXJo1p8WaUi3CqYzubCCmpwUGKvEXBPsxq6eAu3wJqbiwSCea7cNreWmMKz7FPzLnKU4UVvJ",
  "key6": "3ppFkN3HERLpxDe9c1fgFpQxQ2n3uyRqz3Q4hNKfonQheqHe27G3aZjJuBjbaSHwwstLfbDg7DybSigyqk4jDkQo",
  "key7": "2BNqPsXdhKMAKCJ7Kb7Gbbw5opRGfjdnwGd4LMMrAULVyLrq4HU2Bt74anQWgykpctAtdmneg5iaD17Hwm3bKafn",
  "key8": "4esmiFCudmty6rCL96zUcSTJzFvu5dyjuqJ7wksRnofXXJkJ6tvWWBqJiedYPqifpPc6cR9UrmTJGrwx26d592nf",
  "key9": "2Rxta2qb1wgcxHKmzUhfYgC7zQMtrZnWz3XyMaVJgJCa6F4BCMAj1n1LviFYYy1Wn2Mrq1WhjmYxhJDBh2YtHKuS",
  "key10": "3pmgwR5oFfF2LeTcqtj5QWqRPMJJ8y35rJuSK4eyB4yPryPtLDRqFKtxMTosD71bF9UJuH3c1x5LDJYfrZ5Q8szx",
  "key11": "2ekqnMvo9e1FLQzQoPhHBfeuv4zdZCojAW7EY6EJqcMHMWCSY6iDcBZzjDtn7WJqsLyMwMPpPUQAHuiXoJ5rbcz9",
  "key12": "2RGmY3SQBThKhWeCnS3HrnYBhzLTMhJYQtjdeUw3gvRt3x9vSNr67J75hdjQ79pn7Uhjso4paP8FuXgTgF9FG5gj",
  "key13": "4WTccLrwNrEVrkmTdpLUruet2PUiQdLY574Uqz5uvoLdLbfn6PF3tXG6w1RuSvUjiUnU8Q2xqPgtzPfu7349NM7n",
  "key14": "3Wn9MrEb4LwTVNW2NQwTsw1EDJgUZDWh1hY8BZotiKHQgE62kK2TRSMyPYh3JJNCZMDU3vyB3UQmkvWHDFrNqsB8",
  "key15": "5eHmajjmMFXzi3gr8HwEJcmvsEgbCvx1UcyQdu9tqBt4r4ytWHkFiS1dekvHTqXu2W93SRSB8HBMGHZVwrRA5Dir",
  "key16": "5vcd4UV5Td4ggksQ18aE9QKVZJSb11D7XSqGsNU9QVENbc3DRU5sbv6FVoQxFrRF9BAvvzpLFgNZ9CSSnDys2vee",
  "key17": "5aX2Mtb3F34R7XkhLa741Dp5GA2AJN71teHg8KY7m6L2pvZXi91w8qfhAUQd3uEzRSFpaWpFumWWee8g4Q3k9DAZ",
  "key18": "4S3dnw1feusJLMFqEGf1UaHQJPDZHwS7GvRXD6Ba37erzwAqCMxbfhAJ3unwksT4qN46VZAfDTkCU1hH2hmy5B4p",
  "key19": "4qnXuyaFt7oWSM8drBVMv23z7BdN92SuGewmgiuLQ8fnGuqjh5siJNLEHj6jjSn8CPzHsMfTb3uginyqZkPYZjb5",
  "key20": "5VzTwFFYHCjYxekvx7WcY649qFkHfDznWEm8kSPARkfXxeHAahSj22jtRrZqCX61VwwAWj3Jw22ThHnannxD4gRa",
  "key21": "3xvBQNqhA4qyhQANURAKKg1acbv9NZ2hZeZDzUpYJqZvXC1WfLHSm69zVE1hp4wwMvqqth8erCZDzDzRhEgUB7Qx",
  "key22": "5WXJWCeAf6UUtCbMPVtpxYRTfKDxVmBcDJXxE68ZtVwNnWVfVUDywUU5NSU2prR5MAibqMvEeLVNHqmXVK38TG5D",
  "key23": "35mWXdp12mmYVz4WCBwrnueLRqV177xTwdHc1qB3NQUjoUELre15hLccRwgdi8xDZCELSRMcVrTDLCTW5XY2qsqZ",
  "key24": "5W2STQUv3RtTbteTSctdjc9Rwbax43t4PMHPdCMFv2p2e4ugjtFqDBZTH1RruKtJDQ8XN2pPTRNUwPDDsn4QQ5B3",
  "key25": "28kPdmCmzFkivXdUUztr6Lyrs1j3NH22KPxGMbSpxHvDgeyr9WUWtQpb2M6gcYvDPsnB89Lv39A1FNFWsbdqSXU2",
  "key26": "2TuVQG6L26wC3jZczZGiNmftqzLFtDH5U2mLMHRoGhCNKFvFvmp6KLNYiAE7ie6RovZP4XV994ENjUaSX41jSoJS",
  "key27": "3Zy5ufyVmrBvkUq22tg8tLaXyfpwBANb7yxM6T1CwTYhEWFDcSy9jJ93Gac4dKnFkXbz1dfwZ3S2316f8fYbrcUA",
  "key28": "5ddB3k4jkQCxpyDCzVqQFdpcPtGfJsUL3MNxbNW4qdYng4FPnSeorRVnCf68aDNNwXGYM4ZYRSzSUbjW8wVzQJxz",
  "key29": "5EPLjZTywcTD1jcb6hNux4JwWv8Lze4NKBuEtsnPzz3HcXehjmuU848cHo23SovKRh1NbJiD613ghYUNrfk1BtEx",
  "key30": "2JfLJrbk6Dg4TXUopvsbc1APVaofFs6eEyvJg6cY37EpSPJmP1WFd5HTkRS63mLi5Pj5BiGVRgfGKmpPLRzcqY1V",
  "key31": "4F1VWBNX1fGvroPSoxAFUkY4t2Tx8Y7mFXJSmBA7zmT3gJyPqeLmaHGtVZDbxSrs8YxLLfaEsnESUNR7KezE3QtC",
  "key32": "v95DH48znptvHuBDtvoXX3ovD7UwHast5M7wgCKQi7iCLdnYib32TwJUwWtDoNbcVgHdMyDshh6QyiHSg9QGb5W",
  "key33": "3MEyAw9fKWcBzdtKUNkRjw7RSw9GegoMGr3YRsKCRtm41MERf3pmncmFXJNWoVh4b8xfS7fDFgthwtByeAG1y3xH"
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

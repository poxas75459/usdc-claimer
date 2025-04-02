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
    "4zPTZNhxgLfP3Zwv2Gm7GmvYeYaw1DuEDVx4g8dBwNLTikC8s9rqSf8WYP5sLPEFECsLvKBWHLJmw1CjXnHKxkAy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bFa5uAUX32XtHv6bi5yXzGf6Yvv5mCSyXyfMfbmhwErEeyTnLqw81HTpkx9MjzSZzboB6r8Q5mhPatZUXz4pyvn",
  "key1": "3V4dxGxcRxMUmTYDd6Buz1iRmj2TDGHcsb9avhhGuiWuM5f6GmrA4wj2ppCMJXXvauo67EJ36QfUSK3bqJRqhZ6H",
  "key2": "5i34LVrgnw9k9wBLeAPUk3SwuELsDBZdNSP7NCxbcLxCT86EBy3LEuFAzvudLGkwYJN2Z8VqwkcATo7tDWVhhPrg",
  "key3": "5FG5SmWyrd4YWcu6QkqganjckAVvzq267fTLM3XeQgZKMjtekim5ZCwVXRaSK8yfaJ62LKReCc2DRwj4fzM5a4mS",
  "key4": "3ezqGbqTGFeD9Qcug1mdtT4itgNoXeJP3nuk2FGdmyUEKnutvvQwST99vTYcJnLJ47zXqV3JgXpb1up6YY4KuX3o",
  "key5": "1hyoswEeZ3WJuCfhB54VtfWckPvQrRNcFEYnmjrqzRLctao3V1ep2JbvLMYHkbP4achFGXyQ9aMWbawXosztori",
  "key6": "3X6zQns7fiJSrnsmnApWSgQrqmoziEXdKTPeE4bZ2HwqKX2rrFvZjvcbW86EU5vqpncAafT9FG1FNDRQ1rL29F15",
  "key7": "2AQniEL39Wr1n4kTHP31VKwM1f9ckUfsjM1jysWurrodcYD5runywEXyVvoDGT8sQQbsuMGmWBfUigwtxUYqAQhm",
  "key8": "3TkfKKReNMSt2FvnjLbTWeTxirniJwqo3AELGES94DjAbLN2iBTJULpqaKiApeB7G4qwNzFEe1hELfp293e328VC",
  "key9": "2qaZXbCTG3da2BUjLjjShHT9k85PT4HdaomktuD8j8LFmc1SVU5fy3ytTWQuomg77xMj4wEYfFBsTXxvTjZCAzuk",
  "key10": "4WVRpYPoXPohyL2N1ETYF9kN9ak4FCPeG9p9QEQJEPBmPfWCnuXM8xknEM34B46JC9TtjFygpkR2LfjVUXcD4StS",
  "key11": "2shTg9Gqo9d53XUEQ8WJAKqoKmRcuFvn4WGMeXLjef7LWUEKkRUTPesXAKrwRXRcA3YHAGNUC8hjjFv8DfFF8yDL",
  "key12": "63PVTayA4yqMBfas5SJcdNQo9KaUoB46VKQRamKJPPDE7bv1w5dmbPrv8Pf4pTLHVhASmtpAnQPimKbDosSV2UFx",
  "key13": "2fzevWRhUuKSpHdDpLtYFvyazX9d9Df8SFxPUmWYXJka5iKpn3zcTqGB3c7ARaTkd5aVKgQYwwqfTFgjpuSyNksr",
  "key14": "rdur89xrPKAYuJrPo9zoHSDLJSGphR8G8tu1jSWy934rYTLNgs6pSztDmp7P12PT6Tkby5Rf7y26VDWKLEQ3UWj",
  "key15": "EB8fPWxSGHSTTn82SoBa6CGkaMMVeMbpTApCkFUp424yrJ619XZugBJnEG4Pu5jdP7TicYEqEg8n6LoSk3YuCPy",
  "key16": "4gf8wapETF8DNkBB5A5HsbkiJ26J1CBRYawxTPxqLC1Veavn4z1Vo1oM7SMGEtj1QLyivC52NRDvsGp8GSQ29iXj",
  "key17": "5H4MnEnPLyubjaXBjqnSn1Ye8WR2At8sHFx7p7AzfrUHqTo3NHKyEjD2Zszbt7ReAy7kZNfMS4oFX1U6wchDWDed",
  "key18": "2udHQaUmTtSpbVDrTqiLGDdLXGk8GsmGS34sgSHGbTnfdSm1ny3WFHBsmjShXr3m2ZE3nwzXHPSAKt1V26iNLv4Q",
  "key19": "55pmbEbLC2Qe3rEjaLE8ZQk7tnzAcFk52pwJAmATMNYfq1R1JTsQGs4g5q7PhuYmTnr4z6Yz7rKARArDifze37EZ",
  "key20": "5cTy5dccbHcwev6KDDHzaSXfDuiLZxaUfqzTM6cxYZHxxX9q8owajdq9f5BXq1xBbsj7gdnBkmU2q34RijPzY4XN",
  "key21": "gCLPaRV4kjdga7BsYmSobnPtkyB98s7Y9PDycWpM9idSHn1sxEGKggWbaWR3M5E6iSfaZPW32uBSVDRdGqXTfEd",
  "key22": "4UB1cGZGUifAtsn7JUXvDbEhhe6nP9SfRWmM8pErhpRLbYJXAqdDhh4cdg3pMMrGDoDRS31mR2Uo5Rswz4VBGee4",
  "key23": "3KENrdNNZFgns1f2JkyCQq2sCJmrtBqYpDGpSKry423n1QM3Ce6tBtWHUdSV1D99nTsRxPzZQZNbcgbJf28QMYhj",
  "key24": "3EDEuE2y7cqtJV1aT3fKcHFEQnLrMAvLxqPER5enfdc9Dn34iUjPgugZFrQJcFYgvy9HB2omJJcYeexWifrGTLid",
  "key25": "5DGQJ8XppkbABuD95vPpAWVTAs3zjMRyJZkLCgzazt9PMPTrrNLNwBWeeKQ45oK6L96a4iVANwmc7SDFRVxNGCg8",
  "key26": "3xA6vS9TSnMcc619stGfbxFxzP3PVUaTLfrDvuaWzbe6PFgH9TaybXxTdvpzzdyBp9Bq9ik5GDFUbrjYRYX7NvAr",
  "key27": "D9d6S1StUV7g4MboiiRDSHHKfKMbunHKs9Byeb9zssFQuY7exn1G3g8sXRFAFEAksSetukaFSU8nLLLZnVkS1ZC",
  "key28": "5aC44ZFzXQJzxZEGKrgs3JtpsMpvkGre3PJaYeCExMJB5zQ8HCLKSgq9mEHQP46mXnaExrrgfTPupqT1VabusjHP",
  "key29": "3xmZCBe2uF2ajLxQCX5CvSmYJfPPswHbJwmcCEZ35gWtPp3NiJw7XbhSQy4zAZ4whSw5Sk4XWXMjNG7JVeEJNp85",
  "key30": "5sZsUdJGseBwVcthUso5a4TW64cLukTibPVXJncZPJjHupQM15kn2FESPrifWp8AK7SsdjZVtxTUwUzKSjmT8cFi",
  "key31": "2h17piubJHsjoQYwuL9sdjEWqL3m2rFxWSjJq9FhajfY4stM5oUKra2vVcmBpkeBYcVks1QZXGZLoys1ZKEnwCmf"
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

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
    "5AJE3a6QLMcysgHAaekouk3od4TB9s5qMNX6ZdCqx24fk36tyhvLVnVvBSX3ZAbRxiATJNUojgmjphB1xswrAZCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DCmyShKVWAoLuHHUDhVpT6g8zCnnLF9hyk9pW5eme5eUR38Z8sEeVyzmGQQbZ5i2efcijE2wQGXnA7kA5trwg4",
  "key1": "aAwdjABKbsWycine7uAUykXF9N5WtbGSkQjN5NmQQRjb8mJxNqnmEZx2NEcnvNq32nJn5iPmuezV5BYJU1FWu5r",
  "key2": "3vU1u9v48FDe2xhzw2HThezKtgFHxKuVpgVj2TAVJaXtKEPKkVL9T6vRw8tjQ2Yv6Gg6yjHrAuRKDURZNbvJLRBn",
  "key3": "5N5WcZm5rhHpq7eDoN5ELd9xPW2xcVJj9HJn1sDvnSgxVPqQKUJcAFCFpUmv6pWnZ7m2JdWtqrxgLLecAD3kmQWm",
  "key4": "5wQGNaTK8mopQQLi6Z94VBSH7aNJhxcQigHjxMWwxm2USHSw5N9G774GZbDuryDCfCN6bP8QgE4xYCYGPhGdSZD7",
  "key5": "3nc9t7SUoi7W4dRWasdQ3z3XYmQMmeF56phhE2g3UxZzyogLYD2gp5AaNEBLfGda6MdtjiH8ZK9PK4QfgcwhA89W",
  "key6": "2KUdN7qa3XBgzfnX4b6aUaqc8Cai5rwJ3jC5p6xbdYGeDBPf9izyBmAMsjVXpdAaqPA2DSy9abtbJNr4JjrfoX6L",
  "key7": "49a6JEU5rEV2SVebN4MF83VZ3K6BQor7e1tVRhP6pVsRvFPdpocFAYmAMPJHahBPDrm6abP8AdZpFnGzku9cxoNH",
  "key8": "5k6GJtoxhfJ7Y5MeYm5tkjjwfmXrwa1tVX8aMweD9YGRZy537wUuPSgRTAgZJMkeQWUW4a6pqdW5NmDd1EV2Fw4s",
  "key9": "fjFpf3Yza9ntihsWrb8B4qJq9gxnaMaduueDJFY3e4PZBXPKJRCVdZYKeoYuo67zVtiFyDQGN2xUABsH5NTP3eK",
  "key10": "E6tjmy4KC1orhpAzgJY2GbdrwSJBXbuhUuN1w9Zzu8en4EQvowQAveZHLmxagVHhutXv1DLAmnyFnso1GcTetNJ",
  "key11": "2Y4uaZg7xXP6cGUprfhDgvCoKxUwK31jgTXCE4TFA9mfJU8baNiqh3pip1NQ5XGtKWr6eEyBFm2h4m4GK5d2KCpH",
  "key12": "2cvHpBoNkKWt6UvkRUS7k4w2iNMc4MUeH3Ce8856n3c8bpS24Wf9GpYkwJHPjPoDdSdHWDeoUz4xksfYcRCZVZuD",
  "key13": "3r6VpaiJFp3PuXRje9ShvmwUfqz9VcHS9n6PtABatugXGoTDCURsPELCevTGXRM3dEhwCxfben9N1PyXkLpvvjYa",
  "key14": "2dAFEH7pPraG6EUJYL4boq5JSkWmcbAVvsChWYnkae5FBCgYgZ1MWdLiuhLk6xmTytwFvSVy9AvGqbLSuTbc6wDS",
  "key15": "3uEZKgTFnB7QAW2eyBZFi76E4Q3Gb3FHQwvAmDzsCU9iyZgc6LNo7cHXPvTALCZ9LzxEZD1chwuN7FmEHguhCXeA",
  "key16": "44HKQvtZTifNPhMtuEDN1i7Dh9L6QMw9cNaRvoGUzSHs5GE1ME7UHDjoioRc8ab86NyPybHteH1AeX2vQoaReCK7",
  "key17": "VAV3WammHCXqFvHnaUqgXu1Bzo2cDrUNJUN8RoeXLinyyNLGTxRUSzB2jfPNnkrF8CbVWYM1k3sPrwg7BuFkWcY",
  "key18": "3cgXQywBp7mLsC6rEdxFSjqN8j6CUyjsWDgeTuha81JiWUE4XmsnYm6yJnEscXUsDdpcxa4YrQq7TUuXwQHRaHM8",
  "key19": "2L3eXqe2a4vUrD43cwkh1txHum9J5GMo8hyVmXsg3SShKj9uBqW1qvRkiADjPoukm3AMBFpkJ21WZASCRzi4DrwP",
  "key20": "2f5n39mZHWuKMrfazQ8TfKKfHhYqjNQuJAqKCjopqCP3SBxeRMeFa9P67EaPDgHUu42QSRLLHLgVDSR2NivH6F91",
  "key21": "3oZsgD5c8R7LUFrkCGhpBHnpVa1zLCzZJtrBP1aJaNoWzgNaTUqAA9KUji99Y3XNwQezq3YwTKeq6KJZdbAzND8P",
  "key22": "2tSibKZTc3j1x5zTKyxgoarheSAWaY1wyhjCZNt71uEcJfbMDDjP8RUctAjN1CG72b3x1wEFX5aiep9fjKjqXy96",
  "key23": "2TYj5r5iQAxnhfdCKt7XU5yw8S2i2WPaFWPFgCWz3tsg1nFZF4W5f6VYqkX3h82V5NxprYnLBk6Yj8TvB6fgnVn8",
  "key24": "4Uqb61RawXdQtxV7CCyvXhNjryufjahZDb6fVgPUytszFoASF3xhKyYvtT65F4TDyuAFcDSqJRALDSZeYRXnH3Ua",
  "key25": "5QxfKMf5h3apKa6PUTnqgpUqKUjXfiGkx4WxVSfmtPGPBWrixe2mgyeANzkid9TXqaFLJdD4tczAFzMzcosAAALR",
  "key26": "5n2FcB8Ls8eQEUpWn4GkHRwJ7ssS51GhgZrDJfLdKCrLehc57pNQv4fkFnpS4rVsdDxt64TpA22tKxUufb72kYdi",
  "key27": "8Ti4PgM9jiJ94YWV3kdqr4B2MSWprjnvvVMpUtbidt1pXZwM7gKCzqsJuWP4AucPSBqJGC9CcvCRsfaDhwcD7Ps",
  "key28": "zh7xVCBy4z3HEVn2ftkqi2jNcX3YUjqDdg3oJmHAd2LNqEUs8rQ6og8LsCTDGA8iQuAgcnbCw9WdALNbifxCYUP",
  "key29": "4nNq7yqB4vqQTz4bybdvB8ULRugf1jydywKdhW8F6GshMrpGG12hiZJ4xhc3mtw7Jf7YjgJLLkwYKDb2uBwsGSMo",
  "key30": "5tVBVibjrtBzRpdKxnDihDuYx5cWRt1KgJUQ6zeB8WjfjFCuPThM21AWyLy2SH5DWnXzK2ZSSRRPqUfCDuiJLink",
  "key31": "4JRFrWkYcr6JbXs1Ja3zPfZXn6kZeAdtvYcfvzJxPy6qzgW46hxGTxm5vbH6Rsm7ZcUtnNM1aNmSGXdApLzix3u9",
  "key32": "95zWxkrhUFcKP1oriCJfRLmgGEnrUYkKERpQ8rgaQugMAxJN2PaqVmYx74QWofybdSh5tdfDS6z4Yb1WncQg78o",
  "key33": "2JG1CLEXpCiwr86BYG66bLdPDb4yz3dL9sZv2NYvJqkZrcnUNJK2Pm3rivpxH3rKHKRM6MMmnRyPUqFSud7R96nE",
  "key34": "4PYvRJAVbEVpkEsxZVNr6uWxxKYWtJPPr67d6KTWDEtKxrnBmmyQheBsQXqAuqgKAEAQBWpG38BdR5Yw8QgmWPXn",
  "key35": "519T5MsGKBdNa3tPrSfKebJTK65fTB7PXW2QC7VZJS2au1kQ7pj2SVGvRdAHkXbDwRTTLyFXhME9pePNiFr34zRV",
  "key36": "5mJ1Ld41ee1FLbSmDR6EQaRV4R4YkYhtdAk1fNPrCwJQBW65ujhPSdrfWVmB9vmTQYUjLgmYDcqUF2fxQB7eJG5W",
  "key37": "2wYrZ1yWSewg5jbjDjSEjETLQ8mEbRWu5x3kdeChFneZe9LHsyjNqpKJfvBQfeRXTkpdEQf6EHk9RM1CbgoBS8im",
  "key38": "ucqcwN2gcVQTYo2VAFVc6wuynCM4kvPaQvHMdhUAVYtspntr4LhucVUcRdmi3RUXW3VqhePJ8neFxYnfzbK2D3d",
  "key39": "2DyfZ2etsWK7pNKcNeSUnArzBhffbpP3gB8VY4MxvF4Topk45DeeSJfGBvQ7ZYvBhGiXovhBmvZTSRwR92N5aSmD",
  "key40": "43JDJpd9vKFrCM88ZDJG99cWGWzaTrmaVocRkeVa2yoBYWtPwzTtSJam3QNgu5UcrD3m7HVsYovtigKecVGf6wWa",
  "key41": "39nwHJjmK6PRcpxrKMhe86weuRizdQTMSgKmwX55PWessPz5C1MmnyVC2WfBzcaH2PDCPDJYsKtVccy5q7KW8Zcu",
  "key42": "4aagLP3vwxF3rGorqKveZCMG9bmDQKABGXHe8PAvaFAfQ19Lbg7uchpfJWEJsus9sGoEFsJsisEEYKAgRc6iPpzN",
  "key43": "3QLChQ7diJLRRx5YJNspsW57He9zAeRm1QtzmDhGS1h5EewQcNQdVtY7NRh8WatS2R12VwPVHBsxxudpabAqbrYU",
  "key44": "4VVRDGQgaRhNz38p1nDBFzjTHcA5egFBsJBpTRbmLDXUbRvCNc9HCm7pJ7fErqATNHrmzguu1TD4AR8gMVcnLR41",
  "key45": "4GuucvHVjnmnGT4u5JfnRRh55UjV8SR85VkahoKADa7eMt1b2xo9uS2Ln5xXjoqc73AnvU2fJ5VsJjYsrvhuVy42",
  "key46": "2LvqwJ4k3hh7UDEnWJ7HkwKhdfkkiKnSnFet6ZNXhm89yLweVjGdbiSkwssCex89xgQ5nCfxAHX5afxuZPXgYrG2",
  "key47": "3UaRu7DeUoiUjo6SpXwCxd7B47PtSP9X3WSJgnC4dLGfdUHeu5KeYm4Maywi7t6BLgojjENJYF9dFuvpSNffLKfW"
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

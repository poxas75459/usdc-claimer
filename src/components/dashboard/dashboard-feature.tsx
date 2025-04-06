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
    "TWUSzhQ8tcQeA798kZHtazuhqpY8jf2pEdksP1oHPzyYDqXWJxnT7msFLdVHDhm8HzywDA8M15PCkLp3ofvaGw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24MXVXvFCg4BN3kZfijfXLEQqkELMuNDFNkL94zEfeoUPiXv4HkGLbgoyNGDtuoRQcxVhSqjYq7aeuwsFs8MgwD4",
  "key1": "2VDSz5rAm9afnmc4VoX9VmKEzQPGnjR6YJtXPwjgYVkzsBHdTocJSVsgs6ea3VD4RSjVuHMqayF4gjb691jQZ2AF",
  "key2": "3BbFBFsiFfpJmnJzArZnggEejubocpK4EHxcN6Nw9rLBWtAwk8CNsQpfbd1SvmTJ7oAZ9APfN7rFALmycwnYSib7",
  "key3": "2qHMTceV9hKKwyg1rC1U3NUL4UfyE6mDmSC5f6ykhW8633Vk71tqKzcRg4f9D1z5hSSczhxcMaxUyZjfbtR3DPMf",
  "key4": "4nPFVuHxHMTMcTMT5sPD4t3L4hSdEXQ8mJeA2by7peC1QJMsdHGF5FMimfXrmY9ncWi9aYF4U96sefH77CD6SaZb",
  "key5": "2oM4Mjf6ND8fQYDnf8uBQGy8v9u9pizSwLg1EkwKvHwCcpFN5DtEk4AT1ErrsSHkbDAtdML3Y7iiSmP4iCUiA1WG",
  "key6": "4Zwz4i8J96qusEDkANAkC42VQ7SPVhWowzQKGZhPgwEbWq9mQH747A7rFcvNc2gAMXZD6UsHg8WbErQkNTmw5bUr",
  "key7": "3XLRKeKBEAK4fMx74SEBGdJNpeC3ZFzGvaW7qbJEAWo7qmRBCBsynMf8RVgwVPwTcdL2fWiGebX5Y4Xq3AGY7TNq",
  "key8": "2RhWUx7EbP2DNNMnp1TSJ6CD4j123c8YNjdgjMJCqRxVLx9Z6exzDGa548fUYtbY3xHPjBRAERH91XHvSk1vg33d",
  "key9": "43d3una5Unxa99v2nXevZFRQ1XQg1NayZtvumv4vpkW8D8h1DZHKxa2wRw4xeBcKP53fCi36QNBcEDFoH2HRHG96",
  "key10": "2VPmEtDrTddsUiRp1RRYxZDq6atEnKy9JHuztJnYfhZhpEg1ZKCgL66E2CHxxN9FGQao6o7pPDSwJKJLuoou9eGq",
  "key11": "2gCEhNt9TGVtuo2A2vsvVYuatwgxvWRVyZZ5NDaab3pKqfFGbMxVYokyZKMGydUrgMM3QJzi97sqMA45MGGPGdfu",
  "key12": "3rReWCvoB87hCe1RTs5mCsrUniZrbm4BvStnW2MEL4LAWFaqnmjdFCc1cxTt244Gjynygu4gq2Hv8ADX6yEE9ihK",
  "key13": "5dENzHrJM4BLXypSp6Be72LLhPLdoAszv9RYYex8mwmKY1GZkDDSkJqLX1h5M4QR5t8THi9h4t5Un921gSrTMNp4",
  "key14": "5bDTAtdUMUrqsgGtXwYk54Nf9CEJnvLJovXmekTzi8WkBwbTEeoJbc63qyioR7fKwN5y5i6f219L61RG4wBLFF8",
  "key15": "35gCvTE7hqEwPzJLzWRkV7k4ee2vrPGrfh5AfsKVwHSyh7MfnUo9QezMapMeB5tjA5RreByt6aJbYeVvQMjx4h9t",
  "key16": "47uY42414pcpiHEgiNSQZsnybBZb6HpTp7mfFm6Zr7n2obgqCGeW3M8FhWZKKecY6vapJwVkXoZ8hv9oq4sYGXY1",
  "key17": "5MuyTazm2vwohWZ6Yx2G4xp8AmAL8aNAEHzRntB1QAzVRjwLMNj2ZQgNCd2zf5dkb7xCW25dwGGfX6jNsBAQYDQY",
  "key18": "3c7moVPMnRvTi7BMfbg72yqjHpsRzzzvJGt5j51oZLYbqQfnA2RooRPTtUsKtLSXaMCdPZg5rGRBmSZTqmoHupVv",
  "key19": "EWQvVf89nJxw2PTwV9jpPcvE5eXKELPh1nWdpw1pkevbjSKuGufUNJ1tMJcbZXr7gFvPZZnXun5Xbg4gZBnVAni",
  "key20": "44UsjtZWZAx3weQbX3WGQgzPwPe9zF87Nb6skfdRY94RZL47KsQvUysobrpuBTeUugA5QWVuBHWSywWTUCkwwde1",
  "key21": "5ntJCWE4d52hs3F6i7EFpHq8zRte27b1bNpoYHTjcn6X2PqDwmtpbkfmemRmoKvWKByZPqnMdpxbNkNtbceeJsS8",
  "key22": "63ZH1P8yCY2k2BoLadxD9ZxWy3gEfyYbM2Y65ua8KfHyJWBafR5PnLcfhVRd54Zywu4EFUe574cqCLUDcP9fYcMn",
  "key23": "4rRtNULM1eMuwu1GgubS4sRQPabnEVz3ZJ3MJ2wr5TiydnsQKnBz3x6ob3z67kGk4gWJU5GizQ8dw61qV5cGJ35v",
  "key24": "4o3zsK3boHyfkTw2VGa6SCqEFuY2K6PuXmobVW2KizJ1L9WghFDuMoPTfJ4fY6DwaMNvYJUbVjrbikci5Dd7QN9g",
  "key25": "37Rb8rCDpaFHTb5F93GaEh46tyL4gjnfQqZtCE63kvqRiejSfSa9wmnWdKSip2herCTkwPrtY4Y2syftUm1rBns",
  "key26": "4jjrWv2CD3aNvepWVci6r9P6vPWfkGgu1TGvujTqmXZXQwXYt24V7yN8sVBF7KK6fv5vUNvhb2Eqp8YT1xSHxdiS",
  "key27": "4Gm9PiAHCJ1NjvDsLjmhBpDbuusSPbs458X7a6M3tCGXdbRAAbFhJ9J2DartxRbbbU76dwt7r115TurF7sn9SvcH",
  "key28": "46zcroxoi11317c9oTQcp2C7YSADZ5WUWyyUTnKLhYzNbBfE4oPJKPM5UXjFB6aP1VPanG7evDCJAcQYtVvB6RZX",
  "key29": "4cWs7a99SZkJAJ1hBD6WChettfNEKch82rv6GWCxkXbNDbbdXBD3RWQqnF73M1o689r9uedrBJakRQsqTwui4iFN",
  "key30": "2KJ1MTVcvtU2xpfezdcVXDbYUxwBHfmpdQbevbF8ZDndGQvf53CJ9T4oyZcbP5fK2k3jCQa9YkmhEaoCSLLjs7GS",
  "key31": "3sfQdx368UxfsT4BxFNTk2g7jPAu9hAK8pXxxuiFUyf6KFTieSRwkivrhjwgcrc7XJzUNSySctDvQGR4ubWpVmsd",
  "key32": "45H27gNR3jsgXLcy2AwM8PsbLvg49jHK3MtfY7qYSzdeWC5CFxSMdqY1gHVy5aFzx3p2yBc9GFiZEf1TSeR7NrRB",
  "key33": "5LLTFxVGxJjAzn4cEr6jvS9hJNUkF8Vv7J97nfHocLoKir2agKECVzcsaEQdskX3qrzgG3Gdpj6yp8GyEpK445tz",
  "key34": "2vjsQpbCj6WXnVu572FbLSPZyEbkwnTVCD4VbHTsN5zD82tmMnnLcgFtreEPPwU9oc77eo6XoRKNjn2KU6eP2nSc",
  "key35": "52NsKBY1CkozouoVh9N8CFbyQXrsYEfwYmWBKg3WGM7t3KKrEqkQDRp2yw8RDY7zmbJV27w4uamN41j7QU37oCJz",
  "key36": "2TayJ2CnmrGvPm9UBuwuf5Q3tiJi3usmif5DpTKyM5gSyhQSXqZ3SESPNC4rA25mw93NxMwndAZo1RPe4oGQw15p",
  "key37": "2yYi7aKr7qazX5CJSXb6DwNc5xa7UtUXnU9gH1NRaGAUNqL2FD6SYwkEYGgZA1Uaigvdy1iTumEZnr7hwJQrfwhW",
  "key38": "4VFb8BCSHA28XSDYDApJjn1PiaK1qMKrrYpidyCWXjv6LmA5dPAAJM78L5gfNxhSeaRopnS54FjnijM2nhAdtRMT",
  "key39": "2bfwGPxHtJVD6FGzfH4HU4gTBgkahTJng2yeD8Y69WozQaizqYBY1opDNgYCZC1fnNsJtMJCmfwHNwhHwaHtGqb8"
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

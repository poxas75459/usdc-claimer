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
    "iX9gdF4BfnpnSrvQn1pWXZoDwuQ4W2ikp1gy7xiMnGKMvboX3d7iBCNgpZcyZKx5zeFTZNjgzmqXdUXo2qsDddn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnrR5LpXX2t5DB9XhSnGYTMz8ZQ8RZFGgj8kNjbESeydCBT4GjiSDRgmkRi7BrMQRqhUASGAScMWysZHEoMJx5B",
  "key1": "2tpzSdG1kLJtxZmTVbU75JRegMksFZXMGr5W5P2qJF9rRaRvUEm2Lz5TC1cgAB78yCVB4U6XL9MemymB8Fug4bha",
  "key2": "4y1fpRRPELmwPtzSFAXicN3seDjrb2vkhCrZdKxG8fS2QoZySqWVDwevcRUoxUv6vNtqnrVpdSHtBkXrJLLTW7jJ",
  "key3": "p3gvay3jBjiwuVNz9qbPLCxCGjxA3n9qusH8jsf8phwTCj3XgVzGVK1sNh2UDUnDNSnqtmTkpFwRNykTuindsY2",
  "key4": "3ac4tziskZFCQ2sFBUAqDViFBMutSWqVjtobjJV3WitEQkwq7w8CSikmzybR3H3TBq49KpQrGcbHiCddRk4BtDe8",
  "key5": "KiUP3YJTsrCS1C5PFvQRqZoe6gDZy5D65mShUqkTEiq6KSjavfVysxfco7wFtUg36yCDq4uo7iUvwKJViYV9M15",
  "key6": "5wfhx5t3bcd3145u3rLEdpoeqVXoSDYCa8br937kkMZZw7ERs4BKt92rsZ5PkEMp3ZuaBzH1tFZSPNtVn6usEEn3",
  "key7": "5gmgM71UL2xhR7HE2Js81UUZzb2HiBsz6w7RNWVCNFy1BGsvxHbUy2w5nuSfKHHSr6tWfDF64VfqRDRM2CmQ1EEH",
  "key8": "3pTe3XFCj2Zku4f77JwsQ36K6vDd1yDrqhUhVcb693xfVvyg12zMojf1iGdkL21MEFo7EoTBBJAQJbV7m8ZzFiRJ",
  "key9": "4eiDJBMrGkdXXqqwK8YVhCUKVJdhvxRqRZEThZ45Sz93TYXT5HNTcCWJSQ8yq7hwhwyJvCRgSt73MfprXFq8xpUf",
  "key10": "4F8YEq4fgkvzaK6ENbYZokJ3DntWXx15Fv2Mhcqc747uapYfAeC4EZPdpnEUJyBXudRcqCbYiePf8PW3DUN3Jqru",
  "key11": "4NbzZDLsmW2TdqEyfDBZdEd63y2wVDbh3AQPgzG1yAFMcVna8wokBq5RFQTgd5Wf4qL3fdBGDMWmvDPbVsnf94V3",
  "key12": "3Ns2LjGzdd1NFpxDZzNyfLjpW44pKt2retU96qsastsUJ1uQFknEPwShDVZCWF1QuYiUo3kbqim6HH3FJRtr3SHv",
  "key13": "5UDc15cjWoEdyLxoqNJvoDdMfEYWRox54ynTCJ6KiCtEDrq3sbFJDAUwDdamzAXH243PV7F5WffaHAzCcr2iLE9u",
  "key14": "2WoVNxfic7Vsag1UefK1t7BTz3BeEtoQDBUfPpk8fcfEtYgK5oBUnPMPnmQFwU3brzpwCRFz3WAoQTw2pCqHaYWS",
  "key15": "sU2ZStRyxPhGbbo5rUNMGVuncuX6UU9g1SEBYqNxnneaeGR1mxM1cQxhE8JQxJPGJnfEVuJ9ikH2zqXMj6oGjAA",
  "key16": "3EXeoVGYdFw4Ntzd96XeQBU2B1jY8UjQp8us6kczkopyH5mGCyomHXNR8da6ToBGY2prLVZGe82Fq8WvYCDJdGo9",
  "key17": "ipRQkYsv2b3WEb6rK6PVHb66p7WBkh1r5fNdxzfVK8dro2LbaJ5TA2FURWq6cWhHD2AfqW3JHXXQc1MkFTYHywF",
  "key18": "AEC8UTaRcRsRnpdGxYrKhP1JDFsCvx4L7GQQvh39tV5KLxiub1JqnsaGZUP9ephV4RXYCgYJirbPMZ4gZPS4PWH",
  "key19": "2SZHvwLYDbw9mjGSFUhLzHu5vV1QXViLWovPaEbnZaSNgSTeHpRTb4CnZfLU47ZyFL7Z6JVUDc6PnRWvgjzEsNHg",
  "key20": "3EmejPke71tfGT18629WEcTMCWRsQcp1ntKweZeJGQL6zn81tFSuqqTd2BkW2hWQwDwYjTTywYyg1B2Uww43s1sv",
  "key21": "XW8Gh5WVE1xXK2W4FGkU4xbqqr88PTZL2s9NTDgmGPZ1cqzpM36U6YwcFyJgZECtCZ8d2YumZEbKZMfZiZEPBpx",
  "key22": "54NyWVy2rFyp6Y1J35WdJPbHetNaNmznxSgv7s8JsRe4kqiB6vv2hpTcoc6HnNcH2cTw883Hz2guwrd27NX3t6d5",
  "key23": "2yFZiAS6wDHXM1cuetxUvqcRVtuwQS6svm4sDv8hrjdL1xHNuGy6arh8EBa7aagrAyv251XuV3yxtGwSU23qc2mD",
  "key24": "4rqTtQf42jerofUGBbp8ZCfKy4MPA1n9NiUyn9Nub2uYCBCuUEsuBS9psKQHFUa7vNQG8UzGKhV339M51qoPyh5j",
  "key25": "qHMj26yQCqRvwnt5J4zFmGcFcadHRXqgeHH1QogbvuLPHk4mzhx8MjKi9BsRzkvX5eLZbX5ERE7Wd9hEMvvRay1",
  "key26": "33qkDoqXRq1Jj1uj4ce7UGAppKnn5LJaRmvk8UBYGQxtRAzLDAo9tyjJKCBjFhg26DgExxLcCpsFsJn3mABYNRxz",
  "key27": "3uiw6UZFje6u666YianTRqGSP3YdL4Y9cFsctBCgXcb8RUQAvmT3mFyA2va1uya4c8hYCBR8tFcVF5yqRznWbq71",
  "key28": "6545gEhHMRhedcYD9mwspVf2Skx33rHs5QxUn3ExsbDK68gPwnQBzZUYmyCczfdi2DJq4vRAcetELKPYPUCDLz2R",
  "key29": "5XMWVj7JjNsAN7hZKsvsBQwryggkrk2S53Wve8EHN6mY5svMFm1JuW3KibRdTt5EyAW8A5wsDGf8avW3f7o2GW6t",
  "key30": "1pYe5bSgMMbXEywdgfSMmp4H1xQZrCpMqRCbaRZrPfD5SnaLKBJ1sMnM9qHUhhXxZdyvNUsz4TtZMLJNCQCHxvF",
  "key31": "5BsdTCbTJ4FcronUdPttoH9T9PCZyrH5r3CHiYoNdmCkoNFJQD94piEETEPGyyvuxFvxS7FS8XSZCxenGQkGFLcu",
  "key32": "TRUPQN7EG1B31ntNt2yVhkQ3ufh1pT9YP779ZXqsv24gJsci6Xc2LSfJpCQYP78m7nyyW7SMTXfo2wYf3qZ8D3e",
  "key33": "59EDaLwLHx4nCPe6ANM86gBJfLYTPFaGhjE1bXjNv7YGVhdHpYSpsVbUMAWkNv64tvpjtCaSfhibfDTWF6qHucyg",
  "key34": "3xiainXj6F2NWWRjxaj3jCN83X5ndptdNUSuYPbCnZq9V6HDbTs2cD9wVahZypNdFrk5Koa1R4j8TjUvosejEA2R",
  "key35": "2NgXnf3Gywuq2haNt8YGgCyyYdV88efhwqXpTWmxerpyg4YsbS2abFiLudEjvGSm6m424Evo7MEwvXSZ9FyUjW1f",
  "key36": "22VVL9YrqDFqrNG6bmsJrVzgUwD3rnqdQcd7KHyygkxJzEJoao5FaPimMb9vnXWYW1vu1mXm5S187JoYzPb78u2G",
  "key37": "JJaCv6wUAeeWsSEF4DXdjMPqA1cjwj5fV1GhuM9mcRjKpywWJ9VSHAMqy2xDv42orTF34dWhPc5nnEh72X5k7FT",
  "key38": "4w6NYiqC9LxHw1Je8vps3MJABYSQVMAwqWW3GMPobF5Ve93Yq4Qx9r1q7HnDS5omfB7aJc2oNDt6Swfapdh4BUYf",
  "key39": "2txFSW6eEohGZkJWVxh5r2Vg4UE75JMJXziP8932ohEDu9Cxg42fUG1fuJrj2EfKkW44HB7gw3xE9GW6ugaJxfeR",
  "key40": "5dj6c59Y9LdaAEi7yZ4yNmASU8WCz2fz6kKzX5TSMjbi79EKf8mowZZPCofVLopjBJYQTezztRX6pMN1aRzBL7He",
  "key41": "4MDUqYGrYVtmytMd1rEWTdRZ1guybVPeWiExFM7mtKqZJg5rtjfeGk3Wii7SWAzk2qLdgs4op9W39ZHdf2THL9bZ",
  "key42": "4jGRFsmF7SAv1EYGpfss6rHQ7nzRVHXvUJrhLyJ1pcPPqkNyrfY7oM8Uaz5oaKHVMKKHM2gj16ns9o3tEA5UJQo7",
  "key43": "4FYzGUJ2ifDNnXLdqNDsEfGDSxa8JLhcqchfrzFuhwGXSYgrMo1uL4EWU1F8ccpaYAEtEcokALgCARDAW3i1UY9D",
  "key44": "26fbyax4j9q5LmGb2f92P4ZuhG3gzFXyRpQsnnnMVKirZ1bRDM79LSazEaimfbwYDsMDccZKwE9yBWazpZ2M3qNF",
  "key45": "2xUjgc82oxsxqT2XB9bfaroR77GzFMm7P4yK4aiZDvQHde7Ci1ijBu4WCgFC5BpzuWqKKNZwnRbtCbSRdFW95UUr",
  "key46": "5jtJEGQ9fzCxQaD47f6Nu2VzvdrMaaZaK34NpAMCDDyfzDiRdbFSjih88bAcFiqaQarzepHQDxbMAuEiLZ7BzJHV",
  "key47": "38yY2yBwD1h2ppQZAvr3fHx9GbkVKwEZ7mw9Vv6tQQrGGPNZtYQ8vzr8WUFAx1zXkUN32mDrmJn5t6h1VqrAdxYb",
  "key48": "2zF52Fk6CWFbaaoyGjAEuf9vam6uLEqh5RrKBUa3WnDjikYjUQpF1AhxboFZ6tE8g95hQiwnY5vGdz1vwwWtV9N4"
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

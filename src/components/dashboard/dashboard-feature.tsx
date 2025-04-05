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
    "3T9fnmyFtPfGckN3GWx6bnBC6v5rn7AJ6z78bJqnXDe5xu2yr4dzi9wNGuZR8njTnRajVcM3XiVtMgQfzwNUWGqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZCBZDRspvktkQFwmHWee7g4x9W98xj9P3exrKz2nxXV6iUYXBPaS7A8VTyg59R7fWaqspQvK6B2Db4VW2SvsZC",
  "key1": "1xUyyGgU4gdTbnirksm4fQbXJELSVQMcBPe1e78qwB7vHNJNnHjEMvfZfAHzBmL9qaMpUs6ZFnb7ManLnMe7F8h",
  "key2": "3m39YhFpoukbRuGVwTFGxHtufsVGqP7RJ7fTXb1hum3Lrt1SoEfRzmuvf85MTHyirtocuJSnC8ekuK9ysDej2eob",
  "key3": "3VVxUeS3jFWdseXv3uE6Dfd1ycsguTNcPdgESmwPZFf5CExoT6hDJSWU9y8YyB1FetBhm4eoUvuwiDTi98BvmLGr",
  "key4": "3pq3asebHyxbA9wa6MswQSxcfTLddHPwMHV5bdBGrJXL7GwckYAKcde9pJUgD1Z4hvbNVeycfDpYTQDDxHqAMDq5",
  "key5": "45MpA1ZBTxz4o38C8YMYTsX5txP6YpcnPYWYHSXFiX6qdheCHaWvSwGdiYJddFFqHdX3LqW84BK8ppZjgNKbJUVB",
  "key6": "4GvXmdSsZm9FHuzNWCPLXpx7QE3cW6q2Z8CCBe6ZdZwEVgMsomvmHxsKinQPbPqzHybAdo1U4xjDYv8Jvs1tRUhf",
  "key7": "4LfPGt44Cw4WMSChU39cCHEK5V1oY7B5JqSdAkH9TBp8C92MiNRV6UcRRrbLkuFJuoXndFrz3xKSM5zT3ou1GyoQ",
  "key8": "2i8mFJaTFFmzsggku6apHLvQ9x78hTQepYypkm1B4kkBPw1yW7SKi2VconQu9zGDYaL2w3yt7UwkzY6fRs42ce2L",
  "key9": "4EEhPPNA6zrDgtGQ1FxxTK5AGtasA7CBuktRJuqejM2wzoggRfLy4Bq5TwNavQAzBvkq7kxtxPccdKSWjKz9TnWc",
  "key10": "5yGGrJJvgc9amnXYLKTeBwetfxg5WJLvgr56a73saC1DZFQrA7YnftEPzgtV7i4gWgzPzQGjS71dw4JzDxQDLa88",
  "key11": "37TmkFrYvLHYyk4wdd4QZ7gjGyKX4d4QSR96MbxVePAUBfJWv15HR5yhu2bhQhafeA3wztq2YMexX7Dyvh4eWrtA",
  "key12": "axPcPJEdxUbzHVfcfp69R2su5KKRLnHzdZxKnwsGzQ6TJre8rqXu2jRD6VfrbFzaAZsHYVaLo4Pr5uqu6x8eZNE",
  "key13": "j38HceBdARMYCgtnxLoz5Zf4k7yLZ3jnhQije1gFVVHf7JrHE7DfYBz9TpJygTqUgmzG5UFuW2kmHtZ4vdMYB72",
  "key14": "3M57gG1CGUmFjpY3oeN79qjqnLKGVY4Hw6qXDgBdgAsAN8Yeryjde6teu664VVaqo6hYMbSQkAiPsAr1QfaXKPH2",
  "key15": "4gdV7zRHms7AFQPqS8291fjDGgyh4r5nkLZjU2GeFoHzoLjRMuVsSRqdDssJMmWL8Y4pzS6Vs6S7TZET3ptgmB32",
  "key16": "FrfsPDM6s2abmSK79pdWXFH13mYcbtsHBuR4XVsxCjXfgj2D34P1UauMUhNNn5wjxi4ssyMja48pMvrqv97cG2W",
  "key17": "em2kzkqYJX2WXzjngSpidaTWyT9qTHgnBDRjuVggRFDBYAT2VVhTLXFk6DKRDjRji37zBfJiCg5TUQPYgkVnS6Q",
  "key18": "2HpCBvrxZKzTHuSG3tXXs7n3hZ4DdMyhHJuyb221xTpPgzf5DxZ4U8DKdXLrDZ4oBR3VsDhMT1P5royf7Lef68nQ",
  "key19": "5bHfMG4aECyRKU3K93EBNp5BGDQmr9qxFAPd6e2VyZJzqMp5MCdhz1gLcKQFxWccr8kotvhUiXBMXx1EvsfcSSb1",
  "key20": "EGPjU4BDnLGToRkobeqTaoGBroEXhfNTeMoSXJTs6H3CoiSjbTzaNaxAbEiSmMzVXMjiZ5QcmYH7D1naRN3sk3v",
  "key21": "4rhPnwz1RCfKGCB5fyERDmScuNfZEoBn6LjbkdNEWzM1W9GNh24kuQtJ4vRxhpPBrGgwabiF3mse1ECoEhfd3DhK",
  "key22": "3Jw7CVWAxByXRWY4Vg11aca5vnzeEuKbTZjTJnNS4GC26TTnidahkr693uCiAWVqHr6j1TF5eY5BHbmUwsxqb9Mq",
  "key23": "3eS866TZRvccqsYFaVdY494mnhguSiYjiwydFBEcx6qkCe2sfJeeDojXGa7CvuZZ5VM2fMRZmEKEkyJZWFUvScFE",
  "key24": "2roWveQUMtpusGp8rW1x63We7e7rW7JSukKDXMXCtHo2GKjGXmKZdHnnh2MskS3f5SriC8TCrCEeycoaaBS7M5FR",
  "key25": "2SsBvEJh8zdTiBnA75FnbhviqiNeG9YnraD4HrUtRRSbDRRNYjDCY8qwsL5FSqpwgR3RWzjJbjVZR7UZWUXd7yYY",
  "key26": "2rGWbgSoCssShYHUQpahz8aY3fT5v77F7bLwTAs2hqXefMdSEGNuHu1fMjoty4BJ8Gk6wgzrEYjXa7N8MZuAHo3s",
  "key27": "619WQUsLkMF9NWZuaNriSmWTyvBQdBfmzBenBPL7UwSTEeVLKmWtAWmeW9ntDQ9tGxuqyAxJnVqFkBPHTHVYy6bv",
  "key28": "33JAxkRp7vsmehkEj8Q4S9okNKb31sauZLnPHQpRszPVACca3AxNhoDfhxSLHNcKCWWqSXSZhkuCignGN3suozyN",
  "key29": "36vzRCugkNA1otzr828McCjonMkFxsDkDiGbK8s6RkDnzJgdqqwm2Tmn7f3MU13K667AtU17bRaHTmLx1rnSKpMk",
  "key30": "2H9rz39Z1hj1QffYx5qf4r4tAnuYWqFRRrynBVym4ArH5XNSntPSAARdYED4tWBK2AhKBcY6TcE87fjeiL5nkECF",
  "key31": "5BgvaNKDMSdE9kDn7PkJzuycs2JmJrQFMy7y6xYYNoSxXMHvhGju19sxqmeVSEJse1Ypv2JqPtg62grEsssLcnnZ",
  "key32": "435j6irmTFtY6CXBqyfhooRhAiRucvBkWSvBwvDMRnyipJXqaKpP8HK84Edqouqv2EZKymtHpYM1LUpGEB55oUei",
  "key33": "2dFmzbWHr1t5TjvJFiAWLKHf6T6uvVfPNJcomkZp1jfxF6jK4rbXTyWZ6CTftYMJ7JxynTHTRqaiHLuCihAyFAUG",
  "key34": "3g2AhXGEhWduqvr1JKxLme7EaofChnTHQ23RQ2e5ofxS3rSMjdd3LXp7W8BB9QfFVLZGGgPQy6BuicBxdULwe2ee",
  "key35": "3KJfAY5Cwn23Ttk94bFNozt7JPZyP9ryqGmoSre9owZgargxHcGkaZ7mW3dXjFXC9w3pCcEoQSz9zzM39BGTSQdq",
  "key36": "5pdP8gpp1Vh6vqD6iPCa4fEDRr9G4NCcxkZyWPTx4fV6UbqUv183Es4PQrbftwiRDjLZS5jjCwXRpUCexhJHQLj7",
  "key37": "56twznee1qxuwoGpAJMspEUuEx3FnLhSetk9NytHWaxMRVFp91XskXWM5gtu1tEoPCnwvFEopKYWRF4tdrEfCxYZ",
  "key38": "iZH1L1neiyPh1m4DAtyrJmSZ1HiSG6i5xP3eVpZsv2z5v2QAmJwgJ2Nq1be8BGZnF86RqLhBzVRVXUZiVrEHwAw",
  "key39": "2YfMhATH8HgXrc42XLYhcg15bsvvWgWKrssBmU1rAcWU2gGf37ezwq6n6PDVzE7F84tUWywKQkLiN89fAped3Jqg",
  "key40": "22ERhiRxaKBY44cNUdwmL8q4hH3yyWWFuuYLReuh3Czg5Bc1EHUdjWAJjW8FAsVJTsqnh26bRiJtVoXSH9n1fjkG",
  "key41": "22auVbzkNnHxPHgRjMaRZc98oatpoNjpM2EL5R7jQZ4uuqbwTzDw27gNRHSmWHQiNpdWe4MZ6SibNxuZbT2ZyxNZ"
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

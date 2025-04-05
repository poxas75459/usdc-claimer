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
    "ATvvDXSm6tY87yqFrQ1rkNzBnRzWDmLqQmFADkpBrXknNC4ZfHRLPnfSE1ZNfHgmt1guTvV8WWNqX23XTc16Mus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHuD3qVeJjaaqxpqZ5TmqufGjbwxPVsVarUAvF6C4WtCMEL1U8DyQvowLRGVAs97jWRrSmTiSvS5R8LbP4M3Uve",
  "key1": "43EgqeNQAHvL6mEh1jzjeHcB85q44nzhiUcCk156itsuvMApeCRYRTjaHY9bqFxF8KeQCdgAVJwV4honH8HdH1qV",
  "key2": "hN7ApAu2nzJP4dyJYgMSXjTzbiXmVDiLDEopETdhuibNKouohR2Q2hT6MnmsnwP26rpjV153pNWLWzT8nmE91Tv",
  "key3": "4hRPUNoW9t51qVyfswcXk33kZGQYwanGoKepydUiK7hisEcUH7CT7HZLFQ8TxiAVEu1HR3mpz18JGpij1wM6LoHb",
  "key4": "43M7YAfm1Cb5Z9QAEEXua4FbVjGNbZwww7gL8MFLvLdKpqJGG6MSUHTdVctVxHup19Q3cgjHgogLQdJEH6eaxdDd",
  "key5": "MxxA6GjbJWTD3Tnmfhcy256CPNETEopM9kyDMW3iEG31YquGKt6C1hZgxdc36FHA3dNxW9zzE3dX47fJKTL7JVt",
  "key6": "2MrYPwJ4R5ajiSfixryfKkXNkzG4EYEGWJpV3Dip3eH8VTR87owtJT58kgNSxN8psnmm8j7xqTjnJr4f2cCbB4SK",
  "key7": "35KDKmdXR22oAJnMwMfmxbyTMvnqr9CJ483Hy2q2M1m3SKGKsaReJSKoZdFpkDztQ1tWXXDsLCKdfrGLr19dRf56",
  "key8": "39GEdpbEQjYhDJ1mSNkE8pUVzH7MEBjctBM8L26MoD4VZhm3hcPBGdWWTvDTY7Cj4NQJq96HJLN9jEd3qoTKVqQg",
  "key9": "5pqi7JmuJDHVsCRZZqpJh9q92CjATdWTi6MPgybjis5DtpUDRmYTZMznmuunFKAovneycs5HBSfgtz7Kdb6R7KZb",
  "key10": "3FYjsmGG3fZ24SW9SzGW4bgrJnxuHjXox21eTYEPwkPXhfCKqCZ1G4muaxAaJ6UBs8knTJ3nKCNcrVpiJzqKqwwv",
  "key11": "HpyDaZQeZG3aG54c2JBqvTGV3KtCQMCfs8jNVLz7KX8NhWu1FbQ7R4mZXiSrzQC6sGMiAvx91sLYkKBTkXYFmvu",
  "key12": "eLhhwL2kdNTWbLV2mVqrnNMUd3ZPQaZ9FDmqnvz7V1Dya1ZaNrkmZ2H4DcRv2jg2ikRSffghmGPpSnFHdGfU6jB",
  "key13": "4pXHFQCVZwkccaDV3STrJLe7imY3FGvSfxtF8KkHSyKotWJBamoqQ3hGC1WKK1gYPBDxkXsgN3mo65oP1CNuDAUf",
  "key14": "3YfYTEPwQHtoZ8ARTq8DEN4ZCoDisZR8qrpHfj7miHfQ9FGZBvwrfJdGmSnY6fjQV7SutEKaCP6w4YyZrLVxLBkb",
  "key15": "Qyx6c4EeqEdgPb22CM7joNfWE6NmkMC3R22HiqPTXhWdQjxDeu4fmWLBdm9Kws3ZHuee9WK9muj64Q1nbRZsRzr",
  "key16": "Jhr5Zjqho3Xhs4rBG6CL6TUG5if3gsB9J9fcKaf8VjuohzEFyWaFXSHMU72T6H5AvANBtkpTFLjzD9J3H8gvm6H",
  "key17": "57wYRwjs8T3Vb6jNSz8TK9VN2N8wBTjsTo7TPHG8YDR26SWeHXo3z9UzS2riFU8qyWaYuaKCSqtXr9VHsvEpRwbp",
  "key18": "5EjGLRygqbvZKs712NFq6TWPHex2WCD4p97Sf94Vq3Tnmet7ZjPesc1CbaEUbkxJahCab6QrJx7PLK92o2Qpk7sZ",
  "key19": "3piSyWidMaLQdKBXPJcXGE37gey9hQ7FoTyVZA1RBikhWGE2Rhot3Qv9zwwSyRMwsnTjYWNQPKQmkk13JQBCUUxf",
  "key20": "LVaw8NitpjoXhMnRG6scnETeHxXtBMVdR1KkzeTtaFFJGJuhyAqCN1NQFubZr6fVPBckR967tB9ECEBJs1inPDu",
  "key21": "5G9DLdDZC8cDMto8BQrzqJZ1mhvLWAZQ7DPjwqejGXqjEijFY5tZ1hPuXGv91P2XNRbRiuXgEEhEvwdZrnGwZhYv",
  "key22": "42aSjgp4H8S6U8pYXa21ZDtWxkVZq1XsVQoj7VFPHZUTS11WF4zzSCuxSMvGQVCVXV5RbjP1eizwRTr8qPUoneiz",
  "key23": "89e9ZN5UsqevCKMyryCzQza6JbwswqpoG5fQSKj31LReBSp7yDZh6CmmBqgbrYUZAeVQTpvAFBJq5AAzfRAoh1D",
  "key24": "5s8zcFXCR4xFF1Rqop4xrdKCeR3wponeLda8jJqYKmiCtvNgU9M4AnbeJoM88Mfu6W3kud3b4TgMcehVm4dRJoY9",
  "key25": "28oo1bqtxdPwFM1jN3Rg2hiAmXnC2b8Tc3vqkHGCPuv3qGmaJMAjk7RS5LxKqCA7qbVANwaQFBeCXAnP9JnGaASZ",
  "key26": "2miNycbnZcVuhjqFrkDBo8b1Nuhuj6TFjbbA2Fw2iwpraAq1eDmrie9tfxqe8A8KAfnK3cP9RdoY2eRXgWWzoaRp",
  "key27": "67ZG6sboB4MGEcz6gsqfHfK9cq7Zj26qYfJUTqM35JCTuZpwwipsMjogLu7B6KB6Sr3JaFCRodwavzRS5WgUYg56",
  "key28": "3q6rPmfkokw1CaL5KfeuoXnRxKPqVpFk9DxYDK13u88KCVbGRjpFTeoRxNG3PA2YSNjKD3PQz4iGUqPducoCAwHG",
  "key29": "44F8ks7QQ9bzzQBaBcJv6aWhBJskQyCD4FPeHP4QpvbwUVjXQyXeMXJCNjM3PBV2dViTkbxMDU55Yi1kLT6MJe2q",
  "key30": "4E5AChSRET5EAhPdVmaxcGL2xh2nSQVeYSH7669bpLxF9ze6RsMKMEWBYEjvS6HQBBbwJz4SLLSa4Em1ai5Waizi",
  "key31": "4Yui3g1vSMyLmVZo7inJkE47N4fysVbWRuMArSkwre6UA5fcxU62cZcBzhfWdgSGJJyyYZq5HTD8v6WZfrc8uB3U",
  "key32": "3dFvvAcZxMy53C3TA1mYBYNcf6hGbfDG3qQQh11aR2qfMq6DtjDyxFWspnwUb7arkkoDJDdhYWSiKhCATBGB8oF2",
  "key33": "3zNb9M7FsoSAgyFT1PLufXMWmvwACFD1anCVBhK6mPX7pLx4yXtChZfFh9h6juvZfhgSvXJfmDETw8ieJeuFe129",
  "key34": "9gYZp214Se17gSw3jDT2H6nRxpDkmHYa4xiWS6xQYJRUAvpztKUh8idyc7G9rJ9F1HAhEM2hyqEQ6aLVHTCGMoj",
  "key35": "4ZLbDMM8kxoE3DuZYvUiNwfcPXymY9nauVftBDyKa5JFeHTnvVaT7ce742Fz7pFpXarLAgjS5h59vcnnsDvFZMLm",
  "key36": "5SHRK2smCHWRXYeY4zkA2AjGLU4zk8AFKq8NYkiPcdF7Ai7WZnLP7XtULZP7qzHL67KECwJYSKfofNhtxeKX8nQx",
  "key37": "5xvRCiHzZuaZEWghmGcEhYan6R97tjG36GjAWBLWS9AMMMYr8HEGWXcwAobFivRCM21fKxxrXBaUy2v6H1NRJp3e",
  "key38": "3zVUoySquQETfUhqi5rxUQ7hxekS7eKkgX7Nez66Yd11f4Mz3qVgnvmncQqWRQBAqdtmzmjHw5vZHVd8mbEhGqdz",
  "key39": "3Ksqg8seYsHs5dG3fdFeYktGHh7N9Bo5xGD2s5nedyT8oRm6mYb8DCqdfdfeRHqUr21ojV8GGWAtqK8PdYN4Uxav",
  "key40": "2aKsuH7eavmEM5t9Su8J5HfyrLQEnLHKFvkYYWcXvpTg6VuAmjRHgSj8RnE9rJF6f8kRSCDvrQGeZqyGDPqqcwCM"
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

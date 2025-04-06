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
    "5AXTxoSPZy6JCJtUs6LnUFGram2fu6hj8yygPXN9omapxuW7if4KmcAUGFs5Zd9ChLKpuD64X6g3de1ZpHbR6LrL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLrEjpp5M1NNfyGTx1xehtpyc4kfbB2uoGP9AvrZVUwxPwmX2gkpjbiHxw8kuSgd4fDosEu4Ktkg7FFg7vKweMx",
  "key1": "4Fv6Gy3jMdBQkXV3GBp5i6NeZXMpLyQKTCdSEn5oE6NUKeXZUWmah6wHvSp1HjtNWBRYE81DpiANKJGjw3VNgJem",
  "key2": "5T9BzxtStsbSgGAGa35VWsPr122NfKweYnMjcGeCDRW2hfXA6qafTbCZrRYimsG9W9EVp6AEnhMamdag2sHnuufi",
  "key3": "3dXXtUzjz45zwK4FahkY7rJTYNP8MFUhUAiJx9pR5SCwVHVy3zzMgbYQJS3UqbcWTbd3qsxU2ziGLi8Dgn5DoCSx",
  "key4": "4sK4bXSMqLbX3LtWQDFwx5r11c83cmvgFSpDSZPKPzDsK8HzPqzY7FMBHd4giYcRxkj2XjZnGNpPYop3t6gETLf8",
  "key5": "4vk9XC9V3DJJJoc87f5YZCZVQKyKYFBBs833VhFBjeSjMeh8ojK5NP3QV8SpguNTLkmC1FE21j2Z18xDWe557QBU",
  "key6": "4moLufrSWKE9ommmCyemddaA7o4XuawHGSwkPf25yPLPNaZWJFcgisMW4VDkHuaFFX61W6pXrRKMeDvxuXsVAZcc",
  "key7": "4ThgKgvLLJHVsRpkbrZoMHNTXxQK8oczutUxdL9qZBJwhwBFNQ14bXzFH2z74vnpcazkEWMZBw5tHz5ktMjTtmTU",
  "key8": "39G2tKm9Er8ABweJ4av2fzohK9rW7gCWCsiCF9qGeQvRKFoSQGT32Xk4fARb4fJQeGeYz8vBMF4uZa2z7RqYfARS",
  "key9": "wtmjaBEKxVZWzpTi7sidhpWjdfqTsXALzZtzUzf8bAB9YqKdSzxkyQJEomvksWFCjoMKrNQ9uHvgzVCjzraigfh",
  "key10": "4suZtWW6aD7BN2mQCK7WVfXrcuT9FjjYji4i9vdGEbUG5j821wFBu4ZQwdyFPnULaUWvrDFaFLaRQoPzCmE565Y4",
  "key11": "Wwp6QNmUAN7dbFsSChCK6wzAT2hWtdNu5ZZ7tY38Hui4dKrBsXgHtDWWZbcScdtbWdYPViULiE8LdssPtuNbVpK",
  "key12": "3FB96dr4Ts6594zFEP3DSewJG2hk2ESpc6DbZ9pRG1uzMrByz45rt83mtNPJqUww9vWsTPF7A97DFgZ5nUFytQ9m",
  "key13": "2cHjUeVeiFjdd1sXvKBAZU87Wi12tpcXgjCCxSCpcJLKTjCqye8jtcTmEdoVwQbcicm148DYYgX2Vu6NXqLCJ4Kp",
  "key14": "2pJ2bKwzRJVL2UXyJcCB5Smf8kPo2gz8ujfDnGyYJMk2cvLFpN5hPw7SB9Xr27vWhgHs2eaoxoj1HjKcqjrxB4ub",
  "key15": "4Pqy8dEoo9g9sZ1rRhY2yfA4F9ZQS4H8wZEeXcfUhTmYS5bZvGwTtsBNyP9VQ1T3SYJF9qirx2dwXUdyPXkts6uK",
  "key16": "5zJkxeHLh8gXKcxMqGndrLAcEKN9WBWMFyiAXmT2Bw4bgVULEvtRBBtNgBUE7rYngpXFvHoE7NUGsVPfb2vYG8rj",
  "key17": "5Bvvowrixt3TnDHd1f8kZ1DKawFVVofoz9zvPSk5KL9N1oSd84973pwJiaZPU6iwf3GaUEmHRuTbJ5aXqeJ78wCJ",
  "key18": "wtsGqV2tj5YATi3muBavKp2a1iL5WHU5sfFSK8yPULN5j6qB13iwCZdnaLbzJ4y27PcBcMuPyg7JrBFRqzSyMDh",
  "key19": "5cYGzbuEfkQQhMJ8gAawzqCoHgTGAkArvFnFymwJCd8ZWWu9aizcrZYaY5Pd9bt76H3HP1xQ1dzsT1JFHEZN2Ynb",
  "key20": "4B5DBg49vj2BPwX6Z9awB7U9yySWjAJpdRyGx9bPWU1dZag2y3cruFxtqPSnnbHySjM3wrYMsqNFrmg5bitxrVcF",
  "key21": "zLqs27cmchwqPe4n25nKexmgqwWKtftXiFudFtna9zcdg3dmnhEeFsBs93BSpMScGdcgBjvM5ugNjSLPZsz6u5m",
  "key22": "4QGrc1nGfgrb8RzedgM9uTYerTADReDfN9kM3A7buC5PpiNS3oqa9bbueMmF9DqTb48Lu1p1CirGg8EK6HbU6V5f",
  "key23": "3p5AW635DpXLBx7EjCVK7vFDLEHUswUhR52JLddX3AZ54rKEfi6kkzWWE5bRURuTsyqqVWUMQswRvEbsiw5RUuSK",
  "key24": "4nEhPfikXyeHL6nRbgAAaAbPn84kci7Nnw2jEKKaL3oPHL5rqxgwpbXF35a481M54EA6V1mDBcMJDychqk5BHiAS",
  "key25": "56M5wM5bVqKeLkmx5xRuqtguqWBPgwxhGwkAV3s7UyYaSuPD9TPT73rcbjS7E1EPDubSBWbkJexhxv6BEj7cA6QQ",
  "key26": "DNztCMtu4QiCuEVcjuAPQKyNpBepaDH3RhxpuTaa4G9WtSS8nstwfkfZ74gy3fah5UhUTRLStYkDWgt6mDDPAZU",
  "key27": "YBoKVqx1RJ4Le6aQigrT9UNTNH3PMnb22XdmBg2nCiEnX1zqa9AYHdi1YcM469tXyGexm9589MV11hcXJDA3KYw",
  "key28": "56mSkAVdxx68Wn1zTKtv91CPNWxzGX4Lq6jzr3SFWzUFPhVW8ZGMn4QNHDref2CKtELETv25beLFvqUGuGHFLpXV",
  "key29": "5wHpQpeKptUq9opFvGHfDPDVJswc2k32aQxjWUZutbG15esKr7n6KHK6Tqx7L3zHQkmudtuvqdRghqvdDtHVcYP6",
  "key30": "67WXDrGxWwHSH3DLGnDta2FoCCTBD3ToapCyxcd7BP6VisNc1FhuoGUM6jT3BRmkctv4rxUG8hkhtDr54GeM4RQ3",
  "key31": "6P15WCemi9ZvrCSTfsok7sT9EXoCaw2CEdJjiNbsqXUnGLGRLP3dKZyRyZqXQcL1iNYHFsiT3VmzX1nkLW8EuCa",
  "key32": "5ZtwgWPkDXsXy7XhSEf3aDKhMEbMsPfccFCXsz8CooqXhGSuoDabjiSV1PyH2CfrJAwg9kM22x3mQ3C4bvbYQ5tR",
  "key33": "3rWLMvnZAFgUfWtgbWKu9JUid9tWtBtWYedcsB2RdEtapERfFz8EvX9JvjTuY4xm3CXXNKpi4LC16HKCbXayotKa",
  "key34": "653MCjLpjSnjcAxqurw8t7zU2PWEwZJg9pZuWztu4rGX8g97jr6iyaXDVW7g2okjx2qAbjUoiym6WjXBkFiENeKP",
  "key35": "3s3e6MRbPTBdfUwcBtaDcazeJDw9mBQ9n1TysZcYa3jEK2DpMD66ztbZv2ZTpadjoJg1FxJD1LnXgKo3rxzkJc5i",
  "key36": "ZubNZVqJDNoNsKLMVESDUWeW6iAjFYWrumBhMiTfgvHNBH1SY8rcrzpYRVFXSX44DNgbfpipG7eFQzdN9nZkgV7",
  "key37": "5gQZYJijznzXjeiGawUqCKdQww8UbY8mGUti9wGkGKm4uEZ8umBDu7F5MAkB5wBusC5tb1aaGmQN7zHX7W56HZRr",
  "key38": "3UBJxGJtgMW1tayUwPtUCpY6wSSDcuZrbMmzHHSjuTvzBshUaPhfUCrs6d5VPTLw691eM3k2DfCWoeFW7vMjE7x9",
  "key39": "5m4eeBx9RU4SaCdQ7wVZxt2ex4vDDiHsDLdVq6qoeZQvHGi6paarUA3yzHtGKBpDxvfghUq1BfRKLjB82vV4rJJ6"
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

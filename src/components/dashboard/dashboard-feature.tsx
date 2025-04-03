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
    "7Fwc9S7vT6PE4qUV1hLaiR7cSS85WjhYcK5Bw88V3Mmajk6N2FDXyfJRLtayqAmExrzYth9WDygVUoFNWBrfVSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j7EBmXDSbioeTw5ZDBeKz3nGM67rvYik7TDDuv4gRPJqdWVprSux8Mh5Fa2dF2A1CRAuVpvmGeFLRyBV4P6rbFT",
  "key1": "3Sd5AVxXVDBXz1jrLpcoCktnfhJvVZp5SnyxpLGqaH8FJt5w1JksCQ6j9b92WxdB7o9Sj5765ypvkUweeim2ME3m",
  "key2": "38tenfXnys1Lpw5VpAuhobENx7z9QkRbeyhsAELvaBCexavYuD71VuNH4xKMUzwth2zaCcFotthfLtn132iTzkPi",
  "key3": "21MBSZCWKDqSPiRr5nrcwCpsVHFn27J3NExAnRiK9382S3HhGbojJTyhffwb4b7xFUTPGNw3HtkMDr1zW2m8Pnik",
  "key4": "5desnZPrMKm4axJiNzu9TUUhLKzL4FHeDDQYv1k7at3RUELeCGrEeCYm3Fp2PyubwpQ8yF61RgtHmVQzZhJuKCCo",
  "key5": "4tjhUA2Aj6VvJ8mSJcKUJzidEEM8pNMAwa57FYb7XuXn3RjGFM13giqAHcVdsHnF5wvscYi89o8mq4yZf8Sq8adX",
  "key6": "57EG4Y8KjdvUFV6ABd4CUQo11kjofCYG1cFcRQnxnbNvzBGsjUAb7is9Zdi77vHXX4pZ3iXL13fcsGyzWwrSH2Xo",
  "key7": "nvA6Y28jJzTvJnaqg7uAz8XzyW7WLXZgWyQnS2fCYJLagTYfg1yqfTpH5RNyz8oNddaRX3aKK1LDKjxzgTJ7aRp",
  "key8": "2DvercMh6pXvUAq3LVudcxTUe1QiSnDuxMsspQVagknPHKW8TCFSPRegkgLLTnVrvRjFSqAB7tK4WSScUEQiAvbL",
  "key9": "PPSoxS2u1QSLsie8KR2qyY5FqLsAV8zgii3TYy3Seoz776LBR9v86ydegPBT9qMVfv4vjabrRFRehbjrVoPEZmc",
  "key10": "22pvLHP34NnDtuZo2BgY1mpUYaneC13h69J2hbfh9iT6Numrs2tuMkdwCF26yWZVcBkdQYcTgpNd1buhbBKjuDMz",
  "key11": "2FujHDyqBtxrF1QaAj2bmA6vbNTbhPJmAPV4y6fK6vqb5VrPDcBMw9SDWUsJnaeZELd7KkJDZ9nJ5LzbRBBg5KYW",
  "key12": "38X8oUkgc83J1KeU3EzbwTJehD8GvtSBuUHniGbShn8tSqaDPBRZyHW29UAVHfofxmZgvNgnZUtxUY61CGBw3EhN",
  "key13": "b31cjo7Au1BmobJoGGmTLPRC1dY4tMoA34ndfDZdT4Ebh4Jm64G6tWyxcVjEZADnFstQjg1VxkLByVhn1LPytzR",
  "key14": "n4F654J6NjnZ6CbUwaGM7PEzS1epCsSuiHjPaNHgTCXC1ykouZmNy92xkF71RES7uTNYEtJpP9WY6Fpa4KhM5Te",
  "key15": "2fBUKZBnVAgYU6hzY37HsFJr8rX9qgYqGQkJ7kiayznz6UkYBUNXh5PBzVxxbqXPhnPZHPTnVFNaKDyTHPHDT72W",
  "key16": "5rQcXJjgzwrsud3D8Qqnw4E4xQDZssoMbhwHgKLyqKUAhwBqttFDzyiqABCxLzTPKbrh9GWWtGw58ebH5JSo6pre",
  "key17": "4ejDmuhZfdo5KT8pfzTmRFocqP2PzwYBmYXXDk952xHg2tA85q5VQrL1Q1fiK6wrfUorS6tSRisKWfc41JDEj8KH",
  "key18": "4scGUQe9Hr12ZPe2avWeniReE92iwbuy2pGhotZoJTsrEUap6mNZE9b6oexpkrKm2cJ5rFbRdUMQoTXMyrHjegYK",
  "key19": "4JMAjcgwxnqx2WcEABpLiL6WDo6bYukrmNSAQ37HiXp96Fvx32PYafTw2BU8Jp2JeRcgedf5KUTLXrtdZ5at8LEp",
  "key20": "3D8Z2sm7kqqP646GBszyYPH7mXgGp5kVQpiwBP8iwkMz3hhGPr8MD8zrL6Vw9wQJFFUDhTsWmmtCJXrr5qj1P5mD",
  "key21": "3orvMFsMd3WdZHMNDJjZY99TYx5A2TriKe1yCnvvSEpKyRyRCV9KEJncow2WqcwZ5KwaFQdLgB4zF35Wnw5eCyKi",
  "key22": "2j8rQx98JE7mDePVvJ6rUW74cbVoaBW7wpwhky34p4aStpqPtBrXxLJMFD4Tez5FYw9ALn1Ffz9HSiapGtusvKcd",
  "key23": "3d5gSHP8je3seEfVSR3szPkrVELakSg7kYHM9nwGNbAJReAAPXoaZg6VyGnk1mgJrf6WYz1T2VtJkZ7rsYRfemiE",
  "key24": "a5oxZpZaepcZ7vgdy6sQp5feksYPR4yoFpB7JgdqR4JbKqcDgVcQyxW5Kovxi8pKizJB8NEHjFa4CnLyVVJJnwJ",
  "key25": "2RXS2p7r25ZZZHEppa5gf2pbfxxp948HZBKANzA2dEnTL54bFbPGBmj9hXq4jcaRnLNbt9HKA7eLLxtDBgxBoAkP",
  "key26": "3eeCeTZDJPGZg83LR8ArSq2D6g1LR3nCxvYutqdrUpUbAHDHRKbUst8WXKP41wkhLVxidnjvyJBpdjCceh78GYz8",
  "key27": "5CVd3gHSr18PjTiyKuidWzt68VftPhw1rXN8Tcxwdbiqr4WiBZH2Nq9Es96B3WQaZ5VXhdPny5XyTJGskqAnJV7Z",
  "key28": "5AsZJxXtVgZy9mPWqtFuJhHPCWVruoNAY6URB7nNVKxmDfcA8QBbynfT51QD447MDYwXCKyMFic9Za3S8PZFNeUw",
  "key29": "5PWT5xoHbnL5rwQZZ9CkoE1T7sZmwfAFrzkuF2pVHBthbYwfZvwKV3k6K9ev2sCVktPg2qydYptE6AhcSyRdjfoU",
  "key30": "GUDHapFQm2eYokwb7qS4EVLi2JemCn9Pa6CW2CGsomWSY1LReeuvuSff1L3eZ8HGjzgiwEhgTiJpimNAsGaue9L",
  "key31": "28dSAdkpYmVmrp9WorzCarPECTtcjtVuBqgNsnGM79sKGjCfu4vgnhD8YxCnUs6fb1spaA6TDUv2UDhSQ6uwiaoi",
  "key32": "4vhdqq37HavVj5xMzD1CeK3zBWpsisQ7JBAwa9zEmHASZrEcfFR1nZtGumWUkKCE74Hyz38aGsLRXNYXjdwzEu1H",
  "key33": "11Bjxm8ddkrPSXxwfqfyKPcCABHQ9frA3uNuggZynFB7i9CswznxuQjBuVSmuThc567YWNZ6HctkquK9DAW5V4e",
  "key34": "2xrN9VvLifAgiwr3NNJ3gCg45dmdzdHg7dvbukcNb8uQbj3B8M9j92qcCJwft3K6r1knQTS2EeN4YGvuPcKdHhXi",
  "key35": "2bRh87X9Khp6fU3vgpS6ECdfH99cQKjDJGQC82DG5REndGSKqeGyjJYhgQSGZjgPEUxx9fCcYX1SHUhSke2KEpd3",
  "key36": "D8uTkmdExf1QgzBPoCQy4aYqCtcFBNoWZu4gy7SyUZkVmm6tydmSPrwEV3WUBSb8iKkwoDKp5nXBoAL7xe5mKN8",
  "key37": "5QuwkTAZXxnFjaQzAVrbqkiQADZCTjCVYicD2chLq3zai3ypk7wjyp1ND4qiAHBXwie5qJp4PPSRHHCcufvYEjgt",
  "key38": "3SgJQk8A8tYsoWnuueZWHh3wFs6FE3gaZruzvLt3oUGjPz8uhtHqvoH4MyRAiBzT4gp42L6iqHYooK2LPfig9vvb",
  "key39": "4DcddeeKvAuxJiJhsHFBMFfVQwYNgzK8RLVdwzWCPBV41ms7XnHbC2NbH3rK4bBp9domaaCJhSAbDhFW31FgT2fZ",
  "key40": "5h5AFKUd8YPHJo3CKvUS1z9qX2y1mjks466if6y2aZnh4njUVCaGSbCJFt68uAT9jzuGZ92qKHJro6PNQeYon4g3",
  "key41": "4mCHSosmG8GEGnRctoMwadwisgCje7XB3jEF2Te52YKCpCCdQ2P5BGgZjr8FA9MEih3k6AN7zV5xubny6CaHfGFY",
  "key42": "3H1NVCsRnG4oUT1FJneN3KnVdbYyNVBsNkb1PX75ZQXZaXpyW8JdcHXfGQ5GeSpAxfg3AeZ7yh5qUSF3Bk1kdMYo",
  "key43": "31weh3WFHVr1KpZVrMoz6LtpRFGazonrJYbGQuHmxJ3wXVi4knZujpkEvAyVKnMQziEkUE3kGWe55nGUcSKUZNf",
  "key44": "8kUzR36GMHvmZBkMi4YhmiBUtXzFXkXWLnmtiFc8PHNtbVvRzMhiUTsqpHd3JTGGkDoD8Qk42XvACQtfKka7Mbn",
  "key45": "31x6Wy53T1ckLe7fsQ44A2kv56JuqDw8inJngsVSVsqrREi8bGrxCcACKWY47Vu7F2nNpQuw6bKBGV7cwq4VJTBY",
  "key46": "2u7xewhB8U7jN3bZCcUK1jumVdWT15Ghqm6si2oRWr9CacfYfwtzvT5uiYDVnTtUmq7X9xcLzUEWcwJMiUkMQ3sn"
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

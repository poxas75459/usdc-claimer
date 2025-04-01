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
    "34JCNMWKhiFAxCvTVzvweEos8iKJk5dH9SFim5bqY3jZPTAq4peNQ4AMW3JQrh8VGJkeVt4kBu5b7cBWfcgHtsEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31TQ6QQa3xewkdcmKHyqTPVaehLHppdUDtMpMZJJzAJeD75c2MVQZnGN4ZBGpqskwyucfeGMQqu49eCY8aa3y7bW",
  "key1": "84fJ7Nwdseb1qaNCdT7HkKvjV7pbqsbV2LqXGVU2kV8Cp6cC1nRaYLstY7XZKobRHJ2r7yBGXzrHgZ9Ndii7nCT",
  "key2": "t2ptEEMHZhoN6Ww2u7Q44PytW4Z7TehminwoasaPmKDttAMgUb4Xq62QdmR7LuHs8oduH7F5XYWQm6TsrQCMJjU",
  "key3": "2HMuBioMBsqgT86wHfyPVxQxMJvE33drQxLS1QfKsS7Gzy6SaoaPRRSnedhDUrjHTJMcG4FKPiC7SMc8oyjLdMab",
  "key4": "4G5kuyf4PKvjTvC4nySUKFwqM5SYhCRpMkQY4bqVH73zLWrE7UfWWfntj37taug7B6474A87JYErZ4GLMrVgdQ4A",
  "key5": "3d2bFgUCrwyJFUPtidw3j7PHdQkyhmHhcnjr6CwxzfhKJSA6RcpyPhw4f8TfVTV8QeA4jTTPGCjpugvGP9ZDuSU2",
  "key6": "2Bu5vK5uxJGgXQPf4KFBEjTgQ6VtRa2CcaTg4t1y1sJPzAdKmvFzBBHxPBshiC9WwUnbmd1DRLsoEzqaXM4gjKMj",
  "key7": "4wBbFxNHQcS8fsTy4UwjGJsiPRnckq3ttiNHTi8VgEUJRYQBFrant6bAFo5uDce1ehRkor6Cd8zeG9nVdBR4CChn",
  "key8": "5QyfvJHf9PVDVnGuvHTV9TbRxDpUTRHT3JSkQZtwXt7jwYkX2Vi7o8LdMLJhMjd9ZFsikBd3ww9brmrVL5Lr28aH",
  "key9": "3bTy3i1PppFDu8Eznqx8HNXCUec5shUDFbhpUKHNh842WDzEQnF4hZjMVqSBeVJwpUDE8hHhazQVxFzyMQXTyjp",
  "key10": "q3rvQxQYt7KRppbHWB25aDpX9K26Xr5gKCJhTiztbQg1AaySfqTHfCoWwYzRvKAGs59F2rhA4mCN1pdZTAd4uuc",
  "key11": "kkX3GqPYDw9PW3hFFu1WH7ahgndYrPEsDPXVNdkTeHsKhs2rE46AcSduHuQJopRc9RBKfGQMs1BYsGyw7mwGH12",
  "key12": "3rVMPiEe4xm5qKnvMFaoJL2DoVEtBHMVfE96RHY2rXwYjTTNkQKyoqGDdKT2bFWpejZGrdeubWdK8tfxbo9f7BBB",
  "key13": "YA98qEt49JHgTQ5onctCVuvCRsVcCFunDUGfVstMmJb3RLenfADbPgfMZ97GtMZDXpdSktt4rvGPZPKXLxXUKeY",
  "key14": "4xbViqAeY47FeMNtZtzyDktPesvSDDwYfgvkhTUKMnmKZPxpf7owjLxdmNSP3rDP1mowqXknoktJp3j1mb7bUask",
  "key15": "5YEDZvyerA36g86RTzEDYN8REW6cRJNbgZU6VCoPEpmWTYQzSoosjM9qv8FZyMHxGc2SbMCYxfEoe82CGNfypDuD",
  "key16": "5HR3mcVnU2ynvJgpj4pY8Ugg6zGbvRvPVZ1A5KjPuwuYMrKgGgvYTDfX4RtkQJ5g3HBydoWqeWL7DAmepnNVBQG5",
  "key17": "3fPCnSAp6VcS8xiAPRe7biSMU2d6412hzFCfZ8mLvzhyR5MoEC7EEgzSB4etRpZGmAWieUNkm9mGXQYvaqwrHhzK",
  "key18": "2ubJ9iDeVmc6tPHuJGjG6s46AMCX7HHc6uPm6tJgpz2X4wMyX2rDr2uSyc8RT5EVHJ849HWdC3TZnxqauzFgMHcd",
  "key19": "5mTEurxFkzoZDbwm87LHBGbs1fyimNNHqfLgrQ8s1WPsp4R6HGwFctS3djQoWVJQAjAqoPS3G1LzgPi56RNjXw2s",
  "key20": "nEqTaH6PRX9iE6V1FWwHgtraZ1bnF4t3BtcaJXiyrNYMpoPScLKH8Em6ucP4rsd3auJPb6ueTdvUGeEMc1Nzu1d",
  "key21": "5DDazJLV6CKu42ZiHcbCsK1dWyhysSbzYmeUrEw5nayxaBwPdiHS8W73HrxsCwXKBtxKu22fDgH3wRQv7L6zDPfz",
  "key22": "4kpibYJV8s1Fo9CeWs6dZJuUTPgs8qYixXcxKKsbrx2fUgTiBXoHtNKNJ8Rr1KJGyA6VgZucxWJwfXZK6HJnKwE6",
  "key23": "2bAYfcg43aE1MQUSjFWCXpmsEkPiDj6pivUQKXBzZTUwk2hJEXTFjcwtck4JaN2VUFugvRovsuBUYKM9aAqnvv8",
  "key24": "DYbkU4MZQUYPhq9gDgkNXNQUUitjwj6JXr7WxQK1CyzVEW8QFTCZpZJdfcsL3xXAQj9piETUHSs7MVfiWns7sLr",
  "key25": "2DEvegFusuFDufNbioFMNeSAxYDuSAEoEdj2HyJAXrUmadK9p5AJoRzC9AUG7CkYU1UtBPUX556TtusSUz8ktftq",
  "key26": "3XN6STAbbsuc7jAReHUc2FGY6SJZN1wERFUKFS2ZEzdud3gH6DVX6M2BGpD1BTRBhQ3zuW3URMi2JhKA3ZV8paZy",
  "key27": "F8MnBxBP5JB1stwD1tawE1C5VqptWeu4ugYu6zLx7w9hjm2hDNkF9EcNxQWABCxyzUKEE9vCCdv8hPdTQnsdbpc",
  "key28": "2Hyf5qoSs4NYGxjvc69t7WQM2s3NXtpLGTRA5sKoLK19PwMXFXkjmxvwdviP9V9tcYZp1i5zBrxaQ7WwmacHLp8A",
  "key29": "3bsfVCebMJFgaCGv38iY4r5ACJUvqT7gkhd4LmJUL9GSLmuxJXAACnWm7TRxcb5tg1adGZKEiJM83tgvFCuqKUDb",
  "key30": "2DLstKaaA1ii6iHa4AgLa16eYrT24RMXVFwuMsLQh9qEXSUPeMVW1kZ2jhbi6VAbTSiH2xCxKkW5Tn5qHdGT4Eno",
  "key31": "4ZG8yCv92vVqDwvboioY5jH9P7g75f247aJcoEHDGdU4AmkcLMvKY8PfEDfE5GFzHppaA8tMAnfDWxYeF5LMsndD",
  "key32": "2xbNVmnsRL62EZKKZSnDrVHbpGEwBqr9kFuRAUUviEKxU4FVQexXJkCpWunz7xjHNj4TdTQmg6Mnqsm1wmsAcj3n",
  "key33": "4tCuJsq6Ex4zd5wtwFLErz2v6GnemVHJ7VxkRoDU8YERVTiCKsbd9Zwia1YdcKqhjBCrA35hV9Ky361B8JhR6BKc",
  "key34": "4FQBmsUQLGZxAw9SkN2XwfT5RWRTvhFy7PA1nMPobj4yC2fbERNMQY5K8eJofkiNmquwsz3CG5MFXgSgtUhKkWui",
  "key35": "5j5e8794Ez7xFVLtKCrr5z56RbRZTXyy4YXx3GreR8TKozyMsW7HKciidtqpJ5U8kfxyAtU31sxSNAPPNX4ZJPXv",
  "key36": "3MY7H2137WbtsTa4EJF3QJmYsaxwntutonk6WLpJzXpMcDkEHLagoR5H4L9XjjzkuF1DZHqAwY9NbQJp7PU4HMUf",
  "key37": "4CBoU2PAmzWhjxLVa67bbpqrN1E4RkrcuoZXx4KTTSGpc1i8W9gZ1a79YjcnG31Yaqk1ph7RMoCdAVUYZKc1FzRh",
  "key38": "4CpLp2M1zJytaAX9YQ2m8GMqnB3DvZsqvsHFVuc6N6L8xkTokmbmFs7dwoho2HEyFMNA8CfnLNnEoyPxJCZbbad5",
  "key39": "3ZbLZ9EooF4K7CMMDNfeGMntRnrx8UgbCksSxnuyQosbgXu2B31Uc47HFZubDXUAHQ9sbgkPo3rAZMPZsZcuXXsd",
  "key40": "2pmib143YSCdUQbMKsBFwSWCFYJ6NAWvEvc8ZRdZAX75GKd2JFCMucMdPs1z88F9ZN79TzhYcsS6PgEPekwCBKuu",
  "key41": "3RTUiigMu8YA5HdhD5F5XvadxtPcfqisxSvvrsKFTvadJL7cPQC1jJ5ouDCCzii7Zi8TUR7pdR6z4Uu3tZGhC5Rm",
  "key42": "23GeTyFa6Exg2HBBtrwiPfNkC4T5fSssS4GJ7uf9Mu3R1b54onv3ujUt9pJp1Y5NKcRzAQN8ocREGNkxRy6DqwKr",
  "key43": "Dx5GqPhkdCX3FmWXASie4bR7VK1nqeTc8LXG5admcYa1HMBfuHHkG8m8CgRwrkvXxAMdJqaKoi4SDQDtZG91ChM",
  "key44": "2UahCfhPxs11JWcWPye7pLVsCC29xfPMxkdeHLXfG1xQF2BqvgQiAGMp5zhQ5mQYiWbt56BMYmVFakEDwUPPxuP4",
  "key45": "3uYskohmxJ2L6Q7maBsAX5bz19FFaWxCUMaDW3mQUop9D5YxyjkPL7Zg6AsUZWGpvwbziPpyZZvv5ffN1DfV84g",
  "key46": "KMi9ihcLmjvgCHf2xdUpqYCQpW1A3bxJmVPNzjdA4jaci7v5jArJWh3w7J9ijXVurzPiMR9WgzRmYid3m8jmet1",
  "key47": "eEsW9m3eMEku5vzqe2AM9N33q3k5CsidTBtC1kPpA47nzBPPK98g6jHbdXNeHhjqRoiykVE6DmcXtv6p2QXkrzM",
  "key48": "5dPMpGz1FJQyE7qfZFeH3Xvej7cNMtTBMWwVrnQS61iqnjZKfuz6YbUpSq6jt6mgmNX8QYfCQZdUEYF7zgC96e5V"
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

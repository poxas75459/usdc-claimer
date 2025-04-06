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
    "5XTweDYeENgpLg375dLCFZc61zmHGrTgae7dwUSQgzNDYkJ8VR3eFZJoPUQ36ZLPgMTm6TsJj3kLdn7oGG9Qc6m5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ervyxXU1SNui1Wino9vsqDafuXbxrS63GLG6c5V5RDgAGyDkcg7aD1SRFqk8wubqtRSZmWBY12FBTjDipQ5C156",
  "key1": "43UwCkx1mkQqMyPjjNNh5sUtDz8nftrDKgUy7E8ZVk6E5xxEurrLekTpkV9F5J5DwEDTAUB1b3R1MerjnMGiRnXg",
  "key2": "rjKM56MSUQk8N8b7MhMJqNktdecL7ntoMPyQHo6U2QNcsVvQfojTz3ne6L7UE1T89PSd9vYQPhnT5MhSj6TJTzZ",
  "key3": "4B3cMmptbqgn8yMPRZet7rxry8YomhEjxxLdFeTVSAJgAw29hKXyWz4GkWMYCHS3advUEWur6Bey1mk2c1dXNCFM",
  "key4": "L7serGzSK3b6chgJgNDkQXY2nPrr4etKSgYLjiZg8SoDJMwYQ3sGgjDvhQCxH553RQSMrGEpUbvXRrvAFuNjYRM",
  "key5": "55s33vEqrJvrnoPzChyT3XfvfoxsHse6qYDz44YkZ9a7XfUw2QF9dmEoHK3Zod8m5C6RSTe3WHgJyeUSZy1Kt2Mu",
  "key6": "2ybu2HbU4RyjsMT93anR2nmfYZNbLzq5tYJVfwpPqr3Erdjwi8shZ2YRt5KbFyirDxgW1411WYHx2Z6ksPz5EURA",
  "key7": "5vzg345omPQ7PmDPaVVh5ks5UFndfr54SyqCyxBad1FgCA3dno3CXvRAq2ypxTcAMuRfsDoCzo2ThvuGxUjEE17n",
  "key8": "5ZCkG48vEyGoTVVRd32g7mwh7xeLmFekwyxXVVJDJZXREs8E5UxSooThfxFGJuqcXDX1AWnoq9AmXhokXH6Q88QT",
  "key9": "5uun5RGQ1ztjjVhKfmaNGiYezwpZeBChkFBjFqxowndtxfmoKNbLvtuA44jSdEFXji3tvhij98FaCFQiizcbMJ3v",
  "key10": "5k8HVtNXaXtriiQhjCdqj1JqLY1f83i44LtkR5jYo5EjhBc1nocwsrSRxx8TCWMqqbZwtqJVuFLLE5UyjPcjk9aN",
  "key11": "3TPcq36o37awYnvZggv7CjshPPrFm8mMsAYR7BWjpaWpUZ6aDWPStf8ccDiDNQHyo1asTUEdo8n2NfAnjpWhfwqk",
  "key12": "2X1hu96rFJ1Go5yJCZSQV4aADGEAr9DgUSePugwPvdDVrZi2HYuPCLxoMioJnbMapK6CH89x584fYccVbveL8nf5",
  "key13": "27b6Vv6yknrgtZUufWHz8RSYwWW7qdku1RnhCCKpP9YfW84d2nWh93QcitGrtiSzWms13Ju2NaqhTQ8AsiMjW6oZ",
  "key14": "jTgUPDPPToKiuRUFHU5LsxPPTLC7FgxkNQjY4gxeKAnftxBoQfzMHTxyJNBJTDQUzMe9nAXAzsD4nQ53Av9ppdp",
  "key15": "D1q5wHQLLH2wuYcuRSYX8eZi8hN6Lz1aie1srJyke8BVFH5MBaHPcgvov59UsBZzZtsRhmQnMQiEff1q5N3GFtw",
  "key16": "2huWL15TwCeLBuo3VwdUHDghS6Tn5qfDa3qFcQ8xtL3zg96XXmKqtPCNgqrWRGgCKRnhv1AbLTBPUWoUPthF9uUc",
  "key17": "n3YfSaVjgbVNUrtfS7Gh1JvKLWqM5CUDZagwLifoB3oEshtEE6QLnYN6rxeogwdggPFnJ1ekaTUXhhh5Xewa6Ch",
  "key18": "3ARX2nPdLJtSNQrSAtpw4ZbNVMtLF4Pt6DaAB8VkG4ie5yrBcKkWGqUcikwoSaWY8Qzzyxj6eFoTm8YeVshadcqs",
  "key19": "5YWq3oGibxhu5RV6deMWBfDTYn2QyjQGA2by6R87H2uS3oeSXJ1JJx2hSuwYXMkPktMZLvdnRQbnBzxg92NmZxWo",
  "key20": "5vDpQQNCDysGf4v7xxXuPwQEw6vCDCnGUWzppDJUGxk4m1KxY6kkT9PBwbGQP3in3oD3fWHLBY2xkKn88jNBZLbD",
  "key21": "39RDQkJ1isNXhtveZiWyCv1vNSStYsjZusBtnXMKtdHp8rDvKu7uUdFC1naLXM79wRq2LJ7MKbDKP4Z9CYCCEXx5",
  "key22": "V8Ur8vc6bMse2fCdgx42CeTPdojB3S1qeschTPcLoaC4NWzUQoKRcCUG4K4moAK7FXGv6CRxA2VEzDc3xaxoHyE",
  "key23": "5pBLPpNWBGf15SpayBkH4GQNhwKNNkvmcGRAj2S4wf7eL2z5qCZCyXF9hybxKHgjHHRHD6X7y4hUB8JfCKw5UEpm",
  "key24": "3Luwph2ita7VmPB6Yx7nw3iAeSNrMqRvoybEE862mgMV63vM7eRtaC4W3NDAaxnwMLNdmSs3xWtmnRcMBbBjY7Sa",
  "key25": "5C23ZrUhGS1jC9UkQwdQiCcvLiyc5Kc8hsBQFkm1wYtJ3ynKAsFLwUonKGurdidPHmKE9cMZfTfU6azPEawdC13t",
  "key26": "4hDXBrRdLjAibVJPRNQJkuEJgecgMzY4VDRWrT1LA6e5Nma782HaCrawnZRMnRfn8QFk1wX8K612BMQTYMxAaTRE",
  "key27": "5SzC4gf1KRcm2pQSJQ9636gCJFCbgqufbbTYvm2nUEHejTJYJN4GGQzSkJ8YAbUQLaxjqPh8tSxXCJiLucU9bzbF",
  "key28": "3rAHSyF2LJSt3LxgAs4PhELnug4NaRw5Sfkuiy17yvaht7zX8hP4TgSegv9vs7GLXmik2kUZSsXycZ8cFjvPWBef",
  "key29": "25ThurAS8tskFi8pazHpdxGG9rxmJRXixthmPPf3m2hrggNLd4h1817PPdbRwRX7yaoRStQGg4CMzthHC8nUH3tD",
  "key30": "22Zk2QoHXjhzC2YVuQMUt7GqaAcGKBQcptGVdSWg2g4wHxwFRb3gHyquRtfY4bMAorNKcw3zpf29ax9EdjCevHvC",
  "key31": "31hsgy2q4LEDnfnX75N3a39PtkKVLPt5uizDtgMPzNTt7BxWHkVhThrFyB555eJvxeY4b7kPSzXSajNpjJArdCqe",
  "key32": "bqD4eVVsvqFu4AnUiV8LSKsTMq5eyHnL26AFV7ivVpinWX6fYsyTgu5yrXQ6jFZNwAsUeDqbsmMFFHcx8w5aJSt",
  "key33": "5VjMJTXgifvtg8VgT1J4ARrrmuvRNqxGttwPC5XY9zPHpHUDShGxpYtr3Jhscpaq3mjMQ9AGfrKXKCehvHW5GQMz",
  "key34": "5rSna5hfhVSmU7vi2hXkBRyBArcCuihLUP57XLzva9SStQ7h8b5Ch1e7owfsp6jvs8nZUobCQi4h71QLeXY8QBMS",
  "key35": "44yAesspdK4VziixDd2TzVmMCjBU4PER5aVzm6YDMaBmb2RXwbMALTxtjvST3r3U3ymmEC8hGzy448z6HzhA68k2",
  "key36": "31rU4oghbg8ZKfP8eh2WsuKwedzjCpGeKpja8ruW7mx2Yykw5WAx7peTFodLVR17pLFuKVsFr9timRApJvxaCT4N",
  "key37": "31BwTeQDDcRR3kc44A3YbQ4Gx9d6CHjWKHiUY5SkptnkXNF1FfwcyJcgc6f89wdnAZdzRJJMV3FDw9oWxQfwNwzD",
  "key38": "2xfacLGGGhTr5SrGLmMRdnzb5ZvcL23WysFzJyGmAPspdjzyUHmwYbC44FRnmLq8UEgoEpHKUxKvv4MSwVWBgCU6",
  "key39": "5zf9VVk51jRaZ8RkUsyR5JtZbT1oPpZmbZM6Tw5jLsaSKPJR1ZZi2zf4V2oFrT5gY9N3MsZmKUU6PWd4aZiMrrNU",
  "key40": "3ezdsoP128Sj27x4QjABGmHBzMCGGyAcKndandvpWdm2vHjZm9PxnfQ3FwSHaoZwwqxRsi62zCS4uQTqu7C7QWa6",
  "key41": "qboREwXdYJeqLgK33ALuiXyXDo4usreY7qtX1PTngBSCRF2C93g7LkAZ9mC9U6aVnqhxDDjkPhcAEe8LtQTCsXh"
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

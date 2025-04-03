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
    "5tFfCspmYSADmFAfKxnHi2SqoPdHPzmpyqbEC3YTPjr3W6o4AMsDxEM4rp3e4XmHnkH6GWNGMWzGLiubTif7QuVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b5jbhtWMWZpu51So9BfBkVrR8yk5EZC5f6eVPUiaPmjAGYmqjTraduYkELrv2jtRQTaN36Goipues2zKhWFR93Y",
  "key1": "puPKBvbiZVKeHJ8BcEZYUEYiiwu52kvaW6zf2sf5CkhE5Tdqa9QaHpvkJsBtpFqzNHoT3yA34zBS95xN3z2CcyA",
  "key2": "Mwhm2ose4Q7zixHmYM45oLJ8hZfCL1DHv5SiE9Vv9TribtsyLjhMN3a9eTJwN49JZJsj3PAX1DEKKmZNGah4hq2",
  "key3": "3M8vGGemR7emt5ssfb2re7Hhvc5U1Ne8bA1eEV9YaC7H4Xhd2sqbhUfP5EaEiMS4Dazkt9fJWFm7cbtHUKykrBCy",
  "key4": "3SBatVZBTeqadcziGZU1oTh8FePMFwAhbWwuHmoDSrs2wFAdAruzcULfrDR19axakkEMze8J5zWoKuzJduxqpmoM",
  "key5": "3uwt4E6LrUn7iULeCAJ4dU3XZEhKT1pgYKJLvqSTgyAoo8zNMNaVBTSpaSBxrsaBHHt84Koc4fUncB7iepBXF8oG",
  "key6": "3dekb5VZSGFgRvrKxBBzo6KdLDj6BRMmuawcrDyKKia6MbguDxSMUBwqpfpnHyuArXwoUTGL4R2vehqnNPmi6nJ1",
  "key7": "5g7fC5i4vZFgiEd9sjxYPoThoQymrQZGjRoXcEubD99p1huq4kf2dBRk7WjurEMYz2qCrPuUPRXi8gVj2PkGyWiF",
  "key8": "5Mgrhq3yYWgte9RFj1AbMqgdbcM7gPtrmnzHE31yjGLT9yY8G8nMRAm8Q64UPY5tKmxqL4a499TJd7PKABLqcSiJ",
  "key9": "64GcSsEMimbhWwCo9CnZz49wEnNCVd5VuZxmeLuDfBPUXie5cMtSWFdtYdv8ipLWMqGmyP8wNA8q7P2TjNsG6ybf",
  "key10": "nJSMmFpXj35NtwfCxrsNP446peuowwhfDoXAk2z564yvQidKk244oUG4ZcD3w9AsNDmDoiDN97qn4LGTLVLtPpL",
  "key11": "4zSvSw19mayNWavzWpQ3MqJi54YJV5XaZxyrL5z65teXuarkoECpFZ1WBXP9VxJeqeeVmYoN1mKYWPg9QmgarAfk",
  "key12": "4RzTBjAxML5au26tqUJzuyiEEDDkno3iU1PothHcnsExcHB86WjTZs3ERAKgpMzMKXaQMAH36cXr5kupfKV1ZcXT",
  "key13": "4AgPWmMrRrrWPZAGWqLBvrKPs9q4p6nAqmP4km2TkSf4m7qtEdQzgGDcn1DoRAAc5Pc91tBy3W4tqoXn8Pnrxz4p",
  "key14": "668pbgLow6E546JT1AAByBYTW46rLDjpckzCKwCihpUft8YRt2sntDjxcvHzFvBXTXR8XU4xHah4NcwgqcA6Pe1L",
  "key15": "WMCYSQaA2ps3NcCWpk17bY1r6zaEPCEMLr3EkiBaTc8rLB1AcWWkPwW8bPEYuo4PUCpYyEUzNF9D1qPn2ksHpNc",
  "key16": "4j8uYsQcXqe8195Aj3BpusDvjiScdNURWEMz7Z81zBiMBNjJKCNahD3F2HcBvTUK1xXdBNeGvXs34s6WNrXayhPk",
  "key17": "67T3azpk4cwtdznwiddb1mFHdVtXFG4EPNxnX2Va3HB1MMWq4UJQHRW978zFie95NQTXdtEEoJNENqUMXHjrxvFA",
  "key18": "5XtPWuKiV2JRGccgPo2Att6otSbfmsaCdbQk5Gyv1ewKbRsRphCHxCU7XoQKfheKE6PWAVJsu7qjrnz2dRi15Dwv",
  "key19": "17t7M8xVybciQ51nwSEvjgYhjd22i3mnbNzoKYZqcjF1moqr9h4czFtuVZaeweBREu3bjVRnH8LigfyMEX6Txnj",
  "key20": "38cJb5HycZTSnzM85UPp5HswEAzQvZXDGrkWRmQDHwWpU7U66aHFynhMKmBZZE3E6BQQu6GeCWvhKCdJEJwJB7zr",
  "key21": "5Jib7D9z1HhmZkf73x8ecKqWdqbpFA8xwrrfD9At2rSgxnvhvSC2AShWMTL7rdD3sxCN3ZCVnhc2bXs9s2UaQSkJ",
  "key22": "4wMkS5W9ag81QQgqyxjHRx7qAP2tdc4j2Kpj8g9dkC1Xnxk7TCq5jdxrQB2wXAHq2SnyVFxjikgryJBkqwosgA1W",
  "key23": "4nNjPvkUEu2bGZNniee896VoppRYKZ13BpATvsa32nSp7627BZQfjnUttAiJ1f48KVHZ9v6KPkKf2yhwimBALpSL",
  "key24": "k3jxBZrEUXkQyJb3wuMQ7uwCDQAYEuHwJG1KhcLKkNJ7rxCj5pFKqLv69mwu9TJud1bvGmmepEwxUC9mhRKu6m5",
  "key25": "3L3ZvsqKPZ2LwEtmqkozcGZiyMsRh6noQt4pyAQeKhsTDneKENV4RDncZHv2KaCZwLxc69H9yH8MMZptwCBKEgeQ",
  "key26": "H3M11UANcNJDYyy3ewx4TPx19gpUAgT6izLmQncyrBv9pkE2cjxm6JYK31otf5Ayth49eQsofPFHqyYiyYpHuTX",
  "key27": "ms9rBswwg4RkyxWDmhxMoYyxWX4Xhatsimihj7XPDRv915m5LDcHfHANHj38qTzNTRCUUkDpDuCtvMXLzwGkYaY",
  "key28": "4cs11Weg5wpHESZqjCuqQ3mN7soCzSwjfojhLfx9Wcg4LPjX6WzN6G5Z8RMrpdSbDBntXmj38L7DnkoYmsGxK3fb",
  "key29": "2U2xoSnonRf8hpaaQCB7buKREBHJhRmhJEgwQSpH9BTazMoJd1JN82TGiU7uf89GovBSvy3uNNWFTFCS6nxjpFx1",
  "key30": "3s5XtHUrMYsmsVdV62XFRmm9BRwcmmvxWcN6zVt78LNRvQv5qeiPPRWkqch5CLYoAPkKaKJWg2QCcC3vjLLNDjfV",
  "key31": "4wNq8uYCdwo4Sw4mEAVe14PN3T3qxb9BXLtgz396Z5uGiFaSeS2ZeQF5sx6aGjwcc3UHbMzp3BohDuTMZirjymQf",
  "key32": "5dqn47UWgssPRKbByZojaud4szSk77sC1p3HGSzYT82k4rpbqDrhSisK7vPdWTthmCjGoT3ds1BG8McD2KpZnbHW",
  "key33": "3wtqN7dBBe4eADeegP1HYs6PSZSxWTHQ7Qq1idHkLmXo7RqGmVfMqGMfBAXR7oGWSEAwzVaevVCZxGnUeNsbUvhB",
  "key34": "4WJGin2x5LKmDdEfgxdtN5JQ6pgT7a39VR6q8iBiUHkxdEc3QFBWk7nd5W1R8oUg5x91MBjC92htj2Vb3hDkYqjJ",
  "key35": "2CMfLiyoJfRnXyd2hfvrc1aWt9QUM6uteYxmsB33T6yjFqsQwRJzZ7z7So5iaoRxx4mwzYTa2mALCJGDa7TknVxs",
  "key36": "3XzUHAN32uLYAsD5viLH2AJpq958WXcPGNqdgM9dzCDDTLmSj3XFScrYaT5uQAffSrNe7N9sg6dm65avwHQzg9WX",
  "key37": "2Q8hiTz2QWcsZuqu6KEZRzPrRgMvKybpT9yy3qQzdPc6YQ3VP5zihgRa6BjQQ8aTm7DDdEKQ6CULnmAjBQLoXLt3",
  "key38": "4XUJGcFas1QnqyYgBG7kGXmDjQdXauvmnTtnacU9v7UHmW27rt8kUnf2t2B6wSRiXUV7f8YghHt1k6CZ42vikqYp",
  "key39": "s8t5vC3juUKAsocTgCTMrepFyzoCNxFoUR5zJqRfZoEEQtmXejD4TiCcjCedq9cSW2aWwjBiomyK3Sz1ZGxXgdz",
  "key40": "564dK87iXzFAMgjjJJaGH1kyfGA2sVAyZMZb7A5yupZ7igNdsHRugPYBTaF1sEzbvku24emT6xP6tB4Ycx2YzU1x",
  "key41": "4u4spPtZTMQRFDYknJjLXGM2zXFrug5mE2RzDmwPQLGWxyWk9ibxuPVsMRZbxp7HsqM2Z16dVtTfdSKBqm1ntVtm",
  "key42": "4kjpPrtNMcZyNpvqwg96aBu5fdqJnPwgYVREMTeWNpfhYiVY7tEyLHuoi9R8cWwYGY7Wn6vYvpWUFETDfAwozHTh",
  "key43": "58Mha2mrkVHgyij4zJ9Ky4cy7nM4ve2PGf9tSGQKS6oCm9gPQMRERX6ve7tLD8HZyt1rgobvJ7SZZ2kSKBoBPWvX",
  "key44": "UdKceqCwKhYXhmdJHJQkHxaNZ2oqg6Fm4RqarVtWEAGbeHehmu5NAJCmEJbrUwik8hQ8Di9Vq3jtGgMUVeHCCtm",
  "key45": "2Zobo27r8iRFYCD8KdMnamzDtHzVagkTGsjZsa31N6dXomsyNj1uxbqz2sUyyGtiJeqSCr5FbhGaRvUGJSbTTQre"
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

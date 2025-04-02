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
    "2HvYCnJC7zrxXXnES6PqcY5LusXYY9ibKbeRswwi7vu3dVfVrhLFGv41ct6cQ9NRva91NC9gTdkXvFhR3xGb82hs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqyfcFCpQqpxbyTgKbW3PyxWhw48R62UWwXzrdPh98vawazhU37eYjqphZaQTLnW3412kUj4R7aU94ur4bfQABy",
  "key1": "2GjqHxLHJ9poqnrobfLfZawSUTCrCv37CjkKG2pb9qsnKosfENZ1WCJjFTpa9Qf2jTy4fCN3oDJtWtNJfgBksLkN",
  "key2": "5b9oXTd2QZrfohv4CFVWrstV4QswN6CN6JeVTpr8QzwwJrwooCvoF9xMkjxz6pp4PRhvYyKZXxKEcqQm91nGPk39",
  "key3": "3Bs459NKvaNnrsv51esrrsupaV4Xd6xnh4VFsNu79iTjwm6v5A3KkTidJ6kXzwbQN1mqiraLggaxTsLdEvXypqKw",
  "key4": "5refy1D8MQxFt7jo81esWxTD8iXZqhZzAYeaqsvMfTQD3upTksXAYLPtCYrQ4q8wFJPuTh1fYvJ3DwjNSJvvP5C",
  "key5": "3uCXqoKrPfbWjjot2GvckEM5zPyNdUUH7xcXxv9Kn4AhMhvT38WZ471QyZTcNF3hrSuFjmuWCiWQNepBgcYt8Bap",
  "key6": "njWV25RHdbKDUmD8kGDU4iyG44JGkojdzWUSb9YaAwAPKvstkR7F6BMyMbRQ2xrRSWr6r7ac7qfCrQVcaMD9Xbu",
  "key7": "umf7Kw1ak6ZKF4kqFAkL13iBZRKmgc26p6YsB6aoWpESrKcvyE5JbkY5RVvCgMGZ3mHcTANmVpXevmmfU83iitn",
  "key8": "2DuzeR4sm32dDxGdhFD8CmJgAagBGnSkoNjmbwPwhcuXtUXzJCQ6WwRvrBDcLp3xxQsPvZo4EXn8kzzS4UL8DaFK",
  "key9": "3whWGJM2RkSdASoLoHoGmosFurhRLY2KLYMMCNCUL7Coaq7JodBQFaxs9tXxckvwQdzuRP5vyyXDoLf6GrFvbARf",
  "key10": "5kd3UwXhTgKPKo4H5LM8C581aTo7Es9FtKB5uDDvwi9fkiLC1s4TxpbrMbVabNswnvuVmyM6nYgu9Tqn6Ja4EWV9",
  "key11": "3pF7rY4tTgyopXcZ8q93kcLTcGCeknAZhd5PLej6p4vDyNe97uhUkiT9WFYwRFW8e3ygLFkVVDzjTraR9Ww6YBe7",
  "key12": "4h8H7FZjJRaownXug192eoj96YjVvtaDf6xoWQ65VA1wGR9y12nKLJ5Ko3HpkKHdLYadFxbJf1Pec98z7DHrQbma",
  "key13": "5j33jq3SqsDNMrjNQLXsFD1EK94ggW7BnzP7LXNGXK523rYswetkGGEQynuX5vg9iMdxFgHioWQGoP8462C6Mx8J",
  "key14": "eqmTeqn3tKtP16P8eLRwk8jMn7LWpZJFTuKHQuoEGz8KZSmFR2F4ZNvpi6vBPCgiMcTgDJ7PyLdn9jrshSZXpdd",
  "key15": "2HopuFK3ghwKbX95dp4iYA9h6oUzUyMo6bgTx4wfbFUPifYdV5s3uHT479nbpmYSQDJigUpPiwiPjumb3XVccBH9",
  "key16": "5mLAxTnzGLHFGJpshoifu4Uu3SwiaMRQgDX2oDbMfJQBGKFbZceNba55mH1FkJMxKz19okw8K9kGj2D9V4AifZJP",
  "key17": "uWCtRRwT5QK3R84BcSbdenx3v79sH7XG1heiw53EHdUDLdkCqctD4zcvUBmBZt2RbpymMeALWwr9X722aqHgLvB",
  "key18": "6FNU9CXv83d2KtX8HHFdLoKYVitqjgq5W4RwJZgm2zhdHWECgvvPpbeVHw9N8ULBMTeCqbRa6SURcTZqxxtV3Vv",
  "key19": "5V3iG3WfgK9HJ8EAPadbKdYpv4AZkKRGDWEBmTsxdrDUrPNQheQj3ra36xypEQErm8Uo5CHdn1M5f2q4VD3CK8E4",
  "key20": "ZmhMKwGXswdY2psDPAMkxbMxJT3XgG4bBkZ9jvjyeZQn5egFjPNfk9DDyYk2Ge8axfJYDLKjERWpYkT7T3pT9eo",
  "key21": "3Z5d4vkwNcJWmccQs4nLSmFeAEb2ibdH1nLqSKKrMamrMDbuj223aoVB2QPGnSdmrt9Nnd9TMZurD2iQBYmZFMRF",
  "key22": "BinQmGzD5bsU8yhR73DNanPdm23ibWBto9EnhvTQJzgqttrbuit9yrUg1MM3fwzbDVvxR64jha43Cni9s1JaubS",
  "key23": "4pjmpz8LR28ywemSAuK2LqpnLzfsdVGPPNFqdtYvKEgDGG3cSUsCCbmuwF2naZQgJf7jvygCSiidqPaeQJZnTsmf",
  "key24": "4tc6Y7rybo5E7QK1x5VWq1aZJMFt6jDHmoebTKKx1RB8k18riqp5srK4ip9HXZh8wDkx1hhmo4PWbkZY78JzCK4K",
  "key25": "4EtTsTZhmtBLwyqLxtPVoAksMDfZjzXWFkoTTCsu5FAppLNDSCcmCHG8SBUDFfVmAnVKbiYHBTvmMFQhUtxr13rT",
  "key26": "2EhFjMR2nLMuPUHDG27c92dcDYWwEXocJ7jUkvYm7iJXmUCaXw9HGiFWzmFk6Lbc5dxs433oq1VunVs4MHZigX9a",
  "key27": "2j1RfQ91ke3PgZuvWkZoDicF1v8xxGbr7EDdN889HDevRXz6aXtE61rTZvAxdbyTxnZ99TmfxQZLZTLgSSZuW5FT",
  "key28": "3mQNAYF1Tmm9Gb1S7tNsK25qAzMSbLNXEiZNg3ipY8rn5Loimm65zhms37pqrg21J99EYhzALgvSS1SxycxFDC4p",
  "key29": "7sreyLYomVWxbi7AZwcK2gQfytn19gohrEGKxyDjwQr2VSgj2eYy3iJPYERw6Ddk6cN2SpFRVjAVMn3pJ2BgKLa",
  "key30": "59DCb3wr9z5tJKSqGbARR7BuVEESWAzhwDpUKjM4GrwMXa3sUpATXUA8VfWTszumTCfT6Nhg4Jx3rxb3RygNmEEB",
  "key31": "4wrNuLQSdBwotr7gs1fTwEEifoQ6asXVacyBQcHQdyF6pBP56AeG4ML2i2juSikVAZp5fDxchTjTPqMmgetfKDP",
  "key32": "667PCBXBZZRBJVz3D4JuPc6Pb8NB1iXu9fiBrFn5Nxj3qwquXW1Luq52kYN1yk5RvSaQQH6rekDW1kHSLE4b15x8",
  "key33": "mPEkX5P721nBXgzh26ZKVCYGi9BeVSM2BxAPaceAkDhoT6u8eG8DpE3a4hiKTYrc24Xp3CBEQxEiJg7TwPG5VJz",
  "key34": "2NEwGZvnUXVx8qZrh4mjCPqtf2ra6khvuPyP4pWVwjJChtrmFBguu7q3gnK1uV2JD24jgZcDiiQr89ed1aKiyhr2",
  "key35": "3DuXKTyyViMzFhjXoFPpvRnovpqjLxv1XcxS4ZWWMStAErftQcPX8rZBicw35VoqNFKfjiJmwm5TWhUnEyFEnodT",
  "key36": "2SmXaQGLkCWo6y8CHbGxXFH3RtmNuunrwbcAwWFiX9VThTjbFFP8r1HYey5BNZ9mKR67o988NKW4m4sVwqDJVsQd",
  "key37": "35drBcsvDj9XEBEQ1eibWrt7vk39iJTZftGrTwAjQSGAdQ7fyTtXRoDUXscp7ogq9rBLdUY7hKAJ1x7qZFUGxVXL",
  "key38": "41ZJjDjpNB6EqwHmhi7KTeg6wYob24FkzFtoUdAhYopXvNND7cYC5R2Pwvn7m6auKESzYFQ3iFwYiCcM87V4QPhC",
  "key39": "h3p9HobdSB1iprxBmqEbaLea4qmM1hasEtroe7A68Ck7A6y9vpaMGRNXR4bmkc3hR8DkPhGpZajZ4yhWjNrEwWG",
  "key40": "5Dvvd1zDvWmcvL2GDkrbY8EWLacnijs3SaeN1A4epK1g2wXLVPeS9fL8t5esD1VrbNUcbgzG4p7sCbgnDu7u3Y8v"
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

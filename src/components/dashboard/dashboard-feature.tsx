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
    "7EzfKD94JXNqmxov2XbAQsEjD3avAGUKdPh97K8PpL9ocvJAEqnYBmKvCo42ScTZd9XxNRhkdyo4vSwxPFtrZLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MDqgu8GBVQo3m4wS5F8UkMpaPibW7inpWCxtQu5yTnrpqGMb8dkB2WLJ5e6TCq59qMn3yKURNxK2ocEqCzRMKUt",
  "key1": "39QA3S781jVnT9DfukhurubDzEQQyKpAQudLfrSe6NBTXnHqs63UQx6nLKafJDMDM5Nxjhnh87erE7ar8w2QD2hS",
  "key2": "3iQTVLGtPBtEhJP5Vy2fizo939AP2HThhWqCe3x9EDvWgVXAXgH9dAkCEzxGMCfKi9n4cKK3cF3RSkpgDS1FW1tC",
  "key3": "5PVxXYTAposF2i8wGM4bg92xmiJLKUxGMfcPDh7H7fvrWNdx7m9URoCsgK1JshNFSs9FfXXc2CvNAseUbtmp1dUL",
  "key4": "FjCHcZyfC9PpoYohABgLqcQKvEJJSgDisyJV4u8XAA3W8zzhJLRBGSQzGgYXvBTupvfdZYpm7PofPVJZVguFs2k",
  "key5": "56rDPYy1EgwDVQbLXp1KuH77MU3NCLWaMskzYR4uiHDnESRtJUh7QwzL3RLVo5FuCWFRqWkFE1vPHKoXuvjPoYF8",
  "key6": "3QJ5N8FE4S5MYmgtURB2TzWjYcJTdND2wFxuxAJWCfEZRbNcWpp4uDqDKZvNDf3XbLUKUYSuACDdiwt8aYsCv2Ti",
  "key7": "39rNJBqb7jWFG6ieAS3y79bWY1hQLzTSMugJHHvH62oHEXpQZJC3mNdLwPa9deV46vPE9s96GtYP1G3BND6BNsvT",
  "key8": "3PngeemoyeJhvn7WVWAJVdxD1miVf2LT78ktLhkQwQHTSsS9UQCc8xNgJh9uriJ28j8rQmBjdDHkHTiabzuZV2Lt",
  "key9": "2FsqTxYBZKZVqR8wH8e251hMmijT2YTa34Ueoypa5nb7xmhBvkNYBYiDZPpq9m7hYfv7MMDmQko9twZQUuV5BkqZ",
  "key10": "2NrCQAZQcQZttpmH4NcF7H1ZjEwNbwrDPZXTorhuKqCyazE9963mjir2imXeJqJSTkChU4HBfCrMTMUfmuXud1Cf",
  "key11": "AbcrpoPubfk4hN9g932L3h39rH5oxqnkP92YY4cEJ8KWjSqbDdXxWJYq1w4CMpFxsXR4DFDmBuHhoX1eXDFLy5t",
  "key12": "3vwfHB4JB2wic7UhP6GotkMcav64BodGvRuebP1w4Ce6D9euyMk7z5JLFDtb76VyMTG3tiUbASqKSjA6QNUurhra",
  "key13": "4k1TqG7bjyQi7JwPrZnuEP8WSyFErGRuYD9xjYsZ9pTssowSYczGkGahcFmjXv6Gc3XvowZ1Nx5rLEfJ6yZNBk1e",
  "key14": "p2SGiGFzXtTJeDojYaigTLxnLysY6ueizpPZtTr9LeeTZSxwDBVQeT59zpFvzV13ttiUJUFKLtvE3CFAy64YwwX",
  "key15": "QfcpRWcE2m3WeRWHDaSu5mep9D2u9nLynd55my3odHUEfzG8MnJBiH8kQqSgGQPAZjUQe9zp2cw2rg5V6uRvqeo",
  "key16": "2unZBnq4JZXzbmswmkU1bmATEVGTMEujRXJzLUGefZLd9uAyTaq3P33g8fdb92KUQhnt8VwsCiCYkixbHrMoJUK7",
  "key17": "4gctHAJGHFzq3pwdhyw6yJh2d77C8RdghS68V9ojauJipAeBLbV2jZrxUrXr7ngmwC6VbQB5vEdchmpriSbggnxC",
  "key18": "414He8PbcDCBYXoKR6yBvWmTqqfqhWg5qrFmFmpw98s6EhWdvR9KxrFYQmXR5SjceTkDu1LCngKx7hrMDNYzS3CD",
  "key19": "2F4Z5AMP8iLccBKBpqdHsu9sBDwHd5icjFWvkNxnfJnsnbBMpW6tsibMggkc3UwLFrConHLAJAqD35cq1y8ttnKx",
  "key20": "3UN3NodQWbk2fbjB9K4C7WpLNw1ypHh8zJCaVv5VXBcLzaYhVXTzoLgoHVEdhrq5SRHFLJAFu98MedieThf4G676",
  "key21": "39AT1GecNaQ43WGerij6mPXXoAq8JcH7x8VBoSjJ41wwfnSBgRJRG5tA4rgtu7cAJ5DgDur1UQVfWDbsDtAjTSHq",
  "key22": "2YWWUFx8WPHV3y3258Bng4c7fZVybpkRy4DcEP87N3Kq3baciBZ8ivjRtRU6zKvbmTcTNd7yzZGbSPmxmXmeKUar",
  "key23": "2oWZcFk1wMXtQaqUmWVr4qDZQymHkuDNSZ1drkWGaAntFiyneyLZEr76Pn3AcnDk9mpsYhfs6fVEpe36TA8r5S2d",
  "key24": "5M2wbyfoexi8GE1Jv9KUop1PyQPyb8QBeUp5UZiXHBjzbc8Lhqpm4afQ8y3DiooK18Zyyv9U5qAt4XBrjrwqM8T4",
  "key25": "3Gxw9sBuCFiCvTYZQL17Yz49trZUE7KVcovcmqBA6vpPj2Dhcp1WhrXT1FzcbPka5Pv6Wk1uq6T3aQoWz4mLm6JB",
  "key26": "2VNvDPA35UK3yYPdmffHqK37j998YQyMHyp72yH36ZZoXJXZrDAWftw7sFZ9CQ9aREMFkiER4wpuZo5iUxUAEpJz",
  "key27": "5DVwsSkmTCZypBwxEJE6QtMM9XKbG54WfS3KMmkDZusLHjP1rYEWZgE3eZjnbd8e88fuRp6siH82SYCC2x1rVkn3",
  "key28": "TnrHXHxdaAWja3sCB4EZzA1YoHwAjtHHWn8X4q3uhVZzNk4ThCMyoZL8deVrF4DNfCzs2DEL8XyK7UysAv62aKD",
  "key29": "236EX5YE1AEscngCFQVHQkzHW13P2rZxe7zudq75KBzkHrt9vSBKMU8v7EK6uKsXC2oSQvhNHBeq5reRd2d7f7aw",
  "key30": "2e31D2CCF97iockGbXgPj9xriheJPEjZAwKu6YELf71BrSVHPtqBSouGEpFyxWFxq9LSjzziZpvwagQtQyyqABST",
  "key31": "3jEf9t2MoZU5gVp4w1fVr4L5eMNxc82QNdaQAp3Ud7KPWkqpejNBwFLbWavupNZTWnDB17AFtG4YRRQT1ERkPRk",
  "key32": "4zvoe351hg4A2AdmQfMBWMo3MxXWFHLvCvCnSs2TMZTrgkX2BVXTruCNwTVztM8kdUYz7ZkH9AVJnY7tjdFQymjb",
  "key33": "3xgp1J9sPhW5udHP8sDZfH237KCVZeKVwBV3dkF6d2xTYgWfg7Du3KiGmK7ia4BcfYEpvMuHGUeyTj2hTqDNeTSe",
  "key34": "5Ur4p86QHrV7x1FbSdeY653E9Fr876x2MQzgqt1expDBE76wqbLGCGJ6kn3wHG3zciE5dry2jKnsoY6wSVSbDzg9",
  "key35": "53KY2k48mKwSDfN7o93HccsGSSaznQG7wZCzmkR8JrFZU7qsJKYSKxw1tiT9ekFzfz37eFNrj38EtmqE5bA9DKcb",
  "key36": "3w2EkQH74HGg5XquH336Kz6cjVWMgxUc8sM4dB2XPyhTJ9nXVDx1fhp8B8hQBx6CwgbGZ7vBVDEyUubiyftZ2Ze7",
  "key37": "2H5MvCtMmP9LHkbBQDWW1hjozbs1PY3Jyd94yc9t2wpTnta3uHFqupeGRXW4aUdLBDZnZkQh5hzVK83v4rSojS8R",
  "key38": "EbKWtLnAysuzwbLkxwJL6aSvf6J2B5XpaDbLvNVDEevwDMAUfU659cr7ErXocRVg2cwmZGdKNH6446YRKFkzvF7",
  "key39": "4bvmsoGsyJCBWUeuMjFcLgd9JBPhkE2vCDLmJFC6afbjRRbgN7BaEYPy92oQMtZpwszLdwCsJ4bXetRj4bWnZNnf",
  "key40": "2ZTWn6yw6MicNz2fbRnpHutW46ZUyRhUNj1mqcd9JwJSu5NX8vB1R5yw4EzeV8hcdoFZ6GH9JesZttpaCzPu12BG",
  "key41": "2hvhDHooRBNnaaqExQspCsFQHSEHnZpijwUDpHnPDcVmvNrg8wkqdSt1KSGfgEqYd4nUZQJA7wAY8RMWicwH2BtV",
  "key42": "4ATGWzxQsbP29mqGkEWtWex4fXnayqTHRutYNxYhNiwtvYWKCKFECaaHeqMWysE1FiBryNdr9pfwLgVRnjRX4vAQ",
  "key43": "6549JPNy6LdAknoU1Eusgsfho2BKx5PvFGGjX2dvxXHynapfLCfpsgCKesFB3PRdCEnLCwZZpYq62z6Zxu682mSa",
  "key44": "3wBFVBJk2Xs4NaXVCTV1U87XeghiqBZNVVM8By5fEt3FbUzu6JA8Vc1do39ypUgQ9kTbDccJddM9odq5tL5qjyNU",
  "key45": "3tMg6fW6N6xHWbF3ucdYoBKTDjoYYtN13VVH7pSWrEws1vrsKt3MChHWnmQBY1BEi6WguECohyFHzZmHEbh2zbCu",
  "key46": "5SGkQBXYL3f3BnRBFszdg8ppD2uvzvL8DtNtHryLG8sM3CLAy9yVZM7LDZLbm85wXez1ywkfCh7kamNypmJ3Y8R1",
  "key47": "NwNEUiSxNGnYPVCY2hvB5zsnEicVMriRGdziAtGCwdh9soTz4TMV9RzY4ZMQc9rf2iDGY3SuGRjA62Lm3tURVGk",
  "key48": "3LfsxkJBtvZpbn7e1vHZeA6Rrvk7MBi2oqcrLKD6QY2jbeGfwR4xH8cobLWfpbXU2KSC2uSSAbxkBeZ7o2pkvMCC"
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

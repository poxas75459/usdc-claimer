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
    "5k8QxMRwAA6XA1eBPyp8Cn9DdDECz2ZZzPrsS6ZMdaujFgqhwiykrAXXuXmc9Ry199B2GkxfqCTZwdJgvBvWAoeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RG6oeJ1MGEshBHvpQsKfcN6fe1Uhc7AKBc8z9ZwpqG3p2weRzMdJe9E66qBwMc1hU2CPGhFzxq1jQQmK9rX3ywN",
  "key1": "4UGn2J9SY85v1NZdr8DmeykavG5MKxschWD5vzN11CdSATyMwuvDdxHTN6PCM7qUrCk3r3HsoLsQjHfm6gtvk4aq",
  "key2": "2adTSy2m8o7pQrSk8gBLQPaoWhN3CdpZeiMaB3c2XrWKuFnBamLkzdA9p9Nqapa7ekqdVoRNJwtr53JdwCCyW6AZ",
  "key3": "3Lhni3eprFV3qjQ9Dq6W7sNFpfvCKtjP2MgjiXFRZgucGgQPSasbZ5L7jsakcciifEqpQA7qwvfz4JW1GcRfZvna",
  "key4": "61Pg5Zh2nyqURayYoNYKupNAjX4398XGBepXoWnKz7aWkzwvho6FutrYppQkBTxVdsHmaoFWUUPih54apt4J934M",
  "key5": "5e3vnt3q3XyvR5ZV4TVXhT2grjg5meFQTUFHWgzzHmpJmjc54PVFsEdgL8sRmZRjv48Dh7UjxnPAr26Zq2vQFkT1",
  "key6": "2ojXsrt7D3brnC6hTzRfrNPaHjen5AHWw2TY5LDYJm7GeQbt7LWoh9P75A7Jzd4McG6QwHoedxPb9U9B8ouX72gn",
  "key7": "3jcUrEDh3cYQoJ648aGgmcngBDZxWyf6hX5JTd6RBUnRPMAnPEjRAJkuHy6Se2PWLQVVEkktVDuP6wPbVKSJhzdn",
  "key8": "2535S9sTKALhWePP7REQPhRYPqMLkbgnQK63ZHPdfweiwEVyuagEX2HaXDWyYGZoSwackXEdiZkoCrLMFHG3vtfc",
  "key9": "5RSwsoVtfct11eqAP68AuDSGg7mqxygRayhpyPXnzLnnoPqSCf64tsVFZtxo7tztb3YBccHgxNbRppzMYjpmNsSQ",
  "key10": "33hhKbWSKgXMUP6VhiaoVSesBJna4AGi7qmo1zdpMLaZD4pjmdnUHzedSwPX8vTQC7EvQWZa8wR1JemXzPEB5Tra",
  "key11": "4Q2ZsJfc4ULfBxybT4RYigUZfJCscdGk5gwFGXWFoKKgv1NKiXxE3A9Y6nT3UKDggh8bCdubnegVoACuBVb7tjqx",
  "key12": "4zwVndLUGZWiVVtKBAjkne8Kc761JUBo9YhVzvLGSd2PUps2rSBQYbZwDQ72rdtxkbk2kryhF4mKTFhcZ7vdT3RN",
  "key13": "2tdaRKZ5aZWBH1UoxPaodtgQeKqTyykRdmRVwzPe1BmqzUoNLYKVgVASKpYFWPshJ64x43Z8GVCATMzvZLdxUSWZ",
  "key14": "3pgkyJ57XUHbf1USoyZHNB1eRGP29T3uTNP6yYNqwc5ugKVNkPFMZyVEU36Cj3qkzqjmgEMpJLoY2bSdhH9eZeFV",
  "key15": "2aFy2Mj87muyvB6jmaSap5C2gFn6jHmJXyJfLek5zW5fkr3t9WPRZBEueoYM9sMqaUkmyPowjACzyzn9SU4CCkq3",
  "key16": "2Z75Yr5i5zv143XhD3UUyLnfEdhfv5bXBkLqaNhKFpbZu2orzkikBft2Z4p279z8hAA1MNLUayUk6vamfWGHcinY",
  "key17": "53MriXLS6c58DRSrvdAMvqmAFpoH3G15pzzMDzJPCx8jkmLouLGMyyyoJgtyStopYCithtYdQz3M5MKFVRMfbnyz",
  "key18": "5Wjkqu5K9AudmCGk8ayKS2TNtKV1m22epBQY96a74QDqYRefiEeC7eKopPBAAXWNzAGuMMAq2MjNKTdVaUPzb2AD",
  "key19": "rrV3D7mvDp4Mo9NV5iWKhEohUQP5FHRxyG3uPgVgGvwsQAXxThstnCXEu1axiCEHjqA6sWJoafxd1tALCFJERfG",
  "key20": "2dHowo8tpjGvaHyHDgPbyBWn3PHpoFcF3h9meGh6vNRRwXVB9MdKhtHWJpaoiwhqGtXiJtgmMjJBfnCAkqfaZbLN",
  "key21": "5BZ1Jkt72SkfUaLAcvemMUhdcWWKBhR8BrfJjtzmL1zHp3JPsn8hAfH4xTaRrGUsHzt6q9wDdgxd3zriTfkH2NEt",
  "key22": "4uyNQNGVBw7Hxve44ugEwjmRhVw5BzJxbzSrPiNrx6CqDnFaRKJ6ToFkSJNyCUxZ523RSA4DMYGnkF15KYS98jwW",
  "key23": "2CCqrggrmtt5pXRYsaxuH2nodrUgXFcYWjaX4pG2MPuyicF25HsY2bgq3LHsyGDipWKKb3mrQv7GeGNnHXHKJ7CE",
  "key24": "5ncJrMeiBB8PxWb51N7rCDdCU739KtgKmnjnx4AkM7ZFyD2rqfn5CSLwNDZT3VZEiRNZrmCRTdFBs2Ajd6vo2NxH",
  "key25": "34dE5oMxBQN5NRBrm68XAGoyHtCvAQFDffyXukvaGEpnY3nx3853KUnsTD32Nrf9PWHbETcmTQp2A5rJ2zSbsZ8f",
  "key26": "5bn8ke3Gx5hNLiBLWexsk3A3LBfDGiXhFLU4HEneN5imgFxo22g9g6PcWhhgWy9q21ggZKhxishG33XX4xcGVpGf",
  "key27": "2keQBDHJ7cCFGgy2T8kEmyh1r5EtdB5A8FZ9Crd7HrMgivaRNrFDaNPqDGA6x9b9t5mL7TqpDXS1argUCpsnszLV",
  "key28": "38Pnj24wqNtSfTWqj7JPoEQM7XwjGuGA6PwSAPcrqrCEPTgnQTiG9gwP9i27NtDvHqWYLXZTwZhESTtHVRujCxBW",
  "key29": "2V7CXJ1rm5PT7sWucRqNPXp3pdvqeEdKu6n5ySWJMwQqr42uXfssH8iKASFSAQY848R3PfTXkMBkt3ndp1bZrXXH"
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

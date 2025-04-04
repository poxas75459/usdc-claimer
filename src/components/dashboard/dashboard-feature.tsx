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
    "2YLpXNKjyumcFpghorqiXpwGf4JQaeN3kRCrAHY5xjWszbRyjyXoTYJDn3HgMWjzV6EH596A3HDvV5gb1zmziuDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XmZYUnnez6n1mPv8M8nvAJ9NqqruHPyKxzVqSDRws7Zfr6PxnyGbthq76BEL6XCRfdiCZ8EUNckBVSeAHM6cfDz",
  "key1": "DbXaPdvCArVTKvNSe1a3rm1D7RGTBixpoGDAygV6uSxSTD9LbPtnzxTuJ1yHSoMHYuaEGjd7aZuGmVsw72c5Mjc",
  "key2": "LhrpThw2RmLj1BB4P8i2R4cUnNCMYtiQFwF2YVjgBswkEkKQzER7RzkWr7HpxYmNguCDVwcVspJq8xjYSdtT3Z9",
  "key3": "5qT3W9j3bVQ8bsyx2UvHppW8v8hyomRWttGVP2ZTFLJn8FprrmbZCmNKFu8xRgWrVn2npgou3NPD4J7mJHQcFgP2",
  "key4": "dcpMkWEHjsbFXqGdGz61tB2kRJTP7TnY2rEvJeRDhxKZwAjELXDuFyXyaAMfwwpLA3RezWD6F5PATWLE6sbwNrB",
  "key5": "4C5wsjxyBhxninFJsLA1geFNhqMAQKoMh5Uk84jcwqYHqWyCzGeLS8RHjpHoYJcsJf1Mky7b2GuUHhPGzUoZNWHM",
  "key6": "3dbU72FMETczeWYNjWTRVWVxEaqj9HzfVSY3zfciXKAwiNDPWMAp1ncVwFUPXSJhx5i26X8GiuHxc7zJMxUUViVC",
  "key7": "9k6zoeoPLTXgM5X5QJbgd47JQrdJoKWVimB1jArBXxdnfUftTD8aroVj8CF21CkZHq7MQq2mbmbpPTsAausF4je",
  "key8": "2V5DHpccLkTdb7g3Vh6K9fi255YgDvDw11D8W1QQUWLiPcWm3pdUJF2RUdpHCdhrHXujpYuFN3aVnSxwfvUEwH4v",
  "key9": "3hKs4M5WKSifu7V9i39RSQvjL96DrVuJd1eP3ZHwzSUTJpvh2B9Zdi4jaUZksRS3WdcD3ajwwctqxv4PbJEGf673",
  "key10": "4pGA9NisU6N7E5THrUyKxXAErXbmiGcc9Z2KwvhuHvDtWBRGSevABk6PWrCwtfUiymetcFguQZLxzpCuuxEUxoui",
  "key11": "3BfYB5Jbj6zUDJUmEvQnhmbnp4ynnuy27k37v8qNwAXgG8sqQaw6p1h2gYobprsP6i6zxc1r873HBJG8BfB8jBvh",
  "key12": "47jLNU9d7tS5CThQ4skbWHeht8RUMLiq9TXUQ7tFa1NynE1KYaomFnrR5t4qHeNaxznJKDLXEdiKMapkajnF9Jue",
  "key13": "4aUiKpep4ShPLLxd9gdxhoKXWgnzfeTZSVPMQcUJoRHL1dCN4JK8gLTVYkxrLB2gf1dfV8JaU7hSF91WDBKHpHWQ",
  "key14": "4grFZwTy9kzEucZQY4RD89tKLABgUGJ3NjhtKroVDrs8ZmStkuBJtUex5zVhLxofg36BxW6uGz2WMSt1BEdMbPtP",
  "key15": "638fuE3v6yksaMAVMUL4XqjKz77uoqiCdnWkULnotMMF9gknda7B6AmKbLoFRi1kKuwQCTWFfgigsTw31LHH87Qf",
  "key16": "2txjyHbXtF8ySiXxWnSYXWdxu8HQsWLaYuFcFJWxNUCgYDfXhwuRtHRNtXL2h49LSTD6Po1x4NodkqSTkSFHN8JB",
  "key17": "5tU5YppM52meyC14xjwfhgSB9Wzn4HWpuyu7dyr4jojdTgvL1XoQNVq5K3wuiM8preJAuwPVcRC5Q5VFVLB1wXjP",
  "key18": "4ZVAiJZodKmeV54ogZwVzt9xsUZFHBWTYJ7F4aayRoxmpuqm1Ay7QsY9ZzbnGLZifwXrFMkHQ6W3S4oxsT6Em8VW",
  "key19": "BLpZFRh2EemZtvUKSUKdZ78n1XAH7GWcuqhhgDBPLeqC93gLo9tX8Vb2F2RBGhscSr6ZQF5bVJ96nCrAmufNYGM",
  "key20": "iHa7dw2jQ9CK2S15BGYiZy3VGXtqj9os4yjnwGi3qxXTq643qSBm4jYR3iXU3ma2bgrrEh31fCAkw4vpAWxc6eL",
  "key21": "22FrXeafrtdzDCwJBvFMSoNPynqyZUfj5iGraYEw8Yb4Yom1u1nd2MW44YwRwZKDMbsCmECFkG3UaM9dNkU9juot",
  "key22": "2zAWTX1FfjtVcgeVAtavr8nzBCgVETEY3Uovxr2fjvvMvqDTiAZmhdsBZkinjgrWWJ7xru8BUAWH8dYsMkRfU3kQ",
  "key23": "5gy6bjQHm75992wykqTv1y3d2bj36rf5NtRiuZLGAvSMVF3vbv1K35geX3DkjZ8nNJBy8mHMq5aZCpBNaYfw4M2j",
  "key24": "319Xovqv1PCpRW3U74xpksCxYGQ442QwqgR8CNS9AZbDsShsCywChYqoB8JDT7nEoRq9JB867jF4ZuhhkL3kVrrQ"
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

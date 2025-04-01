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
    "wVPb2F6gyCbDhxsj69STmyDz2CdJTcNL4Qu6QoYrG7CBbTZ91qU7fNc1KZHjyEMF5pj1V1qq8hdWu52vZuTKC75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j14a79F6sZgsmgujuecCXV9Zc8K9ub1utkofJDbXEM6hCCr6U4PRdMo5sTdzT11ybTydmDdkaRa6q5yw5V1fyYN",
  "key1": "iBF2UtZeZsrQbfExc2ymtojCoETEXhtH3ccbdcb5joFkH6gWrnTnbCvdptqM8JDiWqb5rZoDMBi4ndTCjCtdnEP",
  "key2": "3MYh2dE4fWhM99J69CbQhip8dhJFhzoJ3rhnU2JLpA4D5UMQMorfZ5AsJiWsnrtQpjZxskoZHoRiBUMm6kYdCNLx",
  "key3": "3SSExYpv9oaGrMDnns7LvvKNiEJtUNJw7No2VJLTaZxZ9RVaq3LyJc6kc2yHx4aBHyXRa1PT432L2vLoXnmTxNpw",
  "key4": "47ejNrbLhkbtPAsqDxvdRctxKJLxAMK1YgSNdrJHjgD4MBR3T6WUU2KpZNVEiHgzGZcdfq3S7YAQQxjUkWnyf4fg",
  "key5": "3WEtVtMWfxXd787n3UzoGD9aQi5EwEhK4cpZHvAaYGFBrDwpH8mRbAtAJh6tRrfr8Y81ZGWgfuHwFptSrQRxWnmT",
  "key6": "2mD44nJTopaMSG3jYHdQGkui7F2MF4y5Ckiw21iV2LjzzVJwyVZUxLKYe3iZvEKMztB8Bki48c9cUfRyDyX3wndC",
  "key7": "2V2tiN3GUuGqVsizr5Dzu22Q7DJoQ5a3QsRuRSd9ovFxvMriiFo9Xag9Cqg47iRZTcaqC8zMB3ktc5efKjfNV2h8",
  "key8": "4dKKPDa3qYugmRSEWHUiG5n49boMejJ4hE5Z66v6R9AM6vrDmzreoBkSKDUPzFPZimahKc23zA7CSwseAYhDvAxX",
  "key9": "4vMdL5nYmuqMYMAa3i5KSJb7rD2dR7TBcumdXZ4k9dFpGhyA4C5banAEViLpKXedtzUimeXRL1NtxP4wXmmNzwdw",
  "key10": "5J6HSaqBkjuV1rodidyd1DAk5jgLHkW9cb3xnbM2y2D2u2SBctcngCmdcrL8azcTVWw2jfWr5gWwLgrkTDqmApmA",
  "key11": "5ZkWWiNspjBKkRBbWdmzor9WJCNNJZNKhx44b5XKFnijH8VCJ4nFt1BWEm9NCQppNgrsRxZwRuJZFfCxyMV1s4eA",
  "key12": "5pcDgcBwBKWZZ3EgzGMg1LETLzuppn77gamAdHgRVXnyEARXPF2FTs8QA2Hbw1aKwNw3SsB74y3PNqiAmyAoaptt",
  "key13": "BLrN1n9uDrshTfNtQ5cNxjGRf6jE1LM71TGdEB2VSHAkff9W9pEWBkcGSMKtopBCWHouBsrbGAer5x56x9ok7aU",
  "key14": "3X5FB1a8q9gik6WvaKP9MhQfwJTfPZgDDqJYhkN9n8P5qQLPgvnALXdyBH6d39wQGZUqYiiNYZHLV14byhpXAnsm",
  "key15": "3EgBn8JsgFLrFLPNPhZqx3QvvjZ7EPqXa65GmcBoDu1yEgXYGwVzzrjQGmQSTb3rSBcEdxs1a3PJCnwoTPoWrZvp",
  "key16": "4KCWChr7skCQeUiBuEj71rc6JBN71zY1bK9WA6QMLfNRioPpYrfCxcSm7GLrCnGRryUogXJzt5Sfi9Qd468GGEj2",
  "key17": "4kLNaNju7Ys7trXaxNN7moeGVY1XMyRv6P59D3fXZKkRHJAY5rkkV6Ud917B1TNpwZsqiJEzvjrCbsVKV3xbkqsJ",
  "key18": "4KxHyGhbf7XJU1ks9UKHj7S8mzwbztSYV9z2q8nP3Wh7sZ36ZALHamHZ9XyotuLLsn3xiSQXshDMGKNFG6HDRtyV",
  "key19": "248DNb9rRVy6YvPGYvcd5bijUk8bgkDdpgud5bAQb6kFwDFsdJxEPqySqNXB6U6PG7ikhk5PwcJpAahhkNeZyfCz",
  "key20": "3exz9hd8crVW7Za3UcYww4Ff7AEZab4DYRp6eeHKyD8GFmgLVQEtrpDZZmHYuQnsuEBYiwDffSC9SKTJu4YvDNZF",
  "key21": "2bX5vQHuUQ8frmH3QU6Gf29aQRDnTAeyF1KwntEEyMASu5PFyzNDAijLTrFmW9ZpWXkYEdRHKvvwmJWVqoxUSm53",
  "key22": "57oKhhDcWD6c5Au1QHpc7N9APmvwkByYpigyhBRa8pZsB9xmkuhKGWYqAmMpJ3qLBsaYzSUgi88bd3T2bqdHAzqH",
  "key23": "2jFuTxz3dy7hZecgpcDRNQSfuCFfTnZDMFMy8HCfjA4oQ2GA1YA2mn2kcQvTKXdAcx3naGmKKhhdXsbDYFLtpVU4",
  "key24": "2uW2jJSrTjgB5XuNAiy5EpnpEtQEty48cALPY63KTX2gLPitJkyYUbhXTDCD9bbVCVF4oUiu6sTQ4rja6gYw4JrE",
  "key25": "2PJsjUqGZ9U7yEEUNs1jyK4SBb7hQzmGT2vk2x7FwJTUrdMSoZrg9pL65MdFCvmccYShZ4nrd1MhPBTs1sfh1Zov",
  "key26": "3VPHNmuFgRAneMDLbtxBGAFtPZjGfqBjgMQdRpgaHjxBzHe6qo3ypRRhppyLagtkzfWLJzfKWYLuVLAvyYNHK84Y",
  "key27": "LUbFfMjND4hMQiTMsf46dFSjEb8Qc8av6MQpy3AMp4kvH8Ko45C7qjVn4g4BDYabQzzt2ioY8XL6BB7v27bcFNN",
  "key28": "k1Tb6x2r1rFPbB4JcfY3i51xKWqW8VNGpe8ed5MqFzF1jvWpwhfCEtFfjifWjWjduKdkjx55nfvowgvj5PaE2W9",
  "key29": "2jshnDxagR9BhrYyFXFKcSkU5rW35EzAt4tzssKBzidCJqq6bGn2yQBDV65Fysg8yYwq8xYdR7aSQvwSyRmuqvi9",
  "key30": "3gZ2dfVupB8mMFAJr1GxzxrKafZLZ3UXq5V71Bpy641DJTYLcspWeTNhX1Dmpc3vFLZcLJ8NNkBEd6pbC62fEpS9"
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

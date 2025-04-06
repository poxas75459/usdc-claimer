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
    "4JG96UQaxBmNERDW1cqebKZZoCzS9HaryDemHM8cSKNqixiDcjkWRkPynRymvkT34UmZtAxCossDtUSKKrKtkyFb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DYjUEXzQNQMncnDpSBGxL4ur1hyAqY3ie49rCh9LMvFgY6o8MTgiP9LRuuNZQK4ozcYtmfJ1ESspQsojBzHpEi6",
  "key1": "3veZHwteuMxLz9SW4eg3gVwAqqR8EqCpRRdPKs9fFPWF1NQfo1T3GmboKtLUcg1q8DWq1PXp5TrFczZrmSehe7dp",
  "key2": "5vfhqSbzy9i1eYqFNrxTygf8bUuKBThSggXRemX3f6vM56VmpYNG3jFyFnNqEor48197WpjRyP5bA5tVNx9FjQvf",
  "key3": "3FyBnR4ZdJxCiXap5P1tT45MQRPoCwcXydWiGTqa4J1UavzZ9tzbuYLnHXZJypXfVLe75m5srKEENtetnzw31ANP",
  "key4": "Q5ccJ3QT8mvPvekfFa8ZQe5PZchxeHTgnZWngKZgDJuFvUbNsDGFdNjWJmLb5KMS8j44ytenWW4KGwnT4LvpomP",
  "key5": "36LtcgtApWCusuVbnYfpiQRENgLnmJSMKGn4VCAMhSufLMKYX9R7BsEhcZUW74hnwkbUHxocStQLxJk2XkJGSbkM",
  "key6": "2XjFtprjZkgwPrg8SDbKdEERA1FcnFiC7H5LZcqt89qN9QKF64xW6sUEaZdpTVXjRkeZz1E98SPuAhhta8WLZXCT",
  "key7": "5JSEpu4XS4gTzzrgK24mPTKUPAJgQMobLh8NA1FgEqCvfZxftXswt6AcueeJFUL8sKWuGnVLRqCEYcpskMNAgvp1",
  "key8": "2iyTHAGVCLkxCjgmuCUfse7LaTNQwuSTjTCRbvsxn1BTiJ6uVy2CoRCj5t8mLGr8w7FWJZBP6b2vNTTsL7g9tGzy",
  "key9": "3ZRnakGQCASiH5aaFswSB5biWFkMzvh2L1dHmHJbu6cxaBzYFJyzFzLAmPKe7TYtm2ANe5po8xhfqY21z2LECKvk",
  "key10": "3xkpMxRj9mH6xDtZaSNKDcn9m7jpa165Y3xVBY498N2wQLrujJ4jjeyhKoBa1LymEVe2Yde76CyxuqnZEpfkMJc5",
  "key11": "38A7M7sqnR5gqQRKHY4r4cjXzdVsVRBXd6zPGt6qQNYLX7aSf13ptbcHwzdg189ungGzmRc38GFf7V2hxA6g2g6P",
  "key12": "2mEak4fZMhe17fJvJzjXgBGQQJcRre6x6ssQ7cdbRnxtMq24qTqcM9hBJnbekWhSX5fgzok6hLn1JAJ5cD8s59bA",
  "key13": "nZNeebCzmtvexM6NV3tKoMhu7DRwLxmnBMQyv3ktFspuw4hbG1mJRibrtyHmt3ynqJherKT3WPVtvU2NukixRzh",
  "key14": "PzkDGepmo8t1nDPn2jJSWFRfLYjaKhQgVbSXCvTwMUjQsnkxuG3WaZCDLfXZRW4jBYQzrFmFmAFb1DGHV2mQKAp",
  "key15": "s97RxLzLLGmyvJ74V97iKiLRu5SuLGCGVFGiNBtuh8WWSgjCDAFJgw5qDStaAuSDw5yXxKkNjzpDZ3qXqnUDQ6a",
  "key16": "317Q89GpqQ48r1aVkrLgSEEr4CQZ7QxWwpULMzKzm8jcShSYSzPmBt2Qn6XjsdjHAahRJ4vJzAYJKqt3W77bD8wG",
  "key17": "2KEGbNh8MEkPnc5h27KCuWvHhQ6xbxwJPuQbDV8pSjhCWwftJscpnz5x51vxTqHmNnuerEPHuxA3MaCiMr9fspSE",
  "key18": "4CzhP3NHJ6RgxsVTmhpucAE3Z6KFFtVVP9o5JV9oZSkcPA7yzH2MHa2MUwziukXNLNtcViEeGThLJYG9HeP5ZKPN",
  "key19": "21EJ1HgLHTAeV4Zxh4qVYCbHEHMqKW6BdHDJKDHeDugJvXhuCsE2wydFgzzmoGTuNgLbMFoeN8wVRDYqq2VJLkMh",
  "key20": "39rzHRGFYeV4AcQ52iecmRmRWekyau9ec2ufQXNWP46NJghD7fZHCVdPHuX6uhBprFLePYf7xFLpYQu7Jh5VzBJW",
  "key21": "4F7arVbtymZTJY8rgJdtBAVVgXccHHwFQBQkfmpL8J9eX6qUuU6C4usXraPmWzh6P3KcNAunhoUHegL89Ve1auyC",
  "key22": "4g68y9srmvTCxbb7DPE9zm3m4toNsVVQPcjyCYJvVhfWX6Qds9aCkp4w48EkAi8NHi2BakdZu6BZyrCdnzwFN4eh",
  "key23": "39KdGDE35iV8eyhF3wqAYgWGPhz7p9D1yc7NR2QBuV81gUzV5fjSHCxb16zdQxT394Ux6VvfedXX2QFsJEfk8ekt",
  "key24": "4RvCjNE1maiGCvcmvKTe8PGjW6FZmRtrxTviAmk3x8ewWJn6R43vp2kYGUHWF7e6D3fRxCScY54Y5NsEjkoRRSNP",
  "key25": "47wCXkx5LGZ12YajoctjRJ5QrSf2iMqyPPXAUdyvPnninniQuy1Vzq8Jec2HkQgsgpbVdiyYdU1vE9HpL8Wnb36B",
  "key26": "dbgTfnaLuHBancbAp3YHhEBaCZaNGmHV3v1FYQGN3gK4nr7wZ5XNERAsbGNKsUG6Z8WHjXiWbgnwU5kHywamJu8",
  "key27": "MBZy6BuaQ4TdYKyC5xyAzWF5NkpSxnxryBx7itJGkm3QkVZGko349d8v8hhR7HmmssA87t7K3L2By3JLZD6aGoK"
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

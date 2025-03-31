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
    "5qjibJBLpcgz96rd15NCCBh67zYujQGn8iCudxHprfBh5EA3a47gd811oFgMx5AMkfTj9GxErKPgTxeTSE5XHZsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZVyMnUarmsHSwNUWx1PCnrUwDdiAgv2PswSwLpeUegZRTcKVgrBhfzK3XEgMPZwd3GRa9CtWA5ykAtH6yBfWowV",
  "key1": "5F9Z2oAEGbLU1PcWTVhWH8T6YUKgz3g6KRbi5LXYwVFpjByxrrLYaz1KcngiMD37kGb1RTntwmEpkXb26AxNcQqt",
  "key2": "SwNfcGRGomxQZcfMpx5qcYU3pEQyxPADfLQh1kw8grFLd3gHcemoU5CuRWMTfb8RNAivajnMx7ZZCPHf4xUuwwd",
  "key3": "3kifga5R8ZiHW2hU2uff5L4sFuaUdmDCJH2hGLjNcaaJwGSDGz8sVT37BFHAsvPMqqtZfSEgyMKfhbWKEY839YkV",
  "key4": "29pYeseJmi316EKKW3j8weco2qa843vNPc61jivJt5xUqFMfjbfVfU3BErW1WBR7r51KqGbTFB7ztpJgGsnj6YN3",
  "key5": "3QwZGu3PAUuQ9oVXiLc2foMyxyXf4gXd5nncvYMxx6urE5iEWNVyik8t9iRNSEFiVZnZDp9gK411Xt4WPpuhrAwU",
  "key6": "5GMUWTQVALQHytuxxdr2W2TwB51bssJeysVs6EZwuDe3UiL9jUidnEUP3G14tGE3nfDMFUXQtNPpwKYWEDw6kP57",
  "key7": "5S69d6dpfvxec8rzGMtzytKjPW9GiWJxQ4GeXtsYRqxrWFmPY3M32QYUAcLNmJn7WBBFFdDhXfkjx4by7vbeymxX",
  "key8": "27LbzMC18YgSa8PuERAb2qLvsWKmsMM9VfjQdK5RzAX5Ek9nDYwYoAhhcjdUYBstyuUsoPq1yUgtbqNGXWCYyYwT",
  "key9": "5eidm7DHcHDb5g5dbC1geKyFNNvHGG2GqN3ZyL1m2mH3ivS7GDjdBdN5vZvkaARDKJFQMU55zcRXYe6oNBBHPzrR",
  "key10": "4mx93WHkf6iuHUAqY2fdH7BDcYc24DPQQFrzWhvADo4Vqo5cyeKwpFR3N6ihVDNqdDkn9vA3R6mchhqT6ChqWNmx",
  "key11": "eJBk9HehWSta5PkLqso4ySqih7d4vgQQN8SCznu8PBvgtdGPN3HiQm68NyzfXaTfY5JbCYsnGpLpgLEEc9qjQrP",
  "key12": "3bVYN2wbinZad2cS6ZjY1jSBjFKsQKFJuTjt66dydJgpwXKqfvsHwanyN2yreaJXSfsxp4faLcLgM3MaHR5UmSZo",
  "key13": "GaSoxuZ4AuYhypNTjXYqG9YJ5KYzdekTgusgUXs6zCsjwkAjBZGdv7LpmAxibPJz8N5fchNP7ygFFsVYz5nu14i",
  "key14": "qQmMxiZGmuC38KacHnT7LCaBn8pgKYpDyQ3Rv97E9e7Dz5sJaiLMR9G29tGEsSnon2JDrey7v7phBLYY7g2Qn9N",
  "key15": "MsnneFPgfhrc1QafkoCsTt9ypfYskkTqV2pqZj7BPLMvo6YZfjchFufyVG5wbTxAs5mDgUbpmw3UKEyRmXyFN4u",
  "key16": "4STX8M88rofnxBUMLZKRR2hDGZK9xvqGY7toQv2uq3UWe3cXWKD1oHfJeyUnrUz94m95Q3GrJSYBv7xqhQveRzpz",
  "key17": "3eFCGEo3Q15KAPppw2HM6DKbEv7cMxK6dWcTgiQ2qkLYUda2ioxhyg3erhi7oTfPHUdp45fY6WGRJGhPPncjsLMP",
  "key18": "29gKNMQvwb3Crhe6Vuik2vsLjLR9PrxK6sWJEgGmVRJD8zEGJ1Lrobe8TSWLLiZNKDcWz5E9vUN6eTyWujxbDbUk",
  "key19": "gkgAbsTxREqEDEn7xmMMVzQcmJGvLmjtMBRgoTwkpZ64mDjHouZL8Mwp3TyUZgVRe5sMsb2PW6ykWSbjPo1ez4y",
  "key20": "3tDpFUsBRtyw2eqPmRhtaSrvY8jJtnrwfEGWr4XDkUBE2F7CKAXNpmRg3ZGd6rt52ajP5fwjCTYjDR9Ht2qCRzYX",
  "key21": "xgFecpz3KxZbhQs8UvydduxP6PpUYfZTrBgdHvh9q3n21vCNcBSqsj4GSP5fd9xUzsvdxBr95STmGMe18nDQH29",
  "key22": "5n7LHq2fy8nXLbSKo5GZ5iRkkZ2Eau6hS2invHTuE5zabqCdnv9M6th23hgNppvu5eAszcmsGMAdswxtKesFfcV9",
  "key23": "2KHNZRyAMgNsQNbCgg6m4ocCwyhXoYFiTjtEDNMSZCPbgAkEGejpCSafHratbqtJfRunKYKm4GNfH5JSaAwYnWPN",
  "key24": "62W93oPEh476EjQaXb9fgWrQX18VBbJr3Y2SJ7aJyk4ZpsmJxYMqzgZYz8ZVkTFy3XVtW4hU49zeFKHLKfjSCmqV",
  "key25": "MnrpqMvXrqJ1Hxxy8gbcYZkN1Wg7UWGoRXzF9sRhLb9eK8vM441P5hKkTXfb34ZyN7A8kzBi3JSAhqPXwuMdvho",
  "key26": "4c6h7ZXb5gWjXa6qyfYdGRQsJonxb4kMwkKA8n31T5eMEcy51svxHY9kG9xFAPs2SJo9B38sUMtLHHqCcniGurg4",
  "key27": "5FyPsbfhMzUSZJXsD6KEKgeDi9EbwYRwL5BdUsMcHkKBPEvNNm8Ww63X3ZVNtnSZDXrB8c3H1d9b9T3RKwxKd9T5",
  "key28": "65T1DqkpZ5UF7sjd5hE5WHLGhG1thhgVXnNfhCJs51bi4bL8AeoyNfbQD9fGzTpcTZZzsC2B19EUjgkDb1rp2dh7",
  "key29": "eorB5Ag8Au65kHds8LzMzuvokveDAhc8CLLHWru84uGx2QrcXA5YeMW4MZDmwrMj8jeBSE7AUDG6qHuMQGR4f1q",
  "key30": "4fbJryCNenizVmEv583L82ZmLRwpsoqNkQfrzcBNW4ZoCpm1cSu66dJTeCJQhryEnEh7gmhwtTzca8Vnwcin6SUX"
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

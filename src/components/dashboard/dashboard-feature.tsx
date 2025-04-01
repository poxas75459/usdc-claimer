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
    "4o7YbSMDMHRApmXFZYuvyaMzMf83dQn3EckqEkUg6fEU5LFYceEREtWgeVDbSeSrhnpyQNYk6BPqRnMguN5EzrJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBxZyEY5ri7Q427QV31ikQYqDFvTdcSmFDcSiB1sdPTLL5HQK5vYGaZUxYy5KxCb9gdMdx3abbr5G7jvh4f7pBn",
  "key1": "bau87PTDG25vt7DMaY1L6Ap41PJ7mL38updSLa2vjv1whd88FaYqqC2hkhfrefFoMShr3XXSE3AmfohbTzXjPoi",
  "key2": "3dYw5sQQ3bgRkNpAR2kHCCnJbc7MGw2beMP9T9z8RTxWVuj1MQZ4Zz8UKxMjUUGcZZWQbUVb22UKrJtDujcSziP3",
  "key3": "4Gbxr6HGi1dyJCLJUSrjUSkKbzi2jx7Bp9WhURhfUFxCP9gNiy1UB8zeyT5uAA2jXVbg4zsr32ibhmqiRDzbnCMs",
  "key4": "oXBK2ydgQQr4YmT69meEpBfF9GXpBfH7SEdFceUtS63sL2Q6oTovZ2CaSMwtwvifRrv9kNeLMAWKsJqXYHtdDm1",
  "key5": "39rvnRiUyXG4sw77PdRZ5ng5j4p5qddR7sxPFAD7UqnvM39KE3ekHY72oNXKtDKxb67cLXhrMjue2wGho9FfeZ2E",
  "key6": "4fxHduo7zcgraKHXh76q3o6fXBW3qYLAYywpcUkRAKiaeK4jB8oHzzbTdzDcwabTqm3sisipand6m15J6jEZhW1P",
  "key7": "2dr3eQGchqs6Qo6bbiaoS6oMGjcAPA7DcXQAYTm9nC2YqcJJa2gWnjYkPHheSsVVS668Nfq6q9yGZzGuyQjMZ5FK",
  "key8": "2sLkE7tfuiEzeWfFZtcKoipDgxC35etpoZ9uVvYToAgeSNTWxpBCVLhoJ5mZKrZPgPAdNoT3uPA9wKZUgo92AHeM",
  "key9": "2KZc2mLPRmb15WrwNre7MNqtq2yTiq1g5oUvgUyVWVNMDSUMKAnwbiLgFk93CoLy2YQpk4pPNzVe9Ma6iVRW9L8a",
  "key10": "5nCMytn7ydoCaauVzP2NCa7juuAdgKkpDXv1DtYsYNq2u1m4U7x7htyCQWHW8pSJ6xV5hjQRJ8GNTFwMhiPuey6L",
  "key11": "4WiWyicvadPgVWiF44RrVaTAu4w3ii5rY6JnwAxWh4ohD5C93M32sJ6R95BuYrtKKFAiDdHY9HW15ZJekmJzNj4j",
  "key12": "2PSE5k1sEm6y9DGatuE6mJWf7SAsa4RKxtj7ZHRh1vYPj4MVDMBe4zLcVdJ7PzQHTvwTtsUJMZEpZ3gcd5EZA4bE",
  "key13": "1mmEBaGfDmSAcuDrBQdEiDCQcj1fNAw77a7eZLsFpFUKV4Yn6kwXG6J155xPzNje5j3njKYoZXyZTGDPjnpihKb",
  "key14": "2g5C9rP7A5uzp5ewz1pPEcHXg9QUvHLVskCnzHg8PzKvJfjqSygBngYXDUBNkk2YzhmRkn5DMuXiVuC6sXa3K4Bx",
  "key15": "4DbXfmeYK3QvCKAdYY9sogaPSDu8kbGWB5jSTjzmaSgQvdwUD3EdM5bWZsGkyLzVW6R2VbrDLwPhzm5VQk3tJMzj",
  "key16": "3TnN49WjXCpMpVBQ4KKbYJ54L2U95QD9TYY9yA8tvxs7rSHJaZ2kroDoPfJyuSXsDYkZVnxvAD7gHBQEdZbtqPRx",
  "key17": "4gjwxu22XdEn5e1NfpechEtkJj1wc9BFQyi4n27JP3HAjqb4RsDiukFzyqdjHz79BrYfdcyZtz4iCGZ2gGT6JppB",
  "key18": "smw29KaxXtqAUgMvAsg5kdwtiR6AQxnQ74joawiYe15Hj27UdEmYA72rhKcC5rMzVq7FEbQ7tg2fPHMb4bKustb",
  "key19": "5CWGni9SyoriZn4t9nrNEcbJDpNgj8e41pmvzm9bRx2UnshSUBPj2o47dLatAv6X1crypaVgYYPjGTcuN1yRUALs",
  "key20": "5vnxfrqBJfR3whepGNZ8W4xVQ4GXydE1Kq62zfG3HpMT9pYTER1WYK7BxRkzi7oJ1wky9cuAAnVxdRJpV8Gtjc1b",
  "key21": "2EAbk22yScXWX1kGDgGbP5QvuBK24zBmdvskjeYvdvzxrA1tkFCXudtYrDx4AR6Vr6XPdGf9hKXJ1Ma1hGjE1XpW",
  "key22": "58Hm7JFZT1ZK2naGdKJpN44x5Lkviy2cEHNxGHeUCKQAZNDbx3DsU5dxcxwUwgqPkrXEqgiUeudAph83NDaMfdms",
  "key23": "5aksusEjHRCkfjXiLGxZfEwipXgjsssgukhLfswukcgipEcTQZdfgfoGinR8r5uY7Yp4g38EL3WEKf2LBMkAa7FH",
  "key24": "4CT6uTXKgfoDjt8HTdkkXeGnG57DjWj2kF9EtB1MtAzKcDmyViudfqzZqUT4uv3wP73qYhjnF1U94sd6QoEZijA6",
  "key25": "5gNj9PT1jMDa79NNz7PKcjRcdmgXDBnfSTfSbeYmEM3pSXSG8tfNAS3ZU2X5u3Htm5EFrKe1YyP1rTwxTBQQyE6s",
  "key26": "2PVZkBb7Jx6Pn18xVmwJjMBTe48Kj3LaJjGAuUKVa8y2wfuEZuSwXoHnvvGrmFnxXJJavkQ3ZJEF7dmAdqfDwnqK",
  "key27": "2Z3rXUcGFDWkk8Jk3mV5u8vG6NbHYmKMKnvQqAhqKATHVBWC2oRnmqVN1wyfnvtZZ3bYepu1d5xDbpVwEqDAsW9E"
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

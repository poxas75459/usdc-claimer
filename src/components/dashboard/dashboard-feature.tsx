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
    "5vwZ5Ee9EAoYCBijVjudhSFHoScCXcNsYUcG4g5dNeFw2dpUPvNorCa2GAFs2tf59QrSKjQJchzs4Qv8FxxkjHvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3xBNKGQWPWywK33iuRh7gSBh6JLdaDME15qdCShfbHuZXve8n3pNc6jgJKJ2R9bczPoaKZtnsSvMf4tk5oDyss",
  "key1": "3p9sJGqZUgQt7NAN5dashK5PpYGTkomFdBJ9yKmUafisBNchBRuS2sctsyYhmss33b6TiiYoXiZVUpGW51GgyPPS",
  "key2": "9yqEcQyYRhfAt3rgnwEiCxZy5d9cL3CoW5m321kMw3SRkRkjcqK2LWZnou74tm29ZYpdSdu3YeLvkPUkSZFBwA4",
  "key3": "2x6oJVXqzHd8Xrj5kjMZoCRqd1Fts5diuetwqh7wto3dgk4RUJdh134swhmoeWYJmWaUCJoxWYcjK2fiwbwHUhtj",
  "key4": "5MKQrhT4q7RnZsLqfdbBRS1pQfgp6S1LhCWk3SSgEqamHJS2pJ8tPGHiQDnGvMSGmtnRXq1MYhbqwYxhyFVj3pmN",
  "key5": "YX23n8yZEk1pBsyXki17WPzbxN1zSms51iPiVSiZUUbymPp6sNgLWZfs3oYUx1n5vZWxEuXcyETCyk751T2Yvqt",
  "key6": "5UKJnfHTJuWWGbyH48LexByrNovaQeujc8nKQ7wDNW1hb7m1uAjZZp1fhSE9ayLJ8CZDGoBQnr8vwHCBPWM6K7rB",
  "key7": "299ynSmc7LCyL3fRqkZJ78UuDCyqMu5s15PLarxunA88watKC23YWUJq9dJRt3nu5ny8jUpgGciFPpdGe8VBqJYY",
  "key8": "31kzHZZfY7b7Rc9WfSwy1kLaGoVDkJmnoaqF1Xfowo5UpqnzTJMGsodf3tWQpNmAmxGoGyH4Y3riKTy5c7LpN8Do",
  "key9": "3G2DxCwwgeLrtZHk5ieycgQQXQiKCiDdJ5AEoNsrP1AXHURt1gfEDA7jv4L3BpKbWF4TF7nsXbTqxtWXgg37mn88",
  "key10": "2zhrfZsJ9kzhty7PFB1gupcjG5vochVPHuRLMFSuFF6QiDXPmonyny4vfyYaAQ5Q69HLEKpF6ZPKX2vYjhqjedMR",
  "key11": "4bzsfUMHi3qzpPQDxFdLV4vNjTvRQWxhNJcH4L6w6qQM1QSnsGdbvy8sBF8h76rHHGSdEtBEnK4ZKAJdJw8B458c",
  "key12": "doiLjoRMY3ukHUwpbEvUwPNRRYEysyr5EUbxXKLKvXtAdJs9jutdYDnXD1f1hUWyBKjsLhiTRAQutN56WBN3cCv",
  "key13": "64aLTaTeCGRwGjvAc7fhiibECuwKqwFJQYHC39gtSMAGY92BoDUD7A1GPALRbRBiCLjfvyiHw1sowAAxs3g1K3qh",
  "key14": "uWXmfgZ4YzRKySxR2AT5jen2VQArZQsA1TZHeJqpvY9CU17ALyRa1TQH6rYc79U4nR4LYmNVr1M8FAQdjGVFguy",
  "key15": "4aNaycW8vob6DcXggkuXgVLTcWbgdkU2FBWsjwHqjb6UdLeVZZxBqVzujm6j26mNbupzL3m5Vj2t6xtnibTSQoGR",
  "key16": "4bUH1osySysSUNvCbPG5VfRdPV6VuwrVXZq1tEWDKs6tBKZBUZCCmvYrLMqxBXYKw4fxAasywHGHwFY6z6oZuYZi",
  "key17": "4hFemHGbF3LNpU5uSxNDn1M44SGsadyqeYsrU7wpVxCAMgKCUxt1LCpLoRnsJCxSJrQW4oqAny6P5ujLCd8CU2DM",
  "key18": "27ujUyLfNq4AzX8AYdiV5NwroAkSijXVdiKqAsWgdoEDbbS9TyMNmEen6UzbWwa3GGpCAxPcMvdtMBJdh8k7op3n",
  "key19": "NASXddjPR8xXMRYjX14VapHXFnoTCbxHckS4fpFAfWBZRCwcDg4htNQdwcndeJCxY8H8wKfAcun8YV844NT153v",
  "key20": "2N3xrU1EYfV8YdqYqioKT1pNXM27HRn9uKK5zqAwba1QNaAxVoXLumFM8grM5mJXJpXCyYtNapUtAXmbvP9njSga",
  "key21": "2jdkH8F5ugJpPidTLjJ9bSm75ez1soQJUqthXD3wGDzm3qKiPGM2umS2DBb3Q5fzhsfDe5dNp9h1jzs6Q7oy4Ns",
  "key22": "443DbgyDqcCf8bwVLaTGNfL63rpEBuBckVoVv7zyZnzfwjpEYYzMo2fiyBgXP99DJAe1kqwUZS98YQ5TYSWxHxQb",
  "key23": "3opFRfHXwa6tt7gtC8BCZG5vbruoyeh7E2baBrZnu96FBWmhJsgEpfLDWQbT8AcGgdaDtCQ4WeL8aGAC5mQa3yh4",
  "key24": "4JZeHQhHENQ6G8iPnA47g5PpfzNght6Wfbvy5KAeDSVS4jsHezyUD11GbCYez7G3qWcQKxtxtEbZScoK2pwjtn4a"
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

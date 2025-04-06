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
    "2gmtXdBkPQkraG9CdvSRsPEjHpbHvCmWwWqUvV7ydoimnw4wLi2UD4e3UDtRN6UtCGQFjxvNV3U8YpJFew27fKvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qxPNf6vBmQSvs8aJqpJtvRtrrJ4MfB3TK8Csxeh29SCVvHr93Wac2ExfHAJGTPum5kk2FPjVFcAFJy91M5j5Zwy",
  "key1": "5n1pi3gU4zqtDLmuHAEHCHvTHpT97NsG8HP5AfiCEDvf19tf7ddYHn34yPqcMWU31Zwp9JV5LBcWUBqvRYYX8xfV",
  "key2": "ZMeJH9MvtDbn1BiKCU9NMLu299Xd6Le8tkibKmJg9qkMRKBynZHRdY38RgUUhLTJfzEzRjvJcuFeBEwwzTVUBLV",
  "key3": "454E2sM9PfnfopjUEvAM9f1BruiUNPX5ffQuqAefX2XuEFTwpNQ75pUxR1CEzfXp2NVUBFRN1mRrZQmoK5ebAP4g",
  "key4": "23H4aaQeDaXjHJqmia4A3kagJ8ohxwHkWjzwiBwDuhMXrX6czN3wQiZBWKCAttBUXwsh85ZvnXTJdT2ahcYET6T7",
  "key5": "fSCqGx8dYwvicETvmBXryrBuxSTnCXLXxMUCAtrdwo9jrQkEcjn2XNgZSGMksEdvzzjqyAXnDonuiBh5et7sdUR",
  "key6": "3mWwnzuWo1aPnAaL7kzKPcRfX1uPPWxm8FAkUY6t6J1Nnj8yD5qqhKee4jfLs1oM8womhUuEDVvRcisFHdHJtbXB",
  "key7": "2Cpq121kSnz5xBnyA7krmrcg2zAStxTppZS5DscCDpM2K7MLm5wX6kBD51ePgLCLrhcYRE4g1q5eKRr4wMicASgT",
  "key8": "3Cp7tvfQKWF1P7mv6QbmRps8DVHYaC4nxnpUP2Kd3vx8e9c1rx9kjztn4pgK2XEdq77TNFQQZ5694XirtaQY3fmF",
  "key9": "CmG7NYhz4kyKdXXzVjPQR93huLQnhyqPw6YBVnJA6M6jyJ38v4XLPC3Y1XPKjcLMdH7jECkaeMN2hWxWMhepPTH",
  "key10": "2iDSU1AWpPysJkoKJ2t5Lv2cwpj1YRiM2RtrBBJe9GVaVTtWCyVFirjq1ogBMGz7XeaSCW48dPtkRv5wF4GRsBYU",
  "key11": "65sEKgFVV25U9n96pHs7fTLKxzLP7Cn5A576jAySeCcHexZJDyYZxkFMSzkQhEMWQXPz6xTzbxezpaHXccumXiSz",
  "key12": "4pyF4h395xVbg5mRTdm8dSMWeQt3Yy4exdj4HZEaV1SjCNUAjUVfNN9nyzt95FXzAhbBzMEKQztv55pgzb735uNY",
  "key13": "3uxBoCPbSrCKXDB6wHtqNuX5yYkzMXPCatfyXoWKRkBqAdGZLjQF3nfUazu8X711L8mjeviTCUZkTwPvE4Qvd8vy",
  "key14": "5pzj7WsUGSEYkvKWmcSPFo6vPQHPj4vKHPCGBpwQ9Gf8kz9Wi2Cy4iDPmBCjHiKDsXTvGG24kR9EP27aUjQxaRpw",
  "key15": "3eA8ptNwb244ouAJ76oq7cYCQcg1cytbUqrVkUZZnvqLjN2d1UFm18EwZMNhouAPrcaUbystNip4mJBLeJbErSJA",
  "key16": "5kN7e51sfReSRQ6mENZT6FJD74q7FUFz7e4AEGfXwiveaNSTupLYmtLMygpnRYkZrhDKqmis3ek1xxRn7WYRpTYt",
  "key17": "2YftdGUk86cCja3tXJhpL4sJjhimGs2sKqmzC8LvyaNgDdqzMUbZNsoeN8EQRnf2QnJP8prnXhk9ktBpQhJYTC2h",
  "key18": "43x1AJvwEn5sqEvUAR858izD5LfFSMRTsVdU96wMd4thAbV9EcoFEqMp7tTk1w4TtbSUwKzA4dLaBW1g8PJMhwFu",
  "key19": "3LYkXdzeWqCeN2WaBgCxfiGyfncCMcXoosK5b6Znq1rnop5Aixvq2MnuB9wqmpZudWz9PFJeKS4S5cG1ipn5gHgS",
  "key20": "2yA5Tm5WVqZyQasikji4mojot6M9Ku2hyf9u4F2gaEwMD1LX6URMRQ4YEh1V27PU3ZvnSAfhqwZPfDwi5we55iTf",
  "key21": "2SUoiytYPjVD5ZGZvcrPXTsaTSQ8Ye6BZJTK8vwc3iVDRkuq7uUFz2jQPjFxURw4epCkqCv4Nq8zUMK8mhCA8JvP",
  "key22": "3yup58sTw71sciRJcYhDqqc3WJSvPZ26zo4ApujXRywPKM91p9dRV5dFF9gDFZUTfqUNcjJ528Q2Qgy4UQAoBMHU",
  "key23": "a38wpSrmF6VqRpMQ5TAFHusX8Z94NBaw9dQTwjRyaDeGrfiNPyDrNjXEMYvbJov9dVoqVpoXYW8osiK9pP9D6xW",
  "key24": "jgATp5MrB77jFeZrY5ByxAj2MaQGnwyCpaZ9cWXaHwdDVJSvGa4Kcv8XrKknjHYx5vPPBWv6hFdJfP5H9uG1uba",
  "key25": "4HbYPxt7EjsP6hBND2toSGanM8wWkSxypABS1V826tgHMWXHdKzQtq2fjSKYFRbizTqYp5Joa6DcL5WGxPYNFNys",
  "key26": "4bn9vjE6RBD6CGvLw2WMDVmfgUF9RnjxuK6qd3HKHNRxo7jA8KPwkFiKaY8z78nSEVXSvehdUyfrKqs5tbE9wFjr",
  "key27": "65WvX6kLqqBYeQuahobKiEaVUptsDGTRD9Hd64RuZRoWibjh59jgUScoFomQFRnUSHfFQmz12EjCNBkgCzURKpMU"
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

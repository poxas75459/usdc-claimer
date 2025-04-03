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
    "47tpawY1DYQdNrgFxD4s2aVgiy8BmFWQg2u5Pcax1yPnK7eaKz2CJUw7mSNgbEVqvS7UmzVtRi1xyFdLRroc5Hsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahiyJvi8Eb3F6VHR6SeZkwpQtNHxT7rQ8Yyj4B2PpzYV8NLtCRjm66EY3TwTv9dMNwzkEMbZQTBh9TSs2zTL3mk",
  "key1": "2BgfGpwBnhYZVD372UUwAn7esXvnk1iduhBvsfW8bDLdL3e8BZ6Y7yGPu6f43z18GL6ZsHkvawGKQjRJNmCXYaeU",
  "key2": "31k8VhRqyGW3GmpWB36JGSETRkpfJPJ1H7Dgykz5RvRZWmUABZZKskjZfh3b22G1cZ5xkZwehKh6EQYBeuDJA3dW",
  "key3": "4xfVb8288iGbjQp747WCRTT5ZQ8RRQ4wsyLN6qQkSiBmgm8yfEB4pCDWihnR8NWrZXfspeVVgiNartYNjwNnipE1",
  "key4": "64B5WqSTaLDsHS49pMHY1U2CY4qw8EU7zDBskHcKqaqVL9MkoYGiXQciMf9Fg1oWHEDTF33DvpjsHENSyEbb8GHr",
  "key5": "3H1fPbVjhTt7uKBGEGFaGyEf8o2QkT5gUJPRmvEDQ67F8zxHzc3vumuPz6qXXgQdwCfpFERz3WcWbpmMMJN7N7GF",
  "key6": "6775rhYgV3Qz3PTTPznvxCGMDAbxz2ssuwR3d9irpMyZwvP5Pzw12nziuR9WboMXgQMEhrktd2C6d1hQtuT7Cdz3",
  "key7": "4MaJZ3dVyadvN2aRLV1KH96ZUnASw1xpT8LT9apuLQALMNRw6dUfqjEfxMn4gdYwg4ECS7EKu1UwS9zuSuQZ4cpG",
  "key8": "KguhvmuwuXSrBgAgFbFnQFQE2kXpsdpFP9saaFaEGW2kD2NfH4nhVZF6jZcWwP9YkpRA3ENtw6aPpnZbG39pHqv",
  "key9": "651tar2xvaG7SnUFoap9WcFxL5Q6XCnvMC4jfbXTxnjFGALQcAjKTAtiyzogfywWnDvRJQNFsz91HoHuLJMW4rqp",
  "key10": "5dn9qRHtifBHtpcU85DHTYgrZZedPZR3CCUZaHAiK8WcD2UsFkfEPkAGJ68w9GJiNnwxmydaCBEAeML7uVWGXMi9",
  "key11": "3dNuAWNgGZYXGeqJLvRgSiKK5JmgSYYWNmP76TXt48aTziupqqcRdd3qmCzpqKfUNq3RraeDdLSEJBB697Lds1FQ",
  "key12": "23tNtUNtDMvrr41jykZLmn3m4ko9NtX8rZgGYqP7r9bsN3GFMuRzcexgieoMe1KAmrezXAY63uoqZZhR2PZytXZR",
  "key13": "2oREjVSR89LKUftLW3zqZpfj5RdHymcyb274oiiTBhyLGR2YAJ3gfVoXqyPhmxiHyzW2srF4h8koaELQatV9kf9k",
  "key14": "36oGb2mNvyWsoegQsQGrte6A1NoAwCtQoWAHqswNKAysaqWLLqcAimqHuKs3k9FNaPJKK3dpJzAhvUis1byJ1fyQ",
  "key15": "ChCSsHzjRLocqvDjkzqJE16AJjMzWLggQoGW3HpDNtwVcaB9Y5eurnyUavsE2R3WVxmcAAu5HmcmbRvA9bp68yq",
  "key16": "3gQEUXEnUtdJ6EZYeQo4HkSn1S5j1MEcWvn8E9MtWcYZyAFNo8g89t2EW85CtLSvfmUtAQ2oDAAwixiTthUjch2N",
  "key17": "ujWvEF7YMPYbLgs3ALkCHWXkgpw1UmCmM2BLv8v9VVUWtL9e2BM1HstVrKafxrR4pzWpHukVFadkspnfvbhepmx",
  "key18": "VZ8HwtQXVuWjLz6CyRcaQ2VUZh1aURPmQr447SRj9UnPNP49tDMrrYYuaKAiuD3Zmw8bWvosENkqhLKmzT7YvC5",
  "key19": "4k7um2CqEK44wao67Gf1U9YCTTuZED7YyQi1vXzzPgAK2sDEcPK6xkXgLbgqAwoEKtyxr3iq7kU8nGcF8nmMVtm3",
  "key20": "3KABQT1EsMf6C94XGKwd6LqemTGBVe7xbYxDA3W2y2u6NJyewM2vYPpXVn9MTFGh6sG7rUHnVga4KMVaoYFWU8aN",
  "key21": "A1ab4rxYDv8BBMQAHvAfssNYGn7Uxw1yuxf1ALTtHC2e3MSFdCzkWYcHCy2Vnf2EF7cvrjQ5tYcz6WsVKXPKUqv",
  "key22": "2b6XpVbyVTqxrth2asYsumUdvi8akL8m6TohjTEwjGSYqd2AopSpD9j1PQQRVAdgAkj3NgCBQ5RULQgYATnLq6Nv",
  "key23": "5fm7NB8iXfRKcLx6cfEuHxBGwAS2kmKsGmjhtaofAnJSynwnMuj7rwsodokjfHyYkDmCquy482Qa87g6mxPKtarZ",
  "key24": "5SYrj5NvMgoAvseMP5TX3UNARkRuE2ssxpR4xycq8wcwiXjEtZ7q8UnJvnyUbH3rsTBd92LHJYegecdtrZSunBN7",
  "key25": "39655PLr99oLyKzxTjbhCrvF8QPXTWoSTWL9AVQ2gy81X8ffHnLwUc5cTT53TeKAc2j6KmzRvARyhLZfQtQBkb3T",
  "key26": "YkAY9ExiHPHKdGsjVcLGAMjXA4hTVrt7RRUHXNenRu8z7b7VeHuufmc7fZXBhVWQHwC6YPMvCFDSqMXzmp8p8Eo",
  "key27": "5nVv9DFayA3sNUKPCgcXhyAxbqKwcub1adhdrKg9hcx9ttJvRYME1FpS4xKdopPuxPTnmMGJ8FSXRdQbYhpqJdAk",
  "key28": "43Vgvy6TDbtCQEjrKvRXM1pkDjuLeAxPX1UxAd3GyKNZAqahvhWLRe7wxNeAYdhfXMGts638zoahGapBfnCZpw3P",
  "key29": "4WpkY4k3dStjTXjnXnukWBtPUmEmuFbATPD9W5WmcktDEAUkvLcBzhqgC2kZRWVEAEbkTWK7ZrHiFftC4jhJBHKk"
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

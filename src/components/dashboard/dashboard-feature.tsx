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
    "2dJft3hwdYytnYuHr51o2aDRP49iNKWzPW1SG7gVTUTbBPX8RfGgyaxDzYJnaBP1BMyL9hAxyGjxFYSQRkQ6YzAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXsaAP19DrQALm7VYcwPjnThK7B62t2BctR3jNMVMbv7A1AD2PEz9LDQ1upB8vAYD8sC53LpREyo9CxPAxH5VZt",
  "key1": "C4d6MCmfbAsQtpw4UcWzfCnkk6xwyzzZL4YEYaPHqxS11DPrTJi6UShmVHP3CV9dUEQv7iRAs368kyv5CuB6aYj",
  "key2": "R8WCgxNHxwMnB5Hw46TgayKPPmd2wJHNdgjY3J1oEVUMbbShPrywHyhAN4stD4T2zKYoSUBtjBkK7JdUgiW29CC",
  "key3": "bBTuuJaUqGNt4MJqTtPGXMeTvHJMfZFe1V1ZpE4C4JdER9Vi9AePnpLJV2d6AU5qqkvXW2J6FZGYhSKC824wTXK",
  "key4": "33TnYsEeKMzqyf913Ucvw2ybicQJYZKVtHTa36565M9HeXZDw1Y9Kwv4DwoEcMiTSq2oPYeAJdCmbaLfoDrjVhMg",
  "key5": "3tFpryVrbwXa7gQh9LRjL9oxJSQCocfq1PKNLcn8K5XLbNDM5ETQ7JjXreMyjgGVcuNwyhtf1RHuckfPYMnFmXVd",
  "key6": "4PmLUED7xjzVc5kiA7heNx8HnfcRsyLLUmKjAh12JrerTYGJstWLXQRd6HwcJqDkbZnJy9Euz6neSYAPVPTiwNou",
  "key7": "2fffjfP7tiS46w4UkavQR4AKnfhs3v2rRbozbFJm4p8GsSFhRwaVeSr5BDawgEqhEDxjViLWNrEkHGtAF5Q74ggy",
  "key8": "p8R6n3BpedagHPi9tpCbnqW6hDS2nCY6VMYCEWKWcgy9SAorrFXpCrFUkEn7BTsrCF3DYAej8xSVgWRNQcGXxsc",
  "key9": "nqha7QZT9La8P1g9ouBXyeMr3y5qmavSTUQ1xyXSYNEqPPAxLkBE5ZDYsqKREqrjtb7gDX21Roxq58Jy1juDLkK",
  "key10": "5erx1emiMskaBPyKj5tNAnXyq63HEz68qBFZCT1jMHbmNfj3J8ZMp9ej4gJuXj9UD8V8WoNqw5sLuMXZDB2zTfs7",
  "key11": "4JHdTuguRHXaoSxgLYQDk1oyKxRCRnod34D7DqHTYQcJQVBvSMFHj8Ez5U2VrptbRhN8UdSDqQHkVKQBZyg2hk9F",
  "key12": "2KfY7awQEb8ywUD55qFDxYGpDNmVd1VXNv31jnnA1R4ddhGdUA2c8ikK2bnFfNa9R4gfwp79Y7igbUFjpYRWcqeR",
  "key13": "4gtcjojmUTtgVPxr9sW8e74jbftQq1TmjH1z4WAH6VzvJK5B7gLCaUkbu1ZzCWi5sc9pJ5CwtoCh8TZ1Hfn4r2tg",
  "key14": "5WphwyeQyMVFfFFDiubSCzocpicdcEhNAfHD2Gb1oedDxcTrKGMQfNfzeRGGs3PuZPYrs8n4uzh9QK1AcGXAo83P",
  "key15": "5JxhvbFfbd2mR9xAveSGpvfr36WZZXGVn7QhonZq2JeRwDeBBzy588pLtDYM1WLbYfHa3gQo9kn7SGHru7gD99si",
  "key16": "sGyC1wboyXoUiFJcCdYyf6CBVqzW9w1MKco9XtD29R2z8N5CpwyRoqTNeuSmaJPWJX16rB8Jcq3JLm6uixcQqfd",
  "key17": "3XnQ4EcrpPZWN7epWr6TWsnn13qKBx9gZZs9vR2dkeugQZcXYc5YHKFJMhHX7suPZLisjcFiHUoPxoMfJFwVHpN4",
  "key18": "F4oHj2Zke3j1pyDnk2hsYrGGPA9pt3zQ5qeNEWXnDyR4SkhM4nBdRdQepbbZih5Ct9jkzZ8LFJAzXBZsTE1ES6b",
  "key19": "3We6pSZPqxZC7KpVY4ax8V1tu12cGytS2pT2sN5mr9C8CHfEEi7VLX468wUt3NHLrAkvDbo9nc3Dj1JaMR5ZRm8g",
  "key20": "5Hab7Y65V2GSCd4JCfA1Q7kupanobsj91yMPj9jTqBKsYYQtqnaYUJrTvqST25AdHy3eT4RSG7jN8Yn9FMRPRQMW",
  "key21": "4nAVm3dVNXzrKJoTnfb2G8CbKeh8fKtBv3NLLfg4w3bszZWrMUozs6WKxhEnmYqLEeXB5xXgip855gufaeXA7Mon",
  "key22": "41XtXJhvBChV4rQ8VvZPoTV6wWvqqYSwfRss9WAtVLkhxrvwVBZSAbf5LJMgvM6pcns9p4szgawAN3ZxWGah2Y4b",
  "key23": "2yob23oBYZG8mSxL9X8yPmVj7zWCa6nHyR8MWxatMcVEY4Ln7VUxJTUksE69SqXW2ZnbDWS35XqignYvmDjRzcS2",
  "key24": "vUgHPgNLsswo5rLg5QwMwWQ8qFtWvhMHwGTpjEQW3y8pXt6opNBLaJNyLRhpvVgjHwAPppbzuyN3rsvR6vZoCap",
  "key25": "2rzC4Dq2q36gZBevghPC8hb2qTzu8gKdFms3gicdtUHnJ7qz1s8M2KoV3bmfUv6t3iW3ueMQPcv3FGqPeC3uRHvp",
  "key26": "4WGPv4h8G7u3NegdUqrpAnENA6XeASNKmBJ5VjTYWvWdctqgc7LfUPpBwUSA4PqYTEnHcjaLW4BwWaEjgibFqkKp",
  "key27": "62au5mmRZy8bKHNjgTVY1VPKS9YJ8pnxiWejVAtW1UqTHwMWsarpgAPKitRKDcJeVkoskAWZJq49d1hqnfZ8N7Zf",
  "key28": "xPKhpNiFQasSJHM4w6A5Mbrxp3kUGSo2SzsPPCWT1L2CpG131wAw4jNsXrtVY7QQRMHbWxi49ooZ3vonGzHsAYp",
  "key29": "3SPXBnwDzcc6ZJdHc5ZadvsWLe4TEaWKJqf3HfzX3DP1a3VjGyeo18FtB7Lor1HaPHaiTqtK8MLyqbsKZB1ATszB",
  "key30": "5vXH9XSkG7yfa3ncHBynicMmaQQvEw4ZRYXTVRpjLHFgg3Qfoypoxn6DZnxKgTKYNDEq15cF9k2tWB913LhNtuhA",
  "key31": "5wrDvqvA78RqeiNofbPs9V8MfgTEH38QDzCXUCdfqUb9YVerPQPXMf8WPyFEsprgWE5CpmHJifjGVochQh1z2F3q",
  "key32": "2jDhcZNWzSJabKjoZr8QiFNEVTGv7XtkbKoKi7AZRETs5EBHU7yvgjPEYwzb7xvB2anki5tGr4TmX6ukEPkCopKS",
  "key33": "5nZuoofMzGmzDUFDgqHqkRr8KoGU7TBgbt7yqnPwh4CprbEFVN57aFzUEhx9HjXzydbBphJLXYS1EueohWSAQxbr",
  "key34": "56qCbDnnZfhJm5XYUi9raqC2MZFtQfik3BHdP8mH66c4vVshoiBw42RyfL2X5RiAwxP5w8Y2UyRwMgnbhWcLwsgs",
  "key35": "3CWA2Z9pyN1wfrdLrcu5FAUH5ax8a5F3UnKZBJvpUtwwoHi3X1tcwUNHghTrja5ZNDnHXWdwKjT79gWpQpprovsM",
  "key36": "HVsSv13SmL9nwNtdEEYgxSjdrsfqz12mHc7jQsjCR5wrz5WUDaz4YzeWYUy5P9EWnXKahr3WTzWRDQtcqSckxhi",
  "key37": "Q6qhPtU7QABKg3ZhTSFrJkaM5snuGBUs3G2xK2WfoPc76GPE4GbdAyDuKsHDZzuvfZ6X1BP4vWbVKyGTPkQXnr1",
  "key38": "3b4mJy48S2SoMjTxhssJVfu4edMgAGCRokrfaR3tbfqLXxSwywgcpCzjdGEBuR6EEf9HeJ437642xmkiBJiAw4GQ",
  "key39": "4mCbtda2JYtuAN5AXycRJuB8BQEYb2tS2ydQaTepRD61iLN8Dfgzy7itij9LdNwicmSLwx3TQdHbkeGkyZcPqUvR",
  "key40": "YMQCN3xKKwU1pGi7C7hoCTBsHp9nmQD8LkDgQsAeAyhCZkyoz5Yi5Xno8dzH7bSWfQdm5iEaF7Sah33RjupV3TK",
  "key41": "5JMTx3wpZDEZoyf1RpeaSxB9WXvaqqXgNdawfiSxCHUB9ibMEsPy8SzZeHyD4Kp1MMhQrQLycUuiY6b46b6B8o3C",
  "key42": "eczDAEmyJpL5WUs5xvu36woiASfssyove4mRhfQjn5ihvrt7E4d2cZqHeTF5VYeFSRmAu5XxyXfYEKTTP8PZVqH",
  "key43": "2tCcKtD4xYg1B2f8WwZXRGEV6dM8bY5VxiZUumtPJEHbUjVRcXyGCfGQiiuW3RZm6jSf4VTzpvS2JiU4yE1yu5Fx",
  "key44": "2Nx5G6LYZ3QfqZ6cmhoHsibsrNHDqMz7mmgDbZQsnpSZu5ThN78sh87A9mRd4Pdt6be9vDhh3BuLHDsHJ1HLd8aQ"
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

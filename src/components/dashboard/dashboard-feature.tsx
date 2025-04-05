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
    "5MukU86c3F3yS5xsss7qToQSZuw6zbm86iMhcTEUjv69KexRV3j67pZDTJiy7ci68hHRzJLdKBD95Dy8UHc6TyXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjaR8CuBP66HFBasevwPYEYXkBsXsWuGxqDC9Tj25VwxA13zC5Adq2f5VJAVUtD8cGoKN3kGvCP2JgQxqJJU1PA",
  "key1": "25rNGkYeGxxQKrx7CmDHvFp7NpMZ23CzahaTXPcSsFQa2BKpJgi5KQ85taUGSeZw6oC2bqEj33rZpnFT6x8WzrSd",
  "key2": "5aTp4fC62MzxyNFvZh2YMKaJ1TWqsLhj74tGrsEMFxmvTaDokNVjbGjoRxNKoT7Cm36N6qJpAjpcHCgCUFxUf8Rk",
  "key3": "PEU9iLDfJ7n7fiRLsFnSePqNteXYPgLzmxxEycnER3k7Yz9wXMwJnS6o4DtiD6VM4TTbBAzKtfg7vjeuo4zgJwC",
  "key4": "28rrjRMt2aYUpc1VxbPiMhwKPTyBygqcBbqqu47q9wAZDGdJ4wk5PvWr56tXGx9WH1e2YNJFfrT2GDfBD7y9HYTP",
  "key5": "5AKjrA5dWkNRBakrXZf436XCCf9Ad162DDB9GTS68DqSZu5qLniSMpiiFmW9qPgpCcLbMpnAsawnEb2BJktwCkWj",
  "key6": "3wNnkpYWVN9xnDDbFYDd518Dt2ZtaU3pch59uSVZiuNRZ7Sqs82AsEvUqQxbdCS1KA94kXkffpbgzNdFALrdhjdQ",
  "key7": "2RygFui6Jkw3xZcyToR2EBXBWZPGzgn6Ptzqej1kXMYiHGuRMcagiPjxBBuDcW6h7YRnd3oKUEhMLdYbZJfXMnJa",
  "key8": "379vG3LH4XPZYic8eX4HGkE6mNWLYXT17KjJDmx3LZYcUgJt23erK4NTus6iRjmfXSqvfV7S962rhDtUjRVoY5o5",
  "key9": "3jyS5ANbRreagR8MQfKk8sfJ4VmXJnrVbd2YqWSD79g2PC4wXkrFXHQYkHA3GHo8wvNmak4ArnDyMH4wccWmpBNt",
  "key10": "3YtptESbBhbbSZeTWT21cKKhxjiC7t1bBsE6xx6Twr393DFt9aef1ViXzXmsf6DyFwrwQBtKwwwHu1ypyDraFpv9",
  "key11": "2T5ptAz8hKLoGp9Gp2LP6b9fX3fcXbHTncUBQ9TcQKJ17MSLszcd8iWWBVvd56YhsuXsvCn94FRHxzzmNS9bvv1b",
  "key12": "4CXJXNWvDtjAbugnu84muodqee47ai4vwnorNXErKLTMxo3EagK8DXSUf97wYeoaXVBrrqtHgCePky5s6RSADv2G",
  "key13": "3WmFjCgxp19knVv24daKBZC8CFF7TRPv1YpsmCd5vggUukfntbc6tgkGbSmWbQQYHN1oHpP7RpanbtD64TauMCHc",
  "key14": "5qsUzVsfUvkPkDGaGzAEV6oPkm56LyE3mexchkf9suxeyzZ8GPnUw1YP9dJFEnktuqhp9LkQAWs9Dip4sEbYMHgW",
  "key15": "3GU8LiXW2Rkp6Ti585pAFGosXsLwS2qaZm1qaQ4ukiHFEq4qaoHvFWXLdRkeD852MEP6xZuKaAAnEjhrpg98VT8H",
  "key16": "2aTtGzrGeeZzqLk4sEFmf1ribrabc6cxe6SDMJCFWBSY1yPiHp9qGou4V7NfJX4zAvDArirsm9JNQUerbhzJ4qQ5",
  "key17": "U9CsQJ6jUj8tRUyBmQsTXUQVGBaVeeDTdHEdeZdZrimPA4k1MwqPcogKBEJV3mkCKbdVnhamK1NNz6SEAymCumb",
  "key18": "62Mfi3QfpMQy5TdQcEG5cC3iujq1kwtoAy6ZsWjtyyXiGgUN2Yp454HDzJrGJfGse3vtKUUVpqT4xQs2yibTdhUi",
  "key19": "C51vHBZAj95Jpqts35hx8H3geujfcXJusR7eV5yfQMfaCC6hgoXW1RGY7D1eqShAaZHQrCwLq9LtdK9KCU8y1ME",
  "key20": "2FjYKKQ2rBC74m2dJa589GZg2oM86KocPEg6bmEdm7ZrcbPdv3JpY6urH4gc2LYnJfxgEYbBf8JHmKR9aoDYoCQy",
  "key21": "Cjz597rCgBvGbVnEABMkmRE4etGvbTUkoftyTCNpwcXxsoqahzPK5GAV146ykAhGAX2BxSznbYDs6moEo5xkK3x",
  "key22": "4zYhvUkz7fKDTAX2zm43AnxeyHnvDCufpRBgP88CxuigSQcLQkDWDvFv28HFASda2cfiyQBHu3CwKjoMBcr3KKZe",
  "key23": "3xRtWfGskkSKKkYDNQm72iwrXzK5LMR1AEnNac2Tuxre6M6ujrKzJt5ke879YnJRPPPVYzRLWTA5jhxHt9DaETYb",
  "key24": "YzvduHMfZN5EgMAxEfiiM1K8Y3baRUYHEWYhNuL54s56fQYqqGttAUMXwNxCPNXdLqV8MxtW2GZiB3rpnBR7xSx",
  "key25": "brycZewZTqweEuXbFPc2Zy12Myce6RqqmT6dciDPcfaa6CmK2AxgA5S85WHJVaYwUpxWDX5FFSFr9qL8V43XmLN",
  "key26": "424rfM7wYZrtL6cDZQtNLLpdjHNbcPgovKEDJjwAi6FEQ4rcMpZi2YSyXBv2hEaVYkzTWmbs8o4gm4efNJX4EKY9",
  "key27": "3QqQUW8RKAtowN4dYFrcJ12aBMx3xbqrdT789aMEkX2iXo3qjh2UDbEmFpesN4zPYKdD7i3bVZRSvza13mxD97HE",
  "key28": "wBpx6k13fsZn1i34yeF12rRzsS2mo9JeTvBFbbfdbLBccN2zaKfRRK9qq4uvcNdfUmeWwSu6W5FRDSYfTnihEwz",
  "key29": "5kvoNNJ71xvDTqttuCrbomzTwcZH5yLZmvRkBV8fvkzrMEujpMJqpYeLQ79LFnSLmo2PGBMQeJBp8ZAffLyTB6Yz",
  "key30": "3dr8sAhB4xsQrYNZ9gRcYEpjPo2XW93yt1hZar7n38vr3BASRENtQQXAwS7pQGWgTw7nz94oQmjzS1i4KTa6VdaR",
  "key31": "3iMEqQAGxffrP5SJSQJPiyXCfTNvzVA4G6PSDCdosb4hFRdZvgEpM7t8pYvp3HjsrZ6N9ELQTeSsT41d2E2kojyR",
  "key32": "3McNyrUxrXpwwYHBgUXJhjvVDgS4w24rnkBUGwUKRg2NzosmodWNn6Jhm2cFBbRcFnRJc8ynYVYXmtSrActDeyAG",
  "key33": "4BPcSnDaWqKmesUtb8VgWLtS5g6zc1Nk6BKPBXeLFZ1yXziPtTineHiMqgnrJKQVaZWjtFKG4npikC6a8uKrX6XB"
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

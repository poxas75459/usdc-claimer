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
    "3mXPb3EUdYFojynJJhrdxCH8r8EqjfeyDHvbbBhSuE7Msvh59pLWaPMvjcdWWyi5DWo9majHyBqtbWEXAzSAXdGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HVpmz1dkVAD9g4w9eMLtKuEwaDg3cY73SSdkiysqzmBWrAejYzu9uPK8srrVqTyapjzLPxojvofmqZFM9y4enne",
  "key1": "vACissofWb4jVPTGcASCH6yVruwQPb2g2nUwPkXAAfKiuq9w9WCy3pdhQPxGUoBDDiTHH9ZWgXDgfCy4KQ1yXj6",
  "key2": "2wkNnCpP61KmpMAc8yKHCHLsnbNpnaFwn5yz4tdAx3Gdo3YgrfFt7iLr14K8EYtR6Mx15H8jzmsyJa4GdaZKmGGn",
  "key3": "2hhiwJ45XShtafJKZAn1Q7ppSMDgfKC2KRvxX75wXVQXfFrc2fwXpbh4G5iVh1DKgQNRW7WdAKwjMbacqDNhNdtz",
  "key4": "34eXshfVM6Az9AYD4P6XUsi2cMQjnwKAVHpT3nBWR6drZyu2TA7gxREPmqMrGA883pFXYbBnnrzxzDE88XAzMmYy",
  "key5": "492d8Ro4ZhL4L5J99zt7bEbxPABC5VWPAg7gSYfaP6Mtqu8gb1pWbD1jmAz99igqJcuPQREgrnoGeySjMcP2UYYz",
  "key6": "39LxTtLUdQkC2n8NgUU8aaqdamk34QM1pAuxhzFMmKMpR8GwxFMPfY8ChUy4YXkFom6GAcmXgpvPbVFV59PwRrUr",
  "key7": "4e4RxiuWVoYUtzMZns6SYysw9jBVSZvrtRsdUHt3ywaaS5RSXhGABnrRxWr9H4DGktKTqWZJ1W5xHThfoMfSXFhx",
  "key8": "5QpTyJBeEt5Yh1ruRtkVAc9eyqAjDwU8QdGTcKinwgJMNc49kuWDuwsexBPpo5s5XAyC15kjPZo2UHhYmRGUgefY",
  "key9": "3bjzz7RTKD7m5nRdgXH6AsUCqX69TvCJFiKdQEmPK1NqyWe3zghHZkahMRxtGjswW7m2Dy19J2kEGbrk6SA1PaxJ",
  "key10": "51e3U4iRWSqv3DMaEdzoKbVK295LZU3LfsV2FP5m4BwNP8F8uWM6vUwV5vFzPZvvpPXsurQLfWvHBix2REvkY7z1",
  "key11": "24wuP3Ber36ZMUmE23b5L79yqiiMYRYuaYS7jnqwvQBLPDw79tKNuVTjM2J46QApYTHHmEdS7YoreW9qHPNHU1yx",
  "key12": "4VaAC5MgndJyTx5FphdF6ruwZCWgjePJhCLamnuwxGPDccv9htyByVfoTWfBgvHMfzcCAP1rhn9LjvRGTEGU9HTX",
  "key13": "5HLcjdZzsSgSaeVK6PDWYCJPcRLQcDFT3K8G9r9uSyuGGKhzLLUWKikiRHVxuxMJcPtXKEaFaJnwNJ3tdPrxzgcq",
  "key14": "5xKUNmdX7jXs4WeG3EgQneSYedugGbDqQ7KNB6ZVoXh5X1y7syRS7XGhrgWmUMAAp3UfwLVdcoB5veSG2k1gxqwo",
  "key15": "2saKabgokEiihUhxRwoe6spKBw6pv7cjM792HUD9nr59iTet1ApPiSrL1CyYJLPGCnsiqgSwfB8Ek9WEjJrhaA4p",
  "key16": "4Bim5xW3CzvvpKZ64xmuHoQaYVU5NnxZdoDW83SkPhGQn1wyoVFUDZGK8Kox1YKfbDNTtLQ1tid1G2PVFB28BYfH",
  "key17": "3k5MvEsveEnPTYmKdVKwKLDvJVSRW6W1RSNVpqJi1cF9ZLM95sqTaDSGGRgYXKSkui4Am6LXWoo7VSQqdhMDw6oG",
  "key18": "47MtTvnWrqrAtBDhgxJgjazd8nP2acBwNsfAuYtr6WtcSTjpvAP72mmeLNAzbAbHUyVJLHtPo6ApSZrtDaBRHKau",
  "key19": "5tirkR4X26TTiBrJf21Y7R8ChCCTNtESzXAY2Zs5gMxCeWy8jWaTMuMmJXgAxyQ5Gw5e7c8Z1o5JakDtycS4nES5",
  "key20": "E7nx8kaQXixRLgmBcqBg7Wv5vsiu5sAzsSFrFXTyXiM8sQseUv5Cu6RX6QJwBDHKaa5NSHBxBRgvRqej15tw9Q3",
  "key21": "5i3se1qFERceR3gwATZjGr6wiyp8yEJaYXH87cLkNt6tx3TWSWMmnekebJuT9ifjwoycbyBSGD9phvMn39BZgYJH",
  "key22": "2bM14oaJ9ZNt755d11aqmmE3JTs417kGc5TngLqWFeTgN2xEwsuj3iYrPQMaHojH3whQKG7AuBjDo6dQ26fKEDyh",
  "key23": "36rLd9kwKF6V8MR5bFub5Bjb8FYPEPwYCzpRhVThRXJmyC3PdDLYSbevCBnygueWbFntPqy9gqZgSYyeuJdLEvR7",
  "key24": "5eTgdLHbMWHp3dnPuNtMJwUNVBABV4WNYmTc99TThBVwTsBSKZehK4sRML4i6WPyuUD1BGjVX2uqEAcxJREiqk5P",
  "key25": "2ntYM2u1C4KmwdqMowZMLHu591oEF4gimRo3mtytdFY6L6pfNoMEyj6wUevaxa3Mrajj4QqFspxcK1yMhbMqZnvH",
  "key26": "4KWsrdEx3REuQYKht2UMqkkkNScu6hSvkSXswbhvkLzMxjuj4vzEUX9HQ22V7BBj8AZuWndEX4V6fsp4LAxzcRw9",
  "key27": "59ijwB5mGvKUZXrNut38xGRK63LvXRFs99CLmUCDQMBf8VsK3ieNTMBmD9cvLezMHchEyXxRUBTk8uEDjoLZQbCN",
  "key28": "5CQ1aE5rpAAn9fbHppToS5zy6v6FDNFDu3sMy8kjQtieuP7L2hd5GD77yYJDzpm1yQCJ5Nb3jKCt1f2rEpfKwjKr"
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

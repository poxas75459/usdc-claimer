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
    "3iwtApHzsuuZ3yaijh8ZmaGR4kGeT93EdcQyhymVb9WLECtWguFskzzKYtA4CfJ1mpzum5JGWGQ21SafkMRTG1mV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zjtp1jNCnx9hgZXvvzskwfDQnxQJrQvRPTaojqxUDjJ8THuQx8c79NQuZSoAR5Zun76jv2yijvn5CTMfScPyGd",
  "key1": "4fwq53PdsUAHQw974ehpabGKAAPoWyVc5jAXVGGR5j8rAkY9EXEn3ddD1iELWyjLrmMJSUGPP2CBgFE8uXEaiRJy",
  "key2": "4c5azKDEFK5NsUAgpzY6SnooJRv3RLtytwKKLGHopdHASVkLFToMDGTAqJkULmxgd3WEfRzSRHjXFTWcVL22aEao",
  "key3": "3fqiwX9pkfrvf6xAhhvMHE6kQL4BnTPViL7KgVqy1yTYujmF4MWeBwSy8qvojaJyWFF7qpoZ2zC87DdKo7kJLa6j",
  "key4": "64S9jcVnRR2YsCaGmn6AqoYd2wMBc3BnhRZrC3SVhqBVSKReDvvxfyaXunw5Jvx5XkktyFevxPaPYHWa5Dx7HUyV",
  "key5": "3sYSiHhFbJjFxyHv8bftRkS4BMqhPHT3PNZsVj5LuRmkyBm3xbnnXLVqxfJ3yKo2DgHewtHZe2Mudn7XtDBsAEno",
  "key6": "MZ5yeyHNtt9f5Mp9H7uQNHrfDGNjdVUCdiUMtffbCLkNDBN4MfQKMDYLzRFHvJaAoYbJn9dV1Qs1KvL6BiFECQv",
  "key7": "nLxAYPnG5uzaQxSFiHHqxotqnPJBqVm44S73XWUUTvq8pVsjPSFejCYoVyN7hNQYsppFmGNq71YHkt414J146QA",
  "key8": "2c6mGkr4u8Rkq89VowKjC7EwXvKNZZ5Z5XHX1pfDYFWcq77ewU9DhPXEseyysDeTWT4pmkaZAEMR5yf9KY6stiFu",
  "key9": "3TYiRU9AaoKVM6zuyKxtMAtbYiSAoGhSxxxduVW3Dk7wrqFuDitHZKXcB56ikbLfAMiDMeBhuxf9UBgwoiQwksF2",
  "key10": "5rBeBGqPR8XaSF8FfhxGo8XoaD8mjhJ866LSs7XqVCtZnNjibdmkpGjYAN3F19fBs7FYsHpdTnZYDhMymW5Anzw8",
  "key11": "5zihtg8LdArS8CWCpFPVP94mcKJ9U45Xh9JjS3qfoMoQ2Mauba72eyvfqgkcW6q6UKPcab9JB1hbzY5GkBSREE8R",
  "key12": "5S3SeZs9LnjMa4VPcrXtHgUpoN5gqGpLEbHNHU8cDK3UYXYBTpSPpxxiyFYggNZL12yHrdKkqAqTvMExrvdF5R4v",
  "key13": "2wrd3GjhFeFsdyA4YArYjpqScE15SjPU6RMJCVyYLMXTPgRh7sLBoU3XmYVSnj5QVgiUmdoYucfjnxyvCCBBJxsk",
  "key14": "3BUT6oibA9S8KUq1R8QjXCMbxt4KxA5voJRkkxoBWgeHC7ZiH6JhsLdQ1XiTxqTEUsDWeAaK5MT492HVmZxtVFCR",
  "key15": "3SHNLrQeoLKLPviuxSxpA2m9bvSGVTgvTtznyUbmZHdB55m7WV6bxJDa6ZWb4o8X4RkXFBiRUYXoCnY1KKsMXvZQ",
  "key16": "gBchoyHaXZicxeUdi3N2ATUYwNY3yMx7UkMX8hGy3FZ6CXxD2zJ9jBuiJaz3aQR7wb9JRNhpGjHt74xqQxWkyEb",
  "key17": "2zUPXkrXNeiTFYGEo1mEVjQp4q3z4Y6aGNWbLN7dqCMgLu9EWoxpr9ZzA29Z5zk2GvB1HPQZUwswubWdPFjqsGnL",
  "key18": "58JCts6ZGu8aPFiHkxHjWWeexh9bxep8Eog1hBDYibBQm7phtzbeMj6SDGisCLE9iD4Lo4ggCehsfTXTwsgVUozN",
  "key19": "3nBboXc2jcqas1GNm8g8ER72TeE7wEUbvAgM4nQ15iszEkoFP2k1ihUV4d8zR5ySgu66Fvw2WBkY2kHvhhQaknyc",
  "key20": "mUy43UGh72TVAPwKr8G1AZN7fXKN4HCCtoPtAzwUVEuwqG2txMaT9SCgDWpdj5qHqgSd3LnfhFaofBCzASRw1Hn",
  "key21": "5QuJnvzAuxoZ443puGGwrkcvvL3TcV5LXNn4qeG5qUaPZgbAvbCDCFbqQ1DX2M3RyoyFNMtYt8ZfqhHxv24jHAct",
  "key22": "M4CTeK7HTqgJ5VnCxHv3H1XitJPDnjMMCWTuEJ5be8ZaTrBTDNnMCRXG57mX9grNSUiMhBnjUL2zsK3tVnR1sKz",
  "key23": "5deXxzJK2mxE7CUhp6BDuiSA7mB4nUuAhd7caU79K6divdBcE8j6CHmsokMuFdRws1nZkHS9naxrTn8Pcf4dVanv",
  "key24": "2vw2yyV1X3u8cDbHbSz27AgWtnFGepTydG2TbF9c4nJReSyhYtGZfbouzHFhjJLbUMEY7rkostg4816xxfQxL544",
  "key25": "5aqCqAFNtLdCDHuE9W8UrLaQsSVTqUcQHbzxzTXp7h48ynSnoxT56Lsj6w1GJa1EDW9tEFBu9R5gZrYnBbe9YNkN",
  "key26": "wRcp8a9GzFtmVkbYLimK4Sdkyz6Wo6ED4iVuML2enFPfpXrjXe1vx8B1mkbFuSuC2oiHsYUdpaPWwhYkKjB3UuF",
  "key27": "mW4xKwrt4XDTGG5e3nBAWFH43uXCfx8QrmVHDbD5vXmDXJ5wsnpv2F3gRfG2d7MqJrWBWedBN579A6bt2USAPHz",
  "key28": "2uVf7CEqCkzSDoGZq8i896oosU732hANNE4E72bkh8fgYwdhXFACmUDmRnFU9QypTNAZCtj99jR6UzEQyw7hCJGU",
  "key29": "3eGMF6w7c9kBSDX1zM37tgeq8jzisYaZFAeUMEoeBaCh5po2L6Mx6rdQ9UEFVFgsLqZnXvt1NjnouTFudumSXVCP",
  "key30": "5StjNrk9c8FpX9Pwnc8dXp8zY4Kj3tiwzCT7ay5fRSZmxf9evGA8eyRLCcD6mXMc6SPMbaVx2GUFPLqdGHWxKkaB",
  "key31": "5JzNJaBC6iVWhowZPkGYpAJiT598fR7faPUiQDzyAUvuQcy1vBNvQykhoHb9qLzEQVUHtgtKGvtoH15drz5He91"
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

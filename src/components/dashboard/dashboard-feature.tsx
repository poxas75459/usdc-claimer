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
    "3o6m8cuejbuLnfYgzwpXY6tcNzAX3kw4xToJcWCFGXNYaF1KzHpah3M2zgRBSwgYZG3XzFYDoW37GNKbNFkQMegn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dCGMpSvJG9kdRvXLnxxyT66eoDXnDhm272cVtvuBFeRFbx9VHDRr3bB6eBwid3EjAi2RaTgacVVD5qrPYVnVZZN",
  "key1": "5UXd976eMb4rxjAeYVUkX1N9KgqZTwJ7zGs2Gwfm4Z2dfxiH6wnK8CUGqKcu7axrHFksGcW73mK1Xqhp5vUgjmaB",
  "key2": "5er2XuyU7Sf3g7qBCCsW2uUkfGhBNxsikCBRChZCLGRb5dgsfZ9Vthqpk22Q6XAEiJBJZ9ijRnhnLZwJzWwcUcv",
  "key3": "76rHqQx2sEUtwtWFV26PUkg2Y3eHZAdbd5KrHbvPTupTNQw6mnXWeEGyzo6bi7TUX6ZFW7LHf5RC5zBvj6Auw9b",
  "key4": "ppJpqjv69d6Pn5XfgihXXvGW5tP9DceGF3P7mQuSMCaf4ErdbXuPmLF8aNXUjrVFahh9h2nrVLEbc4eB1Yfpbby",
  "key5": "GDPstda9rX94uJUzvfKKganSyrpBKrp6qMPanZXGoYqLcfkY1METk5H5GjFzdWoBzBtNAUn2uQiZW1jMLzD3KHK",
  "key6": "376Y7fqAnYujZjKCT21NVPqN4WbfoJLr82QWgYEiiBsugt4y6WHYPUDQ9p8xzVZzJp1AHjuiVoiRrSteEpujNwKf",
  "key7": "2LV7PpavZ58P668LbJYZWBaUB1MbF9oqxDMibHRVkKsERFmyDSQcsUhhFM3ZKLKgWD5ByUtKRyhKkc2CvZj1T8ov",
  "key8": "3WdWXcog2dfBnQuFVNoLvyPEtQvffe9NtCfPC81VBFe7AUubcBw2pB7yjxdrGgm98vA2c3BCNZpdi6fdojwTbsWX",
  "key9": "3ZrEdk2U9YZna6UCkBn5zAQ9bKmsEwzEwM2bSjvRTjo8iZN2YWnrmfzQpwRAafHnPKSVREesEGFK8BwZSF3fEeFd",
  "key10": "3biAMsg4hQmNNfooJis9iHvexGuMpi9CSeC4EEmsqZb2Ck7yQJPSPH4YqinHqFqBmyA6oEqrCnvMghgkZPjd9b1y",
  "key11": "273QG8WcU16MG4VbNxXWfSj1oBX5CwmVQodMj2bMbbhqCSj1UDsVB4yV6Jssm5L1ubwvQ8DKuZAossSVnpGUGSUg",
  "key12": "5Zy3P6vJbJwSpsw4cN1LACKEmRk83HRgYhUUh51QFF6nbKoYQaFfkDjscKpzSbdZKUqu6HtKYSbLYnofhX9UNxqD",
  "key13": "5q5x14Bsxyf9upGxpnYFwhG4J58pbs5JyDcobeKFEXDqBxzB8et4fc1mwAYXznEgz3jTXbKL4XN8ctnw7WF2zm1d",
  "key14": "4UjVEUCUSjBdstCYj5WYVne5ofKJT7ZvcZRgbpTEQ8tUJ2wpeQhh86xE2j9R6mBEKdVyv8JeZiETMEqskDs6RLc8",
  "key15": "nHG1TdnDcFA4D27656aURVJJGzAgfnmTsDJsqyNJiHHYCn2gnuRirketwou9ftpc5esdRsh5gXHFxGSCsqHasm6",
  "key16": "P3otvX7Tz7bB3FhDQPCfgV6vVXa6PGNksX7c7TirFWkS6QTvZjN9abWcxzwcx8w2SKfiKTvWU3ZVteRFesc61GY",
  "key17": "56XuEnVGGYQ4Hbo32fVhFhDRK4TAb7VJZKT91SW85uGF318wasqy9dFEi7wLkmbsTpfqZ1MwJiKc27AU3E2W1W8P",
  "key18": "wJPpsLypnx58KsQ756W4NTdNs9rbZnkqw85KAidMDNqKWE74aKYntMLvBGfzqFThAFc3JH4UmxSinUxY2uRUiP6",
  "key19": "qa5VU6J2h4h4jjMxsQBabPbSRxGMJbEsBXEEANJMQG9Ty2yeD3cjWeXAWeG7HSknN9svZj95QRr6becq5aXZiyv",
  "key20": "4avkdjiLZuHHVkZjosQM1xSsVWe2rqc55oUaFttgNoc649sNzgVCL1iLYjyofyRuJJSryk8zWbn24KBDfb7JjKPf",
  "key21": "27th9DGz9ZRTX6k9YCS7suCmyZGasUx4uCvrh6NZBNYPUYVeVjFzQneDh5nitWzPLUcyqjdbAYD7GPTi6jemE8cv",
  "key22": "3jG1Rfq3ykeFhKWgSL2S7w1e7SWgFdVDuZ7xu58tkAauxqWsJbmK6nSW1TrBVsgsyi4LZTMp8DHxti5RNaTA7Kwi",
  "key23": "4pHCjrV8mxgjLosPxUp1Pa9nQMkRQUzGhq2UJm9kWJxuKWPh6Kf6QE8QnT1AfVLVtrkorvhKynWhd4KvYcwuAVMa",
  "key24": "3MLazuDLzqDPHLj3529DNwNxed45Ab9U6o4ZW4DZnU2jt4gMHkXv1jaAdq1oyMLgYBfnhk4bK9uVkPSe36rY6iHk",
  "key25": "49cCm9xqkkgXY9Y8NnjTLsJYHuATHS8LFZa86omZZoy8egaeE2znvaSKve3TCXLnUgqHVgj7scQBDSmWSHS9aTbd",
  "key26": "61Z3UcbFSzPQwwMmPMHPBmrtJN1zfhPHaSKFvAmZqt8RrKsDidWtortJ7HagxFEfU5rXzWtnVHDVX3XUuzvzEPKf"
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

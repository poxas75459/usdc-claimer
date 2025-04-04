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
    "3TTn5jonDgbebvXWBDDuBamDST6hc3AvHQMUrDLnkmqHtpkMMyWYg7YWmdCmySCXcq8vVxPTrAGHVkv1YuZJcVvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W4nacWNa36q7Gb6v6YXDgpVsKS4oA6TkZQPdsHpWtAEkNdWobxDL5MrmtJWggzYs7YA63m4fAgmtkQZjvyX3rNK",
  "key1": "633EC3euvyPKU1YLXo9NMEvGUU6pmpFSUd2CbTYrakKyM1TEbHKY1XNjvMhUxPECr9xzsYMWzgA23C4MqJ78btyA",
  "key2": "5uaD3gvhmfNt5edrgztTNxctzHVF7bby5QNdkx67rw1bEZy6pfLcKpTEgTqcHNFMEP4y7Hb36yUnMC7i6K6NLdbD",
  "key3": "3A75L7wG5VENBZmjxriiA8UBMaToWMrkLVNuuMvGwr8wdqtfYr2X2y7QMcB1GEB7CPNLHvbyKcc83ktU3omWNrHf",
  "key4": "qrWz9SvbRn7sJUY4zdFtzBq6WhKUeDK7PntdRi7LWfWFHT433gXRWtoSN1NL5yVKfpgUs1AKPYegUfXX5JoW2Cy",
  "key5": "49Q1fEgizGCkq7ogPhcze6vorsYvQrBD5rqwcbRn79sMWBKYs3KA9zsyt1whPUwv8YyK8puT7x9r88rwD9PmRn16",
  "key6": "3sBXfSijh4SnoNFQ6bkERaMbg2TmGeujn9bqJSYYRXpuvb5GjEWWnRWLmCzAbcqyL9rUvxeaiZY5tnfCkU3qZQNn",
  "key7": "2QgKQixRjWXxMqeNDQ3zeb4PDKyeDcKnycEMHGXAxn5upgzU3tMP3HKMviPG5JCMeJbq6JMAL2JRVxbbLz2WHg1y",
  "key8": "HcVoFHEhRVS2vHHWnXLgi1xmtLRhF1Ji3U1zsDrcqWkAZGnrndMh13LV43mfagVtiwufTirLZvtMdeWgi12nVXu",
  "key9": "2oGpeMSNdZnMMghxMwVEzuXSeQPzHqBrBkUFCUSuMvHFtmjsrQRGZRnJF1Yp1cZsVgvnuQKKwWMoAYB5EAQczEPV",
  "key10": "4bBxsYg8YKqar1bq4zdPRePzWoMAdi6gLfLoiYVCAfPHn999QzJ2v5H5KwP3RtjiLMsqQm9VnUzXwmH1VagJ8avM",
  "key11": "2JU2YaStyQYXZgeo7SWY4bpHAbFcDZGyVaCRKcpr7cNwV5DWXCsFSqxUtSA79zzHxRrq3mioJZByumAUS3bsCah7",
  "key12": "5o1D6VbK8eKKEDaaSGSXsus3P3imK2mfdw7kjjtKzhYcwACyjf2jjxXQtupS5qn37Cjqpqc2MQFRNoAox34hw2hh",
  "key13": "3gMM4qnUDKainmiTEBnVFkMh5YGR8egv5yXRMAsjLSB7tE5U9NLudf9t4p5gm1a51CnwThWsWtcmtguWeX9XcAvD",
  "key14": "4GjhQY59DA7DtdeCwTtNstt3EkrQZPVrenUj5hnCRXyuwBCXpifMGhdnovzuc4GgLQcxaNwP5bEuf2GA1YPuxUz2",
  "key15": "5DW2WzHwCk6jdKkN9pU9sciVPiD8q1WtRTADEJi99BZte5TEqEcDWiNMngY2nrxJbf9X6UtfSjwwyhBWG3RTZXwr",
  "key16": "5VpHe8sMd7y57gBwmeDt6xE9K3JufvsD2BNoQbcPLcivmWrVawEsNSF3eRdVeYzo5hwKtf7unBVqj3kU4CXbiRAo",
  "key17": "4b92ro6ckGfgNHzxezS2V9YUrbynqeLke1Rwh418ndGrPjeDdfdvSGTxLdtqcyWbmXDXVXgvw8uNsN8pH1VJgsay",
  "key18": "39Py6qNq9g5ui2dK9ZtZYRMCRPo72B6ZvULrZnF5eMcKrzG9AZajKi67JkSv3RtpKnWRoTWks5eoXPWNNgvhrj6a",
  "key19": "4vY9BZjqwp1ki1H7WpjK8a8jytrsunf5dFVsGMmQgQJQJkWufMNMMcf72QXJn9qK59rvE4jaKJGdJePdpY1zU7WG",
  "key20": "43x418LA2pUkD5DXWsb5BLrWQWeNA7Aan8ZevPFGaLJ13wUuZv3tRqZLmNvCjRq5qfjrcWt4a9qiQCKZwkX5exu3",
  "key21": "2pHhukqYm1MgAFYANhDQNGsyBM3Y55vgnKW3paCNTzvRzAWJ4R85J6j9bWkLsD64rH2K1BxK6woHZPJYDEF7cbZD",
  "key22": "5DBCVmT5Q3uRRRVtgYyUEBB8DhVgKmAugc1Dw7DVHhXkFWMoSMaW6DpYgFoNt19QypcM3CHGY6ipWwCC3GK4iUDf",
  "key23": "5UH5VaYqnPh7wNFMEhEdCVQ44E2N7WGjCbFBcUJVFswa9RFW4psc4EXfGqZG9RgRL1KU4oHJPhEpYJNZKHKLjT2n",
  "key24": "4U4Bx5fcMC9GgxD5SS1LJiFSPZU4k9qXQKF3s7xfvMN3KKAB6W9UnZeMbS83WSd2vdsSakaacDqNVQQmTJUCH5C7",
  "key25": "5EyF4gXcK7dbYFSL4oz5ZPwrHs4vp1R9KxmHPvCFasPTew5PezN3pTRJHoV1fS8aDqH4zWzx13pRH47fiwUJgoCn",
  "key26": "6r96QFAi6T8cqCeDG664N7pvdovk5fUCbs8bPn1qRF4sG7SNfWuAC7dCp2akzYfjQimLaA7Nf5R18Zvr3kbVHGp"
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

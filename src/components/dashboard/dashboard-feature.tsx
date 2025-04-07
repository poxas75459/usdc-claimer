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
    "5bg63F5Pxgak3a9U67A6QVL33xRdEi1Ysciqyg247H8aQoKZHt9Bno9aGWdcedgEc7v7k7nvWHC8brvXZcMq9Txd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58WB7C9CbDimrE9wU9Sbjwr6jSrfkY8eak9H8P9c1ArP4MB3qvLQRdkNQBh9bJteRmfqoqVhrXYqb2yw5GrJwhJN",
  "key1": "3ppL6cFP6eL4XakxDnv83qJCTztJvNKkSLEJZuzEz8g8Dzv6SAnXzrGXv7iFbkcoTEzANgM1zVw2Q18ohZKv8CTG",
  "key2": "3G5dVCE1hkMmC2fJAzYkqu7BhBEhphhXncLQK31LLgFBgxhNCP4T7Mg45sAjoPguUUFkcdDa6RFcZmo9NtZVcJqb",
  "key3": "yHfY9QodnRrasvLN7Jq1RkfEWLEYseptJKHQgrbUj5v5oK513rS1DoBETi4cnEWP8Xec2RJnZncJsoXfgLry4zg",
  "key4": "5Ef9qaqSo96UugFRvVhm8C5esMWKHETP1ESLmEfZSpP7pAEg8RE6ZK3wGJZctRhHFp1whATxKuxCs7yPc5mqgYcd",
  "key5": "2hZy1uoABL2L5q2yFRVX4YEck9JYPQJhtKuDxjQjhxXdUE7nQgMMFhTuThggzHbaBkNQ9o3oqX2TLosWoA7vDaA1",
  "key6": "236LibqHnMLagZdpnRSbZUFj8PVUofaCxC1o8mYxe9fgcFDXY3dhuzHEJCh8vxFi8fP6qBYfWj8aJ9mRmMJNhZVq",
  "key7": "2nppmvDvYLrcEcojPQ2n8rm8qiCZaewGYDUfUrt4bknHXBSis9bLSKtSjuZQfm5Hmymi5gdSFhVUv3aWHJcEsoo",
  "key8": "5X2CbKQdELwDNeAnohFQeTAerb1Kqa9b7muAAQeDfw51RM96KbgSM1oQJgw2Y1nCz2QgxXixFLWcsszXi88uUP3q",
  "key9": "5eK9XKDA9fzboLNc1daQvNdvQw6oC7uq1ru4DrRqi7zSPXSkVD4USEjEWJw4iLkg9XYSPTCuZykkrqz7gzY2ArcQ",
  "key10": "4iQ3L7tDYoQtGnMKzW1cMSErjsrumRMccEf8fZJ3SZkjTJifNRMzNdrX5oPcrf79K7byKivPgEV8EGFjxLvvAtGV",
  "key11": "2KtN7CyGrmGz3vify7rHgKutx7DSDbzzToYKvHyty8T9okMzqxnFSYNeLjZgTmyBVnKs3hhZgwBKgPgUTHDaafbq",
  "key12": "2YNVHdSA94TA1wz6EfoR1Noqw2Ytjncy4EoyRn3Wt78XpH9HqSvBQmK6M3mrnuUqwLkD4QCweJc12j3nuRE4DuB5",
  "key13": "2AxgGcnAcasDqSxm57mkM2HJZ1oHa8sLSm6w8pBtmnELdAhCB26jYZ3Pch5rSocShJTiRs371nwJT4jqiKSC3YLT",
  "key14": "3MWqiMmyCmXMyDh3Hn4JGRjetiSw5GsCJqFqAC2c7wdoW6mmKwzcJZTPCGLxKsJRh4dkqBhgQz9JUaN3G7TPz3yK",
  "key15": "4LLidsR34zjSuL7BQWD2ZXKQDmYjGdzLapHQ1ydJ1gUXF3kkSgyTWtNjuqNi2gubjaGS8EGV69EjAxbERtNeMG2W",
  "key16": "31dDGWEGxi8bDJQXLyeKy8gU6MyDueWt4kRFjt371KuQJLKUsbjVe5yzvk7y8Rx4jxmn5sYsfgMmj4esR2SBzYE8",
  "key17": "3P1MfQMsQmSnRELJaAihANsJ1eJ6qvHeDmoh3V5mYsiq28URRUmi7eHfmjRtty6pjrnKPvNrkzjGng2hFCfmUWae",
  "key18": "5pHqqvKGsdh6RJV31iZ8Chd2eGje65Dd1qdr1WKhpsLsp1muQBWJcUGAjAdTzKuQ2sRHeJ9EyniB7F7eee48vBK5",
  "key19": "5AUjcFfErhaojehEhNiycA4WfWktcp7s2VEsh6ftxCo23q8HQd9DWXo2zdJuQFkGEUJRAPCBS5GiPT5p7VQG8JjB",
  "key20": "5RRB1rSRPZKwxYvq2f3w3Bx9yFbGkPnrXWyVi3NtZHdrYMJjYHUuy8j5WmHKimma5Hs8T2M3E2g6qhHjtMra5kAV",
  "key21": "5pCbrLmHZmuXiTY79tMeUvxSYgZpboq2LoccbrYhKUgvxN3nRQNjgjK6VY3H9wKm2kQSTgyc3rVmr384TEWvr9qy",
  "key22": "gWjmQ1j6HMNKnxNPcNbkB29qi46AszRNBv4DLpkgz3cZRUCXsikJMdknEzZoR6n3PEQ3XiAUrRrnPsQYzrKLbqy",
  "key23": "2fmQkhaaJuaJ9axHoTKo3jptZZGVvA6iUAj7DT3qne4aYDgQ9YUDtBTp9YJGwM4XCS7RMxLcJnMPtcjx8yisb9wJ",
  "key24": "39o2KZceiSeAxSxm1diCSiBocSZbhjNehjQyR9chFb7SvwMwYDkUiSuaF68L5tcAWHtqcqnArfKf7JQRKr7pLfiB",
  "key25": "VYN55Qiq7xRUV36zivcVu1MS2N36SgotoSreYNu81X7FGj5eKgJRC5HzXmwWka7VovyvoNGAdZWoPKwJPjeUBqE",
  "key26": "3jcLX4336wmtgZvDTHv6yPcDKxpKhqMF3aRiB4z2zD5JKVAepB9enH1CFvDE4qtV8YhXHSUPkMeqQoqwWVcgtuy2",
  "key27": "9L9nnnp8EzXtAScqstbMVZ92sYDzw8EMZhVZZwzoMbCNUkMeLuLtAD4XXvru6mQ2xCfff4wshA9Zp3kAjkShxhH",
  "key28": "574XaWsmvEmTTo9AaDPfoaWvVP8gY565zjcypCi5h4qD6YWtbSWwbWCmx6LDyUVEm7158HjMbo2zGi9uSnnAzqDk"
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

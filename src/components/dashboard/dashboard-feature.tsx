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
    "4yjWWAuGzRdwZ3pttA4XNrkAUcZazJEBykssSbFmua5KJtKXFQsCPEE1v9JqvNDdmpebb6wFqMD3hzmG3b6ZmmaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24kjvSWrPWRRTwgWbpyREdbNEshdpZHPFP9oGrSKYgJFz5628MTSC9CmjGkb3wZVohq9GJMJjaFpoYePvL28n96K",
  "key1": "2aRfuj2d7xVFPh8K6ZFh5LJ4NT5sP4qwAPzREMnGaBRMfLuhoWcjm3vpmWSi83yVpdCMWqyw72yaoqMw2sJGhn4A",
  "key2": "45a6o2LMvxZ4uExDA8m2TXjxmoRtcn4rQcFj5rMK4xWez5T8aoDGtzYgRBkSzRat9uxmLE8ooYaz79se5mgVqFhL",
  "key3": "5NbwG9B2UM8ruMt2wpC396HiLsjdmRs98uioj56L8ygXK3jCsYjLTtYwETnJd7bLi6Mmzq6PZQgXLNowcMv3zTza",
  "key4": "3HkqsswsQTaXnLBW1WTo79tMSFxbn4bLTKjW6Rhr2mdtj7GQBu19Ugb58DL5Y1FELMjWhdvFRgLBBj479BBHCd9z",
  "key5": "4xh6dfGBWtcau4sWvVj4fWk8vvWagkHeJtJU2PT7innGGQdJbiHsUY8375GjKer9RkVxQW1ciD8MS7HCzhkdmaAH",
  "key6": "225PqWLPnB1vmG4h8fzAdKK3tgVpKMbzLwqr437LrRpeqY8GDXmnm6F1FmtHu25JosD6XJxYgnX1tLu2Ba61Rxit",
  "key7": "2jbPTrNmNWTA8ARhQATeYNfFmqJJHYSzheycdzoZAN12Ho9ZgkPHi4NbAsnedaPgay6RXkAoxXrckPr1sDTS9LFV",
  "key8": "2tD6dNbSNsKnnb7rnvAk23yedwzDQ2dK1vip893fqgtLaHgXKt3F9PPy3ajhDTBfqvr1KyqCzg1inJYAyFdcDaFZ",
  "key9": "5Y68z2ULxFeqMGQ1cct7PLtzQZEaXzSugx2fWBstL8MErE7RffSFMKxJfMRk4Lv8Um5omqMeonPT1BWTSVDmFj3b",
  "key10": "4QUeo6XEqhrok2Fdm1BiX4zApthM6TRHvFfymXMtkx6oAengPCTkZasg1EznyJdjLnoGLgP5MzdEuXQxZ3mPWSLq",
  "key11": "61YQj1KrZWEWFWuRLTP2nfa6qP4ZmmvHymyqEMqPjGm8cG3WaD7qvsnqZD7swNZUSZ52jTTS32HSTxqmxZNSgcHy",
  "key12": "4rJ1eWB6ev8BS7Pf7L4KVnFCVBewxPLTpcNNGiZSyFWqM6hm7qVtEz5KgB8GMA7xCTnx5ykFd44x8txA1eVg8f4A",
  "key13": "4J1GPaiDuiMzZ3ETK8noiiWrnntWkn3Fd1CDAApUV8pvDwnWnnapn6BmCfhJi8rq8ZhmRkttV94NEfw2cERCPrzJ",
  "key14": "3eWrMmjegEeJfkjSoFu7ndM13pRg58ffC9siMbpForKXUEx5ryJgDZX4D5f4LjfLRSm88ea11eVPEVQigL8SQZ1H",
  "key15": "RJa26p8PRJwZ2pzjwkMVjyDfaw5d5M77Z4248FwDvp2LvvRTsMTZhuHm9eqkejaWsZ8fSKWDWe4azeGkdQvsf8o",
  "key16": "4z9x72ZbUhuwpzTrgjmy7Brmzdj9egY2PLjfnGcPaPqMbcwMsRHVhg2Nd7UadqwB6ieXU9MCsYEWWkYd4sLycZyw",
  "key17": "37PQgZTaubPDEJb4CLwnf9FQakBySq7FJaEyW3YTzAvjWxxVbDNhQdMsKsUWHQshgodrEvnTjDbebSd9kT2e8Um4",
  "key18": "4Ds1F4igLmQcXpvB6Wsp4o9nNARLsnrYC2pML8wStp6mCywEf77sNrqcezEUQ6LSvUMiTHtXGqDSn1dUpCgw9BMd",
  "key19": "2FrqMcLiE2bBtCtatdTkwqxXPV6CZfvrLUut1M1dakoXosQVqqhweSjHU3XJixhE6pSZdSJS3JY7yevdcD7HPkfH",
  "key20": "5o4dgtvUzHHfecZbXPJJJxmcMahH46JiyjTbdsGKz6WybGQVzmoNj9S5C4tf4GdPme3AZ8wDxJPiNWSXEhwEnBuJ",
  "key21": "3eudwYZeLnGNYWrb5HVSTLjDtPbqCytJsCvUFB2Aqo8iaxaWXDnnKzjjcLy8Frnaf3fn3AtCRXV8r1az1eHsZGaA",
  "key22": "5E2AZLCNaiaBWaZK8VLsYS9dneu4Z2xugDTwP1hJtteC8LHGQCPG7KGreXJrzppCNpaM2zkpSyoW2bF1hPy83fck",
  "key23": "4RsjAxMCqY1cV5HX5ZJcekkHz8945HDXxSnXxPh4JiSdPnRrkVdzz4TJHxZZfACkLcYWMsNfD2xY6QzLSFHesc4P",
  "key24": "iTJG7jAcHGvXKZ6gR7Pgj3ydihVtroD1qAVzDdnQaUWv9k1ExBE5dUfWnHZ5egp1mJX47CKPmyVm6FcxTkgddnx",
  "key25": "2EzimQ78cdicMC5JFZSXur1wZBev96pPi6oWa3cxby5apw4EEL2cahsNjRBxBifsgzJb4631EJQ2PiCxq33dxiHi",
  "key26": "3XqyS8UvcjcqQp6BiJXyC3NYPqSRt1fX5nPXerxhiRqNLzfYTv5UL9DKx5wNZqzLtQSzhoTF1Rw98ocH4Y6GgzsR",
  "key27": "4PiAenbXa3GyYdXR8UjFbdDNpQryKFxdPrcYRGwVWRuXW22TPgh29o3oyAdGzHVK1AgTNivFtyjbxi8uib7j2HHL",
  "key28": "2GRWMeGet5VSKReHcbCRuUS6BNVjYpFQ1GZeJXEnsCbZGX73QsBy8zNCa8BeQaM58MZ128erNY4M2NAYqQaZiezG",
  "key29": "5PDaxNL7LZXDuLtQfFKSV1rqxmywgmKHd8LkvG19Lrh7c27ouuwJtjYtcceqQgryKFVxLWW4no7BnNse3mDgXcHk",
  "key30": "32CrvVv1gpqrpVxy6tXZn46WExFbChW6WSTnXVmAXLjdMyQbYbJAupDooXcCR8qAqZUhp1JJSQnaizj4yKpcgPe6"
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

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
    "5z1Y8Raj6chkFW5BAg7xJVWrChGt79nAsJy7rVyGC6FKvnERrfkc9Kpk4UMLw9rMb2tKkj8hr68EhQkekxWggbGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bDdUjs337Rp27L6WYSzquAHiZh8jRFCVhcEEKZqnboJakxgBLyTbz82qN6GmREfUu6ZoYnxhPt4wmHYqURAMpky",
  "key1": "56uLTMYkNwyrtiNF7GZJWroCaaDAXcehasxkFhQYKjXPyM98yTNTUhnV6TZVVmF4yMRroPsnqn9HCm5tKKPaJxgs",
  "key2": "MVZuhKBTNgXgvZ9Gk7jPqX2DnzHKM78JkreAoLxufNKhYi3YU4HZEUi8mckDe1yxVfShRPDMqXeb26jv8iHax3D",
  "key3": "5pJh435EXsq7jAyMarBAN1z8E8fUC3RpKCcFJ1fSCKBDUc8Ysq7MdRskTMjSve5nSSwqyKTP5ybK4rW5FhUuntQ9",
  "key4": "3MrASsVexPs7ij7mwoTRQb7vrBNkjNq7MhwyE5UTmhvPpy3DPpaAJRkkNZzG2t53E4LxPBY6Yx9ctaDrePotgjJo",
  "key5": "3w7NbmFnHjmTA6sEP4rTxrn7SuJAVCTH7Mdip49TRpLppo6mdpPKXvqJcoEytUkXS5K3jck7KoowwgppPoeCAx7R",
  "key6": "4Fs5FBdzbLEmiuSv7jVbA3QEPLNbg1jzU7ZrR8PZzfh4ibmxgbxxXahZGgzD7GNk43XWRxV6a3B6TX3wfAkvie22",
  "key7": "xZ8BqFtaYG89ruQsgSVH8gnTqhqDkCKZWGVec6JwMnEn99Wd9zCs3X1qu7JMHCXaLzfgU9YrSAHWbMW4NNTBNkt",
  "key8": "33SVQ1ryeYVExspva4TVWNgxoPoSpWTJ1nFGnrCUQ5cyUDSkDeHRRDCwj8XKydKgBCLKHpZEirdxAeMM1zW9fwUd",
  "key9": "2DUXTsXKHpU7FdQwSPxn3obpQqFpD1j54U2Z7qNsTXbdNDZ1Tiv37Szc5qhynMTg5z1QUaw1hJcjwpyqu3pA2CK8",
  "key10": "3yHsQtCbQVRRj3HxYyn7cA2bouUT5w6Xpjg19ggJFcgCeob97gLyiEWJJ1tjEMYCcA8Jdf8Bkq6pRvUTeSzFqpTs",
  "key11": "3RC15GtRdJWMfEgTQdLzFZnJv8BWpUQ7a91Czmse65g9LUve7VpNTshGtWBzzxQQuChAsmQT1GkzrKLjuuMwRwdQ",
  "key12": "51Mr74HPcSWBQrLrqV5aunkQzPpzGUzKhGdDDUsKfHVspD26TPfFkPWyUdmBigziYHoiqUFcztLLn1orT151rUX2",
  "key13": "3mxMZnwbnxg82Zvxqmyn6JQyeYG7Z4zgqpmDkyuMayHhCQNfVJD7rSZqqWm1zp7R9S2BxtpU8Sm9kZuPMdJ5XKG",
  "key14": "4dm2Ko39drb2bTPuAy2NDr3teQ9cQ5S2ikdfUGo1LFeDzxe9VSMZUgejULq1uNKKE4JC45nKkdRJsSLtc3HtDAmR",
  "key15": "W2FrZH4YGRs9E114eedtzvFxhTDdqWrZHjbhSoUPCceVEqDA3PjFEyKhipo41N4QJqpTz9didpgw7Xb9fxhSacS",
  "key16": "2byX5ke9JEu7Kgf7Bc2vw4M3wx4y2s1qdyf2QgRepF7tq4Z5WiJqPmTaSeqdCv6pm1cFKKLD6smByFfSBhWWGqFP",
  "key17": "3bYmcvXgjLASVGJ8VmvWyYZB1iDGim6rAPsxza6AFqBADzNVc98qXCRoQ4no4yozCVuJLauMH1jBVj3xfm9Ksy7r",
  "key18": "54oU9yJq8XxZ7ExjEqDMZXeB293SsFpvvjo9jMFfL5ULZu6WrqibWGpiLRkztrZNZzf2STrK3P4pbjQ8UZbzNCxb",
  "key19": "2qx4b9iXveyfpU8KB6FqsegwUUPKRPAAXRkxjFC7gwdNM8fhuCRn8W1XgCAe4tyr17n6RicFjdJkRVfsWkxeKSpD",
  "key20": "3oyLudV5rBy2AZBBdeoQpAuwiNutWqJ1QHSmfcdi31PoN7SC8Re4Ki8zxi7beYEYdEJTe954xznpChynpPu9vCt5",
  "key21": "2vLnjaZ9iTfsCnVC1dnSRXpcDhuULcpG2e6Puf896q1GRihiQ9BUW1mWLNBXuNjoNgWef2iy2yrWtuhdcRfDdJ6q",
  "key22": "2NbxFymB2XBzUnaXxEkVFpamMYTwbU3ZgyRTLRqJg9RqBUnEjNspiYxKXwJBiSP7A5o8giNV5t9PkyJSEi1qkt7z",
  "key23": "5YdDdKrabcfmjYA5N8VhcF5KRdG9DAEcgTQpMynUG199TFEhRvduhkJYqAddNEf24qvJyKZRxfC8uLVqiBU59uvw",
  "key24": "4Pe93jzWTsHkT5p1yLED2L4PMqHx7nnY1JEUgDtztrMKEWU8ekg8rmS3E9VMdnEX1gwrqR85G4BgGzSg9kEmfLkv",
  "key25": "33EC6qNsrmJrepCAQGZSAa7LJxnggXXQx57HopafhKRzcFvVvhQMrcTMJF61vj9KE4H2XD6PwtmWFcTHntXPEZwL",
  "key26": "3R3tVTyx5FkwSv6tnNg7yEGceSGUtYHMZftzhkGKgni4FB54SMNBAMp2iaK1qwoYnA7rPeR9rYZTgNnvXu1zRxJf",
  "key27": "4tZpsQVVTyMbAiUNVevLM7K2juHMVd8RJVSy6w1BcZ92mjYRamXWa5FxtnwJ1WLyrrADWNE9txeComS23u7pnoHG",
  "key28": "FKZZucstfXurtkWTZ4MG3zuQYCiEYJNNh7U9hnE4wP6xeYhSLjYFhu3tPeaJDqjvQ8ZBnFPYRMJYjkJUHLv2TrT",
  "key29": "4GPhmXhuDAvSjgkCPc3nGVwTAjhguE3GmrwRaDNeLeFyDSt6kcSmoJcMoaDs9fyvmqsU63CGUM7xTw3Syjm2gMBZ",
  "key30": "65d98TXLF6qeNnawe8LLYJRiwUVj2kdAWK8qXuRpJaP37drCZvjp3uvUDcnoLbBFBCeDAi8AQmsNVQcycgGZubWG",
  "key31": "3gwPn9ypJw9RhvbrH82EHyWSSte2TWGv5VfxcYeG9wsD577j4GLWY7vSCyinpR4A2CyD4GKGCZMmtYYikPgHFPi",
  "key32": "ocQq6dUA7f5qWNmCS93YRk9P9vtRKnhrHcuS9hcjrLgGgz7JqdeohKk7XH8zYuBJceDi1u1Mcypj4kpbTCsXSwC",
  "key33": "MSCgCzLBRmwDvjgWvn3qjbtGWAnjYWwicTNiE1w2H1TnkdRpWQE4Gjct8tx3vuAY6dTW8Yy8pJHPbmibb5cRMMD",
  "key34": "5cZWbzXENRVpR3kaVMcMjkndEEszygWewHFuN9KQx33HDDRXdcJfzFpGt6iSNHuqEtVM4PT2uKB8dMEsFXGmuhaP",
  "key35": "3z6hES1mLXEEaBv76ZqiQzyBMYByRBuD3Etd5HBLSQL91rpispkv6xyjWmZ1Ku8A1VMfgmPPRP9QuY22nQgtuThU",
  "key36": "5Gg32VbxzxDbDhZ3aNSoB93PWG3KFRmD4GLdGt6YXmjG4vUwMhBUqguF1dCFXNHcHrJeJWkTHdJr2JDFnMq2EEks",
  "key37": "5j6mVpz3wiLMp9Yjk9KGqDJSnLk5Sd2bPTLyhKGYcKfQH3Puqn1GZhqU5y76XzDxNkE15KNz66NbzXA38K2sxT2P"
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

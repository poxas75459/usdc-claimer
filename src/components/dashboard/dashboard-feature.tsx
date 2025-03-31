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
    "36CzV7iSt3JdJ6PnzgYqhYi8pZxYg7E8RSP1befLX8kuvaj7F48PGorkF3Y51124WSPiEAdibHUQVTgoPLFodviT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T4f1FF1T8KjtRmahvpAiXBj3oncnzCm25oyf4Xt2J5SvLd6YKCZv79tkXQqM6fQQMKWJ51wYMD6VxsCSkqTT7x5",
  "key1": "3VyboNs9ifAmkqQK9y5vMCYME6mVE6ffS6VQgZsMWcSxzUXpq9jMRvjh65AS3JE4oegmYDE2EeWj3CbUezyjYf9z",
  "key2": "2dGS4hWTTfqPWu9M38AoeyteareQdoKxTkFrGkPMtMsbAsyWgQdkoWsRU8aya26jwFCb5N4sEwREAL7LL9WVASUB",
  "key3": "yRDh9nfXSd6TFSuVgncKGH9uBbdF5zdXVokpEUGVVHneiEsUqDkG6mt86VHoyTMqvDc6zPNxrHjKBmemPBEjsTR",
  "key4": "2LEJ4xgxGYgMin1UHnKShU7wRWLJrznA8Y2CVey8Vsrdx2y68FYUgvcvbveJCmTaGh8osGK88VkRGyMsvrTTf9Zd",
  "key5": "5WYDqwLzVxAXAFVtLjUNinTQYf7c9TayqzeWdP7jAwgiSHP2Hx1zwR3tjos5YwULXBd6vZp2pXLErn1EUtCS66Fi",
  "key6": "2U6Bf4rMsyqCN3p8WEbmhCrKmzor5uRazcM9UMCNQzon87agxpTBfndhQDJ2CQWMnrZNA75JzkBMVyhYB4JfsS4C",
  "key7": "4WurgGyHDAcMFUs23Rr7imyVYBvzXyBiGs2zxG84YkNtntp7LqxhaopwAjz1wJfaKDJjJDFX8dTaywMiaqcgmyyi",
  "key8": "2V3xDuwaqYL4X2TZqqFFs4aVXNHdvBMKxQjbK4qPE3abP9atW2i6XQXPHkjUsutHHRpKQoH6LAy5FV6qmWHsZW2J",
  "key9": "itA9YpZXW1dEjFa9CmQj4RT2qYW2ANxjd4joLVjDz3T2wxAgehhEpeRq6QkqV5WxheZQxsgvMATGp3EydntYSq7",
  "key10": "4CwwBQj18RQh2viUHGsBoCGjG8hazVcEQpf4kwPZYXTnXxqJsGNxoyT9HQinR54EFrBe6EzmEXNPvV47CzniNXf4",
  "key11": "5JdW4KFnynShqUZicpKWb8juj5fTh5p1TqLX7b7Ldq3xaNK8H8mQWC8JUqX8eCfJuY79tiqisW9w2vw7S7UnWZTh",
  "key12": "4uhN1J9UvptNCMyS7F2ozwiPBJSvRRiiUjJy34toyo7JZyLHmZ6e1Y4raghkUbWW7c7cf52xBgbvErWDLADW5iEs",
  "key13": "5v99meBYWzYVEG1LBUknvL87LALCyuU15CsoWuweisHcxCj2PiS3nhUUkHB3gvQtzsYMi9WyfktayrnJLBi8pLDd",
  "key14": "3RDw3mWeiE8pvSpEQf6SHa8rL9NAaUgg5JpckbZYcSPRPSKYhSrY8xBYEQCRbgX9DwJG4iBA1Nq2sJQ7qc32jKwx",
  "key15": "4RxEnDqg36oBgkNjkRgKJVgaP2Vs8JMZT8Xaju1H7vAbagvTo8tN3jdsZip5eAKoXgoVm1x514d2srPiSpibLbGJ",
  "key16": "5E28k4puU7td6Rg2DsqnU7SYFq7sjkRRJXhmBXBtHtpiHgz3yxW2azGEcNzdmfHSXbdhANtume4ZHPBNXa64rrnC",
  "key17": "55VkABuEFZQWchJk87rSCr9bjvSteDBrYA5rpTTke4WywgMYZrEqrEEuedmXUyJMNZzrE1md71EvarfC4bFRWbfR",
  "key18": "2n7UsSg5vKYUrKJmW5NL71xDZocMRYBMeJqsvoG9ax1PowJKcTC1hU48iiiPp9yVQHXGZ1WgNFQ6nMMi4Jc5F45a",
  "key19": "3MxEcQiMvqygb2tGutPK3B5tfLWPEzPJ5n7PNC8jtSAjFMSumyzSn3xFQpeJiBKanZExwZVRJUET6iNidMf9GbeT",
  "key20": "3TSBsDaFR1acsaFZBFRchescJD5pSnbcm99seHGQ4m51YXxe1i39BRuctUJKQqfrRFMyPcgAf6mcBbjvRTZHRu4g",
  "key21": "3qMcLQ6AXrT1DE3GZoCjzRCFxSvSi98yj6AoEZzvSqsGxjhzmsgJBJ2wvCrEneYmdXwJaag6jKHgijUEbS233Hx3",
  "key22": "tpZERu2AEKAPVSPKNMNXydwcZrYKyZosTPTMtYfsGuHNGeShN5xpa6r89bBoxt3K2HF9x7x9co4gEDzEniathPd",
  "key23": "2tfPeWsYYTXwbU5DfTPwmwbLPkxrnQCK7HHHLsjP7g7rthUGvMTDQzWkHEBNBVDAq41zkf3SJb2K6zgmRN4ncnbN",
  "key24": "V4zdN19CAUCrkCdfNcfgfcbujE5XgCDouLv3msHkvZ4JAmb1EQGTyj7pS4e5ePJCfE5KEPduZtWuzCHRqVx677U",
  "key25": "2F936GVErzFwdaE1tVQQJYm5Ge21FE5hftYngep6zMeZCt3B5NpJ9Ce62xN1nn1CZbpNacPazt7EHnm9KMh4dbvd",
  "key26": "31u4Y3WzQxUzHTM85FmThPWsXt3S41D5pAPjkFhtWmrY9bHsbymF9rZU1X68LUWe7ExZ2xmd8C7ZWmDKAUD6eNGw",
  "key27": "1iFTEEub9bkLVf11kphZBdnJwKccpLjdoktGMetgW9SS8mZA6hHPSkTs1jjphfwC7UYqZkoNt9cznK2GpBzuBuG",
  "key28": "2XSzUEwPef1VZD4Ed66d5GCU2QsFxXW1j1SKr8UqhYGCnVjB71tmiQhDT7MNf6MWr7rjt8TgeEthfsTNUhxsChTX",
  "key29": "3BmrwWsZe9h39UYdtBffFPCMMA3y6R6phhj3z6VXvJ953XS3gmJYihSCDu9xUVByzLoyUpuKxkJE4gqEB8tsV8SW",
  "key30": "5FsR28WvJufADiTTKW9qM7R2Hb9aVMNLeKupAUoEuEW6oLxuoVkJU38NypHNHNonhTEAmK9TJH9nMzAKBeWwZmfj",
  "key31": "26Fttyk2K2WJAXqb5pv8JqLT8WQLiMgZHkRdMi4fbn8cxKmWi5LHziDrCSkD5pveybdwwr8vEbH23AnA8CkPWMK4",
  "key32": "4RToGQZM6nr1euuyAQoHzZipVTjf2rKeRQPeQBdMu9HDQFpk1fkqLfFNE2dtxfPYWUaV9KySumkpdSN1pAhwBw9u",
  "key33": "6G42kpMPkyTVpnmzVhhzbNeGhzkxK2PtNbTR2BPtaQVUHqiy9c11syaNugDFevKgfU9ndux3sZrnANJ7CMmfD6t",
  "key34": "4fWzmCJp94ghqA3MqHuoe6ngK1LjxUbZJ2GdNTsAeteb8pVGEQc5Lju9nwxyF7iZ2AdPnByqpCZ2hbRk3T76ggXs",
  "key35": "3zWhwDi9Dxbk6G1HQFS4ECP4BwSGLUiY1UWvjxqvPgT6RPtaZihHFPLp5UdLCvSe36HCfMzEwSttQXc5aqYyLyvR",
  "key36": "E9cyzLtBqz6ArCE2gS4FUXgXJevCm6HnMBkZ5MHUWA3zActksGa9FSmjbDXv9d3bkkLa1bRQSnaJffJNarofYPX",
  "key37": "Uf9gdGgJUdEpcNXX6E5BV8dzxjn6vLcnDSHUo9p9S9zUmZuMMm6M6yhzMqE8Ghz3MMpQsCz6JDz2xuMWzzWhaZf",
  "key38": "PYRrYTZz5RacAoDjAmrsAtnVxYFFGTkN2krYSnheGxbAW3WjWUvQ6pnaAg588P7PNierQh61xf9dPDXpi9JDPNE",
  "key39": "2D4kBQsuk33dP9xgQcbbzkjuDPBQUfd5pY3hY7JSUnyaH1p7m4A9LyxCDyoX6wKR6epi7djYfBeDnev24zW2AXRD",
  "key40": "BymH3EYr5UkX99GPMJVoT64UgsXfHRcT1gk4F37bNB5FG3gmbb46zsrzpT1RU8PzhzhYGGvVKWuHQ7MhtpztbEU"
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

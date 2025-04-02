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
    "67ocjM6pL8Hk6hwGYdtatwUrivYKEuMgbiL3z2ZidbuDqjCMPtaYKUyjojUNmdaBRLrqagVGx1viKxWfdB63rLv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRGJKYcNoDiK8bLbqovYXmZR1HPaoyY5gVpy1YyKiBwF4pPtNMh31QLoQEpfZvPYZUrJmCpcHxRCN838eZqcJYL",
  "key1": "5XHQhr5uvXxttVq9byWoJ3sPdhKn3AkDA87piq11GQizBwtC3zB76xM7CGLUE6QsSMcCvWB6Fsaj3fCgQeSWs89p",
  "key2": "Sfu988BHFqzgsWZLTeNvjFMtmUWgPBMMhbWqV4KkBhNRsWcspf4SxmppmRiXMByCzg3seDGB1WJpXpHvSTPKCQp",
  "key3": "4dQVV6Pe8Q2sgkVS5fy7vGc2uHCZ4ERUbwUTgPJ9BSAk4WavLVsJRBDNyM9AMs4GmiTCKDTBQqLgeVGgQkdpeWyW",
  "key4": "tAmZC54mQanyWrAvzbaBy9BgfhCTBv7A3THW5CWLpDHHrdAF5SmKVrbF8STrJNRku2z8pXePanUuNEdjZMB1UhN",
  "key5": "4FampKcHg5MvicKQdvaJ28RDUXbh2S148e3Nqh4cq9j9P17Tm7QF9a9ZcasPKj8vEkEMxnUY7ECUao3xfWRZMNG7",
  "key6": "2uEAdhb1a8SiNNifdcX1qCMTwKY9hyvyB1Yi7LEXkakiyzaFiopmVy4eHh5TWuQjzL1U4n9TMSoFmz6iKq7FD9RM",
  "key7": "4GgPiVbvwn7hBYx3VQHsMETHBRw7mPehuKFDbTs6C5MQBR1ZNDtfHF8PT6Kbv4HMRj5LtiCqH2wdN2DaHe2K7eMg",
  "key8": "2J9NxQwyZ6Jxp5iUiFo1Hk8psibXFrPJCLs8Qqmrd4BpdqxgHr6kJ3fjRht7fHbnFUCWsnyKovn2DJLT9zHJKWLy",
  "key9": "sYNPw9bVNagakT5DRL3Z1Vx8AgEaTP4mf4aoGEsNNRUG2vi9GpA3RZoqcyZHLkBr8iaxWFrpw6JnB3HEbBNaQip",
  "key10": "3eY16XfRNrJ3SpJhMSjCXJ1LErjtevQMJR8tvcJECP9LJjKUfCbMMW5ek9bi7HodjTCKvPn7JHTiZ2A55NN7rugt",
  "key11": "3hR95Dq37Q5RobNisN5dZU18jbPZTjhpQ41yUd5m3Ay2tsBYLLxmhrhTSf4L5PDMmFhuqCxMgiPQCcqUhYQ5dvcb",
  "key12": "2XRDb6xXV6D5TdguhDuRysKfB5rHJ3s7PDmB4zq3YW7USDPJsoPxgCPRMTcXeDJGumtLTrGDsYw3H5W6rsZMkN6y",
  "key13": "269yAHis1eM54onRdTZMrV9xJrx9AJgJZcnuhu1dTWLTgYv4K8oCexWL5KBURsqGPjzUfZzuQoq7zqk4tidW5SHv",
  "key14": "5sh4QL3LZLZDCJPX2gQFpUsM7EBUtUz3GWa8Qt8PS62JQBS1g6fXUYjJa7M2GAvCmECFyp1T9rkVR7X9oKfXp7Tg",
  "key15": "316xzt7XotvGRJLpEPKFZBv8PLZj8Buna4fTxbEt22tc2P7vaRoRi1NW1Yu6cs1NugERDExx1wE7eMHNBRYPE6iK",
  "key16": "3VR2Pjq2yyQdAJ7Usx5bNp6E5iYqWS4CVE5Gq5JfmZSp2gWsRJDRuNVY6nVC6sdEZEGNZJ6txzViLHvYTf99LCZr",
  "key17": "63fcpQLRiDFSqxRVtvErmSwuezyFgesNNQsFzzGF8vbVkLV99GsnBorzmD44R7nhkW2VwCc4Le9BD8EwKd2NWSvj",
  "key18": "9hZHMpXtRmURJSePCmzZCophBYcspsi62CRQch4wHgqJZEwaonZKvrNKafGWyAioVC2yPwjHYsycdjN9eBb7e23",
  "key19": "65G44YTv8K9HVvtgQe23FWyBQL8F3WSApymQoXmo6copXd5buMijVvzG46ShzEL15patnewBCok161Ts5uP36DeL",
  "key20": "23fQNQq7Xp4pWTaAPZp6jqwk14ippfWsPvT3j56BWPqP6DNLe8NPUDQphu45yhYV6EDTpYHfcn7z3pWnSXMKbSja",
  "key21": "2JHw9PHsqmsEHb8mZRtB2pV4H3E71vsUDvwS6ZD2WuMKJrp7DVUu7kafsEkVAEfBSwALbJnWhVT9WV6Yfym5cNNT",
  "key22": "5zhAiJ5Hs7mkdG7QfKuSub1GNCrpNM71AchHDHK4eiqtx8f4rG1GeKdw2jkbHAWN8nFS1bFqFg3G7c9B7Xwab45D",
  "key23": "N34C5HHYQbqa1tn1rPKjkU7CgnkgqoUUGfxk6xrZpx5FTehrymVgCEMpuoCDapzoVwk3BPnrH8M3QmSn8BLZLP1",
  "key24": "4zKzRG7ihuLcxoHHF1RE4ajjXNvTsy97A86T9ysuauw3RS3TLsptG89oYrpy3itGvdnmJSWxipspLeU1XRsKtXEh",
  "key25": "2FjWguCZmNP8xT7jjrXRTKcCG9hj4QxvFsiJvTrJtUCW313AzRcyRYBiG7fJt6QNjQ2hKwsapU9C8vEvBhTPqsQv",
  "key26": "4sw6cXGFS9GDrSM8p7EQTaj7sNxoDweZiKqy2bWMiqJsr8xD5txHmfQVGJ9i51wL2U1At6WiDTJGFVExbY2GA2tv",
  "key27": "5YKD5jCHxrngPSqidKC9FTKCUQ2Pg1J1t4h1cT8XdHt5RYsyxoVLVQ3nk5HQtU8SNBtDRAjc6z3YVGr4fGB1STaS",
  "key28": "4mEoWfck3kgHRrYJv9UhMjwFWEQXyjzqSoQxhREcTQBhTspNxLccQcborSPqYrcd3HT7NDbs9RKN4ugi4nN4qjFG",
  "key29": "55Qq57tz1uWvHyhGYhGFKTN2AnVwNTbRzcoMvrogy25AarKHCWgCkhA3Yahn1DWuHxAwNs7FMPWCiCr1HqDXw21Q",
  "key30": "n8jeba4GKsxYdJY1FUz88vCFeZcHRN88Epew1xWFHxUKfzLFMS7LDyKDYh1eubUSDrBwzfZLjJHQvieFAM1iESF",
  "key31": "FTnmUBxBu3RLyNWwNeBAeXRvFbpi2pgmFGNWK5zJoZZi3sFtb1zWB6i1J2zZZLQs9T8Gv9JmeaLZBCmvCf5c57q",
  "key32": "aNaAASpFC9Gg733zdRRm9u4pbQEJY6vaGJzyNg7WX7p16Wu9BzVafhh3Jo2TozRk52Nwz5hs1e9NEpop1iursQL",
  "key33": "cmb6bSG3BELvYJiP4JzG5Keu1thgCQZ4bJTvrthYxf4zGK1yi9Ws4TAqKXLjBzEt9kNs7FerHqUpLUJ73sVQkSX",
  "key34": "5sSXVjEuyJBDzJjNgvW1no78Ycx7s6RN3q2rCtPYpGDU45SPtnqJqsoEHiUHsVbKCuxpeENrPLwkF4E3zRX9ynUy",
  "key35": "3pTRhJ8mMDXP7QLYrNehmVmCsFBhPYUta2qFMtxAmKVJ6RafaMpXmdiZ2JpoK1Ya4xFFYvJ6Bb8cQBJVad7Jv4P8",
  "key36": "2ixQuSxmEjXbnDXugyBpjnL1CH8rrtfHbnmfnepML8JD3BRjiaNDf9Sj5S267BfHwohCbbCbi92WJVKX1c8Anmbh",
  "key37": "5XNH9QXcSjMrH6P6dU53dE4R3UnwL9g8ekiwBk43hP5nFiEjyVNSBDcMnTywpbTZ4F4SbLqcpkMZ9y4djfG48Ce6",
  "key38": "5vCqf79B39FvpqRSuNr89zZGDVszCF6h7bc7tWD89qYcTmrgWsfgy58Ahi434FujPHMLcpAy3s8Zt8FQRRiuh7hy",
  "key39": "2EKUcb4Q34UugoPeT6vA2yaUveBXitni7SAKPrMmCV7gs1ZLwyiH7qZLjzizyQ22MQEeKxAi45Y98MmJNAQrVZbK",
  "key40": "4P1YmjqhdPfpaTaKQThQDwX7DdtAWnHhXxvwd6Uz6dc7qf4QqRqeifdbHFgFyYcsdmYtqY47XckZs95V1gKkYHsy",
  "key41": "4skN1SnkLZ5kiFCxkRpSELDPr4md75ThrJSL2KFuZ66tPsK5q7DDLPHYBMULnhM5vJw2teymrkFX3uCaV6TywFPH",
  "key42": "64gnT68cgvkP9Rn9DTLAiFGxyYSYxtBSHrq8FvofWMUFRwHzdEfDVyP9oDH2Z7LkowZ49oq2Epnrp9TNkhALvScX"
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

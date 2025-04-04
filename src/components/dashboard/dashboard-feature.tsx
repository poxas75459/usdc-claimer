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
    "4coFYv4RLEFJ91NnXYinF6Cph1JQRGMryihNzoUQr6zLvR7A5Tkz7tF9jpNy5Upxn8jdjr7VStkEGKj8ZBMNGQ4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sj2vFhdeuscrARuhjxF6dwbEqZQYcYrcQDk2vSr6PW8t1bdPL7AqD79u38AvviUAjPNQmQQJ6T8ss8sCztnh3bL",
  "key1": "4yzEyUb3ebAYpajmeWdw1znvziEkDnLbAb1nXbcGyjduyhYnZoY77KrnCoNnysimY6PjiNu5eNVjbv8bQeHkLnHV",
  "key2": "4EdPQJtdZeUsrgLV4WV8SHokwu9JCQe6Hn6CLpmMwzF2nn1vZLHdvvhrt2BP3WijZmfq4QuMfJv1mTzssZeqo12T",
  "key3": "3GD5JoKzvmrdteTCPkmKhjFSsZdiwHfpWwaHpsjtGQfsgxbYM55S7sLhJiGQAUfToJcgJfm7NmreviiKT6EBcib5",
  "key4": "cTbgSP18HSQKqYoTA73qJ9Chd1vjrZXggLPwRmAegy5T87BC9hJ88U3vnv2hAZ7JiPqpC5UBQSWfR7nyFt8xLoZ",
  "key5": "48y8sjQ53GUaa4x7NJfU2NvJ9KQxwmgu3dxFVXZon4wMR3ajJ7b2FcRxNZAsTYajua6Ub4cRDXrpK6XL1BiMLigs",
  "key6": "2Ci6vPWuN89bk8kJbRoAZBya2nX9BTyanBkdKAXiD3QpyJgyeCSLz28RqW99A1hwkeuYxzKzV8BAxxWYRyAuAvwo",
  "key7": "4TzvobXfFd2EunA9MuWS6kJkUJ3N32RWSBXkeAxbeRLKqUBzvgVuFwHDqCwEadcLuCf6exqb8zjSH1GpfE8Vg1nV",
  "key8": "4NcpqPd4PnqSKpL8P32NUPKi78fbun2WvPBPAvVRtG4hiE5T6LyR9KkSHA6WzvyG7i3MvijtTasWWXXb3yhhGUi",
  "key9": "5rriWzeTTSqtrbuc4XQyVXr81pdNCaxtzEeMSobgHZ2sru7bQwKRmJ5pqPz5kpeNmeowegKPpUGx3KGMebr4D4a3",
  "key10": "NvsVAbhX52uPup4WyD39D1MZFNAn9asnzBkhMcipKknqBf2tbs3RxjAKoFgjrKKGFY24VrvqDiY2huNGeDmVpq7",
  "key11": "3rdtrpa9shegGs8MQBsn2ocV419BwZoFvqNQ88658ituBYpcMnRBPg59QkBbjUYswv1HXsActcFdtUYNjtoHp9No",
  "key12": "2WLBbTwyRJojGEduvvmPofmr7oqp9nhFYMhD5jwEE7roVU7ADX3Pmfgx23cooA9i9N8NfjA7Ezn17xLSxTG8ZZAt",
  "key13": "2PU7mZ5zdn5iVqZCBy4UFXStQtfSFhSqYo9ZBx69jwCFmYi1dfBjmx42N1HufnmcS6ryzHjpQEb31oviGN6MYcGx",
  "key14": "4DUWya4rLEabnQUyRehz7k1rw75Gi9eBjCYU58NDMKr41iczB7w9H2f8Rp6oZNLWeznXR63Bc5yr6v4tKqUTfPhu",
  "key15": "4gXiLeiStU6Su4EH1m2Z71P8FRkAzeexUE7jcfoBnL36TPQVgYJL9RDocAWSdu4AsXYfautCDTap2ZLBKCqxM49E",
  "key16": "ZMJDQJ2UvbHamNhtfeDGNo8tS5EEZFCDup3wAyoGYftNFZ41oYAeB9uXxrXG4B1SYBgoMcFKkXqcdo4yGGFgmGs",
  "key17": "59eHbsnVFsjQ5KwUKwkgSqEUKfsDMyqn88KMsECRLr3LdsGumDvMQiTUKNqzDybNoLNfxeTqqDUMrE55bj9iEBv9",
  "key18": "iCnkpMVXSvzAxenuXGNduBhTB76NFAubhARhpkwrvod4TBtvEBDQWbZJmS4vAt1uxHQ27sH8XkMQyspVSNQCiZh",
  "key19": "nUakqbcAC4Hf5HKfJux5FL4d1QD1wkYN5XmHzkCdzAp8vbJqxjCUu9ZTgrCWyTRRRuMLRBEVmorJtBfY1NZ9RYF",
  "key20": "1U1nfZrCkto8N9VYKfd5XzDdwgsbm4UYhm2i7Cs3HgvZvAgXMoMZjWegCTnUn1NZ4drLqmHvjrBdLt2J4QHUDiD",
  "key21": "5dztW18vhuz1rcuocvtxS1h9J8EfDx1LTCraDozJN1yJ1bycyKXnWi8UpSWE6SRBhUsQwNFx9HB3PVh4LBa9wezz",
  "key22": "4xSXFcRmTmUWTDtmepHkCY3pzynEXntERgqsSXZogDLnR4hZARHNmHUSm5WXHV4iS8Ua8qTJut5xGzoQH3hBTrAN",
  "key23": "5Cb6zC2mGURWwXjJJyUzfHLah4DLPi2JoPG1Hqp9baxwPX6ixvPLqXoetY9Pb1L8ouEobsjMuFgePv6oCZZCWyrr",
  "key24": "5SNLfEi5JRqPJwoYzPZqaY5LWvATT3hBoYdDtca4bu7WyUMyGQjGjnrwgWP5rKqGteYsUWpZWyjErtctyQNCTZMQ",
  "key25": "2Dcs5dLH9VovGdycMn1tSs5Du8twAKf9Ae1ZrUe4pJ7gSpjjzV1egJWHeUbu6xt37B41Suxoq8KkBu9Qr5Ck12gA",
  "key26": "2ZfsngSVUu2BdHDHdaZpme2VYTVhuuMChkL6z7m2kkoVE8zkiBAZrzKPrmg2fWcZRzaTV22d2yhM8Uim3px7Lwbi",
  "key27": "4PCtJ7nCGLNjSKehybStDwYuvqv9LiQeySoDrn2KeXk4kNMRvTTUaPKF91ogL8cBj2RB7RvsU6mCNQW5PbxBEFru",
  "key28": "4zPwJoPVuMSsvf2cBxJHmmzdM7y9eeKbEZjfadW68qFxqWpXu82CFmMREzypoEadH6s4QgdBXVZHAowz3wPfD3nu",
  "key29": "3nfCZsxVe2StJ38du3Mc6rhmmMpjjteb4T8wMbrtbDnwmGZVVyJq5Mwphmg5z3X24fDTDRHCQ6W3w1Nb4Ypr8KfN",
  "key30": "3cUFjqnDGDzx9AoxGZLAokbUwcs1NxhE7S15ND6zkorvabqqCfqJ3oTZ9FLp65NUFyxdsvq1Z1aXkGXG4o8DNwP2",
  "key31": "54zjU4gPNr4P456MwxNnwie6m4YN5TgTC7SRQcPAJ6H3DQBACEs5XcKqPZksx9rrBgKNduwJ7z8ZFYuXWRF8MBCz",
  "key32": "QgkKSWaaFmqMAWwDVs52NmtwG1pY4jTcmVrZVyQ5zKAgau8zdKnhrgoujTN9aF4ifsBPf1AGCgNRDQyAFCynDLV",
  "key33": "zev3kJBJhgZxM4DCefY5XZW8vC6ZvtSVRNwbDw2Awjf5EUgPupJgKgg3cWa8azX9c4UQ5PCkWaQFMppqrFtbkYk",
  "key34": "29AEX975X4hyqcqxRVoArdJbSouZ8mq5eYyGKp3kuykXf3eSMUDoZLeVwG2J6oa8oVnUofLji5zHxEoaGrF3sG4K",
  "key35": "2tQSepfps5fnAg5A2mnc89WWQYyXj5GARpR2bTL4UntQiqfpggLzWXdcsCnXSQxDdyaXWDt1QQn4ieAtH17wgy9b",
  "key36": "2v1b46JtcxuGVo36TEzVJjRsPhkz7XAAxbqFxqgo122wECVXtZwwWzxKqn1PLJx11Zr78d38f8RKMyDyTEAN2y13",
  "key37": "34XukCQK64fMxzsR93H24fPLT2CeFrWUiRysE44aG9yWFKcmtaLt32NNt6pZoTcZwvWQhGCcDQ3YYEncBKgwqwZF",
  "key38": "4UhNqhF67ie1gJtB1LZkyPdSrdVDiFbpykJZy1i7Xtq8jhBLXt5WNAw32dRs78P8BWimsjNU66dwR8zooWZvVLrK",
  "key39": "i5GrP8mLk4cLoGm7Baskng56hAirEocDxieDk27aGah6eGu7NFBwGij2mi4RsvtKK19w5DXXyo7PUG3vhLdFwuJ",
  "key40": "475AUcHMDHyT1Dtwobrj2ntwTLTTDLvbKfeUnRmh71FL8rPR677pjZctX6YRz13LKdYZrr7PECec82Y76CP6eWfq",
  "key41": "2hJM4wkRZ9qfsKPatw6cRmSc945hyJWYAqaoPNAJntRb12eXVYp5mXauGyzMRYZiPpyE5T6KLYb52dDgezYubc4J",
  "key42": "63FvG9iTS2zderxczBSJUR4ZzZLeqwkukvYsGDDygNLeHKL8tycB8Tdn9kD8TnYTifHay4j6grrMVabyCzaoSp1t",
  "key43": "2ZoHesCRozc4TUgJFvM8tHPs1ezgHWUvDsvRLZFPxVkKT5XhXp65AbLEHdSRpTfy67yDB2TrCysBvejyvwCBjjYv"
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

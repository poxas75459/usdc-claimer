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
    "4UarTbitVW6k7Q8LuyDtJHJtGVo2yy6AX1qWbVqnVrBMoQczsFUXWiPnWD7ABAzg9NLJ485mV96eAmznnbFYmenA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Kkf9NqBTtL2JjL4zFfTHw14JctoXbek7q5Wip5zpYpZ7X1pkxsf6h6enjJ8oqbzDoxJcEscfuAvD7rcyXMyRLC",
  "key1": "3Be9vBjBB6i4AV4G6iAo9g3fYSz29k72rtJVFLrWGAucz44hBr1u4DQwaMvPYuN57U8piWo8JzkJAyraDnHXpBu1",
  "key2": "4KQak9dPuTMJokBPiXJktoCt9fZb5KjRXwMFthJzuPuWtmdpHf8cDkfBW5JC3twdkG5CkxuwN4wc2RcdSBzwCNrZ",
  "key3": "2Mr6TXca6T6CoE7i5moS8z5Q4ZZmbx8tfRUgb5RUXEuPGYXujBsSdH6ih7zBi7hDVJukiTtNaEEWW1ZAvsV51y1d",
  "key4": "MYSyqx9oN9Mj9kXu5B1hfoa9Gm84ceVUQMd3855q4wexPPn9fj3gLswRmTk613Tq5zcGjPdwQDCcEHmpy6Jpypn",
  "key5": "55KMZhMC7ZrpQqqf9B5N3F5jAWQiMyW7cmQ7MWjV8rAt4pdCaaZhA8XDk8K6Ah6njJZn6Hu6d6vWmW9hbX1Z24eU",
  "key6": "3wXxFRChik5DcWg7qctvJtEHi5QmNCnVxMU3FLXEuXgEpBSRTejrAVJBn7rzmhKN78gMWLXK3VuZeg9hopZNn4Dz",
  "key7": "3LhLtq2suL3kryuExGqCaXPj3P9vKWTvY8F4rEuzfinYzgvKGax3aTMQe8HjeXUpXWkMTTTfgnPcYEbDfDokY5z5",
  "key8": "5fJrJSU5dmnjZHHuEtqyphDHV5cs6VRYBDrLsv8kLmQucAEA3X5PpWVkSLBHbajyKyKkiarwQHWk9vNhPgRgu2a8",
  "key9": "5SNpuVhuYg2kPv3xssq62AHoMBJzJCg3DwbxA6zmyG2JWEfcoXXmX2kWKvitqsDJsbuj8w9HXQzW16qPHyQ1LR6i",
  "key10": "3mq2Fk54hrYfmXLoCnzJcDZD9kQ6GBa4nmew85tmFSEJD1JtRfgB4THLoArJmm8wmony8oBH86oJAgvU896YVLyh",
  "key11": "5HdrcqDTbbFeJ59LNe57ed1Nok1VE2EjkWfuKBKv3KkFh4YQxwbyByCXNjh6xKfcXXYTURenk5pT5KyTJX7T16kR",
  "key12": "49xW22CefZEAiu2GRZVCBTXVJgJpGEcedXh6piu9zckkVZmKUNCs1ZuzJeQahggFgCWo44GpEfqUHVKg2H26cwpB",
  "key13": "4x66hGpaWUL7brUBzHs8Xc4oxYsoB5xSbRnSnh4vRTMjKDWzkHhohzgQGyrbvAhAB31fZMM9CWJwv6PZWwffBaWj",
  "key14": "2WqY2vKMLSnrQZ1aCrEsXMXdaWGR5LS2MYSFNm6NVpG9KGo3DvTwWWxnhJAUPBRcrp2Mc1LBamG6fayo3cywoXB9",
  "key15": "2i4bjvHmbz9mdvJ5NLJi8dGmXxwy1AbUn5E6Kp7GviCpSTo9PMdiRHfn9oG2kv1SEYouqxZkmjVgZAgTo2hHxU4B",
  "key16": "3fFQcZC3Z5i1o2dVErwz9pxyGH6EseARstfJF66jA7HNy72AT9xhQwDqjykGsbhPL3hyX1yE9EQsHdcMqH4Cin1B",
  "key17": "3D4LaXFTHRs7LtuE4kMNGeYo4yS7aRumuqFfCf6PYku53Ubk8fpjHnuWJiU5xqdkiFik8ERTnkrTqKzEuP9tZhWP",
  "key18": "1r2ajMVvDshsH6P8fXUGJktBL6jebBdULf9gjBTwaoD9dCCDgHFkheBKVTYJ7BiigAGStuGbj9bf8b3fgaskB5o",
  "key19": "5MkQQfPkwTKcr3aduKPNtewW934WpBhEhBoht2oSpXU2Q5vYJRP66qu6t27Z9ZEXmtKuY595mnkTUYRqgUmcmi6o",
  "key20": "3GUUEQTjBLGanPd2MEK1q6iuFa7RcUvvEprRAk6s9viy1TtMC9dyjq7ze2nexoKjabf9hbFjKJgfSAkpUTTiKSQi",
  "key21": "5o2eHpKmKmno1dHoeUTus424QByftJf8rHVS3G7XKAK8jdQAMsXGXgZkRH2QBjxP1D2d3u4GBsNyX5joJ3Y6bgEA",
  "key22": "KVXX8ihaM4xgifQAoWNwqCXfZNiSGZTpMgLLovvU245AZ6wrFdFaj3WpG61ktCiTsvuhki2XAw54GENDryJ6Vvg",
  "key23": "2DdWeZC4kJC4eh8ukHJVeuTJxEMKexKgJvSvCCh87yEth5cgviwgb2nm2vhdzxgmDTsZT1SSnNxPjSN4FF8EkVft",
  "key24": "5ehvGwUgv5MsJHLRSxZoTM9tcPKTvggdgf3CLGnU9t2sJjLT8RN4f63EJqB61rafRUjc9cgmSR1HFZ5yUmNCNBvN",
  "key25": "ES6oTYdwJH8BzJNiTmA4f4fRSPzEdvjFcLbh1Uf4KU51njjADHU5rdKDkRLNpBAYjsjAWCDSgnMsPKPsE9p6KRr",
  "key26": "4J7oegNrU5M27wGA5vmGgro9LeKp5Pbs6u1dwWEB1rACM1Nv7qK8TQXsZkd24zUEv8ZpBtowHh93rphcUsqeLhcm",
  "key27": "4KJELUpH51kwaG59KeWNNiZLDd7GKTznLg2e15bdQqHtJEyxLw688ku6AWiodch7s5LYn4FZPunQSRWRKr259oLv",
  "key28": "39bivn2UwNoDBrQKogWtSomXfNyTNzhZyCftb2QtRayr4QjTTJKJUFydp5SngqNPneeShwDYR1ZrE4zucQ3ANs8W",
  "key29": "3dwuuEsVHKMcPdGqcVK3FwmwJ4et9FbrA1Eemne7CD81RFuYT23yxZSxGyyTx7hC1mCRNteL2ChMEXkP6c5VGz1K",
  "key30": "3tcHykevBWxcheg9b93sUfvHy1XfFRD78XFnA3hPBnVTdP4H1QSEoqXyLTFeMMstLi4Lb7B1y8FWwPCAcVyQGNLu",
  "key31": "3KUXTFgDRLHgAzhVhmjYc2ukPpfTkm2Jw7bHC7nyYtX8LofGdVVXCwSSnSVHmnsXxzL69FCS2MZrMnPf3weSTsnu",
  "key32": "3B8TGj1Zi2PgW3CUiGFKUVDtJUcoBmgucyW3YHnxCnVexzZACC9JpQUUwtfwAhaXjUvWSh18oBvK7Dp67wgCzLs3",
  "key33": "4rVP2QKNdqfE4bvzY2z5evvPyAP8FAgmyrYqnXj5vytNTKVFYXTLQQeZkTxdvfLQx7P1QXyusZPJHoTTnE22Dxo3",
  "key34": "5YRGMFmNCW5MKgppeFgfmVAGKeKyUzb2MVhoSZKxeyvRZr4aWZZ1sxhdCPu9gJNRr8W1L3jbJSYbtyM8YWNJSp3z",
  "key35": "23a5oJ5yMHV8EmnayeXtkDSgXQD6UK78qXCJSiUhQvVRsuNWdanzFpwxsMwjqqGAc5GTVoPvztTP29ZfepiZyfmW",
  "key36": "3WSbTkfvNsXEaYctjFVpuvMqhsQ6Bry41GpanxvTnhi7HcRgAJkwQVKTz79cHrqFbyhU7rUqkY6vyEXtTNVrsNrU",
  "key37": "5AWPp7c3PDJVsJWYef4cLmZjo4mxvPyh8b6tEm8jPj7wVyYxfGc5wcT24kfujBNCmGjmULsBAbmbJaogf29Q7Ush",
  "key38": "4X9HA9e4qK6MFbnH2xZ8d9EFBhRTBxi2eV4Vpx1HDaX9KKXrXzBfmgtAdm5qScUgmskJwTjwGGJ6YY8YiFKXUAef",
  "key39": "4goSAahFff9ddceND7bHA5bQHr383ZzCixn3gio1vN2G72WNeqLshyuZroCiXFreEgqhstR4jdg4GaxcuH8iLddZ",
  "key40": "CWHxM7Jnsh4omDRoHwcaE6QNYPuKXNBkDHmfDeqe94mHCJ2ymP8JHUPM5uVjHNFib1hpBQ8QLVUytghgHbuF18D",
  "key41": "rD8bEQJJHBsVkc3e4AJ9Gqo3tHezDbVMZVjG5zdpbLN7zMHmw8k9bpncqZ1gFFiSXDyPFf4XNrUpf6V3AmqwXLY"
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

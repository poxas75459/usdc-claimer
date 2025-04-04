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
    "2m7AHnf9NXAakkCRtHo8y8B5b43EsY7qGS4vzRsxHnAUFZ6QoRoTWeasK4qpWWE5cAtersY18FYmYHSJFxjLomzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4Cox7PqAqKT65NQ4AGgZ3KPLuGn1HHPb8r3jMNNvmG1V9eL8UQSoWWziMpDsx7tneJDDvQSXerzxVwyFp1hfc6",
  "key1": "33UWr5Q5JDhHQTSopHwJRP73GaSsfr8D66UTZiiQPRGwt7J6SsBuB23D4CwrTdnrqP8M6bZ4Qs5erPsVbmpMmuFJ",
  "key2": "39f61rNAvXDmqQmuAdGG3ptDVGXZaeHUvENmeDuF6j5NyFv9jriHT5eLco8JmTozEFDZtQDujHdAsMLw1Te35pRA",
  "key3": "5BaPyWRqu5N2YLYSHcety9tVGeDF9Gjidz2yrbFYswJmrm8H4dXf5cCCPXAnqRu1whGnguaw6i7bSHsoZTD1hVWz",
  "key4": "5FZJYz7tM1DJaAmopk8Sg2CWwNBPPK7j2BvQhTgH8NmC98B8KC88QmC5ApwDUAzDjQ4QdS4UzxcgRwYBSQ7Rakkm",
  "key5": "31xBpu7h1LYXQ6ZnGwZwPy3WVDhmnAuGg17XBEksmzMKMxiKd4sKpZ54ayzLpixiAUgTDABo6o1oC3R8M9hyphQJ",
  "key6": "2jYEhaYpWFaG8RoDAKkwgMQ1xoVuQ1ZsCHkM59YDESRL7Uq4EYoGAesPeTkLqbnrQvS3ZjSaexFcxWqNF2TfhRwP",
  "key7": "4GN6Q2BbjNKV7nEb9wEZ2pXjW5HT5pZgMiQm2TJuwFK1jgknxSi7bjMnxSit6mvoZttY7Jic2C7fyZDRYxzqbkED",
  "key8": "2NGyTDZvMpvjkCBEAdgHWMDkU3uuzKXVZQe55aAbVuzN9HKY5oWoKTTTYPShiXEvLXVPidP9uLECvxGNCjscktfv",
  "key9": "3Yv4rr6tpyTEVwFhyjxF1Ki3kQi4iNkLAybR4Qft1S87fMJmkcp3qYURvqmrTnzicG5RrhkUodvzqN6fvu9JZFm2",
  "key10": "2Gaeyyj2h3c3xDVBw4bjbFxjNGfPXNZgFyocZzkGHysEHxeyBWRj3VLSvMeaECNXmRDLHKBQeQkbpssTwLSvsZTK",
  "key11": "61UfFNQ7BcYsttX68H5Pdvm1R5RLqRWFV2CEpynmidkLTg4mhgsExE8o5sn5aYa4keMJtoGiGdGNDSjhFL169WLL",
  "key12": "3JBo2LvijarNrkJGxC54ajpdtEmFdubfTsHVu1dFjNtWXYe2BPcDLaAdTwAWWMLjf6uJF39i3yuU1riykJUDoRDD",
  "key13": "52v4zhZ99Lu9kozkqJSdvTvGi61sRwrh4rgYfjcpGsfbJtGs8meK6bZ4PjMENVyRWUMev3MQpYGQiDqJjK1z45BA",
  "key14": "2uSq67cwfgZP3ANWUx6T7Pqkh1ahJckPvntafw8gMifiLkJAnHMce7J6V89tmSq9F1tP6fvTHMe4FmxY4xSoFbKg",
  "key15": "3DdKkTXfLC1BD1aeG4D5RPRv6muaSAJC3DzZSvSR5kdDE61vzvQ73RZpf2CCCsScCpWFQQ3rvC7ZzHL1D2AkxkwA",
  "key16": "2hX9D348xv2DEFQJeGL8P8kFQysiFaHtU71HhmMoK1uBJVd8UgALsYpQA1QrHrgZ8uuhscR5P5gkx5hrufuGAyfY",
  "key17": "2LLRdTehUbQAgEed4VddY1RcQTbS9XVevJ6tGG7LAb1BoeMMfDAs6TUZXzMdVENRYZFfupP8LwnboPYbKRCnwkue",
  "key18": "343EHn14J5Pm45NwVz3yz8dhD5kraRjFtnDGbbUxkPm77dq2q9jhvci4JMd1KzTUYjBjnYWYHy1CGkY3SupK1KZr",
  "key19": "2gyBHtyvjsmoAesMiXgFqHag7J2Q9cLZzjXdto38i6P9VvbYwjBi4hPKcecVAoKr9ebXTJQgG11d2aRjPN5we6XQ",
  "key20": "262Hiqqc5N9Dr4ipdB14FguZyD9EAZ5S2A1ZsFYGLzD45FZf6MyBNFztdpBQrdvA3xHiLHghyWFBpUTCwvEpe3Ge",
  "key21": "54guz38QyhqSyS3Hhw8vXeaZEAm8Ndg1uDN9iwr7GewSP2dhJqG6Dj8T3ZwTuBupXbekWnHyzX1j5BbGCyus1ysp",
  "key22": "4MPG64EjQGJQczupJyz8QPwqPRBRhRxaorhHz2M38dXNpcDmT3HRa1yEPDaQGBuC6eMRyweghqKpJhzQGjnyQYrC",
  "key23": "21j6ysr5sKiH4QcWnBPhLjvYtamTtNEpbthor4qg6YELDdXWbMaE7HzFc1x8Z5BSRoaADmgXmK9LdomzkdF5NoJd",
  "key24": "5WVuYJPFRrKmL8kSEJSADgjNkwkFhXzzpqLyz7ViuhvbEFa4dZ1R5hwCndf8CCFFFQXSGosvEKFqx5UxBcFvbE1y",
  "key25": "2sq36nmnE4gubC3yvkXoULwHZpcExRnfB9FGi2doxniKZVrpMUsyMP6Da832friYMW4nzR9b4RMvW2HiMG6usrEi",
  "key26": "57dtqoF1USekygXy8f5CqHSNGu6sxa6ixrvvL7ZSML7QUx1pcSsJYLy56peMSTq3hBHdX2Ejy5EbHxiG82kenAYK",
  "key27": "3voPjUpd6mkM6aiSuoAVYmvJ3WvfhzGoXP1Hj2ShpL7D5nC6wLquwCrSKzHyjnWGXhkDMF7U8p7ffE4s7uszpwYz",
  "key28": "dQTNDyy9P4aCRUrCMTn8VMPjhf3ZXDWeDK8yF53zsToyMWdrjtnkFnbHyhnxfRc9kCowHgJttYGjvq5CnRuVXXY",
  "key29": "TYFL1wDSycY87vD8Mu3RuQgJ6CQRRaQbyyVmFooGT8Hxd2Y28r2TtrMygZM9t7KPWDPVgkUPHUphGJyX1mDP5Xo",
  "key30": "2XtcUhKdvhJhJZv7JEg5PGqGtPG3HtvzsuBHLbvfT4xR7q6oEW8NbNuF5EP89EK2T73kvP6JSsBNqFDD1FZBRjWG",
  "key31": "3E17TbwxSfJHe5k6iLFxCa1BjyUPm9YW7fK9oR7eaZZzXSDeG4ELBiEYEz2awuJ5jzY3pHtajMmdiALMQpq64cZU",
  "key32": "5gMNSDCfzZwubdGpzmm9WnuoNZFrno883SKw1fxRpppit6Y2zM23AAxtBbW5be4onXyX83DXbyLU2L1dGDoBQZfm",
  "key33": "q3AgfskC7LqcisdjVqN3Y4zvSxpRgyzGXYhZHiiVnAfq8LkUsQinnfi69cYTgNciePgc5zag2QQqQsDhyTyBCyT"
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

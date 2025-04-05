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
    "5ZpXvGQ5GgATBHcb1xgTpPh7xG6qEFLsSwkYDRZ7BijSepxwPuWNXSLxNaz5Gfpe6NF2VsogAVU2R3QGmJva1AQn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26aNdbQpSBhKdTfZafWhbFfZJbB5D87XsS9wR4HFPtnWTkJwdoJnPXP7tg1aqinYRtVe9oNxqrFLNzZHxnohcMvX",
  "key1": "5L8cPSUn6nLxPfh7vC1zr5nd2Srey5jbDZbMh87PKya3yW1F1ywFx6sF36hhw3uaZrNKMbA2Wnk24fJVbyKQ9V52",
  "key2": "4ZEebzqVN4Lo3FQVKB7AdqNwRZr8iZV5BPjmdFRu9nAnwVNk1JdHRdWJTxWvMmMV6Vt5i3DMf52cYmQi7CRZiW91",
  "key3": "iCCwDzxWLNbQegPZE6ruXiwhFySATNM3hsWoe5NWrmYhP7VS4ocWKP4kucjaxRo8JF3dwioM1i3rusKVB521wmT",
  "key4": "2UcqztMjrvM5v2jsfYYVmcVbRNGgUFVNNc7t8wP9966NittsQwmtWWrzPD1ZgM9uWKvUf1bWdA98beX6zPaJBXCX",
  "key5": "47PKHZ1o2GvSeZ8T63o9DWYmFQscWgESK89E3jWPBR9rVWgLavtQgoUjoQcxBpiChtMcY2eG22sDMcRrJU88eVVs",
  "key6": "4YmcCGGqEhtphVUmUihrb3yCpp4Wu9qdcfYmgZsS4G1PmAeS3XzLsNFZfun9KzA3ZhF9x7aMHSpRydtw1vqHGkn9",
  "key7": "5bz9K3LHnYY1g1Q5H1CSuQe1BszqkHfoicZuTyv8trEkzcrdF6522AFfcEctV7WKpqdpGphe9ssfzQPf4YJLrAnG",
  "key8": "2C8L1hiNPoAXX8wtRjEgSMkqjjV5RuGfEaQLiHNPLEMgyiM8pRJwCUTHQWuvMm4T96gn19W9ScdVnj7mSfNE2UH8",
  "key9": "3TUSDqRjKc29EbUNFC9gHmDuaF14vXMkuSAxD94TswPZPh971CYdhWXEmGCXUJyhYdHJWGo6tLfQAQa6N1UdoR7h",
  "key10": "4GnLoLRaxNEWpxoHzto2w7g8QBgpi5BKnCf45r9pd7mnAgt7wqCBJE7yzkJA3xnRXXcQf4gEkZqdsUfuvZvqBotP",
  "key11": "2CydVEwLNAet5LCYqZuqdGLvqTZisTMzuCq4QDu4gsbGVGMwTtD5ZWkLE5AyGRXPXCco1hw2mwkq25hWPBNv7TJb",
  "key12": "5eKydivXbnkysoPDdaFtUDudPz7BduVeCyQV8R6fKu9po2JRtDd5Li4Hvn3j6PEY4pJ6LToeCQQzJqXDVZ6abHEB",
  "key13": "5UqyJmPydNhxiD4K41ZgBDA1iycAHDubGUo5REjhuu4CUBYoyM2frd9KLDfyZ5QTZY6GjtbFDCYgTFzwt2vxLffY",
  "key14": "5dxYsGSGV5yX89S6W5dNzPJ6rx96UoZXjW27yPJiiMXqWLv8k4yTQ6G5c2tDqx7DNp7CzGnkJtuCCr2DyP997YLo",
  "key15": "3mcQe3qWEgB1o5vGWWsktef7sZGeKJ4yrEvRFgwT9XB1srV4pKoHNdQZHqdSv61MzEq1cDKjZkjE4QdjXu2mKpjj",
  "key16": "WvA2h9tM5L5stR5fxVTbzrJhyxKT7tDP6HUP5WvNPs7zGxSNqb9gqycVMFM8daw4ZJPrBjMSB4d2UNqGNdTxfTD",
  "key17": "5yWkbGh7nysvpGp8qk37DX6pbdVy5Uk6s7sTq5uiV3PQM57qh9PNDuV8vfvNeJnCvU96eJYMVTu2cvTXcK8sMJTi",
  "key18": "4dBRKa6A54ydnTCNgx6GwfUL1UR3LLAm3Tu8GUmmgo7BBT97qBjvfJ1nN9omGa9enqfiyJyUa9ATb6k6qynP3dEm",
  "key19": "3rjzoKKFwkr4jpVqB5BcCTmtLtpm4A8yxEvGqembpFXAGqLyQrTEYXyrCSbXggRNJ1abzC25FZnrtDhoGJ5qGiak",
  "key20": "2KnU3aAeiHfuZV1bn6DYCRz39XLC4zCiVPaKuzfDPpPgoe6jp7CKrfUSxSo6rcjRCzJpaJUkzCUQGZQRccL9UMRy",
  "key21": "5FCuvq9XjeHL4wj4womJkq4mn3VjTXjv6HvJkn76EwKH5nuJbbcVPcwmNiCSEHN89tpiMv3XfFVU3uLBWU5qAoya",
  "key22": "5f5qoDRKZjYyoNtd4woni39SrvNg6FKwW71yBkgvEnDoaiDd68dFh3ayn39PuPhxnuYHASG6FyEdHp6LYCMhWEig",
  "key23": "4NEb8oQSJrCrFfy6dQefSfDjuLEDffNthmnhgF2X51zYFzxtghWPbcJ3gdjij6MvXFQafuiAh32eXPErQw1rj5tb",
  "key24": "2FgA5csc616UfSjV4uyreY7KrZ7QGGwAWyAZtv1UEQY9DnrXhBwudjSQLxuHg4BRDngJ1UZM6ducUHwTxdg2qDFQ",
  "key25": "GNZNwQg1KanFY37jZcf8C7isYV7qfemcZNqyc7mPhwb6WgqAavdi8ybeo73Q2JbSVKbND8k6gKkdcgNF5FWsbsg",
  "key26": "21fQDZhBXL7R2WZ1NJcYHaeSiM8NfDCM6mAbGCGQftHQniyVFyWNnvBSDWxR5fn1CTomXSrSxE8QbtW6Bi3pum3P",
  "key27": "51uEYYRBKAg5zdmCq5PqtdpLLoHe9iUXeZhn2MYU8j77kYwihfiXhHktWJms3oHooqRXKZxKYyHib5WAurhaCrqr",
  "key28": "47pRuHLguidMiWf1bBvqiZj79h2PZSKHtjEpLLyMEU9xeNqNnEMtnYF4zs4mwRQbDVqjy89keW8rXqhAGzQAT7LK",
  "key29": "2TzfWtdtcXKAjUaZXp1ZrcpM5UYS7jmxDrS7JroQonKZSyPnRDqybzFvCbhipdsrWAa3iePUhMT5fkjRagpu1oh5",
  "key30": "35HviKFkkXDVaxc5SQ983ZX5btZnMZL4rnKymZD7BzpT5gnwe3SLTtTVQFHQ1suyyPryjQui9BbZcLKJ7DsPBCpD",
  "key31": "fGThpzdh1h45AkcfAgC7opRTRz3kpFzJ7u5bs74mAw9mQXEhLtVoVWF8FhC8UdSWcbGW9wiEm2MaqG7GZiX2YAP",
  "key32": "3BojGz8jT39b1kCTHL4mgWGBgN9F6VxLGd1wjtQa49gBR4Non7sMaDqwMmx5jyJg2pefeBapGMAN3V3bLYSHDoCt",
  "key33": "3cKa3VA5HZyAWrX5w9uPk7H83J7ixLcZKMFa9HU3oA2x4DKSQx6un3dtQ54JQHC4H9nhrKhenfBTCs86DBiFc6wX"
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

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
    "MJ75zPskbc8Xm7j3UYtqoYFBBTtpKk5czKyCgJ3FTrwPTVxmxZ92NQs81fCtH7KEeUyGJwsPYVwhyFU1yaAvVvB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nn8UXnWKTX7qGF1FJ1W512qYuTPCrK9Wri9hUzZ31n9jdYR92SZ2vWtgXmZYAm6Ks11t2EXvCRgcvz2BhsrHHxt",
  "key1": "5TBAfhAXHTVRdCBHM8yXX6RtQg6KNNWEfebwJ178jtJvdn5EXRP8PdhLntDTdo5YCcLpPz6SUAvPFqfnic9evx52",
  "key2": "2Bcgd29e1QdSqQ4a3q6cXCMeA9a8FZbfKFobNPPasBoR8EcarS29qv4eYbSvJA8Pct2WfGhwvho2RzPrDFJPNSQS",
  "key3": "52DuD5uCEyFYFbRSSeNLjZqAL66cMFvxtJ2JPqqroZzWh1yj8uYYGxR8adM5dQB5tonPEWfu2eKDXae3Ekuu8Z2h",
  "key4": "JSDtYmPsdeddr9eXW7XK5fbrwfr8odwRVfd9LLm1nQaUU5a5iqk1BjVM82drMqijrdqWAfZ66A7RhHEM9qccrTa",
  "key5": "NyUhKD2Xa3QNfNm3eR79yw87N9iVGJpPjohKHzbiWCvjAFB9wSSJ4e6A4zMozVy1rYiJqwPD24qx9etKJChs1kH",
  "key6": "2voWFJ5NMj5pkj5Yy61vvE1bPLjogAY1JLi3tPSyxxANo9rEZLU15wXP3Ekwz7qQ93xaVKjhNJPkkWbrKkJwkfaF",
  "key7": "3yciKnNjoXGL7KvyTBoxbjPiH79h39bPwjNk1oB6Tys6wDb3RucrkxpxxgRGrszRyWCjgVAiEQ3TXsn464cB8Qw2",
  "key8": "5aoUqkG4z9SzerX7ZabFxNuDMjX6dhZXYK6jMyAZq6BD8G26h2BCabbQxXmbCNT2aFpsDiLoibFauyKF8PeL2gAn",
  "key9": "CHkwHfeBEUoE7QwBF4qBZprazNVQjxBPTVCv8dpCh7xoMSXGnQm76Rf32aoWScpzHY3cr6cofgyKnVJxTWntMvD",
  "key10": "SYAMhVMwdnxckM1F7hJeYAt3KtYPR8X27a7tx7fKQqnqFZ1cPJARgi68DDrcp4mAvHEy6F94RSdDZ95xZzhV13w",
  "key11": "2gWcCzBpkVMT5b6yaqJ4km6gcHd2qnvsrSE1mv98YvxzpfzjoH5P9mXmUj2HRxrEHRN585bmVz2JQzHCMYXMbcKH",
  "key12": "3PXzkSPMy9ce2vP7hXJkHiMdFKeLfbG48TkfEnYZFkaRBpuVs6iYEgYYooaLSsJrUxZ1GirwvCW1t4GR23pjTan2",
  "key13": "vnCC2fkL73vCyqv6jLbZeLenU1HBbbknB5VnEjV45HBVcs3MC7w8UDxrKEDqdoQktJVJH6u7t6B1kAwKqizb4Hd",
  "key14": "3X67mjgzCuwYhcfbaC5Z7JCXmBXMVL94WLcsHvu2Ljqd2s7FKjFwscEv71wtdYTT76wiAU3pFQacG6v2oAKHTc2B",
  "key15": "2yxHiatMN27i4YmyJm6NtfjUqRPXMZSYskhErbPaGnw8jzFdUsr629VgLkn1kpXgAn8ehy18W6f9p4GTAeGmB7Mg",
  "key16": "27Ke6oRBQPrpp8o49rkhSVNpayR164HeyN9mjA2VARsemz9knaWmbaxRwkZRSfpe2718mUvkdrcPrB8eWYURBVFJ",
  "key17": "VMmVpHUxP4i3fAHxa2nBiormTFTjLkSHZQoX3u9zJUwzPLvrcEQhs5WmBcW76iwq68ekESU51sopEBY1UP6Bq1L",
  "key18": "4wmPqdhBARXUrcY5pXnE8giUUxiHzjWkdKNJGBpTn5Nk2Q6MddB3uZw1ks7PnAiZjrT9nBcuQKendLQ9LqLEt5CE",
  "key19": "BN2R2zSL2krVcYxijbWJbY579kXaMmZxx7ZgR9L5vZc6eAdGa9eGSeX9DHrtZmd4b4jM1onWXnCjMDw1mhcTiXC",
  "key20": "2AejVB1i48XUm2U7CXmfu6Egt8efYTWLHyG1zFbAuVLBzQf9i3pFxxafi4Yr9Twbdn9TiW8NFCSxV8u5U91k1kR5",
  "key21": "aZanBVLzUjehSpWzNPYAJaXt1FbAJ533zsdevcvXhPgGHDKKjwxHPRKfQJZ7tyvc6NzXZLKMYLMw9GkZ61cCW7A",
  "key22": "65wWzMDNXy2YsHvf95RadTCzAeiv8athEhMZ4V7R2dcq38sjHRnVx1nov1DEEkxhkUmPLNV5DhKQH7KyuRgiGbfK",
  "key23": "5ZLSaANzrwnuxhbZtxSbToiB4nVF1f4GBZdV3D5jhmH9Lhqb8WwJScDEhuTxSnU9TcAtkLLhA3rfVvF7rcE9JJVy",
  "key24": "3Ubrv2vmGBESn3ukoGebvAwy8fXk1Ujw9cZajWkur5DiNavncZpQZHkq2s4Eo7YatedkJf8hwDH47AjN2qYj8KSm",
  "key25": "3dQ2HfcrZxyTC5ei72bUSMzRw8Z8Le9WLcAPxrox4FDEUkFhXgDD2v1xtjg6fsaX65yqb11TMNkwGbXX3hxRxCtp",
  "key26": "2J8xRK9oprmbRSrc5Bm52xhyXLrtHqo3U87Q1Fb71dUVCwARf5pXpn2UFYrwodAUEPN6PEmu5ogbfGC9xXUtUuE7",
  "key27": "2BsFjozq78ykP3F9dDrBy8AgyQ5rCB6nZKiARMc2MMd4PNiVqLtwAhTbq8qTYGYSK2kzwxNQGnbx1CQVevj6Tz6z",
  "key28": "4KgVjCkJo11ZCwLXgJMu37fSK7Y6Lsd8XtyFHZCKf8az7bMRCfTmUjDdBvoWr1gHD4cECCXaeeXC9RHy1i15A8f9",
  "key29": "3LihxaRrcBJyBfugqw14UHXtZANLj9DwYbnhUb5pbyShTxExPL9no7sSNMD12RuuL4DhrBeHcGmke1Dh24GrZoit",
  "key30": "2fDvxWde5wJKcVqhpXZ3NdVcVSVFYgU9YuSzEeD6uYEVLtB3QjeEaUwKsDDwjmJM1fXPYS1heNPcwLGqcudJdLy7",
  "key31": "5aR8cjxx76a7UDyKfRZFPYFAE4z3M2CJ5i1XRczLcKAsHRaQKe58gejC6Kcki6pkKMmZoFgTeJnmQB17hmmnf5ii",
  "key32": "3NybMqSndkf37vgxL9kwupPBeAp2DhL57RpoJAG5kHq4UDb3SVLannjSRb6w9Jggq6XMuhofdY6LBXT5p6FWm2oq",
  "key33": "qay8tVZw9cK1gSgsbZ5WYCG9b2KdAyA8LBjmrBKz46WmxgTBCqJKUggKLFfeVipojveoBJee8CxYXqQoNYBJfLW",
  "key34": "4ePNjo3ysURixdnvaKcRiF4E4Reisf4yHtmWERbmyGBnJNhc8XYAxqfX2ttyRXvouXfGzvTpuTD3Pzi41SZvM7MS",
  "key35": "4hCAiuXpf9GyYhZDXAgwMFvh8GZm9AmKeJz9EC81mndbXsivyGb173DXox6HCMGxAaiK4xKGsYh3fz4BqTBt2U8c"
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

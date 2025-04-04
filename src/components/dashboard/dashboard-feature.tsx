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
    "57DCnoN2X6nP8vBE2u7oY3kGdq8Bafd5vCEwEq6tFw3buuxG5NTSEufeK7BsrJDQ4SnrzgbFKgkPy2zGNT6161U2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uhVV7cNNqXy6SDKeiXqxj5ChE5jheeDajS1w59PpUb5esyCtsBUxU3xEtqYm4uzzspf4SdmGmEbseEz1guowSnp",
  "key1": "3RmroazdUDvkfJ8MWcuvzys9DhpQN8q3FsJm8Rr4YYCEq2ommSQSNVxF3kYJvAfiJdwPrZH9wp7FifohKvHscR9t",
  "key2": "w6H7QDHVYFYeYkmWCPYoWjhhWj5Av68zNQ2THoSkaVf83J24RMoV156xzMZD559HbGXHGeBbgMXnWqmyRNb6dK2",
  "key3": "g6nYhWVEeCaLyWDTyYZtxF6SgB9GjkPUrLcy2pDqqSYfXiryK8FXGL7nQBisipA4qto8LSYMzcscEJW12c6yquJ",
  "key4": "3QvM1MrJ4f5AJrYgh5aeF73iHtL9tJLmSZNMiWSN5ykg9orBzkBRaccW3YJigTz49HMrqSSptaBVGkjii8pSWng1",
  "key5": "66rFc7LbCjZA4v65KuXBPBNtfTruECScypBqmwFsjcY2bCmaNUJKZvnDsHPAZGn7dnQtjrpnpWcCHjpxZ4s59nLF",
  "key6": "4HtNQDn2aTwhVke79Cyqod4ru4MjEY98V9wAJU8RFpGxebfgj89kHBNR4YFgCZZviuse8pJQbGrZvic8zpUQC7TQ",
  "key7": "4pQoQw3tj8mCSB4sbwPRPbFdjFU3woYiGZ7fZMo8eU27x2AG8iyhdSiQ42VSXvnZCPmGtdWjzXDLmzx4oF3XdYSu",
  "key8": "NSiLv4dpyGipCwGxjWEK4hLQ5Pre175Gu4odomfGU4YY5utTRVgWXY6mbPxHbm6LXqLTJ9Eo6HzPu6szHUqyB7q",
  "key9": "66Ft8HjnX7z5r9Ey7qoqRFasoFXt3GgGkytnRvbEZXsF6Ycuf7jrjpJ2Mmz3t8Yj9v4rS248kcrLePHWdx4hDzfz",
  "key10": "s8G9fw93kHja99v4TbYhKGruGMEGx7m53hpzNmPCWv3zrzKxBbtCSrP3J2Lue6vMyz143xBoshFZToFqgQHkHuB",
  "key11": "4sMuQBgV5NhZyjUhpcA3Zy1dzQfyYSSS7xfedpBw9qkqty9mBakuNnVq5qmaBbZEj1Hf4x7jmp8e4RJ89RiY6BNs",
  "key12": "2Qxm5e9w3aq1TiojZVxqRNoJw8e9PH5cH6kSiG73CijzYuvBfzavWrxrvLnDkazKF37e4MKg14AJeZX32rtteoJf",
  "key13": "5HhaYfLWZ2mR4UcWdVrS5o5be2XccSkJxBcFNKWwB292TPNsDhLdXhBkonauXbWTvrxFdF3mbtNAEbRLojXey4Ea",
  "key14": "36apbmhwGKp1D2pCTeCXaczxD2SS6CtY7a8C1mssGC3T3VkyskjvRFH291YvSjA4zGwwCcNUEmHu7KiEwoNb2ez1",
  "key15": "4zibNuFBVg5rbgrg2z4gm6WSAktAXo4nZs5qNo9EfLeQEsvXPoh6iZ4bxYDDMY6gYyYHG9LBAkiJZyH5JW9Ltvoo",
  "key16": "48JZZpACAAXHyXyKZpsgdoELR5onAw5RNk6ohL637JcdVNbrqF6xPL6anRTd1j1ww8q2gfGYf8HcZVBQ3ZykW7X3",
  "key17": "41q86ixWz1YVNu65DctQmjv6Uw5dYQdGMziVbssEGqs3gvfXskgnKKcafC5i4VsUdUx8w2iQ82meJRBAm8jyGwGp",
  "key18": "4buLADz2QDwqr1jShU1qmqdeGu3FYzwJLnW72zVqcuJcAbmoDZivo9ZoZuDW6jAmAEXZcGhSGxRgefZ2aSCZ4fVX",
  "key19": "36Tcz17bwToc1vGprm8942hNCNCQrgrdAXGkJUCypDroHfzF1m3bqKXmkwWqJ9vkesZy1iFnatrZ4j7Mu4YHmHNg",
  "key20": "GvioxeJFiiz3VsGtppKaCRGK66V3jxyiYppx4ugeftB2fz1eJizS6o9dZPj4xLjc3ZojGnk9k1szQKQtGUVwvJm",
  "key21": "s75gRS13acoHd31KCKxPQdkTBDKN5AibGzGZCdkTFdewbemHStUYX7votKBxbSuv4hjWTq3od4FwwF2qPub3taa",
  "key22": "4ycybMda5iuoKEqaU4Wsj7STGbbgEuyfpU8eMtFCQVm4eXujBQqa3mypZ1df1RLLhRdz8SF7V3aQDdeo8H3LP6gM",
  "key23": "2VcN2gUe8QWqeybmWsGjygjZ4QfGxJjTcWA52nut4X31basCvMFVkLrvEAjnGaYJyPc31r3YLN6ZezhtLkKoSDkf",
  "key24": "wuENRoMoFsSszd7L45zJd318q5c1M6FU7jkqTur35KvhQQ6KmWjS5zSUYtodDHiG6BRX2BpHA5NMoyjNq4bWGmH",
  "key25": "4sMABgXhUC3vXtefk2aQjLGE2p7akWiRPqLeQ1b5gPc69LcWENTtZkQXWgeLDQihg4WQjME5bvjAZKepiygtUURp",
  "key26": "F3BgYmjptyY4CqgnoK15uFfyh6fTGbBkpJYwX9RMdUJCgZcdjQQoQ4BwRnDHMJrdcnUxKCx2fqwNcT8wF3wY4TM",
  "key27": "4ZPQNVn2Aehz8dhSpU2FKEo9hguaPczbShYKLkRmotE7Sh3Yxf7A6RFkcHFg19dNJjpQ7BgTrCzRzWmiB4QDL21H",
  "key28": "3nvc1WCEM8f7WNNAiGHKA2VRjSSpkVpFSzQjP4D7yq1La9Jyk3rhNdzE9uz5Fho5ov2sr3MoX6DzomhfuAh54gPz",
  "key29": "3jbozdyyKJUgA47c6PEFRAEU5fX8htLkxGaPXgxwnnC4Qn3Pp51JqiwLCk6SzSmv6q5BevQ5KhRdcu3qN6S4GhVx",
  "key30": "522U4XJaqDDcf36Xyq5YP6e4JNwz6QY93sLXa7McfvUBDRVtsVdVQfuqEgVoyezq3LtMfYdirZwTB1romnUtqHA4",
  "key31": "5BCQb35miLXF8sX3eJYNZAbvvmKwM14GXyTjvYvutExyo8KfLssPWvsZD9ktr5ijwLttDRgZd2JTGJAnB2Ga7c62",
  "key32": "Kd2if5SUoVVMAp2wDhgmz5GEVAxwinjfdHZVfoytiawAoMuY5iPWw8SNRCUEm11S47YtXanFCXcos2JzAWMeLqa",
  "key33": "2E84wx6oBYGResWoSPxViGU239pgUtb3yJDc7DtZ57hyLpyKmYKXXrmAmQAVujPhMspieP41nSSQw4SHug92VUcv",
  "key34": "3yKKfZDUUCuhEuWE5wz7iyqSDUbj8nxKi1VZfgmdDxNH9TVDbiq4Me8zVy3jQnaPJnAEeCLtpFj8eoi9DpqPJVEU",
  "key35": "3AAbzC3jQ9oHK1Xefd7bSKZ5PKfMLFQFFt6awXSZg1PdRaUidQXdafu2HZfHfcJfMJ7cBeXjqAertZafQiJFa5Dm",
  "key36": "5PYXPPqCmBMbdAhroJYaGU2pbb8Vex2r9NJNioMm2shS6cXbQLTHfEGBGzQMPJ4HDewvRh1Nhk2F7xnD88Mk5Soq",
  "key37": "4dXd7j8wqtZKoJzj7LhnjpUbXauuvxdq6k1X7WVrfrgajszfWzyyugwrGyKppDz831fsfieB8H3cdeyswn8szZB8",
  "key38": "5XF52jGKyb3pVtbLT786DPj1AaV2cGgi71guzByk9C84dNZGYybVY4aWdRoD46Wzp8wUfJiNoeHa1MT2XbhYfDTe",
  "key39": "4JQwdhjLUXG9weLe84dkB2Gcgw4z9zXTnfJ3BB2vkx3xqpPB5wjxnuqmVH3fWoddLhxrArJtt326vW4u3L2iFEuR",
  "key40": "4aHyQxxUAN77K9qrc9srqrteDbovDy9rsaaS6ZJpRu7Ae4F3mredd71C1C8fHy8hpGPya649z1NvnY9WSVAdmTDy",
  "key41": "23bqLh5LKZhgrtuzgn3cxCQTKgwFToUK3uTpBvwGjdnsWEwRCh6MtrQZZ3i21yckgxYV6VZjQfQZrGw4jpRffk7t",
  "key42": "2yKa2ohA1Eb1aVJugodbNUBTEefNS2xbUpZyn1s5zg7edJAKjYznRoUZdTHy5doZyVMWovHCaSVkPr3nvqwHQfVp"
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

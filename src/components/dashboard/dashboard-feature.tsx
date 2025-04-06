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
    "4uDd6rPjAdKTvsSiwPdZxery1mQX4GZAJYTq7yd43DPMGPgHdQPXUtmK7WEjxg7STeB81iXNcy8g2d1A36mw9QN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xLf8A4rRFabf58CxaWwcttB1orjuLq34C2V5UqFz7jfK3qvfhdj26RQXswzS7YGHR4YGdTGcBzS6XrzyvHiy7fb",
  "key1": "26e9qmEPkLm3wHFytgjpj5Ybh1jCCVtuba5ChRW6cjHVU6TAGi8NNjEq2xbyDCu3iZeaVQmycn4oWnYHZuU99ZXk",
  "key2": "41gKTfKSYzziWcgemCuPiTKhDH1i3c2zCFTdH7oFMzFDByTpwWi53WU4Snz725yxTvqVVeScNYuhqFvqqXcEAoW",
  "key3": "2RPTEbcjRQLXL8f8u2yZsfgBExFK1mB6vkW2HtSeroPkbVpU9bv3WTb7Aq9EnnJ8gcGhH7BPYwfYPiFkbJ23TLox",
  "key4": "3RWZLTAYhVFHviSMRDQHc3JCsWrUNoHZdr66FZjkFVN2e9oSVgjrTXrjQTUtPi9kp1tkL25ewgMiMyu9xxsWgHdG",
  "key5": "461vW1gYBkr9MQ6XtXyBdteLH2UrPdP1Rh1udaer3X9n8kVNZcZjZQZkSbtiTdmJT7xWMxd97PBgBHjyQQ2wKrA",
  "key6": "2r6rT27TSQ57FBrpwVUaPVAmYtgtdBQxfx5SV4k3MmbWSZXwtVnyxB1bUbmiohVUZH2R2J7fwwq2xWK9JBepecxM",
  "key7": "2YQpRA9sQtFHbLqiATh3yeBhNe7G9PXrv7W5fj8DmyURcASjYveTTcwZZEDaegiQ7QMqHE5u47W8DvkSHME7GbVB",
  "key8": "3uiwH4Tua6EGmmAuE61v2TWGde2Zq7zYTuSdUxwgnab2fmCKfvzURCkdCgTcHq7CaSy5tmCcaoxSr3Zf3ZWxQq4M",
  "key9": "2HrcJbU1tGME9uLHvLZHtYnjQac9QWeuKWoKQdpiMT8YaJG3PNCk7EqSC5CwVtbbuRpzmJXvLQ6MWSGP7CbEfjrq",
  "key10": "4WtwdWH2Wq2jPkLYpf9Rtfjg8rT7oTvKjFprGG9FDR9e3ze9x62799C5vFVPuDtp3W1h6ncKn3MroLr6iUceVhH1",
  "key11": "5MYL6TykAXo6geAZiEFpU1qhByBgRk9RjwXKhaS2cJpB9kyU937mmmsWNyzFwWjAhqUUgopo9xySiP7NVt18e62S",
  "key12": "2Cbv8sZ8wNFpZyvTqkAvTbrYDWUtHv8c26xjAJQBxoHniSg8whjoC6KaceE68DsbxG7N7BRVvUuFu1Bg9vaxVMFP",
  "key13": "5EXDqQvyEXZctWXPrLq6qw5t2zvzRXMUuFWDDTsjyEFTyfpq98BvUaurKWb8Hh1tqL1dUsu3dVAQvU67sT2faJt6",
  "key14": "1YuuNeveRcvAVZ9n1dXGWXRpsGDCjLtQSD1LF9uUQG9vMPBpr1jnTCBF966PosV1rrZafFVtX58DsCuodfYW3YR",
  "key15": "4Q7aLnCiLdECTJaZi833jvxvTy8agyrMwwPVMwitBwYajoGJqNjmbf8PMzZ354rCHfyUGMwf6djaXG2icZYT45rf",
  "key16": "5zCno42eXqgQzmcXqQfNMydPPYsE713kxcHVztNW2HSgJvq8nNpmHk3BC2VaDhuucPdeWqgCbWo6CF8b3AZFVKs1",
  "key17": "5pbmwoQ7xB5RFb3vDapGNzYWdLqqJGjF8Q2giatXPoxDz44F1s6higN9ycRZ9moxS1QJ6bQceaAc3KmQtZDFMMmW",
  "key18": "2idGSb7pWDtRHVLh4EpCoCycFTMPcALdAQkBMXF2CLY1ALiRbpT75nGATwyLSbciqw5yZL6sbynC1ExuCRzPAXmr",
  "key19": "36hQKLTTcXxHz5cFy34bMKuE6KeWASBEZVaCfNECVgY2Snx36NnioQB9NpNoTXLAUXKEacn7DZWCsbZ6Ad5Pgciu",
  "key20": "4wojRwiugKKnmQBxzR6iL2jFddm9R71s9LDPDnozditBJwvqZ8UdwytcArUTcWmaoF9Pkb41GNxLkCKomKRpwtnq",
  "key21": "zg1gdTAxutaR3kfh2ELsLBthBpNqEjmJX8a6PZ4XZSh5uDfvH2XEQnDVkFZuBFKGyLi5JVVvmFYuS9fXGSw6djJ",
  "key22": "2WawUnE78n7yAqpB7KypiUUFWPB8MnsJgwVCChrmjxSazsVYjLvoBgEJpndqjRmTisr3YFe4Vezw6bapnpHELKqA",
  "key23": "3posuqF6gH1bijvv8Sm615W1K5CMBMBUgWWos5A1igKRQeXic8r5ivo4wogPEDDW3Ygc2TYx6SVk8ypRWVomCa35",
  "key24": "8fadyNttqJ6FMZU1pxJZLxsLAyW6NGhud6LvY2BGWFHXhhiEV7DPK8nDD3ZKnLE1SRJfvKBhneXRh5oVEtm2D1u",
  "key25": "2nevqo6x3vJi54WUTQpdSVAvDEQirpv99N3de1vekdpP1ga4kSYLaxNctL8UYgxbC2HA3oPagQUGBCMkuMTHLCZ1",
  "key26": "372pduVge9CKF7oAupgWkAAar4wdYrbv6XnxLgB6KgVf5ooFPVAFpNzYsRey3S4Ne4bYHzky2pyQqhwYd7TUyYLR",
  "key27": "VL4VQjcKg4qvcceCFavtVrL7oPZTW7daWTTbXhR6WhPyCDxBTtRw4eKir7wDZovU8jxUskkwQbKpwvnrDxp512U",
  "key28": "2hSNLHA4rSrQpqCi35qdnRRvKMArWWNYyjxui7bnBUdZ648LRU4QZwEncoTh1YhrtNkZtzqEmicQMN3M8AYV3A6y",
  "key29": "5edwjxwfHTXuroEJ5XdRiCgNC4ZqBVtfGU8TxPbHWEbeU63512GLs5d5bEo5gSs3d7qRjn1BGs766ctNp6LKjFwh",
  "key30": "4Z2ng56E5SuLXq7tJaMD8SuHwaQLUP2ENscZy4xZ7bcMUpfGqL1UEEKD9hmUA6nzJJy3UMXvTnnUdjAERSFbUG1M",
  "key31": "UNEtmvDpfKXSLcjvA8pciSqkV2rz7jW82CGQXn85TbKQRzVyZ339Sh2UuBBSZobqwqmiw3fiMt3RKerPeXZWqEd",
  "key32": "3NdHFHJL9veYqEKvf2aAf76d3x39vV3hnfgdZa1m2KHnFfKy9yUCKQrCakHFZ4KmGNC9cQ4bRwZEhP3t4i7QAF5G",
  "key33": "3Nzpz1xTDRgncpywy4H2gujBDDZeC1nrNs27JDR8TM2Q1asp7ebrt647jD88n9JwsW4efVwnC5SSy6uxmDi7uoi4",
  "key34": "5fg8jebnqonKeQ8YkY5Y8w4SobgXNQvta3PBHuYTwXQoX1BQBpBe2sFCnCNZoutBQ1gKL1d6ipa9uBqjMAxJcQS1",
  "key35": "56GCgrn6b3irrFJ1skvbWVcN3XAM6LeX6kZuTznMPsDJMrwUjFk8qZ2GQk6pHapbivwRpv3n1KJrZ6zeawd7Wq1o",
  "key36": "4BA9ZvfWbDcw9FuZq54aaCUhX4jz9fr3hsZDjEsJGaCAkkES6xDNfCQ7Lf5ZsazwkUHeuURwHwMUiU5LF2n759w",
  "key37": "4kDMJ8Nw7cmwJrXsLZ9g2HgCQHsixEPAcyCaXEB3CqVxJX4JwDKeKqaqisWrkpj79MPgJQ9hgn9FQRotJ8fPdRvY",
  "key38": "3whwEdmz49fesHgBQAjYK1K6jM3ktjpBETBXA6gnTU3JsTUaJ4fANxxRqL3sj1FrasBkZ4xhoSjbdcnn5RGkfP7j"
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

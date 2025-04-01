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
    "22FaEaLd1eybSA9Kn68G2ZGzQVmcmSYacKtJN8GZEns1TeNdiL8t9b99xXxR4T2bT6F2ynwU474cwwk2nYiiS1WH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mxcdw7Ma1Lz5UKpJTUC8MqGazYVqMrUHJBKi1LDkLZjV91qGFsNFbsNzkYkHd2BETAfr5dajy3AERZpWFad7n1n",
  "key1": "26m4kE4Z2C8yDuywrHEkdf42N8oxsbtzBng53SXcaH2Q3j3nZuNb9LmtPzeJXKa6tnLMbBqZjwbRoNpXS4PuSLrH",
  "key2": "3XTECUNc9F7pg3TieDYfucsCRSYxsKSu86mtDEYQBbHJp5wotNLMThUMqFrpcAQSYkSmkjVDKbNHbrfRv8id5bQG",
  "key3": "3UsMVQxSpWVZes3LNZTzWCkeg8zvhPihoA4T5HvaUBrRNop6q9Q8Xtg3XJo5Paoq9zsPhhhNdCVbyBbKvjpQHgim",
  "key4": "zijvdWQ9gwrCFPmuLjvrJ9RjYdqWaAAVUFu3kKEDaKqG8QSvLrdDivpV28v8JJ3iPm7ETD4pEoFxNDHwgXQCDix",
  "key5": "3gFvbPGrRsYgQvBBseWCmYyMRNEhHVrArSBG1qXmL89y4on3MtJ9C7dRkoisM9NejVKXmUYcr2E7aLRULLUTtxgS",
  "key6": "5ZaETCxxHph2CZ43L3YRkocivbScWQasDYMuH9AwXBTEViHmbi4MZXcJts2zijEL1krBdoohFQ9pLnmbVfp8N4Bu",
  "key7": "3E2cqBCtvXoRHieTV7mtNj7tR55bjMcLLXsStyzjQtEzvkNwk64tjDd5qUvNYy4mj8d4pDhL594oKGkkELFsVf6U",
  "key8": "1kapb8xGhGqZZxPGDvHVdkTSe6jSPEsP9n6vBHcRZMeprc3GvKZoNwxPEhz1rNqDXxE2d8pHoX7Q4CbPLG57N2",
  "key9": "44K5CDeRYbzJBFR8moMTnLhJQMTDiCLFUhkAZqhGguu3AR4mMPudjqZ95Pg9dKt6LBATN5x45sGvrPj1KTtcCC8J",
  "key10": "56qYYjPTdZtM6Ax8XM6jBN9CzsKMnbYCUhfF6DvQYEPD4QXeMTZAnLZQfT3GrJP7FGivs95atnwYsUDrZXzTyqz",
  "key11": "4rX9wZAeVaEDT5oVVnBc5w7edVdvqhV1dtbCtmVY8UcnuLb7rAcqzeFKR1JeSM18fiVtfSDfMG7xuM22fUvFhscu",
  "key12": "284386Bccv4gSJGxsoJha3TpQXU23A6ce5tXBn7H7urHeqhbTZC5QgPiQwGKYGVUCpziuSczzWw2kg2RtS2KnQeF",
  "key13": "5afDRfbgGENtG3oyQ6Up8UaHTyySiWfYqzAhkGerStPtjgm7ykeDTUenCmHtb8tRkMWP62WYa3abzf44pQ6LapJ5",
  "key14": "38w2emKA9jMUhn15Nqf9Cy2T38AUJQ9gebQRfsrZbEzADtRDcBBG27f11g2EyUUb8PructjaFH57AJ8UaoFMdFrj",
  "key15": "Mp5pM9QkBCPo5Qi2Z5Gznb6hSDM9KQkJEKLXeppsVGWS5S9YuXh3mn7HTZdf2dGrgLA2YwDeWQbmZfJRLi6ceFT",
  "key16": "4ui71vvVr9mRK84YKNMY1xpi3Q3iAJZpRRCLtfx9oM6kMgVnQ15tho9gx2H1XkM2cktxS7s9DLEHBELsVRuRLxkJ",
  "key17": "3BqWMkk73QHpv2rgQJBL4wJngiNJKud2pTCBBWHSgTB4s2zosZSnuGnygDav7iNRBfL4re8S3B9eWEu2uveb2WS8",
  "key18": "umhbRYe6JxR3CzduMuguWUUoMAKq77MjxuCuNg67PFCSEFNrHvHMWWsfTLkQCaj3uzJf4gMYrmdBNdbUBYPtGBp",
  "key19": "2MST8vja5xQgmiLTquRgPoUhDjtAjRYdodxkLjqajKHehSrKftV9GQZoBfkLf89mvXpTDXYJJdDu5nFa6S26a8j9",
  "key20": "3YE5xSNEQ3inpjhjhMN7aP95YZ1ueNfnxg7TjbGMKh377XuCjZoRM7LaYpSBhcNNdYwntHceYthh55jiGiHfaNrB",
  "key21": "2jzUtSMtUdA6RQPDrfHvjVEE9UwTgHaYSxMxoYE1V4MJTaFTQQVw7ourDsKc67ovPL2p1sUmPrTLakP7AqU6hkZ3",
  "key22": "mbeBugqS7hLdE8Dfvg99pdEGXaWURGqdpv5pH3o4HFFyUgCWJZz37zLDs7kar5r94gZ7mdGsGzkREuUQSZ9Bu5H",
  "key23": "22s3xSS7NsdvPRAAx95cGxv5p4PGfiqPvVSskBEvppGFjVBW6R1q64q61EZCDWEeUCg9fQPf1qpitiwoTpmbot1M",
  "key24": "4u6dUwUYeNid7w1SwfCaw2THHmtPkQt8ytDhZjArtS77QCHUUT13PdsbJqRyns83qtNFP2tu9hEJGBxq5b9PxKHa",
  "key25": "5UBgKKrU2XiFNkBJiMMQzfrRJtBu9pU543wqTX9Uja9TMKAdwgNTqF4Upiqu6q8taRwgcJioBfSw4xYKtNh4Hqmm",
  "key26": "4wS4Wh24ruA4MftbS6Ek5TAAncj7GGnBuj71Hy74bDb8kUmnpk9XxJ8d2TfxdtwPN9T73cdsyUHeDo6syjURFSfJ",
  "key27": "5fMAskjSVu6mWNpJ17MRnqAZ8nqWTqhmrGuCs3PyoYfXtLvkEMrYV5K28jwDdwtCgPGckrUHQk45Da7v5GbRGf3u",
  "key28": "2kHNGw7v4WNssKZPFKUqoT3Ws4AGXfCsLeDUdgebfnA3avYb3YFDaX6FKfSHdafQGMAv8N3TcnzFxraiHjLuvrBF",
  "key29": "47SS4mGcXMoz3WuYZzbkLG5tVciV1wu1ncifCd6WCsvYchdGhkDW9Cx8ad7M4eM3aEgh4sZyDpa1NEwHmpakNpCu",
  "key30": "5oTm4jKdfo3jj92LYcGJ28zfRYyUGwvguUNMBchyJ6uEpUcBEmh2sofeRLxt5ybwaTEp2DQYNiyajZ2Ku57sApeH",
  "key31": "nLBjYuuCQiruMf4Qd9h6U1PBjhpB4DL7TVmyHis5MoWog4g4wb63WaBkn6ZENDqTfQPKfon7dsd6FgME3DVDYFB",
  "key32": "3DzUQdBgdNragJ4bGR4iMeBn87EuBWpCjXhu7CZobTFrjpKKGezS4YVz3uFqwQqMXYBKGHpW9K7MDw3wcLdJu8yi",
  "key33": "5T33fpkNCcnYdDKRQH2XiDDYHujTYT1mLNRf8LjKvscDcsM3MYxA9p4zcBEw9i1igmkYZnkdHBer7YGrPUwcYz2A",
  "key34": "4dDuJ8tDF7DbME41rDsW3wjXKEPvRczncWgpRnqtx11FtaVfNNGGJmQFcVzTt4zBd4y5ucGyAufAYPPGgy554ts3"
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

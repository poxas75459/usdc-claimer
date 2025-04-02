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
    "5jXe6DMTGayEkzgPA6gAjWFmLBhAyj3EKasa2R2VZXkpAdxJbWUxRtTawBhf3xaG4p46gdrwevhfqn5x9JZDQVxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34hBeSYoQVeVVAQy3G4DXFJ2Sw9r5E4i8o2Cmh54Gzurvegz9uEzLbBxdAHKwemAnLSMLCs1qeb8Z61NzdaNkUfs",
  "key1": "29AcrUmfMKzmKk2Qez49YJa5QZGburA2iMTRy7qg8sK26qTZEP4HNedn2w41AWevN8EW24iMj3zmYaCNUrwnab5c",
  "key2": "5n6a2w4RRBDkA26PaGmJ63eaALDTNUVhRg8LtgWzFQ3FaBd7oTAPb2N9sQbuwdDH4c8BfFraCbdUExNvGkY4x2pi",
  "key3": "2TcxBx2jtAjpnULhyB297esyKTqFoZ4ARxLpGosmy82At1mc2n1bRuvFZtRNP1rDFrmEi5qKKr7g3yrfcjU4FvFi",
  "key4": "pq6MvHfybLDMPFpWCp1a4LJ78Z4TJ6bDW4hNA3Z5E9o3a8pV7vKZKjuZbS28CgXcQ1p1Qdez6gSCryPWFNuDgnR",
  "key5": "gfHvxC53A233TEgWJ774xSQG1gp77M3DMy3uE5HT8v5nGAcSuVGgWFDb9XdA3HJxoTjUztu3PWFw31VzEcUcJiT",
  "key6": "5YDnA4S3vb4KXif6a8AcYGtZkbWQvibjTXb8u59KJVZMF2XxHrQL7a7dLcY4wSStSSURtxpocBr3AJLSMt5bVMKH",
  "key7": "45aujqdD9UNouFjvq9tqhmzTkw5jsauf2kWiZDwTXwCMEGnbc1Xp4xMNWQD4Bnpftgt14cs6ui9646Fssi68ezcR",
  "key8": "3fAWgu7zvpKZdDjCkuk4PxQgviUfRU1g7QXKyjADQtkFXrr1vjm8E5ucx3oRxinBDtpz3mopWJcrtb9we7qgXPAD",
  "key9": "4u3ByAVUSBS4vZHmgE5jhRaTefSE7TMyvjJ3RVn5257ehjX9uDnbhEYftu32G6veU2BJ1MrEZvSXECsB42GFytNY",
  "key10": "5Dxc2mzxNM4XrxoJMubZvQhkRGJ5G9JN3zyGwDBvFVbagWsAUUF4r5SQdSxH3nDeGeYoJRDVE1bMPEpTP683VGJB",
  "key11": "5kZXqZauM71DgpqmNaQ4qTcwELg9oc2KhHusgfxCKDN8rh8GETHCpGHBs4ikfryJmbbCTXQmMrdoJBzwWAxS16Wu",
  "key12": "23iAGUdKrGZc9YaLCu9nGNw5MgieXZUWEEmvjNk3rsEVgaxV9RN2m7yALMakhvqXFsiivaFmyyhUqXUzGwTPUUpW",
  "key13": "ZzKLwjNfhnjdeLbcV7DwVnwLaDWoUkReEicjtdNT5zEfewMrBGh651w6HSbEMFWKZFRpCAAqjtLTsqNpUjjm51F",
  "key14": "1hYHgWXuVj5vX7LHUStbj6CSFDVLW8NNnpfPkXh4MoAHHGG1SfDwJ1Aa4iPrLm748L85EfKFfHatgsgMhghuevf",
  "key15": "4EvpAMPcQtvu4EQvvk38uBEmN2yFcSfHPDosTQt25ajSxg4PvdTbBphjxUVVwLmf8m554mqJ2JtNUYnQieFfJ17B",
  "key16": "5JnJxJMj9Eh2ZrRGsyZWb2tBT6ggKz338Ve8RcSdTHCk2BV3GS1ZRYc6AES69mDTjYscovnTeAmCia26dVXPfbMW",
  "key17": "4sZR2fx6HRVZ8zbiFv6radfzJV1oSHcGNdvZGC6NiTmXuNhAFxAavQHqfuGrQKZcWUrDruLTvGHVzvWKk98LHeDy",
  "key18": "2QShctxX1BaaAuFbYnqpBjTukpzkmvBgvtTYn9DR8nr4k6nCbUxXVoAFVWo7mUw7hHS3GmwkK7nZK1GgbKCRsGdK",
  "key19": "4PbTEAEHFmUfFeuruzrrZrE1jsRUaWabBsSZW1PFBuVGWGYRySbHnqbn4uybv5xBwfybirxLu5aCzC5iN2Emrirh",
  "key20": "LAVDArH3xWs7i4ZZVmv358nArvWiKsVVLKet9hsCy7iix6i1YdLmNjMV3Dn6j83mPGQhn2SMqeuxtPh86qWiKyy",
  "key21": "DpVNb4p5T34dZBxb5R1jXE8DVg5wLP2G9rMeodVybz4anfzqsPi8r9DpeHjd1NXhoukxVohH2RhZWhUSqBGMXKX",
  "key22": "4thdE7DrJDjgeo9U1FtQT6FvzCFGrpySnx2uogn5VZTkR8EN2a8C5pgnW4D4hsdYpnWWu7ikgwuPqEHeQMMqf3pK",
  "key23": "aCmdckaediAecgt7oreFakUQL5o1stu9o3tog6G52xMwQfEqE2DoJJrdzyzeseD7V6zvwp84TFQgZGY5TFeR1ca",
  "key24": "47BxtyBxsjiEjXqm3F9zrAzoiVvFXLAiwbwoY9v8D5AuAsgBcwh322LjNmp5poHqNochuLYwqpTJdgTd3hAGQAa3",
  "key25": "pzoUVfb3iWv5N5M6SKP2P2jcQU5REpngbTssetdksBgk1W3P8LbFoB6Squk9k9FHroxvYy4mLy5AtMZWJxzL3XK",
  "key26": "5vH1U3fxDCTVtoMtjw5FrBj4gbRNS2SxypA5X1znoqpvhcm9HS1MMTcYKhxAGd5UrgPn9N28irYm8yGJx6iK1ecU",
  "key27": "2PcGmEniPof3KDNVzpKHS3sEx4Le6x5Nwu1zg8hEUmJYEQMmxxbyh351D3cxXRxRxPk3zsUsjtkECg83m9QFUEUh",
  "key28": "4RoS6kk2MJHSBezWXsRyDnxoESEQcCTEHXAPHS7QjWxJxSPSmUALfNd6KEtSuEAvJYab5CE8zVtRoL5h792wfyLU",
  "key29": "5fUsQyLakF9sMy1CXq5gPQW7nrYFSPHEj1wL8LCsTqUpbd4Yvyk1Hy58sWjs286G9GoiSpjdGQzEyutAk6TBjYUJ"
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

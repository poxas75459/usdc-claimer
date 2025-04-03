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
    "58HdS9R8DgAb7SbiipPaJHZU5y8fA7A6PqYVb9dDsdF2MViJRvUaERofc1rjXWJz2wBWbBkwsdfC83Y1i25KMRKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWRUfPM78LhetwrHXBvEL9RRiLwaw8t2JDVKrwryQj88bTf9S7wAHU2rFqbGtj33TTknL5un5nU5zysU9qYcCwg",
  "key1": "3aBcR67cQgiwyBENmHWPV6kGo7VLwPbyR6bHiaBZtCo1rDNNn9j3nydKXEQbkg6GoUYnvRih5DdkiY1cSqwqF7KJ",
  "key2": "21i6Wy3HmzvfWKcqGB3zTpWCno2RWfvfFcpLuK9DZQF7MaHUHggnY9yvmBedUHatKZwdqUC3suTY6no3UyYikjLU",
  "key3": "4dM4DtDDKLquFa5VKzan8394CeRrBxTeiys4dyapKTnTvoXErt1zrvvjQvefTzb2TxqNodwC37V5RsazDYtP1xpb",
  "key4": "3CKm9fKZPifpqSdUBPQR1f3pe77uWWNMTxQ6TABLvuxLmS4PbrfZWp5bJ4NCGu1RLdNb2qUoiJWxeEgWDvQvyobH",
  "key5": "2BYzrtLamUDnxSNMeUWfTg6BAmjJkj3XDjaUpCHB5DdWFbE4WfZEQ5gcQVYY9yfTMDHkHJPSkQBtwgeNKF1vr9Pc",
  "key6": "9o9nmqxrLKnaYpQ4U9Mrnf4AVbTcATCzMb4Q989uzc4yP2UKew7FFCQWooAqbc2TkZysppVgFUXWaXfBhSZwUJS",
  "key7": "5kiH1ZSwwmjVcTbpKyqrxAjLSBb3UwdJYyFqfqVn3mo86yBxtb287NNSUSxyFsSKTxc8dwCDtiRYipUjm3LnuaKQ",
  "key8": "2gqsfmy1RuMehFSJsho7Z1aiobHgAgQfikmWyUpXYP4y6Q4s1gub5GCeeGSL5qsU2ow6DAHBZ2nbhdzBvmUDawS7",
  "key9": "5caYiGMWyKA96NNZx8qfvTHEpjjyFssrkmdU6SH7jh1ZxmQfoPXGBdzEmynC1z6KEFSNdh7CMDu2iBYqdVVcjAAX",
  "key10": "3Zz1Dp6A8dnQrujjZqgDm5pVGoZo88W4A8cK7bAMBGxDKeWXFxQPxd3kgdfMWEiq4iKwCfVvw65h7b9HjGQYJaCZ",
  "key11": "622yVd4h8aJnAN85qRSHSDCfYjhkQMMQV6bySLtnKoN6ohtVJ4h7NXQG7Pa3u94oqBctyoduxHS7AEtHec46tGyC",
  "key12": "2GJLobEqFZCz2aX6QUvrVupjQ8p6hoGMc12JPMZAkBDXHdTqFWDNd3a6kgBUknznjqDXL4eBEgWRgUJxsAwJfunJ",
  "key13": "5FNZMqaHnFcDR51JdukwKHdmoDA2VaX3TU1E7vsFeLurW5exvLoDqTu1RtT8YdXmRCya6fyMzMHD7eLznuL2wi16",
  "key14": "38UNpTT94DtHdT3SSBGpP18ppnRSasG2DZ9mSoXv9fPycH5wuScH1QGhEgAjpwJABVMfECRU9A46ERN77kGNsC64",
  "key15": "5n6KxtZmZjBTfBLTESFSAjFTdMaJU8vQX146Epn8S6QG9keqs7jeEy7t4XSrTnaY5ctouwyteb35k8sRXphrPKRQ",
  "key16": "cV96L8ArXVh8i6ehnncSjDnkvpcuCegEG29tAtEyukHNXJgTRK7sjnKvQfEbvL2pXD7SR4bTLzc6Dez3uqUXUbt",
  "key17": "2VGWhZSut4ggdqdjvPyxhDtzWPXhCjRJBotAay5EfndGcmTpHxCXKRFjbhYe36Ux4BoUamzT8nNQJaNrSnQMT95u",
  "key18": "dKEi2N1oU2hFourvWYyBSJiBRFdeKv9QHhgd1h4BydgrecsN8b3Tvt5eBsmVFSfVmG9dXVuPcELyhputzZATzty",
  "key19": "5fr7k42EzZPbzgcBcmzbmUWvJExu9qTQM5UA4muWeSYhBmEy1EPj93zPwAFNkxQQYqk9Bsev7AoPBDu5HPts4M1i",
  "key20": "3X7wQRzqeBwW14Z1UvBZLskDF5ZmdpX3ULQ5BKXoHwnLgMftW2pGNMDnFfSCKqzEBbTm53S5Fs6WzWNtBhTD3qW3",
  "key21": "5kL43wqX8ady5jayMPMAHREAn9b5jC838Wd7XGByfeR3YsRUdp4Wty6jmx8yDfEE8t2mMkPH8ZL83usgkFcXS1Uc",
  "key22": "3Ag4qcdd8hN9XYZ3UsSZE7scd9bz8fDc6yCFbgAwA9NHzDc2cAVV6zwoiJYQ3hR3sf5LMzATZfGWU3NwewakHh66",
  "key23": "2wrr9vdcGS6Sodgds4mKSrmkBgk6488yRyhWsD4L1SX2KgjpkQDJDXwdeFAiDdRxoVKnd4CCDsu3rYv5X5YaDgAm",
  "key24": "4oZ4u57h8jvB6VDbrtwm9xokatGxbMvmNHa1r7zReHByUV1C65H1uG5ppVzWuY4vjnVG26keQ1h3C6Pp3urcRky8",
  "key25": "ffXUjmpvkavMXMRB8R3rmTnuvJi1GjD2hwhBBqdqhw98pHjYLxawb2eFNm78z5FA5aovfxGfAgxoa1qZTXK5MjE",
  "key26": "DDu2w8taUHxNyarXC2Hy8QdhwB4LKdkungH2VCPLAqX2jwEpicnwKA77i3hwLFACjCtkPpoHn3Vn6w9mh8qLyqP",
  "key27": "26gedkXcs5MKpYzrdvhj7Ms1muYyD3U1Ka3VJXdU7NBirG6v7YVZsdoY3W2AzDSQRZSwdkxGnTj72coxzRDY5QeT",
  "key28": "xvKZbfxZ2AKMrdWNcyGf4J7NWh6m5mfaYBrqaqHYuGjkaJWkWQ7RWihtgRsYjKMraegKgfwJ6c43iooWHCBiwMQ",
  "key29": "3mBqwnsfZwxEXa9BJ3MDKGwg7qdGZFu5yGfq2ADu1V22C3Fi2P3WqhGHM2c4K84HxMBYijD2hXWEFpTdf16pbYzP",
  "key30": "W6anWCPoNPvYJBEWhDEHFArdXcCSnRNW3vcv5RTEH2KJKw2Wmkx7G8VFZXe8Sh5z166ssHW25apz3bDhiBYRHfg"
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

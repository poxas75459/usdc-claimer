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
    "23gwMp894DxiVZavMNFXgyeephfxMoT8kB2hn2PS7h58AyEA3VRVAs18e6tcV31aEFhyAzTtt7U5NNE1Rwaax2pe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZKGBj4PKQKjxt336bVGWYEdDNMKkuC6ajgxWwRmH9WGBUxqyESZGoYU4GW5Csj8eZK8uLS6EtzzcP8ZSp6ZyBx5",
  "key1": "4ipdqbcz4UPv7UC7XT6AmBob1PoyLdKR3t9i14ouqmP3F9ZpuURCL16L7t2JGAzhNjuvVDeTzTJjoReTfWn6ZNeQ",
  "key2": "2MsnGw9xrF29DVoWVpLP9pdkZeSWwwibs93ZKFVt7fBUXH8NjfDC6WaFxc83yR4tJPtyhe9e8E46rBvYsXNc3G6",
  "key3": "4QSG2oVAb7qVZfZQPj9JuwRJ2Bj5iHJNVEZa4Y6KQxUUkVS3PNwX7ctKhtEpGQ2JPLpyiwWhyijYr7bjReZMaQ7m",
  "key4": "f7mShFqU91SQDrJhANQ9evJHjFPu5Bug7nU2vSH6WBvvhCT22Z8WS76cwra8TyFzLXb67ujXERAwhRffADFwpcT",
  "key5": "5JKb4V8JUepav4L7JU2LNk2PccsqXXn8JQ8YnmCAJfWJoJXpG6LchZQdxmtmkXavnQMkudcrNGhfJuD45eZHc7ax",
  "key6": "bCvdR8c767nPZLQnD4SZJ2vKDcs3KEqoHvJxnh19PSKya6iHDxoJnSMf1GgAgDckUA9E7W5ApTQJiNsUK9ZULz4",
  "key7": "3fNkSVmKXvFzj7srv9Rkdxte77VJz6LN8bELU7pRQG3CirRxpMM7zQducFg3vMCpDUZFf1DLjhVGgC3sJikcsAgq",
  "key8": "3hXDkJ2AycgwMsGpYCuhVsntCe6pUKeB3qMawhP968dpqUy7jJHj15KzMmr4fabJoV27Hpw8QQKBCRSoRikFCfC5",
  "key9": "4qmVdWktaa8NBKXSoHtQTwYV9JLRE13DMLwbeABebBtYghqkpaUhPELX7taw4hYwiQzUD16dRmd4WUKm5PGZB7Lw",
  "key10": "6ooFC4CGpfYKeVnoPzsRA8sqTZQWYCqgFmpDpLTaw4QzF1JdPbEbRhw97ER6SDm66dpuK2tCwekuApD5XjHmAv6",
  "key11": "47yBg9D2dUaBo3qtXihJTaCe8876R5nHa5VmJuKuXD1SNemBjtvDRgEGGsUJMWhcnhre9SGZCXx9hRXCqj4JK721",
  "key12": "nhf4Ccb9cGpQqACyKdKFzfmKwhqtd98JYds2bNmsHyu1MdYLXgSTz4MWo63GeAotwHdvGsfyjgt7T38pmj6ZzcL",
  "key13": "5Qbj9osE9EtSLW21D9yk4uXinMYoLLwaPscjfasy3Rqkcd8mrphtbRZeTFgysyrviPqJnmsDP7SWbaGVLUxXnFyU",
  "key14": "5q4XJBhKDFUjVtTevz7NEJxmkaUZoFQ5Ziuc1vbdWWBEEvTbUf1oaz8hYB5nvXHbptYqwQhweeP2Wp3SMaGdwqUH",
  "key15": "5YXpeg8mCzdhbt2k2xEoTJpgkiycoi6PZrpEikP8x6vVcSATENVWLi5dVuh8CFL1PxhQf6rqnqTsgawZE3ZyEAur",
  "key16": "3r9CzkTeGhVy5oFHBPCBeywArvygBuJ6tuC7aFP21kCqduam8u81VjDxcggzKfkjH5HC25LH31nQwvpMggantnHL",
  "key17": "51cEds49tVsf1LRbfMBz8CvAZQVud1VEpkoZikRnA47dv2ztf7V5qs8KNXPEj7euJbndiz2nyvqNEs4BFP9ycHiB",
  "key18": "3ey4ECqF4RGdBrqVjaH7HUmvV4mNdZ1ofwYC8dMcWRh2f6ZkNeiNfWzNRYZP3RH7g18fWTTBrBckDuG9GoYGQPQW",
  "key19": "3GxwYUWBbYSryn8XV1etGPaT8GwNE2J19rieSsbtkBbmJfSRjeNxRNgSb1gndxFcMJS2fVFoxAd2PFjQxsxCu3c2",
  "key20": "4L9tnMCscS1XU67oTayAWsDYndcMpG7xjsMhf2iJhoFpujSN6X977N11gNMXMqUdLZqt2fPC5HX8Rtqobjfvz9KF",
  "key21": "5M7FicsjU25BAwNUfxhNXgq11yEB4quaYjKHrtQBd5j45FqAMfj6zH58BkkoMK7eowMsg3bH9kS4WdafHLSFSSsk",
  "key22": "65EMCuRnyfhEXDEQGWH839ya41o5XjgFXHhEX3sMTXuoCxFxFGC2fRZjZpUiAzWNgZJL6BHMTMHXb8a6kfFNJuZv",
  "key23": "3BKAreocEwbiV8bpchcSJaxeUYtSN9g7gAMfDgtnnqA9cmvERZL7SRf87n4kKmdt7obJ2XpYVUN8AH2FPkQ2pj3R",
  "key24": "2auN1bVuQU9iuZUA5JVwtEsBAW87pr2753mx3cYEvcMbdtSoWoeHx3wk5Mp7xKNJcTnnWK3EK7v8LwJ2H1itbAvU",
  "key25": "4u3SxnPYp1CRoqaWAdTuViwxnqcUaEWVUoHG6ArYZs7XmtC7wiJm2BfxGCGyWk773qLz8SkfSeKjz6pyvvf5U355",
  "key26": "416DGKPSdkdNBN4QgivHWjAndgdBhDCpfWj934j6vt9tQsyMM52qaSkUbgJfkBgwxdC3JSEy4bbQD7cosBxx3i9a",
  "key27": "3URDFRdmjv2UwSB8iTcWfa9LA4axn5tAkQ1sK1eFyzdmcau685U1cp67NarbKFBCv5GaznVrGLkoyKccvD8EvnTs",
  "key28": "2cpLbhu1mxRNMN858a8X6XDg3CAkg8LkgFAPxP7iFDNqWRZydRaxd5U6ss7ZwBB9ATncMdPQcZEWVjVZrBki48ds",
  "key29": "4qhUgpb4codudov3UNYgXo4K52u83S3D8eXm9ekbVouhYK8o1YcWyiavJF7xwkvrRc8UBG9TNM15rzA2M42tGMXL",
  "key30": "3pY9u8ipU2R3exHMmGLzkHGDGGGZpyKuSMGspCb6yXXeiPrHRFEgo7tyi8qH7xeVkVcU3oi3LqDVdxobrvxptqQw",
  "key31": "3JJAWC5A3x988zcXnNtaenGgyFFkLCNGty9BGmxrT9YzwSptNCzG4H1MMcJWaBqwWbNr7QGVqcZL6c7tcMs1CJEX",
  "key32": "3jNpZRs8rPwBb5tfd1QY7ADcwqAAbwGZnbr1jPaP3idLrT6jxgXnjWiAkbjR7E7nR5pGBeixwVchaMZGSf3AUyrp",
  "key33": "3koQXMxYaPtyve7ZnQRTdBdht8HANFmPrRNwiKfhz4KHhdWZz7XaQ4S8js2Km1vm9jPUEYFcfztTP8pbZuMvDqTC",
  "key34": "26qUje9FQknube6DxzKZrG7HExHh69rax22jy5DPGXjwezKkwsXFDHDq3UrTz47spkzfjNr2TfuncS3TQPxgA7Y8",
  "key35": "57jgZnwQu9kJsuYYrM8D53AMzZrCDp8JQCRreSsQkC1qvmwqTJGuGxZFdq2xt58VEZJjAqunBCReU4oGseWk7upf",
  "key36": "5HqqnBKeuLKAZympsBYcBCmaqDvQwwwsvWKgwyUT6ueXMBTqzxyeHWDkf3veSYgDuf3cugPE3V5jWzn9EGA4VjWu",
  "key37": "wDTzWLn8KZUKfWrJbaPrAVaZ6oyKwGgqHLpESE17h5fGNefqzTByPBdgVEsJS3BRxW6SF1yg3vz6rBV65w57LrK",
  "key38": "21i22dvPHW4whpgc9mQAyGANVi25SG9vLmRnT6mRhX2LDHtsa6T6yjE8Hb3znjUD9U6XRUmN6T3KgBtZHGQCsM1c",
  "key39": "QkefGWdjU2kxH3fKbndAWgrorhTiZxrkD2SJtWnxqKBUtSiJJzQFF3UBod1WjHTXv88oxySKFWHpT7xnJS8VUA2",
  "key40": "GmKSXHrFb5Qcs1kYMGuQn5APt89GLgurrXLQy8My7VCG5CQxyAAt5wsBHmHntEWbkdFqeGs5kxTtSmudjd8uHRG",
  "key41": "2vNmnuAFsGbBatdG6CepEgDpF5CmHn7DbsnX1UDq1kqw5sR8o8uWZvvuxuCWusB1owi6dQ7KatYoh5Bo971FG9wS"
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

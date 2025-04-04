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
    "3xVhzghLbn4KuMZ6w24UqttjdfWMopL6aMCPt8PXTAkVYLF1gpjaSLEeCwU9v8V4iL5rSYgWxzChh3vBSRT8wEPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JbqmskXaS15CWMkrqw7x9uj5CQkSqEQSU4da9KZkNj8b48HTVDJf3QtD1NJiDPFoAgvdTiqJT7U8MxS7GDgUEHP",
  "key1": "3Kz98xKKNmGnU6jMQjkbRokiAxuzhhiqcAbb7mpp5g15QmTovMb2nLLqh5PA8V7b62SQNwnWZLxzBZ3n9o7v5Mwe",
  "key2": "2ddwj6Y3ftpPvCoKkLqq3CsXq8sMNSfDtAfZCFrPvMo9bM3PiGFGPSvpFiG8mZdumwwi5JDtYKiLt1wsNsoJXpiw",
  "key3": "4yrb3bMvCQ3TfMDu1WRHzJJ1EfMTkvfFg2WCrrA5Q3aiub6hqWpMYDfGx5JvnDeFkiw5abYYhWNEGsZDisD4oYQ6",
  "key4": "FNipmdHwJDHbpqzACjPNv39fG1kv5nCWF1qoPpLjFdVkS1FZecxaJHFhHV3NkkfxJY9g2eE9YcVUF3nSZvXTQs1",
  "key5": "3Cgq7aqhTo3GNAParDXiawveF34qNmyCwTxrQVbpGpmYsccB65H2aah1jbVXNEfapqsV3aSdUUDxoaGb16KwUjRw",
  "key6": "3nLs7xZL89fdwLP8xoPF6ST6Wo4eC5Rpa1Z5DGvoh9ymvTYrc5kqSAu3D2dZ4ttQzzPUuqZsy4PAcPDxZfe7HmkF",
  "key7": "51qmk16vUrUSnwBKc68hZaq4bkVxSw4ZuF87t3RHMeSGjp4YfkJoSLby8y2ag1MF6JX6WasYCjfZMbm5ThVxmdCL",
  "key8": "2EHzHE52TQyrofPkAdiwrhqWNh9PFHj87Sy12E5srs473ZnqPYyvnstL9nJAAMargbr85rifSXXT9mT8SoqoEA5K",
  "key9": "58HiNNZNLbZjjGK41w5pbDCxdg5RuWFFNgN1rK2w7iAf8GfkUDoxNBvLDZfYMQJykYZ1tybS9jDxiNnSzLdzbfez",
  "key10": "2NnKaeL1vzM8GohQyWT3QdBYU876qkVsJYZP2GyQ35VT3nJpC9LvTP7iQ4vKGyK8M9H2qqM3idd17yV8XziSj7hs",
  "key11": "4PFGUAT1NiwroKBrxWzAzVrB2rDR1EnzPrXVskuCMYAUaJ8WkNrXnzcV9A64eNnXUbtRaTYri2csaYE1Q24f4mHQ",
  "key12": "42R8kDQB3rEwLpajFFQWNMcNemzPJRiijf5nKcoi8fHYTRihr954xN9o2pzRRzoshxu1kEZ61RCgxSWb3R5r1Q8C",
  "key13": "g9XQGqa5VtfuHNj4KyCzzfZMaXdPeujX3NzLnR9yhiEwbZD839tyLUdkDcg7MNv4VEYKVMmUQ7nJim3SDfCvpVD",
  "key14": "KaLPV7vBoFLgb2feUi4Uo9f4te1ab5m1Ynx1M8UyBv1jycVyMqXf6vPBrPXRD4iaKM94MZoS3Cu7KPF5zuLtuMH",
  "key15": "3w1kL9L5iXvjMjrocjQze6j3kDgNJiotXJDwhwacsB953pz73HLQe5G9hTxP9AG8dR2Mm33jADXNp5sDdBYTCQnC",
  "key16": "4vMZkLz3oueCxdF9DKUZPSFWgkWcViatVcBHCaksSoeV8RWQx7gagZAvX85BWVrBUv6RQriX2nDWPxoCS4yVynGQ",
  "key17": "3QupB52PSVfhYZtZEpwiX5oLBmjcvQzs3Tth14bXpkJFYnyNkeCeJziFYQp2zGYpotHjkFR3JW37zc6vjQDmTDKA",
  "key18": "3PbNTf5aTvczXxt7tgghnY3WZcxRyazfS5ThPp3eeJmcuG2BtbxQf4EqGChPAPBC5u8Gq4gKPya4ddaCwzLXCMZC",
  "key19": "5TgZhp1m3Xggpywawk3mHJyNqtTT7vmVCDGoj4kCqu78YqJH15erYKQgmGSargskJ9TDCcQs1pw3iRBmEpasFQBo",
  "key20": "2UEsR3Y1qceddeJDJWzXB7hZF91b2s4v35G2Qyxp4SDM6jSd6z6jdog2sHteinZEPQgVuarGb35u2qWtRC31BgY3",
  "key21": "5UPwJwcS9FqBH1ms1fbq1hNcxbFhUqRf1f9hv5Pg2NankQdBxxeT8VeHoxDuntXCapKgXhCzD8tdVgc5kdCcNT3L",
  "key22": "5U9rZhUrFeECxeWkRksveYdvXZ1KiH3FcDh76fyJHpEJEBoAQUvL63HvgXDQz2c9WZ1ugTsAkGXHduVwMkzKCkBr",
  "key23": "4sgWkg9rb965jCg8JC17qHzU17UUq1qH3qwmkyywcomvUUnf6uXDbB9uqNnKwxgJvP3hLBTyCxp4Dn3Q5tYxd5D8",
  "key24": "QaVuC4FZKV9eVT27tTQbdchWVMeQaBdQxhNzQA4TzRAG1wmNWUVjwbCmvw1nYv89z57L6hBX6qhyBZaSKYQfACA",
  "key25": "5FEAr5GQn5di2Term5S64YcFWrTcU3fbsNLdLyAxWYvt6NcjqVZyJ5RwLorjJrccBCW9ErgKep5cQarLhBoYFtFQ",
  "key26": "o47CgbpHY8mLDvV7VG5wkVc5aRAYSdUgYcRdDhB9nVHKH2KFx9dAvHGq3gXYuf7gEo6WDaht3ALELe5bWevR2FM",
  "key27": "5KJGNmWMaMou7iemwda3GNG5juZ5J1C3PMQxUgsYAGxLFKny2ZMjJNxHpxnyavrrkMQiDmgcpFMfy8G2ijwxHDFh",
  "key28": "3BhZ3s2xGfywL5ZW4GGXRaVrhGSmwbEeVN37hJknXD7afkgcE3mbPeeEaLDHtroeZmJq49PaCmsQk8obp9iEucpE",
  "key29": "5667uoTGMyg15ktV41VW8AwUptZ8RQc1bb3feeFpMuYXY3AVLBnqNaDMty1jdjVbHWAjWKHg18AyFfd8Tuhnr5S4",
  "key30": "2xMpZHAEhrDmLV78BDoFQioQkxrmLs8bV2Y3n2vTcbSUodhJb5njJeupDoBKvgYuWjKY4Gmg7w3dwH7qbUmVP3cA",
  "key31": "4ZRdeYpNfNcnkZ344viucpUoW9AZsri56yTpZU1QBAuFrvJuF23QSJn2PNnfDp4pn8Uu2oywUdXMZMbCqPH2J2UK",
  "key32": "2W7C7eNvkoDwq6GvuBQp4p5yneDo9jn7Fg5MdQVTet9rzVxTeibnwUn1HFLEJAAgfF5i6XAJm6KVoA7HKq1AB9oY",
  "key33": "4gLJQX4M3YFt1gFwvTFGCgFnR7Pnm7mY8koA97xyMsPFkZC8CHeba9ds1jECCCqgnLuGpEtdFtdXLyr6wZYjZhv9",
  "key34": "4ztgWe5digEiMyNFEaP4HqBNquZhwpCgo1Ry3y15KURBjbgc4QVYxUeVQhj4Xcma6s1NFcpP6s7uzJ1pi5N4eWeo",
  "key35": "4vSn6aHTuiTtHuA9rnM6K5igNxTzx1kaumXwt9HG31KqVhmDJJFYDwR8oLwaRVx8mbn2fU2xraBMuE7kAw5Nbmba",
  "key36": "T9oT8ZZZT7fPopqKE24G2MVXzX3KYTvuPxhKNJJ2Cckwit35GX2eRU1yfFU4r4NePXMRZPaH5Zq7nFCdnCp3crY",
  "key37": "3dnXpkgDomh7V87JkpxSyMCeep8LiZM575fjxiRSBqEB3GsNKug6uiwcH6iWuLrahp4JsmgWp7ughCtBAsSo4q4W",
  "key38": "4NfQgrKdqfcv19txnmShW8GMG62W1WNXnjFSNn7P8z5DCzx7Jm1SLTsmNhXNHQEcJQWPv2VsthQ4pFKs8jD81Xs4",
  "key39": "5ZKGEyhW1LoPxZvDEgB2Psqv41cCYJ59meqPKmr4evWdFbh18TNGTiL5y9RmQxdLtTeiV3ppSGkKU4g9HizVgL4f",
  "key40": "4UXu2SkaXNnrZxpt3itGt1p4dm8WGXXKQtyNvBA46SAaQ3RomNWvBft5CU8Ny5FZaruZ627b9MDqkZJVhVbZ1uo3",
  "key41": "4LjQkg1Ua7j4pVEbFxzfT1vvKDEYUVkdzgYKFF2JCJLZ5cPHw5mxdAy7mtJg3ooqnPrRtjaushbouN9mqGchnn4U"
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

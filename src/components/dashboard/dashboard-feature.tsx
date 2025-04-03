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
    "51teyBKzy3J7PQTcuWkiZs9Ju3B2Pa3HK5z44jmLjDvwMduDEUYHWDy8peFxSvqKAuysDatovKaacasonkPDFBgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SYcj1B2rrSDLgN9Qdcph9KFphwp5jqZSMPf93TgwZySx22SArPgm9tFLxviZLt9ZxCenzzy1F5ofk1gJJvP3KJq",
  "key1": "3zhJSJHhbUjVg4yr7LsJV1bxJrsfZxWRAhz8sNRaz8zURbomtn97shLYEz97EX1zT1mXQcybz76Hg1Ad9jMxHFvF",
  "key2": "3C32uCxWF3NA4b1gn3RnyeaV38GiW3b86W7TxVRyGikFU7wu7ntw92oQRDuyw14RJ3iVn5sYnDVERmRtbmCsqgyd",
  "key3": "1DjLLxr2jGcr26261mrieq2bphoc6WxP7AAAHSNxA5e7tV7vXiRSjUgRnYUSf7C75WNTMpbgEN1nwJ7RbhvnSRT",
  "key4": "2MQgM8jpPUtqeHrYcXwEgD5LUEkgW7u6KCLkSp6EMpdAZezHJtE289CqwLeygnG6PauQCN2rZS71NSJhe2xGrxEB",
  "key5": "5CX8ozST8GbBMN8MgrG8NQPRC46jQ6HLE2v85axYxCx74TVJqkQNCey4PUcMEiMkPf44PzBvK59dD9JVTz5gmbkT",
  "key6": "2t3Vo4ZmrJxM6VL1wHEDqyBeDTwHTbaxRv9T8LHKjwELGYhoWtNvwBpeJQqFEHpwQ8Pf9zQ26DUSiCJJP9eCsfNK",
  "key7": "59zoprpxdnY6WLPGMYXT17B1bvSXPoM5YcT6yGwVKBXatQqMdV2pep6vW3BDW62eZRm2Dh3LdVG9myoopKQpHdpA",
  "key8": "3F7Z39UqCsF2xuUwo62JR2pSZgjqr1tiEbCZvmchRTwGKNHGi3XJNJnsduyD9YXMR5ymBHakEsgESNqAZb1NB9xV",
  "key9": "33JyTu4xCFE4nL72fMhMdGbyqwjwkyA9BG4wRyYEbtvnv9Jvb3V2fJvukHGEEf1Dc1XB9JpcNukvPcpuHm2D7Tb4",
  "key10": "7Gg2TbJySkErqPC8ePdbZHzpCzvQ7iSX7PG1APGc4FRRPBF3eK7khM9biw3SKvz2U4XXWaXrpBqthieWgt8mw7S",
  "key11": "59bq91BMLUxrtdcpMcUu6aMX9oxDG15zQS2CTEuk6ofHm5AQ2kYrCrC6FxqsbfRx6oH8gouVP9PkWEv13Ufvrvbq",
  "key12": "4jQW7JgcQGadr6qPJAfS6D5GT6E9Gr2DZF76v2C81HJwkUsFSFa4vR1maXaUsiKvtUNktoXGKRLEeqe7Lb66JBwj",
  "key13": "5piUbyD6MJiojbkagiE7uUkxQff3VW4cCuzWxhApS2gcudNgFvkEmT8ddCovcsUmdyYkWcVLgdEzzvte6k9KhkDM",
  "key14": "mLkXmQq6dNRSdnbiuvjsQLoAXpHPwAFWB21CKXH3P9UZVddLNessxDx4DCc7syhbMRr92N5mTs6iu2nX9zjM9zy",
  "key15": "WDXMsrKijpjJgPPhfi5TaWTBCLdvp5bcuSFiXtTKzVsoPXemyrxQoqqTyTKDtmuNqumaPAFVgby4HCeQGWaxwKU",
  "key16": "atdAosiiKyEkTubLqRSqSCnh6x1ZNEjVQSAeFHzWQTyPPidxrGnUv9kUDvJGsUr9fx7xoENbbXDTehmorFVmf2W",
  "key17": "3HJMUHc18LURZ3CHd8yNHZags9ZcGYA6dpPj98ubaTfeNAykiRU75YpRMTgNFHdDVdZf6omEBSfid677XzGajXjq",
  "key18": "5D5BVe2JR662YgxsWi18V3tbRTd7UuneoVmjcuRh19mZtnUyBmRUL1hKQVwpFZg2UoyWNxTzQSHRQ5wgRUchWhuf",
  "key19": "4q3BaF2KohsQKeJX1puhoPEZWseoNRrh3edGedLY5E5EZNb9fVaXuqSBMf721AATGY7LuyrRKeZjpsBFqJuoLifQ",
  "key20": "48AxzTz3bNjQVjp4sMaGPcPi3Xr2yG6LHtjsLSBYv4DUkpGxT2NGRrfXhho6wKKsheS87Q6gGML3q6aGg8UamNz6",
  "key21": "ZeQq84Fx2MYeUCBHL8QYd8r7Jrd9F7HHRFj94LUR1mKhNNZW4eEU8vA52trkam5a69JsuskBHH8TkdjM2KALVXs",
  "key22": "2em694mGQYGyt7VT7pjhRiVzCkojfomLvJM3oJzVXqAUN7CKJREeamja6m1Jqn8PH9hq4Ab6gjRNkx9uyNaPuuAx",
  "key23": "5YggWoGiegk5D2orA5vTRunc2hBL9gJvRw8fTCmbgVuRTjGGXWiJ2UrUTRwCgcErMFmTFbiqZWGe3GyM8XRExpky",
  "key24": "2D2Q7STmS4QnkRr5DaKKpef11Zp5XGPRJAEnsdwCmGGAJyQ6fbtdhLKQW7AT8a99puNcqZyJZHRWmi7d7WedwXaP",
  "key25": "2Hw1Ht4Hb5sDfRzpYcXEWywRHMvzNXvEeRUiuwamUfDQBi1omNV7T62zyFzEBwHPAPjsrw5gTRQk87iFjA7KRky1",
  "key26": "3ujwkYMgALLq2PLAWacY3hTuFHXjpT4zENgv4KM28E58HpZwVnsFt9Q8wQdWuQQg4JxQyy8fbyxLaXM6sq9MuVA9",
  "key27": "2CfafVCFq3S1JTQmB1HBWc4FUAGnw2rpgTko7JbesN8wn4bh3ASyUWBNg9Ru53CSae5vbGKR1PnTNiML52hXVmp6",
  "key28": "4DDUfhGghwt3Zv1jkqmfBgwxfcy2KTNN15ZPRbvKFDmLRK1s9E1ukfHBQXc17iVGcw8otFdQtWRq9Vbvw7cW2XSK",
  "key29": "3U5RFYDD5rgnLi5ZstwCAp51N7ahGpg5MFXueGAmkmHDxDDS49U2DjY8WiAKwxkziYaChQCrDdXWnA2v5M5bSYyU",
  "key30": "pw4WHvSkx6kNYonNrWEpvDuXUkXFiyqeZVYujSw2GNUAwbCQyYa8ihgJMm88HaD3frCLWdrWxjTYgWeKtgiEKn2",
  "key31": "5VzoUQDx7JmmVi5MeaZQY9woPwgC33U5jDmwzKBxGvHBUHnBidECXJ26LhwurVeKnCa1nc3Xy1AYQfk1LimpYoJA",
  "key32": "2Yn9vDZaTSz2eARcDaiHNx5yLoGGPeByweKjnNU5odZhzUjc4UzjiJwaoqYwf8cJQtYiFKRnpCEzMgMmVeBuVv5g",
  "key33": "4Fs8RsbbQX4z4Y88zzjnzNXQ6E8M7QDhAasH9eEVg9M13PSeSxMq2DvebtY6jH5sn3u12aWzzguwSkYXdPzNASTr",
  "key34": "2SBYWSpAi7NGQNU1ELgjHMHJVi9rgRfbiSrj3wKnmy77BXNT7J727XCEivRi5nmCDEKExXMaEebGb9Y1o83EQGFU",
  "key35": "2qArA37pjz1a6Ex5vb1jHSvYZxTKYgup55A4HmNtb3c9VYRJctoAYXXjNECDfoXEp8PrQVvuhU8oqKqTgwqBa3A7",
  "key36": "4A924Hu3PS5bXbzLyN2sJx1hUBvYgb6v6AbkmGzZAwPKxctantN54EzF1AEBHW8r2f7bQV8HgT2zJhqaVxWK74u6",
  "key37": "3WCd9wxeX48mZ8GuZN8iRarnK7jQr5y4WsDsZHKSHk4szZt1igvL8ANDBdhpo2tH3wh9Jj7dCSj8nqDH9XXyYcK4",
  "key38": "5VXzmMCPbrk9Gb6FjAm86QQ4hVLQKZD8nJah1u9HWdL1UJXTWXEXnwdj44fYyiQEzdQiunW8diT4H1BGLExVNCac",
  "key39": "KvQypzKjoUfT1bnirfjL4kpGxgetrqnzwRc7rdKH1FSA33ZnCR7X3dKyhAMGbnekhdDHHTZ7izzL8rRFQ7NjjjK",
  "key40": "2DgLnjXBAe1UgYHQi7Pmb5MdiAbx7Q57GCJV4DDvn6znerMcYW52RF4v1jxU19iZdFnmacjDnMcTPqRej5Bd9yKU"
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

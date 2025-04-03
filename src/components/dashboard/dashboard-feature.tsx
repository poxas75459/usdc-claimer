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
    "3aXWV9mYfwG5NNCpRpjWbbT5XmHVKc5LMZBLkJZYYyqSX1dNuxGSffvsxPbbRbCaHWuTf2sAgRFnXWZxDsU7sSMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "geq8L2Z4YsjbZgNLWTvQU8LdYanhBSeQyCCUdDE8xZpckgm9NCqRLfbhnyiVZGWHXpY3LrwkHhwy16ziHyUyjvy",
  "key1": "RGs21nybWUNiu25fduvTceMkYTSkpEFUcUUnwV4aZr69VLtURXeHuufbTD3dbWYXioZo1pnfxftoL2xf6Ge6VTJ",
  "key2": "RjNEYgxFghFXoeBL1whfixqVxBeRg6BYQ6SsSDcXfMP8w2sxYeDVvhAYfqXs6ykP7axXrPDmujFdMXgfbxoLFPG",
  "key3": "4nQhd2DcCdZ6SLVzSDWGqKzzq79AuDnhQxwoDuGv7shUqSEHoRrMaMao4owF8raqD7q9MBHKEnR8wuEDUhLynkA8",
  "key4": "41H6rFycRKT4QhmoTtxGrZVzpRYLKNrw2K6HfGM9mmWUnMmkLS48DsrtyXtqsW4FKMxpG5w5S3oVNVhvN2MmxK6T",
  "key5": "4AtHjnqQBdAnThTHv428jUaSuNGHgJ8oEcDcZh2UQpJmhu1DDzDzM9F9Htuj5ipxJcMktF6dC4Rwr9nASd7zwfyL",
  "key6": "5K8AiEfg7RocrAXdFFxa2DswpdhUTKfJWYMonABw3jG8CZZqHqRpXrcUnfuZmoQTc81mKgSa6Votz7z6cnWEJw2E",
  "key7": "26F6GhJCU2mP5y1QR4ZngLPVaahuhqHrsEPxxwhCB1TDofBSNw9wBaTSbJbsmz9CNo7YrH1wkNvSmbsrUxYARSyu",
  "key8": "91PGM89SKYTBKfWRw5cRbe6s5XYv7LSfCgQoWYdyabA65FjaTuqHS3t6NSryerT824U8nMLtCHvARwAA86ro6jR",
  "key9": "52Y3me7fb5jUfKkUdVM1By26mk6hVKffk2rq6QtCL4kCyLRN4ciT2myxokWrFVBG444pMiAYGcbhadLKMoaqnfAG",
  "key10": "5asaRr1iikh6vpaQUewq3WsrmpzSuMye8gcUE9HYHxa7bEZgxiYNTz1R1V1bcSattgL1PHtn8fUwLb8FXUmQjnCc",
  "key11": "3QuwjatiXVicfTjQajonRAPETFkeRfq6F77soJS8ivoMCopSfqVByHZzwy6U64cPgmSFqGNMfnWZqayawSQVpqui",
  "key12": "4apUM2ZQ2WJ3E6zCxBjEQqjquZ63jc5ncAg7rJ7SxVagNfCxCZnLUkN51XfFrwPEtWNow6nvRjzc4ckqLxjge2S4",
  "key13": "dMZo2zCoXXVtfJ2PjRwXv4k687fBDrxipEMVGwd5YREE9PHXfrkEaXXap694eoKpm5t2Qt2LXds3ZbDNbVJtySF",
  "key14": "5tT5zehZTbvJqjzimwVaPFqHZ45EAwsi2JHk2Kkq1NQGFGZzbJBUvdajhRKBECK9Y82ovidE4DBVughUhBfURwJi",
  "key15": "2JjMwKrN2M1o6KNSNWFtNdorgUx4WVsQcZn83SrZRh7bDyA9f9r2R8RjVcLUwBmHhsRx3e2UNi9cM5jfWoinWtRZ",
  "key16": "67ApjCJF1dLiehCQLyWCc8D58D7zxLGS5oGMdZGaoH95GFw8yepJ5hdgHECdisnAAXHh1m8XkH798KMLD2gAwpME",
  "key17": "3kFNKC8cYkFU8upys76jgMyCeuDVz8gvMGLsXNcghwYKrJe3HjLsW5EtywHdXvK3gs7b7yMhCnGZ6wbE6ByG5upk",
  "key18": "3QhtUhwSsjvpgwf3Y6QNShzS9Ak7FDAqNHSVdDmYL8sgqUppbQ2wcbVEUAMraZ7y7mgki9fKeQzyWDNGa2xAkLpX",
  "key19": "uxYo5yoPvsZ3MSp4ZUWyfnnFwdrjAhuzwY1eYjUVicEkgTHBdZTJuTGKqgqhne8usZaxGMbWbAQ8HKjMcFfK4p3",
  "key20": "5JoMo196ejRZerc4Grg5z8uGRKEx61sDfiti3suYRCRxBwLVp8VHzo694EUY34M9FPBatDLLyDnKHuW7cSthydk2",
  "key21": "7dyRJBy84kJK6Bq83MHASDh5hvEKudfQepdqSgDYKyvBaYJhZiBdPNc5pRRLpqkCwLxoTtPNuZVkWd1UHw5Aqde",
  "key22": "5TkH3JLbMn3QdoukAWY3xpJxSGsvaxUAs532KaPvvfgkKqLzJrDaZu7MukpFZcRaFmbSkk58ZVbPxUGkzbDhqNzk",
  "key23": "5PUAw1dqxXYeJr52ywjx3W28igta2fGcZdpAwodsYeNobxxnsgBeqiPgkooNZum41YtB8hHk1Q5KDH3Efy9SWzFg",
  "key24": "3cKzySTWAu6M4qiZEVmTqYhJgeZ82MZbSNtpZoEKMmCXC1kQDZSrE24fjnzn9ra6Hbdw9Na9RgWu18Qk1B7SYt32",
  "key25": "eDExkEKNM7fUyoHUQsBQcq2w1Yz7we1vxyagRuVMaRBmT5dQhsUF5QoyXcVgsBrLprzuKqW5VeeUHj3LrLxkyyH",
  "key26": "3RwMpn4vuicGKcqdFoo97UbcNwR1ik2pYNzCD9YGiLTX8dBz1sxUGBKbPoawc6VmUH4KwJ71WDzkunRjEeQoTMBJ",
  "key27": "61YUmHuzvE8RTUMkgnSBowRGxiHFvtwqd2DSnbyhRCKfgo3g9J7rFQ59dWUebqBbih3EtNYpxCbABHwQrZtHGgkS",
  "key28": "2w69qbep9GUV3jLXmX74Erg4bGj6793qAxCqEAULzQ7FzxDmCxf4A9PXEqQ4JMGKNoDPMpM34TXSwKraCwNNMfYd",
  "key29": "4wXpAD7NUbhW2NF3wRYMVqECa5gC3hNYV16AkWm1mu2xgYtju5Tg7iuBqL9J1ALGioNMaZX4xb4rcQ5dfMXyQKSf",
  "key30": "27GgVzHSDntCMkjnzaDH81RGMwGifS8Q79QZhpY5SewqkhYVYM2Lgbfy1brcf9YRy2iXzCUbckD34Q5MVbAszkfr",
  "key31": "5YGZxnP4uRsi6bfAp1pSr8wy4pGQGA661ta8X5hwpYCCjMBJrdNeNVb9FQhpMw9b5uXTQyECBgtQC9G9ELxA395L",
  "key32": "2j2ULracsrYNAuAPtggf2bjAWK6G89HZm5g6GU5R3euy84mQuBNKp5x4fYLaz9MHAULiv7zwtvwPBbPXVKbb3kQE",
  "key33": "3hyXwAbMiwomK1uQQN2HgbfJy8Jrnw4NJACodahLMzkppFLgBCm3tMt4fYMcjr3cFHJ4tovptYPpKNBJMGMQDwa2",
  "key34": "PEWkc1ob2vzaUwcoLwJisMaVXEq1TisDwr46cn7AjhQDfwEs3Wi1e92FwM64vcnhxtsJKopukJ85Nje2z78dduX",
  "key35": "37aFVA2ee44sDTqdkKcqURP8MKBD4CgFoCixGQpvDP8PqEKxgGed8j2ECdf17BJTphhinkAPvbQruJw7XTvvAgPV",
  "key36": "3CP8P2iMEWYLXwW4aceAP7p5f8E9VyN7N9vDwBkxNBdN3UR4DEVZgNcm1P1SVcRBbSmVmQwhSG9pMUfQ7qH4LxDe",
  "key37": "3DSVmHY2CYU4mcDzitApR5wZDkX4XrucMmz5eScMw3PxCiRyywW4NfAASJG6ryiFUGok3G1iasTGnrBspvm1HhhK",
  "key38": "4ZFrRynJmJAEXFYn7fBjFAbdTTWANATvKjkgvTL6RPPAaWhsdidFEgJEHrqeW5qiBMwcZ6TS3rmtC5QW3wVjzg6w"
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

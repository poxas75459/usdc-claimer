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
    "34G1V1pxh1nyarVDJjzFHT2822UZcaMi38CwhxrnRQjyEk4mYQMK29ArMUaDBAdSSTbApGL4sKKKd3q1tX5FBs7c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lky7Thvv6uyVWddW7rKE3R2267t2wTJYk2yWnZ51qspvmBEy5GSQEwTs2t3RnRRTfJsVnC5P48hULHU7vUrrbXD",
  "key1": "4wdZ7tmYFfahbMBKegteLgHd4GPNJ9yx2ziLRkDN5axENzu2JZttzFXckD3EHoidFJqNDEiKKwyPgq1eEvs3AKXB",
  "key2": "Hd9fa7sxkPuYyCGS3WeMh5yyNVdjaWFe5ppofeTQkqwMQqEJJTV8c7FXhiWpYuVvJUgwuAQLiMEQNj37VdQeKac",
  "key3": "4LPaH62TAjfFeCtwf1KLbk7nYsCJYRJbwuS7psEkY8LHh7bCnDwZMdWyx7DFgBmbE94pEsAAod3eFmrZB46nNSVi",
  "key4": "5ckqFULEiGP3CHMVGYNLXv8XNzRBcbuFKLtjMvQpU62nohtatrzLkgDLPZgUgNebNfBMR7NJ4HMFB1P4cb5doPhV",
  "key5": "3ictQCiNfkLtkkfs75TvkMTX1kXmXjeRdcYxLxHFSogs6KkgArstr9o9mXi79tPHKKg2oG7qRqsCxD9pSaYBcyk6",
  "key6": "5UqD6S5DnG1zYAv8PJFvRbBr5PNf9Sj6YxdPkoRR38E8Y5DjZ5nb2XAMaGFjc19p4JAvUziSiAxKrVo4uBTcmi2J",
  "key7": "41wGjo5vo2kNKTTpEsdXUVvgUJo2Lbd8AVCoBDJSctf2SYFNrB3N9x5uVPupi6fvfbzxM1gYPyHkcpLDwP2sqhxs",
  "key8": "2vbxS8u63eKDVetuhdAtjTXbM7MfTFqt67ore7EfPoLeHDHBQzAm6X4pFsJUbpCgg2q3LfJ8qZUWwVKB5w6Ws7fk",
  "key9": "2bn6GkSzpaETaQFQGqR2TjbzVszm4YKrTK7XpRevBzhA3XBn4ahibowkJWNYb6Jx145jCtLKcjnfHDGKMda8n21p",
  "key10": "2vagJCNhiXSDkNFUGrdLcLFgmzWQvgqdMtpvYDBPmRnwMm2pmUs7Kut3dB8RMyCbiyWH3ShB9uVfNkSeWPebvESz",
  "key11": "2NSckzoTxijJEuw4Grr3PXmRpLibxu2uvEwPBpmkvumML2SHSqJuqGvPARNVQvZk4v4WJmGPxRQ8tjr8ewx5Yc3Y",
  "key12": "4wNrFU2MGAQU2rkKgAa9g4q5YoZaLgWHsq6F42s5wgJw4CHRNYJAkuygetcGVSSxYuv9TjjppGGmoVX6Lor1zKPK",
  "key13": "5FS6pjiK1YMdJnXAA51ywezvM5jjTiy2jLMS9NvCWyXd5AmT3hoezx9RSkNpGKDpNJsUyXJx3YiybQHhZt37pEnU",
  "key14": "2G5SDj1bidN9oTezaKt8annDRwwT2uJupLhXmRT3ja7SBMb8kiYguCKKCd9HFQoNYZv5AUrkHowB4fYr998zxJMe",
  "key15": "2S6oydoCKyyZvxWTPjwX9acMxJHAd4s3eAJzor9zH2qQLxinzvoZNh5AeiE3NtRm2FrLxFoPBHc4bKpSQU7kD86V",
  "key16": "5nrXFnZ6AMJRWtZfkdjJ2ScA1N3J44VPWvHgFAWuVfjbfUthLKbhsJrGQ6KEeQN91ykRfZWmh4uXYEybey9gnxrj",
  "key17": "27JLoqdeFNNnTxAwZjeDP1DerZcNNWyVAD7CP6NGg5xD5dPbNFcQCxAWwuCU6wgoVf4RepQWTDoNKZuBSVDZKErp",
  "key18": "3mMgH5eJKfr76FivLeFmhMyTonKNrMBoxYptb6XxYi3MkePeUvU1C1A6Mm2QMpx7271fvUMMLG3xEHcix18Q6nAg",
  "key19": "4U6Etm6LoBS1RCWytyQFZRfSido6xy9DawjVtoYJvR2ymAF77xLoMLZosW3uv155r7ehQxiULF1B9borMh5ciaN3",
  "key20": "5SEap4mWK5vj9GK6sCAwDQxqP5YRWHAz3uFXbS76fMr4QNAtKLv5oo4PXqi1r3Tig2rcmRtjQw2aVTc6BnAuNp94",
  "key21": "5LvAVXp4dn547kMvCFzkH6Ko8Gsb9am4QRaTqsvCWJQBN5zo2hicWFZprZ9iFLcxNcJr8mXDtx8rJwL16DvDWNsX",
  "key22": "3RrdGjM4rnHajfV7qhmwwwCgk5YZXpM5pF1uzczDpxnziQFHqFaeo4Gje5nAWJ3XU8983ND8MguyAmJ71kRHYFX2",
  "key23": "5ojoSs8L6dwvFn7CSRRA6HJCK8KsdSXU6mSdh5buwodu28pQ95cDNGT1JU2jCrekcosWgqLpH9esApe5wScqDcP7",
  "key24": "2L6UD5jLy6WfbcEdBomknceKCe8GBxy7zAC8z9gsYoK24APEmeUk4rc6XHMPcN2yCWn3sNsEAaaHdkLuRtCFoKrq",
  "key25": "2D9AJTA1TRWcRCzWBj4SwHHoBP2qckuX9fxoCVc97Cnri2zWGNiAoYbdkuDYf1CJH7fkcPFBPLpGCgXqABNPBXns",
  "key26": "2zr1uDrcxdhZhgp6Wupcff8259WxqTWKYHcWQm8BHEREy15UcBYW389dEVBba47nSmgu2bAu2Y9PNik78848Lr3D"
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

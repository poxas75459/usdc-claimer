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
    "5Yyb1Q7fxGuUusjmac58N346TtG8ebjkh4qKB1EcaMEm8Ss3iKzbCaU9UUKq8BUvLkUWbg2C7bXXQJGYUDfSWgjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xe72mg7QVgd5vVL9Gui2WCPtuVS6bM4221AiP1pEXDoHi5KA3vA9TDXPew7XcVEWUT1r54HPXWMs2bYZMw4GaKt",
  "key1": "2chybVFdGrVDAntkoDwQ8mHbfpMEwHLizZdAHwkzrVtfJHAb8tkxsSx4CU8wRK8ewE2ZgjTTsfN8WxyjohkrUD6y",
  "key2": "5GpRwgpfjx1z716odseU8ubxqcPFr2AxVZn4a4dknoUFzxsYhtT3yWk9FVAJbqfMJ7qTuwyHmBiosKqhoUfYx41",
  "key3": "4qd2qsVtucmrYxTeaqprZXhmg9CVq7ccjVfg6dH8Vzx7hk14dJUgYor9NgVDSyVoMuKMY7iomu64JByXC8GA62MW",
  "key4": "5XH1WsbPB6Z72AvJCgWNFWPJVDEvqP5PGpwpg5PtbuQstjELdAgXAm6BWCfvJ9jhhCnnSmE4ziw3fVXfQeWkVXDB",
  "key5": "35kLSDYYHTdFrBBsifjm2pFhjsU7TYrFaMKXuzHBBHusmNYcGVNMW2WWKR3P7k7idgss5FBk1X6KszSRZJHSmz2",
  "key6": "3291WhJ88PozEND8tAnk5D8DknunQMFSpXThWdPX8mVDueLtmwMgS28R6WntNx9QJk7XLhk3j5iWmJx8qn6Sm31H",
  "key7": "5imzb3Z1xFCAGQ24aMLHGLC894nDEZtDtizw4T34TajXAsniVW6ociJLzXF2Frdozngg7288amFaDcXF51LuPyps",
  "key8": "4CfwZnw2vppkBLCML92U2MkreTzCX2ZDK8mEw8kRkeXE3VJgqXg3Ws74pGPgBujw3DYjxedZqnarBzWD3YhtTg5x",
  "key9": "42e16r6xA5Z53gJYUzYsKmkXmvaCs7hWPq6bwkQqcxypHpinjP4H8SXRtP9S78G6niz4SBPsZUvKTgp7ZmCYjmK3",
  "key10": "2SA3eCY8jyds6rLwauRejgvpJSzhGpatpHEaYFikTNuL2EhBBpjaNL5rpMJ6hxpVPLfdqr5XtHQMueHXTTFbLCeQ",
  "key11": "2T8cqVB6j871ddrgFy5594ijkQfDupFn3ZrXKoSjHB7CF2pcmtbmotR88PXUVTtef4ZFzomkhZtr78Liv3i31pxq",
  "key12": "Q7WaSbxVAKx53qQCf7DfXEDKCWioPuk5YzQAxtrBMW89QTfroMnYSJGtQUYE5PhFCZ1w1HnbKeysKfvcXSCRy7j",
  "key13": "4vbZGb6Ee8vaxAZVbhf1EGQysAcz3idCeN3zWksxsEP7inx4YT1Gexz1eFTXJndMo7SysZqRiirxzcL4xya5zRd1",
  "key14": "23KaoEENVZG9bTru28q7GNgvVMgRk42eT9jMq34pBxWZDSAtZEubwpukEjVTUtQrhLgCTgdWUn1aMvetRjvsTDPV",
  "key15": "4XW2CPRsysEz1PpNCoinzgD9DWEF3D7Mvx5GR4wbiP9fwWKbnmGvBgRu2bBRtDvnqufAJ2bXGMjqmFu9dgNnAau4",
  "key16": "LaiBpp5FB1axzMzeoUm9SDWcqgysfSiBRWxknTAaqTsv79CUQiUS4Zjs5bzVnSLeG2GTogkFnsUGGyqXMrSfKVq",
  "key17": "47xUxwwH4vReJ9266YXMzZ5kYmzyhX4RQW2MoFt1wCuky2YuhNTGphJoBDKFas6BguTA2bkwuJXCsXPyK1yZNv9r",
  "key18": "43hqXHmWqL3XL99W3tdpTVPrM481r8UmunLvE771GJmicJPeL3psTsSuAxaV6RYEbXzXGBe2H2onHSjhxAfoQiHr",
  "key19": "2qb8hr3goVsa91D6GxTF1FYp3LyNiQ4ojcEAmjhtKyv1FUjG47DhUnYBCJDZh7jQiURwfYtcuuiEaWMLRordKXmk",
  "key20": "5GaPmXoNaMh5HWUjDeva7eAqzHfxiuixcrGLwVoeehyPQdbDZEFr7PqtMs9UBR9Q4wjxBnjcRNMsoSzV4bRRmgDv",
  "key21": "5mHrzuv3SzJ17ZWMjwEyii2YBdbp6A6pdrXb9Y5eEvH8jUYL8BUt4Ws2EW7GCs8nHtKUvPu2ENcpyyWuHVQkwZvs",
  "key22": "X9a5G418Poyeejv1pJvHmocxrQptsxRZ9SfzT43tmTxH6Sb91VBDnGD49e2d5peZdoJiiy5jPgDnzhjrMcmyEBQ",
  "key23": "2a5HsrP51VoY1DCSSBGJhGmcDhAYtCUZ2m9bj9qe8pojTSKunA5HJGxUhfVYQdLndCJXoJBsUqgUCsHCLwnDD5d8",
  "key24": "3vW1qpwTSDokkx3EgcJfQhys88bR5qu18AzF3jrBq7c9aJ8Sh65DKfPmzDSxNJPCi7aPc9h4drmwcq8zeWXz4NRK",
  "key25": "4cTyo64crN4THYitZaHB1Evr3KDyxa4o6dSwXpq7Sm6j7YsYeDBChA1YK85dV4xQvTZd1JjcfXuoYdXvdyRdn6Vw",
  "key26": "2tSkAWixoNBYxXEfxYhy9sDmqBnfB7Ge5V51L2Fnk336i3FChXbEP7B7y6a99Q8anfahNx17c4j51jj9e2h4hyUP",
  "key27": "5D24ZHcohFa2uaoFvy7curBGMkiLfT1SqJC2wsFoZNLyHdsUL29t8REDTdzCykvkAdFvp1dUEQCpfWHxKgtjLKN7",
  "key28": "5QQj47xXX779eajykvbuz5kAzrxn2S1VfMU7RhiCjYWzY9WaEjwJ6BYMrKhGPa3z5Zhuxr8q5S97pfyw2uD2NmT7",
  "key29": "66T9EPfygTjZ8GvNbShSLds7s64hFQMTvbubv6tJLiWjzUgx5PtwNsbcNEzPzdn8gv2e9TYbgwyUfZ8ZFigEKizC",
  "key30": "5rfr47kGSqfvpkwngqLmF8qq4gacphky1GNuXCGTkJ3ytnhLSTg2KRakkNHTdYmwSwJ8KSf13hBmZadwoNzr6sMD"
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

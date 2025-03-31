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
    "556euHSWHchY5mbfPaTPh6GraGjJairE33T4bnKafCpuRretevquwgVpNtCXxQvL1MAjrtQZHoiZGsY96aERRRct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mSAphhhmogkhwkb8nGe8V8hmw2pGgApCr9dHwP7qF3PTy4z4cvm7kLpDnoqt7DzW8ESVzT6zSWJR6z8WLiw3NwF",
  "key1": "3DFT8Y7sQANkgr2nDtf778FverNfGv9VQ5jk75jgeHvYDeXxsRASgbnzJZv93yw4Ag4TESBrGtC2bLmu9pPrbc9a",
  "key2": "t5enEgB6hyTAngsXJ3Zu5CTirxTLdjDkLYJiB5XJe1wMXHeazxxKqCpHAHdtpkV5Hmk6h6K4KHZgNhqnQZHTHwF",
  "key3": "3dTcAs6tuxy66EHg2uDTaW9LJbu1oEjzFGy6tmd5i4mfhdduLeapSYBNXbthgYscrJdNtCMxsracKzKUkxXwQatw",
  "key4": "2ChByiy78Egj3q5TdXMh6i6Ei1ypJJ842bWPUzPZd9TDjLvyhcBzD3MgyLXvLETALDhDCCAh3poo7gsw82upKeLz",
  "key5": "5y9BvBdM3ZQRbpf2iePzYM6puZL6Unf7vaV8TpWnzn7pACC3GxcjK7HYFPLAtvMK8oHjPWEvJwWXEBW8gC98RCae",
  "key6": "2ZDSVXdpe3afnE7jHsAfaLeE4GP8CNF9efj2a4aQnviFB6gqfc4C62uWwaSDrkit8EJFevAcUwHpMAQ14DKt9Bik",
  "key7": "5oitWvZPWkcGW4w4exGavbCeeeHpHbNXUAqah9UdhdMFhcNEJHMcZMBnYCFPy1NKaa65SvKubLHVvRnDyeh8wP3",
  "key8": "5KgAHVUjiQypjFUeSwTD9ZhP2Cx2PnD3Jaa1DaRyd7zijuW1sVVhTJAZPg4LF3HZQXmLNG3eMCJjp4DtAegkVqbF",
  "key9": "21GAciec42y9W2oR7ZbijCDZBtpyeYVcRH2HSWW8738fB5oHfg9XbLj74RoStAtmosmjZLuYHGAfKgCsCqJeWMpC",
  "key10": "2pHeYhmFa48CnEN9NSAs5EUEPrVJ1vCMGLHbKAreKYFyXMtpGnCgK76KktmZ2dKed7ZGEaVkkuhg3P8m3NaStYz2",
  "key11": "G8AHyknDeTbJDCVJRtNg4bepRvawStXTgNmehBPgCGVbyVWGw2Uesut489Vamhy3DPjRdDnEERADpsDzMSB2JtG",
  "key12": "23qQB5ekXJedGZu9ohEBfGWmK6bDzf5LkyLhSWdeKjxLvXKggSu69EsEHLwgoRYbqrUq7GXSfRGuuiREXX3MieDq",
  "key13": "8ZQrkgG5UeecamxU3vgpPq6ythP2yw63Fqtye4b5AtquointBmXpH1stABD5Wn8ZNA5NGW3Fz6t2gthD5KB7637",
  "key14": "5sh2zN6UXH7BpCuXmXEVRvXKMqaLhUwq4WErYdczXXVqQoeJocu473gb5hdxK72d4Q2sFTiuQGQiumCkrMoZnNfA",
  "key15": "5nYcw82MyJKzbr3Gqk4VkERsxwJtTAX6NijhCi1xoggSkeV9yt2GujTgC33UPEVoDhYrGvQMFQDtY7qc1fsv3e3r",
  "key16": "44iySV6yEK7czc7ytksC2G7Gtawe48vNrxJLmr5Vqgc7ckyGvJtz2xJZz95TGAMWCx8DJnM3EYb9NYyFHV8g3NbQ",
  "key17": "61eqqgkz4bSHLRKbQMHZ1Tgumfyi7rdAgq5xzHPMUnxkbGLAZcW8QGY34ZXMoQgR6XvJRHbsn6iBz2paJhbwAvXb",
  "key18": "4KQ3mK6C9NXy9uGpQMb3Hisp6L1x29QcjnUTMtET5YyLHZs4LNDak9tW7HqScZK1QxejZCWQZjLshhtKu4K9mr2n",
  "key19": "4Xn9NkYxcQe7m75GZJSefK9fauhCs7kXmNdg3zA2185a6cGo1iwojon62qvVTgjwvUopK4iGtDt7iiFNVoy9Rpqc",
  "key20": "5GMceSjTMrYc4ciVyxUiyZam8Aw5MQqNK8wmpV7Th26Q3nCxSVFDLTXeQqeGjoTGpazhzXL2h1YN59TERZuJk8Xu",
  "key21": "28xz8GmFESCGhgDC48XSxjah7HU5t77paS69wNGixJmf8EWYFhBE1mqDoNS7vJWgvSYN7gy4eBHcJdP81uFCq5N7",
  "key22": "57FYnX73bPFf6xQHhieUa9Gjm8swYsyPWPe1YysC7EsyU6WqTpfPHF2meXzvwjw1gtDmU2FwJeJ34bhFx5X6nVgt",
  "key23": "4k49AQS8Y4BdWeMFnkPKKh2Joe5WVTrfnPduag1mT3Y4THHdpC1UiEm185cT1vprcW896ziHFGtZVem3d5zGJWdJ",
  "key24": "4amJrF2U9EQLAuj1zbKm4trkP5LL9CUniAqRk9vTWkz6hbSchYPrLsx4uCj21NxC5LvLAxRN4JnY7L6ipGmpm9Nz"
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

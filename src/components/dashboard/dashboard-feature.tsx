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
    "2gbawPDqHenQypCAxJ2nVFVMEBJdVQXVY55FVZM48bpA8Vg3xD2AHbqe7muRampsmAeLeqHqnGdVFGnpFKthGXnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GK5Ltta9XyQsdPyyLvXeTnhHNGAeZJmKKBWZ8nr65NTzRZNBxNSdoJC95CoeywBmYE1KdQCVhc79ZeHvtVxmcnt",
  "key1": "24wwd6aojDjEMiuLyeBENYCzhy93miCSwDMFU5Czap6Ec1XVBWF27Pb5HHcspq9XFCfNcvvztpSxft5E8z7amptw",
  "key2": "2mP5Eez891abtQoRQtoUwJfgfprzrvCTRCrzKdDMVrXxqyxVbEPT5SNLRAwXWQrHVvUrZuUQoRnzsmBvgmeH7evt",
  "key3": "49z8brJbuRYYoeJctWuLcqkbvSWxBMfgTcqbEiJ9RdvudZkyDBC4UhqDEXU6xgoQ8b6jkoqgYst5keLKkm7CFMwL",
  "key4": "5PkMQkXe3VaVU6MqZj17csSRgtpgf5HSNBVhesRMqCTCJMdUyskq4XZEy73GGFqBgw3vMR1rZn14JpxaHX998yzJ",
  "key5": "5dNAa8PUxbKuw4oCGtmPaoQ18kY26TwKcrrpT8sPzCoGVtLwF1Ap1xZdLpi24Epad97yYzcVKrQ46K2zXopzkMqf",
  "key6": "4BfY4Nq96UWueMUWAa6wHNEg96bmBap3PKyBZRYRWFnhfVNwFJeqTo8geH6noxj9YuTDdziR5icVbRJUWeU4h3G9",
  "key7": "4rAqwUQ2j1QdAYge5mj42td7ZcsZGq6vPgEKg6CMudsaEL6yBukD2gGsNmFUpf99K1Sf8WZE9yCcp8bBdspRk4se",
  "key8": "5A6F5zBUc32X2zVmQr5R7A3dKzqs9qGBSSJA1WNaGxUpq2tPc8LPBVyf7S88wXLrwYaCD2qkQLHhbdVdoVq2EoGD",
  "key9": "CHoARXq1xjeT1t7Kg4TA3g2zLMDK9Uk781VkY7j7KLTWrZcFyBGozU8TqcHMbnm9YviWwnmHqrjsraZnCMB9Jt8",
  "key10": "2iDnTb3nCd6kGY6uej4VNwiCoa8kUNqrSrdbDKcMz2xfdAXh8RGoPYX9RXzNirFZG63qDCrYxSfDXDYwdrn3unQY",
  "key11": "4wAk5zxjwhGtBKBVijLSr4iT6g5Tq4otC9fAWMQ7X4dNyXsjteFS2XYMfixqMN2t53fr2SQ6hZvKfgTATqZz2Wc7",
  "key12": "53tMWwbWsxsVN6WcqypTfaKaCXpSWCVG8SsYVboa6T8VFACTqmf591Ud9syfPmJJwDxQVUnhdbWnhpDuarZansU9",
  "key13": "3XJinRJbQWCbfWPgRawEDunGUxS2LcySkPdvHVHCr9zwJxSuekk8VaaQqguQrpbwv8snAgXr2ccD7XvgLyftyAKK",
  "key14": "56E46dGc9gMjkXZuyDYbC72mxVNDDSH8YZPv78PHsuZbcfG1kzdaTFy757raJE2v5dZBTXPEwYARCfEAMZm9BzZY",
  "key15": "2yP1SLwJbpNnSEfWptA2bLsyVikWt8oJCKqgu5TUExAKrAC8BxgdVdFBkyC7owM5kw6q9GpEKTMniMQGbn1UoDDd",
  "key16": "4HtyzzJP94smx65Qudq8MYVrYZsjjsg5pLi7YcXQp2MMaYXSfGUr8j7uzxqdsP2oFCsevt2KxkN57Bcu7GB2WUMB",
  "key17": "LPD8vRvdpdRrrz3Q5oN58TBhAuCDMetJf8ANypwx8RVNXrxknEivZy1vWC49C654nH6CDWZot7GAk2qJPYcuUCc",
  "key18": "3pm92bY7oqEZkj3SiXWs1w6jk7AJtTTfvVxgC4Kq9dh3fLNz3ZcnKVhv3xSR6LH4KifQCY8GAiop8At7otp3aLA4",
  "key19": "5M7hTnZcHVXFEqGkxBowbejBX5Ti2diUGG387Qg1fcEXLMJsNchFifLPLGTjLwkx4PnJjSmRMG4tu911tQEhJCAo",
  "key20": "Bgr6MRnoZxpfagfTRZybGij8wGFGbbpxibdW3taH1XXkWgr7Nn3MoVxsPtbFdRnxK8cmPWU5NiVFVnUgxJ58W9m",
  "key21": "2YTNQgemnDPk6RPDeAavoUENs3pbbQxKaH9xZmLLB25rWmvZnYkNVBrvNyyQry17NVchCQzK8RxcxEHkrHhjZyBz",
  "key22": "5zaYVx3Tf6Hi8p2etbeBr5RuQYqvD2jHWwiTmZevPTbvwaZfryB6NGmFmF4XC6YncwqQ7xLvDgNAdXkuSb7Yo62b",
  "key23": "e5gXVhQYHRDB9D4o4Nrb3HWyHv8pxAMrEwZ3Lb5yy25RAZ5z8u7PPxmjo1TVbeo2RH9CfeibksUScg9zowQ2gni",
  "key24": "4H57T3Xz5FPz5LFXSJe1Uct6YpsSayLDxfG1Qa4QU4fyWcnRMwz7LsEKP2SFFZAjLz4TGBufekRipqu6JcKm4r25",
  "key25": "3hJxnMxhZAUgLDAf7NM86jVwdotfPBZavbNs9wmVvnN6YUCu4LZ4nGZ4t298EWWtLp9yUm9W1FcPuD2C2ZNiR8Qo",
  "key26": "5C4ZTg68iqANgNs5esUdER4GP8zwXwceoEYaL765Rt4vQmHJaXRyGMizDnwxVatbhP45khpFU7nNX4jFx8WUuTw3",
  "key27": "vxKR7mSCyrHpY5HezFi1wEUkNhwcFmUzr6CM3n5ZBFGRA7gXoGcxBZ6RswJQHnfkjxoLXr9ouYVpXzutnY1UMSv"
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

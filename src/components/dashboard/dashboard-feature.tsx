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
    "u7zgsADPRSswQUkVxcjZeAxNG99Yedjns5tnSYmN3n7wkPshzqBGzFLdJud8guxQEJJHL3c4uxM4PE73t6VSmSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eoYWdxCugZspLifRjPpqB5JLMJ1NVnzi3D4ujxs9e7SnpqwoaDSv7JLWdk68GAQbFtM3QR8gVHUmkCF4vcT1Sat",
  "key1": "5GL4Kuyov1Wi4FGM57GHMQHC1Q5GXob9Ai4YgC1JjVUfVYWXXySbhN1QgBPtScoV43YdhwDcUAV58J1e6pgg3hd7",
  "key2": "3Nx6qsuu75KsuUAsTsk63n8tBaCmeZrWGCd1MMRdNrej6xypXCBhAnD6sq6DdKoqrjzsvGmK6NyM75L5KqTv6MEK",
  "key3": "4gC8TQyWcK6H5DHKoQK2L4MKvwhHeghdMF5cuEhcMi77Whxa4XQJqyPKqQoru1VJnZ7hDV4juPfbcijHcnYiA25",
  "key4": "GGADD4Whz2GfXcUQfkHvXteH585cdZDx5G7cWCXQi5Dy467Ffn33uqMEFi1fjSpoLSLtMmWh7tLwha3MfJtHbJd",
  "key5": "2rv2VWaLYEPs6xTcyzXbhUhyyEWH6MFnH6EBbHb24m8fcqC1pbzpaur3xKCsAXSFk6t52UEcgta6dTajhvTWpDcK",
  "key6": "4zGgsMF2862mm9DHcnwh6kXeaf5LuKZXADwQkVCKL2pU1r928kgVwyt96n1JyGR4r1bnWaq5DKJNXNCPmPNNL3rv",
  "key7": "4azAyntd2CcEV4JGj9okAsGSMmb3DQQ4FQMJd4YPX3qQHxxE5k3HbX6Jhiv3Hxfa2bCBVPBiUszSsAPVeGRpTesF",
  "key8": "3tM7qvzVJtHiShu2WVNNCgEfm8nGb81fDcqm6rsL4xq5p9fysckv4Nut3ki9NM6s3D3g3jpgzv9njYQwEnH3TXex",
  "key9": "2tf4wngQzTeeduXqEHDD8z3szoPYNvvjLtUr6W1AyikaLTguNXm5NYAfAxP1ojJGTG1tGuzTnZMcvv3bXBKdG6bU",
  "key10": "dbiqJ5uqD4yWabHAHqFyPfMmpGCzmfM6u6jhR5t3riqbxzp13qZx83DMfoTPyhfVUfHTZhtnyXgHt3f8YiqBK4g",
  "key11": "5rhd53JXwrvmFuzLHAYMdzY6Cv8K1PJvNqJiieAtGMYyoe29KqS7wWTVhnnAyiKB4XN44jYbickMokJALDv4mHqR",
  "key12": "4YcCLRPwVJsp6tB2CguXhWM95o7UnBBhK5MQvLSFNDJWXJuPmy72ME9Eht6Dp4aQGtHydj3QQ9WXoKoJG97KTmPa",
  "key13": "C7BQ45NsLh27D6XcNkMK6vM9RovjucepwhyY5Rkh1Fb2kCAuGXVBaPMtUtz3CkXCPmGfetvSswFak6bW73NLWeW",
  "key14": "44D5nmFRVF7s3Teuip7cUyR3F5C6XGsLgFfom7ndCvK9oSnvRurcaRm4721jBNt6KmudDAiE8tQtWu9RSL5R5utA",
  "key15": "5uANefVCZCbWuw78ZK7MPbmnyTMhbXie9Jgftz32UG5TykSZkzwXC3FyLLLFSZS64RL7YDoxThZz6HQZARm3vfvH",
  "key16": "3ZdQsimejsd9k1zbFfdcv9bJuQeyRUdtbrUnLiMAypigtSyFqg8skd39gNkkpWkY22HcBB8AVNhvkfkQ7B4Gk6pF",
  "key17": "21ymZWMT2ttEFf8mFVDKvQUiEJrEtHsoLmsGWG5X99AVptVMkER8hPqR4KTKSR8n819ejBUa3coM7VQFW2zw9dsZ",
  "key18": "3jbEGLyz8DbyYXzdVUAA4J6xBsgERxW91bDJtQGgx9zs5bmnmqQNeSqBQJNRpmFY4NcfjGtcQJ1sSAneDPh9uoQq",
  "key19": "5wCJiZFrhtwq966U5HXed5EkaNn4eFUbDM8gn2EjABbddrxkX3sZp4sFuUyfdmncbm7YxCDXGWch6DfTTsdLqu5h",
  "key20": "3DpjhRk1d5BJTmYzHQ6mb15tGXdU4DBnh9mgREbPjXBBGu9kNix6n9Amg3nBmQmsUzFYQ9KE3iu48WyayDB9aGG6",
  "key21": "2c8WRqNs4zDZqhNS6prtCA9UcNSSnUBNXZCBV7bGRkK9dfNWMVdjapJSmjWXDwkxa7Hf478G2xp6CYMhVEGfV1Rt",
  "key22": "4xMoJvotaxc3sRcdNpcRuoZXESp2uM5uScSd9ht5Z98KrHbnvB4cGVqakZh6HQqcHYGZRmaPtmWmki5Zo2NnH1ES",
  "key23": "3tAfUT9a2bqu31RePSGnTECkLUnVYHU6vh91mtwE2sQT3kzBPA5krVPRHoSSmU216BtoScTJ5d4rm8wEUcaoiFNt",
  "key24": "3QxvdxHBAKVMmtJu8nX3HaumUWdVDtSj6cZVaU5f2heMQ7KnsUB4xf2A31RkgYNkPo2QAUz6suLzSuCeicbDRgP3",
  "key25": "oRnhtgT3oJQniVznzs7NyiobhTNc6G4aQTqEukYNaSKQm9LdPCg7UFd53oStecXyC2CZd9ErfCHsDiBbdSdF4Q3",
  "key26": "5auAx1G2xGA8X3fPLxGcxzz43TwGYae5ouESFUT2xiTTcG5x7Bc2epVxyexjV4BGV8XyFPEC3FURuaeXkz8BGFHa",
  "key27": "2WshNfRnCe62PoR8PZZ3k4NS3CmPahZ491rfAkGrwskVprx3htgZ5JPtd5v8C7EGtMjJKKHLPyJg9SzM72infMEf",
  "key28": "5f3j3Zs3mCYvP3vARD4bQ5RoheoBVQkJFmSXF9oaarxfFE7Lc9iMnStXtJdqqVPouQJVAWx7vSUUfkkgtf82XJDG",
  "key29": "2MHYWtAffkBfXRjbwYXcjMXAiLdKX1xZZ5VhisYF5L3Fcn4SerkcwVmSsV1wnSyuowj3xN1sPBgLnf6xUV5BSCJj",
  "key30": "8Pjwfqptk4nnxG4W6JbktJ12RC8TWEH9DedKhZ794hzYMegM52BaJyZh6nNkTUcyVkT3UyZJFecR3tALfcqvtto"
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

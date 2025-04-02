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
    "2k1znNs3S3xF93uVvyggEJUiopurkjDKx15iYJuGyBWn8YqK4cCg7Ug4VjTg3g5MLMP7tUGL1mra53JyyDZkGm2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iGdSJ1XnWjyApg8iNqfKcUxg3ChJ6T8vtVkLbaqnqE5SyzTt2duHXGodQXhsrdiwvVrwSnEgftZBsYyQ3BPUUTB",
  "key1": "5hQV5ttDkVTAHddACL765hKdMnS5c9ht7Eu98JsDo77jKSDgeSVd2X9FSCQGK5gdTaE4wQJcVGv4hFSLbhyWJvLK",
  "key2": "3dwVJm1xj6HxGHxFzwFqbZSWYf9KPAktJDwfjXz2SSh8MHe5eFpK61gjtYPK5LcokrpiarrGVrm4qgTQucrAhP3V",
  "key3": "3hRnpYDPuJCNP14yXPwJaNowPKbW6kWr5LTVcoBCnnyWn5NQwFge5rDgWPThaeS3QdN51qdHqJm16Jnn1pGGMYx7",
  "key4": "3qns3AigKD2tnkkz8dJWVoLNGGkpz1YrJXheMPd4oPNKGiZz1Jo6AM8qEN2H7XNcZVN6AYXqt2cCqiLs7vpo37EL",
  "key5": "ewAWHHtY3BurtvFJ5TVsHUaXUkcGJ3crKTSUuvzLvNJciWXWjHpXpQfQpEngYopvK3fPBpTdSto2bjeKTbStc3V",
  "key6": "BjcF3mAy9fozefRgRXvc7S4Eixf1ZBHzJTmkwausZ27kay65KUBrTRLC4LrmiN2vj36fRok2bmj8TyicREJnnGr",
  "key7": "aaDiqAL1Mav8R9USiqiC276krRmyQHafDTzHRc8pwrLAWc8hRuNL1syryvb9xNwS9ZzCMS1LYmUipNrwtniBJA9",
  "key8": "2TEQHvMUAbMHxxL4XUUQx5v1WiBcBnhHTpRrTpr5VRPj2igJxv4SkuJ3RppymJzHd3GSo74TxRJ46k7E4CE5XJJ7",
  "key9": "3e6DLzxqXWU4fQx9cAN9mUPGoqP9k4Ghc3DMVE4AWnt7qp9EJ7kRx9crmdszh1rfZAyiE1bq6zozLogt3MWCgNey",
  "key10": "56Lw2PgzWaNm23hvbEBnDijADySAzeA9aBPH3wBKiaaA8AQyUrmJofP15SU6EWqh1w4D58jK7waAxVzCcmzuui23",
  "key11": "2xHMbmboAshpAPW523qCpaQuto1ZdLiJ1rNFcMK6DX4Adq1GxaZ3g3dYR1LdNnFsYNFSaSrh4rivc6N8ymE9nbs8",
  "key12": "3EuUhZrXXUAHmaSzhcH68kjjMfQ4UAmc1ej52v2wTDJgtaGZxtKyexokk31EsMYucMwDLT1jfgxKBK2MihsJxvvq",
  "key13": "4BM8DeoJrgWNiYFtFatT7465vm1j5NF1PWnfraV8BZktVxKLBVSvQ96td6Zaw3YZUJTQf2zr2GoVuPxrsmE3jKtG",
  "key14": "4uaLX51JJxk7F7NYYoKT7jxBzxxXVnnc3eEfZYmB7PEmWZvrZBMmd29s19RYgVfo4JEtJJcEWk3wFwa8QULbSeM7",
  "key15": "5zyScFqGYvhvZ4FqvuhZVRyPiqaBfapEyCKwvqUzomRGKYiTJ9euFznPQCnhD2xz7GPvineikJ57fmaWF5WH6x68",
  "key16": "5GZSnenhaPfaASrjz4EVaSwUhDeeZTqLufb4LD8cHsPyHkhevBU9FCxTU3nacubNdHecu5ULRn9qUmrfK4UkZq6A",
  "key17": "UDtAG7wYFsrWU7BSe7fAzEmFDA5WDMJnjJjCmsBjYiW5q7v4wxJjM3jMpNjbYvV8L1aQTkn5r2BuXeVwkNpshYC",
  "key18": "29t7MzuQKjNCRNCWsejUdFxoPUkPJbuvVWTX2LTNt514PESqLxrHG3VARtndMGR3tdSGm8AtewA4pfEn7ru7GsZj",
  "key19": "46VQpezDNgymRESEShx3iLkHxbgAxN1xHg5P57dUfFMKPAC1rxWr8EbRiwNd13JFEq75NtQusA11BY1pAviM55w7",
  "key20": "5FKTTdvAN9ZxjpmRZcQuVJH2b2xyHkaRBH1or64iqFxQjwrt8QapfhxVg4yVLWSZYC2P8qZ7SWDMYff6iy3pigcM",
  "key21": "3TJmPh2DgBF9cd9jDrQy1QBo3fFN4S1cjUiSGM8vNPyjKXF2FGq5aZturXQRBEuWQmRBtjuGTwnY1k5KstUcd74E",
  "key22": "5FgVa3BURVJkyPSGPCg9TBBPtH9EKHsdbgEmjUKR81xxgcyfHbqLAggkTwFvFEvUVeYaQ4muxi88qsWtGaojR3Jy",
  "key23": "4WMNmzG2GD2kCRS9FkDS5CsydruQYzWpMue7kSgDhxZtrMik2sVJW8MySrtco4uX9BLKmrYA5VdKCR1rHRsquPaM",
  "key24": "2ga3j5UNnTw1Pu4aSk2ejqiqxZK4QqoW1JoP9XkwceX2mR9dnAUJ64gpdkFHvD71Ap9egmCWSRCevu1RDKM7uR5x",
  "key25": "3ZKzrqhpo35RQhXVuNweMEsENXmpYQEa8CSHiXGACx81TQgRXUmzRTAPAdjWTLhHGUJU7ET7ErhdKzjzN8o7ShDM",
  "key26": "2F63QVEtxJZLjwNmoaSRcMfFccYP3fS7jyQYDTLUVQ4bTngtZCKzSXM3pMTjVn6pWTXEx8jRu8gahmnLakiF8doC",
  "key27": "2oEgCDMcjKJVZaRRJ5r7DSxo5XsZBTuqkKeJ8TapTnm9zUnEJGKZtbUeVoTTCb9dpjzJ7fNf7rZiuaFoVFgGoBXx"
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

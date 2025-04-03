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
    "453inPb8Ecbub4nqyNuNUyku6CdMoMAPXykjwZUHEpw2qmT453a85KoD5ZBoCVxJyHawnV2wYXJ1cwtzjBgxPUf2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sp8DrAPBhZGqtpDQ4v3waZWk7UgLv342gA1yqsrq169NjjHpSM7azXb1ox5PDkHpHEXxBKpJSsgmfgGhh9CW3EF",
  "key1": "22K3q4Us4uD8MQaoWM6A7N56JiiEwioo1tnUbiDhovi3rcXVp8Z62GwBdpdYbhJjqXDDAns34nogXPJNJWQZNKA2",
  "key2": "3t9J82PD9eQUC8b8KwGJAT6oHkgASnCecR62NjxqzDz2cRz86J2mghF3Yc2kPeyBvyX18ZDa7maJ9845ikyZtJhk",
  "key3": "3o5s1BWrGaQdKMqbA6YPKArueRkJ1iDyTcn88n3GZVB9xRe61zKzaBAzF831RbQwyba6gcy6UxBr2tPLtAg4j1yA",
  "key4": "2qPZcgtjqPGQwV5o7eX64WynvXHewMY1wHE2ot3MESjz77KFM8CnzEesbkTMSG9AcgLma8H7769wrfRKnhFwZBEZ",
  "key5": "53m8wDY5xi76CvyDNfSMCdmXGS1nnRJhUZe7EQEeLKoSx9FpdKkoQcp8Fcy2mdSyj9ceyQirTY2hrRSW4s8S6fB5",
  "key6": "1x6QwhszmDcyQbbbTxbttD9uvpRTPZ25wsBHGU8VAqxzXWsdj6U5xGENDrvKdALhzUjwm2t1dAcNivvQmS2Unkw",
  "key7": "4gZscx6yV7xsGQxV3yDhgYdcSHffCy4oPeyMbnXzgek9yXq9fXZDXmmLwyUTRN5ypp5iwmGaUxArnfn6ksoTnZFs",
  "key8": "5dcn9PYbphYgk9hW5a58815ohhTXGkftgvwLyXXP6QqTqBnEU8dJdjJwVGdiH6WoALHmZpAsTaLUNLumHWEfPWk5",
  "key9": "4PQNuNcaBDbrnzj58Ei4JzH2kXJdGuFTCSaZekXuGNt5XDzVTYmBRDnCN7v3M4K36ogd4sRPohZoCqF1A47ic39T",
  "key10": "3YQLaYvB85gq6odqvJuP9zUBrQL3dVNNYviZUwV2AZVfDmF22HBpbK6ssiMBtny3UmunJzW9wQTfpCoXqgJpCQnz",
  "key11": "4nHus1GCJW8Wg2UkAzQhU6xaCtrAtkHTU9rWCEf1f2gLv1ifq551V5bVU1iBtwD2adbBMx9KFT4V91o4jaJVFJoe",
  "key12": "2GvEgcABWED8ZKynmgK75e5EpqEt6DsKQGSN29k1M6o2oyP9CA4VegSnFfHtK1L3cBvFNN39N3eNKFgy7TuefW5E",
  "key13": "2uYuakMtkfhmv6DwF6pAvp8xYot3PFGTKzjx3hNpNnXrWRQqEbfaBSVezuP2A8hmrUaZTTQxyfZZoWH541onxRQ4",
  "key14": "3U6K32BAs5x3hAezbfgiGLrUNf1uJxJWZF3oCTJjeDonegLd5nTnXkfwaSxbcXimoa5mtS5GWHveoC3ybJaXtJza",
  "key15": "282dCA6UidG1KDScuDnd3h9vaZcNF1yRJjq2KR6DGoG6xKYbwMgeG6HXeZPRzekRVjmRGFugNECXMWvfGY1xanEQ",
  "key16": "2bzG8CjhCC8Q6WTYVQmmFgZKJ8p11Vr2Xnv9oiVbgeuWnZqTWGGYwnhPHYvFVdsmGzJ6guvKSBDuwSuS3k3wKQiu",
  "key17": "4cqmu8sWQRbc27LG73M6F6bVXqAxREAAvY2GGJK1KWvyTgMq6Qgvh3PBNgnbbMvt1GybwWFGFbrjw6xcQPV4G7io",
  "key18": "4g33oALGgBwjkKt5v2kWFNkJ1SsutKmhdgviPaHN6u6d5Kw7Wwne8t3HAVcRQQYKSPATmcqT4qpaHnXiwCccmPaD",
  "key19": "2Gprz4MGzZ3bphL3uphpY8aP2Sg82kgVyAP96wrCtt7XdEKWbjeBGwwqKzjT317kb1LfagVgnGHd14KxWfZLN52q",
  "key20": "3En1kSrGmbrjeo8KiJumX83Ayk4HaiB3nwk9nKG1Vd2AueFy3qs6Wjv3hEfPaoqUG7RdxifDhwL1Q2WRQCrnGDow",
  "key21": "4Nq6hEW9QdKmshMiGgn4kRZV1PE6mPgpchaPTQLFTz5K65z94FoqNbSkgMPbcUCB5fDdNQu1CHvBpdPzDp7DvVKF",
  "key22": "25DiUcoevrT6nDjQB6rNC2YRmiRV1Q27pp6kr4nT41eJfcHrSPhhKcaKB1DNntVhFERAKmkvs2tiHEGqXtsTPUtv",
  "key23": "2gQcdxoVjqBrK86d4ufLAhwKesckmckTR7ZTCZWrW7UHJaywBs117wqR8EVeWgBWNq35cKSqjtGSzx3HbTXCYSCM",
  "key24": "4B638wsJoSEVe28m3ndNKbj6d4GWih758TAPM85KkrahQP7zgXMVxZDWvLt3SsBK3qXWaNRPS6YdorigWVmfV637",
  "key25": "5e1J9MXgyPk33UUjqioNQMBFab3qfmvGpej4xiM1J4A4gSZMvWyG81VZhfojq6am8Gc9Jddbz4TBxZfEhvxvVScq"
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

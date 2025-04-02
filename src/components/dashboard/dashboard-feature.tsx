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
    "w8HDX3gfmzkj51r8soja1Uoqo2pz2DMxiUtkMsWcpjPz7YMsdYiLy8tUEEEy86gcsMVaKV16Nv6NHGxwJ9iuY5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LN2RT3KnZL6KkLZ6W47hAyPNDYMLVfurvM2PtBogNb3cEZBzUCUpSeFW1J8vyKJapDX5xSicg4qRa6dMdZFpKTL",
  "key1": "4nr4m3KCJFKu2jibUmz921k4XAV2U3y9PMFuAbema29bAWKbXbjzzL5hSjziuZSDMQECKufP4q6sbZcuNh2foSRS",
  "key2": "VRxVaFyYNC11CD9FjKjSfd4FW2v8hP1zHoT5QcqVTWxt6AhqVTKTJub4vzyPP8fdGsfuvvRuMpDFBC3HX1x9nAn",
  "key3": "55o7GsCw5TQEX8H3o32vxYhvKDmn9sVcE2aF4dTRWUyxrBMm5dxwXLZKhgTHQ4xq5XK2fu3VAGD6ucBdq9J9VrjC",
  "key4": "Ab2u65TmoKHm6LdwboYSAq5DxewefDZHhBZjSpnqg4w3rFKRUXAC9Bew6CkyQMVUbwdciWHW2YPcSK4BnGiKHZG",
  "key5": "5M26v4HbnaC9PQctNNTqiciTtaSaxdWz8uMVMz4af3ZgcaJ2349LNfxmrg9F3kUUhycKtmwqYqSjWmERa1eHQ92Z",
  "key6": "2oa7qPCF5U1avpSDsc4KTk9E5AAVMYDH1F54EoxLC9QJkCaKrVksNhfdBVEdjxUrvrSTLsYgHeX8zvHRAWmF4fAX",
  "key7": "SRQ4yNVBpczxGQ8uZ8rEC4vtL3dnSNQKpoSBPqXUG6SqCXQY6seQNGacrifAWFwxpbVatQqMLBz1bvm2N7cAvbi",
  "key8": "2sQ8neUqohtXfpD3E1kZJqNvRp8DKNHMp18KVUYEaJ9nRpqLcLkW3KGP9inPsyFwKJdggUhUEJ2TKeHMR19XgKBY",
  "key9": "2WUSy2g24ZvFQUgkFE5guwqNsrBgF2B7odqrhgigun8n2sWAXGvGAS2gMW8a5sQ2pn3Z8aDwNjdQv55hPYQ9Uv8j",
  "key10": "5xdCPsBmmQKMcRyEB8dhSMRL2NnUS43XGByoyvKvYuJNbDoZELpkm2BWnT65rhnpCcfmyqCRGVuk8qpoPKHt66op",
  "key11": "knZqaaUhhBPDB8ejsmNzf5KsWn28LLx3gUL1KeqxWhyGjgTNGn7Moms3vv1R1vzMAQtToPLxfnnUoLSKzweBf9s",
  "key12": "2PK3cKQEdWx6HNW23TJEhWL3tGLeuRMPGrU7VDiCBZ5xfdFKssq1NN6tn5wdjyREpZxUtPwT4jTgew7ET42Dc39h",
  "key13": "5eFFN2AGrt3VokoaRJVS2NUxa9wPtq5ixUnZko8aUd5nixRrM4x7CnJd348HeXU8QP7GHz27T9HU3FjiXcJjVzdb",
  "key14": "4bc4BkSxYRKwSNrKwUpMprjCVR52oJELFhBBKDLPaquQ45Vt9dt64H5C1mcJGXdMWYD7b5qZQ2CULFwNsh4ZEz9r",
  "key15": "4PAoAb2BQeiNf1pAKJpB6185zUZJB8UodYLEhk1gBw1e8khgkME8jHQvfwq95brhgQ67CNXNaS7A1UbUpwFwTdnm",
  "key16": "3o5WVH8ga8ZnE84Q3XH3YtdktUsNZrx9ob5FQcQQ2GhSYBdhTJvrC8kiytrwLhowppmp77PNFRXE3CijN3jfpwBD",
  "key17": "4nZmyYtSs1JAspra1M12GxCfqQUMZou1yY72gZW7h3YURDUrc2A833pq5dv5P9ZMCj6BNoShkxwkoAPD7orYmUTh",
  "key18": "3vUFtz6EX8qVcQrCJCYcNwhpPqHQwzLWwBTwfyUxGbrsvQyo5BVHXwHhKLfpc9sEiuJ7qsce6CW5wTSdCzrmj3bR",
  "key19": "owPpjnQ2YzFYXhxn13c6B2dsD8qJ7QU1TurDA2sNasHvRKuMoPSV9pK8Ycpx4p5HzSBQfQ8mCictknBQF53M5rv",
  "key20": "4tHYccS31eBBtMXW1F6R47wmCBhLGiiSdiEaMLtEo5qBGfLJy89dn98XL4MQZEAcPUfi6rApxn9NNTpJW9nqFGiz",
  "key21": "2fmKXKYapwgG9uRUPJarTuheUcYhSgLvNFPRUDj1y9NWQHqrEwZ8Lyk2ijpDKCDRmeHKLtjw9Nik1CeqPgUp4Squ",
  "key22": "4cZ7e57dW5eF3pLGqd1unX4NDhFujTnAroscFz8SZh3ndGXNyQt8JuzmpyjPxKD23LDRk2ZMAQVEWDmrUuVWoegk",
  "key23": "QEPXZ1yxyfAaCkENFCxPGrYHRkPFtkZDWUGi98MVFVAwC2H8vcJtpxNivEZCALkbYJz5rSTM3sWE9fY54cakUcC",
  "key24": "cwzxA7XTBWttsGzDb7brK7S7EKcgp7nnnpXZteFR3svR6KnCXJqiqcRWV1hvZhcJmEbNqX5ksAaG1XpsUKQNqbW",
  "key25": "4cCm4MZrbqiHyqbGhBmadY1YD78emUws3NcFhjZuwK7GjqxytWHqAeP7i4MmB6fF6PpjXEAh6HtpcPD7jDibUS9r",
  "key26": "4Xy66NyxzkKZZ2VwfoNUMfY5Kq7owcDmc9EZB7avcsapi6jnEXa6MStSGKfo6rGEjYS8VNnZw9SQZx9eCAWn1ecJ",
  "key27": "2Vw2q7RA3AJco15wbzXU2B4ijmnLqWd6cRyxbNoXfXUN3NDX5dUT7VdVYDyNQiV93yzckaW3KPkFCFrGaVXSWXdU",
  "key28": "5z5sjaXvhcnBrohYBQzJcBdVTQEGJPYAGFqxPT3UU2oxLPDdbFRnyaJRPYYmaB8LSgWsbxgpgdmAYq9md9dHHrX5",
  "key29": "4GDY4wNG7P3Jc4E3oDx9n3rDwnCnQNr11dr8NP1mw5wptEL5p9dn56utte6ombt4fgDvppHeaF63eSaBkzrJnrSM",
  "key30": "oS9By3QazdsKhmU8hxDcWLdLi9MfqmHJTXq6kSr2idwHt572Lxponrc8Qiu2jdAok6j9FpvRCLLHidtaVws1zPq",
  "key31": "5uEsw6JpB9LYjqJRXePUKPKeUCdZ7XdLGujnSBHcjVBU9XbExRjfvoPyWTVQxVxGro1hsJ5MZaijCynb4Q8WafxH",
  "key32": "ZApQjdU7uLKJXiEHNXBM5uXgC1ZSYib8MY5EcRqUPrt8MVwvK3UAyC99S1ffZoHExihRABzyc8vrPMNDtzgqaD7",
  "key33": "55RDyyMJ3ngynRdvnwEYSyiViTkaaWqHN2dX4Abg65PvexPidX1zvbadLF9JzCBqX5yjedJtQvG6hyB7ekiaPfho",
  "key34": "ZUFEuEWuRwJWT2ArxbyXSaey6Ap2jgDs5QAf9QYgwgomDQFjorJRm3FfhC34jkuKdpAbGrQLPye9hyDheMwx2vL",
  "key35": "2k7wJaKwEgXtS7dYcnUsTfpmmpTMRMha2u4vaN8q2WXbDHPJDJoPYb7PyaoYBNoNKgke9TtmWpgNmnKdniXEzQjo",
  "key36": "5DSGSVeTg7BnXFpUGDJtkSxEHAai6jiXacf7RxcPNMEWXF1CS4m2qA4XP5eUiG43vBdZegXuK7XbKaTmmJbq2PTr"
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

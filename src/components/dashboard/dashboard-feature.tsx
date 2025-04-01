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
    "5EJqiTHE3GzkHtpBuhpCvPDEkRL94zgrM81YVMs3ocmXKrALrtxnhPTzmtW1wTthSeGZzXp2434zUfmjqFwPeYLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGcvnQohjYdhPmhhwHRe3cR6pK5qnf1rdbHyWnF3rJXKYVaPtpdDHgenncY8ch8XDvkVgh1wvcam5UQgA8R2gpj",
  "key1": "51mZmvj8XbPa6Ausi8EFKirKoEs7LoktCfKsKRVveCJ6Kt1XxkTdW5Yfozd7n4CYAQYVrMyJkUVKDQPZxoeVtzZt",
  "key2": "2dpcndiiAD4VdW9gzBXiWLGAYqeqfUTD3P52d8Wx5c4mBAm4pSxETUAQNj4Ugh2fwhUYjdkdg6h9ChBYPE34tpeo",
  "key3": "2P75Uhe5gi3GdAiCxG1CDn8M4UQ6LRGqSmR75hHSuvWUC5vZmTQTQ2sTgEu7xSTadztuJ5QvUEJq3fAAjY5UEbb2",
  "key4": "WzTdL7o8bQBkYgFFmifP6xVdiLXtpWYZS2ssz1zBfgxk3MhMFM9wzMRfmQZSDHTPbGdoppdF3CtShyTdY8tds5b",
  "key5": "2TJ8c78ccoLm3c3aZmWoUpGPGrDqYUpyrS7FKeDDGKGMiNUQzR3Lt3QZunzo1T3YC7JJnbsZZEtmMMRXiTgtZWhd",
  "key6": "WtpQEiDTE75gcZD99kNLPEs58baaZFfB1DWL4M2wHp4JmXkZcUxJvKdrTGvoYXq84dQJ3pw2T9y52tNLfa3wM7Q",
  "key7": "2kfwS1B8K8sZrCYtnWC7PZfmvPn3FkotNskie4N23aDgEf75GErsioTqQyGkfsnaUVUaBMKi9JBFt2NT3TWnEncs",
  "key8": "3DXN8xXdPbyP1sZsj1V5dViGc7LdGvDD3UW4MF4xajzYewrSzugP7rVu3KNmUVHK5xM2Afhn9Ayv1c47sKEqjjtM",
  "key9": "3LJ3fvHEzdXKYYusjfNDWtZtbSYL2o3zMY8icjLZmLvysAqBn4JYbhQNzQLVcxCCQcsu8xGMKcQ7JkEZuQ24czCa",
  "key10": "4tyzSVxdAvcPL4mcXkvs36dyW3sQc25Dzu7XyisC7yFm6MASRMxnXQBjLnEx7uyTS8oG8hdYrkoioGtiWdKGrdmW",
  "key11": "nXjM2fnF7FTQc2cyKNKsvmZ5sQuhwehnUYjp4hWCovdiUNMUSZvGQx6Wp6GM2oHtz3HZYVTnm1HvNFXZ6ZBcnHx",
  "key12": "vMhCH7zTfqhKkfWwaMft4TTfgT2vsB6C1tEscdEQ632ApPCfDjJvBsD8hRLFA5onkWMGDxYRWHRSXd1QJwchwQt",
  "key13": "4VS5tDubecoMJXeQ18W8PXLgswvmJ2MhKQ5Jm4tVabHbAySetnBzBFc1UpyHDaaNEFdwMZYML2bG81dsYoPhVY8S",
  "key14": "33zArKVSfHH8N2rwwum9ymTTqkVYfRge3Nq4Amv9wPrDL4fQhPE2bW5NFokxSpAGKjdgSVNGCW4FCxtg11SbykGP",
  "key15": "5E2Cf7LBvocUxFVE3QT55CyRmUwfi3cZxjVapCDWVNKWnJVD9kTDNBR4qYbE9pFkX1WyXXFpF8mFcX5f3LJ6FS56",
  "key16": "4xooZy62FRB4c9WkiwPKAQDc4Mx827pAsC8QvsZuykChJZw1wSQHe1vZEfH8P4Wsm7iGZgP2yw7yg8fwzUsYyGBW",
  "key17": "4qh5tdrWMfKnnnb8aFEaCbpxyDhYWRRGaD9nVBSrpgs4htPf1eCWg68ugERjJsSticDqCK2DJbsbn9ypJRYuLUjP",
  "key18": "23P8UdWVSpY99QtH6iB2M9XeX8u2dj9xZXr45pog67myZ9mETL7qhkfpdrgW73xJfVZZxH6Wai4ha35VrXHyTKZm",
  "key19": "5fhcBSsefqhDZwaKEByjiz4y5capJsYNZCyCTWrnyLrFDJjdNdBdJYHuoRJ2YbuGZKEodkD4u1ZujMQS2WW5YAcJ",
  "key20": "5AurJ5KDieqwyfjVZXg6ZxaoWnDPuktZGePyeKeC1ZZtWjr5rJy7KxvHFKQvQWuognkcmjAenvoo8BnZAsQ5QZP2",
  "key21": "62r8JaTucerK7sdSu3gqeEQ2w874N23YatksJL6C3xuT8p91xhmXDFwCEFug8NWnWezwNUXzJMwPnQvaFLPKEfNu",
  "key22": "eMaP3Qy9dLHSVd6e2wzzs6N6z6M7SP4DamgsvJ5DYULYjdfq28s7PmwNdjvJC18RDLd2eBVmbNWxPZKuumiSr87",
  "key23": "49iGtXMytZivzBBVJqoNmzJ7XdvGG1rCro8ssY8gBzbQRSBFe4Rj6Va3P89YsB3D4jvHZfosucEhRuJasxg94ihu",
  "key24": "Vb7NekbtbmpDMQhm34iY4igUAowLgripmWZaxXwuvTkRdvZr6DCucP8PuDjBuQ5an4AS8dMpb45tfyeWUyw3FSQ",
  "key25": "5XaPf7ZKJatZmJNbUAxJ9GxaSkzCuQkLyFeFEcnr5MB8xGCVuE238KtyWXUKj5XDzVcjD4TqeJuL4C4EG6chYa5f",
  "key26": "2uEpY36NTQr9YcommpBRvZQdikuSKX4Lx4HJGySHfFEd18nHsZxwRpikvoxHk8mNVL3SKTbB6dUS4VEZxAR6gt4g",
  "key27": "5NhzHBYoM8moGVdqVg1GBLFGtErtCToJ2FtgoUR6Czgtpit14hz11KbER3wQf84arp8RJqC4JyQvRa5V26Xaq6GH",
  "key28": "477f7KAH24XZyZBAshwfNpAwUuwWYXGRu2qqCjy4BH3x7CYBdTcAissqacG7qc5spoPa4xCJDaYPMFHPRbVqqG8f",
  "key29": "MefkqCbqyFCSoqhbzKQw6V3pkeC6r9q538kQLLfeZCHzYSbPTujG9DzTREk6YapiEeKEH4rXrrGF7SUMnizzjCq",
  "key30": "5rYTopeFuvjtdV8n2BXvTqyLiK9UXfpxrcdkGdkAfLKGm96K54gYbTw5eLjQBR6yi1ePfhc9Fe9UiMji66zU2mH9",
  "key31": "bGUaRLdLkPKyi3LzYb3szQjS4he2gdyqk2YgiWgJ9vrtme9fX2fk4xScbjWaXpNs2rrz7KFHUnPeLLY5YSTUaqf",
  "key32": "3hq52ZxyWvRkxvaD7mDXLGrbBC5qokF2kBVcxr9ZEndYn677GCw9JPsi1wiyEa9fh7eMrUTpp9i546FayQVyfgd4",
  "key33": "3cowJ31Gt8cHhapjR7VGa99HRToLQNezosPVT5pYw4eiEJ6nwMFEgLauA4XSmGNXoSS54SUpN9fSZecwaW3pQhyN",
  "key34": "2y1gnQtQfYzxRA9VvRvDqN5ut7dP9BgFYQu8ee3SJMUEKjtzoZSPmrWkJSH7Qho5HHvxM3L6dVbmn1U8pvYgp4jc",
  "key35": "4fZGoNQ3AQBrU6roeLwdnUcAKeKag7GNVCL4Js6Ud6tzvZHgR5SfyGyw7sUK59XQ5TpMkrsgUYs4NZLhTZUq57Dp",
  "key36": "3xqjXejUxhRp49L9dgCzo8n5FCguz7u8pupRVfehPRq2wNXQqU9J9YM8Ddk6gAnBvcpCtmtkRo5WX7VCAhCYymuy",
  "key37": "5ovRN3moh5Tt4oaWJzWvQ2hby3tNqbfNqZKo3LUQgkfRwEu9wLasxiLsVfMMHubdTMief3sKzkZcJ19rPBrARW7t",
  "key38": "nkuFmFqkZA95yMqU95GVj7ZmojNshdHUkmTh2qauE5TYsRMomeDyWjcFQUh8Noqo2QNbW3XE7yKYrE3Qdc7aV4s",
  "key39": "4mQVcM3iVnGUtZjvvt7bgfwxJrqJMuPCH5Q5LuyijpeWAGSrqVrjYQQYYGoh9euavcBTDqgPKbpiFsqDjpMgCXyZ",
  "key40": "4MX6PTzPKEafACEfuAqBwUz29toBejYW4HjEb9wuD7dckRPR5F3vKdDiAQmTtgr9Ps1BzwTKYYRn55pVgTaRVQkb",
  "key41": "RoNDDgN4keKqog29prp8JH4t4Rn5BRTTnixEmzNcFNW2FFxhm21gGmGU4nJ3XQLmcRRGLvg4cLRzmh5EY9YXbfV",
  "key42": "526zDnhJdkadmNpnS7e7KwJ9QYmEcLGqWZzyscV7k68aUT6WtWF8BULe7exGGbmhNmWt6QpzpN3SDvs5YwebMexA"
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

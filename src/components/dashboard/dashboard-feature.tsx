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
    "5sHmhxPQNMrFrbfcQbCbH75j4DrAgKnB5ftx8dQnQfx2tYaPiF3Xr21qoA5but6AUFWH4TeyNrGe3JkTwoXhwwRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44uSpWouh9f5khBhNsv7HCc5A5Q28Jn3yLMDdgSc16oBurGW432jwuUYg5TLbA5GbhndpR7gvTjkKPsKYXDmYEAY",
  "key1": "s4WCRYfLiYVLm2Qh9o8rtBqZzZzdxcyUmFQ9xsqSQrWZeXj8r1Dm8NRcGoRD93zWrG4wxeMiLKkEZAsnPTcQuos",
  "key2": "3oT6vLHp1BzDvgLe3QS5zSA51zGtjYneUiZmBgw1MyCxbbmrydc63ygBdu2W3Wwa3XX2jDLmgrHRmV6m6UzWU5bX",
  "key3": "5KTEKjey61y5qZZdirFNCBe723G43i6m1rtZU2PHwTFTVUfqd27dMzuW1jiMGAE97PbSRwFgBs1gAqk8UdVLr716",
  "key4": "2hndgejXDWfxUB9iDW2V9kSVb6Vqq9sZ251D7prVbxG3nJLQmao1ry4w8Qqd4oDXfJb4fXyNWfEFaChYem6UohRE",
  "key5": "5aaDqTkU8N8t5AVR9ggkuKBWKA1jcAYp4WHMfx8VH9WR4cn3iMPx4PmYVxk9bqri12z6T4HqQY581o3eDpLHJTZf",
  "key6": "gg2okgEiUgRxgGsNfS8z764GjucnKW4f5tsTmTTtfQypsBids6zpnKdSwB7PzGvG2KhXWCyTRnpLyXz4vkWzBbL",
  "key7": "jax3mWQ1VB7PchGPZYiA53fJks9cMWmuRTGBLkjkbBARGtftBAn4FaapbRt7YK3wXSp52avJomi1eppAg5SEPFL",
  "key8": "2oKRSZKXNXy6p8WJ4AwLueNWKqetSE8z2vFHqkz3sPUvwYboo9a32p3AgZgVs1FZZo3F8DCYT9u3kUp5SXAY1yXD",
  "key9": "4PP1fqXPHYVhtLYYuUPwSimpysytwskPb2YNRiECBftCiuByq9NxddcBxxCaZTECr9PGMdYfiaCYU876DSFnmibX",
  "key10": "5gnxaHMLn7ae3WwuXrERzCPwJwsbehaXLXAv8psXcsaQT5cUGBKLrDEcMWfzpMvjJvj5L8yUPtJRB2eGagJrYmgB",
  "key11": "1PkBNqYayTWdecXmHmrC7XftmPfCGvDk5WDJYMGZcGH6K4ySfiSRfBVNUS5ozCMTeASXWFL7JzSrTsP7cz1qQNX",
  "key12": "5zLaY67a1BfjHxyBFt4y37GfvPZ7oJwTXJgAzRpM5Tb1X6K9PUUihkJNa3XKbu5Y9jS3ah5dmF87Yb84f3PagjYm",
  "key13": "22Hs8RisKutNP5TikECRyinSqgqXSkUR5RHGvSkwNkBzVGPBQ5QZaJsWvjNQjSAcZPfRGEo6crdk4up7Nfv5rx25",
  "key14": "3gHNHkiCRUoCr9c76WhH4ymzAeR1LJXyixU9HFTUJvitPfZNNtoun8tv2oCTweaNpKkc7CppezCggGMYHqRgbVX1",
  "key15": "5TGVUMSBVJd1PGpKRp3MC1bfwijUtWXxPHcPLyBdzawNCSVZKmTtej2yoDRhFmrSY1bKHetq9dtZxacryoymqDwc",
  "key16": "4jM6Lap9oGzoeEv8UF8mtnM4ofC7syEPtt1mhnLKCbghf791BnfnrTjVNKfzZnZq4iwNJjfRXGaCsAjURbKUyZoV",
  "key17": "5coyz9V5PETnnEtRVNhKn4bEgCSB7urov14XtvVEj7e4rLYz1iB78HEN57drmVNXg6ffR9N5351e1d6BnhPPo6aC",
  "key18": "4DAeHxpu8ZKcghtq6Jpxg4bkhCSTHCaXnxHKY14HVxAs3UXVmmTPJDXAcGWwqBWbdC8zw5XzpJbP8N85iLmgNJ9d",
  "key19": "2TH7QUk8scYQRBsztCN7p2RfwJU4kxbvqUFY1kP3RCXUs2fdmU8L9btocVt4xqbLF7RJdiNeMnDfHhirXxw4jv2V",
  "key20": "43r4sX6p4EnpPzixyojz4d68TLcsca8pC4Bms2a4e3MXGhRJrtWcJFJmvEv5SmbjMYGn56542MoZzXnV92ATezTV",
  "key21": "4V88Zm7ivreBVajeKaFY4mabapdxUgMhmGu1eY74r6upxZFmMNDsK2FoS6kziQ7WLQRHFo33uiB4zpHNPZuiDE5Y",
  "key22": "65aM1KNs1aqfW7srCCn9GWu3NCFRfnN7jkEMS1PG1tG5TBDp7NQEaEkS8WFzPpQzKVwn5RRnsUa2AHZk9K5Y4Kgu",
  "key23": "3uPs1XJtmar7kc1azpU1rQdShJ9pesHM2UEiKigVhseLXhGQQpcoyqZ5LpViJhq2EjK6dMBTjsc8Mmpvm4GFJnsZ",
  "key24": "2pm6M87DqKzeAZjEetuFPDDCzmBfhp9cfN1QprRHpRaXQ7gU6XnfwAyrMzFRGW8chKhx7L1nd8gXqGp9Q8v2taCm",
  "key25": "5X37KBbg6iUUghcfdiFy98PauXwR4qJX8Pe1Wegu1eWs9myv3tGES1JTDd6SvGt67AWsKmHz4ERvHjG38aFxMYy9",
  "key26": "2UwEYUxC7NRo3eQ5pgtDhjvy99VhUDtqv9iGD4PyKqdmoyJuuALAuy4r3NokD8iBxh2rgQSq62xzWEgwXovSNn2N",
  "key27": "L3ijrkPo42jT4npFuW5mUnknni2eojVGdYquymJJSmz2jFjvsbwJc6GQaNVGxGkHuBHYa6aUD8Yc6uRo3FqePG4",
  "key28": "36JAfTvGSQAwpzk4Ddi6svJkWLMyxzZzDASB35sFCNGrfvpvLDpqKfPBFJLmerYguryZ8HS4o6DA36JfyeSkeNmC",
  "key29": "37G2cGwJsc412b7H2cFc34N9rXdkEWsg853PsUCr66vFNZkV9biGZRCka71JWAiiN5acc8wX1o9Fdc8ct3t4CJ7w",
  "key30": "tTwaGT6nbMETsiGoy4uioY4Np8fCmdYZ9Nqjp6LxRtEV9mVLgHQ3Qv6aVaSVWreuGaJAwTJNhBcrcJjrQwrBfRG",
  "key31": "3CkQ19ZokKJZNCTSsLvRifKsYJFpbBY6EAeBB5qdbAXjbKXQswBj3yFLa6gTJ2mGz6jSEyxhNxHBJb6zrH4DueqS",
  "key32": "66VW4UvbZrrRDndnQmpidtqCv9xkHPoGo1hXcJGP6uCLARF9qofVoKLrAyTSQqKuPm3ECGLpDuaC2scBn6ByGN7w",
  "key33": "2M3MC73AhAxdqeidXppBKXoEvxbBxZcKDLworwCe31UmUmnBieS4KY6azF8NtTnBBseAWwSBpd7tZCaKkeDJ8QNR",
  "key34": "tbDpDDFgZrVKFRZVARcoabCecJyYF6YDvUAQRyXx7EXHMRCKV5UA38tvoy7pLdVF9CcE1Mc1bk2fGR82hWzSPiu",
  "key35": "2D5bWR4dtdqss1SLXXmULkayUjPQ3Lzb8WH9qb35HfNYTV4VxBkZhqsFB9sXh8J37pksS6VvnsMRRVtxyHBvu3H",
  "key36": "BVp3LqnvVAhWEujGEQbKXJNJjNptrZoTFjGcbJk2TSRym9G9e1RoExStEp96nV1FaZAyrXDBCqU4J6mVAHZFQNc",
  "key37": "3AVcDEvRtrEaNwdnHXe33ut85CN8QnxfAptuCcfDkET6VEdtJKEJBVgBKohNE3599czBdi8nqEGiJmnnqN3HS2ZH",
  "key38": "1r5mkAycfdf6fpcnpj38YMZC2vcgr47wYqDWHNGwuHubFWMy1JRtPz6Pd1JKf7LopxHSzCmpW9VVSsxN5m5gvcp",
  "key39": "44knopQho3W963F8zFJm71KmLBLh4AGfCQVSfm15jhbDiY4EJRkk6kSS5Skdgou1PgHaki63rp3ujDq5hk1yRxXC",
  "key40": "4WNV15tZuRVMDRwgdqcJYPJwBfAqUk65CBNwjz9suGmkwFmyLujQteQwQhkr3DLBVXBHXcVUYFVTyQgobxRPvPvu",
  "key41": "24LHksZs1SY1TqHJSWSNF4jaQyeycKtQ8QvJe8Xh7UJBcwqCV6LhMFw2nNd7bXj1E4Cv2DE7qB2nj57nVq4BwQDL"
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

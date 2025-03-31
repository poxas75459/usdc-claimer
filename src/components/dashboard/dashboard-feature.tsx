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
    "5XtYqCdjvzcUxjRaSSLhmYCda1Rwtqk5V5fBpLMDo152zfZKcizN6STc1W4UrYq4xKQbJERvBDakuuraq3J5qfeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNGuUJNKoSdde2CRPDkdWb53XcbTMktH5HURBBX55mLV5hvR6WrZLHJxEEUwECMLr6pK7cz3sp4XJeSKvP9kYH7",
  "key1": "234qLo52Nf8YRL3mwL9HERH4fB3VinFgU7TH75v4C1isPERaf19QtBybbxM14K5nMSKp2tec4P4LJWZX1Qe6gz5e",
  "key2": "2kraUtbR6R9FMNm5sAqabvneGELGTfDoUHzV3jX8hKAnC3xYhtoPXYp9ZWjaAXM5Nto81Gt87fymUEmua7EGHLjp",
  "key3": "3GNfD4oGfU6sZoiPC9yTkkuDTcv8KHFdf4ndoMV835k6pBr1WzZmRJgc3ALj3FUMraLkPkLpRt6WtXUcjpTTANho",
  "key4": "3f7NrZGN5x7GXuAWpYFTYKj6CVgs4AqDML8QKZWJiMKp7WMTWdFYBKTbLR5CDk4HQc8J8SQKzXjCTxTNBEu5DJoP",
  "key5": "3veG5cfVHZjB33gcVj69Z57yPv5ugEb717T7AyF6a614CZZ8LuWtKwUbw5jfaEDnDW2RTakVdmWECbgDSmVH7Pzs",
  "key6": "5mmaNFyEsLYaTCous5FrTFPFpCiEGVKRwZxTsrNm1tEsWrm66rKxe4tq2tV6GEJnn7fVfBpeAwh71ypaj25ctaq3",
  "key7": "4cn4E2LTLxEdRUG7bqgP8HwEa5xpBqHovBL6KuXFbNf4CJdXNFezKqzxnv9yg5CvS1EbFdhAX6WT96H3pBAvpxMq",
  "key8": "5qg5s5ofdPJRxx3RmUKDHyMuGsJAKGY992QM91P31VN9Nr75BvnsduXmEDdCtmJ7zUSYyRDrUdZouudUnxUctUPx",
  "key9": "3YpNH48T9v94c1uYxUShyjASznxQnzFJgEE6mSybv3ZCH569LjjQyWfN7mt5m6uSjrJvYdSjKBNTmsAMAtARKrsa",
  "key10": "2vxnE5C4r5N5F2Q8oMTaYiF6cPR6WCKje19fo9RQd393dW5tk6ZctCFFfVsKKzTcanrATep7mjeNMJoQZERVXwT6",
  "key11": "QFAPTsAPMaXrNruhaoF1dnVYqZGpWwDmsdZmkJ2GkcEm7w338zBtRu4CKRnK5DSsD8MqFJhds8duBPLMwkJRS2i",
  "key12": "5ooxZgRPE7VB7knqFPzTcHAx6BVnzDpxDhMZFuiyzPpR1BEebXEqoyLvCkE7BfnW2gxQF4yNM3uKL2VnKNyasBt5",
  "key13": "uoXMKGCXA8pjkTAoBC9TiNiDb3an76tVYHmwymcjGpqz3gXpD8bPxnfZ4FELAHZhHPfguaU6LMTsHy3ZFRR3WX8",
  "key14": "dXvkZ2ofxttmCy9wbVMk2kcDPoHYesqkWtLvaGG94x4fY8viLtWN3dLxxYc1LDPjeiW7HoAALpiRkWbBxprhe7E",
  "key15": "M87dJ3xP3igkw7DXcdL9kmbozi6djeh5PYyRVWfpSV3ScW5jZYZKWSgUzcimHLsXw36hT4Vz9uciAc6Dok7PL4T",
  "key16": "2UfZbFngNBDPznWSNxN8Zx134wqCnUjscF4SXGQqKPSU8oiDk8RfN4ykR8ctt4AKpfEj1TuzBefpQfipSf4dfmQ4",
  "key17": "8GC7Ck6VFJsCMVgHgzvQEZ86UUJkU18vykGQsvFmegLfYnyLa7gKGKMDaRfh5nFevUKyjHCQRD1uWBP5fGnjFvM",
  "key18": "bTVVRwzJNyL3GQsBwtbWJeFZXTtrRYYUahrvjEovYjKtgVDdZbiNdRsiL6L7LegpjcaskM4BpocmArmqAtJbukS",
  "key19": "2aw7hcthSqZjiHivJfgkasXKr3FHySp48fbgxa4L45i21LduU5vXSMhHEaDNpurro42NhFoAABDvKC96UBwDKXgs",
  "key20": "5DVt65ZQ6s37obzf1sRV6So6BcVN2LJbLaqn8kGA4eTm3LxuEwi61P1Fy7mdnPHFViTzr7Njxo6rnjkt8eWqwn8p",
  "key21": "5NBfcdMKRkGjtVKiaTWEh4tSBrtY2dmNcLP6dA8WiCZ218QBrQajyBUwrHb5afkXYNZrVDJbvG92CFLsMyBZxuf1",
  "key22": "5DbSYQyxC49ZbreowRFKSqffg9En5ab2cHzAuG3mW7BvnDNQ1oLqUmKead4Z7C8by9Uyja1WBSEFZaXB3NXaZWFA",
  "key23": "2jmJfNqxDQwFBn4ZXn5tjzWshnXyuTm1QomwQLMPFnijYTHHbqkvxpGSLUtZG7W8cV6DxUDncfrdz9fD71o6vyHC",
  "key24": "2P54UiAzMZsAHCwaSTvwwpAWgyFhoG4zyvg7E5CLRYBLUqx6bGNiEqDCxtDd3r6HuCADGvzUq12EMvG4uaA9E9Vp",
  "key25": "58KRDvTc8YU2uWnCM8meVdxKjptWkDEcHr3YT6BCrMwrxXgYqMF2uqsicTbDp9ps7RHwrmrBT4tQzKhz57d3DtEt",
  "key26": "5XqA5iLwZ4nDkbWvXZ2twzWc9L634qxfdx97iRPLQA6yHWC5yUtzK9hxJaGTgqFGYUhWqE1chANLXPkE7SbYwRG5",
  "key27": "54SJwjrU6uvPxL4hiG67S9zZob2MmhZGcPwzfNRjKB1dREjQxs3AN29wNnf1H4ETKAQbpSL2C5cz3PirRn8GCL4e",
  "key28": "VkopskDjEQGa9va77MYF7J5TCWo4TTEphxnyL4deLABoXUZmjJHwcZubWq1Kz6B7kSBYaxxQTcyTJP3goKGX5fU",
  "key29": "uRc5J71admcmGxLtubnQ8H6m284mJUjrWVMATG2K8rZ71e3dZd3J7wdJKAS254ty2j5umBqPkV4Y2uJ1bL8hSct",
  "key30": "627zAHfdAh2ueFUQ2G2KKumFvTAnVYmZRwiZk2nJ16L9DLypSJv7RYNcHxnv5wADseh5dBrJHnh9xqvPjzGyTcEA",
  "key31": "3UZYt96ofQk4y3fz2z1c9n4Pa942ZD5c8wa6pLAgkPuhLK4gkTmftTRAtdrVwA7piL5irfq3XrLV5A8GiBoXa5a2",
  "key32": "ou3wBr3cw6CauxNqcbziVhqWLAEgwpDMT1jaSB1cnfvUHLzd41jUTBVKT7nnwAnhHJyFBf1fuYzAU1fmEAZkMt5",
  "key33": "3ayhqwiLyFckH2w1q9adCu8c41HpVucw4kTwMYH3fycSvYzDdFCiA12vpXM3XWq7oYmT9wCqU7gCsDuWeb6uNJk",
  "key34": "zXcejpDGQKB7X3Bxeu5o9fB5BRioGhK587LxieopmNLC9bN7dEahD1EbPjtHoDhhpMtnCitUPcxUSY5RGQGL1go",
  "key35": "3dgjriTYkRP14iXhQcmr7r4gJ3rmzzePuWcqverhR3aSrGWyY9cMMbnmodrBdx4W5eLtFLhokTCvZ1rayWhYBWy6",
  "key36": "3wT737qmjC3uHWCYLTeEHmmPwe1ceTvEfkfkmEgNzFto3MLycahc7UZdjjCkzWtZozYq25CBSs44BKRMmgftcuQ5",
  "key37": "AkoSHFqYH9AYezWJQCaqQXyMDCuFpwdL8iVF4NFmSouS6xgahr7bbjMw6bPabsHiLi31BrBKSfCmANdAtpxnNfG",
  "key38": "5fMQTyXAQzKs1kV9AB4mBr6JmC1afB1FNFgXBfYRHpnU1Gi5a5JWuwHoByoiYH9esiPcuixUKHPo2PNKt5WCt1zB",
  "key39": "2qHMTyLKCM64UNrzNxfgNMya8Vg7Zu7gbh6MV55ym7ExAcTDn7JaQ7aGppANYkL713A4tnkcQFVQ94LYygsRSrYC",
  "key40": "2F5ovvRVouHtH7Xq87pxL8krDtVtmgEdCkCgtj5iujJrLkHgy8eozFYx2mQzHP6r2gaGE2wq7b4BgTU7C2nyDNVE",
  "key41": "3SYReZyB5fsREA9PtrzJkLPwY6sk7rJQokMYNYzMmPY3WinKCnj4yS5jkGyQQ3CF1dbx1fbYJxJDWWiw2FuEXu4v",
  "key42": "25AtWJ7zR7CFWowsgFjznRUecYDMDT9hnWBuDQqRYAp5uzppfT5zshX2CrzDp1zbpq8DChzq5j1LYA3hSeTbZDVN",
  "key43": "3MFWnRj88gKNepp5KJppe7ZRRzwFia6BQ83tkXHGdbraqQgqXaHUVtXuja1xCRqoJToBMTPt7SN87RxPiHcY6V18",
  "key44": "2i2fLrFUvpQCxsF4QqCN2gTYPvA3qv95j9GZ7C8tZrhPVJHtacH3waAPi1HzYvQd8AJZfbh9xQt64yMA8BTYGBMj",
  "key45": "58rWBdK5AHncfN5E3MKk6NA6iWHny5BccdfXUy2XmkiN3D5jjdGhR5GZHdx3d67y3RzkkzjxhhxP4xBXpsC6TJ5N",
  "key46": "3Q1WTKrxVQFQDzaGs6VY1DJrqCjWxgsEaz6wGmHAnSQZS5t4N7Xqs2Jnz2geMJbshbTy5Lyarn5F8aVDNKPZV9yJ",
  "key47": "hNwMozDa59WqiYy8PHZ8h79BGPupo6bPZbG7CJdzAivjVeyHoRJAQXQRyaP66i6c9qVxDtdpXhwUDnQjBTgAk3h"
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

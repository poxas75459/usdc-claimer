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
    "4z2879zy36nCYYTnPvwto7CSGaeaF4CHftPb8KhoApJyd5iva3NiiPUqa39rDWFofQ99DEhshVD9eAcmcmViqcfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qhHDZi3P87wsdo3p2rv5S27syKguZfPT6T9XATaEVQ45hyjs9Zdj8ZQyFhx8rKcvCD1FggRjBS82wHPUe4VuGfu",
  "key1": "34w18T1e6cqdJErHRgAAecwvz1VD1NyoqtsQUM98HpVJBVbqG4kZ6Yvc7paG1WPExPQasSssbDLXkPD9szMAYbo1",
  "key2": "RgHVRRxTEiZKJYQzCZm71rKCjQjrrCGk9tffsJhVRcHPhsvnu8iBNriyJ3qeVKmcaRf2mDiBnKj9BQvBgSYHEWN",
  "key3": "KxLe99qSBZA47ri8yEM7oLNhmVRSjv6u6RAAzMTCXsDh13GcJ5135cxCzaq5zxMatx2wVWNaDSJKvE15Vi9op5S",
  "key4": "594t3cZhQUJDhi8RkpP3MSwnD8qRqoaMPpZqtMfpcfUu6py3kcA7xt4BPLL7yN1e1rfHYrUpdDmbvkKbeFDEhNJd",
  "key5": "4AboKanCh7rvnFjXetf54LZPuZNtLwKCcroDDZP2wDnDVFau6sZ6t8b5iupvQDDncSgK6WB5obpQzqLQtnFPqZk4",
  "key6": "oXXkCGw379jtiSCr9Ju6s4Dfhi2WeumPQsMwQB22wbtYjheb2gc2ko1RAeXov8aZv2WxwcGm7SA2YTvH2m9ijwH",
  "key7": "3E7NgVYdR8oazeTZvN8z8pKGCo1dhW66NoHRhP13ZFpVqW867SLh5Y4WzcCpSZj59cKjF5wnNKxpRWncpL5iFnbC",
  "key8": "3SNevhEZuJ5Ep7dMPE5gxSxUeqq5rwnDHmiuL3qBGMVvKhUKFxWDf6EeGbqAKq6HxtbFTubsh57cgr2MYV2MmmC3",
  "key9": "244Z7XZo5EnWPDU6v8ik7miZDhhjuGCfmeBFCp4gSU4aEpX9ZEiiRT8TVzsgUbUkGsEqJaQbvp8UXMweu63MEupc",
  "key10": "63kP6JA4rkJBmKnU4dNJjF8Zh5yFL7CV51cTroBoD96goQvWy7tFuTS4BztC1UsfFQkuJhrKJrBeoqeoAcprf5X6",
  "key11": "5kGsyX8BfhuKfn35avrBsWv2XPxcU1jZBwK86jRZgzaxR2kRVbZ1vAj4JJxgFCjzMx2yfjXjMg3iEyc4RYDZztkS",
  "key12": "3HD91oucZEGTcV3BfZCsmNeEdjTdmrZXEMeP9poBmPUoR4qCNETcAgrKgRQtUJ5cCHWiEjxytrusNuqM4UMTvpd1",
  "key13": "3na9fGnPCzUnwZWx6RioE4oWh7Cx8VnzjqZh7TZ94eK9nLy1US3HXrBMSpLC9RQGmR6HrxQRxYCJpc8astpwzx8A",
  "key14": "45AKm8mgS38UhWN5WjG1vyWi6PGgKFe8fmuKMY8ZqTde51zL1SwwVaDfbdnHdfHX91apzhUmWUMjR91EMjJyrEft",
  "key15": "3wJGDdm9T4DTN4bcmzWXsdvGVCmqZrhSZZb7uZY6bsS1m914vMzgvqkHjCFjDQhT2n1aejQahB15Vw9K6TF9GMHu",
  "key16": "3vGBjbowDTP6gPJhMRmh7BNNsAJP3nCjyjVHJ4FnSDX3DetYZknbptLqiCxAR71Lbzw36rm1YWWHHTQJVUNCvoaa",
  "key17": "2wdh5xYXZjBPcH7uTubvMQLyEgK5vJK7vPb8D4GraLoBw6bviVucB1omqmHNzvQFJaLmpiefUNESKH1STuREXUDX",
  "key18": "3EqMYHCiWvmv4xiPonEAaRTXy2UemWHvaFXRrVkFpFH7v8ZqYQ12zhZsvJntkUVEuRJ9LaRfQSwEJCGAqpzf2dMV",
  "key19": "5GE9fososHsdoHrAziLHP2RYe4VzExTp1SaTY3YHkTwQTg5srWLzPkBWVvsTwNdkhy73k6sTm6nHyDNFaHtqmtBE",
  "key20": "5N9sF6Sq86Yx71UAXptXnv9qrKDbbwcGzoFvDXrP6nkMR1Jbzqhv79DAmNEkfdPwn8XXzadVEfKhpGnSaPtt16nt",
  "key21": "5PXuGbMwiFTkF5bxHwDuWnyDcy3xdFwbtCYDGQ3aubC2ZLDC4xAA7gLpNFMYhkGX4EJGYHioYFL9Etn5jnTDd8x9",
  "key22": "5T6B24nzahC7amHiToPkaM2XcsZS6csMJXreg2uHPhmsBcRMyaFxEX4eYz4SXh6Z8gBA58CeFE9VVa4NLYYrUMK5",
  "key23": "3DSqYpVehyyMZ3Pt5pGy1EXCuqnJSHkCusG272xc1AcKu1DVfNUp8gDsvrKD46Hi6bMGYTERyA5yMewmA8cErkon",
  "key24": "Ayw2DtJbkhZEvhCqqb7sNw9rVE9o28z2fcPKKpjDPhyJ2wBmsh82TJKcQUiZFMvD38RTw7pPNaSLtgPiZFRjdMR",
  "key25": "5sA3nERwpnK6vgARZc29U1EsPpxhpFABADsPcCf4SQWyv1FbZyT2aEgQqhmXg2MSfUKQG1WGZqd2ZUkjSfbxALzZ",
  "key26": "4wowApGKk1YKL7DLdCdAWsTwDTzeWsUSkHZ8ybMjPGL4uLiQq1y9wYNSNPpQeFMsUsoWDuL1PjzN3Ykvfxz2Eh6m",
  "key27": "aufCnF2WT5HcCtm2Sces7G5C45Y82oSsaiB4KDLq49hyNR1f24vswhnij88BxjBVEjm6NG84GsZFQk1Cr1Y6Ddu",
  "key28": "52iX3wnxLrtXLEZojdBr2588L2swPRJTG6JmrKKHk1anAJRRJpfjJWD6b88PVWnCQmz3Vomk78cnhjVNzTge6qQ3",
  "key29": "2KM4chij59AcbcwC3NAwg423oDysqYh3NtT1ERXLHawixj1egSCHRccZykqyCzCEk6KzZj24zhaiBrfrC8qrwZXC",
  "key30": "5ornn2Sd396kAYBjCiZxMLdHDgQqsfsvfbvxWEtT5S6mKZC61pbBAuQhhrMLAfr1byCDV6fTDGm7g31tDFanptkR",
  "key31": "LJ1VRon4Bv2kqkyv8Hk6rsGRMTP7qdjTMNjqRXiXYQbwP5wCadnJKhQimFkfykFKfK492YmcnTCTCQaMsPhiJsP",
  "key32": "5by9u5UemCiEn44X4DBqr2KMHA6NUJT9w8FUFXwre5HQqDkXN7q2DauA48QgxduB1iWVvckK4ZVdZquUQtB5EnAm",
  "key33": "2t5v1WMhVeekpArT5P6TjhS6X2iZr6hGM7er4JxxzzjrYYnbd9khK2pNkM5fgn5hwMFCFqK29cN2xvokUN8s9JE1",
  "key34": "5zY2MpzYgodZFJN29BBhhvg2KtU5s8eT2iFqHyzvrKsWn99m2GMT3Hy4ztQDJTMwHfLRgVYxT3z5VqpDFpzWGnjb",
  "key35": "3Xcd8wyuYe1Atb7GHYeCPP5Kw8gr3QJ3dWK9QuSZWGoqimkvhev3EfWYSnrNhN7W8gQNrMFFL9GriQQRegNhNimw",
  "key36": "5hnZ1tiGzBMM59wU7oD2soc9JKTp3qqcCaa5dcJYY6oFzRAbpksDid3gfhjVLSc3QvSCULnJi6NXnp7rcHrSCa7G",
  "key37": "3KQugzMvHc6uJvqDG91jsdzKEBfYCoK5mpd5ougqGvvk94G74TR4v8F46u1sGrMAkZE6gLHhvmVv6dZhQoekHHnm",
  "key38": "2bn6Mvgj1s76QTUqfD8XS6A4qKoRSi5Z8jxs9C6CseSWH6rooxBjRvcBPwtNxomitV8odWZBFXuce8bcjvbU2xNf",
  "key39": "2bB2EtuGC24DhnhajvkbQtausQaaF8gusDaUnzg3pyGBGyUWAhTTW6vxmGnAZvtYKjdzo3eUKx1SezQ4iUivJtfe",
  "key40": "4tddG8e4WBa2LDUPyq1A5Ncdt7Ca643LX4kFAUbnruHFPRwqPcFbiStAeULoX6aQGgS6AdEMoF2mqCTQCY1NgE7F",
  "key41": "5wvpb3g8BDFCPRR914UyQKGrySPNa8uC8rM8oZzudXYcJhLxHCcUX5Qyet4iDijdNQcrZPVve7yTr5aVYXWiAccm",
  "key42": "3fdTTmfBBhWurLZvNM6ivSQ7bokfSshqCMaDrHz6FtctkUi75k9rNhVRY1DVoGLyybmduZihFj5RvDb1gWtMXn4K",
  "key43": "3AX1CtMyzSAxkjUd86exTCKWfQDu32RqRMJWiF9y8HxVNxLVCHb5ge3YUttbG6H6TwjyJDuJy6EryUBfEKBDtSDh",
  "key44": "2mUBPg8L7ByeTqkawTwGfJjyyxgMSdoK1jH5LDoWk4FSfhZPjidcEPpxzHtbPBmxHZBQKzSVQA851a3bPkXXGs7R",
  "key45": "5SnRwMbgSprA9svEKx199fEMLnmBLmgyk5258theJLhiSnPmZ5VQQhRjjkWDzxUR3MHJMvZDHAsHeLof2JnXRab2",
  "key46": "iyGdAjg1Xs5x6vZ8MGr42gM4QuJGaBnzWLiyryaeS8B1pA63JEysD6PqW6xehYuzNLs5JQXZXsfByuuoZsjiE79",
  "key47": "43QP7zSTcdhq2zdkD15GsxVy8ujX5kRtyUS9dEb7PcH4R38jQ4b9uh2FNpddmEJfaq2tgTjqfFBYzKRpNRhvbetp",
  "key48": "5k995rSo8sgBpN46rjWSGbwiFPwCqSx5VzbCZrWR6QD1yhBe4SY9DnHhNptVSaVWrJMmyUju3eazjmjnnJMQ5kGC"
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

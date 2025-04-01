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
    "5d5PERyrENoKN9Vs4aJZzV2uMgZy2f7vUFfgRDdKnockr9sMCujRBNEFGr8Ln1KnuH3g5WUGpSnsiNvxqacXcSyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WTViUZUuPd4xJbeDp48ngub4G7Qh9LZQWzQCGDGbWthKfqq77J2Nh1yumYkVE43AopSLpZjBB67Gyf3DSL1a8gj",
  "key1": "3ktNUYqr557vSBckkf1FytPe47HSGavqCJd9bMJy9nu1qgwnA3QrzZauumd217zW2UgDMZqS1gq2BikxE6vfrfmm",
  "key2": "3vSMHdBPqeKZf4dBPLR8Ns8jsokeT55sLwTrbDWV6DjMaCmyTMnYpsYBi5DFfWB5heNpk24JTzojtQhvsjUoeZyX",
  "key3": "47pCEPjQZU19WgZpPSi78h4RTAqTFRQkGK3AVCp1YnjUAVCs6gBYf3FURdvtT8RFg1UWCn6YiqVgbSTMUVDHtVgi",
  "key4": "2i2MEJSG3azXNYZzSqhxSuVhJD3vVTMytjuJHq34tz19mVcREgsEHB9xqZjELMy8FEgoNdRNS4SRtdUp9Q6Tf56S",
  "key5": "3LgK4vDXYQoA6YqskgqBe93jreq4MdLSYQN9d7W3LM7QoH58DDBhk1mADLa6J3wveEQFEoG9V9xVG4GKpC9KXtoV",
  "key6": "5VprpFmtrurt7coUmViW81o3BCupT6nDm17rw7ehhPhvXc3eTx4cNVNWTY8vHNadrFqkNEDCTzgMXmCMTtAXe5dV",
  "key7": "32r64jfbXjTn3HBkFQKsscqnQrsy738xuLM3Wy8VQKaTvN4xhJy7xevcwbUPWHhVTtBwzJVb1G3QN5BsPxDBAKha",
  "key8": "3XhKkGCFU5c9arirqEnFLWFenCn9HGhCmv2QTo6ZEQ6BrrZUkvMtb2ebb92iShnq5Hnre7uQbtWu5VuPaqYw67nk",
  "key9": "53o9DKxq5k3wzCadCAmNnJ8ihQDtD62qMUpNeN6cYWbiRJWj9bifNpvnD2cCMdBRAGEpRKRT5HKccADFDfrTSksn",
  "key10": "2RmbP7NhySyPbo3foqnkz98i758Adhwbw9YmN5m5X92h4AQtP8JztNoaVjHt2dHSYPHjpDFjoi1FUQEef5FFKwPz",
  "key11": "3zQhgbGG2AqLw7TcfJnAJSQB6mNrke2ncHKADMGgbyLHTuC7i4phGVrsMSF4DfLY3fc3uD6ZaAjkszsnbbPxh83f",
  "key12": "66cBUCqAwyzo7NrBMGQAz1ELrSQwKaSuG4JKZjnSkfrpFGwgbA7QpCPAhhJo92oruZ69owY9YxohJkAWdv16Wkff",
  "key13": "VoF7LVjA6hALeYtqoYwgRK2cJVhF1rB17TMEjSNzRuRRfY7BVHNzo4CJHq9nuPGueWx4xz7N8AvnSox95ZFbiAi",
  "key14": "5cVUj1tRKFXytAZQq7PdGkvSxmQaE1QK3n9Rr5jpb46ABa2fcUURPz8V5NCT5TnqhxdV32RrpVbEBSv3aeQRcWr4",
  "key15": "3RTNrK1fFAAp4NDjc8S1bBg25vFGEnPDpusrS9X3G9TX79a6EAernkL1RCMH6pv5EKjQ3zXgRjghstASJboXpqN1",
  "key16": "3RrB7Fmk9SMhcZ9CUrX9QqBBwP6yRJUR8Fde7bQ9Pzxwi8XnUVtKiRr8k7u42GKjvx9DXchTiBAxMGQzk2DafLWS",
  "key17": "3poQzxGffyFYePSUjqSZ5rbDwNjSz9msn2uSFemNTrvCf8rmKqg7iDvrKJp47u9U9rS8VQ8tZocoAtkXpuAeQs1w",
  "key18": "4QxgZQtjaLewhcnNsNpqu9MxeFsyuN71F25JhcGkKsrGgjXnS3BZyZUxTtxsv2Aga58jvGsSnpyMa6YpbgMLhefb",
  "key19": "4E65d9AinR5je3LMAQq5TUSx2Tapui1c159KnAp1UgXzfnj9HpHj35vKdFuouZ8qnmoK4VGAfYrqKNdpVh3TWGeo",
  "key20": "31Xfypg9wPXoRLidPyU7U34v6MeWS1XLcjXaKs3yPTxmhpmDHzd8hAG13fXbQkH2k1kcmWrnwcVB9ZT6YQx2jehH",
  "key21": "5USqxUT8tpWQyRRQPV21ukYXsEzX7ozQUDmtbAwoAhYWNKZxZAtX6NTFkEpaL8gQBJoqk5drxnLckB4XfGeXdu3a",
  "key22": "NHgpo8d5qaLKaXoMLzSneMezJRf5zRg5Be1yB2Ct98D5t2SHVTnCHRKc67pwkRrb22ycUwg2ds1vdKzhWMu5HeQ",
  "key23": "4kdVBnebP7uniLfi4tYhL1Gw3mcS1sA99brPbTt9cqjDjiL3oKYfyTRu3jrStFQq14DNtkdbSmMkrfA7Sn7PxRwU",
  "key24": "3pHjErPxUVPU9L5Ymd5abq9B2iqxMK1sxybu31SS9ZHcn5pAU22H3wtAyLeQDqi62fMDqT7rvbgJ3VmFVY1pwopC",
  "key25": "2DU2sNTCNCHMcastwgaumzbc91c1AB9LH19V3Vv7d5AF7KXptajd93kYfwNS567hkwSy9Ao67uyv91LbXyMgijSt",
  "key26": "5mNnvAgMtefUqHYTSy7QmfwbmfFMfmTgzLXntSEgHxxi4M4qpuUd4ScrL2kpZ5oMby2VH86VSNQMBcK5jo33AgSU",
  "key27": "3pTDy511EYpGTjKxki5Zig7BWnVVJUTQAvtWqjvKQ9EgMNPtX6LgDTgLKA3BFSeySbErmFfppmawuVCSxUcn3sQ5",
  "key28": "3ACgVtX4HuMu1vdbsV996Z2pmzPtSH2ySAB22AhTq75JS3RHsfTTmhd8K75pkakDpbX5WvBWV6Ck61Ufw6pxca9j",
  "key29": "23m666Dr5gLVAeoPxh8gwrkjWgWtEPYpEbAJgGovCvg56Vp272yjC9NdYTszzk2xh4BhC4oqHZCVXoCPYBfH2N22",
  "key30": "3mchvf8ThWbqWCX5N7v7XkpZmp4pEWMgkv4ZCFPXiq4CRvz3MDQ4AZVPFmYxEio83fR6uEBo2j22B3Y7WkiNZk94",
  "key31": "46SZPmSp2mVwuSd5mAjjGh3YSEDTyjn4WggjoGg4tNqeqkmvGT5DGEePbhTUgSLTpx7zz9DhwUfXanEdRAapxsdu",
  "key32": "2eqQv3BJaDeN3XCWuD8692ZLbeHMLdS4RXwDWGaSzmJyBpVHio7K68BAoyz6pLp7qFZMWzu8XeFAkFtSQPQD9eup",
  "key33": "3PFhGArmhFvej7pdEUv5Wg8EYrwdFvpZsiwkXgG1MaLM1DoDHB2vJfGKEapunZ1i4ZJUzwHfM6MFms373os4JqEj",
  "key34": "qerdMXUEnXQjsv7dV4wpcdaUeAEmttZZkkKLvQkEAG5qfuHqqzDWYUtDzTMbGUsqNzkSrWxcaSJYpzofVU7RPpe",
  "key35": "h4hmZ6npFZTfDtrD7sWwtZ9R9znbs33CYjHaVdCYLYssEhCixE5drNCNeqUeosMJBoDp2U1xUdEYeRxFLJCeYWZ",
  "key36": "2vW49WvBvQUVhriMnYn6QVoBAiYbBuhkAy8YGe9K3UFi9pVuipbuZpHrqp7Y8UqHV6i3LUS5tR3paGktQSibAqqe",
  "key37": "3g9PHejiJoVxgd52KBYapDKo3PxBpCYW1J54SdGXp3n24rTSze8uAnP9wdubFYHoreUREgLJLqtP7oEdhXC7HpZP",
  "key38": "3Dp5GbZrTb9i11xcZNymoWebLCRWvwjnfSMwYegTFdXop7Z322YmzxZDCZoJTsBdTq4dn8J3unhrbqrnaG9BPkTr",
  "key39": "2Z77atoFpz9oZEifx9r1gYHffvQHTRF28jC2P74nbH43Fjqdqh2hpHBSvvQDNc1eCC88xFWqvkEk9UEqXWshLVKU",
  "key40": "4nUFEjz9ANfsAzhPxQ4QvCWNHVQpdr7cFovaEo3FhYSxYyYt2MnyefZ9RYeCeG7uMhicjrvCqjXWdUhGQQMTVGwf",
  "key41": "3yQUgkrtyYDXLDc2c5fBoAGJPc622moPzti5GJ6W6JArfUNFGXdjRUZSDPD9gCqvoeaGg9oJnRmmyFc9zV5WAwHm",
  "key42": "sqCi5q4sytbyS6u4tcymMt1mRnsckfYDMhxSdrtWJu8D6RNmVVG12GjRJPdNRbvUooWeXkecwigtirSAyZgzDpb"
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

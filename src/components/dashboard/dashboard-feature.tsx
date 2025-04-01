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
    "2VJXSrkhWZY9cvXRCgN4atytbTivJsPJfrejhk8cWTr4DiDseHuKadsr35KKQxUDcfRo7yHBH47C1RxmS6GpqSj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XnUQrK3VUJNGww85pYRVvQf45VhbgA8RCREHprryuZLw9D5q1XJwbCPW4BR2TFyLRsdUUev9GaD9asT4DqzzmSh",
  "key1": "rL6XUgP5QRY81e1heEth9t2EhbTPSadLoZiQ8eDkwPdXLDU1Ttv9bgQqHb9raoop1CA887kVEvnYgb5ShcSKAfX",
  "key2": "55Rh7JWzVqcufmg9aYgAdJpumLgqaD1EkX4Df9rcnnFZiJMJJs9Ys8UMzjmY1iwKMii6e5LLNobafdrFkfUvmT7k",
  "key3": "2KKoKLeb6E3nrB7pTP8U8w493v1wnLCNDhutYr2daeoGGf6V6f2TJBfrpMuYjPY9eVFoFtRfFNpihpLaa6nPGeKG",
  "key4": "5tgDuGNw197EmsCst37dvsFJZPXEYjC3F142gGdfhQnu1EuxUHPQKNVwpd7361qQ9attitJRmGpqsrBk8wB5fGMN",
  "key5": "5LhPDya6xVrW98iADKeTHwTbSjfL1zpr3gD7prhwzpoZN5JJeDjXKKxSwY7k5fsknEyk4U5zjiwHAfuuwED5rMBJ",
  "key6": "XRPwTkpiG2a5pa9zLRdt61xjpq4NVG5GEtmUrB51MNTu6Nj5oDVy22aoUxooc2SDKBWhXNdC6NcFtGQxeHP4TLY",
  "key7": "M6ysC7LudqyUqbTx12rgVYvSJsa6NqSkK8vPAyTwwgL1nEyG9dg7hW1LiFPfunNuiTJtFJno5srXwL7TuvkUSjd",
  "key8": "3cHCwxvYNFmxNBdUs4efrvSuABY8ef34Wrf4cmGK4uxaw5f9uox1FkfQqZxYgzTnoauFwcLpEdSmp1TjGMcLV2aA",
  "key9": "5bmuaRP1YpwHcPLogEDqkDLDXgpo1taMPhfsS7TqgX3DXp2T9SaGT6nMmh4cZu2gtU8vXSp4YAy5pgToz6cergmj",
  "key10": "5Dadabd8KisKke6stLCgSP3eX7gTWk5XMBndCpAJknXg2NeEDf3heAPYYZbqbHSKmwZHnRBRncpPid7HiQaaPKkx",
  "key11": "epzT2KPiByvLsk6YHsim2HFsXqanQuGzUbzJYpd9vQr3bY8z4VJ9qpS4h9VZJD1itHBzGZKWioRbAH3EwwA6dwT",
  "key12": "iD1hNU7zJom6azvVWcLg8s8oG6dvW6h9SdNhDYgxp2su8cyarkpZ2RUKoCEZSm1mZt5yU8LojHZQfdHzqjnPntx",
  "key13": "3bJ6RodP8pVPUwUseh2LH55YyGjjwj7XQa9Zx6Fzi4NEc5vgu1qRH1ZS392YXt2R23jEPA2gL71o6bNcGrcSTkHP",
  "key14": "5v5o2M3twpQqF4B373puhnnTQ9Po7msobRDvDMyEcAYYiVkZPGsiCVeZ7D91232aeZntoJqk6pLUpVk53MLB3Rjb",
  "key15": "26yhFKG2taiQqcStFor8y8rGDZ4RGomJdTUUthwmYS7tPP5RhrRK3c2fJES9LLL5Uc16kmad5NpVsUaQzKCasniv",
  "key16": "pBYxDTzWVvvn1DAZiA4hEBUnEFq5v5ADbWAhy4gzQqMVboP1vLSDwRJxBsB2rcWcb3kFgq6XQr3KAwmVY8QHveV",
  "key17": "pReJ1c5MEdYMzivHSPskZs7Pa6uahx6zddycuZWm2utMyXmvDqkYjvwACM2eR64U3P1YKkZS4QVHTJ57uDmPnCi",
  "key18": "4AFUFHdZyHkTs74dgc5yAatvJfM1EoTQhLK2ePrV5mJ5dcYHwM3BjarcCjkhGY46iLiqnfxytxh8E4zeRTnTzqtS",
  "key19": "4VhHQZ8cyztPkrDQTvhtzXJCPvLC8nSAf26NLLq6LhD59iSw6K7cmnnTJBMLX5vSWiEhWNiZ3rdN3QNLg3AaAeCy",
  "key20": "54Cmj5vP4ttkLDQqrnjvXRXEYpDjXH2Go9JK1mQbAGaUruLVhm3yQ1NtD88xQo9MrSiXQRvGAB3d6txpwFLoMeCP",
  "key21": "2RhhJ4tXy6Vjr8Z76ZJSL6rxkuRVQryhwJgCZ7wwmNYSd7Ae7x89A6zpPxqXYEp1D7jNwCbjsa5VWnBnnFdN1yLj",
  "key22": "5dWAn6qb1vWrY9YpPLHGpTNveFvNoSEEvtWcic3WMX9DwrfswUvqzwNMtG1mkBMRJZzuurHmXWYmjdXifkZASEL2",
  "key23": "63dttMvDcg8XCK7yToTYYMxmYE3r7ZWUDPzDqZKjrWuQAyFRie2QpBtHTbPbQDfASHgCCwwVN6nygriQCTVqChEX",
  "key24": "61gZ77Miv5GTcnC965P3z3g7s3kVAajvjDdUK3cENzK6SpYSkQ8SUWtsrGKi45v8NXztbnzbc3qjjMU1rDcwprQu",
  "key25": "4SwTVrjwhqmES28LcgY7msw6qmtnTmntscDek7ZTHSRvwabRNa8m3R4AmBt2sYJpaqUbsQRYsGbbH1H75KnEfraL",
  "key26": "4VuuSUbZtLheXTBpdufK4478iKyEHH9v6ZGcSNJgS6HqnQ5qciVi75CQsbr3kPExcWaNtwhGddoEpUiNECZzCNdV",
  "key27": "3iYMejbwARp17fTu28KqStQvcd3SsguVMXoQKxHQQJjRvXdLAHnxAVxCyrJRYaffjw3t2CEQwWFSfJWtJz7cGuzd",
  "key28": "4CwsJnoaTDFo8z2sHPhj8Mj4NYJMwM44KfhMT9bwYJhQHSdw9fPFowsKFBZaWH8NALmCc64AjmanjjdpFHCoZcyW",
  "key29": "5fcg6iF2vXHYQBVGnddAZJxjbsvukCjDcBue6RG8bBRcLDZ4y8pUGGb1Zm5dp8i3kq5vw3dAXvgcXTx4tjWSXPk9",
  "key30": "311bA7HRXzkezdM6Ui7Wn7oDFq8FJztwAAwr63KAXK6PeXvMiSKgBnDkNvCBG86o9Y6g5HmoTFQkXWJQzrPVwXJG",
  "key31": "3nGP4x7JPnsN15W5KLBJiixFFnwxBHT1aovoLH32nzs5vrFmbiKomifQ42bfUDgZzzLx694uidEZJ7RjKDgCKknk",
  "key32": "5ZT65ZdeMKMAGeGMmFZW5HAhQKVMjQGqacpqKjcQoRxL5YDTFkhbAnpXTmVKkn5sAY827oTVrJaM3r4EBqmzQcKL",
  "key33": "22HyWM8g5Kjd7Umxk1Sqjz6MUuXKSi3WENKmWKQmJLpkt8A1MrTADdmEgnQfQZ3NqXLcCQdNiThkhHrjHtafsEuG",
  "key34": "5fwcMRwoxRXRkcCAMXnprGs8fd1rPgieZiQuP6zUAjQHYPpaFMLs3HzuwShz7N9TeyKmPAXjDfu9qg69vmAASAwh",
  "key35": "27apUNKzgzAYSHj5p5NrH5WZBs7XyBX3M4XFuwvVVzvgp1uLUXjaYj2RppEGB1DSc1WHAifLocszzFmPH7NfJTLL",
  "key36": "38zFSXBcftV7uZizQejMUD2Px1nk6Fb19gPu9nVhudQf8BGhn5TcTKAGRftYoz29mwqr5JvjEQhZkcBcBJjdXiJg",
  "key37": "2NRP4fgw2uK7sQE6L6V5ejd4mqTxBN2ZDHqVpo36KtyG1xm9d4iVwVo5jiCZboRwT8qYvsE4HeiidsHQcCqmpHGX",
  "key38": "4o6xNR9oXDcJLFVPuSJKbewEazwJx1ZeargbRJTY1dgGwQSBG3wkPseGJ5JvUcPRkRQJWFzpejoxbLgbyueJHcNA",
  "key39": "3acVnvg3bWeDW8y8icwXT2tz887vF2caEyTUwoSocXdfhSpFpp5PhP9UrcMBYjmuTFw6RzBrx5QYcHkka3JWK8ZC",
  "key40": "3YGWpat3Y58BpJRY35MxDLbD8LoSwAZCjYwSEQeSMvha5TY7AcN94q5Zx4XX2svo3SnkvwSPSTAveBZH7m6sWXcs",
  "key41": "4oM6kuQLoqRiM7VLAuMNX7WH7gwt4EPwW1TWJX8dYACJ7FDps1HWKSX5SpbYGLFK7Z31bMbpaKHr94FjW7G7BpaK",
  "key42": "64oTBK9Lg6VHhcAcYDvSkycWbd1m3b4ZZUaff4akALoqrxg12bcS1oVCPma7ZBfq7fs2b8E2nYEy7fLfgPxdwLpu",
  "key43": "rcrNUvVk4XLYBNfGH9jDQgYisAogD9mFUtSduWCVWJzEsCM1PhicUHMJZYQqBG7opZ2gdECY7PE81KGMjq8kmLM",
  "key44": "5LcxeB4jtmW3FhcyZVGMuhMwUszg4rnMW6VLXNYsVK3pvBCBowSctY7u4mdTxynsGDitdRPgZtAKeF3HkYJAoFko",
  "key45": "2AKtDSbxvChwhPKgieNxS91a3d37SsW2EJ3fP5hEWTdFayvDEs3buBuBqQbVfsh3owZKwhxbi1sVS3cyJYwLzvGV",
  "key46": "widfHHx5Gj7ddv4YhQ2RrHESTNrnZ416sL92vfCrPKqCBZibD6uMfjc8TPu4qZEjGw2Xu7nNBea7U2BSMi7AHBs",
  "key47": "4nZPiFydZLhuy5etUSNUQFwr2ouK6jVR8GK4wbxYQNCaVi6cBU7wzPfFhaBMARRT2pHHBUEs4jFqm6XpvNAZuDFT",
  "key48": "2gnWgccqhQUkYjG7wk91RY5SSyqMBACH51jpnDPJGcYMRVXGRoYCKTufr5WhJbUQJnV5jrkGS7y4fQ6v7MjNU5d3",
  "key49": "4SWRr14rVfiNTgtK4dd5kytyuQRRb4fPZgbTKPUQh3kBqi1snA9XWiJuarmRxc7adjV3RPfCgvFA549FYHp63vyr"
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

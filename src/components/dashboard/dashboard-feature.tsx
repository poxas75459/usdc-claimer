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
    "2Fv3A25fSeecFfE59CAz63rgf5tPTEpvUZFiTGW5osznL1dpVGmN9fdvzdo1hEvAkLzwfw2wyggReXAyfnTks3vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CBD4eXPGj8eNkSLP1oH9BfWcVBNTTvzaDxCzzauEvZJE3N2Dp2RQZHc6EW3pzxrd2FcFT4cNTquftRKu4Di4qyB",
  "key1": "2JasQNx9pvayY39jkBbA78JEkuGN4q2ZoA8jwnChssEJyEktDLpMyvjvQbMPFW4spjebRLppPmS6aoehgVZEUR2Z",
  "key2": "2xxfANyUEjypfJH5iUxFEbCJdkSokczKrqRRnKUU99gV6wjb1AE1omAe7i8xhV8ABAR8peQfpUUkQ5mU3ZYPfooM",
  "key3": "4msedSsMrviA4mzhcnmjosdY3NtoygCTxTjiLFNPUgGnEsj3Q8cXCjXe7WJWGQvqyyc4yPGY5FQRWv5ZkfuYkc7V",
  "key4": "3iDa2j8FS9o2kgxFiyW3XzFi5stTgTq7H484H6woqapGuAbHg4Ec5UcpRLWJRpVfHKLdmZEHvLf5QGjNczyDqvxR",
  "key5": "4RRfXNZ3CbLF7hoWBjP5NXQWUqPSmXUCrHSHQ5aV7YSe1Hp1hJxw1RAi3jANzChUMrwvZbKf46485GNPq9p7Muyp",
  "key6": "2F28tWrV1UZFVBTMsiBLdCdDgomUbqbTjiHh4W3frrA1ReZDDTHfHmfqEMUH7zovJixfiL37Ya4uiaREmUBmHgnw",
  "key7": "43A65rVUy3JR3JNoyR1LFXuyXkYn8TrNqVCwT4Yw5p4PQzN3xaAS7uEFefZNpvUyCLr3VvB98mhx7QmzsNT7HQLQ",
  "key8": "5hJ3e5sNxp3XMy4EMm9dMNLwkVnpY4NDXNoHMDc4WAx69r5hsgReKUc3RuSEK4mAGY816PLBZqZpQVae1S1HYVzp",
  "key9": "NH8hv4ZSCebrfBiiHWRpLZ68sLvG2fYgsfpd5Y6Sc2pcm8j5rNJg83e8UNbjdPVTkkkcoyL9DBXdSVNbMUmTS5A",
  "key10": "3C2QN8GwNj9hUCWKUs2ARn3nFjJKRTHij8AQyzCXYYgS7g9wHgeB3zA82jTyqdNZKUb3GKTnY75BmYuAfGfVUTi5",
  "key11": "5qCht4eGkMAp4agHnSVtQHcqTEonet2PKPJfn9c9phaXu1NN3v7NZRjXSyHXiTMNinsVTbRhZmYceYSq2TyN335e",
  "key12": "3DsY2vqB8GXnAcmVcwkh55541xKjAjqevjkiBo6ieVuQKx5dnoC9FhXX5U1PPp5ajXJta1F7JJGw51MoHgxkwYs9",
  "key13": "2hQusYkCGYZAxSKFHdpVZ7A5wjRdzzpMy8dGKPafH6AeZ4SFsuLG5mFaDref6zMTdsArsLFrrwgBder8BW6CtCxG",
  "key14": "Zd3zMJfZGC1HqZCWbS3pWGQtCYYsbhVrYGXWvXG3RzpPUjtoinHoXVGuw3G9gN9dMLQSSrtbbaLNtXr1hGGhAPf",
  "key15": "3bKmTL3MEiF1QcqYA2fJuzVNfyc8qkxxAFyKgstFcUizV6QTwTikFhEVM8BwNB9cBB2RurCjh3xeQ3hhLXvLv4Bg",
  "key16": "2obRZDxJTSxZPv6CZcrpaxf6ESxLzzsPKeUdV2Phkxyy42Cw4PB3GEoC92w2bvwe73FS5a1nSeHwD8Sx93ytwKBZ",
  "key17": "2HcGPnPfrCw58QxHJjj1t6i4AQHjKmzxzxAhkeCecJVmSWfog7mH88BXqhTJvYhvy36C8675isgR1ajmga7rGUaN",
  "key18": "5yK2DSg9meTzKBvdjK27y218pBYGNm7diHCM3bqdH2pYMmQjSCpWtz5YDhSvewquxJn7XhgwiPR93QAfPaadnqxK",
  "key19": "pgswTabgSxRmJMwYHE3856CGN8E2WjhWKrCp85uG7AipG7giYJFPaGm5vrtM8LKuRpEr1b2H38V3g6bftJvWnfn",
  "key20": "3pMMJ5PEAzpuRg37W5YTZi3wXkG5S1ZgYwjuyckA4M8mY84weNjqKSRWZf49utHiP63FpUsp4Aeqn6vnQvLbRYkW",
  "key21": "2nFAURQkuGywtDtYWdbWhLcS86Y9REoqknoBHKoLfeNt5SqrKmJcf8puw7kYC8FoLxi5WrazkShudKXbfiNJWbHj",
  "key22": "2JLRcwJ6A5UwvT3ZC9YY1eJmosS3tU1YDMBVhrFLRcRtVyv8N7buMydhfj8suyLAf8ayChBaeazMFKu8cW4UtTFc",
  "key23": "ChaYUuJ6wT5fw2jBm9rWk16AyehHBrSQt92Dq3vfa22BFCqf7VUdHmKH4xq1mGvnSeq8mGN2k84sPRw7ETCbYJY",
  "key24": "4G7ZQ3D3hq2czb97BSj4Pys6AVHFHWXv7bJRJD2vYj7BWb2rawYtQPzDDhbYCi85PuAWUaavzDJDcfcYPAAgg3hr",
  "key25": "3N6DbZsq6oBytcwohzS23q2cixU77PNuABroq1NufostPeHpktbtTRJjdvRcKDHA5bcb13SkWTz3pdUiAWCqt2vX",
  "key26": "kvM93mPn5kC7DrGMUVR1d7j1ctMvgtFaLwMCpUPo9fGHbLdAxN7Td6WDu6arA4ChE4RuL6MCFBEXy5ouLoPpxhK",
  "key27": "36Uz7UEQMxnpbog8UFx4SGMdBzXXgoDtW39KApV7m9r2tkM6ia7ar8pGbEcqZjLmgvMcuLYkvwrU994qnEAbwRzE",
  "key28": "3AzCwxEHg9GaqnD6XcArS2Jqu14T1Ys5Ak1DZLHroqC41Y6hEkJUZDzvdA9vEyB7WtVrbhKBhtCeyWWZ3E9zms1y",
  "key29": "4FgR3NaFXf2Qipvn4TK5qgm69cA5XgHzFat8akM3XYPiDLqEBLyVh7STED6kBEiGpcvV8ShdC91CB7HS7Jd6z8kf",
  "key30": "5aqiMPA4RXRG4kmcWGn5seqCi5AQhABnTbjkQWfpEMb3ntahVra5bRP6BR3ecguXPcUu416fDMg8tKRP2dMuezBf",
  "key31": "4DJoy4Pv7WiNecV4Y3s4ZcsNBejvL7C37AjhH1cgbLUBRdyWX8uLsRmxVmrrZ9a4TovWZ3ZNAtQbxWTxo9FxYRYS",
  "key32": "27rdMvLmRdjBX8qk8DXNpns6jwP5h7BsrK8FtMYy3ns3ZEBoSBgQqC8JVwKC1CyDgbUs1LYxNy8GG8iNCuRLKQxc",
  "key33": "4aCQUfnYFYyAarsCHEjQkuLYrWpwWC7PqGtbPCwJQTcyrb5aTejQnyVL3AJbQvWw1aL2PLsecNc2DaYSrM25ra38",
  "key34": "5CxSgiMLLNXUqQjE5TzhMtNZMH259bZvcwhhxUYkBYWHqTa5d5R4mDXMzQiTqhYQHnc6oBP8eKM5jp2pFduNAMnM",
  "key35": "21wdaFpDZKEPJKbnNPZfuZmL3qPkGZ9AzQmoRYQMCS2XFtnaNPgYywfpTCoPMVEM752tygfV7QFmVTKHMY4Kc3k9",
  "key36": "2AAuZAyCh81KC1woUgJgNe9vJ6wRB7P8dXG8ARZSU3mQ11Z68f4L4oW4W7xhK4K7LWQYHvkgsXWsqULFZfFfgrWF",
  "key37": "31DUDjK1fS6WCEiToessmNPN2LWprHBWBqfpFsq1tfcayJ6e9EGMsnybNNgJrJGXnRd1FffQfpxP8xaWQAGE8PJ4",
  "key38": "xQByuSCmCDVYrKk9rjyTwd1nob1dHrdcgr4wqLoKbQJ7zsnsEJUX8SkKqbmug3xWJCxVzcSQjNoN9wGfDTYhB7P",
  "key39": "4TqpmSpQKDuZ9xUwGgBGWvVmHbLCvUQSHbk6vmYsLXF8RNVaJZ4YSrQPqwPPungyr7z3xUVGC6PnEy5qKM32kAqa",
  "key40": "5oaq9Nrkaup7nnPa8zQR9231DSUWNqpoPDD7DDwz946GkduWNkZTF4RZygjfhPoqeqi68XUwKQiNvF3fHpx3Xu2g",
  "key41": "3VBkurdUNKAmhF9Rp1WJp23CLf1XCP2r2rMLuTEfkUZUC7EjhWk2gXGKpeBZUcBNPuAVexxyqbbwHyHAcnHjnWXw",
  "key42": "4aKxKfpEaVv2rorQjMiEMx7iVrob9aUpDREBKdnLgPc66hw5qHobZVW5nVJStTqfN1ATmiVLQE1PB7mwAqHwfDhD",
  "key43": "2cjLqfxkyByRfp34AvM635FSFq48A7myJY3ERTQdg8hBxDBtBH2BKuGrNwpZEAuTWCaGA5FcntVNDEKqoPd1CEMB",
  "key44": "3HXRcPWcoExktUZcDYCszCRQVSqw16pxoVJsZyL2QrdbRhBrxvU6KJWdsoYaWuMYvNv4GosiKrP3VxKVn8QrFyAz",
  "key45": "2zyRKsmVgtRcHqyszb9AgLe3wdZ88HaDTQomsz81qfcSy5hSSxEeLdNs6RjvLkyR1ipGihaR5hSDm2odXjiQbQne",
  "key46": "52TQjoGR8rMMx8EMMCqUz4QYyDzk9kch39JTjvae5BPKtLK4q1sYSAS8aW2kdneAnBZK3Wajz7FCEKUpbTP1eRCB",
  "key47": "5oyvsFfUHc5QDPpFfTdTtFKEGzS2yfE6HdAYLbPxWkTxAupCN2VoiUB9SZv9ZmgPz1o4NvyJVUT1LedKSY86TF2p",
  "key48": "3CVDGRGvE5GwfZTnvjNfjfJDCNYCfYgPKiDphMRNKd8ekAtU3u5oKLDRRF1sjQzyEbRZV5Wp47BKekCAGEQPmVWQ",
  "key49": "2c4wn8NWqSA1e1sapGYsWa1ZhMUeFNXJ2kXBcafPdy1tUxNBXL48NfmAM7U3rrQqNAxuoRRXqFxBPJTiZ6tBKPQd"
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

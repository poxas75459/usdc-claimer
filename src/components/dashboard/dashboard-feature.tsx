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
    "5duxkMjRvS4hgLq4NGzV3NR6J6SusHfLZZS7GAL7cRFScHDKEEmt9xk996gQLnMS69qzZvt71xcmZkm5wXLUDTUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GeQKX4VaUzSpJR4CrF83EZ1HFGaxWepvibrYy21goVGDaK98CpEzLujGB8hbkTX2iPrWs26JKH2phLzXHcguZyi",
  "key1": "2QEANnG4deuNpSHKFvW5x5zhxVTGw8Tpg5pwKiKc5oJGSi4MNon8Xmr2DrWkkbABQxkP1e9eazmYREbWeuwN95k",
  "key2": "5ybvV5d2wTS6tk9VZBfcyZdNAr9xcuUuF88nKpRFYSoX3zwhX2XhXKyU8zg7WmY7APLfiXhPgewfNxKAyRTYryf",
  "key3": "2tgwtcfnCq8tQbF7cunJuSrB1hL8ndBzua4mbyf3vawdM3DGCDJcTZBYnMCsdAdgqtSpYyeu8KYQtAW2WEJxe3fH",
  "key4": "4JQ4FomdEE81qgXAmiEi9KKd6K7ivZ3CBevxyUYkgSoZw61dQEzmwvFpvFt899UU8uW4CkVSzB6Emhgr78RtkEVE",
  "key5": "4FS2Sa8M1NNj3is3u991LLpmzKtgQWwkfwR4scYhDawDowBRaL6t7iuwJAEyUxxXxA3pqspEPchdBeoVA85U1QVK",
  "key6": "3WcPb7fwomwYdMdbRVrAo5WizhwPaZVM9q8ysRd8GmkhMGeQmhs9Ab3ZoRP26wKHdYehg9SXs3r3dtr8Z9itL1cB",
  "key7": "wfiA9vHk7HY75HqR6Aptfjg3VXzzCbcL8XW3TKwJcXQVxTp6sPx2hd6FHEe21WRUnNJCNhMcnGEuFXfjJFaR3RN",
  "key8": "3SoiG7Z6gZhnPLfyttDbmtBMHsD4gs1rdMWqSoCpofhg76znL9LUs7c4oTJcuXkhfK2DrJosrZ4aKEBVXNZhJfQv",
  "key9": "5sQJKd6Tx3yqQdkxZuS6DsXBJf8EUgQNNbH7QGF2TEBQ21oqNmeQyvaBegFypmYmH9sfujQVYUUwDZhQ45aNGUdc",
  "key10": "hJYfAq2U5CSSgtvNBYPW97eVPToFkXeZjigJGjVf9e7SidBqv7iA43bJ42cL7HuCEhPe1zGoTtDrkphRCqBQVSm",
  "key11": "3vwqV1dQJXs7MhxcXCqL8hTgXvw9WkD3XXifLaqPQHLLfuz89ve1D5gvwRrgrqQHJmQyP89dbA62DQTYvkH5ttVg",
  "key12": "3TGt6AJdD4bP3y825S5kNrdY9HZx9ZUm8iPnwwxt5rQH263Vd4kLbCwt6SVjg4NiqJSPLv79NWifPvB3M46VfmhY",
  "key13": "5j5RpZjJH28KECF1q9MtbkL1u3c4wESaipQJu2g4ZXRnh6ywje5egdev4MSpdKomeSJWLzTNdpLQe8Xs6cFKrmxP",
  "key14": "4KjoXWZ5CXj3wksLoUzRbvpwbVACoTDitVJw14RtRafHLj8pdCcx56qSDUxTvqg5vSjPaRGPS1SUEwC9oRZeNEoh",
  "key15": "4ADtKDDytP4zJwPbsACiQxsAyYRhCzV347VBtMn222Y39kECRQu9b2AtCfFPq9uNs4vfYxzgr84dZe7Mm3FCWLC7",
  "key16": "42Vb6mkBbbD9v2nHnrbCRQz9VQ3iAk5K5qAVRh52umBQQCsoXntqyfMMzmt4pF9oAXFsT6dDz4BfytPt8p72rdsx",
  "key17": "PjAoTxWjo5Do9iSELHUvwNJ8gPxxeT3dNVnjQSFyCthMZdtAqv9pZk9TNveg5yJmZWe2gpgwBNgZzWKiXNTieFA",
  "key18": "3w63FmZrmZznGDpB3MaS3XR7pang3Q2cF3NyucPmTgVNHQw8s4YFwJB8EGjtkUFPTH21HSGXkA4hC7Cc12Vif3or",
  "key19": "2YhGsKRk4diSAYecJeNi6PWKvfHHFxQakYz4cuSZhByrKLKWoGRd5Ni6QwmHKe5nS8f2k3M8RCmvBpVu8XkyQ58k",
  "key20": "5rwJttDAf8bMnZ7yk7PsK1nBsnf1sxm5mvYNtdxQ51hj3NBRG8uskFVyJbVYhszJpP1s9LMnbnfUSGFCR3wXRbJf",
  "key21": "3Ad8kfXT7gtbZW2KyRhgCV39HNFH6JC1vfUZZAF3TzoVoCKEqnWG64hai9gg3PeXwTKMeiiy2BR2YHveEsgHq16e",
  "key22": "3QoHtg5ehusePEhJgPHRQ2kHtkJLaQ5eyuakNDC7irBL9ZagqVtpf5EkzuVCCge2GJy5EhMZyGRfEjGnMadVuS2f",
  "key23": "ZhmypGvZFwDJQ7UXJjyymb1gDYXCE99nFcTgbMkhdDCKeZVPceYR24499bWiQJu7tYXB5ELcneAV4raVKAQ92fy",
  "key24": "5LUM89PdzRgx3ZiqneHEmzEHBZfDgaGU2xdPvNHwHF6Xs8WmviGCbuzAxrquFfPYnYwAHy8hRKaxRA6jytisf5ZS",
  "key25": "3hhRnxj77UJEbKXi5bv9yADAogrbGtkhSNZfZDdvcXLr8k6PzgdpgAvomKzNVcoNXoW6Ce9KCVuJgXQyn1QrdVUr",
  "key26": "MFM9FeCVXn6NxhictyHSxu3to9qtrM7BdjWba3KWEmNbSR2h3rUYQPE9jErJEFqEK34LLSdrU3KsBrZB5nqjWsq",
  "key27": "CAGF6CUerFuPBDVkgtLBK91Tk5go3m4Q6ss6xsNUgYVjZW7y4g4LimHM1YrtbTbJg73g3WXqjkbuKBGaNEQDVTG",
  "key28": "3DbB8snT1pMwAZH8RrHaYBwvynGqduzPCZZnVqaiXBE6cZmTxFfxmQk42zsNTz8Y7h1xNdoo2bSriaAa63RDXuDQ",
  "key29": "Qi2zw69BfVRoNR8VghwmvAKT1efphs81hTfhcdAHkVbJtZt93peCT172VceztR8Cix9fxvZHrfFSCdpR7dpnnJN",
  "key30": "3BMbsuGMmpntkFhhfKovBMbeRNFqkmKcytLNbDTndEyU73BtDsgSX9LqyTTwPsxh4Q3fYzELRgF7JTcjB7LDtcSK",
  "key31": "CPomoAu9GedzxvaoCU9iqHZfz2NzzCXFnPpgAi77fCGG8KmLhxohxvrfpABP546oPmdgdbixDQWWY3Mf5zzm9cY",
  "key32": "FJgnfUo4fsoa993c1RBRWHQfGoY3om7EFK7dDj3zjpVZT3CEXt1VjoMC8E5B7wCTkaLfD9WbfZ94UyNm2fhh1Xr",
  "key33": "2M7K4BT46C3kMVjwuR2Q31DDs3USwiGBPWwTuH52n5WAWyZ84E125d7qHFQK62ukaFDgrC8SQjvmSPPVLYiCD4fA",
  "key34": "LpjMPeC4AkenaiJPBMmQXRWcsXWBv1TNZkAJau8QxDxbgwANExVXnXF8wS1KPYuaPHK6CZbtJ994XtLjemHxKJM",
  "key35": "9HRwpXeRsEUarrLqBtTVjodRuHpYgSofAtYN3c5Xn4NfVnjEgVvUv3JuEmVbktA9Z3UDH6NEXvRHRetoRvVwMX4",
  "key36": "2ujdHEXUccie7EvNF3MnJ27n2BtgrVeHLv3VYx66kV5K961dTDBRnPzCnVNrU6oXauTyJqjphs5JcMBnPCczjpiX",
  "key37": "2E4sbsb4bzkgLS124Y3xE23qStFNhguU2RmNHjQwBz89ktaWn4bvgXM4KTc7zaw44yqXhcxfkYbSz2YqTLrhXxe6",
  "key38": "2PCzwaBTkJiLZ5iHy8Pp58oZRjW89yw2xi4r5qcwd7m1uayxFVzmUZC9U7JbubaTVxzCPBa8fgPPjziQRJRJ48mh",
  "key39": "3Dhh4f1uhitK8vrrfVwJRhURADzWFvp5fL27bxCt2Ss4h9n9h5Z3Bq9Le9WQp5nWo7zMPQwCReVqqjecwef9UXDB"
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

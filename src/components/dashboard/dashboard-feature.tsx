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
    "4rwP5CFnMRACJpGYJA6HKBKoVNio5TxoA9yteeNpD6HQQT1PXQk6jFsrEsekXCycvUV2nz2y85Roy2Rk1NLwFZwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29wTxaMi2j8VzPFHHFy4XPYqTL27vzLABjbMnuTW78iBCGAtsHgy1BBVvvmAiTj4urXgEyDeYuvLhNwXBtQ97mPP",
  "key1": "5UKyB3JnFarQMwJZrHU75AmADQJ3Tmke4RQ42jEhnm9M69kbhCMB74brCejSjChtqDd99Dz4vZ8Utb3EtKLE58xv",
  "key2": "7E5TCrzUiL4iTF4jjgWnc5Xtgru27VDBuV8iVvEsYdfSUpDY9Rhjx8NtDreynKPp8BEce6jQV711yojNKPHbhA4",
  "key3": "5mRk11PM2dSQTmxmxkM6Qa9a1fsPVgHYSSQxXhboNUnQh2gVd3XVrRycLzZc4wYK7Me74b25Koe8ap7FdMcha3aa",
  "key4": "4XaJAacsUn9T12xm7a5523LtasJVmf9txBNnRsS6k1LKn172LCqBvf1JVbxq7sNU2fm1uf4aPJ24BtpvsZeTpw8N",
  "key5": "3BVo7EqF1FefDjhFtEhFfzqDSjdCvytytweKEVA9p9Y8j6CoeLL5vTU7MAx3gjZYVv248pxekGyemouvTwZUbRxv",
  "key6": "5r3joz9cE6MAZPXACpxsUzbwvZVjrxEbxGPPfAcscveTq3wBhUcXGPm2YAX77DZaV38snXTvqr1FgS6tbFA6N4EE",
  "key7": "3Qr36VYLQUAv2vWcQadGdG2zG8TU9WFMDgk9BShgv1gEAh4t2t4tumzpZaNCYxWdW56ueGg9dUodz7WykzZ2qhqo",
  "key8": "57c33JMqgaWaWa8ZJqzdHXdKZqr8ZURjnkxXzCiTnz7vB8cgW45v4qCne5ZHWPxdxcuGTvxf9WdWFSV1UHoEV3w2",
  "key9": "GQrA5ufDwzyJDmWH9TarGJ2HgFLpodpKdd6aQ5RKVDqPrvPvTX7zdLHcVZ4TrQSvs3DqgKHcx4Wc8cFe1JtzGh3",
  "key10": "286evg4CXypR6zq76USodDc4nU1w3sDaZRJuWyeCKnvc3WoTehV7o9kBLy9BUykwoytZFpA5svpwPWY1JWVvS3cD",
  "key11": "3sAGHD9dfqHP9CUU8JpYj8XF1PQz3QcVgmq2MzencdfJVG1SPfc4LQmpgTFqKJcBzM8pzpMXr3D2VR5H42gbMhGi",
  "key12": "tr75Go44k6YQuBgRk5eChpD32pCZi8WCn3XU1sMAd3MGF374vgXQpaGknqssg1h6ccfYRYkhcMYcJmYAEVfLGin",
  "key13": "g5EKmx1kdFEj4MBj1NJTv3a8dfuoZUng5kggLzsQKTnXKj9te2HmMmmVsCPZD888tuy8GMDUcfkXT5V5CczeTqU",
  "key14": "3paYkDU4gaRMT7nC6KGXPrcnP93WzWXehxSongB9z3JPCQv4hmGD8uNncCTYuYVFRtmm9vUDuD9LkU2nSfCcQ2yv",
  "key15": "5i7KTtfoXmRqkamcfQ5uwSqPC8ZsNZmrogTYRnFrfWmanWroWHu8iD6L9x4oeP76geLJSeVoK8LJVAoAN8GbiwcE",
  "key16": "4Quq4pZsY6PeUy8sPcd8bZcBeVoeQU8oByYxwHEQurC5HhXYqpCcQTcF41eouR5fFCi7V9KsSDSCxaY6qXALf5F2",
  "key17": "5718fztfp3DaCHY1Jje8C8BPYubfgF3Pya7HtS77RedVVU99wfPg4NGPdpsSL9NwM3CQCZNwrMdDgkKA1M6wiub5",
  "key18": "3QmdZQmJbWc1bPhgAxTzJH6D29XhQW41Vsd8N45papqzKxqwUHJzuAjSafdH8kc9AAdjgMXNh3dShR5fXwKL4wke",
  "key19": "zyU3NKJqCM5pJ8VbEnZmbDo3E8bZSjm4M8mdgjkuuCYTdJEkmvoNtCvFMSvV5pWQkoTvALHK9ZFUwBLkm4jTWnp",
  "key20": "p2cpkyDEj3tcqYqYLgjmL8gn9ccyBnRcTiar2ScJyG1MUPiyuBL6V9iYdwKeTgbgr5fRvvRKjVrDb75LoNHmFzS",
  "key21": "51P6sudFaWRZHs3wHKbLAoJW7dxRpjWudWkRprMEUd25fbDyCf8hDx1sbfVWoy9GQikSYEj3rnFVyMdtXS59ykha",
  "key22": "5DLftL8sCRzrMeez6LK49mdm2pxx5NfynbA2i41XEzw5MGb56z7u5JJ6fxCn2kgYGUGQA6xhhN8LWXM93NEm4Tsu",
  "key23": "5aSRUcZQ2MymPZjSc1jZEjBps1b7jhuB2Gf8UXpzMrkzr2rJNW87MJsnubgaEgRT3aHvyGNEfDohtYUSSjvAmMYq",
  "key24": "5ePP285Havd45AxSfsEegUGzXFgF9DSeYs97ek3j71RcbeSBMhaXLboxe7ruUfn5DK7G6bY1Q9M8abT3opQ17K51",
  "key25": "2hNMnMfc7pYa1uebixGqYAoutaHoJcd7y8kgatqESDLLo82XTKh1eLQXHTwVt8sj9ezzME6TxXDEs4NUVPE69HLR",
  "key26": "39ADPLPrcevJiGDzUovivpRobRNbkjNh36GVN9TcgEox7fVPtm3ZmcfyLbeQe77y6WStaU2fLYPhN5bCf65Vkbg2",
  "key27": "3GSt6tpn8Z28NuHAGnwqhtMcR98ifCBdFPcRaFnLDYSnppkdbZ8LRr6a8AVAo2VSS8YHsk5DkPD3wJxVFM7GAqq1",
  "key28": "313NT5y7LL8gbEit6Q9V2AP3bENN65J8ZJ8dQo53UFhBg5QEDVfhaC1tt7bybtFpUK5Ywa29VxaViPifZytCvzsC",
  "key29": "FfP57JG29poQexRkchrt3tGvTi8Acskxaqju9XNE7mwWTFcT9xJhsqUWKZiaWX4MsqFM35BG49JQyGVQwhouERm",
  "key30": "3R312mqJ8UHvizh6a95sdUe1SM33a6UYq1kTneQPV767DrD8y5Tuobj49gyTqk3q4xSawaje6ZaXpbzU4Mf4MWmn",
  "key31": "v3R4BdrNzm3bXd85zWGDS3UaVBe1B4YdgYKw4nz3GDpmHHPebAUcgGFTvB9YFNZ35JAQEMH71KubP5yakXHmmdi",
  "key32": "4f3DRgiSGAvbzKVzpKTNmMLNQsHztDna5oZ7o1iw9vaweX7PNQk2a13YGdHFrvkNt14HeW7G5VJeLVq3zXxfekvJ",
  "key33": "qqvFTdB26qCi2Gb4zG7u6XE4di8s4nHq7VegHnNHv7Y1c3bArToZXFT4XjkgwFhehRTNtpu5DfazSJ5fukkq6TK",
  "key34": "4Q7Nww9R4tB8XaAat8Up9N7rATcvhnEPpC5APdgMmAtN61i1Z6MfSs4uEgUTJhG55n7ZWqMDQb1cmYj4YvzHLEQr",
  "key35": "65UzAMoUSkS6CHReAgak3j43v4V4FcAos9siwitbJnDFXQF9FzAFELz7pWCLdMACQ1NACTzJVz88aSWBy6UR4cSp",
  "key36": "2M6mnPvyerzQ1uamRAd317EXdtA56h3sg2ZuNiaJyJPjB2qvB9PmEA54oenbmbtP1u2JWC7iXd9WEbr87PDVV1aA",
  "key37": "5hF9ft3iT9ySb3QVAREzLNVBapACRNFtcQsqUECaJEKVyHLvNEYpFMot9hfe8NBULTXHXUn18eofUkYUymnzmjtC",
  "key38": "3Edhhwr3Us5DgypdBMu7eKKq6bJ1TGrch1cShQXv9DxBN9NyAqcoLhV2feX2Sj9Kgh61HzojR3R1MwydCE5DnSez"
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

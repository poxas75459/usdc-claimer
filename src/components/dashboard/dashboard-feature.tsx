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
    "boQyTw9P5ohxGKh2WrLFzgkBkGcHT4aYUzDx44yvKaQDSdbyjnhidWZKjB2UwH4xjd27nADdThJAFqrZgp3vdXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EjmvNumTe8SRQkXUzuXHTL1yEXVWkgefrNsko8TJ5Cp9kxVA1uofA1PiDS2yMoaKEBeAn7wKLDdWg11iJTXs8yh",
  "key1": "3NQU4jFZpmih7UtEokBds7MjW72JxwTSyUgSApCCmHnbXcWttdWCcbNw6CvoTnpx5ztH2eQ9AQhuiJBoEs78UtcY",
  "key2": "4PZtcrxBrFmBB5ppgcmxA2sWTXBC5bKQ9u5QRdLa6CWwbUEHhDPeZaGuVMzWfBQ7XSmzyd6wUhydSj4bG9YiYzQS",
  "key3": "2Wqccwsfg5EAcm1h1wnPmvfjwxaAC6k8CqVaxUt1FV2qqksnsGkui2W6RuqiqjY8hQ7heKb4H7eJYLHg9ce87nGh",
  "key4": "3wt1d3VUXNwCUfvsttpN6CDWGRn1JqrF1kBw5P96t2XggYpszngz2tchC97N56xrLFzB4aTsfTacJ9jHaNqhWbgn",
  "key5": "4bZeamceCAMHyGbKWiq4ScUuFbZGcTyz55LgS3UuhwobmPKdZN7BTQfENYBETrLjSyzZJoBuYJuR71p8FRzT1dwE",
  "key6": "RzHdWn4WiTou7yZB8ZkNBpmDx9AciF6HqgqBsiKmK6oHVtJhRfKXxjEZy2MjMr1MUuUVLTSfFRtkB8nh8DehnaE",
  "key7": "4hzAoSpxP5378a4R4UCfi9t5pEuaLPMxGBs7kAARfUbRpYTaE6buJKUfhngpQBSGQzAgZ7B6R2KTVhrkxp13Uubp",
  "key8": "jLtQkUjASy2uWmh4FxhaisY1AbfLYw1YeTTU34Agx6gmziUc8opo2Cjjsdh4FhugbAHxzSXjdHWRBotTuvab4GH",
  "key9": "4kfEJAuvU3wUqEYH5AUWPp18zwi8NcnpFFwdVjGx6t5DxMNdPCyJSywoTSuuctQif56zvpuraLtGUUrPMzq61287",
  "key10": "2iZrCNKpXHcHFKadC9pkDH5MXv5E1x3bpjPJ77YAJnN1PJQjs7SrrWbqA3iRPXFEzeLT6NpKLU7mEnUpGDagUaKD",
  "key11": "4Ngdxgj6Rdi6Hf5vFMrryENoHQTzx75xVVzQiaSzxkixob97yu6Y7B1ZNkjxbkvmezM9Pi3H5j3KH3EH31izJBBA",
  "key12": "4dagC67rSYNmwQ8dHk9zRp34EX2jf1ryDx5vp3bwp383KBtQm6jfdEyVLPbkmuCE22seLVJ1bMSJFLPANRJGbz6J",
  "key13": "4QZecdS9KGDvgDiMQfj3CmN5E6zMtCbajyubVRrH4uh44zziZQaEboRSBfqcQYaK9J6TgkZPfUGs4ThPj2tAb79z",
  "key14": "1fjyCouxGNLmbNhz3h15WrnS6XD2TUtaqd5UxTo5AqQvCe5BYNQKvHyzNbcm7UUdZaAJWLu2R6Bz5BBi1gTAeBZ",
  "key15": "2Q7XHk7oaeD4xMH8Gpb6aeqhyVQbN9cRDPGar3tCitz4vdaKjWaEQQWm7hCRFPZp6hh3GqCy8nJhmidmxDuN38rS",
  "key16": "9qqP9obuSMjzDmF8FBvPDdh7UqSpb1379g2X9ER9Yxk1jnLrT9UVxKM6u35ckrNhYGsebuMJ5hnc6RWdWErWiS7",
  "key17": "5LSnkqethMv8uU1oH2qUGvCg7BrRnHBCkpXzB27sE3Q1rqGVLFoueM8HNLyogqBqSufurqAmgWMJ16Zq9k3sjQ1E",
  "key18": "nw7gyuk6jEbbJNbzCXWULms8jCpqiVMUS51n9sKSFoPaQPG3EZaHC7jQccZHsPugpmRCRiLrpXpesaLy1bpDHY7",
  "key19": "3QHRoYdrwagT4ayegVSwAApds5sJrC1sE5yrCXaDztGdEbr4M39dyy9pBfRHoJuqBDfSdwCCJXvSspf6DPUjcjst",
  "key20": "Z2stpBMzUu8MfREbSRnWrcf8A381v3MRpDgLD2m342SQ27dndCRHziwsot7fJ5Yx1HFsEQa79JYqVchdfYkWmYf",
  "key21": "3rxiwVCJ63LsGG7B9mhJVBozbyN8p7TbpMb6K99rrNpcYqrU21dPgnTdhQgDdTyDSaXr1tRhujsSCcyfdj7CsNyX",
  "key22": "5dn9DvmaRqwkVhdgLDo7tSrdiuXQeo3H8azpd1WUB8eMyeHPYyF3sY1qxHGh9n1bLiQpL9g4VmbFmLbWQZLSRfXW",
  "key23": "2uLcGAMf8AbH9rpnKMFGSiatEv5jUnU2ktoKMDQdZVRa43kZmArpRpSwrkZrVs7gLgZ6uyfM6BAxiq4JymSorJ9t",
  "key24": "3PizM4z9ReJS2efR1adPNk1mJ6WdoPEttLMaUNBPa8PkxAnrthgauNP8wVwEVUo8E6xCsCgi5v99i4hBAGt6uc79",
  "key25": "2WUdq4h8cb7qi5Vqg2pxU6EfZZr5f8saNcBLz6aHpRbAqYQ8KQoQWAyTkvvQ6ATioEUQ4A3HeqZ8NKEHeZeQrCzi",
  "key26": "4NyHqoD7WmUEeW7Hxz8naYmpMnB1QP4p74SmcZicqz1oSvSBi5fNapcbe1uAQpfY2wws5Djs47HiqjwCtyFknqgE",
  "key27": "5zdmTJAumW3D3QVods4DUtjzMvz661NQ3BuqgmcBJ4YjoikjtFGELYfqR8uaPEdv5Tn8ixLJefHcXwpvL4Tmkm7i",
  "key28": "4tHaDYkF4gb3Mey5wkFCz3EaMo9hxmoqazTCe4w3QJdVQ8iC682DLNWdWt2oh8MKGvqxh4yVSt8JjytnGP4EoZxc",
  "key29": "qreHa294Y4ZFnD2i3sivRTs4jo7x8s1cBxizuLEVY9bcjU8A4yiFBDikFv7A4WtdveWga1EfKUGXFNvUiQR68qJ",
  "key30": "2zQCMta48xX9zQShnQWU6KgBUkvqrGJgmC9UxhwRbScq2yAF2qiMXCn47bFTUwj6RUKGsfChMxCTHMAMwvk6apVS",
  "key31": "4jst6TapXYRoveMyh8x6hE5eBESTnpJGdsNDGJe7ifSj827C8pzntbkVizVa5PhCqfGouKWVbM3PccKEfbiNKQkQ",
  "key32": "2uXE6J71X9fUzPBkUNmaFj9yDKmNBdPHHwgYksuHzPicYR9wajQvtSmTZ4ft6VhdRBFGojjZYTWoxj8wCk2JLmS9",
  "key33": "3j4DZE3DZWpxzgWy9Kpdp8LYAJcgYQWABSdsuVJPecoaaMNn6ESQvkjozYBLaF5BGVUhG6ofbo3xytyZSonSjC25",
  "key34": "3ZqziqSoS1NUGmzcMijNp6Yqss27idWmqXkhcKpX7dmohW8D9fJw9PXq3wnkGWV8CbYDZBZQE8oxZ2yC9fL8Mkxz",
  "key35": "23xU16QTXQLndCshVuQdZzERXKEydPXiaYSeRWXjoGMg6K2ToKe6y8vaV18DUuLeQZWggdnmJZBwrEeBBEHhhbxk",
  "key36": "3srXT7YHAJDBmDCFhVe5AKWtPF9i8TPLoTVJWNeY1bALheVAZwK6LXtaBKXKmFzLx8axtsz22Kz6DSJHvHMdVEyV",
  "key37": "63dmWNw5FwsVrAFv7cbD3bvxhrfbLbW4QHLYDNRFNwUCEWfr7VMFURmDTADAoMDHQhmJ7A3tzk82sCysZw1ePEbq",
  "key38": "66pzMqP6cp5aGa6ExUYdU5p1GWSqiG3Ax797Z7N8WZoCz3XRi9Sssx5wJnkvbogXfXHWpvcs5hrU9Dq9aSoGDiJP",
  "key39": "2JWqmrSXXiB9pJTuT9A3TKUAM1Yr7eQkKBiDCfKrucodvhyrbSDVqBpx6iQ6MdYgb6UamRo84SvvQzuF5zhx2SPL",
  "key40": "5B9RC4cFyRD7oPH7wA39QzXwZiQZBKwToDKsdVKsuFUfqtaM1PS9MzPH3Fxd768E3MdK77WjD1Cb2QyENpjLSSbR",
  "key41": "319QgerBSzT6jQnb9CDkH9NA2RYKxc4cPMBbBKjh4crDDTHd77A28LasHSHaw7QUc98UqmAfEwaJD84Uq8YPtcv5",
  "key42": "2MYt2Kxvk4UYugdHHnvJXiRLxQZVTheShgqUaTLwmKWyhsTvUnhDd2VC3d6atPkybscb2hgJ35yEgkAQHecG8QpE",
  "key43": "4b5m8WDNwuDBCCr5rPZ7EhqR1bUMRFcDY9yENYm5HN6kyiLc76imM38PumGMa8CMwPMiZN58EfYeVwdaUa3CyMaQ"
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

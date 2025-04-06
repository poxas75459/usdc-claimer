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
    "25eAL5SxdeVnzQt4owsdXs3Gt7xGBNiqWma2BVVqkq7GMYvGHTeg2YP8BUCmwdMsSSTbmhuvXs69scnGAh58JcL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XzNngZd49qwoQNG6Tm7b5mj6brP1szhrh13w4LWn1EpzzUygWEQSPPAngLSTvCmfHQ4uPryGaULM2nAYAVtSStN",
  "key1": "3g9jM8Sy337QWrEr96v96zMtrUz1qJ3CRpyrdtrQGLHPvZQdi7pWpLWVpR4ot9ramWNSWaYAn4C47z8d6rLdUzXf",
  "key2": "vqhumsJw74BAaYt5wELPA5mSpEAozrtDvjy35S9KyW3NXQUmLKJ4S5sVmGmhJsfYSCQRj8YM7hRzDixuWYZPd6s",
  "key3": "2qnLS5GE8t23LWS8yWPMaJ2p5vnve8jJSxCjAGp8JFJ1Re5oQYe5qShg22gDxB2yU1qhVdnFXLN2pNt2XSARxrjZ",
  "key4": "33kbC4vTPAYJEyBCUsmQFsjceDnz3A5JtUnQNYdKSAUqEcDir4HVQ3HQwuCdE9FZz8zQG8RvUD4yG6vKP7itChqW",
  "key5": "2hGi5wsb8jtVdbSAyy6qfEbkq44hRPGmAbAHF9VttMNkzmZnvapzKyMHXtMd7WdAyKSbZG7tU4mRXJpTJKCR88go",
  "key6": "5Mfo49SvMH1iQwLpwWUyZA5GzSG3MJFaUdarhqk7r9YxTgT4JGy5SrLR8c7ZhTQ1U4ZpH2vVC8YVSwtC1jUkHNLy",
  "key7": "2p62mPvUH9LGsn8UDm2GDkvjohPA7NtVCeLia8e6FY4b9j6PA9BqBNLpH7anE8KvvSmgWfwtDPSv3anqbNecyt8Z",
  "key8": "4n3ZCcAenoc5JffxbTRLo7gC3S6WFa3PMZakrCuYh3ovH1n5JHua8FSPQ4fz4T8tkaPK8YmvzfzNL1VqoSy172dd",
  "key9": "3hooRABLqgc4qA7FCHbzdRGP7vxmPYLPqWNCqqi8kaVh4VV2BJz6fsAXWmok8JUj7dethu55jVQ7QeRs8P6Cn7PE",
  "key10": "umiCD3e15dLVdJevZTEw6R8CQAAqTwJP2SzE1TfS1bqTUVpTbsrL8wUmbRwwmCCyVdihKqvCkgyR1hLRKKZeybc",
  "key11": "ma6EzgPnkezg1dNeDcHxua2bqjucCMvbBf5YR5kbD8DfxeN1LFQ38ch8YyTNeFEC7TPRDQmk1zX7Ha7kNQR3pKp",
  "key12": "3XLGoVyaSGS4YgmitBdDipeXnpvq4vD8wJAJVY4s2MePM5qzwTuAKS5RDeexJm9QL5hCBgrxNr7RXfEgmZBAj1qM",
  "key13": "655EuWr9BSCJHGC8SyRKYSTBSTtMRiYGLUVo9GFspuxXiCwnTBG86rZSGBN2qvwuV1N1vm7J1KBweWUB7sD1wiGK",
  "key14": "5gn3c5aSnW3WrG9CrMSiZRxhjstKJTJoPvbCkqqufbxXti2Lpv4DfB3NgHT9Hey2foqqLtgibW2jah3KHZ6ni8w8",
  "key15": "4YH17nXJnsqETuy8Lf6kJPiLpCRcoRiammbVppftSzf2tASXphWeKqR6hhqTu3uKu8rN3WdHi9ALFxMymzvx3WJK",
  "key16": "5b1FwkPuwE1FVvH9DErcAM7v6Dn5SCe694MK5ydCkh9bFw8FoXS1e3E44FAzGybJAZ5KMafnke4kz2CrToePoi9N",
  "key17": "2MD7Gs4pxCEFnQuf1JkNNFR9AqQrskxHJ5yESvAW5bdfcySbtA44ibMeaw9u1TieXjEddDkuXXXGAgpt1uD7V99u",
  "key18": "9iYeiWBDdfCwf58TcLdj55EV2t2PPcLTwBkML4u1Y8HpkRbyY8avs8S6zCMwytmwtKpiFAASGyjZ271eTjsfw25",
  "key19": "2corf29auBbEkp3DTqVDhBDP55kPx93464HVcge9J5Zm9h1XUSpwZQDiDQJiWA3SKoHJvHq5ZHVSbTyZhEaYPoM9",
  "key20": "52SS3PSBhLNsorM69q8Df9gBUNDmzGd4kJvhAqWRQQCoR4b3p2WVhPDYzHJuK8f77x7cEYKKMYzwoRLtTV3syqfg",
  "key21": "3SUKvqAM2ZMdHva3DShjgjnjSoPZ6wPsVmSew2a5EY8bfQrG3b19wBaX2ioNTkwTQkAcS34g2gdtbTNzW6a27QG8",
  "key22": "4ePhVTvMFoRjBM1XFsftnfn7pa69hYX81eACa859D3uUauzhhkKTRG9oSqqZxLkhLWhZyckwJDBTEAGHWU2trvwY",
  "key23": "5F71Kf32SQ9JLZkqyHHzsEFWhF9wADS4n9iF5MWYzqYt5TFJGVshRfG2PXNQE237QPZBfQtpmtifeWTiN1gYEGP7",
  "key24": "xKk2fWgWGa6xRhVqhRUapZohHuS8Z6cpJDf9b1xph2qkW1bEA1XQXfH9MAvVmmcVTJU98E35TkcRq51RLvgjyNG",
  "key25": "hmxC1fZK8D3bR7g3AFfNXS6VdwYLombvAcmDjYXTHMyKnXdDTZ9oGU6rZXXZYWFdn8Enf9TtCnB9QFGR9U8hEvM",
  "key26": "kAswLVwRxAT8Ctddsph6g8UHFJfNEExVM4ZLDZDVY2ffDpKi5kvYCqnJ4d2prJVvpZFiKF7UuFhd6Hw98BE7Wtj",
  "key27": "2Ywge9sBSNhvkgnkHcWVwqNHBATe8wVnXHqjUorXXP1gR77q7F1k9kCFT5NpRVt3s8M3D4yZgPEhdkuh5ScMFmNN",
  "key28": "2usdvthYiQBnuudTD21xecECY2qHJTRGps9Y6EZMiUJpmBBmjoeJo5XqCLq9S95LV3TgLGiupxmokB5HWT3HPbch",
  "key29": "36V7CzYDfPRy5S53SQipqDxVA7As76d7XKh2ugZymUWCqWLiEHE7oke2dajGvUG7KUcTg4x4qZhLBJMhTkmqop76",
  "key30": "qsEVt8aMy8xojMNy4sLcFewbE1KGX8JiKbuRwvDQfP7nMYzFgaqkSEs5dKKQfY9q2nQ8p9xYwK7YzWU21ocZ89r",
  "key31": "3zXy4jfLRYa3S8pVfHJnXt24i25mQt9YY62XL4pJRPwrEd3VSwRDYNApNBTyTmK2sN6UDXjpoFEawvVmobciAAh7",
  "key32": "4hHd438Lk7uozohTVGuB1PACg1JA6HP43PqxHLMwGUp9iGHwLYnpeK5JuNkREopvZgHerSfUp9Pa66xPiXp8fFQV",
  "key33": "2RQduqWX5NWEyFaEBmSV7mS4Z6uCCdopXgMBY25R8rLPSF4F7MnV1noCEECtGDCkY4vYMB8fFRhWtpha8ipdePn9",
  "key34": "5nYu19GBFoGUJhSizgV9AyEVSQUdQy6Jr74z1iv69t4a5LPcLvKShBpqNfhB4xKzDRiSrTdCMiZb6X3Pu6YhMu3S",
  "key35": "4GDdZGSMBZdkcN3dHTHsTgPsf4cdE96e5EDynd6z2cK86wdJqXAw8ai73ikQBirMv9GPtX336c5KaRaLQbbjY9mj"
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

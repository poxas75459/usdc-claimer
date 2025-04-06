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
    "3kZAKyV2xwvwaFR4gBLNm4cPVfwmkZRgJUhFvKs1xttkFmrANxXiy9LNp1wumFu4k6uXaDd46Gj8GDNGtSWKreCV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BHwgt15jKw6X6TRy7bTLNxtnVDnSofbBBYstB2oBVwx4d7hkGyLvp4qG1wQMvyB55GWTwTQpt6bQW8gCtRe3NES",
  "key1": "3qvDFza3C3Gjkyyxy5iRjyvvWUq1C1PW21RBCaDjoTmLqbAyfUsbv1unBfoPar4L5q7re8CDiir1LivXb516s4aZ",
  "key2": "2Jp6CyjM7iLZFQ24YiZuUK6Bg5xspPRL1vVmqRNUoopoZjZGqbywbhDuZ3nADb9sy52epS2kzXiKMuYvEyLBysiB",
  "key3": "Zk7uC3wrHCCGTyr6Zz2rNRRG97YykhGc8c4EcBqookWDAVEKCacPv75d5YCjbjfW7RHXsZznYcNKNNkax3pdsGc",
  "key4": "5dALeHMnVXQ3VJNznQDAJuNZNm5o9VvA3FzFiZtMutW6Td92KmK25JpLcr2ezCdPZZNFg7sp8E8obVLH3ixuEhZz",
  "key5": "2Q7aBzHdG3PD4uZ5qrdfAfkEkhnCERTfYP9vkn6swaKZ9xiWxqHCMrSAv3rpvPwqb9t7HHMfceCMDF2xmVaEDdcb",
  "key6": "2zs5qfWDqpzcqtKNVAALcnoNXDEWux7AUXSE8qyXZw5CQEDTYzLz73HwX2dX5szQXznx3EjB1gHZxSwatUjJa42w",
  "key7": "3z3E6f91MhWVerMc6EPRTou3tsGDmCUgdw88krYED3bLVfmfqoKtxN7KiMNLF53CuWuspVANPLjFfaUwnfEjwtjr",
  "key8": "2bR165Ehw3tBQrCLXv3MNTiLSDH3XuvfpMojZKbtBSnjqx2RwXgYirXovqurhbacYUrEUm8HyEBL3iBzzpUzinpw",
  "key9": "4LjozuamMAHGStSi826LYvsVQgpiZLucdXp5zYizt7ZuymHXkTsuzvYQATRoQbAipx9QtVxu47CjU2gFVX2ZNvaQ",
  "key10": "4dF1Dzhna9m4JTs7PJ3VhtBzhyooR98XYjMmDewfdLdzv2pVNa7mZ7hSE6z8sT2WZDAZag5MznaJGTP8sq2wzf9n",
  "key11": "3SQXF5aj4rbYZX1fF7Sj94N5Y3fiZqEoTPmUBvgzbLqngkyrHZJfL5WeyHtTiT7Jqmc3cwBRqQjCsMMxvZyVVFrB",
  "key12": "4MCXSaQRh1DVC3rWKxEspk5W1e299eXefxaKfZ9s3rDqP1QJtBsALbuog2Qy2T7jS2T4uEYKYxpGHbXTTJb9BqiY",
  "key13": "ddy7w2QHBFux4UnA47YhcafhptdQPhxv9DdcUrjRg2FnLhbzCu4RnMGRY8YbC8t9nqNykgePihZ3jwKwNEYpMyV",
  "key14": "2GpSRVSgsjjY5941r9VY7UrpPiJR7hQxGTH7nh9KckUf8szrZuytv5GWnmLUTRWo9mckDSZA8VeE4oKSZTdZLMQ4",
  "key15": "33sn4Y6i3DF56qmpF2jc3KgmmKvy6MgquwFjQEbdaATxULKuZB3cAXS9GKFfbPFYZfuapQEGvsSkQe4xSznByT6J",
  "key16": "5YMWSxjKGSad9zDNXUimoBmDcEcAaTC8NuzmuK73uNYNa8UZCZhFfHdP78dMpat8Hdc1uDk69kHmpqfRzTP1BCy6",
  "key17": "5UCMNV4yPW4pnjtZYQWzw5L2o94GTrGKehqz7vMJNDQFSk3djGXTfQ676ajDzxSVf17iL1wMeW8W1WgErR1zR5H2",
  "key18": "5gZqRz6yZpWfSEicDB1a3hwh9QHYPazWzmaP8ZRscsHW8nboDxF5eo8X3aaWCAieJ96RzvvUg3BFWfTM54YNStMQ",
  "key19": "4BXZzVUiRxrRwbtKjLS91HF5bW2cyQnL5tg5PY53uzQ1LSqvKtRycscoo1du1GzAwcwwGMUP5sMmgcLjoedaC5Ee",
  "key20": "2UgiEBU2UnwPpVirKGgm8PyfESNa9QNRbJ1W2r8bQqJb3uFKj1ep24YorXc52jFJZTgBCb2fFLeo21unhy6nhjMq",
  "key21": "5t4f4uSabMqAh2Doo4K7b5fwAjdszMMZaB1weyKG7PcwtnEBNBmNeDnUmGGC2nTpSQoqojT79Ciuj5fTrcPh3eXB",
  "key22": "QgAFNp2BZAeoNHkgkUmpgemcD7Sz3pzTkSu34x4BvRkEisDLpAAHZbZfQ9HiVn7PiWBEB1wMWL9Bc3R6vUzeuna",
  "key23": "28WPPfT4KNJE9hvm19xVTE26EMxACYSBLsRjCeby4ndb8bKzwfwQRXwyjAZQ6ZzcGCP4JncDBLtwGVQuw2cvs4pW",
  "key24": "4RKC4kCM6xRrzU7dRA3GA548gnP4vK8vEvNhucnr5ETjqF3VYHUr3ZKxzi8NzahdDyZSc3PJjeeb6HZXHTAXxuRR",
  "key25": "2pf3ZTKyL9xgZhCgENbiU6CQwqzoLBrAzkExyKJRi8CYtyRTtixjZNLesZYXQ7HowfxpL51bHge6YM8j8aefd42x",
  "key26": "5erta27LucQewhYdTGtD6gqrZYTp9Gxg6v3rZ6Rg728HDNczagCGKrjRnB2YXTvd8278rtsMe65zHm6kH917Zu1K",
  "key27": "36nzZ8LkkGmeTNZeSBfcmfVZja9rdgWHBfZo8VbDcfH3vf5khrx8WdvLjsQG5bQH591zXLuUPLNP4suMqf1MCs7w",
  "key28": "24yjPuFcZMNtsVzgyocDLyBDyseYC1T8fT55X8kwHNjPobGkafk1xuunmCpcQRmz8LnqCCutbz1ySAKjMaJFnADM",
  "key29": "2r58wiPwEpUYpWzibJtZXxWKhzDn2VV7Q7NGJNA8v8P13ZjAbeENjt8PphQzmzPhTZJfj6v9W23T8NzrVPFniW78",
  "key30": "2kN8GEnzoVHNUDP3HB4pmgX8jtnBPgifR1edzPebEJDka3dZpAwh3E93d4CgDvmiwArP8BXSDdd5QzgPZ94LLz4S",
  "key31": "3NHQxkz2cwbinHB24XdmjSvXuyE2fEfkBBH53rkbk8W5MpCNMXKuUqAawNRCrgmfKZ6Ye9P6RzB3S7pRcRhYkE1",
  "key32": "odPxpsjZHcNtZ7yB6L4Htgbn3aQHPTdYkJBbT4MBpYChRF1TWW3TFbFVPwiLA7AtSQW121Z3xFMwoq6bfRzBDJL",
  "key33": "3wNEGMbXvQXAA6ZdpVC8pGeFq8wxzEfNarizNzLu3Y4L45FydTEPDmSWGQiZAtb6z6attN7Yqgs9KjtPQAxXVaWb",
  "key34": "4dwbB7PoTSeyFCrUM6ii9sxbZwCYM7LL2DqfQX7ZswPiCJgHnTQp2hnPTfvQUYnqskyDDbPFG7K9PtcsNmfygxjN",
  "key35": "5JWgiuLXy8HiYQnHuPbnUdaG38oq9VSsaKUWy4nboMpaXiZDnbmQ56UM4xubuoN1BqnfsxEQ9wu353nwwVgSLfGC",
  "key36": "3f9xqEwGkGJ6n5k2ujJ9MkLbrQ2Fjtw8mPDVNB3zaxEY649NiTqGdJj2nY6LDUNEWZsDvdAtHVyi3NT9cGF7kyL6",
  "key37": "oLjqmry5vyZidXCzXyFqr7E6wBKXzBQUbsCfMsgoRVD9ySrPj8c8dHVUdtcH9kTkkGsYoYey7ekJgmeDYsjnm7P",
  "key38": "3LWyJhxQnnkqf94CLA5a77udxfXYAeLxMMuwmfNRPPe2WT2C8aZVwpcGapnpPLBN83nF2BqMCTwwtjwCr4MFa4ho",
  "key39": "sN8CKVGbdxQ9pxkzCxbPb7jrjhusSAKwarDsdo1UFVp35GRdSku6RgkRMCeGmdYcsXKhj1uwpxeZWdSBRQ8mRhH",
  "key40": "8XMyL3V7fdXrh7cSAnvWc16z5ohvQ1QH9Hav37k47FcZ1p7SvgVfQGZ3K9bfe8fSMjBaVRtbZ7rcsr3jopCM3Zd",
  "key41": "7cyuEUDe4UVEAbPY6MRMtAXehgAJvCTg8nP3XKXhjGoXofjRhQJFL7ZAaX6PYfvxDcbPjRfBHCZFZajXF9UVAWN"
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

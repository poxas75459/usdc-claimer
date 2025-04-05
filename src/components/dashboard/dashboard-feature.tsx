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
    "4PVEquz2owTPk5pfHBE3kwyxUFPU5WKvXDNvmj6xbbU1GJR7Cktk9NoBSFvfDhVnnZuDuGFMGmdrT92tCGfoULaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33hP7R2v5TGFENynamgAKvjQvoh31JHfNp1RHJkiV2uQyxfWVCW4MW11jaqznWQXmnJBcLkR7fd8ApxNkRudyp1X",
  "key1": "2n2YJWb65UEA5ZmPSDijZitdvBuLvAv5nnhnZbENrNSGArxMUAL4UNkbKMZkx1om36YzDeLEVUr4njrbMLTWEyCQ",
  "key2": "MRnLAuEc61xeEUVcpAVTZjDrnjnQnk5XKFEL7azAaDkJg5Ayxxszyd44Ka8Ek26bgP3qV4HuvXp8EEDEZKAfTGa",
  "key3": "5t9QTJhUgRrMjxTHunLxV1RjSASbTVSK6e1zN2oeDnX4xbfaaeP4rNfLpFbsCUFXm7WFDR3eGxnHkriGTq1XDbzF",
  "key4": "3Smn5A3mAvSzooA4eFGFC2bakWQGhWQWLXcX1ukVuWU1RHXQMDWp8yv9QcZgDjTLVbdYsKzaTVJBLpMrPKQtC2qw",
  "key5": "Mx1vkKktoJLH7DgGfMqgmXHH7pxxqbkSMopMubntZTsdeYsVVYgic1LZyvJxcN53GEHNfQtcayyF3FWf2DaYvW4",
  "key6": "439NhnoypeGX8cYDwdFaGh7VNu3g4mE5hhU8Zt8DEfiPsbCt6i9GZ9RrJ6Qy2eePdbFcDJdkzX59bVUkbzGVhUvQ",
  "key7": "5B3zz663LEnJm6eFzWwXiQSatCUWFXavCwHMLvgkowshLZ2zJMauRBgdgfc8t6SutWVwLnWm59VK3hUu3R5yMLPh",
  "key8": "5jmMtUcbGyE44vt2R1ki52ucworfZpijixP7qyWWnFD6RZYJhnboZNkVFG9Ln2e4BhcZdBmX3sSNvMS2dcFDvqqn",
  "key9": "2nVXktSUeetAGVK4fy4TMpvZVdgfFWhbfska4qr8JpZjHThE3mvd2FNWXmaU6JhomZUCAA6Lp3QnMYbNumeuqL3h",
  "key10": "31tRWpyuna1eS673D6NSXZchmNsNAQR8QjCk7V4c7pTRQcB2YBM7TX1ULKnPqHHk1iVMeanvPTyfCbgegW4vEFDY",
  "key11": "2S3DGU8u9si8nfSm2gdryzvdj2Ti3YovJPkAnU17jNkT8JaRwJpPdh6qo3SNsN6AGsGAHvzK6UDPWz6JNsB21fc4",
  "key12": "2a2vAhBbcQx4WUCFG2baqcT3E6kid4o7xGU3Adz6YHVA6STBctABJatmSZeEMecQGLeYpBgyYdseSXJqLfyp2PG",
  "key13": "3yh43SX8WF9AJfuuryfUtX8TTNTBJwCraKBWuJX6L6D5vketuHNdPPo6KxbJHz6KLxLg4QbPa9D8KKzS9VYbpyi7",
  "key14": "Raq862See7S2ZDF1WE5MGpgBEx92mbnCTZN68zxQyPD2WmA3TDhzv2nDjR37N4pb4LWAcQQyASa9a6yUNhkB3PC",
  "key15": "2G97FZSS77gcy5BbouopWc879c9nFWTaFACxajpqdJYrHym14yzdxkpAZZsqhXuwoZMh34aSbZ2NMWm5Dg17xRV2",
  "key16": "4HztLtV5Dg4moDkYN8QnG8LmAAoEWQS6dm4ug4kZd5vkshbZifgCwjdzUu5PQfA4DnXiKaNPy5qS4GCrjfVDGtrR",
  "key17": "CmUztTQr3GVVhW42xnigLKGN4yYN9D7DK4wYTX3Stx8tBrkacT5dKv77oGA21bsAAF5sj3D9meACe3amUpXAgtU",
  "key18": "3SWvXZzujqYDXUzM8To6Psk239qpYh3EmNDKLJLf4C2zfjZQsonFjgPErEmANheSUSRTFCzZe5EWktB1aSvBfTUY",
  "key19": "5vE2P8MHrwtTQQRHp8z1e3SLT6TcLcUMgmr4wWgvPZ7kdStdc5vwMJaHuWniUXCM8pHK9DPYEv6r8Tw3W8BYSwuy",
  "key20": "4gHtz22uMuPJARxArKHfokGwJuDWk264amHSxyvsTiGzVtwy8qb6QybTtVgPh13reEYkAhdQVx3YpZtirVuFWNer",
  "key21": "4rkrs5zu2D6bU2oyMF1cbUrjrsHmKPv2BkqTrJiNcXc9PtvmiaYuU76m7MhpNx28JsDTrDjkz7Fa9FCEXt4B3p5i",
  "key22": "5fE6wpHg45iThz5wjLFQuk2fK6XBjVs8ZYcn1mtkH54K5otxDYQBk1hDoKacKxjsS8gFg3Asjo5s1wS9ktazQDhj",
  "key23": "2JjVWGKprgAXqABHULBTNwijeDKCFoTtN1DPVknTGTy8V1ZJJCuqV95tJgw16ZRs4dR22pkn7tWvCFyM9vwpL5Qu",
  "key24": "5QKrhB5WrgqeMRCHd6v17tT9HNsPryWtpMFzuuLWFkgK78wWARjRLPwnFpDfJ6kEkGzirZJ79162UEAQaaRgZtDt",
  "key25": "54w6UfJ4oAuCa9v8ioiZHVvEy9aKdWaTqYjPGjW2EJaTmE8hW4vmanfErZLKVpyKji6q3vLGkaSbPv6b68XrA93z",
  "key26": "4ftgiiuJ4HJs61AZ1yRmmm4rtoQc2ss8nekJkVrRES8atMkqLhyA7RhMJXCvRupdDZjdsiETn4evmkBGza8VuY5x",
  "key27": "4MhnVbzYaF8oin7jiethnjug9vH53RrDc4Y2yFRd1JxSP3GVxaUD3DpCtyh7Ca57866T1cFmudgEumFKYaDU5vRJ",
  "key28": "2pNGde7vX7CBBoATYEBbQvS8Crty1rAEZcgEXfPhaGMdG8U1N8fENML8dNkSBwhHJPRwtkUwjbuYHoN5aQqxJKsb",
  "key29": "aX9nb62itXQnybPnREeKgWT2bGsCt3pVnm58CY2qTeGHH35YVS8RXgSucMccaLsmUv83d5y8drZEh4zT5ogfFZN",
  "key30": "39udFGmjmV6stqwkkCxUxi1PkntKxWYEaedQYvMAZDwKfgYa2A2BbXXayqCN9hZGyuaNLh3hiTXwNJj5JLtHW81C",
  "key31": "5EhNRHfo92YVUJKsbdKjUpMz5ekvDcF99tPcWMCbWxGoe2wTmAAKYfBhXPpavrWjnxAhhjWMsr41312wHJDTDMTa",
  "key32": "4UJfRHiwydRPYnBoDLgnxKR8ghuY9t92mHQc8Giub8rU4U2RgsLVazq4yemPNb4SzXpdinGrGWLgnEpKJNQhEzKy",
  "key33": "3g5n3QQmYrJuh6kne4nQGsPJxMLbp61mEJxkAAz8tM1xWQeee24DTb6c6V8AZhwTtHgma21dxsQ2ZmquGhcW5g5T",
  "key34": "4JuKRUXFLUrgDAPNZDFZHPwvRT7DeYqx9NhDdGxcagwjWRFK9P5zD1NEhTKTyoA7cySeNe62vABJ4F8KN1pkdzbA",
  "key35": "3wPcNC3ZYnU2LWdPfX7J9GpCFiZo5nUsG1gbUWK6qg3pXBbm5CRkiww74FehaTvSmxe2nJa4inp9mbARL24jVcc",
  "key36": "bw1bzVipVf47f2cVrUSTyqG8TxARxf8HnVm4anrwWQSQq7UEfhJLFmEqsUAe9hRBkCjkjwYgWEDWpYNgRP5c9jE",
  "key37": "515BmLVDhGj3bGaSnvh1U8FEBCdbbZGhFHBUv9ERE3PMyKqq3nw5zs9LtK8abaAaERM2n76QUj6XeEmLyGVbLUtS",
  "key38": "3whSbe3kATEpqqutujsKMFbK4eq6CT7ZDVZEBaiQG2FhNrXSTkRtNFF8yMBFRSuj2gwYqo7HRY9MVDHpXyGkYiZi",
  "key39": "2cgSPwfjJBdSzUhTFWAeyHkafp2dKTWr9W736J9fRGHjfae5jzWc9JuLqrMtAqJ6azi2a3UJdX47WKnT1h33iVUB",
  "key40": "5bmp1wyVnMchRwqWXVGjZqrfVYCmLd1RdpGyPqYVy9sTni7WAuQZJuQf7jeoxd4JeJGg1VNSi2Hd7xD27BoQnvhQ",
  "key41": "4tSUh33Fy4tmMydMtEb1N63JEziCnzcx15y6FpCXaL8ukdft4PRTQgTwDcj5YKpTWjDe1AXpZjSz7aQjML54xPT"
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

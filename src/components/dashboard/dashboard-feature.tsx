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
    "4dGnPkyXt5eu8GGoKgAhdVFZRJ9dYRWU45u4Dd9UUD5Rq9Pbw9o2HWqQ5iNDs5LJZaxYKa3DRnRoFicZ42Yczj2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xnepZDKaNg4WuTFwnPEcjj5L6vQixZigjwLdG4fLpyTck9NmQW5vWf3jwKQmD29qQFkHdrFAR8vyo2614oPJSvj",
  "key1": "5sUaPXeS18821jZa8niXpjTpAknmm5jNhL1bxKAgxJYYHwmEZ7jr2DeV8j5wwjk9c7vpp5uYNUnjusk2FquVrBwd",
  "key2": "2Qt3MNr3NCEXhqZKgyooEf27TWJP7XqPUEPZ9cxGxZRLt8xBJaQvgJD514hLJDQMVrKMzyWq8pxPj3fgpS1qijYE",
  "key3": "3c7UkNxpmiLQirtf1ECTv524Cr3p8Qub7DEKh1tAiroinYEUgZBkh9oQcwe4RXpMhbqHSm93uK62DsiDdMMddxNg",
  "key4": "52KvpphGSuhuEQWerjm8BQ15VLmmMFt8m1j6DEr2oUbCpbeevqob1WnZoMJWdAHt2tbLWMtEC6GEx8Z4D1ufBR35",
  "key5": "3HtiMakzrsECLvnugAfJoeVxfffEhN2AZamTxAGPZBJQTDbPqVL5MfpJ1Uv1XbNuHXPZgA8nj6T3fJzABfL27U1z",
  "key6": "3STtGVSgWv8kfVV759uznP3zNkj1BBdp2pr2B5gEwgDvLMhjbYCAieUPU1C9x4zrTn8eT2LdNxoVCxPuMMKZHbcQ",
  "key7": "6FayrT8gCKWKpDSE2NHTNc8NbFirJDVjrAc3usSMz49zu5DcmW3kBgeTF1fmfD9VbktR182oEdVsTrzjnBDH96J",
  "key8": "394t8B3wVY1aV4iNe87UYNKNQqK6sQgAE36cuSPbUKyiHhaxrenMJNMXjwcYAfdweaKL9PtQz2mMvgWngS61CiDE",
  "key9": "3jt4HF38XYAu21FaB3T3M9GP4Db9Hpf4yTpBmqvcDTZjbUVVRmbdwaXYsq6LAFJvRDC48ai5MJVfodWorfxH9Xit",
  "key10": "4xX2g5CgjSTFUgavGZ2tczD46qVETb4GUXyWFceehkyYDRGyQPgzU1oKsUxTPzjPhrJgru7ovqs3EwNX4dtJKQbj",
  "key11": "5aA9x9Mu9hBFL2stdhLKYtbrH3knNVK2kwhXGp3vy5JnUyhKutKW7ifkWLqDyspJE6cwcsF6keWSqFArRYbpFd5R",
  "key12": "3icR5hZQ5BtnBEyJAfXCDQ6WKPD8RSBiNmNdtYdSWv42jqtjmvRc1dnC1ya9ANa1oQWHGuuGiBGweKJ1fvZgTNcC",
  "key13": "421TAjn339irt3y9ostX8XM5mzhvK8br3ki8bGY81HBYGi8uiTu8q2cbFRzc7jJ48vRz9ysyPZTQCNRozwKBnNpA",
  "key14": "3WYmkbJPeMWg7681bmorxYPhU5Mqct1LLzPrm6QWWCSEnHiEZmP7yNRTocaVh7YjZooB2TJGS9XV5BwsmM1NCgfm",
  "key15": "LdpWwDr3XfmRQWFuweSRc4NyT7xKVnAQ432EByaFTUwZw6djHVfFEr3gNuAnaDScEtuJaEscNnSqGjvixUv9FkB",
  "key16": "38Tgr269HYTQQ72rvGg1SKATaaC2P5KiYAFxtTahLLRVPDkAg5BSSS7ZSqJbDMsZ4JaxtsRQzeGk462ty5y6RtBm",
  "key17": "jTVBtd9ZexA9bBp5q9JGPmdd83SB6EB24AYfkVDevqshfX5qXF4mST6VCYPiqH1GtmnorerohuK4vmYMNoF1A73",
  "key18": "4yN4gDvyzeRZkbeuWDNiYoDQr6ZbJknJcpoQ4oKePvbx5LT4nzMWfoBULWiJZ5xH67CWVEVjHEeqXZHA7r6YJxU4",
  "key19": "3ac23HoCvJGGVopP6ixygFG3tvHcvrkLX3c6vD4tzSpYty5kE8wKDdjdoSER4uD9SrGrdtDRPpcafqb1LYfhfMmg",
  "key20": "5bHiLKuobYVLaX3E4keXh2eqYLmiseQVYnBZYmDy7t5xByBjk4MNSdV5KVLpmAfCFB3DxdssaV21vup7idndSC7b",
  "key21": "4WqVVrmhfEFhvrBmpDZxcDmqDTddWXzPhGWfrDMfchvcUG5H1TpSPmST7d9tBRmf6hf8qC9hVX6c48ZotBztbR8q",
  "key22": "SmmxThWXbgYcwkQtSnuFkQD18hWycHViWVRtrzGFAxNHkzrBDv2gJ3XsMpkHCqsqRUkLoiuUBteK4cCxYzxsbZ5",
  "key23": "5djS5gh2Sg8dJCiqBk9ZZauEL2pBFFgewed96EAQkqzbckJ3A69qUCpsdGDjxAJs5L3NQ2BLS4zWfCwBHS5Qb2MU",
  "key24": "dWhyaWS7cAnzfKAG11HmhQFb1gSrH4w3LUyLonc8z8AvgZb8d6GiheGADdY8eFnRsov47w13dknApqJyWH6czeb",
  "key25": "5VMZx4uKSFenmN3GSr7eZJs3grce5ySubbxrBJWBGrhJ9qJkQwCgQGZ9XsWQYcK6NxR2rjemkrYFKb7ovGJUH6YL",
  "key26": "3DD6LhpsVrPF4i5wfYZQgAdYXYVKiriAEGFXJpxZTjD5Si4Qz5JCGUzLswH8QkbHckPYhapHf5bMPV1N1hCQqvyj",
  "key27": "5dKnrUFKJgfkjGdXzqNDUGxXfaJu3bDdDxdahE9Dw1RfpyXCX7bet47zuF8hwRHVbnCisrWnwoGqDKmjF7RzXD65",
  "key28": "3ZdqQggFK4YAvn6KQK8gG9nCa1pJe3DZ1FovNHdRvZNyqTX1Tp1HCHbcgfmbn64jFgti5MVvVqFPARfLaa65qkXt",
  "key29": "2EMfC5AupXr1m5HdtKYrbXWmsxi87UqnnSXXMX248PeC6274cdg9RcsW6rumNr7nGmdLHN6u9CAHTteVZ4R8VoBa",
  "key30": "4SNU8GQP72VHAuvntRUS2nAL7dZZmkX4prseVXKbs7h7M9spMGxSQsxrzumsZwvZtNzTwNXuMyR6xu4TocfviiSH",
  "key31": "2rpZuZ2xQ9UBFNR37Ep7Ap7Cw18YvB78oUgMaLJvax5MreaY1cCYjzo9Phb5H8yDcgJgCZbNrtKzN6jgBXBjTStx",
  "key32": "2HjG932xK1JMgQoz8fC6meDhviuucdQssaKHnSjqzDGmusmvS29urBwxQkAhd2aZ1sfYnHWVmksa8wPdzg23RekN",
  "key33": "5wtMyjGSQyobVsWnPcAoUMDg6vhFL74K6p4YRsQxhn8pJzHaJYndpaoh6rrwUJi523whCDigb2BeAT8oNvnMoN91",
  "key34": "675Q3P2ixUNsg2eY3SuaLaSkKdkH7dT3io6eWmCGAufxtyRPonbQpQMMmnyqjeswdUc37bm566s4iLaTp8aHnXHr",
  "key35": "2HAUQ5J3tPoCYcFRCwYPtHsocFdhwCBA5b7hNRh5YjqPzLh3R9c32QtY3FsRM5y3qqZw1qwhH76LsKMfMXtaVVCD",
  "key36": "5ZWXDKK7Kd7MQjtQ4bzmCMJGyJKbb6Ty6M4AEkK7mMWRNaGHmePRZsiHKSDyMB9FJ6irUnQztYXoR8KX2uG7AfE1",
  "key37": "4VpUux28ntE9wxADTJxLG5erjMCFmqPE13q3VTkXQzxfq5Wx5KJQgqkbWN8Rd2pWtCP4d9wYacxnFANmoyRtw6AL",
  "key38": "RFQDDZJZawnto7pqvpYJGf4okkXgfNjZwTdyMQqtcum47dF3ujqHacs7MG2Pk229Jc6sv36PbPxgtW3ycFuN5Ag",
  "key39": "4ceEqCDQryt1tDCdRue1KWu6y6sbF7txKBEHVTHC57gg9yR8VtQ5uAj7zM1UzQ9P4MUw3WZvTBGJauLg3efb71YP",
  "key40": "3F6j7wVgZaPiL8u4ziDZatBdRMhvvjKuRrcMc5jxc8K3gpd5EtXLeVhaZhKPmS48zZ6B5DvCfu2UKJSahczpPynz",
  "key41": "4CwUQk1HEMFkypQDvEvbuiivrjPqBrqF5dejwAujjJ39TxpqJtKgWumNx4dcPfG3MvLQsmYC9Xt4nxvixtAQWNrw",
  "key42": "3VsVDx3Lns4SomrRCEKxHTACJXQ5xTf7PQz262wEm2SpJHT6wCryTWNdzwddNTXq3CkdA5c6JVK4z9afg6MUCSGR"
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

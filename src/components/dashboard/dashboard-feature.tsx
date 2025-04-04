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
    "2gH86L89Nb8Sz8WRXLNSy4wLr4xw3GvJGo4bQgPUHy8H6daUh7nHaFwpRCd2WnkbPKkNqYSoNn4NpdEYoQUxdW95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BYupUdYdEguCfcZuHANRiuX4oi3aknMJWehuVNsiCJWRWrUv8NFkFo9P2ecxoyHTEonhJqYNrxNwLfWkaMVPzVa",
  "key1": "5yM6rtNs35WknTLzEJU5vWHAZz5esJTzcyoZvWqgw3Zx8oGU2rVLQ6NwDev1xPAnTWxAhM86JkXLURw8zr53HyBG",
  "key2": "4pSYabkjtKSW7MyCDhYHT6KRCwNs2GuQKdBpcRmmrjC9KmEvurbgMJp9zLYYGcnyeDn6vVn71inuPWkvdHSqPeWE",
  "key3": "2qhsFQsbrbsRskMSyiAZBcvpc1UdnxDKyzuFi1c1VJPr3PafdpQouRPUkPGTk3jPjqErhbupkWrkKUvZNZxmAtfr",
  "key4": "8opEGQuUzuiLHuzeDnajfhioAEdhHCbjKT5wEbAHH98EXU6pdJmLC8Dz9oLfppEt8qYdc5LiUWiU1izbbPpDDQv",
  "key5": "326dKTtbH27kFTfJQqgr7TW3NG6iyDva5ZiK7pEoAMamxs8nPFvQdrdcJ3tYycBWfgpFzRzpJZYgZACckkdoXjCF",
  "key6": "49uZS8eMit4V4cLRWLXoieb5qVAqZENTU9hZEW85PFoZhf6MF75cdUH4RK9rQEQoxdUx6jSM4TXaK1umvrTo9iPU",
  "key7": "4vdD3g8bRvKUQkj8t9hfbZcRden8RvNZ8HVe9kWDyL9L3bu45kNLMH9c6wMkD1eo6UwEx9V5V8Z3pRF3727waFB7",
  "key8": "2ijHwgNuTA4BA6hNSLCGzNr1yKN9bPzBhdVNZuyt4Wbv4PrxaSCKzxskAuT7N9ZfYgQWNfh1ggxaWNzLR211VdPv",
  "key9": "3EE3jSDLmWAQr4GtrYLkvRHFy54gSZJFNjaeQWv4KXoyuX1aeD7XainbU9DrzjPibcRVh1DX3sFkqVkUfYBEJ5kx",
  "key10": "5YvdZA4vtnbqymDERN9crjwoKSjN8p9koM4UTgUA76kp4Z9jfR276i8NEEGNr9NQUxjJdPWz28HRSKeJWDkqE8v6",
  "key11": "5UJA2vSkG7qXJsiqTNyBEksH4TQ98NAMag5NLWpyh8dAr4U5C5KdYMoSFSdEnfqgXY24m1YDmDwxdzjnafUoJuPE",
  "key12": "2shiUuqobYJKYSvCi6nsiM2jUevEL1CXkxV7H1prheouH1xP8VKQkxKMnPML9zd7BRDRMv8Ui4yDejXbtUmwwtB7",
  "key13": "3htTWH3RDz68fMRcs2z7TXu6J9oNZUnfeKqymsr2WrDyF64zUJBbapryG1gcaTmtsZZmsnoi1BeEogfvNwka1wfE",
  "key14": "3oShYeWyzBztT8JD6SEzeWUe3fXhZoCuEeR8DkKrn8LUiSiD5EWB5sNQ76iQWk945HjzW3feFt1xfY37q5JRt659",
  "key15": "31ogbicTfySsdQRBakhNBPCsbWQpWppNG54kziBNgAyuvSEY91CrzrcUYJovobJjR7GjHmcriB2Gm14PBtDM21z7",
  "key16": "UrQj6gfgbVBLL4PrKCNJjoKw27ThHxpmVitTDjnaVz8dyZWU2179njvNKYFsvEZSgKCivrC378LK4WJx2y11vWk",
  "key17": "5JBLpny21ccWDXrkWoQ3yqPW5TAEcxLuTVLL4WonCGRZpmdws7ewH2QFmYkBYwe1D8VrgESRySmtgdFzaQjUn7qr",
  "key18": "4gH7SBcB1hayKXYtY2Bjs8FAbBCwjvLW2sU9eyFi4EgAagWKypsLuvJhkczNkLPhiRwD3uxBDzXbqKaqkBZeV4R2",
  "key19": "2RhYsqFM827L6Pw1q5gxqdq3s6HHHcu9YJQXTTEtVvQVWKXSgWS7jGZYJJxTCtFZAR8RTfNHTgVbAkUF8FAo2K2n",
  "key20": "4FKzhWUt1DvSzjA4Z162zUaBB4UY9UGFFTYHUyDMEaPRjKCFLtokG7musxzqeVpmscBZjMhzWgkLUtSNWgyV2LmT",
  "key21": "4vURVJZZ8uJ1t2WrdBWL42qs1UBBTeQy4PMChrKepPybj4ohjCfHEKB9VnKhAZp5C6TsuHZRDuqzSqRFdha8u47P",
  "key22": "2WKhbSQVDpWMbK3bvHjPnupa28MCeFvZRd95UQoL8ky3fRvSXPi53kP8kRktzageBg9jp6qmDjRmzuCUA5F2W9Dm",
  "key23": "o6ZkTot3qoUwvRA2iwndCd2Gxzt8PMcc463CmXE1kSPu7eE9YQa87fhWPYEruyzPto11j2ftGHcYa8Np8iVP73b",
  "key24": "4q3WEAcKbyTDvdULH5jvdn35wkBLwMXQLP1Ch28ELXYTSA3fmKpnWJB7Epx26N88Ym4FZrWSKevKM495p2DGvZAp",
  "key25": "4zmHjH7T5bKMkZjLsuKz6Mzqg8ZA21BdCsysr85AqAGzHikjGWmiMokbiFgDP3vautjLJjVW2gjQDZ6FvW5ua6yR",
  "key26": "3BhmUu8Mc6Jogvsh4Gxfo7RftjEwAdqaDrqoLMpLm1GAy1YeEKccZxCQPywDRu9zeit1gE6izkVusJp9PUVv2GEg",
  "key27": "2d86ikDDLt86NbdGepiAT5mLnQt3PfdRUBMDRNCoD3PFXGuGpGHPuZoMuvCAtGuSyyLHiGKp6KeQvPQatUSaLW7J",
  "key28": "23N7jLoGStJU5DUEViyFB3BmCEbt7HtCjnhYTmRoYGQm4jPhWwFpM2Ub6MgTxJ5gGggTndAczbCnmqeD8MHnBs4T",
  "key29": "3FhjD1zvJFKnKshxSzkWZEFvButXkB2A59Fxy3S6agqay6yDYbJy9CdbJEiMB1LEQpYViAMuzrghwhpzPTizNgFP",
  "key30": "3oxxRHovhncrxsySRDnhw86V4kknMvxvHLhb7ZpFCQY8mbkTPW7fwPh4nnARifEL3tUcbRrBgQUU9AFwmi5gVP41",
  "key31": "3aWcmrz2cr8LcECdXpGHCcQb9epbrhRsxfSFgqFA8Btam7iDR14P73SAnmTDw1oBv3xUY5aAQg6sttzj6LbZ26ak",
  "key32": "qBJtnGYsLvCLwUCFFgwzjCWQkSpPkndcjDfwRF4nePoBV8GsP1qpYCkDfyv1bg3f5oyPW2ZvucJBGGBhymk74g2",
  "key33": "5CPJwwRnQcXjhSG41ZxyUvpRaGiA2a6XzUv1cMijVUS77QZy1uCfW5qricJTg2AujMQ9HukWG6F7riLaPUTyS26u",
  "key34": "5PSeRwARVrP4RRRY7qCnB4UACqQmPHZpp8s7gA67omLsii8MYg4tDZQZPBvmJkcRghVrC73v2DjUGJoooAfSgjRR",
  "key35": "2S7hh2Pk6NWdyRCzn9ysLpGEj5kvwFH6UPghXfURju7Gm7MPc123CNQ6N1bN7wfb2gs68cdJCk8UEoXzSQCx9mhx",
  "key36": "2Y7LMt8XQzka8atq2P1KHJjZEfDfXBJNDXCp1MdbBgW2MdrXtJj8gWs5ctSk77bHPhspekqa2qE8dSHmGmUv28b1",
  "key37": "31sn2oPC9zzC871vVwVY5tVzobqvbfZrLJei7e1uvHKb3MimzorD377f7i5LA8KQqhdGgXHcesPjd5Eai7Gkrcm3",
  "key38": "5HrLdmTRim4qffkuHV3cjqvsxRBto4Wpjsqt2kfVnwspCCdJb8qccN1AKbsMx98aSQUPtANLp3S2Q583QixyDFKu",
  "key39": "4Akej2svkFFBVbRuK7QmB4QHgC7JrWenD6XSHuDMDe3VvoRgfcBfg9oo2dxEr9FHmLG54DqdF77dWsNz23WhGG1D",
  "key40": "3t6zD6cWXa9491FRVkPMuP8iaCUUjzR4zKhvDDJz9DShyeLfrSMHtZKePJmzNymNkidLv9YP3VzD3jCyZimNtqM3",
  "key41": "3NqmvHxDH3gfxoWthBqQ2rPJ4c4Zau6NHKy5U7SXX6WJj78HZfUvwCeMWWZvUDzruBfvxZi6eysym38MsQD4xp5x",
  "key42": "42hQSkQ1Vi8XtPkF1DcmZPhoNwZpHt3heUgsaigEFHGT6rU6heEEMdKuQZr2T4Hc1kebU8wbptzEk9dsm5ax5zxF"
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

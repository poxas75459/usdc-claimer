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
    "4gTT94US2QUgQLBZz6qkCrHkQbUCGbkKRu1pU31mGzHpm5DnxsKf2gAj5LfRLqHYiA5HFvzKZHvJa5QUrE4u2pQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yBhoJE4ui4W2TnkWQ4KgtuZqZAJK4DX4kp4UjeX2L3XLkm5T96tdhZhtUBVmohMctGVRsr3W6utVLHZbk9j7djY",
  "key1": "3QDg9pijx1WqdzKY4wZpgXFJWUHkueBvCbQsECSe6SzCYd9z3yUqJosUMyEMFCxYEgmUnD3MMTu632G4FKHDnb94",
  "key2": "4r7WxF9Dw6BPtiuiXTcq5JsTCaA8uTfvBjbSoes4Rjt2Qy8dV71fhpDiVMYisFGhBVk3YFkcTaqfXAbQUfFLz1i5",
  "key3": "cgKvAJ4mFH3mfz78g9PNE5diBoGfKGEdo7zywk7NnXeTypkrhCefXTZFRbsyVGXhScickvJpd93gw4rpo9sV3Bb",
  "key4": "5MuesnDjTceG7Wq1qqB1wwsMnE5PECp4mxhk3rFiUU39fcyYHyimm9zU25k6V81HyUa8SeUXKGJjEfJ6ukBH7Y1h",
  "key5": "3tnqGh9xsb5mHRtnXK2wZ2J1vCDQCSFGUTw3C1buscfa9r5Xpt5frDjxwNtcjLjEFrKkEPv4Gf4Zsgh32iXNPy9E",
  "key6": "3PCGEbpLtULQ5DbPhciNKNVUojqpU22sm5gVUF4snvzHa3zPK8C2kEJu8UwRKhngMwFR81LR1ms6sjW7Yd7xCjJQ",
  "key7": "5CzyyjbuqxoL44pt2n9WEMaH3MZUcrDQ6mz9uXFxTTTxzG62eBacowvdsYUgCkJ2PYvuRKpiw3gQZXHkLYsgZsaj",
  "key8": "2kjoJDXTHxfyQCiW7gcDokVi61UZTzgbDY6tpYe74yW1nKRugpCiENBPnA8mJV4DwswTY6uZ4Qd8n2Rcq5cKR8Wk",
  "key9": "2duxufYgKgh9st3Y9QeyZCSpAxJ2ncihVzcGf9Z4GSZTBTozNte9b4aKD7iFh18NbUvnfmzxLvS8F14mHGGmAPB8",
  "key10": "gLqprwWkrRrbc2nv6y4Z9LjvKimjAGujeh8tTc7B8GSqn1zEb9xbEFsMdLqahRPGLRVY6aQVpVwssZhfSb1tHxD",
  "key11": "fbY5ZUXihAoPmnuabhRnKkvkfb8ifQs3eQYRTEKpJaRx5RUKB5xU833CDHKb36Uy5SH4JZdTFUf8Drd8Z2AefuU",
  "key12": "nVArcnVJu46PyQfxL7Xg12HfeoGWXu4JYjsEw7wUHBahHhtixV1T3uSb2Z3wG7KYFzWtS6dfBG7mwUzJL9R9tDo",
  "key13": "WLTKRxnoxWB4C6nv8GkgWjVzXEJJzRPTv7WwC31L3t2gqCM2CsQuk8fMrUhReoBBZf7k6Pt2wMig9rHA62fjLBC",
  "key14": "3EKCsAdFWAdL9WnitU32tuwy2wJfA1ppNxWF5c49KGWhnYEzDcFRS84QxpHiioxBGpfsFv8aiQHPTwTzDwgjbJg",
  "key15": "5wctGJii1TMzEmibUT79Xxo6N6siggRrj7bt8Cb9qjStzQZ4wokFEAAv9ZbCCTZjQb3coihA5MviGQ4PN3mw4kyV",
  "key16": "AbrFCzSsVjLUr2fZgGT5XRok2VQhFLS644xCSw4PWT4xi2f2NkNCbMV9sKfTErUCHrkgKH1KHmfSDNZX7oajvwL",
  "key17": "2V5yZT4XPHj8vbbFeYhAAjYmp3y8PGdmR7JCTSUe9Lc9kA6FPVuXEPydRMHHzvPrQC2teUA11UBmnTecF3iEtKgj",
  "key18": "5HYoZ3VmiKxG7pURDEsXkTKasggXTjQMQXoBjZQK3Zha44vrpGfq4JvXuPjhNoz46RogbVR1htS4MTL7tRqbojUb",
  "key19": "2eeHddRy12gazTAEwX9g5gpTdvSGfKndohByG5mQDQXYYekiitU2mvBbf9hktDb8xBZ4UmixwAnr4w1uDpYSxpbF",
  "key20": "44F8LzzfZonvKT3Zs2ZmbMNHpiWApHsNF8tvTzVDA7bhKyY6YwKGVcU87YJvpAU2HBVCjBAFXEdwZ7vHAC9xbhQn",
  "key21": "pyjQdG2wGjkaAE7uj9GX6ECBQL3P83GHvRqpZhiwYp36xD9x8qbusAtCUEmCCx5b2X3naTPfD5VJFvNiKv4QrRf",
  "key22": "qs4ACpaj5feve3edb8qL3S435yGoUpSyiMKW4dq13ZGrHWa9rNxkoCQBRRxG1trpToihuc4vfN8g1J4mG3BP4u9",
  "key23": "5ESB8u7aTfGDPqQfwxkYnd5A4kLnxwPZzNdjDRoasJ4Vtzq2rBWxBscvEqJxG44gzf5MkGKsnJAwhCjWbgizxnCT",
  "key24": "3U9p9qnW9UTP7rcjmRyytph5YNqRVk6a7W5BeDVxAFCYdjgcJuzniWwHQV7ERHdFdUwQiHCMomPZXK9YDxWndW4v",
  "key25": "3hZw2NcqNcavC9bNCxvo724UQKbVYHqufpBDrMG1mPhZFH2dxFokKThipw5nK6KSS1UsNubqJPwpVRSLWjQSFPn4",
  "key26": "44cwyxGtcHnPhDKbmSiGQZ7yXTBddzH7PpwrJAWk9Jcf7q3iBJ6man81a5uJbUBtj1h6B4F8H8UcGibQC5NBPqkc",
  "key27": "ai55N22H62bycb1s9ddUAXTWGFpihyA1km4ykNBxqLPDoyzgfGVNrkpRFVQUwsJRp6usNCMzSggMKCUPA3NFGwZ",
  "key28": "5j7yv2pcHBtvd6xq7quXK6eG3ikcfKxdyYpHw28FKw6Atf8fsfdYHgSF7DGyNhUCmZhvbS5KjUHU7aNy7f249fD5",
  "key29": "3TUfWEin9Em5UwoWYEFYBYYaDdp9CsjUaKea8GBYXxVpaN7xKW9hodWmmL29AUoijqT84PqH2GJQANZQzdv7airs",
  "key30": "5epyFCT3UhXKwXQxZue4atvaNWfuBxFxVV7gfesaNWec5daTFTuCAsHNKqEAv1atT2ehpsG5BHzig7nYPzK4z4fr",
  "key31": "39E91CaCXxn42jCBuPqVrmNDmUGCP8BRRQNWQepbbWBbsgbAHjbKb7J9gzYq2ergaB8ShezGXk5vA1v6WJ2X9eUc",
  "key32": "2g3RV1y9NiC7m9xFK5rzZgxy6ShrmNAvVNSzaS5cgYKCyd27Nht77j2YtSUXZ8t9k1GcoVH9vciUbfEC2XZNtxe8",
  "key33": "5FcM3FFsiGtpHpYRkRiYuSKxB5CHEswnTyqZybda1e7U7VXcGFQhH3uizE4XvupboWcACbWwbVL5E9hQT3PEjgoX",
  "key34": "3rGZVa8QzactHz7wZz9uFAFDepKoHgcZMa11gwXkqe3kFTDQ77BiLupohSysE6bU3S5CoTmW35x4hSBbedk7pi6p",
  "key35": "2czY7UMZ5jb21CA7QNMz9gfVwacYCJeF1oMCii5r2uRFcpJaDtB5kUo6fRSTYPTGtHghmv19PRsq9bbVDaFxFpfG",
  "key36": "qgeM36Kx7kyHSvF2yD1Tp6fM4uMPgKV3JPK8XQQZUJ749hbasmsW5wTVakbRX3vksoFSYchfYYhCF3NCfASf3oZ",
  "key37": "5onrppFHQ4F6LgPZfRZH98dE7KW9RCFAGp3gsqQ7kn1oSd1nmSuH675aTHQYn5kUfamEZZHfkcBQ5zNd1c7Uxo72",
  "key38": "5SP6XqJkuLdJoU3LE7UAXoSRJbgN6RfAaRFFdfwwzzi9PDu7ugtzKUocKWdafvYxKCQoDDmHqhCMcuLfUYYb6K9Y",
  "key39": "4Ji6ywSow5PpWg4GYhyRdCE2qTsR9GxGyDetGvXj6jmtY961utziaxv4d7QbESzk7j8UWya3hi7NBG1ydAC66V4K",
  "key40": "5HKczYGQHfyX47HaveanXZ82V48H9Vgtj1DWSfB7EtrjNrGUWtogdsKyoQdVX8GdyMkTJQotmNnHfUWNmG1hkjh1",
  "key41": "5vuxLgVfQoz9JCRPYFapmGyEGEopfnscVoFfayXmipXP5SMDDKhs5YyZCfhjDME9MmCAitT4jGLeU2Si8qg9iAka",
  "key42": "29N48S5mwKgPtvKzkezvzBfAAj55EtBgDRH66CKzeU7efCBBMKSBexTqr1JpcDgDQAntpSf4MBnJbFAqxxZRk54U",
  "key43": "65hHn1WT6VmSGoeTg3qTtvkFv3XXE4P9euyfQueCU6jDwquJdLQBhtMsmk3XQnJyNBeQdipciuCjaCVLRdc2FjDf",
  "key44": "nWJ9mcjZZEkhvfzSLW9ughhMbg247A7sDD6W9uEwjgYVyT5HghMYqSgGUrR6YMWzd58LYQEo2xqeuRYQB9hwPKs",
  "key45": "VSbLsKR55En495kunXGXqNphDxCANsVc99jD4ztp1UGP2tD8i7gk2TC7j4HhUNo2gde6oE3Rh5apESiiCxCce91",
  "key46": "47CRHMZcvnxYjgcJoQy3x6K5xAi9cvYXAzmCtDQGEQZSdMWYGvLqbLmgp2EHTJQtZHwc5u5j2hQes83D8usRqQY",
  "key47": "eR93E8wQ1pfDUzVoX9d6TBgv6tADfJWZ4V48ubWGd5VoAjrLChcQDeyTfwWkxKkvoyCiDzjQjDtCz9HWAvL1UZ9",
  "key48": "UBY2JC71iZWWSTFrWfNFv7m5GYEFJbDbzczjbQMU4YYK4AXbpE8t2tyk8nVUJ9gnWdUMzbCxfzgVfFRfPYsdANw",
  "key49": "3GqsFBWDH4RGJ7sKpAUPcv87LSbs1er48ESw5zLREirdGbSKmYb4ecUaqzqwSHADomreKZXHZqGUEBm6t2GgqxBW"
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

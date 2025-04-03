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
    "5YVKALnTQ43XWq1EYRpai13ARzs2e24fnQHBXHMqWpVU7am7qLbtJqzsb2CvDg5nG7bKgrqLXbomdSerpFizJgkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tqDx1QevgiGdipyHEwTe465gkScvAqTUe6Hpqt69Yr3ULMBehmMZQLbxXqg9pEqZrSuTmT8SNh7gkQsehfteCTU",
  "key1": "4JjqfvfXyYvA3rQrmiRE8yknUJXY5Tgm8bTMTvPz97RGoghJBi2eJDt8KYArCmsoD4aMfvn935N3odvYdcseFgVL",
  "key2": "2FaRqH9Z8HSFeDdVH3z31FKVXeGhuQAWfbXUUnAWp7UthDVkcLG2d9mBswZXvAEicQYRP35bRrSkDtBux43BdihV",
  "key3": "41w1iQy1WpuhRm46N9awVjJarFwsQuX2WJ7Ha4vsNSaVLKGYzE37BVWmSi9gTB3EJHPnunDKnADcoiA6NtC7vu9h",
  "key4": "2uRyWrEJCQv3Dk4pyXE8PSidotcTP7NqNx7WHiBYMVwJBtmufX1Gj3JJ9aMji1e1sULqdzKkRmbPBRoTqf69q5kG",
  "key5": "2k44yAquUDQLhiyXm4r8FHz16kzxF6K35jyK4w1xSu5bxmKXFSBm6kDjeJgtPffG4QjXAsTuF1TjZUiMSpMRUSsK",
  "key6": "2mL3XCcsZxEhFSA1QSR3gqPpSc5cTon8Qwefg4vLCSh1fYuvHJAmUc9VPsPtqQhT31hMdjiEXuD5A8h34QcQx6QP",
  "key7": "4s8eXExKSR87nJQ2JytJ4iqdsGyc4DrLHG21jR62LKogRTooVzQ5uypcgDwTDLN5FcLmAvthiQXnAekegyY5sRxN",
  "key8": "4xDFzC8xuFdCYMjm6y4hx9sjb36wHbATHj4CDLc8wcbHgqgcqpnmd3RMWYwdAARwTTAn5Ac2WYrZBJEw654S73cN",
  "key9": "66766RVJ9VbJ6w6LS5CpQu3xtt8apBn6PVWxq1ck5YpSwzN65QkXPSftSpNof3AEo1w2WTTmq2GbC77Wihb6CMv9",
  "key10": "2VVwPSV6aefHD58ZzHzGR8fthc3p2SzGkvG2TBPbcT2GxBopUFcqjrFugo6VMmcgbxAHZ25Mx2SfqSJDz7UAAqdB",
  "key11": "2yTvxkkkJbDgH3TU8mAyRFVUu5bPGC6XebSX16iFtFCsH66cvf2vvqSBVwmtALpVNtFAsqSYhzuvzUq4iHxzAYcS",
  "key12": "3VqP4d2weD45sWCoqQE4reE1mhBmpeDve2SurcN1XedkxYxwSCPRdH5bj4MYfqDobkXPDNM2skJfBFQTzShQEtZy",
  "key13": "arqxnZuRqVPWLeKjUZ13C9iYjfh4YuWD2uocJkXheXbLS7ENSRXkwfpsBuuAzdUCA5q3yUck5LYNp1wceT9astL",
  "key14": "4ejS5HwzuwzBWpHbVeGkXCLEZrErkZcFwGqbvSx7jKa6o1gx8G7SbN9yhrCRuNBRZBAzxT5w11mJt34v6VvZSFJh",
  "key15": "A5k2jvkmheEwEiu98yjwsasRtuYCb7PSR939pyV1XATV2p5z4h3icbnfBZkHTyqugEmNb6kmMo77CHzvuyWnTJr",
  "key16": "3TG2H5xe8XvL8rL47NRz3jMkVPyusGFh58up2Geyray4kMhYd3iCmPj4dMUuReUDareFhr4i9wCxExv5Q8W2dDhj",
  "key17": "36UBpJrwWR4NuemuGqkKoJ9vfaGRSWFTC2JPexp6uk7Vef26F8nCBqoUUduNAmfcasYbwHxo6PuaR6px4FqWbyZn",
  "key18": "5jeN5gaFYx6yX8FUfJHhRBmKGnX1Uk3yJBUqQDJj4MaTFPXp65VKtbiNwkoZsWBb4EsramzuX2KANRnDArE9C8aD",
  "key19": "kqCo7juRQJYyMHSxFDKfQyCvm22Wmc6r3hc4j7DxMgpwWBCUu2dwh9jpQizMZEMHMtgnXuBuL2aaPPUU4KktE3E",
  "key20": "5S8zDWFgWhRR7XLfdEdXnc4FeFLNvERb9RpTZkyVt2ZrvmhTApCYDdEzDrxJXsupg8r1YxQ3wriQpbXHfbGS9KBh",
  "key21": "3sE6qRNtUNTZQm93VVN724qbx2vWUSr1dpsctezTrh7C48q6jYnv2ebiZj2rZovVMYJYtxBTM9m7iJFhk5izuFZb",
  "key22": "dv5JYMqo6H7nPLuMLLVWTTstFD464qUf7i3gwycoXNfVvm8jY5y4jj7HqWhMMBYsvFQxNWkAa4zARWd4bXpRcaW",
  "key23": "3qzTcZQWzuX3tW3RRTFYBRRwQocBmcoBA3W9FybX2X6TxTndNsuJofz6GpzfPAmNjNhdX6VZtuC6dgx5epKazkRB",
  "key24": "5VHkb6R14h9KiUYqXJBL6coP1JkthXUd4jTHPs3kXDeYVSrd3a7t5e4seRX47pq4Q4HjLtvFbQxdByp5A55w2qfE",
  "key25": "Cyizzr7ypKFvihrQ1vSFjWeHoDNZrG1nvgHUBh3KCnZNLZuioeZVSyAGFLzZC4BGEQ1V5dNZAyGzVEVRKUyxFJt",
  "key26": "5h15aQCR1RcEwQfW1eXssgkb9SFCmtoxdMQoy2NErUzSFW8nhozV4qJ7D78jXiSY29G3wYsRkrX6bkrxRVZQ4iHn",
  "key27": "5tndKAWRM38Zp31Adf1jApCGpeFD9HkBiZd4X8ThF2y3bKSzYUD3Ag34tjrzxLrhx9wAR1NGt2mMoPockbU4tSnp",
  "key28": "2dyRHn3FTu2ArRXpYgcdbK9cQFnJU5YBfmRz5baALgA4WNhQucdijd3ZKUnvmuFeK5s3vkAMwwxPuF4aeGnJDFuA",
  "key29": "4KAGjT3RN86pZxoKDFTjDFh6QmELBT524g3pUNE9sXPz6DgoxqjizX58rM3Cbw14Z7BMSUzWmLWSedFJhooBNv3e",
  "key30": "voZFY5NuY2ED3NepvWU1DwnPzVuTAEHVB1dGU1fTWtVGQaAjBiJo2RhWH9XtDTrEcn1SFAAyj3gVMuH34uwpGCm",
  "key31": "51J8XK5WWQsjakHZgE2gPdyhedN8hq5QQJ1tRGHkFGRXDcpk52BSQ8u5A9jRsgjqYxaEMNVzmpGHcpDaRZ86YYZY",
  "key32": "kkRokNQKjHhFVwxDzXEqVfRXHSrAQDqbJcB9PtUPVLn1QTiUwf1FuyFjmjPNYJLFmjFc8dyEX68qFkCj9x5zXaT",
  "key33": "3Kuz8tLZht7cAtU7iHcgi3TueosN6fJVXGFevpxqtacrxt9JwjTeFKaf1mMMvBXtoT6YLHmAcFRupqVVUhcmMJgy",
  "key34": "2qsQee711xJa3yFm9NfC3nn7eaENPZZM5cwkNqeJvHKPZKu5mJmjsaBXWdktRbeBeeA3xDQ5gGyzmnqEVVbB3547",
  "key35": "5tKux3MdyAEHYoUhKvabHS92kjqWvShB2wxe8kSAA3BrZwQDrgRaRH1HCNRRgdwTMDDm4rYU924pCXhpTnvsfi4k",
  "key36": "5YtSj7NSB8Qd9nZLMvvKq7dZZuVNCKJ1GcMAFgZLaVVh4XDApikbWAu6Gu9D9P5c32m7CrCCNvzHYbzTbBDyRYDA",
  "key37": "461hMzbED5qMHvXedRYEHcHKohkx1dQ1HcG7CadKeUuyeKWHLz3U8rWax8L1PFwRHKEHDAFedYgAaMhZnxTLmDPq",
  "key38": "5jRdvHmPyNbzgJUKsMPs4zSJKu4YaY66nCa9wmUvnpqnw7j84DfL2o9Aamj65wbULs66o3Kt1fWKBrkbdxVzi8id",
  "key39": "5R223hPAbgjLb6isZ2pyBjZXRkgzpWgEQwsLWb2aobSUSemDKLiBg2Z2AeL97UwiV8kuQBAXdmumer4QPPcvphs7",
  "key40": "414fnuhkFw16ULR7c32rtG5CL3CHNxvbkYr94qYQJ41vb1m9iwTpjW2Ghn5KrXzmKyEFQxg9WZXZ4DPYSyBf7fFW"
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

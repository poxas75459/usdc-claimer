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
    "4BzN3TxGdxaa6F9QProECTLjv5nuanNMU5C1JVGbe6kCQBtYXzrrkxHowbvZZ3pwt1xBcWAZb2zAfTkVxkyhHaUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xaQEKdZ3W6r8Nz5KpDZRQQj8P88PN3ENc7vznqFaNw77XNsNw4goEG58z5mErBrnDw5NRgMHudUh2GsKeh5HWxE",
  "key1": "MJXRYryeLaxGPhWjR7C3eV3Mw9iR5x6w7Pdq3Jutuucd7HnnxaooffHea1cMAowt79rDbS7TxMT8N8arHVQ6jCt",
  "key2": "5p1sVeNCuwi16jGMmsGR3DNh8o9BeJzmtF648XAGRh5Fx6BfWggV6YkTM7BGniiD7ZUusQpQj6PgYtzxBzpoQq2F",
  "key3": "4sou7xujj5XGKFqUwqVxWBDkki44LArcae5BAQKm7qv9zb3uGTjCk6Mq38NwLmhyXJmERTbm7txcvGEQVbmoqouS",
  "key4": "2G5fVxp4cHfjQWbLzKMQDdGwHynesYe2fyDkK4HhQsjViiytjykKcKqKCnzK5TDKyES8YJoz9FGH9MV8saV5sdn4",
  "key5": "51vdQ1S5ogSMsQ4TsgZNyngLSDnM45ynxZw3SYebin4taNKuQqY4sbdSEjX9zXAVMZnWqEzFAyt6515gBXtfPV5k",
  "key6": "4PyJ68U6VRXLXF2PK7u44b9JXAD6R6kE6DZzB8QJ5HYNQEWSKhGYwk81pbjghmvN16L5SpcEdS5TkscZGf8UAGpv",
  "key7": "2jP6u1VkbnrGyrLpWL99765buQP4CTAZ4oQ5i8nKWt3FSYMWYg9PmkRvVSCk5pNh8fT8kPxZsX5sbUUYJxeUvFD",
  "key8": "5QgtDt6b5XaCu2eX5dPX91jZ5Vy1hBpFrvyryD7nuhDwdBeGgQVBvXVY5QYMXk9PS7Z1wL66S43dV3Su5yVp4Ag9",
  "key9": "qP5j9k4Qoprkqh63Zgo4K9JyRZCco6arSDwESf9cpnADKVKGKe7WWTgwsrxTLFtXZgdyDJxQLWAgkk27npovm3u",
  "key10": "2hnJz1KcaNLuCv8kNuvyA5tERmXHhwYzyPP6BB9YdphZqkqvAQj5kvcooMUdxH2cZcDgVbsoGDeAw2mfAeqNQxZL",
  "key11": "2vSZEeeuXanC3oSGfggkesZMNrfdfEGhvrH1MfZ2FAh4pSXN7LEQXmibx5DhVj9WFBwUBSAoUydu9xPHtPCFMEf6",
  "key12": "4d9HvaiY51uVykp5t9ATzveHtFYyPVXEuvgycCqyjDxQ3PF58iuDST8c3FrHJaYfwb943QJgVV9FNisQuxYur8YF",
  "key13": "eJX9SmMe8ZAs4PoKQSqVAW1vKzXpgHtPZ6W7ffjBaTB3yrhvieoTD6kHbEVUWqiiAsYjvurpgWciYncLW2tfdYL",
  "key14": "3QZrHKajVzqT9G9gftdZyfhCSZoYToRsJVKDDLUrDPSRSprEde5jeNj1RQ24bnmCHUWuvRPVDVshVtePhod5rYLz",
  "key15": "uWPtgz5u8XjCQe6KRhz9hBCkJfsmrnmhSJqAd8BR1yPDzu6FEFohmxSS72d42FA6Bg74z7c6TUxCckKkEoddDMo",
  "key16": "63tBU9euqTpQ9HKkLfF8KQ1zKmbuLfArDXPJVACLuqwVnjwRrwyTzSxJDy58qoobKyquWeFHp6ipuivpLHCJ9oGa",
  "key17": "2WVZhrpKk9QLrWKBYYyYg8qMeChC3KGDGhuqZJXvzjfcQqMqpyN6c7V84ZjpttPLsTSHiCQ6vRSxigXRS53EY8KU",
  "key18": "2ZT4ZN2ensBUjTDK81snGwtZAro22o4ST5aY4c26NcbYhwPdButrRezPFw186kxwXPhTc8EZb5xkotTQfdL2ZXGb",
  "key19": "3uJuF4ZphUgcLxRbXnv47zvRavM5vCYR9iiWU7tJgkyb5EfThHttuKs4xPtoUA53Y2P2YB6JNXEJ2y1p8cnDZ2xp",
  "key20": "4jbYt3ws5ajN9oewgGmAc223pPu1Q8KYbNdooUbFofdWVSSQ3Vih598JbsbzNjsMFgPDq77q7zuuzTTfSSitCYAA",
  "key21": "3SKhrm4bKA4x8c5z4N4dL2Yr5mAYuLR4GqDc2mVPp8GuMBPEQ6yF3zK91fUmjWT7fz3UAzHhU6BespvQvRcyoYKT",
  "key22": "36x9CyebKwU7mykcwjgvb8ywM4Di65eVgKGswbm9XGiYX1H8FsyUiR5BKm7mAusfAUeWCUbkmXip7irUjupMCTq2",
  "key23": "3EyuYq8w4rfoB8NcRw8mPF5n5Rbtox2UWEobrFFCUuBKnFjPBgocDKE4D6BK1B7r9BaD1cq5dWvVwSCoPE2VqGrz",
  "key24": "2A5F57ZriefMaZrMVecczrqyHu7VYnMFREVRc2pc6fxLVfq1HD2AXUkM7LMZ3amTdfiR4DsokS7anBR77Rymithr",
  "key25": "5ukQxkuzhhLwhjoyXuwxizq4621Bmk3NhR8xYRAcCU5QBn6Y2Nvoi6pzWju9PYApFUuaD1YFj3isVsMo4fb4NQa8",
  "key26": "2eALyYQ5WzWRQ2BnYQJZLVHqQEEhWv28HE6y7nehETTrnU79RJasipKLZGSVr3meTddehjB6JFYii6TioUKnnFNQ",
  "key27": "3RqdwFUkN6GyoQz4jG3CHU7MfBzVKwnPR54N9amJq8VGbXvek2Y769AizeJMnXfCk6Qq8qXTqxRvJrmH9puv4oo9",
  "key28": "2aVehoCv6FHyLomBuQdbZHN5zCQHkFhQ1EdE48aGUQ3a4AYf4tH9rj1HtcKxVof5HhH3KW7ab8y8KbHnQMb8FdMG",
  "key29": "4K2G6x5N7cDQeFur9ipFrCQ7iFFjRkJfpjx9FPNDyxpCDk8nc7XHdTmonxoFmdXVviq3sgiNeTjLQG9rjCeu3RCs",
  "key30": "3TyHN2hgNUbpxTyucdWq1wH8TjCye7oUFNd5h758X9DP6oo7Now1y9qCY1GBiX3vq4saHNGt3e54dEt176Zbb4hD",
  "key31": "2Ku1qR5xN3F5Xkpn6rPpcmNE38D9rwJua6yh8cqgqdjwpkpyHvqvKYEB1xvF9fhGxoAn4E5QMofJcFDNtgUGYBwu",
  "key32": "4bLnyLuZ14dDptjBB2GZkUFcD8z3BrAUae6x93CFkcaEFyQYYehmCaWsfmH8WjGtctHTdXC3aY7ZsgRutwi8dHNU",
  "key33": "FQG1FAXe1dfGum8jyXJiYrzg6aGsBb7F1rZs6AjtdQBmct3j9xYdeFqiHqRZxMtnSKYWRDMyDhaCkUC72npo2Yj",
  "key34": "U7stQywEnzajN5WMa1fRSJiKdKkEsTim5JDRkwACREmg6CZqPHD7ckuJghobSaYcfE5f3FhrTxEXSgJf5w7oJTd",
  "key35": "5Bciv6Ub6QkdUkXig3X6w3Vk2Mgn2gx5B9YNgg476P2cuKiiJ7XHhg5zey9VtCWLHK63TJ1ayeoPfsn17agKzLy9",
  "key36": "3vTmR3kYhFDey6BDFNjLdKEqbneeG9d95w6km8DrypMC8WjpCr4oknxAvZpRQ1xPBh3DAAbV1NVc1FKP88UPEBwS",
  "key37": "2dDsazRH9K4cMrqy77DUjSFcUn63RDTeaopotwDeX9dvyWuS6MCdMWdseSCCZgVwpb9E7CzicuEaRat45yc7W78Q",
  "key38": "LQjCZruWscQYePf6hgkoyhicvg7fyijo7sd2faVAZLo2jh2KTP8Fi931DBTpM7JJuPCM1Bxb1zFYmGGoRBK1EaJ",
  "key39": "3Ecae2q97uDUEapwCC31NgQ9SVzn2Vrv4s6gW8LFwb8YCyY9xFn5DLHAETjSkPAhuzWKEnztUBjnQ3yySm6uE1pS",
  "key40": "5ZSLbAduCyJdn84eXYGfdvhAnw4rcyjGG2vXPaeJeJmNzfmVrZyVq781T4HDLeptbv9uVuLEnv6rs8vN4FruCvs6",
  "key41": "2LhpZyEFYULh5DzefVG4pLEGNo6fCw3L4532gSwwZ9taB7SGgjhhhsvD84Kn6MjhmNgyUhMDZrpZXgZ8DwMitCES",
  "key42": "RkNecpdKmMxp3nKsFxpqFTpScQq3z6tELQFifGboBARmkuTMWoob3ULYbP6sthxnA1n23vru9ZmaoSSZh73tB8K",
  "key43": "4ps2BnpBfq2gaErjJ8EnBohArdqZg91ReLWGU15Ya4VB67ibVxhTXtwUzL516Y9DgXuEUzJKGcqunU8N8VREWC1a",
  "key44": "65hzGgFmJhJMPHCwe4yJFRpG4MQXZG3xsuHPCHWm2tcvCDcFe6VQvNM1wBqe3domkzqLcL8CBmbstB44pTihDUHT",
  "key45": "5Xg1n28y6z7fxvGAKDF52cGpoW3JvGiJBPn4g5v4555ybYHZYL1TswnNjsaXE3V7MgEo85jW5WyxfyrkTzWZ9Ap4",
  "key46": "3cw4PNsRgPj2B2nJzFXkNK15Yv7rGtRfDrEqjeLWWSNiuvTRn2Nbe7UEEqifvyQyW39TxCAg9oirPu3xpovpVTXY",
  "key47": "5DJMVujtckNKsE3BMoR3yXCATRb8uoUynfSzFs7aC8BUoVxM7rNG2ZXpS4Ph7iNQJ2RRZ3kpcbafovJZPzHuLFvc",
  "key48": "44FnGhi3L8e5XQWVYWv4gnpmPZRuAMQbxyXxhHXqUHoYWa8XZRYZN8ZEBUWj2DRiggZy2iLpDJGRZfnQVFcnX69W",
  "key49": "3i39dY42iinVZT4WwBQRx1JrqH2zJMDvoibBqNhBvVV8TeAf6hJzTFojnz2wYr6efSD6U5Nf61LMWDEAed7RP54k"
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

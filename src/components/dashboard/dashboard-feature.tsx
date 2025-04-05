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
    "2yhjca33CzcgGRT7joZeRGBucEn243TpjCsf2EqRSh3mq2SrhRMZnh7cwUKMeacFwa3ko4XqmEQ1jwZeH7ahiRg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKFZ637aEuD6WSJcbEVasDnQpjhRWXEqQcGF448Rcq3g5jQnjHdPd5vEv8Hov3YP58F3AM8MdaRDXS8fiC7KPzW",
  "key1": "minb5hwTRFE1HKxabG96zMW3aS4eUPRFgqXruD35n4hCVru4D9H9yqh2mWkHwvXrZsTbEgd6VWnRuQJDY2oCtpY",
  "key2": "58VrKE7ftGLBy94ZPfwjRWJWZWw7Fos8T9jkeUDvMLim8Rr1UUn8djCt7PAkCg5gSjDJ7rEvFLb52xTnmCkRifPp",
  "key3": "2uCioh8EPpUz5HcozPpv46F6Afs86EVPqKXwVXbuQBxnS8LbkDAHnZAsdXxU1Z6ozmgc64HCdhmSWaXMwXbzmcz6",
  "key4": "bDNMMvSsPgg1BGQA6ZdbzSvzXMNZnbCvCvVdjY54Sz2zoVssCTEHmhodrvMADpUxZppFRU1pub4czYo2REtwQzU",
  "key5": "3WCEtfJZbDdZo4yNjwgWTuGt8WXZ1f7rm3VbA53y7kGXMaPFLkHeTNmgmvgCfZonRnxKfm7y2KAdWYinthYm4Kwm",
  "key6": "2nJMmiWzWFmVogyuxp3Aho6vomTqYhBwgLbf7nJf5QhFVZyvxe2WAWViftp6GdZdypdRw185FAViCQb6rkdU5Yqn",
  "key7": "kD8Xqg7G2iFfkQyQHPCQBSa2VyzK4SiPxwkKzVxWpmmJJ3fLUaapjdhNLZyh1fbcR6CnboH2NMuoaEVrHo93mEB",
  "key8": "2v7rXPXboU3uMshP5uwa2XkPCxPdEZ3bDjefWa7ZTm1A6PyU41GZVmMzYdBphHKpMJZuGc2akd375Nvjkf9nFsyY",
  "key9": "4zVxpXzYyc6fEu1DuBwAwU1oPZHxGAsRnd2XBD9Rsr1ujTkyLbZ6c5MbKpKmCZLB2Cx3WUqqyf3nNsmuyJKggd7F",
  "key10": "4mcymxutzqV4ixf3jdJ2yjuMAfdGKk1Hktaj56b8DRrQt1QgrTWyKrJ3xdwZrHbUUYimdbzmEUgePHwKuSjPzSo4",
  "key11": "58fAHA7uKyigrwQx7FM4DcBQJ7wbdxP4BTAyJVNajrdc2GxNqAqG6WL4dAcN82mnBh2Tf2faAyc8KctGqkqmKL2H",
  "key12": "3FvtwDrd3FQSJooLKv5TahY6VG7nnahnNgS9HTVURe5rKBrzEsyjaNcBSne2vG2txPvN4FN5u6VtbQx2GVQks15q",
  "key13": "5ia6fttAMxTYAQHkfjsomiqiwjhkDsP9ogYfn44yCaQ7NL5U8ivh77FKykGdFc57ms6wqrUz3xkoKmEcKUsojwUR",
  "key14": "2ZPP5Ype7a6qe8iamqehE2aQR1ZEtcaM5W7isXY7VWSPFQCbHfm5ujvL6S113mdv8cxYVXxGfKwpAeVb7aT5JU8F",
  "key15": "ni8cCkFcxfnJs55YSxVXkeby4U5pF67YZar22KTJDu4mkXNpG1dj6FegYsQ5a8MZRz88fyE6JGwMWt7znGFgs8Q",
  "key16": "3XWRNgKvp9EwqjFFmX8RyTBgjptkVaiLGPV4wqMspKCbkfsH1XV3EG4AjzXGFGbZeVL1JHxnBEMU4s7ZYN8Ek6Av",
  "key17": "5juRDfH7sCaEqaK5xNHqJfCKy6XJbwMYC9qmcimDhnXXAyW7VGkw6Q1BRgzoFKaFokbvhA5AWHmGMyDfyzbEnTex",
  "key18": "iikJtp6w6yd1ZLrJ6AsAdzrEMS7TgwH3sN45ZmGavr3YFBqJmowH13PiRpfYEFY74Uz1RtQnpo4ZTbrKeUpAKtp",
  "key19": "5TBW3W3pVtsMH8acXVr6q28W8EVcxVe1AcGmRn8w3BWtanYQseSNZwyfHUThFsAGv9i1Q717uE63hs43bXcah1Ni",
  "key20": "P31eS3ZunARbUYptw3sudp6oYUqyRLHGRa7csKZCbqHeLWjmDgQh5s31wnCuxitjhq8Ak7pjgKSB6ADEkWnoYo1",
  "key21": "5PTYhChsRkAsyrdJs5rr3VYvqnPw2BCXNWbg91eiyftczCVpU39tCYMFG1xEokZ3zdhHz8Na67Gvxt1Q4tv2RRYV",
  "key22": "Ys3LpnrauDo2W4YYRNYoNx3yiWKALGhE6XQqaqCrLcPaT2MB9gGSEXjWmFBgjTajsJew3beh5ro8dQyJKepF4qQ",
  "key23": "ZD7tMJwxMmjB5q9YG7W4QPfWKiR9HiCW3PqaUkQbvYRcGfywS9fcik9a76J6rcvVGhERkvwHnVFBaQtUjPDi36c",
  "key24": "2qUUvGmLVd53FUPabvBpxdUy6fTepXRKEAnEUQTFtA8EkyXL3XkXq34EWNnf1nz4qx6wVc1TCg1H5i8sBdFnyEYW",
  "key25": "5KiiJc9WcVL58vnF787PxLxR7pcMYMQYqP7ZDobPAkUFBhm6kGqKoFZUypqSz2R8rK5KSFfjStxgfuc3RngZ5aPg",
  "key26": "2xwFaNJkZBQRnHKKqXjayS3vGS88xJ59zJfDw5EeiZtAs7YtvUXNmBFVXirvYNJZkaoBdpUTzx9RGiW4YGGqpD1F",
  "key27": "4JmCHXY4F8vuGvntZQLPGzajyUh1qBTNZciHEHDKnCFUnXHazsXDTwb24hQM97brJDJVwWREwahDKF785r9QtRxx",
  "key28": "ukVM1ZVSaqfH6tbpXSfCacwWqYM9BdBgX8BArZsYmq88gby72HbT8PgGqQhUKgdZCCwXvgc28JWiPUDdJZbdbH4",
  "key29": "xsjjPX5MpCFDs8AYmfiNMgE1PnuyNBNN5m14ZMs4wtHGvDhMswcokRMeR2j7hbsSXVnPEgFYssUGbyUHwDf2G6c",
  "key30": "461jJQCsS6ECGfsHit6Jfjc8aCyoNEtQSM7wusRnFNSvu5ZX62N5eRDhWtBrr2S3p9Q2s3RVZosWDdo9ZUQQrgVm",
  "key31": "27EydHNpkmzWD1BCFDULBwfUJYFjzG6rr7KBkKpZsJmnBJShEZmtpNoUPwaJ4KN93CHip4ku8ga2wU9Cbi1N7rHa",
  "key32": "4GWaJxJ8q4z6shv85LAga6EjJTWfc7Uu9ngE7rrUo6ifdUotbRC9W1p9cEsrA6Haimf1caGEVXTb8k8VoiWo8cCL",
  "key33": "2N928FeTAsPZmQQtSoQhxTHUYHV65fkTnehLpXg8742BD9jybFDbbRWZ89iy8iHj7KNavNe4BoxJaGvkfq4jVut8",
  "key34": "Vjqfc8dppD9bpWrLAkDd8Hebei6Ew1doLy87MsdoYsN9sHLoTEnxEFi9VJbbpWWDTwDu7jDaAL7nQcTmhuXqB2C",
  "key35": "2HkJK7rZGvuYxeVxWNUn7B92dYSDmR3KGKo2wSXRjKpHRETqjULLJVQJwpFRqjEcKpziz7xqEyTWUQ1oRnpwYcz4",
  "key36": "5RjfSMm6x1MvbTEUdJmekfuXSHJfhotnBNw3yo2q1AQbSZtYfiUX5yY92tZpv6y6FNbxtFTheWQwe8fFW5jT6p5T",
  "key37": "63aAJwm7EXLHhr9WFJEZcKsUtX5RKDUxPirpvNsYxp7q7mAdproRHU55KzHQkZ2bJ7p4SNkuTmTuA5pxsx7bUfAm",
  "key38": "LpZ8rMs2ZmZPH12VAXqErtKMppuM1zDPk7ETi5tUJgN2SrjxdEZzrG8CPy5ZiZvzV5tyj8229V2Mv6EtyZFSEee",
  "key39": "51RVy65fSuSK4cS3xtkzN4cgv1QTjQEZ6HNwRWMw4xHXv6VZDGs4cfXJik1VtyHgdrre4eFszffRHUqpMmS9EG1W",
  "key40": "5tD4Te2Q8fcX1Wc8XkFdUQAdh1RmhffpRxbtTJhAtcTZ7i93BfCqRN5NhufVLL4CdZRVF5GarPEeC8UpbFiMS94g",
  "key41": "5RXMdV8vNtBujwRFEm55SfR75FDtp89SHjyi7VcwuGebGHAJABfvqD9mpgxg5rp6tQ4QcaXYL5oevWTtzzP6NoEd",
  "key42": "jkxdH8H31vNw7sTmzMd376TuYn81qjKK5xgj1kizpDeqkmqvStAEGCU1b7aW51AKnQtYVDGtG4eyoLLFdDQdDZC",
  "key43": "QoYZ6Vd3PM9HGa9adKN3SpUpJJUcZ5UG8jDQbWYNJLzjEBJh83BZ4rxSPXddj48RgtJfwwf25GvFPwiZf993uDJ",
  "key44": "2T5FtuP1JJCsDphuus2Uk5jVBNSFLpJj5te6pXTeY2MssfA3j6EyqZLf2PpBsBSsRhWoRMTHdETerYcnNQRysC8L",
  "key45": "5PTCkhHUKosVBMnCB5K8388xVaaVYv4GDFrPGmJQG9CZdN9esNG2suNHWVwBurs2wT9iUTAsE4PaYQn9yox2HF7"
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

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
    "4zTUpN4kUigSQtgeq8zesd19X3i7A49PzUjcKtEcxdqht9GdJ8NdXaMqnmL93WMDFb1Uy3iPMHKVDpMdAH2RdW3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXTuuhwX84n1FKvQyBnVsYEXCL8fDtbKs6HqTEAbZXsQME5NoVeMfJWBKV76zTiB6DXhSgkWX56PjY3ESESLi26",
  "key1": "4wR9RnzbsYz7LzfajwQEtt5f3aJ5NNKTooHDRxqoy6UCYYgg35HrfRRjHDV2Ka2AZ4bqt2i5q84quDSxiB6dKwKS",
  "key2": "5z3HRpeqwvgMBFQbdUmyuRbfDWfHvHuNMgwkey6Z84uKdD6nr6vdpWNDew1yAxqSQGFiVQT42fiHjY6cDRsBVwPV",
  "key3": "3N139BsHngXVGnYdAEqM9BK5HpbL8w8ky9Eb2Cz3Nw42fQdCviWCS8JgvEAhAavFNbXpx8e1AS7UNVzvv9Anigfa",
  "key4": "Xc8eYkrNBA56B31xAGqsLYLvkGqQSYSyXFdVW1wwoann9nUP4YwuvNwSN5bJWqYyEFwEZg9fQpzf1mM3FUcnBe8",
  "key5": "kcSoqN2MP2PKwLWZ4qXb1sL2aTDrBRdESvTKQo5knYtd3VcTu64tmNwZu3kvJ86U9CibBw5Sbe39QMbEZ6vqQeK",
  "key6": "28BRVEdhQug21tPAPQDWgeuJM4Wh5P9ueHpESy3zHrcTop6VTpGtmyVcZFa91CMPJmCGtXaHJmexsYy3qYdz1voF",
  "key7": "3gZ4tSq6TebRv69ATEC1EpZReDX7EcDp3wzGSHNztYMXT8LEVms3oaxcz1obFWw2dyFfbW6jgmzJT79ofpeNGiwe",
  "key8": "3PDyEtt8E92tqJzNPpGYLpWc2MGqSd4RjZREWghuCQmmpc3CcWLVrhA5csnx4UE8gevgwEa7rAAwwvTLCtmQmsVH",
  "key9": "2eYh6wS2H8Foewqcv7pNUeLnj2Vdp3hxy19iRYAX3ZRH3MYjWn8nivXtuPXgeCYMRdWsDHAVTAU1amyYo1D6mmcV",
  "key10": "4sGtGDhDmCbkUcuGWaXHzhzub1yXyaQ5xW46jjh76vwXitAgYgPLXeyA4iWQgxsHFDYUwhN1k99ikqX3f22FLbLq",
  "key11": "2n8vX79adg1VTdKSQJaZ9xAwTbYBSy5Wff91M7qmd4pxcDNX98wpzR6VPx22Ddo1UGzGrzRWLfTBMKkc7G1zpnF3",
  "key12": "23gTBeFxgeoAjVEqymc35cAF3R6YiB9gFoT1jbm4cvtu58HdGkY4e6jRuPmSesrsJTNYMkHEELyeMmFTPkiVEdZ3",
  "key13": "2Dk99ukd5PK4CkBxJiaBvFcVxHSGjbCq3rdGSazkLc5prdWfLGbbuKSZvudS6Gxf8XZkziGquLoyJ5oZ6TS25MY6",
  "key14": "462EyzoD3HMHCf397HTELPTBNfr3BuRW9FV4xzRPnZNgBwLt8Cw4t7UfJy9CKnfsKEMt3974BNAgRjdq55d5tWSw",
  "key15": "5Zkw8LdaCN7THrAyduBqjLRwvYupMuTtTAEhTj4h2u7HWcsai9Pj9yuRyEnMw8i3vifxooZJNE25HePFxzAoDKhf",
  "key16": "5pUVtrABHfCQ95wcpmK3AfEJ6ds26Q57XSM5L5ucvYo9kcd9w5Kn2qqUm22KJpySaGWFGzijeiJ4a2NfgZi4hkzh",
  "key17": "2ZP325ask6qgoRj89jJuVzdQgHyTUsiZjk6PkL88zNXvCNZoiCizRmd6n2uKvJHV8MvY1cjJDcVqjfB2i8CMQr3n",
  "key18": "24ZQdZc6WkkkSiWjKfskbZBE6KvPkHL6zxQL3Qc8oycor2pg4zeD1M4BJRJNSKmQMiwTkZSjYbxUStr67UUUDkoA",
  "key19": "62myLGLzbj3Fsn8r5Vq1yD6aZqqeAKKFRrY8xVQfwDuJEGSMfVA96rLHi7L3t3BFeFG29UKKrjm1VYCHaU4Da6YJ",
  "key20": "2i22zPQrAmNhnAYqTDa2KT8uvcgzGpcLmQ5mHwbKucrWqbeNBEmnwiLThtPRU3qvyBPHDb3Vbjjsj7oYdzYcWLTc",
  "key21": "2NYNXdqwpNeMko3yiekSUcGWKseakVpwvrQ2pNAhqE5MwGd5x6yqRVF6hhXyRfqZfXvo967oaxUrHhJhMYihm2T",
  "key22": "sArLskYtRfyPZACPzh7BfJ2mE6zF7RPan5AhzmStT5JPYZUxidWUnpZwfmWNtjW7pazhJA3xPFCKj141wsbfcqT",
  "key23": "naM2CwyfTpY3qDV7AYTGDDjZPNM9TNhDzkSiAf9STcYEVZxByEU8GrFcQGdekbRfaaJw7ytxQtpu55bMxKt9kk1",
  "key24": "3FhEjhBf6crEb3AdE5foD5FzXJWWk3Mg3Gi2W3sdQZrBukHa8jn73mLzFaNTcgVyL9CSGJw7ppBfNxo3dMjrbAPo",
  "key25": "mkEbMMgUVjD2DMvxeHrzRSxNHPKtEn8U9HXwtGdUGFeW6ZbP4Xw6fHv9pnvR6pNh9KgJnzrUaPjZ654vXPZ8ZVc",
  "key26": "mmMp5qVxqDnQoz3gXysbBdPL3cNDVzL7d2G8w7dcG5rNTHc2gcG1NrQS4fSXhTVGAywy2NqFBbYxgdDFRfnSa4Z",
  "key27": "3MkKi2Emh2FDmv966GjcmYuBnnweFbqC7aeL547rNzRg3ZpprD8CJ1xasNb9CdUQgs4CzsSk6NuXh2DM7Vcpagrb",
  "key28": "3J5CPsM1PEzAN4M8nutHoyjDtete9ucHYzSgds7ZyySPtW2GfhhT8BwTaDfU2RbcB5LcPxCSjh8ZWDTBqih1vTBu",
  "key29": "5yiCYQ3yyuqbWqMUUXXx3gye3o3ito9cRvMaUdNRWwQrBeiJVwkiW1Sg8USXm9HaVUAwCaf159vd2U2xBhH35b3D",
  "key30": "5YyU5RtGSPadc18rzigx1LhRGwAaukpxgST3evWEa14TQZVviTtUG8T28s3njtbXiejw5gaxk8nMnTWDHnZpCBTC",
  "key31": "67gCSD5e2RRiDvF3UtXsc2yT4bnW3hMSQEc1mZrrivDS9YUL7xGJ5WhhTwmxqzLHKRYEdQtEhNzcHAr6XDzMF4v9",
  "key32": "2QWyGNLbLpzyhnYzgHGh7hpbjhwsTJzittVywBhPadTffPSwJeevDUD4c5bugAEWjhH7xxDkkyDUyKU6AAtv7YCy",
  "key33": "4Qh1hkrxoAAMzBt1QzeGR5aEV1UidKeCwP1XHZyibQSgnFF2GbG4BWaFdrdytMoGRMZh5NhgN1wQBTvbUXP2svNK",
  "key34": "2o7ZwsG7xE12S15XgrtXcHFPZ2D2jG1Nrtszo2cXnQmxRPAuWcZZP1jerhD95kER9nsEVUTK8cqt6KZuSC5da4PV",
  "key35": "4pWYPLhyR3ruKHruz4T1GNFRieufazL9jgqZc9dqwairBTUoq8ZvXRQPuvG4riSBELDZFX34BUVBMzWs3swu6Lmz",
  "key36": "YJqLKsdeH8pUe5NJYxAez6MW8REGMVDXvUmgZGY3CW4P97du1ipmBAUH1hrFycfsFuzt1GBkojBQq98woXwZrPe",
  "key37": "3FphJ9yDsEoBA4xjLvxnoTxQDuqttXARLTtjgH65pLAnifiRMCrciduCcTPLBKm82dfjGjVdXVtWqeKz8jiYrK9P",
  "key38": "Fbk68YSfzUKsxQCEwKK76Qv1hqRVT2VUmEFfbxTxJKGjHeZtGFdDA3iqm6cSzuR9QK6Q7dD4mNyozeFCUxzNfqv",
  "key39": "2FGrYCS3y8PyVzBLsvfMUwFMmHnM6VtX8GxfnC2CUMvZavcJzD9oyR9ewYvxKVcACMtGgP979LBR2AuLEPTYZRp3",
  "key40": "2ijzYwXfFQouyPnsw7PsJjVJhWUiNq7WyGTcEE2vTATao3dgLotqpeqbm9tdy5SH1qjkJ7ZVXBVhBLPujAvxHKiw",
  "key41": "5MGJyM3PHYQ3x9E6AnsxgensFdbiQiJMpvRL7ZS5CRneR2PZ11A2XLJjeLYsGQz4wGPBsErRe5ef6Zeh4tTMMKee",
  "key42": "58H1B54f9KmZFJmh11PRSmiAAybFaxfAG1q12wYB8tKRQvWid5o51epdWAFco4emdT2Sa5R8ZTSoDFSyHMgjcRqE",
  "key43": "5GuavpRLS24uHBmQoQe7QjSQJkg1nJyR61MtEiahquswr286suNGDM5ggkQmfwoEirx9zmpwgdmUggn37tTe14vc",
  "key44": "2Q1Zbq5JmKDYudpF2VDwCks9xquc3tkdM87m8iJtRcFHu5g4tS5NYZGR4UNzX8tSNiz9Q16JoRSZE8yc2wEnrkvF",
  "key45": "ZKSqVcYGsV4vShXuVmZJTnNDuRgn6swt6XebPJuw2rYQCTJJM2MjLWDEJYJiWBYUi5EjM9PsvxGuPXFtFJLHX9p",
  "key46": "3LZynPBiWf115HQj1KEA9x1z3wJDfDGocLdBAoQ1PanAr6XxyoSgZQHwKnws7tUyuBGYkujBfkvbbDbamHhniL8R",
  "key47": "MkCmZzJnUoAMXcnKQtY2t4nYpEYY3TkDyz3Z315ueCneFQHAdSd8ncVy6cBrSNJZSWj8nuTgiwP8PiuQmUkAKJg"
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

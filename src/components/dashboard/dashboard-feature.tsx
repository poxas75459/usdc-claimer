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
    "4q163Sz5SuyyRGwaJxt8JCEqEceXQxfFaEQWPzQzLws5aQM9ygzgeKqAX6CB2Jzw5MhyasVN7kax5P5SQ63gvX9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dWmk6kFSY1rRp4QmiA9ULqjh2UNmhzpHNryjvZL6ucSisCcKvV8aT4XMGhtZGUxo4HnSv99sPTXhnMgoM5zDUky",
  "key1": "2VeYwY9yMhBVSyWd32MSzUzDWx8GyVBQFPoMuBR8H6dCiVynqDU8sJkzhfgYZDHMZjgJYopN56GPyUZcXfmZcLg4",
  "key2": "4tYMcio2vPtTcCAf7ZPPtnK5TZLWsCXzo2Lkc4kZHu2xqu5ednhBxaJw8RjgxpcywWFZ3tfRSjdFHnEoKF8eaz2f",
  "key3": "3RexceFsgtYHPsW5oX7sg5dMKzi43ZcsYDPQw6r6ABJJfKmGpP7GdU5uUC7cYMjDat1QGJcvBe6W3PwarHcDyhbj",
  "key4": "3AKZZMedK9NP3N77FtCifZUYavfjkBdJdKp22FASni3RGpJrShBPWvixmdViBc7ThwY8qyEWWNWUXF9zhJMLbRen",
  "key5": "3AJ7yT41bhqDkFUgYbBd1powvL2sa43Vor494ChmKtbRZYmnHtNzEJkkK2ron9bXGw5cYgdsqSFeRopV7fvDeQqU",
  "key6": "35Fw5taghDznKKgi5ie4jr39w92wpqFxAty3Dq4SjakNjdfThKVPj1ZSRUSLuGdT4PQQvNXHGTepzgXpd3GGqHgq",
  "key7": "5hjSiVPExm5Zn66JsY4mMmL6ALGzy7koXvYHBNYmovfiuR3ejZwq4ix5KYkpwtJZh8b6Ddt1nziGpAUHPx1LcLnC",
  "key8": "szDBY5KLKR8ie8aKBgTvUv7TJ8xwFBuqYzQ1QzaYoGC5nqud7hz6SCVfmG8djg3d6zbGKteZoWGtnDV2tKJfCzi",
  "key9": "2adBrW7R1Poc5BYJjAr8FJaLvx6rPwegEg3KrnaGJ4mQKP3JDmHVcZzGnwo5fHtZ8K8Yq3wQpcHWaFGb6Lb4XRSR",
  "key10": "4Mb1K1CN2DzaAQ6vL8GZJd9YbkKLqMMFb9TGn95AezW52TNV9CErGpiaF6XWqFKCi3i7dXa2prL9iARjj1LxRvti",
  "key11": "5mQeNPdUU3muGNoURMT6tZcskvCKdosP1D4CwK3NxJ9E2P548YVeJ4DDQs7mnPQq1ooAQ5Ytm22MvTNAmkDt9FM1",
  "key12": "5KBZ3TUiJ76ayRZ4bejwDM2vVPwHfcW4otdGbCFujfWarVm13kGhnANJiiQKQx6fyHuVbhtGCwyafzLv6CgqnBES",
  "key13": "mF7BBeY3zmRDyNrLWJviXMQM9THR1tK1ENu98ofodZAQBf6pRPf6sbLf68VWgboDDLtai2KxuqVWN346veaRZRs",
  "key14": "4TDLB1TLCTKgBMJD7gV8PY94MtM1GsWp6SC9FMVczgG3DkAtT5Sqaw3Vrh8XJy5mQctxzrtYZ51XtuxhEPJ1yzJC",
  "key15": "61E8tVLUWDQd6woBFCUmQWTG1tL1ZYWo226CFxvYihnKgCoSPx5xVe7a9vHu6wpJ3k3ERH4yuDobCo1g6gbyfKG4",
  "key16": "5Exc3JmBgWwHxSXooYNogQGk4QvGhYVdyANGP661omr8vhZzgPW4Wn5ivdnRfwHyfH1FSYu2mJje3ZDSiFUgJjKi",
  "key17": "4rgwW9jxQ31ytaBagenXzfUVwm78ySyWcJSbbgm15vH2hgp9jyR6hEsMSw7J3Cf3wa6TnPmfZGLobJdsfWoJ9Cdb",
  "key18": "23tTnu2puUFULmNEUFdtJzZtx6YryeqY6c83CgacLWofsgRUosJQLz3BoJnpTpZEzqGs1Aeu4keFkfVhnqAJQL72",
  "key19": "49dxcxft2HunWQkKwcoi3yU93WWQhsPd5VJEbkn9AZGHKer6ABFvrMiTZL5GMYvxMT37rQPK6QGrTngYgh2LAmku",
  "key20": "3qwhnC6es4NxDX1Q8WNLyffPZ1btfY2YAuqx6AYsfFa2PMqrhiftjsPgrt46CYXB57QeDNN5fs1UXqtXGEjQQuad",
  "key21": "396VyxcTxUTFevR1qv9t1j3LALmPvCV9pY1PQmgNf73SQAJTf31XYWxyE7aoXaXNNkfX5rc7QtiQgJFKfRVQraBJ",
  "key22": "2JPoKYbakB6s3P2Zym1Q5qXS5dS7sXcSVdjLTjZjApjLPiRS9XQp6ZddeC6yHw4D5Ct3FCYgPo2tyxy4aNfVKHVF",
  "key23": "5tAhWuM6XXjiFjZFzeRwSHLsyrr8ahQwRqBsbuazo6Nv71VD6pk9AsG1BPtoVzvULcgTne8izGEi9LeULWaNB5Fi",
  "key24": "5n2akZ37vRH2uU7k2KT6vAAGjgroPGAwKdNGVF9CKaYSQQF1Dwtyztzu2wuSW1s2Y6YfJv9yVH5VA73o8Te1wK1U",
  "key25": "5zX4bPjCSbKYpCaN5BcsT3inoG1tAAqSB7hjAwbEbX2aWSaPuh9429dcG4U7K7FLSqUvwTKtms5gaiqBjGgDpUJj",
  "key26": "bUkNP22q1k7Re57tTPkmtwWGtFA3SXQAfP48av9iL7PSo8hSEjZZMHeQJNkd2x9FYgr63ng6tzrnhWkTgRgdxGj",
  "key27": "4mRQJZJ69tXbKQtSU8vzoH25nFMjxPEnVq1GZXqzkKMdQ7inh8DUYaQiKWUAiNu8wLaTGZLzB1Yad1ZN7wEjrRdp",
  "key28": "AJeptXT7dZE7ykgVLLnmcihZ7G9xFoorCj4Ew4UL3DuZAptyY9WkvJk6KYrfnCnPhqVakQ7tGEUMKM5Lgjty9tZ",
  "key29": "5xrfHcA2hDiMiSDhERhyPyTbwVusUAEnTn312LsJbjwb7dqHWq17ag14X6fSY345iX7R9jFSWbDnxBXNYcuUBvG2",
  "key30": "44DeHfwyJu3Ldju6tTFit6ABoPhhm3CsyyXrHLSW8TkGJpJ8VCDUDcDoZJ8NEJ1VuWQ7jh6DfrACYe96vLjdXxH",
  "key31": "2CTT3rmUnfKFaU2YAasLiCECcnPG97khG3p7JnxzxQ9XtLmNSQyUzDx9nerrx7RYoPPUyFBLSTpR6ckMFSFBSENH",
  "key32": "2bPHSXjj98MF6Xf2MbV64jBxsHibBpuBviWBdxaNpUMGMtcLh5YXSjj3QzHyYrgGT2pGzchZvBY42a8Np5sCgUqD",
  "key33": "3117KH5ZHJVMHx4UggbXYWzRxeSutF7F1WbJYREaKjAD2LjYhT5qQt1DuJfcFLfSU88fvxA9pJUNYRDwpUHZoyWA",
  "key34": "5fyJwZiejXBpzXVCTxcP4vywVp8uat9kdkNUvM4bkLiYiV5cnzQcgZi5LL6z8cQFgwXRzFTybHaBmMpFVpF99fDB",
  "key35": "sE4vzEwSmfQVTHcrGXzu45mQ6BHnk2xkgDU7aTa3H6Uons9uxC5jU56gWymTGUZhXVREqCfgLerWguGEpfXTBpp"
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

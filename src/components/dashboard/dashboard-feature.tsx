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
    "2VPWzPkAXoSoSHhXpDtMvh6YN6NR7Z3X71fPkmdsnpRswjsCcqHzxGiPTmygQSEKu6RriKTa7BmDb9TdZxzhGcRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t67KxPrKxgYntKhkapMRQvgfMMUBa5iDaxiTLL1L53mZPffnt58XaA5huahwbLQWfHiwqEtTorKaJ6hCrx4W9tC",
  "key1": "4WE7oBb8FyZG7dL667RNij79dmkwGRVqHr4YouJ17sEMoQiHZxdg3LSRrzvrGcoiZumygzsEgqSWHmU6zMbsVThH",
  "key2": "55u2bEQbRZLPGmrvbBEN65NBvvPFa2U3jJEobbBRH3ysZjkecCTyyhZUnYVhu2aTjKCsFURTodnu52tJpgwQjE71",
  "key3": "vPpcV9idJX1nUCQA4t1hbMZK8x4d9byPvCbta6FG6eVRkWkVsPrbzPV8BQNuLasJh6gUNfkk7Q7mQDzLDpjrxxV",
  "key4": "4RQwm9mS7pvhHYxPr47jw5Lyz6XcdrjwzDQ2BmrVzabpjeWwApvCkFnMZaeXSe58kFdyqoE4tjsowTLrAD3LvQzu",
  "key5": "idKsC5o9rgTGEaxHUDoVqT4Dg6nnda2qBthrJ3icC2FJZuAh95LSPKMQ6iRYFgAj3cX2JDfs1mjUUy3szpWK5ED",
  "key6": "2edcDDmy3b3TEM74rLJ31kZDHT2SuaBHgJmsnF8eKAgyDT2onSZQKeiw6fmRL89zWpiEd6Yy3rynVzc7btuDU9Xh",
  "key7": "4TB6DtuAG7iphEh2oPNp69mvdva98hxJJbJ3kL2d5EEixxvaun9ZUReBnPVmwgcMbiQCjNeH3RTiTMYumq4t6dyC",
  "key8": "2oR64XJVrbaYYBwX1TfiBFtEpwy5ksS9ict34vMPgMaVv5TBs2PhSR9pWNG9GXVokhcbEveASk9o1sfpweS7mPW7",
  "key9": "3XwHJ8H1oUWU482tQmiC8thgVmteZTnyXrwmKgv2kVwgyBXMZy28qQiFkrELiKDWhgCty3bwXkEn5KfzB7JshFEA",
  "key10": "4KuSTZv4LF6Vrgjq1H9b6tkeomjUQnMQqWmtknfEp52o8Dtagr86pFa1LdVaz6SPeRMhy66eNUtSdz2CzX3wjYsf",
  "key11": "4xQ6oN4Ab1gULeUzH93QFdHmz6pj6EiKexEEjAcRm31qLBV9uJDq7bckS6w3JJoRh7bx73feopAhEt9jywW6NR93",
  "key12": "3Md1NqBeQzh27ANePkrD7ceixisFhL6dVXnzeXg41mVSnSCU5ds6mU39bjheftwbxppTEwmAYDt98H5jHBXge1a8",
  "key13": "4uGFvALvCe2LPaSSAVA1PaEoepKbXvn5UggJXvoSoZDR4NA4qaQhhEJyVZiDeSNeMLJ9BYzcMwvWo8Ppash6uU3Z",
  "key14": "TaQHXPiccNRSFwmQiV8HWMwT5wBJKiuEVyLbxNAEcmPMUCVDqmZyLFNiVVtWN5hanhGgF8eE6zcgNPxCwkoqe77",
  "key15": "2zNAzQa3X5gHuz3G85oFrsuQgzuMxAvGqYCjnx2pmnFvWV9tyRUKitsTN9oeaWdJ7vy7rbd7Shi99d4PYKKFvP42",
  "key16": "QcmR1dpUrJea6GhYqRhgbhZHJ8JGwrHRxkQFp5ruAeoMQejXY5yQHCVHFVSuAYPcG1iJuNen1htMQotQ4UD4hn3",
  "key17": "67mYB9TieZfpWQHVG6bAr4ALJ8Sj1s6KDGtbvk6VCeFj7sEmJcQH25PkCTLGpfhyAiX7X8Lt67XGcpgW2zv12thQ",
  "key18": "2bJ12jrJCEhQBfWdsZmP5stLLxetZzb6Bx1jkaYKSDx9Za8Ptu6HL9NwEwdgy4UCvubFcLGMtNNMUYezr35LJy2C",
  "key19": "5c74oB3sMrEiP1qrcvoxijpbUsyt9yjgzdtzdJECDVQvvBRs7i1NkCqFKqkQNkpM2LA52czTi1KPMHRv4TGmnpcY",
  "key20": "5TZcUSdzPNMriaMZUPsMaBEHJBBgzUExvRgAwhyMgUutHF7fsPSXt6kivSrpYUKCcpUsoURij6eHKgm7wQbPMXot",
  "key21": "5kWtqd54uyBM5Ahvgt4YeX3dLMWGdkqitiTy5kwo5fXu4ub4qHc4YfQKErVj8ybEHWL7D3uKF2LJJHYk6AHuNEEA",
  "key22": "2a9pMMfQyzHc66AKe7FeukQojGrcS4YbQvE9cQqx6bHZjebRnYuaiMS2xay5TaQ99Xw475GLNNnajKPYndQYijJc",
  "key23": "5rUkbte3uiuRrn9b5o2eMfUHuACPaUdszJ4iMrs1JkbkZAAEsifum3pkieUotdvWXoPLvNcKsQr42YSzStjRnpza",
  "key24": "sbLBRUz8NLzzYDFQyvv3EE3C7bYeN8D8Wy6xXj635C9weVDCt1scbArjw1m6CpVk58VvyzYyrbZQg3GDxLZEsv2",
  "key25": "5EednFNzr5BLq64C2FFh9xwt1ejmsnBxo5XPF3t51sEx1oYqiaZvVUSbsE4CtYoFcaPbqtH4NM1DJoxZQJTgrym2",
  "key26": "3JoKytkLH7FEKD2JaAmeDe7tet1PpztUk4FxqKtahNMzSjdKTuvaKKMXkTknaF6WSzSREXzqctSpz8iYKRs5vSeq",
  "key27": "3cdL5A4MKYQooeZ46DMZKWJkEap3vUpUTy1QZRp3fTQx6NaRAmLFBYXDMXWLxfboMBk6G9k1iECwXxU9uCqtn4pG",
  "key28": "oZMXdDmKEH5SJ11ESfnrBmyxe4wFfVVthMFdSsA2kbh2BZwnTgn5W5AddcJFyLWzWyFuUTVZvctuXarnqnK2xPA",
  "key29": "67EChDxFp4JGsGky2TJ4vQaK7HLzGfiPyJBF8xGYHrN9WxNFXGamrgJDtKGe3ZtXjVHLXCrFkVjhUo6asM9YQpfL",
  "key30": "2HdXz7NpXLXLa2ozQLupQysXm6KwBjcDbmyLXKpvn5jdcVLWmuVgFKBCKQDhdZo4X4bW2ma7Wte9iHk4ZwBLCMfi",
  "key31": "2asZpT5ntSS7Z8Em7mHQBycuKzAAniFppf5jNSNnt147PBbpAsAvLAyfQv1jCX5fqF5uAGj3vfj3T6EB2vfDUod6",
  "key32": "5Hy6WhVKPH49qJT4vQz7BP2ZjKW4j7tFFJQwQg4aytvyLS4fWBgEHmpk59vTFxxmzW9J6XqKxD1QuCuq88gY7yRp",
  "key33": "3a9rWct2cGGYBtHBjBVSTWggcdvE3qBUvtLRUAG2oaXV1omo3E5wcktKou9vnyXXSgQhqpRveCyZUQAnfH2kAfAY",
  "key34": "4scosEZarAiQam9bDD4kRwcVKQkeg9o74VAe3LqHhBJDwynwDFQ2ci3jLCtBbvLRrF2Qh2fFxDY6MULxE7A7QAfJ",
  "key35": "eCqeGZf21ExaL12xEtKaKLteQy5UCP1Z1eYXpm98UdnZrotXLG6b1p6D8SLYu8DHbyiB8YwgPR7UZRmmXcRcQep",
  "key36": "25FKCUKiYiRZtJYkUA5XuAqX1cB8yLP9ACefjaXpLJMobCk7Qerz5Uu5XjtA7KuVFcpqUF1orf6uiMnEHtwSdjCf",
  "key37": "4DCd9qY7Xi8NPnKxHQoE2WMZaB8Q8qbSqCykh1p89ccg3oYMrNxnUpnmRiYBDxvuLVgWRMDd9av8X6GMTTytVPTf",
  "key38": "2o1t5svF6pg7zY6QqEpPZj7mwfoxZ8LRK2MyjaVQ67KYfb8A7G7L8vPN3z7nCVdfzbYhaeD2B5NCTnKHQrgDQF7n"
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

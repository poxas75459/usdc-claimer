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
    "DvUgfAXkzCHkKbUNuek2uw7v5Enda9KR13BdECtb42mEcMtNGS8LFbopbcJGjkMs5AmDrPqULfbUJj24aYVsAHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pkxr2tvhHk7EZTd9QGxspZ7kuD6WA1Q27SXNyA8CjVcQUnuRTbBjs9XeXhrs8FUwxEqJN7JDHG8LvP9gjFsnrFM",
  "key1": "RckzjoY5oibHz3e9tHuXzFsBkntapy24AcSuhZuXKd1kzgYpVRpW8WBMhNTjjFbEP8cDEnQMs73hCjSq4Jr63ju",
  "key2": "2iT1m1DKKfNio8yNoHutPX4LbywkFyaJCL3knYxx82KyUDK28PoUYJEuvipjoq6AVc8sCRJKh5ucpDyyDAq846ET",
  "key3": "4duNT3FfM4Yf9Qm6CBMuPLJCMvkKt7eaDscBGuBbnVAWqzXVyYueAEhA2ieMZ3QDTnufLWo51NJfH9Z3M1NAnztn",
  "key4": "2ZPSF9v1ncQeomYQCy2FBszAyY4TNHfdvwviZSq44JU1T8xr3MGynZXr5RWRynAHqGj99cE8CinjGLYGy5QLLDGk",
  "key5": "2r6atRnf2Rc21rV2PN4uACCHJ4Xqe3sW1b4Svg3LVNKf9BxWGMnnn9Eyp4L3LESrv1WF2gFnaP5q7pUhHHyciRy2",
  "key6": "dYpWNm8KE3CQiHkJwXVf8uTbFGV9x39Zz8wEEwtRSJmJuXUhioVL7p1VSzZ4U4YFk9haddYRPd1hmzT3JEGgsd1",
  "key7": "21S5mgGSDyW7xysJ6xUJQFJYPsWfxQiqxEk88vqHckzPiLtBTjs2DgVQzvxG6FCDERysctz717p7c7xz7CDS6Gkh",
  "key8": "654Hrz6LhGMpo8SqSdDi2m4vvG7ZuT5Bk8RexmCchc6uMw6jTHiHw5UYLmQkhgSa86f9BMFt2obe8DFx5mab2o1X",
  "key9": "2uZGJJbUoifpU9uJu8CafX3fhn7bPsETRnbaEoBE7zhCzBG1rQWZXGLA7LTZpaSLu9tSidLEMTZAThePFQfZcZ9N",
  "key10": "2mijFNd922bLpai5idzxNs9kyhxrsaGx8aQ1rkHMSwxED8icQ9QzSmp9RoC55EvxwpMbavQckPzTjo3zCLZo9gzq",
  "key11": "4AyWu7shqkNZwiav2T5qfzK2UEHH8Vcy83R4e5vJK3N7eqpe4xiFBxrVdo55gRp9SpHuJEyyLrvmnGK7MEym1dN8",
  "key12": "2njGNMfxTfT17AmcfXQ5hw5uCUGZN7FqJQz9pBcd16wbEKhd1cLtkEUmuMbMPoKsZzrBF6jb7EE4LBtLE8x5whGD",
  "key13": "QG4pByLVMymsgiV7DkBEGbMeyEm41wk8sDkpmsrv6iZBR31khTpaHh1LmeUrMcXaJW7NTAzqkfPVbAkFuw2P5vN",
  "key14": "wUSDpX8cxNduVALHFSjBwdiVfqeoduiUmZF2KkiUbPRYME6hWQuvZkSLxGc3UfbNAgU25mouJek3ZdxX7Yj6RHK",
  "key15": "4U1KDn7bXiU5p4u9nBAAzM6n4qYpVYHb45JJTfT1686DMYEuaVKJVATgGJeYD9jTv1SzpBNxJTHWrKmPDRspq6hj",
  "key16": "4Exku2UKux7XZf7RZaeNS22eyMaSLrpqJPS4YG95H24mhsfQ1tEPXFqviUYorcsH5R1WEnYj86QqZxrtibZ6kZJd",
  "key17": "5cxWpRw26xU1oQvje8e9ZGJYZdMS3jNYvjt24E1eRqLjyJ74YntkScNmX4Z8Srdx4eJsnGUnMotdZnUwN92KYkT1",
  "key18": "64Ase1vSGg2TkS3UAcYNbRcgUEiycjAUgn1drrRjo3pQWhDKhf1vQ4SJxQgoANL7TtMTqq4YBUcguvM2axarniRz",
  "key19": "cYoni9qh8CMDWCpgjVG7ii8y8tSpgT1VCBK5CFD2P7qbbP7k8Gxir4VWfqqKYk3LbBMXaW1WPL5xWur5cZJEAuo",
  "key20": "7xXiJyGHEkxoTmoV1rgB3gpWs621AFiHZe8RUWBdNfv2fXAfuUo9XxeXjv6jpfTmUbs43VEiQdysbLJR9c7r1cu",
  "key21": "5jzp7xQ9M53Z6vsacvPzYMRzA4Duuv55LsW2e6fUBRx3cmq1avmUWdKvgmGQathE4YvUxayy98aKGrR4ZZdE3vU7",
  "key22": "4cZv9eoykgnTojb4qVt8tpPx9icxJd5yW6GkdUwh619ht6CujnczGQD5sDsjTrNjo2vv1XL6bwgRetimrJFvjtDA",
  "key23": "5hNBjRk2AQntrAXoJ1EJNB32h4uYSFuPPZWZice9F7Pp3RCf9HR5QBvQsnBenjKV7athao9f76LioYNTcdjEyYg7",
  "key24": "4FBSw2wkA58ypYvBHYZg2g25dYGao4VH6MQRH7BHfWLd2RzJCG1FZr4EVHKwg6i9JWvNA6WRp5NrdWMNikutxXfG"
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

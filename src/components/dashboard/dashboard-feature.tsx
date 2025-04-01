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
    "2yDR3fLqD27g9MHcG5N6teaUks7ztWWZMmF2mLMM3EneNxvz5enEwJpDbSHyd1F5FNdspPvrcuvKCkuzSrRDe5rP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t4oczCVuEwTNJHh2SVZoDuLZ2gCo14t1hn7vXfyxUmYvvVpc5RHEAiVx7ccU1xXojQS2rSHCQLy4deW4RrdiLTM",
  "key1": "424fDDasUZVz1uLkxLXshTyuKTezpBpue7LZ75fKiZWsoKH8G7QH1oa5osbxRbWtE7rpwmcqrWSTiHd65GXaHk6",
  "key2": "3nRH7KsLAU23T9ajBz5YLViCvjXBFLGFHy3XWWC87ov4MCnNnrQsXSYgp1ZuFJdX4H8wHmSJiUQ5bEtzm89ZkuTC",
  "key3": "3whi25Fxi5Bmn8oJrUDbrBeCPwLF237N1nDWchBJvHE3XquFMAECYinfqB2KPhWvRDBVQKHYLswWPtdfCs7xsNAh",
  "key4": "355B9R6d6jEHnLyn8VAQ7LQckHBWyFJPiJrcgtAkADstuHauvbNGPsfBkL47m4SXH3k59ghAn6SCKuFvT8ttrFT6",
  "key5": "BHck4HmZtTqh9EuArFcS86ETeBFdJN49fR6LAHMBusqUgdJM7m6gxbrw2GntnAEk8nz9patAqVgUzMPQSZ5duFq",
  "key6": "AkFqmhT1x3cUVGKGbFcK5F7H9VsSTuaXEiacLkR7vYrwZirnZw4P8DafLZED5citpFP3uy1TAopUVdSgbZDm9V6",
  "key7": "47qxnSLSmV3Ja9BC8WPLQjjVNmfg5cHLogWidhrHPdSWAFqhoZeMG5h1omYTA2bbZAPYXrBYQUPXfvCb41vz11p3",
  "key8": "iL9KuivAMuDJL6WzupQcfkmapQ2kAAoAZSk12N2DegVMieaCZ4XB9BnYiDvP3kNHE6VcPQ5siioGNriLzcGasmz",
  "key9": "4UzuM2EU34Qo7QE7fU7wsKnMW1kPQXviYtziszQeMSZeagLDZBge7qZm7qsmePKUR3BGATuSbwoBXKqYhDZzTBmM",
  "key10": "5W4fahGGfuZSWJBeaS5sazFTrDmZJJNVAqUxzM491gvoqxFK5pxwuu1z1E9JRQ5j6oaGTtjukcThPTgMJEGdM8c8",
  "key11": "64xTYHdsYWLmJWcuPEh77upMZdN5P5yxZfPFDyJccJ79juV6kBrT2Jua3UVbnY4quNJEYAUirvDvmwkb8B57qmcN",
  "key12": "5dRzpVHyUdoPH6V15LJLUMfyP5Mokg95dgW8qLyMPysWapHXqRAaCk8z9q8Fnn1irTWaYm6sdwzha5XXfaVfaHn6",
  "key13": "5zgxf9uiz5bGPiq64qSkc9Xj6gnwmWJYjpv8vn3Pht5o2mzt9Y6Zj1CawAfB4eeaZHpXjeLJDmyfgsSr9fg1caAC",
  "key14": "2r2GPy5K3Mpkn9AinzdRXaJzb3cEiPKnQu8vBDcdLWmfHRruNcT9ZEnn3TwV9dkhRQ761ZpX1op4ivxQ6FepnvG1",
  "key15": "3LpyRoD1A3MV6WUKh4ySpdqcAUt3Muusxfqd71JnYsCbPxmTJX7p9if53Nw1vgsku6uufFVRf7eG5Gtx6wT3645G",
  "key16": "51KsWHxkL5ytZCJQWtea5nn99PhBg8mJWHhkwheQt46DugvDtnX9UFayUpViXFcVpo7UWYoRPMN4aVnZHHnFk3TL",
  "key17": "5isRoWSt8UEEywtY9TuiYgdg2BBw15ox7Ba1jNJfABRr5mdEnZUbGehLBcCHxeXwMktCxZRYk8iKrGhZkjZMSeuA",
  "key18": "4JjieSJJ11u9ysBxiknHg2qxwCkbEzyp9eGnUpqKNMb61WRm5kA5sZ9ZSt14dtP1grmgwDR8m3jFxixbnEzFLFxc",
  "key19": "2u21Mqb7bB28cogE6jRvZaxXtcmA59xqYmosroA2Tz3fSCWydGK7mMqLDXJEsEN2bXWABWfAf5mb23MjrZKQd4Jm",
  "key20": "56mAAqkVojQGsk5B7QUqJ9MeBdVbZDcjEe8iEJejwA2dBX91D7vXhzbqR29xdMjWU3eLDjJEkpYSwjkN61ZPghNS",
  "key21": "24aX3Ca6eB1U7S16iYCbpADWiEccsDjFbBojLq6Tq92BiqCYFwzN3bm3b4gt5ySWytEkRQKru7X2GrQEhoxGNbSU",
  "key22": "49t7QnhFtEaYeZiVGt9A3kpxKx51wctqaCkS6cKg8CYCbM9AF4gT97JQho2GRJrJy7msbhygeQKmmhryCCz7dHoV",
  "key23": "5XQDYjBafuPaSjadshRNHNuK3pd2PzUKZfhpsvdCxqozi2Fe5s3g3ya4kFzJMR7a3oNyNYUNAUZSBt2MqvwLw3M1",
  "key24": "4DYms7RB3nMpeoHeJVvqTYE4Ds1j7zCfwwv3MiJv95BcNTUhU3qF7GxArZeLp2QLjGgXfKrV3u8Y4cDYayTDS6kj",
  "key25": "2TehZs5CxN58TjRiEmESUeYuRoGfDiA1qc3W5AyKe9TxQ5PHmr76ae8ZyiEaqyHDn3WA5stRg89kCW5UAZo7gHCi",
  "key26": "5EA32Jkbe8SLtKF6XXbevNenVjteSvxEbtWM9dx6U8YBkdhd8qk2X5M3sJPRo28FQTqH5hYmp7u93rZHotZQRPT7",
  "key27": "Eaocxjh6A9KuTjQAEpqqRVpLLk49HMWG1YkYyFBRhogXJF41spebifTgVJxqRqiNTvbUiQAe2WUJhk2at7oG5bv",
  "key28": "4DChPJ7miNb6wsg5mWCi7oG5EB5dtcQu9BkfZv4UNoBBzR5WRPJcjgz9MRmVkbbZKT5G9B5FZFB3v8pkuBhB4XUG"
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

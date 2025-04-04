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
    "fRfnMoSEEFKuuGAM8LU4WrVNnaeTLyHHzFu69A5buGRvfoaoACFXJdFdGiqieuS5Yb1agfnPbRHdkwEWrGnxQc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42QabZeWPVrwGUHDYsbf6M1Ag388stDnnQtiEA1oX7zUeyYXZmEaJwV8prYAG1CAtfQhXMvDJMJb7B9igHhn2WjQ",
  "key1": "5rT8V9k3NUyKLPaxrbY2dhBkXd96qNFCYjPQBiDoD7JYmXrVcC86cgnAsvYacxjDWM34gMoP2L1tUV3hAoyGxSGw",
  "key2": "51Jrm6HshignTvkscUYQXiqKzXnVA8Lu2eNUXe2wZore94VxAprLSoX8GxiYFnFzQxvp2NNJVbm4a8tei1fwkRFe",
  "key3": "41S7brNBEdpY9zEp9QhK9qnhs2GJx2QURX874FYV1zr3fFcATGuVBeL4gyFjTn2ChrAebV2UD1ye481CV2idGc44",
  "key4": "3gpA58y5BRNG7Xzg1xVuTqpCdDAqQoWQVnda3g4pLdE8yRM7m9Q4n8JrcPGSGkFhKTtMZeUrWiLcQGCDdGJ7zeqG",
  "key5": "2MJWzuzKy2oV7Ncew8xMGomoFbdF6pkiL7nb5w1NnC6xzPEP9VzhF1pXy1LMRKYq8fx5QZTsughV3JnxccGPrAv7",
  "key6": "kdhD9uX19JKXFLisdEbf2Q4R74VrCSGECWTpEfHSDF8C2kQymofxdV4JFGEXJ9kmSKNvfMKWfSK628mDDv8AyJu",
  "key7": "5XTAaeV8SjphYMP4VkeVWR3bgTN76ttHBG4SjLwNgy6Thx149ArSR1YEyEouYEYVYnvpdQ4Y38fzzhKdSrbB7ny9",
  "key8": "4kPXAuJMvMvPJaE99ZwpnjcmoE2E4J8sJaAFeq4bJkbRkbkMip8o5yFLiAH8gffEcJj3zy1epkoL4fBAHkRbjZgE",
  "key9": "62nBdKsb6un8eeJAfCUCTQhtVNiu2pVgzHuPQFopMFDJPQuvYaJxtv79tcWPfuNSgq8tZPW3fJAvjK5Hp6Z121p1",
  "key10": "3ToLNQWRLikfG6fKAyVXZzF5EJWjafTQJwMiJrQ9rWfBbrkPgTWkeGTYRtVxXqd1mFkZ5U5xmQvdaMe8wfPrUbLh",
  "key11": "4ZdFooWcdH3iEysJFab9iRqRtWzQst6XYBXpeX1xjo9qzerNyzY2KB2xsYLMFkx72Q5wKDn9ehPJtkARdGS69EUD",
  "key12": "331XA8UU3gqmkm9yb9EgrV7wuG7EYLCNC7xhkAe4Ektp79rDGT3sTfvktPBmCN4iSk79YqZNTjiQFa3RqTwwASZ6",
  "key13": "eDnYebGmTyZGuzUkGTmpofpekBNLfmBgawwFiqxcD2L8zUXkassV51RuEqptD98uygj5D2B5GZPNZNMKKR3K8Bb",
  "key14": "54omhcGuPLsxB4NKv49JnEdfGkqLhFQdbRHSttbP9JRtjYgKBm9qq61aXYwAHGueGNL7cb8W391LTPCMnp7VyyP4",
  "key15": "263wbQS2oM23QvhwBM6UNWfWzDNz3ZnDbG1SShLhpmshk9hBd2VeuA9FxQsBHkeENx21QEAeRafSm6F9b3gYqCqf",
  "key16": "5hdq4q8ANdMNtkZraq2scKUik9NVTLSTUiYU8Nxc9Hmfav4Hnhe2LXVxcHdYoYbZe4Rob1VjYRpBzCiDyEZa8QrX",
  "key17": "pdUY3B246he39ihq71C3AmeTXr2QJdnKJppokwa8XAw4HYPcvBSkh8NcrqhfRHxvchErob4EZuqQXizmwH95h1z",
  "key18": "2cPgtrzBERNScZH4W1YxnssiJCthf5MrXLnr6ZFUsHnCfvaky6YT3x4g4d3VkhbjPwHmgaSAZgpZv7E9aZ24LVQf",
  "key19": "4HsjNDcheqT7NB1KX9orqgDRmPqdqsmdqWSXiCsJRwdzf6r3XmRuTxEzx1txnZqV9Npt8xinvieQTK2xoqcfEyUf",
  "key20": "22uj9VozKX1PXBu2uJ8WhxiMCT2AQntqqZGs94XQmvFuAEJSnK2ZyfAuVzriQyzTHczSVFz9cqi4Gyx27xDyuB9W",
  "key21": "2DM5m3dXoh7eQfTUgHvhfg3dqY9fj4sR8wKW1YGy46rYaK87mh5c11jmdWZKZ5MrnHoDV7FqAGQdmLCHSm9H8yUp",
  "key22": "3cSrDwQNriNCBARWGe61e9rDHqzjbTwUrx6ZP4zK4WCk2U9TZ3NajDYBzXvMbUiwSWdfH9sd6Sz9QBVoJbRacepR",
  "key23": "65Z2oEAZ1MBDEmneD2A9gDj9qwX9YrBmScP4uvcLjztv33jFLaSkN1nVQh4DuQLb7izKPtLZEnaAwFqakm1heUDR",
  "key24": "3M82vQrGBtNu5tMTn37UNsCCqB6qaf6F1A6zbZtZeHvECA8fWUs2cQiHx1hdzD66DC6fmaUyG8khrXTuj7RJjTjp",
  "key25": "2SQ9o6rSSPcWSPzMxvVLX69JLm9ZpqrJE66parA8yT4b582VPzEwJZaaVyQsaU6o6G7DvUqhrCCv97bDqJTLsFZH",
  "key26": "gQeS7FyE7AsKXgS5A9W3ZYahDTd9hnHjjCrFtdzAAs7K373U7q8uXd5qi4rsvU65Z638cQPf7x8A2ndLGF8kNPV",
  "key27": "2AkLPrYazRV8WRSM6oZ1aeqwUTVs2TYfofziBR3hsKV5azPZNg9TksqdMsfYp7SzTmYGdtLrfHwtydaBVEMFiEB7",
  "key28": "5vXzR69kuxmN1U7mUJGkL88gwhJUZS3vpQTRb6TdS2M9ANnsvQmWFK2BUBzTGmwUwuQer79KVD2S6TYJy6v66o2c",
  "key29": "4UyYKWWSw4oVWUfssqgJZBgeAiCVckZoEq5kppcfbTHb4zudSbKdd51oWBHLbrwSgSVvxhCkB98QfvcQ72cNqUz4",
  "key30": "4wjntyCeDb1yezYKEDvxeE9pUHHk846hWGKrJQaB23wQVa2RJtPhyZUHbWiptomQStXGZ1GxEfDeJ9upCS6q3sGz",
  "key31": "3MggH25EvVpKedkCT2tKGsdcw4XQ1Lb1PVqXHVVaVtVBDzQNoHR5EwoLEq25SwvgHGxdSMCRdhuuaPGVYLvVtmJ6",
  "key32": "BVX2qSveZ9KxUzmXk9QKTvNzMZ7QeizF4NkX2zLwgKDLGNGNG4Nt47UNSXJwm8KxHvt7Xrnkt4pQYWFVWroF5mK",
  "key33": "3CCpgmaLT49Fp5cMAybomiBXmzzhJ4rshwfjvDW9kWXcm9DKRgwj3jDdCCkQtdahUtZ7Jnow3VyKrNuHvj3s5HzS",
  "key34": "613zgQ5e4WJNmeXr6cHU39ck99FZqwnwKZ6AM1sUT6qfvfdFqa4B9qwLHV1RZowJAKGSFY6iQWzqEtn828ewWdoq",
  "key35": "5fZdG6dFuKbg3D3GVGBDuDASLXDpEWDdqNKNKZc3F8C1syh1DYgsasQ35gSoEcc5nLmT2imBiwqoxsjbBEXDDVJe",
  "key36": "5x6uUJzNXHb4BV5N7chS1XLFCdNXKE4m6qH1qpCCashC1Lrs2xW6yQ1CMm94DZ1Fo3ja4bXZPp8bQabTdc9L9fGj",
  "key37": "FKMJUuJQFJMwyzWET5xeaLQwj7BawvVEUrgooYMqL7hYeRNrGs5TNnQKB6isz78Q9csdwjsUdnyddH5BAeaFPQh",
  "key38": "5suk9ABraJMgPpGXZ4xStNMRDLCZJfcwWu8NixryZ1dNgaFpuhKVHohR4hujmgofz8Ywhj7eaowsNF5p9jaCubHR",
  "key39": "3CRE7pxTqz4mYHuCDw5MqMzDTt6jCmdXAs6Ehf3ERWuCRrL7oNZpdMSF4cHxKFHjhnCk8Mrft7scNe8V8oSn9cmr",
  "key40": "fhWDQyXpuAdvpCQSk3BiaA8bjYnueJdp7tr8TfDoH651fid7rKrphK7cZo6EwfjAmV3kBPyGm4thzqFcQD8CGtQ",
  "key41": "3qQhRSQdkhwZ15paEdQhr6qNkSYTC1opjj4w8E2RYBD9GabJdjia5MCw1ePPMtvxd64qKT1zSdQTPdsgYhcZD33E",
  "key42": "2ySH1pHJEsdAyNKSvyy1wZ3cJjHNyzafFTTe8X3uPubSVsyg2WX7yDz5nEUFhcvjpv41ax2ZLrN53xP1LGJyLovq",
  "key43": "XDurrp8y2NZeZYw56LPLgBPJYJZqHR4bk1vbZzWZsC24tujZBQwL71RSCaNtAnf883xFAfyS6NyRFoSxbniT4Ce",
  "key44": "2CcTfSxuRDjh7y363EtSsG7FAqwzzS9sQxt8uy3nMfELbFfmSq6nPXJmTT3JEteFGWgRcHGd4BpAr8QvvGLyPGiz",
  "key45": "55Fu9m48tf5UyZZs8VuEpfFg1QAfuYu9BPc4tJqqCu2Ew6mAmWwxTirzzjnrVkNMEBvHEzvpdVQCtUaAdfp46T5o",
  "key46": "51vtrgqovYgXav6E8urz65gdmGnfEx2Qw4poJm7ZNsV9jcp4b7qVGCqEPb2YU6VFZeboA9HCjxAmPoLxxJupeUBh",
  "key47": "4zouCAumjg97zge6CN7ujy65yrM5WQwufHHF4fDgJ5KZFwCcvcEhhzbTnnRveqg391JgaYweGuLgdcj2zj1QfRHB",
  "key48": "ciD4fApe2oAauqMSBn4N5EVKZxSPgd5QdjncB2xGShuj9H8CUGKNUUXR5CYm4WK9t3P4BA96yLJNqvQtdy39CYv",
  "key49": "3zXTW7Y2T86ZZRn9euDiF8davnyFQD9M73nUcJTJ9svqhxkpJYAE4HgpK74JYPNy9G9ea3CYdpZzwk8sshAdjqu2"
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

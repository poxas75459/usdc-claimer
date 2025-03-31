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
    "614NCL3oaF24Q5hfhGzQ3bt6gWwx7KcQNNv2ECw7ZBuUfjxfz43jubm2eubzRHE5fu8Pv3UJ1uiRaZBKpyepSG8z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XRSePL3hMnoescRww5HvNh7zhUUCJFsZUimxMvNuLiVxuMUB72ux6p6P9kxgwPFUAsNHHp9qBWCUg8aLpyaeUKV",
  "key1": "3Kpc88BpHorX5HcEp4XsHwPmMNDSY7ppXsFuSevCRnoSRaUXXVoPXXtSEVjRDY5VbPw9noUrDZpnc5zcVJ2oRz6x",
  "key2": "8G3UqSEDMBs5V2HSqxNk4gUBcSstbEEDTr1RF8w5WSbVBtzw7KDspDgMyaZTTrr7JpMxpaVX4bWFFKH5tNFLXqB",
  "key3": "2cDbrf6x954EKYKg2HtyUYFL7NDK2zkTCTEoiRNNtuk1hfU1GgweVLNd1GErr99JJW3vytPKDGzWhuMTaqdsimTP",
  "key4": "2DNPSKNA6gwdqHZcLiFAZaXJUYyR2Ubi73h9RxPfN4zTrCJEbFrAWc1JGgz6jdycffBGod6xZy39zAkUg6QENJBo",
  "key5": "2Uc8NpWF17EnqUcjsShcn8LnxtwNZZKRvfR626sSqczxTAKGMtsbVtsiXTEKRW8NrjFcDhN4xDsXazhf7zYjCjHE",
  "key6": "2MoKa9UfAgEJM1Y2U8b3MNoG2XMxWytZf5jNpExU1qH9y9w8fp8KLjLbqgxEbUtjkVjzGzQwMLC9dd1oYLR7f2fv",
  "key7": "5DDguwwQZ3Bex7BnMpbxvDUsHYTbDoGCZBq9CimEaFfmZWaWNdvoPUWnZDTyCrYiouQxGT1imrPvEHqAtmiLozkT",
  "key8": "5fEzPk2QN5rhGRcVrebKnRHxo7jQTdNUmPfvKQp1tYm6cAPGk8ZpZ5LtpDvKcZNk8Ke5P6Eu6vDQuRvbsqWKzQPt",
  "key9": "4pgYifa67nSDhbKMbaHShrP8kDY9p7shnAfTdHGLn8fauvNEjoo6WkgnbEEv3C3Bjdecs7meZoTrrfhLVTgww1ML",
  "key10": "5f9ouY2UW54bqZsKZ93oRSFK3pyL9t9ACwYwihFce8Es2AjgVBm3HTVP97ChQ61cPVxHCiVz2rjK5eHidmt2V3V9",
  "key11": "51SWv3HQsAL4c1x1FBNmD2MuhyuUTrQm9nC8hVjtUt1oRvYZN6bS9C5HAUKZzDLrzhEXM4f99NfV1RKosiubxERj",
  "key12": "4BQiCk7f92XLaawDpZFJEy2i1az85o4h2hQU7HfMSpVtz2g5MPyM9XMezWqS7B8mqJuJMPYuQDX3XBePrjpy3wPT",
  "key13": "3isvFxExNMCoMuji5KGU8as9viQ4B75MrgyB5XViZWCbb6dE4w8Y6tzJR2F8bnc4RGTSABH3N99iDqUt5gsiim59",
  "key14": "5KHKzWTcU3rkrq9ri9fstmqjNxqAeC7YSf6GKYFt3AsdgmqcWkNmhd3rex1kpKnyMydYZSUYPz9uhCKoq7QP5sa6",
  "key15": "3WKftJZPapA5EFG178rBBVpz7qTJ1HrG7WXUj7AKwhDSt46UhszHNzvQLv4BVZ1gx2m4yMZZGKj5XkKXYbC7bzwJ",
  "key16": "g1t2TJzL7MTUmvYxBEDhtwA94rrrKVmtKtMB28QgV8PKECDboehiL6GguF5nn9v1GTWxcn8YSnnu3LHVutoCUuX",
  "key17": "2KyUUxTMixUyGY5rh3ZC3ipmLZtpgkqytAdsyHVv4TBAB4eRQJbhsPcMjL4Lbg3mA913pDuaniuTaFVdasyFfTTS",
  "key18": "4xCMcgpe6wgahAedAEpc2QTtDY27gMufeWi3f4Z8JUaEUBfkqoyEfLSGXayjS1cyow3BLfEQiox6Rk5YfgA9kVrA",
  "key19": "5BPeQknnJywyeXy5vyZrmzUVJq2jZjoAkDPRLz853v9xGikamJ7WC9oHExuqFtX9TcXK1f4AP4H7bMMtDQ7fhA6T",
  "key20": "2p96Ayz7zQGh4Q7jFb9QokzCyJ7ps8GGpebH8zj2d3CRH93MoRKPaSMfZ4EURZQ6ecWAUzNbg4P22XZ5MeTX96jT",
  "key21": "4y1ngzKMbwp3uYqVb6oM1irqmvmfNW6xtKDNmC7iQ9cbRM676QqjJpwXfzhGmGDCS5bjAioALr2E4eLijmhY6QUp",
  "key22": "5FZA7NhcSdUryhFHQmKkp2vJNvJXAkwKGTMtkwLZPtbuau4SJKEqViwR6rqGCXf7FZvHdg2fxE6iE1feZ6eXNpR1",
  "key23": "xA9DC4i6H9QCwwpnPfg8oqv474zBgyJ3s1QeoyWj4vGuU2h6foJCgKAAF2JfgwnuBTZa113neNyzbyPnp9hn4kX",
  "key24": "eUpL7yGsTBQtjSUTRccxP1GVcyWQ17PQGJnpBbX8gSEEy4nGp7rbRQ4QYY3mFjZe7x4cFZaNMmKoQwTs3Pkzq87",
  "key25": "5ztwabsPAgVQL1vaKLmTc8mtE3sfK8FbrFGsBhjxMBAb6ZhTU9TYxrD67M4sjnasQ38ZbwFdpMGxqf4ma8BDWqu9",
  "key26": "2c9zmh2kEzUNKEN4aHkt7UThHkE3jD99UyX5y9rzMqqAPxUCvZeuX4A9GNMQRGpaH8nPBbZcbkRfh128FURRqCqV",
  "key27": "4r2JNnz1xFwcP4ziVLz74EJ4xdb53NFxYQUT9aEnkqk9G2e25M8y6sWK98B938a72YsgHp4pdbFPDYEzYKGmKTqR",
  "key28": "3ceYAo8anpDYYwzqXeboe5irqsb5hhkYQxvXBv9bRGpaYNZzPP9dVTsECxecCsgoEmAfoiraJK241pN4Y9U3E83N",
  "key29": "58eih2rJvXRYxNW16oPZ9gKbUT1pkngcuNZRMYHE5Ej8W14DV2srwYAsk1pgsRTm7PL3zX5jAJ8cATJGE3Deq8Jq",
  "key30": "4zrHmZagFGvQZM1WJ3RvaBrrb9NUAq5mkCgojumXK7voySWovE2yLYexv2H2tyGcFkgywALADxvvuX2zJdhtfsHw",
  "key31": "3p7Qfvf4oXtSq5JNJ9ZecQhFUMRNzTWibMmHV1KsrF6ZSPbjTYR3HAdciWiFuKiseJ8DgPomWgUsQXxx6NgvA9iE",
  "key32": "51NZ2mUZMW7Q9rZqoCjmbYGYPvGjkWAYAiG7dsvjSqq6MWfAKub7xnW43hw6VBd5gkjoTnwJYTRthEuSEuM5g5DH",
  "key33": "22uzxBYQiT9Y3Dfcuz9X6msY47oR78GMSgH45y7QpF4LmnNNceLkMcjAwPbFeK9KKh6gWxKLWFSSowPeA3eHwYzY",
  "key34": "BRi8tv3Y4ZQZopXCiqy18H5io338no5AwC9ofAbBaX4y5ZEN3qCmni5brY96rAmmL6BA1AWvewqnFgZsisV5v8r",
  "key35": "2wqw2YcB6EfvCcPPK8DFM75KW3QcKcpnfj9yC6w2FKySiaXuYwJZ5g4eccYjcEasvEz3dYHxqTxaRL1Zvc4VkCS5",
  "key36": "2fHhSTdor3jMzkUDkjCzshEzWqs7WKrfryRzoQnYEnjs326y96TG155nWJHQfzhwFZe4r2w2nrNHYsU6nUUAjnYg",
  "key37": "5qaRy2H1Ueg9Y4c8JvdZuHVeNqD2HkJ8tG1NhkJ3RMBt9s93ypDBWZACCppsQCeD8iBcEgLzGGUzAWvxoRVRbT2S",
  "key38": "2UjPBuHywT2KnmeFYybvziHdfWyMUctRqUavUUTeF9dr7KcrgzszvrW8CtBeSSxVc9SKRNa1EVZCu1yr9hZdPgKx",
  "key39": "QNDUQ4U2xcziaV4qiBDXtZEWKmfnTd1fmG4D6uYowPget4CGHG8hUzEHomHW86N92YQWyWeXWtjaRrtxPVTuucB",
  "key40": "2Ti28qq1SETajrSnWTzvnRj2rNM76GGuiGYSYe4jG5TbkNESoHMikL2igy1vaa8JF1QC3e4Vqvbz4osoSMeZ5myM",
  "key41": "NsvPtEUARyymTuSNEu469vuBm7z6Hx1gjWFiSxoTeHGLEvtkGy2rL1ALZD4LqQpih4ioRHMt5YZpeXUeRb7dEif",
  "key42": "4uBybUExkXCwALN2yULBjAh8yufv7GUTgzLMMqTgqQd9Ro8CuCWQk6DD9rVbCNYu7s7eS4vdcEpku8oUrkVH2yu"
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

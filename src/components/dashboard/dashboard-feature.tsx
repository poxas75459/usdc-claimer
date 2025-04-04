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
    "41uDLkY5qxRrws7LQoVikubJrV3aau7uVNB8wjVmrq8Nu7jVijhe5jQvxkkkZxjWCrsUi4BXg256D3TxcvTEn3wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CooWVSbJhxsY7wtN9ZPJ81GFkQxMzDUh4gh3xKZiwZCeDYh9scdd74NkeGpYXCQ41LZWxPiGMBRmN1M3orjdSLu",
  "key1": "5NaSw6oJyfdSsYxaAPdWJK25ToqGLYDmTmSjWJGN8HBE57uj1hRRLxe8hu4YCa7KUgzYVAB8kC6ePZSVMMMMrzFJ",
  "key2": "EpdB1Z6oe2onzPwn2ggdEUZH6PvFKrmkECX9sXChGR5u87nwyb6Qns8m1J5NhktBQkHiPiwc5VexjpLgNC3oT6A",
  "key3": "2XNgvA1w5LzGrTdyGuvDBSVpTKBtN2MYiUZC1ErSnpmhzsH5ZRKUob4bpTmy9KMrS8FJa9GV1rpsQ5tkB1aLJAth",
  "key4": "N1BkUqdxxGYznGdSevVNkQoBHpQEodueDqSk8QTXM5KnEC49Cix2C7zVYRMMDCc3eUuwff3yBN2abRY1fxdJBNq",
  "key5": "2kP9v9ucqpFuSw3f8751QBmoC8rctWkeLMaFrCr866wT1DY6umVFjxha4erSV8iqWNGpUFeYUfyxTujmwK9EeU3s",
  "key6": "5yArdE2xpz2jucVgVyXvK6azc1gaPJQ6mGvt1EB83kVNFFo8sXAg9BWQ9KytyjCkhrFsEhZa3zrxgD5dSRZaZaU5",
  "key7": "4Lcy6JRaC8oykS4whNvZcStsC8xGE9Zu57yiXcnBbqfj65PkGcdbPN6AUPhavbNKgy5adnCiQYzKyDEpjin5oRvv",
  "key8": "231UPiKSwqzVKZwX8xcF9FJWSNrfDMXkJVfNuimi2rq218Bx7mKkpTBUiS8LS7h8AdHyTWN73US14GjrnPpiNYsg",
  "key9": "2GAjFyBVoas8FVUkFtVNsiCs4jDmSnptrqcvdoGHjTtzDer5kLkuoqtvXNFdMtVT6wyPkQeQEh4WdGZfEu5o2dcF",
  "key10": "2pXVMJCZF6XXCFN9GW7LxJ1Py3U4HXQUpGpXPRNgKGsmH4Syv11ac4oSoJMxXtyUjEiDCX4HeuzNBKxbS5Gg5S6o",
  "key11": "2NJMWXj4wZFXb5FhVTjsJPURdGSbVt2As9dMx9qFre3hWGpeW2CLyWxCwQTVS3zJR8QjwiWp1jyUyoKdaGLKGSxj",
  "key12": "4u5V9FHNgS7sbLS7zakywg7fjCjcrNWeoBdy3HxqcPwcLUym9vXMfDVX6NRjKv3YQnJsocfVbwLp9xvCo4Xg6rcv",
  "key13": "57eJec29YQQayYeNWzUTQAH66PxrGkRpv2aA5k32c6zP5zGZ8NH8XHJXwG1Ecwvsca4c489bDvajAwnLTYo5Lus7",
  "key14": "57eJcZdEzJtpTVGTcVA4fctkRU4q7tKExeN1GKJT4bV5xaUkU2zNBehdyZzM2tzRNcDwtUKGrTeWNZPnzHKFSsrG",
  "key15": "9JyR186LKPNB7PtsXrutg4oYg4bpbWkVeCewfaxSVFfSNT4krZt7LC1J7YHo8jyg9VzUdHMgJBD2z4TPC1CgUHF",
  "key16": "2716UZ6zLATydRL934BjYsyQjpSrLceQZK6bYJyuMjR7dRpsyARH2vkgRDNxqJBpLextT5CTubiKnseoKmNtCaL3",
  "key17": "xhMvqMq8wD3JvEyQ3Y4kQnZCHvRLhpZhCWEKGwZju1xh8ucbZTCcFQeWDKtJ6SfZGApspqH1ai5vj4cK7mqMqHi",
  "key18": "2kcwfFSdFHtmRSxqS8xmu2wJZKa5A4CDjimZQNkTqwQ6Ay4odXeDJ4uE7rAg7fdALHc8eFNYyEjgyw2RNrx51Cxz",
  "key19": "5KXdMpRLJ35s8R8c99g7nxDBHkeihrcquUe4CcsZQ95NNfupN8PHRLXueEZY5xeDVzbA3Z71xeZHmpf172F6mnnA",
  "key20": "4t99AmTDE7sRcnGpnJQAUU4tUmCZ1nCWntqQYZ3HL7WQFjjdnLekKeu3jHEUhztYWPD6nqDcKxTtPeLjYq7S44cU",
  "key21": "4JcUxKNwzzQtstz7RPy4bzM6MMHuaVSVPBK8L7K3TUi8VTuLv9YnZKTj9nNs41ce9ntBpBA3tTkU17zMWjHgTvp1",
  "key22": "4eGGSSxobrpCvaF36Z5AC2PuTq6XLi7ntRfzoAjz32nG7Sn7dxDWUG4ATqWg2hTE8N5si29nbh8CipZLWWQ8woj9",
  "key23": "SvLdBm3GX8jYzPJjZcwaa727WxLemCH25y8Jko79M2rCWpKf6Xs3iEJVChDk8NHoTZ5ARYLwtSsCDJ9iqPreQLS",
  "key24": "2w3nKw9UZMS3go3r8CMVLpWUU15AwYTi8y1ktvZ7EzW28g4RvCD7epnsSyyRFPUvtu6i9LdaH5nY42M7nbXH47Lj",
  "key25": "5ZigeEWY3cL2C3NWkARTsBZzspfkPF6F6oiw7CWppioSa8JJX2dE96tghQQFq83i6qPd8prA29LTGESQ9yfSKXfi",
  "key26": "2shg2pdR6yLjP8tFXrhhdXAhX7eqiWRMU62f36HpkJyHCp5R5nzBt3wcH2dJcbkWkGTy4aABehv65dH7JPcUdvBS",
  "key27": "AMqGtbhyf1gTsYWUf1y4W9VraoeWopqoJFMq8cC2jcBeWCnsdQxwS3piqMfZBk2N8mshbzVrPUxBoBnrs63XNjX",
  "key28": "42UwrbDZbojz6T9zAAcRaZ4FPpZ3kDXEyh45tYAwUYktpuEdv2TD3App1PBuhY5Z712GSZ8dzfYVmCFgQTNJrXwQ",
  "key29": "3HPhL5Wsp2gLG4MtKTDmePsWxb6p2tVqPe8F9N1dnpns29XgNtsLqqBWiiEku6q7WaF3Ftsi92LhC277YmvAgSWc",
  "key30": "56F6MuKsxkjd76nWFQUzjcJL1bdrutazX8XJp49kwkBkY11HtgzPhEcCxh3L24W3quaLn98iyJdxTJTGeWBcCEHX",
  "key31": "4n4T1H9rjAAkodUAQnTZTyBmXbPhNkGM9Cn23gsykXPPg44yd5H4mzVibUmxDDoTTV4zCjH7fspGdAZXYfPoNxxf",
  "key32": "iLaGbJG2kSHprGrJV9VkFFanu6VFwRJrBH7cN2Bgunykjyg4ado1VrVbDhGZm2rULhMxKCTShHwK6MLYtG4XYsk",
  "key33": "2Lbfft4D9QtkvjR8oXCNpz1QY4BqWRHtPkMbrvoK3ZEMm3hbuMzq2Kjpp7yquPkBKz6EqdNGaXeV6P5pY67RQkEg",
  "key34": "4Pg5gMA9qfgZEPQcZRxTH2FWnp4KSjR1dwLiTwxbEDx6ny7JUWMazGADBRmUttqCDdevtM5ucZ5vocvkqNvFLEL8",
  "key35": "5vo5FgQMWiu6gRJSpiCnYuRBKGZhgL1bXmkGxER6Tz51T7mjZEDsEPTsNpKw2BtxK6t3UVwoWp3iT7MG4TeLqypx",
  "key36": "2kTKa1FnGZRJVx8AEUhCvCKsYo8EpLAEUQxeotWYtDPd5v5zr2sjCPqm6oKYXaq7QbMqnXratiGn3RGTp9WUemdo",
  "key37": "3Lw2jbkwDkjQq9gDqwKxq93jVH7qk5DHnGQztLVMgMxpjeo9ZKg4WVVC2mcs5AfHLwdNWbs1FavsmXTtWHrSrXnq",
  "key38": "3gZ32fbWPmZG8wUUuSq3sB2pHBNF74zekAfYuBs1YtZ8rfmSJUv6zw3g3x7z4ctpqWog3fjPYvEHqgvvPgNJWTRF",
  "key39": "2JteHMziEEQvJgawkLUcjMs4yjXFFyjejhUTXRJSzSYoJnp4XPEmQ5pKi927N5VA6hvnFZwGedrHDukEKghiKvD5",
  "key40": "2z8qxnSe6ZKSfupG1zCjuNDHgvpnMgAZe1NEWr9ETh6EvsMwBLRibcfRLdoo69XNNbcS7KzNibUGTD3gHo3WGKhn",
  "key41": "QvC2CusLyesGyE4da4KfCpm3yNx6F7UsqfDYh3QUyAM75ydaZqbKjpSDTzs6UE88iBnPUiSsCMRqqtg2Zwmu1Ts"
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

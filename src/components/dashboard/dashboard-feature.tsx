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
    "2aNbSQP2Z8KW4pr866z8n8RXdnftYWAri2rvs8zs9wUH8EnjLmic6f4sgzSoUpomgNeR2YQfLYs8x9LPeHuC8Jzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgCdvRfezU4URd7hQnWsEJvtRgrvhFnqEgRWvm3u1GwzjNJi8AqczXiwWrNVcxBk66LrAqJnPhwAGFVonQ5P2Vn",
  "key1": "5UeexceyYXGKcE1JsZ7mNDJ1GVtet76KSvLfDmywPNVzCDCaduwDSDuJPFMfs9uWjJ4ik3ndSPquohaN9gY6j6xa",
  "key2": "qBTHLwwcKCLALZWjYxyHAGHAhxWS1heyHrRmZsohkP1PibKqFejCm2PyaK8HSjZQyp5N6SM1JpjLyxWVH5WjaFJ",
  "key3": "5bAxHPpbWH2LiSZyp9JpLohUFWiBmN3piW3pbV75LHbuxdGJ77u7UKZrrxxTjekJkBJSQmD9XPXmCuNFZcpW1yP",
  "key4": "65AVWKWXrjEioCjLzWBFgRTqvYd3scPyeDLpF4D3cq5spH3BbAD4xETq7T7Aj6fPQ8w6wxt7oCP1mud9AQExgBLW",
  "key5": "2qHadNqcvjS8J5zPVoEQLEbvuciGcXiEtvM6ixhdwyf7Ri531RD4D2CWZFx5hhmixhWcZNmCSR9cuGnpVa1kNfje",
  "key6": "5rFydcuWn5yGvCsXa8NEwP2vxyoQK3USV9Cw49YtBFFetzUDcc8JPobjLBzbNqSTrh3VmxfxjmmENQV4szuD9de3",
  "key7": "3CvYgNX8mBRPa7sDaik1B5HDBmaBwkegYG8rNRTVyD9rYfKDLrNdgEk3XxkZ9v6GfHgHv91f6xVoWjGrYmqnxfH3",
  "key8": "PeaxCgf6B19Ndashh7TF8EQ8XUAFe7WZ8oEce5Z7aMXb48huJD5QyCZRYV88EfK61Cxx972BaMNcPJfFaKH9FKR",
  "key9": "3U3GYFPv1dpfN9au5NyoZKW4oQTnQNfBay61qxZ4BGyGhPeDJjE9wKfijXHKA7W1L6KALiwuDbYxJSJqSi49X7QX",
  "key10": "4Q8GfKd4b4yLEdY3S9g9cixKHfwcVxMrXZQfh3q8rnkXNh8FzepQKwLAU95LqdbN9przPGtjUWwtHnSMMct2zPC1",
  "key11": "M7n1Z8giUsPBDa9hutrEpy6aFyV3E5iEWH7JsEnPmmjWavfav2yqK1Mgk69EthvFABCQrBm2LVxipK77FUVmpNa",
  "key12": "5Upiy1Wvw2oTeVvoDW5K63YBNgC1qAANmaNQ17JyW6xu86WcCEMeWHUU8obLExH1QeU2vUYCuY7MpkhH4Z2fsMGQ",
  "key13": "3VmigQkT3jcFwrhJKXMwLsKL3BzWjqF872WzAMYfGrH4cprju72A9anABuaJZQxgcLCc7KJdBqtinh7hYJ6eBbRa",
  "key14": "ZM8n83Lxpq4C5TXVhbkUXfjLMsmKrPJs9AcYCa7zPZ8rFvcbmGTZZrYU9wdbMS8Nw4XBEK1Fg1bxtRyJ1anRfeS",
  "key15": "4chMdgZKjKyViK3516HdUiJ88gxYqsNQfpEFpcaGeVC74bh6h4QfLdcgScrcyhqtTmfwe6ZyYyaE5tSb3V2jdnsp",
  "key16": "QEWXeM3K36wHRsQCvEFuSHHXdQ96NjwcmrHKkq7acGsJgzrLVY6GWerr3TnbVjY57vbvx7nBFfE1UY6EFDdtGsN",
  "key17": "3L7x33xqFJchHVdoCuPexLHvYdxJsoaAPc19FQG3HtjkyqUKNGTTGuVWyKYd7a1EZFesEJ4xu1U2CpPCEs5iAo3i",
  "key18": "54kCng7FL1Vhn2theFhXfqeui9VaxPqkd72FD7dNwGkUAWJwpomc6CdxKtocCVGCGg27btowUJP28mckMPZfh1bP",
  "key19": "2tJUWympeMwRL4d7KXrv9L6W3jgNAHAf8QbRoGdGZxz4Ru9s8vEuSqaLt72ra7bisNyJkPZuSrh36xaSe2e8eLnr",
  "key20": "4NtZF6fWkuevue4SfEbRaLXjkeBoccg9aEDQCtZxcefMiQ814FdcrQomdy9KPXzXe8CQhXud2KvKcvhf5KB7dd8C",
  "key21": "2n5kGt8kvjZkrRi9oca7T4WcvwFd57QJFTF6SU3EfTvsHY7rotSEc4VkB6HLV31aQCWg3MYWjwCaJy55evBwgLDr",
  "key22": "3F18UEa3EGx1J8EAqgMR69cv9KiuS8rHzh4QdzXTDGiqkbzGJaNSxoNQ5z8m2EMaVqLuRqK5bm59UWvo55PCyCbn",
  "key23": "5R8ubddCLSHhVJEfQSytt3LEVWjZ3fSW7S5gvTL6WAcErvBw2R1i3hUtTv498Xto42zTKXGch75bX9QB4vwQAaZi",
  "key24": "4rWzzkVjhAi4ahgmNN6EnFkpEq92hRMwt6w46PiGhtXssGAz5Kxj2cEeYhMpcyy6wBuCpz3ZKL1DFq3WmDvhTweS",
  "key25": "5G9gpewwcd11cmNwEheTWkUnB4hmDeY4hZdwc5jVs8Svpp5NTFtwnA3QAAtucHQQq66tj8vSmrocF6RqhQjBLAcT",
  "key26": "5sxu1TjL2fVyhiyPY8fH2EAG7H1GCMCQ3roeQKJw924dzajtzg9bzy3YpG66oiLd3cjgkRTyG7CULdd1zrMeyYsE",
  "key27": "2x4JYTKj8XdGq8DhLkxTcgP9VVDPXbzeWEDpMLaybMPw3ofhbzHd94P6fx55AXR9BKcKKhZXaFS8aJNZSAa3JEnn",
  "key28": "5SAj7YiHTiPG8VJgBE2N54JeWqw91QxpKxpuBAfx3LMLQHKC5yRNQcBNgxCdr6vPiBjMhZZWhznjQ5LUqKx4sB4h",
  "key29": "eUFXrd8sZjMES6E8iUXxA371yoBfEGVUQAqfJAchYPQwScQQpd9T2WFGfYNM6ct9p9xV6xvtxxSLse2CUcmTHw7",
  "key30": "2h3saAHkxMoVcAmyueFyE5NPUnP5c41Li58RN3QJpUHzQaWzTjtAwQW8xLvAdrgqceLrRzQKoj7kYViqmgnrcvmi",
  "key31": "5mo87uSmJG1CQ4WvoekxhJDeX85582XSzySbkdUMPvUFYbXNAsad9bLtudbZEXpsYg2r3p8ZqJzD8qxFjTMPV4HV",
  "key32": "1zwtnb8kCpdeHmDeP861ZPrHaqvqtc8mRQue2fHmeTahRGnD7UahVtYD5Vr5GCNKEtRf5pAmd2D3x8SYD6PNaoX",
  "key33": "2dBUtdpMKABSfv3YG3SZchh8zcUPJ2b7h373qcpXGEopunKcs2hTUN36idPLXE1dvVW85LM3JEz6MuZaRVHP4zWh",
  "key34": "4EPkM2khaTxyxPBgfH4k9fUjH4fbaS2nkvMTLb1p59dtsPQx2Uqx1iht1xT5vMcVccFyECqeb7jRB69ngaXc35GH"
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

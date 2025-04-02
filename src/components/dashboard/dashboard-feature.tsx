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
    "4zEUf4euEmnpwHkN4GmFc22uCXzuZfvfirkVDEiuBEL4PhpQ1JphhSdGhPz7CxikAhCUGpDKQovqYUptB3Mwtj6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AFCdntWKaMLSBTqf6TSXctF5a5ZH4JouC4BNsmRpZ1bi1ZjXsYGttpFx7RZv9Mtd5WmUBByodEMSFVpZYkhWvBc",
  "key1": "ZmEE5UwbTFjPxu1RaZpLKyW3x92tQfCEZ1mGhcU2XTtSJtmn9empoDCB66nvpaJjg7soCG4BWAHa1dwXtnJLL2p",
  "key2": "4cXfGEptHmWPNKv7aHZxbMdkuYEJvaqLSwYnvHrQNQanKEwicDrH8h8fr8dCbG1uXAjNbCryfsrZQ4FLLjN998KN",
  "key3": "4so37ZG1YaXyMjpf1g91dnWn9ZczRuBfoWj8BAVAmt1uEmcgMFZBRP41VmsTzmzKmh66Eq67dx74T1UpkgxvWxLe",
  "key4": "h5TkVWjxUPgJkLgFFFQB7jupL4K6JJCbpBjwGgg8jsgaddPK4vc1avKdv7ruJcz2kLdJXTsXjh2yJJmuTrh3EKG",
  "key5": "L7JtPQtLbUrykThr37UJMCf9fvoRfLTYw75ccwaucsFTnFc54hkPQ3nGuxvLr3fGzhf3UtL9ToShuFCmUWWtp2w",
  "key6": "uCXkLKYpmfiWnR5kCtJuLJk52RSTZCeNERpYXAGXuuosX43PWtHD7DdaEHUyTLhoVLUGZx4DwAPT7ShA7bTAnPG",
  "key7": "4xWGMJ5m6YwyrfxTHqHHxqnFDdXwjKZWqVicnqTiYVjTeR4wf6VpCXwcwaTKoBK2PLKv1NqRF5Sph7PZvi9XNpYb",
  "key8": "31x6w2fN9uhsKY4AW51tu2gNFnso8j9iriayrhxVtCfzYFYc8cTZcsZDifGkrQdWNUzmmiG9UhrwAk4CiFag2tbj",
  "key9": "vkxV8CGeZ1iPTKDGr7NYEDoX8BAfW1aY3EcDM2SgXmngGZL5pyTZaKSrGo49qQeoPqGQtpsdYYEFFCtnaa14EwF",
  "key10": "3YQApHu4WN8ncPhADLn36aAJKZNJTuy6yu5D8wbSuZhaD21UcMhFX6rhyokJ8KgD9YUzdaSKXPmCYgKxjyBjvrED",
  "key11": "3KX767H4V8f7ZtwCjvRWkfJunWCXFjh8TqQnpuuFv9mRSZBxGr9PbNcwsVUpJgCngPMJGHK4TKJs3Wu8k99wqVQX",
  "key12": "4qz1NzPFu81CAwE68xqQgxNvwGL9L8PkUTozWpJ9m3hHiM3yFBGf84nJByUFh4j12SQ5BBDvqk46DWboZHUW2jam",
  "key13": "22xMCw2UdxtzpZkdeGEZvyu2i2ebbFdn82ny6YrGPHcPzEaVfdKofbDkAp8vXA5f2vokzw7e6gZD7VeLi4HVkCbh",
  "key14": "4fbqTFKjJf8NejNGU9pt89kGFU4hVZxi4rrCQJ8tP9hfVc6MvZggUmL912AX2f1SmKz5238nN2gV7hXtpabsYpsz",
  "key15": "61FMhfaAyar34r36GTKaYGwNXfsueKWz1ZwhkfDatdGH2RdpCpR9XqpKvME5dabqjfZmVjBqvgq6juqeixJL4iqQ",
  "key16": "5csb9SEtZXS6moKHnGJ95tUdJ99YuXpMkVTfiC15kKnyQUYob6pxoRhfTywmba57sr7GHdEhdiJaSR5ocVX25LLk",
  "key17": "8Wiq8TJsPQWx1PAtjuytMEXuVapZDTgEpC2ueLeMLez544yR1qBuX5NCQgRZWML7tgciH2XF4Jsgt7xJ77UsZQj",
  "key18": "3zEbJG65uYF4r97NugK35Ezw4je97QdnA5qedHaNq4z85b8q5Q6gF8MheZyVXMTzKpX7LftB3WaNniLNDCZhSMdE",
  "key19": "3F6MrMbAxsSDYdWbusLFP9VMyB59rnh5VHRqbGbhBcdkUxyif4Asec9cMLx7NaLAWvJiKUyPuxgWDjVy25VnymHi",
  "key20": "sgfFvHdT5yWVWCNwSB3A4YbLro4hwv446eMQR1Vgkg98JaLK9oM4dWa74hE2uA1Y4NCQWHDv2U4scTL83nH4W5E",
  "key21": "4sbTRpS9x5HJ4sfBJw9v11NyPRk3xoxU9s6HJB6hVWmoivqwxKkR8JKpFpHgBMoV7UAsmxPLgHLfsmvVDRpby9ek",
  "key22": "2GS4QJuCr2URBMfT7vY3eH6QFSW75vviWdSEG4ydvuuS53XYaNbYBmtcAvvUSktxFen3CmayTsVvnVvkSeV41bgc",
  "key23": "sKWd2D484d3sMdpQY9JZJfScwXMGJJSqXnwFrcLMGbMohQeU4iuP57yB9h7XEhH1XbbjxJ1yR3gu67ST3vfW3Ho",
  "key24": "2rsYdexW1SmYWBAaCvDjRuXMEMaUnc9KqcvqaKFN8b2D6nwUE1Hp4NpB44GJsRFGTMGUdA88dh1km7nDXfgbbnH6",
  "key25": "45cCMfrDabxUYNEU9vsB7ryi6oW9aJZ93xN2Y5TsTfXjZTwwpK5pryXDS7v6LYgixUszhTLso5C6Acub3e4CyXQt",
  "key26": "5J1R4yCZJqRJJf8dVeDg7qtLEpU54zLr1AwZAeeRCpDs6EJdDj3PC6ai8xo6UCc87pdAEgvhfLnTNBfD7W6auDM1",
  "key27": "ruonYNcru8nKu5c3W8JaMfL71fWk5sgq2Mep9X9A3v87VNDx1Nj6zjG13ZmNm32K1vrxipa2tBGVmPzHeWF9YuH",
  "key28": "4TjnczM1tWC4gpnYSF2L4BLRPEBvV4rYD4wwC6pNA6iUXbn7HkQRxKxrtzYq3qK3EJWpFGHwpmRkGxAXewEw2Vkh",
  "key29": "2D8HjPnqmPDiPRcDb2kRUY3s3AC8hDtyKrweeS9f8fMy2UPTdbNEwzvWoFkzyZjVmMyuQUUCJKMRMyr64EfMs57X",
  "key30": "2qmQ91UPyPgnJYfGq9UENGHSn9WS1TDibJGEHBVuaZPfHNVWXsLeoYaVnfQcWZdtwFDjpgLYXVQrccbVqBNwFg7w",
  "key31": "4638x3YgaFUA4cvaBZaiUeha5ANvc9xoRGr63w1hiNAkCYh2ycjmUia7iGUWNasqBXaSgxQ499qcEQXZZxSj2e8j",
  "key32": "3nk6vnaziywNokgBpTXJw13pcd7PJ64arvY9nPQjApXB1HcUNDNG8b4iViTVkYdj2r8i1z4VK38iA9fGFaLNDbWy",
  "key33": "58bwp4XcbhCNvqvnq1uxJX5NYtTa8XpM2AChYMGWwPNwJZkfQvv3Nx7ZBCcjs35WiYThevVDUoUn915jJYCCdzR2",
  "key34": "59U7RMLSEzHcFU2G6Hc9PandRpz9MzXNjMtKKg3wEte1Jff5eZcUhJLnguWpJz1JsxrUvJc3avAbLwSa1SUaTehS",
  "key35": "5eAjirFy7omeRmvCryQH2sqDeiZoEtquTk7tpVTz5ab5V1vqD36FHhaVpDbRnF4dHQ8RtHY69eBGKL9t4dyRR5xq",
  "key36": "2dqVFu3up8rKfVZvFGMmR5Ru3Aynwv86rH8Dxsv3FUiAiwM6U2C9EYaU7kGbWjTAD9RTLyxYJnCTUffCmyivCe1Y"
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

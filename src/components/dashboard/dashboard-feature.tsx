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
    "D22DDjrHxfALZHoiLKNzNaf9Ka8DAt7EmxxZ2tArCYgxjgvZDbueaooneftZKsQqFgo9VsGMQ1BGgJEkU6GfXoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuLopbpFUigkBEaZLdpSo8wfatcxWcXpjVsEugczEGoLaxjto2kx6QNj4jR2F3tSX5bz9SXsUfEsvvn14rru7ro",
  "key1": "3zX4y8bVv2YFXWp5ZrAJ65gHQdarbEhk851t8JgwY3ZpspteD7JS23Eb9Soibipzdg9v7Prw89XYhTBjzZYKLyXk",
  "key2": "2VMvsdwxAEeYmrLfL6d2dok2UeetLHQJxQVMK5JsV6NDP7bNEMwAj1eaXxqYGx3nkEyJHL5yvyAjJWf6BtLGkhzJ",
  "key3": "2bRVU8kCeEuhHN5X4FHTC3QgjKWcbcxRz3mYoqiKPjhxGWZCy6J2aWgnk5LnhKAsYmUBjSy95nTffV9rpJMbpxRe",
  "key4": "3KFYtbykXcf1UvhpWVmaxnXzPP6zr8JFtMckt58f9WwjYo4aEBtQCec45MKE7rMkfQnoft9gQKQBR9zNQcaZ7ExZ",
  "key5": "3i4Q7yuj73y5hEdmiKqZfNHWcBByRGreaUUnWkHDL7GA1Q8C33FhiZwWkadJdFYc6Yz8isC23Pyfn3D8gkqG7irr",
  "key6": "4iHr9gZmXb5vTN4hf7VuPgSuWZDWgH5DpuydopNtXo6di66rdVa8conEoPF5ktxfvco1okKNJfva59rTX76vQfwe",
  "key7": "3aNNJrrVrPEe24k3RcUQrJZNu7jUUQsSnSBrJmZxwVFW2JToKCzpoyJUppSui9DizJGxhLzLA5RjcBSDVmCquoP3",
  "key8": "5Ub83TgEegBg1azeeCmZCfo6AeFtmtRQAVqhwh4TdiUYsBd97AbxpqzHqy9AiMu5UesnF71EWuZvcV3JAdaTaXD9",
  "key9": "iCuYTuYnbTeMS3wAght2gkJxxrCE9FkA6icSgie7iRbi74FgG8UZGZMi7XjLJiqPsMGD63mkyBcnsJLZN6z5X5t",
  "key10": "2XBwf11GWzVNTtUkDFgTAxGgeXKxEBoQDhnsSduSDQYdtphtqXrCxZofSkKET8duqmyvgLnrBGnaCBV1dG1Qfue2",
  "key11": "3dcpMD8KfktKSzhtbhmXcFcLnXsAjourXSNgcEAqWPokHCk3MjKFuVtW5hdug3onywn1YAunztgiZc3tTCmJ67ku",
  "key12": "yoFzAKamgbhBWm6igkuygD15v5fZHHDn1syh8bNhSQZfYTPHsthca9gpFprERuceyg72w7ijBK3bWA7kMZBv1S5",
  "key13": "4b9ZPwpn7BaNmNmdQN2TD6FnxrZj9qPfVg6hkQ9ERBFT44e4oNsb3B5fmJtoDafY8xwBxoG3519J4WgBKQBiU8t2",
  "key14": "2vGVy35KiNPPVh63mH2ZJwndpXTSXEjqnnFQ9YiMp1y49f4SjHigCzNhEfzk3xB4um8o8hZ7b6aoN5UVDSkwTVT2",
  "key15": "3znBWuLY5eJ7tocunBqgAufkXZwCfDUAX9rRgJuw1qaSHDSGRLbA8fjUtJywfY9WXkpEsWdRYhN6fezhRpcqEfze",
  "key16": "2iP3CfYhE13nS6PYzEkgLmc8xbnhTmK8GEJChphQu4LLfPEzoRA9dz1PLGBq7NSQxYWQ9ucBhK7rMH63xKPC3qoW",
  "key17": "5QBq9bpn7aGSYmPcFZZ6ifqHekoPKXJ79kD43hcvTicaYEzZnkiW8wmXFU5h3tHubmsctF9xKd6wJJKUMcTVHpmN",
  "key18": "3QYYzePjWPc5a9H1cxXEgkypZHyGYMbPiqao3AU2jbRYrr6Hw5oGVGS9akCS8U4ftJW7Do3LexZPykDYFCCPz1hE",
  "key19": "2bN1gJCRiPd2p4feyBq4xjbXihtjS8Pitb1VgBHfMTAZ3HV5o3vLzd7QwmRyqecbqZ6fpEAFW1ChaVwMYBpgysUg",
  "key20": "25kWHFHVLKD15Q1fpHJQTXB1p4W4uqWAc6UPxY72QnS4ENVE6p2HWwGeKEVeunQHqbaZdJcfvNeEwbb8Hbb9cN8z",
  "key21": "5rVb8KmxvCNQYqof1LaMuoPD9EMoKUQJpf8AikPtCPNwa8xX5HDiRti51ox21SsAyqfiXpQXq6nMjMCZUq8cMZUa",
  "key22": "3K9uPU3LRmx43FHWC9JVJuHACdwXAPnmgYvtiARktawbeQ9pHEcV2cPb4YA9qzFyPJzz317JnMsQ2oDkoHX3pQB5",
  "key23": "CFkmSfhzkkEAaNM2NpCa2GgaxV4nEkwqFZAM5pqTc9apPh78GFS7pf7jaWpM2VKKAzsSWgnE4UZfGBTHX6HSF8C",
  "key24": "zvCa3BSGUv8YdPAUtxVdZiEdEZ3G2odkY74AVjLQYbDTe3aoGjcDmoCYtRcL85oLQBTSFnQFCvoWJdLqf9Gf4pR",
  "key25": "b3U5mtBuzzLmsQQipkZpYMNp8R3Dg87pWX2DnCqXyU57KmEZKWrZyhQpLUszVU6i62C3wxi7Li4vmzaQcB5FVX6",
  "key26": "veK9mAdLE6hB14AT56mBqmhf2NfEVm9EpQPECVSaTqByeNrWxDbCKiNb7tUpAwrZdsH2DZMBcVno94bempJ9PEM",
  "key27": "5osqYAoGM461vGRAmnf5ZDmdR4tmsA723WjTcdB9QcEFXjmnbY6sqZFUVWGJYG3YRTgRFwy13vv6STYfNNJFz1fW",
  "key28": "5pW5wxVwRJiYn9qnYmEErPafAmsFdnBtYGmU5tvABuYHjBYDZArr7ZJheWbqeaA1zos12qg6yVRPx9hbyju4VjjT",
  "key29": "46Vy4jiLfeoXiETzfpuJxUg1QV8Pn6mNoDRgBnTYtjEwJ1qt71jDubyqBcP2Gm1RXg8du6jtfV8iStE2GEP9Lw59",
  "key30": "C9jVfTCwA8qUoDbAE1t3PJb4iK8Tk88Ah9RTuot1F3ZyKd4vWs75SP18eawrydKVFnrWLJJxRYWwQUbttYLTq9m",
  "key31": "2WtddaUWVXuvANKk7AMRM8eiXXvoPGqEUSBJrcepxzbwxYFLcJi3tkXH6t2kABWMJNyKUeyvAG1vwP2unLJCAK1b",
  "key32": "39wDS7sGFdEyVVyqLBNd9ZvAkNLRdg1ita5awAmVeUGaana4aBWMeZ9GEkHJzK2tTagS3YubsjPc8eWPP5SogY5t",
  "key33": "MvmZH2xjxi2WMjE27ZNPKJMGhssdjspP6pJPLvRJRxwPcFWSoKKxzcMRR5Y5vcq5FPG3wikSUN8YLNsNCFzjNP4",
  "key34": "4ysQGA4MAn2bSBaZbpMyu4z87Zh2CoHfRg8ZiFMztxH5sR6AP99xyr6hyU3d8AMW1x6z7YPGin55vHEJ5HeWUJwg",
  "key35": "X48dtN8K8yT7Wk2JTz15STVAuLiERi2adfJVYKuzrLn6KF224DdQq45ZAdaTYNhQ7spLVurLc2Pi86mLcQYW9TD",
  "key36": "yjoPyNAbswzDGwWp1qdYoQAKGDp46e4PvZLqXQwJpEGVaQpsRHatzZTDbC7bq9zDURmhD9DjaYNfdhTzGWdQ9yL",
  "key37": "2PEDSRTRoD5rDtdvXZhiEe9KFpQzQwaAZCkYTRuCmPqL54Ky1TEEjVpC9b9q6czm6HKxjtqUbxzB1yJGCGM2ukz3",
  "key38": "49HVvmPB3T44kgkhNRSUsCmiaJSQi1KJoWAoWoi2pTiiN6zEeL5SZtp3PYVXbnDAuquo2cNmNUDVfvTZrxuff2HB",
  "key39": "63MTJp6BYwXkhieWF2TgLTTyTrcdya45jZGifvSiB7dcLFTKfZviJNd3wX5LobctUKVRuXT1JdZGF77mcspThxhR",
  "key40": "4QWHWbtrm97ipTC7ZGgoLwwKW79wnfsTB2FjrpJm6uWhBpfzD2etVNWWq5KQppM71dnJegigxewyjvJs6hRTKSTi",
  "key41": "2SwwchhnDt1a5Zmhfyur5i7Sy7ZRJwXmMVQ2XN15KPczwL9a9wH977fREcpCk8bd2Driz9gwAYRdndnYK4UEVLLk",
  "key42": "4D3zWDaZEmFz5FkNicL6Zqh92zU2kZfSRBNchRYmYVPzZ884z8RraBH1dqZx4Pq43w5yvwSgJ955or3a2dwufbu1",
  "key43": "3eRDjSiKKE9fwQ5V1u4FewrfxU4TF74AujKCjVNmaDWCb1goQy6BR7cKxFCYUxmK6jgUixr63oPAJNauzgHjEpAc",
  "key44": "2yfmhSX2WsxZ9439WGu2mfurYxHjyWFupDxQLD4cQHUdV8EFJomhaYJYusB9PJKeYixmG5V9VuvB6d34oDzUvyxc",
  "key45": "5X1xu1NvEG2CM8pSK22qQCVCVbRM4u3QJic2eeWYqE4t2YxfFEYfceCvMgqqRsg6L9RqTFpwMXpQM2ZMTByywabp",
  "key46": "5GXTxhLahTiekaejQqPapPjDFMjWABaQCpYfmmRKb6EBeaZ98NAWgB12GaxzhUQrti13Li1i5CsTKzut7e1gjVGy",
  "key47": "yixddVvYNbGHi2Vf1JEVeDMrmUuoUWQg1Pj1JExbthZ7Fk3GsH7KsQMkx28JTpgKn3K6ght32FMYyrTQ1kcf7QE",
  "key48": "2jHqbQwUynDYLfFKFerKeoCAx9VjxgRFduJhZtxFgYEUAxQD2QHLEJzSm3kTgYtAYBasQYYAey13n3RLRhURYjZc",
  "key49": "61NbZGv91Z6emheXG79CnfuiU2hiSbPSeEgoZkuiop1apoUMUseCp3Eey99XwJYLY6xfW3ZpN9NBCVoWVhBifTQh"
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

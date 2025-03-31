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
    "2WHq5L7Xiujydu2hJKXekmMy44bbkba5GtTzjNSYSHBBTVS7323ACP7JqLMTxtjzfPbYRwwpNiKJBSuxwjYJmsLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGVfKKNLSdJHUYMbjw4J1p7jWfk6SUrUPWKG6DbkAmTLvzj9Wsq3JuC9Y95P3ztwoaPsmR8VSVCwAiorfEKBaFF",
  "key1": "5jesD5u7WDVCZztqLSoxv2uwEvR6zMZ435dwA3uh757JsWattz6AN6RV5zaCJY9aJpawqMhbVNXgpYYsUpWaKypn",
  "key2": "2zFLTzHNnrmJbsJ5jz4ij6bW5fwDZVWA2VGyT72zTdz3pk4FRnKoyx2TpcoVxk86Hkkfgb7XpEbjtM4yLScsWuc7",
  "key3": "43oLXRvMT8g6pJPTWgjzTSmbWPGhrcF3K9DHs6Lhe9JBH9pXNq8RrwQ6eFziCmM38YxN6EbWkhU1HWhDMiTWPPgq",
  "key4": "DAUNGvja9pnVch3d22JqNLqpNJL8DUziPh5hL3hW9wfkgcoVQMyvTjT5YoRjCzoAb35Uadc6SUa473VGJ75o6AX",
  "key5": "YdHhdXyRZC8f6YbGMUWedcVn1V2cYyL76zy75cCQEX13S69PyoLdavHkhu8rv2dKS6m4aZo5p5dN6EbkPvqvcoj",
  "key6": "HLZszKmW5zRv6K9hMY4i3ocgiefhtne5UumnBvVdcrv4ZwjiekZLYaEPYMCP23vveTkip2DBiVZfQpwjTcn7uGR",
  "key7": "FHVcoZmKCRbqTLdu22mj6JM8SEN2ojZLTtWDwQP2WAf9nVkCZ6Y8eDVudxuG1uY5VBYXoV6TnCpT66F3CBdeUEo",
  "key8": "4CkrbP5vqhDCgYtN92PXQTReKrvsygchNmFdNiZH5Gues2d2SkKX9UALFZFKinXzM6namP6ppFc3GGHzuYZiGaq5",
  "key9": "JgoaM1ha7omS4zTEJGcF242SZgybMyaqQPtrh8Y5XA1zZdZAs95GuKFK98xzQvm8JpzGP1zFhN5LFzkoDkBRa9F",
  "key10": "3ejXM8RgYAQ6R1tXDNPDNHHpSmpNDp8QLEYthCvfZZwJExs3iBfYFxtuzxcnkA3yowfPZ5KawJ2GYrChgSEWHbx1",
  "key11": "2yoTgNVSLYb2t17piLyraNkfMeBMf829Qm3UzYmtE2HWCxpFTqFuoy8eHYknvct85uaRmswJvgSPBRyax5vVSgkT",
  "key12": "kYx7uhXQeE878c8ZPdSjVxxPQwLHT5wQvq4SetbHom1uYzpvzi3LGFSLUbMzTiQKaovENQNy3Nw1FSGi8EFqeLD",
  "key13": "3GT3kh7wKeyDrvzMkJuvZze4A731kQpU4bNJqqXjedUsSsr7fX4wKMzYz2YY2E6zZs2kRpfNoaLVzcJaa5Siv78e",
  "key14": "5PNwTHo4UTMGfC8FD3J3F8QKKW3f2XfbCfu6t4dvMLUtcU5ceiNEoBAgHrjHEQKVbpzv327BjTnkWDftEjVrNZmf",
  "key15": "4XkfbMJuGCqW7ZycjJEwPdNJujwy15pYdW9Ru4HoEoDQ4ZnAsGXwxwZtRX5Yg2ShvUyfNw4jQafYgFG4P5Njcoja",
  "key16": "2MrL8r8hZruVC4NTg74dNarVBkptt7EMg8xT6be2EKKZ6PDAWn5oDS1o1RD4UQGs8qbQSEUf5WNYQ6dDiYeNDzP3",
  "key17": "Fdw7iRFuCc9dtwRY7RYGg3QigBuAsipsWgr5vLPEuT27K8ei3CTDfLqsDpmTEXb9uZJQpMXfNWpq7FZZsaVNF5c",
  "key18": "2Dysxq1EpPTVxpJo6JDzincwRLVAd6ZMfK2vDT52GwfcfyCcoCvrdGQEVYAvwE3hKvS2dWyZ1SA73wADaxNAogBg",
  "key19": "44REEuMPpegdjaFxRbYA3CVa4QVq2xzvFKNX6gbo4vGsuU1gaaK6aemMKjvxPsfoJAB89znAPnyZbBDMNU1WWnFF",
  "key20": "2VCT8nw9iFVGvBwhPNypewKpywqNukaw6y3U7qQPwotEiRnLphwN7HH2vEMVsp1677TUibCWBy9GKSkYaU2yr3BQ",
  "key21": "4eF5BscXac8TkhiU3pLEq1WEmUT1Wv4Tq9TQ235cmDfw5JgFUN8MHGbye4nG9rEiYUmFKyRpqw89D3Q4qaabpUih",
  "key22": "82GSfabxR6SNgYUq8dMaSQWMiavMbifVMGn1QzyUDdHScGTo3qxJuf9iAHLZFat6JFQsHcnBppczte3F3ujzXyP",
  "key23": "4JKZpMLkDjiKSYpXaJ8vgGL9veGS8DgAJt7fdaZeeK7vLrJPcCVD4KL74FgJzWPYD7wsLLFJbXQPNLn68Tk5TV3b",
  "key24": "2YKG1QZkyxVatmgF4BWZ7L6YGsgKxUYyigE6HVpP4gAFoRK3H3Q5pniTzH7Ssv47p3tukosiv8oGAPs7dHwsbTqE",
  "key25": "2PpWEH7bVNx7MN41ymt7B8VvcS8WBk76XinxjB7NjqBCaurHxZej2inWpHF6cttZhjhVcce6UHm8NyyEmdtdEkGP",
  "key26": "279WDrEpGn45nwEzeUeAUmGAidEHZ59yktLc8FSgESfK1WENjuokLKFUSCLVGEBtpBJtkuAsYhk127zmwmqBPmz9",
  "key27": "4sv5xMe6QQWBjvv5GbF4tQzNfCkMZYXdWRRgfzQwNdcno5oh68QaAfbympCC1QEWd1mFJj19XR86z5jmBWjnzDpz",
  "key28": "4SnZxy3xZtCHeYnXZjvWmkgJwDDrP5Ukn8VLNdJkR4BgZZxuhkXwFRVxbR495QNdecQhah1fUazqXaqmU5fSZmYE",
  "key29": "36aHxK2mzFto7896kiutDdJDLcAZaa12Dsnhx7PhuigTudDtwht4ua8cAHBuBKunQtzHL7LF3zeDa31SGEBUuFq3",
  "key30": "54MATTj3NhYzdksb3Gv8urLjh5QRcUQy8Uw4ZYF3yXNNnWTHpNWctk6rgytnKyuHZ5kVafiFEHbS3E6QCNxWuqyV",
  "key31": "2GrAXJWZD8cbcwo9ZE1KPFWPWuWMwZowk1hNiEDRsMfmqVj4GMo2Sy7wM7JGPoLhnEL47t9KaheXeb4W6B6xXGJi",
  "key32": "5oe1ULHuGfVA6dtXovHw9EgygeffisYHkGdL2GMjeWGSmkfopvDeApkmxQ5VSEkw2PKUUTtPtwzjN758DQHdxwsZ",
  "key33": "3zgEkvgXxMrQiDbzwBzJLn3f11WH93XvRZzL8CJKrxoaG1LGEVZHkBcCsJbDVdFUWitXXZnwntxjytJa9j1ygMmU",
  "key34": "5mecjD4LkwHDKSB3kGWWYS8nAV6hMVLr7CdwSLRKy93WBA3EHUQHXHseUFcRji7MkCRH67ohxtMCA7riBc7XgdT5",
  "key35": "2rJ1d8vcnYi2vFcRef4kAyoSuxhGysF3bWwYxhLBrJpDAwA58iZAq3SxVE16XrUGatgx15bRAG2wzDir2wrsKhwF",
  "key36": "2BwNKVbGJ9bUxSdc5ZW8cfXQSFmSQzBdV32vEoG4wkyD65ZA8NFM8muQmKRbNL9xyspuDjKajEHvaAP9HvyH5Ajf",
  "key37": "2qnxoaQWwM7CAU7nCKoi52ox1jczw2xyHg3bCWRVsvyVGAX3Kpc7aPf7JuVzPDExQjduC34XbF7GCLLsnKYpE42o",
  "key38": "35vRPfHcJUj9vUF6ssk5XcUt5RWR4KDj27npXJgt7vStKHuTFk5yEjdRYXg4sCQzhDUSwc9rQJvANvviXsuGVtve",
  "key39": "44Ma4Uskk7cr3bjYVvK69PNsmPdP1om7Vuc7WUjkHEAtb6V92MP8y4T26L1KwmQdh6yxEwjNg1A4VBoLf2bfeWgv",
  "key40": "2z9JQj2GbGVKHnFjtN3wYp4KejPcj9dTdzKw3KWXWaXK4iAxLp7y1vFeqAdJPZBa27jKAKjwUvG2r7LJnkfsRzFV",
  "key41": "2zefFjRPU7LnGS2L934a274gfNSD6k4VnNiEDbdWNeqXE7RNtTTdfrTHwtC3KgYhtacCd3ziDJSVvkuXfnzcHWxV",
  "key42": "2CDtyWiqCAbrU9N6KCXiphCsVCrHiqAdupXeTRf66dufPDuzFAR6SptZ1RjdaFixm1yaLpsEddY5TXfqs1p9haFe",
  "key43": "4ZaZbfGUeGuY6wJ6AFs6tyejwDtUsKVS8iPmD6Yo5k1DBGxifFcVvm3pH5Q4DJW1bEQrRXrW648kCQu3Zgdd3ohf"
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

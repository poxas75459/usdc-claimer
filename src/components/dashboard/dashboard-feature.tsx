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
    "33JXCdGeDpB6yu4Bmjc1jsB6sy7GrL3EvtHXk788Z5GQRCeSAQLWd7b5Pg5L8bhFryTuptkf16Nw7z9TuJGKtYgB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d7psygkd1eFMWLjEJbV6bFen8HAtHXCAudH7yy3W3q85fgRJZqkJSPpYcBfrRYdeXtg9Y9mg59MQRKTHGpsiVdr",
  "key1": "2vz5CfT55ozMnQwxotG3ec3gks3h6HRfoFvTZ8dZWjNkucvpXEd17PQ6DcEFWBVm95zajZjGes1ZpzVTBQ5Fm1bf",
  "key2": "tz5uRz4NUB5Z1XHNEQz1Zf11e2nqU2PYRxo13Uhjb4Fob6Q5Sev9yUMhRNYT8aShU5z7an1M11ke7YtVhHKcAuW",
  "key3": "4sEKwn3xfj652XWQeMJVBaKq5PgHYeeCb45vLox5VhxKTPR6DindK1KsVMwBz2Qp1zJscWXoArfCA8zvaLb1HLN6",
  "key4": "RQnupPX6auQgUs9ZzRE7mU4C5AqVCjfUj2Frc1nVVBLMwMgLW81NDryF7RkwrHKSUvVHj5wbTSrYYPST3KMXsus",
  "key5": "3iXCoiKMzUDEwF9kn4Ygmk1uAiqXrbKAgtRJqRLRP18yUGsNNHaiik58tQTmKpDrdqPpPZ7VkQJ355oAMpewjgiR",
  "key6": "2pgcWr6WdCeWLxQgcBxY67LxbAEY24Q2eWJQ2DhDVseWDa4CgrPnNa19nHQqVpfxqbvuAmTGn3hr9pAUNrbQvVH5",
  "key7": "2G5S7Tmkr5S17xWv3Sp9DMRc4FRVXR6mELDkAzBqXFscGf1fk4SrDcLksiwNX9fArJwwzj7bsd1EfKN4shbnnvWt",
  "key8": "3YW4cFTRkvP4564vAJwuxhXuVPkeVMDAsxVirciXmpY1vDuKR8aFzggvoQraizsv1tpRY4yi31F1XG76QdkDuA2K",
  "key9": "2VRjk4LyuxARj96fzmEvrJyz6oRmq8af2W9a2goX2n8JLqLPEbML4iPiyoUuchaEGJwJQMJ7xVahr7b9VZ3Cr8Nr",
  "key10": "5dC7asHCJhZ3KSZU3WGmt48rRkS5mAQfuWiikrbLpzNNrnAM9pubNUw7B1P4z35wuEWNEHdmtEUMy8xDB4EPkrPG",
  "key11": "3etHxbjxjvKXJYJV699mSEK7mQFZMqVe61DyW3jzeARFtrBf8o4foBA44GBBqTEnUKQxPs2U7rh4LgiQjceJmVrN",
  "key12": "64xo8eaJvfqC6yUVpj45q4iY8kzipisrhbt8HwyzHVxUBzR4gy7y8X37utw3ZZWMaEbtT8fxVsmBhkhLquLo5G7R",
  "key13": "5BMCxsWxHury4X5Z4kn8Vdk4fmwBC4VkzzvjZbBsvgX3ByhF3suHDh6NXjBThNt8nmDMjvabLKkoMCC9xiN2vLfG",
  "key14": "5Z7Q23uF3bFk8RpAabptn2zE7mBipTeCg5dDaLyUk4XMqKtXnJV6wGwEUrq1HmJtQRiKN9exngJhgwvJzByjSesj",
  "key15": "4MjZ9nFksod4YttfTX9yfGgxaPv1eUcBNy7RjAWfqCBQmkhPz8LGE1QdMAEKuXVCputsj9mPeHExG5pmxoEq6pWs",
  "key16": "5sn33zvu6CiF1Z7J2Sz2p2KFxFk7fM6TagCZjSxP6R7zXNh3jwnwG9PJvam98ZxWAwa7uCGvWUBLSmd3LbciZKa6",
  "key17": "79P5hcFg9PMJ7RFBLPHHMGWr5VBeAadCCSa5eGGPVRKpjrHGGtc1YkzAw4iZJ2tt9chCpVnZVck4J9VRKrD3awd",
  "key18": "2pvohnkT7CS4qsTjPXdMPkM6kaGAjo7rQqHpoqppJ6rqFWgtkkUbKHK4gbZnABUhKbtQtn2SkU3hZoki4bf85Qk2",
  "key19": "4VbHjzBpazF1uRXm1ciEnHK44ThhWu2KAhGzYRQxfpRVBBw9vdzKGsVtiEkpegG9r6CChfmJXxMUirnCBcfZ6uEo",
  "key20": "eSkXUQoVPTGKtisEjW1NWwcCHnmXVF8DqMkWh8pDf3zPqwQ2cVDwoTgdQzCm45bFiMf76iahBYy5RRz54rYoV3V",
  "key21": "5D8mBdcqNVc8Ac76GA9Zfr2UEPMdJZjUFrXbrHUfZrixJDwphFjLTQkHKLXUXno1pf1sKeSvYUfSpZUjPgQw764K",
  "key22": "3Hm6mDLXJHu4xLdQhuUuwuC34fzsRf8ZxCLzyBMPjd6v32katdxhebUJZ6GpjaQ4bbZPEdwrU7oD8GUdgTxCSCxy",
  "key23": "4bLaFgrwY98noGuDe6ZZxG9ZrUpUCnvuhcXrEgJvW4828oh4Fu2HJXHTJVeD2Tox6L8Y13ofub1ek1cAU8Z4uibb",
  "key24": "nLqdkPb8FjJ56FZioSZ1yt4m49QRaGodieVXR49AS9532bqXpqsgtc58VtmhAh2RBaM5pzacnyJVWVoeCjrAWdW",
  "key25": "5UCWEesYvqCnNCxS1bUUYVf6Nzk9kcniLyb7S8ZPpSDtkSb7pVrvpzpG2cQqVg9iGHaDW1gFTiyYg7F63faAQty",
  "key26": "2vBz8SWwTU6Bw2EXxQaktLSJwfPnaptHNJ7g4dQoFrRHrei7rjPrtFodHRFR65maqNTbukNtFw9cTzPKBTB72Fvs",
  "key27": "4BBWFcZ3vTQFddtdfWMLi2ZtQbh3R2FgSUZuTudkxyBwRuKhHdc9dQ5QeLnMf9BCetbzzJKvXnjEtPNV2kt5iawd",
  "key28": "2Jk86cv5u1jeXYye325zVox7vAjpAKDc13zi5x7DMbskhEWARcVGgDeJYKkeoCgv3yo2ydRYWSMNTPbeKMHbyMTE",
  "key29": "2MVTFA4c7ARKKC4FK6h59hZ4NqtYnwwWKdy7nJmyAvNmhAgoYkWcMqDddqGWd68RWLEjrDR7VU3MDRTtMLmu74PD",
  "key30": "3WyuRdB6KvSrg3Mnmr8b21sVLRubgKRBh2RrPTpJRgwm3CEtBDL8tz5sZChPA9zpR5CDabPa1zaG7TMpSLESzSbv",
  "key31": "5rKh9PYhLAFaKXfqMLKvvmpbQYioE4N9XXy6XZ5JxQQJRdJALSKsxxgbTvaHQpXLn3YAZj7Jcb63u2enTptfATrX",
  "key32": "2YZaPaiTuUWy99KsUncZdMYWd4twCYz37LdUbcMnijjB4GyUH37PS1H1SfeJDV1m4QdXv3Mi6JYPvEz6gX6SkFSj",
  "key33": "3GnDx2Jchh3nYCFgjtmAjMmMTsMpot9zcX5kqAVqwqoQrVCDx2GV7fmxfmY2RWWvFqd239QJbCvwfgcvCvkefDoo",
  "key34": "49AYpX44cqAea5AfqcYcU9WzFNEoUtehPyX6LosFpDQwwVaz6boQZ5Z3T3DgYKXp2hXvenBzVuQKG82KRsGkjdyR",
  "key35": "Uc4sZT4W73s7R3tF3zSQsjUR4ufcxBjWYaSem8qXQCpCAZPWu2LBo1TGgMWUL46WTMkAPMZwrPow7fScoXoDvj6"
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

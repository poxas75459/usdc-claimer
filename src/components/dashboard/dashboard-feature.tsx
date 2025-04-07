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
    "2qSx7tvJPmEvSirzufWjeDjcf7RgrAzj3Yushcfgmdcw3NB1r5rEhoWi57vATc8UqsCHeeCB6EdgMybBibUVsEui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCDQQ1qUYA7FU9TkgzQVzQyUxfb9i3q34B1jSA67ujWBqH2LNDa2mBFEwvcBRKAa8BKkLj9UFg1jBwhUaBunjU4",
  "key1": "5qLWzHSqqC1wN1GYRbcGLiEixzZa4LYuPx2W1eCNCG2sxDcJfaVBY2hPboSf9uGvnPov8tjCGH5qFw3ZFVDTW7Xe",
  "key2": "2CkQisQZ2KotniETjghnQpWX7WpoommU7BRBWQMyPtXnwidSvpzfXwPDfkRLQeZRA5NVdFMiDd6Q1M5eWeNFvfeu",
  "key3": "3wMU4YhjuxATMeptFpNHXW6tLuQX6pEU1LYAGy8CK1uxoAML8UrJGALNXe76m7KiXjt1Wq2fzn4rhy8As6oRc8d5",
  "key4": "5dTZ5pi3nHoADpcgAkazSh9sheEFRuuyA7oS1ePBfZGnTLQPfwUrQnfcjN1ouojHDF9UCoYRgS59hUhvgj8BQvcH",
  "key5": "5AoMA3wNrotUrcjHhYxyt9PScRP6gq2e9JqkiAJWGstA1tGsPy6JCNFzUaRq9Rrjj9HZKoQmBjgGJKKCaoUBC1HE",
  "key6": "4NZxaoz5w6PCaoku2WyLnCzbEj6KXAbTkAdRZ8oYTfntGkcdJcegA2T69Kvxu3Bf4pVYZr7Y7m2Qzm5gjsZxgbbp",
  "key7": "4FnvJxh2UPdunv7BXGuHx4equiq12caf2aLrR64sf5fE7FSKaUS2krA7GZNBddV44aPW6S8VRc7ogdhoH5BAa7sj",
  "key8": "4msRAFnJfcjjSUW9zBsNErSTL2pjMaR9aWE1iprSVeFVWtBB1rn1NbgLcyq2ojZzPDYDtAk8RMuDjry22LjhCqU1",
  "key9": "3N4BQA5twbP1touTfboqtNLH1QQAdDUY2SbMxR5Xrzh8RicXva5uRnWSZMANWMkCUzPxPT7iiKTjmt5K4SurnMM5",
  "key10": "4g7jrH2P2uG3epSDBMhPgrh365JCoMiGKTCGmrshJcLCmtZywcy1gZbyXXHAngicfeQgtGGPMCqAy4doW67RDJXE",
  "key11": "4VA6AB8tvb77iM8osNPBPBaQXCqE89W4c67mqrw7CxRAka8X7tmo4r6Qqpjg8jSifcKVubqVmjnD7bPPJtrvu3gb",
  "key12": "2Jx4hZS3jXQHupfRdvxCJ6pH5bhSy32hPDqZCSWcrNpLbkf2AqwzwgwVqQSmnXKmeHSshrb6ZpbDnvNyDr2kSxWd",
  "key13": "4vFpSyoHGb8fqQoZCrwMQtTTUz3ncGC3fa9DnLKCQLbShvnjfHYJ7j97C7qfGyudDMSxiYdvJgc8xRrdSsG2z5rH",
  "key14": "2rr1zsXgPhZj3RipaFuREkkkXTdfXBEU31AKtmUg2BySAuFh7rLvYx1ibZb1Xpqjq4YwQKv8PEJ9fLJAf9GU5dQk",
  "key15": "DBYRk3wuMWFaMqdo5m5kW351J8XUxTTnPTqpggGUQq1s41ZZ8D7bMhtzyEBo9wU1ZLy3b1qkRagV8q1iqH5sfob",
  "key16": "nXG874VjJTLjf2PtN8zTtGHQeidQiR723ud39VEP7P7C6K4N3dWFmHptA96b1jryxf8xHPQ8cvJJikDRtKCBfv2",
  "key17": "8h8uSTrhbN7eeW7JhwkrtAsx6zMNpMCqWQTrCWgtBG38dA5k2NmTDpMzQbgQCptHtGyhSxvwQqrJqmV2kcEd3bd",
  "key18": "QpboFV4GYGMh7fXGCTv4Y7DYKjXf28GR2c4WYgKvdYUhsmMK4amFRrRrb7SrKWyJ7Wsbzxx4jiAza9jDpR7Z8Qm",
  "key19": "pvEYHooJZSC1ew11ZnfSYbeTA6sQPtvVMomVkjCBtb8wj6F1itHwbT6H1kdRpD3M8E2mVZ5ML6YubnCDxuT3Ttn",
  "key20": "64dMYkdpZ2bqSnYZC6N4qqRG4GQH2FKxz82cNJVayKURPWCry1LrPmWKyVM8jvf9GY6WaP8dsX1TyTowdYt2VLx3",
  "key21": "5HWTj3W7L2zVQkMQTrqKjAiVgwH1xjPYyy9XZQ7CEEF59SiQV91XRozFXsBxWoFauXDC8WRycPKVqwofFqQEnPvC",
  "key22": "Ygdx44x119ngCHWS6o6LjBEaHGQBw8HiCa3vmVJMif13LVZFi6XsjZBqq3y2V5nzRUyR14jQ2xz25yw8h6pVFp8",
  "key23": "4sbHkBcudqSDXkgoMR3HCk3Rnr3yWyAFZcVv7u6Rvs6nDvUQqCqPi8oDGgVXtHMdHq44qAuwPDkgXfKy2K3aEdNz",
  "key24": "JNmoHK69Frp8VRYheyZcGmD2uEQoyehTKA57TxPjBjTV6NzvKaJB6cH1bFKvdr6pZBEyYr3MibNUvfbqW4oGz5u",
  "key25": "2RCnPnAAGRe2iyqPtqFvKmXB71f5FAnbynmBTe4PniNVeb76EsPZ4QHjhAcZMS8yzgXLFscdPm49bJMPHR8vM12R",
  "key26": "45cScPZbV14bQbsjszDSfGjzmmkynMC2eQGVZv6znosyptAz6GXZWQ124pWgVE63tRN646YMLrUZfTd5C1xV5ZYg",
  "key27": "2a4bJ5WNKpvU6otqvj1nznWzrkw1MHAxz77vWx3UwUdRJ2LopJzdysSWMmFVbkzkLyi4Ab3E68MpoohSbhnLKsz1",
  "key28": "HV4eHmB3tbUPS5jCxhDQbKDbgYgHrkqqrPbkEi7VSRaSC1jjLUFU4xQZUpJvkQ8w4xnK6TQ3iP1ZsqpxQ9hPhtJ",
  "key29": "4yshDW24CYjbezL8sn5bZxxeNfb3GVQnmdC3Eqj3gVS7LDTUkg6NTsk4y1TqBJryhhngKsMv3VjE1ALWvTd722kL",
  "key30": "2nyvLqGfN8xuGwWu96UpbWLRzFVUxFYLknGFVBHpYtD6ehfj9wAezaV26y2TQHj526iv1vBFixGeZQeki5H8EFSb",
  "key31": "z6zzQYDm1xcg8QA5P4hoZPKaqS93C2aPdR9QpQYXR86M9zqLDyFnLv6c92VmqVdVQT6E5iKQX4qwpkn6TXvBhqu",
  "key32": "5Pm7TV7nub1dHk1GRticyTXHTrVup6HM77Rsn11fWPJWpN8LrissYfcDRR1t7TURhdaL8PUuh8meUCLTLWnSk7hY",
  "key33": "65hHCrL158fa6E525s8bhjA1rzRfpG3i9aNDA9ixfLHSp17jWNvXGLXN5AEbTrEJZN1QV9oH1XVnJrubjCrBEbaE",
  "key34": "13bqAiKjqK6B2ReFdQ51Yxb6V7He7Hi1dZWAAkAoP8UjpE6QTCMLHkNYMDcYNRC5d2hkSJU77B6odvrpx78M95H",
  "key35": "XyBx2q5gbGDafDfpmAf5fS2ScFA2yLjrZW4Q6Arse9u679XSaaUPazTyFLG45TjuKaw3topzWmXxQdTXs4fcaT3",
  "key36": "3pEd5kzMHTU8y7JgHvqAWfdzG4fy94D9AwbPUHXDi7tb97J94f6MsrDhq2Uv3tDjJiabcqAMUxHxsEa97bFETVin",
  "key37": "saEkucXBcDePbLaJfQEcVDfprn56xjJ118cT4hWeWWaARFP8462eMaCmTB359BrivK2ZLZT21qXXN95xJFsf2VV",
  "key38": "2t4SJfn9AxbezKGLvdgLK1etYQfgmx3yr33NP1i9yj3355EQ2oCZLmTexuC5CpETfMhNa9XUiBFVYXYsAH6qtiNZ",
  "key39": "5NjCqQHzoTguMCjDveC8rhP3mh7LcjP7r9Z1ovCtfLtKEgZCxS9EPeuRy9XBRXuCTyZpC6U8xTPjE7dY6yYz5qHY",
  "key40": "2U4aDGSADKy1cGXknSDzkch91ajWo8Kr5s7LYjkzQvU3i9oLUmTv372ji46LYTYTwfeiXVo1WCCaj9wuhQ8xU2gC",
  "key41": "51aBXSo2PknfebJtrFwRVCjy8bGrQw4qd5LfWxp3yfSAqKGrPDCaDADmy1tfbhTqX45tPFWnaE7FeScTsnff3G3q",
  "key42": "3agzFV9WUesEAHRnbQ6z58KpygTY1yqJNds3CEamfhMWnCPsApiap2iBFqKDtrsBZaatCtdAFwKj1jQPhJVBJod1",
  "key43": "3TFm6QqnSVMYHzvpPASkaAigaZ82V6P9TRNRThL3XfmB3tP1fY5zxgjp92Y59YecLsELG5tV3H339hCvp5ouZXR2",
  "key44": "57MucjhyUHSYqMjLHqha21aTPTfr2jE9cCRBSANFMaUC66baFNhESdBR4R7mSp1skFkcVEShYbkToymfsSUU7xXs",
  "key45": "2FNZsXtoRAdfnJx3NmFkrH1NMeeDNAoMRgivxzBTLsvSyYfLZBdnTGwGBwCxhJ1Ep28YkEcC5WajvGtdbjDxuE7N"
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

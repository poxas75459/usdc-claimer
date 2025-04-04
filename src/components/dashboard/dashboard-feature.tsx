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
    "5sFLfruTjrv1ANkgWx39N78MRmRYA1xWoUgF5tWk9JNRziDBwNjdbY2Ui68ut6gT3yXS6FjPJ7tdxde1S2r1LGwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c3SNiTbt3S2FqsatSt7hUgtzQTqrKWEWHF7tEgrinMP2HmdezX1gekDRdvQBAn19sMNLwVZvPYV32ZEEn36re9i",
  "key1": "4Wxisv3gjfTJxtcTordpfRZgMTeFktNdNpaUR3p3HUJhGyNM8AaAufxeFcFxbxccPwiUmpGBDdF63WbKZd7bz7ig",
  "key2": "37rdHry3Rsoyo41cMLiDrqNefFK1AWfn3hmuRefJKWqhJyRRn4HyMfAfc5rrwJ1KCbTYjSKYSKS58mEVQRvBJPaT",
  "key3": "3xU8p4xa4B8eg2c7sKuWisMZJh8NsZLBksvxVS9eM15beJSUQKs63QqxQEwPdbHZGdD6EzuDjxrWcBHsFincMrzR",
  "key4": "3aubrMck5mkw9BpRtasAHXjLFuBgB18mH5GnD4Y7UkPWekaCAJFnrA7m74QJ9W7YCcHMUdhhde3XpxXmKKAbxJds",
  "key5": "4d2Dqjr1VP6vAcYD37Cn1JSX9bepvq8jmvXDVG6xtSXmv6SqGJoUNyXY76VTt1mFAsmBU6dTQL3g42dQXQ1VA6gB",
  "key6": "2eFjgwiDhqEQ3zNLUitwGq5E1ibAWrRoXkvb3gs4zyMtWSXXTeyFVdsvQv7uajtSCtNPzRa6oGvrrULKJZf9rvmj",
  "key7": "4xNYdaP1oiWNHTjSGQiforevtsAs3EHNkWwPBQWWpSYhUcc59zYfkCKFanE8S7yaR39vkK62a3fzFv7skDw5skys",
  "key8": "3C2cZsuDH4jF4K5Udd11RYtAeWfZnhRuAykZqVFgsESMzGU8pA4pRzcY6qChkhKcdWSUJDYXGB7U3DEKSmsRrbJi",
  "key9": "4S1aiEczKm3ZeHWpbJWv7ZSsYQe1nxp1tKSwq1aiA5UdgReyjfchgQxV7fFgJXxRBkXdDj9CyRU7ioyYeyWmqPM",
  "key10": "375oNyRs14gQWQ9xb7F4h9drxGdNQyLUdMrUNWptdJmrFZmHBg3sH1Xzw2z9dT78KZ11jbrcBbsiunUfi87TWN57",
  "key11": "3xyghYUHZ8oHbgwQHpAT7z78Lukg3vzxzZ1wtHv3B7dqfH4VFDSSZUns736TGLrMmHk3Ympoj5YcaULAyCELE31R",
  "key12": "2BmYWVherdpvPHxtVEdgG62phrMvXWWPPHJFqEiCMjc8rXrMmFn5evjPyf1a9TRhXgEo8nnXBYxPM3YFWgasHabD",
  "key13": "nXbifKZiwXruB4WPYAdfVJJyfqECtqFX7euohdkwzTNoALZNBCTZf3cpDpLUP3oYfGdE4pBmNuQTUf7oXw3KHu6",
  "key14": "25yaSsnhQk1UeZkEsmGcxT7jJC31hNkh2u9pC3bksrrsB6yYuwfB6SLHkdoifRHBj78M2TenyXqDcq35jjaHmFDf",
  "key15": "5czBXmCUTUmKKxWMqCUgxSgB2WFseyHjfijUgmecKgtsSaHcvaC6xNAAL3dpjXKDf3ZsppCLC6bC8PiCUHoTgQeR",
  "key16": "5zp38ESf4JY4XtT6vM5D9PA3aVVQcjqnm1SwNzFj2hrX1aUcmnSWi68V3GMGou9j3LZZuJC1oDiTVarzXWrGRvU4",
  "key17": "21Bw2vNN4UG5MHZDyJiF5bCWN1XusacsSHsXgHSHzDdBKJyfeRid3ucAkmo31vwahyh8cqQJaemPDx5Jtr9AUgCb",
  "key18": "4PrTsiRQdsnguAFoHW51nXoF9PkfLHvF9SodLhpiNXM3ygf8MvqyH5RrYUfjQtYkGW2NEcbmNifjFQC7J3axRxJi",
  "key19": "2pohP2YyG1rTB8MCGbBUcAiBcq7KSSTKY5SNgu173fspzbywfgT5U5M1NYUwYRbpPyv3kwzKwgYzR8cqR2atZXox",
  "key20": "5FNydwrPvwkjb5KUeKPc9KaoxmNBPRyRfn7VkUsTfndazgMH2X6NTLLBAE9eDmTjBsnnUQNWmurwEmTmgNWe6uGJ",
  "key21": "2BrqMHmuLM8s2kb7ELdUM35CQoDRWiWMBHFNgqiWBpLUgYBDyeWVT8ppJwzUadnep99srowc3GxCkxfwrranYhGj",
  "key22": "4M88osXrj9FWM5GEEYbkLGpHCRviswtkxwxXhfqNtwFzQWLSC3BVMzRJzfYEoA3gEtHZEQYNj49X4sdsAnc6UbW3",
  "key23": "4dGd8Qf1NkeQe3rMhryQNzB8LtvrVxxw3FrakwXgyMWLxLMnN2RHDsQEeRatqJ1kbvg6msnR5jbsFM8Sd3VA3i6u",
  "key24": "4TGQh55KwdL27xZHrZDfqZLfedST7xPEH2YJpK6WPmzK2nxu7rsK5BCrvcAdabywKfB9aP2J859yxUmy6iNSTnos",
  "key25": "5VVwLMmFTVXoUZAUWKUyWBxzFTrm3hnbezKxmdGrwsDhQWHXNJnkbMStVWEFVLhAuYxLV7HzDrP19S6tUqBH1kyQ",
  "key26": "2ZF2ea9frqD54EmL7DzBHAwuPVeoFwFC8LaDRQkAgYMjuaYEFPCUxbjwNvqb8p9P47mGo7g6jgL4B1Mam83VMAZP",
  "key27": "5ejXHrKQMkXpT2hjhbjg6bScX1rG3zMiG79r9CAwqgomu7aWD9gyph366sKbtyvTbFDmGNb9dWz8XVAdYeJkSFii",
  "key28": "16mv27cfa1jDyadDz3ERvPwk3vL9UgqiBHXoELME5qSqjXc1FvwZpMgeyUffVTjNZiv885L8QXnVBEjeWi6DDji",
  "key29": "2JyGVFQsGTS8nyfKwsEcAWVVXrTuCZnWgq1ebU5V9ae1kDGrDzDo52obufom4KR6DTP7spreeB8VBrnBvA7huwoK",
  "key30": "2LdTkSgXyepgjwsyB2gwfCFsqF4Ab4jHNPp1LM2JU1xLXt5qRekrHJJxyCaC3oP14RR2ZtedTZ1B96b2shsfYY3j",
  "key31": "bqqxJJWmHSeZkuwN8gqwyYBePq3cKUp5kaU2tg8Mm72Kj6rFwEHF3WDy9C4zp8gT9Bm6j9abH7gijLTDQMwJq7V",
  "key32": "3j8o7VSuZ1cqb3dgSB3a7bLJX9f38r4netTC7tLf82H96uXSTobW2hwQnFrnS2io1QJpcWktYBX4PR3KcP5pYCLU",
  "key33": "5QJemgiYq39LwWj3fKPfZJnPQrrNcDcjvVgNMyAQQy2mEwdeJbGQpS8enRh2Kb28UDnMAX3VPDRe2xEnwnvZrz2w",
  "key34": "5hdcWU2dcgmkJS6gZ3Sp5ZfZZcm9CmTYVnobCF7za9fYX6BB7D9ixs2nkY7C3TVjwnRCGLmDWFAgg8Kbn9v6MNNq",
  "key35": "3htUftvTsMQwVnoXjeHtiiWyPd9sYMZmKsXnHKhy1idx5UNryxzbn8jgVp7HunNtooYWyyJMjGeYtsJDxKmNsUCs"
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

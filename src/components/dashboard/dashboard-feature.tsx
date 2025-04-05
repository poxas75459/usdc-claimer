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
    "3aLk3PBYGbfZHR6yoh3NeiwTEwp8ZYyagGqTTH6XUTu5b7GbHsYxmhpXtas5Luxe2DgiK74EvrqdaVXQLZJG9GXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62xvQv5AnRBpRYh24Fbh4Y83adK1LXdgdYRBidcfi3EGSBEDD7iPpHkM61U4AwDgT7D2uKc8AXVHCQHLPhWQW6tW",
  "key1": "5bbnTgYUNSaVXcSfzQifLGe29o15cB3r79WH7aQSvZGu35WLuw99zSoRi5BN39FjWJBT2EzkDoufsw9Va7hJNC5m",
  "key2": "3syBehiz9Z1J956JFmc1BbKc1uJXhLDTXNkEKvxKui2NA3LkXhotjZW63mtG3WThuj9MWvNfaGbszZXDZdYvrYaM",
  "key3": "yfoC6BNNogKkYVYAvuECpbZNjaCCBzM1r3Ee9NSGukTnA6AuZqCpRmVZq1HG5z9mtvpRwMqnxUoQLXz9fGXHDr4",
  "key4": "2TCGTyZwUhGsER4V5oEHogduoCRgZ9BZRWeS88s2b1DCpHprNj4n7Zw1KeVVWe2RxCtyLHGKFzZWjM1n3bMBzH99",
  "key5": "2qovWbcsLkjkNVL1aX9xjQYRNBA87dPF8WCmK1Xmg6f2JQvNpTAwoQbbf9V8fVC9fmKg3VdUsqmhFZPq9MHWAfLN",
  "key6": "5FnAqJf9PM1oEgiHxMdoKSeQ6DdBLgXVBdtJ1yC9ThCkGcuPP6S9p6d6nZJF7asQnVf56GvNFGMHez2nmuXp1ue1",
  "key7": "uDfvFB9TGyoLp1ywtiQfmX6eiCpBCjKc5PB7yjjfHZZ39vSWsk3nHQWdD2KeNp7L4kHmx8Yc33KGhVpKnYUGWtS",
  "key8": "3on6hFPHUvMVkCKxeCCNkU6HEBCw8wXmUM9c2Ywd1ELuhy1sg7Sx97TsNuL9MHxnmfYe5Xi6Hy414exVv2jRpMaE",
  "key9": "2f7RC8ZM6WVPA9zi6PDK3HgsihSMpGqwfJVir2BJVjoPy236a1kiuAEzsBXsinKxXNHczYCebkroKyPoPh8LbqFq",
  "key10": "3Lgg3ztdy1ZHR26EYEVU1ZfqcW4KbqtDLgDmufJ4AjVxUSjcLMGbmrteN7DQ5JAo9MHQP5Jy2VS9TVgnQ83P49Ff",
  "key11": "thVhSECtAwTKbzvqqE7nJK4M6NFifp3wZUAr3uVZqfQmjJTjVkKoZCTcW7ENYLUwML7tFMHM8eq6UfAxC3UaWmf",
  "key12": "m6Sj4VSHD9vE5xn5QoLDvebDFs1GatjbrcEMj4dLojgVxHnDmpXRR4kJ1WddkNQ7UQ9SCjmynxkD8saKpNyGMXQ",
  "key13": "3XV71FCNMBEFYr8VeyWVaHh7a8T36v1h3U6SbvP9zhaAjNjHfkcB6XxfwoLjViQtUAfVJ2Dk1C5B8mABoEgAJXdC",
  "key14": "33NdLdRjHLdVmEHmH9sQ396LrdqUaZbAgSTdxvBx2fgYfY8ez4CNzUtCUVyaPfBoGHtThKgrxtWt1Cfs1rzK3WxK",
  "key15": "SadcagugotSZqqpP572x5apNk8yEiLmeUAzkFLZFe2mNTgQmtDUhq7yaY7K4vmozGMgQwop5oxr7G3Q8Pzywgsb",
  "key16": "3EppMGMg2SB6qKr8f9fGSfwFWvFpzujrodNb8WBRt3qy5MF1ZMmuuRTSew26L8EMHnKBGoeGjrh2qx3MpNTvyLoR",
  "key17": "3kJoTQEzYpwEcViTPriK6te2AKKj69jTF5QNEo2CyEfHi2X5DHBzxGDxwUqYvrR8UooxtTD29XVSEr5vXwELKoEe",
  "key18": "857f81RCFUSLycmY2SyDbS8TrR583s7Stpw6PKJfKM3PnnDLYUXNpoEnc65F3P9JjPERmJUd2e6z3UGhksVM8gC",
  "key19": "Uik28cGgiigZDSpfUyXCnDyCbELvszySjUiFbV4ncreveTzKbQXGQVucyBeZCS3RDQWBmsTiDDnCUshgi7VS8c4",
  "key20": "56y2c1ngKSwsmsLQ134eDv5TLxy7WeYCAAx5rqR63PUshSwtwGz7LDeSc5ju8QEMemAN9tPfkAanV6whPJdQiQqg",
  "key21": "2siTRUVFyEj2LZKXyGN8BZVS1MX5MGauiywbxvrbW8nAytaeC1wDkGFs8fmAUCtZGRHhUiSRXJnsm8GpHdSw9uoP",
  "key22": "4P1eQtCi1pGz3XWqS1NJFJVaTpLi34qCQCpeRNR6dBKFtC1rsBPZQXZokxknqphqXjVyPV9xL1ABvrMgPo1iRrEs",
  "key23": "5iUscdAaqueE1FijVP9xzjNVmYGatmWuz4jej2RdW7RQoq5JaYv8b3FKRS6f2riwwwuyMgBrdkd47G1tX2aYtY3o",
  "key24": "kmDSKDAjUxS7yhhAbHV8edDCpy9NzNKY7SjNuMWiEAYrqhggkF4wTZKhG1DF5wE5NM9fczuGE6wJPQUZjTa8bBp",
  "key25": "mAVsiNSAbJQoZHXYnyco5rsysPtkKtE9fjUh5GQTZRQVFpeNkMkpH9FU5drV2YqvukXdv9j2yrLZuNmSGcCeewd",
  "key26": "xDmM5by8F2sVjmU8hKEHk1ibpTeV8R51Ein3KM6mE9QSNywoUAfYNdjB6WC2FTeaKVuRjPMnQNZr1j1pAMTx21S",
  "key27": "4AFbix68Nnsyp4w2FPm8SGuGwToKU8xFMVYVJawKCkAGawefWXSnkgV6qyNaYpSHispQ4fTYssjV23DQhuzLHjdG",
  "key28": "4ueedqwwNX1t7JJxYEAEVL2UdtzERDyq8VP822ZMjAJJs2wB55D5oXbRvGHr1aGHMoGw1WgpTEM273YhYZxdPiHW",
  "key29": "25QwbMA6ysg2M2SCec9x3F98Gvqio3cDYj2X4PkgRDhRvGFGNtVviHQ71cPGGBjGcXDf5XJeiHQt4MKXjzotc1dH",
  "key30": "3CGes9hW9ywsBmzzaaVim3X5C8vWHGtkGdGcpmQLvkPgbsGLFdgEUcmpTjGnX54juhXZaa7FiTqainr5h4A7CMck",
  "key31": "5e56SuB5zLPhFdtvjLHcYpWV7Vcp47HH6bDcmzCUKF4GEkVJdbz42oE3Ca2z1YTraZ1hJhNwb6y1XTs646ySK5BM",
  "key32": "3SadL8mNJ7JKTqLESnbJK35Yx9hLJgbwXMUkEr8DFusWyub41GQMBhcbtgXHuvgYZuDu1sNqH1wKqCoapetmAAoC",
  "key33": "26YDBvTfzWYyL86hJxBWZHS5HpHdz7qinw8VuBmjF8ZpAbRDMUm52A8ou8d8mBYFRJ2pfkmry2M7xsxGjAfDGZty",
  "key34": "5XYsEyWj8CaQqnQfhRd2CSMozzWq5uVxD8Q84nuowfrW28RePw6wNxpyeyVQ9FZ4gyQkbGx1KCcqzTrzmKxVjiHE",
  "key35": "4UcntpFjUw3haewRSpyPrDKTZLUC9LaJFWf3RZJHRG7KWBPCXnBaBVeJ979B6Kbz184wBUnZD38HwaDK2eVMQBjf",
  "key36": "3GiLP4hu1yRa3XdA9B51eL8TE1h1YYHX1NTn3fKn1YSBYm2zxfkii8W68CaRYu6LPuRGrh8WoARvTFqZEJFc3VrF",
  "key37": "5qswGDjiU45ch8tz6xxn84q3D7KDv4PapPBuG1NyvUpDU8dDbbSWZjzkSFDLEjY3M38NJUPjWMG8BUyuB2UJY6Tp"
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

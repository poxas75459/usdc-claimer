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
    "216BhtrzhfiyKisKW2rj3usr1BWNzMLpju7LA3QD8Q8iC2xDMdbnf3GjBNDhPifz1baoCee13CSVg8g19J6eedTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sen6DQV3hSHDWT1ejTtueSjhf3QmH4KoZT5hZtmoYvpVGhDUWvPWaii3JVswH9EafWDVJDkKUa1nv1eh5mbpyTx",
  "key1": "3pSeKLKnQG1WZyq8JXFvjguReotwkt5ARKUdM9m7VdBA3mhWpaUdNadzcEG9zbzLMbDEciTdLpPAUk68YSjJzDaP",
  "key2": "4FiD7Nj49K71epUcw7kqNiJnKVjEHfth4mdF2GvcNyD5PfWi15cUCP32zppJZ8aiQpxGDgY6kwh9EpbPhLrudQMp",
  "key3": "4C63zg7cPmkV6Tgay1HJfkXrKHmnFs85pMdBgwC7nfftqziybhz8uQQ7WkzC3vSJdWm39aRyGywA5gChbcpSzVsN",
  "key4": "2KTbUqQg9Zq3raJNhmUgU9DRvfF7CMEKmJfMRGmNgd25SbmjBgVDS35zpEBWXUjPYpkZoRBGoUiv9YCGruuEEGYi",
  "key5": "4JYLxmThTAtTcpZYCXE2XB4qWSYBsczxmUG66YDYwjuA1XomkRmCVNRn6vWLZ2arHg4UEe9wkqkBSMTXobXUAPP5",
  "key6": "5J2CrzmbuJ62nFcgapHqDj7VsKNmyvcbbXZrYzazbritYfwRvcj6fMkmfReKdyzPn3V72x5W538wByyQHQPQgBXz",
  "key7": "LhAkLY2jrmA1ZwRZxTyvTg4erNh8tPaGWZukcSd9qzXqo7hwVSFWA5A6rhhUqeSSUf8aGnCRonWsGq4eDQh4BJL",
  "key8": "4f3HiAbFY34eMZc1a6RvQn6R63WJFKkTYe6KvLhjynWAhmbctEn72NfZqPtxkugY5adZm19nurh3VKfGxd5rUfPs",
  "key9": "2sb4qhu5cdPdDK15AkQAr3FWQJ5QaUHG67Q5ibzvER7X8tXLeysoFUQbLvuWNtVtuT7ekPrUaFMPiq9diEHp4PLQ",
  "key10": "w5L5t91GtcYfv9eDaGHWPsuReSh7vRyEgmveuXBiz2b2Vgo3NQ2VPnRBuKCm3UXzXAkQgmARZA6o9FEBi6dbNZw",
  "key11": "2RauRGMV1DQU6DFsRaeZV8Hq7FEp2wCeHkTejoJAoYGe1CMajb2C9f8AyzgMhhRzWEFjjqeL9VVRTRjCAFcQwP5L",
  "key12": "3YrWHH3Mv9SmkiYazq9iKBsJ1BU7HxPAa3CNxwsmttP197j98LB5nyTR6w24sU4DjUCvMhisiS2HzmMMTdA6eFHS",
  "key13": "2d7CLcC3pqxJ2vMQQmSD4eqkYSnVuw9ktttN7CsVjsSN5Wwx5gP1vV8FCJuSAFAT3AU5UBxSKP2mqUEnAfCQUbJU",
  "key14": "5MfMYqhk7W8bWSNofXtuaRC8QEN8VXp7pVjKuPLczjTG7cCK9qDiXyjPUYhpuo3RTo8L3dbeUQmu2AxwoiW6NMmM",
  "key15": "4Lsycbee1Vzk9acDSshz5hsRZpVHKecGThRehpkoHzyRnbWQrg59KUTRBtTAbpV3UCuhqPTSj2rk1k6uhoKsWU7R",
  "key16": "4c5cHzESu6n2LYGsFoAsERkN9SVBdEYZPNkJ2qoL6pzug6vhC7JPgNyvRykPT8LqjWVwzAz8GY9r7xsbc5zGNPn7",
  "key17": "5JygPRvBMspaTsuPH4F2xcbGh3umfcYTjSSnJRbgUecEv1ZEWdcFPYkbdF5XQ2eWGVQQBKJ9LHsfHXy3ziN467gC",
  "key18": "v4LMYZnwPtGHKGLTEePwUVTiCmvEWqEzE889k23VwWzYyBQ9Yh5h8uSqaTvmN5Qgu4pMuw7tev7WVGgCr4PNJFG",
  "key19": "4ET5BJebPetYCzVuEECwQU33pbRBdRUC7w1F2yzmsa7Fqer1BSAH5um37b8CSm86VYqUzyaAhhMTnAxm2MagBDJP",
  "key20": "qVJWG8SypTJJY1nKxnvGt3Meg26t2H3XtF7M7PjmWmqUogQZpmF3cpH4hRx7U5jFbK2ZkWcTny9ZXPKMAcKpbU4",
  "key21": "5ENtSMDaztuL6q6cTTvPic5bhM9HwkeovdHxrucTiUxQV58ccq2nAg2Pxupwmdi8QiLtgbSkfkUPKjR6DkxJmxGe",
  "key22": "2XbXDrJp8KWLSd6vdNmegvqp44zFWsSKPMdK6Z6NCh6gEoXBJMtE3EgUbhUF6FvApwmLB735bPv291AbANup7hvq",
  "key23": "5JKefu4RNtBDpTi1TKdN3qmNSeShH6obBYE5C2bFHwaWorQhqzTcLwN5QSXfVDSLDYtSRh13KxFLcUam3WpzCXEt",
  "key24": "3joh7pEgxwC3hBCnDLbK5gLJGzMH4jG82sRPgdP5U6deR54ha5SQFjYj6U5i9WfqWBhov9iuQCqpeSndpAY9ugCz",
  "key25": "55AqxFuxd9cBbyUmrYUUsPDZqQdudUrftHXFQjRmM3AwKm8c9n2X2dtrS1Yr2wdEhTiHa5mxBGDopqzdekAsTZvU",
  "key26": "24xY5yxGCkezjUXrhPztTcRsFGTx9HRf8qreS3iXeFeTQne39bdkknoNbB3gTHcAhcoEzckBr6Vvq2xfSSsJfysU",
  "key27": "3CtckhNf17EauWGCWM9U4NJFM3NjmnCugDo2ZSCzRTB9bxJw18fwCKfxmLTrJNUvkFqzhJ1XYyCdfbe1bZk56qmi",
  "key28": "8gsnTNgj4BnPUsEMXGLChjMLvB2xzAeVCF58QV7RbbWzFd4WrLsjtvVwi3SnwvKoW8MeXVuovQK56HP1NRKvjP6",
  "key29": "3gZFgm1DFNeDNiTajcSiUg79GBXezhtwVGP8GBZRvSdGDDf2WKAs7djNVnQaX31344Qxd6znRQ7DFAFmCNcPMRyQ",
  "key30": "e5o2TQMCpRSwXYFxDfYMZavHtUrynPAfvEdifyCAJ5Zc1fnZEeWCVBuwRcMHuB3GuJDu9Ro2bsNVRxQT3X8LgHe",
  "key31": "5PXWavEJVdRV3Zsgu5ZTkV75qhEjfEmbnkXctXms2saU9RW4Mo6ST41eBrBGmQ1Asca1FCNmifMofEEbQSgLGVP6",
  "key32": "3Jt9TkwuyKmYnkMYg6vNsiyJF7JBgDyauXTW1zWvJxprz95rjKB44ArwyCcJ5CgrwNo78XvSwMFjSQf8KbXUcBtT",
  "key33": "4hT3zppHcy3jLNRm2A4554dVeCDTinkvPXEZYfhixRdUnuf6BAktQSXf3kaL3JXmM9sDerYqkCYLKuzA12agLTuM",
  "key34": "2rtQGqh3oVXoKdo78Mwb2PHm2fZFR7GwFCsZneYggZ7627Fm7ApvVAtW1eg2tgFh331shE974bMfxwdyAq82SWvH",
  "key35": "26SS4ko9pGrWs2iZcRtaQuraDf6eRfkmywoSFyFqurZnPq5Zw8ob2dfKx6SbRx5P99eFXY47C2wJqy5YNTYSgeJc",
  "key36": "3MC5ZTBC2249mj9QhK6Deg8cSxGxVhhjpQcurTEiKheVmNdWGLZsuzsZVaJRnW6YYzNCwqa5p4cHCvL7qYjUnWLu",
  "key37": "2QNQBgNg8w53fEYGfrp1oMPjauEhwB9fLBixwNxZDE8QDTowobS3z3E86MEhRKXtJHhYNjvAUjLNYxMZSy6bGrcw",
  "key38": "2sFxnrwvik4tNrkUoBFAYgPAfSSaP3r67xCgo91TUczVNNrpAWY5tEg4UPxaaoMLvaffYLWbsVjoZGM8TxaczMuh",
  "key39": "2PQLBmsppsLaYLyVGen99tvyCxD9TD9BokQrGU171ZgKpDhp1EKFrPPMrkCrEzdsfytKCFP2nu6vBnp2fS7ZvkwM",
  "key40": "48fBFJMdxho2s3perMwaEJu4FxmQ1HBXg9dsTzmDftzUsJK1wgT2ghHpC7cog5MC26QsoYhRF2xqwjcXtxGDrDXr",
  "key41": "831ag1cB1LYPaNEkDwahYQqUBhJaqDgeWPpe9F7K3SfgCnocKkTqen9Scfr7wJVZjcRQK7QjWxhJ2jAoLh3TNKS",
  "key42": "29kuWGvMYy9ts5xjP8HcGanjCCX8fRdoq7qJgm6CYSvoE6uPUviEmpq7oZMgjnxuZbZ7N2Fo26bR4mReWHTCwrgN",
  "key43": "5YpPUs4YaRH7LF7u3KNWRdwNpAoBGdCKDsvN4KmYzHgmbntzizVv6ZhJKwC5D4XWUuqN5LuGVddfue9pf4KzmgTn",
  "key44": "5mUzNjyghLnJJDcbvyKLEsrzPdieERramnzLLS7dKhRGyjoWiZxtdUTR29yq52kRUoEUzM3sb7SBugWzVS6Frm3u",
  "key45": "2gq8cKL3VepSnbWdSvvCQCHHFFijNkwGb8zke6YzftWKyMyKPiDoQgTJXv6JomUuAWHPiHAnKQXKxLiZd5KaA8Nx"
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

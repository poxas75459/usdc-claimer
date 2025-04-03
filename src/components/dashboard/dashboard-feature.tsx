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
    "65PnFpWp3i72fdSrVaj8LEB13TNHD2LJ1fSgh2bK5tgL1GAFEAAwnJWdH7MQpP6j9mgyKuMeQ48EtdHgL9nVEbfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zQdQ6YDrNZqWUyKsaLgxe3xq3Ng6uNXCu2KMttC9782c7PozwYt9ANM76fGMFiYEwonggdZpnn4JFDE9ATFNMyA",
  "key1": "2wMD8UmanCnb7AU6StmB9Mg4hhJThM6GEi75rMmR4iEm8uLf9vQTPAXsjEcYEuN4wYtRQSNnv6UzH65T8AEcS2VV",
  "key2": "igL6FdRrY11sPe8ANx1hhHgvTqEqv5cA7xqatNHAxFX7b9VonCRCtG21Fy7Y8fNgXoW5qYQzwuMj2EZbjKTdfk2",
  "key3": "59nYzh2TJHH2C2z7DgWe7RyDBZUZ18SB96EGx5gZ2WsBjJFwvi3oGuYne3TKUcQ5yriaHxkbVo8W3KqwV3fYzk4a",
  "key4": "2RVpcF7pkHnxtnkc8wqLnPhNfjDoQSeLp9aNnVHKxgE9WiZKCwzVgij4oKCkKPvSUfhp3BSnjbGgGkS62MuSxmoS",
  "key5": "jG8r8Mo8c4gZC6jQTG6voBohyGKqaUinX8LRzmcpNpbVpwqGq1UDivBVxZypBJ191HTgf2PeqJ6kn4TXWwn91bC",
  "key6": "371g3hsxkjcWXDP3YqqS3jLemyrtGexvnuoDyox5Lr1mkdZcUXpgbiWmAj6rsWL4UQsH2j2WR4pmVfcCTCfZF3AJ",
  "key7": "3rgPCn6hBkYGmpkCsF4c6MoMoVvCCR7VZES2XaPnhNPozfGfXACdPkorJAdLT5Qrq4KazydiEnCfQwVfQuDQwTZm",
  "key8": "5SBdTQ6Qbz2e3KUKH9HPKLBpoEu4UHZSLt9Q7iY3PSkUwcYNm1zuXdanWouLAsvrHSixhwBPwpcCwzLPHtt8kDwT",
  "key9": "4DdL7kYSnZda2L69cCKVeDvb24u6EfPugVVhuQr7wqH4yufBqwVqUZvnJNN6XKsZ4dfsSksnqFvYMmMUF3E5zuSh",
  "key10": "3As1MdQWuqRLivuh2wzaLZLnGJKNjPwVeBN1P76LdE2TxDADTERb3pKXd6VGhSGtJrxYbhxTxKyfrkY4Z8W7kvX9",
  "key11": "AyYu8MaHaZMYPSPh1fYAiiiMFvmJzNHuV2odxYJsYKUFDHeEJRpaF4GzEPtYUbr9DJCJ9ZgUXsm2hSrgwcZR1uW",
  "key12": "3LEGh2zTSsM1YjBuCdsSE1UU5nARQ2mA3d5oADMUxUQDCtN4dcBgnNhFC7g2E92ahfB9GW5bz2iJmsny8rvVakaH",
  "key13": "2RvD9sPboW6Xt48PWnVaVEudhGoc7sCXknw7i51idRd7TFnU18jmY9KNTzEPto8z452JwrZwQoEG27kh2Vh9YcHb",
  "key14": "UvMUf5nMXBNNQn7Cu5DgCBn8bTYeRnT9cvkxZSoBaDZncX4FZHcnx12SHAQdwHAXK3M634pUmNkj2ncZ3DBLqxy",
  "key15": "4KdBJyuQPH9uPMeSqF1wz1MMR4Jg1Gsx1Ydn15Rw1gBTfuPybniLRyavyQbkrUU9aufLtSro1ZpkAn2Meq9zk3Qj",
  "key16": "3FC3tqMG3fAQxVop42AiFBLvHTiWqaNYFbgwG67jxr6yhEFXEH5m9BJnyZwUwNyY9PonKHtzEGFyjqZbCwSsesor",
  "key17": "3sBBT4WSBKVg1E737KUceRm9QmaoXYJoTfFS4xrvfYz8qmRa1kzVrp3R97jAvH158WTkTWcdTby9MLKDYTdSVFTR",
  "key18": "58UGFZ9kYYR53e5uuEnp6VD49wp9j23aSxRebXSwsrD1ixfw6odSphEAnZU1uxdooUycpcJv4Y2RuVyhEWHfskjs",
  "key19": "5H45gsB263kSJFSaQegEg9bHSPJqjJN4MMnY3MET4Gmr1oToKjCYtTvcKbM2WyPoFEo37eombWCRskBFF3svCcKw",
  "key20": "2DbcdR2GdCwJ6PXzW84RrbxuBKvQL89eBChRBCEkJWM8oBAQwucigZkSPYddLLZsskkn8NSyZ1oRv7gsofGuhmxe",
  "key21": "4nZ8ixc6KXHqbNQYnuQnPvHxMuPY1TaFWNDXFZYwgwvvjJHWtXR8zW9HE3ti9dZg3ZVV5EK3ksSVf2g5CmTnRD9i",
  "key22": "5WwJsWStUnQeqrHcuJ8VTrpkUPeXaLgWsoCktPZ5y9a9RFZD7Eu2cj1BMagEAah6ArqYtvzFVLPm2yUWRk1MJRhn",
  "key23": "54QCkhhr6zHftUAZiK2dcobBBuTpeEydrqdQYvH6NyktYRHFkf2Vy5wykXEsZNMeMhcDm3hj8sy1mFjgrTUJrwyf",
  "key24": "4Jxxi7kQ9HZm9VRar6e8KQqdvAJjZ433ojpjpSKanDCbWX7oRfJRqXMa9ybsVHKJAkx7ncGFqan6p8ASM3pHMJsj",
  "key25": "2B8FfUgxFE1dvWHAeiQgMEtAQsk1zHozUnoaqWFnV1wM7kLWGeBiWKbVZHkhYQMiqLMhekUoTZpMHRpsMqNMtuG6",
  "key26": "3Ssbg6Cx1rNquT9fMpUz3kooSsmANBuqsndKLVi3okpkLqT6PfNYfWtdjJLxVMDkqQA6WyP2ZXaheMDtRaKYt2b",
  "key27": "56nWnBzHpu1tGqVxzzoHs1nuNkvgHGVC1D2e2maVk8UyLr7ZT3HKM13HiddzppCpn9J2sNj8UpCYKLvMGeRiDb3W",
  "key28": "24aXoNfFX2WRPuFAX6cK1FirRstda5kPWjXz6TMvXzBSTD9qd3jbr6GjWJigc6UUYMQCKQtdutqcsX2ocCRzAUfi",
  "key29": "3kQeSVGzAY7LM56VjVXmBpsMz3v5GbNunei3dmrD6WJpZwGjkbXbBkQ4C2TejFUHR3jKyVhD4QTZTHFdEuZGq2R3",
  "key30": "4m8xUQ3faGVciNFimdoxBD8GatZCQUrLRc8gpjujMwqTViqQPWoCx9f9kgsKWmyrJjneHMKCrVHX4Cw9KrCH698T",
  "key31": "4j1rtgqTdLj5xJUdnKUdwech4cfXdJPBn2xBmXW7xgeka5VTFpk6vjfrk3C8ei32Kg17FXj9j2iUaEjc9cmhy2t9",
  "key32": "fNjb9vmFAkhKZ8QF8SzGHm16auW95YrPAxNjToJoKNsb8UiYzLGn2SAnMuGt8rkbJi5bgZmGb2baquYsRuTJbSf",
  "key33": "4i8f393GojZzCBu2qWGkPPtLXmoYMQSH7wbK5tFU5KE1f61p3DA1rqVEu3mFBDwF7iM89aEV5vusRjQdPBeFYMa8",
  "key34": "48JJaLcLM4piXKNTuNXVuDoQjPKe5Wm2wuhScUxrb7uVWboH6a4pRdnkhxn5Gz3JVixK86viCMueQTU1R8kRBqU5",
  "key35": "5XFxvPeWQwaCk4JxirGfzExiKFLvLZZQg8CMYrXm3YdWwEfYhwCZrxo2xzN9XjycGnYauerKh4qcUTaiipxD4ExT",
  "key36": "4yQGYBbnM7SdLr7iFZbYLZoxY5gxHLGtBqH8vGLKH5bFvxrky9pLmSvZfWpN67Yaq84bEMQGNz5ucFjd3QrdeaM5"
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

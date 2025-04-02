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
    "4za8ys9SNPXayFsoh4pGAKEFYLYT2QHCL2KDHocAPgVMNh976vQPV8xgnmAWT4QxgqWffnMt2DH9NAnCZZnEjuTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ruzwLG9Jfy7NEv9ySvvwxwnqcqsbMNUkjsegeUAaRzH9kNauaFHgUUSmzyX1YLmNrQm5XgsiiQVoJFwMi5zpKNQ",
  "key1": "ispr83Uia5QMFf3SQb79mHrDUtSuecDccZJ7jteG1Pp4Z6LbGj96iR3PZzeE7frpsyRbFn5AtSWUCcQpnoise2s",
  "key2": "4LvaW9Yk9e9z6KzeFTLNA4YWDRhXvY5H6ZykeKR2WWVCpp2u9Cny1GrDwqPk73vSvaorm6ipgCYnTtiU7v799Li",
  "key3": "4MmFuNxfXic6vhAsFvPw4N7gGovf8XHEMG8n7S2i6VjEq3HHF878GXounaXwwgL21NEgNE84mnAVv3bZqQkbrVsm",
  "key4": "4RAxbth1QndDuRfdTL6evrJfebUdgsSojyp4q3V6gpXRBEqohZ1j1P1ioZVZgdT6QAstMdGaWAJ7aUaUd5okRBx3",
  "key5": "3j3PEi3thDuamsG1NnXhdNLwhubb6qCP6TRzCgfjzdkKnUT964EwUvoL5VQhdTip1Xf46DLhTAWq4K6VKMk7kjoC",
  "key6": "3HEwAqzSELmmgQZJh5xg66be32fVLfkfNVZ6fcxqdA6sqnThYnfxi1gvXk7wXXWQ4hPK1WZkfHFFLUSi1bCjXAB8",
  "key7": "2ijYWn6c6sCnnxLgE2J3XbuJo8Kr3AzFxbNr8faktPK5oxt3UZLkS67sWMtNwcqXo5pWMLYWWPqY8du6VHaCMeuE",
  "key8": "2uG4M6nsxyNyztWe1uSYao4jPm2dRRBjV2uyrSmQb8WtzpZkGJ5SPyir16wYV7769QzJPRnF5SyZPhAqDLkfk9WW",
  "key9": "5fuBiAEQQqg7RX4FxCbKYv4uSTrxeHsHtV7C6aFJWkhkTkojvKa2pQ4RXfjnMuvwRqcAj7qjMtAYcj4cucToY1v9",
  "key10": "4SDD32MKLiP86ce7XnJUGXYefP9LtnjkBytt9EAP3SKa8yH2uBAMWRPAS4gkm3vRD1nNmZDVCqs1PTwKcY5wtVNj",
  "key11": "65JAnkxYL2KL742EUA97cQnNXXs8wFKpRHms2PYZ4vx8W5EoxBif9DdLJqYaBxFwwKqFHP9TRGDtRTcAo8mwtsxH",
  "key12": "sHG4uBLhFnJK8H5izYeWcpMoisUDoECLhfgbZ6jMdvKupEJUVzgTKHWybSgYkJZMSbN51sBo83FebGcR6nqbTrs",
  "key13": "tC5To3qFnWX8eqjR9z9ULuWqBUU1icHG9QypGC8S8ZQbg9NSkmqEsbmYPmNqfimjSxUFDxk3aZzZJxT4WGFjcKt",
  "key14": "3fYUR3QipEKPJrEUDaisopE8VaJLnTZzBF2AsFCZdSXAh24AVAja6C9BdNhgDQquiVQtXJsKHGthwHgyi1gJ7HnG",
  "key15": "35ex1FpNojkvbJRnHFFSz46zcaiTNQpLd6n2CmCL9EZksZ5JWYxrUMCmPWExxJUimF1F7YpYiBULEnRVwFzaEtzy",
  "key16": "5PUXbBThMHrwSsheK74mpX3LaNurhxJHwT6GKNMTkVzsb4pSvZ4n9f31TBwAHH16X2xn2fhUmfUsgMHKZMxKkEW7",
  "key17": "5WVfd8R35g7eqDxPQJq2kipEbCLBHyWEHBxKiN7mziWDtKEw1MWjJPWepWNZ6si4wfxshNTnNCFL7NwY8cfjfVCB",
  "key18": "5TdE7uNxjiLrRdWGXYKi2oJjKpfkzVF69q5wrra1RR8H9Nygvuftr8XNMzB6ynArp87RkD6ZvatuEAASqXqmT6gx",
  "key19": "3GFBd8Mp8qJh6LYzLByMA3WiuHgm8HcgW99wXAgWTUPk7WUnd3CseL1rEsngJFNeLEMxKm7P7w3cZQua6fZASTzz",
  "key20": "5HEKHp6Qp4RKYTdugyQYtJGESa9B2oe7TBBRuu4APnV23TxGXcR44mBSyv6QVUKn6F5rVJEcZnHQhtb4KrdrvY5U",
  "key21": "553U1HkMxGFm2EZ2n4AjKjqhhvMo7JWqgAERLUvYB9ZKmBAbXrsjnyxGcejVxHRAgtByCkoxysrev3bkfQNuK5Fg",
  "key22": "65wFK5MBDRXYFNbNnU3srHDuCGGL5k9hoKvofJi4eTN55D3Dg1xLSk43sBQ42NJYmmiANL5ahCzavFT2jc1QyxED",
  "key23": "65PeXEyPcffCvf7RsqHLPwC4daEhYZ71h6NpdcXXA1q541D2pqS3W5EGMdSBc5Tgk3JVyPiQnL4fqBLp9sxhL3iK",
  "key24": "p4ZkGoxmLsmNYTKkmUBJFpo9ue2ii2fvCfPPUHPxhFyD6Wqis1bGwKsPXAZMe1j2KFEphVYGBPvkJQZiAnqitPL",
  "key25": "3u3xbr4REKmJbrNE5XRnPs5aEGbkgMWbXRX5ZcseVEicaMZvt6Gj6zdRqm8vKnMT32SHfdqsq5RuHDA3xicrmzH5",
  "key26": "3aswmYk3V4YfL3FJ3QGWBe4zBgXkinfaGyTawWh6stX8DKGcxpBDigwoJkvhCv7Dsjc9Ai9DgMJ9Qg7AFre733Mj",
  "key27": "3c8yNyGEmHF2Zg4Ku2ZzayP5iRXcNyD6DWhw9BCDf4ib97TR3zYpMGXLznLu29KYjaWtw6Laoc1y65XavdwCuNDc",
  "key28": "3PasmgyBrGNB2eo7JBPXBduQC54rPUkMkPTXWtoDgoc4YW78AjC4bqPrj4EktMz666EqkuXzC9rhNXs1ZoCF7kWM",
  "key29": "2w26aNGmzLEmdEs4Xsn7FGiP8iKQMYkGce1NCA9nRAgZiiJWRcUUbUVLLu1z1fcr3TV1vJzBQo2dwYbrxvuXjxWc",
  "key30": "3Jh1Wf1P5M4CrP7dVwH2g5AQeQmWGCc88NNLhkDSMSJ1VMom3WsgtQtb43tdWBMqbSGvdkWuS1DFN6iKoDxc4CSi",
  "key31": "2L8iH1RCrc77aNyKZiXVgL5tVDdbkEz95A9JMD5cDVKTr794Ct5kCAtZJNkBgfbrdjDouphYZrJWuJxpHD3JrdCv",
  "key32": "38yjfGTqDjeCvGiWjc6P3vVN4w2ecZCaLFzyQzmJLKu4BZQu17TTL9mUeW4N1per4d2hSoUA8ZkFMmNrv5x1QML1",
  "key33": "yRXY77QpFt7mhuRSauCQzvq5BYHxtKohQSdnJYdUGuRTWA6TboppchWCjwuL8rooudCriSJceqtCNx9Ki6YEc9G",
  "key34": "33Lqj39dfj59tUUH2xh6PY3jeGrhULidpdpPgpPuqPTc3qfnRtVav2nQcPGxfc9EusmVgkQ2tUoQ54fjAh9Aw9Fn",
  "key35": "3QMdegfp2t8zRHAaiqrENp28jGzC5qPbMRGi8grqx6tSojkE7V5fBYwxbGtms16ojhUj98BtVQ3yRnRCk2ezraaN",
  "key36": "3ukHaPeL7kcr1BZR5TLCX6ZvNdzjcK4TkNkzVRPyYy3WK4241iydew7JMacbGYj8xkizYoNaF8STzjgUYXGk7jPB",
  "key37": "59FQp7KzcQundHJAN5d5Lw8wcmfatY4eWknvmwaah1XeMzXhdrJ6hH6V6oy7fizVVxSDtzq93bSwaHttrob5wKqT",
  "key38": "5ss7JxmrnyJiv93nqRFyCDYVdrasmJCNsSqRsx5uNdhYhdJU3oPtuXst2VECL3EsLAFeP7rh1p6aKA2F7hUD1wgm",
  "key39": "4PNuTLCk8pnzCUG3ezmfJuphZqumU5msQg1NZwoeAE6gX2vzoaJNhVAJQCwzzc8BJ2qSfH9E5o2wiBANuXP4Y6ZV",
  "key40": "8LrYNjvLB3ceuVjpBCfSrbGWNT2A1cVBTRjqVS9WLVcQwmb32gXVfcx1oaDbLs2JWc3GH7TUJAmBBZJnWX5DcRX",
  "key41": "2HftXPJ7U3Wy4GHWr5mfE2oYEzoiU1UphWvHdf4ZMM2D1saDkdMp1YoaARFGCbenMDSGRG5pJVVzKFQKqfnABqPU",
  "key42": "3AHsfGJy3RuzvEyqdqeERzL84c1WeFzgdMQ3YU8vvpeZQFwRew9NzXxqbALKPU4Ss16ZRfMat8nozeFqb7AX2qSR",
  "key43": "2bQZkvhX3dE9guBqVmx9txmVUJFF2nNxTkBZKKLp3zcoitdJJP6H3cgPrGtAHs1QtHBPd4dzfaq3Lf1fQFrbsDiz",
  "key44": "HFiNiaZ8Lev8BL5rT5MoBVdoqPZ9JPnsWemykZk6p6G9qCe3XsPg43qGdmwoD8RtZjEQznz94VgAzdxbgxfyKoq",
  "key45": "2SJRs3QgZAv6puNAKvu7ukvVHmu3kgfrwATVdcVCBHfUYVU6eKkYwxVztDGkvquH8zt3oPfjwYfkvH57PFpXPKjd",
  "key46": "2su2o4SSjBoMECnXyjMXw7fwc1EbN8E92gn5YoNBvktY9GXgUzp8G2qAFWUtDQTyWu9MBP7QaKVsKFxQsfgBQFAZ",
  "key47": "4CB4MvKZQcdkSd9kzCop3ig7QkusagxDD2dksHihRFNrmckMh5ZqgKpim59uJGX4cEFtFCMfyg5VBGp9HP9wfPHT",
  "key48": "28qEB1kuxeAdPkJjzKgi6CcGKa7dz92oGvWnepvcsNSYVPVncd3gf5JJzxWeCaYoWUWJnYBPfTMHvQDxK6Xm5h1J"
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

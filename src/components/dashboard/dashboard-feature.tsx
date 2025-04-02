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
    "3rJBHgdoGu7kdZywveiHXEes4Xs4akKVs8arTATmydHGsHs4fTxctcUVaDmF4i1uKZKST3jV1yGJRtpBpUWTbAgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ud6HpHD5HF6bD6NnsB7obcNjGPQtQmvoTeX3uqMSaNuZDZ4URYST7U5LR95QV292sTjkk2a65tgR3fewp6AJ2jo",
  "key1": "25hPZn5fzZitDPC3PCu61nKkwRTwZHiQ2nW28196xG8pGmhYuzQgXNPigpYLccmvf1Uh8giJTfiz3HTzGHAgPpjD",
  "key2": "3gY4Wmd3bo78UNjzmSuafDLmfJmop97KPfVGDR4LonqYwvwQuEjUA6S6Z3Y3MJrq7bnx8nydVD5VYi2GcUKry5qj",
  "key3": "2aHkHJH1a6huiJodE9THrPhRdN1SvqVktLQrfVJnGxWpFwG7CDE6MDhS4ahsyZMjMfVR8u9Y4VVn6odYhzGXt41x",
  "key4": "4YDRqXcjRuLsxfLXbW2pUE9E5nhvuFyYMjS1oWJjABeQKPXaVBjfbfajnMpNtSmYMQM42ELB3H6eMAkEhicEoE8f",
  "key5": "4ymZG3vFqeXa6co2BTEDAZ8rhDhVu5YzY1AMPLFKcDiFnx1kGSLT1vA1ttjNde2DQn7JryBz1w8VmdSBdDLw8RJj",
  "key6": "3YAFcGYW18AnACZvzQksMDB8i91VeVaXqFhnA9FYDfoh6uGkqrqE85Wr9fcBrNynEFjVhpYtkptnfiUV7G7XwyAJ",
  "key7": "4sJZG8s5UTbEZXqcg7AvmUmks9pzY6dvDLg3AzR7HMbo3ZwmGwJpc2n3gCxGSU1gb3sfQsEQN7mkukdM7fQ8dRM",
  "key8": "66a3xwoieR7HXouPB9FNf4GbbJyuqhrwRAwJqsTQMYiWhzhQLn92R2msGf369LDLCep3oLq2sZUVvfxodby9TuQp",
  "key9": "5BvCjacDD3qh9bgkSAkzHykA75VP8pMsLzvybURxr44JmwLf7zUAPsn7UNjmKwUqQWgb4x1TUcMXaegDDq8HfWPB",
  "key10": "3L4Crm7imrsECFZLbknAE9NY63vYvYtg8Dmid8nQLn3TXHVvZ6c4PLqbxQNdGnjjCy5WzhHKpYvycvsCG6PMhNX7",
  "key11": "yDLCXcEMjp1NyD2dSiSSGfWhcYG3e16wtCqaQYNzagyZLCsT7cKA5bEcgPePFGn7oahHxS6v6c4NjKPHP8qxJCy",
  "key12": "475iSij2ZxZ16ygFvFzh6zHW9CsrDUYq43DsyeiEUqPmoXdgA5aMUPE3nTGQTRKsxibKoSEwbiTRZXq3Wq1hpxTL",
  "key13": "3BzN3QAgbkuXLF4z3WSY4tCe7n3pv5HjSHgo4wZMs1pdjPSZTGwZbcVtgHnubo2odwKk7L8rS2v1oHS5ss2oKeS4",
  "key14": "5B75fLbZE4Qi5aess8k1kswf7kkgmYjHB4GpT3orSwr1AfaqZvp8F422hEywUw31ZN1ofUzm1TS2GCrFMjXZnjps",
  "key15": "49oGBTfAbbQRrnXPcQF6UQmCnnrzdsrpQpPT3ruhmHxzHjgQwSTKPd9MqUH72YA5viwhmihoYRr2hUSmvFUmng6U",
  "key16": "5pz8vYvYU7Gcq8WAfMocfdxMCEbMmiAx5Ks9sWusWEci5APNrjvWup1rWHtQFTW7LZpeQSpjG9oEttRW4rqNZaq5",
  "key17": "5yBtsxEUxSWKc3ndTp1eqKJEKwwcs9Eyow56yFGE5QjLiziw6FSAF6BttZXjN9H6nQzqHUAdVkASec2bEtoJWtB",
  "key18": "bWVhXPrY45yxACVFvXYsvuZxUpqz9RmWtSDN5oQDFdNqWofjduU6JD4i5oS39mdbi8m3D1h9AvC3VffxzzEnvCz",
  "key19": "5FSUFNVRepkcghAzQUcrMDXHjBRfURq91L73e6SwwB6S17uDQ9FhbvPqVTy5vUXbyrhHnPWCwEfuWGyrkNmmsKT4",
  "key20": "5FJSvCbRPfzpDNUvaTT6qfjEk4gDWW9KooGcK7hHpoFgEitVsgk8bGw3mj9ZJob4TdmhDNDUNghK8yKZsCbkhpy2",
  "key21": "4puQwJWjSiYaGbnpuhGmgbGSTpJmHaUdBQrq2pJkFxn9Kdt1iXg2xEUXuCXSXbCHiFDZgUdvNaRkJsyAW1H6cUZZ",
  "key22": "3vNYeR9ijEsQJVY2coGtcu7GewuG7oDZZPbS93auo4HvKaCNcv3uqaPYpQQeA6xfZcCAeDXfVVs2mLZSydtpwCqc",
  "key23": "3Z92cEZcsSoCmZf6tWMZNL2xtsMNFqB7hZjMWVixwA7gdQ9rV8YspCgc89xbP8dpiaPHjihUTbo652gz16SERE9g",
  "key24": "2Fsn7PHxXL97hUZtXrYik4SojExoHQYWsZft89TU4tMt7mZKpX2X7RJQaqRBiVRUAUcvDhSSkzPRgDszZza4pBLt",
  "key25": "41eRAJsuxpBCY1A9QhSvorLQZZkkxHNvguaoqRzUqH2wNPnNBPZJxWfUXgGS1RLjKfp1WDfyiAtWiDuHEtDQhiJt",
  "key26": "7K6EwTp1pmLj6Y6bNoQLjniJz4dP6wGtt3pK3GZC22ebjNqfmGcnqdwDCCeDYhPopM1tKkh26QzsUupSyncBVJs",
  "key27": "3X3HpYg7nkvqKEZnDKM6kzaBg41Jj7TjUrHca1dqYqvbhXupj5gDJuShLbp6ppo7vcVwDWpnSHPDCxbxeQdCe5eG",
  "key28": "3C8qRGzWphQE73h3SfswCrXbXzhkB4z5jdGSJJ415n5EHUAmHfL9kf7BuoAnW663hbCFqJTb5itx5B2weSU5m9qR",
  "key29": "cTkNqFSj5Uv8a6ATLZXsk5n3JXxLTx6UqbUrxSRAUuYfezdbLJpuA4S66HDQJ7tpL9XHz8HcijqFJYRavfHZ9NY",
  "key30": "5a85vgJ5LTRBtVFYZwrsRaRZyaHtJf2mMs4e414mcMUdxvpw3uwHdiqsYoNZ59mz4CsSMWoqMySwMsuLj2sz5iSk",
  "key31": "4Dk1n4u4NbiqAjN2RRwLH462vZpVK1FHBvaTvAmRNTUxbUrk6qo1remahrQFWQzRgXLv2RBnTXgmGb9xEH9jDDAb",
  "key32": "rpTG8VNrgshK6d156VYQqiZ4sztPMPtHi4RssVtJhSF5vv5cNwjGNknKepUsj44TYmjve5rVCPsDDYomSCf6eu7",
  "key33": "2aBXZNcZkmevvfrfk1xqbRusP1fNRek5A86jDKTdBQJEa2ReDiMuAYbB2oJK722KLcDiE46HD99bwqJ9ixx3bdxQ",
  "key34": "57CMpuV9eFGR4xPedXQ2TAwSyUQyhPbT233DwwTVdVkEnSQpAXR3iuLkH4Vykb3UGrDgDbWf2Hk88X56o8q3QXLH",
  "key35": "5Cn15FSdsURAqK72akND2KKr93bBLX5iDeiTHyvSZadNrDcLbGizyYJGZVoo5iXmss2xYjVhBMfqDbptobhcc1qQ",
  "key36": "4BfUqk4EYWSvkr1s4ouB1AnQo7nS1zSpTw3pfmgCJF7DAjaYgzuvJ1WHb3x21HajCVfxyfrK28Hp3K4FHBEVu9WY",
  "key37": "NLfpokVYgT4qQRS91aE3F4q6ubcfZ4uLrMAGWyaDcP49sYUywbpyeTN9r1RJiYhVVNkaqboakwzXufksPYxZHmj"
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

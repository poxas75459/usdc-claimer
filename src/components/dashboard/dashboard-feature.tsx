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
    "5twhHg4Qw4QYfZ56mCSGcXpfrzrGXpky8zGdMzpjQinFdoLyHK6GFpg44P78b1BWXs4vqjYs1rMdRyhMC9FhG23E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t8WaB6ojLysGWqn3KRPrEBHQ3odg7p3cFi1wXRrfCaQ7XmjJ4aDueUCU7dLb29JbCz47LNXAEt963vxru623Myt",
  "key1": "4oCtPibJfUMYj2Bn753nZd3HVMC8bATqtQ2uMN8jvekYCQRTwjnzSjvW7Ly4iYqqmWefWFSKPgoZzZEgXmRkkmfQ",
  "key2": "28D65JUodCbSTQHaAyVxAZ2kQx5RJwwDf4u6fDbxizLx1pqt3oqoAoCE3F1GMYwHS5ZNAU8zheKEG7MQstN9ayp4",
  "key3": "4yW8AqethJCaNeiQCN9GgZDNk1dUHmJx4A2j1aHDmzVDtC6mEgRD7gFKq9hozWTmQ9W5qhSdk4ff2taK6KtooErL",
  "key4": "67f9vpcqnuzsc7y6QqWkoWgbUc9aTVVfbMjC3KG6Qd32SiGctChXyVefCHypzvYmx6hVG14iKLneNMSFtamnTQnb",
  "key5": "2MeUBq6RoudMoKEbwhmWn5vkbdNboERjKc7PfWRcncYcBbpHvtrX3A1b2pNfGGrvazTUSFtCdXop4UobxmPT5Ycp",
  "key6": "37bzvtHPYksSgQEgHuULUydqSwz6oVqJqwMdK9rLuXPpBQFDHXXVeAF7QB9XwUTNYG2k3rigUZexbnsTj2GMBe4q",
  "key7": "5jyvjDY8b4SEp7SZEhezQzb6F9j56EuthzyGqwCkWwASezHCrERmquCv4phpymccdPLAhCWx4xhESJ111daoikNC",
  "key8": "2Js6uXWnRpQyHZKXETZhyLa6E4xggPAdRA9ZRiVA5RcqxqmDczgcYZAqp8zKijaZ64MqiKB5rkULGheuTPXCsceS",
  "key9": "5vZv3NEhLQpFrdATVW2aKUdXXTH8PdFrCThDr5e1TKqNazJfxvh5pGER6hLGQauJH67guyvM3ja8uFTLQzNntJuo",
  "key10": "4EeRVFWNWYoupkFJYkYfmTsZadQtnH8pBYfHvLnt2N9KkYdy7289d4jKFj4ZWpNBQ4UsBeVdrtbUek1S8wUpaS7x",
  "key11": "44sfAgWY3x4hHcbDEA9iy4bcnhYDfheinjS33wZ7DZYmBwHJYRXiUTGHXekTvuthc1KP65YSm8jFejy8LwkaPCm8",
  "key12": "27A51Bkgsf1X26F13y16xLkjhFBcVc2Vu5JVE2Vhac6XPfWMviEqx6f9mzNQ2StXWNQEiuzTJxmM7HG2G4mbsnyY",
  "key13": "5QJiKEQsyEe6E8jHmhSpjzWwkNKZhbQvpu4qzfdzoRVLTkfwmpTAy2kAmQPFPBZY4nAp5RsA3V75PZ7AjtaLzWij",
  "key14": "W6hADFjVf19aJNWhUHZiCYoDH4RCG2kTe84FNSchujqWBEGw1BJAiX3eqgijwRrpgs4hib6ieozortcrwALzCTz",
  "key15": "4VGFGkeFBr2TbfVXXLGxSM9KJjFoVZdPyHvycQJYU7xr5BC1dCwFUN8BTXzixB6wh4xDLDL6DZusngaHgqPdw26V",
  "key16": "67qnwDFR9Ee8dVYTaycCej2d4sCvmERtQ5iu6bT2rUxsb11Z8S2WN3JCPNhpboPH2UvYtVCj9RWHDqDXqYNtdxqd",
  "key17": "2jcWQ3QERmh6sXGqpUpod55YBKDiz2JHELe9tHNF4RAxyvodrAwfFP7axy8nH6hXph8CYoCrKrduvjayLwh4hqds",
  "key18": "2PhyuyUf7W1C9VYNQdBeXqRXhzZ8CkneikYWJ9sCqaMnDAT7S5F1ad8Z76acnXN1xMbzYhDyA5kuDpb4nYspt97W",
  "key19": "5ZxEyLVhSsK7ujQabHF4DQ6SqUTCogLS2EtHacYmaMTWrMdZqSa61quemoCk3tERbZbm1CtauUSFWJDwPEEV76Gm",
  "key20": "2bAW7V8nqEZc5w4VvBM7MqETvbdQQpj4bR8ZH1GDgmf7WpEpxaCrpqFT8bFeG9nKkTGbxjnavvYqYMBQxjkha9me",
  "key21": "35b1H4wSGo76yYBh9p3tFaz4KL3zAv6f8UtofiGqM1gkyPieYVwx9uAdF2G3d5uaijTTNVE59RDQ17GTJEgNXrJt",
  "key22": "43cWMegF4nUpno1ySR1FneWZ9dKTJtjgpgpXEz9QPV2kfJSFkJfmBVGzji6mj1Lpf5xQN1wFxikHTnjTeoMhHokW",
  "key23": "3j4RWreecp3CVNgzWM3DudHxCC68LrmxBW92CakttXwsth8GSmTg9hGME6HLWwery11KQCNWCUY7FStZ4VUcEfCX",
  "key24": "5KVjR9Hur4kKiVaxxZrCWmfX1YHm5g6XBvWXyvMMGvBvuXjjAS2nFVNbshhjtuxrFmmUsX44H1Ny4RBvdTmDg2G1",
  "key25": "4KJM5JEp29zSrrx9txKo9vStUrYY2jPnSyUqf5T4VMBA7vStzq1NN8XhUVXHwh6fbH3AdVMgNwyJpQqkW5dGjT6h",
  "key26": "2vPJ2ezdQmYcVnCEjvymjVgQ9QKud33zcBwsdL3bT83f8bfd6dcd8xaDKXiukEcTqxERwD599REXhFkNBvz6S11M",
  "key27": "54it9Aq1RgKCVkMo8dYnDemAP5ED8fQ7qqXLfy3Tm6SADyxSKjKvdYxCo5qVRtTU1UsMoNxaBsy7qt1JTgSu66Nr",
  "key28": "5XwYNVw9jgVKVhCvdpe5MJ88X5We399aAtYBe2MTZPjqYMXAMBRtCAjw8Xc8bbXLQFYDbnaJy9KZKVPaY8kHPeiT",
  "key29": "yNyC3fhVfq1Sxd6LdP4dz2rvNgAgM5eQrakXsUJZDfkfFCqfvk1KsrnRmSK1VHsqnd2wxuRgUniVhJddWgeovxd",
  "key30": "5kqh5tWWo2oS9tzXHohCmCcka8ye88LP6DjU9roR4phKfJHPz8GA969tTou5xyqVS53TUAiF4AJr3D6y8ALJ8Gv",
  "key31": "4kyaqysbmCR7dEeNvvh1rdda7d4Yd4GyaS1CVqpV7ibEKe3NfU1n4efisTWr3AsZnjVSH4okc63LSf7CgbC5h2jp",
  "key32": "5Cgg6ubGbzQfThaWWiqf2kidJFHng89C7yQXg2MSYY4VZ37ALAc8y4y4J8Wx6ukZqFwxgEwhcjvqo3W2bgtMtMjd",
  "key33": "32zApDUs7Q6FMDqkgsXAPkwbKKD8mCPMsFb5vPXgrfLqp6ASe1AXn557gNUyj3sR1A6ntx3a6njrbkdsD9c6Tzj4",
  "key34": "KEXCkn9B8AbaTtNpWFqh47muQyniTtcje7thyaqd1UEswXDK6fPeypvFYTCppAS5v3RAgvpjtHWCzXbST9itmmV",
  "key35": "2hxzaB6xSanPLStbYMZXuyeA3958SKRb5oLAzUvVtYHvqSoZN8zjUnxhoCDkMKx8U787ra5chNwQE8e9xugw8zaA",
  "key36": "4nHTydsJGLSAwoaiPUqBNKwnVFKdgvjLmCKAK9vbX2PrbeCJNm9moFthZsdjqjooGbQaziA484ZFCCoqr2194SgM",
  "key37": "557tHrBspnJvZaEi7yzDguHgtWnzjgwVck3YyBHxkoyHuVTDxXJ7LCkLLMryZy1tkuFJ3nXtSUNY5PCt4116hexK",
  "key38": "4pFop44VbVpvvoSMfkJHyt6Gs5CihtyLeDK3xYsJnTfDkZkm8NmEUH5e9x9t2DndH9CGNij2xeK2gZnADuA2iWCs",
  "key39": "5aFef7CzGUfPSs1P1uUQpgdyN1sFixFbpvscDyrQTHSComQEGXx37ZmPJDUJigb8zriStae6RQResfjZWBvx1aYq",
  "key40": "3t5UTuBVCxkXE1MTgwfggvpEGFijtXtyn4Seh24iTL18TGLVGEDMSx53tL1zieg4LxkLk1m1xW2c6t1ZfRrYsbPg",
  "key41": "4qxJ6VRVRb2oEsaPKSDEmsemp2rDYfQTnjEXW9TeB3mTxr6v1Jmj5D3Jq2omMWw5Y9Gf9bKTEiwjBDuLoud82eBz"
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

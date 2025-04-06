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
    "hV7ZGtSMhDPhpVwN3i6Lfhfj6h8FurwjtHZCA3S1aWbDuRaXGie9LFxndfgQrTUpSkRkFXdResAB9t3gWm9dfsR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u5rGbbPKa8stUZxLann18s4UhNANq79272TdQrFcbz8nNGJNkmnFX1nLUvUnSTwLXSP6g7QayDfD9qSWgnfJkTx",
  "key1": "4pZMT6V5HqJkJE59SFpVCv9dVFhyvTT6gUoDdsgNowkFxmtaF6WdTwcutxFNs4MH2mYgPsupMybpYP4AyxQGPzYX",
  "key2": "3PeeopEbHkYKg85xMvWEashGcJ1Wbx6jQoiVh16EtEGx9XixqE6o4mzXSYhQhkTwBBnSAs3M1S5EUTQhYAps18jq",
  "key3": "a5bemeraGfFsqrtfZPuQ8zyEitta1NZB4p1wb41Dnm2EbfWKNA7aVfmcFJ8jhfNcLeAF9afkgzPdxteRiGD2CYK",
  "key4": "4RwTVNyJY8UrzWnhKd2MzETcXK2uYvK7ZBiMtZE2N5b5XBqG6CMV1ou5LtKg8Ch2T5cGy9qNG2G8BJwytiTsNKXo",
  "key5": "57pM879orC2xskDnpYwjuW31v1fSgYpDEb2DfKHY28xVRutkku8hAMdPzFdTkiDWuHqCpFk6bxn8qwdfhE2pTSju",
  "key6": "2CSQYGirXySUfkLXk9x7stq2hN5QFjJUcGuwnuKkQmUvVux9dLxbLdu6jwph9CayBvxJ7dC9Ak5WiPoR4qbJbrjG",
  "key7": "55kSK9UD6jJmkn69LU9YTQRJSjdr4jk9nS2PNhHu3TANPwHCyVePtazS8vk8idt58skncpjYpWaMwaMSMfLgmFri",
  "key8": "2aHci38jceTBeoNUTDEcZ8TQ7sRAkydE43G247cdQe3UJ2pP6LbvdjoDtNRiAWgxkWngZbWKcGKJAas7mkEwDoQF",
  "key9": "3j7nkLCMGyfxAtRadmYwmk8egVwu9iZNmSRVRnZNs6egRFxPmvegtFzVAEuZ7AATM512DfpoVJyiYDVxyNLpu5VK",
  "key10": "4G2Y8wga2Zhs9rN7tDuwJ9LuVgSrowQrYWFBt5j8oyUAsaEBix6zcNenNrcMtCXM4hqyQap4EpacqxNeB21PsWhh",
  "key11": "TwWN5zwAkoLaZK6FZfA9fk5gP7qmcmodLHAagAxqVpi9a68mZ4vfmUbKygvaQAoxopkLSbM5datP9p2wp3jFSjh",
  "key12": "2NXR87gWNWKVSGDjk7NM9LYgMq4sMvBnk49UbVscggqYu4XhEqYzoCkNjTNeSAwVduVxHE9yPecaAHdpV6pKtYEj",
  "key13": "51ioZ8KUUpapXckbw1yyC6qYzQtkBtioLsKLjUPwPPb2bXSKJR3YNo5eeENdhcH19xj42crXj7Y7FU5WFVif1CTg",
  "key14": "5X9NcNs2diikbMUGkv3W4bYnNBqzLSrRZVgrg9cMqFWwpHPT7F2tx7gNDRfpeBsqHufdjqR4KaaYC4gtH4CQEyaR",
  "key15": "4uqypviqHccgjL9BDPHTbMvBFmzep8A57H6AuVrryejCZv4iaPicLC7JasvBhcndtsWaAnb6feQ8z7oRhbpUWNAA",
  "key16": "3S7MEo745kTU4y7DCq9jnxY1h1Prvrm573aJscrWQ8FtqdaQXrdmp1C6p6NSviES39uSkrwLFUYSeHYQNurdugcg",
  "key17": "4ML1NK1um9eWy5ETAzYCgCqrwwbTN9VthdtzjwBJDG2VkrtS28PjR4tpG9ibMZbhGkhxreD6ut17D5ksFDmgMc4V",
  "key18": "5wwd8C5SMSUWK9W2ijbacoC7qnbTkn7qmTSrzHVsGFYq2oRw5iKiasGsFCzHhgZ4ZHyLDVSpE8aYmkwNr3vwHXd2",
  "key19": "zPvPeCpe4SS55ThzZ2fnHwZmxPNAiKbgP2jmprRWzfLK5JLsqb3Dw29zxhSwv4mGwccnand4QwPbkjziBnUkG67",
  "key20": "an8zCD42qmQUCMsE1Zi9g6XCneuvexzSYZKceqKp5YgE11MuZ3SojuSVPUCdYk6pu6BFN8t7mJAE5kgYksEWvDZ",
  "key21": "2QzNzvQNVi2Xu3uXojQxFdPx5XQsSzzRqxATb5N5Hpa6XV9P17xbobxcdkudXAMMYjG6oxNiuEyyR19ionXDR1R1",
  "key22": "3QjhfEa85YSqYcXrn9SdWehkNexHjuBG4qcmnPbMKGZrw3RaKoECSMdRCoiutiY8vdRNqQy3GKBYvkxbtu1LkS7t",
  "key23": "34HLj2oWL9u9hs1nNpcnbefRdxKzen55JPjafpSh1W5dnS9r7CtPwgQJ3wSEMFAFZHRJs4EqvrBSBfdtY8ETPZ5Z",
  "key24": "3Fq3jwTPmJ6r7MgWoydw5JCWxXTmXoyq8Av8CehfiZLa3LLipE5duAQjy6UyUibqGWTepGK8M1o82t29oamTcwUJ",
  "key25": "26K4rbc6ov8dwrsE6RX5bKpVRCFk4gWcETWf9NuPhYY1KarUpZLFDenjRz3XjbDmXgLEfLHgZVWrctVfykzbqbft",
  "key26": "b5kxo5uLXkYE3hQ2USkqwNaLk5QYxWTPrdxnXVkH79M13NCpyNy2jNAyJZrNew1VqzgJsZ8DKEmMGdiwr4CMa3h",
  "key27": "2dsoJ84QTd1FHX25WwBrhF41scuQ6LQu1jV9NG1svZ7vQuqjMn1jsBsucCiD934k7KdDFqkacCVT9wdyemDodRmp",
  "key28": "421rfzeR4P45hs8FmszV2fnPxJE2wbLg1UP6kHV5QnYxSwT2JiHHRZJ4YW7TFxG6u5B8ePALNAzRzBpVmfufoaAS",
  "key29": "53eakk9WVau2zu78uisFrsfQ7J33cNf3P1hjGdbfTUUmT6o27cexkxPpKaT4HmeSMwWa6tHmQN3JNsVPXxXTNEiC",
  "key30": "3tWw2gbYxEtMwgTtuo222ebQjVaymUvq9KrabGXQaRP2Xg2Ci9BwJCtTgk6i3MSg4SHju8AQNdXMBQdcMXu4Wbsb",
  "key31": "5kjxjrBsDBGTFJ9TLBarWuzTdvVKQorWyTHTF9chxzXxbem6uLgBT26YBkq5bp8osEy95eW7GjXejAz1GevEpSkm",
  "key32": "RwVumQJkXuqbNAQxMztaGy3BbzPE4UQR3huL4416iK6aAmef3BupTrN31iYatXqA3wfxLHxM2Cr7xjEqvBqwj6k",
  "key33": "5SzVfX9T4AzrNzaRFpQRDm2asNqWRcmn7opKPYywkQutWXgRg7u2BcetGiq6BfBPzqZXBVPzA63s6RCZCxajHzPg",
  "key34": "431Rc6LiAsoA2AUsawAPdLTSEYjYUA5j9qi1AHWucnriwNE29U6URZKn3Wu9matjjbZMqK5H11qN89EKCmu1n4j7",
  "key35": "3dphbGbnaMUjLUZj1q7aUnkcMRNCURmoEEVJUFAi5WhVVa97LQhGcKLJDZqv5EjTeaKbHRPpZe1JdRgJ486Qaitq",
  "key36": "2QdsRF41pqAHyYDMhqNgusdkzh134qgri6GGnQBfjVq2kfZrM3GjoFoJZ5wDy5ZxHEWEdAVxydqdJPvXNrd7AFFG"
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

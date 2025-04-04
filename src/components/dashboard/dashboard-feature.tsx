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
    "3XGCpSSTyGFVYu477f84kB8kU2xWjEDsLM1XcxUiv8CoocDkSNLnzsxzTj2q75L5LpVAj1pfAx26QyMvCe1yCqKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qUsr9vYYUiMTxMMSeLLerzgNtrLidbMPYAAZQK55gU9NxqML3Qd5Wabh3znsabqDdGLjgajSWeGdesE2CGHSTLH",
  "key1": "5iJran66VHSCZNYTn6eBqcaNqu8GiF81LhFY5UpqHY1UfTSqnaeLCscSKsYJeN2vKkmnYK62Dq4Z4WXvhT1zpQKs",
  "key2": "5HQq2zjbwe56R3NUkR7SRSj1frDSWiEfa63mjmobfMwbnsPh5Ast5ZpxcwrXDkUFM3fyNfZUBrYCK2KihUR4hPbG",
  "key3": "5AGhscXKQBg5Gnc12etywUCcrmQ5RWUxL8GsVLUnDaRFYsekw2C1hHryeXtFgDvAtAgnNNzFpuc5YTjMBujjifyy",
  "key4": "454dPsmXRsG7eM7fGXX2aRU3K81dgRdzGekZzZCZGqozGfh2RQs8rG75jHAuFQ7LAL6DENzKgJtEseFrvXQNMKsd",
  "key5": "2t1jw7YPpnwLcz48zPLgjrzKVbyHhnN2GNarGBfS9nWEJgexpY1EcpdTL73FWfKW6LhGoe9m5T6HJD7SmBzVHcPh",
  "key6": "3xiv3kyXukBK1NpZj5sMCsh4tdxbYPLqSdJ6X1kk4dxx4Kivj4kQL1vg6ef9Cv59mjV3sMcVHYK3uSrUK9R4aNxe",
  "key7": "4V7dbNFVV65R2UmJrsxDv8gu4VH8SkdkKosz2FKRLnihPB8wFgiRyb4uCZ8eye1neShxriSmzXYkBVJhA5cyPr7p",
  "key8": "442HmB2L6Hd5W4BNi8MSsNTWGmCrmDKzoH89wSiKGCj2gxScbVzF3jTsy1ceCJQ88H66uUYK4gToqrUWo2ggirsY",
  "key9": "44181NqYvEPso9wHesCEfANJHgYfLiANrNwYQCswu1oug5x3K6zoD6rypoKEJSpGejSCC53awJWKuUbY2ULVo4CZ",
  "key10": "NmV9uRFxEonwRbxvjZvYgvQADGD4LspwpfsGkK4XhzcB3HBtjKaXCH9RMmJkknLerVvGgc2pjuGG5252CQw8NmA",
  "key11": "5YtfqdLhUPsNBdLsnY24baoXLDDXmyHTcjK2JfzqHDF95PuobKWMncz73ddWAB5m6bWy7t5tN66zFp4Mb5UJGeKH",
  "key12": "5ruxZfqY8yw82ivFDegFq3iNnWHsobsxZjYTaANLY4jzqvs68wGvtHZ6PgswzgXWiAwMtFFBZ3knu3qiWgbsbA8X",
  "key13": "5cfXkmt3ks4na9r5XDJtf2NLGnCqAS1W4oPDbYQjwkneA5pcMNDPwYxdSjpUoeBs2eLPTq5YDdwANX5Z6yvsAQ1G",
  "key14": "Q7kT4E1izy7GpmtjttejqZc6opVywrFx1jPL6PS2qT6AwMnwAhDGv3YEiErjjjMrqZSqVbgn27FDoNDCufEPZax",
  "key15": "25wBPV4mpJTYhd9aTXpo427KYriGGkQFnVxjc7tX4NCwHVgT6Eqv34gCVC7g7XguUgQ9gM8BfB5WuRBqdfvRjzEB",
  "key16": "55ksVnzDrADBGMa4vPD69dQHFV3dYjoGgkBcMcpamdCGMM5ujEs2DySwmowA4F9u8zTyxxSrXuP5B8K5MiD3FphU",
  "key17": "2xhPtpk81YW8q6RshTMfiRtU8j94VMpKp9qEiohUnChqWFdFaY3sHkjSUBcm5UwWLFrAmXgeMj9nYBRXciWgmKEH",
  "key18": "54rvCPRNNNX8n3eHp1ecrGHkugEUUR5RsHaYwqTGBHyTZ8gHceti8nkmnpu8sgkXs4UUYismPzxmPhQpD7aTvwBx",
  "key19": "59uzorCVyJDsdSrtR7tQQPAmnLqyfzYWvHLL5sH29S4FZ9RRd2NNxHGdT2VJ5dvD9WnWkrcyqGVaDXHgrkEetHsb",
  "key20": "3srubEKBpNSLAUnaYaurTREqrUiG3YYiqt6sTiWZbD2SsUr2NXNMpNwczFXkJxGu3jQX9va52hqJd4WxkLwZUQnP",
  "key21": "56Egb7wrqvj8jwdkaoRPfqyrJSpjQQSPRsPpkwvmmMMPykR8Ef2UomS6Tzd2TiqioybSyqAFRKNC5qRi4ejcqyRw",
  "key22": "4tbsYmBqF9fKRhyEJ3w4ii6vx2Kf73ma6RtWzV5cQyKKNbZP1vqp7uFn3bhMdZgyzzoD3e7zgh2pVoLybR2JbpLL",
  "key23": "5Q7n8A5ogoiSW9rjL4Wv4umfJQjex4qDaTXzzNNoquty6AmenuHsSXxA739bt7bCp29fJYqMUc3bHP4AVfPTqx2U",
  "key24": "4vNqpomRLaMytEvxgNfaZHYACj7pEtyzp6zDaiNeJnJhf8ZmbGk4ddfmwXqCU3LBhST2hAYL2y8kAVMngg1GJRJf",
  "key25": "3rdfrcmXnsg7tGrWfg1RWzfXuvmDyJAPvBYgrkeFycc4MktfdSfG9Bs8kvmb2YAJRQh9KBjqoQMSJiV8Bd3zGHBy",
  "key26": "3MVdPpFnLjJUPvHVhhTNj3kUg16HE8XXnkPhDWwUnC6pGDmUHKdbbrrYSaEBX7Wgx8ZuT399J2gQbdvVQ38VTU8U",
  "key27": "43U7jXGHFLkDgJjErzCLTRMzoVMEYtiBy1kAj9wkWs7BLhuQVBu8BKGostdHMS3gX6HDsfKC5EBSnXtSWo6RzMyf",
  "key28": "3c4jsWp4qzD9dUoYWXj9h6Zjd8ZnLnpG7fTahC9oJ8JNFn6CSHyusUw6qNAAvzggtF2k6jzWPEFzYyebATSH3NVA",
  "key29": "47RfUTttrkgyNvqcUPEeF28H9wuXNp96uM5e9u73w79vvsZRQAmbdij5Kx5kosXG1FzqNogYeQHkXyn7nNMcMadh",
  "key30": "BPN19V1QyD2uXT9H2Re7ML9ZdXnxKCWVHUsFkYLECJfoAjh7YAc1pU9xKGPWFCpAzxpQtPu9u9T3PyepKgeWjAs",
  "key31": "5qDhjrAb7zGFXGUinTMigy1CqPE2ZvDiBukqeYSgUtrHVGYkumLVkL4mTqBU18sPmyJsDRnTisQYJSkRcZYWfeN8",
  "key32": "59D5ojnNfmYx1Dhpgq7JxEbfrfZHH8tXVaQ4wAqab6NxbVE8xx3w6MPEWm2fkPo6CuaWZ1SoS4fNdzWs2DMhNBkL",
  "key33": "2XZ4EnX4ZQMwWNSUSm1jE1qDxFRVu2nhrYKTCtPQp9fhAHAtMTbDzCkn8dDHJQYddXb1casmqkMeTTUtFsChWMEn",
  "key34": "571Fc7t94LiwdAtQRzdawfTQ1acKC9ehq8tLKtCFNpLqQ5BKyKxZrwfUJCcHQymCBKNYoJCaN4G8Ja8HPFw26PUr",
  "key35": "j6AdCQnruW116U8YyKrEmFb9F3wxFoQecxzWMHUg5DiYGbHvtJTKkfudKzg9mBgRYWVYZEgTKHsujv9fZrNoQqQ",
  "key36": "27QNMHu9bKUf69sco6UiLLXLTF4pgCa6gfuLMErakwFqj2PNucAGTpLZgc7v3PGTSoBytkVUa9Zo1dmRuFh8KfUs",
  "key37": "52d6C1kd9xQpQr8BUWwr2A5qbQYhhsR8qCfqA9PXmrMkosYx22wHQmA6XvNc2iijHJzwWazanTvRnXzcphTKTKP6",
  "key38": "5uexKgwYmeMnqNBxdkKZsRpv1ojgTVWcV5eCyYA8W3xAiHnuoTAstfTab2FjjX7PgXC3AAn5veymvvbYu15dkvRf",
  "key39": "3UsTLniiXNHLnxiceMwp7FkvhzaFnfdAeCB3BWF6WoP44MLPQgH4JE2Ni7DELvr3dfBtf9H8bhNbUS2gi4zX8yzo",
  "key40": "2wiQTX6LWXXhGzPyLao65C18YGT7zcn8f5vQEGF2r5CULrwsEryfLopKqtjCFf4NjSN1zZk7xmTBXJh5WRiycxsG",
  "key41": "5yFrHhyy9j461ktaA9s1jmrsy8tWP2dKcVYFp5P6YjHRTWykFMQn4Y2f81YvUwSWGoY9S4Nyg9VxiUJ8NhD5zsaH",
  "key42": "opArNKWdHoLA9uiASxR76owQ8oA4m6d9SLVkZ5WD3hhmemdKYbWb2Eg5bdMu2oYCzQHRmfVGPvMVGy7iWC657Gz",
  "key43": "4Kikep9Rqow7ptWC646AMe3Lyvaeo4gQKAKbT2JXQ4bpfuZtfdtUu2cRSMBiaxdKZ2XHGCYH7L7uCeuMXkLx4FNu",
  "key44": "2tc9E13xZ2xbLQhqzg9hC1YzWJwsbJMrTjVNkxJXuZRFA2YEknYefyRaqFnAo8oGUkbLTBvdZaNmWGtiQWDG3Fns",
  "key45": "p8oohHUZ5P3G15yc4cP4k7LC7MpyUmWGkmhWPp27tKxqUjYtLz1rDfys5e2YxzB3jw7DD4UTomJQoCV6oHgm6MN",
  "key46": "39FqdY9Qv8kQh9hYtmCkUrEv2ezzoHjJKtRwV2dkhHZQjea4wvUtJHh4hvBgykkTdRLxzALhZPmmnQ2q5NbAuGsh"
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

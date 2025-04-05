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
    "48YsW1HQK6yvHgcvAarYaG7yRzJub45zsjQBzTvErQN934sEDDd164uQxQC212nxNZmpUEjADbHfERsE886K1515"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hDPSGdR96DD4daQUXeWdpuzVWLrBR1joVntbuXAbJQhTUyHjhGWnZrkua3HH9W1iYKPprBhynkdMYNWg4T6HQ5g",
  "key1": "41FPLDm6stQaeD9B8WrDTXBX6k7WcxwnWBC8CBBscxV8qcKx9jCzKNwQLFRQMdFnvwwmu7BnKUtCtnSRTFtrhKmD",
  "key2": "5uUdB55zokgar9YGNHhRSRm9tfDPsYxpkWV6D6i2JUvDXuPNaoWcPNb7HtV2FHGLRPeuALUZMhcqZWmA3KHvfKJQ",
  "key3": "JnXQUcTP7bCfgWT6w4jMoZVYaLxMNriNANLcLh9r4MKHo2kuWrv7fxPDcC1ZL5gA8KgxqcQM5qdoSkbYe2ZpAfF",
  "key4": "5y5D6QxkPNU7dB6XAjxoCpveoSmB1EgCFWYCVwkxnkAcw2Tz5XVK9B7rF5tJpmp6KKx7ZqGFZtLKp2eQ21TLrps3",
  "key5": "5dwNCsEcmg73ioRmjvMDBD4eZcq51it8wdbXKcrCqjvhLFVZVV8ct9cahg9YWjp6EJ2omMbibnGoMtYF8n6FHLeK",
  "key6": "4DfcVYeLYMjnUDQrosBrS9VKaPhYcccsYLP8bzxwacBJ4Ab1fYWCYTBXwZdvF9Rvw859JBJbK26fhcmasj4DKxfV",
  "key7": "5wPdwZX8geNkT2r7N1x13gwAmqxgzgAS6413rBKxvcBdfPUezHfb7sKtofTNMxyypPrY7nky71zKbFT5bdhxgpG5",
  "key8": "FSTFamKSLikcbQzbgge9XaYJPTkHGtv4PhxxpUiRgZTMUmLuDS5cCm8JTiz8KsVq96L4TnK1UnfDDkS9VENGcJs",
  "key9": "1rKTheCfhrrgCN1f29UDxZde3W7cm9B6dZrmX78b6kPgLVSuRfcY4ptYEF3DmhATALfVRN1nW57bXyWnygmM1VY",
  "key10": "388eNYf3bBrcaUiM3oYMerEEebfLtmgacS6vtqFHfweH8Z2GDKebuTXokzUVaDrNeUou2FzPzu6VpBdwGAPnC1Rp",
  "key11": "2ycZuRk7MbD3uu4Ni8ATXqMKmoG2RXdaoxp8wvMqu6P9Vweh8rSc35qGi8sCeynB3jUEsu6coALSkBpjUBhBSUPn",
  "key12": "ZKSQoq3AZjsrDtSCTj7hZiFh5LcxxM6ptk38F4hmibeG8j95UzyYY8XuGqB6TaSUf4pa4VJo2JYfcqpF2C5SroH",
  "key13": "5FtTUXKSnJxH7efArevpeKTE2ict8f7t2xuCPRCtRGDT2BTfzVTxeSozy56gUDRyT4Ldkxa9Hq3dPWhQ7sdgtoCs",
  "key14": "4xxUQQ3LZe9xz6PXgeyEg51u9w6RjS43eAWmcmuHZD2KaVogoUPswNTxtbbkCjJxgSfwzCxHDhvqygyYpQKDiGqu",
  "key15": "2Rs7EAZAH3LAz9bfyd991yPwD1KeKRr5cuQgFiBXnnSEz9pXXcxUm67bDqxVTjWQ7FZMwrFS3RFLkigbgSWi2Kvy",
  "key16": "33eDxfHBSKQwaMK8cr1FnNRxNDYenDJED72E4z7JvyA2cQX2zmAHjYPxix8bhSGrBzLWgc8a9FY29kH12UWmU6zp",
  "key17": "HFS9mSg6HNmbsTpjYLTWfRbwhp9KkwLJrCHuiipKhHzdSzsqs4dNvANGWM6eFyeC61iuknsy8R3iK6xuq3U9BGc",
  "key18": "4trmMdz9Ze31n55x55qaDY7MpTiSyuZ5RMq69HSjmV8ZoxGWydUZ86eY4k3UQzSAsWAnLRhXuFELkpbbgEw6R4pe",
  "key19": "srp1uWXhXNd1eAgZYdSAyLKmvNmGH3GyUSNcPy66CTpVfgFDSHMXrCKHog7NVrEP7XdN4P5p9wZiPfzfqnadSmY",
  "key20": "41PjDDJCMDUSK6EHk8RPzYJe9ipXuWiSex7mrXXt2Fki3Lyb2QQtcUoUdos3UCfRSAVdqGTbCgCGLwndQfLpnoLY",
  "key21": "4CmKeoxc2hwUoNEnY8os3xz5Q4JGyQXfPPXLDPprbQQM6tZfHdaZ7YMQqzm5yEYbQZ9ofjCNeDoRJVkrxnEqDcSe",
  "key22": "4khb2ckMoHmzVC55wZkiM3gJsEc6uebzTVSxXuKQwCELDBBd6LDp4Vk1fSt89U194RJ8SmJCTgJ7Wq7WBg4yJEcn",
  "key23": "2tWWX2fGUqJJaGFkyry887qhAkhwK5FvF5pSJ1eK8QEodNa8mWjYKXUpPh9isfdaSHUSv3oFTk1yceDKNj2DyxYA",
  "key24": "5U5MNRz9ykciXy78ZD1Do3uhQEm6KSCyWskG8bbRHKDkCozkUmmtMNK2SGFfW19MA6ctiyoEAYEggodP2U4rXjqN",
  "key25": "3yheJagS8ZCE87SeSGFjbjowivRYX9sZ6VWstZ2kY65sK4oMcdY4NWHUHPPSrDpvbDZvadyTMLaKeopa8TG5L8xH",
  "key26": "41wuc5NBgA8xWgbCgSQqrvThw9E9PW4Y3XG4NX9AgdmJDYUq3iYRoFf4BmBn1S1EjLbEE6fwht6SiZmYmmWg1prz",
  "key27": "3GhSBARz3VrWQw3bfCAXc2vZbfiXhEPpNF7PS8D1bATtJ72Z1h4zy6rxYddd8yWhjb22dSWY6M4H3jKjFhx6arQ1",
  "key28": "e1vRTwppA8SQktbfubC9AynVkkpEUPvaXyKBGpGm8T8HfDje1fuz9w52e1FLf8JzyTKGoTG9FN8MbQrNDAES8wX",
  "key29": "37tDBmgykvspWRgTov6Ehu4Pn3K2GDCX7ZCyZYna6kbZQrEYb35Jv14XAJeZ1fc1sHZ6ErhoF315rYkXWfntkuFg",
  "key30": "3kA9EYMF1JEk3rXgB7NJeG1GYWtKWRem6gqpCoCQvzznxZGQd6CMYUsRkiaPPfvYxPWbHJAVTF6x8WT8ivt7TJxM",
  "key31": "4ySFpvhAnhVsoXGrKXP6EeaX4sG7y4d92NevhBpo3D3PNRWvYZNuPwEr6hjFJEQbVVmV36U6MKuKbjTfzitxhgU8",
  "key32": "3immoQg169grV3W6BXBXjgQ6GhihGTeWqBV7N3csvM3jRx3Eqbz8CnvgV8HvJub4fSHiwKByDqfNqJYkyQ2j4cPR",
  "key33": "4MrxJQrTuJeDBoxqCzvG34MkEPzv44BT6qP4crTorbLCSAtyaFkJo5gMmrzh7ve6oDeNpnaDCMKSW79rjwR89F3b",
  "key34": "5wLxkSWvu7cdUcp5ZzhziWJQu81eKXFTyMHVxcdqVdmdNd9G1QKmczdMNfdvZ3piqSbKmrSsXHiWBtdhonJUVfEC",
  "key35": "4U7q2t7tTiE13DnNiyPKB5evnE6zX7n3EbUo6iEe1ZvWezdAeQDR7TAN9LLqNsc7oHx6EcbqNfyexNfNdegtGwop",
  "key36": "3jzLdHAg8GwtziXzNq8Kf6VoZ8Zp7JjPZPhAVCpjqp2bds3M4FUDsZzutVVF8tmKnEk2vvVAmBGsKAn5vzbXVX3H",
  "key37": "3JnYhj7oeGmatViAnNB3MnSsxv35Utws6biLspptcNfWAAkbj4NExxd6PBFVRyN41SS2SjVj2PWJYSvJb8H4DnD"
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

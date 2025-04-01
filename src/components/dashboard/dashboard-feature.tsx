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
    "2xEPLYk4hSDngfnepTAQ8oRTaTkeTZdpsp6rL8mjmCJ3kUNUt8PBEtmnNFKu2TPWGNEg24Ntn1iWN4zbSLRjiZnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SXNgJs9Hu813jVPh6KG1W7EgiYsVErHa72WGi2jN5jWfSdZ8xXcMYfkAjFeZjf2otABm56cprFMQD3VxGEDAXuh",
  "key1": "4XELhmYtnhTo2v3tjLCtTSeWZ612dCaXKQ69oEjwDVYcpbnhYxzCtzp2HpPkEWAAPAzf4istt5b8f2v8BkH6greb",
  "key2": "3TH2wmgHdmDujA6gisejbavN8A19TK41LUvL17eGPFAs9VA84pvdPaqBMysQpK6FBqrR1NTuEfWzPn3qtdkxDM5q",
  "key3": "5wvNGwoukYRxcCMDjiDiNzxW3hLqqpMpZUSYZSccJX6wkqgKUzDCsdfoLUNY7ravmh6JyiAFPd7PsaQ6ohjDEbS9",
  "key4": "x9vxhe4jP1p5Sj4YTtechSM3wxPiJ2it7ivmKsQrG7jrVuTjSPtJQL33h3oNRKwVw7qkHe9RvE23bVUBqsMxt41",
  "key5": "35Va9JUnH1BqFEAXjrungGp3fVK34yCzRrEoDF4Pw8Zarg9QvzJPLMUhnPrg8bWYunRUxi9mfgtLTYBPiq7fVYGq",
  "key6": "3o4KFTDs3aDqJLVxhmoeQtUArJyWBaQcNYoY1jikdpQkVUhpsHFDL8geSjbYs5x2o1W8jVkDQrUdvUvUW4dKjCff",
  "key7": "3fmhBo9NdaTgtAnfcxuMf2k61XXk2eeWdYoKXYaXLoHkEyNDLvtcHKPDh6ze9WYSFmdZquxgQB6JyWnT462h1oSu",
  "key8": "4v7rytMi4w9U7bNcpheyMtPUWgcpF2dE1tV6uqYVMe795M4qxtSFuF2ok1B4n1xw5q9HJ7UJPUDnRxgLUxzr1Z8n",
  "key9": "43qcQRtaNPW4tV8K3vxJPGXQJeDr9WQPvxpgAeDddkLNVs1XawvpGtQzF7AfBixte9XBspgKa4TLrDTPgVcBtXLf",
  "key10": "2LmVyeJ1U9rxukU8SerUA1mcytT9pP2kv3EQygciPvkupjyDV7dh9uGD1pLNuynCqS7D8mcQciuzeSxGPNBqU167",
  "key11": "3Y3TdeXX5MQVgGkBsVvWF9vgavYP8H5QXSh7cWBzwPJ3nj3PsUECHKzYUmou46JxsL4trb3EiS478f3chRRepBHx",
  "key12": "5mMADPhsdZzb65KRR7Ygz5NsA8dbysaYf1tTAN5Qz2TDrHKpcKFgfaS8xV4wXJcgDWNe1JAkxK15gDnmqTwNiYgi",
  "key13": "61ZeXKBJby9fQc2VnbYBXHgSEpBTpoQnnT8SdW7dsavXxAgP9XLF6i5QjY34EWWNuFUEvESsB8ygH5TyQnPcyAJy",
  "key14": "5tqqVioLehH4bT5fFBg3LRdh9GuwQ7YBRDi59B7ubuAvAJ77pZSYpCN4czTX5699NR8UvvDFHoETPjq5qWUuotS2",
  "key15": "KraaX9G7d21h7ifWQNZixsoxeW8XciRTyd62CxJYBEGTQpk9LeaXrTks1WzUHFQ3QJJ5QLU6Lvhg7cyuXy2a8xw",
  "key16": "3pQmws5Vzf5hBgXy6jjpmNi5mqTNcJcPRrY5KKZHAH3FzpuJvR7hHdXeA5WUkHDfhYcNVRZZSWMcqRKVTbHDpzxy",
  "key17": "4qs1YLTcmdcvcr5dwqx8xHPqXa3m61Wwpr9UDrZVNxqjxxhfho9Ek2tV1sL5oLQZBDKCqMBpyVZN1bNHAbjxPuoP",
  "key18": "ijt1Y75pBS3ysys1apAS5pCEduS2eP5kggWXPtxZQcUc4drdH546njDF3EvBRsEmQ9dS3v7WQ5gHYL9KdcLX2Ms",
  "key19": "uLq59Knx448jyDiMoJFsQyx7zYJEPqZZjYHRiWsiLzA8BQiodMF9PvEUkfthVxuB2r7uMLinwrKZyzjRqqCheaq",
  "key20": "4uUSnocLeMToMuGF78wW3VwRLca9DVsdrjVfW3RcbwymiNz7ojnudcJCtaiC3tWcbxcXDzA3rhJRVAQzRzDmqtS5",
  "key21": "5q2B7PUXH1VX5WhHyA6a5xDA9USoiqm29kQYhJLiaDXnxoFxFdq7igmCUhp9WQ1aDruVTzpMZv9zZ8io7uZeezuo",
  "key22": "2QAwsLX6juTCkXpDVzoF8kDUiyhYn7miDEdw8VTENq86JPzNSezK1eGDux9VLpp9U3ZAYBBqNexxEG1Jr55AC3kn",
  "key23": "DR93nJTHffxSErqFgP8umneRNugb4o197ALFpYjFeZF5iB9UcWMCXoSFhov3uUkFnhjRK7QsovhbEB5d16Pp1Ln",
  "key24": "4rCXqPptjPESGmiurKcQvNhBybUG3PHjf4gbdqGjs6oxVXbSQ4U9j2bAXwcbFQ3VovMFTaW5DM5Xx8x6ZPiJMK9c",
  "key25": "3F5kVo63dgzmrYDsm78Ed5tLvWZ3hBZa26tN1CgAXVPd3YvxbTcsWfPpiihjm37qjYSJ4xuXC8Hr9ER38hojL1R2",
  "key26": "3Bku9FnjK3PmmatrPPVPCcm7SyG7NgDqS3mcJMtCcpgcogybTKfTLsG1ddgmFFfc3GG4uceRPtPuUAD7JyZKF14G",
  "key27": "63PrnwQUoGtJzuFXb91C7mnSvJvviEnvCnyUEGmV3S7Yuqjw63BqetJnAHfyTcYXKrpJm423AFWHckdGdkaJWSbP",
  "key28": "PbvsbR9SBLbf3EkDQUnhvqTmt1w9GTMMJX91oNMYgskYASq4tnfkfoUMfCH7v6coNBmgc2zDGw5LwL6SRAZuM2Q",
  "key29": "5JNbyc1kuktJdP7hcwrgdjVvE7C64hJNLvteCNizsHxhHYr5KUAvi2XSJcCfH4NYQkXDx4oxsHThzKGTNsN7pfZh",
  "key30": "4zDmZWRo1TJ9t53gbez3Wy6NSYamcWnPjPN2s7UtAPw8boMndfdoPgdtqJttv5Jvmu1dB4B1PdeUZxJiHQ97FFTw",
  "key31": "2kEpGthjZfY6tACJmqvggR51YN8gMS6k1ApgpHMTdH4Fa9gBfspSxb95ZFYoy3AynZJEW1ZFm7GHAfG8oqHvrExs",
  "key32": "55hcczYvSDVYY9q9pxbj2sax3y1M9Jb8GHRmvsQhp1uJgPWEm7sL3RpEDtPyVNQwZLEKU7GBWWwQdXuPgabBP8fb",
  "key33": "5WBzSzqG6sMcJBq958mCA2kpGzTNfmAHQA6BvhuY3DbH4uvxqcPCzbFoZxUYqqM6ERpcbVSxA84tcQZ2AnhLvqnC",
  "key34": "2S5fwGeZxTYbWZRzBmAYoCX1YQL5wZLRMZgJxGhkCKP5FCkfDyYDFUDsbPZKzmUBxkjryBwJ6S32dwpggJC2p2hy",
  "key35": "4tBahDM4pDB9xMFgGyfTAkWCRKtnEMs2B9JWEJ6uHqQrBjVeNAzF8oTLpNNrSM6bbjkH7wHEVim5DuJm8S1bwZku",
  "key36": "4zMm4MLoqAvvDAZFzA6jajAad8GAZ311c9YvLqQBQLyYyzFdywbvpc9Zx4FoaoxAicxVqddfGcafEMGosMegzKpk",
  "key37": "4PcdGyVCHuv5ezxCgDzkAhT7988XgYLFp8Tu7iMkwgPMYGBg8wNkL3PCz9dWyXkibdvLEEpuW12PTV5W1RhN8MfB",
  "key38": "cJKJDmbLTRujZLK9xipwhmjaquvuJxSuwaMiz9McebdzZVrYsB7SMJhMbb9aUAo8TrVvkELtBV7RAFnBNytD3SD",
  "key39": "5i8dQBMAU5tw12Ymk9xLmncrnziWwuUovGrBH5saprh3PPvbsWD53RLsRd1T8YpCo6p72wkKuC6iYpBiurE1moGx",
  "key40": "3v8LRMkGaf5Gb2t3YiFA8D2TVF7k4gXLWx9e1hPvuJZEU7Y5bfagcJvB8UNZ2mjZ2UFCFEJyFNx1rohLh1KRhfVB",
  "key41": "5enW5qNWNCWhGW75UTuBKqnXqnP4fHDcYePUSueoKTvmVqnzkf8NPwjY6qHqC2Q9KmQPBrEcJFBQZBnDmc1EJ3T",
  "key42": "3tned8HUmrQy92bz3SujnNLv79HqE6js8Zm8PfLHXq1Jt5PVpDfyndke3Bu2GpenM4ukg7Cbbj1RuX4dLivEUxC7",
  "key43": "56qbsareUH1hqLa8RoLwiZsFFUYNPFrMx3SxQUhv2nWgBvRxstAVz2bctkEgNkx3AZEGMUwcjEEeFjSZXsLSuaA1",
  "key44": "5xauSYZCuW3x3Fauo3rfT4CAWQ8dxLRq7axzBeMEAJVfYqyPjTWJZN1jprWY1JEttNvFJWAiqgjSEF4hqPZhCXDA",
  "key45": "2VVai3HELwAc4AjTHcetVQma3bcVo7izLK8kX9fsUX3sKHqZZKfLZHYXmxN2rSZdBu2GLUm4C8czfBDTjYP5VuUS",
  "key46": "2nGC96oJeoD9ritEf8nRHHwVCNZMmbNXcZa56kAzgS74nVfeQ5uwr79euc5TbQYjyrrYMkro2rBHFkFTbsZTc7XV"
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

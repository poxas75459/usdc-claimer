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
    "4P9ixAqjwTHog2CCU8VwNnaxqopdsf2idgnMW2fjzqym5p625QhdjaYtLznQ2bpKwfkDR9siYv5mEidZzjzKnzjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f27D5SeZT4T6saZY7qbPdSsbtFr6N73AwAE9yFZNCjtkweMbBSWoUFUuAJcSKxiVUg4TCz6Tz8cha54pDUzU4LK",
  "key1": "4uHHFBg3dmH21DgVQrJahkL7BBpRKYujFZrWwv6Y8DuooRWuJx62ZJwteHGQk9v3wKAu7r37ugA7yapSiSZQiCQN",
  "key2": "3ehqZdxQ1X86c5jv6Y18NkHqNGMzAMhTAVNK6g67RZcFqWnev2pykWbrP2SMMXS74S9M3MH99TCUdv46XcxxFDQh",
  "key3": "4g9hSumFhCH2tCmNv1kbDWutqLhg4gpujR8WYWDPEuUX8ZLTvrCAkvtdympLXJTu3UY6VLGMyARakVFKFjrtmsUv",
  "key4": "2MhTctbVETSV3JCDVGre5jsAjxPmQbq76n2ZdwYxEBG5FFuPxBAkSiGzhfmh3XTkS21NZSzZRPxaxnHkN4mTb698",
  "key5": "JPYKKMaG6dFTs76TjzPkBneSPF3SgmDAtYJRxYasvA9EyPiVPVyjUcwHFwinQFMRaBa5u3XUSdSzURKVWLS3dky",
  "key6": "45mU1Xdqokrd5BAfWvU3ixhbwb7HuTdW48nvcPsgokJvq3GNEdEhR7a1PDq7ZUyGQXnk28JFPBTsoB9bQqHGRxKY",
  "key7": "Dct41xtSMPsKQ2CiWenWaoZFE5FbiaC6BSHDh3aHZYpELuvEXmw91oA9Ez7y4TgBHvjQS6cu3XqDy3Qd5gLpfYY",
  "key8": "5MPsFEa2prE67Vuro6KEYiTniCoWJVpcXHwfMr4tPc9YrvWLKy5xtomMh7785rg2m4ZjcbVDpFph45wxHHLqFd5H",
  "key9": "2XBb2Z7SfwbJU7QeEzC7WwrPNRhhF3dPW9aR9rTToGcsqjMtyZiTjXAfqNCrwQtiQH9Ujx3ktQGWCGKVzw39uBwz",
  "key10": "3CHWuSLPSmyB8SxgW21npG5V9mkM7VSw58r1dsEwVocSXgajMEdfev7kp7rYwVYp1txQ98CPFL4uTtFDmiymL6D6",
  "key11": "4RwpPLaNcQQDu8kbgzxaeMgET37Lyx3GGuLuAHgd2Aw1TPbkmhKZugtrYwiURadrJbnZU48ApQHmiCk9TzDXbs3h",
  "key12": "3qwPicafW15hk3Pzdvj6mqWvdgaP6AbxP8FZTh8HGcMpuQ3sTeNvSKev9vnzx39fy5m5HamPfAUsaz4R1cFNReCe",
  "key13": "w5RaJRJe52zwzb6q5vPeXPuAGbpCP7HhDJahRChV1ZTzoEbF2rhMmXv9TzoSqwrpHMjVcqCugUWdaA9bgZwv33m",
  "key14": "tfg2jBMe3o8ePNGM5mh1pWvuS1NWHbWXKJ79TXzRHQGV3T9Dz46o372t7bxJUcBg498fgAA9HLF1kVJcFHQevFF",
  "key15": "WcJsSZ76mDZLBPfx9FEuEEMKXBvYST4HKB3Q2H9JXCZoPRhLB7hpuFHwhZdRNt5myGiK4Ghng4rWriRiJgA9wKH",
  "key16": "3sMD7TVkk2kQdLqQSbpY93MgPo9jwktgaH7sdRxV2WK94UwqGbkSQEXmjJKaN1S7YRECo39DFgarAHxQivPoGHUk",
  "key17": "2hFUSk1Qbg2AZLLzMTBcNYo1xNY9W3SsA1Nq388q5d4bMK7gWXNny2VenByQK6yKiKZNsxtSwd5rxjH6eBq8qomn",
  "key18": "5RdATYBmyiKag63F7dSAScak7kWKDa7z4d79DCjDy3K4XGV55oyx38QhjeRLa6pU8X8rpP9Tpboiju2rUGD6FD6Z",
  "key19": "2Pfcbi8VrYCPXeqHrMGCRPLvfDgdhBz2e7w5dqrwHEmcQa7ZjiapFNSmBhoRsWevyhxCfkEGvjZ8fW78j25ggwoz",
  "key20": "4B9YU21qccWrajQjpTTNtwnUAVsNti8SoSJ6BgCLdndAP62LztyksKgiYr5zGBvGnYw9xrxWj9ikEceEEmuN3DQH",
  "key21": "Nj1tiDZFR1jWZcRkrrtGCR82YhqCySabt57AVpiMixfcKJqHgMcgZKpKFp4ere7sKL66nyCcfk995QViimbmD6E",
  "key22": "4zRrLXCmGucAC41W9PTdyErtHVMnX5VRkkXHGSmPgYW8rcbnQKuuMd9E5HXrq9WafLi63W2g2xfo9wLsmk6vpSuj",
  "key23": "fK9mZ6JUW1uKiWDXm8fhCvSHKqM8hifqUeNTcwetmVbKiFVSNQ3aJLgVSWhzirbyg2ckEiGrRRWDfmcsSyQe689",
  "key24": "3hyDwpZvycvRvAoVtoKRnZbG7RM4HBumKM4eDAZWKkPyWZLxpBSs9xbhtoCT1jh4URFafb1put3zvzszHgNhW5th",
  "key25": "239C6zGUwYwmaX93JpbFyEb4R7icyyFW9FgbLixGrMpdno4U6ccbouyQ4an1A1Ad911bLGTCcnipwzD69qzX81FQ",
  "key26": "2hJgsv9WRWKk2ShNSjpSGR92sQe6cTs5oEPPxmj8w8okorkCiZFEHkU5X5MRMqgLgzqq2FLdmbywU3MXqt9Y14Zw",
  "key27": "3xMzmRUSyBn3ByE7e1naYbYDkAwVVEgAaUuZjuDMUpumgGfyPsH9nmpdf59t37KUGf3g4Q3H5cTXeNcZXuaJeDJT",
  "key28": "5WGF7aFWJgmVKKJSswdFk5EEaT6v5GeVnSp5ANFFAKu4y4CfDMT99wnadpzDVTu8pY9s9KRMtH5BT8CD6saURXFV",
  "key29": "4diKuoszkpFnGc6VPSdViF61gYLFo8a32VUi24pFf7CMzRELpsnCkLMN5AarSm2oYFXCaAZJiQb3sDQit9d8ULhC",
  "key30": "FaiohywPMLtfXciTdnK6ZBmkvCMiX7b9QoRU8a8daYHRfZqydDbHxZwJXMLEoGSbBT14jnReo5uiimYjkbedjCc",
  "key31": "5oL5CSHRTkRRpB2dF5rBF2iJbiURxQgSveDEhjoE3p1LWJi6qZzdLcT4SsTYmukCfTE1DQJBbi4SBD2oQ1KZMsKR",
  "key32": "5iLrhRwDENQt6J5Lx8tuX6517oW7fCJsnTwBEnEud5inUQLSJAcJz1ECVrbmCiVdjQCGjvcq6snnLptgHiWtq24s",
  "key33": "3ZP9zujG84xe3Pz9hvJM5DgcPApriBzDXEf8XcRu8EYz1tTNEQfSNKFvbyCvoY5aktA41zkwiUZUFXgEmugJz7d9",
  "key34": "2f1DftSX2hzVN2dExjZk2VtRNVcJQycaMuAAD64fJticHPKvDivFAHWSNqpnjtfWs4dBEjcBWiLgNwnqJqDwPRfc",
  "key35": "6mWZub3xVe9A4LWJBfKpVSpVZKWfBH8G2oboTTezZ9fFTGyPNhA87aHG261pD8EvQxPnFkV996Vi8V4KXZyarEv",
  "key36": "41wicpabX5HLc2bZgjiX96jrtMejszAL3jfwRtnkW7LaXfRgpenc3QKVkdrLdoT1CffX2ho9jYnvun6FB1XR94kS",
  "key37": "4dW3TFGVc6CTfNobKRd9c49ihFsKSURYBVAYHxgLBxCidMAehDfSeJnLAkTYkytLS4FhtDkpXFHqPS6nVbYfG14b",
  "key38": "ngTKSGYxxWY3aELPR3sGD3G3FjfGrHvKPKaspstCnhvkSzbUYgrAjP82VMAsz2k2pAKgUGsB8PuWpidwRyaDwL9",
  "key39": "2t6KaPT2Wbr5TbZoUeP3YzA8ughmysqjJUoR7SHFkjRKZbpyATzTsQYKYwxUF5yG1Uc65xeoR8L4EaRCtAVYii15",
  "key40": "2Vu8kHgtL6VaBm7wieha7iEfM42sh2ErRxuv2rmy5z1A9yuSHuSkp8evDw7xsA5nCG6b9kMJF6y5ur8NFhxxdjE5",
  "key41": "49BVG8Fd13MYU6s1quRSj9BcMiZC5ES22TkTENC79Ezmj1iFSz85oUjDjusR6u8aYZkxCS3VsEcVqaKTUmV8LGMQ",
  "key42": "5CUByhmjvGyX6DCd5cDediB43hf1NrpjbZwS6pqkabMKhRPg6UR2XFr8NQKMQNyiQv1kNLeeSX2NbXrxqWyEWiYH",
  "key43": "5DvQ94aU6kt37HNgHJKtbDqp6MUg2RDzFxX1t9Cp1orMXWgKJp4e2FhhC8hRXK6E7TEYL89QHWTYYVuJKkes9qWr",
  "key44": "3E9VFcXZqzoWjwEMUvyJ5NJwzWFFhYMwaDjyQpA9sKCiK8RfMrpu98Vd8iwudY4tCnHmTJRoUJfUotyNiDgaZQZY",
  "key45": "26bDHMAQEK1Kd5AdbRD4yBvNmPeCvosoJSYdJq1EtyWNFNfGKm8kbw2R8oqxjEVuhWEs67mcRY59YseRKb4WP3Ec"
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

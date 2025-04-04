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
    "5a2dmFxiUzr3T4Nvi2wEZua5RvKK8EcWRaR62RQ8pLiSmnfC4ky2oMr1et4QYNb6XSc5hsi29msUVUXixgYAvQJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WYwoar5trFzSxNjTqctrSFCTMv2fVDTMpNzso3e1xq4jFDRGzJjFD4sC3KADmVxj2GjMjk1aYB2xpMYebqa6FZF",
  "key1": "5gzfB8kUMUNy5bzquJJHa7cxrsvckfwgghLR5ybEoY7SZpHYCL5EYyiuZgJk1g1gP5AcqtQm9uhCr2Pb71WvPQ5N",
  "key2": "5LDRuRQXk1c5S72tnJwnaihpA9VvZzPcEp7gXKuvNeXgyPXDzCLj6s7Y6CwAtN2DY65vyeUmHiDGRvtDoet2ZcGm",
  "key3": "4BidRD72b4ucFwq9VuMyE4xB7WnPsJVhac9Esp9xMVr9Yaradet71M4y6oriwmGe5GGDDYHDKhZCb6WMNbvxY6uz",
  "key4": "52ZjBE5Ah1DX3LXKen27ehC6LooRJ8WLaddkdR6fKTKuyb5qMGz9eyUbb6YmaxCQZEAamAXKWve1nTr7xEQtFSCE",
  "key5": "H7Qa3ypvvf5UqWuv6wfmazWQJ6Bnv1icYDq5TCW7g9XzG94yw97ZFqHMGjv9eoXnrrYQRp4DePNDuwTnRb96TfV",
  "key6": "3XJ93YH6xT23eaPnSTsRmF9cQ7B4WEnDngdF1KRujeGwuFVHbjBujoktKR3D5imYDPtvoqJTr2jkkx3hGATRc6Wz",
  "key7": "jRBqyMcv3kjKfLy1N8gDcr997M79LdyubNPsouAfQibeEHfUN3Xs4ef2NCCpEPNTGpey9Wo51WsrFT4atJnvGQH",
  "key8": "5xdDkbT7WM9pr7uYUcJRAb95xL1q2B5YoCcyKpJkzqsjEBm1eVWJAHhoibgpfJCVte9CsP1G1AG69syJGSkBjZaP",
  "key9": "5jgiw2knStPDZQVUcPYq6pt7hqbX2uAj1uHH85rwRN4haKiCaZDhDSBXwxixybQtRafttKHc1k8rDtkKoGZauESr",
  "key10": "65G4FiVghPMerj4NWYDBMhRwRdVbjPkDci83MP7TSgAHgS8dLb4Tr9dKQAVwc71a2UvHRGcLj2fJwfMexh7joCbf",
  "key11": "4qTVgwqVNyZABm6oyb17CZ36aGRs8QXwSxEwWPdn7pTQQoominbAW9k4AdjQ7XVZ1yRXySN2Qf4LmG1LXQUDZgjj",
  "key12": "4cNRqV31iRuyYi7TQMsxvBAx6DdSvcqnBGweTfisyGSmoTMUpNcVpkz7fuGURZMPSfsXkqCwBAnTWSjYTiZpkGHy",
  "key13": "23vFrqq1UjeR35NL5KE3kxfFCgA94tRELvz3eYWV4ftTfU795eMWFLmrh1wu7pJ4x9rNXMpLgkBUwrzwdLsCsRpL",
  "key14": "yNbKzS1GvMFmfRwirs8xRqRpaUKMnJSzFxCdRGVTx7XfJW18q5YJZbdcsXAN2THwvBn9S13eivt2gKcK6xidgvr",
  "key15": "541CuRPyh9sD1dtvVjFQWC3HJYzujP3SQfAgm7veYHSJUDEok2WV5P3wDQDfJcLRXrrXxc9xRpzmgEvpRmgjDbK2",
  "key16": "3AzHHpVptG5kUYytpbStwveE5oRXYqyHgpUvdFk3bQLR97WAEXUhq5TxvJvzsPGY8Xs67ta2tPWX5d4Q8Vwg69tw",
  "key17": "2B6XAoxs2dYD6HHDwGtypL9fq3MNHV6srvNqkMJ1aWf4YZ8exGbVcg9pAEwxm9WYFn9Qd2dUmSymtEPtmGetjyY8",
  "key18": "aJNXP5jmfmF7eVStZHyYtKs2zV2xRhVtAQxwG3t8ZxcMHevKDyPNba43R4H95RXveN8d1Zc4gHLdMMNPxV8B7L4",
  "key19": "51GY7h1WrkBYkYHqhoGbcNt5AZM6NgNvFxqccpLVsqqXfES5bRAWagfWR7XwRBtNLKegYYkm7fb23mpkkP6ps4ct",
  "key20": "NpJ8Da4AJjDJ8wNR5syVxXTMBZvjCpyiGDCcNVqtxY4ktVu66cYBwujGkr7s7ERjrubdSvGY5AxhHyWYocLvjyw",
  "key21": "2RsLZsCVeZrepsfUk7dqcqFY8UTYbjBw2JizHJqYa9mGtNrdN9UyiK9pezvgDBBh9aViYyP7VUhG12CH8mqVub3u",
  "key22": "5WtUkGQWEB1DX5hWNESA2c7HMT9WSV3KcM1fNfcjCfCUnkBCXrgMGbG1N8cn4m9EWXcrBEzKv48hZp3UXiqiHewd",
  "key23": "5Qw8cmRunQLK9YhshJXjykEYMWf74ZfrLoH1kUB3BsZjX6pMrrvr6EzP6PCcG3Zvqzg8kGzupa14MD1ppsx2CrtV",
  "key24": "pgp3SdxaJ37PNBRzATUvkpj32jdwUQByTtn16dXsXhZk3Zsxkbk76pMzbV5F2a1oKVy9oFWyfYY1WDTnpWnH16v",
  "key25": "2pLFWy7dkghXzfaTk98hhzgeeSJryg78FV226vjyroB1t1y5kfk8Y2zJiZyTCB53iw4jdGt9vub1bGwG9hdCFLUE",
  "key26": "5jvqJrxesMaQ19r6MfRqJUpbMWr4x1yMQMZVhsQw5PXFubV4cWns4rfztXJzdfFnkq7KS67HgWjHsbgwK1rdPF1V",
  "key27": "2TSbAgsmY4vbwPTG1TCUuGEvbxYv6YWFN8oS63CxkYiJtg1eXLMCQsVw9puZ67AmwRCS4DEQirrTDPyzXAT1r94U",
  "key28": "3Td9T6WJD2z4o6nVmYpD5oGioX8nDMUaWo2KZwTfE46F6wQTz7p3fB7hGmM8LXqnrWGqknTdSo9cr9qV6fPpgRUM",
  "key29": "63boPpGAdpRzC58X9pRhjR4maZtPY9gmvEis9TH1bh9wEPgmWJityBPyEPYh5vGDKPpTGDCHyn85ZbgPgUzND1Gc",
  "key30": "3TEj8wkwVwSgeRLLMzBKiEnVDR8XaPwZswvzBv5WmTaEw5qeJqDSHTqEEejfNWJmTzRVnHuaCcZshwRGTQPivXRz",
  "key31": "AGHMAM2PL5zS3zT5PFkwgPDWGtbnmdSXskSC8sSPnXoCfNqLwwdpNPJaUoizDpdjB3nomuc5C4BCjdg4ppCW3NK",
  "key32": "5jTPN7Kkq6F2FBwMcAz6oKYohiJ1R9mpFteuEFGW7BTjAEAkny8jVQEUb7Fv1nz9fx2BLeGB3r2tEyLZsxTqtbgW",
  "key33": "5gqKiun5miTnWUPU2Wd7ASESBsrU35RCmKGEvT1gEhBfZsWakUvEpr2mTzxjoaTKdQewiPFnn4C1EjKU1rbyr9h9",
  "key34": "25Tb91i3ueKf4cFoDbfu8vXKrggjCbLuaLnJY8Hi2Z8iHCDXviueHeaCW2KfNy7TPGkdaZ8YHpthULPV3FSmqbEa",
  "key35": "4UeDAZzSY8qwcrhcN5WZEpLs1ByuHjeMeuHH3SA9yYiR9XY1hCwbMnRnnQUCeAfBXx7phEwTQbSdo38e9ktmS9N4",
  "key36": "48zJnwPQVKBJovTeb53Gobmo5cJ9uUxv6i7uhj2eNks6PzHUQuXDZYgpkMdcDwgddEMqBS1KpiMi11v1CRAfAsj2",
  "key37": "5MMxC7rXUc5zNWaRcJeE1DvWTD5UXJyMu8ScukmDU2WAvZktbsYwHPFTe2Se6uEViD1qcuPSRM3tnYFQYpbEimYA",
  "key38": "4FtS1PbjYD5VPWp13XrdqLJCDiZe4YgHRSRH2TaaXeR9fvCGzBVr6P1mGvUwoViXQXyBEopnaoCYZ1xdunGmPiqF",
  "key39": "kCSB7NwhvXA5cLuCWDz3ojRsCfJbVF8DKFnP3AedyKPufArCWHBroX4MeRZDFqzTvKoWMm4k6SXhkv2y1nPQ4zH",
  "key40": "3S6MdHBiwZ8XTumU3UQEvXX6aeae9sBPvjxrjNx5qTRLxk78sRZBptpeBicicLhgowJaZanq3GQSBu5WY5LFViKd",
  "key41": "5L8f7mUQ8WkHDfHJK24upyRRifyeBYJgmRkvbAArnEHhmAo7Gh2rZpvcZS8ugepcskNn3q51TMereRQcrHrMY94C",
  "key42": "2mGpcWkjRzXPjcS8unMRe8CThZ73RVJrj8G7ApQvvkkDqHC5edb4FgZF2uGXQ6j6XCXLaA2QEuecFhPjfBvBUYLX",
  "key43": "4tWQnLiMQtJgVAR1VAvTEBA54eYvJiFAuwMXRv3bkamm52YjwTwYJHk2HZn1eXZVE3Y6vpzdKN6AFxcRwcxs4uoA",
  "key44": "p1BS4KsUfPNWCG5EkRm81sp7uNVDS4StAiTd9VshtA8nYk9yREsMPQKdFWw2Dw8a4vFNQ6WrZL3zg1b1ZisDX61",
  "key45": "2mPXmGSMEZVjokw3fLTEX76TAyUSWYZgxKmG7361k9mw4N1SJHFCtamTZieX4frGvUMHft2oekopGNASom33Pgpp",
  "key46": "AvZeLobVJGMaCP1PzmSJhpuQXBakUia4VZPzLV1qbufFY9tE9nPPYPmEpaZsqawNHjMm8aeRgZaBDmu5qsm347Y",
  "key47": "2nJDyYBM6TVtiMwNL4R5intykH2ZVY4rCzGJh5JxzZTRwGNeDrYc7SHB4ZTfr7SAPwMpmgLHGxAPsYeqbVBkoDwi",
  "key48": "31vsyCGfPHKp4CoGAvy855ajPUTccSqqiqemjUgaZkLebd94hgrMmxUG9DtiXP7J6wURFnq8zzTFSki3qu25kX8f",
  "key49": "ckF3UNEod3hTMzm4CyH4kwRwX6egU55PVTpzXzX2TCTrYBzPeQg9SKPVBE1aW3mJXcZkxWrMtHFWxmKNEnWojMS"
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

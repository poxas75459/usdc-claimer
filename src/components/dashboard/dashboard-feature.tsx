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
    "4q2dBpi7DiggvSX1QERK25DbNiJqTtwLPXo9mV4UJjJekz4ep4v5Pw84fu5xe8i3E5qEM4Q7Bdfb3UWm1AkqR2rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9TRkKXiawmYTKA6Fuc4PtzVhrcSqyg22eVNmrAtBNpVDEBUSnYtL1Rh1hn7vMYf9hChcXpmHLRVFNTqdkgoYwsK",
  "key1": "4P6ACCSBTHBgpxXvRAq8vK6cDbFwK2rDhXJAKHG8GsgDgq4FFhbtgJgjM2PxZ5NzRunLo4g462oBZtZwwsotVoTY",
  "key2": "n8NjEXrwPKGWLtGui1nUsbZNwNbQSBH3JhiymjZ2ncqRACPZSJxHfJVLBVNDpKZhat6xGXZiPU3DV58ZPMyCXbB",
  "key3": "5ErtoRvuEvRFpCmMd6ywiegidJB7VMRfgTJFEN2XL9LVrmVP86HyHuKZUodt8kMhxuKBWgNNqkjF9Jdd7hfYUNh",
  "key4": "LdjbNEZCEeaS9551FD5dd5EiWXKPaZLq9NpwTwfLJ5fzde1yCXiWcpvaHuDSZ96FQxnFWZYdBmVe4KPQdjaGGSG",
  "key5": "598GJnQuDZHZjsSHLYk2vGFsdyEYiYK3d9CqL25kKzkFeGVaUDYTSHxZmxZn3WZt1f1ZtG9awKMCwtBA59sgdp2",
  "key6": "5G2bMiwwYb3z6BQvjvScx2b83p3d6A4fS8KS1BqcGo1FrBKc2mKXS5VRLWSbxKvcqnxcbAwUHNx2SGSToQKAtcyd",
  "key7": "5mALGL5MeUdXm9NYodozi5QdWENjip9CTdvuaMNDZiRKswqArxgEBss956wySt5kqyjdY9XNRzw2UnFSxhfhViW2",
  "key8": "k89kWPZoXWyXpz2JWMJ93xiL9ikXoyQdLqb7ZDx8k7VtnCeybNAJ45rKoN9d9pHpzxJcjfH8Sooi9wGPoJhzhwx",
  "key9": "DwsiayJAFY3YqbG5pGMc2kZsXGSmiu7qvBgnQ4HvtKaSmTqtVkmhFVRtfa8rNVXszHWY16N85Q7Qo3iubo2poxZ",
  "key10": "2nWdH7w7wNfiHeeVdbEr9mr6GGsn3jYPW2Z6yM6E31gDQr9quryAwbAJ5PYvARLoTckzhzEuTPrERe2VGHd7LD2b",
  "key11": "5ok61f3KBjc7RP7JcwcAmvXukJH5N3bxEQuRFUrhnA1mmHQPR3bTrgvvfER3jKE1gJqgNuHeATK1QvSf8RrrAxDf",
  "key12": "4m2TSS7zCxayxhQD3P7heUAvQSEJVeSEUgbfMmKX4S9M11T1wryM3o4w7ii5f9whZKbL7HVE5f8QcvLezhZ2ETRD",
  "key13": "3Pt5szVKPKt92AcbGhWr4Fs7aQHsrWReqKS7zfUPqm7JKdgKpNyW2GwxdN6PYKd4Ke1KUQyzNSS8b1udFmAWbrZE",
  "key14": "47qvzYcKfLNy939cEWcEyRTqoriAxGG1ZTXDbddHWC9rgQfmJmVJTdu61h7BpMJoguTvhbSeyPu4WG1v75YnBcfJ",
  "key15": "22c4d8VPez1SLyCfxQ91sDi37HCuXnP9dEVgKTCHAYDu9qLU3BXvrgck75WVYfMoR6hGpEXnW46mBNjkhMN2MfpM",
  "key16": "VeriJy39b8hAuW7ZuCD2kZ4Sf8mn69hMkqVD3YXbqSg4ikaJRkrg1kk3rGBqTjxbZkB5hyW7zhqVMTXmva52CQB",
  "key17": "5f5WnBMGEzTCMVQVDMAxTH6PPeQJfXzazoqYbjfmCQxVFT8oL2XXfF5k6yEYWJicc1nrrzyc56dr2fsTW1CsT9Nk",
  "key18": "2SDidswRHx1Ty8YoiwrnE4hvrb6uoFyXVuBZogUzjjnZ1F9B6V4DvivGD13Tzu4FCcagt93VZKwVsLDK6fkPMbtY",
  "key19": "49A6qdXKUVAacNiyNK7cJwWXGrogrwh1tVTUuf4Csxo5JuHx7TtFNTGFkoe6sSDenXdPmDQNDXfE98sM1Gd2ALQy",
  "key20": "1vbuBxUVCp2FFF3UQVVycXPm6hsGAijamUgwQA4f3YEAA2WccUJrbjFhEezWFiR3SQtNtUVg92adfxVWQQBT3YF",
  "key21": "3HyuQk4CjDweDAsSW792jNJF8aXMG5UoEoZMi26L9Ep9A35aie9Z225wgGAg3WJ7P9awq4RqjUojrcgqxVaryiw2",
  "key22": "2uDfWdWkwYPRTdd46oqqhoVJ68Ywngcydi7Zyx5q3mrxLiqxBfxmYBUftLJJ5WHZKaMgdpnS6QNFggZNSq8NT3J5",
  "key23": "56zhFZW1uTRosvSfJhwHWafj4JAZHoQt4eXNuVzxFF6r1oyVmHaxax8orYr7H9v8X4WUNs43EYopeAPEroMJ1jjL",
  "key24": "5Bc1WK5MYHSGjnmXiEeMZL586fwLG9FnvceFLB9JWE8ajxFQJ8EfupP7DH7GpjbyLd8uwZch3Lf57oUVr6xF6meM",
  "key25": "yqLdPncLRvBi6TZVjCbzirJodU3F2drSJ1LQquD7SFcvN2tGfw2c77fq4QmJxfJHxDFN567WaN3UQ6TdLx14vAJ",
  "key26": "qdaVJ15y5XoTxvKfKFZSttFmGoSbtqSm2jFHxRb4SwGFjtFaYzJgdcQV1G1YHtHWezqFAgnK5AcM4n6sg5fu9QA",
  "key27": "2gQRCDUX6XW8hD2EjDkrn2Ur7miDRTGiiuvReEazQhxWU4xeDf2ZAuFfxpwKjzk8kUSFb3KA9Jjer3vRJScm7nGy",
  "key28": "2FjFALQxBonAyzNUV8TfitaMZYsviukbBDfQGNjawnMwciyzRU82AYgG8tArzzJfWdgxcaiCYuXZYnrauVCThJLN",
  "key29": "4qZ2FekzbrMGB61SU39oqVot33Hj8mgE3o4ywWgCuWFXHC5ogvJ58S2NAwQ1n8QjMXnEGHoESbQp2rzxWAMViqTp",
  "key30": "dsXy9BNRz1ErWg9gxdE1roCWfTKhS9HqfoaArQeRnEE4fhioyEkx3WUQ5nCSBZFVvAbaSBsTwhoWd9UsAZFdTZh",
  "key31": "2R763BB26tq3hSueMPN8K4oL4JFkpF3ai4zU8MKCH5oDnv53euw865ksAYgf45PY6FMwEaYCzNZzzH5Lwfq9LCj6",
  "key32": "5WKhnJ7evomwkDCPS3Y26e4FVFGCZZBJRhLYwKCAc6Py6CeAc9P4JdjUBk8DPbGvuqLwZsKupQrApFcH5iuiRoFL",
  "key33": "CjtpwJZ62pkUbHB5ndBh5PdeitKGeXzmAxtzqk87y5uyck7fbDrmA35pcM79tdXKynLfe8DFtabCqGuD1Pu4hth",
  "key34": "4NVV8p2VFGB3PtWiHiz1Qvgszg7PBsn9aeaxc8gF1iCbtrorb8Zzs5cChE41zDdGSkpBsjT3TQhyMMSKaLVeimzw",
  "key35": "2S7g3uwgcQGoSukjthBmcwPtF8Tm7jWnhzVhJ64pV73Y5pimASgaqX3XZ1RfFmFkEge1YibUV1tN4dbH5LjM5pvd",
  "key36": "5kfBH8kjvG2WsDybjGewWiDUZQVbV5Bz3fLF3Ux332ULSP21xPAd2hcPqfwgvBnQdXToLCzuH8sfgGjMn8KzQuMk",
  "key37": "5dhMH2E9mcRKUtM5QG36NX7PCmxzL9w6Rd12hfq2LCptsGh1EUSytoYeCzAqm9KNfFmjapj14YgrmcfRbDZTqmc6",
  "key38": "5paCijZUYTtM1DWfywwrXPuNH5BqeGCvtrDLXzE28kvuK5GqvN8e2nyKrHJU9wRNs8tHfrQMvggbGT5GBysKxLo5",
  "key39": "3kH1tpMNUUwHhVmgZqBXDotkpnhwQ7eUSg9EVbWwrwbVqq1tMZcoJzXjHzRxbkskpMoqxKacuQkdgkC9ZJykLEKv",
  "key40": "3TzTn3jLFu5dFq7nDnPK8tt4XQaYX81MTrFsdkkHFgGxoSdRr61kikYJwCW8LT1R4vfwWm7e72XiVdQ2b2mfnXYw",
  "key41": "5rHzWYQQ1U4aymYSLAeq6a893hpb6bmohzwaobuHnk12iuVQ5Lb4XJFT1o1dyzLGZvV2Hiq2rhcsWFRQZgriE7UM",
  "key42": "5tP5jtSQ4a1qipMAeu1Fs6CAbqWQHx8mgW3p9ZcYoVrHQh1RurUYX4mJGro9Qi2LJqJoPBDeiHTFzmiz7kvoD2A5"
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

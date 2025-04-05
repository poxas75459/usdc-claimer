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
    "eLFvSUudiPGiB6HYCvywZV3sretZVWLNPCVm8WWCLTRqq78XUNCcbjqNBpYfknSrfK6SKXWp5M9hCse2sgnpHsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48UFFcFEsipwSbLUJfiMRvcDCeQu3nYWPuWBndNstEQf1rTaXWtEALyNv8qfa2HN4rnWsNujD5ny27oCLmk2UT35",
  "key1": "25hei29f32RoZ1dmtGuheRoUHY1V42P7uvJMrVk27Zmz7bVW91yzX8qezWT1LntJgr6AZnaze4dM7CkYYCd9GL38",
  "key2": "pygmz7wbsmQVzBuaf62JBSpyWnCPkGgV1W5ABxiHssyuUjZBWcgdCW4VsmGWYJ91K4j8DaBiYotVZVu78P7yrqi",
  "key3": "3RLu4RksHrNMGoNQtfsW8VuvsVdZCpMGfFBaKgcon1f3APMBXJTTSHGyefRAidUnZwrcGuXTADU6hobuS2H9cNHY",
  "key4": "4cnKTLDo42XUDtvXZq14CFqHbJe1W8BjdUHfQVLUQcfCX9wt1MGYsBajLu1AUDh9g5aMFwnJsTPiYRRBWZsR8d1v",
  "key5": "226v6zvbPJo1fJ4frFy629bevN8qZVAChUYwuY72cqyzuYWSq3nV6JscicWudDtCz1AszeH5mBJpXQJEM8tq6zhN",
  "key6": "36D1NCM5uSSGL2AaV5niKKeSb77UBAAnr849nJ9qm1RVdx7DKHGSm18uvgmUZrrpjnHRX1Yj6WnxSk4hNUHVV1dZ",
  "key7": "2UV4bn4iRFFh1j97rG3renr2bdsxyPzFhFqddPNpDacb4pxVYuprx23vyiqQSd5M7Jk4xz2Wo7AZ1pKeBDCmLeGm",
  "key8": "5fnhr7Wmc9NaBta4Ab8qHJYjCB3Kb4QWGMkeHWK1Zacr1y58vMDPKzuzXXRMipYrCq9XBg32aByejwPWUnypsHZt",
  "key9": "mnwVHxxphYsK1LPmdcV9qke5jBtujaYV3EEAN1GxoWzZZQzkRPRMqc4egbo1RcP1jj1BoJygDgWMjJ8AbEZqh2t",
  "key10": "2LAHwtKfhnNruYEySZP36Gz2avBLXKDtaUUXPrTFwBAVjwVYE7JbDQk4QumLuD8ukTCt4RwczHyGZi8Cpt3L53Y3",
  "key11": "2pEJdjCXYXu7soWhTZY6HVLjkoHYpovhs8BHubzadZvRZ1CW28NZLT4q1Uvz872hZ8fLsvTM84Pcgo75P69rXcyo",
  "key12": "3UjSdvzA1GRopSsbq8Q8rkFmhoDxYLzkHfA4GzTxC1qhNbEvtMVWtAYfyh6M4KPi7TM449daJ2HcQhkcB8AbUUs8",
  "key13": "3x9X5dJm2GFiQvcYTg9aGvkHA338VmYU72Kb8GDpkp1CmjxaNRa5GGcB2cCEuYBCFNsJncTu7RsgoA7tGheB6xYK",
  "key14": "qj2H61ynj923Q1SGKv4Ry63RN56BVT3YLz32bKXW8YYiS2ks7boiG3b2ibfBxVGXur3TW9FtSdGc6oBrhAhUHRb",
  "key15": "2tAxxKDmRi2q8CVep1ttVchef6VZrZEvj7hX5PF21Z8tAAF3G6iFYDb1GRtxCPrZhctnopvWsH9rtES624PoNkur",
  "key16": "4BRGcqQ7dZe3VzWJg6zrhQu6Q4bwHwuGejv4thfkdfPskoiXx726h1D3nGj7TT6Tkg7xnBFk7kiyPhnaxD6DF4K2",
  "key17": "63KJZ3iRUyN3YYq6kE7wJ577XtKDHDhW93Hvd57A5QoanVoYbLJkJupKQ8fnESZZmRmar3TGFm95SxNfN757Y7RK",
  "key18": "3f1cTNa59pkyebpHfBEbc58L9XeUubo4EoJjdQZ2em7ZztS7BWJt8JUnPuLPks3pwq4rkd2im8jUhD4cBQqBjLXX",
  "key19": "3pXUtfCiuVHEReU6U3dXRp8J37noeTyzPa2oLiYLHMdnj3TRHLLtrf3nsYZdrpsoPdG7mhyrtmbjjfstsFqDm1CB",
  "key20": "2Ac1sFfXiSxoZm8K3YWfkzFwS53qjyv8s2jW3A1bzoDTrfjRsCsh8DcN74D3NS17WobMneSHjndejDDoXTq1469g",
  "key21": "3PVRTuQTAF1k8F1i2ndiUBuu1hVt3A4ZuscrN6wcs5CQpGkgQaRcvwN6D1JgoqejH3rWNwtR7MHcLb2jmeicJgFB",
  "key22": "hp7Goc7v3Hpc2B5S2BFBg5f6wfuwf9Y7TvAbkAcpV4CUCtbXDcbE7Jz5Dm39JWWCG4ceaRp9KvxirSNxHKZhoYR",
  "key23": "KTYtTKg73kJzbxrWusp2DtrGysFJKdbfdJz2rHoE9u7sjCdTMgN6q7qHteDBYQWmJE17zNNau2GAcMGj5V8i7JX",
  "key24": "hJDna4G1umoNhXdznjP5qoejDqaYbyAZPSUihmsBpH3JpQ2YwAunDhYWafja3AvdQDpoxhto6nC14hTznQjNFoz",
  "key25": "3uEaMR9g7PMigrkR82ZWe9BbdFvguQNtQqzVqUp4GLvXjU6vckDUDkiWsrkGLxt88Jg8aqeTNVhjcBfVNuXFqdQe",
  "key26": "3s9HntPU5tCBtbZTNfWHhGvDqWYZATTDwLamZZwL1Ng55et5on916v6QY6vuNuddeBVtv6RvbFU6ACz6AxBoGYav",
  "key27": "5YrtvALKRHG5UKmsJJyjQrxGfGzaXa5CftuE7o9azfayKvH6RCC3kjkkuUhRpXmBPp7ep9pzVTXFMBhxft7kBojx",
  "key28": "3UGk2QcR6n6dPjPchnMULBRkbE7C8fisYNdDfoiJ7mTD2Bc5Mck2MDt8jPRYQczj9AaGDSj9QZZvPpRrVYNFpRJW",
  "key29": "2pa2SzVixBWex4QRH4zT1KmNpSftfwjBBBzzub4tPjkteDLjQQ6BUi1SvvL89stwpUPLewdLgu2zHk9zBCZRL4pN",
  "key30": "5ShV43FhXwkPtWmSsDSq92PHCv1XKXDdTMMuUGM6ATS8eKRk2hunteuK97VHk1u7pYMQn9rRPc4AxpLE8CNjTsg7",
  "key31": "36LVatEHsXByE4Nk3yFk4Ummu6pvwqf6qvVQqiRpxHPNrfc198s6yCza9Gq23ZgJB2TnTbvSs67y8Uig3R77rJL7",
  "key32": "3qZWFgX2kf8sTaUrDEaa9LZrEr2Jqvu32dd6b4bX7udYtMASiK1keJArRaH3z1vcftDMEz4TeGK2dqyDSiNBbzTr",
  "key33": "4Z3UZqEhDuFJSu8kZJeDHEoHvci4vEFpmAYvCPJsuxNNhW55DcbQM1vodsWChocmqgLnxnw8PksjGmA5tgfnc1RC",
  "key34": "5zAxHJNd9UZvG7QYXZSEbzWsV3x6JywR5qzoZMFf2DTyCr11y173KECu9XqvjUqFqFYG7rumnM4uTcPPMo32zpCx",
  "key35": "2qW1Eric7kJvXfZSdHDApUKVKk6uZBSk7m9UaVaT2Y3SFnLKPoEzBVyrukiVhv2xBX6sT1DvNdXkc3wSaaR2CfEg",
  "key36": "hXgzCiXoZJTi1jgniYFC4Y5sw88PZo33uT6XkiWZfE8dqyQ34aarKG72wKsPPB38EAcPAc5uK1V4eYg3b3sy7WN"
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

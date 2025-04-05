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
    "59bRMwiXgAhhDeV28DENZdoFNqfdK1VhNnqSjwocuXYcyHhfDNghSrhmrTPexLgo366iYPN8TCNg3eYtacvd6FCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39ihEQKqfcB2PTMnT5WBMfV4w2r6BT7c69aQpEVULeZvWzuQ2xEEbNva6A4fcxVRcnj1us7wEfSZwyoxpCx8KfCs",
  "key1": "3LqgmKYwzZf8qnRYCpLLnc8omjVkynpnmf4qJwUMFALzHRF99UgjCLD4irckpj53yurxcv2Za9sEFAUGUmi2c6kY",
  "key2": "5trNh9cUZxxomqyB5mjgJVJicpmykdkasZCxbfR3yiz1fpZCNzksDMwubZRZ6uLLVAjLNup77qmVh9b77PoTpGSW",
  "key3": "5dCvSTtFmDGZVXD7FSjduqx66BPyxJUwJtGZai6qw77u1favh5PJVNwzNp5PunX4JwwijD6mujBvQxDTHxkcPFfi",
  "key4": "sMWVvAoEaPPUSYXK8bj6RZo5ABUfsU3b95FbsNCXwg9swjG6yrxyG2BcDWBmbuCEBVakep5Zw2JR5nxZPebgan7",
  "key5": "64h2YAeAgqzGJ27bTdYr2ywXkdbcWibgWRBZAf2r1SB9hLsuDxKecSD5CwrJJ2BcXMNV641RgJAi7AWA6jY6ZYpn",
  "key6": "3vRJ6MBrRiaYmpWM5zvryrRSoHZ3UJxdctZguGVS6CWLZbDiz4hmCpPcm6ZqjhG6gfKex7p6Z6LRMmCAxRGyQB8J",
  "key7": "5LabJCtzsaDkRyxqdsHBEPsvji3oBUgxiXDYQMmHH1UBo1Nb4cFYVGFCbkwakDJvhSRzX3nNW6z2wFMjttqcwriT",
  "key8": "5qSiFNLD2ben8jnAU6K3eZK6u5n5yDMdpYKqaDE44VRMKXgTE6EfBQdZ7ggYUJpdfxbd1SdhU9xH5iv2B5K9eCvn",
  "key9": "2PuHuwdk5gcDx7octzbTNcCnrefyDWa5FZajyRFj2XgbVUuUGqZwazfjdqiyoJGcCNe8DqktLr8GZDWTJEmmiNC5",
  "key10": "43Vgvy7LFnNSK1UiTLtzUEHokhkGXs9WhermWhkXagYLgxfWVuZ69bLSZUttgALe6VTp3xAzMwQ7PYDdRsuoyFdL",
  "key11": "kSoi2GqwGb8K6Ybt2XGC82a7dQkFeBrU4ALYyzpguq1jHwMwyZdU74qhnN5ChfqPvxWvPFNnXTCkLg7vXvqDiZy",
  "key12": "4VfQhKtXYnQctKZM1Tvv4J4fCD4dC1PeKsVhQaze9EWrhR4smgeU5LmNc24ddJKj1jsr9HuhzG4v2kzAuW34YQYb",
  "key13": "81Y8e1bWtDbMqLLLPenYjyJanXN8JZuw8MFwAq2fN7mDBaHaf39KHjnRHzVFa1AoH9DC3UvijmG8LEfcXGdmMUA",
  "key14": "3ykgQosLERAhAHfgJ16BU8EZmJZdwuRBSzb4DQVSdG78f7zhpT2T6k8u4gvMPkp6xTjhJbPKaH8sfNn1wD4CavD4",
  "key15": "3RYzBGXCADpBk9A7GcumEAowSGMj4ZG3HoRbLQ1SyNmRQE7KThUcACEMugPUJ3j9GUsiPc8mttkWJUQheZSzgN96",
  "key16": "2vjD1UpF7gxrtcPodm1GFEiHjof22iKbbA3E6Ry8SUC4hvpaKPohJ9MJpgP852jzaxxHhhBHzpJRPWui89rcfdcx",
  "key17": "4RhF2ngFtJwVNW5scz1E8WD3UTFiiabSB57Ts75zenxtkQuDJU9T3p1XtTeRW5QQjnmfTvDtPHMmrLn1ytbgAZXh",
  "key18": "5p3Gb1yBjVCg25Wj3oeTGrCbWV54bt1mgx2vHhNG1ByH6wXbjZJbFjUvCR8wa8NbuXRXqm3z4XnrMeGLZgCFpsy",
  "key19": "5JzsQDcfNQ9yNSgJL4dixQPpSHYMnfS8bHNzxSxPqaGPR5dvGZJhRtmj2mAPn6WR1aM2TEPQMBSAAc54uNsrtiYY",
  "key20": "3KacBm4krqgMzusgWxZCqmFB48ruexVa6fWLCP3i9TzSzLUHAZHWAouNxo6PbEwC46ZijRpoGkSQMPCVxf26meEF",
  "key21": "wBtuwUsNvPSWe4WyGsaLF3FVF1qtcsaSKtZ8QHCs4Nh4FSP5CoUs1VLcsgha3UqH1wNH9gtsZCES7a4R9ArzT6N",
  "key22": "4pPZn9biwCDeziih5BZnmbSG9Dk8kxTw2qusVc8isUdTJFZin1oQxAKcss8a7ZYZ6xYeuxDbj6BTbxBHSX7JEV6U",
  "key23": "5aoK7vvZQ8YHtEBjLq7kw9eHAQseAjPzNjfDYUYvuYcWWT66YvbdY7sWZzVqf9ZuABTGw8Jw4gjiT87UdyR6hY7o",
  "key24": "27JFJuGn2CrX9qW5sVJ65fLekBUiT8mcDFzacfqqTVPzw57aeNsqznrSquZ6B6z8aU7mN9HzH4JrgzoYA5y1TfrV",
  "key25": "5RpuWdWDJTmcewmUS4qMfMBcm8JNjATc2pnnUCMexrNoJ61Q96UKKUzM1QdvHGFiJBr58c45TfAjUu5cywZU11AG",
  "key26": "AHzaMCejJsKWcDT6dRtnHAiUTaCyN9HkzLEiuSMdYnup3U36Wx2mYrN9LRd9QoZWj5VTKS9bU28YorqJke6qyFQ",
  "key27": "S6yZcCAf8apYAuYLHVuDSd8MWqZwRaFojtifb1LSaFEe8zfFgttFYjRUyXAy2XGHV9JnQwxYAM7HUap77jcPc67",
  "key28": "5eFci9kt812JywSmxyQ6TbpT8Yig3bjrJuxbzwV1v1TZYg97uDvpYMcR421nsBENadz9z96EnsBqd2HDdFKQJ5Gq",
  "key29": "52VZZp8efrjhoBiKRDwcetvLBezCDBXcGmLfwprW3LqUMnU5eZ7qp2NoGQ2M12BYxpj7xBdidyoh9yXpcA4NzSZL",
  "key30": "5LAYdDLLaLq6kWKViZHAWHaW7HiES82CxcgxfsS8sJrYUxiTMwaxMHPSe95NNTURaTq8pnkFMorxzRZCv5VXBQ6R",
  "key31": "2oNQjpmvHyDZzwrLxGXBF82UDat8GokiLApYk6QWh9dvT4dg4bqm4qneq2AJFnjz4VgzjVE17Pvspa9hDjDhrqs6",
  "key32": "3mFaRbhaMRA9ZVsmcfoRdipCWBqhmPuAaufbd7TgwuqHJCapJUs7fzv3MQaecRJAQBhRfcHESwzC3DJD5nzBm9BY",
  "key33": "5JZHbaeGqMUrDC9qq4gsDVRLJSoXgxLRisRGddbv5mC9Ej9U4zKMwTxA5fGXAiXexrSuLh1SkPGLbd2u9AbCuv6C",
  "key34": "9KtJ5R5LMdTHcGzQUAg4HcRmcEjkF5qbSs74bajP3VDdws1RzTfmUcTT7z7kJtnfQa2bkRxqc6upP8LqvvgbgEe",
  "key35": "37ayxm66sSuh11SPgiL94G97oYCnJJHuG6s4v5PXbKTkXj96fMgJcnPTHHLEZ42eeogQoJfXeBxshGMoFGeFRHpt",
  "key36": "53hXCk4r8D5E9VPQ5SR7zfBG55WS8JoHKXDLLTLAEUuUeEm3dK94Xh7PLwWGjkGHQPC8zBjZP8BLMYpseXkZ5jky",
  "key37": "5xMa8nbvijKJ7UxhDV6tz23xWLvbSbY2MyHvJhbP4wx5AfD4dStnTWZpaejPzhKUJ6rZ7R1a7i5jHKsDaj64RfQd",
  "key38": "3zyJ6FcZ6TXDV7t1Kg9TBAUmdE3wMXweyNFcEcj1P5ktd4NWnfcvHztgkUWbozVnpxHMQ2SAbE3r2WJ3keT6jLy3",
  "key39": "35Dh7mpeANtjuBZ9VJ6SZyc6Nsz1qHXkkqnR2FUqHDn23BWFHADD6qbHSgwwhJH1ppWN8AjzAcKB1XmdcUDA7NAg",
  "key40": "4bsiGQAQnwsMTa34hAhu6H6z5Girx5xDfgjKY6cyv2EjeWAPmUx7ecNdRHRqfiY3zU3fT35xgipWGdHuiGzt8eUK",
  "key41": "3ZQ4kydRAM9hQpF1K7nZHvbJLXkN9czaaStX6Zqrq73itYL1xqAxtoWDm4VpYyTBTc4Aby3gi2V49cUj6pDkDbXx",
  "key42": "4JzXpg9kvj8fwi38VYVeSRctphbJGfASJMar963hzpTVQbXo3LniKbhTSw9CELAHpCt3bcHXi1XNVjFYhi23W4JD",
  "key43": "53pXrP31uSDxGGHHwcCFPg6i2Yp64hrF8Hmuu6DHCK9krTw5VYJEDAZoe4zJubdveKjgUq1PP26X2EuRTmTYXTy6",
  "key44": "2sg7MiydJtYUuSjGZHUuPtzi6u3CTKH1M7rNT9tKAYoaaruwKrvFqQgJoUb34n3oYNRcEaD27yMMA3D2Wjm791Q8",
  "key45": "33sdqbNrAAXYUvLxPaiZZ7QyVS2b1pZSyGKaW1F6js6hRuLCtnU8JPZLmhcJqsvvDndbvahK51uQ2JoJsQv65rTd",
  "key46": "469mT13LpWFCJeXYQmEsEytXrrtHRM5MQMSQ6tuDPqjxh2c6tpRLLA9VX5RQ7qvDxGe36MgtX5Vwo5hyJAFPmtM3",
  "key47": "2RyFpQGRj894YuDFdfToEDECPmvcrpwDQB3R6eau9n3Bp5464M2BeBTyDYsysRoBN8QF5BxD6XzjhCTQUXmGzQjZ",
  "key48": "2nqMzya5wxMSqjNPdG98vnF25qvKWBznAonZFxgs6uvc9PPE1b3om5xqy6E5SRkfk4joDiex8CEQsWNYgrC9sjW2",
  "key49": "egMNu1baRS2cZhYLP1kZTrzwtL2Vkvi9gwqF6myVuZZyeTa7xM6o1upP1MQxVhFz5pzHsktFEMxFxKrq5jf91dA"
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

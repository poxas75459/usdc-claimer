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
    "5Gj5UdK3aB4fuk4MdSX2NAXXgesTxhgsLA7jsca1qXP6cDkRx7CQUK7JtKDCAfFRbVhfTQ1pzkCPXC1aeJowM8BB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRtic73Y9VYUEKEUQdk8EjHQ9TRmZSeSJoK1zXKjAfxxoSDeSUvwsfKyRVqfNarfvEcBvr4KtbVrT4PaQWieQfN",
  "key1": "53bk5XZEQYwk5UNb1gZAidHc9T8Yn39H4LmQwCFSnJYpWsatza9hLizK16eFh3XxpasMJ2ZkRQncFB1GmFpbS1pf",
  "key2": "c6rdqom1TS63os9yMqEyhbmuK2hpPbtMD25XpbCpjoPdaZSTk2LjmHr5Edz2HmzQDKwiksyehS4Jn6qfLjvpoYV",
  "key3": "1h6WwWumFDZRBwQJctBvAWM4WF9jFBsVNgMw9AiWFDMRRXj99dygzkrr6cpm2DJgF9BRjbgZeGgWybdup5n9PT1",
  "key4": "5392BpLRX6WP69JMBNM1ua1oSw68kEWdi3bRf9Z4XvTw9aSvL8UqeJCvgUHGzvNzxiBP7viJrT7ta1EZEucMWcHs",
  "key5": "4uV76pfxVqtGstNmsk9PVaNEghgacizr7uYhwX5T8k6xsFuu1aTJ2ELvoMkVXQiRKRKQBV36cXoUMEwTjAcpVGCS",
  "key6": "2h2iWW5A7XmmwBbdU6TBg3KbJB6vdCVNWFTamJfSeqe4moMTJStE8SE8BNkZdXEyeSSPmpireN48Hvbz2DEfSiJV",
  "key7": "38JgFRVNGkZGQEqMkFrM1BnMubKK2gyAWva9rNMWcLeWnFBLQajpu6keVtPqKT5dfyPKC9HPsE2UTnLvroMvLibT",
  "key8": "4NVrdPrdRjjHQJ9wKBynxUcbogM1JKB7DmTQnoqaSLrUH7giALAwMSbPgj2x5akJ6TPnGyHKxAad3Zo3sQYjp1mR",
  "key9": "26WrBLPUAYaGntMS8L95divnPfve21FX8r3Pj5NKE3YGC8Rmh2SBzZLmw3LvjiLH4kKr3pb3scJGyrukV8AXVMMS",
  "key10": "37yDJcAiPiubtE6xwxkySSyf8NBNGQQ8X2Fd4EEdS661V7NBieY5T87MYVgDR5TafNXFmpCmLyQTN1qQWf5Sebov",
  "key11": "2LYqbbY4AZjNfKW2WgdLXMswz4syWVP9WMuHWnz4qQskxfVTj3VVbj5MKWRwH1z57kiyLzmh7fsF1w8vSkNCfULJ",
  "key12": "5L2Fv5zU6PvHVsiCvEfLqaAefTWMgCWzXDCvUVHGA1wq7hRdcEmqgvf5iCeESPMSTE9fHyrgBQcSxyyZSmUS9zVv",
  "key13": "nLZ2CSD2jeLxTy8hSr8Xt7qrDjvMQzvsB4Sh7Yp2fymYQLPNu7xBfmEtrZHFf3KSQ5Dawse59PwGSosSfrqEPbh",
  "key14": "622ufBNLxAUMVqeETjyr8DrtQPjp45gLfEZfHErjAmzacET6z7jhaqFcc9hj3UgMrANzoD5RakaK9BBoKfPJw3BX",
  "key15": "4sGR131WksrNjFqc9sgpdW4VhRpWxJzuBB261FFfRyFZ1SEMYRd77G4petqVCVC1DdwDuSnknKB2fqRje3ZYqLei",
  "key16": "29c858dijQjoCEbqrYonqbjtV9Lb3E7CVnD5H84a4rB8jwiCpGxRAfBKwu45P2uMiHkwqLUGWCAjgkWSGDtiVKKC",
  "key17": "3QKnWYDjHhb68VjtTTgqe3SZZyAQ8TMRSvRSxzMvjaAYFqF7du6rkFM5PFBBr1MuCK8KKFP3HUVwZ2i72uJDZqhv",
  "key18": "3i3x6o3PK419o7yv4Zyn8wuid6XnrbABAKsgpiGKhxcRQs6uFy45oLQRuvu5hTa9qbs7nmcojrKpft8YPV35x4dg",
  "key19": "3cm5rVD6DWsoXXssJeAB3XVmqh1Bfw5inog82RPcPW7SyqnZybtFjBP6DQxnTJkLhuTR5W3qR8GXnRh2cPuYMiSE",
  "key20": "2Snd3v9TjvXH43jqaFcapvuduJ7oa6i4WHFnnvXDGMQWX8dWTh54EEtTcagttKHgUaXE6tKmGpvE9B2oPAbinN4B",
  "key21": "4W8qWLKiPQDaFcd7fQKn13UVbpR5QE5x1TiEpy7XCGPnuThXTGTidt6Z8LF2uyyaHw26yMvSKotTrTCgYUpSfFJj",
  "key22": "3uk6TeVw1oDTFuUFe9YsRYdwsJoiJe6b7opedZVfXSA2kUJp11C4V6r1ojexY63kncNZoH7fSa1XUDhwdpLC8e28",
  "key23": "5AGNinVa9kEjod5nmXNHRAyxXQxLZzFzorPb7VfLRq5VrrxtChytxMyFqiLZnb9rpmaLE5YpQY3PMwz3f7psnBs1",
  "key24": "5fURUiWtBHEj1on7K7XD3SLeKQjySkGL55dNEEakbL9rUNHA1SgQfLjbVUehRdJKsxJRbZ69PFqVqg71rtfxyTvT",
  "key25": "3aveqQN5tiM1BAXUod8X6CE524mw2riwxPbj5Mhv59XUXqXHLUejzHYK54iNQMCvP2bSiStgsmb8r3MLBWHum9s4",
  "key26": "2mQoGMGQHfpmr6b1v5nsyTDGFivH2nQNrAe4qe47LMrifgm1XY2LEWSuoz8eS1MCSuGRzKCAWNiN8srY5g1jduFj",
  "key27": "5r8JQBVtqVBmNBMYKZCFHy6M4LKmdJS97esV6EMv5n1XuDU497FV94ho3gBiTXvnfwpxPUMK1Gb2AxhMJekYZ5RU",
  "key28": "57gxKgULWCjAZceu2Cw5gMkYK1PgWFm1riLFpMZCcHqSHGnpc5J81NCdRUWKaxVVhGnHkAbTp67VDvTU9fpbNDf",
  "key29": "TywwGyz2WcWXigx2tPb1zg4sCXXm93NptqxCiTpHnTgE7PrJJwV2zgSZg6Z9p4Lzzbv3uoUuhXNvBkv4gBHerYv",
  "key30": "4oR4dRZVbvCUCNSn6dNzK6jtsmPc3PfDMWvVaRZNtQpTtJDK75su9Pjk3tGKxzro3y89q52Zy6b2GjHuKyHch3t7",
  "key31": "i2aP7DbD5QEKHXfvZ9kK8Fh8EEUaj1XbvtuYER1rDmYKsdDo8azZ5Yg9fMPf2su6MRqqLCg8z4gVrSdigYFVHnb",
  "key32": "5wPLdKjEvo1uawt3Ck5pWMDWeap9nxJbSekMbwfmX935u2CdrynBfFXT1rJDxrjXGhPELECx6SBzJGShfXhTuifw",
  "key33": "9Wvc4jSDzhr6onxdEefrz1ZezhsBsmuD1sbUCoT1uXPP9e6bxtUaQ8EDdURUfDbRUmCcfHBeQkKfT2c3y3t8zVA",
  "key34": "yZtyLWDoi83cof5BoR9MY8AboesMueeH1ZBjeAiMc2GkJ1H2DXFb3xCwtk9sptHQGBDRe5SzpJ3M9bXzzouUm1t",
  "key35": "4NULQ871hHTerpomVE2qwv9z4dFQVALqhHcHRUFiqWahBwaVFC5o65Hwzy32A6RYGBXpN2KeiVGmXFc3dXf6fBXQ",
  "key36": "38vhwTeTwzdFEmgCdFopAVeB44Uwra1uo9nfQZu2VJmyZU6We6Z4cR2k5oCnE4rHD5W8zUuhongP2tY96wtauuof",
  "key37": "42DwiimrtEYTEAvgY5stfWjUJFeUWzVxBhcqMaG9DjPtauAo32crMF3kDoAon5W8Y5dnqNeHLuUCgUvMX4T2wkmq",
  "key38": "5b4yjGkppe8c6Msbncjjo1sWSQHBJ8FxVAmBfe3ytyjoUTspanxvvNq3Q21XqSk6LTKvUNDqXR9kuGfg4UC9XU2n",
  "key39": "27co52xdi6QsPf9uCd8nJUQ9YLhLQoSWKqcJvbrTj9Di6iTjTQYJ6B6u6YXhLbiGgrpf94Cb2zPRkwGthZesXsx9",
  "key40": "5LSux3xjZcKocnerDZjXGX72iE1QbZGgnBfnS31MrWJk4sq1wqQQboNsZ7SBn4dRvNgkcdWzoumNoUKJAtXK4MLK",
  "key41": "66smcDxoQ1N1j7cAKTF8qDWZ6ZsyoGWaeZRk26dpivMtrzsRyZ1oxVi2YDA9xv9ZqF3ZrEjzuxfFGKNzh78A11Lk",
  "key42": "29DH4CKjW5EeyVURKgCbjgefBfUXD5yJUibkmNEt2dmkkCMt1kPnVLDyeaSKTsTbzYpTXSvhBVsUZjia2nyhotvH",
  "key43": "4aRt1SHrkTxpxieBY1ZAW1YLcLsBa5hrwPi3cePvKQxJdAFmzNFA7GA7bd4U2pkVzbgz1LcSaLJXML2Q1pnozwiV",
  "key44": "3T1Tns1zG2wwERhkCD23Swy28QY1JfWfj1G9UjHQk72WDXSmy81eKetEw3FCeW9BD8Hg2mhp66GQ9n6HceejAbV3",
  "key45": "5tBDCaNcAj5QCqSFygULeF4sob65pBV1BtFgLPaX7vhc4sQVYNE3RQm1Njsht3PGcVzzeS4JcMHufRQcCbeHD8X8",
  "key46": "3MtmmPudhAUC1GNdPszQtmdpo2VacuV7HEdBoeofTYdY8paKN2HQf25FKqE5jfPtX2XfCgNXoKfDEmpRBp8FCZJ1",
  "key47": "35vPo2FFm32dakKqpaZMYjSgVMQBzeDMxeMuaMZ6A98UhXhi4eYGPwCEV9o9VWWCwcWQE5wQG1F8swcKKp4YMMZt"
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

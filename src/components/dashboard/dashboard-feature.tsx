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
    "4s2i7fh1EppJYfJdmvEo5ErPHo5wYpPa5yatMrKqigbYnJ7V5F6Zurz84EVD9HHFeJiahkc1xbi3r7rKsPMDTe44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZKiqQCZWT4Tp92n6BCNi2HEVEm5tfm4A1GGQL4T3RKV6esWJTTapUcBzrjcN7dnLVd5QBoVnDhpeLDpNZ9oZyNh",
  "key1": "5bhkkzUMLjayehPpSD6R6DnHpV8rHstHkqG1Q6FyJ58bpKfPRyb3ioEzduECU37Tz5nigehSgPap596QLzM88RwF",
  "key2": "3dyjL3ARa9KTw9TbkmAQSpB4LQ69vnSzrhfE49cUh7sJCnQusmPgPMhEKPP3R4QUcaUUqb1yd7ukSvd87KWJERDF",
  "key3": "3LonuiFnWm9AwbA4bbPG5x5wbJk5PABrkZft4PdzSqHR3FKrtqTjgEmPU6VDDJvFuJCZicNwb8aZmP4nDewDMx9K",
  "key4": "54FdCEzn7srtJpqx7Zbivxh3TmKFJ8Cm884mg5tRrrYJeG5kRq2ySk8nyCUw1mh2Z5XZLJ1zgYKHDUBrdyQLPYG4",
  "key5": "3pkwZkeD6xEB8JF7Hp46MYKDWmSdWtmMYoCkPwYY7j1qTfqrftWnzwkczX48PNAKV9GM2PFh9fjybaxPcBLW1Wap",
  "key6": "2yMBZoj9YaRY4EddTKZbPSJcNpxW7RTBhGQdJzfAJAtVUsEZzxDjgmJVsRk1RgQZ2Zk5gCBgV7upMdy2fRnQqxgy",
  "key7": "eVsKBbQE93ABQSXMb5S49TK6cRPtKzkZdVFu6fHD9Dhy7Zdf7qC9MXEKdm2GESRWfRENcKQcpZ8HP3iiu2jH4VD",
  "key8": "4TBevrqWfeDbRh2veDdsZT4UQcjbhxzUjWoTgVGDGhnRWMF5sTVkGrAgimk1HVymZPkZTeot4hJFw5GPVZeKA5bW",
  "key9": "551CMy3hy8essKeF94jXr3kKdjmu7wfXtpF4754aykJVJvdjQPec5Ff2etmbf2mfyqLVJusthMyejwHupJsU85aj",
  "key10": "21R4b4d8cHy8ijHCKGATaHe3LDMo9WMf6PmGzPWquYNTcEMCbMsqRWdLnS5thHbtjqvQsJSweBtD1YdDS8MYZYUN",
  "key11": "3ZpyKTEkEi4Sayeo3nE2bqkwWmtHYoTdh5H4twNneiyNJAiEgt1kGKtxmAQRfke6dbV35W2tMvShpCt1tbriLCLj",
  "key12": "3CpydoAC2JZLcXvTBnvteXm6WYt5gEcdGrfZdHT5Vx9WoKfxBxJYcSB2adzZ3zA3kpQ19X3eLYuKX4L7r81AxWA4",
  "key13": "2N5dFPswzbQzMVnpYeadjxMz5QGxy6Htn2YHqDuP7NEuBpyfUeSREVMSPWZzG9XKpMEA4ymnYeaRqfXxbP5rHei3",
  "key14": "5FAQVtw9iQFpvEswqYUEGoTVN82QBasj61FUPKRD6TwAEktjDcfx8bzhK1oDQ5aCrfjEnSLycuHrSF2pbSmtacQY",
  "key15": "2MxhV69i8jZMydCqLj1q8Ra7uZ3zonR2NXjPnX8XxNd9gg1Jqv95oDahRdaNAv6CKBUUk885JjfESLC5MnvwhZLy",
  "key16": "3kSYmMsmrcNDkB1f7TrgGDyq775tiTE8E95g1Kp4gKmXDPfwog28d8EfjczjKxbg3ETvdACs5bKCPy2QVxeNSm3G",
  "key17": "3NrDAWsxudWVGCT1tBkJG65GtaFFoiKoktyM8Q8aTHz8dEGx8fiQjjvvGh3cfpFyj2xPtgtg7g4o3QoH6CwRCGqK",
  "key18": "4HxZaeJGYyBGLmjKVHRQ6XMDUQ1UPafjVryDuMMVPPdMTgUH33yxFXWPKVDGYa1SFUhP4UwTMYnEfpJaPPJKEqtr",
  "key19": "48c9cU6WgmK8YxQQYmXdwR75WJ1VQahfUz8WQXbCNW9YEVQM1demVbWTc7sdAJK2wqPc2RNPZFSsMEJ4uRYr43zN",
  "key20": "61jB6YjXfbxcpZnCSEYNf1wNh3EUNEFmmt3oXpmw9aLERwcFezq1FzoBUUwhrURpQxW83DghHHSTXLG17bpU8M8D",
  "key21": "5hyuJPPFtzKh3vAZMbx7PuaPieZnJyYQZtEa3Dj2XspceDbtBUVnSjLb8ayG8rZ5qFEVtoUDjoc9GGg4C56U1GSW",
  "key22": "4aaHH7oUV6vMWU8HNpDY9XGFHQKbYCSw8wSCDsf3r65v2hRzN7om28PVrpY8D49JAHxrgmWAxiBkLWZu2pFhfZSK",
  "key23": "eYULDNN7mHcsLFhHTBGKiSLysyT33yBHTVhW7HFqvr6qdEodh1ZhBup6E8FxDco5uc3DMN9TfuMdTnte8qHsfL2",
  "key24": "2cXE57danLhaxLcYa6qRwdHLsMoEnAfdJHSGLpEHsdpibuXLKLdjXBjhWeuYVRzeGvfkN9EEyeVe7gAtTaKxr1Y6",
  "key25": "4swrY3Yz3CoyBpUwY4eRcB7cnz4XE6QFik111Qh3g6Q3wCHKkBCtgzXQaxbzWQYcoQwz2kTqcMAWQPSL9t4PG3pj",
  "key26": "23m2tmBxBd8aTRUDMbgkHpm3vGvgRonYg6133z88ZRHQtjHcR8ASBe1G5ZPVWemTmrwkvn6UCgjyAuzN317YTx7z",
  "key27": "2Lx24gpRv52EszcSUvtsJuYzgYePYYspVHDMjba2jL4u9gUx84mcFycansSTCmEwP75DHNk29PSZvHeN6TJeiXne",
  "key28": "2JAe9rGcMXaPrvsPLuf72DAtMshDX9ZnmaBJpxupJQk8CJ7yJHntPq5xCcQAP1GS915np7FWTVMTxhGssmc9Fg9j",
  "key29": "5dCSHNnUdrboD8xUzmJnS7pHJwhfesiQCSKcz8LsgECniL6aXGBpM2rFK9x23AKcUTtNfPngKEVW5HZ174ZjcfdN",
  "key30": "629DxyhLLcLxVXpNrqd5GHF1eHLPP5hRHN6dFdib6rRJEhCdRVmGvssCCk9USFTKd5A1L8uYFzk7mpmC29wyJndY",
  "key31": "5NdtaYs8b5PzKSYtoRNkdXGnGEBPsxBQ7kSR9TT3ScvgSiMSSYdpVqKbregbp3ic79bidjJG5iHoeALuLVEFKxAY",
  "key32": "2CECcLmJefkoUS6WSHJhgrinQp43oysd3rdANj16E53MeEHwqx2J1J1fiDXh6gXgybGsj5iwVr3GPMdhTqtrG8fV",
  "key33": "5Q6N6ko2zYTCfJ5fadWVLYQGm52zWEL2zik93q7PUbACa5y7dNBwvqvXyMNQrNjWxRyF15vfbj9DS79SDRzCnjV7",
  "key34": "21S5FysFnavqS3avHKgdvDbVpWNDpG7RQJu5BxZA3JtpFzcZxhDchSQNppAq9yJ5w8LUpACuiPwqwivs29JWKoeb",
  "key35": "4prAYcgD7Vd4wvvaMxzFbNRZYPShjjRmoG7KnLQ9aYuZ3tFdCfg25xrgN99hC7CwnR2SEkkWzsCYgKY4aVwc5wU9",
  "key36": "eVi1rpmYWMcE1XTCEzb8azCCfaWF76YSGHsxp6z2wH7i8aXgzDawLiWQX31sYcZZRdetv9UehynvH2X4H6rTYNf",
  "key37": "3SUCQMYQykZ6UFzY7X5TrwyaAREZyMgGX86NFsD9wA5Y8MZk6yJoa6kitHnVGJx7Pq2XbTitSH7zLtWdgkd2UNEQ",
  "key38": "3A4zCnSqBLRP31o2BqvXnZhPf3bievpbeRGpdcJPeAUbvsUgkRCJMmb1R8WqwLL16Bvswo3LwFTmwW1yzUxxsUSB",
  "key39": "3SsXRqf5EyyDwyVXFwh8g7WpLbDQ3BSB6mxYz6i5TNQrMQLN6SsFz6QWs2QSJmDWzgAonwZKBEgD9G2vceBcZ6ur",
  "key40": "652qW8xmLy6UivrWfxdhxWrKbCyjWm9zVKBkbirVBWNMRXM9HZEACHk8NmKinLff6tTURon5XixfUy7FugtNTVEN"
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

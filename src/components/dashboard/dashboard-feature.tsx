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
    "4hx2gJp4srLQN7j1sxmBFFFVK1HLAGK6EcHdHgW4t8oeSPcfA3PyQjgL5vVBysJFBLPVBa87qcMRsE81XFi9Lx92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m6DqUzJPX6ea9aNXjeRhkojsF87gwm5xJwuUQZpX1kxXzABKDuAbmeX5M9AEbGgEVQmvkJRTfqLWdGn3moKdBy4",
  "key1": "2YXXZmau4AGPbAkJrgPrzV7nBkPjjRNVNNBVMF2v8FvCkPzWm53GzRdZrgzUxmsouBwkznGr89VVTYDj6exKc8xo",
  "key2": "3XtpyZHKt6yhVnxi67vEdQJsyo1Wg9gqCCWZkzwGq7Zs9zAoNzSQj9zSXy2B9P4DLwvjjikJ7uUvFycup2SPRKB7",
  "key3": "5csKMJn7eMJ5sm2CzssDZpjGXxoegC4QmbPWg5ePK3Ye7W2mHHf37he5LtpbHogaickkQrJmGQf2GzzkYr3N8puN",
  "key4": "38BK589MTtgYaKAYAQRKKnUQ77vE8PToYnH2g4V6k1Em3FfZ2FVj1HpFtUNDRaxr99evgEagit14TYXiySLXrLjK",
  "key5": "4B6Z4D7Xy6HWc5QyNcxcNiGSiY66RSFJCK4K4WQEYKx4y7nunC6qhduaGNMnm4KSoq3vuWy3kiQCq4feGCKjAjCr",
  "key6": "2EvKhqiv29eSssw7cLkUVpCSFNdP9cZn4oRw76wrZWAkNpYtDuiEYMD8YR9fruxQykMJ4FSUVVgmCzrTAezqb4d7",
  "key7": "64DaYRmq2VGk5gMi6oF8MHx68KuaWUrQ1B6Pt5gVdHfkuRNLMTs3kpsVhPBU2WHQRa2XH2iz3K3jprXTg68eCcEC",
  "key8": "5VZYUDueY6hCJBZRUxTYECVV9oGPapwh9UoJkfjvqC9Zx9SeV1hBnwYeE3qP8mpSVGoeZt5zMFacnbBH4S5RSwLG",
  "key9": "2agBXPnnAmuBsGnVPzd4WgrYZ4BTujtsRPRGSJaMDdcpqDxRnEqEzZLsPmrCNcrppwDhCg3e8uA5uyjyRQsTEAyK",
  "key10": "2zKXz4oMKHErVXAwuGPxdaYigJJtKJpHqQ1iE7fbPtA6b9tcVUdmihPsMBT68T14xfuCLHJJJtADv2mJVA1SmGbX",
  "key11": "4BTscCxRWt5Un9fiPHN3EnGsG1MyLEDZRQhbEsGpaFXiWk1JnZ6DwYZcFrvjHhn1vWmqRWVF6uYHmnZ212ocAMuA",
  "key12": "2kt3RRtEJCwhiHkWCTPyTQgMY4onZPq3AzxnWrFeWEjmKeKxDu2UJip6GhceZGp4iYE3DrueSYfwRYxyYg6pUnVw",
  "key13": "2ZYVL4PiWmtKzrdFiXrVsbebiH4dhojW87mJcWYSWLddjHxveBcVp9VZQh3dkuL4BmpmtsKTzu2xqGQdZTfgKos1",
  "key14": "2FZASenHrTse8q1V5gexmFLhwuWpduTYdSgiHyxtdxS8jx7vmMZ3YznCyQZnyvPZMVLwynRkg1nUsAgYX2gCJpAL",
  "key15": "4hew1it3A3CQwtg9bNZydjhBeDKkjH4ALBmtfjLmmWY81ZA4qwfEnE4chkTNaDj4tvRV1LMpyN1NKtbkiRGLcHiS",
  "key16": "4tFVisrrU14S1vw674ypuk9FhVS4ejy2aaPcL6bcysfUXkAJxYeW9ohR9QMZtLjTmqfGaEVcdXtUGAUNj7RhXUyg",
  "key17": "2AeJQW6PjjebuWvqWNQy6rjf2GUtVVTtv1LW8nSuBSTDGRjEP9Cksh6zzYXfs8Xzb5oGMs63SDT2sj8X9Tuy3Aqd",
  "key18": "46UFx6zTT5cCwnZGRUeMrVJ53EgZsARhTtiKY7f3chKk6pP8zhRPpvtySU5QFE159xcf6KqvpvReYTd8NuRa793h",
  "key19": "2XF1F6zjpBE8UTaTMVxxcPbWcfU76ztuokKVKoBR3GKNacCeqeCRis6cQMnastnpFBEdgBGTiptkX4wG2TVfnqrW",
  "key20": "nPa9LSDukzv6Z4K1xpRbecwBjyUrg3fnVmfQU7JMxDyK5rjV9RWEYgc4SprcyRfk2utgMHGmW7kGvckigvxa2ki",
  "key21": "5uerjWB1whePE1J6Ud3yraanhCtZjF3SzEctfQzRBUpbPkumshFsH1bX7zQVMdTwR9NFQ8tJw7b1Ufhv5A5tWao2",
  "key22": "9TJKg9tf7VDFiBUz5f5K9rpgDbTGvvbuyHtd2WW31fAtP4EPM45RxcyhfLRXmxkHpD3cF46vdP8sinT7YaCypoG",
  "key23": "q7SdgQ8zf25yo19f3tNiUJq3P5njphx1GFmoQyX9Zsn2FYN4UBLnFwhtnUdgkAk1gk62edNnNUP5z86WuuLnhGE",
  "key24": "hwR3vA5ebZnwphnzXVhbhzm5UAUGLoM1c2hzJDhATEpHMX1KkNwyP1FRfydzFyxXTb8ipr2ehWs4HHo74tfTXEj",
  "key25": "eJzCsgNk3PbSpz7fefSh4yzxnDPC5Tn64KXMNrzkKgQgZeu7iRqoNKR2yudwRtztAQewShE6SbrQqhSvGBE3RQi",
  "key26": "539Jx23A3dBvcmLZNkiomTKHmetFnJsGh9Nqg8rfw5mbAAcGjxHWy5TAZiUdnKmXWDuzLQZ9yZ3A9q75JgfFnrrK",
  "key27": "2VoXSR49EE4dAx3ae3Cnx1F743bKmnDYuwMDYSNF1VcsqdU2AvqaicRD8LAQRL6KzXgxGmbXybXbRq3gj29mtURy",
  "key28": "2rRsK6QfTDKJ61LG1dc2b44XDTDetKzCyuKeLJm8uF6XWh99m4fzqERTgLSyDoFsy3rAc6NXzYft3qWzusF9G5XK",
  "key29": "3bMCKbWh3ia6pPsGnyVAfxWXiG2Ymi1bu5sgmbZ3fc8a3npquEKsCmsxamy3SpPMiENteWHUvUnMa7JzRoKuRejJ",
  "key30": "3ynKr4BV61otjVCwzAXB2GK22oQNMHPi2W8nKJ2LPreuSaSv5LNYDWfsRLksC3rxbSf8QzF48jfk3THdmPeNe8B2",
  "key31": "48jddw2gUnqRUQxmszpg8remwgrWGeJ5uC8pKKURodmsNEvCtpM3HDw9U5D6cWuog2Tfkhmcfk1VEzLmWdDvSXMH",
  "key32": "31pTVRXaibh4xEWceuucmXdY3nxxPL1kgZTWgWtDqkuRV9MN82DTyWDZ9tVyVMVb4o2Qag3R2NnKDyMNKwC8KSQA",
  "key33": "5KNE6KpwAYs5A741Asb8qtRZTyYEkw3dFmQKMAhKoZYQjrWEaFZTcnNnxRkLbRsBi2VnU93ghdMJo5ZsvY7tZGKi",
  "key34": "3byzKyANqjYpNJ1uc8Uv5VXnNX8nrxMu1TbgbaXXbePCF9PFs7sunMz6pRvuREnktN5VejFZj2bwZd2Gx5qsrPdh",
  "key35": "4ewVGGjzeHCSR7Sx3yVcG4PRcrJu45qZBRcVpo6sBP1bRUbvQBsCqbiDwghYGAoVj6v9afKuajQLQ1Yv32y5Abzt",
  "key36": "4XcmXZ1uQtp6GwZmyzQBGQvTYdej21SgupSvtFtYcSrE4fQy6VqFrF4A8cGuMCcgdKPZx6a5VUeSFTHK1rD955eA",
  "key37": "4uk5X72riWsJmq26fb1fbDmJ519hV7WzmKtVBSFDKiJNxG7pmNBtadqxAhkaXqpPGKxqhtkvoyYxB1iKfzdcbTrJ",
  "key38": "2qvcCp776cWXvM6vKnuak99thbcVW8uvLAX6ktw9AZCYLWAKjs57ph4ejWo2fFYDV3L1KWVHk72z5EVqFBWuhTch",
  "key39": "5D8ZCNxzdUtmduh5qKr6amKQqtojxv9zoJanRyLgbyHc6A1J4vd7kLaoT1AGYn2CQKEvLwf5GRsAid4M7Akiyh1Y",
  "key40": "2aY3UPBuiQPRkiGWrr6pznHWXdVyG5JgBNgrLeDN5jFjhFcZyY9sLmFf3KC8yyY4BMLE1puhjueQB6qPdydcq9jp",
  "key41": "4yPZrC4hsbimkUKpWeEsPAn3PYibWi4BNNqcAruwCGnfkNzmmz26tvGCVHXXFX1aD495HkA715xA8MoLQDCAy45V",
  "key42": "5Aq1EsLGAPcmtvHHwC7zn58zWmXqqfmRYVevjRGi2vzHj7VCJELiRn7X1C2QpMVrBEJy3QiixXeWj39v1nTueVXQ",
  "key43": "4u856cQ9o4ErgX45CJrMYcDbbY9ksDJUXJFRGLtWtdPSeQfc3r2JSkY3tRk5wgMWFbudSdAXJACeqXHqtL9JxoLe",
  "key44": "24ZM2XvXfL4KP4ZbijHySjhbJeHgVUjr3vU57eUAZUt6k1hSgjerxc3fP4vejGh6K7ZHB8H6U9B1mEjngccgWW4R",
  "key45": "54JrQDPFVmhadoq4bg9o8zBLDeiNrh7zZDeyKez8oUdwM93HjRcqiiFWSNy7tKwRQn987EnEU2qmph3n3KT6qEW8",
  "key46": "2SMEnaRPkS9Q62cQxqT3WiezgZY7Tr3W3ui6FzzovAGeEDdQ1mY94RMGhRGzt2TqiwV9Hjub1LK8mWDGNVMWocqZ"
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

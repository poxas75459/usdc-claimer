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
    "4QC79BuLRoZx1voWeskuDzZ8wqrM49DXPVWDNXArZ6CJ9KRu73ncvtZoytEjvd1oiRNNbzPJN86DFrk5tMXzxRAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wcZ8E6BUyfWho6AMXd8Vp79Zhi8ak6TiavjQeqsJXfq9yLZD2jdMw18SRxGUbfwHtDJCrdQ9jCN86YyYwH4awRg",
  "key1": "2zcLwpYr9FLqEbtGgvm3GqL3b6WP1kshMCEqhoYuRCJcChsrwQ5xJXZiV4M2up5VKsqC65kXZvehNhcqmY6Qnh76",
  "key2": "U9eFBB4EqfrEh7bUDxrvWNGYzCt6HkdZDDrx9pzfMEQjarwLx7cyQnnEjYid69A2fJFmUHJFi9xvEKsus7SGB6v",
  "key3": "5aJQMNpkqSpgsYKL5WvyCaJogR8LStyKxVfPkF1kCigphsN1FNrdCWazKAzjpRnvKRNBDQTDeYUj4BFv3CX63Gaa",
  "key4": "5Twoyt5L7KQBT3L2irFC5jBqCju5qj7hTwncFPdt6q1LX79HTqNUT9T5Mwoaf5GMbW2vVormrXTaSwUSxqFmwu81",
  "key5": "4opYrV4cBpBBs3gh5FWoBYrTWWQozJEZ4RRGd1kEvBk7c8R8QBbSaqAuHUWH1sRYyMszEiMR3bQSt8FChqFHQvek",
  "key6": "5UXNvoRusmvgMn4ENup3YqJPnj2noGY28ZPohS6p9i7YmXQdp1ctRQQzPCENfefDyykJNxFi3RCVSPakScVBSzxz",
  "key7": "5c29TCEmw9eJ87d97TDhJVACsgJym8DB1BiEHquyV2ZXEdo8WXS4wkXCKkB962eUuDYpGBQMvpmWabgb3rBgLa9w",
  "key8": "39DENHAXV4tA5Mv4cmhyC7g46QAQvNaZwRwGFeoAkakCKgVfG5PWDafxn9sQFZrR9pWmgvcX8WF5LYvdmcG3DGhf",
  "key9": "3XQCHuQUt1yL32Er9JqcULw9KJs4yGUdVe6mzrRsBWJbnfxrDASJufufwUJtxr52mpNSeqPt5VjFdVgkvG1XpCsA",
  "key10": "2L37V16iyd11SoKRfcWUx26hqJm5fbQvuoiHNMrKSgnBZ3r6whRoDks6rQkTJ6ehVCB5X5CBMhq5LWRj3w1BTmtL",
  "key11": "5tQR3nwF6ApWnQVoBKQdhZ2jq53PH2yMUw2TSR95MdkS5Zdpb77fxLtRXeM4TJMTwB1pcRduV3iGybbAHJa3RcgF",
  "key12": "5xoEuuU5MUWvWWsPFbwFpxxCCWS1EEhA6kLTRvYVQ4AxCGbXpi5hmhi4AiKMMWvCNmBNm52TFB7uHDHuuQK3FwQd",
  "key13": "5jf6SdhWAgrptnRinDKgn668rb65MWTKJVpTpvDwSpWoPh9hXLVEGK6WCKFB6szj2iXEgLMjRGAfFpNquZqeJy9Y",
  "key14": "631LFQvKxiUg1WJYnfih86HkNFJ54WBad7nLWTQgL3V89in7T7HqS3bJ1kkZV1vQZc23UBH7VHrt8QizB2gzCNSk",
  "key15": "5beJacyTekmsUXwb27nL6iH67LowzSPjJrtXHKs5KEXCJP7QXLm8A7YqZDAbpyoLpu1A8UVUUpeQPEJLFsMtdi1b",
  "key16": "5Y7rV6jcwDV6UuR3Zv6dDFgLZjfAAnBq9e5XtpnLdTyd8534zz87sKH2C4x8cdvjHynLRjF58oTAjYN7pdbjnvmC",
  "key17": "48YxaK4dESdfFXyVQMtA5eL2SZHQpqydodXaGJ8bv76GBvww1XFMkrqMtByPB6qxshaz8FeArjJL1AQnzDQdhLGL",
  "key18": "5rdMVSQLijNA4zakoC6k9uRTF1LA7bCH9JawqR5Zkw7WN7r9F8zwYpbAEqt1rTruyhNMZpmGpGwNaCLydNEvdcnG",
  "key19": "4qeEDfKivWkSLjtvvcDMxVCoD4zTevjeCsy79nUUv7RPpMeFgJXDB7uShhLXer1EJLk5yXLi2XGBjo2K11o4BsoW",
  "key20": "3ZJdEue349d87hbdyiTn24cwySJc1K1uLyRoRrDh2dyNxVScqkDmhwKeBU1GinQ47BjE7Yp9w6crerp33C4KFjAb",
  "key21": "5jtpGo8i3jnmX4gMFfi1s6SkXVkB3qY9mJVs8UdGw33FFVVGvQsKjFyTgom3GXjfTq1GxvDzR6XRHpeRYYEqQCSW",
  "key22": "5X2j5DEkyQTpcUh5mBWdJnfGDnPhHLzJ4Yu7ygFSot8KSYfMgRmpXx7N8MQsXcHbd4G14LT5aomCiRRnWeghV6WX",
  "key23": "vgtEWaqrgsevus98hK98qH5pnCpCcqoPmiBi4hocd9Yj8Mddtjs85iLxcR4cQ2cFhBHURYDw5rGo66Uq2vqsfvP",
  "key24": "4WgidAnWYUc2QFNihLDLfVAmiwBv25eCcLG9YcCBB5VNZxYu1Lsp3vqJb6VTdbXH7p8XkpH2rf1hV8K1drAeuDkB",
  "key25": "29oRrJWmGqhLaQmZo7kazdgPy99VP5unCVXAC2sax3JB6qfD6bYJyuKCMLht2y12Q6RXQf9XKmNbH8j8sfCnCfFh",
  "key26": "5aYgPqdXEQ6QNJNi7mKXE1AuaxLnAm4iwYZKpdhbuxWCB3hfefu2DrJHK9tSfHT9sViUB7otaZRmrT8g9khJH1FU",
  "key27": "2KfqzgMh69UZ9SQadTmYfKn3ubkbrW9MdkELDYPM7MJ1evarzVZeZtCFn7hFDuisFYQPDrV6Kzfh23FCmU7MLi6Y",
  "key28": "LVXE1b9Nz9hJuJyfTwwwGoHKP3sqDd9QoWaArLeWHCVN6QpaPx5sFfkwqH1S9RhuRVAhhoEbhPVvUD6rZXVW6Mu",
  "key29": "2z2kVtDh5ibjazo3n8TAZZwaCbBkbM4FgCa9X63JLoLMSyj2HGZEKKc45wQxo5RbjifVAiV9LgWo4PHrc5y51vAK",
  "key30": "2VSGcW8q6pAuyPtwcrmxR7HDSyaTMcK1ccbCU8CbqhwEfgJX28Dg3ATZ373XbjtSQv5Du53yUmTZYYmxXCcxb3g3",
  "key31": "ZWMY5v4HMtkVTKErbFX3nvXUSvw9bS5o3gZkRHvuJK62oZRMZRnzC4RWKp7jwAuUTz4z4tTvNEDM7t3vgmSMu7H",
  "key32": "3r3sF52Fec5xXt8pvzdAvJvYTeXjrKtC3NnvyU8WzLPHGeRkLS9Yihgux3xMhZjqpk2VcAXbDX3T891FQKTYyjNs",
  "key33": "5NCiJ591rHGu1xaRVH2DRhaEGnydcPkUFPeRjVm67w1ZPvvDXsZbbrrUr7fErD34jdRZ4Bapc3JRwSWxREbMwm7B",
  "key34": "QzEFEDMTcSJdUfPeqTqkUeTp5eErKsdtd7gKs5kcGMEFozMhNAccFm4TR9n8367NC5p9jTqci8XBbE1B6DCJL8Z",
  "key35": "2Xp8ZF788zCCy7vMDi2KZBKer5uUDwxpxWzotHPxggwnepfsv4M2Eg2Sg9htGmbiBkUg5CiWZCK7c5xH7TDQUG71",
  "key36": "5QnMVuAhRBG9Fsz7tio4D5U1DWmcSBdTy8C2QD2ozX8krhjNT1G2oAP8CdksvkQ6rfvqu4XJf17YgxnyYmLjKpee",
  "key37": "4Vsgwb5Ws6y7Y7uBDjSmui7ExyhhpbQp2cSHnTXbj2vDKnHycq55zUt2Q6hYYHASdTh6XLCiZL72VmEgaEKn7HcT",
  "key38": "5Ly3PTu9xgv48VbyzamuqMCTGzXrwtqPv9gEdx1SUV1Dk34bSpbajKbWTCggkZr37XBj2TPKFTJ363EnEXtGY2oJ",
  "key39": "24vz98KnYxzUVKATDLNnd5veXP1kRvSUNSKFgfx9GeYxVBohM1EsGo8De8rfj3UWT5Ux9wXR28SbZHE9om5RoNWB",
  "key40": "44bEirdpPsLP8MUqA3zyeMXKLhiFfonUPZofS1obkpAuQ3jJw7srt1KUkiA1jFyYbAUaruTrZYEvgAgHB9AKkSSv",
  "key41": "3hr3Yuszy8h2RaeUKr7NvWZGmBWD8p67LbSG8h6J5TjjUPh9nbXpYZLpvV6qBaDSPjMh7cgWYvG7nZtrTTmPRSNZ",
  "key42": "34y3vvLsqieSKrS4QR45GpLqxULaJT2C7bYcW2foC4HCXTyeSoVMC1HFLFm6AvkRGnCuq4vWk3LgRDVzw9fUxYGw",
  "key43": "5j8nnhX7Sy9a3dVpD9nKrj96qaofjp59FxgWacqMyjgJnvQTquK38RUDyvGhL1kpLcv8PjKXu16Ri3m8eNY4bAzu",
  "key44": "4PuMTM9fMijtcLKzZa148EeVNu3JHd8H85yWTNKP1WTdErtJnG8sX936CqAWN3SiHsND3i7EHcVDedgFm4ceFNgQ",
  "key45": "qzg5wxnFpkrCibPpT6hLJir4dPCFsA3ysVqDNboeTpTszRBKcD7bMH8mb76bP2Nv4bWaq8KCqqc3uxJYZsUHdkH",
  "key46": "5HXsn837m8YYADxbbjPA8g9hVyFq4qcMLq6X1mUKRppYF6jTMFNziKHpsjbMwcyJqKwwxn3uJqEZ6EQSqQ2Stcie"
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

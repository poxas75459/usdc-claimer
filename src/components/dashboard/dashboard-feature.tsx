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
    "3tKkDiEN5SR613xJ9uBYC12DGAwYJAmtSvY7n3o4f7vna6YcmqZdDbw91KcmR4VBcPRdovmFRV1FDgVAKK1D4jiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o4LFLYNDZm1BCJ2v7vkMP4NJLGZzuKy6myJ3Cof6G8AvCwYL5CjHUN4fqdRWfUMxFYnhvCJ5rhXmuiNMW1nnZD",
  "key1": "rLPgQXEognzqFaqdMEFtT3PxCGQKFeaVZ2Dr2eP9RoCXycC2XaEVdzRZZoFZnDrLzeUHwgV49mzBmDmPwEApyTj",
  "key2": "3v8Mx8t3zYHYzu6s99GZgvjTCkeWjmYcLjCufJuG5m8M1ZoRXhm74dL8tcKxz7NdYoU3bT2uzniyEtTZzZXNqWZA",
  "key3": "3CjNw8461merHBZkDWVa7x1UwxA5FPzjmGjw9xqvnFaH1MEefE9Kk9QHXyaUw4sua9RnFKQbPhzBVz6uVdY4JqkM",
  "key4": "5zdycNuG6EriNcqa1yDeXQjBwC3vfqzat9yr44BibLewXd52uCzp4FByti4VBFEAvYr678nJwpgv9GmmciFKSMuZ",
  "key5": "4XaZYErdRsja8GaDqjVE8sVzNXY7kNpEGQvDFZ4Li4z7m88WyXHHWo8DUyD2rzw21dsKatFX5oa8RS6NdLQMYRin",
  "key6": "2o3CAd9nyDZiEX9P1sWeHvbzKhxYks7rrRaEG7XSXxgYbYRKdgKDua1xeS68rPX6iNsotWrQge8xh7eMVxLEyz6C",
  "key7": "5pF4BT7fsFX8TaZWRqeyBCQXVHoGZvNZJ6Z1onfCU3Py8MSvKx5Scr66LchPKneA24AbkXJbw8bgt7yU6WefucVC",
  "key8": "3kPjnCcA7BcyHUyQndSGpTkinW7uRojpdwE3TR1SP6YjsywYLHp3MfqkoCvEXwTtseSscAH527KBodQsipLT3Uwg",
  "key9": "2DtnLynt4oQoJZW6srv3cQYpZwpQQ4hyNK33MnvkwhjPozd4uiaShEtSELosR8gZU4hpSWkJuw5pLxypvyT3v3Px",
  "key10": "mzhiKgj1o57WxwU9ShoipcSDjKDF6fn4KKgo3jibhRgTrk2ttDUk29wqpXMSYxoHWWMYfsLHRHfQRCjEZ2dfLmH",
  "key11": "ZFx15nGhSpYivoAkMvCqNkbk4JbNfuX86CLGd577FQLTF2w8k74yZRL1AcYyW2fNPdxCLknDpVzozXvea396f7b",
  "key12": "3CRLCELTKzhCEF5eZcdDihkC9tnso9pkRXPoAJY1oSarF7Jz7z4UuUvRoi6E1jr7348BM1bxcMZEqc27R3vvWSj4",
  "key13": "4PBNtnwFhyn61tzs4b4PovBWSY1tvwdNbMtwGZE6DWsTb86RXWNsYBzFw5h3miQSyrtfbEXtGuLUsKJgEsb3MESB",
  "key14": "3xJtpDCSu5PV2A26ajnsnYMjQmrKkY5yWWimJThsisHRiYmCAiBVrvVtsDkg8ahUSMFpPksCxNvVCFKz8j6AybGq",
  "key15": "67H3UVRqtx6A5vEoqT6XScWEuijw2gnm2rLq7dT77ARNGAh332KsjaThsnHRxGDwY7xzmX28KhEei4PDpm9Bce21",
  "key16": "2K4cSGxNx4PLZ1aXWZSjrWHrHCLa8rae1Cnf2yZeJKDbiqbTmocLvgThBa5KRVha9viXRMgyNJyQTYmeeY3FNWdc",
  "key17": "4F85vh8CNGkAVr2SNMB1uNDx8aLndT5kXEZELk5x47SH9NSNep7nrdbx6qHE3fpmbJo8m9oguHfib4DuFAd373zB",
  "key18": "62MGnpy8TR2hXvRqmDWSrphW6Fm35Whz3xWqXr14h9cS9z49budXjjhpMRJv62TQmpPMP5ouVwt8jUYfZErPjgd8",
  "key19": "2qHFcaFpeX1mLh7o7wSYH1gSHaXku4ZnbvNzcvP6ae1u6Hd9NvEMDGDEoES5FaHFXwcXffobRX37PXcZYUDY6DpV",
  "key20": "4DHGAPbBNLD61k8qddVwtdXV24SWw6aE2Hwp6KyAZx9ndZrJFdmMjgWMUyBCX8EWVp1c7iBiFPniBFVVF6MXbGJp",
  "key21": "5itpgBPt5uSNG3EhgyLqW48JjN6cQtNnZcCGNwBFuN7bZM8LSAGHs27cZDsjBRT7EjzCEL6EG661BD2fsU56oyUd",
  "key22": "4TRNeZz8ctS2mdForAcpyvkB9odYmoMyMEHDHei6euvdiXrbgQofSyx5aAUMvEuF1pBohUqiN6m87VWyFUiNXdFj",
  "key23": "iUD6rXLfU1QjhwouYiGe8mPdJDV5wot8wo6tA4sPy66PaJznZWb73fJmAoskYV8QpEjz1XcbmEkTFtu8S9dm9Uo",
  "key24": "3U17eZr95tEiJmxYFNmKkvSmaPrckPEWqhNirLCwMhw6Z5TBgJDCiV7utBpt3nKDMmBysczmphxDVw4zRBanciTS",
  "key25": "3UzxBGvVbyvjuPHbrmiPHhYBEKubn33WtaYyLqMUW7HbZUD6Bs5W156Twf66WxcVJtAMmBnv91UpgY21YhRgdW9b",
  "key26": "2ceSt1eiPXtQN448ygADapVMDfmnPjBquqtDSmvggVdQCfCG7S8Rvnn8eRZeCidtBVyYwWhTWmEp3jNQxVvGS4fG",
  "key27": "5UN2jYoZqGjVbzvaZm58JUdmf3MgpoHDqeatxtLaWa8PcoM3vdYTxQ6ReiUQ4UVrthWGsLUChWRfMPRs8DXsR3Bg",
  "key28": "3BYARvn8955ZWxeABFTnUkyiP8crvPJvuLo544MidCfyPNnc4MkduJPhnrNrDSxLKPwzQ8yb1i3RkMrbqyDr3q9m",
  "key29": "29HrnNNXmp7bhTn5wjqkMjhyhjJHJMcfWSiMLvZwC8t3SqrGkKDAXPG9SytzBbKtrG8zDJUosadrGNzszLf4CsHF",
  "key30": "4uaFfL2mEUF3bWdHPb5Jx1qVrMp1GHSVEMHKmxyznFqTPQD5jSYCQDv7xvGWaZZQbNjNdSYegyUF6npCM8b1coz1",
  "key31": "5YyWbZDs4Q4LAHz9YQf313QqeWHuCwZ6CPvrctjYHPZi8PutV8QHRKAdiFwfkLeCwL7kDrtPHfBwFQgusCXRjMyh",
  "key32": "34oY8PH9z1kctfGPJd9xFjecJSuk1n9Ep91eyghpAyArNgdtLsdroxjxtkeDcjEjBB28ndMRQM84HjhtubTkAexw",
  "key33": "5bs11UFBxnKMejRHHknpgLYRhyL9XSUoWMsJyxhE1A8uQjTP23tuuVNY5gp5pYMsd6xmoCEhkCvaNdpiSfJG6wui",
  "key34": "35BPxif2ysxqd4eQRhihLwQPr6nSBhxyXMSLtoXy24s8ubmyGPSd9Afrc9N8bGVEnKVgvbLMkoksMwQ4LhRsCcgw",
  "key35": "445W3LiEEndiE5vWCMHQySrYRtGEEvVTBmbCn6w5Fmi3aiaEJfGjJbArGAB4hinZspYY3XoMC88Cx8RgrHheorJt",
  "key36": "4kth4vwZhJLhrRGKh4hanjzH1bYDEXcYyybPNKVhkzMyh14B9SqB9Ekqnzbo2wNDArDzKRiV3iKfb9GdRioSvDsW",
  "key37": "5mbjAJViyBDmkMXPKTbL16RP42ahbavxh4NzuM1MZuptkgkToEeTo6j6xK1T7ed1rXPTpPBSbHy7ZcPQ5Qn67wSq",
  "key38": "sUiAE4e1WQ9u3J2wgreahuKEAKgEWdphYafxSxBbAiTMg7M2DYndiYR4bV49J63XdVsTdUvGAtRjJsJoXZxhSs5",
  "key39": "xywFEMAbBZhnmDuSvZzLrSifDTpeuJQ9g8PD3PBnZA3wZP3p9XLBueWFPfeQ94ABd9x7Z963gicXnQz2fbhfG2y",
  "key40": "4DRy396DV7Cirf2gGhdqsJC71xHc9Rud7Tes1F9MfM2KmSHFEHcYEJ7VfyfEfMCa37bkXLVsrveznvMMULjavwCR",
  "key41": "3Gx7fdPwwSbTGZfPGLw5NVF7pujvdwGQyJ3L8J93F98tweBEULZY3h5sKZygfn4myFpN4s462KP2bepqEaERerVj"
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

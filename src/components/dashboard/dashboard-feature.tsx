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
    "3NqPiLx6jnUvLcS7A2kueKPX2rukvHMhhV299b3V48u5C5XRUDLtpnxBEbZkekzxawJEuthgVza35s7UEnoQudzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fAou54ooy4X5Rfa9xfXkmhX2wkSP5rfLepgnvHZaNFdB9KS5iWXcczTTQMdgLY6eZgPRMAwp4n5Pjn5Mm5hLpBa",
  "key1": "3tXU4UrzeTd1jCZN1dRcZoWNkiqoqMLaerEiJ3LPmNwDvkngZRDBWaxNYPanaX2FvdnHBjCRvxKmpatHEbC7p44F",
  "key2": "4LvEVbL3WCA4aozLpp6NHwY3zXwT7WBp7pkkDL75HAf9YWS6jr2f1QepGCobrTjBayacEMfDPL2G3qGJojgXHHNy",
  "key3": "2p1UyHXU5VBrXQiAwVEoZGUXiDZdnWMSWPXkLuCNirBe853PC6TpoQGKQRYPeHgifCNw4wgCwRmduzPe81SU6KTU",
  "key4": "5uQwGbQqy41kp7dFKkLopDAj8TwxrRXEkfGiGj5HZ2CGs2T1R9Yz6Lqk92oi8Th8VXGGPXtrxvEDXdcagyJy7VUY",
  "key5": "4yF9RwbXNw113wGGgkCVc4YVMdGxQVJLWbRcMMN48362RjJAKNoULc9WcnKEJp6dMTPogkTVE6WoKabVWesskZGG",
  "key6": "2mUmdo7kaPHiUGMJxHxS4RNmyHsxy28A9qkBmwzp5bhUWy1vNnjP4gLbeowxC61veXrt6rNvvtBqD7C8NL6gW7nd",
  "key7": "2z9En7MRsv8hUJqBKwHpJvaPVhohH2U6rSjSgJtvkDx1247pGRL35BdFrC819iHEBhfyqE1LBSgeM8ALdm2tQ8dK",
  "key8": "65XRPuiAKZgvJQ9JPNgAE1nNdTMLP7kc6SLPX5PLZg8GF3HcioXDx4XkQJDkXev3aTp9i83vXSoB5vptL5pbt6Bs",
  "key9": "4P3jtCR6RFXXPKQG2k1s5i7PqRzDJAPndhkWw2QyYHQhnjf8cjtfPMaMWhHR9hQ8h31Tu49LonssF4VsbLE8c473",
  "key10": "2RuxXuBHwrssFbmznV88hpGLLwweun8ws6r8x3KGRTc9oBFtLNPXUfvRBgQoHPTPmADywB4VcD337qBbMKyuQ7eJ",
  "key11": "2oj6NzY9f85uPB3FUZHh2sT6N1oFTeGHqhrxzz9tmG5r17rc8DYf2GknRqXPpV2MCyRuxBvxTqb4ESuzqq4UQ2wW",
  "key12": "xoQBxSUjVxAvrMtnzUh7Zug97QcTR4pZ8b7LCjiJyazV98WJCeRJSFkwFYUbqqHE7EjqynkqxqoippfTGFL1xQm",
  "key13": "5ehSKN7vDSc5XGhpHrS9W26FbuAu1MM1C4Quiq4dy6jbJgfuXeSYrRzeLyPNpXzg6fe7EWcrpYQpj87nWwJKBjrF",
  "key14": "2BMa5iX2oALKfXBAamuQJwZau8kouVg2RY5T9kaJcuTXAUDMKamQZjZSrHvbJ4duNVd6CD5ZKx5Bp1AzuHs64dmi",
  "key15": "4BR5BwiMHVPA2FvV1A5G2Lh2uifx4vpsQm9EmhzNWEv7NgkzCb3Kyzet3XB4AehJSdSSKPsKK9R9i4dht7fcrX69",
  "key16": "4i8Ze8iUnxSbadhezZoCHAaoHkj44TSFww3PQjRgwtv8WTzSdTy4j5KVJCPD3MRN1Y2Lt8pPVGSRxheYu3zujaQu",
  "key17": "5pDzYzu58amXbRmHePbChWCZGU4KtWEMW87HnZznZrE1qD3sHnxmrL3Ft1DfjjdNUQnrvKemHKu56qAy3JaHL8tP",
  "key18": "4y7Sdbi8Y1EyBEbnP7xgKBZi9Txs3efv9PQCJjdjsTP1iQwrntJzRS13us8BuX7e6rVbRQAnkbi6zTBqnWEf6Kc5",
  "key19": "ECYJdLTkXKFuA1zodgaqnFhtBwPFQCZBCgj34tbsD1t7Xu8KZEqu457mfBxkse9EizJ77NgZ4FYceCywtuqzsU5",
  "key20": "2z2RFmSvc387EqRekhyQ4FBtDK3LeXgJmVUwLbLsHakaPgB8w8qrtu8QHB2euwbzqs5oyQxVF1tKR5W71sCVA9j1",
  "key21": "oVmHX3GsFqcCBdyp7y4roDwA36UmyCjAVfNsr6FHjfFR8tR456N1YfDQViLTnY8Hjr2bPsjcPDnmBtyYe4Fu1h7",
  "key22": "4QM6RwTrf2utbNsj6L7fXjzCcam9KDH1MgqnoH3Ndktf1Rv6y3a3fQQVmq6RErKLmPCUvzDFjZbgQ6TLEMU4QrSw",
  "key23": "49fakS6RX8zDZDLrefFzB5XtZDZvEjxyoVBTEnRpU9BE7AUZXsfBaWez3uHKW7gVhjisedqDYHQFgNBoreuiJidt",
  "key24": "5Q4pyunSyyojXgrpExHVEUfDVDhiMMnjnnYfRuhJatMFELPZdLkrV3QqjNy4BFE4Khi9wRQMziT6imweMy4XNqto",
  "key25": "2f7cMhKAbtEYfxNDBUjEQi3ny26Ebyw5rWsMLKEriqAiC5W98gNyggtTxs6h3DaR1jEGeQiLYMMxxTAsnvH53rtf",
  "key26": "3tjBQwrWSXUs5Q2vwHgGh1MJfmHWNemQi9bNJJNaqCvGwiorAZVSEUyBp9GUz5UmBNeexuC7N3BTmHYS95SV77oc",
  "key27": "3rb4nhoh17T54QDXmDGR4u2TbAwFcw8mVqtwG1yR2Wk8FCwSe9GJyVvXyLem6SdRuru5HKxnbawoQmz6MV3dSUop",
  "key28": "2uwSWbo3La371zuFe5b9jAsYgo7nH32dPN43YHYjNazFFtGhW4TcukdEFtcY1guuni4HqGPznsQU7YwH3Gq5FRwt",
  "key29": "3ogxaykHihcMvApmVibn64WJMpPTw5sfZhdkgokuLwHpAhunE9AfgBCkGzyY96CWSAEsxPSMur3Zx5NhszkaCptp",
  "key30": "2hTsCvhCH1RQ6yfUxuc9PPbnQHRBpQC5TKMBJMi8s3cAo897FBa94vPqMES7FKBT8EJdgAfFrSRrARfP2ymN15aq",
  "key31": "jy7xUFLPfsJEWirVziaSk8naecg3KpTMKsDiMj5BburrmuxRhRdcf86YQMDZdWrENzAe5QobhNEXCqDpM9KjRqa",
  "key32": "xiF5N2DHvzFqutcuSorWLkKXoEJ5Hj7SnYNEwRLNs2cVpygUx5UyWvRxnz5tmeE4psp5cVQfBg8Ud3kmQRxTKNQ",
  "key33": "5Bt9SC4ejES3hh9jFKobrLdzJ1Na5qkH29DaPSEWevSeUBkykS1SFJHMXqTCWX5uim5Bq8wqHEAnp9eFHBBMeAbc",
  "key34": "3HhoBTRXNmuZE5iErMP1iuuHYAofVJ2Hb6br1ga2L4bkZwQvQRAfWNJef2jqcUn2ZJ2hFHXCgvEvuktWPhHfuHSD",
  "key35": "2HPraRWcMHEzdjYiaqecTMpx6SEnLWtu4ycLqQg2bmGxt7h1yuKkSWJ93EdKHFiZys356NbcuKntyMc9KjXP3UXQ",
  "key36": "4YxiQ3F5dhBmFpLeMe4Ux5xyGAXiJ4x9DsrLwUtfDN9DkYyVNaEh7A7ZYHhacDLRziJayX5bd31XnFC1a9PkzrTy",
  "key37": "3Qy6YUB45nE3U7KBK7RKLXAsqUppRHL2gBos4xyEp2hic6h44UYZ7hmX7Jk5gdTSPjKs49wymavZdw1kuNXN7T4D",
  "key38": "2cq8NDvcQGP4kduXj5Pk7KGPnhnMcia7pnSeS9dz2gH2QGhpUAj3ujuAwoLgByWS2B6pRcc4BubPdxvQyYDffDpg",
  "key39": "AZoyFL6rsnLSEX2uVKNXvAL6K8SMN6skLQ2bRrmAVKTudcGFDTg724P23w4i1H91SY5s58PEL5aiAz9HDgf42WR",
  "key40": "4JR1CTYx8QKRCGcbcMwromMPzJdjgxZBEMcv5inn46fPSXkt992ote8f9VRUrzZsukAgJjS8J91nscZh4fAieJEC",
  "key41": "3SQaXk8XC2KBCsjyssQak8ZcHqM9JoP3a9h8FwW95pMHyudUJoc1sDUdYvRcVExy645Vwc4BkT2JWGNRTq2ejN3T"
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

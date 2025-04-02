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
    "54Cv2gWzNY6oQ1SwoVszJX9tR8puV4WiWoX1wT2qqeWcgzcA5WFR2QJ4kE1yRwpCyQFRgjaP819FwkKhzt2G9hxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vj8xpU4v1j8TfNwji8BKfPNbBrXYnxyg787z9Yb3SvqwXAfhrxt76ubtPcSEj9Mq7TsH9sj32TgVogdz1CZJPRE",
  "key1": "4gjaZgMsrrYRH5UXEmJXXN7PcpS4mqecJMRYatbuYhFobJQ2eTz9nVbHvLHyZeshposWAgmtwKdSufanv6E3rpjX",
  "key2": "2UdTkKgDgSzEWQMpeeveAx5X75wZcNYhsYdmKidDLZt3s5wEEa3m9WPHjEJw4CHqx1SgMmp9a6NQutErxrk6BweF",
  "key3": "TZHQEbGSn1EznE7ufKHHaraPgXd8iiMenvAMWGaBy3sxX8m3V6hQNeGHXL3TQvhUmHmVx37eenwSqBBTFRp7ztY",
  "key4": "4eFbZB77gGji592DUYeXDt5ioYiCmQ3vpYGYi5dxwyAtvrUMztDRWvQitWaRPjqnRC8481ZuBwwMhib3ywnQRM73",
  "key5": "561gLKKXpVN8siwvYBSEFcD6eVbqnvwpJnRGuq43cD98tF1pMNCEhD8Zg5vDem55hS8VNXFRSJB2yQtaAjWKu9YW",
  "key6": "4Qp21yY36gd3APFEejZNBLCJX4TZkgCoUjFWtZgWWRi6xiKjA33KUPoetEaSmHZf5hbBXeQ4bk5FeyTe3kzh6bcq",
  "key7": "4jMfQTuLgkgXFWcYkRtxqkvQiobfCbGA2xwRZzjwTadaiGMJhu78XL5wcVqYPLkre5rRpg7sTnyC4knWaNnz2JNQ",
  "key8": "3jMpRPHaoTTkTSkMccwuw8jttArXoq4TDThFc2rQhMh8y4fLAH1LZuwKWrqPPkN34zxr6eQHpUsMy9qCvmVAAALf",
  "key9": "5YBHcTEaQqmhRvC7orosf7a3i4wGjrAYRbnU3jZBR8vpmtKXQYbznufLNjf3rxFeTEmpRxFRXvsNXS3scxwkTjtB",
  "key10": "cwoiKyYfwxfk2Lq5vRbymCCLvmZoFetHfXSn4cjNs4Uy4Nae1fwcfTdCktCi6sEwrRUr8vw9GyJwoGckzNF8Xcv",
  "key11": "49a9nQaZ9Riw7LuAz2SyQna54NpmEoyGgcj6XEurxVExEjwMgVK57EpAo4p6df4bcRzZ7QHkzXNjficUF5SikooW",
  "key12": "5cFbkvKMKgpeoWefCMKprsgdn79cRzEV2xUnxPYfd4w4AEvvGgSVfzSeGMKvrKFEDfdng9wD6AijJxbpGpWyqRZu",
  "key13": "26bKAgveJ2v4znpoCeT1iz5HiAYfK84nggp7XyGopvRr5aBy4PVHntuNeoZbbr1AS4YiX8zNAU5g4jq92k4K9sRL",
  "key14": "67jio91N6aezuKimiWCJ5niPRbDbRM8YrnwykVR2yTyoeXAFKgisjm9JKqRAoh7xTn28rCBSx98s1xEUEAAWptEY",
  "key15": "3skjF5RB5XicYmj2mZMGYneLyLashBgks11cQ3y4R2rvcQKkGJFZePKad7LuMv2Do8GY4dFrcobEB8TNqMujodEX",
  "key16": "2Sb5eL7ejtaEcfUJVEmNdjtnNc3PxxZmiF5EX3wsJp6CyZ93VXnC7XDxwpCfRE2ue78rtc5RGZ8UZUnH7oje7ZXU",
  "key17": "3MZGZdXVhqiqEu496wRXS7xBr7pWjxpktazHPHvxMTgzHjU5933vrtKPBkTsZsp2nQjC44JvGVfwewRbvW9heh8k",
  "key18": "3tPXj2tA3V3gn1WsUk7YxSjxqoth1q2cMS4odLXGTdoyYdUrUUCCiSRi1oESrBQbjrG7rS2emZn64ZByppQdoMbK",
  "key19": "3qTtWAdpKDyYR1cHKbjN9gSnuknUqYE6FE2BeenwqMSfUNLGnGXZu7pckiqNZ4yZMyfS6EYarpDhUXsxcomC8HPL",
  "key20": "4bLWPxjRrXnTJn6gwGKXzEzUaGbi9kx4qJS3Q1qvum6ZxM8WVNAiAL5jmWggS7C3FVd7mWsGcebMDH4EsJdoNy8w",
  "key21": "4xyzHWDnUM15282RSXqNHqQwcLuo7qf8kUWgMRttUGWcdwbgPotgvGbHAxKJAcwyThqiT2Qap8F65odGbkf2fG22",
  "key22": "4MeH8jMaettQ1iuy1qw8JoWSEHwoYq3YGfYSWL1UpouaKfJxjzKLcMyhbbzY2idCbhSiohVRGfzwskJEpgzyNCLB",
  "key23": "S8A3RotPoYQ44ax4d28LM5cp3sDAZZeypia9CwEGmLsD1gPZR1k6h8uKAMe4qfdstXonHh9YgRa2tEbGBCbFFGT",
  "key24": "4wFCA95Kig6bRNa6mSqpfZZcxW399bCHn9jW4xwKkvVmq7u7TWvfhSVQA2oSi48ntyZZTycLiPRWXtW9iSdm43Pr",
  "key25": "3hJoL2vvdK7Skwnocm8BhWrLgXdcpuLznpvgS5EoTwrfs3LZLxRquZX1PNEyAFDbrtyMDTMc3cb1SB2meEqTYDK5",
  "key26": "2FvzfsyG2dp3E7J7JYWEMsk8Gprs1FDqyhcTvgtVvJJaf4cmEnTXCZzvyUUzqyh7xzUdMZtvxMkHpx8e88NKTeC5",
  "key27": "4wQ1k8cGp3JaUg4Ut1HbBTJAEVCgrBe5BJXvAAZsNZsy9mNHdz8227G3K16bRxJTFG1i9HcykLGrBcWjkYRk4uAn",
  "key28": "59gmgrxA2rM9YX2uYWMfndYim5weG1eqFfmXwhgkjsfUwzkdya2AAVZAnGg5DaDeuPNQs4dPGvG1mmgmPMgcddQy",
  "key29": "7tSZcHCb2SPKCaLUY4Cn8pFZeiCKRT8FhsHuKUvAT4WCwLD5LHTbuseEffUDq68HupXQgiC6mxctopCFXHbyDm9",
  "key30": "37bM3JwESC1wA9VwRaBSoG9xCj3fLz6VoHpCFtw4fYzhiRRLwQEobRzmCNEorAiEPtNqHhktLNFRGjt5hAZoUtBZ",
  "key31": "4376UnNVhMh4k7rRh224JRbmZetJGhmc4f4gZB2BaNFcwt5Ms4Dzirrhqh2dwkA9zvqCLcrV58oTUrDoDKwHmttq",
  "key32": "KCC3Z2puP8VAUuytovsWveAVvyxMXbPxgPNfrKHxdJUp6RhtGB8Zjo4KAWN8nW8VW5XSZZFpJsRsm3hAWvGCLQJ",
  "key33": "53GzL5JdCN62vkiDq4QRKqtcSw58eFxH8ZqTakVYfBgbx6jTGeBnQXKYZTXMy24KBoAeJgazSW23GJawnw1GHjN",
  "key34": "wHxwA9qqyvBvDtzf8m7yUWxuKYqAKnRo3uWLoe84rVJ4rUkMLhAuF444Wh3onRSaLpt2fQeQcBDZHNmRAbCrH4J",
  "key35": "5CPbjPPntzAs539DvaD2tvrZ2tmRAhaRaVvFb8LZvNvNDJYrFaedRrTTu9J4EHtSMfdeJELgNjup85P37c9Jmm66",
  "key36": "5HLTnM4yZw2zHLxANSv1dsrx2ddaDYMwGSbkXnkjdVeQubcyPeH9nDH32vL97awcb3yZqQejUEkNpunE3QcDGW1q",
  "key37": "bazbDmQhS7NA9tNnMGdtRBmwjka6sCsFhX9d4gDnAM359EqE2tNpAJ1z5ravKneLZ7tT12tPWzbJwa9jPchyams",
  "key38": "2a8rtdZDcrqPD1u5o1qv9CP5yciF2TtaeZavP75JruXgo91vCZ6TkmMbvmdqARth5CvdEfSVqAugpHsnUYY6x4QX",
  "key39": "3pfkXrkUdeL3N3EZBZE1YE19Sz5usb9jUAZ7EkZbpeZEArHiqSxkudvMJsjvidgYVkV9xBpuiPUNZWpFBQ4xGjzE",
  "key40": "3w9zJfiwgNKYBwSDNzU1Unr9Tt8J3SnZdt7twyZawp5ApxChrmRTeJViopsF5WWtYdzwgc5Nd1Kcf4fKQ8EBmaXb",
  "key41": "4xzvfpKDgofxnjxgYTbyg845ufEAuwi69ynSqJcKYpBwZCLHgaFaAPs7pY9MtegortUZTjBYf9fHtvPvXxExiuYd",
  "key42": "2FujNn2vYps5aqJh2EcjuQJUidejj9VoNC3Uh8kvVYoH5BrRZWyRETcTunL8NvZtRn8i5QJYhJq3WrEGB4Ry8vTh"
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

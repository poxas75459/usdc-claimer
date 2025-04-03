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
    "2spFkbpfcXMT3cFwh6CabX3DL7JiZcssaVTDwdDP2mz7zWEkoJYsxhmKF5VKGvbNeGoiLKfMN6DpeeWwq5C9MWAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yi66t9gb7LbGUN6frsfB7gStorxQUzXS8PdE43h1avCQMJ2Kcj3JSTJ7EQ8Gu6jgpKZAcGf3DUe2pxBh4vaPpXu",
  "key1": "5DiZQQwERyhe4uAShQfrMCgfUN8JqnLsG6bTtm7yi7X72pBGR2uiCNHvZJ9f2aNjtSy9TGHBwSuYpp7K3FCxiSex",
  "key2": "4UTjNoqK6is6U4oQ3wKvvJFVk86G44Ky3FZxUcRALBJb5oVS32fftUvDMqmu5U3mxZf5rUttnRWpitXbgawrXMeS",
  "key3": "s1fPU5Wy2oWWcdHrQx5rXBdS8G61PXU9p8BXV6YdYFshd4ndVzFWLGwBKCt9zCnNrtaMKy5Eobkv4hqUBS5WJjD",
  "key4": "2yr7jwXMcbKh886fA6yFFKD8ZMdnwz7sPrHr5tUG9rv3NiYJ6P3we3pKT7Uu89c2cBL2h72SW5h4f2Uy65sMGNiz",
  "key5": "64bjRFSp77WpmRumuVWuYkcSTykZ9DpppeQrRs8yxgyvBthV2puEfBfPoXg2Z2Pvb7ockbfg2dq3G6KzxCSbFNay",
  "key6": "2X4Aar31cWUu9uhwXustWgYKCLM2kJh3XUX6QaXBS9YssLFUPZ3ZZv2o7roG6zshnB63FgZAwZvAHedXdwyWuaez",
  "key7": "5Q4UWPJt1DgMwDkePW5fLNgaDZnVtHYvtwbNFtuowqZFRL6rVTgCtWLeMdSFzdmaHNdcTyrUSxtr9i6KXzWacWCx",
  "key8": "2853oHLdxyRyhvrAHawnKRmBHXX6sYBo2Mq2ZpmDfov7Ng4BTbfesdxFE43jFD7mByGKgCXhrntDxaFAPViPHHvr",
  "key9": "41kM7AZpEZMFMNkYt5ALxQTHjcJkVsbH5VHPTqsZWdcWRNUZUdnKZjm56vAEu1R5gMJrYrjSLX9qbHmJceGUCRXv",
  "key10": "5Cqi2PK8GnHHCXpcYAmcWZ3LsnzfhYkdyuppyghMYVnpyZSHNZEm7UwAFLZZS4oTzvsFhNntpjL6J9pwTWzGbwhH",
  "key11": "25VuekBMzVFcT7FEvSXEHsTFUbSex9ziqeiMn6phchGAJiGHCKFhabULLiES6quZy6Pi2Barv61t3dq4WNJ86SSF",
  "key12": "2dJQJmrBh7Y22Gq6x6qmvnG3LMRKmMRasG2LzJS5owrnmsQ2nik1HVjcwinQTm1KtCgh49DKD7RMyNeMcD7C7YHX",
  "key13": "4FvExUVBSXVu7qArEC5dKbckU89YqJVsQtpJqkUH1X5H2nboTd3NEofyCcFmvMw6jaFk73P8bXrMjXhmMk1TiqrJ",
  "key14": "4T9hPP51fEQUpCKBgTJYtyMEFxDZzpBJHB6eDg8jFXAP3rZ2AEbRdq7NTkc7SxZ4oai76zHyMagDnD2WvvHw3f9A",
  "key15": "2ehJnvrqMNLAuapzpbJEpMZqzfhNUod3i5NxUUTEzZ5UPfMDTCn5LMHnFhX5ULSbvyu8zNRwikV4xzYZHnYQd8oC",
  "key16": "3J8htAFWmbgKwRJgcz8HxkjYi5dAJTrpNAunqfqWGqEW7aip1N2czmMco2QyiVH7ARtPUr5t8dH18hs37iyMNM35",
  "key17": "zUkMnf8vxZi8QT4dpMZwaeMrxn7TbGrWX7zXYapZwETvAJhfW5nGmrgPBkFbXXixWWvbKAxzyTV37oFqiwdLouk",
  "key18": "2crdeSVVVzLjbuSMr1VAMJ2G8k3P6bMoSWeykrKoudkhFBL4Z5vnn5KWoXT97VPNv2bWPJbYVZp1J1BxuQU3kj9V",
  "key19": "4PBvSaPjBJp82VSXx378M9SK7EWgGHceKYsib867UXSJLy5VYCmnG1Sk9WEE1Rkjkz683WqBTpMtvZDPNGtHs97g",
  "key20": "3bVGTzybU98uGxYANgSGVgRbcYFxgEbTAWuv51FhLrv9PRCBLW9fzWBJL8e5GPH4ZPxSGVbCtsXHZ8CnmSGq54ED",
  "key21": "7vQZ13FcZM5FfuWriTS2ZsSKdgQs4dZtdHJVbWRDzYCYbUscNgoXwJE5LMyH2hmrNJjA4fBs3hx1792EHqWrwEV",
  "key22": "5kmZSK2gb78CRDEx7WQ2fg4djbF5Vnx44ygvdvf58cZSZPZv7sM8T2T3Wxjbkt7utfnuhjzKW17AXXj11ffEBge4",
  "key23": "5yroqAyJmtDVNfRcSDugNftfQrdgWPxy1sVVgiTXfZdBFxsVPrgASNMzHDizNsecvJVUtaRPvaTxBqCS916bYTKo",
  "key24": "43LhBuPktHc3VwxUnEQuF4guCowo5gMxqPLVsK42GWfUExwwCDdp3EURDzrXwc1TTBoARLRA7GFHvNNzvbo56kPP",
  "key25": "5i8wSwJyJcSHgoASCBHnTM3wrmubVGX1Gqu8Yy3PnE5T42jaXxXr8AdtwDLYx7w3aLszUddTRiQE3fgyBn7HPFhP",
  "key26": "5UznH8yynQqgavND7f8AMjNbMq8rPu6ihBaJo9pmycrR47vg8ytoaRia56hSdqA9jb8iPBTwv2tXUQbScKyfiiCz",
  "key27": "5JfxVweUF9QeGceRduJcCiFJ1C8pPe5kpSW8ZsQQ4AEFig5RLLp7jCLQ1CxVBKvtJRjHbLofrbacZnZwvjgUkUqU",
  "key28": "3o8Ef8w3gAxPfZvKGLZwhYMgbZJZi9UNPsypLLZPzP84nwsc1MdUW5vojc6FbNCWSuoEZm7URJFCYc5mcKHjAPyY",
  "key29": "DgoiHRJtf6T89QtF85Nym8QDZQkEWgaSLcLm8gEgCosqdyJnMsKLtZa3EZtddwqEUYmWbuBJDHgNTHBVLLTephS",
  "key30": "3kRiWhaJZof8yZywfirtPqBTYz2reBfGne5tty12MhyiRgqaj9xJhFatdpe9nETSDU9AusFUzNd6SwqjD8XjJkXK",
  "key31": "5xU8JMMmu7rMH7YJegcQzkY4wbonEn7MbGWGW2tG7j38eW8x3GZxp9byoPyKbhpSWeNquHvVFfDaK68EtZsJKTuF",
  "key32": "4SEMPsgsH91fksNkCTmaVc7zaXa5vzuY5X1SEjbWFAvLp7AinEGsbnoYMFrEmMgB6J2aJqzxSganz1gvQgRdiFQ1",
  "key33": "3y9HCokH6QtFRaAc112PCfmQtoYgHT12s6iovv1pR5NX4HiSuNuqoMCjQnc7PhUhESzeMVCsSqA7HEWkEV5tJs78",
  "key34": "2iP4oyAbgLPtKZfNc2tgxZ3JjmfkpVXv8dyFoFQhACXKnZHWy5BjbB8bMuEfzoofFjM7a68R2uYkYaEuNMbrddkx",
  "key35": "2VfWaJi3iZcjU6dwcv2cmss4rSg3uvqag3nPxZhfKMnMWws2sSWoCnbnSKdm4oLJATomEgG2jt1gbQG9n3cpMa4D",
  "key36": "5FUQAaEtS95n436Jp28yBPAa5yVF4iNY6hvj5hXoU1DqhtycJS6gVgQw6YhgiPHkWSNgmc8ZXrwrgk79dvVW7THi",
  "key37": "2f82B1Jo84rzJhHsEZzAMVjmHLgj7o4uhV156G6DpxNRuSAh53okSpbCQiSGACCmFSge5v2YU1c71PuQ71oY9Z2R",
  "key38": "VvmUMbnCJ5YDFTWM111tpRkWrvMj78ns18ukSQrLz2yi9SLyMRa9QzFtm1a2hJioFDuPa6PrdMP4yLNEdNMDXab",
  "key39": "2HGx8msu9qX4YGMwguuN9rLJFWxr54anLDnsRzYHJMTeHb9dvkTgERL7CUiA8pNkkRzE2C6Ca1MqnYTbHYLXWkjK",
  "key40": "gCB9YfHuPSyTkasCbRkyjwCpJ4DCRqF4mdiqxjxY3FfmXgXaP38hW6b2bmRQSkK4Ns9dHYfxv4GqohmUF9dsjFs",
  "key41": "5weJCSGgta5Gxpx8sLDrRVmZBehQSMk3bH32ximmbPcp65UZz4VfVPkK1NM2FETTDGjav49gwaEUgGWqDThChATg",
  "key42": "27EAb31z4UHk6KZdQBaRaDgj2vNmEF9wSuQg9fmvZ8FfYSn74xs5KFzRJiVDDGtmiJ3ATUsZq3di4pNxASJWJFVS",
  "key43": "oAWGTkrkaxYqAHhjV2pbdaPKeAjxGvv5hNr1H6iTwrPZ6ePZyekAmb4GzFadbxSXuHjRuAndjNFp14ZZ16h3BtM",
  "key44": "5HFPuJd8P9ErDNiPtqYoZuejFTaiLTojuEXLNzgyzHYRGdmfAH3m4Vu63rD89F1i7x5tocHcZP8gtcJPMFF1HuCg",
  "key45": "4fUnFBeteCjPpGNPoTEVp9LTChVUvD2QU3THBJn9VumZQ691FGKT6rXp4s9dyGNPoVY9Jc4PCsQUTPFwRNR8vAD4",
  "key46": "3zFwkwgwPPP9McjECRyK1qw3k6urXUszW6gQhJEfhBjwxgArbzYmpBfWEF1V53oeKyuXevV7cD43evgSFTCrXuAM",
  "key47": "QmFNKBeHBsJEbpmCDWM58LVjbVU6BpoSgjaDZMpvZ61QCUQuBaGRCNts7ZekhfpRbsMQt7MAGvTnU3WDTjWa6sj"
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

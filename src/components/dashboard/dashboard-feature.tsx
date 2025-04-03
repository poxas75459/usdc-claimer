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
    "2oLpEVAyMPx4xDErHLEr495s924qAkcGCU89Ee2Xk4LjLsM2hHzqa4LW9Z1G8UytLFpQN9c7DunMrDim8rqmhLSC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21KtUZatKRzZDetibRAyLGyeaGEMtNxFyxXmfbtnnANng4TvHzh39WoZQmRgDdojo61YtAPa46uUMUgnFPmvqa5L",
  "key1": "buhNJBQZeoRLqoDaRw3SoMyqY3Hj3YVd6fS1q1vnfCPz9tPDaVvrVzjfwXtJRGR79A3yhKyAKeJanu7TEHdAzdC",
  "key2": "5xvoL9aPWAfE4f3UzvvGT9V2qoNZ1kTTTXY1HGD4RSHfH3JcMq4bEYcA6A3gPPoUbomFK8vfrzLmbaHVvTU6nJae",
  "key3": "2iTuYrVQvL7aRDRfDWWmZcU6ZsL6MzshbghXDSdBSkQD7bA5CntuvVWAjXcGkWhbtc8bTcWoYE6MVEnE8yEfPiRG",
  "key4": "5BdjiBMUWaABziQkPQqyExJUY3yWR3gGPoHUe8sVuHCNkdEVMicLyabLwPuE2X1QjvDtST4DRf9Ne9LF8kfT95Ro",
  "key5": "5NQT52Czs9qMddX7EjYo5FqREf9qmFhPDw4WQjmmJgpFwP2zDJPiM9d46ACHxv8NaukMgVWLcwxDG91WwZyeHKh5",
  "key6": "2rYesbgUyRWz6kvMxi7VG3CUR3HCGZDEZMyJr6w6MWE1dRR2mRrnLfEpbEHxmgv4Fizjm6sAfjtiwwva64ozZ49v",
  "key7": "56n715LxpsbkNC1ZCEsQWrUmtdsvAC2qg2nN2QQqMa3wv6fhCvf8vePWGBPggqH3Sut9UhLcwkodjZtWXNvcxpAy",
  "key8": "267zGGuHeWhbpwqHcsPSdDwMtdigNPZQ1iN1JepoKJZDLWfvCHcA4hFgrEB4yoGHJy2dkRvA4wV7nQ46xMvRT8tq",
  "key9": "5QKLAHtSxQbpvBeLKNCtefhnUbt8fnr8rZnPiPB9Ae4661r9gW5HFrudrk9CbMUg2m7TdcVgBGhVhMmyMYe8mbzn",
  "key10": "48McGtxDLTyYoWaymfKvLTqjjyHxqtnKSQqw2Cj7sN9fhrdE3fGD9SksMYdts6beCh815CUMZKVGtqNwJTANrFK4",
  "key11": "23FyyTCa3x59JaPFbbLEUfijxUtqXHofkgNJQHcsgkajTG2WAWZP4qG59A281Lwy4NErPwUzT13J5A3SsXxtB3rd",
  "key12": "2Q4iat3RuBKKK3Ni1BKKs6SdQdn19D3wnyg4koxwFz34tLefgC2bxLu5bDfmj25bbuvGf9RjCg9uKuqXVsX8Df6Y",
  "key13": "tJSfe27BGMtwo6GnkUVnn6gUudg2ZwDUN5STfED4nauPG5sFGaZ1jyRofBEU81vTQutcC4L25B8QiTGi2ZrciTk",
  "key14": "5WFJwSuSBvWFS4YDNTCqGw483RHa4Pt27suhTtCocAXG7DpCGbCWmxbv3jiWRmsX8FCDUoTmsuVfJeBYvWfAzebA",
  "key15": "dHuFRqZXipFDbKja7tbaWXvc3yuSKkpT2SRjv2pGiHN5RBDLYQZEpqybxGfSBNyxnbuGLLkRuARcFem87w2Deb7",
  "key16": "21XdSF984n6akzwr9coKZPUjwSkSmVKHAki86wS7SH1apAcvNyJVJf58UQ2yJ6adh7dGU8CPgVJdBLwbMheXVrR9",
  "key17": "2nQfAnxq6wDVwvgeWkgtqPBWcwdEDqZNZnECnQ1hU1N219EHbhuvd8jLU1kJbs8v9yWSf27FZgphgvykTJ3GPod8",
  "key18": "XgfkXUM5a5uRGXDXohoNEp8TURtkE4PSJm8s19Tc71ZSw4gRXp6H8CYcwpdQB1DksLoBtPhZnCGm6u5RHk2Sw5V",
  "key19": "3BowKp6o4bB4QjyvxPM2kGSfaW3LquCXSqJhEwmRLs4goMstoSwdmp4QqqHreQcDqvEr2CcTY33yrvBKZoquNTa3",
  "key20": "5qEzchzUBZCGeCMHTdo2C3dpVEjJKNUo6mNnysiPCkvRoBcB4XE7ptcRbnWrbvx1ji99aVzoEfFHjQyazA6Fu5z9",
  "key21": "2zGBaEtyLTHHbnkQHF7Duzpt4c9vzv7Un1LRTyJPWaQj94MyNgZf6D37358U4igHbTJat8Az3w5kg4w7Ra17EnWy",
  "key22": "2DXjaeG4fQrGZSSqEi7TvZxnriwi22B7g2qLqHrtjwvHYmv47hghjF9Zye22h7NqghHNp3gFuchDSJz13qHPKGu3",
  "key23": "4fK8NR5yhZeJ6SiS38BDEfwPNafNkHVQkuJZukmXSZ6UsURFx9LQJDg2mp3DqNDP2g9ZzPMoiEJMaFGAzFtwS7jL",
  "key24": "3HibnB9KP2CNptnj8hkhAqWZ7YzMfK2KmwqP1zKHXd2HR9otfzsxT58RpoGCCQ2eF9yGimcpJsv2QDiLEAqSGPQd",
  "key25": "2VD4xfvL2cT6CHszMR1oLar9jKXsZRvidXawA1iptva1h3avRw88N3EWpzhM3WBWbinF3X72FKs4ZbUhKmrC5pwG",
  "key26": "5n8Pz8uMi6wKsuZgqYxqvPWFuxuaf2R1BcWY2mCvVQZDgT1BdTQhJ94EG9KAUmdNjU3JbaxkZnZMP5ijh6Dn5WxW",
  "key27": "3gjzqtQsrsUuymMfwH6PSVFDBCU6fadT3GgGjbyfWY6FP8vt9LRVa2C1op8jXgvmzFinXeT4GdSAmvfKXugkSqXg",
  "key28": "tyKo3FqURpjVgcVDQqoAT9gZeJMhJ3dCpCaui8hapxxPWnuX1KuDdmjiyzDE8s1MJGNSwWihtbugw9qKBFoiDqo",
  "key29": "2TgQ2fJfpHCJPyL8QEvirHyuYxDjRheCF4gixxc9A4NFd98rQ36p9bfweSQugYFZePYHRdWreWQbbk79Jn5KSHoX",
  "key30": "5SviR2Whi93UgPbpSTCPF2Z6ribZsU5Yq8yHALfSGSm6aZGTXtJACaDxiRtoodZRBMjtqfmQYPjMmQpLxEp4ACsE",
  "key31": "3W4zEq77oU8V1xEVFEbQ7qCU2ggsNoaak9XmjQgjTiPF7EaZi8SdKGxf41vZDsNUAxeacgsQa2fda27dVsHKUdVp",
  "key32": "4fP8aYjCoooxQbbDM2V1pEipjXfpoq8cKEofKH167dsu3YQ8znf2G1cyYaYBdJ4dNYGuX9evQSP2X2KdvZfeEvAK",
  "key33": "GEB1zEa7KXS1D9b9iw684q1FWsBSjnTAjKEWZ1YRJGsYPHXoEszf2xvJAtdw8oMmovXGUSgPGrfYvSp2NpPoY6T",
  "key34": "sfCLrTLA8cNQpTd8DhiDQaygJAHbWdyKtAytQbNaXCX1SzmYEhZDBmTjjJnxVX16CZP8x3gine35dsoPTbrzrEQ",
  "key35": "5U6uFmzEicYP9JVU2F8cWcz6wt8q11MHe5yPPNnnMjmvBXtRfJFkHiGcguApTuaEhAe2fKTs9KKMkV3QnTQ7t1S",
  "key36": "3A5qiPiwxNsFPaztCh7RPyod91sBTGygShDvWGP7iFxDuMA9rZ6nacvXdNNZQwAbaTDRTeG6fzSTkkW4Yoj9TFDx",
  "key37": "2JWBCdfaqyrfQVCHJRQ2GXigPoe7BmE6Hq3uoa6SYiitSwzEzx95TLCGmBMpbzio97P9W6SwgLv8oFNRx3BEerdu",
  "key38": "2gCwRTDrWomp4iKyAhQMjEkhPRge2qastEJ69QNsT5NUBVvxcHSPuhh6q3bVq7p1m716eL4tDDPtrJZdUraaa1NE",
  "key39": "acQcA7JeFmcG92PVUDexRaxgB9RyJugvMNMKrsXL23EEXuecEG2E5LWt85WtwK9EUgVR82keatqrEzfpY8WBbnj",
  "key40": "4nfFaqdv6rBMHfRpx6zyPkFU9d9b3tjXGKxdZFJWtB3c6qzxm6SSVNGq76ChaFcTch7DxuS2FSWVq2dUhU1Bwfis"
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

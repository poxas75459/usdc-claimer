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
    "2LrRYB1ev5LDaBs8gQBPNAzUUFeCiBeMTUDVyAS9W7BqDt3fcW58K3yx4PeCYgsch4RQJB2NxbA5C3Pfhb4XZLCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HWZC9187f4FdNgQgj25iLZdw6Eqbt2ckrk7sR2kvmy7dD1ykTcZpFBXFkZbxacrr7T8p6igCB9xY478JihWYV3r",
  "key1": "nLBf4keFKmK6RRMfc4DVpr3fvdGUUxNej6UvgjF9VEvWM8TdQpJqnq8vk6PkuVaDrRVFxA3Esy2heXam7V96BsL",
  "key2": "tH32hoJ9SZF7hgvWDefzwUrGnsRAqcpQbvfFu1g1aRSG9FMStX34PRSQtiDQvktBeN4yXv6AZ8dckCAxznfWpZd",
  "key3": "5qte1vx5Z23GHjgbfGEKg5zEa82EyiMSY5eQkFVBCJdGQsJs6NwhvoQc5YhE9mFn6kFZtDukY78c8vhs7KhtbMez",
  "key4": "3p7HewKoVVcJQG6ZsfKayiPwWHUjyo922GY7JfBSsFFojPamozD4GoQyxgAWXeZNWpocveiVAZwuAZhVEQA7UK67",
  "key5": "23Nc8e6yvpU2ck9eiRzBahcjB3DmJRG59yyxMg52NtFX1XLd8TpyKLJ8jbuPnU9k1X1Pg2bCNTA6uw6mdYAwJDLy",
  "key6": "3JGb5bwRXsyDjkPYqSV6DjaPnDtGD7oWdhuMuad3GhpxkNYFUrn4LTFrP9KdsybKKUZPT9zGkCL9WW3LMn2ZMGn9",
  "key7": "4XRXboVoRWfaRhiAHMfPf59YmNoFY4FgZdGWLEdriCqQVqyEwNY9VDne5rogsu8tRnEAhovKkkt7MQuGX7cLL7tW",
  "key8": "3mzehud4mQVUXdh2zDGDyAkf7STX7dE9JAVh5rCzhsef7xevYrdjYUCsTFQtehWA3wJkG5F5TqpiTfESUwLSenaA",
  "key9": "iS5U9xForAgEphKMaBxvQpzW6r4XANU4FS3CnyfmsgZdb27YYXJScrEm7cfYMa1dZpWWyGobqD3dbTyWja3Pi2o",
  "key10": "rj7xE9CGGJWDY1JbVPWCivc5TRqcecnGTBZwcMPi4z5awf1nVDYnTKq1mvzgkMFUGi6Lwj5itby3fep7J6HarVq",
  "key11": "5mgLcdZsnSevKTguHoheD1XwyHGQkD7we6b7GDjbo3arp1drFjk7LEFjCPqhnm2TnFLtwTbiZuaSEj8ZoqVum6Mm",
  "key12": "8FkXkwUUEEwHmoS49NvEAX8kfVbsWVxy2VcnGAGkusHQaMg3pp5NruhGeMswta3s5DZ7UYeaPCc549Z2SSxtFHs",
  "key13": "4q7zCrXVXjiYKwKgx5av8t2VoSF2hU5aEwSPa9yjcBg1tPooh32xJY6TAr4byaM3EroDVYTuVpZKxyqWqrAVPLgs",
  "key14": "jh7C4fuVSGFX9iYHGYqST9Ff5uabovWEMhVUNsxAPeTb8VaDAjn3uLC79g7jW3nuuQBAsrummVvrh7mZaGm5tCc",
  "key15": "5Qg5NCcgTMxtpn995qjbccM9cE7SLKxFzzv8iKcg4nGfJnuhpX6ToztXmCpWy8M7UrSDLH6nsYPLiqjgaHWcCHuo",
  "key16": "5qRHsJi7u9DrnPJ4cCLKGwtQQ4tTMZGs1Vqx9gAjvpZSXYs4NU8BbZwH3u6cXou5UKVJQpeqfFcXsw9dSob6t7JS",
  "key17": "4p3yqW1TsUUhL2PtmXZG2VPmfbhoSE52SLoJ51LX9tuqPZe1wW5iGi7LFG4VtkQViYQLG8kSbv4tPDYVazMZZe5P",
  "key18": "376dFopSa8QjD2ogyfdrmoRAnKTJpvDFUMrE5w8VuYiE5zQiLfP1vtUbHfXJti6mD72EVHYFuh6TdyMvEA6EqWW2",
  "key19": "3jdAjDA9HSjF7UjMgFnWhrn9qXnvJsyi2KnjkTRmS4MkdXGhYZWG9yinEKsDesYQABXt4xvGywumagteUGiBcJdR",
  "key20": "2HQNh8h5qvMmNQi6eAYStd12Fg52rktQxFw9Z1vNKLxC23aSmXBkYWXrxwut6F66JNYU2btitToLTdApDYxMMmAh",
  "key21": "3mAH6hmkAzJcDfYkVpZCd4ZeftfH6rFvo87QrmxKfyDw2MhR84ZMutN5H1XYZgbWbhHevwhKV66rg5QETZM6VDVY",
  "key22": "5FbyViLKuMojPuT4wJyhovUrYro8AL6Esg3gk5FmTUuSyppF6y78Axc1dc4VSXJU4LEpSMNkk9trQgUQc36szqcu",
  "key23": "5PNMhU5ZFSQGUVr1s1fTkjrhUXukDerkg2Brcj1evrYxtGYytwh2XjsGr5wQi5b3f4qKyaPBHo76ATGzg1ji9Tcv",
  "key24": "2ctBBCSfgnp9r5KUrUrJ9pPNTg48PMmKofJEhTunTa2E5QFojMEbS1QtowPctQpjVwGdc1gAVqt1PLWhWsqx6VhC",
  "key25": "5CAZ1zU21rkbTpF4XKxQymDnHbMWPSaQefUophUJe51JwaqzFhmZiTgDUk5FqqLgQG8WQkFkpN4oo6w5HimPG74h",
  "key26": "25v3CUYWFhdRpTz1x7f5qxfTE4uwwNBbQrrnmFoMVUyPd1mXmAP8YDVp2L4BpZPMdv4kfMD2n86GDZb5hipSPmSk",
  "key27": "5B75TemVYoWJuKGKujTBrb4oUAWUMu9fB2WMn17KScS45sArAv2DJtrDy2aqubVbo8j4iVNHM4CW7TrLoKBWY18k",
  "key28": "ZTsjKQzEKtGFpCFyiDu2LVqPDUmFxd4yzk9Bx6HmwNanLKvRhNPeS9uQJTZ5Riej7TYGRBNYHPD6YAKUJheWMYK",
  "key29": "5bQHtGCQtLVSKQoBmDnrXTPwxke4SVmQ49cjQV2K1uHG7VkLGHHFJqAaEw87UhbZatawgyPbHEtB4b4UGfbcxF6f",
  "key30": "5dKKJjFmWQsvs2LJUpTiKut3rhFxz47V4dtDyDqSbjvMTbM4oFh9DRJrnct9D5PHMUnxGTD2beoU7hEGTDcAoz6U",
  "key31": "3tHvZbEAYqYcnTkqKnSncAb5brxvtQEY5z5rpNFMHhzA48cak7L2Jq1hYyaZAWufu49FDx9oSLgvVgrHCCXfNiuv",
  "key32": "3mtJWBc93BKeQkycb4hhJzorvvGHX6p397kKPJ4bBcPpYsdEP5BZMsEAmhPF6vRXsvbwtPfPum4A1USFD7HRsius",
  "key33": "4Qpeig4u24SBMF9LDb7vebVhzijHX4ug5rMnCxNJqep8EgvAoNq6zpr278baQAqSKjKyYnmRc29ngH8xNZ8rR4Gs",
  "key34": "5Jf6MUkjVwtrpzG1thQWGYa1pWccw1r9azH6ZjJYWvmw3jbqYXASEJS5tHjACY8UNKMRxnzPHW85s6RSsnHjpW4y",
  "key35": "5F8VKZrjuvggfkbmZNdCqLfKSYTVcXswih5WYHNZ9rrWnUEG34BgB25MNaUYZjh42uFEG7tmNjsC6Jxyw3PtW6S7",
  "key36": "giLof2BbXHrAk59MVqyjPQkGTBLF3VfTRNugmp8YrGwFVRoaxy95swt4H7XxbLBtiN7Jy6u2SEq98RzNTrrGv4Y",
  "key37": "p46ddXc4MXcboK7GvdVnDexWgixCHbZf6gqbxe3HnibZsuVFNzGF4DBuby1i4T2zcdD4y3QYgTddrWdRcbdn67N",
  "key38": "2Gr2wXcFCmJX463U1dx1LNZLE2FS1cdPc1yEGZRqXL6SUfrZqKEzf5fXk45hb6XmFASqHM2tAk9DjkuCHUnC6oxw",
  "key39": "2qc2T899L98BWtr9ZnU271yjB4UnTyVJQZ7YYk9v8VwAKsZ7fPanSpoo2LugiWiYadJe5vyr6occBuywb3vHTroX",
  "key40": "4tnzunsVBHbwBVx6YHw9GRV9dHF5h2hPNkpXXkbF27iZs2vDD8QQVks293VYEe5vGmAmE32vWHZEtJ7VtpUjb3zN",
  "key41": "3P2uMpvHa961tX6BS2ewTLyCfiumP9okytyKyQDeD2qc4Kex3VQHPPL7ATdrtXqG2mr3ypx8fR4Ao5w6B7LJ6zrk",
  "key42": "3EGB73NBmRbB1dctUVTJbZsGVdxb1vy4a246Grti4RzNiS8Jrug99qrFn6Ze5RFPSVXf52uMBQTdceihGrGm2Dh4",
  "key43": "3KqdtUksyqR1FY29HmEVyTGmVNNKc3Em5Yn4jEg4DmPhpoKwpAvp4nEAqtZQMh2ZcBbdmNzbgLRzWtZBBhA6iH2a",
  "key44": "5bqdTbZVub4QBtKQHpCYfciJkGUJhS6JLPpKE2ry38cNsRsiBZBo1EaGi31DuCiDkVsZuJvgGHjZoFkfaNw2nt2s",
  "key45": "5Nmpy6NFurJYfCnrw2EbDrdWM94Nc5koPH1oLrzHmBJqdHPCVtymAs8NiegQTNwnyayLWYKAiryPcXYE11E5N46h"
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

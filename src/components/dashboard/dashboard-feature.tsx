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
    "DGwcNsc8wT16eUGCPrfBWQB8gFQye6jocAgGCE9m8m3vbJ1wCKKx43DdQFPhrNGodoCUV4MVtFLvGVZQxvHLRbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LgVgkSDsKu5gpKhwt1Wb5wpJAf4NSNK4wAaHK6TWkUTYaEWAKx9UALRJ6chpHddVRGCeyAR76BeS3epVuvopoJP",
  "key1": "2S22GcrMww3uxfxnj56mmy8qNEyGtPuLbx1SLrDenxANrxfdX3YC1TQ322yAvh6wkCAGBTdjX6FmnvETMphxiURb",
  "key2": "22mLhY3eRbjfSjohUq8bKqxnj2s7DyE7Y8zapgNjwzHue1Y8hCfGZHtmK6o2FXuP7mSxy5u6BZ7R8buzEJwRZ6DK",
  "key3": "ncUi86r2eWirGruLXAT4w4yM3JWafhMZKiJboEiuzinkDMxjat5PmGMUCwYwUvnA9B4EL3qvSdRUGpBDBKtkXvU",
  "key4": "2fCaqVxxc8SD3HhtjYsikuNW9cDdqswrZgEv6Fnrazc3nyHdwEsPj4C82tEVVDgfvURcXbVrnHvdzkYCqDnrxqF8",
  "key5": "M8SxSLsvEc97aTUVRpRLj97EbGDqogSff3yErCmuXGoYM5L6obNoGuDPQFfnTAvCpEnAiZFUUvoHmc92KKmq9yg",
  "key6": "3wfyaU7f6oecfYYXnd3LzMh2bC5dNpk9tjELXrwjWsrVk21KArDtRGWxM1dpWHXDADcFeNGs8NcqHmR3pmdzX8pj",
  "key7": "5jTmuHvQx4Ro3kx3EVAckUPvMdyprJj9sjn7vkWbFLHfhVTPjixs1Zc8vWUKopzhn67EcSfvvN6MRcvz8k5EmZo1",
  "key8": "3gv8iGKoMSWzBq8mY1zFoGNZxeaHRANU826jfYzy3YnFCcBC1rjfCBAnuc2sJM47EYuRfqLSc7DMbs4V1kE21LtD",
  "key9": "4aXUAoxozMfKFkTRptuiMsQQY7SEYczz7VbxHYtaACxmaaGGg7iv9QnsowXj8VrWfGZZrnF5q4naRbWD9vtV9m4w",
  "key10": "4waJsjByr86cmguVnuHBaQMmAGeQYLtibX9hgJT5dWYqq6WdVsy1GgbJZprFzKujY3XodxL7Pjjj3CNSrztXtP82",
  "key11": "48iDUdVTHvTACSzGpGWaHSENtrfZMZTB4oauBqFgb8SaV1YKqpst9pQ7dX4JTp3PQ7yhS1Ua9xaA152JnkRyEXvn",
  "key12": "4FXq68s1t5RRN3K24RRh19XKfgFdSwMUQHoc373KRPqxnuCsYWKnKHsu4EPefJ5CfPj5R2wu1jpDsLmNxXMJwdQ1",
  "key13": "3Ur3a2qyzSCYjQfQSNvrczp94NbQ82Ty5ka1sULLj7erh6oYXTxxGyjxgKcyQb2Q5cSCoPnEq5Fzr4MPV45sBZxd",
  "key14": "3xa9o2frBKDLSXAJsMYH6WEPu8Zch19TZKEohoS9E1egg4NnanNL1eUrpTY3RomLHb2s15ckEPSqJXez6gECpgs4",
  "key15": "2rVu55jP5TfuLMsK1Y2PRvatWUsDHUKx127fcp32kZUCrtH8n6fCSasQyxqtxneMxGwgVvcADPngwjH9trP9KgAH",
  "key16": "45DUBxWc2d6wLQNb11QND9C9jN49pBkQE4KwDUEA5aT6zfhf2Ceq7bT6yctpgqhXaMhpS7uAxUorMsigvK3oRJrs",
  "key17": "AwZCS2EUegthoGYYQSvHKQtXKGfQg1BHtnrTVUB2k1BSwPZvZWmmBhwR6bAjbkB1cCwUubXp92v8vXrxUJfEF8t",
  "key18": "2ehSdNe2gPEebVDXhTeXqREaT1YpCcWaEkacN3Bu1SkjZAGWedAEUEqe3PHw4HWHV6jrUX8ucnzhMvZi8TkmDhQQ",
  "key19": "4bcn6L1JYHhDWKHhChymUxF3HdvkBzHdFez6KqENrQhVLGvbK991PsQMhAZevfAQD9aH1UZjYHV2qgT9jNZasm1b",
  "key20": "31jU7qhK2EZzPuqWhBt8Bp4Q2JeESqvdp6eCYgkV6FpVxMif7SzYWDku82EEfrLapwKKNTtXiQv8ENTZhCm53DSr",
  "key21": "4bdxPPFatMEQieCr5sAiBFtFuXKAZq4ktPV8c7EdNQ91y7nE1P3ZP7HF6aEeCNN7HKo7RuaEsFmeYiw3seMp38oy",
  "key22": "4KsutJUtYhPLHHDHBMHJ5ewdiskRrGArmFpukgep1LwZXprs3H4SCo3r4Sje34vL7FCWqiozjJtpFykvc1yfALA1",
  "key23": "5mt1f5GJdThh7SSYFnRp9AFbbBvGNfcXiXe5qjNo7eVCbiy55GsnNwLAJ6fPD4UJa9zmraAahoXT2ss57RvmJfge",
  "key24": "39GNhBTsmMxTMUWhUE7z4328tcyTiGnTaLwMYVvRTr1STj6Fz2hcUY5j3vnMWHRvd6aeKTE7J8HLy7uV6vxidtri",
  "key25": "2xEpVieDw4k9ffQoXiGWCjMrsedihrqhkYdBuwu8SjQmDA5WRuHUZ9uMjC34dis3PjVb8XktutLECFJTC5gak4uA",
  "key26": "eNeGjcndRNpkjSTWabgZ2qyRS2e8ELHdpd4Dvx3v5yRjMcCHXQJKyLNWR1n8GjxBtcuerA4RVqaydaqdGBwxqLD",
  "key27": "3SZvdzNXNUTBj7U68qetNiuoMx61U8iYCGcotMnH8R3XdDm44axWbYXPL4umGqERSnFV68DhmZuqbzMwasrEGmT",
  "key28": "4Qsdfg3ny2nb4EeNzEUwDmg8YnM6aPEtKSV19B8isJmdsNKgxALGJwE1ThM63BHtq4SzPDk3dGFLLbgFqtMnxx48",
  "key29": "4DpTiezqaEfHCapH9Uh9BiQWQRLWDFhvZugu3m3W8TeyWW96BcrdiPtZUa8j2b4AzmWCS9qZ7wZz3mAqjJgGBNrL",
  "key30": "5BLB3EGPWdwxEboCCbGkkgbNF6mifxXgiuPZbzwnhi5VcNv4bUqRMGpgu63jb8hQWpHGUwtkZXLcDEJmAGwnNtqv",
  "key31": "5D59xGMgmCJ2gW1oVWnVA4QPb3yLpTi6RMKExa4VywN6X5inCR2KZqhXcakKVvzLL17Ksg8L6Nee8k1yPfdcxWw2",
  "key32": "3QrbDC46ZyHfEZicci645reUFHKUTvhTZYkruBVe23d16bfwKXusUUPDRmLsQt4EGoEiGzhL75NLogdz9igwRH47",
  "key33": "3w1GHcKNig838EYLfQDvE7EJTFb7hBWvZFVxFy4bnb9hEj2KT3txM1mXYyoTGMtcyNkxV53oXEwcEUWQM6YwBXo5",
  "key34": "34abwniWDu9C6j16q7muGu4CaBq2JE68qfbQcLgJ1oDvNJh7oCm9Lkup92LMFZfmneZm5WPJ3uDt7ewJp8W1VJ4G",
  "key35": "3d9NttBx6sR8ffkiYFj7NQU2E8Nr7xJUkrCr8mY4kkUJvu9MXugpsjNJEi6Dvi1ghUJpBez2vP6yNHhCqdDGa5xa",
  "key36": "5fHKjL17nogu6L4KWssfuXcLtfXKGarJb2fjZ9QVPGiyW7xdAYUWf2PxGdrzunnxGZMCm74U8aPkDR5XNpT84v6R",
  "key37": "2F25NDBZnyadpgumsoyyWeYfAsrky2mjJoGRTtRaqXvRdi8zmkD1XvYdR34kbZk8pex1JDhrgN8sHD7uPaJ5LTw7",
  "key38": "4BnbipHUWfmG2Bs9Fi4SE6t9sHbvxP3xtSXo2fVZRGv8P6Uqhke1gzrD3KwFpKUZKSffauoNjTiSbdwibVgecTeQ",
  "key39": "2hQM7dPKKygbHnP2F2TYBKrXnw13YyWQaCdvdWaSg3xkS5tBLZrLShfAuLznqV3ZTStxR8GnvmE6sNz8NS2byhNk",
  "key40": "5bJakJUoEsm22LRBNYRrVpgdqkSgNyZojwDmPPnKWRz9zDvZcEaRzVskfqy4YCRQSgCCqtxj6W29yqo8z9P7t6ro",
  "key41": "2kDSbKSssHaTACXawFNmKyqVEFKUDE2PMU4aY3EKDCXFourwGenfV8bGMhQ2iYG757mzzgJ67oVcRxgkFTNKRQZF",
  "key42": "42KrE48Y6CRWx2cNbt43RTqD64XZXUkMGQTmNQas6ztDnqTShhV4x4gvrG3S7JjBVxo93CMQzY6okCf17aRqkfqe",
  "key43": "35q1YjTQKvM2c7yp9SeNoEmpGt8QRtpoGo8Kii2PZoPjBXeBiMCSMkZGeFwvoeEAQZUZbyJcMAcVBykDMCRiCK9s",
  "key44": "5rjLjapfAqgStPqZUuvr2RvsKBn4iHnEseUjD2bv39xhdyLaKgodPScZGvBCc55VKNvyRXHxMrkXV8WAuRh97f1a"
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

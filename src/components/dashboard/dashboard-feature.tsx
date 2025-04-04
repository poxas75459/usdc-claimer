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
    "555h31rQwpNGuyoA2BBMKugR8VuT8x3v2bS6iJV6TkHo4rHJP26EX8QBG7ZKQiJK4RfXHKUe6wCcbosXwR4bZhDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zudW5VYBjbuXaaud7H8zB3Bbpc1nEMh2qQWGAk65p8YDEp4FNeQZipiGWUca4QrLZZeHgVjSSkBqAVQJrHScCmN",
  "key1": "4f8PL7LmrkHwhmKzwGobHxLLqBhKmtuXi6NCQbzfg4FfzLMKkt9QpzSkgrzC5ym1SMjzJ1NmkGww1QqWuNVPoJpd",
  "key2": "4BVJrQyCUaPoQ8si9jDaab3Hb7gL9t3paVWiJyje9t7AWjpJibRAkuR79R5a2MBxbJGYeWjSwU284FtG53iTwQdA",
  "key3": "4yYckuGbnKMqMmUJoe9ei41w3ELgvUx8CGPaBPwi5QgHFVmrhbNTMJv4myeTz14TKbbjodLWFgEYVX49rdPmsyju",
  "key4": "3pjp5ikijCybDdfEHwvqEf8em22QQooWUr83HbkDtNBbg6Qnn2iHCcdBnjYFnRC2Vtu355a8nvgJChenNZ8vV6bP",
  "key5": "3rDeT2WKibCFWw5hjrhjPg2Nzj7TeAsmugT27ZofSs9XD8FP1ETJ65We4E3oiYWEGyvyXMNUWgLofYXH1nhrysTP",
  "key6": "5cPJ54KFZJobKfdeVuxio32ryvZa3gsPyJXbNLsxvhtqg8ZFPdt58CbbXBLDY2t1YE1aepbXiY6thjn9a8bcSxFj",
  "key7": "d27jTuv1ZoPJy5XSXf96RE8GWnUtLxhk6gNshZPQFWjyiducMoCS3sHRCF6UpuRff6Ur5GBg7yGdLooKLifUR1n",
  "key8": "4JvphVbmpaYmb5oLRRMtvptkWWdVxwkCht8GE7CBPpmHiZUceiTYCabQAYYTq4Q1ycTvpwQHjuQUTtVYGWtgNQCz",
  "key9": "4SYDAwK6XGVQP9HAZ5KDxTmZ5GcvxEkVRhL8vn1rpU5xqpagfXsktgzi8W1GS41QRivxmWYVJJej9Ww1kVMSccCu",
  "key10": "44QfY494avRVoSZ4UCbXrQ3ZaWMUhMVWtviqwnRP2YMeikZx4nj3h8qrBKgDHjV4ZgJRweVXbAAbSC3SnKHbTs4E",
  "key11": "5qeBEMLbdUmVjbA8Zwz1RsvywAdStztLWMDnVCF2AvfFjtjYuck8JXFdYLKsZUeq6g31KRBwjFM4AX5wmNpULsfj",
  "key12": "4dSYW6U1xMMPQDBWvqKqetnJs9UezrFxjuaULSEwnD8zpuecdgZ3yAsXTdBgnajjdztXToumNRdRCu98LmtXe2yK",
  "key13": "5V9UADhEkSAzVPAvmbNST8wwBaxBBhHkyYcJsvUtfvyFNssZRJHDY9Ljccqsty2Sp6EeUH7CdL6aBXjhM3spR4dT",
  "key14": "4hk3B6okuESRnyCJbXUxJ4yG2qPDvHni3k7auwojUS1qxWmotczTegGrKxaggik56a5QV1yjiEHkMEbavqupYAc8",
  "key15": "5dY4ePpup4tME54iseZnuZjt6fJRttNYmMhR6bXGKDGbu8hGexACNzHZ71KZuF7fv7zkuw922A8S1vgF2jL1Go5A",
  "key16": "56d7esj8kchPH9ybnGKc5NxoJrtVwt4XnPXYkB85EJDxTBPEuqVRVvTwsZvhEPosh5c5y6jauX8WLZdHDFznyn9B",
  "key17": "2hCkpz9TY1aWSzfBHC2muG6eQraFs1CRstkornJTSr2VPNFGaGdW4zjJqEEqvPn8zmjQz4Yd6uc92bPQ4KEm9HEp",
  "key18": "5YuR6gVHF9aH7qDgrCewgCN8CHkFBESve5DaWyy9MASU8WCNcPrcMfub2e4wiEoxTXA6BnxxRipVmUGLHdi1fujb",
  "key19": "5Br21PXHrGPqQKpcAAJALCzuSFFM7zD2jX88fqU2NiWwyahWLqPAnf7oV4rkpNsw7DpTuCvbgLVXWndHkKB1rgHX",
  "key20": "3iVEn9bm7V5RUeh8rJRxFsfdUkNJdy8cQV6Ar71DFTxw9SQM8DtFhdkwwQAykePb3ov6tabHBGQEY8BhtCca6Fn",
  "key21": "4XtdxwtdGt8PM6x332YSgbwqmtYSarUqWDSCoMJUR8etQrerrt6iPsmWADGMgYqU5Cq3A1CLnuWU5uBrFLLtFyxH",
  "key22": "5MuBmYLLezFjdjchoYr6UcduAjsYuan9nLXEDJXqUaMQb8oYoYwaNENBNn7zbEDNXqLw8hGEVAhGEP5pkLLZgHPj",
  "key23": "23QHew3q3pLriHKNDm6YdSZibbPJHDHtWbDfgEriXmLaTqxhbJ3g7dJKDffqkGCyrac4NakE3CTXucaohAjXAiWS",
  "key24": "FPMK3D7WLvnNnDpaRy3nSD88tuBEXMhY2LkKwFYGsrECALxwsSuRZnjv1bjYh6VFdrPB2JN7CS51A6w6zzzBgX1",
  "key25": "NVdWvnRqBXdpNzUUk7u9TzZU9N2KH7N83TsQdfB8RXGHQvoS53bSX5VGjLeR8qjf5UjyXdF2ijTbmTw2WMhVCC4",
  "key26": "3mkZZZRF3vs2w6oX41r1uUJ8e1iTWHa5cyqQrKRKYK31KDNJneZGHx3RETsBCuWKjv1rA5yYGMc8MD1tkWeZxR87",
  "key27": "3hYPmLmxd3TUfk6zJJj3zqXRM89FiSFCkNspLusSMLd9HXftGcAxHyYm6eojhZTmeQjhRADNqrWVk4XUhNCeADKu",
  "key28": "5bSDFVdrC2YmKBooBCbZsDi82KnWkGPq7qBKUzRC8CsnpwL4V1w3xKnzbNcSf3DTxmMefeDsWxmwLrWLB8KoTnvk",
  "key29": "5pTB12WozQYHr5PRxkcQjGMJBDgE3RsTt3tVL5jREGLfNQBDM5qJu6EkHYa2QugJ3wBbwwJLAhb4fvKaxKJ4G94V",
  "key30": "xWkgtgkfiFHrXEoEXj4KyLyAQBNzCKzv9CNhmh87DbzwB3MzPdDm9W9d3gdU81nnwrtFSRchchuva9tBmaxbaYT",
  "key31": "DW2CaR2GBkjss8JY2Z9HYNgQ8VyzqZqVdsjXCHbPQhEFzzxPWVenVFvCQEFfFyNRNxcXNyRGbDfZFHotdH2GMyH",
  "key32": "3NWBX6iMLU3waoppdpNS6QqURNCAvLxzAe5LYGXBFZcPC2xqbnAY8E8BAVszzCnG8LCd5QggFRMGCb5d2ZpSVCeB"
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

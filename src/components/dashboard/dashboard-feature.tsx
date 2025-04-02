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
    "4gNPMHodYNj1gtxnPnCwzM355Bp7iWZ47LSjaw6HQ2sGt9fw5cusjctW97nqByLaebJQzrpZr3LivtQbJPJKQLnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGJKxM8tjZnT27PFZn2MLsohmCW9AQmmLjuTmHSx9meGNjwMx8AgULH76LBW9M5J4e9Rmes5AYYgoosdV14B9Ct",
  "key1": "3ZGqaguhc8hyhKjTD55jf1Y2FRRbs1YVBrs9rJHyra93QiF3gEFeKMcQy91dSJ6wcCdBJ2jaiWeVjNEqbwbJwKVk",
  "key2": "3YDiiAuD3SbLzyzj9hWAJM5YRSh3SLncpPwYmKtvv32Zg1sGZ1kjmvMaHTzXbtsPkwPNbAFnmqZxMuNKKTdwNhtN",
  "key3": "2wV1moDmnuyrXbzFZ7V4H4uEQNN5tFUomfXHtXjip5xomtbzUCf3F5jcb5wbYhzAcTmhm33evuBGN7UHUT7pBRDM",
  "key4": "uUxQLvXvsyu1g8fXeDji8KuAboxQeXPfQe8ZM7ov4wekrjTsNsRCyp7MQBsk8Q5hNy2AWLndsT5evy9yzuPhgHx",
  "key5": "AJM1L7RZMztL5ykvj4m4QkSDHAcE7smvEjKxCKsiPGVzDGrCXqRN1sYaKofFaRLFfvzoSadoSw8V8s1N8GBsRBd",
  "key6": "4icowtTXdZccw2EB8L72qE13kgEzonM7irj311tLsYhM47DN7qxotMTgiLEjpTfcEk19Ja63kNoNDx7oZ8D4JXf4",
  "key7": "5X3qJi2WjVspzXdjbu7ommptx5Dcq2nFgvYdsrMeqJDZJHXxXgfJeKnnLQkVPXmiu3saCjiQxMWmRa6oQ51gFv9w",
  "key8": "67hfjR4fn6km7MVVRVup2UN67dsf7cWKZQ5eWivDpTPcD9M5mT7wsxwUFCYtZa3DfcQQJq91u3S5ysp1hfmMqSNJ",
  "key9": "4gLunAwbzwyCtPZjPB73ADeuBo4xwzFitre8VDCKYLobLpu88ibiLeUHMENPoJqYguKSEw1kSTZzymq13UqNh1hw",
  "key10": "62UVZyM7MUPNG1K3icYxHtftariT2pEoTtRvFT6MGMmcog6Z4CDuG5FFsa1FzAfCLqzjm6VndrNcggy1B2VVSZa2",
  "key11": "2Pcb8yBW43BJBkprgcvXWTUkwoCFuma1DyEiafRGBvyqQfnrsdhx84FDQqTmSeWicWGr5KkzJViP2EjgcRHEeWb",
  "key12": "4CcAY32UG2byMaN7HJgbBPF25u1xmzFsj2Qa9mgsK7wVGiyDiJD1ABbDUxS8ph585s3wVUYJXbrBo77Yd2weX3WJ",
  "key13": "2yt5PaaPvXeuXVjHKGFQT43LvW5QLNeXNHgrp4Tk8y48KnKKVN2uo4wBPSVcV6BvXohWQCyWHtMXyLB66rRHFSJu",
  "key14": "67rYwjGYbh17fqX1WScqSM6YXsZvEApPqA2jyLnyQCtu8DyKT17BQHbTPtmSdh3b9G64grEc58gg5kBWSFS8wfwz",
  "key15": "Y2CfV6EdrDtUoM4BE3S72dzycp7b5yCcRjAxmc15bdhgfJN3PDiBo4kJvvQJCcwJnFVMyo1zq43hvw5niW743JP",
  "key16": "56zoqnXUCJ6FpYkfdLazo1MUuBTgQTtRy719T3cj2hgwcqWoWFvr4ADDEYWAEfwSzUtwNEeNDPN7nXyWPYYtbZt7",
  "key17": "651qW39w8pX1G73XZs6jSfGbPcqm4VxEScYFE8samnTtpy5NAWQEdbwX1f7fgQpmDCZKDxCd244hY5FsaJpHBtYp",
  "key18": "53s2J4vw72eZ6EMCc8W7P6GX9ka7qQKfqw7uxEGMJAnK5jwaNiwvEKS5jpXhKDZiZFsGeNLUS29WYZARLSFqHjAp",
  "key19": "5gF8JF8FX9WAhfSuhDYqEqVHgAs4E62eYLXanaPtpSRec96tvnXkhokTPXt7Mzu5sKhfPzXpntGHQkft2FmzNBaa",
  "key20": "2DXPBnE14kDW6duHN2fC7Tftx7NsbjHzeT8HtfuwpdQmWhsirrM2uV1rx1Bk98nKgfzdobjozdYzsdKDpQnjqNuH",
  "key21": "3cNNTXXCQJYTkLhLjDUtK13SrNW3EcznKJVT9s7d8LkrJtuvGYUTpJJVxstJmd9RnQ7AthYdQhgh59E6grU7uRXo",
  "key22": "4pFZBbumNCKvWWJkM2uBKCJxq5RkUynBfgJb7Dgg3PbTrCUMmjafFNFbb5tFUWqaWaUtMCAi4SX8J8RfEjGZU4Kn",
  "key23": "26xA3Fz7V41mHwrjsT4JBQJkG8aTVot6e8Tr5FVh6vuUL3z72nr4NQHXikvS2ewDbwtVynZKs9qiNmkWQMvophPx",
  "key24": "SPbif4CBM6s9FcTUnmbfNVBk1723oV9rbHounVEr2rxR2ZAmL6o21QwV74DjZsj41oXPgfGsweVboEVejtLDAjt",
  "key25": "3C4YaALWCpCBA3BfHTBZTR9yYqW5H25oWCAChx6qqcwSrKvNXyJpS5rD7Es5CRH6MMdT8odm6Lvux1vUCxEfFGmt",
  "key26": "5TruyzC2RjNybSb2fxsxKeeKVdecW4sesBa76HpXU9t5VJyCx95zGMeQRoavNULUrCu4q3GHT3PtdgsftwsP8K1N",
  "key27": "5z2pPspD87rWQ31pdEjpsbxiYyCXQTLKV62FpmTRom4LwvBxwugbuaWeAxoXqJPeaRUZ1nsx4dEA2U6R5dpeYVKX",
  "key28": "4dACUeGEMEHX5YHDPq2LSE2XmaoBh9PRHETDrpTQRc8LHCG8sviFrGV4Rgy9LBS3RBTumd15gzy97AXczAyQ2Nmt",
  "key29": "2NfaFay8k38e5rL7pRKVEa7BZjCtENdp5UsFAwkMedvRqh38fY7L9QJ7n5fLGDSKsC3bCmCugpZptZTq92iRE8bQ"
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

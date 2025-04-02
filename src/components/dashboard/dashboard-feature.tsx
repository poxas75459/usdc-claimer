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
    "5YP9RiJXrFxBr9wDgTkDXuh7QhoH46gK8wQFuupXDprBgV9v1vEeLLLSkKob644QudoQFaKdKyNYUoFWcWKuRUwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y1XDxAmi6EpkWz3jukmnzqC4x2Joj1xiE5mFmEa2tkfe4C9zzJMVVLE7aD3BwNEgmTpf87HjDGurKaUezFi5Y1W",
  "key1": "66V4QRvp31QLjyd3Bih3ES1htPm71t2LptY25iSmXbtJekeGgvGknM5Vkw21uU3VWP4XJxTRkANpsiq8A8SruBec",
  "key2": "5pXsTKNayrWQjg3ye19FqxRE9X3pbqZnCU2hZpT7qo4UPrDv2roMLnKGHuzdXL1HzX33wF1EtA4fLcRV9LYrM3v5",
  "key3": "64UXKiVZvvyBmz7T5DWnYVVt6ZYx7ez6xQ1tQrPWhRonXxGPgtD8BVERmmxq47tGfESf2y1dEgoy5SyMsUHrMvuU",
  "key4": "2HmJyG48Y2cLGeEQREkhnhu6UoWMvx7y4ura6fDmm5amXR5k2UDRUYSwtGMExxC8yUVuLApVkUifAtkTgsmvocr7",
  "key5": "3HGUmAQT7DtW3upDPbW7pcXpk8cYNAeFNpD8nbpfEbR3kYVZX6PEbQ5ziDrx5f7m7ZX6Pcf4A4Krkdz7fzafT4zT",
  "key6": "43GL3Z8vBotk2W2nLvtmdsCC6daqxtiNK9918Tye6ApnThHUuaieD4cga95PJ4GXPk3U8NUavnkZGgyMGDp42fHg",
  "key7": "57ZY6JnhZktKr7iu9PgfZZP2hsgFRENHkYcuBHaLK2NntWrJ9GjZgmhfoVWPRuJ17MKzkDwt7ZP9xTCRYDvC7H2k",
  "key8": "2Xv7oFsjLUsfckB4ZdSZXnxKL5415cpBwCztNRTauJUu7nJRSBvxLzbETLnJwvYNwRZmEyMU1L1yJiGz4rcqFWRt",
  "key9": "2XvFdZS65nuqyMRhSA4UWKpE8f8MHeCk7gTs36ZSyTNs7NZxcTxfwvFwyPvA5S69xiG9ep3LxxUBrgZuB8bULRBS",
  "key10": "67h2kU6ULU1EDgbsUytTNMjdPcoxeXGKoxt7kG9r2kVUqiDdrTgsmEXKuxeouzwtnxAi6VZaY1szohzquWAQpXoz",
  "key11": "vAG9QFRtAQ1zAi8u4BqeTKRmG4fXuRYfiBVtjFkF9FnXpvVskrkcqipBwrSu6Jn9BpPS6vrakoaDKseoa3MLeHB",
  "key12": "4U3ZBccKDYP487rRFDLwyhBL2nLfWS4cx9AkimptLnZAaYk2ixPd73FuY4qYvLYvTdDvuUZZvi4Yg452VTsUwz63",
  "key13": "568QkyMBien8WCSJNqhwzf6fVxhctEREow9jX93RLkurM9bNKqBwC6zA4Qx696WZUM7wBmF6HaYv1TMnBm517NwH",
  "key14": "AhD8haSkYvL4Gc4q18viF96yT8s9yQEzBEu6ZB31YbU4ExFPXAqCVEzxgkQugqPJjRefoyFgPnisAdagpkxx8qP",
  "key15": "3bJceNArujZNdkzjJUhVE4cZf5YSiSdnsNL5bmdYXwAS78TZhgdY9g2x2LkrgRjsk3WNJ9smREjZdE6KdNun91Us",
  "key16": "3qeyPmJobJTiLLoh4pjKSTXXjQ3Kq9jNUzBakBNCNQ9RGEuy68AYaEWb7JJjFALY8SgQFL37JTUi4fHbb7uuKqGA",
  "key17": "JqNs2sUfxauVpKDz9AUsgwnDKViFSkmHpcFY98cQdBMrgqEnYPDXZ5kDvSJxG8Gf4oX9tUoSgjPHbyYDEFfoMgf",
  "key18": "5XXs2B6T5k5cDYcdMxse9Qo35E5CcRJG8nc1h5Qn4wnJXZ2EwNzNZXcTce7nSjAJiNnPdmAFCp3jQ4tMgNx1pxFS",
  "key19": "21ML55jgoPMmkSM5H3q8JeVVxBCpRGgt8Kep3vmNg6AnMyv8NpGLwVvxjsuLgPLq8Jb7PqqZoQCNxcdj6Y1ZkShi",
  "key20": "5Y4wfETChzKYUKvYfyxayh1r7MpX3HP416Y8vsCoDob8487Y4pwRvfLz4fnBymY3wYh8SnGoCFp2idXByUfaR9db",
  "key21": "4PTDg6TwLsU6FxqnedEZGuYfmtfHxesmDnxzswmL2diP8nezs9i2xtNXE9vDWiwphLHLnSAgsB9bGBf2fo2JtYU1",
  "key22": "4farBadEJ5S1kd5mAKUU7fBkqWgnMrNa1J6yuH8Pggbs3NjsiU368qrKg8bCgMtGDRDb4tTDsRBNbBnCC8idLxAW",
  "key23": "2g4x6TKREAWy47SGLdXH6k4jaVUWsg6uf2Upka2xW4VS7cbK66ZY6fWjNvX9E9vjen16KYZu3WCUN4Td3ehNxnok",
  "key24": "JhzzDYhnqFknceTLnwhT2FXEi8T3zvVW6nzwZydJRwe6iKg3yrDqNku4ccJVLEQAYf8EtKKvtgPBQYoSGxbKxnu",
  "key25": "wc7AVfW2pcZMo63dAKS5ENvY6MDKyD1zv5t7N42FcevhvmSMj3Krbe1LLyNQoTrxUvvev35XZP93nRiy8E4e2nc",
  "key26": "Rxrgvo8J8yn4aLP6UGPv95EDaQuFmGcBoQ8JvmeNweAWJDdR9XdimZu7wdb9AWFFh53hRTDYg2jhxmGcP82a4vR",
  "key27": "4vESxfyHYeZco8UZV9sanXDw1XMhb3uc6ndvahiC8yVmFWktvp3He2YfR8bvsq96Fmj1nCyeT7R2AGehZND7vsFJ",
  "key28": "2gw3avWTH2Gw51eoKEZAXNpEviy4PRb3dVDNPcKCqSnR4BXQoXy1NpQqfPH1pfvgp6ELcGZonmhjf1HWvgUCKKCf",
  "key29": "5uS9sY92LEgFXgtWtTJtjXx8ruJ6M7xyygo2yCEHZBBXvpBFRBddzEQfvBzf8wMB184NESNweJBtnxLXu2nJdMo1",
  "key30": "2ETSMcwrDSkHYjkKYKqEFRZPQBNkjAudm4MegZnQhyNMtqQT7ZX6m2fPxN9vBsKA5Kic2pdct1hXm7Q5TvfYsiPw",
  "key31": "W3wRs74mnUHfMSeE8Ce7ZrTmQyh5s9ygU6Bsg2wQmQNtbrxMGr3m8bViQz7dhWmAY6irjUTYw3jwbPXR6Uc2ao7",
  "key32": "3HRQj1gM8uwQ37VRb1Eqejb8E3M2jqpgKZfLCtYAQMjkUZ7MR44TysDiAqUFY1BTtnL1F6rbKu4z2UYxG86Tv2BV",
  "key33": "cyKbUNnrXpWFb8EiuFA8r6f6614G7bPeXCWN1VF8DS71qALtVKwZCEk1SEfZyivtbSwjSEnzsma93biAXPDEeBK",
  "key34": "5EcE41fU4A76N8syFjLLY3hsmtZCdwWrwm1DzdMiKif16gaJ1givjbokXx86yBLHPpczwzNmoStD8rVQ6mZ5FDTq",
  "key35": "aooKGEk4sJkHVEMun9yrYaUgXYKDCTJsd7ZjU68fXRPnFCphdB9td2UMuuiFczKtbsjr9WRL8i67HAMjM7qiYob",
  "key36": "2ndESd5mp539escCFUPuomr6N4Vpd18bRNQVD4sWkqWUSFyi6kysoyEXz9g7aDF8mDkktHyM8zyFcVU4PrF5VY7C",
  "key37": "3PdEicUfKYyVParzaq2WyN5SEwSpMCuJ24KgFsHXUhjcM8xVpKSMvNoXkBrW1s3VGMEsUCRvpYbCuo7Qm3PNCn9R",
  "key38": "5rHhrJcaqRSu7wNiM8ZLkFPcRVFY4QggMJM3gKyehBoq5dbXrSv8n8jawqLBfg7m2E7ESomH3XasGuyXGT27zTNx",
  "key39": "3r7N7C7wk5D2N5jGQ8yTrrFnafYwAU29jPCpmU4esfnGT4ngXxmJwdTthzfpD152jaVq2kYuRFaCXyMR1cPULZY4",
  "key40": "3TdNyjcvBdSq46dF74TXuPX27dyseu12aEcSnJ3NbHfFF5bWBo3KVSp3jSfQuhm28m7V8x8JuHTnt5Pdhn3VQBac",
  "key41": "a9XtcNiAZyUthbd3zEN1oL24MDye5i69qhTbuaWLxKLZRteV7WtvuaHmuwRcimrDLKj8K75dUiTdbb2Sd6YMYyu",
  "key42": "38UiHg9RB7Jj8FtbY1W99wbj8iXb2nPoDxKm2vkkGMGyYUWPHT9TFbZbtUxnpwjLt6rHRfqHmrKk92RRL5k1rWsH",
  "key43": "4fWaHHKNwP4gjzJUT9aKLwyqFg9K23NkiDo2Sogc81gvaE36BxPq8nNUPn6UEMCAeQMT8shr26ULoQJTbsLwqowb",
  "key44": "4oyCpb2g6zgXPWtWjuFLjVR2SBJMvaDvxZi1Nvy5G91HWK8C4U97BwQVo8i6jCAWtScnFYzvWYyyyGjhfehBfW4S"
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

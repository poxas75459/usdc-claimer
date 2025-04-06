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
    "2hX7fXnq41m28rYkVXndYuYpQsqcvXqjyzT6YLnq94aQJfJh3snRiCTxtBfwqrburDtyHCJbVXHw6kyhRAZ4yv79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gTH5i2gYqyNopgwN3qR5UgRZYJZYSPxb4eNiqLM8EZauBvWhdwxnjcuEnrVriJTYeAVkrvqGSmQB32JHfARHrPM",
  "key1": "3BUd3o5G2XMs3vAvuK8AQB8Zuxa7VFrxyLxVBFdUrh9ndqtoBW314B19ucXBSb14R1KaqtHZuhujSj5Dz819wFZV",
  "key2": "4u7tpDqwRNLYFPEZuJC4BPNDiSahGM4df9BsnLEQ3EynwBCRbxUQmgwoUktkcgYRbmZLEH9qmYQqzxpn28wGdPuw",
  "key3": "2X7WbjhBTF6YGgSyWx3CZw8ZHwA1rew9DTUrvFEwfj8j2BHTSqyAo386nrhRwew5pYWDRu1yLWybABnB9yrou5yA",
  "key4": "2PMNuJz65ktxwJbHSSG4rLya3JXYQ5EtqUbzoQjVzYE644GpfieYjJhBLVm6FQyUWFD3cTponEa1Hc1goQDs8pjr",
  "key5": "24q1nrgGhbzAnz8PbAqPJJGywPerAojxcZcymM3BXrfVP4x1mWtaN8TtPFbRB2dovSFzYJHsNpr9F5FYkY6iiM5n",
  "key6": "4R1eEecCtWhkLCN5mXguLq3CuDbtNAJnVVN1MgjWEw5Mpxr2JcYsPrmMMThitD58ZKxGphQCLprunUAB6JNvkbEE",
  "key7": "2PqfjysUqzpX3XXzh8pSKBcdSFZQ1ZtTsHWBgJLVUp32w8198eCC6wZBmqS4xP8KZDWVjUVpGg8s8naB6Sxs7A1o",
  "key8": "5jMGFMRPAK6Bxd6VQUr6BfuEDgTvoLUCNu8gWExM3YSh5JzfbDry5u7btJ4vg2mGnpmGpEfaMAcy4KT5dVUA9NLP",
  "key9": "2sYejru7aJij33o8qCww56DWcdn7ABrcrA1aKgHdMdamzm7WxopMPT5dFdnWKa3RdGznmmgkgUGVFyeCtuSKY38d",
  "key10": "3ATkgEhCvcNUaZteBtsXNTzo7FXiKxpyeCXQFpEE4yzpHNNYyb5A3enaM6YafLnBbAbZeRNDifbAgdANoafDN7fG",
  "key11": "5KCYr491sUNRyYfbhxnFQjtc39L46jPfjSk7XnTQzPQaXbxEKcPBxLv8iUSJDjNgiRLS6Up8tCVh2KpY1UdAPCyh",
  "key12": "Yp9ocrJ8hck2QCxUagR9yfjCUgtEWBgYum83gpMwuRQWQiGVzAuxxMKk34Rs5kEZXLXPv8izJGsCunTfMCfffhw",
  "key13": "ft8P64eVUW2zUSMqDFFxBYVNWrNGiZz3diBmeYBMYaQnwxkHV4DNDhZEz4WsUZiMdaS9aHfU49Y87tVRaceMxNx",
  "key14": "2M7pypXnYBSNvwVSc6CEQptHQ4KntT5KGWtcKG2A97HZMFo6jBcsctHi6AHpEnfvV5xcZMRNYyRBiFLkWSgghBmi",
  "key15": "5wbEsz26bPJfApmP6QrJeUKkqcfE6v5b3X2iwrkaXc7qe5Qk7TVvo5pd4DG4G1pDU5b7wkhQHNQdHiyyJRKVnJLE",
  "key16": "G2UUsGBPJRBtihQnGqTubUnqQTTGRsW3dt4tfYSU42a5PLsXURLbo8Lw9DXonxRjiPf2qnk79ChKkUz2S5ew9e3",
  "key17": "5mszECwJt6CsNmNU5RwbM98ospA6o2s5dWT6u3fJjy9xu3DG1hGPsn7QuAyPj2H8WhY1peAgzP7ie5yGn1e8cZUw",
  "key18": "2T6EGK3xUgyYsBtcG4TMMQT5DuRi2c77brhCpJanrjAo2z6KoXief1aV1x8xaqtnUZGdpZtQ5Zhz92D9muVeFQdS",
  "key19": "2TPEa9MwMfrC1FMUpSi7ieJwGPdCWQZuTM83zg1j9qF34WLYHdwFfFX3jnNCVHLj7MugT96oJpKFYfraJgUdX1EC",
  "key20": "5gGRiEgu5HMsnYQJHG9YHUjPNcoBf8Cvs3q1dT9NkMwTGR2rPcS7exAGg31G5EDyyCSTEVvQ3tr4dKfaqY62goXs",
  "key21": "2mUdnDUm5GUgYjPihruNNjuM7xY9QB76Z8wXtEWRnv2gLNKA4CehMUpSe5HQk74qdDo7VsHa8JgQ72igTqRLxw2o",
  "key22": "5cJGVzwjjPqCJTwJYXV3LsB9aypedQvwXGQVMR5XhorooELQUP3N9X9hqTBtWGBbicL4NsmKoxiPn1fkfqrT5w8M",
  "key23": "5N3iASq7hkouFoPnGQkqgZmj36D3mr14ppzLyrcbNLPCp5nDvDdotgqaNDGiz3fvkbNCTGbFeLFLvRjxSfgZCkbA",
  "key24": "4t219KBSL8m8LX846LiZ8TYDRx2m5FHeAhe3kegi21dLc47AusaS4biTK6D9r9SRJTfhJUZKjNih4rMjjq7DPnNA",
  "key25": "2gSygGtLsAJqcRuPHd9s9DMfYQ1MRJwV4PNy8N3ryJPPVSDucSmwLAbYo47oLzVpKQDF5KPSfzTmeR9HpPBEti1m",
  "key26": "4bnLRmdhjgeMHKsgBcq91zdxxdGbcagRimsbHVHjHYyUerkXrNHgEf8dZc3Tkte461LDqanVxsxYZXx4gqEfNMaJ",
  "key27": "3SwnGWDDn4NcHP3PbfdwZqaooLFVboA9qCgjGza2YSL3HqwjwC3EAHAjPiwdtkpCB24zRBWxbvXRrkBNzRDecokV",
  "key28": "4GkcPMoPpHB9R51FtPUjCNXyEhjh4F2p4H9BUcDF2M9Vuwu2DDdNKC7F6pV29trgzuutxCwQXMhAQ1u1EZ5EBziM",
  "key29": "8tyWjkf25JV5uhZceUMsXUmg1oGr3nTrniTG7cftQK8xpB79FraUeRiwD2ZeqB7wPNweWSW6pSCLyBERPFoctiK",
  "key30": "3b642Td1o2cQ6ixj7edgFwmmQmt4TAd1acDwPoQLQxvEgB8XUvtAchdRXV3jD61nQXTvFzif5xtLcJ4BqkFTEp7a",
  "key31": "3hXNmauvGeA74amJTbKXMY6f2W1byKnK7tc56hR12MmAw5L4f2StV5tHm8Sd3VJPtUnWZmiHYH6smc8DYvekTKxq",
  "key32": "37TGLApYQtZcUPk8hPSQZxr7rhL28buitVUYg9zyeUUjNAnbou9wJrhfkxyLSb8GoYdfpwatLs9XbFCBeNm4J5JS",
  "key33": "27FR454Cx16r5U1c2DWitqwhaG76LaNYGyQrWwo5RidgAGW4snwRUm4J2J43rQuKVqKUTXjPMF6haBGarTEh7UzN",
  "key34": "5QMAJpY75L5vkmNhzp3p1qe28yxVRDZGYbd3Bjyn2JLbVCoCF6dFaKFyNnu29NC3U1xXkC2oib7ZdU1VojXCtoby",
  "key35": "3t4yJpHPsNbESPTpzERAE6KovVX9dnAV3qUVUyTypprgRCgrf9Ri2L6C261GioV3GkFkZt84pmL3XUg2zUbzDkPP",
  "key36": "hkXZnZNf8NWqyRdKy5aBPVRWHpwAi6zm3XKWhAG54DAfmCjcHJQTQftDafBSJuKt4wHRohjMXxciZMtwMUphAYh",
  "key37": "533gk7aC1CTAwiA96EQmVc11dQfbe7xPfeKsnFNSY8UTsHHphjSfWwKekeMsZGsdLvKKRFYYJWogdwqkUPJ6EkNW",
  "key38": "PW3Kv7cJ4FrHw3BGD4CYVG6gt9q1RfHarmGLoiCPaXoJtTNwDaQ948RKKDu2JMe4M9RX2SdFaV77Tk2YL6Cx6uJ",
  "key39": "4Bo39yozDKH8kxKrN8dmsGq1Hsw3m2j5Cb6BGNeWmUDKaLDg65rckDFTbFBz2e6P4qZR73GgXYmHkTkiHSx7qDfn",
  "key40": "4KaZKg7BBNJeR36FCp8iFZs7qbDeNsFa2bsa9FygN3TopAWujZfjdtNWtpBnUE7docUDYuYJC2NvLapjo3cwL4LK",
  "key41": "2sdh9tT6PkGLahGDXDhobcmnAfG2KEajeWfafYmCdKNrbEcEoUf8DEcgJNtbBGDBisvu9xC63nHmNfFRBjV94xSr",
  "key42": "49Ei6ZUuHL9eEa5AwTbpNLGNjfYEHWKwMt2UkBKHAwEaESMKUTPpYHfFGwRDxc5AfPDjsLpAUndakDTdbqv3UM6w"
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

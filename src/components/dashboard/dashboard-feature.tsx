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
    "36kwHWrdkW2jixsL5ZqCxsvmTokFwGjfKBDJKCKoQoidmfukwJEVR5FyCRXyJeParT681E3UX73kLq9AeiRseNZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tksup1g5fAFbZwQzRrjLQrWm5Rvz4q8B9Fse2mpH4PBFezmhCMCF31h14s2YDj2tdELVw1qiRk6RNr3gfEP9Bsr",
  "key1": "48DZ9crRVUQyKp38U7T7fVYGcsEnyNL7qwtM4P8dBd4yGYCiT4ovieA9CQ48F64cBTDL4fcVQJU8pzYNSDuqDQwt",
  "key2": "5ttbgSL6dh9KuvbeyGuHTbq6ENBd6RdtnLc7zSiXieHun5dLMXEzJTYHjx4S5Knr3yDMhgUxbq8wZgPTykCzPo2w",
  "key3": "5QAUwbfBBvjeMhHNRXnvR8MxwnLLAm1qrpXQKuzcEHLiDo7aZQvRyVmixF7fG5wyx1ze7PZ4FXMKoUNGbXwMRr34",
  "key4": "5hu24LYee3DbhLUPet23ztjSKMHwL5W1iLvoVx446BvewrcBFyMDjy7RbX45UtpFNvQTSSzbSK9Ks7HaDaTPo4dt",
  "key5": "4vPwHEQbWb6WogYqtsztJ9Gb17duXJY7Ru2oSs7cuPVTaDqZ8b5GuQD9fqHcakTVTQBge2QkrTbgb6eqd8Lm1aVm",
  "key6": "2GPmMXZ1Wmj3LXFNK69iQJeuk5WSMQR9RwUUYDcUB4FcQsPP9BdUTCs6M5yrJVKfDEAdj4eCqGkRsEgWKQ9bH67R",
  "key7": "2opng5TzEvHCQebk62JLZtXi8m17RwgzeHjfxYfotAoabRh72bNJ3jfXGSog3zNx4w5zeUbLhu8csmUEgRNF3V97",
  "key8": "2xxRonSb5X7zxg7aVrnukDPNhc22JF2is3B3mpMi5iyNfDh2bkAL7sBQk6VKYSUL5RGPaEhXMxg2S1ADsiiFyyt7",
  "key9": "4fGkbVXoh2NVemHyW92QWsTR1RnKcWDwCmkW2disnCWqy4KHMNdHLP5tV9bRwB6z7CHDghfHZW1tBzqHDEdpJhMt",
  "key10": "5D981R3G2cjs9dhigwDCDHnDWG26E83rbTSaW75cWKFS36sqxeQj9cBqPvT9MnRgWH16JorztDgFjtMESxvnMyED",
  "key11": "3c9zqgQPKFgcniVbYBZQdNXHDzLCPGpc3kahzHUvB7nuBUrW62UwjHuvejtgBxWV7QCpKK9DMaRh93JX1GyVHcPh",
  "key12": "2jvUtjwCVJZPutRjq3GPYgg26Zmx9vvY37sm5RDV4enmvrGQsjbYF8kaHfrYZPeDbRwdixk6Scipnb7EsCZ7S5Sm",
  "key13": "5xr4GpfyWyVMcPSgFg6r1ExrSGMrXbAvLn4rwDHd5tboouvhB9zi8EPLAjHqTgTQkheRQ9ofbQDd9UxR8gGM7Zbn",
  "key14": "q57owZtbF3W9E6wEJW6tktjkJaPYFK7NpEB1zW2wB6VTqKwPdyarN3UUdHyurd9w6kw5X16C6ZSt7ykmWjZTRAV",
  "key15": "xg85PHxq7xtWgrfqemGNUw8Dmkco3CqQNviHyUj4Ak4d9Pp7geKexQ6ozb2sQy57gp21BLRZxkZYdbCsBffVGuN",
  "key16": "4awYgTGDqJHJWDaP8QRJb3QSuNRz97QP4zmzsE1vg3WNrmApy6z1UFEaKd8JV98u3uLoLbV4is5uTCjsdpnGhGHh",
  "key17": "3FeaKDruTUVpU7r6KUrHC1Zzk8yiKzg2ccJ4jhYMgJeT6ox7dTheNTGnzTnDZ2gYR7gMQrALXaKDKEtaioFxHxZx",
  "key18": "2SAM44AwEZrH3Bm8NLEaJSHDzJ7zPStn3uP8DvGfVfggC1CV8D4AJrF1WGhBavXLuDPuEPAKv7E1fs4F3Y9LYDtf",
  "key19": "3W2H7RbLQhGhUkSSQwgv3hB7qJLamPE9gmLWm2bvuSQ1cu6MmHyZ44z9vZHHkoX86PyG2Gtxf288gGFQfX43K46",
  "key20": "Lcd8s8N9wG3YATsEZgQwt2xrYQLm33Pfmnk5CRiRurtd75gFqHGxJQ9WArDwtDtgcAkifgrsUcggHa3oVM7iTZo",
  "key21": "28FjEroutfJGkfbhoVEcxQcepvd7qx35fw1PTKHihHaSnvUepf5sC4dTJmU7ZPJENScZe7KihLNNVXiXL9YL7yfJ",
  "key22": "2Gw8y6U2uxfnB4dVgZH5ZfUtNMyNqbtA55KrRGfygTRn4zqreKRCU9YMnQL991of7u464EypdhntMqXBH8gxFf9Z",
  "key23": "Tyq4sLGNWWzURZo3hfBbKc4G4H145KpFZhgcaeEGKyrgkMP6paLPkcrBDCa9s698htjVbcK1nA9xozmpWJcmcv2",
  "key24": "67LNe6jmJyBxNcyodRkyeKimMWQPnpbNgFXiLk2EZbviQdbKhPrwzpJn8GQYjuDJ7C4WjoA7wVdBitZTaCEFtfWq",
  "key25": "5kp4zVAGZxcBRt93G1FASzASCT5M9kMZAFVGu2ahsD6UTKwUzakDY7cJYGi7Dh7on2eoLY6TTWPPdY2659PTjUVL",
  "key26": "2GXpvNCoKz5ahwqFtvKgsmEQkQrivpkgNqjyxFKhYEpYYL6FPHeNLnziPq65b9dG2W26fYkXJpD7PGFu9cDWbTW2",
  "key27": "3HmsPr6pxSnHF9Ha89vS9vdx7NBuV6jUuAheP4PNPa8iTv4Xrt3vDxAC7zcJWBAgALkexcnpX67oycoLPhiEhYJR",
  "key28": "BMkLYqTyfR2w8PPDNkmdUzW6xXQ6YoDcL8wuPu1hdqrMCtB5J8XnmDyc7eDfHZhWiRJf1sV4FUNAzivFC3GjTw1",
  "key29": "3MQ4jsSyHuo8yK9ZVgPxdpiiUSeqwNhraFUdfyNqdtP4wCRHoph6F7K6Z9sRuC8tTCygM9KomPxDUBm6a1RhUeez",
  "key30": "51ZWvsxZuU8fbnjSyUr8cRKXuF7X2kXF1eyUqDkfnhfgnNWJ6Pn8h2YcPNXMfAdbFDZRuTxLhDpeygZf1b5TmbnM",
  "key31": "2dnUatsJKhAXykFmQdMdYSXTTMNewSS3XGn9TnzFbUcRpLAa72xHnewHWxmagAQfQUKKaJsQyeuy6nk6sVmou321",
  "key32": "3CtywtdJcvbJYVwjZHsCDjKJUz1RRgGD5LaLDwXQJKR2A4pLvQSRG8wHmyT6c4GpuRsr1g21VMiwh9RGC9Qqunwy",
  "key33": "3qB1K7GeE15KfswMUHK5GheiaV7QNNokpZKW7kEibmZVf6ocvSLfGMKUyKw7aaUahcp9hQZGrQQhBvfYJQ9Pxbmp",
  "key34": "eMfcai9s6PYPoj2SfsrhMC3JeHmxUFdyPZ8BJFyFiA2QVtRUJpUKjroNiUSktZGFbNPbLPj7TSpaonEMbYfhAA6",
  "key35": "3gNmZe5s9iEWFhAJvz7354mrbJvMpawVz7cHhHwXRHuRAXPRZzdHT4o94hz4zTC9A9Ss83UF4eG6Q96vcHCqYvUQ",
  "key36": "4qhbpJmkTBFYjL4HSP1Mji77M1PAC2BD79gtSKq94xfQnnXPBRTGdNLXCuZXww1FBW6EVqfubTrD2cZrLMqTQwq5",
  "key37": "sZsx8w93eNyn8Bzuva2efrD9XbZeTkcbQ8MiZfER2dsLSFbf4Lf8JXZESP6iX8hKt54Ao17Qdt3yyzjY7dvT42N",
  "key38": "4PoCJ6gyduqFjJUDXQAHc3snUg2vnpKnj3hKcVSBpZ5Zb7kym3vJXaFKQVhHHqa1cycPMXAhyWgxRns54JbeHa3J",
  "key39": "4bwyLB2HXKETdunHX4ZPmd9WpTqPJBBdojkUoYNxYQXcpfq7mGPe5uSp9EhJkPYwnw4qWmkZ5GkrYodp2PusVucE",
  "key40": "Zb3qoiisg81h9znLWHaTyZhXSwQFwzXrLFn7wmD6ZschDc5DpbwJZVZJv2KVvmEAxCUgC1QurhM1PmbQkVELkvf",
  "key41": "3TEYTsYPmCLN7965Emdf4a2KP9eqErZYumNmy5G2hMVMMq97dKNUHupVCwCEWoHyPRZPPf9YwNAJAQVDn4mqh8UC",
  "key42": "5LD8bvYKoDLMDnmsrJeuaPc9i7YVG33o5CZvc67KNFZe7aJucqLDg2mfoWU5nyGBFiRLA84SFSmsxWq6c1R6ZxgR",
  "key43": "2isXETNNwgZyRWg4595JogrU3W6XgoyeHN71t5FSMsPTvUZLFEEwtD7Bsm9hxsAyum3qsjfbtD2wpGe4VWJqksqQ",
  "key44": "4VSfjALtvLS21DbexuQKQ1tuDDkWddqDSAUofQkHyx3sDQHVGGaVDfLdUu9efdSiUnWhBmYyv4vYe96a2ryRK9Yt"
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

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
    "5vVgvwDpxd9ACW6p8wTXBCF5JMifcAx1Ei2DeaBdYn6rD9C816D7nMR1UBJbygXAxmGqepRw8DrRu3GnFX4yp4Ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5977rTUFSzpS6Z3PGvasFog6amVAYVo2XNQhWumkMWpJiUKeeRs32QPVUYwyJY8wBfWaQx7z61sXAJMzUWaRTE5W",
  "key1": "3Nd64HCZBBLoedWzNtTQMfZFjLWTiiMLn2ykehVVbajCfit5G5UDHSZg1sJk3iTxh8yJt5XDJKd8aAAbmfrEP7z7",
  "key2": "PT4zMBUN866R5QxsKE42X9m7pHTLb9i3pL1VekKhqu2NcTcZRtF66ntYeXhjP2S6TGJgq8yx2ysbUSuB1H3NZq7",
  "key3": "47kpxMhvwKTvYuKdnY8dfsNSatW3DFM9jUp3dQWR1Apy3j6Ygg4PsBC8tsivZ4MtkdGjeJPL2Y3VmUZetDQtEHcK",
  "key4": "4PBwp7mrm21bVig5xhP4LuzxuvZ2K1DeoHCLScsYVB9ezwjnfC2njC9wpniiTCN8baohSE3o6zufMFG1ht7tjJgi",
  "key5": "3ewAE9ztCxeLVNe2qK3KgW2FxYbKnevAhvfxXcX9YQvHE4C35xWW6ayYUF8rZk4YGcuXLyL76BpfmV7GH2BavSZh",
  "key6": "UsSKjfnQhqX8xmkmwYw17bVfGpsC1zwAsdW5iq4CBfVmzaZchT1mA6vEosKymBgoxYhSroLFH1kXWGVu1AofRaF",
  "key7": "5m3WXEqrvDrrZNSpEo2ZxU9vk3xq84dUp3riVucy5ErGnbYPD1CAMUxayBtf6TKf9ZyucTSXhAL2rEnqeiEdsK3p",
  "key8": "32mqD1VMCj8Aevgdc3uW26mbMgNeLN2Z5Tj84LjbPuHDvRZgC4J9GoigoPntEozwtJg1j2G8fWzpqWEouuXriwX9",
  "key9": "3Cnt6Xodjsx4K1KrhmbRRAhB6GNM9K875Wbja4X2qz6kAepPMwSzpsidhFCaX8Z8FgPCyDxkU57jgyNSBRif35UP",
  "key10": "24VL67ucfzCEtPFTSJMrPjt1K5Y1ksyoMuzZRizpvfB9hym43B3pW4Wp3xeSMfmDeXDqGp3bgkYArhmaY2Ayq5Fh",
  "key11": "3pJYTLTiPUqrGefhsUVNUF1sHDdF7y4PuLR2NgL7i8BR8MedVZidDFZ61NCbcidzXiUMRCtizRJwBLoiACv58mv9",
  "key12": "38WwwdXwshAU4koAomuJLhcf6R92CFyjr86UjvavegqRB8WR1Sj3NsbJZYydMHmaEbuCtx4QyJgNcqdGCYTjiNqv",
  "key13": "3Bp4M7kgm22NjHwLE3zsjdTonrNdMA3T5r7qHnQxe3s4eCDsxrM9uEC9nNnSPekQBuPYbsAAxKAbPtvW4W61jwjc",
  "key14": "NCXm8aG4jw32ZwbTV1VEhRAaXMsLgu3uBhdPSbVAvHMz5nBGJvBSJ7VwcwCimZWQ7ynriZjRsLPzDGwBnHDeNCq",
  "key15": "4BMyoQrD5vzuX4Kc4kjEY2FBAN7VpAbeRAL1DwyQxaGMQdHUEEMf8yq1t6jfH45hGLyZUPoHCTMdVvzmRFUNw8Jb",
  "key16": "22YCnHgMbn4v4tei3uSFe5ov8JtnifCzN6D7uxiLFH4kpJ3vYe7J6rYdp4tiT5zJWt2FKBsYxvxGMWtghPsrMu8m",
  "key17": "4FjRxuUdtvrpgTyfogW1zyqbiz4epaTnL4pwE5ttMmP1M8MJnenrh3A2CMiV2C5P3zscqPFbffHEdZ4kqg9UG3mF",
  "key18": "52GaYD1oZSEHkgptNFvjTv37Ta4Umc3A6DCg8D55Y1otSwcBWroUWtCEUbkQ9LuiuYokp7oXdKjh4hKftbuLw76",
  "key19": "5o7ZyeQuwJjXgqSVMogXPuYVzW8sDi9hWL7xpLkm3iar8id9cM2FQHDkdQgxSYe7Dhi8TH1fPbPsTbd8R4E7pBvB",
  "key20": "3ZJVXReKT3L1jAUScjtMZhF2aEGQSB3pG5BUijGAHiQ6o6mqwv88ec8jan71UJj9U7kATYmVHpzxnERdQNDMhQVR",
  "key21": "5HYs7QHLuhprsafH3zv3yP9X6hHcUAprqbnYUJ2LUCYFShj1C1ZcnyM3EStPuJjCrWDmtQ8KjQXP5rZs1gj8tMuK",
  "key22": "56m6Fmt3Nvr9312LLXCG9wzxWh148JUXWG7AheU22DqUYMhdtLYkEx9sReuoXbzm24fJFeeG8KPT2buYsn2uRfT7",
  "key23": "jrdPXYq9veqNg7Jfq84n5T7CRxoXfshLU2YkWBaUN8EL7gHv9bZdA4RyoJarSqa3CipBU11FuDuwprJZNxD6nyd",
  "key24": "4y8dyHZTkYsWq2HB6TRS2LbtoCN2Wmt1a4E7DCpD5DybQ5MLvEyzwXZ1PEegxnySd2T2esXxScQ2GAtXZgMTXz6G",
  "key25": "WDULuf2ZPGsedWwuVKt7WiNMnx52KCbYFKdCS3rp25yezhR4zq9xkAC5gCzKgRRLnY7YqMJmovUts3PQNEkGbVC",
  "key26": "55w6Vo2CN9F3pMEbFAi6Y1rYHiPGXAy4CT17xS9ndpVDXCC8HmcWZr4tk5U6rLq9cDqGrUEzTZsGTentuKRQE3RK",
  "key27": "4q911CC5NhWUT626okBhdZKZW9usmvUkAhtfCu1tGJnT9ZUgwpL7dvncTaLiBS5CiAJFiT51v3sdjmTGfMxt9px3",
  "key28": "5M9Zj8dgf7ReeJKfAEBZbBEMRpTA9sfuHNCbM7ybCvdwC93hRz5jtEuickRWA8ksfZWt79RhqxX2NhwdkFt3XQQF",
  "key29": "3WqFR9x8NWr4eVJEruR4JFgxydFVB3p9SRkujGdgswhGqirLpXAfEn82vzUPqJVvkvgR1VciusGcUUhbK1V2NGEw",
  "key30": "5wDjkLvrKLjY18SjJy36sGnAd8u79osNdS3i7ZozT4rLuG1kCPMvL2cqxdf5nhgcBMQhq2vSyn6k4FxDSLkZonH",
  "key31": "4uuZ4QLXrED1SjwSeFPYSjHE4wrPtB3Fprjf2eAon4HasqVcCArmVdcJu9eyArEgXZaij5TvbXZMF15vv1GaaekS",
  "key32": "5UTsgvoQKxmsjsQX6ooMM4BaTk1R3dfo8vp3JaZXjXEJcASeVGokQbDXfTzXRb3yTjJ8wuBZwnif1sNDthHSNtU7",
  "key33": "Gycxg3gJcZvyjorZgYqLUpAkXg2knCNyru3GCsM83CXDK1GWHGUJ8wgpXhRjA38U4BXR4mwZTpa2quJf1f8R9w6",
  "key34": "2FgiUP1GXeWogjG9F8rP6si4rroNUd5U1R7GroFDry7RJXQqsp7bgrSgxb8ehwGNXEEaS3LeE3PGFqNjsGPYorxy",
  "key35": "2VXVwazPiLQmZGNPgfMH4DyRghb1JuRSVPzARdcRMaxDUCuPGdVmMLQ7R1fPCQfyFgntTpncbHGtt6PW84pHoiZ7",
  "key36": "5asrFcFzKzjM7fz8FT3drUuyd9TiRztDkWsMNRPssiebLue1wuGPHAUHFKwsmrvunYaRPbWQkNqh31nenBpQHiSf",
  "key37": "DARVHs4s25tyRLmbou3LRGfjsbQ3zdJLZjsj7wZtfGabN5ouu1VjKLoXWVbtNwYrX1HNHom5navAdCRk46PQzHR",
  "key38": "2vyJDorRdUYS8T4yDVCmLXwrcMYsPfxd1fHt5ToQYZYbaR1YGVJTcLg9Y3YJkV4ukJc4z5gysX96H9TYE8wkoT2o",
  "key39": "2VFLJiwtdJpxhs6tpS4h1CoKRk2VbWDueAPXEUhpo8xtYxrXwh828ZhFdyma7xNqPgw8Y1cWYgnCF2z7uq2TUv1r",
  "key40": "2kqS8wDhz6z5gxd86CA7rQLjZwPHz18bHsQoq7oyxijsYk3satQHpxhdvHxw9R5Se7L8LN391brqCUiXqFG3enUB",
  "key41": "5DBrAB7d5uMiDZTz9y1n3AtDPiKvAq4YCf5Wrd2wcYbUy5kFDZh2bwvrCi9JFQokxA3NyRonyqys9Swux1zNUueN",
  "key42": "3m4tXdMEMiFXzfuL1ZR19Sfy7bsxBeWh4ZVHmwYjJL7WWxmLz8SrMBck1zUpaCYHTbq5Z9sHEDQP8UZaJRVmWKmL",
  "key43": "4uee6JycxhQWQ93E6paEfNgVREjM5SVxciJqeKAJrCxodnTAC7YUAAbgyDQSy3N5JSGmjdMWkdAwVwNdVYvfM1Wc",
  "key44": "58gxHL41ShvuQdn9RxqsxdztGsXWx2iWjXkQkgVzCuXoiH4Yv4dJdSc8EHhM8VKtCkHLSFRAtWL37u4ZfAYidZHz",
  "key45": "42uyKtkEGv51bDeMWkFPvtWG3kwdJD9GF2prwtAcAgaJp2oe54MVHKs8hJeJx2tjLLXG1fnaVXxYs79hKbWqrC6c"
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

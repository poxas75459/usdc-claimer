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
    "F8bdxoBTk6jFye6zC1WDJRtHzdq8H63ccADEARvh6kBb5d6eVkYytKupaq1b7sNXLVVR6ZnNum7srnzQfkXRxzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yynm2CaXHyNzWE8h4gwnvE46kTEdCXWiB6m85Bb9Y5ExdmzTcjX1FGkJMLHUv3FnYyRCkgKBHhD1LxVwfR2GFZP",
  "key1": "3qapYbzW7MEwgESpX5Yik9bPXPiDejevpy6T6KwekuFgV2CZixXQo13vmdjpxqL1U7C4EC6d4yPowy5y5ygVytTU",
  "key2": "3AhUssX3UkHFL6RSZXRfcC8CfTGLeyvd7LLdFZf4qGJRW8acqGE5SMzhSoxtDbyaadtp9SAR1kvZgJ8M4JHXrcgY",
  "key3": "5DV3mx9TnNgUXJv6zmUuknzzDETYWZTpwFvFafrDtipBMLn4EPZpnB6ixM36mLfpoi6gAMBSu8HiVtxjBe86HGLz",
  "key4": "5fP2uWM514fBfNg1yUgg599JYK7EEPEsBehxAeQmS3Q6hX5stChr17E91yjMjD8abeuKqXKu2xfCD3WbBDqA6Qeb",
  "key5": "2EaRLeq2akJiQbsh8ji4pKrZARHS34eriwMBLbq47owEdY7HrftnSUAZYqqYZg6FYHiVxi8phHiAvRz62t4xnBiZ",
  "key6": "51wJ3tBBBsh2wP89ga3Wnd6WZsoGbnZrKmjNfr7Qq5ggE9C3CHF84h117hKFaNSkZJExoruXsuyt6JBkBJtNuDX1",
  "key7": "37J7mRTJMCCdnt6WJgGaSLN6Baqt2iX2HFyJ1NKdJKZ5kM7DrVnT1D4Q78ffQrWqCith69auFgCxoQKaW2mqNtEV",
  "key8": "2Fr6Ni88ANVzzAbeMxbDv13xvHmzi6seC2hhXCb6ThYXXJgpw5v73zSdknexYd85WPybFjoDJkJTjcn52jLhxLcH",
  "key9": "4Aqtv2YwmQKwV75t8ojsjhYEtXu3dieoaeWfurminPTdwWKwKnwoLV2VyNGqXZf53vuc1p3xLLje6noKahnGtC9h",
  "key10": "4g5bSdrkFLuC3aNzT3NcAFzUrrqBVzkYprdWkG28FwbjefDDarkwm9ZSKvTtn5dGzzhnfQZNZiE9QS2ooQTSF7wg",
  "key11": "41hRCfKDyJ1sNkXtASVFrafcDrnHCiSga8oPD12j7cKPySb6b6LE7ovoi5KW86MdNV8QtiHmaMFqe4DVeX6B2A95",
  "key12": "4ZNxqFgj7uw2DACQXAN53C8AD3zu588meLhghyYhZ7bLKq2ZRuZ1mwAQRqBsEnqSrc8AqJtk5t1tUYSqzdsPZQEu",
  "key13": "5CBBvS8V2RVgufbmnW6jrCFgrVYkDXSHpcDnBJg6TdAe3gtUTsCQg2yxA7FMGZqfPBTXD2BdcQTTjDdpSWwXaSfr",
  "key14": "3f7XsdfpHdmSPSbD8vFAdNgmsJMMEpC6hzVoiicX239Zkis8KPwVt7ypjo7J7Vffi3rCNiaYYgz32p3x3K7q67P2",
  "key15": "5DUJWrpdm94JjuQDecSjDwYURcQWubhc9BUhPpNAa5UpX9Lft3rtoEQTTdZwpbae6NSB2G64Ca1xrHfG2MhnasbQ",
  "key16": "4JLgpE6xVeqCtRcgmhgDGWfH5BaNYre8S42SJGn1iqakb6wbKPgVYtqvNh2DVh5eNg1seCTiPt7rF9g5bVxPLfXf",
  "key17": "4LxBGBLyh5TqZtGBNrsEZQt85Pwp91LuREGarJbNgR4jY3LDmXzbmXk4B1LBdVN6cNSTSNgsCYHbmz4dnHXo77yC",
  "key18": "33VQfo4ezwnJuhC7Q5jjGKbZDaBNwR3XJWSdvcYbqDbqFV3jqVzcJHsKhXy5CEofiUq3WrXqpCtUGftwzfQJ4HEE",
  "key19": "5jfAUMM3AGYEVKL6wcmVxMPdA49jDFdby2xT2rguLyxBHh25MiTe2Lmcdcd4hagFt5iZpez95Sjme4VpC3s6widz",
  "key20": "dit5j1eFyEiWF6CEovHsUkggPHkE1gdBsoYPx3Tzgko1om5gid9NgK1Lfxm4cGEMtmwKJCEfRaQfzHrpSCjubVd",
  "key21": "33rEPNbrqhhzVeNuVSGHe1kiVquYyPXqL7sjLt2Tro5yarqg8LeXTktpsHvDNNNQWQW1ZYfGLeqqxgeiX6YHNTdJ",
  "key22": "55ahpkFpALufffkqPgDhvHdhuvceCsstngqG1mBqfboeRkgsi776w4yH1J41nxavpiquDV955c6uJaJXzW3qbxrY",
  "key23": "2kvJ6nGWSgjkVfLoo2fMDFNquxfMWnM6FPZL6DHssTiaZUUHVcFKsGERConB7ehD3WvAMuBx74LBQdghhjPgeEnw",
  "key24": "5fRM4vNLu8UqVYehMSuyZLnaLjhEbxzvdqvBJkdcWPmwYxzL8X5HgW3HQYmHSEmAhxGExcSNByoAf895RSzsbEau",
  "key25": "3AhDkY2NeJM53dou5vvSxZEz96B6e52TqqZoqDNT6k89hGJkTnkDhV2VLNQ87qXEvF4dCYzi6wBod464GSADZJWe",
  "key26": "24gTgMdWrcA36fCxA626tEnhNGkndr6hBK4Bcd4XtRxPyCLSqMHYu3TF2xcqGFNgvHVszJRcEgBbzA6CJW12fWM5",
  "key27": "ts3QT2FnAEjRiGs9miezm5eRrVmFKZ9qmo95x4vZ1ivVcTYvdpQ8C7KhiHy156UvoQ3iDc63Rp4dp7fyPdkBMLF",
  "key28": "3Eck7s6uz9RF5Xw6AkWVPki69Yv5GoiNRtm5SA8xFSmtvwmmW15cEgzV4KZG1u8Q9dKUeddLsRQP18wK5sE4iPVy",
  "key29": "4Yga896qzHrY3E3J1t8HkV5NmhmFFmBnNxmRXdkDs33yZjx44VCmhi8KAZP93q6sC8GP24weVLLrrZ7c1CJTj1xC",
  "key30": "57mi4tF94xh7zyGrt9pPhb1esLG7Yn7LCkPUMbTQSc8AxmvL6uzoVwereNSX83fUp9XtvqKw1nzGP2SENSmrnRTB",
  "key31": "JBmJ5Nv8uLnbrxiCwjMm4AV8ZER9718tzR2XWGWHNSN8UhQcuU9HmzbNQSgYbhSVsEaVSKHZRxXiysAtZGfCWu3",
  "key32": "4JhyxSGb21wpQgcHSNKcKeGR5Yh3ya9dTTtL94sLtJsGcHFSUyEwBSimSq9xdjKwyWkC2SAEnKfQdExtdmR7NRZJ",
  "key33": "PQsT5FqLEBK8GRynFJosQVW1yZNXUz3iDnqHcFZYLAiH3Nhn1np8htdakw6SoadCiJj8dKHxXKdGWWp3qxMJidW",
  "key34": "5dbbtueadhxvCm14zxwhH4zSzrqo19rSW4yAGYyDpeePzV7DA2rEpqdzUyP4UGrWKSh3sEtbwZuCD6GEXbocPzow",
  "key35": "4sQ7mhwjvC5BjVnR4zhzpwKobcWbsNNXr2oB7jdZrAGrq1kMmePUKmuR45TUeSE74b2CTr3TcSc7MNi1vjkPB7te",
  "key36": "62a9BZ1YCL7fdMKyHExZRsU5ytPQbkywCp4oajLDiW8EcYWnvHQUmwy13wDDZ9TKB56MT268N5NLQrXLoRaG16Yg"
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

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
    "h6Ue4BvaDYePcLa8YnXnzLqbQBBhb3aEpbY6vdyHHi76CyEQsfypxjsBeBJx5GqMagbK9GrArLN5jgXX1dGGRau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eCL1VCYVR4V78JZGzTRBUB2hksp3w8DYVQ3E3Q8wcsNyuThpvgsptm3SjRAxgPUvE74hY7w6XD9a9pZHoJ4zBQs",
  "key1": "52JWzFf219uSVpkVVrzMRRjiTZMjtbNSaBaH1qwAChknh5GhxAVf6uE2acrr5B3Xi2oSB5a19pwYYWy7NeLPrwFG",
  "key2": "3MzeENUTcVy4GPZaVRwGAFYRS5pJx3GX3rFTuiPG2Q5seyFmAKeSxiGv3U1wop3kd4b7dKz8m6LuY3WooTCVctKS",
  "key3": "5y2KJieQTzrZpAh6i8FZdQmuZX8huwvCBWZLvJq17Y9FY3U2xPxSnnAZUfnYee47Qf69dn8TYa33QLrYRL3p8Jzb",
  "key4": "3VY6H8LPeHAHaXBsmNAyXPpwc1s6arXK61XnwfQghqnUN2VaDKXSKGrcrh89Q9ozVYFLj9Fbemo25wpyafRU125k",
  "key5": "62QTJAYQniqhTz92WSYBgn1ziD3Wr1ZKFhqunCAT6ft9XsWussiRfvTqsyWKBrW5UceWADCwqYZhJs7oUVBSt6cg",
  "key6": "2esSJB7zPtR6Cb4a1j5orgzVD8jixhZmch8Cp2igbU6qNGzo7LLSgDPA9ruYnkNu4yBVr1nCBDPUmBwxMD8Y7i86",
  "key7": "3UKzqXvXzY6fDjsR9GfKaPbqJfXg5Y3VZtsPhJ6VKjT7j8s1j7NaA2AUz2KtLqRrY1mFH19dFC9iF12LwcKgcUw",
  "key8": "5DerxZHSkZm7RtmU3imSPCt8T2QV59QfBPAAd5RMhdf94GSwGJHBDnRo1K5ZWcTUA8vtJEYgGBo9uLY5GmF4paKn",
  "key9": "3oFc3KAuKqUQuEQi9EuGA7S22G4wgcZ9DUYhKjbXtcFEKza4wcZ1XdMHi4QxyNykrth21FJj4tu5nvpPjb3oTqKG",
  "key10": "5R1KW7j387juXFFgvrGzbb5PZTPDPdB87eCGPnnsebrfuAL4arvNi4opz3JukPiiBZk3cK4u2a9FPA1nCrDjW5jd",
  "key11": "5DrhqLTMWDv6YUyfvyidgREVSKW7oGWSN9m4AL3oypncJxU8LNQEMcHdrjNHDpeqHya7323WUapLvqZR9QDEjDBa",
  "key12": "3K3GyNfepzSMo45UoGzU6msNrBora54rMEsvh92ppNuVuRkMcm3JKb66erkBUkVa4smVkfhaL7FPXP6yaXtkV2Kc",
  "key13": "5L6mWG7eSg8MQy4nDgZoq8U6VqumjPEyfpvMQpDjwgmj2rFVxa52QXdsx7UyUWdAxRCpL7uDP8BRpePuqzxMSFr1",
  "key14": "3QDHBPYG9cyvgUSC3nk94Lx56pf3rJpKqmu4kH4DMtBVoLY2TrT1Ejg7TjPEyvq38Aux8EsNByfw46MxWxXm7pdC",
  "key15": "5fXcop5z21r1LexSXN2gvuzsTXLJ2J7AbsuXyNeF3AiZBbDtkhiLh6UX5aEojdn14RLQrPFduBNJ7ummAJ7EE31B",
  "key16": "3ot4iCHahiCQfzWwgz9odovxiEDQHvJYeDUXc8Bqj79CQZk2RiQwYY8wwsjpfSPqkGGu3Xx3BwvtzfQRmgnMyPGD",
  "key17": "N4jmtrHsBJ3p6oxebnSQYDVmXH5XiyenW3Eo4UCpH4S7KhmGFT6hKq7nTJQdqp9DKufYQCZmYq63ZiHzDbFTbZo",
  "key18": "2YHpWviiLSmBTxePBe62NBQUwkqDg7MCBm5fopa1WKMWBBomrWbSiGsH6wnBegKNpEsTX7UTgRLVw4Mj8zJmdhTC",
  "key19": "67i59sAsKJqdH49ihD8KGaFS4ezYaQfJcLKd8PRzyXE3nnoJTVKpheiBMiwSjiwawc4KRidFVzXKsCcWNB9dvkbs",
  "key20": "2eEvZob7etWB5E2cQCqqFHUBJJq7xnRusvsEqa6pFxA4Wr9X2Hqs7GAPqjaerrCoAMZU5ebrssHbXWC97jibFHDm",
  "key21": "paoiBbCUXZqhGfPTGuo4jqi9jmgdobP2NUA8rzBme16tRaKoLji6Jf2cxDPzQuvA4kTTmmdj79BHS4THba9awLB",
  "key22": "21FVp7VxiGYyK1kFLHA4H8TDt2QgKPsDcXLLBN4wRXz7hCoEMc2dRxpxEsFRvEjSfrJWoX6Zo98HD2vucWGskTUo",
  "key23": "dZmc5GJuiBjeLnd91FTDhTTvbJ8BCesAAxzkvFjVEZL64bimyXuuYiPYo34iLA2EAcaxYbNXBQGG3umw6yDobTh",
  "key24": "55fBExncKccQmZY5J4GfMedeqnbaFGuFKdh4w7rTTuSDt4uY1H1cSMMfdVvQpstEtG3y4WB3ESGBSwg7SeHndssg",
  "key25": "45mLFMRN4aUtLU3rkJyjqGoRgeMrnDh59yc84xs5xyVFY7mzZZbTZgDquLqo6Fgf5V5RHfMBN7oG9X4mBi6KUUcn",
  "key26": "rLUaGkvANioBPFsW9xmdXhhkk1g1pVAcxvDtskPB1xD6Utfxpv7x4te7dG1EWt3qj47mA9PVFc9vi9BUeaLWTBk",
  "key27": "2JCkFzGngQerdzP7QEShWPMMkSyiBaN5hiAJ1YeKVdbfsUy1NvAJNmJmQavRzgzw4Qdvk8sBxZr6EHB4bikNiA1K",
  "key28": "4bs7hfNGKvwGG4yTRBuz7byG97cNMY36LoRUicHeuzQK473XAAd583JifLXuaV6QEafKhimj8dadvgW1Mo7dhHWS",
  "key29": "4c7JZds7R2WG96Pi2uTjBzir3uTERGTTsDDMS93wgt3ryuvY9jHb742oRTpYbZtavYUQgM8LPMknHrWgNiSX7ho8",
  "key30": "5THkUohVZeK45uA4WYd1X5os7cE6S4QRythWnx6ho9kSorJ23TfZccoJXrfK8KibPh4FMei2Zs2SRb37b7AcEN8Z",
  "key31": "5cKZSWya17czp2D6Gb2fhBFqc51DAsTTTLsUVhqwfCP7G3fYapRgN2539AMzAreULF1QLcZgiKdZLYuc5rLHNvi4",
  "key32": "4q2pHfPE5UFNPEGN1qVVohqgAbJ5TawZfM72k1Ji31vbtPWeCGpgy1VaAKk1tuKEtHDYoTZfXSX2qQ3kGw8KzonD",
  "key33": "5xTmNNxAsCHuyPTV8UThKJ75fUnC4qZ4VhLvEeHSduPbMmsTCPhGeyDbcRFT5PwRa1YEkC1L6h4pqEvM8y5SUmqj",
  "key34": "38xpacYbsbUjgB12XHjpShNoFFGj6L7sZa5GFMXzEP5ixtWz1tjhnd5zSeLmjnQRBiTtQxpEzE5GJi3bS8FfDVLn",
  "key35": "A4cBvQxYZ2BLWYeNpAF2fqNzSyjgxNRwmkb4sYu4tMfmEdSJ1d6KLvUN3WsDbmgXRWVWpwL4EGZSckXCkqcZhAH",
  "key36": "35MFH1Km9Szv2yLA4J9ioDhRWmGLg7Y6QqcUY7p9TbeRC33FGFZDf3D9x36dctzDtPrWRCw4z4tVRwtPrWLaYNpR",
  "key37": "36kzagsjssUvaLbWzRzp1jP6KGFM5cy9qpd6ox2mnCVWoQjBKGXWESExYkNtgo9bVLggQiL6HP7puLems2Zt8L72",
  "key38": "3eefrbPWotwYtWwuCuUyMxRU69mUonfiyFKWjHGSwiqsdvHa7rRCP8mmULk7mHVdwwJ4vNXsrN12d4xDFssqdS98",
  "key39": "rjcNDRF4ZrTX82qwsKkwXmfxcQnpct9rbhq7YDySEVgKDV62gX9z4j575VVj6jukLfpq8HCm54wJGQEjpgRmv79",
  "key40": "4FAzi9T4Jikggkx9dVaFECczAqx5r3npsPdR5Eco4CRsaS96mwkBLTKU6AA5xrVL7c49MG7SMopLbfxwYe5rnisB",
  "key41": "TWv6ckCthuXtaYPGx1aFK3pU8JQ9bvHEichPUYQ8P5q5JfDBVkYdynhbUijwhrDnZrR5W9o6V47BGxkMf2aHu7U",
  "key42": "2Q7izU89UN3Kt5yoeJgRbtpfgMC58Fu8Lr5cmvr9AE1whEkdeexQoSKvrUAiJca3BweJrAb44sQisMwkajzfd2Ub",
  "key43": "5xMwfgKxMG2GojvucttXBkFZ4f55QbGpR8vJrjZrhHi9mowSjMJQmgdKLBbd9GDxDHmtgdNRHX3Po3ntubRn7woq",
  "key44": "2ieBuG5EGgGWiAYxAdMTLMLhsJwPKcyNHb9zqjqkrQWXWmykfykJjasdLHkkjWi6nMhof3FkZZqAyWGVPiyGgiFo"
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

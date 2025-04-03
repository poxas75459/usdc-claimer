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
    "4yYdnEw9s7nhhxmN4zkzgnYnbfuFagQzDb3iY3E54xagUKkRYaPV2vfYf9MzuDdYLx1EupZAYSn2uQTaPYgq5irP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urgT2zCaVG49goeJcVUNms1aCuBaX39CqDHK18Cp5Vp7ALTVg2umAKDSodi3h5BNjMg2mi33jBe4YvTenmRuhJu",
  "key1": "iroJ2m75RNuyfABya8hEKTaUQs4QEhDRZ74QacKCit64YmSY4BCLsSu5ZrqAV3pkScuHQqDXBqZh5paHVCc1ZKS",
  "key2": "4UtAppumTkoTzwSyRScsJT2CBgt11khwV6RsK4aarbrWmwwLk9tJS6VLnXaNofYt1QTHG2Q1aWs7YeKe1TX948SZ",
  "key3": "37jrKm12wM2kis5qFSQJrpWpZKDApRv3MLKYe2spczdKuoksqZdEqU9xTQhVHagzyDF2SnCKGM2Mnk3ENZxjhPUM",
  "key4": "32cDeMepbAJgTAyA61zHGkdQ5DKZnPfPPrxWJgFuM2pPWvMeFzZjAb38zaw2p3atzaWdj8YWXfgLnBM4UUEiwCSr",
  "key5": "5o1iEXQxkfy7XXPSPVEt5ixVYsSKvggVFTrB5gi6f5YqE43nfJ2Tw19Lj9iJsvVo7KzjARPt1oqVhxgA1z3h6cpq",
  "key6": "2sGsMvZWLe7QwGe8QwfwqaR5WWZ2XV3f8FPcMQZpRVLrypa2TwBFbsusJ3GiWjnPe4GVzueJWZqb3jEm77GJ1Xiq",
  "key7": "eqLPDc6vzot4R7MjxHxA7YVgkWiXMiDK13tTBznHmfk2zSxheX9NZQCPoPxoY4tissUcaeEhjT9YrDU4kt6mac2",
  "key8": "549VcxAJRS2Suaf4wRFsbQitTzSjZhYw8LgTJwTe1jtQGtndzykMjnWWoVLTXwatoUbD1jBqgd5mE27rHhudYepP",
  "key9": "2iRHB2JA6RNZnp4fagYBqzn6MHgPuBHyxfrZEo9iqrr5fxN1hfBAGYiwec35QKjcT3r8uepvYejHf4YmAfW6CkHo",
  "key10": "5QtiRZuZWNzbRwnBHaFnCj7NRhrWWrkngHZWL8onYaSZqSvMc3h8dNWEYXZQZJgVKLfsQsczrxktoGnJjTYR5ng8",
  "key11": "3SKBtXrbBxE4v4dXoQJ3EJrs3vMZBFMfgxSA7dAPzsS3w2kci4aZPvVNoqTELLAzanYr581TmphdUUqoKqGMByVf",
  "key12": "4uUGSf6DvwPpsEv4boBu95MPw6xiNXaDW6uUZLVaccMYCDw14iRgTZWvm4T89tdUuEqqdjcJZ3JkcQ5sEaYv9iFS",
  "key13": "3VVX7pbF4MzXG2aSuLeywA6BivMB6Ww27hP8t8Z4fdbty5XKG613gsXgU3jB51AHiasNovSorAZssFHJaMUKeSJW",
  "key14": "5VbC5WZvPG1fgQADEfSyqF3xDcsfPUgugRpdfg87adGKsWwDf9WMFV6qsHnSDcyzG3ntn2D62n4iTFBY6jB238f8",
  "key15": "3cQbNTdBa6Ea5aG9Uuq7cyMSo7c2XxXZHkJSo86KEDStJm2JrxtQMnJA6mpKhETqmRQm54SLhezQVkeHSszawmig",
  "key16": "YveFz5qALEvSMN6gfvApTjmUTF1dE4ZXRQUmFajNy71M7vnxVfaqVVcfBQ39krhuKY9yK5DHCBpfN57Fn33LpjF",
  "key17": "TF7wcR8yXBm4y7nH8chCwD86nq4AGK11MNN7keY7YACkAD3Y5yQVqbMJXTZzTQnyZg7H4sZyZo2vNPiobzVaQnw",
  "key18": "5VCGAXuvxv4KRBovZp9EKDRoeTUwJQ8uFMimnoCkoD8Za8BqZSqo9xpaEJ5e6jas8f9dYKpMn2wyUG31nRx35Sfo",
  "key19": "nH8WjjNbhECZbfxqSdG8554KJUjjmX5X8JUpNiwFZmFp3o5P8XRFqvp7fj14Loz9LdjsQcTTd8k6wkJodRTqePw",
  "key20": "3iwNGEYpBoQ4roMDL7Z2uTw6v3G74tZLiYjYXgWHSnTjA3uQwN4fX9To1Zb2npBtvsfM5wfEiA91TyWRJR1LH8gd",
  "key21": "5AjYCzPHmEgxuXzFxRxoqCEBJ8wYqTJw4uJ71vyD5jZuLuoewX1jZH6UdMmVnutRtPByhZk6smrRtTuBUwPBxhHd",
  "key22": "5bcnTsCJH81oxJsXde4p1x236MXsu7HtGg6hoYESXo6nktumDeeY2kKRYzWR7RaQJF8Xiizgxx4YkoAzUYUf9TAS",
  "key23": "3eJ87WM2mkmb35NoZvNMb7DhQuq2Be9KwqGJ9zbj4Mo52eNgo6xS8gaAPedJgMyZr3M4dBLG4niy7SR6bp2svXzx",
  "key24": "3NV7eReGRAXR2H397rxSamXQqftSK6ejTCUwf8LHzbLbYydn1B6vtTGAZ33exDLqA1MZRv9KBWbTapiKKLUTzCwY",
  "key25": "5KyCSuj5mmg2DvR6vfGeUcfB45KbU21ZTGh2p2hbqiZXnWMLzAJWqppAK29Aob8RKeKmeMzrA4d7xWW1D9sQhYsj",
  "key26": "3wH263vKLvCWh5tPtWoHgGpZFpS5pQM6jodwrF8CQJKUZZ8m5yEFSjMKXTUL8boUgK5ao9LnpmGp1GuM9J9zSP1Y",
  "key27": "4wWMtHg7WJcmR3XMFoXdsDFBcQ9fg6TToCyWX6gUYMjMcvzzT8qzUWYygVooHNZRYPKx16vjXwNByA1goNvFbC8u",
  "key28": "YmNe2yhk8d17xKTH45hnt1qwXWJw41qfQcmJWawPVcrYAqHjZE3DLwFwCL1nHR9XhN3riwtQDs3SV245FmgymUd",
  "key29": "5UTbcZxnfZrpLmDd5LMNTbutQhM1hc5pFH63zyGxFpEeg31SRTEFXfMV1qU2Q4tARDvDr9pP98jWUMzuPuSBjucE",
  "key30": "2ZyHKzT5MXVgGXB9JgAnXuMMYk14hSefEuVSqA7G87ZYXmFjS3FKtu5ja78vvgfje6uJmieA5pnShDRe6EGu1AfE",
  "key31": "3F2x2ZzWQHz8az2beJK3R3nm8nbc2LDRP91rDYmzFeKwpvamkFDzpvSmFuhcCG47SppSsMe1fUq6tMe53bJBfTZn",
  "key32": "4u8prqYvhawf9T4g4T5m6o4EQaYEnAWG2LFL9LcAw5vNEJmeYzNxTceBUrou9TwA44KceQcEZcZdEhi92rBkKyJA",
  "key33": "66sSiWixFiDNpfseMjpvSxF4UxEuUsJVG5LUA6hdTDk4KNn5m3HTnWfsnjeR12xPVjDU1NVXir2vhunTdDqutFka",
  "key34": "9z3KpUCduiPzSFUdWN1HY9ZGDpphzvhdu4tPGp5cz52to29VoZq6WBTzxjLd2qyzNdF9cQURwrZfM2WK49zhrHy",
  "key35": "B68UCP4hDanWueQXG2KAGe5HUnBX8ZM6FLZVm93WkkErsYq5aKQZ83buRvvQGVKkAA6Baqbg5uCLxh2x4bywYif",
  "key36": "3b4N3apZ3UmpN7WMKM44raZijYBUU1o4N545YvofMx4cYajAWrDYMYJLftWUPDQJXN14u4u5Enn2PWhTqTqeZnL3",
  "key37": "4jNTHoF5JyihVtCNAXbbu973uHfKBqdTeVFxmkprEe4CYkeYYVD3TLFuLD8YWTus9iP9FDfZuK6i8F2HcvRk2KqD",
  "key38": "4maf6gH235n4nYsq5SAoXmfMP3R5HnHpyKcdEgALS6X7WwE9jSzveY37g91xFvZEuZnSzEAgH141KqKdBMMdyUSJ"
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

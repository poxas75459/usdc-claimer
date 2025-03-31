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
    "44G7NHY3g2WQs9bdFe9BbRcvEUzwWzSot3odCAF6adPEQLDG1sNFVX8Uy2AdWLu6RCsT9VqrdnTahdQL9qaWNG1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kTz9ABuVwrRfPNNzt8QikrR7BgSGtUsM3oAd8yE9LU4knTzgQgur96vcQRcPMdMYBuKPJZQVJGtwZaZBpV6Gedx",
  "key1": "3kvn8ZDVmjNUfa4b3maWWHJSxHwqBXT2MZaL55jbQfDDurkAKyEHQLfZv2gWKXL4o7sztupkeo1wwPs3C7gGX4HL",
  "key2": "4VQFzyGFpsMN3VDAoWeALn96tsWuS4VCyw6ALfEUmXBJx8BsZ7VvMphJjPE8q3ge1c8D3HfbJjNYJwWP5e4k16N7",
  "key3": "5ex3eNLXSdGcVfiLqLea5Yk414aEX8RyY5qiUgQ1EaJ5UanbJRNmg1n4yzMxSBmhRBkpEFVWdkqvqTEvRTy2hFix",
  "key4": "5R2F1EYr74pNZzLuewEPLaSf9u9CSTyXQnG8N1QXbuRRL51Bt56sSCgiqbQgqrCshoNgPkJeH8WyRQFPj5UaAPt",
  "key5": "2eTMZy98zzafUVV9QcWnkaxHiA6vmXuGdkBVhY5krn21BCEan4g3gpt31J58RfTXCDjsfxM4MtAkRpDVAARkSvw",
  "key6": "58m5wEWvf3gGfF3grKa7a3Y7hFymyXqF1DJ6U8EhhvdgcZEC9KQBiLVg43MghZnQfcBGWVSSGzS1ax7KTQ7K6opj",
  "key7": "3vPsrjHDTF1QmYRjN1n9jo8h46De2x27atRdKc3J6i6uySbDSeg1mJXP9CkQrWyU64P3J62RsDtnK1Rhw7v7EY17",
  "key8": "V2fcCYcECc5WyPEfimAPu9DHRQYPN5e6cRywuEFEQp9vjq56gba7fSdikW874rpMkeBrWoDbQN5kYb8VMuwWfjD",
  "key9": "ZcJQgtPB9Z7gMpvKrWVa5sLzJ1gxZsFMQiajZP1ihCxoDE5n5QvGYQN5DFZqQGG1bgEwnpBxQSiZnqqWcuNniaP",
  "key10": "4w8xkZBfQ8iKjW6pkdCB5gwxj24VRUpgWimZ8bokVTXg2H8cLNvuuJUkfEQJ5m2osggdztbht6iS5EE9CV2frptM",
  "key11": "2dZcNUukUJjLfEStjT555XCGCzLB2riQxVHrJvCEzFwgWKT7wtgvRPKTAaHetotymjxxcTQD47UQwqSvAZEGJaUD",
  "key12": "35iBEFBmKXgFzTss7dkov4dP8BE9TUir6BFTFZ4VRkGkhJ9ABg12BEkbMsTvebKrXZoBBwmGb6bEfDSAD5jd1o4R",
  "key13": "2W6w72LVRTW5DnHdT1cxqA5obabToNG1AMmzRQny4NbibxkE9oZuTFDAcByxDC7vfWEDfxYWe7MipYxzGJkT2eMp",
  "key14": "8sMWTrWhBKxE1Tt5KAzhvAViT3X9ATd2M3y6D272TW6dQkEYggtKSxfcxU8wrqu5pUiw6vVQ4voFRsTUNRTnw6k",
  "key15": "jUMzLPQt82FadEwEUmNZ5RVafoYW4CTGRAAc9dhZgzykSnCcvzdnQhoCv2wcJ5qYYVez2bBnn2B6Z6Qr9RwpNzh",
  "key16": "jcvTZ9QUdQz8tA8raR55mJkkwv7u2vHxdjr13iYMMe1NKr2YxankDnrBKGaEvE2t5jTZCxTdisQSmMNHxAACz18",
  "key17": "5WCdzdeg5m7Leyn7zHZw8SetbUstmSgWyGZjZQtDiLrnh3ejGZjcs9cuUyWM3P9VE9x2XC3u9RVUTp3g68nGmKop",
  "key18": "5ULnutv4dVULo833eq9R5EnvsomNfUyNPSJv7rxWpeKdaf2DTsq5aVx6RHPPrT1GZXwcjKCdDNX3tiKJBrHG6nhe",
  "key19": "5ZACAunUa8Xs4oXnjwV1t8nUbB81sUV4ZLufJnPeSSLBmZTibmtFbvGW4f6yccKFsRij1UJdyAKvHbVevSxhbCk5",
  "key20": "4gcMg3TAtoGP9vVcLEb7ezvtC2QgW4WMBhF86nFCJG2PNpaj5MLDXsTaqBVQviK5qZeZRJHpJdcbpwnxb3Britgr",
  "key21": "SU5rcg97JNwnr5XQPX41wt1zH98gSNmNeMKT9FBCcRXEzLu8afzr11im29jKtZY78Tsh5EBstcCBc8fmNsmNbwU",
  "key22": "2FuxKUnpUdSnK3CJJqhzrz9XsXiADGqcwRgnmHQca5ea4eqTWdfsUVtshtqLktUMyqCBWMqHmYoWTDqWrrN8XPA6",
  "key23": "tj4NKCAzimbNZHPW2kKTCKkQ75rxaWQZNuLdWjY7MTHrPEgVoD2F9uuCqAMBNi2bSA49eNRPityX841KpCuoTU4",
  "key24": "5knLQXpcDEcYT7gjoNjerjNYgGiYrxUTa99GWHaJsqTZyWKK1V2NH4SAYLssqraCTuWGNBe1Typ1xz9cQ9J44pZX",
  "key25": "2AR87PZM1is7NTDENnVv3ZGXL8o6dBsfYaj5bVYXP7TFoBRa3ENV83gLspAy8BqdhFCpDQWk1KFEtuvA2swdUSbj",
  "key26": "26dPy7gipvQUrp9EMimnrfDUFJeGA12enJGC9p59F1nXGKh39tdqtnqso5aydrCCT2hanrKzr8nooNN6TV5TkAxM",
  "key27": "4ncZeiHAjTARzmT4SyWTDFppASDKYQmWCQ735sunfJn7a6vNu6JB7oZn4ywwZ5aP8Us57j1joof6ghJPeKkz9jEJ",
  "key28": "5a31GGTqbRa8S4qSAW5xtuQTwCptnixBxc1S7Shuy7P6i8Tu3LaTex92tiXqNyeUgTsNDtbeyXhkyAtkcELHDtfX",
  "key29": "4Bfm7K3vmjzpFKXLMNHkAMerG9b7AoXreZW7dvUpTRDtdMPyYrEsMHYbJmfAqj4kPkhsJGZahYC32fxzJukjAbCL",
  "key30": "2ixDj915bcHtJKQDEbuc1wt1YHYRBNf1Sce3Utpea7Yu2etZLURykhaU11ZV9dL5swGkkbzftJDLVLPUQPwhqshQ",
  "key31": "8j3j7yt7CY7nVou9qhphuH1QgqspfZiDfiEFTEzU797ZHCp7P6JyguiPw2L7TzPCLKZdZd256rPWqmQ51LAzyzc",
  "key32": "3VcRF66gMXSuUujWGws1PShdV3AtLGyUMEAsyjARsvdfVuguGuJ5NFN6cxDys2uHwF1mzhLTeJzbsYqWc8r4oEGR",
  "key33": "5efSZfzsfaztfS4S69o7xt33XCXM9ojbbnmWANnGQmMsinjJntX38GhSt2tEt9PQ6ES8VMt7YMWRcUNcwwfU2mWF",
  "key34": "52YuNg2cboZQVh4GcEsuwC1tw8zSM5zEj8kT67bWJUsYJZwdMHEF4f8S7YNu5ainWBCY4WN7WQmACcQhZdxZa7j1",
  "key35": "5uKNy9TJZcuoFxRohn2soQ6BAC5fc1fAtCKbjNDPC7nZvR2c2uAwKmACaR55udMZzskk7D2MRYWH2QCMo4cXWWW4",
  "key36": "5u5G9Sbma3jx8KbKyUvJ1VQ3G8JWYyWZUbgnwQ89JTVqtwMJVFuJGQiwUQCiE3bwhVH8duHcZmM4mURfw2VpBQKi",
  "key37": "Eh8chd4Hr7EUXWmKYpASnpt9XWsKMS9Gxhzwj4hNcwpxzBsCNBNFtk3RXJFxzWuAPR22GEZ99VSC9K36dA7Aq8g",
  "key38": "3dg9zr1PSUUB1bF2sjtWzPcDJd2rZB4Ans2hbsgAPFMxy2bryAC8QkDfsMnuM3VoKvc9WD2AXfCgbLHpzE57Nhhh",
  "key39": "3UAZQd3VgjLvRGXHbMbLNWZUCSc2TVhaM4nHh5n4A2tXXCwG353yjGWG2EMrN93noK5ihWA3cNWki91GgucRFKAs",
  "key40": "3jfyMbcvsuoCQJph2MGe8WsDrf516aChMAo7HigNHZk4uvuwjBNapMNYhTqcgwzE2scPcaEzvWEn9Y7w7WjM3uy7",
  "key41": "4otUVpM5MxM9PER3oCcGHtzGBHzgfwk4jjkx9BnrQtHGBLMec7mwDNViDZQXKv835MfXw2Jq7JMXutbMgUHMdDsf",
  "key42": "43dVN5xADeVxHBkqcLzvgxeTBR3WQ1RncsUzpLGyvUZwMcAUDGuMRyWNf26jh8KU92YWZhWmzBPopqpGUiGW3RFT",
  "key43": "21JUEUcKSYi5BpDQCTp2h7EwptsAwMuCm5i7PtauVp8xAyEEzTJ7LPuTT3q8RNjcxPdGWS9ck6wasgFiXbSij8aj",
  "key44": "4njL2N6ykwxZGpDDih7wiQvQ5gWHojaRbz98f6sVFz3SBBDXx1hGemCZKV3rD2oLzdKcvjrEinVvBYhLpcQ9ecGD",
  "key45": "56qbgzECnmgj42bqFFXJRyzHeD9Nz7fEAu3UxhNB3rWxTVgKXm7gLZLBFi9j6bc1GH7kkGyKwkBm9UTeHZY41Wm8"
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

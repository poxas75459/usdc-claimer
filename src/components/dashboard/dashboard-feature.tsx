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
    "3e5UK9xipd5eDQ4ytzC24hcMzQpuUE3KMi2xZHxw6HcoCRCHwRxapwwabUrg8j655LxrNWZ3GJ3kx1k8xb6onHoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gcmLpSeDiDzBZb9CTtsxiW4KpTAbe237tUSmBydMg9zXkSpDZErbuYbSs6So5k9aU5Y92MBFRv6NvoUM6JYZQ9u",
  "key1": "3dKUqpDv6LWC21KdGjXJHr9doXVd6GDk6mMn2oggCSmiNWVFBUKn84p98fLgrmb4xHyf3w2hCy7cPEcu2vPpL2Tu",
  "key2": "2Ya64hfJGbHGScEMbV2FBUFCQxLN8MZxfmVEjLJ3nV4ftNjstyKBof8UXe2YAaEL4cTSB1u73ijhPzijUXQiJ5ig",
  "key3": "49o3f5P2tuvcyDWtt3ZF2tiSYrVqYp1Qt85zPxuP7aroLoBvtkjr91baiXYSa4gSASZPqugCRNA2TkYE9NEdonVh",
  "key4": "4fzLb5ttzCjN4xT4pUtPyCZTbHZRbsXsxMkMcomto7Z3ZDRt3eSBthQVbtMMCE75o2LnNbyDfUPrksiVoojJRRTP",
  "key5": "3xPSqyEp1oYqJvgQM1rm9aLC75fcPBZNjg7t4oSMtV9bma9LGkEofiJRVYM6gneRQAFWq1G3oLDC7ZagnmTnaNBD",
  "key6": "5jBrVSytxvWfQ8QKr1fjr5fa5XmKMB71qLJaFurC3AVAJhTBJYTx8iESQUhe8JBptsAEGwUB7j7BoZ9rf5BsuFhJ",
  "key7": "5LP8dPMhJLHQ8xKf3qrRHVm87huazonCpdPP4DWzQZRLhBcr8Ufw1x5bwE7sT2edWjZDBFUBNKux8mVhEDE1ka3M",
  "key8": "fwo42nuU68Qa7kXHKHRd63nXMu6EBoHNAYmKzzyDobjxFRWxSA2XuJQoXjJvPB929XFbL5BXh7bC1X6w3Kw9XwV",
  "key9": "31TnmABhLBwz7f3jh7CjkTgSvjP1NkmJHLoYAG8ubCZNpB3jyEuZPJUE5wFp4MW7BGpXgBTkSq8ihEfqAToMY5j2",
  "key10": "7C3NTkn2wryKXJttHKswxucMbX6oCF4PRwdqvXqXJ7MG8StcaPiYSrc6bf7zVaip9bvaQXutZB9MMWRNckVk8hm",
  "key11": "2ps4zcwhXR2ngrKfZ6saVDZnAipUgwnR5uuQ15gC6SZLaFhViAQvpZ5pvFbHyAmAnsmpUpSpZ7J6G1UfFT4QEv6b",
  "key12": "3Tpmn3z8VsJrK74jWK7JD4ZLuUhLYqhmk6rHqzkwS9Xf6j1ZssKB6TmBmG79z9UDU4e9HAZiAzoUSAwG9W98NHM3",
  "key13": "49Lz8xRgv248e8aMfFaf2ZMsxZYVoKQ3cBVyby5q7xwUuCE33W5ismHBj118Gs1NfEKHPCKyPTzYxPrPPtfeKtZN",
  "key14": "4EZz8kjySQVUxfMT2dX2P3MkK2vpGps8Geqcv4GYj1Vo9sCvqbUDrzhX4WisTK6kZdUbNBYZ4HwDzdnjS6S87ey4",
  "key15": "5LD4XE1mFfbiSomF3Qxm1fMvUK4fF2TwRgPQSD62qF9TDVXkXdb2wHnUMPvtci2Dd39c6t381DhWbtKkTSL5VaJj",
  "key16": "4cPEdBSQVbvRAh4RcmuSazYjqmyyD2wx6vg1g2nLkem51M9Yobq2sXCMbpnMmT7P7LS3BYAsi6rNLSZnp15EXhJk",
  "key17": "2mbVqrXLMo8dbpGcq53jhumS8uogQ2Akf11G6HiMqC57BPxV5eHHY5WdD1UrWTLVo2RuFCqjYuML7pn4Pm5XYzih",
  "key18": "5SJgAEg8sF7ksaUkAexMYTdtM1CUZHFcvvxdxsEngsrQDZVJxnZ7Z1pk6UdbrBzaM3rmzAbdxYH3d2eumzFXPAGj",
  "key19": "3qLJ89MiXky815qUCU9sPHC5D19BKaD3KNaTxi1oUdhG1sovAEVj5BDRg55kCjTBDWrCVNjtTE1KwZRChbxyfkf7",
  "key20": "4fgAigdtBnLGrx1i6vfaNPMjiNGBiCSfmhG6NZnkgL68oLkNkbjmk8s4ZH4JzHnnEFf1991wbC1KZmrfEooBGMV3",
  "key21": "NwfXnTwYLAStB79J2JDBgRD8yeutHm1S33hvyXArCc2ZWQVgwGnoQVxMZ6qkqxXakfccrVU9DtFk4752rutZ1u9",
  "key22": "58P354UD9UmnmGnvNva6Bai56MDDhhMjuLhPqyPVCJWCUCxzRwgZ7oZyztQqPx4h3QR52aUiC6zkTRWA7Ebg8qA",
  "key23": "5pCBj3SE1cuYb4n8EpGauZTeDephUj1k8Semg99wULZ1Rxcwq3vXDNLmHo4WyziLgXvst1At7bXDnTdyjD4dpGYi",
  "key24": "xUxaTe8QYyzh28kcgmKx9LMuhaVMj4r8w3BPNYTczLUpfFmoLz5oNrqHBvEFTJCrwkVciSh1DZMtJzMxsfmGzZj",
  "key25": "4L18Rq6AqTzJgPuZQyy7zKj8nSsqHKRvrjyGukgkfmGxYNaRE8thCyC49gvRGrJPHLXCynG7oQ7vy6T9sku2TQJm",
  "key26": "2Q7vtQUTp7H7tu9osxU3FuijQGKMv2yPBKoMd5n3GGm9iL9eYVb6R2VLKHMfhVWB7o3HnLWS5ZweNy76LZTnnARA",
  "key27": "4hCe1cGeFA4UJT2pg6y9TGqWGtcJzksV1hZph32evv73SXxXdbZ5E9ZeRAHbi37Gm99adee7o2U1iyhraft8cd89",
  "key28": "3J9VCt18fD2knkEPE2gWvone2XcyW2HyMA5ST12Mx8gQaFmF66HFXT1mnc5CDVTSRwYp5bfZPQXRZXPTiGUMvTka",
  "key29": "h4AesJgJDs7inJvvpxjJCXHrv8bbJmpk8mnVjf1RXF1HXQBZVvur3aQ38vbsKs9huhpmcpchJ61tDmXMvRECahD",
  "key30": "C5bK3okDbbF4M5iK1qDJtJZqe9qjQ2GiENpsZWVzB783JYdTagpxQCSUoe1HfRwkehJxBXxEv8yG7ZhwLs22wBz",
  "key31": "4UzBKdXzgYzwZDnyCDu3uE8nBsJbSmZ51dQy89iTLNNCTDJnVqA9VC2h1cUJvKA1rqvg1n8WvYTesgBLkUPETSYX",
  "key32": "5ayH6HYiDNXp9gPjSPsx15UrKYGrrtngavBVV9YBPHCXwhG15uagWbhNroVq7mQFYUpS54Tdj3Q8LSf3fwRQmzGC",
  "key33": "3JWKY3yYtRnudht6gUBrHLRQkTsNKVJxhjdp9T32Xg21x19gDSdSHcyrX4XPov8xDeWjcnbbcjucAEbzGj1xEUug",
  "key34": "2PLJSaoqFCEjStngzWKbR8kZwUqdr1SfYaTeRH3dYy1TCg8FSPBK5xrYA7uFLJmP5PE6LL4RteuSXqMBorzsDEcW",
  "key35": "49gvvdj6gR8Vxts11fQvG28NL53MTJGqekW6d8An55ijAVVsrBVkMVkC8NuASMqnkBYz1LFQUniPe8Rb1uQKESDB",
  "key36": "1EYohAmtu4izmB2SZuUaaZapsZ8h14wKMmfYggeQuQRfNvkBj3qPorNaCLyhT4yLBktGjxw4Br3Pn4HXvMnbKa9",
  "key37": "4uiuaHkaVqeqNcDRkX8c36KNkW7VZaALCuhhkykJJcGpc3fnHvVfz9Bq5frkq3J6CMdQQjiTfvS3ZiNxteScyCHG",
  "key38": "1XCic6kamEeRspiRNCwmgob2JsA5gFpjmUU5bkAtvuPsuxkb1YEozP1PZuEqz4R2iWkLSR7PbPgv1jT9o7L6Ezx",
  "key39": "3YuiuuBCtX8PPZuWpmvZixL52PZGTuiVrGw58iL6HhUpPw4K6rJJ5z9MgiGXk4wDNTMgFYs4mRYbmTLxSPq7NZAD",
  "key40": "5c7STKunSWQX5T9EezowinnHzTtnyqCKX9ZFMcmdW5FkewCzMtHLWv9gkAcD13LywhiSA89uvmPrwNbSRL77RAbn",
  "key41": "2BQe9sRUjKRZ7jnkLUn4HzijPqoCsjcqKFpGPwW2mXRQHMqPx67qfTq8cBRNtwL5cCXSWBGjKB6BqevkVC2S2vcs",
  "key42": "YFWekyJf8y6eQnmq4pkfHkBpxAHGQ24kPtVTKPYKYQZVMEaZ9c1hBfAaC8pW8uMdVy2PZvJVxHbrtBGPpQc8sCt",
  "key43": "3Rimo6ZSRvwpoGgrhDVkhZaWdhihELzBkR3vooKoxNqrwMBVPd3VBB6tEqzstrYdWHBNt55cgzSs6x9xkja4JUWd",
  "key44": "SnkH5D2hXUZSrR9MS739omAhCMBPjzZe7RPsDWq8g6BdD2HHEXpWCMZtYKqJNekZVT8eesediWwmPDtWHF7R1wp",
  "key45": "3n1cKLXcwojZMwxZ59JHKPGm9J8oCqrKEPkBncRXu55o8AwiQjYCb4xsfDbMbA13PqPz3d5AGewx1jCEapamHjvH",
  "key46": "2tjXmnfsjkmbCKZYbcpDysYRDTPf42d2Q9TDmieTCwEsxhMojRkq53hrbUiLsrKWHeQWogFZzGoPPnkj6N9yTtWT",
  "key47": "2scW25xWddbtcRdKU78r99kyZMPJt8D1Q9uLVzv3hkohcAQtkFNoHqSXUEShvxMRosKYfxwssxr5STXKNsf9TmWU",
  "key48": "Z8tcmjdDLvkZKGWgr3eJfx1ZXzKwvWgRr7PnTFBx61UKvjWKCM52vaxrqmkuScE6QzthtRKBxbHi3nwj2dzoxNx"
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

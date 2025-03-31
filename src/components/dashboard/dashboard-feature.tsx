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
    "515aV2Mjz7trHEMkQgpoFuH1Uvt5aearkmFeV6TgcCf8BqFuWMLKHMhpqZuQ5TmNQkYYv4u7rmbV2ZNeTekRxsqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eX6wL6ZA2smk3yBbdv7dMLgxXuk7RAJBPwzX2ttX9ryQxC8tkzLh13unsgvWi5W8UaVjw6QdTBZoRx2oxEQFwWP",
  "key1": "3Q2C6h21i6n4s5xKW8tiSdJStk4M9tJkb6qL2ud4yotZYxsZA2uCZ9SYoPe5Bk27nv5omUJnAR7Lp95288nv2bQs",
  "key2": "2om89GAgk1cVaMSVgH3AmD6ou61VkNV6Cg7G1Lr3xC4kWMkbJxS2bcM9ducRQRmUMhzxFytN7c9X2UfSEz7SwcBx",
  "key3": "35HbU7HN4FSt9vVZdtq3bGLQo2TwHb2X5BQdMpmC1FRnrApXAVouuu8aeksKr8M2DvSWRGThF8gZ7xEagPzpRPdg",
  "key4": "2pHK9oAP4594oPNetjqsRoDoFzaQokGB2tegJEyVz1faBEuGcGGgB6PzUSwBiknbrWuiiP5eaJB4XsJRbzZeL7D8",
  "key5": "1r1SSePvHvf2FvHdt2CUHyJ341QA5j9fhDbS6MvpH1YLrJa52gQSQdFBP8RrkFtkmv4tEY4JVqTNUt6iMKeNQ1Q",
  "key6": "31pgb8EnvFi27aRWVDJmG9ysrhVYprSDrJWdN6rbUjUZvS4fcSmnwAd6zAE1Nch1vMw9sdLpqSVPa8nok4LG3C4C",
  "key7": "5X8Xeji1aDXSgQ8iC9XoqFXoEwFqxzdKSZCr6ZZn5ZC11LwqujbNEEwR6LPMJpsaTtGd5Q9tHMyjFWrJ7nX4qqfA",
  "key8": "51mXQRLzAk2Hkrp9M3Tmc7WvToBh6w6u68zgb82xqnMbtvGTjdcXCkx3zReuxQuoFzbdtJ6fu2RaNW8m1NqL1yCA",
  "key9": "2AjfM1ZA78GzRuhU76dNtxoXGEZvBRJqttcFcPHY4SHxALTZLfdfMzsJR69EvUifWrSpseDx3zGzLLJXCFbGtNUs",
  "key10": "297vLbWfhTKpM3QHkb2cx7Pp1GmafDTjfG7GKU6WAeLHJMs74Ho25urpdWR7bGDVVec2bjpK1N145ZdYdQiAYGg2",
  "key11": "L7gXNd81iE51f11oZaKguyFkSZqu7nTXgzobXpZPDaedMy2wPmH5pFR3q8fHsz1U6ffqd3jK5UyTXyhr5tiK4ue",
  "key12": "5qMiHe4VSyvPnqtVsXvydCiBLJSVFz7VaaYzaYer6wbhdD5ErvXqRyzj2A7gegmZyVXdLMsR5KMkaCGJ4GSpNfZG",
  "key13": "5KPfcMdLpF71wc9ygKwBQsUXSzHUkGxQ99WhrgKTfr7b1ktZ9Lds9iA4A3cTXBtN7wPhSooakehKf9VkiUq2iC2C",
  "key14": "3MHToHPm7e27suKoDHKvw9LHpEAKUuiFrrpUZDT11XqdfjRPQzSDfV2xDidzSiR9r65okzk1dhhU6uZPeJPYCogA",
  "key15": "58SrzdCvRTb1ubpZkPu9M54XzJEu5LQg3cyHJ3hkAmUMSsexg9NPZr9ddyjGKW3DdkLJvZe75wuRg1GgySaymH8B",
  "key16": "5Pza5vANszKSRR8ii42BEvvjha6uvTBjXh3uWjEzWU7q3Je3pzpRRe8zdPEE4y86ZeDFXTZ76MJNZ49KoSC1ftn4",
  "key17": "27enuYrHogEHkhxNKjkBNrQHS46nWKHVpmfFrYCXJPr4V998D5BojcFW64HsUe3VHVLswjmMycVse4sHqb3eu76u",
  "key18": "3iQEAB5sjSq3VFNzcHjQmHX2RKKCv3r7z6mt6yGvJQVX4Xc3ix5f5vHHpHZt1J7hGUZwkEXvRFvkFugCNvVAT7qY",
  "key19": "4198S9V4qgSfDC5aPfhu4zBvGGMkUDVD7ev2Hyi9wAJBMjukYWmL3cBAr76NdYcREf8zrbBe69QXR7iV8KCYL8S",
  "key20": "32HRYbnPFABTcshZFJejdg8SUzvvxZZ5eH3xYQkPX1eRiRxq57vDqrqAhj7G54qYyimgeZA5a2Dfv7gzRiy7b3eu",
  "key21": "ZBpCT12exjZb1qV97aJZMTHiJXSCGtGurW4ngwsBZ854tsGLHmb1XbH39DbidwgRf8W9kN2KLhke6ZzkErZ3HY3",
  "key22": "5JmHdhg7ULm4ENCzFagy6CeDjD8cQANevAaNaBhEnR1aXg976bwYQx4MjW1BLCTRKcxma6C593Su45S9iRRSa67h",
  "key23": "5MqCXN3PqLbuhkxWdJmZ7VErhkxEgUUh14ADdaEQnZzx5oqx3m5Z2zDdnxzFF8gJ1Qt3eENq33tR9o11w8xt3y3a",
  "key24": "3g7srURfVe6D3ikm1fGkt3ZDng5bhiFmNeczv1N5F25vJcFjpDNPu1K2vSgAW21pf58RLtN22aPmVJg42D87CJd7",
  "key25": "3xJerKAdvqvN9TXNWDqGpoChJyNYMm5HmZTTttZW3eTL7fk5eXaZqSxt6BTvbTfeGsSj5ZasjHeqYA9DzkbdPw9L",
  "key26": "3dRC4e5js9jWnqLrgnBmZz6TCUoXEfUUkdbNXRNTmRvrx466FEUAjTwmhV6noLSHEuvq5jzKq2rj8LGAMGjw7ehs",
  "key27": "9KXKScSEHCPKJnJexNKtRndPhLwfwx3dRU7ADyTNxKTcCgNkqUNAJBwJkeKVMVxqwxfya2FrqobpKRh9FLX4GF7",
  "key28": "2csBszpyriitrWyniRtn4yCT9Fxd8HxoTu3E4893NaHgGGe1oMPRYLwoW5Vr3dfBvkxWbgZ2Mh3Kr5sCwitgv3ya",
  "key29": "4MauUzMWkT1p52b5vN5XFkbjxnFbL2dDLHrZ4FSyXUwemw4fPd1p2zwefqVzhbBbNxLJZzuFs8Vhpw8Eu9hRV8fV",
  "key30": "3eYJxncwkbowmbqCMEQfCt6z2HDW34LXasevdSXbLzg7nXRtiaF87CUuLp2szyXicVzDLpNiAZSFJBiBcQtxKgdh",
  "key31": "4BX8hPuguWcdV8cocCBhrXyEmnNvmFocCMWinRWzjB28RYj1MxPoyt9zYVsWXufoD61wTPYHYZfA76YEYApuGue9",
  "key32": "419VNsGNr6U5nMLAzLqT2jaAx3cuRqtBXixyrnQmQbgH2bCvMLrUfPg7vrYPbGG8BJbgUe4oKCvcoy2wt4zHw4EC",
  "key33": "5WCjVgDVPd53GAWv3YYUNG6nhx9TraKLb7hxgH6Ucj5P3NdaSQ3xTY4kAAeUZZ7iomHCZ7jHnob44BLSqWavX3GP",
  "key34": "5KpYURtrFVcF46bnh7rgk2Qw2vSLVwdbqegWdBsBHgF8AxUcMyd5Z718Cw243jgo9ht7FHP56MFCiUKv7EWHQwNt",
  "key35": "42bPuqzbo991HM1qZ4PVc4m2ffTSgnYgq97khEFPDpqktGmcnTEDmLo6ixgNxAT1SWuQhNzRnf9XWTF9syttC21F",
  "key36": "3o9byEwxbYwNm2k7vjuZcRBYNoDDraQTs363uFNVKanxTzfqkYXM7Tm4wC3M4u7amXmCJ7Hixqjwig5GDmbtMij9",
  "key37": "qAVgajfwWYTz2US7dJUaAHnNAJqLP7vnfBfAEe3wXJcHtxRpwVh7JbwBHC9Zi8JLMh8trHTg7mHgpeAvcoP8J9N",
  "key38": "4T9N3L5BpTp13Q4qXwfjXvsjqzW9TnjtNast33ZnotyT2BNnKFvK5bGVhRbNueqyfss16wnc4cSBzYvM4xtPT246",
  "key39": "3VxLV7ytndhMMMvtZCByqX4CTtW9JTwRd416BFUWnfEHVxiWHawB3HAzLUCfWExvf2s4qiMosd2sYc214v988v2N",
  "key40": "3WYjcuJQj5hi16n1RHe3w6zFdyDY3toZ16sQgDdv3Ur2Wp19a91RNRebVevFm5xbPiZPAyq41HpYE6ugAToEnWQk",
  "key41": "63K5HcLEhtzeHRWxtxLn5MN8z6wYN51mYUH3u4JZqiHzzgPadKjZfyM9UMby8VvgbriRUtEGAhVMFt2XmdBnCTJz",
  "key42": "MMUTXqkWVKy1G6a4U8zs3P1AM4JC9D1M4TGcMTVs9UHokUr3cFoqcetQHhT2dTsU8hYFdeq4vaXudt2AnqSV5oQ",
  "key43": "3njG9Ty9bhcKsdyns6j5drZweKGm1ywwwU83rZQC3xcFQU5dnRbLRAjeLemNKfHGJvjmrf6zxLxdKj5UAh7qjAwD",
  "key44": "4ctMZim8dqoRGbMAR8n63UdQ2SWEtU3efSMq9zV7aXHtvz52LbMuFTsxtqNEqi311jW8YMth75vQRuqMZTa147XZ",
  "key45": "4u6Sakkut1EnwfMkvkvkVPK2y77QVNvH8d4JXhMFSr5fHdHq4h3ShnvsR7bXj7m4VQyFEjDaUP1cBhBqLPdW8RxB",
  "key46": "4CpLk4uijCgF5957D25hNVCiEt3AiPTvBoqCs7QZooFPLz8cJxZcZ55v1ZidMG2uV8jRVg4Fw4QFfaZsQAnLK9Bm",
  "key47": "35mXnNVAgq5ZQfUSerSkjbykqf1KLLy25fnHES4MU5vkAahaYw3p3W6Dm9baac2yjjj4tAAfPBp1a4JfUxRvBpeN",
  "key48": "2HC6F5HhAsj7y1aoKUnGkwjrEZWrZwf4m7dJyCST472eLP6e7VjcDtAXHVJ3yQwgW8qs5UCbdwUWUi6P7Jv7v9Zp"
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

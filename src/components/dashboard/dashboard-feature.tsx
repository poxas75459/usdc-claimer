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
    "61Lct6Un8Rb1Jy94P9dkNkUasDuFiKbLj5Mifivwy2MNpySM7J3PaEhAdcozooVwnTzBrtxaNhB81HKEsJXRtCXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Lkj4bVEHZy2cQvWg2nzYdGKpXRbxjw5uoKkqxShRj3stMQ7w8WM1vYTNR9vvjXUATU7RnbZYtFKmjUCic6brnKH",
  "key1": "4jiXTrHiAr1KUc5tNwzEU9gir54e4PHEthYdXNzBrDLR4i2hiFUZpYbqo7jepZmxjNc37MUuoSf2x33ni9geUaJN",
  "key2": "5bsBh8caR4ws7vKAFgA1AjCEAfksVxzuvLNhXdm8HF8iEA8UjrHRHdLtPKpJrvJ5DrT7yFQDU1Q3RM63bbFvonC3",
  "key3": "3Za2g4hZR52AFMBbPiSFk2GgGf4f6vVZhNRAk2TZSvp1pMh5Ct6Dv4dx76q3JqPWpjFWwfwffkS1i3Ja8iC5yyNx",
  "key4": "2YaVNuVTo8bHyzqyMjBQKcrdtwrpQr7qzqXnEkTCWs3Zs5ys7hdLc1vo14ZCMfjvXnWaz4GgrLQyDKURFoW2nFRZ",
  "key5": "2b6PC9AWTLHmgxE3AxEqcw2K7A5o99G2kDe169rM9CRNEdR3PVwC5vPinWcVsgk8S8uwfP8LQQNqQNEh2nqWrLtm",
  "key6": "2wHTZzVK3tA3QQwKWE9AH16ShDubnDguUTFodgChc9CEGLjqLVC6RuRP51VBBQeShRJB5yPgpz2XUWAA2uTgpDDD",
  "key7": "4HVKLSVFNWvUH75SdVomB5tALYRH22nLsNY6baerERxGJsGCrhGZH96JGbxuCLPCY1cCjRE9ovLkmR6rccEm96HD",
  "key8": "4aWBaE2hcANpMQi1MzFGkPCrwHobDadcX9mfuc9wpsoGW7NcouhgJUuqMe6axrYAe2RB9SSE9h4N4Le2NYD9oetM",
  "key9": "2UtP3pFUDe92yGX3pyQAM8iY1rDwmPtRvyBcwHRtY2Yzq4fK8RyUXDm8VKyvqgUPH4sMmYYmXLFNhxFdjWi645va",
  "key10": "3YHAywbg9tnfVrkbjuER7hbXXjVCRKgeSLyy1ywfoD9nCNJvZbYmXy6UsoREyFj1rVmQgZNoMN2LCMbxydyBKPV8",
  "key11": "GQU5Ze2p35AwNVQXVhv1YbVsi9fkPLuwLda7kXfDwYoYWjewf76bS1hAZNVUX3T7m7GSVaX6XtDUmCtuqMFUK45",
  "key12": "Sa5e4faLuDJ9qozsprYTBocUnVWxv2onQ61b9JThjq14bQayEjp4gV9jT6pSowdNFcQdRnDyXFaJZzHdArTSZsS",
  "key13": "4SQiC8jnBP6H6GsTTq443Prn3qXF8YFSgSbt1kKArs76YVEdoTu7CytNKxbhtczPimRyuges3CLAUwCnbTKX3WMw",
  "key14": "5FoNfapEBMoRHFbBNRM2C1iHGaTujRYMqTqFsGYjGGhvKQ2CxTyYFz3jp6Gt1qoET2paYe899VFTg99RDJ2H9CKC",
  "key15": "39exwBnmGRvvpqP8tQ29ARNCiQh9CEPdwsYdhweEBM8KEvFyRrEri57QTS36vhA4QFmVVkyHs79JpVE9s14Debmc",
  "key16": "2sB17k8qudxWLuc9yBBdrog52Hr8dhT7KKPGRPDCaDCy6L5aZdb4icQAzrXNSTS8kyAkrfD9wuKUHUyHZJRc3rjc",
  "key17": "2uofybceJW4nMpaeTNYV4NGxAtbB3zRTdpmDAQNZ2g8pJbin5TqH9k3EfEL7e6RF7DouNgytUipuDDTni6PtDcy9",
  "key18": "AwrQcJdn7vmEKE6JrmqewogfsRWnM7382WWkSYisEstRh69r9rSZuFV6HFvKGMocKDeNboaEbqto3XSjzk9smFs",
  "key19": "2HwUD4v1AVYtAEMD5wScEHPP4gSxJxJxhX8LefYHvdc7ptsrrrpkeN3K4tuhorjYS8xZuYZ7UHqgfb5kiDdBuNWA",
  "key20": "4QHXHeWgFq4bNFdMHnVXFs6ZBWGCox9uJhX6KSJacEqYWxRF9YkvtJUtFKEkpCxv9So4bwcDvJjPsmyzKU41Uda8",
  "key21": "4PKDNhSfCC4KPfWZszwoKiy3ZkD2iNECdmc1j5AFtBpGSPrR2JkVpFPE1qTJhoriJ13ooL5pR1L6GYvcXDg2M4qJ",
  "key22": "U8SaJRPAgswRk3asdX5nAc6wVVazkgUNHRG22ux36uxoKyPW9asE4rLJjV4ogWKbzQHt62hbcNAmznGWzCp6vEp",
  "key23": "4WsxxtUSuzHYwiddBxi3DQTRuJ1j15X8CagVR7XdT7d9RuA2MPnJo1KmjTyDrgKiJ7HXgKJYPbdc9hC2KbWA4S4w",
  "key24": "57LGw4dPaghbRHbsrNNFz8sJBffhRYWoE6vGm2cfuGPe8gUg7fAaAbSt746cSfKfcN4cgSqmTfqux2XnAkTs26dG",
  "key25": "2ZpWTGUfboxz11L877VV4pFuVJHQ2mLS5J5MWpUcA6tZDK7Axt4BzA8vLGArrT4mEgJcZHRprcdWsLFk31k1bVfd",
  "key26": "vfBYnw2xgvVcBdESS8YEaFVoBDW2tzYB6NHx16EDC6N1jCVDDaPsLu3DQLhnFe6o3HDzgpVPjFhYjtA15LAyoiK",
  "key27": "3ZnTfEpnPV5pDwta665sUeQaHH5NhkF7YiejnDqxaARGLaHdRZB9j3KH5swadisTAqWdYZEU82maJazD3MYWGRej",
  "key28": "2xsYT3GuvX44kuygTc4Y6D8jcKULg21UviDnhy9z6R7eJjPfsojuKYSPbpft9JHfRDnQbGtU9GcZm3Tw6r9J2r55",
  "key29": "2zeMwfaqzs69nTP84NyjR5GfXmT3WXbSZA9E8XFCUsFSdxgZ7PQXjrXboHTQALpEvKFXZ7GDfgw4fAKojepbq8oV",
  "key30": "2DvzX1Qr3EmdSGqznucW8A1eMyufb9adpKB4N5wNjR9XjfTyNPxn8fMX5f4Zar28bJsq83QGrhfbg2n48Ro25W94",
  "key31": "3n5xnjL8HzFArtLmC2UhtsLXNfpZqoGqXaxpy5DE5dvJVzxSeCMs35idqTbd4TsYxzg2uT7YgWzyY9mxnPsQ1LTj",
  "key32": "3c3wiRFm81nmarhGL8AKYQ6CMAsGFQ8T81CxHipzSrJ51TkGxYXaH1GrC5SHmd1GCd4Mdpn81pKcKHWDMvw7byJW",
  "key33": "5njzgPZvDRAFLiq5gScxfQrwWFA6bnrjfNEighYfFkTXYYAexPWxZyr9zEXu8wMpSSrQCaefWDtNHCfB8HmJLFmk",
  "key34": "2U5gnvsepW2s7oUXi8hFFq3ZGnWY3kwgDy1xWoLzDRLHmUPJMEumjncVVevXeLVVkr291WZ8Xwy73q7SQ3pRJDnp",
  "key35": "2DNgyPY4L2ALBvcCGm7c9vK5Z9gyENXhmJyajXXUiXWFdEf8u49L4Rc3UCvjYrrERfzBiz4aoTxnH55a6kxQFDJJ",
  "key36": "39cpSgVVBn9iBjs4MPiNB6hVSRegnnx7ZptmS4F59JZLcPwsLRS5Z4HQDFffkRgKvXtgDhb8CCFSiK4v9c9xThFG",
  "key37": "3yGvcvXjruosAQvKnWZKyJpU3Yh1pmt6ZBtoA2MHPPVioAkEWwUUDfFSXtWuYAhFyfqtFCyeszJYvzR917axvKtx",
  "key38": "2pkvEPCBWyK9GsCqMCziupw4aGMqf3YKLf7wgLPZDBt14Ueza2mh6VKWQ2JVTYgTDPCkFd8GQFrbWYWBzCjM8dMp",
  "key39": "2RLt3XXoDxga3PuasaeUoKjyA4iCvZkpUC4aaRaYrgCTdf7D4VuW3F1sDocYPF4zqfHvuAH4uBNWFKzsTfojmn5Q",
  "key40": "5Rc9435P5Y8AaN9ctt6VZRpTvfn9BxRNzn5PxMhDvq4wo5LfUALHmsKEGUNWMMD4C3VKpMJ8YPfva7d6C1P2r3b9",
  "key41": "4r7WSVwgTMHEkhdNHwJW31jEHAkYv1mpDkvsGhLxkp2EQoR4EfgKtofwTX2PeeWNR69UgpGtsqoymEGT271aL525",
  "key42": "256zFtZ6vECYmYrmttA8HQ77jNZGyEeHV52B8KktAsD7J2tk7tw8YsM7f7kZCrA5MLjih8hcMLR6dG3RrAXiVqK4",
  "key43": "8dgVAGRgo5DC7nartmntgShqieL6GpRQyDPd1ioouLBbj5JgGDNP9Hp7aXjwNAQQWoFWrizAKFq8CBGtdXXEkjj"
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

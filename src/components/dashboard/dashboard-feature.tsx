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
    "a93ZaZpAgiYrbNmi359MViqs26CTC5XNm37Sn2qrMF8woJWLSohAoCHamPEb6K2qwzk2dHFvzsQp3c9VL6yRbnG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZKLE8Zm1ycBvApmExqGzfF6h6Lx3mgYcwKn7vYKrGJwTk9Xu6DbLAmtFwbogEVvXxHcTaNyXUjfNpckesmoWfqR",
  "key1": "wEbGJZY3TMNCg1paMtvA56Phg3D3e9R4mTqKE5yqUCqRrt8YRLDjYWdUParXkMh9TZaiNHYcyZwQTpGUgSkj62S",
  "key2": "5vtspNbkKorm3sjWzFm3CUii4ZWDtonnftZhPPqNEEHsW3DbYw62gRSqc4Qr9cKQiLNtkYEgMf4WoEGLWeW1JrBE",
  "key3": "GxiEcqyQP4WoJmeEHiJdHZeUCbs2upSXMFtmZgGVmfwHWt2BfSkQoLakWWc1XxkucFkDuWPGF8CoGcz5yAHVDhy",
  "key4": "4Bz5v7UwjWxLHprY1Vta8CnVm4ZroRLmsZ4dwAexCXBXXhgpyHHpuSHBBdGSX2KoVwBsxebAPydawiX6iitopxB3",
  "key5": "tpQgSWB4AyY7LL1JgKSHjYQrU9Ahxsg87WPcTet76v4tfDYTbFULztMT1o6TmYUR9UJ5Cf8mJywTvPekz93Sydj",
  "key6": "JRfWSQsBtaoAphCVxkfeZgwr6kPxtXjqApyXQgsBk93qnN3AhBzBnYcKXUgMEACNFAr5K6NVSHoaUCQGJLrWy1r",
  "key7": "qAjv6bsZTf6KWQsDZSLRr9xBaDZyhiVSh3GFmn1TkAViQjU9tPhox79PKR5ZB8cFYJmCNZB5QF357NtYYJyvLC9",
  "key8": "Arq64JdoiQ95Po64ZrWK2XwxE8KxCRioQ4UwrxqpVEGXCxv195U8nFdBXYKjp9LcYKeRc65fpwn3KisAysXN7dc",
  "key9": "55Y6JNhSyssVsQVC9wvY82HFfT9FDka9tiG8ZfukGettigjWJ2qoSax7n9uBkhkNPQ1ZHg5gmofVPgVa8mHDJNYE",
  "key10": "5f2SqXUt8hhmV3mqZH4WY2vfFbax7yVH5jvPaUBRYjWteck6K5BMBa2VzWmpRCSdvc9hpDiTL3ytd4MbVuoA5ZzJ",
  "key11": "64y2Ut2eifKapWKdJiZTYHhBpwVGR6E94rcxysGwSuRB8Aurviwjq7SRYry3VVt6xsxdqnA2DC8kpX1XDuHCHwqF",
  "key12": "5SHCMKMHBy62jvQ66QhnKoydViK3oh3nsWBqs1CMPhHdujKurN5Zghwt2kssikUMLLiGj7N6uE4bhRjuXeRidEi1",
  "key13": "EJEQaXya7VnPmfSSWt5vobVxDLA9CbabQb3fZ3gvbamHjGoXh2ZTdEaWe9RVmSVVADChYwTa434vdraYZb9wTyK",
  "key14": "53JAyweaYE4z8U7KAPF4FyiokuLeCHSPNjTdiDdws3v8uV2q25giz25D3CerkJ75MTHa5y8SEPy3GogySeFQm89E",
  "key15": "5jFoxjkGMJm1LYyrBxenpfwuhE1CUNz6jgKFZdCrR4oekTN4LbXS7kQzKbzPVkSHbsU8FyE8KDTAzRp7XTceXMY7",
  "key16": "3RA62G9Za683vgw3rBFRVutwFevMxxTTMvT7JtyGyxmZNMY9iKVwHaAuPj1A5NQzuqdrH92ypCXAkfLm5h8fhsTb",
  "key17": "hfcaLjAJ4yVPhXfDvvgz25pH4op2mDcb4PjLFB9Uy1zGQ3qJ1E1NtnQ9rm4m45wpUygcxJNtLHyPzFrmHLcos4x",
  "key18": "2JJVSAwaHqJQwaTnik2Cg3vDEiMfBhqeiCsfvVb2kwsLEtwSxjdRyj14J6CYEwuVwUMJJHKRx7fD8tTroj363Xvg",
  "key19": "4Qz7Jt2dEdhWcVdEnVdcsm9iFd1LrEEJH4ULYWXfAtcpUow1tMumSouV3dziZtGTrKfTvQprBLwuHgiD6Amfh8L1",
  "key20": "4Z7botyPiNm1y4qap23aFBzwMNvXAv51TZ1oMcpseSzczrcnr1xBm1cqYN7bp2LgPpKo1jUCVbC8tqtPXuAFRq5F",
  "key21": "5s2KyxKwXCMdzaN3w1SLYMfmv6iQecrQEFXEw5G6obdeSHQzQttCsMfv93efz3SjN4WypTS642FWrUdBL7DSxP1f",
  "key22": "2cGkjXacNbNQPSuMQJMq7H3YxXhSeMBi9hziuPyn8xcEjJrWQFS1UFUNp7zns1gE6BiNSvj9XDFSHUihEsc5mDcL",
  "key23": "2b25EYeTTS18RMeHrMr1ME9caTgzNqoUgiiSbhSXVCjM63YAgxMavJDrgPTKL65Ut97CyQDCm1oyroiPgBybBND",
  "key24": "61YPaVhmJ1tdXBRkGJKCmsbpbu4aPTQmYbejbznscjUDEYGUTca4of5i77gXxvaEv7LuYSGLdCcy8DrtsohmBMC8",
  "key25": "rxLSLvhL3hfPGFcHGpJddQshtzdr9cpLtRbkamR4Hys2C9n32MotP16iZ3uQJQJjv114JnV4tpDW925uSZMpFUJ",
  "key26": "hxrAuPn5eXzED2XHfjEw3ek4GcXNy7TUYQny919JcWYz8Zv6B9a2i5Px9y3yK5ouwnqNfHRGto3eHwtVhS4Evn3",
  "key27": "5pyNE3GR2SQ1NCMWvvtKhKGRYMFBhRXA3UpMTRnDKyC2JCXAmrWLUk7dHncdSPEhADBL7q7Tw4tZsE8x3DguTmad",
  "key28": "MwnX2eX3TyM4NW3WRzhnNSxDh1cUVjB9CoR2p3hYknCxdaT4sMUxZ8bZcZjUzSYAJ1u6S23VWjsstEUWM22R2jZ",
  "key29": "4X1qc6LK2YAJiM1bpK1w8q2C4NXv6aJQJ2yyG29Sy8c9f6Tjg4ThqAvVmaSeuSLdKzXTTybRzM1etEDJbbC8yGm5",
  "key30": "AysqxDttSKw4SciFA5wEvrP5kyov4Z9FgCNd2H7QT132B6c9JTXCwD8CDqGbDoVYSNYWrgGKLnRz28a2uPdERhu",
  "key31": "viKNoNRPeAsSESJmxg31ghBJ44cZ2hDpZs7ctSamtJuQGxdaApKQTKyazrWPpGWhUMpjbBjmQoGRwAdLPVMJDrk",
  "key32": "6WTgkC1x857nzXQQ4HeLUG6u3xYaaWAbWKR1dH9d2dfp86T7kSmmFMqmAgQFEBqhEeWLhw1XRLxRLGNASh4Tr39",
  "key33": "ZWDGosndAp8HFa5dyvLMij1ycLdE2GXwY5Dfu2ffgeu9rPa4xicdYW9ujNLvF8uKRaMAyzihTA7ZhhxmnTBby4j",
  "key34": "5Q3vvbSirAGQzGsoVtVNRJ4JzYsbkPjAGUBK4iWn4urkeiq5ZREAt8Uxv2p8chiRcFhBn7r6Mv4kssY9E4FnJ9Xt",
  "key35": "5WUQcjBcHbX2rFhTYKiiU8pdzUhkaEf2gKAmD8sn2mVZRjyVpPHLP1YGALYrKUXE7NFVZJaBeyTiYZbGKJgD8H3k",
  "key36": "51tikSCQ41F6iJr9gXRxRGiBGLcxVpRVLaxV9hfBwbAeJwq78K8NK1bjxy3jvy5cN62LuY6ooBXM4XH3FRPyTtrn",
  "key37": "2rYei95NchYmsRF1KiaMoXnWavcf7f4CVBMKU8uziAgx8rbCLcDZQDbA7RgLkr56dJjnxH31jJRE9zg47gNgNPxx",
  "key38": "46BWnXRqsh6uWt2xsgFucULJDFUdwErnzkhuqnyp4bZicFZZ25h9crEK5HExtUiUjrjJQpdA7r8JvxhJpKHiV3SS",
  "key39": "4TwFqy5BBixkNZkGMxFh6NdVWngmUcDV2kmysRNvQ9fzVyfEeihaCDXDQLdAzp1FXk7ocqiJZySUwsWgzBrLL1wE"
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

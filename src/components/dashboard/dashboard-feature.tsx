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
    "3mPUDq5t2vF6n8MH9Yd5njE5my8m9BkWa5BECUXzgUz59yeZUJtqK3U2Xpet3UpPH1ACxqvEREcgz2v1nP94gSS3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SiAXz1dB67SXsBG9xkgZns413Xy7DSUjihKPZKeTkyq3ziuYT2f3EX2jUj8Cx6BnSQTRjFYqpRc3BH8GhbHMaqd",
  "key1": "okjRfcK8mPbdQLuMfjc8ptXCttwTJa8xCWXgFAyVmVSrKioBVuVjyeBuK47nkJbBXjkNDPu43yWPMaTLK1wgXfn",
  "key2": "5XxuLfvfUsNWvFmFKX4UiDX9DVKGxT9TMJHmUTG4G9UFj4EbCK5w9VBi14k7EHXcW7S6RZhJ4ZbeWyqYEJpaH1U6",
  "key3": "4aHBZEx2TGZJKFJWchnLLq3nsiWCTpsBsDRyvhonp2zDnWLWMYGB5u3CxFAJWSbUzoYL3G7JdrsocgAhTFebbEEQ",
  "key4": "4ETBX4cjD7oqbQHKaB5JqQWvfA8SCUM4imjrGoHKv3vdEaEgupkFpBDk3hmUQVD8RSnjFEJKQZ3tbpyXDYzosShy",
  "key5": "5r4WgxXPVG4BAfNCtke54CboG31bm6UsXUXAN8ajQsjGjP8WXXMCVSQssjT9xoUemb8WFWzVa7dajCcsuiu9oLVD",
  "key6": "a4sG4Ho4iW2nskC6qTRWUTKNuu7ght2Jp7LqXLrDGESeVKxa3AjdUS9yWLVSW36YG9HRgA1ZfKs44ivuCCtU2pT",
  "key7": "4Rn2LGZDMvG4N5ox1WSuriDmPKaPP6axg8HVdgFg779wYRpT2pVqagfGmApLAK96NsmAieqQxcwgDibqiVyuz6cd",
  "key8": "KuSntPk8JHzGnwCnjT9vHSHiLUYaTtT8oRrLhRiXHHNKC2NmFrLmRPgXbDAy8rv3CocvWrZyrGe2DLHn5TR2dEG",
  "key9": "62uUkyPMRNyxW18JvwyP2R8JZqznf56z3Berbs5Wv9o3PaenKiZFKovHCfBPhFLHZzWiV4xRqVRBY7eSbvxotnGM",
  "key10": "3GQKjvp6GPHcxAc2jAZyKuMTz1r6pqpSeKX98E8t5DV22Nx49JgPFd7YRFMBgX1ce9KmoTAautA3nFT6yoTu9Cug",
  "key11": "3FLYHec8uvykf9iDpa81SYmbb5SLzA247FABdSNNtvvr39qrKCrFd66md2Ad5aSgF6o7Y9ThTkozBVSwQ4oceqdR",
  "key12": "3oizZquFJSWpbhW4GkgZi8YcMRVruHcxLvVyqUYTyk7e2fJ8aHzuFumF8W1QTtPTsMKvwgZvoCqU9GUjFSSHBezs",
  "key13": "4VdTA3bMPLwsjXzd316boTCVVQyDsVULpYgy5LmPwgQ2v3HE6XPf9mDK8dibVtQsJuzFmU35FLrvhiytxuTdjSMt",
  "key14": "3665kQFVCaZzPva54o3Vk2XnKs32P5KfpoCJ21Z8JUcnbtYrQp3Uw8ybNCB6giV2NLN5rd3bPcguNB2ybrHfDjmd",
  "key15": "2kcaNvJ5BjQ3LJAiiZdXYg2Do2x8MqswtiFJXDPvbEBrpLXzVvJ5PFfFnyaJqW76hXixCVVN7cHqVjwrvunkEEcV",
  "key16": "5m2TLZG7cSsQZUEcuxmnyi2rQbGtrzacHE1NZt1yUarXGVC7paPaLeTYJLV2N6ZECo74tAXNh6kBN97MXcTfEYCu",
  "key17": "2rRZ2w9oA7f83pmoNNoxjYx8CbbJV9TqG9t4bsD3sBrJ1UdRNJ2vWyXgjPNkFSfSjUNmb1T3kVJnL7q6xCbZKZgj",
  "key18": "MzcDMC1ZSgxokJywtJXov1HKtBUH2RWh9vorxdC5vgmJsxDDYvgQ3U5xf8bdQ1FcHeGbdChWtrghdgGMAQ7jueu",
  "key19": "R576eyMDFJeEkiuKSuR5PKKBzTpHuUS92ixhnxyvz3ydqCoTrBZXfZDsumFMvj6oP6aizaynPbwsWibb3BDnHd5",
  "key20": "5KvkRcRbn9RWQVxQsxpmFbVkFxFpv8do4DzwEHazPazRTZwxsYoddDrX2U1QFDLVMRDe7buVAVJ73sWhKSoDtu4Y",
  "key21": "nnjTe9M6st9rp4wgwxpmv1ZmxhEXtAkopKpXEkgnAcxb2VwEbpGaVqNFq9h7Fzjwaz8jXNdbPxHoxEDCbPnqxi2",
  "key22": "RDVTAdMxVWDrQmKraN9cTFe5Xv5g7f3Q74uW2gDmmq32pUXCDsVzhjf7TzBo5rXNZC8EdsSCxjhoQwWEPKCx2Jm",
  "key23": "3EUfyJKy8RGeaGKVHsggmqydbTtUxCjyBewPq2oaRD2SFLyTUYpgH6kwSFfVFdMHLGGcorTtkdt2Mz65HPcDeFgm",
  "key24": "56yzL7MqfZwrMYJ974pAmES9R9yNzCYGXz5LrBaozVVJkNUhBT9tqoHrJpj4ToFaxzK6iqK8P7h6HQaXP4uy4z1J",
  "key25": "2AG5N3hXCHvFMdey7GukFi25o2suk7WugThpABgnKsBYt4UV1153Rt5yakoNmTnUzG7Xx6hTPcMbr2BcLnQasGAP",
  "key26": "4zzTQP6HjZa1466b7qtsnqi2sAbMbvCEU5t2stZkQeHSeBWw9hSH1nHcxGXvGGVV8veZNysgzYGiWdnGERWThvhi",
  "key27": "4tWsYxPA8Ht7KmeyhZEYSYihXuyvPB4MpxEXx18bnJuYFDeQfzrvv6LsBJSGu9EY8JiYTLDqMksiYdYRiREdY1jb",
  "key28": "MTGJsWk2vcHHNi6PZc2mZJbSkF1k2CXMjVuRSzUi14PeayXEpN6Mm5svj65dyWGrB4D3VLhqfsGhDVJuUSfgzqE",
  "key29": "4Ne8b4LXKzKyPrzvgRNn5PDW8wa1NhLJf7wvzW8nYCn8iY8Nap6YHWNVDFC4Cnx6KacBJxCStMEMpY5DGSfn9uXp",
  "key30": "4V1GGiabh6SurqiHSpCon1i6PtHn5CuSAepPP1Novck5XEJuvcZJaerdEbK532NcaaRvrZNuygoKd3pSqbh8SVv7",
  "key31": "sFCWf5zYRLmjS5ZAN1TRz93dmnYpyjrUFapGNyGNcQRVHTsvv61yTHtekzf5YwoMhj9gQw1FbAYhearRkgUeNXh",
  "key32": "2yijB4AersFWjTvA6TkrwsJPNkFXv6dfqeFwCW4ab63DK4F5Kaqy2fw1Am96ovd96hewpgpa2D6bLTo7P3ifrDpc",
  "key33": "2gYHxdRYbFi6P9h1Qm2GNB1A33swKe6rCdd6Ky3mbLzXofBvHeFLmFYccH4kbPoHESJdte9tDFbPfRugvXhKc3BL",
  "key34": "2qGBngGzmmAFtHnz3Dgxp1QhVN182Hi8V91rmKid2b5fTVfvKL8AT7GoWuWgwcBtZU1eWwd6rAZXmN5omRswYNpi",
  "key35": "3A1iCNU2YSr2n1JuFPH15YqxQVuzhvuhGEh6nq81wvUbwRN3j4DxWjfwRhNuconvRmsgp2a3uJz7PFzaaYZiPGQd",
  "key36": "WmmSpCY6Q4T9KD65MDCk83Bw48Qfa8pK7g79FThkmUNcMu8ayeqmjn1xAE6SMFJBionufx7BkGTwMmqK1WrLPQW",
  "key37": "231dJ62Q6QRkTvdjZ1u36EsurEG6fPg8g9Wf1CRB1Fr68E1D2uEfTMKSPzA1RZW3yY8bcQ5z5A2TUwnkHgvGZkiQ",
  "key38": "4J87uhnznrx2v9m9AyBDQKZHh3hJ1eRao98cSUtHTUreYnmJJiVw9mq8MmkiVqGi4H1f7Z1GqjdEVK65vag8U8Rb",
  "key39": "4wbppeD6TsKmuVfSoAWAWMnBhviQJcKtuJ9ekFvLVWNYAwMmLx32y5FGxL5pC2Q2p1qSPdbNjiYbXFKrXPnrL343",
  "key40": "4QT2pHv19UAngZRMVM3vw8BcX1UZQ4X7UUK3PB7DKZbqbfVXpVSGh5TzgY5vU1QvHahnmtYe3VY11dRomq6QBxpk",
  "key41": "Wa5jJp8Jx4yHesefa699q8YSWcMU1WRAQ3oHJf3Y1FPRczXgL64e2czkDA25cP8GiZgRuEz289oXx2qVNzTaZNX",
  "key42": "4FQdq34r4TauaKPhvhkxvUxQWhW7WfUccN8wp9BApTnPggcipAdPtnLFsgyPz356GrFgcJS5QxJsg86dQpRy5hGq",
  "key43": "28CKWFbuU16qAkCV5Uo3R86MHwrSCzvHCZhWsb3uajabpNfzcSiC4LQ8e9gnHLXVPMdXWRA6a771VU68oWkxkudF",
  "key44": "FmtaePrBTwPbB9zzZwgCJdZNUADCNJCNnWptNvsWF5G2HcL3Aoge9BA3XpwPmwVSvCGtrkmkotbYvtABuvEtScx",
  "key45": "5W5TL6QQ74vitBbsrBrmEAWcT2q6qNFh3SjtiPdE1wT5G2pY2v2MbbZ7qK2gjFaeVKUWTqJaK5qfU8jSUbGCaNG3",
  "key46": "5TpziCsCsRtpPsaHQxbh61g8cenNTqD3L7JhhYBoZ9M9E2MJtTkygpjXvUiqwYnuhmpJy8sKAZiYZ3WTp9UPBpZ",
  "key47": "5WFRPEJQ91vmhtFs5CL3taWZNi99MvPR8Cogp8gBVwD7MRVGBMLiSsRMsRsfADhfW3XFzZo3cxs8RU9a3R6S8kYL",
  "key48": "373Mm9PBwoHHdXpnPdqQ14aXYk29z2z5ikCTsF6Xz1w522CBjjo7hNVcqz16UM3TAY32qJ9LQsHd1Fzrdbb9ho5J"
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

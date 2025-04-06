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
    "3ZoGt7ppWfpwHNRFtNf3wnHEZaKKLedNwhGoXVuijUU4fb4rJWEWpxpDL5NnKrzTFQfvnpUr4nstCcJnZuDtAjaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tiYE48L7uxmHviSkH7TxV8Pu9abn99W6dNHTc4kySYu2HvQBWToR5zNgFSJwdQb5oNCnkmd3WxarSK3J85VEncS",
  "key1": "5RNbXLwfEMT3VEh89rZCBGQpcFvLNUNFEGJ2MmR3EfN8pSPdk3VTi27JXiP6U26tet9iMeWc2NFpsiUyeWpfSqm2",
  "key2": "7hK5rx7fGrXe5RwRiF4gRbRn8Zue1nSEoGXxNjCogMyYonUwBNudAmDYteFSJhGusc85kfbEkDPMfqfn7GxFSxE",
  "key3": "2h3hYELBCsNnWhDYprbZezbGpcAUDawEXQ5fjENqRAvnHSTZGVYH26fXaU1AtMUvuK2XBvhW8V1bceRorGvXfBf4",
  "key4": "4U9dMzzuuasYfGvsoMMBdT5sk1MM4CupvFaKsGX3buZwxLg1seC7J5ZzQTqyaZiK8hN8z5vh8i7xAeNEDRb8GmST",
  "key5": "3tNAeNNVqogfiVXWXRGjpueUUQuQRwXSJ6vs8hQRV8gHi7wXBWkL9XYmqXcUfBQLMwDzrxxa5goWCqEPgSZSdXar",
  "key6": "HmgQUWoqBapsFbX1Sz8iYJ6Md4LHjEuZzad93b3fiRWRfSCeyMx4Ztenpmx37cANFsw19wTqUe1pxTXbk92SQwH",
  "key7": "2GEVwqbJpmBGNBxtjssViSn1ePWZgtVyxN6HasdNDSTuJh8HFD5omJT87n71E8wnwpKF37dceaxFy7pBTydzx7sZ",
  "key8": "2DEwh4XaUQYnEfosdX2Q4Tet2meREbEVRTxpAEUFdNeYEuNc52JSiTj3rXkAr3Vyz7a5XSrBM28yPA1yheDTo1Gr",
  "key9": "5n1APcDcZYwDTE1Z899diZjpK7oh8tGZAtkpNbr3EhW9wBGdSW8zrYgj37NK9FGBu8P9mgUHNinrHsSTLKgmj2bw",
  "key10": "3YAwb8jh7BxDU9CqKqpq8MysVhVfZ8EBMLuAqpuYiGqArKP7hi2dFCLkq8WKzERD4BaemckRGNaseyt7cmRsubF5",
  "key11": "4RbcttYZuVTLqvyuFvwTPdApqpA9EyKCu1UJPhUzBSNDLSd8x97tczPtw1YQQZ16GD4HmHkQJgn6wmd3BxpsV4f5",
  "key12": "2XU7aX2rZJtiwrDFynsroATPRmGgxhJyJGP9t2AthJC9y5e7prCT7pmB1yGNCQHNnRMYAMRrJV9yo88j9C8KpUyT",
  "key13": "37TjV8BbDoyBeKaGsko72tovT72eVFpUU2SHG9kCoH1EpZo6NWgrn8hmzfi3CFigUTwaRyLsypj2mHDq3CWhEXPb",
  "key14": "5oC42NdM1rNrw269JCLA4aeqeAjnJDWgmjg7Zi5awZijghPaKc5NDRW8AcAwwy6oLPG2EG91cyj3Q7LYeGssL2sK",
  "key15": "277sxQtHH8RboWxDRbBAXcgReHKGT6iEM4EKmfd2QNaog47yrbL3Ao6XgRHotr33HEmicEiWvQwXqX91zdwX1De4",
  "key16": "39KaKEWcLKqXhkanxcyFify2YL16KAZKohFievjXLv1SFgwy47Br4NHTekidUmALqnRFUu4Av8426SpC8VCa2Cbi",
  "key17": "3JdqCG9pSjzgCSaxjB26aZSLbCLERcMu486zzQWaBvX5Vt3CDNHb6VkQSAnrjazKnUeER952tzZ3b1y7qQxSAG7z",
  "key18": "5b1V8haYh1bmvGYnMyii8CHgQSK9Rk67UEmjybdES3Ys6g2FcumLqpa4Ei3wTsBMiusRW6L5VhEu1vbxVHpCdVve",
  "key19": "51N2Hfwu2zPU3uSneepnMPY5DqnHVDpWYMmu23BUAsVcHy4wVU2Wg8DceeKhS4oLFg8v4yUUZbDy9yauZMnmZa9E",
  "key20": "3NK8idr2nD324GPvM6zGvzaiYvG3tERgdrw8BMiccYfs9sQVPry6gEdYJS5qtiGWN722ovvrzVEgLVUGh4AkDz5K",
  "key21": "2o5oKXZ1CBfojn2iRocw85d8VgVPzarLoa54h7dHAujcxG8RtHD8nPn84xZUc4iqHwkQCFGpZShmHHb2PG74oqa4",
  "key22": "3GzthvzPX1pCMQm5Vo17AgurhxtcEWwxaN2oBMD5WWJizu8aWd1T6XJAjD97LDNdbWiKYNtuNDS1RvWUxVADqXxJ",
  "key23": "egjrNempHVxBkwgmy7rgDSzh8mKi1LL3rb1JgHy6aCvZJL4RUq3edqu3CxUrKLRPxQxvGMYSTkKJ4JnTpoKicAf",
  "key24": "5Jcj3xpfpEZepJ6jNE5TSJjHXcub2Sduodab9TZkpMLAoaqrvsjLSaPp7DrwdmwVEctaJgSCFKsmQsVi2TreiDn1",
  "key25": "6fz85hYhr57dWcUurk5TNhKA1Rf69wew8keXo9g7YCdLnXna8C7KAkBLnVp7nwkWW9XjLBAgVFAiNbFW2Ti7evL",
  "key26": "4NrJbkHFTAE9ApE6L2oVArDNXNGH5oh4uWEYRCoWBK6AAhcpuQeB7Gca9KVSEDRws4ZJ1Yc2XWzXRTLadueFNPFP",
  "key27": "66XDZp6Afi1S6aaeGF7JbZJvqJdRhVy3Gb6M5BcCYx3zt2BogJ94EAYWmDdLz58vs2C5AjU4vDNH7Y3UQzZfbpro",
  "key28": "4ATGXLftUrNJ6ntnM6jowBGUVAKcgMNRBEXAyavH5a3MFHPfNtdWBayZLP9sB4ye3P2QLcv7Y5aUFXXMh6KtqQVb",
  "key29": "5RrgBzPH9yT6vbcE8FvfEuLH33qZ1g2qtB8jtrqsVhg7YSbBMHBksPpvmVvbZ3wr1gpbopSbKQbUFZ92WYvv7Xcr",
  "key30": "5psmbGywK4brCHGZMmwo7xc2fGQ4GE8ujq4VvGsf2LPecCoVnKkhzTgHgUPgqvd2bqdbyjmxptdakaBPP7x3wHfu",
  "key31": "22y7BiHEBhBfWJsJDK3fckWR7LsHdMf8S7UW8UZkY9zo5Pdyk1yoTPStDHqHGUoPBu676BThFhSU6xsqA6RKDbUr",
  "key32": "UMoJATRZ46jVoYTysS9RMUiBSsdnRMdLJ21KkQ5Dt4Zuw7UDJZ3BrV4r98Mmeqa1s76kYe1GvmTECazxtr6W1Ax",
  "key33": "2tWXMvmBjXs5t7uAatEXdbfd37qxxe8WccFCV1LxG2J39vbUTcPEDv1pc37dTqsNSViDN1yAGmCk6U3htCHnvxoN",
  "key34": "5iQni2kajzTRxFMLuvL8LRKgCAiSz3WBbusTJB4ABjsS9wdwtSwDgosA1pzPR6t7UrdE7d4drdZmQxwnUqUGY4oE",
  "key35": "5STtCvHjgrE28boNQMPQR84TwymJUR84vqqvBUCx2JBcddt4X7jxhKWP6YocmNyMoYfMqSzAG5jb5Vpk6599cvSj",
  "key36": "28vujv7wUm4W5ckfRnLA4RQ41PyFjw8wXr48xBb6zjh49mdpM71dADKCAdD4osw7JuqAyGMJiNRd7WunieDMhQBg",
  "key37": "2zcnjrCDFfxPcAt6DEdkgEp1B4hJ2cPtKvJ6nf6Y4Qe6DdaMtMCCwL5kq5yU5nRH7VsXQNG5abnWV2UVSTGCERUo",
  "key38": "aFnCcPDL8avVKBwvRYxDPsW5f4vEpVfQ8h1LM36ykUUuEcrWyZV2mPACziJNM768PznLhLsvCaZoEHjzDSnGy4C",
  "key39": "522C9VdxtmCehTB3LdqD9pf5WK753M4tu8sQoFxM5PYJz1bspKhN69ixbVrTjRCE95A81aceW3R2nVZqpjG8VjdR",
  "key40": "idgCsSdx6zP4DMLvRYAhLn4q13r3coStGSfnfJLm2DXY9qoUrxn1k79R2toBs1JvM5A9m1j2NRhjKnZ9RPm3Kb7",
  "key41": "3QruRbb17xDBx6vx4c7gCxqPDzPAZpyFA8WzjNgKGxoBopokCu8uBpmpv7HW4KkRM51o1ANZn3jJtMpfNyjn3xcB",
  "key42": "58y8KR6BdH55RwkWNUQ65pTnQUMVr5MWWVJjhqtg3XDKFgTLBanvsATe9TaJNDGPbiJ8FqLGuYJ1wnvNgX64s3dd",
  "key43": "4LadiCAWerseWwhaZijkbgGHtGAkRPzAydCGjrLq7vcqhPMwJwULcGBo8bTCBzRjEJzAS8MvTSFfbjStWTX1p4dS",
  "key44": "4nyNWZ2p1owiNzvS2QEMGAyWQqAdeFbvu3ksJ94kDWBJ4qXLKGHGmCHYR9aveAAxygWPy1iH3B9EZS45chBuE8Ny"
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

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
    "FTxsnWT2jtncLrAZX4PaY4Bhpf4uv9gM4L9AhMfU1qeTBaztQ4NAay112iSGnWkVMW628J8vT3S6rjgaKhTWmoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Uw92PmBTcMzczo9foSqNW9avmL6ceuS5skfeUxokauZ6tv75a4xLwoRqM7zkJrCuR7HvTD87idZK6a7QLaJa8E",
  "key1": "4tNNufsR85MpLaPJrpf7NY5KfBqucuRWxkzyrhsqnLgEYaf9ifxAk12f4yR1W5wbeo4eQ7m4V8jLzTuoF4RA77cF",
  "key2": "2TUbZPDojCjkQqDQk2AXWczZdTduYBGGqarNmLatksYU8FPwF7un2g6wgHHDdwTfeVjWaZGbsTsLqyc3FhPZYmFH",
  "key3": "2RA91c88jVtNe42QRniy53oE86o1td8XnFfFtPTx3y4HD6E4msg5fWoW9gE4NMSDkuktdDknHjArvTECPDwQx3FF",
  "key4": "44vwpSZA2PsKUUo7BkLwep6R5yAGB7j1wvWth69wSUMLVzpDP7UxAfssvkiqGNDVWmjjgy5vzxPV4bUt8R4DqyVf",
  "key5": "4jxwLopo7fTrprbKDWsYEGxeWFhRLku9sC8j5o5mUSrXRkptNtkikycuaChnNcN1VoU29aAwgQUksAxBe73YB5MQ",
  "key6": "CYGMGjQRmeJBNvYv5TjJ4Xm27dCEHiyQb8ws8AgPXkD1Q2wEPYiUT6kuSJQPfanpU8TB6dB167oMJDqB25Sd6Xr",
  "key7": "39qqMRQvc63Vsh6Lz7FSnd1d2Xsyi1cXQZwNut2Hz8JP9PFx36pydon3tySitxpKnMFX1DPVUstXMtWYnx5o3kkL",
  "key8": "2QBdL68FtZJ7dADYQGLyeu5D7kMjBT3vUtht1nJMYX8Vc6yfbSnWqS1hN5m9ftqMEHDbratZ1uukR8oYGxBG2mb7",
  "key9": "j35KKaxngv1jW1nyWPdz5QhbU3JDhAShPKz9H58jvgERxNqqNH4EwVJ3FUAEEscrZGmj1yx79vZPNx7hnWCEWNS",
  "key10": "339zJ1SLrJPTqVtfdhf9Fay8swRtujm76E5NunpCoAWsdua6Y3WsztgeNpueUfuFgQbp25dkR67dZwUFLwZGHdqb",
  "key11": "431ZwnfC7vHXWkZcAwuD1ppVJwdw8U7STtLwz31RPEecJMKBcgXRnQDnijypQvKK63fPqKLDjk9XdHUe7JEQMfZ6",
  "key12": "3mNQa92KGmkk6P4jR9W9zR5DY7iXAKMcnjdfKmwc9n1zredWE8zhrnazLZEYJd9PsdvWjk2zTp694XfjQwBuLmiJ",
  "key13": "2Yd5B8yh2CBPvUe2rBy7bUcxYGkipabVV5vevAdC6zKSiuR7VfNsvgLD1T6UQV813kKHLbx2Tv1FKL42JeiNpz1y",
  "key14": "3szVpiXSqXrj7WcRHAKUzce1uxTrfoopffsrsgmPFSca9Biqwix9CNgdPQqe5baPvhDbeqsASzTDDa5dCnNKSktu",
  "key15": "5WEcoKPE1RApAwgo6kxVDkBkH7NvvGGyG2k2PpxF2fFrjnd4sxU7squQfWFMCt4PiDMoUKrSkAUXXyiANEdNpEKw",
  "key16": "4SWnRtxkM7v4wCpLUAYWgWKniYDA6J5YarFkKcue9fKA3THMSsXPBwNGmxdT6KU247oYV284oahzvnqYyKGLcwGb",
  "key17": "5YzzkNKYKRgXuHELuHM3N5hsrMZLDpz6LSLmaiWoivgo3vBJaCRmpmXaEzb2myoP7wJGqaaj6jNfZDuwmCcMtD8K",
  "key18": "bPQT9jjWfKj3U2dx6LtVMTTuUYqehwJrhCmuRdbvfL831JARwGULx1JKozrzo32ZqVQxWvEZsPy7xN1S6A8zr2s",
  "key19": "36UmScX9A9Ug8TY8M1cZWEovKS8D3hQFApc2Bd2kXvKxqFAqt59vcuyQ5wxXLJdX8KW4LwqcUCnaVHJ9ApPfPJAB",
  "key20": "4A9cspEgx3AKM5TqULcSLA5HqDsfyDz7RSwFDhr6QSV4zkUbxuY2CwC6eeZW3jqcsNAX9rcrYw4XRmtrs1T9KZC5",
  "key21": "2zaKiitYbdEMQmq5ct2yuWMc6adms3g3w566XeMFTc2KFZEzKwBLuxTDfQRMVZhW1daGovk2ZpHt8oK5dYCZ5q7f",
  "key22": "4LWmDmKrkjbBrdaoFAXiTMyhkmmkkVudCniv3yRFmaVouMtC4FxQT5wFzeU5Vav6qrchdwHwu447CKA15XA51muD",
  "key23": "3bBQANw3m1MFJWvsTu89FQjk3X9ghUEDBd7C5f9XMzMi7jhcghb2YdzQGyRnxLymuKhEUurXoNUrx4EE9kATKzC",
  "key24": "4QCCSyEYnHVRPspHRc6fApDkgEZbAaFaGV3BLumHus7fHDH5ZjbhVpEvNvXqUBr7gvwgx5NgtboPN4bSErNkNWRS",
  "key25": "4gtppPcsme1DBRMFnv9d1r1scBAkC1iAhAR6tFndknAmgsicMQXqdUq2mWQ2jKcsFhrahtdDNfsE2GmsNAbeuQgB",
  "key26": "4DrsuDSR944rBU6jzFN7M82XCRMLJcQToimdZm7xoFoFJMqdZE7TBgyvdiSTNQLhHq2C1u8Qm1nkNa8YsexT68SR",
  "key27": "2U5vtpQc7iQGouDXcqDRD9DNehQxqBuzJWMDNeRymwvhVH2pLYeaCscm5bJtPVgRLU1FNS2azqtuE4BQPdBePR4T",
  "key28": "5wnKiMXx1qCAHEShFFAiuk6xquFVozaEZGoHDJ94jKczWySfoDZPb624MAQmneweZS1xy2qQhQtQrQMDZ9MMoN5u",
  "key29": "3F6fsP1skj2PPrhe69ZVNWWAXg4BpxniqtGtBmH2qurZdypSSHjeQn5JzxfH1A4xmZsjwJtcVHvgUMVjcLaQgThf",
  "key30": "WghGzsvUSqiyCMGbDGyF44e5xzHKeiSHa6QDnvdPntGE5AimZytvssb51asmcnSF4npEZZQp4hJVMTMYoqn9Ni8"
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

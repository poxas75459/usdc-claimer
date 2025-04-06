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
    "qhZXTb9ZSEQkEP9potcLzC7XwUXhWBe9RFXiSofTmfj2QrtXmW8Z4Hd6kB7LDKCBoSeF18WAvXg3LaziXmySAUr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNz72Apt1eoYNFyTYh5Hiux9gigcZqrkwY81azFFj6VCt5Y2fRPwjzyi93RTFoZSemE3R1LWPrAJ4j7j5fRpRdf",
  "key1": "3F9giLBKptpoNZ2N7hYHBxDSxeVGg8mBCCAoU8pcxnwQzJ8AsXfgD2n3NVht7mo8wMiTbTchRmKatQbwTXPkvKSZ",
  "key2": "whhFRhTgSLFYh3ivXofoaXi7QvAtjJyrQjvuWo52yvwards1a6D1yaxzzWcwzdVtHpcyLaxuqE6mqwyqGG6zJJZ",
  "key3": "4jWLfW6vBusu1CJWKkVydgCoJipr9q85cz5eoyyd14jvfx7N4uSr2W3w7FfziQpVqUp9MmfD7NC8sU3pbz6dE1LN",
  "key4": "2U13MVShAi8d7tUKbHrs8jzgwg6XXYnvLvUUweTsrFELHsc3LbBRWLmH5cvjMGpGTnQgBdMpLvdRp2NUPiY1W2Rd",
  "key5": "5Qg9putBWMUCZQVZiZzHHXzWTdJCiqYUmYoA3FtgzunTMHEkXs5sR5389s1AveTttaBSuzxKDET8c6y77NpXPguj",
  "key6": "28KGqvNGLJwwHDg3eTbPX49kdA1ijc4UrREc5ZmKJdjb3oBgBHyGDzwKXDVviZkCcN6mYXmhz29hEpAz7UigCEdf",
  "key7": "3PhYfJevyCkRU3woToK8Qg1esFtVt4CsNeNjEXZm6weVyi74RcFv4H6HWH4hQAxU2HXsySWn3r7f7YbvQ1ddwJNV",
  "key8": "64DHDkCM7ac2CW3K22LZns3FSEnsNekkvocZcRZK7ZTpEFf45A98tJcHPnqYoVdkZTuP5U7MAQKyk2hBzoEFaquk",
  "key9": "3CuNSPvBX4Qjhqm5dW5StEpShMnz1GYTxmFeaHym3MFCZJjDZ1yJp3JCDKG9ybysdeHUHREA1nfW2DSHFXpsHDwZ",
  "key10": "4PbNi5tbGPdfrzTG4vrLG7rNSoSCdkVqDjJ9J9RAcySJk5pEkvUBchv6ARPRAonDWcUDQjg7V9HcrbTwtE4M8H8y",
  "key11": "4a63aMAbrfgCC15B81rDqYyPQuf5XazoQzFmvjimac8Mo3FnaRM4YsdKvQJoeqji4FhPxwXEYmVY2taxrsaBZfFG",
  "key12": "3qTgbRPRLsza2goqawd8Q1XuMpj6zV4oeKwU5jC8zdpumMq4NViaXLTVdpt7cbAbfw2h4bz36kRhdrTjaNsPfbT",
  "key13": "5HRVkMMwtcY8V9G8AGgiPYbNL8AGU6BuJRJpRtAAQ62Pj3DYPQkx2VrZBTZWmp8ZGVizkYz1qNncXk8rKpZmRemU",
  "key14": "41YDeJ5doa99vHsqQJSkSQSWwY6j7HPRhG2XTZmaXwYaEJVpA47Q879BKC3xAgnRAYCAbRFcYmdXNibESfXPLGBK",
  "key15": "38SGrZ4qGoks8aVtFseqp8RfYaowkZQ1ikrJqg5gYtgnyVmD64B4Tui3kjj9fYubyqa1mgrpAqySRSNqQEDievSP",
  "key16": "3rA4DgwzFQHuNi7pEDqq2x3TWSVnBh7dsPKCH91pHiemuQKjJ16MQ8RgsMGTbxq8SBW2rZypRBWaQ6D8hdSNhryN",
  "key17": "25z8VKipL6hH89uLVFEHHciXEiYeNLHK9r7xMQwzTqWnoVrEHGtyTAgoaoW1hJFQ9t65LEs43HonG7FWxp6H5UaS",
  "key18": "3rspig2fnMGzcrEZNFmaHG3ZFmTURMZBFfyMoFiB9UoXVLxzerMzCGRU8F1ekNSmcXWxMXk9WywFezkJpBPWUzjm",
  "key19": "574y5DubscmCGRZGUtF8MHPeVcVUUWLst7n4jUEcnGs4h5WM9E8N7q53Gr8yjxnFPfasrozhEYWMz7NbcE7q1iPy",
  "key20": "9ZfrQWkNeYoJKxmvJeNvWPmgzEpsEpLS3M5EZCd8hJS9G77dF3sLthEZHJbjCmurkAhTZZjNaYiDYUkVHKtQMgm",
  "key21": "4CtomCkSGT9tyF9X5fpP8sHfchvQT2pPUaKygMs3ZE96JAaPPJdz5LZPDuuPyTkV1rsZbpcSCFWcG1JJiKtu6Xhi",
  "key22": "4gc1d9mkZv6BkUb5kAhcqQM2oTH5bvsMkan5i6k9CJFjMXSM6hbGudVtTEufJUowok9cuER3FLT9MudE7FCk53TK",
  "key23": "3C8qwguPx5ryY1LrEn5qncfASwjficwTC9TvpYYenJooGAVdkQ69rU8wDyWSrxRYNKKuBnZ1HbQqRvRKGM5J5myA",
  "key24": "3Gk9bngR2HZtNPKUgUMwjNVxAKm9W5rahqFbZDv1m47k77GdjP1cCPUyqSBcRkhBYw9KUEZb8Qq8TPjKspHpixur",
  "key25": "yXaLQu7jWNXcz9nLcnfuUmhUoabvGkkh34LsinHVrJpqzkSJwAE96fHC56TLUq37wZb8sWS896dvoDzE1oNXJor",
  "key26": "TLFBrfvzRV9D9FRs1WHonEzUEQb1Ct9V2G5SL3RyVRwFTvugTFhCYrFKAkLSWNrgo2UYtvWJauzRmMCrMhAr86X",
  "key27": "4b6uPfGSVCJHt9pMCAfTFm4TTQpezpzaDQnnzoQZ4DVipU9pf31mWckfCjAViUuagnWXcW1aqa68BPtmrb5zFwy4",
  "key28": "2iCps36sVDd3LjspZWtfZHutR1rNzRygdufD7kKq8f8BZ4Gx5nkF43H2GjCuntVxkRUQgV462kMAowJaDxDu7GuT",
  "key29": "zN9KrtYUV2MDAPdHijnsptP2MTZqbSrXJiVHfUxX3NHMTEXTcDRkmR5wwZ9qYXkdHxT7ZHJY5bSYULz3BaJTrVh",
  "key30": "ytYBBUGUgXssgEqRWR542EnGMgxGaoz3tsUwqCPLMpeB9KM3EhixdZMPPrWznSie66oPyJXeBYiMzjFBXxjt3Ki",
  "key31": "3Gfgz146G4vsBbGoZACJrHJBNVBvwhLA1cUdLN6deESBGHSPYxupM1jQYgsSAbxawVSjmtmVH1n3dDFSbmdds1Ut",
  "key32": "4v7d4RJhJhfKuH57RavbbAFppKvfrbswtQ4BPtwLCkEEvQgYh7AASfE3Mp9oNbe7pDuUcPp7TgkVypXkgZk89Lg",
  "key33": "59HaHHDQR7pUSobEnJr3XfFRQnVp5cWNMfVXGqGnzAhSPShmkzoaCTB5ykE6tdQQJqqLSmds1KPwJLsH6M4DEp4s",
  "key34": "4KytdvWcjaGCXApduTKVkLSeoNvrVjGan8yCSxCUVp7rK8nzJD8hLFtKnzp9THmP4ovmEduwedU6MAz2NeJhdQmp",
  "key35": "2NAkCiVwZyVS9PK5t4csaLszo8wvVDZtKEXzwiSmfQTeMAyzrnEAGGfqwS593WmuaFB749qYhghM1UpnLPFHZzC1",
  "key36": "3dYaCn5q7Si8LTCJWMM3XHMNqGdhPfrm4rC9e6b8szcrrK7X5Xa1RUnPAe9ehcQuf3a23EhfbgVHh2SBupJTSLno",
  "key37": "2MhDjvAKc4qT8jZam19hfVodNeQZPVnKZAnNHfRV4cypMug84Qn5164erR4PzPvR8QcRZKBWKNA6deV982sdC4Hs",
  "key38": "1ttgQihAQ89xZWTMmiwHNxCJ2pqQ8spJ3vzSC9W3fSwo5UrFm72sdCCRm1q5SRoWN3P2h6gxYE8dF2tZGJtmXQ9",
  "key39": "278TSpaGd47CZUDvdaps88GwNt78wRvQyeMVpVpLXdcy6hABMfJkihGQ6mFmUj4tjrti97rQHfuGqdeHKPU1dryy",
  "key40": "WS3deZGUGWH6h12pDiqK4TvBn5vor4y4ZuqahZEYcCEH6oywjCfietJ9UoscEuZe2KXt8e3QvRnExjUZDgJ8apm",
  "key41": "4NozUzzmsmQgTsC8Yv3hUVLBSaSDRzTVU2jACccsTq2zM8BjK9sjrs8B9rEhw7RdjBgqEqrh1Txacix9JAVhLgBC",
  "key42": "kJ1KXwvfX3hBobmHnPefPEuPdN1iJiYebKWmhQmK3p1UYnGXFDz1t7dmnB2cRhDC8GsbQE2fyvR1d1zhmh7SoCt",
  "key43": "5qFSDK4Azy7HyqReWb9dAoLMq6ZCQwW9HdKtEAwJcKFyBK4KrZA324UBUsKA8GnkDXhQFNrHS87osR5At73McLx",
  "key44": "bdmLFbcZj7wToWtNdv7gBYSsjJKqENpCgRuJk5sWZvVFhiEGwA3DSnqJYamYQRCSpqEmaBqgkVBAcB6erzajNpZ",
  "key45": "2iJ88LqrZH839pPVJpDwoD29ZdCrBwALjyLmXpM79YxP4MoQoCUbUFm5K9toJywEKZuNLefForAXka3XNnD7jJuy",
  "key46": "2XU2RkWKtsEi78JoGDN4wiS7rjSPCYAxPb4goMZBsVJLcvDRN7igQLH3va7iugtpDzppQsdPi2KrHk4b4m9sYqWd",
  "key47": "4Dw9tWhH6mQH5gFLPYMNoSPTskgMwW1QSs8HC4veKu4tisYMBPHQgnvGLnTn6SUcRq3vKMPHbNm3P7dPVuSd6Dm9",
  "key48": "3VaeYknrFuuDDkGXoByYFixm27TgT3aKryiYCG8GS8pRscicGPnkFiDnQAADuN1Kt6yQKnCoSvmYGWiPvdsUPC35"
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

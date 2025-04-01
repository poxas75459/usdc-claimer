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
    "5r2eM66VFYTDz77jP5XidccDEEpgXhEmMnA9WzeueW9iVGkbcjfjmrVoiizUuCzvoWnHGToUkDjbXq9j9t9jDadS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dy2dBjQthzGvzKaRA3CJqogsEnRDmDdwMEaKgvY6GqAq9mD6GyhnnMUpAmgZqjJ24JvMRbXdUMpEyhnf7oDUcTd",
  "key1": "3Q4xzZDv26YsanHmYh6Vt7v4MkW5RNyKcvacTkX2WGrTmseckBJtaswdkkysFXaGCjJBswVqdntgKm5EaYsrnghv",
  "key2": "2MG987KP9XngHoHGRqyTRJxZZvYzVVyRcwmxbKQQ35sP8kqzXDTzUrjUkiAJQbh5YMTK7hLbUUvkWYbVRotdaH4K",
  "key3": "8BcNY3ohTFiofzDUPQjSHQBxpbDFFSggDXMAhqQqS2EmKh7Zg8gKM92Um7vogaANRQwYNZ6mijARWacx751GMcj",
  "key4": "44WDqNRGUww9oJ2JPnvouXsF4jZuPXhRGYHFZZWwcQ327rb9nVGDyKpsTw4DRY8thp342Yft5FYLSXcqX5ajKZux",
  "key5": "66i9XgLTTfMzmWNepTBkUJNKjPyfDzdhjNEcK7PcsJ7bH35FpLnmHyuyNpCSLR9NNpoPiPJfxKmQnymy6zbMz3np",
  "key6": "3ag6DT5svPWLvxj2G37DJPSxLrZvmXSAYMtk12a7JqbXyBkeLA1Vkk5VnzpXZqaUwf3zGUsBBx6G6jnPotjwALA9",
  "key7": "41STQRWHSwx3SkMKqDGSdiorBKoo49mDrYG3PxgVbRQsSpLx2eBK3P87ETTnrZURLimVV8iszmRhWUHZLdScwKCq",
  "key8": "4NkneBpJLrEneuTqcLgTKk4jvbJHN6FKWpQz52xJSBbgH2sA7isjZCdrGHQwwEU79vpmWaoaWwQPUj7vgtM3HLgd",
  "key9": "4kdqT1aaA49wiTBPi28rWiMRBbzuWotYfYNhpR6wVocoiBGdmAAFZHJ1WekQk6t2Biez8uX8Nkr1XjkrgkVhEPSv",
  "key10": "LKePpNHXVQPe2dFBqQUaaQVsfE4P6RNb3ij5oan89QinwVZDoByjZ4NUTDecxCwzCfYPTAikmvH6hmYcWfAzU5N",
  "key11": "4xRiTGArpMK3xMmEVCbxs83N969CeuXWX3fu9boCg262zH6xNe7ohfVX7Qf88j4CyRqw8RpovDRLexCuYxj4aNiQ",
  "key12": "67VyVWQM6HbwhMKKaurAQcxQAvRQUSg3UXic1Wsge3GfkG6wUHJpF3kvwSXP1xRMxYPz6rWdRwtdmgD7gUccaoeg",
  "key13": "5zhRNVf4BLVfJq3Bxh5yK8UmBCdCFXDgQT25UZXqw84QAFvAtQydppQVADv7JLZDWLxNLZTshH5pR1bher7p5ddE",
  "key14": "ckNfre2hhx5qdKaD3anF8bQXWCH2ZhUN5fQ3ca9wrhou8S5ZJhNgUbNgeVUvU8LqgG4zCWBJfvpCQ8pvwJ7LBDP",
  "key15": "315xGxXHiUuXqXkcryMyhUZCzrH7UqdH5LcZsrfX6FdiQuGKUbQGTMwozNgXExNsJEv9tUnQjMSEwSeUnKuEivyY",
  "key16": "3h6BTmCXakTXLfmSSQLV2pcGHnD678NenuspUHvvZjtmTb4WMfu8WMnWMJhXEUiP9kbdtSz1cWV5nuEzjstfwJkJ",
  "key17": "5AXhUUUynrX4Ha79qLTK8PN1RYYRgiXPYJ8ZEW6BSYF7vz2xtRssYDK6BH2cgfq3D6XBachMdjdPtadjJEPQXfoJ",
  "key18": "ycUsN8kp59Et5MJhMryQBqLJVC9JWuq5NpMeizsMKtctLhGiBbefZUU73MXVmTAygfx2q1dvsqQDtuGzpHT3Jx8",
  "key19": "HfaCWtJN1LBPqttnsWLL8QhRLoVp2fE1M9Y5kMprQMojkWgZGxVJnQKgRFxGNfTrrkjZgJXwoR5ABnb3NbWMV6F",
  "key20": "5sNAwtSkKMDz6Vsgos2X6RvmPi6hrdP9iXuQrB6CvrEBiYi2upkymizxQ5enYELvWCdhDrdgJLTSNjvUkoh9TAQH",
  "key21": "3FDKj5z64kqdTRAuY4mRzezuFEWcLzfv2LNbayBTDosqVGNkpU2gRtUnrNsozanTUe9KRqwbgrRym81koqUuNkcN",
  "key22": "RkoR6NgN6duqiF1vXC9tzbmEAS8gf7Q69g3u9i4zg7dEqcnGVjbm6aQkxNbJR2fRLPUtEU5BcKo6UJGnCdPfFqX",
  "key23": "2rKe1dvVNtk3F2EwLj6wHVhEE3egtMFVyjLkPj9Dr83pfjBq9CAT7yapJb15y3MrcBSAzZsHa6LWZWUqNPS3NyVB",
  "key24": "3tDPMZswVurA9tiDHARTibxUU96pVNEStGAA8zvUzn4BhzzCb9hWcLthUxV5yYrCxvkQigXTT7LMkAXe78yHoeWY",
  "key25": "4btXYS6hLk7Z7w861WvPzVTu5ewRGovCBGB78y5UqxJh3CWNZ9MZCKWgk1g3MvhaFNejYwpeydgU33yKXLfNpTCG",
  "key26": "2FZ9x5QyBGiVRpaAYGm5nQW63DxdDhUNHqQxSnUXLJb8GBxXiFcCcDt7x2i16NGH1mQDFyT28ZahcunB7wQaiXYA",
  "key27": "1fMGZcipP4PPBKvfrbCJrUzxkqDqJfDyd9PV9APmCmAPHM6W7Ft29hCozG5RTduyYZPrRJaVwDj6DBjXM5rKuQp",
  "key28": "5qy2cCh1scjLCXGoWMZou96J8GxLWBpPxeA7WMHufwjNEVfGe1Fj5gCqoEKBp6HqD2FgoBCXFkvC9kb5cnGyNvJV",
  "key29": "5pEBJbWJAQbW8CVxNLEQhYUEox2rvtVEkCg1WUNo7UHDwAN5RZSbTj7BaD3dyvXeXynSpi1A8j9c4i9Wt9qjhfAS",
  "key30": "4FJy3sDkMkp2ek3jNapS73fLp5NoachtpFEdp7L95o7ykdwVPrZNCy4c6CLMbdCkH6quCG9NYoGxX2fAEbgMxkfm",
  "key31": "4VKd8z2C7AyS8wfD2NKp5i85344jDTvdTTLVrK262j9HAj9NM2qYrxKvNVmjHDEiaSNZ85vpWKLL5Ytzq8VLpL4V",
  "key32": "4QMXtYd7ecLEk7ovQXGouahDuVg2mVhonkR1GocsUjzXesE5hHfCDzEynT45jRcnTagWQKg1yLQqMpZBwCoHawyA",
  "key33": "2pKeM73rpez6jtxyacBHnTw931ezcj8ap9SrmR4TAWiByfamoLAapHmw1a5HW1HDWKMrh3rd8tt8vwn8Gie8wFxu",
  "key34": "3MRJp5ZDS6YD2M39uP7Qa4DueBh4kHoLuRpAcw2YayDWe1F9xXF7o4ZTfcv6GBaNZvR3i57mCzWcpFodxhyqz3qQ",
  "key35": "5Dv7Z1abqfqzFEQ5K9rZ9RfQoshd36TsFXzrFVWpSX2PbcxG9WsFTsNZhXsYqq8JUAUxh4nHPUb7xSUNCPAxzR38",
  "key36": "a83ak3Y1wFqzSafU9WhweSXtrfkSg36rzdYjTYpkisL7P1vh2Epd7DjjTJSmQDV2NWRyuHgiqbvT3p63RGcgn3j",
  "key37": "2MuczRugeyZcFKtrLXZYUQkbpupd8P3tXkcu7fzahNhfaZkjSUHR4kUtLYh7Jp2UzKcfcftKodbDoQTA5Q6y8of",
  "key38": "2o6maHSC5PPioN5Y8Cj8ktEzR5DS8EduyZsFMmsKriMygWrJEtk1UQQazCPzmgd7oYaCrRSkXDQ1csdZXEd7eH6g",
  "key39": "2VLcB5PnNNLgugsFYDR8MEahgsEX5YAwhRAaj21Ke1C1eVWeUk2ztUyTsWWdCMwLa6RzjWMujASnhUJ4ghXEZzRX",
  "key40": "56XFWHj9aConyY6aGGDCDSVrNsoqsRTwLXkoRdi8rfTUuVgC1Hg2tsTsYCCFcEUDWt4WCXxcaqXru19VNGp8cEGx",
  "key41": "5yiir1oWsfHhRWpCfDjhk5GC4mtV5xYKPkCuyyu2HnF6t4wjHZBgN5vHLw9HPfk6MkGart4x5DHTRUS6aYfj8xBg",
  "key42": "3JurtiKnHK6Xb6yuYYdtww9wi8FSuyXoPMEqE32uBrJ7b1C2i3yoaVUcG8Ebb5Qar8y5voVBbKqvgN2GK45fKdFd",
  "key43": "556h8UuaQQ9mNb3JPgB8w3AYUVeqNzwdcr7BTbMocm7WBHr69fkk2DXrC6B2GdXNvMFYdgX7aWSVV9XGmB79XNYL",
  "key44": "2LjKoLHCWj3EosQcWSapUgFXRzouugMERderPE3xjB4eiY7C6DosJ28HD3mTsqJ8PsYpPiPjHCBJvAZWjX6Gg1So",
  "key45": "4BTFvKscsMYmKarvxZWB6JL9zvZbFF84jsWyfm7bVvNWXKeFNBaQdZxMgc2zzdCxRtRnaGwjTkfvX8qTPMomsJRG",
  "key46": "2qBgmTkWmD4H4Wn4vqrk5f6XYbuY8cje9Xp1A9GZm4GFHDmfebGv1zmY5cB74UjAj5SHzbuF3osBEtEbjPsnLvoL",
  "key47": "2GkDrRMVwYXJ1JyZrmyurFKWxfqSDLpmFHcmbmxs2CEkscqjse1oXBUbQ3t8CCJwLZPj69KjfYVc2Txkvrn6FRSc",
  "key48": "9JWfKne2RufPaAuHXi2ibaNHPaPvmZzr8D6eBXXqtd58aSqLMCujYcpTMFESoxutbrq8738MiC9NYc3EfTeZHto",
  "key49": "5SbUUisWTGZfkxipyPE2qtpqdwfjBVuqmFfqECUpERjJYGGMMUtBSwzcqXbtYtoxxUAF5pxZZ38qkwGaEFgpsxVY"
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

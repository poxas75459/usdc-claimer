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
    "58LkQmLgPcA7scmtGS4p4qsEufREmK5emBmE656k1NWs4qoHS6dnsDuDSo9ABEeJq1rWFhZNThPQ7brAEPCPnYzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xu5SWtAo5druiDh8mR3Jd9wJqL3AMfejHqs2VNYJpyTbmThsaAJbvkGcJTvKkcL3pZcQrV7Y7n7TKrFLbR3ywCf",
  "key1": "4KRLU2JKSKFWizTKTfEsyRdyckU5xGAWJicCpv5RdGqRsujdokgNdzE21mLM881FJK7PyxndrKFDK3HUhAyiJd3r",
  "key2": "3gH7ga46LZh61iSr71sjvQ9SbfiAdfUaZWtwuRWc17SycPvCfTazNTToe1VoiVUH5qanU2CUWxWmCJuCP6ENqhPw",
  "key3": "5Tt2ZKoGf7ePV4EbnG3cWC5bCAt4ZZHsZ7rPcYhCaJVQ4zJdDW6uS4X1LsmxkqdUV1dgrooySXLhJEgPpkAj2jWP",
  "key4": "5bUav5UosT8ofeycksc6cjUSaDvM9uycQ4D336BcQs2fFThU936BBAc4kqRrECzknpvgL75NLBsYPxrGSW8KmfFe",
  "key5": "29pgHmGbuqhv83svCmvnFgRNLBXK3Gjt1kidaCPLfYZScBLFiU3putYjvVnkcmSUGx8jK1tGG8wNCZriM3pJRrGL",
  "key6": "2NLL3bYnRSApi5V8pyZDHX7XDaVpkb1nqQ9TGFMf3NHf9xV9n82smSkx7hUucGB9C5F6rf7h33G6JjPKvXFGLUp2",
  "key7": "3x3QkTABWvdBCju1ZNmqMc2dAHVujsgqh172xUwrqhzHkpwzdAczP7eXRqbD4TLoPM2ZWZ3fMkeaS7sLZnZtHmkR",
  "key8": "3k64ZZB8GiyoJpsoz4G5dVpcfr3FX6LyGSzyPvNVYHg5xnPwHriTvL5zcVx9Wk2MPxH3adaHC6yodwbnYcYtfc9Z",
  "key9": "3pp8NFQYV49KMSYh46cNZPvEfpCSSNMudsh6u1BAnypdKCSG8gGYys2wmUqsXcf1PabMxGvfiA3WypwGNTaThxpQ",
  "key10": "5wYaJumAJApzVWGoJ2NQkyKraP8zCW1LjSuZsfM4kzcEwey2DJQ3twQMRkcwQDbasvTAgjMVHepAf8dgpSVHHrH1",
  "key11": "3DGP2Z2gtZnNDQAJ15e5qbMaLnXKQDC7D3yf2wrWbBUdQEueQdVobaucE84ni5z48m2XrEFfdn4WTCs3NMx8xEes",
  "key12": "4oSnmom6HoKBP12oQjcfmS7pQYHeqvaqQgh1vqq5STC7ZXzGKRFFR8qNtAaXAzWv88JUUSqj6z8PBvUvkpQnvDXj",
  "key13": "44BqXg944MQZvcKATBwmM1w47bPv6DxzWdu2a5PJZCc3dnqUGazsq23LGbnZvreMoWwefYJXo5feDkK7oD5hRihb",
  "key14": "2p7PM9pTA6iubp1xSyQcKnv8fA1PNPfudDwEDaMPPyuuPuRPKfD9dbKgki1MjCVnN4QRfSprE9GXqA29ijpMEUVr",
  "key15": "4aY7ER5efEWyZSxBmEd6Ya4EqeUa6UkLkiRFVkwuAzNZWLZQpuQ7c4MavrGpDCxN1u8mG5YRPQYZeQkUejN98Npp",
  "key16": "373JRWq77v8SyvSuoFWLTmQ9VMSrUZz5SydJd2enKLFuBGDD4VhJ3Lp7bqeCdejcgCANPwbEvuxQFFzNRF7RBjqg",
  "key17": "2cCuofcc73QPrbB9scmkQuDP7Lc92M123uRoEAgCTDKVZk3icqz7jXJ72N7TnMGaPZGX9iVdQJCPvuxA5Rjy79cR",
  "key18": "5CdMfkbPcsYu5TbctbChGEbhksYyKb3o15nG6bWeXGNF2e178kgvPT7cxFRbdpBGbVdg4LF4WDD7Fm27kNGUmru9",
  "key19": "5S7Twz5zutMxTYDBFXsWU65bRuyvwuJ1Jhb2aSMHF9sqLWtarWRj3e659SvHDvgJ3PPBiLcKYfaYyP48M1rR8v1f",
  "key20": "3JYPstp5AZTUuPnTbeT8Lue4aaey3xVCGvk8NngYE3tnnfhLuBeZ3Cw9qFhaYHCbGqBxZTYKfZPLSjBBsfW6XoAR",
  "key21": "41Qcj3JMYYoLhyRq7UKGEuWJ663GVBMV3b7BWrcVo8Rt8jEHAyJHEQ7rcbEJ2owFYELkqyFXD9Uwm78TkBQYi8aZ",
  "key22": "5gVH3ticvkMq3Jmere5kDWq6bTPe19UMA3eNjT93y7uQ17EA64xgBzGjZNdovNoAbB93RiXPWe7yuLLypt7xEum9",
  "key23": "4h1CkEHSkuKawY1nZBzAgLrX6HPdEWxRV8k3S1vA3TtDgKVdwpnysx2ws4WJRaV1rM9nq4mkMdMeo2Kr5Z7EB8D7",
  "key24": "46oNENbv7rQ1BCGqSzAKThz7mECg1SKEgkAhbRr9WdnpvsX8UFbikyVbm9r2jkRvDAfASrj1gWr6zvH5SeoTTnYr",
  "key25": "2dRaoqjDDXtkp9Zn4FizVCa2XWjq5q1FXmaZeAF5CPi5GCT3mJaPDSPMuU7og2joMudgP1wahY2Cy8dhhYdphkAT",
  "key26": "Ham3569AQp9Yo6JmTST2xyrbj6NiZayv5f11F94E78zy5Wy3JvbLu7yxxScHBtGgaTYiFcVSdj93RnQcgYDvh3p",
  "key27": "3LRwNGG7WbgWcxcGHtmcjUuH2UnyzGLwN752pZe1joU1JsDdoNrPvjM8g773xSpSq34k7X3wdE8BVMff7TJrfyJ5",
  "key28": "3NLCfNs7JuTyXR8P82jYzrgHaoUiqonHcYpJi2EDgDkzgCFPQACLmjbXoM6YkdYPrw1c5Mo1EKC2Pr6HRt3i1xCJ",
  "key29": "2EJt5Y7L7VCNmSLKpVZNYGgUbdWL4AGcDnUF7kAJLnyEm3pNy7BfgDA2H91XJrVCVYqamPfA3yhrXb5MYDUhV2ES",
  "key30": "31NiX1Rp5PZGUDVrkwtE4Fa4nnV6u1mqwYb5F1er8DpxnA7db7ac1RZR1z7bRNgYoKHKxotSsz3QHEh6QajhunuT",
  "key31": "QeDLcnu236UmbFp9i2SAZYWKCpLzW52jfZQvrPWBca8PzLyrnR3X3g6YYQmr7v1SvNJQGvAGe9Pdn8Q18bvm6v5",
  "key32": "2nSsFt5bVYutyFYWrC4kc5sp7PPoMfrsp9NvkL8ppuWmgsX1tRfCQ6c4w1m6RvDmFjGK1w6ztELH72yBc86UPGa6",
  "key33": "3jyhgUf8SNizh7s21bLFc8UWmXybQkyQs2PGANLxw54MsiCpoah74YSMGTBNLjfvqM3UAtkxCBPT8814vrizaw3t",
  "key34": "2gWfyMxN38zHv9mrc3QwhtGitgbNxQM1xnAsMyvjgs72gpwDN5v1k97udWvGYU9ENcf6MW8Ds4pXQodpyQAc6Lic",
  "key35": "4KqFBNdZL3354xwcNFJP13HyJr8LoRTW1TsfFqiimFthbMV5VzaMXSFiKdnSRPf13yrrTQmaNE835FVJPjnBCnTK",
  "key36": "3WYJS6rAaFqfAbRMc5WGe7pSDhfK1EN9yvWELkwKLfv5ykPLmpji7KKCF5P1X7Gf8Kiw8LykQvzqbu4hbPmVExeH",
  "key37": "2X5keAHiMiuxFCUrR1UPp51NnJoup2vBVqPPLwJmXKMwhtFS3R77asq1qXKdkWR4GaRSX4K7mSxtxQtZWsi1SJTF",
  "key38": "5iwE4nhR6EkxJ2jLhruTmjGCSmwrjzbHqq474XNSUkFjCFeejtanAjAywuoPizQ1SAVUA3Bo1UR2rZ4rA6Wz25y1",
  "key39": "2Np9SFsA7hoxGK3Q6Q57eQhxXQQqVXf421FmYPkHefL94vXT6wUt65dt3wu33y82dcmV75DvdAZUu54qhCgafXRG",
  "key40": "5QVjGuwkvh55FGDtPtqXhCAVG22EWNuEDcTUZEeQF1feDD2ThGbkzkF2me8Ff13fmfEpPnLSkdo8Mt4LGr119PSo",
  "key41": "3YwGpSuLaoupf6SMfHF25v1vAfYC14yoE5dQ6fmWBLch3o5N96uFmivpnn2LgzHU5WsnsHWEfD6gaQc67wJZbvp9",
  "key42": "5jVmYYqRbTQhCzeYirzTBkJo3NwrgEhjWy1ciot92eE5ZUip1DMvBaPnRv2D66uCPNdxp9fW1u76U1RWkE6J8NAD",
  "key43": "5Xet2VYZ51dqWqGNqqyvtc48LKJ99UJ4tZbdjz9EGqJYT4Evqtf6nBfWbZ4unoRTxPjzyh7qbz1wkaYNTbYcWAit"
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

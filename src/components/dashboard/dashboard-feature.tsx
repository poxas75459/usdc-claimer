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
    "5jfro1euL7SxWJNuvWpfGwmBnTrRF6q9YUpggjw6Jmpe7jC2s1Rpmk6Mm3Qja1VaaUz77kyiNjucUWTmt6Q9VD86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4smwDnV9ao5AAM7DfcT8pyBbHHr9yEVPYWtmTxVTJNmfAtH38gxdUrLY4qPsf9c6z1U44xQ5h4ai5se2hashiz",
  "key1": "5ZJfwHnYAPzeVeTBGzcmDgQFoLk86oDBV37kMaxh7tQtQ8u9wbe4WYrNjqtgGsFvJi1Av2SFetj8XMcgoeD2hSZa",
  "key2": "3prvf23swSnuxgFuv7sJzwqFKrHmW3fNaxegWh9ySMydRudUg9yqJGsnjyHofoFD5HUXsymsmkBz9CTEZQjRPM2B",
  "key3": "BTk511epB6GqeadYVse2B2a17x4dw94qveX39WBfsXFfiPmhP9SykfTWkStwRuWcgpWJ3kjFrM3h3F2bBSQZ6bK",
  "key4": "4Ha6rWjtqNPoRgdVfpj9SMfWFbeYTMc5XkygG4Bwudivri3zUqmxe9ZGWNT5jVd9P9fgU2Kbh6QxjqQQfXhNvRRp",
  "key5": "2VSx2GoUe6poFAjzpM2LvDWdSNpUMNZGa56wGE5mHAa7YEsc1jfxB3av699RQYDAT7aGkFAfo65RVAvBbcoyQHDq",
  "key6": "3rAErcixrzQXaqsafr2PXJ7ZsuMDCRauP4c6HbgksG8H7CMDszprotYSV2TZX7W3RgVDPXarRVm81D5vcEC4F9v6",
  "key7": "5h51iFLpHreqbfD7cej4k91P1j7HkDr3caJSnFfhGmJwYDxkVZHSrnZi3xKHvs9P37FqdxeRf21aynf47iq7o3EK",
  "key8": "v1saAFSpXGphwga1d1jYAT1vkg8X3CK2m3JjK15nVZ93Do8tNmeMXvP3byrEq14ZCVnwkHnBp2uW1pBSdXUt1qa",
  "key9": "3fgcEHzPWMeWZuCcZvaNwixsCLHTvzBtru3xo3Ju8pC8qHCyTjPRx3uxLZUc834BxcGAN8kivt5LPbG7ZU1mqF37",
  "key10": "5vFx6fcJBUrSPwvXM2yws2hmEd9WgT4ao71vCLq7dK83ANdBkFHZpi24sVeUFgyG8hwBHqoFTUdcS3gFeFyNnyAE",
  "key11": "47oaCGN6hN2zzR23vjqQ92ZhC4MFGGCjf36AFeiguXicY3vNxC52rDini7TebUDfZ7eRrUG9G3stMHiJQzSUf18j",
  "key12": "r1NJNr1Q2f3y6GcHsnfkG1QpUsHUWCigh3Vutrbrb43juS2gLPwu6m3bdJK5oq8Q8W25vM5b4X83BXgiAgsHiZZ",
  "key13": "5KK5wjGLHRkoa3unpkq9nusnAk5Gr4HHgjNTc4eoA7RQc5jFcA2oT51gKhWDMUYrFWk54hrTAat22YXvBWSYTZEF",
  "key14": "4qT5riU7zf1pRYZvTSabE6DnLu6SJJRQW3HgEC62mEqLy5mNZ82cHQXjBsbpuVHLuL1vtBerqMn3qSBzagwizdaB",
  "key15": "3BLE2FxNfqbgtWKMRNYWu2niG9W8MZyuQvovVQeoXY4kCzn9dhFWTX7UttDaRy2AEPz3bCJx3fwD5buiVnwnhb79",
  "key16": "3rUkcJsgcicdiR1pALu4L2ct5RPqPDsoYTsYN6cXtc4JugdoYXuXNPegTkzJY1rSFGSXXfG2s8aLJ5bvrnENfgk9",
  "key17": "5z7B4foVoA9xec4RT8rXYguGhdRxJt9fpQAgDAmMsVrSZHc6cVYGbVf5eQk63jvMGM6gS4pLKucpxZXnR9GXE2XJ",
  "key18": "3JiVE3fx36tuhYqV4utNpKYjWEV72yJoiiza6hYMp6qS4DQiifzU3552TMfsegh2UhLTDefCGn8wJVg4yUB1yx67",
  "key19": "4DFwqL9SnXUWJ5k4i3f1ePHQL2cPVYcuL5FCNkHPvx2QSMFLxoNZ8DpAnbC55J2nNYQZbjuHeiuzue4ZsAugChfq",
  "key20": "5vhEGjLa5m2LNRwkkauGREAJR5fo1ksHNHQZ4RpjMeVPV9LaVU5HQTpygi585kzxfSM8gmwH3S96y3YXg7qmVrQW",
  "key21": "3Q89X8rJTU7ahXKzgtBaVtRPyjrRDkMynGihTCyvfkDAp9HtpJ2jYpsqGb9v7SqXETRiBUjcCChARRQHKR6HYsoY",
  "key22": "2xtm7bWgJdonBqtGygp6cjYK1Y59LzoEYHYJgzy5ZShuAXFLosnTCypigbaunmbXEPcW5pRKa2haMVd9FGh4bkpa",
  "key23": "51u4ZhprbixaJfBfX6GS83Bc5mUNURSRTfpMP4kR6fCcecBBTfwVncJCTYSAbMseHxxjh2f9azZrpdmzh6n87r6D",
  "key24": "2bk5G6xCKsH5hVWaf5Zf63EZkhCYnxscTicSeYCf8UwZdTb6FXUtkNkMyuFYChQwqbe6F35HrPa9DMVC4y3dWgRF",
  "key25": "375ezf7BqnhWKJNx6dvipa8YgE2S8jSvL8Qgd7uBBvCmUNZ3z9xPTMivgsfy4rC3buS1d3RK9ynDCHmwipEfL6wt",
  "key26": "FaZTyaqFm2bsPRuAhJgEFE85xmoWrt5PHr5aBKsL4jvG4i12TtL5PSAREstsZKvguH3YApE63JpPbA78SjHYG58",
  "key27": "2yZXqvLPkVzNbQSDqpDDjJ3NsyFSDEH16bty8Lxg4gSuoQKfNxhgaSNhGCMu7JZ4AAqf2ws1cUNCKfpbHUw9Xsnx",
  "key28": "21erFraddVqJTqmG58jxKwwuj5JSa5m2Du89EmXnrFnS3yKUGuVbmfCEUmScMNVhBM1Y2tryKMfikKtCFfbDrf95",
  "key29": "5N7ML3CUK4HZpSA9ydcqLsMTjKecTaZebNReqoeahp5M7CKyayEZwDee6whZQskiNFDmKhE85okkL7TnkjJ7NLP",
  "key30": "3foQtLFM3ybYDZZai9pWEWm99AiDEZvYMw75EFy9JgaTx56ZysRWpKCCqYrZqeLVsxQQha93kF7RLghJm3WdSzTS",
  "key31": "3mnHmSANMuZEyonTnkdt9vMxoViQzw7CZxzjjF4P83CpvjVLwmNEGfHSn37PsNPiPdaAMci5BxQxLE1PjmUbvCh3",
  "key32": "5VFvrZLBL3MQhMNGeQqvkm4dFkEbDH1hkASq8SCkb5yHyED7vFRpfN6kQaMf9Viw9L2DJWKPZvy4wopwnAt3XFKq",
  "key33": "5Kp5XjJ5pL8UdiZXZtwmzf7uC1K9jfX6k2BgFEYN4YfisYd9YHgJSV9N6SiXtLoMYVWhmoeeFP1kUkpGzBgmUX2L",
  "key34": "5enU5KEPe1GMZx7cRM4NehFxagopqgX9mH1f6ZxHaPfsNXGgYThSD7RVCkRzHC8z9gX8qnx4AKsZzkG8i4Dk6bJR",
  "key35": "43KaUiggJeYD5RhBBn4ReCkm51vJyRu36f4eFN7MycyUMGVGyP54kkxbwnaQFLM3FAxSwxh6cG1Zx3KMa7L3CTEa",
  "key36": "9csowm4QXobcVcfRTahLGQ24vv1AM3H2Qvykw1s5KU5NLrVR42ubEcDAACw64eTwUyuWXsL3gUyAMi5wiBtgCKN",
  "key37": "StW5ZD3Kew1hVFhS3AcDbNopfoMf8HzoFuDvqLaeZ3u4QmXP2tZpSnm2BdeyxZHC1ksCi4vVXGV9sFguukzik9X",
  "key38": "EQtHATJMnY51mXAkNGjyjfZyKT654ncU6WRavYiiPH2MEdznhe2oQhpTVRbopqyNqSDSnYxfANA1yTk2zyQCoPs"
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

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
    "3uagVZWthKJ9Q8pLsBnGAG2EMBKSZ5FzZHB2ZB3VHQnABaPwwApxyzTzMALMEergpKwiR3iXeKRJTtpZo8zi9Ygm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hkb7VH3JwU8TBR8muKh1FMiKhJT1q8MZkbypKwobSKPsNK1bLtggF8QEL1v8bjBoBXt7zkxtYtV1hfaSzrHB2XU",
  "key1": "2RpSMS7KBwpVzYZugiELemdTzY4gyCcZ8gzRy5r2w1cLaedUUSQ7cEwP6WsCqLquvpXX2tV1AU654rJHov5tmouP",
  "key2": "3ko4E7MHHp2Bsen6cuveLyFvyXdUS6gXUmznpPJjBPQnkS9BYuV1UFW2yZsqf4Zt5qvpsm6aHBPuqUHUUa7B9E6t",
  "key3": "5nacieowv7tBJG2fm96va13Dj32QdidPbZvALNPRrLmex5caE9jsrQftFoDnVAME4anbBjLMEXbrdxKEWYBq1DwJ",
  "key4": "3X2dRafRwrF3Ji6iPyUux2U5zcFh7FVqWxCGFQe95fVgFdSeY86LvHcfDio3nn2JQrgAZiiH6pcQbF4FiaCG8jAB",
  "key5": "24E5opzMoAVWwE1JaGpZPnCpgWbGfwHTtW1n6RGQWEe1g4hP43UavLVfZr4Jf6eb4NEZRSaKvEp3jgYj1i8SBvQk",
  "key6": "4NV5sFssG3rGeqBA3x5Bq36fFUK5jqCy84EV9M6RGX5pXXqULNDb7hiUNmp9tVDCRD9YpXu7qu4ccgHB8HSD1u4D",
  "key7": "31phWugGkZGQZLQXFWMArprGw5yB3xXrPUCY7UzquKgiZcXkhHHkHCqNPHBubVP8RxkC85KHxPZKLCy3GnJM4QgW",
  "key8": "jMQn5ZhwMkAxWa2XSdpxtnzDthfTLakHwbMkvzYvg9ViU2m4Hz7hg5jSkGPZJXbHemLw8v5UvEyKSXKTu1J5THu",
  "key9": "3oHeNWTBfsruu4UYKzGZvEPq7kTi6gTd9QVAEWPXUVbZdM3iMRdKA9ewSVAyrT1B9CtEMKpstGEGYzBqgDZAC7Y5",
  "key10": "5gK6ZqXY8xQZmipnYuxxuJEpMp4bAg7tWpQDbaiRXaaifY2kvvDBamcWXQtDrBFu1T36iGop1aoCWV61k7x4hSsg",
  "key11": "4Qx47iTCBWAx46bFpfyCHQ3qUMxhJWgqbegQeP8VAQ27fJAkp8GXeihwYzShUaskvkypJtozZ8GRGMfH2tbynVCT",
  "key12": "3fkH99zx5jKh91oHY8x17iRQixwmyXp1q9D51jCivjwFwYxMvdcCWDYkZNs9RFtMi3ZbH44WJUutpY3g8fh3BNMA",
  "key13": "3bd9Pod2Szv1XvbTb4Tmh9eemNZUzAYHsZdaiKcFsR2q3XPGR8ofgmBHfSxw45UGRprcGBbXouteeJozGnf2XQDp",
  "key14": "2NRu1ThcDe1qvNwJhdi3KvzQzcTAY1AtgNxcTWZ5s8zYNRbQGuqcCTJ6RhoHVQ7pRE6fPNcCzfFJXHNBv6zJbqfm",
  "key15": "344a5kGxrSXdvUusvxVTJN6RjHNNH3ALewxML3EgmqujgZ6p9DWRrrGma5mbCCWgK7KnmmByetBpRTVyXRYEsk5r",
  "key16": "2wVUowvjBMQNVvQ61rEw94N6UPitbMsCRwm2H23FHfr65BQWwqMyW5pszpRHQAEK3cz6EG5J6VSzQauKb3oAGtCD",
  "key17": "2kXcGYYEDb5B8XPc5Dd8fJxpWyaN3ksWHxswnrvGyQpfeiFF62JL4exfr4eXhznAoTjWNLYH42W3WR7QGpBvt1HG",
  "key18": "2myb49GLNGSkEE7r39RzhPXxPufj6UGqhgTjnuhwKvJQkBxp7LKeGKDmM7GNn9Fm2tMD7cWg3CnacQ7cFgcHrgxh",
  "key19": "46mFDGTqCZk4cMe73ebquiiZz5TR384cLWPTcX4qrqkhf5pz7Wp5dQo6aqW435M4hCpN6fcgyEt6yGn2W1JmS15c",
  "key20": "611mjoWvDFL9cczT2YtYTCDkq5VZjKCJzj5FprBwqbkdiP1Kn9yvwwAiGwneo3gKpEbmVDAWFGYKxt9Euf2ZGYiL",
  "key21": "4DoGVF5PzJnKwPzkbZCC7hz5GnvuUhB6mmSSADtqyDMdvji9F1z1a71k9Lo5hELJLBTdKmicHHQWxMGF9TmjEAAK",
  "key22": "5hRq3KXiGpbBCdaabzYPLXkDcLAQVJZroMy9Xb5uMQNYNstjBKJZHZMptexQ5Sti9Z9nxL8Caoy8wgpEuCHNk5iN",
  "key23": "Pie7YsJtjXGCTRGFdUNDBvNwAMzjCuGhBJ5PSoE2JFhLqajnQbd4Sz9ft5bZVeEeb44ZNqKyNtq2PtELgMkobnf",
  "key24": "3eGdzjNGdPQPouajr27gJqR88o8XtyiRx5xtHLyRteQZg8ggwjyhXwCi2r8JTeTWiLKEQotoTtA4jyun93eVnNc6",
  "key25": "2Fa7z3karrqHegwYSeZzyq1raaeFKDTy7vhy9pHTDuiBAqM1tyj5D9dnyL7pvA2iNsupScTJZscqMFMpPfTTfrrq",
  "key26": "66C6y1FELhMBDQvvUSpCBCMdzC5XSWduahbpKz1hdDoBtSguzQXh5e6owy8nbDxvE1zZ7VjaSXJVKwQvy18WZDe8",
  "key27": "Yr9LfWNm6HZDFEX9whxUwsGizEWbF42cFhVgquVRzgpyvGCgDTHhdfYvK6KqNYgn9P37Lb7Uqekho96Mr9Yoj9f",
  "key28": "2BHWZ2iPz81VoRfdfuN9nMr4UyubKTG9adKrFreFDKJswn6s7kzrTpND4tqFWauxxURdUKyAAt1u5i2MxmUMGTUf",
  "key29": "2bspHNkcwMsxB3kQYPdtuCf6kztbpfbNBRFEh4Le3fgvqJw9xTSxdz5Exhq6Pjdtx6iFEPMkanGVsL8viTbu4Xa2",
  "key30": "2p2z6EkRtYfht4T1yJASyX8C41jJE3N66hkvHAySnMEM8uWJAmGy7jdPiNGyHwHDEehi4HqHMUe9GPktdYczgQij",
  "key31": "2smPyqs1BjhDsUpdBrPWUYKFYWaQmQHbYaq6ouv7a4WTPT8kLYUwBVDFf5uZZbctTFsmSrwPLzUocQvDbBqGHyqz",
  "key32": "5pAg5WB1D8xkVp5PyPEsNGD6a9FCCUhqgD82wGpRTCfkwEJJLHz2GHYhpv2EG6YYRVyGRNiMean1aWi1HUAivMG9",
  "key33": "4ofnKY9n7MYEeai9rCSHuw818JcnTmnqN86DL7Tdxq2XZY9k9pAouEXnqpgE96bMHG7fZqnyHAngVoxh7W5hwHYV",
  "key34": "4njHdMDfNBfV8cM5wBGSAXhbtfvhNGDT6nE3AmULjGj9uvcHc7oXH7D1BoeisCrY9gRQEpitc99ZFJXFCXyfgfcd",
  "key35": "58mh3dijKTaEgwkfdtVJVPxfPCrVVhSNUvV9TcYoMBg33tj7tSXSV1gCGrwEetiGFRRKgQbMmYuK8oDm39xxTfvP",
  "key36": "2i4Gzq69VDHp5oPPCk5vegmwEGugzjzpcZZXvuihygrJASe217FtvswWKDDNxEpQa7Fe3NnraD7ekr5QVnqFFbXS",
  "key37": "3m4eWpTY4on1V8JTVJCxeZMuKLiTHpuvd9REUEaPWBN1m6KUd4QCeL61QwuDUV5awCsUMSTq3s8ghVVxAvUxcFiv"
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

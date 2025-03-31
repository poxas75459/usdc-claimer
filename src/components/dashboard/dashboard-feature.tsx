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
    "5oPhZonHztXqrVUxcCyrsQdTNzeEcNzxt5ZzjXBwPBQBSP27uURnbXKZoZgAFxBGJHZ8XMnEaseeGfxqv7AuiVSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o5WxEs2ZKJ3oXDVVVmazUcKMncW5VTwokUvmFjYde8t8zY9pn6ctKa76JirosP93xMDXvRfQrYBms6ssD9rgjCs",
  "key1": "5dbL4UeeWEULu9TGzpCN86tPgjomEJ4jadmviSFDVamRNPH1sMrGQX5pFe3xX6QixCs6caHmYtDcXx5Gad7Y6Qvw",
  "key2": "38bRAYnTsNeCvdFoFhJ5hjZoqvgCZK4jdmQend86zVreZvcRF2pFp3pRfncNXb3tgKtZoFnAF6bGpCR6A9Xj9Xid",
  "key3": "5V9NqYqpjeND4wVB9hUrEHftJPs65A2aaVv9j1axXx1RT8qcNfy8YzCB1TCThKcJzuzCo3Rcwbp4BWeAJdXZKvf5",
  "key4": "izm1QAcjsT4YsQSFBhKBoPDSeZy9HG9ks5SzVWYD61n2mG8JX5om7GxGYZiaZVm8ANTJ64KpowL8qHbF2rAut54",
  "key5": "36MtjzVHC2AmZVcX5SbUJWRtteWojMPfQx1hngfmLRoiyf4ytR6cmVgZCsWHza9UxGVbBpXGHoeqXL87QNA9hTQD",
  "key6": "49qHeK3wjLK54qT9AAZwESJYDCLyiKxcjoiar1F4jbyKH4MnqiZTkUFNv5z1kLqHrehRaDWgjUYRGVBUEFFRBduG",
  "key7": "3DiDjPKWC8Yquxwhnw4pRJwn87XnXG8DQwGB4rTJdLxEEdyq8vELxacZhZgKQ56CfePYk8uPufuaAgjCMwhz24gv",
  "key8": "2hrYR61XSNzVT4x2HZuTBxCxVXUY6fMPAAew7ieKADQThPWqRfubTvib32VPt7CaLg9uixmVtgcXQZbKD7riFXWS",
  "key9": "4f3HKrrFcT9KTLKRTbfV6We47T1tDFzhdzEW26EuXb58taij726LeZdUKZpLt2toiCXezWBb4oM637ui2s9zDZJU",
  "key10": "5N4FKMES87LTWJyWRFmcthQUy1ppn5JYaQc4WeR6EaXQLVDLeMe8GkGXCNWNGtCV5pXm3nFjSnueSdHwDfjL4vah",
  "key11": "33ARxd8vdgZGhSp84TacSZLsuJMmmVK3AVKMCjy25d8HrzGnGvXY8pBoB87oyD7Y2GhfWE7PB2gKkYoF2zGT2J55",
  "key12": "9YiU4WLKZpYatDKebi5qUGrjPp2wWyhLBTf2QpfRbYe7xt5znK6a3LAEQRJviJVFveh9nAf5GwAhYbytJNdTZzP",
  "key13": "5UTZYxzhKXRNfz4dtJoQm93sznJyeFv2tRvjVMDgYpTbXTg9dWPBJRGHRoKqANjsFg4XqtzYh8h9FVEpVEVZTHFL",
  "key14": "4Eny2PTbYDYYTsXqnrpoAUrpRkGa3yUfNiW3oSfCPZWXKpBW5gMN6v9W7NNdfT7NJ14DvrwanHRbMR8uLpamcTAq",
  "key15": "2Jx8rTnv81oFBpswy5qoEwPJVboGVs8mNbhsYHA2w6Bj58ckFTho14Z2S2Yha5CbEjSkcKtMtaHjZ9aytd6WsH6p",
  "key16": "2eXT7qCHrjEopybZLVG3o7RjHa16K7K6CMusxeLh73yn1a28fhzy9ModDmSBdWtvYCRCQsB1XmTago8eaDzH895Q",
  "key17": "K5mkvSFyEbBrBfJfvpjifrN4tv5mX1xZ4FycxkBG42aVmMcWC9rXyTgxhPCpewaxvSoY7UkYvq5rNuchgKmkLpa",
  "key18": "5adVc43oLPoLVwhkGSiy2aMt5sJEGg8WBj7vSoQoC6RHVoRrU1cc6E5ewEm8xk5Cg28RJnehqB1z96GDnKNkWuLM",
  "key19": "4BesXAS2HACKHEavvMH1amA6LBhGG3XfZthsFJqvzbg1Zqphqf2XLHZTi7Df8QCnc1CW8nUZ4fkcFHekxEZcHtPa",
  "key20": "KW86iCrGoBMSutmikrdeyoNoR3qK3bVPTYQi2FgfJgfMTuSVbk83fBzm71kg8MKPw9gpQUFu9jm6AxzVX8eMxnH",
  "key21": "5V49RWc9xYiGUD26nfvqTGAERAD7wbeqTmnB1kECyocsYP6hbVixvCJLpaYGwEsrjMwPPg2bnWjXiLBSBrCDMZjA",
  "key22": "Br6hTcMMxLrCna8HLm7iyuEKhfiHtmgyaWpCNMhzpgso5yctu4vssnaaZUXa1Wug7yJLB6zdytfcz224doMMkPp",
  "key23": "tJhLqKcnbuzwXG5reEYzn3immMtmeMENQF3QopWZ7aizLiMGwmqWrBYcdMLwLTKeH9msuFegH2SfX5B4j9JSMSn",
  "key24": "2MooCUyRZmwC5EHP2gjUWC2FbADpygYmaivRgsJudjL92B121vdXHPbARerciWdQE5zyZC1QuTV8m8KDf9ERd8T7",
  "key25": "4ijyy7wPwaowjEiFrpdP4uMi7zRXP135MejcYJDic8inhjEqH2jExpPBsaJxs99aKvcCQ865FrSeqnhaYYVpqpdg",
  "key26": "4hWJZ7ZxA72BvZg8efAoVDWjUP79cbLN7RqyJ1FGZveVPmrcdWN4B5vscag5ZSpHeBYR5BLkqA4sVxE9XpRyYZZz",
  "key27": "2qchovhXCoBcq3e7sn6cJV6AAk7XHPfJzFwnv73cReX3CvrhYw3z1wfRkj16Xm7Bo8osfVNw65zus5muQqUJvLFK",
  "key28": "5hQbS6Tk4KdKnmf1AgrEukCWznLh3GrW2XUCv1rEdf2CwxtbsfLiRGaQmQAdqrfvVZv2cu1u86GSpJ7DVBKvtLHf",
  "key29": "3CKey2NS5ucM6ojqxHAqMkneHNLNeaehA5dMidjMvhZmjXTybhcePsVcF4TiHBdqPRL2KFtPhWiW498BNqtFkMJy",
  "key30": "LyFRNpUwUNoqf8juy8tU9dmLruagifh5H8Hf1xeTRKgeYqV7r68HN3pV12j5zdv3k7Er2hyx6YhvyrPNHNyHkz5",
  "key31": "3h3CY9tM8jVuowjAzV8vDa3LPv82hEEQBURuM8EjjvuhRNVMqqknL3YTuR5cf3RqcPcrw7UpXRanUvxGi1Kz35xg",
  "key32": "4WZbF5ayudvK4wr8BoJLyf3aEMKUV1yktbV1VnMB8coe97Ga5241UHQzCtXcGFBrZpwzYwdiNyJqw93ppb15EJvM",
  "key33": "611uC78fU4gcc2nZWRd8TStkk2QzcHL4PsXVdAs5FQES4tjz8wTgHWX9wFRGcxvYPkmbAfQfFv6Mwc7sAmaHmLbp",
  "key34": "27qVGsqtUUteXrH8nziHhz5fk676JbdpZKXX7yaeDtVqizrjcedrAr8oXkZNRo1SBb3a3wUZgETNK8C7RFiJYpsL",
  "key35": "3TYGAi9VCrkMeFXqVDEPu8EXsJsyLCygZ2CootsXvPycBvEiD21KQk6gi8GSTZVJnrHk2uu5tJ1dTy1zi1ttF9j8",
  "key36": "4U5qJe6htza5YZo7Zb7KCxdzH6rgwcVqeX9UH2ApPrCjM8LKNDs27621UJSUV8ei5Ld6Y9uuyNoGVVCc24Vkb4nj",
  "key37": "4hED3fPLauDggsMRPVtbz5oBiicrfiDF695FMkCagpKQvqGw7bZFMh5fRB2cVauSCSYdMGiyvh5XVv8uRveV5Ag5",
  "key38": "333LuRbXTeHDe3GmQypVJYyNGcpyE1UQ4kFgPbi2JzdTQbttKV1PAXVyno7wAsit6zssUTFcbaToRmo2HUZAJyqV",
  "key39": "yfaiCQGdPq714j2EQ2MjUNAuYeC1zq4sDtNnUV2RRfDXVPTebKSMhVELpLDXKjsiGRo2BaDgu9Bw22oQEH46L5S",
  "key40": "43smxKcw44YkWegmkoaB7sRszS3LmEQGvdc8LVBStapqRykVVgzdX4Gvk71uXy63aC48qW46133CXegza9Nkau5D",
  "key41": "34UGnuw2fCetqZ462Sre37VdKayGRXQfFwcH76yFSHpfRWd6h3f3ppSkT7YREVJKQ2jMhiSArCPGt2ew73TZzc1X",
  "key42": "4UEji82g5e7ZMJrfxasLqdsLh5R1PLNwf3MTUMudujLxfppJ8dUzzbdXUH1apdnsMVxc8VVvhrywHDseCWpULDRX",
  "key43": "FMCdBregk261RsWHU7YKgEUqaNmtvedMwm3mKiotaHf8feaKHgF5jsNHKM1ucg48zDBsWxiLevAkRZy83hGgUWG",
  "key44": "2obdxn2mbzG37ndfrF8NTar1Pp97gns2rkSKgyQNGc1PS9R3DTUVZKbSY5MMg1BZzDdrSLTZS4zTBxaKYStVYaKe",
  "key45": "4XKAG9nQfjeAXuy3GyUPCz3o6VFeQHEcp7DfkNYeMiefx6g8afbxpBjskrcfEME99ETsaAacnX3KUSDknRbTFs3G",
  "key46": "5keCcpgo1W7cHPt1HQ585XpfdxGAYjWibDY2Ex6gMYy4HAtjKgndG2sNrrujqL92w9jUE8cNLBRszhyG4EyJcEZj",
  "key47": "2NmSD7MkUvRpJAfrXkcevp8FmiaUTyhtAGAsKkGHQS1EzxjvENZeR3AQ2AY9NCV1DnwNK7N4XaGRcygF8Bn843eq"
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

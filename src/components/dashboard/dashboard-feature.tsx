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
    "FsxNpj5GQ96v37XdTTpXhLqJ4kTgg6sARtxyXWvtNRHasYVAKgow2owPzv3L82RRjoh5cPMSQzs5PFN4kxJxLPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qHQLXVR4uWwaWkVZtQ5BcatzEHbGcHfeVSsz5EJL2L9S2WvgaJ3ohP5R7RavH117np7JcADyAmxqjZT8wtNGHZj",
  "key1": "3KrZLf9fkYFDdLAkj76wEDTAfhAaJW7SaA39aHKnMgj5SpkFqz81CMbFifCpbWLMthfSH2WhYRhfBH6BWkLz6CSW",
  "key2": "5bpGoHyc7M19wYzvuFTcNZuUuHgnumEWeHrgYaTPEFBzez8BSSCdPVrdXWiWWF9FPKah7LMHhw7Levr6zgTsNByR",
  "key3": "4BB1mJaNuox29qibvhAfQ2njRQFzMxHcGF4eWrkcB536y34pUXTjvjtziPkcJvZHWJ1NYz8A9mBxrcsNcpba93tk",
  "key4": "2yv9KixbCLfnNBAP7yzxPC2Y7tvSiXWEa341tAWsTs2cV7QoGzaWKRTdGom57PWnQEKscWWyj9ZYdUG5AJpv7TNg",
  "key5": "4sVRUb9XFC1ijHpA5aZQBwqTGcgyzjEh97Z3SxMaRNN7dm7GBzPswdfTvcTPtquCV6ahWmhZfMhr9Rp5o3LQS57g",
  "key6": "4wHfRAtUfdNW5FhrNLgtUxAYLkWkatNVcf6uRxpYjeWmXwTQoyuoW5SqfsdJTFwvtTfzZtFzgyYR1xEgeseMEUZB",
  "key7": "3wy7dCm4FyyaY34nNcku1csmjoU7EuwVyzhwkXRkzvpg7rHf4NvQH5J2amuHpTspMzA36kkZx1yjcqaYXjf1f5Gn",
  "key8": "5rNSXccmJj9Zz6kTaWZZxuCANzmCBziBrzGgJ1MJQ7yrFV7swVZtWbtcDpJjbtZMfDovrMmWr5iGXUuWGEkgggwq",
  "key9": "SKSbv3kQrg8EETbhgEr8CuwfDyWQYrGrbCuDth7MFD7Yct9hKSWzqnsUsYj5RdzyXByjB4deyzyveFnCrdSym1a",
  "key10": "4QwvWyvv7aWiabbGFmUEtbjkcWNDwKM9oc52ctR8kmy6dvSWme3j1sxYLiSYRjqqVFmfkE7NNZk5GnidtmHnyee1",
  "key11": "5zbxgeX2YhDz3iD3ajtiJ4AxhB5dHwMndW7uCapjXtbrZJBFjZkTHV6Je7NaQJuF5KwmNFQfdNbbZG5uvJEdLQQc",
  "key12": "3ddqZHfvEJKtDf4T8UWetupzsFLK9Qx383xh5MtWA1wRhQcMsC1FFatDy9ZhdjBofWZ7EZgtDJTCDJPSNBkWCziK",
  "key13": "2pezJKWP7vt95ycUZfbk7SUt1HcZwnifuTZfFBerWLRkMkftXLPZs3Kb1UToDpAVSLe5GEd97GuaK6miRRHukFVG",
  "key14": "BZcFpHQV5PjbPf6MYhojQEid8vjUS7JRcnPqPvkFLx4HKDDYEmxPqxvZVvGiSokkxJszmxTfxbi4Zgm2ULtthga",
  "key15": "46vxdeF8ZVPxDJFrw6Q1hxpvoQEzzEocadk84CZAqqs8kL6ZCqQ9g9akjGycpozrYxbxy5jMVxWdM2S92Qqrbc6P",
  "key16": "3868v3cD8qhRXabFRiTK6WnNzihcX28eppSuJJBms4kL2heKjc7E671yqRas6UAdxhNF1bx3o6LzfXMAzxjost9N",
  "key17": "46ac3e5CtMq7pcbnHKgZZpTfXmo1WqNCXAP6T12BwZmMmCa4wnUGbqQ3bLrhHT1oyXeeKFz5MddCwcDidsvxfFNX",
  "key18": "4RYXdcSULYL73qGCHj2EUzKu37ybfFGfHF5ahAtkwypheaYmZMEhJbm1ZAULYvuBE7BBJG4qTrHLZeXH5pM6ZTb8",
  "key19": "296Y7LfPtBDLNqvCYik9PkPSGJRDoP6ayHCwAHRJgugdfuoN5B1ZpMmqyUCetmAgkqJPgrk3sHRyjFFSWRxEgF9P",
  "key20": "364q7UdK2upEHNVDGe5madNDG7iyKgmyU6wtRwBPsM2BN7hiR83ZJS3rTcFaeBVngQFEyFjxPsQ716UvrU75UChd",
  "key21": "5RJKPAyEBasnaQ5LssGgYrydwjGWDJq67z2eFrtpDHWDdcZWNfzt9zGDajqfaLkKWVsrsWPi5ng45zYaBVUx8wEZ",
  "key22": "2zx6bbcZLfrQzVHLughzKxHftVxv921E1to1DMNhBY2jcmGfDd5iLZb935wcisCCTkxkEczgK3K6WUnUthFcetGx",
  "key23": "3yDM3REJ4J1W9By4B96Nfdm3GWQUMZSG1YurLQ1H3k38yVTMMdbB7zunnnUZTbup4Q5kn4kCKwweNv2F9Bra8bof",
  "key24": "ARzYo8EmP2nYETFhDbgjmVEPQydJGit9T4wCyNiPfM75tZAWnTGMtsL4LgvyrDaZbqgAVYhzszfRPgBiznFYXVu",
  "key25": "cFPdzbZrzxRXA5hZFiJFsyCmzfbXDheyhWXNm9hVSxriVgGCYK4bdfS9VpNHVqomXgr4ffnf7meBmaxPd257XLN",
  "key26": "2ee7cXNRrcB7Ad8RvyL6ws9inBBMJ4LNEonbUr2t69j7v6CNGGnaYWfPXppTFCbo3aY5JeSGCEncnWeDHEXwShqp",
  "key27": "3pM9cjmXu2TrSmhqFe5CUiRXD1QyJmo1eicekxy6fY8QKpzTEaJGytnngMLmMX9TUPU5v9FgLThP8pYiyiaA2jJi",
  "key28": "2ib8jUNcDPSum1iPe6joC4u6nwr7XiYhX3mJkxwKiG4FeP8XD6duynoQFkrUQyxWZ6MZSdtu2WuJqdU3QFyiLGUQ",
  "key29": "3vZAuX4izToFNF6hkSS94qTyRFoGXZocdnmTD1modL9uDMQALhZFiAComknuGWSpBCrfttYH5g3RF6yrLErKwhAS",
  "key30": "3zZZ1sfyfcgsCBCVCApzGt2yrNeAxV5S3gEN9Gw65monrpMgRjPrCMsuwPrGuxhzBHWejqzRGjoYFiRfwKmgD7tC",
  "key31": "5uxYMbgTWmFNNcPdqKwmfXMvmdqoYE6wXqRnc5NUumLYA3ZnSEmJRXTYDX9aJy8LXxAev1y2gCJVRjhMCZGTaq9H",
  "key32": "3Pvk6xuKZPuPdEKs82n26cY784tbiz7U3DSPdYkgmhiWY79E4QPQrMRyKeYzAWA8TaSb2qZ3qsiboVf512pSgq3w",
  "key33": "JMRn9zBQKj62GRPSfEdRKtAPSLGAPrehx1TnnwCE3TbeLafeR4ZYJUMCSvSWf1f18WEaeEc3i3xY1Loqo9rVEE3",
  "key34": "fpEu8DeEAKsaUJd3Sa8vsgBM1BodDLLYWEjP3Zhw7iKhRdFXQHvN2NP4R8Q57thsC7aq2zDdew3rLWcUaUPDugF",
  "key35": "56Dpe4Rnd5DKu1Y9FaxSWVFfxZp4MysJsQEhoEKYRggrXJkDMB5XXWmwkGpvg8LT9Dff78cF6PBSSqgfSwEnFjdz",
  "key36": "o2wMBRZ2LX88AVQjTCWx1BHYUbAEmypNKdPLY1i9fYDmNBMsazybpH8EpZaynBERVQjuV5dRBt6m87ARszZocWR",
  "key37": "46Yvbvdc1aNye78ikzgeLS5pvaVafQap9WDG13EuxEKKcYLyrzLW9axTvabcQqK6tVrbq19CEVtqDkPtMUre8mHk",
  "key38": "4DD1ajGyYhwyepDZ1MsRTw6U6N8aWJsPSJFdsXk4vbBMJFaNWraC8arsybysFhGdqbMLweHJsWhSRofsHzsTDP5y",
  "key39": "2tyfmg8xoBWkkepN8tp7T3MiHupEkbAR1vWz5anyv8VBuqZRPvPST56E88sneX6obf4XXgoGntj5fVSK3XsXkZzP",
  "key40": "3PAKwJcoVcYd5PVfdhJtv6zASMfYw5u3SPikGQdh6Gp7qD2KYPzn29Vx9DcNZsNKnq5njXfCeoPrKVkM7f2bdty3",
  "key41": "2PMmtifPXxSQ2phLj3M5AqMGaS7rff142asXWQWadsix7TgKbfnQG3DmbQAmy2aiG4wPjVhMkbaBFoEAqzM5Usvv",
  "key42": "35rW8frbybC6oV4sN94sfWSexWF23XBYcHVkqg4p5r1PgjhsNftff7RstsG63QQKSnzUnKnLNCdmKU17drAky8UT",
  "key43": "2UvLCaS2ZXvkZuXBZHJ5Mz2RQY7MF61ChammxVjEBqK8oMKDP1NbwvgadCRuFNaCfT6Lqo8jGKTQ2tYQdpt16FU5",
  "key44": "3Z4ujk4w5WGgPHB9Sg2f3D5pTiZDdSfvN4cav92VsD2ipNAhJgsirkFtWZH1jTtonSqfBnJKywtvKwgqMtRe5Ba2",
  "key45": "4j4JNLUBqJK8BnBaHLNqcbcVyH3Ge33xqsLsouHCX3USGxyZMW3mVoKaceJYNFhTQVmKLXJ6THmQFvzTUEjhPGPP",
  "key46": "5YLt9mA2ubFgxsN1mi6E3CqoLW53p44EEUvncP8NUPk35uFmwqPs4eHmjC2at2wBs1BmzdxAKEc5Yqzvu2F6piuB",
  "key47": "Ew4f6r8YJbNiuWkgiFK3pRntMKwW3RuVRHjnDfniDezYoXgNPzzwRdmW6R8DKsFu1XQhEqTftnjdJbLpPoMn6A3",
  "key48": "24kQihYt6CX5SsedxExMq6N7hnqf1cvBkfaKkW7zi3AdnmDeWcJtpSHPp1Lf1tUFafmoKQdEXVMnks2iBUXxNfqV"
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

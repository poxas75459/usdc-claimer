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
    "4Q5xmBHsFyyNhee5ybSeBoMqZmgPvc3fC656j7khUxyq6mEUSrb8kaA3hHBANzxXqYrmUDaxUBUBz3pXS6sfpDnL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jyhjx6i1EMRd43BsAvamcXucJSLvy44mAKFb26cjPAZogfxekFnBkKY3LsjT8PKiTJ6wfexRYoMp4oBURnEZCoN",
  "key1": "66Y3qCwYyvWNNp5BCS213ieUEFQa8Ekp3ueiwe4M61awZ8jqS446nAtcVmbYTQnYoMsgUudindApz77EWhycE7yY",
  "key2": "4WGePwhjEEXYxXjqAx66uiyorpG175FopnUDxLqcanFwSZCFnQbtyc7L9xFMR8AGTtwtybmi346WhM6StKKXs7YB",
  "key3": "58gFjnbbMK7qQsRNVEG87irNsPXVZRhisKngFvZD4QBrm5JXDJf1h24bAfU6rxXgNZA8QGPXw1FEZ4xHKG7FwQ3W",
  "key4": "YD815uQBkrdmUVjWiuZpDCxDDaSxKGeqdArHrxZQ9aQp9FTQwFfFHJCSo8jWzpAuvxBJ5ppWFaWQXvmZBsaroKx",
  "key5": "2aXbKtyo4MSHaMtLU9BTsjrNr3pRzR5VaterVFBGnf6GVmZtknss3chQXNMC1AWEXTeYJVvpTRLGpNw6Ljdvdit8",
  "key6": "64Y5gfYwcKUDMJUSF4VDWvB8fMhCKQi4XWYBXuLVAAcVjRJiN3MrRoMES1KJHVZMs9Yqv8FyQPUX6QKJMZZACbJc",
  "key7": "3aAS9vXqujN6wUpByd98dfz66rYupFA5KzcAyF7Q3dzy5LRBwXjc4vfuoiunCFfZmrjhF2WaM4Y66ySkZeQ2gpqd",
  "key8": "3jUDTbxxSrkYZniuFweK7fWvgquwp3ZT8bVDWUhq63xt2pgpPp4JDJqNTBqZEJZTe92pCfS9cNhbyZcE2SFSGegi",
  "key9": "5RvE7pmZm8CYftoErtfJ4W5ArD2xL1EMSWHQDuhMQaEWZ6ZzP5Pwod7GujKyTHgtqVmmevhn15h4rYsBPC6HhJ9j",
  "key10": "2n6b2UGSfE297AmexHb8NSTv4iN6aofs6VpcWt6M1ZBC7PjgTGfrTwkXHN6cDUU5GDMmd1ijw8rfLvnXKCE1N5Wc",
  "key11": "2xvhQqn9kXqetbukqMF6SWpChJvr7wskbKXWTWFh9HyiCQV4cu2RhiTofqxEnTwvuTM4adhk3KpsdczoN4YkgrLH",
  "key12": "2ARAduoCeitqJqk5HuiHEWR1vDNRWhWYGQHD18yWurVvvoJy3gYKmGcU7jW76c3E796aws63oGrqhxLL6UD9A59f",
  "key13": "4NYonxjJcofvEMirwLzC7Q3B9dpsncFH6oDBajbdLgbc3bKVdfvft3VJCDFBQNq3pnhDv1JHi914EBeHeW1q1ay7",
  "key14": "5G3dPLTqppHPBY2qLMrTDv8NWbMdL3pgLP7rzXPf9QK3Yb5CkZYV1ZuQFa4RQgBimJjgJhmqqaPniCGvDbxA6GkM",
  "key15": "5RicgbsKGYbPFWv4zp5SCedRyF1QvVHunaZLEoCW6BTMrp9imws1emhbXbjvQ3PWoWGuqyA5MGnRAxDKRRRRwdXw",
  "key16": "48G9zkNuWeUg6pwiygnmQby3i2KLj3sfHCkNXDtvMzsfMAAssi4DghRuzyme1161atf6kZGH7ftbZgP2hyoxQZQ8",
  "key17": "35ejjjVMK2cfanAF4pFy5NXupjEnJ7G9f3yR4iqhrVaFPjJ6FAHqrjUTTUuawqN9MEFqwuegU87L7SPFURvH1kVt",
  "key18": "3ZQuuu3bUkyj2eDwBVktznLi7155ZonWF83VsGK4SczUVoJy6jiW4t3zt3tRPY6rzHzUFYvmrHpYFQc3kXGnQLmy",
  "key19": "3kNzEkSraYDCjGKkbM6n6QURRiffjHoqXDXuwWVj2UbKehSA5aGiUnbx2dMkTw7pPoLqnyesKygSe7Specb1Taxc",
  "key20": "45G3EwNiAKm5zaJJeqxSdWixdweCyUJutpqctrKyns25Eko6gEhRq99e2nhkcCcPmqPoQfzT4Ty1W2WoqF3qhZDL",
  "key21": "5WSXGaiTJRWuZY6DkgyyAeUaCiGhkizGFQ1YtiyuV58hM77mvQ2LuiSRfQgLk73gHU8jnZxT2dSfPKxoNBQaxFKi",
  "key22": "4Mct3jVLWt9HpjpzJgGZQzGwzSuzjNPGZuJ8XCzYjuMPxEo3JEHxpSYd8z8S4sTHAs6kkRWb4J5QUEbopMykStJ3",
  "key23": "4mP5JRtRHts7AcBLZqxD8N4at7QGF7CwR39EmpP17KMVaZFJWBooAAgUFmiEz6hBgkjnmb9bWhpYngqNkyccyPg8",
  "key24": "4Xk1wYCFdEx8PHv6UxH5fcXbLLVdS6BCAe11Fa6cuTG7aydKZffBdHTzUK89emSHTyrsf6391jYrhNSVJPJFxrLn",
  "key25": "4PWdnyNmsufT5xiy64tNdAHGJbQrybi3BaHbcNnW73cFhYCnxM3NrjgFBfVQPGU1UwkywzpKW8TgLJHoQNR71EoV",
  "key26": "3CDaQPqZScXGQ4WU1pTnA432HLXBm5aLG41yPuabAixtwaySLsK7mc1xZui18fTZ6kS1nDh94hGMr9sbagc2EEcw",
  "key27": "E3ZMBMaCVw92AJsFAD8SZ5UVVsZoiH7KWsDvihQuJvKaHT7swz48Tw9pSpZ23HQjcHEMyCkDTu3KbZEGi4NKNo5",
  "key28": "3hPb29mdSKYwMbuftRhBvnGUUQcgmdK8tFeu5r3qYRPL3ABFqK5oxNTcAryEiAcvYh65e9gbARuAgCDZRP2iqzkR",
  "key29": "2Yb8E3kvyDKqJvtj3m5SEdM4RyZnzDHQ8Q79FXTf36zgp7mg7oCzfnNnV9XMMUMvG7u7aJSc8BUa45fEyxNCdq3D",
  "key30": "5ckqHhJdc2oXyrASWL4pSVXQqiWTthd2G4vVXvL6dZG2rr78Y1RspBXEFBnTbicknxTq6p1MNacVAK73GAmhYZW",
  "key31": "3gVpp2Kr6Sskz27iZ4CmXQ4rJFGwjZTvA5Tu1i1uxxMX8eaYMNuT928evWoMmhMEAc6yM3j4riRZx4jtJgknkjU7",
  "key32": "4WXBQqdWZq5Eorq2yTHK4edoere4Z6KSDxNdd5p4aRx5WuR93fRce25aQWp6zb2uHMi1Q5R2DjPhxkSEmJhtt6BN",
  "key33": "2cPT88HJ3cWiigDh7fDohcejuNjfm9abZkiq7vNSuKrTN9BG8U6DfbBTvVs7buGAK9GZ16oTQasLdiEiietSCFQX",
  "key34": "5naYgnm5pmuQFWgQ1prZGqCddMyoB3kgihXhjHNf2jgTZUpL4XDmqLgaDF334hGXaLH5Kn3VxQ4aEhuhjFTUjVd",
  "key35": "cAZF1P64sYQkhzr4L8LMZG41UkfmV7v9cjzdoYF9beVDzwnR7YJ76S2X5ysdySf9UKngd2vcpX4LwDL3RgLfMYL",
  "key36": "2XZjL5VNrVd34K45CRS2cpSR5gygopzU8gZabykogGDTrQtYqYRCC4dHn9Y2XNjr9G5VQGuVJ6sQj5i2Pbv5BiE6",
  "key37": "2Kgkua9DNkhFnFosGdut23iY7WtchN4Gvpu7tqrPkZwWFKLzYWPMYEYvdT1fgyqAGm8Kp957pcj1Lk4bKih44Gvm",
  "key38": "2pUnA6vznugjWhWJyUGDo7vkmg57QPxHJocxVsy3FhdNH8PrQxVVAkRnFH4xHyFAyBSb2DqMiDwYJPLjZoXFYwfS",
  "key39": "Ysq5s4XR9sw4c9QpatoK3vPeES7YXVPF63qinb5Fs37dbHMwa77UbKPT6WS128TGCDh9seiAuYbVGFmHDMCBYwj",
  "key40": "4Fb14hCUwoP7cEnqQ7L8ntmUFpDnpShZBqseiXqcbCiNxdHrELqtcFWq1equbTU9CRn38s62KivNscjzUG2QxUNZ",
  "key41": "GDR8BCVoqoRZvzYKiWyW6cHTPg4qiVUGFZQKuxLYYLCGQRFGmgWL3EHwN1j3gVMcvFqUbr8QMr4mc1FjeK2gu85",
  "key42": "385GjzDt8u9CPSrxFA8KN1pMvNyHmMZc4pZPGziGvF49Zz62hS2FeziGyUJDWHQXVPSmTpcipmx8eAVm8FkHWqxT",
  "key43": "38j8avhuN3nexWTPrdW6Dqi4D56f4w6AxcrphHJSig25D7bKaUxH3uTCPZgB1pNiZWSLp26d8gzY4tSY3U6UPJwv",
  "key44": "5GfefD4BD1zyk7EPPpxUUoxtdCcGMUqJtCkZHroQVS8FcYTeK5VrDj5ppRzQbytLe4xHuJW4FWseGPNGEb9CRQmm",
  "key45": "8UqpbuvkEmQXBWvZ3FRSEJs4PhBJP6zHUXikAdNr8hNbq71av3i6XMnUqdSY4fFBVv5hXfsVTrh6XAnaNdbhC1h",
  "key46": "Rrha3ApFaFChxJLQYTGcf4bR9Myox5K3GGyr1rMWnhdeFv1A6Z2mp4umiF8ydW4GMH7g6WJCgk81UVQZpkwCVLZ",
  "key47": "4z21VsGS5S8iX3fgKVjcGTgKrVwzbsjGfK271mx4r24vATtQzRjVo9VQzS1rrnnQxPeuUSvUybW6SJiTe2G7AXtB",
  "key48": "5dUn8orbYjo1t82DZ9RJsT32Ykzi7M8Y4rA3eMcswRYY9Jo1Z51UUf6vgpynuLu9SEBbcQAA8WjyjBss1cSgiimJ"
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

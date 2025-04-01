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
    "22Hztgd3wRuRGNbP7hXuBaFxcCSx8C7XCUBEEhUMMbrZAetGkqJ2VBMPW4QcGrf4V2gZ5aGFYZsjys9yxEwd1dhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pTHYU53dUj1xFRa2Rh3PaKgf5hQEuUwHpXVZELpXMW4hkzYbkpU7PfQqYKNkMPZrHeGAPJfmRt2XDiw1bHSE4yt",
  "key1": "5scaoDLiW6Fhue4T21cATq7cMvMXPCKc8PuKXYg1nhHJLsSTp1vHTUpKNWjV6ANPB7fx2dopBL1NDvQskGFGjnRg",
  "key2": "2BUVzhxtqrruqNsDJiRAGrHWBeZVB65DG9654QfFTzrLnXrqjwd1EgWjMXUkcUKZ1qoVGHt3s8ZQW557YKWyVrKt",
  "key3": "5nsYvwSs7pCf8Wu5yjMoKjsT1XQSLfHdEEGGqh2iuwHpQePVJ5YWg5s1U6V5aYHEtivki3PiWQarohj9pffMSQhS",
  "key4": "3c7jJK4ixyUqPRTcHzLDK64KhRv942tfxGHqKHBMN7eKFrM4XBQQ6yCGHCzCXmgqQj7VaJtkK41zCs6tQTj7FARj",
  "key5": "44DsYP3zz2xA2pM1FfPVcFmHPAmwoaWq9pD2PAk4Fqt4t2tZkzhYS6indrWboFZJrz9gaymFeaNiQUTFRqvWLQgx",
  "key6": "5wUSiiez81qZS1STrcYMdgeDGAm45AN9jkbNkeGhAZEL24sciNjnbsSpSFgeWUWhy7C9fGommcVM3yrDbFs7TckA",
  "key7": "4A4pGcivvfgkVjGDPPGvqWVRTjBkHFd9WmZYiAhXnEV1XvNrcJujj1jqbPi3zTtNtTeuTzeaYndPBBG4kZ3SgZvH",
  "key8": "5XQWxNA7FtcYrwgs4eCen8JyYVVi36ciyn1X7n82bLAaetbyn6LkyLhkxhmzPSWRNVpBm9EeWTXrk92mwrMph7VF",
  "key9": "247UfRSJkPAx82XNJENfTVcSxbeJhr4a8EkaStdFSpFkcu8rrkUNMM2JjPNGdXwfjRSYtQayb6BjngKJrvcuyFDV",
  "key10": "3xZNrGxnYy6mo42ngcyk1Rf2vhX984Qf3up25THwayXVsBCAVoAPoqV9EEDf1pUdZzh9phDUfQ9b6RzVrXEVfWTV",
  "key11": "2NoGLBrYSe8W6vbfb31vCzujVWFW2GQYdkzfVDTTzA6A91n1guMDq2ufq4EtRaL27XhcGMoGYPJ9PFZKr7nnuGZS",
  "key12": "4Zks4dBrGbwDJuKePcdcv1m2KSu4bjARScw2C8KkPxREq2f318hsyeAkAWMMZ6T2UBNmSqXbDJB8g61HtQNoN1MH",
  "key13": "2r191edN3vC7MrWCVpJAWUByk9e45GEPvwDNRWKeKHALHNxcBfDD9d5HG9qC1T9ESehJjhtVRb7p85sL1b7XtpJV",
  "key14": "2T2Ypbpoj6ERrf8pTdYM59keQwz9trWmcg4wawpoEN6hu7DpLzkjWujVAb1akAE7Dkj3EqsTxsUG2HB6RqxBaFx8",
  "key15": "7wuJKPLRpQB6YSJhezB1JLUfowMB38WgX17Tq5TYvMxVNVthi8QYTpJe8xXZ96H9GeANZ23Gu5ZQvEnQSNbgzuJ",
  "key16": "3aPFzwAtuYNQtsayKRsejwSe87g5XjZpTnisPvyR9Ag59UuWwSsabLYzZW62LVDgEk1vkaZppdS6MMcP35eB2hq1",
  "key17": "jGRb8i12wCaJJSuhNGC9XtqqUqya3vkQJUwkxsoBVeW577jKVioUCnRYRSRttWmdDA5HigZTDKeEzzR3zZgwSZW",
  "key18": "32DCBaRNiGU99RpLQNys3MWWy3KKAeZVQpVq78kEtQCcm7vX32hdV1jTwFBv3UMirbDWK4ekqAELqQnXpQzhG8g7",
  "key19": "5AcUNcEs6ZJdwLzussinHEXD5WdCtnWrGRDU25J6JNU58MbB3bjM3zYLg9T6eMZiVCESP3mjuk6iBB5JPdfvuydb",
  "key20": "2HK13Wkn4LVU3rxBFfgi8LJkocUTUdhHh3XZRyQxVnRy8UhghPtLSg7zqpvzwFdkmW5nNUuP4NksjMNH8W1rqad5",
  "key21": "3Zwkm8r3NZBCPB3mmfJTCf8AN6xA5ihMhNQP2CrccSLQxk2dWQrJsmQNiroCMMAbv18UtTskUrHcy7eDAtn1qP2x",
  "key22": "4VLrGQJ3Ne78Mqr1qHs8HcKWTPemLrRdT3WsawA787mNWxgUXyNxYUZmF6mQVZbf1xitCE5UCuCjZS7K6kUzQHh5",
  "key23": "2BksXEggqyKZxzZA6Ha4ydaQS791w9kFLVQtda9ELPRk1ehQMTo8KMeRT2eK8g2MZzUasmHVZwZU6JVLQNnoC2ij",
  "key24": "4eqLwMbUJByPzGhn7mdDZUzM1mu2JR4wBqZNb4EwEUf7JsuD94WEcd3GBucUH8QerpwCYjevc5stFydW7K3H9Qu4",
  "key25": "5LS7E5yVY7f9bm9ro11ZX1WL259F9LEvLoyR1EveVMbr6nmKrqzXrkVHsjXoWZcmFDWsNovT54APkjs4VD4Zq73E",
  "key26": "5SspaA7fH7ufRbZw36EW5MDxTr5z4hujLTp4MAKYusV12gwXCQqXVALoKkW5ue2KLc2XVcYTfbyXfEMNJY5tnEs2",
  "key27": "28RKwJKhCyzitb9WGZ5VHaZwSSgZsf3b4Ln1aBAMXoenTnwHi64dPTJYbJkLYDzb18LEFmjpv1gZJHGTT7N4rtyW",
  "key28": "4XMui5J9Y8YGSxim6eBrx4oH1wbjuNXDNS98J1VzR8Mow96f527jDCDUu79agvLMakcfP6c5ra75EduMbL4YcoNo",
  "key29": "4bYKYZdGgbNwqCthMEyLayo67qrcCnaMJPRp8xamfYwRrQ7ZAPyBijGr1Vk5UuWkRp7yxJEjSk9zfEKyqB23oi5C",
  "key30": "5VyfxUZpywhuJPnz4BwCki2BWuW3SzAGiMWGfxQd1dNjhYA7cPq1dwu9mJZH5Yw3fZ5zj2SZyY3bj17JkkAKzVXe",
  "key31": "5wTeLAT6ZFUNGYKWoExGKz6SQkzxwWqDPqPX2eNdDRFitbH2KFWhDs6Dk981X2BTLDsRrt7gxKMUVWcuAi6SF1yM",
  "key32": "bBg6b7sLrEACEK3xFjVv3DqQfuUAesiRzoeoohqqjU1Xxcz5ZDpoWh3exPUVvAQT8opBuW3U1vVxRVK3aEDW8aQ",
  "key33": "4ZMSAmTCzrat8GkR1Xh3GYvEV1NFz5VRxNLrM6b87e4M7qMMLCuQedP3YzCwUxv9CgTzAEuNkTi8Ea4w9QwN7ZiN",
  "key34": "5rSMhFw6hawAtBVE6XQmjRSBDC2AMbAXGPMsjJ4SRJXtDfJejCG19fvJBV88XRPfUR8R2iAdL1ah3UUZT9NboM61",
  "key35": "228g8Ej6KVXU4wykjJWfv5bxMHc8W15sXixR9izcMKnPHqjsNpJu7verQfo1CzzbC6NagFkQXoD4P6cy8po9LCDp",
  "key36": "56HoiRpWmDYZK8x15CG75QuJZcVFDcLPnxmn7TuWJmQCg3dT8zNPYyk8THddKkFiLUMat7kWfk2c3u9SP9wgcRnf",
  "key37": "64nA2iAMdeM9goer6zvPanA6N2bsBECrCMNkjbvSnDPQb4UAjSbaJ7MDPjuFTNty3Lyk4ueAxY1PDKCMUMbSetYX",
  "key38": "2JrZ1avz8XDPiPPJJtsCQXSS4Xx85mYmZSWSHoKZkh8QJz7c8PZ58hPi4FFL2aFWNtxMkBrjeeXbBXTkhLCBanHn",
  "key39": "3moR6p6wG2DSb7RG82xtyTQsorqytVmoTvNrm19FBD6erAyXFcx1ZgA42bjtm3CByujKzsiBfdjNp42hqbuR4C5j",
  "key40": "3U19cb61DujSdBiKDqCnFcw4LSnamTSGeVaaSshwA52zttxu7JpHhgqV9onXah8VZayxuQcn5sbS3AVBGVdsL393",
  "key41": "4aA8kydo2QdwX8GJLfLxuJZjuPhMc7TuxdKpdFUP4Y3wvdPk51HKEkb58V5V72Ua1BFBzvST8Kq5NicaWdV3zV7K",
  "key42": "2BR8sj6ruJWTRkE7LSF663qBe54SbnZ7RZmDHCRHsW3kd4HtoJhDDLLcQcUsqe2DZdhsCv7AHXBWFkVNDFbkhN58"
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

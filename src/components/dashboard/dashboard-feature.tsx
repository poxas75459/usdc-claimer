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
    "RCQsd2CF69viPFZGUU3izZbZVEtNkpq6c11SbqPS8q62QxXo5pQB831VgGhsvo1vKFT2NMXNUL8g7oe5Hts4aZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Gk3nfjfKyG48YFRp4uiifRcciLX6V8L6udL78a4gzYaXHVMgQ4ShXixfxw8PrDX1yQsxWZUoviQ8h4GSSipeXf",
  "key1": "UHx8uM4b7pCmqS4U8BoT6iEppPRA9AWNpCAgv5v1TctugKBkiwamoymyVtMK1mBLBDQ73JQvUwJhhf2qkuoXMHr",
  "key2": "4XzaBjQn2NxV5FYrcKj9vMMjoY9zNEB2MxghMypVoeYGoFDfWq3En2Snd3BkEZL7E9ZryXLNbhMGH81NQKhpgTJR",
  "key3": "jaTLjv6H3ojL9nBqVr22sRziKC89csPJBd5AwDZkJerpGt5Vwe1oiYGqB7V2NjBK1vRjVVK5Xjxrk6VQfrkMAyT",
  "key4": "3JegCCdM4To4LGg2Pu7nywZhtzaR2DqbLDJBWy3J2FJ3w2uaqhkcbzS6d7iSGntVrwNotpF9Qmh3nTUgJNg9M2MC",
  "key5": "5NHVDg41swAfr1NFdcnma2zKxGnhAonqskbAVAAWBZ9KuPyXS3wxoSkNbKCmDJj2oTQGKfqfSTGBcYcPyFrnt9Jn",
  "key6": "3h4ttAfx1d6tXJTQrg294tYkRyFfJ84mKxadxdDrEoiq12bm9VkTw5KRMY1JtxJ16pMgkVYuBTSk8fMV9gpk6mS1",
  "key7": "5ZUuw6LgAauSiW6kyPDsCnzzcayEZ5beNjz6fhqrijMJ3k5TDncFb95jSphpGeTFWtCxWxq85itFN3g2VTU4A5x8",
  "key8": "2XxAWgPkzzLXk2oCmuQU5bkKZDf36fLGLioYMMDLVNuB4YrgjwYkiKtoSVUyDprcgj9oGsmZCm45vigwBiBtfdHL",
  "key9": "5tUoMx3UcxALFAtWnFmAkQJ2cSh5FwTyitF8JkcLRFj6mtMYyZb3c7WUMxL1H9mNt93VvS1dfzSANyeYGffoBpq5",
  "key10": "3Lzeb9SzeZpwAbRXsSmaVsDj5kQ9HWpmmLDfdbw7vkfWinAE7ATF7UpidtbvzYzXTiPFUpeGTwfp6McDqreSuv4v",
  "key11": "XrSRWNjaupeZv7WWZbJ5kxxw64CHaELqRdFWtbR7nFZsvm3fVMpwWsxPrik4wW79VozsSQHgFXQoJTuQT3RE5zw",
  "key12": "2NpQGoDdgD9LyQerTNeYH9fgjUuXxFYgkyDWTbtBxMbAf5UhPqz8bNvWcmj7x6oB3hUUDT6BWNgrUAeXVVd3CyMs",
  "key13": "2pERFjDsUh3XQgpPBAb979NKgjXjNTHuM16DydwJQ2A8Tjw6gCYrRtSdX5mt4qAASjKyvRoJdbzq7N5AAKJxAKmw",
  "key14": "4adRhtWy3d5CAAXrDLwwTWnYdQsxkgZ2idwpo5oDYTdpjNcLMDejNMc2bdquBpgcgLkVRC6X99Guh5PU5Wz84Aze",
  "key15": "5NfSLTw2AT3tTxfoDufdhFNjbd43HhWw8bTJ4hTLBqH3NQarA5i7vqK4bmSdKnTJtMrMU2DJAMkiZBbGYRCebxdd",
  "key16": "48P4Lb5XpVRHSTq1bGoCXf94smAmCWyEopoaxCfngKeWGnpXbuCk1HmmqtRAe5pr73RAHiK5Z9j5Yc3QDMrfG6AP",
  "key17": "3SS3bKKqxEi7fjMbkhgD1QpXSVMt6H7bSenq9pMVqb4aa3XgQCPtVeftmS3sNpgDnaD457W1gb3dL9rJUFdJZZQn",
  "key18": "2SkAPgqncUYuV6SiDUfWUabLw8N2h4eD5m4pbd6bnZpTbKJMt43bhnHwtp9bCuqPFHTYR692Hm7temugL5QiWFDm",
  "key19": "ybS4BkZHG6mA7gtqxaSMoDQgx2dyD5fPPYjhCgTvAvZ9vSD74dseU5spPNjXiBQDycKP52zD7628audGJCcH39h",
  "key20": "5fSJ3pZto13bmVyMSSrm31GCjsxV3PVBYJaABmyXrmGd1bZeNhxtecx8xKZJV1mMr373R9aDioZwhGm2seNUNbCU",
  "key21": "4eZpcjtQWdMsPFfRttCYKZAeBUmcu7F6KgpVLmnumqeExQZqv4fgaChWf6DuwczM5yXUsAJVbtrVtENpoRiGZPbk",
  "key22": "2cJm1V7Xf2zVM2jWSmZfu21HrfSRxNpzNMazi5wZxkdnvb7JN8VK2wD3ZJusix6DtQnxq6h1TJdcMNEFDuKzkpqk",
  "key23": "4QtWLgWsR1x2gezmhgEYehC6Vzk1SGg98VTmgGD6W7svZMNPw3Zy7AS5KuAQjmp9cbcEbDALq7E627uErMywUEyV",
  "key24": "67Q716tvniQsTwKuPB4a8aou2T3BgPfuMz4VsFRErcCfsF9X5KiGjcfpjGopNzJ3N2i4HnohU1TuWXFM5HgRzyTx",
  "key25": "313LEVGbxBL82VTbrhYv3hHBHAbSmrLinqeipfopP2FbDkNhPTnkJPfaXqMnMoiRF8QnNwjUZ47on7dsFhCWqwdA",
  "key26": "3FT3syu9ZDkUVM1d4SHVKSq3V47NcRc2bkbUsU9yf4WVvPfScXfdgxkZNe26GCjdSW4Xx7UqmVSpJjFEZXSBKVZV",
  "key27": "4xKUTn7SubGUgf89PKgYSkg4f7qyX1T1wtKopxSWrzVyjX8F3FSxcowr6ALDoBgavzZgR8pM1LehzCAxWDVRhZqE",
  "key28": "2ofDSpTe95YqTJ4YhuwQcTNi6svxN4qHvu9pAh5vSX5WbcAZim9BZNMRhe4muGir4vhSn25wqM9Qri3xk9JvGG6V",
  "key29": "3cwx5ec1beVSLBEyGkS19oaroNPDPLHLWLcV6B3s81uSZtVthds5y8kceQ9s2ey9JLEEHYAvTzVPupAeExBTpiYD",
  "key30": "4p4EtksdX27yTDgDHCPiE5GsHdt45EB4VGrg1px7GwguLEYEyc5LojpzC2ZReK4zHA5PWQwvwweeEwqUcd5f9ff2",
  "key31": "oCsN4286rqgRkx88udcWkTFhJZMbeCppYdwjDRKNDeX18Kw6Ev8oTEE4At5h7w1faNcb7i9LfDxrAvzySPRVwtw",
  "key32": "zQcVTkWk65uu6DRscs7Jv5qfN1mD1R4c2BjPiM4NL3Ft8JbsrrAx1PjovvzMcHF4aJnV49wVPbZyKE16aWyTtJ5",
  "key33": "1oMugncUUFCFA4FaqYx2YRWivQ2SeS9HAikhUn8MMx5fqpJX6vBY33ZC8qA6c7DQJ5BoyTwtwZwbqHQidQ9ypZ8",
  "key34": "4D6wzrZKPVostcH1kfw6DrGQYhuBNJ78bBb67YsuuAQDGd8tQjqQMXjWsjUFwaLm5sE6b7pwKaoBE3g8DpDyKqHq",
  "key35": "XrVQsFC9aAvGZ9C4ikSx7GU7n6r8wz46jK5qUC4CXCT3BDcHyLexhyEtdvFZgF8jCMLa2KfZCCC7ge2kTci3c7Q",
  "key36": "3EXhjnz4NcsWrhDs6DntSsTxRWbrKamSBf6yN3Jri6PF2uV5fSxzotmUqaq2xdzMYDLu1ESYp8W1iY6pyz9rkrME",
  "key37": "2yWM9wx7HNtCGXKv26VUGZTq6FX1Mx5HPHxopoYShJd7kdetNsPursyf2X4LTaTUnQZPRV9zt2uCEJ6z799UCnkr"
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

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
    "5S1LyHxWBLhQYs6qZXz6GRgXz5AZ6LozVx3reqbDUXMdkKBZG62CkNSSm6B2iZzXTvNWx8qbAe8g2LQDjPaXUFQp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CXBoy8f1qEauovd4fQi46bH7DzrQHqfgfsf65RAZ4u8q5CBtzZh4YE5V1Gm65PXMv4B4KzRTGTxCsF9TvUEMnJ6",
  "key1": "3xtkcFRWLiXUM1AgStSbSA6cxDpbVCcB4Yo7wfAZrcDmu2zd8SToTsGgstE5Z2U2K76hDn6iXbdTNgyaHo47XkYT",
  "key2": "3ZgkymZd2W4ibEdJ5Vyt75iqw57TA3WsKZxAC3xUckYHr8u3NpgDArnhPvyaa1d9X7jcp7JtERAFBJZ2gz1i1h91",
  "key3": "263U5sc1C1c3zmzvVXa988k8TALC5TkhmtZNdEJ58FB4rK6z43Y7WgXonW1k7EguCzQg8J2neMfcdrVueKNg2Dpm",
  "key4": "UM7eKvuDouqhVRqCd57hKkVLrrdikhUKgYF33rJrX1g4iN8dGeSPdXjZNtnizrD6d8zSxzWnvVVxMTF52g6RYdP",
  "key5": "5gmgzD9KP2wLzzjYkSignA5h41gURZM9eGxitVbMhBBoTp1rpZ6mwNFGM3q73GExNJVVSYDfbq31TjhEjLmxP1xC",
  "key6": "2Hm3TSVXoJCDhDAdnXubDY9Joz3zySS7qDqHUhbNsayMoKfE4F4ycjEHg24CeDsU6sohqVqLFs9jV8j64fDVWmpp",
  "key7": "51K4LjeCfoatwughiiqBqQhe484XWNZWYUnXJTBXFU8TBjRkfzr9wiSaWHuVqvsdZF4xVXHAhsFLoTg5SNpAHwby",
  "key8": "SxJirFLvFSmjhAAAbdJxA1aiKjGjVuWx6yzvqiUavne1hKuyVUUT2LLgCw52CepjvcYzRtJNjzWNYfVnaYXBxFo",
  "key9": "4iVK1ETgD33G8A3HABXJ58GThdhghghAL8pEcuHj9BfpjvMsiPTd9GAWJ4VGwuBGWkRJjGuLsEeA9Ku7jPpCEiG7",
  "key10": "2CGE2j8LsAVhpwxAzTjgXkSCGyQpoYJxxkEKgYGQwXMXcP1EBwTDNLdtcdtwYXmjH1VQvGFFJUpMQWNQGwfXwLgn",
  "key11": "4zZ4tFPDtSU69a4A7X73hp1HxLxevkixCFDd6ZXjQ5ioD2PDCYLHHr8yKgmpvtdn4CokZUuWFUBU8tkNRPTqEAvR",
  "key12": "WtPPL1aS18ZohLMeDXv2AFNCDka67QeKYak4s6NqHCYN7eWYiYj1LYp8pREdvX1pBXS7x5uc2yj8zdQtM6cSD1U",
  "key13": "4F1AgCkMbLt8AtJMEXovUSpjkY1QzDTBCtqNmQbs1zf7bUF9bETxMUZEP8zpoBkkA1j6fqZUZQoyHYTRet1pDwhi",
  "key14": "61ZTivovYjjZ7oGQSA9J6vX2K8q9rxBXXjgPYgRnAJPkVj5mJdc9f8F48vkQUiSYJLZuEXKkP7a6ZvrbnH6ZscqV",
  "key15": "2VwM4VWBzCTaJgrPWGpweywRPSwzZDAeiWmKzHgtvv9qsWuhhfRAzi6vkbdkhEX3eBLyTaNS8YU57AdvpQ4QkFEL",
  "key16": "4syqQaB9iLxMyAq9pgJBX83P4rFxBfpBe6dN9qyxRyrdTQJ1sz76ucRSk8CV8xzvfxiM7Vszb51K6xeXgF7ubvWK",
  "key17": "EUegW9q4ZUJgMJWkJHwU2FnQHiaR218dWzL8cq36oewgAfksZ5eRDJwQcov7CKxLfYqpEt5itEtbLRgzDxxPMVd",
  "key18": "aySZZobRdh5vH3QuW8mArGQFknV6meydcTBP1xcaahA4euJNpTmJaSPWDgdJPnETZwF98qakEQBeUAmeTjdCEq3",
  "key19": "2NkTErecfEWnQKbeh5sesjtT5iomTB1SgHpXKRLh1D4DDoibSNWktDC1QEZucqhToHuoNovsnwuTnQLRSKhNm61F",
  "key20": "kuW7K4H6yc5PPz6zZoogoDfZ6WudAa2vSBKiqVqiBHTzMwWDJh3Ax7TcZgiL8wPKishw2C8DXAeaQ74xRbHB3ce",
  "key21": "2gSMnGEZdE7gVMgcGyZQtN4MLNwR3gPV7AGREc3C6fBULjrhVgb13ifxQBnSnkMVHH1vbU4NnEWzDENukRef2SUP",
  "key22": "45SjSmFjCNG4FCL8HAU59sUL5FLL3huWGqDDvtoanYSKSHUvuef5orgUFvsJt6kcvW5mmXbbdjv22PXdzH96oEra",
  "key23": "5H7AU4zr5upWMzXByUyz5udHmXivqfe9mj75Q5TE26wAPu1qVPHa8FVVtee15TZpF1FEeB3HnSQknitSWCbp3bYy",
  "key24": "5KeACfSvGRtmo7r9xaGr4gUNV8aEL8UR8N7QNZ9SktBXSHd6NvzvnjqG8rB1uXGNurQUx756UtZQ6B3CksFpHrSy",
  "key25": "54Qyeo8aicx9XvdEarAL8rWipKmmJPEeTpoC1SaqSqxbkvKwR3SPwLRBwhDUxWLWjyRDVeMdP9Xgqno4kRnBKvxR",
  "key26": "Jeotk9Ez8jewAMFhBNHfaFA37z9PZPQDzVoPxS15xcka8M51z8D6UMp4Re7ZpmUniPxwMU5GnYH8VS5gRUL4yuv",
  "key27": "dSmCHGXnpTQbfXLFV5TmE2DP8hfgE7oHXSh6PjgTFMRfAc3WjXfWrg4NZCWL2VB2YUT5LSYm5Vrhz7odNuPq2y7",
  "key28": "4A2vJ9QtCNZ5DCZ2oX2jToBAVk3jMuUXbShXsRtJCEkWyL8qT8x9HGgesqh8pJkHYqDHPjA11DEZ35hLfjdxxTTt",
  "key29": "4yDVhdBpdzmZJWZ4LmqSSSJeQq6sug8yXoo7wTYMr9ks5EU5ZhZqr8vJxegVMHV6Xk57P6Cix3pXj8Kaht11v2Hq",
  "key30": "2LmrzeaAiBsVRurhMWx9ABWnpnp2Apf4zEiPR6jwfLSm7Zmtk3Hxr9yte567yT6tYpV5FoNUih1UJuBPkKvt4t1p",
  "key31": "5pKumM4oFhFWKgAEU19SKa42YPMsme8iH9zBQk5vBR7yDwSWJocQC4veiKqnhFgRioDGwr1pVA35YDMxzPc72Fkd",
  "key32": "5T2W95XDN7Nuy5BLsrmUXnVSMH8iamadMQ8dQzFk4LGMzopWe52tatgpBQ26e9Eg8LWhkpSzcKe7zhMFNPzHBXwg",
  "key33": "2TPKWzXkvt5rHjh9Z68nA6NGu4XzvfzH8mzkmeHzSrC8vkWArVwg3yLEiAbbwuwLCsxXYDNHH6yu7xADQPM3tM9g",
  "key34": "N3eQtGyZHq4GmKwMzG3e8CCxNrhExUtcJrPpo5H7Kt8qYpFWCY1eFpr1ZVUMiFJEvf17QqmHsozZUnGAicSNpXP",
  "key35": "4XYw6eSRh6p9tkVNi5ZhGXpVUwUy3zQWjeHbYBsDngmZf1BXfAtgdADsJKZmC4MBFtpKKFjMhBz8rYsDrDMU1YnJ",
  "key36": "5VhBYocrTKt4efTsh5uxTKVMrFNBKJ623ZLwXbhs4KSi4YbHRndrrLPYnr3AF8z7EYCGzyDfQgRy7evr5ti5EFpy",
  "key37": "2LHtoQGHkQqNgqsXfvSEhbxbq7eFnMTxLSgi8XfPwezRuTYYs47AB5UZ4ZSP28DdADvPEA1ywiUEhyaKpXo6UCWg",
  "key38": "2hxSCQitydpdXbE2sjbRDDaJhSYkMijakFqvCQqnimA92snyowvZ1vLhJWY5rMQgwpDYfLjei3QB4MUGBSguedjQ",
  "key39": "5xSJRjZXFqZ2v8v8BhnuRHewFDeeT75z4HM4pLCE6bGFzxF9ysCGEH56jrbvGiLQAfzycsoUTVp43YDSAaGAJr5b",
  "key40": "ir6hNjxm2SUJZLb4XtEW8Fccs43oWgXgz5BhZxP4AqAcYHeGdk9fHPKevR916z18wNHw7eY56KNHfzkvfd5e91r"
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

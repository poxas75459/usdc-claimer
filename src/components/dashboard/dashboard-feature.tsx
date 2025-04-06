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
    "5DFv18CriSJioyKuoFFk87EtiZSDrA3zorpm4aMNmm1debT7yQCgZF7LKB7fFdxwX2UpXPdHF4WkFiRweG3vqh9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DmuoZZkve9krEvN9tJavP6hyiWcL8w8WbB83ahVzjto1Wvzq5VSwu9KmGVxFuRXHrqEzk8bBCncmbSPTWhJETvk",
  "key1": "ovmvL3nKZd4YLzAQ82fCX3v433ypRWtYkfVbKPdABgsXVye3FBNhiJa7pUwKSm97o2ESQsvYRtYPktN3fogKLJW",
  "key2": "5smQ9S4QkH9M2MGzCHjnQvQ2NYhhuz49yocVoRkTH885KVGCvQcsYNqDa4abGhbuk9saCKW2Ecav1FiGkccYVxKZ",
  "key3": "3StjAp9YPn5VSdyTiQbmXYNE6w7xPRHpLM2gesUXSp6BDZzi8ScaXzGj8zfEErZ4v24JL72n1e5PMmGZWdgyCBW",
  "key4": "4Kr1Bip1Eg2vaPrSTD2CWhSEZCERmGsysKmu56aYcP4dw5zY2wH5hRTsEn3FW4jXKFZf39kcYCPnbRUkK9b1sqQE",
  "key5": "3QethNjvsMz7s5hxv6wzKeJT383WrNBEavcxjFzok8UrxQY9CzhQbqmPvjRHTGEAn9Bj7aQb7imNC6kXFww6pkad",
  "key6": "5W7NZRkvF8pXcqtLiejGB8BGeuoqmRg12uBcNVuHiencm8bqkt1dR2gNmLn2Fac81oTyw2LYLnbJLAofHHyCtrFW",
  "key7": "3RPhwakeuLssPNwwvtQjTVCStt9KrzSg7tyeeC2azGnLZSnKm6rrAcL9WZj5iYQhyTVK5J2RKpVMfcA8jF1M9g8T",
  "key8": "Ydg79LwQKfgQwdynESYQxKUbbeeUbK1jYAmpk84Uc2wffMpc6YfMcXgANtDY7QCzsgBRfbecHmKETrngq2ff6fm",
  "key9": "iupBN1P2BYg6KYmgRWgxbbWz76rr6mHvHkKbZir9PTXkRXgCcfda6PTRJatkSjb1tGdx1paivrht9WaPEdB3RDk",
  "key10": "5YDc7kzzydD9C6LF55dbwx6a5X8i2wHVBDdHyenifdWUd4K9RuwJaH4pcwP352jYixPsBUGuk86tWWh3HSE58EGL",
  "key11": "5C2p3ZBa1JYDK12uSXA672LBWrNUidWuzo3bhzW1NsVgzmqCW6N3vVPPJf9sSkRop4fEEK1HawoyVZgshjc2W1TT",
  "key12": "4FK82zUiBHU3YMEmLRHCK64WRjw8qpW4VJSUJ77PdKnPzq8CtxgudrCapFjthjQGVUAJFNXD9Gk2m62FJ5aQuGLn",
  "key13": "3rdTzcasWYasbWV2BMP7dzAvLzehJkNZ4UPiHNkVitvtpshujWTAs6UgcuWvN4MYp46LSTRe8dEtu1KQaYyAAT7c",
  "key14": "5rLf8iaJsdCZ7MZzind667tj25oDgQuparpMY9oNkJvEXubGbQg2SL6rtfXH7uR49RAjUmYSXKYHAcJVxAWmFS3R",
  "key15": "5R4oSVSfse5Vu594R3yG6U7xtZaHhAqdpFkMXc6KVR6VykrUAk33wd3cCiHnPvBqdpz8FBtGBg3AxreJjBXB9fGQ",
  "key16": "3z3P5LGtpb1nkULeV4QKL3QABskQgWVNNNeUj45TwKuJfjBaPdK2258Yw6aBM3uSrNBtBof1s3GGw8XbC68exV4c",
  "key17": "4HTCabQXrnL79iUhLeZwZL8RrLssQWEyMAxqRoFrtEXzJxGk3wfBV5DziXzDCcS4kXkogsE8UMrDggpTYnnEWTfp",
  "key18": "4wtsNrZFoqxEkeHvU9tNQeYeEimZz6hCsnzxwY3WYLxoDGAbjqBSKPom7MQdo3cp8aAMsf7y1CpjaKJu7giJJcKm",
  "key19": "5618zyHjQuApr9DFUzK5GWnPvVqwPhLLA2TDMs4qypcCpDrRYNtH3Thoy3RTCz5vfSVGBDo1YepLyfKNhhNRXWa9",
  "key20": "PF2c2iK88hYSfPAvDVofsDSX7j5EnFLnfBMCwdcgt6qafBZALMcfp7cmWYikk8UoV7Jn5tKh2dhzCiYU4FdpjDy",
  "key21": "3kUGwLmTTMcDNxEskM1mYBPPUuS2krUChQetnctJyeBR5oTKRrYS9c5snFwwiRDrQXg8oPxmTKTd4oCqqDfwKtsr",
  "key22": "3iVMehGQmmGc9v1MretR6v9H71Tyuadme6NiLQu8dxJKSEFVoF5TKyf3Xu2LGn1EyPP7PuN3pvj3GrjH26DbN2WV",
  "key23": "5WgpaBvpfzivSMPqcqhcTL1B9M8SR9KMbGirnm6meLUqA23UEYjssx7duaya6kvWv3XquiK97HP45TTTk66266vz",
  "key24": "iuc54G78opMRuwUGVmiENhhSjw21mVXjW8m4AYfMtQVre7TUhT39CpjqrGZNyjTHFJcSzyh6ngV2yJiqT2SUJPt",
  "key25": "AXn9yTPaZCkm6TTtLrZC7UpX5fvtPRaEUp2XFuPmmi4jTcZvaBkEcUR65S37mJLW1Jo44EC44AtvFDNfWne4Hcn",
  "key26": "zUdTckQ575gQV4UunEAP2P2a5MGhexnd9BtqPKhcCqTcHW6R8wpnvAWkGRnNFm5Xx2TKxq1KYkF6MkMcZsWyiwJ",
  "key27": "5UzLTg1EhTPNTi7GW9xoSa42D9qXjZjx46ZJu5mwf66ebr1FM9mAtFxzzev1HJVzcLg7ijWYxDSjZUqap9GTs77T",
  "key28": "4HQQzPRPiV4NxQyr2w5Nc6UxtB4hG9yx2T5Zw7mPZreHV1wAkzgC64mcufZw4YGoZe5yD9aTrro525cEr3pNKpA3",
  "key29": "5WyeU6s1UGiCNKTv2Sm4FPeimJNdLXJi7W9viT52HaWEpj6THtVduWnV79kbs7QSuKLDDCAYk9LmUK79bGinRz44",
  "key30": "5u39hXvzJrNRrA3ZtZbhBpqQgQDov1G5E7ic8QYLa9otcxf5Eda19qJywQFcJxRriAuWuXwxWzp1g9ekv6mqPcQ2",
  "key31": "2ysGc5Tv6aKWasGpMsAZBpMHkZZBqDmVFxNRhTuww9eLJFy1npgUpHRMT3FB2AR7PRwNkAZVKQoPHbMwnHv1utmp",
  "key32": "2bqj4EqqsHXCwHcRSVDLff98RskGKCm9ri45dQftwMisBiktmwhizEkFGNDYd1JvAPx2fPtVMinNK6KAK9CcGmN8",
  "key33": "2zjpxXFQdy8UCV8eZSbXsBGbUAxTMZugpts3e6tjQemtv9ZcymgqPBzj33Arf1L84wb4n4pEccmtqLaLQanqujzL"
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

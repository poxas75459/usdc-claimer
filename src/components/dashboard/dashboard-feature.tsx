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
    "47h4B66MUKLARfRw5h3o19cwMTxnuduDAWJdSFZosKqtGNoHvH7c8ucn7ULaNdubAaFperU3GFHFt5pk7YixYQc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mGsEbQ8HehULE3ngQQ2weBijRGddrWyKrXw2LVg9JV3aUYWKwNDWoRgxmzzBDU6GaYoNDJdu4F3zenyEzt4vazo",
  "key1": "5mHuazUXjzHadtTituqXHLe9sK7k5dmqtMGG8vmPBPcXFFJrT1jntMYBexeSK8QF7qDftFYMtTf9cT6xwd3s7PDw",
  "key2": "4QseYR2CLCLinumRrVsQ3PtKQ14Xhh8Wmq8wz4tN7qcHHkgzc7WAYuSDz4NtHz1QeAjSKxEbYWvv51jXAUkzgejb",
  "key3": "5MtMubhrJvuatdrnYVrotkHDRD5qzeGaHQBcuTLaWN5woMboXeuAfXhHr6QGBFawobY8EPQhREoUn5yXMjCezATC",
  "key4": "4vFy342tXdonkXFH9Dqr3wofpAKJbnY4xgwPHZ2VCAmn7im6tyUhJBRwSeQ88P4gDvZ1N4VRt5jpQa6rizKtpDNn",
  "key5": "323phESdm6UHW5gz1G3nZPVzGqebJsgA5wMLkz3JqTu2A49ZizKcwPGL75G8ZaWZhGLdKVYgyYbKo3t7PWUcison",
  "key6": "4QJ4ErwTBY1hMKe9YuvAzd756XSY8nyeCdcqmZTfuoBrCesAKXb8ASoW1qJh96dU8E3vwNcANVjzAYUytAX6zqhW",
  "key7": "5ycGoLjWzK9tdkz4iTwh26sjB2FqUhAwxqzaGYLez5cw9aCX4nSjxBDPAYyvYcp74vgk3F3TbwGbqpDUScioUqee",
  "key8": "5oaE2a6G8vqSRCvLFvzDxv3tfzSy6W9MNirv2E6k4wsrNGrkThVor1wkV48pF3jnCZ2kK3Sc21qCR9NGxpSMVPa9",
  "key9": "5AMwJjLtx4ZB71W9VbVAZ4W6D6ns48J1ueVDVijeddkNCZfxCLJnNbWMmtverouRoPRh8NF33AuZKhfqHYAWdhBa",
  "key10": "2jRg6UkZZ6e5RyLvUXXZNCr6XDWGkQmsxeKt5r1iCrGWCrKjkxT8AcDh85zghzS3YPvvwPxjUAGCjMDDJJwG5BHp",
  "key11": "hPcBPUt2FGZE2gyCtqgzFaV8VtQDVUhFhwEUHjVtpk7Sovgk723nv6zbYnwaaANHZNGV41mHWcvbH2YxKZkN16M",
  "key12": "5gtJMAoKHJXwZ63XWEwgbC457NvPnf5gLUgCQwEyXTXA22peAwYK9VhF9d34gRFUi3dqtLyPze4gy8NZN6uMfZBk",
  "key13": "3LVfZTMPtijedgBEsgGQYmHyQn9Vh65676kCBg8tDUxM4cU37dy98aWjm6ar2Xxn8EPygvYVY4SKURDKQBA2n5hH",
  "key14": "5H5NE2X8mu3Hej5eCvAW8Ljc69edfNPZd7ErU39RyDomoCmRQjZ4kCe5BRgy2bbQRfseHEmUTJdu3toDPYe5gUaQ",
  "key15": "5Tjs5jzbVN1B8Uo5mW2tescPFurodLyQ3AHmjoQhFm9k9jE44Kf61LzPMTdtSzLx6cXC7mQ13WisNyv9k1ryfoHm",
  "key16": "4Qtd5mY5FcKDet45togbHogDvR6b5Lb56sBuNiTCdM1U1h9BaEfyz7NE7VgtKd8BFQNytUPqw5oZX7XGunJg7KeG",
  "key17": "4UGstEpxvbuWQNpiMW2wmDFZLHVd1BABQunMHmudBfyV97tSceThZavnKtFPRbAfumvqr5h6p3kAwJXexq3fRwuV",
  "key18": "4MUS46hjwxnw5mPGGxa25NJYRJuPU7kVEPikSA2DFMSCE75HcKbQsNDTEy7DrXduuWyVPo97b2tPhSAd2rnKFpLE",
  "key19": "m9u6ksdvo3hvt7FYk6G96f8bCnLbo7e5iXhCsyJeH9x6WhCqDfxoDSRGenZoCVw59Z1dAoiTF8VVhY93V31ELF6",
  "key20": "ibZyC87F11F9eCvnJATMwy8NJ3zHQb1NU4C2nsaNjMNXtr8xxFWvHe4UuszqwSgRnmrc4DSPtYvT49qUZa37HYa",
  "key21": "5a9xs8BE7KjJkLzeRGnESkpCeg6LwsH1e1ZSF8P14WBHTfixFJwrn6konVajGbqxK1GfBUyWP2vUBcTd5R4NdJd6",
  "key22": "WvVTGmdCGdkEN6kQUo9qBi2rU3isFgYFWVAX6fuawunE7onkAeMkzoyEsh1n4Cb8ssZcwUWVJdipLFETFP7exZt",
  "key23": "4ZBqMBHxjJmrcHVDB73gnaRDxSq1fWrS2Urwv3WkrVqfTH2YtmFikSwbWJMQnQsjZxyWo5BTvakbzDC2H1Pe7W5r",
  "key24": "K9keVWAufbQypTGbEYSXjzBxLKPReL9VhtTBbfS3zJqnuevNJwD7twrrXmMdGdwg5quCpC4iwghhvAAq77brjcz",
  "key25": "38p8WTMA2f9xQ4bMektJZM3M7dXf6SvWyyYT2vSUVidLp6A2gDV1JTqWAd31ZMFRt8V56qFbGLRiYbEJ472JNNuN",
  "key26": "2ttVhqTrdM7QoJ3tuj91bpTnQnxUi9v1QGbz5TTzgdhwGHcznKtLca2yU7prqLzGyr6S9nQhh981MDjdnTq5aep8",
  "key27": "457N4K7XMms9BfDeZqukUtnpKe9GaGQxKKXMtyP1TxLXxL1iwPwaqkiSDE4n2JNfampYtrPMVNGR78MM3uzyH5d8",
  "key28": "4y7AGzKqMQgovC1cV7fS6zH4ptmU4NQ4pKvSbfqbZ7DgbAjhJu81TK5H7vMbm9mmyTYuAyCyS5KtkMELg7URcTTa",
  "key29": "V7sd7TmtVCHWXENdSZaCUZ9JKVawR4hsbPfsFvsxsGXa5SEMPbioJCNJkYsTPV44ZVzebhd9fK1Bb5BUjzMphaj",
  "key30": "St8KbhCDBFLV6rvSqHResk6wxXMDTvYci26rTE83ygyzj3DhJSZsNNFxH5aDF2toyMt26qJs52NBffbjUmNerWV",
  "key31": "5KvJg1WgAmWeh2WdRoAMdp75iidCeVb8cBUyzHVpzcg59GNTD1JtYJa2AJeZ9xeahZrU4pbEmdJ9tZhPpwuosoB3",
  "key32": "3aFpem3TwyaPLx6J5vG7obZ3qKasVpHK7JUNAoxc3eKwE1L4aj3k6i54A76Vn4Ymv377SkhQvP1BduoMUXi8hxc1",
  "key33": "5U3Tdj2otJnfrefiKfNhtD4u1eWex3DA3fSRzddhD1cLLHiiRrdcAPFZbShKsaJbe7AykBhkPdsiUBw5nAZRHE4e",
  "key34": "5t3pvT3XXk2aGLeymVjcd3L1dYLSCSLxgmbjwNrzr4gMjDBcwCEfBHdqD5nwnCJwr7RUtj3bTZeZ4gwWbYmniCD1",
  "key35": "4jtjVNDVjPojXX8mKKFNRQHhmwi2cDVYuZ5xWUSjSu2wMT8XfPSyipMuaiGJa4yUpCu7JjPwyjnm8VarpAsPhL4U",
  "key36": "46PDWEenW6EqFC2Sssa62raNMte1dkDBBhEcwqjbFpAiLzaXEpJshF2aNDkpTjnpHU8fd89wwqQJqWJC9JSd3FQ9",
  "key37": "4qsuvzbpBvsjG81JNj9kcq19mG9mwAWhAHpj6hySMr1pkMUEg6mpBXhgkTNDpYpEVBwUrbnxh2Umf9UEoCkcNVJe",
  "key38": "3LrYSWWbGLmAEHPH5FWMQchMJaeqyEMhQ51oQTrgamcE6niBCM8BZwNPBdf9zu7HRtSGWsreqfJX2jZutf2tNC6c",
  "key39": "2bw7JhZV7bC1CLzkFxWHM7iF3HjuCrfw4z3Tak6Q2tGgzbmdpTQRwZq67dXfBvCcKF5wM8ftkhuFqdHiW1na4JMs",
  "key40": "371jCDjYs2tiCoCBrLLnUNLmBT8eeBRwDQiDHFcGNrzbjyq6hHt1CmbDwJ82ZMMTVJk3cjTbh4gXaqx1KRYAvumU"
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

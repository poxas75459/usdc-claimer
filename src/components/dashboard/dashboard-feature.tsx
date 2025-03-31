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
    "336J39D99vpxDCaZ1iDt1CGkALoRTjb3BhPAZ6AVBzGDBcTpzvAF2gavTmsuNCheaMNhK8iifiSXeDgZN74b1Hdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xWpktwQ2JGK8TMdfV7r6Tv7EDHqdtnCrfx1rUCenQxPypkNfv9a7vbwUfSZ3icuWGCZFQkoCJP7VLbFFo6BsXMW",
  "key1": "55x6XHjTaD6ggnrc9vwgrzUXxMeDYmhjTAftUiQGKuryyR4PEeQhzLENWMwZPE7w3uY4keUUkM2E3Aze8sUw3WgR",
  "key2": "3ZBWPo8CXfwfd4p4Dk7C52LWXSDPRGZD6Jgykk7sJuBnytfRVz7PdD6JxRfTUe8mivpL2Lb86Wjvt8Wnc3SfdKFv",
  "key3": "2MaZ5jigbjsj2mYoVxSyFd9npHka3fkB6BfeVHy6vKufAn6Sdvmk55Y6YjS9RAUL7vGDL4xzEQVaSeHusHYTFLQV",
  "key4": "4JvDvYM5Jm2PqpsP6aRDo7KEiTnzQroMwMULbv9r9ck9GSpWSiBZdKBKWSuwiDahT8vcrHff3MwqqDBgfizx69Dp",
  "key5": "4q6MWZNazToCmWBbjbFbeD1fYSuDjbLPRjck3eEZyVDWF1MZYKDRMVscs62PVZ4Ud4WHQPhXpf8QcYFmoVaS74Ri",
  "key6": "2nmrHT3zgEDcQASrBVe15J1fX9DitNabJafqcy12AXwXAJEpD4tJZk1ARauEcuwLQJUsFF4xmkAxrZZeTii121PU",
  "key7": "5EjdS7rextXRWpQ6gx3FDqux3w5XMvoPiKHBAg6E4bSvwjecJMFcfoh5wQYw5YgvRPuWugJTh3wdkjJAz32SK2T9",
  "key8": "5mvUDrwWBaR3g5PoNDQ7zCUUvg2xMHDRQLPxYAukcJQvuYtZjwZrnMqvfhCH4FkeKFkumVJC19FmxC8B28wkkUeB",
  "key9": "49Jp2xTAqR4XJmPEVrGbuG8KBu9oLq9xvKXUmPmrotLEFGL4bouXW99RfMGx7HB2Qo4dFWC4TUFaZ9JkF4TRwSFg",
  "key10": "TQiPVVHDkDXJZwMWg5YasMaQBpDULtuhP3U8mFjfHfBgFu5WxruEx1QMrCGchWCiCxJXQTi3ss7YBDAeegwtFnx",
  "key11": "56we8ZQPxy6pezsardCKzuYZM7m4kDJKMyJmnke81W8gU7ewK91c38UV2TE5vU6qoW596AmTmdDeS2iSiugt24kS",
  "key12": "2N6jUKR9mbD6p7s8WeQ4XopUi1MS4nFZNSoVx8nsCuK43jwu67ACwYxwoxrcmrYfWwLKUyChTQs9VA1SJnJdmpLf",
  "key13": "57U6FJfaZFWWVhv124Prop34zbbWLfNJwhUNVm4XtwAqYQRxvwu7seHoJ8AnUuJh9tr3NREzuguZujj4cPG8ekPf",
  "key14": "XAgMbwrutSBeHmwZshx2Uzsk4VnLgFKz6qzfJDoQEpPHTZckyzyD7WZPR6eFsVzs1La1wfrQH2X8ygZ7MAh4TRq",
  "key15": "2widZqkd9msnHGmMGGKRRYzYjX3WGJWARuX6FXSwhEyoTGy9BsdNEXFUxaEfVxEgF9GQDgZKxLxHSYQ2mAx9AGSJ",
  "key16": "3TffAqMVHQsHBE6fjVK7ht6gtQnCtNzW2YtwdQxwKKar3hM7hfuPu3mhWMrFHweQF5th1c5DbQYzG1wuFvES4xt6",
  "key17": "oKVuCExyzpLdPkmoit5XnfZyAPH1ufdcAkDSyWkfoXkHSzCPz2YSdu2GbWfo33FFoiMxHTKCrnBDFCpSeaY7o2n",
  "key18": "3QHe84TuedpsQxmSK8WYcTJ6v1hnmVzEY1q1BQbSzeozMtv29XsCT81iFUQa38CJXc8zzZ9WVWzipuJfUtDj1m2Z",
  "key19": "r966roWVJ7nuuBb29SvwuzrfYuJqTL4gGVuYMRfiLdrdrx6XasCxVbDQ2VAeYJtPerJ8GpQwJhBTjB3RW8DmhTN",
  "key20": "4oZUXxpqhoeqrjnz7fJAK32jFLP5SFmdWTZaLPx2tWGF8WZNW4Z9fT26dou6Hg1StURsSZvjtZbKMH9RB5uFZvTh",
  "key21": "275HwZQqxqgB7fZpemgPqLnhpPLK1gZsgsLxGyMLQs8TvUmokPJfoq3WmgFV6s98W2DQqs2BexXx2oK2SbefoRkS",
  "key22": "5tyPeyV9wEhUVTyg9sjy3HhNtVr5iPfTRR98wGUvB5unYnfWHwQyx6xHQmJxC35MU8qWhQcABTKUt3b8115c8g4H",
  "key23": "2iGnRasyKGMuzCfBTuwR3C5f7yNarFB3rKvUHrP6XS7wQ33iRTr1bSE8fkGyeJP1NkyXUHeKJmBVpzwbgpUbE7Ug",
  "key24": "3opDLueKMpk2v9EeaFAfEhQZRWBfaZRZJA7GUdS94eSCGHrHZ5zbUEeMvCJ3UNr7PqhvbqCxJ99SfDFDbEiyXp8B",
  "key25": "29BFXPT6sXfG3DB9HgwNEWCmNpGTf4gQSiZ3Z6V4fwfyW8kqabkKzXkGhzwb4r1KdxGgUDhVB3ham8SyxsaMeyC7"
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

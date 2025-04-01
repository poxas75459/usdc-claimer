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
    "2DiZWnPVjVDn42EPjopuYsXQFJcHDji2XGR73nYyM3tcY9epSekxJcSgUy2z987F2Qrg7LXHErLNhCcYGmFFfpGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65mWxin7NutYESXnd9TjbCUKjCgqFyrLtk72UG2YRE9gLdzMPGMXm2ntvTQuKv3JyhmktUBZhCotdMTE8iGgVDCV",
  "key1": "5XLai1MQ8LsDsBA4JsJA4s9des6C1Tq8frmo3sxTnueD9AoDSrw9Ho1vymJuAQpTzabJzjw3qTs7iHzpza5H61eU",
  "key2": "hx8LnkyazjCfRTfVaTciZUkn593dNe3enBbMhuZBLjwCQiiPgVDyqbbXqAeevLUBZNK2vUAtuhoSpiVxzib1TF3",
  "key3": "XRsU8Vc7WtLSrZbMjCjzncGLnJA9Jp93kjnRMYkVS38QNwjd2UHDPmHEDf94EnXB6VUfGnvisKLKk5dkjhdbXdb",
  "key4": "4yyYExbXKEmpKUF6cuQHL3hDTDw8Hf8nq1sKhPPVe4Ac4qEJvon8P8vEEekXDjKY9fvSfRsvXNiiCs8361GHN5Rv",
  "key5": "4RCUjPySXvZwMmtpRBunnkeSon1YPdd3BfrQmHGVZJeKe3w2azNwyZiudTPQJUscHbBe5nosQsYZrsXGd3JCH2FF",
  "key6": "3etNbk2SEJVVkGqVhiuZ1cuv4PeZj6SLNEjsEk3N15P4TQAjYJL68bfPtx6QNtKJ6r88sMUdVN8WRZkcnsDoFa6C",
  "key7": "3ELfDZ9RoCmxb4Ps21juwa5ev3HLsMcQeC3Pz3TrejfbuekVcjFsv9MXdu7YK2u5zzkMCVTXKPKh36ptY1yPxct7",
  "key8": "5SL2aswvqRRSPwrQHTrZaUSdmkXsExC6SwuvuYvgTVMARWEjydQm6aFigiYmiAcvE6iS1W9DArjXp1kiZbAdQeGp",
  "key9": "37YZjMgD2zKcrEhEsFScRApj5wVHMCsSdw5oysR1fJeCKsDywRJmnxHkP6CPrKHRjNNUcn5vJYj4KCBwSzYAzAUZ",
  "key10": "3g2rPcPnmJTHamYwNrfZoKbjct98mRumrfi6YCvjB9ugnZNkPiJEVGL6JkEPu3MfdPVWsfnxXDAp635vStVjdao1",
  "key11": "4tQfQig6LCCPz173R8SjKS6w2PEQAUP9iJAGNmyA4Nfj6TMVZvMf3eePgjXGJ5fLq9182eh1JZygFBPgnsGdH7jG",
  "key12": "3c8z7pDZa2cJuttUXpACDYzvTSRyT7yp3WAtrMHwokeQjygBUKq9Q2tVmLStob8NNvXzn2GMMuVFD75iUUsXZXvU",
  "key13": "4YJXzbUWmzgKmYJMgtdFKMh7W5SsQe72KTayLLCVN6LV6xEhngNDBqbG3Qa4PS9suMSeXEaH9XSj9sLjChxrqyJj",
  "key14": "2gdmfTCqKzcY6VFTjDwLmMrERxzrzc69jUTv2wEG4mfPi1NtjHWSfSVMFZx2GZ2DsozzysfgxJ6Xc1M3KqNPmqYX",
  "key15": "4Vtr8w7bVP3BmwuyfqVmPabv9LVrpDtwfzcKhH4XZjr9fVvDsuUPSBx38ubRAjHqSK6r6pMsnS3eZj5k13wM3Yb6",
  "key16": "2iNe2Gg5D1GkG1ihuVdsdap5dgkVTKn24UYxq48oH4wUgM9RiUndApxEXXZCyYKUHYkj7UA3ycTwCnbWS6kkt4PN",
  "key17": "53xcVLGPNF7sH8M3RuZhVU5Y5buu6pgkYPt95H9FhMYCoCq7PXXKG88PoQijW1F69ft7KLsCS38rgyQA83HyUEQT",
  "key18": "4RkUxGXdnUvHfJQnW2BWdZLJqSAwRZcUtMvaVvsdWZEeiJLtraWKnf5wuepAuEufeN7J7Azav5ZjWKZQmsF3dAAn",
  "key19": "sq1ESnsZuf857WnHQaGMg3ggk8xb6nZQWYWTJU1Eoms7FNZsSKVm4Z47RpyrSgvwZN6fFoxJtpDk3sVogTLqd4f",
  "key20": "4hYbHa81AYmQDBAJU3dJXMvVTG6BYLFXW7wAnCkDM3x7zeznqQ4nBzwJKr6q2pzGxqbedDtRG2KhJiZgJiVDnH3Q",
  "key21": "RJgKzurxX3uL4cMt6xWm4CfRWjxhuGfr4nWR1ksLaDQvyRg4VcpGShgpb9ahwUD78wi8WWW3GQuE6bgEftkTHjk",
  "key22": "2RvfAnHwygCBxzHfy5VfjTHgfLs1vTgnT7iS4LrCiYzUQLEMgTUouwAKUfSm4b41aYzbUVeLaM65XAxuzDvstzqF",
  "key23": "5wayjC5g9DaL5kVPqxyyvermjdD3vnF7hJdocLwKzfG6zhHLhn3u2giJwYHpfa3dMiSReuXcNLSRN85NPJH4rfNw",
  "key24": "4Z2GxiZuo2MiMV9gzxbZUgvVhCo1g29NDhVhQags3CqZ8f7jyccVurzyQgj74zEhjbJWg6jbsuPxySpxVeJQYuVR",
  "key25": "4iuMmKnNHPZC27LK3oUxMjArq8cdr7vyuWbdofZZnDdCDYK8PN4SdL4seKi13rXTGjR7c1A7kQ9n5QaCp6JkHDxz",
  "key26": "5kGSbifrDEK2uCbNTADX7FyPYviH1b1ctTejFRCHBat3cVeUWyWhzccgTJ5r4G6WYJaTsFnfXGtCcj3JhCWTed4j",
  "key27": "38QygCkV498JVCH5NgAKmkbBhmcYq4kXxZcvQfLqn2G8pcQqv6s432yrciEWZofrRpsT62qgph6qwRegG6CnzShi",
  "key28": "4XbqyvaoRrvYmHiFFvYSx9NJL7CABibETfRduQ5avyaCVSo6atYn7vFFrmdJ5j6wWzcDwiPoBDYdd4uDnqMjcvoT"
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

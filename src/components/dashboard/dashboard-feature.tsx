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
    "2frUmuNfoSVDoevyFQVEQnKxs833c46n1aEiKP49wRihh9KarBT6ZsAwCXuvu5x2tZyF6Tty52CD3WCk3oorLEFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rhbqW546HbmHXyqaeq8hHddGoJcXM7uxJVnDEhK1nzyWghCbk7Aw9mFhiSQh4uoouyN3RRc28uowLKScDyydGR",
  "key1": "39uidxQduPoG6B1PHzQUaGanp3WzGLzxwZUk3z4Qo52gTPJG7d3BR1U2EHDHgzz3kc5NH6enG8mLvc1tuo4VEpu",
  "key2": "4i7VKEt672fGTpcdq4mNcVWsGrxpWfKDJZM3AiaiUSxFjvV4vpv8NNVmB8bsXaxVPX5yUS7EtSBh1XQ8nXYS7paR",
  "key3": "4ajGqRqrKitUTmMytRHZeykH7fiEqKxLo3bF1CGF5USeVMC1nmCCbeNp8PHeGBKHeyok2PfRBkyRqigGncU6nhJB",
  "key4": "4iMo598G1Lk1pH7YBkos8VWXwd7v5G3kDzXnnLkKQMWfSLsZE1mqb8cumMStxuzNhiP3Tqfd4piFTHXDbwKsU8xo",
  "key5": "2R5hnupUKh5zzL9Cw7c48xhCkBe5DoNkC4ggecvB2SoMQyiTTRu63R4gtno698G3X2KnrxvXTLcwJL9F6xLjUTfc",
  "key6": "3LDzmVaoydaruo3dr7VHjzPfq85VEu8exYs5LziHo98yfxYe24JvTeRVL1T3Bo8q71og5xUGpTbMnHjPpBnCExXz",
  "key7": "2spSqWnUhG1PUR35VT7cqV9J721DeLTLQhz4adEAtikSYwaqkx1sLygE7jCfLszM6NkSAZR4SxHZdtXtuw8oJEZh",
  "key8": "44nsiYzYDKPamotZhqdNVMuJCX73HeMMbTkKRTN9EuuJJsAHBNYBzijJJ4zWc7vZHAdZj3u6YgCJRaaJdQPK8HDE",
  "key9": "2VUK5NJi1Za8nLo8PNAUndhn3G86YrVpEyhrQMG3a6R344aVajMjQDGnCiqhJur74rPq36VzVD7HXHdiaQEp3ALH",
  "key10": "4wzRxh47uJDoTPtPaKGrFrpdbiwdEpqVUXVWtG6cf1SVXtU3i9yiL1zwRH5vdKw2tWJ82Y8yBhQk6Whpxiv65vZw",
  "key11": "3dx4ZHFf5YrmzWNHyiuwD5VjFLmrMCiwMZrxKMs28vimPaiyq1E3ukaziDwr2w6q7DsiBpBfz78PystPURphGmxS",
  "key12": "5ob3UfYJGzqJTvhbkzeW3XNteyBxUtjjsBqCr4JFbmvj7cEmPBRj5pdyeGynaCYvkUeco4LcN6c5ApKYZrPJwx7",
  "key13": "5wDx86pQNwxdvKpdrmfkpBkahuLYzgnF62aKD47hTvnrq9gHCpfcoVbsk9EZQVEtRdzwGgfFsknCq1VoDJVyAagB",
  "key14": "m2VDSV1aADprAYfRCxVNbgLytjGErL6A4Hom3nQu126qW55zW3r4GNQb2tym4QFByHwwVSt7Er7TBynvmcbdufL",
  "key15": "6hDZcuSFZwc42iYKJ9hEKexijuzNENhwAizLt3M6QHG7Z8byvdAg7t9653o5WDiRMiZxGEVpqSLR2HgTNL1ojkk",
  "key16": "3Fb5aZfKGwgxGexXKWhup4Uqh9FqC2egGm35QmnFyVLb2pDn1JK5QWEKukwX6zEk7Jf1DUe73P7vWS2fLwaU8RAo",
  "key17": "4fGAtcJEjfYdaYWKbHdYeoVy2qHzftTMfjVVsEQxvdoo18B2piZvykW5HGdXKPiiY314WkuCG4ux4PPfuy8pa7JT",
  "key18": "3tFrc9Lgh3cKRK9VPEcAhFetb9RpTaShn7akbFVZB1CsJGXoamLYf1EQjxRQoR8JHFWKRu1aZduK2ew4QnEebPq5",
  "key19": "41jQCBS76PQKbjwa2t411t7EynRjU54bdvtBQYxEuhJCToeThq7a5JWTxwBGdSKGgJJX2ovWvDDp7jCwizn8nvC3",
  "key20": "4fdmhjJ3MPEoyLtcLG3Uw4hS4iZCPw9U5QzggeAgTRyEZpj9fVmJS8irRxvydRbVfhP9oFN5efdi7Dkw8eTbdZ7m",
  "key21": "ZdicySEWQVndNcDw7Ca5xDHNEfjmXFgkbG9vm13WhXdmhHmccEYYjWrvmNNhNeAPXfjf16j5AYRdX4LN7ApNWaE",
  "key22": "HzQnoQ8mjZQaXVtpKx3jPeW4eLgcBaU2PLzUNog83diqvb8ydg6Csx3y7SNrCfx6XRvCHHvaqk4aPkXW5HmczPo",
  "key23": "34fxtVyr16omcRct72Gw9KgyzU3RJksUNMbFk6GVTax6khnFRagsaRB1S5MiQ71WUoYs6qXo8ptVjZuhy2nZSsLH",
  "key24": "Yehb572srqqKxKivR64exPPEpmLHD2J1r8VHp5X86wTiHzDn5YLGNxfiaVgtDWNMrzbPx5o38tJHzixt4sSBxeN",
  "key25": "65QjQJpfBYDr2Ei28tYGUDnCPp9TXANgJCSYBCDUas5htXPPbGKzcMKyz2c1SCR7aUN1QzPHhwCHhDTuodiMJHkB",
  "key26": "2K3JwVwgdcE4gH7sgAN27UHEnAZUSnn4UPHTYsscbfZouwhzsHenaQZGNwR8d7nckLp8vt5J3eB2vuiC9LNimpP6"
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

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
    "ThwDmqLHXVTNvHNHPBPPixgBuHQaK3TSbvwujDcoryQ2DgerddJewjbk1XcjZoLox9BwzPRWju6mp92Hhb5UdMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b1EmMYEJGLXptAewwNfCB3csy54y6e9NW9AWhz7GdgCbNr8hRt1NJBqpHg1MgYBUjEjpfaSzsff64BVTQDwXedM",
  "key1": "bbqJxS1881uVh1UhPvyvhpuahPHEFDsxoU5Q2q7NpRrqi1BPa6TDw88BEtSTNL8rAvxNajB9D9y8NMZBsMA19Jr",
  "key2": "3qrsBTqgyr1ZzdJJkrfpcSNeVhJcBza1gdqWELau5esD4sAXqha8p9yYUbF6adDoS8Ub2pLKHjD39vfPEHJ9obXo",
  "key3": "595P9hbQ2bdFGr8VthXNspqPAek67CCspbiNkXRhRQMh563Vgm4Xho3ZpaGWfYYwDYBwpbDKe2e7Pe1cwmWHbS5z",
  "key4": "5nQDtm3QqRNQE2k6TrB4H2omV2Vhqhc8pbrdoKoxyEocv2wKkiVWHbBtayJVTQsddNw1TKefSufeKzV2FndXdyjo",
  "key5": "2MtsPUxducdVKPV9x5LFFYx3UEQWeFCo35dymBzMqBmzSu8AV1M1iqAnL3or6s2YAZKDPPKySmLquADrkzzoPBeA",
  "key6": "4D69qK35eGs6z9ia9xiTZbm8asBEUAN1vAKsSonpNSviD9eK7nctW8jJ5s1xgw1R1JKEZBy5tdCqHCDYReXsCtF4",
  "key7": "2KcPuoGEmYS9LsoWNR4mnofLdiKW86x2NTSLnqhVbtkBggYugCx958p3RK4Cpwsz4HveCwDCPsfAnU1PaqWBXepX",
  "key8": "63S84c17FmX39A2XTyHkdm5oVocBnn1vC1azDwo7RumkLcmpw94nxrHBiNfkLvwFeyWRUYxUTfTTVW9dsz3T36jM",
  "key9": "2LuQzBeC9z29aUW1AMAQwYcnWse1QLjfpprWeygGx18rMEFWHTY7R47JBue6s7ymNqcno9pY1jWhKn76gKXTmC13",
  "key10": "5dGw3R9gtUpEGaS1KxRRbTtShHo4G8YHHQBRt9HyHnqwtKAypRFhVs3DhjACTrZ3SMcqH1hWfKGLA5nvd72NizcT",
  "key11": "594RwSoEVFnCNLLzazkZFVN4FHw7uzHAE45mYmRADNdd62SytPMBa6ZfzCCm6RjPDYGeo1v66WkueSu658rcRXPY",
  "key12": "5UpqyHBE53HZSfmGGGXFGKQt6Uwrs37PfMcVnq466o5Qh3mwhstaEYYF5BJqyXjy7dSmtJYgdW5LmN1NjAwgCrSn",
  "key13": "5tUpmfRcc5ciy7BgJiicv6asnQ4to37SpLu7mamGhpJHom6qa9YtdjvTo8v41VsAqp1qpfPXpxJNuX6USAfHP1mb",
  "key14": "MQMNgDx9CRHpLqDLrqPw6XxfABTWSdQhQkCnaQKSgptENWLhEetCwFWhKwX8YnkEurMKFWkhGjyBJ5YoTd43c6v",
  "key15": "2qWVYrkMabSN73PdvtzWm5ErpFUDrmHXhAB5u3iwgDcTA5yjbjiXeGrp7DX5GePyGvxK22Mqv3YFSD83efRWuRFD",
  "key16": "5Md9u3tZ9bLymzDXNDDH5cDrB2CmxBJPRuLDAp6FSf8maGhgj7dqDK6aMbWEKD16ka3N7dNcG2r2YfjQSSqZvg3S",
  "key17": "3B8zbJCjH5ehX3UEn2qr8wrtLvPVUoX4cG5uyeaTj2TsFUcScEnyUtSxdwUZLBRW82wpvr2Ccb7ETZcWQfBf5iSq",
  "key18": "4q4fSnxb3ZQ15Hs42JQ8UiukBZFuNUxpveSDGGNRPxwtY8ycXwkB2FE1LcJcAVsc4rLfTVbdq1Wnc7ZTJkLiY2ao",
  "key19": "2yiZRhQsZ13sw5jZdXGqopSS1YszK8ogVDwdLdCYVWZib4ZSqSP3saHpKNQNGUihdwzpsYRfTyrM1jAjFNGdxPgY",
  "key20": "59YvjeRykro1nHD97DfT4EN5Rc1u7dKemfV1NQJ7pdW1eRdSH93z2fCTNDXDWkWrj7RG1xfBWZWVmWWwiQRKpqVM",
  "key21": "4NtRTTkZCabvtRJgGksDtdR9WHQ1RT16TbtvkPYVUA4zmhWP23ARakdjXN8pj9zrpQM4EFRfTo5LkEUBfYshXNAt",
  "key22": "2mBjPEtEAD2EBQDYt8X6PWB3epxZwy4D11JjLUWXHoNwDi5WQX1BY569g1eKi6MVhyM2jCFGXQNLJz6PfSwrnbC6",
  "key23": "2zdWBypH44XYsvf9BNM7Xpz5Wp6mK1gZPDJenCzSpQYXBrQwL4MNi8LdyEENmMnY9c3skh9ubwRBMxZKnSrkCaS",
  "key24": "NUSDutGswrVAddVaMj61r41mXGVKC1Bzrsf1iSzmhS37C2dUq87eERdsxfbM8rUTGFE1LGeCsQqsdkye6penA3S",
  "key25": "5NVVDbTdPqpE6sdeZh9VTNZDXUDwQy63e8jGychBThaaF9G26eRVj8cK9a4T9cceeFGfbKyMyrvecW1CHZPfvHio",
  "key26": "2RQ7UCZU4z76K9oGsm4Cbo1VL3W8ajyiyy8HjQqZvqerVzGxMRuUjp6aNPrf8K9CaMAebUb79QVQnQ4dUWGSeLY2"
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

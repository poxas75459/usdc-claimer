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
    "2Wk1N478Bco3R8Kc8i9VwcXK5jLP2vx5LNiCD2WQUMGSN3L7i5QgbPLFofons7LKJGoRyvnEHsFrjdmWTNsgb9a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8xitm7is8gVQtm59oLUx7FexnkkruqzasQnwSU4WQdAjh9edFJ7RJXe8qU3pntpvE2xMtTnSCemKHPwi6Brzt6t",
  "key1": "2mpXEa3fEooThYxUtQGxKCiR5gcc5f2omaM3cSNfsLbyeR9AggLfe6xsCBaYe5dFtmiVpxEBMofZgYkLty7rS1nc",
  "key2": "46QMcVPg3irxhox9iPP9tV57YsxTDLgcBg2hKobTdfmJ2CYEfT1xbkaemgHpGFUJHpxKahcZzdXGXmDWA7TtXQxW",
  "key3": "3eYk5q8c44dBwHkotmKNerwPFBY7AyPc4KquEPsDEm3kK8H2DPiPctP2VBcPKutbWs6pyNRSsT75Xxd5NsYrqcwa",
  "key4": "3KutkbjwspcbiVrta42PbALkiPvfuQg8eDkdCo9ou8K7jSfuBCT5c6abFBSQgk1hhpHrHQ9VeJqXykJRVJ78AnpL",
  "key5": "4rFAsjyvYPr1UwjuMpxCzx1Q2DWpJ6w8zVJLd6VpuLGTdvedic6wA1epvEYH7CxRmEwUDiFfuPZ9SkypLt7MPrAA",
  "key6": "3bF5HHrn3VpgZ1HFsoUsKizsfQV4TFy3oAYdPqFssGDfcGYH36KrDcuQ3jWc3MZeuCszfFFMHHqiaWazAZMMxu6U",
  "key7": "2s5mxS6XBdGS7zDm6V86VWqogrpVDH4Ask2n2AkkANdRwJkNKTatKhGzBW2hmk8nQgU3AwTzm9C1fRuKasbbo4fP",
  "key8": "2vKA87zNmKpsj3SwAZkP8JxeKZV7vBjxFhTGPFDme8kR1AvizDkrEgTwJf5hLrKtnW3Qx9KsRqPEfB8ohMi3otFZ",
  "key9": "2H4GtAqYRzY6JAhyDph8ibiu98NXV2SifQRbKXkJaynhLsVGkQswtuNMVpDBxSjAnBWB7NPuv9xV7NHc7Bfg9RSS",
  "key10": "L6fVeu1b5seqZcc8iBUfUKhfPpUHozVuUJ3BQB6Tu11o6ACjxxhQxuF9VeeWLUquUH6dT2FbiHvdF7Wv1MpapmG",
  "key11": "Z2FG3rE597gyeYvbjeasSg1TXyC4y9ACD48UUvRqTwRzkQNbTp3U2u3tYdZZo242DN68qVAqHZeTFAaMMWy4hCn",
  "key12": "3XxkAKJbvozhA3TuammGSQqiVQkaXHNZiNSr88S3rC8SkrxANb5JAQsS2Rx7jVxxijNDb3Et2F1mDvyeYxG4dawU",
  "key13": "2NuJNC3cCaf9KMsVa5UMnybkZ71eqNKF4X18shedxw3vn7GbwNCcZ87rXzFodXepk6hUzwy1LHXjysY82iryQeiC",
  "key14": "3qq2EU66Jt9oXSDbc3CYFKK6MMmR44PQhTGFshnzcgcWg3XquVcdWTWHCmJuFoGvwM1LLxFBtvrC4XfwzTHPYys1",
  "key15": "4ZSmWzKYEwNrKFanWA1uTrwEPQosxrtUVbBXCUE9YzLu6Wfp9NjWmVa8NZd1XUEhMYXzCYwe4eRE26ri8vE3tRpj",
  "key16": "5uwq56JBxwERjUSuun2oJ9T1qunGH5nTN96P5w9fBst1dbView8fTGXgxfBgi23ib6VQfxAmZTSd1JVfuou9n7vj",
  "key17": "3VwfJaSDny3GS1xr4Fzara4Sy1yknrvqkjcVb5Bdix3o1Bs4u5DWTkgm8LJUarN2aYUZZdT1kqMU3yKJVDKoaK3W",
  "key18": "3vErzdm5vKf2b8xEFebq7sDKTrv3rQz5SDnJAUbSm7n1ABmgCLrLQZebqmRPsfgDFTJAm7yRXNnPWuRiTSx5f1yS",
  "key19": "kUNScJSe8dUj67AmYpoiLwxC2qyYCkUPA3zH1tcAeQqFWz88JrWP1MkuKi1Qx65ZtL6wtJ9vq6131WHyScg9iTU",
  "key20": "2oMxEon15mEjBjUHV1eD6ZJjkGXfop5Thnetn8KxpLLxngDCcuNtdsFub2n7KTY5vJ984MFtM5hW3Ze4mpcUSoSV",
  "key21": "MnejsLVhkc7gNtkU3einjLJ6HS4ddxn3fTLV8ZNqryua21SQZ3VbZFGjBEKaacc1hHtB6XgnbwXwwrUsNjfR5tM",
  "key22": "3tdpHyQUwPTTMa4VBgeyftc8VJMpo7NXmiMd4UBs7UkTE3cwfe5aDpSFTySLrNCzz3p2TpaY45S12jsAPNDzmnXw",
  "key23": "4oLGYtbLdcnyM2FMe68ak1SsBV8fNwYYdEp1zB4qCrycZCXpR9nh6Lvuqn4cvshS3BvUBgubXXpFzYyzgRConBwY",
  "key24": "3QYjzaqNdZFJ5PjgqCpV6s9qUZ1NSc48rwkCyQagYVkWvs4TBpPrnz7zia96d9BgCzLbv2srar6K6bFuhthZJXsV",
  "key25": "3aZ4LMjLoQkxq7k6c3XcPohphFVJf6jUrFLFkYKsD5UL7MbRfN5ZmzmUnYxJRuevzUiv3f8W5woBx4xe3dTDHQuQ",
  "key26": "3JAkiebo5BMNbSsoy9HmnXnNJQas3pmVkJ7Coe6DqgwEdsbV3PRVnpBSHFfLA7r6z2DhArTdLJPYNPy15wLgRfKm",
  "key27": "5eQbs7wZCJiXFB7F8xHT5rmRNibdVhynsuHPywqtzdthhFFf1FgWXMSiM6ALuT6uknyK92Wyy6orfmQu1PdoXepb",
  "key28": "3KnCeFYESr9xT9k24eboVDxxyWYJobuzns8E3z68wVyz8WSC96D8pxKYjNcBpF1wxBYrsEYjzt4GgugcwuYxUbP8",
  "key29": "cgqPvKfXPCkLG8Vsa3PeZ6r9VNWtJhYF99RRpHPKs4ou2p1E1ERAZCjmkLRy24A1KiTuTbTMXXDjW6eUEYwjYLm",
  "key30": "4hDRwHsZRhBhFXivJ4TGXmaLXnVxhVkHGtTuKj8xtX4VLW657LSsVSSggPLbrwcaZu7YyYxyq3TEcowaiG6XUP8X",
  "key31": "5tsMH1TCv6t6bqjSofdi4Xm6pn8SFmakEqSzChPjFNij5gAVxRiuXTbbPPp2kvq976qLvb46aj9T5yfwEn7KVR5",
  "key32": "4EJuZD1YwhHiPykoxdQG9L6jdaz995CHSKTXiE3VLs9b4LL3HjQeMmcPembp9H1K4X5jXvF3qhQmjBw7JwtLo1tn",
  "key33": "2tdZ8rfWR2GmMyBZQ8FdjaKTT5fCp183GTA8s9ZXxPd1L13HXrGLrFJA8B3TMcT9bGP1mNNFVRqN8fenqTVJ9wiP",
  "key34": "3uwfTvagDcPhf73bAVpjYaUGqsyq2ojdH9isSUG8XbYMhE7WBuvpEakL3TtDngTgg7zhQc341qtBuKnn5LzSCeeM",
  "key35": "4wbvaN3Anfyr2KzhiioWsQEnfDot7WJae9XwyFubvQQiGgNVk4qTxq6FgKkTShgKzNJkvUVJYqv3yiXjB7MSGHBB",
  "key36": "41ArajrMuzPp2uvaxcS9v7KQ1LaZxiYcAs2dBc3Bbr8PM17AkbwLCjxfgDboTvKMEY3mTWPdPw8WyQcNYVw78ns9",
  "key37": "35SCcRGtmMdzswLEq3BLwpPTFQf3YTy39E7shVK4JQfN974f8E8T8wBskojRVUnRbxL4hTwwsYHRoNSyuPNm4yjE",
  "key38": "2C54mJcVttw35Bxx6SbvL2xDfgSXvdJeDxsSDAfFvUDsyWgXmmNHHTjd4aj36hu1Jdv5nRP1o9E2MP5X1jkmytuF",
  "key39": "5WuBRteUj3D22zD7cztH8ENCjtyS1JXckGTwBz1SGMa8KdzeDWSPrtuLE8G4EsHWjpnPqYnS5EeG6Pf2K9q2b4s5",
  "key40": "5z5iSZxn5bzrqnLQsFdcA4teEoysCT59aJYgDeBswMG7n9j3wbirxnmew9uhVe9jQAsBxJ7T6Jp6QYg1E9ioJdHL",
  "key41": "3ApVjyadggiNKG3P6RUC2FadeXU2pAecYttiP4dLLsYcFepQS6yvFtdRGguDagc4haJGyrhUt1mRobESCGEgpBey",
  "key42": "2ZzNu3rnET9KrBzNeUE4JBeXjme5j1Je45XS8X4q8yUR76fRsZthap3EDNwEkzy74a1TbCX4ZuW56WgzB7Z5ySqi",
  "key43": "39pauDUpXQiZb2ShUmpcDNj8vJkFCwecoo6kLdcNxfAx43j9FGD6BdXB337y4zMP8ERDsZfXEkREEhvp4Cagr3PC"
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

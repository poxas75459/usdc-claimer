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
    "TQYyvgd7YYxGLwX6taMwNFozoE3KnkDDYWEHTD6otxXgqquDmdKvbdp7hQncjwL6aQYJpqiFUsF9ma9QcDnKcyb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63AH9criFX8WhbEAYQT89bjj5Ks9xGMzrVqDknH35iEM86qvRm4WXqSF9LdqLy6GCQvVKcushXKzb9fBxvrgQzou",
  "key1": "rdvYijRSNuyCvFFPGk2cVGWzGCRAxsvFyN4Dr4xxw1czDS9e4fcr2QCio4PPkUF8pT7tBQzeFWndAaYuFtuUXf9",
  "key2": "3LQ7tAqs9eKtGrexR1KNca2e9JawjcEAuKW1Np97sTZBbsBa41xZ9mdEFNudjWLWGYAUyviX2urjPxfyNb2bnc3h",
  "key3": "4Jy7E3XqpxHpycExqZ8gAsAiCs7Tshnwm2MJGaLbSeS6Dgi8MrEeruuXFSLNuGmDcajnXL5PPnBcbXwVBsCbKPsF",
  "key4": "5Fut3vD14dG3CKFgnaeCwgqSVFyiGvpJc6M4TRt8xSRKQZEYaTdrHhqhVsN2PPQD6B3pFQQQCi7j3mfV8xtAGudx",
  "key5": "4LbwE2a3hrxnbGN6Ycw9DfguDN3tDt2RacpkRLGxF6XpbqPgPYMN2wxRz1AtrH2omRSA537Cqg9VHRZ89ggMtQsr",
  "key6": "4q3seaShZzT14ty6HvVUxKH48EcMfrefR1ce4S8F9cBVAVfjepUaGfmeypEsw5EZD7HdeGmcCRZ6C74pUerHDJKP",
  "key7": "4XbG4L26NEw1pDoVqerzxWmZXNMEqJ6cAJn1myxRopUfw9VmSx183HGX8MZhEtmY5jGjy3YW46uodPBnofrUogiH",
  "key8": "2h6QGbZnW3uVes7SjSgxCXXka5q3eF6jMC13QVbEAyA1hzHdVdqTgdQX39ctZobXkVFSHJGj3WkUaxjQ88BDyosC",
  "key9": "5GrPjmhEDqPWtYu8rAPbAVUTooNVySD2sy1uoyWGP9mN5yMwD3vQxTW3hF64KUBXgGunneubr6NAEhvWCJdLDHqv",
  "key10": "5WMYqwpxQ7q6dh6mCvicXUXimNAxjXVAXKGiondfR5AZxXChpm73ykEH9NQWRtnxC88AEEjXJvYKRs1SFUqh3zqk",
  "key11": "3QnGQMFYFUp9mywmNGpDjUCDfnUm1uaUCkzJA28wJbGS1YzgtZDWR9X6TJ5dUaoLpiYiyh1yo2MiMNBU9Y3PZqYV",
  "key12": "2o7SWGtnsnv6WcyRtSQ1etdasAkpZURzL1rYuyU1pZ3zT1Fx4ALL4SX5EaAc3WLDcucuYK2xq3ZKEZC8vSnRWGmj",
  "key13": "2cgNGPsiuMKF4QMDRy4SM9xAJtjcUBfvW7fPqY9UvTcSGmmsgvs4BnYiTrqcgZVJiuXFTSmu4scGkXyJv28EgR9i",
  "key14": "5Kq7V1Kx8FGpghrxPgGnkhc2w9AmLxRKg71ubKVLVFKsJwa11TMB79mDFhQTC8iLLzRLgKSiDbBWeWPNe6DiBVu9",
  "key15": "641VHraq31e4BAvyRhvk9ZUooZuN4qoSnE7ofHb2wriNeXSDc1K1b7VTpJ2NcHXDPKXWnH1bXiZT7ek52sVptB72",
  "key16": "5y5Kik3hNHoBEdgm5b8hmkzihGYyrBQfuH1oaFWLKvKU5reg6YHRxepxNFg6TdRUp27dAAPdSvRkbsb3mHCtPPhz",
  "key17": "434CubL6KtcT4LiKtXHCPveoABUcwBb4N9u7G77CtHNH8grrdzjBrwQPUg4VbuGntahZCxTobmaPi1XBtJ5SANdU",
  "key18": "2UTDDW86Jmz9T1ed6oMPXF2qxSqiuPTCjB31RLexgqZRuStUG3T4G1dfpbEh6vzHHX5twBEheSuBHZhtazZRjavb",
  "key19": "HZXbZbRmgprT19MzTrE9wVKRE35CCcH88144eWDWFbcRZZHqsXb25vPW74gPANPjYNFcuH7mrxvC29x2KqxfmZW",
  "key20": "3viqcvx6GZFRET261knZbjEmjkg9Enh2xv5ywgWeZH2t8fHs3LkAUYtyxJJcBSgmoAXa9zncRutW7acNpKUnSdpw",
  "key21": "3vew4GiUXEqFyoPJm2kaFvPydcQmahrbh3q7HLZJ7s9EbLj1zBMcuXDZAKmFehKEZxGXQu2GRbFD6xCiLBvhfuBJ",
  "key22": "3QbKyi7iD1pnZJjUJmNxczJcoyKBpCiXrfyCsTE2fMYFocUzSGkWCVCEK1fzMotBvKNqGBu9zc8hSp39EozcCGGo",
  "key23": "2Y93BSv7b2jqLmE9u1pavR1r1Yz9VteVbxdLyrNKCjuFssJ1ENpEnQ3uELaLR53R8CCrEAR2opBwedAm3NT8En2Q",
  "key24": "U8i1HbzriKBkK4xNW2qHQ17GYGhPBVo12WpXWkVVC2q97bJ7TJxJvsa26dQC9dPFzEDzhqaPXY7C9ybbHukrbTM",
  "key25": "hJLo95frm8c3kASyERDYw4xgMcggGo3vB5mUR36i9Fv5m1DfRe6xcs1LpSpy7MJdHTAGuRApGYGScrGJ1qpcFDc",
  "key26": "63CGQafYnqWMQgBtCzsef86zTdHqaf7eAm7bALBLRKB23pFhGiG9ABnyi8p45zHrpGKe72mUz1anozmp4wdojY9P",
  "key27": "2VbTU3d1J8tKroMxHo1nB4aWdR8UAWmPdxRJZ3tu3drPrX7Ckow755tTrwpFHyCvmHbLw8C2CSjgdHS3EDSQzu1H",
  "key28": "3qdsKx28UbSVeg5FRcqZ9fTtf9ckBqqwogXRv8gibvfqEnSiCcJ35pnVdfkPJbeGVxtt9h2pUXxDaiogdVFsa51r",
  "key29": "3CRDgeLyv2DzHKoib7XmUKvo94joY8aS42kAgGzF992qeMtE3Q41zujX4pKUoeMVVKXAAiCUSjYqakEGNZcEHNYF",
  "key30": "2yUQBYnmo8mJRaLsNtpwQyTJRQFEpaAxTDRRjwTDkX1jiR2wthRpqsBTKMooWo2T2mnNDnDrEDjf1mJsXXNAm81H",
  "key31": "5iGG5nNjeZXAfQGjaRpDvBGteQCNUsjMbcKXzoff42KwxQr6rV7NZLs2dSmWmJ9U9HNvgApPELPXUT2zzL6wtisd",
  "key32": "FkYk9M9y7xJAzWzi4bqTH4M3KpahwwVYwVQ2Escvuv1qKYetHPrSJwFtFk4DzwTu4vAg5uupw4knbBRhrtTZtQi",
  "key33": "59en1wgwp61nyys3KJonPnyWs2DHPg5CAzxC2118kNMB3Q3ridAZ72255wrhJFkMxiHLiodVoHDvFwXzomCqQ5xW",
  "key34": "2jWRtd7XskpDNLDTAttPjr9AvctH2ZYWVTvdJh4n37M5e6hBi1G7MiLXQUKc8CwU8UbSvRaACK1suetBJMsyAfn3",
  "key35": "5pEYKK6McF7Mhvbofm4gK5qt1NbHRmxJi1pXH56SN5Ad7fACPw7arut62eqgQQGyhdB225jdzhtwi1whWgwLRYMh",
  "key36": "4SPeyaFgpaJM7Xwa9FSwAHKwvnVhos1BjjDn6nsx6GoVh9wE8wEJpEEYECc498bFURMBpXvYjdEVpkdoLUgpBBYD",
  "key37": "3q1g61j3hNhTLNvyr8yiR3LQc6NvNaL5qQM28hVesdbbLXvqqauXTvHhDSECh5fc5k6bmk2Kwsg8zQUdbMRfTmP8",
  "key38": "27z3ersRdcz1akjbzoAWo2JNgYG19nSDFtWWGTWvtiR3NsR7g8Ue55UfYDmxZBf94XG4Tt6pENQZ97rbo8fEXHvh",
  "key39": "BFF4DwPcfXv6VFbgiZpAHEj473ATDU88ksXDy5yh3LqkaATTSBzKyRz8ms2GY8GsusB11Fmg4zTbVTnztPkLqkK",
  "key40": "64bzeyZhMQrkwaJBYeMDs8BBQyjqCcU6dywAgy9vGrwpy1YPDcGwQgYXqXY49coGitUoQ7ixNF98rSKFuDATGP7i",
  "key41": "5V4iTv8ygKdpRGMuLUndohbcPqPPU7n6NFXT4zsuNWD8niRA6qZMKQa9ss17kF97PqHkQYJwZWuwRefJYobTUUa5",
  "key42": "3hZFAcBYwgeHqeV8zuzLtfbSQ16Av7XHPXaFtPJAN9Rmb3Q7TVuDSeM94QftoKFKwdY79uHeBJGLqoUFMiHSe51v",
  "key43": "5WeEK6rTWqMAYgW26xwDnDm3VW8HjTTJ5yUtgtD6V1thyurqjeivfLxYuuCg2b4LaeNwaPBEvJvFSoSPakWkW9nf"
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

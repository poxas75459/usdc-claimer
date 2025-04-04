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
    "3KqktUvW44ebpmEnAX7G7a571F7aDbidjWPF1iUMmVXtRAVXXGV2j3aG8ogMgpw9Ur3enML7nixDAhYnKuYfgsws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mFw5Lnmj8cVqe3i6ukYUh331QozkkPUd4KQfDTK9YS4xQUL7ph1X2kywbxVavqTYTRQt18CFcViUfQ6GCcwd1vr",
  "key1": "5qPSvVYKCCPSJYeSbmUHDPpqFDjDKR6ksNQ48GnbJiPCMpQtxdAeKnEdY7p85fn88VbRJehxZRDZDRCzXhyXzohN",
  "key2": "2RKG3g82mqUif3WtcZCyhnphb5WSmC5voLnsCdFLLghFmVtDN4v2sYd9XT8C3hX9x1ffxd7KDEdisfgqNWb28HPc",
  "key3": "zc35DMKQ5pNbt8xCaHoanpQaMfGfB4kNG7YpTeKQb2h8gkgVwD6qs6r2KpF3xVg5xZNpjh3D78g1M5jBSYfZwci",
  "key4": "3iPPXLzgE7fbGhhFHgJer2AFEUcqcGJEof7UJhdHjqf3TGWXAiAoyyvSkgVA2XcrhXkMq7NFxu9M6Sq8GWTyfdX3",
  "key5": "411cgtHZ17UgmjJaYVmcb1JvJ6yP9hcireKpiH8nq8mdpL74HhZyyq7mXBjDhhMirWbD8ehSdCCRNMFnGEXsrBWA",
  "key6": "xgjMjVxJtWg2bd7s81irgvPXcKpvfW2f8XmkCrYqmWDGdoppupUfwiFdRhwkDb2BJoPN84UYQKcXhHyWESnnYLy",
  "key7": "3C1tBitLuHq1sLGq1kPBm1fHuFrjiS26NHUsGBvBG5iV8JKZjDjGVAnQqhLrqX95XT6DD7ZS8sHqmncaDdKsg2Sn",
  "key8": "5GZJ58mnL1sArPCjeH8fBXZeRqBcnKgiy5Bwf64kL8DQqMP3LbBEQexkLJsqAyBpeWbwdTUzrSPv4utwdBg7oFFR",
  "key9": "5Y2EtFE8aE1xDqNepywrQtGqBy2mWJZTngQJffhfJnfVveAn22kszUNUaxWc2aEXJPfP8sasBG4zjUdTD9NuazyF",
  "key10": "3dAsfXqi3h4yQZXugNif5r8xeiJECMN96x7qMUT3XPTAyXbBife3uRWmnvEJKuK7GJRpjsZXMv2tt4x5wxvKuBCJ",
  "key11": "2PWfeuGnPAhsbTUQxFnBGs81WwcMzvvDcdhzUi47EKsQBDVoNeTRu7JFcNNGMfgs4SBkUe3Q3oqcEUuhsGDojfsE",
  "key12": "4GZjNUFs8aAmXzKsj9N5NZCuwoVHEFo2S4SkZ6Tvz7C779V7FkzZSEGoxMJ2x6wLbNj9C3jGyYQcfgyT1ZC2YDMx",
  "key13": "8mFghuHYSduYW5Nw5viRZvff8UxPoy5f1Lbo6f9rhCaQgFzMH7VarAtzr5yQKfs59B2QZntQiBrY6NuMyHJgoTr",
  "key14": "4UDw7QJK3yqtzEc79zw34Riej3BiJoydkjJHrELkSYnwTCMaQc79nS214zGX9Su2hiuVPijEMkq3sPiX1Hc25CCM",
  "key15": "4TMPzpTopQXHoZkHF7gvyjowqN6dKC8m56ztJQp3As1goMoLeFL3pwA4v3Q8UiTVtHv2VWsb1VH3vRwXBc6FvMVK",
  "key16": "PBDgFpCeToonJe4wN497cWVLWfxQtjvpeYtauBZ5CmtFtivfVU6URdb1jMaAM7pi7gxRaxZdGB7bhX4A3AWj8Wh",
  "key17": "5QhTLihbnNVN5FH154V6F8cYnTw2UBkGzXrcoUQHR12DFJ6N2krkX9J2FkDuMFDU8yyC19W2x8fF8PvRhW19u2zL",
  "key18": "2q437eHfj9YFf3k22sakaKf1oMyeRiKnd9rY9sF7njx85P9uiLY5h14uKFR9C887uwZpnGBQiRj9zJuE6Cbho7gR",
  "key19": "53tygDgSyjaBmH2HnxdcGpFsUDi5RZGzLLcyzTrfjDfK3Zvkc7kDY152KmuKpSpDjCWRrAN6GJmdjyUusXaHSvyP",
  "key20": "nXTHoDik4Cep4J9Bu2YuQrY9TAKdExfwtRzT6A4Kp1GaXMjG1j66eHhMvvzc2sFaxf7XddYfuWsGrhrjTfp1ruJ",
  "key21": "4RRbXHuj9vEPwXHqYz2bfbmi5tHwgiCSHUKiQhhyWRF3mk5ZD19sjFyCNeofAR211a61au99WUBsxVrRTFwdP7VW",
  "key22": "2fiGsgjJCKqM43dtMfgi2za76sP2K9dx6M9qpEgdDtWqSFSFqnTWasq7hmJpAypNQM2UJRhayLqM2YjiD7PSFRhw",
  "key23": "QGUJzSV3As1o21C2oBviVencEcmrncdKc3xLJ9UaWdwEifvydNSRfCr9D6WBjFVSN8HhTft5BJY7oMr6aEDCg2T",
  "key24": "4kTu15WXrQWMEYZX9kfs4E7WTJDsG7pvHd7WkXAsJj4hebVweVnz3sS9GtLS41aHdzf9qWx5Hkfi9WHxR2xRP1Ah",
  "key25": "5Au6g7UgWokvWuzJT6zxKmwpVSfb1ttKG1bNyeNQKP9SkSYJf7Mr4N1i4BDztFcZEuuyMHSZXiNZ3ykr4S1NddYV",
  "key26": "3kUJfzHCZufsocW9qkhazfUPWmJkeVoVojHbqqfUY95A8tibGkfU1inQqq47Co6bacnRhxAfvDYjRwYhTw1BsrqX",
  "key27": "4sT9bG3ovkg6jZfSb7A7RV8ostJjSPk5CaVcFe7pBtafqz5BfLwJL6P69M5chqrZQLHs7uXgppUoTYdPmA8UHffG",
  "key28": "Yn1EcUz3CeLpfe3eaxWqgLXTpCmj5gQG9peWudWAmTH1JfDduxEp7qYcb6UZVis3pbpCVyC1ZdmvpFS3bcecXgo",
  "key29": "5VCWkAfSqhbn4iTGZpCrCkFVeZsDUFo3NSbFTdFFZTjY1HpPf7BFqMTyKDNZwxF7wVDHkmverAKJ6PCUC9p2Ebbf",
  "key30": "62zTUZ5MDPpvFxxANxnKo77h3KTiFLc6Hvc9mb3djNW9vutkePT5g47n7yh1msPHszkK8hpe2km5Rk8WsxeASmA7",
  "key31": "3TA2M5AkumE9tdpHuQ5eGskjBakuc3yfLCruP8nyZMZtpGmk3rYXsbsbF7SkkhZmgVX592hm5u81eb3ETkySm8Dj",
  "key32": "K7iKDmUeMBXNuBnYYFsWnDyKgCVhbMJNtBqWDjvU3XA4zzoSzXprAaKMKZSTey2Kc1wCrtSKWc5KLUtSmpTeXig",
  "key33": "56FDQnwcGEMdR4dECDieKKF4s8WSc9YnnKe6pksZmT184ry3XpzLsCXZyutHA6oVod2wZ4a17s5X8GHgjJkJun33",
  "key34": "2nBLRvmqHYhGd13PUWdgxnxw2gjpUpcqrxWSMf9aWVViV4LywqmCs7CyQEEoFvpNYWU1soNhTmk1qG89FCkzE4y1",
  "key35": "4jZCRYxPxXUGnwx4gmMEPSLkUTqoj9hzFUVoinVSUwYZLJKM1tLWJAnSfZoco8wfzE8hMH3CMRB4nAzPxWAu4DkR",
  "key36": "226asfBwgp2zYVQ8JhuiSnW6Bj9WrLQpnGGvBwPgVzXwF8FL4yR7UeBe2fkUZDvGBu8edK67KLXzBLxNPaZ43gkc",
  "key37": "n4Ekd3nerivpGD85BURo4xAGFzK2dm8evkBjCZHK6SG1hwMJHvhApQvoV4QPJzFSvkSjTf6xKbQoPgyhjDx7iDV",
  "key38": "3Tsuk5o7eg1zGGsADPHQ5rZ1DXVcb5x8GFdtNjDA92GoWtVmry1acjgSZvUuXXxE2YrjPgPj2wWCUmL9W211XLKg",
  "key39": "3abstiK5HB4WxawhQHBxCDRUZTWP1ddHGjKvg3b3VHkqz2aGm5KQwCnai3xybLmGZ8V7Mi9AKqanxoamQs2zZWe6"
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

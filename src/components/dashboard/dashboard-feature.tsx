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
    "5YzpsX3g9xHEpV1tkbGKq2gh6h4KN86fWSpTaCPhisTk3Lg7hMADekSskpo7kabeeEi9TW3C3VDGqZT1rBU18wUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UBgwFhvPrNuUwmCPx1ePwFbSHUFd7nBk8ghTdn6mensqNCiNuFCEuCxKwHt8b79fCbAE4R6Hs9bmCjbwrJRZGN1",
  "key1": "3oErqCou6frCgy2hjcgbAogixKwSe3Vv2MuK1VTFFYmZYeBVStVqCXDXDxNijz6gviXUVfqukBnCeNyVt4gw2wBC",
  "key2": "37iQqVZXazWYXrHdw3xeP67uZqbntrcoFkStVKPjEgNkLr6tENLReCpYqDxn925h5rcbdDsxMU1p3YKNJSuJE9bK",
  "key3": "4Fw9mrW2Kpy11EzZydy9Cf6D9jmw9TNYnAU8eyJyuBjZmgm6sPhAUAMV83VuPBgQf5zsWNftfNkgMBMhnawByZoE",
  "key4": "5fHSXfF6Q2fgBX6tWWT513ex5vjPxtGY3p17a1YMSNjkGcfm8m9wVTu3AqwX93Zw6Mvueip3Ha2FL7G7ns34WTWi",
  "key5": "3nBjb8u175YBoDRuJkqvTkhpdZwwZ6tHpL1rRHoNdTdHo6YLv28R9QQWm75mWqYgHraLQ6yhpBRWNWhD1Uu6MM3b",
  "key6": "vPdYo7UDqipPeyCrcE4xTPqKqTHgniBy95tdiR8gbwZhDdkan7przkWn3UXPuQDjEA6QVGrtqz7xCyNcNDzddZv",
  "key7": "9ZN8GDyLMd3YJL1DRijJw5xj3HAbG6nk9jNvCoK4qPV9qXAbCvKCEiCe2xpiPTYfYSkssGJtaqQ1nvkJnDEdZmL",
  "key8": "2gbiQTc1jue91DDQP9PnsnfiV5j6LxNAFo8aPiepH2rAYaouPdTvPFNjLPucPsESS4KyuY84wepuErgoPbtHSf5m",
  "key9": "ckMP57vrgiSTZWae2GTBxJjy1F2saN317Frws4tXuBbxboCmWShBNH9aaNJQ9KqeUxH3tDH1Mx7TCDooFdLGfL8",
  "key10": "2KMSCV6LsrNFe7yQhpFa6bhKpjvRNbXVH9M1SredYrQzrrQfV1PrRE74cWYs7tKWGN5tomLM1E7nbDuChHSHPWXn",
  "key11": "3oKtZtgU3LPPyY8W8WNNuJNH9jz4gAYA5TvgjmPMgg3KYDJBzndtGcyNdhT2HjxczHQyJLkXPZA7g86ER9Xb9zNJ",
  "key12": "44kLC9FSTMemmSgNvs4kTdrFPYH7FHEjwVvyo6fvvmYaaPtVpTwfTNURSu8JYhwu6XyvggrV62oroRPS7VJygHZD",
  "key13": "2paHdkNAoFhYD2eP1gz7xgRqGaqkDzZtpFG1JdCA1z4G7SvNoiA5aC2GUaZHrS2HggM6rBhtLodgiRozupdRD59c",
  "key14": "4bi6evSMMCHg8xVeqCXmfAYj1m9iuWJn5SLJ8xjGaGmpafcw89qkXgfrxJTafGjDw1iNxqtx1s8fGX8WKqSTamum",
  "key15": "47HCAUh6cNJ6K3kh8UigRopddLDaAiWxkdtZk84Z73yn39kRh1y2x1tvjMus6WTvGSQqnr5LciRtvHAwUoov1P5f",
  "key16": "43PJhq3EybYKRp6TonXkHDrcaAQoxeK8gL5bkGzJiQPk5JZ5UyLGsngbi6125BXoC5z3qtANfGwzbemdSsAzqN54",
  "key17": "4dLt6ozsLkQLCyk61SELxp6KswtiTAmzn5Epw9Wff1h7TKNM6EQVJKRjcLobQ8DrrDCNyt8w8HU29XkMR1DQFFij",
  "key18": "QCiUuiATyo7xzivHFCXv7m6MowYUBM9RKYvnznQQZDLY5ewG6XWwKHPYw7Nq7fW8HrifA7uCYS6CKjjofkhhzSr",
  "key19": "hy9AJPbEwSNTstP9wGBCvoBmdoEnbGEZRQ656j9yHqT4A13EVjWCVga9gbH9cNep2u1Nj1AA2ijuBpEaQvG2XNH",
  "key20": "5Pw7TAacYht6aYybpTjuWyq9QWLfK2xENGbG4aCRcTk3rTubYrfMKyKf2jqDS3dGBkBxyFDuDK4AEavWE3pCzbFR",
  "key21": "25t6vEJpse3AdSSGzPVHZCT16TKgZBK3Wm3rZj9x6xM5LW8u7xvZiXeMvhDiTVChYNa5hu7uBjBq8oVcY3wzVDNs",
  "key22": "v1ZGc9n2uMpFRDtKxiTLZifMDjTTRaJTmbxxU52cK7n4AxyxzSHpJmSA9hnwu2aG7GsytHgFbH6oY8TqC8zAZh1",
  "key23": "2GZbaTCUfA8vhrcyk5cpY11PpZJFR2YHyGaRVJcqas7Zaax32omTpRxFADgbythAu9N91Pc3goFZW6BVsjE18FVH",
  "key24": "Xf6YmpbjFk61PryaoU5mRX6VFz7Qjew8f6TF5RzHih5qd1JUbBpyZBJy6nx6ND31DUQWwMu6XhL9gf7U1X4oEmu",
  "key25": "4vcXfq2bAMqe6Ver2myMmeisuf8EvHk9ZuH5CHbdpQkk2L6GAFATRoFJpStLcGk5RjAKEUZwLLK6aK9vz3jnb4vm",
  "key26": "5vsc7Qq5dHx7zHyXEPg8nPKJJLsh9yw7BheYN51siUAjKJupa3m6TRAcLnu5Tnb74PS36WJN3H7R2EhP31D6Jho3",
  "key27": "wtAiymYUrZ13VDFSirLro7ttSKyiXR7MHXZxTZ5T6JH6qFJ94mfhzFAocvfbfvmznAH3HYjMmC5L45NaEXT4BMs",
  "key28": "4q86FU73GCRQB2BB5a476wmnEQ75LhzUUqNCFbNRZtjAnhcZa7GM2Twc8FFNodimNH49ANRpJNX3XwNHPSvTuUy6",
  "key29": "3yi7YNJnkUB1C3QTiQkmkFoKNZtkAABV6zzx1twDTtZ3HdMjdo3XDYGMM485b9S6KLKUap5DkXAjPG8V8mtNbbSE",
  "key30": "4ycgAyFwLYRdGxtVXsKEdX2f43KJLo2J9WhVv9tTcujykyWk2ruhBM6ffNrEbcePNASWGjiaqoBmbnnSCWYGKNF9",
  "key31": "3ZgEsUX94DRg7DN1ZbncRXe3GG1FQZ7TFXB7ferRgxaH3cVcUZcCMTFYcshpon3W6oKm7cgvtWBxfSFSprbSu7Fm",
  "key32": "7Xm83AHtyLVmcHQGtBMJun7zosQWhBzJJ9FjjGdi6edtCKWCnkCnVToxwdzKmtZMmFNyPMp9MvjtvHJ73mR1Nwm",
  "key33": "3m6iT9pTFxpXXFwKitUioE74keARWN57MZ5W2AkYBvbQcp5KzGcQuRWGZhiXUvgaG8DGS7JJDREwBAV4W9nrmS4b",
  "key34": "2bJ7iGgMr8UQiLDxp8BG2LYaWDysAjfNUSxmsxL3pdmSyRqKuKB2isxwoSPadgbrszHKp5mBA6UXjt2sfAU2SmEz",
  "key35": "4vYXWEFx6i1sZJnLAEQWmXGvAmFpncfyVJyvnqNM52uhCLkxkU131ps1kL4gjKcX72WMhUkCX7dXVPneyWkzF71U"
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

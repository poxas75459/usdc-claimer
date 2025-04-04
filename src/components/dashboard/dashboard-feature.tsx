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
    "2QCri2Hvs8sYkHtbDTiFmeP1ZWSs8RBDz5CdbmZp2nXLC2nmDgDeUz2mLkkjCYVpRg18hQQ1kVEYZeMVcAo8tE9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yHHXxyJRagU2QHsv1CsPaHVigxHokEDm3FfCx6r6ijFeeqXZSttpa7zzUKNBFZeixdQDiDRqDjvXazfqo9ZB3H",
  "key1": "4qdRPztaMHmAS5oBuPoXZVzLu5qW4TwSc8jSpZVFSSBvR3A5jc7RZxsJ2cYm489eKx7s4vCTtkrbZ65wuw4WF7aX",
  "key2": "zZZK95DsBd5VgCkxSLxWp8PG6Qho2rU7kD5dH3B2NNyWWLp75QvZ9Ehgcy5rvPZTLHhYTBppzasXY3jgVg3VTn9",
  "key3": "63U6GvTjmW3Pvkf1iqnyu8hoCwRCvcyBq4KxiyxKJonYrgpofuPmVTgpVn2tELZDu1i2ZmqT2Hqec229dgDCb9vU",
  "key4": "4HGMtUfCwYaUe5418AExcfDjvYSWqnVo7cip4rxeDZVAfT41nUwZxUtycU8xMSZoxDxLGHh7Mj4iyqXRW7RNtkbt",
  "key5": "2QmnUD9KT67987uWeCvnB4xMF3qi587sBiUuHpSCd39rkMB9Z5iqnjturTFyjqWxJDmJVZ5TnLbyu3n7TKUkTTfe",
  "key6": "3RUj6f44XheXJBA15WbXdBi5i1vp26sZUocxKEW9To8Pjcx6jSt9VY4C3idQkE2jgiqABuYyLRksMLMc7JcBvXsr",
  "key7": "5wtm7a7oujUY8JYswu87QUMa8NP5vD1LEGmBtsTSG1rV1jQh9xrNSdKmUJwQANwXGQ3ijqQCnTvMKVTgJ3M1PEQd",
  "key8": "WnTymLPh3cYGUcNJWGDRgQyEQBhtUBHrMtdyzLWLXWZ5Swn1XYf1YDjpKgzyajpci2eXWhyhaXTAjmFPw4vzncW",
  "key9": "27MSA3kPaX2gUcu7zSJrU2j34sQm9FtPn9j5nYyCtJMBjb1VMhkQ2Ey4S7bAi4q39iEkeuETMFxjV9yXabg6ruRA",
  "key10": "3GmEWEdtL8fXJSHzC8o3ogeWtXkwW4jpkejbPseMcJ8WUKUMxvNmsdyoGNzhXPEv65SZ932LHGfLHUT6g8gNB46L",
  "key11": "tr7kdX16Y4so8fAabfaVwgb13BSFR6bDHfpBjAebjEBUp5Vsp42qDwQKAfj7Tz5bNkAutdTRqro4kqPz6JFt8rM",
  "key12": "5X6ffWQq44u6njnBrAJQHDYuAEwayDb8YArP3ZFaVnZDGUrhM4ZKASkmbEVZ8irtFoDkNFePWzgwf6xvveQjQnon",
  "key13": "4dYjHwVDvsZPCPz8RKsiuPgfVNbJxwgWuHxuG7QLq7C1x4Kwf3yC4gJ7nq7P92g9rR7FXb8yEuLdSJCBLtcRKHTq",
  "key14": "5XDPwFVGGRjdk2HWQ9b4Khj7kshEPjJwPbV6LFgxiKYZMUru1EzL3p3ebPy8PWN61U1PZPPmNUxx6vsmqJpk8vsQ",
  "key15": "5iNwWdsZ1ZBdhwpN2qRjC4b6WVwznsbDSPuLazjbwyXQZJZPpTjZgXQDxB8wGooxcAcmqUDzgmRrD6MSfYiCBLYT",
  "key16": "33ymobg3RxTNYPPz5Sih4VYPcDQukKrSvPK8vW7emuAWYVCERuT8Xo2q11gddkt43REJCjmirjA2EHCnh5t23Lme",
  "key17": "52X6SJ3yLuveLoekhq6NJwSZfhsCMFCir7yPWevvWFKcwhUZ4GxmgdkYYJs9yHbYsAz3nUJLaVPKhSuReeeSz9fe",
  "key18": "2RMFhGE8KrZeTwSjHo9jM1PNmMF5ZLztaTRNAME1p7U7G4ZBJM8SKQ2TCPVGRzeoVsKfTzciyyyhqD2tCaJuZp3U",
  "key19": "4v3QH5cTuyyst7QEkAhJfZ4rLs6otQKPqVC9KwiwKbakSHTw4LCPJLRFmL4RJc1TbxEimxGK6wuezBN1Q4QGyWqp",
  "key20": "mJAL7Fu3LW3eFFRkKLKGNn4fx1KAbizoeHF2sBq5EcuNjCNXLjcQaNxeQsxZTfvtQbyQEgDvDPmj5o3bBhefxec",
  "key21": "d3zXqYH5vQFbNkm4UkoJ6UByYzMVmyJjbdT5PTT2X9BQDogy2iJeG6H3MFuJrMavvJcLA9DisA6wH95JbEZuYhX",
  "key22": "5KR1jpHzYTbQWf2vtmEirx3MXaNA5ekAF9iJwSELNd6PX1euFHEUb8fA48eaGzDhdcFvbxMn8xG6MUh8vLaGJ4sG",
  "key23": "5ZPcZmjwNYUHP3UzRSLVtAQy9xDkfxrVYAzfSuTHGPUZJNR5wHSRtEpG3yLGEJjVU4SFDir4h6wUNzm3nPMMMnau",
  "key24": "3TEGboTryYLfh1qhZqNjoWQHQi9fcMyGemCt3QjMRfdrk5DhHyXxkCBNfXmsFLh6vyQPvHpgZudhfStgyN2EfJPn",
  "key25": "5Ywwrs5sdyeP28keGxxYw89ASJniMA3Gt9Z3Da43n3P2ttonTsyHPv5ZgVDL7ymD6VkwPdVQnvHLWTddX3af7bGK",
  "key26": "5woCFAAsc8ni6TzjMp6qYY6nfCJXHBS27pSAenNtVvsENXGVb6zzpyvuBPDNv7tyvww7RXvTnVK6bV5oFyC5tJrk",
  "key27": "33pG9gtsDXAMUoN6QELDBgwFTFgJjXbv9WBGr2m92U8qNQ9iup1CDvpS86EVq6Fef2TEjk1brUSw32SeB6GKkrhB",
  "key28": "AAvRDECm13Bfvm8ETbkLb9jDMPHkxw2cpEaR44roGhzKuwXAg693scMvnDcjgtQ52GtnQbdWHa7EhqkD9ahgvSS",
  "key29": "3TzZFAHMPqF4D2rCU2HP66KnvCK39LmeCWT1gZTgyqk7qDeeaCdZh1QiRPPrbFm3xWM18fzpK9sAW19NaNHCeQ9U",
  "key30": "4mjnAaQwjCeS6EaMMwm4AhayzVyUCJmXLisgLJsTb9t6yKPrunrr6dQcSXz7Zt9tHfqcwgZDprPWtyfNEp9HVJS2",
  "key31": "4kfHTTNLysKSmRSEWWZWd1B6BjDM5XXeMAuCtS7AjHunTi5XosCYuQ9fo5YXWLFb2reBhSsdymS6qgQumAxFNTvY",
  "key32": "53LsyaZCdNZrma2Kt8FyACzsSDmeDiAKW8NbHufAhtrNf1oBRq5npSukiYmLc9NgCTsva3XZ9czpQRB8eDqBVpup",
  "key33": "34V4h8HNfbHFMGXvpVeZ9sKLp84arp3wH3oYcvj5AuJT2LSdGTDo7AsWoyF1EaH4XZUGrDXmfhxBYyCn3yVGv1Hu",
  "key34": "2BYbopBgQdWZPPDzkK2GJ5dv4qtDA9v6cycukcuPtSfUY3PnpZ5VAbH76WgzYRhmK1GfGKpdGY1KGKLaRdLfBMgm",
  "key35": "XvaMX59JdJPbJ3WEgTw3WnxEoS2AZ14pNRe6bi8DZDUvsR6YJtYKFnyQTq51PTQrcDduxC6nNA17Dn55NmVtrRQ",
  "key36": "k9EcECxWRwntjCGqoHTgsJrRCtdbfQrF6MBsrPEwEFpFWsW1w4mRfwVPWirHAADaezLTrhzGu9jdcV68QJVwBS9",
  "key37": "XLQ79cPvriZKCGv37X1JA9WE4unif6zJ7NtwBP2DZ7v3ZE5uigjUSFcnw9xHi15Co5PBKsCa1Qqjo2ipLfD1tK4",
  "key38": "5UUaDCmqUQDtpjeSQM2xw7s7ng4BUg3WVCcPDgac2o1rhnE5xyJgNoatFkMFXdHF8pURS74A4VMda2KbmkFsMa7h",
  "key39": "4op3YvgVcRtbXGviEUUn95P2LUUG2cFoHZb8ZsWz1QPbYHvVGEHt65TvY12DdDrGJoihGfTs4TWiL1exYKqjdnZu",
  "key40": "2N6qM5AEGmsBTDssbj4qTT7NG86pD1Ap2kMQrs9yYo968Fam59y5USzQwDHq3PyV2cmrjjngeMiwv5zu7L2pGG7b"
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

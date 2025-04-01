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
    "QdJV2QtqQVxFxHBrSvMxJVuoREC1EUfewYkQspq582wSZuDniBfbTeYCpA91AKQX4ZfxrHLam5pfxcLNPs8muXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5teGUnx3trs1SGKgni2JTqNYgEH7prZbhdLUeBYPZw4QWJ1P8yhsBUCkqgvcBpD1iX6H9rLh1yyuWvDW5H2WFkEh",
  "key1": "5Na9SMD4jdzzQJWf6VPtN2s9DxaxwWQ2ezvuNhSLAr3kEpqgx1hzRHyUqb7Nz4L4EgPC8eEkesNnnKzNmCNaodjd",
  "key2": "oSZLVraHH3JDiVAZa3cFLR7GtMGJoqjth4tZeTUTkLg9bMdWaeXBRwHDXLbz7g9ve6j2VtxD8gbCDnqRjudGgJq",
  "key3": "2JeS6GFiJcuZunxqgQVoEPsAQ8rbQgF8o4D8H1jreoqYiUQ1TK5aP1tguGx68AdPHU6VfBVryPCgqFnyGMqjim4F",
  "key4": "ru6UL4oRuDjY5ftYsU52SQD63fSzscBbzbRMgHDyP29EyFDEa1C32vhcipKG7dmh95sSk6BNejRy4YQyufFx3RD",
  "key5": "4uZrnE9ty4KYt3WsPhWvdgTbWRQfqW1ggP3zGDRn44Wdd1sHv1DwMfTxAXknBPyMAbyudiqUkokvsuTuTYEoQnKS",
  "key6": "5pwjXoCdGmUooA5yiquaah5PhaV9y25owh4uBurN1Kp5BJF5VEF9jEFBQyVdzqbsSuY2DSi8gfDwAwMDRqZS9jxS",
  "key7": "2smtg8PGRZ8bgtX3K9wDBu6NdFmEK4RR6KKbh8RDG4o9ts128uJAJ2ij2wQ2Bd642PgHp1DZGMpfHum75JPjtEdq",
  "key8": "4VLcvNEb8oads6uiuWxWMtokcpLQDaSiuNnspDj699g6oKYETTWoaqAEsnqPeAWWuHjpZeiCjqruhqKd7z55anvo",
  "key9": "2nA9vPSYb1r7fQidkeYgG5aLRN8oMKy15Jy5Z6YHBqcTwryj4Gj6Txe8sLbp3ARL4q1so28bmiiA1JFUuQKAxVF8",
  "key10": "3Jby3KWxmEhYzuei719VNZrUfTKEQbuGLUonDwpHPyzvFP8jm43UvTi4pGmFYkW6iwQbXJPUQM3Ta3TTd7zZiox7",
  "key11": "2rZPxJyzh8kbczZqCeW7KeJhrAWk2gbGwmZZur5rsbgGQUBiKUaRFLpGkegLwVthzwGbGSPMZB48Rqf3YWZz6onT",
  "key12": "5tdinHowtMjzjktawzJwG6TgahTr4EWswVMrckuD6WD5wNtmTv8MTJkFhkcHtSuc8rJVcMQJigWMxXBT52eCXWYh",
  "key13": "5KC7XK741XQ5cWBgVQXvKYa8p2Jf58Kh2dQe8mAghrjucLSYJcvGqbKaQM1UmazxkdrVEp8ssJbQ4nwwkMsN83Mu",
  "key14": "4qeKkPoe1xWPjUFh8mpqUNuHXG6VzwvqXD8ZBAeUu1ju6GLwDbKs91qqq6h2sZb7WRmvhZ7zVWsYkv6BRZYXKdhb",
  "key15": "41cnywL2xd3GuRGaAyrQep4Pxe4vPsnEEoS2xj5gpXohVpqgb99TR1UmPFJkkvheP96Rq5Vt9NYkJZ4Uc6mP2yYk",
  "key16": "ENaunSPK7uTNmG1s2qs6UPQSNizz8J1NkZjPtYJ1S376ZJeAUHwKNWMWtxwm2Atckf1JrRNfYZTEPZD2U4qfM29",
  "key17": "3DxMcYj9f5DtDbbym8zg6dh4q8ozAirY4rzkqiseCpn7XjshjNXqyeuUJdtsSsxNEtaEPX1tJCNzFZbCuhmwxuuE",
  "key18": "5Z7UMxf8kk67G6Aw63sD8fB6cdEpy87d1f8grSWHtoSFexvkT7Who5r8B8TyPcLcTbNw3AWnrHpRkNVkiohozU1x",
  "key19": "5Pt97KMVKs6agsRGHP5UtefKLbVyFVdPXu78CAfmYd34Lvu1ttEBkf2mKaKL14to43gR2QRs7Dpr9uCRXKyC2f45",
  "key20": "31xahxGin2sFg65CCKfdNM5iXDgzW6gqHdDbf8bQT7heYRa72oh5MqAuc2gYifm3wr6hqvians96ZUcko1mgUyER",
  "key21": "5RPmshUtbjmHcxt4XmAwZHQCFZzGZEHr4vF2fEoPQ2LoupJWgsj8Z6kbCiL13UHTefZxSyk1zB4GxW4zpgGMnSbZ",
  "key22": "2WLppUDTxLsgwXEU7UL58D5tfdvzaHE2KxLZhK6MEi1LKQ75Ja4fpV9B22VzAqJKEncgf1m84DyS8MUzdMma7jLa",
  "key23": "319yeSRwkCABzw2ToZ9amF3XR8hfFy5sJ48XBp7iXKoZExcv9jBR9bZ1ohgcNFhiHJGivz4ir8VZ2MnQMYm7LpUs",
  "key24": "5EBULb2k37DtkMUwGFPPV2wLyfvjaBuZynwTvRmRKk9S9mEVacYqwS9Hv15h1VyxX1S7juQuWDBPzfPzv9ojmtgD",
  "key25": "3eiQyp2RdqYvcNXBjcDtyYY7BZZ2UjsrXKngZyLi55gpyM6jxhDT2VUD4Gj3WFJPZScWdUB6Bfq1bKE3mVu2TwHx",
  "key26": "tBSG9tUrnKEJbPgZjf149k9CKv8SCf6VRTvUade8TUoscDqcuErwBVm9Pf2og92tQqyZ5aXPFJmoq557FLcwXek",
  "key27": "H5Ssty9o7dZy9AAFFB2nUCMzuR5CU1ysud7M2MnLzXSbwxkCeMBG5mtpSex1MzMtwVXuwe1K1J9SRyjh6TVinvX",
  "key28": "N6aFo6qoNe86hM1bmBMzgMdufsxAG4xJABD3ZptqQ3h4S6wvSmANTythH8Wjy4Z36ZyujBjXVnZMFnE6ueRbaTD",
  "key29": "5pUq7BuPadAwPPjMzZ1T45tiUWejmpzz1b9GDShVVZYuW6nJihEM8DrBp4aHoUH6kCB9u8AdboA4TTwC2ag1zwkF",
  "key30": "5m9ADTuLaaVp1s6RuE1Qp7jivTrxJHdwBFWrAncspkzHsWYvhFYfCSgxJKhTkDqsadKwbgzrNmzR3zsYGgHG9bZJ",
  "key31": "5uzZuUhSEHUTrHqERpFKoS8AgKAQqwzGvTCkg18QSsfANx6tkoqqcVuUbTf9f2FPjAryBq7YBrGptMRNBcQA32Z2",
  "key32": "4u7kJvxXjUQSQZtS5jbgw4sCKWSmxDditgbR2Kg3pfuDb5HAmfkXYsCXAJMJR5JjsgYU7QwUdZkUoojpb5MMyvLj",
  "key33": "2afkLuVzSkW3uJ5TGwaTe3Zw2ANMEYHJHUR415JkdWmeitrF1aCwi3MuV9msJByD7bQifSUx6Scwpay2ebPd7L5h",
  "key34": "8fDb2T6L7mEMjRqwFz3UrvzpXCGeAmwmjtQ3BNtYfJvSHdrr4wHssVM1E5MBKiuZWp3DotBmPgFoS3qbiWK7QCG",
  "key35": "17JrJhQrpG7CtUg782JVU1QnG3vcwyA4gFGs4sLgvgRFAueWrrRa7TJpMZj1MW4jffGBjobY83MB6fKZJfaDgZb",
  "key36": "vx8j5JRQBwfyYWwRgX12MFDDgSuzB2ti8ouzvW3qmYMgCrP6osdQMSE9PCuWZhs5pgpKe71zWZN9mAp6Xw7hprU"
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

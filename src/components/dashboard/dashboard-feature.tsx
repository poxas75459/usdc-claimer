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
    "4UquMnbh3RUc2PezVbfp4tCFRqRPk6ZhHTEmrDHMG1umQQZn3SMZfZn4bbHSENPzKeBsLB3fHT2uABEMZmokX7my"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fjpR8vkwS4XGt98J6z1fQCeHJg7Ti8gTBHLeDKuFd7Bs5ab4Ebpz6zzjHYd38PgknDfrVV96GHbMmwKjpkoUeza",
  "key1": "4JafaB16iWKeA35xZGnEzwkV2VLviRrcau6gAbSqUo6EoroRrmoqRpQZPznLVsqUxJqj6W87mop1PdfM587sWxeE",
  "key2": "3Kw3ajWF8KgEXCiCs2EYq9hZDkUzM9gDtJfrY6KFu6atVMH59PpzxBX4mxUfmsYNDoqQUsAjVsp32tTSXvZnv8Vr",
  "key3": "5T5tb8s8hsCkcPjdtWpWFT8MZGycZcQPkxzjxQ8XAkoRnoU6LawxuHyrqTAHWoUZ6iEkvEz6Xx2gfXdH2t3k7Lxw",
  "key4": "29pdmAhZBVei1AgEMivTPWHQEnX7HjWUgpJfBE3xjvLn9NRogMaN73F8ZmiCWVNJTEsKUVgLTW3R1LiCSmm5AQg4",
  "key5": "3FhoedKwkoF4uaY68GsDU2XNih6HEmJwBdkZv4jizCzSpyrrtKDPMWqpnmXBHhfQCLkgCYJxRLg59KSTZCNySbX2",
  "key6": "4sPrFqM3xaWzt6bMxfmtY9vUpun4qsxBMz3i5fcRo2HXAAeCQPf5tCC3CvgXxEPY7SLVfpNb1VT8bvXMVAKfi8ao",
  "key7": "215pDzJSDh8c7fAHEwmAGTCJFPFMBY4Dtf8aRmVpHkCNkPUi18pUMXGtyaFBcvPGchRL5hKaaBHWK4hKfG3ztgyr",
  "key8": "47FCgBTWdXE7GQvKsxF9cCfP3mLBYZjvv6g7FnYn8zNLKw2UMZZVXnwQcRrKF3eBdtHP9Wn6YL8MXeT95de18h4J",
  "key9": "2s9aPdTobimVt4cKnYo1NBx2Pu6TnrFFJqMUQYZxKz81JGxmWQKYSf6V6BsqqXBCVy7ehvKdzhUZMY1TyuUHTa6A",
  "key10": "3WCDDutku9L2JMLToDX92uqeSEtUY9DKscLtyFQJfF7KDydLs4ci3WC9CW16cMDqZJBu9YsUQwS9XarZfJJQcvJp",
  "key11": "2aT8JmT3er7ASzRJaX63dVEBM4tUAHmha2TWPvXj9dvMgVe4HtnfdGNvtxg8ewj7F6QNj21hR1uQgx2psNqtvQLj",
  "key12": "LhrrG5tJqEusradVm9jT2Bh6vADcCssGDBVnrquF9fN1wzu7foHe9PsAs2TrV5nRE7NAmAheiy9Kr9hAaf9XRVo",
  "key13": "5dBr92cBvkWdAfJxKtPVk8pGELHaVhXKCCzxb7ai9Q3VSWwoCm9EPLp2gxn5Kpyu2KPgUp8HxMJCYAi2QSBygo3S",
  "key14": "5gBkx3XZf855cq8bPdM1hNLaHdKudHF1hAvw3vEeTURnru1hJ5HXF1XLh7x7xW3hh4t5uiEfsiPWXU5sJCH5numR",
  "key15": "5mPWxucBvpefU3hG7cXRr55vqeJ4Qc8UmF2zy52kXtfaeh4sj5S2NM83ihERQZDDpVb23wom9fBrK8uWjTxcVbth",
  "key16": "3YHPpDhNocPhRMaGYKVs4FpYbTVLgD3t1pnXdsfTTBQYky7kivwFLUDWrWRSffbhrpFpG73DG399XNhkGGkTLJ1u",
  "key17": "2iDD89n1HaDDisPKhuTyjNGhsZBVihhox6nAtEYKTD5MiRhGLtfXeSxNb7S8uSz4ZHpiJvtejcrw6usSTfWhd11C",
  "key18": "3W9y6Kimm3QCSCMkyr2dfdM3j4UedXocCVtkxN7eR6pX3fyuALBoQYT88wkzwrBmxHfcerEFqWJX8fT6vHR1S5sb",
  "key19": "tfLvnRgJAyNyqTAaayhYKAmsaz8YNmJ2iZZR7QHsXf55eCzKkP7oXZ8h88xMSubTFYceU2Y7vQS6C3ptF6JgHUt",
  "key20": "4GuKj34ecznWuUVH98fhFUXbJLgHmy9DanNBSRD7kBJY9RViAdh8oVGfLjPwLSTR5CxmdGL3BXAFWuTdFMHHEpUw",
  "key21": "2mFVN5J9YgkdiAxdws1i3W1saRbsaQ3ACuxtxVDDuwXxPR4VVAoqB12PxmK5tBdPAcZVDSC9bthPa5mxYkL5g1Vg",
  "key22": "bLYsi1RMAXu9ox3oyJt4AD4oY5swfYgebSPou7MbkaLzRMVBgMdb5BK2r6sTvW14Y3FjXY2xGEjuFQqsTnBu1ek",
  "key23": "3XyQ2Qsa4vy1bHy7cA7SPMj9p2cHCToet8vUHNqkm5LtXbuCbWnGHN4TqwnqpU1Ck1TmBpBJkYgt4pSmPKUtRtZc",
  "key24": "5SJhjRBkfkworwmNn7eiKkx3yVyHRCo8qonz7cmmdcLstum4QEPXkRypqT1n6AoL6B6C1C7zrERbp3x2XMeUDe7b",
  "key25": "29i4Wvt432CqMVUrSUoERJ4DekHCt3j3kfnbpqd5thqdw5JMu4pH8wZx71LsMP3UFqc3YmMRgphZnfvshrKNPbL4",
  "key26": "2hfgpWhyEFPUj1HmZp36AHkxphBZiNBWwABhrCcyKDxMbipZZyAHGeFZQouwWo1x1Z2t7gH1uuDMVQhoUbdSpamK",
  "key27": "2jScHswcjbnHZwU7eWLnxB6sESNh1j2M1xvkGC3YatNyHdwtVt3kS2bQgXncajfbURLWmMtDJMYyrgP4oCAWBp9Q",
  "key28": "5WP52GW5Fqe4puX6spYTaqmMw7EFyHboEvPfFHnJd4reDZd2GaktZ4sRrs94qTpGX3RTWA9F2v8LQcU9eg2gyRcK",
  "key29": "2hivb4e3j3Z1QhzYVY3XsKHjhsjZJPGmEe19FwFKf5Dn8WxFXNYWt7BJkZfut5aNjDfNwWyYhoepmzV2YAUNzyYD",
  "key30": "5nFrMyRPHDfQj7rmWFMx5WUAAmB19qME4p3hkJVizZPoaN6e7QcM7qiKmUZqzEfdtoHMQpbPHq8keVfPKHuwubmU",
  "key31": "12m7RmpVuobb2eUbKtTXBYSYqJQrZWWahie8koNnGToU6Y4GnKNojN2sFZ8MgzyqRhsufHPaR4deAfrhYR73QDx",
  "key32": "3azXefeMoSFEfeGGfX5LHHBpmnuKP1GPCHamDQRL3nhpGae2iyE1vDiTFEBgYYouPUM6VbjRVTGQkD7EVU18M4f",
  "key33": "2yzsfZk1shVg1T5u3fdohPDufjo1HprmZDnipwpmnjqCkyEND5JP7MQL7E7qrAgmYUPDJP3RcNSjraYFuq7wXAC3",
  "key34": "8nVDdf9m732aGQ4S24MrAoKMK74HsyPjW54GFCwR1mHmqi8GTZiQ4Boo3LmtdwXodSZFZGo9aKB86vYxz3eA6JH",
  "key35": "499hFveeNbB9oJb9ScpY95bZb8TyujnGiqjuqipJcttsY8jkhqrcGMwefcum2BCeLoKhGMoQhvYfq1P2aDmyQm92",
  "key36": "3d4THHgNLWbHWtA4DkSceQko1RXDNvJc51UsWxwTuJyyKdKfCYCEZCZTXkrjnKz8De7bF6SyaCj22vrTQa6goqDG",
  "key37": "5rShDAiv5vs6VVx8nvVxeC4eq2e1xMFGSSQxkDy7897WgSeUPsyNpnVqSdc8LSxWgtPyarQULELw86z8We6A1xS3",
  "key38": "3Ckta2qVXY6CfV93y5PtJG5icapVn5VkrhSrmRmc8Vqfbg85V3WBfcFoyR8YHeTWwShoWnYNRBFdWJZdXAqiHUcL",
  "key39": "XTmKEsQQPhJvAzi4ww4jAivHrQLG5PuqQ27BgFMDKKSqXCggru5pcNHwPUXh6siYQAigUG1Mpdd9S8Xp9ep4Awy",
  "key40": "2Lw8d6PuCHmjsYx33iMCokYxJiCFcnGUKR8fG4eV1i8cCfoqNj6dTJibbK1vo1J8LKv2mxQinV1qxDeBjbmgvDVu",
  "key41": "4rjQvga5tLtk7vRcamLYN4rSzTWyW5PhwhQAw9jZK399HUB4TaxP2NEmKEyVr8c6qf3oxxw4H53PAbLCDtfmdSsL",
  "key42": "5WGvoK9ScBfCF7B3KUA9pj3eMRnTKvTLt1dsTpmRoE43aKrDkDLcRuau9YY7TAKcbDYMQrqXJxv3iuze5LrfAv5p",
  "key43": "2XkmfC2f7sr7k2UsSEZKfJKwW44ynpLxxiaxDfqPtMRusf5Knonhf16zrXiQbHMstT9qrpaM2ZkcWDYN3V1kcLVB"
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

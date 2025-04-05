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
    "Uw4L71mTZBP6MudaohgrdqgHPkyovngWt663fU2MZpf3kdcCbLT2g6qKS5xWQBWzcnwQkYSRWqFLvwnXijwL2LZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uc2GBzH1eF6KPePU8PicK4YEEuABfZH1kEjYdVy9SHoCW913mt1GusWevJrkRrPTA2U7qAuuBBXsG1niS64Qffg",
  "key1": "5vD7r8jxVoNAx6YbPPbDHXePNktMZUSQsgALG5PUvxBFayrNPRDgs3ND1LCgrJjnvYTsz9Cdk6XGqWoACYfxj5wE",
  "key2": "32y2UzYuHekT4eq2ktNmC4iYD7MEtc2dVJcQySyv3U3ZQw5ocXx1wuYoMeR8fJEVJ6C1sZXt4YNvpaoMH1koRisd",
  "key3": "4yBsrRwd7Q8taZ4KCgzT2QRbR8zYsBuF4Wxk82s8hsM3YFQZYRi9w3ReJF62WgbLy2S94iL7vdCi3YngjAA5UELW",
  "key4": "5XAayM1TiRXdH6XbHX6VqX28uZD67MreRakNtV5c3FWPYHYZiQ29XY5Af1SHr2WUfZxTuiCuurkti5AcqCuuVyfK",
  "key5": "5E19F3dwaAibDtMr2eE8FqDeP6ZzKHoeYrFgfVsLnjNYNsxDbRFWFDVy3oRx2qRR8FdaDHf4Fg3TZSvxbnFcCHWf",
  "key6": "3TPBDsC4gtF8EVje2maQJJp2YTSAZ99eoaWMFKuk2qeaZqSafJKDbmr2GrNwGPPEmzHr15AY79VHUMEhsf1gTmCF",
  "key7": "3yidUYP8ucnhR1AYRNo264UPFdPr78RwqXYP65Q43zhapddmpSkuG47siRBkctSJJnWQrLf2W4vPNnJZxDto2HjA",
  "key8": "4BdkpVvqgEMWyYXHvhK1EpQe9UH44mo27RSHDZCBP8LCYRTRuKK8zroEfz6LKWvQKcdNJnJcMr5U5BREtAeBNi2d",
  "key9": "5XHuBEvsMWcFiCH56vsZsfdPZ4ukaapDBdungKNKtzTKri4BZyeyByfNdxvBcQifXkdZaxVJyrEs8meiD7p9C1eP",
  "key10": "496zr4fVStM9m2NQERGtok4KbVFSbdy885kdLhmufByczgroFryHc6vBkUXPxHjcQBpWmsdPFY1w5ZNAB9BfxHQQ",
  "key11": "5mnLBHP6NVGpG5vPf9UxJqDgHcHH5jxCvrPT87hJcuwSaBMFUfYXMb1vF9WKiGVmdPaSuo99VvyaXyXXW3ViVwAa",
  "key12": "5zs1Cftq4okacvwhwBxPqCxtmxiTNHknbQ5HVqH266YPnvwDH1apWXxqu1AUYGN4c72mhYiURjpJxTrDu1AHf6sh",
  "key13": "5RWLFwcbyeZQkwTH2eVZdCipXoMazrh76McAgVJcBHVHB6ZrWpgSWeHgVEgjHy9HyfjhbcBFbUj2H5cJiEM4fAQ1",
  "key14": "2LnrYFtEPztdzLRvpVV3sqotpjjCVD1LeyV5dPVCGQhrtnafS57q8TrWJzSJF38E1uKyMG5j2PEJwHMoBqR8FA4Z",
  "key15": "2Z8qwRQT1nCUyJYSzmmtewbZCQpGZG1N7hoSqsSuyizQQFvzcfas2TjCAGNN1AEevPN21rdZ3jCwJzGBfszbeDQ3",
  "key16": "62hwihRZ2YmXJyiMSRxMHNzzPunPLk9t74rcuoapXmLXUXLcThPPx9gKxxZqC1vLmcEKFB5e9AvJkAnjrCUcHLVK",
  "key17": "4kLaNLkvWhacrQmgfN5LrCSx8A8ten7RGiDuSKnSipgTwc2PP1L2wDTdPF7exD6dZThX7tm85WFuZJjFynwtyZB5",
  "key18": "2jZ9py4f3vDNcANmqwNytAXDxF7V62nRHbULKvQt7gqjhW3ULg5fvaD62PmqR2UsNpmWn76YE7SaUrXYk9rvcQpv",
  "key19": "VoTQr8fXfeEEasMcuJdWvXy5CpAgemQsGdUvcSTFQR4jYovPuHxX9JyKXNBYeyEgt85jpTPgr1NX1fCdwudhtwB",
  "key20": "pM8VdEzrq2inu4Gs7p7azxf8E6FogAKBfbbFts3iKETSZcDeXGFNWMJDcXv8kqHY2Hbt9KF7YvCvXhT8i7hBGrt",
  "key21": "C1LKk67JPMt1rvqp2kBKuvW9qaUyrcE46RbuwyQMRH6NEo98Fe6tUvgnF1K2nHZGZ9mBpHdCajreh96gTH71y3q",
  "key22": "AkX9m7MZYnoSBeeWUsxYan9mDxtnQU3uKXcmYc9vmcwzzEpHWBfzmE8y4ATtcsjBd8nHrx2FMKkdDPDZtqvPYHF",
  "key23": "559MYh8gcJedWZsBFR3TZb8m51HGeFuSRmrR3k51pTug9e8Vc9RADcxnBNxfyyaAqQYvCBYwBK14T5mbehej74aX",
  "key24": "4pb6x4F5bMRx9ymdcAHnmrcbw9ADyaWLYYVXRtypJEHddALgncXcD8AGk6D8KJkPfXfF59iwjKQX5RXc96u7gYz1",
  "key25": "UqEVYacvYp1KHkNnRa42ZtDTCz84TDnYFxvx1JgHUreWrw7UZk6kfFEdr52ZVSDJsEvVB5WV1juzzeh51BfxepW",
  "key26": "3XxfzSridxgsnh77B9QJ61UsjdZAdNPg13jNKHawqSU6Boh4UoBor2sHU8wJgBSrgJY3dTnQPEJUbug3QnQgwKd2",
  "key27": "381y1REhDdvi3AFinpJcVrvFp42hM6hAJH59vP68RAXhShFEpgFnyRtagU7BHq56bpgyjMd2sjSRqvmG6rs4As26",
  "key28": "5YTiuzUyftjaVMsQA9ubCP7kyeB9TxgeRWMmwtx9KSggaXepUJRFodKijuN2rQj4xpFeh48GeMWGAZ94eitLvEu5",
  "key29": "5yxM6YzaUudSayE7DGvn62yeuaym2GgGkUWiXAD2fqNLCtKS2B9gJo5ucP8h5uEJe8xwoJT7UUCFMLHdNgs2YSfj",
  "key30": "217WuvW9pJdWXLDv6gdKM1NtvxdZXix7oRXnJa6x4LqPHnraaqo1BWebXNu1dqXdSGLekKQWTSueP5jgctBx1Wax"
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

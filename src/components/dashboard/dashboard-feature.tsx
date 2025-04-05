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
    "2z3PLocAP3CVuwPbPbjdNUFLV6SiYefBxC3juLqoXc6w6UoYorWB2Jfn7T4FW8uWAQZtNotDFRYRTgwi9eDK7usq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NHqrdA7iMJq71jZAWSQTFU1YC3CCSBYsRi3DZLbDZvcAteiHtMbaqCCdqPUCoENfFWcnHKayJE6bT8h6BGX5Ekz",
  "key1": "4yEuw3SpcyTHYjPmPeavs5Z4kRrRftUH2JmUnmoc9TiUmAd5j4j985cyzF3Y94eWMyJ7TN3jtqeMyVRb9QV9fy3z",
  "key2": "2rNbghVE3kwKbqCiHTXbPeRinZnUkpaEqjCtdGy2aiFKRL29cr2PGYsVXoex9owghz2zHdCm1s7mB9WtiyWYRtXj",
  "key3": "hRZDtHT5h2NoYwBiH9qEB5pqjxR7nXVpiJy4u7tsnnHYSiR5KqfHCptBsCvAPaLcYsmdtcTeFVU1updVe8rHLEM",
  "key4": "4UtWh9YPyTMqwh1MFcPFH8dtVjMn61b11G6SdWSwhV2xSnx14a37RN3jgsjPhnoNFGFvMPFsizPgkFthjnTC9jf1",
  "key5": "4ej7ZvcXsjKY8KrEope87FqQhQc6VpQaZAhsySwXTpASZ1QX7GERGqQRTHUopQJBXpQoc2x6uB7a4o3J5tPobGm3",
  "key6": "54uGJRzQQ7bwcM1y32aer55yu1H5sYNzQ6XsNSzmUTHQLtqsmKh2QLsnCAyEP7coaNQRQQxqD7XUA9YE11YmUD4J",
  "key7": "62L78PkTfUEYE4tSmF3xd32bpWdBxENc3AHzCrD4o4bYYT7EHKYiipZ1ALumSKKokMDeUkw7fAQSdcZxxeGtomUR",
  "key8": "5LP4nuxLBY7X2qo73st839rDUqBD8x3L3gkukMRJvBbrMzgmFUMHm7bopkhC2aU73w63aXmCmMbEuKRMVDb7EbCi",
  "key9": "5qGWYs9zqG7FmSvKdK8PwWcihbfwy2YubednNghq8PTr93HmFt1vTuqcPPHmBf2Ab2uaVjC74RzEd2VHrMB11MqZ",
  "key10": "38yu22TehnGDTrLkPFnAzxgV9x8LEu8kGvsviowX86Gj9t4hCWnjyTGZ7iwXzQ6NE9BkFqPeb3RjvLXSG9RtXBpj",
  "key11": "2yH12Buq4u3NiHVzkGupwnk4mpGfQeDy4DLVBiPfo49sbpif3WBgZQD5PJgiAoeMBCXJhoV1Z8Sp2dyeyXW4xydL",
  "key12": "3Fth2kZsHxbAxjQieHHhtcQH9NwZgzBLF95onYYNuez1owyGaGcNCwHYLUt82kP7zRq4vq3P9crkVK5ihe7WJa4U",
  "key13": "SyU52ZBpo8R6vProoavejZE1EEvGQuHWJkqteqVzpgbJ7PPsoN3Mdc4Nj1vPED58SFv3s2R8VXo19H4BnTnQaMS",
  "key14": "3Q5fo7Ez4KuKJ8b82QazUva2XThU2YX1zrQS6f5Y82RdUELf1A8fmyAhRDLo6TWGorFyq4tMEVAo3Th3jG5EENTL",
  "key15": "TqRkht4owGUfwh9mHjMX14YWtvtkoNfADpvBzER6rnqrpB88VjgPvfZXnXXWcefpaKwQxuBdjofE2xWuwTd2y3A",
  "key16": "5DdFuC2tgVS1jeszaMsDV16k33bWGRit5gqR5y4mKnBd1FZgZQaXHFiJvViocveuWW6EThv9dWr58ransrKEcSNz",
  "key17": "2LhWbBTE6bbQvTyuYibr7TE8ZB1mLXwwKKX5mpuEZ3beM5mqsfpS4xLeo6ttUGZsaYUNG4KpcEpdjsv2S1ox68Ka",
  "key18": "2Jb6mBMWFmEHg5gSrkBwwLBxZm12VHuuS9jbN1mB1KS9dv7mFk2mcBguuoKzcEyxCwiw1Dsjj3uAJs25jP3rL78Q",
  "key19": "t637XVkHzNpt4kC2BegeUHqdohTMUJN4L7pPiPTWGpzuVLHYDxop5tBsmVkSmCdFShejpxBMNPDaDBYAPoAarGC",
  "key20": "2Y1h8KtAZrqkUnhyUZGcTKSJNnj8gkJWudi4gYVKyNiFFo6jNeZzXFY6E3G9TqMnmz39YAoC6pJXicVuYUjzz7UM",
  "key21": "3FuxTD48bnRqMo55mx2zNaZpAPkqqqniBGJVk2RYA9cwh4jUmJZhzLF9Nwh8YMvihbnpX5WTNvyeH2yfEXKKTaCo",
  "key22": "5CT8g3RhRLwpZ4agYwoPoetSHp1SDC8hTxSpVpaMR4X8B6EwgCXZimY28jN62uR5hLQE8pfDP6eZYofVfbvKiByG",
  "key23": "5XNUiUeWrUZ7or4o32GVXLZXSLf33pBuT691EL8yExG16HjJ2QBe5CmbxiJGtrA3renWRkNkB8579cnSVH266RPA",
  "key24": "4LPyKbrQnWaatKHpkGfUtwTUMhnozEtVckTripwwP2dXtTtSLDSknhwBKZdkWMWqaUAEhM33ctrmhb8AnurkWq9",
  "key25": "27kqCuzaxQws8GB2awbMSep3URHShW1SFrUERetqGqpBY86iaZkaoxM7tKwNgkKdq2qg4BAwRXjcBgNRDJGezk2S",
  "key26": "5c5JyWfMag1PppeFzs4YvgtBxUbVJYjNjeb9aUgQwTfQJ4QZXB1c3L5LZhiBEcxTyVagfx4eExJbPCPRxnwx7mAd",
  "key27": "SbkzxYWaUC3b4h1hzCudGu5iprJVifgCFHoTBR6xzhLjttJtovh9n5hJSTvVdZH7G7fYHiWce45NL4UaE1KLUok",
  "key28": "37ZWPGh55KtwkRehpWqfZXSPcgpNCVXu93FTpKmUVcmpbAnCrm7BDszARbiHVsnkfTmnac7C8nXdQFCd4YV2D9Jo",
  "key29": "wj9QJpfAkPxNHgEZRGLb6TTzdm1thaehv2Yi2664mvWYsFD3C3vn3TywUYjB6AEWxcHEPAYAuzTVqd8Xc64f1A1",
  "key30": "8E7jzXBfqiMRan8YipPpyAbWcAnBtFyBMw9xKVJTMGajQeofFHPwTAT9FgJsVzqDtavnbMMFhfYsSkJ2TV25t6H",
  "key31": "3tifX5FRPyfmQmgv3DsCjwDJcY3DU7AbgUwzZy7Tuvv5o31Z8tjbcVrrmQZ8GADatGPD3se7VgkEQHaXbbvS2Vi8",
  "key32": "4jVQNNxWy7c88QKbn3RB8btAoqAjvG67cPkdX6QmqUHkSJScPuvkSn6NfiNgEACorp35DSfnQrR2oKkKH7YaS6pE",
  "key33": "662xqYGry687KEWPr1smqfNMjPzWu3kaFLNRw5vUux8hwgtVtL9Jkazmhca1UmpstkfZ4KGtz6DEhg6kWW4suMy2",
  "key34": "2xgJr2bSja12Zeg4LgFJVb57teapwaTNkGJtTMvk5Fs79jQtXZG6GJ1qggvZXTwN613nbwrmzChkHs2aRTdeHwZM",
  "key35": "61pEzH5z1rj7hp55cvbXhgxjvVCdNRwXZQubtgTFuoZxH4aN5ZgaRSJDUpT1vVNVjg1SFMTha3sfGvXKasYYuzeX",
  "key36": "4fiXxgTeNv28hxrUVnR2j6fUF1d63GcVWLPxVk1FHqdYMv1ScD2TPBdXRfHSTbdmNGDdS33NUUjHvLMHr8STZjH9",
  "key37": "PecSCbUaMFzVWZ9JjN6fPSKk16CLpA6Hgods5DjedJhQdBkqJ7RHeRCc9tcNJb9aRzY4ovpHxuwTGmRjB3hxsSq",
  "key38": "ZbFjrFNhjGRKnGobDUDzb7wpNcg9vvvf8a5dDfdL1qHc1aHsVsVWaQSvhp6LejUKtgwa9C1rxEVW8viw6bTRnoV",
  "key39": "5DBKJRX4n71KAXdrgjHtyXdZEZwCehhBFEkHH997eHFV3aUqfbtk8fKsFzrPtUsPeimPDU3hg5g6LZNbFhRHQEpT",
  "key40": "5DvTx1pYqEJXGYLyZ1i3ZrmS26x4Zw91dHA6Q5KnoHBHVQsMJn4eZWgLerqQTkm4e7dStpkhedWNDDo8ZNFmf9RU"
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

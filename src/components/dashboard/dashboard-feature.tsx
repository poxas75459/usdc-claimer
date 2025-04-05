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
    "2xmaMuwhCAyUWK9QjjFihqE9AyNGmk8u3jnX8ayaoXHDxWLvsC5jCgqFsFqMcEAZSsNq8TwsdJ7cUkxmN74vNWb5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dM46NfmXo5yzxmjtmA5H3fZ3kbMtFvfT8QQWkCiMf5FcA5ozWhKcmRDsmwNA31xogAQPVN3g7VUYkTqyGJadLHc",
  "key1": "4ezy56Qm2BrsRyxjewrcLqwdVARiKqpYTCeZo61KaY2SDQKkiNzATY4cu5vRZu4vgmZx42xMzMrC1FpcnKvUY6wM",
  "key2": "44Rcdx3SYveY5dcenzDS6CzhjYM3RYCGV1xEofwwCHZyfGimns1jQMm3oSNAWauosLHQtQgAzNcRQHzu1r4P5oaN",
  "key3": "2VMiD6uwKvYBpodLkzkbhHYFgSjHzYascd7uoAcNjLxENkUNLSM1vpA7SgV5v4PDRoeTbaHPdqQzv67nu6nHa4XM",
  "key4": "rhKf8KFUqcahsCG1cU3TtuSDszZejzCAzAHZFCjFdMMnzRdvGrZGWcbYCdU569tQHZmvBN17ZwmN6Znhj384AVX",
  "key5": "3zv5AR1TFXZ5AJKAbCT9sCEvDNRk2FfXviA8SJYJwKE5LUeBuEaZ8crjpxUjW76LiRoqgPVjEiUPNYcP43BVNXGn",
  "key6": "LSLxWyEjrDB5r7WdePvdfSxQzMQVFkdh458Cq3w6WRTqEcyDwZ8DD9ghZTj2BMSaYAFJSYtcRrV4eNV9PnFpCdm",
  "key7": "2HeA67Lt3utpFeYMaFfUQ2UGYvgeNibCZfvKnbQoft2te7uU39HDRfXjxg4q83Qc4rkYKpBLy2aicjCghmRcK9Ea",
  "key8": "kNkknWUMB46WZFaoczqcn2YPptkc5KeZNtXpsyand2Jsje63KZDy9ihJsESzKGjadtMkxXyHpiNi9ahh8Fe2K3N",
  "key9": "52c8UXpLC9DyMz2Uet5fQDWMGmoFgBdz92cZBPfYe3xGFedwn9E3M2gb4hHbwoFoJnNReBemCsr6EWnBcUM4dXzf",
  "key10": "3QNFFqMff7W2qcZiBKE4em4XnpVLpViwSyhYdss2P6x4g8r2uzxiDBAcWBL5YLHEPPkpDP8PKAWUQc7tw11pTuay",
  "key11": "2ibYReD1AkGZ7krDd12rgg9bYBZ9VEqMTtzFT6HojS7zTi6boTtXU9c8jvRcSMQXUH7MXq2XqKq7k1Xyx1MZkjHC",
  "key12": "4jbksGuw9UUDbXbkdozGBuEooSuZqJab3KryZjzuBCph8JjqComxha2pKtPnbWpfGvcgXsW6fuv7DtVW4Cdr1o4o",
  "key13": "4Vp3eQEPVdx2xhyi4v9dLGrjrkqz55HxpMnE92tvRMUP4GFhq9LJVWK7QnDazsXDBCzsrcLKePYnfWHTzrppo1u9",
  "key14": "5LQY1YgckXMTcMk2fgzYdfz8eS1gPD9JJjphb7DHF8U3KLvC2kmY4rM5iC6dKqZP3NyyQzMQRcdKFjAVgyAnvs89",
  "key15": "3hEUyBH2bJVFLeDpsCvwxBL9s2og87TyLQbm9Xq63838SaWEMbi4bTX9HS2v3w123m4qTokVG81548x1Hxb7HYm3",
  "key16": "43463pyeayr5eZN3Rau9Pq5CbSA3A9xAfRWDK3K7PKnVJmeHTXPY57kUztgbA7SqnuquRojKzDMkxfjnCJ9X2MJN",
  "key17": "ZVPYDrc1f3LuWuFWb1zGbfYZeBhn9YKvcSAqKpu1BNNZ1YRj2K8AgrG5i9ZHgL9rp99ikJ8ZM86DkYhbjn4XKEg",
  "key18": "2PWRVNroCh8kLBF6JX9vyG6v1eNPY4sKFWQZWkbRxCdD1oBvwbezAA6J728kKNoLMsjBFLHF2j1ihnsuvfW1vVy3",
  "key19": "3s9S1u3FmBPEBmsNFjF8CYHZSzakqs6B54QeV7RNHABtX25gAh8vWHwj28hzVhs1Pgyu5wbDgjeSb8PsaNe1aT32",
  "key20": "2jcLqzV2c3bWkWg2QbMu6TgoAhjX1U8NNPegKURTzuy5vicibQAHAkdkDdLwTy4XXWbJMJGHwfmoqi42XRMEF4jf",
  "key21": "Zy66DcNwYd6nsX9rQ3rZpEuQ9Pe5doEQ9pg1ha549XRpqkdbgkT5G43NTC2oAefb1c6Jgd3X4Z1mht7F6f9QbGC",
  "key22": "3XnL1fCf5CpQW92CJn1ezCC83g21Pwbg8JZXk6VEsNqcEYAxEhgoDghw7mLoc2f4hBB7rTPLEKqW2FUSYxGghCse",
  "key23": "4ao37Nf9MXSKeWcFWeTXKDfjWHyAyUx6Ufe6Dk3yXDm3fMCn4Tr6izh2wei35YgMArMwEdexbtjZBvePmrjnsWsw",
  "key24": "3MELHprQAtxXDzAuAcEo9dzna4k3pfJS98gBoHNuozbGodYDJBjzLGHWgspVeyc6oUav1LLtBGyebDWfm8D2Rhpi",
  "key25": "3kmu6dnUsiK6g5puG9GFUznrKaT7SjEpYtJviHAYS93x3RY3uUeuhhdtZoLCDfRUm1uo8RBomSXdbMdvNHLtEY29",
  "key26": "4L7iXDpAAYq9EnYRKgpup5QnCH8qrN1ja8AQ7HBLxwdMvQVvDWyA2tS2Yvihix8Qphq42tpLof2LpxotCwKffjMi",
  "key27": "64ypzu5UY6AUpRKcF5tvE3p17EmYc1tmftrTq1UoD8wfE2pwnd7zmFMV9EX5KyrMAaxFhuHNogzDA2Z2MjFZJp7P",
  "key28": "4bdXEG3bHVo4BsHgGkQtwAprVxdbN31wK28Ys6PxsjTkzaeTydHJQQaXioF7UapsNjyvsu8NhyCBZS297mtP5eKh",
  "key29": "2fVuzhxwsrRL7HGdRfeUoh1d4AVnxsk1C5D2Rf9tyNjAuuatzLfs33vHxKd7966zDqAf3HDoaR6Q8owpFVxfMM7K",
  "key30": "3ERR5sKrFBbTU1A9wrVb5PxHX4S8Abky4trhwMsi1ASX6oP3p2mtD7MmNYznZ1mXk95AasAqkPekoL76hv3MVP3V",
  "key31": "46yVwJdFhCivHAyXymk6ao2FVNgcvqLdSK7dQH8wvorfwxLaGkTBwHVvrP3Ju3eEuqxw6UiRRnpoDSw4YoiRWXTL",
  "key32": "4mRWF63UoZq8ryX9tQ6yhiQyiYr81KzcmNH3CAAr3VarCg5D7aEMCiQ33tRATzpkEWXxur9Z8spbaSdZBQPz2WUe",
  "key33": "2Ey4TpcDDG56vXy8yADBJ8HPYbNqgdjhqurrN8pPRt1wBLbLNiQgntzDvriREvsd4nCdSu8T927uQUE9WDwDcp4h",
  "key34": "4UsWyKbafZ6GxaYEgbFhUvbaxqZXNos6vqLGf7k7fSpT7e5u49tuYAp66F2saLB4c5U4jNVFeCeDjrCRawiRJvRE",
  "key35": "5RkPmPk7ACRmnjMGSqtYr5st6nXhYRz5G5rKHpz2GqZauknC6r1PpKKLYzoot2YVDpZkrX2ivTRxocBE27Y62p3p",
  "key36": "3Ey7KYrAKCuR5FRTKSrvhJ5iAzkoYAiBGMN56wrqhuXyK2LU3Ad2LnVttnraReDaPCHgHyRPLiFM8h48XLy1x1d6",
  "key37": "22Lhpk73YrtPuX8nTSxjMBUTxuzzw3xE8zG3cDXSpCQfzZpamU7L6tfehVLVtWMtNYQ3Ei2sebACwhRahJSy8dna",
  "key38": "2waarYabs3QSD6pVHEkjwrCXA75m5srhXpxzwBgmPgehVwqWfVEF9vg9En2CQvYEHqx8syJP6n6YBpbgRmJ3XhGW",
  "key39": "3eBpqxQvw3cGkCD12RJEd6QCSeD1wxUopwKACA1wQ5VYyaQyEb85Abp3WHH78ve74UMbmh2QDZQTwTnUnPHGkiS6",
  "key40": "4vLcuFLc82QRjZufmehtSgsM4aMFzyEuvNE1286kX9PEWbkJMUGMDFQaTEkYrZ1jZbRnpcV1HruSLD65uDf5eW2T",
  "key41": "5v5CWesZhCLRuyYbLrM3rqCbXUy7VXf2YKNrtSs7zap8mMZE9Ve9pnD63w1X56s6mSRsVhYgcrPrYS2KWKXaMr7h",
  "key42": "2AsVGz9KArUFRX5TRzhWyP9862YkhunaGo7j2HS2qoee75nkzsTs5nuuQSyPwRgz6EjMZ2hqACZCg4miSpeuGpMm",
  "key43": "5a4FuXXn6GuifjsLQcudTgiSUjW7hxErMe6h5tvgeG9xjsq7hnpNYEKU1fPwGp6tS7J6Kp2WsR8UMidpzhA63BCF",
  "key44": "63uuJ8G3moDXgEKidTrVo6Q9zDDsTNFEWrfc82UkBcj8FCcNTTtZ7L5VUj5QcyPCxxNgRNSSUh6A7aCnFPz899dU",
  "key45": "5PFdc4ggsxvUqFqHCwcZufQ4ZqsQqzRZHtJG6CNv3wF3VKsHibDgvs87szVPeGTxuQvLwp4vn2HRp3vEW74N4VY4",
  "key46": "2s2KLPeDUf7pFQSHuezDLsnZ75VtieepK5KQzRbmAfX4jpQoNugYvVTPnp6inz6NV9riKXR1XZvjipMmsNasVdBe",
  "key47": "4ttYhqGpYkLZeL8D5McGMAhaW6woNco5waaogP7YxJ732X87hhgMpCBVixSwUwvzBnzAWxujjQWHypMRfnYVBLVr",
  "key48": "2htGS48vAsjmhkoTps4epAG8mbMe4qfLNUzCwQM24xTWVu1SZJSP63qV1uWbDdUAdjkXeDKRFdtFyeG13JiVWkCc",
  "key49": "EkSoubZzR9mmYTHLTWyFGF4fANHMo3ZmdMhwY6zVwmwnYyVqMwsRHEH2GAaYGS6WdxLpJbxrBvrZ7UBi72kcr2p"
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

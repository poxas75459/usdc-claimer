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
    "a9A6wgjMZ6y2wSWZkorUM1fqLLu2YGphHmxQQHJ51Lht9diUWmRhny2fQwpVeEpjmbnHAiZ1aWcD1QBLEXsTcYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mnBs6xZWxvRjr7vYDes12UGVwWoEMF36orAus99PGgaRZSWGwtUF1MQpUNDpYS5LGgNcScyG4qkW9giRCfz8yr6",
  "key1": "2x2hWUnSakF6EbA92ge2WxH8wi66YE1v5zgXW3SPKNUUpm9rtUcNxC2WqLBdxzzyAtQiRcC5TWt66VHXvXHGhPoY",
  "key2": "29JKfeaV8hgaQVnSRQzBWSSPSTacxc4N8MvaKmazJRM5KMxsiDu17zAiXCLMLnguzagmoYLExt8GdB8KdgJuVa9u",
  "key3": "2DU2pb525h2zC9y8VtpdSKDs7ZeF9k1H6m6fTjd8kYaD4RHSaiT5tmafu4UoHxuULYttZ18ThjzoAktqDPW9i3sU",
  "key4": "5PB6JaimSo52i5LMNEFsNNGGKaAzZ88ZTdHEXVkrUs4EX39U8bVtez1S82Pe2WEiwaABfSkYWuoe8aemHSYhRnG7",
  "key5": "vhoFxvdNWuiSSz5RaHSoGhbwEgHD9YxD8Ymnzo8kmDzqnq4MNC7cb2RPWqWh6CmvBKtSY3EVtKPpiBgB1JXsq31",
  "key6": "2sN4iAEeoCgLFb5yTkBgzkfJcdkCn3yotuaoKhSadrt8L82TotC21TzpPgsE4eB3KtpDU3J22TRP2t8NV2oQCRAM",
  "key7": "4VKgJquYi6vsujVBi3AV7q3xP5fbyCpKLNiPdNGH6g3v9dDQWX9wCZR7Eq7BM6957bhU1rYtFpCaw8LY1D5LHBzW",
  "key8": "NoFLfbeh3ogVyfEF1xx8ui3Pk7QkWvouqU64eiFUMyyEXwY3Ptu1EmXjmEZdXVG5KFtVoNeyX2Rc2S2ZE5Mr61J",
  "key9": "5THCA4VWq1RnJV48oXuUm1SzoRUr6of7h7WtyLmY5YYwjFvWwVMLrjzfszbaK5YoX3ZW4ZYoaaNeSYs9KvbH9S3r",
  "key10": "25WG3Y8M3isq6qrQAW8YTR5sePtGjF9X8VZdPwno1PdY2shvxQ5hFUTKWVwETiPD4QyNPJMiCRJqu36pqigfvLB2",
  "key11": "54yLaREuNVWx3aSLtLsuAex1RtfDdcqZYPZFLjdqVBeS2JhRumXxwAT76ewKfvYGA1DJUEiNBouAbBQojbqscSNu",
  "key12": "2VgS2jspDydxeMmgC6jBbEVrfRPecy34fSNE4GWUpNDEnQbUw8Wze1wX3BqA5wfWzFH9VM15pAAWLve14PNcaGMf",
  "key13": "3VsmMKP4ZCovnAgKqhmskJtBqfxoHfBTbRaoF3SyGgNGUyBACdjLoXkwn1Lcm51iE4y4UpfGDq7bhRewWnoCoqK1",
  "key14": "2qCYF8TRJPuaRAdhYQ3wiWMRcUr5uD7Y2DKYYK2VFHhtWriZu89QB3wTG7mpFJJySj7vVcCyUkyWFusRBoEJqfgo",
  "key15": "5yFgSn7px27oaCkJ5yveLPNUnSUGbJsy6sYXaAb9HKWCFVVjHX2dagt6dtZ1xdrhQ5iqpm2RuFSh3HAkockNZ7Yo",
  "key16": "S1QgBKn9aL1f1fvfkwcfxzEh6kmoLSQiTxj63LccSzuzWRWLFuRJy98Wj1jN9snCBJE82Hz8TJJjQaJHcmhtTrU",
  "key17": "3pQRikoF7rfgAANciA7YCguCjW6rNKEBajut3nbLqfmG91qAuTP5fkXerJ4HhPbtJPk3q8WbyyZChu3xnLvugm6q",
  "key18": "3pAB2QcW9yKQsK19XnZdr3dWtAxmPxTfnWMgE2BnEisX4rbhwN4VWeAjAB1DkyQUeoLVUPg3FNLYwKN4EaN8H8KN",
  "key19": "4ThaJ6rMqu7T3CnGb19PFCpMRVtoUkdcsMVXESgyniuGuVxSA6QzorXQBDEVc5KE56qXcZ8KdrBWh4KLxRKwwCAm",
  "key20": "5cHy2puJRWfGn1Yc4CSC7Rbp3yRE2T9usYx6TripTW3hwoLJojqesJaCRdZymCGixYBaGGAx2fdVugXsBD3prQgP",
  "key21": "4nbujXYBQkC4bezq2LrVTUML2d2gsNWZinPw2ys7NjPvgt7fWxKbEs5vsoMiQ3bUedG58i2Rt2sYCa4BFv1Teqfi",
  "key22": "4ja3rYJ3Z1tpp4NyNC6TzmAR7fXwCeKsX3Hxd31FAaDKxEg97vpoKPAaRQm6D2bT31UubkHggZYnURRfgM5hHf75",
  "key23": "3R7rdD5rxrinQmMU3of2wBdwv1Gup9iBqQKcZFiax3oJxJYsqrVmxoBZUJcx4xW8kLBzi6HNSUMnW8fRFMPcx1JK",
  "key24": "4cdgWSDmL41YfywEmKyVKGUE6iJ8Pdk2JTntXysSh1249iq5YZHa81kr6ZQGF4eEmGpvUmgcSAKXZCbgHN3GD9nB",
  "key25": "F2XTHxFXunHvXRvcShpyocN7gfTAdN9fy1huMYssmmQRvGDzLnmSaP1Ttouuuf6hrVXjk28DW6EYXbwoeR8ZTew",
  "key26": "5HpDtJ7Ab2B74YxR1YsrekdR56yVKTbKFFqcgAfqDzM1YkT8hyHENpiNDqAcuLyVA4MtARnPMLzmZpThbT7UoNQi",
  "key27": "3jkARLV1cZHsyrxNeWjz8wACQxhv6gyVfFbFrxugc7wkhS9LtxPdpKsXY9UaWJj3tmhBZrZpqC3wMupTVwg5v8HN",
  "key28": "5XRHcftpwks5zQT2ZUE9CiZJsPxsnFBLMQ6KjJmRfceFdpkXJPLtsHTnVJ5x9n1DvDd84oMJCSABBUS9eA5tubz4",
  "key29": "bTyj9HooLmm4gQNxZUjxKc5uMkFeLkJMLy5KgNdBzJx4s1SaHuXG7E5ahEEz8o1hCyB5iJeRLbiAnmrinCt1AdB",
  "key30": "58ugfKNNUoLBEhkBZKvenYfXfJKiVo7AszyGLe2He6dDQULrQcGsgN2z7QJ5jic5eHKxy9fLPaxewL6gxieyGwVX",
  "key31": "5CTUGC1iHjTLPjSZc823Bwd9nndvk68nw37Du27qfstfPn1GaZrxADKkJLEUxA8FexcJ8pTMsj6wVoXNKH59apj8",
  "key32": "23TpZUPaBJuhhgcDr34D49bFEYcUnFA4eWpV1G4y2MtJ49DxkswWE66GzG2m6Rzi4GtgRiWcRAmgX2FrqMz7WXj8",
  "key33": "2LisHRoiMAvA4VB9hKDFfqthixKsVJasj21KyLr3F2xY7YeCW8yZ8UD4yrtdKejVM3tzaPJPRVbJS3H2fhuNgrdS",
  "key34": "3pmJGPTZHsQD9Lvcfjtb9DztaMH4nSQD77xJBM4CuKCib2pQPpdxrWYBHV28m4iMYr5piYzQs76huxHFmjGcji4o",
  "key35": "3DY4saUb8mhMT2rStFdzuxZtdpN4kr2X2AtxKhTAcQiaHJEHd8GqoiWZke9yW4AYmU5YuPn2LBTrZq1Y68uLhbqc",
  "key36": "qpYcs34KjsKLzr8srWcQ2zuisDgrTG9qMVsnZvos9PcCMAU25i59Dd8jrRXUrK2zPP4RHKckuF6Zg6Ui2hrMqF5"
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

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
    "3jHvbYPMuhn3FFCs4Jk3bC24At86c9hpGu3zc25ZrpSxpSdQS4LBysxHghLZtK6dNCYATHbmSCnQDeR56uLtSBAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SqHkWL1v7BeTHYHvRdfp5RoXcsrjhxAUajzKPvhKHzZ65zMVcLaiM2TqvTVwV7HTXZ7uH9SRYhCpgoVeyecDy3x",
  "key1": "55PeX3oEkCQGJAfzSeTx3VoJ98UayiYToJJPVCp4jGzk7AZwtkxSQjczBUMR8EFbXcpHDdTUgmaLwGbFiN3m8Phm",
  "key2": "51asPd1H9D3LZebV7ocE61nX2S2NnuyvtCwXwtmRfPoyXSSJsenGYWkEB4HcGbCtLTuZFDWKguH9W5myUnanKGqe",
  "key3": "2VC7NYn4v6iMzrtsgTgMUdcJfx773Z9CNAH9oirtBCRs6KXZW1yi76uBERTiiLx9bHDZy5FecCn4WN4jZbaCraFt",
  "key4": "2G6oxGZmh7QuknqbubLUsAc89T1rrzE7TGkv5mLwZt3h9NJ4gMXeuDVi4S5mxsxMBLnqisUEM34RomVroPt1PWGR",
  "key5": "5eH6x6f3YYJqLowJbyAsDyiCZh6UPbFPmCDyynP76TRvhYn7QvPodmVGgoL3LfQjshPS1idtSHvfmFam8TiZPBQx",
  "key6": "4s4CAG9mf7XMCHUPtHhGmaLUpUN4nXEjE3HYn68uk732TEppudBnaqeAhqGepaq5h4UDaUf8LY7CrP7JetZ1PCqS",
  "key7": "2dcS78zi43nbR8X3bpXmEjLPsCgp2q2AEgGBPxv2qGtnsnbCM24AWdLDwh8Srsfc3v9QhmSQSM3927aDHgeZw4kv",
  "key8": "5DHKjLAm5e7C81dWdu6S8ubH2HdJiHjnV2QTpRWXaqcSQfnkWJ6tpVhrCkYS8xYt8GifWdhdr9zBeetiPXqEGUMy",
  "key9": "2erRpuKGJ6g1vw8Lf4RTjJeWG1o22Jqf11P5VexEas8weHdWszNNQoX7orN8T5jbUtpVzX79tFaXE7pJtcegGgBF",
  "key10": "mKzk96wejcGjuxXeVNdizyPjB5QLXx56HPJpqHoMDs3wmej1tACcegiqg6QD83qZ2BNHFDbiHgiVknW9jrBrY8Z",
  "key11": "5z8daYpDieSMv6Bj1CXJfbDwPu72SDzgWCmkMXG3TLqXPgUbBBD3BpJqwXzhA9BGFsAAisvTjmDHzPNfxc7txK2J",
  "key12": "4sy5gdmNskEgN2JjU649MUtPZnP5KiQzvDg4zBCPCekLMBbtueWZLH7sksv6cajtmQmLFe9evwUQXMWFt6MtrMrB",
  "key13": "u7W4cYVDSHHxY2aff6Dtf2rAn3tBRQCpLbSLVgCnwj6nQcATSA9e8XRFtKGpzB67oBJXbBoBDKbjyr5WwatKUb4",
  "key14": "fRSFU513jwzSBgjYRNgAVxWhCZ2geDPWyd5pZeexM1QS4baviiwdjvYew1nfCMRQZvsULFYtWTMk9mjK2cTdfCc",
  "key15": "HsNvmSUzL5HC1EAcizWwzd6zMA9c5e3XHVu3PnEqXLdzzrXMThPMmqp6p1q5nNkhN5ooVWApSTfXUX2gMmQcsWi",
  "key16": "3tKisJYY8vnqafofLJZMkozpepLNGztZncT1tj4ctWApvke1bxj3oGTrcPKz2512wyoG13n5kuQTdNdRA7TayxPT",
  "key17": "5uqKGLApymmENY5ZGja8jyCk57Y7rVVbLd14wagQ7utVWpVSy5FqVvex5rATjBhCSb5gA9zJMEXAKJ2UgMyDWDro",
  "key18": "5C4eGFe359VqD93dbjhTRHNz3MRqPrSjzZZNq56PNRRw3ESvy2qqeHQ54df8nCTg1PhiyhVBeUjuJu4eXJmvLkHo",
  "key19": "24Sh1hibodS42emT9EFDzAKXbjeESLFTrS8AnKM2P6TKsHB9PTRtzCLJFPXVrjsBzF4565E7ddCJXA1zb6QN9NbL",
  "key20": "56soGL79j9LhfJD8jXiqHewYaZVFqBz5zdzjoqzczaXUCaRYxMGNh3W2VbfBGaX2tv5gj4vSxwJN3xNfZ4PvbYBp",
  "key21": "UP7W95tGYmUqCd5LCmhX6vAxCMTZez4gyj9zKcRmLFPQbhb5RgmWJXRj4o5SppXGuF4hCEv549iHG77H2GfqD3Q",
  "key22": "2oGVuMjoGs9qJuR9oKvQCb5tuH5huycDsuNdmwqVyhsHptz5GeD9WrHhTvgfYN2F4j36tjvx2JLwYiXrJdDcACNL",
  "key23": "2XpKLKHHdh4jTDMExZSb62XqvcT5BaVMiU2vd9MXSNGs7jfEEvF1ErY2tjQHA6rCo5LneGGKas58B8QrSJ5zdsVT",
  "key24": "2cKYaeRfkQAhjZLGscW2Nhg5wHVinNPUWjg5uXV75wsM4s5fW9sgc6anhPTfDAwf9pvE9PZYjtH55qjKoJtUqY3J",
  "key25": "NcwQD2uWt6YuMg5fJGWRVNHARCBpLPTV5dY7b2EK7SqpURVYR6TYjhJPTaF7YmrGis8kjbpsFt9r3kHrifDxh3U",
  "key26": "4EwzK4UBxiJitgEpHuJPYAJmtmKaMSDnvaBG1fgJKCucvEjECRvkrC56uzWsN51K1Mzknn1nwN43eSUnZrv2mW2n",
  "key27": "2TCJXQn26cgrqJCCvtTRHx69RFTTBXPLhaJW2FThpzuraNtmEMjpsNfYKSR36oSbR3M21JbecH77arTf3sba8PFo",
  "key28": "4XWyt36SbfShhGUvw4UriLT2f9z47121nsS4FEU4NjhpZxY7zK8usEY9nXPrCwia9XPYNVYJRYZBtPyT147cuCyQ",
  "key29": "2EeFtRnSjAuPnmZSctSxppbnHzSxZ47t28bEYS8HasVfMQJhpYdSCZKDqZWdWmDDz7W6W3jSKhw4w4HJPCFMJEXE",
  "key30": "2BKKJr55GHNpsRj5FzhdgBThMsuaF547BFfQcMoXDsmw3SJryrRNinJAd22JRKKD76tLFmqzPPJheZ8ihoLXNWTy",
  "key31": "gEM3nPavCXttjYh1Yaa5ZpgMmpdN1F8m7FSKYK64SyjD77Ri1qKwATJs3Rv78h7EDr8128FjP3s7KozU44faGmG"
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

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
    "2vSmpNfuX1XR3rJs6Bf4meFt7aycdhE2kyanqBZLNyF3eXJD7iX83AVwi3RXqHpWh9PxrSFenvgcKuaofXK8Ev5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jMqLeeZhcHKXPYvkzh5vYcQa278Xs1khrMR6iBNp2wCL7t6ph14LDcDde3PHZ6FBs5yBfgEVe2TySscVogcex5g",
  "key1": "g3Sz9zyL1ENmM94EebxQEkHtW3f1ikPcHDY23KnQz1burL21PnnUgQpHmNz4AezpM7pdvhoLfVuntiA3p73q2Qq",
  "key2": "2wMDuMhY2xT7YTXYCmKW1AmzqPbGHqcEn6khzYMEgiHroEF3xQh1BdnFa3nXQJF6i3km9QFcsjLJng6GgXe2RMrW",
  "key3": "3QjbH9EQcumWBFzzMe1e1trNXAK83fTmiJVPaWmcvFvoHSuFkbYtWhPf1NQ356KVTFAG9yB6u9duSRFqBRFaY4pb",
  "key4": "3THEYYwLywrPJ9Qpcab6oxL4h4v4HqGoii8UZTJp5pLwmvQWToHbhzfgMi16QxZzid2cN2Wzsqo4B53uhhEqLExA",
  "key5": "3A6vToL6mrr3z3gtveF3jaDp3emt6Y7MxwtC2u9n4KPTV94fobb1RGpR4PeZ4L5hdVfxLJXhvW7WYLHhPN8MDAQY",
  "key6": "WHURDHZAdoXPnQihaA3UuZn9BTPQEaG268c6sBWJG6tKA74bbLPJj2vidD6gVCCEdeUVAidkegCiSsYi148wLmX",
  "key7": "39LJfnsebQfStAVX7P8x11wLAE6WZ2HQ18KrBVY58scmbXyszKmwcn52zRedL2JuemqHw7mrKBKpE6x6tLPzzrPK",
  "key8": "5mK2bnytmoMVBsyZHAPzmmfJMLDWXQmQ4eczKfAUuZKCk4Vr3uoTwuxHZ7bCvs8UyGKs5vr3PuVrZobjv1QYz8UW",
  "key9": "64Vj3NfocTbT7xP3Zm737va7m8CB5YeXRqtRefBmxzYuuaguiyfumuXe7iXrBqiHUKhnrGYhLa5RxahojXxe3kJK",
  "key10": "3czaywRnVNnEmj3DFvBUTXLxE82RjFYBfpuaGA8p8bmTBWyRVbzWYXSaA1RSbR5bnssrAbwoUJeRjpm1yJ9KGPXE",
  "key11": "4owzRg7fqR4CZmxVcgRsuGA21xUGN38EXvdTSgpDUwsL2baS9kpJUBqPQqq35Eg8aQrrW5LMsizCuQ3iVkpyoAfx",
  "key12": "2YCZ9PvKYkpLSztECWecr8ETd1rasc2RnLnLjWAjqgqqzyAszcoFZPGiiXXPKB6jWknyD64jgsA19zUotfLYgbpv",
  "key13": "3VvbWi5ZVHGVnoHXXWadGnyS8g3S2uyCtbkqBtZuR2gQ9aBjE6YNzRSqpxhZbu7i7Cioj4d93umibo67CqTcjjVA",
  "key14": "4j9kc9eefZn3nASA7SGBBQErviiwesmHEc2FJwGn8pUSWSGtkVV5PAbCsSMGRhWBe96NXLZUottcfG8Gc7KQMRaF",
  "key15": "3BTMpYdTRqPcFjjhTHLmwa73rbtqRBjYG2k748BgY9wE9yNQ9GHYDPurYoZVUXKz1Yn8yGou43GEoasW7gwd1YbZ",
  "key16": "66aqstgSatUVMtW1GTQVPRM1QfmBMSRhBgiW95NYzb3fLK6di1gmaJQaFNqN6CbEVFhvEgdH9gVJBhyLfgjYN5Kv",
  "key17": "58y1xSjkRCdpCFrMnuB1s92MqnWgAryLL5bc3Yi7DJL15nuJ6jdgQgzHaL7tEBv9JyMRZrY89SsDtsj9Uu4nC5f",
  "key18": "4kjasEwtQPzc73WhbEMY6nQXCKRPwBfy5b4X1MJ3dFX6tQc6i176j1Jg7QpvLqbeGeGky8C4UMh4mgZUPwgmPcv8",
  "key19": "2Qy5pSfRaJxdik6wx9f22HDWq7eNQafa22VDcbR7CLTAQ56fqU1jnLQu4F7Zt5vqoUw4nZXXncjd7LeQh2PwKXLA",
  "key20": "56f4VWcgeCvqbkCnPx6RFKr1U1en5VN2MqemMhK9ZCYBUHvrjKoK7kBbEmKekxbAfvoyjWU2heMVmSigmdPtJCR1",
  "key21": "45sccjtXv5wQ9LBLZbCBcqDBycMp9xjLBUQ1CB99pQic1VPu1T7c2tTrvxASUp2hWP6TcoVMZTzURnLyC4rnqHGB",
  "key22": "3za88Vwh75kcuVbEnZYkJ9yK6H39BwKKtjk1DCxqFXVnxGHdraWn2WNbiPZmT4hFZA3XZz6QQt6m8PjBXqG7zjC1",
  "key23": "4tFzMwvGcv23FyuyTgq1kPJaMLZLwHhyzDgK6WpuQPrsp5aFeVdedGCd92wF5Z8AeVk72xu6wuTsD48qnmBQn8na",
  "key24": "59z6LsyhbhJDZf7zmfiLqtDggKd3qisKsKn52nUpjAeV2bHy2qRomgVMCHrKmR1HsJX6s4JCqQyRs6JfV6XdrXii",
  "key25": "5nouanfAN7gbiRTptiYCr1W2sQL4iMirY7e1M5W4Fk4x7CtAVsx36VAgn5QBCFrEzt41PqqkbpyrpnaZMaEMDq8U",
  "key26": "5KyD3bqmQ62PxGtw9Hx71cmWC5C4HoMAtQeGjZey4SJXVVM5yq2YJaCRTvhA5rpFihvBF3ff6Na9BGNWpnP5acLp",
  "key27": "4yKiZWHb7igYHisWTfVPXhTV3WYaQhugJKJXKy83HKXdyTu7RdNteUmvbxQ2ZEdojwwU9eT4C97LtRvDZirPCWrL",
  "key28": "cS4BBk13bA9S8E4ijtpg6uKJTf7p7Vfj9ZbvfrGCeP5pvsvCQWgCmSr5WeogBvdUVu6ZSD8XEgaFEi9CaVXWyv3",
  "key29": "3rDacNknH8ftQWcfHq2i13myB9T4h9LHRrPEA4ereKCnnTkP263gHjG9LsE2PWT9YWo3DyrQU9PP6DPzDjtMXVHJ",
  "key30": "36Ts4Xed81y4cCF5DV8caV31xFx7Ats1TgnUnUJDGicWiChF1nbw6WydXqL9EBMMdv2gfiVmn5qWNetvMYxyTWki",
  "key31": "5D7Z1nNbK8YjoAG8ExZrbcbrhrCD6Z3CJ1N7xE2NFK4sCREbnXfdV4TF1VHJS71m6TxEF7YcV2RSxZiKbeKVSPmp",
  "key32": "4FHVgqqrpbgzYHFWPAzh9ybv6GPmqbHddxji2jTiYiyWjbt6FfLkEAWJ7PRktHrdQkfS4fBvgEaLHjNbpWznFsoc",
  "key33": "3zuLZHcmvwmgDDdvWpjih6Wftxybw6rA8xExUATNtZsg6Rxk2fRGshuHYKm381NCUqLoWYBVzSA2zfjHaJfKZmfe",
  "key34": "y5KrijNq7pBKiRWh4Qg2bHRueTa2aoK1kvG9zAVpLPCR87gnzrMedLMLWXjoUgCTwQfLXSVmBRMqKqq4mjj3VhB",
  "key35": "3LYqNLkemT3wuMeeoEE5DosisXTT2tyAXhoHw3zS5HYzTUD6KxgHHk8NPGYMEm7m4KB8RzJpXYwUu9SQgxtMZ89L",
  "key36": "4ZUGxdQDD1NMHVAJHwN8Gif6wNVRapfVos9W5Kzkyut2fq6NHP2itun2j8WPcYcHvPQfVyHLPL8Wx4HUhv8Jxy9r",
  "key37": "2U5ZprdPTQJHbgjqsmbrwVdiTaGjPCrdLcQoDzd3hRa1WL4EYckLm7bTr4QZr1RbPBeh2ZEPiEaA2AnLGWLpNb9M",
  "key38": "4FP2ZEgmxpEDToq49Y5ye5TjC5UBLC24tBM4NthVaPDTg8mtisC4KxADAzfaM4591uXhaccu38yprghoBQVn81VX"
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

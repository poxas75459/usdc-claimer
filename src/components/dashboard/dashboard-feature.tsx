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
    "udxYarv2jd3qhfafdmCq4hS36WgYARDqcbN7EXPVzXn8jdsGGStM29QqiRua9LCMRmiV25zBS8Dx2zcFPpgpTUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kx8skHWGVy8qzsxJbUv77pzTkVEdfh98mmW2VDDwEc4JLLu2YMyS3eiWCgxR2F7L6V83FxRkTEWV9h5EVdekrNU",
  "key1": "5A6fjpkfTuaGmeHsEFKQx1VffWHxjz2eNPsBR7jpLWKbscKvdwz7aCZhUYRjG1dZ1sgUqLrsSTEWCyHL9WyXtaBF",
  "key2": "4hKUwbGcvhKzrad8iqZfGsLRbDwHmDRpB3AvTWF9od8iY8JuGPM5CYSEDmdtEWh6FA4oppS4tZ5LVspUn2Rfze5g",
  "key3": "2qc9gt9QayiWqr6mBHuC1BVtA3H6YvSQxo1HyU8SrVLEWakDWPng2Uf7epSKzKL3TeJYH4XZdSVmru5kLCoEaiUW",
  "key4": "4AmJ1spJgdDmKoLmP6VZ6Z43ycB1Z6oveqiJTaMa71vb2SwLXK2MaMiqXHjgeuVwZicUMiKhGwz41EponiaLB7k3",
  "key5": "5J6A9vg1rJHSHztaT4rJupGBs6c3e4qFoC3mFwsJBVzW7pyXtKR8vCwG3QR3p9vXCmycDKdthn39UtHCdfA1d8TP",
  "key6": "V4ypC5sfwdX2jc4peRF5jwSMpejjh2SH7f8hdHGRAgftb8D95Jbw2FeX18CG7RSEpeYMT6N5hohPDbv1ghWuqMZ",
  "key7": "5pkjQcepisdB9vkf1zgyQ9vZwXE41cJ1SuRoiQPssQR6BKfnouz7RrAbxH7ihasjFdzP3KSz5VVEHnenw8VvveJm",
  "key8": "4rEpzSjK6EiXzV1ysb4MADaNH9hZYfpuaCG5S9WYDByFdLcf4oWBD16Msj9NgzME4noeAvCwgF7SN53F5MgsVgDx",
  "key9": "4XH6SApjp2JJFffeegDuyCSvFAQuZBT4wzjjWzVA5MsUymojz6SVhdmpMv2gGgyaC2STDkwnQYHEJKtJYYhdG3dK",
  "key10": "4YAnjyaCSu77ab1LDuMU2RYKXMcadKKwsSqZswBs5VaNo65PJasqQAUfFo61kXimwmAfQZGmHMn9eutoMPA2fij9",
  "key11": "4WNTWinJy2DDjxUbixoKSWdsBdXafYZ1x2ZsQd6VhdLzwgJesBCmbRhdQPrVFPUfGxNJDqFYcHfAUQyEhuTHwxdC",
  "key12": "4wpdBDWeSHHzaUYxMSv3vyaGCjVi4D1mC9ZZysAEPyMBw9jKYezksc785HjCAoJG3FFn9XRFptGVQETxnHioNhCs",
  "key13": "4qpsGbxrdyPLUg3QFk9PDNSxEu6ys24YFhjRQKUScvEpDWdj4ZXQ8nf9SuDFesQp7k9y2A8E8ivVA4c4TdbxQnWN",
  "key14": "XppJb8M71eczgbnzjRms6SF1bU7E2LFBAQ6zJg7q8zgBFbH1pQzGmfqAsUkMJaeA2JKDwTAKiUKQj5uwrmESCdr",
  "key15": "54k4PUfrPgjvNWS8oPgL8PTE1dv1bhZEd2ozy1BQjBeN9E89yHssxg2NvDKrebvFwBcbibJ6iMvjtUBa6drWrmPq",
  "key16": "WGbUgidbiVXER9jjU4UxjJX8QpoxcbFonFHo8Dicos1kmK7S4JZ5C9Lug9WoyLhKg7zJBmyGSEYGHaUv2V4RUJ3",
  "key17": "4yennenqfQz62sX1B7nzvmcLhSs7PgjBk6CiRnLyExTPkmjVdyu8sqt3qBbpWk4siMYnFUTnHWX2pHx9LHbTj7bh",
  "key18": "4jWnU5FXjRXnqw1mGQNniHgVkVS1TSsZFkL5tp68UGaSc2BwJa1ZFtHDw2wQfLREVm1FMDbfTykatHQi6oKDgnYi",
  "key19": "2fbTUzPbcfCxo5yiuK1tYoPnpzCD1EASDk9X1iXVmKtWV2hin6oopdRNakSgLwfa3soJmgYN6eXtjk16HMh86Wdk",
  "key20": "4t6ebWeVaCMbAiyq6iRxcpNXhCMWJJeXvk9beEmY22cYNbDhiRgvotEcivEy4uV1cqzrJCiMMouJkZAmDh9CxGX1",
  "key21": "2RA7pV4jDxjCrnyxcqa23WvupFuoAoLutiLapkTHGvhZGrnDq2jYR6jQTcJit7B1Fa8fv4Nj3SDcH4yPPMHA4sFR",
  "key22": "3K5aU5Y2zbYTrSCMvMzUNjNvfrEYhkGpSK29znz5GshxXRtQbY37WWDVRMPbXayKbG36F8wUiKGxJhBiPB3MD5SL",
  "key23": "4VVU424GxQ9SkdF6kPQaaqCoAoW8sTj6NKWFn5yCjb66HDsrijQZrU3PUCDRRFQaWtSQYdWZYuJuJPMWQQNMCaKN",
  "key24": "4uuqds1EPfmVgZ5HNG95Yr5JMC4PXmmJe46k3Pi2S57kytLsed4p7HKVVKLgB3TpobLBz7pVoQTBpBmtC3TBuTVz",
  "key25": "5LnRDGdwsPFrhovGAJqmaqinU3PRcwUxDT9rRuTkDN5uNtxNhcVBa93xs8FXJnCRkwuW9Cn8oXt56NBxsPug6t9K",
  "key26": "5kU7YgXSXU8xZmMt3AbYeBRgAssJi2q8XibopDyVzp5SmTdARspr4z4zeUDygzqSdFy2fKABTKBTcGXpD9NPgMdL",
  "key27": "bjdzTCyMCYfgRrKmdnLLh9ExU4eFPdXs1pkDbpmBz2F9PzXFuqXAuKkfKePX5cW7Q5YxPCq97PxNss7xNHQCoyL",
  "key28": "4hEDbJYXsFefzdQimg73JQ6DjpMMj82aEVfmGFsgxMFqUpFG9DJjJKD2JpP6sNgdu5dEiGtTJVjmqZmRVzLtJvuK",
  "key29": "5oSLXgTA3rYPLdqeFfRs2J1T5GTd5Nfcf4qyZUsWBvn7NxcrGQya7jFKZch8qgshdhfpSBJtxzAkUdeaDW6B3C3J",
  "key30": "5nUyAofJgj2qGGbwXyMjePCo5xCwqPCtEsfQJKQ6H1Cwxxwo89pgaFuKAMNZfoUyR8z454JoFRyjGxoCnF6u1PuN",
  "key31": "2wtNWqeSsrLHMiT7MSwDTT6em1NUyv12c9CRAmcsqeU6DeVmoBZo7yaJwDGGjTXpDCAM7gPZUrkWVBVqAgAwP45E",
  "key32": "4Z9qVU2Mv8jCXw5AcUNhLNinEucStxLkXYDh6SVTo4oX6cGm2co8bztmmJjD4Nv8m7E858TLhrd7vt8eugPGUd8g",
  "key33": "4RrjZhyTsKgPfgL4Rr1mSkLdCKYg5qpwU2ec35HtMj9MqBe8L2PX1ZZVvmyr8fKcrTLcGNNzbuzDd9jp3cGdyyqJ",
  "key34": "53iRJoBbx2z2g81ZJgMBaaWmWtwH6S2w9N8VovkqVXZiVwU5vq3KcJ9VpcwhjNsWWFuey2rjSc7kZU3CWMudDbo1",
  "key35": "3EtoebsZHiVzNK4CxRejY9ohpGUygkWubH7yyJBiT7T5xcnQzhC4TKPur3QjcHze5LweREsqSKSGfsyTmTQPiQhG"
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

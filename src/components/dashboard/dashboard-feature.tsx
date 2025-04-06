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
    "4eaDKTcbvRbrRb2HfetyR4NZQutxHihUx9boM5t1t2aiopPUEKSipJ3g6yjVqmG4c2UTFD5qHstPj9CeqZE9WRgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53RwHaAbtLJL9znaFBUzRbRPmc2CDgabUDhJntvrzJxuf4Rzjo75ZAUxmR3oCx5Vgno4MTiuG8cZKdsWnGavM7u",
  "key1": "56Xxb2YvB9a9pczcyjmvb2Gw12RSR3gKrAVYEZsJ2e8Mjy8LNe4vmtNJv9vXqRymaSdEquiD1mjwa1FSWiJGyaP4",
  "key2": "4Nh89hWWdrhff3Uwa7m5dLz1AStpez4S2GH8GuBQv9AVcZGNQC5x1uSYvNeBjZRPBaW3tKPu1L9vJgYqRp36vWHr",
  "key3": "tK229nQU2gwUHnKCtVfCUnBUgE9C6KSzZFpu3SqjaQYgepdHm2YjoCGCTVBXsfpghGT8HeNeQzByCG1z3ZB563S",
  "key4": "5ZEUXKNWdvY82h3BobrD9vcSemkAqAV9KAWsfqNthmjqWq9LZq9Mg86RgEfdHdrnxcqWWjRNr6Y9chtNo4DFjBVj",
  "key5": "4iFTUimQvrJjXGQyLTiXWn8hHDZyYo2fn1MKG2oUEfQmY8ZLV4ewE83yuJ1MZdAvQ6PcefwkNipFb57USHTqxJoB",
  "key6": "327Yfpu6bkvXLhGRUo4K3fCfCyw3h2MRxy8DKm3mHUXSnW2zBas92BajvZnhSus492SXuD456UKd1D4tnvr3PBKf",
  "key7": "2dJjuewGyeaQV8uJEmSi4WE9TZqN55pA8hEcGRkWynndwSEYoSBqq7xRVJhZx7fAySwwHPBq1ekw7dCMBEGGsFPn",
  "key8": "CyvCu42cR1PmUiPH4XytYc1FeKjjSiuK3o6FcjhfFEn67RhnSqj1xg6sXDkHY8QFhsrvYB5xATU2CcVXuQuWs68",
  "key9": "4q5dJy3on7BHRDubmUR8rLqB5K6H4ZdAchCCsARuoUFmGc8Nuf19t5qcuULXmxRW39je8qEeVnZFqJ7vK5FW9Sgn",
  "key10": "2DPVKUu9BGch1uXgGWAmjqNkFHcW6KErPCPP1bXM8x4GRsVc3B4tvTSvPfL1Yh9gnWcdVMvE1NThhuRWs2WjzpNi",
  "key11": "4vvkyy69iTi9v27rEVGGBx5WNXNQuCuvdTD29pkuTQfwH8D6jddFCwpUJWjT7mzhD5Z73kpS2nzF7wq7FQDQuKQa",
  "key12": "65MgnouQ76LBAhAW5eYiySPf73BtpCa2MAu3Nre2ZQT1Ljt41eGmDSbipCaPPvmbVdHbVF8YMXAg27dKqmgyHB3j",
  "key13": "2XZDuLdpPh9Vd32Z3siD2UnDk3p3FzWDcD56ac1nGzBqUP9qCiPmnEiwAr8gtS6kW8YJ2fEd73UvFpWS5V6oscB3",
  "key14": "322g5mYh1Kma3z3Zzx3a5FSwry26iVEWKDyqLDBhpLi76Kup4pbMhgHrrDvsibzYtHmAuBmwuy9xCeGAmeeYdrjW",
  "key15": "3VZhGVo9JZu3NVgrmhTUZfwcwmSfCBzKkRRC6eAktrb4dZrwQWqyzguBvVrRapRusp5JeacgnsRtQRon4B1rAyBK",
  "key16": "5nSDpPrJqjhh5TSagG9xCLY6YRodQmXTanD6K5N4hQ8h76jBiUKXs6YpiR7LVrUNv6aAv8QDpgmGXjXt9pc7dxD7",
  "key17": "2ur4Wtso4Bx6UnWP3QENjb687YVoz8cLy2JVn9FfUH2ctWtKuhQDxLskCLnTkfkzbWzhKDebJ43tHcYzCBSAkcdc",
  "key18": "5CVwaX993GJ6PLnyDCcXyxJRkMeXdFCBFsoxcPMt2ZfxX46Q8uDehKtiecquVztw8nkzj8hcVyvueLAyh5bKPUKJ",
  "key19": "5qCXJt4HAFDJhup4U5T6zW6ysuKG5jTpU29JRTb8rErmiizfZXugcei3T5jBRbf9ZKckyHRHhJ8hHwQRkX4p8ips",
  "key20": "4Zauk7RbrjrDo5P8TNKYWmKeeLRkTmq8yudz1CWR48LKyfP6HpQHJgEy7ekTZJMLzDjei9hzZJ5ZeadM83CuJxLo",
  "key21": "5aEi3mGrQifkVc2beAaJ7xR8wQwbmLS6vSTSDptV5mWgx89DMR38MfLvxoaAiXGZh7VGm1r9hxZyt5e3rPvHriTq",
  "key22": "f9bXup4bNCfcz6cDwPzGx9JVUe8YLBwGtDKMSDJeFB4kjG4usRuWdFdLkCD8EvkjjAymDqXM5TKxqzYofuzuYLp",
  "key23": "9kqJEezqAD3KTG5zsuEPwPhqySFa17qQ3FsNXuW4R5QabjazQkXXph85tF7E19KxsMB9d5XHaVq7gjZ5cd3kj9v",
  "key24": "A6afh5YRrFvZEG1uDhTyTUQ6a5Don8jHytaMgnLoxhy1ozSYXnsPWG8KM3JVdVhzBpGXTwTqN4MGL9XV4tA4Hpb",
  "key25": "GVuW1rGZUnBTcAMH2dDjW4CWXyKuN74ybeEr882BUitYMRhhvR745MAUEa6wXg1xmTrRJ2Gwho8B91ocYyg7Kcs",
  "key26": "3mkTWPB8HKiEgzmubEWNQL7gEsb62XHLXwgbdj6VNBazJSBppgPv3ijf8ZEAusLqskvHgh6hhE8LP9mtC8PxXkQe",
  "key27": "4EkKGKWP5KHh8MVgewUMWrDm16Jq2Pyc3GqomipCqcY8pyMdwspGj8d4wPLxkU6sbua7Z1jhjaAj98jHietxPwaV",
  "key28": "5rYEJTHuLsxRpQYjdzF5y5uRECXojtoSHmhXDQPuk5jyrDibkUUMCBGDBEa1FtiPagQL6jhNwS38bMwwvAw2Z7kJ",
  "key29": "aQk5jt1qZevVPgMzsYdWpqQ4aJLfzHFvFZkm5s59eKrPQ17i1aZYPTNboy4ArQatdGxkZd5Lo2FEzSjiPGeCVCf",
  "key30": "4B15kru3cxzZMuNv9sjtDtbSp5to9fJFFPZwQH55xxdZND62EAX5Y75oJTuGjX7zDYNZgPUzvn4HVUz3WdAmAXHu",
  "key31": "GoJoTwt1hS7chmMt8bHa2VaHM3MTSgxm2iMMyv1cXJ77KcE9ihp3xxnejgAe386iy33RAhTQoioPyknJwiTtpng",
  "key32": "2EoruevNdrTUry31xkXxDR3RVDBLxYSpACEbxzP2Ts2SDd47Pdkoy2sPohtHU84u19saVBDBf9h3FCFVLi36Bvc7",
  "key33": "2ZffKokDsaaz15XidTMvFhfouJESr1PehtstuWntPoDDhcoZbVCnd3jemezFNU4grhLPQmL2RBQBeariW6Rrxvx8",
  "key34": "5hBHTkTZERTcoeJWH2EkJc4x93TsYAhYFucpLvqPDFHXevHuRr33Nuevhw1WRowPKM9g6TGqAV1kWNpeJ8eLkAJ8",
  "key35": "3gAi9A7qh2aG7FUeRg7gvHdwm5xDxnNNu6RTyb51wTVxH1eAodSmKXeCj7NZL5MqajZynzGoB6QWVsuocR5y2oRH",
  "key36": "gbuZKfDFyVuskBqDERFRtsYxKvRKyWJo5JvipQHzok1k8U8Tdh9fiudRzQEnPK9MtGGkPdEpJwfGWdkbhJdNiTn",
  "key37": "gRoW4n7T1FNphBBmuRisMnsHhc7tMbtD8tvqP9Wz7JzyBfzzYSJ9eaMxcVtM2X3w1DB2VN1mTxAYSGCoyRbCiS1",
  "key38": "4EVveupkYjuTwmfM99cng8ges7gERKjxRFjTVPLHMY1pHVZqWD8fTxvGHsoAMAEhK5z3o1LAaK5ZiMbHAqGFmc8r",
  "key39": "1zqLUKDqS71VJYPgJ1GWVMvn8y5sX3tdJLAwfroYCN3kq8dedVRD9BP2wUd3QnXQnpvREysKrpPqmjSi69L93JZ",
  "key40": "4pR1Ybch9s253w2kwZdX6W5DcL1ZsccugJvrg4VusCjw5dLa2TBAEWkAdnoZCfG4rHprSJTMvCjJCLPYmbJhQbXy",
  "key41": "3E5yonFL1XaFgPXYuCHao6B6uhPRSvmY6Tx6ogeHqMPYzv27MjJPQ86ZPnCzxXvBYzjHE42pM14xVy8bVpjpMTjX",
  "key42": "FMAjPu65kVMXAs4qbcE6ogmfXYSpUgPwKP7BiepeWXqCN9Qb4qPN3pVt3b3fDYqsTc5iKKtvdmjva4AdEtmYUzi",
  "key43": "3H5TaApMz5djs4TinVF3h9ApxjZi5LBSBxM2hE3Ae5AYQTzNNxrzKuB52ovJNkNrT4gLUtzsT69K8uQp1CPpiL2b",
  "key44": "2HjkEnYWtt1NSV8cRp7Lr9V4M87kgv6rQix6L2Xxfv2zGXRSa99VEmzggMy4wTaxF8PAaKpwVv6GzGjaFPDCgfKC",
  "key45": "f1Mz7rFu1bKEiaFWSedU4SBZwfPtxHCYcFZcGph2i86mWy8FtpKjAego7CPWknbd57EiSkNNf5sjCZ6kLk2eCmG",
  "key46": "SA16ZT8Ev3UXRJYVh97FF1i19dVnCHyXSzH7c62hshHFB2WDNfghnk3gcdtj5bzrkaUYg57k5pvq4NmwB1NbSmc",
  "key47": "sXeb1G5uDKxRPdYYCXQLEJWM3h1x1ExMik3HYGnRCrhFGWta4YupUJFmE1kxKhgmLuMEvzU8uXs9T1o2EGB32Qz",
  "key48": "C68uvkQFYNNPt1cryq4TafDHhy8WkhY6zZxhvMqT2osH555nqzZ8ZzyYG3xxmTG6cdMd4Y41oYrWsPiu8t8jQWF"
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

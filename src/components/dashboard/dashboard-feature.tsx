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
    "2CmrqeTBHMX9KsUHPe5kaPvT2SJc8zz1ieWi6u2MoBAtNtdZFwdquMjnG75wpWs2o8HLnTcp7BigMvgWtuMAzAMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Qft3N5p6oeNNdGSGivDXCjj5QJH2qihwREKosFKoT65PcH6TwtR8JNqnY2NGRPyh5U8DwcVPJdAP59VxyQLxERV",
  "key1": "2TGNewRwjF9MEmW2atHj282gaqxjwepw7M4SBLnnBXm1xbsEyWxU7gUXkkEQYcKP4Sr3D6FrbRN1uQ6go1kmwSiB",
  "key2": "2Dgbeh7K9sok2xKkJuPKBWCnBvsAPC2sNhUnRKgp176AzY2XxFeBd2RDuz6THjirGz8X4M7zcBvHEAjmScmLCag4",
  "key3": "3cZkC8QqJphUoiBaiiJHUT8WWTYjK7C6E1LAqr3Ve6wLJyd6AM7q55HRoTAsXPmgUrvjw431DPa2TCiRpgrwANXT",
  "key4": "Hof3qyHqgEtm5SbR8Tr3Hxi4WzSGbe2JJ8XrAZYx7Lr1z7Yb4kEfZzs6gZy8eSA3GK4CziLzifETMMtyTFQ2Vye",
  "key5": "VmSMCt1tCk2bv5pMaENzdKpsJ8RaSvzAiWd7L17Vy1RPYowRVTsZJ1yU5nTP1KyKJBm93vAkr168uDHHGVQLZot",
  "key6": "2sRzXJGzxsp5AcCAyAzdvS3uYtcjp5pR94WCfZ42smnCHZndmtvZuRsuLBVyMMSbB6Qw53Aru4ErNi2iyRho5xSz",
  "key7": "3itNGiz28R8NtMde2NmQWL2WfJiZMNGc4HmZdEWZ1zi6z1unpLxu5JjrKAMhHA9fDtYPDjVnA8SSFqNE36CvjVb6",
  "key8": "2hgf6g2rcEm2zyawtgoA6RSX7GFhozRmUonYn2dER3iCShJbqJRfJdcqBy7GPWaMagi1RLVuGAyyDjPzV1uRCjXD",
  "key9": "58b22FhEPMjGN4Fjwhfr6hoZYrcRxeq17LTLP4UL27nVpUCDpGPZpy7xwvUwmfGsZLXDrPKB294vGDqSUnjYpafW",
  "key10": "X5t5jBhoNsSJQG1dzKN9bTMZRdi11x1YjpLdcfTxDu4dg47sJb5S5yQbpRcunwcmEPgWzVrKpkgR2qMrwNJZR9c",
  "key11": "4mSZRHaqT7zkWZvMMME6kNNp9V2LgDBbAU4Fd9woMxw2UfjeF8B9deBAgUfcnMGg5WW25WkspjbBzGoSKxMiwoqx",
  "key12": "2ST6iLau5Jwc4V3uqNmN8Crs2fCwJmBhKXBixbjG4c7aFGocW5vucu2kMjeAHcfkhuZLFyQbj8oThNYFidfXrDUQ",
  "key13": "38ixzav9BbiqAVmbaL8UKUs89pTr1p3RTz8dtW6m4u5wku5sg49s41tUrJWR9MctsCSSW2GdvuT45NUWnVaj9doh",
  "key14": "46zj51hMdjsTcECtJ2RE6L9qMS9LauZQccZBRD3CvbdVVVRpqJn5vGyjAjmkfy2Bro2QZwbEAZj2Kih6iSrEyCyA",
  "key15": "3cicKz8HCxcTGmuTaEhJMHyE9J7fW2kqz6Weepy3dmei12yXBtqHPjbcgjY6h92vUpqVt1oEjSKj6VE9nib2MXxQ",
  "key16": "5SRjwhGAyVMVSzucHPzyMX24fG88WxtshrNfu5XVnQ5oPTdpfvwtxB7KQNiH7tcJPW6xg3JVi4YKB9T8vMv7518a",
  "key17": "4mCjhKMiADcHdxpVqNArvhMYTDBAxGArUfEKSJLPPZEkx6i5aUZu28grb5yk7537oyLzbo6L2uHz3idDYxBu7HVf",
  "key18": "DCnyVMTNFXTUQwCg6beZTCvmybinTaAQJHZKbbb7NvKg5u8qGXk1BAmju85Ei45NepojDBYhqB6oufAhWnSiwPX",
  "key19": "2CLdwxihA5VJ7tDj7bqeAobWzMASbCbgdAURhhHdwfFvuvKd4CJs1Sd842dcUEXQEdLdcrLhAvnscczGGWnwciwd",
  "key20": "4MmZRa72nn2eGjrVZrH4qz8Eg7S9xPMzLw7XhU4PBfwXM6tjHcJ9f9P9aZEdpQgKsciPex2MDbdFAS74VFTYCYtE",
  "key21": "24eiJ3ssVq9rv3CRMDrfa1X2Ra1BpoRKuBEo2fdwKsedQFbANM3jDYn4i7hj13p4eCJvzSxVFfcHzbLjxipx3BdB",
  "key22": "N6MiFfktMhuPUhTfbdwnvJvj3yuK82HxGMcB59Fd94JxA3mmcjEDqnmxm7NMTwW3v6AQYTdmsYi5EGoGjU569o1",
  "key23": "6FYqsvrYp7uQkqY3d2uGvavsM3zcAZUdV6yuExkbyNpHqDFuk28hgxCHwy2cr77qTQb6e8BEgbVzDj32LouBsxR",
  "key24": "2XqSKfYwgC4sYDLpz6pHRCfz4ivSsREJgixJETPseD3gaFmChG8hi1rtSRs3tYoFgh5c4NRvccxkHvrqJgmhzZp4",
  "key25": "3fhpjbNPmpzKB4TKx44CMeiwK4foro9fBk4CzYkUt41cKhtL8aVaZDRMPwogevK1weaYN3mQQ9HKHxMBzjLZErUo",
  "key26": "yE3Ec1BX8nM5LFBxMYdg2AHsmbLBPkuzqejeDtBE16jbLBz78GpsGS5VaQaBLh3mNBH9gfjAr3hxQoP7KKWUryX",
  "key27": "4CdVccSZzNmn1apsDV3VFJ7LqYbq9kcnXpzjqKwhR3VSWGB1vBURcxEacd9gBMHDsKrHReCLgsW2xJfXtubaBiJc",
  "key28": "4uR8ttHVZJcXFBNitGyu1Sx6TtmWw4LDim8p7viSXXGDGE84ieR92qhU3V524FrxXqn9UqfebJPv2tNMj3irQzZm",
  "key29": "5eSGrru1GWjx187A3sCFqJ4XnTCa82AdjLTB7p8LtSoeCtH8YMgK8mszJccK4hGX3MpnV2vsKoCyzsycr3CKwhDo",
  "key30": "5bvaoxLRioZ936EVvbPfo7ZewKnDa5E3uK5v1q3TyhYoJgxocGJYWjJzPMwHRJc82c8AMN5ExPiuSEokjzHjBD6s",
  "key31": "tHJByaKhKrqbfHyuuYqn2GEp4A9hqv8WHxXsyUw23dFgBcEK3mBibAfkUymSWXD4huegqz4JjNEa1zLo1Bpjugw",
  "key32": "5A8t7swqkBPAxn1Hycvz6BXtef1Hrj2uAY87AgJmBFGGeoqhtb9WiAZuLBdg2PXG9a9BSzMdaQonhNHAfesPwA99",
  "key33": "2ifTFmNkoRiUH6JKdanjmPgvXkdBtozkYf6VAzN7p2J7SDQw7QrymSUTg26fWW9m324xhsbNSbBbc8rNZJNGTDAo",
  "key34": "3AbRbp8EKAkmC8P63iy3Gsvo9frhvLSkABG89YWqtuYxftD2SznfHdAuKDHpTRth1cZuGgP4p6w1ek7twM8cCD2D",
  "key35": "4S7xXnWVy8R6BMtAVM6iR6kRDmH1hLXKDH9U9PtJWSKu9e4xVcJDe3A5T2xuCgnP75qBMDYScyXj9uuZEZjqQwPx",
  "key36": "219T1aqbehFrbNSYXzw74kxSR9KUsQnjXnqaYQdXgQSHUptfCSQ8vGoTQEfqSahzri5t9m1xDjp5PcnRY68NwH5F",
  "key37": "QzCrjgGyKw6BWcUAQMFCyyUyrLi7Eoyd7FpWss2FAnbKH5YXJZ79cZ5bniQcn63mJP7xqtRTGZDhBJf4vSnWYSC",
  "key38": "4sLN3BxtR2dL2FLTUUqN5ncRSHJfg4pubAjiBMTBCLxWZuh8JNGq3iejZGSHczbFArAyxz7KnycmHSzxCfcs87As",
  "key39": "k3CEsdmg6AtvQfxWqv9pBcqTZxwp1fAdotZKCYNeCVEoE63nyBdwnu3wSoA3Y1fK7x4hPzvoUgK4Mp5hyCFtcXD",
  "key40": "3fGDCRTyPZQeDN43WfQq9GWQbzsWPXXKfaGQ79ZtniBDgsisq5wh8mU1tKT1NbV9aANn5gK8x4Y2RnZm1UE1YcP9",
  "key41": "4j3eZKBdGGRkYvEv11LvyWDDR3VfVFsZDjP63zWqcSvT2ut36CErLdeAu2z4KTbbZj54zMjnSR3M8Vq5Q2vLHnhF",
  "key42": "CRbZKdXREJJib2fhGbzHWhZUMxSMJWvSfQU5NT4V7kTBz295CsuDqGKn3xVz9UWVCgP3enjFptf7SsFvnjBPetA",
  "key43": "52ymY3pjCkLVv7VtYEsvc44wUZ27NEMDDNo2bC6ytJTmpZBo1wRh1eAKq9ymm9nTZLduZEpih9xZn5uYkJQ4va2"
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

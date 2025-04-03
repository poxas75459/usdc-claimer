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
    "ua93WLZremBp6uHoPQ22TCBnfEGEPsr78XZqg7CjtK3GNDAmxV3LayvuwrsZgESL15kAjRFySDymRv7a3XvLFad"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PQoB8xqKt3gvPTdQkBW2io6a3Pyvk6EwV8iGFjh9wJSPLRk78vPA7KUNgQzWdTtiTQfHurK9ow6DPBLYeRcEUMM",
  "key1": "4QWxnjH4PYkmrU6j7WuuCwmrF8Taq3AVQg4vmvyBdixyEFqFL2WYiRmYN3c3CkFWsYuU9g6Ad3q34PnN1C2adBsq",
  "key2": "uQRzKYB9x3neTj8dzmUvFttYcP2zHkywkUaqTHeifHFLNLqR6g8zBWUfQa9AGcSpsxTvuDRJNJBx12JyZNH3xTf",
  "key3": "4moBWpJv9ENFBecczYPXnLE5pWwnRv58ikxtKBwKFSo5iE75waosRnja5o1reis27ME7Kj7ArsxJCFbLn7CtzVxG",
  "key4": "X87sMX7RcWzS5muTV8DJJiNQxzzRnDfE93aSAjUDqgSfXdjCRiPKMZHjet6Bx8bTsU1sj4JSzxXsCcGAixwf21N",
  "key5": "2CLnt7bfsxLd2TzVwjiL3MgHxei6g34YgiZV4TreSAZTyCaYXT2kk6zjAXWvLebSqCHiDdMDYPaWoq5suRwviNVQ",
  "key6": "3oNSBoXjSaVRnatUoh4RXqLJEkZy8XzYEUWgjujnSHJWDNDcX9qHMsz75GJ64KJQjUUiJJUUwjmbdH5wHfnCGgFX",
  "key7": "44qNHoT6zD9NktxBc8XaBWzJ3pjM38U3d7KNXTPgyh4taBvPjdQrGPkws3tqFAZRpuAfUt5LC9Jt5Jbs12hHcT4G",
  "key8": "59y51Ez67AphyLaaM9SGVoS85Re5ZjjomGpnoZxCKzDF6htSxVQayoL8BrTFfubXaqkWBEQM9zVxBBNoz2SZFGpv",
  "key9": "4XrT4VCichD5UWMjPr1fWFrPpX7rNB7gkrbvLawDCPoCr7sZ8Pj2yqenBAVvuAgEzKRPoMk6jomx2aJBMdrkvVGR",
  "key10": "KaaPNhSEnbnngxwCtsAuf6VcuhniE6EmkSqcdtczEs3in8vukM9QE3aAscCGD8Ty6JW6BBhY1PBHQ19mYZs5vF8",
  "key11": "iiz5Yn5jdeSqHzYkKiti9iTQD4jkGs8ApApMB6HBzmaLvqUx4VBCKnL9iEQR2FizHdJ5yHtQSi7Gx1jAWZhrJVm",
  "key12": "aUFKeShfTaeBXRjEAHZtdutYFVnEY5VJXRL31UdUnToRPaZNvsGmPFXMU3PrbuXYspNXtEU986aKueme1PXkjQg",
  "key13": "3Fm8tzMnn5kYC2JGaZXNjWFhbv45annAXrNxMNmBHrXzV4YW49pLSDFSthqtWWMPLrtYxCDu4XjdJioWKeJJqiiD",
  "key14": "4rfCv2ADS1pmZmaMonazuQNR8hm8pmjcCtweZwN66kDTRRwUmDkpp1StRmdiCJHPDrfYfYBosqBwT35SpYayXXbi",
  "key15": "2sZ29qn3BFqWfuxbdgGZ9Ukrng1kA2ybEAv3oNekqcHsGCdfXH7Ymb45ZrfU81Qj8g2Wxbd1pSYKasEb2gHUj6H4",
  "key16": "4FQu4u1GZzpRE4LBetUUauRGZ9BcmgdcT7Sp9oVsiuttTaWxDCuCeHy6CJUD9WSKWnR54YeGV5M6kdqc3hHs2aUd",
  "key17": "5FQCyBTBjnkrWriNEmky61WX86S9Fm9Xbf7mcLjFc7wC6azs7N2DSTjqc6eBbTvqt4qmTzzVAovYxNJAiRDusujX",
  "key18": "2BDGZhjquDnNEHnQKLTmQJqqoN6qKCo4155Etmk4uVgJ9r5i24vihAxN9FcBUwD7R7eyDr5FaDkZ6dKg46kkoA5A",
  "key19": "3fhM19L3NH7Hj61KiTA1eULqDqxs98q4zpFqMXEJA8CTCxpwajRwLQSd8M8wki9bn8KakzfhD14WC7enqhi2uB7u",
  "key20": "wRTPuDdBcTkjQWrc3Px38hCnyLhXzyVCDYe4Q1q8zpPy8aMAjmKGqUDP837ZMN2n89bjxKbTkB2SmdLQ39BigZj",
  "key21": "4xpdBRkFk8h5dt1wWN1uSmhC7tptKBwNpom7ytWdkPtaawHDtUMP47cwdXKpMdrRqSMiHd2ejXstYNz5LLSGgdET",
  "key22": "7ikGMxqQ5DuSYp6DTx6ZnGNvwgHJkTPzNV1L98471nNCAUihQm89n6vMJJiRhz3znSroXt8LuPm3bxZLkpkGetP",
  "key23": "AarSSLkBi6HGS7BJz5h8hzjMrRadbnjL1F5NMF55VahkGoxCQkQaRAc39iqquDmbHNiZHHM6WmGicD5HkCGixWv",
  "key24": "4SuTffU9rQXJicBGnhrkGg2yAET2XhJtK86FMrsETLNtMAizxmpcd6p9hMyb3sAXx1p1zSqnmSAWGLCm6T4aPa1k",
  "key25": "3oyZWgP1zEvL5L4cWnRQXBVfSi3A8ocX4tjRQbi1hcVBWxLtcUjvBsMfkxKB881a3Gof6ZUdSpC7F8C19oDeVNfg",
  "key26": "43eLZ8aA3NtZPSYRQxeFRDYHmoAc5PSesoR93jYV4A34ZwBUdLByvqz5f6YfwfDPzUhfZZ5QN9CvAK5DT6HSLbSK",
  "key27": "5t6Cf5uifn3bAQKLmLXUqAVc2QKzykYBAnUYXgqNLGhZwnPywegUbGvbKTLauQjLXVciCg5Kqmm7wZRsqhE3SyV6",
  "key28": "39c9suUJRqLiTXtJmekuDMGibY2vhgBkuFUnZU9GSqWmG9CPFvFnUm5X83EpMp5WMYQ4sfPHtJoBogjdz9dxpm7Y",
  "key29": "4DQx3sFrQ1gyQFVgMMcVu7qjnUysZuMqAFpywiVnPp75ZbshLQvShNgNPsBbBLgkeL8XvU6qMSAwYD39x5YM3cru",
  "key30": "j5e35dFopHrLP6GaJpUeSip3vAchfboo9Kn36zVUYBRkC4F8DrXWdWZbAu2D8jUTnkRMKhhENxxY7djYgHnB3nR",
  "key31": "fVkxVniByrBYoWQJD1arePcwz64zDrtdCy5WexeAvqUD58JBUJWPw8jSfwkdhaD8qjffZgsZUtx88FJuEUCQgiJ",
  "key32": "h83tST2QwXnWMMns11gTWFrprvcBpoHcfT79fL8xLyN4xnHa6D8qRRCzXvzTen3nS7Ck5yWocR387tkZHDRsqis",
  "key33": "4E7HxzqYCoxwuvRYi6nvThuoQCM3w9CLzki8q5cSMTapEAq74opYs2YpUKFKn3qikoHDVsRCZ4fHkYiz1DvSXoUH",
  "key34": "284BANWkJUzdFCnhtDVErhmNAAFg9DRNwZD27fgnfhQM88DogptGs4SbrmrPCj3E8239ZKNDBeLAMmYYVaNDBDz1",
  "key35": "5xa6dbweLiajGMCPvcQincAVF1NgooHRLCaYbn6Dzk9XfaYwDcAqwtcN2CYSh1LzcqH9u1QK1RmW4KaKpHNvrTCc",
  "key36": "3iwbsfGhPBHPPiVetCuxHRG2mYy6Th5QAsUQ55frY7E2BMDoUbo13noLSm6CNhkFwp6Q36V6FnyaDG4efvWNd3Dh"
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

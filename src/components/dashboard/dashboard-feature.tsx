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
    "zs7UovRa8hBhbvVkPazN87fmvszCkKRzn1NjBYUnb4xoG9xaeFjX9hmTZFPeQhUphH4JVrqymg5Yy1961odZS2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vSTA89wS5DYhY2uN5FK8Pq2B1t8vYaHy5sjWtfxGcSAkHZiMWvrHyMvSZ2jBmfPkF5HMaJi68cKYwNXxHtEXSn3",
  "key1": "4dsZ3HJ1C6iDaLtbGdAurgmCAzz19EFTLuUa1RdNgDFzVSrPdztJpz46xKEEF6XujVtEeU4Pm5LGfJwnucbugFou",
  "key2": "3zuyjYYpW3hpLGwXHcNqHQg3rEiFwGC9yqjxYrpQrNLeLiNCiqtv466wsNHKhPZNWPkxuFUkQCnUpjjABseMf6JR",
  "key3": "7aavpzG1rmpCxkhc64dBxMrwNr1BCaGrU9TrBjHLzcNu5CzZ8HaKrjs9CX9M3dH635tL1RM3YKcJoBb8kCFvGp6",
  "key4": "2v2Kv3LZDYTNZ3sTW3MCyeuGQj4Cc44d6PKEPJNmmYUdTQ5GEy9akgVGvAhMfWKVd87q5Ayhi56LZmtwz2hAK6kV",
  "key5": "2ZxS16u7ZyZm1YU6ezanS8uA6rgedUP9hJF9miEuDkFiXcNDYHw5MMMtQ7wBaewGgEnSUPoLSXU6ChksgzjkMiF3",
  "key6": "3emPYeX85sqVcfvab8WBwzFHvLPc3JLdAEdNQkSARJuCFK6qtGaYysCtJNp12hV4hGgYP1QyHa6xmmucxCq5kELS",
  "key7": "5YA6cDZyDevmMQEhTzwAFCZL1i6WHjVd8J7S2nDTRRQnUvU7D6gLkNFpweKcdRf88DtZvdJShjZdfk7r5C4HsZbf",
  "key8": "28ocF2a86pM22Dw18yFWt3WRRiJfZjmS6tVPaqCUSJ4zwDNVL47ve154KZnxAQwqDGYBh6GAHbweqNhjxePFkygt",
  "key9": "58G4o4S3QMovpZTMRev9Prv9zmmM3yWJUaLHoUsUW2bwJQ1xLtXRPcoBDEBvZHGaiBck3HsQTpJXSjVLhvWZRVyH",
  "key10": "2PpGAk2b4fjuRXkK8ZVTSVdH4oaKcm2dhMN5npsJejAd96roHLUK3Cb3CXkXGEMRTdWPBF6n1PQmPcop5ck2XMdT",
  "key11": "5A3TreBjqrTq4Sny92wFdZ7Up2y9iMgfCDB4ek2N11APMWU2DcfcgrYLfJ9Jk61F8hixuwnSv9cHK1ST4aPypud1",
  "key12": "17rPf9LbGUkAiHXNwK7gYiiDRUjcooK4oJ1hSff7epiTRATzzQ5PPFq1bj5P4DrD2H7NvQyyCrP6sZbe2FCGxZV",
  "key13": "2XbKfPDp3XkUCXG6tFGfbEh4PAPaFHNJcpg1rgfWLnULBVNVcj9peUmBPTzk6Z6JZdYXsB7SXyJ2PgnZ6eGeEeuZ",
  "key14": "rVsq7s8afm6gpwLqM2PPdamgtVD44JtioxmyrEbyud18AyZTiFbnWZLQFm86Xv6dPjTsMgnnk1gDYRefXg77nxe",
  "key15": "4Qy2KyDYMoY1KjdwfnX1e6K5ARaDVVd3ZmDSZ1A5uWKwUtCm92XHM82o2ViqCKcbMDr8g8tWk8WydSpd6pQRhENk",
  "key16": "5ovUvCCo9gHu16pAp4MLQL5yMPzvRWKdERh5hrfxPmMN7yD7eZb79FQ83mzDuA8ryfXSpn4pU7aUarMq5hSRvfR",
  "key17": "5x47W8Y45z8k5xK9gx32ZyirRXPrBhew3b2LSYuKHVaiu1sKZUPR5F7nquMv4QHfGFpXiZ4FPzDngpTTCcVBqn7s",
  "key18": "28cndor1VHXYsaPvvF3zSiK2sRxzoiJAT7e3NEvY8sGwMfVqgtJWBfdDdsmwsqqHjJToVv4knS8q3dDVMbFbe2eG",
  "key19": "4qjhwqM37qiyF8AgHzayfyAtG8Z7rA162wn4MT7opFfDRb1Q64dWtuaYTMYc3P6zwcgLMjVppVcM3AS3BkmCEch1",
  "key20": "2kSJBKy27WN7dPHA8zYFFRhJzUFhUYkyfooBWREdKVeMaYUCDgGdAfNrHXFe3q9fHTP2QK14PkNhMUBG7pe9PXx2",
  "key21": "4MRJMxGnzGbupZMjVrBD4LQuLGC3PhhELyGfqBLNCesdxVZtgB9zSkFJp25sbXREHwsJgcbWvw8N8EQKqHqBtXHz",
  "key22": "3rkh9VsKKTAnYhm8hQWc98iyKe2focE3BuXoNYTFZ5d1P7joqf89P6q9fGHmXQMuR5iArq4oq224ZJtorZDLm8Po",
  "key23": "62ziDG1KC8CrQ91ikn4syeGSqFmcrVCkBQzD7jcWtxXk2vrfXBS6vMntSsLRdzP8TsHD2oKX1Mi6TthvU2JKfthL",
  "key24": "4W2z6zibpMnsF2BZEUACXSzBo9qsapJ61P5hqHDfcm8SfnKEV3qXE2rwgT6eG5Ycmx31Bqm2Zt6NbLD4Z4fkRNXr",
  "key25": "3kcvXa89WXnMVKsCzQf1YBm5Gwu39mw43VVykggVyCoCN26AAR6QSkQskRHA7MtMaXNWgBxbUvJaJjTn89ESDFqN",
  "key26": "rwLdxn29m2rbGu4z6EtT22uDsyJkxWpNeMJYmkcsK5ZogjToiatAbgNnNd2jVsqovekG2xNJT8UQo68L48vsCe4",
  "key27": "3tHQFCQcnZcFkz3gBoYhvFNzWNu7uJAMfXLC9bTVSDW2zLWFzBUHGryWted1845J5VNb6THyxUEyBMRdcF8GGXT3",
  "key28": "21oqP9gPdtjM9yHwZFt5JVCYmCNeD5zLfrZPmt77Hn9R1kAU5H9yZpK5JwwziELtpqHSRf2ytRvvehM9EWe5RqLA",
  "key29": "3ZZHJbTALQHHLK7HxibPmfxCjzoMqrReV2yf3EohD6ruMTVU5dYa6GSAFBvQqr7kdEy2NqKgjtgZsgsphdp2ttDX",
  "key30": "4LnM31nd1hERkvAXoQaPaSnUregWKSJzKgrr5JuGJCFxrmyPQFn7ejeXh22PeBnVznye7hfgUPFKeVNdYayCiEoh",
  "key31": "2DRZEC97hLYS4KmssqtvKPvcK8rcbT9NeG6iTcGmnrdB8VMx6bMgSEermgAtsnVmVdqiLAuN2bRW8eY3C2ycqTUr",
  "key32": "2D62m1ZxSiHKskKm6EX4tzA9FmimnKw315Nv9Fh5H6aQtvCYmdKa3vb77cYiQLSQiT1A9qRQPPG1S5djL9mvPegB",
  "key33": "4fnPUQUDZCFsXLKmXoFYnUNUVo5xNASTxvn3sV3NoEVpz6XuawrWLgDVyipoTDE5D5TsyCNJZCjpJ4cHadYuEEXE",
  "key34": "2Ls73h3Kn7xSC1MZJHhVxS57CXcTBjViSECFEAVoTgWCtpLxuWimLmJCy4mVRCtVvK2WTH1ByhmbiwzncKTYrwj6",
  "key35": "3car5RPHdncDfg6t7yKXUG81vLjKhwHUMybwBApreDwyrtpEsHPhVM9GDXPZmrd6zAgo9K4eAeJhQKCDVeHAWZbR",
  "key36": "44v5E7k5uoeamC8A3LCccU4mNcL7sGn43TBWEsR1QB9TCgHs1WMuJfCXGBQsCfaRKxhR3iuPpq2By7UnYjdo2psS"
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

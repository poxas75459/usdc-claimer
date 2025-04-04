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
    "4xUaBZSWQH7sRZStKPkAJHorRyQ4JUAhvMgpbXnp6PMjNbn8PQcRhre6uYnTZmGFkubm2rY2JoBjiAsTaQYTJrdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39K51Az1BmMto1nEjTtjCLMXnsdnaEyhMSAreMwgbUSkBGc2uyKvXq8zvbGJamoLXm6A7SNaHeio5ARhWuCczH8c",
  "key1": "2VjHPZKe8KU9WDazaZpRnvjJFCHBqATnJ8fANdqzv2FfSK7QKiuFeztcZztpv8PMhZt6Bb8EYnfMKLAA1XKG8mC2",
  "key2": "5uE6pYKm8CrGCEvWfpZkUEmYahZABQ5BpZZx6xfVmvWVBs6tyDp8vExCzJ7CvWceUktgUGG1maxyTMzo6bGSRfbP",
  "key3": "5PpqsQJTyAcRx3W5MMrHb7c9wsiSB3DXSZR1d6ZGCwNB1RcCfyAAo8FMihHVq23LHCdtu7KFFL2jATGNFBFa93j5",
  "key4": "2yLkSKRDkAcDSu1fKh72hoZY9gXAiYWWyB9qSb82Mka2VGpurY2WXEechaR9e4feY5UFJSm6F9dk1ouXRoWaTAG4",
  "key5": "3p9zqXXVNk7prkmpW9FjGwWaL6W4v5fk4KtqQHYP2RXoFBybjZvXfrf2VZovge2mkNXDxX2kiSphfejVo8Z1ZPtn",
  "key6": "3URaBekt3EcVw2ouKCVTpLC2jv7YBvo7Cs7CWSEei6Gp3tUd4v1HK4LCr7WB4MNuKcfPE57NLEwdnXgHmAPYzmam",
  "key7": "4WUGYRc9fuoX1oVEY4P5ZvY8kjeH6CcY7wsbPVwWQUhnBvMvNRFpxMjA7A16VQG8132Hy1F4DfrTNDyxhsiHDwEw",
  "key8": "3Axdp3gYMjxJ6TssWn7HUVCjFwNGVGrADUGCUGRSzosPP3xfmTBUwhtac92T8GxBMer9u1A9GGZcGwd6izKYTkCG",
  "key9": "494TeZ3QoJeWuWtCZZzA9raV7SNV9p5JkHv938cwsy5i7toE725buQ4EE6vzyXfP2zdLdPMaBf5EHuPNumrtAuy2",
  "key10": "4sx4CyJjdJZ9nA9RGFkv72H9bwv9VCz7UW9FzwLoGWgPEUhbBdVJvUM7oxfuEh8S89EAJDcnay6uHpNZLxtRVL29",
  "key11": "4cMBgE3pYbvs2CMF6QnsyEMAGHUcC1rtRejb3Pmh56Gt7BLBrVSDSujkkLo6bGHQRDFh3WMeWCB4gcLN22RzpjQG",
  "key12": "5SSpg6FzS9GQKhKJESX39oVJsZbqC21V763CyKZbV6NVjnmxdqrfY9q2pFKmQ8UB9WE9LXP5dG26nK1TGWckpMAW",
  "key13": "3KPN49jdFvmTEMRgFgaUk8tFRcKvx98EtNoqembDVR8AQge3nf4dEjpm8bcxNAhsqcocRB1zPeJSefhhDjMYhVZv",
  "key14": "5PSJREphYT1V6W4vWNRrYXGojSWL5D8qfhCLA7XYJEvwrYKDGDhRBi6P624Tx7WesprKdJu6mEvLA8PoyZcJozob",
  "key15": "2PqvsXzPPfz6sddxfJMJQErhorS8UYndW6jHBuCTF5WH6t3xHcQmpmzZU7NbGuD8kTyEuZrnC59qaCRzdAvFvyDu",
  "key16": "fGAQvgoLcr63A1wKb8AVUcwgtZp2cYt6h6yA3Fm2acM7ryDD9LSaobFqLBUoTt2khgG9dcMd7b2vsnosUHq1jmj",
  "key17": "3mUPdiDhBPswgKhRKrbdUd7yq1SBGZ4EAtzaw4mTG43tsWqh9U8Srek4WgZYZSK4N1b76jctZPo6Lcbh259K9v2A",
  "key18": "4gTASxdZpMyooVdhhheWeBqVipY9KdKErazS7pTLMHT3zjLK2LAMr9Bc2YEBZ24rhbC3Ms7JBA6KZaFMq4SiS9Ji",
  "key19": "4THEht7rsTqtbGZp7o6UFiMiTQgmuLRweWVuYUGLVBBXXW4uTz3oCHr1Zvjsgd7jihvjJ6SHd3nYhUUMHCAWv2DG",
  "key20": "49b9pbjrfkTE9Zc9kfVXvxecdMyYgAM4zRnXQbuuQGCmysidCNd7P1x2Lw5i94FNR2spF9YP5h3kXMiKAX6LHJyd",
  "key21": "247Jct6iZv21cosKLgnCYB7xdctrEDxcpMUoZodto3uekUjhEHsGjdYxuJapukZECFazfd3g4eMqkcn3z5Mj5APR",
  "key22": "fAYzsfkb2iSvP54Y6wmnyMQKEyHRjABhBsiTpsqMR16RTutbnumXpDArpvxK7hEbYMYR1cRqQJcv4m876rcJVAc",
  "key23": "9ej4fATD49RC1ucyycHWCsTejX9HQQaoog8muDzQXrg8u1NyqEVEF8DBWgs8ZjcKuPQXW1oKbFjUeWz5yv5bi3B",
  "key24": "w28fzm7zdFxaPytFDhtXBocgq4CJk36ZkNoMCdAD3BZ4wvyaA8pGFuinnyztYP8at7uHVfDEJZ9DvwtHhcuXt9K",
  "key25": "2ZoM5XUAVfpqHfpCdPcnoiYybsjZkMd4TW9JNYc8Q9SwWPMXdEwyfbRJeuqqr1qwBQuQ7TAaa7G2BrjpvELCGCCg",
  "key26": "3k38zrjPgHLyi35wWQtPfxxMhwxW1zmm5bZ5AWpicjicWEL5QAoG8y9YEgvnHz9VjFmrqDBnN8kyxChFQVPLAkxH",
  "key27": "3kEoDgRNSxicPQuSWywdhNnTSkRnandbUcrpzCLKzB4xwbmfsm9HfFebT2UPYAujkGPjVGPhUfbE1wKQ1bkZEV51",
  "key28": "5MiBRYquZRT7txki5fGX6jWB8tzXiqmff3xGugcBEDoEMMx6hbdJEbFNYUNFY66wsCVqBTkVZA2HBKcM92vDpJLg"
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

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
    "5Pz3fh25K7r3x7XRynhLkszo3mLtF82sjKY6q7SQgG4Rou16yMvBdvEhuKC5AVXV8pUm1i3cKQkJ5dMWpT8Rzcgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PFA9mqWXxWkwhCZh3jKcj5M1Dw6w7nbEA428ZNHN5bvm7ufwG3vVUMRNpv86kD5nGLbTC1f41PtRcKo5zXPzGRV",
  "key1": "3upjZK3AXeCafWDfYGkSbAehZeWum73CqgRopPsZKVt4U3jmY3gQfQU1Ur34jRsGtzRy594cW16FsFL62ZHqAJDc",
  "key2": "5HscSjr1z7PDc4SUcVD5vVD8Vz6oB99ax8uqHkrtSjdgzQjTKJ4pro4p87LPu5Yox6LaWxsfTi62BKgRy498YB3s",
  "key3": "3A6QV9kBo4rbhKmba2pjUbQ25YgbX3JTsxd322dLhkZpLBALoQeug5mCqjDXtxJBPyt1PGsuxoonUVJdErN7449d",
  "key4": "2V9XoEQKLNfxqjtYebYTrfgq3x9bRVSjujg9pJ8VuMWvhPSk86QANySDeCbsvqUDZs4FCoZUc5tiZbmvEyxbyxL7",
  "key5": "2VZbv3zUj81WWexUTFcWvspTtwATMQfcuDKpVCnT4rGwKABzQyQBQMJJa7dmUY5GMHEK6LbozVhGK6Dbk1FRqSqz",
  "key6": "4oJ1yn3HU75gNyTmJWxhY81YKpGA4Z7WXb1v5azcVnuN47CzthUdGJFQn5WijYjhL5Bo6pLvNcZG1FMCLxXPnYgC",
  "key7": "5sGR2VfcMjNw22a8g2W2SBMfWdwcLZaZFyrxMmUZNT5ByjZPgaA4CB1MhL1edHWC4B4SU45aLsDcJaHGJyr3hd9u",
  "key8": "3s15Lx9dKsi4r2rf287GAy2oQUvuVzr413vghrhTdR7cU37CNTeKt6RQauu83YNSjHXtpRxFWKAYFJd4sgSPq4qR",
  "key9": "2tWnb9Wv3n5EHRuzS8WRdWL47keofBwFGNcDFaVGz9VpUEXPR2T7nT2woGoVFJFH4mmEhDGDau1v9oFkcbnUCanc",
  "key10": "5crjdZZvwkPiS7cohtCkztvxdKkS6CdergZLGgg9n9B3QNCZr3DPNhvVj5rWsdV3ZPGokcFovZH5H8DHnJKADwLW",
  "key11": "4e6yF2pzg2jevZPRwTmvfsfPFRbxhBVcs35iEKarjBRYBHm7qAaQ2KpQyuTdYiTzNketDWN7hnSncXGfz9BnkEY7",
  "key12": "3dDT3foJTTTiKQ5dXvkAZJBARyeWwTUvNz97QQo6K13Pd1jkYfUDd1sTPchqSwEDrvmCwHFXoVERNHfBTRKJMYyY",
  "key13": "2vS1MPeBi41tVgUgTwv3jGpsVCnCeKxYcn83w6xF2v7qGaXb9XcbPrnT2kT3qrjsEqCU1JT3nVpQAEUPH9t5A6WU",
  "key14": "5BhGbjfv71AHCf3EWSRTfCYFx5MFyRTDHrJwdHzMeNDqtCfXTCgJocC2AMQiZLMgKxxj3AeB4R8zHK7LYnsuyz91",
  "key15": "Zp9SVXeQM45zTyehuvCuYBTGLdBEugUHQdX6KhFGy7eyVhZbPZgSQNR5JXS1rdDbvh85w819xhq3AZcJjsENt3o",
  "key16": "3rDXSAkXnwVf1joMhSyGP7Tgmo84x7kNNLqaGWUGgqP6RbDfWRD9eH9KL2wwRAXJFUAeyGmVwfEnGYyLoubqS4QE",
  "key17": "3c18omDGPNKdKHA6SxgYyLTN1XZBpEMvvvjGsAFULkq99yjvBTjccBtPeF4JVZwysegPAe5d212EoqnU3enGPbGT",
  "key18": "2Luvybn4JUMRiMpwatqzbHW4maFQWRU7NrUjXDnundQWFvRfqscrcpo2JnYYMPKZhr3mDcoEMp5mgG4dAms5AUCk",
  "key19": "42zC4YvRzjiS5NuPfaL21MNytmTM7QGjKxE1W43WopLo8hoi7p1Q6MZXWSbp7nFBcPJVEGBBNb3evquwLSmQNgz5",
  "key20": "5SXFrsvwNywxH4TyW2Z59cpGbV2QuGyXVEaXie432mnQ7McboSYjHXpsknGwVdvtbkVaZ1CqNwwQ9gGiRXSduef2",
  "key21": "44NCtDAwXx9KJ6engP29PrJSVTsgJuGdPqTGB7txW19zhtzydT848MgZdyNjz7VRfjFrREKFtttJ6k8h1k5xPsqB",
  "key22": "5R1N5NvkA9R3d68wafg1x5yAGxJbzSghDZBfeoo3hdVHHoAUX52K421tYqFBiW37aqseA6S2aw7zdxwdjy9ujHVz",
  "key23": "TiaDdJHNHy4EVoxYMtzC9ZLM3aUPBE1vKpSGcZej22BNXeDt8v13z3oi4QBfLivqhz169hJ5MWuAPjJgtLvk4v9",
  "key24": "5Vdu4NWJuQq8phbkXQDJ8doJaBpxbypJwcRCx34MBxWgMKyk3wuspA5XjxVWX3CKipo3yccRFFshigAR9y6WyEfj",
  "key25": "4fHdmjqq97tZhyQGXkSaL68c7MwEUoZXP6dZ2jeUkBEJeBx75yinDVpsaoKeh7KPpso4U7cu1vwhRKUnYxvCikPV"
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

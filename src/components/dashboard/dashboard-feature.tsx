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
    "4AZdwLpsuuxWqk9xuj6APBxmHfQwqwzudY8Vm1BdkdsaWDV9A7qsjMrbZQSt1gxs75JcqLf9Z3ooQ1vn2AJx9y8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mqbkhEEDdXwbLECWU13H3vCQ5gzZqvvnDDzxsyRt8kP65yEeC87J16HechFav2NB43WCKfJMKcE5an5P7JVArF1",
  "key1": "SYb3NR3ZbNDMjGa3WnApR5wiqXXRmKiZ2oDcNf8Sc7qQG8BHAb2UVTdTiTZucnXeudsisHKF17KyfpTKVFJiShw",
  "key2": "2RPHnP5nmsCU5ppfae71cT2x7t9Z37rwbmkTGoQ6ukHpSJUZn5ntC2zqz3U1ATsozkm8MbMbZ6GfazNgzhy8CmD4",
  "key3": "2BpuQoC2RzSszziEWN4XPeZgNRJLDCUmr3xxrazc1gcTK5icGRbEFbjAGAYSRPQ4xx2T7xCgMGTgiKkxPBhkH6F2",
  "key4": "4qL2mx3WeAjbtmib8LGfRQoQDyNjkFCeAKZjU4NA26JNtP2bfv4ZDQpDjyifhrvSG7Wnfp4KAmw4piQ3empfToE6",
  "key5": "5Hs1BXc4TgdXZW1qs8DQZHAR4kE4P57ERfZWxHWW5hiSesURPKcVRyHaV7bbw94ATKsvnXN2Fa4K2jzVxDhbZKPM",
  "key6": "33et2y52pM9n2BAh2R5vGqEjkY7ayisZPD7fc5Lu2qscZTCTsVvpgZ5mWvCXkEhFgYUYgfB41438uhvN8BkwhMyd",
  "key7": "49aTVoqzgdj8NZ7zXjoDLWGjSmY4JMTE9Z2D4Vym1YvVpUs4xtJeNZBH1oj8ZHC5nv4yZ8VkuuRjZ7Y7mz9y7YEx",
  "key8": "5BTwUE9VYwhKCBs3i4DRDfbb9p75ajk115J5vnz8vd5K7N9eYauZE8FUUDYapx7CJm5BcXBeUhcUDo3b4tqBZPVp",
  "key9": "4ecA8VTKgi8GDYiQtGAHaQZX3j7S9oukwq56JdNTaDnEZwS6A4fnwRCtCZXbEXJNzUKeWncHb5ExejdLA6XugFAS",
  "key10": "4ukdxsQmxrkoX6N9B2n9kU71WRmGp86JxHhgNoTFdtKpmDRYkkk3yDyZefRJY2GipnUHPmaj71pmAZFfMGDfKauq",
  "key11": "8yy5SX64KZLZRBpa4uK965RYJdqHbN4qQ18PDGcJu1BNQcaeNpuphMx3Ae4Ba1RMVvRhVCmic54ve4hEuxrBzta",
  "key12": "2jUtsMboQSJNRbbMbLrueALZpk7xmx2HVi6vWyz5VP3Suh8A6nfmz8bJK4WJ6ZGG654b64qQaGgBe6i2T8R4Pox8",
  "key13": "4thxrVTUeoA61qLVc75jekZznFXBCjPYsuvyBJSbACFS1WVTBFmWCiVW9ELcnPBY3wHWZrk8N2z7nEdKEVbodqY7",
  "key14": "5N73knz4VvUZhRurCtjcvFN55CA129LxBRTTYFfuEhiZ1YymXAKxkmcb1YqVGuaJXsWniZ27dmAC66Kh9nTkNNGw",
  "key15": "4XeSuKUY1GkvP9z2byzYgSRnHRn1xT764ARqYaBqBZtEKnCJCeisvXStpL2iXHG9Sw7DwsC7a5PEpn2fxaXtWCYA",
  "key16": "jMWKWt9DHAQsFCYigtpanDNQC9ZT4tKaGoSuSHAqYaGUSe3qqoM6csebHkAuhkdAswmEuoVAawJWYipHjXRTkap",
  "key17": "4wmQYv5Zxxweu2rgWmwefsnkiZt7hPVzLckydKk28dmWTRCSLown9Qnroo93Z876y5woK2RCGQSECM6tLx8UxqBP",
  "key18": "moePLwh54jd6hNogXGng7LYzT86NWf92im1mAuSN1Vdv2P9g2BaxTWVu8KWDAEdmv52TFLTnGWZUvdmyZgdqnf6",
  "key19": "37HTcZWQxB8oKxo67f6P8bawJM72fV6Z1eJ2nNy9kbjTF5C2e4AM5eEY33yYkk4VGDcP2uZEArYWLxJRc4zcws2C",
  "key20": "3MZCWmESv2VZgfQLSyNLwc4dXZfhY3JFzQjp4mTjTutH7REQjX59xK7aBCWZgyM6RoeRS7BbhHkvgL8uvjRD4m4c",
  "key21": "4JfNPaQBYXN6g8WnktQuEViVvAdg5UXvaWjJAREhsRAxtCGSQ4rEVkShSwgZNNFmEWe1QmNQrgJdnJZTCaDgHAWi",
  "key22": "2GgtNtbKGLTQcPYBkvTQDeH3kx5AWJGSE6ZG74q6neYGv8eXE3CeUcsMb6sQehDoKoBn53ktS5qTvxc2PgxkLPd7",
  "key23": "24yuUfrK57k7H44MeCuSL394ymxr9ZcL8ycskoB13FiZryhXDGene8EadU6dH5HXAnHpLBg9r4ozVUPMJHc8d5DC",
  "key24": "4UzqxLWfUdTUoZbHJYkJEkxZE8H87zodw9cWNXVLLCMGzJ4vKggY26miMGC8dFPMhUAVe6nAnYqoKXdkM3Y6vNU",
  "key25": "xkWKu8are8YavTr1Uac17wjEDTGpQ2oSGcVEKVEqHBnv7v6hzubTUyq57PvxGrwbxTT2FwttA6FLjgdy4q5p3tp",
  "key26": "AGsG7i3CRbMirjZPRHqW3MZmdNT9yE6LFCcxNYQrajX3nU7upWsZiQLcWTiXxCxyr1QTdQiYLvFA3ktsW989ayZ",
  "key27": "2P2ekoodhzF8gDD8RKBMAMuMwCepFgfJuTeuaVtFzT5YVKefQNKTMMKTN8M5MgkfQNf4LNyLieutYNAK761rmZzB",
  "key28": "4cMzp14aFdkDUT6jCqbguRdZ9W9MA2miErRH5wVp1YoHeoiWe24Z8DexUHBvkH84KzsAU3PomNXqoMhHjc6d9fow",
  "key29": "5PxRZ5zhNBMSNEr3KNz4LvHwweVEKyz6ZHzi56eVt8FQEvNX5FfAiQPLKNACRo7kLV4UMUCjBgVNBkfopJVsE9K",
  "key30": "yT6PboB1M5cafkJR9Yj2xEJeXoRj4auzcuFzCH2bBb4KzWrcQovgGqFiC8hheJRKqPU19uZCnsuqGD7rmDnwawK",
  "key31": "551zWuijY5gcP9NXqYpWGWoeXd6pkhV99xdRnW462RM3vSiz5u3xEnCtrJKvGryAeYyrRU8Ug9PAv6qW1ZoqruMf",
  "key32": "2V2jjRSoRv42t2MSThyfwZ814uuogW94PsMf4G6TbuCvXLwe8ZpFigBZFvWdvJEiTDrhVYuYYZfQYezBomZUeDx9",
  "key33": "48XhgBUrG1YQ5xHgYfDfPvTBPX51zxXTuUp8Co8ML6vAKrJU8s9vnYvGLV1fiD7EjyJ3FZNLHbphnNLdZ2UVSNnJ",
  "key34": "5nu7RTPh9Xd3npKvuG3jpr2Uy8Aw7rvDo6e9KTjR2DfspVYgC6vnCrsprn5ii21sfuaXoUCAWGDfjeyn8U3ERaeL",
  "key35": "4BxTYW9VZMhkjnH6q7Y95kgz2pPDain5wsAyRE3d3wpZjRTuXebSDcEFsFWv8wRj5bDkhr5RdA9SXXfDWdXAfPWU"
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

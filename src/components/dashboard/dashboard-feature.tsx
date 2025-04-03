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
    "sHSHUYFfnPCqRdLtS2EwNsRFcX1P5YemV3kLYSkD7JecCbvgriM4R1qDGZ44XGb9Jj1UtJvb4WethFFEVjYP46q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4StqkLdCV9KYUbJ7WEMK4otSHrKsoBqxThF62mxPNfd8NtwssEr9v99nZSTzjRxwTkzhvYUZhAVhwF8D5iTs8A5T",
  "key1": "3Ue59PWS2ggYHWgJYqG2T2itgbCoyD87tSjxmCYd4dpH4BFRda5NyrWfahD4a9kBYerGRdrbVEi3JYGXtoJh5iJy",
  "key2": "5J1fDY3imSfj28CgELxXZLcmTidFSvtnUB8oAMFSZFUQQuQ6e6ZBuUuR6kLmXVh6uCk3Npmow6k8y2g4sE7Giksr",
  "key3": "3y5LKHz82wz2qPdPBtq7QWwnh7VZLW8HjWV4XP1JSiT3kntkTKuRCkio4UAaSFfFz4jQZCWHoe99sgjYXRsdM6zs",
  "key4": "2RydcyvenMU8Mgyum5JGbNu2d7N3bdkQiM6F6wTXtmj2Vjvd41pveBGHC1398zkAZ7YHtnAQonNyvzQS2VKfvmuf",
  "key5": "4X6xBVV8ULyip5ZZs4iQgsQP4YCqrnKcAkUcVx68bjL2SnUXg8oxGVEzD2tcNKtSXuPPGAu6F8AHu5EN3AntWsyt",
  "key6": "yjkr2s8A2PfYpfZ5ZP75nQX3U19KCJ7B7dewAA2hkDdZarH6rSdR2x52YuEb6M5gboy8CV4YZZVCxKv2QGsHJ4K",
  "key7": "2jXHMLibAmGFABymCX2Yyqdg48kENZPfVqrSsr86rqxNByYLDxJhW2Z4g4ZuCkgUKi9Mp8m5X17rkK13SBGg1FAE",
  "key8": "Y9nGcVSkw8omE4rUC2GmGm3kNRdxuih4EVEGtmnw9xYk4fcnnhHnWhWYTy7aKYeauujLsjceVsQHt6HtFAwqaPK",
  "key9": "mCvgG6p7m1vA3SdaGGTnenzFMaQFeBEJL5xKQi5buw5E3PAPDPnGrKBr5LYoASFZYkTMUQFUuVHZEfiozH3fwmu",
  "key10": "zzWH9CRRX3uxHNYFy2mGv8eWYQKrGtsyDPkj4Rbaka9K5ybQuNYVjhN3uUJrmLFJFDnytYZ6dq591akpAqCmtSD",
  "key11": "3kpwuQY7cy6EYpf36VmNMaLRtzmXy7JH1vhQd4VSj6cc3MWiQny2h2zGsSPs3qxX8VjKSXbdJMNz7x93VVkxUqRD",
  "key12": "56EFRsA9MGx5rkdmcAUUhSrCfsrEwFnBxEzq5GZYSWNsanPi9uRswzEJmyxfGqzQNd6xV45VRMyPQLMsK7bDqXrM",
  "key13": "3jgZMHEfujVJVQexWkVPrMkdRZz5gre8hLp3atmhBYSvUZW7YsAh4zymkXhd4PqA1ZvEedmw8HRUa2pEBHGX8J6V",
  "key14": "4KsHK23rgWRMTcmbNiLSo8m1ERNN4fCrW2NEQ6TG95vFkicx5VMTJDCXQkpGyUnTL428VisgjtMGmcV6Q3ywU3cK",
  "key15": "3HDEtABVp1vfckEK9ua6V91RBhLscVjNHcXVRptLnBPsKcsHqcAHSADk8nhJTLxyBwRe4LDyce391aZFxfv3nFxb",
  "key16": "5fsQCdvm5rR78wRY3o1TFf9E7AGk2t9D1SWYVfLiMms4VBo7FFMVR1cEqpQcjihFavwEowZ7pngZLg7tNfDmoCQD",
  "key17": "225MuxnD26j52o4piBKAvQ28U8mN4Apkfi9urZAoonCqs5ChXZpkVE7QpMSDygFUHdmxZZ17eUQrJdJaYfxYie9K",
  "key18": "2QHSZwdKkusSp2LqJr2LTs4DeY7YNay4pbjdz8UJW7MoU3bypNfyna9FYS4RdZXZ1ZxAh8inRdd3ARDUZdJCiHRP",
  "key19": "2t8Ke8oqCLgZEUgLiaUYyWvh8KsguRiGBQ8wUHg3D2u1ukhdRJQC8xzk77i7xDrjYEGmbx8oRsvKpMjqjLghcJaH",
  "key20": "4WPcGXm59z4qNpUeKAoQV1EaMJY5sRF7ELbTBa9s2deHcW1FBLyDgDaQ2ghNBc54WgjPLDgeyd2fF4Yr6nXYkU37",
  "key21": "37HJDyKaN6G52Mj1V1mN4S8QdmZCP8WdHTwxN7y2wts7MArCRKzF68R7m4LsrUNLuiAjnDce8Dj2qAfDTqYNzP74",
  "key22": "64idqxHTEBQeDq7Jg2qcV8W1NQJ3jkPFS5kZrVBWoQVXzAjpSCWnxtyGm3BgSKConncV7moa6vgg6taD1m4AbNmn",
  "key23": "3JgbScH1LYmVfUCSrmMo7xc82LatLxDQxWJxduARjTN7pAC7ZBdrU6Zs5AYTNUovm2jy6VK13mGYdft61RBQFNFB",
  "key24": "5iXCZv1PSaUqVEL9EA7BV2UbM21F1ZMDTaaPaujh82Le2rZCX3bU3ctHxLBbEULJVr5d2R33CSRbKwur8Wo39mcE",
  "key25": "ryRua7hERrKgTUayTBxBGTbrLnfDbzNES2eZW8tf1LMADjkJseS9VH9QWZ36r8hstxzp6JHkENFXQkKN7ZgSR3U",
  "key26": "2NNDH8Nd6eRAcdJqZbjRsR6iAL8SQH3fW3aB1vTqqqiVg6o2kpM23aRJBhDeKPmC7cPSPNShh3vyBYWeEvBmehgM",
  "key27": "5EWWg8bAgRHbcNhD2E874UvbjNRJpmo1XzwFgwkiiyCQmZj6otYyAiMseUnYKooNDm9VWdnAkY5uJFU3vLbhVMUi",
  "key28": "632o2w3aaiLu9zhDbpW7whmsyJCobEpgmtuCKDYvDMqT6JQpZL2MiCQEvwTBRNtdZ834VSkygBcuiyKAVxVyGPaf",
  "key29": "3SvZ182WdQBbvSymbVTna1APueVZik82TCTTQVEZqyov5F5DWL6HU5zaPPKxGBm1S3TK3JoJ3w9oYhoCHaQKCv1d",
  "key30": "46p6GfZV8C6eq7KHkLs9vPqBKDGm7Mn3nNkPuNYDmShinFQPwMocAMmrssdpmF9ny5oK8oqk1mwXS3CSpKfv4BYp",
  "key31": "3bupx5wbCXKQAQrvE4h4hc9DpAFBGSBSFwsLwBQPvoCDfPVMdpfJy8nPkukqoL8G6Ewc1hWPfM1kk3Cf1N8wWitS",
  "key32": "3aQ7Qc6RAoSbBYibzPr4aybM8bYDVE4Erz3KVvGu3KuFMDCD3aAKdJ7Crw2adE8RAdCZk4wF9gXbVh6RDGWYVSRf",
  "key33": "39a8mK8Q7LuhJVJn7GxYkApf2KMihExZu6auWT67BoyV2wuGWobVHfB7ZNhCe66Lq2tJbUSQVbYBQtvTGBemvhbD",
  "key34": "4J7yjvFZ2wiAj1WdZigdmgTuqn8HoWn98iwcuLr8WHeo9Wh2xJrQmpaBcXmyFB15VPCVjpVLMufQjAgwZLLHtMer",
  "key35": "3tzMojq7zqiqD29mBomi7Pi75F3X3LuJJwq4Pwkt1fb1R3DGKYc8A1ZRYU2pU52d1t8TZGvNhJ7zuzmF8smBkJkM",
  "key36": "5tZ7s5f9EnDyPMHYX5VP9FyvfzSFM6XDdjPZikCZKZ9ppmSFtCPfxEVvNiWRyEW17iJErKiNHBAyqDxAbu4Zk4dU",
  "key37": "CPbjZXKUeuTXckNC9twMw53vEgnapcF2b9iXQJZGFjNLvyLH8uGuL4qmgT6vHRuX2rvN84pYhsBDCxd6RuiJFKn",
  "key38": "5nwtk25kMBhc35zyzabqTLJAmiDGgoqhay5XmHct4BhnKJor4XqeLx58D3DfjwHvUYdPA7es3YMKgGHed4kpmhSW",
  "key39": "4B9Tc4Nmgs2ieA6MmBV5gsgEUiUEHh27q1mjgQ1cRA6tZ3k7oZB7hjW7SRWTgYpgwQRKcG6Y67NriMPHdGFEQuL3",
  "key40": "Tq2AP3SCTdDaEi7WAyqyxxQGw1PqJhaC4usn7XKBGNVFjtti5RcU1ucsRLWxYbSgzdfSU1CwmxGFexawME5t3Sm"
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

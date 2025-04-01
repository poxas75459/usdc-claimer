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
    "px8pf6ffNhRHEZvLzray4qJtmVt9jmg899uLJ7NH8QgpgVd4XK6bnu8z4XtjG5N3jW37fvDEQxbWBMFxcsDQPpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDAJgLrtWDK76o73Ya6px2PEYH2XQ25DeSWYmcpjAuFRFmRBighCkhnoiG9Przoup26Ecf9No4vBELZKhtTThC8",
  "key1": "55TNr5zThPMnSXqV2M9A2RGD9fi9J3dzF51chVwQ7PLiCPDKkcP3ts9TniUq4s5kKYyhogJRSM7pBJeKXp51uigo",
  "key2": "4qFE4ipTJgryS1N8wZPZegdqyZWxMqMju341ZWhUmcYFv8hVwSqfKVM8ookad84suf5wKhhQXvkCeg7YuJrP3t4e",
  "key3": "2bzo5nQrThuUoLSRfGoyfunQ3fAb5CD2ggNEww8FXpqGtwJHcZQmmEUqPR1ePmY1FNJdRDG45KdVxYxx9EFu7Wr8",
  "key4": "5PVYFTosf3xzBfKQmGRb88Bd9MrtsBHF9uWw1sKDRsq1TVCLHk5gqyUSw81DUzjewcsM6fWVs2vyzwobRzS4barQ",
  "key5": "2NyAAtUNsdkbqTCk4VFgQ1an5ghtidV1r1WLANBgCCxs23DCFMwdNADrzV6kvSzSGFtMnfjPJpLS8JaqGV6CA3iU",
  "key6": "5wVn2x5CMF9121fpk9boS3VCM6Rose56UGZuJzzd9SZBbiVvZJv9pk9TvhAiqoKakf87SefdLr1VqCPM6v6L7hGR",
  "key7": "2i6Qq39Vyc2wBWTJ654cBo5AXJJXtkRJryqBvKUNxHm1HxbZ8AyLWKUXJM2WMuT86kUBNTvnerZ6ZSdmNf4n3J5v",
  "key8": "3d7w2rmVLmN1kHDJvHHZzRDhW8x9k4JSCxVa2xUg9eFT7wcumPBA1W2nuRmPAznCZPodgDaP88VGK8ShyBGSb3C7",
  "key9": "2Pzm3bBGfM8eRPxSFTXuV9QdUQTWUe6myzXH2C9z4qFJwtKvGcFJ8trmGgAdZwBK4deQHhxVq7p3SMHrHq4doWSs",
  "key10": "5jbo5j6SxWCGn7WzQ1SaBi6jfzom1SdXKNzwbkWjW26CGX5QQuXoatRQq9qcExMqefcpqgbeXiHsLLkAHJ3ewxhP",
  "key11": "22tE9JKbFvZ1LKRFViVXye9Cx8qnFLRffpkpppe4FQLaraoNYX3JfSnrVUjeq237jmtSaqHb7cAMiHD3BFzLMJ5p",
  "key12": "SmAbQkbAciiWfPviZmw9gR375gnD6L81F36wuj3WXE9nqiFoo9PQg8dHHu2MuPuDXFbZE7hrBrz4bjJf1hWc7e2",
  "key13": "47GHrRHYRjpGRLwsRD93RgGWMysjAHV9GzAa2f6iwkvbHMP6keM68uhhqusM4s24mmfRq9tfDEshgp6qmoebKBRZ",
  "key14": "42C5Nob1QW3LfA9QbwLd1wFsf31p86HgSxGnAruKDmpix5GRnyU88ZYynDAebuDCppgPpQmWFHpsE1NswHLmKXai",
  "key15": "5BCKzKSQsjUAdsEK1K9iSdiqShuvmbguGvxSYBevBygpRxw6brVXE54KckC2QTSFMaqYYeEM92ZkQTPF9YwNZoki",
  "key16": "EibBGngUFin8Jj5pQ3n58FCQpxB6UaAD1ueuV1byQE1zHARkP1yACw6uWYcAwqvdAZZiJwU6MaUiyTBV3F7yjD1",
  "key17": "5SDHrD15gFRzGJjmKWNSM782R8Ff7msPV2SYde6A6B4Ssb55HVsN5Qf5uu9Cw9pMHf1dyY6FsxHs42LcKCuAzDcs",
  "key18": "aXQpno6hDgScbyTzpZSCSU8ZH8SpAVehQeBRYJKaj4LNuVvo4pj5ecd71mHuFuKLuVhXPvx88Xs9F8X2nmPyYY2",
  "key19": "66ncyw7j1RA3XombhvUo127DpLCwMjMXYLLvzo4CMhkRWpqNPqTf98SVtNTHp5qUYjTkHFBNtfYfUV4fCVbCaPx8",
  "key20": "5pk59DrDpsjbQULSZo5VA7J5AvJbhKoUZyHxcyeZBM1zro8pWDg13KCwryRnbqoBfe1LLUoroZETRqRCdJLbrriu",
  "key21": "5trfnkLjVsQSeFuhmNQQKN5bRU8LHpZRaAbYpn2bAuaXMXt7LSoASz3mZcRMNTXPVSbCzXk5RDYuvvSpRDXJs7Yj",
  "key22": "28kfCnvSuUpmYYbpjU8SwBXAxcsCrUEr9AGxBGf3sy2zgudEmHoR7cikiT3TYNFHMxEYVGdfqVerMZaDnkYwbvS6",
  "key23": "5AKLUnseJhoFKB2LkqiXLuibZKWC6w9aE3TBaKWK6emM6h49gBVtogRGSJk9QxoSRGqGwHw6HFoKGNuYcmNUSX4Z",
  "key24": "2vJRJte22VVF4XCSpcNvMqvCho97yPRg1NaWw2h7E4CGKFgboCDAdbczM8Vab53zj7SKdmngtZkjiQ7R859BgZNN",
  "key25": "5N4nuFy77hjZ6rVRtB231NGvk7awNdg7Hfmb2oS9SFVHNmmv6A31dhqSij6CjWvhZKDq9LRwXBziQWAW8xgwDJnZ",
  "key26": "gCdiRnc9TsCbyZEchoPk7Njgp9MqxuL1Uk5ZwtAdtfcByiAcCbEPFrwcrPaHHFqk364pJmaAdyuxaD6eZjLtYER",
  "key27": "2ZCULqg97Yixd5Hnk32VsaQXbjXKDGazjDR3dBYUcv1dbLYas2m2SVVUvfpf1PhAWuPpRDF1wSHcaURMAah2tjrH",
  "key28": "3XZrxcnt82g9eGgL4VU8mtnbMViBNquAVpYLejgDPqzQzbQCwFSJ6nPgz7L3nSt9yahS392TCofKeWN4sbpFR1pB",
  "key29": "2qWgV5FvwPHyr5DHKe2ByHiX38nVBMoxeQWSngHFhwFbcewGUiJ2HkbvZJybJAKiPGLKYnyYy341idtLBQajebi9",
  "key30": "388ez4zaeLW4wwE5ztJLs1bQxqucw6FzNjZur5rPEC1ArxV4nvkNp1MEXUr1iMgL54zXHW7KdmSFGUTNmHR2X1Qg",
  "key31": "4pPeXhvE52PstVe5KVemqkCmaFGbN85MCTUQPK2Jwg2RJHoPFoSwpG5jBd9fJQo3b2JnuR26Nwo3fjMwkTqiEbZS",
  "key32": "gxE1Vdoi8w45iwEh4aZBzpKpUbEAzsaffAEFG4S4VGKH4TyUHeve6ibLJDmWsUf4GQ6JMufXBxrUanijuYz839R",
  "key33": "5xR78rTkgknELmxVXEBFZaNFEcpio4V5tDJnFuH8gGwEGQFxnrb4zRALihNXa3z9VtVsvKttrGjUZGxJvbYhgxCk",
  "key34": "5psk8LfM4LpeMRGuW15JRZ4WvbcrsAHzvRYEmdBzKhrS3qEn5b9SnCtNk2QNAzgoE912QsGwPpoBkgA65KCX75Vy",
  "key35": "uUxFuQgk9npcGs7Pox3z2yK6zn6DahuwExUMDcTBdzq37cBrGA1GefU2GM7Ge5PXtFguaAa5b1SaCEFDN5FitcV",
  "key36": "4wUe9GQQKmgUCD9frCPtdgRMP3YBGXsCBZ3t1sWomSNofd3G4Wa62hXyPEYiSDhtoxfig6YQBRpuKv74ak75Qv3h",
  "key37": "WQWhdXBBmgLwu5qARbYs1YY3qtdspGwTUbCuCEPnJW3tjAoZK4LH6eu2bbekK2HZdSrvkxzKNkTpmymUeKiwiit",
  "key38": "5UiCTy5BWidSHduVt8MPrZFybnzEgwvhrumkujusFEduQFQgC1TP8oQchFhjA7MS5Vz7iUyDRewxYMsT9EA7K3uP",
  "key39": "4e5AwfHo9dPpXXoNaonCaB8a7Ex5CpKZa79u9deadV3LnADzmSQ1Efnk4i7iCYS5t6pHBQmunZW7t4k8uDMWUvnT"
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

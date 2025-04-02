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
    "2Nnr1Y4XPEqrjAMKJ8yLhysXLNWH4sEDuUxSNcXJDrawoZijG2S3jyyLuQVYzVFSmV8dszftjHiiqUSjr26sRmfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q8RZ9zyt7p1jWZGpohXnBhWAirQKkMRDveYc4ndK6XHsUKke86BGb1X8K5NxKmDUhzL3g5UyMaec9mJGSEBgLmh",
  "key1": "21pynRZrSKWgcvA76y6wtpdJxZbST3Y1VAULwFEf6Ljbtqsdr8ABE32d2jzYLfAfAKjL1Sm9VHHVZ5gKMnWEbwSv",
  "key2": "2bgxt4sCB3j5HkPneUG2ppUTy2zsMcD8u3AxAoHCb7yZh8bD1ufUHDSSrujN6qoJzR2JWyM55XDDhkPbaWgEiJqb",
  "key3": "3t9ciuFf84xHn7dWhHM7cmAFrsewRwDhD9UszTTPrQZkUEKmqx6pC5gq5tqpnAKeiz3n32SoqzVv3t35Y4Sritta",
  "key4": "66G8UZNC81S4DxWeEqW73E3GLvCFY3ynDBMWyQBTL3pWrJQNfrf9iKD7EU5qJcZAEmKX1VNEMMmwuE91vXsPJdn8",
  "key5": "63TnCtWDkUowhJgbmDupMkar12XD5UXHNNF3tNRrapiQjpURzRWswPGaZeXMtTtAKEEjrV8QenYCxAdmS1uihoED",
  "key6": "5my8sUKRkHEgSS6jPQZaa9jPd2E3pftCnRqzUCY1TQ7djzksSFj1guVh511ZkiPXam3eQw5oTxsNNdvymdVqA3Uu",
  "key7": "3jWhKWpLCwBqHy5jkNzeoeJiYyEs6JDTA7cKJdSnrv6qSzViLH6muBnWRiAmZ4RqmqNcCQVFyxdZBBk4za8R6WAR",
  "key8": "4C7ikz67Pc4ueGBdbwRQhGzkFJu7Qs1Mhh7HhbnbtLSsuPWkbdS5SisrkA27HMS3HJq6sPodosLRq8Aip4bdmaDx",
  "key9": "5YBPNFwkyU5zGoAWoaz5hxckqhHpzFqSwyUzaDD63bqSeAQuwo3UHRL1FPZ8puyJKqUckZFPf5rBm6RFL9KsfGuN",
  "key10": "2Ks13E9CMzyAqSYficpDDNZ3r2nLXduiukzm7q25Bf7GtUo26rYuPKhiqeJchLU4gkgMwmKkJJtniFcGhXaQq2BV",
  "key11": "2uwhXSyv5ZTpz3ResMAMxX5Y9nse1fkTs3Cwhuqmf7QPJcQFEkm6CFismEZbB2qQNV6KAjnPbGcZSxXjQo7BrsbM",
  "key12": "26HCTRGRPKLdEcbzBVED5mASnup4QXcqUVv5p2n3DAnnw8QSxDjbYRtUHZYU3Y45hNcNc2XLJj8VXaMiFhFgaZ2V",
  "key13": "H21jbAxTt9Sorznyt8QbXeMSDmP7BjnGhiM2dDAyAuS9oCRB2GmRwgs27Jqsk2nujB46FDoR8zWkW53an5KGhd7",
  "key14": "45Umkr8ecfY3tHACFzQZGHYYkfd6LDTwA17V5a93PhniRD3uHMXudejJNnEUQCe1yoD6GFpPcZFvkPMyuWJP1PKj",
  "key15": "2f2wBbsFtomV9cNRUjAek7YC3vyeVcSeNaLc78Ubta1kXQ4qRqpzEnE4D2zRaNeq9sKNuNxoZ7TebXS23DMJPwDb",
  "key16": "2PFGCGAJogSVSWpCBc1k6RTKCYvwpS22UcxG59MrykjXb85mJHYXKu3BirnLHQxSJv3ibNBAAta2NtaunMYHjzse",
  "key17": "4ySFLvyk3Co7dM2afDYLUjY25tLPPPeDKP2Diq1NV3Q5mxxnMys9aA2bRr45tELdbipeW627fDhq9mUKVpQ2JHSJ",
  "key18": "2F4Kn3GwPsWnusWEznw2t5okMJqVzinwoSQhkeQuAZvR2SFVdJszNu7ohabd9ajpcDxxwrK2mkXDr5RDjVg3LrX",
  "key19": "4KFRQdnhWhLvHUKs6RyZ5PaaEoXWHLn7weowjDNby7XgrfouS1WptEgLm197CD6UTHeVGem9TuQDwMgUmzE4u1fm",
  "key20": "3Pj2JJB7Ygd2bAe6pDLzKcCvvNHuChtzTdeJGkwqPwviCanhD95WASgMvpg62iv98C9R95ZoVsk9D8yj2wrWsDBn",
  "key21": "61MjeygwLohVaT2vVPSzYn6MnbyZSDaAy2QfHLKmX9ceVabvxSEzMomKzEZZXZm4nwzLaMnyD8XKd8wtQiHknUv1",
  "key22": "5zH96rYmBtukFGcHZWFXpM7R5Yaf36P4QV1m17xfgkLbLhAhnjL1Qkm3eghdWCqXxZE8nnoQmQ2p4c76rz7DeRSk",
  "key23": "3ZuKYCaN25CuSzosZCdRKq46AugEDFkxu5pKZ5S8jecsk3LHJEsU2RyQvh8a4sN5yw9c3R3wvRLYL7xYHSGwbceh",
  "key24": "3n8xboaWd7J7ZYGzRRQtsUqcsAGNYe7T1syVPqKX2vWD5LdHA535cgwu1itXtwPG1xz6duHJYTWtpHEj18EwsQiK",
  "key25": "5ajHq8dBreAVx7LHhF9v1z2qmx6G1xgvwNeAAtQMjWqRn4ivGDxtiW3bkYPx1NzDghqrzjWaCL3o2uNsi12HBFVi",
  "key26": "CUyTFenGuaNFd9FNbzMjmedDWgovhaPSqrxQN5PAF2EK33x3j8BsPKgvjBsu7vLNTfeQpyG9XQCsqeCKkuUhmE1",
  "key27": "Ku3P3H2gVS6XyFXWFJMcNQEnaa8neUC23E23jJME3rsm2YmMVP6obrrD7CP5Hr6ozEw2NpdaBea5MkEvCw1B6My",
  "key28": "2xsTyWxb4mKo9DrdpS3h12Pcs6ykCQFEpRjzaJWzTjUbAYDmUJkooWW8eR9BTF85UpPhetkTQDWU2QZGdujd5eEg",
  "key29": "3NKb4bVr5VHjNbt1WSbWvZ25NfMtcghZnpKy8W7vm72UevjEJguvifSHp8GkodfU8i7FTCc8i7TzuYqEvRd8Lh4Z",
  "key30": "2P2xi9m5Xa6gVxe51Z2QGgsf1QC2yhXkeEEDuo6QkfXfuKGqDpQKLLHqYtYK1VPKDKzPifUAHqPNz7jmUpYCpuWe",
  "key31": "8w3u1AhWqwfrdcF84FZrCup1uDEfnrnV1gZfm3qWgFVLdNcS6YoPFdR8LzqGQQbjJysmQqVDqAcpgucFKSzf6Cz",
  "key32": "5LxKDRBMKU3FqZKvaF16sRw46LrHMtAWzmbtpvv773uGJqPnPMfzzRdErgJbJ9tygzSzoeY5NGFJX3raU2MRxvyD",
  "key33": "yzvx3ZoEg4XuLy93niNr5noKCaWdEUtftMDUTAK4qYG5zK24gLmRT7LZ46YZ94HvDEYurLbFpofwZXQLvCW1ixa",
  "key34": "4SPkiEBZ3eHgtgqrnrjf7o5VjvB1PYmRuoamGvGcb6i19nWEkAsxSzwRtHCrUJrhJceN94HVprMS8Co3WSxBsZ5N",
  "key35": "PtKvpqYz6YFTtT7nyu64DALHsW3DaNsXzaToAeHxPiYYZ1TdcgPRtzFzXhFSu4hrjbGyWqLRoPKGGmoYmFzySdF"
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

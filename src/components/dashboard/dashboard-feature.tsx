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
    "5xQo1QyAeHuzYyUwA3X3vHr7XnqWNq2NrzGVuHK3yDcUdJaFKpE3FAJ2WTNb5NXwsxu55aCi29TnLQwTWRkqPqr1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZjwjRphF8MY5BTVpgMxZn6SDpH21FcRWyy4KSmfQAqra3a2hqx3X4fx3CAdfvPTixSEMotAAQnMkaKMrkqwMk2D",
  "key1": "v75grqwZ8k2xg6gijGV1iLT9FXtXmLdtXrxJ6vZmSaL9xQQxQYGdXPg1HZeHKVyTPgynbQiCqdt8sXTCo2A3Ve6",
  "key2": "5qbdAR5qv7Ndbvq2mddtbgbU13QJ6ZD73T8AWHLRj4smjZzQnQ5Y1WGVFpKaMM62bBnDQPdqAAn41vrSYDcFNhch",
  "key3": "1fGevbUtnc5nMxK6yRQwjweyFXC2zSbhqjKfw1fHBZxgzs2Tqwa1AuW5UEsnqoGuvfMpftmLk9nQQoiTtnGJ3h2",
  "key4": "tSr61awmk1aadq1hpuJVzYNusgSdokCKZnbQHsJ3wUEBNeU9DxeCauhD3Kpow9QuTKvyZb2Gjp4EQJAoJQxPmib",
  "key5": "2MqJKsrtqETLs917fKogiQrEAtAipPgZtcDAxBBU1YgeDrQsHKS5RTxFG81jcyHdn8KqLhXpmF8aLTtgX8GqZ6vg",
  "key6": "4fS98iUbJ4JeavbXqhyN8M4DMqHKsmyXNk9GLHovN64BGaB26kVZGsEUx5rkivnUkowzxZAuEK249yjmgAsGq4h1",
  "key7": "2MVGps47SjJ8nG7fM6czcp2jT8t6xk5Q23AnHHRavXnrFFzfU6gGBNdFCyFxQwR6kYhofQXXLAcWviV4axAa76gf",
  "key8": "5zNPiV2VCvGVtUceRjEN9bzTZKTjbYQk7U86jE7VQQn1jQ63kKMoWkyf2Qah8QDg3DkxexxMQQ7fvbGdb1oQAmMp",
  "key9": "5QB4yvYm9EJymmB3zvepDGPck6yymKzQDpVXgnWreJYYCW65s1rvJBMJQNCxforhm3EDUsUwF1g8eK8KpBwiDPLn",
  "key10": "VcDmsv2Xr76LZsa4Ws5hVZz9AzoMeZAWQbkmq5LLi72hBvLkqhd9dtBGbsVP9oMM4jJ9rLczf3FKfg6uUFs8Piu",
  "key11": "2JMqCd17ja7Q3Zuv4zqU8AamKcDhdn7q1AHQ3yJ9nVQUKa13SmJzxXehppHZ3NyGKGoBB2Px98tpV2mZmEzApq2S",
  "key12": "xs8qpnPH7zigFEVPAZzQcSz9soSNfuQbB3Dc677hzQSN4okrVf41gBLsiY8nCEAfAvNyimsjR84osvbRgEbtn9F",
  "key13": "5LHjoeaxhvXD3ESNWRQEpJgC3TR4hpiuvLD6AkPHGG5P71y7iVCSuQdsvXQHrDLymNkEx1jr6aCLYsbasFCgF3pN",
  "key14": "4Z7RfdtbHn9T4JYzPRYXNxX3GxbwB47sQZcpQcuvG7xRQLwHEpXy61iYHVrB1UVvhhpH51qNu9or2EzNpqY21tLy",
  "key15": "qMgL3deHbU5rE3LXZLv55mDCMGSJrS29ovkhqtUVFh6v41p6Lf9Wsi1k8egczbxaupHmQUpMyqJoYYpyCD8gScH",
  "key16": "4F3ERaDLb4wbhoFkqrrnaq4MGMpBuboTKuuaDtDeZgKyFeoJUu2xY2ZWAx9ZzLJhoyhWkJJeTkXrhtuKT7dcD2Zb",
  "key17": "4nbbdiVN3ZX1kx9DWqeRZq19ggkhuatLRuwU1hu3GBBJERHTzpLQEcKAtyBGLjC9w1gvRtr9f8KeFqpz3ZmYKg24",
  "key18": "3jFNh5mQspY5S5q7pgioWPi7qpAt4bE4CfK5Z2qEmLTxh63tifX9xPiLoWFwExunQ45pF7dYv78UfKVPMyxpzcjv",
  "key19": "FtTej7hFfsA5jzmEaQVZi7tuFaqFTxMutQNeLY61fLMxCNgTTNzte79pbTDWitw9Q8hxztPLfVRyaQ3kCA9NNAT",
  "key20": "4TqJ2tsStjgAVyskE6Bq4JeUasjC9Jmo9GHaJekQEyzH7Eza7qs7aAgsKie7nwAT9qGr8VddbWuYRUQVC7yCx3B9",
  "key21": "5oBsMuGKFyPVPEncuQ5hVzScnEviSyASJrM6Yzcdpg3W4EryXcJJemPjLCKGZwMYPiN89QabwEWKLf69EfpDa3Vq",
  "key22": "64FSCCd4oeKtoU7Y7LJbF3D79WXzzGTqiKy8dENAC1kQPkdauBdUbo1BqvtiBcxQpC2d4vjnSYePQTbzV7w1qHGH",
  "key23": "oFv1KyQg7xYoBYg1YubFp1sRnxH5DYEGZqQkwYEN6QkpySC7Fywyyvvx9LtPuPRuL4wGNJJ7am66RLUjhQmkcZQ",
  "key24": "5jqWcC39mbaHyf7jqrDrgmYCDMF5o3hxyFEJHUMB2MA5qNDdCfFLqvRboaawm89uwhRk81fhR9qTjMCcErsKD85B",
  "key25": "5yPBgjQf83JRBGXi34GhsvVTgPHnAE4trY4ST2z4EKseaYZV6YGrvxy7TTnCt6Stmuoes64b4777jzT2ZU5G89QK",
  "key26": "4sio8HpmmHPN5rnZSL7HQbruLWFGNYFN6aH4zGpjTvD5FSZ4VbrHeN7LW42Cs8muv5NueWWoAiyQvLMdftbCFBMH",
  "key27": "CnwDgHDsSMTqwLJmjWJzYCaXMfcmX2nUHyZry5mSYPmjZPGQvbyzkvEzCtmLzhXuUJ9dj4n4rndNAbSuQfPKyeZ",
  "key28": "3sTeBFp5DMMi1e6WFvQXxR7281C35C63xK8VDTHeg7uBZnpstjV99soRCQ5VJmk81FAgvDiFEyJmkMTSRzEpLhBk",
  "key29": "559LwgfHTvctDyFRorKENV4kyJrECgM1PqmaCYGRbS8ssPGWZs4NVY8YE4XoW2GTB2E7qwTAsAJYKw2iFYHbbxe7",
  "key30": "24AMnANVMwfYZLg1DwzYDvDL8EFpBgQ95Qvs24TAkEBXu8oLxGdSN2s72AbNXWiXMRFKYwRpMCQSCpTpqzCcMPTG",
  "key31": "63VJuxPgC2vJwnCiepQGAyQ27kxUBUafyGBFWNjjtY48deRC2FbdVL1ff4iiBbbEoNmdvLXcB2x3sCX75BaMRDTX",
  "key32": "J2aab68oW7ywYwQHhawycnuMK6sH4djpBjSGiYVGFqNVmdQpq62VmLmcUsYfDtLr8gD31bSTzLvnt4dPttjwEy8",
  "key33": "zuA5cWisWTsgP6VYaPZrRFNoLPU7r4h8S9LUBLS8ToRyeVi8y9cTMJyczizBVaiygjCHf4aUR328Rj2uEAYjja8",
  "key34": "4eCVenaeCjJgadd7AwnvYMiWRPS9gNQQdWabygSemJm7e5jVHQSf6yjBvGDi5nx4Po8viob847hvGqeyUMC8j2mr",
  "key35": "e41jLxZRvB3rUuVsvFmgZk2cVoKjF4eqScPB5EWCcDgrXu9M2AMQmds7nfCSToUFYqzab6jML5BruMso7HPJuPt",
  "key36": "3NbfaMad84DJyTkvZfEBSHzxSwUvx4e9gMUskN61dKvga3p1ab1J7C3896ociNaMt6p9NYeNKmzqbsAx7reMDtzT",
  "key37": "4uzxTiHDePY4oa9UPjRH225W12oHFjfvdFnj8BhMrgnkh6QfNCfs7jBmJdt3rWV6jrcztTVNSHSmZ4goTLH3makZ",
  "key38": "4AX4sxBdBVBfL7M76q4BkhdUaiF4C5bCq45KKx4qWSbrYZLp7Hevy8JmTvR9k3rmm8vHiQPdgKSNuf2jyJHMD5CV",
  "key39": "2a734nmA3Fc2GmbHaCLN4LsSGHn5mr4j6kVPGvoXko4AP5Q3RbUJUu1oWSpxp2Znr8ZeGasoJ8vDY7vgH2PKCpmZ"
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

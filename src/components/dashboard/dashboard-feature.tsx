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
    "4yNDnzKAiE3JrhupvAD2FCRMXdwQPxi2AnBABdGDrdgG59r7um6ntfEdehDNEkG5YgpcwJ4j589MDLkfaqikFTkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLaVdA7F8LZd7VbK4fvfpWT589eSAXx9BS9fgKGdJt9gQ8RTWAXgSeN8f96Q5yNqvrzVxmVXFB1BrD9C3YZKPDM",
  "key1": "5sUds23Amv6Jj9mdBTsQWHzzaJiUrx7KMuS1Bd1SPfgZLWEFDzA4g7Bdw3E2dQPXMYkRGkU9G6D63d2qVrcK4ARv",
  "key2": "rc7nfdh2xFyWYQb4SkAwEkZwcdCPxYCBUBL3fFM9DgQCgCwxNJ5UwmxrrAgc7qV4WfmhHohPHzNhHVnp6Q6GbQV",
  "key3": "3gouYuYALDQ2rYaLjGgnGVhX2bFmXnBHy7J91gEVqXKWGBUmxUDLb1Nx8Ed7hgxLoDt43TKE3GCiBX4bA3zjFM85",
  "key4": "3xymuoD1gVubvsPWHs9YkUwoc3acCNyAv48AHJwdjwRHJJkedTA7z7ocdQN28z1ytb6QQHoBWtoFppBpdiMyFbWc",
  "key5": "3TLxdj1fHFXuUxMi6ANgbRnseogGHKmGo3L372xBfpBA7kuuZSiN8y5UQ9YRuayWi5GeRHnVfVUCiYfmiBiHcZvy",
  "key6": "rMNFwzyStMKCPwYzyr3DbopoX34rViQCTykgPZC2K27MqhLTohNWW5JXqU7xnkzkQJPpP2MdHffwKCBTx5FwqkL",
  "key7": "2AvqCFz5NjDLSwR9ruwURvSDTKD8p1P76YyLYc6SkJ2zYZkR3NxifGibYVKhC5B2ywjDEFbBVAKpxd3wHYE19QZZ",
  "key8": "5ZztzEiu3f873xbXBMzap5mxfZYSiAcoBvxjdY9NmG79jBWZ1WumLCk2PmxtTSAK3rmv7Q3SkCtDz48GWy2J9Va7",
  "key9": "67GYuAgP7ythus6KFpY9TTiSvPUnMA3qCxTZEKZ91h2RCY8UmHW7NqPqQFHWc3kED3hWUquhLt1SYjSF3FEgNKwS",
  "key10": "ksg7KPNZtUvUk8SeDU6tZpCBUeBoKGJpQbs3Xk6b2WkyjN6ZYfvy1B78XY5MZdvrqATj8FrLKGBkJFx5uW3AyTn",
  "key11": "3CKy8Cf4K3Nvpt3i1yh2mgoxhQkFjKxHpRJjX7nFLASrPyBoVQKPK9kR1Vdcp81dhiaECP6utpLCMKh6xTban9vk",
  "key12": "3ZtWYkNBmujYd3CdJYBDcdXwCCxindMsWjuYUMovR1ZbNV8iSimQFvyxGFopVkim9QGKAWxwrG5K6FzYepTx6JNo",
  "key13": "4QraZsGs9birSsnS9Cxq8rE8F3Gy6wpecf7ygE6YAsDgQ33th5CVBVJHv9GgvPi36cbgUm6gUoEGhxUyjDn3S48E",
  "key14": "Hq5RHxquag5bDpeHsXdZAbRsiNsUDjyUrVTmPTyPmAVc3Sgp3bxb4uaRmbKmtA3YgJTG39ccHoPbkqqEs9C4Ph8",
  "key15": "ZYuemJk7mGcSxmpCG2JtDtS8TsksrhXv9gLAYBXyeLE3iwAgTNvLbEzHUgRAv9W79wAu22XNS14n4SJdL8TRnnr",
  "key16": "3R17Rk71AoQca6JhdfqMoM1UbgVscGvoZF9EQWe33aGHkqFA8juD2k5vdkpk7rBLzRFm5EBaEw2Cvx3yB6RTXpnB",
  "key17": "58pGArYmgUrdQCBbWyyvdV94wzSiLDdPsp1QJxxSUPiHB3g539zJXxSStN42xDAj8jYS6AmPy9fRMU4FysFszHjS",
  "key18": "2VSN3rk7RCy9LeWrdGKmzamkdYvrDPtUq2N1gZdo6n2LH4V9KYW2WBgXUSWnQyEq7MMyZpqYvDXjmkiQakWAXGrs",
  "key19": "DnKPd4qwS8u2jq31P1Av96oghnw1CTJzqW9RcSFqdDkfeSE4HAJc9va6KWwTcLsEZXeLgwUMqZWqjpWp2DEyawK",
  "key20": "5YtzVQC8eVNWP2BhK2oYgVqTtBn4RLAZ8MXAAtZmxPQEiB5idwGbujcxmhV2FowxvV6rojqTCgjA11ddpSzK2kEc",
  "key21": "27puvCmTcHL4YKtMUAwbXatqbRuHgE6mbDjZukuFa3e1fx5yE1FskqWkeGR75A9LpwGu52Y8qaboAi53ACQYRqXv",
  "key22": "2Ka1kyzpXLVwUuuhBATRD3iqMBiXjY8GLpNypwCR8Bni9XccK1zVBkmAqXF2c2h1CJjivtDTHA8gCd2tn2GSAWDp",
  "key23": "4RkityUF23U5aPLhAbczw8mQp38xVUoTrg7WGfk1aVR5TUbXELvQt799GoXShariUmaFBysxURVbaE3HXSBc7hf9",
  "key24": "4bBdCcpyYWDziC3WX5QTq8PDhUgps8eNGhHFMxcTKzLBd32kbLj25g1e4rxSoXfXcXdQJDW9CwUV7Z6fp4RUmPyY",
  "key25": "3u7hHhMtUSGA9VoCPLiv3W1Eo5FA8XbsqCBJ3gv2hLFfjiFS74C9aG8skZYpmcRpYiVRutN2TQiNwyxB2PjTTC8m",
  "key26": "3R1Qvw8NwfXfBuE1FKZLEg9nzeq8FJRmT4sM4yLNtVrihwvwwTiXn2WquycbPKFJ21DxMubDnFNyv2BwUrpG6cow",
  "key27": "rqor1PhbXMYJQJB5t8D3n3U3MJz6yEEGmFnH25V3CenEtjKRGfhknjrLfyQEVKr5ghq7oSwXuWrNw3GGaBTAzqC",
  "key28": "2pcqFPT1xZWkqbT2E2JN8jpWomJwDp85jNuLGGAtn529WWMxVSfJ2BEuSoU4W6YbASCQxttajaNW2oAJfHNcWjX",
  "key29": "3ekhrCTjRvRj4Mg7jopqHisLmKK1bgXYh7kBzyX9CV2c2wxpTCZqSAWqY1tWiGXWu5pnC7DUQiHAX94mANtKAJ5v",
  "key30": "5gkihzqLL8EHuAKU7HhP9jQzm7ZYowZySm5o96ywaEJ1v7QsBoCcQvGk71NQUWPEfMLSs1m6dK1KJMJwH6KvJisf",
  "key31": "8UR5FGiJSdUz4cHHzCaYfyMktMkVSkk5DnHGj6RwCoPMoammfweSSS9w6kKMNxW5FECwKGMQroFrVQ863ZJpdHq",
  "key32": "5qWVeFt165me5PZ99Js6UzAPzBjMYS8puVfzKmCg4jRxE2QcpGUdft8HzDggvrJswwptKgTcP2EF7vTYdd1dcX1n",
  "key33": "4WmvjXtycF7vEZ3EUXseQxXmSgMT1BWGzmufmXAQ83c3TSQf4LWGucviDbo71UdTGMTYhqGizd7Y1g66Uv5guZGk",
  "key34": "2N8hXf9gN1B1v3z81cigoRA6JbNkCDMdZrQtQsCNsDaDKpEudQEWeH9Mefev8a69g3newvmRb9m4wGvUUF1nNND7",
  "key35": "2BPkceiSc3Vv8a4PbrB9NzvvuGh2w7gea7nihou3SJsrfbBAoaPiGir8jn6EszmboDHuMTRZuj5Rt1UHJhkgsTwq",
  "key36": "4MvVUu9mJwX9TnoTVBymR2GG8UJvByFoqYe4ApQKf9QoKtBKsNWmRsm6y8hL3UWG7e9W6NLwyb8d1zC8cSwwpbb1",
  "key37": "4KUhGRWSmw6Q1u4JkVjtdFyuMiJm7hKUqyJphKkdU2kvWZPui1hkNSvR8uBaPG8nNMBRfJZTpedKbphzeN9gVN3A",
  "key38": "5dZPUJivt3o689669eturkXge2i14cLEAovK7JhSU9bfp1uKvmgRVAj8gdvjGDgBWcictxXyq1YAtkCNiCZaB6GJ",
  "key39": "qf7LqJH3sZ4iTc4sQnuMCwaEkhAxU8nvS5SDw2Ek6W9eTnCJ8xYRvPDkLjxJ8ZqMqY297XDBoVa2Kv8GEdrSA3A",
  "key40": "XZjU2nFXAbjDJ3iFaTf74YTMbKVh3h2ZmrbChKGSL9pk6oj9jCQqvaNigLSoDRkCQVEGjb45fhSNkaqvDi9aFEF",
  "key41": "3SZhssckdn4SGdmSaamF8T3fw9QFRe6AD3p6KbLzVzC7vvNyXU1bhXMjPMXkVtJVVcica3Fw8J1niC19WR9U8SHY",
  "key42": "63AdpTqAABnNrn9TJpL66tv5DJ2eQ8yy7Vv9xFqomaxJeXkp7qY2BDwZx9rAUZzfaa5TkMbjiwUFxLgNoUCPGFSy",
  "key43": "485dq811ZTTY5nEiU9FRfCPn2BbgTUrDG4qt86c4ZfnSAsbHNYg7n8xcBwiPhQv8qeGHeiB9qc7ZiFakPCj7ntmD"
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

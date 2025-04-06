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
    "q1tVzE5Pz1vw7PGpp83A6T99vXDQy5H89KFDiWBXTyFhmu96o83zyXoYsYPSkJPikNTZStSzAo5HXUk3E16g7wv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkMr9QW2YkqNPjE8NnHgg9Prr7cAAZxCz1vCHUQFAaMTEu3NqeZMrvvm2rxhPsXCYJiWaMjCcAi8eY4HBet8xgS",
  "key1": "5w6YwCAL1wV6qcrBW82fhbbXhRtyTDxvUMAdssxVGPuxCBUHGC8mAt6qM14wKrragr9uq2iSvWo7az9FbsHzww6j",
  "key2": "5ZwMs1siEvLhFonG3XHQwPF3v7qRANfVfS8NBeD44D79QjyPkzskPtvdPd9BTKyDnhqFkxNoJxZRqzHSzjcuaxg7",
  "key3": "8uTEjo9Dj4UBzVg5W9GzNjzqaY7rSuUNypzMjs7Stpz7L1e8Uy5DzYagb3kjvTRLFHVBUpGDJYYrahNRic6SkgE",
  "key4": "65F3T3rQCbxgTkX2cBbRv6uVhmHX5yeHj96g4R4TTS6GUUCz8Bjd6ezMf5f1hSFEWJK1JQrgmD7SWjx3q7gyUe5G",
  "key5": "2ZMSWzyGsrWFRFhkUSXvfTSzCefvdsWqqRVixLUGEU4dXDTc6swdpBGW596U9DAEzynQoeX7Qq52EekF4Hdw4QRX",
  "key6": "2oiHZdTgYKM5omV55VdkTymSgDkMLJTWqjdQ9S2JV3MS1BJyGVN9UwCdhASb8Xxn5SKRSWVhdqmipPRirztrUq4o",
  "key7": "2dF6HPJw7Qs67VazQMB6sGmMkHMh1Cay7k2Yf15cgkcXexRAW687VqLq9vxJP3r3VAdEqLpkDryTDLHgsLE2216Y",
  "key8": "36YkDVanTvweXtUyG4BT7Je9yxWbBaxc7W6nJzHa1m8Jrvwf535w4bQouLsgKuWhEQ9JVqRBWnQjs6i2UiHybuPW",
  "key9": "3USLtnwrFc9ZHfa194nMqhKLCFqxUmXC8pMfvGFPoi6gieg5SiQ2x2M3LTXiJm3gjtViXVgqua8mKBUfUPyMp4uh",
  "key10": "38KYHg3iu6eRq7o2U5XdyKPT2ZpRjrk48xvhwLP5yP2KoviCo9z3CgP8fdo4ub56wRRSZgHr7sECi5jpuu2BfYyz",
  "key11": "5ZnTUrmdsgwUZkBUPqJahJpdjwkvMvgjsRCUgaqN7EEHK9ezFaWgxkBfwnLGhmNfz4pYhwVCcm6e6LFjfd1azfMe",
  "key12": "39oHAcx1mY4tbJmvpppVAPmthjf23kvVf5B9Pb8C5KsjNyTKp6KasrYHHNkmAXcWbJcCMfYjLtQdUJ96V8jXKop",
  "key13": "4i6M5TV8CcpPfbPC6Eej4c4gDfodDk61iFcqsXCpkPKSaxPN2cguUSvs9vo4Q92UWstFB3eD839A7Hgeur4NhRSA",
  "key14": "edSsCTDnPPdmY32PjDi7i5t5Q8TXwR7CPPeYub5tF7zzygHW9pVpsrmodXXAWNgytjBMvLev887ZKYyrvAjeqLR",
  "key15": "4g5TKK8n7t6BbNoQ8uqcJNkHFtpECad7dGGMqFECzDLBFnS77WGcvUuGSxRYDHoAGK7P21HeW5dJHkfHGnPbXdRV",
  "key16": "5m8YnLDVcsDyn26rwad6rchPNNBGTNyzog6wtuTzHjNnn35j9hG4sSopMoGUvCqzwAot9ZWm1k3pfBYowSk8iqth",
  "key17": "2mqfo3tqow8748UMBBipUaWNEwDTN7cZb3DDDbMCngow28GGEnVSg3t771wLugzGTt4jCnLRQWXmqPVgxoieGtRc",
  "key18": "5SE3TeNi2MK53cX7PULa7Dfic9metk74ezQ11d63CZyt3i7me4Kfy4JKBVs3NsQyRg4boX49xtqhJLnk7ie54QPo",
  "key19": "3rvGzsmaWy9TonvrBtu8tpTK9BZjFfWZUaeimpXVBtVb1fjgZ1Hvjaowb51zp3Vtjkz7UbGLW6HyPRti63XbfQe6",
  "key20": "2jeRspUmz3jGowrVN5Eua9e2qdeJHKHQproyUJXXFTu2DxaLNNna55pKeXWVvmHRzWaKd3wdDWSaWNvHuGBBQWm7",
  "key21": "26VV7XtrjjfYwYQA3thtJS7UDtivaKrcDUWLX7t6XdGAqkYJp8SoxTiDyP78Y2taE2AvnU2E1yg4g1XG5RTbvAun",
  "key22": "3gFVzjTYVwbov2GJ2KdU1YMEEpFaLerLuD1yhaZoAufAHQdADD5HsL3YZzDm6dDzS4NfnnhzavJw2vazv4evTsmv",
  "key23": "54yt7Xdc3j1FEcutQnZi7ghabzyhR3Mwfa3gszHpUHDoHBcJsW6xsfgLYuvS7CaszXQSAiE2bcVmvM222iHVxJwN",
  "key24": "5UW1cuiod5r2QWL65WB59pVyJ7A66DSydbHxiupwfK6hp7gjARu8ownb3pFJAP59gweQvpaQTdcSDa9spM3HeHnJ",
  "key25": "3xhcD34WyrsfkyNwFFsr4CDXj5bW88iqJQCxQH7GRmKD5UsxZczGK4YkQPBaVJfNDWYvRWXV4uBSz5o1e7rT9aYq",
  "key26": "4542Sos9WGSoASvWj3yeX8N4SY4Vx7cjjS22VhijedGjU3ht7dxNQg5xENrbQbWz9DheaFxB1wzrETqD6AhD1KzC",
  "key27": "65Nm1PRdeD78GHkR4SxmPJmiQ9KuUtqKPeLQeazkWAsLJhNTbrcR2cY5ouW7ygUXBX1y8bFKxfWd5Tz8ZNyeRZmm",
  "key28": "4zCGdBJ7YQMhJGaWCX2j2LK8CV2yzNGUjjPPKShqFoPMdLWmkeSz9vHgDwAcmwePXvUyiZxVBKzwUNavavN8JHgL",
  "key29": "UetftnWh8SJXQ1FNVEKqEkTE9gatXjj153aQrJTNjTXCkwJjRHzNdvyvEoUsAChTe2QowTYvuuqBwnJrDJT3aAH",
  "key30": "4iSex7bzfcFpi91G7jEgPNgZVgpghKhwFzvYECVp4q8L5wcDE6hptq2vwzbThywY37zi1TvmQ7cC2AWkwE6QE1Xw",
  "key31": "2Ty2DDCAKqQ9NMbhwt8PeGncB23TU8xoJVEgr4UiNspjKzJ6jV2jMPg6Z5ah2t41e86xzxuP4D2hutQoWTJBFEJB",
  "key32": "3XhCct8xj1FxrLBK8rWcte8HN7ouUBWhaczKd9FNicepr11KYAWMiNfvGcZBnpXK5iuuQypxmkNV49iSSs7wcmRM",
  "key33": "32a2oF3FgmiHSPUyXPnK8NAqdk2rR8yGjLNGEBa34vG4APeyuqkU2X3UuzqsqJqoUNjW7w97oymnHs7z6cgVVm8o",
  "key34": "2DfPEG1ECAnuG92JErTkFYgqMtiA7xCvJyS8qSYp5xUiTvxNqh33uct8XbzuL43Rmx2LwmHShkQNbgszRFFiJ9wA",
  "key35": "pox8LTHHWBA2naMXRK1FHEmeN3wsyJuX6nfu2nAyguYtTjPUfJ8tE8HGU72rGRiUVmGrBUVhrND3cmb9iU3Frs4",
  "key36": "48A6Hd6osQJjfi2vAaJKFpfjaFyDnJRDSbzdyFTstVF3V1dWAxtMFYThZBo3KEtqzbmjzo4t69mfCmCiBva5vPP3",
  "key37": "3i9AZNuH4aG1GwLU1yTsaWLy4V3tJq13fS1BPR8wMp3JaNL6GSKKaQxEVbGDHeNzVuWBJzr5TFFb3tnzesY28NWE",
  "key38": "4Yxux1dxuukTZLiZJwhXCAx2DqXSttBPBHXK4y8pApiJC8XsRCuQCETQ6BrCPAuZy3UkZN3Xa4JfuZ8wZ3ccNs6J",
  "key39": "4JbMb2esLZ5oxzrPmVJEVCuWG62fnvXqFUwTzyfMkMXJJucRKAUeeZKYBTYwxKsdWxo5KdNom4RimvDr9L2jk7fE",
  "key40": "4ArmRHYc57nV9xtuqTT47TmChEAQNx1k4VHh6h2j9cgodtCszMRdJkPzmFS82KS4qsmmjm5uu6mNLighLXVTRLgr",
  "key41": "3fTFEzuqtEwSEgmtCc4YZvLa7q1Yy7wpL2Yjq8n7qoGNUQMYAgoGQE1E7hM9GWbGm3xboguiLbYei5iumyx2y54a",
  "key42": "3JfCxkox9sUtPZVUFAwVnkuvSxDTm5CmyXdcFgz1JBv8myQNEWqXKYpiiPC3k8ESBP8f5iFYr4sZjVKda6aN57Kj",
  "key43": "45BP7AP8cABzVsr6sQnkZNPhDsTkFTo1XuLNamL2wMA2tZcvpa4VmmN6b8tcwpheQKbxoC7NAAZ3wtDE9yoNFiK",
  "key44": "3NoPGXH54Nym65AuxE8jxkt5zTNSr78LPzjuRqFWSaQPEv72yPEPycS4eoFEccPTDoBuj7Vi8487umHDE2YQaBRm"
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

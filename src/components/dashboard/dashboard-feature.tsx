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
    "fDvspSFH4weHzita3XWCYAmWVEMapcUzf22CEoQ3btkJiGv5dxaRttumgMzmxo1a7GV7reT8t1HM85mnWXNSDtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zLivPGEpTrRvwjjQkE4qG8Dq5aJHn1Yp4CL7HNnoAabDizbcsMJsa7FTF8kr1c75VaxTyvvru6ghnobp1aWD9yd",
  "key1": "2nja3PYywQJfEx9KaU2xbSX67QHDSVfJg68DaV48RYiEPGQ9YCC1NR4XaAphiHJDfrqoDhgxnfxVMvtF44F5YoHq",
  "key2": "338Swq8YZocAtvLqVsEKVcti8CBRYCvDhQAnromJChDUJ6C9TmoEH4Pa556q6MwT67Gb8kuzy7Tvbg6ty4xpVcJN",
  "key3": "4kLxw61cEBepxRYxMuugvXDx3HftvyBfkrKwydXnqK7h2gFcF5jPVbrnfFa76ssUQGHBWUbvHFXdRMpGz21hWv1q",
  "key4": "2JMDtSbLw4cHox7L3EttzNVazMJRWwhqFi88hATVA74EWahMsi2d1TrJKVQE873WjgC1kM9koi5u77b3JBhGrHyH",
  "key5": "4PQVVgMLs22fQB8CyXhH4P2tbHrUxUB98V2QcMyimoRX6htavMNEENQiiezhtGgyJbCi357mzZBQrBoxSHQB4YJ4",
  "key6": "3VZXjhwSCXVw3vFWQugPMZ4kfAZXHw36Rjng8xcHWd47hakDTgFVStNEQtzj4DgkWcxyqSham9Nqzc9s7taM965x",
  "key7": "3W3aKGSBFDdiTfdhRq9Ye7wh26Fp4gR9qNAGbYveDAiaPBN3SJr8WodssEk1GFPQU4AmDEMVqQH7DN1VVAgM3qaU",
  "key8": "2eWXm84tVhE8rjWYWS6cbGSQ4XJk9QGZLYaW6ZkPFCVpYLPk2tH217zKuCZoTe8cDbnxpX7Pq3o2aVqnuvpNCCpg",
  "key9": "HfHrfj9GFod65ZZaUsvgMMR5EGjkhNhsjStjjv7ThXU4P8YVZ8HViTBUtTBA6fFSgW9fs2FeSLbK4WKzaYkjGuV",
  "key10": "5QZJzQueJhvHUYejBjdDAHa2H9FYy7BNWdqk9hNts2uTim1GsJuZmCCHuZ9zHKzhxGKzfTdMLWDeZKwYkEmKw24Z",
  "key11": "5wEJGxUKyCNVR95bhUoqpqzfXTJaVRWXcjkGvYX2Njaxo9gqQJHwqWj3sZCWgbBt5Ft1GUm6MjLthhRYwh6kJnJ9",
  "key12": "KENsa6nUugW9BAbpXZDDx7a5SXuBjzKG8trsE7enqLAyjoXjT9QHNzY47GypidoKMJYWb7f2si75wCNDcs2cSRZ",
  "key13": "PcuLTsrobBy3339DoTGu8ZA4Te4vUb24MkpRbWgSd12z4jv9YfJBdc9uKKhzaDzv3rGZzJE5UgUbbi9ZAtLsWPy",
  "key14": "4Fndo6crkPyLD9r6NDyQ7cZ3ZFH58xRZuzurBc89JREbVkAYM2nPZZRpgPArCN3L3fhG8UvdCVygK6YxqrPCp6xn",
  "key15": "23QoBPknVzfpxdGW1i4HAkz5gts2U9PJ5BJKbb9NGYGUXkzkGo2hckaKTJYPsFZSJDhvC3oh5bHpLWjaocpZkU86",
  "key16": "FY3BpxbMGEwywtQ6kq3J6HM9ZvxucAdBmoZYheXruKhRRE5T8wd6UfyqZ2m1fa1UwJyW7MiNJykH3YPUTzs5Qhv",
  "key17": "2juwKDQua4tZe5D1Eb2w1LvBDvcJmSBR8JDaMPRhCCQgC3GXsha1wBPWak9a4A5wUYgegzXKVZmv4Fv5cx4dH51J",
  "key18": "46h228UPXXTU6odNoNMYMoUFVob3FvXeaUEYRxUzZEb987c3Mb49Caew26n1oGXnFTYT8Uz5xoeJjpBz2eUSiRk7",
  "key19": "22oJmef27JzkmQSTebFVJH5LUcgt68BpwFX1SMg1P1B3cbos1fBKDYvtqpuENvhTWa5NrHx2LFvZFb98fJLpzfqA",
  "key20": "42yjvyWopc5HkVXsaCu2XPiRFWcnudYJDxLoMLpZUv7x9kVMeUmdetL873aBzsdGg8Et8TPPoVRPpijxhHWrvtJ3",
  "key21": "1HksmqYGaBqy1TtsWjJJAD4VcJHKifFyZaQ11M9G4PfuFnp9Wj3KACNX54ku6vBJDiyEaEw5TpmnQ3Rwo9ZdgRK",
  "key22": "3LGmvJbMXBmkeMBL2HFpD23q27sPqCBnArJUU2d4iVieAsszxvhoTxAwVZK15Pe7VLLBy9ooHJs3nSP3TzX592VJ",
  "key23": "5UtqRYqHtwLeUapq9bfFhxiY7pgWYwSrFbb2gazdMGjWREJj1okdQ3rxdCCxvHrmyjhqNFNGmRGXb7B9453sWeJp",
  "key24": "5e8AkEFuwPNmhqz9PaPDpQKmg1CtVyjpuWAK6Casm5RxkDR9uwz1urriroDjrX45DE6jVfGAakArJ3TB29YztY8Z",
  "key25": "5A6shMkisHseXwaUEEt4VaQBUrRj62n3vHYGi4zaEVXTPDPPRMWNeejQM1ESMG6pDynKF3gAPSpeuqCAxdb65vEz",
  "key26": "3ikc937zLLLrSy4p7C5zy7EKoPto1fhMD2jq5RgfuUHEb6FYTFXi2MwazzoKyxDinBm1k2ERu7LSU6Ngck9Bvj81",
  "key27": "3ukwtDupVTPVg4k7B62DA91vFrQcW9KikNd3WoBHXtCVvWPKgwFZJhpvdhmqrwWPjBU1t7gWQk58Sh6XwPmjXyDU",
  "key28": "2bCVYMQim3AKgGwUj45KWC9w58sY2SMAWDQKES4j1N2dmPXT2EFPgdWZcd6F9319uJkLWx24TpbnzQ2KGtSGEBB8",
  "key29": "vo395Gi61ADbWfwrnLyUutS8XCRJxdAWr4uerQJPG77fcmWoE8AW5HUMj79yVgZQNZyZRN1rhF7CgiUtBici9yA",
  "key30": "VrGPBmLxddeheTRzFrX542F1FdCdhy6s5GvmCAf64iigxg7reHhVSYcrhJtkYzRHemLCuw4x2wQz3FUCmr8hEBf",
  "key31": "pTj7VaAYb4JgiPEuB4qMCHjg6aCpfifcc3CA8QRRJf1zZctwBM2E4XxfbeK4XadW6XKRicudpFNzp5WSQQkX9kG",
  "key32": "HQLWzR1vst2tyLmZZtHSq6iHuj6Rp5KFySf4HBytxpi61o63wkUTnzZe7EtkmmM9PqRZLz73jMbT3ZaeCy6N5kV",
  "key33": "2rB1zHmxbnwMJR4dk5Nogm3zqk9iYwj5xrF22C5Zu4ho3SUDRg9WwFVQfA8bBC7x7zhdK1xf9biq8xWn5ZKtgtgY",
  "key34": "p7wUYFAPiiKCzL594sWSsnsiEQzxnSjWXxjAJ8Vo2LyMYdVxwq5tBx1YpTuppw5LxTryRzs1DXaV3cPrXAx6zX3",
  "key35": "6EnEYYyQnqDxrmLVNKBXajsEEPXW4n1WQbiQnCdkMuyCnPLp8yLPEZqZPv7H1kLHd9qBKRbnUndhFoxi7dtrYKm",
  "key36": "2Sz84V1dqhcmZnbSMr9hGJDJwdG2NAPWFuxrvLM841kQwTJt6do1xQ1GEonT1PVd2pMCNGF5Vch7cnFerYsxJPLM",
  "key37": "2ikGzfkR4dqH1yBhvn2A8ozVF7kwrDX4MnkDF9JKKSMbhGgZBhYNt3QvoJLjLwKFYQjW616HyuDfHHezqAG8Bm3r"
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

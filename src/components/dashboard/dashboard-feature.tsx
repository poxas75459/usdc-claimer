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
    "4w3qdUGwqGDFsWUpq7FxrWzg3tFc34A3XBg53D9beYDUigRqyP39VXz9NpvdqxjW95jm5C57hTp4SQy6seuf2yqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MpnnrikGJcB7YZdPbWM5Qeo7TvC5fKqoBGDJ4BsHNX2ECZ7AKJahpkdGcUUXsVwgM8M6fvwzUCUfpqcoR7Q1D4T",
  "key1": "3kqN24yDyRxyNvANCSWsH73n6d7Z1U6HBcLr985WjKn1ruZn6ecfLsGyfRUtaZa1HNaabkJrzTCGYxv8Rj5eWfzH",
  "key2": "5thFa2jvsS4tN65PWd4nggdayHpVvTPKtw4AEe8aEnhNVY7y7rRW3Cz1h7tcNutbc4cSX1zjJqgLGcEeLsJyjmyC",
  "key3": "4aA1fAGsD1P7mTwrrS1hRheZYeDjN86qkkoytXZvwUuHd41b6ersodQ6rRgQH6Yf2ghog9U4QraqG3Z949YEktZC",
  "key4": "3TvpcQ3CLGk8sPSWTBxhuKL6DCwZma6TixGdxNrEN1cAQRUWMWbpTbLoKYCjrK6mas37iGJgKZE12941Kef7c8vC",
  "key5": "4wnJAjK3PUHA3TucMznE4EqFNWe1QxnSChktR2RDPRGsMaZ8VCuuBHvfCebWbPjr7TiU3GLYt3uMWfoYM1SxTXyS",
  "key6": "2aktufykse1KL8it4PG2FAZZNy6Mp4CfEmGgFogY9zp5AXDVD1zreyjFojiwU9F1wj6dqktoe3gaB64nGr14Ct2w",
  "key7": "4KKViVGuuFYwh5wwFsQcGpxjRFeaUVUtsu1wtdqnZGS7Mv4nExBvf5UaEXEi5bATp66EiHJvSTf7mPe27KV8HsPJ",
  "key8": "5t1BnQmjzA2CFGWwtn8hLn6PvZtMRQWaz726Xw5xJNkUvVywEmtdZw6UNFMTF1DAERC9egCDmfpnVZsBAk9cp1FH",
  "key9": "2DPzTUAJfdTmP7izyVByVLCuG7FDTsm3NKfJvuPNarLcb5uhmGwimCXXp2qfU85WU5hULujcTeV4tj6Z9THvhGKn",
  "key10": "3SL72s494A1abDyGd8BjEBoNsfFKQVj8s3ETpwnmMuv6J7F1n1GStCez9hX23PY7KCi1Zk5LrMveys7rxTJV8uj",
  "key11": "2HUcVoFd66GLRoLpRAp5dY5SpUSvSe8w6ufWT9B9Fk2kYuD14aG2p5uE4jF9PX261cmbt7XVha8WjoVavnFrQdHD",
  "key12": "DwjA4V7tJFsJxurmWAJt821h2fXB25QCTQTThsuaWUoT2WCsqkC6NZAmVPdp6dyF2qpnGkuwW2vzFxj95M2oeG2",
  "key13": "m3K3FMH1dodTXtrDZSHXQL8wCv3fUGbQiXhVbFmrbR68eJuU8Lj2WLE78jvsVVai3GatMoLQd9kZom4QNAxf3Es",
  "key14": "2S4smepsQKV9GUwSmFpnnnWarRYyvpJ9Wj6vmHnHNZGVEDyr7M3eVSjVFDKcJQCqcvi5RZe7ZgiS6TfWft6AwTMV",
  "key15": "4sPx6LFqtoSY7WFrcL2zn1LLGooNvJaCPbcb8p2zCa9SUk9YnYCkXVVM7gYABsk6MVyZRE1JtKJ7c6pnH1G11aC8",
  "key16": "afJsNPS5R8Xh5dW8dQiM5Z24ZKrp9mdxtxw6wrw96Z6W7guGfcixNYo2Xvnf9Ubog9rzDbeLokxr7zMY8fw5qnJ",
  "key17": "38u5V7WHh5fpVAx8Yt6NAXF65tJ2sNqyxFjo3c79wgzNAisGSaFAG1QfXdGGCNiyPxJ7SD3pX5uiruPckArAXSkE",
  "key18": "54x2STbKUH2WESkCwQuu29Dk9UPBgemYxmSaabaC51gJmvR4bbzoFBiEpf7pBx8cA6KNB9wkvRZmMZXDRD1z1LBP",
  "key19": "3pPKzBeotf5kcgPFpjFey96KYYNRWHCRcQeNH2Mu4UcpE5xLAJVkbFLpKGWeopUF6nL8bdoeX3mbnqJvtMbAQXTj",
  "key20": "3MqVYDJni5KMWKBSwdjAr4usSbCg7p8uNXSshr2w9sraSgLY5JD6MyrdXtoNJ3nAjCaBAsQjBmy4HMUChJwZcLSw",
  "key21": "3R6yFqSgKvYYZnBkLsQRvK4KhtXjGeSCi4rAJoqCzTSFbRPru2cz6zVScdWtxbWQQrXAxCZ2CaXtV756JfUCDTqR",
  "key22": "48QmxY6kC6dfuq5actspPmvBrGM7DWjHKbUvGP3qmvdyqnnTiMJRujwEFq1h7uuhKXYTEYDREU2JjKE61ku19egS",
  "key23": "2aWRMF9e65un5uCUECW6Ys5YDxNQJWrFtL3P9qDshkxbb2tbFjCY6GizZNF3PtWGnEBf6zJzHjkX7LnH2PvW2JuW",
  "key24": "4TwE2Jc8SsdKQMkA6733WspVAh63vqLGBqhS4P2Fj3ew9LbY1z7hZQha4Pg7EGfB2YypkdDeVNGxB3noCsxmprs2",
  "key25": "3WoSrUChwN7MikCcFoAYJPKxRdqXYK4c48ztZPM5u6TuWK5oatMof5vFjM7Y3UQwhewnYrbXbyjiBL7J7uNeajzJ",
  "key26": "sH8C2muHZKTksJQC3Gj8VkzUpYYHU6ehDrcrWBQ9gYy9Dqn2e66fxAYNi9e85GNtncPD7oGYVUQ2fscVaWMEJuZ",
  "key27": "3oLgtiVDTurfrD9kgVAW4HXUa5T3YHf6gpXMaGeMPQ7MSEkQWWZvbKH8sGsxvNLTDLunzDey4VmJLJUTSrvHtQQw",
  "key28": "39trJ3d3BmnkWWHdLtmd1dLL82M9dZy1MTffWrJFe4e44q4unin6V5zjLsL4qufXnLmL8o99HrPjYpvku5UgmccR",
  "key29": "2mAfowhDUawWA1P7JsWcva3szt26k9Zhef8HMJ7PBtNjoa4fYjpXgx1eGTXaHfjdG4mSXXVnmK7Uzvgp9MG9vkqT",
  "key30": "5VqKnPfYBX6u5jpKMsMHGsHPzDaMAYJkT3sVTqZGmBLjGJcmAvihmdVLZThR13xLhFyzVh3xgQMjyDcChkisupRC",
  "key31": "4B58zWMhm7Gvki1dJYx5ntYBBKaAFvZ4fhqmDVYHg8A6RxR8sgJ2fRZSzgrBkAV6RCBZhFgNQYcTrYascwX49LUk",
  "key32": "4eQju6HnHv3sEeFucihfuctWGfpR7xnNkozKa2YD3ufg1MQ45F4KRfwZ9LMwZExYFD816g9VrGqd6BS1v5vY5uMa",
  "key33": "4pU6GFaV6dCCEnYuLRwA6WBfsjmz4yEjnNcT48MX4DF5SSqDeCcbgDSdNpe7HWgfckEqxawefPAeMeEGD1BaD5vd",
  "key34": "4UMHS4DVp67crktUvRuhjXEUWMsPpsHJREbTxKSF3ozbsmugVKeFgJKdTcyiUpruMAMTaE14kvfGNXV2DowEvRJW",
  "key35": "4uwWSqejooxgfwkfASZxu1XZHAGbKWU8ypXFrRtDKFSitT6UHwvcFgAxspkgx7NUncupyMycHeMGXv96vZQSKUBp",
  "key36": "5peeKrmfQ7YFeykiqLdQBon3kgaPE9LvBKvKSwxQgDMX31s4CAt7F2Mk5w6TmKeajrrDxxnGkhc1tGtX6iVFu1yK",
  "key37": "5KGqrmC9WdaQjC8xTsbiogn9NjZ9ySfLpPccKNoCYcdMQfWfJngrYH1pEUm1CCsjXeK8RfGddM9hbxwoimomQ7XG",
  "key38": "5aVUKP35MyFtD8BFcivQcybTLtcgbYj4uWKCt5mMQQ96cAfA7FXb8cjKwagJ7YsVcqMguQ4cAYm122HJKbmUn67i",
  "key39": "51rUfUb27eLDQPsvyX8Bo539MGS4EDM7ELpucjygjXF6EYFKhuMdPc3sWvrKbLy8D5wojuxMsyoUEe6thCtEEvqo",
  "key40": "53cECF6UYCiPvMCBF2heRW9UyWwuBBBdyTMBgWhf9YyhyxgPj7hdM7WP3XQUQbG3sG3BeBHcyYNent83TWaHaiMe",
  "key41": "n5CBpS5KqBjV8rAVkRsf7smHA5SPEMN4oihExaRGeC1coJaHVDak67KSHehenvR3vKaWT7tqLTJgnaDuFDGeCMW",
  "key42": "3VpAioGMtJR8Gpdfc7LV5kgBStdycBSYN5pmvFpwbWqrkFeVLyKjyWrPwshSYrDcmFZJR3FNyetWFL8UBwXf9Dvf",
  "key43": "25WGzYsoog8b7rcnjadgfdcXnv9rmw7VJsfapzZBKbpvVZ3yBW8K7L5N4Kq7pVsKR57K2Lh3niFSReUhEetC9f6L",
  "key44": "59pMc1shxRSWxuecwzdrD4rGJGkYwAm9ctrwSjZnTCMdxCD8DRMy3mzV7GwrHpCZmfi1cgofTkQW2BdPELC71bBs",
  "key45": "51NMRYUg2AhxnPTYRL3KZAP16H8B43kqTBsgU7qPruiWWyZf7PwNk2xiWgYFjhghKbyvVpfh5Cdids22phZe6Ret",
  "key46": "62XCgHcE2NhSzuzuv57KStc7m4QvTUhGjxekRz27BFuABbvJjfhtUBYNxh6W8GTfpSyZvjevuzCajG5tn1nCt8D4",
  "key47": "nmADMr3XfCe4NYPD19wFTjWB17bm4rUEHEpBD8kHJadTCwV4rZ7WVacVoq7cPoMvsXQqQpdk2Q3vtcLCr6xTBZw",
  "key48": "4iLuXPVBcB9ZeEpNRE8HxFVc6SjPAqACwojWwHhUiJGZSYC73HD4H7KUCBSLsv3rMhHdguvfwAkgY17fwk1hsjfY",
  "key49": "4GZ64PsiDdDnRvNMs7EzTjX5e2bKtSh1nsxfpnKpvhmd6BC7ajfFDEwYWR8gcK2VFwKzQnoVJqaJ6v3Huvvw9GHi"
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

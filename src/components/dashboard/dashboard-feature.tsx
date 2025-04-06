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
    "34io5hriAH6T9gKDwVtXpoNNmQDqoq7ALiCM7PBYJFV8B18gmjvJJQUCTJpgPxLSS6BijiRzCKkrNBmk6ectTJtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8DCcSk4GWzd4NseXHnYHMqvv7Ms3Z49GJAe6grpHjEzckjfsGm6gCejRbhx1qLkBv2G7Ztv9V5hX6f7fN2m2YS",
  "key1": "3pUkYtWK3cYZ6CHUC6BnZMgfm1bR7RRswfocZmdoMGdoSq7BCRbhrrLhiJZ4bFfqkXNyKGSW1Z7zJweZ3E1cUZhb",
  "key2": "2FRqJv3Rv3RqtwoPA5C99L1AJMRVH3FMxPkzSQHn21Qwu1YGZf51GAusmcn9Y2rNCp6D4joaN2rxmtXT14Qskn5J",
  "key3": "2AganYn5ZQQaA64bNLPTEzsiq6xY9w5Fb6eLAPKn9JUXYLtypPm4ZLJFdZvk4wqjzepGc6UrPQzAoy4mdcrFRJvF",
  "key4": "2ejcxm1iwsjKrAKCuCaaa2zThoZMVSNgsGSz4fFrqhnJjD5DoTRURgiZo6CsDEmdSn8LvX7iUKrJAZ3JygmV3eUd",
  "key5": "Sg5yuG6MKp9F9FGTwmtZkd1VXrk9txyu3ogSRGByMXuDt4CHu5TDiW9MJQ2LzRJqTDmWotq1SAZiLRbFu9YZaXm",
  "key6": "5kdKhRztiHBkjfhPrF27ZdyYfUQuz71jn2N3oYSJm4hZokr8BxVHtSHFcd2vhxNsU7t6aCk3w6J6UvuFZ3q7ZaW8",
  "key7": "3gBbs2yZisGxLjH7snEXM4Fvt6fjXNMcs92PCtwXKMKMN8b7E63htNitQt3SuowJXHjVE3NHQhffbyt6rtBfkxCH",
  "key8": "2dxEwLHMbi8wFFyMJ4vmCBJc1y8mn1zzKfnpNjTadzACHpxYL7iSDNH4Er3XLoDVrCXjQ2QxywzzejEyK257xt27",
  "key9": "29TJ9bBFXwjp3DUUaNSucSxbVqCQoRfB1iXhCrBQ2955mQWgEncdkNEBYEnb3fjBe2dXXXhPQv6rJknbiQJoG3dx",
  "key10": "2PXwcTBHGfgDijTJD9e8h8ctXpheNd14xKbJNybvP6hEycJDx3fzcpCLFfEP2D92AYeW6tjYHBYptr9HZr8XLEwV",
  "key11": "2Sght8nhUZ6TRyC5L57SSKLbhtDNWQ5DE67W26bjxjcFEkgKhzPFhFManFwLrAuHZ2T67UDnsb5Kw7DaEEcLKYgL",
  "key12": "53HQVoKHQDPtZHJNi6Z8CT9XymEUXCy5bBNodRXbwUc6AH9igvRnHBKFCobNWexCGjUsWSDde7ng59GFZwn3CYTM",
  "key13": "2idP7veZSJt12BXS5CPotFz9hWbTkWKVKbYxrCSG862BocFAmZ1gHXQ9qC8bfmYs6SwgunjewswS591NtUJQkXJt",
  "key14": "A82udAyyjNvtfYN93g8skMK4gzYdE8hg9jsyE987GJDrV3fMfSwyz4YsPvLgL4vjjcdZH3CiNz8uknCkBhTW6aQ",
  "key15": "4UfayzrXFcL8rgBft22BBYeYN1jDHZME96z1YVXnxMiJayv97MeKvcV7XDXrms7MYxdX2sxjVetf4QmrNnFN7zxA",
  "key16": "4pvdT3Z1z8uakeFHvK5Bk1bggKr6St9yFckVTbQrLzF4DTmE958gv7ykP6L28hsgSJFzvdPZkQ6Rrp5AhVyFK6e7",
  "key17": "3xKNvg7fx5D6bqGYp4RQFrSXnSPpMWKX8T4mDnAB6DChePELFXF9M7HL7b33qL8s3YScczujGETTRDq9RYq1mr55",
  "key18": "5jfGsgCF7JY3tFDY3TRVhi4auE69i9ARDqrpLUXAtJfnAd7YKtngjqxbhHoCAY5WhH7uV1xzQHyxRrcD8vZZLXym",
  "key19": "5ZaQKsDPyKN2G1tBZe7RF31ZoZMqK93hAMuQaWcupCyRMyKan1wj2Fx4DP7hUWgjHLr6DpzLhyTjHixMPFE8uFiz",
  "key20": "3ihHEemLZ3kjidJmWmeDiEvrrVPbNX1rKkLzqi4CwYresRHcjzg4CYrjJiKVdpgzvHApQFw7TiFny5eDzCurmGhs",
  "key21": "5vW23zhAVPsPSNsuNW8AZv3Mv6rQNb5XvXX5joEq9LQhvDzt85nAqyzvt4rS3HMqGZbzgwcziaN68D2iPDnEJ2gP",
  "key22": "5LywL7jViuDdyC1NDQuvCtzpn5CAFhSvpSBb5USbMEZVt5vtCVu4TU6zvMpBErCmyZMDCmZXgTRSdeHH4WQGHA4h",
  "key23": "5Vqik8rApGEw4Ve4N5r2c4CR748Jh9so4mv9WNgQqArsUq2mN9YYm7RhSrhmD2fUjsS9uYC1fKAejJg9nyupJMBk",
  "key24": "27Sf8ruCPBWrzTp5fGj4xuk4YWqFmpXkXk3BYGsTRQN1XxmjvD917JEp9wUo3eWcsBaPQ7KNPAYZGW4PKyQFfNvA",
  "key25": "64t3CXNgYcDdF2SWvjHduiAjqtPiMPY2QjafXrwazGmWT18EwmwmamrS6xmZp4Cva1PpMY5iZDhxZAWshu3sZBXA",
  "key26": "5K91Aw5tCP1Wx5hs38y1BccYY6BCoQSatsjoYkaHiUzQQDSbcMzKsgoGZxReXwLpjNkbUnLFjMdK9D65Kbb6CUe",
  "key27": "2uSf7GfSZErutAekaPrfRfqn93bMpoU4NHLGqpCe9BznHE9t2qHd8fXpCEsPx1wJioAoqpL88TL9c2PfjWaH5jeQ",
  "key28": "4yPKM2nVwrZ7pgJzbV9AbCXDDaJEfJwQseQQ7soK3kX53kKmkadUJpuHKDQP91rVVZ8zZabFgxKJpwW6xmh49pt3",
  "key29": "4aP1uFTdbJykHucYyyHqhLqtzSzBUfYfBJg1mekWwM4JdaX4fSVarzKzaz2uKUyXGFC6QkTGsaYxjGAwXj6GbdJX",
  "key30": "GDxG2C5RV658g7NN9B6Yjf7kpTQ2azDeLw4DMEp3RmuZ68oyUpqn27BZivpL4ytE7q6Jwk1ks77i2YPrSAJottT",
  "key31": "4nyfv8Avp3NijKPN5A9EfTyihkVuwKXpfJDpdm3CENpyPVzQD9zc11Uzs4iGFyTe5AaAn2uvHDwQwJV5LruaF7oP",
  "key32": "3uawiYaWAa2JQ7SpfYXh57ypCT78VTP8Kp9MP79f1qZce5JYjJ4LQxBJifXacPdhu7dYzRiayHv9x4Nt1TqysHSL",
  "key33": "31SFXUfMgr3VVdsZ3QkZQduUr4YDwEH1CQ1HWnKNBLQ7KFRtMTm5Af45nA7HmzbULQzPNuBuCGFUpAyf44y5wGie",
  "key34": "5XfcXqL3jorQmCnKdHe6BUDrVcKo3D9PocutmgcF4gLbDjsLzQGD895oVravbgRKxrpZdpUgXuW5QMSJMxQEU1RX",
  "key35": "3WyM1mkQs3tYa8n1AR5mRPB2syL2sbhGDttVb1zrq2mikDCscmb9sMgJjEoc4oFmwkDuj5JyozH4uP8eHZAZPT3T",
  "key36": "3GKqkNE8yfpdKxxJ4cDfxpyP2mD3E7U7tXt9vcVptZUGRo3ZTpQFdhbsWLhqJA4DbzGrzBXLUARUbK83ew4ZZx8S",
  "key37": "H2Cw85LMLqjCbFueQNjmiUQBNgXT7bts2aNtbPWL3yEPimxG4af1MMCAEi6ctcMutm1UwLo1hsJpX7U78ifJFbc",
  "key38": "3u5XVgSgCjqyLheo4LHgZHYVrqHYVMUEA7PptcKWqNDHB9kArhJA4uRhYLikAShiiaBiADuV55Su7HJVgvr3vEke",
  "key39": "4emkwyeRsBYV58NFCRnF985ct8Xikg1qQS2j1un6XrbVrSzHax8iCwDcAuYu6x9GfX4BaP4G2r4PUwoy3vnbheQZ",
  "key40": "4f5qzw1CpGMDrrPMbQVRga8MaMB9ShjvoosR81V2V9QhBfjgbVEXLyD5Vu8J6Vuwf5bKEVDSKT31KxZXaUCDFkPf",
  "key41": "Nc6kEYu7nJCChtaGrLos4hHTU287SsWL8kEnqkh6acLPtgBCNfQsaS3TPwrHDuHR6PjCy27Et8nj5R2hdg3huhC",
  "key42": "4Xs5b8TKQ8DA6vJ1uNi1Rf9K3CUqUzN8sjr3Ux2qMBtHd2VPKqLnxAPmYPwo17rJtpKGvDddLUQTYDQNvQcFcsT7",
  "key43": "5ZpYStVErW86mYypRg5qAeqmHsHcYHWay5nh3qFM9z8iQTwngUPqxKeuPDddC5e5prjqc3yE3hNVbY21oDKt3ZBE",
  "key44": "dBZANGLt6riHXbR59QxPRToWzTtjf8oWRHDzGtxfCivskAdKrCj9ybtdLW4swR6ZfSYuo8t59wBhLkysZkpoB9T"
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

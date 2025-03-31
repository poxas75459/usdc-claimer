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
    "4ZtuoDiwytp7NYCTnqdCHWKrkQmawtUKQXnrTsuq96uwhS6i2x3RpDsXMpioSk4MVXiBYmSTT5VyMNPJScCJ14zD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mrQiRBCgS2v6vvYTMzv9HNKxW2C7buMM2x1f8eeno6Fu4rc5BhYkrxnysZP9Fv6dtReQEcghEH2dnKFKB8FzXva",
  "key1": "3TvMukEF4RSXQ7do2Kr4WFJ69qrnZgeeA4dkyupwxaiJCUDk5KWLr6MhvZFJkCFfJrRJQWwK73hRWcoyNAnMrLBH",
  "key2": "7Zpkz5VudoUtqxaVvY1Vapkn7SSsDGDn4fEfSp2D3t9VJT6M6wcjFDA3G2DcfSN5pY49pcrYC6Hb6nYZ4naZHj4",
  "key3": "XiWG7hMKT7xfnHJJmwFh8JjABRR5GR5g6YvKjYjBBEi23ApXkweTi8QH4Yy2EAxtMLEvpVzYAdpwz96uERxacBe",
  "key4": "dnTwtfaEzFW2FqAVEXtU7roXGKdpQVtLq1jk5VjxnGdKdKC1R1PJBBJip9vpp3dgHXtV9Hco1wgCy1SB1PhF3iy",
  "key5": "33r9EKnQo7kT5J96AkuA9E31PVwgeEE7euSpyE7nMbrSxyo98y7rcrfNVQJ561CiiyqgqEZXJuquG6Rur1a4bGBs",
  "key6": "3VK9iers6j4xnKcw2CJEQGsreeNc9HZ1B6ig8XoZcTeGxjoGnJh6dNrhtkAPP8wPKyspbAeyNAx67ckvwjyu6Jjs",
  "key7": "2soMCNrsvtAPhQHVJegVkeuXDqJNrfHVhCxvbiCZW4q64F69y2jTb9vpRUycDs1DtorCkk5Yc57J53pCmxVjHSda",
  "key8": "4ReqY84AVcDQZ8WALtf2kpjCA66ivJMJG2kfFfg4A59E5RTJtBub78c6SyYkmsJAEWQXLJp5SyBtGoFUcBajoRhK",
  "key9": "5iAfxgXBGC2WFvBSCnYitPjUM2rQ4o3dNQ7JUCbjXQzcVdyJzQqxTq9XWURczyrsnrjSnnAcw7kDLvwunKAW4xSo",
  "key10": "2frkDZsQ8J3vLMsioFrsFpHneUjQBTZbECnedJToHMLENZNn2zhacyypnRGqny8CPwZCXvwntQbKJhCKsjp9a7pA",
  "key11": "4pedcbwwwQRGACDLYXVicqLNe6jNYkQoqB91akCkDBCsG4Uu474BcA2jkhxJHLBEWnNcC3bHLk3gehUzzSZjxu4T",
  "key12": "3Atk9Swjk6dyAqCGUfJfNUfYVCi5mBVZWbrxf6sNvCmkSnPqhcYpByizBYTsoXP9kVtDDxDs7fiYXBFoGsWdPgqb",
  "key13": "3jzDcuGS4rXbQy4RwRMev9jhucPCn7nff9nWNvsQseG8MxpcKo6gHKHR5Y9xbzsnCdm7CbDumyF7AwaaFuKJnzrv",
  "key14": "2FN19DNqyvnJjENQ8WK4o31bZ3ND9QZyg6JMj1sLmQcHRQCrZK6z23Ywr2Ai6QMU2iWrF7pPQvzZQHW8PmKMU7X3",
  "key15": "3C3sEVj964pKC9uTmLMwVUMB1G7x3VwTAc7Gu62YrZbePuLZtJbuYnFyg4J82X6npQ74oxT6JGp6jbiq4vAg5VNG",
  "key16": "3oHrehv77B2tDc5c2PjzcQWSjfKYj4p8mBCo5pt4qLbvHGVYkQhJVVSBGKtdzJTNdBgwQQEDNjgFZCX8jjr3Lshg",
  "key17": "5EK7GpJQ8DFTHEQ21LFcNhazzg3VaSTG9qugTHEeZnFDd514au1AGrembKo6irWYCEhvY5V1VtUoE62i2sBGZLrn",
  "key18": "3BjAQdCW7WZ2D38XubdYzai4VWpCZMPoEiaKnXzdykp9GwNxr49UUpkZFpqjyv9FMQYuHsFHuBvyTCk9iYzkGpuJ",
  "key19": "2soNrkZMrk3udRW7oZ4DskLEqRKe7rUkTZmLNVPPChy9srP8nRzB7cVSFd5wrvNnBm9gmwmPFk8XZcuCjERd4ZpY",
  "key20": "2HMfGXpkFJZuZvzXJEAGwJoq59LFpdjhRUuHH1XpAG9LeSz3qMMweQTyR1zSvdgBnx4WEaczmBzZt3otzqi6dDey",
  "key21": "23MTxryg3UbjrDsyzyfTxd1xAcsYVx5BGxf12HiC6wMaMNAYhZUUD1Knyn3yJm6fzCsog41BLgHEXg18bbAamA3N",
  "key22": "5usCv48ySEG189ETejazDUULPt68XuB2z3t4ujJteUhxcDXuPNEQfs6pRxWdNV5wzwnpd1cz5xuiMiyMCtpiVzUc",
  "key23": "2aMy4v2d2GJHWFCtU4CMdtVZqpXe26KEMTLaQu1ECHPEStWv1v9jtUnN8UJwHqZ73wcemXcHkCZMCqRA9uQ2Ae34",
  "key24": "5QhamgYHWwSSkUrjJkLF1Y3D9NenfPeMXEkzuYtrzjgjQt7EUAvYyJPHR8LZEdRzbydq4f88enNMazCTodazs7fH",
  "key25": "5HCBzHTrRVvh5KQVCRpFZXZEMHrAobpk6SVg1i8zK8EoptoQeB7eUoaDu5vbRwLKsZVEnDMgALZ4YiWeuxEwVpP2",
  "key26": "5yjMrYQdAcYP7w6vfj2QknBXBSSpN4c8XHdY58Jaai7jj3ab929U8KzvbDKeTxR6kuhz7bCJeEgiNFSXhU5GhDDk",
  "key27": "3qq7dScYKRkUfEvNEe38rsm9ziLPv1FUkmrMhHYVTbGa7cDoKag9pKjA6vNMZwHcfDXZ224vWbK379Bp38Qnj6jt",
  "key28": "3K26WFxMzaTxo1woY3NNpzsf3xCXeb1bJCDHC752AGphnjZQ31QeqvxkePbkiBs6YYUuG7gS25vD1VF4Jw3eAEMo",
  "key29": "3UaKWwd3wwBDBKa3CANYH5rVSxRnc18T9czkoYFChey8HJUcW6BLtE9iNNyxgKQYcTjKbB8XMPTspUTYpAM5tytp",
  "key30": "3kEUdo1c2ppxkw9aFQRr8CjiaZDb7a1bKXX1dGDm4N2Si46kFVjmD8qw3APvnBdTJNNsu1WbMc7DYxBEnr5tVSyp",
  "key31": "4bqnRV27uuZUuib8TjEJ62u5Pe5wTJKJUF1MjthZskCo5MTP7pYZwALDFny3PuqK5ADXqjetgxnp7t3QHkCqRBCd",
  "key32": "QGv3HVXoE3UTdjCdAnd3ygacFJizLskyXf79BuiJh8dvkfNxCuk4wQtS3cT3cCuhWftLwAdVWK9ehHLjQsQx9gR",
  "key33": "p8aPPd19NfCa6GeP83VwyLYXREwapzSxf1hvAiiTKxbKFQvk1Dfk6wPxPmLa5sSP6VtfvcmnUPD9KuQmuSjCLz5",
  "key34": "5zrgKZzY6J1i3d8ESK5iCSukByx2XVoV3KF6Ymi6tLDUqJP9G9aYTTQDd1iKLPU7PNBynwZGz6wCa76aQHGSsRJK",
  "key35": "527WNWRBzLLcoaWQ7eQkdNezZNbdWqMtEeMVPtafi6Skk3AqdmVzcmSjPjjUME11WRRLTJCfwFru826ryP2gqwX5",
  "key36": "4vF5UGocSKt2gHMcdJmykb7x4WcvozHTPpCbXnNQRnNWjQGa6GY8f4AiSiRRxsT2fLVxYPhHpm6ZBMVoJWaoeB8C",
  "key37": "2WwrDKpN5CdambA6gfnW4DdKc7CKt5nTUko1miGa3cTR8UVnBh1kMdNK7UBnFsQnDptjpveRkJb9PzMtV37DrJ5i",
  "key38": "AYkWYTxeGKt2dbomdKbv6VrjXWEK8ZDfPVnLzXQ1dMmmrvdBohxTafvxEuHcg8MYGdvovnjuqnYtxJ8vqc5Pvzx",
  "key39": "aphzghjUdbt1pNXTNvPe81gBk7n1MS9m4NJhiA7rPHCmvHnGofofuSaa9CCqeta9z975w2mVE4ww3iHpJ5Rhrd4"
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

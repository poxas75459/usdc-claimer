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
    "3V8k3k1URSEHMiQLbAhqUC6FhWJzPppCH6rjYMfjLsyqZyubShXeCbKq8HB13uVZsUqD4oTqa7vkHdZaSQgC572x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrb5agrvFF55rAwWwcnwURm9DiyHZjkbB1XyzKanjqY4p2fJf5s7PzBEKBmHDSzALjXZHZpQbNzTJ5ett9PqiL3",
  "key1": "5r1xhqoQN9qhEHu6fPKi3VNpwAmY4Amq5r7w3VwEWASfxYncrxD5g3ssZ9pm7fyEjAbVemXizfYuB8hge3LSKnkZ",
  "key2": "5V44DUB64MApARwvqcuNtEHJkEarcmw7WXm2bmuP6uH8PSsSBoxV3C7FJykkrbgf8CRRne3xbHFAFdgNtwgqZaSq",
  "key3": "5oinb2KgSqsszhM2v5k1wdKyZwPecpXweiU7LvJPyyEVjRqQumtiSwov3YJvNJP65qfpCgwkgzuTEWUskM7fBoTy",
  "key4": "2FumaxJegZA8QR2mRSL4q25Zg7DmDMu3BYtr7oWDcBZdw7ynx2q73P7knDhqwe9yF9AgjR5Zx4eXcg9161VMNjc4",
  "key5": "3fS6DTsG7dsgamzgMAb2w7ugfDyqFkqesgvjvbAstbLdCGRgKMooHxB14HQ9MjneisvhkZ3dKzHJj3P69sg2v8av",
  "key6": "4sqwAiKuWJ2sdFKvCtPTCFjZNWrFGPxVj8PPHwConRiBGAH7QF2mM5RSzKWKAS7yqg6vhBujea9W825ysP4NFKNP",
  "key7": "5YDGrGJZL4bRMZCGMXndMRqisFXynFaKnybho8SSg5EbPkX2Sdj4gC3E6fiHoUNgwBMpu1f4kE8xs2kC6iB64nLa",
  "key8": "4PF6s27Y9H3EL2Z2r2rE4q6andTeLBT75rhRCJdfLR329YJUdicutAnYFo3rs44PauuUN2tuo7WzbJArz7dMMbKc",
  "key9": "2tHpVLDuc64NzHtnorVvVkeX7WTx13HJc8Zuibz4CQirJBTMxxU8mNmtJc1u5P5MUFVkxtswFudKFX9D9vv8yUbg",
  "key10": "3YodugUETCfEu93QYtNmAUMUj3eNizUNsN5nv347viWo2JvGJZYve3dLXR8sxqmWHGyUhg2mGNGTwZxV9qdE2Cff",
  "key11": "2fEkiUMBe6Mss6zji3EVEsF2fGfeJbTV5g4ydBXk9dBJxty1LsxcjsDY19pX71ezzw62YSHCvwJvEqvc3HAAdWVA",
  "key12": "5yXvwdtG7ByPn39taEeCHMKGy6vJx3mpCA3bQbsJkUA7M1b4BQSjnCEgw7hF7Yg2XWFzBRPVsPw6NZAQap1Z6qNc",
  "key13": "2a8rrJtc86gx1ydmbuSUYp2UWhnhf3tqUWx6ZFbLTDgb8KQFPSE6k5zceYeBDaGBg68BRKVFRRPThuL6g9LNCUnz",
  "key14": "5RtPDRXU4DA6gZQkdrAvySbeJDWRAGQsXVDxHfgj5U2VwwDXoYMKEX3LNMGGPy6ecNv12NcPJqZd1AtNKqm72YCW",
  "key15": "jDeymteKVWHq7T2G7FeaNWjn8tytFeShmx7BtQDNosTUS7cQZtoYhMBg1dMfQWtsvvMuotN2fUBvre9LrHFrxiC",
  "key16": "3CThRoQyyHutCc5QUBjVQHcWpQGFTKHWMQSzwFdy6pHcc6GNdG5z84KzX4t2xwiJ3669ftKLDeqLXVbvxnkBsCVQ",
  "key17": "wEg9WsH6VPRw3qxDgQQ1HUheb6NmN33rNo8LMPAMMFcamwHh2EpZjq56BrqEbWjp1Cqvnhiq9tdrhvB5GNMZZCw",
  "key18": "Tpvkovkx8G3CmKu89cYHjpvGFK5DZmEM9c6djn1eYjYMPK3kRb82J9b4JKv25S8jYWZWmr1WXCmZwjPDu1AY6SA",
  "key19": "5WErbZPeWPzX5gvoTw8G9e16bZUWumXhJ4M79ZYwvd4x7vAWfvbxNgz2xkicf5VqSKbwjEVz6cySdvNeu1a7MS3c",
  "key20": "3953b3tJnFKBBzoXAsy8C5R8vMx79aj4EddSmqxJQ1Np7ToMomT25StxTqGjpVq48Mp2t5xHzzX8RgKFeAHJYhpw",
  "key21": "P2cQxcoBVS1H5cF9ktGKs24RHj6vyV3Atz4tgw3SUozqF8B9omVpt9aJvZe3nfMJDjxprpDwz8pkWvaP8gcLqwA",
  "key22": "3Pr7TEG2HQ9NqYR5qq2j2y3crgs7YyKpVKtRy4fU1TV5EuMCkhk4v6iuerRtXze5uZvPiJfuWyUX8y3UQh9NEe7C",
  "key23": "3mnDdR2CxnTP4ZHdLGU7qdQtYCjgC5qvnM9EydoeZk52MQCCpG76WwkzAwFtFQBCzYVaWPQaCNvAXswA63ZiVR2S",
  "key24": "2b49Lemvp54ws9ZUJ5nUAuCDFY9qG6aF6gnjL5eemjLH3XRDr6ZpgZ61ZvNdFvDZ9ULFyDmdRZgxEeMsavUhhMyf",
  "key25": "3MdSHVNxwRJJC32uiXEyrqhhsnP1d4nY5xtgLEWvgQF3U6QnxdfgWkbnAShMms6fXWs4PDyWgHwhb4LU2JqmFp9t",
  "key26": "QMHpGV4fgNYE3REPQTPwqA5T35zW1VoA8E7b5jD8xG9V6rsyuxE5sDJXuoyyS8dsVTTEQFus8ksJD16aWpu6fu2",
  "key27": "3avZkd7x5KY5HcqnYX9SFWQUJe6uY7Sc6UKdWKMFR2PH4QcH4KyXQg9gRH4cavHdBy21B3aP4rECHJMsb3XGQFEN",
  "key28": "5aXiKJvukDpk9Vtzb14imkR1NMnsNfmiNFoLy9bXYqFTNF7xZifau5og39cqkE9bGpQQJUUWE9GUPznqdpkjMEYu",
  "key29": "hbU3nfFwcGiGvm58cR31yP2HMr1SzKW4zfenR9gjRFQ3hDq8Ndq3BaciGZZjELa289BtoDrqpY4Sf3iZTcz8dX8",
  "key30": "41jvUAW1KRTHn42GxLKAn2oq4cknCmTUAgKz1FVJEnw48wh2RVqR7dnM4km5FqTLUodwqwSbhe1EDp1jPdLxqk8N",
  "key31": "259e9qXNopfmDLBZcRUspQw6NGCWk6aN8t1VUUVLVcH5qDkTMagfZm4V3TLe1AqVF5DEiPie8Fap7eM4ByahyYDe",
  "key32": "jr73DegUAWWUqtX7uZuiLXeq16SK3ziUxiTGFtbX2aZoS2LTPsALLk6Yew2gqJ1Hbv4j3geXBDfSXLESExoUn2Z",
  "key33": "4dtEBZgpPqu4aPiMWiLwQ8zbVjwDz8yPY74GxApnesxjbnVTte2ihMMWura1q9dsBEF56sNnGThbrbMtYRZbokoF",
  "key34": "5muwmLsEab4ErNcXa7BszXFhAqztGHToHvvk6PqmQRnWnKS4e1QeZCdPe6kLqVCRbgEtEeNV1x6a1jP87yxcmN9i",
  "key35": "txj5jjjwD8cGUw7HucsTqwLRPmxKaKnhd4sGYjfVCVMGTfR1JxoBDKrrCtCtyysBZku6aPPt7oo21V1QNtBZmYP",
  "key36": "3BBqDcv7EB8Z7krZSb59oH5d3SYt6SfgCY2e1nvhh87e5VvKiBXUZdVBB9bdsvSEGUSb3KCm3gkYe3DGrjNmJsaQ",
  "key37": "8VZ3prHiVvB9CQ9Cxq1D7CqvNkUsTBGE2sDoLFffRa74a6x2UnvrvCD6HRfzhLBq9XmH1hgRGpGJf5w3hkDfKGE",
  "key38": "8cY6VBUNxNbjkSfTiSpb54MsciPvE7CaPvhLqaM4ofZoUJakHpQPVHKLNHWpXfD9yE9cxLDuowUb3eMyb2J8TzG",
  "key39": "2xzphtXY5dHGSZp6V6dgYkcxgpPJ7jcCV9dyez3k75jpqcNMyhMgkE3quLRpaM3pbMKbxb3zgskD8T193ZeCrid",
  "key40": "5LNAYDwLaxJN48kcn3QmRvtLL3TXFtfxZNr5Nx1XBgjYramJiuH6TLDu1zJAqYeCUbYhu2EdVKDGQiv6ByTCaMtE"
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

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
    "4pzMWaQBf9gCiZftZ5WX6nM1takJwf5vU1V3rJq4g1p8cA2Xkdc1iFds188ptNmxn1dhzceLw1NoLejW5NbS4GH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXicDTcZgXn8kbNXxN3DKXn6NNCJBdeCcKPYvj8rCXXzCD6VsTPVrbdyuJQy9PkdifJG9YqnZQFDvxJ5Qg66Gp7",
  "key1": "4RD35Czbcx9JZZpgJPaJHqXV8SLcnWtTQsQDYemBqk9BDLuULzVKmfLKfSUwvoP3Q52UKQsDoNz8ZoKntpMcsMP3",
  "key2": "413LETmfJ5tWqWwin4MAtZHK5pdU6oV8x3dsWL3AeaBgMrMprd3SqPzPeQhmTjr5yonqXAPvHpG1WwJ82BbFTntQ",
  "key3": "3HDq4TVMJhrgrzSHZnW7TSsgPStoWJSHP3teTCo4GLzAyCCgKALKQNTA7xhN9pmmQk3us9dupvhdyh7xJtjom6mN",
  "key4": "5eDT4jPJGqmj95MdQKYDgLtuxSevKgV6fphMuCC3SMGEkAfkBssHTpLSZ5b4ehs2QzWkSmkEuguL7pKFgVhzCtZv",
  "key5": "5v1QGwGnAziremX8VdZskXKj9fuk9WwupaX6jqeBKxyHkJmyHnoEWYzsLzmBQrp4PHFLhvJ6269Y66NeJKmUmyMb",
  "key6": "31LCeyvkJ5Ssz8fgUZhM8iRouzrkzX4TgryFTTYsx2HmDRvdznKxQyHRSnaLpqmgsrCFVBy3WMZvdHSn3SRKpxBf",
  "key7": "43M6o97T4iskhUri3wuoE1PjPkiFx4RgrQswZh8d4hnPsNJPvSQaYhFK9sTw8CfEFDuQE13TLtmj8kFfmYMTtBn1",
  "key8": "5thF1GPWGy67f9rdsfggdaSokAo2M6f8sfSEtfavPLRUubwi3a2r2GNjfDTv7jXDcxDrqfyg2PtchHvm5RmtKmDx",
  "key9": "39cr3GRP76DE4S8XpgL56Pcf6x4nMKp1gnjjhHAy1azevLtKvrcaWhLVUPCiYNeVM7wj8rTqjdohopvmnxgkGshq",
  "key10": "5isKmkwyJB6ZkpR1H9rdYkrYcRrbT9heMuiyHC9GMNRYTekgya8ZKesSd5K5GzoukrqCLMEA28eCxAvcyxySdTJr",
  "key11": "5Tuc6LQudDdGMFTy8Xgg4cT1NaiRFHFQVSDKi1KmZH1gkqym1Vh51Qe4JoDpMh8ksHvb1WEEYiahrUvcMmKLdHG3",
  "key12": "5M4tvj39izzEi1LEJEeJ45P9SiMPPhJpPJK9TXybHSJQBtzR8T8ZtA51bHZGVFqN9LJCR4JkBeUghSyVxjfkkKfB",
  "key13": "2LrLAYPd4WAE6xs4eg1kExsoL4hSEYoupx2WrYtSMgZtXirJyxDQSDKruDBqoN5S7zqqZWbYdnuuQ2A7g4shH3Dw",
  "key14": "3zCaDwuprPXZ256j5daUSmtxifVrgQZ9KFQjJcgysBEMpHUSvgUP9JxYiR8o5FMCSg75kUWqMNgxPjadK2gAKW8j",
  "key15": "qZT82arVCQKXw7iWyH2VorUeLQra596DAjdewdCceH3N2XJyvDnZqUz1QbrCdXNWMgkdv3txnQ5iGoXWDuKAeuM",
  "key16": "4VxQDTPRaZJrsVCFoqmcWr8GJ88AkQ9X1K6SVqKJR7HRbZDySc3dVhdT1nyDbbDXRrWTnkctUucGG93mP6xyQqhN",
  "key17": "3BRQ4AYUUS6XNsqXkNRA3HKGQvYwVtBs5wqrXzYs6EKWy84bpr6ziKUjJgfsfnJviAhJdUz12mAe8bcKjVFqhveT",
  "key18": "2QKWez6KY9U9uknZiLQXSDzBhqPTD6jP4ptbDAdXDrgcdTzrRFktXCK44TbBaKeHj2uaKwYd4fEMKcwqoq7xmLG6",
  "key19": "3CZ2Cwd4jFaKdzB7V1gVEhGRswf9RvdJCXf3QYmEEePQx5ouGHuEFeWGD4u7GL1xrp56QcJf3svR9bWyNhyytpwT",
  "key20": "kdjGu6gT2PNYV8TnkDWtVN9LQPxdutTs1WRBt4QUn6ErU2R71jxBKwx1zafbit856MVSqgx8zLm2TTC8T6Wsik7",
  "key21": "5jxWUY7hjVbJ7dWWUAdd64Ge8DG3hE2XeYqU7WTjkUoM8yjDe4eDeQ9maBFV3Jio9xggD8A9g26bdSzmXvAJbcra",
  "key22": "321QjqGGHUSeX8M7nQJrG3wUXisAj7LFfW31bfqFsiozgvki81MNaWgxE2VCYovxcSYXqe3TyN4Jj63yihstu6wJ",
  "key23": "mwPsggV35jkk5m5rhdxn5215aeuw2wBb3ammcn7ttjvPoVWiTti1Ee5oZkC9Fyyr4iGe92NfEZH3rAgYLSz97r1",
  "key24": "2BFMXAQF3GHUswucvtG9e4wsiKdq1uuWJS26fQ6kkYfU9AkpNnnfGDMRjP84S3vwzLNH1N1hHT4kM6Gtt1Whwo8X",
  "key25": "2Z9ngvRuWyNVAw1bn4Zfzgtij4zfK9r3JM5uj6RoJuNWhF5wKrDjTjTj2BZVUePkHEbig2hz7cq3iZJMurLCmQkc",
  "key26": "2tvGnMidLRJsQ8CPGxibos7UV45VyXCK2afo29wxAUUc2kwgGDQXKx6iH5oDSXBzG45BCXPNV6HmTkfp247k7MCa",
  "key27": "4gn8k2GEgTvdHoKVZk3mXdMGt7X9xH17XpGaaw8Xu4WQteDmw3wMgzNgBHnVU6USNk8hopocret8KLaBSY6v6CVN",
  "key28": "4hGfTpFreuhR9fSdn19qD5inG1J2BLS9oEFG5V9rmaWfvjaXuu7Q4VkNtkXaysjbrzsqfg3ZHE4ZBmzSgBSoa1WD",
  "key29": "5eYk2NiRud61fGBSFoTNRuMz54d6atMp6ywzg7tWCb8SFxa5QT6WmFRtf3PqsSdsiaVcjDGXu4X632bspDFpABqs"
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

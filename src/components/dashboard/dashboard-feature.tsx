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
    "3iNH23YU94Db53nHSEY7NAkW6aS5QR79jsdNs2V68p59kYx3k3VFZTSQWcRBCiuGJCw4cJbiGg5iat6wXVEXgHSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oz79ALJ5NqpKcTqqALu7CqpzR3NLiPjLmtRTaUmfQWoDaoGgVKeqegEi8yFCA5XFWhaZqDqvcWMnsPXdemcnLyW",
  "key1": "4HBEKwLFpGwnQ2Y5b9HZkrT57mpcZGpUd2ar51KwjV1WC4MZgvoHdddiwLSPBUZx6fDqWAebuF4oYAPUHSLUqGiV",
  "key2": "4KR3dRBQVLqHr27Y7asT6xv643U3osp99LMeqhexirzrSLS7w5gnLv4yN33uFz9irkq1YG3Kt7gg9tPcEw3PVu5U",
  "key3": "2RL3nAGnhYuEMweqbqToWCQB12dmhAHCRNvijnYnvoS7Q5cwe4wE8zMxfDvEJ2qGKjrhugfZhbWGG4cfFPeBFxPd",
  "key4": "3qV6vqiYiuu3SVXZ3ZVdSRE7WXXTUxQsE3kFxaMWZaMcagUcomw8wWw5CePgM4cnF8d1cRNsginecM8h4W3n1aCk",
  "key5": "4QzaKQ272vr44TAnNPrno6tTtMKuPcPcknC13ouNYh2Nrrp4J2upJaiBVuTj137QTu5eqwo2hWoiJpTu4iYbf2AV",
  "key6": "Dq65TUxa2gQsyEeBT7ujjcSgCjWqbMTaXCmg7Dt7sZJUAufmUw5WLGKZeCshhgMnMipZ7FdTEkDXpZFnoCkSrki",
  "key7": "2axJgtfTBbFxNBUzWJCrezHLWmBvVv2TxtrPuv1JjXXRbvcfTo1vBK1MSrUkw2cSu2YXd2wXxRFxdYsw3412jX2J",
  "key8": "cqRK7xrvdPiKGXSiYLGW5XCZ7wLKEyr64jmxxLKqPtE8ho8kzsDrVgCxoJx5PpEA2WGEgrMhrumhC1hq6E6NJ3z",
  "key9": "q4fqzhaWhWVAwvofHNWcAKSJ8nFGjRTPeuBamxAeixfwvATEZJfdS2gJgkFTNhVhixo1gcCJtMGNWCd1YhyFgtN",
  "key10": "2NiXs7BbmTDKEyneLcB7fpu179joPTBguwVfULyJrb65xoyN6Mx8Dz3mPN5FBj33jCyXFE7FYRx3eYvsKhTw9x8x",
  "key11": "xbLRkLsvr53nMuyeC8UvDrkVfrgSCcp2e8tbX8J6viRMVYwDznpVySgwwjhoU4TCF4wV2yEzMonj89S6rrxgq3C",
  "key12": "2HD7YW3sparSbH8RHSZWmkk79eLjjw8rSPCovSDQLantHJ7UVkrxWAAPxztf1SBHFzVwS7HG5PptHZoJ7WapXaV9",
  "key13": "3PfpZP6DtY1ZEtsh4rqss4xG6M1pLnKLEoYZTaYBAZaJakXahufD7T75GP8CmeJbsmRjwtmst1MQiQ9nyQSQi7dN",
  "key14": "53dc5obs8BVqkT59Wsv9QL6oJBKXHhfFZvpaRnh1FddeVdqrHgW2sXAyVNYXdK31rVeqz2xjRjxXB16HiGWY7Ucn",
  "key15": "5PxoUZ5AGKtdbbi9cDz68c2rHxiwRdHGHdNAi5rT9Gsv9kJnYhfmUCLtyRRWXhgR6YP6M5iiu6qSvL8XycJYdiLi",
  "key16": "8SaU4zogE2qvmLLFTPLVG3Nq45NpFZJkyMDYwjqrUYpqEUgjeSxS9swBQB4Tuj6Dg4htG8D7CQ4Lmnt7b9N1kL1",
  "key17": "3ArA1kgcaUud77SWq6TSNwb7Zk5FJzELhsBVQCuemsYQYEV9GQ2gaohm4wCHxRPYncTbDz6xkfej5yGWvBSprzPG",
  "key18": "3ZcGroCtCJu1VD9kmw6dvLcx4yKYwSSgtMKR58S9Ls8BKkwGav7jzqyMFLLqtNHBXbxcdVAGR7iANBiw1cVAatDF",
  "key19": "4DVWDs6BYadu5YvynqXc1AkwfQqd3CEfWCSweYp7CBf2hkE3ww1fa8ngr14hHj3zHBE94BtrTPhGUmndYdzawp7a",
  "key20": "3aFFbNnefJEP4dTLrHvhVKB2aFBkjnUrp9tfdJ9C7cVKx8pM4dqtuYwWYAzM1DZYfxi7fMGHxu3RkHgMJ3JNvif7",
  "key21": "5Z4sSMsuQg7FiQoT2AHyZECMRtmgnPEch7VoDT9ayudUj32PJnTFDfByTUjMxa9E5S2DbrZmNVYwnMpHCS1n9fyC",
  "key22": "5x5zmm6jnvbQ5J3qQawAGSPEHwMsdVzPYc4wdUngv8NpoSXonddWf5LEmwKoi5teikHcm19Bnqyta8ccEtFCyUXC",
  "key23": "5As1Sxyc1WCHTJ7r2Fs1vCf7UrA6QXhvNV3jSc2hzxxz4FScCUkG8UTSsvTuupnxx5i8bM2DJ8Q1SKYgHpzZKbyK",
  "key24": "3kzThMxPCyfxZWq1SJsneDku7hR8f5ikaDjeQ7e8HVPzRaPesBhwpywGm25PekFSGaMocnuwwRe6TvBjtFHhNY9j",
  "key25": "2peueEGy7ZHF8GmQquybcFk64wQbzbHRwoHYYfhcvRy7KVr6cAVcBXMvTaoPN3svL2eLNAFhgT88rr5bLHszXZtP",
  "key26": "5teu1izLe7qrnPe3d6Vv8j87koXDFWe7M1sSyjJCgtpSPPrpY8ZoexNSD296yHxabUZSZhx8tipqr3UM3xa4LcaT",
  "key27": "4bESEw3ctVmoDnNrE1CMMAurUm9g54PpQAUYv4qZj1kSojwsXswnZzD8BUg2AMmVTCi2RG3XKuXnGW7vCNPbJ825",
  "key28": "5QENv3k6vnVTwA1DBbwjTZzwjvd1RndnBCmb6AeHknUv3mVofH1LhXbyNEirMG38YF34dwuPWhmwUFURPEHh9dkh",
  "key29": "5F4A3xTh1HmqhEDJna89KVxpKZ7Q6qT8GZX91gDNHZx86GJexeAQdnDVHe4G4XCU7eQvgi35Z76KmDV6eecehSMu",
  "key30": "49uwb7RBPCgLiMZDQXtpdExmAWAxQD4VK1Hk9D1AahMDikDKSE77uEbCiKbwJe2VWLvTvNvMTToHdRXpd4reNeDc",
  "key31": "2JYw3yqqVv5BHKp67gUKYRSFsGu4Kbvw9SGuCA3UGAdnzti7TCbiqLcx8yjTxFRHZL5F4fPre3yn2XRqfHixnj4",
  "key32": "3KPhNxyCobm9putV1mpsLM29bSHyyuVnu2aW43jbmjCimL5dBXyjfhKghrePs1AkjkcTJN5EUzegLVFbeAxXpoTA",
  "key33": "YVh8tPBUid7iV5G6U5cpNpyafoBq9zQWNejN5DYMdZmYfQy7i35vNH9BxwW1sEESmxkNFD2j1xKtWSZMXMeDCZt",
  "key34": "2XEBFsi4XjtXFb7P8DRUpMNWB3ND4rWU1jgkrHcvkeHzo6oNmqsJu2ZCgS5EQKoEn48ipdb1hBvgxQPfspo6xxkb",
  "key35": "4PqzmWWR9drNsNDQWosH8tANBz8yzr8CopkHuzo7zvsCCFZwTUHvJjrZKo9GY7uUFsuUvYjVMyXziwso1wGXP7Ay",
  "key36": "65z7thzFARxazC9uE5o2L8k1NCSSmPxGtp8Ash9hKtZwyq8APeMLtT1YwDuMZTqurn9wuvC1m6ARBEhRjCnb6p6v",
  "key37": "58xHezdPky8mbyNszhiWfKiMk5tPaYQhCtoqVumNxKb8jxW23UgbqzW51Adh27vqK3Cp5SuAce7ygqEduubBw3qx",
  "key38": "39RW8ZgFYLiYD4wKb3FU8pv7Xxmuu4nswwr6vAXHA3fwqS8Z611fTcP8dJ5AuJpZxMJyMNo89WsdSs5bxtnW51e",
  "key39": "2SRbfhzmSAHMpGfZJpwta2ZkmczdXUQ75osyD1gV7MYNoa9PvVyKwGeEUTzmS2BAjSgouGfJa7W4hAwRuL6i3Jho",
  "key40": "JDfVnWRT3aCQLAD5Qbu8zbzqPZtFLpP2YZu3jgnMWw7vSeek4UxAWpPcQrAF9MpzLPivPCSUtbk7QBYwLWBTN9P",
  "key41": "2VvqQqNJaw8pRSNcRnyMoqrY63Z5Swpnac3EECyqhrNd53DQhmVYvwPEub52BmTfmBQPjSRHzx6C94cTfn72YXKM",
  "key42": "3T4sR8wrSt8HowvEoGwEL2hgxeEeXxTQqsnBPXMh4LHRap7fgG2yBHKnyAdetWDhLnN7LC1Ubz6YJo76v5dZf59z",
  "key43": "3TkLCDi7yrRRDLXu4zAycVVXyU77tYigdRW5XBKHeVV1XiBtxym1tQnJazrprDRS8nvQnYwweJE9Snn4e9wB4ojj"
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

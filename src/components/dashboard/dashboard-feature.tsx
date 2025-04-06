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
    "35ThMkveq8o3Qd2MwKcvZMoLNA3fs39LepdkoxoCh2izNAEZYki1rkCUabFB7KycrjFjvU4UGuivztn7pgDV8ex5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KdmD88UsjpRjbekdrNhimdTZmgLjQTU68GkH8KmMwRr7KDwozUTsqfz8YqZrZqnjZMGDnEjNKZyxcbwKJhBvbM8",
  "key1": "41UXPkqRbZx2T5sr5HVn9QS9eyoJWhSZinJtbsRkGGEb3eBsEQkdgHe2HAYhYzvi1XwVGSD4McSVgjDWMhJhkjHV",
  "key2": "4PgYyU4YKD7MnfLRjsq1sFRjBZYbAwafPgefdiTeJFw8kMVtWXyB1ToBgY4cRRNZ1K9eJTvQ41vsdMStvCR7toL4",
  "key3": "4dx3Lk2481gnGsk58BktiNCd7yFkv5Q6oxsfPhapYk3jYCAT1biPdjFoBfnJXZ9TthfNiiDwF9tZYbTB5MYBTgcS",
  "key4": "5VTPVQYVomD3XVCfb2V4Su64mSuhAvA4NaTdftxeePsSVx7KnTmoyQgBrrm8bv9LvNBEgGXaYh4nXURfMwdfZxRp",
  "key5": "2DU2dNvJNQ2HgVnjC72hzH8PJQutvwJauaYtPkfqLjzuFDnhDoiGMmM4pbYhPaypDdDTuj3WDKRWrxfy2tTHzDcK",
  "key6": "4jortrMvHCfXqVENtYGrsy6AUv8c8dN8Wu6Teo9MdgHWyyUKr6hiyyvYP7nJTKp1SRVuniGQeus4hTjdu7SMmGHb",
  "key7": "4SnNp5UcQKVkeo2HbJtZawTS55taDczMTwkh3b7Y9Ayr2pboHDpQ1AeHHbA7Vhw1mqouS1BpZ1FYuhf7e184ec2y",
  "key8": "47kJ4SKEkRZdWjwEUG9ssDKhfH6PyftzESP5bqSbPkMas7Bxin68YmzDTarF2t3fRgs4RPtSxQhKaY1kNVvUUL7n",
  "key9": "2f19Lgk4ers6MLRaSRud9QWSB6QCi64ojaKs2bhmf11EXum9kzURrCsgse4smeG5ho5NAWvxmyMoCu7c4qpry4Xj",
  "key10": "2AHNXoATeS5mpR4XWm9RUY51bvexFxKVPjYmZzvAUbvUhnWm2g5vLapCAZFGXiPRmvmeffP6BH7n6LddoEjLwX5d",
  "key11": "4jfcfVeyJcig9gLLnEhSYgdwPZaCAykXZ9MTBbHwDtekKHVkeqb9npx4y5fFrgb1HQGDscTUzidtzynQV3zoi7p4",
  "key12": "5SxVdPx1h2HfVGCJak9Z1LBwyXecuyM8CBTQDe2KGg95eHEt2knb1DC5zefNH2j5War6WSWbtRdTv56cP7h9owbf",
  "key13": "2hYbhQq1fWaEEjS7wXJJZqVtoYy4pW2iRwh94Jk9FtehrTaSFWCJUod4xuKPVKfdVGLJnevUfn63auoQtMNw2PYW",
  "key14": "2kK74MaquTjRTxwJaLhqcMN6ey6uaqdCxovc2znsqGMQEaM9UNgAdzZs43JmLn224nrLC6vdrqu9Z9yE686Jgx5Y",
  "key15": "5QG2j8wo7UXhzt6KFXKfmGwNjs8DT3hqRQaefiPMbTmtoLKZdbzm8nq4TWHQUnaNuTeqNdQLTg4A23yaWFp1qrjV",
  "key16": "8crcn1TEx1VZqip1VGbLUnW5KJ92qhEiFgRxsrF3tirNinidNDpDkNPpQ3hZcYHGqY4gFu8kAxHa6cq7h6yvawz",
  "key17": "GQV8VVGYFdAZZqme89iru9fyDpYWzR9jmfKmR4K66Co5hCVj2MheAoXueiU9QryEkx8UtJRao1NC542R7oAXoTZ",
  "key18": "3zAWTuUAwGeTtngipfDMs4VUe8F1jkMySqw91wnik2VRMAAQMZjw3cmsuaKmL7QjtnqWTPHA3jND816QKegRL4Du",
  "key19": "2mFqSWL1a2AcLuCFHQ7FsFGhiXHkuzhCLc9Thok6pjNKotmEZyZ93HvZm5fWmf6bEjEB6t8JYJbzKFddztXYQXWJ",
  "key20": "35bKNEob84AXbrXX8bDhQZohr5H9bbGWxdpTJpQKM9PSuTXHxavYJ9NVa4JWk7Hao6Cd3puz6WAeBJFXXxrPWqWE",
  "key21": "4QrBk83EhcybqzCxwEB3uAWZaG8etHfSLDsMdwotCcZhKGjzuUWkEfhazqTLrtvdte9VLvQpZ2ocaVjDStipBtQe",
  "key22": "3fpmUU9tkTmphi3D2WJidUXk3Syh8Ysr8bvYoavb9wT9kd8cr5isVkTU7VawoHJqZECEvc9RAmhLg34xXViGmEQK",
  "key23": "2gsgfKaNpZjmxDSKJcg6L2jxqPvgcrN6iQWcpTFFMz2CL7Qp6JbGYdd4hVy9xfdbA7aN9w4QNw7yBFKycNydA9zn",
  "key24": "5HpohT89FRziYvKNTit8jejU7f9cdyXCkpF8HHjXZJ6D51eHQpeXF9WkLxCaTFaQgk8JmDC7Acj8DCADWjKKnbcx",
  "key25": "3vAgEQeWujP2nu2WoiDpDuZk9q3W4Tun8bTJXBUg6TrXv5gzGxmzsnkArRvRMsWH7xkHMukVUvqo4sreDJruADCX",
  "key26": "VRSZDuCzujiZJUQVfVYDsJrGHkPTEw31B5Ag5E1Sk47W6FtSFbRSKs811jAizs7vJMyEqnRHMATHbcVxQUuydcj",
  "key27": "35s3WBHbwXsmEq2mouSwbUpugBaGVYRCg77DJkvDQkFQTXVSs8SrPfsqUe8Ci6SLd4QSVYZ3radzSZPtKCdsqnro",
  "key28": "TeLZphrmTUAqfXafMUy524gQNuZKsTb2t51KBWyWLtydPEk3JJ8wDDwHNTbAVgdZ96v8VC5fhikG7jaALj8Wnwj",
  "key29": "5jk6bh5GTnHGmG8Lq2BRHqHjYgrthCsQQjbk9pX51gQz9BPtYEKP3arZMz8VARGuRhZssX5Tgfyc3zT1QTjqcNEJ",
  "key30": "rDpMzFSSjYZCtLcdFA2vgMbgWQvg12kdKKQeUm596tbFPZCSZTH7BSfB2AEARCEWXVNmifvQhtcseS4ikbYYphH",
  "key31": "4JYJpaikAG54GeCzqXUjqrUQsRLgFsck5ujP2aEkCGcTNNohtHmN2yG4f3SjVHgcy8K6WbYJYW4Y1eEsxJizyaP2",
  "key32": "Cp4Cv5NFkPyk68zZNYxSJejCKq4BhE5RdRzdYaYFxX5a1or1LMgPbv2Mwj3KUL5kSNKnHAYVUW4RHgvRKqxF4Tj"
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

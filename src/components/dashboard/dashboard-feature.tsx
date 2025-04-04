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
    "641qp3PPynePjzDER2NS7ZCQRHiXRpWxrusif6Aris4MJCPE7L7VyWd76Q5HjrHJXyc1oBBQ6JMDuxnRvo3ZVmis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C4bvA8x9zbi8saMjQirrJw9TUZzskhLqgsZNL6NgS7dyS47UjZqJN48RYNCKy7PXVUoTS1yLNFnAUPZxkSXH5Fu",
  "key1": "34CY52sebP8NyLNdxbv9cVWjPBrcjxMoQMmzYEZ2Gm34ghReko9dyFH1SjTeYEsiK35gafdFwT4CWRmZ364Wv4SR",
  "key2": "5PvsaP1DCL1a9QFdV6ZK1sUzvidiSG7omiAU2jk9E8a89UzqJNhStZXkK1PvovwNt3G84Qkry4RCYuTFWnG4XkyS",
  "key3": "3qjX2N5g7fQsxfLNbdy5YsWqe364awe1EfMzBFrWPZoeEX3DTZV4WVfwyajf7DoR8isp6bkjC7CMorvNBShPdijB",
  "key4": "4GD2fwYhRVHAkpbeyH1jqmxYPL4vedPUXy4867SsLcbwoa3UTqNJoNK67YhcjZYNq9JMDwK93wehGDdgR2Crh6gy",
  "key5": "21DpdxwWno2AE5iyqwSPa9w8nYw7ki8yPbKxrw2a64NLyADA5XJyQ2HDvoo2e1S4ZJr4NuoBhQdMqc7SS5maTTjn",
  "key6": "3cYFDCXaR9xpp8iKtiDUjVdiWkENxos54HU9X7PQ1PTJPv7tUhZ7FUemfiqjH7BRAJ8NfsykxfLZX85LGdSnBrpx",
  "key7": "3UZYyDqMUppqrwQP9LdzfNSMMug7EmiDFdi4vMxrM4sTp7okew7XNxWxB1ZJyM5tBEgMCAVRNLkwzYjdMtV876Nw",
  "key8": "3M2g7k9XNPEmWRGPQVhmZHN5EB3sKN3pVNWrx1uKFZ2qqX2XMyCh5ob7j6fHrGPvBjN3nfsU5KXxcEikQ6kQ1MpW",
  "key9": "Aet6QHEaUBtuiTG2Rnmw45TXfx1PLNyYBnJd7zGSeQZuuhzdwQQonXVwLBB4bS448XPBU4ZUyeSgfpsXt2wDyGd",
  "key10": "5QmyF1EJP1WnNqYp86F84SysVgEbXArS7U1rDkehAFBGvsHVwnfErSygnftt4YsWabYYGeKeUKBQbeJBTnZbqQGR",
  "key11": "3fjcchw69e5xWa3gHch7We2gxCeZrFAsK9TjMk7MvATmrs6mXB57XLqJ7YeJWNZXvSWw6ni5f65AFq936jziV1xe",
  "key12": "5kaciWrShvfXDhmqzitg3KTa6CwBsRD5LeTrRRHDLN2yQWqhawoFAXXWmwVoCLtPQKcpmZ2nTui2bGKjnhFcyYNt",
  "key13": "51ACNnrU13bzNBpmMF3czyRZVSJXZ9xEqDab7KscidbykGsC6Qp6QfGvgRkwrKHLSpz5BcA1Gyq49mmSsVBPFNcS",
  "key14": "jih4VkGhbMRGmWMbd54FdFjsjgARoWctUuZZkGBAfREu57kRxZhmB5oqXycRLYXvmL4wyQ4WT8xMvkJs95Ht4SP",
  "key15": "25ynakCrq6Rp2mRmZeBaU9H9MQtgm4HJdgjzeGukUejyL5qQSQbas3n5839qqVNECK4GNL3gVaPNaEvB1cyVLo22",
  "key16": "5hRnD7CHEH4xCegVvty9ovD27SYQJD99hFNGzE4aokyMuVgRa25sddoRRoSNEQgkvKrx9nhN2Z4RsPPZfHgypce6",
  "key17": "4KjhE9KKY7WMaGQoDZwdCbH5zKBNTYb8EeXftVrhjGoW8CXdRELQjj53znqLuPEvbgKkwGtgBVy1V8Tzec3NSWKM",
  "key18": "5LCD59zsQpYWLoNakdemUV2wMij4oiiWPEjTQK6rfm57YJznjQSkTS2e8jqutEGvtK3mEmXQsLaBbKzG9hZcVEB3",
  "key19": "4ZDvcjZK5u6tq3jdp8SGAdbpCvxQJ4L6QUQ5aSLUMCek7UUhqqFM32mxUmRQR9UgZnWDkwp3nSaRkijFZpRugT6E",
  "key20": "3KYjZuMPHvJ8z2LaMvWxJoADXpCmnqMp4y1BX6B2qPH8SqWWyd2rS72AdjqGDWozDUFTnv3h3FPNAJnzSD9BVca3",
  "key21": "52Nv2xQ8uhZKzFdbtxeobGMKhpde6jWD5nrGdEAbxhiEhXJ858ytjtf6qGEPrDr5h5NY5kk3dcbinkFq7ej36p9a",
  "key22": "2Fw4iGmNqJ5PdoHfF2EBNgy8AovHuVgmVWSvhANFuB6azaFwgjabPKeDjsFga2HfYkKKMh685Ein3pJ7KXb6r4Kj",
  "key23": "5U5jT4KiNUMBqUUXFhtxEBHwABNvFGuMoWGHWPN28p7VspgQjh7N5mamb8zHHdqwA29gmVFhrwExv4K1BRxCkPJg",
  "key24": "WTStmvL9Lt8RxPEf6AQbpDMPB8o5aX5iznfvSNApvv3FvLYhNQW9tWu5wynAFWWZXpaVdHWQQVK2RRFKnhn2mAd",
  "key25": "3aK2EH8ktda4iW4btZS1b7snJnQFzuo5KjZfHHJRUtbiw8mUiCqMHvX7zG82rPpdhYsXDJL21E4Tx74zegZMiJpa",
  "key26": "5ckqyiVNsin7jELuveHSYAG3LoE7yBVy5Ddzik846LjsC4P7aayNDuEoQbeX31S17ZCXzp22srsdvrRY6PRNuBMT",
  "key27": "3q7q6UAzQV4R1Ld4cG3XHYVGq9HEVzg2KTLkD79RQL1JAzV127eZFD6Y74URE2WtC7X8EKqrL5ZK2K7CFF5oymnA"
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

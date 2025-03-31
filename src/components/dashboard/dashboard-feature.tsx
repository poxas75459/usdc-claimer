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
    "3mAV9PkVHnyNG7hnuVsu4wF2SgWrvtnP8x32o1zbYeRiFAhvARUiuN57Nj4Qopkvk2iS5Nh1CXQmc5GHrc2FCevB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66eKNF7BTzDQTgxkwzcGxj4A9ZkR8N8Vc7VegV9DysGhTFyWsqrCvib87ymgx221zWT1hBQJDZjkGdZKSAGR7ErR",
  "key1": "u86nSDRtsgrBnsGTYzuf5h6oAvUUCgUFU1D8fkNN5fSJuZ7eFC2KvqiDvNVbB3MyHG5wWjdhewFr95DRBkM6WyN",
  "key2": "5gW8CgwiHxZRMoGQe1zR2CNye6AfiMXSwT59jGP4EKisndB1Fz5vKv92ciZXQfZeFo3GGGhCtWHFQupcBdC9tLcR",
  "key3": "5w2qsdA4ECAFrSE1zRLafcaQrzYGiNo4JhcbYb2ELmRZoSgJwG25DkJYKxiB8RJHpfKncCnuMvChwffTizkHikb8",
  "key4": "erCCQeZ9UyU3a4tUpR2yQrFCaVy2TQ62ukF4tLJhoLKLRsXvNFEsVADVvFx6nT45sPkGpb1YdkPg8NZRt9JKMuU",
  "key5": "5EtWsxueqLWAaFUdxd16JpwKGo554LGYLgeBCE3KcPffithz92XvztTn1xvhLVedrnR6RdWRj1FfEnDv5WfnBpsV",
  "key6": "pzjYEx3YsuwLGexKhCWHvUq9fafmkVMmP2oRMBRCD6H56fs8CTY6xmSj6KSNaPzF7Ab47ute8TngT9udZCwWxQU",
  "key7": "26pmTVSfbyvqU6pCmbiZoCbtCTtcuADfaV5j7V35EhNPdW3V9QqoASNutFPZeKroWG4JHp7GxGDDY83Yq5ZjXMX4",
  "key8": "3xYwVqPK3v3tMFQKhVBqy4JWKyN9da77YTWy4aCWh6nm6WnxdfHAv3Fp2Gon4gcnh5Zq4bnVp8vFCfxM48MjfV9f",
  "key9": "2hU8JxL1nack7f2kvjdJdWeRMbXDHf4F3gKwCEoBwC1UJeByDHEXeHwwKLb82nh71nSgwgtNyPP8Miirwbh6tZPo",
  "key10": "Jr86ACUXHMB3NtoHUqKxENgWCfc1NUhoahRVwznd9ZQD9Wc8BnDUcW9ybSgum6NiUQ3JUgbfGMGDFsVQpBQSA2g",
  "key11": "52vgDCHs4MYygrjE4G36jzeTVmX8Bx9jhxN2HeRg1YXnFT7LKh5KLm4t5q1SPUZzjwrJf1z5PLSBJ4RWhjMQzSbQ",
  "key12": "46rREZXN5JMjf32XCkJg5Ny9upYHzfc7PoDqPo7KKktW8B7tCh4PtPFFQ7Uxa59JnmUxQHy1Bx5KW8QyFp7JmZsb",
  "key13": "44XCoSDh955EW28LbZ4RZrd5BaCjgB41qvNV9NFBRajnokvotpqmvQ9SeniEmziNv6k6mFeXj6AuDgeAZY5uNzTQ",
  "key14": "39gX42qkMKpocyHpkpK3NZCJC5qkkSvriB3CJW5gcJR6szwnn4C4fCdmgaimpe27v6vjbNLR6QbcT4JwVkQUsvww",
  "key15": "2jSaSbzxMF5dTHWBCxKUTKMgUNTbYw343kZ2s5ZN7AEGdsSUUbf5HAqx8vD9soTBAVEuynbwrAhhAa1v7ZSxAspx",
  "key16": "4dph1RsLQyAQtexbKKDV1GRZyxFzTDQ2X1pLJz54Egh7VGVkm4fA4ABXqHJ2WVU43GP4krfqMBCiCk6KVTd6spu8",
  "key17": "5TTFYH2JAC7n935k5AiAUUp5NVaFLiEKoNdrUw86uDfAR7ah4vyHiER13dHqD59GotNG66PbDshEaQ6v3rsRav2N",
  "key18": "3hw3YhyH3wX1JoTRhEfLB1uBGsKkRHi1z4hqhDR9mQh5CWEaGaQZC8dSyEwQFXz8Si2BCWAtzw5saZc5hX1xaBQL",
  "key19": "4HqiqCCrMxhDN7g4b2aa1SdCk9oXdGw6MCXPt8kwbiF5EuzF315Bogyy1Ts6W1QZ6AvamreBeuZ7nZGdmCCxW3JL",
  "key20": "58ypiEA8sw1BQGwZ75Ks3Pu2dSimVwKSttG59pCjQ3fSituVBDN28L4b4qLNu1qJ6GcmN2XVCnVXvsGZDu177kTD",
  "key21": "8Kd7EkGRKheuJePGeD3Pd1M8UULVdMu4FMeeLtQquqTNrdFJJdhwYqHQnxadegu9k8vaRCcXD82U3Hb4MpwQP5R",
  "key22": "xxBMAt5pXUpCHvAyfvU5xZHU4Z66zAsg4vjbPtoM5pizmc35gd2hxgtbhhugz5biySZsnCoFk8D6Tkw3ZWNa87r",
  "key23": "2arexe7i5aRFKiPw5tZT9X3inPf1wmbc4nFxg1ruwjsBSAz5mKDFuW28tsjxd56MkGMaNsfJHAFqorthgcJt4gUw",
  "key24": "26BRPJqiejEQNw8jaNUe9jgxxfVxZeTzuBhd8M9GNU1QSvHXSJZGdvpMZkiNyqZTvKiRUw7Qwsqrt7BNkHsqMQCQ",
  "key25": "3M2Y1AMVcD1EkCL2AmyC4FR1qnhtXhRALRwRR94vLrL4u6eWQ1jxNCgA5hnvS82MGHSiec54PTCjiBdpk6XahHiH"
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

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
    "389HQVvMU7Ei9L6GxToMLdxd8u9wS2Ku4CkpYtLeSWLnFCcnCP5WUXfqagUdf6zX9BptWb8fmkU2aECzGFThCAtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQS97wTg7quEBPxwTyLYSjGDvyng4hghc4D1QTVEg9hU87UqCdG1jD676pQKexgsVxRpDizTsuYwAdX4WKb6AcL",
  "key1": "5jruobyvNAzNgheRo7vPBSZpBoQvoHSFTnzoEdk5SvUZpAek9QnBwQUVNGdDGbrbCHu4Fm41JmPMgi2cKoGRQqa2",
  "key2": "4TWnVx4zz8KUYg1TtgpC8qbXcNK2f33qSQJtL91eWNwmzKypjMoKZATutbnNVCYEWEbs6S9Dmir3bjBtksbnAmxa",
  "key3": "3jEyUFtvexD5WGpHrq28ECX3EKcspzWoqe6GDUvphgUyv6L4LEzumTU1xx7PozL9c3nY7quNySw7vURogzYxtEJq",
  "key4": "cWAJWWnT3B1mqzDGE5NDWFAojKZ9aoRj6WZT7DByR53RzDTEhsRWoiYYzyEvAB43BGG1X78ZndgrysWJyQqKjrU",
  "key5": "3pYDh6zayDrF5pqDWS7bJfyHQUVSmwofuWe3fHpbk7Aut9ckeaF1En5hZjE8XvnfbfumbMEJWGiRSzL6SD3nRjaX",
  "key6": "49nbT6PsjbKgiYH12G3UEP3EDrG64GrZtPBxJhprwFCgpyz2ARFJu8eDuArYRZKXi55qyAR4fy3ax1DVUsYv4NPN",
  "key7": "5xhiLMFQ2q8gpjs7aE4Xhw1y1Xwub311nP32dmZ6ghJV2cBpabC36nzWit9qj3XH4Kxkb84Tnm5sqJVC8ScgqxCd",
  "key8": "3p6ZieKKiLJkzUtvbzW7tgJiaT6ar9o5x8eVMrDMK5Qnd5U4Hp17ece6dYXRDDJrekEBa9Nc8UhyZyU62j2WA6cM",
  "key9": "5CM9JH3hG9uwybbvJWfrYMKu8zzu9tJVFNSPpZT7ZuvKDrAkrJXwBMBLvRdNFAU96j7D6bZbEmBViX4STNPA3qaA",
  "key10": "3s5Hi1BkGx1zxSmQXNJ9WU7t54DE2Aik4FFbEVmuwfERpCKyTYArnbJ6m7WNZp6Ske2BSmY5eSweuviAP8bfB5Jm",
  "key11": "5Rf9x2Cq6fCLFvVWtMJRs8aGoMqvUuydEeJ81hgFBuEbGNMBGayHKnXg6rjJr8W4oW5XxsnKQezL66AnQ7Ld3QDo",
  "key12": "zPSWLe6Krf3cy5dDqYbCyR9Jgj3yB6TFrEwQMRDqcDSe5vKcF13fvKH4qVPvyp7UdhopaPZSADX2DHV21w6fQQZ",
  "key13": "Ai1ttmQZWtnfBb9Ccx3E61uK33DF8Yf6hJxU4LEbkKUYt92Cp7NEnicP1YB85uS2PFnkV4ZLTGNdVhvqKSoB9Es",
  "key14": "DTCEHCeGi9X6N3csJRrLV4xi1mKGH8HDhKXQmXPU2AfynN1kYXyu1x3ntBNw3CWRJa8dNptNPFCdvjDbaKQEa65",
  "key15": "2YkS3K5Dq6uyhQvLeoiNqY1yF4BE4ot6TqL1DdJ6CVM9vcBYjoDBjF5oN5JyEvV7HrXWodMeS7vChGGP1vtcZEcU",
  "key16": "3SyJVHaHCnEcFtyAyxEkq3eebTs6XAAxf9PNCs1SEu3457xzQ8bSBBikZJLqqxcr445ZuDwuZnABGkftNAkVWgVj",
  "key17": "2Rj8Qp8AY1PMgwu4n2WXtWzobCxs68S52UeFUgsREf7n5LPU8X9Px7GnEq2poSdNDL9B6LtknRA8RXL5Dt6rbKYd",
  "key18": "3e96QB5ZfpsyTNNqiyjunoTsECRYcX5CMJZD14uzKv5e9Br5MeSeVmo47AbCWwyv7e6ZRSMFzAp3A1van1xhPxSL",
  "key19": "4Lmru9n3KGgPFbzkHB5A8yPZSk1XGN2H2NzzLt2YvmVea7qzdYX2jaNHp5ZwYhjXbkERZYMbP8fqzctg9r8ayz5",
  "key20": "5486yJ83cGkgS65fjYC47ruTi6pTq388ZsCmQLcfLyGrcVFcdNgbhPZB9t8EHteBbJNkwHrSbLPYXXbeUnRCQAFw",
  "key21": "29Q1627wfKfcuBYLGfFsaGWZCNiGPHTKjyczg7VV3QgpjKE1Kpyx8BgwCJd8uq5fdDXfkP4Ng13xfUDSdshQc5nK",
  "key22": "8gFQj1LbJjoFsuCcV5k5iZQAwho8xmbEXyTVZZwsnoYn3upP5gxgu5mco817gKKKsRABaUrjyDneGGsthMwQTb7",
  "key23": "31ZurWwPvstDRuwUk67pRD7ER6AVXtKdzLYQoYrMRGMnPvUATjNKjsSuvairdxe1RfjHDQ7S3qHiBJXYpb5bZGay",
  "key24": "4oJqDThqFjzAqjSoqjynwHraEts3XZzAwFi6QZ3qBb1wkhungHUupW42KssaywfuTVtf647ATMNu51Cj9KtZgna9",
  "key25": "3QwMeirGJSA2d35wa75HanPUkGGjfBeDP5FqVG3oCtEUoLmUCL6t3cjrGv17QS6G7P6X2n1noYxkpgDfQLFuzbvs",
  "key26": "7R94Zuh3SiLBzZggHVXenMpvz3AFucGFtCxE7MpyReZbsXGiXJhBJiiwxK4pyyXrCjyRFCHef9vfJAVYAUBcBbc",
  "key27": "58TDQWNUGxqRbPHLrP2LuZ2Tfo2BRwjdsdpCgf9AR6quFogWKk6JjHb1GrFTTGQdZzUYNgNgitKwuh6ntM9fhEYn",
  "key28": "NfiSAbdJz8cD7rZ7Mt9XZstePbzV7d9t3jFrY1JyET5xLb56nE9tj7V3H4AHQdrK3ge5tKXD24oYiFSoUdD8VKV",
  "key29": "z7uKVu6MgNtM4B7Sn1LwgJWn61Lg4Lm8C8ssmUFN1CsG3GdNyizZK1brEBLZRgU4ZVC8kztk7pvWqizdygYrhFt"
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

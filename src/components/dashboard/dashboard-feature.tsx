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
    "3n5H52z1uNxDR3kDsmNgyG4WRK6rm1DnUewESb1r82kKv3DWWazjx6BDSNsRZuFvt8r1NAjEz76hbTV6nSPKnw1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LX2zTNcGNWPQVNx1JYmXZjmGx7tL87pHZEJYPAPP4BuMtVvrUvGWUxdPzvepdkg5mstULGXyE1yCi3vMCetRUXS",
  "key1": "58Rn87MPSMYX6ujJUwSKWG2p6MN549WcKHYqLjFjcsfbfsV3oEJLNSv7Qq6uX5C4z5jKj8ceLY6yDjoDPq4aKJiw",
  "key2": "5WVFCc6hovHrqdRzmMBe1fSKsvxF5LTXEVAtT6BGb146vALFw1JsstAH6mSzJe5bc14mUtMrdPbiHxCN9mLKzyPB",
  "key3": "5TF1UBDmRnA5FLQ7xwVwgPutSb4BUSmWhAsuScA92nycpKGcMfGEAZNbfFPBKZUFNETRpvmwMW3guTnfvSaeBHGG",
  "key4": "dfzpP5kkhfUSarotmb7GkHAYARyf3LkR4xixoohNLte5QNVYAfWkHVeykBvqqZw2Yxjeafp5JtYaAPWgEDprF99",
  "key5": "3ysNQVfLtp9VHcNN7dTKanHp6KoctCn3VFA9BkzL44T4HtDga33o1MBAxRiuKm8Yks9nY97RGxwtrYV7sMwfVxPQ",
  "key6": "4JHBR6wH98M2aaJmhdW7WRZFESbddXdCZWj241sgwbKf9MYNpNYVUV9RaNNcEkp3tbonjWj5borWNQ6RYcHvbWJZ",
  "key7": "43oLwUdQ47ENDqbHX6x4vC8ZNt3z3iG9JoGE3GCLrSuwg1y6x18ijAZPhLGpHVSDxEE5WyoyooT2T4RbFCqeQ9Me",
  "key8": "5SVzbTi6pmj7v2QreCCutbtHJxSehDkAEWTQsuDhW5NEnVrfqMFCEujwNqyPoctaXkPWYDHdGN65F8CPHKg361NN",
  "key9": "2KQPd2j7xXA8jGRiZBevNFGWvb6dtTnuZET1YWHU7YJxD7uX1fgm88WcWxANCokJvidhrKnCV5GRLgDPdZLCbQFd",
  "key10": "368GpS9CddjcLKckShh4uMPdxJuF8j6c7dnPHhp3qYNMaCJzWKECEyn4s3KdNreQztwYD5HSJ2yCsKgJk6HndC2B",
  "key11": "426X5y7DxVe7jZAw7fmZ5rxdUV8VjtBDGeR1azUNtfPLybCrMUpRXQp4HRsHepaXZAwApexdnHWf9Mdx8u8WbYVP",
  "key12": "SLRJQHkA3urq1TPYF88rnPeQza9y1yxp88UcbreeaKjFyikPmSgFDwLNjsPwy6QjKQCc4nvSZpLyF7DtBrvbwkk",
  "key13": "67HtBEUfDNydGima4NgY5DHSQrEXaK5MUTt5LQQhLXP6EAAzaXG7o8k9NiDaANxGAoQjN1yFrs9CEPA4cRD23gF",
  "key14": "5bKpZP9jX28ma3r8pPChs5rQ6Lnr8BoMpYqydFCJUKtU9583RknocUQRcFxLpfSgUN5CMHx9zBwBPjzdDREe4t6g",
  "key15": "4pPftMwoTNGYayYPD7ZXE1u9jndMG77rj9D7hcKcNdDzbUa8ETA73Ctrx21wJnTBLg2yVK2GRkBqvhQhsTCrZEbS",
  "key16": "2LvAKT7x2MGJAUWmCNtzfMYs8LfxbysSmrJcmDtVXJJxUMdQJFLtgNjWK6nXT3E5GeGNFoXtCfArxcJdqavHX3P7",
  "key17": "47uR5EWrTM6DzSeCcmxW6fnb9caYjGYn4GoFz3toFfwTjPkhCWvk1ziNm9iowEQMhGhEQFXRoDH4wYEPbj7kF2Tx",
  "key18": "tuYrDJsGXTfH8DBeqKnQXPRtgUAM3AHtak1TfHsp867By7R6jRLZUJoqmexfh5p9Sd2YnetNVqv2kcJqiZnBFf5",
  "key19": "4JTmAiugbz9hZniCT8PgdXqJDQmKgGaJyEa6RaxVLS3pziEJeQGAN9K32Z3vnZhTam9xcdU6asQe44tmAtWwsvHb",
  "key20": "3CLdJhXDeb83d3UHpvq72KKzMbkRJp6QsvNx7re5dPfY8WCrEjAtGVheF3hLYKzwvfqV7Mwo5o5vTv5iPhvLfUh6",
  "key21": "3mia4xcCd3JhmqQW2K7onDU4MbChTptRtSRf7CZHrryZDAeopH7RBnhXvHWDsNHUYzqNRYFEEY51dCQDb1VXR26G",
  "key22": "4ex2r3D5vu3RXLUdPonBCCnNZD7RrtEseRMThYwPbQRBE3xwe57BqyEuoG6CYK8sjmAhu5kPTiqq2eWLSsDtWuhe",
  "key23": "PSDqHmE1jciXp3WzpVjudRSHRznZSkLh4P2edffMFoEU2N4w2uN75orR6ihG5yywjXnutS6tB6wzXGvnPmJ4DUg",
  "key24": "5yiVqDTSrKvMpN9f6NGTwowAeMsej99oLtQRLTH3pJpqSKXneEG2QmoAC3wxGLgquHPp9wRiVoAgdD6R4DR2wTWF",
  "key25": "5NCtEmSZhdmPRswaoXt2CWMeyLxCwd6kQedEJrfQVLQoCfAJcnP5tufJt5rP66hQQyx46VvruNXTDXvr7DWmAptD",
  "key26": "4RYBeBxUZGcTCwcaUXsR8mFCPVedXpoeWnv13M4gbYJyG6MAwX45wyPsqRtF1d3DvNvG1nrmgyDLQpy2iV7DztsL",
  "key27": "4oJg33GmecgXsBzCxdGr4ajATjsjW3MtorLTMmKr27DYFDtWv4zVECe9MetzyWokNjyTtM6v5Pg31JvLaZ1p7bX5",
  "key28": "27FQJWJfJnbavacnm8UZazD1kVbnfySyzQq34erFc14CHR25sdo3gjr3ToivYB1ZGHKvpMC63rqDtSutz1pXoUgz",
  "key29": "5XKqAKk9cYvGhENeSQdQoAMbbc82mb5fHPae1nArPe1qvkBwpRCHZRUmoteHf2JRoQvaEQ3Nhzbuwg7LZoEyuk2t",
  "key30": "2iGS47eopJjsLkbRihFsayEZf85o5FyV5J5ja1rzGuybN5FaAf4Z5w9nvLUk1BHZdh16pMJ4FWvGn7AG5zR8Y3Nr",
  "key31": "i9J88fGUXRdduENNVg65hjNMrDsTya7t14gHsHQfoSXiAi3Upf9ZYstcfZVcwCuBo3Fz9hMXehwvWAVZtK42bc7",
  "key32": "5xacrKZCiDHfMAfho1uYGU2hNLUeU4ct7zR2dG8icTFJXjv5zV6BzFNstJoDQdawzNTBYeoZ8nL9vrdQ8tLmTTbH",
  "key33": "3nafaSPXEUjkJnbw1QvdcwkXejQ3g53jvseVCe6ZbY6QfNAuobdeJxtf8jfkEhps7FY6sa2LD5R5oCxzqVVzhene",
  "key34": "5KGHPwg32kJuGogSi1jbKu2B3xSapbjPo4iAWKyFAH6JdNUXgGnERqrKKS9b6dtb9zczWNfb2WyGE5bv67PVYaKa",
  "key35": "2w27XaV4zgCouuX7TjjRvUtAj95X2Ms3RoCeQi7C4jn8FHW68TLQUQwq2ikJw9EpjtZXxmsMK7QnLgNT1tTAwH6g",
  "key36": "2Mv5PSUuf5uhdYjFJdkvwSsut4rUua4RmJGBSUekF225kLVvXd6TwCde9EBPbERskjmTFyvuSthxnwwF825j79PU",
  "key37": "sNgQa1cdzLZcpqQVV2ijKe47Ux7qYFHvHG96hC5cP6YUZNHY5WVcvTrXp2QfTJKnd6TKgvrGTbNVMS8TbcLRe6N",
  "key38": "2h98b6vpNPLUvkz8GGdkN6ATh5qqm2eXw4pUWZty48sR63oAKQXeYLeUDxyuJY5rLdJrYQAKg2gs4SJyJtpoaF8o",
  "key39": "bZTyqZqve5GnnsTJR2fGKpteR97b5hdYQ9Di8Mv2Bh8P7gtgVhHCtAbi2TzpZ6NNaC4PiYSwE4GqsMC6NmZaecH",
  "key40": "akHMhihJUR5h79Pi1FA31DN9trqB4PD9dCif69Z673HfG515w5BzJQz63cptbtEzUodziqRjzLD3zFXamb7hU3r",
  "key41": "iWKkjd9uT7tgnSUkfVxj9UdaRiEbdfHtY9cz3BcXF1qCVmMU87iiKH6kqYkwMM91xnhLcHn93NbEsbHXzTHh1j6",
  "key42": "2nr6m8yBKqVLYdK1eUHFeaGHfcDrJN6qxcEeye9YY2qiDXKDHeQxoGwuzuoB8R8ZbCULv8rpfcEHf6YVcnssG3rF",
  "key43": "Wbm6A4WvXZiCJ2wtA7CxRiztCD7C9njmatVA6q1kcqtcntmSzC3PFsGmFt9pSX8CtGswsAd1xjPQaJcHYEaDEei",
  "key44": "52TgiceHXiBPuKiWZU2WGr32HW6KMk8xU2ACHxcQR9hsYgnz3vJqHLwujuuqu95nfWzrJT7DQVnbbEhsbkvpMf9g",
  "key45": "5zHAAGUWzScso1iZowBDSnPfdPq9yejxwqLsMVnd69ry4vog3NXBWHkz9JsrizvM1NBxi1KWH96ELMqXaUKgSo2f"
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

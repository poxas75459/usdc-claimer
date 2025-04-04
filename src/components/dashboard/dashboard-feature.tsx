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
    "4JJhRfexSoNzUNjFJ2awNUD3ebWcx52dHmHHD3Ewq5g8BSEzjmGgY68xNkx6W3JPw3KNnTqReVVySZiQSxGKxykH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hm9NeRSSuGMoSANDEnBuB8LkwqMaCQoRySyL4WSiXM2UmPJU3JKrmwPCLfoXh51x6kKexXe4Q5c5ewx1yqSjMVN",
  "key1": "5HmRdaanFw4Cf31pWPxKFV3iK71qEAjRP2ge4ByjuBwyWcjpqSXeS91bDiYr2yNxz5SVW4pgdQb63PH8XeNpwJeK",
  "key2": "M52rkAGAuahYkiC2RCYJvYdDfA9yBCuqoiqPSKpkbuWQNKgLBQZWDG1fGuKuV9x3XezkC1LquKsVSkyJ8fpDg1D",
  "key3": "3ZEfiw1VYPataXUdRdHjtXFxCAuUGRkGzr79p58N2ynokXs3m7Y3V2vUiC559Yj1NZQ4uc9AHZd7hskKQW48rkQX",
  "key4": "5bRojxziZCspSLr1du7ZVY7Pfd3tAWbHVYkcV5kNVfmvQc4T6zWZSGi9iNTssZKdz5FinSh1NWvS8s486BfEVF9H",
  "key5": "2MBhMeYrkPKqjvXSqXzMav3pc6RY8ikYDM6MbPuHgBxTDGkEnLCB7ZNt9RAaUxFUuhubw5VEfgbz71acTLw7F4aV",
  "key6": "332Mep1HgJNjwhQsjQKtmc1ZWoHwu6vC3BmXM4X2CiSkMXgURcLujuYqFmbQg8QgbHVpknZbehvAn5hJkkD9ozhL",
  "key7": "GKRnWZNFZZBo3WwTUczzXQC9eoJ9jKzPkXcWUdCt6ovuCtkqq5bh6sX3Z7aLmnGAkoB3UTiGMV9rddra1UGuT8M",
  "key8": "2bbexxxYFeXQSwaednGrQ5zBLiTVmm2eNQeWJ7CiiBFnrMrLEUgRpt4tpQhXpequu2EiXtfCDwEhGT6GcKfeh8V8",
  "key9": "2gE5cGas1KS3XCqis1NUb2N8yL3r5wxCxionUKHTuu6mPJCXyvJ9KJ9G7hYiAYVGkaBSRzBYqhkwuQ1oGj3zA4he",
  "key10": "5CW9q3eip3SgVY87zGJavxABhvTPD2nQ1gvpSXDcCPHoiC7RfDdFdq9hHWCbGaAf1FANvo6Z7fQTnoRSVd8L1JuG",
  "key11": "QyoNDWdd4RRPH16bqGMJEovRv1tT98vY3ywaSCC9bzFvwKoK84veLZy8FrC8Kiv6sAMUASYncMsXLuZzacRm2Fc",
  "key12": "qZpXFBM2tJCZXNZMQeLJCJ7b32saBPL2fnG3oYZ66Nh9ZEQVhZS8kBFaJ3n7Kpgb31Dq58ER5cG2TcDSjYJKMR6",
  "key13": "36bS1xLDtTsHf81N1H8NEqGBYDUjQCoc9BobiLkiH1WxYaf87UDULU6QCstnYaqPeEVDNsWCQgLUzEWeKMpd5cfo",
  "key14": "JebyiVvMP1EprRZ7WY2ch5r6QkR7Eca2XmKfz7VXf2m7VnijNaNBBzTbPtivKvqFuttVQL2U3BHcwfyGr9xUZRV",
  "key15": "2Fo8JWmdxMP2ZvyxgNCTKodNteYU5HWVU9A3DvVxrESWAXBbDbr3nwJWLNdnLM6Vz6hX1qBRPNL1b2G1a5DNeFbT",
  "key16": "63nih4ypyboP89c5pRYAa6jXuyxhWHD2qJTSvdkrjR1tsVs8EEdqepPPxVj8goHqNJyshWLjFH3DGHHg8FPjPAH2",
  "key17": "bKPamXsC1nVmcJ5hYFHFUbYvkxF7NpwiHUVgQGAQGizY84erNzUBPPFwMYia2jRmzy99sJe5iKKucNA3XMdChUK",
  "key18": "2ie8kSvWZSSu6GepiD6BaKV9wggfSnv28PoiyAho8z2u1URjDZy6RSrAo8popNEQ1UDNyiRe4NHZTP14D4BwozcK",
  "key19": "3iK2hmubqPyVNxECvz2FYXXJdvRmyj7LDS74Cd9oFWR6f53wccijmYRTz5d8Etxgcq5TfG2mnxZVa5xpyTZJqFs7",
  "key20": "4FuNmkJay8eA3fdW9fJmm8fNPXd43mFDrCMsJvhSLiUBHwtjqd9DErr9aFScLXx41eYywAbNxBUvHDiTbbzniiGd",
  "key21": "4KndgnLvLiqc7GizwoHEkxKSoR6mayae8cvEnas8kuxgASoeNMxs4voUQemtCvLyx8nUyEn7cuvcskQZr7dpaYH1",
  "key22": "4LadSHcAv9s13ccLr4UjuujH5Tkmfdd4B6t3EDMpfZSnrKR6eey32E553qvSqzLxxYAduyRZ8eCX6LRgk96hGVaj",
  "key23": "4M75cjffS6T1Zw5Zes11GJJajQXGvywKn9Q9GQkbs4x3GdxnzHTUJFLQEX1UJMWQFSMwN2mqo9sGVUsrEmLzWpAn",
  "key24": "4RF7YAMsRos1besdE2diZ5rEE2nTFWdtzCQsjR5hShP9yPNa8QPKetqGiZXJz9FG8EtmdgK8dNF3RqJZTbWoYcLt",
  "key25": "3mbFUEgw3MTmcQ7ELRoqAYn4UcKCPHXrLa6Tqt5RMNJuEaSUSX3DpwCbCMVQxt25P1MVPPtWyHzZeTHJmmSXgovY",
  "key26": "5tcwQYyCkyJx8WZDu6gYjccBkMiNH8F4BfE5y4BRvmhyEbNHJornyEyGQpGQcG9bxSSPisy5xMhE9ryXG87YjNsz",
  "key27": "3aXasDcKd866byYmqxkZ6Z6hrif9Fb3nRbsVWduQsjnvjHx2FoMFhHcV2Qs3wdfKSq1WsdJUNK4bu19qq6c9Pff4",
  "key28": "2UVoevcEZU142SjoXChrPjd3wo98fc8jaKE7Aidcs371LZ27nPiRab3i6rV63etQ38VSYAxzcxVKv9XFNhE8N5ea",
  "key29": "3dyEuujzaJ9UMfMfn1H9Fj9zNJNDAqgLoJWGTHttqBMpkBD9MBBTr74MvohaGpYvoReJf9xcsGjDb63wZ9AiZpGP",
  "key30": "3xLdck8qyWp3KwbkPHmeBCCAYdFsijB389MsatjcU7mVVES5jHRd8iZsoJyrfkWieZMrExVZMcAHtbEyErHRVcYd",
  "key31": "5egV7Aczef1G7Bm3yNksG6yLfnx57nvTpcCno8DHtG5JnZveRaGvnWFxyhvzf3UbiJ98dF8cLGdZx7sQfSGQ5KZE",
  "key32": "vRDhtEZuXdHVtDE5p1CZ6LK6hJN1nnjEuCGYYZiP1W2nQK2aG6x3c7WSTkTzRMgAw7tTV8vG5eVgYd7SrXmPht6",
  "key33": "3V7k5PcJpXgZCrYsA2C1Sd51M25F8KVVjbYQvYASFSDUPk1r6KNMgt4T55Dp5Qcxkwz5M8xKXN6TaWcpNzB1DXSh",
  "key34": "4pGAsipWi4diCk2LtrQ65efk8y3rsfi1UF9GyYSW4p6SmUKVPKR7UtP9dCFUZ4MAjymGsmAhyzqxWnrSimWqKdFt",
  "key35": "EDc2439McKVgyz2YL1GByAye1VQD4UsoS5Q2hXhA8WPL148ktsFKa1xTxhhmLwgi9LDTzkGXh75RjKSLJ5g6v1j",
  "key36": "4NM3yinGk6QGeBRPkpx75RK2sGKMEzG5kRsd3WfDySHpKBHu9Ak6GfbsbmJJKNNS4B9G1idKoMcabSPKDjma3paY",
  "key37": "64XH6bjiF1S4yhHSxbJJRqZDmznH2Sr7AhvUtX4sCQ8MbUcxSJBiLG7athGm3kPHdZqEYbeQUWH7pdidDsfP2dDT",
  "key38": "4pBMqk5F1JKv1V2iJ298gJxFq6GiCdrm9zwUiy65FLvBGp3m4hqt6dk4UxknnfhxSKC1JLJUAp6uq6kX4cBYcxcX"
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

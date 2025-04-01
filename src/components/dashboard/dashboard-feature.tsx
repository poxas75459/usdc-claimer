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
    "2SZvMLWEHYPYimjsjJsFohm71puPcsYMJ1fZUTmnbvyNVLSCudT9qCVGLwgB7WC4qYaWYPVQDo9eAkbA6j6UhxqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YBtsjRueTqsxbs8WX2EFK7A8yR5w7Jpqc8qzejpygTyCq7KmgCkGu8BwNsnr5vKW5tQPJGQXAjczVuAtKxspgC7",
  "key1": "2gnJQCgNa8qqY9Pq54aeZYuLY9zaR3GgDYRRKv3jBbHX8xqRBCK4vHxzCtWL2KugfGNkvkY4rs3uXGCbBo8VF9ep",
  "key2": "4eKFySeHkns8PvBvNAKXFKMQXdNHtqZr8QxdmdnML18RXf9UhncVCHXLm5KrTKPjqT4kcQzeKKRDnDrkQPzUYatz",
  "key3": "3SgGhR7Y1oVTKabMHF8aPyb1iQt1LABx4sviVHAnFBYdpDsvwwtvGFFtSjU29SoRvRXTkEZ6FfxDQKCMA2sHHsi5",
  "key4": "211cr8Hv8V7DARwefXYhED9iWQgsxE29qzZRYsbiKHJwuFvikouxC4g2SbM5cDYv7ierXbrKhkBT7QKEWWMAZsBA",
  "key5": "2PcN8xkPJqggrGVnYmL17VMeMrNYNa65ZYukYAAWkvbTosbvdfPxAiyWJF3KLwuM1LUwYb8kMAkxXs7HKpHy51Yy",
  "key6": "2vJfsRzrAAp34XCUGdFMTYCe49KjAAeJfU8t2XqBMSfB1xCqUJe4FVq59FMWX9ACfQ1ZEQJWTjNeSv9vBhdPjkuS",
  "key7": "GBF4J5fRvRGUhXPiB3nWprN2FZ1zJsNFQb5ub9baY1Eb9EazvDNRmq9qMT2cFfSSSmRChUA4ic9PX2TmDhGzD39",
  "key8": "4ieLGTRuKySkec1Z8D2i8iHCZ5qbAxfozPLgD4Fi4pz7biRx32axq2D3QHnr2cNEQxMC9hm1eHnrgnm1gaYZZQHk",
  "key9": "5CvSV6BXbugwYz5QLqfVC4nMDwQ9jwJjijBDBGPFxLrfk5Cf33J2U7qpggfJUifnALa7tg6Tz31B5oro7r8qTddH",
  "key10": "2QVEa4YYRdcAbxX4DK6KjdiZ41iYbEKHaA2a8Pet9crEjKaNHx3n78KqpdsUNRnEAguSPE3P1ran3EeNkMthqzNm",
  "key11": "3S7Acmm7ZBihSqY8J6baPmJjeUUTyM5GyxPGmY4UHiroDusRjXNFvEFRwvJiKfBchszh48UEc5u4AcabdMi34tRK",
  "key12": "5c3t8w6J1rphW8gC45ungWjWEk4jYVnjWjT3fhMN7FPxw7ryQCwhV2d3ebey9nMaKJdeho7ETnv1fHizPPtwJKzQ",
  "key13": "4Vpgu7kHHFe2swaqCBsV1qzXsUcbTtVpcB6fn2tiDPSFUVZM58CYR9BkhVNCRgSSjn3ZPtVYdTsKerncMC5Nd1Tw",
  "key14": "sQfXzQ5AJ11ndqbgjvTaSftTbYL9fjk9QUUnZT8uNXUg6ehWEhSvW1Xryrkm1rqD5ENTUun6tFBKyWB3tNAze8N",
  "key15": "2pNKrSn8jcE3aM74FJzBJ5CxafKwQDECB9wbumZVndupVZv2Wp9S6qM3UY8WhWMb18iVdfWhTfj2ze3qcuUPMrBN",
  "key16": "1Po6X6SScjLCYj86xSSA3vdRAJKJxvfxw5PMKBqbKXy1FeirrXcuQqfFFABwnwAMkFYBG3gYBrjSwQvNQ8enKNc",
  "key17": "4WNTRqigymuQvvBMrzDmamjpyb5hh26Ehwut1wgJEf6QE9nkMu14jnmcYsjYxQPywndXWsmA9RR6TrM2w8dCACMA",
  "key18": "fqujzwAu8D3aCTuJMb1hZTLDoTr4KZJL7W8CExyMcspbVxDPpkw5dM2S2xkMt9hyqyUdT3gXLQ56VVPGtWVJoVB",
  "key19": "3aKWNqEPqBXHWbTTWgSMkNL3Zk4VWc3gpsYZq3GX5VnhSwfxvoYnjiumZnPCytQhpXZmPY29VPpyqZqMPiMfpAPf",
  "key20": "48tTAEm3pDSenYRxEqVmrUipgYUk4n461WsVThq8n9PK47CJbBP63VCTkvM7cWvVD8q3YjmHM9APkgAayqTR2Hnp",
  "key21": "3nVUpKt7DUXnnmya3TEx69LmgwHpHmCLbem6RECvpu5rZKmUcGmxZLuRXZdTNVcxoY7XQSgSonh2uSBieAj4J72G",
  "key22": "3HKNBdTCyDr82gF24qXnm1RWjUsNUHAE2SeZZFenRgkJF4jrC4VHAfq1nBrdrfg9TbdRHmVf33D4Nv8yHY4QkewL",
  "key23": "ij31NRVmgG14y4VccSoC5mQgRe1ksNbLiE2bK7NFDmLMbzXNVZcWgWEW5L8VKJPbV9fMhbZEqQ1cMenqkViximn",
  "key24": "5wQPo6XPv6yutNrwEJsjAY25uNmVdc1Uke3A7EgfjVLdT7sqAiDFCbptG6uyQfgzuXYCQ9pCgiWkSVSFRmnzd6aQ",
  "key25": "3TL7vJfEhiCvAiJm8ALAsnPZagasPKNhEkCEaV6r64PuTCtwSMnT2C6fKs2tP8FUeTJFxJMPS8myZCabZjoGhBkQ",
  "key26": "4Q5VmgaB1CcLPtLN5CiNaVZKCvenxEZhMJgdqYjgqCJAjLPwZzC54VgkmZQw7Thqkjs6FTakneJomL6gkdyEk2gJ",
  "key27": "4EKEkN3PdXQaLuqgozPGwqx5VsmBtjMyLsKnxbJUU9KyPrRVALXj7ZRu4x3cCZuvfepjg3Q1jGt4pGzFkBSrevPD",
  "key28": "n4g9i7pBnqhcSTiJMnE3cbtwJ9teiBgYC4d4AHC6qDZY2p7btEweekqMRe8C5ikGWBndXH5pvJPtMqy4njC3hUh",
  "key29": "4Hhq1LJs1xsyAWRedzWEuFdBvtm2KiC5NpsNmfA46vEhCKnBJiLgraTgjYsfV12kTjSLwbuQyGsRa2NVt4QgXtJ2",
  "key30": "3vyNna9T6KkdYtG1xYsJw9aUfKCmQ7Dx26ppyG7WhtVCjdjHwZB54VzzJqRpMe5qW12Y8hNCu6ZYwRaJp5weiiLJ",
  "key31": "4PpQd5oSCAozWyhoAQEEXB3nqj7S34Z8K9djn4M669YD2oLEVF4z2u38167WDfhVbGGP4iAwucNcsvcB1EtLxxv5",
  "key32": "2V2xVZ5fBeVi8yiDsv6pznv8ahQJYH5mWyeo3pKhqqiKChke6gb1uAfnzapRwuJNZngfjyNM26gP3E6DyT87HJhK",
  "key33": "25d2pc5vFXC3i5W6Ka2drj8ah5Ffz9PkpxdxP3vkNf7YuhfsDQN3AbTRj1VoudxZyay9msPwkLUuVvFUCBA8Bso9",
  "key34": "2d4DBmps5pHLjDinHX5aPRX1v1zggSYnJAuXG89r9oMxsUC7DkXLhDPWDKEaMYW1Xk2jvYG3YothzxdugSxH3k9P",
  "key35": "5kA5dae8eWbXUhVbWNX6s2RxRoTKuKuYgd2kmttebAwhNZ7Vz7dxyU9Eqn3Cw4VW799fQ4YSAqgvUEQdcqkbhy6p",
  "key36": "65TmgZteBbE4qeWkjdWH3MKrFPhKD8RmHHVRf6K7SUMLehhr7STJ4vPCb3yQf317S3e4tneMuhigztSL9Py3Vqkc",
  "key37": "4HuWeJ228jxfW3azvzNczLwhogs4zxVhkeACqyXGeiMwH99xogm8BqsZ5kqTNpH4aqHsThqggErDN3WZNf8hryqw",
  "key38": "3qiH88rr3LpMx4Zo9MwERPaJMkPuK5e8MczxsqJfx8qSREYFdfJWZT8XSCbRDzLioaVSxmK4MYefFBdpE8B4aKcs",
  "key39": "3zhTJ5juAD3G2NmY9AB2gufmrx6y1pnforbbjiMH6o4cfpcre21yMkC3Zdh6aPAs2qbR1EuoDMtMHT1H4oErWzaU",
  "key40": "4zs8ZYnyXU5Muunx4BWWoYtpvmfYXeNSGR5zdjEHH9R5JokNCC6PsDWBCNkiqYWprETsCkKN9ZLv6h2MqtNocMC",
  "key41": "2RZtqTiHyKG2xcCgR4RKiC1Pvj4RHdrfR3gxPWuztZq8H9aiBjV3JE1xj4kBPSPSD6XE4mZK37CcFKU8hoZ4mFqj",
  "key42": "3RZ3qZqPgnzvKZeyr4bExvDgVU4UUgp1t4Ty3knVpM6eGfML4a61dm8iy9ZFEbnWpd26YMjEmQUDSKbvw6NhtPkY",
  "key43": "4mnzJK2SByavXFu9seeDhh3rduTPgyiecKkRt7faJn5Sw2v7whozApSN8qEvSt31NhBTpkAVECo5jJ18Aq6CjaEo"
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

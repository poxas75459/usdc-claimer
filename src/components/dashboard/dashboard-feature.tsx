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
    "2oaoodQ3BB5FbDGMyg1Dpy43zCeioUnCLfPRw68vW2u1v3xXcLTkqiv23hrqSfkHCvqxTHxzMtH55jp5Y6tPw3SH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g3U3HHkCuDYP8k9dTfuoQUGxL1fS7AiMJYN5DzeTmLYkt4rhhugzx3HEsagBBmTM7duWFhJt6vbC3hqUQV9rcrF",
  "key1": "4VT7Zjnt7w7rNwgQmBQDCwnQ8EMasrb2zfgyk7KzakKz1wqdtdCV94Dd79gXwGkEA8RSwCsmrU9pQC4kw6HwLrex",
  "key2": "4S4npNhZrnSehAy7auSYSwtNd5wMX5AgpzG5ko2GPQssa9crjSCYJkayVEL1cfn3JquQdvKzdMqzZT1L7UhQNvpC",
  "key3": "kyAvEX4suRXjM3dHVE5YgAAdietC6kWo9K9hUKKXqDhAMaf3vcR8tgQdUaBq7MHZUosYJixyxuvJbWQHBRctxuW",
  "key4": "41rVLa6M4j4YphvTfYjDHWkdTq5ZTD6Y7qr189uGFi3EZvsWYqnDVQJMAiQSYjDVchJx9fkEu2WRTqKAkdMVGcUm",
  "key5": "2h5PHPiJ7XZykxNGSMFLLctQv5BwjeAzp7kkEcG6UphXhBftMrSUNfRMYunzFqKkZ2riyDjP1MaKbwJ35vowpVXZ",
  "key6": "4H9eqvh2A1Q6d92qGn6LB1SjHcujmp3BSUp6msWUzfmCmrt3y4gwB5evf1tpGwcKK9QPaydzGiPsgdCAQtBavAFX",
  "key7": "4J8gE5y8c5w9ExXfW1cJp2qrPUicbtWd3ix6f32WApLfSEsQiJqG2Zn7LHVqYZsf9d4DsqDSKPWVu6r9wiY8itBJ",
  "key8": "4CTNamjZ8cBQscxyJMeF36ctWEVZqjoYY5SqFp1ZaDje7edr9wrhE6GSa2XJ7hMty3Y9DqYpRVLH6KuExwwwuNFL",
  "key9": "3xKydJkdvRZToDBVc9FSSbCCGY7namJAg7VqSec2YKA9FD7JnT1Cfvt3u5V4GcWk2rn1q5VaVBBzz25kNBKc7mFX",
  "key10": "3G9J6CH74Ch3ABL6d4Kk22JDS6Pgo93QpTf37PSik6pxKPG47qcycmH5cSQdhExhKQVsfe47mUjRwb21YZ3hL6vd",
  "key11": "5JgKAQkj6cZ7w5kSCbicqd2MTndP4bfbpxP5PUJVC1BbppFzeys9HPDUMmKCgATe1w8s2MbdN6tWd84ZSPADShj5",
  "key12": "4jZZmi5b5j6T8m248S1x4h6PBwekm4t4xMoSLN1um7k5e48Z2JxfaWuRg1YWNFzLDphsgsJmALR7gtckE9rUCbUV",
  "key13": "2agsteJmfZ8UqbTfEHnJuQhJhLyLYTL7LpnPX2ktjnWjX6fyQX4L2ffxyHEK2shhvpm7516YATmLb1LVAfskLdP8",
  "key14": "5CFzFw9RtFNFNZbhCrbGbdxcdscX5XYtKXNpstGjMN7rWfGZ4pDcyRUav41DrFP24ey2Xqo1x2F4DLQww4giC2rv",
  "key15": "537SRqM6n2GZosz3c38S1Res4ghzSMgewFUDqpG7q5Q9d6psb69Hxuu2nwoNx41iUnoKS3kmdM1ssyYS9WXjXkF5",
  "key16": "2CvHi5oGHX2HZ7DNYnxyAESQ4Scx2gvWLByyYmcpahrGX54rcJT9Kqy4vVntL6z5xQJ142f6j2bToZ49aEwUGdyr",
  "key17": "4c5yvPY4U3jcDaChB1uoH4yHVbnFwCK9hJLyF9QE2jT92hajo8MD5UGh8JYHuqrMtHdU5F9yW4T5CJ23x3SQqnuU",
  "key18": "5Xc72PJwNYkEoirGAcZ1fufNmXV3LX6m3FK6tVUrmGMTqx8s3mmSVuKon3dryoEwLBDCYrMmiyRwjeeQ4geehDZG",
  "key19": "3daqZYDrZd88yA1DpsEpU5DDMs94riK1HqXL7dqjSSyu2NkSG1vgeqkKB1jfTVtugRz2rrJsrABHbEPEUDf56hoG",
  "key20": "343PPWMvAUms1FAzZHSh9UdUj8pRkN5eD7Yx7ZSwdUwVY4fKymNhWpu2udFo5jNpc9VMCyPX9NMpR1zW48C9E2qH",
  "key21": "61pKGAnm4ZbG7oHMb6iHbf4sphC3yCENhVsbmmfwVZHjA2J2BL2A2XQa3JUyUCMzpKJt3o5WSgv6JkZQkiBArJcX",
  "key22": "5xJoqVbWgwnTeAVtfF4z9u4roaafMcj94gZrTx3xc9EexXt2AW6hJaVEqfYSzmzut1qNSYKrztAS6gZN5zG29KSX",
  "key23": "3X9HzQji2ooNz6pQfgqACWsPW2nH5VZMDh5VPAFxALH4TjPRXiXa5Ep2ymbhpWyj7PvSC2v9L3rR6zpWv4txnzRi",
  "key24": "2PgUfda67x35666f84LhGa8Tse4vVLgVGBSG3Lxvu1t9rNA4q9xLVAQ9E6xXM9Qc6Zm6iPR14TdDPq1VCzbYnBBV",
  "key25": "5M264oxJ3pZekDwbh1p6qrBNSf1aRPTB3GJtm3DLvDr4nW1YsUEXAWQZaQKhwHqxKEUeiK5mQgGaa1KeroNin84z",
  "key26": "379Q66FhxRapLRicaCVw6FPzFVdsmv23YcMPSocH192TfgXDKvHXSxhkDrqjKoptEqLEj9pQSpjtiPUNx8GTzJxK",
  "key27": "3E2jhSFfVyfxZobMS4yDLiLxTESBXn1fT18bTcu99eW3txYJv6NfN9su6nMqjbWoAPTDxSV9LmgYSHojZCzNbndE",
  "key28": "4J2h6ALm8cuUNcmsQDWgqgyp6rVdqDigZr1QXxN9Gwe5Vs3uwcvF8oMHeMTt5KEBsM7Cwo3XGYFdHiH7XPBJVKyZ",
  "key29": "94haEyoegWb6XRp8piLh1WC1qJckpUFkF8EntEWkju1bUSg7DzmQRrcNFayUgWb3tKGmd4jXLiWYX4Bm3F7NbB7",
  "key30": "5RiGFKmSLZyppmezrqAKiDFmVLHxVi69A7SFbtt3G1NkFZqPchgPgRuyG2PXWmxabjpthuoi6BixGHHmKhpL1Gmg",
  "key31": "3Ybg3Ywm5oqncXEWXY4dYBDYnGuztwi8ndtJ6qv2ELmNBmAM6UB2Ua8e9aLkN5wegu256erKTB3xExrGcN7pbKqw",
  "key32": "52fshwbdwmhWNtvRp7197TF4f4U6n3gqawFfUnuupXGEa7YAvKFKnpi1rbFRWy6D9aCQ7JsBHopidUmEgiX4rAAd",
  "key33": "4mXzUSYDzA4CNuBSgXRa5ERkMj8STRjsvB7wnugq5v6N9eZw7iD3NwVVKpfYMy4CiXpszoW7x1KNH4eMMmujr2Hr",
  "key34": "5wRXqz4JCy3tKpKU4pBP5gZswSZjA5sjX1R5oRrKbfWjsL64tmNDQKUt4XPybSFNY7q19niGVtHnbMTJ49P2tfkq",
  "key35": "5AgQckqm9hNTG5PcsbdoF4g6GgcwdN4PvNcnbzvfQxLg96vBCMXkcDg2SoRFWvyuDxfbDnv8SCMsh2UBjj4pbsvs",
  "key36": "3zJaLDuEonnhv6xQGFsZiERNAwLf8ucoB9HzcFteqCxALMax469CKets81Fchi839vafZoBH9DuFZAjhmVUA3gQW",
  "key37": "4pPkmCbkTycbVsqJMRVkYWbAz96yqAra4oUmL1zWBpJ6ELZZaGdrod4sakYZNipEHWtp9hpbx6Qb4onBiVhPHtew",
  "key38": "2krEX8zdnUoEFzfEnXJJzDbFWyDqkXrvpV59rCSu9xwuBrQECRoMMKsh8TVYtQUKrmw1S647e8w5VEfY88pso1UT",
  "key39": "ALu1x3hpd5Tg6DydTNPgvRjrMfAnyax85rukyAXFCUNedayxTgHCRinpEUR3hqndJAy3RFyBPHJBbs5MTpUGP6z",
  "key40": "2odVfn3uz7sUhfCwaRhZMQcrJS3XZygRPszPiJgKce7SNMxnaHpjkuLzqM7mKgk9a4C6xE11A7sQQ6fM5GL9H45A",
  "key41": "3ZHo93t6Kq9rtDofmqEfoJR98JPjv1CdLoB6s23dUoCdeQcFgaj65DeMdefLoAaTgy7uPdQ3wMhX9gR9K5mB17uy",
  "key42": "4XbeGeJLraAgqsBRGUdte7jvAMdSDHRUyDJfvYy3Ku8S2EydjrnrQ5B3Kx2PMu8i2rr6VhdCKxqzGM5HBpEtDnkN",
  "key43": "41pEo9RUSMXroYq7CVSoiusvVLV4mcCWzJMe9WS8KzTVYMMYNSrphZX2TsV2mxyjKuxjLV9c4xqmQ45gwyu2RSdj",
  "key44": "5NJ1sNGajkBRUWXJm9gFDpxZjHqgrHWCwaZaoAwuhyahuz41xSCub3BG72UVNWdchnqARKWUagerMcDhfS4V5xJL",
  "key45": "5bEgWmqodjHzf1eBsF47MkfusEoVfMY19FprgeUbyZEMAm8qWGfjGEHL7SVGsow7X6aAkcbj2Ma4dajbPCNdxJaM",
  "key46": "2MmYfmtpXxaiNDA3LVzNi2kD9JqiKEB78rP9yfGkj62kPzQEfq9Nzr2Nvr7y58eWKMLh9YwnqRVhcsSTvuFpbpzP",
  "key47": "9bT8cmviZ3HvQKBRvFKzG7AmzzMQmQypsokuSEsnCuEffKMhqT29TLHJXTgqVayMaU9jhBmbPRLatBQwL343RdN",
  "key48": "32Z66YmdH1a3VhygekAd9kgzfyosG4konRsAYRb6MdiXYyL7YDyBkmqpzx6xHFWzjZo94Xu9AgDsrvPUEvV3Z8yj",
  "key49": "43Wn1Hpo5RFbrXcNUnPcYdkmo9gFTn9WkAz5YLQDTjbfCMLfrU4FGXMcVDDcv5fumNpuYuGeZvmi3V5hQqrKA6a4"
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

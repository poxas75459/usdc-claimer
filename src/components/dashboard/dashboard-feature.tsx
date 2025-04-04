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
    "45UtuEJV28EYvbsSFTuAfcBWq93BiSskdtxjL3jUXTDZhNQBmUjU8V5HZiN4g3airzCPnNXZbvwbXtnfTyKor3Qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ygQ3kn43knv14kVtrXdGWAK6iid7bdVSvK2J2yNnmdFEPXA91eEh4omDPiARHab44yg9X2sPPVEhYN2dAdJypKk",
  "key1": "5VBTDUYGw3k5NXJoGhWmE4XCxTwDDrubamY26RgzSLiRvaCH635QFok2HgMSfCR6RFiAwXrtF2LJHDeJvsUTvfFW",
  "key2": "4pGHaZUq8ZUuLYkJp4jQwkn5QLDS3tTAWppredFCyjJVP7TSqiTwYwQLi9ECzLBey7jx9DZBo3BZ2K1rxpSuK6qd",
  "key3": "4iSmtBvCyVKNM2oSARdDLUpYbWHDmuPeMnLR1KUT5bgLpLq4kwUpBXvYs3TXe2cxiqAsuSCttdd5d4FdVzC71T2v",
  "key4": "zTj3AkaFrPTSDZzt6Gx4awSAqzKLUqKF3f9gtHMipmxbJut1H5Zb2eS3fDebeKdj97aMM1kN3KsSNRSJm4tuxxM",
  "key5": "4LatAcNATpVJ5onxoX3jWwR8UjmYp1WuRFyVFjNBwBZEtj6kXL5NtCByL6w7iXzDfSJjowfZDaT6kgms9hnDzjyg",
  "key6": "3NJovTNAyfGcDyeKPyjcpYAXkowS6UtdghwZfuu6uz2dFhPQGKRMkEy9GFpexhv1SiDAQgn3LPBdXtPv1CKHJ6Xf",
  "key7": "2zpBVCjbR9RKaP4AmTKPbGZBkdV1v4aemhYPoit8rMxRLR11TZbNb384GJy1SGLNGwxu7R3PsFcx4K1Z89QqfBHU",
  "key8": "3cSR2XZDhA24nNYCBRmarnuaj14uM1Y5DFdiHLqwAPSWzBtzWN8xzw4XaTZB2yJP67c9GALb2pNhe4m2kgVTbP1p",
  "key9": "3c56DFQDp2MJmSKLAuGi5NbPJfiTY2H7DJRAJJySzQVeip2XXsCLRaahG3e7QAH32UR6QQ2dcWCCYPEfY6Gs5nKp",
  "key10": "CYUJ9CpxBDqxcRs7AuQCriVw9bC7aJjRSTBy5x5MCnnujpWxHmTazgTfNHw6hRRNUoA74C63Qmd5PmbZWdU48pH",
  "key11": "4psvrLK2r9eKvcS1snc48RuJJKLkVUjYX31U1fk3kiX1MCKvzxotpLhsBoEN1JKQNepHfn2zBe3RAT32SQem51AU",
  "key12": "5J3hBZLy1HpZP7W7JD5i2PFB11iVPMpzN8SN9DzLyuhSUGtrCE6eRx5PgqN13YMp1HPj1nfRaU3GXUKTopxisY89",
  "key13": "2ux9HZtqQ4NUfgUJZjWLdYbjrpb2ogD8bBUWYkXuHgsveWgyL3heYHpzLvBUXX9YgEkFaFDSYUufBU2b1c3bprrx",
  "key14": "27R5AySha5HMs4ir2ZjkgeEfdHtgeSSY5W9QUqEvvTdE1xJq1WgGy74tq5Fkj19rSN3HRYsL7wDdxp2HZW8NTB3D",
  "key15": "3rbU1CAaBCHyiRziAdLvVP3f8b6AdysRUHif7jbzngQeP5z3ymJKgYdpivTa9AWiTMECfSgWHo7j7A1SGBYvWa6m",
  "key16": "4boVhHdbVWsGxYZyi1Ar7fTfBqohs5Q8MMjN6DqzpbqZBwTKSbscTJB7z8SsBR8jExayYjCukE9jVFCc9SWq3ZU8",
  "key17": "4PWFvEJcwp14t1zBexnmYWQ7dVDY1TAbXK2taRn65S8C3CKtHxiR6bwkrL1DvXbtPhgGkzQdg23DKTudUd4cBc6p",
  "key18": "5bZ75X4WXcEj5N5uqt2Eu8b2NejWFqbhfqxmpRxDNgvLfHRm5F421PiMTQdt3ZXticVHUoip3JP8eG6mBS5Rhmej",
  "key19": "4VM8CuMgKqEvmfWeRyYsfdHb4UodLzLpW3QLDsg5eenUpC42tAzt4dxtLjcSmC258FhiPRUwKLHaw1PLNBJ5K5yB",
  "key20": "2w6mhRckhCQvah9nGGRCp2JeYucMqaDa5UHpAL7tky3MZVcXQJvwqdQdzk69pT82JWHcK4VqsQVPpdTwvWS9Fb8G",
  "key21": "4EroNAeHvdvdhSH6U9ymsmv4j2N2H2QR3kc7ping997X1kRcpyUMmupw34TiQGLHbkFf35KUEPzkxhZDjrP749YV",
  "key22": "498vsVb9ZEZzqLzjt3HFYaEsWM1mDy5YRW82q9SsddZRwdPAod8BBYTmpiucpzjo1wcYCvutwGffRisCf5j2sCQX",
  "key23": "SSrVmuGJVgDggtEiyLiqW9JpHVL32rhR6qkgSUK2x9tWKgkDdSb5XFphnpok3W3UwdLCS5UY8JhdUhZChRQSL53",
  "key24": "61CKMhyTk56a3WSYpt8AQftMociYNMA1iUHi8WRCb8trbwkixUWLdKvf7fM5LCaaPoTQwgM7qU2BY4RcWgd5iDCP",
  "key25": "4S4ESN9Y5EPpCxarwjhrAim2tZHAaTp5aDDMahe9kzkeKUvwnoEPmUP4TRi5Pw4aQh55dv1KjrgED4fB3Zrceiwi",
  "key26": "4stVF7g2GJBKx2HgdAsc4enKME9M3rNbpL2R1tFxKFY9TTkdHfaMHXjofWLBzFkPTgcpLbjWUTko9q7j8kofunra",
  "key27": "5w14V1WQYuWQniu8RZA4xzcu9fGEnbtqnaT2FWdJDUvgFs8eq6M6cpZvEjkZ371dtiPs8n2DTZmhN18gyebTuTwh",
  "key28": "4WxxuAYTFpqZxS1zqXQY46ThTUNJ2S3NC7g4q4dq6fFST2doxqJv4Y4UmYLK4dd4Ec2XCffwySJwdSRoC7MLjzWC",
  "key29": "53mpmjPQe9rC1AWw2avsT5k6wwPPJBq3xge8oZoszbjFxP6AgvnSzQPzaXaYAJHbvinpAQwF76YAxijMpwHv6sD4",
  "key30": "Dws6U6n5yvgQdgTXM3f7bBgUVHcdSekJMkG6v3L4WUQNtjCqnwjFvmUurjJSCNtuEoqMgWUMzz1q3cT4TzA3scH",
  "key31": "FSMDdzhYXRjzVk9ZF5GFjgqFeBdmtJJfJS45YxCLcYAGmbY87UjPt8mA3CtrjdEKxbexYYDjBEp76me3nviEiR2",
  "key32": "4qo2n18utpXnsYbEuUtv1gQ5yjxAu2QAGWfvouoQnpcRJ18kiYzFFLmwVbp7FaddsY1N9m2JxjabwvxQWNpco1vv",
  "key33": "57DPbYDJ6YGP6zD7DzV4KLffmTEe2phYZcLrc1h1pSr8iLPbMDcqoWHciZGRZkD2e7nDnSGj2py4xsdZ4AGCJpxT",
  "key34": "25Q8EhnwubA7X3RWiPiTYYGbRvBXnzCvkPbH2PF4mz2L67DySwBY9UbwZYo5kykMxsj956uRUyqEENt7jkDTevTy",
  "key35": "4AdnUb92CeEAhzv5jLiTmQsQSCGUUp8jt3uATHmrsp3vGTHBauVF8AG613ERUc3k2nbazJESAUYpquRmS6nRTVC6"
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

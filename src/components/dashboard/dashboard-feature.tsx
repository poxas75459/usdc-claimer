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
    "5suad9MZ1EtC1pLvYb4cLgyNriV7mCLzeLi4PQ116TKo6Mfj3QvoX3L6mLp8CAxrqE3TCccUubvjdcA8LWRo3Fua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SESDMSytn9topUq5F27juEZXYHsN53Mwac8PjLt9qrbUwoESWYdXCszCGu1U8TJyARRonc9uVt9E1fm6hLYLhXS",
  "key1": "4MK3fCYfZ3kGUhN9X2quv6SMZb1xzzsqEESnHKzy2wrhhSEF9dZ9UfoJ8Nia5GT9wSMGZ8Cip8UenfZF7JSR2GAn",
  "key2": "2NocsXwM5kphwqMZy9zr6QC3phyD91jyzorx8KDpVdJrRgN2XEmuMWLV4fas6fs1fnbhaJbLfkCwJjHqRBz7FrQP",
  "key3": "2pXBYxcnBxJeshPtWJH3UZcHA3degesggNcujmWiYaKCEnSf2Es3Gme6o1BoeKFpyS2NniK7ZYc6mzMPCtcQxE5j",
  "key4": "5MESowtQAT6BeokbpsVfkwGTVfqCBcjdK5oZ7uFQq1Q8C5Q7isiiF8nSKUuUYCmUz3oDiyGjXS87B3EvUoo6qnnK",
  "key5": "4M4WLF7PMqZkgZ8DFFebiupnWXdLXJz7RpB2z5LriNuuEr6DeqS4SwoR9RCi5ujku6bfAAPP6R1tVfe7QjF7F9DW",
  "key6": "3QHRbM8jAwuRhw6f21bLfwXUATE4Yi9edSLVuWbsyQ9ALKN7ePGAb2EdhAbDX1AT6GMcbjabtoB5o8E7qp39w4N5",
  "key7": "3wM7uXhJtToJMTMZ3K8rUkdHn1qvfV4uctRr3KZtPoSunADvxP7hZSTHB71kk86Sq819Tv3Vez5BHGsHqS2GiSU8",
  "key8": "4gyfuDJhEzkxBtxCNdCuYTEr2M2uuWEPwv7EiXSpTfv4dkFdxgaRBCY3VYnLd9v5E2JLYUi6xJyAjAie2uJgjXFT",
  "key9": "4gnR5kYm6cKK3yYnqMoB95WfW8q7svWng7oDjNngtntQgwgj9fDHWMMo7NeKhMybifwoezWcCZ5fPLV3HNckYf9M",
  "key10": "4ZY16giZSnpGnkQxMddvon6uLH9eChCk6jjpzHfKokGnzXeoZCDmiT7yECF3Jm7KapJMEJKfum47GoMvfXYXGowf",
  "key11": "4VcQsKLhRSAqumtjzFSpMQupUb5zH6RAX7Sfy1ZKspTBJaYiabtKs4S6pyoj13YVkADJvpBWYvssxSiFt5prNamR",
  "key12": "5rAwvbgajmFapeq1RhModwvpGBmmrfpFSy6zSfKxNGpc3QqnCcdmveYnRkTtJK7Dvj1FfQZA3k3r9urboxLU5Hwn",
  "key13": "9GekFLcZdCEXZdCPhcxwW99kX1Vq5MBdsgkQBhJFKPPNeT9nJ2Gy6u2237ymdCrXB6kkEeTFJzeXtYQXHPR1CWu",
  "key14": "2Ne3Ny62fY3taqG5ABziHiDN4fXrr1kwbJkgFFx6H2mUoaws2h1ur9qpyKMTJp2Xk8p7EUmPp5aRyZ3genGbyNiR",
  "key15": "bJvfMZRFYxdsxW56R5bcFJRDXpLHSigpbKfQQ8KynbgNM4e4RVtCkeuHmLQJdVPJ5Nv1oXjhU62FTGkg8y8yJMG",
  "key16": "4T8jWez7yAhEmjG7W374kZeP52Ru4BVxHn6CQMNuyjJeoGdjdsM24oucszUh9tNoQpBV88rw8srGPikhTM9AbVhC",
  "key17": "2Z1GSL9fnGFieHNrGn8gn2XoAPwz6EKj7zNSucABKcZ4iJRwU88JtBA1T63gmFxYitX1mCrcf5boVwe1nDWXKge7",
  "key18": "5g6ExVuy3UaouJqpUJaHEbWFLPttyD2F9B3AmCaGx7kA2DSDiV8oN9ajvBx93jNqj4WzT4y21FWhCCM5A7iFh52",
  "key19": "3xTmtWwVaeKxBbJKK98JF8qkfYnfWnpKmJUM4dQabwyN8kFJBdorJrXEnnxB3rbyKZmJ7H1SAb5fNLSP8B6Xzoqv",
  "key20": "4NezBtNenNNnHUjC12nxXWHAfop3iy7eWMpn658GEXVkq9JdwejVRf6HYY6HgkrnfjUtmmJbj1GtJyVWSZ32xMaG",
  "key21": "h6eLoid2kNsD1L3V2bmL9BZmwKV7cnLTFFh4xzK8bY6WgBT7FHziqwDf5Zi78WqZd2V1rX3TmPGayygGBqkHGqG",
  "key22": "55U9g9gY7oh1Ybb3GogqoCYjomig9Gzj4f46pNqtX8Ctu7J1yFz61rgZjpsDH8Penxw1BUvh3B2TrGhyNLAFdhKu",
  "key23": "P1CtS1JbfuvFHfiKccGJbodZckrGRoVZK6HmsYg3D2VwzPPKHXCDbQAqqTxGroYgimF1L911rdm1CwsaBVnUf6i",
  "key24": "2isJB6CwJWTM9cmzWZ9B5WWr4SaY3BZrWUiDw1xoBaRUbATDHEb86YUh68Efs1mvWm7W95n6f4Q6WnXR6gbf7e5P",
  "key25": "4k8CuACfScDKrmsntFJBgBCtfJNbGrhDKUVPf4cHESSK2LZfUcYbQdUgHeSCxaKTCmNLJb2hdpZX2MmAM2kpishi",
  "key26": "35fvTFnktjUMEsXWpq5374JiaBCVBk6Gcn4ypjojcPcnN4LdnRHZVbapBPNHeLMmo26TEAJrqdgtPXzAhd6vNWk2",
  "key27": "2YLDSzjbTdr5PYyJmz3eDV981Xk31NKQLmwvUeP86kox4AHzCLsmYZvhqPWzekJNuyeEaEeuqRVb3kfDuEvvN79W",
  "key28": "2Dpc26jGCW1RnUWmy6BqoXua2GR8XbpdtSEZRx3JTkmCg8fDHtPEAZnQNxUwhT9eykbhikkrqofkMuXnxqm2Dv11",
  "key29": "3Xj8hqFELJ8wTjnbPrPfMUbHrFWN6oU5QSDNWqUg9qFrZ3XogXuobWfZhF1rnA7xnb8Z3VtsQ2EshsigowtYYn4i",
  "key30": "31cxYL4CMNL1xZ9Y7JJN3Ft2YeYubzK7qx4veskwbqo5Cs7bkTbsy7kfDzGkvMepEu8nZSeDAkjoeajvzfg8GCnr",
  "key31": "2rit4kQsX7Jc9uBMvxkeGZmuwXUEuvTh1U4t1Ried4eQdRZPYu6UCLQg85XSfnExAGCUFPruNCyeerV6nUcLFzpA",
  "key32": "4RjtzS72N2fTWcWjb2tEGabCp4BrbiHN5Q2sSPhWv8PdfM1yPxZHvHumVdpENBDMQt236DJEyX7kPNgT3tmzcZpX",
  "key33": "43kCDKH1BqN7NLoE4CGnfphb38pjASTTepiuj48bRvyi6j5THqHXKMD24bpNVFco7rwg9kvipeTe3AWVU8N5MEWr"
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

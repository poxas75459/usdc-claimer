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
    "2bz4ZoLvetqNbHaXe4addPVFTpwHgAL8DQt5WPf3UqnZHys6ByibGQ5X1vtffJdh6cBnvnMyX4J5MURTqgVsaJck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mUKZ5rpvr4NgJPBaSYAwDAbBrSHiarKGdx76FYMDVQhxw4vhzhhV2bUtyRAp9condXTLXKW7aoX85BRaBSGnWoX",
  "key1": "4gVVKZ3m6LhoonL514ut3DySzed2zJee63vhN6DaDmjqxj6HXAFtENLN7sqG7PHkBGQUHrbQ4dAUkCeq81tJJFFF",
  "key2": "X8zHuzKsowepbpWc9Sg1ogkCKcwCaXEza1e5oi4LpQWLBo4YgYQ3enmRDQ4vKEQQPxAajymhD2tWZfc9KLKv1Em",
  "key3": "5LxXJrs49kbsgHfKhy3FJMDGSCT3rgYyPGe1Q2dKTys5PH4aQo7hFZoz57N1VHgCdA1uQEJSnrvTYQYzz87xP1PH",
  "key4": "49kebyiYWZgeRfjniYAxnw42kH8xwKcJpFtJiPRKNd1BuPj4j6f6BnpguZ1WKvBa1gXq6cuLLZveHrULsaiF3jMd",
  "key5": "2bjP3hhXidBtMoajtBuzrozv8SuQNYaHP4VECj3nQzyAZQ8QAMH2TVsWH7ZHXrdbNryRh7gi2MhP5WWH924wKjQT",
  "key6": "2eVdHEDAkQxpTTMvXCRdvbfw9oXCndfgBn8X1kJj881i8J2Ph8cNGGmdsYX5VYLm6X29QkQmsZB3n6nLGLdoyjzv",
  "key7": "4MM9ZMPgnrXNDjtBKWpYs1iX8Gux4qkowgrm1reRaiBFDpuLd6nna7RiwCcxoS7oubUHLhukBEzpidZ63G4Kkhg3",
  "key8": "22NBpN1k36y8CPm3WSMkzrCfA7u6XvrLhpixb1dxvDjN1rttypKGtpYuKfbGs8f1ZZyMVmC9kZEQgXSH5d4Dqg3p",
  "key9": "2i5JBFixsPpZscGpxY1SYniYeNSybpWTXMcYxhzXCpviADtNjr3z8EYBSPW8WcpieZ5HkEqRANjDHkQtB46zqTmx",
  "key10": "2eHUTi6CWzPRzHNdB8tBWha44SjetoXJUumdJMhC35yKqip3exB57dTijHLKj8N6xfwgdkf71GNgWScfoa6xLnaU",
  "key11": "4rrtztkPk3HBoZZBuqCqtEZoLv9Yhek37J1xvdXrx2wsqXt7Tf5cTzqCgb3VEvbNbSr8FNDXTQzPJNrAcgRDiWAT",
  "key12": "39uAbZfGs3T7Ea2vsqe9rdf8EVgceQNH6VcJ1u3w5bYCBE1vAM3zdQSvV9Wd293sSGyDQNGmbBMpAA4km6cGLu6G",
  "key13": "4vc6svQWjsHE3LqTZ1tkF7MbBSobSBg5PUC4xEBgEJ7PQvhFeBp8nSExFQP5SC9TFuASWFBvHepmcAk79AKnnFD7",
  "key14": "4RhYZd145tnNZ9QGch23t2ja3Xnej3XsPq73ngzc6ZMwyj3ehChRy6igSdKQ1mjXjJgVJJDkVmMcS12ST2ZFiRmk",
  "key15": "3sUhrQ1RAqdoR6UcLsQfS7oSAU6mVeA7C9sRvMR35VPVhP6KFpBH7yGwr5Ufouyta4UBmnXGF34rNmWdyDJLiETf",
  "key16": "4e4HBhEKbgbK7dJFf7uLGq9jNQoq5j2jUchT4xqSRTE6PvMbePF8URSbpKda2NfF3djuirujjz8x3SBR1oQiVJgA",
  "key17": "3TzwqH7vwBtUKCMsMZ8dGCjzNnwoRtgJwAEGAXrrPCGPFQGvimtSSeVC3UMryoLjYuXtAANzW9zBRXhKRdTbabQG",
  "key18": "5vychRqzsKTjiHA1Uuxff4S9agdVVgctr9v2WHpmTAPamjMhrxDZ2K1iwe2wQqWnCnQ44hxHdN94q6nXjFK11C1Q",
  "key19": "45f95hDzpfxk3RSrXcqXtfWWSPmsM2sPSDERtVqXBaxTUhAHqREfHx7CmTrsihTrLCYALuyZU89GdFp1oQpXhAxF",
  "key20": "2mA8casWtGJ3u1DfwSK53NpvU8y3XJxWAewMgHFdS9C6rmZEkPu7eo4DqLJXTYFWmNjQQNpK6uQqXZbWQNroigHv",
  "key21": "2VkWeHyyBiebcWy2hu4ekoANxvQmRQHzehcCtM37BcNPkG9FwtLYi38uD3JAaWnMi4Byzo6Unun8ZveEj3kKqxA9",
  "key22": "4AXVQMQWg5NfXS8qsjQyti5YFSYhVs9NZ7rJKFeSBgJVPAmtwsjQw9iLzfxG3ko3Ak4M2FUs7bVD52fKGk3ueK1J",
  "key23": "5UL8618Am48Y8MuqJg2WvMRSPNXViinem3NBQGeY38DLDfvft3YwHqWvwscjWAZTLRWK55NiSu5c5Eo8bKj4Rjy5",
  "key24": "43pwtg3bRwxnJgaiCRsfaQqHanKHxUZJTJSH5u8pgbXSghAwGpsFzEqTsT25HhHogT3Eo9zLxjFpW9vHeZmN5pnM",
  "key25": "3vRZ4c5LBSKZTMdDkA6UFg7hVMN4sRi4L3jFfDC7BuKpdXv1FjtXW8XX1aUNmBDPM6qVib1GX3MtYwekVRhSozvg",
  "key26": "4JjFpcVmEvh33pyhrb8ATaxTq1p977waU7eQaDGwts15kpPMg6N5YgswoemXoDR5AZDX4jE9QUaY9r2nD3FZ9zGa",
  "key27": "4erUFGSLGiDKUAZ2Fg9tHogzEoPPuWswxrj8FBJpVFvHwYzJ9r5ygsUZikDaysQE6SCvpM5dA2vPoY35vhm7J67L",
  "key28": "58jSiawmDsjtBNYYTtsyDWa3XQdKuSUncj2aGzVFKnUYdFRuqLMY4XERGpBwN8tUWvM25bDTfYodaDdan6UQyd9z",
  "key29": "isQVqS7fq6Qt4C76f7JhXboPc23kfX1goGp3d35hcsezsLRfyJWSh2EMHAgoKM2zAb8agsf4RrjVb4UNUodHMqo",
  "key30": "3u6RezMWTGZTfH4HHHecWuot1BeHthaSNoUThBuiteqxU7QW23XtN6u8fi4sVFSmWzueUCuQvX6FVEnrAwnN4w4q",
  "key31": "TcJneKUPqU1Yj4UMLUQuVoSs1HSGCa1D5VkxXGaPjXxXW2fxA1Dz1dzSDP9KkmoiRhiZysMQDJ4pY59X3ZbuKZN",
  "key32": "2VrbDcFxoZ67pvUgxNdDseNcLgwzvnkbLWcRSGPjxsD7HV56yBXeCrdEpPxzC4nwEG3TxhcKkfozHqAZQ5H1tQAB",
  "key33": "2ik6dTTByns2JghEy1X7GCVfV3rEzh73DbQE7ub36JKmeEghQYDv8YAZe6j2cu1orL2GwBZRMDwK2YWe2qWQThs4",
  "key34": "8q8isqxzsYvhR6sUmVVKJ4H6JbVYbZhmQrNfX4b2uNUdAx2ywVreyszuuZRiswb5xXF8TcAH1afBppPpJiLfvrk",
  "key35": "gM97zEdnK5nQAGaSTR9Mthzqe2Cj8qkNTYKvkooM4Q4Hro2stVFyMx9zLiDAnUxzSUfHWaa913eAyytw8PJS22d",
  "key36": "4rfTydJB3Cv6mQ4DmCVYyqtRUZgY7osHucbi4uQPBuKWwXn69PM5ReBogDAELBpokmWiNRViycY15XKe9tFpFYLR",
  "key37": "22RmEmveRKt9vHucpvtJADTukBb7YYit4AcK8J3AijsNxmRNpkazhxtyyjo2v7aSJUGUqZBX8Utkcfi55SCqFvQu",
  "key38": "2Bw9ewNFTcYiH6EZPvyrvkwZCWFCpWRcg3HsJK4oRep42sHZrrS5ihYugNtbYJBWGE1rsW85WNYpu1tCyYDx4GGW",
  "key39": "477ynde3Mnta5NZN7QCYyFs8ksbGgHLn3np5JHcQi1uMVaWvbqTjvDuErb8vJGcA16LDrvVDYpQyMxbquU4VjUXy",
  "key40": "4auaACTvzaHpySNfMquztRhmUsrCWUegetHvTV7pPnAPmhS9Tm588VS9j32hddrCLGV1Zw2SKukpxzjmGS1jxwFN",
  "key41": "xgfetCsGK9iREj1wjT6eoZVQEdFiH4NpEPYmaqq2FUdMeTLmpP6ESaKSx8bLLxZ5b85bcQJfd77NbMM5NFAPjbh",
  "key42": "2jomXQ98nVZbUoDRu75ziuYuQe6FCEXJos4sGdRnMQa1xLFRtCMoendodXBuu3E93JjiTdEmU2vywoenQywibq3k",
  "key43": "2Wer54CyuApvhjUVAtcecCsnaLYicQyz2du9KhwiM9qfzvPMd5ZW7FY4pEffMofYBgPU76CPxhaTctKXNx5WgHdh"
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

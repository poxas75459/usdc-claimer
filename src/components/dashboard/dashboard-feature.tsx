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
    "FHj7mnVWuzvTcM2GFjnzdW7P7iX9tao68XeDQMUxD5iDCrkrZBmNUYvF3ostS1AvuifUiS7cmTsL7Y2DXe3JuFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "unwYCKAjDsqQ7gKsZQKbJFSQ3AVhRZLs8sMrfzHnuJhTKkG7CweaWzJPmRsranaoTnHEsz8GHG1ZuaPiHYhQuXM",
  "key1": "5GBTePTcp5ux9HAzwxc2bqHAc9QaNgSRGduChiWWSefZ8rKFA1cPGbK4DSY4zMU3j2oPG48UWf2igBJRzKcYnLQJ",
  "key2": "45cLi19W6NqGUyFN64Vd664gHZx9NFg9r194SF13VRyEDVRJuWQU73D5zB1YpaDdWNKxkHyhByk3YPMpesMAbJ73",
  "key3": "31oqAiCEgU7RLCdyr29KxWpzTwc4DsCLARMoHAndPuaarxpE8GR3oRDTRAbgrgdaLtm7T6Arsgw3F2byQuqLZTcg",
  "key4": "5NydUQRUL9AB82i1ibbDDNKroJ2AmZzzKm8tWsfLZy8FPR5SVv5UZmAZCL8rPuwFRKe7Hx3G61d3aQpw4ikRhRHs",
  "key5": "4FCvzKcM49ViaAECrgzKdDwwDfrHbbn6caVosWTZ2hvLV8FmYAHm5RhEnSDmdFuBiTNbiyf4otXu85V1ETdwW5Lc",
  "key6": "4VUupZhGuydb5teQtrV6qU37ZwkdyHNceCteDrmozwgPKmhFLb1g5cWhQFwggV3jbAmFCSgkDYNc5uRjpuPFaeFD",
  "key7": "5EF5gFMjPHfJPTBh6EPumhcjMpCaJdcMYtXmJozUe8UmLcr3tx9jZG8WeCC5yuMJWv5SK5PjdKLg3ExncBkWmBwV",
  "key8": "5Aswj4ESDpHdsN81yCjN6khVG3iGzkb45951HvgYGqFT3T6yzxZUpJ4NXA2n2D8n8w53LXvREZfvPqYkJbC5FoN2",
  "key9": "2UBKrGAc65R4Aju9LgfDZNy4Mb9Jf79pts9mYeHKsdoxvHY3RzCKYxAWK4V4ccAfVLbeg3YuVT6swvWz5BiQmM5T",
  "key10": "46coTBPZKLJK7ueB4bZ4aEiuD8toou36TihBWByP7xdeuiTsU2xAvH9gBDCnkpyN8MwZiXrd9B5Fw41fdcg53QKt",
  "key11": "3y5ZfcRvGwyQYNpbufMNHj81WbEk94s4CQQ8BAUnoemdGv5SBAkntv4PQVeZk1JLzYHHThAkU3NzWjjbtuzP6jzN",
  "key12": "4JLDDv7GmpXSK2dkk884MAtuzoXJJSuUvEUgWGjvZrhCwJbTP3BDgGxrtHPx3EPo2h7KKrSaB1pwTyaHGfJaQh22",
  "key13": "3WnwCWqVayMzvmgivWy4M8FnnqCUSJauHjbKHfFr1qxPVLD9UzUU3x2vJgjTy53PNZULB8SqrzFtLt8xQNeBww9J",
  "key14": "QG7dhdxMvCjum2cJT1yoh34C44Ua9yf8hateqGoK4Pu5r8FSdU3oacJ1HpF3EKtFeNVM7BMEfWLAN9bY9ZH6kcq",
  "key15": "DfaA8YqoQLtGSyV1xqkCZYJ8itpq8JvUcENRDqdFP9uAq7K4dUhTU6yVuPDkCNhF6wBRt1rnc2aDmzqoYocTX4Z",
  "key16": "3kS87ywabNWKRFHVBi9JCCS3b3j1UbfYUfLRP5PuzAYowyxMQy1BqHSLc4uNtnxwsm1zPKHtDHuMvyRftGchAuZt",
  "key17": "iVDgHLTDSoUFwDhdsxXmVC1TPidzRY61qEHLwaRBAumRQ22CVz9Dyt3sSSCY1TmMMewg2zF3GVuShbhD9GycTZo",
  "key18": "5hZeeJmNPa5XwDitht2EnoNeNzEd3ezbotmZNXmxco49tLHEZauoaAfxyvXmcxRsYBwtqNdVckXVLa8qPZatafDi",
  "key19": "bQsjbwGEUJEkBy27acwszYYRPKrWfbRmqK5eaiiy3U1xqrxtxPnevfAs7BvcrnS72g6MWG6SwpfWCSXz9LhT5JF",
  "key20": "536rEUHUPCkmRdGBJZunux8PXKcL9FagrAmg4v2Zg9hq92CJ3vWLdLrtHdfJqL2oRpM5T8vsE9ncv3n9c7jBWv8g",
  "key21": "5S7HMTcyq1ow3LKWWS7BofwvCmubrcxYfbuNM8q3yubeK8URVJrRz3Wmhr3Xr1d5WdNpoPVrm8pBZ24ZKJHZxrjz",
  "key22": "2ow4PdrCQDAkg8jwHv6P8HF2Nb2MyewJcAkX95JcWN7u1GCre5UudAK7coYTumiEwThtTXMkkjHqY4ayfCWGZP8u",
  "key23": "rGCCgtBapFqEg46iP1F7BF8c7BeFTksxs9Mjc1cs2mJCtEJKmr7KPx92z3f6ud6JuVk442Dg9RZPbFWHEYDDFUx",
  "key24": "24xafBQXEHYUD36MzFXMdLvsKFa32FnFaHsrgk2TsEAyBo2KGibXzGvgPEpVbaBQr1j5VDNFR3EJ7muv5iTAwubg",
  "key25": "Fo9WbqcdBRjoHdzTao1xJcffFxVkBzJBVY2nwCbckH9AetNZty64FEYknQUhMYr4RZY67Fkym8v7KmhBeU2UaqG",
  "key26": "3647PUSPuQWAnvjedywv2fPFjryiHf7Nx3ADkvu3Wydd3r7tga6C4KHYVfPP1W6wxbQEoiPNfgCPTpoZSpBMwtiC",
  "key27": "5uHj9uPSd7fuQ1r2nd8wW3XQQpBW1iWJYvZMzLvYbu1aXoU7dCUPtogFf9qneGUersqJ7HVdY4xyrexHdPYqew5m",
  "key28": "4ZHJvku44VbGSmHgBUSQzLSSRrkTHpDw7qry2qbYkAxdnWYZZbgALftMTpkVKETHF7e2EWveAUVzr6c2rWQU8FfY",
  "key29": "4auTXNckWVkyzCFX5uraycHAUkHH3JezoB2R8RG7QnoofSgK8dTsCCZT6ZzfhTLye8HhoQVPaX5PSxTx6SdxBay5",
  "key30": "216ke538LnT6yyH7xwXJTBCoXqijgdzhzYWF7CUhno9Xr51P8v1cStmMFYLyCa3YC9GoxDoGbNnYYvLNTGBzXXGA",
  "key31": "5sS8Fmrheez3z3rsGVPXGnnKPc6oKuRYGgPiYtHhomx4jymNg5v3of88LSGXPaLnTYhMKfgBSN5eRQCa3E46qv9U",
  "key32": "52Srw1r6YU3yChX8smks1oGfsH7xnWdLiSsdiiw5dcdS1TpqhgoF7RwndRfxdKh3nVFzFH7JTa7PXHiZ1Sugqqp2",
  "key33": "2C6ZNfVs8iUBEm786PuovWQCUzqXd6Z33qnvHRVDroTGjzyv7xCFW5dh9wqqb4dkS2qDnyoTaSMy6xUeqsxvh7v9",
  "key34": "2NyyQJRAriJtbjpme7wNmysppc7kALpVetJCi9epihH5u1uGTq7S1ywiZYK2PrBztRG8vYks3uyxEMjmW5UbPft8",
  "key35": "3Ar6zTuM3R52h6uSLbUM3k9tLiFhFUd886GPa77mCjgBNdCiiFEEfKGY2CcNXuVRpWcKMYAjkAkyYey9q4XZMJzq",
  "key36": "533AUSEhyeFu57MJGK3G8tpsYucsUZ9vzfVtWjJNbEB6L9dJpVydvWpt6vGs53Dd7ToX3XTCEq5YrxEagph6vZLn",
  "key37": "3X8qpAUyYx9Y7uUYBbhch5kA9wPRJraPvSBqNtGVSiBBZEi8yHMXwJFRn1kp63sb3RC56FBCNiqarvmyb7ZTTjfR",
  "key38": "4zjiWNFr4i28DiwpE8cetjEaJJ7EsadpcSs4Lp7h2mo245wFNpMnv8Z3ebMm4dB358uwRkyysMRr4FH2kcmTpMYs",
  "key39": "3nFpH61wc5MaZka9Q71Ercr3Yh7zxYew4NpmTdgjdD9KgQAZpRVQRQoHcyzAgKtT3M3Das319Goe5F3MRvbdwkmg",
  "key40": "iYyTn3psmhhMzB6DAYNcFbEpT5H7cGMx6ny5AbgkbEkhCfHZ9z32AvzsGQfDRBzsyQuztrwJWjJXmkpDDPA8FLn",
  "key41": "5xbYRr2ADwAkre5JrS7fxF7DJ8Lm2fNDQ1qMvqRFSAKptzGWPR9RcqVkBb5ji6FM2VFEWkRZHE6juRP9V52TWvAz",
  "key42": "2dnYq4inyK9YssygPDqcpYgH19QgPXRchdCLnhKRmFqU9LktohY5tN179geWdpfoXB3P2HBCZivvjSrHX1F3cXvj",
  "key43": "43GHB25nQi4tQyhitz2G4sMHUA1YzGowgDpDmYQqYnd8hxS2zzXysW3KacoTXdctbBEfxoQBbiGNfUmYofu3DH41",
  "key44": "3ZYN34xYBq2fMyHdjxUVmtoURzdYndUbk6NU6hmEU2uHFCNqA5AHrCv5dyZbZgvwVCBPPhA6waZVwycEWYiyC8YJ",
  "key45": "66HEpKPQoqWheVjJesSc35hRBp3HB624eiGqmkXFvwh5vKTPNV5mCECixJ587yQv6nqvtcoT8HMdZdzA3pQA9GbX",
  "key46": "3anjs9wvY6b4iPHbUm4w2Sw6myYdi6Bfsp5377eCdvVTmNZWvP4E1rT4eQs8RjdQoRrZRJYcSQe6BGPGK4bWBess",
  "key47": "pkfGxypNnMa59iuCTdwPFHNg8384hHK13uc55vGZ5C46JcnU4LLzVC6aYqe6GWmGiSLiXuu1nVFA736FyMPRUFi"
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

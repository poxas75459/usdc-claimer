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
    "2Skw2QwijBjB836sNXSN64GeXjFFhqxRnKTufjCS2bZG1FxDi86ReoFwkayhcKiTrvJDDHiLaH3zCaw71zC4yoEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52SpwDwaZDLQssvKu2e7LRm3WcDAJfh64xs5AtrWJk5yTtxNirc2BmkJ5pNiS14wjg3pFeBHymp1RpbvDnnxqMGb",
  "key1": "3VcJEzAXBWpxZQVebEUhA6Ca9frcx25gFm5iBKyA7FhdzRymUPSwFfT21kYSna4zDokAZ5oVD3RFD6odpTs15bBq",
  "key2": "29X89aCLnTs3Ve1cEjqo936M3et7iQdyArpto65cJfQyMLc1bEjCiTvTMYuDo4eNfykbxVuk9i7rHDJdv1qhJmgE",
  "key3": "2bx7Mcfz9s3AjgpMvA9exAzCwLycXATw44XPUvQc15D1HmcGhs81dhuVthewtaNbDTyGLFCeKksea1XpSz6eYryC",
  "key4": "pHtgSiesJcACYEE8dCBnjMQBB1MwSFsA5saEHjuwcRgF17ra5fnZQFsa1L4VkkesKmdd6b4vK8uDXQCfCTPSPHp",
  "key5": "2wDAFpet5FudHiMDtj7rZNaAVyfHf2LFHfaqisQPseHsLywJxiv1ssKUfRbZ4eMMu6Mvm144ArmktSZPf4xvoeTX",
  "key6": "2GLWwyhVy4nGpU3kZb3BGPFmLcLNeT3gkCx1DpzGb68BhPMpuGQ4TogSLaHiJjtvML1qvAEcoSVVc7Y9MmjwTdai",
  "key7": "3vUhJriMnfdBWXi3jgxu4ZTnoKcvYW5Aw2TDxTdM5N5BxBSXx2DLMoBTNjvwojYCcPXpenKj6QSBtr84iNadp6mv",
  "key8": "4tZv5fvL25mKaeCkk3XX5F6U5f9AUaU2BXRAcX6oaA1YfXEzs12MazsUsKE9gGrGUUfXTeGSXHUBxgj9NGmpHvWF",
  "key9": "5zUkwT9TPmjCfSg5J6JhCaoKbS87bSxjpjWxC2BwpeexuXtYqwnwutLBkaw3y2LzkMtU6fdeFhYsMo926NYjACvY",
  "key10": "2YhLUWbeXvS1VzHBD7ikvkjYhCgCpmHAywz7KnkYgjSsfcPXv3X1eoNGRZBdgwAkSZvPgkpKYh5uZJaHjsVtzqkY",
  "key11": "54ybff6c7Q618nLsF59ZWXWbh35RHpjfM5RurmxLggdc5orhVfS4cSXnCxExTf3xZdbYAKqeHN6LpTF4MemoHH62",
  "key12": "Hcios33vWRLTPrWWkm2o1tdN64NaB1QCLeSBjyRgUHs4WkzapxaijURD6zZqSEBxJyfz3qm5Gm7dy2QzmzwMdu4",
  "key13": "FLCwtLuZXepmRBC6KEV8B83zFkJC3YZUFZh5AnbcmuEnEdqAbHBbYs3A6tNYjhrKr1EfFJ13MU2dKtoFHbRajbA",
  "key14": "pyMsXkxs2eBVEodDWs2nSkVBYt6CS1bULhfzPS5FYEjXgCqdThQQWcbeExo7X2vZmGtUGENN9AwqqwPZKcehG1a",
  "key15": "3NJY5RPg1wxafYYucdBSvoJvSTGC9cbRpKUJ8JNf5dzct8i2iTDVX72ntA5629sERZ1gGC32Sc7faNocmyKHuVCX",
  "key16": "CWtb6FGrLCk6LFAcH5aEgG2bMp5gBGh7uNHgimxYVnyiu55igSSGospVbv9ehqtKehpoKKiNBkUb24BVU2o4iXy",
  "key17": "53FSC4ZT1anK3QQodJSmWZTxWc6FHk2GLY8v1MLKuobph9axopgX7JeeCATUfkT2Q1rAMa7Co237AF6qschW8LNL",
  "key18": "1rA22rhpnAos4vfGeg4hWxtS3H7T6cmj5WDqc3AmvQ8QRGAnEgPv7vjxsHrUmcVsEKMMnR8sj6keeYYKqaqXSA6",
  "key19": "41uMMcpXvY2fJ8wMaC7kYVH1m1GuWAJ36N3PGMWqZ12bxUQ9dhVDd3nPSK64822EToxmDEBRtwCu14LH6y7YAJ1a",
  "key20": "4XzMsdfinoT4YRYbNjswj9yate5K7Q5xnrvhxEPuBXn2d5CtwrWqpYccTLdLeiEQUuj9P2maD2rwmzvKsLhrNqW9",
  "key21": "28E4ksifNU8emyo7h6EMAXySmAvUbuTTSoHkKr6aeJxTquubyP9xfJ8J3s5tYhuuUcnEbwvgdCf5ihG1XZ9zREMA",
  "key22": "3KeyNdb5Yt88inoXGmB3pPCLMT762SKxYHxB2Av9w7cUQsdXjmLQHScckVcNdRyFZiBsxqn49hBxum2Exq22jcoP",
  "key23": "47yUgzoCsUnGGrDQFdrYpm1isUMBJL1QPywXW2RJvggJTiGuAic4RiM6FKGN7F5xAWBVrEii9sZ6no4BivmbQT99",
  "key24": "RZqMd88UbQv1LtxPHm3CabFLi3iwQnknSeREKpZkwVewXQCvu4a65TXL5edV1dnTpDQSRxGdWtqdui8SgJTSs5t",
  "key25": "5chXpDrV7zGkqjxNs7vmd2UZh9dqnJtd6cfXiD5P7YqL9oEd6Ln3Nah79P6971DQEmVWGkSNUFRpzuTZqZZSLkeF",
  "key26": "eFJB2jL7pno1wW2yEd3hq4Qof7UDzt9QDiyxqdWd67PBuTCb17QYm25CkSyKoQqxmCyQdXLPLcDLRhkAwfDFwce",
  "key27": "5A5qLQTeHcJvKFiXdHkuxZYduZK4PBLMK7mbQGXGxof18g9fVe2n9ErvrHnwKGYfX5tQQa2hieRj97VyYGkgtiNE",
  "key28": "2vjhYGsFTsKhrKihq9PHyzB4GUE2KdPo7LY5m9wPJ1tmh48TLvvasy6aFUSAEoSq31ZHFe2izvGSCMeRNS3yiy8x",
  "key29": "5epErkFJbASUfev5GyngpgzPbgAekefaMLzQFSwMNSe1zrVV3tG21d1AzbxVhnQaDomViGUt2G8umxfmHLrAAMk3",
  "key30": "2JW6YSkXDVcwr8aLmAUXbuU1UFaBQpSNNTp3gp9Jh8Q3PeSB7H1E1VdZpPz1N4VkRJBzUBTZSYLWUVKm6oRgWPPX",
  "key31": "5729KdXsgaajmR3LjQPbZ1igTcrGszdGn8RvRnb9x4mvvf1yA2QwSLotqSLUJVCSH8nuSi9vcMno4cJV5u5eS2c4",
  "key32": "VaoEkW2gn4mRP2BA9doFP8pPEZ2wpHc3ti7M4LEWXV4DuZHK6UFma8xgByw7HkGxSfQ945w7USuGFeMfbDCYnxx",
  "key33": "5Mn6qCg28QFGga9iBjowZhW1qnJWvgi1Tdcz27TpsZmvUmyEksTuPZhHG6F1BLbCaqHjMxg8y6Lm8yQfHA2wHLse",
  "key34": "4y3osEigoELWP1SLTGJsLqC1XRyEsNAiuq5HCdEhLa7RPyM8eFFNcSxtVC2wbB9cCjcUPgR24v22mdZwoSksFGYp",
  "key35": "J9Le7NhqMJUUuTbWsFQZ3rEYq2LpALKkpu6YUUQZaW5QiiN83vAsiYifd66XCpDHzxDcxBdzReJ5rqdN2wyPKcv",
  "key36": "KWWYebGfhKsVaauX5469DMTLvMCdRyMUx853vvJv2WP3xvqXRUjar9net5NPp7Wk8DC1AF8jAkgqgxKV5p2a4kr",
  "key37": "pf7SkCxG47dCRnMmzdQu3mgB1SULF2bHoPw4eR6qXosYnzRHMzybqPicuDdJguWthukStn7nzbWU3hN64d3Wptm"
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

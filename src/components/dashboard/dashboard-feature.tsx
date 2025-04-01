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
    "2wXTeg1U5r5tPYJp9oy9imCGo4Y19xURKUXAGuo4zDWdCYcX64X3goPkwZvSKSiX1CTvNqvEmYJjxME9k25QtCi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZejT4qwkFJmtRRobAJD1ie9ixd3gWGC6oXoEa3mcMqYykwNbRCUAD7SY1BsnmdfhogpW2EnaAHsyVSuqxQdEi6y",
  "key1": "26YY7NHSvcPTjBnXBZecmzqXMfhRnGhic1XiZkZQA54Ktf3UP6V12eMHzq5d8Y7sFck4gnTwA9HaH4xsKQgWRgR6",
  "key2": "3fCNWSAe5reuCZb67FPyTfpy7LhzvB9bjuehv6AMutWD1aqU6iTnkePA4ykEDAxPuUJLsnLRw4498VPmcdxo4hmN",
  "key3": "4iA2TmdfWbNUGbKUwzYFdbmmBP73N6R8W4bMAyHKitqLXJWocsuEn1dajQKXcMbDUCVuNRyjEd5Yp4tcWgw8eULH",
  "key4": "2NzqBeAwBA3KZsM1FddcFhDiA82KFuDySZuMsLsnWKf1gzTqQA9LJ6Ttz2EdLN8qU2TTHqGjc4fBW7kEhy5H4uFT",
  "key5": "C8b6qF4j2F8fht4pwVfgaokAjiUJ3e6FMwcS2jC4mYDJb1YNmmb4hMmyHKS5Hp3hJ5zHzwdq9pfWfo7rhAD9fwF",
  "key6": "3UB2jpHRXDb6ydfNtnAYVjcfvidcw4c6Z8ZdkVSDQPV7hZmMNdoxSwprCYCUPpb6JxpxU1Pb62AxJGDBLYCUpcpC",
  "key7": "5BUsaKYG5RJ9h9rBXv4UajLTUBszsipnQUdmwTKXj1MejMEB4P5AT29dDPW5qmPR9yEjLkX91MnoZBWQSPUPy4u6",
  "key8": "2H2mZvnCc6WugeZjKsf4M8HGEpQu8RtECv4c2tqbp8wQp47ALPsWdacyc7uSA7aXWyub3peix9LumG6DzxrZdojc",
  "key9": "4M4HZPgaELh2SUK5F1EsPLFHsUYYQXmr94Q2CM3KD1uWE2dJZAfTEDoJhepDTXpQZL9fcWmm26pkU4urC5HC1PH3",
  "key10": "5VjsNn3wDRP5pJNc2356KgeThMxP2TjbGt7eQtz2L2P6sQ7JmnqU2bS9WfyMQTYZTMtmCpyYdYvLwsi2byHx93B9",
  "key11": "BZgyyDAU54bf5yr65guxF8RhQuQioKzftD69Nk5MycDZ5sxU3kyMayeJRbt72p5JePEVzawm98GunZtHyitorBY",
  "key12": "57gkYTS1DT1kkUDQCPswcdtd2EPumquBCFh7LyumcDBu1pj8fZy7qX9HBPYqxiUvaGHjCLBtPos1PziaL6f5vSdW",
  "key13": "2vRiooGdaWE4k4e6m1BLhBx8PrKAJb45yEAwCjSBA6tazYeT5oTT6vLqGM9nmweeqn6GuKVJqwUVznhdpttrznSY",
  "key14": "48Xgy4vvMDwoyydQWwfZkjoTETKJCeQGeAYSHsbA4uqBSJCMHwPSrtxf94wAcvnCgHkrW1YPrXHWCHWjR6csaWFD",
  "key15": "4tndrShwGctvCtPiw2v7iBxuziAMkxHqJtDpZhunkCYsxdKr5i6dgFTTZgn3oGJh1QsmPddB6UhHajpXLNR4bPCB",
  "key16": "fGkCFrzTvhii3fLnQ5yKu7o6ksrJuDMLJXFHLMyR3T8ihNzGXAKsPF3geH7RpUd338vuT6f7LZid96wb2V6xQaP",
  "key17": "3F2VjYYref4fghZMJfQcVTBFYDYoqDwRk9A3RtdMq5R2VygEjuvPMw78KJ7knUiTLU1f7CU323QETPYbghkq5HyU",
  "key18": "2Jcn2S8GAFJQVXQpsxrsfZnuSj4bsGfypS2AzunjTyGMRf1D4AKPe3nv6RoRqSyK3iwhofgC7K35FvfYfR36Luva",
  "key19": "31AUwC3AU7p8WkJqSnSfg3ARWqqHqtfXAmiDBEMbroA99w3d3cSQ2wyXUG5Q1ARTHnLXr5SMQWSgdYKJxFtkjto",
  "key20": "4sFzj4ZGpysJ1jGGJPe1gjctr8Wq4vC5csvzeLuSu9N9FZLkFb3G6MMCzMoK3jDGLhYZJBLtQ8Y12xpy4655FuLT",
  "key21": "5spnrcQyG5wcQGGirksHmCnBdJn2uZyFC3Y3yD1KCg3tfjvnxniz3v9GfoAxYkHGnZaFDwcyiP3LQdMbPFNdAU1d",
  "key22": "3BVs5NdyDCp43rd9MQnhPc8bcstviurtWixnhrjF3MLtYpHYnjvWnoohFf9xoruKmH4jhjkFLZijTNtqT8955URq",
  "key23": "5jKjHrxF3P81hJX4j33xg27EkzGPJXJ5zSC5KuuLJm7ZVhLqErBhxTd5zhDwcCe5ZoEq9c6rkmX4rq117xZz8XDZ",
  "key24": "3ebrMapHz6AaCBdfn8EKxuC8ewZ629jxGafReaEhqtbQaw54E1Vr2XdDRBN82wrGT7ppQpQnk3eLdWopiGopch4P",
  "key25": "4majAm2qvGAdJpk6NjhWoCMCP3mefp3eCaUj5yQveypp9bQ9n278TrkggmsP2xRnSgpH3HTASaqw1EG8rYyzRzjP",
  "key26": "5kvgVaMpshhKz7tbHqmG6HKkMgmTLyDpVwVZuXT1SGZQJB9emrZAHnqx5geFQs59QCt79fQH3gFsS3GDFQ37k9yB",
  "key27": "3bMKvBT2VqwVW7KD9LauF9YbFuTZHJh74TVnkNBU9xd64bWWdGp3yafvmPDxxK3FVUrnmq8Z2fQMTvGRvS4bkiUt",
  "key28": "3aVX7fPkGFcNV4dy9fjQ2oVbPRyu63yNEbENhXmVgZzGgBhqsnEs6gk3exeyPCQmF7g498naqHunBiMb9UPimmBk",
  "key29": "2FEoKz97Dk3JZhndx1iEZmKcnWUWzQGMgUfjBBm4c3DVo5gXZUrriD479MbR45AWtVKs9nPqBwaTTVJvHerUXTya",
  "key30": "3qgcCce1yWdYEennU2EdGMhDpGAD6vxDzDeiGWXJjGhRTGdh5NRR82XbpTLRkZKF3JBhiRyJzC27dSKxBs3ZX5a4",
  "key31": "3oNfzwpC7udmQnbF9xyHNQVXeYiUt5ikG3NmfhQ66HynNHsSvjzwtoPruuzcP1wG7krwF8g49W7EFZwK8hoqeJK4",
  "key32": "2Ng2MV6jv95HuhfhWjyr1yNULtHbFjGuyuyw2SRNcLHqnrrJQjFjHMZJpdGTxtWExd8iMCwJnH7s7QbQ5Kx3H8x5",
  "key33": "5p3AFpUCRkTyGoDpB6nruFb4okDT8etmUNvoh5d1kHWapznRFn38h9kPdBKZ6bE8e8M6bwKHpxDSfhDXpNmFUz3A",
  "key34": "4z1mcwdF8yL29LTraKGiirNQxyVk7ftdGHggnBK6JFcoXZCW2b3iAi9LTFDK67Rh7CiLoZxiWK1uHYSVS8RdTrdX"
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

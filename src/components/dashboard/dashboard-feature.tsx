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
    "51bhoxzCKUefE6e16QDeYsSxKx3xuSdfVdviB8JMpJbDpjAdoatg5fGxA6xFLAdbf6tTJFcgiyhosvy7cdVWrREg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CaiehKVUCMf32oYCZso9apSLspGYrqZsj6pgSM5EApDXCLWnJTskdf43tnjoyVvnXmgPqgPA9KyTfvwEP1S9LaV",
  "key1": "3wTpL3c61fGo29xo89jegNahLj2EDK1J2zAxYXg9enhJah48GeQ5jJEHK53cSYFg2otcsDBWHThqqyaT5nkQZgW9",
  "key2": "51r2vWFuX1BT7RuX42h5Tt3p2vYXpVjTgJEJQMWf7kSvLF4UgqySNesEvKTkhiYX9MQtnuGYp8EWQyfgs7VaMu7F",
  "key3": "2hvYdyCsVJXBRmowqmkEoW6UFEnvM8dno5FneByeJaipCakxYSd7MiYBBg8Kaqay9tzCb2pRka8VQu7Sq6gmndrH",
  "key4": "23G6thyAyx5NANefC3fHEgpD3kibdCoMGXfrj6SaAic5CCtM7KBWBi4QRWfvfZ4CpYTDnv4AGfq6tjcYozaPfFnQ",
  "key5": "2o8myxaeYLg2r87NAoRFyvP93dsaLHANAEeQm3rz6T75aCTBovBS1kPFCEHdJd9EQvR5STjaZXy3bJw5krF48LyU",
  "key6": "2PZ3XpYH71Wuz16nz6aTtG64m9bDUX7Q8eNtmg22rNiCmTHxMcS2tc64hHzYDAePsunWh5b3LvWqTDc345b8KLcK",
  "key7": "4SHeukQ1GBK89fmuhiytkJz2crNeX14UUgN82xcvsA8fdTeUV8kw3P3RMfVQAGUW7ZmNAgHNLb6YbJRBJ2Q6tJcp",
  "key8": "3aYVkhgxCeWkn7DV1ULdzsCkG8kN9zBghWRx6M9ksYLHXD6Nien7HYDDeuumnH5KMryWMm9XiSPK67qeB5bLh8H",
  "key9": "2wN7YDJbSWyXNjPgqEsRSy4yrRRWTRtYzdhJY7pQUcapm263ifm5Jat5HV4m2tPDSXbUH5ooZGK6dZQsNTpWcHWx",
  "key10": "3UVoxw7QAQGYEh4DqWvHNEZVxFKPRGfPAy3yxZBjbHrJXVCXLj9hWkgmJfQacEyq9hnYaqXouizDBD6vPgErEXbY",
  "key11": "4KHESDFp4KTmHPTUfCXbKDof2hr7PFWmV831KCexRJtBBLZ281ktAqZoTHSPPXrEajf5DtmjGXRUCKnNo5RNxyD4",
  "key12": "4nf4k6zqsMMFB3FAnqwxxLUF7yJKj6Ay3chAeb41do4GRhx4otdwJFL75wZP32C9CW4N7tia8PWwSVsZEJwiJufF",
  "key13": "4r6X2zszWtwW98wdbuP1jrtkEf9Z5KDtyXxyqf9MZGg2RpY7sM2vEP8emncJrCcpGcoyzQVrtHja9QqEfhYksQgW",
  "key14": "3acmVCJEezByHoCLqijqB7KAscsx4qMsdUyvv7HPUhmaqAEZKxrN3KeaAmYCbDV5bPr3yxFdQ3SWz7fYUsc6rpEp",
  "key15": "3DnPhryg9jLWATEaFFTRZXRnjMYkp7f7JFCuh9eAKDj32XmVoU3BThqxqyR4X2B4FotvGLy9cTyWjLNAM4oxuqan",
  "key16": "72EmprU5WeHLKV2uLDDvSPy9CaY4JfTDxzi7oZfys1mTnThkTcqDbB4pQ627CGLcoG4YDcDTSrVQ2bn8A5JQMu6",
  "key17": "5B3GuSUZsoyUbYhQ4Vw1BAESU5EsNd76jaFpy2gT8KSjVPcrc4cWxHefxLY7KvvDP7DaArUfpuJNod9h13ozyKqi",
  "key18": "c6oR42LsBQFrPJB7tJb5eT6k1SjdyTFaAFQPEWhmdox7TvjKB6XzPE45vP7Dp6ZC7EHWLoFC2LMjfiYGP5dwWTg",
  "key19": "kqcT6KKLqrpKUNoFBmPVR6fke8imAKTAZzD2Sbm9J7VLtCy2PqRkjxVJeYbsHqJ2Fzn1AZW3LdsHLLEVQ61Tq3x",
  "key20": "NgZEayCrknZCpNqYCkXjqnzDNY6AktW5mExNwR274CEMCuLsu9Jawddkh9o9jmtHSHz8emVgea1KgnexB8Ru7bY",
  "key21": "5P5N6SgFfjjayWQtVMjzbxv9x9HJeUbBhsQRdmaSFY4RJdSvLyiwdsVRzyfwLNZtc5qpsj6pUtgbBAvz8Gv1crmZ",
  "key22": "5yKqvqefpEfMTGotgh65JQzYeCeiwirmzgpz76w5e2nSE74QwyLLyz4VYtyuTza6NuP8Ws8GJrq3p2NHQBwji7Ng",
  "key23": "3t9tyhG11aqmXGmB7vZYdpEBzuZScMYFZDWSHY5XUhJpn7ajv27jd6tPg1LfW8un4Rorb5mVUMrPGqL834Nihcwb",
  "key24": "41nEgYfgHSrTJHYL4NswrBaG7JhjeRaYZJzbTzuU7mae5wd2Kfi4i6WDhXYpJcHx2ZFELskTByHd663Us5yjtB5b",
  "key25": "3XVSQVNKcDapUgSYn4CJxKAd2J7Sd2hpu6Q1ijvXQ926UNF27UUq5omxu7pqCiXgPR9qCbzDA634C1eqTXvigx5M",
  "key26": "522zTRerbnUqurWjWBrQx3W5wgWK1TZcRVJsAzumog9kCqCmUm6xi8cxFBnPvom81jb8bhCMBe1UzPkKF8NykivP",
  "key27": "5HLYjdrrwhRRAPYvbNugRt14stNEmfu7Liw2KKAaFPrZkc1hLMKd95GyKPbMqEEjryiC8WwskZmCGWVjVKjt1Mjs",
  "key28": "5TxisgHq7hSmpW3BNutgAAgwveDcDq3qbXEzdkajhT7iUJx24HJZRn4xxW5t2Y33qDep2QqYAdRbMvcCy4bemQdY",
  "key29": "38NiFhiGnudNozi8mTdZ5gbnM969SFgwfEbwWPzQj2ee2cUfepNEksnJ2D2rYHj3Ziuj4bEcTRy5wy3WcCAc5KGc",
  "key30": "2tLD51gefsk7HBkJKSKUrwgFDMKLN3SXURgWVmhf5oNtfco4Mdhi497mmN3eciF9rcLH1wGYHmuD7Q8ojUU2hkqQ",
  "key31": "GmCFrBBqQzCvjnmP9g5Morn5Uj5YRSen8uogpRmfQ82JiooqXycQRXXXS8G4oPBmGKpeyEAm3i7uWaCeRfEtTzx",
  "key32": "4MtRUWnTLpeWiWR4M5Xp8PdvM4PoBU3Xh1kJjq7H8a7VQ1W1FaYGcZruDjArGTax6fKXwu7s9jmCT1XpTWhPtT1v",
  "key33": "5sRyv9hV7pQEH7rGEBk3zkCfqMQhisQu8sSqTFJoxQRzBQZY1p5PELUTYL4F4Y1L68UYYYVc2GGv2dGHj1GJncU4",
  "key34": "3JftfDqqUBE6xnyAMQyBdDZEJHtJPCjr6t7B5TVBuEEoqxfNhkVXfZGGt9Z1Ny2qgQbFufgsKvVFFU2QdTdFq2AZ",
  "key35": "4WtA144zjZwQbbZbvcZN5Z4Pf3M5FhW9WeXG9VmLAWoLZTnif9xfYnRTwP5F1MTsnMp7uJWkHqFSREDrDPbKrdKr",
  "key36": "61GznNj1BUcFM4uCMAynHp5X3FMFZJcF4mFqRR37ZtaUK7WjJ9LyV5ZTZNr6Py2RTYdpG4HbrWbQbjJfapfVuLS2",
  "key37": "2kueth1cLKswHFyJWcBEkYM9Zb5HrFBWGgRgKaUFr2VMHUJBCz8QH4wLmnv6GtB6W3SQZ5J2CmyvpUXSG2dD2UeN",
  "key38": "qBu2GNka46ZJCwfTfmQNBWZh3nfzFQLmg5b6DKok6ASMuHxNFn6bBNinPGMEU6hRq3xcrLNgmCW41K8L5DvqK8u",
  "key39": "4zW8HHQNWhmkSGGx2QFfjLu869dHWDcCfpLXcH6ThoCrDv3y5H4HuYQJXzsXrahTFptN2KPikgynsaBW5JPCLnRM",
  "key40": "32HtAgfnqdAGX4DXdPGdiXLfVnp7k79EE9jgm932k12qBLSMA8eXFb5rF2Y5irPHMdqasz7jt5E8bhxrejKnpAYo",
  "key41": "3yZbXjLN6sbUgLrHgX3zBWaW9obpLLQjgK44Y6eu8RJKJT3YDPpHgaxMUiw6YE1LR1SLJvAEzuMRPjT7bSUWa4sh"
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

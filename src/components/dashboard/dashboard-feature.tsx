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
    "42kHVNSqmWG4DwvSVpod3a9n5pvRAmT5xBESPCZPmqQGL397GGaUNQwgr5AAK5qjjGWjFrDqAPs3VNP934w9BDs3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jw2cGb7sK1WUUvvUEgwCfkM9iRXaubVCk2Uyy7edarymSk8b7YS9RCfLaC9r9zmFqS7brVATM4HrZRR2KHifuUk",
  "key1": "4QK3ZMxYefEWLZAQqGu6F9WewoTsXixydEFQKfp8yPjfaD619hckkGkmSmDSzhv4nfPmmoeKGV8KHi41h6qsAjgL",
  "key2": "41eYYeFZ1JsVHSHX6zfzpfWz5RJZ9Fn9oXJ5zuXZHzqzadHe1mBNLWvC8wRe1LjRUcwtDeg7A4oc8rDsCkVAmJN",
  "key3": "5uXDuvkcbz1eK48pJ2YgFie1FAotbWmwGKDGnUHnJVHcu8W26dFW3GMFM1BnZt2gEi5aHA8pMGXfwUcwGeJSNyfY",
  "key4": "4Qioi7YXQ9jgaAeVZsZcH5GsMZMpsccD1BdaZChrqoivsRKjpkjFJNorCyDmZZE6BKno8uKRMSG1skGy7D5gcx2T",
  "key5": "52kmuGrAPasHMujDv9AfvAX8cGGaxwrSabekhCtJ8sHJV9nyieYwKAvqUdzroYQRvNmNrS1ssphh9chNNGedRuVs",
  "key6": "4hj8NSNbASEgT1aPAaEkZDvsDsZbhxPFRpNZqHgE5HzE8UV8pF8qv7mYmy6RiuvFiNN4JHb8DpGJah5rWXrFseiJ",
  "key7": "ams2Sq9dCociXNie3HjPnUZ14szg2dRWk3rxLK23Kkg8Vz9xY2wrGvuxNCk9igx52Aqibruz5T2uNxAEXTgG6GL",
  "key8": "4ioxrf15kRySVb4SyvUkySenNdKKCnXoJ4NbZvdW3W8Kh8h1FWSQTXPWY6DuS9fNr87MR2dx4BnVtxSRj2QmosQb",
  "key9": "5oW6vgCWSkZ41SuuQzLccpg4vGJtuVEEL7v74a3hcb2HHmhF1SBaDQFgHbdn7Mtzibp29QYAYA3Syb3r98Tf39j7",
  "key10": "3cDpyw5QEPi7tmhid66aio1sWPDdnC6MoaJ5xoFSCSNrbCyKQNHFnmw63S7ru9DkpqZR4LZ8c1hxQWKFCYGURCNC",
  "key11": "3MR95ReFDmvQJobcv55TDGfeK1VGoXiKzDSZkrsSVc5e9Ap3zrxXRfdJn6GxjehQBa8Y2h18kUrhC7DkvCtrCR3j",
  "key12": "3sRtZ8S3hKvyHyqQP6jzMgQpWEX8ZysNWwLarrgjqPrDeoEXL7HpAgiCD2rqrfoecTS3HUUH2VDVbGMRa9aYtUTP",
  "key13": "y361ku1EUnBxudKcnBQujz3t6wsw8exyr5W5aBok7TBsPfZdsSx6C9w4mwuUVUAcBfMMwt6RHEB2wqKtcUHGR6F",
  "key14": "5P8dG7qaJj3VNh7b1A2C3F73jYS7N82enqPpoPk7nyAhD7uVXEDj1fPRiAgjFrrkKeUJe9NX5qwjyP6k4Hqmd2pN",
  "key15": "4FCyXWimQuaNrgUW8SDAaLDpFRYfCCKhNAX3xrFojQEXtzWCtJ1Dw5rVezwjkAMLWcNLRaFEWDbPDJh2Y5ZB8ut",
  "key16": "2u94X4ocjR4tBBVLDbuyEy6tFaGDJdLN2q7Ron87wb8jdgkDxSAZzMpBt44hqBYLCF3WewySyJhawsLEPKq4GD75",
  "key17": "WNGMZDkErLDs3m2uDV48MSuogbNQ58CDX5H73vEmp75pTmqwGRtrJiANuYnKMBz2mc5dcMCCuVSoFDFHEZnvuZ7",
  "key18": "3T4aXziioRSS7rriuRXjShjHckqUYwhebf43kJ7ZEYnWztBuwH87tjoyhQNQ7KsMcm58jiXTChPrfHMy5Fmt8B67",
  "key19": "655iEnYaBzhJyQDVgp8cGjoMrc6ZAoRgqJdam7stnFZCPDJiMmxMnCjPp7phvZSn8g55RpRGeYmwEeDEm6jUtF58",
  "key20": "78uBXUZtvwH6mG8cidmS3kP9vatgHJPpcH6zqZTvqrAiwwd2vaQz4TvfUpT2PbvCrDZcvj7wDxDggbW8YFL8xjq",
  "key21": "2Spiv29vtWnq5zwqxfMiy2NoAeuWqLS6Ao5dzTkbDzzMHJWQCMikPCTM8G7v5vcbfQ48qUtnbgiiP5QB4ckZ4C75",
  "key22": "3X72vhaDGjLePmywHpro5yaAPuz4VJVQqtTAz8KbkGsAfETp6mHPrBLJ3me2LMe13L6uXAtTNMwyhLaLYR8rti8p",
  "key23": "54Fo3wpY4WMH5jeBBGWZ9CtrhfGNXxuxTnpQG6EhZcvYm3Kbsu6g81zgzzDeoRFrPZkLVZycDtrutSN1TtufNHFu",
  "key24": "2V26JstHm7WMQuCtqcKcEMyUAMDXWaKkBgzEuESJK3Dfsjx4Lz95AE7NLyv22ZMdMC6uz3mykEpYs2SGKUCKBtTo",
  "key25": "5VkYxV9kFF2QQsApRQC45oD1M27xQdvZEnzUyuSSG62TARkrbX6tiPiFvbsH4xuCPhRvqCKjYDTPR4CsPQJvf4Se",
  "key26": "464MTx9NU4CukZVBCMckDPcHX4RDno3b7Rm5o24azaKsDTrTgqz8ngerXsKmZbRW1YEHtW7wkXCqbjJq9sagQNPW",
  "key27": "33vaekJYfL1L18nxVcwSPCUMs51SnXSpzt52qc8Q1f2oRL3TTwuKDK5DmCh1emAKmbey747uoNoizhSunnwg13cB",
  "key28": "CQGbV6qQ6uYzA19BYPsq7Df3fgjGTGmowJo2jPsvcVNu3uZujHeDKgBuacZ6y1fP3BZ5YPMFJhGYnqAz5mAgCDD"
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

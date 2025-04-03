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
    "cVA58SdkNVU8TJJhs9Ssui9ZkHVoCagbZgk5nTaBZ91ZNbaYjQKWzjXrdMX5rLdCPbyUssCyoJ5W2Bqu56kNfJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VHC87xEpeZZg6mvqoZnGFFNq8TGJeT9hqaiQXUiCzcGR1cGcgAZoMCyDuMCrg9NLjwi6kVys6iQ7eLT7S8oHeXb",
  "key1": "5zNeBcwMa6SX5EBmMS3WhfwdtWXDMscTVYTXre5vXTu2L1uGdrGzE92aQThMC69WzCEU6FiTydRWfs4ACcH4Fz8n",
  "key2": "5mr8NJv3Qz7uvHedNV4ftZk7EwTX6QccmUpAr9wzmZK6QmJNCRieXuBXuYietwiQrC3FhDFp3aiURxTiSRA1K7gy",
  "key3": "EyYmUhQwPy4EeQomyGKgaHHxjtygeGnpvfxTG9n2wqkvwVrSxd7TFkC6k4y1f11bFkKRyTD1ByppC5Edjozp5PT",
  "key4": "eBo5WTQ3SjucEi9vERnEdeqSysjxnLg2wpuNSmj2xidZ681VRLHgmDSctrRquDvaN61Fkf5JgXbqJMQaJZhKH7T",
  "key5": "5Z9QoW9Jw6dLJrocuKuerbRmyXsaAp9QrnPHAiSHD7TVxVtpKdP92gPj2UJVhbZmRQoTUpV4Sw7jRnKZigNfiS4k",
  "key6": "5qjKzD8X6UQcRzPQgdLn73CgQKqnYZ4tU3fG42nr1nr5ByBi6L45PibK5mBL8YSeKjbYojM7zgmzu8vg2nJJ2pxw",
  "key7": "4nz6QYKw8EnbP6mKpgHmDYjCfPQBLGgprnvWpbYRVC16vGmwHxigDFCrF93fDsxk9JQ5L3WVpidSLbCdx4a9vzXh",
  "key8": "5bx5bH1eCfiTmuLVHycDnBHU4FUwpuqQZ5yqSdcYP9AUZRUARovAdQHtXCpLR2S2BEm4qSNvPb5cGyuBq6y5swrf",
  "key9": "4jJVcJ3Pefq5tSfGyWV4CSSsZYb9EArBx8vPdxSSrkaRm4Cpu8T6z1zAAfBK66oazZToTXaxgM3ED4ETrL2pKo8u",
  "key10": "53Dy1zQ6h1RyxVHQEeq9XcFDrJua7eS26hisCX65Rm6dvBswTuQEVRWNoEMZFHAtB3kdPbwdoTUEMfoCTbaG8Tti",
  "key11": "2xWJ8otwRwfK4qdwp3vveBKkaBueQE9ndkMMCxX2hGEog1idJaGtnHXURxWA9osfk2tHu4d3HNyfDHbfcmFc1zAr",
  "key12": "2BUC9FF3E3AT6tj6ktBN6CzdMj3PdmFjtCdGxRqDMCNNBw9xeAGMn19XPrbyoTi7e7sR325qgARKQAQLEDq1vmyp",
  "key13": "4ghRbLT9ftZ38U7ULa1f8jzWbkBu97a1LQHgcYGX6Hx5D1aiE4uz6CZ4HKcQyDoZBDMLZr4Q12eJk8AyGhtPKLde",
  "key14": "5BW4Ajy2n6rscRHrZR6uBhDYVtzCa62bAzDKzxHDrNj2HpeNR9goActN6AEzNi5V63kMGXPD5dtop35u5NUVc1v",
  "key15": "Wg495cZeHkhJpZtFX5E5YpgGx9iQJ6AT1Hhg2mD68TqFy5qpUGDahzHYwJ4Dt8HcxSw6mo8yr2BEf8gWyBBdkpM",
  "key16": "3FiiYQakT389WjRRGrVS1rJYqJgzzT7PiiQCRkhz68aBt5zGX76J2UkHhoZC3oofEX9wFqNmcQY7GtKzT8HR2s3q",
  "key17": "26LqMMoUpnSbNaJiFkcp4Hfm5vAbEnDzKMfscvFW7x8eXaS7jX5ymYXJXgTVCJuNpi8XaCsDAStySUFeJP7CVCvD",
  "key18": "4v3QsKYMXEy4WHzXLuR4TpRnDb1vCqqYgYGKEcPX5NDa4sRnWdUEzy8trMZUwcwVscJjtL8mQnvMPk1RRxJM5uiy",
  "key19": "mBkys2FSSkYADxCpUMBc8C8BRQwdFaHoFQCVG4h6euxcCmzma1DD26nhwuDv2EYoCtMaWy5rD37nruxb53VLcf6",
  "key20": "5CP87nZsVSSkd3rmcndNX6z9uE7EAiTBFcCr2qC6MvRX9p7g4Bfe62966JxxjY67eeRN9oF58gk1bYBpSYFNfffu",
  "key21": "4heAsN8JfEi2YdppV4E3fFsVN8G9wCKuCy8gQcVSeVJQuQrWXyzdw2oCQkKnLBoi4B8P2CygUx42pTXWsMekfpRB",
  "key22": "24vESXrJzkR6hkaknEzGSgRcwtSn1RfokFUc46xrHEo9jTYPeLoTj18T1i5uTgb7EPJzZSNX3afdxsi3ooyTincv",
  "key23": "4Dka7C9gtz3C4R3q37t7HJ2jYXyGszydPfSGYjDKfPSCNdUrTT57buJMVWMQWHCxviUNcmENkpuunGpNyfVWnvYm",
  "key24": "55sGDjaYPmiG8WUvzpHvBGd1iD6A7ZoFUPr3h36t1G4d21gpFZKiLZbTJ37dqBx93s6uk4cZFMzueWGh5RpdVKwu",
  "key25": "3VygGywN7EuDU9ER5rebCCd7o6cifp1BRU27ceeaF3MPLmqrK8uJdy17URjbA35Z8tQGQWLyTKEBRg5kysCTnGmt",
  "key26": "3dt4yhZG2wfZS55GpLw5q8NET4KwimqQ4BJjZaJcxGBEtsL3eRN7zXTGBdfb69tkuFHYeaf6SUXJsfZHqiLR7CER",
  "key27": "3NugMBHk66ia2tyHpHBSguEuguoYqCFF1r4trMaGSQqGRjfXeDVuCpVd8FACM9Fu7UWZYXHvm3n9ZGujafi2cm7S",
  "key28": "4hw8S7bh2V17ciXfprDXF3S4EjYQxJLnCCuG389rMn98zA4yBnogLe4Tb9NvAG4wpGKcrhReENmq6xb9fJ7U1CMR",
  "key29": "2Gtm7xnXmUXZvh5pjsp573BL4CYzNxoYcyeD5nuPcYM7944YSZHUffJPFQQtdwdazXPeQrCkHg5UT1cz6zYCr3MN",
  "key30": "45uPYcFmRwzBJoKE2dqVT12e1vUDJSD2hZnzjuY6qY4D7njSoNRgHN1VyL54VbC3KnV7jGnVKd6oDMNWsVAa5QpF",
  "key31": "49z239wvoQyAZozxU3b8nikzjf8xfjfqQJWYKkLZb5ANM3DVXo3SUkXh5XZzRY7MvdRucHi3DZNwnMdvDVf6Rsyo",
  "key32": "EABwiC9ws4tJWhdg4xS8ULHQtiCzVp9dcM1M59CWKepqExt1G4HRWNYLxbfEFe2AvikEAJpSj4q91S52NpDnB92",
  "key33": "34NwB1iFedYcez2rshV61jKEx4q7e2W5UcDcYP6bLQaEmYXUHF4yDv5VbcKHoYUHEVuy3AiBmQe7i8Q33iy6cshZ",
  "key34": "5aqdRCtFQoWp7aYRoL9qCGtDq68LTcduu13kns8j75ZdFrZfz4Ege2KAU8mKN45Txji94uockYr35YNeSTLe2PnV",
  "key35": "5JL42jyrJYMcdco41A2qGxCP8hKqgAdnpVoyghAA4uoKeALbq4t2hYcVT5v3WPQiXVQDcTnXZpvGzdr6AkPQa6Xi",
  "key36": "2Nd6ABaQ5kNA1xscw54ceTv6N5X7SSyYa57CYoSQ5ZKW2iXySwYQuDjUtTcdNHxCzGSFsFGww5BBoLesWq8vrfFN",
  "key37": "3Q8WVXbvw5nzaKia7Pm37gJAqTnLyQYXkmUckZxzLNccN4xRoVcYR5pM4AHaeRzhBbLYXmyd1hsdFbvH9689iaFh",
  "key38": "27gAudaBQqrq4SswRXf5bvyN7677yQcsfRqU9uuy7gfJkjbPPHYM4Wnr1MKGU5CkbzD4ULcuvBpziDC6frcyDWHV",
  "key39": "8yTzGZyfHwsd81zqMQ22sndcvikLEM1Cysr6L9nKerpbwanDQu1LfyQ765USV6UxbZ8VJ3i9BWUZX7Ab9jvHwdY",
  "key40": "4RnQ8kwgUVD8zfvvJEnB3S9YaB4PB7R7BRsYHsmTs33kCFyjkm8K4BL87wqAJCE15B3RwzeZdZ6JMmcB3LZ828Gg",
  "key41": "2bE28WC1UAVwski6pz1YjZz8PHxp765T1A5aScasC8PXmtZR3wwGJBJE5xCKnqKsKovRMSYDdTTKY2nkKuc4aomC",
  "key42": "3oqRtpboHwU4ghzcRPy4xNCG7JRXN1fjkR9q8m9RvMAUr6tXipZ9wQcTivyUEkBq2P4d2MASmvwHQUvAthomVUtv",
  "key43": "4ZwGuFA75GuCdsJosGFSMzRSbMQWjLCihKrAxQwhStkTUVLuHMiUuwKqfDKtp7nLi6rr9gXhtoCP9g81Mf2HC6XL",
  "key44": "3SE8UrrX3V7NC2aM7VFQk1db3NWCBevhawQMBK7rADaz48T3ww1mRydPrMPo8ySd6A5gaZrs9jM8negnqY1rtCyZ",
  "key45": "29nKRUPVDTPzfhCkvKRnYanTqmkxeF8bEXAAFvDhRav5cVTbGtaJE1gcKFJqdUagN3f3XA8vhkZjdz4ZvJKFckCP",
  "key46": "5PXnBwAyKoDzaSTVMZ9S4XeELspxsE5puhvZvwN4M36EwfuB7Q2ys7ksMa9DKGPM5nhwYZbyjWTTQaVwEP7qUESg",
  "key47": "2iEMkRRMmKkpjKZLZQ4DxS2JFB6Kv38q5ycGVizw6xy8wSSZjhY6dqtp3wUJKJJK681WzPRhF9FEc8sftdU1B5kg"
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

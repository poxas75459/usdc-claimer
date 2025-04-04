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
    "5zTCx6n5u2sPwA5LJUdWdBpfFdZGtTynb5mx8wDmdu9sBGTgjoJXUgFamjArKHn3qt886Vd5YM46ZXYseJhzPgQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ck8uN1Ygj81guymTw8XyeXhD8b7LpxTUBJoFq5nvRqHJj7eVBwyxUkWwRG4gFgoniH6rNGahqrWBsiT1kJmYWqw",
  "key1": "V1x1axSaF4fL53Yiv2jy777yg6KzjZVP866Zhn3UbGBkTRprc3y9u35gNWRyZjvfhTnKwPYg1DqxPxmYyY2MuJs",
  "key2": "2prvtLUPeUNkML9zF3viSjQ4vMPhz5LFsdHm7rKoBEbFwEUwufMHiHRLz4ikiRYum2Sc2NTz67VmGVXraExi4rnx",
  "key3": "3iwAKE1c34ao4Z6XatC2ZXpQz25YV2jRXxqz6yYiBUnr8cgto64Cu4s6DvPSFFYDkja7EyQzuuzca6Fzq6B35DtX",
  "key4": "51U8hyxM73cd7XLNW6Fjd4Zq28XLRnvu9cbXNCk7HoSt1VwiiWgeg45HM7rv6rjvkiL4JpdEeT9AagoZxkuJ9cKz",
  "key5": "2GagbHFZ6aYszpDruwj7jMV7xvWAbMzt4q8ugc8nf2zLy2vaP7QL3cpQSExu3SjbtYCSe7bcsfvPwLSAZNmuHmEs",
  "key6": "xGEWGhpsE9noHvMojW2E4iD9LeYuFSikQKuwAyKcL1PDTt9ijdQ5GAaVkwgD6a67snAEyywUHVHYZTd2dMNPdHf",
  "key7": "4KZoUrB1XQGK6TxT9H9NUSU5rMTD7RWGaNGxdNPfMT9yK86rRCFwAxQHnBHmE7d99wRuBoAW7KNWEivLm2L7x66R",
  "key8": "4Yf1ckbuWdubzfSqaU6X2Nv2eUNm5pquLuAbv8mhSZNFy2LYAAHGzZVQhpVWznPsjRNhguqeFNQMxha4SNUuuFGp",
  "key9": "5uk179xbbdgc2uZLDgdXxM4iEP4sowdvCLMCmSgbd3eHqsB7Y7T1jvaPgLep41QDmTojYztSERqE2g2VUWFr9EmX",
  "key10": "3XSKhB16wmb795MnQ4VBd4hRUBg5navKNSmkW4hiAG8XwsmcYmm1JEjtLy9m8ocvD6csddnQXLqqSzGx42BMrWMZ",
  "key11": "2QkaKF7QWskYb6Ec8quh63WaSGJsRuQgeSfgEFiiydjVKWfsSWFr6zJBgrVva7U8Jf2mf6S2DeSE8bHvSErzHGnw",
  "key12": "2GshyhpsM7fGaNxS1UQbbHUwsihEfbwD3kmJPHmV83Y9nRQ97nCWXD3MXUAyDUTVgW34uMzDfBjNMFdKrZphR6Gy",
  "key13": "3RGRbx9R22jWiwnKbnGaVZq6Y3Y5eTsUUXMAw9BqqiAu5xMMu4RJwhSmvLVLmi4Hka2otfr4qsZi6DLLPkmDxGgw",
  "key14": "28JZP5pAGbRRy8QmR2LLbspmMd6g2kFE48MqAR6kgDxf9EJURN1ZKGLUz2tvpTQ4XztQNLwGG77fgGg8pabLfxiP",
  "key15": "2s5xYc9EsNNNq53vJHxtdcBw5fVabukzRcwtsAgwBD96XkS2fJLewvxHW1BGfbwW9fqp9xwNRk1JPcPNrH5cBw7h",
  "key16": "2sGh7ZAvs6V3tVkF6GPSmfqSzaRKS5zs9CLAKNEYVxYrWKa4AyAnQFx3L4ShkcY17D9zWeysEbDqGXt8nW8b6m39",
  "key17": "2VAnC7oLX8XmsacBcnXC27N7B2px4BPor7u2sHHGrDpivHxzMmM4yZWwwT53FcrbsXHBMLFBPEXw8t7UZfkbcLvc",
  "key18": "8afy8GXS7XJGKBsHQ1DYDoBctp4xxKPVAaxRNsz7vnqR8ojCgZ4cxKHvd2VzQhN1TZVdfL4HzPZxoaX2uXiuEGZ",
  "key19": "2NnDaxQocEqJUCXg7YTMFLQzkjoqzJrdxw785rcYBDEEcbMBa9CMG1WCCNGDyCCg7UkYMb3oB52KWm7DjsbvBbiB",
  "key20": "2M2JeeSGPapTx5hnaQ6rNjUfejMmVG27cT2MKqoutWhH1UE2L96HqekX5sdDHZeG1iawBdmXd2ZdmBnnouQmzFMd",
  "key21": "38v9RWqYmNQ2V2pDrr22PnAjJ3ivXfVhwR56vFHdTSZyhae9UdsVdQK5pJvR1wdKd4w1eVzw2FUXPFGaefYhhyEm",
  "key22": "3WqbE71uyvWDyBWXf2AjdMim3rnDNB1LfkWjYwzxzS8xgY3xgi38BQyVkicbswrrxTY5hinzGrD4emnvUkYkj19R",
  "key23": "322mMHGSHTPTo1AAjBzgEyhop6eJmEhWKnDTWmGpQDBsiGBgqwNooQjMoYDrdjT4BM5ikD63Q8sAPXv1bB8hUJBb",
  "key24": "2diZikdAZwRMvvZgrvzAPthaMmyF6wqij2kBn3quzfBMcfYshWH91VTEcWXwfK1ZpYzyQHzrNRecpGQgqQXY1nwS",
  "key25": "NHEgS7xfuMtjMLbEUi1s782pcPKeE5R5H1JdtkzEXhT9cdekTNB9Upa9AUhYDMreMK1NAxoGhihxwghYm2y3iQm",
  "key26": "2JZqHdygiEoCXFUQSm7nZ53A9XKyqB3vTRocsdTFpogStDVgCF9J8Ww4KWzb4RPVqSH7Hz6p8dqGDMH4k15vBusg",
  "key27": "a1RUaceBTPUNhnrtpCcboJt6tDd4n7xXvk9K7QR25Shq8ive4d5Wjyksm8spzaXGtFBVEYr8fXkvDoKgaK21YKD",
  "key28": "5URNPzCCLG6Jec5Pq576XJqDzgARAmm3Gn5Bwfe9RrLzkGDRoFa4aqNTmxcM79iEWbdv8mYFMZT6xdLSwKrebPFw",
  "key29": "32ECVuCoDwViNpQuRawwRM7sEb2jiGA9P4L8LgoEGygRzJ7Z8WbrEtSKpF6j2UycJnThhpvK339Uw7gzNDqLYFga",
  "key30": "35evyFUnvvjpgG6x2imqpAdpRRd4o87riQkjTk8KG978shQRDh1EseA98oZJJWFtzrbDEkwtPAJ58bvxgomgt1mm",
  "key31": "HybVRKu34CBBYmecjorvwjeNN1jeX6LR7tmHMMPnX4BH5wXgjKdxoPKjUyPChv1zXZVDwA6Ui1Yf1wtpwnS74kt",
  "key32": "5VMvZjRr2nrj3cUx2SYhCZFLF2E6DuGEfFGpYBMy79kmEFZcnKHiTaLaSS1U8m9kBgPcHjN47oitNQEBC4vLcW4A",
  "key33": "5uoJvKYUNLMH8kd9gFVQPvSaer77uSJbGQ1vsYomGVG8X56DBsVv2wVXPUw1ChEYV4QQ7tpFu5hhJ3oAGA3jmTVi"
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

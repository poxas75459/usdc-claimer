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
    "534DEpzywtZwM4jvsTKyv3M9wsLWjcp9kDWQxXvuHrPkA5KjKHCMzeAWe7inRyqu5mhMKETNd7o8kLbzDmJ2cMqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47dZZ4wjg7dedBnLUg8kwqiZ5TBLXtUTjtpR4KtPKb5zh2kKN3xng5qqsx1JJPTusZDjGEY88Qs6fH2znyZfbxco",
  "key1": "5hQXWrMrtXGj6QMtMGxckZnoZJ7D945AW8pCUh9P5hhLacmX7AtEr5ZKAGL1eRio6o3SFvESNU8gN2kr1eYgUm3P",
  "key2": "5RHMebQ3wWMwTob1g7CNkQWbrqGeb972g1MWEcgkG8bczjhrzyhK1Lfp19ZCg2CRM4ExoM3jYQXk9RZdZ45Gmeg4",
  "key3": "UqpnZ2wZ5ypEcmGeMuw6PuNFBzcTQpLXae93hPno3iBMpCq4GY1ZTVLGXaJiZSwytQ7JzdQawdxA9v3moHkrWk9",
  "key4": "5otKDdLFkkkRv2HSXff3L6kjSbKb6PkJ8kggZwLTLF8PYYBj8Jx448Rtpk9FJFPCUE89ULYfJUxHcA3fjhSRQJzr",
  "key5": "5bzUmQZFuzTzZBXxCXd8htLdvumo75zxjaGgddf5RGKTaeciqLk5qKDt19feMmFtZuDNRpLJmvJzREyLmNeCrvij",
  "key6": "57Hga6fKnrch9SavPzsQvcJUQD1AZtL4Edwb23QiWwS3ApWDrABVTmbCQ9LZHCKiP5NQAqj7q9VVRK8VaF1NVC9X",
  "key7": "2wdu3DiudUL91GgS6P7HBwUCeDGRLQffkaMTshTPoiyuC5HWXJKVWbXu9kroPfXTV1WDrXP9DoTwzpdoFY1uDk6t",
  "key8": "3M5KwesnAYUeB5HXaM5UxGDQiRxrNqBrHMHhMCwocN6i1vxGwao1sBdHzeUxeqhFXzrQ5KJWbD8wyWYsd1FowxYr",
  "key9": "m4569xqjZ3owVZVamApv1YYybhanBXrheFXenVE46uZFyVMF4R2kDx8Ro7iHoWAeoDgkknbQjzGsdF1aoPL9i4B",
  "key10": "5xADtrjir1mY9rjxYEmdBGnYERN1XNMyqYE1YDfpYb2LsA6twzfbSsquTNg1ceiXxr9eguwHTwUTA9HhHPTL8Y8t",
  "key11": "4ATUai6yJ3bKVb14P1SzaeV75PVFkfYpnEzydtW53f2dXKNaAbwxKxt3WLoEBBELKHCgivBvFjXDmJkv8JJbmtNz",
  "key12": "3XmkKub1gJ2D2HoHL4iMYPvR4Y6bn48bzAQoJcuKCpFo6ijBzEJnGs1rcF2FKB4WgfgUY1z4DuuBZpYEnaqDM1UR",
  "key13": "2CycpVQEHGsywZCiPGPzDF28VcF41crJ1KMZ8o62fEC5j3vRS25Bk2q4dwFCJnfv6KaVY4xyZRdLNGab12WUmqpX",
  "key14": "526Btt57sfHzgJyRuUV6bXqx42ZYEQohfHVhisJtXPEfQt3qvWrtoKNPR3k99BqKoaYxUM6B3zGNzKpmYe7njEV9",
  "key15": "5B8HKr2suEhe9ZPCqEWrLiUAVeusQhrPFWZE6YikZnDxGqFrMpuEARcPLkCwqHyELWKWHGFF5fP1AXCbT7AjAuSe",
  "key16": "XH7NDnztFtz5CUz7wC1GBtjcdzvPjCBK7gaMQ6dJCAshtgrtf9b4BNuXSP4pSEE5KaoVRhY1dJadNBkMFgQyVvv",
  "key17": "3Buuvn66DY1cZzuom4yQEPhhBrcvgPU8UisSmSD9NvgXeJyNsxwUzbFUfAxYto3FsNgExrwej5MqReAVCDjVjsxk",
  "key18": "4aHKWW3QqpvAc6jfoDeKssAFXHXUnpkpCgGpMH4jtKZFGTcwJGi7SKcnRXQE6dxMdqy3kMmRjPKu3vxM5Jvv54H4",
  "key19": "5eVqsJoVzwwiJuUZsaZsetJVRMPJ4E7wx4x3SfqZE2taqbuvx7SRDY48NkFCdFf6r9aV4iTJXtw5UCio2uEr6q1f",
  "key20": "39svKopEfZcttm7prcgpo5syfj8xF2ox4HbY7bGnjZLoqopiMsHsWQy6wX1h68Z66VqpQzCppmAWEWNvuouupfVj",
  "key21": "53ZtsL3bQrsCEq4F8MyVGiEWDHtAPm6XzS2vAYnfSNwY4cevebmA3UB1kvcTkSLrr5T2ycczn7naN3nDeSDYdNPB",
  "key22": "2JwmeDFRQxQjC4LeLpYaaYmMFot5udT39ouggic4qYnmJjAYVTo3mKesXErfgatEgbgYaUEjytVANFV7UcGoAtDj",
  "key23": "5eowGu41qbgx2V5d4tVox5cLBH4KW4shPvT7fcJTCvhP5b76QUoap94BemjhZh3uvqD4VMDxanf1Sesmg3puvmro",
  "key24": "y4CFtF68pJih1CTgeapVV4b3LvnvWNS4ekfmjUcXbMsUtwnzYwgzeve8CWh14t4Lh2nQDWcc2hGE5JELzZAvUQZ",
  "key25": "2FvHMBfey1QXAFJ9T39LwbhLRHV7XVBLJpZGBzFJU23Gn4M5vv5kRxcQ9WsiCMTCd3DB1EGQje9bqgsYLuoz5BCK",
  "key26": "4jXgYRV8wyeu71ZnYRtBG5BN2meScK4auVcgs8Wh5X2by27KMoDJ7wZWs9bPqwkXvnot5ewrkX5bW6FXjSTsFs9r",
  "key27": "56WKqYbdDXvitw3JSMX11fdeqU29xo4pBwHeRWXiTgiwT7MX3pMhF6t8GmYboGcBiX8E9SxGCUUGM1hhGcskEek5",
  "key28": "4CB4vaQ83ZQnruBf4EQhCh8fq8rv1iBcFjJU13iDTdoGRmPBiqBbfm9UivX5nJQrAYnY9tEEfn54vN2RitxZ36MK",
  "key29": "gEv8AJqEK1868AAzhHhFDafGRYxpkxywCn5sdajVmVeJrXuQix2iAkxiENMrUnNt3wdQ5bkZT3iCHQAZVrC3Rin"
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

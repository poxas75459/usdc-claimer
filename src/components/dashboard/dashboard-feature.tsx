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
    "2oJ76fA1UHGkxiFiL8Ewk5jNoKu3UNeZrHRjjVGBYP2vPuqn9EN3nQHdThPGZeYhwD5akkRinQtjmEPhW1asbEXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fZznGouJ9CcRZybDVwBor7bmmuNyoLdzWaJLE6rx1SEQNUoaBJf1Qw9AMQ3Te4rmMMaoy6yGyZK98PDPYF4dBVB",
  "key1": "4xgEwMVD2PUVCmY8Nv12gnQ7MPkKkhXo6MdogXQEHLtPwy3pFmBB2SEb3MV3jBtzzbgos9u7uxd6BM6WJnj1tDZk",
  "key2": "63LxjBAWgf7w1RdMp2cHJYpxrsfpRMuhvTLvMMnGfBaVKUSHXJEQ9oWfm6EXxr9D6H7Us3ckFP4Z3nfBtqkJu4TE",
  "key3": "2ZDXQveaBoxdnwMe3fZ1ZGeZtwPUAALkiArUk8xsMn4xzzZB47Y95xQQrD7mpwSyzRBpQuDBXhsrwxBTorYS3Fw7",
  "key4": "3HUnLai7bNqF51Zje8sMdddcNcv55oH5JzjwjzxtiE6aQuv7SQms4ZcpcWh1RG7F6drW5DwrjpjEbmWbAtAE74Ru",
  "key5": "3LQ4UjdJxchHCxFcCXPVGmxbemSyJdbqtBgXjUUDD4CmXyqNsyFLcVgz245vqsKDJAoZm1KXeHUikfgNLM6Mxm6J",
  "key6": "36HynFSxejx7MNgJ89cuAaAUFB6j7e7VQDrxB3mLHKnjcojJ1iLffh53AveKwqQ3TLHx13RPm8HyK5VnHRrHqmQn",
  "key7": "4RydNLjXWFiHGSip45dtr5Z1TGRQyaW7rU6soc4RbastMg7YcVexVorAKFc8LUHM1SHv73iwL9bj2RUhEo1eYnZ9",
  "key8": "3dUSgkMFSSxuS6kjcT35sg3yJEeRH6QL9nFg5dHDBpZf4MU1ATqc3MXDaLSoAcGPF4gUoVwBNo5Hztx59YMqvn99",
  "key9": "2cwjVFPGU67bykREh1wBpzGVpzk7hWu5cTB5tjKh5QpEE5qVtjxnj251s5MXpt7gQrGcUkiYB5N9QdQPa7E4WsCw",
  "key10": "5ikJLKBxgh98xbK5DFV9jfnDRLSWWqZXfkvvrf615jMqfENPQoQnZL271SJYtzqpFGbUcDvwJfZAz13RU288SBU2",
  "key11": "4URtYgPBy4GSRrieWTNzhuhuGWX3efvKf4dkfM3yF5EUMLBveDhJfHCKFsAHFMn6L5jnCPZQMM4Q8v8GiqzcN9Gg",
  "key12": "39UwbPVwR6jNJ3QZg6VVVbNVSQAk5u8DwQfY5wmaqB4wTugmqU7tEJXnD1pVwUb6PnJ4aAvSiJcpFTphGjBieRqu",
  "key13": "7o76TL4b7Uyxo2VimxPjcLrtgYSatieByUpA6HVCBTXikW87hCsD7zBGJADQUgxBtm2YprF8a51kTWBkAHLm5FX",
  "key14": "2XvjJKwZARzp68qyYUfQBiDemcRc3AjbBfiZugnPpBkJpmkxs6QE87THC6AJtcBfoPyJb852FTdDXSvnkfegeCt7",
  "key15": "33GmsAVmuRkpjN47S4nnGyyGTd9Jgje4NKQv3dwxLWvsBHqV4VaTXnH213XuiJik53g5qW4RDoQiokHD5GzJX9PW",
  "key16": "26fDP3dY2rfC453RxmHbsiLbvE6CruL3zFMumaZdPjrsQFqp2CYiQQjAh4nvEvYT9VSwMmp8KW4V8Cpnhmdqb5L7",
  "key17": "3JH4vkvyeVzth9iiB42A2pKD4CkAU4mmXgwzoFy6oYW6xWkcFR38YJs5jgpdQB2M1MiHHFjVD7Jua8ZDBDPkvoRF",
  "key18": "59Sior2Mi32chhKNvjcGS2HSHgor6fdcUhXfzUarEyAkSYYVTFufVfschLLawF3PrFPB7Gh9vnZ4PqfrSf43NVW6",
  "key19": "kyai1DkwvszxroarNcWVnfesMkNFYnVAE1qj4GCUKE3ogQpj819gieSVepotza3cTMSGFwAjNTYiExUDuK6VKxf",
  "key20": "59JNTbpCoosLZ5F92HejQFoA3kostp7E4rAQqQcc92TRDTk9zSgRHQNhqQK3TgcCi18sqxBDeBpw5Rdg6nzpgiEe",
  "key21": "mcGzMaSVwAEVU2AVqNP3tzPH5AgN5xcrCnsQ6Qs4kJWAMLTA2hyj49MgAnwySdfwfuEPArC3XEJc77m2mpAJtFB",
  "key22": "26wRrwjRAvJcxQ9gEXmqJgxVMYTEFFSaaaxSdRAWQiW7HfXWGp41hKekEcPxiZUMouBZC4VU5DcnyvtJ2reX5yAr",
  "key23": "3XpeVpLPbT6rLuk1XHNpidmEWNDGau54CT4w78KQdAeMQ3jEGG96DY39he72kyzNZFp1dsFMna9XnXpo6GZGtAem",
  "key24": "4Fan2oJaDz7ddY9DuUYVpWv1vMr2XuFCTTh5cyqA3fYvF8CTn1oVRUisw298ATmQ5vGfpe73bCyz4gwoSpcZtUrv",
  "key25": "3QPDDyuf7nrrWeiwBGYKoTj5ssRQJx6JLrt9MXKL7gJsy3qRQSE5RevhmpL4ZnKbCxjm61t2K9QNvSDWv4zTU1U8",
  "key26": "5DynYviLNpDQxwCVmnLdacvbtEemn4chhxa5T27dT23275C7gxafG2c2Y2xsVe6baeAeNA92mWpMJGurPMGPa6dP",
  "key27": "38Eb2RqDGLVZ3AUZUkMrZbsABdukU1C7kEDwcGkqtZrRVcbSM3PmaVoNy4EcAKXr6HrS6bARekEdoVo6zaLfzD5Z",
  "key28": "66L8eaP2ekPyKswgMP58JYrUHVpfVa55hvKKWTVQgTKwY6ix8YqQFaqHYNzmUuKeVBL24MBAJrRfkQwY3JbxEPNu",
  "key29": "5JvhwNwKQUkJ9SQUexhvmjCVoJ7gTc4SmWLcTH6KWv51HSqM5Rs9RXrCBj316YfSdS5sifCaZxsWjZQDMGHAan4n",
  "key30": "5Cixr1XAe4tmDcw9tLELi25YsXEaaRUg1j2P8owjWzkZ3FnLFnLpVnq4cGKwx6qbSLwAiNcDUXm16vHBnx6RXhvr",
  "key31": "27qewyDJfjRnLA7oRaWFZGyE35ifu1LXutv6AXizgBbadqcastvwZX7XK2wypp7jZcmDYFN97iZhRXgXyN6JYb2C",
  "key32": "3L2BJpgYu7oFHdoNv2s48L99HvckfQ546RoN8dXUJx41nSGbjcDtwZc5B6GQSR6myRLbUwaTz4oZdK9yucwcTW4T",
  "key33": "5sw3E5yLSxNXSLTbDGKpiX9gQS8RwHjHbvKj1EKYsxLvqwpKCGpBEcAyuukvmC51xW5t3PL9oxitVy7GKtUphJA2",
  "key34": "5F2V3z9NaEVgu6dTFNdXEnfnRakgMGPNyVRWCfqBPeYAiutQ8WCwKAEV5vn6JHWeXrsRVmpGJkRMvWrEVnWkTS3P",
  "key35": "9QJmnJKqpuAqPWuR3Spob4ewxXZYNaaqQ83PQBFUv8xohSx6XtJP6ATDnpTHnTqsiT2T3Vap71mvhREHx5Lv7e1",
  "key36": "4VWx9AEsgpHo5ACEqV1YbgHk68Q9WNcTiQrBnx6pF5ChFby59wWcyFoZKLsMWiP472s8jfyNszFHshC7nXRiUa1F"
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

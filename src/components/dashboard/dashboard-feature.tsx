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
    "f8v27XVvYYqCLq3bAHFv7M8SvWdV34MqFycu8rGikLLWVVvq8m7GeermQTFAFoW3WEwKAPrny4gRJmvEqZevgvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2afYkBDkX3tPojehNwSB8MJmfHAkHwsLaghpn3GdYe93wdKifcbyPMowibuBCuAwqkDMpLdmMJACSoZEVdyEeif9",
  "key1": "5mJsDLn5cQ3w4hLwf34pXbZWzAek8amxge4j1qmq9aKDCpjpttWtseTgtrnrs5NgmQTq7rBEBMrAYyvqCoRbWcfo",
  "key2": "3QDswRctCGPYRoimvCev1ZtLBnrNSFxfB3ePiPnMtbJSc8kjwC8me6pfkr71z2aQFxNe7GonP7PrpNCjbVZwiJZj",
  "key3": "hH91yAu8wC8fHnyTbhGNHfnNoQB9i8am2iBiNbcq6YnFHA5Wyo7m4MG694uPPtuzsXUA3iGKzzrjo4sK8ytiyRm",
  "key4": "4PdKwR5eUZ71X6zP6cMGF7ruFfWFCst22krkDd5dEVVGBDwAadTTeF4t9N93CohFL1wcaT4K96mvAmfnJKErBfeE",
  "key5": "2tWu3XioLkyqEUwW3qyrYDD8UxrnJSw1eto2bf3mnnny8yE1V89eTX1irJ2JtcQCVCZh8hS6SDb6CU4G1PiChQR6",
  "key6": "vCf9b5DbXzWsgbSUQJ9LzAiVLAuNUGjVUnHb7sMiNQ5BeHc1XcyqZwfbuURHgJ9vaNqBPpB6yUSAeeekcrvxVoG",
  "key7": "5aZn3T1noZUk2P7eCmJZr6m6KQxdNJrdZwiHgP89HwVwPjzZnSiemJmZqVRsowhn8ZSMa2LdDcWvxtj5aCFogSQs",
  "key8": "5Kgr7EkyuSZMC7udXsPs99h2mnZAiZtcNYGcTwWWnREUKULz47ja9k1LTfjnej1F1xbdsV3JGT3H6q4undWX8Ud9",
  "key9": "5nGz57EXUs2U59ULVdqxx395Qv64FQui9GL8uHNcNukd6xHx4B8CJ68oGqLTKiRGkiePW8Bq3oznKBHAujSNDW34",
  "key10": "vtnNfVFq5U92b6V2YYx5w9D4U4NTf3SJajqLrvm84ANwyWpBhSH2zudmjyviQswAR1YiR9FRRZDPZFLtKogwGzs",
  "key11": "2AUPeBFXY76DwKkSG6UcCe3SoQXUTTv23JXTSHhyZ3GUBtbKK5PGmLyTaEpd5iamjeSi2yqVmnEhDbxzJSPoieK1",
  "key12": "5kNvKEr76QMkHgUgpTkR7v8XCRYA4Sr46H8PowpHjHrP9NkX5CwGx2tA4jt1zWgQZNmCX7L3Js4YcLfyfwTyfRPp",
  "key13": "tHPc9tEssHpCRHRurucqCTBBrNchK8X8QWn8U8auFwZ3xKApGWhCsjp5oQo8EU3DLZdPrruEUSWuNPsVDdZPo7R",
  "key14": "2Koo9DmXbZx4v8e72ynUNgZNJd8hQSSgZTRk7JSkW5YU1hzoWaC1ojYaStd5zoqUgmHhhZLGnkubNwAGsPNWPGHx",
  "key15": "su5j1AMqizzi4KR8VHdNpb7GCZRVPxKiQPALysK9w3mW8ksP2Qat7WrKjbSeWWo6Qa5fqqZ2SVfpfTpA5myyoua",
  "key16": "3FWFYk8Q6UovanHR1z7HMY2B1FK5uXRCmyHixTZ79LtbTFBE1GZkfcskVRne11my8vbfi5biA9GNTKf69qPnrJLU",
  "key17": "5jB5W5rLhTzSWtVGZqQdiNMjgtHoXMbgbjk7cxokHqXvdarZjrfnsRvYoLgvE6oXtxRyiw1LsHToGVMc1QRjr3fW",
  "key18": "2rMQiWueoTQS6s9vMLmGvQdFF1RwLGmaGckmAG2Co3HfL6RX9g9fRpn7VeBAFgDaeQpqDN2c26NNekmLvFkmj8ox",
  "key19": "2FXPtxb8FpasKWuwJ34XpwaP1Z1SEeN2xM2AgYkkiYee3Nb9UbQUy9QQHPYyHXVCsZ77DFXAJXoKUi64qapTtz75",
  "key20": "X3qA5ZxVPwQAHidhwFJAxFfLAc9D7VK1nzXxpUdSbqDD5t4Uex9SnYyoe422Dp553DetwH3hmM359drJctkXjQK",
  "key21": "3xNwL27uAXH8KZUsMH183PZU6cA9zCyNALmXQ41Dnfst1867rgTwtTxxGqHppq88ZBVNLPkXJ3Dm6beZCUUAsnt",
  "key22": "8QPNh36XnvG2RuuvEfVQqvWe5eDEWMHyBRGM4JqDZpUeMxNYkiSbwAZztmH6YELQJ69Pu7X3gA9bLb8jY5Y8bqM",
  "key23": "3pxt6gRjQyt29FqidHyR44XEwUcUqCmxJFhKxMkawvVxE6vTmyCY8ZeAezqX9ZVpJZgEtsnGMyc91yCUExQe271f",
  "key24": "5NbDdy8W7tSVdXDKppE4vJfBb35CG7spx18PCM1jPp3uChj6p25pwp2az4U77K1u8mKy5BZUfrK2CRbwKn5ocamg",
  "key25": "2SYqvbrBswQ9TkTmvnir5AHuwczVnbbBsxKfQGuKG7zRhi4tNM7iiReVZ34hvPFbe8ARJhSpHFjXeKMrSaRQWMa2",
  "key26": "5GbsK6krLPRJYtke5tdE2s5jQf2ReW9yrGwyXzAKsWWa2RGunvqbCW5WF6bbuYUoPLGuGuyUt3eE9HeYKUkgrn6R",
  "key27": "2tBwnFqBE4fzGKYcc3ZkLtbgqs6H6uswovgiGuW5YrGgJgwRs5XkWvxSPfTQ4RYDiFh3so7zTheSHt8QuqrG9fAL",
  "key28": "4Ummg9Spih5z6DFPMYkWnNNb9D3koaL2wcsnYk4rtRkFvrMcM8XpuMqmXfYYV3vgBoKNVYn9EAhMLrhPGXZwHsE6",
  "key29": "L1CY3dZ4TEBjbWU26BPexkodbyxKpgnc82maQJbtd2bGtgcnEwQwUetAkAV3kfAoGhAWdTCFSDX894nCKbfLu7g",
  "key30": "yEFhjdVDJnS2AKAuoj4T2y7AzQ1cC6Jzk1pfv45oHTUH8EvCNf6nV532pSm71QiSsmNwfZ8ojRNHybYtTz2eYZy",
  "key31": "y76EnS95g8bpSHvwWGuYwKgbbVFPniqfsozuc42yersTrrBVadKMz2Yzqkx3tBKjRdgzLzXfJkPthKwaLW6qy8k",
  "key32": "5uiuni1UNVRaUVY7LsMU5nFF3t2Qa1RHEqh2QYzw9ootnn3Nehwq79mdbDRpqYrP2f96BrSesr7D2vYhAamoSLYQ",
  "key33": "2EbzpRXYsHB16aAaYYvA39JmKFXsAoxhdTfRZXyLLYBLFR9Nodo5WEiNQP4pKcspPah5HHXNCdt5sFsgczfiEHAn",
  "key34": "2wy6T8TRdZS4aM5TgbcEiWNC9CpruNsjmR8yrUYJNNi68N8zusbbzg63RMbXgVuGDcWAuj1dLS6XttLufAsUZCd7",
  "key35": "3oXvYPnYwy8R2kho713ssGCiQEcWfAAMfopsoBGoxKXkHZvAVpJUPXbX7mDea4mw2XAUAHXMGUBVfQtBZCJN9jZP",
  "key36": "DboAPm89jphhr6LH6vYyTffhjRQJk1FK3xURaV33s1WpJ1dnYkwFQrRA4yaCgt5jQbvq7ap7coNNst1BsVU3wJ5",
  "key37": "2J7FjZXxxRNYVmsRWx7v3TYhWGhomGwa5hwbKRNzEfWj9kfDzZ2fcN9LMPqcHGVcZQjxCZ1o92i8BRDwosoa3QpH",
  "key38": "43nDqCp3STFHW8yDaKSacmBTSTPyzTwikSpfPQm5mWVe8wjTBFGfngUHAjyrCyR9v6iwUmDVhxdawqJNCuwSCX9",
  "key39": "iYnejhhNFj1ZqcM7oUSApYfkecjE3BDyX5TPLDBSzk2jtSrsLj15EHkWj33ZaJsAsS7FogMDQvAsgv9Vc8ZSwas",
  "key40": "94mYdRonh3DH7obmCsbDtqaUFmKoSF9YgKzjZn5HiVhBbDCra4MUwyaZVkoovEKGp8qCykQ8tSws5HHivqCYaHk",
  "key41": "3i1R98i7J9WRyBGvkSVdpjbPUrefFsEYdvscWn8tzQDdpHB4UM7QX9yb6oQQo2EicoyBnx7sQqbkKN1f3KFrWZ1Y",
  "key42": "3dyEBTXpG9kT2BLeVEUa2QGS639gJXMTMDzkSpyxYn6WqiqgKpdG5eDTBn8G5JCHqbKC5y4xZ5DEa9Cx5u5YWz8N"
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

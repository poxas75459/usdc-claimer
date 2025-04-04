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
    "rKPxM5vpwJEQSvvyC7rkhTUaJwy5bqryZbY5Bro1v83uSLGB4dkbs15x33zVzM9hJyxMzgMe4zRHM3ddtnPkLPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46SuGqbJJakALHzx4B8J8xXqPRojDhUN27sCtpGvfGVD73PEJNvSrKxar8i9yW6ZKUE9CyfiywYvGyJrkD7w9gUx",
  "key1": "54eY7wCh7UsXdUMBPkVfZuC4VUzJCZJymHLJFLcT21czKDCW9wasVvtswWjPfc34Bu59SDAgCn5reVsGwAv1hyZc",
  "key2": "2tK6M22AVwQ1jH8MJPKbKnw1zBSwqJGwVcAvRonSPqzHj6ad3ALSKb8sNR8S5vcy5EtNoi8zQY7bpmPa6aU9FmsL",
  "key3": "3tyfSXRNoChim5nrb8v2oP81TTGkmXoQ5NaRf7yX4EYz8f7M9NbF7wS5dMpQfG89i7hXucn4Ziu5sNTN4DF3Eeq9",
  "key4": "4HjgaKzhdTXdzZB7vgerD8JDRFoxxtybsDGryT4fYSKsYdy9brQF1RG7EXJuxZqfufhEhioaKw8AnEjsfgZFXUEi",
  "key5": "5Ms8E8nbRUVNsLrjDMsuTxVMCqpLa3dgaZvbXYr6TPthT8X6JbThDuPdmYbb8aH3W492THoaz2UnAQWmk9obPvza",
  "key6": "3tZP25bKA7XmstngFrkWzyVZEPkfbaSENWNLBEGHtj5oeKMVdCNN53X1BEfmC548Vg8u4jk6Yk69y6qFRTDrzXtb",
  "key7": "6TFjLj3bSHNVkPD99fwsE7T8HDwwikn8raZURw6X4JDxU2EyoM1ukDBWm4989F2oM7U3LZJKvD8v7NLHZBCDJuH",
  "key8": "cC87JsUi3S8sV5jnz1dBhQ3v8YVb6xSf5LHd7SpsDV11WadT7FidmnmYsAvUqa8xXdJMNeSKqDuDNG4uzViEEwZ",
  "key9": "2xxP2CJErt65r1Gk5usWfHD3GA1WeetRpTavTKjd6psnTxzTjnYAu7yeQG9gcqosLiQU8LKErR1y72pASp5dAFaL",
  "key10": "5h1WrUFmaeBgxyvFZAaSXHGaNZ7Yps9m9dZzdsmYRNK8PXYBZf7fdwMUop9srLQsazP1vwB8zoNYiW98PXn9qeEY",
  "key11": "zroU66tER3tLf5cxagC1C6236D3BGKUwREMBV6rx9KwrK9KYDbHpX6ggog3ohzJBDU8za28CKSV5xxro2fiCF28",
  "key12": "HHhqDHRZJCLbv9ZiiPTezgHDmnzUv8G5d8MJreUnJdpVe8WeMDGeCWpCp7SPywSMPQqBwwXeGib9HefVVyxAwmQ",
  "key13": "abG9HbsWMVbCtVZzsdFVHcN63MiKjar43PDnjCZkv9FmATq6JWmqrveJHcX3cFGNuiAUjWEEDp46qusXAA5SaGT",
  "key14": "xTg4GPoiJVkquRAP4XDp9eneft9LRmMXLYJWhDAgVzdwDw5erQ1cJ1h3TRo8evLdrEAaAUNZsiQ7cq8uWnPTien",
  "key15": "5HNzV9qr4c4wdYzA8KgyUMbWqwkmX7HJGcbKghokuTf2CXRan4t2DymeH7YYcaAKE6kdrgCgCSMDsNkob9q6qzCV",
  "key16": "4g2jYmnsmXkaFqKd5JE8iWCauwwxf94KcBF3U2dL4sDoRkZy3Vdvs2ZhbupZtjo1sMTpjMupwBgT3SkLTgLBC5xK",
  "key17": "4FYhaFekTYHRdGC7AsiYZ7oKzgY7giTq2ztr2R8qx5ZBXMQ48q6ft8ma3ZfVXcTDDfVD2VxNwpres78WYg8xbbss",
  "key18": "3wJNARTbDUVxngtd5DUjyh4L1VHgSrurk9RydCAZDBuoYKZY9cdDr4BXUZNMQ9NyZMESLsokvXprwLRznGufGa7t",
  "key19": "2rMN2PeFtaYy3tFDyihunowjuzNVZTNnZuJuUA3mGEF37NDes3Ei8m3PMnUATMUrgMeUbzZPBfpA4bq2tSStQU9P",
  "key20": "HSj4AbbdSbmVDHWZ9xES5FkNkmQ63aTNkTfD9k6g5S86fKBM5BTF45EUkHbYLj9h4AeiRhuE5NiC4yhvVHdBHzH",
  "key21": "5XTSHtnqmADUaptNVVCUbdVs2Px5dX3mpyhLn85ZmuAnfzeJecFQay6ijxhMse8bgjkGCmYe426Mi1E5P54Z51uw",
  "key22": "RGmAQq9CxwpQ8b9wh84zNhxp5hPHdGMuXZMSyk8Jx3AyAWQ9tEb5GuP94LJbGWZEqMzqM2z1shm4PGfVuxc5aEL",
  "key23": "3fgmiehfseFu4L8eVK2Pdezi1yYwGvmPRcmT3oLqmFVzAWAoZWVDoJUeNBXmNiHXMztdhZ8tm3jh3TkX3ik7bWfL",
  "key24": "4i15y4kwvZGnZePpTromqAXtBYZNMgxBsTaW2boJS1cN3wBVmZ45YLBkryB3KPHdEZmuc8DBjKE9zVoymMST7Gv9",
  "key25": "8Rj9kXyMvu6qfsAxsP9KLhh9rkW3JWy6UaHCzYTCwqZxvRv2gbHYJbeo55hspa6tPjwwEPANrjwz2XSebeqaFpi",
  "key26": "5khAc1VvDYJy1jS1HvxEMMsKBnD18RhscKyACdCq7p5URZH5KtHxy8vpVPWjCC3L8DBvsrLAGi777npz7YGhcSqr",
  "key27": "5fXJEf97gYzBypT9tGHQoSp6j9Mu7zWuCUT7aJqvax5FMzgWc4pkVrPmxsqJAKzc9wRWM4J9HpkPEahLx61ApffM",
  "key28": "4pmoiF5jc6MegYChjt1ywfjTNqhMShF6iHbC6jfrhjRbRkKgjc9C3bp8anKqi6VFJi8aCdSnKBinp8sfup3tPDEs",
  "key29": "4FDjKYvQ8JxYtjb6B5yT7qLU932bKthWzAkVZo3WDcJgjccDbuRwvw3iVGNUt5VVz6uvrywnfCCufPubs4ewRRJA",
  "key30": "5zQVgujMK8dJiysdLZu3r34cLRShRnuHvXutFrroSeVx7HT2saP3JdtULWaccginGLEsD71fRp2RcWPGsiTDmiN4",
  "key31": "23fZJa3q5hBssbrLbsDU7SS9k4ya5wgkgGhNxYkaY9ekfMj7pERfFKWFGoeuYQTwTaHPRWTBELZVmtkpgh8Jndhk",
  "key32": "rZtUZp2S5QUrQvd2m7fDiYya1kRKgwF7kpfEHCB4a52CgQhpFHMX9tZJMVrHfTT4y92u6CLHgtWz4e327RkDPCr",
  "key33": "2z6ainstC1GpA5suX9R3UkjcoohaTy9ok4tEWfczmWQhdvQ5xU2bURw86Sz8rPCzthd988cBwycpYf6WWpTKyN6n",
  "key34": "WFaJ4CiKAi1GS9UXHksX8zCQ7KikUzQE3CZQUnzW9LS4KHpoU6X61UqD1VkoLfWtGC2crYL6ubEYwDSxGrQ8Dqj",
  "key35": "24qY4hMwMytUATJuM7cDkeJYgy2npu3emBHjggEiQdiVy5NqhRmsYwTS1XnGjsQUYEVp57XeyrMbxyDffQ8VPaGj",
  "key36": "rqq39DL8J6oBQdhAxJz5A6THv2UoU3hKgpjty7zjZZUwNVeM9JmD1rND6h9g9NtX2gydU4SSmSu1rqXSM6BXUk1",
  "key37": "FsojnAKqqPppbY9BkxfZ2WgoFZPuJpBNQDd9CZ9QYvohvPX53vZhApcUoJDMxDu1i5nECQ7gE7cvAszkMDprtu3",
  "key38": "2NEyGNiMqx2EvudyoTDKWg7dZpFXtsst9srfYHBWJjys76AnW2WvsS7doyJXTxJtDRppwCjGVgqXC4H46PPHFqhv",
  "key39": "5fbmJoHXDDbT77rHuE68Ss2nensruyUVzFkGQGVkrjSSRGDsbuKZQNdf9Kk5za4DanWcTTVr6qhUxPnbdcfX1Hv",
  "key40": "2TZDHrJ8JTmHkyEbpBCWJ54DcqaDKCzb36KsyGSXhmLa8x7hVn7ncALsYQFZiyeVVZGcC5cR7ndEU15q5fDRFnFA",
  "key41": "4Mfj5nBgnQ6GnoonDBcX3fEduZdH7j3pQcTbVZQ61Z5TajjjLeX9iAdwJADEKZCQk31zMCH34uSyafPThGLozxxX",
  "key42": "2gnCJS8TnWVnvoEedUvh7wrhZ8c5qvYQacjVmVF3VmZJjabZ3HeF4HZiV6US9mxAvrk1mTfqJPmtrtrgskWxheGF",
  "key43": "4jxPendyqNQoGjGm9t8bH74xYdJJqiKAz88zJVFoYCwupTa5eD9xR2vi4XwdwkdRk6xPaBBFmuZbLdupDG1bAq97",
  "key44": "3DQ9BLJqXy6rVrvoLFYXbKKWBSbGZm8iHqmFKyo1UF4t4AHGZT7RisLB7HdacVFZ6zk3dsQaKzfiBp1VfLJPazxW",
  "key45": "4LGY6jqquWMHs6ZCnL6sai6n2HDKEY1qejQCrwMtcCFFfeKfChoFev1Vk8ZWnu11GkB9osKkzZZbs4hHkQTvqrXf",
  "key46": "3paQyVTmddviYjXXNstsFGdQQbiDnohYqYjKWRYnWaaGxHFU6SZLc8z8igrYdoKAhPTpx3ZhUxpngZxytQvDypqG"
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

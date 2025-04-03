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
    "5RWRUEHXD8BaAZeCLLpbjpSQpdk7rs3u8cs63cZsvcsR2EjcwAZ8ueXH5yTNnviqGhH42cd4n6DdW93qcfojztqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cBT7XgywTRsWeRDC8fDUtFuoCmZcmjQHnQUPwkASHvh47TKffT5gf6dnFkydScKGE7bLqd2tLhzqoPKNP32kRZd",
  "key1": "25bj4ULyykAQ38VBZXWZ4ovWkhZzMvVsRotwaUfaP8kxmH9mTfzqEmy6Nov9KbEY34eqbysCBXBkgKswCcANQUcv",
  "key2": "44RawQqJ6XvsFKY5Jz6YjxS3Lutc2XmTQprMp91syLVmeuuugGYwk8u83oX4TTsHjuyDDfvhN3er2oeaQyha1dei",
  "key3": "3xzhhTCTpcCMsi9f4jJcJupk7Hv6jaSLBXMQdWa9aJBoazuAPXukckYBD7dpmm5WmcBerfysqvjeG2XDTK1x9fY2",
  "key4": "Cs9NtMuTAbt1QTEp1LXfHNJyZVpKmhaK65sRfpSP1w4K4wAZ6A2opySW8b3Js3M3vrPu4FkjGxXDodroj2pQJpx",
  "key5": "48589F7w5pvWVZAnx22QTPTeELB4C6V5oiNhTFUq1d7g1UwUy4i69PiF2ynj6jX1u7sjkYWF1haesye1fAXcMVx",
  "key6": "3cjrwPCtkbTpVjQZcFWeHfdA4UFc5HZjnWUvE4TtoUH8qHuwkDH2VBK9kJ8jpGzzQ7m8snXCDguWq28DXpSXm3Wg",
  "key7": "2y5XpKB8e7nxhip4i8stn48GjkJ7iJAnEoKmQZ5FGRdjqC2NsikZcrU2pamhrd3pdSQT9W9RaXxCPvMTeYSHAbwL",
  "key8": "3nvs3bhoS4fZg3EkkGN4nQYuSzDnnWaLRt11WaMurRwEkWSpkXoaVw9uyvU9kg2vKYybhvPkdBGKjfFXz6RSQ9tb",
  "key9": "2aAtQP3PancDi5LE4xqA9L6J9uNTsuR8pMMHYmK2gMZcLh2Y99JyfBWiuZSZr2NarRtYBDdynKxd54YdhCfeEZ9M",
  "key10": "47gX98KzVqoNb3sY4APj98sN7vwCfS4HumBhZ828KDLZKyYSFyJ5dtTDyiBGtbDfg13oMjtXc9vrSM7dtCAKEMPY",
  "key11": "5cYtyPrSD61qJE8xnN4eyfo2rW6oiiPQofz6yyK9sTLTqNocuGvRMfdW2CvV8145ZTnQtCeMoPbJMUvXnbjrePn",
  "key12": "47ngzEjKhCWEnFcnLLNFiCkNZmWD64dLdq5hG6jtHEzPQ3hwyDJnyxpduSMfkvYfthXZi11UNs5LZ7xGKUMfqPiw",
  "key13": "4Lh9s3JjxoHehSA76w16US8nWoATfW1hz1tjAppwn7bRD2KkwYrZm3m4VER5P2APqVyMjxadr65oobuR7gQTEjUM",
  "key14": "3hxic1fg72i9AjEmnDSFbKbAumT8nLTwfhjhg9wuzsxSwwGS9bngytjjpZyz69d4jrLLcNzxqAhuTXpGvWob9Afj",
  "key15": "3E52ov3azPXCyB2TnF2spXSuCP2PqgssFdVQQ7VqhvF2DHE3ZR7gJrdnduwjejJjRJQS1HrqojBEk8ie2senbtD1",
  "key16": "5Avek79kSSijtFVMLsR327CJ6bUioMBi5sX1g6BaEAgQJ7mH17nEMUBJCVDcYwexpfASkz7TNBcT4u1CSADvNhgC",
  "key17": "6TnXJZGodDHgNCP6hV5apPYBqxpg6Lcvqzg8uYjJEkYZFRxvcVgSuqVRDVuc61bfwYedwTUiHHmGbGaaMJ37vzt",
  "key18": "3J8iV8pUojdWiuKFqNr1BWSvBXKuSvNBTjyTsdT4M1m8JUWrnMvY5FU2ghRnsxDDQtWjUTaNMbDhBMXK7eFCkU7h",
  "key19": "5FDWJfnio57LMEew3QcJskX68c2bK4Gajr8FAfeuVUZXSF9iQ2RosHEZZxufMHTg1czmSHG4joTcDuPyS4dNTX5v",
  "key20": "49ot43v861Mj5QYw5K8JsGyuDECZg42XuuioeoFw29yc4PB7TUZ1Pu8P2vHDiFgyqJszVzpNKWf6RySpLeBu5beu",
  "key21": "33MGZ7rfFGcN2vDfDaZVt7iZHokzzSjggwDvYcbCqCkef7PKdsMu2fzYFV5yJPGWMLRYZp8ctvReFvHzR6qgeuEQ",
  "key22": "3EZvKGBVV6FzjTnxAc5QNpDeY7YMc9sbhMqPJxA2MfveqCj8wE81zxDVvzs4DrBHJfy5VY2qgumZMsW6gDX5Tgz9",
  "key23": "5SSxPQvHq69g7NQaeNNKrE7WVNytaMRNFpL9JLUjXGudYqN2FQHAY4ijAQazx9wNoXXsMi79SkeZXfnqRaduX8WY",
  "key24": "5mQak3MDV2Wumah5oSSEDeBLr3M7Mjpsz1BVdiba2UKeWwChs4f5MZfQWkozFzhqMisg9qw6tM7TccAZapEAZV7Q",
  "key25": "4wvd6LF816yPkgMeCd9ER6AEppCu2C5MUsYvxK3JRDEnh1KTTa7pptux8BFpF4wVdwXWpSjbZUndvFLsa5XXcgB2",
  "key26": "2Rjs33DsjzZzFMRy6EXjPxtQwWatQopLLT6cgrJJB8CkG6kMwri7bZZQJa2zhzT4Dz3kv2kxLbAdiTnVwpaGf8zn",
  "key27": "3RWM1zw2eQ8NcWitrK2HcRXHEnjnXT6RtcD5G2zTLnLADmC3eSuiMLVqS6qJdsdyQcaTsRAGjU2FfqJdgQWYBVH2",
  "key28": "244Ay5gAdE9RB1EDxw3bdrPUhSsDzpFMHnU7SjpD6mdAH4RY2Me7fvQ2MKmEtTeNYcfKMrJNBnvXuSz9NTarBgT6",
  "key29": "3jkMSBtTKzi4TVqVRFTW9TTi75fb8VSP4QJrixM8mD1vvy2jNKXmiBvZiM5Ub5YgrKQMefW5Kqcd482fGMbxfyLK",
  "key30": "568EvpqcP6UMnrw23PDRkxabdsBdTRbdiXuLZkmsX2PExM3cu874rKHkS9ApaSCsJ8ucqiQQ9vPSVikhA5A1n8uR",
  "key31": "5ACSBkyPcsfSxqCYWttRXFcUPQGSQN9JvhyEZAhS4b589i7yC1DVCvYT3isWC2XEKDMYKwt2PAPk2Go2cyXUQjmu",
  "key32": "5Z4ywmadH2haoQ2m6Tz4caZ2eUxiz3kVdfe1ar8dCpc8K3or8bLuJna5eTZguHfbBC3455b1QcMkvEAtcvbZEVN7",
  "key33": "3Xc4WBPGjH2vJgmCQj1Uw9pS9vQCGHBsq8fJRHM7antcDZmUfJeHemFUi26eeoWpUoknSPiwqvEjLqkpCZdRbDQ2",
  "key34": "49AiX5w7rb7rEP9fypnf8oqpN4LxqcAVCN3aBzJoPVPU29wCUAuoJScsS8MrxxGXvkj91nqTqghEPSkPQQX5abBL",
  "key35": "31i2STgErXzkvsbb1Rg8Xy5UUcRCGrn3vyduDfawDDhCFWyf7Qse62x9aMHnp9SSGvuGRwvCjTyfTXDz9U9wCC6J",
  "key36": "248UP17u28NRjY5wjFoV1uN8FsXxgmiPwJRZTyNmRv8p8ia7fLW29fvbSG4ZdNYAuyzX4ojHMjkeapoUZDrcWphU",
  "key37": "5fqQcTMyQ4qefQhZmcC6HEYibJjYNDQdokcW5ctSCbGezJ24CuRKVcajZxqE66x6Ymw2wBeFavL2z7nuEDQyfGav",
  "key38": "4QcqJNvgdtzgKtLCdKyS7dNpSeheCMB4PB2CVRqpm72S4Fz8deRpbpmESgQh5djTt5W652nMsJd2iAkesuYqDQTr",
  "key39": "4kRecNkAGayDPke1ZvfDfVpre2eXshbADB2ZV8o3rXKbnF4GUhFSmFGsVhfqnef4xtqEVuh8jrTxVU7HQWUQvdPo",
  "key40": "3bBXT6AWJfVBvnV31bCDtnEY6rShUV8ZNjEerX5bVwJ9e57BLck4Nhwyi6CU6kYaq9LdHvmk7QM1kbdjYS1zuUUK",
  "key41": "4FctQtVFmfh3Gwg1FiT7X5TRDAPgbVPZtGg64ZSHcYqFohPz2BoAtUqju83SW1VwS4isvvuHGTL2tR5Tmq8SxC1K",
  "key42": "7icudBnQTkBJih9T6CkAdjPEeeSLyBCPXGEZYw9zMbk5ERuqcZA17Jyqr1WtqkN6yhdCwsqqh821aDtpR993RXZ",
  "key43": "4gjqZfCHPS8ctC76UdHmhBsVhoxxFYwCvF5MAJkyk4Cfuk4rnAcqrx7LQqqCn7DhQLbgwWhA6UFvo2FmgLtra34k",
  "key44": "3GC1Zo7CP6ZrAUmzwgxz9Q6meurrirRs1uJYNHZFtpDcsgDF1E5upwhbrNj4LiUUknWmvteHAmWKrEy7tH1T9ufR"
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

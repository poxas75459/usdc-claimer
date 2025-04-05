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
    "3UwCbEJZdiwH2yebtjd9Vgy6C31tbn6Vn1UBrWRQXd6iACFdMqj9rWt2DfGu7JDj7Pz2xtpFQBfh6LhnkpZYUZht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oXjwS8hcbxwjC1Z5hSLTMPG1nxHSjnp93BNwMDJLPKnUSpXFNXQPrg6UckX59YLjomYiNLKPURWM8AUkJbQG5E4",
  "key1": "5VkYE4ywYd45qbVmSs58kF2dwgd5YYCKY5oTuYm63cPRPPh3st43AHX1Ra7aTA4tbRsKrfr4jxztVLAgXV1wp79D",
  "key2": "GpWfDW5PT9bNBnjjcLbdseZp8Bq8HLJaXo49LFU4Eu62WmCtL71gAsoJtk2tgj1U544CVLr6Ja6La388YCs1Vyi",
  "key3": "5ne7F4mkD78Jnns2mVsmDDj222ysNNbNikbEcxvoutAgNe5r32BUZPp4U1pv9h6YvvdbiTJ6XpBxMjPgrZzvJhRx",
  "key4": "4umkitXwRLKoZCchwAAtQb6Kdjg8PW91Xt38fHY3L8KwHm6ashw4m6VNpeWsVDBUjzvnarHtJuD2hKhok8mPHTXy",
  "key5": "UVK5cDW1JZXo7FvzNwi6d35FricddHUzNiWj7k9j8V4aNWW8jBpkoxGXtm2WFHAGC3ivsu3vHnqznh9W1obe3MG",
  "key6": "2VwvAd1BEU5iCyFkoUwZx2PNTtzQQLnTRrfCQqNbDgnMC8ingCncPcPC8cLzq8dvZM9MUC4mjDWKxu8ckgHvq3tR",
  "key7": "5xcG9EnZkTSoiinvi7uu4DGkBaEAEfk24mrWfrnM8qup9Y2wQg9Ne96NiBXSpnXJCm3TNoqK2ZTc8nrSxTU8rHVe",
  "key8": "42tvHVBtbLVcAExAdAaD3fDqwbZC1xcA7KXtWqmH3qXuCun5L7v6Xr5n2pWsQw27cLcs39E7rMksPNzGYwLrgpBf",
  "key9": "5dhM42PUf9q5YebhWkkSKR9kZVxdnMHpu5oMe5oRagry8WxMwybUfLRVF5afM6QU6N8SXuC52838AiECNbV4cpN1",
  "key10": "2CgBihmVJr5RgLdfoxw1HFR8FgHqbGVuJFZ8hHPHPeK2JhEf3kn6npTUvJyD54sRzqw5sd3cdc2dSSuQwaZvdiVz",
  "key11": "62D66EzDV5JSedxjrfqyxZKHB7ywV1xyzacA28rcTRrtFmWBJZC7KUUmQ7cRo7Vw4dp6yDyLChPQ56t41RXAVcVx",
  "key12": "2HfcnpSrnbMEiZu7VYDKFV8wME6yRYU4QwD8sSjWJTKoHxncWBpNTdrMvNXHHMRqNBS4AiVBUjDYis288yzg6ej8",
  "key13": "5usCTpcjYiZD584cGAbqMc4UL2eA7ViSD1VuhAz6jKtqyVpF6x2FjBs3GBzBS6wds5JFQzt6YuqT8u7gHM97haHp",
  "key14": "2CDthbjm8RsA4KjBXM3e6CgX7gN9P9q9RUfWoqToFYBM6kYq6f3DVTadvyKTkJJMQYLaa4aNk4kbD21gbrHm9PbS",
  "key15": "4v9LBXh6Ws7kdfAbMFSKKvCQ5XKAmmYv8UQ3Dq5wNARtMEnzE8b7XB18ht2Jvd5b2x3rQCMZy5eh6QKMgXfftSVQ",
  "key16": "5NmJqy56PXXQtZ8rhaApGA9NmGXLDBdr5P3Adr3xwZbPLpoLSAXdHcYdbULM32vCdjVP7pfP14Pwmd9DJNmGWiE1",
  "key17": "2R9phbx9jrR6m64ZtHenm5adVoPCn7Go6vRMyRsYZPYdPuo9STegf1Ta4x8RXcDsp8DbaZcgsxk2nabqRJacVkSc",
  "key18": "2PBDHSQnpuhqszz4LsBJuDGpJTzUTMnqYkpUUwXT1cFvH4UmLgBtmAediUj7XpJNixer71Kj48SLA1XrHzqqdj9E",
  "key19": "4amqXH681EqKQEgRLjfGkWWg6tJVsXrw4wDFyCEUDmDAZHg1ZsL1M22BwYdt7BdHkz3Z58uRW9yNy5BNsGoLt6ce",
  "key20": "4BZwd4rC9HKG8KRQiVkN8As4HPpPho57SxxN1TTAaEzrVFw5Bp1JDb6fb7Cenx6UEkUTu3fcWUoFi7MmgXa1xBwA",
  "key21": "xYKHDY8kfZzRydJiNCZkh8tTc9imCjANeXhbYdGSPxjiPqu4HYax5v6gSPxu68uxVM9R5EEsuZVWKzAAHStSaZP",
  "key22": "2RRmx38KeG1pUU1RSxC1YZmbWDXPtAZNcV1XRWS2Nd6AHyoUrix5XWRzMx6VddFt2uCL5bSrPS8Qz4TyU3ANLxco",
  "key23": "48fbHK6Jujqh8M3WtEETB9TT6rRzZkZjGQdTeNVU7rcpFDXi1dfx4uXWMJeSQvnfZYKD74zVdY22w613RUdFffey",
  "key24": "3vai5MWj39rV7zyq6SamDpC5czhiNtmsYjbK2jWdG5gXLveqP1NCZ5BgR5r6SxsfJX32xZMSvcBYnMPEpv4eCei9",
  "key25": "563PLFn53onaq481NLyAceCe62fFcCuo5uFn74o4QVH1ARJruoodksPRAmA34A1n4UrE8chxPeNiBtb3JdRGoYAY",
  "key26": "3wGaHYudgkbchNGCy7eSbgmkcJn4b4uun1QYJEBuPFhBehMz3dsJjdkLaoNDBzRC5k1oJbndLvoQynMUzzeFCCvp",
  "key27": "4u6awSNoKZq4ZTtxVwwpBEZsuxjButNVUFUkt3qVqfrh746xRWfcgCgopatgG8MbYuuSgZ5Fq7WL3NXrYMF17iqu",
  "key28": "5Kb4Tjh6oWfYUPGT5Zz4PCFMRXBA2R7YgHPkX5fiUxDjEdCm3oDkGcqu9DM3NokjHk8UymiKSn3LvoZgEpKsoo9K",
  "key29": "5EErFYXg6CddBSAqvuEuPr3g6sQZ3Cowq1kLzwzCjvJ1iUyEH9uggvi8o1jCUdkvWkZXJVdohgwsDNj4RhTwZ4cc",
  "key30": "2ewUm2MSNxHiGUeWERhmNEfb7in7F5jEs2tFxLBEYuk9YrFK8gWoTdxQbzGzaCP3Qas1nHkmY83d2BuSBZKgskyU",
  "key31": "29WwL2k7sdMYy4R6vhBdt2hyeSb9VvmWVA8jsADRKMUZsgwk7n4UpcBDExkDbHa4XhHFFZ1VJq9DND8HHMUKrYa2",
  "key32": "4sy7x9DBpURpuE6tAFVP3fFTbacEFB2ZD6AsMg6FamBKRH5LzHd2fHrg1S2aBaCmw5oZHjQXfZac4j6vBgYrsDyS",
  "key33": "KN7ey1ub3W8ZsP8QCp9zTH9bVnE7VicGS6A2Ruv7q6FiiGYmPBtX25kMTpwVvTZaLFrAL2Mk9BiSxaA7CNhwC2u",
  "key34": "3kTNBANjxiC6Q2DojmfcziiHDvCadGvmEFC2xXkzJnW42dz7shx6scQHLmpkL99U3A6R1qhaHChxu5tr7xUjcKQB",
  "key35": "2R8TG8qcvfWYNwo3D9uqL3ubuf3jn2FrSNpH6Kpq474rWZSExJA2EMaE9WShPMEpD4JWkTFp2skZyzSmwbsLs5P3",
  "key36": "2CjmPn1hLWJSBu7fJfuwWNXxo4SkXAyxL94mJgCrfNZ4XhxrRADSmiAP5d3Sxq51GWJKvxDuivzJjphT8kv4ti6L",
  "key37": "2j7PexSPQGQgLkY1mCAeJGtTzpGPsLq5ZwtXWvgTLoGW5cQvtnDpt7d2NyBNy1HLz37XbdodmbMnhkEW31uU8r4h",
  "key38": "rA57HcFrWHLm9bQzD7hKzUH2feMpnnGBZyigg8cWiMo5G4PToQ12JmMLKtqTtVy91j5Mgq4E314Z6gJSKbYqBXd",
  "key39": "5orVMzsiQ57yx2oUSx22BrpZwBrCSUZpA2u5mC37dH3Z2Su46omh8KYRLAkP4M2DtRwpLFtZaBgGGZeJ44J7f8Xf",
  "key40": "4mkaMKCMAr3eQf56ECMxcw8K5pmKGviTaoCuBUNRK9RjGDUQHtM6dMS2Hh3Q8W8V44a7MdoW55Dn3wFu7wz4UJqc",
  "key41": "2crt9CQ9Qppri5pkxXu7zdX2gKQ64EB5XMsJCSWMC3u2tHJy5VfZK5BgL42BWyJNkrmey6k8KfK7mbCW7yJtLKBR"
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

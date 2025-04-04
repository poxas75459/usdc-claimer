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
    "2oWyN5f7bfmS2YDGifUhyCoMPvah1g2w5DJR7Cd8UNpJsk9QK4o3BvbfxyM9xn4LrR5zgyvmqNCS6GTQ1vVSkjMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygD8sVMjTTzdhnM2yUNbw2E4TCrsLMSrxtLv9xuUG6jSr4T4dcNwaeKw8qBhf7BrH4Fe6KZpbz7NYWXg8JTgYwh",
  "key1": "kucVjSSmZxRDepaFbkNrTHX4NkywrheYGfzXC21exvBPPNZfLJt6ahKT9UW3DVy6MnhSpeSgCJPmEM3qC6ejhy5",
  "key2": "2dLq6T89mMdHdrRwDRds3RoanoAAnNQpDJYNeKatkJkhbGs19itYHzLTSJQgS5xGreaLRAsZ52SPLwxR3mEd9wdk",
  "key3": "5XEwgfSmrpPrAy8bQGsqm5RyX2Wu8pfq7YeUU8iDvmdpEhojYoi5NgfP9bxVntj9HuFPeBVsmmn1DwRkpiDSMKyn",
  "key4": "4DefdutEaSQuj7RZfZpt5inbEXQ82JfRchZJRa5xr9or69XLHTdMpcfM6hwq2imsrNZdiHkYWQK1xvN2Dj2jRdya",
  "key5": "puWgT9QMn9Kzx1KoRMz3Yt3GHyvcv6XrVzhusqwmBupdSYw45Ej5Gw8WcDTwHxgYgmBd4kaKj88CsNeR1pJe29X",
  "key6": "3odP3JAXikxHwrnkqgopXPrbTKKvgDmL2sZxJ83biD1zfSMj9MpDqgrmAZM44R3L25iCrvzwJcPKJLevBfytHoWD",
  "key7": "2YPCACXceygG4v9BdoyxXAttZQWn3VjJg42bT7yyUHJkVwAvL7DDF1AZYZXcVQL8wdZmxqsQAAzXiPHAyxFmJpfA",
  "key8": "gd1PQ2cSugDBip1CW3xJYfPLH8SZc4ZrXbztia2ifi6Duuz21kU3XSnh83gQhFf37sFKTUgzkNiYqUjuStjUXWY",
  "key9": "4ycUCm76JuSrQuZUp5MSmhM7YaJx1ZWDxCnb58AZmQwEguPTmtAxxdwkQMJnEQg5TNVUQG43dbyLU95JAHJaRHaQ",
  "key10": "3Nhc58iCRTskfAfGQrhtkUXGHL6RkAanTZAcwbVjVnHHsxB5Kqsrfpo6awuVWTansdjoKSDvBybbcCnMc4chHy3g",
  "key11": "2xp6Mc5QmLoqZJupKUZNv8ajy4kK9kVLY2XXKENosEbo42xtWTDphPhkiy6f2NcUrg811woPjdZ9676ayHcMzMfk",
  "key12": "3NwWkJ2w7shCba3onbBMd3EDkCQeQxWz2g9B1kVN2WXMjGAwmykKDDyPjEKgVNWSM7yzcViC1iq65uZDHztAjf8K",
  "key13": "3og52FJRSr1oV8KFrCPbNza2VHaWgTYjEfBLxBpvA4Lvjze1gs9GMgT1XuwbnUC4QFnuDdYAhJV3fN8cRByw5Eh5",
  "key14": "4CTSVuVvo2pV7zi6s6ihq72ep2pwudsvMRBKTmEiUisHcLWwivEcEndGyarc7zZBY9mvRfPdhWtSamQUfSXr5oMz",
  "key15": "25QbDSUkYATnk5v8NbQBj1GxNwfepGKwNwCx8pdFKBsgRuBHjMHtwF6ZGNvBcFWJ3MnWwVnr9LJT2KYyW4RHCJVL",
  "key16": "4MKn9Umikj9Ggegx3MiuDcu61uPNnAfphWuYE55tuSqcD2xEXJXL2XSMCzrpeznP2hNEbeFWqMQuH1DpL9Z3yJuZ",
  "key17": "3SWtffaEKkL5kuMA4eqhZxnNiTMWE9LPsWFNi2CKNHxKyPuM6tKUx4vBdmN3nac614794GN7PLGwLKd2EnVzK5Zr",
  "key18": "DKvCxwMMcD4iGERu4Zw7Az9h1HeWRyCKdwAF7sgDVceVGTsieTXE7PXQCXxMusFPTR4poYkoWfZ8Fqx5Qfk7Awu",
  "key19": "SctYdP2bKZurLqAgDpxouKGS7Ro3hRxg7aVWyv1VcgTUv9oMdeW7D4psmTcGTK964WuTVPHaJK1GEr5pCCdqkN7",
  "key20": "2KeRsr4uv8AiWEPhjHm44yWLiY7MGPdHpVdr17GX7S2A5mKgTingqzgv8eYqvPotBLJwWB86cp5hD46FXxHCRGjv",
  "key21": "387NUQJLD9uNuttYYHZgPwTUBAghbuAChzH1KNpLRT7CKbUYvYBiFvvb2TVk3qGT7yMW2zMwARQUyX5v5RkELYDV",
  "key22": "4WVbPgdeyqayiRDNxf58NB7DeXwznFpNXK2puYaXfepMcxUHiN4TQn9akbZ2C1QbgCKPBxjd3HuaSCeTTZJPQq5S",
  "key23": "udPCavqK1HuUZuzvt8gxGwgDYfqUp6m6pZMZXQJ7DbKJe1TdQzUhnbwe9M9KpJxTg6ohR64HDJ8b7gmwsT3JZPJ",
  "key24": "62apYeqe5WBUxaFYHYFTM4hChyPAS8KrhC9bfeYpx62M25S47bcBspW1JH9w6W5b96wdeDsYVvGx7PpWE5XkWTV2",
  "key25": "5fgye7Nm8ELefVUWVDZs3dFTY9hYRYpJrQgRb7XejkUyA32XQbrx5jKF6TSLBXK1Rsjs2vssbvF17B9yLehn2GJd",
  "key26": "53jWLcKLa7JTX7FeiFWUQ3Jb6tUgMrt4wtkQUNFgjDMy3T4e3fjvQNe7sUpW5qx5YVhRj2AzLU7HPRp33hsLuF98",
  "key27": "5L6C6ofgRpwGFnAsFp9XB2JDYHw1erYX4TdLyHs2CcFM8ME2Lxm4PSjALEebQu83v4crFqvkWGi8g3HWhA4WRwJi",
  "key28": "5LrwkSKapiRjNXzyzyecU5hfHPv76TbMMob89ACqtLkbL78zVsX6DkJyjSCSFqGKNxYtQ95doa63sxfagyJSUwCd",
  "key29": "53f8uUohoUfKZT41VDBKeQGxDcVw8XXEj57AdP8DUbx45H7YgGBBc9Loq2wqk2514LC6NV1cXdy95iRdJtwwgfHc",
  "key30": "31DQpqmGYA1HMrdpBJRsqWQrTTcV3ifM9YnzF68EgVMWALWeDtaJkDg1gAAqqWZLkfd1kR57KVsyhx56DiseuGor",
  "key31": "2GS79VMjCg34gwgQsBweCAWRgQvrFQk4TR66nimUuMyV8iKD4JXwTXBsS5MYpgg82kytcUNvmbA4uKezLjDx7XSN",
  "key32": "gSy17eVyhTPcuJru9RWRdJEusLokmMdG3KE5JKU9WVQTZ9qPz4jAaSdZ6jcKhwz2fScgKpsNrQc8M9FXNhSbiEF",
  "key33": "4jvsHrVqowNXfHkMLf1oVc5ySRK2dpkBDGnaHznuwJHpMXXKn5MzSvEyjbphMazvjX54dQU1yLmv5bkhje2jxQLi",
  "key34": "4mLy79ErFpLFZWtMaTy6pfwe9L7NCxkgT4EEF3qjSh3DW5RGGb1A6iABGvys1ZZgpPpxuyHaR47CGKsPwMPkoGpd",
  "key35": "4rcDpyjk7USv91ao6fULzG61WezezgNaAiAvyEd8J454arfERqVSCowUEL7wyEot9WeCStv6QkFq5XzPcSyR8BDD",
  "key36": "mjKuvsM3Ac4KXCH5ztNEuM67jt5z3W2JWgLSYxeBxJdanNK4pgy2wWBVDFqMdpkZbBbppzgE2kEqLJ8fJMBkp9a",
  "key37": "3YHVvVFWyXDuz8AWSGrFR673vafk3RwGD4mwcyMSGRQq2H1SzmvdyNN6yTChXAyDRT48Jwar7Ryy7yQ4nNASG7jT",
  "key38": "4kBo6twfXPQH6aRDsAA55MWC9Eh8upqXG6CxqGUjrz45UvPUr8VVPSPbd9PMruzzP9FabRvrvpyHmJUMuS3T5Pm6",
  "key39": "Z4atC7ypTNLbkXEe5Ez6p163J7o8ybBNTACFPSAtjzm3YxsMQDjc7G7MuK7B7EVr2k6qtknX5houXGdeFwgv3kk",
  "key40": "2zhLXCGerFyea1pC48C6wShkrjWZcMWx6qDg2xgwgqrbfSWt55F4uhVrppCVErEHJLSM7bZap6BHV8D5ADGW7dPb",
  "key41": "3DgkKeixw2VRjde4P3iHzvexvZKMkoixAfSuVDrCqdmtGkbZCht7xZ8uJB3Tzm5uJS6enYbGyRmhDmWAVcpqaY2f",
  "key42": "2DGxfQoGBU1jHfY1df2sfyVCLAtxbdUondar7UfZoSVSyHFtr1QNnYCzRcTNTckvajcyC5YJBjUt7HPXoJtjKTN6",
  "key43": "29x7ypaq4qZ4J5ounbannjEE7E2XaKaT7ZvZeuGV5YKi518iFC5HYfs5Ps4aW4Szx2vKkKmAs7BywEQdnjAsbqWC",
  "key44": "54C55WzirUjf4HhDkQ7FfmbnsMUBcPtVuDfKW1YZtAnXV7iWx8KnQeVapoZiphghNSmG2ctB8D1ovwrSSP6Cqna6",
  "key45": "2aMygKW7tiJvVxgo2ja7uuvza2JGa6BNCdyFhmMCB2yjNwnc11fuAmE1pwwKiyXyuAs12SYaw3Zyt8L6Mj9ygSwN",
  "key46": "66KXrQVeU4fkfP9Hj7aaeAS1ignGj34jJMTdVCpt2kooLHNsAN8fr4L8H2TQ6UBE73Wm2iaW1nqyj4M7QmGBcrG4",
  "key47": "4G2H79sv7mULRzE7wkUoJFGbgUcdCs5yfYPEX2mAqmSpBm2SzAbLwB6K9h6ncgeuFBLK7WPq8qtX86BaxfNQfZUU",
  "key48": "4WYyYTBne2kQvzvjpR8SUodpusdceHdzvGYFrUEL69LqmcZ997s1jVcG7ps9CEYKM8ar6GvVt7WoJRJjd3qvU7UY"
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

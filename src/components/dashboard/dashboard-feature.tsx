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
    "5w14AU1obxN46Xom7qP1aLp1oPB4Mh6s8mkCkLZpXaxsTr8cjWJXwMBiFq4UwoFWWm2HgKqV45UZe6NnDJBLs818"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wqEJg9NHPtS5M7fQE5xTdboY31sbi54dZ4r3BoJ6phap1Jkwf3T8mc1ijFswJKi3Ua3dbBG3FvuzN5Xk54qQHGw",
  "key1": "Tsg3vtsPDxe4SqAN1ezn1cwC2rgpUGeS9aVvdxwF9Fbb6RzHueigoUq84yKZUFHaDEHgRWhvwBRvmQPGA1kriwN",
  "key2": "3PHAu8vqFD3E32xae52JqaKpZ8dT2yj2DgJBJR3NcftnqTsLBv1Lmbk2xabYStRa2KVJmvi4zDBZ9gWvp8PHAi6v",
  "key3": "38L2M3EnojsLt6bdDqdUZ3XEv6AqH14EgbnoVSVsfSN1abmLPvSf5BVMFZeGpaCtDyXZ3yYuTteNjuCuGRthfBpj",
  "key4": "5NW2vjVp8QNnstM1yepdAGisCvtEUdmBo3XmSH5bkNgrWPbS8iEDSW7xQFDNzjLyCocFkPzrN1KK2YGRssRLUEFT",
  "key5": "Z63qhxjbU4Ppw8wFei3FwpKsFtCqvX5ndRYR4gFWy4XF5vg1zGjEbykgNWo6wM2wq6LeFjdki2tMd17mD3dyUYE",
  "key6": "2Sy44fZtaZHx3kkHm7rvw6D4WuQj5jkeHn74KPoBaaF5H2bMyQvVWHEt2PLBGmhMsj1tp29zFN9mYoetAEGNkyca",
  "key7": "4saLa33Gj2Vub2mvdjRjcwFQa7pANTPixpZS84YPrVxNY7DrstU7frNKDJYAfLY6ofu4e1vqKnmkJR6sqEAFvPdF",
  "key8": "AaMhAebHe2VYRtiWXtF4RRJdc29GzydhC3UmCL9h1FB8kg5shhAu6PQ1YWD8o1d5ncj2K29EaZBZhdM7mxSR7Uo",
  "key9": "2sonRbs3TZt8Nsp5EJ9k6cQd9EdXVQL1hDpbLkNHXnYQUaTkeM8FER2HJcqAF9nSWrHyZkGEne9TkSrAkGeqUVxo",
  "key10": "2SUyXCFxDR64d2HrVGMsboQgrBy2PQSrZLFhHJeiSyMgbaLuqqUQAKeAmQrTHgNdFaBMxXjsgH2cJpobKEkDhGpu",
  "key11": "o2r2b1oUz43uhpz7oPDAJaXgGGVMsZVz57rvFjgryGBeWfDwe5uP6punkDh5XU71xiF9yoDJaLB6vPrmTNG4fjn",
  "key12": "4oZA1kcrSbfPqCJ7arzc93oLL8F1JFXKLpYgJQAhsR59Y5iqk2G9qyVfEFxXgSMKWVW2vzddivBAL6Wt2S95kvSU",
  "key13": "26dsMiUkn7rTw3eCnvsDUwRCWcdtYzoNS9ugFcWWmWQkqCKjcdSTvPNDnHUqBp5HDkjLDv8tpzvVK7Tuz9LSkoxZ",
  "key14": "4E7tzNvcAqbD1zMSvR8ABDiivBCLfGL2cBgGvucPvdvbRogZArVXPxn3UaVrvvf8oztthspSXTpeuJtxtMJHb3js",
  "key15": "Nwc3JXVAjEtySsdav73oCVkBJexG4jTWoDJFbsbtSYYvQ8gC7MGWFgHWznPzLVan9kbee8PunRKTmiHWVgfSjMd",
  "key16": "59nTntT7F4w4PJLR1AR5YqsJBZKswSj1eAD6oXZcNbQ7URtqSffxA8NiDdWwHg5FsVvFZUK846UZGnYV438H4vb2",
  "key17": "4UubNsUXCGVNBSkcqZCFnTgTnkTQaSn8YACCE45K5y2zpDJ2HMVfdTUnnNiBJmojcXcAGT9S5sYFCF3BKWqJUJif",
  "key18": "pZi5AZyaqXwXPXX6iLntjsNYJQjdtWhEnAnLg6RpUDtz3gexDHqr8gcHK5B6HkktebRAmfYDsuhasRGRu8EnENN",
  "key19": "4LwXwEBo2hcVpMc6ZrBYcoYBJ2smBCNaZuvNADknt1UGfFmRkxaDzEUjpFAscfy5qfktkjuEvUMxxbc8MjAzjA2r",
  "key20": "3bRxsA14mYn1DyL7PQrZg2YQFBMMGdturLncQqMSgLv3rMwzpeC3ud7otvD8ZiyjVJnET8HKdSGFj2aSk8hxdzct",
  "key21": "KTqDBWT5W7reGPgM93hUgpqjYDU7w9fdbm6utj9uiEcqPjXJLBRJgZ8ftttF2XBgLuGoQK7Lbp3bzfkDrCcKfFa",
  "key22": "2b2tvt6223msY5gAFHKxCMTGoY1Gk25RMPJHHoNj3M9WFbBJkZzvMDegVRpvc25f1cHvpxqT3sVHbCijGCry8FFg",
  "key23": "4kEXZouLrErUt4EzcqxaT6sK1t7tR4duni4VSEEsoWP9qdLq9MiWdympgGTbx8PHb5UQ1XFBEryV8pQtE4PZ6AmH",
  "key24": "3aATjsPGxKo5UDSakFK7kt8rp9Hiq2L6M8zsGgDowzvC1gGYLxNTAmx2jKPDhHqP1ViHqVvyP8mc5qebUMr8DSFn"
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

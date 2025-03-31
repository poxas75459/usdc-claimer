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
    "W5Br4cHoPowSoRJwEHtDiqu4r37f96fEZrqsqfTwjAH9MBHgcnASve3atqVMvt2RdAmhA71jH9xQQXLBy7cVsTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xZRb8CrmTRrw6ywTLZE8noqFzq9eKn9qsJw6XxDwGPUHrbRoJ1Lf9ot4STx5z35MXaujKWY2dCV6VwU1UBBXYdw",
  "key1": "5nQa47FnPpv6UaaQgx2dS18Hjnt9BJPMs393mzFyyCHbDeMf8mMK1f2HmNpqrY4vFgNPy6MFNGN8Wjtw8rwFV1N2",
  "key2": "4FHQbH6ccm2Wodtgu7zKTsegcRS4iiTqJroK8XUPqfcapG3qzoj8BnRQcjnNnvjwF2m3PRJxM55Pbg7tTKHtr5fU",
  "key3": "2Zy5GSQ9wEVBieRAiQMcYAFkBGWHiCrVZQ1ym3nYQThQ5F2iPDeBiVEYkzgDofdw5JNnwEZbtWGfGbcagbdqtX1j",
  "key4": "3KxPBTRh6VSqqx24u42ByfXXxx1FoYojuDygB6XSkCYNJZsuvCVfQu7GNRUQ42ZrmEiuUrCFXYr78NccWkzF1RD2",
  "key5": "2uDK2qsXtcSY5nnrM3gvFTVsWcgWnwEBSNLL7etcem5jUtaRPhyjzXnqtKySLkGTqMYVYHrov8qF1XGkDdTKmCAv",
  "key6": "5AB56ArvGouaesc7KQASZoGQ1SUaESNi1VroQxJHeYLoz9b4a4Uw7uj9HShkRzcaN2poRvSn9qjgEU6fpVh8npMo",
  "key7": "3KnhDm2JWj6x8v8BKCHBpBSfMMPAg3GyxhuCcgUkwfwyEqvozdPx4irU9KXbDb2BdXpuZuvCBz2qXdeEZn9XrRnr",
  "key8": "4Z8ghAaR54ovQTPgw3L17DBFiXsGYebnUxwZ8k1rRhoqLznKjbAy7FtLooo6nnxMTLCPhw2QEn2JVXyqd1hkFN5A",
  "key9": "3iGi3MoFW5HuMrK3b82yZw153oJ3zdjNP8ULnRGaYuj76yxDdwPqmPwEwX5qAW9C7mYBnKz8SL2hwi3AdMD33EYr",
  "key10": "4jb3gE9LxYh49EJewBEKu1u1QAs8R5tYeEJjPMEaMoAC5hCo4hSZ1gSiKwAAk3vT8T26QjvMopxDR6pzB7gdp3rC",
  "key11": "FojaekPH3FtYtWqVtN3VsnA3PbqPcn4DUHc5EWyagYYtUqa3qoacpRCSjgUXVDiwzmKSSMtWPUqXv61esnttzPx",
  "key12": "4q7LKWDsfjWWZruaXkYsHqbDSSmcPoqypMAt6ZXF68yrS4FZD44L6D6N7FT7x8sk9BmjwrjeJBCawGo6jbNxtSWK",
  "key13": "5TCxbkK98zTkbsPcchjUS5erbeAj4tgycssMuLjk4H3bEPGp3hRtaFoqwNNLkS1MZxbDoLRKEVnqEmEAYknV9VwP",
  "key14": "9rzL8Bg37yHf5XDkP48YSwA3EiPhx5kjMG3rVuqxsop7SkTy8JzzykmZcqbSQfJW36yPhTkC3qbMyVYc9UrDihH",
  "key15": "3q5xTpbWcGxXoyUfFY8fi6RicqAuAYSPeTRoLdFqZnm5yDbnzJVJFVyAFaj1qEb5BD2oko4vSAt5am4f6DwRuYWz",
  "key16": "2bFYPUSNjrpDPEmu8RQJN9sPDQ5rrvNaL8zZwhV1eosHcD89NtHG48USmAnvG8rbkXyjkDrV9FSntiuGU2yJyRRb",
  "key17": "3Pf1V7gahXP4pLRUh6eyQQSSaHJBykQpTX6oHkCKssQM7MJjVwFaHnQQEdAWURSqFSe3gEJKMdZjdMJVbrJRhRGz",
  "key18": "25dwLyyb9kVUEqRNytrjNaPDaxkugmBy6VGvmntkLbeccjYm3zJD2MM4VUxgR8sRuHh8g1MGTLYdaD5jjC8bk4EX",
  "key19": "3CGs8U7xDwq1CTkjEBULP3JZdrHAVRmgDFY73C2WLG1QiVnCmnsFdvsmxEwVc5aK5MnjsomtQHgqM2wfR3UcrnHf",
  "key20": "GtzvGcvs7dMtjJRrkMvozCqVoFecH1DzdFzbFGv15gdAZ3xJ5SxVEtTcE1jAYq92t2nv5rj888e4AFMmkC8SxfL",
  "key21": "4dUCABKXs96vMMBcCCRTarXB9KZWzmX6GLB6Pfu4ZbPNV4fkWofM5UsKibXvYSBVZXH3hTej1RMohLhFdn6wt375",
  "key22": "4LwbMgcKD6d88n7w7fADHXi3s5bYpJG3Rj8TDQRN8jq6hQcN4TG1g2GSuqmUsKxv56HDUCMX8stPUQRnwcCHVUE4",
  "key23": "5B3QfR6rXmkL9LfX56LWtZMH6cyVbr7vgAAbcuGikNKcH5kjXNW5xHNyLZZ3jk5cgy3eXygGTpoq9K9Y41MUArtW",
  "key24": "3c1x1BZoAfMbQdU7w3nWPxgqs79PFqXnfyEnP96fr7o4xikxi1wKLjfDQ7873ESAQRKngoraguoJwZGNmNVmKj5Q",
  "key25": "47cQ9kovPY5HSmedcR4X54Sm1KBsv4m6Cg9LtC7ANgcM6km13exbszTvzGy77E55Lvzx1isGx9nEY2apz8FfyzBr",
  "key26": "5dDkypKohUzZJuX7YWszXhTuhzJTfCeXG2xoE8SKLJq83ZLk7bGbKMHAiSrUGQEvwvjZh7iNqVExWTN15qFYMqpL",
  "key27": "2CJGrwyBvJTJTN9LsffRDCrHkTU7QopK15siKeUuYQXbBUUof1h4GPd2hvmczgq4Y5MxQmRiUHoq7bedC28XCHZS",
  "key28": "4ArgtS9eub2WbsRoZXEAMDdJxnJJdcYJJqb7thc63gabbuAJP26msd9hioWHuwh8VVZaXkZFMxTiJbFThDe52k2j",
  "key29": "xcwgGe1bWG1SSEUGS5CAvLB8x4HRvTNj8tpSmdYmNVZRvuhAPCJkuznpGnUxLdkDqjLuEpgss291NEeCYeYkUTY",
  "key30": "59n8Y6FfxY5K76pj8qwDvHNkerSArj7DmnNmqku192X6axY7vx8qRnkUC4oAWFrEqun8JqHBTLaoTs6RgNKPxbUT",
  "key31": "egNton9jz12PQFNyGcJmTGak6LLaZnymRcWnHs1YaVYpLBDFJSaxNWq3JW8be4ZERVoU4sYWGmEVjoXNDovgBBC",
  "key32": "5MXV7xkwNNMFJguiiG5TgAbCB5Xjr6W4wt8HeDn5eJYmN39MhrBE2sxowPA6o83dLxC4ZPShpeosqdTAxdo9D7bn",
  "key33": "3e3Ev88hgmwgAvxWQJvMhTpSF9BcgeCZKxFqy5woWe341smkUZG1NNmn4pYMorCmXm9YLfCz9RwyeGarsVG1mmxZ"
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

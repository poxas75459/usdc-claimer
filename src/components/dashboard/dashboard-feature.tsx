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
    "46ReHAYCvreeMRZbJ98nEHBEMc4xqGeHuzmvxUBkuFabjkDikMWESTnbRUU7fkQ2RzLFqsh416axs7PhpurBaeZw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QcY7Yyzmi5AY1hoVuyynHLmMCn95JR91bJnnwgvvo7Ateu4bMcVcxkD2kUP3aCH8LHt3kKM7zSj5dnZabxn5HH4",
  "key1": "5uVsrytmySttMFTVrQeq95X2nmQtfXBodS6U99H5huyWwF7gXehxV9eqvrutKskbdMUQsWhxdMhmyLjvWNimhUtf",
  "key2": "U3VFrNuFSrJWmFmCMyk81NXEVvp4H7i9h4pnJLUZTfGy9HyBUNvfXULPbTXHe3WaTDqSMGE59WUTzZG7U7n47uw",
  "key3": "4DcVWcht8gbtEVk8N7V9SAxKnXxszeyA9YJvZAfvYDvaWP4ATvfRhiTE7Q5coxcwxRLNxZxxHcVHyarmdKzgnbUj",
  "key4": "5DKcWb9QKBkJM9ESFDzyRVJLfour7UfL5KAoCwME3XYB6eA7Za7u59gUZKcoyDBdSS1fkTVjz4GCK4GLsKYSwDTH",
  "key5": "FumFELK5H2KDRAAZnfh7krEoFtdxRyNKxSb2TqAULomKUMkJx5h5W8ayenyDNbuyki7x2nwDZQnvjrXDARU5rnp",
  "key6": "5Gbvw5xzcgmg79Gr6FWSvuEQaWbgdYBXx7n4Hzqe1ptYCckGqzc9cHDL8EzhA12o5yVxxXK7Ch23S4QEVo3hat7Y",
  "key7": "4fPtDCBTh9YcDvU9oGyiQmtJ3AiMotyFgzMcjiaJXFbMwbZiETFrjaitfcQ8ArAaWnfE4SZv94niwdtCimpzqyuH",
  "key8": "3bVRVQNzGQaBEEC7mAs63i7Qp1KUbmDrQcUNt8B1zRMry5BNcS2qWqzsQG8Cuu8Z3ggcQKkjxmBSmLXSVFGxPgXZ",
  "key9": "3L1t1coVJZCwpFr4TrjZJznzw34EZ1xtTvSkM3p5MDWu9SzjwsXUt1hXJPjfa14TmqT6foZUpAox3TkSMk3Z2LZW",
  "key10": "3Rw995wA3CidAWDP5htmB8mUrjxHG5mczguyMQQir3aGuAGuzD6zj4xqHFQ3JEeXSpcp5a9sRut6Sbe5DSRkSif2",
  "key11": "5wv6ue9NNNST9E5VCo5HeqbPExs2XpDB1fFEXk2Cj6YFiq9sefjU47Zo3H3Zt6uYhimo5kHUhaLyLrjbBPBZaNDh",
  "key12": "3WsVNRYazfY3qTtAowkmb8Sv39f89VdDFtkxa7sW1w9CNJXDB5imz42RUZTmXS6rwCm6Z95PxzLkzusDyraGdyE3",
  "key13": "5GhuEzZ2FZxrUFSym4GWLrLP27f636924xsULYGsGPP65jKqkePuRJuhiniGfAYXvbHCBiyBozn9CT2QBDyan4pK",
  "key14": "UjgUZ6wLm3AsKGTBih3v1P4BLQJdnY8GvAC9uuoEJAeh1ygoW9nNXWjYTe9MGrRzsjPHoyJDSxuerAgyfrZkyRu",
  "key15": "yn6qzjrPh8Kq7wabZotgHDKLKk61UsqUwZ4wxWYHTSbumXkncbwyRG8JBrQLwZeiNCEoHZZeh8Dd3qJYFNu2Ujc",
  "key16": "2K6X5PQCtH567gRfqePVguzMm7fjdL91NkdJJA6GrstdLbe3xdMof8EaXCTcS8EckLiZzwFcS3R2a1m6CVpK8wJV",
  "key17": "4CSf92DumLWpREBkm9tJi7dp7TP9SYjWbr1pZKRC3LGP5VQCAxThKirigg1QznqMuKSC4TKo27jPokDrR4oW15kc",
  "key18": "5TB8dQH2BuJpibDaA9fJTXi4vq53LFi9A1ApNC8DSskhZisJXkY6To7un4EZqxX1nb5XUxye9mwW6XYcAuKSjgrw",
  "key19": "4h4UtAozXQpGJymxeJiHqazEL6MiKBFDr9jyCkvmCwys8cXmbZej55Q17EoNy99hsYDpXiKMKYnJjf7wQHA1TGma",
  "key20": "5pud4biTnxBMFc5Hu2de8ncWA9aaBdvQyrexJ95213CMxWXUDmKwAY9RHQmGoanhmMRMkhwq53LEApLgSNJivcRn",
  "key21": "3Y3RKiRU4bp932vDxdA3sWQuyEv2yPRLc8yS2161Bf1fju7KFH5xEhrpXMw94VBKtUww95gB5Q88Rs9ru5oxsLYc",
  "key22": "3u5pYzu9QmLZQDgR2UQbE91kXPTnmtmU6kq1FWf21HGN7vapk1wzHY3Yif7F8Z1eNZw1yxpbmwG4pZws2pb3hpMw",
  "key23": "4HLPiAywFuVGDhhLaj58Lkrd2egHndMaWud9vDg7DGnsYkTMHsWR1bER4fo2ig79jfH3XuquSRUWiGXQjdKabqr4",
  "key24": "25p9qhMsjYnvVmoRsJ8fZyr99hF518Vxs3ekmGVZuqL2fLidi7gpUwN9vqzFYRoxgaSbh56AaQoDifg46yrS26jw",
  "key25": "3Uovfgh2xpZg19gUu5h7niTKoVUHyvvGaFqGTpJYabe4MqPBMFsvW1GaFK4m7mmUJJLfQJ2FA7u3tTLec9N7udFk",
  "key26": "483e97GtNb1pGNAxQvxRSUpUakPC9Tiown7xWHkroGQt1EtYE8EfTf9QDLHMpjgeTAzXNfb1C19537eDztHguqVK",
  "key27": "3LT98CRPa42v3ccHYrwVKUfurqfVYuZirinbaWmucATZXjcTiaDhx4ZwotFqch7b1yxv87SDMMCzesfMsE8HBAuF",
  "key28": "2Ubn4tNchujhtFb1sQcxzWKJJKNp65JBAzTYg7e9Zio7yi7oAvy6fwVXF3euXqx9Mr1nZwpFVZecMJgJQuLeNd9L"
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

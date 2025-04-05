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
    "PVniAFLkdQ6KqU1v3ZFxRBZYRwAUvCV71FRPoZSRUa9k5CWnHLrbn5jPsix88NhTNjNnpfgvSoRupTWDJQ9467m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iWMmP1THTqfKKHdyxwcuiTTPQWPxbuStgQp6CU61r49ywRPtB5CrYxH3nGMAwSs83rTDa6TiyCjT2Q86txz53iA",
  "key1": "Dkex6SK1SKXvkX5MARyV82bdNmsbnJYMNvT2XRhUERDU8uuTrWY3ge7KnUH9wJAiA5CtqFob1krm1Cz3era3oyp",
  "key2": "3A2Ps8nZUFMJdakHTy97Yex7pqkaBsHAq8sBmTAWtwvda2YVoDrjMnLK5Ng7AJXSjkRQGQED2tSw7GMzxvKQ7XDJ",
  "key3": "4C4ifnVx1fNZ8DCcEqXZM1JjFS9yTycFQNkdi6eeLQ3xWtNU6wmY4XApYfEgvLFFpqjx9amPSE3oabwChTecUZH",
  "key4": "45xTRXXWw8fkHfL8vpzya8SXrQLdpzY8UQcvCNpJpz5cobrnVZR1PUm8WHP8oy3Jh4iwLNRX2dVYQsLcpxU3qU77",
  "key5": "CxBVyKVKBNq37mAmVHtkqKXGsnyM8XMKQFowYqZcdpT6q6PVuWoU8z1epoyxBWKABzrmucnfBVhES81gSQ5QRWd",
  "key6": "3DQwaGMtess6BYNQinPGAANZ29iFF9tfZf7KzEdKhLZSaC4eZprzA5Sqmyxa38bBEGjjvAkiJcF2jSpJUYtpewQi",
  "key7": "5e4jByjaRGjPVTqp1ELW9awTxTRoPus6xSuVZtJBZCxHBgDRRzsReBASvW9CkqaqUUnFAVixa7re5JC9gjVhcfFp",
  "key8": "3U2DiV4qzfbfZDVPZ7GafSRdJb1zyJg7VWxiqdgKubtTeMDjaZAC57ZAgNECFDmM7XhQN74DkiQu9gFpYvz7eDS8",
  "key9": "bNnrYxNCZt3ex3hi9VYCvYGNdeF7WCSPPHj5iSWD9b85XFdhikg96hkc5ZXrnzPqkjBzsCR9xNqUZetg1KjMvHU",
  "key10": "Ddb1KWwC9k6dE1WvsWXAzYcBPPTdX8pqQiSEaLFVaRbPLuttmzZNT8NtMHpp6PK7tDFhovDXA7RkJ96vhAJtDvu",
  "key11": "3j8ymxtgMzYAngu6NDJxPDuMRVMKwx6rfaZKMgtF24zMAcQFtSZqqJxNXVWNNCrNQ2TJaYbi74aJMb18RzxkNUJ",
  "key12": "3VnkgofZPxU2C46YVXa7FiMmaC6qGDYoGLmExziFu5WHsfcaDRZKbLQsAdvVFpVbmWnZSjn64dKDrpESqoGM6ZWW",
  "key13": "2Gc9izfsdF4Qws3UysLm6DRd3Kd6UtdpXpfqvkgQ1i2S7KFT2BijQ7HSG7B9niYGSksgggDvYNHu2DsnFqKZ6Vj9",
  "key14": "2fuVyu6Cz2r6jhhfpMhUMGvSQkcsVP4r46FiPB1gnxYNYwV6sPJM8VMy37Fn622YvXoTpUYhszvAndaW3VBnGtRs",
  "key15": "5ttRWsukXPA5XeXLGPGyv2fzjhvgCWQvYpg5wUdQsuD1pjtHk5HZCxT255dHSepMWamEEozefBLQ5siu6oEuzHpz",
  "key16": "4N3c27QXBKCNuiGS5yYV3PViy6TxizVjoB3bkpji8giMKhkY49zr8brWUwWyVEyHgc2UonVd5X9jTYpFNnCKHbf8",
  "key17": "4gJBkLJMRz5eWRahUBhmPEABjvNsVbeap7QDiMpvFnYespzYcT4z5bnvM6Cjk64GnG2xva3gRWzQkYTLJu5epcAy",
  "key18": "fruZ8VsP2DdRuH5GduVkEdTfEh549JDVbu46nKVTHuTD8AVLYabG287sP1yQZR3jjvPu3dC6mGRXe9r6ZE5zrZw",
  "key19": "hyY96jT3QMTHR4J7kqvCrnTZFY8YDUjiG5wjXgK9KktN2HmWrVejvAAiEXdV44ugvVu6j8dfAFfeQo85hfQq4W4",
  "key20": "4V1tbQ72iZNBGGTTnQmNrEiB7gcGitQeL5mpyvNVucmYvNrRxTVHYqEfuJnEWa4YSQETT6EvVB9HxWo2rGdfuoCb",
  "key21": "2saarprsVUHpys5386oB9i29YMx97KgSuSUt2EkefAgiNeRCKauLZKVxDVYTitKvoyxvkAmnmQu9okiC5tCQju8R",
  "key22": "1pt75Hs61Ra2QFUFa7yyg6tzX1ypbhBjA9iSLw37LnAS9pgvXGiQ3n6CsNd5f83CpgSKW8xEd57iTG4c8bdov2i",
  "key23": "37iMJ9GEXncLqXsBspvf5puQf79hVPfxBEVjs2Bi3ZqEmZwb3DyFUGsUy6mKZhegaC4rj9DWk1V2tHvE1NUdsDss",
  "key24": "3Km3J33UsWnTwDkowp5Ece9ZZnzkdzamfBFip5QrSm7ZCeUqBz8wZkuAjuCjzoLD8SpoPNx8osKKrJNyasYtnLix",
  "key25": "qQY73f9Fo3xnBbnorn2LYTWXK7vXneyfL4C3ewVgkAerkhA8dcgC6exvRypyAeWTvenUhsCc5qeXm4KsaHHuvUj",
  "key26": "4kHBSAHBirDHMcQZDp7QGKQoz8fw6WvxnnR5JGB3eHCZNBhD2xqKuS21UpTLhZ7Wiqsv4eBDV3wAFZS3nz1rYroC",
  "key27": "2e1c7hq6KUHn5jqqFPgj4mvB8UemNtyK2942S3zh2TX9MhRDPPf5DU5bP2DfE4jgM9YMTPMEwdWfE3rKNfAER8Jc",
  "key28": "yjFwWdQN4qAL8n94M7CKGSbSQeSEock7RSwbGmEKYTg7Ypr5RyjYXW9GZibTytQq7VomLBQbL3Npf7NvwjP3Zgt",
  "key29": "3XXwuHeKiTY56Z7dPPMH958wD3oEGRePVosUPxecWeLGMbQ1QVpvQ589T2wVe1VDPakuvHAqTbbiAjri241JnCT5",
  "key30": "2uR5Fbim63RdfYPQgorGyjp5bZBZxhLLKgd9ensT3wmN7ya6UYFK44C5qy5R47562gNvATpLRDyoVn2nNToNavVP",
  "key31": "54e8eHLHrGU9RqadUu32wrt4A3my7f6szjjEeVd7fGruayrmSHLnwuXRQG4RkYdXhDQYo8SiMnbevU4bNEuCgtCs"
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

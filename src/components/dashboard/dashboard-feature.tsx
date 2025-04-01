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
    "3jT8vJh2RCxsJsp4Mk5GwAWC6Yq3SDpEVZcYy6xKWh9zErhnrUafcGKxHSEJ8WeL8BRWKP7NmkMA216AKXC6FKfH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xGdA9a3MJkG3q5E3eg6SwpH4SwuGEv2wvJQELQq25Wjha9QUPPCFnx8feakHDozsBUzEmLy88cARNUwZukyqDgV",
  "key1": "3nvPP96qoG1zn1vibxoJLop1dwaDFySPfvDaKcV8BMU9ix7k1GpehqoQhntWwz4pPNYArrxiboZgU5G9qniBPa8e",
  "key2": "3Nn4u2PYYWdZYbwDSz3HCtyYffYciCXNMHMHXcc4VsyaZSxzbmmFqJco8UDGmoGc5mDxULLxPoG3DVxrZVkZYSjA",
  "key3": "2GiBCVrJSt7R5Qq1QDeD1nsJvZGfE2QLbgUh6nj28YB7vRuY9Ws9VyT4zjgKrcQ8WXD33HtUktsCoWA7kTB3wZN9",
  "key4": "3L9NWLAkyovnd1jUVZic7jFBFDZmWYcXgYqyV8GC3XchZdYqirc9KmTcaLJ1KvfHPPNeziztGf22ptv4SCGmjum9",
  "key5": "32X3yxCf1GQJW5FtGAkbWngKQKXJ9gR89jWXXz4rt5japkw4VVVCx4tXSToo3oWSY2oSZiYwZdEYvu41usdKvTBt",
  "key6": "3MK9mZPCchG99AGrQZNouCKALa4shLxyQaeJyatLE6KEern7LTJLX6JAj7Proi8qCjK88qYvQUFa7peNT4RmypZi",
  "key7": "5y6Te66ZYMQEd2EZesWjvNvQDBwJrxcSSczRnZVk6R5uPMUpPdQqFqc7B7LjEk1gvd2E1HhEdP2YizpaTLHy96Si",
  "key8": "461yiXnFrdT6aYNvtxY86Zjy7APkiEdnNTazACrNG46pku8EMpyH7RJqRx9HrWAvYKLSEQG3DTrqiYZJdskfyBoS",
  "key9": "5qjhbSb81F4fr2E81dxLk1TuLVmcEy2eiHYXKTL6gU2TYbc6cNkF2Cd29u9LjyY6ioyr3qnVeBpiBv9abA2LAC1x",
  "key10": "mreo7xqz7G7acHeHQHwwz6VQSwax59CdkbPkcCmB5uYBWMumsj6FMmV36NHMwVDhF4DwRUoCP1bY88GK45h1rCN",
  "key11": "287ESKxLm1XfaC66zEVsY8m2GxjFUWTEXadsRQSDfRozKrmGLcSfNFJZ4fyizSwmN8zkyuQpDHsKYQj2nGK9Hqhb",
  "key12": "4aQ2S5jGxPN1YtmLUwLc5y6ESerGzG43wZeZm8nSwJTJhgWejPahZipt6KqKCUn3L6pBgGLuSYVvpZGX55H6VHrw",
  "key13": "2Mo6wnn7SGsaQxPn4J7jvBEHfbpzEwMkWQm58HRAELwwnHDbqBT4nsQD43cH8oSxVP9tQJimYNFXRdGsBtBE5CbA",
  "key14": "5UMsg9xBBmBjjgW2mTA6VcZuYthf9wBLejiMYKBUUqmLtfPMvwhC4hFzMSG9pj5TtXi6vM7PpHqQcVtH8q6wpJ8G",
  "key15": "3BiiikxRX8YswgkfGUNwbNUUtjZWLRrpJvyvrXMjo16p7CrXE2UtbxZGMkTqNBxzoF1Mt4xxswf6Cboo5kKFviwb",
  "key16": "5Vd5JD2NwFN1Wn61BzTwxSh6wLttmfmUbKEVJhFiVCmm2oq97KrEHakkoS8GgWvZYNu1jyopipxzrqa9GToWBgaR",
  "key17": "4i7xQ8bYLwSQHrH6ALfBDhhDJae6VJMEJPPNzZXXmKecoiTVqMZBdL4ZgtH1BGZ7AaiUVCnPqTtJ34Hogo38xrw4",
  "key18": "5bfURA2zNQBswC1KnemjNvvCFrknSEiUmMufuQYHeM1rC5C1QcJZWMQi8jUJxjH7kUZFPtVEQi7tSjTsiEqqRrJp",
  "key19": "32SzW2rQrY1zNtA3J4f1yNR7vvphyhh756tsZDNR25CUPpTZN15YAg1VsEQt8C9ATkvTEAh2CMkMaJGj2FMjNRAx",
  "key20": "5JymHnWoWxSBAiw5fJQAkwWeXERkmfpzWEdaYUaAoKFZrQMat3DWkAwch2dfg5Bqcynd2z2QZzoZRwxBX8DYAbkt",
  "key21": "Xeire2MwYPGW1as95Br3sxM8yRgB8G6t4yMf6RApKucRcFd5PyGSspwRguMa8vS4vuNddPmkkDVafaLrcwUVguk",
  "key22": "3jWVCUb3fEGYJDSmYWwGPYW3opndN1rRczkMhBTNamjwdKtpMGo7HME8RhqgWoirURzwMn2AAdJTKVL9brVoUb3u",
  "key23": "ejG5VWgZNWD6bJuXcGBAvKUturPX4fn6hVEMsoTPqFxHvdqQfrgyPE4biREDXM1rsyhTJpsNwfsaKC5pjuryihQ",
  "key24": "2MPbrdRaQ8sDxZExFgnuLCBSRk6pgPDoRbkGnu3nKngXbwyhDXaXCGLwuh1CRk6aQ2Qs3MzAJHTM68jhcBp2s391",
  "key25": "4HL9NsZJyBuHCix3K9BcMrvikR69QYGM9QBWq5qinz5voZ8YtJHs5G9MnXELCHrj7kaMR2qaHXehnfQoeAXj6tGB",
  "key26": "5JCS81vnrhiapBC8FogjQMQVDGkCRXPZbUd9kgQkzVvsCayVWaosDxLwuwLTPjRSv1SWuzqGNcV5txEeX2cjoxgk",
  "key27": "2GcKeE53cPqdU1y4GS5JZvHm9Af7mG3b8x62hNow2aFvRkLMnUN6QXPBmkrdLnNbHjJApKWGdKzaYweY1pUEuDaN",
  "key28": "5gKiZux4RmS2nenPydBp9dBqPXysoFjQFkF9GyEJPo9Yjypv69QWN1a532RKLe8Zq4TjxtYRiiQ6ChMsa4jrTBQw",
  "key29": "28gEisC93KneycrgF5CU9HBzzGrV1XBKSqrbsMwmHNUudcB1ycWBHZvc3Cc1iPGMnZb87npKKyz58awtmkkUujUr",
  "key30": "25tCLEEKinH81SgZMEbEvR2ugFeMudVUc9PayFszvNewh3Ficc53xSQCeffCbsR9aX5KTMEpfCh3p2gwankRpwvk",
  "key31": "31EafVffzMoASqVuWNudy5NHjMF2ZvJ2MckdVaAHUe7RY6sxnetHDvRQNdkEQWn22gnXaYniQj9DB8ttamVWS6Y",
  "key32": "42YSZVyXNEUM2ZowFY3fzBL1vj4KaxKwRvu98irZketQ6sHHVzc1GgEa6dC9cjeJGwr4UvnneMMFH3nT1icAgJMX",
  "key33": "5pkWqp221nYggUssTfqp6DJd3VCziN5uLnaWFrdgwqHJfEmsjPjhePY7Q2dhcvW2WBHMKLopcZc1tTn1PDyA47dC"
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

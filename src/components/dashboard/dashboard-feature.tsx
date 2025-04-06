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
    "2Gv8nya1NSLwRLRsz15AhoctdAnTMKYxb6Zd8Zci4YZuEHG9YFxPK96NUf6ijKqKooosFuXD8ZGLZiLjweF26ZKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJJKVBYaSEuDnoxp7iSE89cRRWpcS5kBzaVptnrNrMfMqW5cUe3QksPdidVfmrrH8SmQL6shYoMkFJdBhGhg8rD",
  "key1": "2boEdoovuzovr8DNSQbqEusbSr6j6SYt4yssDLSjawyqpMYvoGARqcPwCGyHqGRtyPYeS3L4zTXNXcyEJZtprcEc",
  "key2": "57FzyDaYAwFQuWQrCUB84Qvgrd4nAbXBGAFmptPJmidiunoexqUXc3hX6UJyDf2foGf9nJeTNQjKwyj8ZQXAf8kk",
  "key3": "4ikWZzuWGhDfEBcXDaNjqbBzMt2HN3hdiQb8zmCEkR6GHjadAsGheYo6NU1e7BFoPsvypvXyCqaZvDX3UZeTdANx",
  "key4": "5SkMqTmQD5Fj7nMAhLsreUfVD9a8cp42DVDEo7MF41ygjeQqLWc1n97aXWs4yFmNQYpnxduGteFm6veqfbzf17he",
  "key5": "5ZyYmr8oAWJfuuFrmkudX9bSrABKa7a1z6LC74HUJiVNnmFvQMiYWect5Yz7NSWkF6gXckAw3hi4YnzJRMhTYMM2",
  "key6": "3cDFncxdcwX8y9oRY4JTMy3L4prEWnyZZQ6dgCmJiqkiodrwugAE7d5pqySi1467CC7PthNP5pfUyuc4H4cNs5Mu",
  "key7": "32VC9Qgd5sND3qFf36L6vrj8UwiRAt5FVSA4DTuxJptpa3Kgd4JhrdNZ2pKNfoTr9UvJMQqBfRojRNpbn4fxs6cc",
  "key8": "34jNdYPuNMBx5BWuaNKN1pP7L4dpEFmCPefUa4ZjJb4Qnfe4SHwo4aFWcuVgyU9L5NNjX1Nt8uU1n5mXYR7Fn1ZR",
  "key9": "2pBspUuYQKvK6dwxWNmqCgku88vhedDqLLBXbxrT4BtjpGuPQJdPK1NADa3sGSNYkFooTFzHqzPjzgf1bgJjMriC",
  "key10": "3vZpxNui6tbg4qoCzcC9JBUae2NJmWMMUspcNH7sMvvpws4saRou89dbowZnTtRnkMrCMvSef59FMFd6osKsqv7d",
  "key11": "4a6fomvyoLpD3HayhZDrBvLCv6yuqoj2BBzSYin5ziQAubJiUqGGt1KpZ89FCHapiVgg6Y15jLk7FS7RXtScN52h",
  "key12": "49gfQvvhcTiPLqbpHYjPQZ3nJWsnmJJqA7DGLLgRoW3sgfyUeNf3chFnefPXpPreUSUELeT4EDZgdHfLzc9xok4X",
  "key13": "5nUBAvxgJJg11rq4S98mouUi9HmpxoTR3HS4Ld5jZ4Zb89DkPfNzfj422LfQrGvwJH7jEyUdZp9DCoJE1hyqPMBY",
  "key14": "3ffYeXNZaieesVbgE8xdMf7PYgXPG4Cm9TGvrtxYksS6r5fHgyRYc1KPxeGCK4sqgjFF56cZbFMsQ7LZde4LHoer",
  "key15": "3fePuw1r9ADjC97KagFMVGphqKVXZ5aRgnfquNeARJ2N5im44qUh9s4KWpuX6ujcJpqfSGXyJEoXoSVcDTeGGEi9",
  "key16": "5866UwygoT1C441akDJqEhgRv42arkKqDemiwevJ7s4juuAvwFsG1k2pKfmYbmYuC6QfxPXRDrYt4kaPuVX9fUaV",
  "key17": "gSVXr7kNW3NMAQnEVUEnJVtrf2EdRkC2hd1NxPooNjQsqeYiHbZ3vNXDhDAwhSJabDZih1aFU9q5vds5UB44Rws",
  "key18": "2WaTXT2EGpZHYCSwPDpMWrSS9tQo2KNMyv7BLYnYr9GF6gCJLvxERAM56osRsf9scKPF5x3iWLSFGwBeBSbz3qhp",
  "key19": "4P9JF43mabLmVghzwaAcyDLL5jQeptwzmygJYxUCs8Vm9QpPvsovgGiYdQaH7HxftSYd3rGtnm5sH5enHtaPvx7P",
  "key20": "3MuAoq1uLs9mErif264AdCyMRL65JTb7M6DWVHELhWhRukfAv534u7QxgZc4HDq3ujbqYoTQecareUC99spgghkD",
  "key21": "2rW9jpfDGQkndukYqBhEAoxzFB2GoZfaRqbJKXWb1WbdzS1xnjCfGiTWJ7dxdu8mRTKY2EZe8qPNNwnJK8poxPf4",
  "key22": "Rm7bBm6qjiQnQrMryD2xCW6QsCTVpACnSKZaZeaUGh6ccFHD8Q8LBy63qhdfQrtzW2z7rFV2Bak49RENfwf84ig",
  "key23": "3hcpF6GudBT3joFGSmjW3444SemCpNuTy56K4moYqZpWxy6svKv6zsjBqfGVQbdja1XeAHxGduKkR1Hvu13xUB1a",
  "key24": "5MK2FjSjyk9bKVPEuzEX6j9m2x2fNw63YJQHKK1B2CA8XmN59Dnp8ScbKux9gzUh9CjbTDHKDxyAaqCr4KGbqNxF",
  "key25": "3L56TZ4fKSMQ45eLr3XLtBRMgnFKzynLNdHPzbf9k1atZ4bepR3N3o8BRyfi7ZhUqppseB8hedkzCWYstQaxXuc5",
  "key26": "oAJLcKF168EyaG1upFbZ3u98cjcySc9ew8isx4PLytkHExNZ4tDFSEKw545tVXQ4cFUx9EJ3W8jGRuBFEDVQo5a",
  "key27": "4SnjJwdMLibnuvYxpE4yP3bJ79gU7MWfeyiJKQTpPmMotQBDmcSbh6dLDNLWvCFdPZaPuaCM2LjFLchxV9P3QLQV",
  "key28": "7SBNKzcJve5B379SgiFtosYdns12GZ4KFrdNdqHQtY9z3ZkohqgQZAwbWwCxCCPzdm5Wjtq2L9so7ZVYqDzTQL1",
  "key29": "4U2yhwh2vsEsHgVABtyWZvbNKmzKzT7ByaGe61XKPafcJcNocSbne7GwnvBEqqxvkSVgaPWr9biCyyhJPJwgeQSP",
  "key30": "2cRd8ea2HuGzhrPoZdWwRaiJuyQx3b8vSZT4p9EfEe1wpg57of9p6oUKCs45wCmS1tFqoTzzyBrXuRZRDKPw36Mg",
  "key31": "66u7tuzPTCoV4ckiQX16j1SoCrtzTrj3w5UPN5wJe9PABjTH1U4586U7aSTJdqtvFj58sZBVG8wt8jhbvrAsWCPB",
  "key32": "4eBTiJzReVf2jN8bfvQ6TiHULSS96Pi7EA5PLvVxMe6YrNudJCZFtxBUbgw279ZE5ZZVX5RF1M8jb3r2vVuurrEj",
  "key33": "4psErLqNxEtHM6Pxe2sESCjHmMGQ1Fw1S5UB9D4kcUJavS2ne4M5tWRJ4xF6htPWtSup2hDgdmfKuqBVxH55WfC5"
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

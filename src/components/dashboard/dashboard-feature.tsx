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
    "4kVtdCyC3DzioGYBHNBe6BtZ2QUGbqkpgTJNbb5HWRHL8mbaqeXzsLxWocZQrKEZNd2je453V371wMRWxUdPVzZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xqp2LfoL8QTkxoHEMYsjoeg3gJQYq4uPvFztsuUN9Y8Jky75e3priUP2kY2wQGYwapEZu5yamA9aYWiaCwFWabX",
  "key1": "3Ht7k1CYbYbY78ZvkXNpj68xpvVYhc6RVCHUXgUd2VSbHxPnCSYNsNF2L8pNjqXVpBcuZuGpVe37YXNUd1jjd9mN",
  "key2": "d4Ck44vfGCPyfmNw7vUwnChiXTWG3LS1rjHWwDkhoeyHxVBsnq91KwBKqk816rwuXyEgX5rZuyPtu31ZGne894C",
  "key3": "UxeQ8LTQJCJym3ZKiZtXMm9MrCTz8ikdJ8XPsBhnawWNKVX6kXDE14CFWLSkxz5Cz6Cou7Vv4gALKfU4RPWZt4x",
  "key4": "3ZWcoJj7ziVhVNXLgym1wyBhSDveEQGDUX8Pn13d7egxbWH8yPmAP9CuJ2XmtPrNURPjiWUGkDLUUC8Jmobh1YBX",
  "key5": "4fzMe2DMQZ5YbuKAYCGCqYWyiJYPM7qGfVJMq19ZAS3wcamPHNiFZTqxS8oXE5qi7q44GkExN5AFvWHJiuvCtyWE",
  "key6": "3MYAiqBeYu3uTbYL5F5WvkaNJeLGwcShziPjwEUsZU17ug6fgqFZiKbG4nvFYG8b9gnS7kqdSjPKK8fnLjAEe7bM",
  "key7": "3gHbW1t537zi3xULBB7z8vBjVX3bMLhmrVuSs5MDLYUTKaLCbJsQyk32Jco4im1yZGvMY5LQRWKygMFzkkUBV1ep",
  "key8": "4Qw6VCgxqWJdviYvgrN14D1DoLf7DXdxDcj7fvMRwLAcyfpg9AkF5cmnNJoeMyhTxbtPqLVYscGu6xpYeUzhuita",
  "key9": "5SvsS87oteHF8cgWKqoDtatJLZkmv9AFJDrV2yX6kETdWE7RWHU5PE7MmQw1xqt1DcPgttuXJZdCXuSwQPas9MpF",
  "key10": "4vw9hAAp64zrvfkysAyJXMXdBy8dNWMuEUxPhS1in4zwRdhBUT5FWmMJkSVMMUDbospfMffuFapUJAdYU1mQ3Faw",
  "key11": "wbPjgeStSN91dxc8RVvCHbX65GttUeVX8UoU3Lc8bKgnzbHs4i2hh1VXV1UZB3WjBBNWwupSfzuJpknZzdj98oZ",
  "key12": "5YD5AbSqjDSPw6rUBPYqPwEDD72LXtw2ihsjHTWkS2dbjtDtKwUp4fUh64ZZh9TPv8pevSt2RPHbb4x5EWKHk4z4",
  "key13": "4egLD7ZkFQRVSPt5kGUzJEQDPikjGHPDWLthRzGrqJYGa5EXGdYtZRMLMgh9ZduWZ6VFcNpJFr3EBWXsXmvdFoR1",
  "key14": "wUmyiyD1XxvCRQm1ogxiu83gCEegfbSGgpp8R9iiDcXajkHoKJw7C7yvZPLkg5h2voGm6J6UZstVrGxvPTXH2be",
  "key15": "2NEakqNV2nFmSTnypyd752z3saKhJ2AZyVLfS9XzPw8BBWqBHz8Bnv3We4AvSEgT9oiuJXzyTScrhpJaXMC9arJN",
  "key16": "2KvdS8KjZvMR49UiXuVYWh6ZzNJX3kiEUqveXsG56WzyVAAMtjKcsu4XgJwEf8Ca5ac4L1PQyGdTbhG7NrvAVpga",
  "key17": "3kixPLo41avGpm7WeZ4BPTQszeeLs1QDEohGVnEbUxjTMHKHZwXHvrmEbeozmshHQFcQnPGneGutxeke7Y93W8Tu",
  "key18": "4XrRAjzqATSgTzGvRVk1WBiLSq64RDthT1oSWBANkuQWdbKES6hKWLka8W8SgQDtP82gZtnTUDgLDuVBpmqDpps8",
  "key19": "3SCgemGuDHZeKn1P6NkjfCKZGkLVpWjcd8EwP56GF22cx4BnymkwRERMr6q2ocXuZqH3PksxGAZb4oFfT2UDVX4p",
  "key20": "5UK1dVtBTqYRTEq3TURsz9omZSjuE4iAqBkX651mJSEpVcjcQPDALNdJ6TetnGe9kK71kryRtQMpKGgK2UP9mj1B",
  "key21": "2xaT4k7XYJ3F3E66uame1e9c6FeSqCeosWmxfSCYmN8Lx7BLeQSnboJ7PopbVJTCkoPQwJqtVjJWj4bhoZkcvohH",
  "key22": "4RSVcJJLsdzqsTUdv92dLdAzz4gzH1pSPxhu6qhtqypofcto1jvySzGEZHoWA9BfDTKJCrunzs38tiZZNr4JtgkL",
  "key23": "28JeF4Um8NLnRTq3jMouE2VjnTfiBdwVLWWHtz2kPH3uT3t7cfG6nwjSLdye2gW5Cw8esJftzFL33PstTiPZ6HW3",
  "key24": "234CTozEwiwJF7DKzAztP9rjgtf9jaQjTgW9jsgkD67f99EjiFYa1NPZfodFjEnPZWsCaRuttcB6FDXpCsKhwVPd",
  "key25": "ao1y4mZLEu1kRq5JaDnCSggQUMqXAK9ekKCanEkVNtqSsUNeaQ6yZr1hZfmKArZ2iVdvCxZLZeaLBAn9aP1kWQJ",
  "key26": "639xpKRWMHH2bZ5HmxSawGLsZdEPboJqfcZnpK5fZuNoKk2tboAsj8iUoydzJfSWzuHJAsGak7seeF3fpM4m2htL",
  "key27": "3yfWBj5hj4YxdxAoWgJ5Hv34fDTCnNscqTZBVgRz6TxYY3noB1zQx3MZVoHVHZfX2zgsQyTv3VytW6HprXaa6JTm",
  "key28": "42kHCVxvjo4DhzgzCD3bjmghy77FrikQTM12RGdj2RkLvZtX269a7JCk1sEWeRVpjVggcfpmpTJccbTx2xRNrsAt"
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

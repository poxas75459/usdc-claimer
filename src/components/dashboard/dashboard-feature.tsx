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
    "3A9hEDqY2eeCfir3sKUfkieP3VJZMHXSxeehUnfwRe2oHTqfW5r9YGyEQTMmYvThQkBonrGM13zDEUsTQBSBXqhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dD7K2S8Thp7rioYAWCzvV2T9zxsufLG36AdApLS7osR9gG9gE22voFFT4qCj8A1buYg86zuxj6Pp78EnZsXeJnR",
  "key1": "2fpUGkE5p6qcVMMLvxLv7TnkrubhAbRXNZgbC5HRFVdD3ZKjinjHmmhr66EJGzRmAZXagxrpH6uehCSowUDYNhpQ",
  "key2": "2ktLwKvPy8wHf7sSZCh8cXUcWmvq48zjc2uVMwoN15dwGcdfuLBgkCqn7yv7iHdkeHh9FCeJsk7kCh3Li496A2A3",
  "key3": "i4xUVhTPfRoBQxTYMXiTp6VMZMysoAkJUi2Dei8pKMdQwqdijEpSnXUTYnAoGoxbPvdNL4wn5QPTqdcazqRjmTz",
  "key4": "589CqawjY2hZy14XWVn6qDESjhD5SxeCkupQMoroetiprP4FsNXpKvQrdAvvsDTZGEaWBDHHNEVoCTcHjwkwyn8q",
  "key5": "5Ufavbu6kT3uuvtWsqwxdmGnf9Uh9cPCX8SmSWspxR1DYPRaUT6kiZZsWdCLGJENxgXG988RuH8ZpVSYFrcPcZ9E",
  "key6": "2DCjNVSzTzLxxe34fb1UhsJp7P4qF6XjNbTcP6nWhx7QsfSA4hb8eZprreoCEHAV6eK4XSwMm8HnwG8vmBZXFzGL",
  "key7": "3bP5hW2CHxqL2UkJg1qSxFcxSis71nKz5Tg1qNFw1boasNDrSZYXYPoLW5A1zrdErqEsb2ZkRZdmLCqCwfpABrnp",
  "key8": "4VrNPtL6YN19weTQhdT5C7o8KH1AtEnPj1Gydp1HbDjAiJ3dXgbGwWSwrgvL4YSSRcYazViDqLEQqiGyygjm4U21",
  "key9": "3zxisdih8MChZhkFMaovW8VFA4oGNKPFxMyVAgcH6Ctb2M3TLAgZqw8nxppUiX4RMmjNa2h1FHrSf8CCm2BmZSyz",
  "key10": "dg5b4GPHnavddTxjrh6wgpymojFD654tFKyLy6BEwiDUStTioAgmPuq7VJD4ZTKRi4aXeLFHa4VusRxjeh3UxvV",
  "key11": "8fWVe4VPLUZqwwMMSXPYvoApY27uU9sszSyC1TKd7jMeJpCYEb4LrKz5dHcb5hZCJskpDz13HqWRVpVMHC6YZHL",
  "key12": "rS4zkdQzbdNga9iiWL3rkcoVHtpkKqpthqKsKKJZ1wX37WgdH4RLd2mAyonCfAZx9TtW2jqEQuAswp6kD6HVzR7",
  "key13": "2Fkp94zmxBsuriLFh4yhxiCRpHH4Wg67mcHLixULLmK3PcqmXwgmd8GTkqcpdfje96rL9kbEQ2oZnyj5m7B57fHc",
  "key14": "zm93CgDBxCYjGgFFafJSrzNMn4AQNrHRp4uxjeaAidYicLhfG3kqAjgfj4vD8d23ruaSddN61fVrfVjXr1VajHF",
  "key15": "5zhutxePYwAgZyisxAawGksDLdtfcNp7Xep29KXzHB9KhijKRmjSPayn7cvDDaC9HRQeLfALhMb8sMNhybvaJa1o",
  "key16": "4X9c3qwg3X77qti6AWdqZP9FoBnzp3WWCungXyqAZvkc9X9TNuHobZ3jWxU5qV6TW5tLvQD9yQSchfGE5ob13S1P",
  "key17": "4kCtzEGNrY4yqXsMcmtPWibPLVgwsku9QLuLCWbXgJeBgCjTXreBSYyzRnKS5HpmvKMwZZsDQ9cTVFwaysrzpRcr",
  "key18": "2e2krhQ3nvnUgt6LaEmMKTzma38vjZwtWry9nyXEWxHsXmUEad1RdpiUazPGoYguTyxBsbGMk6dYn5JfQwkLHNbF",
  "key19": "63rTDphjaodqYMbS3rDRKpRX9FuVRhDWdiRoMzZsbzeBRZm5QFVn3YHWCH4mX9j9K1ehGJoxgQHkpwqtrERuMUZ7",
  "key20": "5XBii8ZdqrfMKEouKHRMsAzus8kY2A86pk6KFU5rGTpY7g2xqmwFnqPF3MvW2dM6mB8EwKUgeQd4KgVkdNMHYdJW",
  "key21": "5vVbiFX7nDm5DHnyyLgox1W2D44HxsTS8dMzqbSQNVtqBqXEPd6kywVXHqpXKyKZ85fVu5GANKJAMrMzhe1yfFGd",
  "key22": "BoPk192QVJ27akYbM44zXyt2kvyUtUNhdAf2ab3iZG91urKQtXCqi7pdzHQUVAsnSBGQj7emdhjLDhiq1Lb6ffU",
  "key23": "4syo6DyKXhfJpb6BVXFkJ5oYHxjmc4DjLmX9k1zVQYs4mv5fgWdW3h3sdZ1EU1FzD26TbzQNbUittgATwXCuA7hz",
  "key24": "5HJAA5tni3oQfAe4EJARd5Xf8jo7vNgwS5vKvvjnKcqDbWgCGrXCsTUEZkniqE1k5VGYY8PFDzTVmTpHxHeihiM2",
  "key25": "F353uUJ6Q6rMPmTxjJurp6Cw4qaHTMkZWs75YhWA5vniTa9TRHxemWGVkPYxMywQkQXgPRbZahVFo4rEGzeriyu",
  "key26": "3eXpAkLYNZUtSvqfu621zQBa5X5LJNCyH2ENaaHXjd8rtDGtVrdKeVvRp9aZfKqkjqhkL859aTgUjk7EFHSwzR6J",
  "key27": "2x1WFcPGNhDkyPcLJUe9ags1ae1Yf7F45wBbMt2hfbEU4hStqxiQ9sHKSLK6sxHEvCGPZh2ysQMt7zetoC4tVpC2",
  "key28": "2j7ujDmBKhhcuzLY2XbFvvo4TWvSbzPsgK1roTf4Wft7kdboPsUGBRvjWiA46RCokCvtkpbeHs2or22H8ui69pfF",
  "key29": "vbtaSEiWJPfjvVDgxcwyn2eCongZNw1jrRwT3h9FvwSgZnmDL5PyTJLYTx7FVAybbpZcfahbZhbytPnDMLpwRuU",
  "key30": "2wvjggYjKmXjEocivN1R9QBXSHdJfSWXtWSRvDmdUAnhVEa8B7qT6paNkmLyhDE7Y3TjRboMDf8r2bhTCa4XwzDi",
  "key31": "4n1qeXNNLGQ6pCsSQdeCr9wjGD6ievXF7ieyPKZ4s1xUAwuQ2ab1MbtGt2fMJLEv9RVu4bBFCnBeBLRPaKksDp11"
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

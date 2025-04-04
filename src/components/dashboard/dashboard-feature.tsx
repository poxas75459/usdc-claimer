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
    "51iRFeYhZi85yFp4cgXMV3cZPKUHfWJKDHL26qCTrVmnEtTfJjNtgmqKPoPA1E4bxqaYSRmA1d79mcR75M25jhbB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4duidnub57W1rZ8yGnLYaxf9eQgmvMXbRsitNyyPwzWqcEE2TBRCJdHn6jafCmKLouhAY6N2oePpv4zep2jth8gC",
  "key1": "r7NCsbLww8WVm6hknXhVok1wFgkHZHWdKKQbgRrXrNpCcrvBcghV5F8jhGKDAsH7wxhD7TrgvUonKMc98DxaLrC",
  "key2": "2EgJWMU7Jp4NnRphbDsFNwUBRdxNFbuNrDtknbavJJC2BML3cvx6yeePQzmj2uYNrnMpJSqWcYMUVTsmNN272ByZ",
  "key3": "3UyYA8AyURZKy4W2yKWmsykvHzPKtn9dFc39siTTCybGKajc4zr4dUUEWJMNhhf48k2qPBKyMQRupPNDn2SZdKDM",
  "key4": "2YcMwsUNtV8c9o5ADnvoqEpBzif1dmgsnDnteUfLXHAewDTw1SWoymT3G5hSKXQTFLioHXpwJPxYK33qEsvVQvUf",
  "key5": "2v1Yv6CYn5W2kYAho4kccwwpSjNdwwMjQYzKdb52gv6Dj9uLgqzHadGPur8Ac6w4YQKwxiMNArZXzdy7VKhyirNE",
  "key6": "2fmoAzVQqvWQ54ASap7rfytMf6MaA6eKwEc35BuFWyErWLPu7RhhbP1d6sYvnJFaXX82wGgpDyae4SKpNBtFoujf",
  "key7": "2LTnwcbLsm6dcn3MEyS6CC3Z27KSicrMgWzfLDFYspE6ir3JsexCeJpdj3te6zXN8T1ecjPb54uKD2w22ZTSx53b",
  "key8": "3wUA2cbmg2DK7hEkFkjYhhcnuhHE9ikByA7wJYQYw8nf3EftwuXJQ2Csujx8ixvviv7idGWwv2CpZRB9Uef1pRp8",
  "key9": "3e5i91BUkMztoqBW5wTprfMwrco4VvhC72SxcR7VXCizWGKnir3GV7EnQJUobGiWBCt2zctUousuccuGn2KNVwad",
  "key10": "544qBE1eaouQXqfN6fmv6cN9R6aQM2TopV7Eze7oX5iB1JiRQspVVM4i4bcTBTBDc42znLuc4aMM8nuCwU67arv5",
  "key11": "3caNswyPC3hb6a7i5e8ptq7PKW7253HZMJ4wct8tFUUuxRQ6X1TjA7YeKzus4pi8rL8drQHiz1LfLzP66p3FR42q",
  "key12": "2EfFhF64ZnisMxvTkYvu6RZRgjJpGeaje443VFQ5W6zuYcANtypQpf8RPbgYpY1omCgUsiQoE873ZrRCtgkULZd5",
  "key13": "3uSog9VG6p4tViZmWy6cJMDL7wTEJBijBqucURLMDdCZeUdgGRacqHKoC5Fk1hXvo2z1A2TitfA6TPGhxc4vnEny",
  "key14": "4nEeewGweJz6R1Zk9Y461W2n9hvHLA8gm9e6bsVaMJRg9eJwne1UAMnziy445DdiKnXYB19bCzCvMwaMrkhrv1KR",
  "key15": "3yBm7koGGx7MWVyBySXzuDawbLxFEMM5PQNbCHjxmYfUCfW6dGwZBSMGyWMsEzc37sKRaskt3QYGYBHqB9cWSduC",
  "key16": "3tgTFeP6K6ewzHkttbFhrqnQR4wk7N4wvGP7UKeoA5XLmC1QqXiRd82vGTQ3piVR5DztwCeFnCqREgdWPfS8Fgjy",
  "key17": "26z6hMCLZEww6JjMgzSGsazB6dWqC8fgP1pV4uasYoowDo7deURzRtkPjmMjnUeE5rabev7ABcZWbNBwsghT7pCy",
  "key18": "2gLCKziPR5GBodcFh6SK9W5DnUEc6wXmFHfhU9dcVBkJeUnvS77gCARJtcjdxLn8R8K3UrzY78DcChXvBCozUKFo",
  "key19": "5kswm17CcMo3gFn4J7AVR4vtSWgHLwExapzMFXWY2vupBtsGCgWHNuKf3iTRB9pEyf1z4HkZpba6NRgWmsnRHbd9",
  "key20": "NU2TJUGFagZXvFmgjR1aZPsMJMCHCwUSjekoEau61HNirdvDaQZBVX1eijXCEc8b7B2gfhsUSVxLeoAgCH16pNZ",
  "key21": "42rLqF8oBp18gXLEbTkumMhcnSf843tXtoaXU7ixp6dMjJtD2KyuMh219tS1PfQuidNo8uX7KpvWgbHoYj4vcVsA",
  "key22": "2gf28Pdtfr71PqWFfZ8mU4FCyEhhz3Tc76mScRN5R7s1UgjNKHzVFhCjXmBDB9F87XxMngRH5YT3QgEzdPsyb8bR",
  "key23": "4ZeDQLBmm4fTyJiFUbEHJafpbYhERTD8mthnA4pRYaK6GpZFMChghv6D4bnxKXJkVPXD9uaaVsvWddgeNRsoqYcg",
  "key24": "4vNJ8f9dv5HE9Atzh8etqj3f4btayknVaNS2u73hZ6bR68AEJZs83CwV7q7MxRGnVx29hDCV1NkPa2RYUe1FGQEm",
  "key25": "4z1msxfE54rTbA4hfznBN5P1wMsqXycjfazGMmyYkhoVGumUYhHA1dvEi25dN6ikNF8Y8qLFcMiSQW4D5UvdriJT",
  "key26": "59krzPrrLnzgZxW6cFeBE9DuhsprZzZXbGe9ruyAwE4Euh9SMeN4QmmKezcqg2aTfs46BKCftbeyVPMBkx7DfJB4",
  "key27": "3BNBX5XVz9HwgV47XC5m8fwbec7WcwNu1EETCPkGVPugGKVcs59fetAXSKXZQkXiZMqaFgwMY5qVh7ho9ZZ4tfoT",
  "key28": "51LvsQgVsxnxp7PK2C8JMcrSBWyaK55LVUusTV8bZWrhqJ6D8DSEvTiWBNK55qVSbaUwupn7FNpNQm2YLkzpeTDu",
  "key29": "BLKZwfMfDmpyXJGxdVeX2sKGqDhAWRFqVn9tP1M4pMVU7u13N4mgjNGfXSwbVdRRAgzd2GKiPqdsCeCj3HvJQob",
  "key30": "5PF5ZAU45WBVUNSUXAiLW4PqdHcHtQv88dDyjt9qK81g2wUsjBCQqXcfaoLa6JgJv5SMbTXn3FJbmpcLKWM9dvze",
  "key31": "4E5iVv5yvkHugzUuzgy55U1gD3Q31YwSUpCEsBYQxZGwuDCoXvfrbzMHBbSKDLKfA3ZLuz7dkpBfxqjVvmc1ioVC",
  "key32": "21jWeHz24MwiVza8N6ZXd2CVRMHdkvHhoHN4TcCYbk3upQZE29AaACnhNm3VxP99bK8RXiCuk9PAy477Wfr16RA9",
  "key33": "4yqVQB5nA7VeMnmRNDyQ4CyZX2TUHoTH85jyYaE9mZxbkF8M9A8CaaivAhwfEsTuvRwjYYYzSCYA6WWQrxeUJwEA",
  "key34": "AdoE9qqHzipRQjZb3AKeXAY5cDxjE6uGT7d6dhiDongU1ZJyDqsYXZAzjfwu6PCTAB3Enab89bAzTSG9GzHm11k"
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

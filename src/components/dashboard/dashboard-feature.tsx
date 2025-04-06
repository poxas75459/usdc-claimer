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
    "obiMwWGGT1LC8GX1Raxp16LdUhpqGthpg7u6N9JxXML3QRyUCsCnSzohUUqBYJCXmVSdpYRozAahTwe5JuM6KfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzKBscHwXt8LAt6cePivxBJp5CJUvbdA7HEtgw1UXeM3vwrVCcp5SGVRuGRdFYwWaEPksYbRdDNMkMSMPAqm8t2",
  "key1": "3pjfcmVccQoLkZiW34xEmKcQbR1LW8XuJEwCQyecrDu5yU3j8KWESUZYmGtWUS6WmnJg7fafnCB2AQagkpwWVpN6",
  "key2": "5KTYa1DLijSAp6RWqxjvtYC249fax6KY58X6TtzzSZSqKzCErLziNqvVMcvqdnEYVnQWxmBX7qiwXLHgAcep8hZF",
  "key3": "srrv5xo22GkKbp2yQePgheRKj5VhcVpzukjEGPnYrKbediBsLDN4oieUU9EC6j9t2ant8SXuHYz2dE6ZqqRsdL3",
  "key4": "2HzskknYCEQNb1GfHnwyA7ukzELSMmHme5Q1FE1N7w3EB97ACJmhxbZhZuNtetYFUHbZbdLPu3An8HktyQugC3hq",
  "key5": "3pnXWoT7WCMvK8a5tvtQfWdy5KLUGL9JTwfY81V6SH1TfmSG1zdAxbXvo3fVBKwFYB7D1qAfynUcAULFLai3z1jB",
  "key6": "4TaJbp8rSBS4ywH7rsDki9jgwsTGuyhLdQJN27qvHPrCU2oQzquHJKm8B6me6SbK6RFFXV7aVPnpEs4iGXEuKc5c",
  "key7": "62wrd7AsuGrMPQCpV8qA3kJ99KPXQpyS8hDsSV3oTCvmCEp9VfdNPTcTBeMy3wsGTrHjZ95SjKvRGy8VfMh6hiPP",
  "key8": "5q2hCWhEcBz7TqS5ciwdbJq75KsGKWEFb2FKnq5VZy7HNvGWr9AsGNVjFLmVxy7TC3bHyG6Mt9fGMyC7QWdgFgrM",
  "key9": "2AYSvtwb9rAZH1iK1KgGY5ymq99cCdZWX6YiSFs14DqLBTA8HK5bzfAZqMePLv89WeV2A9p3MiDmDimdwzndfx2a",
  "key10": "2syqawhauVygY4eYrB8H9UqW1R9nhHR6EKAJhFUfAisnjr4VHZzZSwSuPCV4N34KaLei3xx6oSDcc3gRTJDCeXVf",
  "key11": "4csqMf6fXV4GZgeT6dfd24RGMwMBJgV5WyikKKJgMinsvQJ3AcP5aMPX6WWu2NWEihqMZpuqurk39Bi6NV9JWHLp",
  "key12": "31or64a3vKnxDW3wvXBBsVSoQo1vRXUuLCMBcCLb2uTXeFARsdeikzYVVJ4oVas5R2cLC5DdcgWVK9mGKAHYizZe",
  "key13": "5E9rNqDnMXFHwNjz4oAyZDPqLUhLhggdn3tmvwEhFjs3q93zskd2p19WM3H8n5EQ1cMG1Y1XDJDTFf4Pju6rB4RV",
  "key14": "3TrXduEKrnAWFpTs9LrrmwWAFQtdmRnvgZfkWscD8gqj64HaSkSjYo3BSNdjwVyVhNhst33yj3vyV6ovpjUrXi7Q",
  "key15": "5fPZtUazT3oTgUsHQhm3bLTXWs4U6UxouwxvKpkMfBNKrKgiDbpS6QZKbXmqiw2LdTVys2she3qVTet8uCgfm6K1",
  "key16": "2dtqxv2NV6tvXFXf5xXZCRFjLj8L5QvtQwQSBVYJG42txckGztTnYXLMxDAVKcng1SapEAvtiJCeD8JQ2vfeYkhE",
  "key17": "3UgsKmJdYmK416d7vMC7Ky8kn1PEQSDwnYFN8yAEdWErrVoGExHXBCW4VvpS8BbiTsSMwEqbmz9WURtN9x4SgWiP",
  "key18": "tSkz54tWKyiW2zSqT58tsJNFQH6rxs2B5KqcvLXjQDB7gdnchmca69AyiwGarwCQLuTPVnscdgSAhuNhLwvXaeo",
  "key19": "278LBmtQG12ffsV7bDbNbjLq68p9KfLa76a9GymatbhEJ54FQMTS5zqcTh5651rTKAT2eqNvEw1Re3Xc4ySt612R",
  "key20": "cqRqEDdGNzsnxSCbsZygpdQgmhiDwntDSP2CgbGEfzzY33qumc81xxUnmwLm9Nez78wr7npCHLuvc2oyrUQH8Bn",
  "key21": "5xeiy7qbxZx1B2mqLRr7YK5tEy9oEbhiZyhiNpCFFzCqTrv9HXc73co1jZ1YZ2VimqBRywAmA2g1z4ddGMSTVk4a",
  "key22": "4LMxTx77UEaCoaXswmBPRo7VjEeyhb4ZtPwcabCxYNEZ8tHd3SLjeukNBw5bWRaQkqW27UEuBmjwZDxPVCvPJEhX",
  "key23": "545o6qszGgM97SEMYtdfBVC6mcYZT9MGxSupKGkfnkj3Tpz7qb8qh1snzbmZ1VUJGf9muXds4z82UsokSQ81TgcT",
  "key24": "5i68TZomzyBgMdNHkcz8mcpHz3vkCbNu4tGQz7V5Bf9ZcLSRtiMoXfDtHoKB3spF8HFToEuHYHiebVy9Hy43Pc6H",
  "key25": "5xnizGhfgXx3DcRUXcRHPFLZQwybG4dGHnPH4etQfA1MbmggPDFa7hVwf5BHbqTpi6rBp2ifV7Zjg1EyThTxqwAP",
  "key26": "2XWxiNnspqz2zqVxyLL8R63UYwE3BtuRMjPqn4AK9jSJyTAWYp3Y2Lmr3u69aeQRFh3ob2YSxbXDtRBmPPwKqvSS",
  "key27": "62EKy3wN1wVVkLS2TN8Ru8KRXrZZghu7UgPKGZPetB48Cw6KYuAEh2PRUZPPaDFZgPKJBbe3DWb4Jzwvv3PaY1t9",
  "key28": "46qZUm3USQtfGFZfDaZa9VPnz5ynHJ2Cj5XB7tFQ7vZeEYyZW2QifgaGxexkGhSy7bPF6Vw9eR9AkD1o76LytdEe",
  "key29": "jUQn8fBeN6VkToJK14oGSJATm4pEX2tAc22r38iC4DktGTQZg3JT3JNSV5ynbvrWPvMK9sZroKK5BDjsGJkAtYk",
  "key30": "3n4Ptv3z9UZQpZDjj8VDVLBc1XvttoEHxMjsNfiNcATmPkgFoNHtkJPnxJqQtWXaNYjvvb679uAz9dVfCZdwye99",
  "key31": "39HH8bdXS3MDN55Ui69eoZQxNqtJR7Fn5Mjqg3fRfm5oJwpj9wnPjPZcUFt2XUBSofpWkCWqq16fXNiZx8pidrs6",
  "key32": "n2cCYijRAuzobrupEWaEKzj9Zd62aeNaGBwsghdJqALtiQsHYw2TF5p5vvvSpP27XmKm9PUD85UsXqKUeMPUrS6",
  "key33": "5eVyVW1fxPEt7vNq2m7T4ePijTH4J3Zs1NsNvRufsLwNrBTycEk2F6goLfLnora7bfR2NpGDyhVPkpqB5a894Buk",
  "key34": "5nKtyiq179BzPVuUKd5ETswUrGExuzsGSsFWVbSqWNZ4AnCGbELNhUd5r9CQBeCvfFJYtJfVhboenkKmJz68bEnF"
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

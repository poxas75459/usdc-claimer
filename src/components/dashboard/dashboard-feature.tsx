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
    "5bHqfwhB5WUtUWGap6bA4aDSKrq3rwpSuuwvP3xjpriVbLkC6as3cj2Eo7CqnKVPWzDsxX79a7NNLxt19pBNVQcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mUtoDTVtr9JzPLFHzE1KgDZYXVoasF9fGQjdVJnevr4iFGmwk5UUmTDMQFLQBYxEV4UvcQdb1WbivUpy4W4gM8F",
  "key1": "4VD6z5FfSm2mf8s8K3DLhpWpQUr2Ub8c1BXAaN2RgPNDxkZNzHh3LkG6wffW9i5dWC8SRUGnYcoHrRn9gqr7xMcm",
  "key2": "2Bn4S1YAGhX2nVSYY7r4ycH9fnJLhT6w25Ki1DmDY4yYXaS8s67YMYPNxuxtWsvADXsPPWpnWa6LXpFYkC7sbHV1",
  "key3": "5WksU8cy6YewkVtxJaYNU7HY1oxUMQZWyRV1vAKnX2jv7woAqjLUw3rx8pPQrKoemAGBaQsM3j9UJSKWcUZMdc1T",
  "key4": "2Ew9Vx83xpcVnVdLRuW7vsewZobA2VYuXuPQ3wEg4sFb2qkL9QB67MnrMJt9xvJGHPQqcCnVFBU3Yzg8wroRd51B",
  "key5": "49qvAvFohK2MYFtM4NXCZSPjANGKZQcyB2wUanNaXFD5aGwpYuG8e91ptRThHKtsVxYGz2As8UoQVPR3ZSQqgXFF",
  "key6": "3kJFXJcpKtBfapNRPBfoJfFyQ4UczRbwvKYf6gHSwtwNZ9gw3mYs2mxoonBmGi4uuex3MWUoYmLNRYHvSKqNqii1",
  "key7": "4CLFhaa8TMZYJdYhsN25xbVz8grynWUbWg3y7Qiq9FJF5S1rEz5tNb6RFrsupd3GYSPnJgrpxALNXswrd2j1KAX",
  "key8": "4NBrT4xbqbvsh9yx8k2HtZFdASXoefrdgaFWrKndbxTjdY8kyxXZupRCGbUXi8VtHk6JKeB9ZxuAQhqQKysbVogX",
  "key9": "2bGfa9m4xavehf4mahMiVSkKLgbo6RoQ8TaoNpVwaMYXc5kcKQfGqrdQdE88pc1Hj1a9ZESSiE6F3hfg5569qn9p",
  "key10": "38Nc6wVAGVGpXV7FyxDWQbW23i4Zmv7Mdh1TXhz6oAMerjHk5YmVBekr2LRejhcNwy1eDyRwk9rBhxVqxmVtLcNP",
  "key11": "35cchUYxBXNgYWVvxV344dHSCW1dU74TDvQ5ZMym3xjVFBR9FXbgHFEHbNiyWsQ8VswkMxpJmn2SNV1REgGJKE78",
  "key12": "FKgapeom2zFYgHhrTvK5RcdKqPfkRmn9k6N5pB3KGkwye1tWNuRbewJ4EXh8hVV1NpN5dskMqi6Svhfw9Rr1oDb",
  "key13": "56XgLe6xvEkb8uFup1hoJ9ueGH6Dh4kxRdtiFT9giC331kqQkEupBN2KraAF2GMA2MDfyjraNzdsXRF5vEJJMa7P",
  "key14": "5z11RgRBU72HHiMo3U4pSSJbNeNt94nRqYae8ZMaysv4QWRv1C1uWcY1JJhtCx6qHNR9gwpkWE9YB9RuhJt92mzp",
  "key15": "BW516pxigMrvoMvaz1JPqSG3syCWtgBpnnzixjsaEivKHUyoRSpAudyHqvVthBJJ7LGBuDpTd4dkbYpytRuxyGv",
  "key16": "5jgwGEvRtErbUGwqTVUdQ3EBkAKw9zoDR8JUkQtDSW7LEcNn2iDCb84u2r6bh3m2cuq1RaJ2BwCDJ2sDWBqmz7Gp",
  "key17": "2Dc66ATULdLmKasYktmY6cKwvuZK4KMBU6cn5d2KjbMT2hJb1PkKRnPYvquFAqsfenmPxX1UyhcDPSeVECRCR6dp",
  "key18": "3fX3C58v2V5xGPzmx5T1wGSd5gCobAunhBMFLM3zNWm7kteCerywbs1zGJDoxzzwY5om3twFPQw4QjhXbemH2h28",
  "key19": "3KvBJB6pASFiBGiUttHxwjkX4MmDAJXGhSyfaFcmTFWpV6WCxhdhQk9wiGMYQujJztpd83xLabASz2TNzDbq6Ciy",
  "key20": "521u1kEMoQVXH6GZU4hp5iBDEKVw5uQ4imYtVcJUBh4h4YzWHQ7r4VVmn2X5zqdfGY5FoBS8qqq8CCGpBTMD8L93",
  "key21": "4MZCSZMYvUpcwDuJ3qX9tuEs4UgCv5UCmXGz8TMSoW2aXymjUgV7csqotpLeT62jMeb1UsrrGqEYSg5QVtadnUQL",
  "key22": "2zfvkmG3P7rej85oKobnozhbEiC23c9PXmLMBa5snRmWq28sdXhKc6GSizHrapvsPoLY6xMtUPLzbQWRA25XvDWD",
  "key23": "645c9L3xgtFVW5M4wNCPggWDrEomjcD11XaUAaVvi7ffVrbjd5Zo7sebFFZfGhbsjKiUWR3fE2XUZSTcMVT2sdeL",
  "key24": "4P1VZDZCoHsWhoQFaamEmwGyN6abzCELtHQC55qTojGDaAP24Uh2RQJdAaQWU1vuJouxuMJo3ePWf89pocn5aPY8",
  "key25": "33jaUwr9QiZekBo17hiscM1FeSYtHSTWNKnt5n9t3GLpeFcfHTCV3G7NuWK6MDfUbYJBNCKkSitwCQKuTkADmhKX",
  "key26": "3yZn6vcpBWD8LmWk9xej3DYTrivJTar6dhGccRaX4D9zv8LRzpgdMsd8w5aUySaiymr3YDzmrvsb8ayjJcr9wgU7",
  "key27": "541SELg3diuf8xNKV1GxYKbZnEvprhrdAc2NRyEhboXZP6YCTKyUMkJcfaSaRwRB8naVo1p37T3PkWSeyqiCTvpP",
  "key28": "3u6e5jNLbjjcDpe3R3LM4S22Kc8yythnx8N4VRYdee5bTQF97kfugj5b19oUbCRiUEYrrxzeDiv85FTsciZ1WGew",
  "key29": "2UexB534fEwg7spS1SG6qGQBNrtwRBGq6rX92ax2pAxHUSM7cKo8WBSMV75jtupXsFgfyDwcSTSXwLngGrndcXmM",
  "key30": "4cpdhSe7S1JpP3b7NAxUUxvv4GetfVu8u3ttk71eU1Gyk77GhQGTa8en1HZnH3AkXPLcSoapcom2GMWZFeiAg6Zq",
  "key31": "5vnmbQoNVomGcJsG2hAGeBQRbNzKvWjQBcu5ST1njPiSSrt7KYJQgiUxV2yN7b6t9ToRC1GJtKX7ahFPPkJjTwZq",
  "key32": "se7vQarWnm8mTajkCSz8rsFRVJUyoE83h6RTWsbaFqGFEz5EwnxDzEbA7n6Ko9akF9JJBXaB4R5tpCnuaxA3Kza",
  "key33": "9qrhM5EaMBnnUQ8vKo2T7fYEw4x3hiPXwPkgw4zA7L5FWcXe8Pe36Miu7ePURKzqu35iyYfP2AahCcsSHCj9Bh1",
  "key34": "2CsCjvqbNUCJ1HnaGGTgqRzeHKmXfxJzZHaDoGNmQ2ACBtFuxnfrGMku7SFTSS4hwgLC7ikdb7B4RrF5UiJTFb67"
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

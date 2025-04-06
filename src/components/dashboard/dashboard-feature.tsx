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
    "54ULhxqGHnWiQHkgzaP7qtpQ7Nq4PGC5mgfexTiLctprs8dZBGaYj7YJwhLNN8ASNviN6SwtrA6CwZWZp9xRehDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CA8uUTMhjCL1BvK97m4wPfjkCwpSRb4jFZZDLyzytYiPJi6UGmisF5DgJgTzVZr1LY8L9hL92vkgZ5i4kgwWEZE",
  "key1": "B6jX8PACb2gGA5SerMnHHvRBkD7KyudpqH6zsQrSBwqVrnfWVH3YR7jgcSfYYav2FU3g6V76tbUWsAnJgahvzSH",
  "key2": "3VaxN1zZuh9tAEjw8gq5UksPyWE4o9oNFsW3DFqRMepGDNcUyt6Lrnm58PABBKXfNEa7QLTWRLj39ZVd6FASfuM5",
  "key3": "27EV7XLFK86DJmzfrDNsceKGGCgeRFnsi7JVMnPD5LWEb7PtxTCRwDuuxtqCziTXoEv7WB2LpqVKvukVEt5FZ39S",
  "key4": "2XW8NGnaMYxyqReznnCZnzXtDU5XcD1SWksFmNC83H5iZmGCiS5ZLAgjmpMSwcQq1wLBMqCyd6LTMyth9gSE45cW",
  "key5": "4cVhgfj3a45PhXWnJLMNZBzMcXYPyFjnya5KkgKR4WHVNmw1ivbpV6k3gKEhYSzRTnQcQrnRpQeEfomaZAhjzZv6",
  "key6": "3Pz3j2ehxhusie4xqbppXn8JUZkA4navAY31mzCTUww53vKMVCidynowm5GEQ5DHy7sAs5p9pDvNwX8PmGzEjVqG",
  "key7": "3FWfZbwtAChumQrSx3x9wTF8WPTZFxyuSDLMhF4n6KEtneD1o9Aw3kdY12Z47oLmPP4BiuMRDBE3gmKF2hyp3ggA",
  "key8": "5TVNjptKphsJvn2923PUJ65aMnAsXRz9fVcQ3quKEoBmd2fpECnJN3uDzPKHvPvsgoj3WyEiTcUGFBgKkCEnU4xN",
  "key9": "25v9wH8Q76cXvQYzUqZXCEm6XnRPZh5VMp3FijZkNLSDKRxpdEpY9JaUmQxVYWteg2DPJgjcUSfxGU2SKtUSES9B",
  "key10": "4TR97BPqaBpbw17ueZTjJErHWze3bVP8zkdUQBrmjs7gwV7my5o8Kdvv7SikcCviRLiSbvqTQ6XGmTMZreVsTzZr",
  "key11": "2cb39o3xDGVwrtW7rQAagqDQuEUrDVhBbw3zieatGptTteR8nfef5X5K3DMmxufbHxPp1qsPy99ePWQZLQTjXHdb",
  "key12": "2GrSRPsJwmw78ngqh8Y7Seky9z6WAiBYvq6rLHWzDNCjw3FVMkWTuRCZsN1NbcRzHPfb3P9MAWJ9qJAqXjLcxPCo",
  "key13": "29Ffo5SgfYq1fsZAeqFth7A6MRPp7JCVLTAEwenp5S4AtQ3bUBMZ1USU587w9SFsssdHmynKHtha2DvyQYiVdJJr",
  "key14": "mTbw18rWRzwhHqjXFAFT4whjmymAdCkLqq2nKcmHQ4SDuM2d4R533fPYCmB2KAyN71yy3Q9MBXJQSsDAUKpoH2G",
  "key15": "66AxPNxQCmXf4egexJHsoMzQY7WwPBWEz2HuQ2wgT6Jki27aTQysG1R1NWhbywk8ydM6r9ATG8dox6H8Rwuxk9JU",
  "key16": "2QxzBCBVCAa4VmiP744xdPgJ1JeB6DXM1uhZgE7TWRpQ1UFrDiP6QCTEzmGAfs6kztzFAg9NStraF3MY48H9Q2fB",
  "key17": "3eGYDQe22hsSCdL3C8kGMgmJ5x75biBo6bro7NPQY76Nq1kszqRNmRtTQMLA8imcSN1CnQJhjzTZzzq1xzFfoxnj",
  "key18": "3krK4hV5F85S1waih5tGBDq5NarCTFKMJJ9G4b3t1KRr6wFNJKDyJMHL6Um44pokNGLEsXfXQqqVzHq5ChGeUVQS",
  "key19": "3LaVS9MP9y9dS2Y9w2egSHn1LqwXiBHFC4acHS3XMRDRUpofB8x5nCRimmqnorjmoJd7G4yN1yBXVsNJ1nkBEW1a",
  "key20": "2WmY2YKkrwktFzxN9FdCZJDd6yuSCNd7WYfE2xKGUJn8eSA3Bhy9wQvypJtVS5zjSsepvNzABqJmcYwQu5eHWMtd",
  "key21": "3R4yTLbyYq9fNnvyVtZeWa4U4bRTf7Ho7zDMjaUtKPh2gUZTusiLFDu1n3SqobrGsysvR8moym21pXfEHB1BNaGK",
  "key22": "63j9sffeqvTTFHxPBgWwRME67tzRy8uXLUtjhLsd5w793koYM8iUCGhik8nu9F3NXAXJUwjH7FWAx7kPNAH184kz",
  "key23": "3r8RVAjXcc11tE5DGAnp6hoVgjJdHxLBM5TQje4p7WHmRSdWZQXo3dhTduMYppKM4qZHHCKZso7ebg1nrRiQcXR8",
  "key24": "5xzfuB1JSCH2hmUjJFR3sJC3R73H5T87cCFfgNryyKutEEuPvcgLVvZjBtTqeaqqfAJtxRg3aJwd1rUR5eLTiSVX",
  "key25": "3MDFWKcGbQ8SKz5958ZD5Vcw5D2uQg9teFKccM9u9UNc6A8e686ytrKJi8igB1mpBVfKKWcMNKuEx9ALseTbUVfR",
  "key26": "tHKkRQwAPTCup2RsngDpuwZknyrFtcFs7QcPuG9VrXkvGX5DM8uSJZeRKmAsQMjgZ73f1NNUwAJ122Lu1B91V5x",
  "key27": "297fbUoXfTk8QPKFkbtv4vPFZLgru2cRnnF4TvVPTTBvGgzy7wEuj5edsSRyQ4uxAp9a4QzB37RhDstU2MFq18hw",
  "key28": "4wReTSMFzCVm7xdBE2WB1hu9z2dQyxZH6tnrdv6EKYiPokujbmnFzmUPehGwfHh6CYukjMud97wpBa3g37GQ9KTZ",
  "key29": "5vwsMr1Mq8Th4DBKKqmBJ4HyVfadE5XdjUyhj43QjLyRDzosoewoCoTUzK2wGty4KwrJSUiz2WEm2iYKia3ztDvq",
  "key30": "4hvYDfVo1sWEewazhgi4KHBuoUnewfD86ksdvd2sNX2xEM7iC57tkJW37TrhxfL1FC5UtZxnudxL3bun2NF7JrZt",
  "key31": "5ndJfpTMH7rpD4q9XgKdEXfeUdstUDxnGFAY4QKLeVk8tRycfrzLhRAw7T4c7QYk7S7iVJNLnh73PKynhqCqEfRK",
  "key32": "2uQLZV7uNcxQEdzYK1T65mommz977ardiN5MMkYnoLgz3Hite7wJuZBTLk1Yi6GP5e1fPSisdojErsmdJNAyMiAu",
  "key33": "38CyR7oFegjAytBgftTMmd3Je6NsuzcoAR8VDp8qXSe6hoVCEkrhVX5TJAtJZXhdACyk42GBNnx8XP8ejVpNr8jn",
  "key34": "31T8sU4rwrLU4cqGVRpcFgjnDTCqjEBjrUg2mXP4va7uQteuFJuKCGr6DuKZFaxEwzRg9a1gPjY9kG3gw7GX3h4j"
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

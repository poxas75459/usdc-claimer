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
    "Ac6x9rKndyAprsa2JobUwkMuY9sCa2GLu8TLx9kxRTM1wvCjs7aT5V2Vi1DYmnPG3ZjmM8cdrvrM54pW3JUqkUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hyRxiwU9oKyxNBb9udcbj6qJTkZsFEg9Hwqc8hjD8uTzy81x8h5Cr7qsmns15xHN5jRjqTsrK229nDG6DDpxX9t",
  "key1": "3X3M1U2ZikZoW37mrY8VDJua6s38oVqNobWqqfkvLRa9NrhKxvWKMbHM7YCTm5sGASmdPFchZMRUmQwZrbkpJXMD",
  "key2": "3MiLzNwMY2mqPHXTrvvYkjBx7eUkmLMQkx4jSpFoywb9xuUM35QQgAvMpaqjYbsb6xta2Ar7Je6MESDRDVCJF485",
  "key3": "2VSuv1Z1EQcr1o5bTtcWictYoYD8GSAvBvAMSA1VfjXxeQmgH6Cy43PWsGY4DgchY88r7o6a5s1vYrxpTHGSaT3W",
  "key4": "4AjoYg6UNj8APE4bEUtEfV3gLwfs9qEYCLmXNC9v46f5W6tftrZUHb7LoUFuSsKUbt5oM47t94Wp6HeT4zA23i2d",
  "key5": "2TCUeuY4tkBBmBauAaRywtLP3fycAYqt7MdEaeYHJFSEXqQBN5pzNHExxN6h6Y9osT7mhjSQ5LDAzR1uBpfkHCCM",
  "key6": "owBFzosp8SjK6suYsZZmTMwCNRWK9GycfXNXYRTbzMhCuftbLdYVWPYa8uTWjExP4UVyzRiQYszz7UC8FmMEPuC",
  "key7": "2C6CzRB1gZEGrmEGXsAHMVZhnnRwLmZKdFsUu13TuwTvEz6krzYGkcDwqmYrkgKouUZKGRiAqA34pZ8jSWHLF5eT",
  "key8": "5CLPXmWjYx4bMEAgQzuKtAD55As1VdSBYGeUnoRDZ7ACFhsoTCY5SfeZBrbfqxTMVcknAzo2B5KGVaodD53iLtmF",
  "key9": "3iqHBMhyLSduNcbSBPjoqXchg2MSEKGf9Zj5soSmjpgyrJ1Zh97xkSbYrTGg7JsR2F5JnkCw3nn4AVwPTLcVAtdA",
  "key10": "5NbrZ4SLDoUY6VZgBaR9sLemDiw8gLGGoynDxkwBgsqfRoNrgccvdjVa6KPyPfLHiHHN3LLr1jhBh4FAfrqdAQ49",
  "key11": "3iFvENLKyHnbm8Hjru1HCw8Hm4dgu6x2LWmdSu6cEvEr654LnPD7q5hJCztMxpvWF4yKYzXrJwf4KaDX3VDQKDBe",
  "key12": "48eztSwmJm2oex8XXheDuFr3ErDZy4vtGiUmm8G3yfKCVaxo88yZfauT9n7PSPKjRadPDVMYuRR2HfTg22uG8W67",
  "key13": "21Vh7YaCS8VT2Kny6K9VDg5GKowf9Yk46zH4Wp7R9w5owAn1rn2twKTkDwdKbwYV7LUD4eWnEqFfaabqXdJnG2sW",
  "key14": "4AvPnNHSWgpEAFEzzdkhCq2FhQxXnUqELYKxx7m2LMAK1mdJ6ADexuNZMk6tF8SgZb8x2Fw7oCENReJnEbxWWXcT",
  "key15": "2g9rTRyB8d8DZkQPCoz2vzxJfJpbFcgTvujF5DBrpUvw11t7S7phc7NFQLmhGR2fuvB4t3mnUSzEfUY9cuBjUc8b",
  "key16": "5NezdUwjtf3szenbWVBhAXgLtmqcsg1s97PGpjP4nwbRPeMLxReChVBhGCTrT6QU5tR3j9nET9W9aFqaj7BDMorD",
  "key17": "3tFUeaAXjwofGRmBD1fsR3bG8gY3CoFprtinThTJgmZuEk9dUiMkitrHYheGYKtH9QDgfmFt1XVxywCRSEGGK4KA",
  "key18": "5VyKdyinrmEU3hWsYquC6KfP12D5FfT4aJ4XaBMVCptn93TthNe7xxigjCsTUv8pEhqWpAvECvQFRoYHAMbrGo6K",
  "key19": "VEzefQhhZyuZfeggEnT2bZaB3dPCNPaPgkWFWxHoAXas9UtoxcJeePsPQkVLf3sCvmC2ofHRvQeDrb28RGdozwi",
  "key20": "3H7nFwpZKe2fejSZuZchYqEUy7nBLBgsWjZZkgWKapUifSkGKnZ46x2RBpQohPbyUwKycqdE117wb5BCEHmRfqa4",
  "key21": "2Z1Jh5vgZvqtNisMzcFift69jdRPViRMNJNKztLr1pcvxFFTeyb7PNGLxZQ32ZXa1aRqgXtNb4Uf1HjwstSqF6tk",
  "key22": "3FPBfhUY5VRnXcwzHuNdn124eXupNw4619G6f48oBHPDCaTw1uebnxhzPeHexKpQXS8AgMsmzyQN1ZtAKzU5C7NF",
  "key23": "5ykrQwirjjroLffUEJWXKCsnwcVa16i1TwVbHdG8N6aAxV4tZWaD6cD5JPkKe9TfWoivPfXv4XAB8jbAYVsjYXsK",
  "key24": "3LBHrGXH5R15euqBF974C1hUZCQLYNrSp6q9o8pa2rddgv3ocbu9VAimx4x53M4kJ7RVq9vuAmGh3eiaHfy6stt3",
  "key25": "3kwcVGiL4RgdAXjkRd9JUACFf34kQVwsewive4btWDSxcMb7ckYw8jgpSZg8PXCwjjDVb3drw9xNE2y6shskTqzD",
  "key26": "5QUu6vxSKKJqGXPVXxsuF1kG57r5fCbvZsarbax1o8ipjcpE6KqnDzXdeUinzZWazwxWs5FpssFmVytx8o4SbDNf",
  "key27": "3FtitLBpa7tcXprJWyykpnydWFUY2JBFuT4miPhGXrcarjN9AxC1TmftiEdWG8SjqytQgsM6Ew5K9XXcTSjABcYc",
  "key28": "62ZzdjujH5waTyucb4WA3QiniP9uSkwTXKMTxoWFxNDiBC3hwu59j6rWYWkEJrXecwxpy1bwdwdqD8J48RZXWLgC",
  "key29": "eaX9V23p2a1VAGpkFVjLSYZW4LkMmP1kqAsTr22NaESSD7Gx9YebrWxgcshR9qseeMqQLtbnv6ES9U3K3dTH2dS",
  "key30": "4kAUZ8zveiAFFq6xvby5NpugxvPxT8aNgqs2U6BfNN6ufrBYt5tv7dUy9k3Bfxx9vUbima4HYvgYJLLamD5PCHVd",
  "key31": "pRiXEHPxTZKwdiSJeZPRLGHfHHf2wJAf4P5n9rFuN4yvmv3R1yio9JXVZAKydqdqatjyKjGFQQWfgcgR6jZF38V",
  "key32": "WnF26vPaSLQmtZsFXAt9btSL2jWwzWi6Eyot2EEbWVvdQwBUZUGFrXZDnb6B5i9iNsfiEi5ZYV1E6fNwkKNazJe",
  "key33": "4pSVMU9zfkUDZvu5VWYZKNmKUjpMW8uAkfE9yKMpktGtTiLMT2FwJdQpc43FEpY82jg1rti1om7hUapJoUsKGDiH",
  "key34": "38RA9fqx6hbu36z9gCViN5EG2N9UusjyeftcRCaPPeY6teRnCYBFsgDp5tQMC7yhDw2YGKw1um5abX1ya9occJNE",
  "key35": "33AGTirwLrP86tBxnwgc5EmMcSf1oZg7hSNPdbHs42ebRMYBdbULyqvXNUpthpXfuK9FqUr7zeWcJrWh85zfuQ49",
  "key36": "5MP4CyfVidYYXmJpRmqy3Y3NSHjoRS5a5mT8avW7msj5vSEhRLnsjyFMDASzcxHZFsNY17PKmtXVaLxedkPBmN8r",
  "key37": "Pc8i1ihT3KjVokow5FzfRuTwX8zr9cuSLoam2N7Pz4oF2pmsS9TmSBofTq6yTgkeyBiHfNidEqPPGK6owgny2hj",
  "key38": "55ZK8BKE5ppdrxFPxTrcg4BSpX5YPYoJozhsUUyDv3U5RB7K62dn3vwycuc5dEEPMThB1k6ZzZYQG8iqRJRCeUmP",
  "key39": "2SFHscxPZmWFVZUEZwVcdHJLt1suqrzvLarLkaPiza3pSG9Y9ATb9kj5dWAEuhLdnDXZyG9cTRvJ3WRzEptNhdms",
  "key40": "5HPXJ39z22bfqKEWcAxbNByHn6E8uXw3hsxBcCgGVsTdEH96gAhFKkBFAC2bhPDpABbG2E8AbZpw8ZBHuPHXuuC4",
  "key41": "4QCzaK4u7WJDrvBknsoDYJ98LJeEV3hzW7MA1i7kgrvg7obj3Po8bi7Mb9Hfh2hvmzfJhRgxUUXUN9CCKsDiDBNN",
  "key42": "4QSeKxoKVLdtDDQi9ze4rX6sxZfCPT7u7ChMVQs3j6VDJ1wkAhRtkdYFUoVsnhey4bYauMUujxu5f2BctGUm3ayC",
  "key43": "2kcWwXZnQWKXVsbpGwSKWCtZQP7EvPHN2tWWGLazR12mQJupp4Rmp32akZCM8oJt6G87hmj8mCz5wSegwwFU1tUB",
  "key44": "5FDLtzwLSvPHroStyBj43rxfV2KBTvwTxvViu6Cj7cVAEpQkB3v1mQa8Raw13pF2XKAHb1ukUnphyFzmhXFNLnAB"
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

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
    "3u9jWj3qHsgQVusQt8dAbNNNXDgeJAsDCb7THVPs66kdtvkaGBsguEZzRzwutv5UCYV48MTXeCgiYWWnUZcneNqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "626w6ccUP5U2ArEbttbjhdSG3bgFUUF9GnFWJbC2PKE38DTQPXEihteUMz2fvVm3ZnmpiELJCN62TiKD8AFT5rzP",
  "key1": "23EMqpfUjoXoLDoxuhk1ymY6tFqnAdA1cDCT9uCFd578ZyAbpmoDMFbgfkEbXBfrcjHVMk8qEHS7YqzXFaa21neT",
  "key2": "3thEb6G38oDJpFkdzJbGenZ4p6inrDHZNCNHbSrrqdnHD2gVMJkxV8urxirkPUp5NyVCWtRk73CxXqcp6o5is4dU",
  "key3": "VyCboFzuPaRqRRhyBUDpLTAUsWFdUUeDynFay4vpMATiMeXTAzfzHTDCzuwVWn48xSZqZiNegcMMR9APVjTpM4x",
  "key4": "5rmLZw5GSh589GYTLd6eVa5BxQHKLSjYTaPb6PWHPsuudr5QLKnd1eUTnaW5KeriYV63B27uXPS8p3TLvCSDp5qf",
  "key5": "K6iwrZWDKSC1JMVZpzQ4wipTpwpEjzqfF1dPqv4sktFFoyChf5UHSvT2xGXEg4dwDa3BuaJCjBtfPytftz41DLb",
  "key6": "42j6LAztHFXhJHMBEkEJnhR73fvXjkMBUutmADUYGGMV5vFXVt9S8TUSnAzMQCdXt3WXHW6ksMgCqAxffc2acRsL",
  "key7": "3TMbdJxErDwhSHf4p8V8Y7eYgMHLu5XNkuHdavAKohva9zbhqWgH7qmY8qSxZKz7NdKFpJbsXVdCX9XXNv9C6sxV",
  "key8": "2sKG8YHLxZU68vsvcBp54jLpgtE77sdEsDVuFbpgLfREKTSVP928wzscxTW3s8oqjvBGEH5US7wNBYSKXwWrgavZ",
  "key9": "4TsNXTFKng2DkD94LSkNhX1a4MTSC5sk3qxNvL1zRfCvLR8xtC4FbnRVkjjCaC5WPXBLvk4fhNRtNHqbL5TVcZaR",
  "key10": "37Mi2QQcYYFHRt32wyP3Fh18qP2nGqMGmdrnoJDXoz6Zh7BQeZrpGxQfaNRfgBPniqgpgx5yHEEukDksxBGmZ7pF",
  "key11": "3wwPX9Hzj5XACQ7sYyh8UY4MiYHyznFbhQoS8o5NrS9dEg1uRkmMSXWBeqaXgwUCnDCDXeQCofCMpWLyUAsEJxAA",
  "key12": "2gsuo9DdUnhEAffPGVpEwBRZHxT8dGUjFVaqskXgsXjkGhsoavC2MJrTEN9vQ9jd884tYFCgXpMkRFRF5bCDejaw",
  "key13": "yQ6U8hiWZtDRjwuA8NH1Qk8tt2VJnjSgtjHsiuC5HtHg9yxZH6cLe6VdXuE9QddeXVP9YVFDmzxwTHBczTkTXMR",
  "key14": "3AkyxBbCghJeVzb7rMDGvCFndYyntzUgSjCorMPmG7tZaW99A9YUczk1xvsm9Ef9nSdnaF8XHGW3E7m8LLYUPfvY",
  "key15": "44w76Csh3JcK3inbA26XLrjzagxyk4aJh3ypE4yT9cThphtdVTavAVXM1cUGj6Qe8ChCRAs2xoqv6G5GknNWAY3W",
  "key16": "5pTHZqszoBj6huLyKbqPD5UYk6x4eUvN27gTfSH7sFjB5g5roKsK9iTzbu3kpbGPK3usNzQqdqXLj8pSSVFpWe7Y",
  "key17": "2VwiUXnmrxa7zuamdCNq9FUhxW9SdYJT4n5TrtUoCTY69Uwm9K2erc45XyBNSbqCgLsRvLGf72aXZEZSNrWJzAtb",
  "key18": "62KkHXbF6gBWUVUKEFKHWSKoSgGbyj2bwU5Jhh3mxkXAJQRuE67EiCEJ6GGPYrTCbgvDMpQQBqxBs72UDSALLVzp",
  "key19": "4GkfbiWDuvLqg57gnswsa9dKoHtEPiFbv1pJYg2Zs3Z3ZKsn89tkD3JW6Fc2Qe8e9aTu7MqF788axR5rW5YwiMT5",
  "key20": "5AmVXMThphhw6gwuVbkUjHmXLGhfp9gmdjbWAHWGgyaMWeWRbjzLgGDSZu46vBTzvCKMVfrbWViZQM64zNC3vFPE",
  "key21": "2jzVVUKzXgSVVjFZZ8sbmN5BpEy1AtvmRe9hp7FCfVXEZCWeiLv6oYjE9xdefCnpSfee6xnmgkuZmJ91ZaxPnnMt",
  "key22": "62HjMK3tCSJ6bNuRYv4SREuKsDqxCjni1g9iP3uH7dSG2WzQShovxUAbr2Wo7oyVoMNGmyDH3VZoWroxGpfZQu7j",
  "key23": "4urFZrvajg3H6tysfAB3TrM2DCANDoBNp21cvhfhgqVPXpRkXrSswYwAtiaFrCqQ29KiaqkfYwEk8FYbr88mx3ef",
  "key24": "4Qmpq9hVwrefK2UMZY2FBTNkzdSnEyAgjynG91kkuY9KDxPLU12iXEziDpJnwYFXFuQuv63sJ6LhZTwSh9YZ7un3",
  "key25": "2s9prVy4DP4veQVxWU6rymQBtNEpGzqFrpDtKKXBEqT2enVNQMnd7r3Hw71UAMBH1gtYzaB3ufxEpa1hLRLLaawT",
  "key26": "5aKRUKfMSymwnkcsYDLBu3NmPUp6TArpxhXwoSGGBDbCAjbxm39WpXPBcfbDrsuXfdZ29tJrVjBfLoNybWx6qhyL",
  "key27": "2MWG7qUKTjnZDM39cSx3RccL2xJEgC1PFyMMxAsQJ8ZC8DdxZEr3ZxZfd8RGipuZe2dP43QFqeAkWCJ5XMqGiohD",
  "key28": "4skfVAtJ3ND7yHsHf2SQM17iv8WctiGKo6RpaeFKTrGnFbvdAUrb8AhWsUvHtReFWMxgKZ9fFNeejnCP9VaQ8HDK",
  "key29": "2572mnquS8LJVWQybcrZjADYzhTSuWY1gTjYToywFS8urfEiuJB5CXqRwW299CcMDxQJroriwYwYRcMDFp24mvCk",
  "key30": "28YPzQGBpXhekwk32R8h4DzwmECLqpSsySMi1hYMkJnkqtb6ZowpwDuxVpHdLNw2SjvR9J1vPDPSva4wMaCDKHpG"
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

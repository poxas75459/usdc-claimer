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
    "2rDEANVwotLLQbWVCw8XpY5bNxHrpDKgSWQuxmhS1eJk5ugvgH93enRqk8Qp2REkzat8YGFGmHJPYjXReXYZKyk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Us8ajzJ6keWA42ohbpDfcB61gyW9w9jUpjYZ1Qc4bDFhjLgyJRDXnUM2p6VqojZAP5qW7LDVze7VFoGeJuoEtUh",
  "key1": "3227ByvPcaxqmVHTtK3m2jfyETdxZXJZ9xfFYXW1KXsZdAxDZXQhKdibkPzMPykFoYfpsFaLaLYj3fTNh7XzR6C3",
  "key2": "3ro4qC4hVLNM5WCSjkiucUd4ZFbNHPzVVWd7uTLWMRnzqw1HJ4cX1K9peB6FPQEq832vEnjMLsQ2tCpPYDeS9yw2",
  "key3": "2Ner7wPts3NFXgfkwesW8TJeMyeH9RH1XXNBpP58biNgQcm5i1DLbkwRVLRV32WuF4KZk3cNTZRU6qCP6XdeWVhN",
  "key4": "4YJRvgCzGnvdwMnkKddYZm9jvhsQzrLEydkfzoDfDzS5dqhQACES5LZy3WaVXSVZA5cnfpo6pCNo4S4KFpruP9ah",
  "key5": "fTJTuKkfCorCYiQxbZgR9GqNZu7Ya8vjTkvVjQRtwFfhznT9yHVPF2uMd9G2nrGk8fE5aR7rbA5vYEwpq1tRRHu",
  "key6": "4zASnMereKzKoQwmVse9kcGXwg1rGC466YP9agsuqMtkE1qCNLWaWnPKY9TxU8yfTCtrgY5usk9tmDuVU7BRwCNF",
  "key7": "5aooLadCZowsibpgaLZrLZBCo35zmdVYiYKrKXVfzDXqjjqpqs3gTUmjRcx2GPwPHsQs9tq6FfFMLKQshsqSKK7b",
  "key8": "37coGbHur9JNv4fWD3UcYemyAWukSB6h3BSTs65jrdS6RSED6xBRaJnwfRCoAZiz9oN6GRrWJiKgKzWbxZCv2TVz",
  "key9": "4yptTSKW2HvybZVkrQ1goGGPKpc5Zfj54wRwLDRh6AviL264X2qRTSKpixmMrCPc6xWGLCcXxznZuPEMgmFuKw1U",
  "key10": "2JiiAac7SSEjXqeS5zBEtkCS4UnTRh8AZttPCDaSV2PBKyc5AXFDoKALyZ8LLKDTAydiCCRFcCjXSQRDbZdNwwmA",
  "key11": "3MuQFVg86nVHZBvmAuVcFgoq3SKu4yWapZSHjaBwnW1WxL67fxkJyzR3Xm8EiAyg6SnTRWux5R3F7T4W8d19Xcd",
  "key12": "yJXxyRqmGMvVj7QuWMPtjjZaE3LckwFUUUHoS6FkNHkuYRQFbCEibBvJjjTwB6EBqvqXrnjMqVHTRyK1W8upzEh",
  "key13": "5356QeQ1L4vwuVyEPNQAE6R2WwbFCxe3pT3t8Y8FWzStk5CUApNKqKNpk3ZabhtvfQUi4ywYTmfXMqrDa3wb5b1Q",
  "key14": "33j1DgCAF3je3NvQjKVnVvbd5ZknfJNUW827vhDxULR1VKY28DwAYvqenUYrAtUHJFEaY83gHByZnzbc8MVayehL",
  "key15": "WvCQiwTL1bC3vt75bvYhJoPLJ391EsXV3wwKV7pTvpe3Ypbktf7iBZLUHs4vdefaYYBDPeZRcuhsPLdERgjTmfP",
  "key16": "2dkv6poPzWvTZSpqfuVoBXDCQUHBzuWxLZ1AprM4XTrpCTCWJrpUmzDjs5W5sdSES54iJDNqAnzAMwzPvxD8aDMU",
  "key17": "4CHr6zceWHD29zHsx8fStHWiHio7joQHfuu8TG88gSfJh6pH8ffJCMSkoUtmpV7LXcCpeC8NeUS6HNyL4ifkbXqC",
  "key18": "dkguhXvz7Tr7J8kg6LBhRkUZfn9HcPByG7HSSjScipjGp5mYGtBYJNWq1udcFDM1GPTa9VzyazX45sjhxjz6hJN",
  "key19": "c849ub7vfvMmoGVUKDEqvb6kw2RL6HHGt2CJUUC79XJMwrZDQ1ieJvM2ydtZMoH7doAMjEB7CkLco5nRbES1hVr",
  "key20": "55XT4ejYSHRftG8iv9sEBPaVfXzHYg1SsdwY8QamPYY4e7rRd4KYdqg9hAcQQoq3N2jmnxEfF2qf2392sCFM61ab",
  "key21": "2LWYtVwdDppUEEwPpXbWAG4JCo7tfCFg4D3wMQULEbaG5zbXsDwpvYwPTRV64JjUFxXRssZL18MhQ64sWEWXtQuZ",
  "key22": "kQSM6P9G7kCKTw56PdRUEDfSca1vsRHG4xLvpjtR3a16THPZXajgQnsK26Z1jV28LK8aQ4piejkJAbb6mc2643e",
  "key23": "5TU3C8diFqXhUHrZMCvbJT7P59PqWdorJ46WDrCZST2QD3xtVtkraCgKG8q9zbqQdu7ctY2keECZCU25GmErEEj8",
  "key24": "26JphogzvrRo94d5cR4dXtXMvhJH7XsSAv6VDJHKRZv7b3nbqhkmaciPVxeumnh7NShq7wFfU3T2uceKNxSbonpC",
  "key25": "2dkFJVzXiFJYV3q4TadrKdjinfhTwXPkzUYUdcnqQ6Se4neQtqLirXFrJH7M7NBB1K3Db2WvHMsHZYFYfq38acFb",
  "key26": "4h1y25DK4VqzmH1jqdHF29hvEcsGurmKjYiRT98J13KgBgHjZKFVSPSMBJVa4Yx4zz7uyVjDYN2CyZ5yheuasDLE",
  "key27": "59n2PEor36hnZrqdLFYqW78nVUnVe6UMLJz3e5wPHeFa8CtdiNsz4HiGJ6SgiL4p2qy7yzucLVeXKzporLRr6iHK",
  "key28": "44bQwWjFXMb1SdiiiUC9eMNPqZ11d8Ca6PTvvWD69FXbxFTfAuQXrsG7XzNwEv6fR7eDoYjusMGQ7iYgDqSY4buy",
  "key29": "rXF3bBi31u757yrCXMp2wsdM8pAKBk8Qo6KbBQAkM1WQB34rD16mCHdRLq9WFF7ZhCBLDbionUCTgcFU8ppVn6Z",
  "key30": "8VZ8SLWCN9PdVrifjznuoBaXazzJQknsuWiwU1GDnrtp6TwbiJLjrTmrjqaUtNNvMbAUvJEmK8zAhsbLZUVty74"
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

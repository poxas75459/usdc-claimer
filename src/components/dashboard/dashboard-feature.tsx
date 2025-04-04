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
    "2ULsztfa6QiB83c2waJSzehQWw9H5JHfaUFjZrkJdPfBDpffVY5NfxQugomYv5iqPRaAvHnz9YudiEVbw3zVi3ha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2DfScto7yPrNNcS8BAQb7C9n5bVDgasDoohF4XEWDAczj4r8VB5sCzhvsp5eHZUUGuEa9R4eWDound7JgvcAnb",
  "key1": "4UQow62xjBzGVRH1j7idvwJc19DrFF8rQpg1SS3sABBCvo5U3HUfUKi17ReT9utPpthxMfN7UG8T6ena3pohcEgt",
  "key2": "4gZtx5BZQbjdoShH6w4KKmb9UpHo8N8hk7fCkBfkNGVTBAfXPhNgZkrMu2ivWdtbcaox8Gy8FResK8Zhupai4TH",
  "key3": "3eo2RPmwi9SrubyD8Dv7anANprXbCJvP9fbUmA5UcJ2ZXGVZEmJEhSYRGDRVf5DfGEa6fAn5uDc6yzqKGiyc3hLh",
  "key4": "dou7VQdoYzQANAo4rokE36V1LjCgn3irqkM4ajywuZB5GWtUrnsDNtLebqmsnVDthzTujPRsmL2Ev9uaERpH4Gb",
  "key5": "1C6NWivyWd2takY48cDDZ1DTypCyrds6c7GbnJRMox5w35x7WVdM5vZUFcyfiGEi9a1Le24Av9WE38AGKbdyQAu",
  "key6": "MErzC8fQtJQ2W2adU5wpXnAyrSvJkcBss7kX8WqRPbENUtdjprb89mucQYJhWxkFq3h4D4ifb8V4d3rCaM3ZDgB",
  "key7": "58usR32JyA3rTbPoZS9YX6D6sxdqJLW9dZmKTeiXyxZDgcSvGvVgUvQriz8J6hT3yMdJFnyzogQQgaYFQjegP9CN",
  "key8": "3zP7BPcjPBE4PmqfmjVKrNvSEFYVXSVbrLtK2LYMD6KXLD4yepUerzPjsuhdrXKGppSjCXrJbzpJEiARUkXoLsje",
  "key9": "5DN95XEhCDXMdLgbVSpZhHbAX87oBMuJbNGMR1G1B5VPWwbhf7HCpBTAuEDwMYWgLorM9DdAp6CKUe4j2CREB62J",
  "key10": "5ytaSNmbExHmwdfMMjFbqZ9HvSU4njTMSgnyfiXeaKMCPJF32sqvtD2hFJhVBh1rGmACRNvfUTaGUJ85fQR8KnC",
  "key11": "AddyLYKP5gspT78pjzsHhAqynYrYjnLQ4HbLLdBdHzW62AFGGBmozd5r59tVvQ5BfiPmjwFZyyKC3pTAyG33G55",
  "key12": "Q5ZKfGH5fbEDcMVCiQ8bNa8SaCoXURqrpB59oHEGAwjak15rxeKz3q4pHbT7dgjNww9orKd5T35HqWxQnVgByX4",
  "key13": "5BZBXN8DCePGSiH2egwUUeLQY98nmYEnVPSePsswpLB5zZwcqWHe5yqWSGHXpgy5Wj7ZrW9wi4mXVj5kWQSNAE78",
  "key14": "5TugvRn3pC1dw6PsD8qzXh7bxHa9riLXfrCLExRUSRGEhcP5MZwvskpCRSPynm54PiqumVDEGxono6VC4sXc5kmU",
  "key15": "4CGWaDLjNPwYtjxjo4iBzEi3GVmhEcNYocrEddjHn5mdevKqoAswbXTmqgHF2AWKa3mJSE23vXieBAKgKT6Psisx",
  "key16": "4hXpQ2gALBYgwvm6CkBF3KSxJUmZbWJueRFpV7qFAL268N8gAtLQ9GgVYzmwEY5wSasvbZHCJFGErNHQqFFZ7FGD",
  "key17": "2U9A51sGZFMk9V793YgfqgMnZ5XkzgREN7bWHJiS3F2NQPdQVxuoArJxsdvQG88zfbpz5AgJoB3gPT2QtqA8V2Bf",
  "key18": "4p4F2F6gDrWNFcLm3R5skzbvuvLxJ6qkise32FV3bq3G6KMqi9n7gQUnYFK3pSibLBzpvh16E7KzBoYyspzQ1LMJ",
  "key19": "3Jxg9ZLQmCRvhQb9vxcHC9eLNz8Ke9RAU3WDF1tmphC64KH5mhHD4oaw32iYmGQNE5fqEA6Cx6cQzPqC4h29WBWK",
  "key20": "rHP8XgDwbXxvmcoxYJXouPVs5qE59e3f4ja2gN3nAtvRu8DZoqGjNMNDbqbhs5D6Skg83YUuAZ8RMJjaauUsXxL",
  "key21": "5LuT66uUhvAQ8ZMtUnKS5Xsb6adr5gA6mLSf67wNCkPrSJj6fYxAJwj41Qk96usW8toFaMeompgYUhMJajWBTGao",
  "key22": "2oVY79ptvNur5ndKnc9YiYmcNgSAhQiSsECZomEdzztboZPTFsQNAuge1woGMoCv5pNBRTwph2T1LZVUsscBPHr5",
  "key23": "4BokGrfrA3vnnEXc8yAu5KqGCJHHW84nfae8svTaaVaLs3Y6N27zKcLiVWG9csvBPZ3CWByenS8A4zNSaY2xyJdr",
  "key24": "4cPa5RTcysCMNPouycwxN5GDCxHN4idj6GNU6PwWrqCohu2HnRTDrBaspk3JbF2ygNRdCjGL1fCphxAt5s6C2fpJ",
  "key25": "3pSGzHA3y7rwnoBNuSatAgEo4B8oafhGMVqUThBM7a9FhymWZbLb3kP3Xe4g9L3h8y6Lb11kzMP1BGeYCJsMzuBW",
  "key26": "56YXGpNhjZJVsCScRLnm72Jjy9KBJaTpfpNFBf5ypXFQXgHCLrc83V4LFLXtGCzBDZGyDYjuMHAj1aMLYm4ZTD8b",
  "key27": "64gZN1UCqm551oTtYGgKmJccdkxrakdCjHu1JcgF63nBh3XGhsFuQeHo2uozxKoANimkGgJFUFVchXWSCXqF2tg9",
  "key28": "3iquCTSnGxoRxbZzUzyKjk2afc6ZA8cu6VAU36xSBxnXYyNAwnN6davH9LP6ASsudxvyzrUjNF1a8scLZAXo68Q4",
  "key29": "66gx9hfFt1ihzNB2MAJAcUYpyE6P5ZFivf31Y1F2xgUUT4cXFJxwEcY6fgJfB7rbPNbHZMSNMcwFwBeH3To73vWd",
  "key30": "24DrcLqSRQStnWj3a9GW2WiA8jnW8SD6yqDpSNdBPwpVnSwUEMyjjXSUwfdXHqu3tM3AHKdMgJuJ93dgAb2V9sEK"
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

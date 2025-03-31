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
    "4i59uh9ygL6pXBd6Bvk6vTxk29xPjTTTKqLfdD2FNn3JLLKTJhBX1okCyR3iafRKDyTdafhiMXGqoXex7wyfiGme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rogPRqhpTcwWZSUSXwWcpheooTgxzSex8tAtPzBWmi7nu6QpjyHtKxdBjDWx1Ka1LnaQ19HgWhwna8VsrffUCJX",
  "key1": "5wbgFgcHhk3vAYgEVw4F6eRsxBnG2zJLMeuHRVoiYReubaJRUkAwNGGsVgZnpbhC3y2C2KYj5vvBsyMixBRYuhy8",
  "key2": "2r11cCcsNvWu1QBmyWonLKn1hX1gfirCNzWLTxpP7gUuFyvVnfrGR6Z6qpRBRq77ZsmPpYo5tre8HJUpr7zsm56a",
  "key3": "T54YbvqrNeXxYoDWRH2FGFMUBiKM3HFaRGkzCYFKc2RhyAvy38dLKdn7ck5PVU5kRuCbDV6FJHxSZiB2ZjDpJYx",
  "key4": "3jpXBqtRJEcu3m92fJvDDnRoeEeazZuGCFT4EQWqhyYuZgSzBXXEdcSvUwAcVFMf3U67YnUdnkAF3Wx1HFmFV1w5",
  "key5": "cwUphApJjZbW7bJh4FUVbotv2uaRHXyZCx2Dcq5TXE7GvwUNQu6NB57yc4CwKKBk3j5ZthVSGFr7Jev5H2VqhoV",
  "key6": "2Ht7MwiT24janAKxCfiYMjL7N6KFstD99i14p4Fxs47LD73e5TEdYM9vWKMafQnrFhAGpVh26hvvhbHAkZHMAn2y",
  "key7": "2qAbnaT3MPLw6DNp8uDa2xZ3W96iZwrgzs4ve9pieaRB9bzfsakdhCL6vP3Ug112msJyUvptT1T5SJmRdbPcgpV4",
  "key8": "4BH4mp4McubJKBPaSwP4yFXwqbtMsMTf4EfcPJZ1gMJvGJ2D8aHHYbdU9ncshE19kRaTMvY6ewgZShWPkpQVxmMp",
  "key9": "4UPgLp1cgmzhCuELaLQBHF3JicnBiqnnwEM7j6woqkc1wucJ6fmb8AaFiJ9g2aLnL6An5P8cQfJTtj9J18SYw7bN",
  "key10": "41eWcTTVGs7L9kypyveiZUeyiNxhwrgyhMvuTsjwkUKFC2WmDhGLd6qH5giTgmNZW8ZVNftXST4mz7MF4Wvzu5P5",
  "key11": "NdvJJYbydUBpTrZhRR7gN6s8iyvi7y4iG8BzCk5ckp2XjR9q6MGGoEkcUFu9PQTBucSDDMsdYq4N3YsZSvyMuSW",
  "key12": "5493jCRDQC6oM4xoC4DnM8EYaHwKW9CURP8Vp7VEGt19JBmssGC9Gv4omUziWPzSi9YgqoMNryAcqqAipnkBq9Dn",
  "key13": "2dCoAoJ3v68PJHDR2eZ18RE8wu6yKTixUKnhtA1VSyRwx7Qk5vmUS9r3BkKtVgiKCJjsJyL19eXiUvE766arovf5",
  "key14": "4dbzsJkxR79PQ3Xuzwxpa3EFn76BDDSGYWK15pJSAGfrwYPTnfXvUBDDbG728psfWpmLfBW6XJd9vyCqwA9Cfvav",
  "key15": "3g6Uaotsy7ev2x1g4P9v8KWBptH6547udS9nRje7SHCcckhHQ42yV6EekgLGC5Y383PyjVLckTjRvADw6C7MuMpy",
  "key16": "4kUdJfcoLcbcajH6iAyYtskWkutEHCmY8EoJ4y5oQjRq2ZFaHHm4boD948VhFE8rq6uHsbuURiojW7kgyeQ7PZMi",
  "key17": "3RG8ENeZ9boUMxc3b1w1aaYMWPMhCSfuqmZx9PwuYiyg9a8G5z4q5JkN1z4AF3YbtptKUDGVf3kgxwakEFNBFULt",
  "key18": "2kQXUG6rJNHpmTJUS2UooJoFz46EKykUUNSj5DPkwzfZiR7X8wYGNdokS1mUJMxAiTd5xVTbL9pk5JFvFGy3Zpac",
  "key19": "617xFz43WpH7o1BQWrRjwpEfDj18Q6GMzgQ4KB9ZSPw6XaxiTVrSXWdS75iAJ73K1hPCpJXZT3P1vX8ewaYJzxWK",
  "key20": "4DNZoFkRmvZ6V8gG88kuotM7QbfgC4HS6mzKwe4W6cta6WrPLAmoUkgQxgnDRPERbiTiWa569HU3edd8VLdxPUQn",
  "key21": "33o3yKWMmGDNbWojebCbQo6o2bshzPBffbum2jxRLbZUQKmoRK2rr4hi9Uekhu72yvBieLWQF5FFv3ewqU1kMc9Y",
  "key22": "5zPkYoaXK5v7RqwPw86xZtkbNEhgBULQ8tPGWgCCDsUBYmEkAmi2cjtpQ65FCg9iY1YjZtMLiFCPPY2PCYsb6mYN",
  "key23": "28GGgrFdjaySQid5uQDKrEmGKjJstzAJK98soaaNpJ4AZJhoarjE8EBMfenTYhHvMSayP9psQMN6fe12kFEMF4q9",
  "key24": "Aif8h6EoLBTVpEZFBk39XBk8nW3L4gtBG72oRZSpbGJ54SBrH6hzybYSCL3fgqaNMhsMAHBa3Lrb7JCowPaUNtV"
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

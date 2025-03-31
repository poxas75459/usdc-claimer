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
    "3LWNdYeqGd3j5pHE9rGB8YLGjqowLpzqTyPJxSw5XXnC4wtyi7CrRgyGW41ejoGqgzSX6sfdee5MtK63VTA5HiWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29JMxXkCzkHBQBoVRnEAFSrKwVGGbp3xPgQddA7Lgm6XSBDLoYfPBKajxLkZTykgH9EMQMznqT1T9S9jf2mzH2gZ",
  "key1": "cqsmTws9KBRuWha5ePU7QP3m28aJnmTCA8PeaQeaX3xoityMsmrkNUbbihjEfupEJNdf3HLQf2qvPsEXEWijXGG",
  "key2": "4FyDCKfQxHSb44Q5eHXKjJ3pECrKJKAc8XFhDVYFH5PVayCND69YLu6quFWCyr5jsDPFHYxkcPZFEQyU66s11xJ1",
  "key3": "5PDw9xETVsspEY8Bqgjpz4GSuWpbWtEaCHsz7koNHYWsYQjDJsyrDSEvxP6Vb8rQ46fXDmrCpSHyqKrecpZWVZa3",
  "key4": "67UqR2iydr2d6WFDH8EikhC2AvKj8RjEwX4qU8oT3F2trR5biKiiBTm2kfkPAQ9LtBhUKgtNSEKoLBMCHp5Z6tDW",
  "key5": "38Ht1yjfA24NCsE8ABnEa9WD51nqoH71gRAZmyFevMHL8dxzLGgfGkFS8SfaXvsnXqQRHqCjjZXJ6p5goAxK9w5F",
  "key6": "4WJWkN9a1Smp8TgzGeryqBopc2yPaMEmFXwiWAB8AmUdyEKDe8xViEj3ScX2Dxrj6uWUqrzkyuyQPS5BA1x61Fxu",
  "key7": "5uZ4eequqV92SQEsEBRY2sHjop1Xh5H7f2G86Ff7MTksq5LRspVPHeQaYnVPWpHzW3rLqnqk7qNsC5CqsBT4D2dS",
  "key8": "3VPMTYQ8raajK7zRrUmFGWoByHQBCJR99NKn7xoFWxf9VZcHBDK2qd8vbF2QxsWo86tXT8iSxaBpvuKbw7e2XNhi",
  "key9": "4Vcit56TeoYY3aLc37jRornTLuYt381zEcv6TadbivUky7HHXhUBMMkQbMvsH8mWzQbFwYKN3ZqaM3Kx6KmAMvuT",
  "key10": "3A969mexDqo1qx3wQ2eLY8VjipijbSNnMtgGARgnRYoJ5nmqMMH7kncm4dyT94RnrCc4spcfwvCXgzokS2F74ReQ",
  "key11": "2RbqT9dpNtsh1LFbPA2VA1i6mkEmEn1JNZv5ad9xkLZPbCERvNiQKjCoV1Qj2xDyi8VCgRUWWzGjLGCnQtqY75Hz",
  "key12": "25d2DVCTFdK4SdeC7cGuRBoCFtG5jare8p8FtCpogfhgLVAx8FMAPb4mHNrRb2Mfn2s1WKwtc5KNv7M5a6BamfgN",
  "key13": "eaV3dfHvN3qAgyhNmjoFHeDGsg7pLpao4EErBxeLQ4pZAWhuJxnbzzmwfeHvVjnd8vCLtbpMdbeNo35cNfuVZwz",
  "key14": "3CCJGkMGu7gaCFbMsZxTcFaTxmHHi25mYqYx41FmXWKdxXBoagjKhA1EEAmp5J2aptwGZoEiks9WZ1QMqV86rSFz",
  "key15": "jcZ7S2BYP77JBoEA4u7mZVT9rF3BmC86CP7V5ouxTAzA66QEQaAfNHyuZ3rvFCs9gmty4HPaBpQDfnNLysUxRJ8",
  "key16": "5vja22UPi4DEmYKNCCZY1syfZXd4TJr3dcTqi9RGUGWZ1A5MMTVtYAqheyYtqkLYVfvwykhPx7dPsfrL4vVR9Ud4",
  "key17": "3AZsf47SAX6knbXUFG3UPrMJgCuXjixztUHuA7wKYyMLAzRiF5gLGi6unmQoz6E7k1pnYMMXgM3A6PG8xXiEADYq",
  "key18": "477FoVpPYTYAa3Lqj9uW7JbovCHuWuQD8xbBBYj72P5uy6U8hQgrs1orFVkoJo3fvywqrFQqGEJ2Ztag8T61Gmp1",
  "key19": "5jBZ8fyCZcoA5NGWQgbHEBq1BTEmgSdBN1WufsahLUFsaq6DnBDyYV7hQg75qkqy8KjijhUF9smvf88QPgcRgZgL",
  "key20": "2CAF6yWsrybWyPYcaSq5diwGy7MoTfpGeNu68ZeRa5xUmH4ruc9q9pzGLNsnoBa7Q29yFzRwDDZbpxi5uFrwYKBv",
  "key21": "5ykWtZA14jANRFd4JrzASUAdteXY3T9Ct8YwAVZtQH36mL9CnoWfuqNhMRJEVkSfxEdS1z9KJVEMZGK1vmn4TkT1",
  "key22": "51xPqA6f8HaM2kGPbWAWbf3uMam8VRuM3f6gS8JyUrqymTo1994wnc6r8FZoL6G2wDSLuw9TWXDky4Buok6c5WXF",
  "key23": "Pvzd7epXKC3hgcAAeFBq85D9Y95SAuQPpJB56fELEP8DixY7APziWPnjkbwxDMXCu6YeBYMKkgc3bnkrRNtwTAf",
  "key24": "55uyZhKWSjyLcr9iKG1TuY8MzETcjF88TNjuGPg5ZjjNceNgnFAxesbARRAQrsEgFDLnPtxqpcrV92YYPoTCc7sY"
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

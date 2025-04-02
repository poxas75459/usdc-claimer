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
    "4FgJ7yvJLzu5av1Pn22V6CZDhc7zBb6MaRqDDwybxXwykSw4VeNFVDDdP2wKAoHtZbDMdtVKMNnv6h8BGtEnSbz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L43CmKrGbqejHHLkx7GaNduFPZm3qTrMfdw5utFNKEC8ppMs4HQjdFAkqkSdfuwBhKoAUtjWmtFd9H4eqMPQrML",
  "key1": "4gZ5f94Qz1y8iZtAFscDfve8P5fcRcsj4C1hXgeu8Q9mi4cFRv2Y76XXxBqXbuch1EtqTrCGGsGk4qrmexWgMSuG",
  "key2": "64go8SoGYSMv1tN9fkjA78nwvyt4VHgUXgxrY19RgNCTkYdxoVxKcyGYyuZG2HH9iK2oKcMXrE7ZkAeztEP4kfdQ",
  "key3": "4tvAd5TBmh32wpf3GXZXfivjDeQ8HGMW657QTuemvrPYP8cC2R6v62higFsxs692bgMYvUuUcbk2KvGfcPJy8LpY",
  "key4": "NeX6ttkDR4GvZyvQEwKnqtpX2ADMz2AH2d6rDJcQxTocnqXsNUFnewHU2BrcPJif4inCmtVHqcGCYHupCjE6Qgb",
  "key5": "V5KULVos54MqWJCkdDSkdNx8XxGXaggajcGLDX5EhBDhNEanzYbUiqRP42NEPcHm4XXEgBGs39EXVMhJY12o4tm",
  "key6": "3w1hoxwQ1TDWT7biLL1LJrTBAMixbVU6Zf945ucXx9ZMco3C64CRHjWD7XQ1JpLtFvZTusQQxinPCjCsWtgXuQKA",
  "key7": "3AyMY4cUesTKkDXvPd2aKnZ67QkX52nCmLNPAYJLL2neAEMQW38GcRnm8BN3tPkKfSVxD9WNpFomxCxXgSAxGrmS",
  "key8": "4zV58BYx9EQH7ZCW1K8fqvYGbR9CvWA9uHGSMz8EyL3XNjvNtQovSjR2CPABDuXivyUD5aNvET2t2EPXTXiEBeJN",
  "key9": "3SDNS9VAUXgyvYdUvqdA5PKmSwqBCmqXxRpZp5k11X68jJ6C19zbuphBX97U96fZVyTaKcZHbw3BRxwwEsqFfoMY",
  "key10": "5nFypD9QeHbuQjoBGH8EDrU8DB8sPW7MKWQsymt6c8wDb9e4nCWcFyturPm9AJqtna29jUsMnfTnW7CdqE2TNZBD",
  "key11": "yGaShkMWhYxHkqdUMSLs8TjJC6txVSodVY57c1tfbjhbfDMv924w2fUbT9aoadQRbLHxeZTsdLhT1Xb6DpN4qQs",
  "key12": "3iVTTmSWw3U84CTWqYHfmiLJ7kVGXz4rYaAQ82sayAunhQwHZUcpRPHWRDsW4p8Rs7USS7aXhe1P1RcUVVDxoCx",
  "key13": "2J62aaVGuTzP9pZyegP7hEG1eUWchT24Gkc2qCkR4GX7GyK4DYCdR8gVgnGSTns4R3xNARGbm8AryRrAYoUvJXJq",
  "key14": "3weEoCzPn1UjmiftyV7GEVHLdHMpRt6ut2sNmCWDoZRPtbFUFs6RC2BQGAWn8MMNRHAyg3KLUVTJSDPs4h9WFsLh",
  "key15": "3R1NmTUmSB2VFm8cDVsnCpynTnqdgTLdc64n5VxT5qTWb5Jqi9KvnM8yD9UjEyKzkdtRUzyVzsHVn6wb3bG6DJBK",
  "key16": "4pT41bKNk9Uu8gCgRnLiKdWYmUrn8HdYd37SYNgVMEbSC3XZhZzadPrKtYv2B4LEkyU1Va3WfbPCw7XPeEKesgQk",
  "key17": "3bFqtf3rwzrpiXWJJSo4qhiBnELgQaX5Zz7eTHuBQuZUEBSetFnturGHuxYDewSmZh5D6dWAJQ69A5wEwzc5RDvq",
  "key18": "2fdmHzhTo19GZf39PUFQw4SPS7wK8Hn6GJBcSV5rXuhQ7gKrEcSbA6qTP5evfnLA2M4Bm3FyAKRA7gkUTaVasDpt",
  "key19": "2ZejNSrcHUEkcSfX4Sta5ZNrLEvKXaHe1Be7R8DcGrRzt4pZFddLbcwV9tWF8EFSzHKZYB4WbTAXdntH2sG8X33a",
  "key20": "n3fuKrk6poKPcPjvVWUuWrXKx4WLrUi4bFEDFenkRXWCBpewjbUKUkcx7TCsWB787AhG5tr5D8aHJGR4iv3yniM",
  "key21": "2CjhUFxsSk9WwKgGM1pbftEKuNWvXv8aLdywHRfGc8UGwzhLGRQLtKK6NB8HRMypG7qtesYZoxLwRHTZbxGaC5WT",
  "key22": "4NGJiHmKkKdNG46Ch6y7FA4h5np7c5ixSsTR8rn33mCyM88c96V2unwL5ayreJLMpoiYYyaV7Gw4GFK9yT9qxAWr",
  "key23": "3LN7uv75CYadigXzeD1P4rj2JCqeh6HLeRhVcvEv4zmq4V6Loe9dksAMHUxvJphGyyWCPEEcX7CvYsGKdqkgbSeB",
  "key24": "3M5KHc4DNQQggLXLEEdmEqX3pWLTsgYkso56Fgt1JGzsNfztaXGhRoRbbaYJbD6sGh8wWKeMPkgWsiXjFZNFG7QA",
  "key25": "U92NswSEP6mVKBsvLDSAz3hx7e5nRbsyaJVFkTCGi1E9zt6GmWxYq6iNYZGXdsLUraMbp7YS5bvuULK1U1C9f6p",
  "key26": "4j925rtduEtgHkKi86Z4auESdxV4gx4jLkVw8hGa9dPSwF5wM2DczyC44hJAdo6qKsoBZSYRuLeina6md2F79ecc",
  "key27": "giXH3jrWMTnJrzoudHL9UV3zp9dhacnhSDVUkNNo4jWuYUrNfviQRvE9kcSCStpmgYcdqKSDaEVexTWkLoTn8i4",
  "key28": "AoWdNWpVPszzZN74N1yEg7WnvPKkHiBn2U45RXGf2NcSHrE2hfngjRQ69FJfW2rduYNhskrVTTrEGE3fAkLULcT",
  "key29": "4dNuR4gxSVFUw4hFxTeqEoZrwNkHTg4hTudikDrBDCxp6nWYKDvPKxkk2M79rrbAYoik62Umd4QGg3C6x7d1FtxZ",
  "key30": "MHSoDHsAPkf52m8b6AUeCRE5kJaBQHmVQrxgv82ckJNbUU6ypRs4x8tQdgXh8d5oSvMMxmTeUFtVV2DhKAXV562",
  "key31": "d2vaqhmQpE3aYRHyXivq7BwX6gBD1jTyp9eEZApRVzpQLVFw1SpmmFys64RPavFbrbRrH1cQqDL93DarFrDeH2S"
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

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
    "2KX21qs8PxNJj9fdZK5aTQwgWnfSqZi1VVe8cTthxqbzzNbjwwAohTr5ggbpt8z6qqgnswgdD6VcuEEAkwyJ24eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Zn6QCVJyZqV4DtnKXFBTiGjYu7NxtrHutqJA3Y57mwsekibLNvBgSiVY2CUnQc9Rh3JDGZQEHhhDT8D89Fk9wE",
  "key1": "4hnJsy9gjjuHK5RtQNeArnRs8HxFBPRAgneArW1GFziPhJqF5MVHeGDKrCVnNVuGsCSdyF76jH9jwpzivKb16w1N",
  "key2": "5qJ1nUXCjz8HFxyAZoXqSGaaaU4mST5uVWyNWFbrbncFP5VV21fznefZfamjTxrCZmyxPXtGM4JjRBedPRhqCJ4U",
  "key3": "4mu1xMfRWifU4bnXPUfpEiXDBAu5xSayvvNDoaCRhC9WCXXoong8jJ7iQ2vcCaaWeW8HPjdd8ZfHHhmxNxBXoEx6",
  "key4": "3EfPNBgUX8RQWGfcvr5rSp8PiKkau2gG7L4nZr4ighr3boAmecuWaZFwersU5p3fFinsHEQkuk11X3x7t3rCLSVD",
  "key5": "5JkFVAfyCYTAk8VdMX5JLCNwfoycMyiU9r4sxkndE9JSmXz6Z58CUt95RTQ21UJFJhxXpJvLoLKWKw1HUAhHDoFq",
  "key6": "3iCtuEmH6zAtyxtzv2vxto4nqumYfYwLw2rUgeNTwgpKpuHKRhe5fVtqgsX5Ap1oHbU14iByepQGFfVvBEoDhN4F",
  "key7": "37aa9uBvSXAiYeYfUS48tHnUdhZmenrMsbPDeDARbjhrvTFzLGD9CVciXoykPxV4mHn4FYE3y1nZ5LYUemCM5Jbs",
  "key8": "4YyC11b8fHeeAZPDQ2MrrqSCejFwr7W4oYZbkpSGYYB6hdyqt3bcP4Uwjomxm1BF2hS8QDSyAEYwQkpTU2ZMBkLv",
  "key9": "5yWJY64nhQDcJyZK7X5r9iBA7z4iK93igPCacs91ehChmWjTjYDMyrkcMkPxVFX4AGSXcNrP2ty6v5Yvwd3ZpT9U",
  "key10": "28B9YfXm6AZpyykjDns9uTAehGTn1Y9iisniDLUn2HqKh7JjGBbLDRW9jnBH1nTL5CvVMs8GtndZ7vJvNftCiNRe",
  "key11": "66SAmD7xn9PbNUJqeGKDDjCk8vavnZWre3Nmu62PMNTyKqc7gzr9ZoFSKsfwmns4GfXRtQJQDdG68sPDfkj39L4H",
  "key12": "5N3uXfuU6tMdXKGhwUcP9MPydtnVF3FJ4ookUaDEg9t6KRc51vUYvZu4c2VFfcqvu3aVZzP5nPHdtUBFWRP5AcDK",
  "key13": "2s9XWPbxuAJS7ZA6WphzAazgLz2L85HKKA7JLrMsUkBmTM9VhgSkZ8ukPnoWwh1PYAVYg5bbwFQHodf7cb7vwq33",
  "key14": "gzL9UbRLRXuFUiBUMoLoTE2LNUQ6u6tCAK3QfmruZ3u8eXVDex2aDQdTP1QtBc4czxF9MvHNNnPYc3WG5h7xnB1",
  "key15": "3z8bhXdATcHFevVidvkzKM9gfJGL2y42dYqc9UtgKcV4c1Hvsx9KXnnLV6o77x9EyLYFDqvDxueUwzAE3qbFPH9d",
  "key16": "QNhxk1RWTKiqmSAGHevR155bJAixmmXbpECp7aPEdfUn5M222ffzyHRdq9JCxj6qXyEQZHRsSjXSRs8LLTVUFQf",
  "key17": "5W2S8oQq7mjjng7meiv66CWWMC35LjRAB34GeJknse1WukzsJE2fYGn9Fv5xzsAhoaHbVwWVaR3TQBXZyWgdNdeD",
  "key18": "5qDYpacSd5CxCoiQZvrtUL6orzjy85nEEMVHX88WsWhAFFmnXbpDR8oeaJ5QuQBp3ZmHiiwmUx4596xmUAjgpApn",
  "key19": "37Ke8pXoXUDkZxxPwtPXEEnvLSUwPmf9z3XYyaLf6TjqiQEEhdoTVpc3hrkkX2bGaeH4WYLko7khcwR5vUF27jq9",
  "key20": "tEXe3cVS7bY88YfnnYrwo1oYQo6NHenoM5nEvpTxMagSahSA3aAkWrLP6yaU9AAnXstZPYgeTvjp2KMVvc1CAGW",
  "key21": "4cvKhZ9gVfbMMuw2zjJhK4CcfJYK6okyzwkbiSFb75ewcSt5Exah5dRhcFKsPFEfqrFvTyEEn4NeCqhu7SuZpw9h",
  "key22": "5rCPmEc6m6xMwgj9yXQj4dvSoKUPJeYPSki6WuugdctzcgXnAuHxwn9nbHZfbtPPkpdtF4Xky2jkxUjmTXQn8JNo",
  "key23": "2v1qvtPUKAurbmztXPNrzDYAWrZ4NsbvFPsMMxE8xZsNfbQenL77o2ybBHBYoHnFACVWh2ux8dKowujrSDsgeihv",
  "key24": "2CrjoxRFnXb6M3Q2Ht6hhhkKTrBsaZThCnu4EtD1wjpedJZ3XbT8JozuxDsg4nLjv3dwJtnVd5Fddo7Zkn4PfgqB"
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

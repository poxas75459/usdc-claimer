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
    "5Aq5HzbxGXiifRnU6RyM6RqkF6MG2ajWoHdvz6SK4PK2pS1BRVY7ZP71evoAu7n6itdTyc7j2EZ2KmsZajsVjk2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tEgfYxeVWKkRPTN8iSQCQvABH4mnBVGhfhA8JnaWHmPMAa1sTq3iYk1h51TPNDkMTb5g5XyyyfLuvZJhPSomUSb",
  "key1": "3kpjh32KrM67opMW6Tmy22MmEL1Fi3TFKBhAa2MdSjow17afQJqKnkJ595gazLDWMUBiTaaW4ncZ53R4QFkhc5xf",
  "key2": "5nyPnyBypbL1Bcu52fQnpRfAxoJbXNoWMwqaZSPppaRxXd7NZj3E4SiZT1hPTQKQsuXvXTt5ZMMvXDU2Qw2X9SDE",
  "key3": "552ZCbCKH8BGJdyXGmXPPFseQwDim1d3364tsRsgtBNezCWomDazyf7mfAnhWeEaBdHpHE2u1EjaywvQxr9Ymx4P",
  "key4": "4wMRRyP2peUGrkXzKRS9wKJjCgTT8E2bQePCLXpwJda91kTsBqvxBz279pMfLRaFrW121dGqwpD9xhtrvs27i2xf",
  "key5": "2AfVnwX3MKp9eSvRwzGXsYjKo8fohygSs4ZF9XhRbzjs3CGFxuAC1P2gTUU1ij5XJCGg5tkktq1KrWzTsFG6KWy5",
  "key6": "LsyqXNdUisaJ9LyTvPDBJWxurm52CTwY6cYRG7mVofqNEQaE1LZzCNrEfqdtHkUCU3FybgxWLvpuVj6DYqrs5dx",
  "key7": "41vgSWrefWs9s6mMQLm1u6eBfkyHSc3cWpYxxuzvq1HGatkZ5qXxnKaMFdpRKRcKEFFkeYPAvUTc3meMRDVpiEtF",
  "key8": "28NxhQaaK11yPic96hLRKiuWXpypP7erhR4pvYKZcWi8o9bFVftUBjVk7a8Z7qhq8T61QgEiow7PvVXkvUzjJBZD",
  "key9": "3eHTR3FvdMxiegHvNCz4By2M6R2VcihXCq7QwdLuhqLhCabxvMfHmFdJHNacDZde11k3VMBkULcAkyb4Z58YRrf9",
  "key10": "27nWtTkdydVM86S725a76FHkjKo6xtrQYsyyvJXhJQSCsPFPumUeThycJKYV7VsJHg41Vzb3AzLBQnSuLaTcUvxh",
  "key11": "4TKLWE5UopYo38FWRMnUU1GU6xpB61cPELm7s8TzgbrZrpgoM7PiTcs71oXqWGS19EP1f1s9Jb7jQyGWQ5TPaBr3",
  "key12": "3ZRMciFpgyNdnyTBmGctvyhdWiyxnNkBWMnZzFr4MGgHA1S2Ufy7VXx1i3u5hVJ78jHnkYeNVYKHSxTqwFn7Noyt",
  "key13": "2k9HQTyJcJE2rSKjjfTzPgFzQqQ6B9EZx86qcm7AraDsDwe1Zb3iF5CKVEZJvAG3tDy388LL5M4oqrfWpXsDGF8L",
  "key14": "3F3XoXmE1ktNi8vBidKgVfFGeu77mUVsg2V59NNKva4973ajM5v514wpbKSnfVFFMWvUx1MUqnGuVyfGLJN3H8Cu",
  "key15": "3oSUp6BFmkhahHStnufjmAknw46WVgoxbRoYrYCcgcfE99QF2xdWVp9BoHj4kWjgn61atHFLAbEpEMJ1ix6gc75W",
  "key16": "ZWxRhwZ8nKWqoq6ZgCN1Yxe2YVAFiuAnrFNF66HvNJfCKUFy7tygEKJmCi5jURCwpPjjmj8suBgmdQYDT8aQGeg",
  "key17": "5GwEWeWcPSiZhYPRT9v86MUGNFJXB5bbfVxVXA7vD7UenfiVF9fudy7aPcnUxBAVRQ5sdDHPmp63FFY5CnRErCwG",
  "key18": "iyNGNYKqf2dPSL6ruy5QsQkc4AW4JYLNenmxmRkyy64oy38sj7BQynjHr4mgzX8darJjGTDX7UVmv2ijzvDe3oK",
  "key19": "22ShnpY1Dxx7PUzMxuJcL2wc1Chyt8F6gQojKX93CL9feZGM2YZ6BevF9gwSSMFfSVp8vi9viny3MUqLNNY1arY3",
  "key20": "HcwVJ7eoD5Qor5cvwGwqkLgNgUkTxqsW3GyMcdWQ7Hsh7f7mLXxciyY6UpPgzKPNE4SXoywEUaTgAAtpL1rssFf",
  "key21": "3ytDD91HBxehrJ6nvXfVy3VnqYKQCbji7FxzpqHJJ6rS3hSRavDWf1PNt3MHnKLBeu1qUREinkHbUxwNpzQKo26r",
  "key22": "32a1jUEQY7wsNxuKtWRbfJS9DGJJBJEW4MrxP6iaH2g3DwbMeuadPyxwLjNC5Ga9cQUfmoYE4capjGh8yFaM33yU",
  "key23": "4jDizzRmbqV4JqKsbRnA6fcQjUJ3VxhZr9mYT3cqZ1MTP7Aq2XGgcLcQ6C7hy8aW4FFGgU64XUb4vwvMynQ7HL4H",
  "key24": "4jWqQuBh6xJEMV8v74ULjddSG8E1qSLFZemr52cWd6iLhwXFgrxVMLXRgJQeLqAwKccndmHUEA3yfpUHn6a76Txp",
  "key25": "2aBmWwpq7RPf1YeBXpyrjpWfuYk6p9xmhuUiu6xjqcNgHbuNZBtTTJajwwMSKGoFwVy4ryZ5HwUKuL5bXZ4aNsxi"
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

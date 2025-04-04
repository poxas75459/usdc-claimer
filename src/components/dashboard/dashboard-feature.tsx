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
    "5UL4Qdvn98ZnW9g93j3SxbheJ6kuQ8Zbd5YecoHFhijKPDuNiV4QFY5zkJPe2CK9kQv1a1Z2Xrjn5nV949ADtnFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYxQMebdyxqNt2Y4kgdZfXkwDafkqBzxwnETSDRyfqyU3FvptmRFCVybsWbJH4FyWRVTUG47s1qb4QgaSmnzD1i",
  "key1": "4nv5TSarRQcZFPJ3eaNJ2fsGdnHK49Z7trJ92YBXTH75L5dDkFTofPg3ifGP528CYNwL69o9xZXa24GSDnWuC8fe",
  "key2": "64BpEk71sXKSgjXj1kHhudFtqT5Labj1UFnpz3PfBpFmk7r88KUgCYRMqfmy84Q1dbDQXA57L8H3FAS21HtkXHmw",
  "key3": "2Evwu7F6tB77EetNJPr1mViowMC2tMYtmjaatXDDwjpXoCZZwcXTvDWftamMn4vyKJtLvyVQmVqxDJ2KhGFWyPPZ",
  "key4": "4xpWhVxAyvP1c3Gi6KnjN3ydqvFDcz35qU6MxQcW23zW2EGbJ5C935oMetUaJx9jRawybuXgDUdvCZjkFYw6SyKT",
  "key5": "4AwAhaU22qb7cmd9ET8yj2DHffCmywF4C2pHKYHrrcmv1mSWpVuSivAH3wCDVRHLzakFzyvYbVMX4K1kjdX3FR3X",
  "key6": "2igXFWewMK63iJApST4pJdkTCQyUom7XPGNmZHqAgPFwUkUCPpHnx89Q7krkrNTXVXZ5oWCP2HNvQFjz81GCLDva",
  "key7": "3LejQMjTNXv11DmFoae932cNjoWYAjVPXFkfwFydrZ2zExRi2VHisxhW9joou3Vd4cYbM2hr1hGBtG1ofjTMk3P8",
  "key8": "4kw4o3HZUFjE66TjCC6fHUUcnDDAEwpq9VNuabG9wE3LKnNw5Sfcm8fS5DkjawzpBZdeWCsQY8HJ2wf22oUCUfM",
  "key9": "4P1mV7cP5fuvTEC87hbMRH1oyrd1NhN1wqdAUNGydseXErNq5sQtR3A23fkw5qR7FhqiT1nVQh9hRvj46ANLTqLr",
  "key10": "5xxkefVde9AcjwwrehDuh7sNb5WEkg1fDnp8hY1gWbf5PPSUgwR16TgvAATdn8jwNmyXpL9gZQ2gRtiWAMEqQrpw",
  "key11": "ffcj2F9P4gvRvYF6tvSssAVR9y3Cp1VXjJD7G8ZAdxeugZ9XNdMymqQ199hP5ywz3cBff6EEavrRZDmZ5qLzPvX",
  "key12": "8T1m49hGBjQMV8VAPTGHfyJ966VQx43w7jTH7uPutCdApcwLALUf5jXQBDTKKepg6Ez67pfiikJS8WEUSXsSDSE",
  "key13": "4bQm6hRkGYXPWwmKtffL9Ca4R1tPfKLTLq7rXZLzwtvZMByFwudrEWKkkmfcRxvxTkvUqq5Y2kfyKGiFgaoh22N6",
  "key14": "GbLfWNdg2SUjyhEDxNvzdRxiaU26yqffkQkhpsrThpLafcdiwQVpx7SEUQM6HzMNKgVbynp4m7mfMUgSnp4cr9J",
  "key15": "26yVhbEcD9yVGtwsoHbdUh4Ni1zC8K4HokD3jTfnLjv981qU588WqHJQKPeU8KoesKf7qRRSeCu4zALVfMKTareU",
  "key16": "3wggzCbfaHStJfC8KFocCRWadqy2VTtFYTkZDgW12AXCztvxDBDqfAsG84Q3tSFBdQAxqnfC9qVMPjm2Zs3mmvAm",
  "key17": "2GqwUCSHKJFJGYKetVS2YPbkwSZHzwDGtSZjT4XoyTxsryH3k8yMpPtV8PknupFmZbNBGh7i3M7Y35wjMkfDGkvy",
  "key18": "4egdwPu7ApqqCoa1HSkvTnB48fgYD9YzGnWLHoy8ugfHLzpsDxL639QYrs2bLhzVGgWvZSojrgtY9vcyw2gXwxM6",
  "key19": "4cj6U7h2q9WcXC3bgUqEUiKf1ZPaGrYJn8ut3G95xZqpjHdP2NkqvVHuMnNkT6UCCshwnageHrQtfctsWmtYNpod",
  "key20": "LUCWLksKXfkjgTSEn4YWdzujw2bm4DBV56MTLc8mU1bmYrugatgR4Gf9nBz9bEcwHBwjrjGqLeptGSHs1CLbNXA",
  "key21": "4nnr1oF8pZDi3RLY8GmhCn6d27opNwUpfTS9bqrqcxb7URFeKAR1VLf34sLHGzQjnk4QmCQ4r8hg8kuo39poFWhZ",
  "key22": "5buj1a6VemwWtph3Jxi6kN8Cv7hbpLwoGs3zvncWzuVKLu4qhnpsUK6GHsRQ139ivg6finQ6nXKVaZo6xQh1uuex",
  "key23": "34BfbvTAhESw5AKCFnmu3rAD9kG6cRj36ZmAVAe8gaWG3AoUPTXyuCMcB9vbLKqFPEJzC3YbYm12qSJVVLK8sv6n",
  "key24": "2Jd9yPrSS8qqJMHDrpL6pQjt6icdcF3U58bZrtcHoCdT4hrVJvaYBSgvK4K2u7L2m2DMMJAdDuJN6x3U15rQ4aEG",
  "key25": "5Ehw1cwubN5qYhVGWDVs787ywAjgpYQyNdC2UpGoLLrc41sK5BztS1hZhz2Lq1zPaBq3aQ7T2ejKgThi4Wtr3GMt"
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

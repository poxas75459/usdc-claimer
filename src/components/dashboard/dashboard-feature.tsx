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
    "3uLGQgNqHPYN2aSUCSG1uf9KfDTbnW38ujqfKeMVomLWzyMkoiN7BM3oSLWmj7UdAWzLC1RWTHDDMdxavgqZrKuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33uEsR5AaERsNWFfjuVxXCPD9xYqrfX2gjKo4QY69MbspQUMgr8jvTx8J7zuAu3kyNi1wb6mZpBNqPYF4yw9nszU",
  "key1": "2zsGySacDVjcuF9kGR6LpbxStWWv3EGVj8aZ9NmpezAvqoCy8ddwQ5vFdDH3NJekUjsqZ8YQBsCqijSxrtrtqaug",
  "key2": "3NS2fHR6Cq3HqStgbMGyM7qHzZg3MADXK1AKGU7XGy7NuR1FdLGJrXpsGbQ6TyJRZepr1Qi8cyvaR4rGWvcGihvu",
  "key3": "35fWmh5G6GiCwxFLHbbHKW5hHnRQ9v2MMckb9wAPUX7y6eL2emEVorXqhrSRCCjf4EChX5kKoUCYNYCybKbLHC2i",
  "key4": "4Y9A6baCEeSF6BqSg3Kzi9E3ZYLLiTajtR6v14Mne79q4sPg89bGwgzPrVamRNH46Lpv5kdCbdeGttkTPJPu6pNz",
  "key5": "3JoTgU5AwiusoKWm4khYLWbwkrM5kKqYkgPH3nG3Fi4ohAdoqBb9iG1SrcmDmFdEhrHyQHpA9YJEz7nsWQ79aLve",
  "key6": "5JcY29NdoyWS5hksYtrXDqQ96No3mKXd6SuQz3Vejc5kNYWHyvFF4mzLeFZX2Y1XSnACLz8JMdWvfR3sJ7qcuNDx",
  "key7": "45xZgmLdMn5JR2Di4gmuJ3ap512RouzXPDWLGW73GNjBsT2q6kA3CCpwmcxkzu9wcegzfcG3ecCev3PypMXMHEfU",
  "key8": "NnYraegiesonR6iF4p5hwWynQE4H4FVbUXSGeBnSVuPjQJjpaPhmEbcYFxZ9DNu3ZXCg5VPjyocmA4XsTkPeod6",
  "key9": "j9iqdq8yRXv6W4imrQokkroCkWsHUZUTLoZGj9yky7TFZTw1yCw6bM2SKghtAnwa6FXqxEh6W2j3ejHEV3qSVfS",
  "key10": "2v9a1bPxNPNE5HAhFyPhcbrNnYuNJCVSF1Ha8g4RGpbz84WNGP6bHoAyd2tG8JvFFKDeMEChPnewxoUJhtgf3tVP",
  "key11": "63BYYic2YKnX2ewPU1hpxCD4UoJHjw5V7rVTr8LCt7gsDcUQNoEt1vGXndfNwf6sJJV95VbmhJn5LR5iDupdN3Ko",
  "key12": "ZAKtA1cq6fSX7jrTT9YT1mekqZCxTHJg4FvZ2pwhoc5jQ5U5XFoUfjdBiYhu3GGTDaan13Jc7n3A8fcWdKcvrTd",
  "key13": "3dsRRqn5Sdw2hTpJzcSvuBMDnQhJuspGArWgNPtZUuW88Sp5y7qbjdM5ZALBhMDWAryfXuNtMw29dpbJk1R5rS2v",
  "key14": "5tjHQ7RYSKBQfrbU2A4JUdU85KxNFwo32P25zT6C9H3xVEDZFAsHQn36wNGYxaMU26m1AwhXWYeenHb1qhGgfWwn",
  "key15": "2dutaMeQMwLiv1bdbMmsiZQDuCW3LM27QAgAo5w4p7medE2RaUanwmaDSW8V6Ykudf9kaHPtXWaMLXsk7Yk4GRAj",
  "key16": "5bQj9jp5RPhoPxVTfQNemr6k8m8S1UyZt3xzPx9DRtDQk46qHjjjveJtWwoQegNAirEmFzqREqLTmN2aLTZ9KTAH",
  "key17": "32KyFg9VGb1Dtc8Jn1DUKp35WKovTmYid4cKQDmToLbwNYrnoeU91pA8DY9xtNLP2k9Kr2kFLANB7q1fNdtyzDMh",
  "key18": "2fbxakhfwDg4PNVH63HkBV8Sx3Ed9ieZbc6NTehHjokkwXZX3i5xwWWDCgzUnYQDbEZwFVNG4yKKB5wKLfSEMKsN",
  "key19": "2bTAZXkJLUnwvS7aMFP9PqT1SD8X46UoxVQRSBAqcjp9BnJE31qzAFkngAF6hvavxgJW3EwusMMxFb6BqUVMC3P6",
  "key20": "2x3ibme4fkrUWAQDSiUZYiMn3grt8PDmUwMouBhmoCaSPg1zKHt6uW7Neav9ciPpAo2FH2pRx33RvEdxFjDbnRsU",
  "key21": "5AH6RJa92uphYuuRqAdb1yZJvnGY1VxXTtckcCP1bEhAP62cEDtuD3o6Hsn7iJu5LbHJNQYh4NGYbszgxHBwxnjH",
  "key22": "21QtUGXFdezZ795m5CGWSAB8LPUozW6fyRrKVuedDsbqwWivrdKGV55wQVwH2K8yYPQfS8Puem2NhYXTm8weV8iV",
  "key23": "57tpacXXNKtvq9gfNoUxdcsWTShprGm1fMCwfVRBFveNkAyTbqyvQZMP3hu9T6TRr7uW78hQp3xaaB346zBjfWdf",
  "key24": "PKjxk76tGBY1wammUnEuru6a2pKJLAyo2z5Hn2PJmvb1cbx9WnhNYVp5QKBq4ajawPqduFhhTVCpjeY81bEaCEZ",
  "key25": "DiPx4DCq1tbESjp3NCXFtMP1EqcYBprhTvy17fqhFTsxhW2iBrx5BK2VtqdEn5tuUZLiq98iTZBVfPkM4pzPtfz",
  "key26": "vd7CtbRnTJNJ6QyYq37TvBMz5LEkwn2nSVBw67XM16h5SHvog4FxqzzXrqsTL7SfX46mgL8F3ja8d3s3rPzHwo6",
  "key27": "2nNeA9AunykDUwTehK7x36sD8Ead62KCpWtQqT3htmoEA8hBYEUjh9zWLnsEk6CBe1b71YWQEXoCaQXZRe6uMMHG",
  "key28": "4SSdKjdWYec3oBnMsh9JFy4sT1y7zZtQ6TU19VYc3MGAhWnX5rJwF2VViPKTYYzV1BcLYwyrXgXWxntWtkU5pqXU"
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

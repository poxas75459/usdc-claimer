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
    "8ciUiL9DaKN84z5GRTXMkHSFMBCeMNhmnDLK3t6NoEqmy4HJ3tryqEwB4ve1CvLgp7t4qbs9uFAEJQR91XaKEuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kub5jFhpkf7UGiy29ZKxB1v17acSPsSqYuc5aQ1yhPhwXmDe1NwWo7U9Gb2xWCxGZjnFPwSXtyhEch9Q1ktp6wM",
  "key1": "2zmX2v4AgQodCQmuHZygRKhmjSWQnEMTKWdW5WRGupX5HSnzvmiy8ErHEycjAsA9a7s1WkqLXqpoQM8AfHWpyEHx",
  "key2": "3P45nSKKG91NyGYKXsKb83MXiywwpJubcHoJnHMaq3eSqLJEtH7cNTmXcmEengeg1Zv8VbeLkLvXYUseBzpMGP23",
  "key3": "5cf8cGojrq6VdVoay8sQHPePiE9enXizMGqdQnLJ1e6e76fTZAYmnLtQCCjFGTd2jWk8Wgxrmdr8c51ipKSRBzcw",
  "key4": "3s5fNPraQ3pCLKkaRCKAgsg1VGVkoCGUYXfpbwycZkRE8s4ZpLpAD4oLyeJSVLwgmxUP4L6YoUYwto7MzUN6qXto",
  "key5": "EmznXQiw4fb4LouDiHrHcWNjQHziDY4jXNdiMn8rAcFvQA3ahCe3a4QJBiZBiMDpDURTVF4NibfvH8ipfF4rTNV",
  "key6": "4bLeztfA1QAaJJMQRGgx9X4RzZoeWpuzzJK3g6AMbTUbe1CgdBZvuC8VAcAdFisDiySgVyBv9XFD7kKApnUkD9LH",
  "key7": "4RL1g7j9NPUJ4xgg1jp6xGbyzkKE3mZoTJrA1F7qZfq9pVrvhi7YVATLNUzpXazprPSz8iuj8nHJiD853ZcSRcLw",
  "key8": "5U8SLYHnamV5R7hLe6QeCZZyFP9DifNb4B3D5XNx4r9dNT3zpE6mUiMjg3J1phaYZDtQaK2xRPBZNuf7RiYPhD5q",
  "key9": "3RAPngVeeLiUuGz13bny9Dz26MZoW1sWBxD7ryDNkbiMZy4ShJc7Ges9BQxVB4m6VP3FGm8VBzGtwhQLk7wMmMYd",
  "key10": "4TCwsGPa8G82Emrtck9QcNiVgMDvfwUva1ewThaCNujHXRx61EbccQBXqGKsfvoNBLDtdow8veoj55CJ3LvBoxqb",
  "key11": "3cXPBpj5yiAhwufy6fqxQ86w9QBT1gmrPs9QSnhJmFFKeLP8hRp7iugwMh25aHJeNMvcpkEnfH4E24RMyc6YLnSU",
  "key12": "3jYdRBMwquDHbysNrZuVnAB2MGuTnVpJJAUHCxb3ouBizRfa8fJ4eo1EB6Gvy2rvFyepLXRFd3AHVqAi8k3xcgyY",
  "key13": "2pMwwvbHaYDaXzRinu13UuNHsNcVXmGQFFAghpg6iArQkdAWf5rdRZbyKpkUNdvt6NJpFtnktaqBV384stDPvvKS",
  "key14": "51CTY7C9wDHJUsPXFZnpyD5GV2kpqhYRtU2Kvaj6RMwi2bmfNJ98ErwgdmfKwjuW8VxbKqC6Cft2ujqaRT2pPnxy",
  "key15": "2EQKFrSuqKfVmcbrdPDAqvhLgcH4hMRZNofp9ttMHLUsR2Kc2poV9vhJ5Z7mvJKQMJ9wk6tCH39VajVWG5jAfNJ8",
  "key16": "4xi2BPB56ufm3TjfFBfDXvt3CxHFzGD22xjzuURyzUPFuafyK5ZyDD3uVLh8XZdXdff6SGeesXDWm2pvaH1r1PWa",
  "key17": "97q1TaqJ1pxixJ1qEK6GFo3EkDrivitd5xZhrpkX7WaoRjLoKmdJnUgNJRj8Hci8WvHB7e8T7aevHPCqJ6kyG4m",
  "key18": "Sy11KLrFjDVMhFRgJnRytvLrvEytoTQzH4pYpPP8JS6mK4PA1RHHtfRJVTS8r2SaBuEdMeumrWAE1BJ3eeoDWqk",
  "key19": "24i7FsRAdMzei6dkpUU92BrV19cBMWnhWCGbAqx2KAiCbJmHuLHS9ZTZDrLVQJjZuQSGQAd6zV6eFS6kyQcytfpZ",
  "key20": "5WR98oNoAcf8yzDQqegrNk3JdZWR5gXAhrXjnmKijyUcK73fVA8XuSL8Di2igRSo9pHf3jpMNDBahG1ifq2yvTM3",
  "key21": "3Fj9oUoLRMfmuqR8GfzdXmJNbacFCRujSe6mfSxU3ixNDKqoTAVoQYJhPNrDTvqwFP3H3UjZ4A2w9ATBQHBT8xoQ",
  "key22": "5huARVuYWiXvW9A8WMHgFUaLGrEJizXTmCwYzTBPvqd4zBgZE3nZEtHTEWz5FJUMsoX5Hn9f53HPvUDa64QUv5AP",
  "key23": "yzkY6Cin7ughbMvKLdCyYQvEuY33vCEZMmJNUNuSMoYNVDWPfeZkskcw3pRGjPBcMNc8382VA2pZov6pnGVxcXh",
  "key24": "58fNks5HRRTWriiHTJHVyvthEkscqYQivU8JvLQSM8kVnsQd8HcmQxxeJhboG5NceCwGQqYe5boD8QFjj3T6S2Lq",
  "key25": "2k36eFgvQmNs6dqmEauC32XyGwc8X45xH3zHgx5Ab3nhiw3Jyv3z9mdjbqadhr55QbPzYzsEKdfgWRdK3ZT9gxvU",
  "key26": "3xaa87pSLEGjD3W6j9oiqwDYPKWdNC9mPzpKwZRepvm8V4eiYqL6rmNxqThJ6J8A8hctNDksWbfjYYUdkq5vEwub",
  "key27": "4QM53HGKSNbjZ5x1vLso6uocJNHH4pzjb92uGqVSM4UDjhdFutWpwLfwKP1R45nEZ5DQeDt2KXLbWWnfr5jzF9Cu",
  "key28": "3ZnE6kVow83wbxiVnR6ka4aK68ivJdXKCqjachqzK8PddLbtB6qnkjk4WhNHxjaUQyYo63uDe7qZVJe9QPGom4Cj",
  "key29": "2FHqX39Jstwpm6XezgodejeVyfuGhd93ZzV89VqDM7mQRGxXvcX8BDjTtnERM69rQPffbKYtWmJGbNQT49PKM15Q"
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

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
    "VnzH6p8kbC99GvgVjfmKox8emCjsjTSLUxMz2tFBQAF7rDikkEyshhmnxVSivTtAMsvrEfKagXAtgJrUMXmdtxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJ4U2vy6va9yxJ1yy49Tn12j1wkPBsZh2aBSFLKsGGpAoKgud9DxhDcTRHF2zd91jssJaGUv1M3TmzCzwbxdyAR",
  "key1": "39i7Aq1TAGj3xjdenx8DqF8SGS7BzLVp1ihLJysZrUj8BBiYapds3Pi2DeTcT6zxUbj18jB2mYR77ZJDC2K83xsG",
  "key2": "MkE6ywqjKmAFLcx1mdgjwLfXULCVdPAoFZVCiVf8W2LLdG2dWomjyhSFgcyemXhH4G2fyNZfeRrY3nd3NMe1Upj",
  "key3": "5cjPypxxNKdv1krAXou7gwmEVX3uxdXp4qFhYmGooZ4L6puexWgw2B8jhsQPnquXi6QushHBQD84PXPtovXcrdD7",
  "key4": "5WVENqRoFsbjnMsg7T7gxk5ubrWBVzzqaw5251APhd3putwmMAugNT5DwzUVXxAPVpqpJaTVv5mAhruQwa9Pimbe",
  "key5": "2AtrjemYaiAQiMXvegaTw1PXTLnr9yu7PYhk78h36JBKBw417E81T6rRV15cQY7Vpq6eYHoJsYBZ82rMZxKDY1hH",
  "key6": "34CdQdwz6zmhdQxx6Hm1SW72d3j731MVBWShwgebC2CsrqNmS9fSMsSq9VsoTE2BmcW5qAgSzpzf5ku2ipUmwX64",
  "key7": "5i9YigYerPLAjFSs4Ao1F7iaCGrvpmJ1YNJfMWQJPpb98sg7ts1bhFUKmexRNeXwBHrFPsd4fKBQmPJ35LgpuEtx",
  "key8": "56exjYa7CnESJStzUjLQoYHcSauw5wGMKXexusJV7AiL97ohg7t3rFTvnQ7z2QhXRM9CtA8fpj9NYHvUQn8Ds4Ed",
  "key9": "2wTLD7259tjjVbb2Ga11oYr2CX69TNkGS7qVj2KSL6BMacavpDmHnjQNQzn8hE9iXmSJNa53xuzfgnGcibvWZNCq",
  "key10": "4LAuSSoDCBmYEakd2x1qPGLhmhSFzqjTktcqoNJpfFEZB5Di4W6A4firqG1VUecnKJAc7DBWjNkUV1X4Kdab3aM",
  "key11": "3jZSP3PHM8yxFghmQ4YV5cCeQ2k2GkPZ35xZAiKzbn6zvfhAKHV6xt2KUtpdjXBXArE4aj2D4km5GX7Ax96msAMJ",
  "key12": "31iHC9ZSq2jBXXpfydCBPgK9wPzC2HMEJLZMHNFqxmZBch64EnTyGwiEkmXb8m1NodaxVjqVXdUmctKBgFmZiRni",
  "key13": "TbZSsH6uAigdNmHv3uv8DisQVgKRGfD4CChgxbK2j52dXXhzYRXafk3BAZh6EWYf1h9dRUjWVguprfoCcqBDMtk",
  "key14": "4qra2LCnyVgDXLhFbDkv28XYkAuZyP7G2E71DN9dSS9vsSYq7rnTDkEJhBoLyEbvxiojDLGvrUSbuQbMfe79bVkZ",
  "key15": "56E1Av7c7QbfpALHnhW67To88duEab3pj6aLfbY6JiRkjYueBYG5iZjUjCYjiXnYKACqDey4o5HdTTpcKxLg3JVU",
  "key16": "45FzMJZN6TWBpbc1uDViny4MAPkmx7PXUNRva9naXUih2Nu5huXBapxqEAarF4RGNTGEQ9w4tgNPFagSne8tApMq",
  "key17": "5K2n3NouNMgr8dy8J5kShZPFVy6MS51zSKsx5AbarpALaFUyBves365gz5zbP31hqUfu1wWovNGeNcnK3indG2t2",
  "key18": "3ZnEo2w1Nrx7kQqrsrSxKYt5SZXbSVBntDvj9vqrEw2yp7HeB4x3EUKN5vuaAmrn8tzBYBvgrjSrRwSE4ZHiH8Xe",
  "key19": "3TAFrn76mSiFFMrCfVoPdLyTsSMbu73fAajuvgbrbCwSRxHBf1UNjfbUdhQAi5sBCvJjqWFKVccKttiBbDjxW1sU",
  "key20": "5WwYtLRJz8v5KtHNwL3Zs7hHvwJ1yxHZtwgpX8D3fxRr4NeuwtS8tvrTyVUDTgetHRqbeuzUbNzozeXnH6137jPb",
  "key21": "4233nkQstZDKsTkrHnjDynK7axZmc43dXqdcLdGfS6V3CjrLj4dYf4ZsbtpjYWMUY1CyqXaM7iPbmr9aS3i7HSXT",
  "key22": "DpBWLAhmkhG71zpsdCu7TJc8AjmKLPvdGu4SGQrxYmqXbbXuG6mXEn1GUYzWsrpBWcHNefXD3krhMqMdUqeApNu",
  "key23": "24S8hipFDbPYLkKArfAwZvziB7Rv2CbgyU9jq9LYbHTEao3GmHLrk7xu9WpCKm8gyZrXQKqFFFFpmyqJ3dGCospU",
  "key24": "kWrGavtn1DEag49maG81LJMkSHbLtU78CpDGkUMNqnxERh2aU85TinC7m3uG2rotSSAuuXErnqWTH7KkepP3E4z",
  "key25": "27sRCTopnK3HerXM8xvFvJ11v3m6h3xuPThNLxjTfNhF3q9LP355G72FBRFoegK2mKES3f2DdyHjVLhjJBnweNwU",
  "key26": "2YgioCAMs9YorF7thgGuLCygPdnzQTRqq6pD7xZs8FBp6P8aNa4uB3Naj2nPJP1TSAPNFgdf3zkLCWMc6ZoeQoNE",
  "key27": "3af2zR4LTGTSUctMWDLD5Zo7jFjZuTDvN1TPpEgjipVjQfXXYSuyK8yxpEkQPHfw7tfP4VQ1VALkcgfkuhCCBmhP",
  "key28": "5RyqCVqnuZ8fUCQvYXkvbAncQnM6RzCVUGGSyCrZZZcntDxYnDF5SBtSE5Hj2fdFFJ5fDqNQz9W6xMMbSX8SLRN5",
  "key29": "vFg9Mp33o4CsFbizZd6iGTg9iDN4YfyCfNHQ9rYfR82mQSu7xBEbQGtvYxwwY6oxTUpv2go3dqFLYHNrBbJvBE3",
  "key30": "3zAUxyZswx3SGWnkN3tWCEihTCcTmeZTGbMVoogpfG11J1PTiGoYxsGDAhWjnAa6i9BV4AsNsPay1Fp2kjH1B9qp",
  "key31": "4fiB91Kix8jyCC1GvQyNf9KfAjgtQSt5krkV4Uox8xgLzzqzCZ1cRXamPygKcbM8P7onYxJwGgKrgxTsNzQqWNxJ",
  "key32": "2XPKDM9R2Kp1K2p1vEX8Jfi9Xtx292AB49T3HAYpDhCGfAsobEHvfysw66JqGcHFet3mKg3MDHoNS5JjJHBZxaGX",
  "key33": "5jHLzAdCJiQLz6Epre4Y1cP2DuUjdmXaWXu9EsHczgHf7KZ1JfvgW6XLH9CxqpPgoShB1mYbHWuWX3kwBEwR8Sjb",
  "key34": "53ScBpttpRThr2gSuEehnBjm9Yg3X2PCzgC41nd8Ey6fr4JSqzWCBcT11aX846KyYwRTND35PKpZcUMvF1kgST6F",
  "key35": "21TVUzdZxcxWU7CgKvZkD8XcqiXoQv5Lq88GiBQxrbHa4viXLMShiesaVmfwVpDeapdt7UHR5m32zqjfFdivQpkM"
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

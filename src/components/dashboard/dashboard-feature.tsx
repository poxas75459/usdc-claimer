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
    "3WnV1LNdDfQidKEzSRRoFztrwMX2Djcynrn3D7cPhVLshSf7qzXNx2kpg183ac8TfmEBes8jA9ywKNhfLb7gR9qa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P6ZitZtzHRr3cfg254QUur3B7YCctzvm2oRwyA3m88eRACfy2rf4UWSLBuqw6FyLCrfkNbcG9x6MExpF21vx7Zm",
  "key1": "3uxLotUkt8uDH5qmdwxXXZnq4fU3rTD8Qe4kQQqSJAJVguofN6g5noZHVm6wPXrbyS81751fzwHjmvDSp2SufVrc",
  "key2": "42c7CKhtMSBJJnZiK3Ummn5fWLEZFA1cGWrxcxdVt1VALgfXWHQbB9a59QnRyxfN44EQ7hyddch8mEHpEyn53gVg",
  "key3": "3qEZ4mWXWWdq3iVP3EpAiPPzr2dQLcmStQat9T2hWpDuHX2PfTPXXPTNBnWa3sazZvKjVhheKVrMySQTiAvenzrM",
  "key4": "4xnsjpwZQ1CJWYc68K1VJM6i1yZiQtyqkjPFbx7gMuJcE76ZDeizqPD39PMLzZCDoYjLdwyNBWy6Cv35rTiqUfCT",
  "key5": "2CCTaAUq2RzfG2GgqybzAMXuXAT6s11QkX8wtgbdVqe9PoUYaT1bmZnzAA7XUY9nkjZGmEnZ879tupm9NWhhdmb8",
  "key6": "4xEiAUMUDxXDUJ8DWgtd4zJUzCYzccyxTZCt28EVnPEqnwHJVaoXw1GtiUSzkXMg7LZmNW4FCxGK4EZaoUu3ykoh",
  "key7": "22HijwdezM5iYUdaesscZjBS9p8sMn5HmgHYb1asV8g5uKYKhHC3E9anM6aWbBEMP2TUEG5ozBo4e6dcB4wix7Bg",
  "key8": "2fJ5dtJzUtqUTVfqtqvumVvwr9oziLzC9byAAU1CwbN3iAKrbyDWxmoYtFWXrQrWhq21H7yN9zRmft7aUhp8yUE3",
  "key9": "46bsTGDQq3wgJYHdehZU35jy3s7EZSWrARfWZeippjXoSU3LwYr397hTe566AADmou9R6913VnWgzaZfi7SUxwE8",
  "key10": "3Tr1xhi885xA8qpqeied5La9h3c2mhMLJJ5nXu9St2xJwLRLRHonAFc7cEdpxpW6VCghZZiusz5fwm4mted5dZxT",
  "key11": "3HhQHam9QoMici8f4TU3h5G3qLb9FM2LkARFoByuBCUxs4cf9RxHy8zPZRuwUwiCXHi3KrYD1qW12dqW8YKmpXAK",
  "key12": "pvKCCFeW4craYmw7LxGy4LnKyuMWkcTvfRvme7ngqwL9WsbXJa2TH2rqTb6H1kXKyCHpZZJy9AjR5d7dukh6to7",
  "key13": "M3w6wBjmtXtmvWcLq1QbGrdHVA3ph4vJPtr3NTKtzbHLXub2PdXeBjB2MRgDdq3ejHqu12yijADz3E79jt3AGfb",
  "key14": "edUVUt5QnKFBVeXHpKXrzK3GS6k3pNPjL4YDZUpe8EJZvjaGMipN3K3J7Hm77sCQ6YX2K3beQAnBZgFsP2EEKiR",
  "key15": "3evwe6sKkyWKcN1HuDvuMRB8LuAQfRFiqBFoFquHd81EajbyvqkKg8JRKejcWCoN5odr9T65ySAXy91iKYucfF7h",
  "key16": "4pt6aGKHLCmdsSWCc8eL5DeWR89gY3SrLxeVkXunXBea1dbchZbxqwABHfW9SVPsjLwrUjzTsTwmRJa3bjEHNtE6",
  "key17": "5eUvZm7RQtCVeCMhAZqHSJrkNMaLXfwrvjnH9eKwScoJYASEdSBQdDXCZgwnKr6X36ZoYSGUPa9GycN9e9EDQpMa",
  "key18": "2BMQDtqmyfP6YFCoB9PxTVifRibtnS76fFfr5BZg37R9zL98tEYS1coivYdfNrXHSFx5KFzAuM5CvdFLvyounxao",
  "key19": "5T4k8D7upsNmJKFobMaXhHbBkFoGXEKskA7cz7B1Xmbc98ysWom6hTw9QjuJJNtmX7E241VLhJKWivKx1NLxcZNN",
  "key20": "53sXUduUjMUobTZ2AHA82NdcQ3LQVQ15Jeh1LGuueXSo54hBCdc5u6z9EgJoxob6VaV5GCS8pDTNQXfWGqvt3CZs",
  "key21": "dJsPRndycMMDnzpngkpkTToV8EHrxV21tYLK7rrX1bwdTm1FcLXWwgSu2T6Mj2JDJaNEjbLRosvrdJAdfybrvzn",
  "key22": "3qkNYJyn9eUdBps2es8TQ9epkKSaJvA8LvQsWjNQUypGKVt985LvMYxrQnsyUh43aMC2hgbia1MmYf2ES6HrGUqd",
  "key23": "2zs946S2zyWcqPtPCrz567fs5J3qY5mXfFN9fHXcNsVMCP3PLTwEUS3Rfk1QkgfgmMh72naVqEWmoSqP87zVssAo",
  "key24": "FxHemWqkiUt1CtvBMx4BHDcf9Livj3MBkZFoxQFnrRUQpfvU2NAY2RpQ61zXBwoxvgPx4ekHp7wpYpPpJCtoFhS",
  "key25": "3pSBKUjfRhHqW53XNPPPJXTEZL26pBXhkNR5i82DzDGLVUjFdvANZeWBcLj6DQpuUXRYCdNaut5whc1YtjdnHeQW",
  "key26": "4z48sk7u3Av61iv3EhSCnF5WddFfp9B133FgkvbGDd1XmcpG9tVtgL7KRygHPNDLLc7oitGWZEPByVy795j4g6HS"
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

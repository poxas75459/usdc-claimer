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
    "47SAmdbhGK7wQ293uLJjYwKKYvWiRCMCwRpbeZeCXDbqKMqPKXy7cdPVy19JbJHa3FWuANs8UQTMpf5fQuNHWo98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cs7sA5tgVe6LtV2dQAyb7cTiQmjzycDKE1pFndN4Si997porcdiE7eXqEwfRTXdpeeuqqHWyZiqBs6atc1xoEUU",
  "key1": "YqPbHYQa5vhvYwVgu8aoAdTBuUZx1f4VwpiP5kc16SsHuy6ciimV6utvhT18kLGMXJP92HX8U6TzDCawJohM2YF",
  "key2": "2yjxNsxo11ZD21TZCe1nynzQEfWvEbY2MBuabC6MxXtD9P8Mv6RnVwT7xA6DneQW2RGAj2sDDH8AQr9MQp3XD6wt",
  "key3": "4MLy16Ngw5ZBYmzm4MpQVcTCVXBAkokeenuDJwkSsf9wZAkVB24teYzrt5gogdYaduhWyzAe9gY9zUQj4LNYqPEZ",
  "key4": "24W44VdgUA3kLPe3r2JGfo9JmjLxRYhsc9BsZf1kGJPWA8aEyYrvDSPQ5yLihC68Ki1YdCni6giEuuFMHAAJS1UR",
  "key5": "3jdiFPqBXsL7FzM28eHWM38v5UfpprSkMijBD5zg4oscGeKo7Fs1NERZsnpT9bZtwc7679xB2G5wgyFuX9ixfNC7",
  "key6": "a15cKwnbuTPJtoCu7txcyXA98qYw182SsdAXZnmYN3uGn3Nc1WxPdZD8phLL2GDohUgfCV9XqSn6ND7XyTCEBkA",
  "key7": "5gU4ewYUmU3DpviobyqiEs1Hgs6of6MZkpebuyqHhpYRKbhB2LCCr71uUA8JpAZk2U2jCx1cNqhSPNCZ9oqX8FUj",
  "key8": "2zkbfmfdT5hdEZLaqWZUtuDhmgbyNVv7cXgNDmK7BEvXXbAdrtCgWAfy2X9ZNUdgJfwWgwKbvfVQ3FFvAFeD1Jw9",
  "key9": "2quKKakwcpXSpxGPNXAmMSjZ3fFdQ7PNmMvi3swtQuprCazbWajVHM7GhTpMc6mi5o9gj8YgEp8QBN8RxXCYL8Qg",
  "key10": "2DkbaSHcpGzEMVz7YnJtkkS25BkYn1QovaW6oRj2HWmSteTsBoTHYj7jVtyKVvtAqSjSfv4AgHqeEHH1NsdVhtgJ",
  "key11": "5z7Q94LNNyW6XpRcprEhad14hH6C4NzS54TuHSWcTxbZuMRaamCnpbq7QwgGkLdwF3JyBoQv4dpw53CUXUav4rZu",
  "key12": "2pQTwf7HSSuBtjx59wJaJxRqfDUbf1QSksipS2Dp2DJYrjSSDaKbZDJKPcV82UxcrPpvYVGhqpU3fUKGVVzxGDQP",
  "key13": "aRWearAdDJF1uCDG2eMDUQk1GH5R5CdBLDry2qAKNw2We3E3hD3kmhtSGRzA8D2DPTBZjFByPN8nEXgeAU7Dfvd",
  "key14": "3bN3vP8uZAYYGi4qqqN4r1H2hcgUeMCW6MsLUQe9HYAmLHifkCzJ7kFDw5MxdbLEdN84BsnbbjQtLcbuhstLhJRG",
  "key15": "5waLYzST2YKh5YV3Wd2ZR2V65eBf1PL5a8KksVUCrBhfWVJfUGPiZ315udMfYiGMWKGT9ozwUmn13CoQ8gnxgTyX",
  "key16": "4f45J9xrNkqvaKqkkLg9Ec6Xg3wtCN5Mzpuf8d8Vh61HSKABQgYMj2fn4qTWk14mhMZBoCxXpiRXdc7CKTVmJ28b",
  "key17": "4padCAHRrFJ5uiSEauszdC93rmNKhkfUxBRA3qiSENexM1uw3819pm5FVWQqn3jdy8UaU1nvn9vxFT6FiTY1xzRh",
  "key18": "5t8MCv3qZKpizV34WLobafugLtqnioVXVAqwjwVbF9MZBZSY86CudGwe4CUo4EYqTfcqYCWxZYyZE4cpydWXHdpu",
  "key19": "3SeMNMWUZsp92kdNQqfYy41Cr3tLMZAsyWuyHaLduukhEVwyfJ879VRvapFn4VAeVLU3qrmtvfCZo28wiSFJ3Fqy",
  "key20": "xL9oxYzkqoA4SAzcrAu4RVjVvJYiuzDfxeYQiSQtQPm8R3qD1DJnsY4tgEmr9UfKcLmgmNbgJjjYQ6MxL6KWqrT",
  "key21": "5Eqc8vwnB2tshA76BQ8barT6tJF7vVXX1TfcFav6YpwQkT6NDCSYUEcf3xWqoR5nXGyTViSwskQPD2KDxJ7XUr4L",
  "key22": "BiRw4EzqbyeVCZebNWEfuHKXVY4EVqiETtkydQyBCHmio6WkCHgy1DMgnCVGgDWiT9zxEXsfoT9vsmUUQB7ZvfV",
  "key23": "3ybu2HAwoWbc3sBKxGMdviWSfX7UqvF6sYSD8qmC9huPXwnYR6JhsUxhLdNAWUhxuYobWoUh9Yt9FCMeC3oaZqeE",
  "key24": "3wwcttK7ZnoNC8YeHXdoR1QKR4UbHxjGnaEred84oLRwR7QNUePM9pMSTwcVm6QWhyvoiBszJCjB74TpbBtZhfi6",
  "key25": "63JQrPSEH6MT2Ss2c5tQYf2hp82BL6TjBCrrcgWkUsdx8PysC9j8i4txmfXAfLKHEgBnNR63wQwfAQZHHaoijauu",
  "key26": "5krUuAoVdeDtM6nXXSEvFKCyqkMCYepJs4nS2CRaXGcTUMPHyFeWRGCcAQKfk8hckxEXzqtv7KQoRtkWh9FrSXPX",
  "key27": "3QYvFkAygokyzjiaWezMxpPbnGtsdGftgbFodGW42dT6nkNnAdFFVVTjunrDFMoGYxUfTuDrMQZbSaAkFsKupdKq",
  "key28": "5ZKm7HBv5FhmNZyDKBpuT5oTia31NUCuQ61DNGVSLwTfyUmBnjB2MsiG9nZqDYDvHQpJhB6psPFETPfgEjDQT4sW",
  "key29": "5eLbJrKyFtoJErjon6udKkUFda6JUzpX1oUKdcm37jKz9i7Y3G6Q2BFdKEJYuqYrhxSPkPf3Z4gf6G7q2qHY1eBG",
  "key30": "3qDpJpfygFzHwk7e9LcSkZViJ7mjsfzzStvrYDXWLQ8eNANKZnKvtExqhRLPavHsP6YoxJqeaqJJfy7yHWw4EGGT",
  "key31": "5o7sNyBanWvJve6LEzWKRP8oe1TSmwRjwu5Kvd776CykdHGnaUaJtr72LzRykwWcjk8FswmSSZKmWQUg68JFymbH",
  "key32": "3fDN8PzrjaBjysdY9PnvVmGHLRmSsdBPaHks4qnaLh1956rNbTKWgskXeJ7fSnrjQsY76N4UmLNENENwEuksCnTd",
  "key33": "2T4hjcn24t1cKAfLMzbBS7LnGCt2hHppCaqtYhpKtWqzZgdUMADrVGd9HUvz6yLuJMBYS13TX8NyiN7AkZB5F1tr",
  "key34": "PQzjLthaKRmZUdKoN2xhfVmeJo8NeF2UCvNVgVtxkCAC4AZqJ38pRVXXuC7mK8AfbFhWwLK3HR1GPBuJ25gYqGG",
  "key35": "2zmRAkMS5KyZ4kVWwQYsK4UVqjec99Kg3pTRrxUKRhkJ5gxQzyuwaioRYjedRdAox7bSnahjB1QkXuwqUBZEStCq",
  "key36": "3FENe3rrw1SXfX4Jirqbc1XJVpxRmVZWf64zR7g3UQDmFCqhpmp87iRyUq7bt9NbrSfUAWy3xGUH3rN3DeB8U2GM",
  "key37": "5yWAkhARPa6efLbeXEX55tsaRGFJK8py9fBnLk1ivMajHXLgcV1akuL7ZB42eZRSiBrtHtA3BUUMNKKXEzWb7b2X",
  "key38": "3krT41bTYKmQjjGDn3q8S2erH4U24WvuMPaaPTcsjkvfTaE2cvCmnpWYrmUVRo5pZYj3CQfUhF3geFPwyxPtD93D"
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

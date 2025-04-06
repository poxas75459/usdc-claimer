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
    "5BFafwTU7vAzMKpMReBdYHTu9qbfaMDZGEjKWkfeBXd4XFMjxMfftVAGREH9eTY5x3Uojjy8t2cJWjgzfHbSwScy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XqcJo49Ni4PND98WaqBCYz53u42RrhetYbP3GhhXv4G3bJLJr7AWicDrNezXzeDLpDfeRhpwUoqEJhFXFikzo5Z",
  "key1": "g2U87bkvDJ77byjTShWoUxrMtG9xuKLBYtbUd4qjiWvT7GeH4j31JgEzeTLjp1N7yNCtCjX8i2L7ZZVnnyRH29a",
  "key2": "3fSxUKZtXqEWZTr4L71qNNPet1A3gD8MwY4id8qzvQJZR3WHWwkpdmEiDKEDWVzMR6ENCQZ7WZrjJDbPDreb4PT4",
  "key3": "2YwTJDSKfXxGUMMwUHceCDYuH3CxwE4AWLaJwkLd1eTswsVQscazRRzf2iJ3jDjety4Pv4PFQQ7JmmBpXJVSEjnk",
  "key4": "8RYmTEGN3qiLgtWChafL8rTpULXNwXub6B33DQuTNFw7hVVnTXB26snGtStNY8MfT7B7BFT4krrpxDae9LWKVV5",
  "key5": "2R4moXdPZHbHFETyB7g9qXGFPB7yD6S5f8t1s9S7dUkM6NnwSLeP8vcX7rxFJU1Sm7qWRAG97Xb3U9tb1cmW7Qkf",
  "key6": "JjX98xVFALXRB8Me1mBwhSPHpJJ5tbKLm2XBZQZnXe9t7p3h5KaRJLceSRL9zAuvmom5kgu8sWfUUGdnZBZwMHr",
  "key7": "327EL5VvPFfbTdthFJZh5hrqC7Fzv3py17PBjeSwVLYScGYZP3JAC91S6sACR7buESznp8LeuuhwyhFdUxSAHZMw",
  "key8": "3tNiTWHPb4S2hGCzD3d7BdKgsBai85XdtMVPijRT3uUksPdkjcPVYC7mxMqPQi6ioCF56cnQLhv6E4Z6JAh7bwVB",
  "key9": "6PWuC6rHkCCVpAWW52W2w6cPDhUb1qe3HFEXi5oxv7uFahLdmueiGWrQZEjk5rzgciK75zCjTSH15n7G7Am7vVM",
  "key10": "Td6hbA5oVyiDYVTbbHuWNwrU6cEwp5xgnzzR8MFvqZ8nG8qB3tkxvDahNmUiuNLJv4e8jMXwrtTqk2e8p1YU5wQ",
  "key11": "51Hrv1NJ4415LMVWnFRzVr2r656nxZfkgdFL467hiKMnjs8xvofaa7xosJcJjh1aAx91cmTM8fWeCz4CKGmi4Nvj",
  "key12": "5NGD3ijQHUAutUpjaoUmEHz7oyV7Z37oA6gUt11UDpxM96Zr22Ah2amtDz12NM2Hs3Wx1nHS2VssZj8iNvvJfv5o",
  "key13": "58wMRX3pWH6E5BGvwv17ZZnmrxCXrCotPR9GSSsdg6DCSWrMT64su7sJ8widyXgf63CNTroxysmVG4eMKcJBqWF",
  "key14": "vQa3o4KtGRM7iusC93bxb8sDt8CGk3JybwVWvTSyLbs4SWU9ja4nrUDbUCN3vF5kZAFFNmbU61VgKGRjSrzh64t",
  "key15": "9vGuKZFWw6Qwd7JuaA8nmS76knaLavx5xa7GoW8tbqGA8kf2WZZQTRYTeQmLEnXr5w4hQcGZdZVCtoyz6FSbkSW",
  "key16": "2mLt2AanAnfmD8DQvo48srN7MZFffqBPQtKrRfHsRMZyZ2HGRdSzCXCBxyUcqFEdVfyCPJ1HN3Ebiy1Sn3NKiAJk",
  "key17": "5Yfgcf9SDsHaHUaqUa6v3xve9m3b8NeNFFYokmRn6gaxDneXnKHR5kUf5JwJ8H3d2aXvXx9ReosYb2XB6XeKiuRw",
  "key18": "21Pw3YrBQMVZnpxghQx21gK529o6CvbxpvXHmkp3P4aeLPdS6M52j4SjQeFKm3uQcdXZJx5ZsJqc65wuZaQNbABk",
  "key19": "57DVJhCWg65Q21C3UXKA9bvkqFnu3sJG4LnBTrbMdQ2x4VpPqxGxhUerxdfffkzJYF2KMNgAcx5jCaqs1ST7fngE",
  "key20": "3CY2BgZq9HXGonfuk1EPreNtMtnNG1QssD5HNmHjdZKhfFxne2VcD8kL6guEeemAtcG2CRRYoXxdCvFwdNYAQG91",
  "key21": "31MFztnUenU5htBfqapxXbrxL6z1LHqa1wmcCYVE28vABgcPdjbfJcKHTWQc1b31Cm8tqRK6cF4ag1Q6sCMYD4zb",
  "key22": "3Sqab48syRp9YZHeEuKrVKfdhtjtGNCfb7dVYUB6idBgqUQzn1CXzuTMSvDy2PyWfSq86fcbmtzDyCrvTRzCbd1h",
  "key23": "4ZDBzKRBpBaxfJSFYtL9xpmApcoUfXvabMdtkbZy71pANn6EPjcPvMsrK17aroMobBuh644WwPnyV42vJEKwGDR7",
  "key24": "5Goo3ewzE3odH5nSu8JfqtwWJ1A8udJERNUvGPJzCbHMHvZqrdw6dbNvaY7LoLCH33p6mPWEbtA6kqQ83SAgxEax",
  "key25": "JuJ3Uij9YsgnFuRNh5gPefeeAym8AHc8ioRWfN52ijjz6yRrLchfYDXJ1SevYjVqNW82HY29cwuty1jnfFh7G6X"
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

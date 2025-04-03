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
    "nLFBqSWdMX8VTHFqAn4bHPohsfok4zSjuNsaALcbY5x3iYkW1c2VTfjSXjSQ28wVKQPtdxnMWHNFYWYq27E7f7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hPDBit6r6nW4epRJ4WNVoxDAdMc35fPuNX9vy2ucp9RpE9bdPhne9VKaHD6HsfZahU9WG3HQHXYqCd76eDaaoaD",
  "key1": "3HMZQCvWk121YLuuBtZvkjbXkTE5zaArghK2RdUi7vQe8gjy5srZS2QWiLHnGGvbaarWE5HPYB7HcaTBXz52bBwC",
  "key2": "o2N3iNrx5mhzFfYkBXAqxSpJTppk2SGeVtf4sK8x3Ncbuwj4FUkPSytmtCHtNC5SP9ztw4eMxXpc7qS8evkbvvG",
  "key3": "95dyb2ymickZDNhFyzbT7XUMxLAX5RDDvLVzL678jepDMfqhC3WKn2UVvhvfJtzXvxiTZMthWzzMuUbfRtdMW8B",
  "key4": "4dMSUdnuNnGmF21W8PKHHCgeCAoi9G6edbeFiGDQ6nWxGr36oT7aySK31TbixExeqeGUtUpN6bnsG5UaENeAa77u",
  "key5": "uDofFdZsYmoRThwDbaYb6eSX7gnLRdrzD9yp3jf3y3WYzFnYFY8KaZYvH1An2PW2VRGdmZACYeVBNWc8t3Bw4K5",
  "key6": "5yYyJUiVyw5DQbcMhbCH5Y6UQCmjVbTsyu978FbJM5WZazv56rRCaPxtQbZEYUNmuVU2sfAC2JW5Gx7KPqVcEV2z",
  "key7": "4ypxELEPsDf74KpNVHXxhvb5XMoJCGmbZg75Qe5ZSVuxEdgMcRHFc2UFEBj3cjHkpsee22Wew1yFPFSj3bpWFeCD",
  "key8": "66zzaFrjS98sXXQGqyBo1Gve49Y7FqrwaVyg7hf3JLssyhrAats34cFNcJfWvjEVUdAwqworg2m5Gx9eHxGwQEmY",
  "key9": "52v7DUPx17KXWrxG4aGqNcr7ABUVeegVfdaTQ3JFpJrzNqtwEctXzeYdFi1yav6wmJD5WLwzBAETWG6KkcL5VJKg",
  "key10": "5W9VcxXyBvPuNz7mR3GLwxcRv5TvgGb7eFkvUwfAdvLRYd2n7KBRQRbZXmQY35jwDuCaexCEZtYX7eaaK2oKZVK8",
  "key11": "3b3GbeUqqwDuNbD37VkPB44gEh75kdpWXKZneZyeemtoQFnJ7qgS2TgVjqCaqGqFP9StMagDqJUPY9jtffZ3bPuV",
  "key12": "5fsmBW4XZY1QSWGNn9WfJyfrfA6EvUGVq4ppz3a1n97q1Mqyg1MxxnvfxGop6fHghJ6N2NbTpzCHTKa9hXDvQqn",
  "key13": "5FBfwpsJ2yh9hNmQhx5vGWpTd61EwT49R6CCBY5Qq6kU5U6ooJZxqPxkxghZExSTPHaJ2XwZVY2ZmynUi4eWvjoJ",
  "key14": "66yKKeeKX2EfgiBcWTWW7oDYfFem3ftCrTYSgt15XRWWAYzQemprKxwV9vJXYxwf9mxFL4x1WqQTQGgiZnH1qhDm",
  "key15": "33zKxvpnvfxQSUZoaUEunhEGP7aTxBERQVQRwPDfvofevyuzBkBQTMxnqCbNtTpBfV4CP4rUgoBHxs4Xq6HUH1RL",
  "key16": "4YptboA3vtc3qNG9HAzr7ykjLkbpSWDieThsRsKFyZofvQhmUZ1HNXsnyAJq9v7jz5gtLrVQot2q1AGctUR8fot3",
  "key17": "mEyQ7DssgAzMbCD6pCh9Cfswo9a1uwgRdMDwtEmfM8y3vyV1tbK9bvF1dydQKQdbUFa5Ak8SJ95oZaWdEdFighs",
  "key18": "5NSY9EAWS6hLpKDDn6RULyWSZX4T4mHYxRMTE2hf1YXGEUTnkzr2CNJ2Ukzi1BLkBhcUFs4BcZsBWgHm6nVLrKE4",
  "key19": "3JbrQmE8yzpQpJZE9F2X46xWugoiArUPsoFc1ZGrxUKjfys5jNSm9jCi2gD4WLEAQ4yRmQsRn7MgN6e8vztdhMHs",
  "key20": "w8jdDZ5kBaPfN36nTxb1Y9rkzpxbSfEGiA1LRrJPBNWLM4o2JEy2bMFSJfxkVjYLQ9c4hqr73jjUTUqL3Hin3hC",
  "key21": "4SubDkgQK4pmkoMXmAEQaY8fpdSAyeTzGtshoTXBz2Qcwi7iPQ2N3ssP4t3VV5ccYvWJpekXXpETFJ2H7QzQ9YmG",
  "key22": "26dJX7j8QZmDxZ6Yru3McAweDZqiHugtSM7KMzTkU8AArfKbCz7K7VZdurweuBcgWXuuLkwtUtcCQSH99znrUg7i",
  "key23": "M7YgEUdVQd6NLcbgPZrB2jaFcvAzHHeF2HUn81eGGRRGWHzAnVsvc14MXS6xhzFE2jW79ogY3R5irwDqWsofWdp",
  "key24": "58MrDGN6ocwgqm398XsUZbX7umunhm4Aqpn48L1VNfhvCJCWEs2geso6XF8caepVkTptktE5m6fsudkwaTjcc6zD",
  "key25": "4w3wPDqm2yWqn4cifaK81szX4ntVqVQq9cpyiu2zFA4EfSmDTYdVxeQbXE3sRNkjqyiHhDYPtVaPAZE2hpXFW9nQ",
  "key26": "3Z6H9xToWMdnFRsvWNtAxKXSMohn5aTZbetJEoavm8vBwRKc9sbM3J3qeT4c77ZdbBooEihb2cw1SY4ewDcBUyha",
  "key27": "4s8cKj5fhzdJ1EBoddEDzfD5V4cThori2ePT2mLR2p9d1dAeW1jvneJAFCyt9E52LQghtiygY5mWYsbchadCEi7i",
  "key28": "5o77PyCLPNhuUhqepPvvpUMxsy2XJTdMFy3DiWoGftyJyGfMvMLRtxTxUuX85n95ATtWMmirNRToCbT8Vvdh5Brf",
  "key29": "44BNPdNwpUy5hE1GPmCVCmQXUMKmq82kSp8coEs4wTkFJev8fZrQhvBisGvL4An4catBcJ1DK7pGYTWUmCzChwsc",
  "key30": "3X7SvE4VBk4ofYChaVY7noENn8RXNxZRXbueDd5ySgjSYupBW5eRXxmv8YZMfLMXqmBBMSNjXn7eHg2ehVDgm31o",
  "key31": "5DLewc6TGZsqaEgJAaum679fEtvhHRVUjGrrMqe872Us4CqgKktdMFXedNAK6RT4Y3KwsC9sqrdwFwYhzWkiduXi",
  "key32": "56oPenR1399ah3sS56KxAhSbJ1qM77UD9Z7L85Jn63QqEDzBQKeDjAu51sxkRNjwmgeTbCgoFgUU47xQivK6GxP6",
  "key33": "uiy4PAJtVPnv8Q2ktpv6AptQn3oHP8kGrgJon1MZw9gYqHx9hgsbMRtN3xc9sgCsW6gGztBmiqbes8zuyau96Dg",
  "key34": "4ixu1GFKNE1ZLvY2WLwAnNFyKrhQmsV6dFSMHkfogFhBnGyP2TyzhAPUWUhn8wrSKw5f9j6uN4W1VbEGVw3zwhMa",
  "key35": "3wifTS1WjvpvsUxTJTqD37AymmNcjtEQmL23pfSJFREPaWJgro8EPUQoxnDFURsWcLAMEm63o3SgnUnCfstRX4sr",
  "key36": "2tCCR7MENH7hdCpZJQNGRahP8jxdh3RyVWfWKtnkwPRqDyHaQiHv1M5aMFiTimMahDegvfut2JJ149EGuTksfFiT",
  "key37": "4BeUYBV5YWoZkSpyvTeQDB9KAahQyfYaY141TwaiBodbrfwpr39ncuBsCLSM2ZmCohNXEgy54gv2HigLsMctRCWe",
  "key38": "3J9TA53dM2HwRQKgPeYowmEtjQ1jDbD9JsoeJ3QsDtXGYswBhigp3mfNUjjKRajgNyTxCyCTuSnYGBXKrSLgSA6h"
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

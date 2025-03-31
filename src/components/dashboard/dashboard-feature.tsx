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
    "5j95EGdNmho5nRBfFYbVLfRkZQKJGZGua8xWe33QZsT2YYunwxA1Nct51YNbQMF61ihnkJdrgmUTAgK4bb7zZSz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mLwDaHZPKfBNcUgHPQPf8d3FotkcJs4S5F3z5As3hR34vf9rmeBuQvbnmQC8rpTNuzSLwYU1bf8bihYVUa2Uydr",
  "key1": "5KLRaHYiKYpUJxa47rbBfXNc95Q2Sjom4yW5au2e5P8JzFMjRCXogq3DFwZ5PRdYEBT3kEfzmz9Bc82mxELCEWtj",
  "key2": "2sXa7udxKij89JdsLRqaG4gj9tVDgYA7MLxYuLGnPLtiWDD2Uzc2LrzTU2QRk3r6FbQa8dsXWUtnuZpM5XjxHymS",
  "key3": "2Cy7MCw5PPTjghza3S7DdEf3TCmygJivnTJrr9Vyeqinv9TJfD73c9P1N5CYmbFqLXyfudHuewKfc1Af5Hb4YAqA",
  "key4": "2APkkYxtqVHSJGDcYqKoVKesNoV5TbYjcMdsKr9iXbHyaKV5pZGztuRyGZSKwTeJWygbyWJb7KY356m4LGBe3dd3",
  "key5": "4w8UTTuCvRwZU3PeUhLNRkMwfwsPfN25HzJuLvN53XpYA4yRqEzX1LZRWpKiPj5XzrRPNARYxy9QMaLnhV2ZHUn4",
  "key6": "2CtgELEq2Lk4Up8W4QUgjrDUot3tCRBWTG8zBEaiqvKjtEGWYXb8uDoTBLvBasVoEDZpTRUjrKLoAYqx3bt4myL4",
  "key7": "2tsznLCYCjgq6NtsvtZZm8iNWHAYPevayR8DUzgQCQwUVMFfxKgv2FbAUZ82BVZPdSa8VyEE6sATcPVjb3kzDgEA",
  "key8": "38UGGseywjvxDSdjaa9mon3nfmzJ9Z18w4Vtazf3Cq2mwxMwxRZMWcHR5qaVN7yxfD8Po6eq8bw3YpB4oLmC19jF",
  "key9": "35WgWB2JKJxbJLKPcB3wVurFTL3CdSKthYv4i7Yn6MoUjgJ9wZrK8iJc1FP5C33wkN4zrEgyaj9B4kMCkbU5N1KJ",
  "key10": "ivnGpgkqPiGR5wtJ4dyS6PJB23vhxNYVVHSWpEDDoen5nYM5TEjmkZ2bp4aeTrBmiaEi23ZSwo68Gq8RybJSbG4",
  "key11": "K5RU41f8E2EuSJiWHAzd2s4h1YtPRTCTyGk4LaqcNqVAB1tSZHxYVxFcbnFQK82XSCXREGFhvqUU4kYXFJdQ7Ke",
  "key12": "3FDYVGy321zN65a1a7nXpDxoeZN6j7m9tCcazdFBgm3kWr5BGfPsry3Qhd7BZQyb16G7zaRCnYoX31MtfUFNbBmU",
  "key13": "62vFZFRCGx2wyozgGRQgdFUCm22Bg5wRZzThuWdktgzK8DpixVxKwWEsoZY7xbqSCLqpV39bqxujFd9qhuyyXER6",
  "key14": "25mdQtCH5TpfDBNDQeiaw8DuQbKGGn4QXzspdCS6RKRudJBYLjmDy5bc8s2jndJc69vBfc8gYszsLbnRoY9bcrbN",
  "key15": "5GPQ1oXyF3Eovsyw8c9JkRSadJAQJQXT9hPRK9zZSm88TQtNSsQ1yo5Z17udFxqCX51VYa2LcYvnnNN5j18gH83M",
  "key16": "35C9MnvSDPzNoSCYgECWvPukBwFUNuDC4agQq2KoB5dToPWs6ouzcqeqwFE5KLcgYRRPwMNR3HHqJdE7LqwYeB2C",
  "key17": "3VHR4YwkgwHpPKP8Qa51vA1D5KaABrTXbATntTaC8mtYXcgoFvNgf74pRiWG2ptKtdz8ACeDqbe63FTZPvLHEtmR",
  "key18": "5uLgMqPZxdXamh4BwiRXHZRW6MJhjo5MjWbeZGffqdqCPDcFxuAjGxMqEt8ifbLTGxnFduRsZjhckvAVWKT3ntDJ",
  "key19": "3nfEPrf28HAg5miCXse2AK2aeFJQ8hz5k3CwbaEikFEgqbEH2aZZqZ9wq1xAGm1TSBRH66TG5h9aykEXBrv9DTEF",
  "key20": "45dd5kgmNLktZFJphFZSH7GW69jffBt9utDHJbf7aXswAN53ZMerWmN2RQq7Z2n5GrBZBAZSULji69fn7XPJ6dJz",
  "key21": "VgdhaHqampPyPaET6XGWW4JDCBdGPP12EwTbk8hkKovvUZCSgdSJEfgWrkibsvEziLjQ29Fz4k5K8zHUdKRoED8",
  "key22": "4VPVtanpo3e1H52TWKTL23KijGjXkncpfw1dDxjvLYJAiP95CGF49NXYUgyyvyYF8mvPh21D91bZvkX9MefHc4vj",
  "key23": "4esVoywYmBNpXSdwfL6ZwKGzHMB2JjCzgV6xxV2NnmrxwH9cvJKQQLVZ4SrSs2qTdwwc4KK9GChBuZPk7X7cpLHE",
  "key24": "2RfEtSsU1NMX4J4mCYwnqwx8eeeRiofZ9WG1q9zhvutsEGKvzygePUHbdh5pZr9YXiAzbv1Jbf149BCcE81ibaAu",
  "key25": "29u2axBtSbVdJHHYyZgaXNh1JtH2tVz5bdV9STNPdGSzehX87m8kSpGdCBR5pT1F3tbqBw9oieZLzEJibr1mb3aR",
  "key26": "2wctq7hGUTptsGoT62VQPgsLaK7xv7Z9GTFmD8jqZyZQApuYGt8muWVU6EEqPe2fwV2bmxMKyXEKpPX7Ys3hn1KA",
  "key27": "2wFVrrS5bvE2ViRs7ExyWPLmdDY41dvntLM7DtPZZoLVRpJ2oMmfag6BCmFcaUe16dYQSo15xNWWUosupmgFqT3X",
  "key28": "5MnrCZFEH6kGUxTVyCm2t1dDWQC6y9svrV4TkD99WwHpbnEg4hJdgi71hMbq3P3wQK7a1vyWbJruvFquWqUgKiZz",
  "key29": "2ggPAj4SPd3sc7T5Jm47CtZMr4oeigEouwgjsa5iATBYHZYQWX6dCFeohz3LBZe8FFeSERVQurefYsjPNq3jCVrF",
  "key30": "2k7vtJLhETtFaCG4XNVkoTTBkBg8bnyMwCwhrTozPvWU1aqxiH8UEmnrWbmweLgEYVfEqcL25yygY5Ver1YM6nnH",
  "key31": "5TD4XC6zh8M8uV6nbwjQTZWoU4B2WKYbB5aJyYg2oJaxhN78ywhjkkEyQHmB8GfrLX4fZ9XoMduVYYdsjuss7Thv",
  "key32": "J7f6JmqvYsZiYL7SAy3j4Yq4yZc5kNE8XSNXj3mm9kc8uPTFv96dSMDu4hEi48C8Csfu7KeKm4mBtK1fJbea21H",
  "key33": "5ua4Bbz9fJXKLupRfjTZeZmQbN7Gsgv2T5YhyjRpfLb5dA9U6pEfZChkPbNBKdCEfowDPpsGGxsqvChTE2VePy93",
  "key34": "4KBSBKJFZADye6d6mVqqgUQ5tsgNxM9aje6Ra1e5tVJ1LHnW7RboVC82dBCSy81RqJqHh9AMPHNGvGUWpdS8QrmX",
  "key35": "5Bb8XZq5JJkRYJhVzaxSeP11bBRiY64w7U4GmM1chGp8YMirRAu3Df18AHM54U6Po1hYfyGYn2y124bKL6mSkHkh",
  "key36": "2SDXhfmZ5J4NTMA4bNG64F8sTiUoQCEJGK441d8e67HQvrpze51J5NzHtgmFRDhFp61x7KQJdWT7hg3S8U75VQen",
  "key37": "421MRAgnmxU3MKxEkaaTCxuu51P8SRBUjPuZ3y84crVtzaCRB2GHyj53KpfdUiZH9igm9HpFY19VAwbUCuhZGwS1",
  "key38": "faqKoUx5pw7KvgrPPWNXG97vY1caXjUHZ7sH57As6mnBhZhjjeDBjeCbtrL7soDYPHEsY9NGgvKhvrZG9pZxjJj",
  "key39": "T3Y8ZAxo9tZy4CRqoPawHqnaXrRqCAEj3YhdRqXU7KYjyFtjJH39UPrfAi5KMFk2ftuNvPRkFqFro3yo4gJZdwh",
  "key40": "2PZAqYdbQA5yhGkcDZbbKb2uC2q8yahRb6sikmt6QJq3o1i9ZES2gDu2eVUY2G8sUUZvYKGpNMsqYHd7tk5jhgQw"
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

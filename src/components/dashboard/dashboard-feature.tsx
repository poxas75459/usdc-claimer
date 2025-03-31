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
    "cACKQCE14qKsxehTZeyvVABQbm8Yux8wNs1ASMiYmuufZ36HtEQsGkqJTqZcYETZrUQHYHEtffSuHPxLTu7UxLM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RCY4nfEyPYmEtVeUymYGfgZfrzqyiHtPYAxWSNDV7QLjWbAdJm1vDjbUhRNRCXWZxeT99gnMMVYV6uEwEY6wrP5",
  "key1": "34hVBWCRstx8RqYbAvgkysXne9Gg4WWcAds2oSbEqM8GyDp784nACDrfD852KAXZpNqAHb2uRPHYV6zp9jzj3NRT",
  "key2": "4c6XMCARYZ8F25f4XPp5vYh3RfZj8AKPYC9y4JKNC9ojeGPHeVrYS11sTA2DQTF39Kc6yGoZQNFmezsSCmYBJEqh",
  "key3": "2YKUQPdhNGRJtTEdV3mpa9NdyLXmU55rrLYcaDvbjNEegdbS1MjHGRcQPcT1xU3nRGoGdtmvVA5awqgDPME3QyxU",
  "key4": "4cUasRZ7kYknLutsDZAkqPJ6gdU9WwZpq7pPkb5dnQNTC1ynPGVb8ydFVGTRgKeT5WmiKxWWc15AtvLMbPJX6Eqh",
  "key5": "4DY78hxkmUNuGosAioM2887Sthc94SfpwUVBAqb9waaS8DUpNnFM9LAXnXT2bQsWXzaPWJKe33H1U4D2yWRMxnaX",
  "key6": "2CjoSJfpxKJt5g2f4bAjySDuAD1S3oiGmZFKMkLCySosuD8TWWXa2VkfKPaCr4nwEyaPQD7ckNhJ3asg6nhP9seS",
  "key7": "5cKXtfd78Qw7BWqjhQib1VV77rw18L9nReUxXHgnFjRBtqrz6BuXJfLsrkzYKohmNw1gG7LnQ4dcj861S2aciTs7",
  "key8": "2J1vxHjNpvfqJwZx7ish4DQVbHwdgUf87ZDpebudQWHLLaC3dtEgAUjn6kfunCs57nntbYoh57fzsVeGFW69ezEP",
  "key9": "54voYaFD6gYH1ECcqiakggyciipFEcHj17fZVLKQ3kQ12xWCNXsKj7LwFAWXCzn7kwGDDcn64TBtWB82smUXEmCx",
  "key10": "2moQqQGmpLkVKHE8Y8UN1AxvuGpSV9fR9ezsv1espdNUdvvq8KK4gkQeuatfvQUuH3zHSpRq1C4jBbvCGzMRF75J",
  "key11": "5tPKDNrFaJ3M5vCY7GcZKsGMn3x4z2jHK5MJT3WFriTPF3aFhovAXuJAQUViinxwNTbKPMTX4r4Y2dzzoAwSY4ND",
  "key12": "48nz18ZVorqPmnCC7S1itoCc4kMtM1oeahdDMT9DDRPjSgEefHysWJaPBMyqZj3fWe7vUp33vgfUUqcBBSaNyTvD",
  "key13": "4KzR4nenWWvfkUUcbGd8LUY5raCwVFift6sXqKXE8DApxN67q7RnixxDBdD5vXH1HaALsLW1RZJqkjUzsy5osJiN",
  "key14": "awGYcQyJJU9HTJV7ihGGK7YZskNyQKS3wH2aKJLdc4BRon4FTq6TXqVnR2xiWPGTZKhM1FjN8HhHqcDJmFQM4LB",
  "key15": "5ioWXmqY7KSbzfJYJ744nTetCwHk9TXRLuVSxeT2T3VMHxnPsbR8bHVQn4F8uM4hB5DEza4adTqsNEU39GDD9HdY",
  "key16": "2NmbefYHSM2C1Z1M8oAnMF3bygZswje8Zkd7h5fEkhyznJditzCwyBnvNxzWmg8ttSKuotnsHHRsUdKHfE2pQ8A2",
  "key17": "3ViNQRXVSmYi2mrwGJe256ZXFhj8iKnYZt64TKmQZwMQf6H1wbmCdVkQYPiVcd9y8X5TWLRqzxGx69NafhT14Uc6",
  "key18": "5aWwK7EzhV3eaAdFZpf8AH9yi4kStMFcrPPV7YAbGy1s8XSzPUiPBxkVj56n8Csa2TuRUT6y9iBff8zioKDaCE8C",
  "key19": "293tGCXrH2B7YVsF3emqww2qBjFsp6qfw261vQ73NPV7pgTY6wNtJKitgbUQqv8Nrw1R87pW9m71gd2aY2rKnJRK",
  "key20": "2BkoUqB1qSonxVR9dnb81sxKQx4aHJm9qk9TYhJHnM43LukKaJQGFsfs6ciA6TRBthUAerWgkqZ44GMjrsAeecQi",
  "key21": "4YxS8JFziB7Po95MAcnbeHBSYGBn2wMqB7AKapvunEfX6hEytxL6SmXQ7TEuHCtMM3icJnPYzbocEQRjFzhQaj4b",
  "key22": "5E34tdhW5S6YUArPTRAxgQ2hBhoijm5pcDJ6GvzSUjB89K5C7fUdNkwPAfGHzZqNgcx71WqVfTVL9RRHZ82mu1sU",
  "key23": "613EGCTCYv5N6X7zuep8yBv9AEA9j8SLApef9WaiF86fvRb8LGHquqyPsfLrKpJpRx8XYRkBPCphM5RivWKXBuaS",
  "key24": "56QFEMmwhtG3vMr97tSJkXXEMEFNp8yqt4YW5ntPDB1H79AVcECBoFhqUAqnSR2BKXdrdi9iQPqFjYt9C2aFh6W",
  "key25": "2mJmLUZ6h7G5V74hjHU1VrB4p7oh65vLFbG4e5fnYzYzn7hzRXYXMJezntQcQjpPm8tj2TTxiBEzwyd7Ev6RRqz5",
  "key26": "5FWbatNWsGQ6tQkJuRFX9Ta2iRnQG49rzVZ4nkKa9C8HSVNDoVSUJ1MJGvJZy7Yrj7egjsLVALLzhNwTr5DGMG8",
  "key27": "54BXVaKzEFiCcVuTvHrxdRjmKUfNNt7dbQhVyp5trQR2YmwNsQBVQT29EMoCM1ktN5Z3wNmdPRe8pf6VP9QsBW9x",
  "key28": "LvZCirB5c17aqu7BaBBDX3pJ85EHLVrkeZiSsdbosdQAtJc1s9ugryu4JcqFCH6dLzPnd5CF9JFYbX5CDNPWJhK",
  "key29": "2eSuLEsRcpzEo5Ni7x8KZL7Y2i3MT3shkc2nY2jKXiHTFSZcuEFsgLfB2AsBp3GwrNydFxiiiuqNGmaHFBYfxAHy"
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

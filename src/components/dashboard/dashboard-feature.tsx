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
    "5bHarVuTYwjVKpBm84mgb148GUCsNuaKaEeV8SVQD75fcgtPAkqqtf56H2Qe4Tdqw2VLn1M5YypaNRzQJuXf4sXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eGwDyGnyGsUQ5nb67TMZUuoJFAULNRZ1nghkBUuGZH3HAUspuNCPjJq1DwL6cZZFPynLjKvbiKawuCdyE8p3C2x",
  "key1": "1x6qopy6fckJmc2gPnE8LFjxd9ztfqCocfwTpqPwRhQsbE8cKpfRgwsUDcNQXzaSWPhiTtK1MRRaeZkhdmQ2tGC",
  "key2": "3EZLhrdaLbjy2M5zbADXEcwKGASBBfx5nJjEzaGykr5vWHHykaRbXKC96ahYKgWbVoh5xjArjnNubUYFHYtrStGY",
  "key3": "3PgfRtXtiXtqfE9UnAiWhDXbcE5rjau9Ko7f7mkNwYj3dqAw5R4EdUYs7kAxdCQzq4DoJcvbNhtEiXaFktyUrYGc",
  "key4": "2WdqJ9W8ttgCWVSg2xjMbMJh9itntN5oCfyf9q3jpbc74uLuvBDuyEVVaTmhSqpVwoaW1oaRnmwqS1vj5WwqNrDo",
  "key5": "2fDLcCwEUMdKrEkPTh3DgDnWuXmoKs3gXoiXkuQEDRL23wyVBjJ1VfDvhytKPiagX896RXisgJyVeoDgPFbv3DdY",
  "key6": "435Y6zofroFJYJ5LWjbgEvytFHn4S88YvJ5fSFGHBUVDroEQe86TkXpFQZLLZKJ7bc6UXgQGo9ttoEfhmpJKKCpY",
  "key7": "2H9L8zx14WimSMtHrx1g6TELirTuh8qSFJ77XPHw2FhcHUdMcyCTNxojTw3s7XQkdhFEuNjYwwtXA7LrqVCQ2Sr6",
  "key8": "2HZAMaYQTns1MR9wyMQoMP8tb9RMe9BU165FvwSdXJVYswyWJFjzVZaXgxUqUmsxRJwbPzBWR3Dap982j2Ra81uP",
  "key9": "5vPqRUHD89EmtXFArvTshJ7cZ1TFzVQJUhndjvryc16RovVhws79osLHJXRLrewPvQReSdhz16st9kWkBcVkk5DK",
  "key10": "3WBGAz28TNe5tn2G54QjcKsyZP2CFHvsRS8cpKpwPXCcRim99srs5eMTLu2Rbjds4T3S2SKgK3wQpBWuwQMfbkqg",
  "key11": "rFE78PY2bXJMzhRRPGwtqWd6VZo7Aghyx5eFwT2mc6ZB6rd9eM5d8HSBVQUv3U2hW9XRXucUJYekF13gCNZvq5D",
  "key12": "3XkWPtmfSxdgNFVJaAxUu7ziQssv6pPipEU5TpqUp5gLgEpfCen9DRLCfxzLpQpXpXVZWyB9G5PUXUhwzv1FGdcB",
  "key13": "4EUgbm7sbQjf23jPUGPi4XAsRTGx3aWvvKyCV97VVZPA8Jv6NASWRUvPPPucBVrcfoRTt6YCsUr5ttF7Y6H8Y4Hj",
  "key14": "3GaTWbr4gBAfM9QNhZnm67mKm9ojjp1yxkPmuGwuLE1wAC7HuCajZaeGJC4pRcTHbwXWHDJ8LiEjuiSCKevFvv6x",
  "key15": "26FsdGxU419ZxDYkzrq6mCwC7zhNsT3A46La8YjnjUCbtj7sReJSLz6UBSYiJBCnLoVTSwUFJ8PUzBGjciQ5yC43",
  "key16": "5oMA7Rg7nopkrkfGEP3kSmdUuXN5Fat7Cog5YEAwymbEBve3n2z431p27CmiDfPsP2wvVuqwrfKjn3pknj7dCH3b",
  "key17": "3rK2oRWdvNszPafz2d7Ti8F7SDLGf3HUJ4keCb5qipXJQWtWFLddNn17o7B2agWUk75FomnTEz3CTVnyMoTXrKnX",
  "key18": "WKZ8Ya7nYddF2gbrbZihgwFYxBusvzWrEy6JJJeqr3utkBfDF3CP2TCKhdwCEdaS5NdrNoHD9VuXiFfjQ1jtHvs",
  "key19": "4SQ4Y89xRwsdXxqYLPMDfLkPQ2rcuRT9P9JjN2AM4HFXfqTHbXX4TaLAsbEhuFDTASZhNLtyCt4Pm8csjXisVrNu",
  "key20": "2nJSwQsZ3bCKrnB9KY8iCMVkeMaLN2Kdi5KJaTg1AwEW91KmNu14nFyKoxwChGSZDXi23WBtuHC1DRXnf1zcB84s",
  "key21": "2HVycSEq4aGhNH9GSK31o7bYRXmb4wuEAxrVLapKkPor6CvA2hYhyzBvXw6gzyGdNE5iH7NR6d14MMZFfwjv4NMu",
  "key22": "P5BtQHg3M3rqx7bJdDhQh9nSri5dA5GVzKkSQg3kJN5naxUB9ruuVR7fcD5T38rLuefYHiMcSk9qvKKdUehttdi",
  "key23": "4rurfN2S5QXgfr4rFHNsFrXBLb3BA2kKRg33dLVjyVGypobDjeuvgCBwpjZbkQQxkXKrkS8z1ybE8Yym98DRXL9d",
  "key24": "3ouWyceHCNBKvSbf6bE6oYMUM9mYXtsa17EAbHvgyvGeoH1zxJgDUtnHWBdMLCfraLhMBHxYEaNZaSsAhSQKSmEi",
  "key25": "3fmvNFSVCYuTGFBc5z2ASMG4JUiuddrxjJF2Ho4mVDajvfrm4zNEgJKkUWcFmfQn4UGfiWx14CDyhQXzCK4gTquo",
  "key26": "fcAt113ZtUphoqLtzc5p4aJUhqm9oa8osF1vFP8qFqmanrT4fpuawoDzuEnYfrASxQa1pR2igfBD6t9ZRzSk98R",
  "key27": "3Lx9pMN7yy8zGVZHmd7MuZc1t3w1iXcbmw46aBRNb9mCcPQVJFGsGY6S8RWnXTcyFuXZ6r6km2cZsyZVRriJ7PYA",
  "key28": "66FmPgkz7sgBbPeA36PHpPfNaSPHK211uPF7ShpPtjhRegjSBHd8P3h8ZyXZTDwm3MNobwjRGqZ3WXgguRotSbW7",
  "key29": "5NFnjFZ9aRBATmUjWXh1yMdDtdi3JxXYd8vhXhgn9bcuibJUc2X3zEJHjzLcQGmU2pnkdUY4Q3fUrFcptyWt5dcf",
  "key30": "VXMPffwMEBYSF7USvq1dypRCQbzBa6feSCBmdGU8DDC7znBby2W5Fmv76uYb5zEDymK9wjSPYfughAZf1pepRiX",
  "key31": "2cFewJA45e9Z8T2UZBVoBh5ydoBi86n7jb9tN4YAj2FztZMX2EZsT2jHJMhW6RjVpdat66ugsdCgosWAKn2immpY",
  "key32": "41hTuPVe23Lr9dL2GTYM5uSUmxJ8L5gkhmQ29dDoxUp8KgcdxZoGoWFk8oJJRHqYn1WsDJpBMLjZWMx4cwJBEqjC",
  "key33": "5UKQzzkyd4CEZK4vfBBjV4BWrSwyXvWgrj4zhupepXAs5eywgc8gEHbcXiwASzTZpQpe48zWmHRUzZSgE7q2aDqB",
  "key34": "5ofaVyedEpKwjgE3iA2Mo7CLhFZjWMcGXZDQrMHS1DG3PhhjJRbhV24gLDxS3C4HNL61t8riPoa32DZNKdHn6WTw",
  "key35": "3nG2ayWJKAwybFTYRZPUmY4RD9igL4dTSndqQAS8ENvv5EDBNReiU5W9fyoQSHG85BgJZpxcgheEXT1JVVkt92LB",
  "key36": "4sarKsMP2pcBbf2X4n9ggfveJzDexH9nbrijbRsdzH4x3dRwf7A5W6EvaRGJUvLvFTdBmaFaSVb6mxxgYST6DGSq",
  "key37": "3UxQ5otrC7QR4Q8brPvGdDRrvLTEeWSLvGpit9icQnFN7tFdeGCMqFSscgoJAwWH7EqzZPNJ3Aa6nX3dwTQ4NYxN",
  "key38": "49ipEPJ3KkLi9QvM9MPsbd3tqXr8DZhCLumFo3b23x1nE7d164edeeFHS7updkFpUjog7XwYmLAwJ3qiWKWZTe8t",
  "key39": "5yioqLU8LP2zbX4QufjHv3iwvkoE6CzgfR81XDM4PByKzWQV4ADrbbSaM7Qp7Yt2AWwWN7XYJKoqefmJDoefnFWV",
  "key40": "2f2cVrecBRN9TipNhrxDwHcuwtoaqrnytVPzB1AowXBskaZhnx2Q7Ap5gX3tRaxehquC2xuMdjJhx7GnCCtfqEmw"
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

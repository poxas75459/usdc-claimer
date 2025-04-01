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
    "4EsE2ERYZRg8XBFGeXt2E1PEUCuby169AoQPJKyRxFttMbJzKqHUVBd8GdXdWE8Kfx1zrzcs8nLGXmyrDrT3SWpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59We1GYoxx8hK5egEmQKGGiztjDqkCDXGXAypMS2gFhN1PUx4gC3zgd31bnuHGbfUVsVh7MvHxwgm8Cj2P7dJvHk",
  "key1": "uXkgBJKxYxM9NYz3jWx3xiyJj6maywAk6VFRkMiFyCFcZFB1sQT6c9DuNuuZPnLwL1Qedee9fLBd7mHQt62d2Cs",
  "key2": "ohBz3pA1ZKfhYDKZkoTq6v7NHebWejimC7XBrYBxuZCKYqBFVCfhcVwm5U3XvCRYvDjbzHnJdVgz3TgBYfrs6b5",
  "key3": "36BiM1mSs8Nrnky1BTTQinb3nN8LYy2jSSd2JgwajF8Me6S98fNG3d7zmnsUqwyC1cV3g5ZH2hqf3t8Ha5cHk5G",
  "key4": "ACtfKB2BptESx7gSfJxZXMc8Hjupxx9TBMFgnyK3yfBiqNTmAuLavGwji2LGZwBwJ4s18QroM29JrB31Su3SEjt",
  "key5": "4phgFcni5jvyrvEnVcpdB5Skhh3VkQmvj2PfVAkwqzPjNTU66zSh75WSuySvBUBU6k2T4ur4V33GZA1LcZP98HU4",
  "key6": "rSMZ2rXPbRgLjKKj5KeC58QHkmYMW7ongRMcVouAhThanbSETZMY7kNRFeRAKE8oPw88SiMHZahs8F6y1YwWgUS",
  "key7": "4mnKmXBa8VMxU5FAWeRBwcqrYyuNAtJLPbPPbZ31ozaSksLChAXzhuawa8Wa1JrKbc8HQdHohQ8nFha7KmSuv6vE",
  "key8": "291wrXoKAtkWk2JU1VTTtM9etrJwGjYvohwxbfxrUkz2nTyWVmU8r4VBBoFfnUcfmUXSmwdFANRyPGXRrZAbWXX3",
  "key9": "2qU1wU3JvFtKgs6AJZCdhQW5V8anJuhtrGKCEnyfDfTqemybN5nPWDc6PmCVBjwp41EmibxENNyJPhWX6w9nJ18R",
  "key10": "4Wgevk7upWjjU9Ssjs7cJqGCHghU2APP5JpGqPTSuampP339YuS3r5p2knLEmwijpJFFE78jSZexer4KrZuK1M4c",
  "key11": "EeGySR4nCg5fxGQiYN6Ub8wKsv6i4sKFVA9JodgJ2NjYefmEpPGvFvP7Xsv62TmXn7S23ykQxsxRaLyQ4DN2Mhm",
  "key12": "5AeH6VZzXhKRKgQrpNnNy9XNKVAEtTSF7U74P1aRQFzT5rn3JgKGbJvLayp8V6W9fdqZMyJnBUFrRUA71iGb8QxU",
  "key13": "2PJb57uEN9kKXPsnt5WtkF7tYTNZfvBJh2kjPu3LAqjybjqqxqjpHrVYgvfCzvnnpVStoBkgBJ6uRjqbgUaosrhJ",
  "key14": "23S4dubbWjx3ZJoGseFymXK1pUfmgWja41hKo16bn4QqXFJzj5FaC5rgg9gmn5ZsME7ymW4aZJnsC3KMyA87SrtP",
  "key15": "39MoYp4g7pyCRK4usAfjkazFCACrCWPNXdyfXpWamEa8utCkfkSE7VZybiyGHSxUYDGhDEVoauZQeL2utgRWtBCf",
  "key16": "3EGg7MioS2eMsGyQe3TW9EcABJWDSKcGSFN3u4iEwjAEKa9xWfYFvc6jEMDhgyHwHL92Za8B9dKzVULfTgDyk1cT",
  "key17": "2zvj1dUGCVeDoSoPVeLYx8zcWtLJaMVeGgv3HYSrPWY9sEYkY8G2dB1TV1p8xqshMtqEaYV9gqcPcQYz1mNnS3hX",
  "key18": "CNsXv69nUUrjv8hZUAy3Qs4sac7nyar2sywEo8AEPS4vJzT8FRzZSNWUsKJEFVJLjWBkSmgKWGnFvxuUBfzfAxv",
  "key19": "67e6awpYSwsN5V4JmVUsCyYsXk9hXnv7ChsyDKpPH8W2pZ5eRyQYDoJGHwZvQ9B2jEZCDMoCnoTUg4GNzn184GvD",
  "key20": "TAjBuKrUq3hohR1JSA3Xmq9nt47XL8w9uMpR3FH4UN6PQNugqcvUNrKHQQKXRbRpTZV1qWJKCYvszHAAgaxF9WZ",
  "key21": "5KRHjwtR8moNBMBzFWUcfHNRdaGjo7puqaJ32PVmZ27wkBk83zjz9wbRWbFRRRWRKVpmFmxVZgKezjw3pVoAMK4t",
  "key22": "5gUpsq2Q5WXxb1QAMo1rZDPF52hZcmHyJYWEAQ7VxuydhnCdU2SMzv2Bnwm56RPC7yagGA4Wv4tfVqjoXob1NNkV",
  "key23": "38BesWhFy81rBWbwa8TvkS2sxoFSWjKnsrGL9BBpay8yEsNX6kSe6Swpt8pKa1n3rX9yGSxzaqWQiXgzfvUm3Xw7",
  "key24": "3esznN31wTomWqKUnba3j25hNR8HtgMw5H7eKiBjWjUkdRPKQRfJy8DA6nHjL5Pwdwyb5s65oDEfV3ahxiQ7EoDf",
  "key25": "3TdopudofpMWkd4A7eQzPZ5PS1DvXXuTArq6QktFoj2tooyPxbvxeyJytS4VgA7RRdA38EzpJHCuHXiDVQoZxtAU",
  "key26": "hRNakexTGS4fjgNLyget2hbRswuLuFEZ3ohgQZv3LRhFwqUFMfqULYqUHd7zoK51Jv67wsXZLVBR36eEahEivQh",
  "key27": "5pwx2imVCBQC4AUwEM3HtRBD4rRJqB55xRxJXUHn1DCn7QMwjuBzPKGow4o1C2dnRXGjAQtfsBLaRbXoEbvaXZag",
  "key28": "5rrh13oRiE8VaVfk1WtnpACEhzmweP4RNe4C9TXwGfeAQXdvJ6ESKPKtZYtvfnCiEM1PGXmoqs1WxuT6qKuR5N9T",
  "key29": "3i2mcUeez5RuKxoAW8TYCrcSBjLX9zeXHv2ysZycK53r8f99nJvSu9v2egs8hDJEgEcaEZQXMYWdvnfeEezoqgt",
  "key30": "4WF2Z5gi16Y1EghXedJqwRmLZUvKoXDs84iBVrSpvSiEP41tPr6aHmcxuCrc8GENgViMTpXR5G699EYXYsxRTyA2",
  "key31": "LUUTmLX4EXKtvk9HCQyWLLqVruPXc3dLwTHrNfsU6rBi14NZ6dS6dGsgCBrzUQubsMEhfYqkgJezV5Ubx39BqBj",
  "key32": "5L8wkMPCHd7LJv5nqdK5P7hKcXX34EQVrArS6cgzX3mzq8AwoSu1wkPB3BrWAcY8MgPttFnw1bmqcRK2jZR4LA4a",
  "key33": "5hD9GQKUXgixyhXM2VKmvRH5n6TKrza7ErWNiPi4B3GbMo36bAK2MPCuZTTkTomCpc33xzkPfvvsa42w9x5aa5de",
  "key34": "5ASv6SbjRm1A7VRYsXqE3gDvx8nqrNfXNP4GiN8rHbbZVSSMeY2FrUZPD131YsGK2nJ5b75Kcqk8yATqf9cgSiE1",
  "key35": "cPixKPd4i1CCkbS1c62mVjWngypWs8xw6pxSBXoumyqCAB5SoW5ZsVQun4yRCLPgL3jabKEWU8vETemU9jXy1dV",
  "key36": "3P1oxE3h95vNfK2GR8VV7VTPbywEcWRqdW32S9Kq8cepFGMfGR6AaBgdYv2rF6K5gq8GJPwRF4H4uxhYrG7EtE8w",
  "key37": "4RXf5X1UnfKqTzKdXJcHQP5YRpLssnUWGtkAj3uiKmT4DkMF4xNbLrkVpekU9NVLDZEeVXfHcYdK99u4R9hifxMK"
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

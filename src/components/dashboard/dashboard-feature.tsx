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
    "3mNDXei6RmT2KxXEGhwrugcFmeqaMzCtoDmbgLyUhfLhnW1Us8MJxLTSoNAqBgw5CxCPBA9DGgyCd6T2BNAfQepy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "654uMfM1anqsXCekepL8zHg9J4AAu1HR8q6tWYFX3yK5FqevfcLB7EcyUuT1VftHAo9H1E9J7HWMtHj7ejKno7uh",
  "key1": "4XRwRGC7Lon6xMK4nRna7gg1bdgvu7EBVbvwFUFb24ZBpdppajZkjzrYUB996Zc3opbsNtrLAEppkRZFecFDoiJV",
  "key2": "3b5enM6iRbHBUVyt8ShmPYQy1BxwK39iTLXghPhH2dStsBXnybL1DMqojoV9MPT7CxNg8JKbE2GnscsZTXx8ZAd6",
  "key3": "35cfFJb9gQKPD7tQpRhVQe6S3o7HA4hXWaiQKA2tWN6sY5WK5bfk1NQbxzy97z6DTzAj98czmuqph1ShK1ZmFpHb",
  "key4": "4fkE8odWPKo94HQpxYitrK47u7yLhxR98JiTAKiRJBkKdGPfMas4sVn9ViqzNWYe51wds9AWuCCaLUHXzYhHdwXk",
  "key5": "GBu3d65o8hkPjxUKE5cJKWFqanL2QrJ1mpn3m6ATuUVEcngA3NdSz1Kaa1axKkNiGNYtFQ2cTsJpMZptZm8gXxy",
  "key6": "2uu4aVSwpBk3waReBVvmowJDtJivms3kgFDTPZDhzGasJXbnNSDPFnj9Ye37VuJQQV4QRR8WLUaA4JxPd2nXxgV8",
  "key7": "3kdaAPmsAFTMRcJ1TtaRdpgWtaQz9gHSQbSuWFMsJ4YRscCgmxjYLHr5doNnV7vMm4KXyU2TN9inrE4TqWvo3sEB",
  "key8": "3DEHiMqxq7kX7cRseg4apgWW774CNrkF8tn4N8iRnp4RyDZgX5tcRWF7miHJa64CpSZExKmyPA5hbwXY1uuFS79u",
  "key9": "4Uw3wTZiRFTZeS2PxeVTBfVWn8XhVhq2cBRvMp21c1pXjiKKx2982jPC55HtP5tTjWS4NbcTmn2tsWqwShrQgDQ9",
  "key10": "47GYdNS2nsMkmbNeFiAwV2mACYKccUC5PR1GwyrAGyAHw2kWGee9erCoFbxbQhFnkfvdVP9xhRzbG7iHCF7udMbs",
  "key11": "5H8Jg5FhYSM5qzJozoQwiF4vYUP6QSj7C8D78ogAqY1Uk5eLdd47ntjHuJxeWcL8sHC5v7nYhVFfvWNDm1fymzQU",
  "key12": "5gvVmMAx63T5Pqar3JN8Dit2FWBHUB6zTpMwoK84pn31P4r5jNDvfjKCrHGEMvG6FPqfRmHQ3Pzsr4EDdrrErsSy",
  "key13": "3RCNuckF7eJqX3HaUVpjPBBEWZR66BvUzC3NNrUsCzknC8ANuveVwo9jC3qfkFxPUvUwUoNHcL62LQLaZ4gHfQrr",
  "key14": "5MUc2JnHMWi17ZmAjXmDetWACtzRkdNXg9MSZ7JEwXbmYcEHReXAK7RwB5npfaVP45osZe745Nexk2HNBZEK4eLT",
  "key15": "4MBZVGiAQno4wGwnxMk1ANREmBjSVuMfP5nVNtYEGdAHb8EhJt3Pxs4CmjZqgprqUmpg3jvcTeRUNs418YJbfekz",
  "key16": "4pLNHmovdpwkSMSxgzbUtVaXYRJBJc6ibEESwvPQXod6vxToeYGbNRLiZTMFmmZwQymAtQKaDJAH9mDc7icRj99o",
  "key17": "4uUQECpHYMZ5FNCjVZLEqQyJg1i5RrJoMvJkiRr2uhjaBHDMLxEwwqxruvcRB5oTdTuQpqyRHxaH6PbmZ5wzbGRn",
  "key18": "n3LURHFSxt3ateV9cZXMRYYutoh9kM7j2h6uRTdu3UZc16VSLgJ5kbHeLrsQ5QgoSBnpm36aigNFVNcRQhfWRV9",
  "key19": "4if94t64dkXZWLmZR4BJ2YGy9LgY8BM6fSEwRGCk9bnHFZrAjcNHCyVgnmtFM5q5HkPM1ccrS8f4mMMk3rLMTaru",
  "key20": "5mcTWYkJW9KZrhVPbj6KEyuML2Q6BC83AoB6g8MRjRnrn3mSz2WYTRvkrTsusf2icszRzRdN1j52LQ8DKAmXNanu",
  "key21": "2HUYfHGA8B7ZLDxXVsJL1WUeqZXpV16A47yzEM1PciyCh1uo9UVvqKMY8ckb58JTvMCJBbmAWcZj1PgbtrikHdbU",
  "key22": "1ypphQzWvAmF4ziLzwcBJBpNJUfRCEYagoWC85wBx545MGna7i26dHmZLbsDAtZc5Erz6KLEecKrVoZhYvxxrzZ",
  "key23": "4JcCCEwmRgPwWct96o9zSyWmdd1hqPh9StjSvoeoczCdLFHZvMbV8AMk8k5CqL4TE9rWCryXH48kyZLpzWvZhLvQ",
  "key24": "3RhguDrBkTt4xkuhbncoHJdMYMoKzoF3By1L6hJKa1G2w36f4yLjkEfWUG4eLtCY4nmWW4VEgVLsaedmd58zLGML",
  "key25": "2cXjfJR43mcoDc5Rph3TmMJjnqhjdf7y6xSR7JMTGn26XgwQaLsLB2u1C82yMJsYzHBxUw27shQuicebMz3gPvFL",
  "key26": "2T4V5y2ZwqSDkbxF4bJXb9UvT3rD5cp21WUWBFdK9EDJxUf2cCe6MAZDugnrC8pd3RMKNUbBQ6Q2qhshDa3znF3c",
  "key27": "2gLTdMDiNZpeAMSEENnugWPbLbLKJSqbVTyHS1CCjvSjkxo24NHEjSiHCyLbwGwZVVnKTCtdCJDNQGNe2Fb5ReNC",
  "key28": "2rstuTq3GH2pTHzUK2T2nwqmraGWsoWJavpDmyVq3tbP4RasmtUJUfZZtTbtCGVZKxRYmQ7tu2254jrCeUYcKGnm",
  "key29": "LdT3LG19S5o82LdCrge7iU4NDX5FkRMiZWg46zuqzfMMVFAUcE9UxJNDG3QZ5ok2n6hr1LSK8NA21J7Nv7Lajix",
  "key30": "AozmGR5VoWF6qaz2DZ6ncRT2DdA17Lkx5L46NHpE4zgV5tpUTU14B5GaHqv9XRraKESQiXBqQaFpShv2Abdnqx1",
  "key31": "3tgLePhHYvAVuekJa1zkiBtkSn9uaNJaanibHRtGfVdZLR7xZoSMuvCZwL7kS8nW8ifUuAJoyBjH2WRsLfcj5AxG",
  "key32": "5RFdUsYessJKTv2L8KGeyKA5Sc5QgwViZ4v3FTbKZDQdvq4iugfreHFcDJzdnQVa6P28RsaRavAHYxnrXr78VEbS",
  "key33": "3GVVzF4pMteHvPCwHmzCeAk1uSStCmP5DA7z5UV74ZMfzzGJ3W6pbtQ7R2YcDtCYjevFsc9sbszYqWDjvW7AdxcV",
  "key34": "2c3dgn7kvnaHi589zGVZ4mdLN5t2qfxU8TJcMobQoTG4mMQhKRJYnQNacvjEebxViVqdFxyJGgYRbqCRkbunu9Ap",
  "key35": "52neQC1sVu5XWZEHknwWSJPPEKkLXdqxbhCbDuULcxcpx2zcM9U3Qana6zSUTzfCk7AeDZkb9NcsVAfnXW1hMTSg",
  "key36": "4xHZZ2NiFgJv3UDZvX1YCUS9EguVa1R1LhhTKoGLxgqUm6ugShtGRMQYtnedQauDjxsnq8C9UdejwJMKfHnHSsVh"
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

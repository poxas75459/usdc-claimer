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
    "WbhQmHvNT1cmjn6chUNnKvG9CuphyWs75dqvvjKSTPDvJXd1QmPnszxMBzMhWu24ukubRuht2p5EjeuNrA8iMWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AsiA9YoeqsFygmh15Cc8pv8hA4b5fvguYtDdSsNmwKygp64z819RTg9WHujuiXtP5vZq6t4tkJpTaw9uC8PsQMD",
  "key1": "35JPV4K5rXmCwUsB93kEpTnBiuvrzpgSZThvKNDEGtH2SqQ9ZhNCMqvtcciAPXATJhUhYJFXiWRVwfduFC4pyXGs",
  "key2": "4mK2FFKW51mAUL2wG3twRemG3nMtdr9nhx7j5T3uHkHDsA6hK64WdVcABF3dyCdxvfXaycuCi6NFrDfkmyEJ2ZSA",
  "key3": "2kdH21x8rehQC7QDpNhnQFPGkPahGFgpTubEfMHLXwseGtDkPhCiL793Z4pqnQTfV4YUu8zaNLYb2d43SfyKYLCk",
  "key4": "3hboDY8SLFXDW8hjHCJ7qrpDShfBq6Gn9cnyFv6ZEPqoENZg3r1oHnYZhAMdggGX1o2X7dxyAB8gutTn73J3MC1D",
  "key5": "5etrd8YLdCxrgHsa87t8v3yvJBgmZjxe8TkpjYkUGTmapU1Y9PuRCtv627kcsACX7xSdpYXyU9DTn5dkbArLznob",
  "key6": "4wiGSt6Mg7TQsiHxDmKciZVwsJLgy9Z5Q9B39sbsrAYXxfYzvAEYqbW5sJJLpyXN2bcpygJJbHv6DEL89fthSfmf",
  "key7": "tajn2GS3hZDw7fVTNkgRPKf2aezLvngQLpwZmRzLjkHbLqpqtndKiJAiuu84mgJMSdtPtp7L8rw5Upekoqdd21D",
  "key8": "5M9uY8pi8rsLPJNnx65AqR1mC5XULxjepENCAvzcqB5xhprrRwVcNg2iV8Ee5pka9oVnUAtja1kxQ6PqhHQsLTCu",
  "key9": "ecFSeGq7qC21jdDcQJ62Rwo3dTBAmwBZLjF1Fsuxf5dmRACb1HBZngknat7BXJm8MbRJVRBESVx5wsfPadHctLp",
  "key10": "AdeomAvAwBrAZL45wDuLKUZstz92xsnDUYZZGoaWZ8rp9UD7CRAF4WAmFkh4kZkMTMqXWiMsBaWGGrtwVi33U6r",
  "key11": "2bxbPkAbLYtwn1RzV3qCMZ4JdtnrwXytXKQns3VDeLAEa35CsGU4F8MXoNXEFKTXEQemXT1C4PaiH4SoBsrye9yM",
  "key12": "27VfSPWGtTZcb5ArgwhWShFa1M2aifm37yCFTuzASBFTMxtDnt2DcR2oHNvv258FDgrXMJbrQ5g4EN15TyUnc4va",
  "key13": "3TqDiBe4nF2DaueGLho8VxAq5rFm4ECX66PR88ro5EdNhiNyo8Yqe3t1niTeGnpdv68R19EqvppWZx6dg1x5y8Ge",
  "key14": "2hYXrArSeC99WAebmiMAw6Q8aSDarXZ7X6smoZLzKKP7XVGM1gis8dUsjJXWQrtWsD5TPAh82D2D6YtTvQzHok5o",
  "key15": "4DN73cvTQLjj2uRw2a5V9SDMqpJGtyGmf1GKHtq1Ff18QBTicdUqoVppSYWRB1199pbLfyJV4TgJgAZUZyF8MWN4",
  "key16": "4r92dTmM7E6yCqb2oVJxQductBgdTt5Wd1LaLJKon53qvLM7VBsY4zobwEyMhCGAR1TDgZtyeKfhiLnPV2qtwDLZ",
  "key17": "3FAnX1JBNjCyuZPVKYXhYwfR8DGoLKzV9jpsoyAYeyJkxzWu5E1haHjhm4jVtJyHacYxk9dMPBX4WpVeTcBonkNs",
  "key18": "5vYh1KPozuVrhrogyfp4jzvFhNWJu82Ao6gCQF72kZvECR4YMZj8ibQuePSJjHZUTMVV4hYha83pHgDGB2Jh9qMm",
  "key19": "2ZGBois5PkfU9hsZ6nWMZgjr4rMVuGLmDB4L8NL3gKzs8BCELhGda7unFoM6v3PCYKEs3D9QJaHX5xfAV3MbyLct",
  "key20": "2FcieqGiebEtXS7GcjHPbUBDahZX8VmKG2UxbFMESgHD5RTG7Mk6xNN5vwaFE2eB4QuQm8Em1XAbbi1wQGNFwmwW",
  "key21": "5dkTcWTtSCXodwTyiazPBrqHtykmWrGbFccmom2BZqKbWcGiocUoFrzgfKxVDnLPnG6PKVKxjJpPoSpfNjwSXLci",
  "key22": "4YGm9pD6TZwfPmxEbg9L3qsBjgJicbGonvym4ZTyoNUMSdVRazdy5GZ5FjnpNs3rkwHUkv4itxDH15T2E4UPqcfZ",
  "key23": "2LSbNMeAm5LobGieYB3AZo1LxxkboX4k4bxcdLjPNwn9iARJJJDXtCDqGqsdhUhSHg2xXR9J3hhnJVFcEtPN5sgZ",
  "key24": "5CEaF7cLE3wucsjqL8ZJDBmqVCZdXN12cn3qmMQtFXBJMNQiju6ubYRtXYb2dEUdZWEytJuLkuHiAP8LVZw8nLvB",
  "key25": "5U5PLrkLQPAzG1RxuMmETznUZKKriaVaShjLKUp9AHHHJjTLS9pDgX5U8EDZkychDLVZK4WzfFWfBMr38Z3Bc4Nt",
  "key26": "2RrJBcdE5tzUPniN3C5SHMsncFntdkxgaW9ZdUqgkvUPYPo3AWxBfXWjApAHURAFUK8pG5rZS94HR2UsmvmWh7yc",
  "key27": "5eqtYagFtoPe9JxEo2LCbrrinYB2J488s17T11UJ8Up3mLptGyB3oYVwd8wspDoo3fU6PBTdiMoMi59AHPurz9Do",
  "key28": "3aBGmvq3uZWjpy58vRLYsysaNjPvMJCLrLiXSnEjbxM6BjEsSZ948ovp4FdicpHrhP2yz7qHNi9NcWd2qKL9Jodi",
  "key29": "4uWWRxqctogfNZ4HqAvhKn2hLSkRLhUwT9B5LqTPTos2fMif9N1nVNGgxoX5P6YYNLNDorRuWQYbNT2dNs3hn2Vu",
  "key30": "3Hc2szSt56nhNjRvKaaLRfu6hH3rKsZp1aM2obqSwAitubYheCUkqQgouhncpy5smaoTYQAnbdLjQRgktgehoifk",
  "key31": "4cKJGxXSKUgMSgNZk63gvo8QdF4dt5MnhJ1FdfmfRgTFvDKrbWceiVW7K9XSBehL3KtR1mRWyZsTL3xw5s7PrQKv",
  "key32": "3ixx8m46oY9Xe2bnwMLjkFfTmrfFR1KFFSBWsjqUdvHrPXKdkw9wUnErqbBN4nsWJ6ofHcixdCsvtAQzGCBBEaPZ",
  "key33": "62SsmWjW7YzufbeyTwuW5hKjFWn2UpgHBc2aB6vQqJUppDUFJ2bdwUx249VTAtHWALFt84srmuP4egt976XKbJ8r",
  "key34": "31iTxt1cvzQ9SAr4ZrUp9Rj1YsUvToKdeCqGBagbGM6wdVWKoP9DRGbnPwZqteqJnkAAnfTET9s8ZLLq2ZXYjkKp",
  "key35": "eEgkwZkCRDnFRzMwY5ZiSv7Z8revWch5EUP5PwSAAH9k86HdyAWWdpVr5jJ6GKVPK8K9Eh93Efv8MRn3mtiM8gP",
  "key36": "15F5Q4PFUzW2XUnGKWaJF9Cvo1yycQ7ynzD1zoXFzqwQ6DGaJTf95gxm8RNv2xhNCH9FijBzHSrQaRqc8ghQrJA",
  "key37": "28HKjXjaRxriXTtNQazZHD75Fgu68RXyuU3Sw4frdL7cnETr4Bb1dzo7dMxt42hbXpjodVANPhKrcTZb3USNvH3K",
  "key38": "5L6kAy6rh5Z9Rya1m9HTjzq7rS6puNHZ41yYJauutQt7prKcyJHLAZhqPYiSX6HV39pkBJeNiq28xpqNcHWwgAtk",
  "key39": "8UXpgnH7Usp71o8SFKqm5jVxU3qoczg5nmNGChZZxBH78NqaKYH8a98gXCc3Qaoq6CNAGKYKmNLENKpH3uzq8se",
  "key40": "3mUwx8RqiPPv5ihu7WrEVMrVcEXTGudjHiEdfX5b8L57h3S1b6NUu2RCovs2en6Wh2rzHVSsMJL4e8C18kvkTCnc",
  "key41": "4bdcWjpjWjXxcX64w8snbBR9Z6rsibA4oHNjehvJgftXFMPg8PAyd9uf1F9bLmf8ybTDabLMAWJcT7SpSLMHPTuR",
  "key42": "5wGTp5nAmCoLQB63fv3MtXnebh5wnkSicGB1xnigS7xc55wKnEeai9QwQjqrTUrisP4gWPYGuMkrzYPPK2tbKjW6"
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

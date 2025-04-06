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
    "3ZRd89inATgvBde7hfkPAWtHqXH1B8PDJbAaxcLsrBoMpjW3ejBmWBhiXxtCRueYjZ3n4WFfaDJiMQBQL7HEc2zM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fpx7Fy6nSmGuQNNCokQKxvtsj61eAVGUfExC3vzwUJ1o3zRucE46AACGQjXkozH4MN6KXZdNJTZbQCDQ14s2EHi",
  "key1": "A7aiBAi77yNzWkyCwcKNS1xoNM2mMnZpLxWx3tTja77MZHpXgh3jHgJewbVfpwdSfQvLTZGsq9KwVopouSrkA5Q",
  "key2": "2oBrRGNcgsp841stFBt34PYGQMP9s2AbRSbWmLhseidTCbpDh4wvayNx3K1YSDLect8nXRzGN9AauQVt36QKgKLW",
  "key3": "HrgNMXcW9KxA6MA3L5ajNukupgvr6v4s9GDUzaRv2CtWmmfpJTfrd4U2JfD2Fq6TtniFvGHXPqg9TRuLgQRCGgp",
  "key4": "isirEVeSjbsJ18Ws5qt3ULHYeC5Hd3VPNPfD6tW91j7o6HfqyBU1B9m7oQPDmLWZNu8mVjzg5NFRd36tEVhQzDQ",
  "key5": "2xAavLGPvcPwdci6doibHNzTLN2zhhyp7k8Jm2hxj5zFwLeYR1d4QdvyVCDRZMn77tpL1FmrzZVjRTnA7cqmDL4a",
  "key6": "5LkzUgBQ5fYW2pq9XhsQvJCBXnANNq9NyinZskogo2xUgbXArqt2sHg6KhXkccgTNG7LAyr7roH6AM4NU4mW593U",
  "key7": "5L8JRzAEDdUcHpHWiJGvX62auHEmAvVM5kMBc8KqbFFRqexD2JyB5vQinHRSB5y6fUH9VJyFUymZnZ7vhp8YJzeK",
  "key8": "34wKoLYZW7D6r8MzeVqH35n2j7e2KEP3uxPurLFTurkggJ37CgbDSGJKsHeSEoEE3HHNcNzzFbbe2m3aUm8uQkfu",
  "key9": "3cN1G2XJEZQ9A5F8pHYCxgsbuC4sCyCZqCu2rK8Josgmj2BJNtTDBT9dtCukHaph4a4y73H4ihgcZdpjj7dDtzSV",
  "key10": "5g2WNw5evoNjJAQDfMztx4ZhgjqMLsWMn4JfsZGiFLdwV1zW2srQuvS8we7hfLnwHqNCp9HfcKW9WBzfWSkEsZAQ",
  "key11": "5UZmLjU8FUMJhP4oCWjmukM6g2wS438ZYnJtbTtvQKxRqWTixBGceunhEczxLawZ779bFeUsJSK3fWeEjf9p6hsc",
  "key12": "33GpVgbGr884XYfsuA3qqmDhXDHpS5u8C8BC87bB5DqNiPY4VJwfnaKLEC58LWGioKxK9EAEYS6dSHBJr84nPruP",
  "key13": "67deSFmBdK2bm8Fpzy5TwvSJMSnMETmEuKiBQfwYCMM6eKZejmfr43tibMHRMLkcxBG5LdTyQXE7SDaLdLpU3jW8",
  "key14": "5z2jzFkCYiSHc83CTMomrcas8dk87MdbtqDx46WEUAuyAAgZpkf6Tix7tfuCyWbaMXLUxdSPasjkQdP4YDmFAuWw",
  "key15": "4VSWWe8pi6SjxdgM2fjdfR9jdGKK1CLU12WmmZbabKQwCRVWyYqvvWH4LQnkxfd1s441qBcHbbw5aRSf5ZFiCfuz",
  "key16": "2TkMLSSd2WJnHCcogqMqN7xbPN1yLFtbLuhbWQtms3Nxpsuz52trNu9KxEATbSiD9BJfewhnzYUicxX7x4fZvift",
  "key17": "ZP8yPVeGTzrTi7jCJ1LTTZETpdRoUHXWWKjA7ZMgeua62Kd2Bb8VrXSVoqfyTkwAEQVMJLc8A3p3rVU4JALQtJa",
  "key18": "zUofufBxYjeNnmYK3nPnhDSipeDYvjzTEM8nLDS9fx4LV1YhVxLkq2HfDTfYPQFZNHaQhRHs4UwU7MJV9FzZvrg",
  "key19": "5V9vUPZKNCWziaGHHdg9QyGiKhGaoZWtYKoBUC5FXwcnDvYQC55GpjJVquQNMr9vRAcFkiym6DRoCan9fowyjAKZ",
  "key20": "55dA1Sv1dGJvE33ZGHgxpnQkqNPCivqPBXMBmNvNeK6EkxvAj5EoVzm3H2JrhHFg9mSU1GWRGqh6R4EGaFQESd7A",
  "key21": "4k3oYusWZMACEZjjwQf9Vc8idXHbqg6QxncM4MUVKZr8xFTVHGSXvkyLPJdiCWKYoEJmFM4WUhYPwpYEfkLVGXg6",
  "key22": "4dJgF9BJB7QZApMSroF6jxoApkv4oEBvkepWUpMh5zeYjRPotbR9Pj7fH4kK3pzVzjyiKfuxCBhYnYfAVWcM97ai",
  "key23": "sx9GT6W4f4D4Gi7K15GRF6xR3PT6m54wYbx7HHVwLTAjcoY9zAcZ7oppeMWD6prquU7DbKqh7sxcPuEakqbU5p6",
  "key24": "gC6nRzDiAPyuBQUSA4jmPCTYvvNvepCsrisn31cf6C7VWwPfgWmyu6HBP6zQYDqVwkwu68oaC2BAUAxDwbdTJ9H",
  "key25": "9BRafu7y8GbwiF2qSFNGAUgm1k2poLdYyHDeKHCVYRtkKGyiaeJegv7Y5eZVjGNF2iqJWsS4CXwZBV9nx4GP1aG",
  "key26": "2CrYNY3yuY2M5Supesz5ghjD4Graos2rxdMp15kbLtR8nrq8eie7brvd4DgRpS31yXHr728nATeqSquuJpVgz8hR",
  "key27": "jyZTjWf7Bt97WHyXXgCnRjaMMtqvZGHiGfV6bpnUa7RCnBnyjU3AKPQHUTppfCPq4QPz4vz1gY3YKbCCM5VpbMn",
  "key28": "31erHsbqB48R48nb6jmjZBYYTbF9cepS2h7K7SM1v9iD4EAZ8SZStQFTL7bffbauSSrnLhniz13Qq43WhGRqR52h",
  "key29": "h9upxwJSABREGKK4AQQu3Cj4oRjoF9HjVcz2HYxcRx47nN3BJFhbV7kJF8vZMVj6afkrCURiajx5bu8L14wEAWo",
  "key30": "EKpVE26HVZHzhdotJneLev58gY16TTjWu6JTEHCLeVSf7Nz3tUoDXc3pLHbKrzXM7FfFAxukXNMjVPeFY3zVRxd",
  "key31": "4pGmL3Pdqjj3JWHFiD5Cd8dugMMPownmfCgJXCosZV5DxHpm9B3zdrXR4avGok1kJBjWsfFfYLmA7CvY6o5ovcLu",
  "key32": "3VyZQNkPRYt18YQAHpKKnkSiKNPmCQsxEQCgWbisVtQiu8jLwyXj5HyhmbQerniAXVgXePmG3aY1pwEfodP2cR5g",
  "key33": "9UfyEj8S457MNmVF9WvgaGgQEtDDKXNe5k6j4K1BUbXi8y4tnvd74cLxHRnkyQveuLjZYxbaRfc2aEUFP8L37tw",
  "key34": "5VeEef9u91xCbaT2QfF55ysFASKMGfSCjtmYdXocRiJdq6phELNahERCE7zXXjpmLZ38eszx6kWJW7NE2MwN1X9A"
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

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
    "4giVn9Vo5HqFuE8tprcHLeoHcDHDKjbV5EqNWT5depfeP6giktvBpEQrZTW7PNXytyEmFgSFvpKpnv49WUV8mVAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gAiaFU1xVfZfnwBNYqcYQH3XhdWrWPP2d1spENSS4WYvgYekqFR4RFDYDHFPttf4QKwdfkhtCjZyBTZwsnawv9t",
  "key1": "3qeLoc7PVVigrewZqDNQuDwwK7cMRh9osRH72P6owxrP3T3daxzek4kXxwkgkk8nby12um1rP8p29snjAgAtm5NF",
  "key2": "2AvLbahgh5zEi2yDgdCkrB4pWS2cUfycZkoxwge7j4ePcw2wVtmBnZjUFUjWrNgtjXgt1ZB3c22wdypLNjRndXfg",
  "key3": "5rvJ8BSbQNUep5zvq44EFD6LDCkgp8JBFZf4di1MLnwq3YuoDAERt3qgeQ9hgskk4Qzt2jaUqTvjWtvn1cGShygJ",
  "key4": "2KApiZ6yRQ5e9WYjMtu84fHpJhGTaUNCEHCuJBVnYUZet43uak1pv1xAhiejPxa9mwNEN1HmujpWefUyJ9ySvfpM",
  "key5": "2t63KduzKz81Xy5mfTHx5SesStmN2tL8WpUWtME5uK6ByCSM92Rms2oei966nu2ebhqSbBfPaxWCHeTur3tEo6xT",
  "key6": "3WM5ZY9AXuhzWtzGXGJQQZLKENTSYYwxF3GTuGKAj5npXiYAPP3q2tuN1LAwE6yTRJQuqg29BHtgVpbm7vwSy4zz",
  "key7": "5DU8RPHFm8j6An4PeHiJ4SXEzbiZXkvCcmxPYasgrCagLdAwAPKEA9aXbgtwiBGAj92mMUpJtZ9ZJ9LtHVHG8AmV",
  "key8": "3P4aKDqevFZ9SZQghb5J26rQrzY7KNf22MP38wad2CYjdN8Lv3aHp6XkfYkeanV5qZsLrn9HWWNf5S6ARpXyf3kF",
  "key9": "3togYMtBoMeW4MYoc3BhxKMfN8LvxmKgLkM8TZ4Hi7ZkfMoowf4etYRfYS1cYwYwfofFLVRVGpTn8Kb83dSrmLyy",
  "key10": "2g2VBGuho5XWWcyBpVb5FpvtvpPD3Xih9pzonQumSsgvA2carFcNGYQ2qzWZmsnwZSXWSJgJyn1RKGpfPE2dvha9",
  "key11": "44HHnHTh4EJyYjn1B5cLddBs8uXsJAuTR1ckaV94jVmh8Ai36a5y6sMvyz46pcgp3eeXBQifg1eyEycFTBxsZW2W",
  "key12": "45zbzJhTpEG5dSVPiAqEy5QBkgqq2sNzWscMENcKzpdkjwhFcnYnUM4fMzNsz4BbGW2Cp2179V7MjaEV6U5tL4sc",
  "key13": "4MJ3CZv8JNeYAor7eEYwVopQdgniVEwwMPpXeBc3x2u64rhzZsj4QMVu1zCYhDo8WiU33QN2gJGDmXXjr4mN48Qb",
  "key14": "3WFr9x3d3vwsZiPrJcovbwkrxuL9zFDmQwhS3ZP3984QHSBKXepBGvuyMDUuMShwcCF2ojd1dJYtHA6P3EAVm1Pj",
  "key15": "3xLF2ucWnXhR7GAZub6FWdXZjvTefAPXeh2634MpoJjz6DLkggbZd7AVV9QRfE6Ei3DXQWKKjb1wgLjRsWpJPoHv",
  "key16": "2kSuVQPyhFByiDEADiyttTA2wS8eLoBKbDQKiNKZfxYFuok8GbJX6Yx28koMhsWH1dgH2ukZTkmUT6JpiA7B9LkG",
  "key17": "5in3fdDDYmNCN27P5Pu5TNUR3nWqLeTZnunoaV7m2NeKgRStoo7vpqCgrEp9u3VwfBGjGxdpqyR4TZAGU5ofU8jx",
  "key18": "4EcbXfeEp6EsfWoUjGDNUXXqbUeJYJZJh4AUjaoEwNASASHiDb3RaVPcTDxvjjuFDMtYMNcuayEFpUEmrA7BBmnV",
  "key19": "5K9jmUctW8xRuY7amyGEWPmWveNEunLsTFP7Hjm2FeQRnsmAWjuoK4JV5g2YDy8GAmyyk7C4qEY7MwJVn7LqDa8",
  "key20": "4S7iCN9Ro1E77NHMrMm4LScu6dQ4iuV575uPeeRMWjdhN9iXqUNoMN2vejUUtaxMbaPgveUwspfH4FHAkSvQJbfw",
  "key21": "GVWgdp8GhAYQKzNGLBQ2pA1P61RZXsxZ3Ut9HpPhv3nbA7p6PJ3m947tE3XSwdxJZEAFZZn1CTfCW6TS4ysfJAn",
  "key22": "NcfhQ22JN5Jw7cPcKKDKR1vH8pS3nCbZwtJW2EgooTNHcac3gc91Ze5CDpurNe9RZXVgQKFPDh5UeEuQhW3wmBb",
  "key23": "4JT9RQtdKJD7Ccm4cAv8QEkcbDXMfi9dhkVxoAtokeEdPKSnAAgrpm3xgrygCVbcw2VjT9MK3WHXWhfKTJkr9kWT",
  "key24": "5Rc9H6TmKtpwNMY9qxf4i3XBzBX6AqNZAxuLZPfv2AJ7nfGDMNkD1n5h5S8nuhCPKionxkR6ecebnXSyf6KXtZUJ",
  "key25": "5ACXFTyMQghefMCSQquCaCTYVhqJ4oD3bxVyLV7uzaw1QhKuq56dZU6Xbf5S5iReo8a5tzrMayqyDz2GhdVkvUqY",
  "key26": "3RU6UumdQtJGCk2uYjWS6jPGv4HrgqFhyQDUNJe1M54674R3Uhqodgg2V2v2qZDeRzXq3wi4qkLADDpYri3a4LN3",
  "key27": "aSbY7EWYwpXsNoAA7QsY8iRS69nAHfUs5cQqhTLQSMzSuAzk8Viktegmk4h2XaeHSqTuy3wPBQ8zbECDttsWaw7",
  "key28": "5grVvb2D7w78nKE36HGKUcbos4rh4koqQ4MW6RmT1H9xzGj6s18w36wREWTWJtiT1MX7EPjmRR73UScsZ7Gi4qf8",
  "key29": "2Z9NsQYUxZJ4qJoCipFKXu4CeKcrKSHLmSYBuTXYgYT4u7siHkjtyz1acytcSJUvjJMm9V6eM6VpDqHToNi21iFG"
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

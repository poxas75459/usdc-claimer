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
    "5J8TGeLSUzbXGZJJsV9f3jjrZvtcvmToiVEDLYnoD7uCLupS2UbT7WbiMPDP4eHaXHuuS7Fvb8YLhFjmT6fZ8mBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YQD81TScFeCKP3bP2w8BYKDkqnfd8m9wnPxJxhbcN3BuwABU9P391SrB62Reup28tvMMqTPu9FCJTbtkwQtcjVK",
  "key1": "3Wbwjkagm36XHLKyhjZGWBYFWWW38CFMxRHS1NxR6h1Nqmhw8MrCVeY4tZ5v1XeSpmje25UKoc7cSoCmspMkX6oL",
  "key2": "dRxPLFmMkPUGAo4SBmH6gkMANW67qGYFveRbY9eUbMPahToNNCrApC8LoTmrZ36ScH5LVdm4RhZNwuZoZC8wqRQ",
  "key3": "4MeiySEzuenLztN9fGxGC97VwnT16F92rq92SArriR6PXZmWkhzVT4qy3qxkvUfLExYGNXN3qXrJQ9q8rrUD9tLy",
  "key4": "4P3TLvUZUg56EGBbYhqv4faRN187d2ZhYRQhxeMSuiiy2XZ9J55P3v6iZJgt3EJYg1MSVySZtksqmccH6YzNcaGs",
  "key5": "5FdycHesAU9jTQ5pdCtVurYaaaAc1Lt2CcELZgEEbGZKujLGciaDJogyRaLtecMFmpYVGzKEcVFt9DYyswCS7nf5",
  "key6": "2EoYvGifTsdM3ycyxPQ9GMPbJCAbS8TeFp59EoZVCHFCbFxqg2B1VoaaJ1kQPTam29JzKApaENLbYYUUS7FB3XyS",
  "key7": "42VeUZxrCk5U1U32WHFhRVYF9vXhuCi5EJ14kqevLxEr38gAF3k8Xy9zXobQVbuiwHx5Z59dowCxPBkcPcnNv88L",
  "key8": "5PpTFvc69QjKPGGJctJCFuSbbtKCiofUzf78wFEWfGwatqPvUMBrfCsuCoJuaEwgotzDUsZaaLa7QLKaHRJMiSvR",
  "key9": "5HvTdxFA6isytX5ZFNoQJobb1U8DWfAozScY39upbDNGha5AaRtBtLHfRLDd2NevcFo4NqZQQjznXrAGREE7CoL2",
  "key10": "241dbtVAWnDdMLVGpnQws1Mx92b3eubQ4v12V4EPmcDgeusLdBSYLxLcSSiufCAAcDusGY4qfFBWJGrKtkYHKh8k",
  "key11": "5zhQ32M3xLdFRAZAZZcTn9ZaJ2rbNCLtzT2PoPphRdHFVsZPeyskvPy673MiGJKXPLvxQbygeo75eMZYTMvgAkwX",
  "key12": "3EQ6McVnnDUVVuScZUFYD7D5CY3grD8yVr8KpmjB34CjcMPntfyzXkjQw4Cwaq8QHd8vUp3oqYQrEwnzjtKpjenK",
  "key13": "3FHLHVEuwTH8fi8qgK4rHUBTwMe49fcjPsbUdVSjH7Mjhpy628XoTTzQLgWMhGGwRXGNBtsaoxjxVFpgjo77zRLr",
  "key14": "4nDoQX16fy5NxXKQK99DW9a3WCyjcvNr77kiTGuH3zkzhdqMKwZzjSAMvidbw9eUPBKXEm9PkcYVpJaE64d7X4A6",
  "key15": "5F4UEgeVZb44Hf4pNGPGhCc14MKn7qcLWxsit3sWAUK6SEdd8Er7rbZAJ84G5PbRYLobXnAAEJJTkbyE9427M9Br",
  "key16": "63SxAb49SApstAf6ugiq98LgQQt4KJSFarcy81xDpPGBRKXqdnBaaVo9gtwQh4te1Tf3Ysgpf3pi86REPavw18wQ",
  "key17": "5HBoogf3yS9dxTnCWNmwVPJZZDUjhBC2H4KgghtV6d8MRJ36u1iZndk2FMaHCneWfCS44XHz9iRL4NHzKA9ojqNd",
  "key18": "2pduDVLnqcXCqjXQVzzcPkFwidjuTEzFsGM1keuyBXMh6neCBj8gZbUnrDe1gWvUvn7UExoWSyRrSMqdZ4L9D5W8",
  "key19": "31faW2xMbh96a8nPeyg6wE8Lgwpby7EkootddvyVwTY6oMHRKmWgATnhNCsVVbniLQkLExxg5jBMVGo9gSN1aC4W",
  "key20": "4to6q7mABUuA5KgZBat5bkdEqctqtbjUCjCBrUXCKSqG8bqWJ9MfBEm8xQDkHvffFh3TXAkA5KiSGPqLkCZueh8T",
  "key21": "37KMFHrmrLxRWPWBHYUrr66Qr3L8wNdNQDrUroGZ6jPB3J2CxYRqUjVXkyQKNP4MPm2q9dAYq3JRKG6wfvN55jTe",
  "key22": "3RqvY5BMdZFAC9Zx5JKTNHgYrDsX9dG3zCX1yWonf6y6QASz3FLSAorUvzw3M7QduHvd6C4FvuVQTWY1rxqqMXkS",
  "key23": "2FQUoFzRuUfB7YnzAa8gtCKAgXKtPR3zpULc7LWL4SFcbTqSf6ZpN5HYsvoPCFdQ5B8Bz9oNFwoWVWP48cfbLWsf",
  "key24": "3rwMzWEmUP5ZvRE5sxbcBqQet5XMDUbmqncBeYrQoEGpVQPc5ThnAWd52wMGPByphqTQ8ev7gBi2EktXqwehm9p1",
  "key25": "3WfSwvFe12swSKyUpCkha9QTvVEz6Nf1Ghpn3Yv7muaKWVnSQQY2bZuuynncNqSbxTYXt1LmLUxTmDenUaGUoKwL",
  "key26": "4cKQw8EAXx2g2zuEWiV7sLr9zSxtmziu6aHwiH9yDqyj4TkzvVX7k61c9iMtMAecFiwsTKydRHbU1WMHdYQuQ9yq",
  "key27": "mj7Jo3hGZHakaRLPDfHroC4nrnMoPLTqzs4zaSaPXkgVcbfg5yKotdmLghzcBMZWo2q2NcNsB8ACoxaW3MxF8Ba",
  "key28": "38a6rsGNbdsJrQKA8GZchkF8xQwsjcjwmcNqAvsmPRfrd7ckCZBcLbVdQZAEScLFnZokTzuEuqGJYc3ajHcsUmQs",
  "key29": "5gtxREzP9N7cSUqNCg52b39gqckvMV22PkV1tinbdQNLHHwGZ8koB3ezwVttDWrsKqhg9DTaLxh3mEC7eHGBuxgT",
  "key30": "5qQxhteFJU3Q1MqXGW9jDHtaEj146pQdXXAiy3XEmBQA5Zy1JdeYpX6bHDeThsseR67GXJr4XDwsYqpMuaUBhfL",
  "key31": "55RwuhViXF1TC5YDChCyQ1xMgjpyREcczhBcMHQ53FtFTfZXE1dYbH19jHam7eSBq3tzRHKunySKW5ck1JAjdK8S",
  "key32": "3So4QKLaHkWeXPR376BdCHgQneSXCA6jJxHLSvnPMq1BeSq7ESuCH5isgn26hjWvp1uD3jRpPRacnKfFACYnhbdB"
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

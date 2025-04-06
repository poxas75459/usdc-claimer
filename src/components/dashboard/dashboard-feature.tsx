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
    "43mc7mThP63zgH7NFxpSfLoji83SffHZjhboEMdZDLCk6rCgUT6AAWr7ZPfiSPvzv79juXniKUF92id5MkHiTFXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jKdaeDzMg6T5T5qDUEoFFPNyDJBTBrLHBazJGy1EHQWyAQBPk6S5wNEGB7bBCTVDNwM84b4HFAj5biWvhCWoMEs",
  "key1": "3xY2qu6ukBM4vMhnWXyPWP2kT9FVjV7MbVLbfjRnVCv5is8WMbUqmoVCQtqzRUkbsSHZrs2qfEXCBNyAdFTYL7nM",
  "key2": "54WfLjUNnjkVY9zgXXFjEzKAykKmDU95KrWxRcpBHTCn9AJYkqvroBnUxfF6LnqAykvCdUJwtyqSnCctJgBFzFP1",
  "key3": "65Rs461RvZ4DmSdnMisE6SoJ8YmUtbGPZAqhhqi7fBY5yecvcHTcLEUu87U22RE8fSRiHBD5DWuGUGwk6UeFW9ej",
  "key4": "2NaWS5rxFRuWRNFtWGi5JiQRLACURUAB9ZA4nznui72tUBbbMpdqZJ8su3ZuHAM9c5zLf4K1AHFwYZund25xQd4P",
  "key5": "5vr1VzR89ozGPL72LNNT8nKmpoZMLntx6nm5rL32PomXwceLhkvdcjXpd1e6suchaYi6XZi2wnEBHcqa2f9k5nNt",
  "key6": "4nDgzAU9hBn3iR4giURabN8zUcaiDDibcNbWHRDrKKZVfKYfkmPmspQNK5SUFeXQNPycRzjWptCz3e38taQNrtLs",
  "key7": "3PsDQWJGE3Lo8STuMXivoWqkrCqWGMNXDXfbZ5e6E5hF3ZCkBKbN3fpQgeBLenmDKW7ntZkQZbfqp2rnV4gm2xS8",
  "key8": "2HiuTYY54pc5Jkq7Aaqa277Xb4Qa1cmu8DkW8zLCqxzormRZDUHGhHA151HvAbhXZydsLd1CNR3zYcNJCvXKtLGY",
  "key9": "39p8yCDZMcG6d3oc6coWEv47QbwZ4yACHZUrsznkAhTGgWcAPMoQjFaXrWuYsofWGHiEYT2zZZtzyKXAtym4AFHq",
  "key10": "uTfSvgxHpV4GNCVsktWokQ7gEzgXQdjyowaswJbNv2ATRWfCXMugj4JqJonzJciB4EBoqFY7k3R8Aj9222NxyGP",
  "key11": "5nCid5m8WLL7aqNUCT6hNV8ewbYX67keFrhfFcTLD9ukT28qQdyE6YqGnmaCqgtEhujYvWJ2iBAGfBaknvimv4UF",
  "key12": "4M4FPKXqRpU6DEue1qCMHsvKFdBJjHuz6FsXgzN2MZ9WE341e6YJYm4NG8esf7M82QyKK15SMCtNxcHPTsUb5LE8",
  "key13": "4pmJf4NAhrkgsEuZab5YWagCRY9ibrWQwFv5Nda9peMCBEo7GD4hTPcAngygftK4aoaEfEB3Mt2KTRk2bsct1LX",
  "key14": "Nfhrm1G2XJ7wghyQV7RREHsRw8Agc9VyJyWhSwrR1DDKYBkmf1P7uyyuZcSYRjgG18S9rHJ2RVX8KjZgVN5k3RX",
  "key15": "EXxHC4HdQ87jZxR3G7CkUsyUyGaJczQhNZRvdUbt3XW5g2yVZWVBGesC2r3oUVVSQJgkrwrP6ifoeJYtDw6oKB3",
  "key16": "5LkF8V59Eep7LMwaUUhaoXJa3UtDGgHeYRG7UHBRn6kq5aQso4dgMLgvgSVxnYqbpMjhGHYgcaiaxQu4rFxLVCwV",
  "key17": "48r3F5KLLkPPnGL9vKh7PYmMLRzbegz7ekKstW811QfMD8H6dVBKtipkfdvzzJkoLGnKdzvScpWnTsiEKdiY2QZq",
  "key18": "2NaxMFf2jJhFA1rKqcmN5jF5HDnbGy9hBaDmHFrt5V52YBtQ6y1nH3NWLrLWSo6PjKNUXNQPRvz2TfFY7fTK1wjd",
  "key19": "3XmP1JTb7KffgoCqHDfCcAC71L9swxVJa1eGAQaELazfuGZYzFUKTEXu3XUtgdkG1obQYzLyKne4c6GuGKNkyDAj",
  "key20": "4kz5bStiB16atnMCDEEqbTqBLJQevyXstxeTegVZfJaWwE1Kj378Z5cvohoYmz1N4KgnRajF2mrHJZvNHEaRDZLJ",
  "key21": "2jCJpYksDUkFi67cq9hxesqogxtECq7UymuL8Yk53DPRuZDtBdx8Kh4hjb5rq8pi3FPqKjiXAQBqmYx285YR4SZ2",
  "key22": "5GiFwf7RTFxWBrrvmGZMUqMHkBpYqe9CYNXyusWnp4mjxjguLR6UkkriNy8mU1xjXoKntwFiaVvofHBMqrk9sRe3",
  "key23": "4TxU5SCpY2nkswQHWvtodppMUUGgzKyfFm9VLnpMrjEExBKzW6ebFuSunK971mDGoNV5LJqc2yXCzjCPtHaBvrEp",
  "key24": "66fq57EL882ipzLmFt635NrTft3H3Ss8ip5Tuw83RgpavD6ysHQixyZUwbrXrJkhdhCd1CVeYzwX8bYQSvgunmLg",
  "key25": "4m3JxEkETRvRkxhGF48tcT9wtDzirk4zM8opK5seqFaCaG1sghbwa9QV8VJsm6DaXnDYaKgAvNAr5G7eZu7HRjod",
  "key26": "4myQKAatHU1Js5xQgakiKxUobSBNNRps35SPPWgxH1DcgPW9deJBRzBgUwmUREs4QMrZC6AUWfNsuG9riXH6kKrr",
  "key27": "2T5E9qtf8gFcY8Go4F4xG6QoRJuzrNBRDf2pKfuCNp71cqgBrnTcnEYoi1fVRht2wdX83RxP95U13Tc2hFyM3eEm",
  "key28": "5wgve4hc111rftSmfQaeysHmGZ5RuH5PU16FFpezgTW7dTusPAumyHCdn27Bp1CPwRYUKdjEsKMW6cqc65H3hQrn",
  "key29": "2SqYRzN24ZTYTNk6TqMxMaHGdNAhSmojY1Z1pdvBZ1smApWRg77ZQH4cKLqVb9Cc3z6ikVTvr14FUFo7yMRMkZ6a",
  "key30": "3hZHnozpRC6nPNcbPB8umJm5rFBtRo77mfUW5bJomLdUmKX5yPUdRGNTivsdQUCvaGNmXifxfAZZFq5BGJnXYKuU",
  "key31": "5xbSnA7DDVyveYRvx4aPRG5B277dC5dw4a7tBUppSpwGRLToNpJcxgVuk96ZCzwaC8PuA4BeZGPfuFh4ybyB4uA7",
  "key32": "5CbTyTUj3s4hua7duT7cove1BbNqJ3hxb7gahbUkPuUUkPCVF86EQCj7FCNi2wF9SmMfdNWYHrAjEtbTuxf8N9wK",
  "key33": "NDunCd6nAMQPvsuh4fkAXUYMLSLdPb6sWNWmHwqU48cF6ZzwLfD1BA6G64V7RXbSUMMRDHFWQr8GAD2WyMjuoCW",
  "key34": "4zidAYHKgTzPk83tj2PmBkbccU8vrf1Gdaig48k58E4ZSUjuzC37bfGi8LYCayE73dxgpXuaGDzwBSZWYtbmbqo8",
  "key35": "3171mnpAHiZdXzRmYyHZ1nJfHTQipcdyHwSt1UvE7DDgg37tV9RBC8a9sSiVuPdvDFG7QvXw9uREMrNgnuYS88YY",
  "key36": "3aQggiiahYcGUhj2954H3W5nwn6Ex57pnegdBSk7UzzHjBnd9s3Ykp9R2VFa5sJQrowdckpewj7kKGBUM1xWzB6F",
  "key37": "84sZrps5nfwaVndCeyc8bJzBH1uDRMxevfk7FHtQ5YksFtLRA6i5f9nEqt3qKgVgZ2ZDSg3x5i5j47PnyMnrUBn",
  "key38": "3oKBPHwJZvDrqPpwPahiQJt26an3GY32eE432Np6rRaF4nDjWmNKpcyF1n68Kugm7TDpPyPJdux4pHZfJU5Y1tzR",
  "key39": "2tsngeuB5mbwFZgGYh74D457pycjKBdP1vYC7rBj1jKfHVuoCWjf5dmC9Xywv5mUvQGA47AHjWJKgzaRj97yQCLs",
  "key40": "3m623ZQZyGRhwGm99YKWsK4evSDLuMPPo7Yr1XZwkqwa456BzwGHihg3GN6ofLgUEpkqC2dnThNFzULeBhtUWeK7",
  "key41": "4C45Fm2oci4RCKDSY8uaXs33W1t9T2SkgLyHntY8rXmdRkhoRmvBfRmfFAj4Fg6Gjf1BPkd5Kwd4Vxddjq4wiwMn"
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

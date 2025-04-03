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
    "4X6JGkJemLUu15Ji9dvjqMURzk8Ud83Ba7oqykN9BXsvQe23HAN4dQXKLDXxHKx8i8gXo7qF6dGMU4Q1LuuZCBms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NUCJUSt9EoXrKHdWMDKoxxo4Forx1Guce5QzErtqCQo4oxtJzdLkWipSFzRxMAQGyrKiaWFdLQV48snQZ6H7JMF",
  "key1": "2PorNaaCj1zqerPuHm2CuyzYFPKauevp13bF79J4tQy1aLse4EBBCDFWaLHjW5HvwdxZnYKpycKAL3Uu4C882vPh",
  "key2": "25gvhn1J7hzccLaq3eptjvFm6ttSLbVdjBHy6HA9bFL9vfrPNB5ZwSj3oWr4aQS2bQLV85vyJYqkSs1udTVZ3WMx",
  "key3": "4Pz32ibTt6sYLhtbB3yLDKpEuKUpxCsrViL4Zwfnrsw9Zmi8uNSEGFZCHhFPg5mPohJrU8vxyCczgyt3PqrbJoJq",
  "key4": "nyCnzuHgy5kJwwnLmAeJLY3FQkGSop6XP39ExejS5hTVabTBuRmrw8N21maWBPMXqPjCKEugYAKfHTzfcDdtAjm",
  "key5": "4HoXwgULE76PTVeBdWntzLkcxbZsVsT3J96UBozCNARqyXW97tvJpLCdJfVBG4B1ZwPGPb9MkWQtRhHcFhaDoJHU",
  "key6": "fhQC5VZAhKRFs5VwRP6tqto2wNELTR4X7GbKS9aQrEgGB9Fcc46HPGfDdahZcTBpRufMPu9BbWFusPLsdrxGFxd",
  "key7": "25uxZTiJwnnYHLpvW5bu2q58LUruji5dujBQKWoEqfEw2jpAKsiDbnpVdRSvXP8nC3uzMLT2aV8mp1VMdCLYFie5",
  "key8": "4972vojWBB9wRP9HT19a7DJXcPGCM6auY1yrAhx6Nva8dG9NVrNMAnyY62QTH22H4YUrCU2cd2qkRbRNt4s8wmfu",
  "key9": "51Kdteq1dSphgqMpbKcWVNgTnb5r5udeiSeT38FAktNueP2jq4z5F9QC2MgLhwxU8Y8bVUFGdk4HeEHhmP4ip3BQ",
  "key10": "2G37i6e5RBGvMkQegrr3dYMiMKk2uw31TdCkZGBitaNnYoUXwTu9EsfYTxnBKrLrooUpnphu2QLpPajhtUk52t2A",
  "key11": "2AqQuoexcpFj6ZrpnneaLiRmUtHxkApqVDVjbkAZvvPCkijwKwyfcTz7L9XujEy7o87HoaYWxB83HiCiuaWfrTtK",
  "key12": "42JSLaP3jrHGVx7EQGNA6xeWkC6Ym6mmYqTMzo819gt7KdnF8EohL4dH8mNzX5rzP67myv3UgT11gL2P5ZwTzbwk",
  "key13": "2d2FvxXLuFwLcCxpWqVuJWF5gkGh2VZYtAn6CfrcMuJKZCzNNYQWkeqdwfzFJKyu97m2wRfknqKxUaYDp3y8S3Kj",
  "key14": "3hhftY4cKkxUUB9QjCMc8uqsb6UQharLjPZjruJYfApXMifq7ysbXgZGrUa4MKFKrxBzvjiyWdVGMiG9bTuxfPao",
  "key15": "4w52fHW8HTMxxHiq4Rsx1S4BGTpR8mVDQkeifEkNtCjARiTrDNaM8SnXBPnGLaB7pfdaxeLfgR5697ju3r3S1Fx4",
  "key16": "29ndtvtYErbyM65VQvUoBCHcHH1YEk3L6phMDU4hKAQzdhvsGMePT2WsUX76QzWY1bmF8MUD24W8mYfd9odrsdqV",
  "key17": "U87nqsivSBVdf5XpPL6EvyTAQ493mTysoiNdXcTLhp6kYYLBUVG4jVfEpjZjJ4QcucZbdheCSbChfXtJjhx63do",
  "key18": "5LW31qhW73oLk4scRvUtq7QQ2eFWFNfXRedTKRBgUVi23HH3X8vDJyDgkeLCSyA6o77Y6Dc2gGkTMzHumJjriA7D",
  "key19": "LyYrzXjeJL1FDQiWKjGZaJt8HphKXfKgar8T7xSAYRrnEkyMi6keop41PnHGebpww4pG1j9bKjk2KSBvtt4fcjw",
  "key20": "2Lfe7jaxWnHmyRBkN3imacbo9gQVvNEUTdAXUVUTSLrWyFS4quAPQMgLLwR6pDibnpi177Ykh5qGMHGMrf9UyMR2",
  "key21": "5DZW4cNKLhBtqfRUWUnPZUJ9rq5R5imc9Ski5QM9BJTtpXzrWca5NvsQd95sdMMddijQB3pH5DuDGWDW8fh3vXJC",
  "key22": "4ZwM5LLVHtnBAdF5uJuyt9dEj3ZmuiGr3LJ888UygiTY7wrEtLwaCQNysRC56xq41Xqip6nX1s8sZBVdSYreiE8U",
  "key23": "3r7dSgAxLcL1KdZ2csc3Cy6mhyd3aqMuz5CBpyDguMWMY9iTUMfruDqXZmfevUPX3VffJAwx6imuCipqmdv24wus",
  "key24": "5TEzoRSSLkGcRuAB7x1UfAc2VUnNy5YuBux5VmBgtyrKfbzJvXKtSM5tjNdMQVSUSjeavMLkJPUh2K8MGg9Ncbus",
  "key25": "4MB84X8fMXMLvf8Fs5x5c4oUfHyvS7U3q7GyXxV3MSajpfvgbyAjYYqiHnwpaxGcUFkhaRr77LQ69k6qRnHakqPi",
  "key26": "2d53a9GFZiTRGQo1s9VK73RzRhbJJAHBWYBTTzWV8P1Swxc64vmUMhcHqQaJGLsL37sDMPtg8YmyLEnaSJGXp9TW",
  "key27": "3fGhScSgnZwmZmJcDtENxPx4PHuuzTwjFv48BhFSSkf1z6t11iEiodWHZKnxQvxfjFexwmXff7bRiyzPhTeoPsqz",
  "key28": "3X8728n3kSk2yqkCBVYqv9P6SJ1MURtBwDoe73aG2AYdGVDKuGnUYXU4MPBnkthCcptec19H9dC54dSG9QyvYQNp",
  "key29": "44agTVHScYZRyak2FSnz8gz73eaN1vpaN84DQjmX4WPoUvDop1bB2NYCZyVNJKuRqDpuiD8iQaneAxt6bsxJUep4",
  "key30": "4xE8DVSbZaKsBjZiFKFeYVRvfPsngcEkc8nBquPYP8st3e6ixVetZ14B87aspFY5TdtZGJ1snztLNNPrw5tYTFYb",
  "key31": "1Yj9CftWe58iVui9UNK5HZkozn7vpNMhtKpzUePhJD6pji2seW64JgzubfwNNHGEtgXKfBCbp13dMWfzzXpNDyv",
  "key32": "LqcE7DApWTYbN5RWTnUy19mPe1mPACruN9h1yGPEjFHLsyTrQ5Qtdy51xNLkqH7ytWYLkspQw5f9NENeyfDY6GA",
  "key33": "4P8LDAyj3F21zrA1wM8dXBBJFRNzKLX1xuGoznxoMHycAkRn9n8ZXREToZqocaiRwBQPgaYcK2YcNEy2X2wvpnc2",
  "key34": "28UuSYDyKjYusnqZwkFecm5pYjM7VQdYzzu9GsaPwCNjPxv8tgBjYEam4tR2bXVrLut3pohg8Ct9Uk5tRfF35GBq",
  "key35": "5YwJMY8JG45K83fMNcpWiqyJFXr6fxWMZf8HmDCJ7kEgF8sH5RCE1QMirrz9fujugNz8AXU9DEfR1fyVxeDuSiUV",
  "key36": "3fyiMB7fmwmY5twPes6LxQ6dpznKjipzw1aEHPczoN2ZhsrqykcSkjKvCzeGXBV1T1TmqFUcxEaQ7an6eHPktQkA",
  "key37": "5x7G2tmEQDz1VvQoh3oA2iuyEbySpRz1a4vCdXsQ8KeX5Kd4oUz51iP6prbvjaFPGtHSUAxiK3iUWNhAZyisTaDH",
  "key38": "kaHEmgXiXzDdaKvFxJjWu25uGRBkzF4UfsgQBZnx3ratvj623v6Xfa7xzbLCUNhVW1Jc4Xc5D4Bgx94BAdcHSvL",
  "key39": "2HtYuSZGGeDq8H4tVqWLLQBcgmimHAA7aRHNMbPE9ucC32cDRSzgcRAWjATcrSnABacgKfpCjCgeSyYAqjvLmeca",
  "key40": "54paUSVx7ZPcJinB7toe2cQNAzByPkxqDA1SAeoEJuS7PbW8Qukr3BGS2Q4TDNgE6Sgu9cAKF4FHthTcACfYtKSa",
  "key41": "5yS2WQj3NtfkdWKMNrz4NidkAeX2gvAAWAsBNdoKYgKh5FyToiANP65S2szxv51FwyQhHro6bS77um7JECQUy5ny",
  "key42": "5mQYyYkr65Nu5XHin2GKiqGsFvrpZZKQU69R9vi27q2syzgBzYmr3UohiwD1YCpq5Jtw8nYy7PEASGZibYGqgkVL",
  "key43": "3Cfs14gHmd3gjn3uuNco7T7y6b1kZkcq1gp5GSsY6GyyBxK4ayyvUFw8aoaz5B1dyCqgXZ8ubwH37XR1U4Jaf1Xm",
  "key44": "5zZYhPTs5MM55LeJGenuvTTuFGK1eBkNHKydn5kydgJ95Ah6mAjU16SgqMCkR7jhdnPkWBudPp136ZMu4f186Bog",
  "key45": "4FH7e9dLpHx5nkVjNtedMjqqUZUodhe79kNPxxn4i9xXpBQ88Gf6n9uBswSoarCj2AH3qaPLW4hK5aV7uzFYQNZU",
  "key46": "25vF7F76SzXKzMkR32sDaur6nY9nPcBsEimZW3Ks52r4S5bwY2CbQCbbtxmcaXoSnefM3Uym7vToscza9rWyHs1a",
  "key47": "2Td4nj51hWCuxj6B2Ru6SH8qwhy3ayUW85FC9ZNZawBivACa7bveB6iS5mxs2KWPur1E1BkHaA1P6x2UdzAnKUJA",
  "key48": "2ftsFfCemeG3P7avBjuKF5BcCTdMHFSmn95G4BQBDTL4MuxMSVkGUS3vDHZY6SwJuXd9Uj89RRNwdQHkX9VDwZ47",
  "key49": "2xV2rq3JE41pKR51yu5TyMhv3Mrabm2Zot4qeUaurvHB4R9XvvYp3QhC12vK6uYryoGgpdWiiSWyCf1RgDBewxRn"
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

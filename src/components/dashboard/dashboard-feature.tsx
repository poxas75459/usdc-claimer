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
    "fgE1EjPNfufgPUS8Ptg2CbkXPs8CqfSCqjKsFczcyRpxhKw3GdHN65Yuw6ML9uDp3p4jGzABqsLuiiooHwMZZme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cYehjPFGptM8i9KchnfR6pfmEmWY9mhCg3u36J6TuoTQLzzutWwdnyQr4w8mSTbPKhif9r3U4iPjNiPYbMqRZF7",
  "key1": "4FawRN59gEytLKTuKZ9C2SFsNwRz6962g1s8UDcqJsFTRgLvwo1UU5JNURRTLVWVDoKD1Gi1tGahjf7fsQ2utVcC",
  "key2": "33C2mWB37Tz9o3SCou3UpAVEU7GXhKSwmQCptmmWH33WB9zXx1DFwtaqdm3EZQjY9b6i5mW3y4Zg2vcg7TcgxmCi",
  "key3": "4TyBn3f2X3NyaQFEUbQhJMsLmHEX9nWg588rYF4V6yr4MYBZiU8FYJzG4wZ4onHqsLgiHH9yLg6dyPmmebyfYq27",
  "key4": "2eVWeuztHdqvekjrSqvNYnqSscBC3sRknSKkKZnoSaVPUM918FiQrVyXyMpu3Z9VW4bPuEtmvb8Q7YrnrpkyLous",
  "key5": "3G9QV35uwfsQRNgdwcBZNqbLEHRKvqVE45TVKywVDcg9uxysrWhcH6mEorYhDyL2A6RyDAUemksHB8AKDqaXPbJg",
  "key6": "3cYdcL5ioUttYRv8L4DYetif6djKLF5cquh9HKTCHM1zpP9zgVAUV5vd8YesNHm2tT3LttcjwRVWy5Dcyb3c9voH",
  "key7": "47MEWAzjhhjcWSzzqFNLkCSytb6nEFfMW38nzKEN9Gbd4f4XRfCCs8Epy8vVsiQaYdBhK7cGbvR4K7CKQ9tFAJVe",
  "key8": "5QyRwoa2CTMgEviTdtUSHqNitWbQabESfaxYM3xJutDDVZVjTZsGmQq4Fm4xiGGtxLKkESKgr5y6mVcF61DVxHF1",
  "key9": "2iee86Ksuq5oNi4FDAGW7qRy9E4ovCHMTybxKbh1SExkFfBMf1TT5CTRYXWRDytqzp8rRmGfsARNYJuxmoohqWXr",
  "key10": "56iibmYEb6dMTAD6VajXx5o3NYsGP3e4dRv8JLFVrDBW6bzKbgvtLGWd1cykH7tFQxTKnjxydQmGxxudCJHD94Ae",
  "key11": "2aKHapUG8GmfFrFgyGKd5Z2CZKTto8BgTw4QvmbqiqryfJfYn3keMtqkLaoQmAzMCkfygsYL35KNsG89TXKLbj5K",
  "key12": "3rsYaxbvXuJeBYFqSsjxt93NVSc4TapUtMyZNWqxPdMdS7eyLrWksmoEjZmeJr1nv2zDMia9YDMKLD5xm89p8gn1",
  "key13": "48AbRLPq2dH1YRxP5rTqExqBB3QMcv2jEjdzDwwdihu4iqEuSbz16ihkpJ3auf9TAS9FphCQDbve9oNfpZcAmA94",
  "key14": "3sSFZpzrudR6u6ersCbXQVyYHD1vhd1xgYU3DFqvejahvgC3XaGcw1dMoqG8LwhE6PHJm3LzJb1AyJcLnxEWKGEy",
  "key15": "5jF1ETPpZkZQ14iV7FS8ZqCz2YQckyEDjyX2Mc2szFYz7S5wrpAc5dXytp4X5seVyYhFe8arqhLceuGjMbKJPARU",
  "key16": "9q7M4YPsX58m1yV96pb5rkLEDdcvUsrSCS6VWURBawepZ4LvuvGTg2EucK8st17X1oRbJzHVmhxcHtvFSFRqZmg",
  "key17": "3soX4v1iHSLA9JhrezmZkFvR5uc62wuq5GHMRDkRF7qeoN4HLkjnHxuKx7f286z9q2ykJkmqxahetwHKX5H1wyoH",
  "key18": "2CbNBwpX2VonuqwmeAJiyGEuFgvvDwdL63bFLfJNiUvNdpqobofhWx7imnw5H4J4Y1Ch65FQqvbDqVHbB4mPWbq6",
  "key19": "5hWvZkuC6PVFRJB1kjB3o4eRPzXNsG1p9sgs4UVKLkEFNEFwt89sdJQfNzB3HX1vpyXqYnXEeaQ9WW1gxFGZBdux",
  "key20": "3yaMBkURuubctzEvQhBFWvdmSVD3Wi8GVm4cSDcPsDKUkKcbK83jJCNXKUjf5GYFaqvJqJCiPmV3Pn9H4cqmmqq2",
  "key21": "495FRAFCRBvzcJYXR1xZEPWNzHFYyBKSEgG4deSzqJ39dg4vBnyGqp25VgWTeQjai3YoDesNYom2NwYiRcy2xDBd",
  "key22": "2bQ6L2D3EvmBRFNxXdSF4iKYf5RwfWSvLZE6pRebtzdCVEbNFQGjjpDhpnEQsQsr13b9Hiv1Ci14fACXbTQFS7nU",
  "key23": "38h5NWBKT4Y9gzqaxZAg7s7TMs8LECak8BQmDm6K43qAcXKVvx6yR34jfiRAv5fgxAgjtyzn7JAZTJ9hPvum1fvr",
  "key24": "4vqsMLLgdb5re1nHQft74yFkW3vgTna78iiH6j3eufvbJ9kWr9qnC2iGztu5TFPdj7Ly9R6MiVGEnYvRMK9T67dH",
  "key25": "4kD89x6bTrGWRRvNoGQDVqNGR2i7tBw7c7WL7u4gPYa37rEu4gBUmZ9Q6K39qwUqpuGkZJnYT8qgfsA8xd7YLsQL",
  "key26": "4ZpiAo4re2oeQrSFvfjvVq8VGhw1WFLi9nBiNMwRZDrAThYEC2nc3UxHNvFVy5BnVLfz9TTyXnX4xdzme9EakmDV",
  "key27": "2P5PX3kfUaHEhcqU71Ca38a2XbvSQrdJDc94YYkzzB5BZMgSnphxs9WViVDaThHgBWoZzLFL87SCEYDh1vXUDbsf",
  "key28": "2NLRonKudorLFvWqJxpiHGpxXZmJpPDSPHZ9mNMQMqAvCWsEM9L9bBVdBLXCH3XpA45V2cJMLXTgpF4zmDSQBdLb",
  "key29": "E67d1ob8HmfUe3a6F2p6aoin2zjLTK212a4U7Y1cJnZyqUDyo2QtHDnbZyXnNvJsazWWjgk5vRUcJGggnKsqGE8",
  "key30": "H58qhxfwuZ7jL5kHseSH4KZeoY4FQuRoxRAcpVUNg6eP6tjfCh81CB9R6vcaaAnSTy3NSZuVd313Ck3RsqojjM9",
  "key31": "4SnaeoK61Nv5jLC2Rvne4Ufqg5bhLWfyevKo7NRpsTTknEZUT5QEKpDbsoJ3uia8H561xNGYUs9FB63doLLsqftN",
  "key32": "3CNVzqVCYezH2UpRZthLFQdsRh3pFX3H5vgtEWnP8WDUNpA2GXxtX6n7pdX12SXJ6HXGrdPnLvKBPYjs6Lf9KrLa",
  "key33": "26mHbMNxEY19mLQryo1qhaa1nSLo3J6pKY3bzR6keeLFvdZVLEx57cevSza3fWXRF8d6TFwiTujZoBgh6JpbMRZ9",
  "key34": "4esKV6X9NfyfWcsHDuHYbxDxaU8Sq7n1xtV9mjnqdfSbqVtXoLAXBUVQWCaArsY2CMhY2YCABt5srYUVEiDqngJp",
  "key35": "3BdLTSj8tGFFLYCaEeEZPNC4RDeUBepbRxZNVyXmdmWEynMCH3JJDVXboW4As6nSJnQba863BKUtFMaRWt9GTwZC",
  "key36": "4cCAg93VayZhfrovtECmqsPyjB7UNgcLggEnYnYLLRyk3P73GFenAKWVg4UVE4hDpR6fLn1oCw81RGmPij5A4ctC",
  "key37": "M7oih864A4baoP2E8NtJwAjo4haoQ5DS37yiN9yafHF5p82L5bGXThUfjBRezmkWCcH4EjuffS3G78hSTJmELmw",
  "key38": "5nCi9HNgPuPv9xykkrVQ4jVxwqm2tz1zLUiNJigYjnDttS74uy9SHwCocx6DdjnKe3c8NSbTmwEkUgJXfpkQFL6i",
  "key39": "N1zhzkrzskwGvJUze9c67DJXZWWajAh3huBDbrBorigjNTzLn7ZvQwtxVifaDM3CHyW42GnujLNgEGgrcEiNkBF",
  "key40": "5wyKWTBHQYw9nZZaXoKyyfd82ScaTWpo9epHkNMyhpfeFPxh3qDGjFvVbXMMzEV6hNqQyh11fXrNk11Y4pPpo5xu",
  "key41": "3faHtjAdhx9YiemikabDSRiKhKY7AqzwVWLPzM392jKj7q4zsqxwdMZ9TXRFAHMbSxagEKY4P9Erjycqu9Q4BPUJ",
  "key42": "3gjqm8ogzN6mX87qdsZf6eS1H4T4AWvq7KPhXfwXxwZ1XepnQjub8b7PvVRcV14t3J2uPN6NxcpLp5NGZyZ645BH",
  "key43": "5eGRAbvTsJDAioYTpdubsY1FUXTFMC9wBUdVMH3fXLoWjknhYkmnFBbuVARJY5ykfoju4TXgsDavu4bvTSVwyUuw"
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

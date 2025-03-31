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
    "5vq3iuhmrXJv4ZNwthDCxffC8UKTTiGH1WsZZCUkr3xPcybNkGU3cbpBQTMABAZkLCcbyQQatbhmpmLun5EG6Xwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G8KQjZswBZnKctAmKpEga19oMinWL7Ro4pGt7HRMyUisvLYvTcLGZBfw4TNXgNdVxj24nPjwKYPyX3cVHeRBj46",
  "key1": "4J8gBJqsWbitiAnxRdzKcjk9VXEFYpfGRFf8zAVvtE7YQBp49wWRfuy2mEgaXoLQazTwyQRiwCxuL7Pa8ozPv93z",
  "key2": "jQQr2BxNhGyJgJWf3mX7ah1F8kKNvSmsbs9o5xVyhmxGUbRFJbwkDS9XPTsPTj6hGJnRcvR11vXKSz7YGHuZQek",
  "key3": "LvdDa3EyhDFcoe3vVJNaYQ2F9hzf9eL9GQwwN1UL6sLM58qT9UsSPZ8qnciJuEUZ6trvmBMKmaewzg3iWpWphoH",
  "key4": "4TNxhGEU4usPdsKMy6XobNPSXxnLr4KqbCP2pdimsw5p2uqhdrxBf9eFpSH9nkTPPrEVyezHLFxEF2YAQhEU4Bok",
  "key5": "4PF2WUUdVJHr1jxoxYPXLoo5jtFzSJ62vaC7aqf99FkgBS1DNb8W549pfWbuCXbnujAX1KtsVFqgYH6giSq4cwtU",
  "key6": "484fhPtau13eHHcuofrHMAANeC9tDfWFXJGsvvAENypR7Dwq9vFq2DwycopwcdBHBSJF6RZKpdTsFxFaxsXhbcs9",
  "key7": "92kKYZ7naaSNjSkkoH9Wv97U7bNM2tiEWmyCaKCxDDLcyEeh47kVxZSmyUB7Fto3FZZLxM9xnNY55PLboYAryrZ",
  "key8": "5qcAcnKDKwQGtoKVKmwhHi6XcQo3DDNVS4ZZLyfxGpSSejf31BwUV3cGhHHXf6K8t2EKeWWgcGpW9pMJ4o45neCQ",
  "key9": "5uD2XEe3NW7tuYoxHZxhZSqNrURJsvtTMC7QZCgvxQLdn6zQJEk1oyh7jxPGx7H2EybVTJ4tdsrWaEpwgvddNn2a",
  "key10": "3fp1egbeEBwY5GQWJyga1NCyREQaBjP9K9zkDGe7BMTZmGd14gMVoDcAhD5r1UbEegzBLqwWNqGBXWVsmuZoKwNZ",
  "key11": "9wBbFRDPqTTDM57sAELEE6WVeSwmvRwJCv7qLNxXpVW5ZvMSszBtUpJuQRtParUYALesFvmieYhvhARhomxykS3",
  "key12": "P4EGit2reAC9ZkNJuAtt7eyYhe9XT5xKA4msxzy3TS8SWeHNYAPWDWqjKZSeLx6W9M78vTFZm3hnej7v7ke3eWr",
  "key13": "36rfvYT9yuRLG9569UtSBKiTiyWhRPvFVoYbmDmQ44RWK3DE99RdJrGAbftCuRMEjCvPBY5ost2zWJt4FGDxZoPX",
  "key14": "46DghRfHJCw9AkZiMg9povyGXxF7E8j6vbGtuPvQ8Y1Yqa98GPJsJ2YrRKNyqrgc8p6PfAYSh6pzoLcwYDv8Dayy",
  "key15": "4FaCHtLct22oVwUqJdGPQakTS6MA7mG2HWm9dm5imqW94dRNVFJ9eEDBi2rzfGgC5bV7J5sF7JeNHPgsAKDJpSLi",
  "key16": "fj6zhYAnzT8XkZWPHPBrxYruid66uWMx7BWDexk2iHjhd2YtKD1dkidBmZ13GkBh3VYFi6MjjsbBcAzpwFNRAn7",
  "key17": "2g4hnJUL4oAuUxuXHP3JCr4ND4Xf9j6byL66sizKtJkqD1c3ywiM76foz47cLUswpVRDyyyQhtYCnMGuE3rArTXu",
  "key18": "5SuUbdtZYyvvy5gw4tJ9w5CmeFcpkXqmxQPjaFLjjBfDBoyXt9QH3kre5wHpbh7zzwhxxUatqJtRYGRHPhyGs2aH",
  "key19": "4eT98MsaMLDe6d3zMcT2nm4kbvHRpi2jJ4o9A2hJKqznXBBDnByf6oqrDBe33MQTCtxZ5dKshJxD2L2vEwUAEXze",
  "key20": "2vX6e7iKd7fyzS15kVqWvtoGmGEJ5VA4AWEKdNS4ezXdcrzVXmpCF2A1LKaYSyp5QoduonMdH8LH7mATpL7v7XjT",
  "key21": "GKsyM9B72Q54WLVs3pPXjKVULcweChMxxtU3wBJnHtY9EcLwuSyYZMKHahv9imnmKWFdfyVjN5T11EqFxP2vjKA",
  "key22": "2PP1ecJ8jATZEZ7fGDfTYkjaavGL2bj4WAiVKcwiq2Qn9rU45hFojQnJawoWQSsecjSFiZRRnrkv9yaj33UfuyxW",
  "key23": "2GLgGDd13iWSEoxRti4dFDWDKDAEJfTmrJzCT56rmq3962kPyn3Q66pQsLc3SxQmvQoNSjrU64GZuEf5p54otCAV",
  "key24": "4Cf8eY12bgJnq29Uyrw62xfKbpBbCGXbp5XbVzRuvjLyP8A7EKq84MjacSmyXD1W3snHkNwSEUZf3XqJrkbKCQcM",
  "key25": "5ATcJdb2c2WMTQrzteZ36Y6VGmMuJXujuThEaF1WvYaAUvnepVoKEzAJHMkhFqmuvVdfeJrjpQXPocdbfZc43gi5",
  "key26": "2TS3K14eqzy7NZmvUn7YNiDWpRsNbpNkmKp2QnUX62uG3NxLTvC7f4wDDTF7o7cdevmTgdGDGdCS911CoHzwFdB",
  "key27": "ACQpX5rMMGdsRWtkXM3FyG4JKkG4xzkNG4eJAzptKjwCPaRc2Q2s7PEhrkhuiW4Pa6gWJM9JCbarB9athLpX81g",
  "key28": "2B7niRvPPVtuG4pnicD6q8myUx97dGETAx23d2ywD1TinW3Rnp5v7bPEtBvvJBfS7RgQTXxscQjTo3tnhFNW2QfK",
  "key29": "5iY1MMF4AWmPYDtAt8SkDA4kBhGNEgX5LqM49trcnhnAkE2jWBZ2f2eixD2HP4kH2CbdCuj2dvn29PdBrsrvin6T",
  "key30": "2oXZBD6dRZidqXysunn7U7NypN6xM7umrMvDRZwrCNg5QLRywfcbgXJ1txaTbBLUevqBE97n7EDwoYZ5SayRKj3V",
  "key31": "4otFQeMMDZQv5juuyz3dVZ8Yfc25HcHigwQnsYKYWFeo66SJmMvL4bL3f5z22J73dmSptdaDmswtyMrL3LD6dKou",
  "key32": "4EXzchf1KZqKNWGr9Hr2zdMinBeqgg7KDodK72Fe3EdqMr1RN3NRZ6UeFwp8nxBsDjd6Hit1sWadduAbtMKYikyN",
  "key33": "5SUYHj63SWfx91LAUQaMpCF7d5Z27oGzCnCmky54khkoEhf39jBLBf7iRmFHs1UYXTvWj51jCsMFQsp4RKeyafYg",
  "key34": "545Ye6wpoG9kzmYiqRiNEqzqB4EEhGdHnbohnvd2DmNzNe3uo8HhKxuxB1jhQbLRyCxZwU5DvEUbGq7UPeWE1wtn",
  "key35": "teqWb4xz45efBCj1g2PoCNP7yAJkjhj2udFteqTWmg5PR3d6YFBXbPC92WcGi3kmxrTTx5VGC5AmZ2d2AjuLGM4",
  "key36": "9QEHTgHuXUVAibCVgsmMDDjXSxPmyY8e6gRXDUiiFEz9U3djEdATAuBrRE2Fat2daBz8fgyJABFP63XhDgroMnc",
  "key37": "j2EsTT7fvDVXuHKNZukF7r4VvLpn1cfWTu3M3QN6waqUVkUBKnhnPSmBnUcYWErGhjfLGCaxrDZ6HvEAK1tzWLq",
  "key38": "PnvjnZ467umRSrns2SWzNxxE7W1BKW3bXKTLMaCHTNeHCsEnbrgxq1pHKEjgxRiZQVLbBSWQoiyoNFKwUwX3gWq",
  "key39": "3ixjuQjBvkMDwZB3JnoKDSCXCko1W3h1isdqJkqeaY6UA34ZCoCc2CXfzERvL7ehmvwct8z525o6RCTfGQkfgAxX",
  "key40": "3KHqrJ7WCzzSjnYR9joYrfEmeary66e4vPcaX4ArnDunPnWJgBmBKeD51Zf7ZJAVELGt7yVPZQ1Kb5ycjsvxDor6"
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

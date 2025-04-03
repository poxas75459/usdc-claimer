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
    "ftkT8uiRWGBM7G25FdttPDtCBuAo2x6vKLLtGt69tZJ3hhoPhwts83UqsCLywTCEnRzFzxLepZ3pCbRtDZdPDpK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oAJMNGgNnueRi6dWxA2wayoba6AeWYnbFcYWdMMMVJX37GtqJesLfNZQiCnc6LsmZDYgo1qR3eAHA4uawmgnEsp",
  "key1": "3w6nWmT7yX9LrWSYNqwVhteR54XtoW1xn3nQB2PQYHAVmA4gtV3PQdysNcdiuYqiJF6u1UwsBGW9a9mYZTPUbXjT",
  "key2": "2DU5xmnQ4qz8XyC5aR61ajDgWTb8uuTpowXbgdZ2zFmJhBwXen6P1grK3tBCQ83Uf2fmCtNsJVdroeSdFDsgmiNo",
  "key3": "CqDjo1RWFPTT7Rr4y8HUs2JsQ2BMQojHpLumAxYvwsPwJgppNptwrHH2taErdiK4uAGZZW82FXWLo3aGSf1iP87",
  "key4": "pFgpG3ETwtQXsmXw8U6R2axGHMkSsdKFvMnYpL1PPnRCEyqHiMs5q3uPZfycDUaZfEAJ5Cb6FDfY2L7QZQSAPcR",
  "key5": "4CpYVPV42UdXHiSZvUmU7hXSiiVigQ3NiSowSDJtSBY8MxDDcMMayJ5XXEhr3kARjUbqUoytjx1aM34s3YfUe6Yj",
  "key6": "4hFkC6YJp6L71Vwc8qswrse6SJRbcEss2j1nrpxbMFBvgJcLFPQMFcZhKW6mK6Bz1eNhTazYRR7WWW5296a98nTk",
  "key7": "3HRSouvX13JRu6BUu8W8tTmcgRHzrvscqesQq2SdpwjmQ2n9u9Wgrmhcykb6HxFD7bvqxpxxY5Z8r5MqyBAYS2zk",
  "key8": "mD2TL2V6CNXGGgYTL9oCT1MBmsBPv7NjZ7pBr6zeFP4hwnVUhwcsYpR764UAkfGBLRnfZQQbRAy7K7v4XYUyXqs",
  "key9": "3bZ2R53qrnV5Tw77hBX6rNDWHd84RDdQVW8shrQixb56E8ResmYsW31HfF8BenFdcxfBVFtZhp6WGxMMFeykGvEx",
  "key10": "hxZaroMvf3oC4mpp3jNrGN6ygiT6VAssSyCiQDYf1FS7hUyDyQdqAHXEM1eiaqtTYoMvtrF6SEYiGeqtdcDQRNE",
  "key11": "4b8MDb8jdLwDvBfYVxFGVkcJGyUPanfzY3dR6M4YD5jFo2Z6ZZrNXQVKoq3Lxc3ii6BWfybGTJ8suSE1tZUdahen",
  "key12": "3LdckteKcULd7iS41PHQ177z2ofg4RaRsbBmqFdmbMMSUToHzA5WEMBzZvjJopnsg98nPEJzrBBNfZc8WrFeRPvc",
  "key13": "C4JgzU4t88DuzBbdhD166uHSh2oqCPKUnHYogKkeoC98MDrxEgp4mpvfH9zSpgmZDZGifdEHPiWsqEThHHrVFia",
  "key14": "CZRGSkeFpPS2mLYH6concwGvpSyNeb7zgA1TxiuwpocF8iuwbAtxaSCaeWsmp7qD4BcgFaLLtEWp71o5DEHia1W",
  "key15": "5Fr9cp7BabEV7PPs92V1guDZZpUY5iHYXVJynGbyFEv7vxSgV9QGqyCVCjVS5akcpX4tAd8Yms7q5iY7LbefLzkb",
  "key16": "4p5FcRqxDr9UNYcNb4ETQ8VPMm5mo6jTaiMdn13D7KidkpvMFvXJ7Af3LcbcE6uoA1C3KE2oPQpMaie9x1aMmw3Z",
  "key17": "4rQ6bav5W2HxHZn4aqGJyEKQtTsKJj6p1mQ7fVNnMF1edKjW6xgmsT59sv18qSbUEUn7vyKnDnLa9MQ4hS6VyJuJ",
  "key18": "ny6X6WYPMY8Yv9XS9LkqvcCCM2zpTJ7AsdeyccswoV4yLUekKS2kDrgArguAEtnSvAZf1aFP6aM76mTTBiFEdre",
  "key19": "4w7x8BvaThK7cmjfcRuX7vDYRyrzx1YpQLWCbBBiziJC3ufe8xF67aLSZsgr1GEPqD3tTdgfj8QKTxLy5Q1xZ8Zz",
  "key20": "2ug1j4mogP8hTDARW6GzaUp3h8wNzcufDMuTV2oNTHsTWamb38dAuh2SqHCQfuwW5RvhQbrM7tzeFphY5jEooRZ7",
  "key21": "4Z4RdvJEdT979qGeCkpwhmfN3fPm5bd4pcNFobEWjMPtxZnErJjunodx2KkRHjvqQosrtksKV3izYfWXZnShWwmr",
  "key22": "4LUahUcDqnFYhMYgHF3VtePmTfJiAZfXABZNdeMZ8WjrEbD62CjtrvCFtWMPQfrgPNsr1cuWwkCSGebo2g7sjczu",
  "key23": "5E3wYPfATAGcmXFRuzNfDGQRoKHxc16djMBearyG5sAruGv6sejkSVKxbwLPxNZdRRGAKX1oYsgs48t5xsvDw1vt",
  "key24": "n5g8E7AzWVSnxbZNksvswJs722S4imTQb3KzY7MD5yKbem4k7Lb6o964mmNa4rFFVANXzHQjyVk8rEG135MRk1R",
  "key25": "339PYThxxQNYhQZvEFHg775FUhTs4Hs91Qsixioy6YbyL9w6jmJfG4g1EFJ9xcHCLY7HQjcL5K899LLTK6sGAUW",
  "key26": "4zvfNwyGHRquU52FUULY5mZN6vSYhkNHyihoGCRHFoy3CcYkFSAaBGK1mGvbS2wRFqdJ2i9GLMwRzZUce7UB3WN5",
  "key27": "2zbKWSrXbwXbNr1sEmWx8PKAZrBq3RQ8TFMHUXqYHiLsJMGqa1vFNgJGpRvsBygWroC4NAQcscr8M3smwYqiqu4b",
  "key28": "29EMSTmcAAxWcfxZNHsUBCzpFK8dMKiqcwZCpZJSudon4Gqr8GncFiZCZ3XR8MNhSbFGFbAajCPBiCq3P3EcqwCa",
  "key29": "zUjQA1A5wG1ibcYiTwx2ZEQEuuwUfmSNyMn5hCtk3DsJeGGB1fyeuUqqQ2pH6Dj4Ty5kGT89hpVDN8rmoCc5yfJ",
  "key30": "4t9hb5nJc2UEzidFBxsCzLQL4DkX4qw5KdnYEsTYJRirhBSAFbvfUj8FiHVbJdmnisL4WTJ7J1rk6AGbtaRAbhYX",
  "key31": "3EoJWrtnKFvAGySeXXbNWXC9mbXZdme52B4x69CGpJuEYoWiUc7pBhQdD8U2GCegH9rdZzfzuM4JzGGVA9n8Gr4b",
  "key32": "4Wb1Xf2gEDhwSiTYdDTe14y3BPdG2TLF5ybG3c3WhqzzA5Dmd8AKasxoxFWDQMZYCx78Hs5pcZqJVvrPLJikDDAy",
  "key33": "2SxhZxovUSSypFiH5hUYPsdgaWueDKqsen94ehQxzx5yjUX1TStsv7a7XWmpNUdER4DGdBXsTrqfoPA3BCAmdFdL",
  "key34": "4nnbWbnw9ivF1XsWwkPcix1ziZnnmApfikrPMs41qaXDjLUQj1SEJ32Rni9GgMGoZFw2Wp7RnErocD4yBR7ApSLA",
  "key35": "sUusn4ygQe8PBC62yanXJQ3SniWiMnV68h2WHpyW1iJU4SyxRmeEAdV5dDjPtTrpkeHWoKRA2ANSaMC1ZLybt2m"
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

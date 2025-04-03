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
    "4K4Sno7Mp6kSgpeSChvaYPsEQC9CJYYeeQLTMU6YaHiGPcvEWkw1bUEsR89VTCJkK3NgMMhf6ochkpUw9ZJepeJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3PdnPQukWscEz2GKezoYMmEagKziNZBwhoZi4gBafspzSvbHzZWUZdtbD276DJSdMrp2zz4dHVYrgk5tQmoDqC",
  "key1": "m6x5BDASrFtk9GMz1YHkeHiR2Q8vS2foJMG7PqcizFamkqRdgaR9suf7sMmHunZ42e7kJLXTeW7JJen9ZQohn9b",
  "key2": "5ckfuR8JcnYdr7BuzXjUKWBeXsgHLz13Rkac8frKJCTzaSNqGmAqJTXh7fyCTWyPP2chVmE8RYerchvYhqcS7Kxi",
  "key3": "2fPMSMLWzy6uL9Hqkxktf36sUNrL8r1ADHDt7RMmUQ6fEBnuxoJFavvC2Uqdc6bBK6r69YhKFyWNrokqVqNmX3Wk",
  "key4": "3ZLJ4rvEnhiyUZchvyzut8RpiRDaZr2rpKLsLvNnVqWNxsBemvA7nXNAMedxkUyQbRA8Q7hKzG7c9xcKxW5x2VLG",
  "key5": "59Qzu7XQU6QG3z3GwWXxPweys2cw82V4FSWR2PG623YowDT4oYgNwoBbg7pNjMLeq73MWccmU3hAKeFajVEswQVB",
  "key6": "RBvrarzTSZRojmX5eQBa9TegmjLn4U5eW9RjZFS2Xp2d68UV4J6WHzxfM5vGvECFQa5oF21GHwbtUeXVgMAJiyK",
  "key7": "53HRmefNDXvfsXJRTWeR6iMToTZgWVj5rkEdSmZgHrLCaZiJhcToV4DE32b2hYiuQTeivtn4MeqoohPwrAR2sLAX",
  "key8": "21Gt38Kg9RuStJ3FMDSDdMuFSEw9cYfZGZkWiMxwuihEYkcYSNfmFJdvoD1PS4kpZG2PixVJsQ6Kktfy9YKudW9b",
  "key9": "jg6qsRjf4adyARXb8a16jzjnCGe3tFJCMJKbMBW6LHtvqhE6qZTxgzoqahLtyuS3ysSxMM9Ssg4QPYJRFufsbeL",
  "key10": "21UYzy7f2i8SKhtieYpAi8nmFaAph6YvUdhz6HmEszGKsMmvvVaKEP5UF7JrvqnsFLoWCA6dmwtkYgWRrkxpWmbo",
  "key11": "3ZQ9W4BSv4bLXwrkAdoirnonZiv6SGiwGe4MrNEc8vhDECKhTHnBvanr714agHCLHDf6xD9xAMurBNEhpTjLq4yd",
  "key12": "51wnQGmohBEwq3JRAHE3Dt2b9vmNGpKEpsQqCkwnEZAC9SQAAw4NqC1cBS7NsjQDb3ff1GnRbH3f6YWsbreEBzD",
  "key13": "54a2ghohmu7hm4yce5wNDVgrrVNbuqwKyhTnnVWyMqDdngYJL5Ap6BqiWc8igwe1hrCwKFoy69LMYYGTs1yfWNPQ",
  "key14": "2rTFY37RfadhqT9Dqo1zXHY1GFLPcv66jU4r6b3HJzQAFvWuFs7jESPb3NLmDnZHNUF3SYHHE2SFFwALoVbS2q9F",
  "key15": "4mYRb1EdgyjtgvMrguSqWdbear98cTQq6TvMi412Ro8SxZ2QBWRKg7korp4aE7if9kDFgHbAzyT6WWd9q4BM6612",
  "key16": "2J2V6YdaSUSuq74z1NMTHeHddCrNjfJfxKtVuCPWJ4Nnavy6PpCtUnKAJVrts8XjGZzx3JhyCT5hAo6N2WVkDmkL",
  "key17": "4vHDMWtHGkVobuJkyApJCPJsDQv9YUayy39rEYXM1LZ7KNeLEDk37dNf9WYAeoDyRkmWRoXJAyQmimShCksWhhDg",
  "key18": "3AmqDwvWYWVbq8NPidwPEY2h165TzZNrhvR1AocvPUsXAYXGm2Lum8RJyDGpDBbF1XvkUgK7KhjjxbV2qJRTsY4",
  "key19": "5YBQXCEF1u5eV3WTUj62mi8YgMrnqBVh6p98AByy1SfKHoecMhxymMzHxa44Ktmofhy5fMosv7441YRyW99W3kWz",
  "key20": "2FXaEr1athgqAFf6McEbi2QegaJ6NfFW3Wdgs48dzEBis2xHruCJBJ7CPPAdxuagRMhPpp3xAWmSiijPgCU2he6K",
  "key21": "4f7ixyBYJh3U8NwmJ2nMv7CCq7YyXarV1TnH1D2NJXwAPam9NkMJRSme5jdPDb3MZ1Mvvc6ptnuSeYPQrrkfD21n",
  "key22": "C4V1t2wXtmF3zEX13G4SxA7A5hp4bQCzb8TdWGUDn6mzYFZX5f9qFPheCQvTKug3gYb3ZTsE1CDw7UKjYH5uKVg",
  "key23": "3yZEDRLbx3CF52AozwpSAkWrcdABCdckRyUFGGrxJYQ9o9hTvTEeYuvkbcMA5Sm2Zc7fhTfmVWvHi3iHGABVAnjA",
  "key24": "38QRDoEpfxfjR4MMqsHZBjoMbWRcha7PuJ7N99zWTiCuQavt5yPNSjezb8C9Jt57z8PbLvFVwdzcxDH4oMBRH69X",
  "key25": "5nRFJYYPVeuv7FquKFv7c9vHjWnNBwrnboY28bgjRbX5x5LSFuE95iSCbu3z3GEBhYjbrdG5LndU18sxALn3rg5g",
  "key26": "nLv4x9TcjNAzJe7iqQTjCKt6JjLyNKEoY4dmdJxZJ6jUL77wUmyaQzdga3VmVQAtiKZCkWR7W7oRGQsDcM5tgC9",
  "key27": "ZRBtq1Z95xd3akDSsSih3dKrR4h1TP68RF6YuU1t8hSKbiiYYDZncy38gGJ2gTQ8qhu2JWcjozbJkZbB749oJbB",
  "key28": "3WQwVWnHGfqBHuQGRDpZnAeB1wrPC8o8BSWTTbnpLT1Jyuw7rJd1FU1oTKfcJoQF2WKmESaAVSNiQ3axpUmQxBo2",
  "key29": "TmWX2g7NG4U1x9i3Y7WGSA53dJFZQynq3ZaG9WvDSgtyf6x474KERqdwXzDo6rEpRyJdjr5o6LcqmJrPt8u6DWr",
  "key30": "2M4uFgKXjphALEYnFbkZvuDoVJWeqmsKsqSRSpvF8ZRmngvDGNniWVHt9Ao26fgVDM7dbbCFceA2jFSzftMRwYiX",
  "key31": "2Fz1KJ5YScpjQsRZGHmYK7hxwzHBFFCcEognZoyHDPt4fVV9fmWJnx881u8i8wRqhddJFX2vQpYr2MrX5ziqopTr",
  "key32": "4c6WCDo9eVYqPJdzzpSLNFoHmksdjUNGNaAcXxTeahPNTgJwz4mVBsePXmZFKidbd11yQR2LbxvLH7KNRBVuqKcd"
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

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
    "37WCmVi7bidvkpdtFwr8qxagifptht3BzRZpb1mtgnfWtaWP7ucodTdcL7PbCVuxYZNdz9h9NbhafFGYSPBLijKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tgq7CtEW9T1JW4LmDPrFwsM88QkqNQ6xMNeKT41ndzTJoQtKDyFBgRdgNsmCtKF2q236VWVZmSYChxaX51rrnby",
  "key1": "53dRJRoERwxdCznfznE5qnVr1ryi5KpWpVo89eUtcFp53xUWnwZsF6f3R5PrVMWS3qYXXaG46Hwa8cRnQbUwffa",
  "key2": "5y37NEM3DysfivGZjdHniKd9UkihUQkDsC3pChPnFXSVxCdddTdNUhuQ8jkUUkNVW1KsPrCNrzeTy7EgP4UrMR9y",
  "key3": "Ykc9wN3cR72FhALoRB8a7wX2A8bnqBBkxEKWEYWr95mxqW4ADNSbjdfntrnwZDcZRnD61ycZu8fHPkdvdEfF3Fj",
  "key4": "GnWCvTMEytYwECzQX21D5WgrvAcENVt5v44RbELZojBVGx4Ljk1wGEiSr5q9GSgCQ6Dtg6RNJCbcxraHXq7sTmc",
  "key5": "3sixGr76oMzwawqtSjhsnZT2RDxTwryBsSD4xmDUMEEULN9hAhSMcazbtrSEF6QbJJd5xQjfQybyv1Aw8cy2QQBJ",
  "key6": "2bwt96vsJbPFNXp8sDmebArW5D2G8wPGfkcnE1Fzz8NJ2UJDNnDb8uaT9RbUpzzJzRqFAD2ok8ZYLtBmAjpu3orC",
  "key7": "VTUiGkwwnPL4mX15TWhtqYUgP8ZCPjxmhXRXQFmdoj9HBqhkHeYx7N7VtNBjQS9aRfUoEieFdHTc2L7GNHZnq4i",
  "key8": "3FjYGzH6CHqnE3r5KMWT4MPXRmnpLEaVg5WK7mBMkKpR9Egyqaj9jYxQbphFx4t77ghHtJixLfEEDax4VZdwfKJb",
  "key9": "53JSpDQMSLzmrEEYHiSe13XdcSwgMNaZk5XtZMXyVpi4MZh4zUTwdiaSU5CyudE9j9K1rZkey8aL2WPWS7vfdhky",
  "key10": "28CHNDGrgzUTQ5TqYE1ub86NrtQteXEqYCknowB3U6QrHfBkUtFwWEHR18EjMgoQNyVmhm3LNPHusuKgcVDQYXcP",
  "key11": "RetXbAaDXUtsMRMWB9iTFWhuuSaYDu2RppSQX6qYBFyki49TL6YKBt2K6EoJHygGdV4dbQoMERbgTsnQSuN8323",
  "key12": "4yvjmkq6znZRMwZQ3neUy3Whn3HkW5ESMyQHb9Hw6kSphZnGMc6dh2Aoz1qunwdkPp3F1s6PRW32N4MY4qLWFPov",
  "key13": "5kxNRv5rHU4aGnuN5ThEd5GPNFe2x4mCmquTiHjea6SsxHXCQAbyiMTrxZvUVg15gPV44A4WJpoQv9X7u7N6NWsP",
  "key14": "523f4T5TwHKqPCQvRNJ1uzinWvn84zTqaZi1hKLsL3P6vCaPFPmwSCJargrxjKsLkBWwS3eYUVFbffgK89XHpFaj",
  "key15": "2QinepUMVkWSdka7haCSoww65rMffcGEPPDjy9EZLSzrA6vqGURn9BpbioCCirRn3BkmDm9Eh8PVBvGHfF7nnMSQ",
  "key16": "3uGKKCNwD5m4oAfDR9z5VvmJhaZXTRLbSLn5jQDvjWs4uZPdiQAGb3FCrzz2MewTNiKSBU2MdA3GHUZZacggWsud",
  "key17": "2QFVmwRCzYtEb2N43WvhheQ2ecTFD6H2WmfbvwqQqE5UEZeoscsb6HxnPzcRaio9Yx8G4gCaY3Bc1t9Hm39qwxWk",
  "key18": "sgnYTsHBVhXcThzwhGEJkzZncvn4L9BeqUmvWAZSBEyPyPpQ3SrwUvcHxkhqdJxQ5zgTCoKHAu4sTQwfnd7xHsk",
  "key19": "2DP8isFyjRtbx8mhMCCGvE4YbV1KPb8FCf3761aesaCdW3hVdr4rp92MUjAqXaM5fBqgavr4Vj2mmGcNfPy5cSb8",
  "key20": "5ieFboWY7cGcE254yRMfjbhyMhZ3UPvhXUVtVpSbbNZJYo8HLswjV3SmQQT4amtSJy2L3bhXPCik7EKPbe3YdsRs",
  "key21": "2tn9BGbo9eSP4w4JDFXMoLPugTcUFQPiBU3iR4JSmQhVGHrY4kRG3zbt11Xg9VFbUEcxEHJrthddkeQGYAddWLe2",
  "key22": "29xfZ79eDfiBUfacSrwP1To55Czu1KZp2U2eGCmukwraksxuaTuseHSnB6A8p385kHtypxFiCuevTujkp4ksB1Jg",
  "key23": "54UbWGBfMBi1oUWbJtPNz8gQ1ZRNN1sBjcJnK2BFsRFKqmVZ2wtRcm6KRbgEFrdG5wxyrpcRmMzP3fUWea4XEVLw",
  "key24": "h1gX9b8bg2BhxCPALXWGLpHDJmsq5Dj28jM6XahdY413tWro2TY2MmTwtvvjzwbbPE4aXFakqqKmsMmrZGxGUoZ",
  "key25": "3cFXt5KPyqdpxAPpYGjZ1Ykhv3qmMpYFeXfRCUdr1s2yWwctMd4hTAHTcBTnHcqN38V22fBibE2Laij2M2pCDzPe",
  "key26": "4Gkr8fVXnnT99wF5PgVhRnSx4xejs4f9tLPhbfqUqhxUZUCAddSGZVgG1S3ZcE6KCQKHc9VQaKykgUPHrA1Gb8VS"
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

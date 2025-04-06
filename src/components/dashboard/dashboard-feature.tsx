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
    "2RVv5c2MPi7ATWZcH1VCn3oBiBhh9e1219JzZb2t25gdaKHJDHDgBNdXvGe3uoTH58tzzaaZM9Mg1X2Bc3iTmqSd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JL7Z3s5VVbWcAhevnFeXGspe9a1wjugbMRjkgC1uWHdsYH9JpdZE6LwGSnsphFF3RBZJiQ3gZmPPhR5n8ZdWchs",
  "key1": "4LtkAHNnKjTBuUKVWpfyqYSF15bFTsVMZWxNsJhNk9fUc8pdNzQTmHmC9Av3UFaHDMF4gE7SvAj38yPa2fPmEn2L",
  "key2": "BccuZRFvNzruJQ5QJFah2AJjVDN3qrLzUH9gmxWYSk9suYEMB47d1oQim7Fvt6M35xDPoV1kr375qPNzMhyzKKP",
  "key3": "3UMGFXWGBrAwXtLmPmDPfjYnfp6NF1xTQEYuFbNJLMBqVj7hsMALGfKX3Tex8GU9FLx6n6xqPiW5wxiHX1aPKwn5",
  "key4": "5PSw259G53usyT7qMpH86efRvD2MGibmDNqRYp8vNDNMHMGPyq4xJzWwa2BK4rcuk8cLDrcxVEZr3LP5HGb7q8Hd",
  "key5": "NQz5WXMgrZJ2Ez8SvJ4ZWqxdCyxUpUXWD9iFrJ6SvsoMhXP49hrZAamYsSTGh8GXaA194wKtmXqGGvDBsFPYtF9",
  "key6": "3GpeQSLAT72JJ6mL275nK35WScDs4C7svsK6sxkpWE3iKeC8uj5UjCkcaX8TQA3HKjtY4b1oVMiRCq7BdnfAYEZL",
  "key7": "3G4ZFmbBZ54zG7mQEbovs1a2XHf6pGJPz1gbgJ2E4Uoikw1CJSLoeyoFSRi8njPhvqGKvkHLC9mrHKHWsMY32WMW",
  "key8": "3sB5orkevW7vH4VwLi6MnEs3iZ78yo1YCwWqTkCFy5zFFoX8agVoAPz43zhReLpeffUdThTu56Qoan31buRvfokL",
  "key9": "3oToGXqX67N82djQzkqtqKyAEAUcLc8mK1ZeVSEpraEXcSXHNHJ9V6gxQYckfVQuBUFszcyr9enfuXopiaymFEUS",
  "key10": "3VZs3YtxYH1XFqKiNtQSsqZUEFYSyC3f8s9JFQ4zsTuEgar44hUdxKyYRaN6RMS5cDeBdhAdHht3azuQrbD4yh39",
  "key11": "53MKXfD5T9MA3AddTdhLpFrRod9wRs2pucnAHnc5GVWrQcXqjCX1ofVgNnKj1b347j32wp4qFAXJyMcr4oaaXAuK",
  "key12": "5ScsCGGauwvwruWBR9znRuSb2JAWD5HmFSRdsUiQAE1vkXsFUjSxtDYGHQQH7LsdYkB9i4j7sSzprRQEB2DViuWN",
  "key13": "2edhMG2ugA2t3qkrMWT8CxT7MXEP9r1h5RTVH9VBo9pVEmM9jkUyZUmwCAU58LyHZtiV5vX5TxWSFHSC8NwW3XCw",
  "key14": "5TRC3nDUiZNywcaMtc3MRqVWtx4i8LQackf6dgeeQhferTiegCKycvaZCCYP352T3q47Gibbfg5EMcQmRqFqrgZm",
  "key15": "35vJXYubKza3SyUxsJy3ReTgQbAKL7qXu78wdpmahUPsZeVuv5QABZGY1jG1yH5ULdyyWToscbd2J8kwfnMbbW3E",
  "key16": "3MBpPzcrcpKD517X9zorUCwWB9mXXDVvXQ6iRm9RhJnCsW5dnFuHJu3Qv1d6W2X1n2p8RhgN3YnhA2oak2VCZnCg",
  "key17": "2bnFr9FKpkPSb1ZsEyZe9qXQHhuAsHDjFBiuyyr7dQHDujYNtDYxKVULPQUY8jXGPMYWVPxGCdiW9NysRhVAGUNH",
  "key18": "2d1yiUMHFKmazecRkRG8G6VPT6Me2qsqXFm6HbuDbPzBkc3pcfo6jkbUMkR1acqtKQFTww6E7Xt7DJYyDFfc3c93",
  "key19": "5WJ24a96qTjjcfS9rF8KFNafzgqBBBTmB38rSGKtVzHPmwhE5PkF4FAxC5xK3dAZtbCH4Y1h2qoggMHQ4jSCLKoj",
  "key20": "4tpLUQi3T3mRPQXhqtEBbtU9gDqHNPFoZj1U3x91SgeiBozM9cFcPYDKEbkdNXVBMHaXcjQ3VJmg66YDLNrRbEqQ",
  "key21": "5HHxwzhh97c9W8SS9jY4TCwdNP4udnMbCfehE2cHzDZt9JJUDiHGun2T8hRkZeFaGrZoTjxmkQouvWVumH4936Xe",
  "key22": "3QWzSuqwBZ6JeSXZZWe37839qoTuNyH2a5TigtsFrFNxkMjhxHZ7GgPZzjNxGn2pFe2JJfryxpcRemc5R2shNZos",
  "key23": "5J1S1fGeBA3UXRVCXbMXsvhcBEwhSjVQYwsAxAFM1Y58FqLa2atVyqVYiJeCUEJsKmBKMbapPAU51Ur4QggRsuq9",
  "key24": "5Rizsosk2diSE4cgVPagk15k5CP4YSo8Vbm1t5wi4txrA2F9724ZZJ7pgJwzbyE1git9YhBtZSNvuiSuWHZW2D7k",
  "key25": "3ATgkYLri3qtyGQ58U7NmnXo5WXtUhYQDwoomM5WiA3zaPjL7kY7ykDnu71487ynLY9UxTV4JWTmR921bn3FciQD",
  "key26": "5QCu4ckfMgA7jyxiwqbKY8RSWo83h2JKaTY2UkD1vjW18fouPGSCnC8eEbaPUdpzcWQfjcPKEKQvGTDQ19i57pFT",
  "key27": "4ZHXxRtNgKoHVpHY6HwBFRnd8xS2AcxLswo7QrSpM9fSKxA7kjyrm5NYZ6FdjzCqgpNgjw1wsNQPMuvKJGyGXshm",
  "key28": "5gNEEocQ1DxWorBsEfukDFg3CiYVgZfZmseDnfRkPbjgtmC2xdS4Jmpg1MwsrXJYWZnebME3ZTpGLppKJnoQuvNn",
  "key29": "32LtPhKnsJ21UEjthoEykSLPLvCEMwETYuAmjA8U4XuG2z4AB2SRJUhbcx8FvrsES32dbW17j8xYXyp27pwGppm2",
  "key30": "2CkVFTvcFGFNmN8WAHW9W9C7K9dq7imBboR7mMctHJJfwCDvaeuJKb3jpCvx6CvSrExEnY1cRchng6KSpkChDvss",
  "key31": "2XJE2NYK4WTzNs6bMdkdV9e6rrrMozYP319T3W6wrJ5YRcKJ3Fhb7iJ8wweXwpq1Td64xfBRBVCtko9avanY2dB3",
  "key32": "5sF4YYSUQbwehuPFRWqATMZpU9CRN5sCUELPtNpoFHVPEs63TS6zRW7jfo6WAp1CjjteGD6Ssc2VrHmKuoU6V656",
  "key33": "3yA3bUL16FmQJPaVDqfLMRDNbmxmEqgszXcXWAEn3mfqF1ik4J9DhxWvVSQn2djvH6MhCV8BZToEppo3aiCWMY6K",
  "key34": "3zRtaJA22Hg3eCx86WS6EGU3PcaQu1kTjNJTVLXtumHNoWiBa82FKpv79PK4WGbSA8w6e6SHUPbthNNRd4E26qaT",
  "key35": "5QdMFt4E4T6vTqAaaHW28EZDik6GT3X6MkP7n9u3f1kBY13q8SR2537xihW8DE85NrwK5wUrnZJieE61XeZc2kzg",
  "key36": "GZBamT1cAeQuQy2TJaBwbLxHpaNfzweHJv8ApQ6NhKTZPjJTrD5AUhFYzqNEMvgnFD9uAYa8xsecPU2Npq57P9S",
  "key37": "5bV6TLD3nwS6eJC8PM4wFAud8tpKbHchfYZ2rqMTpCYFC2e7wyX6PzQiaof5QuXUrRGp7Hg4a6ofq5oEH9CoQQ2V"
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

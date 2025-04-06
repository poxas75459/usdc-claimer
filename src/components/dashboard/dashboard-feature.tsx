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
    "2Tb2sTUse8gcLR5DPC2i16J7kLRoSwzj7s3dHkWqmLDw2q3dkPqa4oueP62Dvdfri4zMFGykqkcQVXMHYhMD1QdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjVxFVVMXGfbekxZ3PL3FzBBM8cdd7vddB4xqK5oCRSEw4pDcqMUAg8aGHU6b7SST4WRzfNsjtRZsQ8S2U6aNx3",
  "key1": "5iGZH2DiG7n9fXhGGu8j2BsCtCMrrDRdEeKCqzcHcUTZndX2cfap6tkAzhTHaPFP94M5FpYMTXk9mt8xSE1QaVoM",
  "key2": "dGUQoXVcdDtSduP9sHBF8WT7VQ13gq5tEftB8GAriSACKbZesbAa8VHvzFvUYXeTfJhB5bx9ecewCdGUQJtGqSf",
  "key3": "wEFtYfZLQUNtTmDtFWDrC3dvyacwij4VBUgjike41jvrBeCyb8L3z4vLaaiTcWLZ2eshTXTBBRGmuDCYeX1h5zW",
  "key4": "jsy2wfveahpRt9UEYHYHwmcHJgmi8Mhev6QUbMKrRAp6NxCx2BZiStg7KxFeQ6VBFVtzZQ5k6z34jtkZfpM35Ze",
  "key5": "q9yNEobLv1jZThT6Vs2WvinQPWGBkRBA9Wt3gw1UQQ4DFaqCzeRh6hJ5Lnhx4mk6xugZmTmc9KZVNXWWWB5hkqK",
  "key6": "PwXHu2BQnmKPUg9rQrfe1r8tUrXVGtno59igZhUyGzfXhYMKeD187pNP3W2XR9ttepgx6huP5WMcce3FGR8E8Wi",
  "key7": "4VXh369wmJbPjHkr44Q7pwnQm6eUqG4JMU29uHSMnmZQ1YUcHeb9Cw93DXUuZ7bmKTunXDcGdtiTLf2RSHm8P21h",
  "key8": "2EmibYrT2e2mjwNFAruMb2RUojnmBWSDmLxQb7jzTVEEz9WgkkjVndZP6B1djQRUURgrhbGUJaH1REQzaZKMpPRg",
  "key9": "4fb4b8iSVauW51dZYg3Tf4kA36MJYLAes3nx95Z94jxUwhsuckq6qZ49wWtj8c2ez7dffUz1jKYcjXZS1T6ewYKH",
  "key10": "2c85878itoDfhmAFcbxJuQjkmk1bFnCqtD3spCDKfqQmZ55ckKWYoBxWEf8kjPVM4AnJz8srncbuaJt8W4BdsvuG",
  "key11": "2i5Yxi9QStuYxneyq6h9xMrF7RipyTtx15iZJJ4nA6LyoB2DvpNQZBegK9XVspjHYFP67YBzEn4CusewbgT5hMNw",
  "key12": "4CaPvbPfZeAMptcD92Ts3mgrzT6yn9W2zPX8UW5GXW8LWi23eQfY8R2XySavvoebtHgW21QT5Qj6fqV6J5H2iVKP",
  "key13": "4e6wS4ByNvyJHuKZRV71Q5wBfsuzWix7tsuFT7ftzW4Wj81RPsX6QbCtUEJAb7PHdAeCfNLF5i9afu8B2dgbVaA1",
  "key14": "3qt6tgvfQ69uk6qqfpkp9n6o5RAk68CopNmPsZzsVvq76auA8wrYQzxAFGwUxN8TQz2GvdqHU6fKHCWFn4mwib6H",
  "key15": "3XbZiyWYMjUcKkA1TLGAv6prxf4xPvPXeB4Hb4YfL5i4yp3Sp9JyhSRrTvreRrJYR8PNojzmS3jd1LnakP2rZa3i",
  "key16": "4X3GGJmmhRw7N3JpEP6aLoDVy3jwKVHfGFmGr2a8KZBAiq98zZ6P7TYrKzBtk1uoAZkhSuzs2QRhzyu1ZJ3GS7un",
  "key17": "NaTU2c4bW82KFtXpBubQEmYsqvohL9vtv29Yc3b5eFzJxsi3K6L1gffKETq64xsgtcvncoZ64B61rGT1LneMMRR",
  "key18": "26cgJxhPGD5K8QSdrtVZYu5R5tDuWTrSRKHkjSvTh2NsRciq7cxxndAnvitjZFhUTyviFZdjY8caeVSqaJAffp8F",
  "key19": "urMPSfeVDcDwKN3QDVLgMRjHoCWo5vMHux3iUwqSqtfSm4daH5uGnR8sF8ccBm2jtosp6rDztGi38sfTXgN8s6k",
  "key20": "2vFPPd76CmLS8MzRsyYGtqGDH7RkTFzpLeucbjniK3RAT35Yp5TtVbFvBA7cp2vhERFxTG9WjxQSY2f49WNqLCaE",
  "key21": "4UNNEEtZQNwfaus21b6z8qxizz5BC7q8DViErAbVaLxufyyA6mregVyx6EzmTpsYUibg5zGe9oW75A2xbBqzt5jo",
  "key22": "3iYo8rDiLhGat1zDrPqxdhQH2avssCvyFABv2GnQmi3ZcZKTukxdBpTL9dZTRXmrzfJUhK2ZscXjuDo6VzQbxAmB",
  "key23": "cuK2PUZyWh1MpnfKDMJ3w4Lr3Egpcg2d1ZDv7j8kQ4iSHnBU1GajBZrr4JCS5Hit1AnDmjeEsosxQfHA8cYRBh3",
  "key24": "5KNxWJdHzEoauLJGMHcWGJGfn2egR1ttWSJwGqMGxQsVUsiBsfQDzfJ4Sr1Ud5Z46FkUgm6FZLqhmhzPt6J3jrxD",
  "key25": "ssbjK199HdQAcDRiu4v1jw3mV2a8cUrSMvBzcLS1JDeuTGLPWWMUuQmw7janGihJdpbMUdoBMg8xCrkjxoLGJ5m",
  "key26": "BRFgk5yDEPusrXRRb3UmFFKSPw67iEBSagE5B6xziu9JnApgq6M1CMSow4dUNxkjrCyBVw7GHzS84xYkjr6s4n7",
  "key27": "5zJoqMmsffY2mXsuHtqnekgdAvnWVcLNVVvArDfS4bFPprjLGDqLpFgmETZ1E4FSVHxpgFhqWTyVBAT6uQxcKDHi",
  "key28": "4HY7VsJLKNQUHDyVygbtrC3ULpp3XArps1q6imLCr5mBUqc2M29nR4KoH1xXcvDfnhUv3JFUezRmeuPB55NuYQZa",
  "key29": "5R3KHYy7vFRm1gvLQYaMemeRh1aCTXYSyGo1hPkFHPQq3AvB3wrTPvgFa4kbccizkytkcyH6GTJoALXGgsjuo9nU",
  "key30": "SHMttS4YWP3iVcpQFqjpHJS46wiU7ffDgvbux9SWHsCTkQeGyPEyFozaPk5xtn1pRHiFphzynA9SpBBiVDWqBJN",
  "key31": "dweUtEsXbXAPBiQwjQ9PprEUh44scR1rCEifSULPkHY9WuGJRe8dLY2CpC5H2AJQV4XUhVkxYmD3zo4mrSwE4h2",
  "key32": "3Jhjz3EFBsj1bTKcJUQEjnuibk3mHDs8yQvJFLjHwjc2wDGNe5hZh5FGzGxXgtMMofUfUuukinv7Y8NcZzcjBTQw"
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

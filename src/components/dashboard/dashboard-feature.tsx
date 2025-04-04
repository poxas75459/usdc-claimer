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
    "2BNkzfEADgWDJnDM9d7N2XGDd64FNGsQFHVfSgkESW7KRo9h6inngsCejmmGGyCjjUmf1KumXcR31BqZYyhdKFAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oUP69eMYUVAYEXkgRPFHthnujgabQxVA1JrrGBCCX1HrjkCAPM7LVjXctaWHm7pWaP9oLubFjKhG2DZJ2vpyzZu",
  "key1": "ihkCKapE1QkxEvZ1mS75xX5ZbBQCR3yJ4SbWpPSt2Ur3SS8U8fNwdb3nUgk9wH7EEdABes2ZmMrnJwo4XA1zesX",
  "key2": "2fNrYNvxdsQ6CUxaTQhRFtYPYUovVrbsdop8Yvt8J392dSwXdykjmUzR3Y1QRMba1MK1pVBX2aYEts4Mo4jZcL14",
  "key3": "4uMhW46U4nkXnfLzVsyvAfww7zi6Mv5xgwM7nPG48CXCr3qmngX6d8ciGmTVWdVxdw9a5U27TCwRYfCWhQWTSKeY",
  "key4": "2i2WTCvEaKpgrjKtdMcji2RBfw6bnwKuD72sELBZAnnqgUnWS9hv4YW2bzLHDdjXgSQTpEpSrHZmWAP1xpFJyvxQ",
  "key5": "5V3tdax4TkoorKo3YtYcc5a1t4SGBFBMPSSFEmQzXcMGDDkCmJHtH3zRk3x2ViexvbtoEwgZqLJc5nU4bbVJ3TYS",
  "key6": "3SaXRNths6EMxCgdjC1KhjT13Wg1p27K6uSY1T3x9Nuf4ZdcbT8nvbz4muLmT8hqwVhax6LWrADpqtLvECtFDbTK",
  "key7": "2WdnaYeqjpfNPn15DqVQUNcF242WLJrFdVCbLQqwaBFfafuBSPNs1de7tU9JdruMGhXotfuuX4rgecyeKnXLPoRw",
  "key8": "STjkJukShYXEnBpBQHcBYyhWsqY4hajR5xp3CGUbh1qpDUt59LzCZM73uQESWsF2KthLsZVcYZLJa7k63i6aHpJ",
  "key9": "45e1UUycY7RaWX4D8Av27HSAxquAkhPX85srqSrctG4zVrSd3wZmN3zSN8zs7rqJjoMwGNsemr3QG4D7r6yMZ7ep",
  "key10": "3tJeMG69PEJwSuVbfKADCb5HpAj1JnuqijqVo2RqYyFC7WvcxQv9aFFUTU6CXbnNce6WLMRWztNkMbk4RRaXogC8",
  "key11": "4BLFmB5pT8Cm1VZrodum2idykdkmebedKgpPVK9SXRVvCrctnymoL4ETkLfG2AxRF2wW5oNJBnHVS2zbyVzGaotu",
  "key12": "23UTtrKHievxkrG17hsakV4FugXtNoQ92sPsaWBDDBxGKa8wNLKubJGuviouSuND9zumYNBrLHegFKFKGpytjudk",
  "key13": "2zXKXmwMD5nPnBNJCJyzeg3jei6ScvKC28WK1ZNGbpLDZ9JoC3amnjA1ERvE48n6JWDcqwXz43C9nr1xar39yJ2Y",
  "key14": "4PVizAkXvw8wuUMB85BkyuwbNxA2XCiVwKB1KnxgvrRc6wYwrS3ZaLyFBjc9ijWR3GkwBdevdg4vAZCqsdPbNKR3",
  "key15": "2Eg67Hbk5JFCa27GfCxps4Ng2DQCYB7kQKvkjxNittyVduEPamDDGUcXYhbpcvcSDjj984QdN3ffTmxd3fNd2xXB",
  "key16": "37FoUPVcT4Z1xJsD3czh5DAP3DgdRF4bsh7zDw4WUqHTtUugWqdmPPjprnMnJ71uUkNDXfUxV1VeTDJUpvpzDg41",
  "key17": "5fUPrMY8Y9rLmKaYXBhxsWjpCytKtuBYFpHvei7byFGWqTWvPb87J5VKiV9VgmjfNhQztniQj9ozV7FxD1HSCuPB",
  "key18": "57r9hq9wwW9ou7cM7GEurCN6rUi3Re99KBHkp4T1HaAccNCKgwrCKnCRuR2eUvM4sdJqqbMwk8m3Y8X4aBDhZAQP",
  "key19": "5XiXNQRb7PoeibKsbF9wwwMABav9CdXMdbbUHSoMPrzQPTzzpjh8uGpg93UEiVbZ91aeDj21LQiQR6ptbvAQKACR",
  "key20": "4fRChYXdAVffHTZPQBiX616A9x6Gp7tTSJAd4RNwsxDnsQpMrPLFEDtuo2ZwFkyoWAuyydieqwjUQpUWHLgeoHTC",
  "key21": "44TRTjDmzqPQCLbpvJk4vWyegxAHdaJrNqt571aLaqyCTVG43m6UKT1SvJdmMTMksEnyiTrPCkNJcxNPcMnpPn4r",
  "key22": "wJkXvb1Zs3YgvEvye1D9cHf6aVKZYRap9TzfoapQrZoiYLVTSXcf6RX9SqY7Y38wvhQagMd5xAx6PJJuh5WTy1v",
  "key23": "2yGMRjV3Rv433X5iqBG1RPz5s6ajomRRkgUwhgXUcX7FaiBWRM6SQM7hM9e1bV5PuM3dh9u6j8PxSfDRD3jrhFFT",
  "key24": "5PQGRpkT2RQfsAzG7bzR8ox6oEoyTgoCuBYYbpKiXQhyRJYQg1qPHxFk3LF532GD5hyAjB671zyJqfHS43YY9EPB",
  "key25": "42jgkVx14u9d7p87Y9MMoUBnZthW9bovgLtQjp5QtS7kNV3MtqAdYF3yQN945dTmYfYbk1soSMxS3eASzhmnX3me",
  "key26": "2thtRCUshEsu9gzQhTFWqk53Mk5oqDYdXKP83iEtm3i8b5EHYnDf24oB86MDt91ozmTrjy74biB2CBFLu4RcR6TH",
  "key27": "4t5JEx6zWUW6kPS5KrLvXXpc6G5VJz3y6u1UYg3zepwE5Vct3GYBUwRFbhXBgh772aQWfSZa8L9oRERP2jQkzmvw",
  "key28": "jyeLaRs75VRDX86btsNJ5xbEDhPQXe35T4ZCKXLLJC1snTKkWorvidGC2pEX32BxKh22A9MqqGjZeQuZhMShG5a",
  "key29": "SQUiw43skLXAvogfAjsidxM7fyzadm8Fcnug6b2rEGYBQMcLp9NVpbVMRmtEgkjN3dkWqzGbisZbbHG3AeWPhvT",
  "key30": "5svWn5VKbFn3VxYcJ7AvthbsqhR9uXdrEFmxM8GAmiJqQqVcKe1xoDQ3nQsYpQeVF6ttNau179kgVS7GvRt8WgE4",
  "key31": "2GEHdW7CgcMCPfZ8FPbpCyFZ8r8jseF79J4PJgBxY2WaPViXhimjXnvyTHD4g1uUvC5cJrm1xbUKn96yXt9iKHqL",
  "key32": "3HpXAZL8mA7f49ignyH8vNotd87Wperqh3Sqnj8ioUa52FEfDDgXLJ4EprtCKJyB9EDpkT74DoYMVmbngq311f3Q",
  "key33": "2pVptbZ6DXNM5GyT8LVYN7y9HYoNqAeMhxxfU7p23Z6DotdzpDkV7vhLYsEzANZNw73DmZqiwdtqNs17kFu5csB3",
  "key34": "4zXG1fzjUEgWEJ4jFPcau5KS5b1iKzzZ86WQunym9QuLvUdfAQN4mYXNTHkQQ5i74RJ4fY7gLeGYaiEwYkq7fVQG",
  "key35": "cSC5morw1Lt8TCZeVV1Ct1Qoq3vguidUUChZah9cX3HSVYbeot95b4p6WbUhbjaqtC24w8quufPiT1KkKZ4K9Ga",
  "key36": "3CwhaY6j57gkswQqpUq9UoJx9TAtL3pJBQMfrXjT2NiBpVEBrrdLUSYqfjtbBNMsRKgcHhxVhKJVRnergvE44R4Q",
  "key37": "k6iqTiZ7184CwkSNCoiFLyMXawJimcoj3F93YUABbi1ZVDPxtpN17T6bXvt2LJd7Avv65B1JRtjmA8MozQwm1kd",
  "key38": "559rRZbkJ8DWr4o6HFRsWYESosksMXTD4ymVbJvoBkrALDAmDBM7CVNg2RqyJzysBNae2EwFopoTiSQGMMaENeBu",
  "key39": "2nUyYeyzkNrVEgaYYYLFMqLuhogCaQXvStc1eK3NNb6snKUSiYmxELyzNoXGKfwyz618SxZJ9qZNP9gt3GcvPyx3",
  "key40": "4nt4AqZUe46vVEixdgcoGy9tjZRguuJuiBAD69sTRqXcNHXJ4gmEYLU5JpbTcvDNXKFJBvjxBM2GcHYrmdWdNqGu"
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

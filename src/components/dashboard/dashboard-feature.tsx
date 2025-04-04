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
    "3Pa9VttqbuiuCUkRRpodm2hmxiFPgQsDTsJRLXwLnjeXQe113kag5xoxQ4Dgu1sfvQH8Tpou55wm5z6FtNm6TwYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fQxo18oR3MZwvC2YPQAPJLLWuk8EmUY2jPS6VexdRQBDBcqUfU3ESSvizTSSPHbU7ghzZEguHj1Brx9gUnQYVP4",
  "key1": "63X3LAqPwXRufWFW3JpqLkPi8Shx7qL7SeTdGQVUgX5GKHjmnyvJoAVBd6TeWpGRSkGcmTmXp9iNGia4jeJ763iu",
  "key2": "3nEVTxUV62tmFdiKwUYCQdUDpJiZvhWrF3kFd2b5mezhpTjjQg6jD2oKjW3LkzD7ZSx6YNbRXgXUTUC1dhPm12de",
  "key3": "2DmsUweMuYVMNrYLDk3mLEfF2hMkCN3eSxnKo6HAEJDun9tkguKr6JB29p8wvgHcVeGo4tQbgsDdbshdBi3WZfmX",
  "key4": "4s1eY68A1PEToSXcQ3hmi1xq6QqifC82B6tPUgSLw1qKqsevKsi8yB2mvBoLr9inLNnxzUT2o5vYMjfz8Q4f3SBm",
  "key5": "5bgd9ggtVDRX4j3Zh3Q2FSMxYPAhjTwSwiDGCAG4G9AAWiJvP5ZuQYS5kePnWGd9zkFGwFksfHRtjXgrxNX15Ff4",
  "key6": "3fUodbbDo2CVmtBDW5p9bFdChnfQNmb1FaN1u5Rqm7EhbAJpzjjRkUyzEjZZjbVk2NWRxXTRhqnPWKRtfiZak8Qf",
  "key7": "NNPa2uuiEo4Dqgdd9xogj9iTPrSseqkqS4ty9CoNiaYF3NNS3NsdCpQ7e7s8M15xCLeN2k5ZLrHgsX1HVkat95i",
  "key8": "FtFTUcJxW4MfKsHtrhgk2acy6VajD7sjwHwoyy2G5GYFfX5t8oTm8p9KL6shFdQ7ShqDBuxR9vaewdu2cBFy8ys",
  "key9": "3vBNLYJoTtLyr5VMNXpLTdYaXHteBnDMztf8GpLDhyAHrsyxEkPm5C6FzCPtNMSECeQsYwVtvjoWAkgLPWcwhxsX",
  "key10": "255DjnkxE25pEck414pCtSetRgDp2n7ecZXAqhA7SykY3SL1mjvQQY8dHveH5M7P46os9UygE2DGSeXS8RAg7B7a",
  "key11": "y3DN5HJnmuQX3BkoWxCye7EjBTfPwLc6Wuq5Qh2MNUNE78FwWGfucYxDHAXV21b1YQ3zVhCC3BuZahexZCQzpRT",
  "key12": "5tsyo2BgsyZLsHheLKwiESZYpPrX9uT7Ko6t512df8ShD995kYXNnE3n1No8ydYrRJPzC1VByeqfpQoSo4cscuR2",
  "key13": "3AdhLbZjAn6DsiZzsLzREo6xZDepHCT1dvvoKGjMMg9tYdakjJ9HHRhUVADu9eWR2MCnDvXyKRz7DhMthmq1DXuX",
  "key14": "5sLfPCSJkMfcMmkdAyAYqwV9kqeDnrECyT4xwWDEQsj9Bsp5hyie3Szp39KDe6rgD7GdKvzvTKpiwtmhsSWSRt84",
  "key15": "5YfKV5MZ5zHWNCsxHorZnzJZZ37YS1CzZXq1SnxHLKE4UX7xM417yVJqnP3p7emKYtCwVzL2UK3uq63aMdv8wCvH",
  "key16": "2UpPq3atkhRuXNEoKbejq2vjDTDuCyHECgivh2bo6bPG42cwq7NH2Pv9w8RbgGN3JiodnrGBRksMGeXTHFWhERAy",
  "key17": "A1y42dbpsWeV4DsytYUpWL3F6BWSAeWRgdvFpQHwnSriSjyP1LmQfgXrZdHPq3YbiiUwkjiijGjw4D3Emqk9Upr",
  "key18": "cHp7qXBqukfgt97EGHttp5XiWGXgLApoDMkUSPfYru2BaFEUJ8tr1fVohYfzM7Lm1LRAWQxEqiYWsyywt6pDKUf",
  "key19": "5tEWpdQ8mHtH3aYMeuJAJCMuuf6jHwkKQ7jWMNZ2p88GWpJswcbrwkE8fECq419R2XjbRuHg8hMWyh1Cozc3VRXa",
  "key20": "29H5QyTFQU1pyBWQ8o7vKa8KDXmFknEwSoanX5yDvoCVmjwAqr3qszcZb9g6iLLDp1ocZ2tuxDsfXYS8xyzP4RCU",
  "key21": "GQAFUy7rruAEeUXGuCTeX2G6DrVwGaZ4VP1CzKP12vb8pX8c7BmHX8Fz8G1VnR8MPuo8qFXABPxfFEVhWDmJ3QG",
  "key22": "5kzEg6emkFSnyE9nis455bjpLHpcT3KHsZo2637tBgMEzjLL9Y79vVy9hzpuqXHg7sP2hQB9HavYyM7NvfyjeZBV",
  "key23": "2tMjhHeiErYVJA9rmbCXLjufGghi97b2cy6DEXPBkri3eHLdX4u6KQXy7X3SpSe6n1g7i3dUud1VhXjdoV5Uq557",
  "key24": "1rWpsPpnv9z7asBrYrYF24mpnnpEbdY1GvESK7Avov1Hx2qFgMyvUgtXFrDArFnnX5aAQxcZVr366x8BpUep2or",
  "key25": "4WBWsETJrrGPiPAX4X4rEf48xa6LLmF8xT3knymw7ij3ihPADjVJ8t8NCo7UxQqpm16epCp8KkDCtpEXDFB8QzLQ",
  "key26": "2JHbxzHF1n4Gd41vov1frBNb447RCUE1FCDGdoUZgfLQs5DinvH7koL5A4VZWQkqVLKuCPjGQqSrbswQcuerZJ2b"
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

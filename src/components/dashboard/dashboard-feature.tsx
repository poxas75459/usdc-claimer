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
    "569wiScU3yAEKZfJ1snR3oUWbnYo55BS16i7UaiLUexUN2H8sUEw2cVzxFXdZot4GGYK9ht7jZ1n3iL7JFCCh86L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ggrDkgMZSJumHz9bpmWodsjib2smwdoXsRbgxdgYF6Z7L7hahD8E9eSF5zqyK8nQNJxMe3vFCMHtYjdrvEsJ9KY",
  "key1": "8i5KPdUK1DvXQARYjbEyeFTbKdK6NApVnPdwXSR38fQkFvCaQJjisyiMrFR9P9rxp2MmP6VTSgK6DzBf4CY3hrq",
  "key2": "4AgLodY7SnwAwW8Z8SxDD9hDKSRZ7BwwPrem3HGTfQDiE4bYymNNz2UKpJ9artrbxLEwJCAFUCRQqQsXkNbQAEbZ",
  "key3": "3TxvwZUTYZP1P3TF5g9ue9VQUxynEae44qR5zVy9525t6dSCCQLKWYgG62k4W6iCfwu8aKjQwSzzkeiAfyBco1Pc",
  "key4": "5wKrSKiuzoNVLYxWVd9LjYs73sBuM4qeGa1sfz6gQj84qRC4DoLs1C21ycUcA3DtbLA39QNeyqEJj4dpwceretoJ",
  "key5": "7U1GPEXwRBXZX6jEVF1bULRhe5PgixUHRsptQ2LMPc4W2QNDdZzYv41YhEmoQWm9o7zvAwNjL9yrMJu7tHKHvKK",
  "key6": "5GruKcjnZFzXY9tg7HNFECeG3sqTMzosB1Zecms52RmXWLQMKfQZxsc6YK45XEMqV7BHGYddmoGCHFfsCYZMutUB",
  "key7": "54pT6FBicmtJfoUThGTydJaNV7jAhhjw9W8GBxcPSATXiBuBXJkJoTJYcqy3jupHh58kcvcjUMF2nrH3LEWvDjt3",
  "key8": "4pArX11cpP4CmXC5mMiyCje6Ry36KHZ8WRwWA7Zt4GYriUuUuFAjxiG7NR181cLt2twrtGhzHoUiPVX4LAMM3q2Y",
  "key9": "2wEXrkdV557ktHNsh1SsDifuV5HNaN95iaFxS3QvCdvGPzetZAgyPKQxK4GyDGBybnmFitm7zas3qzqGFsvKn3sr",
  "key10": "2KK8SRxbYJYPKkSbHe8DxNAmUQUZGktu1AsZFvaX29N1K3RKQAAVWiieb7Ejj9dbV5mPuoQLkLfVyJ8F598oXoVW",
  "key11": "5mhMUYjToUWt3vnR4hVUeUEaKTLgqJycYvUH7RAzJw2hfGJ98nXhMvqixfjYNguPzYvw4YAQFafX5ofahZwPqRKT",
  "key12": "3v7hxZAgvaRAHLwiqTkA5t35RXMxZu9eYMyv8djv2mUxYrPTu4hjRhAKpGT1BsRVcjMnPFGMACVbHvCbyWr1RLfk",
  "key13": "fSMkCmoDXiiqZmRXyCUbZT71EkFAPjWoDdaTPuM7K58aNhPEEoe2MiZtbiHebYUuPTWVeMfCquF5u4B4ebcscGq",
  "key14": "5ZJiRxG7KjCMpXkz7bYLjS3nradHqmEs6CQ5f1weYeqfdCLFY1D9yAyUiBbnavtDCt4yZ5yjUecYUnVd4ubs4Wsc",
  "key15": "uctGbzMUPC1bmjT6Q9kN3Xoib6HhGdaHhhZZQ3rQZQFbUUAzJU8shDSSeQZpZTBXs2uDV3Gz38hSq3sH3PmD9ph",
  "key16": "4NoHPFirutY17QX4tzmfsmssWCinW9rBhSzvoTzZoUJbCPvcK8Bc5TfyDnszYSJoMs3KfCzqj5MY9oQtB3dkG6S7",
  "key17": "4FWvXB3c78WA79sMDGkGBXueF3br6SNokgBJSen1NQBn8yj9TRL3mm4Fui4r9CEj7UJ8NmLn3K9WB6z3h9wTxxrf",
  "key18": "4mxD4CWEgw2uCWccc8AtRR9VAAvkPkxDXzZojod9Fs8gQhdofHgFWMy2CkCiYCo1scYpwLDRtCYsqUp7NtFoSp14",
  "key19": "otxohNptbTWEF5e6VBUh9vGeFsfzvmNbcABptbWqPhmjwDL1uYWtCU7a3i6qg3983brHSfoWr8rjjBD7TDE2vt6",
  "key20": "5mpMDNjEtgJwHtB7ZZbanCFBkYcrgNpVi9ogvmUK4XPNrw6TSDxzz4S9es3fLDYaKp6UfT6Nh3L1bN8tWiSs6rp6",
  "key21": "3HVBXcmPbAN5m6DGVZoo8jDqDmnH7FuxFn4NVANVYyakBDMDXNGdT4mWhWSFTyBgwqs7KBfvyQU5ujSghMhvNPDp",
  "key22": "33JHbU2PNWHRnVEDZu3sTtJ6ZyvgAPv6mJHhzitpNCZEpNJPaMfsDXmL1VvvcipSwkFV7LhzQyGcHsBnx955fb6N",
  "key23": "3G1R7RXbRY4MKU9tDwRTXaufmPxoRP1qHMSuxrNXPw1AEzryhqyac2d6RskZpErdoERDWpTovjkYs8DvqCv7fPGw",
  "key24": "4QDzAEdG4RLKHJR7RrG8wQihW67w1a53SQzV2DHN4kcZy5ULCzaGgA5JBogrUyFkgukckbWW4mTjMpd8n1kvgxwS"
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

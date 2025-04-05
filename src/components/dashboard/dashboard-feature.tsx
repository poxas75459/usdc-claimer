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
    "29nA8tn1jYdK3h6gSYgAueFjHzf6QKaMUppaXVGiBr7kasqgF5CWxJbCnuqjaqBJhS4KMmnqQuvryP8WSFyPXLJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pyE1xjNPkepQA6f4y1SvsHkw5PuxqcUGC68ZxZyu4YH4mD8qgPiZ7qPEzCBJQgDuzAQ6cTQfZWhtYq8eWvJJ4zA",
  "key1": "47nErALp9qCLDNMVYMeRw4rLmp4ReKtJUbuNDakxoriE14W8osvAVEoexnszHiMo7oMhyGZGu6uY7gPZuzs7uMTR",
  "key2": "4aQbfeLfBvh94eQEi8RrbNtJ5acaeHDi3zUPEiNZQUPqoycbSbMcRWAVube5aujZnuAeDTLq5qqGoxeeVkqQRvkj",
  "key3": "5SP5ZRBShtkfk3pCsFQjSZ1BUhQEGAaEEoVdt7DmGovKj3QMYpT9KmRKTut3sAjpTEYaSwjfqkubVHCGLAYyTvhM",
  "key4": "qtuHE4HDWbbTqcpyGrqWsNNsEvh4pqDpkZTRYpmvXcma7N5dSRRUVa1BNWr9Zg1uYzhv3PsBYRcysQLAhoiE4Ez",
  "key5": "5HcFoaKLE49d5zQv1bAkS7KxDvh1vQzY8aSidwwiEJYF8g2tnmr23gqGB2ukwGxMMaBFjLYRgoU3ZjGLPqCFpYhr",
  "key6": "5ruYeiz3M81EsAtb9xAmqQCeJESUpD4iQ1vyc2bciZQFB5zeAzkaXKY6S9SSiefsJVTRMzBSYVdkNxn2ZH5EStig",
  "key7": "4G9BLCnCwSnnaaf6ffH5QbY9AB4nnYvJ2bmaDCj7ac6gJAUWxdT8sZ4RegydhZk1UEDd972nXuNjXGe68xEnSdi",
  "key8": "3dWt6ZDxa9CZcy89tmt6pfKMaFoRnY2Qy5GAtq118NiN6XbLYZocs8bnPbErvzAcsvbp6iJjpFkBaUAUbuPduTti",
  "key9": "4nNqqmxG8JAnPzmYp3NBqUcyJyWcxQmaM25RSFnG65Mgjyi2JjvXgMAGkTu2KRFoTGneVMPNgTWf6bMYp3UrL1fN",
  "key10": "AghAPhj76Nj2QTDYiRAwhLzWDvZv8VFkk9NVKTGSSK15TqR9ZHkPDinqzMYPo5mU8hmuz2bdjLsmHqo3yWBjnSp",
  "key11": "2wYeSv36voY19EWcLDd87sGcms7mn7vwEY9BjGd6QkWbwvKfKNrHVmRwqU4e7AyF6PEjsGPWjJH4VY6gxsYeeeG",
  "key12": "bMLVFTfs5kx5yK4VoTsAsCw6RBaPGPiq6vwQAuq7eRKrt5Tok9VFbHSEHnZRGSc7pS6ZLWoMib2ne3XB9wK1YmC",
  "key13": "5jopy2joNPTB5ux8LHBD3Xw51AFBnzGut5KNx3bFAaQYMwH4hQr8oj6fnDASxXvnQ6tHonZjqCXXki2poirUEwYG",
  "key14": "4FoVZnXk2WJGH5v5zCshDwDLkWfR4u56ckgJ6U4vxyGwLCXowb5oWxZ3i7Kb7BA5KCHo4MuhZyDtR1fB4Au51kDU",
  "key15": "67jzmdYE9Mc9rG5aDe6k6dKFWbCEXh3uaXM6PVoaKLBqrexwDWZt5bQKMm4GsFAfMvrC6ZmTmz6qMQ2fUGieHtbq",
  "key16": "4vADbxrCbBMd7k5qVtjXypq87UmYdSw5r6aMJdaijPL6hJyN2K3Ue6ggSWDxbKiDnuJVSLoKrCpDnpAR7kqheJgY",
  "key17": "5mTNzZJnh5MokwWBbRX1PRyygc83eCmh57UVvFGfjJTRMGkPAtFYHripc6mvEFtmkAzcbRoX9isUc4gKunn294rL",
  "key18": "4U61DidVkJVSFJrjBA1gWQvEbtGGWLrrimtJfFAFeHYcuo6YUnPu4Y895fbwvEntzFaJZwP1M64arrZYZptzySKS",
  "key19": "4HUWqXRiDZxU6qa6GPNWMYTrGnW66SBLgDsgKpAsUdjXSd9bnmG936JweFdHsZi8PnbNgpPjWv5mGtqLEFkyyPmC",
  "key20": "4w4vu5D6A5yENFfZUmZpov6hcyCg5rXvNBGzoNCBK7G2axDVLEND91bjyG4VcTU6CE9REApdyM1bPobwacHNTaW5",
  "key21": "4ynnwX58uEyRAvKS376PJWbjP6zjXAQvYjbPKQwyWhZb8hWpvffLFMhqoPv1WWo35pkacx9HMYYaMCDTAH4mWdoi",
  "key22": "3xVWWhGeqVW62z9sPSgPSC2YsEg5ZYQStCLfyzuQAGcYU94DuPZ7dAKHqo3tYf1Zc1sH232qPJJyMc6xP1phSaT4",
  "key23": "pUCymW8bj7hcG9ZQX1vDCecW9EF43wBmCJoUKWFNFxpywAge56vsAefd4djQFej7NKoY9yLww6LWxqh4u4ExWYD",
  "key24": "4DNKkzQnV7ByDGK5USQEvdfATtbL31aMGMcJygPpZJu7PYPApbKaAHgpGsRwDkoGkbsZpn3UEP491TexWgG9L4hu",
  "key25": "dgFyuQjziYPpW9cHpeg6axvTiXDvxzMdzQHemi6MShtyb9kvnRmcm3AXgfEiQ2Yik12eCRKF3KaX6vVs6wZp9jn",
  "key26": "5WhM85PbRsX526fgp5u1WsX5Sx7rrXhrywrLzaWzX18G22Z4gX3ZMJ8WW5QXpxsDUULhmxcBWTwRacTZbt5iG1gB",
  "key27": "4pFEqCxmSLzYmMGmF6sqpFD3YfVTfCx7UhYCkXqpCmRubXDc91AHAuLkKLDdiwZ7BGbM2tdJsmsLrGhwRcCziZdu",
  "key28": "3qjgZTkyRWkgfAU9rXhrsFcEbbSg3o6KNFyrRBogpwPidUkRorXgM6xqWJT8RyK9ADUzAQSDt19xtwYcGqU7Eon4",
  "key29": "4XoPGynaEWyxx88GPhwQB1kgbZfYWaqnKu17bidfXiAxMXpAwHMiDMbG2P82Zjg3ZDvA6NMh2X75SGowG3sGuUz5",
  "key30": "3YotA6Mixrzw4NZFV8sKbuqmkaMtdHBqr3YSrngyH9ohDfRHc6ZQFdRptYwSmioSwLmxoPnkS8WrufxvqeyxuqXG"
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

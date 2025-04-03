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
    "3mnHR2MMWK4tPCAoJGoboH6n6VXoMwC8sMwFXKbCmfDGbiUgQC5Nv1Xh786hYS2xKysgBWY3ohsgTVvmbQSo2RZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xeQtWVM8mZzU8C6yCZpgRqLvDcC4zS9XnWjtaRD9KMdud7XGmTcucPGSSJUSioc9jGUCULNYsmGupMucgAp2q83",
  "key1": "2mme2TPMnyJkvB8xTPUqmYjF6318uM7exxVYEDzqDw1h6dq734e59GED4m7YWwXJDRfi5ZnprBdc6qbqoujj426p",
  "key2": "2JA2md4STML3pcebYQiE24wBQ3TEChq6UrkopRXZmmWP2h94YTTLw8Q6JU1g4i5H6n9FXerXcyeXXmfAVT1EpKb4",
  "key3": "54NE9GkabFjW7ieD6FVs45QeHqMcTGbAdFwPvVqSFcGFiPUr7Uc9zmx9Bi2mnpeHHWQJtHZvgbB1VBkBkTAafbaM",
  "key4": "5bpz24oKymWAtHqhkpD7wbMvJQ6D76aAAYXV4vdyefiJHbKgwiJowh7YTMLSVpWae1aFLA359v5rFQspPB4ozyYD",
  "key5": "pmKmMkxGAKZ5ejZY3Ai1Mm6923baeR6R1t8otnjiu3WLZ38pV6DYEbh8PoUhm2ZWMBHGhWET769aTVz8kfCiRua",
  "key6": "4QbfrVdUXZWpPNKiqz52SDpgd1bP6kTnd1i8oA1QTiW5tYFt2KwBcuK84g9AaTgrwADDr9qLF71hMwevZW4bDsv9",
  "key7": "4DazeAUQ7L7wA4nuLtYXAa78AMNCvJ9cR3mpRadrQJ8GXDYRSZppve6m1uPFoaTw7PQ3XHkJDLeedYdGNvouR7Ed",
  "key8": "3XFdi3ceAQP2BaYF6N8rmdGZP1PUdXqH36hKaqHduJMWa6PFD8e7GvvB9VmB2Q7zKRgYTuezSJHvrrxKdXwWkqZv",
  "key9": "2f1TaiVnqtyfjF8oaA9v8eSCyJwoQ9xLjnVT2iwpFM8UuAyavFJV4tmJ9B6xzPpfN14gjw1dssFgsmb7YGkBS4j8",
  "key10": "2sw1PRpJwATqUV88UuK9rFxPuwgBSbN92En1apJF2E5H5B7ZmxVXEDFpPWkZdSRP4g4rQftq2Yh4rfrWvvegkKPe",
  "key11": "51MnzBihdpaPD1AuPxZa4wW1EZTD6JnSMUVjM68xDD35bdp2QhaZsvorJGi7frQTw8q46q3pNvGfMCwsURhJReNi",
  "key12": "2otfTdPYF21aidq8ekKe828ksPj8zofeDcNz32ZqGDck3fExQgAUaDqqF2CjX9Fhn8PNuh2z332cXzdYUFbrYbVP",
  "key13": "3EFYEtiaAafVwyhCmPSBssDu5TbVm35sL8b94VGZPuqtQf2jgqH6qCEVqKu5xeUoEEfsHjPNCVcYwd7neUcSZ4vK",
  "key14": "5JRTdQyBtpUNjBTnpsJpkFWuTeVcg7j7hYh87R3SpuBKg3MdDfchno1Y28UL9Ciciy2YCKtkKgrit5FDkfzTk3Pr",
  "key15": "5rf9oxVneCWQgWj2n6ZUNdGyUDasZVt2hL2zTxzKLEsUNxwhWAfhmG1nStoTeNsDPdLs8xqoQVp5hLPYx5XpPgQo",
  "key16": "4GADdMErMzWNaY6EG142RsBQeFxBio31CZ67Q4LGaKFEvosHWZFoeRjSa7R2of6TFrC2mrgHsrfbM44XejWRzFBN",
  "key17": "474BrehFxs5XhTmSUs8KuKPtUs6sKpyBziBB4mXC4Pc5ysuJB3Xqzv1jotEtWzj5BhFQbxp3MoTt1zcwNyvsq6wa",
  "key18": "32ekASefiy2dZyP8MBdHiartCMxEQBpeTKNWPTVN1qWDF1Jfd6qioHTSX1jY494TxpLHjSpCrakhhiDjG3Q2SG85",
  "key19": "Ht4dY7DBCkHRRBCJv5gZkTDm32gRQWg4a5wcLXPF6pFKuMc8PYtG8CemszpWCcHAnaNfNBXiuMAf6chLAhftT61",
  "key20": "fJmHbPzuapDnGBRkzVDT3n4KoEbtEwMN7p6uq7RgQkhiWNzWA9URKD5JH47N1j2gVoLuo4WdcxUFESdHSC9HAq2",
  "key21": "4EQD6fjq3QqmRbF9freRtjb7ByTaadsJ2mT6F7E8bkPAvXw3BcvCWLCKFwBsb9YhjTsQpGvVmBgim9GXxBELZrMk",
  "key22": "5tVahEDGDFBzqFnAWDec6sNjULHerzRNEWxbyv1nXjKVgDHUZnqTHLZctg9y27fPdSGVMBxWj1AJrRHmnB9AeAGb",
  "key23": "2fhhyK7KqXFrQomqZ2egfPxyxtP18kjHAeXpbM3DWP6uY7w5bsNAGbXiGeQXhJNEP8rNcXStWgrAKaiSgCnMUXik",
  "key24": "5epvbi4YEAzsyv71Ri9vTDPZdh9B6qMct2zG6epVqyCvs9xBC7PQ7nXvXsfVLwQwMTHfRYkF8GChf1xtp7MU4kHb",
  "key25": "2bAqSg4udePH2A5rPiGGoo1hnw5vNpPGchZqn2xnUuqkviyUBEj7dV6AXCht9vroRQSoGxcSdFXKoFBeCLpXDKiz",
  "key26": "3HaN7i7Y5YLn5vypA1XxdHMhu6QrJaetWSehNpw5KiZjNuKvGhvpUXa5qhMkuG3QnEV7doDrTaUtxnARfQwfDwEF",
  "key27": "4bMimbNEvSK44c338wQZ9tHnZ23SrzuPyhjPhAdSg6zgRBS9z6o514BgzB1GsA6pc79H3hNzA8ruiUyHQCwYiyJa",
  "key28": "3F4DSiaTPFM2vq2qbV9X8YQeJJXq6hgmezrLM5PkwaBmdm4Jo8Z6NoFzrDzqRVbF9p2dBxZpLVitz6zPd5FkVGWs",
  "key29": "5hdhTyFrWTxnwHzrxe3PBAkrr3T9x3XsifB8mmhtTxU93uLm2Lm4dW5V76BQ6yZrUbsg1ZHKsndj827jDtkirobD",
  "key30": "5UHM8wKpQ7dKpVgmcsJpj8V6TTMVjz8iR48B9VS35w1CuBAXhx2yqcy7ydftxn5SgxqtgLHcHVp5mmUa7jY4Ze3n",
  "key31": "4nYBqC6boN1uTwZDYbBQaimuaAGxfcPACKtpi4SjMD4FmRUMD87jTBFfZCRU4rF7LxF62tgbqLds9UgKHmjaJs2h",
  "key32": "3wQMJpsvurfAuLgtnLrmuZGpaT5XUuWhbt9J7GTEr7qoH7NLqeKXewdxRoKpRnGnUyfqmtiJAT45NG22prnpEHeK",
  "key33": "3eRTrcw3aKc7uiuaZYzps78j7eS5KhPPKDnKDNCXYKshAPqdrTViYsjkjPhN3GxeYrk4Zt84jxwxofc4cXbQpRak"
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

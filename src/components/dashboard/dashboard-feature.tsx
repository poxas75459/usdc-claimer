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
    "2tkzCU457APTQF6ue1E4gHgqBpKpxEU3YZTL3zANkFph1FoHn6AA2exci2EYKXsYS3i68e6PEYQid9pgrjwSokb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vui4PN5e2bFfjxGSi2PM9Uh66cJhdbdeTwR5GuNdeNNpUXiRvGtHiFfc36PDNesErmq6FMvGbbC2rt18y6EFKpr",
  "key1": "rGKkf81fVDYmD9penV9m93bEiZNG2tGv2cQ26gt1g6bWUaD6cfizWv3iSZ5WLCWLfabgpE1Qo1YBe48Emd5XQzj",
  "key2": "2zaDAipJREwbcXe8sMAiGErWj3vXSFucmzTUtU3qz1QNkpVrHkxZQ9qNCREAAnjyzHfYB6S1NJc34sgQJ7CjBYgL",
  "key3": "58o4JPD19r6eLaYzgnLQtY7TKNQwA9HAaRu9MU7RpjPueDb2YGSc5fbhkiByXXGiJbHqK8C3Zi5XjpZDJAE1uX4w",
  "key4": "3CfxuEUzHpy1zwLxwhYUjN3HAqML74VgQAQDhHNZt2cLp1amAqocMpy1VLq4XqvFeqjT5dr6j3efMXdegr99EgEk",
  "key5": "5QNdz47SB81oG8CMSKfSqXsrxytXk9LnAVYvEtdBsG8q98W5kHLjrtjWAYKmmJjCXjxJhW5eBQcjXpySpcxuGiGv",
  "key6": "3oixkGrjTUXndG7wfvELmWnh1vJ3vx6Y3i34DxKZphcpcuXebRX1rh66MxoefSmTNsPsbPHDpJFjxdnY2uCxbgcj",
  "key7": "qESc5gSp2XvQtBRRT3osJCTKbrY7jTzj5pfFbMydCu7yBPYeDLvJ4ymNxbeQuisSg5kiTynXr6uPzH368vYxAEo",
  "key8": "5H5ZQFH89cWiCvPeg6gKkRpXtzyYWCz2nS1dLjqdTBEXLcv7xqrUYxzWLdYLCJxSTycnq3wzPTZakY2FGVE4eos7",
  "key9": "5kRW3pS2peyDtkqzsobKCG3QSJgGAfctjRxdJYfBwZdU9gtHFXNuFvGiQnqMfTvT97c1iHBRTcSM96E4wVLVFKWm",
  "key10": "2R6s1bDGcLcLACx7PdTeAyKwUPNf6CVSfH53ZKV469iPwTeUcNE8jqP48bKPWMFp18G2D9cZSUqHZu7oCgTGc77a",
  "key11": "38TPmhk8r8EKuWWR1NbydPgoH42TxTJjerP4MjJ2Bi7ABUjJ4ekkwqNdaGWvGjz9uSAbUnsEcmFiSnSHsKqY9Af3",
  "key12": "3sCkkqhYp67nBqZMnvuMThH3BkrowGB5QeNftJcBAUGoeW6Jgr95GUmxXos2CzjQXyF8496qWqv4UEuB3UCa3Q2n",
  "key13": "3V9FmhtkPLrXb9t1Bv7oHftKhZBJwNXY7EJHB8uv7C5BZngdqTTE9ruLGLHJHTxPwia9sKDGaasFm4uKiXWsoRNN",
  "key14": "38BZpGpxR2Ypak3ymNym1Umn3doSos9kSnXbmBnWBfk8bhz7bwvbQnQQ6ozLMUCYmxF2cKUE5TxRk6MXD7fyEnrt",
  "key15": "YGf7jzwtKiH18KLR5fXUQYi2cNSfH36PWeeWkKeUaBgGK1asKKaJCdYTMWsr5QzXZcdu5YGGyV7w6aC9drW6eSJ",
  "key16": "4SZN1Rbs4QqMNDxzbq62bWof9k4D5EKisANrLmzxUk96qLe6GqaRE7SS28bw9pfJ9oyEAEWy2dtXEYjcZ6RUkz2N",
  "key17": "3W1Up3xhJLkZZMKmAKQjpK6qLgqREpy2JbLe3fuPR5TNrk8kdov12ce9d7p8oUkPVNGeYR3ooMpdmicdXNQwC2Ly",
  "key18": "2FURWwAjcje9WFwdTf67Ut2yPNLxUenjyuk3NxSGA2U8qzbczumYmkXWVrBKfBX5giNQsDNXFHNfobCEXKntvd2h",
  "key19": "2sSK3yU9K5d2a9rcXPGCLP4PwXEHuwH4YwpXQKYmLcJd6uP8oXwPQyqTFWVZzrYVZowpStYXQe3Df47j4TPBDk1J",
  "key20": "G2msZjTqCCteT2C5E2w5ia1Tjz8fRgUmfm7xF5kRJiUUYow4znbpJuE28bYcrwhFV21mAnFP5v4knDUpgV3PK6y",
  "key21": "NQXjWmnFsg9uKTP5uW48Ma6xyLHrTRprbTVSRNQyZYXRmT1DWibx3dP6NQFDrq3bzv4ckaQrjew7b67WrXNZqkX",
  "key22": "5VC5PafaykYqfcYMQAhShvLsqpxQJnN7pipNWHGNRgC9tR7YVUh9vSQeB1UmrgdvP91vWtFNXrdQcRFuDLT8C7oz",
  "key23": "3fotVrKyGh59qYELH479WFzMTUbHC6KeXFDbKYkPYKNkbJc5qM5PyhgHRr1w9fw4MXGrkKEJdvz3njJYZ7GdcZtB",
  "key24": "P2yUtJ55FXTB6L21PjGwixdV4uyq8fPy2t1tSiiRwfdAG8pVt5BTNaRew7P42DFgXBP5sm2DT2QJrPM5TPLoxKf",
  "key25": "4Tn4RwAJRJSzLnz799PCuBFs6ZY3YjHcTTkFQKiHudjghtWo7BQg2qUnHwhWDBmh19TnCDT7tfEhxVEHBq48fcqG",
  "key26": "5pyobBPPfCD31PDXhJN6b79WS7mJzjB5heJYLc6NTj4jvUYH6ULPej5H4B7iDw5sucud5dQhRNc5J6zkKza21rCy",
  "key27": "5bBhXvc94cWzYe6YpNpUAaRoaca8AeAJXJ7eJBj5tCk5AVkRCPEvVh7TV4uFg4VcgNvLirBxjEjuoQ3pkCWvStis",
  "key28": "2ztTyCmVYCCsj53QrXznnkMxUjo4sGWxmu1oUx8bAynvQBBqUQmz4iEZyWqQ4pGrTJsdz58QGWQQBZudJjRQCv2u"
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

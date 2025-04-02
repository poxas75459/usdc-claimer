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
    "2difZTJaAqJEN49AKMj27D1BCpCkVR723NNTuv9dWqNgbCvKMZpb5KjMfSatEjEynAZmGnRCtCrVz2fV2uWoZBDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwJx29JTEAz1jeFNshNevtF1YREL7sKbkSwMrqWKeHqC8MxnF7tnB2Qu4Xv783GTyjwh6VvztQAphUZkdW4TLWh",
  "key1": "29DCPwTvuwX1VNLAgyEjq3z4qTBEepxLgtVy8LX6KhNuXwxNFrtoGnngXk23SaWAHv5S3KfqFz5jw1m68r5vwPeM",
  "key2": "4FCxHeZsiKfrHRmTBSngH1AfxEz4Pw7okAPAcptkpx9UwmUqFXacYtqbufZpJL4uCFRn1N5nXvCadgVSXcWjjhFP",
  "key3": "3QMZ8uR8nLEbkdpohKx9dck2rv6vmb7zdM5cyDKgjsxeXP7bR9qQamTGxYWEwJ3Z3nCzbqDS22UW1S9hSakgbwHG",
  "key4": "3SV7UXvCdFAxXLyjTvoPMtpwAVpFf9SPKhgWF95KBvV9xRBnLmbLTkqNmPnCku5ieEYaRhwzyNBTCbUG4bFjmTM6",
  "key5": "dHkj4zw1o1SKWDBjYQwebw1NhRmhjEvyuii6bxbYrTfvoczbhVXoeKUwo3A4BvQrVz3C46Bz6q1UdDnCTpLQxqb",
  "key6": "2eqeBkWgzLuRSJUtHEghXH55YnrsxSPVunig53oxAAMEpmN8DxiWHgu59Bp3o5fVRQq6gxQTbzKwRZZsAarsnKaf",
  "key7": "dXo6wUMGJJiYY8xUVj7gpoH1j4Z9KCAmxEBMj51WvNjE332rTGSYu6FiBSgfRryyDgML4ejuxhjpepD3Jk4NCkd",
  "key8": "3oCW1ttey143fBjDn8PvmASBc6VuzkCq3fc2qDLUDnVR5TDz5rSps4UybYDfDCpa3h62LpYAhBDAJtAnkwf8QAcq",
  "key9": "65v2XgxT8xY1yziPpXy4KV54aAg2uXSD61KmKSnN8FzsVdnsSZ6nJ4czSkujPqsbvpwTnv6hZYLoCCn4uUF9KqZQ",
  "key10": "2zXd1Zk2X73wFfLYYxvrvceKsmKfjUj4xQ7h5GZniREAtB19HQC4XKL3mJFGH2DxMZZhU8CsNG1qK9SSpkujCYdN",
  "key11": "4a7TWieHXzmPRw3AjugnEqwTNNkdBoxBL7x7PdU6zTt6TuqHbxXurn5dzWA1uKzfyV1aGpga76ntcAXMhg2oNXAw",
  "key12": "GjHJtSE98iqXpvfhsnpZfYX3wLcjVsr65VjdZTLQpDzZbsYtQBbf9gJXD6x3SQ6xSXyrnMxbXbMz1G2zoZVkkpd",
  "key13": "oo1GuSxRVCzzx3iC8GEkArfX1wjJZwyaS8E7zENneJh2n21C4GmTBgUvdSGwonKf2sSkSx2i4xdeBQHh6W1VYuT",
  "key14": "3YoVyrFpUUyPn19oXP8P6DCVdVevSiynAJ8TKmm7QFYmiz2FbFVKiZ8TbpA9UwptrEWYrifEbt9fLEqSCRctQyDE",
  "key15": "4M7nhDBVWXDxnMpxDyZbqaG2N7A5L4EKNSfZM5sJgrcA1dzkBCV1UMx1bSHaURMi3ANVcwwAxyNqwHmSaVoJFj6Z",
  "key16": "4fsi9ZTTg3JUu7YfhAsDUowBaTsDG4GaSa3xCWVMDnbS4iwvB5TmYhYnUBqBAqBvZwpLxDt5sKbsdvL4AjfWFZ1L",
  "key17": "4JcdPNw78nsLPsLuh79PJrvpbf3V3WQFjQAwfubqSRzyRoazLazRzXuRkuiBjaZJgxYVRx16F8BsnurU2E568uu4",
  "key18": "233nHor1QmCm4pCkj9Rc3JaRx7XpisMtvdNkxn8HK3S5oApJz9SRtKwKxAj1RMBpiRdRWfTTQub4uXPH6Giom6NJ",
  "key19": "4YAEqkLgKoEh2xPnfa7ZwgHLYg4cdPKXzaty1uoDBUhByjL8xPkESjAWp9pfXQQ52YUhdmXqAxD7ZxhYjTFQ2SPG",
  "key20": "59jJeW4WZv8RjHBKBqyVcSvc56C2hcRfgstcn8Ki8apvVsMDnDCVtdQdDxY5nr67vgCrMepAHiULSmgAvrPbfekr",
  "key21": "w91rqXRUwRPJd9StjyUFs6LJA11H5xUcsAbbxA1qozYyuFdaVNbKAWgnHHMyTEkcfTLSRaEG5oUc8QKDzXFecig",
  "key22": "4r4nXJiKsnBPA7f6D2osqyQ1KqsdzxkSpMwdfPLX4a5afbzJfavTcMYYDJXP3pDXrmPAPSDRY32ZVwxf7uk2tRBQ",
  "key23": "3otMcfPqmbQekSF9hCF8hZYNB3MuD6WE3wetHUFS5zUYcSt22YJPL7NVivbTAsBykaBgivCbbrPeHZk8rQ8Meijc",
  "key24": "xtckNt4Tpr2QWEfphw3FCmSJfonW8pKV6cN3Nk5CDaRpFi9qebsZ7zQKkM9MxL5xyoMFgQAPYDEY9cenxjp1ovp"
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

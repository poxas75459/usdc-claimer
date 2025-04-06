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
    "xx68MdogFvaJ4XFHZaYNy8Jbfd4WoQ8AqrvTvbcJ8qEyFKhQCAtcN8NuRF2Mf55jYeuHvPowFQzD4PVG12Ub1B8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63fLGNKkSVQwgQtQn5k43ienE7ySQxKJqwhKX1hP33vhDk5wL3oHPshNxT1aNo9iC7FWkZPmiUKe8ritLhMwgVUc",
  "key1": "2u2BTcx6WiH2cFE9XJAkE4XtX2QGAZyLnX1yQmJMegZnySfjX7eYnLuvkpVwpDCTM5gTdAksNpefgje7gBQLxAhE",
  "key2": "kgheUj8vEXsZfL52ojj8sWrmkqKJBJjdhfyvE7nET9wqt4CWmbinBTig2FmmNJbWzQRyw18aJnFoj6KFrikRf9L",
  "key3": "3CqcPN57eLZbDo8WSAyxQk8Fy9WsPasGdMrxuNN6goNKUx2fSN5EqQPhKfGX1z8P54ko8tHDCRKaqxCg4veHh7h6",
  "key4": "7yMoSCgeypTePT9n9jA4b7r2ZYFXD1ioUCjNMHuozkwNbVkun9FAHsmgNHXnvBV8FB35mZAkw6cEZ1ri8Mt4EqS",
  "key5": "3UP9XCKVUqT6pHmmYHktuDW3LevPoGN3UYJdGVMwJ2DPrs4iUEXYDsxrBxvYppvTw8bLMr4yEfxBLCmVJTiQ4s6E",
  "key6": "5rKU9XEBBuuEEaGCYi78oSipcjfn3rJkPETzfLH2SgELe4Rx6yJTgrKRcvrwrrkWtFfJGSrdCxG3S7YaTpJ17zGC",
  "key7": "3dtkMzadcFdtbyWoeGeBGcfDZnpxhYGV5GruHNtxnm9SvpzBYgjbmuccWpuHrfbav6Rp3q9T9HdxYqW6P6oA26yx",
  "key8": "4FZFoaCB5Q94LTxaTwWvSBmrEvtERxunq1gpRxEiiLq8Pb23Fiq8N1a4XAaJ4XARaSCSNuDHTv1ejumTtpkqWj6w",
  "key9": "4sKQ3Lof4NjbifF9X1NyY8xSfQxeLFUqn4zVD8XAzcQqiCK6H9gawvFhcQ4s1B7jYjoFY7JmBATWamVbwkdZ2Tb6",
  "key10": "2LBVET7DgcZEt8gfnh7mycKsRxMKFk43r2E1pPSuM4w2rAwCKPuGZ4G2sW88jBRY956a96DpKQk5Mcf1dxPoRQUj",
  "key11": "4Eg2KWWsaKnBoYVgFdijC6J5jia291GPSQAw2Eppu3fDmkn31VNiy9josAUu58WQsutf8XaPggCsY9XL1xcH7a7S",
  "key12": "3tkoBLwdu4viVK4hMj2PwkVVuXimYh274r5smmWm8vtiWtBhoKJmAHjKb4xhRAsUxFncKbmkZATPP2sYk78kcCgV",
  "key13": "3gM76REzEvx6c3uaQH3Zz5cNGemAB2C1TpHDEfX696D7rSKNsS77xBjGSdZQ77S1qxC9RK9hvtG5sHRuTZS2iRzk",
  "key14": "5YJQzm2TFVGsFEpXiLzmWWZdjuJvhBvrTWR4pKZ63n32pxCEhskiRWEGShY1EeDSSZmbH9cQh8njk9RgFUeP5a2U",
  "key15": "fqPu4PcUpNASvnbHV6WS8V7Hpj6ZgQGF7xf22XuBeEAWiGwBUhrQxkrv6ckFbUcJ6HzmptGZfXa5ARKNW2CYASB",
  "key16": "49nuK9uTDcNYC3VvW4SBPy6czTUqiDRYokz32Xg1x3XmANWLUzUEBb9fd1W6eHBU6xJAKZ69tso7cpq7FdoLAaWn",
  "key17": "4WKHZYkJtBL13yemqwawY9Jm54xTYur7Bcrjo7soSGw2v7WnR6qG6on9njBVBn7QJ4fDk3etzAwQvVyvMk1CoBQK",
  "key18": "5PhNsjpkERLc9375Fp9zomPppbqjLarB9fCJkSZT51nztFrEiirLiFvTDTrrLU56CcmaPQZVEPkyQAFc5fBTEngW",
  "key19": "2go6Eu2d7fLbDRGS6hSifEbVrZFDZkfsyfJf8ZueQQvcfYFvVmrxcaLNxrbPQHtxCBca1nteGYkhLCqwMmt7t6WR",
  "key20": "3s1Xr6gRpVy8ssEQyduT8P4Lr44iN19zwSh7aaP98v2NPaqestHEjKsokKnTAkkEwoFNUKXmRLoQ3BsAj6jTb2XS",
  "key21": "2vzfh8bwK86xfKeYnD8eZAyuYX1qh778F6nDhovHjZKp2XeuqBgq6CA1vTM1fU3ZUy9322oYbVY71cUCbfj3fwxW",
  "key22": "2UPXr21rAkypAg2di3a6Ukyai9URNkye6dBm1D1UqKXS2ExEf8JWmfs33HLnkZrVfgPHKjY9VYviUTKkUDF8jKjY",
  "key23": "5fgL3GdsTif9ftFB337zno9MjoWdeadPar15aE5DLgGMc2uaRnpfm6v34xT4oDFVJ8QDZdEtAwEQVteXK1muykhy",
  "key24": "3uqMkQXLpdFcfCHYSi8c22EpzmqNyckXjrbXEkQ56m7JvPrjVmB9pcPgkHCmtF84abZ4Fux6NH3SEpdwHC3ihQwB",
  "key25": "355PeUd9rfmjG76coRVFpM98JxvGy8EDE7YnXUu91T2EL4QNP6vdqoR7JSzmWBakiynGsVnDkkD5dVzpJE3AyhFq",
  "key26": "5ARsC4oShoVXtApy7yjtdAA7gveDgYUNKGtvkQUUQJvQKQMAUawh9hfcdze4Qx2zLVP8NZ2Tf6LySFZLEQN1J7eU",
  "key27": "4pTSDM3KXzRAMhCw5ien4C7oGEs4oXVMcc9qruMAGH2JHCateJxmPfKsVK8Sc4hShUV8dXWEN4GhwXTg7PtAY4ma"
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

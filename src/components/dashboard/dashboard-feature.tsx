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
    "4KtV4GkxYS9VSKAbZ9aJKis6idJfa3VajunrK2MDymgiFBqFDFVnz2jNtRFf8oSotTNh1yxgG8HzpqAS9f5iwCj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m5kb3EatswidqHkLCnLk5RkxXQGJE5SkQpudJr7FVf9PK64BQ7139qYph7f2VpS6JybTeaYCHQV1Ki9W2VLYETy",
  "key1": "NwuHxzmwB2w5JwZoH7MCbB8cqEMP4BaW2XeBgp4g8CcmT4yKmMWDKei1mmm3zXc9rUpDRdiTB3GR6vctNQVePjk",
  "key2": "e8r7wfvMh53AssPUTUt88NLGR7mL4h3vyb6yDH7v9wbS8wzbhN6vRWL5LGDPdiYKpfGGdEBW7HQfwbkcz5gprCw",
  "key3": "MbGUQdtxGvQdgUt6N39eNfuSbfDsRdSToTztkZfND5DVTbdryozs9CVdveuw4EQWPdjycCr9sxovPRASngrszeb",
  "key4": "4Rwy1ootwVR9Hr25et4p6q6LqMZ6qxs5gwG9KfwC1NjGjE2o1MSLbXgkFePyZdhiTW5TkWeCgJnXHGJoGpQzWPhi",
  "key5": "2gThTZqyBFsL6s2DGTEaVNMmM2Kfct9yfTMJNEU6wztTdAaSpMprf5yomDWfCkMv7ySD6uRp3RY5CKFsAWyRaXhr",
  "key6": "21TyoFqjy3vMAEQSycAvgrMkYj5bcT5XBttJsqvp999np4zhAjmXoiNcLADbwJEGjKoQ3t3PYfDCm1xZ4thBzuUP",
  "key7": "HN8rCZdcooZ1vsP6m9kb5jdMcTZc8ZbzhRHYm6KsGvXiZVkuQDARJd9DeznUnKBY1oMDR83MTv8GC5YQqgqcoRS",
  "key8": "4B9MhhTH6FfX77mo2fkFDrSqMw5JiDPmPgREYC3yohgJV5fGjiWtqMGt2iCnHLqftzGRQXZh2YNykpVjFtjK4eHp",
  "key9": "4zHVTJB7CAbsFZfghaY7zDLaUdfY9ZvRAsDaDM4aNwNM7EDvg2HTVRuVw5QedxGbgDUsWuwBLnTk6TqMbEbYN27N",
  "key10": "DaR1yftbNbUnGg3Uo9XuhQRSUJUu2cujTFCJ5J8MUnRW71HPCVeckB7iV3fzaES4Lna77Hsgye1ha9UgcyU7PiH",
  "key11": "216aQnqEjyFAx53iwSEy5rz6Z4HTvUmRrkxyByhkhcbVx9qSSkJxGWnxqoZQCvmWgXjCCE7q8mfyK9jQa9ychNfM",
  "key12": "3G3cYXzaY9ZkgmSYDNC36WKq1zwyb68JTWo9Wi48f4sTJMa4UGVMEiKjWgRdFqFEAqmhfSNyLcb1AfqoNEMWK6Yx",
  "key13": "FggighmS4rLCiGPVGpAk6xks19FmRx82yBwP2xLeiuMVKNW3p1M5yxsyiCMRNMPS3fBg7R57HhQ28CzkRgMfFKm",
  "key14": "5x3jUiGdRxvHmnsregEdW2bLMswMBrC7zMxa6JozXLX4q8pUBgtGCacctqkGU2i7qGyYYrNRx3vT9C1fMAmE5x39",
  "key15": "4kh3DVfiCRc527BwCV9h6xXMdZTC9x22RYgqsxKCPuty3TWJ4RQmnMfRxLv4o7uQNM6XvvWacjCkoXkH3NaRTYnf",
  "key16": "4LUKTKzmX2n7mNVE6BzeuMPgf2w1j7JXLCfceuQzTLyqkRCfG5hnVUL6KV6jj9fmdxQM8nCFS5jo7xVmBTD6gjw5",
  "key17": "54s4MSorU5JbLpZUfvuXyKHepBJhB8UHmGgfeP7jDL3pcfzyHESStKfPw7sJ6QSo2r136QCZZNCBqbmMNKVGpC2P",
  "key18": "5gaVarTy7E62RQCLxHntbLs8fFrm3viBmSvwxU755dYH5Zk6QU3XrbUtpSVevReut16pMRxkNzJ7SNhqBfH3hudr",
  "key19": "4bUstAnJQ2Z74ig4krpgPvJGto3r4kHNrkqWcoJiMYRAxnwYQTGR1b9J1uzHQp9KmfUULbt5wEvhuFojm9GU4YZX",
  "key20": "5YatyhCS79mzVQU9SxwtHvx81BtGnvEMRYhsNge5Sgb5bY8Yi5rW1ADRSAkTr9D2aHnhfjCRbkNW31W6kvWVDci3",
  "key21": "3j9h4FN2oi2Lt2utJX6gTioG6JArMn3zvojx6avg9eDNXfkZGWzDXLzWqReJTLDMYCioPMtJz2N2fPYzShcgrTLA",
  "key22": "5guShYxdTJWfXsrqsi1hceF4j3qeRP8Ch3niwkJb7TXZWDcEym9jvZ7CCpU1RL9YWtZh4LBTZzHLJpsZySpZWFZV",
  "key23": "3hiEkSJmYPKvcoA3e9R9GeMuBJZv2Motiwa9uxhecVb31f7A4eaFit7u5NW2SY5EHS6MD6Xc4ztrDEGdGWiPi9rf",
  "key24": "3jomS91irY2qVC27XKzXVymu3fankaCMZeFSeXXKVxbEZFe7NVpMhe377SP8gP3yaN1mLDHvaE79nLDDbVUE2f8u",
  "key25": "55g3C8qcdTpoaK728MeuKJ5z72vxxRSXwGdDsp1XDSovzquGYJYKoWpgRhS1xJXVy4T2jUqWYkiApbtGc5tV2rVx",
  "key26": "4rx7FTCkDxUsPsdXU9JBgmmGzdNRsaFAcg2nnvpDmW1ZiiUSBJEh5ZSZ4kkbUxJtXENEsNxRvtCMSb6YSYYT2hBh",
  "key27": "359Z6ZRFUv1BhjnB1HRRvCHrCAWyc5rnB7ugDWdnCMXmGFzDw35tXNorbithPMA4nDNHAYq1RQ5yGn9qRaSCxVg7",
  "key28": "4sMBR9iTrRo5K1Y5sVsjCmiPHihQj5LT4taEnVbHRRT4V9z7Tbg3Ka8b68Xa2EEkCCnbBaPLknhPZMQynyEe1TcT",
  "key29": "4ze8K9sVq3KzA9z65FiSh1pBTnDksLs6Mr91XZYvjnU1RkeQbZUTYaZM2aR5FpvqYBXxMLKbJDrbSo6y9K6qLekZ"
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

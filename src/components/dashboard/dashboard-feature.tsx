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
    "4DzUiy366u6MDbTVZniY9Tqc4JcCaXmz8JhhXTKG4TZSL5HGDiYNrKa5qvkzPRy8kT7zxyjevjnYWun5Zq1pJyG7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vdApnB5y8yWdo961Vop39ZGMHjX5doTZAxh8zpJDQ4Mhq9Rd44dW3V6wcd1aBmLouxVRHMe1krDmoLtRfVRdWZ6",
  "key1": "2Z9ihzT9pjptsHJrBiaz4gBggAwQqBWevqXFgJyxZk8qzsTsrXyEb5Gi3xb57nNc1ZZGZZBLdfgRt7kwXbg6tavV",
  "key2": "EckkFwTC5SKNzFtTBQFKU7bqjS2CqvK651FzQEeR1hUpXiGJsr8CZeg5jaVY1fqop4TSfXorLwj2BMqiCRX3Nux",
  "key3": "2QsVYNYcjoqZM3cpmW319YmUHXgPnzMw65gxycPa7Us6wcyv9ZeyWVxavKZUaviijYdki7u6FhmCGpLN39bQqPCK",
  "key4": "2YpwC7pRKCh8oj6XgLDUnfbsBfLQEKDvzwo8b7evHb4YrcqD7HNDLuHWrd1sjEEUrptGSjwJ1P1T822dRrvwte7P",
  "key5": "38VGtFdNip9AgtkE1V6S5jv13VptwaCPFswbTyBaRbeCRRzVtSC21gCFdd4VJ46LrapMrTYksqDrs9XgBB8Hgtj6",
  "key6": "N3LQgtFPeo7mWp3WnKw8EqVCqNiKRJUgLVDuV1kjmhuzJ3vnGsMWwJDCb6dQpg7Ztv6Bva76dZH1vMg72ovVo4G",
  "key7": "s7xTPxZiYGuq81QXCsHsYN1BesufogmNMmC7v8EjMkBvVtYKxhEYz7foGPXXt2tYwRGkR32WpUp3r8p2uhN23vh",
  "key8": "5dJxjwXyWzjWBRM4tR77Z46hM26aEqKCqwkCwkMSzG5ia4zNjMs8Zwr7Cvq31iCWwzJ34KmNnjEEmk799CYjnAr9",
  "key9": "2Yop8T9uhwnTAp88uHHoran8ebnX4AEUDsMiKG971TakRh854i4Aep8UQcqz1KzHaL67AyXK6KYrnFE88XDRLTaj",
  "key10": "3pmHkxoEzLmvwH7AGNxRg2K6Kf5yuQecX4LeLYjezqRJJrHbPrSzz4CUSUkbSVtErhPbE78ZQrsNRBwJqtyfuwCu",
  "key11": "5eV77SSSpXNU1BeWjq2gRBFJ8w4YbfGG3XXumxjD44PgZUH5abyEMnB6ukvgSUnRX6LjjGURjWFFDJoP1wVqMvnx",
  "key12": "4NQdzaM4Nwo1mii1svDyU9xbDeBKY2BeioDxVP51sfsgVHAU2d1MJNpakbf87gepw4BxDXngSRhZtofc5j7HKkAc",
  "key13": "2qXUeFywhu2edy9LqksJgyDYAAuYmW6nTFbDSFn92psdhDPYWEPaXnQks2p2Zh5gysam5hR9jUXg2AsopUDUh9uA",
  "key14": "3zLx7mUmg87pDn2NUi94jwAqtuaWQZJf7BDfDHrxPMZ4McwZUFkobEGaBVk5yeMXvhr9ozjx76wFzrCZnYu41NK2",
  "key15": "2J1nhEbu42W1VZ3mtao287SApisfNu7PyveNEY4kgyokqUhc3CsbiF8sc4Rhp8nf9U5QxPXEdGvZUdNAhBimDM8f",
  "key16": "CgnQ9XAVmHWwhPsGRCCbVtf1SW53SjCFJZ5B1dawaoTC5Basqfq3nEqZ1BS9LBSCpu9BqMRxxpqR5LgBZpWZLYR",
  "key17": "3VkUrG8awfTn5HoTDX6ffFjGeQs2mZtWZ3F1nBMVpXW9CzjwzYMhKb6zGfeWc7utub4qhJTiHrDera8ThnQy5p6K",
  "key18": "vNFcxkgFAxCVc3CH2z8YCopF3q82ykZSaeH3Gs9QSxsJY3WzEyUJfUZsZo4XW4rZoALNqshHXSVwfXWFcXfaZFE",
  "key19": "4aPLWu6oyrEfFdsbWUoa6ywFhC7jsJ8dAXWMJtq2nciVrZngeVcbfn13UJjdgL55gEj2dSke5cXHnh7F4D5kg4xQ",
  "key20": "511ie41EeMYXMMHFnwt8yKWZ9uFQrYeNHWVmCAPpSCGm3DPPT1ASJDcrNknRy7UaPaptCCrueCJvWGeVFWCnHGwP",
  "key21": "HqHRneQ7D27vhqvsfXP1LciHnzpLcoRmEhML9ZC1mmCaayYRCDQ6KRmhASnbfW2ZZdohqAPSnmcJjLuqoBdmRst",
  "key22": "JLgJABCqeDNNhwKjap6V9bDyq2m3RuCWBAfWkAoGiPTXMpfS7wwGupr5Dg31Aupqdrq2KT7KHJfmHwzz5tcMb3Z",
  "key23": "4mRTWqqwJ4JxnX7sVB7GQEqu2LKjQQBC5VvRF1TbBJX64w3SMCPkwGEAKQEkPkVDKfFjZ8FcAfk1aTQybd2UzsRy",
  "key24": "5QruW6QwosaW6VpnLJKvxHvDzZubPePSNG353iCCv3FMrn81qV7HjcFozPF8dv73oZzhD9x1SXFYpZcBrYBxBEw1",
  "key25": "yeT6AWkYsQdA41GVoDSVqEubQ2KZGvYxoA4sVpEC8uNy1hnTBFMBBcKuVZLprwVnM1q9spv6m76wAwRWJwsnRJj",
  "key26": "4NJhicD73jKgAJ8XQ9L6BVqxo6HQEALPRgDK9wpf5TKyWxqdX3xNp1vw3M2wHBgk5wN4pnXUWcRNEgtk12nxNPxA",
  "key27": "5jXMwv1pEa3HAWMnNURmCAUvYFHZVjv7nA1pqYFj66sGfuTVB9F6sEkYuMtaUHAemTg5jx8aWPaGxYWWZ5TCDvox",
  "key28": "49HcpBS4PcwKWUC2bvJrC5qzqa4AXRfamBLkGtJa6EQDzQdMKGNT91pcCf5JyAojUWU4zzZ3Nys9Ew6tsXyhB4sA",
  "key29": "4MjsRQG3TDJZ3RNmfkFuVwNDwzMYwpMfqmBA285jFoq3qTdykC1CEnFJufGJ51aFnG4hiegAd5w1i2JNhMWThH75",
  "key30": "5HTEUyEkSpzzaH3TfVF8rTncV4Z91zhzXGZ2isnpTkfPUwZQbt46oVBzG326LWKEmeqLstFE8iFd1n23xBTxQu4r",
  "key31": "3bmcwacW36RLbmQzPMrQKrrpGi3khN38EdFRQCjLYqEqiSSB6zkYHpJXVVpN2U6SrhqVTxPs6tkJYRDzNzsiupb7",
  "key32": "3DctWJNdqfnqpmR2n8q5NccrU47YEsVuWZGgwNwWWYihrvqyHvMcbyH4RuQ5nTRYFgLXHoDNFYo7Ye7WMbqk1n5d",
  "key33": "42iygoG9rPbVhjtz1ZWLtBD1Dedz5g6iv2csqdLZVr9QK8BSPRrdKXWi1EXmmxQopDutRDhEajPBQADRmwC6bWGo",
  "key34": "9tFGkPVKDgNvzx5QcSZJb2FAhHqfE9k4jsGvw8iXhiiqgkoKghXZJAzVt38rcRXVDehBHePKRf7JW7UhPZ2so9z",
  "key35": "5diiVpaWU9r3QMKTtfZ5Fsk9eDerdd5A4BqNSCCwKPLpkPXCDLLNrmkhjmWMZvnrL5Yqo5Kao7khqpVXyhrQtvUD",
  "key36": "46Uz45j5JqTiCELjoLTspue2Va8DLddC5J4DcUVLuCg2u4dVTAFsWchzSRyYcRWVyu5gBwiZu9cQ13rM7gNnDv69",
  "key37": "bb3GeiojNi7rKf74dViwbk1tRsmVsbA7rWruaDhcgyo83xyscBLrHA8ojGLrcTpkf5JC4YBqerWs4GnF9AbzvVE",
  "key38": "38bRKQoTgRmmQ83HbdnLeRxWr4Trf1Yx8SC1ruirXXaG7LmdUSBxNRU86FdnATHhhjG8VPDxwXhCt9DRQwVEMc4w",
  "key39": "U6SgSS24E9Y9gybsGJYCLmYQw1NeEzshi8HJvy42aZ3vV4hH1rb2kSj1Y8zrvbGfkehwkZHhSBXVG4g4zv2n6eE",
  "key40": "abXj9tDCBFW6s57G6cDiiWgCVFjpaTzXoAvASBjASKL7ApfzaZzoQwRexdjrw6afP27tAoQcNpUxfKBRhrJSMuE",
  "key41": "P8aH2n9i3SzUwPyCcY3o14YHcdHjPs3m5onssHsk5aPE1uD8SEnRthCEGrqwLSj2dbqbpzKRmhQbct4DoYBcLh7",
  "key42": "2RWa2ccN1rcFFVdcBNU5wic3KQsytW77XBYSZiWXt91rhrEV7SSYPXepkz2c8C7fPtm153USCqYhW1Cbqm9W9Ei2",
  "key43": "2LJLjxdJZTeBZbRaszr9a3HuFpKUxtNa7Qaw1ua58JtD8ZApEvArxDpeVdpVVch19E196fJAauzenRmMhUH9EjHB"
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

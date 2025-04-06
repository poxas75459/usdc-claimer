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
    "4zZ8bC77ZLAGZsrYv4ZzQkXWqifmk1aub5wSRFBkGwN4syVrFYedNW3GF1RUAuMwkwBrP5hXi8VyxcuLj2Bka3Lp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mWWU4NmPrKrRMUHk8vEaUuyHcYmq2YjWuxdFqRBM1gTGYQHJrGy51W73W3Px6sTPqawn38uzewpV1uvtfNiiya",
  "key1": "4YfuDueHcqxxCHQpJ3ewbhguLHYoeduF4Py1evcxZyfxjLhMaoPWf1PrrSsr6iW2Exrr4BgRhYV62qzmWeVCTHtu",
  "key2": "2bbWV9HHYW7scrsywwB7RtXGVcrmicSTqVex2PGkcEp9xGCcYWHnPh3vMCo9r1wEJv1eZSW6HiXeFi31GJXsL5dW",
  "key3": "53dz1K5RvemRb7MSifDzRSqN7Ln2KBgEuSbBAgfrRsfYAjGAvNQ59aZyJgAZVfodYmkpbutkbXEggaddaVP8eJ8c",
  "key4": "qKKr3CTjszoN7TBzdh2pZ1LQyeT3uhofNspo7pxiKGosFj9SHd6WKJLTJrMjLSQ6SCQEEfzA9u2S8RHYgC7W7n5",
  "key5": "4LWX9UZDVyCN3rWqYhTVePAuZBLHgrepu39HgzyYL1TWy6vseL5sCvKWGkHw2c29rWaCpzwPsA48irzauiyxeJV9",
  "key6": "5yvcmUoYwWnSsuR2eDPa9eT3KFW1RJJ5XkB88qZ6LQq3xyUuYfFM5pwhbwgtU2qzKV9beRWiRkNF8S16z6zahC2s",
  "key7": "5KTJqy7k9CPthETJfuDaazTRQiVvnzSWZjLVJZZUjrwwEKi47ewUbxf9kwPQc5mucBmoNg2dBqwgzHQQZN4ECRwQ",
  "key8": "4XVtz2JDCyWMsNuAoaxk226qsbxnTeDc8v2wto7WANA13d2ugkfjxZkm5AS38bQZrmDRyoiunnLc3aSdWzwBq9ux",
  "key9": "32ihq3vgnZxeWhU8NaYr1GeoxzP7NYcQ1w22Tf28MmfVLXYtVEPNBXGFEuwFU2y6w3E8u3PvPxPN4pi1NpndYEgM",
  "key10": "5gtQ4rf2mjUPRj2CNGWrNXNJ46kjPdpp5hdu1GRqyZfSqagMFP9j88msniYf4fTZ1xRKWuhCH2Cs541EP8sxea6h",
  "key11": "3862kcCW1vx8JVZCRtdV3XCccvrtUK6QNR9VLaQSkHZniF3CEdKLgfBwmM4XNaSxE2TCzzEAQCpm5Fi8ozRTvv71",
  "key12": "5radAX5qHL9M9ev88jXseULBWD2XfQ8xbTxRuXfZdzA1CHYYmGHtbj5F3udiDxzNKZqtCpt2skpffvPDasYXQ45n",
  "key13": "3GFd4mYPxHCJ47gC9DaXDj7QF93eB2dCtfii1Any2Pknah4Qjq8z6TiKnt2ivT4Tq2ZbcmqSCkzJnsDj4TRhqWoj",
  "key14": "UEFN4sD7ZAxBSf6eWaiL2E2BKLzbGKN2GGunysonat59m7MXTeQCVNJZe2baCkY66irXD8EhytDs2ZroZwtnnrS",
  "key15": "2YXsS2T3Cjw4MLgA3TjqcPfZgVBbYS1zkKsQh6UZP1omw7x3mMWuhDoa1RgdYJnDQ17FytXqr6nR2xnRscaNMgrQ",
  "key16": "2tVV7rz38VqbRFXDVP7t2xwUrvPRwqnPe7WGSaRA1M6vdvzrNZRsDt5L41sNXoYPiUUnK3y9DVshqU3aVRU7vL5E",
  "key17": "3XhL4cqfvHzx3PVCqenDxhN5y4bh8vyrZ4c1ssbnKMQagQrU9BJsfLm3WvAnLBRT2NsZBS7ZewjShwqJd9DZs7mJ",
  "key18": "5rKYb6FhU2Dy27X3m7xLj1sGyqTafwGFszS1KZmNSSBB71i37sKfugoEoZ3q9bb9dmTghuUBDpGrgbNQM8NQRagJ",
  "key19": "4pJu1zJXkpgy7xTBKS6JZNR6vbvB4L2ceHS5LGBCvK8L65oe7tNMQ4S5FhU1asviNHu8y3cWomRpuFTvmWwWkcdr",
  "key20": "ZCo61izkDh93BNqtM3rt9JRHUNQ5GGgaAaHmiZc4ptukyMtA6GQWAon4C8Tea8M7QDVxu7kH4tu8sepMfEfvjv2",
  "key21": "TZGdTFeskhYzrKPwuH8vPBezgz1Y4QU2btsLumRjA46xsNGtiDQXm8YbHd5ndLAd4LdY9QDZjAyMEBSPCj4MTav",
  "key22": "37PwCX15NN8MKftJb6u89XKrXCsJbxsx1iA8P7efEM44Y2XTsTfu7D31zvrKsQaawT3MLFbMFPdoNGDkRazWHH68",
  "key23": "4rW7HRBSgRFapoSxKKy3v48h6Rox4A8TxcqtyFMrzvsnWVwzjMisFvXYbMxjJdE2uEEPSfEFg9QVM4atSPvJ4kkR",
  "key24": "4WDfEqaLMhuyzZJNfYkPe1y97QsbtWw3CfGJyiTD9Ai5zxPZZ2mUKa9Ng1wdBNPgs7PF2yApMtsJjtCuhdMcyn1F",
  "key25": "D2vQohFMEEpr8ifBerfqbzChcXvNoUsvrtPepfRkJ6NFqoPG9k1guufAqWoVe3YqBJsCBzxf1FvxVWS3Tr9PEJr",
  "key26": "63E3K16yVtxbUxbULYE8XuzuVToSi1pqvSrgXr2n6hwxWYXeEnjMCF9bMaahGXi8CfcFAw7TDQVGYqGm9wQH6qmd",
  "key27": "2p1XfdWvGfibz11fCxygCSJnkxJtRLL2VJFMMvFiJZJdZpt7R2xiP7a3nCdZJQecBzYn215e8bxaKTCFAxBrYvab",
  "key28": "QWFtHUx15opAz7WozMBgPRVMo3Ftqee3UskVgMjsw62mXTHBPwSGB9f2N8rgnosCWa9S7BfrtsgTAQzJyY5k7Bq",
  "key29": "3dyGg2hgemXnan9RS1uVyxmAfPwsQ8htPKjnPPHCoFtNPHHiBtwFVayqCmgKar3DYpEbvYUa7xRLNN33Pa39sSd4",
  "key30": "5damcMiCzGVhDrTJXa2bpDWwGjiTTQkjqSpupqyhC9qD3RDR5vfCR8jbB4HS4Ja3eaUQbV1SiQwi1VJgsTHQtwML",
  "key31": "4hmjXLzj54uEh4jZ8BSi33AvmynDVJsynnYjPwmTTAowd8ocbWo3XLAHptEiWyjTW5UNgNc1uYRHLsFDoWqCv7pZ",
  "key32": "5WATvdcabGckbYn8ZNmbLy7hksdcNoVr8Ru5GCapBdsynM1QAMu9yWX8fxcQWrsLXpYG5M35DwSnTcm6JNUDxNgj",
  "key33": "4DUBnyakWkKJSU6jUqMxmQJPArJZmafkgTERczs5P5Psuv3Xfj1ikJ9UbhxNJ83BgQ86cq2i5QEJDU7T1WbvzANr",
  "key34": "4wKi6yjVSVu9Mt1AmnAak2UiSUviCTfaP88TPDaJLCgfBXm2VJ2Mjzy7ek8NhdtsqXxJgfbXoikAShagsQRxFzfW",
  "key35": "5AFjHhzVT17hFQs8oH9WPHhJVzxwgwwWDeKYe2QVZTDYgmErNkeLMGy8Dw5RvaoUGY4QzHxtgKVHpuGhj8uu23JL",
  "key36": "53qJd94ypY1Hbidzf7xGuQ2ye9ZCuNWzh6hR4CnpL6gCW9YyRpR3fN3sdFaefjTMoSnmvXkYoPEKAcfdqDoV1gca",
  "key37": "2AXvF211vz4kMZrDCHoeXszB4Tu22knJ3PEgNsr1pkvgTg7cRGX6pEy9tr1dLEejPXmU3R3PWCwGG6qLZ2WJMicX",
  "key38": "3AFeCLXDKxhJ6a9fAbdAETW5dBS9nx8tVzFMsor5Uw4CKXv5ph3cS9z3RoPZsKpvAGeEr9YuBRB3KcPecWBZu5hG",
  "key39": "45zNcAjRxvLcpJC3nzzRoKDkH8NSLu2DVnA5UizNkwwwJyM8ZC3GhmfxgsRkwAuR25NDNHkvvhRN9Tgq4ngU8iLr",
  "key40": "2kHJ23gP5RyfQYSG6V2UsXxFRdu7bh1Z1V6w7cZQZyU8S2oCDAfLQc9wvoXYgDL1npRDTee7bSwSn91YSBFHrRuv",
  "key41": "rez3c26Z2TxHTF51JACffDvLGo6bFgpsSGQYgNAqd3bijv9SBmkPnuNFHRbGWkbp4jsfNKZwnZeA3RwK3t2E6dB",
  "key42": "hCsWDQenCCzbgUQWdCASag6UhvPqW4AKcnVEgui3pBLY1bHDDPtTmm6kpLRDrMBvPhB251YVjziSHVp4VUuLo3p",
  "key43": "5bQV8YdjVU34fCA61yFWNwWEqRfRxZbwbnW1BxPsV6yTszER5i125mmfwuUzXjPhPvvd3rge5Dq4JAFaC7R7j2dJ",
  "key44": "4Fsf5j1A3rT4dhoP2fTTVxtjUqMYnuzMZd63R5axeFM1DuPwW9CM1Bkt6eS4B1kfhpbCFyjLhS8Lvy39ozmDNZKg"
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

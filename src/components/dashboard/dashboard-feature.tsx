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
    "zRCaDc6L4xc17hvmVvJz5efcnMP1ynyDbFhjYhqr4SgwiBvG21Zu5UPJFdZCn6DyrZqds9AdS6fWV3FaBjJTMwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s5gXDyF6iPKpDEypF1RE8mZjEjWb5Lr3PLdbodgxPKtJ3aBJ1bT8fcNVsM1VSEx2XRwqjYJ1m67kYhspqCd5MHs",
  "key1": "5dLkJrw5BA4XejJB1Yw71oiHTgscwRuw14qP6NKd1cxJmJUGk5Go5VkK2bUeWWDYNRWngrnq9pb4mLrtkUZHF4dp",
  "key2": "3UsH5Bpy7EL5LinVd3aUJVVw6GcDTsHWgadZFDHNFqJfexL77S5GuJAvBWWD7thSQjzh61qLits8fVr2ri23PKSP",
  "key3": "qg7qtTbyhELn4JUV4SNjkqZePUe2BVHPAVUoFMv159X69egkBjJUFsXggam5tmvirBDUvNmry81gH3biTNf5qpF",
  "key4": "2fyQhERFta4tw97rLv6jpSLzdYAQu3Dy4ZWmM42JKReMDeco51hL9WzQDpLkxkj1oXyNJaMzNXn9HD8DfQyTHZ2q",
  "key5": "4iXjv9Jyr2xknaFZFAqPPgvZ69K7SnyA21CStheRQwsneZSKzotPMPNPMnNyqpVHqrqVnTFYixgZqFezvMMz2F4J",
  "key6": "Xbm38a9tEJN4DwK9yRuUcmTZJ2gca7GPGMsJgcCUMpPU6vR6QcJ1mq8UcxnqpC3pTe3jFH9QSDLFTt6YYahQ26K",
  "key7": "5B9faQuvgaW9SgNLeFhSv3XUG5MpUEehQ1ooxeGWhMHA7WTCM6ApRxP6dy2bjowwf3AckR95YeDUdP7zdyffy12t",
  "key8": "2QJsEtmFBD8pxAoifNT1yzXHfDYE7kd9Lueq9whw4LQbjs4qeMCn3szEin7Q1cVGYY6EDK3cNDhJ8wESYgNBgqJK",
  "key9": "2YP33mjCnKsnqW8jiBLeMC43arKjxs8BEQiLpUR6T3kKtUaywaBFSn6QgNgJvCmhBeef4gw1sefBKk4FvjAxVEFW",
  "key10": "4PHzb3qGEWrqWvtQ7nt8PriW5v2Q5YhK6h7SCcFwMuLjnEkAYQGtRAwJpwE9naDqEfso3cb2mNcWvQUeTzrZA1Ya",
  "key11": "2xTFp5NbsZjXZP7atpwArP6SLku47JZXTcXPiDinXNudYQVuTsZFwUEmKApSrQBdsjzKRroydh1YmySHt9CZ9yVq",
  "key12": "tfq4ifQSFZPgFndnVhCSa8ruqeQTAKeA2DgK8cJKPM5chDUKF1Qk7H7d4vmra7Nt2uwKA4yrqbjRro4VaTxD17H",
  "key13": "vo7NwxJCg2UfRr6BPpK62ch3Ls6C6yrNsDVAJDxLN7vxVCkZy567qTxnwfEE8Gi7iqy1Jic9McJpLtyjN6bLKm5",
  "key14": "57qAaPXPKDJ3iXpbHaDtQDBLu8A5W1f1hpcn1TszhCA11GHNu8XLJkSSztcfsMvwehLfb5ycQf1jvAYrLwchTPZZ",
  "key15": "2MS8wfg3uSymS4Tw5ABhq6dWzRCG9Saxtzjuzxzm7A3gzZQNQhaKU4qHdCAE9JanuXf8rrWKhkDzDmoPuSAhc1a1",
  "key16": "5LabDN6sDPtC6pdWgKoUvkeKYMd41EnduWxoj9cboECfio2m2NC86ZPVBYVhhCAfzKhnyXr3y4FdMb4EFFHqrtkL",
  "key17": "i98mVu1B6d6xut4pPNF1pzE7wP7mLWcN1PaqggnpTD4sp7NJtsbUTy8nigLXAcquduoVbvrdasfoXj7rSTL8LvY",
  "key18": "44DKL3WVLcyKGA56ZqYDs51jBeQLNNz8VBweNFg7iZHsdSH67ASDHzcoFvvraiyeN7WYhshcZPakomRbipS9gKhi",
  "key19": "2AB8vbQvnMnAQ4j7jWdV8LDRZbQfaAAXJAGoyt3kVwhqxZFVjoUmesFFHjGwo9hzVW6CxJoV2iygtwdQrfYNQtPi",
  "key20": "4QPGquKd6KzosVzNyCgmfKPg8cGQuyJ6yBu7oAS7xkN46FqjXHcJXuyvLubCLWWQDwLj3rFcwpFZiQXqxWNr4rwC",
  "key21": "2wZuoVLa8iDiAzdTQCjBVoQUXMZhwHak1DyFiDaiyViy2fYtC4gNeGr5Fb8v573ACoQjne5AyVp8WA3i3RX4ZHVh",
  "key22": "4G2JfSMQXUujJRDkJVFbsMFZWCPEf7YoL9FwPT5LVqBKyBb1XjQSGGtHhusFETUYuTfDmbiMu94Du74Cf7bT2Kho",
  "key23": "56GM6pHSc7aANX6q5xFh2oFGxWSgYsdT2Hm85U6Po1tCdkKzLudhetMm8hzS7PuHXK3kABTDEaCzXMbb6z1rdk5i",
  "key24": "5FGoVjbVQ79Qe24i9C83Wi2dst9HSGZcCPNTCHQSs7wLFoBDQT413JjoxPNfmUQry5oonEAS4r4WfYGDZ9fMzTr8",
  "key25": "5jNqmxD7Dvto3VEuiSVwnFVrXVU2paFGayFFgA1KRsJ8W6icjAhzeCfPWmYtf1fwP1AugA9u8LoYmDfnRPjhnyrM",
  "key26": "4vdDPUmiLmfB4N7FAZe2BZP5PB5eRBHGPpkuq2Yc2sR2GDyeaiRMbN39oJMXBpxyrVKxPA22n7KzdSwriJMHEyLX",
  "key27": "5rgt1dYE9D3aLKfqtyTXZoVNUe2X9jEYhUduiFxXEErTvLLJ552oSoKmN6WVL7eGauC1sd8x1ejKMmQU7aHEPK8L",
  "key28": "xQv5cHHP4cMPZ7q2kJ2SALbicFf8rwLFrexkeJ9LuQCk4smcXM5HfVvSTafEN3wY6VS9TazSyu4DTfpiZt7wuPy",
  "key29": "2jK9ba5JJREqzu6aBfL9C8Vy5Rv4dVzXgpxJPcMh4Ci6uAtXsjDpDXeHfirEbPWpiWHSFGPwEEQBNuN5zJEPDn7M",
  "key30": "4txBqwVPHdGd4k1qHfWSrGKECXJLbaStw62QhjgsgZHZpHB6yrUbJ4No5dQ9ae8omHqcHpdCLK3HjxQw7r8s1iUN",
  "key31": "5rBi8gfcL5SFcLsSxhZvzWpwNcGaHtrbpMYrojD27Q87dk2j5VU2BnMmpjDzEwBaLzVvYhvAW1bQXJv3Wp6zHYfX",
  "key32": "366ZuQ8g5DQR2kT77sW6cTM1EA9VVcc9xKLHZR2GZvy17g4WXuA3JgTWB1P5ePS6Lmfb58KGtDpAFfsWkFax1C8D",
  "key33": "8mcHN9Cvra9R8hdmxW4CpHHd9LgiWaCs2H8Cet45aKURvmR1oT96dBQqXWk1BfP9LBu5eJhWzh1VtCNt8ztZbB6",
  "key34": "5Z2nu9P3xFKWRFAMTUpenxszxaPt11m7qdULw7W7gKxRmiDsRprfPGLPbg18vKPKVq45YY8WHqmEGSvDNPUXfFiX",
  "key35": "5t6gX54V54ziBEDrWFpFgkxJVVicKYaCjTK6t6hDG7f52dyJ77PedurEX3zspoELwf8CHZzzgXSFG5EQLLHZDgnZ",
  "key36": "VkCmYr3ahmCeQYnWE4Qtui7AEx3t4EeK8mZSpb3N2vjRBWy3DsVBAsGnzpSuNUBhu1hN8mbFCnBM3qf5jzbTpoh",
  "key37": "4MzVcUTWj5NmmWsxEGGs7MFQ1gHW5eYrc7svER8f7czWafZZxyoizWd6uJrV7h1Qe4APMvq7WEEiiKGzCfJbTHRk",
  "key38": "228UycXUrsr5sFzwo76rNXgAuAcoHrNaLKAy3c8BBvFg2c8nmWYR7NLSwW4wtARe8wbJVid739iE7SW3TpshSPEE",
  "key39": "2zrcbUyqkygvfMRdvmWAm9YJPGaLNLF1fRtt7REmVto2SoLftCcCn79jTZ1dAyU8AkN4jARBfFgXqTreQcy6tkzZ",
  "key40": "4xgvoQEjsb2qTA78kujxZjc2HhYcLhr5DsbJiXyi5mPEYhG2gn74tSYyJbDcwce9QRotEQYiutxZUn6eNk9BhGmS",
  "key41": "4uXXj83d3hHDtpB7tPWgBpQCtxGJ5xBB2YCxBwbzoWd3AauFVASXKh5UPNrTszJAbhe8Cs6MkY8nzuZWg49E3vN4",
  "key42": "5LR7tTdX1A5xL1FxVk9G3HaSkMoVHg7WRf36UgrqaqHfNgmdHRmrpkGf6LVUsmxdjYKcPuZ9qBE5TKNnTFMT3tbH",
  "key43": "2y5robAnER7mzwpy5HsF8m5ezuG8XDmNdzdTE3havC5GfTYuGjT4pZMPfwESBmYG85gfrb3RJCt7Ld4DKCQ5w7Gx"
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

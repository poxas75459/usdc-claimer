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
    "2d2kCro72GGfDdbwSgfUQ3bkrzsbcWPdRXA4Pk9TJvUnkFubcjwASUY8UtV95LDY1iG8cUyx7rZARWPkMBdKvX5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h73GjwxALFPwa2y4DYNMUNZegzdZmmGcR5UXpY7h1hfd8eKHKNdErvXmEaV2JCq7EkLSfTfCoUDCwBcyuYKoufZ",
  "key1": "3ThRQZArUhjuuh26dw7ZW2EBJJXdDQz6gUEt3Lcn51ixxkae61nrEqauoTttKzKJs4X2EwawcZf3N3Y9NtGZ5P3c",
  "key2": "54Pd3bwV2AWcn5cip5QLrLMZQcop59kiFji6c1zsaNHCfmPc9ge9wgPwYPCPoDSNzWW8LJcZmyp19Wx8C5gYyUNP",
  "key3": "GpEqqiwux7hNqcBXqvpioy7C2QPVLRhA8KN3TFrRsq2S7KbAEsimqyNie74fvPdMfWveQtWttbPpCoAUebBuefi",
  "key4": "63aRm2d4d2HGmzPH5rWPb1gumwszziZfwTxvyv3ayiUUkmriotV9rDprwJAp5Ssr9gyMLL9knbtiWkCtFrpgBv1f",
  "key5": "ozCMbQpXDnjG4CEisLTHtSzppPzh2uFBiegLVAetw965onpq1yDj4joM3TxBaRjoqQ1PzdFGz48Z9WFXwBomkMA",
  "key6": "oE7RuQU4PEv9YNYAebNs6KiNiPwocL7hC55ZnWnWn3xRUF7KgfGtEBZKZfTGDrN5xNfDHDseehNRJHkrTSd4cV4",
  "key7": "ozn5GX1EtynSj9DLfXRHFnfD6EJfSJZ7duLs169H3A4KW51yVG1e5NJdeU7SaopDgdu11eW5bWhmiE4jXzzXDMb",
  "key8": "5M8t2yyzn2RLoW7pMFx1Wb6AJBN8cJfCMAnggxCDxWSP6yYZqSP3bvG9gfeJSsEzbxFufMXAwi6QCeUS4G2ptQmq",
  "key9": "4gfPEPtX59g5UL5my7AoqqttrM6sSwBciKT9iRtadhTqZYwjQ1X9gu7SkDG74ETR1JJ9L4fRyPWbFa9umscnYhuh",
  "key10": "DTTnLd8JKTwKbyZj6L58bnXFTmL1curkDkFeMrhZW4sRH4KbKw38yoh5TFJ9EhuokwbaTtD1V2tRYgHKtjnkQuJ",
  "key11": "25zqQyhDuyxRZmHx2b6WGBRobhRqv3ax5XHwDeSzBGLKWehYDPf4qeG7QTjXo8Hs19H6Yaqkw6YNQ7BPZLxLv8CY",
  "key12": "2XkZw41XByMHswaLoNKEZMoT5Pv8xVyvtsf6yujsSjfKSEFWoyPW1mf2QJdA34bKFk2bT453qiohiztqsz9HfHRi",
  "key13": "35MH9dm8mSqtjHpGqwxdG97mUiZwVTzWCcGurAbjwywHUNrMc7J7D8QT3oRjEEWQQGu9GzxUmWF8sybwGP7kSg5p",
  "key14": "YZ2rHCyp32rBQZ7Pt6mxSTe78eMF5b1A3eSjpwHCGTfDjhy9xDRRZMJevE7CC39hzgnNTDYQtJPwzMtADN51Tcp",
  "key15": "4VTiPhxozAYth2hUJ3Rjg8siCjoUbkqrYPybsmUmdMte6cRY3v2oc2Ns3A4EACrx1MR8oZgWvroEDLAigBUWQd1P",
  "key16": "57ci1nLfmU5MYMSJ7N2tJVY6E96B6etuMNijh88XAmzxPKLXBvBr238TQiXS6F5qv5BCxCxzKxv9tMxQxA3Kps9a",
  "key17": "5mVCSn7Fkm1D1mrTBykKVAjQk2JR9upZswTegiR15FmtUTYC1XE3jA3t5bRMKi5KDRSuWo64pvUyorMtnVwoAoah",
  "key18": "2E4VxpN6z2oceMQgoxMJPXZ2Gn5fuodfJB5oZYQzeymM6EvYxn1gHiUa2KKYX5dfqUud583yteCedUK4PPQWYkyj",
  "key19": "3ov3bHetnBFMWWLLY5n3PbNcZYVjT2j51YjmARf1FMXtCf9gEejnqGqKfwyDKQztumNpTMtEtsqPDT2xgpd4MhJY",
  "key20": "3mjwBhvLjHNbioKZyRiWwKi56suaSdQ6We4sTWW7ryrfai4qqtWVXtdCKS1RzcsqMXNct1Jgy3cnYGEKEesRD5b1",
  "key21": "4sBvim3dLgRrn4TQkHowfs14HxgB74LaQrxbr5YPeqFfmTWzsNC3V9doZ6xL8wg69mjb5pqgJFk3wkNNUouGBAhq",
  "key22": "56Uio5W4xZJHM4P7SfUGW3gUeM1LPfL3BRt6S2a6NsKyFZs3JoLxirwqupKanDkA9oQACaLXVEC2FSia39zEwYmD",
  "key23": "K5j8gfaM8rt3jr8kieR9hdgHRn5N2mpJ6fdHGvwPRRpnnkXrCiVRT7dzeugW8Lu1b5u3RhTXX34iBHKEpwH9eEg",
  "key24": "3cRhV7WxMLigK5rvtwj9PfHjK2iLgdmmSyKEizSfycavRxQeTKbnT8CAwr58SYFEFXa2pUMGtBbLRPBan1kiUEEC",
  "key25": "5aEbDNFoLHGTz8gmX46bA6q6WXKmnzaSFJ6tDMiXdcsAPNTzfAuJ8wLQrFQggjD4cb31kHu219J2JELgPrLT6aTC",
  "key26": "2jPNxN83HPja7AcCEkC3ax2tWddTcZZ88ioK1zp5NcSyTaCsHh7PWr484e8KsyE68Y3QzFN7nzEMkK9U9hhP1SVG",
  "key27": "tkBWySNehzny2LT8zb6G18yo1ukwdeASPEaU4onyo6qvEXGaTwAY2nySLRviS9DzvC9FEKEVT5WgE6DTcd57jZA",
  "key28": "94AzHgcxdpZDX7ZzZeD1igeq8rKiX2fW5amTAwRVshStYorg9aQraxaEbhhYQNj3ZovhaxHarvPQ6PDuaVm2sNw"
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

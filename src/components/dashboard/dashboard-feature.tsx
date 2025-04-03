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
    "5HqE1xTYUjPNsYgnCzbR5rgpgfBkNJmSfjjsW3uqZtALY6eYGMLk7B1xT9gCNMdLSMY5DkkgQEYkgBhakWkCd4yM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fvXvXUWaPaGAhJQ8Ekepw1fB2UXq1TUektuCtbnn7fYCw3Tx5CKBnTYHFqtwmGvgJKgRFG6axkTEwrcEYKq7iN",
  "key1": "3L8D2jHXuLKEFortcxnYSVUAEdpk4FStNpr8yT6yNCgj9ztsecSMusHUg5iYBb33CUghyRMAFxJWQ1musJ1TJMxr",
  "key2": "D9Vnen3RXaMCsXLRFr3PDjqdJCR7NZDXRt7gzCSaeJJ7gphFBNMxiMPXcc86DsCQ2svZLUkYqEbTF1wTRcWKpgM",
  "key3": "48eVm9LsoshtoLebeAY3RJ87Mw9yNgkoCsqFfRfrD9dAxz7jToYhzhFrZ3w8KWuxp46Gb8wow28dEnwhhDifJNhg",
  "key4": "34oU9LTpkfLF8nRvj5MJS6D2LmjKDUhr7Gg9TYvzDR4NVEQBJec3SQFfHndfuVZTZXxLF7fN4UvmCMAasS2mVGSo",
  "key5": "39puF4twMA2rNWoScDzvkBfUwPr19gKENcH9S7hwpv4tm6qSzRspoUHgqMw91EGswRGEjJhwzoi6LDaLfKVAw3rq",
  "key6": "2xwRkkVAKgd2beKMUYiNtFkoEFc1WR3Vw5JxAqeTjr9LZGFa53nA2XFdMgAqbLkYeJcwvDVv1zidRMY86D9azChj",
  "key7": "3r279YG589TD7ADJwzn2mV3WZC1CP5MKUY9H4oe5NcarnQV3HfiZC4yX3XQm2mQJU3TPdxSx9uwKkyC78WiceTuF",
  "key8": "46md732GjdSrsteZ2Ub6MFZvFQs4HaivnxQzZqV6aV2fSnsMNoSvjavjVobj8Sss7zQNdcEo7tm5vyrLjAu8EjMQ",
  "key9": "FRFser9k7DqEFW9SaTD37PGuj8V72CrMFe3TatbysCfYPWvoZ98ysiTETEBWxRM91MtAQD2rL1aJb3stjC3FfTR",
  "key10": "5Etu674YxjCT6GdBFoG9MnCCsqP7mMW45Dkuzsqfm27vMkFai1gK6xptEysZ9yCcpHtRXC6qEzkkbLT6H3MHR2As",
  "key11": "2XvyVZ1RnJvJMg2HxBhH4DBNpYWRuyExKSShvfronu9yxBx3v85nLyvuvX6NFZTETeZitNPViEUVeNwMyQQGPwGQ",
  "key12": "5AQHuyEURRWHsxXK9smc31o9tQ8UxgC7WFAABtGR2ankh3GzgF38g2zy97Uz3GyLmkY3Cgr55xmzVbchbgYsabwV",
  "key13": "iLkiZ1Kk8LJyM9L4A1VV7g4ChtCVfpbtSQZkzvLp7yjPGz32Uvn1kfKte6aJnQWdpbbZbknFDz4RnXXVYe3mk64",
  "key14": "4gBQmx6qFvMzLjUpfuZdewvcphUkc5VbBGXs33HG6WCVt2Z2B6CuT6xvfPyZuEsddXhhcrHdFNiJjYam5M244jnu",
  "key15": "9XojUrMUSVStaGrFa2spChSKFvNyeWidagLx9FhA13TSSLTYLJP2istrG1uqRQ6ji6pNibBGWsTWSdeP7iJhq2C",
  "key16": "38NYPqEFQFFtJ1mtdix2gjW19BpHagn1zXb6Bs94WCnzaHPYcKhuw5aeyLAC2k94GYfSzG3d1zTGJt7AwvqAMwpX",
  "key17": "2e9ZvzHQbmxnwGgk7q2fJsAHvqGWs9PaKRkN7QRFdi1QJ715weQvmwCLiXXMdnGLfRik15LRzNZvfAnKd3S41LPz",
  "key18": "4LYCGfiznJf5amouBZte6wR2VFkbtg3sqTbqAuPpa8WVKtHZnWHo4k4S2h2mgUsggnRxUZBkqefHcTBBqSvSzRes",
  "key19": "3GJeUaEzDnmPeHV4MJL7N66x8SgjPAR58sN5FwvcPcPPb3G2daxZtnJH8RMWQN8nf93UMsqYzTwtxcGFSHftGnSh",
  "key20": "2WCNMD2NgNsC1cuGsZ56cqb7d2FnYoXbGZ5UuigLDvFPbdecbpsWpSxXHVT25eyz5GwPyBkxy3W3Jn467jinKPga",
  "key21": "4Pu7thLUu3Gp5ksWiv3dvftytYGHtsC1RwZ4vPvYQnNQLaHJRKgkHFRJ23EHsqDrkJHfzEQoJLA4UqMhEocsMLuc",
  "key22": "4jHaKsVcVEax5BvopdUkddXacEYTRGbaWDT6iSoWzYwpjNzqsSd7ZD8j94Kc9NK4YswbcMsrRBHPcELphfMAF4ok",
  "key23": "5mF4yUycYM2FrSyi2rthXdqBAHwkBgykSBdUYaCmuiinRspyTwa2Up7AfEuHYmvo1b71NPvXjfTHWtWQ4UpLEkqm",
  "key24": "4BiwvGHUtyoGsxNGkykmcnhCfckPGaeAAbydDcv8skiSNiYhNEuUfsvGvtAYSEYexYe8zSLVmutUmrML8DvoJjvi",
  "key25": "4mVgBVTpnLFWapffKWJ8KHXDU3Ny1LeJMwWUyFY9CYA7n9F4woYki6YHjHp3uk9aSRhVrB8BSH5yzfBMd4HiFhNk",
  "key26": "5xFWZv5qP4SjHzfxms8YxXWHWKN8UpMWAyiEsWotUzM5bPqnAC5KCjA5fthYZZ99cHshDXowtkmCSCL9yxA3hpFo",
  "key27": "2bANFbCNArKXHxXbHEppEoLCbcNQtmtgdXsDZwXZ3WZtjDb6A1jBnSiXyebR5iTvejQH8thJMFzsfpYciHL8KWSR",
  "key28": "2f2f44qAzvExMFwWnLYiP4h1CF4hwBQn9Dn5wUWEdgoa4233vr3iX5fVjqb16MJoik4BNPf6toYoVQpvG9os9uk3"
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

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
    "66v8S2tmFLTRCTQZDFXXP9TD99vhRKuYF7Pco6YyqrisPq261JtuQLQSEWggxbNBkM1CTavT9zFNDznVKbznWUZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PiDvLeSbYJtG9x7tp9RBzZi5Z11rrqB6N9qknDHzNW9YycNDmbJQCdd2SfdXrXV7vknuZk3TEM9r9oNLrfVd85s",
  "key1": "xeFAbueE5Xsn7a2ZR36SXpFUcCP4saH2g3Phiyauc4VidbcDEwYjA1kqrGv6zo4qToxE1jrTnJ3KEtSYLebHdX2",
  "key2": "418JhxgSCqXjmPiPkzmNCr4boPCbGG9GrCW7cxcFjfRHiWERfRyYS956uDfTbNyK1dPtH8QiDMQp8zZqq5TwuNV5",
  "key3": "4cq4gVLCHYKJRP5uF2GmrBcGbXVH4s5FVVZNJLeXe1XLo31dBS7ScJSezj3mRqQ6mDRhkYTRCNSqrEUdSVmZwSJ5",
  "key4": "5EbFmGJxU2JbeD1XH1jYykfcEJvPoznuTAu6rGnkVH38EmsFtzwrDETreDrzmXPR4rBqPrfNxYhnAqp1GKKTevMo",
  "key5": "2WfqD6Sricth3zwKWcM9cc4ETsctCLsS68ZPr7tJZAyaCTomd4mWhGUZHXEJBuKtEE3oW1G35zTTpdjf6VSix695",
  "key6": "3UtKmTQxYHs1ny4uSVPXhkcoPygsXMAUFU7hWVA7P2pCGbQ3ySxHesgSBD6nigNbd6DN7uC5um6ncdPJMNLd9wtx",
  "key7": "khQWj3LWJzbKURKUfsdHzWWe3ATNQ8QWz1pHBfFs1PWfKcfaPFsBX1kqFAZtVXTpiA8RPiGxjz1YP9T7SaFcVgv",
  "key8": "2Q6WQEL5zAmzsivj8ymT4kznr3Yogo6KWFfaEoERjNT96sBTNvGyAaZ9bThzAdnthATCy4xqhgtEUw6QBaCoaHMU",
  "key9": "3NJu4fxLZHSdW2ETn34VojQB7mHGs12s7vfgBYqWXRwRGCK5bNJxtWhtYtgKz8j8RNZQQUVB66XyWuZxEj7nD5Q4",
  "key10": "3t4tFKnDXekL1p1xjgn9LyejByupDTpt92jawGCejjkxUEFAxeQqCAKZWKTkPsw8NXPERqJ7EbBT25kT8oF3ezKp",
  "key11": "2Jw3jobUCDdHC2rajGio8JxT7xaDJmNH58BTgPEJzD1shhJXPfoAvVKEd78YFusXSmt5oZ6pHim7FQiAg61QN6U5",
  "key12": "5TiUpUh4unHMoVhMPH2JncVtA9imhbgtujTAAyHYUyuMUD8iNM7YsX4MRSMA6qU5fdL3szZRjtVdewjKoxJAQaLG",
  "key13": "1Rw27LzHbF6ZstbtFMvhyJ3UXX7xk8ocViUACNa7dG1Tcfp2uy7B6SQUJMsm3Dbz5rgtaQmT531CRN8sYTNFrMr",
  "key14": "oWUBauJaCUmY6G9ghUaNGyY7BbKcGxTmSqscfhFREgJAqxArpsjQdEJU1XPuiXWYtt5w6pxVMvJn76hx8kGWbfJ",
  "key15": "5wzLiFVD28ui1NhPUqqxk26vtEgRpVjYXdwgFKn1zjTcjTnBGef4xCUGiAJVv9GBPajruUf4LXRYxHgjVW4kxyJ8",
  "key16": "66JLzATy4TKAgB5GCDdtrdVmieiVRswfkcWmU1KCB8us2xx449ztmKHpY5uLLGcqx6joJmnXSeyBK3fzJBHZh5Zt",
  "key17": "5BzscCVVWYE6fMDHkmwPSKZfdUMfYN5u7aY3oXvNDV5TNMiV8iwmT99AdiPmd6s5HKD16ZRWWCYuoM48JQRhoM7u",
  "key18": "dVVmR4gUhCGms8FyHNmDeTs2U3XFGcWcfDrkMMApSVqNMiwy2N8uRGJocemh6ZWZ536QTKRGGEYqPTyqKw5NW2R",
  "key19": "3jmrJZBMpfN66pjwC9wU5GcQz1qb4H2gA7zC4QcfTHKKWF4JWY2dRgyFV94vvDN73dRctcovXzS8NDktUaUwjJn",
  "key20": "3zzi2X1tJ4EriK2EsyDnYBiNDLSPgnmu7C5TpseMwnaEDKPtJ8K2H3sxkj5ZJabhjDjXwLXr6Zd1CtNx9so6SvZW",
  "key21": "5tvWt3tNx1p2jWSNu1pgj2XWsyKMtrxsaN7tgRRfKExCNoG4RabSEeYMnMq9bJoqeRQnCu9xRgG3KeG3yhGzdSNS",
  "key22": "5Q9expQvkQfSrAwSZWsZvha4Abm4gZ3PobH7q1NJwoDhLpdsTo1n3xdwMpXC4Y2TG3pZ4Nadzg8oA3khgGwYvRGK",
  "key23": "2FMjNrXskaUvEovL3dUJ7T789r4yNqLAzQuXiVHnuGVZjRKSp6LaKkWLAu5ZjhrVqmazHYyNzBGahgrYpxZgVj2m",
  "key24": "dJ73v7sVrbU88eCftJkLkJPMxMbcYoGaEGrmyNAv5gPpypWHqW3EB53iATCkJY3aQVuSqf5i84UX6tmnj3b4Mz2",
  "key25": "66tJZBRb5HvZiE3hf74HUbjH78zH1fGMiZdcw7B7sr1Z91aDG9bpoZvbkEemuDLEsN2gyL4RD8Rc5GAUc2yP9mpR",
  "key26": "2r7fSGd57pVxmggV5f2E622CUTBjkFobsxzArjA8LmDKShSSWzxQ3qQ2aKQZ2xmFS6eomxDL4hCVyAxbnrgc5obV",
  "key27": "5SBKjVbxL6yGgyVdyxmRM1u1xb5uAhgAuAhFWTaYSQKGezWhyH3tDWoHW5NkGbYxRyGAuFvXU4duizt8dSMq4pyH",
  "key28": "59fe6nv1Hx3a5v3nvCqYHo3GYH6aWnc5b8MXcPKSYEH5W5ZT87hh59cWakMqbqmKcV36AEhH23Wnq3ntksUKGZE6",
  "key29": "3qz3D6dSwHevNejtHQrgSLLWu3ozhCiakETqGYzs3VVfxvPUrGsDWWDJP8UpcfqKMQqYBDULcKjuqfvsy9uvyaf2",
  "key30": "SrpjzM1xKF8w83BxAZg78Bi2YRFS5wrNPtGrJCyRavKZiUugu67hTXUnDurL9oezsneUsSH3pEFpVNzBMrSZrWV",
  "key31": "4eMq6NFWNwmRm5TeNbgJKj8DAUKkf7HCtfuumwAoL5dWcJeSbDRnnReYf51PTTSsNThc6No7VWm1KTv6qXt37JTs",
  "key32": "5LgPXF54xz869SoSFQQ3GwSiTUr7XFkQoxUySYxYevLZcN5mHLvXTwmDfDZRpHYBBb9Zqim8vV39VLyBHSQcjJ3d",
  "key33": "SVMCWUMGyZsVbbravYQ8fEdYSGuM79HnjCeBu3DE1hHiVcAm9FXTVruNBHjAG8cTMQTERcFP3o818UZTtWk29T9",
  "key34": "53xGDfwZBjoUeQv4JcVWRSWEZbQJzK2EnUUGLFnTKe7wFfGLTYwYx3A7QZzme6wZ1TJa88QGEKEmVARSWvKnSQjM",
  "key35": "s8aa4wEXFiw1PoAkuDyfMCoUTdHkfWThz33uxPehaBFQxLowxqsgicKDsAZu4NvpzNNicy6mpXLie7gt5BXXbX7",
  "key36": "4SXEoEXw5JTDpCDbb2BCFXtPpNjYzxvffkpNuX1HcgLT74ayCZW1k65vW2tCr7xFvdskAghRmwnaMWxgAhXcKLdk",
  "key37": "65BPssWDXhgE22xCsvMvvcd6jJF3Vw7Qwtdp6P3rhLq2ENJqepe7YUAMWcDCUnWsHJkfTEWPs2JSCrvWYnNWd8gM",
  "key38": "2deyDFD7MWWJoW87bt4cB2kGDY8dREVR5kwg4upCeR9mARi7HEBMJWAS3tQvQZXpSuEvcAk9eSqmS6Nqmh5Xymcs",
  "key39": "4CGjoZrzww17F6iT2xJx3xCXkrJNDXuLQyMJvpWTKAGQjp3ynTr7f4yaKYPu7AponjqHT8KnQ3SMbTG53M2Y1Sgj",
  "key40": "3YrC4MKmXKDuesTybG6gMCbMfyJyRpkim4StSW1kSnhGe2Ly8BzD9raYmL19DwJ8QfUgC94DJa2KVW674cEewvCN",
  "key41": "2My5qag78tAoAThuqN58WNtqz3Ru6jpW3uW5PX8SDKdGoGbrMyYedZ3BtjZ8zk9K4EJnMYP69YGPGk9czbLF9ccu",
  "key42": "2HAuiGLqcWFVSnbWH1SRr9jQDaU3iM4VxTew51nVArD7t4oco3nskWm1GgVdBumbcWidWhLpMs5TqqSu53ArhYMc",
  "key43": "2qENeAKnf97aboaVtbNWgr7J2xaPQyELuS7MYimEixgf6tWkzsShvj2f8bbnQmQ9pudXXa4gvUs6jnVPRLk6cw6k",
  "key44": "2jS8CQz5xjFd2LP5jvYojHJe9nJc2KFXGeT8ZAuHxEPAuXAdN1MqoP7nMNXA62UwkfApzMNYdCxAppBvC9SPaSzi"
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

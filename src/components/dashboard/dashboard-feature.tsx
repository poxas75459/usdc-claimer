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
    "4BfyKByW4Jz1RCcHxyMmKJxaAuKGwMCXjMy3qxtdybLE5KYTUwaXki7n7pX2rQM4z4qHxowLFtbs3aHkR74memLr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ot1PbwdrTZxVzLMFduqcSNDEpdrVA6AFKPV36JE5mEigsyfZ7jAq8rdxR8JVcvjDbzd5pPh11J5awKCrSSykeMj",
  "key1": "5XNaLmovEJHXHygfNUmqU4oPddfc9BGzxyQC886tdWJytM8CQK4AG4rmM59cyJbXgHH5MuFUPjiU7jHwFwfCdW4",
  "key2": "BHRWNHhokFuUet3EvnV8LXcLYeHioFikjfFLhMiGn9iZaTT3rVggj8uv3HFo2FAJ4UWvRDgaGLZNpeY6arWc3RB",
  "key3": "3aqkaUNqS4VHLmzYijGxqQHYQKpHZ1oUhK8dx7pWAy6vaoEeNv2mchBTY179wwRbs2QMBKSq95NX7xRBLsp63TTy",
  "key4": "4rbZ3CaT7SoqVDLjrRJQejMDD7UgAWoySpCQUX5J3He765k4165fB2Q2Wy5LFWgGSQ9Jb1DCp7J8Dpo3FcWJpgCn",
  "key5": "3veGE51k2z3ogsPXfvbQzxXcCLHaN9Y2otKpS4QaY3rhybfqZ32idnKGTPvJg7EUkD6MLt8qpi7CYDBJRywm4xg8",
  "key6": "3ppLU2EF3Pb846oP5QN8gyLNv13P5mjbvq9v42PixSuXuk7Yjg7V1ogzWXBdXgbS3FigeHWgmM8bZBu6HkNAFXw2",
  "key7": "5mkM4EFGTqTcRNbFfNgcAYVBt8mLJk5MhTVZ8mFUp7yfLMxDV9VxUxNi5S1bDyXHWiUD4ayVSaV3e1Ja3gmVjAvL",
  "key8": "pGBH87NsaqWYTbeMvvhARjfHBqWQzXVpeuCZctRtVnhpKst53RW6aZg72qXXBYqKikxSUuGKR1nwn5FHyjfirrY",
  "key9": "eUDCA863iLnhGh1RTwBNPVwpCrpTpaKEWbZKUhfkriQ3EujfALtQptxiWFbQwqguPgBW8owAEAXqahsoKhh4BtY",
  "key10": "25CpuSqRiowbvYQuPQhLxo8vZtCeD6rvDrjUBN5Ec9jE2yY3ewh1Fqg6cPTtAbhJtWKrGstTM1LTVtncwqrLPwbm",
  "key11": "53swRnMDkfhnv5VtcERQoeckyFbu23sdu9qsfUx43jZFrMXopxzKEbDaoGzooCJDTewikHA2DZniJVxpzNajDhix",
  "key12": "4Q7ngcaM6EVd76BFLiWdCx4Mow28aBtx5hy1kZyTpB6p9qQsMitSTf5wfzjQrGUpwbsE17sWCBekVNuay2Ej2cW4",
  "key13": "5YJCjo4q64dx97fN59dhB8EDdJrR2kMiaHRewVjEKaRHo3k2dqPbra3Aax7RVefNqU76EP7K3k8tjDP7488uX1TZ",
  "key14": "62UigQy9DdzVueL1G9gEbA8KaBPdNzQ4GKrRdTsz84NpiuL7kQQpipsHpsRf2TUyc16htp9mw2jvzJ5iot7kG6YM",
  "key15": "4vVzQT6rE7ic3TzBF8izzDzzaHw3kPmj7DxmEFLGbX9NqyS9LipSXfJvdFRgSUfpjvHsUU7bU74t7rUzfDK5dupk",
  "key16": "3CCApFH8iZmNEg5mthwxVNPuzBwDprr9UiMpmUfVmveAhQGcu6cJeGbm9BMBJaSg3K4AdnDFHvAmhi76NAXYR6kq",
  "key17": "nhBqNiz2WSHJNo9p8dr6mBwzYikWzx4Tk4WQfhXAo1jJYNdapu4LkEBMXd5CtETK3CNi5NVew1Mji77UPVpDWYA",
  "key18": "5kz6ScQUzdyhVD6AJrG66E6gq5zoLFWZ82FdooRCV59eSNKnNTENZQRNEckHQB9Mpv5mkaQVTBPWRWsQcKAnmmkK",
  "key19": "3WNA6zmB2EZDHtw17rFJZkdtDxfYp3CE4JCPysK8EbnCUWdcxDkXeVraQ9Mke38H2XqBW5irER4WDpuFbHCNpgga",
  "key20": "59ikRj1ZKkV9PEyghjdHokzd8sZsxY67Qe8iE7MJSfwoCDnPzajdA7u4eD5ZGtXogHWugkM9mLCnBzEGRFBWkvDd",
  "key21": "3AspjnhKGstL9x2VvQWCz5LNKhyQhaf6ss2hVTJjWSmjai8H7ezMZPbN85ze2oT5PZ7jDM7hHDcRTX1Y5oJZT3Xf",
  "key22": "2K3fN4ZNVXAz4LV9CfbZRVXYfBFaANytttRJ9AVfWsSrEsgiPRa9CePMP5sxuNoPEnWAVZZNvAam9Z12YfGbHtAE",
  "key23": "imdbprwHE1hyeX6VAkNmzqJBjCANnhbtrqBJNCHkwxFvwuphCYfUaQ7fXnwg8ShJr6mVG1Fdy41yRCuXU9RkXn4",
  "key24": "5A4D2pTop9iuW6PmzS3qRptCbLPm8zgnFVrHRtm2VqQfyk2hSmNauPXL4oMXMNbdNA2QpVe5oaxX7GiE7cQ34vdk",
  "key25": "2EqkJJepUqa7ziCJGhkqxti34YzzqrgoSAkY6vqQ7GrMZhjUhuVQPPp9FCCPNrkD2K3UX3YjaDA1YtMx25jS7sUZ",
  "key26": "5msVSRk2k3kN59qQB2c98HMxqa2LhQtVeo4txFNgfEbyT3NPvy1FwGxdhUJFh2QZcFLuLmKn8eLmL2xGBeKmLa1Z",
  "key27": "2y82Rjiii4rHKB99nKWufLovMHBmS12zL1JxajM8WGVndaHJrob8u9y6ru5zVFYNVU9nYSXvyRsPyW25f1HP7HTc",
  "key28": "4xVTXhGAP2cT77sPZe5CxJWMg15FzmWBkdhQyArXHZy39gTbrEWkS6jchfbRwCgDDGryUoyjHtdsnbkZC9nW96au",
  "key29": "5rxAGqTMGVBH5zo3XcPFVUrJFMqZeJaSnG9TxwQB2RsbErniT9o1k9jX2yFAwHRJhk3kNY9Tad4fhGb7iYJPzdqJ",
  "key30": "2uT7uUVk7s6JCUgpyoqPPQGUddiFD1Y4RbP2nx5yVdA4bi1pF7aKC9utoS2eHNWE3k8MJNX8PNAa5Q7Y2fHW7coa",
  "key31": "5dUgs6aRpHr7TnPrsSP3yRUphiNgVtp5MZsK1cZL7g9DrSKxhmWemDVCn9qA5KL7W4ALogfv7ReHJqhVE6LM9Nju",
  "key32": "279wqb6QBzuhiBTqoUvCeubhD6YFsopLR5v6yZtJ4MgKZgYbHaiFCDxjv6cGzvRPMHsxQfveGgF6kLPBmP457CQ8",
  "key33": "4KZk3Hmy5GWBUBRh7h1E2ecpJKQXtuN4o7nWYEyowkfbvheDrXiBTvzSszP8WtA6jNEF1jHen2NdWNpk93vzmn7e",
  "key34": "58a2v7cbk9K4m4uMdvEfXEuPghWXFtDaVb4VJxGCfeBc2QY4zKAjP5hQdiMeUQQhBTVBHEEXfK6y3zR9p6mZ8LXf",
  "key35": "Lh5cFie1t1kVdtZJq8UdKExaznwPgmnazS67KyAQjF4wi92eFNW7tR6cL6Sc4vrKPzcAf91RptKH59apoizqxW6",
  "key36": "2RhGdVXVAYQcW68VT5SsdjTfsL7oWFYkKyyj4PetD4GSt25xHuEJbfaBKayfdNh469GPFKNHVPqvxhYttBBKqhu8",
  "key37": "jQyTL98hue91bsut7x7wVKfHJdNctAQAviz5Tnvt581CSdfcSzjD5M73K1LoPSw3hc4qCwrWAJChgWtQAqufTtd",
  "key38": "2Mws7adrxrCUMnKYLkQuXR8AsWA7utrP5JNnaxQrYUvBZby5pzdm1VcERP94DpZrRVrrjhReQnyQVzvEy8wg15EC",
  "key39": "4r6BcJ4LSW49EZS9YvbfFkNMgzWqi5QTxrS6wnc8v37oBAy2xWDig5PbCpXBwZbvqHqSgz31SWgSr6CWXywWCN22",
  "key40": "3ycvQ1bRRR5sCXeahWfBx1uWfFHiv1ymHPtxn7MuNXkYFrsgFMECA9c8s2F38U5tjnmUDpDNmdgeiZSJQMncT1b4",
  "key41": "2BFx1qoSi7EpwKJwAK5CjEYVCyTaGGyhef8m55PCGUw1YcmbmuzGRPnAoSKHmyrpMetC6fFKYryP7CUhWCUd1Vti",
  "key42": "NdrRorXFttfvYNPr6nNdX32RCyeyLWxAA66PTSymhBRAJ3RcEmz8cfH8Jr7gDxEgJUkAireBaEPkqmArgooFTeC",
  "key43": "5YqRdJj45LZQUVZumRNn9W2PZGSzFayZkY2QMvG8ema68ifHYGdpMkfpCumYVnWQSWKV6rsyUi3CaDtgi6Junsxg",
  "key44": "5UyjqyixP7MYfCGxyKonBXHQZ4DcjsBuYwgNH9j4Xba3i8n36VFjPAaNrsZ4AydxEUeGsbYMVvuFkCZodjxM5hWX",
  "key45": "4i3LtzZPCTJsUXekNp6nkimuoKnSPjYnPyon2K7aYUPGqABMZHWkbF6pE3yqiNYwmRn7okgQGJk6MLs8b65Ajq9C"
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

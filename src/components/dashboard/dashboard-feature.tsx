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
    "49v6sUHKS4ArMEYnGUKRcGR5ghsiif4phagUdzgRemgXKnvoAcumcp2sRcwCTXSbMLxbQWFR5iTJprujyLfJbYwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1BwLGUppQW9a12hwefWbTrUD6Vkt5UDC69fUzbcPxrSGMiC7UHG43KgycQfdKShr43VURoemuwDyHddadFuSUHv",
  "key1": "2zrqz95gGo4vxT29mwEh5taNPKFnz2JUHCkDxKmtZZTo2RQ8i36fptu9aRdtADKHrzzWd576kHFPDURWEf6VGUjr",
  "key2": "e2hG18nGbynRQbGGZkrUsC3xMyVXkE7xuMYYYeaydrvUK5x85tQQPPjJ2d4e3Zf4gpnU16osb3V6z9A81GhcAAi",
  "key3": "3F1ygcnMwuqZ3hpw6f1ZUUJVCLQ4CQyqCHh13kvy3hicgfJ7GcjZzSw1iMKctRyzmFdGuFph6tC86DuPSzTGsgsS",
  "key4": "5pcep4MNT3Eq98xm89jwbbRpk9heqLcx9M9q4six36edWm3YCVmHkHQFejkVFJhrTUr479JkbP9JR8oR1TngmZKx",
  "key5": "x4jPby94XeFajhJ4mZF4outRDxibrS19iZRMRn9fNeD2EiUbxXbUK8um93nuEEooRTjUWNJGyqUchmM1pLoUHvL",
  "key6": "LQCx3pu8gk47u6oxUThPtTL1TZiYFVQ5RR2xX44yteeAok8p25fBUxbA56xCfTs1EXiFKPCwpau17BAx98vh6QE",
  "key7": "3kkFGXdEkNeGuWYwjWPAaQRifgsgiUWnn51vtaTmL2aebsWXpsTF6RZtWahpit6L8cK62qwhzpXTBcKMcmPeWZHp",
  "key8": "53Co5NXpXEupXjhydZRr6SpitYAkpvnkkjCBduexGPtbEfTRsL4R3W5zLZ1o9LdMwEqtjRrjvPHeXCZuLwjfXuMD",
  "key9": "6n4cLbBHpWp42u9zMBDfJcR1FQUEoVTjbFhMKUCDUwPrPQZthAzZCQowKuqKnPBgmKSQu41ahypCfW3G8oJub5z",
  "key10": "4EbpRL3WQe5mnVo79z1XcSpaaZLC18nPm2xHUj4gyJVKpyeCV1AeVVrC8AFcZecovX7TKTPfjsz55HJcrABkHn5H",
  "key11": "2UUQqzoCGpX5TaoegKus3Z1xXsDp8nguBbajmeRzG5gtLLbcZydyNrtYmUjgjwDkgBw7SuCSqYqcoUfBUsT4yhcN",
  "key12": "m9PB8iyKCFjDJWE25DCQNiPX1HXTri35VAr2X7PHyaqGctZrBu2xuS1FVyburVKnmk5wwKVXHo4tLBqkbMUa4ty",
  "key13": "44DiY9Yzhe21XtcLvj8xKBdDnvEqMF94VQaR5Bmk1gAXxXrQirp96Hyf5cPnGT5weZ9o8G2SpHpr4JWL1gHoYNZq",
  "key14": "5AxtRXuLZMHcr2AMKSdzBLG8Jp4BzZ57GxVedUsCtHe41o58cH9e236zqbbughR33dQMbe6Q3RqUzmwEQL8hRGRL",
  "key15": "cSvbMZTQRKtyj6AVFts1g1fcvuVbohSprKDigQ1yXpeh3MWu8wdvmgEjtMPcUHDh6rxEt1CDLBLfhoVgi9RG81C",
  "key16": "43VTvVBtRcsFKAcWiLYhNmzFSUUuJn8x7jCDxTEUiaJDEE9Svh3inSM8pGBxFcM98AoqJiE2ZQ8LWThECY2ZSArq",
  "key17": "3MX87J6S3K8srRkbQDP3YbgG2y1RtEJxeUJV1dvXtSFyyoF8PV7NRJbjV6sb5x2bxQvED5dmPQ4RBKLRtpwDGUcs",
  "key18": "67GjPfKPk58kcegq58NXo1xki9GX6bL4sedzky4QkW9fa5RWj6rfnwnVbJQ4LiAin1zauBpxCpp8CKQB81vko7N9",
  "key19": "2v7QTo8bh3sRJxY5o4H6emKWXAPvQGzHnk5uenvkmpDVLvLzVNcG8WWgvVzU7W7noNNymapSgPta9S4PHNgpbbQL",
  "key20": "wHZKhvH13iWYnUcYJ96T1j6Mh6zhqQLDwrdsAYBD9AS1ow468ByPwssxCmeLCixMiAqPMutvdNkdSimWLfedEgs",
  "key21": "5UKqZ2zkypkG7djjdXeBHGPLjan91GsLyAYZs2wvmQMJvUBHtVHfYraBL4xhWzw9M2MtxekwgTzmNTJPCHYokgT1",
  "key22": "5Z8MVaYTzTqdBYw6zgaYvAcUXqebBPBr4TaDYut5xfSJL3aEWMSMKS8HcQyvTrPQprdrqnHQ7Cfm8XLgrPZnyZ1n",
  "key23": "56CnoGEJi9CoH7C89SmksbJJRofahgT81E4k8hZyPSCfS7yZCKCaJCR369uNUfdCzXzh12kgwiy19AwANNXD815E",
  "key24": "neGra6Ry2JnJgrP3g1c49VphfuD2SUXZ8L4dSLfRaEMbjhv6Nw6xaGmFdNhx7T3D15wyUcErEcnKyDZt4cCaTax"
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

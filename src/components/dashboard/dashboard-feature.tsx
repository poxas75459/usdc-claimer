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
    "4yFfNxFotLrfNeLufsRMQjGLKt35EtyCsRVGNPoDdbHcaFMuhYR7E4jUkF16mt2ETfBb2xvFHebUCGKJgRTL3Zmw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUHTzbXLbVWupqWMyWZ8tyTrgeeH8ZnqUnQYmyfU6MDxU5WJxNu6X8dVEPAt8UZejUwB9BhvWKdkHPgLFo39yaT",
  "key1": "HzJXLT9cMvs4JdPdRfkwGp5xtQ7Keaqnuk5FRUeMaouSVTYVmivfxWRGUAL6yfwZi6EtatqLpWZNcvdTn2W83Vu",
  "key2": "33dJKLFyhwcpx7JtxbyfcN74dFfBACZ8QWD2GivxEJg5Lc7wsVJMxLgnhjEQd7Co7hqbaFQqDdbWyxKb6rg8q7J5",
  "key3": "2yocu4bcGCPyUTRsfpFAGWQA4jZUQcFTt21nDHJUaxnoeMXksVmSHjYsw5GEVXR4FGczzULqX4c6i3heU1b42Ymp",
  "key4": "4XoCuWNVNhitEG8GnRcrkdrpWtBY7fbrU2oFXhcqU4CzuNo8NLve5meZbJyF5J2MnBSPABVm35NufXUPhQZQrx1G",
  "key5": "ygNp7rNTnKt68kAScZxiAEzZLnAYYfvR14dEX4zNJZdZheW67QHgVWhyJNatHMGnfWHq5WJVdWFoYPP6YPeJWUg",
  "key6": "uaor2sc834hdXGaosxfVe3HEzD699nbQEYExKFVqXegVxLCRz3mJzb6fEZe4Qx1Pnth9TXUWWrBBPR7nnDgW9j6",
  "key7": "3K9P13jraLF1wwwXYn6gwFL7LcXThDbB5xZgoPfyNRgKQ2DbintAC8m81ihoPRuBYpqyoUnPXMjapicSobhHx3vS",
  "key8": "3d5Js5gEMR5PHh3K4xPfLvQ21GkR3k5NZZhrdKhWPXigYeA3aQSvv5ibTRFPSmADyuh5mwTci4uYNVHzqG9zuU6",
  "key9": "qvg5mropXGqa9bGjY8oQaeXEC2CUG7GUX3HKE912VX5UTiLfQM1JH1iCVDmC2tLw95o7jqTarr62hQ8cJXifQy7",
  "key10": "3DbskzBk5YyDFgdTN7CPp7sswiRhFh9mQiTUCEE7e3AMtUMu5hcxeLkKupieWqBZM2DbXW9qg5X5XZMWmp3sWbvt",
  "key11": "fjb4KxtagUa62EN2PvQqDdKd83eq8UzrKDy3s6SrhbUhnEWPg3HzDEvsXa4ktfsdrYQc28ykH4dvuhAQA5Mn5t6",
  "key12": "5Uj11zMCW8HDZp1pjdT9L4B8r3nU6cEr3uN6uRUPUnRzfL8pbRgZ9jxuEottCC4e6NjDC9Qn7CtcbfKb4FeMYQS4",
  "key13": "iaJLqt56xBUp99F8PuTqkZDXbSHkJwFhB3r7dYTXKtACANhD5fqvBWiqoJNqfjzSVwSiSHTJ7EMpr1tU4NiWKYR",
  "key14": "39nkCh9dnLPF8E17Y5x4NGg2BMBAhbcwUSu3y1yRXJLKE8FcRjj75Y5sQ1tr6QoFNCM5yy6UyP2JtLATPL5H9h8z",
  "key15": "5EcycSLTgSMZtFbAZJTVp3EwNXrAMNHBbgmU1JUotum6pTpJPDKDJ1pFhDjkzJZQ147zRBVn8YMC1XMH1QHFeNxo",
  "key16": "2YjKAdW2f5KX1DpbAaGWitQfLbuwchgtNYwVwymSt8oRAV9ztCfth48BS5EFDBKticsDxyCJ3vtjGATxmuDthA9o",
  "key17": "4VhkhdcF6seJThCkbTW1J2cfWMAUgmSEzFPg1mBGuLK9bAwspPNBotwsTPEypuKcjzKrcAii5KFLy9o1e1N4ZZQP",
  "key18": "3ats9dbbZwyorjs4a2qmrg1gVJ6F3hVrgncXxMLDeyqGqmwqtCtqQh5YpNadkzRSVwwJpkmPtvZtFqWaKo9Dvtsz",
  "key19": "2SBbCq83JXmPMHRhEeRQdqCAaeC197qjSG8jrXmjfs9riNXWaQjNjk7VJ7M3nxDCRtkFL1a1mEdR7c2WzoF3TfQW",
  "key20": "4B3QTjdN8xLRwSHB4kDNN7DZVf9WnnQ1C9oHYz5fDqH7fTXCtXP8unwCwAGMpuaYbpLCZBrwLe8UpwoF5xUzH1Tb",
  "key21": "3PGYkmzcM1Voky9beAeZ2tZCpwZHQkcSnY6hV8z81KMEkKFEJYpSmzReqeHG9SjJGLkeA8PWjCKfyw8pWLYpWyg4",
  "key22": "3zmJZHn8LtdtUo8wGEkdEZSkK91TwqEX71dGiMZfsUuV5f2gU9WUFXB1MKY12ukzVbzXECiZuehxqZ9EG46HxTWW",
  "key23": "4HDYtcwzAZ5XxxdZMakwnC6aoh7s8F9Wv28Dw8iVEfdKCc5bKgGLGTSGBu84z9wfSUT8JVnoRHMMjfrnACy47wpW",
  "key24": "2GKMfeaAMgkQ2ensdvxarU2BeDokhfvUJ54P771fVT4k48i6BB1LwvJZEgfoNPh7nxhsHxWuebnaHEUkm6n8Rkcd",
  "key25": "4jXxdC26miFiatnyJomp1ookpzx5yTRBQNGSoARJ4FLkLzRDy4TbFSx4RNaUZwhL93abeKfV37zAJFSTiK5Jo8WQ",
  "key26": "YBAddv1GjJyixM9S6SW2nyWRSEtAZ2XSfuTz7VMXFC9BNQFydQyGSV4wSmMbHqc5joQstY8smRNqNJTsCtSh4i6"
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

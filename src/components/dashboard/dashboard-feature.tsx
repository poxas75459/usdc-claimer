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
    "2r9JTDTxnvEvGVgqyEGjfY3NSdJ2pcQbX9KRbFmTBJWi9xB171senJgWfHtyjkQqQ1bqDzziwkAyGiRvD3mf6nmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YFv5xbRGBDoXjcAvCX5PFbjQWabPPr2zxDC6z8Yg1AFVREDgJoE8Yogd4Ws41ptiENhFPci4JLgziar9C3h1WFw",
  "key1": "6KZwe9xoQeyhmPCy7BiemBKfH4xo6WaVLn2YzRjv8WAPeUboRqd29yfBBfojiAMbSdquhUh9jAMt26kPxndkHkW",
  "key2": "4UV5tzVpZji2jnRmsVNT5Nj2KFaWYCNarxHQWizaAMJ9Jn1PGFf6mDK2vyrEajTojuv5e3vNGcUcwFqBZYk7cNEk",
  "key3": "42PwCuY4fEMk728XVmP3YZmhzGcZqK4PhMPTKwS83NyhbGYwVk1gYXaSCrLQLDuYYyqKHGr2S9g4uVeGsMnb1sxc",
  "key4": "3L5L2Lq6Mn8yUMRkiH3cgycmqvLqxMatWTASipvXRBThp5Q4MTiM1v3Ra6sYn7X7rAWRuw6TQDMQpp8XzB1XjHP7",
  "key5": "4n45PXheA58a22toecWefdT74eroe8f1uCFwo5fBTuxDFAh3uxg5EXKzYcoBBJX6Gsj7HqKnTwayAkQXLueRvs8g",
  "key6": "CZ6jMT7BQcT1Lq7U8j6HWGXyFg7w5UBwn7mv1z16aUiFJc4Ro8DMtTXBWH5bvLvymD6TqyQ2MhxbDk68aGyXWv3",
  "key7": "27BAKxYnAUY8jRk1syziYfTsKY4jC58UtRyYSSCUxNEXgUw6tWZzz6oKFTrSJwxRgHamphkmGAZtk9Nzv8DqW1y5",
  "key8": "2XtrFgvo7pKvGga172dbx3iCLzR85idH79oZ9si5BQKtt9BQAiDkqYqnyhPiadAmTtTRSfsMCTSYYKdTszoG3HDb",
  "key9": "5SN1dkmN4vCyGd3ePFY3U92NeKE1JFSrLyksUCvoLfV9Hkr7KB9qBAnPTge16YbqWn81dt5U3qsjCY2QvMR6VpLd",
  "key10": "2kVtfi7H4EoUqsqYY8GxHdrviVfJDdRhv3fo5qiGvrTmToEuwLhm5tVqbRBgf6cWWENcbKNUJDras3t8ZVXnswMd",
  "key11": "516JvQBu4xLEjaeFMwu95nr5Y6Xmz8hdcHQsDK3GEsqSMPJ6Rd65F5jUeZKe3YPKX6YbPNxosxmF95BjetD7ywUY",
  "key12": "3Gy3o2f1TCeFNQmKVeBc5xcVGHeYX5RiGr15wwGcqXV3bcWT6rvG6iYVd3XmXebhTv2e2NVX3AiB2mXbzqrXegEB",
  "key13": "oRREv6c4z39Y1BvszJUN8pUt4EXoymKM8VZEJgANzJeqSeDFbgEZqK7q38NwDELYtLoQpYSjUHdcdAbE3Fz9drt",
  "key14": "2vdYWRHokKQ6SLaZZGozZZjs352XxVCYB2wAmPDdJ93QZ5p7LKzL8rYaWuVA5VAb6km9mL37W6qNLHipky7kHCkt",
  "key15": "5U9amSLL4QZti4ng6LhMKHj6ZjeuGqosB1BwBhL18uFXggP4pCiPis488QncCkoNcxggALoUgR9S973Vt7bN5vy8",
  "key16": "25LYuFd2xBjQiBP2U1981Psqaq6zXy6ZY1TXR6drEoGxLsczN6nmKPTSNBQpir3kLdmX9XrmmuBrhC9VeUKiisbd",
  "key17": "5AgFhkm8uCeWeSRS9bTmNpqvdWUiqAhSDDKU5UW3nz5BdjAV5g8JGj8SweVu6tyTUq6VGoynWbTiCtZNE9vFzmE5",
  "key18": "3Ly5Fe6iKPs74zkBmjrQq8reneoibD6qYko3qoesj3PSWYagG3bv93Etgx9ACjZsNxMJ7p5TecgpxvYdbznDNgsV",
  "key19": "2RuWRtMj2PvhrYK9gc83GxpyhKX1ZcsDZdcYuutkwPLBrgjG21eYzipdQkL9fxsSUm13e4gPd2QU9eR2W6HAGBtm",
  "key20": "5HUx9cez6JUhYDCh8DvMrxrXcdv8xe95EAAxW5yqdxLHMTKvucuqtXtnHq1Hv6edAYvTLz73rXvKc6kGCYyFibqd",
  "key21": "1fqqrCaDiDfh5URL3egTeYf8LfYJwBER356kw6NCuJ2v8hXv6AijcHeqaUSdzJqJ9uDqqhyYQ4Jf3zbLYZHvJMc",
  "key22": "2yn57rNcvioKguP91G6wbdmpt23ACxPS2ijsyCvywFgMy55UQLBuLFifEviuQRcxKTHRBBeRccMMqybM1y2V4RS7",
  "key23": "5RBHbowDxrUVTT5CJw3g4N4uV8wGpzRVB46DdLA6c72hAtiXdHKvSzdLzQAqp6VjZbzgWfpFM8M7qMSuNc2Wh7TH",
  "key24": "2tXoegNEuv8LBwWJvc1XqveU2wfT3VR6fj6fB9FKGvMhhb4TKg2m47AYpVcYq1ZvUJc1cSnGjteU8QtH366yvQRa",
  "key25": "5D7Us9oX7eJPbP378EXRZBfXxPEPwo3iyDvdPvgN5PTJDtrCpati4kCRZibbdXYbZAABTaYXzy9vmpkS5wS6Z1Q",
  "key26": "3hjxKThA3aRANwjCD9nYUnziMY8nhfHRc37ySdLaKNoDfQB9dhPKJfZaVS3hdYP1LcsvUVUieR2BTN9xHPw7gU98",
  "key27": "2Fnqbn9bXywCYt2BeA7pwk6VEnzw9BHoMVtR81kbzo5d4AMHxqWR9frzrSed8fKaywn7ytjCiX4KRMaMBC8U7fNa",
  "key28": "3Bzye12gQfcsZkKkLk2mhykxBnz9i9rdHwsyYseQt44uyv4TjmpRMkJR79iRR6kvpabYK8WZMUhdVmnzACgYYtNy",
  "key29": "3YXANHwFvixNBRDXd86qMw8dk2t3Qizxnv99FPKdhsJef2sS5UtQWD821Y5pEqzzo3Jx3X2D13pngg53cnQyGBPC"
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

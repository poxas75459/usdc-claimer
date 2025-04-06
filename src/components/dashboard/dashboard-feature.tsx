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
    "4cjoMeLeg1kpZBTdzZjRs3gQaGSqLQBSBrxUQ9VuWDLhdzQ6f7E17GRZfFenqg5pMSxctetWC3hFW29WWacnoRfe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKaf4w76Stm3cDUctPsn6qm99r65hbUvHVxBVBXdi7GGopfiAW8BNc1hq3LWgss44oWJ5fKt2R8Vud8p3jANRSR",
  "key1": "5LxGLTctVFiw5edDPdhxVGWkanquphsVJVbA5Ls8UHHXHw8JhLxPxo8ERtLDFagHDAsfKFY73E2fai2bF99HVUus",
  "key2": "4qWE37Z9RbHcjzhw1v96nVKHjv8Kj5hgZLkGn4ExFSowBj3yG6v9h4p1DFcb6hpUurut37X3Nq1ubfTf3MxUYyvh",
  "key3": "5tSMDy11XybTSeUyuW8phF5Xpp38JnKpvXz49yQiJ3wwcm48kHFyFf8H1FbCsK9NDMdzMxMhDMNnuAoAAiar9g58",
  "key4": "5oTpxN73mKgBcdAdFKxqELjECCCyZfYz42NLydCLaJv7Gp6ZtLDVdT1aqfUqUBExapX21iQE5qqLiNi9m5dZtxCS",
  "key5": "46GnYWMWeaetWCNX3nDa1bKzQu6GkJSAHPVNRePuyFX9M8ubUDmjaGUDAwuBwNjuo8tyVWWJZeHCBLKHn8BD3hNY",
  "key6": "7QGBNM3c9w27uvS2uaDZhQenPZiAc23TwVPMkbRtrbc6BJnLYpNEGfnSUpvCvT9xqtaeehgkttoUtkxDgZeyKJo",
  "key7": "HB8E2nMwiGeyMznGQ9xK1LRbxhuwnV8BnhFgTpcEgqEq4ocEXsRckaoQCaSDmoNVkQjhVF47nsHjBJCKGRv4kaM",
  "key8": "5oYn9c3dnGJDHREZnmkG5oa4JJpabduJDn5BGnr5VHpe7vEr1ZhovxNqU44kBiG5at3wHiX1NB4gfzfMJLKxrUS4",
  "key9": "5EZmtRqtfYFQQeJtgua5SyBR95DBcvUgo8A2pNTP52M3GFAcFY1moCc3BotGDAtKKMWwbJN3nDF3UD9vnbE1EQzP",
  "key10": "64AgPmcnmCRFBVFtTxEapxkMGX1nfvcsQWYowUCU77um3nMoPPADWvxGzX9AjkhYhSB6aSYxnAgtUvQH71X6NnSz",
  "key11": "HxVeaBmryyKvvE8zMbViYKwnG4AQPxJhoFP5td1DFg42mFwBUTR5hu7oWW5xthfSM9ZEaosoM4yESx6Wh81r1yn",
  "key12": "2SXtuHvicpgG4gWDyr9H5mZFyXwZezmfpUM2VYk7JmmufZQbXn3UYBoHPM8tsxvpRnBoLKmW91vo4A7PL2CC2HXc",
  "key13": "6UwVSa9c9DY19R9hzrirKAucXTiSuAAYChTCykkCAgADXcmWjPYHdaXAixkqTN96BKUWiYQCDSEuJLJgYSkRb9j",
  "key14": "mLMBfTu6JAE8LEZ9TFjiVWFENosVjNcUvKREbtmzK95QGNeacUCNamb646i7q1L8fWszXESJ8uoQEp6pGZ47DgA",
  "key15": "4zzRBmNhTPq36z6FqgdrzrgJfoz4MLuWEqxKfbzBUB3wqzG34bVuTHX11jMDC7Rf2epbAQpbEpqa4euJJndYK19S",
  "key16": "5EiKDo1Yyai4ayrr7qqYsNYNgqFxwoKD3SZsQnnTLtJx5XLeAQYwUozXoNvwFwAciZ2FzyS8jzxbpQGodA8b2Wz6",
  "key17": "2XgNfaK2DkAFU13v7cG81f3SeKrTMmwWTjQcU31cnf6MuFMTUVu23rnubv3WVhhf3TRCCtc3WiYMgtAQrhd9cpD6",
  "key18": "QCCrxcqph4EuhWYZntruvL2br7vvAjXE1XqneimMTRp8UkG81cV6MfxswWZ9jZBpcEB3HbDqv5JytaqjvzqHQzi",
  "key19": "xSc1iuX8FtnhNyxBzF7Gm4J9zLeqGryVFaMA7XcrXfGFchAwvnC8vVDCFfxTw3dKcndAy5GxQBfax3Mbizqux6t",
  "key20": "4SJddsQxB6eQShyDXM163u5snFZss29tYCw9x1LNDc2ECficXzC9dZujrw1MvmJz5nL87QJ9adYjSksaQh9yokg4",
  "key21": "3qreBjdoYjJduBHYNXC7GNBJFyF7ZjoH7eq5H5XbRMRvgp6pXoFHtxdwtMDpUMJuXVZ1Z5G6yirDsFnNpuczy36C",
  "key22": "4LUxsBjrt6W5gnoUSEbkaZYpovn4mnkKfBytBJgvuH1SbP4rq11oWEpJccCiaCBVu6d3t1LewrBrcFcBnkPK5oUh",
  "key23": "3yw78bGVf63X9521GfzVKVSUi1Vqf2ZbWS2N74sLasMd7xYFeUKgz9hpKEs4xihqnvuMZxDHnjjRWLfG6QQJH7H",
  "key24": "4UmRXbET4HUa5CnZAu8L2GaFpt2N5bquihvSWhGE8UDbfrcRZQv9kiqRnY6j6jAwe8SyGn3XYDw4hjoZ5c94TeoJ"
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

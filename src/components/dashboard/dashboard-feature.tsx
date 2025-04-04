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
    "W4oMhyDtqkw22hkQNtva5rCYEFEk4Cow5EGSf2pEbVyChFXDNaeFrPjABvnY3LPVHM4HUC3RKVtDTM13MH4jSFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HHsmHmtXJ5RNksZKebmzuTss1cfETGWhhpaPHS6ijHy5K314ojAfuw692b12xUSrrvsoWR2ANKtmXUGQwug11xX",
  "key1": "2kVVa7qNY91fxRtmQLW43eJxcEwKK4Ta3gBJPQy5EUhZoTZBWBHUbbd2mjcMjUbpb9Td2bBaHYa585GkCY1fCnvB",
  "key2": "36yEDZtLQiUzSA6A2BMDVjoxAMkGhNW3tbLB5QSVbrQjaqVxDnpXjaEPznShy5E7z3DsmVMmM6b2tBf9rC7wfGyk",
  "key3": "2EkuSwAhmcBnCyQjxS3S2Da6L2cjeqxthevPMBqYTWPZUMtsBoiBoxxUTJbb1rKQ9X8YkXTA7B8WL6y4vzDgW5Jf",
  "key4": "3s58xuwXYH5JQaBZ9tGu7U9R9e5wt4wnXkZWgtLcGErwZt2zvpdrrZ8hG9XxaDrUkA7kFPpN8xULRygvuKbNF1E1",
  "key5": "4ZvKqCH6JBSdH2TtcZ91nywBj8iKMAoGcBMZNPRq5dVaLBQbmdJk4bNbWSdR3v8uQrEzNsYvi9RLEFhSWKVZedV3",
  "key6": "4gsEGb9C1XF5FbftuGfP6r7EfwhMow5JGBc4bbtYWckgDAx7wACRJTRHirS4KZJByQMBBr89wVbfWmZ4ba6vThsh",
  "key7": "27SFqMRiLDSFW6HiXkYP7onzfujPJdHmmAvgxHZa482TdzKN7ycvcw2th2FUW667i4og4EicSawdB19si4DXbbrt",
  "key8": "3i74vQSJehsqCsxQcNZXLW78VfoqHWWGWUmynB6EnLYCBTuEXaSwXzxeL3U1wPfFaFSkuZ5TUEPqBREoMMfGR5of",
  "key9": "43egXrHxfAxTCiREJxBUgtbcPfS7exBfz5TPWSoNHLcmHd22prDrTni2GPCYpCKBhVi8vTJYTVHBifX5GaArBno4",
  "key10": "fPY3XG7wEnKmvu3gWKXaPZjQPouCSTZyjKYruzH6CHiV8bDy2Nh1DjfuSob7D3cX338ovMFbqsURhtc3zYMfsrd",
  "key11": "2je5NZpxrSJ39MF1JMXCgUWAGf4DXvBAzEiv7KtsvXQXC3A9sy5zxwnuNPe6YLceQEHPzRmRfP3oY148WETYcWt",
  "key12": "H7pL7ai2KuZmAGP5WoAbwamDALXXm8dNK9psovWuAX5gSHDTLiePrTnZG2FJSTcb8HU3FPxDvejmrEnJ3PdohFF",
  "key13": "5ZcLGP6XjHcb6rpXszkqyZaeoGQr2scx8uutPgoyxZchtnf8t177Ryi6Th7HmscCGLp4UjikZvRX5bvKWy9BvTgg",
  "key14": "3VD31UNrYFiS3B4eJkpRV6VfVLAJRd26fYULCJ5HEBKy84hrjJCVmE41MP9EoKQEpGgvqZtFTx1AWUpjxyux2jHJ",
  "key15": "531zcSoWKvN3NF9qtp8iVRNgr7vRas1rEZrbszaBVhzGE9s2dF7c2vSwFomRNkYRAioKKSz53YqjsuGsy9nNxy85",
  "key16": "2yPHmqqiW775QyDftoXTxtU9zBktPhFNbaGLWUbKNHHq6rWwA6JVa9iSFqVrBPYdR982uzce3svjWmM1wLeKSQLP",
  "key17": "2XjWmL7b2V9ootuTEvaeUTXaHb5a553ov4p3FSqxsK26aZ8ZsWJfvQNdRtvEP4nS6gTk2i9raJyDGsaQbp63ccAa",
  "key18": "hBSKF7nA91fu1vsdJExvXKKZX9rJibZvc9tQtakADG79ahUtDVh8mDnsVhGnHq4VQfnCReFzJA2XMtyARDF9kbv",
  "key19": "4rCwonFe3LFSJRpyetpdtLj3PVX6qaDMNwsdz9wFHyvybS2GKNDNoSk5kHqE5XeDkpN6fVouC4Jt4bhVwX7ajAqx",
  "key20": "5Ymp6QFvFvrftitD7NssFNX9xEpXMka6r97WfCuHcaDbpS4dgNGVrf4tEbkh9b74S4GhK8fVRMiS7WG1Uqzx829q",
  "key21": "5GBZT4iwAPWCG33wiweQ2PBM2k1a74mJCy5DGx4cmrGha4YhMjMfEw17tx9LaLknGgEu9sNbAuniRC8PyWd4AcJ4",
  "key22": "5MkXFbkByrNUreSGGKRNPZ5CobNWwxQqVrPPifQKVAxroqzACHixzWnJQKYJ6rS1QRzqJMwh5ERX81jdHGtZZ6Vs",
  "key23": "2354ZhYUzZMtXX4Jei3sYQnk646Pe46hZAiFPKQ6SByyhgJ12eQRSdi1q5U1mM9J1XY14GNC4K53uhh9D7GzNxNA",
  "key24": "2m4qE2pCqb2btksD11Hyz7PJTAvVKnc8vMBEQeUC7k926z7yHDF6p67nGHUJMY8gWrTXzsKn6tUAXfzco8PzuH8s",
  "key25": "37bwxafBL9jPCQLDeggGVKBFzaodg1oEFLFko283X1eE8zzRqvdbsvBJYZhwyx4de9mTzcAehxhZ2JQF8tKWcj1P",
  "key26": "U1bZzg3jHUsjHxyRxufvHA7BfXth2AfXfxdYhdMYuPmCWDPFx8spEeyMQZbKbLVJ2GKzCbArxNZsVEQ6nDXoRet"
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

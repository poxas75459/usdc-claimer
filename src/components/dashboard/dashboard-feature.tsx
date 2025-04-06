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
    "5jaNeBMcEJcMja3zTHbLka8QJ1SxCE6QfXqofDE2F9Q5swb8XfwtzT5jwVMb6nZb6Jc155Q43wwxpxLbiy46Sa2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pt4HzBMD6Gx6BPESDAaPHgrSrhJnDBfGcUvtd1hR45f9sC6KbyaFjrd83Vn4Cj6cHsRtLQ6tRgkAJMt7bsD3HLM",
  "key1": "4y7ytoMecdNwpJKgtAQpEW6LSFMtrHt7ivtzLzQGCcGGz4GP3L3wgWpHS8sMSrvYU4UZ7dm5bJL8W8r3vbrT3ubd",
  "key2": "38DtUs1dzC7AvRzrygfGh86W3waVK8im3L8MWwBBLGMS4MF33hrZKfMTCgbR465YhYbE1g1GgDoo6Q7WafEDSJ6R",
  "key3": "5EZBtBbLfYkVGpW3qgfANDN5vkjWvfpoNURJdVzRxAS3d3DMJb2DL3iJZczvaUzBuSjkV7LQNobM6ynM7V7uZLN9",
  "key4": "5adeDKEEbraxyhi1JhiFh1H2YBGa3mVRaQaGiZHCtamA9c9mXACntkLKCJMLRaqMZ9iMuBWH7YovL1xy8rvnXFYf",
  "key5": "2Mr1EKJv2dYB5m1tTiCjPDvfLkEAmayZBJ7Y2nEPnLbxdmsT4Xg6uMqWbcjXTHvuAnqst7fMgFQEFszixYipdU8h",
  "key6": "2Gjc33M4qtaw2FByDmMuZn9yth7YR1kZKAtUjd5ixi7oBUs1RbAaza9ys6SzJCLrLJoZjpWVsEc5mGFvRXYSfDXf",
  "key7": "3UugTHjqGiu6zjePhrvwvde5TionwXPx3uhkzXJHKniVj3QT3yXFJLjcNh53qBvGMhnmTspaCGCNakExqSAuBkUj",
  "key8": "2GDeRARZa5mD7T2XgkQvrxyLGtG6NkPtgN2BETfWbGaLNEmecKY3Gmv7Hj4XyqJnPcAeN7bivVEheQ1WavXipRYv",
  "key9": "2z6zmAK1jbHJcJ9f6Z3VnBhPTQSxq3Yz5iJMLoggYcbndZiDv691nY6VYQywfhmqwKYxmqqgktgHwjgwDwXBtNfL",
  "key10": "4E1oBXQBC2WFRhr6tprvzymS5i4CZoR76oFW7vMkk97BySjYxcB7do2PjQ8zsRKiLhpvByvYyWUcDzAifKAs8AN8",
  "key11": "4haW62UwuDsPRMRnEQQJqyoY8VV5ANEmg6AUgUWqmFji7goHxMNhDW67aLa2WpUg6VrSx6VdSWNU4VchnktMnV6P",
  "key12": "2ednXLAASUT14KRbfdhaNMQYBapALGEGMS2RsLZSjeWLEg63yCP6EaUSH36BQARTVjzNDshn35pE1LFLP2ov3CQE",
  "key13": "5JNkh74cEkLBF47uc98Gu5RsHKscoPjrkzzRoiBgeaFaT5yE5psAsAc5rryxqvmZpDdUxtCj9r4SBPEnbRhYiTGJ",
  "key14": "2Fd4czKuWtrzYbgp9Xg4jLDNx26jKtgELgHDpb2E88f3Q6uSzVu26zjFvXNCWtzkcDHCWHhFHrGBvdW5oAdJPamL",
  "key15": "4tGPenuNUeBsMfaT6d1MZipAxkjTuwDz6xSvgLtsQEYVFvKAybJubAvH8418kA7BydrwVMTyT81kMf95qynTgh6v",
  "key16": "3YHuVpZjpoNLLugKyQs4LqitSgPf993iFbLiCsUnExMd2npuFjNDm4SZwqp1EYDKkf94bfniYJGCGcvrwL2m5t9a",
  "key17": "2hscP9eQmnaW19LnY5VSvLWDBd34qYGgCJsBa4S7FzcuFxSH1cHmM3VT8SSw98nhTVRQvhCgTL1bTtKoRXzQnvxC",
  "key18": "ASBrBWLB6thBH1QzucjMaxceWjT9W13MPSJLrtpWjHK8jomMq2nzfoHMQ61v3YuCLZSH5A4VhZ8VaRbxRyYa3yd",
  "key19": "3ve69cfJHh2TpCfR9JbF7Wx2xorpU7sZHF8oXYnuipAPcEkJsaTUps93VfajG7Bn93M7G4oJ32d2bGgKVNQSPe67",
  "key20": "5CEMDa52xkTLZwm4jxw11ocBH2ZrJEAxBdfuGua5AemR5veodDSu6o351vGWjmBtzFKcJxNNgs3viybQUwXtvskz",
  "key21": "2J2ZW7RtgCP1pJ2VxzaN1MazCiCCbqjWS8CvuVhSBp2URMFxjjj7DYVA132m4uuR2btjgHkrkASZqKK1TF6GBXwK",
  "key22": "2utKo6Vs9oydmHyRovVCsxy68mEV51LpivuQMEvqDuTSYhzd7Z6Y3X1ZBtDjxgUjSxzyFwsKWeDqd8QiFemDzRaE",
  "key23": "4HShpt5pqXGMtB5CJVMmo6RuAac1s8xxZiK6yJYg6wDJdLhNWhkao3b5bTfFokXpf4jNNkrH55kczwBjHKGcyNKH",
  "key24": "3T7fMnyU32tzBveCDbMNxqyrCFYdtWPzhvWqy6AjRbLPtY1Mj3zeotWr4bja2euEN7Phmw8QCLFkci8n7QWJSoz7",
  "key25": "54U1ctZ8F3ev3menL7rnzkvJkrhk7vuLgPyxYHGMXFQ2pNFgKo6fE1Cmr8xMbJbCFFjG4DLZX57Qr3cxxZFj7CEd",
  "key26": "2Sbanc8hEm6XeZYmSbjqYEkTw7C7xPhCku52EhuYBHSKX7UEQXJoxnbp957NU4wd8xy1D3suvFC3N86szXbDeZqk",
  "key27": "5EkKZzFJ1SNNsyeyJW7FgakWkzugaHuUoUTF9ha45bFZ5wmbL32zASGZFL14ErSaQsJmeyZWNrGBHdTLG8rgmsBA",
  "key28": "5XBcMc5Wg8D5y5pTb26yYeJooQTH9a3jhjL27yNGdYGBgxoQJ4UUzRTSU6giod4kb7E5w9uDoKvztA7jDHPhpUfD",
  "key29": "31izSH4ZPzBT1kYv1hACydjqwMZKYAKN1ECoqdGjNmazdyc4YPUwBNzjKJxw9vrWgGm3AvYRtUNpV1XQWLUGWbEH",
  "key30": "4y4Mrsq2eHwsoNqftfim11GGxMZ51F2kCJsRNx2tNq97egQsc8PxYm2P7ddnvPFZ2ezmZJxtGvHe8HhCZx7j73sT",
  "key31": "3qysvAb25QJZ3yJm6QBpZFeeHCA9hvDkrhDVYyAPAiK8XmDHP973nCg2qKFbDK7GGaoQBUQDwRDMnqMmg7rFU3Aa",
  "key32": "5PCv43i5kRrtDRTax7Yru8ts3ic8MMainY989PQNhfVqE94yPPDMQLfHJJ3LtvhVkz71AUCFv1E2Tr6EhBbfCQZk",
  "key33": "36VVjc3akHEfmuCtkxgg1fwpHydcZXnYnYmjAL8JS4uDuXZmBEVzw7R8dWH6Usz9Gskoh155zrZy5bYM1uyPHSZA",
  "key34": "2XARwNSnD8gj51pAYAgSHZsQVDideEG5Wmvpc3VyHupDYK7TEKvxouB8cfanKnvqrkUbd2mS5AxDTyvYT3mRV9B7",
  "key35": "44qnPqLWN3uLH9nTbitR2eCdL34VhQEzLVL81HLK3N85QSZLTUZvaWEGZXdCCgPr2GRAPkTQRxXSyHsNdVAyMXZZ",
  "key36": "3JQ6K2rEV1oxdXjDHRThF8JnSLJ1nKVvkzxqFR6zgQevYTWqpiqnZ8fwNjAfPcw8BaVc16SYZNRVHF2QTXYeQTxn",
  "key37": "3o5cR57sxNg3eAZLMy7fGo2BSwmiRM2eTh3bfUYwC1Ef4XrVAmiix2fwRhGB8VHBDNCRCXFb3H7sHHxUaAgbKizq",
  "key38": "4iN26WGyn9MVptnVV7om1KzV5N1gS7ccvKEtYEZaAzFvxEhts5qcXe6B1ab5VGSZH7GgKwVxEHeSsNbf4zJHoUhH",
  "key39": "k5e6CVKVKEacZSjbqnb2xoi6kzkm5U7UvHNUGTTT87qUkuLs1o262vZwXfnpqCVgiudGJrUrPnU5mMnQ3PHdCUy",
  "key40": "41X1E142eHUPg5ZWapDDzBn8uxJomwDEiUHUpkz2T5i7NPURR7PauKQfegxdkWcwL9GtUMVpeQfZmbZ2fp4ApARJ"
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

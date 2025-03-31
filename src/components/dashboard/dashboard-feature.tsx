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
    "2EtAD2tSZhr5fq5Vksg48JDfsG2Ecpr8LUDTp9wLH8YfWfeZFYQM5Qkycx64UGzYUc7VPR5NhZSA9xodMwHFHDdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3QzYTtMVHJpi8Y6SeCZ8jSQRs1XirXanGataoZ7xDbEKfc3ArZUBtrgBc9oezcj3VP1KiWarrbpjv6YSv6hGtC",
  "key1": "3xKMxhBmnwjN2NHFmjdzyWyPr9kRcjrMjPXfLpgV5bje2tBP196w929KSeps2mSqNoCxa8bDdkDWNEdJj1vsr7Gj",
  "key2": "22k3qUTT1GfapQqXmXB1uGiG475KhG4JkFAdZCcESvfTfj2FCnKLcxTgS14W4admhcjvJQFYppkTLmLZWuJXELMU",
  "key3": "2WDB9GRbcP8X5xmfHfDuDcVJAyJiVmd52zoYK7SUQacHhrtz9Xxz1cNJNwpYoHTutitkjrwmNPUKoSZHVBeeKQ5E",
  "key4": "5Z24P9gSGckafoa3nCHWXZd7mHTCH1nXWiwUB5DuFhY4gV3UmgtZgLjuXu4BcgY5jgZS2rFeEs2HbNvTeYLZr3Rv",
  "key5": "ov4KxSReiweTQDH7ZZWKE5j9ovZ4ACwdstB17V5JpPz123KsuxfwxcxX7J3DAduExi4ifcsKi7wwgUCuPqCp89Z",
  "key6": "48Bpht4XngNoAhB86m7xuGyFbsDUVtuLUXwamcgBBGVMNC9cwX4cs8C7Hw3Q5EnK3DvS8iJWiCDTj7HfzT2DrprY",
  "key7": "3fXJ1DbB1kpD8mjsjmdFXZCQJJNFoinhQG55o5Q5cMYpiRm96c5Xcc7Cbxdc3vXPpnk7J7aDLfy133H8uMxCLdQo",
  "key8": "89ByGySc8B9dDeyH8YDr9Tq4E3nDhpSuANFi8iVVgrDhhF7iRGuxV8K2jsyGUjVAYdQHc5s2WVBEGYFvdWD9UXq",
  "key9": "2UJ8JC6XJsSWTGVbsHf2xHm5mjFpJ5RW4PX5Pj2AyxoF9tsnqmDM9bj8q8dvNzxzPJpiWQBSjBhkKCQvxjq6WEWf",
  "key10": "aZH9YmXrKMGoQxwYLkg6mvqKMAhhCbWP9WvL7C57tK6PyXRJCVMV5EL3AcnK4WuBu33YG3fmUZvagjFcKNKvF56",
  "key11": "5E3haxHFuji9q1u3GsuY7i5Nuq4T8n2UeLFyJhWLheA1662EfSZU5xm227xrfqvFEv3RpVq72KTxJyNkBWQ44auw",
  "key12": "2KsgGNsLk9L9f8RNf2K7HrWEMKP2T49GdVrjhPkWUZCuiH6NrTVM9zQKJ2AiWHeZySXzg8irX9mpE8sz4855ygrk",
  "key13": "5UZYuPBkEM1AiLS6ePt9creKoAqsK2ZvSWzJo7TMeGaar78ropZmJL3i4QdNgxcZeFF1NWyWZbtwCWVYpyNhJFbV",
  "key14": "3UWPRAoK1nJjqdS9ijoUF28Rwk9PE4smKcUNUdZRSMA6YDdV583MD8Ca9ZHEbWA1DTSuX7WBPuRztzcRbgjNVQPx",
  "key15": "2ubm1rwBbRJdBUi81pHTv6FZTTLXH6vL97j2uPV1MkmSUHweP41Dq7d1i9VyryrUGEEhxXiUM6f2N8WN8cVxXNFF",
  "key16": "2kL8PBFF1mqmVN7SfLPB4cNoo8PU55wPTkWnWvcJ9ZujWo96ijHw6LS2Aa8KVU97zTDRYYZHb8FmegmQvHm2dv6c",
  "key17": "2uv29doBAeji4Gy1dTsMicyVTXgtEAGSY6pCJyPTJG7MZXN1GteSUNbRTMykUGuTsyUuEh3EDfzaDUwJEyVuM6mm",
  "key18": "3zcQh5h5DpK3ARrufuuZ6jK9ZfJzKUUaLoeddX8SoFREGdeom1Y2CWhewqZyHqHoFm3xJbRHFYsPnGZWVmdPfnhP",
  "key19": "52Ph7zdJuN5a4JsR9AQoje2TwbtQ2W6f4jQkoReHD8v2P1QQc7Uy9BWMHnimerzJxGdqHw9Q9dyYGwB1KU7L7gpR",
  "key20": "5G3YAAswGihVCGvtCe61zRDAw8JFuozzrBNBMtxt5QdREZzwK4H55gmdgPwJZNgUEruHeY8mwA7BoqBDCyxQrtXE",
  "key21": "57CGuc6gobcbjvBKhjtckQuFBxch9yMH2WCfR1HJVHzkjWA1ecPBcBYjoStSxPxjaiN4SK9VdDXmGe2oC9JzczpT",
  "key22": "59LbpGn5KM34yJN72YZG9K2dJLqUTtW96GxX4dHaERL9XC2ZbpDfECDPruCBbTPdrUjerknkvck68XSXvmWr4BYF",
  "key23": "PcMmD4fSbCv6ScV6KUuyB4ttgrYW5e2sbLXw48MzsArGUPCxsLseAafZ5fF9b9vwKJq3vHygTbf3NpWDvom8SG6",
  "key24": "4LPEUoLWv71DpEwrf2LQMCqADaisott9SyuZWGUaEbMChWEZ2hCe9QAgUbpgqYmvZ8UDUCBrTzTWYJaSJH3qd7Qj",
  "key25": "2aMrFGH9ZHJU6Exi2ZCngsZSpVyjqXgf8w7FJhn6uFBtD4RGmAsMLert9rs1LSukboh9SiespZtqnZjbtkPXwPbC",
  "key26": "63Z1FsDRRtbyxxnKRFWJe6pbAjNZbNBgsaXLVEiPoZHGM7tnKx1YbCBJ5Wc7uUcqob7PnAX5dFVrGuouVm8S5pDW",
  "key27": "4VtXKhh2no59xHeFiRshvF7hoo6uAxedEpdPdJg8APVdpFppxANKoPvrhPG2yEtrVZ341ppwxT9duFzg9pC1RmxG"
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

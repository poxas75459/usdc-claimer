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
    "41DyM53bPPHDdSq7AQymdrk7HcwQ3j6c9WGau8W3YJrcFcNhfEtqdAZKnFN9AsV7JAXN8uoMZtgda5puVHA2LjXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AYT7kN3qeT9wHH1RJ2LjbpkDDr73skfrX1RdcCgt7WJQBG2vQr2rGRcxM94b7EaKZkMM26KYDE7z3DxJqEbVzbB",
  "key1": "c5v7UasyS1iNjuXpsTp8px3DFv3ncdHTYmmVfngHK62CeiMmia7sqGK7uP2oRKUkvuApnLvVGJWmhcDVoAfjskW",
  "key2": "3YYFYd5fiXBDN6gAKi8wJMXuKzeBxhUKgtgvZbE9s8HLPd6dYiGdYYqndPdC9Ctm8EmpqzcXAvnGEwR4MuDme4Bz",
  "key3": "5MhyK93mgfEVvh4XiEaNBkQKfN5KJX4d73MSUF7iVd9hhVBviwNZ7bRTJ8tSuRchzLfqeNWA96ZVDAha2uK7dpcp",
  "key4": "3qyYKKEpwibkvoi4yr14BtbU3Whs4Rg6Z6q6XCJidhfGagUshfXLYNFS7Qmqg5xXvwT2TwstNKn2ZbAtomhtJvjF",
  "key5": "3LiTyERSyr3C1MXkGgLAdmHLLSHCQcVeqoWZpZkUhuQ9jMNeGAkYBaTicGtEW4HaueDPwL97H2cHfLMDnMc295zm",
  "key6": "54TTD5HrsftmHY7bSHsXhtkuNGmpsYNrNg4LvgH71WxrtZuUJqeaXiHLr2xWqZ8UDgQ8oADhjnd5GUSBmsgHdLBU",
  "key7": "SYt2T3gwHYsGukqSimqYV9T6o9pobNDgpoBTiVY4WeMfDQsnbZnxJMPYjuGm4qcXLkWWXAQ3pLWFnnJdz929oCs",
  "key8": "5nhpqtiUkXdd3GKGb7gFKrWjFkvnuhnmaXH979AY4JPh6eG7odvGixyWgHTdfNNL2WwnETqnH9sSTRfdjkhNsoeT",
  "key9": "481XGa3dFYuK7WjZunudDck38F6kQ4vbdMbzT19w1zUpgsS7q2or7cKGr6A8byrjqhHTQAFnH56j3xtu5W4ZzQUM",
  "key10": "4BizGWJBvL7SemBwg8Vie62R7UQxWiHGgmHutRbDh8ZMWutZB6hdtCCTESNJrjS8PqN13XDHABj4YaLyrXBp2XGw",
  "key11": "62oJrLuGQWajQS4RvEzxEjM1ztE7zK3ENCChzgVLyac4BFBSgjN5vdnBMFAHzKRvbGiuDLNRsWGqTLvJ8AnvaDWE",
  "key12": "UqcYhDSUkSYmvNaG9b97kZ1Zcg9ytMAtaQPPkRdsuVV4vcSB4nQTaj6kS5KXzTJs2JYGkh1CdEKS5cRfDtePrj4",
  "key13": "5rpojQPKesqfbCvrHcjv5xXmtnRqSWAWcY53sYxhC2NVXZG3xjexUFyBxcrT1ARNjSzDGVgCn4br3f77uXCmqeUN",
  "key14": "573AUi89m4ZSJjUUWW669vCnSW3xHnAnDD1Gf3qZArS2VTMfeVkdYpAobQi3LhUKVn1EmtgTiTHuLFzAKiSfegmW",
  "key15": "3ZypWaoCSPR8nYDJzjLx2qaoxLX1CcJfT6X8ujBrhP5EbbDRGcaAyiKjPYnDCASfqASNLWrZY3DQae38tNKghCBU",
  "key16": "3mWX7vrNwXG9J7qcKbfZZ4r4GZAPipTargYFSqeukkTYpEZqWF6vrviafH1tcSQsurWZuj9vXCzHVqsm83nKHjVt",
  "key17": "4J5vrxaPZCqi3jZYcUG16La3juueX41TPqPbA7XAA5wigTp8GxkKB2NncVD4nejSKHyEcqNyPpHnXGzUduxUhy3B",
  "key18": "kf8pywPimdLnCrVUFhYCgJAamhFcYgEEQj8sQwWWHv2Y8ejqVjayzvQjnSLkEZZRFG6rJVoKZUWAmjvb7erExEu",
  "key19": "5GUP28GZdJYkY6A35q17M7VCZMH8vuXGZUsVEinm6FpDgZxhPgkk9pwxTfJSpNaYnZJbUimVFvGjPne5XhLWzrBn",
  "key20": "hdLyTShQoxXdv1wJSJfYXATFduEVzcUJFwy6dJ2nMEPVukMKE3bfCneSxGS7JnRwC6DU4u1bGxnzuG9zbnWTZ3Q",
  "key21": "H3y3NJ9tqzBJji6g84yB6nz3TspgrqFC4AB9VwQ1CyeBdXFKUVK2fADuBPDFDH2Sh1eT6jqbdcFpdu6Bx3zbbP7",
  "key22": "wwz3pGTBZDfLeDw2MsH7YnCGevPSctrMddjd1TjWxNE5FSXq7iQxgsyi9ud8YEQUviEBijTN2WqJa6tkMiEtn2u",
  "key23": "5dfkv98DRLDmPo2EFxDjKPg71jDETCAxT1Wmi46z7g7PjhKsmXpYFMNiz1BdtknPoHFC3N2WGUMNb3PJyJ2bxP5s",
  "key24": "38FgNDyE6FtZjy71WgxhhWjmJjLDpfgqHBzD2Ca55c2owmhvKEubk4xf8q532FayhiJ8a5kmK39zwVekm7ENNxAC",
  "key25": "4fN3VDdWPR9fCMENZT49rRZzbNTgTRVnnk8eUfiqxbe6kyQKQhctdU7jf7yuPiWxvsXBq3cB9BWLNpvbYXzAZsR7",
  "key26": "3soQtdR6hJTVGsc6Q1cfUeaEkPPYdX4U65HnxUVUdq6qZnPgR82NR9XcLnUyhxEsvfVc1MrRkgVy5RR31HKKo5RM",
  "key27": "5t2phHqS9nSRda4fJoYB3WXeusp91eVAUMbQaBRrui2jAfH7fpsqYa179fcpXouJkwRNZvdgbRuAv1AsDzUuWhLg"
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

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
    "4iDLwk4F61TGSNnV2uXCCtz9Dbhu86Z4eVKaZ3Tt1CvKJFv5cS32cKUrypEyw3cEJQvrQHz5RRNX7MCnrGhZ7QYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LngogmUQqLESvXiQtqfUvJppMd8XJCaKpuXJ4nhVUteucm6nx887ujqrTSk7oBSUA2f9sQ8FoGGF9gbHmFn67Ni",
  "key1": "3EsYyQmAggLXW94vb3Ww7Nxx2NHvPBYy2URKMT43UekjDpHQVutN56oAxcMd499tVSpjKAkDm67RMzsmWXsjFQ2g",
  "key2": "bn3PTEmK9Yc2wsjdFxPDmhVDXqNjxE83MQkSFWrMRNNhFLBvq481ZGZPiJCbJ53ChTfFaWBUtBXFQJ1b6w4ehH8",
  "key3": "2hCQtytL4W6yf6c8UapC1MrdHM398VHX7hXEnf5GQoNhQ5NQmgK645o9oPMNTxFK1rVqdDkxMxruG5fpCPyPohgA",
  "key4": "WxJapdLnFzFW1B34gkNv7vVG4G57nrvhu9Z4hwAgQYsvCFMENN3ERSBCrNNA6whpTKzDqnB41NwGaiSZMitqnVa",
  "key5": "acchWKgftq2DPg8QKb6uwxKJCKcrwA3ChuWpLSgMbFCx1rF3pptm4oCjmRAbicprpSeeDGpapn2DyuGmGpFBqqk",
  "key6": "3zy33HqAogj5XoYjpxBNjzQ32r9hxMuAt7qZ25Z4d6BHeBSU6CX91P16YrmEsfugBic31Azv5eTZAQMmQD3ozHzh",
  "key7": "31A2by3ZAKoX3e9TFGCKPwEMoS4ZR9PtYNWZAU53UmgJCUDrSoAHAVuN3G7s83qKAh4U84uf3GZLqgJj9majBdgN",
  "key8": "354ufNLv4EWpc9YMhRQVULwH48zDe2QzgWs7FkzvWpmYUsvRqUwtasWTzS4QoAKvmXMRQX3FyLYipdT1SSZUZHbD",
  "key9": "4bGsWcRbBpAEm4eA19ZoZUEMxQHjBh4DP7m4ps21PjoUZSCSYQ1NPyzNYpYwaYiNwrYi5azvCeBaExNASumAMTjk",
  "key10": "5TAemAbJMx7qNzZjXdQBdEbvFnqEKfR1KC8vmeBdiq7RMM24WjYBv3pzZofUhqZp7Hwbo6ZxpYKwVarKZoYBDwPp",
  "key11": "42ATbCxhBDwGc3edsgFyu8DwtJLv3XCT6V69eXpTUiNMuRXCUaMnAkpa2RzkHA9K6H7m8g37s79VmragfPAimrob",
  "key12": "3sf8wT2BVYJ7nQxkwcnh96NM2snPLiZGspnCaY84eGkGykVxcNfb3rSNr6Wk6XCVyvMknxY8iuiLGZAmewFgZJHo",
  "key13": "3jXvbfNzebuDPyEfewCWi4N4LTKKz6X146oN6PqR22wLUAkCBN5PV93DbapLPPF9nkWtuQAnb229Hhao1LbcizTR",
  "key14": "3iomS6NiFe56YeKs9M6pgdEWhugAi1Hyr6fpSQtLi5R6qqJXFmJJny2Dhtw9mnuLNcNAPLjyNa7chYfCPwbiDwgY",
  "key15": "47ixoXBYwC72A55VLhLgbCWoMveK1CX2ESaMdmaSWRtDgaNJxPVJ2RauKmabLtimok9cudPu174AYLGvCTMy8Ngw",
  "key16": "5qSKR8xaxgo1xdfyuNwpmyB5C6qmMHNwH1azkHYbTMTETtvdaQxLrn3AhnvPTpZaaWTQTbSqXdN72u7eTSUzEWSP",
  "key17": "3hev442DF8hRif5R9gFaksWbWqSv9ssq5ep1h9nAuwVRbauQzAP7KvCCXW9WaCsmXUkQpGRLn6vRK14zzMMqFvyv",
  "key18": "ztGSuc815Pgncqmq1vbmLBpfRhdEUE4CikScUDpGefZ7xYCpn6hW5UWYtAYn7Pi5fbkMRHFNFxPa5yBWgzrg2pR",
  "key19": "4mPQdMoNjcR8fj3TtLueCVmkVgrZvsufcZEGXpWgw37NnKid4RKDof45FR6WNGrSud7jFyTv4G3XhDTgX1x7EZSK",
  "key20": "42bvZiTGFgYoAf5c1mkci6aiXLQ9GjFkAHpdFSnotYysgxm4PhhkQ7qpvGRZ21acz6kiq4GtRm29amZjEajNWjBR",
  "key21": "314uyjjLR3oVZGfjKJiU1wYbLsBrT2tMMSvdb9i8ampAu2jirbqrETEPPaQxdo6oXpkMFvsRpX1rfSi3MqjK7ASB",
  "key22": "ZcFgy1Lz2KepsY47Q8jinqCLmMFA41Joc6YbbsyHoLAwCDM5pzjpy6EkLRpBoKuUhrKjmvRXy2Esi3zLymApAib",
  "key23": "5sF15PzPdRGrZLNQY3JRSv7CXjCi85ja7bWFCJ2t5bypEUTPS62NX8NH9rmpLgYJiMemT8cAGfbeVrT8Pj2kghmL",
  "key24": "5SxqfK2MmEFDGCghW8BrzAhxPwBEVLfkTb6bVzyfw1FCnUMAN6etBCD1cx38ykcFVTHhqv7pweYSPJSGjUcJFWBw",
  "key25": "2R5NMsyyTx8q2QLufCCs8pC4H6x1MeJaCANRnJuGQw6iysTduZ33rcAMt8zq9SvGk3Wo2f4MRzJ3DHBxRXPpLmyZ",
  "key26": "5Xt9v5dKxFe6WVqCSVpKBvWBZEUfHsMjGVJeP4SfK7BX5P27kd3YQqU7CeB3JiqSyrJEmh7KJM3GDdYebu8PTiSA",
  "key27": "56BLDBtPDzws2JVfehk9ATWGhcw9dTjyjcsTPqLJRkLkYrtcX9XRrgu7mtwxoUoZKgir4h2MujQahN1Vb6jeFCsa",
  "key28": "2uK5BdDHKy8Xqi4vqcLt627Bq6tabuNoVswF9cqZsQJp9FaAutUWT1GKqvWnWCw49c8oGyMhqKomvCETngTQuz92"
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

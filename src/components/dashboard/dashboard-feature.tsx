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
    "3bWmTKfPhd9MCBXxAn2yzb1PvvkaowwTPN3zmXEpHTaigM1aGhZ1gpsAUdyWHmmyxrf7zDfeJrg4a8p9xJdfQqiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d2wT3yESABbeapm5Qo415UsttqPVZuEiPzKDo8T8ANFitQXALeyFkHWgEqU2bodUnisaNLgCjW8owVWFzcbEmFm",
  "key1": "GQyngJAQR7TeMdPZ2Z5QeyEqnJFns1cQpniPVwnR33Tiho7ufh8r1CTdpxybhhe5k27jtZxfhorC4DeG2A5iMyp",
  "key2": "LS8LwxcDewwG1CVLipiKrED9wMkWkMcTvtk5cLBQxHaT71p26jXUR4CLrFc2CQhJrdCMgPjHVVAgwhRvZfZjgCn",
  "key3": "33uCpSZjuTnHdra7KWouppfZ3tALquFBNDQx3KKsBicGUmnFha5RRkYPvzRcuWSg8A7BeswUdECJamZ3gVwHZ575",
  "key4": "4DNRoWHqRMfLvUjfnKxRETZtab7VxevJdi4P2DJ5zbZYUgDyKdKLcie8SVtR5ijTagbYnXUBcoateHJTwBWFZB7h",
  "key5": "5JCdYgHTAFYXbsViHfa3tgQHdCmSBQc5rtGqQo73fLut9u1eRWcCPYgYRAFihdpNra9xgC6p43SgzoL9jpKmSAAg",
  "key6": "3sxGjziZqv5sqnYYq1VgjMEgSfNe3TQNhYrf7xSHyciFaUe3cMFWt1679ccmhYJmXXW2EBfDhcEmbwdmkXdxqX91",
  "key7": "4VYaXyVBP2Z7Dg7DuXj8hAZHo98YtPBDmv5yy8thvtVA9BarNkERwG4QyCxEd6kGdx9YpdheFkvkjYtfxQCzpZC6",
  "key8": "2fKPi7tkyZeuq3pRCkmYQNGtBA2GotAQa7BVGu9MqUcREXrRhgcFRnYamA3pR1JhRhr1Zmk8fMRvZAGNGkoL921w",
  "key9": "4P1pY3R3jNqGxBS3Qdquj8QJdfqKJgGcQxmiqCfoNjHQniZ24guKEZmC56zHQREhxHHMLU73VVNPXoFyV5WCxpWS",
  "key10": "bkUmgkFgC4pbUPwgsEx1nGzGfqiVgXRpeufPcMHNTSXZZroK6LmhG4erPFrF25mNo6but814NPHkLb2VUBCECwb",
  "key11": "5nH7Juh5PZCTPxXL9tHYaMeAPUyNTGVpvbdAJ49R4pix51VfRWL84aR49svMkiijkFQ4Mw34ePS4SCiYUcjQQCiQ",
  "key12": "59StDj7bDgk9qkbkfMesiNUorY9wtWZUxVYkbuJmhXPhhfZ1mUsKaZgiK9KvrJNLjHGizcwpTihfUbCKsdmue16b",
  "key13": "5g9fDJRQPzq9WHURpkeCSx4H4AULzPDyVXnL3i3HeuiwMVGiDCCypuAQNaN6gULQmmVg1drB5TX4Eq2z7vJQiWyq",
  "key14": "4qnHMAm2P5PW7bmnmDZLR6VWppoih55jxpRaU1SMTN55BJ8BKvBNPqgukZ3EBpVQZ8oFpvWnj3aHbYNuTv7xqMuc",
  "key15": "5TGQVVi2reR8oJDiJiawxekZR7Nq9NYTtJPrdUgtCNjsAfnXP2hsqBhoRccXQNKmYV7PYdwa8egj96YsD3qz23ca",
  "key16": "5AJvbPGGdjixw53VT8BzHnfxURzqgm6LCDjCE9kZQYkrNeJtCGfFS7cpnLG1SEmoVAnwTd1GxWXSfqbyxDdrM71g",
  "key17": "27JkddraFMuLv9MZfHcB1RPnZsXrco49RvUEKW2yU6R5Wmuk68Hm73qZY2HfuWb5Qk9KWvZfffa3EtM1uU9SYqvM",
  "key18": "5MLnG831LAReCUeRCZTPKRai7tTuqhCFWwGGjsJXiZ9HydbstSzW7yAWZWuJrnhnbKyWcpc4NvfcomgFQKnTnRwA",
  "key19": "2kdjs23MCHcU1ETRgQAP8NtZL6kGAsp1ohDjdnRL9zq8e8W4CUaSevWxyb5o19TKJWHqw56XirfXxiLcj8pZq4zY",
  "key20": "3MV8WeveckwuWbg3ojoHRttVUGkH91gukEhpguhY29VHYMcsM2y8DpuCZq15gmGAuwbtQvgTq143dStWZ8kjofEg",
  "key21": "422eZHQp5Ugkp8w2hoaAjbo2NGHC2yBg2uQ9v2dLHoKrYiWQh2tVk6uVETyjEyg8B9gKWpuArGpfNUYZcDr7oz86",
  "key22": "3FVXajBRvfRpZvyHWV1Xk1qvpDveBziFHG9Ed9CSi8y7H1R3qxoBFZjJrQrtVTpfD1A2A5gFLopmJB1sF71T7JCs",
  "key23": "2xyidnRgsFnLcV4ftuMfTLRKU1MacBS5p6ZBjRrWwNzY1zPR9gvPjDkVZAcDJg2fxdooTZdRFLrRoMUbKMA86mAd",
  "key24": "2XCeqZKdJHzZdNVpzKQf19a6wAYhRisVXCcURbgyxVRPhkhKoK6RgKaoEFYaUM4NGqFSZgUXpXidAvKcGgZ4Ya9K",
  "key25": "38QBJ1Lf4Up1uw1Snf9PVVU96z6e9dUSweGtPSTEQenn22a4p7nVYBA88mfz2WWsUYYh5XhWKpGvXp9Ft4AwFgig"
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

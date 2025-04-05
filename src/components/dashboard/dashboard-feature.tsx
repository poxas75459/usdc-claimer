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
    "2YUHPKbkBvc2Ya83Y4JyEpPf6XjDikDrqd9iLmuL2AhFJFjzJAo6Winifrme6Ny4W1bacEowJoJvxpR7sxeyxsxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pSM4CYt4JqYRHp3wCv6CQSnYRhTEg28FwXVreA6SbD9CeFz3HgpEzBiVGnaes3jbp3gS4ArJb2dgnZ43AD2hGM5",
  "key1": "5cVsMyBwKaozPDFG36RCw6UP78rNmfdPDgjiCdMjqprmavPrpxpRMv4mTrg5YkESdzxyQQ1brKaP1fvBvGGFhHwZ",
  "key2": "3iVHSg29o4sEe4EpNAY6cP9wkcGRph8crn9CNpVT65TPPkaLJnDUf12PqmbajXMkKhW5dGEd2wcnYqQ9bnxsJVtv",
  "key3": "5sUxdmxK1QoGaNhTVhGNZyJpRmhJM4NAKxFsRr4gNxBkhwBcMW5xeSuS2TxKPbDUD7nMGJL5SgnXf7bVspiyk1Du",
  "key4": "5rZjgCV9FP8GbrCrEg2mrKS3wTdj5NEwhCWe4wzLG7iaa92a92rdsqTdUc4K7odr5rvdxjTagWsh8ZsJCypx4eey",
  "key5": "5y2gH7qguT3Y3RLRQsWfB2rTxL7vJr7nbmwDWFYv6bzMWErUYa3BcRZXDXdzw3ax7TJQ2fpzVRQZCqZ1gxPbTAFc",
  "key6": "Xm2MX7hZ86EXYstWiuA2se1Qp7YFwb62siPrX2s5NnM3rGVh83XzPRt38K1C8wNrwsdDgvPXMfudLWkHRwV1rye",
  "key7": "g7V8o979CHKqaM5WEjrtfiDxhvYZ8SzW2hCqiArwoqLMtnRtLosBhmJTXihNqRhrzqhtn5uWdohmgGhCBcpxHu2",
  "key8": "2SXiDX4jypRTinJDRGo94ucHLF6nkik4SMnFsCmfTNfYYh2mHQkMTAzJvWSqhBKW31VdgSuKWSNuU1ZunTRzvsXw",
  "key9": "47aGQYTa9QjAkHWaFa9wKdRfYZUzLtuThKkSZrGmYRwPEDPqKodf6iaSsXip7PLmKEEspjhGou3r8eDhCXnae4is",
  "key10": "2v5gogDR8kqaxPvr6tMABG2TYQsRzgT5wxYECKAB5igAYEjxN8qpJBjgpX9ctke5NKcVWsXRFXiaYiVuhcjugGp5",
  "key11": "3xkNA5xkPS8RTQa8RDN8uPh4oWGqPjWijRQ5qAhAEGuZJMaRzB2JSuh1CBQbEtM49Ry4Z5YtKrGU9PPEdvQ7zBDR",
  "key12": "2qGF26VPXsQUqta4peUf4spNtZ9udkEor5r5pDzR7V8dLsnyJ7Lj4iF2wT17rYaQ4cSQhWS3PMf2f2XAABDQ9bu4",
  "key13": "23TaDwp1c4Cckmdz8VZcPoXQsrg6WbXPeiuvk4AkCwzbdj2XbQhY3ww1BPyPzjV7b5Dtui9ZnKM97LoAm4MMhchW",
  "key14": "5WQMXscDRR5zr9cfpdaVdRqUeQ2yrrJ8FkC3voTq9aKxU7k91rxzoCMkSjXbYaaecoomaA6hrsjmsN6V4Zt997XD",
  "key15": "2WNemDtKRrZGGeAa8kTgGZEZLKHLoS41oj7onSR2Kc2LCHVSRGhtRMJPMEovGhUoRWbTQVARrt16nYBU3rDSGAY9",
  "key16": "4Gzc3S7CZmKM68LZiJof83M3KWdBhcmKR6t1iei4qr8qPXtfZbjDihjgqNaeaF4CgzVmBRLzj4NsNaeHkW9QMg3j",
  "key17": "uDg1N2HV4npzc4uokvHWkQ33je4V6pQ3vhS9LVyJRgkjNbH1GEv1NMwSPNAHkF1RktMPhyj3ZyygTf33UMXJbYD",
  "key18": "75Rb6UPuPEKL9dt6ZEUbRHkJ83BUtFsvCDMYitCJvWf1xVCojiuqR1f6uHPY8ML3Rsj7ijZK63DK45FjnQtZbNo",
  "key19": "4swnpmbcc1DtSBo7DG4hEySPiYE5ZQjbMHxhnzpThZezYS6bn648QwVoQKxisTk54wP4ADdDCTUCLH8BCdepLEg8",
  "key20": "5G4azjHPkLhStp2UisrupT21PUZ32UZ49DvSQ9S7uVpHaoPHiUvCzMA9iUCjNmAZTcM7fiigUk1LYvmNdZmQ3WDq",
  "key21": "3FHHzUiaK2Vu2vf7QLmpzvu1iDuQjMjBTdSv5KgojqpsnxFQw6oYkokKvhYSXs4Me3YU2scQtLcGNyzoiVTgu9C9",
  "key22": "7evRWWziDBgs8sVmmHDevxt6guGnki7rMzmh1P1xVKT5AW5CRkgKfp3DDkLSCShL9Xf4PRm3PAUWXWwTigkra6R",
  "key23": "34nMkZPbuePVfg8giR6q1NdCxxMcCxLEYrZwmDugNm2E53F6kEooAP5wYPjACk6RzWUXG1yH3z5HEWNC8JZ79M8z",
  "key24": "2kxjLymBhA787qVzoogKbSfTuqY57hPuqzA66Fe31ckkM4KA1utjaggDtoyFB5btjnwd6cVzbRUWGsj7tBiyFgGE",
  "key25": "4bKvUBYFZ8uuxTWddm1AcMm8qo2aYNuUJi2Je8eHZDMZNxHL2Bc8DmCAWbG6ZweJHC5Arhm8eqPwkabBNT9jE1rQ",
  "key26": "25TRDprKxC7qtBCo9ynaFDHWZuALJP5MtRt7Q2KaPCabhzjm1g9jRipHrWYkFMZiiNAZQ6CFQR41RRnNdMpT1wqg"
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

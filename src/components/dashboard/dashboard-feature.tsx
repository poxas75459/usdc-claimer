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
    "tBWitbJtXGfnbhCTn9f4pGKk6HrJ7KsiTBr2FBDeZ4FjkdxUinHBvXbmyX282PkPoWeaQ7nyRhZyKR155KkrrWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gtnsxAYWUQthtg9sUzVRe7xpXFyY2gdJD9ke1nFuzzWDBeUhENYWrDUEGHJJKBZeoKkyBy4Ds2378n3TwrHM1pH",
  "key1": "5oCJFzWQVouSEF2v5KRXfM6dphLStJMGS8JoCZ5uAQMn997uPKMLKbjps5qrs4B31ygty53URghpKoeJaY2YDbfZ",
  "key2": "4H7GrcagcdtFCC1ifEcK7YUgr8hGNjbHrwsSjK8YPex8cxB3xaxjmaTvCvwe96DYubmEuRmJvtbKCDW68fHfmwqA",
  "key3": "358MEZeChq8r7cDapnebo1zXUurq8TsDfcLr6kkv4fKmRd1jSnwWKVZnisF9rC21qCVQjkpv2dq19TfRWE9HD7ms",
  "key4": "5bKewTdPkTUjtuNf4hoUcHUT7RoD1aYkQ5nqsqCYtCz2K2NsSxMdUFp7KJzxr4DXH53ejh9nB8qVmzN3MxeTBRrk",
  "key5": "4YSknb5nAMfEsmxpgqxZir1cFtJHjVEJebrJnTBQjSowcuf21xHmhbmUfwdRfoPy6HyDmfepAWTztnCZPKkrsHyR",
  "key6": "2dLoZQ7BXk6hdUhRriBQuA46RU2FmYQPZsGW3BzDHbqQyeybfdeGqxbLeQW6YBJfDJBsKeiyeRZHznnw69Cs7nsb",
  "key7": "KX15oDEagogsU4NsMdow7oaCbACxUQxDy4acRvMKRX4wMzLMJN2HsYWgGcGhv1aDpbPJm2heGjTZnXdiREG46Vh",
  "key8": "W6PRwUsMV3kJ24LLXQAJref5Jia91g6cMCiqYJfPrC719V8kbvw5uNy7dij5kKVVHReFWRBg5zFXgW2p1ozZrey",
  "key9": "FEJXe6dRSwqGA5JYTRdthEjUJHKFN2U11gvppv7rvZe3cWGSSaUBQ3Nuqf2ijsPWb39myvxL8k6nuejQapiyo2u",
  "key10": "3tahnZBMVCoufAvh5BxwFJP2h4fEe6ZeknAjssNkekpdWyY2hnNMuWsUj1hrVrntcuu3aLZDd2AWkEvmPmfDgKHj",
  "key11": "wzewERZckqkwAvY5wrsG5SV9NTkbfaiS4S4U7JtR2UeNNPm99naN6xTxd65LknaspBGXMdxQpKtBPFTHMG5AwhR",
  "key12": "2USY4v2Kig9uXYfmVEwGnykR1f3HHPUfH8r2Uu9ci6mV1X49E2uci8965fXr4n8zhYD51ys5scYenmBW8p1p2fCw",
  "key13": "4KUZMSgUCwXQtFA256kXX5ntbd8no4SUfHmwEYZYghMzwJ1SYQ7sSUMwipi4rLo1HDxcXf8ewAdLBsBdUyCFkhSg",
  "key14": "3pjVWGEgM9c2jDvcWQRg7ezkPwmDSYtbiZrnFVb2sigu2hWprdmLtjGNA3DBQyH5nUmt3MLbwAiTUASk3hD69Rmp",
  "key15": "5v9qLoXNaouhZQ3bp4Q65vm3AtSd7PsrmWkYYVdYcWDPPDszGaBts3epKBameWGHDPh448ScL3LUJm9dupjbiabc",
  "key16": "4sinADHo3CnNaQrroEadQkUuGq7qNptRQfiewNHj9pyhzHb9vF9fuHHZJuhRonMCzA3DCWWgPr6GUqUJPvXuRkyU",
  "key17": "3Goxx2HJ99KAxHiwg63MpZq6apughGSXhVwCWwZc77SZexCaisT9Akk3q36NYQvtTzwDsfa6u1HF4HXcFpLT3NGX",
  "key18": "2qi9xmT7vogGWJhhnCWafu3Bm9vEe9NBYu1BYHL32mK7ouutAGW7g7HzR2m5vx8AsLRi4qknRSDEj42eBkx4FgzA",
  "key19": "4tZ3XrvL3LkYMqzqYxvDSwxSxg4N69tS8PWnmGBfz6FQzKGYs5CYKK6t7MDzaWQcxzh3xUkyCgFkjnUEhL8B3wpK",
  "key20": "635S3EfCUmwVjDtwG1FMQsocLwug1v166Bd92gmrujMuPZUGnQQC3mX6q8fvWDWDHZWLSgAnDnuFAXEa6Sk85mum",
  "key21": "3RYZmFueik6tyUkkUDTURxzyFY4knz4XGNkxYZkrcrmwBX8Ky9V3CSjFjjFPstjBjJffkjsmKmxkCE7FN9bmxxzN",
  "key22": "5MmwnMqhZ3wgja1Mzxz27UHYci4U12vw1Y8oHL12yVKMJgc4jp7EaxYCvR9ensdyRVrY6Sy4TqeaJdauAvMxbsmK",
  "key23": "4wxjUMZyfYqkKZTUjdkDWZkhEbSj7CoGBWeM1JQ4qHM9zUh6d8gXvknoXdgJEg4MELCHuhyjJPLcUNpNxBiTsPGG",
  "key24": "2ywWx5g5sS9c1XMGruHPYP5VrnicwUcYhpoXWY3TbyfvWBxEcoPyktEXmi1KSDz3VR3TddXRujMUb1Q7ZsDW2y74",
  "key25": "UxCMNb7HoWStgXW6x4SJmXNh72ndfNXnhvB8g6kM94woW1QB14BW52y3zrC2gAWfRzhYanWE5G3py7NECcQJSY7",
  "key26": "4QhcCj8GLw3C86kp3JN6DscyJ8qfDnkppmpSbdCgYrbhCFTkW2bbnBHFk7A39rB6nttAN2ZJ3YBFvGPTgbi7exMy"
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

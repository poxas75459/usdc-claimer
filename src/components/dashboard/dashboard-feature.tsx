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
    "527UUdj3zY9Vm4ZrC11Vz2FP44vrkyafHsw1rQXVYYvY7c4Lf7ACjcQq2yGxDKQu2SoFLtVbet8Ye4K2dR3vbkBo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w9U6MXpPJFwRoaCwAyW7qHTDK5kSwN9hwiFnCtwj94gqxn3ZzaehQ4iKMbv2zSZmgtbG9mE7gbjhgs3yo8Wa5RV",
  "key1": "2dDNhiP1rsxLCa5cy1rDq1A3curkemvB5p7Z7pN6tBhkogQxa9jnoJAYtkGJA7ShSw8oceaoDnU1m9gGvEdzKi4",
  "key2": "22BsNhTHtMJmgTJSDdNXwaNxmLPKZ5Kr8ku4YutBn5LneYTQKp2K2tSaEmY8v4RWUZKMb7cpQzK3XC7u8KW1S5r2",
  "key3": "2P5QHSawGQjGoUiw6UnMHtYDeEbmivVxsX73ULKLsL2ySESdvyrNNxA9VkqX8cZAzP2NFChS8BQo3efUJNgmPtEA",
  "key4": "kyYzRttby879zPJtD7Tk6qJdg3SSwUotikS93cYUxvWXpLDEV93bKnhDCdihWt3hXi5PHAbpy94QwwCGtKt4FDb",
  "key5": "35654ygePzL5kbQFjqQz1UqCpgM9xaro7VBNoEykPuuDh14Dm6DfLidMdEDaAZEmTfBXapc2P3Q8wMfGthFD8aq4",
  "key6": "2tyaWUBUUT5JPoTa3QWzSGXjX8JBaZe1onuTidUMH6tbmSBcmzMuB1qijhFjt5diqdxGJ9HrBraNwPyoD67PKJC5",
  "key7": "3vFXW3noC3dvNPB3jwkiVjaaxMDdoGvmXFtaw3MGWxfj8xPKiSUwYkQmrmb8tQvQ91TsF6ynavb13uLwrHZ2swBp",
  "key8": "35wMoxEgbZEQeLSdYYEjQ6CU4FgWPgpatRRo5woFWgHmGunAZiUwAn4gAokkqsgyAMkX2gXHUpWEnCcH1zu7pHQ1",
  "key9": "3jQAjvNKdvGQKLv6DkoBKb1khLDksmKTMDyfFmtUfnn6Q7K2bryd66vCgVvYN8Envw8rQ2QfACActEhPhMbUoKpA",
  "key10": "4o5MLn3Cus1g6ipJ5JmLcPpiT8NGaUSaCSmrMdzZ3AiKw6eTJ4XjM3QgQB3vG1HVCPf5e1Xf53DaMTfwd3NLQrND",
  "key11": "3jZk3pXXB7vvH3FPHhFfBv8shuX2RxzxnDkGq7GERdRZ6yK8xHePpnrsTjXVU33ytPKRA39qPm6WWJmk7STNWaXa",
  "key12": "wedeFznzUvxFAD1JEo2HrH1SDA3b15fBoBhH6d3GTRwcHxUzQvwsT7oWnLbupRGDJkJHY4GKTPYW9Vv87rXoM7V",
  "key13": "4JkB9McJPRyeGCBTpdtVy8UWwiB2pJBEvRZMTxLZDKJ5DugHPVprQ74bFwVJ74wJUSHUMBPcw9ZxY2qVP3knVfSz",
  "key14": "2U39YFYtmQu25k9i4xbf3C6SoFAZ8R3vmrVPdun7HXRYtu4k2vRvUW2d4CqW2aooUUjpYbrgNWCkKnq5fDR5CJWn",
  "key15": "5gThGm9nnqHcLAZi3WALhpvJgv7NPxJ6SpHyZF1NasnCrp5jKHkjG2jNHLSMfbbxXTpguQnvSKABGkXX3TFzax5T",
  "key16": "NVf8S1DR3oQ2pSgktT6rKuFgViF5cevXL8Ri5aMJS4gTW3nkqrnVcccQTdhWoZM74B6gq6td69BJnXebDJM55fz",
  "key17": "3BHA3aT8pLhNVzcUei3WwGdvy7XWFtkF1AzxmRkgPoFP86JV2HXtjajE3ZaXpk89TDp3nhgFC27GyNZ9xoGN9Vfc",
  "key18": "55MLZbLu8BgebLy9nyHK7n792AZ21Tu2nS7yqG61A8oyN9JZfjEcAnVofg2QGvmJKLGzjzZJNP8iDUn3476Q5xCa",
  "key19": "2CnPicczP6tcHEhicFS1kTJmsAfqvkpeAFc3GBdREtzS2DBvaJPokiK33QfHC3Srjvr9vVxZHo6Q9FDjN5tefbv2",
  "key20": "3z3R9Laq2vE67c4cUu5PwTKGkSFRadwYKqbzjSyDCUp3Du6CjptAeGHxueTaHEoaQheEJPkJ7rSADPJbrhsq1xx8",
  "key21": "383JNzWV9AdZHUTKHosbGbtgTYTj9mKtajLpsG7QYH2S6KSnm9YVw6sK7VebnhYpaAWJbNusefkjizKHfzAVeUCB",
  "key22": "S5i3MFho79QhvfpNcbXmwQ63FTdWQsYV8NCBtDnCrgXK9dS9m5DXAJxkgEhHSrrnrcFxcihg3ePcaiuMUPouaby",
  "key23": "5xSYaSBRC39oCRBAnzWfq5wPdJapdUPYu86v45RqiHbsMF3QYJSFFqwzgTmh9C7n3ZdhNXEL5kM1xXjYFRdHGEAW",
  "key24": "3Lz7eLJyGXi55oiQ8moLGP9ceWy4wCqnvQt68wsrC6GJWHTQF4K3TeZ9T88qoRgrwhWRjH163PrAF2QLvw4Ry22V",
  "key25": "mz2fF442cDNKWJ93opyN2sYYmYbPVRPAweRQYvhYdVzExT7KeHNshXXkk8KWJvc8JmztruWEb8GzgoaYESTQm9s",
  "key26": "2XmYm5b5UR8wiWLV9Rb2rqvQnSDc17gi3NmJKMr26kHBa4XBkxrDMBdJNhkFsKxJshuJZRcCSreyGYssskSgKFN",
  "key27": "he1fN7DkteEBwG6q2WieFUafj5goGpVgTHg4BLADToPdPj1X7axFWyPaGduS5TC91Xpougw5eU9QutgbEN134PA",
  "key28": "fup2nnc2nMxXTPYbvrrGdubZYLKbhDYZA3hL6SZHY91j2iJwNXrzAk6N2CvoDHj5gSVCo67aPWtFrmrqhP2qjn2"
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

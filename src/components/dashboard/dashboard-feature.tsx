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
    "hdiYLE3sGFY4Fo849bbevS5pWniRszXPLqR8txdg35ywDGoN9BkgKyUa1XhWpHxAV3SVhqWmKjnQrpb28BrBoKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22y3VBC3FjzGM3oKnqngAnMSq5sN7vtfRkN4TKdRiigf69dbhjzWauCiWREN6UaFrUhFCo2oqqTD6jYPKL43BdcN",
  "key1": "5MFDazoieWCw4Vm8GWYkJnSWysjUdzgvoYSXTPu32wzqi6yZwaJNbQ8bToDtgQGaevg2r6m2V3tzFkiADjLp69F3",
  "key2": "511nuYSwAUjh8WeDvckjF1pfU3tg4mcU6UManUx7ozgWNCRT3Gn9NnqyBgWuoLbSVcW3QxiN2u9mAS7hBb4NFkS3",
  "key3": "dX9LXLfRBX89Yj9zzUpwc3vXqx7fYQHZ26GAoXRGFYxmx8mMkhcnf8iyY2xKoBmXtjnxC12qfaEqGY8iwFCw4om",
  "key4": "3PAc5S4oYKC8hV7MsnfrUVwmtgCoZztAkz5djng4U9ahv7afjXd84MePuroELNZH2LioY86bnicpQfAGfPEzoGxi",
  "key5": "4tS3XN2ptPVuc6sTQaARHzMnNE4YV3D7gduexnj2dEQDuyftHRSeEeX7RXc6GvgvdEcKbuQPUi9XTgGNCC8bc93z",
  "key6": "3x2mJyrveeKPYWE6s717kexBPuUoL7K1EpF52iRr7FXJPuABDveeRCQHGGn8RtGwcM7gV3BUWpvqwR9eE288eRrK",
  "key7": "33GB5D4cN9R58j7e68Rs3wUZgzJ8d1H35ZAYgKEb1NpkW7dZyBkoxdMyboP1na9ZMQbnUzVuS6ESSq6m4vGY9guc",
  "key8": "5YncBW5DgYBmH1akESBx2g4H1apXoHAKLAsy5s7L5B3GRuBL14YYkmKRWfxbjQi9NF8YqLAhqNt4vjtQBTRJDbUd",
  "key9": "28amur2iCPqozTnzZDLFAVr4sdNnYTYNHoCYPgeeJVzsAMnQbgJXqmKsVPYLesJ6qeV8D7A4xwowDgPJ51o3L2d6",
  "key10": "4GzvvTPMPwwg4R5fFx2xM2NX7AK8F1ng6Ts2qFJTsshY4fq7sZFySmZiPz6zJz6pRNzmRsrVDQTdT7efkybvkNRK",
  "key11": "28AqKotYn4Qnus6zPjKoteDjo47dkbDi9PhPN8cmmxztx6HdpDtdCSL6rzXqPbxtVR4gT7fD9nzutBFzQbRy2Ky6",
  "key12": "28XogCPuxUYv2nqdrqG6jxoa3Hd6h5M96MgrzHBC4PDmXvVYsdFcxe155K5DTnkDXSoqTyzixnm8Gnvqj5JDrg29",
  "key13": "2Upt9mHoLNkgzQLirD1GoxqZXiNLLuMTQ6GdwUzz7LPNk66Hg68D6UVvPmjPjiF7f52qzhRfMjqvRFdXxyPup7aw",
  "key14": "FMakhp4ZbYshzznCBSyY2nfLyewmUU8zAje4Qev1VCPsXhBB7GMyxxrMnkZYYXzUKJE1aExFiPy5AnFzJmkVSMA",
  "key15": "2uu7HWPprVSuMEUojes9NhbC8eZ5sRKbFtXdgxhYJeoQ3FdUCjCjtpyoBCRzcBWyXnnouN4Ai3EiKSz8pXGsTZTC",
  "key16": "RMNpS3PNLfirSwdLHy6jRb23xNKgXATzTSzgvjoDmnnAe1zmNow9FSAp5qgvGqxMQteH5baPDZ45FrDNC3tpur9",
  "key17": "4nxQbEKzN3JkZgxhQMWs9ZiuFhH89pvJByJ6TUvrkPqwvFmYrskCx6Q5LXcApwzP69SxYfEWHHSYzAGq5einHpKm",
  "key18": "54D1hNjrmR8eV8v11Bxs98ZSLNG7Q3h6NnQDEYa3T4TN6ZHWq7ndz2RLNqrUiGJ1ZWsFRxwjwnc6tXzTfKp1uzgX",
  "key19": "5n3NM2Psz7pHGCejLv1ozvfzbQjRsUX5wqawJyJD6P9czbDDgv4Td1o8yjMaVg96hZq6dhuWHq6SwqYyyJNXPWdh",
  "key20": "4Y7W16rNbsHkihv7UVH6v6TPG84ieT5HG8PMhoGM7aSkV8tpqw8mUaJ4CQ39tasSbfTRBMEpTe8j8UmCSpXaFXoc",
  "key21": "41WbAbEUgpvdYhf4vQBdeUKreRWaj9srXT54W1BuhJxbTjgMWRE6zUgKw54GksiBPneweoFVAvXEw8sHhwoWbhGF",
  "key22": "2GCTgTVKtaHGJzvvpkARvUg5cUEvqfS9ybCsJZjrcpY9JHAyQhTuYZshiFVBtAeAaTQzAwd6XRrdAWWHEfgz1Fid",
  "key23": "4vJqgZUxND4Ack8BoNeuSv6CPwMGZUPXV9rx8TWeC9Dr4VdVYZ3PXzTWP3E7RXmyPTiopFhLhQD481xJeEPs1k5U",
  "key24": "36fZnHPRra8xDEJouC4Pk7YxHinzCJGLZxcEZ8rf9xSMqSiFZHckPdfdXs2BfNidFj5L5Fmp6S837oevzYphx4G4",
  "key25": "HCRXZMGSr9EVLnA9qyZhfmqDR4CqBmxxnkbAHKcXsn4LUcH98eJr6SXAWb6U2AoFybhGzMNdz1wgJR24X6pcoSr",
  "key26": "3B8QKEtsjfTgWbb8cYuRCuAYVzfQNxt2iqtn7gfz5ZRzsbR51LHzHkEAyJHZkjCwRVk6PKZLfHrqTfQGve4LA6vj",
  "key27": "2nG5ByXfZUaQHmL4PU8FFEggW8bcFHhZQ5pJwKDbAF2k32kTrC5U3QvH2fnMhTKT7gteF6m8jKty4fDN2yvGjX6x",
  "key28": "28fZEs3xbGZQoFkY5jaFfnNha9p4vF6TEQfU7SnGBvxWGMnf4RFUkpPDdz8rw9M58ZJ3jgWAWCGFxiLa7G3L2GtR",
  "key29": "4BW3a7qtXSzHsb45Qw4haATNUr1SVWcZaGoENYJZddija8aq4KBEoUAzM14uzgfDddm3gBfgkhhtPyP2vhRr7Z1u"
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

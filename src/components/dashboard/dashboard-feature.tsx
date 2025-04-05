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
    "4qHeChe5MweGNhfAg7MeryDyzcGDuePacEk1w5qma2wBpe4hfHgpV262q2xcMt7mM2G97YtgTvmip8XdJjHAnkQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2waHRBNYusJwAGtwMyDYrG55tNUEz41uPzo3aQ5i7C4wu47NUmdC5iHZxcaEwPJAsUd6uT4ma1Cpa6gYrcaNhibr",
  "key1": "3uoEqdYbKg4tXACdRctPVUAviKWna9pPWpMqnfWHWPVAzkhuUrVfZ4gwEKnJXeJbvKoe97cFeRgiU7VGSKccr2xg",
  "key2": "4WmpbJnLWoet4BJ4U8rxn94PuZoFWRpMCZLB1yJvSo1ykyKngwaLtYfPps9dL9dE9n7NiGTvD7GohjjZ7CbF7HPB",
  "key3": "37bAvXsWYFUCgG2KeVFdCKvQtcQYX38gdJgDWKHJyrWzLYAW139ooe2bZ3gndbZyuiDR4CmLNKfe6Q8hKeRUdF2X",
  "key4": "2FNq6rZbo8cb7wQfYSCm12SQScswTxa9dgpMftCnevDjXknoZUzCbsqrRUFFKvZ7Y3NKpdFz3UZnB4jH347F7QFu",
  "key5": "33juYN4R7buZFqHSAYyjzzsMiMgHoXpRMuzeaNMNFwmbAXYgVxittZqarykrcaJMJmjfjXxG8rAa82z2d9CzCrBx",
  "key6": "45JVsgDyf45YSeoBYWWpRuE2pjBx7ypjjucgJZVfmbVC1B6zQFJu8E8A7fvbx4J7HtuzHj6KrcmJnJCAYwHCdoZT",
  "key7": "4hNy1siD97ayC4wDLsPvW5Dn8JULjdAnUrTF1oZcv7RB6mBKDFFgn3KqxkUxj6GKzcWdkkAXLD6FzBA9m1eksY82",
  "key8": "2xqWQkcwVgGxqwHA2iEBJ9We545qk9aa8ZbAkR4oaCKHxpqeBToLSHfQCin9WjMfE1RgtQYBjehChgV1TjSswhE",
  "key9": "4WDax86NH4HRRfxxsr4kksWZ849ENfwRrpYbVQZLgPbzF3mmdJvfbaZusLT5JSm5XCR7pqkvoiRS14oZUqxZZUS8",
  "key10": "28LBasi1UDgBk23s3Bo6xcyruRSRbzLfU2HMMBmu8ZCVgBiveTsJeJv8Np2HRTR3VUXC5e7uo4GTjHPc7y8fRLLL",
  "key11": "XPPgFB8CEq2wrrRgNGv77ik1ahE6MzmZi1XTZmdi7c1XHfF5EFiJyVc2E3bs4oqfRjYAr98Zd5tPjpaKLy1UyyN",
  "key12": "2PKSybBEv1ykvZ1BQ6NyivdgHhXD1acdTPBAYdK59VUtQupbjABzvvWxtLXYQh95PA3rECavsW3aVhCkCiqKxH4y",
  "key13": "4CPPxxYHiK8YRn2JJychZrV2oK1xF1fbUpCz9fXhNPFHp6bm152yMgRaTpKfZpWueKA7eMLUJXndDFdQXnsGnFJG",
  "key14": "51o8XZmgDV7WAqhrx2vqF9pzgSAWWQy3xuPiR7UoQkwaJwjxsWBDgWGaKzR9MwdFkZh26vRQfSyUFa5RxEpH4Xxj",
  "key15": "5F2iY3Xg2PZd6gNakeY6U1TrEvXxFDwfx13TDsqtsUpqUH23t7eP5bUyUCvn7xwWVCwN5H2V5wfL7JsMx53zpSoY",
  "key16": "g5hmadbC785aaNLoZ6hZEKiwUnHrBwKMGzv3g5sXFR6aNqG3G49Cc4SrJm68eLWubT6tJ4mw7xgQgXXqmGanqks",
  "key17": "4upCrECqDbJKJxMmFXX4Yp5fgXCry9GgmiC6f4UoSm6C9aq2PbXfZEieLe72bCJpDgG5xBXyyNnaYAs2zLGZZYqA",
  "key18": "3tLKuS4tWFiE8DoXYbbtY3jPp8iaQSf1EiBMECE6BpkGgrwSeJgf3V9etMYXcEchJ5GNp9mjZQ9R9EcqngrZ3EA7",
  "key19": "55JAfxH4wVgfbKFhMh694eHGVNUxJ5nRf1moC31tS9gSgJGc5WjbgEH3CtDuy4SoVFzrAdZgC3G5JYjRxsgV8wYX",
  "key20": "5YyuemYZeiJJCffYosTFFh7JdrZ2qjEam9yUxa2Vxf4fhsZezzqx2ynLgu48jD4pEwYABoi866h1Yr38WrRJ7TH1",
  "key21": "Duq7mwJkaT75QXhR9KqDGeyDTit8PhEeffDdcsKrN7cbtNceMui1kLcSmqaEfJHAYsY74FNYjRnzUTWrvSGuBKU",
  "key22": "5rQjMiZvJve5fFn2kfPp9ybJ67yiBrfp2xFBS4zUb8HLAZ75iFGWrqgmhgwthTWontVuxsSAqJY1B938Y1WNAvg4",
  "key23": "3BW4i45pXh8fgy2kVkJxbd7ExKrD9NKHNHdfBi2mzNsKUMqQLUuY9tM7V8bdTcKhfakym9gptdkyreCpHTss7J3z",
  "key24": "3WdnSJp1ryHQJG8afsU65UT7EBxC8FdTzxX8MVwt4kgtkWPuX427wvkis5rBGQVs6uwffn7RsUS79h7XnDNvDYXk",
  "key25": "5yKCXe7wb4S43tbqtYdtXiQCGDNSQhkLjUgUddoizEvzpdtEjWkfz6Wthv2aF34D5F4zAZAH5qXjKqZFmGe4zvTZ",
  "key26": "5DB7jfdnUPtG7kdpK82AEHLkAdiJCZsv56y6NFxNMoCRgyfoc7b8n3Kb9PoLEszNNRBiEummJH1Sf36kLDjRWd6o",
  "key27": "5c37MpJAe61Hbt2VR1bzap5X5VSCqd95YJ7HgbX51kop5GKvAT1qNpTGHcK3UhF33bYkn9gSSVNb4wL8KgoFyf7T",
  "key28": "43rLBRBzcms1GgrS2P4qJSHLTBCkV7RjkhnsSibP5GdR9QpvWrYE1v5voH13xzPghth6bx6qpPaXbhFUudWqZYyB",
  "key29": "52FpXogfrN5stZfxZvTkueeAbXPXJCy6ELfsQ51Zzv94ZczqzFFSLtaDvnZg41XWZQf8cNEM9mWqcVJTdZKuM48A",
  "key30": "3HmhdbuMJ6Ye2cBb67nPcB1xzSCC4ciJA56JYptGLaqjqqMryJgnY3xRZTq8DjM72rbxS6GLRn4v36nmwjrccmPC",
  "key31": "2xhjh9Vu6mSPdts7tUFsX1WNYEjt7xSR3RFsHVVB6pQXDbMDbBiWrLQR7xsycuqX6SSK6B9TQ3krEiv2Ds67kJWv",
  "key32": "5rjjxdcY7JvJqGAvUsmpdB1KE3YiF85w7YwNPpCcsZG23EzEdaAQQfXsSFqEXWPxP3vLvV5kLqa9du3bBwNsfh3C",
  "key33": "uSypt3Cn8kXgDazSFtjpS8AcGAkjPfXpFj4ErkxJNUSFPc8czFxLCKw9Qoh1pCS4Ld4d3RzBNVGN4f8VHcifxeT"
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

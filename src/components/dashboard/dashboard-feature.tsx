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
    "Y18nB1U59EVFr4BBUkLGhYGpie6R7EXrQfPUgcKomPq6FpHiXfqp3XCbDFrQqsjLh2NhWKKCR94qTh4fz1MEVM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELvMLYuJxeaKZRMTme6c9BPnjnqsAEtN9rB8deCnuAvfHfTUm9nDzFYzx63Su2UL6mQBeTLfqPSkypzEtfNFbSY",
  "key1": "2rB9R9UGmQA6ATqphamHKWkUqZiCJG6jMu8nkzDPY7MyuUBZF7vXxDwem3xaP6jA7NGuuN1Bv7qmqxaDmMpdABgR",
  "key2": "csiSHscfUxbVF9jw4bYxcxxW2weBqwNrECTjXZzWyDAHEPcUdXaZgwpEsRmQaoDscZfrH36jz4EcS1FUVbsH49v",
  "key3": "2pk18r52dZg8Ny28rbk4vcpRrrQ4mcpZpNv4hotTbtSv1MvQMENvWRn82FhLayu8ie75bfg2HJxaWhXmMi1i1fi6",
  "key4": "5yb9RUPaHYkCtmo4eH6zUZz5RaRwQajkE3cfVSXmTeUfPg39Tav43u4RviGzbgX1EjJtcERP9Jw4WRaS4Bq472v1",
  "key5": "62GvmbfCnojPEJF7bAtFJZ4hprNMvUj48aSj8DNM5ugoYSmqRcfKX7vqRZab1wxWjsX8uw7qYVJLEy76ENSMwcDy",
  "key6": "57twgJmxuCK9n1hPsinQsBNRouFLzZBdXPV8wqVFmSEkD7z9mbWbbn6WqNCecKFgjG6mnYVQ4T6ag4cgw9mZLDCm",
  "key7": "4dV4sBpfTCHA73BTXxq1dhN82zs4WRG9Z8vFL13iSVLGeWboiZoYLfEZrC3PwGUePnumeUscst9x9QMtPbfk84b5",
  "key8": "5BGR9oj7yUx3oVVGPANg56JZqLtQUYaUh5Xi8Y1uXV34V99VYVnxUkZmWRpBEULFvU7WLjuW1dKWeXzEM5oFB9W7",
  "key9": "3vchatL9ZEe8zoDFGJZEovjZAKzGeFqjLPmaCLYP3YVyhAXwZBG6jnM6KgpeDz3YukrYaXChmWy55X5viPSgYJ2o",
  "key10": "37UX4PNfPjHk8ycXKhTLFyrb27GgQPJw2AwojpFNGmAgvKDgXWv2QSLgbCvLcaQjFMJwS8xA8He3NwXfcgaPNPuD",
  "key11": "egGGENxFsBvrJZrQFauRwi8UD9xsKvUa6bedrG71RtqZazmMZvqNdncBYEXhXm377Q4z8Pf8DDM54JGoB554arG",
  "key12": "3yyGPbRRCEKW7PUa8YZDptivQEP9K4FPKbNPqgE4pmVaYmS4KQ6THoffDJbyN4z5fkEtqeVHevVYrvSNq6uD5kvL",
  "key13": "DuQvgmS8seDvqYJPcaCUoFAe31SDJ8tpLUTzxJ31pnqv1HqP1N6QZ4PRUpp3JhhmoH6yTQdNyUjg4BaghiLeW31",
  "key14": "oxdjjRzh1Rrak1c4nQom3fKAKm92iX1YKtCQrpetxDZ94SxYqnn1yhtL3KjjxVwgPd3YfEN1n6V2P2ipcED5hjN",
  "key15": "A8Fe8uucCxTkZtgvwoPR5Rr2YSQqRpyzQ5ASEego1xythRQhsqmoU1RstxonaLTrNo6d9Nhfwtn9mhXUcvfUkYi",
  "key16": "2v5nyzjxci52atmt2RBdWuzoddxc361aFDeZbeUsguc1K95ot7RcMftLcpipZfdgbBgKwLS127nsBoS9Me8B4JkG",
  "key17": "2V7eqMQKWqRHmsnuJjXoXYVdYnJ18SS7QNxY1o78W3xT5onwnDEhNoAx5sw3pSQXRmohP7CWnhY8yc6e9rREiyFR",
  "key18": "9APsfUhamQ7g1twnjCcZoStAG1aU5sSrXKgmVP15KxyT7GPcYmaWMow9QvY79u21ArT5zHAfqf6vMXrme6reE9d",
  "key19": "4MEWiw3YNhjQJgnjDYJZC1aGZd8Zts8EUsqk9UaLtRAApEkWSE9NVQprKbeB1iKuZFU6MvgRuq1WiaM66uYYRWj6",
  "key20": "2jKQizM78myfSg19S1HdPpbuc4UA55H19BgyC9J1EeiDCBb8JdLQefTeZpPiANFQtRfE3Xb7UTDU3NgYJSXQFx9J",
  "key21": "543ReaKcApJK3aQCAJGTzuVS8BH7FVGCByrk5gTZv77bqdEXMNCpjFJ7wo1gM4dFxPGy5kCC2wBZ4e6EqrdV6XHw",
  "key22": "53F6Q1NZGJpxBBepNe5At9Xaccv9UBtJahFQE1qkwRh2eQDsTgqMALfNtNA5aWKu9SQPq5Cx68t8T51Ln9yDgYvt",
  "key23": "2SAnqr9WV1zb98tu5P1DxrGy15sASFo4YzhnJcrw5FE2fD3r3orifaorUNDhJSpjTia6QZatY8NKmeNNGDVkMXaE",
  "key24": "3gUXbREvzAFVi4wbYHoTr5Kip2VbRtcBHpV84NzegjrFi31hDcd92SHdQvotfWm72rmnHE8FN731edYxdn7nevBD",
  "key25": "43fDMYKNGs6gCcfvpMbrQtPuinNjXvKswnBucXXyJ65KY7bdG5ebbcbjbc55JEtsj986LHFMatrJodySvuQ4D5gk"
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

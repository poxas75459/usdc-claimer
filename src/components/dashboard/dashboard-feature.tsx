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
    "128Pm8pJRQLq6Wpus187y95Q8tqSEuTrvQDh99zAnyWECjp1dJjyDUzLaWi1jZ3Lm9TKGTiAGVE2LxwydYZWV8NM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t5TgsG1TKfVeacLvBAFikSecGbiAgGBjgybYXsYLGu6RsGFXBqNqJMaeK9uyDJjPvTsDwfz2YQLZpoiViqMqJpB",
  "key1": "3QXhRUYy2KexquqxMoFf1jEhDE8H9XWSkq866DgiErKoSeojxEAQ7AJFYHNJr23fsx4tN2MHtFmtd5n9mqkQHdcj",
  "key2": "562iqcWZFQ7mpw6wZTgSHDpAVDX2nD2ofHZRGz2c8ZMu5NFHqqxm2X31ezRoZaQxktixw8yPUtB6qbVycbFHF15R",
  "key3": "4jZWkSCY53jaJbJW5aHrzxLSV6r23Ef135AgBBJHb2ewQCW93JNcRkfLUmYwPEhSSaFCDzbvqngxGeJUVXLJZGF3",
  "key4": "s7j9E3ruj893gmFCTcsFryQtfNa7RXrV8qDJNT6oGhsoR9HR3AJH25gi7goPhHHDKt4gLokjmT4jPrnKXaBEsPz",
  "key5": "3WpLJvVXGvxLDAxMwgyyKbFLYFUGXcjf2yxk9ggPrvN5Ncfmfr6uJHKB4MUPr6MsjsPP4FGMzR6Jdqm5dwyV5nD7",
  "key6": "cRX5JJXTsstuBbrcDFoD7Rmd8AvjgaN9Zk1YAZXPVQdosqhP5ogJhy786QAk9v2h7j6XvhZoTCdMoz9T6YKTwzv",
  "key7": "2shYeX54aktgnWYQBYNJqB3fP84KzBufPRKxu7zupfVQxKkYXoUdNpeMgHYkfJ4gHKBaxnczq3Jh21DSBtovASyL",
  "key8": "T7GMBUBe4gzFEupCHeycRXdbHEgYU1ZHK4dR5EzyFAr9z5ztJyYayc7oceY4vLoKErzyJzVgNWcYT4jpEMBMmmm",
  "key9": "3VtzQqX5SGaxFcZ8nFBSVDEQfiv8gwbwbrtysDXP18UFxxiL1NwPg876SFE5rbaXHi3Rj2z3fRbJ6UPMKm2toVwz",
  "key10": "eRCRw8r3PGRuHc57Nh3AXUaaQTcdJhq5CAqHRC3X8T7FkZzuF2d45rwMyTXkKccfwL2TiPn4nJXeP8hCv18EGgp",
  "key11": "2WXuACm64huhBKmDD8ydMRX9a9Wso1NzkWQq5XkqRYidiYYcqFWaQYPkwvYNonV4exF1cvrFoA7wFiixh9cREf6i",
  "key12": "59PZxXnkfKvXXdLTpRjMmugVPECgoGrSiC1bGMaPVSmXn84LdhgdUdEN6Q225pWLzcvi2oPXVGmBUvZX2dgufbfh",
  "key13": "A5tmCAUUeerVP237Gmg3jiLWm9sGgn4oqoViGArBw5zjsKhigWFt9gDfLwm2nptr4HQ7yVwWnxU8yzGqFDaxYK6",
  "key14": "2eTHV7nJdyYBF2SvrGa7DjGu7o3phG7toYd19tuusMnAhU3H52FRxJkowCf9sHdJC6o6uPqCfMgnJb6nMKi1MApR",
  "key15": "4WaM15RHQkQxe66PDDvDm2o1pdVRw9bVzwUo5KBx7MMF7HEgRPQb14F6Yr25wjFoV8GRp2itNdEHJmNkN88QxJqr",
  "key16": "26hADcuDzkcB1QGrDXTKZ6uXcmBdcSqnPs1ddBTYyud1KVUWAnVgdzDQBgLGoDR3K7CEHtaG8Da8C7FLs7EJvkdh",
  "key17": "2XhiNddA4FjWxHQFPDTyFE5C1AMy4tDhDt1h1J3jV5ms38egkGtL7ecrfaEnq8mr3QiQaYXCWJkNxe4y48pJhKZw",
  "key18": "3gC9nBAETukBXPdeRf1hPKTU67wj5g8qJZhPGouXrcx6Dhz9GekKipnQqapoWYk17eYKRi3XG4AyDRPesTw4fXZC",
  "key19": "6cFUZ5DAaWG73zmYqnc5h1nDqsJS88cEKyY4vgXk4mWFauwY9oppXX2sBQnDezcxdhPN6qEsrkjThHrcnxLu3rT",
  "key20": "3uFDEPbvbP2nC2825c2XWJmbxbnGm9m1u6d56rN69TEuA951knCsn3V3n5NxEn38RPNyCvN5tvK1UwAFJ2hPJJhK",
  "key21": "47D3GvprJAaCozyWwd8M9gpx5VEt7PQMSduou4ihcs34W8TFjfAvLuJP7f8V15y4p2fmu3AYNnGaN76FK6evLZVV",
  "key22": "2fWmoxEVYS4wqa2FoT8G7HPUSMoFWj4fwRw8Wh9FkXfHuh5eVMpNuaFEeFzise7SZ64XwbLU6apHePCK2heAchrT",
  "key23": "5Kr2QfAvtBcELoPBfcxo6BMntqBbeRu7fRjmY2pU7yxENabr61Ba4ts5rApmDTCUxnHoHBxCWiUUZcFUm86yRaNv",
  "key24": "4rBWawMCL5ihcajRPLZhBRw1vSFBgCtrHXtFfFUZPFwCLnyL1WhHxF7UANSyxHq5k3DctPVqDm7yEUY1cSnwBTUp"
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

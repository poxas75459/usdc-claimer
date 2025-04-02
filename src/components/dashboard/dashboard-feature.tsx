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
    "2xTcuvrAm2xDDuANABMRjfzMAZpChF3oCa6DmQNzk1qF9mjF9BauzjEUzZkkNiVGvGVn2hSJuNWdX9V8qt3zWvVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFALUe2sMR2oddxEoKfWcHE6W1WE5njj8jQQcW9372Qx8zHgJ2bwL2jUF7au5CtkCyRRWoLk5oVFirMLHd3uqu9",
  "key1": "ZUJAht2k1VU7DEd2r5hCTfZz7xVkc7fu1L8QwatrMnZSVaFo9cHPA8HCi35uaWshTe2dyMGvs52eSgcDFPi2YsM",
  "key2": "Zr4ZL5ABhQ45bLtx59tzkD2e7pTc37fJgX9AwxGGzQUDi7FNFxD9ousY2mMhHcSv8RXQ2rFFk8kNMk346tnNvUt",
  "key3": "4HDBoXrwrdJw3sPBCH28rXbzDjVDjEyKFLJV4iHrHFNBhTpKaDYBzoQhJ9pBY44upCP8CQxURuo6puuRzHDpNm5y",
  "key4": "5P4c29ykyubfk8MSjeQCVgzCaNzbvd22c4EQZMwYZbCd1r4VZ4Qejm9UmHSZ1BLjfXS3gk55LVKLtjtNDKBU6yc6",
  "key5": "2e53m9zrkGDcZyhcPsLr4KsvygD839DSf6tqsxYX9PcuhBcPJxp9WpQYbxgrXDFyu5UP6mP2WsSPyU8qLMzkczdr",
  "key6": "XtnUsjkNMut7H6yWYN3dAxa8TBeiuFa8CGQ8aG3F52RjtRhqg59BDYrwhs3HHciH5qE4jVXAMkrzdPs5GvMcMFm",
  "key7": "jqPnL4P2jQy2hgw6J9Ku1pGGNie9vWAkQXcMasY2uhZFS1y5VzDbUe6RWoQX8CmYsCGPq3WiGDwY9rnjKUgTatu",
  "key8": "5jzF2oPLwQvmLt12ekiCd18qbWn7HsN5uNANqxhcSkwGwPWorwbRSzZbpDKZdkVcZ748EUpp6qvVzFgrN4RMzAF6",
  "key9": "2rfkK1XCMck4JXWctekmEKvdAPJpzsudHmy2DFyZU1px4jtXgPRWSLBuRU6vBRt3LkN4DvCwfKV3yPgBhi3ZhN3a",
  "key10": "2JXjzURHrQX7sinWutKDVhLrmUhtVRq66N98J8ryoq8pnHvsyxbJFQTQWGhfJM7VqwUM9gjTAqeCWWdDTBQ3QKKV",
  "key11": "5kmS8WQXhfcGgyufCsMaL1vMC6Be44EdqjGPu3qQzpuGU9GD8MaWHnBwQU99me19GnWUGiSL13bbhYBGUUwSd1bA",
  "key12": "4ovP6wkSBLevXtrXj4tDGbWU5DRV3BYFAX16CcodT5QjUtYeN4Jb5YVVFHa7WfQTZ3r7DxbT9W1Dk7s1APn9ivB",
  "key13": "Tjy5pinJj83WTpckFhzMaHafp1TTPaVuqhstyZQ7LyVBVmmkn72NQZ2suK7qNy8VHzHoHJ7yUJsKd8yLKoCCxdr",
  "key14": "2AUg6zXkXBL7CAbjwhTdKFCsXyyDX11TTjuzyDqeNCJh8nLwrGHK2kdcsgkqS4zfy2gRSExv1T1L7VoNusjmDc8V",
  "key15": "4JXVGQoSLor4xdS6h9JsmVsNGrn46gVCE4j1yyycQod8ZwMX5h2kghpLfDQVx56L8WpjriHv83jRd3frLh1rNCxA",
  "key16": "4oucnX1dcq7ZHuXLwHA2Uyk9vJZt2RzjsdWzBPwBCsavmEyv6Xei4CWD47t6Xa3yFfKCXhDPaQiZLcoXmDmyYqpN",
  "key17": "42ddQb2r7pAQEERXiDuHMaLV7siUDKa6qKjY53Cb1ekSxDNKKT9yEbg2PbKqkLhfGzZPgNF7fCxhwUSGJtxy7Yun",
  "key18": "5bw3V4iC9Rya9Hqc9b8oYYmA3HgWzvtgWLFDnqCYUFfKybirwEnyjfqr2xinWAYQaGVvLM1xf61PdTwJsauUBV7Y",
  "key19": "4oKkq9HoJks4WnsoPaDoof9XyWiyMZjvpQBVSbSjun7Y5YB8hC1sRQyTcpiuA4jCvneGyxFSgaxBhH1WwQhdwFKU",
  "key20": "2uxSbxXbXMsEa7EnSGwyqMFm3hsnJ4vBu6C2r4sKmcNXbG6JEH9LUpzg3WStCHefSzP2nZWe1fAAQYDF72ZrKGre",
  "key21": "2iyxeTQpc63nRywzobvPSrnY8WRKLv4xmZmdn9WTQuc8oZdLv1xAAZ32Bv5pAkaRoHiejn7Zfks95AHouJo423p8",
  "key22": "3sQvFDKL2Ybwn9s4dgKUe1cok2FWVdN7DMKcwc5RaeiYhQQmXWqnqKxkx9g7DcedmkgnsRs6sN9LB3VaWpbrHYVg",
  "key23": "5FRziwPRGgDmViJEuTiZs2DoZiJb1J9ZCoK4AVJaL2siH9KEpWyaBHUEjKBjTpKB9vJxvhmygttD8zbJeKPWqN3j",
  "key24": "JwtXQwEwqSGJ8XjNSfzAUYm1Dnvj98Dn9JBgX7YeMSj78Ec8v6n1SQD7TjCbhY1MnLXggvJtv7NSEVjrJow7KVe",
  "key25": "3WK8QNaPvJ1Dg3au7g88DTCguwJ1xH4bEhH2dT1CHTLetpRBHHtiC4yqDNhymZ4X9RSu72vGTG5iutVBjMqsaXxt",
  "key26": "2EBZdcFZV8xmUWTZSLhdaH893fKdRh7C7Eo5q4AqMKsSHXdVn6BArVHEUVWaz26TyzpozXGP1DEC8oUQsvXxtSHq",
  "key27": "3ReAHNC63npburNCuXNTQqne184SLB3qqDeRSS8ZtLh6evqrDjpVG1HoEm3NQK3HNZCn7yAzosk4xyRJHBB2V8bJ",
  "key28": "NfVztXzvNRKswxPv5szrpGSJgX2Qb3ZYy6tC3FQtikqmFPxyKv3Ffi9WTxaSHSozFufG6hYnotS3rnrKjYaBkEr",
  "key29": "28n3nnyBPfSWbYpavwdVAxhJzfwmPeYWVE62UKUETDJLEojaN5utHGDYDWvVUCLxzH85xiS77t3KnNBkZyt1JVU1"
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

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
    "RUkrdo9JrX5jvP5deqAQKXSCVMzat5RwQagU37xvFtf1Wyfczbz2EakoqBRXsxot6Jo6iuhHvaZf74c3BTHF2V5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E2Gpm8Gf6eATfaZhhTQPAL8kJUMwn3Mz17EJepCaKwB1qKQFwaZmvCPwvC8XTk33NfC7Bka84xsa7XkqHXEyg4H",
  "key1": "2V2jksoRGwQ56wjFhghceMajZb5rMnUdQbueTEscDCUwZb6shFYTx4x5Yj3i441G4Gw5kCzwXLKhWLas8mqQXPKj",
  "key2": "PJmSfwbQZMzracG9fd33C9NaxcW9VUiqtvJtWPVA8924H7VsXfBguhFxxYNkmtRFoqyH7rzJoHWDKFbbpWL16HW",
  "key3": "296BjRtQqwyY6Sq135t2FMkXVq9gWBwHUMDKiC4FHz9e3qZz8p8a5ZEkzj5zLattAJAwPuycfRhLCoDiMEyyPgsC",
  "key4": "2KJjMYnKLr5gTtTgHpQZ6fbcLoHicwTMfmD96WsHmeFj12hLfEq2hAYg2gk3kyRz8kk7rtNxAE4q1bsfUDVfapBW",
  "key5": "5z7L4hdGqjcGQq1vbAo5pPwMsByisvu3K6DFbs55xFf3ZzuV8uMqKLy1MiYAw3VS71Neqo2aYSR1WbSUjQAke9yo",
  "key6": "44Vwkahc7NoZcy9HZvKkinSz7z7ve1gU8WtSHwLdmJJ1Dfkx4q7aJKTyri4zrECNbDsqqweiDfJbke2FnXdnS969",
  "key7": "8VGHadBRkVk3qkh5cETuiftKMhVcwRStJxvWKjrnjAStBcoTdiXH3UwCr4StfY2S9gKrDMp454981Du1AWFEwjN",
  "key8": "5EXJSs8AhnvDWfAbZreg6jX7UD1Lb8G2J4CXPoeQfYFP5UQLkPdiTdHonjoJJkMt7NrDcLd3LFN2M72zhHoAavTL",
  "key9": "dxqUNQuLYvGgZUvzHs58oxLuLLErdH11Bdxa6Ady1iB5PQvuaHWKBqbDhM5yK5MckfNTB7T8DtwpawjyR8Qzh2Z",
  "key10": "5iw1Wf8xCXvYQfcPmWmz9xRUVSJSrVKdcsnaANZ2StRkfAd4zdHhCmriNB51opqtmYwgKaWJJXN51wyZimSsJ2G8",
  "key11": "4rB1nwAsediPuTMSYxux3rv2uF9VK6aPHneKNzqzu4eir3StZd8JE4HqFRP3tKSqKVzCQ42fGGkFmVnymyMhaG4v",
  "key12": "3RUsff6c3dYBvxVFwACNd9ihiD2XC4HUmF3DJzXfTPYFkiKJZLNzTv3fyXH7PUoL3DvemsCjqwogUM1BHHWccHSf",
  "key13": "rhMikjsZXGFwf6V2xAWz4Zu7fa2Ktx6MWSDnDH8DqLwhQSDvPJcmU6w7diW6oE1ZnmovZqytpVMfQNpDVU4F38P",
  "key14": "5xBpVHuVCFQKrxjJuszFQn3pXPQ9ReECKGSXho2b3BcKZnRjs45Z5i4UWsEh31jjvthGZkkkDj7ZPg4a41L1DPtb",
  "key15": "2sNPy8g4b6EVHxrjGq2LoxZ9CcJekJTydC3T1FTeM7muyy1MtA1Qjmq4oTEtGje9FgCW9DVUqzMYAkWwEFiWLZpo",
  "key16": "5YyREEuVhXoAdkCFAKMg9bqLoDRA5cCUYdFNxC4gZgGctwtcsPhDQDJZncNaSLLgTR39SRXBJmAsAb8R5EM3XiPA",
  "key17": "4wjaGc7xUeyvpVtw9L81DLUuBrDDukFtm1FLAuQj3ySDizTdcgGTTMsRNyP1SFXuRhZikD88gbUM3yVFbkHqzFZc",
  "key18": "4VqgMMEWJLJuHhNJ9TVsrTq9vHyDUvaLcVFvEjdPLcTAU24qc27chDy2mYgRcjEpYVQYwAv6hGQyTncUfVcaX7To",
  "key19": "5MH72Cdmc9A7oaqMwecTJd8bUCTQXG65wCpcHHx9SuGMYus4JWmHSJYrNy2g2pATWZgFhpAHBYPxoZXcrLQ7qw6B",
  "key20": "5EjRbtTZq2kURyBGcwjKyZBDT2UKeDpWaGcNgLr91XvMFzn9CY1zaprwUL1fAneLwsQgRyajWAwZRahdF3Esexke",
  "key21": "nhDY8HjwjmPZ2pR99PauKksipHgnXApFfeEnQDccKvyt9BcZyKgRPgeG8aSRuUw1BLAHWTGpS4gewRH2cKyDGdb",
  "key22": "CPFQJJdEL6Da1JQAXekHJhPda9D1RDTrqmtuKnVeQrCe65fmrNyELcFvYZnwu1cvZ6qqGMGNuPTS99ansdDDdSC",
  "key23": "5NddUPaRYEnrBw1E1WhXjdLTqSuofMG2f1U1VWFf8Ez1UXa7aAPp7RmF6umghXxRd8GnAhdM4MPjFUjPwSNoThGt",
  "key24": "4VMvpAUnWQmQgNvUp7FDg1G8sXPUn17AoZPgVqBiRHuw1HRJPCD55zDKZ7iXLMk6v6fCwMV3K21MCxjAYTgjFkSV",
  "key25": "4fNausAobyaCteCGLhZUaZg7y18u1n5GVSMguUwDttCHMjKykhjjNyCoRzio9CcMHmqG2qwEspGejgp9NoiYEpYY",
  "key26": "4oerjaH4gowz3TJfX3JTkJGbHVq6EsnwsbLfQ8geYRjGb96asshpB9KC5vLLmF8uF27av9m2sYjw5NzUfkYGmKMe",
  "key27": "5FyMpP8bErvGwHsSr5gRuaZHVV3vnzcRwfv7b2QWS9LKfe13W5kkmh7QcbRtwidfcKv9PJWNNt8ZyJM6cKV8rQMp",
  "key28": "42SX9DsKjE7Lt8M7CEFdN1GpvcK2nhEpFT5KaPSijorfGaDdf4grKbsYiEhKsEy8Pj5oeH8hx5NqsZc4VJK1hha5"
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

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
    "2NgzzEwwNj6KT14zm49MFZdeRLbgPvNQPjPbNA5cEaCznWpaeK8ZGuWqdVkV5v9jy9i34vV3oM5J9ZPUVPG1oM1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKWvZgorBWrLge61ZGEqrhcqBPbamNMuj4APceUChAheuikNChZSK13etHP3GaghsDKk7GeyvFtwUEN31BTNw2b",
  "key1": "42hdoTb6BBhGbbNdZ88zjdVS4awAC2WufuyV2mNP5QCYVkg5dT696bFmNVRYmgocRPocidFYjYSWsQVqgP4F1zVM",
  "key2": "2mRfRHgyEUAFzJVX9uG4AUuYk6f9mzjajiN8waGFDE4JMa8zFi5MGnjWctsnKZkksqawYnmiZKyGKvVz3dsuA1J",
  "key3": "2QkgZACqokGqfvhUZsTztuS4XfhKS6BYki6D6xzeThe9qRXJdrtebiYtwuPKRAPR17godWcJfhwhrmRnPfDRmw9x",
  "key4": "42PxH8JaAnnwv4dKEa8QmJr2FQzy67JofZc5GErCdX13wzwi3DAbWQB6q7n56Fyyx6PAyjsmpSnjNdFJTh1vuVep",
  "key5": "3SpiHvJcgcTwemM9xxbt5esh8xvHaTyQwzwDdBNeJsCixz1ykBphSp8R64zLcsRiZc5eQXjtaetYCdtpyh1JVD1P",
  "key6": "Ceq9q2UY5BeG5PZwpZLNhznDqXmGSUKugbvuE59aimMHN7chTpxxGYG8itELTip9jcXUDHxKJd1RomX61QZjbGE",
  "key7": "32ihHcBnJDwaf1vwyHE9Ez9Hzy8rDD6iJCrPr1qpKiVn1hwc4PLA9sWE5Amy99FyhgtzneszLWFUgVtTkdsagWA1",
  "key8": "3UWHNpgkRCXE44aiQjR4bx38Y3Ys6rajNVfqSSeGrVmGyCaGXWaHhusdUNypMFSdzhE58wijvaRrC1bLCBR2KyiQ",
  "key9": "2CbyjU4XCqcC2MRi3ym3vZ6bgBBL1QTheJPNqB2mcFVJgut4DRyv6a9exjmPtepWUfEiaoanZrvWUFXWb9rn6ugC",
  "key10": "eJUVF8ThFNQbP5Tz9CmkjJZ2UJG5kqsMwJTi2KGRRte56RTZLSEgCSBheQ3c7J9bjimF8cXbsjKKM9wkCJGmWRu",
  "key11": "34544iTZomZurnrs8RD8dFC2BbsaPsVSg3tx7jmpEnmmSGHSLkzD7zMMFrmLXfDK1ZRZcZGHkDzFSYQ6xJ5EcJLh",
  "key12": "4qDEnqRu6vSmXSQmTkLnuc3E4ZtNcV8D5ytFrWCkxuB24bVMVxpfKVE3aDG2gGmkZKtm8mRVFLySeC7SMrHHVJeE",
  "key13": "37KB6RtayeJiWYo3ihaAVC9WGGrYzshVZKxHn4jwGnXk9PsYm3se2abswyKe1s3kgDPnsJPECPf5N3BzCLXHj1c1",
  "key14": "2pCyi7Si3Gj876VE7En8rASnMWRUm1FSz9yoJDuoj9TzoF7V32YdXcNhjbhNVhad8nC9jSTduqiSA6U2TkCxWCUV",
  "key15": "3SPvbUE33cBto1G3dP96g7vaqiF6zoBWzKuGjqZyyJChhvgEe2Q5yAX9Vb4ZTAKN2igQpW5bXGQfoh2JCa5QHizm",
  "key16": "57WoWS8sjXtNQgyYxFqa4jnmNAwtkWiVDtH6h7j7cALjqbqDcDN3nZxPmCi8ukYQcrdjE7MkgocTXC4MgiZg9u3Y",
  "key17": "3ByUz1gvpzKkynRBUsx97ajUdZougb2wuHH6UHinKS9MGZ66gCedgwzPhkjmMeyyvhZZJLwsSgXfYp9LTyohKhJQ",
  "key18": "afRkcdDDabthJRX671XZAUwBAYQUqqoxfHcaWZQGf5t7pHhgRyERexnNpbk6cXHAiPpHQFcmMPzRGFB4k4ua7Gm",
  "key19": "2vbykKpZqu1pviqqSP1iFC4eeCWNnBNHA74QhS1V6GLj4KK5BQypKYCvZYtRJB7b7Qn5MEtgH5hXz1NkamhXbKni",
  "key20": "KZ8gBPyEDAhv248x6f56VtL192f8hnok9efrGUcP98jM8NduHYMbGa1nLkV1nqofcZJiqShCUZZLp4Xs56hQ4j9",
  "key21": "4rjWUBkTkCaFoUWyzTcUeGze5GSScHCkTxTzmXjtVnag1WcfuFgCe3YS7mTdvFRx9nFDHt6Fktiw78g4iDbxv2hT",
  "key22": "5qeA2N7vdRHALPacFzd45xcgFMTrocLUAuSB6Wi3s5sTPwm6xs6LabqdiRgXV9mZr3vUFwkCpsRG3pnvqXukZwVP",
  "key23": "3xyx5rm2hEAdDQwjv6MQb6E84myd1bTvkHcVyvoPTgbi75iwRMx7gpmsrZatWzbUUW9ndfXBNqqXSfiuwRBXQmMx",
  "key24": "28za65LZWn6RDvzaN3hvVdJvUdJ59dkouC8iXmqx1LQaoKuQ4eQDuDzRDFNQzKDBtvE4FJrQ9gNrkXNT4DvP2ooL",
  "key25": "3jih4eQGDLi3AYYEXHi9bUzbvY1xkgftnX1UPXiiUSFVRAgronbVg4xULvVb1d1ZgrerXRoVJ3EmF36gy4K58K6z",
  "key26": "tWUPBb7PcEeprG3dYUV1HWpifygzyChpgfxW5Cr5wqASmXYjiLJoVoKn3mAZumB3MLRLFphdZsGZ3gbFYrEFbuV",
  "key27": "2g7GfpnV73XTuJj1sM1QkQQ3f1v2NHmHh7GuncGmiaqG1YA93NiVhmE3TQghBkfKUua5KSXpNuJkHwKyuYNdL5gA"
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

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
    "2TCtFRptDkVAKrm41Mw1i9WkkVRqVDzj4REqatzq7UttDS1ezEhiKtz6sB9ZyHFtBkyrVVS6uoFDNvXL3JqEh6mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BoKuv6Scv7JyDxaLsBfvtFX9tPYFjytNhASrLr7QTmXYYJ26M4T22in83SeEYkGD4Qmf5dGmKFpBri2AzNoehhE",
  "key1": "5ACMCNZmC9Mjo7kRarUqnPSkCh2AELHyeJeY5mSTC6CcmGv2fv3bgJadSLYL7VNXoVwZknVKcewk9JDwurH9NE9q",
  "key2": "4XfHDKEjvcAxhVTFxCfYPbvyCb86eQScwmkWFHMFjvrti1kq6osf98tadfxKsfBQQ46CiwiwpzJDngEmxhu8HjDv",
  "key3": "44KHYS38b8n5ma83BgajTvy7aUFmdG6JUsc6FYxGaFGZR227Eb8zJ4uTtdkoxSzKLmTRaW28Di1jP7Zn5KmmhJho",
  "key4": "2wVjujHNrJCG9NU7xzUV9LW7H9MJVbpjYVPp1sQ21YAj5fpMgAF4NQoMM3Rs2fJx87wFFnJP3pvTqoZiFpx9LNjb",
  "key5": "5S7ztxHRb2rdpmFt1dgBp8w7HxugBq8EHVcZ434cVLsjcS7dRRLxGwB1CoPfyWUJkC4ka2obkjtVdPqmGP9SatAr",
  "key6": "5jdfganEtZ3FdAVke2SJkDpP7rXTGgfDh5AtjiRVjsuXNxgQvd2wFRAM6tJEENiC6FQbHv9tVxMmAgZb3ivxiwnJ",
  "key7": "3tJotUi2gS9WWuKx79Gv6hrgEEQViKX8jVAUK6797PhKbKJs2oj7shvNXPWEqrTujwHdJyfu39dqjuwxN7n5F6Ec",
  "key8": "4FCjBiu4dUX8mjqnoKTDVoBMdPksmjU6XxiRvsNcJEKzKPVXDESyM39RJqpzpoAR4Y9haNTBE4Zas3zV9f1T8cVw",
  "key9": "44zJppZJJ9B3zS7MVnrGCvw6j7r5TJWh1XMKyDHmetNbQWTZKRv6TgyNH6mhd8FFjUWa3iMdhRok9Fzka3yFGiVK",
  "key10": "4Soq5srUYFMBnYTV28Dg6tjWogNqbXGDVqdRW8UALYyHJ8i5fF3sfW7HuYB9NpqnXgzTifezgShbzc627XGMNFyK",
  "key11": "5dgBytLzArEDkDqraBUwCuocfbFGmi5Re4bqRfcxvvWabGmLoKF9iEvj2bdtGsHzD6w2zrBTuc5zuMQcf54V3EnN",
  "key12": "4PM5YWVs5qwBpQ2sQ2SGocDbj936DUfkyLYUHD3eMFey5xi6C9vwKwMPhDjiFcek4gZvbuMP4zguS4eHVnYHqiZu",
  "key13": "4ttqeBR3tQ1riEwGHbwgQf2wV4XCm5Xfr4LkxYbKNPsFB2PGNTiJb7wiLkdiyBzKb2UcgdesUYPWjf16N4NqZVQ8",
  "key14": "5i1XffamaYmsfpNfAAWbKWexPA8VGfWD75e6rozbpX1Ja3pv1L3uPjXRsmj8FTAnUA82tEJYcnaLqnrtov35ftph",
  "key15": "bL6NNACPPpaTYEfAwo1HbDwPaWZd5F8cLNjkWWaXp63bhRr3DCwfi9coML76V2xFWG1dhR6PrJn6QZ9pWGEV4Jp",
  "key16": "4VJdJNcnjeJgVva2dYnef2K1rAxCV4nYvfajjzDMo7YisA3V8gGq2Ghgy9zutBPKi4osmEAb39jGhD4wkWvNuVAf",
  "key17": "2UisZdUksnJgybveumMrhVXEcv6ThpSTcTjBiyiGaM38SETBCUba3HZxF1M9wKrUqCZhCks1q3YzYvnNknmtARdX",
  "key18": "JE9MBLGv93vcBrPAijDtwqfpD6yeyc4QJ1LbJYnuADTycsmoNE3dKgHpbWgwbR986rRwSiUrgNg95VHpsPWdz9a",
  "key19": "2QRi8qwC9Nd2PEBj7N5js7NskJ8BHweZJ5FUe8kncvLjnzqU9jcB9o4ciQ4VAyVE1mzkoDaKe9Xj7KFiqVVxWB2s",
  "key20": "4iq8439UXZ8fYMm2AjgnxgFGSGNU4y1DT5y7Gox2Zw6NFe9gKxyTx9QEEU1bjzUTEwZZaLLqGB6eZF5yq5c3GMsy",
  "key21": "2kAioKbKPSHhtwXi4Sk4PqyQEVz2q9ZrggtXToc6Mhr89KWQaDXMzXhQHkVpYL9v2gUepPmoZTBYheYnDRixZaL6",
  "key22": "3XCgB8882WUCf2tWY1zrQNpJmndmXW5cEYVwrZSiXck3YEAyHCsrZusciGYFbcZ6s2ivju1yLL95QGj3baD5oDEu",
  "key23": "5rcyjrvTnqQWVmgK5VYZt7dbwckjk7xkp7hCz66BPB1ZUN4VHd9bDsRHZTPLspvMBB78uPCysNy9soeJnVGK2x1r",
  "key24": "cqUzhtXx51amaV8SavxTpzv8SU3oXNzAQiLe2m7YzWSAQBpLP9NPfrmtQ4n78mb7TcVv1i9fBjJ53wj8knxA7SB",
  "key25": "xB8E1YWw8zYcxVSmgjF6NMxr2VegivkbsvLy3dqrVctaAZJQbMhSEA2CxTCwJAZTrPuBmVzbF9zLAZ3Wfhiv42n"
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

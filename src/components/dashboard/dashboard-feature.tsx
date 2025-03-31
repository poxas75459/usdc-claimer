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
    "5FYcDkYLDMKY6yy72XkSfRhpjYn4VGcD3F5ubhYVG5We7GY6Gk26t1b6SNatNneJ31XfuzEp1DcoKX2uBC74cRBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jQj4eqyW87XhQx2dtUt7sPgTq8EtQDm2dXRBWLxp9Sc4ViW8JqZzK8gGqaZvhZHLMZQQ9AmAkWktJ17nWqdbwA",
  "key1": "RnqtQd2ZF5XryNMuRP429bzPckTjhi2Q3keZxiAqD3UsJYBZgAD1DZA1KCtNfoAuYivqdc679QJQUsDC1Lm6cNj",
  "key2": "2xfNHX97fwi9avCGoyK4yCr2yHjHnnXwCzmhEwMFTBcnmqj5jEMrXQSp3m3joVpAtxZ28nAoAu4XXmzhhLHrVvSp",
  "key3": "bRyZdu3k9qh1jb25SyPYgDCpkQtomfGGmfM5Drvhu5cWY3fZhTADi7AgLWsnKNBpYqtVpSG212RjNnyDGMTBvor",
  "key4": "3kVuvfrUFJQJYuBWvQ2bn4Hvh5wQHAS1GC8neL7H4uVKLfcxyQLZwYDeBGKoRi4hX5SjC7hWn9HFXrRXThv431J2",
  "key5": "23n4qDRJ5BLepDoD2UDh3qnkMR3Zt5SwRQpk879cMjo635vgcQTGZxvXbgVbcS8qRqqH728bDUXo7DHnsc6pSGgc",
  "key6": "2nwmkGkXPEhDrpKJVrRomtWJk6RgSJaTPYYyCxaBky6Bnof2TFHjZgJPCb3mMUj2nuzKL2taUVWq7GuXWYZQW89A",
  "key7": "VbeTEPAWLkTucyfkf2FfFSgXcUNNpkxzeBom9WPpbQYJhpkK5BehX7o3UBQDMW9NTdbr2UJCgs7SzDXaG3sRvVA",
  "key8": "3buQWCZcp91fYqMLqqwjJ8PACeumQ26JAayE71dXFxFQnk77ignibTuZUYCZEKhZyYxFjs6ozNrzVsq7BkwQyd3p",
  "key9": "vksc7PjJuoHjVQNxrU2EBdxsiL2bjBcHer1qbTN938SpbDJ8psmGRYFk9D1a4VB2vj6sBcxbbt6Zus9GWQsFudA",
  "key10": "4znnErNg9JuaSbngLwXWXnSX1EicjZ6hZbKZgLvi6fcSN3vA5KiMLTmXxqwJj41WGSRfiSUih4Yaf3unCbp8Qcmf",
  "key11": "5MHDbAnzfPE7Xop5PsLu8qfU8dHdSP5aBQwrpqqDP7ziXUmATn75H3TsrhdkZF6h7uWfq1uzJ3CfPdEKNREKT5Wt",
  "key12": "4WjLUSADG2W8LyUsokc7fLsKZ7WLaPZqPjpKsfMfZY5586jPvrH3RnxbFaQ8bgraJgMn2xg19fH4QHq4Rytnhn5S",
  "key13": "3DA2kZ7YVSn8spZxaYqx1bqjqYh5wJJb4BSxFi82FQhAiMnWmxjVfV35dHqVnnnfisTmf2dfp8tagcfUq7yXSUNB",
  "key14": "43hKKk42zq7MM1a1xWsy2G5AgaBHwy84xam62eTdzWmqNLEG1ww35P7UGsigFZAEmrQiNVCFjvFg9bpWbS4jBjyy",
  "key15": "dvaPE7xfdy56JgDYNzVJKPBrJtQ3qdqbbeMNoHJt9dsQnGbK9LvsmeTGFPbKrJXjL9D5EAZBnrJzwPGxF4E4m7j",
  "key16": "57QKMARXV9cEg7mb6HwBqkqie2a4rHfrg2Tr5pmxFJLZ5aMPUgQcaLUovijqP86McpRDMmoFCsJ13m1sGq1XUVCz",
  "key17": "35U7Pach6i4hFs4YFXhdPPAPrvPtCPECCLLv1tnAAtL5odWupnJNmSRhBH7HVMm6PSAe5subquoXDMkpZR2Z5pa1",
  "key18": "4gZgaTXC1jXdQqWMzCLyduxua1cM7u4orbmGy5QUHmUGrpq3v3Mtze9Md5L3XpbTTagEnyf3gkEhHZ4Ye8V7R3A4",
  "key19": "5p1yix2T9RYRuuJkwjRLd31PZsqjAmDcviFzPptUP3MEtU9HrPsJq4nsu5Kp4dJMWsnUGTMbXD9AZXRFGMCtfb3d",
  "key20": "445ayooSEgVQSFPd5jweRtQfrFawgdpHknraKdjfG2TVErFDSTbFbzck9zA19QQCaKCqN7cFy9k4dy2eYhe9Kbwo",
  "key21": "5b8TrdBaWdVpaUPZGDsR2V97REkt51q3iADGHV3uZ48NaTkptkC16XK5XKydYckyq2Y92a54qfodHcX5LDaU9eym",
  "key22": "8GeCfc6kHTnQon3GjdbeU3dtHB6WjrdjXZ2p7shoXx7MkioKegBqtf9npiYRxcuKtLyuYUBe9hgmfSoDmpqnwTA",
  "key23": "23oRfV49a5PX9UiJ2Yo1sYaTTKWbAAtg4Ts9YN61F8PQRvCvHesnTHqfiETeenBS71iEgALemEZiL9qjMSyXPCVS",
  "key24": "2a9xidRh54CzgtxYwJhfmMmmUFYEUekQvWpjQyiKxTXAXmCyQTZQ6Lwp3fUY81GA86iZTz47LwGukyqHFv9hkeCg"
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

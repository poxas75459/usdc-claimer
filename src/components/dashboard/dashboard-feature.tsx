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
    "3JXiEfs1RHHAZFwNYKoXnaDzsGaboHB2dV85fwMQwspsHTMidBhtXmVkMT5YjmiN3R2sZBENTZYPMKsEUn15c8Qc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hqoN7p8ReTE1VJWLfwDhrSjdN84WSKmvuaJPcuixnYhiB8v8AJq9VUknfJgjwpaw2w8SWNZ765n9KWfKw3excRT",
  "key1": "48NyVcCjrv1FgMkdWSTMAtg3NB1bWqLi9Dqh2LEEWmbBKSvWd8e61NdYSJD3ed92sP7hC1Hpde3xusitUF8uuDDu",
  "key2": "59diFZBoPzzZDqsHsxHnUEoPip85WYnwLQTG7ASZsfSSJyQdQxk2AjbfnvLEDoS1MA6vNNYVdA8FgnX1AZoBkv24",
  "key3": "2AvNkNsxfidTKvJ2VVW5ntKCPnh8jPuiPzV8bUFwqwzhGzrfPAtkvZhc2CsDBiQjr3J9XSsz5Cs6isH2FminayHG",
  "key4": "2VkaLmc6QPJBmoA3tjBFdSUMRkTTGMb8RQ7dXSHgZ83pYfLFBaeUHV5kACKhzbneT59T9HPmAHx2SXaUPpJYUXMV",
  "key5": "rE4n8EV3tW792rgKfJBVyDXZrSBRBHDUYmSFdqksJb8Br9i7RMi8RJA7DDhbevokCbVCAGgKF1Vc3r6W5g36wQu",
  "key6": "4ci85sGYSTcnpmr5QyoaEKXTcv2KJQN8zEij4aiVtbtweUoX7aU6W7pCYZb7rjwaE1N76skqo4CoWvDy6yyWFaYj",
  "key7": "27rcRgzrfqCdwEB2QcdUEmmztx3W7ahENguhdk51ThjU9FSP7YctEj8etFftnxZyWREkJ5KHEsTtz1YD19Sn2Lp4",
  "key8": "3MLmfMWLevNMUf6tu19V9oDSmzxrrEP1DCPT6viaz4bJbEbJZkBRYChqzCBVvkftRWwmwsaB8PUfwWvhRNM1hGGG",
  "key9": "4WVYjsTUab5DUoyLdntXzsvFD7YSSLSfsmKyDGYctaiTxESEiUL3LQz2qLSvs7HLiY7jvmo8svCBDwkdbY48yaYd",
  "key10": "4q9ZfByc8dLUUSNt4ydkiv31KEkKtoVPCa3EvtbnaUDeHSGCs6usjFNFtFBimpDdGbr9BPQMTRv5yJNhimVbo3F3",
  "key11": "5AJoHRT58QKD8kzppgY2rByoeFh8rdUmmBZYsFMS6hVkrcH5eCUrUi2R3mTUXSykGSFfeiQsZSPz4JFwAENJ3rNm",
  "key12": "3cFSkSW93Kqxa2M94LwVzoP3Qpx9k6mRgRhxD45wL69Qjsn3sJr18NA46bHMuRm8dQSiKtvyDYXbnCVaDk1XRJV1",
  "key13": "37cTE37PWZP5kcuuMLFX843t69wtKN2EbRDTDDbZcxdq2w1rU8NE9pzr8c3Y5Twb2oMGpXSrgYJAJRGhSiSSZ9eg",
  "key14": "2A4223pZsCv2gvdexHyANhkgDYiKyCtzzfbLKVyaVJtLUy3LKULYVFaYPVfCmSwa1fJU4dTXwCE5i8ZfnN5yt9bN",
  "key15": "35VW4tPZherTLCdNrPrGCEmGoQ3q238YTcU4JkWT8Y5d2xYzWjvdiSqEoYMLTnwTiZds1VmEibc9BJMcffiotfqs",
  "key16": "5DqWx5gMXFw88kuLUySXttBJ417sRXdwm438QK7HofcQVE7yVaFJaqHhy73bb772zPLy4S8KwsaodYfZm76MVNEm",
  "key17": "5ArXZU1Pb5t4oY54XMTX2bj63T8naPzz51kjLTv3ASsJgB7xhJcEUpsw2a7nKag5hwPF8wRF47wCMpT1NRDWHSfp",
  "key18": "4ePmZv3DY2REEo6ehmJokoLJdMyrffC1dhg1qJ6BQ8xJ2xTJc9qLcQxSKFSwgHMXZs3CLDzUHJZG6SZGnirRFa2y",
  "key19": "2dn2EA5mCkwDXf3NTiKzr9qRnraUokaD6FBouLezXWdL6gTDPgLzWoEKmm2ksL4Hmc5PccUUfzHmhEyEnReo7JSU",
  "key20": "4mevJ1nWc59apJDkPEswSJyt9jU5pHq6jy3FfvYiH88VD6Re4uE7GzCPSVDoo41HET2KBxUvPFFkJAA8rKSWAjXt",
  "key21": "SuRxN4AMxNocQTRoWb5W1FnppfXHGmoM4auzWGSwmExrCYgd1zMzUXovZAUNJMU9aac9d6smrKynqAQJrsKsLko",
  "key22": "ycBh6odqbmeuMYkN6tNRAxcACCpzsf5tDyCbW5BmNoYTKdR6yVLqnxvqGShgBRCVfQEMqWj83gD24wCKvA1UWy5",
  "key23": "4camZ86bkQ4y5MT8rsn3G8h9HKheyKfA19Y7RpSnSoGpw6YR3yPBNB9GENZNzyzqXdyDkfayrR7bSy6U4LoYDNCF",
  "key24": "5W5tpCa8D5Thjc331qU2TTkiPRnVwgyMVUffjBxKeiQWy3M6LyzhzuCCqqUogEQ4miAp55YZv5S71EDt3VTixRFh",
  "key25": "67C3Sm3f2sdwrNGJ9qsDqnT7ZiAx1XhymCUki7tAUXy6GRdScuodJit9TRSAdwhEYieKFaCGiZQF2DTwZ4Nh4YxB",
  "key26": "4PxQZRMYNjdQHPbn86cfCyNAmYDt9jFQjjyDwVCv5bHGtak7eaeyGiKowmTdFM1ch8hPXj2Kysd52ByZZvfoXvEf",
  "key27": "48TwXtQEVMn2etgS6tVMRM8Tb5HuEq745CFeiN6ZmPGwwFEeCQCmqicu7NcCBYqd75aspq6bgy2JkmdSmmR8QPCy"
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

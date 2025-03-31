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
    "2HAiiymPCQC9i6HMTtC4z9c4DdCfkkrmVyPy8jum2UPgtKFZoo4j4Lc5YvwthS44MpSqmffThPe4jNXBPLTRYxtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ffdm2Q5aN9CzN9XNnvwqkQkMuQvMi3sBrEMnmPYP1QWDaLvmBVMZfUJGCzpkqPyPLmvwdJCXcrBJhT2gLvGNcqW",
  "key1": "5Ti4D3CM9piSbKLvZPh1xbcQr47RjuqYRmfHyJkdEYTCwzXTHHvcixqnEBoRecWREpxaxRz72yovvoSr58ssda8t",
  "key2": "3ufTU6h5vSPoeRr5GvrkheJEDDR48mk6uzvvbE9kSA1y5GpYR7YYYAHubRNcHiF2LtVZbbAJnfxQpYif6exsjYr6",
  "key3": "2vgfHgGDKAhRPp8PAmMUCP1foVNmK9JKttrrPTwk3z8iKpBjzW4nwe7q5jm2LBzLD2ECLK3SHhBPbrkqS3Xvciaf",
  "key4": "P1WCe6czkAynkopTmvcxdNDHJMMjBDcHKVw24jYRY7W13wEu7UWcGSG6nSSEP4Ah9z6ZgK2jzjeJaZKJXbYHkz9",
  "key5": "2nGYHMrowgcsQ4AipqmDMCnvRtxGcP2zgAGVgYzy4XYMHTch9dH8vigMgURu9QDHv3vMd1YdQDszp8QvUVtEWEeR",
  "key6": "3odZfMDFedLXNtL94RxSNGF4FPX77KtAXTwuj3FDw9ZPAB8t19FRNoG9yJGUZZCsEeUuPfnkquo4mfHqLc9q5ftJ",
  "key7": "2T9kkapHh44pjxcUHkVdoufAyDwK2kka7cAzrRP4rd8GyLntw3ZU5n6Gju8tYenWL9LzPLbU3cPE36BzgRKvBmtd",
  "key8": "3zgybTdZqUfuoxX4YThXScj3F8WTSKd6R6cTWGHBBkgEA4fHVwgZDDJctnPp9ycbjvPPQeXgqBay1wZzTNu5cMG3",
  "key9": "3vqJhuY5sSCGzci8eMBJm3qv3VdyrgQEiVpSkaZeJ1CKZMQ6g9oB7QPBMBVhm531BQHmmsD6yaJ2Zwcpvunv5YmV",
  "key10": "r6xhkfJFP5Z1QCbPyGx8L5nv3ViBjyywNHYodAH4M7owLYqL5FCpqbe1yY9gpBASDDQSKcV6QswXLyZG17gBMKZ",
  "key11": "2PaeA6LMFHuCrrLccoabAUfE3RLPKUxZtB1oW2SK5jLxcWMiRhVpBXRz3w51FGKXFwDP6besWmgRDMG1DxQk1vc5",
  "key12": "5zJ6jcgzSAW5WvaRPSnuNiEPEoQVoxAQqRzKvBsSG8G6BTxUcUTXhzyRhv94G1BLVLyPLqAiczSgNgqHJBTgWTcb",
  "key13": "2ZqFV6A6vDNoQoME5Jo9oph7GL13YaWZj6kq7EE3ygALU9ucwYoUGfdqp49sRjVyevuPykyyns8F7CFvdj9t9qcr",
  "key14": "42n3nNtTWogKtVLUKbPz7kosfMghR6Cefz9TELUSwjLeJ9qaJbMJeNhnnQZMHnHiM6NHcZAFsYV7VAdMPgP2TW9G",
  "key15": "3ky2X6Gxxp7vY496ZiVB2rQWs4QdbTEdSfguZnuPtzMAucvvJ2Jhc2ZXBxYgeGSAVmfR9B7wFCvxPUpRGebiAs2L",
  "key16": "2wseziZpFQ3bqV5VwPceAZWPvRPv5SdJ2TaLP3ctJ7fNHBQwkyVo4UVUjoDRe3DRFDPqsDRpYWfPapbCFCJPz1K3",
  "key17": "5Vv7B4SvaraLDKkvFSwES2JfGEoRAYdrb6YpcPxN3gFNZqN5qYUDMzYvyWRmxSCcenbwB4HyUcoMCNMz2SpYNiof",
  "key18": "8Vbk3ykayepU1817TPtkd9Et5tfTkoYMXKmFULzUqaNgWQeJPLMbq3P3PyFhXbu9jdCC9K2FDTPdV3cYsuMqMwG",
  "key19": "2TGHjhJdCC8Ng8qnQMhCzsMNKaWZLUA5KsZU8uBbhUu2Ugr56JENbJQ6AjgCgDYVF2v3xZAjnPVxvBU7NPqpaEPM",
  "key20": "5sJLrWMeLfsSjPuoBorzbFGnuzegppvrWXPjKgeWpL6v9n9k1M3xiATtVAxk4xtZKezMp8Tx1vWXYXrAAVcp8YnS",
  "key21": "5hixW61H9WDMDm6i1wfyfty6Cr7NMCVtiMXoduPKPWan9idXmHJMEKAaiZCmS1cx5NGsWd5aFrevZNS6UDiW72Pb",
  "key22": "5TS5HCGDPjwTRbgTAcjrmATkzG1TpUJBCEsc99isTZX61tZLERs5F1kCe7YD8zb2pKDD7z4FxNGwW58dW3W84EmN",
  "key23": "3Bt71v5TjETBuYiGV6ppViyKf2fk4Z8Z1N4iogS4sG3ZPUMkytzFj3APxtQJDjUzEFEdBMJufTk9H228GMMuS2pu",
  "key24": "5LJTzQXUYmdKPSnAv4VFi1MZSR8Geuj4zkZVhAhGYT46DPdPwXTSF35s5VHq3CqxS1ivaQPdEF1Kvbwe2XnD5iys",
  "key25": "4FcXhQ5NwhZH83UMzF4mjmbZrLjHF5Pj8ia3p27nZ6dgMuiTCtb3dLkSvmXXKzvqkZMPKux9B16s3NsuKM7kRgkM",
  "key26": "67Q8k7N9vmS1LjhVxCL22UBxiu6rjUTNpCUZnrJ7kJN3qQteXXWcv6MZsJaeZ4T2rpvTSXNMTFssWPfws1CKxSxm"
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

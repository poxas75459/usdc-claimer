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
    "69K876aiXRYvPUv3GZZ5BvccnigowJJuhSbTT67sWUGVm26rXp6QtTiRyhuAjQTT3eWcsjw2tqpusfYsNXsTX8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyNnJFbFYoj5qFEb2Ss6fUPhKdEM46wv88Rag5DmNyUmQMnNyDRRVTwj1XQD8qGKMRyv671EjEXUcLMGogi59tB",
  "key1": "3EPsb4eVyrQr85v1P6wDuBejWH7M6nPWuerRFDJW4VBJ1pXNHDouw9pftrHdLyDmoszKEu5Akbjfx741JNawngBo",
  "key2": "Hnk5riYoFyxEgz9xEqABhJKgm72Lo2ABbwt4vMRwgsyFs29sUdUxUxKVoai6sQRvfBy4N8risDDiYTdaWKkcXf8",
  "key3": "5PTxu4LtQnJu9E1KBwwT2FVCKBLYNbFs8MyBGgjNbS4eouQR2n4LWzXr759itcjFUH2vb3DPSq3YHES9xskTxSQc",
  "key4": "2eYqSfMUpEab2qyoMBdwcWeEcVAChwUjG8zeJrbeJSBjtkiUUNZ6XdH9fDJKYyYDUmM1MuQtkFazhcnV4QSdvrZs",
  "key5": "3f73kjxbtYyUUgfZrQm68uU9G6H9hqJ11GQ2zYReY9Kmiu6bLtonWtsj3p38Ysm7uKZT6YjXpYt1Cr2dobnHBMtN",
  "key6": "N3Zef7rHtSEL9RA9sg5E47RvoYoKVJT5wXQjXf5YGBZjL3ZrSxhxrjDV3Hk8oYqSMDviJrHx8bPLGFES5Fygaom",
  "key7": "4HqUvmaVNmSo8thspegisWCHmXcwW6S6CyaveqTHggpuNyXapXhyFcfnYTZeQ6YBtfYiMVD9rhdTgxcq7wBpTcBK",
  "key8": "2uH5UXgRcw7WAfFwwmG9dj9xXAEUZpRUqbGij6xWyKaDwavXUCMJMvETyqJJGa86YqdzS5Msb3Y7PoXcNRjDPFWB",
  "key9": "4s6P4i4qvMF4AGsJLoVYr8UuWpqKEix3hsDfASC3rSXbDAk75G6A62jGfXvmKsMx1yNcmPt5dUBqHkGGneAid26k",
  "key10": "3TMwg6bGbqkgaK4b5xLeZb9TeRbgzFfsF1D75KAmvNkTcjQRNzQ7CRcNUdHHR3RQAssivCPUdoaRtxTiBxNXTgUj",
  "key11": "52GbzgXs5M2minxjyuwSUytZJ6ecKW72wd5htMvAtnHAyUtX6zWNPhJ6ifQBUVFpxB3haSWzqViQCgKNH6bFvwfc",
  "key12": "4ERUpxouHiSiU4d8SW9oSWptEvW9SBfZ76A53hCZRUVwxi29C6uQzKqsQFw7oCqYZtzfnfRicZPrRQFsneQtxbWk",
  "key13": "5Txa4boMEUqRkbDizccoaJ7ScFT4UPdax5iCUwy2bS3xrA1V15gqGfbd7EgxKL3CLQG2qSqmtFAWPJBKKm8bdTjj",
  "key14": "2rzuzBQ8mxk9ZRnzB7hNgozEgTwChrbnCRB3AA5249f9DXTqdJTWLWyR7rBvwmLUSYtqZvDgJuXYaeF7PPHJPWA9",
  "key15": "2Pt7A85hZuDioZSQ5zxJtwFnA8WktT2voXtJnqSJyUjqLybHXE7tYT3xoYTyoMG6wkd8BVhmPio5LpXGR5Cbf321",
  "key16": "YyqRrzma1TfUBkarSyC813RzveWPUSdjSRaX2vsU4RLDX7G6bRnZc9vGVtG2Z2sZyrL1JCVuxb2FsSfSjhNn89B",
  "key17": "67pppPuoRp7eigbKJ1VBAhHMazKiQEyFgtAHJ9WbSfc24QmBHfHRky8CH29Ce89xfdzyDP6aitZ6C2gYASoExmr5",
  "key18": "4riHkAjWvVMGj7zycNLJrKeVA5ZsKqKkECLnk5pDWKu6E7xtEyngKr6AqMfPfaoMmoTZTP3GxEDmgPDRDiacXQ26",
  "key19": "3gQyH58VzGfXfbo2N4xpsfpY73S7HurDbAVKBPrkYij93EvoE8aVFvJhbjj5W2zs7qbfFiNMy1dyDoc1HxeR8R8F",
  "key20": "3Px1SeQ9RarhRG5pa8cTLqkwEDJTJmTf8YaVAUu7FmuP1oeaGMaaern8ZXSrubqPi95NJVrW2cgMsxPEAhY9JXkC",
  "key21": "25WznKWj2YmGC92tJ5YyhokcF4HwMpNiA5b9iNxdXQY7Hjpdf466TkzALDcED3a7VoGFLyZX3vMw2w1TxmJ5QMrU",
  "key22": "5gHVnREfYBYvTyBV9xRNBr2xDmmRdaNFzmi416WHonkafhyDe6tGWBR8V91cHrQv1vN3dJVVuzBLWNDaeUhvBY39",
  "key23": "s168ZYaThkVxZ2aWobaXjXj4a6diNv5yFP2StbNHJeqTGamd5J4EntKRTACWsAAMHghVw4x8mJmgGFLz3mHfbud",
  "key24": "5ySy1b825RRCAg34S2eRaGv9hw7XoFF6QFLzLGacmjS1x6BiGVGNgrQAk4io3RFPVd3DVWgc6HZvaob4Y2dGzdrt",
  "key25": "4qgUTkDLNTrZ9pJYhFpiMr7YuySpmRF7J76kJqcjZge8vD4USiYFM74TaZHJaY2aKPYPRuRzfV5xZzApbBXZ3kmk",
  "key26": "585NHVdKcBDK67Vu9azJJURZvjtsVoiQpNxBVjA41qG22FvFzFWgKfb2eYhV58gQyuQx9dnnYHBFAHHZfDwjiTgK",
  "key27": "2eo6WbmQzxetDGA7RffdB53PHkt8NV3CNtVAtZZDLSbo6FSXyeJE8JSmDNYQeSfrv2ahM9Xt6ME4U3driZjhAuFp",
  "key28": "4dX3Sa9Ke3ovMbs6GVWzFBq5e31BWXXnNUNsjLnTR1FdQQpNteoJqJh3mT1s9XcqnHaqncFkXhvtRRv85tFNLShz",
  "key29": "BSwcz4RuuPJQLJNeVzhFxD5FDMpEgtHpnusxgnW71U7dYcP48hm82P6ivQ84W8MnmKDsw6kg1bNb6cUTniuB9Ki",
  "key30": "3Z4PV7ESwsV9qn9VhVxD29pcPh7KQ84aEyZtaXpbonmetzN1BsCnF5yDhiQPrBZ1f9dANbxNkGcqe5pJRUmnrCV4",
  "key31": "428YzVr89YiWoM6RmK6DE1nQW2cThuNCc7svBQXwoy1FJEmc3SoyKKYk869ffdSUpTV1FttVD9kbpLkbze3o35VX",
  "key32": "3kWCBuMS2AqBtBxBfXYdpzqmFKipsWYZnMEy7D2qLRHw3RGh6kcHKZ2A5iwAfqMYeWfzjf9JkHgjxjTJ6CGmQCW",
  "key33": "tamDMtpP4yNLnwwE4TBKVk8hv7NWBmHHAAPeJ6CjEAXheV1AkaWdvV5W5TSCKkpTWeA6esj5koZvspV3A8oDVUe"
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

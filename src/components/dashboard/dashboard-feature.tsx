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
    "2H3WqvAchi8oyex7kLuTFQ4LfuwZMSjHwapvBy2vkfUXjmVrK8j6sZHQw4sF9X8yWNvhP7dcecuDwAQvBsTW1apf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S4Th6XFWq4E5kKaSMVSnBr5wSrArp3V9c9fTtZaup1DFhTeta1HoNbudUbvoqy6fpCXypx8ph8qBaoRA3V3vHMQ",
  "key1": "LT3QhS4i1Wia3MP8qQFg9r6gKZC8Ur5ELSjUJZjkehvw9e9uGjLoJU2vykorEr2deeAHaGQaRnAN7KmpKNYtC2h",
  "key2": "2txBXurg79RgPPMnsxoYg9b7Y8Z1SyZ6a6GC94fQLwyqw89R9L9w6Z24DH5VhP3Xqsm6TUorThND2zjnhv8qFhtX",
  "key3": "2ttG3UHYENVu9vFeMrgpCdDBeZHTGx3sFJWF3u17niUMBcA184edhbRrgX5bWb8mwXT6fZyoWoVo7r7FXMabDeuY",
  "key4": "5C7bWyuGSsDDy4NesE2UwBoxyHNhKArDo1QJpgpUbvaZ9XhNRnByJB8chLs5CkiWqXzSo7EBDMzQi2cFeibjD37c",
  "key5": "3w6YE5ip9qHZUJcYC6eyxfwryc8Kmsj7MoAMndrAUjq342T4EsBt25vcwxzhjfoZ51CJtTZvNaipVzwYNMjpXfsD",
  "key6": "kXXLV8ov9Cspi7qByvAKSTh4fXEmuV18bEZrdj1z9d5cm4VLYXghkvFqDph8oGwgPQqUhKwj2ysQYJZypqk9fAB",
  "key7": "YVJheJ9G7ha5qPDHxsysfkGPGnq8sDowruqEu2MAYXr34kWyrSU3nsL6q74LMU3buaJrDRswNpDtv3Pvv2dLqVe",
  "key8": "26TycWWPAEFqNXL9cYCrsH6itNe9UugEFmTNTajaZcx57311Ejm3Ax7sN86FWZaXt8uoAbeyRRSLXrXikzpm2VHh",
  "key9": "3Lu8zkCLivRgreuxYZYP1MDKjrbYXFWAeMoWmySvMdMXdy4Rz869KGUR4MYq8gjw1YNCbtQzvPa1zvUkBW4fpys3",
  "key10": "4Uopxd2P2XCLJA49dVC5FXQVW5vWLwrhZujSJW5QZtW6aTsvduHtFMFmqV7h2kw4tkQWeuKjUzFduJqWS4D1qMr6",
  "key11": "5rPQddM7fJ4mBRjs729UHwULCbouVmMLxAqKyiu2cs9ZTBq5xLVXr6PgyUs63aECkJP6wkkXFbwhbzJ1ErXgHHeh",
  "key12": "VGGRdZ1Q7PaaYixUKFBjLcAMSPSQUYk5a6wohT85pJcfndnGMuaPrLd9Gda6AUdP83WRBkper7N5ahAMvfNwUv4",
  "key13": "3CdvicBQfTuvHrRLACbA1psdF4EY5VC3sPAbYsdh9uWPoizKpLHMTTzroKDXNhJ1pWRgUzbJepJpNypPx8hquTy2",
  "key14": "5w4S1Ukx6X8wMCtZ8K5jDb3S8LmBuivtkwNnpvJAGqerK75DDpcesh1iiQJy4abHvDkoNt84LRoLN2vyworxZdZB",
  "key15": "5SSVGrqVAiZ1c3KNTmfmp9FbxNo6TnXgdf3kgLPb1iBnFyZGvF2gDPH55xyhHtt2hpGeknEwcGCcjZUumm8qEMsP",
  "key16": "2jDvgpytNfTqTGCszPdbReMfm9uE2fa6cQpaP5cPSNtsUmWhXimjuzp3ymtxxiRhYWLHkb8pgr8bJzWRKxMYjui1",
  "key17": "4KoP3k5WiGZR1siHSYVejXkig8qu2DqGhaguaaF57qohR5D3rvBMZygzCVzFNCJHeiVXrW6X3h6s3Hc7TRCdj4wY",
  "key18": "2DsuVFiekTAxF5yjF8azb5VXJz7HBSjownWo6788VikiPqngfXV7SSWKZdHNCGWnZu6d8Ep3eZ2zw6stgAitFz9P",
  "key19": "2ypSH6p3Rmv8rq3g3e8tB1AByYQ2E1MGiZLe6uqfvzwdaDVqbdcvdda9BPBjgAVw9ExdKek58yFFtThsp3muZJ4S",
  "key20": "5veeTYWUsZWkpArr9t1xc3gfc8CgKn11gbNWPWWSMc7f7DXrBwz6eHZ5hXhUdhQwgPEMU2jJWgmDirzxqrzyuxZw",
  "key21": "43bGrpVrpzaZew2mHVo3GzRfMPVfmWG4bYGGHmptXVN4iRYYCYwW6aQ16Na59jDNPYEuQfcTZmQYZXjhPUFTnMF8",
  "key22": "dWtAVg7o9zUzCHyyjDwXaxtDzTHVgTKAEgHoRNEoNfAntnBtH731G7vU7pmqnAAW2QpsM8quFMUzamqpPerTu4i",
  "key23": "3yQ37JF4jn6iXnZdtm4fzeVAgEa29yWkq1puEbrDYHBWxgCUApxZqwWQiLtq2hyBf593HvF4icWgn4dYRs1cmbyk",
  "key24": "35pePyjrgbSa4B4duxE1ottNdk6KDC3DfUUhmXN9FV6P6BpzoGwqCjYzPJdZcTAzsU8jvmMRagBDHLjMK7y7XUrt",
  "key25": "5yZdAM6CySg1zN9rXhTAbKhqqKL6EovSK37MKTErrjcPkzxMzNvppunc5xaaA3KFKsn4eqwc7Kw4Xy4seKSWpjoZ",
  "key26": "cRRBjGsat2kGkcihvsC7RBjRdCc7JYUXH3Z1RRYSWUyZCNofs1fXWTopxhMdJTZ9poFCEHEDPhKSwc4q3Fv3eqY",
  "key27": "5KG6ULE9mktf7bj8KREgfsPF1kYUe9QAihtByvLgiBrH5qYr3pLti1zWfjCsx5MGNbFrG74Kay3mGLn7CG9c9dyd",
  "key28": "2fxw1RGgpgfWsmb6sgeeCyH5axWfHxnQnWpmFddToaqsUDg9ArESDuwzjzXqjbcHPxVf77UX4uCtD4bzNS5DJVZ4",
  "key29": "rE64h8GahR6sWUun6Aw1XDs6GcX1oQVx2fh8WjySkzV8Vik5sa9RfR67h5xTTQQDzggsd95uJhs1peKPTzbYwxj",
  "key30": "5RKmFzxXQdmndvRiW4qSd271RMnZPZhXUAAXSNbgohuMm4rgxwADQaQT7n26iPXpptsy6aJXSxdKrXhotiKFTNBS",
  "key31": "cKtWYW8Jk637W2DSXBpGoD6nLQr9CrgwAqBsUZ93oTW5xmHpU29nkwjynvkuMqc6CvZwNJ8tts2vaKE4vwjUoLe",
  "key32": "928jMYPRJsabog5idVuSgqnqQqBqdXqwC9sYwLFgUAF5RYp5UpDPsssdLsaX8be6nUyCQ2fR893yKBNfht61UjQ",
  "key33": "nASjtXJEruJL1D5sxuThCwLHcRuGiVtxiU3kqnWYpPHtdJZU1JfiS2oZrRpgtFCxc4yscCFo6NDfQV6aTjgcqTf",
  "key34": "aCcETYneNBj8aJuibSoCXfsPeZtrACDeTx2VNv7nJWk88oRHW2RV3mQ8JBfnDbeNty7GGznEGARMFW99ZMFs5eu",
  "key35": "4rUciFHdH4oPSB3oxxxEECKDKv1g5VEjkF8gHStD6tiagrf7tkd6RuM1F11mmzmKJfPDRVFdEGvVmKMu2cEze9gq",
  "key36": "4rf8gUif5qLge8PQcDQsZWryUC96ndWyteTW1S3w9Xi3AVRXW5DrPDdQAZSNEyvhbNKDBNDjodgnytUA2QShDzyj"
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

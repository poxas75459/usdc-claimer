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
    "D2LK32cWYfrzZWzYvxaH1DQvpRhFxSxtqtX47hkWZ3G19vKpZMkaE3qpv1FnDThH2fu5naGWNMUWEiJrUBje2Ei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wnfM2ami6vQ51D4YKGLpUJd1JDfkAsMRjiWPB8gaqne8U916YVvAQWGuy466hqT3Gk1NPQSi5DeCRfYmDCqqwQU",
  "key1": "2YwntDtCxMmAgjNDDRVLdmGEuPqoe9aN3D1CbUQf6DTKHqxvbM3M2FSkUq4x2hXx5CWLn4jWFiRK8dT7hHNgqMsF",
  "key2": "3JhbKddVhm1xznvQSf5iTBYKbdZEuMHcrACRiVdtsgWfkR4fSRihbwqB68SwXKGqPmKZaomnfKiSGxFYfEPirHmw",
  "key3": "2LmGoYhzh6HmrX3uxZ7oGosqih1WRNMh7ib3nSHRt1UY7nCPeLWz1ndQezyPYyJwqHWc16rJeAgn6Ucctji2RfVC",
  "key4": "2V1YCurgrAazevsxwdZGy63ShP815heMZuXYKBAeavNiiTQe8yYr4Azkon6t3YxvyzBXjbB1vpBmh46usbN6RY5K",
  "key5": "5SZwwQnCZJb6gmFUCyUxhG7h69SpPnCwq4gpTHucncEWidd5FpVdVBmSsargjdiAcUG4TsZYT8gvYV2mDEPzQ327",
  "key6": "61y3RYD65dpzuTa37nQxYAVf7CvfrNSXdJdNDjcroYjez5cY33TKuHK4eRHxoxyn3UUfJkcJmn72mXKZoQY5LPjg",
  "key7": "3pxEhp3auHCxEc4CEdiESLyPNmsFJuVwsQ41BhgaaBbcT6zgPFKAw8v3b6H3HvuHhsyfnvHWfKQoxTuKKDMmgr1e",
  "key8": "37HHJf2xcW9PWSPVGwvkR8wdNKenDyeF8nMXvsVtmTDK7wRosYs7hQ9ahyB7xHSNqTqoc1dMW1H3CeSjBw2Vrsgk",
  "key9": "4FN811yFpG3EnFkdznL3zMvXc9rrLWr2ydYeGPNf8w4PLuNyKjW3ggffHFjQomK2fakhiMs3HcR5gYvKqaVYQa7s",
  "key10": "2XALLtCFepueAzqnkr6TBtEn8dFZa8izqv8kweXCZdWVYybBXFbJYA3ePj5xmzCcTLZKZKAqkguhvJQATbRsTJmk",
  "key11": "4eQDauPpU1rWj5C1L1eJq2RSBaMeKBd31cY5haPdMA6QwTvjFqtNpBFmfVy3goXXxWNMxhmAcZh9eCz7rF8Zzrxj",
  "key12": "3edaZSGsCvZ2amPqKBfE7Dw4RSK5hcx22JDyHjMVZfSr6gFFakzBq9VcqDPPrr5FSfbpUYgmG5ckNxQAQhD1BkEx",
  "key13": "3JzeJ1VVYUo2YSkF4UjdabsmBU9nnKgEfJnvs2ydEWwb8rCdwNAq28UBMKpqYF9QbSaxFrkTZ3kGcZvFGe9stL4C",
  "key14": "4th9hHsyQAAsMni4Nm9C2c7XqmB3L7e4s77egZbjJVQMaHYXtNf93h6io1fnV4czmze2MFfQCDE4AWj38mnG6FT2",
  "key15": "XfHw637PTKygKxXXbWnrnPkGEmA4zeSjQRVdLH7zbaUM3MW9kefmxHvBtYfCr2U79qyn1zz6TsqJ32GfaxGiiiB",
  "key16": "38ifgnLRETJKQHwgdeumRXN3BMtWTZrn1DwqTL3Uwf8kw77WZcxNSxw1ZHpEHaicAmgPzjEhfDvUwvPWEsmjKVtN",
  "key17": "4teEmJUmPxu8Qbbpp781VNRFBJeAurhab5nR37MTXLHkAJxMtNxADVzL6rRsPgShmDPjipATNGVYTmDBNH7GuRoL",
  "key18": "545dLdMETPdAgMxkjCdA895wnvkn3hWxQCz9FkAmRC8LrXkDMdeD1cAKpa9Jsi6hooiAGpw2CwtZJJEo5bRrehyC",
  "key19": "5Tod6WpJUoJ43iSTaQAa8YCGvbt1Jqkyd24buUkZpV6QGvengSdimyaSzzCzYKfCrqHrgq8rGnAKQ85ZovBxboM1",
  "key20": "38HeibuKLAtpvVXdQeFy4hBHG4ExdwzRgEtqxZrmEPPAtXLSrJtx8Epmks1WD6XnbWtZu7i6VHco3xxfqbErJc4J",
  "key21": "32uwMXDRBfpsAEicgwXyJWUSnVuepukRVmYfzsLSY3oihrmwVhS6qaZsbcS4jm6RzSbMyfhh843FKeDShQF1wBDY",
  "key22": "G98sstyKZeC1RZ2MCF1ua3amqfCRVHEsoLz8ovHDkBWRDXPwTKxrQgZjFwTpkzj9VAkd2vdcsNMLfpDRAZ9KPFE",
  "key23": "4yHz3DxXx63ZZockRFzYdRyk9noB4H38stm2oAey4cjnAYKBAURxfydokBpd3qeH3jYhQgJjkUB3dnoWPRYr5YB5",
  "key24": "4Mn8JMVf4kucQYG51Uy6H2FvHX52YakBmFH8HPVPJNpbgbUD54XpjC2pwzV91nooUumBLJ3MMMYxhBkaHhkv3PTi",
  "key25": "27C7DYLzW5b7trHVXn5FgP7EcpQQEutP88nqzLk5i1maJNRdNJdu8aSEN93np2PnG6sZo3kQNAHs51iaZZvanA5p",
  "key26": "33knNRibQrJEpkPRQLpTPSNpjsN5eMSC7qqdKduPBGuvwErNzrEyVn4sEuPWt9DHVfsVHB31t74r6Jr5MQG2DPwT",
  "key27": "33qSi8o5uDHFxrSFXtzQrUtmPqkieAm2nj4gYHqEzf1eGzUeEtD7LTXbh4XRE9YzGZdv3PsBATxpi1PbXn6vNvxm",
  "key28": "3AAvXb2hKwm4krM4UksgG8UueyqmNxHPFsHPrruMjHnUUGkrUk77zGByvq4JuP4JEq2bbSjmQMSMBeN7pFQBQd2R",
  "key29": "3PgnRDyHZkBLAKmb45XbSDpZmesBCAd4xZj5N8Zse3noZjMnWZDHAcy4L3YyvfTrSnK7ecshxXZqYihJCTA3Vpmp",
  "key30": "5GLoxWwL3UdbqNN7fFHfoTWmRVXaZxB9Y2PAW7YXveVYUiaD4Pwfv26QHFpvqFfVpwmwFrKjPga8gjn9oKrRqBgu"
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

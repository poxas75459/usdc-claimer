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
    "4gaygBik3SV8EzduwZbAr4oQZgqqLvrGDadtzwSHtaKdxAmnLpSqHeTZX1FuNj8bSQ82JMBKok8mkBQbD6B4hAr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rm2LDyWGtBWyEKaVBPgabkmRhN3Nc1UWHd28envtUT75aBQXP6NtKBk55NFnvitQaPrtU3Za5CtAe6r6rFggMti",
  "key1": "2cwgeAgeos8iybamCrnrB5CGm94QLGqzNP2FFtetizgVJSy26GirdBnmhfQ7QFg8j99PBJLTtZjYujBmvJDdvu7b",
  "key2": "566sZ5AFBCCYmXZbhB73rNy8RSAZowiqCD3ZSi6SQuNqJS3QGC2Pm7hMAL4LTMpJztXV2se2cSF3zpsnfirHUZkG",
  "key3": "3En6kxyurV7dMTZiu76eSZqH157B6ootvrk9P6mocBpc8MznDmuHWi6xRZNute4gwJ5XhobLc8MZRS2zTQHvBH4L",
  "key4": "3hy1ayJhhHUofqfiAW3S4PR3sXtssZHy7bubkp1Ne7qH6FYktJNwmYSSvxTDT678bWoV13uCmeoDu2p7ZYxSET15",
  "key5": "2cvpNxQuoPD2F9pfQtP84znTYzEGdKPa27XbxFqWQ8jFm94EsoBebHUqyJa34sJ6J7zRV5EsintPnrVR3cT2h1z8",
  "key6": "2iXqEN8CGW2JrzGxEEyG9kox6dSmgeqfKAoFrnA8vm3W3M5NFga8bpHrUnEVPTsp3pokEUB6ej8dtk9cRb7YV1Pm",
  "key7": "5iGMyvdXNd33pLw5Piq9cgsxng3UuhzLrQBxGatUPZSHEPEwGGTZ6rDHn7JmUTJmmxGMGxUdx8L26YjN1HG2Y58v",
  "key8": "4MGykxKEGVkVUHtyRCFu59JqaT34CJf69fYdmiMGXsWHWKRrFmBKTYNyzMaFrXrnsGBt1DSHs89aX6XSoAkLgz4M",
  "key9": "2h4AcEXjUiWYdhznhpA462EA4WMnViQJ7kfzqyWiA5gNo2sn6excHCmyUbkFTdSK4S4m2igQvrfYa2snEQNm4obZ",
  "key10": "97xX8iGZGCMkLmza4NF5UYLZK47yr9q9NLvByDgWm31evmZKvDzmoSWhLwNnTZCQfbQoeWXtNxXtzARaYTHDo3Z",
  "key11": "576zBMpRDomBj3V876EeniQ7CvCAdg1xEdD1seU1ZNi9tdiRMNJdJx9PHLHiFQw1DGAyiTkjhKjvcSE32rZURRoy",
  "key12": "xFnU2KArj7EAgSGK4zfDJn5JprjdXnxZFT4v9P6EFMEQF9CdECLwSYb2Np4YRCeok78mqTB6JnUETQ1dyVuMNWR",
  "key13": "4PYYdESP6cSbfku7VN9E3mCr56jD3ZnEgh7UB84gBBsWLrWFsYQAEMqDFVjmMQFdcpHMsXQHRmoFU5M6t4hj5Azw",
  "key14": "21LvsmxMSWhr9okmbmW3Zkt7zvi9AVEhB2ZMhsv33FFvbfE4afqyRChVmd4Nk4xta11vUReCzMY3JvDHwESRzQxK",
  "key15": "PTYRd7GuSYjwXDbd6mY86gJ15LjKwpGBrGJYt1ig7fxpnZQsfNV43ULkogSBNVnEygBYW64FTuT3KpnLPxMFAmb",
  "key16": "47ARgM2hpcpcjtLvwyHJvaaudRe7jdXTenJqww3RUbyS2YWavJKbVixgHwjZqbU95PidRziQbqJX2osfCRvT2uhx",
  "key17": "4efWdFWu7PSYfseAPoMYk4JJJQfsBsMAPZc6nCWvsxqtWB4toTjaZqdsmTfXn1HaTsanj9HQajUFWsnfEMxWBBcA",
  "key18": "4qVLmm7WYDccNYXKdeyXtC1XVbWDMXJu5X2uMunHzu64HLdcQ2N924bJdJKUJgGcs7u2wHC7h235DAKK2oP4aqPf",
  "key19": "5Yx2y9fqaa2dVqpPHBTCqPXC4STLaz8w8v9eMkwpnts3TjkBPjixdTU8hKN3H9GvKAYhxksK9tt4Pni15SZ7fzuW",
  "key20": "3MmVrmwCVuNsAp9cYDHU4Z6oqSpXmDtBxWJ2XNtre5MkB2vbcECV8KeAPAMsBbo1CyBzbAa56G3GjTbesh33M7FZ",
  "key21": "5AgqxTbjF48eAmKGbL3qqSFnath137EKyofzujrL2zL8sFoLHFnVC9DGGuhEaDfDeHvb966ZMfQUr8n9pkgfjwuj",
  "key22": "Ga57jsBy9QmWZg58bSyc4w2eqyPkQVFRY2iMD7EsmdA1dYxmA3jdrc5pbfs8vYCTaLwFEdrTTY9WfUqkVC5ytMs",
  "key23": "3GvHSandgXmJxp6RHGPDTWbawLhKTFAy5A5mVEXFUKwMigiabH57PSNtCC73FCVnjXNSAKXidbrU64GsPYqnphdU",
  "key24": "3fGCdBnhxQAphzQeYM4PEacPS8Vy26LsFXNbHCmaDFMAfXAH85DovVSCFaBL8XbUC3VQoom3NaiZGk4mzgSzRyVW",
  "key25": "3bmUcb52ctMa7NmpksFf2h1LWzneueF4V2vRasHd3ryszFTg9BtvsqRzaNY4GAHojW7HR4DYQ9Vq3E5iDELHBAYQ",
  "key26": "5unQkVuwCVadrmjxUPbjrKibPH2iuAK6AeChonjFoyUQHym7Hi1zzMoE8Z25ZLEA5kbd27Qt4nPaVwFzrFwgLgg6",
  "key27": "YpScbZjV8a8EFUXRbrWLNULTw7XcvRoppoVXGg2YLdHBGxidnMZ7r6JqUjBQuuGkCxxRhHWEbZnrtkPU8Qp5xMy",
  "key28": "iwWUvV5vy4GZXQt6sgqbdZTADoLPMggbkoPDFs3VdoHdP18a9fGW7yYoibNVewFGjY2oTNvFb5FfmKPEMhCvtee",
  "key29": "2P45S7EGcFHgjRZ4vbBA294UNbrBsPMHQ11uNMEi8DFZMmCNhMNvn4v8Xgb9hDrw6Gmh1yQDUUBMu5f695Bt3xo8",
  "key30": "5RAw96YyTcZ5Leeu5evRDzZqSQW3qcbHbcp8uGjJgwbhXHkz3nvaMGnY3YxTAK3wn7Y1VUGsjCAVLhVubPN9A2mN",
  "key31": "29NyFxfMvMjjWawuZXm1ZMWRpH3BiLihmvrHH1QQmgCz9TFRSYtpMb7wdtqZYcGVe14KnQGq5eRiLMz4PiZLTh8f"
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

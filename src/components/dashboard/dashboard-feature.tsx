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
    "2pXxQDEpNRcCrakggMJVPHWY8kVawC2tmmCWqsMXBSJWHp24PLhG1uVJ7RGEgqmoYhCmwso76zR6SY5QHh9DX48K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHrzSGcvn2bGS8S7sr2UwvPwU7eutLSHi4QqnXMAupZYtLGGpuGveEhcyxnesHcU3FSVvtVkJBSXA6b1JY4gr3W",
  "key1": "2UiFf2cAGcuPNC2H7UP6jqyc3qvFR5ULhmuj98Jmj8z5qtPihojbt89mA8nmWKNTi7u1XjqBG3W6mNahrNdSvdZU",
  "key2": "2FpywXtQNQrm3a7EyXq3BztP6zosAQzTZLcuPD2uneRMX1GYHqmv7NmVTAYE3HoeX3xbfqEQxN1rGFGqv9G6Lcx5",
  "key3": "5ByeNe6Ei4zXLSDvTYmiQWqCgTnr3uxc2c1Wuw5txKgex1omiJ9JHVSi4ewnREs8gndGaLXRkaWp8G9KGQ5Ce58Y",
  "key4": "3USpgPUedp1R9vuTFUbNNMwYHgieffvorfp4i37nNQqaSszHkQyospFNQWnaVetPKyzNeqhkQ3CHxERhhStGyBZ4",
  "key5": "49LtZefAM1CwKtGKkuU2Ym85PkF5TWn1DWfd7QsFw6YZUdbHRdkBqbxuBVkMx3nYZTuPSYxNRDLsyBda9acBV9n8",
  "key6": "BSQ15Vf4k29V9Au8WcyJTD1uDPYsCgP7XYBXiYkPeuyL6aDSYou5Szc5XiJbxZEn1YJkKQxrKuPDiEVcnEE9LnL",
  "key7": "iFLwnchtLg6RdKuLYqhcMnWVcvDog1a3KbuB8dkA5VTZTWFwiv7SCJeS9LTTnssgb1QiFKNGKg8qQA6Ud7DDfzL",
  "key8": "5Ts3zxbh8GTB2gywnik3sDdv2s45UisKqgdETPrdyYZyYAn99mjpfRTYaKQrxkyhpfAjHrsXpPVDQBW6R7Msx96F",
  "key9": "2z7cM67mTcM3P3zeCBcmLtjM9VJ8qzw5WrStAKz2wt89jJS1ZpCJmK9u5JTg91xJATMwNstTVz5z4SA9CS8bJgiP",
  "key10": "5bHbDRhB8Jv235bzCUtCK8j935e25Y54nJWGSzRM36FEirXJ661Kysz1FBUSdUHJs7saovvpiwiNNJBaZfzMFjxQ",
  "key11": "2LjhAHR5D1VmrHquM6BG6ze44eQpHFPrJ8CtdHaevNcJe7RorfdrYZxjFcyh6ZmfoFKPE9Dguf7npAR4eMxPwRZZ",
  "key12": "5WMfqsNQh62n3NSURdm3zFxxeMZPonc2iA9bHEUVFCjSXpSzKxXYmCijLFAmAseS75E8pbQRcbu4p7D8UoJZVtdg",
  "key13": "42DWJY9GcesbtVrEGY2MQaPbJcT6Xd72uskbZqqo38qCJDzSPGqVEPcG4t82hPZMEedKeb2Jgmo7H14BFYV44PHy",
  "key14": "3oQBSmLSdiwnxPh99w5bsYZTSbWEfPV7SjhvxNtXRaQJLLHWPGUSvynKyqwooyFeWCjPFUzkVMv7DNgWzWLRt4Ac",
  "key15": "2u3FFTyhLXnhUi1FDFNFqVSxEUeKcJW4hqkssoqaGgbSWDFdSa4B5kudh8SUQxwNbTHX1S3faWgFt3AmxDYPMkos",
  "key16": "3aYe93X1sPwEiK5dr2KEQmVKXo6Y7tgMkuUR7zvkA4GjEQGyzhe69qaBpbAsrg22bMz7en1AYiCVnDEyH1oyapJn",
  "key17": "2EVGs9CqDBBBX7PaSLEhQ8CuDNLaEeKApJmMUAAedyVdejE7eWC6LLa1gpW7vRKUMddnxgCvLixK7bfYCFphiaRD",
  "key18": "33fMb5TKWJEwR9nhkvZpfpL846BRZ3dwcAEyQ8twScxQFkdcbzQgrRfUkY4a2vu6osnMiQ71gUbaEv13us3hoegc",
  "key19": "4cZeqbvyEnbJN8p6ZDnA7RUArDHCQPD9K8kXYQcWhtLr3wBHgqywVEg426sb3fRfkE9xz4YpV3kRX55m6AjpsMV7",
  "key20": "3rxn3ejRVmbi6fy5Sgz46vYSDg6FZ1yXQ7vbBAGpoYAxcorbZxEnK9Uy9RvwDmqYeBrjkvHCcvPtzNTphu9LK58D",
  "key21": "2efw2p9QasdxUFrnJnjbiA3DG2279xUmr63NFQ35EwTpCubceaCjyjqAZvzmEhGLhavP7MbbocdtAmyiU5bd94tE",
  "key22": "4gH14DX6kL2XcXwbkxs8Uhg74w9qV8AR4CZpf2az458TeTJZ9YmcBjCP4cCNZ9yDYX5nCVn8VSLBpF8eDbzGv1Z4",
  "key23": "1Dd8fFr5YXmEjto9zgWGQYXVX1gL3muFRoMnYciJXSznfs8HEqZbamnNVCYRp6bS9z9kmNWLDPkDgPU3RXvo6TE",
  "key24": "3dcjmkWhFXRE3qsN15aysshQAEjwPSLcgjWc44ccvBpmhMXRKimVNFmZzhEgoUewtjvFbddvewAm6iYvMSL3rT2g",
  "key25": "546cB8n1a45sLSjK4zSK7pa8K4XjMWUq3vaS3bEkXvGKr7W992KdJF8UjptJpPgyqzGsnpkfnmZ8Ecsq21Frv5DS",
  "key26": "2uSd2KLdSjmoc9qjmKoCsTjXUhuLSpi1CSTLdaUqzXRkRQ1vZg9h9dVYoCvAz3tL3eE8krSkRuPTkRaW4EdnCQx"
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

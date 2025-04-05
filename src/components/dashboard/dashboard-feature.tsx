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
    "2wJQ2pZxr69eoTBE2J2UTG8npfovxjm35H3nDbTFQQbRB8QwYASpPVEjgAqE8WtyczhWKadiTEomkjGCuFy538r5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ak7zQtreSoBx2jJAkhyU3rf6E6M8XTxZ1Fg1zQ1xGqxBMcxwkofXxD6pXgWyUsxpGM6zgig1GaiDxJscZM3ANiK",
  "key1": "37cxcdN4GbAufFya5KSRrAyYCoV5EppX8DTG2P9oM8GvTj1smrKka7gZh8KDQUuGPiXs1dWPJuycPAGJ6AzNQQzu",
  "key2": "4iUYAy6KkhB26UEkbFmFncjocNqRzHetYDiePRDSC3z2pnYdYTKdJKXSc4WczaESJ4rvJ5QcpnGD61HYjgRhQg7o",
  "key3": "3a9XX96GZkAH5zJeFhjWSE9Zm8FGrcaP2aVd33kwuqd2oDpRwhHcPV9MV2Q7SWzx9LNy1XakEW3chm1byCfzVcq3",
  "key4": "3cUDtqY1TSJxZYYZ2wT6w4HcoQBMqLAm8acP1SGKSgH7h2XUAZep44xXMsMXiTN7AwvsnRTa8mVPK2bGcv4pkPeo",
  "key5": "5MsCj2S9AoMFPyAtkC7HzjqSBosjMaQYwomiSoKYSMrDh1zQ6sqy74tgctqXJahNcB2TZqjcV9BZhjeHVv4hCUr3",
  "key6": "fzdPFMEp5SzqRJQhEe67f5Vrhpc9Vu56TxcRY3FKiuzKVGmYswvmMwh7BrFjFcaZrTujtALmDhCFgqZwwpb53QK",
  "key7": "3fmRgaV9NGrh615UrEtCmnkPtSs6C4toD4PjpT23wcyfSXA4VEUWSbuYPiJ9y2R96BZ5df3UCbC5A4q41EYUzDQS",
  "key8": "3hTwxLq2VVsdJ4rUNLniiudHsxrGNSGcDuQ4HEhC8V3ehzUmZ28mGG2tCmnWVyGjqvrnF3ALWFEiRsXyjJhSWrS7",
  "key9": "4DJ9LSmy1SBk33HdyoN7AE7eRuFvA4FooU6ZwffQSs3C218scJF6FqsRWcxQBt9kWH24xt5pmvKjtWmVGZiSgBQr",
  "key10": "2oU22dJYbgPGdxDrUF2v8NRt2nHBRBpgM47ecVmKaEvrW7kEr8x5NABQx8adTe5kv6KX9RWnJ9vbNXoaBaHy2e6V",
  "key11": "5LfsYndECDtzyLc9bNBcQaSG9GiRCEJUe1abeyvVMm9cKaqD27Z7JzWFGpvoDKPsBmYeSHgqba85eHpiKGTg4qVe",
  "key12": "PTgRBG7RamZ69GXP4Am3JPTGNYex7wJLjkdhVhntz9feRnDuTSznPmAfPwXLCbj7zPqT1xWDfDA48CFdWr1gXHj",
  "key13": "55E2pdiRHaDEu7h3RjC1W9RfiCu8BHi5mP3DSSjqBEHRtcos5hnCsU9kDjhkvAfAEpZY6PKe2aFPf5QhocFyUQjg",
  "key14": "23LLEFaPonTYCttnVaUrHbMiNTLAn1yYMW5Dy6Jfu7FwETM18mMB7X8t12m4woryvyQy7tazPoKyXymoMBJN5q2g",
  "key15": "3rCTbUBw6qZnS4e294o6vMT2vjThzeK7shJD8tmVbSyQ29vX91cSxyBDqMSREa1dWwuTanqMm733zeNmWkARSAGe",
  "key16": "39DyBa2YGvNXgnXYpmNB4p1XqxCxWMv72CQarf9baHwi2EKwEM2mSrqRyWAWA4vGtY6Kwn4sANz6XNoTaZ6NLpcU",
  "key17": "2qvKW2FNMT47t23yLTUpXC4vybdxdfDfdiuPEaDTHoCvHCyKdw4xBbcRNDtwXo31n8VnZZMHBq1xNZ24fVGYrMuq",
  "key18": "5KQuJVigxiWEkfUzoEb23eZ2pSEbUMn84cABXo2c3D3ECG3efZe3TNKf35YPMsvovWPPPmkgH4fKcsZb9hioYutj",
  "key19": "4qFKAuP7vHVKJ53cFKYThQaL11U8cwLqznTpakjim9qLJHG5w2PydA6PS5uUePpEthkK411QCtXCEbU8kn24h3JU",
  "key20": "4gJrx1FgCp3j1SUW1aL6a53NHaRxDXo4shJaeeMFVuC2aUHw3yzsHox7VWbgb1jxeBpvBW9p2UuXww4epY8ndgAR",
  "key21": "3EHmjQYdHk6VLK9GULnpZreEsmqrqF5w1tbKmCaVBnV6JPtCt2tCJDPjC3WfC8ajFHAjzWHcxVvz67f9MtkAUTXw",
  "key22": "cmb21TpFsDj144wcJfWAzAYjxqqvvNKuNYua38kVi8SaBp9g5ozWxxAdj4eWtBBqAe2JVdyjpRW1sJHP1cmvCxi",
  "key23": "cQpCjUPkAa4iDenRQHkUgEFjTXoyhGg4EpYMdpK1S5N3riFNcDNNLAjB4uibH2L37RCuErLLhtaggX6DCANu1RZ",
  "key24": "2wv4jtwLKV41UEM1SLEv9aNTarVgqmrf2nFkPGDM5kdboGZrsxQsM78U12jNnvwZmcNtvECssKfVJ8c6STEe1d5S"
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

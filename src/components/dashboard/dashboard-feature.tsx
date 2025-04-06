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
    "2j2Xd74eCWjcj1yTppQd21iAhK4fx2XJtHdvRnPngW4CcAaXmoMFy5H8W8fNSjMeJSUf2iGr4XLJ7dDNfQFiD3gD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ouAXhwhD23bB8fhWgmgdvEAujZShigaReBMsVNDT7otcsT98RQo2MRDC21nc24tC3HM38if1R6iVDDKQS4wgHFM",
  "key1": "3hAQof3hFFhmc8u5ey4FSt284MKxrjr5a8UbZiFF4BjxT1Tr9G32w6awDKCme2HDR3RPt7pBQJbVf2Hj1SVabYdY",
  "key2": "2iimSXgV8cThBseEPdaMMC3vkdQyf1F7r6bPPHNcn3kJBFkYWAXBh2GUQ5FegT4aJwrT2EDfRQ6rRC8776nc3Tf",
  "key3": "3eeog4UWn2SKFDNAzzFvN4bPPzo7Qx5mgFgnJQA9vfGDhc248Zk1rF3apfvk72QPiKFzMN1xVqNVrwpMSy5rZgQz",
  "key4": "4YFjLLR5HnRp2jtufHiMauJ9DEjidKHgjDi8aQc7dgNH7BeooCgwP9DmYxmu5Xcz361CPeWR2x7MCtLY2NX9xDge",
  "key5": "2MvX338Agtv1wKuVUgUEsM9KUWdwrFAzKNtxtZCrfXu97Ndged7N2rEDhCgaB3PWMLk9QGddXyw9HiwNvPu99FZA",
  "key6": "RNxqdoiGnjtM83ycZmkMPrMqYF86NdQFzXrcF95Sr2is6WCtfRzQEetTMEZw3km45cRdAhgxs1QsdBicyieyoDu",
  "key7": "5yc2kUjvGTTeA5ufcCB9RNUf4pZgmFGKPUhXU1xEWdHbN99vBVkNKnmtUZWC8YsAMbK67J3Q9rvUz43B2kpbAHuJ",
  "key8": "CdCDa1yaXjPSQY5LChoRXVZRY6p8yPBf1KUk8weuU7CRnjaFqJGJNQ7BaAEZT3VFnrMZ7cGVdLM2fKCec6RgRmY",
  "key9": "63YHUSPboJpSEeJ4hTxR5DT7PXmTuDjSN1dUhvB1Y2xRNNn6WckiXEHtFxQtL184asJhtzeBbnmvUR3FUFsR2W5G",
  "key10": "oD76GX9xZCvjzTJAihehFPrYx4Xcgh3yBS4kf6t9UwLMEkCT3xnAH8sLWtJkvbNpoTSa7ehhe29Fa4PA1hoqy4J",
  "key11": "2hH8iifPfLZThsTcdq2UCrTvdhZxDkHoFptC4MFAPwN6WFnuC4TyQDrtUoWkpbkSADu1UyYfYbRBWzkjPSsKjej2",
  "key12": "2ESZP5XDoB1DVaeUo1ty6QmD6UDDbGJNn2Quc8d1qgLHw99NvpoM3THo9H63JtRLdo989doFMV4UYrLwUTe7FH79",
  "key13": "VX138HnbAGnqs6RPwJrQdUQwarwViGQoa7DAooc3iMQDFqaL8FeZmihkq2nAwhqYhGEJmXABMouZf1UBQAnX3VW",
  "key14": "3ixB3xSgi4nGSZzBya5xfwdc8sLNHNqchSgGcfY5LMwDzQ1aouaKeTmZXDKbSUQKeYCXdnBHSbrogxgAwRynCdMf",
  "key15": "AD48heVSoMUa96aKZx2axZtXp6kMckwL3D5cSeMcGF1LWzEDkkmAjnaVKarBkD3YNfLpkjWZfmafiV1f1XYax47",
  "key16": "63fi5YBGpxzwYGEPKVysSLrDfyHbnzDUwH36Xko1ZcTeDUkPja1NXaH3SLnLbYL1J2HW3kSaqvSjJCANaosTB3gf",
  "key17": "575Qg798EuNdY7iEqHefVvSBXgVYNddpoqcYJDFjhTrKoi8xJffDwnWznYF2tNHEXHCf93ut13QaLghEN9Uw6ZHF",
  "key18": "4MmhawMPZC1doqwqkreYHrAEcxMLRMMiAoTjkiYpb54HGS7DTpUMRdgkMUQzgTAueaE2hw8HW83wuqW6JY4y2yBc",
  "key19": "rbWgQtLnZyEiCuzbghZEquP3f68phdJvqKDgpNCrw9y9DzAqQGb5ApiEypPwnEYcSPfkaaNv9Wa7i3f4vTu2AgA",
  "key20": "5reeMvYi49DEySLrcUhgppycW4L9kzK85ibxkwY28YCjYcpqe35W2wRA5omo4cEd4UYn6mjrzRxYBFF6q9gjzNPH",
  "key21": "3EEEjiqVugNch5V5UhQXvP6Qm8eVTMiNswFYPLnggWxTFaWA74TLKFTN2RRSaGJhLaxVtfVXLXUUmpxKfX3XPmnT",
  "key22": "2oSMUdbEggRLxgqnjw3BU7m6TjZJ5fYtz6TQEQQkqghMsrpHzeDn5TuWPVmLAb1tRpxes5JwjwpXJcgDAUGYpenM",
  "key23": "2G6sGjx2m5QykJmu23W5qmQX9dUQLjkuubRcYyqgGnGi6M6hwKCLmEBD2F7mxUvj8u8wCkxtFcRtFTaJTS2zhA6n",
  "key24": "4HLkY7mtsWy6GTfwh93sExoDf8wM9HgAZ5oJAy8rEDsYySPK99yrcqMAkpnv7C5txfVHW5tcfwAgsZhbf9WkUSbs",
  "key25": "w3eTunP36XCYjSh3E7ZZetw5HRddTxw8HHkjoRnkQ6piWdUknkmYgK2WZkBa4VZ6xWCZmJTLRAwBhLQFkshyC4Y",
  "key26": "3C7ZCbFJair3dW4eS9jkdJfiXmbucQzifdatV7TREaESo8b1TujiGciEDReR5ZsYb9nNgbow2EWwAnFGFiLgPuem",
  "key27": "32S71hw1Fu7aeCGbutoi2r24KbBjHMoYYqLqdJPja2w6g7cW11dcsW4mXVfBng9JwdB4n8e8pooYqQr6gDfPca1X"
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

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
    "4appHsoQCLzsUTmDXbZaDXVaqa8xiZWnyvz4HAcubkMZfuVrpavvDFyDC9ToUVHaHTDkRPrRZxrUgZfW5nooNbaA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avNEzgFhMzYKibCNBPE6QGPqbhzJFxStsz7vVt5NviD4rHmXbQYB68a8hEqoUgMdc6fjzq2JeHXB4mEA2QJns2W",
  "key1": "254jGk6eSpTqe8q2E74F576uPNVTrAyk9K4dZ4ArZbT7ZXMu3ZdZ87mEYc2Qjdu9SxSCo9Q8zkoqv7s76Gm3iruQ",
  "key2": "3k5krjwssq7G4FunW2pyGzD2QkwCsiypHL3D9UKz9YRrfjHrX5EQVpCWHhDYThBXeFgAnvH7coBcJ3SzYU5yh6G9",
  "key3": "5hYjv9xUj3zxDfQcBWYeRh3Bw3SThbjZ9H3d2oAUsoppXR395CD8sULtnjMjHhGaTFyGr7ZiN5hguEgZv8yvWKoY",
  "key4": "JhyKRw9sQsietc1LmnJc1HeqhMhPyjYg2vL91yRo6g1V1BoL4TTUahw51hF8ZonudfdpY4aCHLg6zm3p5LJyLQk",
  "key5": "2BRGfgzpAihdEhr6sPgzPXkJRp7tpR6DPzfL7ZA8B5GaX9KgHZPy7k8YDa9RTEEuAy1bSSL18QY3LfTP3nZWzkBe",
  "key6": "2bG6taBzh9ktz6zUuKdBo7teZukNfYTDoaVc7rfJXm7PpEJbAYFGcv5TWqn75AmB5CwGoMPs4wLmN6B8yDETSfCi",
  "key7": "4qcUytbtFyKNFVUma6BkZ9p4MPgRympRw8Htxxp2uCXRQXLfxeorJ6S1fUVmStXYrSWLfsEYBV2de5G33ju5PegQ",
  "key8": "2gF4jXhtqRc36KQN3z3Xd3xVTCrTKzngfG2Cf8Bw2UQg9QkFhmUKjuZwj4WQzHVGSDBGU16PsqHnRUGENH5fU31s",
  "key9": "67C7wy3ubAPb9QBc17qzsBYkSR4m7E2Md9vK2PLUHpkZf9N1Cjuw2FVpLCv38oHkWzTyfyNcMM4gdVk96wkvEGHm",
  "key10": "3FTAckMNJCXCYUVsaRt4X27Q3iXrVVPpGGJBgs8mRtwj39t6mF9XrQuNfBY4n9GUCnu34YXfSJ7eCNkVjB2EtQ3B",
  "key11": "2uPEeqUgStJi7RXuj4ZsQK1cfbeUzvE7jH235dAzPVtkaoQsJ7Fro1tPokwxRApRQ2agXu7EmxLr9FwUD92nasDh",
  "key12": "367gfBqsbKVdu55vwJUgrvN4Svqq7cxrTyH4LyUubqc5Nnv9GBbTcRGga5vNbua1ggHw1F8MpvGQnR4nKpRXFYMU",
  "key13": "2bCEsjamapvuuyR6y1LiGq4AJNe59q4E3fYHYmsgvJFUay3U8dbQBPcYz3LMScWNM3Ai6ZCiz3vpk8yFtxcjyzp8",
  "key14": "41Kvrhc3NxtmRU3VyrU9iuoiDWjN2QAqw5gxewxDrE1fmcoWdesrDPvESKb5aUW8Ppry35Das9P4DQH49mtxss42",
  "key15": "3MQKmF8qsADzPCJ7D5QrQQJ4tz7zdkDLv8UoTQhsHVx8XUPR6q4BhgDmEuWmRSFJTVEVP5GoyczxcFfVQ5G2sBRP",
  "key16": "wZnEaqi52SHfDYo8hGVWhxbeJhV4JNJ8XdQ8WeUy4h4p1hhTbkJK1sHLd9xWJdTZowqjLE8SmxXR7eiTcZztfJ7",
  "key17": "5bjmWYsnhnqvCuwEjJGeLNToNM5aYvd1miGqcarumg4LypriYMXoTDoNvZe9poY2dYHrmiPRmaioT4DNYYCmGnCS",
  "key18": "4dJ7CAy81gggn2PFcmmxBEt6UwaXnLcv3ZfdDv6Q1KrP8N7QvGaLtj7yafewzBcH6w9qEkxQaMFr1u5PXL35moJd",
  "key19": "3Ji1257UCqdeskTR8sWvyuJ3fAQNTcVVr7cshdoVFeKbkhwbc3UxeAVuWGv6dL5kFVCb7acXiSUYkxEwwPL5kMfP",
  "key20": "3QjLFq2p14wDmbDWX5AQbq4sTMPnMM8cgawLH5nVAfYba6dmf6CNk26jrd3KUpJ8oDN6v44afSCe9LhNTG3Lf2Tv",
  "key21": "1kksE6jm9U27GQ6US5wgvRe6RUMZFhNbeDrWbw4JMje8WaZS81BwpDrxSrQZQHXEgxgfw7c76Z7RVCBNJ3oGux4",
  "key22": "3soaRxp97Z8jfvJdhCv4ToqftJeQF3waJiRV9DSGTHRfVrvwhbWnjV74v64SCjh5F9udDZ4GrCqSxEH79WStoNXW",
  "key23": "3L1dheR3cRFemwDySjkxUBCtUHT7nAeP6mDTHPBT5Mfmi1Mn55Tj86oGo5An2xqLpaKautS3FohotBHkhbNR189Y",
  "key24": "52oPKhkPyTxnaTnmbGcmEmaU9LvW8UCJyMKME7gYTkNq65HidXBaNhU2tgimGwmzQL4P7njpbfhkCfoaPdP3ewgY",
  "key25": "2PV1obsA1K3HsypEpwomYKuFbtACPSmUEW4MBxaV3qPRqJjRUJCYMCYXMLAE8zNT8FkdM9MV5YCJ6jZ6nXWYonse",
  "key26": "4gFBRUfmU2n8fX8rW6B7xkDKKBG7RaPTMtmbhxcSEULoKrUZvSc7F8727iAP7T84H5QQ6fVk2ESe6sPCBPVQXBc9",
  "key27": "3HddisEvAtJtTwYubNdjD29jQwTTSpMuM8VyYAr7FupogntiQYT2Ks68MeQ8QFFmQ7fojE8jgoVYu2Bn1v6yebpN",
  "key28": "5BJPGpcoS6iro7DwQ62EAiMTkyMNFShQCpVKKnQwD5WdwqvU1roeThZzyFgkuAswai4UCjVP3b9G5oHRPCK5rNZX",
  "key29": "5nttvYfvr4qcY4ftZnLGhiaT1mogtLmHZuKtUT1hsZCLq2uG3EkHvwy4BhVMP7qaoPowQTTsjXpzMeAJP3StoVmC",
  "key30": "4WvT5cG93Cdn5r4foqeBEUAKE6i1y1uX8UDYQ4CLnQSK7wQLRDaqEHeoRbucKYm48ZBeCj3HLvqrzcBh86Q1Rdaa",
  "key31": "22v75qD9M6LQGCxWumipHJQunHnfSBf61u8LdNFeE33jEtaAgBsAkajb5xncGr74v4FtdPahWcet2bG9ENsZkiX7"
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

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
    "2u4vGAHsWabSXDze1ys3s64Aw13zxJ9fyhamSXKytTn537gXuBM3DhaCdhm6tgpLMbHi418gMgZAm2PY6A29LJsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51oyn7cUYNWbfRDtGVRVFrRZdqZnav8Ay4ZfsfqjXnqdVUyj6fsceoNNSVZSSGeve4ZoqMjDALFcVvA651sDwj7t",
  "key1": "3B13KgBFz1mT76tgqDoXAkYJmPbN3JdoH3tgm6o8rJjr8xNCVqsPAVDvWZ5MYSdNw4nTStBfWzPM3RswDPmRJ1HK",
  "key2": "2pqQRdho3Vaf7rrZ6P4kccQSKeQEP3uouYxatfwEcJc69kjatd3ncqtVhCdDWRGk9sdusWeqry4y8gRDTvHHuYjS",
  "key3": "2ZwFwYvQMsM9FyYyB3vCHn9oDBXjX3p7BAabLEgehZCC3cxUDpD9FM6q23HJ9id2yHFJZtat2SjDJH4f1EPvgEZx",
  "key4": "61fvVAqHihghhtHLnhitP4NAL4WSRR8SW8rKweFVbyN4RHHkZk7ERMJtG4JkiN1zy4tm4xXFA3rDBj5pVwox57gF",
  "key5": "2XCcMdkqNrDiFtMZLoBFazkrBHiSZTpaRnnQdE61iBnD9cb2LuoAYBPEqqWFFnDDDCdtYyedjXZRh8kSxcdyx9fS",
  "key6": "3bGfb1RR8hHZcN4VhsUYaHGmQQhY17V5LrLf5xXwm27qPSQW9QXZZr1co4dRt6UoPdoQA7tr8hkty534cLN2H6EH",
  "key7": "2VunE5vHgtmcZwtULYH3umQrvygaT9yCn1W1QdrUuHHDsWSKrzHnkovuSKFME4TmRnyeaeCUMsdzCK6pyhcTN2yY",
  "key8": "2wZHpX2b8pw55Fkk8LMpyepntPNxQw8GEbVh3Zpc2mvPhJHmaMMR86Q8QcHCnx9RtMkQuyP1QShf752n9MWXNRb1",
  "key9": "482yBkGs4UJSNG6fKmcpnSeYh4dG4HLfFbiA5fmN4NWhUS9HxH3aYXpkTh3F4nEsF4X8HUiGUdFtF72C5YtHFy8S",
  "key10": "5aQ8sRU9B8xhLN49kTuDhJ1aoicz7eA58n6iQMZsBT121k3mqbTnsZeyT2xBhMpsVRG21DuSyx5AmyQhwHvcT1UD",
  "key11": "44p9hkwrUK5bdjJ39jm91bLAev8qCmWH87ZspeigCdTo9GGC6W42HtSUJjkAxHtjgBmcBqLZJ2N2nbjw7C3evieM",
  "key12": "kHQaQ9xH1rKRvizaevLE6bybwZa14zAFPs1JYJnqGQ4Cy3znfQxfcTeRxbFiMrPCdAvHEmFQfdxDARK2C6ZwmZb",
  "key13": "9LmSPMAKJx7vahdFi7wUbiTUNmfRgoBAawTXTPfEgNoorMWwaf48Mpf8Y1aCKbe3YMrVTGfPfuxTSxQzbfzMrF6",
  "key14": "5v1ALF21Wnzqtmtkd1pXTCHM3iJw8ASS3YfD5AE4SpEkqxX8CwwhBbRiyukNt7s1A67jsVZAUNuGdiLmkCA9LGmE",
  "key15": "PEZr8jhS1SfiLsrGSWXb53G1idcGRGReg6SD2nk7hPPcqgxUz3Jb2mKLqVGtm8qdtvezUPbiPcjRZhmm5oPjid6",
  "key16": "3tHWp2eSf9xUJxVBb3k2iYvoFLo1AKa6QRu9Yf83nrRNe7fJaDVZP1E1STep1zkw9fxC71k89VcAUD9Z7JV86xTy",
  "key17": "3yj4Fi6gGf8Mqz3yYYUswgj3gN3Rqs3PVsXmkusQu9W5CbbeteLrZ2ahKp3vxju4CtXDPo7cNCrxfbatb6PESnF",
  "key18": "8k16EiCibgTqUqnA8mzVS9GdGTaTZciPwpDakK4azxY863DiGVbZLe5riYoJDa9AGWXSTCMCMwhEJH5wGiP5hfY",
  "key19": "4t2g6d98FbA4uq3idTwSAtuEKWeaSdstH6yuy6HUN8FfpvLTpfQyYAfn1J1PxUAgfhBbbp7tx2LCAwTt9vcztq1a",
  "key20": "3Pp7A6C2KZZsmrR8RE1HtHWjACMg24mkSf8h1hJg1kyzswNdwoTgUdyEYemP1PUy9xZhieK2y2MhJX6Vcv28bBCU",
  "key21": "5EBZDCgAqKghin1Gfk1qSq72hGgMNP5njGBkmRwQb7kcJbBboHy15y4DNTmttF6aL9kHhB4t6iVNKeev1bJ67jb5",
  "key22": "36T3p8sdUwz2P8VapxWegHHATKr1rigUP6um4knmK4ZWQkAPN5yhnyeKWZiVEun3ZqoAq8LGWBBNqjKF3APSvA2e",
  "key23": "2pbqGGxRncXy1YnwN4ubXs8pDE5p5ayNN1og1sZe5eP9ApZqJb2yC1bVuHoFydBiDMSzm9Go4gVRVPLVmHphgDTP",
  "key24": "5NjkTD9di2Y86j9GJvC4dtHhfYjM8nyAdanf6D6FMe2HJhM3T52H6jaKWLi1EtHwBiYd5N5VwzoeJGX2DSFehLRL",
  "key25": "5UR9mNLsdVXxdUtr2QNa7gymSZMpbcbLAwi22YdgXGfnzLpZwZBjDz9QEBpipHoMTKijEtMdDTNV8HoSBLh1JbeP"
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

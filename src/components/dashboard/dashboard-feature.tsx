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
    "5mFm677u398CunqZ31RTiLK2u8kNA3WcMxPJpiSqJrUdu4oHwF9g4weUx3E5MKPrr6iMKFmyV2WjUffzWBoFBQ6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35fGZmgWWCCcSu4RRyJdJBXBgLYYZCkaahy1oSTesJKnDsjvDny8gFierYooW3ouunt5HjL611oqAzUWK2sz7x4K",
  "key1": "64Na5zZZsUDuqbzmU74FDxaLy4tfNRE2xWLuDdak3iHJWxnF2YqLWreEcbjSTcD74JAZkNL8Lt674bX8TqmemdBD",
  "key2": "2qf7dAt77EWarm9HWc35ZdAbckXTpbA5rgzTFjazdh5nJRavtNCK3KrLEqqtUvD2fEKjDJSKRKywtVAbdcZyUz7J",
  "key3": "oSw1q4Tu3Bv2xvHfpGYXGN4TXKwNdxoFDin6zLDtmZ2tJW8zFKZLuvnHyKTNbHtofi63Rqj1NyffVf369uiqHTK",
  "key4": "KQzMhRDnpdXBz5Wa4WkwmooDHrCUSmazhWuTDpYVrWC3gveXmq3g1FfprtAASd84q88yM4WAovRiH2WQqSUbCAK",
  "key5": "5zP7bJhTZtzkAb3UYSJFebr7eM61uYRoRU5hWU8wrtLaAJqNXh8xTMc23yyc9gkZt9woEDSkPWddmLMFjKT4VeWf",
  "key6": "61YicFJqgmiJDxzU5q3PtRW4REjz9NtCqqbroNaKFQAyS2jhWGeGJsEzsde5DaACdtB4GWV2BEcbzQt5Q5ks4pTZ",
  "key7": "26GBocGa4Vso4dXHShx3TT58EbJmcU7wkGNNmbVgkUweDzFTKuTzHTexRcb1rPAe9v5zHgL2A53574gy9Q7wX9Lh",
  "key8": "5HW4WBTMtfo8GCsrdh1jWxCgiQiJXWjhNV6wWsjCYpHqqBerF1FTDMe8JuUhwcnSkNjciVKTQiVkLeZpwzrxCbrM",
  "key9": "2X9rLPNfGmSJd5zJnvSwhjxhDJCQhbcSAGUSXLThM2kdpSnaqRSz2X4HZQTabH4khx4RSNC6PNoMPqMh9869g55Z",
  "key10": "iqBM1E13rbCA4nFHHYRv5aJvzngTsJjsvKvSTwjuxUJqNKu7iNh7bbtFeyyiqBM2nEvwNi8uBnRNh11C1C2PKZB",
  "key11": "26UGFrsSnWomM8HzKDLZ1za3fpkFYjfg2ic1DXjXarvmKyBuZ94E3NVezEUsSFCz6f6sRp9D2k5ak89rX4nBCiCu",
  "key12": "5A2FQpkQyQLNpmhnSpgyVb7vd9Lp7Ec6Gv3usxkXB8ozgpBsZfYiFzPui9yQfguBFatBRWzQyhpfQrAnqE9Ag16E",
  "key13": "4CR9WhPkAxNrMW336GL9WU5xzrXMqjhcuEekSSfWmNbjDCDYZ1wyBR5M7iMwbFbuRuqTiMXP9dvk2rgwaerMvsJU",
  "key14": "41dTxQkVxBMszhwTS2ab8Rn1pEVgcQrFcbqFdr5Ktc4hBeKjnKxPu8iSrDy5cVUxJVhUTqgC2xyd5yJp1685uRYC",
  "key15": "5LTLXurAecgnWKsnFnmb7A6g6aqBDnjoPnWcSyjD112WvbEgZnqgoyD39NrZU5jLQRK5TCgH2Z9BwvgQUv3RY2SA",
  "key16": "3FLr4gBLGXdFAxsTqQ3DmKaWHZQPBSoTKfGhvopZ56hzbCeeSbL7X3Jeati6dEvHkr9LqFBVh69kcQTxg3UdFXZV",
  "key17": "273oY3TYFaQEeGDCTUj9ceVmLp9YxygDv9TDPRBu4sMLDHbhW15itCp8QTKQYSqowmdHtj8N3yzUJguNx6Qr7GZB",
  "key18": "4kJoKV9wePqVx1ZMpZULFfMJWQ7zV5Nc57mwNQFz9gUHVrVYxjHzHMoWBm6ppw9nMGJLbNmTNXoydTRS3W74oxQj",
  "key19": "4wE1i3WyVxiuUzxub8dzuvFft6vRGArDSkpZ6sxCKaZyYQYoNTXBrXHezMTa15yhUh1vpvEgbDLzA5LKM4aSn8wa",
  "key20": "44xVu6h6wgruRB5YQaR2GGsJV8oEv8v6o9WjwPCVU3shEGbqaHKXndb9hmbpBzavjCtNYCasZKk8tPKXqLfsikNd",
  "key21": "2BUmnLtnwiukbwBm3N1GYXvkF5843ux4Gbbm2KrSvb3ETe2XJrKY4AsFRLa5inw4caQthJtNQaiMLkPbTFgeQHbr",
  "key22": "2oeuo1znX5nvzgf4DXqrJv8ACUZUiKoXCLByF9UMBauwZ4z3gjGPGW774ZHiWJNjuBwExbS8ZEpEZ7UWDfvWFkuW",
  "key23": "2wmXF24Dm91iXBjSDyx6nQjhTq1egwS3TFQ1aQhfskKth4nV6hUvkSMHXBuHCeQtB5y7ikophVgN3iABxRe1QZCn",
  "key24": "3ucX9uktdunV8x4vVPmL36f98dE4ZUwRb3h5m1jBHrWt3w2yNX9Tz7uagVnJZHuQTarYLrvHfkaP7oFtJRzFJFFt",
  "key25": "3P96CoMeMq8hTmJUSEeHxDiLmdH7EUuNGYMU4UGcwWAJ6cMA9pf5cRckEdYEp6kksUGuQsTMqHoGcRJUL9uNbv7B",
  "key26": "4advVQSygixtwfecjeZgYtFMx743cbkXQLfyAhy1Wd5wQutu178PZ1MjXnynmceFWmiVarQnbRM3Ppy8VGHgXVq8",
  "key27": "5zaU4eEcD7LtC7wcTHV5mpmmHFsMJTcqjTv2QvbXmuivBkgoatjXoWikMVZwtUGM3jCVj9yngF4QtQm3tmHKyNkU",
  "key28": "3nDK7xFofUWGpuSiui7ebxx1PpwH372BF1NDLufh3FDeLRDDRzhuzV9ZJtKNy12oZ4MHgJLtLYSDw89ZT5oJRAT5"
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

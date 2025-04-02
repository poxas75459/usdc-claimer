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
    "igvxX3wFsWCXYBJx6TdgQRLBYV3Y8ps8TBBpu79U5Nci1tXHWQ2m9CSxPf8TT77PYGRZAABy9RRi5WwvBYbFeK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pzoJx2XXjJnTPZXcN1xLFwxQfgxM3p1BAbJYDowT48JW2ZtFVGm9XZZp2HZS7ZTtDfdj8ypWWPx2iMACbePLwpA",
  "key1": "38nTa4uKgXhMkMuhdZBthGrXFPCWw4BnQbgpXi7WBAomTJtBCJGi3WhVn4fyBn5e95sYH3tzB1uYYjRPVNRutLDF",
  "key2": "21sybPXq7kbZMfk8XJfVaaaD3af45TiGbmm46KLAG3q2hwTcagHW3Prj6J9qGnnxLmzr6nxh7QSFMjQuPoBpi1Mr",
  "key3": "A1juwG16ZWDkC9tdnVZ52jk32hhymkMjHhyiQ5BLUj9NbHmJRwaJW865hefnPWsm1NazF8jSG551QYMEWCCekHZ",
  "key4": "3N5kZyLmK1VNB6ijmQ9XXu17RvjtrinG9W1cyYwDKUkCSbQb4eA6HrHnGeHpqk8hJrk8frZaS9GvkofL8NK9HaRx",
  "key5": "e6aPxZoPGWe9KNc8ey6m3kZ9MF2bLuv2qH9ibCTepyCbWyNYDWeZk7ngMn1JxakZAvosXSBgZkmKjyN89GgqXmw",
  "key6": "SEybHxomMrZML4VPSpZyhojuLu7inrQzgGUa8aSGoaWP7RiNUtzj8VVV2uT6JNXCwbQY4XoFKqdi7TTACiFFSBU",
  "key7": "58Ac7CnXRMxQoWg4oWemJ7rfKXc6fkA1V9BEjxyvH4DVNSvEij6mqXPVQgb7GLSZwrC6kRKtdMCzvpeJ7BkVkxvx",
  "key8": "3nH8iMjezxEuAcdh4YDxotFELPoRPT35MutDCLYGiYV9mLezDeXWMNUs2T2J9JejvmwTNUUntNWJCjLaqqVXMFGg",
  "key9": "5iSbjiDRCmZgCQT2faa5Tb64WLmcc1orDKwa49gU7copECpVwprPv3eS5Q4CRxEhV6kbCB9YpsFLcmrVd1UZAopp",
  "key10": "2VdvWqLhLePb3gQqhRbjwQ9u9Q2X9FFw1bnwamMtsueZGt2UxwF6jQFJzmrQ45ML3styshQcRCYe4PBFx5jw4Dg5",
  "key11": "3CUEVSy1rPhqXe1WXVpbVGsQXKWYwWSLtaReMPzK8xHhDRWErvZjmaxRX12XvDLRHeKg5rE8LY9idsnxzZtPVRsG",
  "key12": "4scTZkmnL7j5rU61uVYcR858GJ7KV5pBGySoaogUox8X61wyZBsp2MUUmAin2kjzrV7fEHqvg9XtULKLYtGRe2jS",
  "key13": "mKMss2xhrCJ1f8za8cMz9DLFLXwqD47VfFMSso31ysBvjHUYs8iZ2JBmrvrpKK2wQbX2j1u6S5E1Kzhi65ZJv8C",
  "key14": "WipBHCfGpPiWo1Y7qFsdR4GQktTcVeQTcBmgneShNpp4tB24c796xUhfD8o3CVAdtGt46Z3i2cBvLSqcDg5P54c",
  "key15": "3ZBHcXCsywFR754CqGvJcJqRh73CWmacwTQAdQCPJYQBbNAD7SrGMbAeQGkUzWyT9131t4qjYxdAjGy8TXWety4K",
  "key16": "5i57i1vxzy2JReaMYAfRW4LKpr31pUdW8eUVSwZbfALQsFW1yKVZH4FLKeqfDGjUuRNMsWvUvnaMMEfr3UY4qQWA",
  "key17": "3Qtbw4YK46mUyYFcwgHRN9HkgGBPjFstfRLj35BAm2tzhsfS9ZuDeNMbzjfhFrktdcv7DDHVyrRHGzAJLnxtWiG6",
  "key18": "21kGig3csjL7rJf3f3w6X9cRssWHuHYt2No9PYU5mg9gbNrmdGyDM1XR8GY8Hb4gct3Ea2TPYo1ufR7Koi1Ary7n",
  "key19": "4BC4aQ6KTj2AxZAebLGp3WuFMWjdAoeCuYdgQN4PZkRnnxr76uP3zRxgaWSoeE553kztMv9WF5Be9HATJb41cRqK",
  "key20": "4w4ZuWQUMpfAF56aWkwf1P64w1Mz9SoRJGkdtCrQbYzysvFycf9HjUCnKo1CCFrJZ6CJGhQyShz4uX4ZUUCm36Re",
  "key21": "3br4Hgh5nVcGjBBaBSZyCXx6eb7cnt8gsTx2Sjzneae7yps2Ek2thA5FC3NWupax5YvihPMpWe6UoK9Ni6QA719q",
  "key22": "18KSktJqzwXy5xtyaLV3XeHp1XG74A7EtJmwvTbQboH1nuHDih28AxPo2rXFfRmRojqsHD7Zx6uFYJRuWsUHUAb",
  "key23": "MCewBDJaAuVppSFAwag5QUw6qbkEcmmWmx2rGb1HYZLhvZKYV3emUeFVP2pczKwXNVbkH378EKY2zvYJtDxoMwq",
  "key24": "5EW2TAQxb3rq9xPEG9AEfHreh1VwHqBenAq78dZHKaWqhehy8pboAMxnd5hwo5jsv1EoHcBFoYe9LNMFbUGC9yuy",
  "key25": "5YgKdbv1FX27JiygBHq1Pw2dks4maVPtGoUmDvdpmECcUDjq7484FxWuRJ5TRZgg1WiRfLdeJ8itbnHvkt4wfu1b",
  "key26": "2Y9vzbspjPjvEdYGYPkfZRFap4SEiZT4uo4savafYQSb4vrwhNfj1475jkih6Td9BF2QBmEU4kJY6gwb6W7xxVFS"
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

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
    "2WEykUeQkhu2o1Yy1rcwhxRczBGDqVCnQstC2q5PWrSrGG4WNoBr4S38emxud3uvYbw88DCxjRXKYuBvGuYa2SZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gundc5oto6ErY92YGPZvDmYmEXGgMKDYk2AHeh741bPuYpLJtHzmyK5ZKUkiopDbp1P94vSgjpXVE92GSjsz3sW",
  "key1": "5q1QCeB9Mi7aKwBGU6g5zXKdni7Awo1mpyHsNLnvbzJTy8CLonNPSfHAUdnMbv8siyhyPgCZ2KaNptmnCHw1yhSP",
  "key2": "5S2wevGq4QSgcuv1tbowH1wxrUVGgocAdAMYjw5bcLVNJiGcoSS5VPGbn5gL7KyJiqgegwXGgHerhbqXHF8eQrJ",
  "key3": "25ixNi7nvfZoV83FEugrHdoszpxRdmZFjFVJPXp5ZPXnbDT9Ke1d2oEn7NRVnvJ6s2ph1qZCs1gzJdb1WEJTGcnM",
  "key4": "65vGmn3Eq2Dbu3LKEBtKGmStb4ukZuuhEEunVzsqhgsSiUmvyZa5KusUeXuSYWVhiJUNRZp5MzXrkYyLYm54SKfb",
  "key5": "5SSrpyMR9t4RQPKkGRxp4KhsCwUBrPctypgtP86VcHgfqRfxqh14peZgufiwdddNK6BQT3Q3RCuEJWTG3p173KnW",
  "key6": "2xEjKN2qaCfBSx3Va9ZNxBqCPeRysYPyME7XS2yHazKdmTZ4hNvmgrRvtX6UNSnezMWj8Q5v4CUs6XrxJQwerfe3",
  "key7": "2CQE4r62uou1b6jieZ3tEYiCsF2AAtfawSQP12H5cAdpfSENVynzdQy5iR1FM5eQzNz1ZXcExKx7kUwfV4kWnR1W",
  "key8": "5KFNN7ghXZP4Rv5pXZhwpaS5BUUMzM6ZotYTDReC7eXB9RqPH2pMaujuJJWy9rSUzUMozxeS3s3jMXjnsiX2XkKA",
  "key9": "3QEHeZM85ugaKsEhAhYLZEk6YqW4Fk4BwDhvahQ5heQharz2HAXedGQvmHAM2dhcWjbsdELTxxsxBJtMxRcbtUzi",
  "key10": "5KtzMnSuAbj51a18LKk1CZgJXAuDK3TfrzsLSoe2mrtA2xjx4xDbKj6WRdJHwahPVBaCbQbUoSZxmeAJCfHWYAQ4",
  "key11": "4kAAZaxq5HsD88DaoQWvZWxaBcUqNgEix1jC1YkTw5SnitFH15S5LW7PGGkgAQ1aJ6J8ic2Uo79v13N3V7yEgwuD",
  "key12": "5mKnJqNhYxgK9BJFGkKD7ctUbYDuqBsQJ1zn7zXsHcym71a2ShmmcnntM3EvYCgpbsBQk1s2RTSUPK7E622jEqR9",
  "key13": "d34NjbLHM2V37e6Deps9AQHSLxRPZiR2hXYoqAJUY3wLktmJgQNr3YyFUyAXzeCyzfXuoA81qzqqr9LKaKGrTCE",
  "key14": "4KL198sPqZQFJVjRDvM4V1fUQ62NXxefqLcHiAQVjn8umC9iBZj8w5qEVDVREWWx3VRpxzWiYER6F6aVnrocRXFB",
  "key15": "3Js77K77nv3EpX8cwFUidJKvR4BFbgbHFyfngjGwnuC5Sei7fiR1ErpkzmtB3wm2CqMPF246rMefWeKxLbE3cnQb",
  "key16": "2KcweFQAtLY9KdyHhCi4yaHJSZTVwMjJSaK8kQ43kVf3tuS4ztuvcrXr1f3XwyEt6QBEXnnUqBjdvefE8mYizeTP",
  "key17": "5bmqtLn8hUMy1HGv6Kv3sPP6v4redoB9LVbhfJtVKvxW8SYyZmvrjd7n9w2JRxU67T3YkW2DhMciiSEHs9VGW2FV",
  "key18": "4DWTLVfmW9zwmJuWrBZBEy61jMcDNhaovKroZmecRdbm9yvCRFWvRWeH8iBbZzSXpg2HKHk2MSq3BULK28jDJdZP",
  "key19": "4Usu6iJwpqcEipcGkUY2sArRNMhk7rnnUPPjcBHUzf4HfEgrQvSNyrWMDSbt13vQrkUidJYZwFRvJp1W87RhrBwa",
  "key20": "BG9RxWt3ifaSJa7S2oCscuAqxSMg9TpJFz6etYbv8WamxbpDmEY63soXzgGFBkUZnjuUDgMrRUkfbCg5Nt5Ehk5",
  "key21": "3DA6pvkDXkHrFHecyPVXSQMkYFg9SnK12zpt7okCwWBWjrzcth4jZVFXHxxzCUCHqDPTxLmRg2oRjLa48NGEB6Do",
  "key22": "uSUqduMDDJyoLtD7jPEnjtvW9obt4GVhv2mPZmK1VSmCswHJnM6n2mKpRhMv9SfP8NFmUvkoiVK1FcgNuVeEzjq",
  "key23": "3FH1TYwS22XpqwDAzHbDdDyPXUTNu7FUxH9ocHxQNy6Br9JzeDhr1Z8ekiyHJxh6vM7M2Rfh8GrHvLhs2Jeq4ZBb",
  "key24": "jXzNAHgmcsB87TCqXcwLm73nrsXhYkkqZTnPa2tq4KPE8F32NnspRFAUeaYNCBHBCvy33FcssPBU98waJVxbeeX",
  "key25": "2MAJHmxEm1WXdtX52JFaAvsxu1RzABNijDFwpwR9MQm5sNpkKgLTErT6MdHetP8sFeBkXXjZw2vvTTZLMGm8CujJ"
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

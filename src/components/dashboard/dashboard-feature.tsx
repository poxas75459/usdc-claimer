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
    "24CgE4ncjCyfpE82SEDy9NPvoWh2JFx6X65zymofdgnt5cRsiQGceUXQjKQHTpBqQKcwCX4B332nMC25x2vT57DZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AitnNAVDKw5L9W4snntvt9xwTPjRd9ZH51HHU5uA6oci67jkpQb2XDgE1vzvVCpQfWC1z2aUbzLvwdYCGNyUxqK",
  "key1": "33LQUCHg8MuTR7pF2E3xDymMKxD4WCbCB2wQuuztYXUa489gZ9pLapbMDDbTqi3zE6J9F9akB5W9tQBJFXxtqwA7",
  "key2": "2HB4wLu2yWp6UzfEBSQXYQcraVkRGUVCjav6qzykqZb2CgYx77fP2FweDWMNwk2qnXhSDA5JLuxRuJnb4jUrBUS2",
  "key3": "hADt5frJ5JMdd24fvAQWH9i8QqiuANQQ1BgX1tkfVxjrgABQv5Vc4zK27P2MxP1SBPaMV8FujJfBFY1FtGGym6H",
  "key4": "4RM4JhtYHQatFLdPgWqYwaLpCwjzZqVYE6ckPqPdpepX6ewPLwHggWdjrSrgtp5Ra14qhwuiCb8wL8CcK21sJ49J",
  "key5": "5YhbYb9gYirrKJNW5S87PZpxugrbdqU7EfcfSuETkci4uL4f4FCTooHdpyozTgZPUbQHbz2i5Akp63cYD2qfNqfC",
  "key6": "26sTk7kbdFtX3mDfPDmwDCNUSCgZLeoXpzmMhCy1ps4XqvHVkNMkAdW3eSLpmSAJ9dAAk8BeRnzrd2AojW7Za8tJ",
  "key7": "4TBXsRsqYStYDGVBBypPTgkKczytxMGSf9bCqDw9HTYbusE9b1vhWN1urRujoLxN3CFEPXd5ckZaRe7TA1MrUzCU",
  "key8": "5Si6wr82Dqxmxa6hvQarFZEqN3aaKUf84VLApwuZyeRn3dskMMCtP5JYYyFNesr4zDiSSGubgPZKvCNexHWzrSTS",
  "key9": "33Jmk6CwqyxRNmAQnaEWDAHyUMYCtowwcAdNMF1bh5QEMW9xhUsXf8dZZJidxSLniUc77sM94kshXNP2BWcfW7ef",
  "key10": "4YWf4JK97WLfa75jXSC79FC5QkaAoxBaHrFYW2Ty3CUExnbZrYXSdsV6TjoCvnM8SXVEbbCbMKVNWvgkcjSvpA7e",
  "key11": "4dKKyEN8edHpwZXfvHnREqU98a5t9aXw7HHQnw4yakz6ENLF29UoifFjUiMEzTjcJUEbVYAGPpPvnGUxZLwXcx24",
  "key12": "2cGrXmWb78p2b64KtvsJ6KQ3BV66P5BCcyEBZHAbrHCnfHxQAn9v9VfCFNGET4PKFo7E3T9iEjMtdgY4DVzeJ9bt",
  "key13": "2s8dcgXty84qq3vZfFMjkasyPaF84mNw2EszEnnnMD8g6t1KPHHrZ3pm61QNFdJ79FY3d6Y4winMRH3fULerQ57p",
  "key14": "2hMBKyDTWwcxLbHdspTpCEmurdZZPAQk4uNem4MHRBVQNKTpeftWqghbU83A7j1CMubEpkZrDPjJwPeCZtajubEb",
  "key15": "4T24HPc7NJoCNzQVNS5wmKZgWaX3d2uB36NsJHv4TL3kRNSQidTyGRHPbzZqnvYEBbMyGFeeR4X4tuxrmh7yh4B7",
  "key16": "3XXXAM2cRLehJ6A5277UQWqcLHPu6P21FJd3rFro17YyAGzNPaqdAABCVcfHdqnEECorRSzHwSubyxkqnYMFXAGh",
  "key17": "B5fEXdC6wabcfbnhMzULnw9ruBY4F1qXgXfCv1cD5oTd5GELfDsPjcsjFVJKu7AP2a3DXcYUWu8RbtdboMojQfG",
  "key18": "5sHFTSrgKLmcSoT7KB14V15HZfXBfGqpSX4TGPGkjPvyZFWNezJU9aj9FGbNXYU3rvM6WQTxqv7pv4aeTXzKDs2V",
  "key19": "3B8tCAzLrpWJPFvNJArvzRYoL7zfTnAEJ1tA1LRQz7tm3UcyErfGHd75Bu9yu8EyE1K4ytbN8fmPDKiomxYayKBi",
  "key20": "6z8wuXyU4xNQBRTz9iLr118FNVneZQLMN17qgNVizDzC5EqNowS3GHEpJiEG3BcGbDEUC811e6amX6MvS8XhRhG",
  "key21": "3N4zuJL9h3FRetTCU5aEszM3hm9PA9VRoS5tp763TxBgZHghDCWUyzHQhDnoJqamVJ1fg53639WoZeynz1DjYKK3",
  "key22": "32AVKjm1q9Cedn694iBC3o7eKsKdT8yjTuSmUNxZc238BjM78uvsXgMVKy7k85d2N5HiERNQ5WFCRbcs6bHbXTSW",
  "key23": "2P46cMajVdgrvLi6Es1F4groTJwzyrcfdzAbWujz71V6Ssztc9Lq5ZdUo5nUfFTedtRgU2su9BBWPGfVAZqpCTNf",
  "key24": "3UiwjiRLK74XmoBf2zabwuQpRUm8nDV1isSE6YJmgzGb4yPqKMcAc1XpQh1cqcvkA6UfHGsVW7PUAugFYc2AvCbU",
  "key25": "2phP6GadhQnJa6K2KDsR22E6KN24DSUP6LHasnExAt8CxV7hc25oskLBtGuPmXJAuSRj9n6Ji6e2CW8BK2JAPonZ",
  "key26": "2HtMfkmzrBTcN6JX6qwuxm79nRLRpLR3QBNt67gxYaQNXH2ZtZpyaF75ond1EQNYmmww1HkQUBd2aWK2CS5GcTGb",
  "key27": "WpiD7PWBvPQiHboJBR6pVpqpAyHX2Z3scbZfoH9jQjmS46muUm5mCyB8dTRbv8K84tCs6rAwXpsA5bXpBxe4oae",
  "key28": "2twZTbRkGbevYyi1K9XdcQitNcCs4FZuTk384HsHhL8jp8SbUrSVHKooXokPimeFcmh9hyTZioWoYxuoMGtXE8Kg",
  "key29": "23WSyLjSotFdds5sx5fBRL16mx7rSQp6Hq2USq77QHHntYSvhmkxdwZQzmbG7N8NtME9gEWA2tnkns6QAgW2HU5v",
  "key30": "5w9XYUwRjH2WQRbSUAjAJdgzZoYLy8eJDxGyHtbhYdYwpRMvy8vZ4jFEigi2BCjiaATSUVjY3cCFwKv7JEvCceFS",
  "key31": "85v2Z33h6nwvvJKmBrracG42X3PHmurveZdBQWxz4KxapQRC9UYjbuUEhtvMJm4iRqvtMVFnXSummQxLH9vXXKW"
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

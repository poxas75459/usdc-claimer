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
    "nXK2KduKGCo5XrqMPPhFznJovP9APYGaUhgfLrGBFZTtFgT5ZFwDgVWhWspBQNZc7H3CPHneVawQXi42KfsfhQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uL3ty4CQx4Mxh5GCZUQ2QHtMgiWm7du3GRBHLisDXNkZuDwsZroNYR4aXuZ3vh7NsarTrUMgc2rn3wdEbxKx6Ki",
  "key1": "3fiLGEK3jCEmcfe9EAvPzoSsb4EuC3NdVjjS9tent7i6KwrUB3upTFjNWDkESjoKDxBFUGXuvQfCW2aTsdSzSA1y",
  "key2": "5rTwzXxFXbZ1qSLdnaE97k3uva1trvD8xB8eQGN3qQZY8EgJa6PRPM7xgy6Vu5RuyEf4XhZV6PDPkJ9T6nKy8mYj",
  "key3": "2ew8inSR9GQJJ6Lp2P1828G9d32vssWvGRAkM1pVToougiYtHsQK52Sb1KrERKFQ8H8142iUWiz5cmpUYMKU12aC",
  "key4": "4oVHrZ4DTysUZWxxHbEtxDdLc49ZTv16SZPG9AvHa2y6LfUy3iXXtnxexmqkYaD8snt1jTmLuLH5QgbL42sfc7He",
  "key5": "5jd8AusWQoEUaUXoV61trzSJwXsECkP8PEmJddhMhw96YabRvihyqLpz1QUZTQdjmqJPLZYtpjMP1Ai9747JUVpr",
  "key6": "3zPnXQsjaKoUpzx7bxw6NyYWEHTpS8pWkfuYDUzSm9xRjydNrCPk2kGmNNMEL7a3yYBUhwxjFJpHAWXnS7wCsA7K",
  "key7": "DVBNDkvPmv3Qm46xjUqtr6Hwd5XZiAzga3HQbw6UfqAdAVWvV648Z56LejpA1NP7fLrkUZVdQqiu4vHhbAg4g9n",
  "key8": "4FYxEbrab13BHvfkQxUodXLA5F7hthcf2BSHUhkMa2iLkc4eQF5tkyfN79pooQgHwCL242UbeC2F6jnfTec4rTMi",
  "key9": "485h4ogfhGvYxY1X9D8UqyPpq76oPgp4cZ7jqJhg19Twa8HPJSnetCWSniiUyVkxG5gcCNQXnMEwuewjbk9qBzAV",
  "key10": "3FY4Bx5xEEPLUagbSkMUrC1sBgzi2R6YdYLHNkrNP3xUVdr36rUvndB7LQAespKkEf7tv5TYyyBdTPVKUvYk41ZC",
  "key11": "3diF8JFTPjF1HjafGKjHckTFtrw5JKcu1w1YAR8vaLfjkCihoB4m6dTWKLsRHsdCTGEfX5bpeYiw4k9DTaAskmP9",
  "key12": "5m5A2qGSL2h71uJV7F6DSuADdcECKwninMm1bZuNsdS5od98NMkzgaLKZMb6R7X1jAsy87V1ewf2kfqp9BAMPL9B",
  "key13": "4UYjP5ZP3FdHvh2mMYSJZYudrFY6HUyKSe1UhTtydja5CYEzYe9sEwQTSSUdqs5Kr8vTfiDCYWSxYm2wmVYTpGdK",
  "key14": "sLV41YcVyDNTZXDRCVWqDpt34iDX6byKhZtKZQ1DJvx7mT6oSmaDZte3FxZDFVLt5RWmKTxso5mS4qfEvichfnN",
  "key15": "5qoPz68EshSr44Bb6U9pDU7Sprmsh8W1GQ9VvAYdsgQ65iecunREpw3CaLpKovP5cELh913TqLzypooqB2nmNpp5",
  "key16": "YJknxqxW73Hdpnio92qi8bdDt9nhTRPUo2qVfWKrKhGKbr3xTtXhMv943aTX1ZDtUSr4N3T7JyfBrP2wKrLiu44",
  "key17": "3yDd8cAkGZB4MWLG83YNaB3wa9Z1kX6VrYebXyG7BMCsLc1e1Zp12b6ZC5V4vhu1xvYRPBFyxRMmfomaBnZ12fUo",
  "key18": "2UEqNjuiXWgqmhtyKsthekrQ45cASPZHEmKHpFEx5xZSb5p3HJ3FqUaH7vqWSeQTbDgwWAaaBRLaGVVeuE6tEQ17",
  "key19": "4wpkWVaERFkTvayeQwVmBbii15oPCs35X4cZG4EZpYbxkzu4tqY13MYv7DAKy7LrinrdNVQFWjxNDCMWy45e2ogX",
  "key20": "2Ddh1EUBXkfiSoXBDVzDVZLUfCwHL23ap1exMDwaMfszCprbF6JgoQYEhnpraHTVgT8tMCbWfvvQP52MYVW7J44f",
  "key21": "31fZchAZQQDr9rNM6N81j58AwghoU2Q8T7oSn2idiuFWsjHasDCNmNDTBdFhWZadDB826jCs5MD7kuktbtcjsVaj",
  "key22": "3oqoWyYEj1SAEsXYLKyWHc59CUT5NBcbqbjyQMr24sgPR5a4vyNCGGtRaRe2wC5DUhUxmwwfA43fMBQryz8MStyy",
  "key23": "5cH1e87kTGbzRERokNGFAcxiWds3MRREQXLrj4qEDfFT125v1MKXxPH8D3z1wvBmjVy8kmDGmow6WCS2QqmRLQwh",
  "key24": "2cVaL8nsGWUU1ihZAMs6UgkjhCuhJpDmyKAs8GXy9Vqcrb9VMuy3N4ZJeFiCTH7zmZFodNd4Fcn8w43TewA4Cq8i",
  "key25": "3Yc9VFDNpMpVkG5vtd6bFSDwB7eRVjv6rbcaWZsJNTFuX7s8LYc5DQXiAdB3XvCqKTVM3X2dDfRv2AXbRhB8uqVi",
  "key26": "2T4jzJ1EakKUPKqzS1fjjxweNz4e7bxh3sa7EAmVj9Game7uBAJTGVmdwkVPGPdb2h9mse9hzEBBkSevoWXoZTRX",
  "key27": "4cfjwDkh8ja5o1H7N39G7yZTdVntsukDtW4BzRtCQBZxTQkY74V5jeiQGY7di6Xoe32xzQT1G9i5hxLjVbqRv6YY",
  "key28": "5ktBkJwuDKHVDTc8nkHFHu5chUYZfFegnEfxNst2Upy7efGJ7BwagNiwAYT98coRp3KDawvD3FX5yeKuVznYm1oP"
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

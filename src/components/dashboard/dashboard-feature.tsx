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
    "4Tt8nWDKt3iX2QE3a4N86Wm4FJWhrJ8vdtsKBi7dEk5NPoRzvU1GhP4hZ25tvyVua5CDLrZET6zuGHRqg3quaL7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ACn7wETPk7UXdipksavioUTZb7GQoZTcEyszQqpQF1WA6n4FEAFTe1JFBYrUQLSgHb4fXYBivrH7buJeff7izs",
  "key1": "4SWJw6xQF9tcZMZPAYnj7UmPNJV4Z2jCLmWsxNUQbfmVH3yD2BNM39Ud2JPXwMSbx9cLUBxL5AxJomkGVmcHMEW",
  "key2": "3QhPJKRcsiNgcr8WGahkTYXanb7Lg88sfmm932uJQ7Dn5jh8zF6VwbMsvq5cjXe3UGsCsieJVFUWJjw5LrPvJ1i2",
  "key3": "LStehEt1ZDTh9vRVrHrKNg4FJmf5rBTQzXNF6D5U6Jpx7C4Qrrw359fHTNFgq1zTHtSswnRH7kM1dZUNEG8rVLR",
  "key4": "5GvoVjZTN2nvcbCq9Lrm8aggpX4kWaqKAoToc6H3KkRY5ycLC5SkJShrG1EzB6LDF61QQjbGYCGPRM2u9yZQC2Fu",
  "key5": "2GgcZkkhftTB2k2RrBeGihTb4XNBxzNfGTXgpcUZxKEqrkA72Uoa2a56Gzedmqa2sG1HZjn4bL8DQfzQaNB3CExw",
  "key6": "2whn9CiAsuBYKtxAtg6faQU4YmMs8WQXM72212F2u1oeFxDDEtopUXoq7YtEXkWj5ziQ7HjhWb1s7VrWcKBzVMBN",
  "key7": "2WdEfJGkVnJUWmYtnZrao3Ucy43cxwV8PNJXCHAvQHderrVuKhKPjEdgSs3Tn2wJGNmnMfHkpqWFDQud4gooSgbU",
  "key8": "5aKct7VjNL4uPSagJPrtaYJFmdxwr38uRNHTBhJfNhXQMjaFf4jyRrtLAnQogo8bsowyZ4DF17H9RKJgNBgtEwws",
  "key9": "h89kYEcZ3GcJUzAZfW7nxxxA1qxAmxxvWqEwVQLvbFbyHLnNaNDJMMtfLvA4YpmWLjEKsXXJLfAz4UJSow5rvKX",
  "key10": "3hQjaSDLkcGh7D3v5PnvrSgR8Q2EnmDTM2YpcLBCaLHbM4epSsXaCL8SuNnthZSmYFDjVSovHEFfPbGPxqkbhnGn",
  "key11": "3LzCYpSa17693pTcGgtqUjMaFcaVRaXGcZzWVsMyxM44yLuL6gyG6ccZx96XHNNSJYwdfK9NYTCAQFSTyWckwuLE",
  "key12": "3mzEgkXTbXc5TYjw6nodbLTzCXZHtAvRs3VT1TsoLWVT937Z4gtCtvShgbrSRLs4EJbU3kRXVHu8p3cKmLQZZXri",
  "key13": "3qrSfbRJngByLgQ6acZpwjgsebSLCD4QWoKoWRti531mzL3i5PvCzS4Pv9e1Dms3gvbwiCPjxtjGLoK5XNsR7vK8",
  "key14": "tQho8G8Hq7EcJZHdg6mjcwwkz26PVpE8e8S9y8BFbGKQCja4mMEZt3TQPcemsVBtV75VXcwfuN48WmdZ5hUpo1k",
  "key15": "2SxfVHh8wrhnF7WA1LJWTZTqHMmnY1gsiXa1ZVZGvJ5gRBRk41W515CcWG4k6DriU6PT5w2SyNt2J4FRsmjD1NbW",
  "key16": "QBtGSV4qGucJaYmFYCSJuQGCMwYhenDPKMg1cj9DmQPaACBNV4pFa8AQeLr6ekmyac6s45MaFqT4MWoWwSyPSnF",
  "key17": "5tLUKZv7G2MqyF8rZev8HNZHeEwKtY1qi9xyuznJQvv7A9nUbjjckiCpz9myMxCM911UN77frgxAbzwkG5dzu8gz",
  "key18": "41gLbh55G8FJ2oKci3Exk38ZstNM7dmxwjZYGGP1NXAyKTEEk2Tov1aFASyaTz4jGyTZdhtyCTgpmKvp1aFENtA4",
  "key19": "5r7QmvkQiuLYhXe9PvZf4bXk5kNyaQogk2FtqsPfUMTVZcQh9tqTcRZVPjXGhajm5CnviGih1JavjnRVXggWJedq",
  "key20": "3cdUDFSPgmzMzudo4gc5AfJ2Y4Kav9K4Sipji3hWP1mjRLbVrQCjwHCVC3FXbqmDTEySxZPG8YbgK3tGaisXMVS2",
  "key21": "4yBYGjXJzeZfU21s6UeRCKNYV5Zgnq8amUDSmUAhSfKduRRNLxxDBSE7mgwPsapUSiq5RaVYgaE5EhaSHrnNcZmv",
  "key22": "3ARtDmt5qxyC41WepEZFiR9zZ6Hv29zhxVezVxseK4SdGfcyp9kpr6impRqx7X89LgYVridnH2bDpJvxLJD172Wv",
  "key23": "z3gnFZxjC5ECn8U2zViy4vmCipePDWqaxNCN9Qerq639odKLniZ4tjASpqRspcgSKAhgUABgeNFJzkAZAvrkZLi",
  "key24": "5UusZS4knSFJ2hf33QsvUZ7mFpieaDwY8RV1MBLkyYE1GxEgTvTHvAxmqYp5cZBQZhwJ5N6ESCs97bvsS7wrwtHP",
  "key25": "vuQYwuBSt5hyET2BsKEb6hKqgFS2qNAbRTYXUibZiyZRg6tqyVkm1uNh2i2hPPGV92LCWiRB13TGCtxQakH13r6",
  "key26": "5ciJ4hyMPQ9HNtP5SP3GWStooKBwm3uH9rVeWi1SeN3my2kaTWW9a2zGna2HmZX8DNsohscCH61R1CzTakNTdPoh",
  "key27": "5n1XG6BUSFUivw5opet46aDBGoTALTb4mP3rtj7aLgGfYaRRFHyUNitUVTQ3XjG9zmQqDZCoTCskpK9a5ek6gbMG",
  "key28": "4zoRR7kFgR7Bf13DSFJbLWv7aqqqVSG1fGiPf33T4zKKwUfPdjREFGXCTba2xitFNcTQVkzBL8hNdmz747Q6TSUZ",
  "key29": "2VV7SqfgeezyUDeRMbgSkUSUbj65Ni6fkxCw8zK4S89M1fFk2h44uthJfnftBTwz8M5rtVhJ9CHzp2bgFH2Xg8jE",
  "key30": "4Qb1aRAZvX7coFcHSczajAwSn7fS7dnfP7Nc7gGVnX1gPCNKnLAp52vFoVHfHvRoo1cjV2XpGFfoc3atiK6pceva"
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

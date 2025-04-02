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
    "4U8f3847udk8vWt4D99KFDv6Mke6ztkvwVeFxyu7jEMLEvMZPNz7ywCRZ1MU7rvnBKHaTwq9Jemy7EjG2PSNwBNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GBLbAzLnrWq761nbZLgP2aZBhakkRMqVLMNtjDFNDmCRVuCENfJn9r8fCEoDnDdVTCZMRAKAcaNvfsa3sHqMZAP",
  "key1": "4vfiHYCxQQtv7891XjCKVnYfVmTkvwJxupwc2d8EyJtdUWBhwLNUeN2fz5T2Gu7NeUsb7gXngGezQeYAeYREdhdJ",
  "key2": "4x4LxhzEPLKE86R7PAAvkMaSSeaU1YfDZZiW1jQGbKPTZHvUvJd6Tp1oMFCbPQq64ZZr7bjBR5wSvgmbc4JDgnqf",
  "key3": "4izWxg6wUEAf4T2kQbtavxrjicW9HbChHjJbiiz27HYAvMmmKkrwg45UCbvxw2fNaunKuzSG9sixxJf38evgyQvG",
  "key4": "zSKEiU9vGpXWso2fbD93sYryGFEnnxiaJeNvqPo4aitus138GAwAM2zu6Zd1EJGkGQwbxWW5dHrWJ6V4BTYAHjP",
  "key5": "3pdgH9f8rDzCWDnJtc8tyKCrQGYMj17PWXFWk9TJjU8XH5Fc6ku9649BDCwp8ytueJsi6d1spPFxRbx4h62Rjq9V",
  "key6": "2PHiG1JJxiBooaW5w3pZAHYnE3yoNFMFnjLEbv7dJSFyyej7X3SgjVTd5v9L35rpiBQEkmWZgpzydNkbUDN5d4TJ",
  "key7": "3ASv6wzDzZoEcU6pVN5n7b8jPpWaSg3tVECEkoHWnyWxsh4JfFBTfpUdew6jPckS1YVXBciszTq4L4LZnUurUPvz",
  "key8": "5bfnb7vbgiLkzJQPCMtdGeF6VVMDKvmYEyyDXXioiiELv91iQpjYPYv8wJ7LvfS2QFmUF5oKrj9q8tBHcSi53V3B",
  "key9": "EXR32RJ1VuBSgYK9bKT1efc9cdELuGEAZ7XYSFWrbqPLSUN9myzkyNwxeutd54KYZvwYFxiEL3EEbA1KKvve5Ku",
  "key10": "5rVmvCevvX2BdHREAg4LQPRDJLkN2YNajmhazjncyzv6mt7cgZPg6zWJSm6fc4UE4i9wNAH1H1e1KHNowo2xeQvB",
  "key11": "3YNq3ZXzuVy19fXxat1KWkSGRK1QX1MFJ3igGzAEDypb2druoNSjTxS7xpQSCKrHusec2cPjbecmqAHu4DYUzrXa",
  "key12": "eo1yREPoaY6tc5kDZGS2ddyRtrDqbMboUeQkQzgTV87i6LUEgSJCMwEA6y14HCjGs4DNC4E6ZzTGrmeqMGafXHM",
  "key13": "4vcuCf3gq8thwEjxkTkSqbX3pY5YfFZcbLJmfyJfiewPU1RS8N8gzrSuEeTRhQPrN47dkHKLhGUGRErxSUcM3wgc",
  "key14": "2MgQtB2fyHotbmeLtAP89WecZ43JRDE253vyo5ycD3xusYRXZA8ypqkViUPN2RMgdFfSqoV38tLCWqwwmCgMHa5j",
  "key15": "CYHfxH1Kaa5fAjjM1mttbTXimbjST1VDiZ7eUNE5AQdEwEM6VmpTrHyTc3tVfaDe2PaYFPdixkA5Z8JwHgCi9EW",
  "key16": "3LiRZPmfTB5rQXpdvPotBHk1Ybv82J6AK2BceNxhANvDhWAHs3ESJymjj6RjcTBSrLAnAsbh6wtQw5zqWt1cbasd",
  "key17": "3neHK7BC3zXc3kWzkZXpBJC5MHi9ztwYGcWYMuJGksgvNYHxPQPmo68ijH8iChE7BXYThE31b3z1BaS6AjXfzEhr",
  "key18": "5auv5NPF4XYzMAd7zB4bcLtAy6GTh3phD1sPnNTXKaWoKvURJB3qcYN5Q3PSjvWfmcXwkqG7kCuDZmvKmzHCY3EW",
  "key19": "5Sv4az7phh6vZGBHV7aFU4uhN79kWSqD4k7E4GuhXnop9sNZG9jfuCU8B1a6s4uoCVTsCpcgfscVVCVhB83F6rLR",
  "key20": "4YzY9DJNP7Rq7FYvWssu2Yi2AgaVnkpJwXqtAupu5oCRf9A7PwkgCEtV9iEk8QBYu3upwjBi6Aq9hPSJQ1cLqkMd",
  "key21": "5CM64aS36tcobC9pcnZRSaZubbF81eqTWatmsCNdePkxXD7YjF671nU3kGEuAEmXHJrUakn6yA2MoY2uY8Nej1qh",
  "key22": "5ZhiWm6gc4Ja8Yfj5SpF1J5gPX7E2CU7meBaF4hW3ELopVQgcWR3gndEwq1F6o7jWkniyBC1xzeFBQbhNaPA5x9b",
  "key23": "5ov3tpvo5R63W8yr3XngnPGEWmm2pHHozPtvAuBLLtHeiBkQUPCzpSX7KmWWNM1d1yg3tS5tERHS7FPUiNSatMxn",
  "key24": "2TxGAsyVb4iDCXubA7us9wvKqYvAP7eKrDibzoSWm3SBCbefpa5kE8JnywD7ZhiQeDYAVwUipu7ug54Ycc2GyRb5",
  "key25": "5RTJDFCdie7VUoUFZPwzjKS6R4Mqs1XREQMzX84XqRP4vgM1cGbN4gNBscXk6mme2vNz3e8nQu3BSQuYQ8rqzUwA",
  "key26": "44YvSRivQ9NTCYt1yZVPrmCbDTsxFbcNJF5jmtC9kzsiFZJec71xeWSzNVE1ToEobKzXaMaQTW978YBu9nKweoq4",
  "key27": "5dbVsSU2sJFHxB9eCHVuNcxvWPcq8jtXQTFmboxcF95DTWRk9XcamdvNwX1GvvHbhhdD4qA6LoQ1HfYV7XkxxzEJ",
  "key28": "5Cm4cK9TurWiv522N5BkS8u66QyGvzhR27Dwp3q3z1t49HREc5VCrxcqARNooNdBcXby1nkffo6CJAboRTP85oNY",
  "key29": "5MGrmXCp4Hh7Jn6V3WmgGr2obZVo7rnG9P5ZmgeFpA74TRV1QySTeLukLpBfpUMQzqTUiwtKwpPRhMuhnfvp4YBH",
  "key30": "2BmbpZv1MoVYYyNHDjnSPMgWknGHhefyG4w4cqQ7cLixQKZxSjGc2m4FFf17Sh6qqyH8Wzc4Y1twQfd7ZeC7V4XK",
  "key31": "5ZXv8kDiukYUnx7pUezcwAn7yiwHMSAsTxAKt6br3hacW8JoDoPdgcB6xigQJAU6BBm5Hrx1AyaurU4vnA6vwXPN"
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

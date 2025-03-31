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
    "uvHmjnbgCfALNiYdK48guGkEWJdEFGJxQhuivtQbJAkDRkxaGksRAGnHa67rYinos9teCxxrXZQ87RVPThPPaBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nJ1FRFGkA3Y7zqsFVG61rGLzzqeZfgCTuXUX24GKMTDrmsgK3nHQmAdZi2bS9X4sRhVd3nkp6iWZB5M3wDLdtox",
  "key1": "4ndtdBDcq7DmrHneuSRtUdjDpgJoMEfphefjtA3Qcg1KH1LHhWdHHiQhZ5Yc44g429bPvwKfT4knT4yBSips7dUS",
  "key2": "29JFiVrUoQSUR9FWtXW7kvTDx5z7dbjdtqxKyjssVS1MMeeAHoszYTcuhj6kuwckm83jUJcWc6WU1mEm2p6f9ijo",
  "key3": "4kBaq1uY3FdQrkDYjBMreQQjzGfbdnkcbPhf3oTm52Ueu7tBWSFAsFZy1UY7kbpoVC1bUycr1nkJcuprmM4nYbUa",
  "key4": "4GYFV2tYMnCYzDZPkkU7h54LZYgJ3pr1edfeFUAgTL49QjiztuBTFGtizy79yuAuFuANFCyxeaHNVeJfJwNkW3yS",
  "key5": "4KW115AR9YEX2KPyc7Pvx6vfHxRtoFvaNBNsPkP9S9FD7Sx3w4PKv4uXrboBxPqvDFEw46mbvjKmqZLeYLNi122v",
  "key6": "2NaupGofVfCLVtdJCXEZSCauz9EFSdHnU4PGFn6Ff2KTV944mtyWwxGMPS6c8eFfMtE5GnNJo5m5WxnJ2E9XVPPF",
  "key7": "2xrRLT3sUte64MeV3YJXTLAhrwsYGRGLbvPm8MAJtG5YcpMoCit7wcsVPDZpU1BUUayfH6sQPMzveXabYSXx6sVJ",
  "key8": "V3iXv1ybswusQhML1ph3LYi13hK4upRyPxQNnBt5hioqTdfWGsJVXT88nBaKmww9owTJKsu2wUaBMjjbaqgyBGX",
  "key9": "4oTA23aBdrRRyHbjenWGXyhDt3hDToLpRegAD1JDRfbgVbukK7XD8HXhUN5Mn7dDnq2QxbKW6bxoVDogV2BZXxRs",
  "key10": "4fa8R4MvASDiVcgKWRzDZqstxKguLwLBaBJCgenSroNUhq8r3ZM2FpswhL7Jfe1T6E1fTzy15VeK8SUW8PVE1BV",
  "key11": "3DnHWAXg7SnjpRxFKBvmekstNY9enGHKgP5Z22ekFnMYxG6Fz42PMCHYK3E6d1GUkd67hZCvyoYEwtFMhfqdSJNF",
  "key12": "2HQkVNRq5aDpa7HmBpxCfgtzTMmcWmKfGfpVxYs8mmYZj1vsiv1LSMuZaKXxeon58nUX11AwaJmxhyd6AYXUQ2HX",
  "key13": "4YwKVqpnYmEqw5z8sfJ7Q1h9Db1YHayTDxJmcrybwazWtRhWHYN2ju7rUjPiM8qKTFeR68yzkRnfwg6HT1APuuH9",
  "key14": "X1woU6okTaGSkfrdueCaog9Nx2oF5zWwmaje8GMSFPC7eELiUE324FfFRGxJdEPaAc2HTZsedr1EoweakHuaCy6",
  "key15": "HJ6AvcgEJMcvpofBCAzfwucR2U1EwiHQm3neQTwGvkJ97B2dQcCDvcTPQ3pwRV2LbA4VfCSjQ7BQzekk4fXrivD",
  "key16": "2wpnB8dWzKCCUEz4AK42QHQzSejK4queXUXkoeJttTVoCTAeSKw9vSZNEBiBcnvA4hoaDLpxX1aFRduNTUSi2b3X",
  "key17": "5MpJWyQ4FuHbcGYfGVM5emEUbB5PQnzS68yeESp23cqNyJUAnJQb8GpAg1XZFBeJV4q3Do2pueYPjG6rVfszEFnt",
  "key18": "33eYAcwQ2hpVEFkkScSYG7RZad85Y9QFw4NeTgc1esnv6w8Kf9u9PmeGMrZZpLYyiCxzRPgPby5yFS2nwX6fTExy",
  "key19": "2JgSiz7sLBDxrqgm7M5mwZn6UwkE16JPGf6wJUeemHCQKAreCBZq4sV8WQMn2dD5SFzM7e7tnUHnMV2GxV2Umja8",
  "key20": "5bL5bQpY2r4GT1ZbpUfvHanwjbsgpgtvCwW2zjTTFdEDzsF2BALYyojeRUXu58U33JHmMzTsy4EabZn2K7mYjudu",
  "key21": "21aYBbgVo97DJhGKvu1Fmwkvpju6aCJ1ABNGL4aXx7SdVXUXgopPnFtZyLv3me8CpcL3wU99kYsroSo8bHmVqEU2",
  "key22": "2YNNtTppoYgkefDhk5docML7tX4VczMEF1aS1d1nDSwvfdiMo9KwKo3hZEhqGPAVQ1JvBq9MuAx8KRo8ayE4tynF",
  "key23": "PPqqbxWXFME9516ocbs6s7X9DELUF2Lwmu8y4g9c41UhsmaapQDHQ6s3xZovX9f2S7D5Z8ucNfyoyzdTE1Q9vRW",
  "key24": "4vXq8uhqHj3fvvXYofQeCvLCLRhYLApUYHm4wHpeNTaL5Y3d3MDbcEMfEgFXV169v9SvDyh4p7qx9JeXm7pdjHR2",
  "key25": "4yVuEXUZdBkqb3Eg9bbQm39LQu6ZJLY7Nuom4FpGH7G2B6dBnwdqbjKULp7MpvPJTs4QsTm5ZdtaazkWagUwsTTR",
  "key26": "23C924Qcnnv7G6hxP7Fwpt2BEAxx1TW8CqatrPBJz342p3Vwafyizm1PUGLCz4icgsBpmbSajBHx1UXvyNd1VQ4a",
  "key27": "3EQgTtGvQxNDVaata3ht7oFEdYDw1rbdfGJ5ugcZN5B5cRVLfHof5e6rUrjEzHCG4gZF9aZW2Y6skED6d6XNehM2",
  "key28": "5nSieEhKVs9wZ32AFDz4wMXeeKD4hap1cSQ4i4uxz8hgKEjQwfjdgQpDdwU3GzABXvZMAKp2ic4k9qYCScH4BfDA",
  "key29": "4K22yGfNTkmbEq3BbduVk7tx1Ks7uELLbjfQCHED8B5qi1qNtMhHouRThJs1KXnWf971SLKf7yw2uxUHFHuBhVmy",
  "key30": "YukeUkmimN3mSPTM4WSFn1bdTGLKBsUiEmmUGvnBWPmKdZmwmYywi3xQHVv4cxNHkeUGyieL5K1wDh3GhkWPXvL",
  "key31": "5XLe1zbCSqktzL7txb5dTBVhkVaoRkbHqMpTeEfAksJ2vGmZHfwueauGjkcq1tBbnZ5KvsNPAFccCfdug2weuQkh",
  "key32": "5MLjyVuiZPanPrdsXt3X8Z8kMs7gNkE73odxiqMzXqNMKHKXaM6og3Mmh63bPLiEzQRPish7HRu1r7XTHGjcrvtQ",
  "key33": "2WN6ZVrhJ2Dc36H4N127Nef1EijXDCnVa4Wn3QuFZAF797Q39tjx4UM2DtUmsppuD69jx21JSyqnb6vpqkgVgLnm",
  "key34": "5eK5D6N1Mg934uKjJddo21WGxyxgAGVLTjEW3GJ4jsa48T55CJZ8pbtEDDLNXw1iuJkXMoQACuBQV3Xu8wT8aHon",
  "key35": "4Bm2qF3YPa5DTZ581NUn6nepv1RfTgD6zZYHEVrsHfeBp3DN1yTiS8CsW2sWLpNj6kiarm5JgBFBRqEAasLbBD64",
  "key36": "2AUGhMswVsjaiCmtLNbNWsiSYKLKgLPjWuqW3WzThvEbJZ2LgUDpsw3T3eDYPK82e6tpxWqrqNAwxcAEqV1sKdTJ",
  "key37": "3mJeZzinNmgWwrmipJCVmuqAEc7abxYuf2FESikoqCBUJ9EyRErV68FpJ3Ca1ETEaotM3SJtVzajgPS5DE8Nz5v6",
  "key38": "2aU55UDruruRUgojgAj1YFvzd1e9NG7ff6hj4qqysZjqRh86jNfh3g21QBs96pbhBdGitGxZzJSMyuJ63tBQJpA",
  "key39": "2MfmTH3gzsCsa2gZhoxYYM7ytiSAZR6i8hi9fL5YzeoBnxNzDbXkyruhbopgvRMxBGH8ZWLVyM2u3XFXc84kJ1WQ",
  "key40": "42zZRGRZTmF59XbPDxv2b4gBsEXyhcEoZ9nnTfGSTfJS5wuK2u88iQN2hjGPJB8cxba91X2MhrB8GeidiKaqX6zD",
  "key41": "b3SHbt3QUAph3HviWYR4X1HvsmbnFTQYJFAWH3k3z6tbNPspMibeG1RaPRKRZJAKBHhtxC4MTzybgcaCtX2qkKv",
  "key42": "3EgD1ePh8N8KrNHqLuDZuUh46qXM9L7eke7oieu76cJ61Wpbe6af8bZYtML7n8KzzXo6hKxjG4KgbRToZTW7sGj1",
  "key43": "5vpZgHseUuaZDvg6fVVe9D6EWPFRNiP1cg46tCneVSNf4dJq83Wmjv56iVLT64n2uy9U5hoS8KoS8364YG6EkQKr",
  "key44": "j4eKm5j6cf4sYKzSFoAUssfPS3ezeu43L4pNQuk45kb7rgNgGma2SP9gGwgD2EFpj9EmbSFUGvmCiHtnvY2En92",
  "key45": "2sHyvgoGvLrXxLYwvWC6KTSZvZURjTPmNAtQftgiWG5TQof8F38nztL2dJTmj4rdcKtw2aL6SzPcC9uuKmDX4BbU",
  "key46": "439GDunSbP7Mwn5HA3K7inr8Wkja1bpLNsQJErGdq5kmrJrZXUBbPG9pxgQdKjT74GUoNsRCdDe6uCwKPjuD3WJ3"
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

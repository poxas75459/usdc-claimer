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
    "5dmpLxN7bN3V3CqdoZz7e9oaPLidbSp6ZaZHEStSfFhSCHcFR2QNFKhtFP6YbtEM5JoZVct3SR5cDpGSrTtPkkhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4maZxRKYyBkDqo8UwUR6V3eDwBZFC9uWAwrwPRUtsEPKiHtREX7JHA4TmrHdBUjndfR3mAz8F7TWveTtznTkemq7",
  "key1": "ferANZpMVGCzk36YR9m5F3LXJ96bngS5a9iapn71xPbzRvSVL2zNRZM94DiNNYVMfdT8tvJtaTefBc18HSegzuv",
  "key2": "3otVH3bghX3sLH3e7E47r9NWsXy8Y7fe47P3osKmoFSq5VnpVNUDQLe6VXoVyN6GSCN6o7gNzDy7sFqHCfnqdbqU",
  "key3": "5t3yq8EfeAEurVsfg1tz7a9jtRFtLrQWERXHdt3zgv7nUSo959hXyPRYpTHkFXdMEEYiv1W8NR87AsDFiF7Jx3fP",
  "key4": "63MPiXGADCX6Kxj5dzTTfeFtGBcetKCDfFUAX1EuLW4Ud5DVNYLvV8tumdQzotLUGKax8zRDQBKGJZkVFhf1aTY2",
  "key5": "4y2Ei1DfkeM4izzZRZn9NoW6qqfHrywWLFjMx5HcC9jFF3TCpoD5ybYoNAqrhmHzyTZNrahnRAMb824vnzf2KE2g",
  "key6": "36g5Lco1SZatSQGmqNpeSSYnN1G9ZELKfTvgLkc5LJSzG5qtK3BjaPoBr2DFBYfx9W34wJcGRi8CY83rzgvRHCgB",
  "key7": "3xwQehoSSSiUSgSGJQAxuyaPh72fY9FFwCTF2od9SVnnzt7tDPihMc9nzb6bZ9f8tHkHrxmFiNAjdvH5Lfztdzcm",
  "key8": "3TiZaB1U3N62aeyRKADHMUdy6V1dQ8Gvi1zFSModKi4TW8Um5NhsCMY3vS2cqeF4rX7ZHcv3TcW66KgYMaBM2Yz8",
  "key9": "4zoawnX8GbdZVmL9cHGrAy4rUNE81TwEY9TgbDAvp2pjJFWRPjkQZxNBfk87BwHEbyYG5BrKEPcRQ4j1PWoDyEYb",
  "key10": "4yGByCadxUcX9SBqjmFcghX4bGEcAEqKTQVpnATE1G9Jo5BjsKZKtQoCfyLHLEz27UqLEMk9jnPyA86AWCqqNLho",
  "key11": "rbnmLMUxhnU55yFTVNZWeBD9V6EAAhzJ9qsVmrR1RC917WHf8TPkcCs1UVxFtSZe7C5q6wJFnm6qjhi1yG9vkAJ",
  "key12": "4mXinGgH6HfcbLboWrwY6ejpt3DDQGfDhW6sGm2akrtwNU6Ce8HxuZNPqdHK4m4rbA9VSGVDQD5QX1EyR9pj836s",
  "key13": "5MiGLxtif7cUv5QyDLpwwC5s1WoiRsELvUr7YEywZAzTzXGh8bzmWjFLRNwe3mgFaGkb12dwr9nEFmCkVCN7GiEb",
  "key14": "3cz63ybumS4fgertt3gPATT3K4pfVww96kyo3xqanNpnvKyQrhHNGu5BjaQwApKwvhUk6Am3mLE8R7cEMUf3P2sj",
  "key15": "5hVSi84KEcrSW44vNbDG4Ri9oohPfgr19uk9FuoCfVZ28jFUhfouDRFtrxXSLTEd5dethP9MXiuxUiLBLbHPTfut",
  "key16": "4M1eJMHgoEpVwDTwXBEJWeBaCHA8sSKBNzmkouvTYmsW8uF81WbCTwTQC8BuFBEoLMtc1f5TBMPgjEiDg9KJbJB6",
  "key17": "tgMGmj5sNsB7cYrCSbmDX1CFjN4KeUCCfw7kfDk7fxBjRPcpU4EG1s4aCYv4kgzTzrkRkcxYBxvTxZsE347KpgE",
  "key18": "5bidAYqJ5FtR7UzAawwpaGy3pb226XM7Ni2Ty4w15ykDgFoyyegErbvu8PiAcpo5qEKpFCpZdikoC84khJNA2eAC",
  "key19": "4q8HFLm5XGoKjC7Zin5Y3F7aCAS4VN9cEHHqdsEhxi8DiC1qZoq1gUyxsdTvSbmkghZmRezE5YX4E3UgCKVUUQx1",
  "key20": "3JaDTK74fNJm9a9Jfybse4zutenDPYbMmwYQxXDRBzajPqr1iBrqsX2jU8tUzvHQ2i3X9KvsKf3YVPR4yrES575K",
  "key21": "2va1n5w83Y5qFsbJzjYXrNAEN63k8xUNN74evpsggz8vGARgRMqayjnArdQeXjpoEAiekD4Q62KtdV9b93seWrrS",
  "key22": "YUZau1h3581GG3fmHqdNmGgVoay2Cpv4Ng1AAdycgKqD6svyNGAwgkQi51E6tYRBMFiGdP45pGNia6Xq9NgLai1",
  "key23": "2EGkuNLTAT4jAFE6u7VAB1cPweExCGC6rLKtrEvbrM4dXzyEyUpr6FaQa59M2LqJeCajynBDXjwSWGg8urgRJjk1",
  "key24": "33Cm9aHKYThw7cd3ExYpyqWjhjCS74A7N1MWuyN7BUNmkV1Xw9FpkGNwu2e7X6tQZ98Rbq1NrtDPmppLurHdhCkW",
  "key25": "3i6G7f2KBiaTNVci4FWDzwaHDUUPDFasND1Bipi1dNASUhTuckFpSs54QAATE8JHDqoEjiMLcY3fyycbqU3fXx5d",
  "key26": "3NZohAK3KyAwjsaU99yetQQFpwwAY3p7c4HxWUBjiwzXsuioxpo66jGu2GDXZFKofm1sJj93w3WTpUVdanpxe1eo",
  "key27": "3Mjh9dYjSesivb7XdHUnURCbVeFSVGvM7iXMYDhn3XGPPwmATiDcZjn3Kpd4WXPA2j84mYbQHZUHBud3yBiz8MHQ",
  "key28": "C5fZt9uoerR3hvtaB93jubw2Uya8hu5rc3Hm6Zzd7M7ZDhwpYD8FX7k3jzkDiXTURsAY89gKd25mWUa82qkhDsC"
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

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
    "46EAD19XhTxrQjvwVXz2TPkno9MUAaAWW4yrdtFrDjJUS3932K5NpcbX1ZEeExQhdK3ApMVoNH5Fmgz4htAmhEVY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3po6Vc3LSYhHwNcmphq3hnFLZxR2JvTAc1WRv1XpBwwWzPcZ5CGDm2vMBeyJLxEPYYHLoEdtGNHFbHHWuqW4KsjY",
  "key1": "2w4dKPu1TinpAnU4fcy2XWYoFkF1dFGzbRMuE8Dr6TkWWNihGJNhLghba5C1hHWUUJEmFYhyJP5GUgxmTz58Jeat",
  "key2": "24ZQwoySm3Ak14NgGUCXKe8pxiNNeLBD4kVUrJ1ZgLZajD6rJDdYDwbm1r28UzAvgot5aUmi5nQe1vfJTRAPUehj",
  "key3": "3MMTWSjoPyopeE33opm9jVEsjzMr5BxeNUxSuhtVbfebHeoNokRiicbm9bSu6ZkFUcW943N8WPYcRrX5ajSLEDJ3",
  "key4": "2jFfKvWHixbec5LWbDD1qUtovABbwEKUWpJFGCm1XPUeGfNqzu1bPY3bY85ZqNjcBAbCakR92KvTMFM9RaFuvSrU",
  "key5": "44HWAzesJqQS5MRWmSHA9AJY72CGUSe5o6Db1vwXKW9iRb3GCKNZoS4j3uSYtLRnMtxdoVrEDtbf47mpu3VxW7mR",
  "key6": "5CxDhnKTSTaZCST39K2J1dtp5yvxAdrQnCy481d6Dpm5k2CDXJ7iYXiLd7RZCNsLyDCroh4b2cUh7MwaFfC6KT9Q",
  "key7": "5HWvwddRAK1QGJzJsXCSN6WHVqm1gKUnojwuyiG1MNhkyXA38FZ2TfyTj24YHHx6fNedCAtQUqffCcaAPcagXCi1",
  "key8": "5iJh1xFU7ZhhXzHpurbWF1L7FUnizJ2FFnR5bTk3ar8pjEqrPPaYjkWWS8T18X68LCxZxPnFts7ED35pzvao9XSM",
  "key9": "29nUNPhmpEJm1njRQiF7yonCQTMydXnapRXnTaLEGgtpcgotXaGWnCmKfT4pZJmgtoMdWiZ7jFdE4z1fEGb6rd9k",
  "key10": "2jp9g5dyRWfQ3tuoT3EKFpQEFoTjTfiScdKcY5KfEHFZZ88V3AFVciWceENwBr6XFtD59G7qG99NiQFEWcZqSkiv",
  "key11": "5ji7fZdMedw1xhbDVB1QgMA6hLeXpVVjQCsZQGpZtV9wmrJgwjiSUqCsymSaCPt8jiiMdNHUnudaQcJUjvuGGgZj",
  "key12": "4hRHUuwcPUETowfDQXuHMui2VZ3Rwyfrqn2hWzBFxpn5H949EajYumBUgBdrHzQqtvQoxPWJBF4DrW5khdN7MLbq",
  "key13": "m1CahtXQVBrfZvw4LGSDL6FYpD1DHDhLiJfvTCtswH5oy2fqBST1bErR63mAVeufpA7z3wf3WiMeTFsGms2sfB1",
  "key14": "ZfBT3QuveQ1HawCwTrY6TopF5E5zy2ND6Vww8btVZ34rpjtsSKeJYxqcD2qbDL8qL6eX4arASNfBBASA9Qn7edH",
  "key15": "4yf6ww3gnDz1zskDBFcNoeX9DK1cp2xcZetuaMtTtFSoTGycU2Jj4fgfr51HfNGoLvHKMWdUcxD7u339699SPHL6",
  "key16": "5hLKx8mhfYkfCFjV9GbVro73iCZEwVjyC7Sjvk1hZWNMygNuQkT2dME5ywaJLvkdLEZ3ejFpWJeGChUxBgy5Qf4y",
  "key17": "Vx1XZeU5hc465fSopPeUoG3JocvvKCvZXZTktoWFMFZjnuEDXxTdVXLg4ZRAMKKyDvA1MhC8eFGmyvgyhTxTNsG",
  "key18": "5eXF43bgGhzudh42Bk5L9f4p6TvxhKfeWT1vZSyw4TzbgGSbnVrSb6xR8WcuehFhdoyvQJxBHqNZFhkAADdwkAFh",
  "key19": "43RZ2uBskz5MfdTS9JaP6hvN3qi6d28kjGxLQ8iC4TGE5Aj815Yh7BZcvvpdf6zDhnwhZgmku7pC1R83b8LPEWa4",
  "key20": "3jcBhc2GFK9MBSFRkjqmzbZMHBkTY38xyw1sJ9nV3NWEFqSWT5BExQZ1Px7m3qVqJiWJkDT2K3xd7pNjHFyFxJCf",
  "key21": "4cFaAzvzq6kdm4EHuZwaFg7agPsDmsWxq6UEKum4Hko3TacgCc8HtyLzRAd5nyPTcBgM4bcvfk57ft4Crj57yqd1",
  "key22": "2z12GzwaiKmMWdVhcQDy3DJGx8ZTqyLNZDmtyZw8anGnNzEV2WvA8MyXm9vGvQBVh5NyNP8pY8ujYDAxGW2RXquF",
  "key23": "3VeB1enRDF5DPxMbvdoa3fYp5Nwi3d2rjYKZtkfh4mMAqDiNdbqjFx9DGeevb8k6uwRUKr9M1xJPPNXqrfRJCF5U",
  "key24": "2FRpEShVebvnsQHH9hU787PKWAUEibaZioViUyHaEyc6CTvubsJnCGTMwdWdCvgWfLjfFYetDUMVExukA9AyHt17",
  "key25": "2BwqnpXDPn5C2jnQuuVffuevFNFvGcMgfK24VRZsoYB7G6SZpSinFcrj5cG756RJsnsadn7BLDxG7Z1fSzYTrpNv",
  "key26": "3HTxCFAwgStEuAgLNbBPpsQtE1qxDi7SsdNuv9SFXDKCUCdJ7pQur7iykB5EnAFNh2MiXRGB35tmHNiWxNNkspun",
  "key27": "44qjGDkz1X4G25Jv9GbNGZBKnYJtSBJ88HdGvKxYM54dYKsJpJGKUewe9FUYybkQjPfKVix4sQHSgEhLFSmKXbDe",
  "key28": "3p2epwV4PYuo69bCDCS8oB8292Jak9gesypuFxQFbQNeiG7Gcn7Mk2oyfz27BtYz1wmAX7AfQsoZUu2QKyBtkC22",
  "key29": "2cXxM9infjo7HHyRyo66ERwR52LP4YiWShraVZdbhjaPrbHdob6XQsSNiUYPApZds8PZoqiCdA7mXNwZEUg4nCWN",
  "key30": "47vxzicESnrwFn2pneC3Q42BynKK6iHYLQUiPKHAx6LjFDkaShQREE2P9c3wC5ifKBb6qoPLXC58BDgoyJ3HeiwN",
  "key31": "2jkJ3jZY1R14omGf9sHFFdTMD3ECye64vcLUsnUET38G7t6UjuVgyoA89UYDtN3KcuCsaYURm4bcgbtLCc8QbfAS",
  "key32": "21o18hJTzgkvZydELvnkse755zmCcJQNPJ6Znm6UvMJwjJvm2kKGZN5c5Xmyf4X9QPVtDmsjRhQfEVMimfo8HwMG",
  "key33": "2jV9bWPYwnbB329LwnhX3HqZVrHqw7bjFD186M1agrFAPY6Whwyk9f9TT61iCst5yEinSJaagYhbf7NMnxLH7L5P"
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

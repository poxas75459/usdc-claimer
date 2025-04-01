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
    "Pozw5VtFKWkY48VAhTxEMwF2BqYoiJadkrEsAMiSegB3HnrzmhNuke4X89iueWjYwbEfGz258BwdXj23JZsmYEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nojx4rGrQN3hTDt1sYdZenKUQxWUVV7g9p8y4GbJjMwsikhDUPtTigJkBNNfNwAL3skuhspPbyGmQ2gjHsHjfoD",
  "key1": "57a9pN6Wn87n3b3e8QkcVDs7YbrW3mEAUzgTgsm1hY3GstKBzEUzvu6y3yzhAXT2XDuTW7boNof6J3h9vnKqXnKk",
  "key2": "2JPrCCtzGbzjEjBS1jgvfHSghGFLRiieh4krRqeDzP2aeDUNDjNmt4SX9bC6QfMyKDVNYWYoprHXzpnCF7MXSUHA",
  "key3": "4rxqcgJr3bZnSSqcxmAQcWE8FMy7Me3ALDZCebV9aWRXHyUxAnBy3WwzS6TJXokFQTYC8uWXnZaArC475qV3Nucr",
  "key4": "39pfFBDqQer1CdB23y8PKuiSoFz8f8fQcdJbBiSAkfvBZ8fCSdqa7wskw4EPMwpZjAA9bsYCV9BVqzQYHhD7G1ub",
  "key5": "3WcUPQSvGunE7BJ8PkTBYgVjzZvZf4q8hnshnXwgMtatWQAs3gre2T5iwJmXehLqmA1s3ZjPuygHsZy6Rhy4PYCR",
  "key6": "2Li8YLnURta8HvvrpFjj9i94oNFmXqayFJQc5bWcWf4Wq27Y3vVXHPu2tZ6K4fBdqqpyuwNibrm1gw89MxfdMpYa",
  "key7": "9Ci7qnUb6QK2Ug74VWxdLdP8WJfQNBNTwoWkHXEbQEo2Qf3BirHKmKQT2pUNEoZRfmyX5FUud76Yu1bekZtn62x",
  "key8": "4vZipcUdLdEJn6veKi1qPNuz3inuEQGdWHHjp92YW7u65o1RGMm9eD4Up5srViF9bK3nn8ZuDiyxDgomT2RtnUUb",
  "key9": "jQ2Dq2KQRL7KsGzxqT2kN8xR4AgCkNBkaQXfHWDHLiE2uR5yxPR2gjQLChCsJKoTHtHb8fHrhwd4GGQ874pvdEn",
  "key10": "tTTukMhMvgoxPreFN9wTkM97KUhwB9PvJz8RoHFXhnaDmNEYZ7ERUZW9hbtaNqcKnWECTQHY6qKa3hgJwLjCeR8",
  "key11": "8addpdodcrs71pCQfeg1h5GeQE73yiXeu4KBBTV3d4XKRQspthCgyCFqmXVY635Z7KiQgERGWi7zceccE17ccgC",
  "key12": "39EySnCwcYxqLjNLYtfhZBpeuykvDeDZjBUp8R1qXrj9Lq8mS5mTBYF2uy5ikW3uBkdoUmQhgV3YKPfr1C8WKGTs",
  "key13": "4efrF8PTA8mbUJL19LbfCjhSMx7pzRiokxg9c2ACLBBHJPT44AEdRsjFkLuaSdUnhppZytDSAqjeUmqzSrhfEwdc",
  "key14": "tbrzv3Fyd9pBCLoBzd6cA1QRMo488vHecB4u3EcmZCpKqHt3GcbWgug3fsEtEWY4Uyo69BjdcXLNaxbRA9nfrKD",
  "key15": "2mjKcE9dYB4VVHcqB6oE7YG46QdSGrfcNmjvDXnbvzxvWPre5j4a4daKx3TpjRaziyf75cT9toRHpX4SnqSaPBf5",
  "key16": "5MB9mkYYQtrcqGFLwc9Uvdj4BUttJXWBKsJNTfyf9nEdJsFUZXeQXdF9679kMRQJnYPkKcWApfvobrhEp7rEd9Ro",
  "key17": "3efdCBGMZmNorth6qS5SHCHXPh2NAEmMxhTJR3XaZXaQp34pBSGR57HMqrraTQvxGXvPFxP57NCKwWPXXUgHtxUj",
  "key18": "3Rd4dbM1uZ1Bgfmug2UL8dVoZgLEKbm8TXxe4Je1zzb5UyCisnnXuUR267wkTpJoK1CVVvCFj6ASQ8dy2JeAeu3d",
  "key19": "jJmsRiZtvG4mgCSnpWg1YooM9sBddBCiTUZ6JsKgKz3sCxVzYEmZ4bNvqVqCS8CJsUbiRfGqgXHSxQsFwga5LSV",
  "key20": "5ExKFXkq1KmJhwoMMYco8TnSvtp24QMvMrR6miB82wy6E3BGzRw7hzBV8dYcNYb3YPNTJMQZyoNihaGjGW6LWtCy",
  "key21": "2RBtRELX3F6HCC5VdLAVgn57oRL1tZGgGCgyvwnAziML33JoWWQ1cw36b6MvTcVaqDJSCD1Cqx7VQ76gjR6LuNYc",
  "key22": "5Tq7jtyXjppeozvmLruKmXH5MDb2xaozTrf5ykFe717EVsLUSRWPCmjXv4oW1EzToXqoDtReSZaurvXkLjRAJWUy",
  "key23": "4MiVzi7dPBKErBv7SsXyNHYm267uj9yAgXbFPkL1m1bU8M1oWnafPgqHrJudRA4ZcZVRYkYKp2UDd7TP9i315W5F",
  "key24": "3QfooHx5uofMbUYKTwuUoDw7nVve47N1Sa1xjiAeU2r4kwbfYjQVRNBm88SXPwB4yTaBGZkQu8gSMrcsbAw3rvyb",
  "key25": "29Civz8K1ZEPTHYSmPbkqeqDFEcXEMhdfv9TqkGPHLt1YrDKAWgiowtZfjNCy3z2h6ggMXS5ALXjmLqkuZ86ZL4R",
  "key26": "4H1jzwNFZt2my2Xpx9gSgvppZhLXYs42Z54KGhJvirdNpCxWnmd3mWSeBvvqMygjEXHwUE7dzVTWFnXGZxrvbFgD",
  "key27": "5XZp7e4fNJLudf2osVeSFDnyrhhvtYEqiLkAmmrkQKjNGGe9vcFLaMyJGtdPTNL7TZz7MpNcwAMzoChzGD44nVcv",
  "key28": "25yFVcjmu5PbT73AbeCXBQYW7HdePXRfxwHn7CyaRkYsjkcNJHstfgJb9jfZsm8CYP2rUQqbYLiHx9LDPbsoC6db",
  "key29": "2Zexjsf5zPmytVacqfNfy3VDEe5t74AwFJZbn9qUDBHPXvRdnZ8hfrMigKrEGgQqi9bAHygwkUK9LX1TckcuGTYn",
  "key30": "2due5eLDnNASFBW9Eg3CUML7HCTigrVvKB9RME86Nw8gW1a9RgDXbfimrjL16yovmuw5eTurV5DkFauaHN3rJWGx",
  "key31": "2VfdeoEG4tRqcuDxi66hEsCgFAHuQ85q4zU7BovBstPoGjDfAfH59nRA1EvYN9nLvA4JNetwE6ywn2e8DdLvEAA",
  "key32": "3k93zvUsAynS72GVSR3FvSzfAS62KPAWUZ9SkhEjx49Fw9VbaTnycR3F8R6sRbY4ReosuDherCN7gzqZvhrV2vxy",
  "key33": "51MvSXmjRf4VZ8cp1XdonrW3DrGdgru9HZeTfLJ2YgMAHjzYnEcw7HA4QgV6bhWcWXddsuXvc8susCxy7WiUfZ96",
  "key34": "2RxaBKenXa1Lc2aYaxU2W72JnZxxnrr4mLVoPSWhuvJNsQMScxzenZsG5RRqWv81e88U2vYeFzRvekt7r7NuXAdS",
  "key35": "4D6mrRy56b8dcu8mbEHtecfrs8tDRuXh4BJmgahK4g2i3epVKZ3PWHf2EJ3my3d3QyiX5yMy4r8SY2i83PG267AZ",
  "key36": "64Ejr26YWV6n4Xet3XWwpEbHc1YM8SL4FKdBNKzQBoiVcrM7KQWDMzPLDCBmmx7ecBzsfm3rksgK6SemfsATwGGj",
  "key37": "zxj1aGnWEnKC1hyXqk99m4CfAMm1o5o6snjQy9jnPNiMEjkoX7PRAjouiD2tkCLvoC3ZUXoyRhtm4RGdZEJNckF",
  "key38": "3eikPLqJaQwWYNJY9A3gzGbT83DkGreWNtwjCggDjx5wvSA4uGWEtt8vK6fdcpWQ7vVnnddHKapKwVvD9eLjVGfM"
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

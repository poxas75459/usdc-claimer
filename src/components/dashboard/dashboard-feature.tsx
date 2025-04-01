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
    "4WXZ68VULEgRrbiUyHDughQRtcpVjAMY4vRmmg5n2pyjsjW25GX8qwZRBHw34Qz85AvniQaHwipnusNbRbXmU1Ut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pWF5zcev1XiM6psvTpkyHZaRqi4cTiEAw2wP7TM4s69RPUjdZoeTDJGVgQjgggvnsMj9xGnLVDpmc3DG9gWSF8h",
  "key1": "3Nf4LmK9xerGCuhgnHsdAcR1NtRsppAcbveo5GWU6jAGS5jr69PgiBCESktArZGMPKVhrT9xWtwJBRYUdk4QYyPD",
  "key2": "3VHQM7NVYDQMVK2aAtTWhUVAGkr6aNPsj5QBen1aN5bQLWWfySGAGUGj2iwQhn3sdwZDa9wfincedjwiVMgynFrH",
  "key3": "3d4dS9LvdhpEjX87tHcZTR1hbgGjcyuQaWAXdGyo22enyjjwEg3jaWM6D42hqtRWaE1gk9W3UJmA2exx9EnbxQEd",
  "key4": "bQ9dwiC6htF4TF5XBwJ3pUtXLGx89Frjbx7fjMDfSqgxTCuPqvrcV3EUgNWQDXB8g1qDG5iZ8VSkyeFUxTVmjRX",
  "key5": "2xUF86itdqapf2xYpMiSjMUeu9KQkaFSkk2fCBF9bAbzh9NmTuyLyVSjAD2xfxuDoRxVEzZNJQeEUjRZY2ZKQmGS",
  "key6": "4ESdSwKDLZo9yjUTFpH28zESK3RWo99XDzFJLyWkymFYViqd8qRLpy1an8xogsTYP7CKSdep2aJx3biWHhdUC27C",
  "key7": "4cXLDzDsCcW38HtmdDe5HWRbDmx52Un1oNks8YoN5fWeznvhdSuQqDHBQGafGYgtc4EAYEnLtFymAR1ThTeNHMNg",
  "key8": "4AuTLMmGUFKUv2gFfKWGVz1XanJvPUiB9Qaqnqk7roAv2BG6cfrcKnPj7yPyKZTx9QmP2TsBowTfwNvLeZKJfTsM",
  "key9": "4PFAyLu1ky8z3mvuRdt28J4mptUg95NPwm6CHwLn6vaKkZPpxpNLc2tnexZsFuJKeyqxi38MTnp9Duz8Cfx64664",
  "key10": "f5G1FsV8wofkbbCJ47X7JWqkN9n1Nr5eVHSouW98FrQTRZijXbfqncfSLu1HpXfAPC31WFLzHRRWXDqkighq3uK",
  "key11": "2C61vC2rjtWLtQyme2wbP1Kwjgk48SxUXLCQT298W4hcbpMGKxtJGVre8qHCsqCHNDk6kQdDQh2Fk35QK9Z2hXXr",
  "key12": "5T2uKVFoUcDqgs4KXajrWQaMCrW5haFNS6FUDBekS8tfvQvM3vUJiQqLEeqEWDvxe6cM5gKQaB3q5Q7VeDq7nxWS",
  "key13": "2jg3uKLKRfWdNL4Q7Ym5Sb8SqyYyLERyYTNZaUajUdFKM3ZeErtLZQEcojBDrrw2bZ7LDWyZB2yaevbwx1BfzRdp",
  "key14": "3VCJivctTmkJVxFEzyvPRLHFyBEfcwJHGaSeBFigs1oiWdW5pxx2gcYQjoycAsoZzJm94h2jSopMEnHwTAZP41ch",
  "key15": "5QWe5yFLhksvJTHqTDZFBRxPbMMFuS7YWvHrEU8NrYaHGJ3PRT8ZiqhvcZ6WKyk7T78j7nzrymw8UXNEY4G5Zdmw",
  "key16": "57ubqvqRqUkVLZtJy13kyn3pgnHvnLBHhhU4iHueEtmVQkBKzipv2wbywokM26eknhtgn1tbFF7fFgB1QV5fJFoc",
  "key17": "3KKrx6kZVTUYDTMVk65ebHEZgKmPkKXPZUT61UpsRTR6kr8SVg6JDQu1eaj5BaSwjvqsSgDk1YLr6H4EWMeuRrLe",
  "key18": "woPGCJkBxsVwngbwBQviPWKrvt22MF3saRQa74Sv59bpBBwmqZriHhF3KJ12xEiTTEHVVHjPQ1nMGeu7N2TyUP2",
  "key19": "3toDVsyn55NsD6t8G73UEogWdNA2oEZGPARR2ASYarG4YShtG6UyC7LkMhZxLahVLdf5gBC7ystUg8VzugzJS3e6",
  "key20": "4WaEi442YBVwpm2Gt47LhXWKg6RQKNCpV9RiFyb146zD5Vukee5sCrx2VZzgWBXoAQKM542EsAg2y71wb58MAfor",
  "key21": "49fJHbSj7MTGGzqhVL8uvbDPZnqkypcEMJW6SsqUEzbDoWdq2qHrzygktf55j9xP1BeRtrcd8gr3HsVKLgfGYcr3",
  "key22": "EFDArjqyeB5LUT4L3k66owAThdrmjVexNoWrxsGtNS57sspCfFEMwzfBnbbWxZ51bdpmJwmguvNo342fcqPBZRW",
  "key23": "4mg2at396f7zBurgtECj8XXCV4RJz28D1SHKWqky6dPJhhvpUvUSWibof5NpKYstq6jqGwFzbhvsLhSi1RsjfpND",
  "key24": "hwjyd4AgJCH4LD9Hd1X4nnzyMQQebq5dntpFxDsSLZSRJRr4NwiqzHNVd36qwyVUPNJviktMwNDXAHuzBdxD3RZ",
  "key25": "4rStJJx6tFtDRG2CYKyDbXPsHiJqtjcwz9LBep2wUkmHX48FTkn6wE1tBrMsKTZFFQksv8pQJdZALf62wiNZYpyL",
  "key26": "5F7Pjwa1Qj8GTK6zAN2V4CBD4GKcPYsQqbWDbEqcyPvA5RxRuHSYU3rUCgKpcmST1ZcnDNDANCP7ruvPLaUmWsEQ",
  "key27": "4NaFazW7kwCUFSun2MjjxeciuryjbyszfwETjYVMYgwJE3gh6vYx9BEgkoJWmDTrANS9mPqCspQTZWg6VW1ByAGM",
  "key28": "5oLVdpTWx2syg6Yhuj4v4jtRQXqtdFQKxqzRVfguzguKAkwBC8onUSiJwF4SNSVCUC2nXSpFhd95SDZYXHcVmWMC",
  "key29": "2qTuMZXqpwBMHWVv7ffhEicsa4mVXYnLj3D4cJetsswgbboMGnYzHurRwtEaqZzmnuiJ79vmCeFHgx67Mr97CHA9",
  "key30": "6gQWawMSF5N6NpYX57Eb1ut7cag9xv2V62ex7dagSUtkTjpk21be8rTCZ3sywnaJrRFTUKMA1DqYMh1U8EhPvpa",
  "key31": "HLqecsjoaXNZPY7gA6xtzcR3SiHFtJcsa81UofPfJyHsen3FZPMLbVvCzQxdH2hcRURAfoqQaMexmezp9qWoLiK",
  "key32": "3hmi1uTmKyimjs2xyvRctNJjQUhHuSQeBepe1ucvigvTR3oFA1MoazAwxP24pq55amsb5yaitdccczB1DoYemD22",
  "key33": "2oKKt4qToTE2hYRzsyUJDHd83A3TDDhCJ6UJ2AaB4MkH7SQ1LerJJLAvy5zh1KWgn1UHsVSifMigBYXERixo53vV",
  "key34": "D3SWCsnCnN95dSYRj1MfQs2YNsBb9WbTHvsJHjHzv5S6VcYCue2FLVKmyworLJirSX1gTSvJ3RVF631KmaYr7ty",
  "key35": "4SYmH18au2AEqWW2ErArMbtnhBpVRiND7AY6sN3w4wpsU9fiuJig1N72N2j9Wy8qNKbCLMZg2rKH6PSooYc4AyCt"
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

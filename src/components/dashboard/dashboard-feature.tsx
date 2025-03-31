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
    "3Xd39An8YUcPiefMfPoXQ1M9CstdWNj9Umnm3bpfgDa4TaXLkZ4uciuGrhL4wNN6rFLyRysj2XSxhWE8cYN2JPBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6d4qyU6DR3E4Mtg2fAFpG96HSwDSfEsjXdoEErm1qBHKuWWBuevo5N1GKCvjurhD2vsDcbovKME99MnjTnztKTy",
  "key1": "noXQNVGr5L4SWvz1maakxJzMuqn1jXiichcxZJFtgoPusq9oij5a3dnZyg76oW6UQsbowPqhthfamCn3tawcx2E",
  "key2": "4tidf9tk4wXj9B7YGr8qs8F6Dw3zoRdWLBgLWbWggvwgxnTyn2DUWZHYEZNpPHA3k3Gf18KZJKvimeeLWxVT7u1p",
  "key3": "nhGqDaGbCgkbWcTbM48ZzqtXw8W78VNYehjfYEdh7xAjahTRuRVgPeaN8EJJM1NQyWJqWFbbwbQqdnd8jjNsJHj",
  "key4": "3WezYwmgxtbP9pHjT52oioqABULwV7RYoKm34DuGxCKqS24YDxiRAT2kbK4qbJJau3L7ZEHCQZw1Ag4p8eNtarkQ",
  "key5": "sJpEpj3daRarSnRxowj9yTdtsWgJ9hMBtD2z2rLizKpH6biAUhxf2Lk35aU2P5kM4RPnKh41cuHV5H5t1Dasm9i",
  "key6": "iD1RmfYKfuBbGd5CFhcdjgDqP6zhfhYMwGE8kYJ2eS9tUTNKuufPJGH4j74USbBDmregZdPcFjAGrqETSxjuamM",
  "key7": "2Nu6WtWpHLnaBfTNp3qygCiaZ1j1z2kEVLKthhJL5X8B9YxKAJV8tNM2Nu8z28qNJPwe88iDQjhykQdmvR8sZXo9",
  "key8": "4WQmrGG8WzEVMvkr9J2mpaBHz4ZwampAyQHf3dnqJy245Nx3WeeTUZtgeMRTFt2HAiwJj9A1xeAusa8aMye5xR2B",
  "key9": "2HAEXwXSDvdVapQjesuV4S1pwyHkxKn6iKhj5CbeZxNH4MEbQiCx7A3cdgVmLs2Fa3kJEo1P8RHojTJctaDyr6SV",
  "key10": "29SRofD8YiRs9hqszgcXV8J5sc7JgTjjfWshiZuQ56Bq8VmuFCkznFjd8u6EAcbgD2nPrmwLoPVTpGYCchdR343K",
  "key11": "3gFakCSzCfkHDN32zfh3mNPUKngNK45knA3PhsH3W5RcGvbtaBZC1SPRK32Sjg5GSaVS6b5PuJ8khP3m661KgW32",
  "key12": "3hnLpCEWetdBdaSgtPDCbySfB9eBCyMReYacCYtcg8ibxbB7zYywJjCqs2VUywdMZFMq3fMAFavYeAAmJbmBWePa",
  "key13": "5MxekQ2rarneyK4J5Ddaj8btiqQEHKB6vhsHDyHPQyd9r3pRWCdJ6ZY7L6aAjBGoCf7E6aYJxkFAYAshAQZrss3V",
  "key14": "4GAHjUTYoQ1iBuDZJwngtqnFs8gCsoF974eCNFL1WXUFPkEBHVooUBxYMqqUYRe2anxqGUdNexj23wNmN4FbF8H1",
  "key15": "kJBL13Z3H5BGmQ6tCQ7jZvKHEnuAcK1E3ecUd6sQp8aL4HXZKDEXvDmnRDhHnVU2bsZEcE6zVgRxuZF5MyGh3GA",
  "key16": "wN6ct27VY4eHmwwi4zWaq9V3UX4Py5iXpPHmAqqHMGuFq5Vw81hLv77pqhbxvVeCziHBs4T8wR62b4NkmbXLeQ6",
  "key17": "2ZWg6wXpSgwL5qRftEtzs2uc2BXDsVNVgpPcVavSdYY6rahyNs77sHH6oNmXa1RzsV2HhbMV691Zg8R2x4VzHYWD",
  "key18": "5s2VESeUchyAPULYfvJo79nUeJFwf2Qq2ZkuGL1fHasjo26YUdrwiyYdKFpjSH6twtgejhw8umSK9swCeqsvP8fV",
  "key19": "2MhJhzgv1PdBsqPMhXSHq5xYdLn7vZ8Xm1SJvUEmV58tUUrKg4M1Wf2SDVvoqBJbQZcGX7RX9VtgHKpKrqkC8xuN",
  "key20": "2SDtj8ZnVjsz8XQdfFGnPMoSHHat6ZvNCcjuea27nsjdBykGhSNb1jnTwgXGZps3rYjjJHX7SsxSanxMAgMs2LjW",
  "key21": "5C2jYXu7DAWYrJ77LJJAvL6sKLSQjPNJKCMXmmN1fcXbDUjH7qzUkaMoFgXgPbBr6wa8guwWptvFX45Nhm1VPyDX",
  "key22": "5tqN8kgcdXsKHPXdxuRdgKhe9jzKh83akV6tFwBaRC4MAQv7oXTB3XcjYEYwkPnnv9yBLJFdo2pxhodod5gDha1K",
  "key23": "3xxUsdrmwjCXuZyckshvZZJrfPiXLqT2J7PdMQKPPZM2jkTbGvGcfwupFra44phyNgFn9HryGN91B8iKBxsUuaQG",
  "key24": "339NLBcBH64QS159qtHa1PCYG8ok1PSBR1EExVJZNgsUNHeYkiWZuLsgBXKpWfYmpfirM4P5msU6GNZ8mkx5iXSw",
  "key25": "26yJmgd9Jc5ou59mS9YvegHwq4JA1AzoFEq28AdyiiAmfjMheLjQ8DU1DXVv57NDWUNXEZUBcUngB5vCiRoXfcuC",
  "key26": "5u7fhYDJNygRA7J89YCv19vEHx7GFDk6EtWELADeodVxWZLJbAHPFtTKqmNro24Ly19vnJXSrJFqqJvATahuu5Gd",
  "key27": "2cWyHS97DhpMB1fZy2ZNAcmtDX447rSgbAzrL5FnGPRevuQ6teWmkVdxVELK5HqJy5uvBz6TZL88xX6avsSQabQp",
  "key28": "9em1UCMSRpChCV9qE492nBFwmuBmFBmcLn7DJ8nZRLgSf7rRJaSHKsiify4ckJG9LZxiD8bNDJgEwbz8pPQYh35",
  "key29": "5JYcn3cWJHnSbn3iscW7R7mpbEaK8PNTaRxTLoPd1BTrU2XpMHpeZPtA2XSsqQxN7cqcWnZyWKn4ukHsCJpoMN4i",
  "key30": "41J6WoMKNjGCAR6ihrkDQ9DHkFEFbXySUjK2uLVp5YipP97Tzyd9WGJh1RfJhnVeYe9QSqJ57VuqEgrFaifZZmhn",
  "key31": "3Dy1LZNKuGichTE4T4v9wLEMFvpKsLpAcGXcGyvPZT3FMEnHtSc6AqJ2BtB2QSDWDsPPbSjgpZ5xiLoJo5eNWRfm",
  "key32": "4i78tVgCfbC2TC2f4oWpUNLnoNbtCrjvtS27HW51F9kbgrpRyXSbFBLGMzFNnwD28qgAj9Rj6WNYqMG4CcEQyAob",
  "key33": "55XYD7xjxzfA2AkyTEo49YSpQRRSTv4ajbgshPddPqxELgKySKUe5uyvB84H11t46dgjEGJaYwYKtHRAnZaUFDAY",
  "key34": "fwNVG8k24kuTGpRLgfpTo5snqTJo6RVKamEM3tzt4m1YFWAgnCw71oaqsKV3FYhDNHbGKvAsCVTXQQ3r76mi1JQ",
  "key35": "4XPA58xUBigV18qqwe9x7vpjzaVVMXuu1dChYybih5HMJ3sBrmwVNEGus8y8hU19s1frwRqpwhVqxhVt2wKp5uLa"
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

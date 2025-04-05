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
    "5oiLKeXTXegPj1qszzJu1h1Z76diAGF9QbbvwZLDQAThEyySHYhwLkWc2fimhW5T365kciUgnrENcMNkRfrF433K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i9728EhC1znSvCVGUzDtqkKfAWfVuXJPnM2aRuZpNS3MZcp4BCemEtPwQh35CZbrkyi7TUPk7sf4WfeV44FRpea",
  "key1": "3Ws6VeDAeLjVRKejaVrquBMSPq9EBvNcWKQccdzd5R4pu8QsqoSTNwJDE3uyvrJ3htsdYo3dR5TsMGtTHx89t2ow",
  "key2": "5r9RJUyPQ67fyjTEdbezoJ1rjKLdMg7hs7GyVnYbwwJFMGFyv5SrQfmebTV1b17pHDLLAxcX5kuVQmAeHg9kEDkG",
  "key3": "oAes4wSvP8iDY2M34ojd7ZHq1VdGciQZm3oAHZ7ak9QPRUACDKFAqXgC4hN6jWrVNoZ92fdPA4HZ2rneD29gPfC",
  "key4": "3gb71ynVkbiuPep9C18QBXAxDBxFan3kKdtRUpjEVyxxqRjS22Bu9Gb4LkFaWhpCh2RXPj2NU7pmiYC1tgxoDS7U",
  "key5": "3PHkvn8pb8TbbS2PDEFq9j65kpnLR2Hxqf2DRTGPURaqeBPBLaBLaxX19tVVLGFVk21R7JNT3Y1GLR1X88XRVwBq",
  "key6": "2DByaq2UWM8LwVkp4xDJ7qvH7EPTp5FL3GXeKFGNL6QopvKhSuqY6oQR4UbdXBxSnNEFkZxh43nD9WgrNKgm5MmE",
  "key7": "2jxHenuB7atWkf7oNsuEkGWiyRidnQSfAdcD9rZN3zGhGEsVXDZCv4jN8JgNdDo3up26ZPyzszB8dY15X6Uw1iZu",
  "key8": "2cMvD6cNGgYN38mXw3gneBAx2bkupyXMzf8juKh7JAEx2icgohothcacKHAtPaXMHjNZ38aHjsK4ptXa3J1ENqjX",
  "key9": "3pyKk5zyREWErrJ6r4BrCWLoBbo77x3MitaFYDFJzzMGc4QNSXzvnvhX9nSARgT3JjQMBAaNGB4PSekUgLpXwZrN",
  "key10": "38WXFFSKVk4EDdzK1UeKDEYtY5f1zp1thR5PRqT783nFVmwijJusnGmmnmbQQt8D5Xop2yJyGaBkHCiLUBMgpokS",
  "key11": "4DCm6rfsiMrGdTc5expzNUUDBK3DgNxYpUq1dutUtu8zh12sAiTud4AXmWxtX4jrLgFGnXCJJnxL7oNZKuunWxox",
  "key12": "2UWqwLbHWV9rbjkcF5hPXWQdPu26URRpjKbJvSpchCdGNeJhQz5yxP4WVyZCawE7uXgD8raLTMfHSMurrKsHwMzW",
  "key13": "2YUc1WXSEU5f1uV4Fg2cK3hJxcmGggmKgntRHv2bSrcZmAU93si3gfF8SWnjMv2e8XEGg5B2X1LGPkh6SvwngJhE",
  "key14": "58WtqJiwh2UbAeRGB4wiFiDZQYembYtPEEovR3D77N3hGtAyUUjxHmM7iuRgZidnAk8FY2yPbrDhypMYox3pYnna",
  "key15": "3Aizbar6THr19Xv6HXBKW762JUqht7NzFSdpwsiWfjyEcHf8AAQowwHENtAqBMfkoPdG2uozrNQdRLf1v3Cw6X6x",
  "key16": "49Tk7c1SqYxxBASA4ADUBrRYfVu21uKHsmWBwmV2MxeJ4QFD9Q44T7jaBySKT2PVxvihJTCuT5HTBAatU3kJeZFE",
  "key17": "3oBBmH4LPLb3iXcUyMTLojyEmnLFbpHeimmHEZJfZxzUg4u9RJtf2UcQdTRuDqcb8Pdj2YAaxuLqhEsMUYAK7nTv",
  "key18": "3tTd3QxJMFvvsDLJhdFy3ypuxAMd6ZCRZyncPPTi2BfoGKmi1Q5zfJrXmUWzpfujKCVLGXrbXepdDdBvQPoAZUBT",
  "key19": "5hdEhLHjpNGMdTsd2BoZX7HuBSBQQVJJFcHh9rFBPZuQRTyXhsPFeXUPashaKdZA8svM4JFeJnhALk7tpqS4McBL",
  "key20": "4U4Wwa8dydpYzhiSJ5AevRd9628U8ziFmDKajThyLd8TNqf9yyaLyiimYM7kg3H83Hjyi3mh13UPJvicjuoQEXdq",
  "key21": "sfUnaSQwPKXMAEW8sXsmE4sAd1cnovfiEHThSPc315qLEMVpkRAZH4P8dUTk5ZneKPZFEX8oM83pE5mVzFDj3J8",
  "key22": "2noTmtYtMR6S1QFqnxZWWKih2msota247kt5ig8WbuozErCEUYjB52HiGfXjTH444qKbP47p7xsyqhaeUyJE4YbA",
  "key23": "45ngrTVmLFF7q3snmQFMKUETiJeEfmd43nDsrBgAwTLubP3jQTEgiorFfosk94NkduhbgS3sNsPoHJiuVDDPVE6h",
  "key24": "r46MNmCwft4MWLAKWcUsfhnWw9MCkWpJvGKKrSux8fYB8WWkTgsPHBEpaPgMCD1e6k8UW6PvkFTJC64tjLML5LP",
  "key25": "L9E6Ub1MRLrvPeFNf5U3TbexFapvQbQQuE41CB97XoDYCUgwLubQ4YvtuCgt3mfH5WMemyYp6nApF9CnqPzAdB2",
  "key26": "RSKKkQ3AaG71Jg7kUa75h392rmPtn3JA958nx78YVwKXVHeP7HvPb4JsEQZh4odYzpLrgjd3NTgsGaDxhE4voyD",
  "key27": "662SSYjFQusfgbt362EwJraZrfcafFMrB9eoJRBXQ2E6ofUBekNaaGj5FMbt6DVCK7y4Y7E9KoZcQYR9c9Rt9xNX",
  "key28": "399agExRxHGfSPzu3rynTWZmL6JkGZ2qwELQiJBQNuT7RWfNATKqmkxh1yCkMaxdpbgnG9NnsQoKvuss5H2psQCF",
  "key29": "28qS9Bxzf7RySadZdgKsjHQcyYwV8CmwBSvaXU9AoGTHMx86sL4usnyZ6NuVRjQj87SQcqZeHCKHqXToLQJ6fMLG"
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

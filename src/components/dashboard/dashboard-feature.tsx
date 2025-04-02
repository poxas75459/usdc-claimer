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
    "GzVrAmV2BSBmM9bKFDyDenG7pqhCEwPMsrpR69yWXYf6DhYXEGozctVTYptGg96Gp26PsoQUrW7mRS9axuYYRwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KHdt5x1JiChBRKpYpb6rPrxkuPEJhAiDZv6nqvpxrbPoz1RgVxou2GoAiFW93kT2Gk3zykVv3JUBNpWKa4huk8M",
  "key1": "xHmu8iAdjidqS6Eu8FusfGEkYPf84fcwH8nSJgF12raQyu2PkEMZTBchFXzpbofBCrLaz1p5pz9bPfqbSzmRv7x",
  "key2": "Ehvxs57swNG7ZdRmTycDeYQQAot4EkfE7tEjsTBgbNFJZexqvuvuxGQKFM9dmoDiiPgTzBWAJU8rx86BYT4UsRy",
  "key3": "4HwDLFizj4Qri6QpzRaCGagH4qcQEt8R8GSBp7MFiTvweuc725sC7QUTS3P5nTJ1nnbVv9VCjS3G5siexza96sz5",
  "key4": "29iqwi8x8PKos2jV1D85s4vz78hmucwDUJB86Sn51zkpM5rSuR42LFzjEpKNZ3wUyfzfYnjit4Qg4Wxz1bRRbDWz",
  "key5": "56q9mqcEesQkbSbZ8nJ3yMQfLmuBA5225cE2Tg4MGLsvcvPtURouq6FECv1dsVdtHJknpwSWc6uD5BRKdFNZgFtL",
  "key6": "58LSef3NpJ7gBbeUTGTdw7o8mTx5eVfwXAKmpd4vt12r5fsQqmh2n29vU8ByP1a8J6kT522aWEJ6qm749sWDwGCU",
  "key7": "2fedAWuSe88KpfxK3UAHTHuaq1v2NhWhbJibNaqBSq4GBbMaviVmBvHAsTm2eUTMhcwf9Chu51ysddCU6SurZ8wg",
  "key8": "3quDpBiwRbewMvykmmTHnS4AeYSHCJo8fwbwh4HacMw7oQUcrPAex97i4nGpd8CMwxaVNRZ67d3wvDQ61kL1wQ6Q",
  "key9": "42p86b34f3bdSHbekN3HaMy3qmJH9LPPjBfku4pJsW6sGWDpueFaWEbmssNkSiU68NoJjgJEQLSKoZ7NDA3yy2od",
  "key10": "47L6nTvYVLfWJE9pxEjh4hH7nH8DcVDdREmmDfAzzpXsTYsHnr7etFaimi941DFa5eZDeQwZEbKLcHCyUjkZWV44",
  "key11": "rRVoTsXZrZdBQqQq4vjqWpLdizf4dMexeiQ1g8Ej44Me1AX9kYXcF1QCAJuJrdM75UXD4WqkDPRzyPHagbVwP4x",
  "key12": "5ZVtFsht61Fq1oPuk3r8mVKVkTin45Hd4ReH8HTm2F8Zpp2yBA24aGCcYnhZaP4iAEuRSiRwyJsCxmhnbH5ZzeXb",
  "key13": "bUqT6wNMbkr8jk2ZeLCJRyEQNzrrS9MM8nYMyfNBWk9iRbFZfaSJV41MgnXg5nygQF9n65o6VEfmSSR6AfaokwU",
  "key14": "4bq4C1tJnpRFK7QxbxURXDr4X1WocArGdX3PoNE8AGjuNUzzzLajK5ZCd8vmUP8VTGiCM8cd5q33iesDauE6C9cC",
  "key15": "5PNGJXrXa98H7xXyJeFbrn1BifU5XGivatgkLTPyMWp8kt53jhU1CbBg6V1KHAHS5zKTzE8rgct3mWkJEBBNKm2u",
  "key16": "2btwniFTce5knn1YgYgvTmbDeMHWMoHdiiy4MuG5uUimkHxLjcRQH2ietovVywmgP3jqJmmFmFMzVAKAcxJJxpSe",
  "key17": "cak8wGrZrrztrvzKpMMoeAqwP9SDCTY5o1XMfQatQqX34q7g1zrE2Wreo7RP82sRcxgapy9K6qivBqhDxWrq6GH",
  "key18": "6gYP7x5Ks2ZwxmWd6MTdPTHZRw2R9oXEdwypQzkmdDAAyvz2YBR3qacUEzPwGeE5nu4T6vRveWixnobhaW9rBYb",
  "key19": "2LZRp2Do1jPkcPfvtkYA2VL4Zs5hUjXhACrf4LWjGnkw5VYwHUyawiyAc3LYib4aQEHhwZaiq36jA6mg35cgBffs",
  "key20": "4egCqWyjZ2oABQQxozpuLKDs67rFJfvmUJSu6hihqh5Urt3Yp1Gz6T5E2yNC2Y51q5z8FHcfpL33neWJBxjwLvx9",
  "key21": "63mVJxcLjLVYCydLSzmq54k1snqypbUb5xbitnqoKbnYznUscnTSGVfrS9yhJjATHjxCrb1nrT1HTytXRxToTvgX",
  "key22": "5KsdqfhRr5EwTwLC1gYHvgpNkRJMakf33zzzCwZGjEZSXNagm6wZfUT9rJu2FjkdGLdyYBv7Gm6Ufki797vKEkhr",
  "key23": "CFnKGSXKfoySYPgtavwVkDyJFZaqb2AcR5Cdt5PZrxqU8GpGCh7rC85cdACGuimN9jmzBQ4jCMvLESvU5bHa9aY",
  "key24": "3LFG7yQXwWpFg2Z7Bwpx2hCs8zM7PGEnVPKviAL1L991AAoL4pKWhP8EYTyXrir6mmCiSJAiBV6xFywE31Wz8pKP",
  "key25": "36GwacJxXZ3QU4MjnfNAQBxiAuufavNX1cLsJcNpriMAmPWqPTXPXrZRgUWnZXtWSgdF18FQJH8bbvVWxceJ2Cyc",
  "key26": "5QEX3uyAMJHPZNj5SrVoABNHoRnKct5UM5KjGoPkhNSWaQbveiGntervsqbJ7W1tNuA9LbGsuEHUxW1yHmhH1cwd",
  "key27": "3ZSpmyaQzhEL9MsZvn3SPTcBNiZvzX9vBt4Pm3TQoEUNQdhWX4rFYptx3FoXbNKrt1ZCkckk4p1ukw1uRBkasFAb",
  "key28": "2jKBSJvTGrjnmWM5KCSmwhYTcBxCgqe3zJ8cyaYR1naHHxE33itVFmoe3Wwh7WH9D1TB2qa41saVVuKJM5ZAHYHf",
  "key29": "EqnL4xRKnwqpEwjMKGrn7yD5NAauHg76oM7EWSR6XFVEtngsdvkXLirDbMTjRZcaxjbg6VGUE3pXE76GDbKSKnR",
  "key30": "U5DpBp944Wb5jMrM9GUFtfsNdcFTvDxcMTCsvQ6WVQsKCFBqQ36zbcgoGCT4FXTTQ6h1nTyVuEtmgTne5X7CuCM",
  "key31": "2s29pNyebknQxKv5nfFq153nBQmp73gqzgd9P41VL4L2c1kX1H3co1SRucPk9GMHVWDgxicv4kmHLgfDPyvbJabR",
  "key32": "5WertD2fLfNrhAZ2oTwuvvwDrgKTNJQsKNPwhm8FSstEUYCVpgRciHpqyGzbF42sZikUq9rvrw55HcAncvGV3e6N"
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

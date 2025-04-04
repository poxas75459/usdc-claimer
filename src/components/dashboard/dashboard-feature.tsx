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
    "3QTTFJMbsoSVB9urdfxbahiQS5j5cNDFp5pLKeTdu5KPA7tbfVSiM2ijDabsqFuLSmFQjpCEa4Gbcna4e3q6dj5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tmtazre7ZJKCVoCe3aUGokKh9VJznwxfDL5ZVz5NAK9LxfcTdnSjpvPnHRrfgnpmrTdzVFQSUao7vRZs2Kfa6qk",
  "key1": "2mHX5iPQ8t3DZSqLzPqQja9gSSs5sAr1nRnh6pPSNL4ZJLczrz9JtjfiBr75MzMEwVbRDR55uRAoynbuKo7f82tD",
  "key2": "66B7R4gPnWhqHFtYgFv8q7EgYGPADx1rY6cD5i4YbtxAddZ1mH4iJEaW8jX32cGGUDkzeX6LjCpCSvxmqSRXQwG6",
  "key3": "2E5rgvNwKnpC2AVCsinVqm3V7Ac9c1W6ghiYxjNW75jV1odbcjHPoStokAJovU3bpHMccQzw3i3bmXE14HyZC1Gd",
  "key4": "UK2ZDVcZZodhGTPTGfstHWTNjERF8D3memBUJojmmzrLeKRGpbxW9vRC95wwrHquC2Db88pMAC1jDA54yRTTht1",
  "key5": "5z1iAKiNHG5wyWT2JNkaiHTUsQ1KvSVGXs35nH9t5gdF9WHwEHMQsQ95bj7QA3MA3tYXAUsmDVd7xCmtrjJN3RyG",
  "key6": "63CUdXMktyMBsCNSLJv3zrpNCWFTqvqqGWCGyeKt2qRWE38Ezrr54rewfgEw9BMkrj4KSePB8aHw4nVbZXLiysu9",
  "key7": "2gjex9jXKGoM6b6psC7RQMUyefPdx1JhSZ5MzpfyJUdP3WTQNiKN26WsReUfd1wX3HTumKVaceYWCdvKgMHm7rU4",
  "key8": "5p3SZYsvmxs85CQaudW1QUJ6etRmmqVXjauTSrD5LbEDhdJTj9xuwsMi2CQJaU9LPCEmAQ6FfQbpMY4xezBsktFX",
  "key9": "34JkENrhxwG7CEcJgnDzWVv8mu7LtBpaS1kSSoGftcnheuS6AdHhqT365S12RvzHyQ7d9H5hP6qEfAyZt8cbU7DC",
  "key10": "2u1CZnLMekDjkodYGz3ruvrn2h1UtPWCNJ92zvkdZNVeJjrEExUNz8T5C5Th2QcRftwMBscHZ3ggpu5XeYBteLDz",
  "key11": "4tHmhvfUbJFZjPrR8wo1tfg4NJkwUvnThzaVcfQPU8cAMvuBQzQRKao1ySGoRe4xeLdp6GZnu7pYkAv2PwotLqLX",
  "key12": "3691vVJXx1wYa794ngAsjz4HJXJqRP3SQvpJ9WgmK4LmbxBcvKhFc9HrdP9ohDhMPLMNtAiLzLsgeH8t7yFh1nrL",
  "key13": "2YnXcLVsRqbcRYpySUUSnZPFDmbKBnXm6hy5RREV1E5BVhRuLhj7ekGWwzv9MjjgV31pAnkJEWrfHz7x8g18RXoS",
  "key14": "2usf1D9jj3wnC4jmjSZFTghCccoBTLaXHA9BLFLQaNQwkE5w77YnmtSS1z3Hb63dKVGou6HZaiTT7nQTZrNznoQg",
  "key15": "57QnziNFETQLPNBiJrfNSYnGjufjooPGaz5bwrJFZArpBC3o61byybVAVSaVtgYEgUP4rJB6663KpT7yb9LUc8AW",
  "key16": "5cY3zFfBe6RUfbQwN7REnrUjvNUvpf3fhivmPJJXnzhQ24GKjMzzPgbvNek9y21AhVH1MkQG4x12osgvE4rfpvsP",
  "key17": "5V3NPfo61yx8NFVtGq4hxVc3eoCbjTerCJCSSB1Z43YtJFpTjLpRzTm9umY3kmhzw87m1V2uHRRurCV6NpshZdyE",
  "key18": "5LPuYuR63nVFdbBPfHpk9uGvETKgRvNxsQVaWrznuy47Q8BzXLZdXMgTUtr1iVZGA4RbTdeJgfSbdLWK52tFLSok",
  "key19": "2c2b7spCBrN4M7SYWn5cdLuG8FmWWuvZ2YykdfurWLVaxqa4dNz3jNNyVQhAhPZaXp8gQ7Fck8bjFQxRUc5VjPma",
  "key20": "4PUmddogT5eTvB9JcHFDdzpX4VvZFgv5oZmWGvz626uGjLsqYMARtXQwY1FHQaAAKzJF9wmTpLkocvGotbVbDHp3",
  "key21": "37nCFausqvNAU9QFjPqrjD497FHgZqCW4vZJjPC3HkhVeFXYYYPjwUcjf2DbzvKHdvW5kkgd5V4veGkUKgja9XdJ",
  "key22": "3KwjwohjyGBYypaQB5jWfLmbLvB9WQeWx6mL7x7xwMnvgn9g3v9Gh7xwHig1NbsmtgmMxppk2zajizhxAhRLh7uv",
  "key23": "2mYXLwd7zGueq4tkQbV5DwYWJypNNw5aEPF4XJ2GNS72mjogyNxwUTpmKrQUuS8uu4dJKmyD7N2dtd8Va7K2VqsS",
  "key24": "4YpzdJW1MtGWz5hiLb6HJH8WMd5jCknwWenosVjDFUT7ddjkEt7ma1VAnDvuytjnLcSoqskHJtASCx63TfnJEDJ7",
  "key25": "2AqS6Nj2YRSfRQ6eVX6RFTN7X4MYJS4Z2pheoUey6Xbt84K1vqJzyBnFVHdketYCMge5bte3EUco3mZouLkHoNTL",
  "key26": "2jmqRKbwGFW64jV8pzBE4D5zyBeaDSLZD4mPGBzfQbNfmhWPR9MMrhqnmfM28W1qqkwfmoHNtZnuPZNybeg4RYGy",
  "key27": "2p9yXZnzrtXvvUceiPMYfannJDxAyEyjtEmUKgJxG7RyM5QDbA7RzsmDQhsHpFrKPVUShoWUL1WamFYdjQJScBUG",
  "key28": "2KkjUZaWqjejnGCUxM64PiyzvTTxCjmDC6fbzBr3xY8U7zfomAVo5P8UZySbPkujPTbCrvn7ssedckdQYcpB7TJ3",
  "key29": "5FBFW2Dw9uGVWZLvcVj9NqvcjA5aSysk2ELTpqMnQrgSFVCSEXApNQahRCVkYEKvaZQaC417HRpgsF9RK9dQSwKK",
  "key30": "2LnPm3pmp9tBuiCWu2g8zPt3H2G5Ey2DmqYHcPVaHfcT9SrJ1w6r9uC7ANjJ2n95ri16xMgQaUZTW3n7ii5AGHir",
  "key31": "2dCqdCfPkFPsd3Tznaf7nWwWs9Mt4kauRxSkvWvheT9xw1GatrPWRr316teFt3qYJJtcN3m3VXUbKwe8jjSSkLbH",
  "key32": "57SSaFVMG3FuZ4PX8Ff2mSP7mPYaF3F7Mu7icgzBExUmoX76YNmUyeevWSEX4gKyT1W9hCdENfdF8W427HBMGar1",
  "key33": "2fmAwDCjjHa1aFVcfgkL6LyLqUjqKXkxr3Sq6N1wZYdb7CPWznQVd3D2g8BU8ox5HATf37TxJLbPVjnDjcFCwUwB",
  "key34": "5gfn4AXX7dM8JZiGFgoGg8EPh6XJXmS7qbihNeMaD1JF2skxCkTsSqKTsEgZq6uAPikzFUAygkBPGzysztJ89GvC",
  "key35": "sKmZ1ftX2UneuNrfCtzF6QBfbdQdakkSuZzqfG4JDHJH9L3aZjXwSCaUx6RSwy2nfn7Ua7LucZAYS2KuAb1EzHW",
  "key36": "4z2o1DXozzoQjKqLqTzqwfZAMkhrNrJKVZuuJLFv7aBsjTR6RH73HcHKmzv2NR2AtioYm5DUXKevojRqcELaPJ31",
  "key37": "3pnm9RvLY4D5tuUAPBer1HydaFY4a5Fp3DC4j9bQR6RA6GvN7GX43n4UjwQp5dP86GNY97mJydspd6YRJekUDo8o",
  "key38": "3t8oBvvgdNkMzQGS3ysUYq2G9hoKaFAFcE8e5z2gJvSQX26VTmfFzNSCaYsGTRcnAG3mvcfiMwVxUG2sHzmxHtNJ",
  "key39": "4FtLN781pCpxSAo4rVvUj8hhgRgKPMbHdiivVAxMStibvqKt2DxF2hzNAGSD81yMYbS47qwDwEWdkG8jVW4qYqkX",
  "key40": "2DTcW4AjQEiEkgQBgGKqTo5q5hcVtPXXQkgrbwiD5FxBfBBB2U43uxktNPtrT9tzRGKAsziDcWm19BNH56ZGoH7z",
  "key41": "5oFe5AvNvXVgw1uAtcn3es1A5tSJDkCxTipQ16PhzPdtE1MzcjCfdJWhTbCuPLC5B67bFfsPQW7iH6vM6gmU4M7E",
  "key42": "29TGiqrLUojLFte44ejJoLu1KhJKoQWeU2FoH7VzbKpdCFc9kv2CU8dkL9G3YGNTcSXcGq5WWLRriXpvPL3Yj5yp",
  "key43": "2J5kYwbXjBsdMxPn46TbZNkUU85kenEDaVYLxoDnSUm1GGAE2Bxm9VSh6ciw75opvuLusrH7rgBf94277JhWoYE2",
  "key44": "2zGaFFK1WuPUcgAkfnQgdLz8NrYhfHZEjXs86YpmJQAN6s2enXJWTgrKrhyX85iLMScHqWT7ykFr9gwPpaHpSygn"
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

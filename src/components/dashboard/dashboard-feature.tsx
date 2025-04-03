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
    "2mSByqJX2YocsKBKtWRRud9eDNEwPufPdtQpr9U8TFraSomWVM2wh59bmK7pSyVmswEBhf1z5iB2p6dwSiMRDRWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47Zp8BsaX1acWj6FWTdXbjZbek3cLgRw3UWXQAkjsLrxbP29KYFTN9Zs2sh8EGuzitefxSYBs1vXj3iyjVaZGP8h",
  "key1": "328b4HLht9onNGYgAPpLRSzJqwXTHMYBWP28AGLut5xvf3PRxZ6M42w2voNBh32CHepZPfrxG2KjnVVQ38kBGfdP",
  "key2": "3Dbh1LhWHc9NJEDpEQPRKBGHkCZJoQKFe6wy9Q1FnYuWkUMYZjcztQKpVTHLEMsf82ds6kAZVyCsS6yn9VpNfkTy",
  "key3": "4ktFUdeMPJVQk3mfqDccczbVgYdD6CQyr9mvCzqNY8pnBqTReD5cwkWvrNVfgF2z8HuJk2fn5d1ZQ6FuDg2Zqcnw",
  "key4": "3YLFVRvqPzbu5XMmxkydxRenGn76dxnTVKxNsh43NjaYRYg8rJkKqSD7ow7iEN8nQypBfjtAA9L5YVb9KGkEU5Fa",
  "key5": "2r1ZaXrMeYzoZWbivnSZVLksibbEXHYaLQwU5rvEcGwGvKg88gWA2DTqTtKQPFNPJp9dsksWozxdMXmEATk1V1MX",
  "key6": "yWsrSAvntu8AwjmoVwoPTqLzbpHaLvfmLgUiuvbmqfx5ug576w2ZanoaTwVCKVfZiP4zaQJkGkU81vKXwHu3A9s",
  "key7": "NNpRwGtAZQraEjk7MyZwPibmwFhmBEe4itP7h3KEyLKdbAX3mB79V21xkNtZugdeDudiRH3wUe5rNSVGyvDw2x1",
  "key8": "5eDczTJTw8BT9xGPiasgmJmVYkXFZQoCQBt49YZaFhrhxMjabnqshd7VodXCCG2XTNCMRvWpsJQqTn6j9nNubz3e",
  "key9": "57rZVE4KFbsc49M5CEHX2TNmrja8NAtqMF84gEwq163LcnpYHHwBXYJ2jnytF8oFEoLRJoQP5DWzvthR4npAaxUf",
  "key10": "5jR44xoqX8881yvLPtcbjBnvhBSFYL5BqpVj4kxG3p2ubkUZww3QJwXNWw8jNGW1Wz7cQdKgpTfuu3uzAhpyqazC",
  "key11": "79BhvPApNYDNvCDmDq6L2eN1VP6cswn1FaiG9nBFp74wfEwQM2xB2S3NdqFjRj1civNTDeBaucqr6Kgz2vcrpmU",
  "key12": "4EBpghGe3VTr5FGHPrT2LJuuzFqjKmdA9ByTPtJhJeP66fSKhQrJoFd5mH2qdUCnfrrah453PanLcdg8xv3DocQS",
  "key13": "2zJr7wobn8aNmKEEimd6WvW5Da39xrEdMxsnCDbwsC19ua1cEUxcQ7ECLD5GtwZ5YvmjxcukXFpMJHcuwHwRuT89",
  "key14": "2UrJDGS1m4tBHw9nVLxvXJzoNxvbsVKag8JhWTKQ79hbAePrXb41hf5HbVzUz7A93eaocLgPf4swdMBM36WSX1Mt",
  "key15": "3R2Xwg1rLd6Ue7GRZ3PdTHHui3T6o3pWDRzb1kGzBCtDhuApGTrwSQQ1MZG5aVj1DxNE2AgNuXxG4Mvya2LbUZxt",
  "key16": "2epmtXss3CQp3VNAmJA71H6ndg4dAYa94NAbok2edj3hdroUPbrDTWwGgptDjPavsESKBSzPGqPmhGK9Ff4LTek8",
  "key17": "3rc3PX68eMvBvDPXAWJvP37vTPEmggBE5Fax9aDeEkijJ9sVzdAJh186PL3jaUtZUR2YHxGn9aw9RjL9xv3tuYv6",
  "key18": "28jsvHC9FCBaf2hgLRpsuXxkpmh8aRuqYr3wcKGyew1Jq57tr95dauVgKrE3v1tg7dotSPepnsYmKZrosVMeR27h",
  "key19": "3pcahvvwR9gbnyMgrM8ouLQrPFF8Yn3ZzFPke6xnLtQXnHUZtaMH6Qi5mEn6LP9b3WHmTX3MwJC3U3tZTEpiEoJ8",
  "key20": "Zv4p3mdDF91ZYnhzjuK9TQYqep8Hyr9TLDrXeNkppnNTmFGLv6h7sZ3HEF6DJjv2gGFCnRFXix84MBxRHLTi7AN",
  "key21": "4SnG3cB4h5rEurHMnvD4oWj62wgH7kKMDyfsEhPxePGqtSCr6A2V4PYgtta7zu7DFmmtHStMHjsv7TA5X22TbatT",
  "key22": "3BaKUMr9E5m1gsz5omdykobt5BcTEFANyKuYVDfbW8GCxeBqGG5JvFoiwtkG7h6Rd74wRWnHxEzuBcNHujsDEVL1",
  "key23": "fgeCn4YaTTYngRwZvFMya6ajKj5fwQ4hSun3XCefHnGHpDHrqxeuNCepRnXibT96Vm1KeSXmPydQPLc7Yt7D5ry",
  "key24": "4HRPYGQeB3tYJmjPvXSgcSmuHyW8S6dWUxzfKLxFirB95qmS2nFJ7tZiUA2iGxi6Pa2cxtWjh7AdAm67wEk3vXVp",
  "key25": "vFjn5GBATVro8cxdxHpS9KKreL4RHLoP8vvQhKHPQQbMHR1SszcDumSLD4o4UtAsvHpAz4p5n4ArqLwMTCyLWUL",
  "key26": "28JHQdAZMVgj6rJYzXehhZ9RSxFCHk5LwRr2HAuS9suKrPBd9beeS6wt2PLGSyiWKs8AzJXok5QLmv7M4nB8WRLt"
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

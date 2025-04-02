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
    "5p43WWuLV6KZkupDjJkEFprVRxJyTX3FqgmnYHTPgeEfK2vvPu7UhkEqxg4bbjtqTmn1om72vSq6yXgKGfnZ9Kri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tav8EpWB9L8eTHhQ6SEV4J5fQkobfxeDfyqRXJWcCLTczWuQWTzFnuDcfncECtMugijAnkcLgg6xZPSS6TXcLvr",
  "key1": "41J9TxySYsRbAMNESR7FUqsDqhdkqrcnNnWE9FW96UffTpCtZysRtGH5KdjHtVpFnkzMERNfr85wipZvYvrzcjF9",
  "key2": "35XYWj9hzcVQhDVbYGDeCYK1jBinNxiUyMzL1KrbE9UQBMbWzHdwXSBrgxc7sVdMqCMQ2eQz2nmPgEVxhxADXaJw",
  "key3": "5UcNFU8KRC2ag1BafJvToRe74NJFcBmKtTV4vQtrAfFD8prV1Syarp5aZBaQ5ih8rfVzQYXN1ZbRqtEXLh3M1V1h",
  "key4": "252LMe3nRSSt1D8EfC6Mce2GJMJAbeqYNXx6wLMBAngMorHpgsT6u1u9drsuHGnBaj8kJmPJC5ZNebsJQW8atMDG",
  "key5": "bEBbhQ25Fr5Fw7sHefLxEniyfzw2TSUMTqYqv8AU3uzXArhn7dUjWTjmB7Vh5yigHbvSRxsGkFirSzPUYE3tzAa",
  "key6": "4BmVnwk3UHZWGXtG3ENF4hDpoYjgdyzfyLW6YPKt39WTFdXkmk1fAzWCzUW68uhrBSniU8A8KURybY4DWNzevpaq",
  "key7": "3ka6V3XefvmnSK7pJJENgVAM4hFseL3yagBwjLa2xnExi4LUC5r8B9tqqcZEc7KpEkzQr7UCyDDa5dE2eGrqbuig",
  "key8": "4BDKZc2hPVJ45nZz3NDm8fqXM4ujKtbuuaeiBZxkKsU3wLiY8MJN8aFeFm9HCrAxn6bE5yBxEkfu34gSHVugME36",
  "key9": "563sb7xoZuLAYyAEo91WpAgBrhu6sfaMxRDxZV72qAVqfPYSeD83EoqocxnqFGPYqpaGwUEUyccGEF33FyLGqYdR",
  "key10": "ErNeTfH7Z2FjQfextM73WVEUre2R17Cyk3WBbh6DQwUsSamX3R1jozMNyeQEHumX96RLFfwDso2Ef9s3dY3BkKi",
  "key11": "3wGrxfeXYUQLBqgRJtjcLEPKxBNBLg8qySKKpchHytKuMJByAQXje838vKs73RjbLqQDJAyvyW6Lp9yoBXKTJPUt",
  "key12": "2eNvhvG8nGS7xhesemAjTCdjwVEoZ6Av7nChAPZrdKdcnd49dKALCo4e4J61vgx85J6E5KzeXftkCT4Vbs3PnDRB",
  "key13": "4iKWTgzZogns275H4WSwG41cbDdd4RHZdwJt4njcorfGZ58adtR2QQ6HGFHUsE2CgrztKMup9hN6QSCQQiAoQRup",
  "key14": "4EAMVVSF89qkBys6wNDGr2fk49RozkRQ2ocoUC7Jj5qPCiSgqimv5J5M68NMQMg4use6CGmxRh1PEaYG9EUM6Nxg",
  "key15": "4kD9snkUHn5G8tNVC2RnQaKwHTKnGg5HWGNBkJVgCxevgGqyjei9CN7X4psdHj6X6yPpoM1GzS82wyE6juGqxSem",
  "key16": "5ss7TKGJJzCqjK9yL8xHWekQKDam37SASMmBgxiAYXiFJqZQGyuCaDPToq1CBHys9gKNFooNHUkP7KdiMmU4oiMC",
  "key17": "3dTE77UbnXoSpdnXkRyUbcwrYwcTB4agySvyBLsiwtChCF7X82UoKJc9VPLhHAtPUUaMJjnzWvAATbG9nm3Cns4J",
  "key18": "58unoyZ2BwQ4FvsDG8NThXXiLSikmUiHDTL75EygxG2gPu7BoKy6squip4KRejJ1uBQ8nCUFc4rBh5H3SfMcVdHK",
  "key19": "2CxX4nw8tuRGvRnM53hHDWf4xXdkHZDZQf52uhgr5XZuy4nXLvVgxpqbtUJseedzE6wAX7Uq57FMkN49ESMjsNZA",
  "key20": "3JcbcgkGCuKfytMTXXeeiabjbgCdGx67okga5hLWKZWnw8ZLz16Dm7s2Dy5JYUpnygEkB9iXtEpQdhpjhGjX8BXk",
  "key21": "3NAYPXiBxrL9rt4m3QW3AAVzdMsPqa1S592DZ27uEWoKwC8gztJqPyQjtuZRig4GYMFMqUDAhb8zZnva4w4hnBk5",
  "key22": "4wVWxHeLXEidZrhgij9QSDgSUqct6zuAUfMMohuDccGGBTndXWoQo25XmB6dX4NgPynB5fXYvdQLyjq6QmDcR2Fb",
  "key23": "2Mvh3SBcG9rc5122axjEmxQBNCgnPeizFTYtm3SnB6LSuZr7VC5kf3X1aowPJpEZq68QGzPcLV21686gReZs1Fp2",
  "key24": "3La3jhgasowyA1hdefJ86775eoKZk1XcSxwbdZYS95EYcMEjygJG5amZXPoAZNvJFewrnaXnuUQLgkpkU9tPo9Tv",
  "key25": "36DM73xHscYDS9WjCzmriqy9j1zXcq2dedzRzbXEwADKJr5F6xCQEQZLTDe4kA3YJftpgJ5yjfffrvDBpxEWBDVq",
  "key26": "2Pc1EHatjy53ppdffpSnJTiKKy9dTJEZ8NL98ihZUCkQtXxWcZ1MENMzjK5sQNU6r1bYmoChL2W52cFnSH5RjSTo",
  "key27": "3eXU4SwAvbSw1HLeFFyxsmP8Wi3gLhTWGmTSdaT2EETKb5qMEUqetPXLtjkmKsAdzeh1ftjnEwPLkderTY8DVmPy",
  "key28": "3gdN5ycRvCQgBBFAdX6PkpYFqg5wZo64hrwN99H8HAP912RwLY8bs2ax2QbU3W1bLyBk8htRjayomDTXvDNRqTG9",
  "key29": "323r2gBzXR5aY1uFCfHJt2vJqx6CjXF7PwCX56pdvwipRhABTfEUgQ8A75Qux4y8LkhfJ157Xm6oqCw4bjtUy3A9",
  "key30": "39Ujti5T3fpY1KM8NVWAyptGj3KP6bNK5KMP2e8CVhtj5uQWE7AdbegXorx2vyaYwdcKGwb8E8QsMtnjLY8v2tTy",
  "key31": "T7dBFwkM1J5fFwoxaP9MPsYghe3MH2mbM2HawxYSwgXTWr262qrr28teW1Ain173XER3AA4ifRkiZHHQopKzKvX",
  "key32": "461D4YrcvTCYLTxM3VsRub8gi8tvjfejaQBTGV1bVZTbdgL4trSJe6ETvkFghKHGLWBVV9fhzA5pgNk8X7EvkrZY",
  "key33": "3YbtcXLhTMr4TZRjNPLUreFAUsrqVSudwvUiKtD8cAQUgYQpt9swpEhbkkDcRgkqZGfQEsC6SnQD1kDZMcoJvHfN",
  "key34": "3rJxwLNg2f7MLeMfvtFGwMybPspoXQaSbbRL8zKWBETDqxGMBmDz55ogpxeMmjR9oUmGnzjHyX7WZUyzG9X3tHph",
  "key35": "28Fj5cVuTbMRvDwjitM2dzLP3N2QjGiGPZsY7LziXKY1wZn57EZs1W5opEKarcL8n2tUQnuByqoKd9DH7Wj3WGCX"
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

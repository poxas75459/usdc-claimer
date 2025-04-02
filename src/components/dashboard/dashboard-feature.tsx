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
    "31NquiaCDY4cKwnRXM9Tbtnsx6V82V3QdvhDV9cpWrtn11GcCmcV1KegStuvanqXwaKCc1WDJT45GdGHG4BfRkRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fDZ8QLDQLZvvHa5su8fKKptCX3bGExVPrx4ct4eEPuhoyy5w32L2JPbS5Tmgdotb7wFmxnhKNSW5pzAz7F3q79T",
  "key1": "3SqSo4innVvLxTbHpfA2PTgC7SouBrUxVPSJDcmWKuwZ6tGQvJ45mqVMpFkFCrCrNV9emTc6iNEE4zj8vg4Zx86Y",
  "key2": "5xB3Pj8hPMZzdXMJ2jhTqguPzp2c9SokxTrse346CrQKBsXjqM71pX7tiP7rzjrs66GCGLpvyAoNrzT3Xvt3eQNq",
  "key3": "4GvTTA8bCMtrS88GVcFnotsh9KR745pnp6jSC85juQJfLhNYnh5N1T6ERqaYGPbzUX5zbuEkjJpPw5fwWjBZNVQb",
  "key4": "4D54NzSjo22vf3T1aQ9fQDys9euEdtJ1sSZ6MetVVYeji1oK8S5ZcLHYTfBWYqWuMT5mNWXen5Yj5KBaxgepBNCH",
  "key5": "64yDKkLCGbDv7B7pHNjoK926EjmLQFNeC1CF1nj5iYskGreUC3ZcSrgGsQNVR8riJqRBMaRtHSqARJRw1za5H96F",
  "key6": "XXnrqUh3wvN3XfdNdcnruACgD5xTfc7NwbkULrpxoyZCxkaaKeJqFsuxLf3fa75CvCChG74ciyydYg1XsHBEhpb",
  "key7": "74XyakQCXuqKr5hdqdjwf1rmAeGvMXLoo8ppyfDaV9NVckjEbyrENMUvZzkFpFvr1iLLjdMGFCxBWsXfR8zm1H4",
  "key8": "4rY6ntvd5oQ19Qsyz61tMvxC7uyL8ZVknRN5kKMffETJx2opZeVGbvm4jKJWfWCGN2uWkpFEo8iyjfxUzC3v8pgU",
  "key9": "531XFMqdXnJFBQpv2EajcJLzRiDdweivBrgk52agKTfPy4TnxBA4nurxJeXiwR7HZkjfQRxjzegKhFrwhpp2o9uC",
  "key10": "3MPpugMkWUftJuKFmcSnt6DCD5Pcpoyd7TJd9PaYK3Biv8sjnW1ykMYUmdpDYwCnu2L9YH5KAQpN4t8yrZVJwTRd",
  "key11": "3ebmgiz37TvsGKRxJecHkduMRJNPYLkKNfJq6fqv5qwZ8d4u9Gkspf7XZy3kcULWU9M3RAcYeU3PymskqBatxPKJ",
  "key12": "1PmBFXGaBeSvJGEE8x3HPWa4RuqLKZ2LYmuQvm9nBSx6uwdqfsKNtnfzQtT6EZcP9Yk95L1xY8tbmxEoswqW2EJ",
  "key13": "AXyaaia7dxCKBxaHCWuwrj8Mqi2Wj8hMyc8ezQbSTX3PN8xvTAbG12gvvJzMhmSjPicxzfaoqubu6cuG8tVyh6d",
  "key14": "27M7wKRCEcWZbGhKQC2qSjvs6ZB3JFCDnBwZdxfdp1YUTqQuzNb4NEBZUiVVZkyeX2DxZpqBSSfQ3eKsiteTbAWU",
  "key15": "YuBmyyATbTGcVH43myaeo2NHhQ7B3qhjVBJVJQxcZDGtXTULaFcmumZBX4spV2cMeUDnJ9q5CkeGj5QmRc5Xi2e",
  "key16": "5taGrHNVJA1xuiX9TePMFRczzFheWCbrjPaAKfGk5C26XqBTtgS6P5CLjEkFfRim2xrXqJc1ZmDfWU7g9BMdoJRr",
  "key17": "5RjraHnGPjaTrCUH6uAw9pkmAUM21hf9h3Trqf3ZVqnZpEzELfKgauLCXeVqks4NCY7kvUiaUwG5FwDtamShS1Mj",
  "key18": "2LJfVUkXD1arrvsLazSJ5zozYGuJnrb9N3yYsU7hZKVd6BxXEcMrR6Bz9Fug2mBpbAGgARDCTR5fGGvLiJtjyrvi",
  "key19": "2XK7CYWt9b6WfdPbJbwqWuYZ36utD1eM7Nmd7Bgu9MkwLV8ieDcJRiXE2kiDB3bJtrSVQtE9ieq8SCdWYBTR48qb",
  "key20": "35JnfyUvfKQtv2Thy3ruygQ8G2mKJW4tpsPHSKAupkAAioF91jQ2VwAG2RPfYVKKY9RCQa4xoAMXfyPiey7m4bje",
  "key21": "5bnjzjBqZfDx87LRL4546wq31YxZxfKEko6qvnYhTQxCNbngLDggXetLL4JF7kXkpAerWkKPdkACfXHr6qRhdcYb",
  "key22": "2Ak2Ft5tyDDZFYTRAFVMbsANYLCqhKCxPnqGywg2CU4HuFaRVx7d3xMa1uoQVRsr6C4MK7zQBPcRvrC9CFPH3ZST",
  "key23": "4nGbWR7W1mTitQ2z8PJBy9dvxQiJJmLq1wbUNtD9sUzvdPQiBp2zGZ36ufV63jPNbiKhin6TYEBkxDjELbduoqny",
  "key24": "PYFoLn1bJVRQHdJxFLWGEjm9aeAJ72BUSndkSBUrLb9x31pLzxmsCg9iWSGLFJSKjZw4AsPdzsDwztwMs35aoxL",
  "key25": "2DZPSJGsabUJFgttNyy69uqdnicXg7xAZ1AL8Cm2Wb47aQdggpiKErtsPhESRFRshRGrLZxuRdY8QSWW27PLY2qP",
  "key26": "3XJDsyDaLVtbUCzhNBJqvApNDv9y9Ktk5YTYXgnxF34EPF2npXu1hLdsTECpsKtUJKvFE3VKmMScmrauaTxMWsk6",
  "key27": "125ZjgWzqPc33R7nvsRdwya5SpNH69mCmKmrEPNngBpErHmbZoHeeMbx8rEgYoXJpdsDFrBZZdkMXVFgbzf5WsTc",
  "key28": "4F3vMSjqNYi2RCTc7oUQvHiFQJAadrAjiv6nTQvYVr5MWLrkZnBjHRt9Ldeh7UojRsGbntxpp71RYoVgw67pon6F",
  "key29": "3Fx1KLmpvjukJ9s69b3Jju6xj8oCai9y3P6JKrcgrj4PqZc53uXwpX1KeYVy8Dd7oZBYKosF8Dp8syjyucEoYo9P",
  "key30": "5eJSu4YwLdKhnbHerz53fgU4anHEYDEzq9qFDscMu9iSFgQ7RKEZCGAXYASL8otqGy8vBcGjCkUp1ksVwaHK39jQ",
  "key31": "zhuXv1cXSXJ1LuyokBGqpMgA51xE3cB5xrU6SeUVReqYQd353xii8r9uxqgHyD5WbH3mFr7bKosMLhXZkZ6Hu71",
  "key32": "2LgdVgq71pnm3vuHgo5TCRriHQenKSLMRd9b6wMi8AuKyp4tQC7qVQDUzS6K741H2Cr6nUB1LQFRLwvGtQiMrYvM",
  "key33": "v2N46EuHnkYAFXdxdtsQBWk6n5jQmxnRisV1xeY5hw2SdDq4rQZsj3YbhXrN86HXacXEGmH9j9dwVDA8V6eCKhY",
  "key34": "NyigeGEHKxqrHdfu7zLxG5kjz1v96AP2x2rJ37XAK4McoaAqQbPC3Mkcz8PTmuHLd9PJ5C9NP9Z4S6vHrx2XFFB",
  "key35": "2jMKiLfxguSjwYQmaQouizYokTHCFwRpB7wWypPnMCENdG4uTYxNeN4MA9e2DyaPf7tHdUXgnkySwsMcMrDqtZMB",
  "key36": "2ZoxTdKsQvdXwPyZ8PkseKRjJKnx3sAQKgVSCmChTDiF58dhgJWooF4ifmmw4hGW2FRxXWBTr23T4baje7RGF8C5",
  "key37": "UqqeZv7BywVh5M7ruwYDdht6ioexzYFKVxwkJe3brCQTepLmnuHHUSP76y8PBAYSvp4LXYRdycnXC5123GWyCuy",
  "key38": "SV3jGecJsxJ6Le2BQXzVJirZTfDfSrh8vp3hJsX3wCTJz4DhN3nzapn3NUULFSxCmz2PDPi7DxCpKG7hk9edmHj",
  "key39": "LdEtBgQej6pwKQqeMyxvTPzLsVTrPLv9g9UsngbyJJwcQWutnvNGob83PMugA54cTa2sNYd6jtr5pBDk1j4vWyb",
  "key40": "35NnWE8pA2ncunTDGKBqsQXPv2p1BWEPsH1bQ9kUh9bqKz6Yg81ChnbzayXR775fdmxovBcPkKGa6nZ5xx44AeE3",
  "key41": "QdAKAAMAaBdaV9UWFF7JKw6MxCtGrTEqowkB61toCD6xvLBbX2f7mUptaG2K8F4SPxqXYy7RfN6x4K3ZAkLqtL9",
  "key42": "5PxwCFzqJe4ktTMsaSCEKJVYkN37fC8SCkEUq1h1QCarXL8u46o8sxjftrU8xPjpi44qxPYmU8yggdaHpu4Khtmm",
  "key43": "5Z6KNHsqLvbLYZ52YanJifasewL2aYPNAv4LnbdNU4atfsTgvcVEKxYDC8PCJejCW4zJjjTHDVT6YXipxXhx5o9y",
  "key44": "2PzptkX12MiUC75VYwG5nH18q3bvhjJH36WAotVyx1QMrW22GoQ4GFvfragvJ1tPjXnbYt4ZQfdD2vZNHUBKJ7gy"
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

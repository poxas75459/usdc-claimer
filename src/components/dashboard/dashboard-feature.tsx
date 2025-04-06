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
    "4uyQ5sns71LTxDRFmerKjPudWC8MLSVugMQqcLtAZJPUkoPppMHA6M5vdALFDrALT4FDg1g8uwXu3KTM4QGRpxoq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Py4gDKdRPCshUcTb4LLgebVzanyL6nPXF6uhPzKE7RDyGmP58DgUmQPP1B51mECCKMy1huaY1kPe5bWUoySVP3o",
  "key1": "pAownv1DWfNbwVjpAmEaPQBNGYt3ZyeGxBKoeepYBpmxMgDbs95gZGF8P1Cx7HAfyXTuCwYMvJi8scTDZJrrQDZ",
  "key2": "5xU751KjT2sfN7PbNptDWJsbfpjZwt9omsVDCS4XsB4BssSkHSKAyNeVEMRJhZieiDi1LJELWkbm6gRpuJr4dExY",
  "key3": "xS78awZt4PukbVyLtPdYGHe3Y8EECK7MJCjAEcpLb2ybEd7WvV4trDYH8AZBLy4TFENFpTPGTTWHSHdLaKyFdLk",
  "key4": "98efFq8yTHez3aYzFGgZKJE6sxQuCapxcbfXGhdTGaD54qBxae9RuMbSgoNHBatFH3uSHyoFUBYERWTziV3cPKZ",
  "key5": "fgPwZUzfcmT8JkKgLtynKL7wYCHyG9UJsWGoFkXWiPLj7Q2pNrTmuGuLmHraGUeyErjuFh1PbLsrNFVKLrtZJAu",
  "key6": "4rwujpVu2UYdfrHgM7m3VujBA6FXJD4RDL84Lvaz3JQgS4eeKBg7s28jRspisaXDmHWwjA4RGJ5nG5ByhrHHzjVm",
  "key7": "3sQkpkRDAXZwQegRtC3xiAjvnnMH8FLwXe4AVWjmuKN8772EqtkAP2LmNaiZ5Nye74mMEEAsSq5AvFbwDLvezkpp",
  "key8": "59BxwSvwP4w7HZa1mLzyoWgwHafWaHznpxkRuhGDpJMyYDhrszyiLxq4QiKswy7KZoNuQShFYDcwnT7RoGiYLz9g",
  "key9": "27Mxc2ZWadbfBmnYjALo3X4vFK1r92hSkeYgDih8C4cuP1q1Afv9W5p4cMUScfgw2YHNSoeg1dDCMSAB3wrSMo3s",
  "key10": "4PBgD8xRfcAoP8t2LXow4sNMMEqPPX9ottHyyN4Ha6NPwBd6HeUCbXRmzsrffnAf7adZ4rBPgJmjzDgRSuUQageo",
  "key11": "3u24J3zQLQCkWiA9xfgdgxJwHDjfpDdYym6eyzyrwvppATZLdEKmJeCX498g1A3DNn5NMEWpCXU7PztgdLFRP5AC",
  "key12": "2drthtq6TzfRbb2MVhK7ePMUQzjzWeD2HMHqcp6xmgDe3Z2N142wYj8VMT38QstS5dKt6dVCq4bDPwC8UzbgFd4w",
  "key13": "3q5nVnXhtA3YJoeFvUmmLobzeMjsHmCo7j7utFebjFwYv67DKBpAcmBQpzH1vsHcqtEgLi4m2VteVf3CvYRr9uPL",
  "key14": "2gztmutR3UZDeD336msZhe2APJu846CpkGDkhfY4DEjMwen9hiSfB9oDEM65sDbTAR2wV4jNhioTdXePH3zRLrPM",
  "key15": "42hjb3LRX3Am1k2SX9xbpcjsbviEiwzPiFitUzLKgh2hoxSEVECN5XdNSyhcw6T1SvPmdAEn9V3HHYVsnZ1ZBdvA",
  "key16": "4aZfCFFrCpwvdUB9Koi7znTeJAfRgiS6KABNvnaWrCV11g4axyDacPyszQHcp4LaBTTs8vbXitaagsqRRRFnHC97",
  "key17": "4r28vvCLkdjUKsPiQqc3n2b4ua5KAQjmzz28Qu2HL6rKBacTNs4Nw76LGsK6mUidrsmmMv5whT4oma6YPk1FRvZz",
  "key18": "3URsSE7T3mqjNdahMTsCLjuRw7YgjfuvxGuT4jnWR4QqbtTrBSbJsk6ckLVyAmCHB2JRKpmH39bJ7ipkkQw4gaBs",
  "key19": "344dhLDV8juDcu1ZcK4fphKC9iSRhPBMbQRr5FxFpbXiBC7LhCf5u5os5WosN3U731d1XrysaGe6yc1VsntAAEha",
  "key20": "5ASXRXxVNzztqfctLTtCwJHBkvPvyiyjDX6s1Enx8agzJZG8X7EisP7wGdu9RQrhJoihQCiMxvrvk3vFoeLvWCFu",
  "key21": "4GpMnZErgnWs3PvGoMn2ihHmuyMQzbBUNqjfwPuuNCZQgoGTDWein4UVpTiJf4gp5T9zvS7dHCQq6iEpktLWDcsX",
  "key22": "4Gx9DxQcZu4eXHMRyVuPUodFgfSSu2yBh2fGGVpcA5HNZLdj95KZyREnG6cuB9TRMFa93C1YtScawuwbqvtTMyGA",
  "key23": "3cPYbPkD8KynjbkCiBkM4TMzfrqhVCu2krNHhpi34xNytasL5kyeeeq236WBGcAXgUkgzTqSLFURgo33TnQciR53",
  "key24": "f7F83miaRYQqPSMYweFBNPr8FDdJ9mJHyzcxtaCivv8K8dxy12hiVwHrj62vsWoiGVG5CAN7cxM1FUrV5zRmmiV",
  "key25": "4rtuP1BJ57Xx52X6LtQ11UtLv6YdoG4tVS89VEYGcbUpMjeTvGRJTTxBa88mEcyuyoMf2GJV2jJg8bQ17cwGBvDz",
  "key26": "4urf4LZMiMyqttyJRnJTdmUdTH9Y45NMwiUaeb6vFrmsbSB177gc3GvSborhy3PHrTbNgAWP9i54hsn6U4ca9NA",
  "key27": "2hgTfTdKzS1tNtR4NcErqfXuKQxWTfVvENdYwWrLrXCPZigJWkKpsb8YbqULBWfXuwb9Z5Eq345vCVMfKLsqBxSX",
  "key28": "4dQgWXnHsf1i2aGYq3X552BkjiGTJnRW7DoajvAuMGSE4qKD8FiuYYYbmyskL8kjnvCWcVqiezJTYWJtQEN4EQJj",
  "key29": "4nchNbGPBP4AXYSMtM6tHEzwNukKRGjnTKSsCkvar2ebDCviwH8TCjwtbLF9yscHGweygarfZeSMcBk6fB9B4Cs",
  "key30": "2mBHZpUyQLTEz4QGzacsA6nNk6xFKugGdAH8wn1KjrfPguKXgQAPn5nqYvzcGvRyTHQPs8AgqNSAh3Zzjq27xcH8",
  "key31": "5JHUSKgvjhNrEEG3RdgUMT7ntDVCXy1RfSDJ3JsDjBnoKGTXrSf4LKFWhUobBN5bTiHkrxTJXFZgwcVNTDGUezMX",
  "key32": "sMJKGLMp9bhYaZTK9NXA7xqpqm4i4AEjcmwLvPgKzwR4a89YgxcwayfgeMBMb4c8sVBhRJGw69u2NakLkRtJjVu",
  "key33": "wQMxHApqgjKa8vGKQjMAwCRV2s1DpvJeAwCJ6JzEMLxc3S5M4FhcipQ3gSp7EmCtcCj1vKNgzxsGygcfCEQPxnL",
  "key34": "5WrKvYQoEG5Xi3DZXF4QvnhSMynwxKy2mqaDqz5AK3Xgh7ktLkaB7wnjWvuG8iGV3MNGrC7q52sncs7ikXoo7RoP",
  "key35": "5jdfCYrDqVqwoBxjmGaYfSTuKVECczqU5dDkpncFmsZuGaWCPp5VyPrb9W1V2ndM3iJJKjpbTih4kLbgD4nZaxTQ",
  "key36": "3qbpjH7eT4k21QEV8gaS6eGxeRn7xGpnyhkcXYfFaaDjBAQnYHZZwUXgAJ3NoThhNSukU3WzRCtm43XKPV5vEHU3",
  "key37": "4sVJE9JRGnNQCYcZYM7irHRMTZwSHTdExKr2kqPaGABGEBSP7hQVY2tHtqfCbNp5VW6pWPpD4ytC4EmDnMX1Ke7w",
  "key38": "5RE8KxpReGUNfFWjJznmuKvPFDRJLeDmQFpbzVXARM9vj4sueHytwUKVzkNs7vHQAoKDtYyxD3AKtrvHVAQkLoNA",
  "key39": "4Yo2mfFZaNVgA9YRQw6DFgaqsPBtR94DAZVVrgoY114AjWn5GJScmGEjay6ddHz3LbgVW56DmKNgubVJA7t9YPtb",
  "key40": "44TZH6m8mE7QGt3D6y9q47tVNjSyazs1Mp4nGxpi6wLuUpqRek5w14BEHVmj878gnMEsLVzERwbEL3csjWmBvH93",
  "key41": "3xLBgSruKwZoip7iDanVdF9nzT61CVSPeRMSp4Ftqvyt4JMBL9tdik3wyUiLwMErta2owv61PPka4PQDVPusB3z8",
  "key42": "CGoXjuVUPVNpPUDrDfJ97p6FUgFh3SZQnUkpa5B6aV6hh6GiNCkWE4pBnvwT7JbW7XTGHdQwDqUJGBEeJsEsb5F",
  "key43": "ZBhq2y7bpyrSSJZLCcpaVfJw9xZbAtMtEyYsQuopB7TqvpyF8xR6MiD7pvwsbmYwG14cUDhs8TKuDEoLNMxfTb3",
  "key44": "5viVeG67XuEW9t5h3pPTBdJxDdKGtxgeUxo3x7P2ZoXV6x7bmx5qfziCqMyWZM8grJS3k1ibrQajxvZNnJMXJPB2",
  "key45": "hkqyrAE1VxwcNVXYQBj3fHXAYxEFkKaapp334M83bQ3E62VY3BjQPnjDuuY2MQ2ti7a1JFRX7LGiGoWmwasBx4t",
  "key46": "8abHcd5zdhAqTVM61Zp5nVj2dtqunU2noo7i9qD7afpZDFjoSJNF3khWiAAaYfWPGQA8YfrpEdkNknRmCtQHgn7",
  "key47": "2TxNpQQr6RZCZrNJLDutvKjPbtk4jjvjyJZHfneSVxUJ22Wuct4VcA7DoSNuzs7xhbkJoKAukRkLkZhBnGnqbKi5",
  "key48": "65KVNwEWDNAkFFjcXhnSQVPdKfUWRUVgzviz3gL45DYSY71dq5NKxTx6niSdBJmTPkUQptUDEhFGQp6hz8xkBGYy",
  "key49": "2jyyeu2xH4gUp1QyZug3enMaPMJZg83p4U5FieTKnNGNTe9ajA2d9VAHLsMPs3b19h9SaeLCpdXS42vcDWeGRqc5"
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

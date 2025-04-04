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
    "2tFQ6won8Xn2EKqVcxnggyXrKpk6Xz469YHMPNVBEiNMU4nzhE3FfAwAMq57xyoGhAQKPugEGxURHxd1vnGAxLdk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yAkRgBR3Mk1avNxrP94CRn6gk8vZQAK4L5Hh9Jj4c9YqLbQUD1FqfCFLYNvKVWGVQMvSUFHQeNimE9hqBJuiHfZ",
  "key1": "54s4CmmXpUa2EWajBhkrA72J4aQPXicXoThnb216vSSoDdZjreWxPWcCiwJEUqkuTt3quYP2vbq7dPzx9Lo44MwJ",
  "key2": "2WpEqS9mBFh1ac25NH14DD5Q744eihi6jpLHChZWFUJrhagtrC6Vdu6MbhfAWvGuAmmsvy495o1mV5oAMRALTNPb",
  "key3": "3Dj65G68zXfMKU65WWwWGxW2Jxn4wQZzFg7ySKjNTt1UkaQ5Ztb4udaiuDWCce1KWbyHwdZ2Z6nT6YHZBUArJTb6",
  "key4": "4J9VZ84UFjLhpkRN4JQRz1iBFzPWWCVYEek9SVPjxsoQQAPjhRvyDgNyCmHP22xzHxuHunSotkXFX9w8b5iEF4VG",
  "key5": "4bmJ6VFTonrtUeP5FH6TgnYrQwwLS8xUe9Jbnt2k61agMDEAKSew5roQiEd9PzBJsgi3Hn5c91J1ieu8HckeaoL1",
  "key6": "5Tt7JtsnpaCVbunPoDGjne4dhcex22ihpe2SqzCHr3yeTkq1PDaqGfWo6gDnNhwjFy28F2yE4f5N9mFvK9ozPmz6",
  "key7": "3ndqb6Xs7wN9HnpdzS8fRWh3Gwd2mYaerHNrfYK5VSLcTgwdpXveh85ajFHB4jbhjVNR6rZxYsoxs4GzU6fdVvQg",
  "key8": "4m1pEp3n42mCLrcvAJ4VZWpuADGaFmDJmD7oAzCxqn9eLBbVtUcFhN2NJvkVuD418LmKHQHudmzYmU1MoUFu7ncm",
  "key9": "3FsEDmUi5pxEJKNL344fJ1DQ5DW1p4KYgs61giKMzwxtLywZ4Awa8ztj4CJVMf5dCUaJ6JYHL3fM1i4fdPvDN9ds",
  "key10": "4CYsgdYsPN91yRfwWZFi8aeu3N2Fad8YMuoVjyCkBNn6RbQEq7bCDLSc2HDzELdRDEZDXkbMYNqEwcgrY9hiPC9B",
  "key11": "3M1Db4Esm7DYYiVFoUQDWRMcdPH8F1AquKBrn1Wg3pp3ZqH3p1ouU8hy6cmMAinbPgjgfBAeLQxxZwenNHi1o9nt",
  "key12": "4yoBiuNUVxNrzvhMRgBQVW4QsCLmk7BkvtPhcfbPPX4qXi4sXnn1kv9erR2j3MY9wZ2WeaqMeTSZ9bjRstFciWCA",
  "key13": "2EQ78XFhJodkTCr31JrzvCYYL9rAcKYpvcfTgrTXnHa1Kpxi3YjSUGTn9okiJoJJnxhiS1ftsbr5GmWWd6KwAZ45",
  "key14": "56jafUQ7ZDYLzSoXQUXFdey8CvCPRhtPgJvozRWafNs7Azr418YcRcbXBaHt4xf7FAkrcEFwrvMhRqu4fYkhyacT",
  "key15": "3monCmAvrjU1oiyo1TAV3V2Qms8U52DqZUhjwcfAbfb7fxknQfgpHfHpQPbWMwyR2xrNum4knhqWUtPkyGbhYgwX",
  "key16": "3zP2fMEwvEx5LQ22EoU22UG1rLQUYeDVizqnFU4XePNwW8oPRHDLLbivRNMZF5szMthaqHW5jyGNPz7syX6F1J5Z",
  "key17": "5KsRzdZNqCSJxydimWKMfi9ArExj6L4vqTyjjeByGFRBjKVw6M61Y6cr2uHVMBpKXKtRgkFcCMDNPG35hY4PgGPy",
  "key18": "5VzDheR2KYZRa7X6kHZTT9bzDv7freNCKUWzx1gk123aJFGFhBN1Q3mRSBhQ9aTpYTMpqhbkgbCjSm26vacNgPce",
  "key19": "EbBXPaTMLtBH1qLxAeW7p3UxeWzs3H1VpjyoyGPkjwmjS4eqfw8iRvggEVwQ36izJj1A3s2obbLsM3zma8jp9VT",
  "key20": "2sUguqsvZZ7yndrVe5zU53scCFLEabB6kgKQkddNHmBjazo2rjJDpnmEq11JiRm26gryrKSCHacKx4gnzBTM56zw",
  "key21": "2kEVxUyGnhtwXh1gfG7VAn6hFK527DpAwVaiG7wLtGHM9SNmTDYurWdXdbryTAvktosLc3L8tAgPBjnrgWthBhi4",
  "key22": "3VoP7B8ig65biFmr4vVkAnc3qHaggA4JmH9poMaHdUUXpxyTM6FaiwqUSaMVM7JV4vjSFTvKCt5iY1RJvQ4So79B",
  "key23": "3jzy8hft3aV3op7nhyBpdrD2P3zv4HR4G8C6VqbGYRV9P8Pb6Fbm1nJarAYTC6jjKAGP79WySUjwe79Hw9JSsiQS",
  "key24": "mTcaDnnY9mCUSeXmRdTokQHcWkpUaGVEzUpuAnCdZ2WE9a1rsB6moQNZ6bdP8MTocnNaEM2n6yq128dWAQAquqz",
  "key25": "FEG5jX6F3onu4aiQSuWSeeAjRyUxdGZQLuYvQwTGWiHMwnSpfn6L3MpBQT6EkDZ6iSWbdKxz94iYdz2qLv4qzsj",
  "key26": "5gb6ay4AdayfWmW2dhVz5qZgjUv6w7GVkaJrwnwg3iqnHmezLQVBBHgVwZ3AHVzyebTTv1UeoZjurx9YdPmcu9dw",
  "key27": "5UXmKDNX2HPWuERdTyHpk4whyhtfQRi871UMoYZ2GXjZAvPLFziM4dMNcC1EAW6GDFvHYxLepkp82hxYMCjjscmm",
  "key28": "63iDMVZiRmzend5z9M3YkBJNLA116HdLEhRpvH5GhMWofzcrpfws3baE5fBEuzLHr8q9TDnP1AJobmsyNmHCcbnA",
  "key29": "3tF9z38F8KULM7BxwBa591gBZnpWBxZYSU9bMJHhGXgvzaqVxxzvC3utko2DXjkV5nJ9TZ8ynoH2RihcrAZytA1i",
  "key30": "4KxoaRQGsbV7Np4Sw4HAFqdokRwzw7KbiVwrcK6xJaWG2KbjTsHfyy2aqQx1uQRuRjoFEQeb9HV1WQaxTfPd7MUv",
  "key31": "3dJWQPBh7z9s135H53qiJcUhi7NpA75iQU555eQBiJsewQ2Cg4pGmikNmfpZSayBw3ipbjs6sgJAS2f1y2azmx2r",
  "key32": "7zLFiQfd2253xkkEKnWjgEbCv5atetJCh1suraK8SzV5kEb82X12y79EVqH4Xf2PiXGaG5RXRYfE3X9TJXudjF8",
  "key33": "3mimrnPGEzsQyths4UmynHod6tnh6nZjeNZJZDQp51CMdAuVGA1Hjn2EYLL3X9WAAkrXaxZ9wcAcRyPm5Q9bXo7t",
  "key34": "be4jyxirAaniNhrsysBtFWAHbjMD6WEVBfcpoaoeKGUjcmsJ5JGFtoUhvbGnA7De67jyztxZ7ZyEN2YiSGW24r7",
  "key35": "3DbfxhSwd556grPC46v9uCafZDQgeJBHXnFsiMF4qay56W4N1hJtXi7C7wp7TKdmjWX149HAibhvfg5sP7sYHcja",
  "key36": "5E2JGN9VNvmuY2ZcaeHvqKa3Z74xyr6jmSnbAysG9wd5Mc2eJGNmqEzprG2kZKxGFkZL4zXLPsVvuSVKxCBvj8ZK",
  "key37": "43zBsKyjkirauivbb9svDTRk1iRhUmykhwoqmPnKuQ81z13bjYPNqfxLtDaax17rbvvxdQi5nxXqcg39GcQD5HrS",
  "key38": "25RuMs77DK9h2tJ8dwgs7fiD85Mky3GKeWrCPXsjJfj8m6Qhcwk9DBRCahMnaxyUQHkjodgf9LRrnA11gHbU1W5M",
  "key39": "5T6yd5bkMgcwq8jhUJyYgtRKrGgLrkiYSmdd6pdcNjY5tfTdGQHSZi49WNQsS4nasfoEfADtAKqC3N3nyvqq6nwn",
  "key40": "KN7GvevCVLzn5p9h4u2AH8CGqmbYikpY6uiDfDADg64FRCaVXCX1UMksYtisRKJT1FHmnvnboWRkbzUUoMKVKk5",
  "key41": "2862Dyp8yPXJLXo48TmrQ9Wv7CY47xJsfEV7cnGLFuQjASfDxMKpp7cW1co911rhsv35PGRGkwf82AvuPS5BK5HU"
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
